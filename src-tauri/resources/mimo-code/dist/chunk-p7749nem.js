// @bun
import {
  EXIT_PLAN_MODE_V2_TOOL_NAME,
  createAssistantMessage,
  getPlan,
  init_constants2 as init_constants,
  init_messages1 as init_messages,
  init_plans
} from "./chunk-ktw919wt.js";
import {
  init_strip_ansi,
  stripAnsi
} from "./chunk-er1s76c9.js";
import {
  LOCAL_COMMAND_STDERR_TAG,
  LOCAL_COMMAND_STDOUT_TAG,
  init_xml
} from "./chunk-w5ahy59y.js";
import {
  getSessionId,
  init_state
} from "./chunk-j5xzpm59.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/messages/mappers.ts
import { randomUUID } from "crypto";
function toInternalMessages(messages) {
  return messages.flatMap((message) => {
    switch (message.type) {
      case "assistant":
        return [
          {
            type: "assistant",
            message: message.message,
            uuid: message.uuid,
            requestId: undefined,
            timestamp: new Date().toISOString()
          }
        ];
      case "user":
        return [
          {
            type: "user",
            message: message.message,
            uuid: message.uuid ?? randomUUID(),
            timestamp: message.timestamp ?? new Date().toISOString(),
            isMeta: message.isSynthetic
          }
        ];
        if (message.subtype === "compact_boundary") {
          const compactMsg = message;
          return [
            {
              type: "system",
              content: "Conversation compacted",
              level: "info",
              subtype: "compact_boundary",
              compactMetadata: fromSDKCompactMetadata(compactMsg.compact_metadata),
              uuid: message.uuid,
              timestamp: new Date().toISOString()
            }
          ];
        }
        return [];
      default:
        return [];
    }
  });
}
function toSDKCompactMetadata(meta) {
  const seg = meta.preservedSegment;
  return {
    trigger: meta.trigger,
    pre_tokens: meta.preTokens,
    ...seg && {
      preserved_segment: {
        head_uuid: seg.headUuid,
        anchor_uuid: seg.anchorUuid,
        tail_uuid: seg.tailUuid
      }
    }
  };
}
function fromSDKCompactMetadata(meta) {
  const m = meta;
  const seg = m.preserved_segment;
  return {
    trigger: m.trigger,
    preTokens: m.pre_tokens,
    ...seg && {
      preservedSegment: {
        headUuid: seg.head_uuid,
        anchorUuid: seg.anchor_uuid,
        tailUuid: seg.tail_uuid
      }
    }
  };
}
function toSDKMessages(messages) {
  return messages.flatMap((message) => {
    switch (message.type) {
      case "assistant":
        return [
          {
            type: "assistant",
            message: normalizeAssistantMessageForSDK(message),
            session_id: getSessionId(),
            parent_tool_use_id: null,
            uuid: message.uuid,
            error: message.error
          }
        ];
      case "user":
        return [
          {
            type: "user",
            message: message.message,
            session_id: getSessionId(),
            parent_tool_use_id: null,
            uuid: message.uuid,
            timestamp: message.timestamp,
            isSynthetic: message.isMeta || message.isVisibleInTranscriptOnly,
            ...message.toolUseResult !== undefined ? { tool_use_result: message.toolUseResult } : {}
          }
        ];
      case "system":
        if (message.subtype === "compact_boundary" && message.compactMetadata) {
          return [
            {
              type: "system",
              subtype: "compact_boundary",
              session_id: getSessionId(),
              uuid: message.uuid,
              compact_metadata: toSDKCompactMetadata(message.compactMetadata)
            }
          ];
        }
        if (message.subtype === "local_command" && (message.content.includes(`<${LOCAL_COMMAND_STDOUT_TAG}>`) || message.content.includes(`<${LOCAL_COMMAND_STDERR_TAG}>`))) {
          return [
            localCommandOutputToSDKAssistantMessage(message.content, message.uuid)
          ];
        }
        return [];
      default:
        return [];
    }
  });
}
function localCommandOutputToSDKAssistantMessage(rawContent, uuid) {
  const cleanContent = stripAnsi(rawContent).replace(/<local-command-stdout>([\s\S]*?)<\/local-command-stdout>/, "$1").replace(/<local-command-stderr>([\s\S]*?)<\/local-command-stderr>/, "$1").trim();
  const synthetic = createAssistantMessage({ content: cleanContent });
  return {
    type: "assistant",
    content: synthetic.message?.content,
    message: synthetic.message,
    parent_tool_use_id: null,
    session_id: getSessionId(),
    uuid
  };
}
function toSDKRateLimitInfo(limits) {
  if (!limits) {
    return;
  }
  return {
    type: "rate_limit",
    status: limits.status,
    ...limits.resetsAt !== undefined && { resetsAt: limits.resetsAt },
    ...limits.rateLimitType !== undefined && {
      rateLimitType: limits.rateLimitType
    },
    ...limits.utilization !== undefined && {
      utilization: limits.utilization
    },
    ...limits.overageStatus !== undefined && {
      overageStatus: limits.overageStatus
    },
    ...limits.overageResetsAt !== undefined && {
      overageResetsAt: limits.overageResetsAt
    },
    ...limits.overageDisabledReason !== undefined && {
      overageDisabledReason: limits.overageDisabledReason
    },
    ...limits.isUsingOverage !== undefined && {
      isUsingOverage: limits.isUsingOverage
    },
    ...limits.surpassedThreshold !== undefined && {
      surpassedThreshold: limits.surpassedThreshold
    }
  };
}
function normalizeAssistantMessageForSDK(message) {
  const content = message.message.content;
  if (!Array.isArray(content)) {
    return message.message;
  }
  const normalizedContent = content.map((block) => {
    if (block.type !== "tool_use") {
      return block;
    }
    if (block.name === EXIT_PLAN_MODE_V2_TOOL_NAME) {
      const plan = getPlan();
      if (plan) {
        return {
          ...block,
          input: { ...block.input, plan }
        };
      }
    }
    return block;
  });
  return {
    ...message.message,
    content: normalizedContent
  };
}
var init_mappers = __esm(() => {
  init_state();
  init_xml();
  init_constants();
  init_strip_ansi();
  init_messages();
  init_plans();
});

export { toInternalMessages, toSDKCompactMetadata, fromSDKCompactMetadata, toSDKMessages, localCommandOutputToSDKAssistantMessage, toSDKRateLimitInfo, init_mappers };
