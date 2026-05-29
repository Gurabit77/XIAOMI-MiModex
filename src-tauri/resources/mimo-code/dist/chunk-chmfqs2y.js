// @bun
import {
  CCR_SESSION_INGRESS_TOKEN_PATH,
  init_authFileDescriptor,
  maybePersistTokenForSubprocesses,
  readTokenFromWellKnownFile
} from "./chunk-1ghcng4e.js";
import {
  init_diagLogs,
  logForDiagnosticsNoPII
} from "./chunk-t6jhrn34.js";
import {
  errorMessage,
  getFsImplementation,
  init_cleanupRegistry,
  init_debug,
  init_errors,
  init_fsOperations,
  logForDebugging,
  registerCleanup
} from "./chunk-rpbc3b7k.js";
import {
  getIsNonInteractiveSession,
  getSessionId,
  getSessionIngressToken,
  init_state,
  setSessionIngressToken
} from "./chunk-j5xzpm59.js";
import {
  getClaudeConfigHomeDir,
  init_envUtils,
  isEnvTruthy
} from "./chunk-hxhwzgnn.js";
import {
  __esm,
  __export
} from "./chunk-qp2qdcda.js";

// packages/@ant/model-provider/src/types/usage.ts
var EMPTY_USAGE;
var init_usage = __esm(() => {
  EMPTY_USAGE = {
    input_tokens: 0,
    cache_creation_input_tokens: 0,
    cache_read_input_tokens: 0,
    output_tokens: 0,
    server_tool_use: { web_search_requests: 0, web_fetch_requests: 0 },
    service_tier: "standard",
    cache_creation: {
      ephemeral_1h_input_tokens: 0,
      ephemeral_5m_input_tokens: 0
    },
    inference_geo: "",
    iterations: [],
    speed: "standard"
  };
});

// packages/@ant/model-provider/src/types/systemPrompt.ts
function asSystemPrompt(value) {
  return value;
}
var init_systemPrompt = () => {};

// packages/@ant/model-provider/src/providers/openai/modelMapping.ts
function getModelFamily(model) {
  if (/haiku/i.test(model))
    return "haiku";
  if (/opus/i.test(model))
    return "opus";
  if (/sonnet/i.test(model))
    return "sonnet";
  return null;
}
function resolveOpenAIModel(anthropicModel) {
  if (process.env.OPENAI_MODEL) {
    return process.env.OPENAI_MODEL;
  }
  const cleanModel = anthropicModel.replace(/\[1m\]$/, "");
  const family = getModelFamily(cleanModel);
  if (family) {
    const openaiEnvVar = `OPENAI_DEFAULT_${family.toUpperCase()}_MODEL`;
    const openaiOverride = process.env[openaiEnvVar];
    if (openaiOverride)
      return openaiOverride;
    const anthropicEnvVar = `ANTHROPIC_DEFAULT_${family.toUpperCase()}_MODEL`;
    const anthropicOverride = process.env[anthropicEnvVar];
    if (anthropicOverride)
      return anthropicOverride;
  }
  return DEFAULT_MODEL_MAP[cleanModel] ?? cleanModel;
}
var DEFAULT_MODEL_MAP;
var init_modelMapping = __esm(() => {
  DEFAULT_MODEL_MAP = {
    "claude-sonnet-4-20250514": "gpt-4o",
    "claude-sonnet-4-5-20250929": "gpt-4o",
    "claude-sonnet-4-6": "gpt-4o",
    "claude-opus-4-20250514": "o3",
    "claude-opus-4-1-20250805": "o3",
    "claude-opus-4-5-20251101": "o3",
    "claude-opus-4-6": "o3",
    "claude-haiku-4-5-20251001": "gpt-4o-mini",
    "claude-3-5-haiku-20241022": "gpt-4o-mini",
    "claude-3-7-sonnet-20250219": "gpt-4o",
    "claude-3-5-sonnet-20241022": "gpt-4o"
  };
});

// packages/@ant/model-provider/src/providers/grok/modelMapping.ts
function getModelFamily2(model) {
  if (/haiku/i.test(model))
    return "haiku";
  if (/opus/i.test(model))
    return "opus";
  if (/sonnet/i.test(model))
    return "sonnet";
  return null;
}
function getUserModelMap() {
  const raw = process.env.GROK_MODEL_MAP;
  if (!raw)
    return null;
  try {
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
      return parsed;
    }
  } catch {}
  return null;
}
function resolveGrokModel(anthropicModel) {
  if (process.env.GROK_MODEL) {
    return process.env.GROK_MODEL;
  }
  const cleanModel = anthropicModel.replace(/\[1m\]$/, "");
  const family = getModelFamily2(cleanModel);
  const userMap = getUserModelMap();
  if (userMap && family && userMap[family]) {
    return userMap[family];
  }
  if (family) {
    const grokEnvVar = `GROK_DEFAULT_${family.toUpperCase()}_MODEL`;
    const grokOverride = process.env[grokEnvVar];
    if (grokOverride)
      return grokOverride;
    const anthropicEnvVar = `ANTHROPIC_DEFAULT_${family.toUpperCase()}_MODEL`;
    const anthropicOverride = process.env[anthropicEnvVar];
    if (anthropicOverride)
      return anthropicOverride;
  }
  if (DEFAULT_MODEL_MAP2[cleanModel]) {
    return DEFAULT_MODEL_MAP2[cleanModel];
  }
  if (family && DEFAULT_FAMILY_MAP[family]) {
    return DEFAULT_FAMILY_MAP[family];
  }
  return cleanModel;
}
var DEFAULT_MODEL_MAP2, DEFAULT_FAMILY_MAP;
var init_modelMapping2 = __esm(() => {
  DEFAULT_MODEL_MAP2 = {
    "claude-sonnet-4-20250514": "grok-3-mini-fast",
    "claude-sonnet-4-5-20250929": "grok-3-mini-fast",
    "claude-sonnet-4-6": "grok-3-mini-fast",
    "claude-opus-4-20250514": "grok-4.20-reasoning",
    "claude-opus-4-1-20250805": "grok-4.20-reasoning",
    "claude-opus-4-5-20251101": "grok-4.20-reasoning",
    "claude-opus-4-6": "grok-4.20-reasoning",
    "claude-haiku-4-5-20251001": "grok-3-mini-fast",
    "claude-3-5-haiku-20241022": "grok-3-mini-fast",
    "claude-3-7-sonnet-20250219": "grok-3-mini-fast",
    "claude-3-5-sonnet-20241022": "grok-3-mini-fast"
  };
  DEFAULT_FAMILY_MAP = {
    opus: "grok-4.20-reasoning",
    sonnet: "grok-3-mini-fast",
    haiku: "grok-3-mini-fast"
  };
});

// packages/@ant/model-provider/src/providers/gemini/modelMapping.ts
function getModelFamily3(model) {
  if (/haiku/i.test(model))
    return "haiku";
  if (/opus/i.test(model))
    return "opus";
  if (/sonnet/i.test(model))
    return "sonnet";
  return null;
}
function resolveGeminiModel(anthropicModel) {
  if (process.env.GEMINI_MODEL) {
    return process.env.GEMINI_MODEL;
  }
  const cleanModel = anthropicModel.replace(/\[1m\]$/i, "");
  const family = getModelFamily3(cleanModel);
  if (!family) {
    return cleanModel;
  }
  const geminiEnvVar = `GEMINI_DEFAULT_${family.toUpperCase()}_MODEL`;
  const geminiModel = process.env[geminiEnvVar];
  if (geminiModel) {
    return geminiModel;
  }
  const sharedEnvVar = `ANTHROPIC_DEFAULT_${family.toUpperCase()}_MODEL`;
  const resolvedModel = process.env[sharedEnvVar];
  if (resolvedModel) {
    return resolvedModel;
  }
  throw new Error(`Gemini provider requires GEMINI_MODEL or ${geminiEnvVar} (or ${sharedEnvVar} for backward compatibility) to be configured.`);
}
var init_modelMapping3 = () => {};

// packages/@ant/model-provider/src/providers/gemini/types.ts
var GEMINI_THOUGHT_SIGNATURE_FIELD = "_geminiThoughtSignature";
var init_types = () => {};

// packages/@ant/model-provider/src/providers/gemini/convertMessages.ts
function safeParseJSON(json) {
  if (!json)
    return null;
  try {
    return JSON.parse(json);
  } catch {
    return null;
  }
}
function anthropicMessagesToGemini(messages, systemPrompt) {
  const contents = [];
  const toolNamesById = new Map;
  for (const msg of messages) {
    if (msg.type === "assistant") {
      const content = convertInternalAssistantMessage(msg);
      if (content.parts.length > 0) {
        contents.push(content);
      }
      const assistantContent = msg.message.content;
      if (Array.isArray(assistantContent)) {
        for (const block of assistantContent) {
          if (typeof block !== "string" && block.type === "tool_use") {
            toolNamesById.set(block.id, block.name);
          }
        }
      }
      continue;
    }
    if (msg.type === "user") {
      const content = convertInternalUserMessage(msg, toolNamesById);
      if (content.parts.length > 0) {
        contents.push(content);
      }
    }
  }
  const systemText = systemPromptToText(systemPrompt);
  return {
    contents,
    ...systemText ? {
      systemInstruction: {
        parts: [{ text: systemText }]
      }
    } : {}
  };
}
function systemPromptToText(systemPrompt) {
  if (!systemPrompt || systemPrompt.length === 0)
    return "";
  return systemPrompt.filter(Boolean).join(`

`);
}
function convertInternalUserMessage(msg, toolNamesById) {
  const content = msg.message.content;
  if (typeof content === "string") {
    return {
      role: "user",
      parts: createTextGeminiParts(content)
    };
  }
  if (!Array.isArray(content)) {
    return { role: "user", parts: [] };
  }
  return {
    role: "user",
    parts: content.flatMap((block) => convertUserContentBlockToGeminiParts(block, toolNamesById))
  };
}
function convertUserContentBlockToGeminiParts(block, toolNamesById) {
  if (typeof block === "string") {
    return createTextGeminiParts(block);
  }
  if (block.type === "text") {
    return createTextGeminiParts(block.text);
  }
  if (block.type === "tool_result") {
    const toolResult = block;
    return [
      {
        functionResponse: {
          name: toolNamesById.get(toolResult.tool_use_id) ?? toolResult.tool_use_id,
          response: toolResultToResponseObject(toolResult)
        }
      }
    ];
  }
  if (block.type === "image") {
    const source = block.source;
    if (source?.type === "base64" && typeof source.data === "string") {
      const mediaType = source.media_type || "image/png";
      return [
        {
          inlineData: {
            mimeType: mediaType,
            data: source.data
          }
        }
      ];
    }
    if (source?.type === "url" && typeof source.url === "string") {
      return createTextGeminiParts(`[image: ${source.url}]`);
    }
  }
  return [];
}
function convertInternalAssistantMessage(msg) {
  const content = msg.message.content;
  if (typeof content === "string") {
    return {
      role: "model",
      parts: createTextGeminiParts(content)
    };
  }
  if (!Array.isArray(content)) {
    return { role: "model", parts: [] };
  }
  const parts = [];
  for (const block of content) {
    if (typeof block === "string") {
      parts.push(...createTextGeminiParts(block));
      continue;
    }
    if (block.type === "text") {
      parts.push(...createTextGeminiParts(block.text, getGeminiThoughtSignature(block)));
      continue;
    }
    if (block.type === "thinking") {
      const thinkingPart = createThinkingGeminiPart(block.thinking, block.signature);
      if (thinkingPart) {
        parts.push(thinkingPart);
      }
      continue;
    }
    if (block.type === "tool_use") {
      const toolUse = block;
      parts.push({
        functionCall: {
          name: toolUse.name,
          args: normalizeToolUseInput(toolUse.input)
        },
        ...getGeminiThoughtSignature(block) && {
          thoughtSignature: getGeminiThoughtSignature(block)
        }
      });
    }
  }
  return { role: "model", parts };
}
function createTextGeminiParts(value, thoughtSignature) {
  if (typeof value !== "string" || value.length === 0) {
    return [];
  }
  return [
    {
      text: value,
      ...thoughtSignature && { thoughtSignature }
    }
  ];
}
function createThinkingGeminiPart(value, thoughtSignature) {
  if (typeof value !== "string" || value.length === 0) {
    return;
  }
  return {
    text: value,
    thought: true,
    ...thoughtSignature && { thoughtSignature }
  };
}
function normalizeToolUseInput(input) {
  if (typeof input === "string") {
    const parsed = safeParseJSON(input);
    if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
      return parsed;
    }
    return parsed === null ? {} : { value: parsed };
  }
  if (input && typeof input === "object" && !Array.isArray(input)) {
    return input;
  }
  return input === undefined ? {} : { value: input };
}
function toolResultToResponseObject(block) {
  const result = normalizeToolResultContent(block.content);
  if (result && typeof result === "object" && !Array.isArray(result)) {
    return block.is_error ? { ...result, is_error: true } : result;
  }
  return {
    result,
    ...block.is_error ? { is_error: true } : {}
  };
}
function normalizeToolResultContent(content) {
  if (typeof content === "string") {
    const parsed = safeParseJSON(content);
    return parsed ?? content;
  }
  if (Array.isArray(content)) {
    const text = content.map((part) => {
      if (typeof part === "string")
        return part;
      if (part && typeof part === "object" && "text" in part && typeof part.text === "string") {
        return part.text;
      }
      return "";
    }).filter(Boolean).join(`
`);
    const parsed = safeParseJSON(text);
    return parsed ?? text;
  }
  return content ?? "";
}
function getGeminiThoughtSignature(block) {
  const signature = block[GEMINI_THOUGHT_SIGNATURE_FIELD];
  return typeof signature === "string" && signature.length > 0 ? signature : undefined;
}
var init_convertMessages = __esm(() => {
  init_types();
});

// packages/@ant/model-provider/src/providers/gemini/convertTools.ts
function normalizeGeminiJsonSchemaType(value) {
  if (typeof value === "string") {
    return GEMINI_JSON_SCHEMA_TYPES.has(value) ? value : undefined;
  }
  if (Array.isArray(value)) {
    const normalized = value.filter((item) => typeof item === "string" && GEMINI_JSON_SCHEMA_TYPES.has(item));
    const unique = Array.from(new Set(normalized));
    if (unique.length === 0)
      return;
    return unique.length === 1 ? unique[0] : unique;
  }
  return;
}
function inferGeminiJsonSchemaTypeFromValue(value) {
  if (value === null)
    return "null";
  if (Array.isArray(value))
    return "array";
  if (typeof value === "string")
    return "string";
  if (typeof value === "boolean")
    return "boolean";
  if (typeof value === "number") {
    return Number.isInteger(value) ? "integer" : "number";
  }
  if (typeof value === "object")
    return "object";
  return;
}
function inferGeminiJsonSchemaTypeFromEnum(values) {
  const inferred = values.map(inferGeminiJsonSchemaTypeFromValue).filter((value) => value !== undefined);
  const unique = Array.from(new Set(inferred));
  if (unique.length === 0)
    return;
  return unique.length === 1 ? unique[0] : unique;
}
function addNullToGeminiJsonSchemaType(value) {
  if (value === undefined)
    return ["null"];
  if (Array.isArray(value)) {
    return value.includes("null") ? value : [...value, "null"];
  }
  return value === "null" ? value : [value, "null"];
}
function sanitizeGeminiJsonSchemaProperties(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return;
  }
  const sanitizedEntries = Object.entries(value).map(([key, schema]) => [key, sanitizeGeminiJsonSchema(schema)]).filter(([, schema]) => Object.keys(schema).length > 0);
  if (sanitizedEntries.length === 0) {
    return;
  }
  return Object.fromEntries(sanitizedEntries);
}
function sanitizeGeminiJsonSchemaArray(value) {
  if (!Array.isArray(value))
    return;
  const sanitized = value.map((item) => sanitizeGeminiJsonSchema(item)).filter((item) => Object.keys(item).length > 0);
  return sanitized.length > 0 ? sanitized : undefined;
}
function sanitizeGeminiJsonSchema(schema) {
  if (!schema || typeof schema !== "object" || Array.isArray(schema)) {
    return {};
  }
  const source = schema;
  const result = {};
  let type = normalizeGeminiJsonSchemaType(source.type);
  if (source.const !== undefined) {
    result.enum = [source.const];
    type = type ?? inferGeminiJsonSchemaTypeFromValue(source.const);
  } else if (Array.isArray(source.enum) && source.enum.length > 0) {
    result.enum = source.enum;
    type = type ?? inferGeminiJsonSchemaTypeFromEnum(source.enum);
  }
  if (!type) {
    if (source.properties && typeof source.properties === "object") {
      type = "object";
    } else if (source.items !== undefined || source.prefixItems !== undefined) {
      type = "array";
    }
  }
  if (source.nullable === true) {
    type = addNullToGeminiJsonSchemaType(type);
  }
  if (type) {
    result.type = type;
  }
  if (typeof source.title === "string") {
    result.title = source.title;
  }
  if (typeof source.description === "string") {
    result.description = source.description;
  }
  if (typeof source.format === "string") {
    result.format = source.format;
  }
  if (typeof source.pattern === "string") {
    result.pattern = source.pattern;
  }
  if (typeof source.minimum === "number") {
    result.minimum = source.minimum;
  } else if (typeof source.exclusiveMinimum === "number") {
    result.minimum = source.exclusiveMinimum;
  }
  if (typeof source.maximum === "number") {
    result.maximum = source.maximum;
  } else if (typeof source.exclusiveMaximum === "number") {
    result.maximum = source.exclusiveMaximum;
  }
  if (typeof source.minItems === "number") {
    result.minItems = source.minItems;
  }
  if (typeof source.maxItems === "number") {
    result.maxItems = source.maxItems;
  }
  if (typeof source.minLength === "number") {
    result.minLength = source.minLength;
  }
  if (typeof source.maxLength === "number") {
    result.maxLength = source.maxLength;
  }
  if (typeof source.minProperties === "number") {
    result.minProperties = source.minProperties;
  }
  if (typeof source.maxProperties === "number") {
    result.maxProperties = source.maxProperties;
  }
  const properties = sanitizeGeminiJsonSchemaProperties(source.properties);
  if (properties) {
    result.properties = properties;
    result.propertyOrdering = Object.keys(properties);
  }
  if (Array.isArray(source.required)) {
    const required = source.required.filter((item) => typeof item === "string");
    if (required.length > 0) {
      result.required = required;
    }
  }
  if (typeof source.additionalProperties === "boolean") {
    result.additionalProperties = source.additionalProperties;
  } else {
    const additionalProperties = sanitizeGeminiJsonSchema(source.additionalProperties);
    if (Object.keys(additionalProperties).length > 0) {
      result.additionalProperties = additionalProperties;
    }
  }
  const items = sanitizeGeminiJsonSchema(source.items);
  if (Object.keys(items).length > 0) {
    result.items = items;
  }
  const prefixItems = sanitizeGeminiJsonSchemaArray(source.prefixItems);
  if (prefixItems) {
    result.prefixItems = prefixItems;
  }
  const anyOf = sanitizeGeminiJsonSchemaArray(source.anyOf ?? source.oneOf);
  if (anyOf) {
    result.anyOf = anyOf;
  }
  return result;
}
function sanitizeGeminiFunctionParameters(schema) {
  const sanitized = sanitizeGeminiJsonSchema(schema);
  if (Object.keys(sanitized).length > 0) {
    return sanitized;
  }
  return {
    type: "object",
    properties: {}
  };
}
function anthropicToolsToGemini(tools) {
  const functionDeclarations = tools.filter((tool) => {
    const toolType = tool.type;
    return tool.type === "custom" || !("type" in tool) || toolType !== "server";
  }).map((tool) => {
    const anyTool = tool;
    const name = anyTool.name || "";
    const description = anyTool.description || "";
    const inputSchema = anyTool.input_schema ?? {
      type: "object",
      properties: {}
    };
    return {
      name,
      description,
      parametersJsonSchema: sanitizeGeminiFunctionParameters(inputSchema)
    };
  });
  return functionDeclarations.length > 0 ? [{ functionDeclarations }] : [];
}
function anthropicToolChoiceToGemini(toolChoice) {
  if (!toolChoice || typeof toolChoice !== "object")
    return;
  const tc = toolChoice;
  const type = tc.type;
  switch (type) {
    case "auto":
      return { mode: "AUTO" };
    case "any":
      return { mode: "ANY" };
    case "tool":
      return {
        mode: "ANY",
        allowedFunctionNames: typeof tc.name === "string" ? [tc.name] : undefined
      };
    default:
      return;
  }
}
var GEMINI_JSON_SCHEMA_TYPES;
var init_convertTools = __esm(() => {
  GEMINI_JSON_SCHEMA_TYPES = new Set([
    "string",
    "number",
    "integer",
    "boolean",
    "object",
    "array",
    "null"
  ]);
});

// packages/@ant/model-provider/src/providers/gemini/streamAdapter.ts
import { randomUUID } from "crypto";
async function* adaptGeminiStreamToAnthropic(stream, model) {
  const messageId = `msg_${randomUUID().replace(/-/g, "").slice(0, 24)}`;
  let started = false;
  let stopped = false;
  let nextContentIndex = 0;
  let openTextLikeBlock = null;
  let sawToolUse = false;
  let finishReason;
  let inputTokens = 0;
  let outputTokens = 0;
  for await (const chunk of stream) {
    const usage = chunk.usageMetadata;
    if (usage) {
      inputTokens = usage.promptTokenCount ?? inputTokens;
      outputTokens = (usage.candidatesTokenCount ?? 0) + (usage.thoughtsTokenCount ?? 0);
    }
    if (!started) {
      started = true;
      yield {
        type: "message_start",
        message: {
          id: messageId,
          type: "message",
          role: "assistant",
          content: [],
          model,
          stop_reason: null,
          stop_sequence: null,
          usage: {
            input_tokens: inputTokens,
            output_tokens: 0,
            cache_creation_input_tokens: 0,
            cache_read_input_tokens: 0
          }
        }
      };
    }
    const candidate = chunk.candidates?.[0];
    const parts = candidate?.content?.parts ?? [];
    for (const part of parts) {
      if (part.functionCall) {
        if (openTextLikeBlock) {
          yield {
            type: "content_block_stop",
            index: openTextLikeBlock.index
          };
          openTextLikeBlock = null;
        }
        sawToolUse = true;
        const toolIndex = nextContentIndex++;
        const toolId = `toolu_${randomUUID().replace(/-/g, "").slice(0, 24)}`;
        yield {
          type: "content_block_start",
          index: toolIndex,
          content_block: {
            type: "tool_use",
            id: toolId,
            name: part.functionCall.name || "",
            input: {}
          }
        };
        if (part.thoughtSignature) {
          yield {
            type: "content_block_delta",
            index: toolIndex,
            delta: {
              type: "signature_delta",
              signature: part.thoughtSignature
            }
          };
        }
        if (part.functionCall.args && Object.keys(part.functionCall.args).length > 0) {
          yield {
            type: "content_block_delta",
            index: toolIndex,
            delta: {
              type: "input_json_delta",
              partial_json: JSON.stringify(part.functionCall.args)
            }
          };
        }
        yield {
          type: "content_block_stop",
          index: toolIndex
        };
        continue;
      }
      const textLikeType = getTextLikeBlockType(part);
      if (textLikeType) {
        if (!openTextLikeBlock || openTextLikeBlock.type !== textLikeType) {
          if (openTextLikeBlock) {
            yield {
              type: "content_block_stop",
              index: openTextLikeBlock.index
            };
          }
          openTextLikeBlock = {
            index: nextContentIndex++,
            type: textLikeType
          };
          yield {
            type: "content_block_start",
            index: openTextLikeBlock.index,
            content_block: textLikeType === "thinking" ? {
              type: "thinking",
              thinking: "",
              signature: ""
            } : {
              type: "text",
              text: ""
            }
          };
        }
        if (part.text) {
          yield {
            type: "content_block_delta",
            index: openTextLikeBlock.index,
            delta: textLikeType === "thinking" ? {
              type: "thinking_delta",
              thinking: part.text
            } : {
              type: "text_delta",
              text: part.text
            }
          };
        }
        if (part.thoughtSignature) {
          yield {
            type: "content_block_delta",
            index: openTextLikeBlock.index,
            delta: {
              type: "signature_delta",
              signature: part.thoughtSignature
            }
          };
        }
        continue;
      }
      if (part.thoughtSignature && openTextLikeBlock) {
        yield {
          type: "content_block_delta",
          index: openTextLikeBlock.index,
          delta: {
            type: "signature_delta",
            signature: part.thoughtSignature
          }
        };
      }
    }
    if (candidate?.finishReason) {
      finishReason = candidate.finishReason;
    }
  }
  if (!started) {
    return;
  }
  if (openTextLikeBlock) {
    yield {
      type: "content_block_stop",
      index: openTextLikeBlock.index
    };
  }
  if (!stopped) {
    yield {
      type: "message_delta",
      delta: {
        stop_reason: mapGeminiFinishReason(finishReason, sawToolUse),
        stop_sequence: null
      },
      usage: {
        output_tokens: outputTokens
      }
    };
    yield {
      type: "message_stop"
    };
    stopped = true;
  }
}
function getTextLikeBlockType(part) {
  if (typeof part.text !== "string") {
    return null;
  }
  return part.thought ? "thinking" : "text";
}
function mapGeminiFinishReason(reason, sawToolUse) {
  switch (reason) {
    case "MAX_TOKENS":
      return "max_tokens";
    case "STOP":
    case "FINISH_REASON_UNSPECIFIED":
    case "SAFETY":
    case "RECITATION":
    case "BLOCKLIST":
    case "PROHIBITED_CONTENT":
    case "SPII":
    case "MALFORMED_FUNCTION_CALL":
    default:
      return sawToolUse ? "tool_use" : "end_turn";
  }
}
var init_streamAdapter = () => {};

// packages/@ant/model-provider/src/errorUtils.ts
function extractConnectionErrorDetails(error) {
  if (!error || typeof error !== "object") {
    return null;
  }
  let current = error;
  const maxDepth = 5;
  let depth = 0;
  while (current && depth < maxDepth) {
    if (current instanceof Error && "code" in current && typeof current.code === "string") {
      const code = current.code;
      const isSSLError = SSL_ERROR_CODES.has(code);
      return {
        code,
        message: current.message,
        isSSLError
      };
    }
    if (current instanceof Error && "cause" in current && current.cause !== current) {
      current = current.cause;
      depth++;
    } else {
      break;
    }
  }
  return null;
}
function getSSLErrorHint(error) {
  const details = extractConnectionErrorDetails(error);
  if (!details?.isSSLError) {
    return null;
  }
  return `SSL certificate error (${details.code}). If you are behind a corporate proxy or TLS-intercepting firewall, set NODE_EXTRA_CA_CERTS to your CA bundle path, or ask IT to allowlist *.anthropic.com. Run /doctor for details.`;
}
function sanitizeMessageHTML(message) {
  if (message.includes("<!DOCTYPE html") || message.includes("<html")) {
    const titleMatch = message.match(/<title>([^<]+)<\/title>/);
    if (titleMatch && titleMatch[1]) {
      return titleMatch[1].trim();
    }
    return "";
  }
  return message;
}
function sanitizeAPIError(apiError) {
  const message = apiError.message;
  if (!message) {
    return "";
  }
  return sanitizeMessageHTML(message);
}
function hasNestedError(value) {
  return typeof value === "object" && value !== null && "error" in value && typeof value.error === "object" && value.error !== null;
}
function extractNestedErrorMessage(error) {
  if (!hasNestedError(error)) {
    return null;
  }
  const narrowed = error;
  const nested = narrowed.error;
  const deepMsg = nested?.error?.message;
  if (typeof deepMsg === "string" && deepMsg.length > 0) {
    const sanitized = sanitizeMessageHTML(deepMsg);
    if (sanitized.length > 0) {
      return sanitized;
    }
  }
  const msg = nested?.message;
  if (typeof msg === "string" && msg.length > 0) {
    const sanitized = sanitizeMessageHTML(msg);
    if (sanitized.length > 0) {
      return sanitized;
    }
  }
  return null;
}
function formatAPIError(error) {
  const connectionDetails = extractConnectionErrorDetails(error);
  if (connectionDetails) {
    const { code, isSSLError } = connectionDetails;
    if (code === "ETIMEDOUT") {
      return "Request timed out. Check your internet connection and proxy settings";
    }
    if (isSSLError) {
      switch (code) {
        case "UNABLE_TO_VERIFY_LEAF_SIGNATURE":
        case "UNABLE_TO_GET_ISSUER_CERT":
        case "UNABLE_TO_GET_ISSUER_CERT_LOCALLY":
          return "Unable to connect to API: SSL certificate verification failed. Check your proxy or corporate SSL certificates";
        case "CERT_HAS_EXPIRED":
          return "Unable to connect to API: SSL certificate has expired";
        case "CERT_REVOKED":
          return "Unable to connect to API: SSL certificate has been revoked";
        case "DEPTH_ZERO_SELF_SIGNED_CERT":
        case "SELF_SIGNED_CERT_IN_CHAIN":
          return "Unable to connect to API: Self-signed certificate detected. Check your proxy or corporate SSL certificates";
        case "ERR_TLS_CERT_ALTNAME_INVALID":
        case "HOSTNAME_MISMATCH":
          return "Unable to connect to API: SSL certificate hostname mismatch";
        case "CERT_NOT_YET_VALID":
          return "Unable to connect to API: SSL certificate is not yet valid";
        default:
          return `Unable to connect to API: SSL error (${code})`;
      }
    }
  }
  if (error.message === "Connection error.") {
    if (connectionDetails?.code) {
      return `Unable to connect to API (${connectionDetails.code})`;
    }
    return "Unable to connect to API. Check your internet connection";
  }
  if (!error.message) {
    return extractNestedErrorMessage(error) ?? `API error (status ${error.status ?? "unknown"})`;
  }
  const sanitizedMessage = sanitizeAPIError(error);
  return sanitizedMessage !== error.message && sanitizedMessage.length > 0 ? sanitizedMessage : error.message;
}
var SSL_ERROR_CODES;
var init_errorUtils = __esm(() => {
  SSL_ERROR_CODES = new Set([
    "UNABLE_TO_VERIFY_LEAF_SIGNATURE",
    "UNABLE_TO_GET_ISSUER_CERT",
    "UNABLE_TO_GET_ISSUER_CERT_LOCALLY",
    "CERT_SIGNATURE_FAILURE",
    "CERT_NOT_YET_VALID",
    "CERT_HAS_EXPIRED",
    "CERT_REVOKED",
    "CERT_REJECTED",
    "CERT_UNTRUSTED",
    "DEPTH_ZERO_SELF_SIGNED_CERT",
    "SELF_SIGNED_CERT_IN_CHAIN",
    "CERT_CHAIN_TOO_LONG",
    "PATH_LENGTH_EXCEEDED",
    "ERR_TLS_CERT_ALTNAME_INVALID",
    "HOSTNAME_MISMATCH",
    "ERR_TLS_HANDSHAKE_TIMEOUT",
    "ERR_SSL_WRONG_VERSION_NUMBER",
    "ERR_SSL_DECRYPTION_FAILED_OR_BAD_RECORD_MAC"
  ]);
});

// packages/@ant/model-provider/src/shared/openaiConvertMessages.ts
function anthropicMessagesToOpenAI(messages, systemPrompt, _options) {
  const result = [];
  const systemText = systemPromptToText2(systemPrompt);
  if (systemText) {
    result.push({
      role: "system",
      content: systemText
    });
  }
  for (const msg of messages) {
    switch (msg.type) {
      case "user":
        result.push(...convertInternalUserMessage2(msg));
        break;
      case "assistant":
        result.push(...convertInternalAssistantMessage2(msg));
        break;
      default:
        break;
    }
  }
  return result;
}
function systemPromptToText2(systemPrompt) {
  if (!systemPrompt || systemPrompt.length === 0)
    return "";
  return systemPrompt.filter(Boolean).join(`

`);
}
function convertInternalUserMessage2(msg) {
  const result = [];
  const content = msg.message.content;
  if (typeof content === "string") {
    result.push({
      role: "user",
      content
    });
  } else if (Array.isArray(content)) {
    const textParts = [];
    const toolResults = [];
    const imageParts = [];
    for (const block of content) {
      if (typeof block === "string") {
        textParts.push(block);
      } else if (block.type === "text") {
        textParts.push(block.text);
      } else if (block.type === "tool_result") {
        toolResults.push(block);
      } else if (block.type === "image") {
        const imagePart = convertImageBlockToOpenAI(block);
        if (imagePart) {
          imageParts.push(imagePart);
        }
      }
    }
    for (const tr of toolResults) {
      result.push(convertToolResult(tr));
    }
    if (imageParts.length > 0) {
      const multiContent = [];
      if (textParts.length > 0) {
        multiContent.push({ type: "text", text: textParts.join(`
`) });
      }
      multiContent.push(...imageParts);
      result.push({
        role: "user",
        content: multiContent
      });
    } else if (textParts.length > 0) {
      result.push({
        role: "user",
        content: textParts.join(`
`)
      });
    }
  }
  return result;
}
function convertToolResult(block) {
  let content;
  if (typeof block.content === "string") {
    content = block.content;
  } else if (Array.isArray(block.content)) {
    content = block.content.map((c) => {
      if (typeof c === "string")
        return c;
      if ("text" in c)
        return c.text;
      return "";
    }).filter(Boolean).join(`
`);
  } else {
    content = "";
  }
  return {
    role: "tool",
    tool_call_id: block.tool_use_id,
    content
  };
}
function convertInternalAssistantMessage2(msg) {
  const content = msg.message.content;
  if (typeof content === "string") {
    return [
      {
        role: "assistant",
        content
      }
    ];
  }
  if (!Array.isArray(content)) {
    return [
      {
        role: "assistant",
        content: ""
      }
    ];
  }
  const textParts = [];
  const toolCalls = [];
  const reasoningParts = [];
  for (const block of content) {
    if (typeof block === "string") {
      textParts.push(block);
    } else if (block.type === "text") {
      textParts.push(block.text);
    } else if (block.type === "tool_use") {
      const tu = block;
      toolCalls.push({
        id: tu.id,
        type: "function",
        function: {
          name: tu.name,
          arguments: typeof tu.input === "string" ? tu.input : JSON.stringify(tu.input)
        }
      });
    } else if (block.type === "thinking") {
      const thinkingText = block.thinking;
      if (typeof thinkingText === "string" && thinkingText) {
        reasoningParts.push(thinkingText);
      }
    }
  }
  const result = {
    role: "assistant",
    content: textParts.length > 0 ? textParts.join(`
`) : null,
    ...toolCalls.length > 0 && { tool_calls: toolCalls },
    ...reasoningParts.length > 0 && {
      reasoning_content: reasoningParts.join(`
`)
    }
  };
  return [result];
}
function convertImageBlockToOpenAI(block) {
  const source = block.source;
  if (!source)
    return null;
  if (source.type === "base64" && typeof source.data === "string") {
    const mediaType = source.media_type || "image/png";
    return {
      type: "image_url",
      image_url: {
        url: `data:${mediaType};base64,${source.data}`
      }
    };
  }
  if (source.type === "url" && typeof source.url === "string") {
    return {
      type: "image_url",
      image_url: {
        url: source.url
      }
    };
  }
  return null;
}
var init_openaiConvertMessages = () => {};

// packages/@ant/model-provider/src/shared/openaiConvertTools.ts
function anthropicToolsToOpenAI(tools) {
  return tools.filter((tool) => {
    const toolType = tool.type;
    return tool.type === "custom" || !("type" in tool) || toolType !== "server";
  }).map((tool) => {
    const anyTool = tool;
    const name = anyTool.name || "";
    const description = anyTool.description || "";
    const inputSchema = anyTool.input_schema;
    return {
      type: "function",
      function: {
        name,
        description,
        parameters: sanitizeJsonSchema(inputSchema || { type: "object", properties: {} })
      }
    };
  });
}
function sanitizeJsonSchema(schema) {
  if (!schema || typeof schema !== "object")
    return schema;
  const result = { ...schema };
  if ("const" in result) {
    result.enum = [result.const];
    delete result.const;
  }
  const objectKeys = [
    "properties",
    "definitions",
    "$defs",
    "patternProperties"
  ];
  for (const key of objectKeys) {
    const nested = result[key];
    if (nested && typeof nested === "object") {
      const sanitized = {};
      for (const [k, v] of Object.entries(nested)) {
        sanitized[k] = v && typeof v === "object" ? sanitizeJsonSchema(v) : v;
      }
      result[key] = sanitized;
    }
  }
  const singleKeys = [
    "items",
    "additionalProperties",
    "not",
    "if",
    "then",
    "else",
    "contains",
    "propertyNames"
  ];
  for (const key of singleKeys) {
    const nested = result[key];
    if (nested && typeof nested === "object" && !Array.isArray(nested)) {
      result[key] = sanitizeJsonSchema(nested);
    }
  }
  const arrayKeys = ["anyOf", "oneOf", "allOf"];
  for (const key of arrayKeys) {
    const nested = result[key];
    if (Array.isArray(nested)) {
      result[key] = nested.map((item) => item && typeof item === "object" ? sanitizeJsonSchema(item) : item);
    }
  }
  return result;
}
function anthropicToolChoiceToOpenAI(toolChoice) {
  if (!toolChoice || typeof toolChoice !== "object")
    return;
  const tc = toolChoice;
  const type = tc.type;
  switch (type) {
    case "auto":
      return "auto";
    case "any":
      return "required";
    case "tool":
      return {
        type: "function",
        function: { name: tc.name }
      };
    default:
      return;
  }
}
var init_openaiConvertTools = () => {};

// packages/@ant/model-provider/src/shared/openaiStreamAdapter.ts
import { randomUUID as randomUUID2 } from "crypto";
async function* adaptOpenAIStreamToAnthropic(stream, model) {
  const messageId = `msg_${randomUUID2().replace(/-/g, "").slice(0, 24)}`;
  let started = false;
  let currentContentIndex = -1;
  const toolBlocks = new Map;
  let thinkingBlockOpen = false;
  let textBlockOpen = false;
  let inputTokens = 0;
  let outputTokens = 0;
  let cachedReadTokens = 0;
  const openBlockIndices = new Set;
  let pendingFinishReason = null;
  let pendingHasToolCalls = false;
  for await (const chunk of stream) {
    const choice = chunk.choices?.[0];
    const delta = choice?.delta;
    if (chunk.usage) {
      inputTokens = chunk.usage.prompt_tokens ?? inputTokens;
      outputTokens = chunk.usage.completion_tokens ?? outputTokens;
      const details = chunk.usage.prompt_tokens_details;
      if (details?.cached_tokens != null) {
        cachedReadTokens = details.cached_tokens;
      }
    }
    if (!started) {
      started = true;
      yield {
        type: "message_start",
        message: {
          id: messageId,
          type: "message",
          role: "assistant",
          content: [],
          model,
          stop_reason: null,
          stop_sequence: null,
          usage: {
            input_tokens: inputTokens,
            output_tokens: 0,
            cache_creation_input_tokens: 0,
            cache_read_input_tokens: cachedReadTokens
          }
        }
      };
    }
    if (!delta)
      continue;
    const reasoningContent = delta.reasoning_content;
    if (reasoningContent != null && reasoningContent !== "") {
      if (!thinkingBlockOpen) {
        currentContentIndex++;
        thinkingBlockOpen = true;
        openBlockIndices.add(currentContentIndex);
        yield {
          type: "content_block_start",
          index: currentContentIndex,
          content_block: {
            type: "thinking",
            thinking: "",
            signature: ""
          }
        };
      }
      yield {
        type: "content_block_delta",
        index: currentContentIndex,
        delta: {
          type: "thinking_delta",
          thinking: reasoningContent
        }
      };
    }
    if (delta.content != null && delta.content !== "") {
      if (!textBlockOpen) {
        if (thinkingBlockOpen) {
          yield {
            type: "content_block_stop",
            index: currentContentIndex
          };
          openBlockIndices.delete(currentContentIndex);
          thinkingBlockOpen = false;
        }
        currentContentIndex++;
        textBlockOpen = true;
        openBlockIndices.add(currentContentIndex);
        yield {
          type: "content_block_start",
          index: currentContentIndex,
          content_block: {
            type: "text",
            text: ""
          }
        };
      }
      yield {
        type: "content_block_delta",
        index: currentContentIndex,
        delta: {
          type: "text_delta",
          text: delta.content
        }
      };
    }
    if (delta.tool_calls) {
      for (const tc of delta.tool_calls) {
        const tcIndex = tc.index;
        if (!toolBlocks.has(tcIndex)) {
          if (thinkingBlockOpen) {
            yield {
              type: "content_block_stop",
              index: currentContentIndex
            };
            openBlockIndices.delete(currentContentIndex);
            thinkingBlockOpen = false;
          }
          if (textBlockOpen) {
            yield {
              type: "content_block_stop",
              index: currentContentIndex
            };
            openBlockIndices.delete(currentContentIndex);
            textBlockOpen = false;
          }
          currentContentIndex++;
          const toolId = tc.id || `toolu_${randomUUID2().replace(/-/g, "").slice(0, 24)}`;
          const toolName = tc.function?.name || "";
          toolBlocks.set(tcIndex, {
            contentIndex: currentContentIndex,
            id: toolId,
            name: toolName,
            arguments: ""
          });
          openBlockIndices.add(currentContentIndex);
          yield {
            type: "content_block_start",
            index: currentContentIndex,
            content_block: {
              type: "tool_use",
              id: toolId,
              name: toolName,
              input: {}
            }
          };
        }
        const argFragment = tc.function?.arguments;
        if (argFragment) {
          toolBlocks.get(tcIndex).arguments += argFragment;
          yield {
            type: "content_block_delta",
            index: toolBlocks.get(tcIndex).contentIndex,
            delta: {
              type: "input_json_delta",
              partial_json: argFragment
            }
          };
        }
      }
    }
    if (choice?.finish_reason) {
      if (thinkingBlockOpen) {
        yield {
          type: "content_block_stop",
          index: currentContentIndex
        };
        openBlockIndices.delete(currentContentIndex);
        thinkingBlockOpen = false;
      }
      if (textBlockOpen) {
        yield {
          type: "content_block_stop",
          index: currentContentIndex
        };
        openBlockIndices.delete(currentContentIndex);
        textBlockOpen = false;
      }
      for (const [, block] of toolBlocks) {
        if (openBlockIndices.has(block.contentIndex)) {
          yield {
            type: "content_block_stop",
            index: block.contentIndex
          };
          openBlockIndices.delete(block.contentIndex);
        }
      }
      pendingFinishReason = choice.finish_reason;
      pendingHasToolCalls = toolBlocks.size > 0;
    }
  }
  for (const idx of openBlockIndices) {
    yield {
      type: "content_block_stop",
      index: idx
    };
  }
  if (pendingFinishReason !== null) {
    const stopReason = pendingFinishReason === "length" ? "max_tokens" : pendingHasToolCalls ? "tool_use" : mapFinishReason(pendingFinishReason);
    yield {
      type: "message_delta",
      delta: {
        stop_reason: stopReason,
        stop_sequence: null
      },
      usage: {
        input_tokens: inputTokens,
        output_tokens: outputTokens,
        cache_read_input_tokens: cachedReadTokens,
        cache_creation_input_tokens: 0
      }
    };
    yield {
      type: "message_stop"
    };
  }
}
function mapFinishReason(reason) {
  switch (reason) {
    case "stop":
      return "end_turn";
    case "tool_calls":
      return "tool_use";
    case "length":
      return "max_tokens";
    case "content_filter":
      return "end_turn";
    default:
      return "end_turn";
  }
}
var init_openaiStreamAdapter = () => {};

// packages/@ant/model-provider/src/hooks/index.ts
var init_hooks = () => {};

// packages/@ant/model-provider/src/client/index.ts
var init_client = () => {};

// packages/@ant/model-provider/src/types/message.ts
var init_message = () => {};

// packages/@ant/model-provider/src/types/errors.ts
var init_errors2 = () => {};

// packages/@ant/model-provider/src/types/index.ts
var init_types2 = __esm(() => {
  init_message();
  init_usage();
  init_errors2();
  init_systemPrompt();
});

// packages/@ant/model-provider/src/index.ts
var init_src = __esm(() => {
  init_hooks();
  init_client();
  init_modelMapping();
  init_modelMapping2();
  init_modelMapping3();
  init_convertMessages();
  init_convertTools();
  init_streamAdapter();
  init_types();
  init_errorUtils();
  init_openaiConvertMessages();
  init_openaiConvertTools();
  init_openaiStreamAdapter();
  init_types2();
});

// src/utils/sdkEventQueue.ts
import { randomUUID as randomUUID3 } from "crypto";
function enqueueSdkEvent(event) {
  if (!getIsNonInteractiveSession()) {
    return;
  }
  if (queue.length >= MAX_QUEUE_SIZE) {
    queue.shift();
  }
  queue.push(event);
}
function drainSdkEvents() {
  if (queue.length === 0) {
    return [];
  }
  const events = queue.splice(0);
  return events.map((e) => ({
    ...e,
    uuid: randomUUID3(),
    session_id: getSessionId()
  }));
}
function emitTaskTerminatedSdk(taskId, status, opts) {
  enqueueSdkEvent({
    type: "system",
    subtype: "task_notification",
    task_id: taskId,
    tool_use_id: opts?.toolUseId,
    status,
    output_file: opts?.outputFile ?? "",
    summary: opts?.summary ?? "",
    usage: opts?.usage
  });
}
var MAX_QUEUE_SIZE = 1000, queue;
var init_sdkEventQueue = __esm(() => {
  init_state();
  queue = [];
});

// src/utils/sessionIngressAuth.ts
function getTokenFromFileDescriptor() {
  const cachedToken = getSessionIngressToken();
  if (cachedToken !== undefined) {
    return cachedToken;
  }
  const fdEnv = process.env.CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR;
  if (!fdEnv) {
    const path = process.env.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? CCR_SESSION_INGRESS_TOKEN_PATH;
    const fromFile = readTokenFromWellKnownFile(path, "session ingress token");
    setSessionIngressToken(fromFile);
    return fromFile;
  }
  const fd = parseInt(fdEnv, 10);
  if (Number.isNaN(fd)) {
    logForDebugging(`CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR must be a valid file descriptor number, got: ${fdEnv}`, { level: "error" });
    setSessionIngressToken(null);
    return null;
  }
  try {
    const fsOps = getFsImplementation();
    const fdPath = process.platform === "darwin" || process.platform === "freebsd" ? `/dev/fd/${fd}` : `/proc/self/fd/${fd}`;
    const token = fsOps.readFileSync(fdPath, { encoding: "utf8" }).trim();
    if (!token) {
      logForDebugging("File descriptor contained empty token", {
        level: "error"
      });
      setSessionIngressToken(null);
      return null;
    }
    logForDebugging(`Successfully read token from file descriptor ${fd}`);
    setSessionIngressToken(token);
    maybePersistTokenForSubprocesses(CCR_SESSION_INGRESS_TOKEN_PATH, token, "session ingress token");
    return token;
  } catch (error) {
    logForDebugging(`Failed to read token from file descriptor ${fd}: ${errorMessage(error)}`, { level: "error" });
    const path = process.env.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? CCR_SESSION_INGRESS_TOKEN_PATH;
    const fromFile = readTokenFromWellKnownFile(path, "session ingress token");
    setSessionIngressToken(fromFile);
    return fromFile;
  }
}
function getSessionIngressAuthToken() {
  const envToken = process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN;
  if (envToken) {
    return envToken;
  }
  return getTokenFromFileDescriptor();
}
function getSessionIngressAuthHeaders() {
  const token = getSessionIngressAuthToken();
  if (!token)
    return {};
  if (token.startsWith("sk-ant-sid")) {
    const headers = {
      Cookie: `sessionKey=${token}`
    };
    const orgUuid = process.env.CLAUDE_CODE_ORGANIZATION_UUID;
    if (orgUuid) {
      headers["X-Organization-Uuid"] = orgUuid;
    }
    return headers;
  }
  return { Authorization: `Bearer ${token}` };
}
function updateSessionIngressAuthToken(token) {
  process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN = token;
}
var init_sessionIngressAuth = __esm(() => {
  init_state();
  init_authFileDescriptor();
  init_debug();
  init_errors();
  init_fsOperations();
});

// src/proactive/index.ts
var exports_proactive = {};
__export(exports_proactive, {
  subscribeToProactiveChanges: () => subscribeToProactiveChanges,
  shouldTick: () => shouldTick,
  setNextTickAt: () => setNextTickAt,
  setContextBlocked: () => setContextBlocked,
  resumeProactive: () => resumeProactive,
  pauseProactive: () => pauseProactive,
  isProactivePaused: () => isProactivePaused,
  isProactiveActive: () => isProactiveActive,
  isContextBlocked: () => isContextBlocked,
  getNextTickAt: () => getNextTickAt,
  getActivationSource: () => getActivationSource,
  deactivateProactive: () => deactivateProactive,
  activateProactive: () => activateProactive
});
function notify() {
  for (const cb of listeners) {
    try {
      cb();
    } catch {}
  }
}
function isProactiveActive() {
  return active;
}
function activateProactive(source) {
  if (active)
    return;
  active = true;
  paused = false;
  contextBlocked = false;
  activationSource = source;
  notify();
}
function deactivateProactive() {
  if (!active)
    return;
  active = false;
  paused = false;
  contextBlocked = false;
  nextTickAt = null;
  activationSource = undefined;
  notify();
}
function isProactivePaused() {
  return paused;
}
function pauseProactive() {
  if (!active || paused)
    return;
  paused = true;
  nextTickAt = null;
  notify();
}
function resumeProactive() {
  if (!active || !paused)
    return;
  paused = false;
  notify();
}
function setContextBlocked(blocked) {
  if (contextBlocked === blocked)
    return;
  contextBlocked = blocked;
  if (blocked) {
    nextTickAt = null;
  }
  notify();
}
function isContextBlocked() {
  return contextBlocked;
}
function setNextTickAt(ts) {
  nextTickAt = ts;
  notify();
}
function getNextTickAt() {
  if (!active || paused || contextBlocked)
    return null;
  return nextTickAt;
}
function getActivationSource() {
  return activationSource;
}
function subscribeToProactiveChanges(cb) {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}
function shouldTick() {
  return active && !paused && !contextBlocked;
}
var active = false, paused = false, contextBlocked = false, nextTickAt = null, activationSource, listeners;
var init_proactive = __esm(() => {
  listeners = new Set;
});

// src/utils/sessionState.ts
function setSessionStateChangedListener(cb) {
  stateListener = cb;
}
function setSessionMetadataChangedListener(cb, options) {
  metadataListener = cb;
  if (!cb || !options?.replayCurrent) {
    return;
  }
  const snapshot = getSessionMetadataSnapshot();
  if (Object.keys(snapshot).length === 0) {
    return;
  }
  cb(snapshot);
}
function setPermissionModeChangedListener(cb) {
  permissionModeListener = cb;
}
function normalizeAutomationState(state) {
  if (!state || state.enabled !== true) {
    return null;
  }
  return {
    enabled: true,
    phase: state.phase === "standby" || state.phase === "sleeping" ? state.phase : null,
    next_tick_at: typeof state.next_tick_at === "number" ? state.next_tick_at : null,
    sleep_until: typeof state.sleep_until === "number" ? state.sleep_until : null
  };
}
function automationStateKey(state) {
  return JSON.stringify(state);
}
function applyMetadataUpdate(metadata) {
  const nextMetadata = { ...currentMetadata };
  for (const key of Object.keys(metadata)) {
    const value = metadata[key];
    if (value === undefined) {
      delete nextMetadata[key];
      continue;
    }
    nextMetadata[key] = value;
  }
  currentMetadata = nextMetadata;
}
function getSessionMetadataSnapshot() {
  const snapshot = { ...currentMetadata };
  if (currentAutomationState) {
    snapshot.automation_state = { ...currentAutomationState };
  } else if ("automation_state" in currentMetadata) {
    snapshot.automation_state = currentMetadata.automation_state ?? null;
  }
  return snapshot;
}
function getSessionState() {
  return currentState;
}
function notifySessionStateChanged(state, details) {
  currentState = state;
  stateListener?.(state, details);
  if (state === "requires_action" && details) {
    hasPendingAction = true;
    notifySessionMetadataChanged({
      pending_action: details
    });
  } else if (hasPendingAction) {
    hasPendingAction = false;
    notifySessionMetadataChanged({ pending_action: null });
  }
  if (state === "idle") {
    notifySessionMetadataChanged({ task_summary: null });
  }
  if (state !== "idle") {
    notifyAutomationStateChanged(isProactiveActive() ? {
      enabled: true,
      phase: null,
      next_tick_at: null,
      sleep_until: null
    } : null);
  }
  if (isEnvTruthy(process.env.CLAUDE_CODE_EMIT_SESSION_STATE_EVENTS)) {
    enqueueSdkEvent({
      type: "system",
      subtype: "session_state_changed",
      state
    });
  }
}
function notifySessionMetadataChanged(metadata) {
  applyMetadataUpdate(metadata);
  metadataListener?.(metadata);
}
function notifyAutomationStateChanged(state) {
  const nextState = normalizeAutomationState(state);
  if (automationStateKey(nextState) === automationStateKey(currentAutomationState)) {
    return;
  }
  currentAutomationState = nextState;
  applyMetadataUpdate({ automation_state: nextState });
  metadataListener?.({ automation_state: nextState });
}
function notifyPermissionModeChanged(mode) {
  permissionModeListener?.(mode);
}
var stateListener = null, metadataListener = null, permissionModeListener = null, hasPendingAction = false, currentState = "idle", currentAutomationState = null, currentMetadata;
var init_sessionState = __esm(() => {
  init_proactive();
  init_envUtils();
  init_sdkEventQueue();
  currentMetadata = {};
});

// src/bridge/rcDebugLog.ts
import { appendFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";
function getLogPath() {
  return join(getClaudeConfigHomeDir(), "rc-debug.log");
}
function ensureLogDir() {
  const dir = getClaudeConfigHomeDir();
  if (!existsSync(dir))
    mkdirSync(dir, { recursive: true });
}
function rcLog(msg) {
  try {
    if (!headerWritten) {
      ensureLogDir();
      appendFileSync(getLogPath(), `
===== RC-DEBUG session ${new Date().toISOString()} =====
`);
      headerWritten = true;
    }
    const ts = new Date().toISOString().slice(11, 23);
    appendFileSync(getLogPath(), `[${ts}] ${msg}
`);
  } catch {}
}
var headerWritten = false;
var init_rcDebugLog = __esm(() => {
  init_envUtils();
});

// src/utils/sessionActivity.ts
function startHeartbeatTimer() {
  clearIdleTimer();
  heartbeatTimer = setInterval(() => {
    logForDiagnosticsNoPII("debug", "session_keepalive_heartbeat", {
      refcount
    });
    if (isEnvTruthy(process.env.CLAUDE_CODE_REMOTE_SEND_KEEPALIVES)) {
      activityCallback?.();
    }
  }, SESSION_ACTIVITY_INTERVAL_MS);
}
function startIdleTimer() {
  clearIdleTimer();
  if (activityCallback === null) {
    return;
  }
  idleTimer = setTimeout(() => {
    logForDiagnosticsNoPII("info", "session_idle_30s");
    idleTimer = null;
  }, SESSION_ACTIVITY_INTERVAL_MS);
}
function clearIdleTimer() {
  if (idleTimer !== null) {
    clearTimeout(idleTimer);
    idleTimer = null;
  }
}
function registerSessionActivityCallback(cb) {
  activityCallback = cb;
  if (refcount > 0 && heartbeatTimer === null) {
    startHeartbeatTimer();
  }
}
function unregisterSessionActivityCallback() {
  activityCallback = null;
  if (heartbeatTimer !== null) {
    clearInterval(heartbeatTimer);
    heartbeatTimer = null;
  }
  clearIdleTimer();
}
function sendSessionActivitySignal() {
  if (isEnvTruthy(process.env.CLAUDE_CODE_REMOTE_SEND_KEEPALIVES)) {
    activityCallback?.();
  }
}
function isSessionActivityTrackingActive() {
  return activityCallback !== null;
}
function startSessionActivity(reason) {
  refcount++;
  activeReasons.set(reason, (activeReasons.get(reason) ?? 0) + 1);
  if (refcount === 1) {
    oldestActivityStartedAt = Date.now();
    if (activityCallback !== null && heartbeatTimer === null) {
      startHeartbeatTimer();
    }
  }
  if (!cleanupRegistered) {
    cleanupRegistered = true;
    registerCleanup(async () => {
      logForDiagnosticsNoPII("info", "session_activity_at_shutdown", {
        refcount,
        active: Object.fromEntries(activeReasons),
        oldest_activity_ms: refcount > 0 && oldestActivityStartedAt !== null ? Date.now() - oldestActivityStartedAt : null
      });
    });
  }
}
function stopSessionActivity(reason) {
  if (refcount > 0) {
    refcount--;
  }
  const n = (activeReasons.get(reason) ?? 0) - 1;
  if (n > 0)
    activeReasons.set(reason, n);
  else
    activeReasons.delete(reason);
  if (refcount === 0 && heartbeatTimer !== null) {
    clearInterval(heartbeatTimer);
    heartbeatTimer = null;
    startIdleTimer();
  }
}
var SESSION_ACTIVITY_INTERVAL_MS = 30000, activityCallback = null, refcount = 0, activeReasons, oldestActivityStartedAt = null, heartbeatTimer = null, idleTimer = null, cleanupRegistered = false;
var init_sessionActivity = __esm(() => {
  init_cleanupRegistry();
  init_diagLogs();
  init_envUtils();
  activeReasons = new Map;
});

export { EMPTY_USAGE, asSystemPrompt, resolveOpenAIModel, resolveGrokModel, resolveGeminiModel, GEMINI_THOUGHT_SIGNATURE_FIELD, anthropicMessagesToGemini, anthropicToolsToGemini, anthropicToolChoiceToGemini, adaptGeminiStreamToAnthropic, extractConnectionErrorDetails, getSSLErrorHint, formatAPIError, anthropicMessagesToOpenAI, anthropicToolsToOpenAI, anthropicToolChoiceToOpenAI, adaptOpenAIStreamToAnthropic, init_src, enqueueSdkEvent, drainSdkEvents, emitTaskTerminatedSdk, init_sdkEventQueue, getSessionIngressAuthToken, getSessionIngressAuthHeaders, updateSessionIngressAuthToken, init_sessionIngressAuth, isProactiveActive, isProactivePaused, isContextBlocked, setNextTickAt, shouldTick, exports_proactive, init_proactive, setSessionStateChangedListener, setSessionMetadataChangedListener, setPermissionModeChangedListener, getSessionState, notifySessionStateChanged, notifySessionMetadataChanged, notifyAutomationStateChanged, notifyPermissionModeChanged, init_sessionState, registerSessionActivityCallback, unregisterSessionActivityCallback, sendSessionActivitySignal, isSessionActivityTrackingActive, startSessionActivity, stopSessionActivity, init_sessionActivity, rcLog, init_rcDebugLog };
