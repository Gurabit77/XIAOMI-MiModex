// @bun
import {
  buildSystemInitMessage,
  exports_MessageSelector,
  init_MessageSelector,
  processUserInput,
  sdkCompatToolName
} from "./chunk-deezf6jz.js";
import {
  init_mappers,
  localCommandOutputToSDKAssistantMessage,
  toSDKCompactMetadata
} from "./chunk-p7749nem.js";
import {
  init_systemTheme,
  resolveThemeSetting
} from "./chunk-cnsj3vq2.js";
import {
  SYNTHETIC_MESSAGES,
  SYNTHETIC_OUTPUT_TOOL_NAME,
  accumulateUsage,
  categorizeRetryableAPIError,
  countToolCalls,
  createAbortController,
  exports_snipCompact,
  exports_snipProjection,
  fileHistoryEnabled,
  fileHistoryMakeSnapshot,
  flushSessionStorage,
  getScratchpadDir,
  getSlashCommandToolSkills,
  getSystemContext,
  getSystemPrompt,
  getUserContext,
  handleOrphanedPermission,
  headlessProfilerCheckpoint,
  init_Shell,
  init_SyntheticOutputTool,
  init_Tool,
  init_abortController,
  init_claude,
  init_commands1 as init_commands,
  init_context,
  init_cost_tracker,
  init_errors,
  init_fileHistory,
  init_filesystem,
  init_headlessProfiler,
  init_hookHelpers,
  init_last,
  init_memdir,
  init_messages1 as init_messages,
  init_pluginLoader,
  init_prompts1 as init_prompts,
  init_query,
  init_queryHelpers,
  init_sessionStorage,
  init_snipCompact,
  init_snipProjection,
  init_systemPromptType,
  init_thinking,
  isResultSuccessful,
  isScratchpadEnabled,
  last_default,
  loadAllPluginsCacheOnly,
  loadMemoryPrompt,
  normalizeMessage,
  query,
  recordTranscript,
  registerStructuredOutputEnforcement,
  setCwd,
  shouldEnableThinkingByDefault,
  toolMatchesName,
  updateUsage
} from "./chunk-ktw919wt.js";
import {
  EMPTY_USAGE,
  asSystemPrompt,
  init_src
} from "./chunk-chmfqs2y.js";
import {
  cloneFileStateCache,
  init_fileStateCache
} from "./chunk-7fht54sw.js";
import {
  getFastModeState,
  getGlobalConfig,
  getMainLoopModel,
  hasAutoMemPathOverride,
  init_config1 as init_config,
  init_fastMode,
  init_model,
  init_paths,
  parseUserSpecifiedModel
} from "./chunk-1ghcng4e.js";
import {
  init_strip_ansi,
  stripAnsi
} from "./chunk-er1s76c9.js";
import {
  getCwd,
  init_cwd
} from "./chunk-dxvkxgnf.js";
import {
  LOCAL_COMMAND_STDERR_TAG,
  LOCAL_COMMAND_STDOUT_TAG,
  getInMemoryErrors,
  init_log,
  init_xml
} from "./chunk-w5ahy59y.js";
import {
  getModelUsage,
  getSessionId,
  getTotalAPIDuration,
  getTotalCostUSD,
  init_state,
  isSessionPersistenceDisabled
} from "./chunk-j5xzpm59.js";
import {
  init_envUtils,
  isBareMode,
  isEnvTruthy
} from "./chunk-hxhwzgnn.js";
import {
  __toCommonJS
} from "./chunk-qp2qdcda.js";

// src/utils/queryContext.ts
init_prompts();
init_context();
init_abortController();
init_model();
init_systemPromptType();
init_thinking();
async function fetchSystemPromptParts({
  tools,
  mainLoopModel,
  additionalWorkingDirectories,
  mcpClients,
  customSystemPrompt
}) {
  const [defaultSystemPrompt, userContext, systemContext] = await Promise.all([
    customSystemPrompt !== undefined ? Promise.resolve([]) : getSystemPrompt(tools, mainLoopModel, additionalWorkingDirectories, mcpClients),
    getUserContext(),
    customSystemPrompt !== undefined ? Promise.resolve({}) : getSystemContext()
  ]);
  return { defaultSystemPrompt, userContext, systemContext };
}
async function buildSideQuestionFallbackParams({
  tools,
  commands,
  mcpClients,
  messages,
  readFileState,
  getAppState,
  setAppState,
  customSystemPrompt,
  appendSystemPrompt,
  thinkingConfig,
  agents
}) {
  const mainLoopModel = getMainLoopModel();
  const appState = getAppState();
  const { defaultSystemPrompt, userContext, systemContext } = await fetchSystemPromptParts({
    tools,
    mainLoopModel,
    additionalWorkingDirectories: Array.from(appState.toolPermissionContext.additionalWorkingDirectories.keys()),
    mcpClients,
    customSystemPrompt
  });
  const systemPrompt = asSystemPrompt([
    ...customSystemPrompt !== undefined ? [customSystemPrompt] : defaultSystemPrompt,
    ...appendSystemPrompt ? [appendSystemPrompt] : []
  ]);
  const last = messages.at(-1);
  const forkContextMessages = last?.type === "assistant" && last.message.stop_reason === null ? messages.slice(0, -1) : messages;
  const toolUseContext = {
    options: {
      commands,
      debug: false,
      mainLoopModel,
      tools,
      verbose: false,
      thinkingConfig: thinkingConfig ?? (shouldEnableThinkingByDefault() !== false ? { type: "adaptive" } : { type: "disabled" }),
      mcpClients,
      mcpResources: {},
      isNonInteractiveSession: true,
      agentDefinitions: { activeAgents: agents, allAgents: [] },
      customSystemPrompt,
      appendSystemPrompt
    },
    abortController: createAbortController(),
    readFileState,
    getAppState,
    setAppState,
    messages: forkContextMessages,
    setInProgressToolUseIDs: () => {},
    setResponseLength: () => {},
    updateFileHistoryState: () => {},
    updateAttributionState: () => {}
  };
  return {
    systemPrompt,
    userContext,
    systemContext,
    toolUseContext,
    forkContextMessages
  };
}

// src/QueryEngine.ts
init_last();
init_state();
init_claude();
init_src();
init_strip_ansi();
init_commands();
init_xml();
init_cost_tracker();
init_memdir();
init_paths();
init_query();
init_errors();
init_Tool();
init_SyntheticOutputTool();
init_abortController();
init_config();
init_cwd();
init_envUtils();
init_fastMode();
init_fileHistory();
init_fileStateCache();
init_headlessProfiler();
init_hookHelpers();
init_log();
init_messages();
init_model();
init_pluginLoader();
import { randomUUID } from "crypto";
init_Shell();
init_sessionStorage();
init_systemPromptType();
init_systemTheme();
init_thinking();
init_mappers();
init_filesystem();
init_queryHelpers();
var messageSelector = () => {
  try {
    return init_MessageSelector(), __toCommonJS(exports_MessageSelector);
  } catch {
    return null;
  }
};
var getCoordinatorUserContext = () => ({});
var snipModule = (init_snipCompact(), __toCommonJS(exports_snipCompact));
var snipProjection = (init_snipProjection(), __toCommonJS(exports_snipProjection));

class QueryEngine {
  config;
  mutableMessages;
  abortController;
  permissionDenials;
  totalUsage;
  hasHandledOrphanedPermission = false;
  readFileState;
  discoveredSkillNames = new Set;
  loadedNestedMemoryPaths = new Set;
  constructor(config) {
    this.config = config;
    this.mutableMessages = config.initialMessages ?? [];
    this.abortController = config.abortController ?? createAbortController();
    this.permissionDenials = [];
    this.readFileState = config.readFileCache;
    this.totalUsage = EMPTY_USAGE;
  }
  async* submitMessage(prompt, options) {
    const {
      cwd,
      commands,
      tools,
      mcpClients,
      verbose = false,
      thinkingConfig,
      maxTurns,
      maxBudgetUsd,
      taskBudget,
      canUseTool,
      customSystemPrompt,
      appendSystemPrompt,
      userSpecifiedModel,
      fallbackModel,
      jsonSchema,
      getAppState,
      setAppState,
      replayUserMessages = false,
      includePartialMessages = false,
      agents = [],
      setSDKStatus,
      orphanedPermission
    } = this.config;
    this.discoveredSkillNames.clear();
    setCwd(cwd);
    const persistSession = !isSessionPersistenceDisabled();
    const startTime = Date.now();
    const wrappedCanUseTool = async (tool, input, toolUseContext, assistantMessage, toolUseID, forceDecision) => {
      const result2 = await canUseTool(tool, input, toolUseContext, assistantMessage, toolUseID, forceDecision);
      if (result2.behavior !== "allow") {
        this.permissionDenials.push({
          type: "permission_denial",
          tool_name: sdkCompatToolName(tool.name),
          tool_use_id: toolUseID,
          tool_input: input
        });
      }
      return result2;
    };
    const initialAppState = getAppState();
    const initialMainLoopModel = userSpecifiedModel ? parseUserSpecifiedModel(userSpecifiedModel) : getMainLoopModel();
    const initialThinkingConfig = thinkingConfig ? thinkingConfig : shouldEnableThinkingByDefault() !== false ? { type: "adaptive" } : { type: "disabled" };
    headlessProfilerCheckpoint("before_getSystemPrompt");
    const customPrompt = typeof customSystemPrompt === "string" ? customSystemPrompt : undefined;
    const {
      defaultSystemPrompt,
      userContext: baseUserContext,
      systemContext
    } = await fetchSystemPromptParts({
      tools,
      mainLoopModel: initialMainLoopModel,
      additionalWorkingDirectories: Array.from(initialAppState.toolPermissionContext.additionalWorkingDirectories.keys()),
      mcpClients,
      customSystemPrompt: customPrompt
    });
    headlessProfilerCheckpoint("after_getSystemPrompt");
    const userContext = {
      ...baseUserContext,
      ...getCoordinatorUserContext(mcpClients, isScratchpadEnabled() ? getScratchpadDir() : undefined)
    };
    const memoryMechanicsPrompt = customPrompt !== undefined && hasAutoMemPathOverride() ? await loadMemoryPrompt() : null;
    const systemPrompt = asSystemPrompt([
      ...customPrompt !== undefined ? [customPrompt] : defaultSystemPrompt,
      ...memoryMechanicsPrompt ? [memoryMechanicsPrompt] : [],
      ...appendSystemPrompt ? [appendSystemPrompt] : []
    ]);
    const hasStructuredOutputTool = tools.some((t) => toolMatchesName(t, SYNTHETIC_OUTPUT_TOOL_NAME));
    if (jsonSchema && hasStructuredOutputTool) {
      registerStructuredOutputEnforcement(setAppState, getSessionId());
    }
    let processUserInputContext = {
      messages: this.mutableMessages,
      setMessages: (fn) => {
        this.mutableMessages = fn(this.mutableMessages);
      },
      onChangeAPIKey: () => {},
      handleElicitation: this.config.handleElicitation,
      options: {
        commands,
        debug: false,
        tools,
        verbose,
        mainLoopModel: initialMainLoopModel,
        thinkingConfig: initialThinkingConfig,
        mcpClients,
        mcpResources: {},
        ideInstallationStatus: null,
        isNonInteractiveSession: true,
        customSystemPrompt,
        appendSystemPrompt,
        agentDefinitions: { activeAgents: agents, allAgents: [] },
        theme: resolveThemeSetting(getGlobalConfig().theme),
        maxBudgetUsd
      },
      getAppState,
      setAppState,
      abortController: this.abortController,
      readFileState: this.readFileState,
      nestedMemoryAttachmentTriggers: new Set,
      loadedNestedMemoryPaths: this.loadedNestedMemoryPaths,
      dynamicSkillDirTriggers: new Set,
      discoveredSkillNames: this.discoveredSkillNames,
      setInProgressToolUseIDs: () => {},
      setResponseLength: () => {},
      updateFileHistoryState: (updater) => {
        setAppState((prev) => {
          const updated = updater(prev.fileHistory);
          if (updated === prev.fileHistory)
            return prev;
          return { ...prev, fileHistory: updated };
        });
      },
      updateAttributionState: (updater) => {
        setAppState((prev) => {
          const updated = updater(prev.attribution);
          if (updated === prev.attribution)
            return prev;
          return { ...prev, attribution: updated };
        });
      },
      setSDKStatus
    };
    if (orphanedPermission && !this.hasHandledOrphanedPermission) {
      this.hasHandledOrphanedPermission = true;
      for await (const message of handleOrphanedPermission(orphanedPermission, tools, this.mutableMessages, processUserInputContext)) {
        yield message;
      }
    }
    const {
      messages: messagesFromUserInput,
      shouldQuery,
      allowedTools,
      model: modelFromUserInput,
      resultText
    } = await processUserInput({
      input: prompt,
      mode: "prompt",
      setToolJSX: () => {},
      context: {
        ...processUserInputContext,
        messages: this.mutableMessages
      },
      messages: this.mutableMessages,
      uuid: options?.uuid,
      isMeta: options?.isMeta,
      querySource: "sdk"
    });
    this.mutableMessages.push(...messagesFromUserInput);
    const messages = [...this.mutableMessages];
    if (persistSession && messagesFromUserInput.length > 0) {
      const transcriptPromise = recordTranscript(messages);
      if (isBareMode()) {} else {
        await transcriptPromise;
        if (isEnvTruthy(process.env.CLAUDE_CODE_EAGER_FLUSH) || isEnvTruthy(process.env.CLAUDE_CODE_IS_COWORK)) {
          await flushSessionStorage();
        }
      }
    }
    const _selector = messageSelector();
    const replayableMessages = messagesFromUserInput.filter((msg) => msg.type === "user" && !msg.isMeta && !msg.toolUseResult && (_selector?.selectableUserMessagesFilter(msg) ?? true) || msg.type === "system" && msg.subtype === "compact_boundary");
    const messagesToAck = replayUserMessages ? replayableMessages : [];
    setAppState((prev) => ({
      ...prev,
      toolPermissionContext: {
        ...prev.toolPermissionContext,
        alwaysAllowRules: {
          ...prev.toolPermissionContext.alwaysAllowRules,
          command: allowedTools
        }
      }
    }));
    const mainLoopModel = modelFromUserInput ?? initialMainLoopModel;
    processUserInputContext = {
      messages,
      setMessages: () => {},
      onChangeAPIKey: () => {},
      handleElicitation: this.config.handleElicitation,
      options: {
        commands,
        debug: false,
        tools,
        verbose,
        mainLoopModel,
        thinkingConfig: initialThinkingConfig,
        mcpClients,
        mcpResources: {},
        ideInstallationStatus: null,
        isNonInteractiveSession: true,
        customSystemPrompt,
        appendSystemPrompt,
        theme: resolveThemeSetting(getGlobalConfig().theme),
        agentDefinitions: { activeAgents: agents, allAgents: [] },
        maxBudgetUsd
      },
      getAppState,
      setAppState,
      abortController: this.abortController,
      readFileState: this.readFileState,
      nestedMemoryAttachmentTriggers: new Set,
      loadedNestedMemoryPaths: this.loadedNestedMemoryPaths,
      dynamicSkillDirTriggers: new Set,
      discoveredSkillNames: this.discoveredSkillNames,
      setInProgressToolUseIDs: () => {},
      setResponseLength: () => {},
      updateFileHistoryState: processUserInputContext.updateFileHistoryState,
      updateAttributionState: processUserInputContext.updateAttributionState,
      setSDKStatus
    };
    headlessProfilerCheckpoint("before_skills_plugins");
    const [skills, { enabled: enabledPlugins }] = await Promise.all([
      getSlashCommandToolSkills(getCwd()),
      loadAllPluginsCacheOnly()
    ]);
    headlessProfilerCheckpoint("after_skills_plugins");
    yield buildSystemInitMessage({
      tools,
      mcpClients,
      model: mainLoopModel,
      permissionMode: initialAppState.toolPermissionContext.mode,
      commands,
      agents,
      skills,
      plugins: enabledPlugins,
      fastMode: initialAppState.fastMode
    });
    headlessProfilerCheckpoint("system_message_yielded");
    if (!shouldQuery) {
      for (const msg of messagesFromUserInput) {
        if (msg.type === "user" && typeof msg.message.content === "string" && (msg.message.content.includes(`<${LOCAL_COMMAND_STDOUT_TAG}>`) || msg.message.content.includes(`<${LOCAL_COMMAND_STDERR_TAG}>`) || msg.isCompactSummary)) {
          yield {
            type: "user",
            message: {
              ...msg.message,
              content: stripAnsi(msg.message.content)
            },
            session_id: getSessionId(),
            parent_tool_use_id: null,
            uuid: msg.uuid,
            timestamp: msg.timestamp,
            isReplay: !msg.isCompactSummary,
            isSynthetic: msg.isMeta || msg.isVisibleInTranscriptOnly
          };
        }
        if (msg.type === "system" && msg.subtype === "local_command" && typeof msg.content === "string" && (msg.content.includes(`<${LOCAL_COMMAND_STDOUT_TAG}>`) || msg.content.includes(`<${LOCAL_COMMAND_STDERR_TAG}>`))) {
          yield localCommandOutputToSDKAssistantMessage(msg.content, msg.uuid);
        }
        if (msg.type === "system" && msg.subtype === "compact_boundary") {
          const compactMsg = msg;
          yield {
            type: "system",
            subtype: "compact_boundary",
            session_id: getSessionId(),
            uuid: msg.uuid,
            compact_metadata: toSDKCompactMetadata(compactMsg.compactMetadata)
          };
        }
      }
      if (persistSession) {
        await recordTranscript(messages);
        if (isEnvTruthy(process.env.CLAUDE_CODE_EAGER_FLUSH) || isEnvTruthy(process.env.CLAUDE_CODE_IS_COWORK)) {
          await flushSessionStorage();
        }
      }
      yield {
        type: "result",
        subtype: "success",
        is_error: false,
        duration_ms: Date.now() - startTime,
        duration_api_ms: getTotalAPIDuration(),
        num_turns: messages.length - 1,
        result: resultText ?? "",
        stop_reason: null,
        session_id: getSessionId(),
        total_cost_usd: getTotalCostUSD(),
        usage: this.totalUsage,
        modelUsage: getModelUsage(),
        permission_denials: this.permissionDenials,
        fast_mode_state: getFastModeState(mainLoopModel, initialAppState.fastMode),
        uuid: randomUUID()
      };
      return;
    }
    if (fileHistoryEnabled() && persistSession) {
      const _sel = messageSelector();
      const _filter = _sel?.selectableUserMessagesFilter ?? ((_msg) => true);
      messagesFromUserInput.filter(_filter).forEach((message) => {
        fileHistoryMakeSnapshot((updater) => {
          setAppState((prev) => ({
            ...prev,
            fileHistory: updater(prev.fileHistory)
          }));
        }, message.uuid);
      });
    }
    let currentMessageUsage = EMPTY_USAGE;
    let turnCount = 1;
    let hasAcknowledgedInitialMessages = false;
    let structuredOutputFromTool;
    let lastStopReason = null;
    const errorLogWatermark = getInMemoryErrors().at(-1);
    const initialStructuredOutputCalls = jsonSchema ? countToolCalls(this.mutableMessages, SYNTHETIC_OUTPUT_TOOL_NAME) : 0;
    for await (const message of query({
      messages,
      systemPrompt,
      userContext,
      systemContext,
      canUseTool: wrappedCanUseTool,
      toolUseContext: processUserInputContext,
      fallbackModel,
      querySource: "sdk",
      maxTurns,
      taskBudget
    })) {
      if (message.type === "assistant" || message.type === "user" || message.type === "system" && message.subtype === "compact_boundary") {
        if (persistSession && message.type === "system" && message.subtype === "compact_boundary") {
          const compactMsg = message;
          const tailUuid = compactMsg.compactMetadata?.preservedSegment?.tailUuid;
          if (tailUuid) {
            const tailIdx = this.mutableMessages.findLastIndex((m) => m.uuid === tailUuid);
            if (tailIdx !== -1) {
              await recordTranscript(this.mutableMessages.slice(0, tailIdx + 1));
            }
          }
        }
        messages.push(message);
        if (persistSession) {
          if (message.type === "assistant") {
            recordTranscript(messages);
          } else {
            await recordTranscript(messages);
          }
        }
        if (!hasAcknowledgedInitialMessages && messagesToAck.length > 0) {
          hasAcknowledgedInitialMessages = true;
          for (const msgToAck of messagesToAck) {
            if (msgToAck.type === "user") {
              yield {
                type: "user",
                message: msgToAck.message,
                session_id: getSessionId(),
                parent_tool_use_id: null,
                uuid: msgToAck.uuid,
                timestamp: msgToAck.timestamp,
                isReplay: true
              };
            }
          }
        }
      }
      if (message.type === "user") {
        turnCount++;
      }
      switch (message.type) {
        case "tombstone":
          break;
        case "assistant": {
          const msg = message;
          const stopReason = msg.message?.stop_reason;
          if (stopReason != null) {
            lastStopReason = stopReason;
          }
          this.mutableMessages.push(msg);
          yield* normalizeMessage(msg);
          break;
        }
        case "progress": {
          const msg = message;
          this.mutableMessages.push(msg);
          if (persistSession) {
            messages.push(msg);
            recordTranscript(messages);
          }
          yield* normalizeMessage(msg);
          break;
        }
        case "user": {
          const msg = message;
          this.mutableMessages.push(msg);
          yield* normalizeMessage(msg);
          break;
        }
        case "stream_event": {
          const event = message.event;
          if (event.type === "message_start") {
            currentMessageUsage = EMPTY_USAGE;
            const eventMessage = event.message;
            currentMessageUsage = updateUsage(currentMessageUsage, eventMessage.usage);
          }
          if (event.type === "message_delta") {
            currentMessageUsage = updateUsage(currentMessageUsage, event.usage);
            const delta = event.delta;
            if (delta.stop_reason != null) {
              lastStopReason = delta.stop_reason;
            }
          }
          if (event.type === "message_stop") {
            this.totalUsage = accumulateUsage(this.totalUsage, currentMessageUsage);
          }
          if (includePartialMessages) {
            yield {
              type: "stream_event",
              event,
              session_id: getSessionId(),
              parent_tool_use_id: null,
              uuid: randomUUID()
            };
          }
          break;
        }
        case "attachment": {
          const msg = message;
          this.mutableMessages.push(msg);
          if (persistSession) {
            messages.push(msg);
            recordTranscript(messages);
          }
          const attachment = msg.attachment;
          if (attachment.type === "structured_output") {
            structuredOutputFromTool = attachment.data;
          } else if (attachment.type === "max_turns_reached") {
            if (persistSession) {
              if (isEnvTruthy(process.env.CLAUDE_CODE_EAGER_FLUSH) || isEnvTruthy(process.env.CLAUDE_CODE_IS_COWORK)) {
                await flushSessionStorage();
              }
            }
            yield {
              type: "result",
              subtype: "error_max_turns",
              duration_ms: Date.now() - startTime,
              duration_api_ms: getTotalAPIDuration(),
              is_error: true,
              num_turns: attachment.turnCount,
              stop_reason: lastStopReason,
              session_id: getSessionId(),
              total_cost_usd: getTotalCostUSD(),
              usage: this.totalUsage,
              modelUsage: getModelUsage(),
              permission_denials: this.permissionDenials,
              fast_mode_state: getFastModeState(mainLoopModel, initialAppState.fastMode),
              uuid: randomUUID(),
              errors: [
                `Reached maximum number of turns (${attachment.maxTurns})`
              ]
            };
            return;
          } else if (replayUserMessages && attachment.type === "queued_command") {
            yield {
              type: "user",
              message: {
                role: "user",
                content: attachment.prompt
              },
              session_id: getSessionId(),
              parent_tool_use_id: null,
              uuid: attachment.source_uuid || msg.uuid,
              timestamp: msg.timestamp,
              isReplay: true
            };
          }
          break;
        }
        case "stream_request_start":
          break;
        case "system": {
          const msg = message;
          const snipResult = this.config.snipReplay?.(msg, this.mutableMessages);
          if (snipResult !== undefined) {
            if (snipResult.executed) {
              this.mutableMessages.length = 0;
              this.mutableMessages.push(...snipResult.messages);
            }
            break;
          }
          this.mutableMessages.push(msg);
          if (msg.subtype === "compact_boundary" && msg.compactMetadata) {
            const compactMsg = msg;
            const mutableBoundaryIdx = this.mutableMessages.length - 1;
            if (mutableBoundaryIdx > 0) {
              this.mutableMessages.splice(0, mutableBoundaryIdx);
            }
            const localBoundaryIdx = messages.length - 1;
            if (localBoundaryIdx > 0) {
              messages.splice(0, localBoundaryIdx);
            }
            yield {
              type: "system",
              subtype: "compact_boundary",
              session_id: getSessionId(),
              uuid: msg.uuid,
              compact_metadata: toSDKCompactMetadata(compactMsg.compactMetadata)
            };
          }
          if (msg.subtype === "api_error") {
            const apiErrorMsg = msg;
            yield {
              type: "system",
              subtype: "api_retry",
              attempt: apiErrorMsg.retryAttempt,
              max_retries: apiErrorMsg.maxRetries,
              retry_delay_ms: apiErrorMsg.retryInMs,
              error_status: apiErrorMsg.error.status ?? null,
              error: categorizeRetryableAPIError(apiErrorMsg.error),
              session_id: getSessionId(),
              uuid: msg.uuid
            };
          }
          break;
        }
        case "tool_use_summary": {
          const msg = message;
          yield {
            type: "tool_use_summary",
            summary: msg.summary,
            preceding_tool_use_ids: msg.precedingToolUseIds,
            session_id: getSessionId(),
            uuid: msg.uuid
          };
          break;
        }
      }
      if (maxBudgetUsd !== undefined && getTotalCostUSD() >= maxBudgetUsd) {
        if (persistSession) {
          if (isEnvTruthy(process.env.CLAUDE_CODE_EAGER_FLUSH) || isEnvTruthy(process.env.CLAUDE_CODE_IS_COWORK)) {
            await flushSessionStorage();
          }
        }
        yield {
          type: "result",
          subtype: "error_max_budget_usd",
          duration_ms: Date.now() - startTime,
          duration_api_ms: getTotalAPIDuration(),
          is_error: true,
          num_turns: turnCount,
          stop_reason: lastStopReason,
          session_id: getSessionId(),
          total_cost_usd: getTotalCostUSD(),
          usage: this.totalUsage,
          modelUsage: getModelUsage(),
          permission_denials: this.permissionDenials,
          fast_mode_state: getFastModeState(mainLoopModel, initialAppState.fastMode),
          uuid: randomUUID(),
          errors: [`Reached maximum budget ($${maxBudgetUsd})`]
        };
        return;
      }
      if (message.type === "user" && jsonSchema) {
        const currentCalls = countToolCalls(this.mutableMessages, SYNTHETIC_OUTPUT_TOOL_NAME);
        const callsThisQuery = currentCalls - initialStructuredOutputCalls;
        const maxRetries = parseInt(process.env.MAX_STRUCTURED_OUTPUT_RETRIES || "5", 10);
        if (callsThisQuery >= maxRetries) {
          if (persistSession) {
            if (isEnvTruthy(process.env.CLAUDE_CODE_EAGER_FLUSH) || isEnvTruthy(process.env.CLAUDE_CODE_IS_COWORK)) {
              await flushSessionStorage();
            }
          }
          yield {
            type: "result",
            subtype: "error_max_structured_output_retries",
            duration_ms: Date.now() - startTime,
            duration_api_ms: getTotalAPIDuration(),
            is_error: true,
            num_turns: turnCount,
            stop_reason: lastStopReason,
            session_id: getSessionId(),
            total_cost_usd: getTotalCostUSD(),
            usage: this.totalUsage,
            modelUsage: getModelUsage(),
            permission_denials: this.permissionDenials,
            fast_mode_state: getFastModeState(mainLoopModel, initialAppState.fastMode),
            uuid: randomUUID(),
            errors: [
              `Failed to provide valid structured output after ${maxRetries} attempts`
            ]
          };
          return;
        }
      }
    }
    const result = messages.findLast((m) => m.type === "assistant" || m.type === "user");
    const edeResultType = result?.type ?? "undefined";
    const edeLastContentType = result?.type === "assistant" ? last_default(result.message.content)?.type ?? "none" : "n/a";
    if (persistSession) {
      if (isEnvTruthy(process.env.CLAUDE_CODE_EAGER_FLUSH) || isEnvTruthy(process.env.CLAUDE_CODE_IS_COWORK)) {
        await flushSessionStorage();
      }
    }
    if (!isResultSuccessful(result, lastStopReason)) {
      yield {
        type: "result",
        subtype: "error_during_execution",
        duration_ms: Date.now() - startTime,
        duration_api_ms: getTotalAPIDuration(),
        is_error: true,
        num_turns: turnCount,
        stop_reason: lastStopReason,
        session_id: getSessionId(),
        total_cost_usd: getTotalCostUSD(),
        usage: this.totalUsage,
        modelUsage: getModelUsage(),
        permission_denials: this.permissionDenials,
        fast_mode_state: getFastModeState(mainLoopModel, initialAppState.fastMode),
        uuid: randomUUID(),
        errors: (() => {
          const all = getInMemoryErrors();
          const start = errorLogWatermark ? all.lastIndexOf(errorLogWatermark) + 1 : 0;
          return [
            `[ede_diagnostic] result_type=${edeResultType} last_content_type=${edeLastContentType} stop_reason=${lastStopReason}`,
            ...all.slice(start).map((_) => _.error)
          ];
        })()
      };
      return;
    }
    let textResult = "";
    let isApiError = false;
    if (result.type === "assistant") {
      const lastContent = last_default(result.message.content);
      if (lastContent?.type === "text" && !SYNTHETIC_MESSAGES.has(lastContent.text)) {
        textResult = lastContent.text;
      }
      isApiError = Boolean(result.isApiErrorMessage);
    }
    yield {
      type: "result",
      subtype: "success",
      is_error: isApiError,
      duration_ms: Date.now() - startTime,
      duration_api_ms: getTotalAPIDuration(),
      num_turns: turnCount,
      result: textResult,
      stop_reason: lastStopReason,
      session_id: getSessionId(),
      total_cost_usd: getTotalCostUSD(),
      usage: this.totalUsage,
      modelUsage: getModelUsage(),
      permission_denials: this.permissionDenials,
      structured_output: structuredOutputFromTool,
      fast_mode_state: getFastModeState(mainLoopModel, initialAppState.fastMode),
      uuid: randomUUID()
    };
  }
  interrupt() {
    this.abortController.abort();
  }
  resetAbortController() {
    this.abortController = createAbortController();
  }
  getAbortSignal() {
    return this.abortController.signal;
  }
  getMessages() {
    return this.mutableMessages;
  }
  getReadFileState() {
    return this.readFileState;
  }
  getSessionId() {
    return getSessionId();
  }
  setModel(model) {
    this.config.userSpecifiedModel = model;
  }
}
async function* ask({
  commands,
  prompt,
  promptUuid,
  isMeta,
  cwd,
  tools,
  mcpClients,
  verbose = false,
  thinkingConfig,
  maxTurns,
  maxBudgetUsd,
  taskBudget,
  canUseTool,
  mutableMessages = [],
  getReadFileCache,
  setReadFileCache,
  customSystemPrompt,
  appendSystemPrompt,
  userSpecifiedModel,
  fallbackModel,
  jsonSchema,
  getAppState,
  setAppState,
  abortController,
  replayUserMessages = false,
  includePartialMessages = false,
  handleElicitation,
  agents = [],
  setSDKStatus,
  orphanedPermission
}) {
  const engine = new QueryEngine({
    cwd,
    tools,
    commands,
    mcpClients,
    agents: agents ?? [],
    canUseTool,
    getAppState,
    setAppState,
    initialMessages: mutableMessages,
    readFileCache: cloneFileStateCache(getReadFileCache()),
    customSystemPrompt,
    appendSystemPrompt,
    userSpecifiedModel,
    fallbackModel,
    thinkingConfig,
    maxTurns,
    maxBudgetUsd,
    taskBudget,
    jsonSchema,
    verbose,
    handleElicitation,
    replayUserMessages,
    includePartialMessages,
    setSDKStatus,
    abortController,
    orphanedPermission,
    ...{
      snipReplay: (yielded, store) => {
        if (!snipProjection.isSnipBoundaryMessage(yielded))
          return;
        return snipModule.snipCompactIfNeeded(store, { force: true });
      }
    }
  });
  try {
    yield* engine.submitMessage(prompt, {
      uuid: promptUuid,
      isMeta
    });
  } finally {
    setReadFileCache(engine.getReadFileState());
  }
}

export { buildSideQuestionFallbackParams, QueryEngine, ask };
