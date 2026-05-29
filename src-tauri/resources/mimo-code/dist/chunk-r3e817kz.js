// @bun
import {
  normalizeControlMessageKeys
} from "./chunk-nt837qt9.js";
import {
  EMPTY_USAGE,
  init_rcDebugLog,
  init_src,
  rcLog
} from "./chunk-chmfqs2y.js";
import {
  init_analytics,
  logEvent
} from "./chunk-f2mhrmww.js";
import {
  BASH_INPUT_TAG,
  CHANNEL_MESSAGE_TAG,
  CROSS_SESSION_MESSAGE_TAG,
  LOCAL_COMMAND_CAVEAT_TAG,
  REMOTE_REVIEW_PROGRESS_TAG,
  REMOTE_REVIEW_TAG,
  TASK_NOTIFICATION_TAG,
  TEAMMATE_MESSAGE_TAG,
  TICK_TAG,
  ULTRAPLAN_TAG,
  init_displayTags,
  init_xml,
  stripDisplayTagsAllowEmpty
} from "./chunk-w5ahy59y.js";
import {
  errorMessage,
  init_debug,
  init_errors,
  init_slowOperations,
  jsonParse,
  logForDebugging
} from "./chunk-rpbc3b7k.js";

// src/bridge/bridgeMessaging.ts
init_analytics();
init_src();
import { randomUUID } from "crypto";
init_debug();
init_rcDebugLog();
init_displayTags();
init_errors();
init_slowOperations();
init_xml();
function isSDKMessage(value) {
  return value !== null && typeof value === "object" && "type" in value && typeof value.type === "string";
}
function isSDKControlResponse(value) {
  return value !== null && typeof value === "object" && "type" in value && value.type === "control_response" && "response" in value;
}
function isSDKControlRequest(value) {
  return value !== null && typeof value === "object" && "type" in value && value.type === "control_request" && "request_id" in value && "request" in value;
}
function isEligibleBridgeMessage(m) {
  if ((m.type === "user" || m.type === "assistant") && m.isVirtual) {
    return false;
  }
  return m.type === "user" || m.type === "assistant" || m.type === "system" && m.subtype === "local_command";
}
function extractTitleText(m) {
  if (m.type !== "user" || m.isMeta || m.toolUseResult || m.isCompactSummary)
    return;
  if (m.origin && m.origin.kind !== "human")
    return;
  const content = m.message.content;
  let raw;
  if (typeof content === "string") {
    raw = content;
  } else {
    for (const block of content ?? []) {
      if (block.type === "text") {
        raw = block.text;
        break;
      }
    }
  }
  if (!raw)
    return;
  const clean = stripDisplayTagsAllowEmpty(raw);
  return clean || undefined;
}
var SYSTEM_REMINDER_TAG = "system-reminder";
var XML_BLOCK_PATTERN = /\s*<([a-z][\w-]*)(?:\s[^>]*)?>[\s\S]*?<\/\1>\s*/gy;
var RUNNING_STATE_META_TAGS = new Set([
  BASH_INPUT_TAG,
  CHANNEL_MESSAGE_TAG,
  CROSS_SESSION_MESSAGE_TAG,
  REMOTE_REVIEW_PROGRESS_TAG,
  REMOTE_REVIEW_TAG,
  TASK_NOTIFICATION_TAG,
  TEAMMATE_MESSAGE_TAG,
  TICK_TAG,
  ULTRAPLAN_TAG
]);
function extractUserMessageText(message) {
  const content = message.message?.content;
  if (typeof content === "string")
    return content;
  if (!Array.isArray(content))
    return "";
  return content.filter((block) => !!block && typeof block === "object" && block.type === "text" && typeof block.text === "string").map((block) => block.text).join("");
}
function getEnvelopeTagNames(text) {
  const trimmed = text.trim();
  if (!trimmed)
    return null;
  XML_BLOCK_PATTERN.lastIndex = 0;
  const tags = [];
  while (XML_BLOCK_PATTERN.lastIndex < trimmed.length) {
    const match = XML_BLOCK_PATTERN.exec(trimmed);
    if (!match)
      return null;
    tags.push(match[1]);
  }
  return tags.length > 0 ? tags : null;
}
function shouldReportRunningForMessage(message) {
  if (message.type !== "user")
    return false;
  if (message.isVisibleInTranscriptOnly)
    return false;
  if (message.toolUseResult !== undefined)
    return true;
  if (!message.isMeta)
    return true;
  const tags = getEnvelopeTagNames(extractUserMessageText(message));
  if (!tags)
    return true;
  return tags.some((tag) => tag !== LOCAL_COMMAND_CAVEAT_TAG && tag !== SYSTEM_REMINDER_TAG && RUNNING_STATE_META_TAGS.has(tag));
}
function shouldReportRunningForMessages(messages) {
  return messages.some(shouldReportRunningForMessage);
}
function handleIngressMessage(data, recentPostedUUIDs, recentInboundUUIDs, onInboundMessage, onPermissionResponse, onControlRequest) {
  try {
    const parsed = normalizeControlMessageKeys(jsonParse(data));
    if (isSDKControlResponse(parsed)) {
      logForDebugging("[bridge:repl] Ingress message type=control_response");
      onPermissionResponse?.(parsed);
      return;
    }
    if (isSDKControlRequest(parsed)) {
      logForDebugging(`[bridge:repl] Inbound control_request subtype=${parsed.request.subtype}`);
      onControlRequest?.(parsed);
      return;
    }
    if (!isSDKMessage(parsed))
      return;
    const uuid = "uuid" in parsed && typeof parsed.uuid === "string" ? parsed.uuid : undefined;
    if (uuid && recentPostedUUIDs.has(uuid)) {
      logForDebugging(`[bridge:repl] Ignoring echo: type=${parsed.type} uuid=${uuid}`);
      return;
    }
    if (uuid && recentInboundUUIDs.has(uuid)) {
      logForDebugging(`[bridge:repl] Ignoring re-delivered inbound: type=${parsed.type} uuid=${uuid}`);
      return;
    }
    logForDebugging(`[bridge:repl] Ingress message type=${parsed.type}${uuid ? ` uuid=${uuid}` : ""}`);
    if (parsed.type === "user") {
      if (uuid)
        recentInboundUUIDs.add(uuid);
      logEvent("tengu_bridge_message_received", {
        is_repl: true
      });
      onInboundMessage?.(parsed);
    } else {
      logForDebugging(`[bridge:repl] Ignoring non-user inbound message: type=${parsed.type}`);
    }
  } catch (err) {
    logForDebugging(`[bridge:repl] Failed to parse ingress message: ${errorMessage(err)}`);
  }
}
var OUTBOUND_ONLY_ERROR = "This session is outbound-only. Enable Remote Control locally to allow inbound control.";
function handleServerControlRequest(request, handlers) {
  const {
    transport,
    sessionId,
    outboundOnly,
    onInterrupt,
    onSetModel,
    onSetMaxThinkingTokens,
    onSetPermissionMode
  } = handlers;
  if (!transport) {
    logForDebugging("[bridge:repl] Cannot respond to control_request: transport not configured");
    return;
  }
  let response;
  const req = request.request;
  if (outboundOnly && req.subtype !== "initialize") {
    response = {
      type: "control_response",
      response: {
        subtype: "error",
        request_id: request.request_id,
        error: OUTBOUND_ONLY_ERROR
      }
    };
    const event2 = { ...response, session_id: sessionId };
    transport.write(event2);
    logForDebugging(`[bridge:repl] Rejected ${req.subtype} (outbound-only) request_id=${request.request_id}`);
    return;
  }
  switch (req.subtype) {
    case "initialize":
      response = {
        type: "control_response",
        response: {
          subtype: "success",
          request_id: request.request_id,
          response: {
            commands: [],
            output_style: "normal",
            available_output_styles: ["normal"],
            models: [],
            account: {},
            pid: process.pid
          }
        }
      };
      break;
    case "set_model":
      onSetModel?.(req.model);
      response = {
        type: "control_response",
        response: {
          subtype: "success",
          request_id: request.request_id
        }
      };
      break;
    case "set_max_thinking_tokens":
      onSetMaxThinkingTokens?.(req.max_thinking_tokens ?? null);
      response = {
        type: "control_response",
        response: {
          subtype: "success",
          request_id: request.request_id
        }
      };
      break;
    case "set_permission_mode": {
      const verdict = onSetPermissionMode?.(req.mode) ?? {
        ok: false,
        error: "set_permission_mode is not supported in this context (onSetPermissionMode callback not registered)"
      };
      if (verdict.ok) {
        response = {
          type: "control_response",
          response: {
            subtype: "success",
            request_id: request.request_id
          }
        };
      } else {
        response = {
          type: "control_response",
          response: {
            subtype: "error",
            request_id: request.request_id,
            error: verdict.error
          }
        };
      }
      break;
    }
    case "interrupt":
      onInterrupt?.();
      response = {
        type: "control_response",
        response: {
          subtype: "success",
          request_id: request.request_id
        }
      };
      break;
    default:
      response = {
        type: "control_response",
        response: {
          subtype: "error",
          request_id: request.request_id,
          error: `REPL bridge does not handle control_request subtype: ${req.subtype}`
        }
      };
  }
  const event = { ...response, session_id: sessionId };
  transport.write(event);
  rcLog(`control_response: subtype=${req.subtype}` + ` request_id=${request.request_id}` + ` result=${response.response.subtype}`);
  logForDebugging(`[bridge:repl] Sent control_response for ${req.subtype} request_id=${request.request_id} result=${response.response.subtype}`);
}
function makeResultMessage(sessionId) {
  return {
    type: "result_success",
    subtype: "success",
    duration_ms: 0,
    duration_api_ms: 0,
    is_error: false,
    num_turns: 0,
    result: "",
    stop_reason: null,
    total_cost_usd: 0,
    usage: { ...EMPTY_USAGE },
    modelUsage: {},
    permission_denials: [],
    session_id: sessionId,
    uuid: randomUUID()
  };
}

class BoundedUUIDSet {
  capacity;
  ring;
  set = new Set;
  writeIdx = 0;
  constructor(capacity) {
    this.capacity = capacity;
    this.ring = new Array(capacity);
  }
  add(uuid) {
    if (this.set.has(uuid))
      return;
    const evicted = this.ring[this.writeIdx];
    if (evicted !== undefined) {
      this.set.delete(evicted);
    }
    this.ring[this.writeIdx] = uuid;
    this.set.add(uuid);
    this.writeIdx = (this.writeIdx + 1) % this.capacity;
  }
  has(uuid) {
    return this.set.has(uuid);
  }
  clear() {
    this.set.clear();
    this.ring.fill(undefined);
    this.writeIdx = 0;
  }
}

export { isEligibleBridgeMessage, extractTitleText, shouldReportRunningForMessage, shouldReportRunningForMessages, handleIngressMessage, handleServerControlRequest, makeResultMessage, BoundedUUIDSet };
