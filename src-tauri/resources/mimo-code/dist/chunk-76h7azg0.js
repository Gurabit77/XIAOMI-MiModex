// @bun
import"./chunk-22kwkd8e.js";
import {
  cliError,
  cliOk
} from "./chunk-z2dp53wn.js";
import {
  buildDeepLinkBanner
} from "./chunk-kwetknx5.js";
import {
  filterExistingPaths,
  getKnownPathsForRepo,
  updateGithubRepoPathMapping
} from "./chunk-yrcj0599.js";
import {
  computeInitialTeamContext,
  createRemoteSessionConfig,
  getModelDeprecationWarning,
  getRelevantTips,
  refreshExampleCommands
} from "./chunk-sdvsr5f5.js";
import {
  processResumedConversation,
  skillChangeDetector
} from "./chunk-17p12gv3.js";
import {
  installAsciicastRecorder
} from "./chunk-4x70hd9p.js";
import {
  seedEarlyInput,
  stopCapturingEarlyInput
} from "./chunk-73krv3xz.js";
import {
  getBaseRenderOptions
} from "./chunk-p7s2pde1.js";
import {
  createStatsStore
} from "./chunk-w41acxmq.js";
import {
  onChangeAppState
} from "./chunk-fyrhbhp1.js";
import"./chunk-4hv90qcz.js";
import {
  exports_assistant,
  init_assistant
} from "./chunk-t87q43f7.js";
import"./chunk-ch3bn7nb.js";
import {
  buildCliLaunch,
  init_cliLaunch
} from "./chunk-a9gy4bpg.js";
import {
  init_setup,
  setupClaudeInChrome,
  shouldAutoEnableClaudeInChrome,
  shouldEnableClaudeInChrome
} from "./chunk-5w4m2atj.js";
import {
  init_partition,
  partition_default
} from "./chunk-0a0a56f2.js";
import {
  VALID_INSTALLABLE_SCOPES,
  VALID_UPDATE_SCOPES
} from "./chunk-p111txfv.js";
import"./chunk-9gpajj6e.js";
import {
  init_releaseNotes,
  migrateChangelogFromConfig
} from "./chunk-krd7atxb.js";
import"./chunk-7mvz4cx2.js";
import"./chunk-2stg2ast.js";
import"./chunk-9yvvqqct.js";
import {
  BROWSER_TOOLS,
  init_src as init_src2
} from "./chunk-ym5r3jnk.js";
import {
  init_sink,
  initializeAnalyticsGates
} from "./chunk-knc27a99.js";
import {
  ASK_USER_QUESTION_TOOL_NAME,
  AppStateProvider,
  CLAUDE_CODE_GUIDE_AGENT_TYPE,
  CRON_CREATE_TOOL_NAME,
  CRON_DELETE_TOOL_NAME,
  CRON_LIST_TOOL_NAME,
  ConfigurableShortcutHint,
  DEFAULT_BINDINGS,
  DEFAULT_MAX_AGE_DAYS,
  ENTER_PLAN_MODE_TOOL_NAME,
  EXIT_PLAN_MODE_TOOL_NAME,
  IDLE_SPECULATION_STATE,
  KeybindingSetup,
  MACOS_RESERVED,
  NON_REBINDABLE,
  REMOTE_TRIGGER_TOOL_NAME,
  SKILL_TOOL_NAME,
  SandboxManager,
  Select,
  SelectMulti,
  TERMINAL_RESERVED,
  acquireIdpIdToken,
  addMcpConfig,
  addToHistory,
  applyConfigEnvironmentVariables,
  applySafeConfigEnvironmentVariables,
  areMcpConfigsAllowedWithEnterpriseMcpConfig,
  asSessionId,
  buildConsolidationPrompt,
  cacheSessionTitle,
  canUserConfigureAdvisor,
  checkOutTeleportedSessionBranch,
  checkQuotaStatus,
  checkRepoForRemoteAccess,
  cleanupOrphanedPluginVersionsInBackground,
  clearIdpClientSecret,
  clearIdpIdToken,
  clearPluginCache,
  clearServerCache,
  countConcurrentSessions,
  countFilesRoundedRg,
  createDefaultCloudEnvironment,
  createStore,
  createSyntheticOutputTool,
  createSystemMessage,
  createUserMessage,
  dedupClaudeAiMcpServers,
  describeMcpConfigFilePath,
  doesEnterpriseMcpConfigExist,
  downloadSessionFiles,
  ensureConfigScope,
  ensureScratchpadDir,
  ensureTransport,
  excludeCommandsByServer,
  excludeResourcesByServer,
  exports_BriefTool,
  exports_autoModeState,
  exports_teammatePromptAddendum,
  fetchClaudeAIMcpConfigsIfEligible,
  fetchEnvironments,
  filterCommandsForRemoteMode,
  filterMcpServersByPolicy,
  generateTempFilePath,
  getActiveAgentsFromList,
  getAgentDefinitionsWithOverrides,
  getAutoModeEnabledState,
  getAutoModeEnabledStateIfCached,
  getCachedIdpIdToken,
  getCharBudget,
  getClaudeCodeMcpConfigs,
  getCommands,
  getDefaultAppState,
  getExternalClaudeMdIncludes,
  getGlobExclusionsForPluginCache,
  getIdpClientSecret,
  getInitialAdvisorSetting,
  getInitialEffortSetting,
  getManagedPluginNames,
  getMcpConfigsByScope,
  getMcpServerSignature,
  getMcpToolsCommandsAndResources,
  getMemoryFiles,
  getMessagesAfterCompactBoundary,
  getPluginSeedDirs,
  getProjectDir,
  getProjectMcpServerStatus,
  getRemoteSessionUrl,
  getSessionIdFromLog,
  getSessionMemoryContent,
  getSettingsWithAllErrors,
  getSkillToolCommands,
  getSystemContext,
  getTmuxInstallInstructions,
  getTools,
  getUserContext,
  getWorktreePaths,
  getXaaIdpSettings,
  gracefulShutdown,
  gracefulShutdownSync,
  initLangfuse,
  init_AppState,
  init_AppStateStore,
  init_BriefTool,
  init_ConfigurableShortcutHint,
  init_CustomSelect,
  init_KeybindingProviderSetup,
  init_SelectMulti,
  init_Shell,
  init_SyntheticOutputTool,
  init_advisor,
  init_allErrors,
  init_api as init_api2,
  init_auth as init_auth2,
  init_autoModeState,
  init_bundledSkills,
  init_cacheUtils,
  init_changeDetector,
  init_claudeAiLimits,
  init_claudeCodeGuideAgent,
  init_claudeai,
  init_claudemd,
  init_client as init_client2,
  init_commands1 as init_commands,
  init_concurrentSessions,
  init_config as init_config3,
  init_consolidationLock,
  init_consolidationPrompt,
  init_constants2 as init_constants3,
  init_constants3 as init_constants4,
  init_constants5,
  init_context as init_context2,
  init_conversationRecovery,
  init_defaultBindings,
  init_effort,
  init_environments,
  init_filesApi,
  init_filesystem,
  init_frontmatterParser,
  init_getWorktreePaths,
  init_gracefulShutdown,
  init_grove,
  init_history,
  init_hookEvents,
  init_ids,
  init_installedPluginsManager,
  init_internalLogging,
  init_langfuse,
  init_loadAgentsDir,
  init_loadUserBindings,
  init_managedEnv,
  init_managedPlugins,
  init_manager,
  init_mapValues,
  init_messages1 as init_messages,
  init_orphanedPluginFilter,
  init_permissionSetup,
  init_pluginDirectories,
  init_pluginLoader,
  init_pluginTelemetry,
  init_policyLimits,
  init_preconditions,
  init_product,
  init_prompt14 as init_prompt5,
  init_prompt6 as init_prompt2,
  init_prompt8 as init_prompt3,
  init_prompt9 as init_prompt4,
  init_promptSuggestion,
  init_remoteManagedSettings,
  init_reservedShortcuts,
  init_ripgrep,
  init_sandbox_adapter,
  init_sessionMemoryUtils,
  init_sessionStart,
  init_sessionStorage,
  init_store,
  init_teammatePromptAddendum,
  init_teleport,
  init_tempfile,
  init_thinking,
  init_tools1 as init_tools,
  init_uniqBy,
  init_utils,
  init_uuid,
  init_worktree,
  init_xaaIdpLogin,
  initialPermissionModeFromCLI,
  initializeLspServerManager,
  initializePolicyLimitsLoadingPromise,
  initializeRemoteManagedSettingsLoadingPromise,
  initializeToolPermissionContext,
  initializeVersionedPlugins,
  isAdvisorEnabled,
  isBuiltInAgent,
  isDefaultPermissionModeAuto,
  isEligibleForRemoteManagedSettings,
  isKairosCronEnabled,
  isKeybindingCustomizationEnabled,
  isPolicyAllowed,
  isPolicyLimitsEligible,
  isQualifiedForGrove,
  isScratchpadEnabled,
  isSyntheticOutputToolEnabled,
  isTmuxAvailable,
  isValidAdvisorModel,
  isXaaEnabled,
  issuerKey,
  loadAllPluginsCacheOnly,
  loadConversationForResume,
  loadPolicyLimits,
  loadRemoteManagedSettings,
  loadTranscriptFromFile,
  logContextMetrics,
  logPermissionContextForAnts,
  logPluginLoadErrors,
  logPluginsEnabledForSession,
  mapValues_default,
  modelSupportsAdvisor,
  parseAgentsFromJson,
  parseEffortValue,
  parseFileSpecs,
  parseFrontmatter,
  parseHeaders,
  parseMcpConfig,
  parseMcpConfigFromFilePath,
  parsePRReference,
  parseToolListFromCLI,
  prefetchAllMcpResources,
  processMessagesForTeleportResume,
  processSessionStartHooks,
  processSetupHooks,
  readClientSecret,
  recordConsolidation,
  refreshPolicyLimits,
  refreshRemoteManagedSettings,
  registerBundledSkill,
  registerSession,
  removeDangerousPermissions,
  saveAgentSetting,
  saveIdpClientSecret,
  saveIdpIdTokenFromJwt,
  saveMcpClientSecret,
  searchSessionsByCustomTitle,
  sessionIdExists,
  setAllHookEventsEnabled,
  setCwd,
  settingsChangeDetector,
  setupGracefulShutdown,
  shouldEnablePromptSuggestion,
  shouldEnableThinkingByDefault,
  shouldShowClaudeMdExternalIncludesWarning,
  shutdownLangfuse,
  shutdownLspServerManager,
  stripDangerousPermissionsForAutoMode,
  teleportToRemoteWithErrorHandling,
  uniqBy_default,
  updateSessionName,
  validateGitState,
  validateSessionRepository,
  validateUuid,
  verifyAutoModeGateAccess,
  waitForPolicyLimitsToLoad,
  waitForRemoteManagedSettingsToLoad
} from "./chunk-ktw919wt.js";
import {
  exports_teammateModeSnapshot,
  init_teammateModeSnapshot
} from "./chunk-qwtafr2b.js";
import"./chunk-jz6xf3ty.js";
import"./chunk-et824jj8.js";
import {
  BASE_CHROME_PROMPT,
  CLAUDE_IN_CHROME_SKILL_HINT,
  init_prompt as init_prompt6
} from "./chunk-var1et7e.js";
import"./chunk-v81kv9zm.js";
import {
  exports_proactive,
  getSessionIngressAuthToken,
  init_proactive,
  init_sessionIngressAuth
} from "./chunk-chmfqs2y.js";
import"./chunk-1gfk9pd3.js";
import"./chunk-2gzv8nrw.js";
import"./chunk-ehtwnxpg.js";
import {
  createEmptyAttributionState,
  init_commitAttribution
} from "./chunk-1th1nz5d.js";
import"./chunk-x6pa9me9.js";
import"./chunk-wbtp4zy8.js";
import {
  DEFAULT_TASKS_MODE_TASK_LIST_ID,
  TASK_STATUSES,
  init_tasks
} from "./chunk-ypmcesxe.js";
import"./chunk-ybaawhyf.js";
import"./chunk-bhdt6k7w.js";
import {
  init_worktreeModeEnabled,
  isWorktreeModeEnabled
} from "./chunk-cgfdkzhb.js";
import {
  init_builtinPlugins,
  registerBuiltinPlugin
} from "./chunk-0rstde44.js";
import {
  initSentry,
  init_sentry
} from "./chunk-2cvt1abr.js";
import {
  CLAUDE_IN_CHROME_MCP_SERVER_NAME,
  init_common,
  isClaudeInChromeMCPServer
} from "./chunk-5ptgeqdf.js";
import"./chunk-1jvg23ym.js";
import"./chunk-akkx6jmm.js";
import"./chunk-7fht54sw.js";
import {
  init_referral,
  prefetchPassesEligibility
} from "./chunk-pfhyp451.js";
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
import {
  fetchSession,
  init_api,
  prepareApiRequest
} from "./chunk-92f9twfz.js";
import"./chunk-6dj3cf9s.js";
import"./chunk-dn7vyq4j.js";
import"./chunk-4jm600zv.js";
import"./chunk-vs4r0kd5.js";
import {
  getTelemetryAttributes,
  init_betaSessionTracing,
  init_telemetryAttributes,
  isBetaTracingEnabled
} from "./chunk-g57ncwpz.js";
import"./chunk-9pp18zcp.js";
import"./chunk-h1xx834r.js";
import"./chunk-p8zggt02.js";
import"./chunk-6rj8k2tr.js";
import"./chunk-x69b8r8v.js";
import"./chunk-gx4kmdam.js";
import"./chunk-b53tzh92.js";
import"./chunk-gd6w3h9n.js";
import {
  AGENT_TOOL_NAME,
  SettingsSchema,
  checkHasTrustDialogAccepted,
  enableConfigs,
  ensureKeychainPrefetchCompleted,
  ensureMdmSettingsLoaded,
  ensureModelStringsInitialized,
  exports_prompt,
  filterAllowedSdkBetas,
  getAPIProvider,
  getAnthropicApiKey,
  getAutoMemPath,
  getClaudeAIOAuthTokens,
  getClaudeCodeUserAgent,
  getContextWindowForModel,
  getCurrentProjectConfig,
  getCustomApiKeyStatus,
  getDefaultMainLoopModel,
  getDefaultMainLoopModelSetting,
  getFeatureValue_CACHED_MAY_BE_STALE,
  getGlobalConfig,
  getInitialFastModeSetting,
  getInitialSettings,
  getManagedSettingsKeysForLogging,
  getRemoteControlAtStartup,
  getSettingsFilePathForSource,
  getSettingsForSource,
  getSettingsWithErrors,
  getSettings_DEPRECATED,
  getSubscriptionType,
  getUserSpecifiedModelSetting,
  hasGrowthBookEnvOverride,
  hasProfileScope,
  hasSkipDangerousModePermissionPrompt,
  initJetBrainsDetection,
  initUser,
  init_PermissionMode,
  init_agentSwarmsEnabled,
  init_auth,
  init_authPortable,
  init_betas1 as init_betas,
  init_client,
  init_config,
  init_config1 as init_config2,
  init_constants,
  init_constants1 as init_constants2,
  init_context,
  init_envDynamic,
  init_fastMode,
  init_growthbook,
  init_http,
  init_isEqual,
  init_keychainPrefetch,
  init_model,
  init_modelCapabilities,
  init_modelStrings,
  init_paths,
  init_pickBy,
  init_prompt1 as init_prompt,
  init_providers,
  init_rawRead,
  init_settings,
  init_settings1 as init_settings2,
  init_stringUtils,
  init_types,
  init_user,
  init_userAgent,
  initializeGrowthBook,
  isAgentSwarmsEnabled,
  isAnalyticsDisabled,
  isAutoMemoryEnabled,
  isAutoUpdaterDisabled,
  isClaudeAISubscriber,
  isEqual_default,
  isFastModeEnabled,
  isLegacyModelRemapEnabled,
  isMaxSubscriber,
  isOpus1mMergeEnabled,
  isProSubscriber,
  isTeamPremiumSubscriber,
  normalizeApiKeyForConfig,
  normalizeModelStringForAPI,
  parseSettingSourcesFlag,
  parseUserSpecifiedModel,
  pickBy_default,
  plural,
  populateOAuthAccountInfoIfNeeded,
  prefetchAwsCredentialsAndBedRockInfoIfSafe,
  prefetchFastModeStatus,
  prefetchGcpCredentialsIfSafe,
  recordFirstStartTime,
  refreshGrowthBookAfterAuthChange,
  refreshModelCapabilities,
  resetGrowthBook,
  resetUserCache,
  resolveFastModeStatusFromCache,
  saveCurrentProjectConfig,
  saveGlobalConfig,
  startKeychainPrefetch,
  startMdmRawRead,
  updateSettingsForSource,
  validateForceLoginOrg,
  withOAuth401Retry
} from "./chunk-1ghcng4e.js";
import {
  init_json,
  safeParseJSON
} from "./chunk-pz9t24tq.js";
import"./chunk-4efha55s.js";
import {
  configureGlobalAgents,
  configureGlobalMTLS,
  init_mtls,
  init_proxy
} from "./chunk-t7f7dp4k.js";
import {
  count,
  exports_teammate,
  init_array,
  init_teammate,
  uniq
} from "./chunk-zwarn9h7.js";
import {
  init_windowsPaths,
  setShellIfWindows
} from "./chunk-b127reh2.js";
import"./chunk-et54q618.js";
import {
  PERMISSION_MODES
} from "./chunk-pe9b769s.js";
import {
  init_lazySchema,
  lazySchema
} from "./chunk-64c1avct.js";
import"./chunk-8g5pe1gr.js";
import {
  getPlatform,
  init_platform
} from "./chunk-0rbpfkda.js";
import"./chunk-gnw2dwca.js";
import"./chunk-wbmn1xar.js";
import"./chunk-3c25bcsw.js";
import"./chunk-nw7v8w65.js";
import {
  init_bundledMode,
  isInBundledMode
} from "./chunk-xhesahm0.js";
import {
  OAUTH_BETA_HEADER,
  getOauthConfig,
  init_oauth
} from "./chunk-rh5a2rg9.js";
import"./chunk-4cp6193g.js";
import {
  init_v4
} from "./chunk-8g747a8x.js";
import {
  exports_external,
  toJSONSchema
} from "./chunk-d7886r6a.js";
import"./chunk-adnxyg7j.js";
import"./chunk-djs11qd6.js";
import"./chunk-nrv96v1h.js";
import"./chunk-gdqk4ssq.js";
import"./chunk-bwawjerw.js";
import"./chunk-p2816w9z.js";
import"./chunk-v9smspw2.js";
import"./chunk-v1kzp02e.js";
import {
  formatFileSize,
  init_format,
  init_startupProfiler,
  profileCheckpoint,
  profileReport
} from "./chunk-x5hyyhqf.js";
import"./chunk-crmjpsqe.js";
import {
  Byline,
  Dialog,
  KeyboardShortcutHint,
  Link,
  SHOW_CURSOR,
  ThemedBox_default,
  ThemedText,
  init_source,
  init_src,
  isSynchronizedOutputSupported,
  source_default
} from "./chunk-er1s76c9.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "./chunk-b5wxetbv.js";
import {
  init_analytics,
  logEvent
} from "./chunk-f2mhrmww.js";
import"./chunk-0vkfrmqm.js";
import"./chunk-0xjaqda8.js";
import {
  detectCurrentRepository,
  detectCurrentRepositoryWithHost,
  init_detectRepository,
  parseGitRemote
} from "./chunk-c84gr0s2.js";
import {
  findGitRoot,
  getBranch,
  getIsGit,
  getRemoteUrl,
  getWorktreeCount,
  init_diagLogs,
  init_git,
  logForDiagnosticsNoPII
} from "./chunk-t6jhrn34.js";
import"./chunk-95xve7f8.js";
import"./chunk-jdq8jgyg.js";
import"./chunk-qcwbd71h.js";
import {
  getCwd,
  init_cwd
} from "./chunk-dxvkxgnf.js";
import {
  init_log,
  init_privacyLevel,
  isEssentialTrafficOnly,
  logError
} from "./chunk-w5ahy59y.js";
import"./chunk-8tnsngw2.js";
import {
  init_which,
  which
} from "./chunk-jkh5s8ct.js";
import"./chunk-kwm5bf2m.js";
import {
  execa,
  init_execa
} from "./chunk-5z28bqne.js";
import"./chunk-qajrkk97.js";
import {
  ConfigParseError,
  TeleportOperationError,
  enableDebugLogging,
  errorMessage,
  getDebugLogPath,
  getErrnoCode,
  getFsImplementation,
  init_cleanupRegistry,
  init_debug,
  init_errors,
  init_fsOperations,
  init_slowOperations,
  isENOENT,
  jsonParse,
  jsonStringify,
  logForDebugging,
  registerCleanup,
  safeResolvePath,
  setHasFormattedOutput,
  toError,
  writeFileSync_DEPRECATED
} from "./chunk-rpbc3b7k.js";
import {
  init_process,
  peekForStdinData,
  writeToStderr
} from "./chunk-fbv4apne.js";
import {
  getAllowedChannels,
  getInitialMainLoopModel,
  getIsNonInteractiveSession,
  getMainLoopModelOverride,
  getOriginalCwd,
  getSdkBetas,
  getSessionCounter,
  getSessionId,
  getUserMsgOptIn,
  init_settingsCache,
  init_state,
  resetSettingsCache,
  setAdditionalDirectoriesForClaudeMd,
  setAllowedChannels,
  setAllowedSettingSources,
  setChromeFlagOverride,
  setClientType,
  setCwdState,
  setDirectConnectServerUrl,
  setFlagSettingsPath,
  setHasDevChannels,
  setInitialMainLoopModel,
  setInlinePlugins,
  setIsInteractive,
  setIsRemoteMode,
  setKairosActive,
  setMainLoopModelOverride,
  setMainThreadAgentType,
  setMeter,
  setOriginalCwd,
  setQuestionPreviewFormat,
  setSdkBetas,
  setSessionBypassPermissionsMode,
  setSessionPersistenceDisabled,
  setSessionSource,
  setSessionTrustAccepted,
  setStatsStore,
  setTeleportedSessionInfo,
  setUserMsgOptIn,
  switchSession
} from "./chunk-j5xzpm59.js";
import"./chunk-50dgek10.js";
import"./chunk-7wm5s02e.js";
import"./chunk-d3bk85eq.js";
import"./chunk-cw8rngb2.js";
import {
  hasNodeOption,
  init_envUtils,
  isBareMode,
  isEnvTruthy,
  isInProtectedNamespace,
  isRunningOnHomespace,
  parseEnvVars
} from "./chunk-hxhwzgnn.js";
import {
  init_memoize,
  memoize_default
} from "./chunk-qx8z601m.js";
import"./chunk-cgm6758j.js";
import {
  axios_default,
  init_axios
} from "./chunk-3v4d4h0t.js";
import"./chunk-8pn8tvgg.js";
import"./chunk-netzwgv1.js";
import {
  __commonJS,
  __esm,
  __export,
  __require,
  __toCommonJS,
  __toESM
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/commander@13.1.0/node_modules/commander/lib/error.js
var require_error = __commonJS((exports) => {
  class CommanderError extends Error {
    constructor(exitCode, code, message) {
      super(message);
      Error.captureStackTrace(this, this.constructor);
      this.name = this.constructor.name;
      this.code = code;
      this.exitCode = exitCode;
      this.nestedError = undefined;
    }
  }

  class InvalidArgumentError extends CommanderError {
    constructor(message) {
      super(1, "commander.invalidArgument", message);
      Error.captureStackTrace(this, this.constructor);
      this.name = this.constructor.name;
    }
  }
  exports.CommanderError = CommanderError;
  exports.InvalidArgumentError = InvalidArgumentError;
});

// node_modules/.bun/commander@13.1.0/node_modules/commander/lib/argument.js
var require_argument = __commonJS((exports) => {
  var { InvalidArgumentError } = require_error();

  class Argument {
    constructor(name, description) {
      this.description = description || "";
      this.variadic = false;
      this.parseArg = undefined;
      this.defaultValue = undefined;
      this.defaultValueDescription = undefined;
      this.argChoices = undefined;
      switch (name[0]) {
        case "<":
          this.required = true;
          this._name = name.slice(1, -1);
          break;
        case "[":
          this.required = false;
          this._name = name.slice(1, -1);
          break;
        default:
          this.required = true;
          this._name = name;
          break;
      }
      if (this._name.length > 3 && this._name.slice(-3) === "...") {
        this.variadic = true;
        this._name = this._name.slice(0, -3);
      }
    }
    name() {
      return this._name;
    }
    _concatValue(value, previous) {
      if (previous === this.defaultValue || !Array.isArray(previous)) {
        return [value];
      }
      return previous.concat(value);
    }
    default(value, description) {
      this.defaultValue = value;
      this.defaultValueDescription = description;
      return this;
    }
    argParser(fn) {
      this.parseArg = fn;
      return this;
    }
    choices(values) {
      this.argChoices = values.slice();
      this.parseArg = (arg, previous) => {
        if (!this.argChoices.includes(arg)) {
          throw new InvalidArgumentError(`Allowed choices are ${this.argChoices.join(", ")}.`);
        }
        if (this.variadic) {
          return this._concatValue(arg, previous);
        }
        return arg;
      };
      return this;
    }
    argRequired() {
      this.required = true;
      return this;
    }
    argOptional() {
      this.required = false;
      return this;
    }
  }
  function humanReadableArgName(arg) {
    const nameOutput = arg.name() + (arg.variadic === true ? "..." : "");
    return arg.required ? "<" + nameOutput + ">" : "[" + nameOutput + "]";
  }
  exports.Argument = Argument;
  exports.humanReadableArgName = humanReadableArgName;
});

// node_modules/.bun/commander@13.1.0/node_modules/commander/lib/help.js
var require_help = __commonJS((exports) => {
  var { humanReadableArgName } = require_argument();

  class Help {
    constructor() {
      this.helpWidth = undefined;
      this.minWidthToWrap = 40;
      this.sortSubcommands = false;
      this.sortOptions = false;
      this.showGlobalOptions = false;
    }
    prepareContext(contextOptions) {
      this.helpWidth = this.helpWidth ?? contextOptions.helpWidth ?? 80;
    }
    visibleCommands(cmd) {
      const visibleCommands = cmd.commands.filter((cmd2) => !cmd2._hidden);
      const helpCommand = cmd._getHelpCommand();
      if (helpCommand && !helpCommand._hidden) {
        visibleCommands.push(helpCommand);
      }
      if (this.sortSubcommands) {
        visibleCommands.sort((a, b) => {
          return a.name().localeCompare(b.name());
        });
      }
      return visibleCommands;
    }
    compareOptions(a, b) {
      const getSortKey = (option) => {
        return option.short ? option.short.replace(/^-/, "") : option.long.replace(/^--/, "");
      };
      return getSortKey(a).localeCompare(getSortKey(b));
    }
    visibleOptions(cmd) {
      const visibleOptions = cmd.options.filter((option) => !option.hidden);
      const helpOption = cmd._getHelpOption();
      if (helpOption && !helpOption.hidden) {
        const removeShort = helpOption.short && cmd._findOption(helpOption.short);
        const removeLong = helpOption.long && cmd._findOption(helpOption.long);
        if (!removeShort && !removeLong) {
          visibleOptions.push(helpOption);
        } else if (helpOption.long && !removeLong) {
          visibleOptions.push(cmd.createOption(helpOption.long, helpOption.description));
        } else if (helpOption.short && !removeShort) {
          visibleOptions.push(cmd.createOption(helpOption.short, helpOption.description));
        }
      }
      if (this.sortOptions) {
        visibleOptions.sort(this.compareOptions);
      }
      return visibleOptions;
    }
    visibleGlobalOptions(cmd) {
      if (!this.showGlobalOptions)
        return [];
      const globalOptions = [];
      for (let ancestorCmd = cmd.parent;ancestorCmd; ancestorCmd = ancestorCmd.parent) {
        const visibleOptions = ancestorCmd.options.filter((option) => !option.hidden);
        globalOptions.push(...visibleOptions);
      }
      if (this.sortOptions) {
        globalOptions.sort(this.compareOptions);
      }
      return globalOptions;
    }
    visibleArguments(cmd) {
      if (cmd._argsDescription) {
        cmd.registeredArguments.forEach((argument) => {
          argument.description = argument.description || cmd._argsDescription[argument.name()] || "";
        });
      }
      if (cmd.registeredArguments.find((argument) => argument.description)) {
        return cmd.registeredArguments;
      }
      return [];
    }
    subcommandTerm(cmd) {
      const args = cmd.registeredArguments.map((arg) => humanReadableArgName(arg)).join(" ");
      return cmd._name + (cmd._aliases[0] ? "|" + cmd._aliases[0] : "") + (cmd.options.length ? " [options]" : "") + (args ? " " + args : "");
    }
    optionTerm(option) {
      return option.flags;
    }
    argumentTerm(argument) {
      return argument.name();
    }
    longestSubcommandTermLength(cmd, helper) {
      return helper.visibleCommands(cmd).reduce((max, command) => {
        return Math.max(max, this.displayWidth(helper.styleSubcommandTerm(helper.subcommandTerm(command))));
      }, 0);
    }
    longestOptionTermLength(cmd, helper) {
      return helper.visibleOptions(cmd).reduce((max, option) => {
        return Math.max(max, this.displayWidth(helper.styleOptionTerm(helper.optionTerm(option))));
      }, 0);
    }
    longestGlobalOptionTermLength(cmd, helper) {
      return helper.visibleGlobalOptions(cmd).reduce((max, option) => {
        return Math.max(max, this.displayWidth(helper.styleOptionTerm(helper.optionTerm(option))));
      }, 0);
    }
    longestArgumentTermLength(cmd, helper) {
      return helper.visibleArguments(cmd).reduce((max, argument) => {
        return Math.max(max, this.displayWidth(helper.styleArgumentTerm(helper.argumentTerm(argument))));
      }, 0);
    }
    commandUsage(cmd) {
      let cmdName = cmd._name;
      if (cmd._aliases[0]) {
        cmdName = cmdName + "|" + cmd._aliases[0];
      }
      let ancestorCmdNames = "";
      for (let ancestorCmd = cmd.parent;ancestorCmd; ancestorCmd = ancestorCmd.parent) {
        ancestorCmdNames = ancestorCmd.name() + " " + ancestorCmdNames;
      }
      return ancestorCmdNames + cmdName + " " + cmd.usage();
    }
    commandDescription(cmd) {
      return cmd.description();
    }
    subcommandDescription(cmd) {
      return cmd.summary() || cmd.description();
    }
    optionDescription(option) {
      const extraInfo = [];
      if (option.argChoices) {
        extraInfo.push(`choices: ${option.argChoices.map((choice) => JSON.stringify(choice)).join(", ")}`);
      }
      if (option.defaultValue !== undefined) {
        const showDefault = option.required || option.optional || option.isBoolean() && typeof option.defaultValue === "boolean";
        if (showDefault) {
          extraInfo.push(`default: ${option.defaultValueDescription || JSON.stringify(option.defaultValue)}`);
        }
      }
      if (option.presetArg !== undefined && option.optional) {
        extraInfo.push(`preset: ${JSON.stringify(option.presetArg)}`);
      }
      if (option.envVar !== undefined) {
        extraInfo.push(`env: ${option.envVar}`);
      }
      if (extraInfo.length > 0) {
        return `${option.description} (${extraInfo.join(", ")})`;
      }
      return option.description;
    }
    argumentDescription(argument) {
      const extraInfo = [];
      if (argument.argChoices) {
        extraInfo.push(`choices: ${argument.argChoices.map((choice) => JSON.stringify(choice)).join(", ")}`);
      }
      if (argument.defaultValue !== undefined) {
        extraInfo.push(`default: ${argument.defaultValueDescription || JSON.stringify(argument.defaultValue)}`);
      }
      if (extraInfo.length > 0) {
        const extraDescription = `(${extraInfo.join(", ")})`;
        if (argument.description) {
          return `${argument.description} ${extraDescription}`;
        }
        return extraDescription;
      }
      return argument.description;
    }
    formatHelp(cmd, helper) {
      const termWidth = helper.padWidth(cmd, helper);
      const helpWidth = helper.helpWidth ?? 80;
      function callFormatItem(term, description) {
        return helper.formatItem(term, termWidth, description, helper);
      }
      let output = [
        `${helper.styleTitle("Usage:")} ${helper.styleUsage(helper.commandUsage(cmd))}`,
        ""
      ];
      const commandDescription = helper.commandDescription(cmd);
      if (commandDescription.length > 0) {
        output = output.concat([
          helper.boxWrap(helper.styleCommandDescription(commandDescription), helpWidth),
          ""
        ]);
      }
      const argumentList = helper.visibleArguments(cmd).map((argument) => {
        return callFormatItem(helper.styleArgumentTerm(helper.argumentTerm(argument)), helper.styleArgumentDescription(helper.argumentDescription(argument)));
      });
      if (argumentList.length > 0) {
        output = output.concat([
          helper.styleTitle("Arguments:"),
          ...argumentList,
          ""
        ]);
      }
      const optionList = helper.visibleOptions(cmd).map((option) => {
        return callFormatItem(helper.styleOptionTerm(helper.optionTerm(option)), helper.styleOptionDescription(helper.optionDescription(option)));
      });
      if (optionList.length > 0) {
        output = output.concat([
          helper.styleTitle("Options:"),
          ...optionList,
          ""
        ]);
      }
      if (helper.showGlobalOptions) {
        const globalOptionList = helper.visibleGlobalOptions(cmd).map((option) => {
          return callFormatItem(helper.styleOptionTerm(helper.optionTerm(option)), helper.styleOptionDescription(helper.optionDescription(option)));
        });
        if (globalOptionList.length > 0) {
          output = output.concat([
            helper.styleTitle("Global Options:"),
            ...globalOptionList,
            ""
          ]);
        }
      }
      const commandList = helper.visibleCommands(cmd).map((cmd2) => {
        return callFormatItem(helper.styleSubcommandTerm(helper.subcommandTerm(cmd2)), helper.styleSubcommandDescription(helper.subcommandDescription(cmd2)));
      });
      if (commandList.length > 0) {
        output = output.concat([
          helper.styleTitle("Commands:"),
          ...commandList,
          ""
        ]);
      }
      return output.join(`
`);
    }
    displayWidth(str) {
      return stripColor(str).length;
    }
    styleTitle(str) {
      return str;
    }
    styleUsage(str) {
      return str.split(" ").map((word) => {
        if (word === "[options]")
          return this.styleOptionText(word);
        if (word === "[command]")
          return this.styleSubcommandText(word);
        if (word[0] === "[" || word[0] === "<")
          return this.styleArgumentText(word);
        return this.styleCommandText(word);
      }).join(" ");
    }
    styleCommandDescription(str) {
      return this.styleDescriptionText(str);
    }
    styleOptionDescription(str) {
      return this.styleDescriptionText(str);
    }
    styleSubcommandDescription(str) {
      return this.styleDescriptionText(str);
    }
    styleArgumentDescription(str) {
      return this.styleDescriptionText(str);
    }
    styleDescriptionText(str) {
      return str;
    }
    styleOptionTerm(str) {
      return this.styleOptionText(str);
    }
    styleSubcommandTerm(str) {
      return str.split(" ").map((word) => {
        if (word === "[options]")
          return this.styleOptionText(word);
        if (word[0] === "[" || word[0] === "<")
          return this.styleArgumentText(word);
        return this.styleSubcommandText(word);
      }).join(" ");
    }
    styleArgumentTerm(str) {
      return this.styleArgumentText(str);
    }
    styleOptionText(str) {
      return str;
    }
    styleArgumentText(str) {
      return str;
    }
    styleSubcommandText(str) {
      return str;
    }
    styleCommandText(str) {
      return str;
    }
    padWidth(cmd, helper) {
      return Math.max(helper.longestOptionTermLength(cmd, helper), helper.longestGlobalOptionTermLength(cmd, helper), helper.longestSubcommandTermLength(cmd, helper), helper.longestArgumentTermLength(cmd, helper));
    }
    preformatted(str) {
      return /\n[^\S\r\n]/.test(str);
    }
    formatItem(term, termWidth, description, helper) {
      const itemIndent = 2;
      const itemIndentStr = " ".repeat(itemIndent);
      if (!description)
        return itemIndentStr + term;
      const paddedTerm = term.padEnd(termWidth + term.length - helper.displayWidth(term));
      const spacerWidth = 2;
      const helpWidth = this.helpWidth ?? 80;
      const remainingWidth = helpWidth - termWidth - spacerWidth - itemIndent;
      let formattedDescription;
      if (remainingWidth < this.minWidthToWrap || helper.preformatted(description)) {
        formattedDescription = description;
      } else {
        const wrappedDescription = helper.boxWrap(description, remainingWidth);
        formattedDescription = wrappedDescription.replace(/\n/g, `
` + " ".repeat(termWidth + spacerWidth));
      }
      return itemIndentStr + paddedTerm + " ".repeat(spacerWidth) + formattedDescription.replace(/\n/g, `
${itemIndentStr}`);
    }
    boxWrap(str, width) {
      if (width < this.minWidthToWrap)
        return str;
      const rawLines = str.split(/\r\n|\n/);
      const chunkPattern = /[\s]*[^\s]+/g;
      const wrappedLines = [];
      rawLines.forEach((line) => {
        const chunks = line.match(chunkPattern);
        if (chunks === null) {
          wrappedLines.push("");
          return;
        }
        let sumChunks = [chunks.shift()];
        let sumWidth = this.displayWidth(sumChunks[0]);
        chunks.forEach((chunk) => {
          const visibleWidth = this.displayWidth(chunk);
          if (sumWidth + visibleWidth <= width) {
            sumChunks.push(chunk);
            sumWidth += visibleWidth;
            return;
          }
          wrappedLines.push(sumChunks.join(""));
          const nextChunk = chunk.trimStart();
          sumChunks = [nextChunk];
          sumWidth = this.displayWidth(nextChunk);
        });
        wrappedLines.push(sumChunks.join(""));
      });
      return wrappedLines.join(`
`);
    }
  }
  function stripColor(str) {
    const sgrPattern = /\x1b\[\d*(;\d*)*m/g;
    return str.replace(sgrPattern, "");
  }
  exports.Help = Help;
  exports.stripColor = stripColor;
});

// node_modules/.bun/commander@13.1.0/node_modules/commander/lib/option.js
var require_option = __commonJS((exports) => {
  var { InvalidArgumentError } = require_error();

  class Option {
    constructor(flags, description) {
      this.flags = flags;
      this.description = description || "";
      this.required = flags.includes("<");
      this.optional = flags.includes("[");
      this.variadic = /\w\.\.\.[>\]]$/.test(flags);
      this.mandatory = false;
      const optionFlags = splitOptionFlags(flags);
      this.short = optionFlags.shortFlag;
      this.long = optionFlags.longFlag;
      this.negate = false;
      if (this.long) {
        this.negate = this.long.startsWith("--no-");
      }
      this.defaultValue = undefined;
      this.defaultValueDescription = undefined;
      this.presetArg = undefined;
      this.envVar = undefined;
      this.parseArg = undefined;
      this.hidden = false;
      this.argChoices = undefined;
      this.conflictsWith = [];
      this.implied = undefined;
    }
    default(value, description) {
      this.defaultValue = value;
      this.defaultValueDescription = description;
      return this;
    }
    preset(arg) {
      this.presetArg = arg;
      return this;
    }
    conflicts(names) {
      this.conflictsWith = this.conflictsWith.concat(names);
      return this;
    }
    implies(impliedOptionValues) {
      let newImplied = impliedOptionValues;
      if (typeof impliedOptionValues === "string") {
        newImplied = { [impliedOptionValues]: true };
      }
      this.implied = Object.assign(this.implied || {}, newImplied);
      return this;
    }
    env(name) {
      this.envVar = name;
      return this;
    }
    argParser(fn) {
      this.parseArg = fn;
      return this;
    }
    makeOptionMandatory(mandatory = true) {
      this.mandatory = !!mandatory;
      return this;
    }
    hideHelp(hide = true) {
      this.hidden = !!hide;
      return this;
    }
    _concatValue(value, previous) {
      if (previous === this.defaultValue || !Array.isArray(previous)) {
        return [value];
      }
      return previous.concat(value);
    }
    choices(values) {
      this.argChoices = values.slice();
      this.parseArg = (arg, previous) => {
        if (!this.argChoices.includes(arg)) {
          throw new InvalidArgumentError(`Allowed choices are ${this.argChoices.join(", ")}.`);
        }
        if (this.variadic) {
          return this._concatValue(arg, previous);
        }
        return arg;
      };
      return this;
    }
    name() {
      if (this.long) {
        return this.long.replace(/^--/, "");
      }
      return this.short.replace(/^-/, "");
    }
    attributeName() {
      if (this.negate) {
        return camelcase(this.name().replace(/^no-/, ""));
      }
      return camelcase(this.name());
    }
    is(arg) {
      return this.short === arg || this.long === arg;
    }
    isBoolean() {
      return !this.required && !this.optional && !this.negate;
    }
  }

  class DualOptions {
    constructor(options) {
      this.positiveOptions = new Map;
      this.negativeOptions = new Map;
      this.dualOptions = new Set;
      options.forEach((option) => {
        if (option.negate) {
          this.negativeOptions.set(option.attributeName(), option);
        } else {
          this.positiveOptions.set(option.attributeName(), option);
        }
      });
      this.negativeOptions.forEach((value, key) => {
        if (this.positiveOptions.has(key)) {
          this.dualOptions.add(key);
        }
      });
    }
    valueFromOption(value, option) {
      const optionKey = option.attributeName();
      if (!this.dualOptions.has(optionKey))
        return true;
      const preset = this.negativeOptions.get(optionKey).presetArg;
      const negativeValue = preset !== undefined ? preset : false;
      return option.negate === (negativeValue === value);
    }
  }
  function camelcase(str) {
    return str.split("-").reduce((str2, word) => {
      return str2 + word[0].toUpperCase() + word.slice(1);
    });
  }
  function splitOptionFlags(flags) {
    let shortFlag;
    let longFlag;
    const shortFlagExp = /^-[^-]$/;
    const longFlagExp = /^--[^-]/;
    const flagParts = flags.split(/[ |,]+/).concat("guard");
    if (shortFlagExp.test(flagParts[0]))
      shortFlag = flagParts.shift();
    if (longFlagExp.test(flagParts[0]))
      longFlag = flagParts.shift();
    if (!shortFlag && shortFlagExp.test(flagParts[0]))
      shortFlag = flagParts.shift();
    if (!shortFlag && longFlagExp.test(flagParts[0])) {
      shortFlag = longFlag;
      longFlag = flagParts.shift();
    }
    if (flagParts[0].startsWith("-")) {
      const unsupportedFlag = flagParts[0];
      const baseError = `option creation failed due to '${unsupportedFlag}' in option flags '${flags}'`;
      if (/^-[^-][^-]/.test(unsupportedFlag))
        throw new Error(`${baseError}
- a short flag is a single dash and a single character
  - either use a single dash and a single character (for a short flag)
  - or use a double dash for a long option (and can have two, like '--ws, --workspace')`);
      if (shortFlagExp.test(unsupportedFlag))
        throw new Error(`${baseError}
- too many short flags`);
      if (longFlagExp.test(unsupportedFlag))
        throw new Error(`${baseError}
- too many long flags`);
      throw new Error(`${baseError}
- unrecognised flag format`);
    }
    if (shortFlag === undefined && longFlag === undefined)
      throw new Error(`option creation failed due to no flags found in '${flags}'.`);
    return { shortFlag, longFlag };
  }
  exports.Option = Option;
  exports.DualOptions = DualOptions;
});

// node_modules/.bun/commander@13.1.0/node_modules/commander/lib/suggestSimilar.js
var require_suggestSimilar = __commonJS((exports) => {
  var maxDistance = 3;
  function editDistance(a, b) {
    if (Math.abs(a.length - b.length) > maxDistance)
      return Math.max(a.length, b.length);
    const d = [];
    for (let i = 0;i <= a.length; i++) {
      d[i] = [i];
    }
    for (let j = 0;j <= b.length; j++) {
      d[0][j] = j;
    }
    for (let j = 1;j <= b.length; j++) {
      for (let i = 1;i <= a.length; i++) {
        let cost = 1;
        if (a[i - 1] === b[j - 1]) {
          cost = 0;
        } else {
          cost = 1;
        }
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
        if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
          d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
        }
      }
    }
    return d[a.length][b.length];
  }
  function suggestSimilar(word, candidates) {
    if (!candidates || candidates.length === 0)
      return "";
    candidates = Array.from(new Set(candidates));
    const searchingOptions = word.startsWith("--");
    if (searchingOptions) {
      word = word.slice(2);
      candidates = candidates.map((candidate) => candidate.slice(2));
    }
    let similar = [];
    let bestDistance = maxDistance;
    const minSimilarity = 0.4;
    candidates.forEach((candidate) => {
      if (candidate.length <= 1)
        return;
      const distance = editDistance(word, candidate);
      const length = Math.max(word.length, candidate.length);
      const similarity = (length - distance) / length;
      if (similarity > minSimilarity) {
        if (distance < bestDistance) {
          bestDistance = distance;
          similar = [candidate];
        } else if (distance === bestDistance) {
          similar.push(candidate);
        }
      }
    });
    similar.sort((a, b) => a.localeCompare(b));
    if (searchingOptions) {
      similar = similar.map((candidate) => `--${candidate}`);
    }
    if (similar.length > 1) {
      return `
(Did you mean one of ${similar.join(", ")}?)`;
    }
    if (similar.length === 1) {
      return `
(Did you mean ${similar[0]}?)`;
    }
    return "";
  }
  exports.suggestSimilar = suggestSimilar;
});

// node_modules/.bun/commander@13.1.0/node_modules/commander/lib/command.js
var require_command = __commonJS((exports) => {
  var EventEmitter = __require("events").EventEmitter;
  var childProcess = __require("child_process");
  var path = __require("path");
  var fs = __require("fs");
  var process2 = __require("process");
  var { Argument, humanReadableArgName } = require_argument();
  var { CommanderError } = require_error();
  var { Help, stripColor } = require_help();
  var { Option, DualOptions } = require_option();
  var { suggestSimilar } = require_suggestSimilar();

  class Command extends EventEmitter {
    constructor(name) {
      super();
      this.commands = [];
      this.options = [];
      this.parent = null;
      this._allowUnknownOption = false;
      this._allowExcessArguments = false;
      this.registeredArguments = [];
      this._args = this.registeredArguments;
      this.args = [];
      this.rawArgs = [];
      this.processedArgs = [];
      this._scriptPath = null;
      this._name = name || "";
      this._optionValues = {};
      this._optionValueSources = {};
      this._storeOptionsAsProperties = false;
      this._actionHandler = null;
      this._executableHandler = false;
      this._executableFile = null;
      this._executableDir = null;
      this._defaultCommandName = null;
      this._exitCallback = null;
      this._aliases = [];
      this._combineFlagAndOptionalValue = true;
      this._description = "";
      this._summary = "";
      this._argsDescription = undefined;
      this._enablePositionalOptions = false;
      this._passThroughOptions = false;
      this._lifeCycleHooks = {};
      this._showHelpAfterError = false;
      this._showSuggestionAfterError = true;
      this._savedState = null;
      this._outputConfiguration = {
        writeOut: (str) => process2.stdout.write(str),
        writeErr: (str) => process2.stderr.write(str),
        outputError: (str, write) => write(str),
        getOutHelpWidth: () => process2.stdout.isTTY ? process2.stdout.columns : undefined,
        getErrHelpWidth: () => process2.stderr.isTTY ? process2.stderr.columns : undefined,
        getOutHasColors: () => useColor() ?? (process2.stdout.isTTY && process2.stdout.hasColors?.()),
        getErrHasColors: () => useColor() ?? (process2.stderr.isTTY && process2.stderr.hasColors?.()),
        stripColor: (str) => stripColor(str)
      };
      this._hidden = false;
      this._helpOption = undefined;
      this._addImplicitHelpCommand = undefined;
      this._helpCommand = undefined;
      this._helpConfiguration = {};
    }
    copyInheritedSettings(sourceCommand) {
      this._outputConfiguration = sourceCommand._outputConfiguration;
      this._helpOption = sourceCommand._helpOption;
      this._helpCommand = sourceCommand._helpCommand;
      this._helpConfiguration = sourceCommand._helpConfiguration;
      this._exitCallback = sourceCommand._exitCallback;
      this._storeOptionsAsProperties = sourceCommand._storeOptionsAsProperties;
      this._combineFlagAndOptionalValue = sourceCommand._combineFlagAndOptionalValue;
      this._allowExcessArguments = sourceCommand._allowExcessArguments;
      this._enablePositionalOptions = sourceCommand._enablePositionalOptions;
      this._showHelpAfterError = sourceCommand._showHelpAfterError;
      this._showSuggestionAfterError = sourceCommand._showSuggestionAfterError;
      return this;
    }
    _getCommandAndAncestors() {
      const result = [];
      for (let command = this;command; command = command.parent) {
        result.push(command);
      }
      return result;
    }
    command(nameAndArgs, actionOptsOrExecDesc, execOpts) {
      let desc = actionOptsOrExecDesc;
      let opts = execOpts;
      if (typeof desc === "object" && desc !== null) {
        opts = desc;
        desc = null;
      }
      opts = opts || {};
      const [, name, args] = nameAndArgs.match(/([^ ]+) *(.*)/);
      const cmd = this.createCommand(name);
      if (desc) {
        cmd.description(desc);
        cmd._executableHandler = true;
      }
      if (opts.isDefault)
        this._defaultCommandName = cmd._name;
      cmd._hidden = !!(opts.noHelp || opts.hidden);
      cmd._executableFile = opts.executableFile || null;
      if (args)
        cmd.arguments(args);
      this._registerCommand(cmd);
      cmd.parent = this;
      cmd.copyInheritedSettings(this);
      if (desc)
        return this;
      return cmd;
    }
    createCommand(name) {
      return new Command(name);
    }
    createHelp() {
      return Object.assign(new Help, this.configureHelp());
    }
    configureHelp(configuration) {
      if (configuration === undefined)
        return this._helpConfiguration;
      this._helpConfiguration = configuration;
      return this;
    }
    configureOutput(configuration) {
      if (configuration === undefined)
        return this._outputConfiguration;
      Object.assign(this._outputConfiguration, configuration);
      return this;
    }
    showHelpAfterError(displayHelp = true) {
      if (typeof displayHelp !== "string")
        displayHelp = !!displayHelp;
      this._showHelpAfterError = displayHelp;
      return this;
    }
    showSuggestionAfterError(displaySuggestion = true) {
      this._showSuggestionAfterError = !!displaySuggestion;
      return this;
    }
    addCommand(cmd, opts) {
      if (!cmd._name) {
        throw new Error(`Command passed to .addCommand() must have a name
- specify the name in Command constructor or using .name()`);
      }
      opts = opts || {};
      if (opts.isDefault)
        this._defaultCommandName = cmd._name;
      if (opts.noHelp || opts.hidden)
        cmd._hidden = true;
      this._registerCommand(cmd);
      cmd.parent = this;
      cmd._checkForBrokenPassThrough();
      return this;
    }
    createArgument(name, description) {
      return new Argument(name, description);
    }
    argument(name, description, fn, defaultValue) {
      const argument = this.createArgument(name, description);
      if (typeof fn === "function") {
        argument.default(defaultValue).argParser(fn);
      } else {
        argument.default(fn);
      }
      this.addArgument(argument);
      return this;
    }
    arguments(names) {
      names.trim().split(/ +/).forEach((detail) => {
        this.argument(detail);
      });
      return this;
    }
    addArgument(argument) {
      const previousArgument = this.registeredArguments.slice(-1)[0];
      if (previousArgument && previousArgument.variadic) {
        throw new Error(`only the last argument can be variadic '${previousArgument.name()}'`);
      }
      if (argument.required && argument.defaultValue !== undefined && argument.parseArg === undefined) {
        throw new Error(`a default value for a required argument is never used: '${argument.name()}'`);
      }
      this.registeredArguments.push(argument);
      return this;
    }
    helpCommand(enableOrNameAndArgs, description) {
      if (typeof enableOrNameAndArgs === "boolean") {
        this._addImplicitHelpCommand = enableOrNameAndArgs;
        return this;
      }
      enableOrNameAndArgs = enableOrNameAndArgs ?? "help [command]";
      const [, helpName, helpArgs] = enableOrNameAndArgs.match(/([^ ]+) *(.*)/);
      const helpDescription = description ?? "display help for command";
      const helpCommand = this.createCommand(helpName);
      helpCommand.helpOption(false);
      if (helpArgs)
        helpCommand.arguments(helpArgs);
      if (helpDescription)
        helpCommand.description(helpDescription);
      this._addImplicitHelpCommand = true;
      this._helpCommand = helpCommand;
      return this;
    }
    addHelpCommand(helpCommand, deprecatedDescription) {
      if (typeof helpCommand !== "object") {
        this.helpCommand(helpCommand, deprecatedDescription);
        return this;
      }
      this._addImplicitHelpCommand = true;
      this._helpCommand = helpCommand;
      return this;
    }
    _getHelpCommand() {
      const hasImplicitHelpCommand = this._addImplicitHelpCommand ?? (this.commands.length && !this._actionHandler && !this._findCommand("help"));
      if (hasImplicitHelpCommand) {
        if (this._helpCommand === undefined) {
          this.helpCommand(undefined, undefined);
        }
        return this._helpCommand;
      }
      return null;
    }
    hook(event, listener) {
      const allowedValues = ["preSubcommand", "preAction", "postAction"];
      if (!allowedValues.includes(event)) {
        throw new Error(`Unexpected value for event passed to hook : '${event}'.
Expecting one of '${allowedValues.join("', '")}'`);
      }
      if (this._lifeCycleHooks[event]) {
        this._lifeCycleHooks[event].push(listener);
      } else {
        this._lifeCycleHooks[event] = [listener];
      }
      return this;
    }
    exitOverride(fn) {
      if (fn) {
        this._exitCallback = fn;
      } else {
        this._exitCallback = (err) => {
          if (err.code !== "commander.executeSubCommandAsync") {
            throw err;
          } else {}
        };
      }
      return this;
    }
    _exit(exitCode, code, message) {
      if (this._exitCallback) {
        this._exitCallback(new CommanderError(exitCode, code, message));
      }
      process2.exit(exitCode);
    }
    action(fn) {
      const listener = (args) => {
        const expectedArgsCount = this.registeredArguments.length;
        const actionArgs = args.slice(0, expectedArgsCount);
        if (this._storeOptionsAsProperties) {
          actionArgs[expectedArgsCount] = this;
        } else {
          actionArgs[expectedArgsCount] = this.opts();
        }
        actionArgs.push(this);
        return fn.apply(this, actionArgs);
      };
      this._actionHandler = listener;
      return this;
    }
    createOption(flags, description) {
      return new Option(flags, description);
    }
    _callParseArg(target, value, previous, invalidArgumentMessage) {
      try {
        return target.parseArg(value, previous);
      } catch (err) {
        if (err.code === "commander.invalidArgument") {
          const message = `${invalidArgumentMessage} ${err.message}`;
          this.error(message, { exitCode: err.exitCode, code: err.code });
        }
        throw err;
      }
    }
    _registerOption(option) {
      const matchingOption = option.short && this._findOption(option.short) || option.long && this._findOption(option.long);
      if (matchingOption) {
        const matchingFlag = option.long && this._findOption(option.long) ? option.long : option.short;
        throw new Error(`Cannot add option '${option.flags}'${this._name && ` to command '${this._name}'`} due to conflicting flag '${matchingFlag}'
-  already used by option '${matchingOption.flags}'`);
      }
      this.options.push(option);
    }
    _registerCommand(command) {
      const knownBy = (cmd) => {
        return [cmd.name()].concat(cmd.aliases());
      };
      const alreadyUsed = knownBy(command).find((name) => this._findCommand(name));
      if (alreadyUsed) {
        const existingCmd = knownBy(this._findCommand(alreadyUsed)).join("|");
        const newCmd = knownBy(command).join("|");
        throw new Error(`cannot add command '${newCmd}' as already have command '${existingCmd}'`);
      }
      this.commands.push(command);
    }
    addOption(option) {
      this._registerOption(option);
      const oname = option.name();
      const name = option.attributeName();
      if (option.negate) {
        const positiveLongFlag = option.long.replace(/^--no-/, "--");
        if (!this._findOption(positiveLongFlag)) {
          this.setOptionValueWithSource(name, option.defaultValue === undefined ? true : option.defaultValue, "default");
        }
      } else if (option.defaultValue !== undefined) {
        this.setOptionValueWithSource(name, option.defaultValue, "default");
      }
      const handleOptionValue = (val, invalidValueMessage, valueSource) => {
        if (val == null && option.presetArg !== undefined) {
          val = option.presetArg;
        }
        const oldValue = this.getOptionValue(name);
        if (val !== null && option.parseArg) {
          val = this._callParseArg(option, val, oldValue, invalidValueMessage);
        } else if (val !== null && option.variadic) {
          val = option._concatValue(val, oldValue);
        }
        if (val == null) {
          if (option.negate) {
            val = false;
          } else if (option.isBoolean() || option.optional) {
            val = true;
          } else {
            val = "";
          }
        }
        this.setOptionValueWithSource(name, val, valueSource);
      };
      this.on("option:" + oname, (val) => {
        const invalidValueMessage = `error: option '${option.flags}' argument '${val}' is invalid.`;
        handleOptionValue(val, invalidValueMessage, "cli");
      });
      if (option.envVar) {
        this.on("optionEnv:" + oname, (val) => {
          const invalidValueMessage = `error: option '${option.flags}' value '${val}' from env '${option.envVar}' is invalid.`;
          handleOptionValue(val, invalidValueMessage, "env");
        });
      }
      return this;
    }
    _optionEx(config, flags, description, fn, defaultValue) {
      if (typeof flags === "object" && flags instanceof Option) {
        throw new Error("To add an Option object use addOption() instead of option() or requiredOption()");
      }
      const option = this.createOption(flags, description);
      option.makeOptionMandatory(!!config.mandatory);
      if (typeof fn === "function") {
        option.default(defaultValue).argParser(fn);
      } else if (fn instanceof RegExp) {
        const regex = fn;
        fn = (val, def) => {
          const m = regex.exec(val);
          return m ? m[0] : def;
        };
        option.default(defaultValue).argParser(fn);
      } else {
        option.default(fn);
      }
      return this.addOption(option);
    }
    option(flags, description, parseArg, defaultValue) {
      return this._optionEx({}, flags, description, parseArg, defaultValue);
    }
    requiredOption(flags, description, parseArg, defaultValue) {
      return this._optionEx({ mandatory: true }, flags, description, parseArg, defaultValue);
    }
    combineFlagAndOptionalValue(combine = true) {
      this._combineFlagAndOptionalValue = !!combine;
      return this;
    }
    allowUnknownOption(allowUnknown = true) {
      this._allowUnknownOption = !!allowUnknown;
      return this;
    }
    allowExcessArguments(allowExcess = true) {
      this._allowExcessArguments = !!allowExcess;
      return this;
    }
    enablePositionalOptions(positional = true) {
      this._enablePositionalOptions = !!positional;
      return this;
    }
    passThroughOptions(passThrough = true) {
      this._passThroughOptions = !!passThrough;
      this._checkForBrokenPassThrough();
      return this;
    }
    _checkForBrokenPassThrough() {
      if (this.parent && this._passThroughOptions && !this.parent._enablePositionalOptions) {
        throw new Error(`passThroughOptions cannot be used for '${this._name}' without turning on enablePositionalOptions for parent command(s)`);
      }
    }
    storeOptionsAsProperties(storeAsProperties = true) {
      if (this.options.length) {
        throw new Error("call .storeOptionsAsProperties() before adding options");
      }
      if (Object.keys(this._optionValues).length) {
        throw new Error("call .storeOptionsAsProperties() before setting option values");
      }
      this._storeOptionsAsProperties = !!storeAsProperties;
      return this;
    }
    getOptionValue(key) {
      if (this._storeOptionsAsProperties) {
        return this[key];
      }
      return this._optionValues[key];
    }
    setOptionValue(key, value) {
      return this.setOptionValueWithSource(key, value, undefined);
    }
    setOptionValueWithSource(key, value, source) {
      if (this._storeOptionsAsProperties) {
        this[key] = value;
      } else {
        this._optionValues[key] = value;
      }
      this._optionValueSources[key] = source;
      return this;
    }
    getOptionValueSource(key) {
      return this._optionValueSources[key];
    }
    getOptionValueSourceWithGlobals(key) {
      let source;
      this._getCommandAndAncestors().forEach((cmd) => {
        if (cmd.getOptionValueSource(key) !== undefined) {
          source = cmd.getOptionValueSource(key);
        }
      });
      return source;
    }
    _prepareUserArgs(argv, parseOptions) {
      if (argv !== undefined && !Array.isArray(argv)) {
        throw new Error("first parameter to parse must be array or undefined");
      }
      parseOptions = parseOptions || {};
      if (argv === undefined && parseOptions.from === undefined) {
        if (process2.versions?.electron) {
          parseOptions.from = "electron";
        }
        const execArgv = process2.execArgv ?? [];
        if (execArgv.includes("-e") || execArgv.includes("--eval") || execArgv.includes("-p") || execArgv.includes("--print")) {
          parseOptions.from = "eval";
        }
      }
      if (argv === undefined) {
        argv = process2.argv;
      }
      this.rawArgs = argv.slice();
      let userArgs;
      switch (parseOptions.from) {
        case undefined:
        case "node":
          this._scriptPath = argv[1];
          userArgs = argv.slice(2);
          break;
        case "electron":
          if (process2.defaultApp) {
            this._scriptPath = argv[1];
            userArgs = argv.slice(2);
          } else {
            userArgs = argv.slice(1);
          }
          break;
        case "user":
          userArgs = argv.slice(0);
          break;
        case "eval":
          userArgs = argv.slice(1);
          break;
        default:
          throw new Error(`unexpected parse option { from: '${parseOptions.from}' }`);
      }
      if (!this._name && this._scriptPath)
        this.nameFromFilename(this._scriptPath);
      this._name = this._name || "program";
      return userArgs;
    }
    parse(argv, parseOptions) {
      this._prepareForParse();
      const userArgs = this._prepareUserArgs(argv, parseOptions);
      this._parseCommand([], userArgs);
      return this;
    }
    async parseAsync(argv, parseOptions) {
      this._prepareForParse();
      const userArgs = this._prepareUserArgs(argv, parseOptions);
      await this._parseCommand([], userArgs);
      return this;
    }
    _prepareForParse() {
      if (this._savedState === null) {
        this.saveStateBeforeParse();
      } else {
        this.restoreStateBeforeParse();
      }
    }
    saveStateBeforeParse() {
      this._savedState = {
        _name: this._name,
        _optionValues: { ...this._optionValues },
        _optionValueSources: { ...this._optionValueSources }
      };
    }
    restoreStateBeforeParse() {
      if (this._storeOptionsAsProperties)
        throw new Error(`Can not call parse again when storeOptionsAsProperties is true.
- either make a new Command for each call to parse, or stop storing options as properties`);
      this._name = this._savedState._name;
      this._scriptPath = null;
      this.rawArgs = [];
      this._optionValues = { ...this._savedState._optionValues };
      this._optionValueSources = { ...this._savedState._optionValueSources };
      this.args = [];
      this.processedArgs = [];
    }
    _checkForMissingExecutable(executableFile, executableDir, subcommandName) {
      if (fs.existsSync(executableFile))
        return;
      const executableDirMessage = executableDir ? `searched for local subcommand relative to directory '${executableDir}'` : "no directory for search for local subcommand, use .executableDir() to supply a custom directory";
      const executableMissing = `'${executableFile}' does not exist
 - if '${subcommandName}' is not meant to be an executable command, remove description parameter from '.command()' and use '.description()' instead
 - if the default executable name is not suitable, use the executableFile option to supply a custom name or path
 - ${executableDirMessage}`;
      throw new Error(executableMissing);
    }
    _executeSubCommand(subcommand, args) {
      args = args.slice();
      let launchWithNode = false;
      const sourceExt = [".js", ".ts", ".tsx", ".mjs", ".cjs"];
      function findFile(baseDir, baseName) {
        const localBin = path.resolve(baseDir, baseName);
        if (fs.existsSync(localBin))
          return localBin;
        if (sourceExt.includes(path.extname(baseName)))
          return;
        const foundExt = sourceExt.find((ext) => fs.existsSync(`${localBin}${ext}`));
        if (foundExt)
          return `${localBin}${foundExt}`;
        return;
      }
      this._checkForMissingMandatoryOptions();
      this._checkForConflictingOptions();
      let executableFile = subcommand._executableFile || `${this._name}-${subcommand._name}`;
      let executableDir = this._executableDir || "";
      if (this._scriptPath) {
        let resolvedScriptPath;
        try {
          resolvedScriptPath = fs.realpathSync(this._scriptPath);
        } catch {
          resolvedScriptPath = this._scriptPath;
        }
        executableDir = path.resolve(path.dirname(resolvedScriptPath), executableDir);
      }
      if (executableDir) {
        let localFile = findFile(executableDir, executableFile);
        if (!localFile && !subcommand._executableFile && this._scriptPath) {
          const legacyName = path.basename(this._scriptPath, path.extname(this._scriptPath));
          if (legacyName !== this._name) {
            localFile = findFile(executableDir, `${legacyName}-${subcommand._name}`);
          }
        }
        executableFile = localFile || executableFile;
      }
      launchWithNode = sourceExt.includes(path.extname(executableFile));
      let proc;
      if (process2.platform !== "win32") {
        if (launchWithNode) {
          args.unshift(executableFile);
          args = incrementNodeInspectorPort(process2.execArgv).concat(args);
          proc = childProcess.spawn(process2.argv[0], args, { stdio: "inherit" });
        } else {
          proc = childProcess.spawn(executableFile, args, { stdio: "inherit" });
        }
      } else {
        this._checkForMissingExecutable(executableFile, executableDir, subcommand._name);
        args.unshift(executableFile);
        args = incrementNodeInspectorPort(process2.execArgv).concat(args);
        proc = childProcess.spawn(process2.execPath, args, { stdio: "inherit" });
      }
      if (!proc.killed) {
        const signals = ["SIGUSR1", "SIGUSR2", "SIGTERM", "SIGINT", "SIGHUP"];
        signals.forEach((signal) => {
          process2.on(signal, () => {
            if (proc.killed === false && proc.exitCode === null) {
              proc.kill(signal);
            }
          });
        });
      }
      const exitCallback = this._exitCallback;
      proc.on("close", (code) => {
        code = code ?? 1;
        if (!exitCallback) {
          process2.exit(code);
        } else {
          exitCallback(new CommanderError(code, "commander.executeSubCommandAsync", "(close)"));
        }
      });
      proc.on("error", (err) => {
        if (err.code === "ENOENT") {
          this._checkForMissingExecutable(executableFile, executableDir, subcommand._name);
        } else if (err.code === "EACCES") {
          throw new Error(`'${executableFile}' not executable`);
        }
        if (!exitCallback) {
          process2.exit(1);
        } else {
          const wrappedError = new CommanderError(1, "commander.executeSubCommandAsync", "(error)");
          wrappedError.nestedError = err;
          exitCallback(wrappedError);
        }
      });
      this.runningCommand = proc;
    }
    _dispatchSubcommand(commandName, operands, unknown) {
      const subCommand = this._findCommand(commandName);
      if (!subCommand)
        this.help({ error: true });
      subCommand._prepareForParse();
      let promiseChain;
      promiseChain = this._chainOrCallSubCommandHook(promiseChain, subCommand, "preSubcommand");
      promiseChain = this._chainOrCall(promiseChain, () => {
        if (subCommand._executableHandler) {
          this._executeSubCommand(subCommand, operands.concat(unknown));
        } else {
          return subCommand._parseCommand(operands, unknown);
        }
      });
      return promiseChain;
    }
    _dispatchHelpCommand(subcommandName) {
      if (!subcommandName) {
        this.help();
      }
      const subCommand = this._findCommand(subcommandName);
      if (subCommand && !subCommand._executableHandler) {
        subCommand.help();
      }
      return this._dispatchSubcommand(subcommandName, [], [this._getHelpOption()?.long ?? this._getHelpOption()?.short ?? "--help"]);
    }
    _checkNumberOfArguments() {
      this.registeredArguments.forEach((arg, i) => {
        if (arg.required && this.args[i] == null) {
          this.missingArgument(arg.name());
        }
      });
      if (this.registeredArguments.length > 0 && this.registeredArguments[this.registeredArguments.length - 1].variadic) {
        return;
      }
      if (this.args.length > this.registeredArguments.length) {
        this._excessArguments(this.args);
      }
    }
    _processArguments() {
      const myParseArg = (argument, value, previous) => {
        let parsedValue = value;
        if (value !== null && argument.parseArg) {
          const invalidValueMessage = `error: command-argument value '${value}' is invalid for argument '${argument.name()}'.`;
          parsedValue = this._callParseArg(argument, value, previous, invalidValueMessage);
        }
        return parsedValue;
      };
      this._checkNumberOfArguments();
      const processedArgs = [];
      this.registeredArguments.forEach((declaredArg, index) => {
        let value = declaredArg.defaultValue;
        if (declaredArg.variadic) {
          if (index < this.args.length) {
            value = this.args.slice(index);
            if (declaredArg.parseArg) {
              value = value.reduce((processed, v) => {
                return myParseArg(declaredArg, v, processed);
              }, declaredArg.defaultValue);
            }
          } else if (value === undefined) {
            value = [];
          }
        } else if (index < this.args.length) {
          value = this.args[index];
          if (declaredArg.parseArg) {
            value = myParseArg(declaredArg, value, declaredArg.defaultValue);
          }
        }
        processedArgs[index] = value;
      });
      this.processedArgs = processedArgs;
    }
    _chainOrCall(promise, fn) {
      if (promise && promise.then && typeof promise.then === "function") {
        return promise.then(() => fn());
      }
      return fn();
    }
    _chainOrCallHooks(promise, event) {
      let result = promise;
      const hooks = [];
      this._getCommandAndAncestors().reverse().filter((cmd) => cmd._lifeCycleHooks[event] !== undefined).forEach((hookedCommand) => {
        hookedCommand._lifeCycleHooks[event].forEach((callback) => {
          hooks.push({ hookedCommand, callback });
        });
      });
      if (event === "postAction") {
        hooks.reverse();
      }
      hooks.forEach((hookDetail) => {
        result = this._chainOrCall(result, () => {
          return hookDetail.callback(hookDetail.hookedCommand, this);
        });
      });
      return result;
    }
    _chainOrCallSubCommandHook(promise, subCommand, event) {
      let result = promise;
      if (this._lifeCycleHooks[event] !== undefined) {
        this._lifeCycleHooks[event].forEach((hook) => {
          result = this._chainOrCall(result, () => {
            return hook(this, subCommand);
          });
        });
      }
      return result;
    }
    _parseCommand(operands, unknown) {
      const parsed = this.parseOptions(unknown);
      this._parseOptionsEnv();
      this._parseOptionsImplied();
      operands = operands.concat(parsed.operands);
      unknown = parsed.unknown;
      this.args = operands.concat(unknown);
      if (operands && this._findCommand(operands[0])) {
        return this._dispatchSubcommand(operands[0], operands.slice(1), unknown);
      }
      if (this._getHelpCommand() && operands[0] === this._getHelpCommand().name()) {
        return this._dispatchHelpCommand(operands[1]);
      }
      if (this._defaultCommandName) {
        this._outputHelpIfRequested(unknown);
        return this._dispatchSubcommand(this._defaultCommandName, operands, unknown);
      }
      if (this.commands.length && this.args.length === 0 && !this._actionHandler && !this._defaultCommandName) {
        this.help({ error: true });
      }
      this._outputHelpIfRequested(parsed.unknown);
      this._checkForMissingMandatoryOptions();
      this._checkForConflictingOptions();
      const checkForUnknownOptions = () => {
        if (parsed.unknown.length > 0) {
          this.unknownOption(parsed.unknown[0]);
        }
      };
      const commandEvent = `command:${this.name()}`;
      if (this._actionHandler) {
        checkForUnknownOptions();
        this._processArguments();
        let promiseChain;
        promiseChain = this._chainOrCallHooks(promiseChain, "preAction");
        promiseChain = this._chainOrCall(promiseChain, () => this._actionHandler(this.processedArgs));
        if (this.parent) {
          promiseChain = this._chainOrCall(promiseChain, () => {
            this.parent.emit(commandEvent, operands, unknown);
          });
        }
        promiseChain = this._chainOrCallHooks(promiseChain, "postAction");
        return promiseChain;
      }
      if (this.parent && this.parent.listenerCount(commandEvent)) {
        checkForUnknownOptions();
        this._processArguments();
        this.parent.emit(commandEvent, operands, unknown);
      } else if (operands.length) {
        if (this._findCommand("*")) {
          return this._dispatchSubcommand("*", operands, unknown);
        }
        if (this.listenerCount("command:*")) {
          this.emit("command:*", operands, unknown);
        } else if (this.commands.length) {
          this.unknownCommand();
        } else {
          checkForUnknownOptions();
          this._processArguments();
        }
      } else if (this.commands.length) {
        checkForUnknownOptions();
        this.help({ error: true });
      } else {
        checkForUnknownOptions();
        this._processArguments();
      }
    }
    _findCommand(name) {
      if (!name)
        return;
      return this.commands.find((cmd) => cmd._name === name || cmd._aliases.includes(name));
    }
    _findOption(arg) {
      return this.options.find((option) => option.is(arg));
    }
    _checkForMissingMandatoryOptions() {
      this._getCommandAndAncestors().forEach((cmd) => {
        cmd.options.forEach((anOption) => {
          if (anOption.mandatory && cmd.getOptionValue(anOption.attributeName()) === undefined) {
            cmd.missingMandatoryOptionValue(anOption);
          }
        });
      });
    }
    _checkForConflictingLocalOptions() {
      const definedNonDefaultOptions = this.options.filter((option) => {
        const optionKey = option.attributeName();
        if (this.getOptionValue(optionKey) === undefined) {
          return false;
        }
        return this.getOptionValueSource(optionKey) !== "default";
      });
      const optionsWithConflicting = definedNonDefaultOptions.filter((option) => option.conflictsWith.length > 0);
      optionsWithConflicting.forEach((option) => {
        const conflictingAndDefined = definedNonDefaultOptions.find((defined) => option.conflictsWith.includes(defined.attributeName()));
        if (conflictingAndDefined) {
          this._conflictingOption(option, conflictingAndDefined);
        }
      });
    }
    _checkForConflictingOptions() {
      this._getCommandAndAncestors().forEach((cmd) => {
        cmd._checkForConflictingLocalOptions();
      });
    }
    parseOptions(argv) {
      const operands = [];
      const unknown = [];
      let dest = operands;
      const args = argv.slice();
      function maybeOption(arg) {
        return arg.length > 1 && arg[0] === "-";
      }
      let activeVariadicOption = null;
      while (args.length) {
        const arg = args.shift();
        if (arg === "--") {
          if (dest === unknown)
            dest.push(arg);
          dest.push(...args);
          break;
        }
        if (activeVariadicOption && !maybeOption(arg)) {
          this.emit(`option:${activeVariadicOption.name()}`, arg);
          continue;
        }
        activeVariadicOption = null;
        if (maybeOption(arg)) {
          const option = this._findOption(arg);
          if (option) {
            if (option.required) {
              const value = args.shift();
              if (value === undefined)
                this.optionMissingArgument(option);
              this.emit(`option:${option.name()}`, value);
            } else if (option.optional) {
              let value = null;
              if (args.length > 0 && !maybeOption(args[0])) {
                value = args.shift();
              }
              this.emit(`option:${option.name()}`, value);
            } else {
              this.emit(`option:${option.name()}`);
            }
            activeVariadicOption = option.variadic ? option : null;
            continue;
          }
        }
        if (arg.length > 2 && arg[0] === "-" && arg[1] !== "-") {
          const option = this._findOption(`-${arg[1]}`);
          if (option) {
            if (option.required || option.optional && this._combineFlagAndOptionalValue) {
              this.emit(`option:${option.name()}`, arg.slice(2));
            } else {
              this.emit(`option:${option.name()}`);
              args.unshift(`-${arg.slice(2)}`);
            }
            continue;
          }
        }
        if (/^--[^=]+=/.test(arg)) {
          const index = arg.indexOf("=");
          const option = this._findOption(arg.slice(0, index));
          if (option && (option.required || option.optional)) {
            this.emit(`option:${option.name()}`, arg.slice(index + 1));
            continue;
          }
        }
        if (maybeOption(arg)) {
          dest = unknown;
        }
        if ((this._enablePositionalOptions || this._passThroughOptions) && operands.length === 0 && unknown.length === 0) {
          if (this._findCommand(arg)) {
            operands.push(arg);
            if (args.length > 0)
              unknown.push(...args);
            break;
          } else if (this._getHelpCommand() && arg === this._getHelpCommand().name()) {
            operands.push(arg);
            if (args.length > 0)
              operands.push(...args);
            break;
          } else if (this._defaultCommandName) {
            unknown.push(arg);
            if (args.length > 0)
              unknown.push(...args);
            break;
          }
        }
        if (this._passThroughOptions) {
          dest.push(arg);
          if (args.length > 0)
            dest.push(...args);
          break;
        }
        dest.push(arg);
      }
      return { operands, unknown };
    }
    opts() {
      if (this._storeOptionsAsProperties) {
        const result = {};
        const len = this.options.length;
        for (let i = 0;i < len; i++) {
          const key = this.options[i].attributeName();
          result[key] = key === this._versionOptionName ? this._version : this[key];
        }
        return result;
      }
      return this._optionValues;
    }
    optsWithGlobals() {
      return this._getCommandAndAncestors().reduce((combinedOptions, cmd) => Object.assign(combinedOptions, cmd.opts()), {});
    }
    error(message, errorOptions) {
      this._outputConfiguration.outputError(`${message}
`, this._outputConfiguration.writeErr);
      if (typeof this._showHelpAfterError === "string") {
        this._outputConfiguration.writeErr(`${this._showHelpAfterError}
`);
      } else if (this._showHelpAfterError) {
        this._outputConfiguration.writeErr(`
`);
        this.outputHelp({ error: true });
      }
      const config = errorOptions || {};
      const exitCode = config.exitCode || 1;
      const code = config.code || "commander.error";
      this._exit(exitCode, code, message);
    }
    _parseOptionsEnv() {
      this.options.forEach((option) => {
        if (option.envVar && option.envVar in process2.env) {
          const optionKey = option.attributeName();
          if (this.getOptionValue(optionKey) === undefined || ["default", "config", "env"].includes(this.getOptionValueSource(optionKey))) {
            if (option.required || option.optional) {
              this.emit(`optionEnv:${option.name()}`, process2.env[option.envVar]);
            } else {
              this.emit(`optionEnv:${option.name()}`);
            }
          }
        }
      });
    }
    _parseOptionsImplied() {
      const dualHelper = new DualOptions(this.options);
      const hasCustomOptionValue = (optionKey) => {
        return this.getOptionValue(optionKey) !== undefined && !["default", "implied"].includes(this.getOptionValueSource(optionKey));
      };
      this.options.filter((option) => option.implied !== undefined && hasCustomOptionValue(option.attributeName()) && dualHelper.valueFromOption(this.getOptionValue(option.attributeName()), option)).forEach((option) => {
        Object.keys(option.implied).filter((impliedKey) => !hasCustomOptionValue(impliedKey)).forEach((impliedKey) => {
          this.setOptionValueWithSource(impliedKey, option.implied[impliedKey], "implied");
        });
      });
    }
    missingArgument(name) {
      const message = `error: missing required argument '${name}'`;
      this.error(message, { code: "commander.missingArgument" });
    }
    optionMissingArgument(option) {
      const message = `error: option '${option.flags}' argument missing`;
      this.error(message, { code: "commander.optionMissingArgument" });
    }
    missingMandatoryOptionValue(option) {
      const message = `error: required option '${option.flags}' not specified`;
      this.error(message, { code: "commander.missingMandatoryOptionValue" });
    }
    _conflictingOption(option, conflictingOption) {
      const findBestOptionFromValue = (option2) => {
        const optionKey = option2.attributeName();
        const optionValue = this.getOptionValue(optionKey);
        const negativeOption = this.options.find((target) => target.negate && optionKey === target.attributeName());
        const positiveOption = this.options.find((target) => !target.negate && optionKey === target.attributeName());
        if (negativeOption && (negativeOption.presetArg === undefined && optionValue === false || negativeOption.presetArg !== undefined && optionValue === negativeOption.presetArg)) {
          return negativeOption;
        }
        return positiveOption || option2;
      };
      const getErrorMessage = (option2) => {
        const bestOption = findBestOptionFromValue(option2);
        const optionKey = bestOption.attributeName();
        const source = this.getOptionValueSource(optionKey);
        if (source === "env") {
          return `environment variable '${bestOption.envVar}'`;
        }
        return `option '${bestOption.flags}'`;
      };
      const message = `error: ${getErrorMessage(option)} cannot be used with ${getErrorMessage(conflictingOption)}`;
      this.error(message, { code: "commander.conflictingOption" });
    }
    unknownOption(flag) {
      if (this._allowUnknownOption)
        return;
      let suggestion = "";
      if (flag.startsWith("--") && this._showSuggestionAfterError) {
        let candidateFlags = [];
        let command = this;
        do {
          const moreFlags = command.createHelp().visibleOptions(command).filter((option) => option.long).map((option) => option.long);
          candidateFlags = candidateFlags.concat(moreFlags);
          command = command.parent;
        } while (command && !command._enablePositionalOptions);
        suggestion = suggestSimilar(flag, candidateFlags);
      }
      const message = `error: unknown option '${flag}'${suggestion}`;
      this.error(message, { code: "commander.unknownOption" });
    }
    _excessArguments(receivedArgs) {
      if (this._allowExcessArguments)
        return;
      const expected = this.registeredArguments.length;
      const s = expected === 1 ? "" : "s";
      const forSubcommand = this.parent ? ` for '${this.name()}'` : "";
      const message = `error: too many arguments${forSubcommand}. Expected ${expected} argument${s} but got ${receivedArgs.length}.`;
      this.error(message, { code: "commander.excessArguments" });
    }
    unknownCommand() {
      const unknownName = this.args[0];
      let suggestion = "";
      if (this._showSuggestionAfterError) {
        const candidateNames = [];
        this.createHelp().visibleCommands(this).forEach((command) => {
          candidateNames.push(command.name());
          if (command.alias())
            candidateNames.push(command.alias());
        });
        suggestion = suggestSimilar(unknownName, candidateNames);
      }
      const message = `error: unknown command '${unknownName}'${suggestion}`;
      this.error(message, { code: "commander.unknownCommand" });
    }
    version(str, flags, description) {
      if (str === undefined)
        return this._version;
      this._version = str;
      flags = flags || "-V, --version";
      description = description || "output the version number";
      const versionOption = this.createOption(flags, description);
      this._versionOptionName = versionOption.attributeName();
      this._registerOption(versionOption);
      this.on("option:" + versionOption.name(), () => {
        this._outputConfiguration.writeOut(`${str}
`);
        this._exit(0, "commander.version", str);
      });
      return this;
    }
    description(str, argsDescription) {
      if (str === undefined && argsDescription === undefined)
        return this._description;
      this._description = str;
      if (argsDescription) {
        this._argsDescription = argsDescription;
      }
      return this;
    }
    summary(str) {
      if (str === undefined)
        return this._summary;
      this._summary = str;
      return this;
    }
    alias(alias) {
      if (alias === undefined)
        return this._aliases[0];
      let command = this;
      if (this.commands.length !== 0 && this.commands[this.commands.length - 1]._executableHandler) {
        command = this.commands[this.commands.length - 1];
      }
      if (alias === command._name)
        throw new Error("Command alias can't be the same as its name");
      const matchingCommand = this.parent?._findCommand(alias);
      if (matchingCommand) {
        const existingCmd = [matchingCommand.name()].concat(matchingCommand.aliases()).join("|");
        throw new Error(`cannot add alias '${alias}' to command '${this.name()}' as already have command '${existingCmd}'`);
      }
      command._aliases.push(alias);
      return this;
    }
    aliases(aliases) {
      if (aliases === undefined)
        return this._aliases;
      aliases.forEach((alias) => this.alias(alias));
      return this;
    }
    usage(str) {
      if (str === undefined) {
        if (this._usage)
          return this._usage;
        const args = this.registeredArguments.map((arg) => {
          return humanReadableArgName(arg);
        });
        return [].concat(this.options.length || this._helpOption !== null ? "[options]" : [], this.commands.length ? "[command]" : [], this.registeredArguments.length ? args : []).join(" ");
      }
      this._usage = str;
      return this;
    }
    name(str) {
      if (str === undefined)
        return this._name;
      this._name = str;
      return this;
    }
    nameFromFilename(filename) {
      this._name = path.basename(filename, path.extname(filename));
      return this;
    }
    executableDir(path2) {
      if (path2 === undefined)
        return this._executableDir;
      this._executableDir = path2;
      return this;
    }
    helpInformation(contextOptions) {
      const helper = this.createHelp();
      const context = this._getOutputContext(contextOptions);
      helper.prepareContext({
        error: context.error,
        helpWidth: context.helpWidth,
        outputHasColors: context.hasColors
      });
      const text = helper.formatHelp(this, helper);
      if (context.hasColors)
        return text;
      return this._outputConfiguration.stripColor(text);
    }
    _getOutputContext(contextOptions) {
      contextOptions = contextOptions || {};
      const error = !!contextOptions.error;
      let baseWrite;
      let hasColors;
      let helpWidth;
      if (error) {
        baseWrite = (str) => this._outputConfiguration.writeErr(str);
        hasColors = this._outputConfiguration.getErrHasColors();
        helpWidth = this._outputConfiguration.getErrHelpWidth();
      } else {
        baseWrite = (str) => this._outputConfiguration.writeOut(str);
        hasColors = this._outputConfiguration.getOutHasColors();
        helpWidth = this._outputConfiguration.getOutHelpWidth();
      }
      const write = (str) => {
        if (!hasColors)
          str = this._outputConfiguration.stripColor(str);
        return baseWrite(str);
      };
      return { error, write, hasColors, helpWidth };
    }
    outputHelp(contextOptions) {
      let deprecatedCallback;
      if (typeof contextOptions === "function") {
        deprecatedCallback = contextOptions;
        contextOptions = undefined;
      }
      const outputContext = this._getOutputContext(contextOptions);
      const eventContext = {
        error: outputContext.error,
        write: outputContext.write,
        command: this
      };
      this._getCommandAndAncestors().reverse().forEach((command) => command.emit("beforeAllHelp", eventContext));
      this.emit("beforeHelp", eventContext);
      let helpInformation = this.helpInformation({ error: outputContext.error });
      if (deprecatedCallback) {
        helpInformation = deprecatedCallback(helpInformation);
        if (typeof helpInformation !== "string" && !Buffer.isBuffer(helpInformation)) {
          throw new Error("outputHelp callback must return a string or a Buffer");
        }
      }
      outputContext.write(helpInformation);
      if (this._getHelpOption()?.long) {
        this.emit(this._getHelpOption().long);
      }
      this.emit("afterHelp", eventContext);
      this._getCommandAndAncestors().forEach((command) => command.emit("afterAllHelp", eventContext));
    }
    helpOption(flags, description) {
      if (typeof flags === "boolean") {
        if (flags) {
          this._helpOption = this._helpOption ?? undefined;
        } else {
          this._helpOption = null;
        }
        return this;
      }
      flags = flags ?? "-h, --help";
      description = description ?? "display help for command";
      this._helpOption = this.createOption(flags, description);
      return this;
    }
    _getHelpOption() {
      if (this._helpOption === undefined) {
        this.helpOption(undefined, undefined);
      }
      return this._helpOption;
    }
    addHelpOption(option) {
      this._helpOption = option;
      return this;
    }
    help(contextOptions) {
      this.outputHelp(contextOptions);
      let exitCode = Number(process2.exitCode ?? 0);
      if (exitCode === 0 && contextOptions && typeof contextOptions !== "function" && contextOptions.error) {
        exitCode = 1;
      }
      this._exit(exitCode, "commander.help", "(outputHelp)");
    }
    addHelpText(position, text) {
      const allowedValues = ["beforeAll", "before", "after", "afterAll"];
      if (!allowedValues.includes(position)) {
        throw new Error(`Unexpected value for position to addHelpText.
Expecting one of '${allowedValues.join("', '")}'`);
      }
      const helpEvent = `${position}Help`;
      this.on(helpEvent, (context) => {
        let helpStr;
        if (typeof text === "function") {
          helpStr = text({ error: context.error, command: context.command });
        } else {
          helpStr = text;
        }
        if (helpStr) {
          context.write(`${helpStr}
`);
        }
      });
      return this;
    }
    _outputHelpIfRequested(args) {
      const helpOption = this._getHelpOption();
      const helpRequested = helpOption && args.find((arg) => helpOption.is(arg));
      if (helpRequested) {
        this.outputHelp();
        this._exit(0, "commander.helpDisplayed", "(outputHelp)");
      }
    }
  }
  function incrementNodeInspectorPort(args) {
    return args.map((arg) => {
      if (!arg.startsWith("--inspect")) {
        return arg;
      }
      let debugOption;
      let debugHost = "127.0.0.1";
      let debugPort = "9229";
      let match;
      if ((match = arg.match(/^(--inspect(-brk)?)$/)) !== null) {
        debugOption = match[1];
      } else if ((match = arg.match(/^(--inspect(-brk|-port)?)=([^:]+)$/)) !== null) {
        debugOption = match[1];
        if (/^\d+$/.test(match[3])) {
          debugPort = match[3];
        } else {
          debugHost = match[3];
        }
      } else if ((match = arg.match(/^(--inspect(-brk|-port)?)=([^:]+):(\d+)$/)) !== null) {
        debugOption = match[1];
        debugHost = match[3];
        debugPort = match[4];
      }
      if (debugOption && debugPort !== "0") {
        return `${debugOption}=${debugHost}:${parseInt(debugPort) + 1}`;
      }
      return arg;
    });
  }
  function useColor() {
    if (process2.env.NO_COLOR || process2.env.FORCE_COLOR === "0" || process2.env.FORCE_COLOR === "false")
      return false;
    if (process2.env.FORCE_COLOR || process2.env.CLICOLOR_FORCE !== undefined)
      return true;
    return;
  }
  exports.Command = Command;
  exports.useColor = useColor;
});

// node_modules/.bun/commander@13.1.0/node_modules/commander/index.js
var require_commander = __commonJS((exports) => {
  var { Argument } = require_argument();
  var { Command } = require_command();
  var { CommanderError, InvalidArgumentError } = require_error();
  var { Help } = require_help();
  var { Option } = require_option();
  exports.program = new Command;
  exports.createCommand = (name) => new Command(name);
  exports.createOption = (flags, description) => new Option(flags, description);
  exports.createArgument = (name, description) => new Argument(name, description);
  exports.Command = Command;
  exports.Option = Option;
  exports.Argument = Argument;
  exports.Help = Help;
  exports.CommanderError = CommanderError;
  exports.InvalidArgumentError = InvalidArgumentError;
  exports.InvalidOptionArgumentError = InvalidArgumentError;
});

// node_modules/.bun/@commander-js+extra-typings@14.0.0+1cee9bec6fc8d393/node_modules/@commander-js/extra-typings/index.js
var require_extra_typings = __commonJS((exports, module) => {
  var commander = require_commander();
  exports = module.exports = {};
  exports.program = new commander.Command;
  exports.Argument = commander.Argument;
  exports.Command = commander.Command;
  exports.CommanderError = commander.CommanderError;
  exports.Help = commander.Help;
  exports.InvalidArgumentError = commander.InvalidArgumentError;
  exports.InvalidOptionArgumentError = commander.InvalidArgumentError;
  exports.Option = commander.Option;
  exports.createCommand = (name) => new commander.Command(name);
  exports.createOption = (flags, description) => new commander.Option(flags, description);
  exports.createArgument = (name, description) => new commander.Argument(name, description);
});

// src/skills/bundled/scheduleRemoteAgents.ts
var exports_scheduleRemoteAgents = {};
__export(exports_scheduleRemoteAgents, {
  registerScheduleRemoteAgentsSkill: () => registerScheduleRemoteAgentsSkill
});
function taggedIdToUUID(taggedId) {
  const prefix = "mcpsrv_";
  if (!taggedId.startsWith(prefix)) {
    return null;
  }
  const rest = taggedId.slice(prefix.length);
  const base58Data = rest.slice(2);
  let n = 0n;
  for (const c of base58Data) {
    const idx = BASE58.indexOf(c);
    if (idx === -1) {
      return null;
    }
    n = n * 58n + BigInt(idx);
  }
  const hex = n.toString(16).padStart(32, "0");
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20, 32)}`;
}
function getConnectedClaudeAIConnectors(mcpClients) {
  const connectors = [];
  for (const client of mcpClients) {
    if (client.type !== "connected") {
      continue;
    }
    if (client.config.type !== "claudeai-proxy") {
      continue;
    }
    const uuid = taggedIdToUUID(client.config.id);
    if (!uuid) {
      continue;
    }
    connectors.push({
      uuid,
      name: client.name,
      url: client.config.url
    });
  }
  return connectors;
}
function sanitizeConnectorName(name) {
  return name.replace(/^claude[.\s-]ai[.\s-]/i, "").replace(/[^a-zA-Z0-9_-]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
}
function formatConnectorsInfo(connectors) {
  if (connectors.length === 0) {
    return "No connected MCP connectors found. The user may need to connect servers at https://claude.ai/settings/connectors";
  }
  const lines = ["Connected connectors (available for triggers):"];
  for (const c of connectors) {
    const safeName = sanitizeConnectorName(c.name);
    lines.push(`- ${c.name} (connector_uuid: ${c.uuid}, name: ${safeName}, url: ${c.url})`);
  }
  return lines.join(`
`);
}
function formatSetupNotes(notes) {
  const items = notes.map((n) => `- ${n}`).join(`
`);
  return `\u26A0 Heads-up:
${items}`;
}
async function getCurrentRepoHttpsUrl() {
  const remoteUrl = await getRemoteUrl();
  if (!remoteUrl) {
    return null;
  }
  const parsed = parseGitRemote(remoteUrl);
  if (!parsed) {
    return null;
  }
  return `https://${parsed.host}/${parsed.owner}/${parsed.name}`;
}
function buildPrompt3(opts) {
  const {
    userTimezone,
    connectorsInfo,
    gitRepoUrl,
    environmentsInfo,
    createdEnvironment,
    setupNotes,
    needsGitHubAccessReminder,
    userArgs
  } = opts;
  const setupNotesSection = userArgs && setupNotes.length > 0 ? `
## Setup Notes

${formatSetupNotes(setupNotes)}
` : "";
  const initialQuestion = setupNotes.length > 0 ? `${formatSetupNotes(setupNotes)}

${BASE_QUESTION}` : BASE_QUESTION;
  const firstStep = userArgs ? `The user has already told you what they want (see User Request at the bottom). Skip the initial question and go directly to the matching workflow.` : `Your FIRST action must be a single ${ASK_USER_QUESTION_TOOL_NAME} tool call (no preamble). Use this EXACT string for the \`question\` field \u2014 do not paraphrase or shorten it:

${jsonStringify(initialQuestion)}

Set \`header: "Action"\` and offer the four actions (create/list/update/run) as options. After the user picks, follow the matching workflow below.`;
  return `# Schedule Remote Agents

You are helping the user schedule, update, list, or run **remote** MiMo Code agents. These are NOT local cron jobs \u2014 each trigger spawns a fully isolated remote session (CCR) in Anthropic's cloud infrastructure on a cron schedule. The agent runs in a sandboxed environment with its own git checkout, tools, and optional MCP connections.

## First Step

${firstStep}
${setupNotesSection}

## What You Can Do

Use the \`${REMOTE_TRIGGER_TOOL_NAME}\` tool (load it first with \`ToolSearch select:${REMOTE_TRIGGER_TOOL_NAME}\`; auth is handled in-process \u2014 do not use curl):

- \`{action: "list"}\` \u2014 list all triggers
- \`{action: "get", trigger_id: "..."}\` \u2014 fetch one trigger
- \`{action: "create", body: {...}}\` \u2014 create a trigger
- \`{action: "update", trigger_id: "...", body: {...}}\` \u2014 partial update
- \`{action: "run", trigger_id: "..."}\` \u2014 run a trigger now

You CANNOT delete triggers. If the user asks to delete, direct them to: https://claude.ai/code/scheduled

## Create body shape

\`\`\`json
{
  "name": "AGENT_NAME",
  "cron_expression": "CRON_EXPR",
  "enabled": true,
  "job_config": {
    "ccr": {
      "environment_id": "ENVIRONMENT_ID",
      "session_context": {
        "model": "claude-sonnet-4-6",
        "sources": [
          {"git_repository": {"url": "${gitRepoUrl || "https://github.com/ORG/REPO"}"}}
        ],
        "allowed_tools": ["Bash", "Read", "Write", "Edit", "Glob", "Grep"]
      },
      "events": [
        {"data": {
          "uuid": "<lowercase v4 uuid>",
          "session_id": "",
          "type": "user",
          "parent_tool_use_id": null,
          "message": {"content": "PROMPT_HERE", "role": "user"}
        }}
      ]
    }
  }
}
\`\`\`

Generate a fresh lowercase UUID for \`events[].data.uuid\` yourself.

## Available MCP Connectors

These are the user's currently connected claude.ai MCP connectors:

${connectorsInfo}

When attaching connectors to a trigger, use the \`connector_uuid\` and \`name\` shown above (the name is already sanitized to only contain letters, numbers, hyphens, and underscores), and the connector's URL. The \`name\` field in \`mcp_connections\` must only contain \`[a-zA-Z0-9_-]\` \u2014 dots and spaces are NOT allowed.

**Important:** Infer what services the agent needs from the user's description. For example, if they say "check Datadog and Slack me errors," the agent needs both Datadog and Slack connectors. Cross-reference against the list above and warn if any required service isn't connected. If a needed connector is missing, direct the user to https://claude.ai/settings/connectors to connect it first.

## Environments

Every trigger requires an \`environment_id\` in the job config. This determines where the remote agent runs. Ask the user which environment to use.

${environmentsInfo}

Use the \`id\` value as the \`environment_id\` in \`job_config.ccr.environment_id\`.
${createdEnvironment ? `
**Note:** A new environment \`${createdEnvironment.name}\` (id: \`${createdEnvironment.environment_id}\`) was just created for the user because they had none. Use this id for \`job_config.ccr.environment_id\` and mention the creation when you confirm the trigger config.
` : ""}

## API Field Reference

### Create Trigger \u2014 Required Fields
- \`name\` (string) \u2014 A descriptive name
- \`cron_expression\` (string) \u2014 5-field cron. **Minimum interval is 1 hour.**
- \`job_config\` (object) \u2014 Session configuration (see structure above)

### Create Trigger \u2014 Optional Fields
- \`enabled\` (boolean, default: true)
- \`mcp_connections\` (array) \u2014 MCP servers to attach:
  \`\`\`json
  [{"connector_uuid": "uuid", "name": "server-name", "url": "https://..."}]
  \`\`\`

### Update Trigger \u2014 Optional Fields
All fields optional (partial update):
- \`name\`, \`cron_expression\`, \`enabled\`, \`job_config\`
- \`mcp_connections\` \u2014 Replace MCP connections
- \`clear_mcp_connections\` (boolean) \u2014 Remove all MCP connections

### Cron Expression Examples

The user's local timezone is **${userTimezone}**. Cron expressions are always in UTC. When the user says a local time, convert it to UTC for the cron expression but confirm with them: "9am ${userTimezone} = Xam UTC, so the cron would be \`0 X * * 1-5\`."

- \`0 9 * * 1-5\` \u2014 Every weekday at 9am **UTC**
- \`0 */2 * * *\` \u2014 Every 2 hours
- \`0 0 * * *\` \u2014 Daily at midnight **UTC**
- \`30 14 * * 1\` \u2014 Every Monday at 2:30pm **UTC**
- \`0 8 1 * *\` \u2014 First of every month at 8am **UTC**

Minimum interval is 1 hour. \`*/30 * * * *\` will be rejected.

## Workflow

### CREATE a new trigger:

1. **Understand the goal** \u2014 Ask what they want the remote agent to do. What repo(s)? What task? Remind them that the agent runs remotely \u2014 it won't have access to their local machine, local files, or local environment variables.
2. **Craft the prompt** \u2014 Help them write an effective agent prompt. Good prompts are:
   - Specific about what to do and what success looks like
   - Clear about which files/areas to focus on
   - Explicit about what actions to take (open PRs, commit, just analyze, etc.)
3. **Set the schedule** \u2014 Ask when and how often. The user's timezone is ${userTimezone}. When they say a time (e.g., "every morning at 9am"), assume they mean their local time and convert to UTC for the cron expression. Always confirm the conversion: "9am ${userTimezone} = Xam UTC."
4. **Choose the model** \u2014 Default to \`claude-sonnet-4-6\`. Tell the user which model you're defaulting to and ask if they want a different one.
5. **Validate connections** \u2014 Infer what services the agent will need from the user's description. For example, if they say "check Datadog and Slack me errors," the agent needs both Datadog and Slack MCP connectors. Cross-reference with the connectors list above. If any are missing, warn the user and link them to https://claude.ai/settings/connectors to connect first.${gitRepoUrl ? ` The default git repo is already set to \`${gitRepoUrl}\`. Ask the user if this is the right repo or if they need a different one.` : " Ask which git repos the remote agent needs cloned into its environment."}
6. **Review and confirm** \u2014 Show the full configuration before creating. Let them adjust.
7. **Create it** \u2014 Call \`${REMOTE_TRIGGER_TOOL_NAME}\` with \`action: "create"\` and show the result. The response includes the trigger ID. Always output a link at the end: \`https://claude.ai/code/scheduled/{TRIGGER_ID}\`

### UPDATE a trigger:

1. List triggers first so they can pick one
2. Ask what they want to change
3. Show current vs proposed value
4. Confirm and update

### LIST triggers:

1. Fetch and display in a readable format
2. Show: name, schedule (human-readable), enabled/disabled, next run, repo(s)

### RUN NOW:

1. List triggers if they haven't specified which one
2. Confirm which trigger
3. Execute and confirm

## Important Notes

- These are REMOTE agents \u2014 they run in Anthropic's cloud, not on the user's machine. They cannot access local files, local services, or local environment variables.
- Always convert cron to human-readable when displaying
- Default to \`enabled: true\` unless user says otherwise
- Accept GitHub URLs in any format (https://github.com/org/repo, org/repo, etc.) and normalize to the full HTTPS URL (without .git suffix)
- The prompt is the most important part \u2014 spend time getting it right. The remote agent starts with zero context, so the prompt must be self-contained.
- To delete a trigger, direct users to https://claude.ai/code/scheduled
${needsGitHubAccessReminder ? `- If the user's request seems to require GitHub repo access (e.g. cloning a repo, opening PRs, reading code), remind them that ${getFeatureValue_CACHED_MAY_BE_STALE("tengu_cobalt_lantern", false) ? "they should run /web-setup to connect their GitHub account (or install the MiMo GitHub App on the repo as an alternative) \u2014 otherwise the remote agent won't be able to access it" : "they need the MiMo GitHub App installed on the repo \u2014 otherwise the remote agent won't be able to access it"}.` : ""}
${userArgs ? `
## User Request

The user said: "${userArgs}"

Start by understanding their intent and working through the appropriate workflow above.` : ""}`;
}
function registerScheduleRemoteAgentsSkill() {
  registerBundledSkill({
    name: "schedule",
    description: "Create, update, list, or run scheduled remote agents (triggers) that execute on a cron schedule.",
    whenToUse: "When the user wants to schedule a recurring remote agent, set up automated tasks, create a cron job for MiMo Code, or manage their scheduled agents/triggers.",
    userInvocable: true,
    isEnabled: () => getFeatureValue_CACHED_MAY_BE_STALE("tengu_surreal_dali", false) && isPolicyAllowed("allow_remote_sessions"),
    allowedTools: [REMOTE_TRIGGER_TOOL_NAME, ASK_USER_QUESTION_TOOL_NAME],
    async getPromptForCommand(args, context) {
      if (!getClaudeAIOAuthTokens()?.accessToken) {
        return [
          {
            type: "text",
            text: "You need to authenticate with a claude.ai account first. API accounts are not supported. Run /login, then try /schedule again."
          }
        ];
      }
      let environments;
      try {
        environments = await fetchEnvironments();
      } catch (err) {
        logForDebugging(`[schedule] Failed to fetch environments: ${err}`, {
          level: "warn"
        });
        return [
          {
            type: "text",
            text: "We're having trouble connecting with your remote claude.ai account to set up a scheduled task. Please try /schedule again in a few minutes."
          }
        ];
      }
      let createdEnvironment = null;
      if (environments.length === 0) {
        try {
          createdEnvironment = await createDefaultCloudEnvironment("claude-code-default");
          environments = [createdEnvironment];
        } catch (err) {
          logForDebugging(`[schedule] Failed to create environment: ${err}`, {
            level: "warn"
          });
          return [
            {
              type: "text",
              text: "No remote environments found, and we could not create one automatically. Visit https://claude.ai/code to set one up, then run /schedule again."
            }
          ];
        }
      }
      const setupNotes = [];
      let needsGitHubAccessReminder = false;
      const repo = await detectCurrentRepositoryWithHost();
      if (repo === null) {
        setupNotes.push(`Not in a git repo \u2014 you'll need to specify a repo URL manually (or skip repos entirely).`);
      } else if (repo.host === "github.com") {
        const { hasAccess } = await checkRepoForRemoteAccess(repo.owner, repo.name);
        if (!hasAccess) {
          needsGitHubAccessReminder = true;
          const webSetupEnabled = getFeatureValue_CACHED_MAY_BE_STALE("tengu_cobalt_lantern", false);
          const msg = webSetupEnabled ? `GitHub not connected for ${repo.owner}/${repo.name} \u2014 run /web-setup to sync your GitHub credentials, or install the MiMo GitHub App at https://claude.ai/code/onboarding?magic=github-app-setup.` : `MiMo GitHub App not installed on ${repo.owner}/${repo.name} \u2014 install at https://claude.ai/code/onboarding?magic=github-app-setup if your trigger needs this repo.`;
          setupNotes.push(msg);
        }
      }
      const connectors = getConnectedClaudeAIConnectors(context.options.mcpClients);
      if (connectors.length === 0) {
        setupNotes.push(`No MCP connectors \u2014 connect at https://claude.ai/settings/connectors if needed.`);
      }
      const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const connectorsInfo = formatConnectorsInfo(connectors);
      const gitRepoUrl = await getCurrentRepoHttpsUrl();
      const lines = ["Available environments:"];
      for (const env of environments) {
        lines.push(`- ${env.name} (id: ${env.environment_id}, kind: ${env.kind})`);
      }
      const environmentsInfo = lines.join(`
`);
      const prompt = buildPrompt3({
        userTimezone,
        connectorsInfo,
        gitRepoUrl,
        environmentsInfo,
        createdEnvironment,
        setupNotes,
        needsGitHubAccessReminder,
        userArgs: args
      });
      return [{ type: "text", text: prompt }];
    }
  });
}
var BASE58 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", BASE_QUESTION = "What would you like to do with scheduled remote agents?";
var init_scheduleRemoteAgents = __esm(() => {
  init_growthbook();
  init_policyLimits();
  init_prompt3();
  init_prompt5();
  init_auth();
  init_preconditions();
  init_debug();
  init_detectRepository();
  init_git();
  init_slowOperations();
  init_environments();
  init_bundledSkills();
});

// src/assistant/gate.ts
var exports_gate = {};
__export(exports_gate, {
  isKairosEnabled: () => isKairosEnabled
});
async function isKairosEnabled() {
  if (false) {}
  if (!getFeatureValue_CACHED_MAY_BE_STALE("tengu_kairos_assistant", false)) {
    return false;
  }
  return true;
}
var init_gate = __esm(() => {
  init_growthbook();
});

// src/main.tsx
init_startupProfiler();
init_rawRead();
init_keychainPrefetch();

// node_modules/.bun/@commander-js+extra-typings@14.0.0+1cee9bec6fc8d393/node_modules/@commander-js/extra-typings/esm.mjs
var import__ = __toESM(require_extra_typings(), 1);
var {
  program,
  createCommand,
  createArgument,
  createOption,
  CommanderError,
  InvalidArgumentError,
  InvalidOptionArgumentError,
  Command,
  Argument,
  Option,
  Help
} = import__.default;

// src/main.tsx
init_source();
init_mapValues();
init_pickBy();
init_uniqBy();
init_oauth();
init_product();
init_context2();
import { readFileSync } from "fs";

// src/entrypoints/init.ts
init_startupProfiler();
init_state();
init_config2();
init_memoize();
init_state();
init_state();
init_manager();
init_client();
init_policyLimits();
init_remoteManagedSettings();

// src/utils/apiPreconnect.ts
init_oauth();
init_envUtils();
var fired = false;
function preconnectAnthropicApi() {
  if (fired)
    return;
  fired = true;
  if (isEnvTruthy(process.env.CLAUDE_CODE_USE_BEDROCK) || isEnvTruthy(process.env.CLAUDE_CODE_USE_VERTEX) || isEnvTruthy(process.env.CLAUDE_CODE_USE_FOUNDRY)) {
    return;
  }
  if (process.env.HTTPS_PROXY || process.env.https_proxy || process.env.HTTP_PROXY || process.env.http_proxy || process.env.ANTHROPIC_UNIX_SOCKET || process.env.CLAUDE_CODE_CLIENT_CERT || process.env.CLAUDE_CODE_CLIENT_KEY) {
    return;
  }
  const baseUrl = process.env.ANTHROPIC_BASE_URL || getOauthConfig().BASE_API_URL;
  fetch(baseUrl, {
    method: "HEAD",
    signal: AbortSignal.timeout(1e4)
  }).catch(() => {});
}

// src/utils/caCertsConfig.ts
init_config2();
init_debug();
init_settings2();
function applyExtraCACertsFromConfig() {
  if (process.env.NODE_EXTRA_CA_CERTS) {
    return;
  }
  const configPath = getExtraCertsPathFromConfig();
  if (configPath) {
    process.env.NODE_EXTRA_CA_CERTS = configPath;
    logForDebugging(`CA certs: Applied NODE_EXTRA_CA_CERTS from config to process.env: ${configPath}`);
  }
}
function getExtraCertsPathFromConfig() {
  try {
    const globalConfig = getGlobalConfig();
    const globalEnv = globalConfig?.env;
    const settings = getSettingsForSource("userSettings");
    const settingsEnv = settings?.env;
    logForDebugging(`CA certs: Config fallback - globalEnv keys: ${globalEnv ? Object.keys(globalEnv).join(",") : "none"}, settingsEnv keys: ${settingsEnv ? Object.keys(settingsEnv).join(",") : "none"}`);
    const path = settingsEnv?.NODE_EXTRA_CA_CERTS || globalEnv?.NODE_EXTRA_CA_CERTS;
    if (path) {
      logForDebugging(`CA certs: Found NODE_EXTRA_CA_CERTS in config/settings: ${path}`);
    }
    return path;
  } catch (error) {
    logForDebugging(`CA certs: Config fallback failed: ${error}`, {
      level: "error"
    });
    return;
  }
}

// src/entrypoints/init.ts
init_cleanupRegistry();
init_config2();
init_debug();
init_detectRepository();
init_diagLogs();
init_envDynamic();
init_envUtils();
init_errors();
init_gracefulShutdown();
init_managedEnv();
init_mtls();
init_filesystem();
init_proxy();
init_betaSessionTracing();
init_telemetryAttributes();
init_windowsPaths();
init_sentry();
init_user();
init_langfuse();
var telemetryInitialized = false;
var init = memoize_default(async () => {
  const initStartTime = Date.now();
  logForDiagnosticsNoPII("info", "init_started");
  profileCheckpoint("init_function_start");
  try {
    const configsStart = Date.now();
    enableConfigs();
    logForDiagnosticsNoPII("info", "init_configs_enabled", {
      duration_ms: Date.now() - configsStart
    });
    profileCheckpoint("init_configs_enabled");
    const envVarsStart = Date.now();
    applySafeConfigEnvironmentVariables();
    applyExtraCACertsFromConfig();
    logForDiagnosticsNoPII("info", "init_safe_env_vars_applied", {
      duration_ms: Date.now() - envVarsStart
    });
    profileCheckpoint("init_safe_env_vars_applied");
    setupGracefulShutdown();
    profileCheckpoint("init_after_graceful_shutdown");
    Promise.all([
      import("./chunk-gneke3g6.js"),
      import("./chunk-c82q68ej.js")
    ]).then(([fp, gb]) => {
      fp.initialize1PEventLogging();
      gb.onGrowthBookRefresh(() => {
        fp.reinitialize1PEventLoggingIfConfigChanged();
      });
    });
    profileCheckpoint("init_after_1p_event_logging");
    import("./chunk-rebyeaz6.js").then((m) => m.startBalancePolling());
    profileCheckpoint("init_after_balance_polling");
    populateOAuthAccountInfoIfNeeded();
    profileCheckpoint("init_after_oauth_populate");
    initJetBrainsDetection();
    profileCheckpoint("init_after_jetbrains_detection");
    detectCurrentRepository();
    if (isEligibleForRemoteManagedSettings()) {
      initializeRemoteManagedSettingsLoadingPromise();
    }
    if (isPolicyLimitsEligible()) {
      initializePolicyLimitsLoadingPromise();
    }
    profileCheckpoint("init_after_remote_settings_check");
    recordFirstStartTime();
    const mtlsStart = Date.now();
    logForDebugging("[init] configureGlobalMTLS starting");
    configureGlobalMTLS();
    logForDiagnosticsNoPII("info", "init_mtls_configured", {
      duration_ms: Date.now() - mtlsStart
    });
    logForDebugging("[init] configureGlobalMTLS complete");
    const proxyStart = Date.now();
    logForDebugging("[init] configureGlobalAgents starting");
    configureGlobalAgents();
    logForDiagnosticsNoPII("info", "init_proxy_configured", {
      duration_ms: Date.now() - proxyStart
    });
    logForDebugging("[init] configureGlobalAgents complete");
    profileCheckpoint("init_network_configured");
    initSentry();
    await initUser();
    initLangfuse();
    registerCleanup(shutdownLangfuse);
    preconnectAnthropicApi();
    if (isEnvTruthy(process.env.CLAUDE_CODE_REMOTE)) {
      try {
        const { initUpstreamProxy, getUpstreamProxyEnv } = await import("./chunk-348berck.js");
        const { registerUpstreamProxyEnvFn } = await import("./chunk-bmmags4z.js");
        registerUpstreamProxyEnvFn(getUpstreamProxyEnv);
        await initUpstreamProxy();
      } catch (err) {
        logForDebugging(`[init] upstreamproxy init failed: ${err instanceof Error ? err.message : String(err)}; continuing without proxy`, { level: "warn" });
      }
    }
    setShellIfWindows();
    registerCleanup(shutdownLspServerManager);
    registerCleanup(async () => {
      const { cleanupSessionTeams } = await import("./chunk-4s0wbwvr.js");
      await cleanupSessionTeams();
    });
    if (isScratchpadEnabled()) {
      const scratchpadStart = Date.now();
      await ensureScratchpadDir();
      logForDiagnosticsNoPII("info", "init_scratchpad_created", {
        duration_ms: Date.now() - scratchpadStart
      });
    }
    logForDiagnosticsNoPII("info", "init_completed", {
      duration_ms: Date.now() - initStartTime
    });
    profileCheckpoint("init_function_end");
  } catch (error) {
    if (error instanceof ConfigParseError) {
      if (getIsNonInteractiveSession()) {
        process.stderr.write(`Configuration error in ${error.filePath}: ${error.message}
`);
        gracefulShutdownSync(1);
        return;
      }
      return import("./chunk-cq9vc2xn.js").then((m) => m.showInvalidConfigDialog({ error }));
    } else {
      throw error;
    }
  }
});
function initializeTelemetryAfterTrust() {
  if (isEligibleForRemoteManagedSettings()) {
    if (getIsNonInteractiveSession() && isBetaTracingEnabled()) {
      doInitializeTelemetry().catch((error) => {
        logForDebugging(`[3P telemetry] Eager telemetry init failed (beta tracing): ${errorMessage(error)}`, { level: "error" });
      });
    }
    logForDebugging("[3P telemetry] Waiting for remote managed settings before telemetry init");
    waitForRemoteManagedSettingsToLoad().then(async () => {
      logForDebugging("[3P telemetry] Remote managed settings loaded, initializing telemetry");
      applyConfigEnvironmentVariables();
      await doInitializeTelemetry();
    }).catch((error) => {
      logForDebugging(`[3P telemetry] Telemetry init failed (remote settings path): ${errorMessage(error)}`, { level: "error" });
    });
  } else {
    doInitializeTelemetry().catch((error) => {
      logForDebugging(`[3P telemetry] Telemetry init failed: ${errorMessage(error)}`, { level: "error" });
    });
  }
}
async function doInitializeTelemetry() {
  if (telemetryInitialized) {
    return;
  }
  telemetryInitialized = true;
  try {
    await setMeterState();
  } catch (error) {
    telemetryInitialized = false;
    throw error;
  }
}
async function setMeterState() {
  const { initializeTelemetry } = await import("./chunk-ys3jvyr2.js");
  const meter = await initializeTelemetry();
  if (meter) {
    const createAttributedCounter = (name, options) => {
      const counter = meter?.createCounter(name, options);
      return {
        add(value, additionalAttributes = {}) {
          const currentAttributes = getTelemetryAttributes();
          const mergedAttributes = {
            ...currentAttributes,
            ...additionalAttributes
          };
          counter?.add(value, mergedAttributes);
        }
      };
    };
    setMeter(meter, createAttributedCounter);
    getSessionCounter()?.add(1);
  }
}

// src/main.tsx
init_history();

// src/replLauncher.tsx
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
async function launchRepl(root, appProps, replProps, renderAndRun) {
  const { App } = await import("./chunk-snmc75nf.js");
  const { REPL } = await import("./chunk-acwznb8d.js");
  await renderAndRun(root, /* @__PURE__ */ jsx_dev_runtime.jsxDEV(App, {
    ...appProps,
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(REPL, {
      ...replProps
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this));
}

// src/main.tsx
init_growthbook();

// src/services/api/bootstrap.ts
init_axios();
init_isEqual();
init_auth();
init_oauth();
init_config2();
init_debug();
init_http();
init_lazySchema();
init_log();
init_providers();
init_privacyLevel();
init_userAgent();
var bootstrapResponseSchema = lazySchema(() => exports_external.object({
  client_data: exports_external.record(exports_external.string(), exports_external.unknown()).nullish(),
  additional_model_options: exports_external.array(exports_external.object({
    model: exports_external.string(),
    name: exports_external.string(),
    description: exports_external.string()
  }).transform(({ model, name, description }) => ({
    value: model,
    label: name,
    description
  }))).nullish()
}));
async function fetchBootstrapAPI() {
  if (isEssentialTrafficOnly()) {
    logForDebugging("[Bootstrap] Skipped: Nonessential traffic disabled");
    return null;
  }
  if (getAPIProvider() !== "firstParty") {
    logForDebugging("[Bootstrap] Skipped: 3P provider");
    return null;
  }
  const apiKey = getAnthropicApiKey();
  const hasUsableOAuth = getClaudeAIOAuthTokens()?.accessToken && hasProfileScope();
  if (!hasUsableOAuth && !apiKey) {
    logForDebugging("[Bootstrap] Skipped: no usable OAuth or API key");
    return null;
  }
  const endpoint = `${getOauthConfig().BASE_API_URL}/api/claude_cli/bootstrap`;
  try {
    return await withOAuth401Retry(async () => {
      const token = getClaudeAIOAuthTokens()?.accessToken;
      let authHeaders;
      if (token && hasProfileScope()) {
        authHeaders = {
          Authorization: `Bearer ${token}`,
          "anthropic-beta": OAUTH_BETA_HEADER
        };
      } else if (apiKey) {
        authHeaders = { "x-api-key": apiKey };
      } else {
        logForDebugging("[Bootstrap] No auth available on retry, aborting");
        return null;
      }
      logForDebugging("[Bootstrap] Fetching");
      const response = await axios_default.get(endpoint, {
        headers: {
          "Content-Type": "application/json",
          "User-Agent": getClaudeCodeUserAgent(),
          ...authHeaders
        },
        timeout: 5000
      });
      const parsed = bootstrapResponseSchema().safeParse(response.data);
      if (!parsed.success) {
        logForDebugging(`[Bootstrap] Response failed validation: ${parsed.error.message}`);
        return null;
      }
      logForDebugging("[Bootstrap] Fetch ok");
      return parsed.data;
    });
  } catch (error) {
    logForDebugging(`[Bootstrap] Fetch failed: ${axios_default.isAxiosError(error) ? error.response?.status ?? error.code : "unknown"}`);
    throw error;
  }
}
async function fetchBootstrapData() {
  try {
    const response = await fetchBootstrapAPI();
    if (!response)
      return;
    const clientData = response.client_data ?? null;
    const additionalModelOptions = response.additional_model_options ?? [];
    const config = getGlobalConfig();
    if (isEqual_default(config.clientDataCache, clientData) && isEqual_default(config.additionalModelOptionsCache, additionalModelOptions)) {
      logForDebugging("[Bootstrap] Cache unchanged, skipping write");
      return;
    }
    logForDebugging("[Bootstrap] Cache updated, persisting to disk");
    saveGlobalConfig((current) => ({
      ...current,
      clientDataCache: clientData,
      additionalModelOptionsCache: additionalModelOptions
    }));
  } catch (error) {
    logError(error);
  }
}

// src/main.tsx
init_filesApi();
init_referral();
init_policyLimits();
init_remoteManagedSettings();
init_SyntheticOutputTool();
init_tools();
init_advisor();
init_agentSwarmsEnabled();
init_array();
init_auth();
init_config2();
init_effort();
init_fastMode();
init_managedEnv();
init_messages();
init_platform();
init_sessionIngressAuth();
init_changeDetector();
init_slowOperations();

// src/utils/warningHandler.ts
init_analytics();
init_debug();
init_envUtils();
init_platform();
var MAX_WARNING_KEYS = 1000;
var warningCounts = new Map;
var INTERNAL_WARNINGS = [
  /MaxListenersExceededWarning.*AbortSignal/,
  /MaxListenersExceededWarning.*EventTarget/
];
function isInternalWarning(warning) {
  const warningStr = `${warning.name}: ${warning.message}`;
  return INTERNAL_WARNINGS.some((pattern) => pattern.test(warningStr));
}
var warningHandler = null;
function initializeWarningHandler() {
  const currentListeners = process.listeners("warning");
  if (warningHandler && currentListeners.includes(warningHandler)) {
    return;
  }
  const isDevelopment = true;
  if (!isDevelopment) {
    process.removeAllListeners("warning");
  }
  warningHandler = (warning) => {
    try {
      const warningKey = `${warning.name}: ${warning.message.slice(0, 50)}`;
      const count2 = warningCounts.get(warningKey) || 0;
      if (warningCounts.has(warningKey) || warningCounts.size < MAX_WARNING_KEYS) {
        warningCounts.set(warningKey, count2 + 1);
      }
      const isInternal = isInternalWarning(warning);
      logEvent("tengu_node_warning", {
        is_internal: isInternal ? 1 : 0,
        occurrence_count: count2 + 1,
        classname: warning.name,
        ...process.env.USER_TYPE === "ant" && {
          message: warning.message
        }
      });
      if (isEnvTruthy(process.env.CLAUDE_DEBUG)) {
        const prefix = isInternal ? "[Internal Warning]" : "[Warning]";
        logForDebugging(`${prefix} ${warning.toString()}`, { level: "warn" });
      }
    } catch {}
  };
  process.on("warning", warningHandler);
}

// src/main.tsx
init_worktreeModeEnabled();
init_config();
init_growthbook();
init_analytics();
init_sink();
init_state();
init_commands();
import { relative, resolve } from "path";

// src/interactiveHelpers.tsx
init_analytics();
init_gracefulShutdown();
init_state();
import { appendFileSync } from "fs";
init_context2();
init_src();
init_KeybindingProviderSetup();
init_growthbook();
init_grove();

// src/components/MCPServerApprovalDialog.tsx
init_analytics();
init_settings2();
init_CustomSelect();
init_src();

// src/components/MCPServerDialogCopy.tsx
init_src();
var jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
function MCPServerDialogCopy() {
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
    children: [
      "MCP servers may execute code or access system resources. All tool calls require approval. Learn more in the",
      " ",
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Link, {
        url: "https://code.claude.com/docs/en/mcp",
        children: "MCP documentation"
      }, undefined, false, undefined, this),
      "."
    ]
  }, undefined, true, undefined, this);
}

// src/components/MCPServerApprovalDialog.tsx
var jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
function MCPServerApprovalDialog({
  serverName,
  onDone
}) {
  function onChange(value) {
    logEvent("tengu_mcp_dialog_choice", {
      choice: value
    });
    switch (value) {
      case "yes":
      case "yes_all": {
        const currentSettings = getSettings_DEPRECATED() || {};
        const enabledServers = currentSettings.enabledMcpjsonServers || [];
        if (!enabledServers.includes(serverName)) {
          updateSettingsForSource("localSettings", {
            enabledMcpjsonServers: [...enabledServers, serverName]
          });
        }
        if (value === "yes_all") {
          updateSettingsForSource("localSettings", {
            enableAllProjectMcpServers: true
          });
        }
        onDone();
        break;
      }
      case "no": {
        const currentSettings = getSettings_DEPRECATED() || {};
        const disabledServers = currentSettings.disabledMcpjsonServers || [];
        if (!disabledServers.includes(serverName)) {
          updateSettingsForSource("localSettings", {
            disabledMcpjsonServers: [...disabledServers, serverName]
          });
        }
        onDone();
        break;
      }
    }
  }
  return /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Dialog, {
    title: `New MCP server found in .mcp.json: ${serverName}`,
    color: "warning",
    onCancel: () => onChange("no"),
    children: [
      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(MCPServerDialogCopy, {}, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Select, {
        options: [
          {
            label: `Use this and all future MCP servers in this project`,
            value: "yes_all"
          },
          { label: `Use this MCP server`, value: "yes" },
          { label: `Continue without using this MCP server`, value: "no" }
        ],
        onChange: (value) => onChange(value),
        onCancel: () => onChange("no")
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}

// src/components/MCPServerMultiselectDialog.tsx
init_partition();
init_analytics();
init_src();
init_settings2();
init_ConfigurableShortcutHint();
init_SelectMulti();
init_src();
var import_react = __toESM(require_react(), 1);
var jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
function MCPServerMultiselectDialog({
  serverNames,
  onDone
}) {
  function onSubmit(selectedServers) {
    const currentSettings = getSettings_DEPRECATED() || {};
    const enabledServers = currentSettings.enabledMcpjsonServers || [];
    const disabledServers = currentSettings.disabledMcpjsonServers || [];
    const [approvedServers, rejectedServers] = partition_default(serverNames, (server) => selectedServers.includes(server));
    logEvent("tengu_mcp_multidialog_choice", {
      approved: approvedServers.length,
      rejected: rejectedServers.length
    });
    if (approvedServers.length > 0) {
      const newEnabledServers = [
        ...new Set([...enabledServers, ...approvedServers])
      ];
      updateSettingsForSource("localSettings", {
        enabledMcpjsonServers: newEnabledServers
      });
    }
    if (rejectedServers.length > 0) {
      const newDisabledServers = [
        ...new Set([...disabledServers, ...rejectedServers])
      ];
      updateSettingsForSource("localSettings", {
        disabledMcpjsonServers: newDisabledServers
      });
    }
    onDone();
  }
  const handleEscRejectAll = import_react.useCallback(() => {
    const currentSettings = getSettings_DEPRECATED() || {};
    const disabledServers = currentSettings.disabledMcpjsonServers || [];
    const newDisabledServers = [
      ...new Set([...disabledServers, ...serverNames])
    ];
    updateSettingsForSource("localSettings", {
      disabledMcpjsonServers: newDisabledServers
    });
    onDone();
  }, [serverNames, onDone]);
  return /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(jsx_dev_runtime4.Fragment, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Dialog, {
        title: `${serverNames.length} new MCP servers found in .mcp.json`,
        subtitle: "Select any you wish to enable.",
        color: "warning",
        onCancel: handleEscRejectAll,
        hideInputGuide: true,
        children: [
          /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(MCPServerDialogCopy, {}, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(SelectMulti, {
            options: serverNames.map((server) => ({
              label: server,
              value: server
            })),
            defaultValue: serverNames,
            onSubmit,
            onCancel: handleEscRejectAll,
            hideIndexes: true
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedBox_default, {
        paddingX: 1,
        children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
          dimColor: true,
          italic: true,
          children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Byline, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(KeyboardShortcutHint, {
                shortcut: "Space",
                action: "select"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(KeyboardShortcutHint, {
                shortcut: "Enter",
                action: "confirm"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ConfigurableShortcutHint, {
                action: "confirm:no",
                context: "Confirmation",
                fallback: "Esc",
                description: "reject all"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}

// src/services/mcpServerApproval.tsx
init_KeybindingProviderSetup();
init_AppState();
init_config3();
init_utils();
var jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
async function handleMcpjsonServerApprovals(root) {
  const { servers: projectServers } = getMcpConfigsByScope("project");
  const pendingServers = Object.keys(projectServers).filter((serverName) => getProjectMcpServerStatus(serverName) === "pending");
  if (pendingServers.length === 0) {
    return;
  }
  await new Promise((resolve) => {
    const done = () => void resolve();
    if (pendingServers.length === 1 && pendingServers[0] !== undefined) {
      const serverName = pendingServers[0];
      root.render(/* @__PURE__ */ jsx_dev_runtime5.jsxDEV(AppStateProvider, {
        children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(KeybindingSetup, {
          children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(MCPServerApprovalDialog, {
            serverName,
            onDone: done
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this));
    } else {
      root.render(/* @__PURE__ */ jsx_dev_runtime5.jsxDEV(AppStateProvider, {
        children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(KeybindingSetup, {
          children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(MCPServerMultiselectDialog, {
            serverNames: pendingServers,
            onDone: done
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this));
    }
  });
}

// src/interactiveHelpers.tsx
init_AppState();
init_authPortable();
init_claudemd();
init_config2();

// src/utils/deepLink/terminalPreference.ts
init_config2();
init_debug();
var TERM_PROGRAM_TO_APP = {
  iterm: "iTerm",
  "iterm.app": "iTerm",
  ghostty: "Ghostty",
  kitty: "kitty",
  alacritty: "Alacritty",
  wezterm: "WezTerm",
  apple_terminal: "Terminal"
};
function updateDeepLinkTerminalPreference() {
  if (process.platform !== "darwin")
    return;
  const termProgram = process.env.TERM_PROGRAM;
  if (!termProgram)
    return;
  const app = TERM_PROGRAM_TO_APP[termProgram.toLowerCase()];
  if (!app)
    return;
  const config = getGlobalConfig();
  if (config.deepLinkTerminal === app)
    return;
  saveGlobalConfig((current) => ({ ...current, deepLinkTerminal: app }));
  logForDebugging(`Stored deep link terminal preference: ${app}`);
}

// src/interactiveHelpers.tsx
init_envUtils();

// src/utils/fpsTracker.ts
class FpsTracker {
  frameDurations = [];
  firstRenderTime;
  lastRenderTime;
  record(durationMs) {
    const now = performance.now();
    if (this.firstRenderTime === undefined) {
      this.firstRenderTime = now;
    }
    this.lastRenderTime = now;
    this.frameDurations.push(durationMs);
  }
  getMetrics() {
    if (this.frameDurations.length === 0 || this.firstRenderTime === undefined || this.lastRenderTime === undefined) {
      return;
    }
    const totalTimeMs = this.lastRenderTime - this.firstRenderTime;
    if (totalTimeMs <= 0) {
      return;
    }
    const totalFrames = this.frameDurations.length;
    const averageFps = totalFrames / (totalTimeMs / 1000);
    const sorted = this.frameDurations.slice().sort((a, b) => b - a);
    const p99Index = Math.max(0, Math.ceil(sorted.length * 0.01) - 1);
    const p99FrameTimeMs = sorted[p99Index];
    const low1PctFps = p99FrameTimeMs > 0 ? 1000 / p99FrameTimeMs : 0;
    return {
      averageFps: Math.round(averageFps * 100) / 100,
      low1PctFps: Math.round(low1PctFps * 100) / 100
    };
  }
}

// src/interactiveHelpers.tsx
init_managedEnv();
init_allErrors();
init_settings2();
var jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
function completeOnboarding() {
  saveGlobalConfig((current) => ({
    ...current,
    hasCompletedOnboarding: true,
    lastOnboardingVersion: "1.0.0"
  }));
}
function showDialog(root, renderer) {
  return new Promise((resolve) => {
    const done = (result) => void resolve(result);
    root.render(renderer(done));
  });
}
async function exitWithError(root, message, beforeExit) {
  return exitWithMessage(root, message, { color: "error", beforeExit });
}
async function exitWithMessage(root, message, options) {
  const { Text } = await import("./chunk-j976d6fp.js");
  const color = options?.color;
  const exitCode = options?.exitCode ?? 1;
  root.render(color ? /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Text, {
    color,
    children: message
  }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Text, {
    children: message
  }, undefined, false, undefined, this));
  root.unmount();
  await options?.beforeExit?.();
  process.exit(exitCode);
}
function showSetupDialog(root, renderer, options) {
  return showDialog(root, (done) => /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(AppStateProvider, {
    onChangeAppState: options?.onChangeAppState,
    children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(KeybindingSetup, {
      children: renderer(done)
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this));
}
async function renderAndRun(root, element) {
  root.render(element);
  startDeferredPrefetches();
  await root.waitUntilExit();
  await gracefulShutdown(0);
}
async function showSetupScreens(root, permissionMode, allowDangerouslySkipPermissions, commands, claudeInChrome, devChannels) {
  if (isEnvTruthy(false) || process.env.IS_DEMO) {
    return false;
  }
  const config = getGlobalConfig();
  let onboardingShown = false;
  if (!config.theme || !config.hasCompletedOnboarding) {
    onboardingShown = true;
    const { Onboarding } = await import("./chunk-y9dht1t0.js");
    await showSetupDialog(root, (done) => /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Onboarding, {
      onDone: () => {
        completeOnboarding();
        done();
      }
    }, undefined, false, undefined, this), { onChangeAppState });
  }
  if (!isEnvTruthy(process.env.CLAUBBIT)) {
    if (!checkHasTrustDialogAccepted()) {
      const { TrustDialog } = await import("./chunk-wkhfh14j.js");
      await showSetupDialog(root, (done) => /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(TrustDialog, {
        commands,
        onDone: done
      }, undefined, false, undefined, this));
    }
    setSessionTrustAccepted(true);
    resetGrowthBook();
    initializeGrowthBook();
    getSystemContext();
    const { errors: allErrors } = getSettingsWithAllErrors();
    if (allErrors.length === 0) {
      await handleMcpjsonServerApprovals(root);
    }
    if (await shouldShowClaudeMdExternalIncludesWarning()) {
      const externalIncludes = getExternalClaudeMdIncludes(await getMemoryFiles(true));
      const { ClaudeMdExternalIncludesDialog } = await import("./chunk-ft966k06.js");
      await showSetupDialog(root, (done) => /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ClaudeMdExternalIncludesDialog, {
        onDone: done,
        isStandaloneDialog: true,
        externalIncludes
      }, undefined, false, undefined, this));
    }
  }
  updateGithubRepoPathMapping();
  if (true) {
    updateDeepLinkTerminalPreference();
  }
  applyConfigEnvironmentVariables();
  setImmediate(() => initializeTelemetryAfterTrust());
  if (await isQualifiedForGrove()) {
    const { GroveDialog } = await import("./chunk-e8as78yy.js");
    const decision = await showSetupDialog(root, (done) => /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(GroveDialog, {
      showIfAlreadyViewed: false,
      location: onboardingShown ? "onboarding" : "policy_update_modal",
      onDone: done
    }, undefined, false, undefined, this));
    if (decision === "escape") {
      logEvent("tengu_grove_policy_exited", {});
      gracefulShutdownSync(0);
      return false;
    }
  }
  if (process.env.ANTHROPIC_API_KEY && !isRunningOnHomespace()) {
    const customApiKeyTruncated = normalizeApiKeyForConfig(process.env.ANTHROPIC_API_KEY);
    const keyStatus = getCustomApiKeyStatus(customApiKeyTruncated);
    if (keyStatus === "new") {
      const { ApproveApiKey } = await import("./chunk-w130qdha.js");
      await showSetupDialog(root, (done) => /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ApproveApiKey, {
        customApiKeyTruncated,
        onDone: done
      }, undefined, false, undefined, this), { onChangeAppState });
    }
  }
  if ((permissionMode === "bypassPermissions" || allowDangerouslySkipPermissions) && !hasSkipDangerousModePermissionPrompt()) {
    const { BypassPermissionsModeDialog } = await import("./chunk-3qy2jz06.js");
    await showSetupDialog(root, (done) => /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(BypassPermissionsModeDialog, {
      onAccept: done
    }, undefined, false, undefined, this));
  }
  if (devChannels && devChannels.length > 0) {
    const { DevChannelsDialog } = await import("./chunk-cfp3tp7j.js");
    await showSetupDialog(root, (done) => /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(DevChannelsDialog, {
      channels: devChannels,
      onAccept: () => {
        setAllowedChannels([
          ...getAllowedChannels(),
          ...devChannels.map((c) => ({ ...c, dev: true }))
        ]);
        setHasDevChannels(true);
        done();
      }
    }, undefined, false, undefined, this));
  }
  if (claudeInChrome && !getGlobalConfig().hasCompletedClaudeInChromeOnboarding) {
    const { ClaudeInChromeOnboarding } = await import("./chunk-11n2144f.js");
    await showSetupDialog(root, (done) => /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ClaudeInChromeOnboarding, {
      onDone: done
    }, undefined, false, undefined, this));
  }
  return onboardingShown;
}
function getRenderContext(exitOnCtrlC) {
  let lastFlickerTime = 0;
  const baseOptions = getBaseRenderOptions(exitOnCtrlC);
  if (baseOptions.stdin) {
    logEvent("tengu_stdin_interactive", {});
  }
  const fpsTracker = new FpsTracker;
  const stats = createStatsStore();
  setStatsStore(stats);
  const frameTimingLogPath = process.env.CLAUDE_CODE_FRAME_TIMING_LOG;
  return {
    getFpsMetrics: () => fpsTracker.getMetrics(),
    stats,
    renderOptions: {
      ...baseOptions,
      onFrame: (event) => {
        fpsTracker.record(event.durationMs);
        stats.observe("frame_duration_ms", event.durationMs);
        if (frameTimingLogPath && event.phases) {
          const line = JSON.stringify({
            total: event.durationMs,
            ...event.phases,
            rss: process.memoryUsage.rss(),
            cpu: process.cpuUsage()
          }) + `
`;
          appendFileSync(frameTimingLogPath, line);
        }
        if (isSynchronizedOutputSupported()) {
          return;
        }
        for (const flicker of event.flickers) {
          if (flicker.reason === "resize") {
            continue;
          }
          const now = Date.now();
          if (now - lastFlickerTime < 1000) {
            logEvent("tengu_flicker", {
              desiredHeight: flicker.desiredHeight,
              actualHeight: flicker.availableHeight,
              reason: flicker.reason
            });
          }
          lastFlickerTime = now;
        }
      }
    }
  };
}

// src/dialogLaunchers.tsx
init_KeybindingProviderSetup();
var jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
async function launchInvalidSettingsDialog(root, props) {
  const { InvalidSettingsDialog } = await import("./chunk-w1baq7k5.js");
  return showSetupDialog(root, (done) => /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(InvalidSettingsDialog, {
    settingsErrors: props.settingsErrors,
    onContinue: done,
    onExit: props.onExit
  }, undefined, false, undefined, this));
}
async function launchAssistantSessionChooser(root, props) {
  const { AssistantSessionChooser } = await import("./chunk-f86at2bh.js");
  return showSetupDialog(root, (done) => /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(AssistantSessionChooser, {
    sessions: props.sessions,
    onSelect: (id) => done(id),
    onCancel: () => done(null)
  }, undefined, false, undefined, this));
}
async function launchAssistantInstallWizard(root) {
  const { NewInstallWizard, computeDefaultInstallDir } = await import("./chunk-yg62fg1x.js");
  const defaultDir = await computeDefaultInstallDir();
  let rejectWithError;
  const errorPromise = new Promise((_, reject) => {
    rejectWithError = reject;
  });
  const resultPromise = showSetupDialog(root, (done) => /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(NewInstallWizard, {
    defaultDir,
    onInstalled: (dir) => done(dir),
    onCancel: () => done(null),
    onError: (message) => rejectWithError(new Error(`Installation failed: ${message}`))
  }, undefined, false, undefined, this));
  return Promise.race([resultPromise, errorPromise]);
}
async function launchTeleportResumeWrapper(root) {
  const { TeleportResumeWrapper } = await import("./chunk-k893zsr3.js");
  return showSetupDialog(root, (done) => /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(TeleportResumeWrapper, {
    onComplete: done,
    onCancel: () => done(null),
    source: "cliArg"
  }, undefined, false, undefined, this));
}
async function launchTeleportRepoMismatchDialog(root, props) {
  const { TeleportRepoMismatchDialog } = await import("./chunk-g7gd4ezz.js");
  return showSetupDialog(root, (done) => /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(TeleportRepoMismatchDialog, {
    targetRepo: props.targetRepo,
    initialPaths: props.initialPaths,
    onSelectPath: done,
    onCancel: () => done(null)
  }, undefined, false, undefined, this));
}
async function launchResumeChooser(root, appProps, worktreePathsPromise, resumeProps) {
  const [worktreePaths, { ResumeConversation }, { App }] = await Promise.all([
    worktreePathsPromise,
    import("./chunk-9131yewb.js"),
    import("./chunk-snmc75nf.js")
  ]);
  await renderAndRun(root, /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(App, {
    getFpsMetrics: appProps.getFpsMetrics,
    stats: appProps.stats,
    initialState: appProps.initialState,
    children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(KeybindingSetup, {
      children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ResumeConversation, {
        ...resumeProps,
        worktreePaths
      }, undefined, false, undefined, this)
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this));
}

// src/main.tsx
init_src();

// src/plugins/bundled/weixin.ts
init_builtinPlugins();
init_cliLaunch();
function registerWeixinBuiltinPlugin() {
  const launch = buildCliLaunch(["weixin", "serve"]);
  registerBuiltinPlugin({
    name: "weixin",
    description: "WeChat channel integration. Enables inbound WeChat messages via channels and provides reply/send_typing MCP tools. Configure with `mimo weixin login` and enable for a session with `--channels plugin:weixin@builtin`.",
    version: "1.0.0",
    defaultEnabled: true,
    mcpServers: {
      weixin: {
        type: "stdio",
        command: launch.execPath,
        args: launch.args
      }
    }
  });
}

// src/plugins/bundled/index.ts
function initBuiltinPlugins() {
  registerWeixinBuiltinPlugin();
}

// src/main.tsx
init_claudeAiLimits();
init_client2();

// src/skills/bundled/index.ts
init_setup();

// src/skills/bundled/batch.ts
init_constants2();
init_prompt3();
init_constants4();
init_constants3();
init_constants5();
init_git();
init_bundledSkills();
var MIN_AGENTS = 5;
var MAX_AGENTS = 30;
var WORKER_INSTRUCTIONS = `After you finish implementing the change:
1. **Simplify** \u2014 Invoke the \`${SKILL_TOOL_NAME}\` tool with \`skill: "simplify"\` to review and clean up your changes.
2. **Run unit tests** \u2014 Run the project's test suite (check for package.json scripts, Makefile targets, or common commands like \`npm test\`, \`bun test\`, \`pytest\`, \`go test\`). If tests fail, fix them.
3. **Test end-to-end** \u2014 Follow the e2e test recipe from the coordinator's prompt (below). If the recipe says to skip e2e for this unit, skip it.
4. **Commit and push** \u2014 Commit all changes with a clear message, push the branch, and create a PR with \`gh pr create\`. Use a descriptive title. If \`gh\` is not available or the push fails, note it in your final message.
5. **Report** \u2014 End with a single line: \`PR: <url>\` so the coordinator can track it. If no PR was created, end with \`PR: none \u2014 <reason>\`.`;
function buildPrompt(instruction) {
  return `# Batch: Parallel Work Orchestration

You are orchestrating a large, parallelizable change across this codebase.

## User Instruction

${instruction}

## Phase 1: Research and Plan (Plan Mode)

Call the \`${ENTER_PLAN_MODE_TOOL_NAME}\` tool now to enter plan mode, then:

1. **Understand the scope.** Launch one or more subagents (in the foreground \u2014 you need their results) to deeply research what this instruction touches. Find all the files, patterns, and call sites that need to change. Understand the existing conventions so the migration is consistent.

2. **Decompose into independent units.** Break the work into ${MIN_AGENTS}\u2013${MAX_AGENTS} self-contained units. Each unit must:
   - Be independently implementable in an isolated git worktree (no shared state with sibling units)
   - Be mergeable on its own without depending on another unit's PR landing first
   - Be roughly uniform in size (split large units, merge trivial ones)

   Scale the count to the actual work: few files \u2192 closer to ${MIN_AGENTS}; hundreds of files \u2192 closer to ${MAX_AGENTS}. Prefer per-directory or per-module slicing over arbitrary file lists.

3. **Determine the e2e test recipe.** Figure out how a worker can verify its change actually works end-to-end \u2014 not just that unit tests pass. Look for:
   - A \`claude-in-chrome\` skill or browser-automation tool (for UI changes: click through the affected flow, screenshot the result)
   - A \`tmux\` or CLI-verifier skill (for CLI changes: launch the app interactively, exercise the changed behavior)
   - A dev-server + curl pattern (for API changes: start the server, hit the affected endpoints)
   - An existing e2e/integration test suite the worker can run

   If you cannot find a concrete e2e path, use the \`${ASK_USER_QUESTION_TOOL_NAME}\` tool to ask the user how to verify this change end-to-end. Offer 2\u20133 specific options based on what you found (e.g., "Screenshot via chrome extension", "Run \`bun run dev\` and curl the endpoint", "No e2e \u2014 unit tests are sufficient"). Do not skip this \u2014 the workers cannot ask the user themselves.

   Write the recipe as a short, concrete set of steps that a worker can execute autonomously. Include any setup (start a dev server, build first) and the exact command/interaction to verify.

4. **Write the plan.** In your plan file, include:
   - A summary of what you found during research
   - A numbered list of work units \u2014 for each: a short title, the list of files/directories it covers, and a one-line description of the change
   - The e2e test recipe (or "skip e2e because \u2026" if the user chose that)
   - The exact worker instructions you will give each agent (the shared template)

5. Call \`${EXIT_PLAN_MODE_TOOL_NAME}\` to present the plan for approval.

## Phase 2: Spawn Workers (After Plan Approval)

Once the plan is approved, spawn one background agent per work unit using the \`${AGENT_TOOL_NAME}\` tool. **All agents must use \`isolation: "worktree"\` and \`run_in_background: true\`.** Launch them all in a single message block so they run in parallel.

For each agent, the prompt must be fully self-contained. Include:
- The overall goal (the user's instruction)
- This unit's specific task (title, file list, change description \u2014 copied verbatim from your plan)
- Any codebase conventions you discovered that the worker needs to follow
- The e2e test recipe from your plan (or "skip e2e because \u2026")
- The worker instructions below, copied verbatim:

\`\`\`
${WORKER_INSTRUCTIONS}
\`\`\`

Use \`subagent_type: "general-purpose"\` unless a more specific agent type fits.

## Phase 3: Track Progress

After launching all workers, render an initial status table:

| # | Unit | Status | PR |
|---|------|--------|----|
| 1 | <title> | running | \u2014 |
| 2 | <title> | running | \u2014 |

As background-agent completion notifications arrive, parse the \`PR: <url>\` line from each agent's result and re-render the table with updated status (\`done\` / \`failed\`) and PR links. Keep a brief failure note for any agent that did not produce a PR.

When all agents have reported, render the final table and a one-line summary (e.g., "22/24 units landed as PRs").
`;
}
var NOT_A_GIT_REPO_MESSAGE = `This is not a git repository. The \`/batch\` command requires a git repo because it spawns agents in isolated git worktrees and creates PRs from each. Initialize a repo first, or run this from inside an existing one.`;
var MISSING_INSTRUCTION_MESSAGE = `Provide an instruction describing the batch change you want to make.

Examples:
  /batch migrate from react to vue
  /batch replace all uses of lodash with native equivalents
  /batch add type annotations to all untyped function parameters`;
function registerBatchSkill() {
  registerBundledSkill({
    name: "batch",
    description: "Research and plan a large-scale change, then execute it in parallel across 5\u201330 isolated worktree agents that each open a PR.",
    whenToUse: "Use when the user wants to make a sweeping, mechanical change across many files (migrations, refactors, bulk renames) that can be decomposed into independent parallel units.",
    argumentHint: "<instruction>",
    userInvocable: true,
    disableModelInvocation: true,
    async getPromptForCommand(args) {
      const instruction = args.trim();
      if (!instruction) {
        return [{ type: "text", text: MISSING_INSTRUCTION_MESSAGE }];
      }
      const isGit = await getIsGit();
      if (!isGit) {
        return [{ type: "text", text: NOT_A_GIT_REPO_MESSAGE }];
      }
      return [{ type: "text", text: buildPrompt(instruction) }];
    }
  });
}

// src/skills/bundled/claudeInChrome.ts
init_src2();
init_prompt6();
init_setup();
init_bundledSkills();
var CLAUDE_IN_CHROME_MCP_TOOLS = BROWSER_TOOLS.map((tool) => `mcp__claude-in-chrome__${tool.name}`);
var SKILL_ACTIVATION_MESSAGE = `
Now that this skill is invoked, you have access to Chrome browser automation tools. You can now use the mcp__claude-in-chrome__* tools to interact with web pages.

IMPORTANT: Start by calling mcp__claude-in-chrome__tabs_context_mcp to get information about the user's current browser tabs.
`;
function registerClaudeInChromeSkill() {
  registerBundledSkill({
    name: "claude-in-chrome",
    description: "Automates your Chrome browser to interact with web pages - clicking elements, filling forms, capturing screenshots, reading console logs, and navigating sites. Opens pages in new tabs within your existing Chrome session. Requires site-level permissions before executing (configured in the extension).",
    whenToUse: "When the user wants to interact with web pages, automate browser tasks, capture screenshots, read console logs, or perform any browser-based actions. Always invoke BEFORE attempting to use any mcp__claude-in-chrome__* tools.",
    allowedTools: CLAUDE_IN_CHROME_MCP_TOOLS,
    userInvocable: true,
    isEnabled: () => shouldAutoEnableClaudeInChrome(),
    async getPromptForCommand(args) {
      let prompt = `${BASE_CHROME_PROMPT}
${SKILL_ACTIVATION_MESSAGE}`;
      if (args) {
        prompt += `
## Task

${args}`;
      }
      return [{ type: "text", text: prompt }];
    }
  });
}

// src/skills/bundled/debug.ts
init_claudeCodeGuideAgent();
init_settings2();
init_debug();
init_errors();
init_format();
init_bundledSkills();
import { open, stat } from "fs/promises";
var DEFAULT_DEBUG_LINES_READ = 20;
var TAIL_READ_BYTES = 64 * 1024;
function registerDebugSkill() {
  registerBundledSkill({
    name: "debug",
    description: process.env.USER_TYPE === "ant" ? "Debug your current MiMo Code session by reading the session debug log. Includes all event logging" : "Enable debug logging for this session and help diagnose issues",
    allowedTools: ["Read", "Grep", "Glob"],
    argumentHint: "[issue description]",
    disableModelInvocation: true,
    userInvocable: true,
    async getPromptForCommand(args) {
      const wasAlreadyLogging = enableDebugLogging();
      const debugLogPath = getDebugLogPath();
      let logInfo;
      try {
        const stats = await stat(debugLogPath);
        const readSize = Math.min(stats.size, TAIL_READ_BYTES);
        const startOffset = stats.size - readSize;
        const fd = await open(debugLogPath, "r");
        try {
          const { buffer, bytesRead } = await fd.read({
            buffer: Buffer.alloc(readSize),
            position: startOffset
          });
          const tail = buffer.toString("utf-8", 0, bytesRead).split(`
`).slice(-DEFAULT_DEBUG_LINES_READ).join(`
`);
          logInfo = `Log size: ${formatFileSize(stats.size)}

### Last ${DEFAULT_DEBUG_LINES_READ} lines

\`\`\`
${tail}
\`\`\``;
        } finally {
          await fd.close();
        }
      } catch (e) {
        logInfo = isENOENT(e) ? "No debug log exists yet \u2014 logging was just enabled." : `Failed to read last ${DEFAULT_DEBUG_LINES_READ} lines of debug log: ${errorMessage(e)}`;
      }
      const justEnabledSection = wasAlreadyLogging ? "" : `
## Debug Logging Just Enabled

Debug logging was OFF for this session until now. Nothing prior to this /debug invocation was captured.

Tell the user that debug logging is now active at \`${debugLogPath}\`, ask them to reproduce the issue, then re-read the log. If they can't reproduce, they can also restart with \`claude --debug\` to capture logs from startup.
`;
      const prompt = `# Debug Skill

Help the user debug an issue they're encountering in this current MiMo Code session.
${justEnabledSection}
## Session Debug Log

The debug log for the current session is at: \`${debugLogPath}\`

${logInfo}

For additional context, grep for [ERROR] and [WARN] lines across the full file.

## Issue Description

${args || "The user did not describe a specific issue. Read the debug log and summarize any errors, warnings, or notable issues."}

## Settings

Remember that settings are in:
* user - ${getSettingsFilePathForSource("userSettings")}
* project - ${getSettingsFilePathForSource("projectSettings")}
* local - ${getSettingsFilePathForSource("localSettings")}

## Instructions

1. Review the user's issue description
2. The last ${DEFAULT_DEBUG_LINES_READ} lines show the debug file format. Look for [ERROR] and [WARN] entries, stack traces, and failure patterns across the file
3. Consider launching the ${CLAUDE_CODE_GUIDE_AGENT_TYPE} subagent to understand the relevant MiMo Code features
4. Explain what you found in plain language
5. Suggest concrete fixes or next steps
`;
      return [{ type: "text", text: prompt }];
    }
  });
}

// src/skills/bundled/keybindings.ts
init_defaultBindings();
init_loadUserBindings();
init_reservedShortcuts();

// src/keybindings/schema.ts
init_v4();
init_lazySchema();
var KEYBINDING_CONTEXTS = [
  "Global",
  "Chat",
  "Autocomplete",
  "Confirmation",
  "Help",
  "Transcript",
  "HistorySearch",
  "Task",
  "ThemePicker",
  "Settings",
  "Tabs",
  "Attachments",
  "Footer",
  "MessageSelector",
  "DiffDialog",
  "ModelPicker",
  "Select",
  "Plugin"
];
var KEYBINDING_CONTEXT_DESCRIPTIONS = {
  Global: "Active everywhere, regardless of focus",
  Chat: "When the chat input is focused",
  Autocomplete: "When autocomplete menu is visible",
  Confirmation: "When a confirmation/permission dialog is shown",
  Help: "When the help overlay is open",
  Transcript: "When viewing the transcript",
  HistorySearch: "When searching command history (ctrl+r)",
  Task: "When a task/agent is running in the foreground",
  ThemePicker: "When the theme picker is open",
  Settings: "When the settings menu is open",
  Tabs: "When tab navigation is active",
  Attachments: "When navigating image attachments in a select dialog",
  Footer: "When footer indicators are focused",
  MessageSelector: "When the message selector (rewind) is open",
  DiffDialog: "When the diff dialog is open",
  ModelPicker: "When the model picker is open",
  Select: "When a select/list component is focused",
  Plugin: "When the plugin dialog is open"
};
var KEYBINDING_ACTIONS = [
  "app:interrupt",
  "app:exit",
  "app:toggleTodos",
  "app:toggleTranscript",
  "app:toggleBrief",
  "app:toggleTeammatePreview",
  "app:toggleTerminal",
  "app:redraw",
  "app:globalSearch",
  "app:quickOpen",
  "history:search",
  "history:previous",
  "history:next",
  "chat:cancel",
  "chat:killAgents",
  "chat:cycleMode",
  "chat:modelPicker",
  "chat:fastMode",
  "chat:thinkingToggle",
  "chat:submit",
  "chat:newline",
  "chat:undo",
  "chat:externalEditor",
  "chat:stash",
  "chat:imagePaste",
  "chat:messageActions",
  "autocomplete:accept",
  "autocomplete:dismiss",
  "autocomplete:previous",
  "autocomplete:next",
  "confirm:yes",
  "confirm:no",
  "confirm:previous",
  "confirm:next",
  "confirm:nextField",
  "confirm:previousField",
  "confirm:cycleMode",
  "confirm:toggle",
  "confirm:toggleExplanation",
  "tabs:next",
  "tabs:previous",
  "transcript:toggleShowAll",
  "transcript:exit",
  "historySearch:next",
  "historySearch:accept",
  "historySearch:cancel",
  "historySearch:execute",
  "task:background",
  "theme:toggleSyntaxHighlighting",
  "help:dismiss",
  "attachments:next",
  "attachments:previous",
  "attachments:remove",
  "attachments:exit",
  "footer:up",
  "footer:down",
  "footer:next",
  "footer:previous",
  "footer:openSelected",
  "footer:clearSelection",
  "footer:close",
  "messageSelector:up",
  "messageSelector:down",
  "messageSelector:top",
  "messageSelector:bottom",
  "messageSelector:select",
  "diff:dismiss",
  "diff:previousSource",
  "diff:nextSource",
  "diff:back",
  "diff:viewDetails",
  "diff:previousFile",
  "diff:nextFile",
  "modelPicker:decreaseEffort",
  "modelPicker:increaseEffort",
  "modelPicker:toggle1M",
  "select:next",
  "select:previous",
  "select:accept",
  "select:cancel",
  "plugin:toggle",
  "plugin:install",
  "permission:toggleDebug",
  "settings:search",
  "settings:retry",
  "settings:close",
  "select:previousValue",
  "select:nextValue",
  "voice:pushToTalk"
];
var KeybindingBlockSchema = lazySchema(() => exports_external.object({
  context: exports_external.enum(KEYBINDING_CONTEXTS).describe("UI context where these bindings apply. Global bindings work everywhere."),
  bindings: exports_external.record(exports_external.string().describe('Keystroke pattern (e.g., "ctrl+k", "shift+tab")'), exports_external.union([
    exports_external.enum(KEYBINDING_ACTIONS),
    exports_external.string().regex(/^command:[a-zA-Z0-9:\-_]+$/).describe('Command binding (e.g., "command:help", "command:compact"). Executes the slash command as if typed.'),
    exports_external.null().describe("Set to null to unbind a default shortcut")
  ]).describe("Action to trigger, command to invoke, or null to unbind")).describe("Map of keystroke patterns to actions")
}).describe("A block of keybindings for a specific context"));
var KeybindingsSchema = lazySchema(() => exports_external.object({
  $schema: exports_external.string().optional().describe("JSON Schema URL for editor validation"),
  $docs: exports_external.string().optional().describe("Documentation URL"),
  bindings: exports_external.array(KeybindingBlockSchema()).describe("Array of keybinding blocks by context")
}).describe("MiMo Code keybindings configuration. Customize keyboard shortcuts by context."));

// src/skills/bundled/keybindings.ts
init_slowOperations();
init_bundledSkills();
function generateContextsTable() {
  return markdownTable(["Context", "Description"], KEYBINDING_CONTEXTS.map((ctx) => [
    `\`${ctx}\``,
    KEYBINDING_CONTEXT_DESCRIPTIONS[ctx]
  ]));
}
function generateActionsTable() {
  const actionInfo = {};
  for (const block of DEFAULT_BINDINGS) {
    for (const [key, action] of Object.entries(block.bindings)) {
      if (action) {
        if (!actionInfo[action]) {
          actionInfo[action] = { keys: [], context: block.context };
        }
        actionInfo[action].keys.push(key);
      }
    }
  }
  return markdownTable(["Action", "Default Key(s)", "Context"], KEYBINDING_ACTIONS.map((action) => {
    const info = actionInfo[action];
    const keys = info ? info.keys.map((k) => `\`${k}\``).join(", ") : "(none)";
    const context = info ? info.context : inferContextFromAction(action);
    return [`\`${action}\``, keys, context];
  }));
}
function inferContextFromAction(action) {
  const prefix = action.split(":")[0];
  const prefixToContext = {
    app: "Global",
    history: "Global or Chat",
    chat: "Chat",
    autocomplete: "Autocomplete",
    confirm: "Confirmation",
    tabs: "Tabs",
    transcript: "Transcript",
    historySearch: "HistorySearch",
    task: "Task",
    theme: "ThemePicker",
    help: "Help",
    attachments: "Attachments",
    footer: "Footer",
    messageSelector: "MessageSelector",
    diff: "DiffDialog",
    modelPicker: "ModelPicker",
    select: "Select",
    permission: "Confirmation"
  };
  return prefixToContext[prefix ?? ""] ?? "Unknown";
}
function generateReservedShortcuts() {
  const lines = [];
  lines.push("### Non-rebindable (errors)");
  for (const s of NON_REBINDABLE) {
    lines.push(`- \`${s.key}\` \u2014 ${s.reason}`);
  }
  lines.push("");
  lines.push("### Terminal reserved (errors/warnings)");
  for (const s of TERMINAL_RESERVED) {
    lines.push(`- \`${s.key}\` \u2014 ${s.reason} (${s.severity === "error" ? "will not work" : "may conflict"})`);
  }
  lines.push("");
  lines.push("### macOS reserved (errors)");
  for (const s of MACOS_RESERVED) {
    lines.push(`- \`${s.key}\` \u2014 ${s.reason}`);
  }
  return lines.join(`
`);
}
var FILE_FORMAT_EXAMPLE = {
  $schema: "https://www.schemastore.org/claude-code-keybindings.json",
  $docs: "https://code.claude.com/docs/en/keybindings",
  bindings: [
    {
      context: "Chat",
      bindings: {
        "ctrl+e": "chat:externalEditor"
      }
    }
  ]
};
var UNBIND_EXAMPLE = {
  context: "Chat",
  bindings: {
    "ctrl+s": null
  }
};
var REBIND_EXAMPLE = {
  context: "Chat",
  bindings: {
    "ctrl+g": null,
    "ctrl+e": "chat:externalEditor"
  }
};
var CHORD_EXAMPLE = {
  context: "Global",
  bindings: {
    "ctrl+k ctrl+t": "app:toggleTodos"
  }
};
var SECTION_INTRO = [
  "# Keybindings Skill",
  "",
  "Create or modify `~/.claude/keybindings.json` to customize keyboard shortcuts.",
  "",
  "## CRITICAL: Read Before Write",
  "",
  "**Always read `~/.claude/keybindings.json` first** (it may not exist yet). Merge changes with existing bindings \u2014 never replace the entire file.",
  "",
  "- Use **Edit** tool for modifications to existing files",
  "- Use **Write** tool only if the file does not exist yet"
].join(`
`);
var SECTION_FILE_FORMAT = [
  "## File Format",
  "",
  "```json",
  jsonStringify(FILE_FORMAT_EXAMPLE, null, 2),
  "```",
  "",
  "Always include the `$schema` and `$docs` fields."
].join(`
`);
var SECTION_KEYSTROKE_SYNTAX = [
  "## Keystroke Syntax",
  "",
  "**Modifiers** (combine with `+`):",
  "- `ctrl` (alias: `control`)",
  "- `alt` (aliases: `opt`, `option`) \u2014 note: `alt` and `meta` are identical in terminals",
  "- `shift`",
  "- `meta` (aliases: `cmd`, `command`)",
  "",
  "**Special keys**: `escape`/`esc`, `enter`/`return`, `tab`, `space`, `backspace`, `delete`, `up`, `down`, `left`, `right`",
  "",
  "**Chords**: Space-separated keystrokes, e.g. `ctrl+k ctrl+s` (1-second timeout between keystrokes)",
  "",
  "**Examples**: `ctrl+shift+p`, `alt+enter`, `ctrl+k ctrl+n`"
].join(`
`);
var SECTION_UNBINDING = [
  "## Unbinding Default Shortcuts",
  "",
  "Set a key to `null` to remove its default binding:",
  "",
  "```json",
  jsonStringify(UNBIND_EXAMPLE, null, 2),
  "```"
].join(`
`);
var SECTION_INTERACTION = [
  "## How User Bindings Interact with Defaults",
  "",
  "- User bindings are **additive** \u2014 they are appended after the default bindings",
  "- To **move** a binding to a different key: unbind the old key (`null`) AND add the new binding",
  "- A context only needs to appear in the user's file if they want to change something in that context"
].join(`
`);
var SECTION_COMMON_PATTERNS = [
  "## Common Patterns",
  "",
  "### Rebind a key",
  "To change the external editor shortcut from `ctrl+g` to `ctrl+e`:",
  "```json",
  jsonStringify(REBIND_EXAMPLE, null, 2),
  "```",
  "",
  "### Add a chord binding",
  "```json",
  jsonStringify(CHORD_EXAMPLE, null, 2),
  "```"
].join(`
`);
var SECTION_BEHAVIORAL_RULES = [
  "## Behavioral Rules",
  "",
  "1. Only include contexts the user wants to change (minimal overrides)",
  "2. Validate that actions and contexts are from the known lists below",
  "3. Warn the user proactively if they choose a key that conflicts with reserved shortcuts or common tools like tmux (`ctrl+b`) and screen (`ctrl+a`)",
  "4. When adding a new binding for an existing action, the new binding is additive (existing default still works unless explicitly unbound)",
  "5. To fully replace a default binding, unbind the old key AND add the new one"
].join(`
`);
var SECTION_DOCTOR = [
  "## Validation with /doctor",
  "",
  'The `/doctor` command includes a "Keybinding Configuration Issues" section that validates `~/.claude/keybindings.json`.',
  "",
  "### Common Issues and Fixes",
  "",
  markdownTable(["Issue", "Cause", "Fix"], [
    [
      '`keybindings.json must have a "bindings" array`',
      "Missing wrapper object",
      'Wrap bindings in `{ "bindings": [...] }`'
    ],
    [
      '`"bindings" must be an array`',
      "`bindings` is not an array",
      'Set `"bindings"` to an array: `[{ context: ..., bindings: ... }]`'
    ],
    [
      '`Unknown context "X"`',
      "Typo or invalid context name",
      "Use exact context names from the Available Contexts table"
    ],
    [
      '`Duplicate key "X" in Y bindings`',
      "Same key defined twice in one context",
      "Remove the duplicate; JSON uses only the last value"
    ],
    [
      '`"X" may not work: ...`',
      "Key conflicts with terminal/OS reserved shortcut",
      "Choose a different key (see Reserved Shortcuts section)"
    ],
    [
      '`Could not parse keystroke "X"`',
      "Invalid key syntax",
      "Check syntax: use `+` between modifiers, valid key names"
    ],
    [
      '`Invalid action for "X"`',
      "Action value is not a string or null",
      'Actions must be strings like `"app:help"` or `null` to unbind'
    ]
  ]),
  "",
  "### Example /doctor Output",
  "",
  "```",
  "Keybinding Configuration Issues",
  "Location: ~/.claude/keybindings.json",
  '  \u2514 [Error] Unknown context "chat"',
  "    \u2192 Valid contexts: Global, Chat, Autocomplete, ...",
  '  \u2514 [Warning] "ctrl+c" may not work: Terminal interrupt (SIGINT)',
  "```",
  "",
  "**Errors** prevent bindings from working and must be fixed. **Warnings** indicate potential conflicts but the binding may still work."
].join(`
`);
function registerKeybindingsSkill() {
  registerBundledSkill({
    name: "keybindings-help",
    description: 'Use when the user wants to customize keyboard shortcuts, rebind keys, add chord bindings, or modify ~/.claude/keybindings.json. Examples: "rebind ctrl+s", "add a chord shortcut", "change the submit key", "customize keybindings".',
    allowedTools: ["Read"],
    userInvocable: false,
    isEnabled: isKeybindingCustomizationEnabled,
    async getPromptForCommand(args) {
      const contextsTable = generateContextsTable();
      const actionsTable = generateActionsTable();
      const reservedShortcuts = generateReservedShortcuts();
      const sections = [
        SECTION_INTRO,
        SECTION_FILE_FORMAT,
        SECTION_KEYSTROKE_SYNTAX,
        SECTION_UNBINDING,
        SECTION_INTERACTION,
        SECTION_COMMON_PATTERNS,
        SECTION_BEHAVIORAL_RULES,
        SECTION_DOCTOR,
        `## Reserved Shortcuts

${reservedShortcuts}`,
        `## Available Contexts

${contextsTable}`,
        `## Available Actions

${actionsTable}`
      ];
      if (args) {
        sections.push(`## User Request

${args}`);
      }
      return [{ type: "text", text: sections.join(`

`) }];
    }
  });
}
function markdownTable(headers, rows) {
  const separator = headers.map(() => "---");
  return [
    `| ${headers.join(" | ")} |`,
    `| ${separator.join(" | ")} |`,
    ...rows.map((row) => `| ${row.join(" | ")} |`)
  ].join(`
`);
}

// src/skills/bundled/loremIpsum.ts
init_bundledSkills();
var ONE_TOKEN_WORDS = [
  "the",
  "a",
  "an",
  "I",
  "you",
  "he",
  "she",
  "it",
  "we",
  "they",
  "me",
  "him",
  "her",
  "us",
  "them",
  "my",
  "your",
  "his",
  "its",
  "our",
  "this",
  "that",
  "what",
  "who",
  "is",
  "are",
  "was",
  "were",
  "be",
  "been",
  "have",
  "has",
  "had",
  "do",
  "does",
  "did",
  "will",
  "would",
  "can",
  "could",
  "may",
  "might",
  "must",
  "shall",
  "should",
  "make",
  "made",
  "get",
  "got",
  "go",
  "went",
  "come",
  "came",
  "see",
  "saw",
  "know",
  "take",
  "think",
  "look",
  "want",
  "use",
  "find",
  "give",
  "tell",
  "work",
  "call",
  "try",
  "ask",
  "need",
  "feel",
  "seem",
  "leave",
  "put",
  "time",
  "year",
  "day",
  "way",
  "man",
  "thing",
  "life",
  "hand",
  "part",
  "place",
  "case",
  "point",
  "fact",
  "good",
  "new",
  "first",
  "last",
  "long",
  "great",
  "little",
  "own",
  "other",
  "old",
  "right",
  "big",
  "high",
  "small",
  "large",
  "next",
  "early",
  "young",
  "few",
  "public",
  "bad",
  "same",
  "able",
  "in",
  "on",
  "at",
  "to",
  "for",
  "of",
  "with",
  "from",
  "by",
  "about",
  "like",
  "through",
  "over",
  "before",
  "between",
  "under",
  "since",
  "without",
  "and",
  "or",
  "but",
  "if",
  "than",
  "because",
  "as",
  "until",
  "while",
  "so",
  "though",
  "both",
  "each",
  "when",
  "where",
  "why",
  "how",
  "not",
  "now",
  "just",
  "more",
  "also",
  "here",
  "there",
  "then",
  "only",
  "very",
  "well",
  "back",
  "still",
  "even",
  "much",
  "too",
  "such",
  "never",
  "again",
  "most",
  "once",
  "off",
  "away",
  "down",
  "out",
  "up",
  "test",
  "code",
  "data",
  "file",
  "line",
  "text",
  "word",
  "number",
  "system",
  "program",
  "set",
  "run",
  "value",
  "name",
  "type",
  "state",
  "end",
  "start"
];
function generateLoremIpsum(targetTokens) {
  let tokens = 0;
  let result = "";
  while (tokens < targetTokens) {
    const sentenceLength = 10 + Math.floor(Math.random() * 11);
    let wordsInSentence = 0;
    for (let i = 0;i < sentenceLength && tokens < targetTokens; i++) {
      const word = ONE_TOKEN_WORDS[Math.floor(Math.random() * ONE_TOKEN_WORDS.length)];
      result += word;
      tokens++;
      wordsInSentence++;
      if (i === sentenceLength - 1 || tokens >= targetTokens) {
        result += ". ";
      } else {
        result += " ";
      }
    }
    if (wordsInSentence > 0 && Math.random() < 0.2 && tokens < targetTokens) {
      result += `

`;
    }
  }
  return result.trim();
}
function registerLoremIpsumSkill() {
  if (process.env.USER_TYPE !== "ant") {
    return;
  }
  registerBundledSkill({
    name: "lorem-ipsum",
    description: "Generate filler text for long context testing. Specify token count as argument (e.g., /lorem-ipsum 50000). Outputs approximately the requested number of tokens. Ant-only.",
    argumentHint: "[token_count]",
    userInvocable: true,
    async getPromptForCommand(args) {
      const parsed = parseInt(args, 10);
      if (args && (isNaN(parsed) || parsed <= 0)) {
        return [
          {
            type: "text",
            text: "Invalid token count. Please provide a positive number (e.g., /lorem-ipsum 10000)."
          }
        ];
      }
      const targetTokens = parsed || 1e4;
      const cappedTokens = Math.min(targetTokens, 500000);
      if (cappedTokens < targetTokens) {
        return [
          {
            type: "text",
            text: `Requested ${targetTokens} tokens, but capped at 500,000 for safety.

${generateLoremIpsum(cappedTokens)}`
          }
        ];
      }
      const loremText = generateLoremIpsum(cappedTokens);
      return [
        {
          type: "text",
          text: loremText
        }
      ];
    }
  });
}

// src/skills/bundled/remember.ts
init_paths();
init_bundledSkills();
function registerRememberSkill() {
  if (process.env.USER_TYPE !== "ant") {
    return;
  }
  const SKILL_PROMPT = `# Memory Review

## Goal
Review the user's memory landscape and produce a clear report of proposed changes, grouped by action type. Do NOT apply changes \u2014 present proposals for user approval.

## Steps

### 1. Gather all memory layers
Read CLAUDE.md and CLAUDE.local.md from the project root (if they exist). Your auto-memory content is already in your system prompt \u2014 review it there. Note which team memory sections exist, if any.

**Success criteria**: You have the contents of all memory layers and can compare them.

### 2. Classify each auto-memory entry
For each substantive entry in auto-memory, determine the best destination:

| Destination | What belongs there | Examples |
|---|---|---|
| **CLAUDE.md** | Project conventions and instructions for Claude that all contributors should follow | "use bun not npm", "API routes use kebab-case", "test command is bun test", "prefer functional style" |
| **CLAUDE.local.md** | Personal instructions for Claude specific to this user, not applicable to other contributors | "I prefer concise responses", "always explain trade-offs", "don't auto-commit", "run tests before committing" |
| **Team memory** | Org-wide knowledge that applies across repositories (only if team memory is configured) | "deploy PRs go through #deploy-queue", "staging is at staging.internal", "platform team owns infra" |
| **Stay in auto-memory** | Working notes, temporary context, or entries that don't clearly fit elsewhere | Session-specific observations, uncertain patterns |

**Important distinctions:**
- CLAUDE.md and CLAUDE.local.md contain instructions for Claude, not user preferences for external tools (editor theme, IDE keybindings, etc. don't belong in either)
- Workflow practices (PR conventions, merge strategies, branch naming) are ambiguous \u2014 ask the user whether they're personal or team-wide
- When unsure, ask rather than guess

**Success criteria**: Each entry has a proposed destination or is flagged as ambiguous.

### 3. Identify cleanup opportunities
Scan across all layers for:
- **Duplicates**: Auto-memory entries already captured in CLAUDE.md or CLAUDE.local.md \u2192 propose removing from auto-memory
- **Outdated**: CLAUDE.md or CLAUDE.local.md entries contradicted by newer auto-memory entries \u2192 propose updating the older layer
- **Conflicts**: Contradictions between any two layers \u2192 propose resolution, noting which is more recent

**Success criteria**: All cross-layer issues identified.

### 4. Present the report
Output a structured report grouped by action type:
1. **Promotions** \u2014 entries to move, with destination and rationale
2. **Cleanup** \u2014 duplicates, outdated entries, conflicts to resolve
3. **Ambiguous** \u2014 entries where you need the user's input on destination
4. **No action needed** \u2014 brief note on entries that should stay put

If auto-memory is empty, say so and offer to review CLAUDE.md for cleanup.

**Success criteria**: User can review and approve/reject each proposal individually.

## Rules
- Present ALL proposals before making any changes
- Do NOT modify files without explicit user approval
- Do NOT create new files unless the target doesn't exist yet
- Ask about ambiguous entries \u2014 don't guess
`;
  registerBundledSkill({
    name: "remember",
    description: "Review auto-memory entries and propose promotions to CLAUDE.md, CLAUDE.local.md, or shared memory. Also detects outdated, conflicting, and duplicate entries across memory layers.",
    whenToUse: "Use when the user wants to review, organize, or promote their auto-memory entries. Also useful for cleaning up outdated or conflicting entries across CLAUDE.md, CLAUDE.local.md, and auto-memory.",
    userInvocable: true,
    isEnabled: () => isAutoMemoryEnabled(),
    async getPromptForCommand(args) {
      let prompt = SKILL_PROMPT;
      if (args) {
        prompt += `
## Additional context from user

${args}`;
      }
      return [{ type: "text", text: prompt }];
    }
  });
}

// src/skills/bundled/simplify.ts
init_constants2();
init_bundledSkills();
var SIMPLIFY_PROMPT = `# Simplify: Code Review and Cleanup

Review all changed files for reuse, quality, and efficiency. Fix any issues found.

## Phase 1: Identify Changes

Run \`git diff\` (or \`git diff HEAD\` if there are staged changes) to see what changed. If there are no git changes, review the most recently modified files that the user mentioned or that you edited earlier in this conversation.

## Phase 2: Launch Three Review Agents in Parallel

Use the ${AGENT_TOOL_NAME} tool to launch all three agents concurrently in a single message. Pass each agent the full diff so it has the complete context.

### Agent 1: Code Reuse Review

For each change:

1. **Search for existing utilities and helpers** that could replace newly written code. Look for similar patterns elsewhere in the codebase \u2014 common locations are utility directories, shared modules, and files adjacent to the changed ones.
2. **Flag any new function that duplicates existing functionality.** Suggest the existing function to use instead.
3. **Flag any inline logic that could use an existing utility** \u2014 hand-rolled string manipulation, manual path handling, custom environment checks, ad-hoc type guards, and similar patterns are common candidates.

### Agent 2: Code Quality Review

Review the same changes for hacky patterns:

1. **Redundant state**: state that duplicates existing state, cached values that could be derived, observers/effects that could be direct calls
2. **Parameter sprawl**: adding new parameters to a function instead of generalizing or restructuring existing ones
3. **Copy-paste with slight variation**: near-duplicate code blocks that should be unified with a shared abstraction
4. **Leaky abstractions**: exposing internal details that should be encapsulated, or breaking existing abstraction boundaries
5. **Stringly-typed code**: using raw strings where constants, enums (string unions), or branded types already exist in the codebase
6. **Unnecessary JSX nesting**: wrapper Boxes/elements that add no layout value \u2014 check if inner component props (flexShrink, alignItems, etc.) already provide the needed behavior
7. **Unnecessary comments**: comments explaining WHAT the code does (well-named identifiers already do that), narrating the change, or referencing the task/caller \u2014 delete; keep only non-obvious WHY (hidden constraints, subtle invariants, workarounds)

### Agent 3: Efficiency Review

Review the same changes for efficiency:

1. **Unnecessary work**: redundant computations, repeated file reads, duplicate network/API calls, N+1 patterns
2. **Missed concurrency**: independent operations run sequentially when they could run in parallel
3. **Hot-path bloat**: new blocking work added to startup or per-request/per-render hot paths
4. **Recurring no-op updates**: state/store updates inside polling loops, intervals, or event handlers that fire unconditionally \u2014 add a change-detection guard so downstream consumers aren't notified when nothing changed. Also: if a wrapper function takes an updater/reducer callback, verify it honors same-reference returns (or whatever the "no change" signal is) \u2014 otherwise callers' early-return no-ops are silently defeated
5. **Unnecessary existence checks**: pre-checking file/resource existence before operating (TOCTOU anti-pattern) \u2014 operate directly and handle the error
6. **Memory**: unbounded data structures, missing cleanup, event listener leaks
7. **Overly broad operations**: reading entire files when only a portion is needed, loading all items when filtering for one

## Phase 3: Fix Issues

Wait for all three agents to complete. Aggregate their findings and fix each issue directly. If a finding is a false positive or not worth addressing, note it and move on \u2014 do not argue with the finding, just skip it.

When done, briefly summarize what was fixed (or confirm the code was already clean).
`;
function registerSimplifySkill() {
  registerBundledSkill({
    name: "simplify",
    description: "Review changed code for reuse, quality, and efficiency, then fix any issues found.",
    userInvocable: true,
    async getPromptForCommand(args) {
      let prompt = SIMPLIFY_PROMPT;
      if (args) {
        prompt += `

## Additional Focus

${args}`;
      }
      return [{ type: "text", text: prompt }];
    }
  });
}

// src/skills/bundled/skillify.ts
init_sessionMemoryUtils();
init_messages();
init_bundledSkills();
function extractUserMessages(messages) {
  return messages.filter((m) => m.type === "user").map((m) => {
    const content = m.message?.content;
    if (typeof content === "string")
      return content;
    if (!Array.isArray(content))
      return "";
    return content.filter((b) => b.type === "text").map((b) => b.text).join(`
`);
  }).filter((text) => text.trim().length > 0);
}
var SKILLIFY_PROMPT = `# Skillify {{userDescriptionBlock}}

You are capturing this session's repeatable process as a reusable skill.

## Your Session Context

Here is the session memory summary:
<session_memory>
{{sessionMemory}}
</session_memory>

Here are the user's messages during this session. Pay attention to how they steered the process, to help capture their detailed preferences in the skill:
<user_messages>
{{userMessages}}
</user_messages>

## Your Task

### Step 1: Analyze the Session

Before asking any questions, analyze the session to identify:
- What repeatable process was performed
- What the inputs/parameters were
- The distinct steps (in order)
- The success artifacts/criteria (e.g. not just "writing code," but "an open PR with CI fully passing") for each step
- Where the user corrected or steered you
- What tools and permissions were needed
- What agents were used
- What the goals and success artifacts were

### Step 2: Interview the User

You will use the AskUserQuestion to understand what the user wants to automate. Important notes:
- Use AskUserQuestion for ALL questions! Never ask questions via plain text.
- For each round, iterate as much as needed until the user is happy.
- The user always has a freeform "Other" option to type edits or feedback -- do NOT add your own "Needs tweaking" or "I'll provide edits" option. Just offer the substantive choices.

**Round 1: High level confirmation**
- Suggest a name and description for the skill based on your analysis. Ask the user to confirm or rename.
- Suggest high-level goal(s) and specific success criteria for the skill.

**Round 2: More details**
- Present the high-level steps you identified as a numbered list. Tell the user you will dig into the detail in the next round.
- If you think the skill will require arguments, suggest arguments based on what you observed. Make sure you understand what someone would need to provide.
- If it's not clear, ask if this skill should run inline (in the current conversation) or forked (as a sub-agent with its own context). Forked is better for self-contained tasks that don't need mid-process user input; inline is better when the user wants to steer mid-process.
- Ask where the skill should be saved. Suggest a default based on context (repo-specific workflows \u2192 repo, cross-repo personal workflows \u2192 user). Options:
  - **This repo** (\`.claude/skills/<name>/SKILL.md\`) \u2014 for workflows specific to this project
  - **Personal** (\`~/.claude/skills/<name>/SKILL.md\`) \u2014 follows you across all repos

**Round 3: Breaking down each step**
For each major step, if it's not glaringly obvious, ask:
- What does this step produce that later steps need? (data, artifacts, IDs)
- What proves that this step succeeded, and that we can move on?
- Should the user be asked to confirm before proceeding? (especially for irreversible actions like merging, sending messages, or destructive operations)
- Are any steps independent and could run in parallel? (e.g., posting to Slack and monitoring CI at the same time)
- How should the skill be executed? (e.g. always use a Task agent to conduct code review, or invoke an agent team for a set of concurrent steps)
- What are the hard constraints or hard preferences? Things that must or must not happen?

You may do multiple rounds of AskUserQuestion here, one round per step, especially if there are more than 3 steps or many clarification questions. Iterate as much as needed.

IMPORTANT: Pay special attention to places where the user corrected you during the session, to help inform your design.

**Round 4: Final questions**
- Confirm when this skill should be invoked, and suggest/confirm trigger phrases too. (e.g. For a cherrypick workflow you could say: Use when the user wants to cherry-pick a PR to a release branch. Examples: 'cherry-pick to release', 'CP this PR', 'hotfix.')
- You can also ask for any other gotchas or things to watch out for, if it's still unclear.

Stop interviewing once you have enough information. IMPORTANT: Don't over-ask for simple processes!

### Step 3: Write the SKILL.md

Create the skill directory and file at the location the user chose in Round 2.

Use this format:

\`\`\`markdown
---
name: {{skill-name}}
description: {{one-line description}}
allowed-tools:
  {{list of tool permission patterns observed during session}}
when_to_use: {{detailed description of when Claude should automatically invoke this skill, including trigger phrases and example user messages}}
argument-hint: "{{hint showing argument placeholders}}"
arguments:
  {{list of argument names}}
context: {{inline or fork -- omit for inline}}
---

# {{Skill Title}}
Description of skill

## Inputs
- \`$arg_name\`: Description of this input

## Goal
Clearly stated goal for this workflow. Best if you have clearly defined artifacts or criteria for completion.

## Steps

### 1. Step Name
What to do in this step. Be specific and actionable. Include commands when appropriate.

**Success criteria**: ALWAYS include this! This shows that the step is done and we can move on. Can be a list.

IMPORTANT: see the next section below for the per-step annotations you can optionally include for each step.

...
\`\`\`

**Per-step annotations**:
- **Success criteria** is REQUIRED on every step. This helps the model understand what the user expects from their workflow, and when it should have the confidence to move on.
- **Execution**: \`Direct\` (default), \`Task agent\` (straightforward subagents), \`Teammate\` (agent with true parallelism and inter-agent communication), or \`[human]\` (user does it). Only needs specifying if not Direct.
- **Artifacts**: Data this step produces that later steps need (e.g., PR number, commit SHA). Only include if later steps depend on it.
- **Human checkpoint**: When to pause and ask the user before proceeding. Include for irreversible actions (merging, sending messages), error judgment (merge conflicts), or output review.
- **Rules**: Hard rules for the workflow. User corrections during the reference session can be especially useful here.

**Step structure tips:**
- Steps that can run concurrently use sub-numbers: 3a, 3b
- Steps requiring the user to act get \`[human]\` in the title
- Keep simple skills simple -- a 2-step skill doesn't need annotations on every step

**Frontmatter rules:**
- \`allowed-tools\`: Minimum permissions needed (use patterns like \`Bash(gh:*)\` not \`Bash\`)
- \`context\`: Only set \`context: fork\` for self-contained skills that don't need mid-process user input.
- \`when_to_use\` is CRITICAL -- tells the model when to auto-invoke. Start with "Use when..." and include trigger phrases. Example: "Use when the user wants to cherry-pick a PR to a release branch. Examples: 'cherry-pick to release', 'CP this PR', 'hotfix'."
- \`arguments\` and \`argument-hint\`: Only include if the skill takes parameters. Use \`$name\` in the body for substitution.

### Step 4: Confirm and Save

Before writing the file, output the complete SKILL.md content as a yaml code block in your response so the user can review it with proper syntax highlighting. Then ask for confirmation using AskUserQuestion with a simple question like "Does this SKILL.md look good to save?" \u2014 do NOT use the body field, keep the question concise.

After writing, tell the user:
- Where the skill was saved
- How to invoke it: \`/{{skill-name}} [arguments]\`
- That they can edit the SKILL.md directly to refine it
`;
function registerSkillifySkill() {
  if (process.env.USER_TYPE !== "ant") {
    return;
  }
  registerBundledSkill({
    name: "skillify",
    description: "Capture this session's repeatable process into a skill. Call at end of the process you want to capture with an optional description.",
    allowedTools: [
      "Read",
      "Write",
      "Edit",
      "Glob",
      "Grep",
      "AskUserQuestion",
      "Bash(mkdir:*)"
    ],
    userInvocable: true,
    disableModelInvocation: true,
    argumentHint: "[description of the process you want to capture]",
    async getPromptForCommand(args, context) {
      const sessionMemory = await getSessionMemoryContent() ?? "No session memory available.";
      const userMessages = extractUserMessages(getMessagesAfterCompactBoundary(context.messages));
      const userDescriptionBlock = args ? `The user described this process as: "${args}"` : "";
      const prompt = SKILLIFY_PROMPT.replace("{{sessionMemory}}", sessionMemory).replace("{{userMessages}}", userMessages.join(`

---

`)).replace("{{userDescriptionBlock}}", userDescriptionBlock);
      return [{ type: "text", text: prompt }];
    }
  });
}

// src/skills/bundled/stuck.ts
init_bundledSkills();
var STUCK_PROMPT = `# /stuck \u2014 diagnose frozen/slow MiMo Code sessions

The user thinks another MiMo Code session on this machine is frozen, stuck, or very slow. Investigate and post a report to #claude-code-feedback.

## What to look for

Scan for other MiMo Code processes (excluding the current one \u2014 PID is in \`process.pid\` but for shell commands just exclude the PID you see running this prompt). Process names are typically \`claude\` (installed) or \`cli\` (native dev build).

Signs of a stuck session:
- **High CPU (\u226590%) sustained** \u2014 likely an infinite loop. Sample twice, 1-2s apart, to confirm it's not a transient spike.
- **Process state \`D\` (uninterruptible sleep)** \u2014 often an I/O hang. The \`state\` column in \`ps\` output; first character matters (ignore modifiers like \`+\`, \`s\`, \`<\`).
- **Process state \`T\` (stopped)** \u2014 user probably hit Ctrl+Z by accident.
- **Process state \`Z\` (zombie)** \u2014 parent isn't reaping.
- **Very high RSS (\u22654GB)** \u2014 possible memory leak making the session sluggish.
- **Stuck child process** \u2014 a hung \`git\`, \`node\`, or shell subprocess can freeze the parent. Check \`pgrep -lP <pid>\` for each session.

## Investigation steps

1. **List all MiMo Code processes** (macOS/Linux):
   \`\`\`
   ps -axo pid=,pcpu=,rss=,etime=,state=,comm=,command= | grep -E '(claude|cli)' | grep -v grep
   \`\`\`
   Filter to rows where \`comm\` is \`claude\` or (\`cli\` AND the command path contains "claude").

2. **For anything suspicious**, gather more context:
   - Child processes: \`pgrep -lP <pid>\`
   - If high CPU: sample again after 1-2s to confirm it's sustained
   - If a child looks hung (e.g., a git command), note its full command line with \`ps -p <child_pid> -o command=\`
   - Check the session's debug log if you can infer the session ID: \`~/.claude/debug/<session-id>.txt\` (the last few hundred lines often show what it was doing before hanging)

3. **Consider a stack dump** for a truly frozen process (advanced, optional):
   - macOS: \`sample <pid> 3\` gives a 3-second native stack sample
   - This is big \u2014 only grab it if the process is clearly hung and you want to know *why*

## Report

**Only post to Slack if you actually found something stuck.** If every session looks healthy, tell the user that directly \u2014 do not post an all-clear to the channel.

If you did find a stuck/slow session, post to **#claude-code-feedback** (channel ID: \`C07VBSHV7EV\`) using the Slack MCP tool. Use ToolSearch to find \`slack_send_message\` if it's not already loaded.

**Use a two-message structure** to keep the channel scannable:

1. **Top-level message** \u2014 one short line: hostname, MiMo Code version, and a terse symptom (e.g. "session PID 12345 pegged at 100% CPU for 10min" or "git subprocess hung in D state"). No code blocks, no details.
2. **Thread reply** \u2014 the full diagnostic dump. Pass the top-level message's \`ts\` as \`thread_ts\`. Include:
   - PID, CPU%, RSS, state, uptime, command line, child processes
   - Your diagnosis of what's likely wrong
   - Relevant debug log tail or \`sample\` output if you captured it

If Slack MCP isn't available, format the report as a message the user can copy-paste into #claude-code-feedback (and let them know to thread the details themselves).

## Notes
- Don't kill or signal any processes \u2014 this is diagnostic only.
- If the user gave an argument (e.g., a specific PID or symptom), focus there first.
`;
function registerStuckSkill() {
  if (process.env.USER_TYPE !== "ant") {
    return;
  }
  registerBundledSkill({
    name: "stuck",
    description: "[ANT-ONLY] Investigate frozen/stuck/slow MiMo Code sessions on this machine and post a diagnostic report to #claude-code-feedback.",
    userInvocable: true,
    async getPromptForCommand(args) {
      let prompt = STUCK_PROMPT;
      if (args) {
        prompt += `
## User-provided context

${args}
`;
      }
      return [{ type: "text", text: prompt }];
    }
  });
}

// src/skills/bundled/cronManage.ts
init_prompt4();
init_bundledSkills();
function registerCronListSkill() {
  registerBundledSkill({
    name: "cron-list",
    description: "List all scheduled cron jobs in this session",
    whenToUse: "When the user wants to see their scheduled/recurring tasks, check active cron jobs, or review what is currently looping.",
    userInvocable: true,
    isEnabled: isKairosCronEnabled,
    async getPromptForCommand() {
      return [
        {
          type: "text",
          text: `Call ${CRON_LIST_TOOL_NAME} to list all scheduled cron jobs. Display the results in a table with columns: ID, Schedule, Prompt, Recurring, Durable. If no jobs exist, say "No scheduled tasks."`
        }
      ];
    }
  });
}
function registerCronDeleteSkill() {
  registerBundledSkill({
    name: "cron-delete",
    description: "Cancel a scheduled cron job by ID",
    whenToUse: "When the user wants to cancel, stop, or remove a scheduled/recurring task or cron job.",
    argumentHint: "<job-id>",
    userInvocable: true,
    isEnabled: isKairosCronEnabled,
    async getPromptForCommand(args) {
      const id = args.trim();
      if (!id) {
        return [
          {
            type: "text",
            text: `Usage: /cron-delete <job-id>

Provide the job ID to cancel. Use /cron-list to see active jobs and their IDs.`
          }
        ];
      }
      return [
        {
          type: "text",
          text: `Call ${CRON_DELETE_TOOL_NAME} with id "${id}" to cancel that scheduled job. Confirm the result to the user.`
        }
      ];
    }
  });
}

// src/skills/bundled/loop.ts
init_prompt4();
init_bundledSkills();
var DEFAULT_INTERVAL = "10m";
var USAGE_MESSAGE = `Usage: /loop [interval] <prompt>

Run a prompt or slash command on a recurring interval.

Intervals: Ns, Nm, Nh, Nd (e.g. 5m, 30m, 2h, 1d). Minimum granularity is 1 minute.
If no interval is specified, defaults to ${DEFAULT_INTERVAL}.

Examples:
  /loop 5m /babysit-prs
  /loop 30m check the deploy
  /loop 1h /standup 1
  /loop check the deploy          (defaults to ${DEFAULT_INTERVAL})
  /loop check the deploy every 20m`;
function buildPrompt2(args) {
  return `# /loop \u2014 schedule a recurring prompt

Parse the input below into \`[interval] <prompt\u2026>\` and schedule it with ${CRON_CREATE_TOOL_NAME}.

## Parsing (in priority order)

1. **Leading token**: if the first whitespace-delimited token matches \`^\\d+[smhd]$\` (e.g. \`5m\`, \`2h\`), that's the interval; the rest is the prompt.
2. **Trailing "every" clause**: otherwise, if the input ends with \`every <N><unit>\` or \`every <N> <unit-word>\` (e.g. \`every 20m\`, \`every 5 minutes\`, \`every 2 hours\`), extract that as the interval and strip it from the prompt. Only match when what follows "every" is a time expression \u2014 \`check every PR\` has no interval.
3. **Default**: otherwise, interval is \`${DEFAULT_INTERVAL}\` and the entire input is the prompt.

If the resulting prompt is empty, show usage \`/loop [interval] <prompt>\` and stop \u2014 do not call ${CRON_CREATE_TOOL_NAME}.

Examples:
- \`5m /babysit-prs\` \u2192 interval \`5m\`, prompt \`/babysit-prs\` (rule 1)
- \`check the deploy every 20m\` \u2192 interval \`20m\`, prompt \`check the deploy\` (rule 2)
- \`run tests every 5 minutes\` \u2192 interval \`5m\`, prompt \`run tests\` (rule 2)
- \`check the deploy\` \u2192 interval \`${DEFAULT_INTERVAL}\`, prompt \`check the deploy\` (rule 3)
- \`check every PR\` \u2192 interval \`${DEFAULT_INTERVAL}\`, prompt \`check every PR\` (rule 3 \u2014 "every" not followed by time)
- \`5m\` \u2192 empty prompt \u2192 show usage

## Interval \u2192 cron

Supported suffixes: \`s\` (seconds, rounded up to nearest minute, min 1), \`m\` (minutes), \`h\` (hours), \`d\` (days). Convert:

| Interval pattern      | Cron expression     | Notes                                    |
|-----------------------|---------------------|------------------------------------------|
| \`Nm\` where N \u2264 59   | \`*/N * * * *\`     | every N minutes                          |
| \`Nm\` where N \u2265 60   | \`0 */H * * *\`     | round to hours (H = N/60, must divide 24)|
| \`Nh\` where N \u2264 23   | \`0 */N * * *\`     | every N hours                            |
| \`Nd\`                | \`0 0 */N * *\`     | every N days at midnight local           |
| \`Ns\`                | treat as \`ceil(N/60)m\` | cron minimum granularity is 1 minute  |

**If the interval doesn't cleanly divide its unit** (e.g. \`7m\` \u2192 \`*/7 * * * *\` gives uneven gaps at :56\u2192:00; \`90m\` \u2192 1.5h which cron can't express), pick the nearest clean interval and tell the user what you rounded to before scheduling.

## Action

1. Call ${CRON_CREATE_TOOL_NAME} with:
   - \`cron\`: the expression from the table above
   - \`prompt\`: the parsed prompt from above, verbatim (slash commands are passed through unchanged)
   - \`recurring\`: \`true\`
2. Briefly confirm: what's scheduled, the cron expression, the human-readable cadence, that recurring tasks auto-expire after ${DEFAULT_MAX_AGE_DAYS} days, and that they can cancel sooner with ${CRON_DELETE_TOOL_NAME} (include the job ID).
3. **Then immediately execute the parsed prompt now** \u2014 don't wait for the first cron fire. If it's a slash command, invoke it via the Skill tool; otherwise act on it directly.

## Input

${args}`;
}
function registerLoopSkill() {
  registerBundledSkill({
    name: "loop",
    description: "Run a prompt or slash command on a recurring interval (e.g. /loop 5m /foo, defaults to 10m)",
    whenToUse: 'When the user wants to set up a recurring task, poll for status, or run something repeatedly on an interval (e.g. "check the deploy every 5 minutes", "keep running /babysit-prs"). Do NOT invoke for one-off tasks.',
    argumentHint: "[interval] <prompt>",
    userInvocable: true,
    isEnabled: isKairosCronEnabled,
    async getPromptForCommand(args) {
      const trimmed = args.trim();
      if (!trimmed) {
        return [{ type: "text", text: USAGE_MESSAGE }];
      }
      return [{ type: "text", text: buildPrompt2(trimmed) }];
    }
  });
}

// src/skills/bundled/dream.ts
init_paths();
init_consolidationPrompt();
init_consolidationLock();
init_state();
init_sessionStorage();
init_bundledSkills();
var DREAM_PROMPT_PREFIX = `# Dream: Memory Consolidation (manual run)

You are performing a manual dream \u2014 a reflective pass over your memory files. Unlike the automatic background dream, this run has full tool permissions and the user is watching. Synthesize what you've learned recently into durable, well-organized memories so that future sessions can orient quickly.

`;
function registerDreamSkill() {
  registerBundledSkill({
    name: "dream",
    description: "Manually trigger memory consolidation \u2014 review, organize, and prune your auto-memory files.",
    whenToUse: "Use when the user says /dream or wants to manually consolidate memories, organize memory files, or clean up stale entries.",
    userInvocable: true,
    isEnabled: () => isAutoMemoryEnabled(),
    async getPromptForCommand(args) {
      const memoryRoot = getAutoMemPath();
      const transcriptDir = getProjectDir(getOriginalCwd());
      await recordConsolidation();
      const basePrompt = buildConsolidationPrompt(memoryRoot, transcriptDir, "");
      let prompt = DREAM_PROMPT_PREFIX + basePrompt;
      if (args) {
        prompt += `

## Additional context from user

${args}`;
      }
      return [{ type: "text", text: prompt }];
    }
  });
}

// src/skills/bundled/updateConfig.ts
init_v4();
init_types();
init_slowOperations();
init_bundledSkills();
function generateSettingsSchema() {
  const jsonSchema = toJSONSchema(SettingsSchema(), { io: "input" });
  return jsonStringify(jsonSchema, null, 2);
}
var SETTINGS_EXAMPLES_DOCS = `## Settings File Locations

Choose the appropriate file based on scope:

| File | Scope | Git | Use For |
|------|-------|-----|---------|
| \`~/.claude/settings.json\` | Global | N/A | Personal preferences for all projects |
| \`.claude/settings.json\` | Project | Commit | Team-wide hooks, permissions, plugins |
| \`.claude/settings.local.json\` | Project | Gitignore | Personal overrides for this project |

Settings load in order: user \u2192 project \u2192 local (later overrides earlier).

## Settings Schema Reference

### Permissions
\`\`\`json
{
  "permissions": {
    "allow": ["Bash(npm:*)", "Edit(.claude)", "Read"],
    "deny": ["Bash(rm -rf:*)"],
    "ask": ["Write(/etc/*)"],
    "defaultMode": "default" | "plan" | "acceptEdits" | "dontAsk",
    "additionalDirectories": ["/extra/dir"]
  }
}
\`\`\`

**Permission Rule Syntax:**
- Exact match: \`"Bash(npm run test)"\`
- Prefix wildcard: \`"Bash(git:*)"\` - matches \`git status\`, \`git commit\`, etc.
- Tool only: \`"Read"\` - allows all Read operations

### Environment Variables
\`\`\`json
{
  "env": {
    "DEBUG": "true",
    "MY_API_KEY": "value"
  }
}
\`\`\`

### Model & Agent
\`\`\`json
{
  "model": "sonnet",  // or "opus", "haiku", full model ID
  "agent": "agent-name",
  "alwaysThinkingEnabled": true
}
\`\`\`

### Attribution (Commits & PRs)
\`\`\`json
{
  "attribution": {
    "commit": "Custom commit trailer text",
    "pr": "Custom PR description text"
  }
}
\`\`\`
Set \`commit\` or \`pr\` to empty string \`""\` to hide that attribution.

### MCP Server Management
\`\`\`json
{
  "enableAllProjectMcpServers": true,
  "enabledMcpjsonServers": ["server1", "server2"],
  "disabledMcpjsonServers": ["blocked-server"]
}
\`\`\`

### Plugins
\`\`\`json
{
  "enabledPlugins": {
    "formatter@anthropic-tools": true
  }
}
\`\`\`
Plugin syntax: \`plugin-name@source\` where source is \`claude-code-marketplace\`, \`claude-plugins-official\`, or \`builtin\`.

### Other Settings
- \`language\`: Preferred response language (e.g., "japanese")
- \`cleanupPeriodDays\`: Days to keep transcripts (default: 30; 0 disables persistence entirely)
- \`respectGitignore\`: Whether to respect .gitignore (default: true)
- \`spinnerTipsEnabled\`: Show tips in spinner
- \`spinnerVerbs\`: Customize spinner verbs (\`{ "mode": "append" | "replace", "verbs": [...] }\`)
- \`spinnerTipsOverride\`: Override spinner tips (\`{ "excludeDefault": true, "tips": ["Custom tip"] }\`)
- \`syntaxHighlightingDisabled\`: Disable diff highlighting
`;
var HOOKS_DOCS = `## Hooks Configuration

Hooks run commands at specific points in MiMo Code's lifecycle.

### Hook Structure
\`\`\`json
{
  "hooks": {
    "EVENT_NAME": [
      {
        "matcher": "ToolName|OtherTool",
        "hooks": [
          {
            "type": "command",
            "command": "your-command-here",
            "timeout": 60,
            "statusMessage": "Running..."
          }
        ]
      }
    ]
  }
}
\`\`\`

### Hook Events

| Event | Matcher | Purpose |
|-------|---------|---------|
| PermissionRequest | Tool name | Run before permission prompt |
| PreToolUse | Tool name | Run before tool, can block |
| PostToolUse | Tool name | Run after successful tool |
| PostToolUseFailure | Tool name | Run after tool fails |
| Notification | Notification type | Run on notifications |
| Stop | - | Run when Claude stops (including clear, resume, compact) |
| PreCompact | "manual"/"auto" | Before compaction |
| PostCompact | "manual"/"auto" | After compaction (receives summary) |
| UserPromptSubmit | - | When user submits |
| SessionStart | - | When session starts |

**Common tool matchers:** \`Bash\`, \`Write\`, \`Edit\`, \`Read\`, \`Glob\`, \`Grep\`

### Hook Types

**1. Command Hook** - Runs a shell command:
\`\`\`json
{ "type": "command", "command": "prettier --write $FILE", "timeout": 30 }
\`\`\`

**2. Prompt Hook** - Evaluates a condition with LLM:
\`\`\`json
{ "type": "prompt", "prompt": "Is this safe? $ARGUMENTS" }
\`\`\`
Only available for tool events: PreToolUse, PostToolUse, PermissionRequest.

**3. Agent Hook** - Runs an agent with tools:
\`\`\`json
{ "type": "agent", "prompt": "Verify tests pass: $ARGUMENTS" }
\`\`\`
Only available for tool events: PreToolUse, PostToolUse, PermissionRequest.

### Hook Input (stdin JSON)
\`\`\`json
{
  "session_id": "abc123",
  "tool_name": "Write",
  "tool_input": { "file_path": "/path/to/file.txt", "content": "..." },
  "tool_response": { "success": true }  // PostToolUse only
}
\`\`\`

### Hook JSON Output

Hooks can return JSON to control behavior:

\`\`\`json
{
  "systemMessage": "Warning shown to user in UI",
  "continue": false,
  "stopReason": "Message shown when blocking",
  "suppressOutput": false,
  "decision": "block",
  "reason": "Explanation for decision",
  "hookSpecificOutput": {
    "hookEventName": "PostToolUse",
    "additionalContext": "Context injected back to model"
  }
}
\`\`\`

**Fields:**
- \`systemMessage\` - Display a message to the user (all hooks)
- \`continue\` - Set to \`false\` to block/stop (default: true)
- \`stopReason\` - Message shown when \`continue\` is false
- \`suppressOutput\` - Hide stdout from transcript (default: false)
- \`decision\` - "block" for PostToolUse/Stop/UserPromptSubmit hooks (deprecated for PreToolUse, use hookSpecificOutput.permissionDecision instead)
- \`reason\` - Explanation for decision
- \`hookSpecificOutput\` - Event-specific output (must include \`hookEventName\`):
  - \`additionalContext\` - Text injected into model context
  - \`permissionDecision\` - "allow", "deny", or "ask" (PreToolUse only)
  - \`permissionDecisionReason\` - Reason for the permission decision (PreToolUse only)
  - \`updatedInput\` - Modified tool input (PreToolUse only)

### Common Patterns

**Auto-format after writes:**
\`\`\`json
{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Write|Edit",
      "hooks": [{
        "type": "command",
        "command": "jq -r '.tool_response.filePath // .tool_input.file_path' | { read -r f; prettier --write \\"$f\\"; } 2>/dev/null || true"
      }]
    }]
  }
}
\`\`\`

**Log all bash commands:**
\`\`\`json
{
  "hooks": {
    "PreToolUse": [{
      "matcher": "Bash",
      "hooks": [{
        "type": "command",
        "command": "jq -r '.tool_input.command' >> ~/.claude/bash-log.txt"
      }]
    }]
  }
}
\`\`\`

**Stop hook that displays message to user:**

Command must output JSON with \`systemMessage\` field:
\`\`\`bash
# Example command that outputs: {"systemMessage": "Session complete!"}
echo '{"systemMessage": "Session complete!"}'
\`\`\`

**Run tests after code changes:**
\`\`\`json
{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Write|Edit",
      "hooks": [{
        "type": "command",
        "command": "jq -r '.tool_input.file_path // .tool_response.filePath' | grep -E '\\\\.(ts|js)$' && npm test || true"
      }]
    }]
  }
}
\`\`\`
`;
var HOOK_VERIFICATION_FLOW = `## Constructing a Hook (with verification)

Given an event, matcher, target file, and desired behavior, follow this flow. Each step catches a different failure class \u2014 a hook that silently does nothing is worse than no hook.

1. **Dedup check.** Read the target file. If a hook already exists on the same event+matcher, show the existing command and ask: keep it, replace it, or add alongside.

2. **Construct the command for THIS project \u2014 don't assume.** The hook receives JSON on stdin. Build a command that:
   - Extracts any needed payload safely \u2014 use \`jq -r\` into a quoted variable or \`{ read -r f; ... "$f"; }\`, NOT unquoted \`| xargs\` (splits on spaces)
   - Invokes the underlying tool the way this project runs it (npx/bunx/yarn/pnpm? Makefile target? globally-installed?)
   - Skips inputs the tool doesn't handle (formatters often have \`--ignore-unknown\`; if not, guard by extension)
   - Stays RAW for now \u2014 no \`|| true\`, no stderr suppression. You'll wrap it after the pipe-test passes.

3. **Pipe-test the raw command.** Synthesize the stdin payload the hook will receive and pipe it directly:
   - \`Pre|PostToolUse\` on \`Write|Edit\`: \`echo '{"tool_name":"Edit","tool_input":{"file_path":"<a real file from this repo>"}}' | <cmd>\`
   - \`Pre|PostToolUse\` on \`Bash\`: \`echo '{"tool_name":"Bash","tool_input":{"command":"ls"}}' | <cmd>\`
   - \`Stop\`/\`UserPromptSubmit\`/\`SessionStart\`: most commands don't read stdin, so \`echo '{}' | <cmd>\` suffices

   Check exit code AND side effect (file actually formatted, test actually ran). If it fails you get a real error \u2014 fix (wrong package manager? tool not installed? jq path wrong?) and retest. Once it works, wrap with \`2>/dev/null || true\` (unless the user wants a blocking check).

4. **Write the JSON.** Merge into the target file (schema shape in the "Hook Structure" section above). If this creates \`.claude/settings.local.json\` for the first time, add it to .gitignore \u2014 the Write tool doesn't auto-gitignore it.

5. **Validate syntax + schema in one shot:**

   \`jq -e '.hooks.<event>[] | select(.matcher == "<matcher>") | .hooks[] | select(.type == "command") | .command' <target-file>\`

   Exit 0 + prints your command = correct. Exit 4 = matcher doesn't match. Exit 5 = malformed JSON or wrong nesting. A broken settings.json silently disables ALL settings from that file \u2014 fix any pre-existing malformation too.

6. **Prove the hook fires** \u2014 only for \`Pre|PostToolUse\` on a matcher you can trigger in-turn (\`Write|Edit\` via Edit, \`Bash\` via Bash). \`Stop\`/\`UserPromptSubmit\`/\`SessionStart\` fire outside this turn \u2014 skip to step 7.

   For a **formatter** on \`PostToolUse\`/\`Write|Edit\`: introduce a detectable violation via Edit (two consecutive blank lines, bad indentation, missing semicolon \u2014 something this formatter corrects; NOT trailing whitespace, Edit strips that before writing), re-read, confirm the hook **fixed** it. For **anything else**: temporarily prefix the command in settings.json with \`echo "$(date) hook fired" >> /tmp/claude-hook-check.txt; \`, trigger the matching tool (Edit for \`Write|Edit\`, a harmless \`true\` for \`Bash\`), read the sentinel file.

   **Always clean up** \u2014 revert the violation, strip the sentinel prefix \u2014 whether the proof passed or failed.

   **If proof fails but pipe-test passed and \`jq -e\` passed**: the settings watcher isn't watching \`.claude/\` \u2014 it only watches directories that had a settings file when this session started. The hook is written correctly. Tell the user to open \`/hooks\` once (reloads config) or restart \u2014 you can't do this yourself; \`/hooks\` is a user UI menu and opening it ends this turn.

7. **Handoff.** Tell the user the hook is live (or needs \`/hooks\`/restart per the watcher caveat). Point them at \`/hooks\` to review, edit, or disable it later. The UI only shows "Ran N hooks" if a hook errors or is slow \u2014 silent success is invisible by design.
`;
var UPDATE_CONFIG_PROMPT = `# Update Config Skill

Modify MiMo Code configuration by updating settings.json files.

## When Hooks Are Required (Not Memory)

If the user wants something to happen automatically in response to an EVENT, they need a **hook** configured in settings.json. Memory/preferences cannot trigger automated actions.

**These require hooks:**
- "Before compacting, ask me what to preserve" \u2192 PreCompact hook
- "After writing files, run prettier" \u2192 PostToolUse hook with Write|Edit matcher
- "When I run bash commands, log them" \u2192 PreToolUse hook with Bash matcher
- "Always run tests after code changes" \u2192 PostToolUse hook

**Hook events:** PreToolUse, PostToolUse, PreCompact, PostCompact, Stop, Notification, SessionStart

## CRITICAL: Read Before Write

**Always read the existing settings file before making changes.** Merge new settings with existing ones - never replace the entire file.

## CRITICAL: Use AskUserQuestion for Ambiguity

When the user's request is ambiguous, use AskUserQuestion to clarify:
- Which settings file to modify (user/project/local)
- Whether to add to existing arrays or replace them
- Specific values when multiple options exist

## Decision: Config Tool vs Direct Edit

**Use the Config tool** for these simple settings:
- \`theme\`, \`editorMode\`, \`verbose\`, \`model\`
- \`language\`, \`alwaysThinkingEnabled\`
- \`permissions.defaultMode\`

**Edit settings.json directly** for:
- Hooks (PreToolUse, PostToolUse, etc.)
- Complex permission rules (allow/deny arrays)
- Environment variables
- MCP server configuration
- Plugin configuration

## Workflow

1. **Clarify intent** - Ask if the request is ambiguous
2. **Read existing file** - Use Read tool on the target settings file
3. **Merge carefully** - Preserve existing settings, especially arrays
4. **Edit file** - Use Edit tool (if file doesn't exist, ask user to create it first)
5. **Confirm** - Tell user what was changed

## Merging Arrays (Important!)

When adding to permission arrays or hook arrays, **merge with existing**, don't replace:

**WRONG** (replaces existing permissions):
\`\`\`json
{ "permissions": { "allow": ["Bash(npm:*)"] } }
\`\`\`

**RIGHT** (preserves existing + adds new):
\`\`\`json
{
  "permissions": {
    "allow": [
      "Bash(git:*)",      // existing
      "Edit(.claude)",    // existing
      "Bash(npm:*)"       // new
    ]
  }
}
\`\`\`

${SETTINGS_EXAMPLES_DOCS}

${HOOKS_DOCS}

${HOOK_VERIFICATION_FLOW}

## Example Workflows

### Adding a Hook

User: "Format my code after MiMo writes it"

1. **Clarify**: Which formatter? (prettier, gofmt, etc.)
2. **Read**: \`.claude/settings.json\` (or create if missing)
3. **Merge**: Add to existing hooks, don't replace
4. **Result**:
\`\`\`json
{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Write|Edit",
      "hooks": [{
        "type": "command",
        "command": "jq -r '.tool_response.filePath // .tool_input.file_path' | { read -r f; prettier --write \\"$f\\"; } 2>/dev/null || true"
      }]
    }]
  }
}
\`\`\`

### Adding Permissions

User: "Allow npm commands without prompting"

1. **Read**: Existing permissions
2. **Merge**: Add \`Bash(npm:*)\` to allow array
3. **Result**: Combined with existing allows

### Environment Variables

User: "Set DEBUG=true"

1. **Decide**: User settings (global) or project settings?
2. **Read**: Target file
3. **Merge**: Add to env object
\`\`\`json
{ "env": { "DEBUG": "true" } }
\`\`\`

## Common Mistakes to Avoid

1. **Replacing instead of merging** - Always preserve existing settings
2. **Wrong file** - Ask user if scope is unclear
3. **Invalid JSON** - Validate syntax after changes
4. **Forgetting to read first** - Always read before write

## Troubleshooting Hooks

If a hook isn't running:
1. **Check the settings file** - Read ~/.claude/settings.json or .claude/settings.json
2. **Verify JSON syntax** - Invalid JSON silently fails
3. **Check the matcher** - Does it match the tool name? (e.g., "Bash", "Write", "Edit")
4. **Check hook type** - Is it "command", "prompt", or "agent"?
5. **Test the command** - Run the hook command manually to see if it works
6. **Use --debug** - Run \`claude --debug\` to see hook execution logs
`;
function registerUpdateConfigSkill() {
  registerBundledSkill({
    name: "update-config",
    description: 'Use this skill to configure the MiMo Code harness via settings.json. Automated behaviors ("from now on when X", "each time X", "whenever X", "before/after X") require hooks configured in settings.json - the harness executes these, not MiMo, so memory/preferences cannot fulfill them. Also use for: permissions ("allow X", "add permission", "move permission to"), env vars ("set X=Y"), hook troubleshooting, or any changes to settings.json/settings.local.json files. Examples: "allow npm commands", "add bq permission to global settings", "move permission to user settings", "set DEBUG=true", "when claude stops show X". For simple settings like theme/model, use Config tool.',
    allowedTools: ["Read"],
    userInvocable: true,
    async getPromptForCommand(args) {
      if (args.startsWith("[hooks-only]")) {
        const req = args.slice("[hooks-only]".length).trim();
        let prompt2 = HOOKS_DOCS + `

` + HOOK_VERIFICATION_FLOW;
        if (req) {
          prompt2 += `

## Task

${req}`;
        }
        return [{ type: "text", text: prompt2 }];
      }
      const jsonSchema = generateSettingsSchema();
      let prompt = UPDATE_CONFIG_PROMPT;
      prompt += `

## Full Settings JSON Schema

\`\`\`json
${jsonSchema}
\`\`\``;
      if (args) {
        prompt += `

## User Request

${args}`;
      }
      return [{ type: "text", text: prompt }];
    }
  });
}

// src/skills/bundled/verify.ts
init_frontmatterParser();
init_bundledSkills();

// src/skills/bundled/verify/examples/cli.md
var cli_default = `<h1>CLI</h1>
`;

// src/skills/bundled/verify/examples/server.md
var server_default = `<h1>Server</h1>
`;

// src/skills/bundled/verify/SKILL.md
var SKILL_default = `<h1>Skill</h1>
`;

// src/skills/bundled/verifyContent.ts
var SKILL_MD = SKILL_default;
var SKILL_FILES = {
  "examples/cli.md": cli_default,
  "examples/server.md": server_default
};

// src/skills/bundled/verify.ts
var { frontmatter, content: SKILL_BODY } = parseFrontmatter(SKILL_MD);
var DESCRIPTION = typeof frontmatter.description === "string" ? frontmatter.description : "Verify a code change does what it should by running the app.";
function registerVerifySkill() {
  if (process.env.USER_TYPE !== "ant") {
    return;
  }
  registerBundledSkill({
    name: "verify",
    description: DESCRIPTION,
    userInvocable: true,
    files: SKILL_FILES,
    async getPromptForCommand(args) {
      const parts = [SKILL_BODY.trimStart()];
      if (args) {
        parts.push(`## User Request

${args}`);
      }
      return [{ type: "text", text: parts.join(`

`) }];
    }
  });
}

// src/skills/bundled/index.ts
function initBundledSkills() {
  registerUpdateConfigSkill();
  registerKeybindingsSkill();
  registerVerifySkill();
  registerDebugSkill();
  registerLoremIpsumSkill();
  registerSkillifySkill();
  registerRememberSkill();
  registerSimplifySkill();
  registerBatchSkill();
  registerStuckSkill();
  registerLoopSkill();
  registerCronListSkill();
  registerCronDeleteSkill();
  registerDreamSkill();
  if (false) {}
  if (true) {
    const {
      registerScheduleRemoteAgentsSkill: registerScheduleRemoteAgentsSkill2
    } = (init_scheduleRemoteAgents(), __toCommonJS(exports_scheduleRemoteAgents));
    registerScheduleRemoteAgentsSkill2();
  }
  if (false) {}
  if (shouldAutoEnableClaudeInChrome()) {
    registerClaudeInChromeSkill();
  }
  if (false) {}
}

// src/main.tsx
init_loadAgentsDir();
init_prompt6();
init_setup();
init_context();
init_conversationRecovery();
init_envUtils();
init_getWorktreePaths();
init_git();

// src/utils/github/ghAuthStatus.ts
init_execa();
init_which();
async function getGhAuthStatus() {
  const ghPath = await which("gh");
  if (!ghPath) {
    return "not_installed";
  }
  const { exitCode } = await execa("gh", ["auth", "token"], {
    stdout: "ignore",
    stderr: "ignore",
    timeout: 5000,
    reject: false
  });
  return exitCode === 0 ? "authenticated" : "not_authenticated";
}

// src/main.tsx
init_json();
init_log();
init_model();
init_modelStrings();
init_PermissionMode();
init_permissionSetup();
init_cacheUtils();
init_installedPluginsManager();
init_managedPlugins();
init_orphanedPluginFilter();
init_pluginDirectories();
init_ripgrep();
init_sessionStart();
init_sessionStorage();
init_settings();
init_settings2();
init_settingsCache();
init_tasks();
init_pluginTelemetry();

// src/utils/telemetry/skillLoadedEvent.ts
init_commands();
init_analytics();
init_prompt2();
async function logSkillsLoaded(cwd, contextWindowTokens) {
  const skills = await getSkillToolCommands(cwd);
  const skillBudget = getCharBudget(contextWindowTokens);
  for (const skill of skills) {
    if (skill.type !== "prompt")
      continue;
    logEvent("tengu_skill_loaded", {
      _PROTO_skill_name: skill.name,
      skill_source: skill.source,
      skill_loaded_from: skill.loadedFrom,
      skill_budget: skillBudget,
      ...skill.kind && {
        skill_kind: skill.kind
      }
    });
  }
}

// src/main.tsx
init_tempfile();
init_uuid();

// src/commands/mcp/addCommand.ts
init_analytics();
init_auth2();
init_config3();
init_utils();
init_xaaIdpLogin();
init_envUtils();
init_slowOperations();
function registerMcpAddCommand(mcp) {
  mcp.command("add <name> <commandOrUrl> [args...]").description(`Add an MCP server to MiMo Code.

` + `Examples:
` + `  # Add HTTP server:
` + `  mimo mcp add --transport http sentry https://mcp.sentry.dev/mcp

` + `  # Add HTTP server with headers:
` + `  mimo mcp add --transport http corridor https://app.corridor.dev/api/mcp --header "Authorization: Bearer ..."

` + `  # Add stdio server with environment variables:
` + `  mimo mcp add -e API_KEY=xxx my-server -- npx my-mcp-server

` + `  # Add stdio server with subprocess flags:
` + "  mimo mcp add my-server -- my-command --some-flag arg1").option("-s, --scope <scope>", "Configuration scope (local, user, or project)", "local").option("-t, --transport <transport>", "Transport type (stdio, sse, http). Defaults to stdio if not specified.").option("-e, --env <env...>", "Set environment variables (e.g. -e KEY=value)").option("-H, --header <header...>", 'Set WebSocket headers (e.g. -H "X-Api-Key: abc123" -H "X-Custom: value")').option("--client-id <clientId>", "OAuth client ID for HTTP/SSE servers").option("--client-secret", "Prompt for OAuth client secret (or set MCP_CLIENT_SECRET env var)").option("--callback-port <port>", "Fixed port for OAuth callback (for servers requiring pre-registered redirect URIs)").helpOption("-h, --help", "Display help for command").addOption(new Option("--xaa", "Enable XAA (SEP-990) for this server. Requires 'mimo mcp xaa setup' first. Also requires --client-id and --client-secret (for the MCP server's AS).").hideHelp(!isXaaEnabled())).action(async (name, commandOrUrl, args, options) => {
    const actualCommand = commandOrUrl;
    const actualArgs = args;
    if (!name) {
      cliError(`Error: Server name is required.
` + "Usage: mimo mcp add <name> <command> [args...]");
    } else if (!actualCommand) {
      cliError(`Error: Command is required when server name is provided.
` + "Usage: mimo mcp add <name> <command> [args...]");
    }
    try {
      const scope = ensureConfigScope(options.scope);
      const transport = ensureTransport(options.transport);
      if (options.xaa && !isXaaEnabled()) {
        cliError("Error: --xaa requires CLAUDE_CODE_ENABLE_XAA=1 in your environment");
      }
      const xaa = Boolean(options.xaa);
      if (xaa) {
        const missing = [];
        if (!options.clientId)
          missing.push("--client-id");
        if (!options.clientSecret)
          missing.push("--client-secret");
        if (!getXaaIdpSettings()) {
          missing.push("'mimo mcp xaa setup' (settings.xaaIdp not configured)");
        }
        if (missing.length) {
          cliError(`Error: --xaa requires: ${missing.join(", ")}`);
        }
      }
      const transportExplicit = options.transport !== undefined;
      const looksLikeUrl = actualCommand.startsWith("http://") || actualCommand.startsWith("https://") || actualCommand.startsWith("localhost") || actualCommand.endsWith("/sse") || actualCommand.endsWith("/mcp");
      logEvent("tengu_mcp_add", {
        type: transport,
        scope,
        source: "command",
        transport,
        transportExplicit,
        looksLikeUrl
      });
      if (transport === "sse") {
        if (!actualCommand) {
          cliError("Error: URL is required for SSE transport.");
        }
        const headers = options.header ? parseHeaders(options.header) : undefined;
        const callbackPort = options.callbackPort ? parseInt(options.callbackPort, 10) : undefined;
        const oauth = options.clientId || callbackPort || xaa ? {
          ...options.clientId ? { clientId: options.clientId } : {},
          ...callbackPort ? { callbackPort } : {},
          ...xaa ? { xaa: true } : {}
        } : undefined;
        const clientSecret = options.clientSecret && options.clientId ? await readClientSecret() : undefined;
        const serverConfig = {
          type: "sse",
          url: actualCommand,
          headers,
          oauth
        };
        await addMcpConfig(name, serverConfig, scope);
        if (clientSecret) {
          saveMcpClientSecret(name, serverConfig, clientSecret);
        }
        process.stdout.write(`Added SSE MCP server ${name} with URL: ${actualCommand} to ${scope} config
`);
        if (headers) {
          process.stdout.write(`Headers: ${jsonStringify(headers, null, 2)}
`);
        }
      } else if (transport === "http") {
        if (!actualCommand) {
          cliError("Error: URL is required for HTTP transport.");
        }
        const headers = options.header ? parseHeaders(options.header) : undefined;
        const callbackPort = options.callbackPort ? parseInt(options.callbackPort, 10) : undefined;
        const oauth = options.clientId || callbackPort || xaa ? {
          ...options.clientId ? { clientId: options.clientId } : {},
          ...callbackPort ? { callbackPort } : {},
          ...xaa ? { xaa: true } : {}
        } : undefined;
        const clientSecret = options.clientSecret && options.clientId ? await readClientSecret() : undefined;
        const serverConfig = {
          type: "http",
          url: actualCommand,
          headers,
          oauth
        };
        await addMcpConfig(name, serverConfig, scope);
        if (clientSecret) {
          saveMcpClientSecret(name, serverConfig, clientSecret);
        }
        process.stdout.write(`Added HTTP MCP server ${name} with URL: ${actualCommand} to ${scope} config
`);
        if (headers) {
          process.stdout.write(`Headers: ${jsonStringify(headers, null, 2)}
`);
        }
      } else {
        if (options.clientId || options.clientSecret || options.callbackPort || options.xaa) {
          process.stderr.write(`Warning: --client-id, --client-secret, --callback-port, and --xaa are only supported for HTTP/SSE transports and will be ignored for stdio.
`);
        }
        if (!transportExplicit && looksLikeUrl) {
          process.stderr.write(`
Warning: The command "${actualCommand}" looks like a URL, but is being interpreted as a stdio server as --transport was not specified.
`);
          process.stderr.write(`If this is an HTTP server, use: mimo mcp add --transport http ${name} ${actualCommand}
`);
          process.stderr.write(`If this is an SSE server, use: mimo mcp add --transport sse ${name} ${actualCommand}
`);
        }
        const env = parseEnvVars(options.env);
        await addMcpConfig(name, { type: "stdio", command: actualCommand, args: actualArgs, env }, scope);
        process.stdout.write(`Added stdio MCP server ${name} with command: ${actualCommand} ${actualArgs.join(" ")} to ${scope} config
`);
      }
      cliOk(`File modified: ${describeMcpConfigFilePath(scope)}`);
    } catch (error) {
      cliError(error.message);
    }
  });
}

// src/commands/mcp/xaaIdpCommand.ts
init_xaaIdpLogin();
init_errors();
init_settings2();
function registerMcpXaaIdpCommand(mcp) {
  const xaaIdp = mcp.command("xaa").description("Manage the XAA (SEP-990) IdP connection");
  xaaIdp.command("setup").description("Configure the IdP connection (one-time setup for all XAA-enabled servers)").requiredOption("--issuer <url>", "IdP issuer URL (OIDC discovery)").requiredOption("--client-id <id>", "MiMo Code's client_id at the IdP").option("--client-secret", "Read IdP client secret from MCP_XAA_IDP_CLIENT_SECRET env var").option("--callback-port <port>", "Fixed loopback callback port (only if IdP does not honor RFC 8252 port-any matching)").action((options) => {
    let issuerUrl;
    try {
      issuerUrl = new URL(options.issuer);
    } catch {
      return cliError(`Error: --issuer must be a valid URL (got "${options.issuer}")`);
    }
    if (issuerUrl.protocol !== "https:" && !(issuerUrl.protocol === "http:" && (issuerUrl.hostname === "localhost" || issuerUrl.hostname === "127.0.0.1" || issuerUrl.hostname === "[::1]"))) {
      return cliError(`Error: --issuer must use https:// (got "${issuerUrl.protocol}//${issuerUrl.host}")`);
    }
    const callbackPort = options.callbackPort ? parseInt(options.callbackPort, 10) : undefined;
    if (callbackPort !== undefined && (!Number.isInteger(callbackPort) || callbackPort <= 0)) {
      return cliError("Error: --callback-port must be a positive integer");
    }
    const secret = options.clientSecret ? process.env.MCP_XAA_IDP_CLIENT_SECRET : undefined;
    if (options.clientSecret && !secret) {
      return cliError("Error: --client-secret requires MCP_XAA_IDP_CLIENT_SECRET env var");
    }
    const old = getXaaIdpSettings();
    const oldIssuer = old?.issuer;
    const oldClientId = old?.clientId;
    const { error } = updateSettingsForSource("userSettings", {
      xaaIdp: {
        issuer: options.issuer,
        clientId: options.clientId,
        callbackPort
      }
    });
    if (error) {
      return cliError(`Error writing settings: ${error.message}`);
    }
    if (oldIssuer) {
      if (issuerKey(oldIssuer) !== issuerKey(options.issuer)) {
        clearIdpIdToken(oldIssuer);
        clearIdpClientSecret(oldIssuer);
      } else if (oldClientId !== options.clientId) {
        clearIdpIdToken(oldIssuer);
        clearIdpClientSecret(oldIssuer);
      }
    }
    if (secret) {
      const { success, warning } = saveIdpClientSecret(options.issuer, secret);
      if (!success) {
        return cliError(`Error: settings written but keychain save failed${warning ? ` \u2014 ${warning}` : ""}. ` + `Re-run with --client-secret once keychain is available.`);
      }
    }
    cliOk(`XAA IdP connection configured for ${options.issuer}`);
  });
  xaaIdp.command("login").description("Cache an IdP id_token so XAA-enabled MCP servers authenticate " + "silently. Default: run the OIDC browser login. With --id-token: " + "write a pre-obtained JWT directly (used by conformance/e2e tests " + "where the mock IdP does not serve /authorize).").option("--force", "Ignore any cached id_token and re-login (useful after IdP-side revocation)").option("--id-token <jwt>", "Write this pre-obtained id_token directly to cache, skipping the OIDC browser login").action(async (options) => {
    const idp = getXaaIdpSettings();
    if (!idp) {
      return cliError("Error: no XAA IdP connection. Run 'mimo mcp xaa setup' first.");
    }
    if (options.idToken) {
      const expiresAt = saveIdpIdTokenFromJwt(idp.issuer, options.idToken);
      return cliOk(`id_token cached for ${idp.issuer} (expires ${new Date(expiresAt).toISOString()})`);
    }
    if (options.force) {
      clearIdpIdToken(idp.issuer);
    }
    const wasCached = getCachedIdpIdToken(idp.issuer) !== undefined;
    if (wasCached) {
      return cliOk(`Already logged in to ${idp.issuer} (cached id_token still valid). Use --force to re-login.`);
    }
    process.stdout.write(`Opening browser for IdP login at ${idp.issuer}\u2026
`);
    try {
      await acquireIdpIdToken({
        idpIssuer: idp.issuer,
        idpClientId: idp.clientId,
        idpClientSecret: getIdpClientSecret(idp.issuer),
        callbackPort: idp.callbackPort,
        onAuthorizationUrl: (url) => {
          process.stdout.write(`If the browser did not open, visit:
  ${url}
`);
        }
      });
      cliOk(`Logged in. MCP servers with --xaa will now authenticate silently.`);
    } catch (e) {
      cliError(`IdP login failed: ${errorMessage(e)}`);
    }
  });
  xaaIdp.command("show").description("Show the current IdP connection config").action(() => {
    const idp = getXaaIdpSettings();
    if (!idp) {
      return cliOk("No XAA IdP connection configured.");
    }
    const hasSecret = getIdpClientSecret(idp.issuer) !== undefined;
    const hasIdToken = getCachedIdpIdToken(idp.issuer) !== undefined;
    process.stdout.write(`Issuer:        ${idp.issuer}
`);
    process.stdout.write(`Client ID:     ${idp.clientId}
`);
    if (idp.callbackPort !== undefined) {
      process.stdout.write(`Callback port: ${idp.callbackPort}
`);
    }
    process.stdout.write(`Client secret: ${hasSecret ? "(stored in keychain)" : "(not set \u2014 PKCE-only)"}
`);
    process.stdout.write(`Logged in:     ${hasIdToken ? "yes (id_token cached)" : "no \u2014 run 'mimo mcp xaa login'"}
`);
    cliOk();
  });
  xaaIdp.command("clear").description("Clear the IdP connection config and cached id_token").action(() => {
    const idp = getXaaIdpSettings();
    const { error } = updateSettingsForSource("userSettings", {
      xaaIdp: undefined
    });
    if (error) {
      return cliError(`Error writing settings: ${error.message}`);
    }
    if (idp) {
      clearIdpIdToken(idp.issuer);
      clearIdpClientSecret(idp.issuer);
    }
    cliOk("XAA IdP connection cleared");
  });
}

// src/main.tsx
init_internalLogging();
init_claudeai();
init_client2();
init_config3();
init_utils();
init_xaaIdpLogin();
init_api2();
init_common();
init_cleanupRegistry();

// src/utils/cliArgs.ts
function eagerParseCliFlag(flagName, argv = process.argv) {
  for (let i = 0;i < argv.length; i++) {
    const arg = argv[i];
    if (arg?.startsWith(`${flagName}=`)) {
      return arg.slice(flagName.length + 1);
    }
    if (arg === flagName && i + 1 < argv.length) {
      return argv[i + 1];
    }
  }
  return;
}

// src/main.tsx
init_commitAttribution();
init_concurrentSessions();
init_cwd();
init_debug();
init_errors();
init_fsOperations();
init_gracefulShutdown();
init_hookEvents();
init_modelCapabilities();
init_process();
init_Shell();
init_constants();
init_stringUtils();
init_state();

// src/migrations/migrateBypassPermissionsAcceptedToSettings.ts
init_analytics();
init_config2();
init_log();
init_settings2();
function migrateBypassPermissionsAcceptedToSettings() {
  const globalConfig = getGlobalConfig();
  if (!globalConfig.bypassPermissionsModeAccepted) {
    return;
  }
  try {
    if (!hasSkipDangerousModePermissionPrompt()) {
      updateSettingsForSource("userSettings", {
        skipDangerousModePermissionPrompt: true
      });
    }
    logEvent("tengu_migrate_bypass_permissions_accepted", {});
    saveGlobalConfig((current) => {
      if (!("bypassPermissionsModeAccepted" in current))
        return current;
      const { bypassPermissionsModeAccepted: _, ...updatedConfig } = current;
      return updatedConfig;
    });
  } catch (error) {
    logError(new Error(`Failed to migrate bypass permissions accepted: ${error}`));
  }
}

// src/migrations/migrateEnableAllProjectMcpServersToSettings.ts
init_analytics();
init_config2();
init_log();
init_settings2();
function migrateEnableAllProjectMcpServersToSettings() {
  const projectConfig = getCurrentProjectConfig();
  const hasEnableAll = projectConfig.enableAllProjectMcpServers !== undefined;
  const hasEnabledServers = projectConfig.enabledMcpjsonServers && projectConfig.enabledMcpjsonServers.length > 0;
  const hasDisabledServers = projectConfig.disabledMcpjsonServers && projectConfig.disabledMcpjsonServers.length > 0;
  if (!hasEnableAll && !hasEnabledServers && !hasDisabledServers) {
    return;
  }
  try {
    const existingSettings = getSettingsForSource("localSettings") || {};
    const updates = {};
    const fieldsToRemove = [];
    if (hasEnableAll && existingSettings.enableAllProjectMcpServers === undefined) {
      updates.enableAllProjectMcpServers = projectConfig.enableAllProjectMcpServers;
      fieldsToRemove.push("enableAllProjectMcpServers");
    } else if (hasEnableAll) {
      fieldsToRemove.push("enableAllProjectMcpServers");
    }
    if (hasEnabledServers && projectConfig.enabledMcpjsonServers) {
      const existingEnabledServers = existingSettings.enabledMcpjsonServers || [];
      updates.enabledMcpjsonServers = [
        ...new Set([
          ...existingEnabledServers,
          ...projectConfig.enabledMcpjsonServers
        ])
      ];
      fieldsToRemove.push("enabledMcpjsonServers");
    }
    if (hasDisabledServers && projectConfig.disabledMcpjsonServers) {
      const existingDisabledServers = existingSettings.disabledMcpjsonServers || [];
      updates.disabledMcpjsonServers = [
        ...new Set([
          ...existingDisabledServers,
          ...projectConfig.disabledMcpjsonServers
        ])
      ];
      fieldsToRemove.push("disabledMcpjsonServers");
    }
    if (Object.keys(updates).length > 0) {
      updateSettingsForSource("localSettings", updates);
    }
    if (fieldsToRemove.includes("enableAllProjectMcpServers") || fieldsToRemove.includes("enabledMcpjsonServers") || fieldsToRemove.includes("disabledMcpjsonServers")) {
      saveCurrentProjectConfig((current) => {
        const {
          enableAllProjectMcpServers: _enableAll,
          enabledMcpjsonServers: _enabledServers,
          disabledMcpjsonServers: _disabledServers,
          ...configWithoutFields
        } = current;
        return configWithoutFields;
      });
    }
    logEvent("tengu_migrate_mcp_approval_fields_success", {
      migratedCount: fieldsToRemove.length
    });
  } catch (e) {
    logError(e);
    logEvent("tengu_migrate_mcp_approval_fields_error", {});
  }
}

// src/migrations/migrateFennecToOpus.ts
init_settings2();
function migrateFennecToOpus() {
  if (process.env.USER_TYPE !== "ant") {
    return;
  }
  const settings = getSettingsForSource("userSettings");
  const model = settings?.model;
  if (typeof model === "string") {
    if (model.startsWith("fennec-latest[1m]")) {
      updateSettingsForSource("userSettings", {
        model: "opus[1m]"
      });
    } else if (model.startsWith("fennec-latest")) {
      updateSettingsForSource("userSettings", {
        model: "opus"
      });
    } else if (model.startsWith("fennec-fast-latest") || model.startsWith("opus-4-5-fast")) {
      updateSettingsForSource("userSettings", {
        model: "opus[1m]",
        fastMode: true
      });
    }
  }
}

// src/migrations/migrateLegacyOpusToCurrent.ts
init_analytics();
init_config2();
init_model();
init_providers();
init_settings2();
function migrateLegacyOpusToCurrent() {
  if (getAPIProvider() !== "firstParty") {
    return;
  }
  if (!isLegacyModelRemapEnabled()) {
    return;
  }
  const model = getSettingsForSource("userSettings")?.model;
  if (model !== "claude-opus-4-20250514" && model !== "claude-opus-4-1-20250805" && model !== "claude-opus-4-0" && model !== "claude-opus-4-1") {
    return;
  }
  updateSettingsForSource("userSettings", { model: "opus" });
  saveGlobalConfig((current) => ({
    ...current,
    legacyOpusMigrationTimestamp: Date.now()
  }));
  logEvent("tengu_legacy_opus_migration", {
    from_model: model
  });
}

// src/migrations/migrateOpusToOpus1m.ts
init_analytics();
init_model();
init_settings2();
function migrateOpusToOpus1m() {
  if (!isOpus1mMergeEnabled()) {
    return;
  }
  const model = getSettingsForSource("userSettings")?.model;
  if (model !== "opus") {
    return;
  }
  const migrated = "opus[1m]";
  const modelToSet = parseUserSpecifiedModel(migrated) === parseUserSpecifiedModel(getDefaultMainLoopModelSetting()) ? undefined : migrated;
  updateSettingsForSource("userSettings", { model: modelToSet });
  logEvent("tengu_opus_to_opus1m_migration", {});
}

// src/migrations/migrateReplBridgeEnabledToRemoteControlAtStartup.ts
init_config2();
function migrateReplBridgeEnabledToRemoteControlAtStartup() {
  saveGlobalConfig((prev) => {
    const oldValue = prev["replBridgeEnabled"];
    if (oldValue === undefined)
      return prev;
    if (prev.remoteControlAtStartup !== undefined)
      return prev;
    const next = { ...prev, remoteControlAtStartup: Boolean(oldValue) };
    delete next["replBridgeEnabled"];
    return next;
  });
}

// src/migrations/migrateSonnet1mToSonnet45.ts
init_state();
init_config2();
init_settings2();
function migrateSonnet1mToSonnet45() {
  const config = getGlobalConfig();
  if (config.sonnet1m45MigrationComplete) {
    return;
  }
  const model = getSettingsForSource("userSettings")?.model;
  if (model === "sonnet[1m]") {
    updateSettingsForSource("userSettings", {
      model: "sonnet-4-5-20250929[1m]"
    });
  }
  const override = getMainLoopModelOverride();
  if (override === "sonnet[1m]") {
    setMainLoopModelOverride("sonnet-4-5-20250929[1m]");
  }
  saveGlobalConfig((current) => ({
    ...current,
    sonnet1m45MigrationComplete: true
  }));
}

// src/migrations/migrateSonnet45ToSonnet46.ts
init_analytics();
init_auth();
init_config2();
init_providers();
init_settings2();
function migrateSonnet45ToSonnet46() {
  if (getAPIProvider() !== "firstParty") {
    return;
  }
  if (!isProSubscriber() && !isMaxSubscriber() && !isTeamPremiumSubscriber()) {
    return;
  }
  const model = getSettingsForSource("userSettings")?.model;
  if (model !== "claude-sonnet-4-5-20250929" && model !== "claude-sonnet-4-5-20250929[1m]" && model !== "sonnet-4-5-20250929" && model !== "sonnet-4-5-20250929[1m]") {
    return;
  }
  const has1m = model.endsWith("[1m]");
  updateSettingsForSource("userSettings", {
    model: has1m ? "sonnet[1m]" : "sonnet"
  });
  const config = getGlobalConfig();
  if (config.numStartups > 1) {
    saveGlobalConfig((current) => ({
      ...current,
      sonnet45To46MigrationTimestamp: Date.now()
    }));
  }
  logEvent("tengu_sonnet45_to_46_migration", {
    from_model: model,
    has_1m: has1m
  });
}

// src/migrations/resetAutoModeOptInForDefaultOffer.ts
init_analytics();
init_config2();
init_log();
init_permissionSetup();
init_settings2();
function resetAutoModeOptInForDefaultOffer() {
  if (true) {
    const config = getGlobalConfig();
    if (config.hasResetAutoModeOptInForDefaultOffer)
      return;
    if (getAutoModeEnabledState() !== "enabled")
      return;
    try {
      const user = getSettingsForSource("userSettings");
      if (user?.skipAutoPermissionPrompt && user?.permissions?.defaultMode !== "auto") {
        updateSettingsForSource("userSettings", {
          skipAutoPermissionPrompt: undefined
        });
        logEvent("tengu_migrate_reset_auto_opt_in_for_default_offer", {});
      }
      saveGlobalConfig((c) => {
        if (c.hasResetAutoModeOptInForDefaultOffer)
          return c;
        return { ...c, hasResetAutoModeOptInForDefaultOffer: true };
      });
    } catch (error) {
      logError(new Error(`Failed to reset auto mode opt-in: ${error}`));
    }
  }
}

// src/migrations/resetProToOpusDefault.ts
init_analytics();
init_auth();
init_config2();
init_providers();
init_settings2();
function resetProToOpusDefault() {
  const config = getGlobalConfig();
  if (config.opusProMigrationComplete) {
    return;
  }
  const apiProvider = getAPIProvider();
  if (apiProvider !== "firstParty" || !isProSubscriber()) {
    saveGlobalConfig((current) => ({
      ...current,
      opusProMigrationComplete: true
    }));
    logEvent("tengu_reset_pro_to_opus_default", { skipped: true });
    return;
  }
  const settings = getSettings_DEPRECATED();
  if (settings?.model === undefined) {
    const opusProMigrationTimestamp = Date.now();
    saveGlobalConfig((current) => ({
      ...current,
      opusProMigrationComplete: true,
      opusProMigrationTimestamp
    }));
    logEvent("tengu_reset_pro_to_opus_default", {
      skipped: false,
      had_custom_model: false
    });
  } else {
    saveGlobalConfig((current) => ({
      ...current,
      opusProMigrationComplete: true
    }));
    logEvent("tengu_reset_pro_to_opus_default", {
      skipped: false,
      had_custom_model: true
    });
  }
}

// src/server/createDirectConnectSession.ts
init_errors();
init_slowOperations();

// src/server/types.ts
init_v4();
init_lazySchema();
var connectResponseSchema = lazySchema(() => exports_external.object({
  session_id: exports_external.string(),
  ws_url: exports_external.string(),
  work_dir: exports_external.string().optional()
}));

// src/server/createDirectConnectSession.ts
class DirectConnectError extends Error {
  constructor(message) {
    super(message);
    this.name = "DirectConnectError";
  }
}
async function createDirectConnectSession({
  serverUrl,
  authToken,
  cwd,
  dangerouslySkipPermissions
}) {
  const headers = {
    "content-type": "application/json"
  };
  if (authToken) {
    headers["authorization"] = `Bearer ${authToken}`;
  }
  let resp;
  try {
    resp = await fetch(`${serverUrl}/sessions`, {
      method: "POST",
      headers,
      body: jsonStringify({
        cwd,
        ...dangerouslySkipPermissions && {
          dangerously_skip_permissions: true
        }
      })
    });
  } catch (err) {
    throw new DirectConnectError(`Failed to connect to server at ${serverUrl}: ${errorMessage(err)}`);
  }
  if (!resp.ok) {
    throw new DirectConnectError(`Failed to create session: ${resp.status} ${resp.statusText}`);
  }
  const result = connectResponseSchema().safeParse(await resp.json());
  if (!result.success) {
    throw new DirectConnectError(`Invalid session response: ${result.error.message}`);
  }
  const data = result.data;
  return {
    config: {
      serverUrl,
      sessionId: data.session_id,
      wsUrl: data.ws_url,
      authToken
    },
    workDir: data.work_dir
  };
}

// src/main.tsx
init_manager();
init_promptSuggestion();
init_AppStateStore();
init_store();
init_ids();
init_betas();
init_bundledMode();
init_diagLogs();
init_pluginLoader();
init_releaseNotes();
init_sandbox_adapter();
init_api();
init_teleport();
init_thinking();
init_user();
init_worktree();
profileCheckpoint("main_tsx_entry");
startMdmRawRead();
startKeychainPrefetch();
var getTeammateUtils = () => (init_teammate(), __toCommonJS(exports_teammate));
var getTeammatePromptAddendum = () => (init_teammatePromptAddendum(), __toCommonJS(exports_teammatePromptAddendum));
var getTeammateModeSnapshot = () => (init_teammateModeSnapshot(), __toCommonJS(exports_teammateModeSnapshot));
var coordinatorModeModule = null;
var assistantModule = (init_assistant(), __toCommonJS(exports_assistant));
var kairosGate = (init_gate(), __toCommonJS(exports_gate));
var autoModeStateModule = (init_autoModeState(), __toCommonJS(exports_autoModeState));
profileCheckpoint("main_tsx_imports_loaded");
function logManagedSettings() {
  try {
    const policySettings = getSettingsForSource("policySettings");
    if (policySettings) {
      const allKeys = getManagedSettingsKeysForLogging(policySettings);
      logEvent("tengu_managed_settings_loaded", {
        keyCount: allKeys.length,
        keys: allKeys.join(",")
      });
    }
  } catch {}
}
function logSessionTelemetry() {
  const model = parseUserSpecifiedModel(getInitialMainLoopModel() ?? getDefaultMainLoopModel());
  logSkillsLoaded(getCwd(), getContextWindowForModel(model, getSdkBetas()));
  loadAllPluginsCacheOnly().then(({ enabled, errors }) => {
    const managedNames = getManagedPluginNames();
    logPluginsEnabledForSession(enabled, managedNames, getPluginSeedDirs());
    logPluginLoadErrors(errors, managedNames);
  }).catch((err) => logError(err));
}
function getCertEnvVarTelemetry() {
  const result = {};
  if (process.env.NODE_EXTRA_CA_CERTS) {
    result.has_node_extra_ca_certs = true;
  }
  if (process.env.CLAUDE_CODE_CLIENT_CERT) {
    result.has_client_cert = true;
  }
  if (hasNodeOption("--use-system-ca")) {
    result.has_use_system_ca = true;
  }
  if (hasNodeOption("--use-openssl-ca")) {
    result.has_use_openssl_ca = true;
  }
  return result;
}
async function logStartupTelemetry() {
  if (isAnalyticsDisabled())
    return;
  const [isGit, worktreeCount, ghAuthStatus] = await Promise.all([
    getIsGit(),
    getWorktreeCount(),
    getGhAuthStatus()
  ]);
  logEvent("tengu_startup_telemetry", {
    is_git: isGit,
    worktree_count: worktreeCount,
    gh_auth_status: ghAuthStatus,
    sandbox_enabled: SandboxManager.isSandboxingEnabled(),
    are_unsandboxed_commands_allowed: SandboxManager.areUnsandboxedCommandsAllowed(),
    is_auto_bash_allowed_if_sandbox_enabled: SandboxManager.isAutoAllowBashIfSandboxedEnabled(),
    auto_updater_disabled: isAutoUpdaterDisabled(),
    prefers_reduced_motion: getInitialSettings().prefersReducedMotion ?? false,
    ...getCertEnvVarTelemetry()
  });
}
var CURRENT_MIGRATION_VERSION = 11;
function runMigrations() {
  if (getGlobalConfig().migrationVersion !== CURRENT_MIGRATION_VERSION) {
    migrateBypassPermissionsAcceptedToSettings();
    migrateEnableAllProjectMcpServersToSettings();
    resetProToOpusDefault();
    migrateSonnet1mToSonnet45();
    migrateLegacyOpusToCurrent();
    migrateSonnet45ToSonnet46();
    migrateOpusToOpus1m();
    migrateReplBridgeEnabledToRemoteControlAtStartup();
    if (true) {
      resetAutoModeOptInForDefaultOffer();
    }
    if (process.env.USER_TYPE === "ant") {
      migrateFennecToOpus();
    }
    saveGlobalConfig((prev) => prev.migrationVersion === CURRENT_MIGRATION_VERSION ? prev : { ...prev, migrationVersion: CURRENT_MIGRATION_VERSION });
  }
  migrateChangelogFromConfig().catch(() => {});
}
function prefetchSystemContextIfSafe() {
  const isNonInteractiveSession = getIsNonInteractiveSession();
  if (isNonInteractiveSession) {
    logForDiagnosticsNoPII("info", "prefetch_system_context_non_interactive");
    getSystemContext();
    return;
  }
  const hasTrust = checkHasTrustDialogAccepted();
  if (hasTrust) {
    logForDiagnosticsNoPII("info", "prefetch_system_context_has_trust");
    getSystemContext();
  } else {
    logForDiagnosticsNoPII("info", "prefetch_system_context_skipped_no_trust");
  }
}
function startDeferredPrefetches() {
  if (isEnvTruthy(process.env.CLAUDE_CODE_EXIT_AFTER_FIRST_RENDER) || isBareMode()) {
    return;
  }
  initUser();
  getUserContext();
  prefetchSystemContextIfSafe();
  getRelevantTips();
  if (isEnvTruthy(process.env.CLAUDE_CODE_USE_BEDROCK) && !isEnvTruthy(process.env.CLAUDE_CODE_SKIP_BEDROCK_AUTH)) {
    prefetchAwsCredentialsAndBedRockInfoIfSafe();
  }
  if (isEnvTruthy(process.env.CLAUDE_CODE_USE_VERTEX) && !isEnvTruthy(process.env.CLAUDE_CODE_SKIP_VERTEX_AUTH)) {
    prefetchGcpCredentialsIfSafe();
  }
  countFilesRoundedRg(getCwd(), AbortSignal.timeout(3000), []);
  initializeAnalyticsGates();
  refreshModelCapabilities();
  settingsChangeDetector.initialize();
  if (!isBareMode()) {
    skillChangeDetector.initialize();
  }
  if (process.env.USER_TYPE === "ant") {
    import("./chunk-xv3era3s.js").then((m) => m.startEventLoopStallDetector());
  }
}
function loadSettingsFromFlag(settingsFile) {
  try {
    const trimmedSettings = settingsFile.trim();
    const looksLikeJson = trimmedSettings.startsWith("{") && trimmedSettings.endsWith("}");
    let settingsPath;
    if (looksLikeJson) {
      const parsedJson = safeParseJSON(trimmedSettings);
      if (!parsedJson) {
        process.stderr.write(source_default.red(`Error: Invalid JSON provided to --settings
`));
        process.exit(1);
      }
      settingsPath = generateTempFilePath("claude-settings", ".json", {
        contentHash: trimmedSettings
      });
      writeFileSync_DEPRECATED(settingsPath, trimmedSettings, "utf8");
    } else {
      const { resolvedPath: resolvedSettingsPath } = safeResolvePath(getFsImplementation(), settingsFile);
      try {
        readFileSync(resolvedSettingsPath, "utf8");
      } catch (e) {
        if (isENOENT(e)) {
          process.stderr.write(source_default.red(`Error: Settings file not found: ${resolvedSettingsPath}
`));
          process.exit(1);
        }
        throw e;
      }
      settingsPath = resolvedSettingsPath;
    }
    setFlagSettingsPath(settingsPath);
    resetSettingsCache();
  } catch (error) {
    if (error instanceof Error) {
      logError(error);
    }
    process.stderr.write(source_default.red(`Error processing settings: ${errorMessage(error)}
`));
    process.exit(1);
  }
}
function loadSettingSourcesFromFlag(settingSourcesArg) {
  try {
    const sources = parseSettingSourcesFlag(settingSourcesArg);
    setAllowedSettingSources(sources);
    resetSettingsCache();
  } catch (error) {
    if (error instanceof Error) {
      logError(error);
    }
    process.stderr.write(source_default.red(`Error processing --setting-sources: ${errorMessage(error)}
`));
    process.exit(1);
  }
}
function eagerLoadSettings() {
  profileCheckpoint("eagerLoadSettings_start");
  const settingsFile = eagerParseCliFlag("--settings");
  if (settingsFile) {
    loadSettingsFromFlag(settingsFile);
  }
  const settingSourcesArg = eagerParseCliFlag("--setting-sources");
  if (settingSourcesArg !== undefined) {
    loadSettingSourcesFromFlag(settingSourcesArg);
  }
  profileCheckpoint("eagerLoadSettings_end");
}
function initializeEntrypoint(isNonInteractive) {
  if (process.env.CLAUDE_CODE_ENTRYPOINT) {
    return;
  }
  const cliArgs = process.argv.slice(2);
  const mcpIndex = cliArgs.indexOf("mcp");
  if (mcpIndex !== -1 && cliArgs[mcpIndex + 1] === "serve") {
    process.env.CLAUDE_CODE_ENTRYPOINT = "mcp";
    return;
  }
  if (isEnvTruthy(process.env.CLAUDE_CODE_ACTION)) {
    process.env.CLAUDE_CODE_ENTRYPOINT = "claude-code-github-action";
    return;
  }
  process.env.CLAUDE_CODE_ENTRYPOINT = isNonInteractive ? "sdk-cli" : "cli";
}
var _pendingConnect = {
  url: undefined,
  authToken: undefined,
  dangerouslySkipPermissions: false
};
var _pendingAssistantChat = { sessionId: undefined, discover: false };
var _pendingSSH = {
  host: undefined,
  cwd: undefined,
  permissionMode: undefined,
  dangerouslySkipPermissions: false,
  local: false,
  extraCliArgs: [],
  remoteBin: undefined
};
async function main() {
  profileCheckpoint("main_function_start");
  process.env.NoDefaultCurrentDirectoryInExePath = "1";
  initializeWarningHandler();
  process.on("exit", () => {
    resetCursor();
  });
  process.on("SIGINT", () => {
    if (process.argv.includes("-p") || process.argv.includes("--print")) {
      return;
    }
    process.exit(0);
  });
  profileCheckpoint("main_warning_handler_initialized");
  if (true) {
    const rawCliArgs = process.argv.slice(2);
    const ccIdx = rawCliArgs.findIndex((a) => a.startsWith("cc://") || a.startsWith("cc+unix://"));
    if (ccIdx !== -1 && _pendingConnect) {
      const ccUrl = rawCliArgs[ccIdx];
      const { parseConnectUrl } = await import("./chunk-1qzt23et.js");
      const parsed = parseConnectUrl(ccUrl);
      _pendingConnect.dangerouslySkipPermissions = rawCliArgs.includes("--dangerously-skip-permissions");
      if (rawCliArgs.includes("-p") || rawCliArgs.includes("--print")) {
        const stripped = rawCliArgs.filter((_, i) => i !== ccIdx);
        const dspIdx = stripped.indexOf("--dangerously-skip-permissions");
        if (dspIdx !== -1) {
          stripped.splice(dspIdx, 1);
        }
        process.argv = [
          process.argv[0],
          process.argv[1],
          "open",
          ccUrl,
          ...stripped
        ];
      } else {
        _pendingConnect.url = parsed.serverUrl;
        _pendingConnect.authToken = parsed.authToken;
        const stripped = rawCliArgs.filter((_, i) => i !== ccIdx);
        const dspIdx = stripped.indexOf("--dangerously-skip-permissions");
        if (dspIdx !== -1) {
          stripped.splice(dspIdx, 1);
        }
        process.argv = [
          process.argv[0],
          process.argv[1],
          ...stripped
        ];
      }
    }
  }
  if (true) {
    const handleUriIdx = process.argv.indexOf("--handle-uri");
    if (handleUriIdx !== -1 && process.argv[handleUriIdx + 1]) {
      const { enableConfigs: enableConfigs2 } = await import("./chunk-yqj68t0s.js");
      enableConfigs2();
      const uri = process.argv[handleUriIdx + 1];
      const { handleDeepLinkUri } = await import("./chunk-r3fjkq0e.js");
      const exitCode = await handleDeepLinkUri(uri);
      process.exit(exitCode);
    }
    if (process.platform === "darwin" && process.env.__CFBundleIdentifier === "com.anthropic.claude-code-url-handler") {
      const { enableConfigs: enableConfigs2 } = await import("./chunk-yqj68t0s.js");
      enableConfigs2();
      const { handleUrlSchemeLaunch } = await import("./chunk-r3fjkq0e.js");
      const urlSchemeResult = await handleUrlSchemeLaunch();
      process.exit(urlSchemeResult ?? 1);
    }
  }
  if (_pendingAssistantChat) {
    const rawArgs = process.argv.slice(2);
    if (rawArgs[0] === "assistant") {
      const nextArg = rawArgs[1];
      if (nextArg && !nextArg.startsWith("-")) {
        _pendingAssistantChat.sessionId = nextArg;
        rawArgs.splice(0, 2);
        process.argv = [process.argv[0], process.argv[1], ...rawArgs];
      } else if (!nextArg) {
        _pendingAssistantChat.discover = true;
        rawArgs.splice(0, 1);
        process.argv = [process.argv[0], process.argv[1], ...rawArgs];
      }
    }
  }
  if (_pendingSSH) {
    const rawCliArgs = process.argv.slice(2);
    if (rawCliArgs[0] === "ssh") {
      const localIdx = rawCliArgs.indexOf("--local");
      if (localIdx !== -1) {
        _pendingSSH.local = true;
        rawCliArgs.splice(localIdx, 1);
      }
      const dspIdx = rawCliArgs.indexOf("--dangerously-skip-permissions");
      if (dspIdx !== -1) {
        _pendingSSH.dangerouslySkipPermissions = true;
        rawCliArgs.splice(dspIdx, 1);
      }
      const pmIdx = rawCliArgs.indexOf("--permission-mode");
      if (pmIdx !== -1 && rawCliArgs[pmIdx + 1] && !rawCliArgs[pmIdx + 1].startsWith("-")) {
        _pendingSSH.permissionMode = rawCliArgs[pmIdx + 1];
        rawCliArgs.splice(pmIdx, 2);
      }
      const pmEqIdx = rawCliArgs.findIndex((a) => a.startsWith("--permission-mode="));
      if (pmEqIdx !== -1) {
        _pendingSSH.permissionMode = rawCliArgs[pmEqIdx].split("=")[1];
        rawCliArgs.splice(pmEqIdx, 1);
      }
      const extractFlag = (flag, opts = {}) => {
        const i = rawCliArgs.indexOf(flag);
        if (i !== -1) {
          _pendingSSH.extraCliArgs.push(opts.as ?? flag);
          const val = rawCliArgs[i + 1];
          if (opts.hasValue && val && !val.startsWith("-")) {
            _pendingSSH.extraCliArgs.push(val);
            rawCliArgs.splice(i, 2);
          } else {
            rawCliArgs.splice(i, 1);
          }
        }
        const eqI = rawCliArgs.findIndex((a) => a.startsWith(`${flag}=`));
        if (eqI !== -1) {
          _pendingSSH.extraCliArgs.push(opts.as ?? flag, rawCliArgs[eqI].slice(flag.length + 1));
          rawCliArgs.splice(eqI, 1);
        }
      };
      const rbIdx = rawCliArgs.indexOf("--remote-bin");
      if (rbIdx !== -1 && rawCliArgs[rbIdx + 1] && !rawCliArgs[rbIdx + 1].startsWith("-")) {
        _pendingSSH.remoteBin = rawCliArgs[rbIdx + 1];
        rawCliArgs.splice(rbIdx, 2);
      }
      const rbEqIdx = rawCliArgs.findIndex((a) => a.startsWith("--remote-bin="));
      if (rbEqIdx !== -1) {
        _pendingSSH.remoteBin = rawCliArgs[rbEqIdx].split("=").slice(1).join("=");
        rawCliArgs.splice(rbEqIdx, 1);
      }
      extractFlag("-c", { as: "--continue" });
      extractFlag("--continue");
      extractFlag("--resume", { hasValue: true });
      extractFlag("--model", { hasValue: true });
    }
    if (rawCliArgs[0] === "ssh" && rawCliArgs[1] && !rawCliArgs[1].startsWith("-")) {
      _pendingSSH.host = rawCliArgs[1];
      let consumed = 2;
      if (rawCliArgs[2] && !rawCliArgs[2].startsWith("-")) {
        _pendingSSH.cwd = rawCliArgs[2];
        consumed = 3;
      }
      const rest = rawCliArgs.slice(consumed);
      if (rest.includes("-p") || rest.includes("--print")) {
        process.stderr.write(`Error: headless (-p/--print) mode is not supported with claude ssh
`);
        gracefulShutdownSync(1);
        return;
      }
      process.argv = [process.argv[0], process.argv[1], ...rest];
    }
  }
  const cliArgs = process.argv.slice(2);
  const hasPrintFlag = cliArgs.includes("-p") || cliArgs.includes("--print");
  const hasInitOnlyFlag = cliArgs.includes("--init-only");
  const hasSdkUrl = cliArgs.some((arg) => arg.startsWith("--sdk-url"));
  const forceInteractive = isEnvTruthy(process.env.CLAUDE_CODE_FORCE_INTERACTIVE);
  const isNonInteractive = hasPrintFlag || hasInitOnlyFlag || hasSdkUrl || !forceInteractive && !process.stdout.isTTY;
  if (isNonInteractive) {
    stopCapturingEarlyInput();
  }
  const isInteractive = !isNonInteractive;
  setIsInteractive(isInteractive);
  initializeEntrypoint(isNonInteractive);
  const clientType = (() => {
    if (isEnvTruthy(process.env.GITHUB_ACTIONS))
      return "github-action";
    if (process.env.CLAUDE_CODE_ENTRYPOINT === "sdk-ts")
      return "sdk-typescript";
    if (process.env.CLAUDE_CODE_ENTRYPOINT === "sdk-py")
      return "sdk-python";
    if (process.env.CLAUDE_CODE_ENTRYPOINT === "sdk-cli")
      return "sdk-cli";
    if (process.env.CLAUDE_CODE_ENTRYPOINT === "claude-vscode")
      return "claude-vscode";
    if (process.env.CLAUDE_CODE_ENTRYPOINT === "local-agent")
      return "local-agent";
    if (process.env.CLAUDE_CODE_ENTRYPOINT === "claude-desktop")
      return "claude-desktop";
    const hasSessionIngressToken = process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN || process.env.CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR;
    if (process.env.CLAUDE_CODE_ENTRYPOINT === "remote" || hasSessionIngressToken) {
      return "remote";
    }
    return "cli";
  })();
  setClientType(clientType);
  const previewFormat = process.env.CLAUDE_CODE_QUESTION_PREVIEW_FORMAT;
  if (previewFormat === "markdown" || previewFormat === "html") {
    setQuestionPreviewFormat(previewFormat);
  } else if (!clientType.startsWith("sdk-") && clientType !== "claude-desktop" && clientType !== "local-agent" && clientType !== "remote") {
    setQuestionPreviewFormat("markdown");
  }
  if (process.env.CLAUDE_CODE_ENVIRONMENT_KIND === "bridge") {
    setSessionSource("remote-control");
  }
  profileCheckpoint("main_client_type_determined");
  eagerLoadSettings();
  profileCheckpoint("main_before_run");
  await run();
  profileCheckpoint("main_after_run");
}
async function getInputPrompt(prompt, inputFormat) {
  if (!process.stdin.isTTY && !process.argv.includes("mcp")) {
    if (inputFormat === "stream-json") {
      return process.stdin;
    }
    process.stdin.setEncoding("utf8");
    let data = "";
    const onData = (chunk) => {
      data += chunk;
    };
    process.stdin.on("data", onData);
    const timedOut = await peekForStdinData(process.stdin, 3000);
    process.stdin.off("data", onData);
    if (timedOut) {
      process.stderr.write(`Warning: no stdin data received in 3s, proceeding without it. If piping from a slow command, redirect stdin explicitly: < /dev/null to skip, or wait longer.
`);
    }
    return [prompt, data].filter(Boolean).join(`
`);
  }
  return prompt;
}
async function run() {
  profileCheckpoint("run_function_start");
  function createSortedHelpConfig() {
    const getOptionSortKey = (opt) => opt.long?.replace(/^--/, "") ?? opt.short?.replace(/^-/, "") ?? "";
    return Object.assign({ sortSubcommands: true, sortOptions: true }, {
      compareOptions: (a, b) => getOptionSortKey(a).localeCompare(getOptionSortKey(b))
    });
  }
  const program2 = new Command().configureHelp(createSortedHelpConfig()).enablePositionalOptions();
  profileCheckpoint("run_commander_initialized");
  program2.hook("preAction", async (thisCommand) => {
    profileCheckpoint("preAction_start");
    await Promise.all([
      ensureMdmSettingsLoaded(),
      ensureKeychainPrefetchCompleted()
    ]);
    profileCheckpoint("preAction_after_mdm");
    await init();
    profileCheckpoint("preAction_after_init");
    if (!isEnvTruthy(process.env.CLAUDE_CODE_DISABLE_TERMINAL_TITLE)) {
      process.title = "claude";
    }
    const { initSinks } = await import("./chunk-5fz99tby.js");
    initSinks();
    profileCheckpoint("preAction_after_sinks");
    const pluginDir = thisCommand.getOptionValue("pluginDir");
    if (Array.isArray(pluginDir) && pluginDir.length > 0 && pluginDir.every((p) => typeof p === "string")) {
      setInlinePlugins(pluginDir);
      clearPluginCache("preAction: --plugin-dir inline plugins");
    }
    runMigrations();
    profileCheckpoint("preAction_after_migrations");
    loadRemoteManagedSettings();
    loadPolicyLimits();
    profileCheckpoint("preAction_after_remote_settings");
    if (false) {}
    profileCheckpoint("preAction_after_settings_sync");
  });
  program2.name("mimo").description(`MiMo Code - starts an interactive session by default, use -p/--print for non-interactive output`).argument("[prompt]", "Your prompt", String).helpOption("-h, --help", "Display help for command").option("-d, --debug [filter]", 'Enable debug mode with optional category filtering (e.g., "api,hooks" or "!1p,!file")', (_value) => {
    return true;
  }).addOption(new Option("--debug-to-stderr", "Enable debug mode (to stderr)").argParser(Boolean).hideHelp()).option("--debug-file <path>", "Write debug logs to a specific file path (implicitly enables debug mode)", () => true).option("--verbose", "Override verbose mode setting from config", () => true).option("-p, --print", "Print response and exit (useful for pipes). Note: The workspace trust dialog is skipped when MiMo is run with the -p mode. Only use this flag in directories you trust.", () => true).option("--bare", "Minimal mode: skip hooks, LSP, plugin sync, attribution, auto-memory, background prefetches, keychain reads, and CLAUDE.md auto-discovery. Sets CLAUDE_CODE_SIMPLE=1. Anthropic auth is strictly ANTHROPIC_API_KEY or apiKeyHelper via --settings (OAuth and keychain are never read). 3P providers (Bedrock/Vertex/Foundry) use their own credentials. Skills still resolve via /skill-name. Explicitly provide context via: --system-prompt[-file], --append-system-prompt[-file], --add-dir (CLAUDE.md dirs), --mcp-config, --settings, --agents, --plugin-dir.", () => true).addOption(new Option("--init", "Run Setup hooks with init trigger, then continue").hideHelp()).addOption(new Option("--init-only", "Run Setup and SessionStart:startup hooks, then exit").hideHelp()).addOption(new Option("--maintenance", "Run Setup hooks with maintenance trigger, then continue").hideHelp()).addOption(new Option("--output-format <format>", 'Output format (only works with --print): "text" (default), "json" (single result), or "stream-json" (realtime streaming)').choices(["text", "json", "stream-json"])).addOption(new Option("--json-schema <schema>", 'JSON Schema for structured output validation. Example: {"type":"object","properties":{"name":{"type":"string"}},"required":["name"]}').argParser(String)).option("--include-hook-events", "Include all hook lifecycle events in the output stream (only works with --output-format=stream-json)", () => true).option("--include-partial-messages", "Include partial message chunks as they arrive (only works with --print and --output-format=stream-json)", () => true).addOption(new Option("--input-format <format>", 'Input format (only works with --print): "text" (default), or "stream-json" (realtime streaming input)').choices(["text", "stream-json"])).option("--mcp-debug", "[DEPRECATED. Use --debug instead] Enable MCP debug mode (shows MCP server errors)", () => true).option("--dangerously-skip-permissions", "Bypass all permission checks. Recommended only for sandboxes with no internet access.", () => true).option("--allow-dangerously-skip-permissions", "Enable bypassing all permission checks as an option, without it being enabled by default. Recommended only for sandboxes with no internet access.", () => true).addOption(new Option("--thinking <mode>", "Thinking mode: enabled (equivalent to adaptive), disabled").choices(["enabled", "adaptive", "disabled"]).hideHelp()).addOption(new Option("--max-thinking-tokens <tokens>", "[DEPRECATED. Use --thinking instead for newer models] Maximum number of thinking tokens (only works with --print)").argParser(Number).hideHelp()).addOption(new Option("--max-turns <turns>", "Maximum number of agentic turns in non-interactive mode. This will early exit the conversation after the specified number of turns. (only works with --print)").argParser(Number).hideHelp()).addOption(new Option("--max-budget-usd <amount>", "Maximum dollar amount to spend on API calls (only works with --print)").argParser((value) => {
    const amount = Number(value);
    if (isNaN(amount) || amount <= 0) {
      throw new Error("--max-budget-usd must be a positive number greater than 0");
    }
    return amount;
  })).addOption(new Option("--task-budget <tokens>", "API-side task budget in tokens (output_config.task_budget)").argParser((value) => {
    const tokens = Number(value);
    if (isNaN(tokens) || tokens <= 0 || !Number.isInteger(tokens)) {
      throw new Error("--task-budget must be a positive integer");
    }
    return tokens;
  }).hideHelp()).option("--replay-user-messages", "Re-emit user messages from stdin back on stdout for acknowledgment (only works with --input-format=stream-json and --output-format=stream-json)", () => true).addOption(new Option("--enable-auth-status", "Enable auth status messages in SDK mode").default(false).hideHelp()).option("--allowedTools, --allowed-tools <tools...>", 'Comma or space-separated list of tool names to allow (e.g. "Bash(git:*) Edit")').option("--tools <tools...>", 'Specify the list of available tools from the built-in set. Use "" to disable all tools, "default" to use all tools, or specify tool names (e.g. "Bash,Edit,Read").').option("--disallowedTools, --disallowed-tools <tools...>", 'Comma or space-separated list of tool names to deny (e.g. "Bash(git:*) Edit")').option("--mcp-config <configs...>", "Load MCP servers from JSON files or strings (space-separated)").addOption(new Option("--permission-prompt-tool <tool>", "MCP tool to use for permission prompts (only works with --print)").argParser(String).hideHelp()).addOption(new Option("--system-prompt <prompt>", "System prompt to use for the session").argParser(String)).addOption(new Option("--system-prompt-file <file>", "Read system prompt from a file").argParser(String).hideHelp()).addOption(new Option("--append-system-prompt <prompt>", "Append a system prompt to the default system prompt").argParser(String)).addOption(new Option("--append-system-prompt-file <file>", "Read system prompt from a file and append to the default system prompt").argParser(String).hideHelp()).addOption(new Option("--permission-mode <mode>", "Permission mode to use for the session").argParser(String).choices(PERMISSION_MODES)).option("-c, --continue", "Continue the most recent conversation in the current directory", () => true).option("-r, --resume [value]", "Resume a conversation by session ID, or open interactive picker with optional search term", (value) => value || true).option("--fork-session", "When resuming, create a new session ID instead of reusing the original (use with --resume or --continue)", () => true).addOption(new Option("--prefill <text>", "Pre-fill the prompt input with text without submitting it").hideHelp()).addOption(new Option("--deep-link-origin", "Signal that this session was launched from a deep link").hideHelp()).addOption(new Option("--deep-link-repo <slug>", "Repo slug the deep link ?repo= parameter resolved to the current cwd").hideHelp()).addOption(new Option("--deep-link-last-fetch <ms>", "FETCH_HEAD mtime in epoch ms, precomputed by the deep link trampoline").argParser((v) => {
    const n = Number(v);
    return Number.isFinite(n) ? n : undefined;
  }).hideHelp()).option("--from-pr [value]", "Resume a session linked to a PR by PR number/URL, or open interactive picker with optional search term", (value) => value || true).option("--no-session-persistence", "Disable session persistence - sessions will not be saved to disk and cannot be resumed (only works with --print)").addOption(new Option("--resume-session-at <message id>", "When resuming, only messages up to and including the assistant message with <message.id> (use with --resume in print mode)").argParser(String).hideHelp()).addOption(new Option("--rewind-files <user-message-id>", "Restore files to state at the specified user message and exit (requires --resume)").hideHelp()).option("--model <model>", `Model for the current session. Provide an alias for the latest model (e.g. 'sonnet' or 'opus') or a model's full name (e.g. 'claude-sonnet-4-6').`).addOption(new Option("--effort <level>", `Effort level for the current session (low, medium, high, max)`).argParser((rawValue) => {
    const value = rawValue.toLowerCase();
    const allowed = ["low", "medium", "high", "max"];
    if (!allowed.includes(value)) {
      throw new InvalidArgumentError(`It must be one of: ${allowed.join(", ")}`);
    }
    return value;
  })).option("--agent <agent>", `Agent for the current session. Overrides the 'agent' setting.`).option("--betas <betas...>", "Beta headers to include in API requests (API key users only)").option("--fallback-model <model>", "Enable automatic fallback to specified model when default model is overloaded (only works with --print)").addOption(new Option("--workload <tag>", "Workload tag for billing-header attribution (cc_workload). Process-scoped; set by SDK daemon callers that spawn subprocesses for cron work. (only works with --print)").hideHelp()).option("--settings <file-or-json>", "Path to a settings JSON file or a JSON string to load additional settings from").option("--add-dir <directories...>", "Additional directories to allow tool access to").option("--ide", "Automatically connect to IDE on startup if exactly one valid IDE is available", () => true).option("--strict-mcp-config", "Only use MCP servers from --mcp-config, ignoring all other MCP configurations", () => true).option("--session-id <uuid>", "Use a specific session ID for the conversation (must be a valid UUID)").option("-n, --name <name>", "Set a display name for this session (shown in /resume and terminal title)").option("--agents <json>", `JSON object defining custom agents (e.g. '{"reviewer": {"description": "Reviews code", "prompt": "You are a code reviewer"}}')`).option("--setting-sources <sources>", "Comma-separated list of setting sources to load (user, project, local).").option("--plugin-dir <path>", "Load plugins from a directory for this session only (repeatable: --plugin-dir A --plugin-dir B)", (val, prev) => [...prev, val], []).option("--disable-slash-commands", "Disable all skills", () => true).option("--chrome", "Enable MiMo in Chrome integration").option("--no-chrome", "Disable MiMo in Chrome integration").option("--file <specs...>", "File resources to download at startup. Format: file_id:relative_path (e.g., --file file_abc:doc.txt file_def:img.png)").action(async (prompt, options) => {
    profileCheckpoint("action_handler_start");
    if (options.bare) {
      process.env.CLAUDE_CODE_SIMPLE = "1";
    }
    if (prompt === "code") {
      logEvent("tengu_code_prompt_ignored", {});
      console.warn(source_default.yellow("Tip: You can launch MiMo Code with just `claude`"));
      prompt = undefined;
    }
    if (prompt && typeof prompt === "string" && !/\s/.test(prompt) && prompt.length > 0) {
      logEvent("tengu_single_word_prompt", { length: prompt.length });
    }
    let kairosEnabled = false;
    let assistantTeamContext;
    if (options.assistant && assistantModule) {
      assistantModule.markAssistantForced();
    }
    if (assistantModule && (assistantModule.isAssistantForced() || options.assistant === true) && !options.agentId && kairosGate) {
      if (!checkHasTrustDialogAccepted()) {
        console.warn(source_default.yellow("Assistant mode disabled: directory is not trusted. Accept the trust dialog and restart."));
      } else {
        kairosEnabled = assistantModule.isAssistantForced() || await kairosGate.isKairosEnabled();
        if (kairosEnabled) {
          const opts = options;
          opts.brief = true;
          setKairosActive(true);
          assistantTeamContext = await assistantModule.initializeAssistantTeam();
        }
      }
    }
    const {
      debug = false,
      debugToStderr = false,
      dangerouslySkipPermissions,
      allowDangerouslySkipPermissions = false,
      tools: baseTools = [],
      allowedTools = [],
      disallowedTools = [],
      mcpConfig = [],
      permissionMode: permissionModeCli,
      addDir = [],
      fallbackModel,
      betas = [],
      ide = false,
      sessionId,
      includeHookEvents,
      includePartialMessages
    } = options;
    if (options.prefill) {
      seedEarlyInput(options.prefill);
    }
    let fileDownloadPromise;
    const agentsJson = options.agents;
    const agentCli = options.agent;
    if (agentCli) {
      process.env.CLAUDE_CODE_AGENT = agentCli;
    }
    let outputFormat = options.outputFormat;
    let inputFormat = options.inputFormat;
    let verbose = options.verbose ?? getGlobalConfig().verbose;
    let print = options.print;
    const init2 = options.init ?? false;
    const initOnly = options.initOnly ?? false;
    const maintenance = options.maintenance ?? false;
    const disableSlashCommands = options.disableSlashCommands || false;
    const tasksOption = process.env.USER_TYPE === "ant" && options.tasks;
    const taskListId = tasksOption ? typeof tasksOption === "string" ? tasksOption : DEFAULT_TASKS_MODE_TASK_LIST_ID : undefined;
    if (process.env.USER_TYPE === "ant" && taskListId) {
      process.env.CLAUDE_CODE_TASK_LIST_ID = taskListId;
    }
    const worktreeOption = isWorktreeModeEnabled() ? options.worktree : undefined;
    let worktreeName = typeof worktreeOption === "string" ? worktreeOption : undefined;
    const worktreeEnabled = worktreeOption !== undefined;
    let worktreePRNumber;
    if (worktreeName) {
      const prNum = parsePRReference(worktreeName);
      if (prNum !== null) {
        worktreePRNumber = prNum;
        worktreeName = undefined;
      }
    }
    const tmuxEnabled = isWorktreeModeEnabled() && options.tmux === true;
    if (tmuxEnabled) {
      if (!worktreeEnabled) {
        process.stderr.write(source_default.red(`Error: --tmux requires --worktree
`));
        process.exit(1);
      }
      if (getPlatform() === "windows") {
        process.stderr.write(source_default.red(`Error: --tmux is not supported on Windows
`));
        process.exit(1);
      }
      if (!await isTmuxAvailable()) {
        process.stderr.write(source_default.red(`Error: tmux is not installed.
${getTmuxInstallInstructions()}
`));
        process.exit(1);
      }
    }
    let storedTeammateOpts;
    if (isAgentSwarmsEnabled()) {
      const teammateOpts = extractTeammateOptions(options);
      storedTeammateOpts = teammateOpts;
      const hasAnyTeammateOpt = teammateOpts.agentId || teammateOpts.agentName || teammateOpts.teamName;
      const hasAllRequiredTeammateOpts = teammateOpts.agentId && teammateOpts.agentName && teammateOpts.teamName;
      if (hasAnyTeammateOpt && !hasAllRequiredTeammateOpts) {
        process.stderr.write(source_default.red(`Error: --agent-id, --agent-name, and --team-name must all be provided together
`));
        process.exit(1);
      }
      if (teammateOpts.agentId && teammateOpts.agentName && teammateOpts.teamName) {
        getTeammateUtils().setDynamicTeamContext?.({
          agentId: teammateOpts.agentId,
          agentName: teammateOpts.agentName,
          teamName: teammateOpts.teamName,
          color: teammateOpts.agentColor,
          planModeRequired: teammateOpts.planModeRequired ?? false,
          parentSessionId: teammateOpts.parentSessionId
        });
      }
      if (teammateOpts.teammateMode) {
        getTeammateModeSnapshot().setCliTeammateModeOverride?.(teammateOpts.teammateMode);
      }
    }
    const sdkUrl = options.sdkUrl ?? undefined;
    const effectiveIncludePartialMessages = includePartialMessages || isEnvTruthy(process.env.CLAUDE_CODE_INCLUDE_PARTIAL_MESSAGES);
    if (includeHookEvents || isEnvTruthy(process.env.CLAUDE_CODE_REMOTE)) {
      setAllHookEventsEnabled(true);
    }
    if (sdkUrl) {
      if (!inputFormat) {
        inputFormat = "stream-json";
      }
      if (!outputFormat) {
        outputFormat = "stream-json";
      }
      if (options.verbose === undefined) {
        verbose = true;
      }
      if (!options.print) {
        print = true;
      }
    }
    const teleport = options.teleport ?? null;
    const remoteOption = options.remote;
    const remote = remoteOption === true ? "" : remoteOption ?? null;
    const remoteControlOption = options.remoteControl ?? options.rc;
    let remoteControl = false;
    const remoteControlName = typeof remoteControlOption === "string" && remoteControlOption.length > 0 ? remoteControlOption : undefined;
    if (sessionId) {
      if ((options.continue || options.resume) && !options.forkSession) {
        process.stderr.write(source_default.red(`Error: --session-id can only be used with --continue or --resume if --fork-session is also specified.
`));
        process.exit(1);
      }
      if (!sdkUrl) {
        const validatedSessionId = validateUuid(sessionId);
        if (!validatedSessionId) {
          process.stderr.write(source_default.red(`Error: Invalid session ID. Must be a valid UUID.
`));
          process.exit(1);
        }
        if (sessionIdExists(validatedSessionId)) {
          process.stderr.write(source_default.red(`Error: Session ID ${validatedSessionId} is already in use.
`));
          process.exit(1);
        }
      }
    }
    const fileSpecs = options.file;
    if (fileSpecs && fileSpecs.length > 0) {
      const sessionToken = getSessionIngressAuthToken();
      if (!sessionToken) {
        process.stderr.write(source_default.red(`Error: Session token required for file downloads. CLAUDE_CODE_SESSION_ACCESS_TOKEN must be set.
`));
        process.exit(1);
      }
      const fileSessionId = process.env.CLAUDE_CODE_REMOTE_SESSION_ID || getSessionId();
      const files = parseFileSpecs(fileSpecs);
      if (files.length > 0) {
        const config = {
          baseUrl: process.env.ANTHROPIC_BASE_URL || getOauthConfig().BASE_API_URL,
          oauthToken: sessionToken,
          sessionId: fileSessionId
        };
        fileDownloadPromise = downloadSessionFiles(files, config);
      }
    }
    const isNonInteractiveSession = getIsNonInteractiveSession();
    if (fallbackModel && options.model && fallbackModel === options.model) {
      process.stderr.write(source_default.red(`Error: Fallback model cannot be the same as the main model. Please specify a different model for --fallback-model.
`));
      process.exit(1);
    }
    let systemPrompt = options.systemPrompt;
    if (options.systemPromptFile) {
      if (options.systemPrompt) {
        process.stderr.write(source_default.red(`Error: Cannot use both --system-prompt and --system-prompt-file. Please use only one.
`));
        process.exit(1);
      }
      try {
        const filePath = resolve(options.systemPromptFile);
        systemPrompt = readFileSync(filePath, "utf8");
      } catch (error) {
        const code = getErrnoCode(error);
        if (code === "ENOENT") {
          process.stderr.write(source_default.red(`Error: System prompt file not found: ${resolve(options.systemPromptFile)}
`));
          process.exit(1);
        }
        process.stderr.write(source_default.red(`Error reading system prompt file: ${errorMessage(error)}
`));
        process.exit(1);
      }
    }
    let appendSystemPrompt = options.appendSystemPrompt;
    if (options.appendSystemPromptFile) {
      if (options.appendSystemPrompt) {
        process.stderr.write(source_default.red(`Error: Cannot use both --append-system-prompt and --append-system-prompt-file. Please use only one.
`));
        process.exit(1);
      }
      try {
        const filePath = resolve(options.appendSystemPromptFile);
        appendSystemPrompt = readFileSync(filePath, "utf8");
      } catch (error) {
        const code = getErrnoCode(error);
        if (code === "ENOENT") {
          process.stderr.write(source_default.red(`Error: Append system prompt file not found: ${resolve(options.appendSystemPromptFile)}
`));
          process.exit(1);
        }
        process.stderr.write(source_default.red(`Error reading append system prompt file: ${errorMessage(error)}
`));
        process.exit(1);
      }
    }
    if (isAgentSwarmsEnabled() && storedTeammateOpts?.agentId && storedTeammateOpts?.agentName && storedTeammateOpts?.teamName) {
      const addendum = getTeammatePromptAddendum().TEAMMATE_SYSTEM_PROMPT_ADDENDUM;
      appendSystemPrompt = appendSystemPrompt ? `${appendSystemPrompt}

${addendum}` : addendum;
    }
    const {
      mode: permissionMode,
      notification: permissionModeNotification
    } = initialPermissionModeFromCLI({
      permissionModeCli,
      dangerouslySkipPermissions
    });
    setSessionBypassPermissionsMode(permissionMode === "bypassPermissions");
    if (true) {
      if (options.enableAutoMode || permissionModeCli === "auto" || permissionMode === "auto" || !permissionModeCli && isDefaultPermissionModeAuto()) {
        autoModeStateModule?.setAutoModeFlagCli(true);
      }
    }
    let dynamicMcpConfig = {
      "mcp-chrome": {
        type: "http",
        url: "http://127.0.0.1:12306/mcp",
        scope: "dynamic",
        headers: {
          Authorization: "Bearer my-static-token"
        }
      }
    };
    if (mcpConfig && mcpConfig.length > 0) {
      const processedConfigs = mcpConfig.map((config) => config.trim()).filter((config) => config.length > 0);
      let allConfigs = {};
      const allErrors = [];
      for (const configItem of processedConfigs) {
        let configs = null;
        let errors = [];
        const parsedJson = safeParseJSON(configItem);
        if (parsedJson) {
          const result = parseMcpConfig({
            configObject: parsedJson,
            filePath: "command line",
            expandVars: true,
            scope: "dynamic"
          });
          if (result.config) {
            configs = result.config.mcpServers;
          } else {
            errors = result.errors;
          }
        } else {
          const configPath = resolve(configItem);
          const result = parseMcpConfigFromFilePath({
            filePath: configPath,
            expandVars: true,
            scope: "dynamic"
          });
          if (result.config) {
            configs = result.config.mcpServers;
          } else {
            errors = result.errors;
          }
        }
        if (errors.length > 0) {
          allErrors.push(...errors);
        } else if (configs) {
          allConfigs = { ...allConfigs, ...configs };
        }
      }
      if (allErrors.length > 0) {
        const formattedErrors = allErrors.map((err) => `${err.path ? err.path + ": " : ""}${err.message}`).join(`
`);
        logForDebugging(`--mcp-config validation failed (${allErrors.length} errors): ${formattedErrors}`, {
          level: "error"
        });
        process.stderr.write(`Error: Invalid MCP configuration:
${formattedErrors}
`);
        process.exit(1);
      }
      if (Object.keys(allConfigs).length > 0) {
        const nonSdkConfigNames = Object.entries(allConfigs).filter(([, config]) => config.type !== "sdk").map(([name]) => name);
        let reservedNameError = null;
        if (nonSdkConfigNames.some(isClaudeInChromeMCPServer)) {
          reservedNameError = `Invalid MCP configuration: "${CLAUDE_IN_CHROME_MCP_SERVER_NAME}" is a reserved MCP name.`;
        } else if (true) {
          const {
            isComputerUseMCPServer,
            COMPUTER_USE_MCP_SERVER_NAME
          } = await import("./chunk-s82r73bx.js");
          if (nonSdkConfigNames.some(isComputerUseMCPServer)) {
            reservedNameError = `Invalid MCP configuration: "${COMPUTER_USE_MCP_SERVER_NAME}" is a reserved MCP name.`;
          }
        }
        if (reservedNameError) {
          process.stderr.write(`Error: ${reservedNameError}
`);
          process.exit(1);
        }
        const scopedConfigs = mapValues_default(allConfigs, (config) => ({
          ...config,
          scope: "dynamic"
        }));
        const { allowed, blocked } = filterMcpServersByPolicy(scopedConfigs);
        if (blocked.length > 0) {
          process.stderr.write(`Warning: MCP ${plural(blocked.length, "server")} blocked by enterprise policy: ${blocked.join(", ")}
`);
        }
        dynamicMcpConfig = { ...dynamicMcpConfig, ...allowed };
      }
    }
    const chromeOpts = options;
    setChromeFlagOverride(chromeOpts.chrome);
    const enableClaudeInChrome = shouldEnableClaudeInChrome(chromeOpts.chrome) && (process.env.USER_TYPE === "ant" || isClaudeAISubscriber());
    const autoEnableClaudeInChrome = !enableClaudeInChrome && shouldAutoEnableClaudeInChrome();
    if (enableClaudeInChrome) {
      const platform = getPlatform();
      try {
        logEvent("tengu_claude_in_chrome_setup", {
          platform
        });
        const {
          mcpConfig: chromeMcpConfig,
          allowedTools: chromeMcpTools,
          systemPrompt: chromeSystemPrompt
        } = setupClaudeInChrome();
        dynamicMcpConfig = {
          ...dynamicMcpConfig,
          ...chromeMcpConfig
        };
        allowedTools.push(...chromeMcpTools);
        if (chromeSystemPrompt) {
          appendSystemPrompt = appendSystemPrompt ? `${chromeSystemPrompt}

${appendSystemPrompt}` : chromeSystemPrompt;
        }
      } catch (error) {
        logEvent("tengu_claude_in_chrome_setup_failed", {
          platform
        });
        logForDebugging(`[MiMo in Chrome] Error: ${error}`);
        logError(error);
        console.error(`Error: Failed to run with MiMo in Chrome.`);
        process.exit(1);
      }
    } else if (autoEnableClaudeInChrome) {
      try {
        const { mcpConfig: chromeMcpConfig } = setupClaudeInChrome();
        dynamicMcpConfig = {
          ...dynamicMcpConfig,
          ...chromeMcpConfig
        };
        const hint = CLAUDE_IN_CHROME_SKILL_HINT;
        appendSystemPrompt = appendSystemPrompt ? `${appendSystemPrompt}

${hint}` : hint;
      } catch (error) {
        logForDebugging(`[MiMo in Chrome] Error (auto-enable): ${error}`);
      }
    }
    const strictMcpConfig = options.strictMcpConfig || false;
    if (doesEnterpriseMcpConfigExist()) {
      if (strictMcpConfig) {
        process.stderr.write(source_default.red("You cannot use --strict-mcp-config when an enterprise MCP config is present"));
        process.exit(1);
      }
      if (dynamicMcpConfig && !areMcpConfigsAllowedWithEnterpriseMcpConfig(dynamicMcpConfig)) {
        process.stderr.write(source_default.red("You cannot dynamically configure MCP servers when an enterprise MCP config is present"));
        process.exit(1);
      }
    }
    if (getPlatform() !== "unknown" && !getIsNonInteractiveSession()) {
      try {
        const { getChicagoEnabled } = await import("./chunk-k17x0sxf.js");
        if (getChicagoEnabled()) {
          const { setupComputerUseMCP } = await import("./chunk-2827zxhh.js");
          const { mcpConfig: mcpConfig2, allowedTools: cuTools } = setupComputerUseMCP();
          dynamicMcpConfig = {
            ...dynamicMcpConfig,
            ...mcpConfig2
          };
          allowedTools.push(...cuTools);
        }
      } catch (error) {
        logForDebugging(`[Computer Use MCP] Setup failed: ${errorMessage(error)}`);
      }
    }
    setAdditionalDirectoriesForClaudeMd(addDir);
    let devChannels;
    const parseChannelEntries = (raw, flag) => {
      const entries = [];
      const bad = [];
      for (const c of raw) {
        if (c.startsWith("plugin:")) {
          const rest = c.slice(7);
          const at = rest.indexOf("@");
          if (at <= 0 || at === rest.length - 1) {
            bad.push(c);
          } else {
            entries.push({
              kind: "plugin",
              name: rest.slice(0, at),
              marketplace: rest.slice(at + 1)
            });
          }
        } else if (c.startsWith("server:") && c.length > 7) {
          entries.push({ kind: "server", name: c.slice(7) });
        } else {
          bad.push(c);
        }
      }
      if (bad.length > 0) {
        process.stderr.write(source_default.red(`${flag} entries must be tagged: ${bad.join(", ")}
` + `  plugin:<name>@<marketplace>  \u2014 plugin-provided channel (allowlist enforced)
` + `  server:<name>                \u2014 manually configured MCP server
`));
        process.exit(1);
      }
      return entries;
    };
    const channelOpts = options;
    const rawChannels = channelOpts.channels;
    const rawDev = channelOpts.dangerouslyLoadDevelopmentChannels;
    let channelEntries = [];
    if (rawChannels && rawChannels.length > 0) {
      channelEntries = parseChannelEntries(rawChannels, "--channels");
      setAllowedChannels(channelEntries);
    }
    if (!isNonInteractiveSession) {
      if (rawDev && rawDev.length > 0) {
        devChannels = parseChannelEntries(rawDev, "--dangerously-load-development-channels");
      }
    }
    if (channelEntries.length > 0 || (devChannels?.length ?? 0) > 0) {
      const joinPluginIds = (entries) => {
        const ids = entries.flatMap((e) => e.kind === "plugin" ? [`${e.name}@${e.marketplace}`] : []);
        return ids.length > 0 ? ids.sort().join(",") : undefined;
      };
      logEvent("tengu_mcp_channel_flags", {
        channels_count: channelEntries.length,
        dev_count: devChannels?.length ?? 0,
        plugins: joinPluginIds(channelEntries),
        dev_plugins: joinPluginIds(devChannels ?? [])
      });
    }
    if (baseTools.length > 0) {
      const { BRIEF_TOOL_NAME, LEGACY_BRIEF_TOOL_NAME } = (init_prompt(), __toCommonJS(exports_prompt));
      const { isBriefEntitled } = (init_BriefTool(), __toCommonJS(exports_BriefTool));
      const parsed = parseToolListFromCLI(baseTools);
      if ((parsed.includes(BRIEF_TOOL_NAME) || parsed.includes(LEGACY_BRIEF_TOOL_NAME)) && isBriefEntitled()) {
        setUserMsgOptIn(true);
      }
    }
    const initResult = await initializeToolPermissionContext({
      allowedToolsCli: allowedTools,
      disallowedToolsCli: disallowedTools,
      baseToolsCli: baseTools,
      permissionMode,
      allowDangerouslySkipPermissions,
      addDirs: addDir
    });
    let toolPermissionContext = initResult.toolPermissionContext;
    const {
      warnings,
      dangerousPermissions,
      overlyBroadBashPermissions
    } = initResult;
    if (process.env.USER_TYPE === "ant" && overlyBroadBashPermissions.length > 0) {
      for (const permission of overlyBroadBashPermissions) {
        logForDebugging(`Ignoring overly broad shell permission ${permission.ruleDisplay} from ${permission.sourceDisplay}`);
      }
      toolPermissionContext = removeDangerousPermissions(toolPermissionContext, overlyBroadBashPermissions);
    }
    if (dangerousPermissions.length > 0) {
      toolPermissionContext = stripDangerousPermissionsForAutoMode(toolPermissionContext);
    }
    warnings.forEach((warning) => {
      console.error(warning);
    });
    const claudeaiConfigPromise = isNonInteractiveSession && !strictMcpConfig && !doesEnterpriseMcpConfigExist() && !isBareMode() ? fetchClaudeAIMcpConfigsIfEligible().then((configs) => {
      const { allowed, blocked } = filterMcpServersByPolicy(configs);
      if (blocked.length > 0) {
        process.stderr.write(`Warning: claude.ai MCP ${plural(blocked.length, "server")} blocked by enterprise policy: ${blocked.join(", ")}
`);
      }
      return allowed;
    }) : Promise.resolve({});
    logForDebugging("[STARTUP] Loading MCP configs...");
    const mcpConfigStart = Date.now();
    let mcpConfigResolvedMs;
    const mcpConfigPromise = (strictMcpConfig || isBareMode() ? Promise.resolve({
      servers: {}
    }) : getClaudeCodeMcpConfigs(dynamicMcpConfig)).then((result) => {
      mcpConfigResolvedMs = Date.now() - mcpConfigStart;
      return result;
    });
    if (inputFormat && inputFormat !== "text" && inputFormat !== "stream-json") {
      console.error(`Error: Invalid input format "${inputFormat}".`);
      process.exit(1);
    }
    if (inputFormat === "stream-json" && outputFormat !== "stream-json") {
      console.error(`Error: --input-format=stream-json requires output-format=stream-json.`);
      process.exit(1);
    }
    if (sdkUrl) {
      if (inputFormat !== "stream-json" || outputFormat !== "stream-json") {
        console.error(`Error: --sdk-url requires both --input-format=stream-json and --output-format=stream-json.`);
        process.exit(1);
      }
    }
    if (options.replayUserMessages) {
      if (inputFormat !== "stream-json" || outputFormat !== "stream-json") {
        console.error(`Error: --replay-user-messages requires both --input-format=stream-json and --output-format=stream-json.`);
        process.exit(1);
      }
    }
    if (effectiveIncludePartialMessages) {
      if (!isNonInteractiveSession || outputFormat !== "stream-json") {
        writeToStderr(`Error: --include-partial-messages requires --print and --output-format=stream-json.`);
        process.exit(1);
      }
    }
    if (options.sessionPersistence === false && !isNonInteractiveSession) {
      writeToStderr(`Error: --no-session-persistence can only be used with --print mode.`);
      process.exit(1);
    }
    const effectivePrompt = prompt || "";
    let inputPrompt = await getInputPrompt(effectivePrompt, inputFormat ?? "text");
    profileCheckpoint("action_after_input_prompt");
    maybeActivateProactive(options);
    let tools = getTools(toolPermissionContext);
    if (false) {}
    profileCheckpoint("action_tools_loaded");
    let jsonSchema;
    if (isSyntheticOutputToolEnabled({ isNonInteractiveSession }) && options.jsonSchema) {
      jsonSchema = jsonParse(options.jsonSchema);
    }
    if (jsonSchema) {
      const syntheticOutputResult = createSyntheticOutputTool(jsonSchema);
      if ("tool" in syntheticOutputResult) {
        tools = [...tools, syntheticOutputResult.tool];
        logEvent("tengu_structured_output_enabled", {
          schema_property_count: Object.keys(jsonSchema.properties || {}).length,
          has_required_fields: Boolean(jsonSchema.required)
        });
      } else {
        logEvent("tengu_structured_output_failure", {
          error: "Invalid JSON schema"
        });
      }
    }
    profileCheckpoint("action_before_setup");
    logForDebugging("[STARTUP] Running setup()...");
    const setupStart = Date.now();
    const { setup } = await import("./chunk-xhqjbq4b.js");
    const messagingSocketPath = undefined;
    const preSetupCwd = getCwd();
    if (process.env.CLAUDE_CODE_ENTRYPOINT !== "local-agent") {
      initBuiltinPlugins();
      initBundledSkills();
    }
    const setupPromise = setup(preSetupCwd, permissionMode, allowDangerouslySkipPermissions, worktreeEnabled, worktreeName, tmuxEnabled, sessionId ? validateUuid(sessionId) : undefined, worktreePRNumber, messagingSocketPath);
    const commandsPromise = worktreeEnabled ? null : getCommands(preSetupCwd);
    const agentDefsPromise = worktreeEnabled ? null : getAgentDefinitionsWithOverrides(preSetupCwd);
    commandsPromise?.catch(() => {});
    agentDefsPromise?.catch(() => {});
    await setupPromise;
    logForDebugging(`[STARTUP] setup() completed in ${Date.now() - setupStart}ms`);
    profileCheckpoint("action_after_setup");
    let effectiveReplayUserMessages = !!options.replayUserMessages;
    if (false) {}
    if (getIsNonInteractiveSession()) {
      applyConfigEnvironmentVariables();
      getSystemContext();
      getUserContext();
      ensureModelStringsInitialized();
    }
    const sessionNameArg = options.name?.trim();
    if (sessionNameArg) {
      cacheSessionTitle(sessionNameArg);
    }
    const explicitModel = options.model || process.env.ANTHROPIC_MODEL;
    if (process.env.USER_TYPE === "ant" && explicitModel && explicitModel !== "default" && !hasGrowthBookEnvOverride("tengu_ant_model_override") && getGlobalConfig().cachedGrowthBookFeatures?.["tengu_ant_model_override"] == null) {
      await initializeGrowthBook();
    }
    const userSpecifiedModel = options.model === "default" ? getDefaultMainLoopModel() : options.model;
    const userSpecifiedFallbackModel = fallbackModel === "default" ? getDefaultMainLoopModel() : fallbackModel;
    const currentCwd = worktreeEnabled ? getCwd() : preSetupCwd;
    logForDebugging("[STARTUP] Loading commands and agents...");
    const commandsStart = Date.now();
    const [commands, agentDefinitionsResult] = await Promise.all([
      commandsPromise ?? getCommands(currentCwd),
      agentDefsPromise ?? getAgentDefinitionsWithOverrides(currentCwd)
    ]);
    logForDebugging(`[STARTUP] Commands and agents loaded in ${Date.now() - commandsStart}ms`);
    profileCheckpoint("action_commands_loaded");
    let cliAgents = [];
    if (agentsJson) {
      try {
        const parsedAgents = safeParseJSON(agentsJson);
        if (parsedAgents) {
          cliAgents = parseAgentsFromJson(parsedAgents, "flagSettings");
        }
      } catch (error) {
        logError(error);
      }
    }
    const allAgents = [
      ...agentDefinitionsResult.allAgents,
      ...cliAgents
    ];
    const agentDefinitions = {
      ...agentDefinitionsResult,
      allAgents,
      activeAgents: getActiveAgentsFromList(allAgents)
    };
    const agentSetting = agentCli ?? getInitialSettings().agent;
    let mainThreadAgentDefinition;
    if (agentSetting) {
      mainThreadAgentDefinition = agentDefinitions.activeAgents.find((agent) => agent.agentType === agentSetting);
      if (!mainThreadAgentDefinition) {
        logForDebugging(`Warning: agent "${agentSetting}" not found. Available agents: ${agentDefinitions.activeAgents.map((a) => a.agentType).join(", ")}. Using default behavior.`);
      }
    }
    setMainThreadAgentType(mainThreadAgentDefinition?.agentType);
    if (mainThreadAgentDefinition) {
      logEvent("tengu_agent_flag", {
        agentType: isBuiltInAgent(mainThreadAgentDefinition) ? mainThreadAgentDefinition.agentType : "custom",
        ...agentCli && {
          source: "cli"
        }
      });
    }
    if (mainThreadAgentDefinition?.agentType) {
      saveAgentSetting(mainThreadAgentDefinition.agentType);
    }
    if (isNonInteractiveSession && mainThreadAgentDefinition && !systemPrompt && !isBuiltInAgent(mainThreadAgentDefinition)) {
      const agentSystemPrompt = mainThreadAgentDefinition.getSystemPrompt();
      if (agentSystemPrompt) {
        systemPrompt = agentSystemPrompt;
      }
    }
    if (mainThreadAgentDefinition?.initialPrompt) {
      if (typeof inputPrompt === "string") {
        inputPrompt = inputPrompt ? `${mainThreadAgentDefinition.initialPrompt}

${inputPrompt}` : mainThreadAgentDefinition.initialPrompt;
      } else if (!inputPrompt) {
        inputPrompt = mainThreadAgentDefinition.initialPrompt;
      }
    }
    let effectiveModel = userSpecifiedModel;
    if (!effectiveModel && mainThreadAgentDefinition?.model && mainThreadAgentDefinition.model !== "inherit") {
      effectiveModel = parseUserSpecifiedModel(mainThreadAgentDefinition.model);
    }
    setMainLoopModelOverride(effectiveModel);
    setInitialMainLoopModel(getUserSpecifiedModelSetting() || null);
    const initialMainLoopModel = getInitialMainLoopModel();
    const resolvedInitialModel = parseUserSpecifiedModel(initialMainLoopModel ?? getDefaultMainLoopModel());
    let advisorModel;
    if (isAdvisorEnabled()) {
      const advisorOption = canUserConfigureAdvisor() ? options.advisor : undefined;
      if (advisorOption) {
        logForDebugging(`[AdvisorTool] --advisor ${advisorOption}`);
        if (!modelSupportsAdvisor(resolvedInitialModel)) {
          process.stderr.write(source_default.red(`Error: The model "${resolvedInitialModel}" does not support the advisor tool.
`));
          process.exit(1);
        }
        const normalizedAdvisorModel = normalizeModelStringForAPI(parseUserSpecifiedModel(advisorOption));
        if (!isValidAdvisorModel(normalizedAdvisorModel)) {
          process.stderr.write(source_default.red(`Error: The model "${advisorOption}" cannot be used as an advisor.
`));
          process.exit(1);
        }
      }
      advisorModel = canUserConfigureAdvisor() ? advisorOption ?? getInitialAdvisorSetting() : advisorOption;
      if (advisorModel) {
        logForDebugging(`[AdvisorTool] Advisor model: ${advisorModel}`);
      }
    }
    if (isAgentSwarmsEnabled() && storedTeammateOpts?.agentId && storedTeammateOpts?.agentName && storedTeammateOpts?.teamName && storedTeammateOpts?.agentType) {
      const customAgent = agentDefinitions.activeAgents.find((a) => a.agentType === storedTeammateOpts.agentType);
      if (customAgent) {
        let customPrompt;
        if (customAgent.source === "built-in") {
          logForDebugging(`[teammate] Built-in agent ${storedTeammateOpts.agentType} - skipping custom prompt (not supported)`);
        } else {
          customPrompt = customAgent.getSystemPrompt();
        }
        if (customAgent.memory) {
          logEvent("tengu_agent_memory_loaded", {
            ...process.env.USER_TYPE === "ant" && {
              agent_type: customAgent.agentType
            },
            scope: customAgent.memory,
            source: "teammate"
          });
        }
        if (customPrompt) {
          const customInstructions = `
# Custom Agent Instructions
${customPrompt}`;
          appendSystemPrompt = appendSystemPrompt ? `${appendSystemPrompt}

${customInstructions}` : customInstructions;
        }
      } else {
        logForDebugging(`[teammate] Custom agent ${storedTeammateOpts.agentType} not found in available agents`);
      }
    }
    maybeActivateBrief(options);
    if (!getIsNonInteractiveSession() && !getUserMsgOptIn() && getInitialSettings().defaultView === "chat") {
      const { isBriefEntitled } = (init_BriefTool(), __toCommonJS(exports_BriefTool));
      if (isBriefEntitled()) {
        setUserMsgOptIn(true);
      }
    }
    if ((options.proactive || isEnvTruthy(process.env.CLAUDE_CODE_PROACTIVE)) && !coordinatorModeModule?.isCoordinatorMode()) {
      const briefVisibility = (init_BriefTool(), __toCommonJS(exports_BriefTool)).isBriefEnabled() ? "Call SendUserMessage at checkpoints to mark where things stand." : "The user will see any text you output.";
      const proactivePrompt = `
# Proactive Mode

You are in proactive mode. Take initiative \u2014 explore, act, and make progress without waiting for instructions.

Start by briefly greeting the user.

You will receive periodic <tick> prompts. These are check-ins. Do whatever seems most useful, or call Sleep if there's nothing to do. ${briefVisibility}`;
      appendSystemPrompt = appendSystemPrompt ? `${appendSystemPrompt}

${proactivePrompt}` : proactivePrompt;
    }
    if (kairosEnabled && assistantModule) {
      const assistantAddendum = assistantModule.getAssistantSystemPromptAddendum();
      appendSystemPrompt = appendSystemPrompt ? `${appendSystemPrompt}

${assistantAddendum}` : assistantAddendum;
    }
    let root;
    let getFpsMetrics;
    let stats;
    if (!isNonInteractiveSession) {
      const ctx = getRenderContext(false);
      getFpsMetrics = ctx.getFpsMetrics;
      stats = ctx.stats;
      if (process.env.USER_TYPE === "ant") {
        installAsciicastRecorder();
      }
      const { createRoot } = await import("./chunk-j976d6fp.js");
      root = await createRoot(ctx.renderOptions);
      logEvent("tengu_timer", {
        event: "startup",
        durationMs: Math.round(process.uptime() * 1000)
      });
      logForDebugging("[STARTUP] Running showSetupScreens()...");
      const setupScreensStart = Date.now();
      const onboardingShown = await showSetupScreens(root, permissionMode, allowDangerouslySkipPermissions, commands, enableClaudeInChrome, devChannels);
      logForDebugging(`[STARTUP] showSetupScreens() completed in ${Date.now() - setupScreensStart}ms`);
      if (remoteControlOption !== undefined) {
        const { getBridgeDisabledReason } = await import("./chunk-mb6f8q6e.js");
        const disabledReason = await getBridgeDisabledReason();
        remoteControl = disabledReason === null;
        if (disabledReason) {
          process.stderr.write(source_default.yellow(`${disabledReason}
--rc flag ignored.
`));
        }
      }
      if (false) {}
      if (onboardingShown && prompt?.trim().toLowerCase() === "/login") {
        prompt = "";
      }
      if (onboardingShown) {
        refreshRemoteManagedSettings();
        refreshPolicyLimits();
        resetUserCache();
        refreshGrowthBookAfterAuthChange();
        import("./chunk-6kq1ydnc.js").then((m) => {
          m.clearTrustedDeviceToken();
          return m.enrollTrustedDevice();
        });
      }
      const orgValidation = await validateForceLoginOrg();
      if (!orgValidation.valid) {
        await exitWithError(root, orgValidation.message);
      }
    }
    if (process.exitCode !== undefined) {
      logForDebugging("Graceful shutdown initiated, skipping further initialization");
      return;
    }
    initializeLspServerManager();
    if (!isNonInteractiveSession) {
      const { errors } = getSettingsWithErrors();
      const nonMcpErrors = errors.filter((e) => !e.mcpErrorMetadata);
      if (nonMcpErrors.length > 0) {
        await launchInvalidSettingsDialog(root, {
          settingsErrors: nonMcpErrors,
          onExit: () => gracefulShutdownSync(1)
        });
      }
    }
    const bgRefreshThrottleMs = getFeatureValue_CACHED_MAY_BE_STALE("tengu_cicada_nap_ms", 0);
    const lastPrefetched = getGlobalConfig().startupPrefetchedAt ?? 0;
    const skipStartupPrefetches = isBareMode() || bgRefreshThrottleMs > 0 && Date.now() - lastPrefetched < bgRefreshThrottleMs;
    if (!skipStartupPrefetches) {
      const lastPrefetchedInfo = lastPrefetched > 0 ? ` last ran ${Math.round((Date.now() - lastPrefetched) / 1000)}s ago` : "";
      logForDebugging(`Starting background startup prefetches${lastPrefetchedInfo}`);
      checkQuotaStatus().catch((error) => logError(error));
      fetchBootstrapData();
      prefetchPassesEligibility();
      if (!getFeatureValue_CACHED_MAY_BE_STALE("tengu_miraculo_the_bard", false)) {
        prefetchFastModeStatus();
      } else {
        resolveFastModeStatusFromCache();
      }
      if (bgRefreshThrottleMs > 0) {
        saveGlobalConfig((current) => ({
          ...current,
          startupPrefetchedAt: Date.now()
        }));
      }
    } else {
      logForDebugging(`Skipping startup prefetches, last ran ${Math.round((Date.now() - lastPrefetched) / 1000)}s ago`);
      resolveFastModeStatusFromCache();
    }
    if (!isNonInteractiveSession) {
      refreshExampleCommands();
    }
    const { servers: existingMcpConfigs } = await mcpConfigPromise;
    logForDebugging(`[STARTUP] MCP configs resolved in ${mcpConfigResolvedMs}ms (awaited at +${Date.now() - mcpConfigStart}ms)`);
    const allMcpConfigs = {
      ...existingMcpConfigs,
      ...dynamicMcpConfig
    };
    const sdkMcpConfigs = {};
    const regularMcpConfigs = {};
    for (const [name, config] of Object.entries(allMcpConfigs)) {
      const typedConfig = config;
      if (typedConfig.type === "sdk") {
        sdkMcpConfigs[name] = typedConfig;
      } else {
        regularMcpConfigs[name] = typedConfig;
      }
    }
    profileCheckpoint("action_mcp_configs_loaded");
    const localMcpPromise = isNonInteractiveSession ? Promise.resolve({ clients: [], tools: [], commands: [] }) : prefetchAllMcpResources(regularMcpConfigs);
    const claudeaiMcpPromise = isNonInteractiveSession ? Promise.resolve({ clients: [], tools: [], commands: [] }) : claudeaiConfigPromise.then((configs) => Object.keys(configs).length > 0 ? prefetchAllMcpResources(configs) : { clients: [], tools: [], commands: [] });
    const mcpPromise = Promise.all([
      localMcpPromise,
      claudeaiMcpPromise
    ]).then(([local, claudeai]) => ({
      clients: [...local.clients, ...claudeai.clients],
      tools: uniqBy_default([...local.tools, ...claudeai.tools], "name"),
      commands: uniqBy_default([...local.commands, ...claudeai.commands], "name")
    }));
    const hooksPromise = initOnly || init2 || maintenance || isNonInteractiveSession || options.continue || options.resume ? null : processSessionStartHooks("startup", {
      agentType: mainThreadAgentDefinition?.agentType,
      model: resolvedInitialModel
    });
    const hookMessages = [];
    mcpPromise.catch(() => {});
    const mcpClients = [];
    const mcpTools = [];
    const mcpCommands = [];
    let thinkingEnabled = shouldEnableThinkingByDefault();
    let thinkingConfig = thinkingEnabled !== false ? { type: "adaptive" } : { type: "disabled" };
    if (options.thinking === "adaptive" || options.thinking === "enabled") {
      thinkingEnabled = true;
      thinkingConfig = { type: "adaptive" };
    } else if (options.thinking === "disabled") {
      thinkingEnabled = false;
      thinkingConfig = { type: "disabled" };
    } else {
      const maxThinkingTokens = process.env.MAX_THINKING_TOKENS ? parseInt(process.env.MAX_THINKING_TOKENS, 10) : options.maxThinkingTokens;
      if (maxThinkingTokens !== undefined) {
        if (maxThinkingTokens > 0) {
          thinkingEnabled = true;
          thinkingConfig = {
            type: "enabled",
            budgetTokens: maxThinkingTokens
          };
        } else if (maxThinkingTokens === 0) {
          thinkingEnabled = false;
          thinkingConfig = { type: "disabled" };
        }
      }
    }
    logForDiagnosticsNoPII("info", "started", {
      version: "1.0.0",
      is_native_binary: isInBundledMode()
    });
    registerCleanup(async () => {
      logForDiagnosticsNoPII("info", "exited");
    });
    logTenguInit({
      hasInitialPrompt: Boolean(prompt),
      hasStdin: Boolean(inputPrompt),
      verbose,
      debug,
      debugToStderr,
      print: print ?? false,
      outputFormat: outputFormat ?? "text",
      inputFormat: inputFormat ?? "text",
      numAllowedTools: allowedTools.length,
      numDisallowedTools: disallowedTools.length,
      mcpClientCount: Object.keys(allMcpConfigs).length,
      worktreeEnabled,
      skipWebFetchPreflight: getInitialSettings().skipWebFetchPreflight,
      githubActionInputs: process.env.GITHUB_ACTION_INPUTS,
      dangerouslySkipPermissionsPassed: dangerouslySkipPermissions ?? false,
      permissionMode,
      modeIsBypass: permissionMode === "bypassPermissions",
      allowDangerouslySkipPermissionsPassed: allowDangerouslySkipPermissions,
      systemPromptFlag: systemPrompt ? options.systemPromptFile ? "file" : "flag" : undefined,
      appendSystemPromptFlag: appendSystemPrompt ? options.appendSystemPromptFile ? "file" : "flag" : undefined,
      thinkingConfig,
      assistantActivationPath: kairosEnabled ? assistantModule?.getAssistantActivationPath() : undefined
    });
    logContextMetrics(regularMcpConfigs, toolPermissionContext);
    logPermissionContextForAnts(null, "initialization");
    logManagedSettings();
    registerSession().then((registered) => {
      if (!registered)
        return;
      if (sessionNameArg) {
        updateSessionName(sessionNameArg);
      }
      countConcurrentSessions().then((count2) => {
        if (count2 >= 2) {
          logEvent("tengu_concurrent_sessions", {
            num_sessions: count2
          });
        }
      });
    });
    if (isBareMode()) {} else if (isNonInteractiveSession) {
      await initializeVersionedPlugins();
      profileCheckpoint("action_after_plugins_init");
      cleanupOrphanedPluginVersionsInBackground().then(() => getGlobExclusionsForPluginCache());
    } else {
      initializeVersionedPlugins().then(async () => {
        profileCheckpoint("action_after_plugins_init");
        await cleanupOrphanedPluginVersionsInBackground();
        getGlobExclusionsForPluginCache();
      });
    }
    const setupTrigger = initOnly || init2 ? "init" : maintenance ? "maintenance" : null;
    if (initOnly) {
      applyConfigEnvironmentVariables();
      await processSetupHooks("init", { forceSyncExecution: true });
      await processSessionStartHooks("startup", {
        forceSyncExecution: true
      });
      gracefulShutdownSync(0);
      return;
    }
    if (isNonInteractiveSession) {
      if (outputFormat === "stream-json" || outputFormat === "json") {
        setHasFormattedOutput(true);
      }
      applyConfigEnvironmentVariables();
      initializeTelemetryAfterTrust();
      const sessionStartHooksPromise = options.continue || options.resume || teleport || setupTrigger ? undefined : processSessionStartHooks("startup");
      sessionStartHooksPromise?.catch(() => {});
      profileCheckpoint("before_validateForceLoginOrg");
      const orgValidation = await validateForceLoginOrg();
      if (!orgValidation.valid) {
        process.stderr.write(orgValidation.message + `
`);
        process.exit(1);
      }
      const commandsHeadless = disableSlashCommands ? [] : commands.filter((command) => command.type === "prompt" && !command.disableNonInteractive || command.type === "local" && command.supportsNonInteractive);
      const defaultState = getDefaultAppState();
      const headlessInitialState = {
        ...defaultState,
        mcp: {
          ...defaultState.mcp,
          clients: mcpClients,
          commands: mcpCommands,
          tools: mcpTools
        },
        toolPermissionContext,
        effortValue: parseEffortValue(options.effort) ?? getInitialEffortSetting(),
        ...isFastModeEnabled() && {
          fastMode: getInitialFastModeSetting(effectiveModel ?? null)
        },
        ...isAdvisorEnabled() && advisorModel && { advisorModel },
        ...{ kairosEnabled }
      };
      const headlessStore = createStore(headlessInitialState, onChangeAppState);
      if (true) {
        verifyAutoModeGateAccess(toolPermissionContext, headlessStore.getState().fastMode).then(({ updateContext }) => {
          headlessStore.setState((prev) => {
            const nextCtx = updateContext(prev.toolPermissionContext);
            if (nextCtx === prev.toolPermissionContext)
              return prev;
            return { ...prev, toolPermissionContext: nextCtx };
          });
        });
      }
      if (options.sessionPersistence === false) {
        setSessionPersistenceDisabled(true);
      }
      setSdkBetas(filterAllowedSdkBetas(betas));
      const connectMcpBatch = (configs, label) => {
        if (Object.keys(configs).length === 0)
          return Promise.resolve();
        headlessStore.setState((prev) => ({
          ...prev,
          mcp: {
            ...prev.mcp,
            clients: [
              ...prev.mcp.clients,
              ...Object.entries(configs).map(([name, config]) => ({
                name,
                type: "pending",
                config
              }))
            ]
          }
        }));
        return getMcpToolsCommandsAndResources(({ client, tools: tools2, commands: commands2 }) => {
          headlessStore.setState((prev) => ({
            ...prev,
            mcp: {
              ...prev.mcp,
              clients: prev.mcp.clients.some((c) => c.name === client.name) ? prev.mcp.clients.map((c) => c.name === client.name ? client : c) : [...prev.mcp.clients, client],
              tools: uniqBy_default([...prev.mcp.tools, ...tools2], "name"),
              commands: uniqBy_default([...prev.mcp.commands, ...commands2], "name")
            }
          }));
        }, configs).catch((err) => logForDebugging(`[MCP] ${label} connect error: ${err}`));
      };
      profileCheckpoint("before_connectMcp");
      await connectMcpBatch(regularMcpConfigs, "regular");
      profileCheckpoint("after_connectMcp");
      const CLAUDE_AI_MCP_TIMEOUT_MS = 5000;
      const claudeaiConnect = claudeaiConfigPromise.then((claudeaiConfigs) => {
        if (Object.keys(claudeaiConfigs).length > 0) {
          const claudeaiSigs = new Set;
          for (const config of Object.values(claudeaiConfigs)) {
            const sig = getMcpServerSignature(config);
            if (sig)
              claudeaiSigs.add(sig);
          }
          const suppressed = new Set;
          for (const [name, config] of Object.entries(regularMcpConfigs)) {
            if (!name.startsWith("plugin:"))
              continue;
            const sig = getMcpServerSignature(config);
            if (sig && claudeaiSigs.has(sig))
              suppressed.add(name);
          }
          if (suppressed.size > 0) {
            logForDebugging(`[MCP] Lazy dedup: suppressing ${suppressed.size} plugin server(s) that duplicate claude.ai connectors: ${[...suppressed].join(", ")}`);
            for (const c of headlessStore.getState().mcp.clients) {
              if (!suppressed.has(c.name) || c.type !== "connected")
                continue;
              c.client.onclose = undefined;
              clearServerCache(c.name, c.config).catch(() => {});
            }
            headlessStore.setState((prev) => {
              let {
                clients,
                tools: tools2,
                commands: commands2,
                resources
              } = prev.mcp;
              clients = clients.filter((c) => !suppressed.has(c.name));
              tools2 = tools2.filter((t) => !t.mcpInfo || !suppressed.has(t.mcpInfo.serverName));
              for (const name of suppressed) {
                commands2 = excludeCommandsByServer(commands2, name);
                resources = excludeResourcesByServer(resources, name);
              }
              return {
                ...prev,
                mcp: {
                  ...prev.mcp,
                  clients,
                  tools: tools2,
                  commands: commands2,
                  resources
                }
              };
            });
          }
        }
        const nonPluginConfigs = pickBy_default(regularMcpConfigs, (_, n) => !n.startsWith("plugin:"));
        const { servers: dedupedClaudeAi } = dedupClaudeAiMcpServers(claudeaiConfigs, nonPluginConfigs);
        return connectMcpBatch(dedupedClaudeAi, "claudeai");
      });
      let claudeaiTimer;
      const claudeaiTimedOut = await Promise.race([
        claudeaiConnect.then(() => false),
        new Promise((resolve2) => {
          claudeaiTimer = setTimeout((r) => r(true), CLAUDE_AI_MCP_TIMEOUT_MS, resolve2);
        })
      ]);
      if (claudeaiTimer)
        clearTimeout(claudeaiTimer);
      if (claudeaiTimedOut) {
        logForDebugging(`[MCP] claude.ai connectors not ready after ${CLAUDE_AI_MCP_TIMEOUT_MS}ms \u2014 proceeding; background connection continues`);
      }
      profileCheckpoint("after_connectMcp_claudeai");
      if (!isBareMode()) {
        startDeferredPrefetches();
        import("./chunk-j0j9hmv2.js").then((m) => m.startBackgroundHousekeeping());
        if (process.env.USER_TYPE === "ant") {
          import("./chunk-3nk79af8.js").then((m) => m.startSdkMemoryMonitor());
        }
      }
      logSessionTelemetry();
      profileCheckpoint("before_print_import");
      const { runHeadless } = await import("./chunk-jbkt36rf.js");
      profileCheckpoint("after_print_import");
      runHeadless(inputPrompt, () => headlessStore.getState(), headlessStore.setState, commandsHeadless, tools, sdkMcpConfigs, agentDefinitions.activeAgents, {
        continue: options.continue,
        resume: options.resume,
        verbose,
        outputFormat,
        jsonSchema,
        permissionPromptToolName: options.permissionPromptTool,
        allowedTools,
        thinkingConfig,
        maxTurns: options.maxTurns,
        maxBudgetUsd: options.maxBudgetUsd,
        taskBudget: options.taskBudget ? { total: options.taskBudget } : undefined,
        systemPrompt,
        appendSystemPrompt,
        userSpecifiedModel: effectiveModel,
        fallbackModel: userSpecifiedFallbackModel,
        teleport,
        sdkUrl,
        replayUserMessages: effectiveReplayUserMessages,
        includePartialMessages: effectiveIncludePartialMessages,
        forkSession: options.forkSession || false,
        resumeSessionAt: options.resumeSessionAt || undefined,
        rewindFiles: options.rewindFiles,
        enableAuthStatus: options.enableAuthStatus,
        agent: agentCli,
        workload: options.workload,
        setupTrigger: setupTrigger ?? undefined,
        sessionStartHooksPromise
      });
      return;
    }
    logEvent("tengu_startup_manual_model_config", {
      cli_flag: options.model,
      env_var: process.env.ANTHROPIC_MODEL,
      settings_file: (getInitialSettings() || {}).model,
      subscriptionType: getSubscriptionType(),
      agent: agentSetting
    });
    const deprecationWarning = getModelDeprecationWarning(resolvedInitialModel);
    const initialNotifications = [];
    if (permissionModeNotification) {
      initialNotifications.push({
        key: "permission-mode-notification",
        text: permissionModeNotification,
        priority: "high"
      });
    }
    if (deprecationWarning) {
      initialNotifications.push({
        key: "model-deprecation-warning",
        text: deprecationWarning,
        color: "warning",
        priority: "high"
      });
    }
    if (overlyBroadBashPermissions.length > 0) {
      const displayList = uniq(overlyBroadBashPermissions.map((p) => p.ruleDisplay));
      const displays = displayList.join(", ");
      const sources = uniq(overlyBroadBashPermissions.map((p) => p.sourceDisplay)).join(", ");
      const n = displayList.length;
      initialNotifications.push({
        key: "overly-broad-bash-notification",
        text: `${displays} allow ${plural(n, "rule")} from ${sources} ${plural(n, "was", "were")} ignored \u2014 not available for Ants, please use auto-mode instead`,
        color: "warning",
        priority: "high"
      });
    }
    const teammateUtils = getTeammateUtils();
    const effectiveToolPermissionContext = {
      ...toolPermissionContext,
      mode: isAgentSwarmsEnabled() && teammateUtils?.isPlanModeRequired?.() ? "plan" : toolPermissionContext.mode
    };
    const initialIsBriefOnly = getUserMsgOptIn();
    const fullRemoteControl = remoteControl || getRemoteControlAtStartup() || kairosEnabled;
    let ccrMirrorEnabled = false;
    if (false) {}
    const initialState = {
      settings: getInitialSettings(),
      tasks: {},
      agentNameRegistry: new Map,
      verbose: verbose ?? getGlobalConfig().verbose ?? false,
      mainLoopModel: initialMainLoopModel,
      mainLoopModelForSession: null,
      isBriefOnly: initialIsBriefOnly,
      expandedView: getGlobalConfig().showSpinnerTree ? "teammates" : getGlobalConfig().showExpandedTodos ? "tasks" : "none",
      showTeammateMessagePreview: isAgentSwarmsEnabled() ? false : undefined,
      selectedIPAgentIndex: -1,
      coordinatorTaskIndex: -1,
      viewSelectionMode: "none",
      footerSelection: null,
      toolPermissionContext: effectiveToolPermissionContext,
      agent: mainThreadAgentDefinition?.agentType,
      agentDefinitions,
      mcp: {
        clients: [],
        tools: [],
        commands: [],
        resources: {},
        pluginReconnectKey: 0
      },
      plugins: {
        enabled: [],
        disabled: [],
        commands: [],
        errors: [],
        installationStatus: {
          marketplaces: [],
          plugins: []
        },
        needsRefresh: false
      },
      statusLineText: undefined,
      kairosEnabled,
      remoteSessionUrl: undefined,
      remoteConnectionStatus: "connecting",
      remoteBackgroundTaskCount: 0,
      replBridgeEnabled: fullRemoteControl || ccrMirrorEnabled,
      replBridgeExplicit: remoteControl,
      replBridgeOutboundOnly: ccrMirrorEnabled,
      replBridgeConnected: false,
      replBridgeSessionActive: false,
      replBridgeReconnecting: false,
      replBridgeConnectUrl: undefined,
      replBridgeSessionUrl: undefined,
      replBridgeEnvironmentId: undefined,
      replBridgeSessionId: undefined,
      replBridgeError: undefined,
      replBridgeInitialName: remoteControlName,
      showRemoteCallout: false,
      notifications: {
        current: null,
        queue: initialNotifications
      },
      elicitation: {
        queue: []
      },
      todos: {},
      remoteAgentTaskSuggestions: [],
      fileHistory: {
        snapshots: [],
        trackedFiles: new Set,
        snapshotSequence: 0
      },
      attribution: createEmptyAttributionState(),
      thinkingEnabled,
      promptSuggestionEnabled: shouldEnablePromptSuggestion(),
      sessionHooks: new Map,
      inbox: {
        messages: []
      },
      promptSuggestion: {
        text: null,
        promptId: null,
        shownAt: 0,
        acceptedAt: 0,
        generationRequestId: null
      },
      speculation: IDLE_SPECULATION_STATE,
      speculationSessionTimeSavedMs: 0,
      skillImprovement: {
        suggestion: null
      },
      workerSandboxPermissions: {
        queue: [],
        selectedIndex: 0
      },
      pendingWorkerRequest: null,
      pendingSandboxRequest: null,
      authVersion: 0,
      initialMessage: inputPrompt ? {
        message: createUserMessage({
          content: String(inputPrompt)
        })
      } : null,
      effortValue: parseEffortValue(options.effort) ?? getInitialEffortSetting(),
      activeOverlays: new Set,
      fastMode: getInitialFastModeSetting(resolvedInitialModel),
      ...isAdvisorEnabled() && advisorModel && { advisorModel },
      teamContext: assistantTeamContext ?? computeInitialTeamContext()
    };
    if (inputPrompt) {
      addToHistory(String(inputPrompt));
    }
    const initialTools = mcpTools;
    saveGlobalConfig((current) => ({
      ...current,
      numStartups: (current.numStartups ?? 0) + 1
    }));
    setImmediate(() => {
      logStartupTelemetry();
      logSessionTelemetry();
    });
    const sessionUploaderPromise = process.env.USER_TYPE === "ant" ? import("./chunk-7xyswgjh.js") : null;
    const uploaderReady = sessionUploaderPromise ? sessionUploaderPromise.then((mod) => mod.createSessionTurnUploader()).catch(() => null) : null;
    const sessionConfig = {
      debug: debug || debugToStderr,
      commands: [...commands, ...mcpCommands],
      initialTools,
      mcpClients,
      autoConnectIdeFlag: ide,
      mainThreadAgentDefinition,
      disableSlashCommands,
      dynamicMcpConfig,
      strictMcpConfig,
      systemPrompt,
      appendSystemPrompt,
      taskListId,
      thinkingConfig,
      ...uploaderReady && {
        onTurnComplete: (messages) => {
          uploaderReady.then((uploader) => uploader?.(messages));
        }
      }
    };
    const resumeContext = {
      modeApi: coordinatorModeModule,
      mainThreadAgentDefinition,
      agentDefinitions,
      currentCwd,
      cliAgents,
      initialState
    };
    if (options.continue) {
      let resumeSucceeded = false;
      try {
        const resumeStart = performance.now();
        const { clearSessionCaches } = await import("./chunk-ek6ggjr0.js");
        clearSessionCaches();
        const result = await loadConversationForResume(undefined, undefined);
        if (!result) {
          logEvent("tengu_continue", {
            success: false
          });
          return await exitWithError(root, "No conversation found to continue");
        }
        const loaded = await processResumedConversation(result, {
          forkSession: !!options.forkSession,
          includeAttribution: true,
          transcriptPath: result.fullPath
        }, resumeContext);
        if (loaded.restoredAgentDef) {
          mainThreadAgentDefinition = loaded.restoredAgentDef;
        }
        maybeActivateProactive(options);
        maybeActivateBrief(options);
        logEvent("tengu_continue", {
          success: true,
          resume_duration_ms: Math.round(performance.now() - resumeStart)
        });
        resumeSucceeded = true;
        await launchRepl(root, {
          getFpsMetrics,
          stats,
          initialState: loaded.initialState
        }, {
          ...sessionConfig,
          mainThreadAgentDefinition: loaded.restoredAgentDef ?? mainThreadAgentDefinition,
          initialMessages: loaded.messages,
          initialFileHistorySnapshots: loaded.fileHistorySnapshots,
          initialContentReplacements: loaded.contentReplacements,
          initialAgentName: loaded.agentName,
          initialAgentColor: loaded.agentColor
        }, renderAndRun);
      } catch (error) {
        if (!resumeSucceeded) {
          logEvent("tengu_continue", {
            success: false
          });
        }
        logError(error);
        process.exit(1);
      }
    } else if (_pendingConnect?.url) {
      let directConnectConfig;
      try {
        const session = await createDirectConnectSession({
          serverUrl: _pendingConnect.url,
          authToken: _pendingConnect.authToken,
          cwd: getOriginalCwd(),
          dangerouslySkipPermissions: _pendingConnect.dangerouslySkipPermissions
        });
        if (session.workDir) {
          setOriginalCwd(session.workDir);
          setCwdState(session.workDir);
        }
        setDirectConnectServerUrl(_pendingConnect.url);
        directConnectConfig = session.config;
      } catch (err) {
        return await exitWithError(root, err instanceof DirectConnectError ? err.message : String(err), () => gracefulShutdown(1));
      }
      const connectInfoMessage = createSystemMessage(`Connected to server at ${_pendingConnect.url}
Session: ${directConnectConfig.sessionId}`, "info");
      await launchRepl(root, { getFpsMetrics, stats, initialState }, {
        debug: debug || debugToStderr,
        commands,
        initialTools: [],
        initialMessages: [connectInfoMessage],
        mcpClients: [],
        autoConnectIdeFlag: ide,
        mainThreadAgentDefinition,
        disableSlashCommands,
        directConnectConfig,
        thinkingConfig
      }, renderAndRun);
      return;
    } else if (_pendingSSH?.host) {
      const {
        createSSHSession,
        createLocalSSHSession,
        SSHSessionError
      } = await import("./chunk-6zm8hd25.js");
      let sshSession;
      try {
        if (_pendingSSH.local) {
          process.stderr.write(`Starting local ssh-proxy test session...
`);
          sshSession = await createLocalSSHSession({
            cwd: _pendingSSH.cwd,
            permissionMode: _pendingSSH.permissionMode,
            dangerouslySkipPermissions: _pendingSSH.dangerouslySkipPermissions
          });
        } else {
          process.stderr.write(`Connecting to ${_pendingSSH.host}\u2026
`);
          const isTTY = process.stderr.isTTY;
          let hadProgress = false;
          sshSession = await createSSHSession({
            host: _pendingSSH.host,
            cwd: _pendingSSH.cwd,
            localVersion: "1.0.0",
            permissionMode: _pendingSSH.permissionMode,
            dangerouslySkipPermissions: _pendingSSH.dangerouslySkipPermissions,
            extraCliArgs: _pendingSSH.extraCliArgs,
            remoteBin: _pendingSSH.remoteBin
          }, isTTY ? {
            onProgress: (msg) => {
              hadProgress = true;
              process.stderr.write(`\r  ${msg}\x1B[K`);
            }
          } : {});
          if (hadProgress)
            process.stderr.write(`
`);
        }
        setOriginalCwd(sshSession.remoteCwd);
        setCwdState(sshSession.remoteCwd);
        setDirectConnectServerUrl(_pendingSSH.local ? "local" : _pendingSSH.host);
      } catch (err) {
        return await exitWithError(root, err instanceof SSHSessionError ? err.message : String(err), () => gracefulShutdown(1));
      }
      const sshInfoMessage = createSystemMessage(_pendingSSH.local ? `Local ssh-proxy test session
cwd: ${sshSession.remoteCwd}
Auth: unix socket \u2192 local proxy` : `SSH session to ${_pendingSSH.host}
Remote cwd: ${sshSession.remoteCwd}
Auth: unix socket -R \u2192 local proxy`, "info");
      await launchRepl(root, { getFpsMetrics, stats, initialState }, {
        debug: debug || debugToStderr,
        commands,
        initialTools: [],
        initialMessages: [sshInfoMessage],
        mcpClients: [],
        autoConnectIdeFlag: ide,
        mainThreadAgentDefinition,
        disableSlashCommands,
        sshSession,
        thinkingConfig
      }, renderAndRun);
      return;
    } else if (_pendingAssistantChat && (_pendingAssistantChat.sessionId || _pendingAssistantChat.discover)) {
      const { discoverAssistantSessions } = await import("./chunk-avv3md6b.js");
      let targetSessionId = _pendingAssistantChat.sessionId;
      if (!targetSessionId) {
        let sessions;
        try {
          sessions = await discoverAssistantSessions();
        } catch (e) {
          return await exitWithError(root, `Failed to discover sessions: ${e instanceof Error ? e.message : e}`, () => gracefulShutdown(1));
        }
        if (sessions.length === 0) {
          let installedDir;
          try {
            installedDir = await launchAssistantInstallWizard(root);
          } catch (e) {
            return await exitWithError(root, `Assistant installation failed: ${e instanceof Error ? e.message : e}`, () => gracefulShutdown(1));
          }
          if (installedDir === null) {
            await gracefulShutdown(0);
            process.exit(0);
          }
          return await exitWithMessage(root, `Assistant installed in ${installedDir}. The daemon is starting up \u2014 run \`claude assistant\` again in a few seconds to connect.`, {
            exitCode: 0,
            beforeExit: () => gracefulShutdown(0)
          });
        }
        if (sessions.length === 1) {
          targetSessionId = sessions[0].id;
        } else {
          const picked = await launchAssistantSessionChooser(root, {
            sessions
          });
          if (!picked) {
            await gracefulShutdown(0);
            process.exit(0);
          }
          targetSessionId = picked;
        }
      }
      const {
        checkAndRefreshOAuthTokenIfNeeded,
        getClaudeAIOAuthTokens: getClaudeAIOAuthTokens2
      } = await import("./chunk-j0v9g0w9.js");
      await checkAndRefreshOAuthTokenIfNeeded();
      let apiCreds;
      try {
        apiCreds = await prepareApiRequest();
      } catch (e) {
        return await exitWithError(root, `Error: ${e instanceof Error ? e.message : "Failed to authenticate"}`, () => gracefulShutdown(1));
      }
      const getAccessToken = () => getClaudeAIOAuthTokens2()?.accessToken ?? apiCreds.accessToken;
      setKairosActive(true);
      setUserMsgOptIn(true);
      setIsRemoteMode(true);
      const remoteSessionConfig = createRemoteSessionConfig(targetSessionId, getAccessToken, apiCreds.orgUUID, false, true);
      const infoMessage = createSystemMessage(`Attached to assistant session ${targetSessionId.slice(0, 8)}\u2026`, "info");
      const assistantInitialState = {
        ...initialState,
        isBriefOnly: true,
        kairosEnabled: false,
        replBridgeEnabled: false
      };
      const remoteCommands = filterCommandsForRemoteMode(commands);
      await launchRepl(root, {
        getFpsMetrics,
        stats,
        initialState: assistantInitialState
      }, {
        debug: debug || debugToStderr,
        commands: remoteCommands,
        initialTools: [],
        initialMessages: [infoMessage],
        mcpClients: [],
        autoConnectIdeFlag: ide,
        mainThreadAgentDefinition,
        disableSlashCommands,
        remoteSessionConfig,
        thinkingConfig
      }, renderAndRun);
      return;
    } else if (options.resume || options.fromPr || teleport || remote !== null) {
      const { clearSessionCaches } = await import("./chunk-ek6ggjr0.js");
      clearSessionCaches();
      let messages = null;
      let processedResume;
      let maybeSessionId = validateUuid(options.resume);
      let searchTerm;
      let matchedLog = null;
      let filterByPr;
      if (options.fromPr) {
        if (options.fromPr === true) {
          filterByPr = true;
        } else if (typeof options.fromPr === "string") {
          filterByPr = options.fromPr;
        }
      }
      if (options.resume && typeof options.resume === "string" && !maybeSessionId) {
        const trimmedValue = options.resume.trim();
        if (trimmedValue) {
          const matches = await searchSessionsByCustomTitle(trimmedValue, {
            exact: true
          });
          if (matches.length === 1) {
            matchedLog = matches[0];
            maybeSessionId = getSessionIdFromLog(matchedLog) ?? null;
          } else {
            searchTerm = trimmedValue;
          }
        }
      }
      if (remote !== null || teleport) {
        await waitForPolicyLimitsToLoad();
        if (!isPolicyAllowed("allow_remote_sessions")) {
          return await exitWithError(root, "Error: Remote sessions are disabled by your organization's policy.", () => gracefulShutdown(1));
        }
      }
      if (remote !== null) {
        const hasInitialPrompt = remote.length > 0;
        const isRemoteTuiEnabled = getFeatureValue_CACHED_MAY_BE_STALE("tengu_remote_backend", false);
        if (!isRemoteTuiEnabled && !hasInitialPrompt) {
          return await exitWithError(root, `Error: --remote requires a description.
Usage: claude --remote "your task description"`, () => gracefulShutdown(1));
        }
        logEvent("tengu_remote_create_session", {
          has_initial_prompt: String(hasInitialPrompt)
        });
        const currentBranch = await getBranch();
        const createdSession = await teleportToRemoteWithErrorHandling(root, hasInitialPrompt ? remote : null, new AbortController().signal, currentBranch || undefined);
        if (!createdSession) {
          logEvent("tengu_remote_create_session_error", {
            error: "unable_to_create_session"
          });
          return await exitWithError(root, "Error: Unable to create remote session", () => gracefulShutdown(1));
        }
        logEvent("tengu_remote_create_session_success", {
          session_id: createdSession.id
        });
        if (!isRemoteTuiEnabled) {
          process.stdout.write(`Created remote session: ${createdSession.title}
`);
          process.stdout.write(`View: ${getRemoteSessionUrl(createdSession.id)}?m=0
`);
          process.stdout.write(`Resume with: claude --teleport ${createdSession.id}
`);
          await gracefulShutdown(0);
          process.exit(0);
        }
        setIsRemoteMode(true);
        switchSession(asSessionId(createdSession.id));
        let apiCreds;
        try {
          apiCreds = await prepareApiRequest();
        } catch (error) {
          logError(toError(error));
          return await exitWithError(root, `Error: ${errorMessage(error) || "Failed to authenticate"}`, () => gracefulShutdown(1));
        }
        const { getClaudeAIOAuthTokens: getTokensForRemote } = await import("./chunk-j0v9g0w9.js");
        const getAccessTokenForRemote = () => getTokensForRemote()?.accessToken ?? apiCreds.accessToken;
        const remoteSessionConfig = createRemoteSessionConfig(createdSession.id, getAccessTokenForRemote, apiCreds.orgUUID, hasInitialPrompt);
        const remoteSessionUrl = `${getRemoteSessionUrl(createdSession.id)}?m=0`;
        const remoteInfoMessage = createSystemMessage(`/remote-control is active. Code in CLI or at ${remoteSessionUrl}`, "info");
        const initialUserMessage = hasInitialPrompt ? createUserMessage({ content: remote }) : null;
        const remoteInitialState = {
          ...initialState,
          remoteSessionUrl
        };
        const remoteCommands = filterCommandsForRemoteMode(commands);
        await launchRepl(root, {
          getFpsMetrics,
          stats,
          initialState: remoteInitialState
        }, {
          debug: debug || debugToStderr,
          commands: remoteCommands,
          initialTools: [],
          initialMessages: initialUserMessage ? [remoteInfoMessage, initialUserMessage] : [remoteInfoMessage],
          mcpClients: [],
          autoConnectIdeFlag: ide,
          mainThreadAgentDefinition,
          disableSlashCommands,
          remoteSessionConfig,
          thinkingConfig
        }, renderAndRun);
        return;
      } else if (teleport) {
        if (teleport === true || teleport === "") {
          logEvent("tengu_teleport_interactive_mode", {});
          logForDebugging("selectAndResumeTeleportTask: Starting teleport flow...");
          const teleportResult = await launchTeleportResumeWrapper(root);
          if (!teleportResult) {
            await gracefulShutdown(0);
            process.exit(0);
          }
          const { branchError } = await checkOutTeleportedSessionBranch(teleportResult.branch);
          messages = processMessagesForTeleportResume(teleportResult.log, branchError);
        } else if (typeof teleport === "string") {
          logEvent("tengu_teleport_resume_session", {
            mode: "direct"
          });
          try {
            const sessionData = await fetchSession(teleport);
            const repoValidation = await validateSessionRepository(sessionData);
            if (repoValidation.status === "mismatch" || repoValidation.status === "not_in_repo") {
              const sessionRepo = repoValidation.sessionRepo;
              if (sessionRepo) {
                const knownPaths = getKnownPathsForRepo(sessionRepo);
                const existingPaths = await filterExistingPaths(knownPaths);
                if (existingPaths.length > 0) {
                  const selectedPath = await launchTeleportRepoMismatchDialog(root, {
                    targetRepo: sessionRepo,
                    initialPaths: existingPaths
                  });
                  if (selectedPath) {
                    process.chdir(selectedPath);
                    setCwd(selectedPath);
                    setOriginalCwd(selectedPath);
                  } else {
                    await gracefulShutdown(0);
                  }
                } else {
                  throw new TeleportOperationError(`You must run claude --teleport ${teleport} from a checkout of ${sessionRepo}.`, source_default.red(`You must run claude --teleport ${teleport} from a checkout of ${source_default.bold(sessionRepo)}.
`));
                }
              }
            } else if (repoValidation.status === "error") {
              throw new TeleportOperationError(repoValidation.errorMessage || "Failed to validate session", source_default.red(`Error: ${repoValidation.errorMessage || "Failed to validate session"}
`));
            }
            await validateGitState();
            const { teleportWithProgress } = await import("./chunk-pwqr56wr.js");
            const result = await teleportWithProgress(root, teleport);
            setTeleportedSessionInfo({ sessionId: teleport });
            messages = result.messages;
          } catch (error) {
            if (error instanceof TeleportOperationError) {
              process.stderr.write(error.formattedMessage + `
`);
            } else {
              logError(error);
              process.stderr.write(source_default.red(`Error: ${errorMessage(error)}
`));
            }
            await gracefulShutdown(1);
          }
        }
      }
      if (process.env.USER_TYPE === "ant") {
        if (options.resume && typeof options.resume === "string" && !maybeSessionId) {
          const { parseCcshareId, loadCcshare } = await import("./chunk-9x5zgy22.js");
          const ccshareId = parseCcshareId(options.resume);
          if (ccshareId) {
            try {
              const resumeStart = performance.now();
              const logOption = await loadCcshare(ccshareId);
              const result = await loadConversationForResume(logOption, undefined);
              if (result) {
                processedResume = await processResumedConversation(result, {
                  forkSession: true,
                  transcriptPath: result.fullPath
                }, resumeContext);
                if (processedResume.restoredAgentDef) {
                  mainThreadAgentDefinition = processedResume.restoredAgentDef;
                }
                logEvent("tengu_session_resumed", {
                  entrypoint: "ccshare",
                  success: true,
                  resume_duration_ms: Math.round(performance.now() - resumeStart)
                });
              } else {
                logEvent("tengu_session_resumed", {
                  entrypoint: "ccshare",
                  success: false
                });
              }
            } catch (error) {
              logEvent("tengu_session_resumed", {
                entrypoint: "ccshare",
                success: false
              });
              logError(error);
              await exitWithError(root, `Unable to resume from ccshare: ${errorMessage(error)}`, () => gracefulShutdown(1));
            }
          } else {
            const resolvedPath = resolve(options.resume);
            try {
              const resumeStart = performance.now();
              let logOption;
              try {
                logOption = await loadTranscriptFromFile(resolvedPath);
              } catch (error) {
                if (!isENOENT(error))
                  throw error;
              }
              if (logOption) {
                const result = await loadConversationForResume(logOption, undefined);
                if (result) {
                  processedResume = await processResumedConversation(result, {
                    forkSession: !!options.forkSession,
                    transcriptPath: result.fullPath
                  }, resumeContext);
                  if (processedResume.restoredAgentDef) {
                    mainThreadAgentDefinition = processedResume.restoredAgentDef;
                  }
                  logEvent("tengu_session_resumed", {
                    entrypoint: "file",
                    success: true,
                    resume_duration_ms: Math.round(performance.now() - resumeStart)
                  });
                } else {
                  logEvent("tengu_session_resumed", {
                    entrypoint: "file",
                    success: false
                  });
                }
              }
            } catch (error) {
              logEvent("tengu_session_resumed", {
                entrypoint: "file",
                success: false
              });
              logError(error);
              await exitWithError(root, `Unable to load transcript from file: ${options.resume}`, () => gracefulShutdown(1));
            }
          }
        }
      }
      if (maybeSessionId) {
        const sessionId2 = maybeSessionId;
        try {
          const resumeStart = performance.now();
          const result = await loadConversationForResume(matchedLog ?? sessionId2, undefined);
          if (!result) {
            logEvent("tengu_session_resumed", {
              entrypoint: "cli_flag",
              success: false
            });
            return await exitWithError(root, `No conversation found with session ID: ${sessionId2}`);
          }
          const fullPath = matchedLog?.fullPath ?? result.fullPath;
          processedResume = await processResumedConversation(result, {
            forkSession: !!options.forkSession,
            sessionIdOverride: sessionId2,
            transcriptPath: fullPath
          }, resumeContext);
          if (processedResume.restoredAgentDef) {
            mainThreadAgentDefinition = processedResume.restoredAgentDef;
          }
          logEvent("tengu_session_resumed", {
            entrypoint: "cli_flag",
            success: true,
            resume_duration_ms: Math.round(performance.now() - resumeStart)
          });
        } catch (error) {
          logEvent("tengu_session_resumed", {
            entrypoint: "cli_flag",
            success: false
          });
          logError(error);
          await exitWithError(root, `Failed to resume session ${sessionId2}`);
        }
      }
      if (fileDownloadPromise) {
        try {
          const results = await fileDownloadPromise;
          const failedCount = count(results, (r) => !r.success);
          if (failedCount > 0) {
            process.stderr.write(source_default.yellow(`Warning: ${failedCount}/${results.length} file(s) failed to download.
`));
          }
        } catch (error) {
          return await exitWithError(root, `Error downloading files: ${errorMessage(error)}`);
        }
      }
      const resumeData = processedResume ?? (Array.isArray(messages) ? {
        messages,
        fileHistorySnapshots: undefined,
        agentName: undefined,
        agentColor: undefined,
        restoredAgentDef: mainThreadAgentDefinition,
        initialState,
        contentReplacements: undefined
      } : undefined);
      if (resumeData) {
        maybeActivateProactive(options);
        maybeActivateBrief(options);
        await launchRepl(root, {
          getFpsMetrics,
          stats,
          initialState: resumeData.initialState
        }, {
          ...sessionConfig,
          mainThreadAgentDefinition: resumeData.restoredAgentDef ?? mainThreadAgentDefinition,
          initialMessages: resumeData.messages,
          initialFileHistorySnapshots: resumeData.fileHistorySnapshots,
          initialContentReplacements: resumeData.contentReplacements,
          initialAgentName: resumeData.agentName,
          initialAgentColor: resumeData.agentColor
        }, renderAndRun);
      } else {
        await launchResumeChooser(root, { getFpsMetrics, stats, initialState }, getWorktreePaths(getOriginalCwd()), {
          ...sessionConfig,
          initialSearchQuery: searchTerm,
          forkSession: options.forkSession,
          filterByPr
        });
      }
    } else {
      const pendingHookMessages = hooksPromise && hookMessages.length === 0 ? hooksPromise : undefined;
      profileCheckpoint("action_after_hooks");
      maybeActivateProactive(options);
      maybeActivateBrief(options);
      if (false) {}
      let deepLinkBanner = null;
      if (true) {
        if (options.deepLinkOrigin) {
          logEvent("tengu_deep_link_opened", {
            has_prefill: Boolean(options.prefill),
            has_repo: Boolean(options.deepLinkRepo)
          });
          deepLinkBanner = createSystemMessage(buildDeepLinkBanner({
            cwd: getCwd(),
            prefillLength: options.prefill?.length,
            repo: options.deepLinkRepo,
            lastFetch: options.deepLinkLastFetch !== undefined ? new Date(options.deepLinkLastFetch) : undefined
          }), "warning");
        } else if (options.prefill) {
          deepLinkBanner = createSystemMessage("Launched with a pre-filled prompt \u2014 review it before pressing Enter.", "warning");
        }
      }
      const initialMessages = deepLinkBanner ? [deepLinkBanner, ...hookMessages] : hookMessages.length > 0 ? hookMessages : undefined;
      await launchRepl(root, { getFpsMetrics, stats, initialState }, {
        ...sessionConfig,
        initialMessages,
        pendingHookMessages
      }, renderAndRun);
    }
  }).version("1.0.0 (MiMo Code)", "-v, --version", "Output the version number");
  program2.option("-w, --worktree [name]", "Create a new git worktree for this session (optionally specify a name)");
  program2.option("--tmux", "Create a tmux session for the worktree (requires --worktree). Uses iTerm2 native panes when available; use --tmux=classic for traditional tmux.");
  if (canUserConfigureAdvisor()) {
    program2.addOption(new Option("--advisor <model>", "Enable the server-side advisor tool with the specified model (alias or full ID).").hideHelp());
  }
  if (process.env.USER_TYPE === "ant") {
    program2.addOption(new Option("--delegate-permissions", "[ANT-ONLY] Alias for --permission-mode auto.").implies({
      permissionMode: "auto"
    }));
    program2.addOption(new Option("--dangerously-skip-permissions-with-classifiers", "[ANT-ONLY] Deprecated alias for --permission-mode auto.").hideHelp().implies({ permissionMode: "auto" }));
    program2.addOption(new Option("--afk", "[ANT-ONLY] Deprecated alias for --permission-mode auto.").hideHelp().implies({ permissionMode: "auto" }));
    program2.addOption(new Option("--tasks [id]", '[ANT-ONLY] Tasks mode: watch for tasks and auto-process them. Optional id is used as both the task list ID and agent ID (defaults to "tasklist").').argParser(String).hideHelp());
    program2.option("--agent-teams", "[ANT-ONLY] Force MiMo to use multi-agent mode for solving problems", () => true);
  }
  if (true) {
    program2.addOption(new Option("--enable-auto-mode", "Opt in to auto mode").hideHelp());
  }
  if (true) {
    program2.addOption(new Option("--proactive", "Start in proactive autonomous mode"));
  }
  if (false) {}
  if (true) {
    program2.addOption(new Option("--brief", "Enable SendUserMessage tool for agent-to-user communication"));
  }
  if (true) {
    program2.addOption(new Option("--assistant", "Force assistant mode (Agent SDK daemon use)").hideHelp());
  }
  program2.addOption(new Option("--channels <servers...>", "MCP servers whose channel notifications (inbound push) should register this session. Space-separated server names.").hideHelp());
  program2.addOption(new Option("--dangerously-load-development-channels <servers...>", "Load channel servers not on the approved allowlist. For local channel development only. Shows a confirmation dialog at startup.").hideHelp());
  program2.addOption(new Option("--agent-id <id>", "Teammate agent ID").hideHelp());
  program2.addOption(new Option("--agent-name <name>", "Teammate display name").hideHelp());
  program2.addOption(new Option("--team-name <name>", "Team name for swarm coordination").hideHelp());
  program2.addOption(new Option("--agent-color <color>", "Teammate UI color").hideHelp());
  program2.addOption(new Option("--plan-mode-required", "Require plan mode before implementation").hideHelp());
  program2.addOption(new Option("--parent-session-id <id>", "Parent session ID for analytics correlation").hideHelp());
  program2.addOption(new Option("--teammate-mode <mode>", 'How to spawn teammates: "tmux", "in-process", or "auto"').choices(["auto", "tmux", "in-process"]).hideHelp());
  program2.addOption(new Option("--agent-type <type>", "Custom agent type for this teammate").hideHelp());
  program2.addOption(new Option("--sdk-url <url>", "Use remote WebSocket endpoint for SDK I/O streaming (only with -p and stream-json format)").hideHelp());
  program2.addOption(new Option("--teleport [session]", "Resume a teleport session, optionally specify session ID").hideHelp());
  program2.addOption(new Option("--remote [description]", "Create a remote session with the given description").hideHelp());
  if (true) {
    program2.addOption(new Option("--remote-control [name]", "Start an interactive session with Remote Control enabled (optionally named)").argParser((value) => value || true).hideHelp());
    program2.addOption(new Option("--rc [name]", "Alias for --remote-control").argParser((value) => value || true).hideHelp());
  }
  if (false) {}
  profileCheckpoint("run_main_options_built");
  const isPrintMode = process.argv.includes("-p") || process.argv.includes("--print");
  const isCcUrl = process.argv.some((a) => a.startsWith("cc://") || a.startsWith("cc+unix://"));
  if (isPrintMode && !isCcUrl) {
    profileCheckpoint("run_before_parse");
    await program2.parseAsync(process.argv);
    profileCheckpoint("run_after_parse");
    return program2;
  }
  const mcp = program2.command("mcp").description("Configure and manage MCP servers").configureHelp(createSortedHelpConfig()).enablePositionalOptions();
  mcp.command("serve").description(`Start the MiMo Code MCP server`).option("-d, --debug", "Enable debug mode", () => true).option("--verbose", "Override verbose mode setting from config", () => true).action(async ({
    debug,
    verbose
  }) => {
    const { mcpServeHandler } = await import("./chunk-yeq90mz4.js");
    await mcpServeHandler({ debug, verbose });
  });
  registerMcpAddCommand(mcp);
  if (isXaaEnabled()) {
    registerMcpXaaIdpCommand(mcp);
  }
  mcp.command("remove <name>").description("Remove an MCP server").option("-s, --scope <scope>", "Configuration scope (local, user, or project) - if not specified, removes from whichever scope it exists in").action(async (name, options) => {
    const { mcpRemoveHandler } = await import("./chunk-yeq90mz4.js");
    await mcpRemoveHandler(name, options);
  });
  mcp.command("list").description("List configured MCP servers. Note: The workspace trust dialog is skipped and stdio servers from .mcp.json are spawned for health checks. Only use this command in directories you trust.").action(async () => {
    const { mcpListHandler } = await import("./chunk-yeq90mz4.js");
    await mcpListHandler();
  });
  mcp.command("get <name>").description("Get details about an MCP server. Note: The workspace trust dialog is skipped and stdio servers from .mcp.json are spawned for health checks. Only use this command in directories you trust.").action(async (name) => {
    const { mcpGetHandler } = await import("./chunk-yeq90mz4.js");
    await mcpGetHandler(name);
  });
  mcp.command("add-json <name> <json>").description("Add an MCP server (stdio or SSE) with a JSON string").option("-s, --scope <scope>", "Configuration scope (local, user, or project)", "local").option("--client-secret", "Prompt for OAuth client secret (or set MCP_CLIENT_SECRET env var)").action(async (name, json, options) => {
    const { mcpAddJsonHandler } = await import("./chunk-yeq90mz4.js");
    await mcpAddJsonHandler(name, json, options);
  });
  mcp.command("add-from-claude-desktop").description("Import MCP servers from MiMo Desktop (Mac and WSL only)").option("-s, --scope <scope>", "Configuration scope (local, user, or project)", "local").action(async (options) => {
    const { mcpAddFromDesktopHandler } = await import("./chunk-yeq90mz4.js");
    await mcpAddFromDesktopHandler(options);
  });
  mcp.command("reset-project-choices").description("Reset all approved and rejected project-scoped (.mcp.json) servers within this project").action(async () => {
    const { mcpResetChoicesHandler } = await import("./chunk-yeq90mz4.js");
    await mcpResetChoicesHandler();
  });
  if (true) {
    program2.command("server").description("Start a MiMo Code session server").option("--port <number>", "HTTP port", "0").option("--host <string>", "Bind address", "0.0.0.0").option("--auth-token <token>", "Bearer token for auth").option("--unix <path>", "Listen on a unix domain socket").option("--workspace <dir>", "Default working directory for sessions that do not specify cwd").option("--idle-timeout <ms>", "Idle timeout for detached sessions in ms (0 = never expire)", "600000").option("--max-sessions <n>", "Maximum concurrent sessions (0 = unlimited)", "32").action(async (opts) => {
      const { randomBytes } = await import("crypto");
      const { startServer } = await import("./chunk-1z9bmera.js");
      const { SessionManager } = await import("./chunk-ee1b0rvz.js");
      const { DangerousBackend } = await import("./chunk-cbd6s6et.js");
      const { printBanner } = await import("./chunk-n3gzjpvg.js");
      const { createServerLogger } = await import("./chunk-9sq8hkpk.js");
      const {
        writeServerLock,
        removeServerLock,
        probeRunningServer
      } = await import("./chunk-f054mssm.js");
      const existing = await probeRunningServer();
      if (existing) {
        process.stderr.write(`A claude server is already running (pid ${existing.pid}) at ${existing.httpUrl}
`);
        process.exit(1);
      }
      const authToken = opts.authToken ?? `sk-ant-cc-${randomBytes(16).toString("base64url")}`;
      const config = {
        port: parseInt(opts.port, 10),
        host: opts.host,
        authToken,
        unix: opts.unix,
        workspace: opts.workspace,
        idleTimeoutMs: parseInt(opts.idleTimeout, 10),
        maxSessions: parseInt(opts.maxSessions, 10)
      };
      const backend = new DangerousBackend;
      const sessionManager = new SessionManager(backend, {
        idleTimeoutMs: config.idleTimeoutMs,
        maxSessions: config.maxSessions
      });
      const logger = createServerLogger();
      const server = startServer(config, sessionManager, logger);
      const actualPort = server.port ?? config.port;
      printBanner(config, authToken, actualPort);
      await writeServerLock({
        pid: process.pid,
        port: actualPort,
        host: config.host,
        httpUrl: config.unix ? `unix:${config.unix}` : `http://${config.host}:${actualPort}`,
        startedAt: Date.now()
      });
      let shuttingDown = false;
      const shutdown = async () => {
        if (shuttingDown)
          return;
        shuttingDown = true;
        server.stop(true);
        await sessionManager.destroyAll();
        await removeServerLock();
        process.exit(0);
      };
      process.once("SIGINT", () => void shutdown());
      process.once("SIGTERM", () => void shutdown());
    });
  }
  if (true) {
    program2.command("ssh <host> [dir]").description("Run MiMo Code on a remote host over SSH. Deploys the binary and " + "tunnels API auth back through your local machine \u2014 no remote setup needed.").option("--permission-mode <mode>", "Permission mode for the remote session").option("--dangerously-skip-permissions", "Skip all permission prompts on the remote (dangerous)").option("--remote-bin <command>", "Custom remote binary command (skips probe/deploy). Example: --remote-bin 'bun /path/to/project/dist/cli.js'").option("--local", "e2e test mode \u2014 spawn the child CLI locally (skip ssh/deploy). " + "Exercises the auth proxy and unix-socket plumbing without a remote host.").action(async () => {
      process.stderr.write(`Usage: claude ssh <user@host | ssh-config-alias> [dir]

Runs MiMo Code on a remote Linux host. You don't need to install
` + "anything on the remote or run `claude auth login` there \u2014 the binary is\n" + `deployed over SSH and API auth tunnels back through your local machine.
`);
      process.exit(1);
    });
  }
  if (true) {
    program2.command("open <cc-url>").description("Connect to a MiMo Code server (internal \u2014 use cc:// URLs)").option("-p, --print [prompt]", "Print mode (headless)").option("--output-format <format>", "Output format: text, json, stream-json", "text").action(async (ccUrl, opts) => {
      const { parseConnectUrl } = await import("./chunk-1qzt23et.js");
      const { serverUrl, authToken } = parseConnectUrl(ccUrl);
      let connectConfig;
      try {
        const session = await createDirectConnectSession({
          serverUrl,
          authToken,
          cwd: getOriginalCwd(),
          dangerouslySkipPermissions: _pendingConnect?.dangerouslySkipPermissions
        });
        if (session.workDir) {
          setOriginalCwd(session.workDir);
          setCwdState(session.workDir);
        }
        setDirectConnectServerUrl(serverUrl);
        connectConfig = session.config;
      } catch (err) {
        console.error(err instanceof DirectConnectError ? err.message : String(err));
        process.exit(1);
      }
      const { runConnectHeadless } = await import("./chunk-qazvrdfx.js");
      const prompt = typeof opts.print === "string" ? opts.print : "";
      const interactive = opts.print === true;
      await runConnectHeadless(connectConfig, prompt, opts.outputFormat, interactive);
    });
  }
  const auth = program2.command("auth").description("Manage authentication").configureHelp(createSortedHelpConfig());
  auth.command("login").description("Sign in to your MiMo account").option("--email <email>", "Pre-populate email address on the login page").option("--sso", "Force SSO login flow").option("--console", "Use MiMo API (API usage billing) instead of MiMo subscription").option("--claudeai", "Use MiMo subscription (default)").action(async ({
    email,
    sso,
    console: useConsole,
    claudeai
  }) => {
    const { authLogin } = await import("./chunk-n7e1k3vb.js");
    await authLogin({ email, sso, console: useConsole, claudeai });
  });
  auth.command("status").description("Show authentication status").option("--json", "Output as JSON (default)").option("--text", "Output as human-readable text").action(async (opts) => {
    const { authStatus } = await import("./chunk-n7e1k3vb.js");
    await authStatus(opts);
  });
  auth.command("logout").description("Log out from your MiMo account").action(async () => {
    const { authLogout } = await import("./chunk-n7e1k3vb.js");
    await authLogout();
  });
  const coworkOption = () => new Option("--cowork", "Use cowork_plugins directory").hideHelp();
  const pluginCmd = program2.command("plugin").alias("plugins").description("Manage MiMo Code plugins").configureHelp(createSortedHelpConfig());
  pluginCmd.command("validate <path>").description("Validate a plugin or marketplace manifest").addOption(coworkOption()).action(async (manifestPath, options) => {
    const { pluginValidateHandler } = await import("./chunk-b1bgrq5v.js");
    await pluginValidateHandler(manifestPath, options);
  });
  pluginCmd.command("list").description("List installed plugins").option("--json", "Output as JSON").option("--available", "Include available plugins from marketplaces (requires --json)").addOption(coworkOption()).action(async (options) => {
    const { pluginListHandler } = await import("./chunk-b1bgrq5v.js");
    await pluginListHandler(options);
  });
  const marketplaceCmd = pluginCmd.command("marketplace").description("Manage MiMo Code marketplaces").configureHelp(createSortedHelpConfig());
  marketplaceCmd.command("add <source>").description("Add a marketplace from a URL, path, or GitHub repo").addOption(coworkOption()).option("--sparse <paths...>", "Limit checkout to specific directories via git sparse-checkout (for monorepos). Example: --sparse .claude-plugin plugins").option("--scope <scope>", "Where to declare the marketplace: user (default), project, or local").action(async (source, options) => {
    const { marketplaceAddHandler } = await import("./chunk-b1bgrq5v.js");
    await marketplaceAddHandler(source, options);
  });
  marketplaceCmd.command("list").description("List all configured marketplaces").option("--json", "Output as JSON").addOption(coworkOption()).action(async (options) => {
    const { marketplaceListHandler } = await import("./chunk-b1bgrq5v.js");
    await marketplaceListHandler(options);
  });
  marketplaceCmd.command("remove <name>").alias("rm").description("Remove a configured marketplace").addOption(coworkOption()).action(async (name, options) => {
    const { marketplaceRemoveHandler } = await import("./chunk-b1bgrq5v.js");
    await marketplaceRemoveHandler(name, options);
  });
  marketplaceCmd.command("update [name]").description("Update marketplace(s) from their source - updates all if no name specified").addOption(coworkOption()).action(async (name, options) => {
    const { marketplaceUpdateHandler } = await import("./chunk-b1bgrq5v.js");
    await marketplaceUpdateHandler(name, options);
  });
  pluginCmd.command("install <plugin>").alias("i").description("Install a plugin from available marketplaces (use plugin@marketplace for specific marketplace)").option("-s, --scope <scope>", "Installation scope: user, project, or local", "user").addOption(coworkOption()).action(async (plugin, options) => {
    const { pluginInstallHandler } = await import("./chunk-b1bgrq5v.js");
    await pluginInstallHandler(plugin, options);
  });
  pluginCmd.command("uninstall <plugin>").alias("remove").alias("rm").description("Uninstall an installed plugin").option("-s, --scope <scope>", "Uninstall from scope: user, project, or local", "user").option("--keep-data", "Preserve the plugin's persistent data directory (~/.claude/plugins/data/{id}/)").addOption(coworkOption()).action(async (plugin, options) => {
    const { pluginUninstallHandler } = await import("./chunk-b1bgrq5v.js");
    await pluginUninstallHandler(plugin, options);
  });
  pluginCmd.command("enable <plugin>").description("Enable a disabled plugin").option("-s, --scope <scope>", `Installation scope: ${VALID_INSTALLABLE_SCOPES.join(", ")} (default: auto-detect)`).addOption(coworkOption()).action(async (plugin, options) => {
    const { pluginEnableHandler } = await import("./chunk-b1bgrq5v.js");
    await pluginEnableHandler(plugin, options);
  });
  pluginCmd.command("disable [plugin]").description("Disable an enabled plugin").option("-a, --all", "Disable all enabled plugins").option("-s, --scope <scope>", `Installation scope: ${VALID_INSTALLABLE_SCOPES.join(", ")} (default: auto-detect)`).addOption(coworkOption()).action(async (plugin, options) => {
    const { pluginDisableHandler } = await import("./chunk-b1bgrq5v.js");
    await pluginDisableHandler(plugin, options);
  });
  pluginCmd.command("update <plugin>").description("Update a plugin to the latest version (restart required to apply)").option("-s, --scope <scope>", `Installation scope: ${VALID_UPDATE_SCOPES.join(", ")} (default: user)`).addOption(coworkOption()).action(async (plugin, options) => {
    const { pluginUpdateHandler } = await import("./chunk-b1bgrq5v.js");
    await pluginUpdateHandler(plugin, options);
  });
  program2.command("setup-token").description("Set up a long-lived authentication token (requires MiMo subscription)").action(async () => {
    const [{ setupTokenHandler }, { createRoot }] = await Promise.all([
      import("./chunk-9vxeaspm.js"),
      import("./chunk-j976d6fp.js")
    ]);
    const root = await createRoot(getBaseRenderOptions(false));
    await setupTokenHandler(root);
  });
  program2.command("agents").description("List configured agents").option("--setting-sources <sources>", "Comma-separated list of setting sources to load (user, project, local).").action(async () => {
    const { agentsHandler } = await import("./chunk-dcxfy7ry.js");
    await agentsHandler();
    process.exit(0);
  });
  if (true) {
    if (getAutoModeEnabledStateIfCached() !== "disabled") {
      const autoModeCmd = program2.command("auto-mode").description("Inspect auto mode classifier configuration");
      autoModeCmd.command("defaults").description("Print the default auto mode environment, allow, and deny rules as JSON").action(async () => {
        const { autoModeDefaultsHandler } = await import("./chunk-9e000nth.js");
        autoModeDefaultsHandler();
        process.exit(0);
      });
      autoModeCmd.command("config").description("Print the effective auto mode config as JSON: your settings where set, defaults otherwise").action(async () => {
        const { autoModeConfigHandler } = await import("./chunk-9e000nth.js");
        autoModeConfigHandler();
        process.exit(0);
      });
      autoModeCmd.command("critique").description("Get AI feedback on your custom auto mode rules").option("--model <model>", "Override which model is used").action(async (options) => {
        const { autoModeCritiqueHandler } = await import("./chunk-9e000nth.js");
        await autoModeCritiqueHandler(options);
        process.exit();
      });
    }
  }
  {
    const autonomyCmd = program2.command("autonomy").description("Inspect and manage automatic autonomy runs and flows");
    autonomyCmd.command("status").description("Print autonomy run, flow, team, pipe, and remote-control status").option("--deep", "Include teams, pipes, daemon, and remote-control sections").action(async (options) => {
      const { autonomyStatusHandler } = await import("./chunk-671csw2a.js");
      await autonomyStatusHandler(options);
      process.exit(0);
    });
    autonomyCmd.command("runs [limit]").description("List recent autonomy runs").action(async (limit) => {
      const { autonomyRunsHandler } = await import("./chunk-671csw2a.js");
      await autonomyRunsHandler(limit);
      process.exit(0);
    });
    autonomyCmd.command("flows [limit]").description("List recent autonomy flows").action(async (limit) => {
      const { autonomyFlowsHandler } = await import("./chunk-671csw2a.js");
      await autonomyFlowsHandler(limit);
      process.exit(0);
    });
    const flowCmd = autonomyCmd.command("flow <flowId>").description("Inspect a single autonomy flow").action(async (flowId) => {
      const { autonomyFlowHandler } = await import("./chunk-671csw2a.js");
      await autonomyFlowHandler(flowId);
      process.exit(0);
    });
    flowCmd.command("cancel <flowId>").description("Cancel a queued, waiting, or running autonomy flow").action(async (flowId) => {
      const { autonomyFlowCancelHandler } = await import("./chunk-671csw2a.js");
      await autonomyFlowCancelHandler(flowId);
      process.exit(0);
    });
    flowCmd.command("resume <flowId>").description("Resume a waiting autonomy flow").action(async (flowId) => {
      const { autonomyFlowResumeHandler } = await import("./chunk-671csw2a.js");
      await autonomyFlowResumeHandler(flowId);
      process.exit(0);
    });
  }
  if (true) {
    program2.command("remote-control", { hidden: true }).alias("rc").description("Connect your local environment for remote-control sessions via claude.ai/code").action(async () => {
      const { bridgeMain } = await import("./chunk-rhnzmrej.js");
      await bridgeMain(process.argv.slice(3));
    });
  }
  if (true) {
    program2.command("assistant [sessionId]").description("Attach the REPL as a client to a running bridge session. Discovers sessions via API if no sessionId given.").action(() => {
      process.stderr.write(`Usage: claude assistant [sessionId]

Attach the REPL as a viewer client to a running bridge session.
Omit sessionId to discover and pick from available sessions.
`);
      process.exit(1);
    });
  }
  program2.command("doctor").description("Check the health of your MiMo Code auto-updater. Note: The workspace trust dialog is skipped and stdio servers from .mcp.json are spawned for health checks. Only use this command in directories you trust.").action(async () => {
    const [{ doctorHandler }, { createRoot }] = await Promise.all([
      import("./chunk-9vxeaspm.js"),
      import("./chunk-j976d6fp.js")
    ]);
    const root = await createRoot(getBaseRenderOptions(false));
    await doctorHandler(root);
  });
  if (process.env.USER_TYPE === "ant") {
    program2.command("up").description('[ANT-ONLY] Initialize or upgrade the local dev environment using the "# claude up" section of the nearest CLAUDE.md').action(async () => {
      const { up } = await import("./chunk-dxqb527q.js");
      await up();
    });
  }
  if (process.env.USER_TYPE === "ant") {
    program2.command("rollback [target]").description(`[ANT-ONLY] Roll back to a previous release

Examples:
  claude rollback                                    Go 1 version back from current
  claude rollback 3                                  Go 3 versions back from current
  claude rollback 2.0.73-dev.20251217.t190658        Roll back to a specific version`).option("-l, --list", "List recent published versions with ages").option("--dry-run", "Show what would be installed without installing").option("--safe", "Roll back to the server-pinned safe version (set by oncall during incidents)").action(async (target, options) => {
      const { rollback } = await import("./chunk-pb73zgyd.js");
      await rollback(target, options);
    });
  }
  program2.command("install [target]").description("Install MiMo Code native build. Use [target] to specify version (stable, latest, or specific version)").option("--force", "Force installation even if already installed").action(async (target, options) => {
    const { installHandler } = await import("./chunk-9vxeaspm.js");
    await installHandler(target, options);
  });
  program2.command("update").description("Update MiMo Code to the latest version").action(async () => {
    const { updateCCB } = await import("./chunk-qy98s468.js");
    await updateCCB();
  });
  if (process.env.USER_TYPE === "ant") {
    const validateLogId = (value) => {
      const maybeSessionId = validateUuid(value);
      if (maybeSessionId)
        return maybeSessionId;
      return Number(value);
    };
    program2.command("log").description("[ANT-ONLY] Manage conversation logs.").argument("[number|sessionId]", "A number (0, 1, 2, etc.) to display a specific log, or the sesssion ID (uuid) of a log", validateLogId).action(async (logId) => {
      const { logHandler } = await import("./chunk-bttntk5q.js");
      await logHandler(logId);
    });
    program2.command("error").description("[ANT-ONLY] View error logs. Optionally provide a number (0, -1, -2, etc.) to display a specific log.").argument("[number]", "A number (0, 1, 2, etc.) to display a specific log", parseInt).action(async (number) => {
      const { errorHandler } = await import("./chunk-bttntk5q.js");
      await errorHandler(number);
    });
    program2.command("export").description("[ANT-ONLY] Export a conversation to a text file.").usage("<source> <outputFile>").argument("<source>", "Session ID, log index (0, 1, 2...), or path to a .json/.jsonl log file").argument("<outputFile>", "Output file path for the exported text").addHelpText("after", `
Examples:
  $ claude export 0 conversation.txt                Export conversation at log index 0
  $ claude export <uuid> conversation.txt           Export conversation by session ID
  $ claude export input.json output.txt             Render JSON log file to text
  $ claude export <uuid>.jsonl output.txt           Render JSONL session file to text`).action(async (source, outputFile) => {
      const { exportHandler } = await import("./chunk-bttntk5q.js");
      await exportHandler(source, outputFile);
    });
    if (process.env.USER_TYPE === "ant") {
      const taskCmd = program2.command("task").description("[ANT-ONLY] Manage task list tasks");
      taskCmd.command("create <subject>").description("Create a new task").option("-d, --description <text>", "Task description").option("-l, --list <id>", 'Task list ID (defaults to "tasklist")').action(async (subject, opts) => {
        const { taskCreateHandler } = await import("./chunk-bttntk5q.js");
        await taskCreateHandler(subject, opts);
      });
      taskCmd.command("list").description("List all tasks").option("-l, --list <id>", 'Task list ID (defaults to "tasklist")').option("--pending", "Show only pending tasks").option("--json", "Output as JSON").action(async (opts) => {
        const { taskListHandler } = await import("./chunk-bttntk5q.js");
        await taskListHandler(opts);
      });
      taskCmd.command("get <id>").description("Get details of a task").option("-l, --list <id>", 'Task list ID (defaults to "tasklist")').action(async (id, opts) => {
        const { taskGetHandler } = await import("./chunk-bttntk5q.js");
        await taskGetHandler(id, opts);
      });
      taskCmd.command("update <id>").description("Update a task").option("-l, --list <id>", 'Task list ID (defaults to "tasklist")').option("-s, --status <status>", `Set status (${TASK_STATUSES.join(", ")})`).option("--subject <text>", "Update subject").option("-d, --description <text>", "Update description").option("--owner <agentId>", "Set owner").option("--clear-owner", "Clear owner").action(async (id, opts) => {
        const { taskUpdateHandler } = await import("./chunk-bttntk5q.js");
        await taskUpdateHandler(id, opts);
      });
      taskCmd.command("dir").description("Show the tasks directory path").option("-l, --list <id>", 'Task list ID (defaults to "tasklist")').action(async (opts) => {
        const { taskDirHandler } = await import("./chunk-bttntk5q.js");
        await taskDirHandler(opts);
      });
    }
    program2.command("completion <shell>", { hidden: true }).description("Generate shell completion script (bash, zsh, or fish)").option("--output <file>", "Write completion script directly to a file instead of stdout").action(async (shell, opts) => {
      const { completionHandler } = await import("./chunk-bttntk5q.js");
      await completionHandler(shell, opts, program2);
    });
  }
  profileCheckpoint("run_before_parse");
  await program2.parseAsync(process.argv);
  profileCheckpoint("run_after_parse");
  profileCheckpoint("main_after_run");
  profileReport();
  return program2;
}
async function logTenguInit({
  hasInitialPrompt,
  hasStdin,
  verbose,
  debug,
  debugToStderr,
  print,
  outputFormat,
  inputFormat,
  numAllowedTools,
  numDisallowedTools,
  mcpClientCount,
  worktreeEnabled,
  skipWebFetchPreflight,
  githubActionInputs,
  dangerouslySkipPermissionsPassed,
  permissionMode,
  modeIsBypass,
  allowDangerouslySkipPermissionsPassed,
  systemPromptFlag,
  appendSystemPromptFlag,
  thinkingConfig,
  assistantActivationPath
}) {
  try {
    logEvent("tengu_init", {
      entrypoint: "claude",
      hasInitialPrompt,
      hasStdin,
      verbose,
      debug,
      debugToStderr,
      print,
      outputFormat,
      inputFormat,
      numAllowedTools,
      numDisallowedTools,
      mcpClientCount,
      worktree: worktreeEnabled,
      skipWebFetchPreflight,
      ...githubActionInputs && {
        githubActionInputs
      },
      dangerouslySkipPermissionsPassed,
      permissionMode,
      modeIsBypass,
      inProtectedNamespace: isInProtectedNamespace(),
      allowDangerouslySkipPermissionsPassed,
      thinkingType: thinkingConfig.type,
      ...thinkingConfig.type === "enabled" && {
        thinkingBudgetTokens: thinkingConfig.budgetTokens
      },
      ...systemPromptFlag && {
        systemPromptFlag
      },
      ...appendSystemPromptFlag && {
        appendSystemPromptFlag
      },
      is_simple: isBareMode() || undefined,
      is_coordinator: undefined,
      ...assistantActivationPath && {
        assistantActivationPath
      },
      autoUpdatesChannel: getInitialSettings().autoUpdatesChannel ?? "latest",
      ...process.env.USER_TYPE === "ant" ? (() => {
        const cwd = getCwd();
        const gitRoot = findGitRoot(cwd);
        const rp = gitRoot ? relative(gitRoot, cwd) || "." : undefined;
        return rp ? {
          relativeProjectPath: rp
        } : {};
      })() : {}
    });
  } catch (error) {
    logError(error);
  }
}
function maybeActivateProactive(options) {
  if (options.proactive || isEnvTruthy(process.env.CLAUDE_CODE_PROACTIVE)) {
    const proactiveModule = (init_proactive(), __toCommonJS(exports_proactive));
    if (!proactiveModule.isProactiveActive()) {
      proactiveModule.activateProactive("command");
    }
  }
}
function maybeActivateBrief(options) {
  if (false)
    ;
  const briefFlag = options.brief;
  const briefEnv = isEnvTruthy(process.env.CLAUDE_CODE_BRIEF);
  if (!briefFlag && !briefEnv)
    return;
  const { isBriefEntitled } = (init_BriefTool(), __toCommonJS(exports_BriefTool));
  const entitled = isBriefEntitled();
  if (entitled) {
    setUserMsgOptIn(true);
  }
  logEvent("tengu_brief_mode_enabled", {
    enabled: entitled,
    gated: !entitled,
    source: briefEnv ? "env" : "flag"
  });
}
function resetCursor() {
  const terminal = process.stderr.isTTY ? process.stderr : process.stdout.isTTY ? process.stdout : undefined;
  terminal?.write(SHOW_CURSOR);
}
function extractTeammateOptions(options) {
  if (typeof options !== "object" || options === null) {
    return {};
  }
  const opts = options;
  const teammateMode = opts.teammateMode;
  return {
    agentId: typeof opts.agentId === "string" ? opts.agentId : undefined,
    agentName: typeof opts.agentName === "string" ? opts.agentName : undefined,
    teamName: typeof opts.teamName === "string" ? opts.teamName : undefined,
    agentColor: typeof opts.agentColor === "string" ? opts.agentColor : undefined,
    planModeRequired: typeof opts.planModeRequired === "boolean" ? opts.planModeRequired : undefined,
    parentSessionId: typeof opts.parentSessionId === "string" ? opts.parentSessionId : undefined,
    teammateMode: teammateMode === "auto" || teammateMode === "tmux" || teammateMode === "in-process" ? teammateMode : undefined,
    agentType: typeof opts.agentType === "string" ? opts.agentType : undefined
  };
}
export {
  startDeferredPrefetches,
  main
};
