// @bun
import {
  StructuredIO,
  exports_cronJitterConfig,
  exports_cronScheduler,
  extractInboundMessageFields,
  init_cronJitterConfig,
  init_cronScheduler,
  ndjsonSafeStringify,
  outputSchema,
  permissionPromptToolResultToPermissionDecision,
  reconcileMarketplaces
} from "./chunk-fna1fzv7.js";
import {
  restoreAgentFromSession,
  restoreSessionStateFromLog,
  skillChangeDetector
} from "./chunk-17p12gv3.js";
import {
  detectAndUninstallDelistedPlugins
} from "./chunk-cfm1q1cq.js";
import"./chunk-4x70hd9p.js";
import {
  HybridTransport,
  WebSocketTransport
} from "./chunk-9efr275t.js";
import {
  CCRClient,
  CCRInitError
} from "./chunk-acj4r8ee.js";
import"./chunk-nt837qt9.js";
import {
  resolveAndPrepend
} from "./chunk-sdsjbcs0.js";
import {
  externalMetadataToAppState
} from "./chunk-fyrhbhp1.js";
import {
  getPollIntervalConfig
} from "./chunk-vhpsr3bm.js";
import"./chunk-zvgyvpya.js";
import {
  SSETransport,
  init_SSETransport
} from "./chunk-sc9y2a8e.js";
import {
  ask,
  buildSideQuestionFallbackParams
} from "./chunk-kgz06s6d.js";
import"./chunk-deezf6jz.js";
import {
  init_toolPool,
  mergeAndFilterTools
} from "./chunk-72mdtjhq.js";
import"./chunk-0a0a56f2.js";
import {
  init_settingsSync
} from "./chunk-x5f7fdnx.js";
import {
  init_refresh,
  refreshActivePlugins
} from "./chunk-6dnfj8kf.js";
import {
  init_mappers,
  toInternalMessages,
  toSDKRateLimitInfo
} from "./chunk-p7749nem.js";
import {
  generateSessionTitle,
  init_sessionTitle
} from "./chunk-zvknjy2z.js";
import"./chunk-cnsj3vq2.js";
import {
  init_omit,
  omit_default
} from "./chunk-qff5yg0r.js";
import {
  ChannelMessageNotificationSchema,
  findChannelEntry,
  gateChannelServer,
  init_channelAllowlist,
  init_channelNotification,
  isChannelAllowlisted,
  isChannelsEnabled,
  wrapChannelMessage
} from "./chunk-xcq5qc2w.js";
import"./chunk-p111txfv.js";
import"./chunk-9gpajj6e.js";
import {
  collectContextData,
  init_context_noninteractive
} from "./chunk-axdev3g4.js";
import"./chunk-q2pkj7sp.js";
import {
  init_sideQuestion,
  runSideQuestion
} from "./chunk-4gx2hy61.js";
import"./chunk-rn0v1hk8.js";
import {
  DEFAULT_OUTPUT_STYLE_NAME,
  EFFORT_LEVELS,
  OAuthService,
  SHELL_TOOL_NAMES,
  SandboxManager,
  applySettingsChange,
  areMcpConfigsEqual,
  asSessionId,
  assembleToolPool,
  atomicWriteToZipCache,
  buildBridgeConnectUrl,
  checkGroveForNonInteractive,
  cleanupSessionPluginCache,
  clearCommandsCache,
  clearMarketplacesCache,
  clearPluginCache,
  clearServerCache,
  commandBelongsToServer,
  commitAutonomyQueuedPrompt,
  connectToServer,
  createAbortController,
  createCombinedAbortSignal,
  createModelSwitchBreadcrumbs,
  createProactiveAutonomyCommands,
  createSyntheticOutputTool,
  dequeue,
  dequeueAllMatching,
  doesMessageExistInSession,
  enqueue,
  executeNotificationHooks,
  exports_extractMemories,
  exports_prompt1 as exports_prompt,
  extractReadFilesFromMessages,
  fetchToolsForClient,
  fileHistoryCanRestore,
  fileHistoryEnabled,
  fileHistoryGetDiffStats,
  fileHistoryRewind,
  filterMcpServersByPolicy,
  filterToolsByDenyRules,
  filterToolsByServer,
  finalizeAutonomyRunCompleted,
  finalizeAutonomyRunFailed,
  finalizePendingAsyncHooks,
  findUnresolvedToolUse,
  formatDescriptionWithSource,
  fromArray,
  getAllMcpConfigs,
  getAllOutputStyles,
  getAutoModeUnavailableNotification,
  getAutoModeUnavailableReason,
  getCommandName,
  getCommands,
  getCommandsByMaxPriority,
  getDeclaredMarketplaces,
  getLastCacheSafeParams,
  getMarketplaceJsonRelativePath,
  getMcpConfigByName,
  getModelOptions,
  getPluginZipCachePath,
  getRemoteSessionUrl,
  getRunningTasks,
  getZipCacheKnownMarketplacesPath,
  getZipCacheMarketplacesDir,
  getZipCachePluginsDir,
  gracefulShutdown,
  gracefulShutdownSync,
  hasCommandsInQueue,
  hasPermissionsToUseTool,
  headlessProfilerCheckpoint,
  headlessProfilerStartTurn,
  hydrateFromCCRv2InternalEvents,
  hydrateRemoteSession,
  init_AsyncHookRegistry,
  init_SyntheticOutputTool,
  init_Tool,
  init_abortController,
  init_applySettingsChange,
  init_auth as init_auth2,
  init_auth1 as init_auth3,
  init_autonomyAuthority,
  init_autonomyRuns,
  init_bridgeStatusUtil,
  init_changeDetector,
  init_claudeAiLimits,
  init_client,
  init_combinedAbortSignal,
  init_commandLifecycle,
  init_commands1 as init_commands,
  init_config,
  init_constants,
  init_constants1 as init_constants2,
  init_conversationRecovery,
  init_effort,
  init_elicitationHandler,
  init_extractMemories,
  init_fileHistory,
  init_filesApi,
  init_forkedAgent,
  init_framework,
  init_generators,
  init_gracefulShutdown,
  init_grove,
  init_headlessProfiler,
  init_hookEvents,
  init_hooks1 as init_hooks,
  init_ids,
  init_loadAgentsDir,
  init_marketplaceManager,
  init_messageQueueManager,
  init_messages1 as init_messages,
  init_modelOptions,
  init_oauth,
  init_outputStyles,
  init_outputsScanner,
  init_permissionSetup,
  init_permissions,
  init_pluginLoader,
  init_policyLimits,
  init_product,
  init_prompt as init_prompt2,
  init_prompt1 as init_prompt3,
  init_prompt12 as init_prompt8,
  init_prompt13 as init_prompt9,
  init_prompt2 as init_prompt4,
  init_prompt3 as init_prompt5,
  init_prompt5 as init_prompt6,
  init_prompt9 as init_prompt7,
  init_promptSuggestion,
  init_queryHelpers,
  init_queryProfiler,
  init_reject,
  init_remoteManagedSettings,
  init_sandbox_adapter,
  init_sessionStart,
  init_sessionStorage,
  init_shellToolUtils,
  init_stopTask,
  init_teammateMailbox,
  init_thinking,
  init_tools1 as init_tools,
  init_types2,
  init_uniqBy,
  init_utils,
  init_uuid,
  init_vscodeSdkMcp,
  init_zipCache,
  installOAuthTokens,
  isAutoModeGateEnabled,
  isBackgroundTask,
  isBuiltInAgent,
  isBypassPermissionsModeDisabled,
  isMarketplaceSourceSupportedByZipCache,
  isMcpServerDisabled,
  isPluginZipCacheEnabled,
  isPolicyAllowed,
  isQualifiedForGrove,
  isShutdownApproved,
  isShuttingDown,
  loadAllPluginsCacheOnly,
  loadConversationForResume,
  loadKnownMarketplacesConfigSafe,
  logHeadlessProfilerTurn,
  logQueryProfileReport,
  logSuggestionOutcome,
  logSuggestionSuppressed,
  markAutonomyRunFailed,
  markAutonomyRunRunning,
  markMessagesAsRead,
  modelSupportsAdaptiveThinking,
  modelSupportsEffort,
  modelSupportsMaxEffort,
  notifyCommandLifecycle,
  parseAgentsFromJson,
  peek,
  performMCPOAuthFlow,
  prepareAutonomyTurnPrompt,
  processSessionStartHooks,
  processSetupHooks,
  readUnreadMessages,
  reconnectMcpServerImpl,
  recordAttributionSnapshot,
  registerHookEventHandler,
  registerSeedMarketplaces,
  reject_default,
  resetSessionFilePointer,
  resolveAppliedEffort,
  restoreSessionMetadata,
  revokeServerTokens,
  runElicitationHooks,
  runElicitationResultHooks,
  saveAgentSetting,
  saveAiGeneratedTitle,
  setCommandLifecycleListener,
  setInternalEventReader,
  setInternalEventWriter,
  setMcpServerEnabled,
  settingsChangeDetector,
  setupSdkMcpClients,
  setupVscodeSdkMcp,
  startQueryProfile,
  statusListeners,
  stopTask,
  subscribeToCommandQueue,
  takeInitialUserMessage,
  toolMatchesName,
  transitionPermissionMode,
  tryGenerateSuggestion,
  uniqBy_default,
  validateUuid,
  waitForRemoteManagedSettingsToLoad
} from "./chunk-ktw919wt.js";
import"./chunk-qwtafr2b.js";
import"./chunk-jz6xf3ty.js";
import"./chunk-et824jj8.js";
import"./chunk-var1et7e.js";
import"./chunk-v81kv9zm.js";
import {
  EMPTY_USAGE,
  drainSdkEvents,
  exports_proactive,
  getSessionIngressAuthToken,
  getSessionState,
  init_proactive,
  init_sdkEventQueue,
  init_sessionIngressAuth,
  init_sessionState,
  init_src,
  notifySessionMetadataChanged,
  notifySessionStateChanged,
  setPermissionModeChangedListener,
  setSessionMetadataChangedListener,
  setSessionStateChangedListener
} from "./chunk-chmfqs2y.js";
import"./chunk-1gfk9pd3.js";
import"./chunk-2gzv8nrw.js";
import"./chunk-ehtwnxpg.js";
import {
  incrementPromptCount,
  init_commitAttribution
} from "./chunk-1th1nz5d.js";
import"./chunk-x6pa9me9.js";
import"./chunk-wbtp4zy8.js";
import {
  init_tasks,
  init_teamHelpers,
  removeTeammateFromTeamFile,
  unassignTeammateTasks
} from "./chunk-ypmcesxe.js";
import"./chunk-ybaawhyf.js";
import"./chunk-bhdt6k7w.js";
import"./chunk-cgfdkzhb.js";
import {
  init_pluginIdentifier,
  parsePluginIdentifier
} from "./chunk-0rstde44.js";
import"./chunk-2cvt1abr.js";
import"./chunk-5ptgeqdf.js";
import"./chunk-1jvg23ym.js";
import"./chunk-akkx6jmm.js";
import {
  READ_FILE_STATE_CACHE_SIZE,
  createFileStateCacheWithSizeLimit,
  init_fileStateCache,
  mergeFileStateCaches
} from "./chunk-7fht54sw.js";
import"./chunk-pfhyp451.js";
import"./chunk-25ctr1k2.js";
import"./chunk-azxwk3qa.js";
import"./chunk-2e52n52z.js";
import"./chunk-dsnwry8r.js";
import"./chunk-ps49ymvj.js";
import"./chunk-t4kcvmes.js";
import"./chunk-tas8sqfx.js";
import"./chunk-kqqj7b7y.js";
import"./chunk-edqtm6y0.js";
import"./chunk-jakzh3ae.js";
import"./chunk-wf3yck87.js";
import"./chunk-1r0yky0f.js";
import"./chunk-jtnkamme.js";
import"./chunk-92f9twfz.js";
import"./chunk-6dj3cf9s.js";
import"./chunk-dn7vyq4j.js";
import"./chunk-4jm600zv.js";
import"./chunk-vs4r0kd5.js";
import"./chunk-g57ncwpz.js";
import"./chunk-9pp18zcp.js";
import"./chunk-h1xx834r.js";
import"./chunk-p8zggt02.js";
import"./chunk-6rj8k2tr.js";
import"./chunk-x69b8r8v.js";
import"./chunk-gx4kmdam.js";
import"./chunk-b53tzh92.js";
import"./chunk-gd6w3h9n.js";
import {
  AwsAuthStatusManager,
  KnownMarketplacesFileSchema,
  TASK_STOP_TOOL_NAME,
  WORKLOAD_CRON,
  ensureModelStringsInitialized,
  getAPIProvider,
  getAccountInformation,
  getDefaultMainLoopModel,
  getFastModeState,
  getFeatureValue_CACHED_MAY_BE_STALE,
  getMainLoopModel,
  getMcpPrefix,
  getSettingsWithSources,
  getSettings_DEPRECATED,
  init_auth,
  init_awsAuthStatusManager,
  init_betas1 as init_betas,
  init_fastMode,
  init_growthbook,
  init_mcpStringUtils,
  init_model,
  init_modelStrings,
  init_paths,
  init_prompt,
  init_providers,
  init_schemas,
  init_settings1 as init_settings,
  init_stringUtils,
  init_workloadContext,
  initializeGrowthBook,
  isExtractModeActive,
  isFastModeAvailable,
  isFastModeEnabled,
  isFastModeSupportedByModel,
  modelDisplayString,
  modelSupportsAutoMode,
  parseUserSpecifiedModel,
  runWithWorkload
} from "./chunk-1ghcng4e.js";
import {
  init_json,
  safeParseJSON
} from "./chunk-pz9t24tq.js";
import {
  expandPath,
  init_path
} from "./chunk-4efha55s.js";
import"./chunk-t7f7dp4k.js";
import {
  hasActiveInProcessTeammates,
  hasWorkingInProcessTeammates,
  init_array,
  init_teammate,
  isTeamLead,
  uniq,
  waitForTeammatesToBecomeIdle
} from "./chunk-zwarn9h7.js";
import"./chunk-b127reh2.js";
import"./chunk-et54q618.js";
import"./chunk-pe9b769s.js";
import"./chunk-64c1avct.js";
import {
  init_sleep,
  sleep
} from "./chunk-8g5pe1gr.js";
import"./chunk-0rbpfkda.js";
import"./chunk-gnw2dwca.js";
import"./chunk-wbmn1xar.js";
import"./chunk-3c25bcsw.js";
import"./chunk-nw7v8w65.js";
import"./chunk-xhesahm0.js";
import"./chunk-rh5a2rg9.js";
import {
  ElicitRequestSchema,
  ElicitationCompleteNotificationSchema,
  init_types
} from "./chunk-4cp6193g.js";
import"./chunk-8g747a8x.js";
import"./chunk-d7886r6a.js";
import"./chunk-adnxyg7j.js";
import"./chunk-djs11qd6.js";
import"./chunk-nrv96v1h.js";
import"./chunk-gdqk4ssq.js";
import"./chunk-bwawjerw.js";
import"./chunk-p2816w9z.js";
import"./chunk-v9smspw2.js";
import"./chunk-v1kzp02e.js";
import"./chunk-x5hyyhqf.js";
import"./chunk-crmjpsqe.js";
import"./chunk-er1s76c9.js";
import"./chunk-b5wxetbv.js";
import {
  init_analytics,
  logEvent
} from "./chunk-f2mhrmww.js";
import"./chunk-0vkfrmqm.js";
import"./chunk-0xjaqda8.js";
import"./chunk-c84gr0s2.js";
import {
  init_diagLogs,
  logForDiagnosticsNoPII,
  withDiagnosticsTiming
} from "./chunk-t6jhrn34.js";
import"./chunk-95xve7f8.js";
import"./chunk-jdq8jgyg.js";
import"./chunk-qcwbd71h.js";
import {
  getCwd,
  init_cwd
} from "./chunk-dxvkxgnf.js";
import {
  LOCAL_COMMAND_STDOUT_TAG,
  TEAMMATE_MESSAGE_TAG,
  TICK_TAG,
  getInMemoryErrors,
  init_log,
  init_xml,
  logError,
  logMCPDebug
} from "./chunk-w5ahy59y.js";
import"./chunk-8tnsngw2.js";
import"./chunk-jkh5s8ct.js";
import"./chunk-kwm5bf2m.js";
import"./chunk-5z28bqne.js";
import"./chunk-qajrkk97.js";
import {
  errorMessage,
  getFsImplementation,
  init_cleanupRegistry,
  init_debug,
  init_errors,
  init_fsOperations,
  init_slowOperations,
  isDebugMode,
  jsonParse,
  jsonStringify,
  logForDebugging,
  registerCleanup,
  toError
} from "./chunk-rpbc3b7k.js";
import {
  init_process,
  registerProcessOutputErrorHandlers,
  writeToStdout
} from "./chunk-fbv4apne.js";
import {
  getAllowedChannels,
  getFlagSettingsInline,
  getInitJsonSchema,
  getMainThreadAgentType,
  getSessionId,
  init_state,
  isSessionPersistenceDisabled,
  registerHookCallbacks,
  setAllowedChannels,
  setFlagSettingsInline,
  setInitJsonSchema,
  setMainLoopModelOverride,
  setMainThreadAgentType,
  setSdkAgentProgressSummariesEnabled,
  switchSession
} from "./chunk-j5xzpm59.js";
import"./chunk-50dgek10.js";
import"./chunk-7wm5s02e.js";
import"./chunk-d3bk85eq.js";
import"./chunk-cw8rngb2.js";
import {
  init_envUtils,
  isBareMode,
  isEnvDefinedFalsy,
  isEnvTruthy
} from "./chunk-hxhwzgnn.js";
import"./chunk-qx8z601m.js";
import"./chunk-cgm6758j.js";
import"./chunk-3v4d4h0t.js";
import"./chunk-8pn8tvgg.js";
import"./chunk-netzwgv1.js";
import {
  __require,
  __toCommonJS
} from "./chunk-qp2qdcda.js";

// src/cli/print.ts
init_settingsSync();
init_remoteManagedSettings();
import { readFile as readFile2, stat } from "fs/promises";
import { dirname } from "path";

// src/cli/remoteIO.ts
init_state();
import { PassThrough } from "stream";
import { URL as URL3 } from "url";
init_cleanupRegistry();
init_commandLifecycle();
init_debug();
init_diagLogs();
init_envUtils();
init_errors();
init_gracefulShutdown();
init_log();
init_process();
init_sessionIngressAuth();
init_sessionState();
init_sessionStorage();
init_SSETransport();

// src/cli/transports/transportUtils.ts
init_envUtils();
import { URL as URL2 } from "url";
init_SSETransport();
function getTransportForUrl(url, headers = {}, sessionId, refreshHeaders) {
  if (isEnvTruthy(process.env.CLAUDE_CODE_USE_CCR_V2)) {
    const sseUrl = new URL2(url.href);
    if (sseUrl.protocol === "wss:") {
      sseUrl.protocol = "https:";
    } else if (sseUrl.protocol === "ws:") {
      sseUrl.protocol = "http:";
    }
    sseUrl.pathname = sseUrl.pathname.replace(/\/$/, "") + "/worker/events/stream";
    return new SSETransport(sseUrl, headers, sessionId, refreshHeaders);
  }
  if (url.protocol === "ws:" || url.protocol === "wss:") {
    if (isEnvTruthy(process.env.CLAUDE_CODE_POST_FOR_SESSION_INGRESS_V2)) {
      return new HybridTransport(url, headers, sessionId, refreshHeaders);
    }
    return new WebSocketTransport(url, headers, sessionId, refreshHeaders);
  } else {
    throw new Error(`Unsupported protocol: ${url.protocol}`);
  }
}

// src/cli/remoteIO.ts
class RemoteIO extends StructuredIO {
  url;
  transport;
  inputStream;
  isBridge = false;
  isDebug = false;
  ccrClient = null;
  keepAliveTimer = null;
  constructor(streamUrl, initialPrompt, replayUserMessages) {
    const inputStream = new PassThrough({ encoding: "utf8" });
    super(inputStream, replayUserMessages);
    this.inputStream = inputStream;
    this.url = new URL3(streamUrl);
    const headers = {};
    const sessionToken = getSessionIngressAuthToken();
    if (sessionToken) {
      headers["Authorization"] = `Bearer ${sessionToken}`;
    } else {
      logForDebugging("[remote-io] No session ingress token available", {
        level: "error"
      });
    }
    const erVersion = process.env.CLAUDE_CODE_ENVIRONMENT_RUNNER_VERSION;
    if (erVersion) {
      headers["x-environment-runner-version"] = erVersion;
    }
    const refreshHeaders = () => {
      const h = {};
      const freshToken = getSessionIngressAuthToken();
      if (freshToken) {
        h["Authorization"] = `Bearer ${freshToken}`;
      }
      const freshErVersion = process.env.CLAUDE_CODE_ENVIRONMENT_RUNNER_VERSION;
      if (freshErVersion) {
        h["x-environment-runner-version"] = freshErVersion;
      }
      return h;
    };
    this.transport = getTransportForUrl(this.url, headers, getSessionId(), refreshHeaders);
    this.isBridge = process.env.CLAUDE_CODE_ENVIRONMENT_KIND === "bridge";
    this.isDebug = isDebugMode();
    this.transport.setOnData((data) => {
      this.inputStream.write(data);
      if (this.isBridge && this.isDebug) {
        writeToStdout(data.endsWith(`
`) ? data : data + `
`);
      }
    });
    this.transport.setOnClose(() => {
      this.inputStream.end();
    });
    if (isEnvTruthy(process.env.CLAUDE_CODE_USE_CCR_V2)) {
      if (!(this.transport instanceof SSETransport)) {
        throw new Error("CCR v2 requires SSETransport; check getTransportForUrl");
      }
      this.ccrClient = new CCRClient(this.transport, this.url);
      const init = this.ccrClient.initialize();
      this.restoredWorkerState = init.catch(() => null);
      init.catch((error) => {
        logForDiagnosticsNoPII("error", "cli_worker_lifecycle_init_failed", {
          reason: error instanceof CCRInitError ? error.reason : "unknown"
        });
        logError(new Error(`CCRClient initialization failed: ${errorMessage(error)}`));
        gracefulShutdown(1, "other");
      });
      registerCleanup(async () => this.ccrClient?.close());
      setInternalEventWriter((eventType, payload, options) => this.ccrClient.writeInternalEvent(eventType, payload, options));
      setInternalEventReader(() => this.ccrClient.readInternalEvents(), () => this.ccrClient.readSubagentInternalEvents());
      const LIFECYCLE_TO_DELIVERY = {
        started: "processing",
        completed: "processed"
      };
      setCommandLifecycleListener((uuid, state) => {
        this.ccrClient?.reportDelivery(uuid, LIFECYCLE_TO_DELIVERY[state]);
      });
      setSessionStateChangedListener((state, details) => {
        this.ccrClient?.reportState(state, details);
      });
      setSessionMetadataChangedListener((metadata) => {
        this.ccrClient?.reportMetadata(metadata);
      }, { replayCurrent: true });
    }
    this.transport.connect();
    const keepAliveIntervalMs = getPollIntervalConfig().session_keepalive_interval_v2_ms;
    if (this.isBridge && keepAliveIntervalMs > 0) {
      this.keepAliveTimer = setInterval(() => {
        logForDebugging("[remote-io] keep_alive sent");
        this.write({ type: "keep_alive" }).catch((err) => {
          logForDebugging(`[remote-io] keep_alive write failed: ${errorMessage(err)}`);
        });
      }, keepAliveIntervalMs);
      this.keepAliveTimer.unref?.();
    }
    registerCleanup(async () => this.close());
    if (initialPrompt) {
      const stream = this.inputStream;
      (async () => {
        for await (const chunk of initialPrompt) {
          stream.write(String(chunk).replace(/\n$/, "") + `
`);
        }
      })();
    }
  }
  flushInternalEvents() {
    return this.ccrClient?.flushInternalEvents() ?? Promise.resolve();
  }
  get internalEventsPending() {
    return this.ccrClient?.internalEventsPending ?? 0;
  }
  async write(message) {
    if (this.ccrClient) {
      await this.ccrClient.writeEvent(message);
    } else {
      await this.transport.write(message);
    }
    if (this.isBridge) {
      if (message.type === "control_request" || this.isDebug) {
        writeToStdout(ndjsonSafeStringify(message) + `
`);
      }
    }
  }
  close() {
    if (this.keepAliveTimer) {
      clearInterval(this.keepAliveTimer);
      this.keepAliveTimer = null;
    }
    this.transport.close();
    this.inputStream.end();
  }
}

// src/cli/print.ts
init_commands();

// src/utils/streamlinedTransform.ts
init_constants();
init_prompt3();
init_prompt4();
init_prompt5();
init_prompt2();
init_prompt8();
init_prompt9();
init_constants2();
init_prompt();
init_prompt6();
init_messages();
init_shellToolUtils();
init_stringUtils();
var COMMAND_TOOLS = [...SHELL_TOOL_NAMES, "Tmux", TASK_STOP_TOOL_NAME];

// src/utils/streamJsonStdoutGuard.ts
init_cleanupRegistry();
init_debug();
var STDOUT_GUARD_MARKER = "[stdout-guard]";
var installed = false;
var buffer = "";
var originalWrite = null;
function isJsonLine(line) {
  if (line.length === 0) {
    return true;
  }
  try {
    JSON.parse(line);
    return true;
  } catch {
    return false;
  }
}
function installStreamJsonStdoutGuard() {
  if (installed) {
    return;
  }
  installed = true;
  originalWrite = process.stdout.write.bind(process.stdout);
  process.stdout.write = function(chunk, encodingOrCb, cb) {
    const text = typeof chunk === "string" ? chunk : Buffer.from(chunk).toString("utf-8");
    buffer += text;
    let newlineIdx;
    let wrote = true;
    while ((newlineIdx = buffer.indexOf(`
`)) !== -1) {
      const line = buffer.slice(0, newlineIdx);
      buffer = buffer.slice(newlineIdx + 1);
      if (isJsonLine(line)) {
        wrote = originalWrite(line + `
`);
      } else {
        process.stderr.write(`${STDOUT_GUARD_MARKER} ${line}
`);
        logForDebugging(`streamJsonStdoutGuard diverted non-JSON stdout line: ${line.slice(0, 200)}`);
      }
    }
    const callback = typeof encodingOrCb === "function" ? encodingOrCb : cb;
    if (callback) {
      queueMicrotask(() => callback());
    }
    return wrote;
  };
  registerCleanup(async () => {
    if (buffer.length > 0) {
      if (originalWrite && isJsonLine(buffer)) {
        originalWrite(buffer + `
`);
      } else {
        process.stderr.write(`${STDOUT_GUARD_MARKER} ${buffer}
`);
      }
      buffer = "";
    }
    if (originalWrite) {
      process.stdout.write = originalWrite;
      originalWrite = null;
    }
    installed = false;
  });
}

// src/cli/print.ts
init_tools();
init_uniqBy();
init_array();
init_toolPool();
init_analytics();
init_growthbook();
init_debug();
init_diagLogs();
init_Tool();
init_loadAgentsDir();
init_messageQueueManager();
init_commandLifecycle();
init_sessionState();
init_log();
init_process();
init_src();
init_conversationRecovery();
init_channelNotification();
init_channelAllowlist();
init_pluginIdentifier();
init_uuid();
init_generators();
init_fileStateCache();
init_path();
init_queryHelpers();
init_hookEvents();

// src/utils/filePersistence/filePersistence.ts
init_analytics();
init_filesApi();
init_cwd();
init_errors();
init_log();
init_sessionIngressAuth();
init_outputsScanner();

// src/cli/print.ts
init_AsyncHookRegistry();
init_gracefulShutdown();
init_cleanupRegistry();

// src/utils/idleTimeout.ts
init_debug();
init_gracefulShutdown();
function createIdleTimeoutManager(isIdle) {
  const exitAfterStopDelay = process.env.CLAUDE_CODE_EXIT_AFTER_STOP_DELAY;
  const delayMs = exitAfterStopDelay ? parseInt(exitAfterStopDelay, 10) : null;
  const isValidDelay = delayMs && !isNaN(delayMs) && delayMs > 0;
  let timer = null;
  let lastIdleTime = 0;
  return {
    start() {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      if (isValidDelay) {
        lastIdleTime = Date.now();
        timer = setTimeout(() => {
          const idleDuration = Date.now() - lastIdleTime;
          if (isIdle() && idleDuration >= delayMs) {
            logForDebugging(`Exiting after ${delayMs}ms of idle time`);
            gracefulShutdownSync();
          }
        }, delayMs);
      }
    },
    stop() {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    }
  };
}

// src/cli/print.ts
init_cwd();
init_omit();
init_reject();
init_policyLimits();
init_product();
init_bridgeStatusUtil();
import { cwd } from "process";
init_permissions();
init_json();
init_abortController();
init_combinedAbortSignal();
init_sessionTitle();
init_sideQuestion();
init_sessionStart();
init_outputStyles();
init_xml();
init_settings();
init_changeDetector();
init_applySettingsChange();
init_fastMode();
init_permissionSetup();
init_promptSuggestion();
init_forkedAgent();
init_auth();
init_oauth();
init_auth3();
init_providers();
init_awsAuthStatusManager();
init_state();
init_SyntheticOutputTool();

// src/utils/sessionUrl.ts
init_uuid();
import { randomUUID } from "crypto";
function parseSessionIdentifier(resumeIdentifier) {
  if (resumeIdentifier.toLowerCase().endsWith(".jsonl")) {
    return {
      sessionId: randomUUID(),
      ingressUrl: null,
      isUrl: false,
      jsonlFile: resumeIdentifier,
      isJsonlFile: true
    };
  }
  if (validateUuid(resumeIdentifier)) {
    return {
      sessionId: resumeIdentifier,
      ingressUrl: null,
      isUrl: false,
      jsonlFile: null,
      isJsonlFile: false
    };
  }
  try {
    const url = new URL(resumeIdentifier);
    return {
      sessionId: randomUUID(),
      ingressUrl: url.href,
      isUrl: true,
      jsonlFile: null,
      isJsonlFile: false
    };
  } catch {}
  return null;
}

// src/cli/print.ts
init_sessionStorage();
init_commitAttribution();
init_client();
init_config();
init_auth2();
init_elicitationHandler();
init_hooks();
init_types();
init_mcpStringUtils();
init_utils();
init_vscodeSdkMcp();
init_config();
init_grove();
init_mappers();
init_messages();
init_context_noninteractive();
init_xml();
init_claudeAiLimits();
init_model();
init_modelOptions();
init_effort();
init_thinking();
init_betas();
init_modelStrings();
init_state();
init_workloadContext();
init_fileHistory();
import { randomUUID as randomUUID2 } from "crypto";
init_sandbox_adapter();
init_headlessProfiler();
init_queryProfiler();
init_ids();
init_autonomyRuns();
init_autonomyAuthority();
init_slowOperations();
init_commands();
init_envUtils();

// src/utils/plugins/headlessPluginInstall.ts
init_analytics();
init_cleanupRegistry();
init_debug();
init_diagLogs();
init_fsOperations();
init_log();
init_marketplaceManager();
init_pluginLoader();
init_zipCache();

// src/utils/plugins/zipCacheAdapters.ts
init_debug();
init_slowOperations();
init_marketplaceManager();
init_schemas();
init_zipCache();
import { readFile } from "fs/promises";
import { join } from "path";
async function readZipCacheKnownMarketplaces() {
  try {
    const content = await readFile(getZipCacheKnownMarketplacesPath(), "utf-8");
    const parsed = KnownMarketplacesFileSchema().safeParse(jsonParse(content));
    if (!parsed.success) {
      logForDebugging(`Invalid known_marketplaces.json in zip cache: ${parsed.error.message}`, { level: "error" });
      return {};
    }
    return parsed.data;
  } catch {
    return {};
  }
}
async function writeZipCacheKnownMarketplaces(data) {
  await atomicWriteToZipCache(getZipCacheKnownMarketplacesPath(), jsonStringify(data, null, 2));
}
async function saveMarketplaceJsonToZipCache(marketplaceName, installLocation) {
  const zipCachePath = getPluginZipCachePath();
  if (!zipCachePath) {
    return;
  }
  const content = await readMarketplaceJsonContent(installLocation);
  if (content !== null) {
    const relPath = getMarketplaceJsonRelativePath(marketplaceName);
    await atomicWriteToZipCache(join(zipCachePath, relPath), content);
  }
}
async function readMarketplaceJsonContent(dir) {
  const candidates = [
    join(dir, ".claude-plugin", "marketplace.json"),
    join(dir, "marketplace.json"),
    dir
  ];
  for (const candidate of candidates) {
    try {
      return await readFile(candidate, "utf-8");
    } catch {}
  }
  return null;
}
async function syncMarketplacesToZipCache() {
  const knownMarketplaces = await loadKnownMarketplacesConfigSafe();
  for (const [name, entry] of Object.entries(knownMarketplaces)) {
    if (!entry.installLocation)
      continue;
    try {
      await saveMarketplaceJsonToZipCache(name, entry.installLocation);
    } catch (error) {
      logForDebugging(`Failed to save marketplace JSON for ${name}: ${error}`);
    }
  }
  const zipCacheKnownMarketplaces = await readZipCacheKnownMarketplaces();
  const mergedKnownMarketplaces = {
    ...zipCacheKnownMarketplaces,
    ...knownMarketplaces
  };
  await writeZipCacheKnownMarketplaces(mergedKnownMarketplaces);
}

// src/utils/plugins/headlessPluginInstall.ts
async function installPluginsForHeadless() {
  const zipCacheMode = isPluginZipCacheEnabled();
  logForDebugging(`installPluginsForHeadless: starting${zipCacheMode ? " (zip cache mode)" : ""}`);
  const seedChanged = await registerSeedMarketplaces();
  if (seedChanged) {
    clearMarketplacesCache();
    clearPluginCache("headlessPluginInstall: seed marketplaces registered");
  }
  if (zipCacheMode) {
    await getFsImplementation().mkdir(getZipCacheMarketplacesDir());
    await getFsImplementation().mkdir(getZipCachePluginsDir());
  }
  const declaredCount = Object.keys(getDeclaredMarketplaces()).length;
  const metrics = {
    marketplaces_installed: 0,
    delisted_count: 0
  };
  let pluginsChanged = seedChanged;
  try {
    if (declaredCount === 0) {
      logForDebugging("installPluginsForHeadless: no marketplaces declared");
    } else {
      const reconcileResult = await withDiagnosticsTiming("headless_marketplace_reconcile", () => reconcileMarketplaces({
        skip: zipCacheMode ? (_name, source) => !isMarketplaceSourceSupportedByZipCache(source) : undefined,
        onProgress: (event) => {
          if (event.type === "installed") {
            logForDebugging(`installPluginsForHeadless: installed marketplace ${event.name}`);
          } else if (event.type === "failed") {
            logForDebugging(`installPluginsForHeadless: failed to install marketplace ${event.name}: ${event.error}`);
          }
        }
      }), (r) => ({
        installed_count: r.installed.length,
        updated_count: r.updated.length,
        failed_count: r.failed.length,
        skipped_count: r.skipped.length
      }));
      if (reconcileResult.skipped.length > 0) {
        logForDebugging(`installPluginsForHeadless: skipped ${reconcileResult.skipped.length} marketplace(s) unsupported by zip cache: ${reconcileResult.skipped.join(", ")}`);
      }
      const marketplacesChanged = reconcileResult.installed.length + reconcileResult.updated.length;
      if (marketplacesChanged > 0) {
        clearMarketplacesCache();
        clearPluginCache("headlessPluginInstall: marketplaces reconciled");
        pluginsChanged = true;
      }
      metrics.marketplaces_installed = marketplacesChanged;
    }
    if (zipCacheMode) {
      await syncMarketplacesToZipCache();
    }
    const newlyDelisted = await detectAndUninstallDelistedPlugins();
    metrics.delisted_count = newlyDelisted.length;
    if (newlyDelisted.length > 0) {
      pluginsChanged = true;
    }
    if (pluginsChanged) {
      clearPluginCache("headlessPluginInstall: plugins changed");
    }
    if (zipCacheMode) {
      registerCleanup(cleanupSessionPluginCache);
    }
    return pluginsChanged;
  } catch (error) {
    logError(error);
    return false;
  } finally {
    logEvent("tengu_headless_plugin_install", metrics);
  }
}

// src/cli/print.ts
init_refresh();
init_pluginLoader();
init_teammate();
init_teammateMailbox();
init_teamHelpers();
init_tasks();
init_framework();
init_types2();
init_stopTask();
init_sdkEventQueue();
init_growthbook();
init_errors();
init_sleep();
init_paths();
var proactiveModule = (init_proactive(), __toCommonJS(exports_proactive));
var cronSchedulerModule = (init_cronScheduler(), __toCommonJS(exports_cronScheduler));
var cronJitterConfigModule = (init_cronJitterConfig(), __toCommonJS(exports_cronJitterConfig));
var cronGate = (init_prompt7(), __toCommonJS(exports_prompt));
var extractMemoriesModule = (init_extractMemories(), __toCommonJS(exports_extractMemories));
var SHUTDOWN_TEAM_PROMPT = `<system-reminder>
You are running in non-interactive mode and cannot return a response to the user until your team is shut down.

You MUST shut down your team before preparing your final response:
1. Use requestShutdown to ask each team member to shut down gracefully
2. Wait for shutdown approvals
3. Use the cleanup operation to clean up the team
4. Only then provide your final response to the user

The user cannot receive your response until the team is completely shut down.
</system-reminder>

Shut down your team and prepare your final response for the user.`;
var MAX_RECEIVED_UUIDS = 1e4;
var receivedMessageUuids = new Set;
var receivedMessageUuidsOrder = [];
function trackReceivedMessageUuid(uuid) {
  if (receivedMessageUuids.has(uuid)) {
    return false;
  }
  receivedMessageUuids.add(uuid);
  receivedMessageUuidsOrder.push(uuid);
  if (receivedMessageUuidsOrder.length > MAX_RECEIVED_UUIDS) {
    const toEvict = receivedMessageUuidsOrder.splice(0, receivedMessageUuidsOrder.length - MAX_RECEIVED_UUIDS);
    for (const old of toEvict) {
      receivedMessageUuids.delete(old);
    }
  }
  return true;
}
function toBlocks(v) {
  return typeof v === "string" ? [{ type: "text", text: v }] : v;
}
function joinPromptValues(values) {
  if (values.length === 1)
    return values[0];
  if (values.every((v) => typeof v === "string")) {
    return values.join(`
`);
  }
  return values.flatMap(toBlocks);
}
function canBatchWith(head, next) {
  return next !== undefined && next.mode === "prompt" && next.workload === head.workload && next.isMeta === head.isMeta;
}
async function runHeadless(inputPrompt, getAppState, setAppState, commands, tools, sdkMcpConfigs, agents, options) {
  if (process.env.USER_TYPE === "ant" && isEnvTruthy(process.env.CLAUDE_CODE_EXIT_AFTER_FIRST_RENDER)) {
    process.stderr.write(`
Startup time: ${Math.round(process.uptime() * 1000)}ms
`);
    process.exit(0);
  }
  if (false) {}
  settingsChangeDetector.subscribe((source) => {
    applySettingsChange(source, setAppState);
    if (isFastModeEnabled()) {
      setAppState((prev) => {
        const s = prev.settings;
        const fastMode = s.fastMode === true && !s.fastModePerSessionOptIn;
        return { ...prev, fastMode };
      });
    }
  });
  if (proactiveModule && !proactiveModule.isProactiveActive() && isEnvTruthy(process.env.CLAUDE_CODE_PROACTIVE)) {
    proactiveModule.activateProactive("command");
  }
  if (typeof Bun !== "undefined") {
    const gcTimer = setInterval(Bun.gc, 1000);
    gcTimer.unref();
  }
  headlessProfilerStartTurn();
  headlessProfilerCheckpoint("runHeadless_entry");
  if (await isQualifiedForGrove()) {
    await checkGroveForNonInteractive();
  }
  headlessProfilerCheckpoint("after_grove_check");
  initializeGrowthBook();
  if (options.resumeSessionAt && !options.resume) {
    process.stderr.write(`Error: --resume-session-at requires --resume
`);
    gracefulShutdownSync(1);
    return;
  }
  if (options.rewindFiles && !options.resume) {
    process.stderr.write(`Error: --rewind-files requires --resume
`);
    gracefulShutdownSync(1);
    return;
  }
  if (options.rewindFiles && inputPrompt) {
    process.stderr.write(`Error: --rewind-files is a standalone operation and cannot be used with a prompt
`);
    gracefulShutdownSync(1);
    return;
  }
  const structuredIO = getStructuredIO(inputPrompt, options);
  if (options.outputFormat === "stream-json") {
    installStreamJsonStdoutGuard();
  }
  const sandboxUnavailableReason = SandboxManager.getSandboxUnavailableReason();
  if (sandboxUnavailableReason) {
    if (SandboxManager.isSandboxRequired()) {
      process.stderr.write(`
Error: sandbox required but unavailable: ${sandboxUnavailableReason}
` + `  sandbox.failIfUnavailable is set \u2014 refusing to start without a working sandbox.

`);
      gracefulShutdownSync(1);
      return;
    }
    process.stderr.write(`
\u26A0 Sandbox disabled: ${sandboxUnavailableReason}
` + `  Commands will run WITHOUT sandboxing. Network and filesystem restrictions will NOT be enforced.

`);
  } else if (SandboxManager.isSandboxingEnabled()) {
    try {
      await SandboxManager.initialize(structuredIO.createSandboxAskCallback());
    } catch (err) {
      process.stderr.write(`
\u274C Sandbox Error: ${errorMessage(err)}
`);
      gracefulShutdownSync(1, "other");
      return;
    }
  }
  if (options.outputFormat === "stream-json" && options.verbose) {
    registerHookEventHandler((event) => {
      const message = (() => {
        switch (event.type) {
          case "started":
            return {
              type: "system",
              subtype: "hook_started",
              hook_id: event.hookId,
              hook_name: event.hookName,
              hook_event: event.hookEvent,
              uuid: randomUUID2(),
              session_id: getSessionId()
            };
          case "progress":
            return {
              type: "system",
              subtype: "hook_progress",
              hook_id: event.hookId,
              hook_name: event.hookName,
              hook_event: event.hookEvent,
              stdout: event.stdout,
              stderr: event.stderr,
              output: event.output,
              uuid: randomUUID2(),
              session_id: getSessionId()
            };
          case "response":
            return {
              type: "system",
              subtype: "hook_response",
              hook_id: event.hookId,
              hook_name: event.hookName,
              hook_event: event.hookEvent,
              output: event.output,
              stdout: event.stdout,
              stderr: event.stderr,
              exit_code: event.exitCode,
              outcome: event.outcome,
              uuid: randomUUID2(),
              session_id: getSessionId()
            };
        }
      })();
      structuredIO.write(message);
    });
  }
  if (options.setupTrigger) {
    await processSetupHooks(options.setupTrigger);
  }
  headlessProfilerCheckpoint("before_loadInitialMessages");
  const appState = getAppState();
  const {
    messages: initialMessages,
    turnInterruptionState,
    agentSetting: resumedAgentSetting
  } = await loadInitialMessages(setAppState, {
    continue: options.continue,
    teleport: options.teleport,
    resume: options.resume,
    resumeSessionAt: options.resumeSessionAt,
    forkSession: options.forkSession,
    outputFormat: options.outputFormat,
    sessionStartHooksPromise: options.sessionStartHooksPromise,
    restoredWorkerState: structuredIO.restoredWorkerState
  });
  const hookInitialUserMessage = takeInitialUserMessage();
  if (hookInitialUserMessage) {
    structuredIO.prependUserMessage(hookInitialUserMessage);
  }
  if (!options.agent && !getMainThreadAgentType() && resumedAgentSetting) {
    const { agentDefinition: restoredAgent } = restoreAgentFromSession(resumedAgentSetting, undefined, { activeAgents: agents, allAgents: agents });
    if (restoredAgent) {
      setAppState((prev) => ({ ...prev, agent: restoredAgent.agentType }));
      if (!options.systemPrompt && !isBuiltInAgent(restoredAgent)) {
        const agentSystemPrompt = restoredAgent.getSystemPrompt();
        if (agentSystemPrompt) {
          options.systemPrompt = agentSystemPrompt;
        }
      }
      saveAgentSetting(restoredAgent.agentType);
    }
  }
  if (initialMessages.length === 0 && process.exitCode !== undefined) {
    return;
  }
  if (options.rewindFiles) {
    const targetMessage = initialMessages.find((m) => m.uuid === options.rewindFiles);
    if (!targetMessage || targetMessage.type !== "user") {
      process.stderr.write(`Error: --rewind-files requires a user message UUID, but ${options.rewindFiles} is not a user message in this session
`);
      gracefulShutdownSync(1);
      return;
    }
    const currentAppState = getAppState();
    const result = await handleRewindFiles(options.rewindFiles, currentAppState, setAppState, false);
    if (!result.canRewind) {
      process.stderr.write(`Error: ${result.error || "Unexpected error"}
`);
      gracefulShutdownSync(1);
      return;
    }
    process.stdout.write(`Files rewound to state at message ${options.rewindFiles}
`);
    gracefulShutdownSync(0);
    return;
  }
  const hasValidResumeSessionId = typeof options.resume === "string" && (Boolean(validateUuid(options.resume)) || options.resume.endsWith(".jsonl"));
  const isUsingSdkUrl = Boolean(options.sdkUrl);
  if (!inputPrompt && !hasValidResumeSessionId && !isUsingSdkUrl) {
    process.stderr.write(`Error: Input must be provided either through stdin or as a prompt argument when using --print
`);
    gracefulShutdownSync(1);
    return;
  }
  if (options.outputFormat === "stream-json" && !options.verbose) {
    options.verbose = true;
  }
  const allowedMcpTools = filterToolsByDenyRules(appState.mcp.tools, appState.toolPermissionContext);
  let filteredTools = [...tools, ...allowedMcpTools];
  const effectivePermissionPromptToolName = options.sdkUrl ? "stdio" : options.permissionPromptToolName;
  const onPermissionPrompt = (details) => {
    if (true) {
      setAppState((prev) => ({
        ...prev,
        attribution: {
          ...prev.attribution,
          permissionPromptCount: prev.attribution.permissionPromptCount + 1
        }
      }));
    }
    notifySessionStateChanged("requires_action", details);
  };
  const canUseTool = getCanUseToolFn(effectivePermissionPromptToolName, structuredIO, () => getAppState().mcp.tools, onPermissionPrompt);
  if (options.permissionPromptToolName) {
    filteredTools = filteredTools.filter((tool) => !toolMatchesName(tool, options.permissionPromptToolName));
  }
  registerProcessOutputErrorHandlers();
  headlessProfilerCheckpoint("after_loadInitialMessages");
  await ensureModelStringsInitialized();
  headlessProfilerCheckpoint("after_modelStrings");
  const needsFullArray = options.outputFormat === "json" && options.verbose;
  const messages = [];
  let lastMessage;
  const transformToStreamlined = null;
  let heartbeatTimer;
  if (options.outputFormat !== "stream-json") {
    const HEARTBEAT_INTERVAL_MS = 1e4;
    heartbeatTimer = setInterval(() => {
      process.stderr.write(`[mimo] heartbeat: running (${Math.round(process.uptime())}s elapsed)
`);
    }, HEARTBEAT_INTERVAL_MS);
    heartbeatTimer.unref();
  }
  headlessProfilerCheckpoint("before_runHeadlessStreaming");
  for await (const message of runHeadlessStreaming(structuredIO, appState.mcp.clients, [...commands, ...appState.mcp.commands], filteredTools, initialMessages, canUseTool, sdkMcpConfigs, getAppState, setAppState, agents, options, turnInterruptionState)) {
    if (transformToStreamlined) {
      const transformed = transformToStreamlined(message);
      if (transformed) {
        await structuredIO.write(transformed);
      }
    } else if (options.outputFormat === "stream-json" && options.verbose) {
      await structuredIO.write(message);
    }
    if (message.type !== "control_response" && message.type !== "control_request" && message.type !== "control_cancel_request" && !(message.type === "system" && (message.subtype === "session_state_changed" || message.subtype === "task_notification" || message.subtype === "task_started" || message.subtype === "task_progress" || message.subtype === "post_turn_summary")) && message.type !== "stream_event" && message.type !== "keep_alive" && message.type !== "streamlined_text" && message.type !== "streamlined_tool_use_summary" && message.type !== "prompt_suggestion") {
      if (needsFullArray) {
        messages.push(message);
      }
      lastMessage = message;
    }
  }
  if (heartbeatTimer) {
    clearInterval(heartbeatTimer);
  }
  switch (options.outputFormat) {
    case "json":
      if (!lastMessage || lastMessage.type !== "result") {
        throw new Error("No messages returned");
      }
      if (options.verbose) {
        writeToStdout(jsonStringify(messages) + `
`);
        break;
      }
      writeToStdout(jsonStringify(lastMessage) + `
`);
      break;
    case "stream-json":
      break;
    default:
      if (!lastMessage || lastMessage.type !== "result") {
        throw new Error("No messages returned");
      }
      switch (lastMessage.subtype) {
        case "success":
          writeToStdout(lastMessage.result.endsWith(`
`) ? lastMessage.result : lastMessage.result + `
`);
          break;
        case "error_during_execution":
          writeToStdout(`Execution error`);
          break;
        case "error_max_turns":
          writeToStdout(`Error: Reached max turns (${options.maxTurns})`);
          break;
        case "error_max_budget_usd":
          writeToStdout(`Error: Exceeded USD budget (${options.maxBudgetUsd})`);
          break;
        case "error_max_structured_output_retries":
          writeToStdout(`Error: Failed to provide valid structured output after maximum retries`);
      }
  }
  logHeadlessProfilerTurn();
  if (isExtractModeActive()) {
    await extractMemoriesModule.drainPendingExtraction();
  }
  gracefulShutdownSync(lastMessage?.type === "result" && lastMessage?.is_error ? 1 : 0);
}
function runHeadlessStreaming(structuredIO, mcpClients, commands, tools, initialMessages, canUseTool, sdkMcpConfigs, getAppState, setAppState, agents, options, turnInterruptionState) {
  let running = false;
  let runPhase;
  let inputClosed = false;
  let shutdownPromptInjected = false;
  let heldBackResult = null;
  let abortController;
  const output = structuredIO.outbound;
  const sigintHandler = () => {
    logForDiagnosticsNoPII("info", "shutdown_signal", { signal: "SIGINT" });
    if (abortController && !abortController.signal.aborted) {
      abortController.abort();
    }
    gracefulShutdown(0);
  };
  process.on("SIGINT", sigintHandler);
  registerCleanup(async () => {
    const bg = {};
    for (const t of getRunningTasks(getAppState())) {
      if (isBackgroundTask(t))
        bg[t.type] = (bg[t.type] ?? 0) + 1;
    }
    logForDiagnosticsNoPII("info", "run_state_at_shutdown", {
      run_active: running,
      run_phase: runPhase,
      worker_status: getSessionState(),
      internal_events_pending: structuredIO.internalEventsPending,
      bg_tasks: bg
    });
  });
  setPermissionModeChangedListener((newMode) => {
    if (newMode === "default" || newMode === "acceptEdits" || newMode === "bypassPermissions" || newMode === "plan" || newMode === "auto" || newMode === "dontAsk") {
      output.enqueue({
        type: "system",
        subtype: "status",
        status: null,
        permissionMode: newMode,
        uuid: randomUUID2(),
        session_id: getSessionId()
      });
    }
  });
  const suggestionState = {
    abortController: null,
    inflightPromise: null,
    lastEmitted: null,
    pendingSuggestion: null,
    pendingLastEmittedEntry: null
  };
  let unsubscribeAuthStatus;
  if (options.enableAuthStatus) {
    const authStatusManager = AwsAuthStatusManager.getInstance();
    unsubscribeAuthStatus = authStatusManager.subscribe((status) => {
      output.enqueue({
        type: "auth_status",
        isAuthenticating: status.isAuthenticating,
        output: status.output,
        error: status.error,
        uuid: randomUUID2(),
        session_id: getSessionId()
      });
    });
  }
  const rateLimitListener = (limits) => {
    const rateLimitInfo = toSDKRateLimitInfo(limits);
    if (rateLimitInfo) {
      output.enqueue({
        type: "rate_limit_event",
        rate_limit_info: rateLimitInfo,
        uuid: randomUUID2(),
        session_id: getSessionId()
      });
    }
  };
  statusListeners.add(rateLimitListener);
  const mutableMessages = initialMessages;
  let readFileState = extractReadFilesFromMessages(initialMessages, cwd(), READ_FILE_STATE_CACHE_SIZE);
  const pendingSeeds = createFileStateCacheWithSizeLimit(READ_FILE_STATE_CACHE_SIZE);
  const resumeInterruptedTurnEnv = process.env.CLAUDE_CODE_RESUME_INTERRUPTED_TURN;
  if (turnInterruptionState && turnInterruptionState.kind !== "none" && resumeInterruptedTurnEnv) {
    logForDebugging(`[print.ts] Auto-resuming interrupted turn (kind: ${turnInterruptionState.kind})`);
    removeInterruptedMessage(mutableMessages, turnInterruptionState.message);
    enqueue({
      mode: "prompt",
      value: turnInterruptionState.message.message.content,
      uuid: randomUUID2()
    });
  }
  const modelOptions = getModelOptions();
  const modelInfos = modelOptions.map((option) => {
    const modelId = option.value === null ? "default" : option.value;
    const resolvedModel = modelId === "default" ? getDefaultMainLoopModel() : parseUserSpecifiedModel(modelId);
    const hasEffort = modelSupportsEffort(resolvedModel);
    const hasAdaptiveThinking = modelSupportsAdaptiveThinking(resolvedModel);
    const hasFastMode = isFastModeSupportedByModel(option.value);
    const hasAutoMode = modelSupportsAutoMode(resolvedModel);
    return {
      name: modelId,
      value: modelId,
      displayName: option.label,
      description: option.description,
      ...hasEffort && {
        supportsEffort: true,
        supportedEffortLevels: modelSupportsMaxEffort(resolvedModel) ? [...EFFORT_LEVELS] : EFFORT_LEVELS.filter((l) => l !== "max")
      },
      ...hasAdaptiveThinking && { supportsAdaptiveThinking: true },
      ...hasFastMode && { supportsFastMode: true },
      ...hasAutoMode && { supportsAutoMode: true }
    };
  });
  let activeUserSpecifiedModel = options.userSpecifiedModel;
  function injectModelSwitchBreadcrumbs(modelArg, resolvedModel) {
    const breadcrumbs = createModelSwitchBreadcrumbs(modelArg, modelDisplayString(resolvedModel));
    mutableMessages.push(...breadcrumbs);
    for (const crumb of breadcrumbs) {
      if (typeof crumb.message.content === "string" && crumb.message.content.includes(`<${LOCAL_COMMAND_STDOUT_TAG}>`)) {
        output.enqueue({
          type: "user",
          content: crumb.message.content,
          message: crumb.message,
          session_id: getSessionId(),
          parent_tool_use_id: null,
          uuid: crumb.uuid,
          timestamp: crumb.timestamp,
          isReplay: true
        });
      }
    }
  }
  let sdkClients = [];
  let sdkTools = [];
  const elicitationRegistered = new Set;
  function registerElicitationHandlers(clients) {
    for (const connection of clients) {
      if (connection.type !== "connected" || elicitationRegistered.has(connection.name)) {
        continue;
      }
      if (connection.config.type === "sdk") {
        continue;
      }
      const serverName = connection.name;
      try {
        connection.client.setRequestHandler(ElicitRequestSchema, async (request, extra) => {
          logMCPDebug(serverName, `Elicitation request received in print mode: ${jsonStringify(request)}`);
          const mode = request.params.mode === "url" ? "url" : "form";
          logEvent("tengu_mcp_elicitation_shown", {
            mode
          });
          const hookResponse = await runElicitationHooks(serverName, request.params, extra.signal);
          if (hookResponse) {
            logMCPDebug(serverName, `Elicitation resolved by hook: ${jsonStringify(hookResponse)}`);
            logEvent("tengu_mcp_elicitation_response", {
              mode,
              action: hookResponse.action
            });
            return hookResponse;
          }
          const url = "url" in request.params ? request.params.url : undefined;
          const requestedSchema = "requestedSchema" in request.params ? request.params.requestedSchema : undefined;
          const elicitationId = "elicitationId" in request.params ? request.params.elicitationId : undefined;
          const rawResult = await structuredIO.handleElicitation(serverName, request.params.message, requestedSchema, extra.signal, mode, url, elicitationId);
          const result = await runElicitationResultHooks(serverName, rawResult, extra.signal, mode, elicitationId);
          logEvent("tengu_mcp_elicitation_response", {
            mode,
            action: result.action
          });
          return result;
        });
        connection.client.setNotificationHandler(ElicitationCompleteNotificationSchema, (notification) => {
          const { elicitationId } = notification.params;
          logMCPDebug(serverName, `Elicitation completion notification: ${elicitationId}`);
          executeNotificationHooks({
            message: `MCP server "${serverName}" confirmed elicitation ${elicitationId} complete`,
            notificationType: "elicitation_complete"
          });
          output.enqueue({
            type: "system",
            subtype: "elicitation_complete",
            mcp_server_name: serverName,
            elicitation_id: elicitationId,
            uuid: randomUUID2(),
            session_id: getSessionId()
          });
        });
        elicitationRegistered.add(serverName);
      } catch {}
    }
  }
  async function updateSdkMcp() {
    const currentServerNames = new Set(Object.keys(sdkMcpConfigs));
    const connectedServerNames = new Set(sdkClients.map((c) => c.name));
    const hasNewServers = Array.from(currentServerNames).some((name) => !connectedServerNames.has(name));
    const hasRemovedServers = Array.from(connectedServerNames).some((name) => !currentServerNames.has(name));
    const hasPendingSdkClients = sdkClients.some((c) => c.type === "pending");
    const hasFailedSdkClients = sdkClients.some((c) => c.type === "failed");
    const haveServersChanged = hasNewServers || hasRemovedServers || hasPendingSdkClients || hasFailedSdkClients;
    if (haveServersChanged) {
      for (const client of sdkClients) {
        if (!currentServerNames.has(client.name)) {
          if (client.type === "connected") {
            await client.cleanup();
          }
        }
      }
      const sdkSetup = await setupSdkMcpClients(sdkMcpConfigs, (serverName, message) => structuredIO.sendMcpMessage(serverName, message));
      sdkClients = sdkSetup.clients;
      sdkTools = sdkSetup.tools;
      const allSdkNames = uniq([...connectedServerNames, ...currentServerNames]);
      setAppState((prev) => ({
        ...prev,
        mcp: {
          ...prev.mcp,
          tools: [
            ...prev.mcp.tools.filter((t) => !allSdkNames.some((name) => t.name.startsWith(getMcpPrefix(name)))),
            ...sdkTools
          ]
        }
      }));
      setupVscodeSdkMcp(sdkClients);
    }
  }
  updateSdkMcp();
  let dynamicMcpState = {
    clients: [],
    tools: [],
    configs: {}
  };
  const buildAllTools = (appState) => {
    const assembledTools = assembleToolPool(appState.toolPermissionContext, appState.mcp.tools);
    let allTools = uniqBy_default(mergeAndFilterTools([...tools, ...sdkTools, ...dynamicMcpState.tools], assembledTools, appState.toolPermissionContext.mode), "name");
    if (options.permissionPromptToolName) {
      allTools = allTools.filter((tool) => !toolMatchesName(tool, options.permissionPromptToolName));
    }
    const initJsonSchema = getInitJsonSchema();
    if (initJsonSchema && !options.jsonSchema) {
      const syntheticOutputResult = createSyntheticOutputTool(initJsonSchema);
      if ("tool" in syntheticOutputResult) {
        allTools = [...allTools, syntheticOutputResult.tool];
      }
    }
    return allTools;
  };
  let bridgeHandle = null;
  let bridgeLastForwardedIndex = 0;
  function forwardMessagesToBridge() {
    if (!bridgeHandle)
      return;
    const startIndex = Math.min(bridgeLastForwardedIndex, mutableMessages.length);
    const newMessages = mutableMessages.slice(startIndex).filter((m) => m.type === "user" || m.type === "assistant");
    bridgeLastForwardedIndex = mutableMessages.length;
    if (newMessages.length > 0) {
      bridgeHandle.writeMessages(newMessages);
    }
  }
  let mcpChangesPromise = Promise.resolve({
    response: {
      added: [],
      removed: [],
      errors: {}
    },
    sdkServersChanged: false
  });
  function applyMcpServerChanges(servers) {
    const doWork = async () => {
      const oldSdkClientNames = new Set(sdkClients.map((c) => c.name));
      const result = await handleMcpSetServers(servers, { configs: sdkMcpConfigs, clients: sdkClients, tools: sdkTools }, dynamicMcpState, setAppState);
      for (const key of Object.keys(sdkMcpConfigs)) {
        delete sdkMcpConfigs[key];
      }
      Object.assign(sdkMcpConfigs, result.newSdkState.configs);
      sdkClients = result.newSdkState.clients;
      sdkTools = result.newSdkState.tools;
      dynamicMcpState = result.newDynamicState;
      if (result.sdkServersChanged) {
        const newSdkClientNames = new Set(sdkClients.map((c) => c.name));
        const allSdkNames = uniq([...oldSdkClientNames, ...newSdkClientNames]);
        setAppState((prev) => ({
          ...prev,
          mcp: {
            ...prev.mcp,
            tools: [
              ...prev.mcp.tools.filter((t) => !allSdkNames.some((name) => t.name.startsWith(getMcpPrefix(name)))),
              ...sdkTools
            ]
          }
        }));
      }
      return {
        response: result.response,
        sdkServersChanged: result.sdkServersChanged
      };
    };
    mcpChangesPromise = mcpChangesPromise.then(doWork, doWork);
    return mcpChangesPromise;
  }
  function buildMcpServerStatuses() {
    const currentAppState = getAppState();
    const currentMcpClients = currentAppState.mcp.clients;
    const allMcpTools = uniqBy_default([...currentAppState.mcp.tools, ...dynamicMcpState.tools], "name");
    const existingNames = new Set([
      ...currentMcpClients.map((c) => c.name),
      ...sdkClients.map((c) => c.name)
    ]);
    return [
      ...currentMcpClients,
      ...sdkClients,
      ...dynamicMcpState.clients.filter((c) => !existingNames.has(c.name))
    ].map((connection) => {
      let config;
      if (connection.config.type === "sse" || connection.config.type === "http") {
        config = {
          type: connection.config.type,
          url: connection.config.url,
          headers: connection.config.headers,
          oauth: connection.config.oauth
        };
      } else if (connection.config.type === "claudeai-proxy") {
        config = {
          type: "claudeai-proxy",
          url: connection.config.url,
          id: connection.config.id
        };
      } else if (connection.config.type === "stdio" || connection.config.type === undefined) {
        const stdioConfig = connection.config;
        config = {
          type: "stdio",
          command: stdioConfig.command,
          args: stdioConfig.args
        };
      }
      const serverTools = connection.type === "connected" ? filterToolsByServer(allMcpTools, connection.name).map((tool) => ({
        name: tool.mcpInfo?.toolName ?? tool.name,
        annotations: {
          readOnly: tool.isReadOnly({}) || undefined,
          destructive: tool.isDestructive?.({}) || undefined,
          openWorld: tool.isOpenWorld?.({}) || undefined
        }
      })) : undefined;
      let capabilities;
      if (connection.type === "connected" && connection.capabilities.experimental) {
        const exp = { ...connection.capabilities.experimental };
        if (exp["claude/channel"] && (!isChannelsEnabled() || !isChannelAllowlisted(connection.config.pluginSource))) {
          delete exp["claude/channel"];
        }
        if (Object.keys(exp).length > 0) {
          capabilities = { experimental: exp };
        }
      }
      return {
        name: connection.name,
        status: connection.type,
        serverInfo: connection.type === "connected" ? connection.serverInfo : undefined,
        error: connection.type === "failed" ? connection.error : undefined,
        config,
        scope: connection.config.scope,
        tools: serverTools,
        capabilities
      };
    });
  }
  async function installPluginsAndApplyMcpInBackground() {
    try {
      await Promise.all([
        Promise.resolve(),
        withDiagnosticsTiming("headless_managed_settings_wait", () => waitForRemoteManagedSettingsToLoad())
      ]);
      const pluginsInstalled = await installPluginsForHeadless();
      if (pluginsInstalled) {
        await applyPluginMcpDiff();
      }
    } catch (error) {
      logError(error);
    }
  }
  let pluginInstallPromise = null;
  if (!isBareMode()) {
    if (isEnvTruthy(process.env.CLAUDE_CODE_SYNC_PLUGIN_INSTALL)) {
      pluginInstallPromise = installPluginsAndApplyMcpInBackground();
    } else {
      installPluginsAndApplyMcpInBackground();
    }
  }
  const idleTimeout = createIdleTimeoutManager(() => !running);
  let currentCommands = commands;
  let currentAgents = agents;
  async function refreshPluginState() {
    const { agentDefinitions: freshAgentDefs } = await refreshActivePlugins(setAppState);
    currentCommands = await getCommands(cwd());
    const sdkAgents = currentAgents.filter((a) => a.source === "flagSettings");
    currentAgents = [...freshAgentDefs.allAgents, ...sdkAgents];
  }
  async function applyPluginMcpDiff() {
    const { servers: newConfigs } = await getAllMcpConfigs();
    const supportedConfigs = {};
    for (const [name, config] of Object.entries(newConfigs)) {
      const type = config.type;
      if (type === undefined || type === "stdio" || type === "sse" || type === "http" || type === "sdk") {
        supportedConfigs[name] = config;
      }
    }
    for (const [name, config] of Object.entries(sdkMcpConfigs)) {
      if (config.type === "sdk" && !(name in supportedConfigs)) {
        supportedConfigs[name] = config;
      }
    }
    const { response, sdkServersChanged } = await applyMcpServerChanges(supportedConfigs);
    if (sdkServersChanged) {
      updateSdkMcp();
    }
    logForDebugging(`Headless MCP refresh: added=${response.added.length}, removed=${response.removed.length}`);
  }
  const unsubscribeSkillChanges = skillChangeDetector.subscribe(() => {
    clearCommandsCache();
    getCommands(cwd()).then((newCommands) => {
      currentCommands = newCommands;
    });
  });
  const scheduleProactiveTick = () => {
    setTimeout(() => {
      if (!proactiveModule?.isProactiveActive() || proactiveModule.isProactivePaused() || inputClosed) {
        return;
      }
      (async () => {
        const commands2 = await createProactiveAutonomyCommands({
          basePrompt: `<${TICK_TAG}>${new Date().toLocaleTimeString()}</${TICK_TAG}>`,
          currentDir: cwd(),
          shouldCreate: () => !inputClosed
        });
        for (const command of commands2) {
          if (inputClosed) {
            return;
          }
          enqueue({
            ...command,
            uuid: randomUUID2()
          });
        }
        run();
      })();
    }, 0);
  };
  subscribeToCommandQueue(() => {
    if (abortController && getCommandsByMaxPriority("now").length > 0) {
      abortController.abort("interrupt");
    }
  });
  const run = async () => {
    if (running) {
      return;
    }
    running = true;
    runPhase = undefined;
    notifySessionStateChanged("running");
    idleTimeout.stop();
    headlessProfilerCheckpoint("run_entry");
    await updateSdkMcp();
    headlessProfilerCheckpoint("after_updateSdkMcp");
    if (pluginInstallPromise) {
      const timeoutMs = parseInt(process.env.CLAUDE_CODE_SYNC_PLUGIN_INSTALL_TIMEOUT_MS || "", 10);
      if (timeoutMs > 0) {
        const timeout = sleep(timeoutMs).then(() => "timeout");
        const result = await Promise.race([pluginInstallPromise, timeout]);
        if (result === "timeout") {
          logError(new Error(`CLAUDE_CODE_SYNC_PLUGIN_INSTALL: plugin installation timed out after ${timeoutMs}ms`));
          logEvent("tengu_sync_plugin_install_timeout", {
            timeout_ms: timeoutMs
          });
        }
      } else {
        await pluginInstallPromise;
      }
      pluginInstallPromise = null;
      await refreshPluginState();
      const { setupPluginHookHotReload } = await import("./chunk-n17f9kg1.js");
      setupPluginHookHotReload();
    }
    const isMainThread = (cmd) => cmd.agentId === undefined;
    try {
      let command;
      let waitingForAgents = false;
      const drainCommandQueue = async () => {
        while (command = dequeue(isMainThread)) {
          if (command.mode !== "prompt" && command.mode !== "orphaned-permission" && command.mode !== "task-notification") {
            throw new Error("only prompt commands are supported in streaming mode");
          }
          const batch = [command];
          if (command.mode === "prompt") {
            while (canBatchWith(command, peek(isMainThread))) {
              batch.push(dequeue(isMainThread));
            }
            if (batch.length > 1) {
              command = {
                ...command,
                value: joinPromptValues(batch.map((c) => c.value)),
                uuid: batch.findLast((c) => c.uuid)?.uuid ?? command.uuid
              };
            }
          }
          const batchUuids = batch.map((c) => c.uuid).filter((u) => u !== undefined);
          if (options.replayUserMessages && batch.length > 1) {
            for (const c of batch) {
              if (c.uuid && c.uuid !== command.uuid) {
                output.enqueue({
                  type: "user",
                  content: c.value,
                  message: { role: "user", content: c.value },
                  session_id: getSessionId(),
                  parent_tool_use_id: null,
                  uuid: c.uuid,
                  isReplay: true
                });
              }
            }
          }
          const appState = getAppState();
          const allMcpClients = [
            ...appState.mcp.clients,
            ...sdkClients,
            ...dynamicMcpState.clients
          ];
          registerElicitationHandlers(allMcpClients);
          for (const client of allMcpClients) {
            reregisterChannelHandlerAfterReconnect(client);
          }
          const allTools = buildAllTools(appState);
          for (const uuid of batchUuids) {
            notifyCommandLifecycle(uuid, "started");
          }
          if (command.mode === "task-notification") {
            const notificationText = typeof command.value === "string" ? command.value : "";
            const taskIdMatch = notificationText.match(/<task-id>([^<]+)<\/task-id>/);
            const toolUseIdMatch = notificationText.match(/<tool-use-id>([^<]+)<\/tool-use-id>/);
            const outputFileMatch = notificationText.match(/<output-file>([^<]+)<\/output-file>/);
            const statusMatch = notificationText.match(/<status>([^<]+)<\/status>/);
            const summaryMatch = notificationText.match(/<summary>([^<]+)<\/summary>/);
            const isValidStatus = (s) => s === "completed" || s === "failed" || s === "stopped" || s === "killed";
            const rawStatus = statusMatch?.[1];
            const status = isValidStatus(rawStatus) ? rawStatus === "killed" ? "stopped" : rawStatus : "completed";
            const usageMatch = notificationText.match(/<usage>([\s\S]*?)<\/usage>/);
            const usageContent = usageMatch?.[1] ?? "";
            const totalTokensMatch = usageContent.match(/<total_tokens>(\d+)<\/total_tokens>/);
            const toolUsesMatch = usageContent.match(/<tool_uses>(\d+)<\/tool_uses>/);
            const durationMsMatch = usageContent.match(/<duration_ms>(\d+)<\/duration_ms>/);
            if (statusMatch) {
              output.enqueue({
                type: "system",
                subtype: "task_notification",
                task_id: taskIdMatch?.[1] ?? "",
                tool_use_id: toolUseIdMatch?.[1],
                status,
                output_file: outputFileMatch?.[1] ?? "",
                summary: summaryMatch?.[1] ?? "",
                usage: totalTokensMatch && toolUsesMatch ? {
                  total_tokens: parseInt(totalTokensMatch[1], 10),
                  tool_uses: parseInt(toolUsesMatch[1], 10),
                  duration_ms: durationMsMatch ? parseInt(durationMsMatch[1], 10) : 0
                } : undefined,
                session_id: getSessionId(),
                uuid: randomUUID2()
              });
            }
          }
          const input = command.value;
          const autonomyRunIds = batch.map((item) => item.autonomy?.runId).filter((runId) => Boolean(runId));
          if (structuredIO instanceof RemoteIO && command.mode === "prompt") {
            logEvent("tengu_bridge_message_received", {
              is_repl: false
            });
          }
          suggestionState.abortController?.abort();
          suggestionState.abortController = null;
          suggestionState.pendingSuggestion = null;
          suggestionState.pendingLastEmittedEntry = null;
          if (suggestionState.lastEmitted) {
            if (command.mode === "prompt") {
              const inputText = typeof input === "string" ? input : input.find((b) => b.type === "text")?.text;
              if (typeof inputText === "string") {
                logSuggestionOutcome(suggestionState.lastEmitted.text, inputText, suggestionState.lastEmitted.emittedAt, suggestionState.lastEmitted.promptId, suggestionState.lastEmitted.generationRequestId);
              }
              suggestionState.lastEmitted = null;
            }
          }
          abortController = createAbortController();
          const turnStartTime = undefined;
          headlessProfilerCheckpoint("before_ask");
          startQueryProfile();
          const cmd = command;
          for (const runId of autonomyRunIds) {
            await markAutonomyRunRunning(runId);
          }
          let lastResultIsError = false;
          try {
            await runWithWorkload(cmd.workload ?? options.workload, async () => {
              for await (const message of ask({
                commands: uniqBy_default([...currentCommands, ...appState.mcp.commands], "name"),
                prompt: input,
                promptUuid: cmd.uuid,
                isMeta: cmd.isMeta,
                cwd: cwd(),
                tools: allTools,
                verbose: options.verbose,
                mcpClients: allMcpClients,
                thinkingConfig: options.thinkingConfig,
                maxTurns: options.maxTurns,
                maxBudgetUsd: options.maxBudgetUsd,
                taskBudget: options.taskBudget,
                canUseTool,
                userSpecifiedModel: activeUserSpecifiedModel,
                fallbackModel: options.fallbackModel,
                jsonSchema: getInitJsonSchema() ?? options.jsonSchema,
                mutableMessages,
                getReadFileCache: () => pendingSeeds.size === 0 ? readFileState : mergeFileStateCaches(readFileState, pendingSeeds),
                setReadFileCache: (cache) => {
                  readFileState = cache;
                  for (const [path, seed] of pendingSeeds.entries()) {
                    const existing = readFileState.get(path);
                    if (!existing || seed.timestamp > existing.timestamp) {
                      readFileState.set(path, seed);
                    }
                  }
                  pendingSeeds.clear();
                },
                customSystemPrompt: options.systemPrompt,
                appendSystemPrompt: options.appendSystemPrompt,
                getAppState,
                setAppState,
                abortController,
                replayUserMessages: options.replayUserMessages,
                includePartialMessages: options.includePartialMessages,
                handleElicitation: (serverName, params, elicitSignal) => structuredIO.handleElicitation(serverName, params.message, undefined, elicitSignal, params.mode, params.url, "elicitationId" in params ? params.elicitationId : undefined),
                agents: currentAgents,
                orphanedPermission: cmd.orphanedPermission,
                setSDKStatus: (status) => {
                  output.enqueue({
                    type: "system",
                    subtype: "status",
                    status,
                    session_id: getSessionId(),
                    uuid: randomUUID2()
                  });
                }
              })) {
                forwardMessagesToBridge();
                if (message.type === "result") {
                  lastResultIsError = !!message.is_error;
                  for (const event of drainSdkEvents()) {
                    output.enqueue(event);
                  }
                  const currentState = getAppState();
                  if (getRunningTasks(currentState).some((t) => (t.type === "local_agent" || t.type === "local_workflow") && isBackgroundTask(t))) {
                    heldBackResult = message;
                  } else {
                    heldBackResult = null;
                    output.enqueue(message);
                  }
                } else {
                  for (const event of drainSdkEvents()) {
                    output.enqueue(event);
                  }
                  output.enqueue(message);
                }
              }
            });
            if (lastResultIsError) {
              for (const runId of autonomyRunIds) {
                await finalizeAutonomyRunFailed({
                  runId,
                  error: "ask() returned an error result"
                });
              }
            } else {
              for (const runId of autonomyRunIds) {
                const nextCommands = await finalizeAutonomyRunCompleted({
                  runId,
                  currentDir: cwd(),
                  priority: "later",
                  workload: cmd.workload ?? options.workload
                });
                for (const nextCommand of nextCommands) {
                  enqueue({
                    ...nextCommand,
                    uuid: randomUUID2()
                  });
                }
              }
            }
          } catch (error) {
            for (const runId of autonomyRunIds) {
              await finalizeAutonomyRunFailed({
                runId,
                error: String(error)
              });
            }
            throw error;
          }
          for (const uuid of batchUuids) {
            notifyCommandLifecycle(uuid, "completed");
          }
          forwardMessagesToBridge();
          bridgeHandle?.sendResult();
          if (false) {}
          if (options.promptSuggestions && !isEnvDefinedFalsy(process.env.CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION)) {
            const state = suggestionState;
            state.abortController?.abort();
            const localAbort = new AbortController;
            suggestionState.abortController = localAbort;
            const cacheSafeParams = getLastCacheSafeParams();
            if (!cacheSafeParams) {
              logSuggestionSuppressed("sdk_no_params", undefined, undefined, "sdk");
            } else {
              const ref = { promise: null };
              ref.promise = (async () => {
                try {
                  const result = await tryGenerateSuggestion(localAbort, mutableMessages, getAppState, cacheSafeParams, "sdk");
                  if (!result || localAbort.signal.aborted)
                    return;
                  const suggestionMsg = {
                    type: "prompt_suggestion",
                    suggestion: result.suggestion,
                    uuid: randomUUID2(),
                    session_id: getSessionId()
                  };
                  const lastEmittedEntry = {
                    text: result.suggestion,
                    emittedAt: Date.now(),
                    promptId: result.promptId,
                    generationRequestId: result.generationRequestId
                  };
                  if (heldBackResult) {
                    suggestionState.pendingSuggestion = suggestionMsg;
                    suggestionState.pendingLastEmittedEntry = {
                      text: lastEmittedEntry.text,
                      promptId: lastEmittedEntry.promptId,
                      generationRequestId: lastEmittedEntry.generationRequestId
                    };
                  } else {
                    suggestionState.lastEmitted = lastEmittedEntry;
                    output.enqueue(suggestionMsg);
                  }
                } catch (error) {
                  if (error instanceof Error && (error.name === "AbortError" || error.name === "APIUserAbortError")) {
                    logSuggestionSuppressed("aborted", undefined, undefined, "sdk");
                    return;
                  }
                  logError(toError(error));
                } finally {
                  if (suggestionState.inflightPromise === ref.promise) {
                    suggestionState.inflightPromise = null;
                  }
                }
              })();
              suggestionState.inflightPromise = ref.promise;
            }
          }
          logHeadlessProfilerTurn();
          logQueryProfileReport();
          headlessProfilerStartTurn();
        }
      };
      do {
        for (const event of drainSdkEvents()) {
          output.enqueue(event);
        }
        runPhase = "draining_commands";
        await drainCommandQueue();
        waitingForAgents = false;
        {
          const state = getAppState();
          const hasRunningBg = getRunningTasks(state).some((t) => isBackgroundTask(t) && t.type !== "in_process_teammate");
          const hasMainThreadQueued = peek(isMainThread) !== undefined;
          if (hasRunningBg || hasMainThreadQueued) {
            waitingForAgents = true;
            if (!hasMainThreadQueued) {
              runPhase = "waiting_for_agents";
              await sleep(100);
            }
          }
        }
      } while (waitingForAgents);
      if (heldBackResult) {
        output.enqueue(heldBackResult);
        heldBackResult = null;
        if (suggestionState.pendingSuggestion) {
          output.enqueue(suggestionState.pendingSuggestion);
          if (suggestionState.pendingLastEmittedEntry) {
            suggestionState.lastEmitted = {
              ...suggestionState.pendingLastEmittedEntry,
              emittedAt: Date.now()
            };
            suggestionState.pendingLastEmittedEntry = null;
          }
          suggestionState.pendingSuggestion = null;
        }
      }
    } catch (error) {
      try {
        await structuredIO.write({
          type: "result",
          subtype: "error_during_execution",
          duration_ms: 0,
          duration_api_ms: 0,
          is_error: true,
          num_turns: 0,
          stop_reason: null,
          session_id: getSessionId(),
          total_cost_usd: 0,
          usage: EMPTY_USAGE,
          modelUsage: {},
          permission_denials: [],
          uuid: randomUUID2(),
          errors: [
            errorMessage(error),
            ...getInMemoryErrors().map((_) => _.error)
          ]
        });
      } catch {}
      suggestionState.abortController?.abort();
      gracefulShutdownSync(1);
      return;
    } finally {
      runPhase = "finally_flush";
      await structuredIO.flushInternalEvents();
      runPhase = "finally_post_flush";
      if (!isShuttingDown()) {
        notifySessionStateChanged("idle");
        for (const event of drainSdkEvents()) {
          output.enqueue(event);
        }
      }
      running = false;
      idleTimeout.start();
    }
    if (proactiveModule?.isProactiveActive() && !proactiveModule.isProactivePaused()) {
      if (peek(isMainThread) === undefined && !inputClosed) {
        scheduleProactiveTick();
        return;
      }
    }
    if (peek(isMainThread) !== undefined) {
      run();
      return;
    }
    {
      const currentAppState = getAppState();
      const teamContext = currentAppState.teamContext;
      if (teamContext && isTeamLead(teamContext)) {
        const agentName = "team-lead";
        const POLL_INTERVAL_MS = 500;
        while (true) {
          const refreshedState = getAppState();
          const hasActiveTeammates = hasActiveInProcessTeammates(refreshedState) || refreshedState.teamContext && Object.keys(refreshedState.teamContext.teammates).length > 0;
          if (!hasActiveTeammates) {
            logForDebugging("[print.ts] No more active teammates, stopping poll");
            break;
          }
          const unread = await readUnreadMessages(agentName, refreshedState.teamContext?.teamName);
          if (unread.length > 0) {
            logForDebugging(`[print.ts] Team-lead found ${unread.length} unread messages`);
            await markMessagesAsRead(agentName, refreshedState.teamContext?.teamName);
            const teamName = refreshedState.teamContext?.teamName;
            for (const m of unread) {
              const shutdownApproval = isShutdownApproved(m.text);
              if (shutdownApproval && teamName) {
                const teammateToRemove = shutdownApproval.from;
                logForDebugging(`[print.ts] Processing shutdown_approved from ${teammateToRemove}`);
                const teammateId = refreshedState.teamContext?.teammates ? Object.entries(refreshedState.teamContext.teammates).find(([, t]) => t.name === teammateToRemove)?.[0] : undefined;
                if (teammateId) {
                  removeTeammateFromTeamFile(teamName, {
                    agentId: teammateId,
                    name: teammateToRemove
                  });
                  logForDebugging(`[print.ts] Removed ${teammateToRemove} from team file`);
                  await unassignTeammateTasks(teamName, teammateId, teammateToRemove, "shutdown");
                  setAppState((prev) => {
                    if (!prev.teamContext?.teammates)
                      return prev;
                    if (!(teammateId in prev.teamContext.teammates))
                      return prev;
                    const { [teammateId]: _, ...remainingTeammates } = prev.teamContext.teammates;
                    return {
                      ...prev,
                      teamContext: {
                        ...prev.teamContext,
                        teammates: remainingTeammates
                      }
                    };
                  });
                }
              }
            }
            const formatted = unread.map((m) => `<${TEAMMATE_MESSAGE_TAG} teammate_id="${m.from}"${m.color ? ` color="${m.color}"` : ""}>
${m.text}
</${TEAMMATE_MESSAGE_TAG}>`).join(`

`);
            enqueue({
              mode: "prompt",
              value: formatted,
              uuid: randomUUID2()
            });
            run();
            return;
          }
          if (inputClosed && !shutdownPromptInjected) {
            shutdownPromptInjected = true;
            logForDebugging("[print.ts] Input closed with active teammates, injecting shutdown prompt");
            enqueue({
              mode: "prompt",
              value: SHUTDOWN_TEAM_PROMPT,
              uuid: randomUUID2()
            });
            run();
            return;
          }
          await sleep(POLL_INTERVAL_MS);
        }
      }
    }
    if (inputClosed) {
      const hasActiveSwarm = await (async () => {
        const currentAppState = getAppState();
        if (hasWorkingInProcessTeammates(currentAppState)) {
          await waitForTeammatesToBecomeIdle(setAppState, currentAppState);
        }
        const refreshedAppState = getAppState();
        const refreshedTeamContext = refreshedAppState.teamContext;
        const hasTeamMembersNotCleanedUp = refreshedTeamContext && Object.keys(refreshedTeamContext.teammates).length > 0;
        return hasTeamMembersNotCleanedUp || hasActiveInProcessTeammates(refreshedAppState);
      })();
      if (hasActiveSwarm) {
        enqueue({
          mode: "prompt",
          value: SHUTDOWN_TEAM_PROMPT,
          uuid: randomUUID2()
        });
        run();
      } else {
        if (suggestionState.inflightPromise) {
          await Promise.race([suggestionState.inflightPromise, sleep(5000)]);
        }
        suggestionState.abortController?.abort();
        suggestionState.abortController = null;
        await finalizePendingAsyncHooks();
        unsubscribeSkillChanges();
        unsubscribeAuthStatus?.();
        statusListeners.delete(rateLimitListener);
        output.done();
      }
    }
  };
  if (false) {}
  let cronScheduler = null;
  if (cronGate.isKairosCronEnabled()) {
    cronScheduler = cronSchedulerModule.createCronScheduler({
      onFire: (prompt) => {
        if (inputClosed)
          return;
        (async () => {
          const prepared = await prepareAutonomyTurnPrompt({
            basePrompt: prompt,
            trigger: "scheduled-task",
            currentDir: cwd()
          });
          if (inputClosed)
            return;
          const command = await commitAutonomyQueuedPrompt({
            prepared,
            currentDir: cwd(),
            workload: WORKLOAD_CRON
          });
          if (inputClosed)
            return;
          enqueue({
            ...command,
            uuid: randomUUID2()
          });
          run();
        })();
      },
      onFireTask: (task) => {
        if (inputClosed)
          return;
        (async () => {
          if (task.agentId) {
            const prepared2 = await prepareAutonomyTurnPrompt({
              basePrompt: task.prompt,
              trigger: "scheduled-task",
              currentDir: cwd()
            });
            if (inputClosed)
              return;
            const command2 = await commitAutonomyQueuedPrompt({
              prepared: prepared2,
              currentDir: cwd(),
              sourceId: task.id,
              sourceLabel: task.prompt,
              workload: WORKLOAD_CRON
            });
            await markAutonomyRunFailed(command2.autonomy.runId, `No teammate runtime available for scheduled task owner ${task.agentId} in headless mode.`);
            return;
          }
          const prepared = await prepareAutonomyTurnPrompt({
            basePrompt: task.prompt,
            trigger: "scheduled-task",
            currentDir: cwd()
          });
          if (inputClosed)
            return;
          const command = await commitAutonomyQueuedPrompt({
            prepared,
            currentDir: cwd(),
            sourceId: task.id,
            sourceLabel: task.prompt,
            workload: WORKLOAD_CRON
          });
          if (inputClosed)
            return;
          enqueue({
            ...command,
            uuid: randomUUID2()
          });
          run();
        })();
      },
      isLoading: () => running || inputClosed,
      getJitterConfig: cronJitterConfigModule?.getCronJitterConfig,
      isKilled: () => !cronGate?.isKairosCronEnabled()
    });
    cronScheduler.start();
  }
  const sendControlResponseSuccess = function(message, response) {
    output.enqueue({
      type: "control_response",
      response: {
        subtype: "success",
        request_id: message.request_id,
        response
      }
    });
  };
  const sendControlResponseError = function(message, errorMessage2) {
    output.enqueue({
      type: "control_response",
      response: {
        subtype: "error",
        request_id: message.request_id,
        error: errorMessage2
      }
    });
  };
  const handledOrphanedToolUseIds = new Set;
  structuredIO.setUnexpectedResponseCallback(async (message) => {
    await handleOrphanedPermissionResponse({
      message,
      setAppState,
      handledToolUseIds: handledOrphanedToolUseIds,
      onEnqueued: () => {
        run();
      }
    });
  });
  const activeOAuthFlows = new Map;
  const oauthCallbackSubmitters = new Map;
  const oauthManualCallbackUsed = new Set;
  const oauthAuthPromises = new Map;
  let claudeOAuth = null;
  (async () => {
    let initialized = false;
    logForDiagnosticsNoPII("info", "cli_message_loop_started");
    for await (const message of structuredIO.structuredInput) {
      const eventId = "uuid" in message ? message.uuid : undefined;
      if (eventId && message.type !== "user" && message.type !== "control_response") {
        notifyCommandLifecycle(eventId, "completed");
      }
      if (message.type === "control_request") {
        const msg = message;
        const req = msg.request;
        if (msg.request.subtype === "interrupt") {
          if (true) {
            setAppState((prev) => ({
              ...prev,
              attribution: {
                ...prev.attribution,
                escapeCount: prev.attribution.escapeCount + 1
              }
            }));
          }
          if (abortController) {
            abortController.abort();
          }
          suggestionState.abortController?.abort();
          suggestionState.abortController = null;
          suggestionState.lastEmitted = null;
          suggestionState.pendingSuggestion = null;
          sendControlResponseSuccess(msg);
        } else if (req.subtype === "end_session") {
          logForDebugging(`[print.ts] end_session received, reason=${req.reason ?? "unspecified"}`);
          if (abortController) {
            abortController.abort();
          }
          suggestionState.abortController?.abort();
          suggestionState.abortController = null;
          suggestionState.lastEmitted = null;
          suggestionState.pendingSuggestion = null;
          sendControlResponseSuccess(msg);
          break;
        } else if (msg.request.subtype === "initialize") {
          if (msg.request.sdkMcpServers && msg.request.sdkMcpServers.length > 0) {
            for (const serverName of msg.request.sdkMcpServers) {
              sdkMcpConfigs[serverName] = {
                type: "sdk",
                name: serverName
              };
            }
          }
          await handleInitializeRequest(msg.request, msg.request_id, initialized, output, commands, modelInfos, structuredIO, !!options.enableAuthStatus, options, agents, getAppState);
          if (msg.request.promptSuggestions) {
            setAppState((prev) => {
              if (prev.promptSuggestionEnabled)
                return prev;
              return { ...prev, promptSuggestionEnabled: true };
            });
          }
          if (msg.request.agentProgressSummaries && getFeatureValue_CACHED_MAY_BE_STALE("tengu_slate_prism", true)) {
            setSdkAgentProgressSummariesEnabled(true);
          }
          initialized = true;
          if (hasCommandsInQueue()) {
            run();
          }
        } else if (msg.request.subtype === "set_permission_mode") {
          const m = msg.request;
          setAppState((prev) => ({
            ...prev,
            toolPermissionContext: handleSetPermissionMode(m, msg.request_id, prev.toolPermissionContext, output),
            isUltraplanMode: m.ultraplan ?? prev.isUltraplanMode
          }));
        } else if (msg.request.subtype === "set_model") {
          const requestedModel = msg.request.model ?? "default";
          const model = requestedModel === "default" ? getDefaultMainLoopModel() : requestedModel;
          activeUserSpecifiedModel = model;
          setMainLoopModelOverride(model);
          notifySessionMetadataChanged({ model });
          injectModelSwitchBreadcrumbs(requestedModel, model);
          sendControlResponseSuccess(msg);
        } else if (msg.request.subtype === "set_max_thinking_tokens") {
          if (msg.request.max_thinking_tokens === null) {
            options.thinkingConfig = undefined;
          } else if (msg.request.max_thinking_tokens === 0) {
            options.thinkingConfig = { type: "disabled" };
          } else {
            options.thinkingConfig = {
              type: "enabled",
              budgetTokens: msg.request.max_thinking_tokens
            };
          }
          sendControlResponseSuccess(msg);
        } else if (msg.request.subtype === "mcp_status") {
          sendControlResponseSuccess(msg, {
            mcpServers: buildMcpServerStatuses()
          });
        } else if (msg.request.subtype === "get_context_usage") {
          try {
            const appState = getAppState();
            const data = await collectContextData({
              messages: mutableMessages,
              getAppState,
              options: {
                mainLoopModel: getMainLoopModel(),
                tools: buildAllTools(appState),
                agentDefinitions: appState.agentDefinitions,
                customSystemPrompt: options.systemPrompt,
                appendSystemPrompt: options.appendSystemPrompt
              }
            });
            sendControlResponseSuccess(msg, { ...data });
          } catch (error) {
            sendControlResponseError(msg, errorMessage(error));
          }
        } else if (msg.request.subtype === "mcp_message") {
          const mcpRequest = msg.request;
          const sdkClient = sdkClients.find((client) => client.name === mcpRequest.server_name);
          if (sdkClient && sdkClient.type === "connected" && sdkClient.client?.transport?.onmessage) {
            sdkClient.client.transport.onmessage(mcpRequest.message);
          }
          sendControlResponseSuccess(msg);
        } else if (msg.request.subtype === "rewind_files") {
          const appState = getAppState();
          const result = await handleRewindFiles(msg.request.user_message_id, appState, setAppState, msg.request.dry_run ?? false);
          if (result.canRewind || msg.request.dry_run) {
            sendControlResponseSuccess(msg, result);
          } else {
            sendControlResponseError(msg, result.error ?? "Unexpected error");
          }
        } else if (msg.request.subtype === "cancel_async_message") {
          const targetUuid = msg.request.message_uuid;
          const removed = dequeueAllMatching((cmd) => cmd.uuid === targetUuid);
          sendControlResponseSuccess(msg, {
            cancelled: removed.length > 0
          });
        } else if (msg.request.subtype === "seed_read_state") {
          try {
            const normalizedPath = expandPath(msg.request.path);
            const diskMtime = Math.floor((await stat(normalizedPath)).mtimeMs);
            if (diskMtime <= msg.request.mtime) {
              const raw = await readFile2(normalizedPath, "utf-8");
              const content = (raw.charCodeAt(0) === 65279 ? raw.slice(1) : raw).replaceAll(`\r
`, `
`);
              pendingSeeds.set(normalizedPath, {
                content,
                timestamp: diskMtime,
                offset: undefined,
                limit: undefined
              });
            }
          } catch {}
          sendControlResponseSuccess(msg);
        } else if (msg.request.subtype === "mcp_set_servers") {
          const { response, sdkServersChanged } = await applyMcpServerChanges(msg.request.servers);
          sendControlResponseSuccess(msg, response);
          if (sdkServersChanged) {
            updateSdkMcp();
          }
        } else if (msg.request.subtype === "reload_plugins") {
          try {
            if (false) {}
            const r = await refreshActivePlugins(setAppState);
            const sdkAgents = currentAgents.filter((a) => a.source === "flagSettings");
            currentAgents = [...r.agentDefinitions.allAgents, ...sdkAgents];
            let plugins = [];
            const [cmdsR, mcpR, pluginsR] = await Promise.allSettled([
              getCommands(cwd()),
              applyPluginMcpDiff(),
              loadAllPluginsCacheOnly()
            ]);
            if (cmdsR.status === "fulfilled") {
              currentCommands = cmdsR.value;
            } else {
              logError(cmdsR.reason);
            }
            if (mcpR.status === "rejected") {
              logError(mcpR.reason);
            }
            if (pluginsR.status === "fulfilled") {
              plugins = pluginsR.value.enabled.map((p) => ({
                name: p.name,
                path: p.path,
                source: p.source
              }));
            } else {
              logError(pluginsR.reason);
            }
            sendControlResponseSuccess(msg, {
              commands: currentCommands.filter((cmd) => cmd.userInvocable !== false).map((cmd) => ({
                name: getCommandName(cmd),
                description: formatDescriptionWithSource(cmd),
                argumentHint: cmd.argumentHint || ""
              })),
              agents: currentAgents.map((a) => ({
                name: a.agentType,
                description: a.whenToUse,
                model: a.model === "inherit" ? undefined : a.model
              })),
              plugins,
              mcpServers: buildMcpServerStatuses(),
              error_count: r.error_count
            });
          } catch (error) {
            sendControlResponseError(msg, errorMessage(error));
          }
        } else if (msg.request.subtype === "mcp_reconnect") {
          const currentAppState = getAppState();
          const { serverName } = msg.request;
          elicitationRegistered.delete(serverName);
          const config = getMcpConfigByName(serverName) ?? mcpClients.find((c) => c.name === serverName)?.config ?? sdkClients.find((c) => c.name === serverName)?.config ?? dynamicMcpState.clients.find((c) => c.name === serverName)?.config ?? currentAppState.mcp.clients.find((c) => c.name === serverName)?.config ?? null;
          if (!config) {
            sendControlResponseError(msg, `Server not found: ${serverName}`);
          } else {
            const result = await reconnectMcpServerImpl(serverName, config);
            const prefix = getMcpPrefix(serverName);
            setAppState((prev) => ({
              ...prev,
              mcp: {
                ...prev.mcp,
                clients: prev.mcp.clients.map((c) => c.name === serverName ? result.client : c),
                tools: [
                  ...reject_default(prev.mcp.tools, (t) => t.name?.startsWith(prefix)),
                  ...result.tools
                ],
                commands: [
                  ...reject_default(prev.mcp.commands, (c) => commandBelongsToServer(c, serverName)),
                  ...result.commands
                ],
                resources: result.resources && result.resources.length > 0 ? { ...prev.mcp.resources, [serverName]: result.resources } : omit_default(prev.mcp.resources, serverName)
              }
            }));
            dynamicMcpState = {
              ...dynamicMcpState,
              clients: [
                ...dynamicMcpState.clients.filter((c) => c.name !== serverName),
                result.client
              ],
              tools: [
                ...dynamicMcpState.tools.filter((t) => !t.name?.startsWith(prefix)),
                ...result.tools
              ]
            };
            if (result.client.type === "connected") {
              registerElicitationHandlers([result.client]);
              reregisterChannelHandlerAfterReconnect(result.client);
              sendControlResponseSuccess(msg);
            } else {
              const errorMessage2 = result.client.type === "failed" ? result.client.error ?? "Connection failed" : `Server status: ${result.client.type}`;
              sendControlResponseError(msg, errorMessage2);
            }
          }
        } else if (msg.request.subtype === "mcp_toggle") {
          const currentAppState = getAppState();
          const { serverName, enabled } = msg.request;
          elicitationRegistered.delete(serverName);
          const config = getMcpConfigByName(serverName) ?? mcpClients.find((c) => c.name === serverName)?.config ?? sdkClients.find((c) => c.name === serverName)?.config ?? dynamicMcpState.clients.find((c) => c.name === serverName)?.config ?? currentAppState.mcp.clients.find((c) => c.name === serverName)?.config ?? null;
          if (!config) {
            sendControlResponseError(msg, `Server not found: ${serverName}`);
          } else if (!enabled) {
            setMcpServerEnabled(serverName, false);
            const client = [
              ...mcpClients,
              ...sdkClients,
              ...dynamicMcpState.clients,
              ...currentAppState.mcp.clients
            ].find((c) => c.name === serverName);
            if (client && client.type === "connected") {
              await clearServerCache(serverName, config);
            }
            const prefix = getMcpPrefix(serverName);
            setAppState((prev) => ({
              ...prev,
              mcp: {
                ...prev.mcp,
                clients: prev.mcp.clients.map((c) => c.name === serverName ? { name: serverName, type: "disabled", config } : c),
                tools: reject_default(prev.mcp.tools, (t) => t.name?.startsWith(prefix)),
                commands: reject_default(prev.mcp.commands, (c) => commandBelongsToServer(c, serverName)),
                resources: omit_default(prev.mcp.resources, serverName)
              }
            }));
            sendControlResponseSuccess(msg);
          } else {
            setMcpServerEnabled(serverName, true);
            const result = await reconnectMcpServerImpl(serverName, config);
            const prefix = getMcpPrefix(serverName);
            setAppState((prev) => ({
              ...prev,
              mcp: {
                ...prev.mcp,
                clients: prev.mcp.clients.map((c) => c.name === serverName ? result.client : c),
                tools: [
                  ...reject_default(prev.mcp.tools, (t) => t.name?.startsWith(prefix)),
                  ...result.tools
                ],
                commands: [
                  ...reject_default(prev.mcp.commands, (c) => commandBelongsToServer(c, serverName)),
                  ...result.commands
                ],
                resources: result.resources && result.resources.length > 0 ? { ...prev.mcp.resources, [serverName]: result.resources } : omit_default(prev.mcp.resources, serverName)
              }
            }));
            if (result.client.type === "connected") {
              registerElicitationHandlers([result.client]);
              reregisterChannelHandlerAfterReconnect(result.client);
              sendControlResponseSuccess(msg);
            } else {
              const errorMessage2 = result.client.type === "failed" ? result.client.error ?? "Connection failed" : `Server status: ${result.client.type}`;
              sendControlResponseError(msg, errorMessage2);
            }
          }
        } else if (req.subtype === "channel_enable") {
          const currentAppState = getAppState();
          handleChannelEnable(msg.request_id, req.serverName, [
            ...currentAppState.mcp.clients,
            ...sdkClients,
            ...dynamicMcpState.clients
          ], output);
        } else if (req.subtype === "mcp_authenticate") {
          const serverName = req.serverName;
          const currentAppState = getAppState();
          const config = getMcpConfigByName(serverName) ?? mcpClients.find((c) => c.name === serverName)?.config ?? currentAppState.mcp.clients.find((c) => c.name === serverName)?.config ?? null;
          if (!config) {
            sendControlResponseError(msg, `Server not found: ${serverName}`);
          } else if (config.type !== "sse" && config.type !== "http") {
            sendControlResponseError(msg, `Server type "${config.type}" does not support OAuth authentication`);
          } else {
            try {
              activeOAuthFlows.get(serverName)?.abort();
              const controller = new AbortController;
              activeOAuthFlows.set(serverName, controller);
              let resolveAuthUrl;
              const authUrlPromise = new Promise((resolve) => {
                resolveAuthUrl = resolve;
              });
              const oauthPromise = performMCPOAuthFlow(serverName, config, (url) => resolveAuthUrl(url), controller.signal, {
                skipBrowserOpen: true,
                onWaitingForCallback: (submit) => {
                  oauthCallbackSubmitters.set(serverName, submit);
                }
              });
              const authUrl = await Promise.race([
                authUrlPromise,
                oauthPromise.then(() => null)
              ]);
              if (authUrl) {
                sendControlResponseSuccess(msg, {
                  authUrl,
                  requiresUserAction: true
                });
              } else {
                sendControlResponseSuccess(msg, {
                  requiresUserAction: false
                });
              }
              oauthAuthPromises.set(serverName, oauthPromise);
              const fullFlowPromise = oauthPromise.then(async () => {
                if (isMcpServerDisabled(serverName)) {
                  return;
                }
                if (oauthManualCallbackUsed.has(serverName)) {
                  return;
                }
                const result = await reconnectMcpServerImpl(serverName, config);
                const prefix = getMcpPrefix(serverName);
                setAppState((prev) => ({
                  ...prev,
                  mcp: {
                    ...prev.mcp,
                    clients: prev.mcp.clients.map((c) => c.name === serverName ? result.client : c),
                    tools: [
                      ...reject_default(prev.mcp.tools, (t) => t.name?.startsWith(prefix)),
                      ...result.tools
                    ],
                    commands: [
                      ...reject_default(prev.mcp.commands, (c) => commandBelongsToServer(c, serverName)),
                      ...result.commands
                    ],
                    resources: result.resources && result.resources.length > 0 ? {
                      ...prev.mcp.resources,
                      [serverName]: result.resources
                    } : omit_default(prev.mcp.resources, serverName)
                  }
                }));
                dynamicMcpState = {
                  ...dynamicMcpState,
                  clients: [
                    ...dynamicMcpState.clients.filter((c) => c.name !== serverName),
                    result.client
                  ],
                  tools: [
                    ...dynamicMcpState.tools.filter((t) => !t.name?.startsWith(prefix)),
                    ...result.tools
                  ]
                };
              }).catch((error) => {
                logForDebugging(`MCP OAuth failed for ${serverName}: ${error}`, { level: "error" });
              }).finally(() => {
                if (activeOAuthFlows.get(serverName) === controller) {
                  activeOAuthFlows.delete(serverName);
                  oauthCallbackSubmitters.delete(serverName);
                  oauthManualCallbackUsed.delete(serverName);
                  oauthAuthPromises.delete(serverName);
                }
              });
            } catch (error) {
              sendControlResponseError(msg, errorMessage(error));
            }
          }
        } else if (req.subtype === "mcp_oauth_callback_url") {
          const serverName = req.serverName;
          const callbackUrl = req.callbackUrl;
          const submit = oauthCallbackSubmitters.get(serverName);
          if (submit) {
            let hasCodeOrError = false;
            try {
              const parsed = new URL(callbackUrl);
              hasCodeOrError = parsed.searchParams.has("code") || parsed.searchParams.has("error");
            } catch {}
            if (!hasCodeOrError) {
              sendControlResponseError(msg, "Invalid callback URL: missing authorization code. Please paste the full redirect URL including the code parameter.");
            } else {
              oauthManualCallbackUsed.add(serverName);
              submit(callbackUrl);
              const authPromise = oauthAuthPromises.get(serverName);
              if (authPromise) {
                try {
                  await authPromise;
                  sendControlResponseSuccess(msg);
                } catch (error) {
                  sendControlResponseError(msg, error instanceof Error ? error.message : "OAuth authentication failed");
                }
              } else {
                sendControlResponseSuccess(msg);
              }
            }
          } else {
            sendControlResponseError(msg, `No active OAuth flow for server: ${serverName}`);
          }
        } else if (req.subtype === "claude_authenticate") {
          const loginWithClaudeAi = req.loginWithClaudeAi;
          claudeOAuth?.service.cleanup();
          logEvent("tengu_oauth_flow_start", {
            loginWithClaudeAi: loginWithClaudeAi ?? true
          });
          const service = new OAuthService;
          let urlResolver;
          const urlPromise = new Promise((resolve) => {
            urlResolver = resolve;
          });
          const flow = service.startOAuthFlow(async (manualUrl, automaticUrl) => {
            urlResolver({ manualUrl, automaticUrl });
          }, {
            loginWithClaudeAi: loginWithClaudeAi ?? true,
            skipBrowserOpen: true
          }).then(async (tokens) => {
            await installOAuthTokens(tokens);
            logEvent("tengu_oauth_success", {
              loginWithClaudeAi: loginWithClaudeAi ?? true
            });
          }).finally(() => {
            service.cleanup();
            if (claudeOAuth?.service === service) {
              claudeOAuth = null;
            }
          });
          claudeOAuth = { service, flow };
          flow.catch((err) => logForDebugging(`claude_authenticate flow ended: ${err}`, {
            level: "info"
          }));
          try {
            const { manualUrl, automaticUrl } = await Promise.race([
              urlPromise,
              flow.then(() => {
                throw new Error("OAuth flow completed without producing auth URLs");
              })
            ]);
            sendControlResponseSuccess(msg, {
              manualUrl,
              automaticUrl
            });
          } catch (error) {
            sendControlResponseError(msg, errorMessage(error));
          }
        } else if (req.subtype === "claude_oauth_callback" || req.subtype === "claude_oauth_wait_for_completion") {
          if (!claudeOAuth) {
            sendControlResponseError(msg, "No active claude_authenticate flow");
          } else {
            if (req.subtype === "claude_oauth_callback") {
              claudeOAuth.service.handleManualAuthCodeInput({
                authorizationCode: req.authorizationCode,
                state: req.state
              });
            }
            const { flow } = claudeOAuth;
            flow.then(() => {
              const accountInfo = getAccountInformation();
              sendControlResponseSuccess(msg, {
                account: {
                  email: accountInfo?.email,
                  organization: accountInfo?.organization,
                  subscriptionType: accountInfo?.subscription,
                  tokenSource: accountInfo?.tokenSource,
                  apiKeySource: accountInfo?.apiKeySource,
                  apiProvider: getAPIProvider()
                }
              });
            }, (error) => sendControlResponseError(msg, errorMessage(error)));
          }
        } else if (req.subtype === "mcp_clear_auth") {
          const serverName = req.serverName;
          const currentAppState = getAppState();
          const config = getMcpConfigByName(serverName) ?? mcpClients.find((c) => c.name === serverName)?.config ?? currentAppState.mcp.clients.find((c) => c.name === serverName)?.config ?? null;
          if (!config) {
            sendControlResponseError(msg, `Server not found: ${serverName}`);
          } else if (config.type !== "sse" && config.type !== "http") {
            sendControlResponseError(msg, `Cannot clear auth for server type "${config.type}"`);
          } else {
            await revokeServerTokens(serverName, config);
            const result = await reconnectMcpServerImpl(serverName, config);
            const prefix = getMcpPrefix(serverName);
            setAppState((prev) => ({
              ...prev,
              mcp: {
                ...prev.mcp,
                clients: prev.mcp.clients.map((c) => c.name === serverName ? result.client : c),
                tools: [
                  ...reject_default(prev.mcp.tools, (t) => t.name?.startsWith(prefix)),
                  ...result.tools
                ],
                commands: [
                  ...reject_default(prev.mcp.commands, (c) => commandBelongsToServer(c, serverName)),
                  ...result.commands
                ],
                resources: result.resources && result.resources.length > 0 ? {
                  ...prev.mcp.resources,
                  [serverName]: result.resources
                } : omit_default(prev.mcp.resources, serverName)
              }
            }));
            sendControlResponseSuccess(msg, {});
          }
        } else if (msg.request.subtype === "apply_flag_settings") {
          const prevModel = getMainLoopModel();
          const existing = getFlagSettingsInline() ?? {};
          const incoming = msg.request.settings;
          const merged = { ...existing, ...incoming };
          for (const key of Object.keys(merged)) {
            if (merged[key] === null) {
              delete merged[key];
            }
          }
          setFlagSettingsInline(merged);
          settingsChangeDetector.notifyChange("flagSettings");
          if ("model" in incoming) {
            if (incoming.model != null) {
              setMainLoopModelOverride(String(incoming.model));
            } else {
              setMainLoopModelOverride(undefined);
            }
          }
          const newModel = getMainLoopModel();
          if (newModel !== prevModel) {
            activeUserSpecifiedModel = newModel;
            const modelArg = incoming.model ? String(incoming.model) : "default";
            notifySessionMetadataChanged({ model: newModel });
            injectModelSwitchBreadcrumbs(modelArg, newModel);
          }
          sendControlResponseSuccess(msg);
        } else if (msg.request.subtype === "get_settings") {
          const currentAppState = getAppState();
          const model = getMainLoopModel();
          const effort = modelSupportsEffort(model) ? resolveAppliedEffort(model, currentAppState.effortValue) : undefined;
          sendControlResponseSuccess(msg, {
            ...getSettingsWithSources(),
            applied: {
              model,
              effort: typeof effort === "string" ? effort : null
            }
          });
        } else if (msg.request.subtype === "stop_task") {
          const { task_id: taskId } = msg.request;
          try {
            await stopTask(taskId, {
              getAppState,
              setAppState
            });
            sendControlResponseSuccess(msg, {});
          } catch (error) {
            sendControlResponseError(msg, errorMessage(error));
          }
        } else if (req.subtype === "generate_session_title") {
          const description = req.description;
          const persist = req.persist;
          const titleSignal = (abortController && !abortController.signal.aborted ? abortController : createAbortController()).signal;
          (async () => {
            try {
              const title = await generateSessionTitle(description, titleSignal);
              if (title && persist) {
                try {
                  saveAiGeneratedTitle(getSessionId(), title);
                } catch (e) {
                  logError(e);
                }
              }
              sendControlResponseSuccess(msg, { title });
            } catch (e) {
              sendControlResponseError(msg, errorMessage(e));
            }
          })();
        } else if (req.subtype === "side_question") {
          const question = req.question;
          (async () => {
            try {
              const saved = getLastCacheSafeParams();
              const cacheSafeParams = saved ? {
                ...saved,
                toolUseContext: {
                  ...saved.toolUseContext,
                  abortController: createAbortController()
                }
              } : await buildSideQuestionFallbackParams({
                tools: buildAllTools(getAppState()),
                commands: currentCommands,
                mcpClients: [
                  ...getAppState().mcp.clients,
                  ...sdkClients,
                  ...dynamicMcpState.clients
                ],
                messages: mutableMessages,
                readFileState,
                getAppState,
                setAppState,
                customSystemPrompt: options.systemPrompt,
                appendSystemPrompt: options.appendSystemPrompt,
                thinkingConfig: options.thinkingConfig,
                agents: currentAgents
              });
              const result = await runSideQuestion({
                question,
                cacheSafeParams
              });
              sendControlResponseSuccess(msg, { response: result.response });
            } catch (e) {
              sendControlResponseError(msg, errorMessage(e));
            }
          })();
        } else if (msg.request.subtype === "set_proactive") {
          const req2 = msg.request;
          if (req2.enabled) {
            if (!proactiveModule.isProactiveActive()) {
              proactiveModule.activateProactive("command");
              scheduleProactiveTick();
            }
          } else {
            proactiveModule.deactivateProactive();
          }
          sendControlResponseSuccess(msg);
        } else if (req.subtype === "remote_control") {
          if (req.enabled) {
            if (bridgeHandle) {
              sendControlResponseSuccess(msg, {
                session_url: getRemoteSessionUrl(bridgeHandle.bridgeSessionId, bridgeHandle.sessionIngressUrl),
                connect_url: buildBridgeConnectUrl(bridgeHandle.environmentId, bridgeHandle.sessionIngressUrl),
                environment_id: bridgeHandle.environmentId
              });
            } else {
              let bridgeFailureDetail;
              try {
                const { initReplBridge } = await import("./chunk-2wdez232.js");
                const handle = await initReplBridge({
                  onInboundMessage(msg2) {
                    const fields = extractInboundMessageFields(msg2);
                    if (!fields)
                      return;
                    const { content, uuid } = fields;
                    enqueue({
                      value: content,
                      mode: "prompt",
                      uuid,
                      skipSlashCommands: true
                    });
                    run();
                  },
                  onPermissionResponse(response) {
                    structuredIO.injectControlResponse(response);
                  },
                  onInterrupt() {
                    abortController?.abort();
                  },
                  onSetModel(model) {
                    const resolved = model === "default" ? getDefaultMainLoopModel() : model;
                    activeUserSpecifiedModel = resolved;
                    setMainLoopModelOverride(resolved);
                  },
                  onSetMaxThinkingTokens(maxTokens) {
                    if (maxTokens === null) {
                      options.thinkingConfig = undefined;
                    } else if (maxTokens === 0) {
                      options.thinkingConfig = { type: "disabled" };
                    } else {
                      options.thinkingConfig = {
                        type: "enabled",
                        budgetTokens: maxTokens
                      };
                    }
                  },
                  onStateChange(state, detail) {
                    if (state === "failed") {
                      bridgeFailureDetail = detail;
                    }
                    logForDebugging(`[bridge:sdk] State change: ${state}${detail ? ` \u2014 ${detail}` : ""}`);
                    output.enqueue({
                      type: "system",
                      subtype: "bridge_state",
                      state,
                      detail,
                      uuid: randomUUID2(),
                      session_id: getSessionId()
                    });
                  },
                  initialMessages: mutableMessages.length > 0 ? mutableMessages : undefined
                });
                if (!handle) {
                  sendControlResponseError(msg, bridgeFailureDetail ?? "Remote Control initialization failed");
                } else {
                  bridgeHandle = handle;
                  bridgeLastForwardedIndex = mutableMessages.length;
                  structuredIO.setOnControlRequestSent((request) => {
                    handle.sendControlRequest(request);
                  });
                  structuredIO.setOnControlRequestResolved((requestId) => {
                    handle.sendControlCancelRequest(requestId);
                  });
                  sendControlResponseSuccess(msg, {
                    session_url: getRemoteSessionUrl(handle.bridgeSessionId, handle.sessionIngressUrl),
                    connect_url: buildBridgeConnectUrl(handle.environmentId, handle.sessionIngressUrl),
                    environment_id: handle.environmentId
                  });
                }
              } catch (err) {
                sendControlResponseError(msg, errorMessage(err));
              }
            }
          } else {
            if (bridgeHandle) {
              structuredIO.setOnControlRequestSent(undefined);
              structuredIO.setOnControlRequestResolved(undefined);
              await bridgeHandle.teardown();
              bridgeHandle = null;
            }
            sendControlResponseSuccess(msg);
          }
        } else {
          sendControlResponseError(msg, `Unsupported control request subtype: ${msg.request.subtype}`);
        }
        continue;
      } else if (message.type === "control_response") {
        if (options.replayUserMessages) {
          output.enqueue(message);
        }
        continue;
      } else if (message.type === "keep_alive") {
        continue;
      } else if (message.type === "update_environment_variables") {
        continue;
      } else if (message.type === "assistant" || message.type === "system") {
        const internalMsgs = toInternalMessages([message]);
        mutableMessages.push(...internalMsgs);
        if (message.type === "assistant" && options.replayUserMessages) {
          output.enqueue(message);
        }
        continue;
      }
      if (message.type !== "user") {
        continue;
      }
      const userMsg = message;
      initialized = true;
      if (userMsg.uuid) {
        const sessionId = getSessionId();
        const existsInSession = await doesMessageExistInSession(sessionId, userMsg.uuid);
        if (existsInSession || receivedMessageUuids.has(userMsg.uuid)) {
          logForDebugging(`Skipping duplicate user message: ${userMsg.uuid}`);
          if (options.replayUserMessages) {
            logForDebugging(`Sending acknowledgment for duplicate user message: ${userMsg.uuid}`);
            output.enqueue({
              type: "user",
              content: userMsg.message?.content ?? "",
              message: userMsg.message,
              session_id: sessionId,
              parent_tool_use_id: null,
              uuid: userMsg.uuid,
              timestamp: userMsg.timestamp,
              isReplay: true
            });
          }
          if (existsInSession) {
            notifyCommandLifecycle(userMsg.uuid, "completed");
          }
          continue;
        }
        trackReceivedMessageUuid(userMsg.uuid);
      }
      enqueue({
        mode: "prompt",
        value: await resolveAndPrepend(userMsg, userMsg.message.content),
        uuid: userMsg.uuid,
        priority: userMsg.priority
      });
      if (true) {
        setAppState((prev) => ({
          ...prev,
          attribution: incrementPromptCount(prev.attribution, (snapshot) => {
            recordAttributionSnapshot(snapshot).catch((error) => {
              logForDebugging(`Attribution: Failed to save snapshot: ${error}`);
            });
          })
        }));
      }
      run();
    }
    inputClosed = true;
    cronScheduler?.stop();
    if (!running) {
      if (suggestionState.inflightPromise) {
        await Promise.race([suggestionState.inflightPromise, sleep(5000)]);
      }
      suggestionState.abortController?.abort();
      suggestionState.abortController = null;
      await finalizePendingAsyncHooks();
      unsubscribeSkillChanges();
      unsubscribeAuthStatus?.();
      statusListeners.delete(rateLimitListener);
      output.done();
    }
  })();
  return output;
}
function createCanUseToolWithPermissionPrompt(permissionPromptTool) {
  const canUseTool = async (tool, input, toolUseContext, assistantMessage, toolUseId, forceDecision) => {
    const mainPermissionResult = forceDecision ?? await hasPermissionsToUseTool(tool, input, toolUseContext, assistantMessage, toolUseId);
    if (mainPermissionResult.behavior === "allow" || mainPermissionResult.behavior === "deny") {
      return mainPermissionResult;
    }
    const { signal: combinedSignal, cleanup: cleanupAbortListener } = createCombinedAbortSignal(toolUseContext.abortController.signal);
    if (combinedSignal.aborted) {
      cleanupAbortListener();
      return {
        behavior: "deny",
        message: "Permission prompt was aborted.",
        decisionReason: {
          type: "permissionPromptTool",
          permissionPromptToolName: tool.name,
          toolResult: undefined
        }
      };
    }
    const abortPromise = new Promise((resolve) => {
      combinedSignal.addEventListener("abort", () => resolve("aborted"), {
        once: true
      });
    });
    const toolCallPromise = permissionPromptTool.call({
      tool_name: tool.name,
      input,
      tool_use_id: toolUseId
    }, toolUseContext, canUseTool, assistantMessage);
    const raceResult = await Promise.race([toolCallPromise, abortPromise]);
    cleanupAbortListener();
    if (raceResult === "aborted" || combinedSignal.aborted) {
      return {
        behavior: "deny",
        message: "Permission prompt was aborted.",
        decisionReason: {
          type: "permissionPromptTool",
          permissionPromptToolName: tool.name,
          toolResult: undefined
        }
      };
    }
    const result = raceResult;
    const permissionToolResultBlockParam = permissionPromptTool.mapToolResultToToolResultBlockParam(result.data, "1");
    if (!permissionToolResultBlockParam.content || !Array.isArray(permissionToolResultBlockParam.content) || !permissionToolResultBlockParam.content[0] || permissionToolResultBlockParam.content[0].type !== "text" || typeof permissionToolResultBlockParam.content[0].text !== "string") {
      throw new Error('Permission prompt tool returned an invalid result. Expected a single text block param with type="text" and a string text value.');
    }
    return permissionPromptToolResultToPermissionDecision(outputSchema().parse(safeParseJSON(permissionToolResultBlockParam.content[0].text)), permissionPromptTool, input, toolUseContext);
  };
  return canUseTool;
}
function getCanUseToolFn(permissionPromptToolName, structuredIO, getMcpTools, onPermissionPrompt) {
  if (permissionPromptToolName === "stdio") {
    return structuredIO.createCanUseTool(onPermissionPrompt);
  }
  if (!permissionPromptToolName) {
    return async (tool, input, toolUseContext, assistantMessage, toolUseId, forceDecision) => forceDecision ?? await hasPermissionsToUseTool(tool, input, toolUseContext, assistantMessage, toolUseId);
  }
  let resolved = null;
  return async (tool, input, toolUseContext, assistantMessage, toolUseId, forceDecision) => {
    if (!resolved) {
      const mcpTools = getMcpTools();
      const permissionPromptTool = mcpTools.find((t) => toolMatchesName(t, permissionPromptToolName));
      if (!permissionPromptTool) {
        const error = `Error: MCP tool ${permissionPromptToolName} (passed via --permission-prompt-tool) not found. Available MCP tools: ${mcpTools.map((t) => t.name).join(", ") || "none"}`;
        process.stderr.write(`${error}
`);
        gracefulShutdownSync(1);
        throw new Error(error);
      }
      if (!permissionPromptTool.inputJSONSchema) {
        const error = `Error: tool ${permissionPromptToolName} (passed via --permission-prompt-tool) must be an MCP tool`;
        process.stderr.write(`${error}
`);
        gracefulShutdownSync(1);
        throw new Error(error);
      }
      resolved = createCanUseToolWithPermissionPrompt(permissionPromptTool);
    }
    return resolved(tool, input, toolUseContext, assistantMessage, toolUseId, forceDecision);
  };
}
async function handleInitializeRequest(request, requestId, initialized, output, commands, modelInfos, structuredIO, enableAuthStatus, options, agents, getAppState) {
  if (initialized) {
    output.enqueue({
      type: "control_response",
      response: {
        subtype: "error",
        error: "Already initialized",
        request_id: requestId,
        pending_permission_requests: structuredIO.getPendingPermissionRequests()
      }
    });
    return;
  }
  if (request.systemPrompt !== undefined) {
    options.systemPrompt = request.systemPrompt;
  }
  if (request.appendSystemPrompt !== undefined) {
    options.appendSystemPrompt = request.appendSystemPrompt;
  }
  if (request.promptSuggestions !== undefined) {
    options.promptSuggestions = request.promptSuggestions;
  }
  if (request.agents) {
    const stdinAgents = parseAgentsFromJson(request.agents, "flagSettings");
    agents.push(...stdinAgents);
  }
  if (options.agent) {
    const alreadyResolved = getMainThreadAgentType() === options.agent;
    const mainThreadAgent = agents.find((a) => a.agentType === options.agent);
    if (mainThreadAgent && !alreadyResolved) {
      setMainThreadAgentType(mainThreadAgent.agentType);
      if (!options.systemPrompt && !isBuiltInAgent(mainThreadAgent)) {
        const agentSystemPrompt = mainThreadAgent.getSystemPrompt();
        if (agentSystemPrompt) {
          options.systemPrompt = agentSystemPrompt;
        }
      }
      if (!options.userSpecifiedModel && mainThreadAgent.model && mainThreadAgent.model !== "inherit") {
        const agentModel = parseUserSpecifiedModel(mainThreadAgent.model);
        setMainLoopModelOverride(agentModel);
      }
      if (mainThreadAgent.initialPrompt) {
        structuredIO.prependUserMessage(mainThreadAgent.initialPrompt);
      }
    } else if (mainThreadAgent?.initialPrompt) {
      structuredIO.prependUserMessage(mainThreadAgent.initialPrompt);
    }
  }
  const settings = getSettings_DEPRECATED();
  const outputStyle = settings?.outputStyle || DEFAULT_OUTPUT_STYLE_NAME;
  const availableOutputStyles = await getAllOutputStyles(getCwd());
  const accountInfo = getAccountInformation();
  if (request.hooks) {
    const hooks = {};
    for (const [event, matchers] of Object.entries(request.hooks)) {
      hooks[event] = matchers.map((matcher) => {
        const callbacks = matcher.hookCallbackIds.map((callbackId) => {
          return structuredIO.createHookCallback(callbackId, matcher.timeout);
        });
        return {
          matcher: matcher.matcher,
          hooks: callbacks
        };
      });
    }
    registerHookCallbacks(hooks);
  }
  if (request.jsonSchema) {
    setInitJsonSchema(request.jsonSchema);
  }
  const initResponse = {
    commands: commands.filter((cmd) => cmd.userInvocable !== false).map((cmd) => ({
      name: getCommandName(cmd),
      description: formatDescriptionWithSource(cmd),
      argumentHint: cmd.argumentHint || ""
    })),
    agents: agents.map((agent) => ({
      name: agent.agentType,
      description: agent.whenToUse,
      model: agent.model === "inherit" ? undefined : agent.model
    })),
    output_style: outputStyle,
    available_output_styles: Object.keys(availableOutputStyles),
    models: modelInfos,
    account: {
      email: accountInfo?.email,
      organization: accountInfo?.organization,
      subscriptionType: accountInfo?.subscription,
      tokenSource: accountInfo?.tokenSource,
      apiKeySource: accountInfo?.apiKeySource,
      apiProvider: getAPIProvider()
    },
    pid: process.pid
  };
  if (isFastModeEnabled() && isFastModeAvailable()) {
    const appState = getAppState();
    initResponse.fast_mode_state = getFastModeState(options.userSpecifiedModel ?? null, appState.fastMode);
  }
  output.enqueue({
    type: "control_response",
    response: {
      subtype: "success",
      request_id: requestId,
      response: initResponse
    }
  });
  if (enableAuthStatus) {
    const authStatusManager = AwsAuthStatusManager.getInstance();
    const status = authStatusManager.getStatus();
    if (status) {
      output.enqueue({
        type: "auth_status",
        isAuthenticating: status.isAuthenticating,
        output: status.output,
        error: status.error,
        uuid: randomUUID2(),
        session_id: getSessionId()
      });
    }
  }
}
async function handleRewindFiles(userMessageId, appState, setAppState, dryRun) {
  if (!fileHistoryEnabled()) {
    return {
      canRewind: false,
      error: "File rewinding is not enabled.",
      filesChanged: []
    };
  }
  if (!fileHistoryCanRestore(appState.fileHistory, userMessageId)) {
    return {
      canRewind: false,
      error: "No file checkpoint found for this message.",
      filesChanged: []
    };
  }
  if (dryRun) {
    const diffStats = await fileHistoryGetDiffStats(appState.fileHistory, userMessageId);
    return {
      canRewind: true,
      filesChanged: diffStats?.filesChanged ?? [],
      insertions: diffStats?.insertions,
      deletions: diffStats?.deletions
    };
  }
  try {
    await fileHistoryRewind((updater) => setAppState((prev) => ({
      ...prev,
      fileHistory: updater(prev.fileHistory)
    })), userMessageId);
  } catch (error) {
    return {
      canRewind: false,
      error: `Failed to rewind: ${errorMessage(error)}`,
      filesChanged: []
    };
  }
  return { canRewind: true, filesChanged: [] };
}
function handleSetPermissionMode(request, requestId, toolPermissionContext, output) {
  if (request.mode === "bypassPermissions") {
    if (isBypassPermissionsModeDisabled()) {
      output.enqueue({
        type: "control_response",
        response: {
          subtype: "error",
          request_id: requestId,
          error: "Cannot set permission mode to bypassPermissions because it is disabled by settings or configuration"
        }
      });
      return toolPermissionContext;
    }
    if (!toolPermissionContext.isBypassPermissionsModeAvailable) {
      output.enqueue({
        type: "control_response",
        response: {
          subtype: "error",
          request_id: requestId,
          error: "Cannot set permission mode to bypassPermissions because the session was not launched with --dangerously-skip-permissions"
        }
      });
      return toolPermissionContext;
    }
  }
  if (request.mode === "auto" && !isAutoModeGateEnabled()) {
    const reason = getAutoModeUnavailableReason();
    output.enqueue({
      type: "control_response",
      response: {
        subtype: "error",
        request_id: requestId,
        error: reason ? `Cannot set permission mode to auto: ${getAutoModeUnavailableNotification(reason)}` : "Cannot set permission mode to auto"
      }
    });
    return toolPermissionContext;
  }
  output.enqueue({
    type: "control_response",
    response: {
      subtype: "success",
      request_id: requestId,
      response: {
        mode: request.mode
      }
    }
  });
  return {
    ...transitionPermissionMode(toolPermissionContext.mode, request.mode, toolPermissionContext),
    mode: request.mode
  };
}
function handleChannelEnable(requestId, serverName, connectionPool, output) {
  const respondError = (error) => output.enqueue({
    type: "control_response",
    response: { subtype: "error", request_id: requestId, error }
  });
  if (false) {}
  const connection = connectionPool.find((c) => c.name === serverName && c.type === "connected");
  if (!connection || connection.type !== "connected") {
    return respondError(`server ${serverName} is not connected`);
  }
  const pluginSource = connection.config.pluginSource;
  const parsed = pluginSource ? parsePluginIdentifier(pluginSource) : undefined;
  if (!parsed?.marketplace) {
    return respondError(`server ${serverName} is not plugin-sourced; channel_enable requires a marketplace plugin`);
  }
  const entry = {
    kind: "plugin",
    name: parsed.name,
    marketplace: parsed.marketplace
  };
  const prior = getAllowedChannels();
  const already = prior.some((e) => e.kind === "plugin" && e.name === entry.name && e.marketplace === entry.marketplace);
  if (!already)
    setAllowedChannels([...prior, entry]);
  const gate = gateChannelServer(serverName, connection.capabilities, pluginSource);
  if (gate.action === "skip") {
    if (!already)
      setAllowedChannels(prior);
    return respondError(gate.reason);
  }
  const pluginId = `${entry.name}@${entry.marketplace}`;
  logMCPDebug(serverName, "Channel notifications registered");
  logEvent("tengu_mcp_channel_enable", { plugin: pluginId });
  connection.client.setNotificationHandler(ChannelMessageNotificationSchema(), async (notification) => {
    const { content, meta } = notification.params;
    logMCPDebug(serverName, `notifications/claude/channel: ${content.slice(0, 80)}`);
    logEvent("tengu_mcp_channel_message", {
      content_length: content.length,
      meta_key_count: Object.keys(meta ?? {}).length,
      entry_kind: "plugin",
      is_dev: false,
      plugin: pluginId
    });
    enqueue({
      mode: "prompt",
      value: wrapChannelMessage(serverName, content, meta),
      priority: "next",
      isMeta: true,
      origin: { kind: "channel", server: serverName },
      skipSlashCommands: true
    });
  });
  output.enqueue({
    type: "control_response",
    response: {
      subtype: "success",
      request_id: requestId,
      response: undefined
    }
  });
}
function reregisterChannelHandlerAfterReconnect(connection) {
  if (connection.type !== "connected")
    return;
  const gate = gateChannelServer(connection.name, connection.capabilities, connection.config.pluginSource);
  if (gate.action !== "register")
    return;
  const entry = findChannelEntry(connection.name, getAllowedChannels());
  const pluginId = entry?.kind === "plugin" ? `${entry.name}@${entry.marketplace}` : undefined;
  logMCPDebug(connection.name, "Channel notifications re-registered after reconnect");
  connection.client.setNotificationHandler(ChannelMessageNotificationSchema(), async (notification) => {
    const { content, meta } = notification.params;
    logMCPDebug(connection.name, `notifications/claude/channel: ${content.slice(0, 80)}`);
    logEvent("tengu_mcp_channel_message", {
      content_length: content.length,
      meta_key_count: Object.keys(meta ?? {}).length,
      entry_kind: entry?.kind,
      is_dev: entry?.dev ?? false,
      plugin: pluginId
    });
    enqueue({
      mode: "prompt",
      value: wrapChannelMessage(connection.name, content, meta),
      priority: "next",
      isMeta: true,
      origin: {
        kind: "channel",
        server: connection.name
      },
      skipSlashCommands: true
    });
  });
}
function emitLoadError(message, outputFormat) {
  if (outputFormat === "stream-json") {
    const errorResult = {
      type: "result",
      subtype: "error_during_execution",
      duration_ms: 0,
      duration_api_ms: 0,
      is_error: true,
      num_turns: 0,
      stop_reason: null,
      session_id: getSessionId(),
      total_cost_usd: 0,
      usage: EMPTY_USAGE,
      modelUsage: {},
      permission_denials: [],
      uuid: randomUUID2(),
      errors: [message]
    };
    process.stdout.write(jsonStringify(errorResult) + `
`);
  } else {
    process.stderr.write(message + `
`);
  }
}
function removeInterruptedMessage(messages, interruptedUserMessage) {
  const idx = messages.findIndex((m) => m.uuid === interruptedUserMessage.uuid);
  if (idx !== -1) {
    messages.splice(idx, 2);
  }
}
async function loadInitialMessages(setAppState, options) {
  const persistSession = !isSessionPersistenceDisabled();
  if (options.continue) {
    try {
      logEvent("tengu_continue_print", {});
      const result = await loadConversationForResume(undefined, undefined);
      if (result) {
        if (false) {}
        if (!options.forkSession) {
          if (result.sessionId) {
            switchSession(asSessionId(result.sessionId), result.fullPath ? dirname(result.fullPath) : null);
            if (persistSession) {
              await resetSessionFilePointer();
            }
          }
        }
        restoreSessionStateFromLog(result, setAppState);
        restoreSessionMetadata(options.forkSession ? { ...result, worktreeSession: undefined } : result);
        if (false) {}
        return {
          messages: result.messages,
          turnInterruptionState: result.turnInterruptionState,
          agentSetting: result.agentSetting
        };
      }
    } catch (error) {
      logError(error);
      gracefulShutdownSync(1);
      return { messages: [] };
    }
  }
  if (options.teleport) {
    try {
      if (!isPolicyAllowed("allow_remote_sessions")) {
        throw new Error("Remote sessions are disabled by your organization's policy.");
      }
      logEvent("tengu_teleport_print", {});
      if (typeof options.teleport !== "string") {
        throw new Error("No session ID provided for teleport");
      }
      const {
        checkOutTeleportedSessionBranch,
        processMessagesForTeleportResume,
        teleportResumeCodeSession,
        validateGitState
      } = await import("./chunk-2mard8h5.js");
      await validateGitState();
      const teleportResult = await teleportResumeCodeSession(options.teleport);
      const { branchError } = await checkOutTeleportedSessionBranch(teleportResult.branch);
      return {
        messages: processMessagesForTeleportResume(teleportResult.log, branchError)
      };
    } catch (error) {
      logError(error);
      gracefulShutdownSync(1);
      return { messages: [] };
    }
  }
  if (options.resume) {
    try {
      logEvent("tengu_resume_print", {});
      const parsedSessionId = parseSessionIdentifier(typeof options.resume === "string" ? options.resume : "");
      if (!parsedSessionId) {
        let errorMessage2 = "Error: --resume requires a valid session ID when used with --print. Usage: claude -p --resume <session-id>";
        if (typeof options.resume === "string") {
          errorMessage2 += `. Session IDs must be in UUID format (e.g., 550e8400-e29b-41d4-a716-446655440000). Provided value "${options.resume}" is not a valid UUID`;
        }
        emitLoadError(errorMessage2, options.outputFormat);
        gracefulShutdownSync(1);
        return { messages: [] };
      }
      if (isEnvTruthy(process.env.CLAUDE_CODE_USE_CCR_V2)) {
        const [, metadata] = await Promise.all([
          hydrateFromCCRv2InternalEvents(parsedSessionId.sessionId),
          options.restoredWorkerState
        ]);
        if (metadata) {
          setAppState(externalMetadataToAppState(metadata));
          if (typeof metadata.model === "string") {
            setMainLoopModelOverride(metadata.model);
          }
        }
      } else if (parsedSessionId.isUrl && parsedSessionId.ingressUrl && isEnvTruthy(process.env.ENABLE_SESSION_PERSISTENCE)) {
        await hydrateRemoteSession(parsedSessionId.sessionId, parsedSessionId.ingressUrl);
      }
      const result = await loadConversationForResume(parsedSessionId.sessionId, parsedSessionId.jsonlFile || undefined);
      if (!result || result.messages.length === 0) {
        if (parsedSessionId.isUrl || isEnvTruthy(process.env.CLAUDE_CODE_USE_CCR_V2)) {
          return {
            messages: await (options.sessionStartHooksPromise ?? processSessionStartHooks("startup"))
          };
        } else {
          emitLoadError(`No conversation found with session ID: ${parsedSessionId.sessionId}`, options.outputFormat);
          gracefulShutdownSync(1);
          return { messages: [] };
        }
      }
      if (options.resumeSessionAt) {
        const index = result.messages.findIndex((m) => m.uuid === options.resumeSessionAt);
        if (index < 0) {
          emitLoadError(`No message found with message.uuid of: ${options.resumeSessionAt}`, options.outputFormat);
          gracefulShutdownSync(1);
          return { messages: [] };
        }
        result.messages = index >= 0 ? result.messages.slice(0, index + 1) : [];
      }
      if (false) {}
      if (!options.forkSession && result.sessionId) {
        switchSession(asSessionId(result.sessionId), result.fullPath ? dirname(result.fullPath) : null);
        if (persistSession) {
          await resetSessionFilePointer();
        }
      }
      restoreSessionStateFromLog(result, setAppState);
      restoreSessionMetadata(options.forkSession ? { ...result, worktreeSession: undefined } : result);
      if (false) {}
      return {
        messages: result.messages,
        turnInterruptionState: result.turnInterruptionState,
        agentSetting: result.agentSetting
      };
    } catch (error) {
      logError(error);
      const errorMessage2 = error instanceof Error ? `Failed to resume session: ${error.message}` : "Failed to resume session with --print mode";
      emitLoadError(errorMessage2, options.outputFormat);
      gracefulShutdownSync(1);
      return { messages: [] };
    }
  }
  return {
    messages: await (options.sessionStartHooksPromise ?? processSessionStartHooks("startup"))
  };
}
function getStructuredIO(inputPrompt, options) {
  let inputStream;
  if (typeof inputPrompt === "string") {
    if (inputPrompt.trim() !== "") {
      inputStream = fromArray([
        jsonStringify({
          type: "user",
          content: inputPrompt,
          uuid: "",
          session_id: "",
          message: {
            role: "user",
            content: inputPrompt
          },
          parent_tool_use_id: null
        })
      ]);
    } else {
      inputStream = fromArray([]);
    }
  } else {
    inputStream = inputPrompt;
  }
  return options.sdkUrl ? new RemoteIO(options.sdkUrl, inputStream, options.replayUserMessages) : new StructuredIO(inputStream, options.replayUserMessages);
}
async function handleOrphanedPermissionResponse({
  message,
  setAppState,
  onEnqueued,
  handledToolUseIds
}) {
  const responseInner = message.response;
  if (responseInner?.subtype === "success" && responseInner.response?.toolUseID && typeof responseInner.response.toolUseID === "string") {
    const permissionResult = responseInner.response;
    const toolUseID = permissionResult.toolUseID;
    if (!toolUseID) {
      return false;
    }
    logForDebugging(`handleOrphanedPermissionResponse: received orphaned control_response for toolUseID=${toolUseID} request_id=${responseInner.request_id}`);
    if (handledToolUseIds.has(toolUseID)) {
      logForDebugging(`handleOrphanedPermissionResponse: skipping duplicate orphaned permission for toolUseID=${toolUseID} (already handled)`);
      return false;
    }
    const assistantMessage = await findUnresolvedToolUse(toolUseID);
    if (!assistantMessage) {
      logForDebugging(`handleOrphanedPermissionResponse: no unresolved tool_use found for toolUseID=${toolUseID} (already resolved in transcript)`);
      return false;
    }
    handledToolUseIds.add(toolUseID);
    logForDebugging(`handleOrphanedPermissionResponse: enqueuing orphaned permission for toolUseID=${toolUseID} messageID=${assistantMessage.message.id}`);
    enqueue({
      mode: "orphaned-permission",
      value: [],
      orphanedPermission: {
        permissionResult,
        assistantMessage
      }
    });
    onEnqueued?.();
    return true;
  }
  return false;
}
function toScopedConfig(config) {
  return { ...config, scope: "dynamic" };
}
async function handleMcpSetServers(servers, sdkState, dynamicState, setAppState) {
  const { allowed: allowedServers, blocked } = filterMcpServersByPolicy(servers);
  const policyErrors = {};
  for (const name of blocked) {
    policyErrors[name] = "Blocked by enterprise policy (allowedMcpServers/deniedMcpServers)";
  }
  const sdkServers = {};
  const processServers = {};
  for (const [name, config] of Object.entries(allowedServers)) {
    if (config.type === "sdk") {
      sdkServers[name] = config;
    } else {
      processServers[name] = config;
    }
  }
  const currentSdkNames = new Set(Object.keys(sdkState.configs));
  const newSdkNames = new Set(Object.keys(sdkServers));
  const sdkAdded = [];
  const sdkRemoved = [];
  const newSdkConfigs = { ...sdkState.configs };
  let newSdkClients = [...sdkState.clients];
  let newSdkTools = [...sdkState.tools];
  for (const name of currentSdkNames) {
    if (!newSdkNames.has(name)) {
      const client = newSdkClients.find((c) => c.name === name);
      if (client && client.type === "connected") {
        await client.cleanup();
      }
      newSdkClients = newSdkClients.filter((c) => c.name !== name);
      const prefix = `mcp__${name}__`;
      newSdkTools = newSdkTools.filter((t) => !t.name.startsWith(prefix));
      delete newSdkConfigs[name];
      sdkRemoved.push(name);
    }
  }
  for (const [name, config] of Object.entries(sdkServers)) {
    if (!currentSdkNames.has(name)) {
      newSdkConfigs[name] = config;
      const pendingClient = {
        type: "pending",
        name,
        config: { ...config, scope: "dynamic" }
      };
      newSdkClients = [...newSdkClients, pendingClient];
      sdkAdded.push(name);
    }
  }
  const processResult = await reconcileMcpServers(processServers, dynamicState, setAppState);
  return {
    response: {
      added: [...sdkAdded, ...processResult.response.added],
      removed: [...sdkRemoved, ...processResult.response.removed],
      errors: { ...policyErrors, ...processResult.response.errors }
    },
    newSdkState: {
      configs: newSdkConfigs,
      clients: newSdkClients,
      tools: newSdkTools
    },
    newDynamicState: processResult.newState,
    sdkServersChanged: sdkAdded.length > 0 || sdkRemoved.length > 0
  };
}
async function reconcileMcpServers(desiredConfigs, currentState, setAppState) {
  const currentNames = new Set(Object.keys(currentState.configs));
  const desiredNames = new Set(Object.keys(desiredConfigs));
  const toRemove = [...currentNames].filter((n) => !desiredNames.has(n));
  const toAdd = [...desiredNames].filter((n) => !currentNames.has(n));
  const toCheck = [...currentNames].filter((n) => desiredNames.has(n));
  const toReplace = toCheck.filter((name) => {
    const currentConfig = currentState.configs[name];
    const desiredConfigRaw = desiredConfigs[name];
    if (!currentConfig || !desiredConfigRaw)
      return true;
    const desiredConfig = toScopedConfig(desiredConfigRaw);
    return !areMcpConfigsEqual(currentConfig, desiredConfig);
  });
  const removed = [];
  const added = [];
  const errors = {};
  let newClients = [...currentState.clients];
  let newTools = [...currentState.tools];
  for (const name of [...toRemove, ...toReplace]) {
    const client = newClients.find((c) => c.name === name);
    const config = currentState.configs[name];
    if (client && config) {
      if (client.type === "connected") {
        try {
          await client.cleanup();
        } catch (e) {
          logError(e);
        }
      }
      await clearServerCache(name, config);
    }
    const prefix = `mcp__${name}__`;
    newTools = newTools.filter((t) => !t.name.startsWith(prefix));
    newClients = newClients.filter((c) => c.name !== name);
    if (toRemove.includes(name)) {
      removed.push(name);
    }
  }
  for (const name of [...toAdd, ...toReplace]) {
    const config = desiredConfigs[name];
    if (!config)
      continue;
    const scopedConfig = toScopedConfig(config);
    if (config.type === "sdk") {
      added.push(name);
      continue;
    }
    try {
      const client = await connectToServer(name, scopedConfig);
      newClients.push(client);
      if (client.type === "connected") {
        const serverTools = await fetchToolsForClient(client);
        newTools.push(...serverTools);
      } else if (client.type === "failed") {
        errors[name] = client.error || "Connection failed";
      }
      added.push(name);
    } catch (e) {
      const err = toError(e);
      errors[name] = err.message;
      logError(err);
    }
  }
  const newConfigs = {};
  for (const name of desiredNames) {
    const config = desiredConfigs[name];
    if (config) {
      newConfigs[name] = toScopedConfig(config);
    }
  }
  const newState = {
    clients: newClients,
    tools: newTools,
    configs: newConfigs
  };
  setAppState((prev) => {
    const allDynamicServerNames = new Set([
      ...Object.keys(currentState.configs),
      ...Object.keys(newConfigs)
    ]);
    const nonDynamicTools = prev.mcp.tools.filter((t) => {
      for (const serverName of allDynamicServerNames) {
        if (t.name.startsWith(`mcp__${serverName}__`)) {
          return false;
        }
      }
      return true;
    });
    const nonDynamicClients = prev.mcp.clients.filter((c) => {
      return !allDynamicServerNames.has(c.name);
    });
    return {
      ...prev,
      mcp: {
        ...prev.mcp,
        tools: [...nonDynamicTools, ...newTools],
        clients: [...nonDynamicClients, ...newClients]
      }
    };
  });
  return {
    response: { added, removed, errors },
    newState
  };
}
export {
  runHeadless,
  removeInterruptedMessage,
  reconcileMcpServers,
  joinPromptValues,
  handleOrphanedPermissionResponse,
  handleMcpSetServers,
  getCanUseToolFn,
  createCanUseToolWithPermissionPrompt,
  canBatchWith
};
