// ============================================================
// MiModex — CLI Bridge Service (Tauri Shell → mimo CLI)
// ============================================================
// 在 Tauri 环境中优先通过 ACP 调用随 MiModex 打包的 MiMo Code sidecar。
// 老版本/开发环境不支持 ACP 时回退到 stream-json stdio。
// Release 构建会自动准备当前平台 sidecar；系统 CLI 仅作为开发兜底。
// 浏览器/Vite 预览使用离线演示流。
// ============================================================

import type {
  CLIOptions,
  CLIStreamCallbacks,
  CLIStreamEvent,
  PermissionResponseBehavior,
  PermissionUpdate,
  RuntimePermissionRequest,
} from '@/types';
import { useSessionStore } from '@/stores/sessionStore';
import { MULTIMODAL_LABELS } from '@/constants/mimoCapabilities';
import { isDesktopRuntime } from '@/services/config';

// ---- 活跃子进程句柄 ----
type ShellChild = {
  kill?: () => void | Promise<void>;
  write?: (data: string | number[]) => Promise<void>;
};

let activeChild: ShellChild | null = null;
let activeAcpSession: ActiveAcpSession | null = null;
export type MimoEngineMode = "unknown" | "embedded" | "system" | "unavailable";
let engineMode: MimoEngineMode = "unknown";

/** 从 sessionStore 读取当前 API Key 和 Base URL，注入为环境变量 */
function getApiEnv(): Record<string, string> {
  try {
    const { apiKey, baseUrl } = useSessionStore.getState();
    const env: Record<string, string> = {};
    if (apiKey)  env['MIMO_API_KEY']  = apiKey;
    if (baseUrl) env['MIMO_BASE_URL'] = baseUrl;
    return env;
  } catch {
    return {};
  }
}

/**
 * 向 mimo CLI 发送消息并流式接收响应。
 * Tauri 环境使用真实 CLI；浏览器/预览模式使用离线演示流。
 */
export async function sendMessage(
  prompt: string,
  options: CLIOptions,
  callbacks: CLIStreamCallbacks,
): Promise<void> {
  const finalPrompt = buildPrompt(prompt, options);
  if (!isDesktopRuntime()) {
    return demoStream(finalPrompt, callbacks);
  }

  try {
    return await sendMessageWithAcp(finalPrompt, options, callbacks);
  } catch (err) {
    callbacks.onEvent?.({
      type: 'stderr',
      message: `ACP transport unavailable; falling back to stream-json: ${err instanceof Error ? err.message : String(err)}`,
    });
  }

  return sendMessageWithStreamJson(finalPrompt, options, callbacks);
}

async function sendMessageWithStreamJson(
  finalPrompt: string,
  options: CLIOptions,
  callbacks: CLIStreamCallbacks,
): Promise<void> {
  try {
    const { Command } = await import('@tauri-apps/plugin-shell');

    const args: string[] = [
      '-p',
      '--output-format',
      'stream-json',
      '--input-format',
      'stream-json',
      '--include-partial-messages',
      '--permission-prompt-tool',
      'stdio',
    ];
    if (options.model)        args.push('--model',          options.model);
    if (options.effort)       args.push('--effort',         options.effort);
    if (options.permissionMode === "bypassPermissions") {
      args.push('--dangerously-skip-permissions');
    } else if (options.permissionMode) {
      args.push('--permission-mode', options.permissionMode);
    }
    appendPermissionRuleArgs(args, options.permissionRules);
    if (options.maxTurns)     args.push('--max-turns',      String(options.maxTurns));
    if (options.systemPrompt) args.push('--system-prompt',  options.systemPrompt);

    const env = getApiEnv();
    const command = await createMimoCommand(Command, args, { env });

    let buffer = '';
    let fullText = '';
    let sessionId: string | undefined;
    let stderr = '';
    let receivedTextDelta = false;

    command.stdout.on('data', (data: string) => {
      buffer += data;
      const lines = buffer.split('\n');
      buffer = lines.pop() ?? '';

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed) continue;
        try {
          const event = JSON.parse(trimmed);
          handleStreamEvent(event, callbacks,
            (text, source) => {
              if (source === 'assistant' && receivedTextDelta) return;
              if (source === 'delta') receivedTextDelta = true;
              callbacks.onChunk(text);
              fullText += text;
            },
            (sid)  => { sessionId = sid; },
          );
        } catch {
          if (trimmed.length > 0 && !trimmed.startsWith('{')) {
            callbacks.onChunk(trimmed);
            fullText += trimmed;
          }
        }
      }
    });

    command.stderr.on('data', (data: string) => {
      const msg = data.trim();
      if (msg) {
        stderr += `${msg}\n`;
        callbacks.onEvent?.({ type: 'stderr', message: msg });
      }
    });

    command.on('close', (data) => {
      const tail = buffer.trim();
      if (tail) {
        try {
          const event = JSON.parse(tail);
          handleStreamEvent(event, callbacks,
            (text, source) => {
              if (source === 'assistant' && receivedTextDelta) return;
              if (source === 'delta') receivedTextDelta = true;
              callbacks.onChunk(text);
              fullText += text;
            },
            (sid)  => { sessionId = sid; },
          );
        } catch {
          fullText += tail;
          callbacks.onChunk(tail);
        }
      }
      activeChild = null;
      if (data.code !== 0 && data.code !== null) {
        callbacks.onError?.(stderr.trim() || `mimo 进程退出，code=${data.code}`);
      } else {
        callbacks.onDone(fullText, sessionId);
      }
    });

    activeChild = await command.spawn();
    await writeToActiveChild(buildUserInputMessage(finalPrompt));
  } catch (err) {
    callbacks.onError?.(String(err));
    callbacks.onDone('', undefined);
  }
}

/** 中止当前流式请求 */
export function stopStream(): void {
  if (activeAcpSession) {
    void activeAcpSession.cancel();
  }
  if (activeChild && typeof activeChild.kill === 'function') {
    activeChild.kill();
    activeChild = null;
  }
  activeAcpSession = null;
}

export async function respondToPermissionRequest(
  request: RuntimePermissionRequest,
  behavior: PermissionResponseBehavior,
  options?: { remember?: boolean; message?: string },
): Promise<void> {
  if (activeAcpSession?.pendingPermissions.has(request.requestId)) {
    await respondToAcpPermissionRequest(activeAcpSession, request, behavior, options);
    return;
  }

  const payload = {
    type: 'control_response',
    response: {
      subtype: 'success',
      request_id: request.requestId,
      response: behavior === 'allow'
        ? {
            behavior: 'allow',
            updatedInput: request.input ?? {},
            updatedPermissions: options?.remember
              ? getSessionPermissionUpdates(request)
              : undefined,
            toolUseID: request.toolUseId,
            decisionClassification: options?.remember ? 'user_permanent' : 'user_temporary',
          }
        : {
            behavior: 'deny',
            message: options?.message ?? 'User denied permission',
            toolUseID: request.toolUseId,
            decisionClassification: 'user_reject',
          },
    },
  };

  await writeToActiveChild(`${JSON.stringify(payload)}\n`);
}

async function endActiveSession(): Promise<void> {
  if (!activeChild?.write) return;
  const payload = {
    type: 'control_request',
    request_id: crypto.randomUUID(),
    request: {
      subtype: 'end_session',
      reason: 'MiModex single-turn request completed',
    },
  };
  try {
    await activeChild.write(`${JSON.stringify(payload)}\n`);
  } catch {
    // The process may have already exited after emitting the final result.
  }
}

/** 检查 mimo CLI 是否可用 */
export async function checkCLIAvailable(): Promise<boolean> {
  if (!isDesktopRuntime()) return false;
  try {
    const { Command } = await import('@tauri-apps/plugin-shell');
    const command = await createMimoCommand(Command, ['--version']);
    const result = await command.execute();
    return result.code === 0;
  } catch {
    engineMode = "unavailable";
    return false;
  }
}

export function getRuntimeInfo(): { isTauri: boolean; mode: "desktop" | "browser-preview" } {
  const isTauri = isDesktopRuntime();
  return {
    isTauri,
    mode: isTauri ? "desktop" : "browser-preview",
  };
}

export function getMimoEngineMode(): MimoEngineMode {
  return engineMode;
}

type ShellCommandFactory = typeof import('@tauri-apps/plugin-shell').Command;
type SpawnOptions = Parameters<typeof import('@tauri-apps/plugin-shell').Command.create>[2];

type JsonRpcId = string | number | null;
type JsonRpcMessage = {
  jsonrpc?: "2.0";
  id?: JsonRpcId;
  method?: string;
  params?: unknown;
  result?: unknown;
  error?: { code: number; message: string; data?: unknown };
};

type AcpPermissionOption = {
  kind?: string;
  name?: string;
  optionId?: string;
};

type ActiveAcpSession = {
  child: ShellChild;
  sessionId?: string;
  pendingPermissions: Map<string, { rpcId: JsonRpcId; options: AcpPermissionOption[] }>;
  sendResponse: (id: JsonRpcId, result: unknown) => Promise<void>;
  sendError: (id: JsonRpcId, code: number, message: string, data?: unknown) => Promise<void>;
  cancel: () => Promise<void>;
};

type AcpRequestState = {
  resolve: (value: unknown) => void;
  reject: (reason?: unknown) => void;
};

class AcpStartupError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AcpStartupError";
  }
}

async function sendMessageWithAcp(
  finalPrompt: string,
  options: CLIOptions,
  callbacks: CLIStreamCallbacks,
): Promise<void> {
  const { Command } = await import('@tauri-apps/plugin-shell');
  const env = getAcpEnv(options);
  const command = await createMimoCommand(Command, ['--acp'], { env });

  const pending = new Map<JsonRpcId, AcpRequestState>();
  const pendingPermissions = new Map<string, { rpcId: JsonRpcId; options: AcpPermissionOption[] }>();
  let nextRequestId = 1;
  let buffer = '';
  let fullText = '';
  let sessionId: string | undefined;
  let stderr = '';
  let finished = false;
  let promptStarted = false;
  let child: ShellChild | null = null;

  const writeMessage = async (message: JsonRpcMessage): Promise<void> => {
    if (!child?.write) throw new Error('ACP 进程尚未准备好接收输入');
    await child.write(`${JSON.stringify({ jsonrpc: "2.0", ...message })}\n`);
  };

  const sendResponse = (id: JsonRpcId, result: unknown) =>
    writeMessage({ id, result });

  const sendError = (id: JsonRpcId, code: number, message: string, data?: unknown) =>
    writeMessage({ id, error: { code, message, data } });

  const request = async (method: string, params: unknown): Promise<unknown> => {
    const id = nextRequestId++;
    const promise = new Promise<unknown>((resolve, reject) => {
      pending.set(id, { resolve, reject });
    });
    await writeMessage({ id, method, params });
    return promise;
  };

  const notify = (method: string, params: unknown) =>
    writeMessage({ method, params });

  const closeWithError = (error: Error) => {
    for (const [, state] of pending) state.reject(error);
    pending.clear();
    pendingPermissions.clear();
  };

  command.stdout.on('data', (data: string) => {
    buffer += data;
    const lines = buffer.split('\n');
    buffer = lines.pop() ?? '';

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) continue;
      try {
        const message = JSON.parse(trimmed) as JsonRpcMessage;
        void handleAcpMessage(message);
      } catch {
        callbacks.onEvent?.({ type: 'stderr', message: trimmed });
      }
    }
  });

  command.stderr.on('data', (data: string) => {
    const msg = data.trim();
    if (msg) {
      stderr += `${msg}\n`;
      callbacks.onEvent?.({ type: 'stderr', message: msg });
    }
  });

  command.on('close', (data) => {
    activeChild = null;
    activeAcpSession = null;
    if (!finished) {
      const message = stderr.trim() || `ACP 进程退出，code=${data.code}`;
      closeWithError(new Error(message));
      if (promptStarted) {
        callbacks.onError?.(message);
        callbacks.onDone(fullText, sessionId);
      }
    }
  });

  child = await command.spawn();
  activeChild = child;
  activeAcpSession = {
    child,
    pendingPermissions,
    sendResponse,
    sendError,
    cancel: async () => {
      if (sessionId) {
        await notify('session/cancel', { sessionId });
      }
    },
  };

  try {
    await request('initialize', {
      protocolVersion: 1,
      clientInfo: {
        name: "mimodex",
        title: "MiModex",
        version: "1.0.0",
      },
      clientCapabilities: {
        auth: { terminal: false },
        fs: { readTextFile: false, writeTextFile: false },
        terminal: false,
        positionEncodings: ["utf-16"],
        _meta: {
          terminal_output: false,
        },
      },
    });

    const sessionResponse = await request('session/new', {
      cwd: await resolveAcpCwd(),
      mcpServers: [],
      _meta: {
        permissionMode: options.permissionMode ?? "acceptEdits",
      },
    }) as Record<string, unknown>;
    sessionId = typeof sessionResponse.sessionId === "string" ? sessionResponse.sessionId : undefined;
    activeAcpSession.sessionId = sessionId;
    if (!sessionId) {
      throw new AcpStartupError("ACP did not return a session id");
    }
    callbacks.onEvent?.({ type: "system", subtype: "acp_session_started", session_id: sessionId });

    if (options.model) {
      await request('session/set_model', { sessionId, modelId: options.model });
    }
    if (options.permissionMode) {
      await request('session/set_mode', { sessionId, modeId: options.permissionMode });
    }

    promptStarted = true;
    const promptResult = await request('session/prompt', {
      sessionId,
      messageId: crypto.randomUUID(),
      prompt: [{ type: "text", text: finalPrompt }],
    }) as Record<string, unknown>;

    const usage = promptResult.usage as Record<string, unknown> | undefined;
    if (usage) {
      callbacks.onEvent?.({
        type: "result",
        session_id: sessionId,
        usage: {
          total_tokens: usage.totalTokens,
          input_tokens: usage.inputTokens,
          output_tokens: usage.outputTokens,
          cache_read_input_tokens: usage.cachedReadTokens,
          cache_creation_input_tokens: usage.cachedWriteTokens,
        },
      });
    }

    await request('session/close', { sessionId }).catch(() => undefined);
    finished = true;
    callbacks.onDone(fullText, sessionId);
  } catch (err) {
    if (!promptStarted) {
      finished = true;
      await child.kill?.();
      activeChild = null;
      activeAcpSession = null;
      throw err instanceof Error ? err : new AcpStartupError(String(err));
    }
    finished = true;
    callbacks.onError?.(err instanceof Error ? err.message : String(err));
    callbacks.onDone(fullText, sessionId);
  } finally {
    pending.clear();
    pendingPermissions.clear();
    activeChild = null;
    activeAcpSession = null;
    await child.kill?.();
  }

  async function handleAcpMessage(message: JsonRpcMessage): Promise<void> {
    if (message.id !== undefined && !message.method) {
      const state = pending.get(message.id);
      if (!state) return;
      pending.delete(message.id);
      if (message.error) {
        state.reject(new Error(message.error.message));
      } else {
        state.resolve(message.result);
      }
      return;
    }

    if (!message.method) return;
    if (message.id !== undefined) {
      await handleAcpRequest(message.id, message.method, message.params);
      return;
    }
    handleAcpNotification(message.method, message.params);
  }

  async function handleAcpRequest(id: JsonRpcId, method: string, params: unknown): Promise<void> {
    if (method === 'session/request_permission') {
      const requestEvent = buildAcpPermissionEvent(id, params, options.permissionRules);
      if (!requestEvent) {
        await sendError(id, -32602, "Invalid permission request");
        return;
      }
      const autoDecision = resolveAcpRuleDecision(requestEvent.request, options.permissionRules);
      if (autoDecision) {
        await sendResponse(id, {
          outcome: {
            outcome: "selected",
            optionId: chooseAcpPermissionOption(requestEvent.options, autoDecision, autoDecision === "allow"),
          },
        });
        return;
      }
      pendingPermissions.set(requestEvent.request.requestId, { rpcId: id, options: requestEvent.options });
      callbacks.onEvent?.(requestEvent.event);
      return;
    }

    await sendError(id, -32601, `"Method not found": ${method}`);
  }

  function handleAcpNotification(method: string, params: unknown): void {
    if (method !== 'session/update') return;
    const event = handleAcpSessionUpdate(params, callbacks, (chunk) => {
      fullText += chunk;
    });
    if (event?.sessionId) {
      sessionId = event.sessionId;
      activeAcpSession!.sessionId = sessionId;
    }
  }
}

function appendPermissionRuleArgs(args: string[], rules: CLIOptions["permissionRules"]): void {
  const allow = rules?.filter((rule) => rule.type === "allow").map((rule) => rule.pattern.trim()).filter(Boolean) ?? [];
  const deny = rules?.filter((rule) => rule.type === "deny").map((rule) => rule.pattern.trim()).filter(Boolean) ?? [];
  const ask = rules?.filter((rule) => rule.type === "ask").map((rule) => rule.pattern.trim()).filter(Boolean) ?? [];

  if (allow.length > 0) args.push('--allowedTools', ...allow);
  if (deny.length > 0) args.push('--disallowedTools', ...deny);
  if (ask.length > 0) {
    args.push('--settings', JSON.stringify({ permissions: { ask } }));
  }
}

function getAcpEnv(options: CLIOptions): Record<string, string> {
  const env = getApiEnv();
  if (options.permissionMode === "bypassPermissions") {
    env.ACP_PERMISSION_MODE = "bypassPermissions";
    env.CLAUDE_CODE_ACP_ALLOW_BYPASS_PERMISSIONS = "1";
  }
  return env;
}

async function resolveAcpCwd(): Promise<string> {
  try {
    const { homeDir } = await import('@tauri-apps/api/path');
    return await homeDir();
  } catch {
    return ".";
  }
}

async function respondToAcpPermissionRequest(
  session: ActiveAcpSession,
  request: RuntimePermissionRequest,
  behavior: PermissionResponseBehavior,
  options?: { remember?: boolean; message?: string },
): Promise<void> {
  const pending = session.pendingPermissions.get(request.requestId);
  if (!pending) {
    throw new Error("ACP 权限请求已不存在或已处理");
  }
  session.pendingPermissions.delete(request.requestId);
  const optionId = chooseAcpPermissionOption(pending.options, behavior, options?.remember === true);
  if (!optionId) {
    await session.sendResponse(pending.rpcId, { outcome: { outcome: "cancelled" } });
    return;
  }
  await session.sendResponse(pending.rpcId, {
    outcome: {
      outcome: "selected",
      optionId,
    },
  });
}

function buildAcpPermissionEvent(
  rpcId: JsonRpcId,
  params: unknown,
  rules: CLIOptions["permissionRules"],
): { event: CLIStreamEvent; request: RuntimePermissionRequest; options: AcpPermissionOption[] } | null {
  const payload = asRecord(params);
  if (!payload) return null;
  const toolCall = asRecord(payload.toolCall);
  if (!toolCall) return null;
  const requestId = rpcId == null ? crypto.randomUUID() : String(rpcId);
  const toolUseId = typeof toolCall.toolCallId === "string" ? toolCall.toolCallId : requestId;
  const options = Array.isArray(payload.options) ? payload.options.filter(isAcpPermissionOption) : [];
  const input = asRecord(toolCall.rawInput) ?? {};
  const toolName = getAcpToolName(toolCall);
  const request: RuntimePermissionRequest = {
    id: requestId,
    requestId,
    toolUseId,
    toolName,
    displayName: toolName,
    title: typeof toolCall.title === "string" ? toolCall.title : toolName,
    description: formatAcpToolContent(toolCall.content),
    input,
    permissionSuggestions: getAcpPermissionSuggestions(toolName, rules),
    status: "pending",
    createdAt: Date.now(),
  };

  return {
    request,
    options,
    event: {
      type: "control_request",
      request_id: requestId,
      request: {
        subtype: "can_use_tool",
        tool_use_id: toolUseId,
        tool_name: toolName,
        display_name: toolName,
        title: request.title,
        description: request.description,
        input,
        permission_suggestions: request.permissionSuggestions,
      },
    },
  };
}

function resolveAcpRuleDecision(
  request: RuntimePermissionRequest,
  rules: CLIOptions["permissionRules"],
): PermissionResponseBehavior | null {
  if (!rules?.length) return null;
  for (const rule of rules) {
    if (!matchesPermissionRule(rule.pattern, request)) continue;
    if (rule.type === "allow") return "allow";
    if (rule.type === "deny") return "deny";
    return null;
  }
  return null;
}

function matchesPermissionRule(pattern: string, request: RuntimePermissionRequest): boolean {
  const normalized = pattern.trim();
  if (!normalized) return false;
  const haystack = [
    request.toolName,
    request.title,
    request.description,
    safeJson(request.input),
    `${request.toolName}(${safeJson(request.input)})`,
  ].filter(Boolean).join("\n").toLowerCase();
  const needle = normalized.toLowerCase();
  if (haystack.includes(needle)) return true;
  const wildcard = needle
    .replace(/[.+?^${}()|[\]\\]/g, "\\$&")
    .replace(/\*/g, ".*");
  try {
    return new RegExp(wildcard).test(haystack);
  } catch {
    return false;
  }
}

function chooseAcpPermissionOption(
  options: AcpPermissionOption[],
  behavior: PermissionResponseBehavior,
  remember: boolean,
): string | null {
  const candidates = behavior === "allow"
    ? [
        remember ? "allow_always" : "allow",
        remember ? "allow" : "allow_always",
        "acceptEdits",
        "default",
        "auto",
        "bypassPermissions",
      ]
    : ["reject", "reject_once", "reject_always", "plan"];

  for (const candidate of candidates) {
    const match = options.find((option) => option.optionId === candidate);
    if (match?.optionId) return match.optionId;
  }

  const kindPrefix = behavior === "allow" ? "allow" : "reject";
  const byKind = options.find((option) => option.kind?.startsWith(kindPrefix));
  if (byKind?.optionId) return byKind.optionId;

  return null;
}

function getAcpPermissionSuggestions(
  toolName: string,
  rules: CLIOptions["permissionRules"],
): RuntimePermissionRequest["permissionSuggestions"] {
  const matching = rules?.find((rule) => rule.pattern.trim() === toolName);
  if (!matching) return undefined;
  return [
    {
      type: "addRules",
      rules: [{ toolName }],
      behavior: matching.type,
      destination: "session",
    },
  ];
}

function handleAcpSessionUpdate(
  params: unknown,
  callbacks: CLIStreamCallbacks,
  onAssistantChunk: (chunk: string) => void,
): { sessionId?: string } | null {
  const payload = asRecord(params);
  if (!payload) return null;
  const update = asRecord(payload.update);
  if (!update) return null;
  const sessionId = typeof payload.sessionId === "string" ? payload.sessionId : undefined;
  callbacks.onEvent?.({
    type: "acp_session_update",
    session_id: sessionId,
    update,
  });

  switch (update.sessionUpdate) {
    case "agent_message_chunk": {
      const text = acpContentToText(update.content);
      if (text) {
        callbacks.onChunk(text);
        onAssistantChunk(text);
      }
      break;
    }
    case "agent_thought_chunk": {
      const thinking = acpContentToText(update.content);
      if (thinking) {
        callbacks.onEvent?.({
          type: "content_block_delta",
          session_id: sessionId,
          delta: { type: "thinking_delta", thinking },
        });
      }
      break;
    }
    case "tool_call": {
      const id = typeof update.toolCallId === "string" ? update.toolCallId : crypto.randomUUID();
      const name = getAcpToolName(update);
      callbacks.onEvent?.({
        type: "assistant",
        session_id: sessionId,
        message: {
          content: [
            {
              type: "tool_use",
              id,
              name,
              input: asRecord(update.rawInput) ?? {},
            },
          ],
        },
      });
      break;
    }
    case "tool_call_update": {
      const id = typeof update.toolCallId === "string" ? update.toolCallId : "";
      if (!id) break;
      const name = getAcpToolName(update);
      if (update.status === "completed" || update.status === "failed") {
        callbacks.onEvent?.({
          type: "tool_use_summary",
          session_id: sessionId,
          preceding_tool_use_ids: [id],
          summary: formatAcpToolContent(update.content) || safeJson(update.rawOutput),
        });
      } else {
        callbacks.onEvent?.({
          type: "tool_progress",
          session_id: sessionId,
          tool_use_id: id,
          tool_name: name,
        });
      }
      break;
    }
    case "usage_update": {
      callbacks.onEvent?.({
        type: "result",
        session_id: sessionId,
        usage: {
          total_tokens: typeof update.used === "number" ? update.used : undefined,
        },
      });
      break;
    }
    case "current_mode_update":
    case "config_option_update":
    case "available_commands_update":
    case "session_info_update":
    case "plan": {
      callbacks.onEvent?.({
        type: "system",
        subtype: String(update.sessionUpdate),
        session_id: sessionId,
        details: update,
      });
      break;
    }
  }

  return { sessionId };
}

function getAcpToolName(value: Record<string, unknown>): string {
  const meta = asRecord(value._meta);
  const claudeCode = asRecord(meta?.claudeCode);
  if (typeof claudeCode?.toolName === "string" && claudeCode.toolName.trim()) {
    return claudeCode.toolName;
  }
  if (typeof value.title === "string" && value.title.trim()) {
    return value.title.split(/\s+/)[0] || "Tool";
  }
  return "Tool";
}

function formatAcpToolContent(content: unknown): string | undefined {
  if (!Array.isArray(content)) return undefined;
  const text = content.map(acpContentToText).filter(Boolean).join("\n\n").trim();
  return text || undefined;
}

function acpContentToText(content: unknown): string {
  if (typeof content === "string") return content;
  const value = asRecord(content);
  if (!value) return "";
  if (value.type === "content") return acpContentToText(value.content);
  if (value.type === "text" && typeof value.text === "string") return value.text;
  if (value.type === "image") return "[image]";
  if (value.type === "audio") return "[audio]";
  if (value.type === "diff") {
    const path = typeof value.path === "string" ? value.path : "file";
    const oldText = typeof value.oldText === "string" ? value.oldText : "";
    const newText = typeof value.newText === "string" ? value.newText : "";
    return `Diff ${path}\n--- old\n${oldText}\n+++ new\n${newText}`;
  }
  if (value.type === "terminal" && typeof value.terminalId === "string") {
    return `Terminal ${value.terminalId}`;
  }
  return "";
}

function isAcpPermissionOption(value: unknown): value is AcpPermissionOption {
  const option = asRecord(value);
  return !!option && typeof option.optionId === "string";
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return value && typeof value === "object" && !Array.isArray(value)
    ? value as Record<string, unknown>
    : null;
}

function safeJson(value: unknown): string {
  try {
    return JSON.stringify(value ?? {});
  } catch {
    return "";
  }
}

async function createMimoCommand(
  Command: ShellCommandFactory,
  args: string[],
  options?: SpawnOptions,
) {
  const isVersionProbe = args.length === 1 && args[0] === '--version';

  try {
    const probe = Command.sidecar('bin/mimo-code-engine', ['--version'], options);
    const result = await probe.execute();
    if (result.code === 0) {
      engineMode = "embedded";
      return isVersionProbe
        ? probe
        : Command.sidecar('bin/mimo-code-engine', args, options);
    }
  } catch {
    // Fall through to the system CLI for development installs.
  }

  for (const candidate of getSystemMimoCommands()) {
    try {
      const probe = Command.create(candidate, ['--version'], options);
      const result = await probe.execute();
      if (result.code === 0) {
        engineMode = "system";
        return isVersionProbe ? probe : Command.create(candidate, args, options);
      }
    } catch {
      // Try the next command name.
    }
  }

  engineMode = "unavailable";
  throw new Error("当前平台的 MiModex 内置引擎缺失。请重新下载对应平台的 MiModex 发行包，或让维护者补齐 sidecar 发布资产。");
}

// ---- 内部辅助 ----

function getSystemMimoCommands(): string[] {
  const platform = typeof navigator === "undefined" ? "" : navigator.platform.toLowerCase();
  if (platform.includes("win")) return ["mimo", "mimo.cmd", "mimo.exe"];
  return ["mimo"];
}

type ChunkCb   = (text: string, source: 'assistant' | 'delta') => void;
type SessionCb = (sid: string)  => void;

function handleStreamEvent(
  event: CLIStreamEvent,
  callbacks: CLIStreamCallbacks,
  onText: ChunkCb,
  onSession: SessionCb,
) {
  callbacks.onEvent?.(event);
  if (event.session_id) onSession(event.session_id as string);

  if (event.type === 'stream_event') {
    const nested = event.event as Record<string, unknown> | undefined;
    if (!nested) return;

    callbacks.onEvent?.(nested as CLIStreamEvent);
    if (nested.type === 'content_block_delta') {
      const delta = nested.delta as Record<string, unknown> | undefined;
      if (delta?.type === 'text_delta' && typeof delta.text === 'string') {
        onText(delta.text, 'delta');
      }
    }
    return;
  }

  if (event.type === 'system') {
    return;
  }
  if (event.type === 'assistant') {
    const msg = event.message as { content?: Array<{ type: string; text?: string }> };
    if (msg?.content) {
      for (const block of msg.content) {
        if (block.type === 'text' && block.text) {
          onText(block.text, 'assistant');
        }
      }
    }
    return;
  }
  if (event.type === 'result') {
    if (event.session_id) onSession(event.session_id as string);
    void endActiveSession();
  }
}

function buildUserInputMessage(content: string): string {
  const message = {
    type: 'user',
    content,
    uuid: crypto.randomUUID(),
    session_id: '',
    message: {
      role: 'user',
      content,
    },
    parent_tool_use_id: null,
  };
  return `${JSON.stringify(message)}\n`;
}

async function writeToActiveChild(data: string): Promise<void> {
  if (!activeChild?.write) {
    throw new Error('MiMo 进程尚未准备好接收输入');
  }
  await activeChild.write(data);
}

function getSessionPermissionUpdates(request: RuntimePermissionRequest): PermissionUpdate[] | undefined {
  if (request.permissionSuggestions?.length) {
    return request.permissionSuggestions.map((update) => ({ ...update, destination: 'session' }));
  }
  if (!request.toolName) return undefined;
  return [
    {
      type: 'addRules',
      rules: [
        {
          toolName: request.toolName,
        },
      ],
      behavior: 'allow',
      destination: 'session',
    },
  ];
}

function buildPrompt(prompt: string, options: CLIOptions): string {
  const hints: string[] = [];

  if (options.webSearch) {
    hints.push([
      "联网搜索已开启。",
      "如果任务涉及实时信息、文档更新、价格、版本、新闻或外部事实，请优先使用 MiMo 支持的 Web Search 能力。",
      "回答中保留关键来源和日期。",
    ].join(" "));
  }

  if (options.multimodal?.length) {
    const lines = options.multimodal.map((item, index) => {
      const label = MULTIMODAL_LABELS[item.kind];
      const source = item.sourceType === "url" ? "URL" : "Base64";
      return `${index + 1}. ${label}（${source}）：${item.value}`;
    });
    hints.push([
      "多模态素材如下。MiMo 平台文档要求图片/音频/视频使用 URL 或 Base64 输入；如果当前 CLI 无法直接传递结构化多模态消息，请基于这些素材地址给出下一步可执行方案。",
      ...lines,
    ].join("\n"));
  }

  if (hints.length === 0) return prompt;
  return `${hints.join("\n\n")}\n\n用户任务：\n${prompt}`;
}

// ---- 离线演示流（浏览器 / Vite 预览模式） ----

const DEMO_RESPONSES: Record<string, string> = {
  '/review': `**代码审查报告**

已检查代码库，主要发现：

**良好实践**
- 组件拆分合理，关注点分离清晰
- TypeScript 类型覆盖完整
- Zustand store 结构规范

**建议改进**
1. 部分组件内联样式与 CSS 类混用，建议统一
2. 平台能力要区分 CLI 能力和 API 能力，避免做成空按钮
3. 建议给异步操作添加 loading 状态

\`\`\`tsx
// 建议：统一用 CSS 类替代内联样式
<div className="message-bubble message-bubble--assistant">
  {content}
</div>
\`\`\`

总体代码质量 **8/10**，整体架构清晰。`,

  '/simplify': `**代码简化分析**

发现以下可优化部分：

1. **重复能力列表** — 多处入口重复定义同一组命令
   → 提取到 \`src/constants/mimoCapabilities.ts\`

2. **多处 magic number** — 面板宽度 280px、320px 硬编码在多个文件
   → 统一到 \`variables.css\` 的 CSS 变量

3. **Store 职责过重** — \`sessionStore\` 包含模型、配置、任务等
   → 可按功能拆分

正在优化中…`,

  default: `你好！我是 **MiMo**，小米 AI 编程助手。

基于 **MiMo v2.5** 模型，专为代码任务深度优化，可以帮你：
- **编写代码** — 描述需求，我来实现
- **代码审查** — 找出问题，给出建议
- **调试错误** — 分析堆栈，定位根因
- **优化性能** — 识别瓶颈，提出方案

\`\`\`typescript
const result = items
  .filter(Boolean)
  .map(transform)
  .reduce(aggregate, []);
\`\`\`

直接描述你的需求，或输入 \`/\` 查看 MiMo Code 命令。`,
};

function getDemoResponse(prompt: string): string {
  for (const [key, response] of Object.entries(DEMO_RESPONSES)) {
    if (key !== 'default' && prompt.toLowerCase().includes(key.slice(1))) {
      return response;
    }
  }
  return DEMO_RESPONSES.default;
}

function demoStream(prompt: string, callbacks: CLIStreamCallbacks): Promise<void> {
  return new Promise((resolve) => {
    const text = getDemoResponse(prompt);
    let i = 0;
    let cancelled = false;

    activeChild = { kill: () => { cancelled = true; } };

    const tick = () => {
      if (cancelled || i >= text.length) {
        activeChild = null;
        callbacks.onDone(text.slice(0, i), undefined);
        resolve();
        return;
      }
      const chunkSize = Math.floor(Math.random() * 4) + 1;
      callbacks.onChunk(text.slice(i, i + chunkSize));
      i += chunkSize;
      setTimeout(tick, 18);
    };

    setTimeout(tick, 300);
  });
}
