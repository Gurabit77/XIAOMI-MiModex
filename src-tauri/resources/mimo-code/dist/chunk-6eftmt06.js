// @bun
import {
  DEFAULT_SESSION_MEMORY_CONFIG,
  FILE_EDIT_TOOL_NAME,
  FileReadTool,
  buildSessionMemoryUpdatePrompt,
  createCacheSafeParams,
  createSubagentContext,
  createUserMessage,
  getSessionMemoryConfig,
  getSessionMemoryDir,
  getSessionMemoryPath,
  getSystemContext,
  getSystemPrompt,
  getTokenUsage,
  getToolCallsBetweenUpdates,
  getUserContext,
  hasMetInitializationThreshold,
  hasMetUpdateThreshold,
  hasToolCallsInLastAssistantTurn,
  init_FileReadTool,
  init_autoCompact,
  init_constants,
  init_context,
  init_filesystem,
  init_forkedAgent,
  init_messages1 as init_messages,
  init_postSamplingHooks,
  init_prompts,
  init_prompts1 as init_prompts2,
  init_sessionMemoryUtils,
  init_systemPromptType,
  init_tokens,
  isAutoCompactEnabled,
  isSessionMemoryInitialized,
  loadSessionMemoryTemplate,
  markExtractionCompleted,
  markExtractionStarted,
  markSessionMemoryInitialized,
  recordExtractionTokenCount,
  registerPostSamplingHook,
  runForkedAgent,
  setLastSummarizedMessageId,
  setSessionMemoryConfig,
  tokenCountWithEstimation
} from "./chunk-ktw919wt.js";
import {
  asSystemPrompt
} from "./chunk-chmfqs2y.js";
import {
  getDynamicConfig_CACHED_MAY_BE_STALE,
  getFeatureValue_CACHED_MAY_BE_STALE,
  init_growthbook,
  init_sequential,
  sequential
} from "./chunk-1ghcng4e.js";
import {
  count,
  init_array
} from "./chunk-zwarn9h7.js";
import {
  init_analytics,
  logEvent
} from "./chunk-f2mhrmww.js";
import {
  errorMessage,
  getErrnoCode,
  getFsImplementation,
  init_errors,
  init_fsOperations
} from "./chunk-rpbc3b7k.js";
import {
  getIsRemoteMode,
  init_state
} from "./chunk-j5xzpm59.js";
import {
  init_memoize,
  memoize_default
} from "./chunk-qx8z601m.js";
import {
  __esm,
  __require
} from "./chunk-qp2qdcda.js";

// src/services/SessionMemory/sessionMemory.ts
import { writeFile } from "fs/promises";
function isSessionMemoryGateEnabled() {
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_session_memory", false);
}
function getSessionMemoryRemoteConfig() {
  return getDynamicConfig_CACHED_MAY_BE_STALE("tengu_sm_config", {});
}
function resetLastMemoryMessageUuid() {
  lastMemoryMessageUuid = undefined;
}
function countToolCallsSince(messages, sinceUuid) {
  let toolCallCount = 0;
  let foundStart = sinceUuid === null || sinceUuid === undefined;
  for (const message of messages) {
    if (!foundStart) {
      if (message.uuid === sinceUuid) {
        foundStart = true;
      }
      continue;
    }
    if (message.type === "assistant") {
      const content = message.message.content;
      if (Array.isArray(content)) {
        toolCallCount += count(content, (block) => block.type === "tool_use");
      }
    }
  }
  return toolCallCount;
}
function shouldExtractMemory(messages) {
  const currentTokenCount = tokenCountWithEstimation(messages);
  if (!isSessionMemoryInitialized()) {
    if (!hasMetInitializationThreshold(currentTokenCount)) {
      return false;
    }
    markSessionMemoryInitialized();
  }
  const hasMetTokenThreshold = hasMetUpdateThreshold(currentTokenCount);
  const toolCallsSinceLastUpdate = countToolCallsSince(messages, lastMemoryMessageUuid);
  const hasMetToolCallThreshold = toolCallsSinceLastUpdate >= getToolCallsBetweenUpdates();
  const hasToolCallsInLastTurn = hasToolCallsInLastAssistantTurn(messages);
  const shouldExtract = hasMetTokenThreshold && hasMetToolCallThreshold || hasMetTokenThreshold && !hasToolCallsInLastTurn;
  if (shouldExtract) {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage?.uuid) {
      lastMemoryMessageUuid = lastMessage.uuid;
    }
    return true;
  }
  return false;
}
async function setupSessionMemoryFile(toolUseContext) {
  const fs = getFsImplementation();
  const sessionMemoryDir = getSessionMemoryDir();
  await fs.mkdir(sessionMemoryDir, { mode: 448 });
  const memoryPath = getSessionMemoryPath();
  try {
    await writeFile(memoryPath, "", {
      encoding: "utf-8",
      mode: 384,
      flag: "wx"
    });
    const template = await loadSessionMemoryTemplate();
    await writeFile(memoryPath, template, {
      encoding: "utf-8",
      mode: 384
    });
  } catch (e) {
    const code = getErrnoCode(e);
    if (code !== "EEXIST") {
      throw e;
    }
  }
  toolUseContext.readFileState.delete(memoryPath);
  const result = await FileReadTool.call({ file_path: memoryPath }, toolUseContext);
  let currentMemory = "";
  const output = result.data;
  if (output.type === "text") {
    currentMemory = output.file.content;
  }
  logEvent("tengu_session_memory_file_read", {
    content_length: currentMemory.length
  });
  return { memoryPath, currentMemory };
}
function initSessionMemory() {
  if (getIsRemoteMode())
    return;
  const autoCompactEnabled = isAutoCompactEnabled();
  if (process.env.USER_TYPE === "ant") {
    logEvent("tengu_session_memory_init", {
      auto_compact_enabled: autoCompactEnabled
    });
  }
  if (!autoCompactEnabled) {
    return;
  }
  registerPostSamplingHook(extractSessionMemory);
}
async function manuallyExtractSessionMemory(messages, toolUseContext) {
  if (messages.length === 0) {
    return { success: false, error: "No messages to summarize" };
  }
  markExtractionStarted();
  try {
    const setupContext = createSubagentContext(toolUseContext);
    const { memoryPath, currentMemory } = await setupSessionMemoryFile(setupContext);
    const userPrompt = await buildSessionMemoryUpdatePrompt(currentMemory, memoryPath);
    const { tools, mainLoopModel } = toolUseContext.options;
    const [rawSystemPrompt, userContext, systemContext] = await Promise.all([
      getSystemPrompt(tools, mainLoopModel),
      getUserContext(),
      getSystemContext()
    ]);
    const systemPrompt = asSystemPrompt(rawSystemPrompt);
    await runForkedAgent({
      promptMessages: [createUserMessage({ content: userPrompt })],
      cacheSafeParams: {
        systemPrompt,
        userContext,
        systemContext,
        toolUseContext: setupContext,
        forkContextMessages: messages
      },
      canUseTool: createMemoryFileCanUseTool(memoryPath),
      querySource: "session_memory",
      forkLabel: "session_memory_manual",
      overrides: { readFileState: setupContext.readFileState }
    });
    logEvent("tengu_session_memory_manual_extraction", {});
    recordExtractionTokenCount(tokenCountWithEstimation(messages));
    updateLastSummarizedMessageIdIfSafe(messages);
    return { success: true, memoryPath };
  } catch (error) {
    return {
      success: false,
      error: errorMessage(error)
    };
  } finally {
    markExtractionCompleted();
  }
}
function createMemoryFileCanUseTool(memoryPath) {
  return async (tool, input) => {
    if (tool.name === FILE_EDIT_TOOL_NAME && typeof input === "object" && input !== null && "file_path" in input) {
      const filePath = input.file_path;
      if (typeof filePath === "string" && filePath === memoryPath) {
        return { behavior: "allow", updatedInput: input };
      }
    }
    return {
      behavior: "deny",
      message: `only ${FILE_EDIT_TOOL_NAME} on ${memoryPath} is allowed`,
      decisionReason: {
        type: "other",
        reason: `only ${FILE_EDIT_TOOL_NAME} on ${memoryPath} is allowed`
      }
    };
  };
}
function updateLastSummarizedMessageIdIfSafe(messages) {
  if (!hasToolCallsInLastAssistantTurn(messages)) {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage?.uuid) {
      setLastSummarizedMessageId(lastMessage.uuid);
    }
  }
}
var lastMemoryMessageUuid, initSessionMemoryConfigIfNeeded, hasLoggedGateFailure = false, extractSessionMemory;
var init_sessionMemory = __esm(() => {
  init_memoize();
  init_state();
  init_prompts2();
  init_context();
  init_constants();
  init_FileReadTool();
  init_array();
  init_forkedAgent();
  init_fsOperations();
  init_postSamplingHooks();
  init_messages();
  init_filesystem();
  init_sequential();
  init_systemPromptType();
  init_tokens();
  init_analytics();
  init_autoCompact();
  init_prompts();
  init_sessionMemoryUtils();
  init_errors();
  init_growthbook();
  initSessionMemoryConfigIfNeeded = memoize_default(() => {
    const remoteConfig = getSessionMemoryRemoteConfig();
    const config = {
      minimumMessageTokensToInit: remoteConfig.minimumMessageTokensToInit && remoteConfig.minimumMessageTokensToInit > 0 ? remoteConfig.minimumMessageTokensToInit : DEFAULT_SESSION_MEMORY_CONFIG.minimumMessageTokensToInit,
      minimumTokensBetweenUpdate: remoteConfig.minimumTokensBetweenUpdate && remoteConfig.minimumTokensBetweenUpdate > 0 ? remoteConfig.minimumTokensBetweenUpdate : DEFAULT_SESSION_MEMORY_CONFIG.minimumTokensBetweenUpdate,
      toolCallsBetweenUpdates: remoteConfig.toolCallsBetweenUpdates && remoteConfig.toolCallsBetweenUpdates > 0 ? remoteConfig.toolCallsBetweenUpdates : DEFAULT_SESSION_MEMORY_CONFIG.toolCallsBetweenUpdates
    };
    setSessionMemoryConfig(config);
  });
  extractSessionMemory = sequential(async function(context) {
    const { messages, toolUseContext, querySource } = context;
    if (querySource !== "repl_main_thread") {
      return;
    }
    if (true) {
      const { isPoorModeActive } = await import("./chunk-gdqppnt2.js");
      if (isPoorModeActive())
        return;
    }
    if (!isSessionMemoryGateEnabled()) {
      if (process.env.USER_TYPE === "ant" && !hasLoggedGateFailure) {
        hasLoggedGateFailure = true;
        logEvent("tengu_session_memory_gate_disabled", {});
      }
      return;
    }
    initSessionMemoryConfigIfNeeded();
    if (!shouldExtractMemory(messages)) {
      return;
    }
    markExtractionStarted();
    const setupContext = createSubagentContext(toolUseContext);
    const { memoryPath, currentMemory } = await setupSessionMemoryFile(setupContext);
    const userPrompt = await buildSessionMemoryUpdatePrompt(currentMemory, memoryPath);
    await runForkedAgent({
      promptMessages: [createUserMessage({ content: userPrompt })],
      cacheSafeParams: createCacheSafeParams(context),
      canUseTool: createMemoryFileCanUseTool(memoryPath),
      querySource: "session_memory",
      forkLabel: "session_memory",
      overrides: { readFileState: setupContext.readFileState }
    });
    const lastMessage = messages[messages.length - 1];
    const usage = lastMessage ? getTokenUsage(lastMessage) : undefined;
    const config = getSessionMemoryConfig();
    logEvent("tengu_session_memory_extraction", {
      input_tokens: usage?.input_tokens,
      output_tokens: usage?.output_tokens,
      cache_read_input_tokens: usage?.cache_read_input_tokens ?? undefined,
      cache_creation_input_tokens: usage?.cache_creation_input_tokens ?? undefined,
      config_min_message_tokens_to_init: config.minimumMessageTokensToInit,
      config_min_tokens_between_update: config.minimumTokensBetweenUpdate,
      config_tool_calls_between_updates: config.toolCallsBetweenUpdates
    });
    recordExtractionTokenCount(tokenCountWithEstimation(messages));
    updateLastSummarizedMessageIdIfSafe(messages);
    markExtractionCompleted();
  });
});

export { resetLastMemoryMessageUuid, shouldExtractMemory, initSessionMemory, manuallyExtractSessionMemory, createMemoryFileCanUseTool, init_sessionMemory };
