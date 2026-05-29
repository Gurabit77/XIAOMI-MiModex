// ============================================================
// MiModex — InputBar (enhanced with CommandPalette + toolbar)
// ============================================================
import { useRef, useCallback, useEffect, useMemo, useState, type DragEvent, type KeyboardEvent } from "react";
import { useAppStore } from "@/stores/appStore";
import { useUIStore } from "@/stores/uiStore";
import { useSessionStore } from "@/stores/sessionStore";
import { Button, Collapse, Icon } from "animal-island-ui";
import { CommandPalette, SLASH_COMMANDS } from "./CommandPalette";
import { sendMessage, stopStream } from "@/services/cli";
import { explainError } from "@/services/errorExplain";
import type {
  BackgroundTask,
  CLIStreamEvent,
  EffortLevel,
  MultimodalAttachment,
  MultimodalKind,
  PermissionMode,
  RuntimePermissionRequest,
  ToolCall,
} from "@/types";
import { MIMO_CODE_MODELS, MULTIMODAL_LABELS, MULTIMODAL_MODELS } from "@/constants/mimoCapabilities";
import "./InputBar.css";

const COMPOSITION_SEND_GUARD_MS = 900;

const PERMISSION_MODE_LABELS: Record<PermissionMode, { label: string; short: string; detail: string; badge: string; tone: string }> = {
  default: {
    label: "默认询问",
    short: "默认",
    detail: "按 CLI 默认权限流处理。",
    badge: "逐次确认",
    tone: "neutral",
  },
  acceptEdits: {
    label: "允许编辑",
    short: "自动编辑",
    detail: "文件编辑自动通过，其他高风险操作仍保留确认边界。",
    badge: "推荐",
    tone: "safe",
  },
  plan: {
    label: "只规划",
    short: "规划",
    detail: "适合先看方案，不直接改文件。",
    badge: "最稳",
    tone: "plan",
  },
  auto: {
    label: "智能授权",
    short: "智能",
    detail: "让 MiMo Code 自动判断常规工具请求。",
    badge: "省心",
    tone: "auto",
  },
  dontAsk: {
    label: "不询问",
    short: "拒绝未授权",
    detail: "没有预授权的操作会被拒绝。",
    badge: "保守",
    tone: "deny",
  },
  bypassPermissions: {
    label: "完全信任",
    short: "全信任",
    detail: "跳过工具权限检查，仅在可信项目中使用。",
    badge: "高信任",
    tone: "trust",
  },
};

const PRIMARY_PERMISSION_MODES: PermissionMode[] = [
  "acceptEdits",
  "auto",
  "plan",
  "bypassPermissions",
];

const SECONDARY_PERMISSION_MODES: PermissionMode[] = [
  "default",
  "dontAsk",
];

const EFFORT_LABELS: Record<EffortLevel, string> = {
  low: "快速",
  medium: "标准",
  high: "精准",
  max: "极致",
};

const MEDIA_KIND_OPTIONS: Array<{
  kind: MultimodalKind;
  icon: string;
  detail: string;
}> = [
  { kind: "image", icon: "icon-camera", detail: "截图、设计稿、照片" },
  { kind: "audio", icon: "icon-helicopter", detail: "录音、音频样本" },
  { kind: "video", icon: "icon-design", detail: "演示、动效、片段" },
];

function getAssistantContentBlocks(event: CLIStreamEvent): Array<Record<string, unknown>> {
  const message = event.message as { content?: unknown } | undefined;
  return Array.isArray(message?.content)
    ? (message.content as Array<Record<string, unknown>>)
    : [];
}

function readTokenCount(event: CLIStreamEvent): number | null {
  const usage = event.usage as Record<string, unknown> | undefined;
  if (!usage) return null;
  if (typeof usage.total_tokens === "number") return usage.total_tokens;
  const input = typeof usage.input_tokens === "number" ? usage.input_tokens : 0;
  const output = typeof usage.output_tokens === "number" ? usage.output_tokens : 0;
  const cacheRead = typeof usage.cache_read_input_tokens === "number" ? usage.cache_read_input_tokens : 0;
  const cacheCreate = typeof usage.cache_creation_input_tokens === "number" ? usage.cache_creation_input_tokens : 0;
  const total = input + output + cacheRead + cacheCreate;
  return total > 0 ? total : null;
}

function readThinkingDelta(event: CLIStreamEvent): string {
  if (event.type !== "content_block_delta") return "";
  const delta = event.delta as Record<string, unknown> | undefined;
  return delta?.type === "thinking_delta" && typeof delta.thinking === "string"
    ? delta.thinking
    : "";
}

function readRuntimePermissionRequest(event: CLIStreamEvent): RuntimePermissionRequest | null {
  if (event.type !== "control_request") return null;
  const request = event.request as Record<string, unknown> | undefined;
  if (!request || request.subtype !== "can_use_tool") return null;
  const requestId = typeof event.request_id === "string" ? event.request_id : "";
  const toolUseId = typeof request.tool_use_id === "string" ? request.tool_use_id : requestId;
  const toolName = typeof request.tool_name === "string" ? request.tool_name : "Tool";
  const input = request.input && typeof request.input === "object"
    ? request.input as Record<string, unknown>
    : {};
  return {
    id: requestId || toolUseId || Date.now().toString(36),
    requestId: requestId || toolUseId,
    toolUseId,
    toolName,
    displayName: typeof request.display_name === "string" ? request.display_name : undefined,
    title: typeof request.title === "string" ? request.title : undefined,
    description: typeof request.description === "string" ? request.description : undefined,
    blockedPath: typeof request.blocked_path === "string" ? request.blocked_path : undefined,
    decisionReason: typeof request.decision_reason === "string" ? request.decision_reason : undefined,
    input,
    permissionSuggestions: Array.isArray(request.permission_suggestions)
      ? request.permission_suggestions as RuntimePermissionRequest["permissionSuggestions"]
      : undefined,
    status: "pending",
    createdAt: Date.now(),
  };
}

function readRequiresActionDetails(event: CLIStreamEvent): RuntimePermissionRequest | null {
  if (event.type !== "system" || event.subtype !== "session_state_changed" || event.state !== "requires_action") {
    return null;
  }
  const details = event.details as Record<string, unknown> | undefined;
  if (!details) return null;
  const requestId = typeof details.request_id === "string" ? details.request_id : Date.now().toString(36);
  const toolUseId = typeof details.tool_use_id === "string" ? details.tool_use_id : requestId;
  const toolName = typeof details.tool_name === "string" ? details.tool_name : "Tool";
  return {
    id: requestId,
    requestId,
    toolUseId,
    toolName,
    actionDescription: typeof details.action_description === "string" ? details.action_description : undefined,
    input: {},
    status: "pending",
    createdAt: Date.now(),
  };
}

export function InputBar() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const mediaFileInputRef = useRef<HTMLInputElement>(null);
  const isComposingRef = useRef(false);
  const compositionEndedAtRef = useRef(0);
  const rightPanelOpen = useUIStore((s) => s.rightPanelOpen);
  const inputValue = useAppStore((s) => s.inputValue);
  const setInputValue = useAppStore((s) => s.setInputValue);
  const isStreaming = useAppStore((s) => s.isStreaming);
  const setIsStreaming = useAppStore((s) => s.setIsStreaming);
  const activeConversationId = useAppStore((s) => s.activeConversationId);
  const createConversation = useAppStore((s) => s.createConversation);
  const addMessage = useAppStore((s) => s.addMessage);
  const settings = useAppStore((s) => s.settings);

  const [showCommands, setShowCommands] = useState(false);
  const [commandIndex, setCommandIndex] = useState(0);
  const [deepThinking, setDeepThinking] = useState(false);
  const [webSearch, setWebSearch] = useState(false);
  const [showMediaForm, setShowMediaForm] = useState(false);
  const [mediaKind, setMediaKind] = useState<MultimodalKind>("image");
  const [mediaValue, setMediaValue] = useState("");
  const [mediaFileName, setMediaFileName] = useState("");
  const [mediaFileSize, setMediaFileSize] = useState<number | null>(null);
  const [mediaMimeType, setMediaMimeType] = useState("");
  const [attachments, setAttachments] = useState<MultimodalAttachment[]>([]);
  const [isMediaDragActive, setIsMediaDragActive] = useState(false);
  const [showPermissionPanel, setShowPermissionPanel] = useState(false);

  const permissionMode = useSessionStore((s) => s.permissionMode);
  const setPermissionMode = useSessionStore((s) => s.setPermissionMode);
  const permissionRules = useSessionStore((s) => s.permissionRules);
  const draftAttachments = useSessionStore((s) => s.draftAttachments);
  const removeDraftAttachment = useSessionStore((s) => s.removeDraftAttachment);
  const clearDraftAttachments = useSessionStore((s) => s.clearDraftAttachments);
  const currentModel = useSessionStore((s) => s.currentModel);
  const effort = useSessionStore((s) => s.effort);
  const allAttachments = useMemo(
    () => [...draftAttachments, ...attachments],
    [draftAttachments, attachments],
  );

  // Detect / prefix for command palette
  useEffect(() => {
    if (inputValue.startsWith("/") && inputValue.length > 0) {
      setShowCommands(true);
      setCommandIndex(0);
    } else {
      setShowCommands(false);
    }
  }, [inputValue]);

  const adjustHeight = useCallback(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 160) + "px";
  }, []);

  useEffect(() => {
    adjustHeight();
  }, [inputValue, adjustHeight]);

  useEffect(() => {
    textareaRef.current?.focus();
  }, [activeConversationId]);

  useEffect(() => {
    const firstDraft = draftAttachments[0];
    if (!firstDraft) return;
    setShowMediaForm(true);
    setMediaKind(firstDraft.kind);
    setShowPermissionPanel(false);
  }, [draftAttachments]);

  useEffect(() => {
    if (!import.meta.env.DEV || typeof window === "undefined") return;
    const preview = new URLSearchParams(window.location.search).get("mimodexPreview");
    if (preview === "media") {
      setShowMediaForm(true);
      setShowPermissionPanel(false);
      setMediaKind("image");
      setMediaValue("data:image/png;base64,iVBORw0KGgo=");
      setMediaFileName("layout-screenshot.png");
      setMediaFileSize(248_320);
      setMediaMimeType("image/png");
    }
    if (preview === "permissions-panel") {
      setShowPermissionPanel(true);
      setShowMediaForm(false);
    }
  }, []);

  const handleCommandSelect = useCallback((command: string) => {
    if (command === "/permissions") {
      setShowPermissionPanel(true);
      setShowMediaForm(false);
      setInputValue("");
      setShowCommands(false);
      textareaRef.current?.focus();
      return;
    }
    setInputValue(command + " ");
    setShowCommands(false);
    textareaRef.current?.focus();
  }, [setInputValue]);

  const handleSend = useCallback(() => {
    const content = inputValue.trim();
    if (!content || isStreaming) return;
    if (allAttachments.length > 0 && !MULTIMODAL_MODELS.includes(useSessionStore.getState().currentModel)) {
      setShowMediaForm(true);
      setShowPermissionPanel(false);
      return;
    }

    let convId = activeConversationId;
    if (!convId) {
      convId = createConversation();
    }

    addMessage(convId, {
      role: "user",
      content,
      timestamp: Date.now(),
    });

    setInputValue("");

    setIsStreaming(true);
    const aiMsgId = addMessage(convId, {
      role: "assistant",
      content: "",
      timestamp: Date.now(),
      streaming: true,
    });

    const store = useAppStore.getState();
    const sessionState = useSessionStore.getState();
    const { currentModel, effort, permissionMode } = sessionState;
    const requestedEffort = deepThinking && effort !== "max" ? "high" : effort;

    const upsertToolCall = (toolCall: ToolCall) => {
      const currentConversation = useAppStore.getState().conversations.find((c) => c.id === convId);
      const currentMessage = currentConversation?.messages.find((m) => m.id === aiMsgId);
      const existing = currentMessage?.toolCalls ?? [];
      const next = existing.some((tc) => tc.id === toolCall.id)
        ? existing.map((tc) => tc.id === toolCall.id ? { ...tc, ...toolCall } : tc)
        : [...existing, toolCall];
      store.updateMessage(convId, aiMsgId, { toolCalls: next });
    };

    const updateToolCall = (id: string, updates: Partial<ToolCall>) => {
      const currentConversation = useAppStore.getState().conversations.find((c) => c.id === convId);
      const currentMessage = currentConversation?.messages.find((m) => m.id === aiMsgId);
      const existing = currentMessage?.toolCalls ?? [];
      const next = existing.some((tc) => tc.id === id)
        ? existing.map((tc) => tc.id === id ? { ...tc, ...updates } : tc)
        : [
            ...existing,
            {
              id,
              name: String(updates.name ?? "Tool"),
              input: {},
              status: updates.status ?? "running",
              ...updates,
            },
          ];
      store.updateMessage(convId, aiMsgId, { toolCalls: next });
    };

    const upsertPermissionRequest = (request: RuntimePermissionRequest) => {
      const currentConversation = useAppStore.getState().conversations.find((c) => c.id === convId);
      const currentMessage = currentConversation?.messages.find((m) => m.id === aiMsgId);
      const existing = currentMessage?.permissionRequests ?? [];
      const next = existing.some((item) => item.requestId === request.requestId)
        ? existing.map((item) => item.requestId === request.requestId ? { ...item, ...request } : item)
        : [...existing, request];
      store.updateMessage(convId, aiMsgId, { permissionRequests: next });
      if (request.toolUseId) {
        updateToolCall(request.toolUseId, {
          name: request.toolName,
          status: "pending",
          input: request.input,
        });
      }
    };

    const handleCliEvent = (event: CLIStreamEvent) => {
      if (event.session_id) sessionState.setSessionId(event.session_id);

      const tokens = readTokenCount(event);
      if (tokens !== null) sessionState.updateTokens(tokens, sessionState.tokensLimit);

      const permissionRequest = readRuntimePermissionRequest(event) ?? readRequiresActionDetails(event);
      if (permissionRequest) {
        upsertPermissionRequest(permissionRequest);
        return;
      }

      if (event.type === "assistant") {
        for (const block of getAssistantContentBlocks(event)) {
          if (block.type === "thinking" && typeof block.thinking === "string") {
            store.updateMessage(convId, aiMsgId, { thinking: block.thinking });
          }
          if (block.type === "tool_use" && typeof block.id === "string") {
            upsertToolCall({
              id: block.id,
              name: typeof block.name === "string" ? block.name : "Tool",
              input: (block.input as Record<string, unknown>) ?? {},
              status: "running",
            });
          }
        }
        return;
      }

      const thinkingDelta = readThinkingDelta(event);
      if (thinkingDelta) {
        const current = useAppStore.getState().conversations
          .find((c) => c.id === convId)
          ?.messages.find((m) => m.id === aiMsgId);
        store.updateMessage(convId, aiMsgId, {
          thinking: (current?.thinking ?? "") + thinkingDelta,
        });
        return;
      }

      if (event.type === "tool_progress" && typeof event.tool_use_id === "string") {
        updateToolCall(event.tool_use_id, {
          name: typeof event.tool_name === "string" ? event.tool_name : undefined,
          status: "running",
          duration: typeof event.elapsed_time_seconds === "number"
            ? Math.round(event.elapsed_time_seconds * 1000)
            : undefined,
        });
        return;
      }

      if (event.type === "tool_use_summary" && Array.isArray(event.preceding_tool_use_ids)) {
        for (const id of event.preceding_tool_use_ids) {
          if (typeof id === "string") {
            updateToolCall(id, {
              status: "done",
              output: typeof event.summary === "string" ? event.summary : undefined,
            });
          }
        }
        return;
      }

      if (event.type === "result") {
        const usage = event.usage as Record<string, unknown> | undefined;
        const totalTokens =
          readTokenCount(event) ??
          (usage && typeof usage.total_tokens === "number" ? usage.total_tokens : null);
        if (totalTokens !== null) sessionState.updateTokens(totalTokens, sessionState.tokensLimit);
        return;
      }

      if (event.type === "system" && event.subtype === "task_started" && typeof event.task_id === "string") {
        const task: BackgroundTask = {
          id: event.task_id,
          title: typeof event.description === "string" ? event.description : "后台任务",
          status: "running",
          type: "agent",
          startedAt: Date.now(),
        };
        sessionState.addTask(task);
        return;
      }

      if (event.type === "system" && event.subtype === "task_progress" && typeof event.task_id === "string") {
        sessionState.updateTask(event.task_id, {
          status: "running",
          output: typeof event.summary === "string" ? event.summary : undefined,
        });
        return;
      }

      if (event.type === "system" && event.subtype === "task_notification" && typeof event.task_id === "string") {
        const status = event.status === "failed" ? "failed" : "completed";
        sessionState.updateTask(event.task_id, {
          status,
          completedAt: Date.now(),
          output: typeof event.summary === "string" ? event.summary : undefined,
        });
      }
    };

    sendMessage(
      content,
      {
        model: currentModel,
        effort: requestedEffort,
        permissionMode,
        permissionRules: sessionState.permissionRules,
        webSearch,
        multimodal: allAttachments,
      },
      {
        onChunk: (chunk) => {
          const current = useAppStore.getState().getActiveConversation()?.messages.find(m => m.id === aiMsgId);
          store.updateMessage(convId, aiMsgId, {
            content: (current?.content ?? '') + chunk,
          });
        },
        onDone: (_fullText, sessionId) => {
          store.updateMessage(convId, aiMsgId, { streaming: false });
          store.setIsStreaming(false);
          if (sessionId) sessionState.setSessionId(sessionId);
          setAttachments([]);
          clearDraftAttachments();
          setShowMediaForm(false);
        },
        onError: (err) => {
          console.error('CLI error:', err);
          store.updateMessage(convId, aiMsgId, {
            content: `错误：${explainError(err)}\n\n已把本次输入保留在输入区，方便你检查后重试。`,
            streaming: false,
          });
          store.setIsStreaming(false);
          if (!useAppStore.getState().inputValue.trim()) {
            store.setInputValue(content);
          }
          if (allAttachments.length > 0) {
            setShowMediaForm(true);
          }
        },
        onEvent: handleCliEvent,
      }
    );
  }, [
    inputValue,
    isStreaming,
    activeConversationId,
    createConversation,
    addMessage,
    setInputValue,
    setIsStreaming,
    deepThinking,
    webSearch,
    allAttachments,
    clearDraftAttachments,
  ]);

  const isImeComposing = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    const nativeEvent = e.nativeEvent as KeyboardEvent<HTMLTextAreaElement>["nativeEvent"] & {
      isComposing?: boolean;
      keyCode?: number;
    };
    const justEndedComposition = Date.now() - compositionEndedAtRef.current < COMPOSITION_SEND_GUARD_MS;
    return isComposingRef.current || nativeEvent.isComposing === true || nativeEvent.keyCode === 229 || justEndedComposition;
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (isImeComposing(e)) {
      if (e.key === "Enter") e.preventDefault();
      return;
    }

    // Command palette navigation
    if (showCommands) {
      const filtered = SLASH_COMMANDS.filter(
        (cmd) =>
          cmd.name.toLowerCase().includes(inputValue.slice(1).toLowerCase()) ||
          cmd.description.toLowerCase().includes(inputValue.slice(1).toLowerCase())
      );

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setCommandIndex((prev) => Math.min(prev + 1, filtered.length - 1));
        return;
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setCommandIndex((prev) => Math.max(prev - 1, 0));
        return;
      }
      if (e.key === "Enter" && filtered.length > 0) {
        e.preventDefault();
        handleCommandSelect(filtered[commandIndex]?.name ?? "");
        return;
      }
      if (e.key === "Escape") {
        e.preventDefault();
        setShowCommands(false);
        return;
      }
    }

    const isSendKey =
      settings.sendKey === "enter"
        ? e.key === "Enter" && !e.shiftKey && !e.metaKey
        : e.key === "Enter" && (e.metaKey || e.ctrlKey);

    if (isSendKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleStop = () => {
    stopStream();
    setIsStreaming(false);
    const activeConversation = useAppStore.getState().getActiveConversation();
    const streamingMessage = [...(activeConversation?.messages ?? [])]
      .reverse()
      .find((message) => message.role === "assistant" && message.streaming);
    if (activeConversation && streamingMessage) {
      useAppStore.getState().updateMessage(activeConversation.id, streamingMessage.id, {
        streaming: false,
        content: streamingMessage.content || "已停止本次生成。",
      });
    }
  };

  const handleCompositionStart = () => {
    isComposingRef.current = true;
  };

  const handleCompositionUpdate = () => {
    isComposingRef.current = true;
  };

  const handleCompositionEnd = () => {
    isComposingRef.current = false;
    compositionEndedAtRef.current = Date.now();
    requestAnimationFrame(adjustHeight);
  };

  const openRightPanel = useUIStore((s) => s.openRightPanel);
  const supportsMultimodal = MULTIMODAL_MODELS.includes(currentModel);
  const attachmentsBlocked = allAttachments.length > 0 && !supportsMultimodal;
  const canSend = inputValue.trim().length > 0 && !isStreaming && !attachmentsBlocked;
  const modelLabel = MIMO_CODE_MODELS.find((model) => model.key === currentModel)?.label ?? currentModel;
  const effortLabel = EFFORT_LABELS[effort];
  const activePermission = PERMISSION_MODE_LABELS[permissionMode];
  const hasMediaValue = mediaValue.trim().length > 0;
  const hasPreparedMedia = hasMediaValue || allAttachments.length > 0;
  const mediaUploadClassName = [
    "input-media-upload",
    hasPreparedMedia ? "input-media-upload--ready" : "",
    isMediaDragActive ? "input-media-upload--dragging" : "",
    !supportsMultimodal ? "input-media-upload--blocked" : "",
  ].filter(Boolean).join(" ");
  const mediaUploadStatus = !supportsMultimodal
    ? "需切模型"
    : hasMediaValue
      ? "已准备"
      : allAttachments.length > 0
        ? "已带入"
      : isMediaDragActive
        ? "松手上传"
        : "待选择";
  const modeSummary = [
    modelLabel,
    effortLabel,
    webSearch ? "联网搜索开启" : "搜索关闭",
    PERMISSION_MODE_LABELS[permissionMode].short,
  ].join(" · ");
  const permissionPreview = permissionMode === "bypassPermissions"
    ? "高信任"
    : permissionMode === "plan"
      ? "只规划"
      : permissionMode === "dontAsk"
        ? "保守"
        : "少打断";
  const hasOpenComposerPanel = showPermissionPanel || showMediaForm || allAttachments.length > 0;
  const inputBarClassName = [
    "input-bar",
    rightPanelOpen ? "input-bar--compact" : "",
    hasOpenComposerPanel ? "input-bar--panel-open" : "",
  ].filter(Boolean).join(" ");

  const addAttachment = () => {
    const value = mediaValue.trim();
    if (!value || !supportsMultimodal) return;
    const sourceType = value.startsWith("data:") ? "base64" : "url";
    setAttachments((items) => [
      ...items,
      {
        id: Date.now().toString(36),
        kind: mediaKind,
        sourceType,
        value,
        label: mediaFileName || (sourceType === "base64" ? "手动 data URL" : "手动 URL"),
        mimeType: mediaMimeType || undefined,
      },
    ]);
    setMediaValue("");
    setMediaFileName("");
    setMediaFileSize(null);
    setMediaMimeType("");
  };

  const clearMediaValue = () => {
    setMediaValue("");
    setMediaFileName("");
    setMediaFileSize(null);
    setMediaMimeType("");
  };

  const removeAttachment = (id: string) => {
    setAttachments((items) => items.filter((item) => item.id !== id));
    removeDraftAttachment(id);
  };

  const handleMediaFile = async (file: File) => {
    if (!supportsMultimodal) return;
    const nextKind = inferMultimodalKind(file, mediaKind);
    const dataUrl = await readFileAsDataUrl(file);
    setMediaKind(nextKind);
    setMediaValue(dataUrl);
    setMediaFileName(file.name);
    setMediaFileSize(file.size);
    setMediaMimeType(file.type || fileAccept(nextKind).replace("/*", ""));
  };

  const handleMediaDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (supportsMultimodal) setIsMediaDragActive(true);
  };

  const handleMediaDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = supportsMultimodal ? "copy" : "none";
    if (supportsMultimodal) setIsMediaDragActive(true);
  };

  const handleMediaDragLeave = (e: DragEvent<HTMLDivElement>) => {
    const nextTarget = e.relatedTarget as Node | null;
    if (nextTarget && e.currentTarget.contains(nextTarget)) return;
    setIsMediaDragActive(false);
  };

  const handleMediaDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsMediaDragActive(false);
    if (!supportsMultimodal) return;
    const file = e.dataTransfer.files?.[0];
    if (file) void handleMediaFile(file);
  };

  return (
    <div className={inputBarClassName}>
      <div className="input-bar-inner">
        {/* Command Palette */}
        {showCommands && (
          <CommandPalette
            filter={inputValue}
            selectedIndex={commandIndex}
            onSelect={handleCommandSelect}
          />
        )}

        {/* Composer control surface */}
        <div className="input-console">
          <div className="input-console-head">
            <div className="input-console-title">
              <span className={`input-console-orb${isStreaming ? " input-console-orb--running" : ""}`} aria-hidden="true">
                {isStreaming && <span className="input-console-orb-route" />}
                <Icon name={isStreaming ? "icon-helicopter" : "icon-miles"} size={16} bounce={isStreaming} />
              </span>
              <div>
                <div className="input-console-label">{isStreaming ? "MiMo 正在处理" : "输入任务"}</div>
                <div className="input-console-summary">
                  <span className="input-console-summary-main">{modeSummary}</span>
                </div>
              </div>
            </div>
            <div className="input-console-actions">
              <button
                type="button"
                className={`input-mode-chip${webSearch ? " input-mode-chip--active" : ""}`}
                onClick={() => setWebSearch((value) => !value)}
                aria-pressed={webSearch}
              >
                <Icon name="icon-camera" size={14} />
                <span>{webSearch ? "联网" : "不搜索"}</span>
              </button>
              <button
                type="button"
                className={`input-mode-chip${deepThinking ? " input-mode-chip--active" : ""}`}
                onClick={() => setDeepThinking((value) => !value)}
                aria-pressed={deepThinking}
                title="临时提升本次请求推理强度"
              >
                <Icon name="icon-miles" size={14} />
                <span>{deepThinking ? "深度" : "标准"}</span>
              </button>
              <button
                type="button"
                className={`input-mode-chip${showMediaForm || allAttachments.length > 0 ? " input-mode-chip--active" : ""}`}
                onClick={() => {
                  setShowMediaForm((v) => !v);
                  setShowPermissionPanel(false);
                }}
                aria-expanded={showMediaForm}
              >
                <Icon name="icon-design" size={14} />
                <span>{allAttachments.length > 0 ? `${allAttachments.length} 附件` : "素材"}</span>
              </button>
              <button
                type="button"
                className={`input-mode-chip${showPermissionPanel ? " input-mode-chip--active" : ""}`}
                onClick={() => {
                  setShowPermissionPanel((v) => !v);
                  setShowMediaForm(false);
                }}
                aria-expanded={showPermissionPanel}
              >
                <Icon name="icon-critterpedia" size={14} />
                <span>{activePermission.short}</span>
              </button>
            </div>
          </div>
          <button
            type="button"
            className="input-context-link"
            onClick={() => openRightPanel("context")}
          >
            <Icon name="icon-map" size={13} />
            <span>上下文</span>
          </button>
          <div className="input-console-route" aria-label="本次任务状态">
            <span className="input-console-route-step input-console-route-step--active">
              <Icon name="icon-chat" size={12} />
              任务
            </span>
            <i aria-hidden="true" />
            <span className={`input-console-route-step${allAttachments.length > 0 ? " input-console-route-step--active" : ""}`}>
              <Icon name="icon-design" size={12} />
              {allAttachments.length > 0 ? "素材已带入" : "可加素材"}
            </span>
            <i aria-hidden="true" />
            <span className="input-console-route-step input-console-route-step--active">
              <Icon name="icon-map" size={12} />
              {permissionPreview}
            </span>
          </div>
        </div>

        {showPermissionPanel && (
          <div className={`input-permission-panel input-permission-panel--${activePermission.tone}`}>
            <div className="input-permission-head">
              <div>
                <div className="input-permission-title">执行前授权</div>
                <div className="input-permission-subtitle">
                  发送前可直接切换这次权限。
                </div>
              </div>
              <Button type="text" size="small" onClick={() => setShowPermissionPanel(false)}>
                收起
              </Button>
            </div>
            <div className="input-permission-current">
              <span className="input-permission-current-icon" aria-hidden="true">
                <Icon name="icon-map" size={15} />
              </span>
              <span>{activePermission.detail}</span>
              <strong>{activePermission.badge}</strong>
            </div>
            <div className="input-permission-risk-strip">
              <span className="input-permission-risk-dot" />
                <span>
                  {permissionMode === "bypassPermissions"
                  ? "完全信任会跳过工具权限检查。"
                  : permissionMode === "plan"
                    ? "只规划不会直接改文件。"
                    : permissionMode === "dontAsk"
                      ? "不询问会拒绝未预授权操作，可能导致任务中断。"
                      : "当前模式会减少重复打断。"}
                </span>
            </div>
            <div className="input-permission-options">
              {PRIMARY_PERMISSION_MODES.map((mode) => (
                <button
                  key={mode}
                  type="button"
                  className={`input-permission-option input-permission-option--${PERMISSION_MODE_LABELS[mode].tone}${permissionMode === mode ? " input-permission-option--active" : ""}`}
                  onClick={() => setPermissionMode(mode)}
                >
                  <span className="input-permission-option-top">
                    <span className="input-permission-option-label">{PERMISSION_MODE_LABELS[mode].label}</span>
                    <span className="input-permission-option-badge">{PERMISSION_MODE_LABELS[mode].badge}</span>
                  </span>
                  <span className="input-permission-option-detail">{PERMISSION_MODE_LABELS[mode].detail}</span>
                </button>
              ))}
            </div>
            <div className="input-permission-secondary">
              {SECONDARY_PERMISSION_MODES.map((mode) => (
                <button
                  key={mode}
                  type="button"
                  className={`input-permission-chip${permissionMode === mode ? " input-permission-chip--active" : ""}`}
                  onClick={() => setPermissionMode(mode)}
                >
                  {PERMISSION_MODE_LABELS[mode].label}
                </button>
              ))}
              {permissionRules.length > 0 && (
                <span className="input-permission-rule-count">
                  已配置 {permissionRules.length} 条规则
                </span>
              )}
            </div>
          </div>
        )}

        {(showMediaForm || allAttachments.length > 0) && (
          <div className="input-media-panel">
            <div
              className={mediaUploadClassName}
              onDragEnter={handleMediaDragEnter}
              onDragOver={handleMediaDragOver}
              onDragLeave={handleMediaDragLeave}
              onDrop={handleMediaDrop}
            >
              <div className="input-media-upload-head">
                <span className="input-media-upload-icon" aria-hidden="true">
                  <Icon name="icon-design" size={16} bounce />
                </span>
                <div className="input-media-upload-copy">
                  <div className="input-media-upload-title">上传素材</div>
                  <div className="input-media-upload-desc">
                    {supportsMultimodal
                      ? "选文件后自动转成 data URL/Base64。"
                      : "当前模型暂不支持附件，切换到多模态模型后即可上传。"}
                  </div>
                </div>
                <span className="input-media-upload-status">{mediaUploadStatus}</span>
              </div>
              <div className="input-media-kind-grid" role="list" aria-label="素材类型">
                {MEDIA_KIND_OPTIONS.map((option) => (
                  <button
                    key={option.kind}
                    type="button"
                    className={`input-media-kind-card${mediaKind === option.kind ? " input-media-kind-card--active" : ""}`}
                    onClick={() => setMediaKind(option.kind)}
                    aria-pressed={mediaKind === option.kind}
                    disabled={!supportsMultimodal}
                  >
                    <span className="input-media-kind-card-icon" aria-hidden="true">
                      <Icon name={option.icon as never} size={14} />
                    </span>
                    <span>
                      <strong>{MULTIMODAL_LABELS[option.kind]}</strong>
                      <small>{option.detail}</small>
                    </span>
                  </button>
                ))}
              </div>
              <div className="input-media-meta-grid">
                <div className="input-media-meta">
                  <span>类型</span>
                  <strong>{MULTIMODAL_LABELS[mediaKind]}</strong>
                </div>
                <div className="input-media-meta">
                  <span>文件名</span>
                  <strong>{mediaFileName || (mediaValue.trim() ? "手动输入" : "未选择")}</strong>
                </div>
                <div className="input-media-meta">
                  <span>大小</span>
                  <strong>{mediaFileSize != null ? formatFileSize(mediaFileSize) : "未记录"}</strong>
                </div>
                <div className="input-media-meta">
                  <span>格式</span>
                  <strong>{mediaMimeType || (mediaValue.startsWith("data:") ? mediaValue.slice(5, mediaValue.indexOf(";")) : "URL/Base64")}</strong>
                </div>
              </div>
              <div className="input-media-row">
                <Button
                  type="primary"
                  size="small"
                  icon={<Icon name="icon-design" size={14} />}
                  onClick={() => mediaFileInputRef.current?.click()}
                  disabled={!supportsMultimodal}
                >
                  选择文件
                </Button>
                <Button type="default" size="small" onClick={addAttachment} disabled={!supportsMultimodal || !hasMediaValue}>
                  加入本次请求
                </Button>
                <Button type="text" size="small" onClick={clearMediaValue} disabled={!hasMediaValue}>
                  清空
                </Button>
              </div>
              <input
                ref={mediaFileInputRef}
                className="input-media-file"
                type="file"
                accept={fileAccept(mediaKind)}
                disabled={!supportsMultimodal}
                onChange={(e) => {
                  const file = e.currentTarget.files?.[0];
                  if (file) void handleMediaFile(file);
                  e.currentTarget.value = "";
                }}
              />
              <Collapse
                defaultExpanded={false}
                className="input-media-advanced"
                question={
                  <span className="input-media-advanced-question">
                    <Icon name="icon-diy" size={13} />
                    高级：粘贴 URL / Base64
                  </span>
                }
                answer={
                  <div className="input-media-advanced-body">
                    <div className="input-media-advanced-note">
                      仅在你已有公开 URL 或 data URL/Base64 时使用。
                    </div>
                    <input
                      className="input-media-url"
                      value={mediaValue}
                      onChange={(e) => {
                        setMediaValue(e.target.value);
                        setMediaFileName(e.target.value.trim() ? "手动输入" : "");
                        setMediaFileSize(null);
                        setMediaMimeType("");
                      }}
                      disabled={!supportsMultimodal}
                      placeholder="粘贴公开 URL 或 data:{MIME};base64,..."
                    />
                  </div>
                }
              />
            </div>
            <div className="input-media-note">
              {supportsMultimodal
                ? "支持多模态时可直接上传，MiMo 仍要求使用 URL 或 Base64。"
                : "当前模型不在 MiMo 多模态支持列表；请切换到 mimo-v2.5 或 mimo-v2-omni。"}
            </div>
            {allAttachments.length > 0 && (
              <div className="input-media-chips">
                {allAttachments.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className="input-media-chip"
                    onClick={() => removeAttachment(item.id)}
                    title="点击移除"
                  >
                    {MULTIMODAL_LABELS[item.kind]} · {item.label || item.sourceType}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Input container */}
        <div className="input-bar-container">
          <div className="input-bar-actions">
            <Button
              type="text"
              size="small"
              title="添加素材"
              icon={<Icon name="icon-design" size={16} />}
              onClick={() => {
                setShowMediaForm((v) => !v);
                setShowPermissionPanel(false);
              }}
            />
          </div>

          <textarea
            ref={textareaRef}
            className="input-bar-textarea"
            placeholder="描述你的编程任务，或输入 / 查看 MiMo Code 命令"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onCompositionStart={handleCompositionStart}
            onCompositionUpdate={handleCompositionUpdate}
            onCompositionEnd={handleCompositionEnd}
            rows={1}
          />

          {isStreaming ? (
            <div className="input-bar-send-wrap">
              <Button
                type="primary"
                danger
                size="middle"
                icon={<Icon name="icon-diy" size={16} />}
                onClick={handleStop}
              >
                停止
              </Button>
            </div>
          ) : (
            <div className="input-bar-send-wrap">
              <Button
                type="primary"
                size="middle"
                disabled={!canSend}
                loading={isStreaming}
                icon={<Icon name="icon-helicopter" size={18} />}
                onClick={handleSend}
              >
                发送
              </Button>
            </div>
          )}
        </div>

        <div className="input-bar-hint">
          {attachmentsBlocked ? (
            <>
              当前模型不支持附件，请切换到 <kbd>MiMo v2.5</kbd> 或移除素材
            </>
          ) : settings.sendKey === "enter" ? (
            <>
              <kbd>Enter</kbd> 发送，<kbd>Shift Enter</kbd> 换行，输入法确认不会发送
            </>
          ) : (
            <>
              <kbd>Cmd Enter</kbd> 发送，<kbd>Enter</kbd> 换行，输入法确认不会发送
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function inferMultimodalKind(file: File, fallback: MultimodalKind): MultimodalKind {
  if (file.type.startsWith("image/")) return "image";
  if (file.type.startsWith("audio/")) return "audio";
  if (file.type.startsWith("video/")) return "video";
  const name = file.name.toLowerCase();
  if (/\.(png|jpe?g|gif|webp|bmp|heic)$/.test(name)) return "image";
  if (/\.(mp3|wav|m4a|aac|ogg|flac)$/.test(name)) return "audio";
  if (/\.(mp4|mov|webm|mkv|avi)$/.test(name)) return "video";
  return fallback;
}

function fileAccept(kind: MultimodalKind): string {
  if (kind === "image") return "image/*";
  if (kind === "audio") return "audio/*";
  return "video/*";
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result ?? ""));
    reader.onerror = () => reject(reader.error ?? new Error("读取文件失败"));
    reader.readAsDataURL(file);
  });
}
