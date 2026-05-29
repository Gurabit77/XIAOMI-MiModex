// @bun
import {
  envDynamic,
  getFeatureValue_CACHED_MAY_BE_STALE,
  getOauthAccountInfo,
  getOrCreateUserID,
  init_auth,
  init_config1 as init_config,
  init_envDynamic,
  init_growthbook,
  init_metadata,
  sanitizeToolNameForAnalytics
} from "./chunk-1ghcng4e.js";
import {
  getAgentId,
  getAgentName,
  getParentSessionId,
  init_teammate
} from "./chunk-zwarn9h7.js";
import {
  require_src
} from "./chunk-p2816w9z.js";
import {
  djb2Hash,
  init_hash
} from "./chunk-8tnsngw2.js";
import {
  init_cleanupRegistry,
  init_debug,
  init_errors,
  init_slowOperations,
  jsonParse,
  jsonStringify,
  logForDebugging
} from "./chunk-rpbc3b7k.js";
import {
  getEventLogger,
  getIsNonInteractiveSession,
  getPromptId,
  getSessionId,
  init_state
} from "./chunk-j5xzpm59.js";
import {
  init_envUtils,
  isEnvTruthy
} from "./chunk-hxhwzgnn.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/utils/taggedId.ts
function base58Encode(n) {
  const base = BigInt(BASE_58_CHARS.length);
  const result = new Array(ENCODED_LENGTH).fill(BASE_58_CHARS[0]);
  let i = ENCODED_LENGTH - 1;
  let value = n;
  while (value > 0n) {
    const rem = Number(value % base);
    result[i] = BASE_58_CHARS[rem];
    value = value / base;
    i--;
  }
  return result.join("");
}
function uuidToBigInt(uuid) {
  const hex = uuid.replace(/-/g, "");
  if (hex.length !== 32) {
    throw new Error(`Invalid UUID hex length: ${hex.length}`);
  }
  return BigInt("0x" + hex);
}
function toTaggedId(tag, uuid) {
  const n = uuidToBigInt(uuid);
  return `${tag}_${VERSION}${base58Encode(n)}`;
}
var BASE_58_CHARS = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", VERSION = "01", ENCODED_LENGTH = 22;
var init_taggedId = () => {};

// src/utils/telemetryAttributes.ts
function shouldIncludeAttribute(envVar) {
  const defaultValue = METRICS_CARDINALITY_DEFAULTS[envVar];
  const envValue = process.env[envVar];
  if (envValue === undefined) {
    return defaultValue;
  }
  return isEnvTruthy(envValue);
}
function getTelemetryAttributes() {
  const userId = getOrCreateUserID();
  const sessionId = getSessionId();
  const attributes = {
    "user.id": userId
  };
  if (shouldIncludeAttribute("OTEL_METRICS_INCLUDE_SESSION_ID")) {
    attributes["session.id"] = sessionId;
  }
  if (shouldIncludeAttribute("OTEL_METRICS_INCLUDE_VERSION")) {
    attributes["app.version"] = "1.0.0";
  }
  const oauthAccount = getOauthAccountInfo();
  if (oauthAccount) {
    const orgId = oauthAccount.organizationUuid;
    const email = oauthAccount.emailAddress;
    const accountUuid = oauthAccount.accountUuid;
    if (orgId)
      attributes["organization.id"] = orgId;
    if (email)
      attributes["user.email"] = email;
    if (accountUuid && shouldIncludeAttribute("OTEL_METRICS_INCLUDE_ACCOUNT_UUID")) {
      attributes["user.account_uuid"] = accountUuid;
      attributes["user.account_id"] = process.env.CLAUDE_CODE_ACCOUNT_TAGGED_ID || toTaggedId("user", accountUuid);
    }
  }
  if (envDynamic.terminal) {
    attributes["terminal.type"] = envDynamic.terminal;
  }
  return attributes;
}
var METRICS_CARDINALITY_DEFAULTS;
var init_telemetryAttributes = __esm(() => {
  init_state();
  init_auth();
  init_config();
  init_envDynamic();
  init_envUtils();
  init_taggedId();
  METRICS_CARDINALITY_DEFAULTS = {
    OTEL_METRICS_INCLUDE_SESSION_ID: true,
    OTEL_METRICS_INCLUDE_VERSION: false,
    OTEL_METRICS_INCLUDE_ACCOUNT_UUID: true
  };
});

// src/utils/telemetry/events.ts
function isUserPromptLoggingEnabled() {
  return isEnvTruthy(process.env.OTEL_LOG_USER_PROMPTS);
}
function redactIfDisabled(content) {
  return isUserPromptLoggingEnabled() ? content : "<REDACTED>";
}
async function logOTelEvent(eventName, metadata = {}) {
  const eventLogger = getEventLogger();
  if (!eventLogger) {
    if (!hasWarnedNoEventLogger) {
      hasWarnedNoEventLogger = true;
      logForDebugging(`[3P telemetry] Event dropped (no event logger initialized): ${eventName}`, { level: "warn" });
    }
    return;
  }
  if (false) {}
  const attributes = {
    ...getTelemetryAttributes(),
    "event.name": eventName,
    "event.timestamp": new Date().toISOString(),
    "event.sequence": eventSequence++
  };
  const promptId = getPromptId();
  if (promptId) {
    attributes["prompt.id"] = promptId;
  }
  const workspaceDir = process.env.CLAUDE_CODE_WORKSPACE_HOST_PATHS;
  if (workspaceDir) {
    attributes["workspace.host_paths"] = workspaceDir.split("|");
  }
  for (const [key, value] of Object.entries(metadata)) {
    if (value !== undefined) {
      attributes[key] = value;
    }
  }
  eventLogger.emit({
    body: `claude_code.${eventName}`,
    attributes
  });
}
var eventSequence = 0, hasWarnedNoEventLogger = false;
var init_events = __esm(() => {
  init_state();
  init_debug();
  init_envUtils();
  init_telemetryAttributes();
});

// src/utils/telemetry/betaSessionTracing.ts
import { createHash } from "crypto";
function clearBetaTracingState() {
  seenHashes.clear();
  lastReportedMessageHash.clear();
}
function isBetaTracingEnabled() {
  const baseEnabled = isEnvTruthy(process.env.ENABLE_BETA_TRACING_DETAILED) && Boolean(process.env.BETA_TRACING_ENDPOINT);
  if (!baseEnabled) {
    return false;
  }
  if (process.env.USER_TYPE !== "ant") {
    return getIsNonInteractiveSession() || getFeatureValue_CACHED_MAY_BE_STALE("tengu_trace_lantern", false);
  }
  return true;
}
function truncateContent(content, maxSize = MAX_CONTENT_SIZE) {
  if (content.length <= maxSize) {
    return { content, truncated: false };
  }
  return {
    content: content.slice(0, maxSize) + `

[TRUNCATED - Content exceeds 60KB limit]`,
    truncated: true
  };
}
function shortHash(content) {
  return createHash("sha256").update(content).digest("hex").slice(0, 12);
}
function hashSystemPrompt(systemPrompt) {
  return `sp_${shortHash(systemPrompt)}`;
}
function hashMessage(message) {
  const content = jsonStringify(message.message.content);
  return `msg_${shortHash(content)}`;
}
function extractSystemReminderContent(text) {
  const match = text.trim().match(SYSTEM_REMINDER_REGEX);
  return match && match[1] ? match[1].trim() : null;
}
function formatMessagesForContext(messages) {
  const contextParts = [];
  const systemReminders = [];
  for (const message of messages) {
    const content = message.message.content;
    if (typeof content === "string") {
      const reminderContent = extractSystemReminderContent(content);
      if (reminderContent) {
        systemReminders.push(reminderContent);
      } else {
        contextParts.push(`[USER]
${content}`);
      }
    } else if (Array.isArray(content)) {
      for (const block of content) {
        if (block.type === "text") {
          const reminderContent = extractSystemReminderContent(block.text);
          if (reminderContent) {
            systemReminders.push(reminderContent);
          } else {
            contextParts.push(`[USER]
${block.text}`);
          }
        } else if (block.type === "tool_result") {
          const resultContent = typeof block.content === "string" ? block.content : jsonStringify(block.content);
          const reminderContent = extractSystemReminderContent(resultContent);
          if (reminderContent) {
            systemReminders.push(reminderContent);
          } else {
            contextParts.push(`[TOOL RESULT: ${block.tool_use_id}]
${resultContent}`);
          }
        }
      }
    }
  }
  return { contextParts, systemReminders };
}
function addBetaInteractionAttributes(span, userPrompt) {
  if (!isBetaTracingEnabled()) {
    return;
  }
  const { content: truncatedPrompt, truncated } = truncateContent(`[USER PROMPT]
${userPrompt}`);
  span.setAttributes({
    new_context: truncatedPrompt,
    ...truncated && {
      new_context_truncated: true,
      new_context_original_length: userPrompt.length
    }
  });
}
function addBetaLLMRequestAttributes(span, newContext, messagesForAPI) {
  if (!isBetaTracingEnabled()) {
    return;
  }
  if (newContext?.systemPrompt) {
    const promptHash = hashSystemPrompt(newContext.systemPrompt);
    const preview = newContext.systemPrompt.slice(0, 500);
    span.setAttribute("system_prompt_hash", promptHash);
    span.setAttribute("system_prompt_preview", preview);
    span.setAttribute("system_prompt_length", newContext.systemPrompt.length);
    if (!seenHashes.has(promptHash)) {
      seenHashes.add(promptHash);
      const { content: truncatedPrompt, truncated } = truncateContent(newContext.systemPrompt);
      logOTelEvent("system_prompt", {
        system_prompt_hash: promptHash,
        system_prompt: truncatedPrompt,
        system_prompt_length: String(newContext.systemPrompt.length),
        ...truncated && { system_prompt_truncated: "true" }
      });
    }
  }
  if (newContext?.tools) {
    try {
      const toolsArray = jsonParse(newContext.tools);
      const toolsWithHashes = toolsArray.map((tool) => {
        const toolJson = jsonStringify(tool);
        const toolHash = shortHash(toolJson);
        return {
          name: typeof tool.name === "string" ? tool.name : "unknown",
          hash: toolHash,
          json: toolJson
        };
      });
      span.setAttribute("tools", jsonStringify(toolsWithHashes.map(({ name, hash }) => ({ name, hash }))));
      span.setAttribute("tools_count", toolsWithHashes.length);
      for (const { name, hash, json } of toolsWithHashes) {
        if (!seenHashes.has(`tool_${hash}`)) {
          seenHashes.add(`tool_${hash}`);
          const { content: truncatedTool, truncated } = truncateContent(json);
          logOTelEvent("tool", {
            tool_name: sanitizeToolNameForAnalytics(name),
            tool_hash: hash,
            tool: truncatedTool,
            ...truncated && { tool_truncated: "true" }
          });
        }
      }
    } catch {
      span.setAttribute("tools_parse_error", true);
    }
  }
  if (messagesForAPI && messagesForAPI.length > 0 && newContext?.querySource) {
    const querySource = newContext.querySource;
    const lastHash = lastReportedMessageHash.get(querySource);
    let startIndex = 0;
    if (lastHash) {
      for (let i = 0;i < messagesForAPI.length; i++) {
        const msg = messagesForAPI[i];
        if (msg && hashMessage(msg) === lastHash) {
          startIndex = i + 1;
          break;
        }
      }
    }
    const newMessages = messagesForAPI.slice(startIndex).filter((m) => m.type === "user");
    if (newMessages.length > 0) {
      const { contextParts, systemReminders } = formatMessagesForContext(newMessages);
      if (contextParts.length > 0) {
        const fullContext = contextParts.join(`

---

`);
        const { content: truncatedContext, truncated } = truncateContent(fullContext);
        span.setAttributes({
          new_context: truncatedContext,
          new_context_message_count: newMessages.length,
          ...truncated && {
            new_context_truncated: true,
            new_context_original_length: fullContext.length
          }
        });
      }
      if (systemReminders.length > 0) {
        const fullReminders = systemReminders.join(`

---

`);
        const { content: truncatedReminders, truncated: remindersTruncated } = truncateContent(fullReminders);
        span.setAttributes({
          system_reminders: truncatedReminders,
          system_reminders_count: systemReminders.length,
          ...remindersTruncated && {
            system_reminders_truncated: true,
            system_reminders_original_length: fullReminders.length
          }
        });
      }
      const lastMessage = messagesForAPI[messagesForAPI.length - 1];
      if (lastMessage) {
        lastReportedMessageHash.set(querySource, hashMessage(lastMessage));
      }
    }
  }
}
function addBetaLLMResponseAttributes(endAttributes, metadata) {
  if (!isBetaTracingEnabled() || !metadata) {
    return;
  }
  if (metadata.modelOutput !== undefined) {
    const { content: modelOutput, truncated: outputTruncated } = truncateContent(metadata.modelOutput);
    endAttributes["response.model_output"] = modelOutput;
    if (outputTruncated) {
      endAttributes["response.model_output_truncated"] = true;
      endAttributes["response.model_output_original_length"] = metadata.modelOutput.length;
    }
  }
  if (process.env.USER_TYPE === "ant" && metadata.thinkingOutput !== undefined) {
    const { content: thinkingOutput, truncated: thinkingTruncated } = truncateContent(metadata.thinkingOutput);
    endAttributes["response.thinking_output"] = thinkingOutput;
    if (thinkingTruncated) {
      endAttributes["response.thinking_output_truncated"] = true;
      endAttributes["response.thinking_output_original_length"] = metadata.thinkingOutput.length;
    }
  }
}
function addBetaToolInputAttributes(span, toolName, toolInput) {
  if (!isBetaTracingEnabled()) {
    return;
  }
  const { content: truncatedInput, truncated } = truncateContent(`[TOOL INPUT: ${toolName}]
${toolInput}`);
  span.setAttributes({
    tool_input: truncatedInput,
    ...truncated && {
      tool_input_truncated: true,
      tool_input_original_length: toolInput.length
    }
  });
}
function addBetaToolResultAttributes(endAttributes, toolName, toolResult) {
  if (!isBetaTracingEnabled()) {
    return;
  }
  const { content: truncatedResult, truncated } = truncateContent(`[TOOL RESULT: ${toolName}]
${toolResult}`);
  endAttributes["new_context"] = truncatedResult;
  if (truncated) {
    endAttributes["new_context_truncated"] = true;
    endAttributes["new_context_original_length"] = toolResult.length;
  }
}
var seenHashes, lastReportedMessageHash, MAX_CONTENT_SIZE, SYSTEM_REMINDER_REGEX;
var init_betaSessionTracing = __esm(() => {
  init_state();
  init_growthbook();
  init_metadata();
  init_envUtils();
  init_slowOperations();
  init_events();
  seenHashes = new Set;
  lastReportedMessageHash = new Map;
  MAX_CONTENT_SIZE = 60 * 1024;
  SYSTEM_REMINDER_REGEX = /^<system-reminder>\n?([\s\S]*?)\n?<\/system-reminder>$/;
});

// src/utils/telemetry/perfettoTracing.ts
function stringToNumericHash(str) {
  return Math.abs(djb2Hash(str)) || 1;
}
function getProcessIdForAgent(agentId) {
  const existing = agentIdToProcessId.get(agentId);
  if (existing !== undefined)
    return existing;
  processIdCounter++;
  agentIdToProcessId.set(agentId, processIdCounter);
  return processIdCounter;
}
function getCurrentAgentInfo() {
  const agentId = getAgentId() ?? getSessionId();
  const agentName = getAgentName() ?? "main";
  const parentSessionId = getParentSessionId();
  const existing = agentRegistry.get(agentId);
  if (existing)
    return existing;
  const info = {
    agentId,
    agentName,
    parentAgentId: parentSessionId,
    processId: agentId === getSessionId() ? 1 : getProcessIdForAgent(agentId),
    threadId: stringToNumericHash(agentName)
  };
  agentRegistry.set(agentId, info);
  totalAgentCount++;
  return info;
}
function getTimestamp() {
  return (Date.now() - startTimeMs) * 1000;
}
function generateSpanId() {
  return `span_${++spanIdCounter}`;
}
function initializePerfettoTracing() {
  const envValue = process.env.CLAUDE_CODE_PERFETTO_TRACE;
  logForDebugging(`[Perfetto] initializePerfettoTracing called, env value: ${envValue}`);
  if (false) {}
}
function emitProcessMetadata(agentInfo) {
  if (!isEnabled)
    return;
  metadataEvents.push({
    name: "process_name",
    cat: "__metadata",
    ph: "M",
    ts: 0,
    pid: agentInfo.processId,
    tid: 0,
    args: { name: agentInfo.agentName }
  });
  metadataEvents.push({
    name: "thread_name",
    cat: "__metadata",
    ph: "M",
    ts: 0,
    pid: agentInfo.processId,
    tid: agentInfo.threadId,
    args: { name: agentInfo.agentName }
  });
  if (agentInfo.parentAgentId) {
    metadataEvents.push({
      name: "parent_agent",
      cat: "__metadata",
      ph: "M",
      ts: 0,
      pid: agentInfo.processId,
      tid: 0,
      args: {
        parent_agent_id: agentInfo.parentAgentId
      }
    });
  }
}
function isPerfettoTracingEnabled() {
  return isEnabled;
}
function registerAgent(agentId, agentName, parentAgentId) {
  if (!isEnabled)
    return;
  const info = {
    agentId,
    agentName,
    parentAgentId,
    processId: getProcessIdForAgent(agentId),
    threadId: stringToNumericHash(agentName)
  };
  agentRegistry.set(agentId, info);
  totalAgentCount++;
  emitProcessMetadata(info);
}
function unregisterAgent(agentId) {
  if (!isEnabled)
    return;
  agentRegistry.delete(agentId);
  agentIdToProcessId.delete(agentId);
}
function startLLMRequestPerfettoSpan(args) {
  if (!isEnabled)
    return "";
  const spanId = generateSpanId();
  const agentInfo = getCurrentAgentInfo();
  pendingSpans.set(spanId, {
    name: "API Call",
    category: "api",
    startTime: getTimestamp(),
    agentInfo,
    args: {
      model: args.model,
      prompt_tokens: args.promptTokens,
      message_id: args.messageId,
      is_speculative: args.isSpeculative ?? false,
      query_source: args.querySource
    }
  });
  events.push({
    name: "API Call",
    cat: "api",
    ph: "B",
    ts: pendingSpans.get(spanId).startTime,
    pid: agentInfo.processId,
    tid: agentInfo.threadId,
    args: pendingSpans.get(spanId).args
  });
  return spanId;
}
function endLLMRequestPerfettoSpan(spanId, metadata) {
  if (!isEnabled || !spanId)
    return;
  const pending = pendingSpans.get(spanId);
  if (!pending)
    return;
  const endTime = getTimestamp();
  const duration = endTime - pending.startTime;
  const promptTokens = metadata.promptTokens ?? pending.args.prompt_tokens;
  const ttftMs = metadata.ttftMs;
  const ttltMs = metadata.ttltMs;
  const outputTokens = metadata.outputTokens;
  const cacheReadTokens = metadata.cacheReadTokens;
  const itps = ttftMs !== undefined && promptTokens !== undefined && ttftMs > 0 ? Math.round(promptTokens / (ttftMs / 1000) * 100) / 100 : undefined;
  const samplingMs = ttltMs !== undefined && ttftMs !== undefined ? ttltMs - ttftMs : undefined;
  const otps = samplingMs !== undefined && outputTokens !== undefined && samplingMs > 0 ? Math.round(outputTokens / (samplingMs / 1000) * 100) / 100 : undefined;
  const cacheHitRate = cacheReadTokens !== undefined && promptTokens !== undefined && promptTokens > 0 ? Math.round(cacheReadTokens / promptTokens * 1e4) / 100 : undefined;
  const requestSetupMs = metadata.requestSetupMs;
  const attemptStartTimes = metadata.attemptStartTimes;
  const args = {
    ...pending.args,
    ttft_ms: ttftMs,
    ttlt_ms: ttltMs,
    prompt_tokens: promptTokens,
    output_tokens: outputTokens,
    cache_read_tokens: cacheReadTokens,
    cache_creation_tokens: metadata.cacheCreationTokens,
    message_id: metadata.messageId ?? pending.args.message_id,
    success: metadata.success ?? true,
    error: metadata.error,
    duration_ms: duration / 1000,
    request_setup_ms: requestSetupMs,
    itps,
    otps,
    cache_hit_rate_pct: cacheHitRate
  };
  const setupUs = requestSetupMs !== undefined && requestSetupMs > 0 ? requestSetupMs * 1000 : 0;
  if (setupUs > 0) {
    const setupEndTs = pending.startTime + setupUs;
    events.push({
      name: "Request Setup",
      cat: "api,setup",
      ph: "B",
      ts: pending.startTime,
      pid: pending.agentInfo.processId,
      tid: pending.agentInfo.threadId,
      args: {
        request_setup_ms: requestSetupMs,
        attempt_count: attemptStartTimes?.length ?? 1
      }
    });
    if (attemptStartTimes && attemptStartTimes.length > 1) {
      const baseWallMs = attemptStartTimes[0];
      for (let i = 0;i < attemptStartTimes.length - 1; i++) {
        const attemptStartUs = pending.startTime + (attemptStartTimes[i] - baseWallMs) * 1000;
        const attemptEndUs = pending.startTime + (attemptStartTimes[i + 1] - baseWallMs) * 1000;
        events.push({
          name: `Attempt ${i + 1} (retry)`,
          cat: "api,retry",
          ph: "B",
          ts: attemptStartUs,
          pid: pending.agentInfo.processId,
          tid: pending.agentInfo.threadId,
          args: { attempt: i + 1 }
        });
        events.push({
          name: `Attempt ${i + 1} (retry)`,
          cat: "api,retry",
          ph: "E",
          ts: attemptEndUs,
          pid: pending.agentInfo.processId,
          tid: pending.agentInfo.threadId
        });
      }
    }
    events.push({
      name: "Request Setup",
      cat: "api,setup",
      ph: "E",
      ts: setupEndTs,
      pid: pending.agentInfo.processId,
      tid: pending.agentInfo.threadId
    });
  }
  if (ttftMs !== undefined) {
    const firstTokenStartTs = pending.startTime + setupUs;
    const firstTokenEndTs = firstTokenStartTs + ttftMs * 1000;
    events.push({
      name: "First Token",
      cat: "api,ttft",
      ph: "B",
      ts: firstTokenStartTs,
      pid: pending.agentInfo.processId,
      tid: pending.agentInfo.threadId,
      args: {
        ttft_ms: ttftMs,
        prompt_tokens: promptTokens,
        itps,
        cache_hit_rate_pct: cacheHitRate
      }
    });
    events.push({
      name: "First Token",
      cat: "api,ttft",
      ph: "E",
      ts: firstTokenEndTs,
      pid: pending.agentInfo.processId,
      tid: pending.agentInfo.threadId
    });
    const actualSamplingMs = ttltMs !== undefined ? ttltMs - ttftMs - setupUs / 1000 : undefined;
    if (actualSamplingMs !== undefined && actualSamplingMs > 0) {
      events.push({
        name: "Sampling",
        cat: "api,sampling",
        ph: "B",
        ts: firstTokenEndTs,
        pid: pending.agentInfo.processId,
        tid: pending.agentInfo.threadId,
        args: {
          sampling_ms: actualSamplingMs,
          output_tokens: outputTokens,
          otps
        }
      });
      events.push({
        name: "Sampling",
        cat: "api,sampling",
        ph: "E",
        ts: firstTokenEndTs + actualSamplingMs * 1000,
        pid: pending.agentInfo.processId,
        tid: pending.agentInfo.threadId
      });
    }
  }
  events.push({
    name: pending.name,
    cat: pending.category,
    ph: "E",
    ts: endTime,
    pid: pending.agentInfo.processId,
    tid: pending.agentInfo.threadId,
    args
  });
  pendingSpans.delete(spanId);
}
function startToolPerfettoSpan(toolName, args) {
  if (!isEnabled)
    return "";
  const spanId = generateSpanId();
  const agentInfo = getCurrentAgentInfo();
  pendingSpans.set(spanId, {
    name: `Tool: ${toolName}`,
    category: "tool",
    startTime: getTimestamp(),
    agentInfo,
    args: {
      tool_name: toolName,
      ...args
    }
  });
  events.push({
    name: `Tool: ${toolName}`,
    cat: "tool",
    ph: "B",
    ts: pendingSpans.get(spanId).startTime,
    pid: agentInfo.processId,
    tid: agentInfo.threadId,
    args: pendingSpans.get(spanId).args
  });
  return spanId;
}
function endToolPerfettoSpan(spanId, metadata) {
  if (!isEnabled || !spanId)
    return;
  const pending = pendingSpans.get(spanId);
  if (!pending)
    return;
  const endTime = getTimestamp();
  const duration = endTime - pending.startTime;
  const args = {
    ...pending.args,
    success: metadata?.success ?? true,
    error: metadata?.error,
    result_tokens: metadata?.resultTokens,
    duration_ms: duration / 1000
  };
  events.push({
    name: pending.name,
    cat: pending.category,
    ph: "E",
    ts: endTime,
    pid: pending.agentInfo.processId,
    tid: pending.agentInfo.threadId,
    args
  });
  pendingSpans.delete(spanId);
}
function startUserInputPerfettoSpan(context) {
  if (!isEnabled)
    return "";
  const spanId = generateSpanId();
  const agentInfo = getCurrentAgentInfo();
  pendingSpans.set(spanId, {
    name: "Waiting for User Input",
    category: "user_input",
    startTime: getTimestamp(),
    agentInfo,
    args: {
      context
    }
  });
  events.push({
    name: "Waiting for User Input",
    cat: "user_input",
    ph: "B",
    ts: pendingSpans.get(spanId).startTime,
    pid: agentInfo.processId,
    tid: agentInfo.threadId,
    args: pendingSpans.get(spanId).args
  });
  return spanId;
}
function endUserInputPerfettoSpan(spanId, metadata) {
  if (!isEnabled || !spanId)
    return;
  const pending = pendingSpans.get(spanId);
  if (!pending)
    return;
  const endTime = getTimestamp();
  const duration = endTime - pending.startTime;
  const args = {
    ...pending.args,
    decision: metadata?.decision,
    source: metadata?.source,
    duration_ms: duration / 1000
  };
  events.push({
    name: pending.name,
    cat: pending.category,
    ph: "E",
    ts: endTime,
    pid: pending.agentInfo.processId,
    tid: pending.agentInfo.threadId,
    args
  });
  pendingSpans.delete(spanId);
}
function startInteractionPerfettoSpan(userPrompt) {
  if (!isEnabled)
    return "";
  const spanId = generateSpanId();
  const agentInfo = getCurrentAgentInfo();
  pendingSpans.set(spanId, {
    name: "Interaction",
    category: "interaction",
    startTime: getTimestamp(),
    agentInfo,
    args: {
      user_prompt_length: userPrompt?.length
    }
  });
  events.push({
    name: "Interaction",
    cat: "interaction",
    ph: "B",
    ts: pendingSpans.get(spanId).startTime,
    pid: agentInfo.processId,
    tid: agentInfo.threadId,
    args: pendingSpans.get(spanId).args
  });
  return spanId;
}
function endInteractionPerfettoSpan(spanId) {
  if (!isEnabled || !spanId)
    return;
  const pending = pendingSpans.get(spanId);
  if (!pending)
    return;
  const endTime = getTimestamp();
  const duration = endTime - pending.startTime;
  events.push({
    name: pending.name,
    cat: pending.category,
    ph: "E",
    ts: endTime,
    pid: pending.agentInfo.processId,
    tid: pending.agentInfo.threadId,
    args: {
      ...pending.args,
      duration_ms: duration / 1000
    }
  });
  pendingSpans.delete(spanId);
}
var isEnabled = false, metadataEvents, events, pendingSpans, agentRegistry, totalAgentCount = 0, startTimeMs = 0, spanIdCounter = 0, processIdCounter = 1, agentIdToProcessId, STALE_SPAN_TTL_MS, STALE_SPAN_CLEANUP_INTERVAL_MS;
var init_perfettoTracing = __esm(() => {
  init_state();
  init_cleanupRegistry();
  init_debug();
  init_envUtils();
  init_errors();
  init_hash();
  init_slowOperations();
  init_teammate();
  metadataEvents = [];
  events = [];
  pendingSpans = new Map;
  agentRegistry = new Map;
  agentIdToProcessId = new Map;
  STALE_SPAN_TTL_MS = 30 * 60 * 1000;
  STALE_SPAN_CLEANUP_INTERVAL_MS = 60 * 1000;
});

// src/utils/telemetry/sessionTracing.ts
import { AsyncLocalStorage } from "async_hooks";
function getSpanId(span) {
  return span.spanContext().spanId || "";
}
function ensureCleanupInterval() {
  if (_cleanupIntervalStarted)
    return;
  _cleanupIntervalStarted = true;
  const interval = setInterval(() => {
    const cutoff = Date.now() - SPAN_TTL_MS;
    for (const [spanId, weakRef] of activeSpans) {
      const ctx = weakRef.deref();
      if (ctx === undefined) {
        activeSpans.delete(spanId);
        strongSpans.delete(spanId);
      } else if (ctx.startTime < cutoff) {
        if (!ctx.ended)
          ctx.span.end();
        activeSpans.delete(spanId);
        strongSpans.delete(spanId);
      }
    }
  }, 60000);
  if (typeof interval.unref === "function") {
    interval.unref();
  }
}
function isEnhancedTelemetryEnabled() {
  if (false) {}
  return false;
}
function isAnyTracingEnabled() {
  return isEnhancedTelemetryEnabled() || isBetaTracingEnabled();
}
function getTracer() {
  return import_api.trace.getTracer("com.anthropic.claude_code.tracing", "1.0.0");
}
function createSpanAttributes(spanType, customAttributes = {}) {
  const baseAttributes = getTelemetryAttributes();
  const attributes = {
    ...baseAttributes,
    "span.type": spanType,
    ...customAttributes
  };
  return attributes;
}
function startInteractionSpan(userPrompt) {
  ensureCleanupInterval();
  const perfettoSpanId = isPerfettoTracingEnabled() ? startInteractionPerfettoSpan(userPrompt) : undefined;
  if (!isAnyTracingEnabled()) {
    if (perfettoSpanId) {
      const dummySpan = import_api.trace.getActiveSpan() || getTracer().startSpan("dummy");
      const spanId2 = getSpanId(dummySpan);
      const spanContextObj2 = {
        span: dummySpan,
        startTime: Date.now(),
        attributes: {},
        perfettoSpanId
      };
      activeSpans.set(spanId2, new WeakRef(spanContextObj2));
      interactionContext.enterWith(spanContextObj2);
      return dummySpan;
    }
    return import_api.trace.getActiveSpan() || getTracer().startSpan("dummy");
  }
  const tracer = getTracer();
  const isUserPromptLoggingEnabled2 = isEnvTruthy(process.env.OTEL_LOG_USER_PROMPTS);
  const promptToLog = isUserPromptLoggingEnabled2 ? userPrompt : "<REDACTED>";
  interactionSequence++;
  const attributes = createSpanAttributes("interaction", {
    user_prompt: promptToLog,
    user_prompt_length: userPrompt.length,
    "interaction.sequence": interactionSequence
  });
  const span = tracer.startSpan("claude_code.interaction", {
    attributes
  });
  addBetaInteractionAttributes(span, userPrompt);
  const spanId = getSpanId(span);
  const spanContextObj = {
    span,
    startTime: Date.now(),
    attributes,
    perfettoSpanId
  };
  activeSpans.set(spanId, new WeakRef(spanContextObj));
  interactionContext.enterWith(spanContextObj);
  return span;
}
function endInteractionSpan() {
  const spanContext = interactionContext.getStore();
  if (!spanContext) {
    return;
  }
  if (spanContext.ended) {
    return;
  }
  if (spanContext.perfettoSpanId) {
    endInteractionPerfettoSpan(spanContext.perfettoSpanId);
  }
  if (!isAnyTracingEnabled()) {
    spanContext.ended = true;
    activeSpans.delete(getSpanId(spanContext.span));
    interactionContext.enterWith(undefined);
    return;
  }
  const duration = Date.now() - spanContext.startTime;
  spanContext.span.setAttributes({
    "interaction.duration_ms": duration
  });
  spanContext.span.end();
  spanContext.ended = true;
  activeSpans.delete(getSpanId(spanContext.span));
  interactionContext.enterWith(undefined);
}
function startLLMRequestSpan(model, newContext, messagesForAPI, fastMode) {
  const perfettoSpanId = isPerfettoTracingEnabled() ? startLLMRequestPerfettoSpan({
    model,
    querySource: newContext?.querySource,
    messageId: undefined
  }) : undefined;
  if (!isAnyTracingEnabled()) {
    if (perfettoSpanId) {
      const dummySpan = import_api.trace.getActiveSpan() || getTracer().startSpan("dummy");
      const spanId2 = getSpanId(dummySpan);
      const spanContextObj2 = {
        span: dummySpan,
        startTime: Date.now(),
        attributes: { model },
        perfettoSpanId
      };
      activeSpans.set(spanId2, new WeakRef(spanContextObj2));
      strongSpans.set(spanId2, spanContextObj2);
      return dummySpan;
    }
    return import_api.trace.getActiveSpan() || getTracer().startSpan("dummy");
  }
  const tracer = getTracer();
  const parentSpanCtx = interactionContext.getStore();
  const attributes = createSpanAttributes("llm_request", {
    model,
    "llm_request.context": parentSpanCtx ? "interaction" : "standalone",
    speed: fastMode ? "fast" : "normal"
  });
  const ctx = parentSpanCtx ? import_api.trace.setSpan(import_api.context.active(), parentSpanCtx.span) : import_api.context.active();
  const span = tracer.startSpan("claude_code.llm_request", { attributes }, ctx);
  if (newContext?.querySource) {
    span.setAttribute("query_source", newContext.querySource);
  }
  addBetaLLMRequestAttributes(span, newContext, messagesForAPI);
  const spanId = getSpanId(span);
  const spanContextObj = {
    span,
    startTime: Date.now(),
    attributes,
    perfettoSpanId
  };
  activeSpans.set(spanId, new WeakRef(spanContextObj));
  strongSpans.set(spanId, spanContextObj);
  return span;
}
function endLLMRequestSpan(span, metadata) {
  let llmSpanContext;
  if (span) {
    const spanId2 = getSpanId(span);
    llmSpanContext = activeSpans.get(spanId2)?.deref();
  } else {
    llmSpanContext = Array.from(activeSpans.values()).findLast((r) => {
      const ctx = r.deref();
      return ctx?.attributes["span.type"] === "llm_request" || ctx?.attributes["model"];
    })?.deref();
  }
  if (!llmSpanContext) {
    return;
  }
  const duration = Date.now() - llmSpanContext.startTime;
  if (llmSpanContext.perfettoSpanId) {
    endLLMRequestPerfettoSpan(llmSpanContext.perfettoSpanId, {
      ttftMs: metadata?.ttftMs,
      ttltMs: duration,
      promptTokens: metadata?.inputTokens,
      outputTokens: metadata?.outputTokens,
      cacheReadTokens: metadata?.cacheReadTokens,
      cacheCreationTokens: metadata?.cacheCreationTokens,
      success: metadata?.success,
      error: metadata?.error,
      requestSetupMs: metadata?.requestSetupMs,
      attemptStartTimes: metadata?.attemptStartTimes
    });
  }
  if (!isAnyTracingEnabled()) {
    const spanId2 = getSpanId(llmSpanContext.span);
    activeSpans.delete(spanId2);
    strongSpans.delete(spanId2);
    return;
  }
  const endAttributes = {
    duration_ms: duration
  };
  if (metadata) {
    if (metadata.inputTokens !== undefined)
      endAttributes["input_tokens"] = metadata.inputTokens;
    if (metadata.outputTokens !== undefined)
      endAttributes["output_tokens"] = metadata.outputTokens;
    if (metadata.cacheReadTokens !== undefined)
      endAttributes["cache_read_tokens"] = metadata.cacheReadTokens;
    if (metadata.cacheCreationTokens !== undefined)
      endAttributes["cache_creation_tokens"] = metadata.cacheCreationTokens;
    if (metadata.success !== undefined)
      endAttributes["success"] = metadata.success;
    if (metadata.statusCode !== undefined)
      endAttributes["status_code"] = metadata.statusCode;
    if (metadata.error !== undefined)
      endAttributes["error"] = metadata.error;
    if (metadata.attempt !== undefined)
      endAttributes["attempt"] = metadata.attempt;
    if (metadata.hasToolCall !== undefined)
      endAttributes["response.has_tool_call"] = metadata.hasToolCall;
    if (metadata.ttftMs !== undefined)
      endAttributes["ttft_ms"] = metadata.ttftMs;
    addBetaLLMResponseAttributes(endAttributes, metadata);
  }
  llmSpanContext.span.setAttributes(endAttributes);
  llmSpanContext.span.end();
  const spanId = getSpanId(llmSpanContext.span);
  activeSpans.delete(spanId);
  strongSpans.delete(spanId);
}
function startToolSpan(toolName, toolAttributes, toolInput) {
  const perfettoSpanId = isPerfettoTracingEnabled() ? startToolPerfettoSpan(toolName, toolAttributes) : undefined;
  if (!isAnyTracingEnabled()) {
    if (perfettoSpanId) {
      const dummySpan = import_api.trace.getActiveSpan() || getTracer().startSpan("dummy");
      const spanId2 = getSpanId(dummySpan);
      const spanContextObj2 = {
        span: dummySpan,
        startTime: Date.now(),
        attributes: { "span.type": "tool", tool_name: toolName },
        perfettoSpanId
      };
      activeSpans.set(spanId2, new WeakRef(spanContextObj2));
      toolContext.enterWith(spanContextObj2);
      return dummySpan;
    }
    return import_api.trace.getActiveSpan() || getTracer().startSpan("dummy");
  }
  const tracer = getTracer();
  const parentSpanCtx = interactionContext.getStore();
  const attributes = createSpanAttributes("tool", {
    tool_name: toolName,
    ...toolAttributes
  });
  const ctx = parentSpanCtx ? import_api.trace.setSpan(import_api.context.active(), parentSpanCtx.span) : import_api.context.active();
  const span = tracer.startSpan("claude_code.tool", { attributes }, ctx);
  if (toolInput) {
    addBetaToolInputAttributes(span, toolName, toolInput);
  }
  const spanId = getSpanId(span);
  const spanContextObj = {
    span,
    startTime: Date.now(),
    attributes,
    perfettoSpanId
  };
  activeSpans.set(spanId, new WeakRef(spanContextObj));
  toolContext.enterWith(spanContextObj);
  return span;
}
function startToolBlockedOnUserSpan() {
  const perfettoSpanId = isPerfettoTracingEnabled() ? startUserInputPerfettoSpan("tool_permission") : undefined;
  if (!isAnyTracingEnabled()) {
    if (perfettoSpanId) {
      const dummySpan = import_api.trace.getActiveSpan() || getTracer().startSpan("dummy");
      const spanId2 = getSpanId(dummySpan);
      const spanContextObj2 = {
        span: dummySpan,
        startTime: Date.now(),
        attributes: { "span.type": "tool.blocked_on_user" },
        perfettoSpanId
      };
      activeSpans.set(spanId2, new WeakRef(spanContextObj2));
      strongSpans.set(spanId2, spanContextObj2);
      return dummySpan;
    }
    return import_api.trace.getActiveSpan() || getTracer().startSpan("dummy");
  }
  const tracer = getTracer();
  const parentSpanCtx = toolContext.getStore();
  const attributes = createSpanAttributes("tool.blocked_on_user");
  const ctx = parentSpanCtx ? import_api.trace.setSpan(import_api.context.active(), parentSpanCtx.span) : import_api.context.active();
  const span = tracer.startSpan("claude_code.tool.blocked_on_user", { attributes }, ctx);
  const spanId = getSpanId(span);
  const spanContextObj = {
    span,
    startTime: Date.now(),
    attributes,
    perfettoSpanId
  };
  activeSpans.set(spanId, new WeakRef(spanContextObj));
  strongSpans.set(spanId, spanContextObj);
  return span;
}
function endToolBlockedOnUserSpan(decision, source) {
  const blockedSpanContext = Array.from(activeSpans.values()).findLast((r) => r.deref()?.attributes["span.type"] === "tool.blocked_on_user")?.deref();
  if (!blockedSpanContext) {
    return;
  }
  if (blockedSpanContext.perfettoSpanId) {
    endUserInputPerfettoSpan(blockedSpanContext.perfettoSpanId, {
      decision,
      source
    });
  }
  if (!isAnyTracingEnabled()) {
    const spanId2 = getSpanId(blockedSpanContext.span);
    activeSpans.delete(spanId2);
    strongSpans.delete(spanId2);
    return;
  }
  const duration = Date.now() - blockedSpanContext.startTime;
  const attributes = {
    duration_ms: duration
  };
  if (decision) {
    attributes["decision"] = decision;
  }
  if (source) {
    attributes["source"] = source;
  }
  blockedSpanContext.span.setAttributes(attributes);
  blockedSpanContext.span.end();
  const spanId = getSpanId(blockedSpanContext.span);
  activeSpans.delete(spanId);
  strongSpans.delete(spanId);
}
function startToolExecutionSpan() {
  if (!isAnyTracingEnabled()) {
    return import_api.trace.getActiveSpan() || getTracer().startSpan("dummy");
  }
  const tracer = getTracer();
  const parentSpanCtx = toolContext.getStore();
  const attributes = createSpanAttributes("tool.execution");
  const ctx = parentSpanCtx ? import_api.trace.setSpan(import_api.context.active(), parentSpanCtx.span) : import_api.context.active();
  const span = tracer.startSpan("claude_code.tool.execution", { attributes }, ctx);
  const spanId = getSpanId(span);
  const spanContextObj = {
    span,
    startTime: Date.now(),
    attributes
  };
  activeSpans.set(spanId, new WeakRef(spanContextObj));
  strongSpans.set(spanId, spanContextObj);
  return span;
}
function endToolExecutionSpan(metadata) {
  if (!isAnyTracingEnabled()) {
    return;
  }
  const executionSpanContext = Array.from(activeSpans.values()).findLast((r) => r.deref()?.attributes["span.type"] === "tool.execution")?.deref();
  if (!executionSpanContext) {
    return;
  }
  const duration = Date.now() - executionSpanContext.startTime;
  const attributes = {
    duration_ms: duration
  };
  if (metadata) {
    if (metadata.success !== undefined)
      attributes["success"] = metadata.success;
    if (metadata.error !== undefined)
      attributes["error"] = metadata.error;
  }
  executionSpanContext.span.setAttributes(attributes);
  executionSpanContext.span.end();
  const spanId = getSpanId(executionSpanContext.span);
  activeSpans.delete(spanId);
  strongSpans.delete(spanId);
}
function endToolSpan(toolResult, resultTokens) {
  const toolSpanContext = toolContext.getStore();
  if (!toolSpanContext) {
    return;
  }
  if (toolSpanContext.perfettoSpanId) {
    endToolPerfettoSpan(toolSpanContext.perfettoSpanId, {
      success: true,
      resultTokens
    });
  }
  if (!isAnyTracingEnabled()) {
    const spanId2 = getSpanId(toolSpanContext.span);
    activeSpans.delete(spanId2);
    toolContext.enterWith(undefined);
    return;
  }
  const duration = Date.now() - toolSpanContext.startTime;
  const endAttributes = {
    duration_ms: duration
  };
  if (toolResult) {
    const toolName = toolSpanContext.attributes["tool_name"] || "unknown";
    addBetaToolResultAttributes(endAttributes, toolName, toolResult);
  }
  if (resultTokens !== undefined) {
    endAttributes["result_tokens"] = resultTokens;
  }
  toolSpanContext.span.setAttributes(endAttributes);
  toolSpanContext.span.end();
  const spanId = getSpanId(toolSpanContext.span);
  activeSpans.delete(spanId);
  toolContext.enterWith(undefined);
}
function isToolContentLoggingEnabled() {
  return isEnvTruthy(process.env.OTEL_LOG_TOOL_CONTENT);
}
function addToolContentEvent(eventName, attributes) {
  if (!isAnyTracingEnabled() || !isToolContentLoggingEnabled()) {
    return;
  }
  const currentSpanCtx = toolContext.getStore();
  if (!currentSpanCtx) {
    return;
  }
  const processedAttributes = {};
  for (const [key, value] of Object.entries(attributes)) {
    if (typeof value === "string") {
      const { content, truncated } = truncateContent(value);
      processedAttributes[key] = content;
      if (truncated) {
        processedAttributes[`${key}_truncated`] = true;
        processedAttributes[`${key}_original_length`] = value.length;
      }
    } else {
      processedAttributes[key] = value;
    }
  }
  currentSpanCtx.span.addEvent(eventName, processedAttributes);
}
function startHookSpan(hookEvent, hookName, numHooks, hookDefinitions) {
  if (!isBetaTracingEnabled()) {
    return import_api.trace.getActiveSpan() || getTracer().startSpan("dummy");
  }
  const tracer = getTracer();
  const parentSpanCtx = toolContext.getStore() ?? interactionContext.getStore();
  const attributes = createSpanAttributes("hook", {
    hook_event: hookEvent,
    hook_name: hookName,
    num_hooks: numHooks,
    hook_definitions: hookDefinitions
  });
  const ctx = parentSpanCtx ? import_api.trace.setSpan(import_api.context.active(), parentSpanCtx.span) : import_api.context.active();
  const span = tracer.startSpan("claude_code.hook", { attributes }, ctx);
  const spanId = getSpanId(span);
  const spanContextObj = {
    span,
    startTime: Date.now(),
    attributes
  };
  activeSpans.set(spanId, new WeakRef(spanContextObj));
  strongSpans.set(spanId, spanContextObj);
  return span;
}
function endHookSpan(span, metadata) {
  if (!isBetaTracingEnabled()) {
    return;
  }
  const spanId = getSpanId(span);
  const spanContext = activeSpans.get(spanId)?.deref();
  if (!spanContext) {
    return;
  }
  const duration = Date.now() - spanContext.startTime;
  const endAttributes = {
    duration_ms: duration
  };
  if (metadata) {
    if (metadata.numSuccess !== undefined)
      endAttributes["num_success"] = metadata.numSuccess;
    if (metadata.numBlocking !== undefined)
      endAttributes["num_blocking"] = metadata.numBlocking;
    if (metadata.numNonBlockingError !== undefined)
      endAttributes["num_non_blocking_error"] = metadata.numNonBlockingError;
    if (metadata.numCancelled !== undefined)
      endAttributes["num_cancelled"] = metadata.numCancelled;
  }
  spanContext.span.setAttributes(endAttributes);
  spanContext.span.end();
  activeSpans.delete(spanId);
  strongSpans.delete(spanId);
}
var import_api, interactionContext, toolContext, activeSpans, strongSpans, interactionSequence = 0, _cleanupIntervalStarted = false, SPAN_TTL_MS;
var init_sessionTracing = __esm(() => {
  init_growthbook();
  init_envUtils();
  init_telemetryAttributes();
  init_betaSessionTracing();
  init_perfettoTracing();
  import_api = __toESM(require_src(), 1);
  interactionContext = new AsyncLocalStorage;
  toolContext = new AsyncLocalStorage;
  activeSpans = new Map;
  strongSpans = new Map;
  SPAN_TTL_MS = 30 * 60 * 1000;
});

export { getTelemetryAttributes, init_telemetryAttributes, redactIfDisabled, logOTelEvent, init_events, clearBetaTracingState, isBetaTracingEnabled, init_betaSessionTracing, initializePerfettoTracing, isPerfettoTracingEnabled, registerAgent, unregisterAgent, init_perfettoTracing, isEnhancedTelemetryEnabled, startInteractionSpan, endInteractionSpan, startLLMRequestSpan, endLLMRequestSpan, startToolSpan, startToolBlockedOnUserSpan, endToolBlockedOnUserSpan, startToolExecutionSpan, endToolExecutionSpan, endToolSpan, addToolContentEvent, startHookSpan, endHookSpan, init_sessionTracing };
