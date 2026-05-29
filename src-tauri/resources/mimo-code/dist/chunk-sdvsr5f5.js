// @bun
import {
  PermissionDialog,
  init_PermissionDialog
} from "./chunk-ch3bn7nb.js";
import {
  DesktopHandoff,
  init_DesktopHandoff
} from "./chunk-7mvz4cx2.js";
import {
  init_OverageCreditUpsell,
  shouldShowOverageCreditUpsell
} from "./chunk-2stg2ast.js";
import {
  formatGrantAmount,
  getCachedOverageCreditGrant,
  init_overageCreditGrant
} from "./chunk-9yvvqqct.js";
import {
  OFFICIAL_MARKETPLACE_NAME,
  Select,
  countConcurrentSessions,
  detectRunningIDEsCached,
  fileHistoryEnabled,
  getCurrentSessionAgentColor,
  getEffortEnvOverride,
  getShortcutDisplay,
  getSortedIdeLockfiles,
  init_concurrentSessions,
  init_effort,
  init_fileHistory,
  init_ide,
  init_installedPluginsManager,
  init_marketplaceManager,
  init_officialMarketplace,
  init_prompt9 as init_prompt,
  init_sample,
  init_select,
  init_sessionStorage,
  init_shortcutFormat,
  isCursorInstalled,
  isCustomTitleEnabled,
  isKairosCronEnabled,
  isPluginInstalled,
  isSupportedTerminal,
  isSupportedVSCodeTerminal,
  isVSCodeInstalled,
  isWindsurfInstalled,
  loadKnownMarketplacesConfigSafe,
  modelSupportsEffort,
  sample_default
} from "./chunk-ktw919wt.js";
import {
  getTeamFilePath,
  init_teamHelpers,
  readTeamFile
} from "./chunk-ypmcesxe.js";
import {
  cacheKeys,
  init_fileStateCache
} from "./chunk-7fht54sw.js";
import {
  checkCachedPassesEligibility,
  formatCreditAmount,
  getCachedReferrerReward,
  init_referral
} from "./chunk-pfhyp451.js";
import {
  init_terminalSetup,
  shouldOfferTerminalSetup
} from "./chunk-25ctr1k2.js";
import {
  init_api,
  sendEventToRemoteSession
} from "./chunk-92f9twfz.js";
import {
  getAPIProvider,
  getCurrentProjectConfig,
  getDynamicConfig_CACHED_MAY_BE_STALE,
  getFeatureValue_CACHED_MAY_BE_STALE,
  getGitEmail,
  getGlobalConfig,
  getInitialSettings,
  getMainLoopModel,
  getSettingsForSource,
  getSettings_DEPRECATED,
  getUserSpecifiedModelSetting,
  init_auth,
  init_config1 as init_config,
  init_growthbook,
  init_model,
  init_providers,
  init_settings1 as init_settings,
  init_user,
  is1PApiCustomer,
  saveCurrentProjectConfig,
  saveGlobalConfig
} from "./chunk-1ghcng4e.js";
import {
  getWebSocketProxyAgent,
  getWebSocketProxyUrl,
  getWebSocketTLSOptions,
  init_mtls,
  init_proxy
} from "./chunk-t7f7dp4k.js";
import {
  getDynamicTeamContext,
  init_teammate
} from "./chunk-zwarn9h7.js";
import {
  getPlatform,
  init_platform
} from "./chunk-0rbpfkda.js";
import {
  env,
  init_env
} from "./chunk-nw7v8w65.js";
import {
  getOauthConfig,
  init_oauth
} from "./chunk-rh5a2rg9.js";
import {
  ThemedBox_default,
  ThemedText,
  color,
  init_source,
  init_src,
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
import {
  getIsGit,
  getWorktreeCount,
  gitExe,
  init_git
} from "./chunk-t6jhrn34.js";
import {
  execFileNoThrowWithCwd,
  init_execFileNoThrow
} from "./chunk-qcwbd71h.js";
import {
  getCwd,
  init_cwd
} from "./chunk-dxvkxgnf.js";
import {
  init_log,
  logError
} from "./chunk-w5ahy59y.js";
import {
  errorMessage,
  init_debug,
  init_errors,
  init_slowOperations,
  jsonParse,
  jsonStringify,
  logForDebugging
} from "./chunk-rpbc3b7k.js";
import {
  init_memoize,
  memoize_default
} from "./chunk-qx8z601m.js";
import {
  __require,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/utils/exampleCommands.ts
init_memoize();
init_sample();
init_cwd();
init_config();
init_env();
init_execFileNoThrow();
init_git();
init_log();
init_user();
var NON_CORE_PATTERNS = [
  /(?:^|\/)(?:package-lock\.json|yarn\.lock|bun\.lock|bun\.lockb|pnpm-lock\.yaml|Pipfile\.lock|poetry\.lock|Cargo\.lock|Gemfile\.lock|go\.sum|composer\.lock|uv\.lock)$/,
  /\.generated\./,
  /(?:^|\/)(?:dist|build|out|target|node_modules|\.next|__pycache__)\//,
  /\.(?:min\.js|min\.css|map|pyc|pyo)$/,
  /\.(?:json|ya?ml|toml|xml|ini|cfg|conf|env|lock|txt|md|mdx|rst|csv|log|svg)$/i,
  /(?:^|\/)\.?(?:eslintrc|prettierrc|babelrc|editorconfig|gitignore|gitattributes|dockerignore|npmrc)/,
  /(?:^|\/)(?:tsconfig|jsconfig|biome|vitest\.config|jest\.config|webpack\.config|vite\.config|rollup\.config)\.[a-z]+$/,
  /(?:^|\/)\.(?:github|vscode|idea|claude)\//,
  /(?:^|\/)(?:CHANGELOG|LICENSE|CONTRIBUTING|CODEOWNERS|README)(?:\.[a-z]+)?$/i
];
function isCoreFile(path) {
  return !NON_CORE_PATTERNS.some((p) => p.test(path));
}
function pickDiverseCoreFiles(sortedPaths, want) {
  const picked = [];
  const seenBasenames = new Set;
  const dirTally = new Map;
  for (let cap = 1;picked.length < want && cap <= want; cap++) {
    for (const p of sortedPaths) {
      if (picked.length >= want)
        break;
      if (!isCoreFile(p))
        continue;
      const lastSep = Math.max(p.lastIndexOf("/"), p.lastIndexOf("\\"));
      const base = lastSep >= 0 ? p.slice(lastSep + 1) : p;
      if (!base || seenBasenames.has(base))
        continue;
      const dir = lastSep >= 0 ? p.slice(0, lastSep) : ".";
      if ((dirTally.get(dir) ?? 0) >= cap)
        continue;
      picked.push(base);
      seenBasenames.add(base);
      dirTally.set(dir, (dirTally.get(dir) ?? 0) + 1);
    }
  }
  return picked.length >= want ? picked : [];
}
async function getFrequentlyModifiedFiles() {
  if (false)
    ;
  if (env.platform === "win32")
    return [];
  if (!await getIsGit())
    return [];
  try {
    const userEmail = await getGitEmail();
    const logArgs = [
      "log",
      "-n",
      "1000",
      "--pretty=format:",
      "--name-only",
      "--diff-filter=M"
    ];
    const counts = new Map;
    const tallyInto = (stdout) => {
      for (const line of stdout.split(`
`)) {
        const f = line.trim();
        if (f)
          counts.set(f, (counts.get(f) ?? 0) + 1);
      }
    };
    if (userEmail) {
      const { stdout } = await execFileNoThrowWithCwd("git", [...logArgs, `--author=${userEmail}`], { cwd: getCwd() });
      tallyInto(stdout);
    }
    if (counts.size < 10) {
      const { stdout } = await execFileNoThrowWithCwd(gitExe(), logArgs, {
        cwd: getCwd()
      });
      tallyInto(stdout);
    }
    const sorted = Array.from(counts.entries()).sort((a, b) => b[1] - a[1]).map(([p]) => p);
    return pickDiverseCoreFiles(sorted, 5);
  } catch (err) {
    logError(err);
    return [];
  }
}
var ONE_WEEK_IN_MS = 7 * 24 * 60 * 60 * 1000;
var getExampleCommandFromCache = memoize_default(() => {
  const projectConfig = getCurrentProjectConfig();
  const frequentFile = projectConfig.exampleFiles?.length ? sample_default(projectConfig.exampleFiles) : "<filepath>";
  const commands = [
    "fix lint errors",
    "fix typecheck errors",
    `how does ${frequentFile} work?`,
    `refactor ${frequentFile}`,
    "how do I log an error?",
    `edit ${frequentFile} to...`,
    `write a test for ${frequentFile}`,
    "create a util logging.py that..."
  ];
  return `Try "${sample_default(commands)}"`;
});
var refreshExampleCommands = memoize_default(async () => {
  const projectConfig = getCurrentProjectConfig();
  const now = Date.now();
  const lastGenerated = projectConfig.exampleFilesGeneratedAt ?? 0;
  if (now - lastGenerated > ONE_WEEK_IN_MS) {
    projectConfig.exampleFiles = [];
  }
  if (!projectConfig.exampleFiles?.length) {
    getFrequentlyModifiedFiles().then((files) => {
      if (files.length) {
        saveCurrentProjectConfig((current) => ({
          ...current,
          exampleFiles: files,
          exampleFilesGeneratedAt: Date.now()
        }));
      }
    });
  }
});

// src/remote/RemoteSessionManager.ts
init_debug();
init_log();
init_api();

// src/remote/SessionsWebSocket.ts
init_oauth();
init_debug();
init_errors();
init_log();
init_mtls();
init_proxy();
init_slowOperations();
import { randomUUID } from "crypto";
var RECONNECT_DELAY_MS = 2000;
var MAX_RECONNECT_ATTEMPTS = 5;
var PING_INTERVAL_MS = 30000;
var MAX_SESSION_NOT_FOUND_RETRIES = 3;
var PERMANENT_CLOSE_CODES = new Set([
  4003
]);
function isSessionsMessage(value) {
  if (typeof value !== "object" || value === null || !("type" in value)) {
    return false;
  }
  return typeof value.type === "string";
}

class SessionsWebSocket {
  sessionId;
  orgUuid;
  getAccessToken;
  callbacks;
  ws = null;
  state = "closed";
  reconnectAttempts = 0;
  sessionNotFoundRetries = 0;
  pingInterval = null;
  reconnectTimer = null;
  constructor(sessionId, orgUuid, getAccessToken, callbacks) {
    this.sessionId = sessionId;
    this.orgUuid = orgUuid;
    this.getAccessToken = getAccessToken;
    this.callbacks = callbacks;
  }
  async connect() {
    if (this.state === "connecting") {
      logForDebugging("[SessionsWebSocket] Already connecting");
      return;
    }
    this.state = "connecting";
    const baseUrl = getOauthConfig().BASE_API_URL.replace("http", "ws");
    const url = `${baseUrl}/v1/sessions/ws/${this.sessionId}/subscribe?organization_uuid=${this.orgUuid}`;
    logForDebugging(`[SessionsWebSocket] Connecting to ${url}`);
    const accessToken = this.getAccessToken();
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "anthropic-version": "2023-06-01"
    };
    if (typeof Bun !== "undefined") {
      const ws = new globalThis.WebSocket(url, {
        headers,
        proxy: getWebSocketProxyUrl(url),
        tls: getWebSocketTLSOptions() || undefined
      });
      this.ws = ws;
      ws.addEventListener("open", () => {
        logForDebugging("[SessionsWebSocket] Connection opened, authenticated via headers");
        this.state = "connected";
        this.reconnectAttempts = 0;
        this.sessionNotFoundRetries = 0;
        this.startPingInterval();
        this.callbacks.onConnected?.();
      });
      ws.addEventListener("message", (event) => {
        const data = typeof event.data === "string" ? event.data : String(event.data);
        this.handleMessage(data);
      });
      ws.addEventListener("error", () => {
        const err = new Error("[SessionsWebSocket] WebSocket error");
        logError(err);
        this.callbacks.onError?.(err);
      });
      ws.addEventListener("close", (event) => {
        logForDebugging(`[SessionsWebSocket] Closed: code=${event.code} reason=${event.reason}`);
        this.handleClose(event.code);
      });
      ws.addEventListener("pong", () => {
        logForDebugging("[SessionsWebSocket] Pong received");
      });
    } else {
      const { default: WS } = await import("ws");
      const ws = new WS(url, {
        headers,
        agent: getWebSocketProxyAgent(url),
        ...getWebSocketTLSOptions()
      });
      this.ws = ws;
      ws.on("open", () => {
        logForDebugging("[SessionsWebSocket] Connection opened, authenticated via headers");
        this.state = "connected";
        this.reconnectAttempts = 0;
        this.sessionNotFoundRetries = 0;
        this.startPingInterval();
        this.callbacks.onConnected?.();
      });
      ws.on("message", (data) => {
        this.handleMessage(data.toString());
      });
      ws.on("error", (err) => {
        logError(new Error(`[SessionsWebSocket] Error: ${err.message}`));
        this.callbacks.onError?.(err);
      });
      ws.on("close", (code, reason) => {
        logForDebugging(`[SessionsWebSocket] Closed: code=${code} reason=${reason.toString()}`);
        this.handleClose(code);
      });
      ws.on("pong", () => {
        logForDebugging("[SessionsWebSocket] Pong received");
      });
    }
  }
  handleMessage(data) {
    try {
      const message = jsonParse(data);
      if (isSessionsMessage(message)) {
        this.callbacks.onMessage(message);
      } else {
        logForDebugging(`[SessionsWebSocket] Ignoring message type: ${typeof message === "object" && message !== null && "type" in message ? String(message.type) : "unknown"}`);
      }
    } catch (error) {
      logError(new Error(`[SessionsWebSocket] Failed to parse message: ${errorMessage(error)}`));
    }
  }
  handleClose(closeCode) {
    this.stopPingInterval();
    if (this.state === "closed") {
      return;
    }
    this.ws = null;
    const previousState = this.state;
    this.state = "closed";
    if (PERMANENT_CLOSE_CODES.has(closeCode)) {
      logForDebugging(`[SessionsWebSocket] Permanent close code ${closeCode}, not reconnecting`);
      this.callbacks.onClose?.();
      return;
    }
    if (closeCode === 4001) {
      this.sessionNotFoundRetries++;
      if (this.sessionNotFoundRetries > MAX_SESSION_NOT_FOUND_RETRIES) {
        logForDebugging(`[SessionsWebSocket] 4001 retry budget exhausted (${MAX_SESSION_NOT_FOUND_RETRIES}), not reconnecting`);
        this.callbacks.onClose?.();
        return;
      }
      this.scheduleReconnect(RECONNECT_DELAY_MS * this.sessionNotFoundRetries, `4001 attempt ${this.sessionNotFoundRetries}/${MAX_SESSION_NOT_FOUND_RETRIES}`);
      return;
    }
    if (previousState === "connected" && this.reconnectAttempts < MAX_RECONNECT_ATTEMPTS) {
      this.reconnectAttempts++;
      this.scheduleReconnect(RECONNECT_DELAY_MS, `attempt ${this.reconnectAttempts}/${MAX_RECONNECT_ATTEMPTS}`);
    } else {
      logForDebugging("[SessionsWebSocket] Not reconnecting");
      this.callbacks.onClose?.();
    }
  }
  scheduleReconnect(delay, label) {
    this.callbacks.onReconnecting?.();
    logForDebugging(`[SessionsWebSocket] Scheduling reconnect (${label}) in ${delay}ms`);
    this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null;
      this.connect();
    }, delay);
  }
  startPingInterval() {
    this.stopPingInterval();
    this.pingInterval = setInterval(() => {
      if (this.ws && this.state === "connected") {
        try {
          this.ws.ping?.();
        } catch {}
      }
    }, PING_INTERVAL_MS);
  }
  stopPingInterval() {
    if (this.pingInterval) {
      clearInterval(this.pingInterval);
      this.pingInterval = null;
    }
  }
  sendControlResponse(response) {
    if (!this.ws || this.state !== "connected") {
      logError(new Error("[SessionsWebSocket] Cannot send: not connected"));
      return;
    }
    logForDebugging("[SessionsWebSocket] Sending control response");
    this.ws.send(jsonStringify(response));
  }
  sendControlRequest(request) {
    if (!this.ws || this.state !== "connected") {
      logError(new Error("[SessionsWebSocket] Cannot send: not connected"));
      return;
    }
    const controlRequest = {
      type: "control_request",
      request_id: randomUUID(),
      request
    };
    logForDebugging(`[SessionsWebSocket] Sending control request: ${request.subtype}`);
    this.ws.send(jsonStringify(controlRequest));
  }
  isConnected() {
    return this.state === "connected";
  }
  close() {
    logForDebugging("[SessionsWebSocket] Closing connection");
    this.state = "closed";
    this.stopPingInterval();
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }
  reconnect() {
    logForDebugging("[SessionsWebSocket] Force reconnecting");
    this.reconnectAttempts = 0;
    this.sessionNotFoundRetries = 0;
    this.close();
    this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null;
      this.connect();
    }, 500);
  }
}

// src/remote/RemoteSessionManager.ts
function isSDKMessage(message) {
  return message.type !== "control_request" && message.type !== "control_response" && message.type !== "control_cancel_request";
}

class RemoteSessionManager {
  config;
  callbacks;
  websocket = null;
  pendingPermissionRequests = new Map;
  constructor(config, callbacks) {
    this.config = config;
    this.callbacks = callbacks;
  }
  connect() {
    logForDebugging(`[RemoteSessionManager] Connecting to session ${this.config.sessionId}`);
    const wsCallbacks = {
      onMessage: (message) => this.handleMessage(message),
      onConnected: () => {
        logForDebugging("[RemoteSessionManager] Connected");
        this.callbacks.onConnected?.();
      },
      onClose: () => {
        logForDebugging("[RemoteSessionManager] Disconnected");
        this.callbacks.onDisconnected?.();
      },
      onReconnecting: () => {
        logForDebugging("[RemoteSessionManager] Reconnecting");
        this.callbacks.onReconnecting?.();
      },
      onError: (error) => {
        logError(error);
        this.callbacks.onError?.(error);
      }
    };
    this.websocket = new SessionsWebSocket(this.config.sessionId, this.config.orgUuid, this.config.getAccessToken, wsCallbacks);
    this.websocket.connect();
  }
  handleMessage(message) {
    if (message.type === "control_request") {
      this.handleControlRequest(message);
      return;
    }
    if (message.type === "control_cancel_request") {
      const { request_id } = message;
      const pendingRequest = this.pendingPermissionRequests.get(request_id);
      logForDebugging(`[RemoteSessionManager] Permission request cancelled: ${request_id}`);
      this.pendingPermissionRequests.delete(request_id);
      this.callbacks.onPermissionCancelled?.(request_id, pendingRequest?.tool_use_id);
      return;
    }
    if (message.type === "control_response") {
      logForDebugging("[RemoteSessionManager] Received control response");
      return;
    }
    if (isSDKMessage(message)) {
      this.callbacks.onMessage(message);
    }
  }
  handleControlRequest(request) {
    const requestId = request.request_id;
    const inner = request.request;
    if (inner.subtype === "can_use_tool") {
      logForDebugging(`[RemoteSessionManager] Permission request for tool: ${inner.tool_name}`);
      this.pendingPermissionRequests.set(requestId, inner);
      this.callbacks.onPermissionRequest(inner, requestId);
    } else {
      logForDebugging(`[RemoteSessionManager] Unsupported control request subtype: ${inner.subtype}`);
      const response = {
        type: "control_response",
        response: {
          subtype: "error",
          request_id: requestId,
          error: `Unsupported control request subtype: ${inner.subtype}`
        }
      };
      this.websocket?.sendControlResponse(response);
    }
  }
  async sendMessage(content, opts) {
    logForDebugging(`[RemoteSessionManager] Sending message to session ${this.config.sessionId}`);
    const success = await sendEventToRemoteSession(this.config.sessionId, content, opts);
    if (!success) {
      logError(new Error(`[RemoteSessionManager] Failed to send message to session ${this.config.sessionId}`));
    }
    return success;
  }
  respondToPermissionRequest(requestId, result) {
    const pendingRequest = this.pendingPermissionRequests.get(requestId);
    if (!pendingRequest) {
      logError(new Error(`[RemoteSessionManager] No pending permission request with ID: ${requestId}`));
      return;
    }
    this.pendingPermissionRequests.delete(requestId);
    const response = {
      type: "control_response",
      response: {
        subtype: "success",
        request_id: requestId,
        response: {
          behavior: result.behavior,
          ...result.behavior === "allow" ? { updatedInput: result.updatedInput } : { message: result.message }
        }
      }
    };
    logForDebugging(`[RemoteSessionManager] Sending permission response: ${result.behavior}`);
    this.websocket?.sendControlResponse(response);
  }
  isConnected() {
    return this.websocket?.isConnected() ?? false;
  }
  cancelSession() {
    logForDebugging("[RemoteSessionManager] Sending interrupt signal");
    this.websocket?.sendControlRequest({ subtype: "interrupt" });
  }
  getSessionId() {
    return this.config.sessionId;
  }
  disconnect() {
    logForDebugging("[RemoteSessionManager] Disconnecting");
    this.websocket?.close();
    this.websocket = null;
    this.pendingPermissionRequests.clear();
  }
  reconnect() {
    logForDebugging("[RemoteSessionManager] Reconnecting WebSocket");
    this.websocket?.reconnect();
  }
}
function createRemoteSessionConfig(sessionId, getAccessToken, orgUuid, hasInitialPrompt = false, viewerOnly = false) {
  return {
    sessionId,
    getAccessToken,
    orgUuid,
    hasInitialPrompt,
    viewerOnly
  };
}

// src/utils/swarm/reconnection.ts
init_debug();
init_log();
init_teammate();
init_teamHelpers();
function computeInitialTeamContext() {
  const context = getDynamicTeamContext();
  if (!context?.teamName || !context?.agentName) {
    logForDebugging("[Reconnection] computeInitialTeamContext: No teammate context set (not a teammate)");
    return;
  }
  const { teamName, agentId, agentName } = context;
  const teamFile = readTeamFile(teamName);
  if (!teamFile) {
    logError(new Error(`[computeInitialTeamContext] Could not read team file for ${teamName}`));
    return;
  }
  const teamFilePath = getTeamFilePath(teamName);
  const isLeader = !agentId;
  logForDebugging(`[Reconnection] Computed initial team context for ${isLeader ? "leader" : `teammate ${agentName}`} in team ${teamName}`);
  return {
    teamName,
    teamFilePath,
    leadAgentId: teamFile.leadAgentId,
    selfAgentId: agentId,
    selfAgentName: agentName,
    isLeader,
    teammates: {}
  };
}
function initializeTeammateContextFromSession(setAppState, teamName, agentName) {
  const teamFile = readTeamFile(teamName);
  if (!teamFile) {
    logError(new Error(`[initializeTeammateContextFromSession] Could not read team file for ${teamName} (agent: ${agentName})`));
    return;
  }
  const member = teamFile.members.find((m) => m.name === agentName);
  if (!member) {
    logForDebugging(`[Reconnection] Member ${agentName} not found in team ${teamName} - may have been removed`);
  }
  const agentId = member?.agentId;
  const teamFilePath = getTeamFilePath(teamName);
  setAppState((prev) => ({
    ...prev,
    teamContext: {
      teamName,
      teamFilePath,
      leadAgentId: teamFile.leadAgentId,
      selfAgentId: agentId,
      selfAgentName: agentName,
      isLeader: false,
      teammates: {}
    }
  }));
  logForDebugging(`[Reconnection] Initialized agent context from session for ${agentName} in team ${teamName}`);
}

// src/components/DesktopUpsell/DesktopUpsellStartup.tsx
init_src();
init_growthbook();
init_analytics();
init_config();
init_select();
init_DesktopHandoff();
init_PermissionDialog();
var import_react = __toESM(require_react(), 1);
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var DESKTOP_UPSELL_DEFAULT = {
  enable_shortcut_tip: false,
  enable_startup_dialog: false
};
function getDesktopUpsellConfig() {
  return getDynamicConfig_CACHED_MAY_BE_STALE("tengu_desktop_upsell", DESKTOP_UPSELL_DEFAULT);
}
function isSupportedPlatform() {
  return process.platform === "darwin" || process.platform === "win32" && process.arch === "x64";
}
function shouldShowDesktopUpsellStartup() {
  if (!isSupportedPlatform())
    return false;
  if (!getDesktopUpsellConfig().enable_startup_dialog)
    return false;
  const config = getGlobalConfig();
  if (config.desktopUpsellDismissed)
    return false;
  if ((config.desktopUpsellSeenCount ?? 0) >= 3)
    return false;
  return true;
}
function DesktopUpsellStartup({ onDone }) {
  const [showHandoff, setShowHandoff] = import_react.useState(false);
  import_react.useEffect(() => {
    const newCount = (getGlobalConfig().desktopUpsellSeenCount ?? 0) + 1;
    saveGlobalConfig((prev) => {
      if ((prev.desktopUpsellSeenCount ?? 0) >= newCount)
        return prev;
      return { ...prev, desktopUpsellSeenCount: newCount };
    });
    logEvent("tengu_desktop_upsell_shown", { seen_count: newCount });
  }, []);
  if (showHandoff) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(DesktopHandoff, {
      onDone: () => onDone()
    }, undefined, false, undefined, this);
  }
  function handleSelect(value) {
    switch (value) {
      case "try":
        setShowHandoff(true);
        return;
      case "never":
        saveGlobalConfig((prev) => {
          if (prev.desktopUpsellDismissed)
            return prev;
          return { ...prev, desktopUpsellDismissed: true };
        });
        onDone();
        return;
      case "not-now":
        onDone();
        return;
    }
  }
  const options = [
    { label: "Open in MiMo Code Desktop", value: "try" },
    { label: "Not now", value: "not-now" },
    { label: "Don't ask again", value: "never" }
  ];
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(PermissionDialog, {
    title: "Try MiMo Code Desktop",
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      paddingX: 2,
      paddingY: 1,
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
          marginBottom: 1,
          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: "Same MiMo Code with visual diffs, live app preview, parallel sessions, and more."
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Select, {
          options,
          onChange: handleSelect,
          onCancel: () => handleSelect("not-now")
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}

// src/services/tips/tipRegistry.ts
init_source();
init_debug();
init_fileHistory();
init_settings();
init_terminalSetup();
init_src();
init_OverageCreditUpsell();
init_shortcutFormat();
init_prompt();
init_auth();
init_concurrentSessions();
init_config();
init_effort();
init_env();
init_fileStateCache();
init_git();
init_ide();
init_model();
init_platform();
init_installedPluginsManager();
init_marketplaceManager();
init_officialMarketplace();
init_sessionStorage();
init_growthbook();
init_overageCreditGrant();
init_referral();

// src/services/tips/tipHistory.ts
init_config();
function recordTipShown(tipId) {
  const numStartups = getGlobalConfig().numStartups;
  saveGlobalConfig((c) => {
    const history = c.tipsHistory ?? {};
    if (history[tipId] === numStartups)
      return c;
    return { ...c, tipsHistory: { ...history, [tipId]: numStartups } };
  });
}
function getSessionsSinceLastShown(tipId) {
  const config = getGlobalConfig();
  const lastShown = config.tipsHistory?.[tipId];
  if (!lastShown)
    return Infinity;
  return config.numStartups - lastShown;
}

// src/services/tips/tipRegistry.ts
var _isOfficialMarketplaceInstalledCache;
async function isOfficialMarketplaceInstalled() {
  if (_isOfficialMarketplaceInstalledCache !== undefined) {
    return _isOfficialMarketplaceInstalledCache;
  }
  const config = await loadKnownMarketplacesConfigSafe();
  _isOfficialMarketplaceInstalledCache = OFFICIAL_MARKETPLACE_NAME in config;
  return _isOfficialMarketplaceInstalledCache;
}
async function isMarketplacePluginRelevant(pluginName, context, signals) {
  if (!await isOfficialMarketplaceInstalled()) {
    return false;
  }
  if (isPluginInstalled(`${pluginName}@${OFFICIAL_MARKETPLACE_NAME}`)) {
    return false;
  }
  const { bashTools } = context ?? {};
  if (signals.cli && bashTools?.size) {
    if (signals.cli.some((cmd) => bashTools.has(cmd))) {
      return true;
    }
  }
  if (signals.filePath && context?.readFileState) {
    const readFiles = cacheKeys(context.readFileState);
    if (readFiles.some((fp) => signals.filePath.test(fp))) {
      return true;
    }
  }
  return false;
}
var externalTips = [
  {
    id: "new-user-warmup",
    content: async () => `Start with small features or bug fixes, tell MiMo to propose a plan, and verify its suggested edits`,
    cooldownSessions: 3,
    async isRelevant() {
      const config = getGlobalConfig();
      return config.numStartups < 10;
    }
  },
  {
    id: "plan-mode-for-complex-tasks",
    content: async () => `Use Plan Mode to prepare for a complex request before making changes. Press ${getShortcutDisplay("chat:cycleMode", "Chat", "shift+tab")} twice to enable.`,
    cooldownSessions: 5,
    isRelevant: async () => {
      const config = getGlobalConfig();
      const daysSinceLastUse = config.lastPlanModeUse ? (Date.now() - config.lastPlanModeUse) / (1000 * 60 * 60 * 24) : Infinity;
      return daysSinceLastUse > 7;
    }
  },
  {
    id: "default-permission-mode-config",
    content: async () => `Use /config to change your default permission mode (including Plan Mode)`,
    cooldownSessions: 10,
    isRelevant: async () => {
      try {
        const config = getGlobalConfig();
        const settings = getSettings_DEPRECATED();
        const hasUsedPlanMode = Boolean(config.lastPlanModeUse);
        const hasDefaultMode = Boolean(settings?.permissions?.defaultMode);
        return hasUsedPlanMode && !hasDefaultMode;
      } catch (error) {
        logForDebugging(`Failed to check default-permission-mode-config tip relevance: ${error}`, { level: "warn" });
        return false;
      }
    }
  },
  {
    id: "git-worktrees",
    content: async () => "Use git worktrees to run multiple MiMo sessions in parallel.",
    cooldownSessions: 10,
    isRelevant: async () => {
      try {
        const config = getGlobalConfig();
        const worktreeCount = await getWorktreeCount();
        return worktreeCount <= 1 && config.numStartups > 50;
      } catch (_) {
        return false;
      }
    }
  },
  {
    id: "color-when-multi-clauding",
    content: async () => "Running multiple MiMo sessions? Use /color and /rename to tell them apart at a glance.",
    cooldownSessions: 10,
    isRelevant: async () => {
      if (getCurrentSessionAgentColor())
        return false;
      const count = await countConcurrentSessions();
      return count >= 2;
    }
  },
  {
    id: "terminal-setup",
    content: async () => env.terminal === "Apple_Terminal" ? "Run /terminal-setup to enable convenient terminal integration like Option + Enter for new line and more" : "Run /terminal-setup to enable convenient terminal integration like Shift + Enter for new line and more",
    cooldownSessions: 10,
    async isRelevant() {
      const config = getGlobalConfig();
      if (env.terminal === "Apple_Terminal") {
        return !config.optionAsMetaKeyInstalled;
      }
      return !config.shiftEnterKeyBindingInstalled;
    }
  },
  {
    id: "shift-enter",
    content: async () => env.terminal === "Apple_Terminal" ? "Press Option+Enter to send a multi-line message" : "Press Shift+Enter to send a multi-line message",
    cooldownSessions: 10,
    async isRelevant() {
      const config = getGlobalConfig();
      return Boolean((env.terminal === "Apple_Terminal" ? config.optionAsMetaKeyInstalled : config.shiftEnterKeyBindingInstalled) && config.numStartups > 3);
    }
  },
  {
    id: "shift-enter-setup",
    content: async () => env.terminal === "Apple_Terminal" ? "Run /terminal-setup to enable Option+Enter for new lines" : "Run /terminal-setup to enable Shift+Enter for new lines",
    cooldownSessions: 10,
    async isRelevant() {
      if (!shouldOfferTerminalSetup()) {
        return false;
      }
      const config = getGlobalConfig();
      return !(env.terminal === "Apple_Terminal" ? config.optionAsMetaKeyInstalled : config.shiftEnterKeyBindingInstalled);
    }
  },
  {
    id: "memory-command",
    content: async () => "Use /memory to view and manage MiMo memory",
    cooldownSessions: 15,
    async isRelevant() {
      const config = getGlobalConfig();
      return config.memoryUsageCount <= 0;
    }
  },
  {
    id: "theme-command",
    content: async () => "Use /theme to change the color theme",
    cooldownSessions: 20,
    isRelevant: async () => true
  },
  {
    id: "colorterm-truecolor",
    content: async () => "Try setting environment variable COLORTERM=truecolor for richer colors",
    cooldownSessions: 30,
    isRelevant: async () => !process.env.COLORTERM && source_default.level < 3
  },
  {
    id: "powershell-tool-env",
    content: async () => "Set CLAUDE_CODE_USE_POWERSHELL_TOOL=1 to enable the PowerShell tool (preview)",
    cooldownSessions: 10,
    isRelevant: async () => getPlatform() === "windows" && process.env.CLAUDE_CODE_USE_POWERSHELL_TOOL === undefined
  },
  {
    id: "status-line",
    content: async () => "Use /statusline to set up a custom status line that will display beneath the input box",
    cooldownSessions: 25,
    isRelevant: async () => getSettings_DEPRECATED().statusLine === undefined
  },
  {
    id: "prompt-queue",
    content: async () => "Hit Enter to queue up additional messages while MiMo is working.",
    cooldownSessions: 5,
    async isRelevant() {
      const config = getGlobalConfig();
      return config.promptQueueUseCount <= 3;
    }
  },
  {
    id: "enter-to-steer-in-relatime",
    content: async () => "Send messages to MiMo while it works to steer MiMo in real-time",
    cooldownSessions: 20,
    isRelevant: async () => true
  },
  {
    id: "todo-list",
    content: async () => "Ask MiMo to create a todo list when working on complex tasks to track progress and remain on track",
    cooldownSessions: 20,
    isRelevant: async () => true
  },
  {
    id: "vscode-command-install",
    content: async () => `Open the Command Palette (Cmd+Shift+P) and run "Shell Command: Install '${env.terminal === "vscode" ? "code" : env.terminal}' command in PATH" to enable IDE integration`,
    cooldownSessions: 0,
    async isRelevant() {
      if (!isSupportedVSCodeTerminal()) {
        return false;
      }
      if (getPlatform() !== "macos") {
        return false;
      }
      switch (env.terminal) {
        case "vscode":
          return !await isVSCodeInstalled();
        case "cursor":
          return !await isCursorInstalled();
        case "windsurf":
          return !await isWindsurfInstalled();
        default:
          return false;
      }
    }
  },
  {
    id: "ide-upsell-external-terminal",
    content: async () => "Connect MiMo to your IDE \xB7 /ide",
    cooldownSessions: 4,
    async isRelevant() {
      if (isSupportedTerminal()) {
        return false;
      }
      const lockfiles = await getSortedIdeLockfiles();
      if (lockfiles.length !== 0) {
        return false;
      }
      const runningIDEs = await detectRunningIDEsCached();
      return runningIDEs.length > 0;
    }
  },
  {
    id: "install-github-app",
    content: async () => "Run /install-github-app to tag @claude right from your Github issues and PRs",
    cooldownSessions: 10,
    isRelevant: async () => !getGlobalConfig().githubActionSetupCount
  },
  {
    id: "install-slack-app",
    content: async () => "Run /install-slack-app to use MiMo in Slack",
    cooldownSessions: 10,
    isRelevant: async () => !getGlobalConfig().slackAppInstallCount
  },
  {
    id: "permissions",
    content: async () => "Use /permissions to pre-approve and pre-deny bash, edit, and MCP tools",
    cooldownSessions: 10,
    async isRelevant() {
      const config = getGlobalConfig();
      return config.numStartups > 10;
    }
  },
  {
    id: "drag-and-drop-images",
    content: async () => "Did you know you can drag and drop image files into your terminal?",
    cooldownSessions: 10,
    isRelevant: async () => !env.isSSH()
  },
  {
    id: "paste-images-mac",
    content: async () => "Paste images into MiMo Code using control+v (not cmd+v!)",
    cooldownSessions: 10,
    isRelevant: async () => getPlatform() === "macos"
  },
  {
    id: "double-esc",
    content: async () => "Double-tap esc to rewind the conversation to a previous point in time",
    cooldownSessions: 10,
    isRelevant: async () => !fileHistoryEnabled()
  },
  {
    id: "double-esc-code-restore",
    content: async () => "Double-tap esc to rewind the code and/or conversation to a previous point in time",
    cooldownSessions: 10,
    isRelevant: async () => fileHistoryEnabled()
  },
  {
    id: "continue",
    content: async () => "Run claude --continue or claude --resume to resume a conversation",
    cooldownSessions: 10,
    isRelevant: async () => true
  },
  {
    id: "rename-conversation",
    content: async () => "Name your conversations with /rename to find them easily in /resume later",
    cooldownSessions: 15,
    isRelevant: async () => isCustomTitleEnabled() && getGlobalConfig().numStartups > 10
  },
  {
    id: "custom-commands",
    content: async () => "Create skills by adding .md files to .claude/skills/ in your project or ~/.claude/skills/ for skills that work in any project",
    cooldownSessions: 15,
    async isRelevant() {
      const config = getGlobalConfig();
      return config.numStartups > 10;
    }
  },
  {
    id: "shift-tab",
    content: async () => `Hit ${getShortcutDisplay("chat:cycleMode", "Chat", "shift+tab")} to cycle between default, accept edits, plan, auto, and bypass modes`,
    cooldownSessions: 10,
    isRelevant: async () => true
  },
  {
    id: "image-paste",
    content: async () => `Use ${getShortcutDisplay("chat:imagePaste", "Chat", "ctrl+v")} to paste images from your clipboard`,
    cooldownSessions: 20,
    isRelevant: async () => true
  },
  {
    id: "custom-agents",
    content: async () => "Use /agents to optimize specific tasks. Eg. Software Architect, Code Writer, Code Reviewer",
    cooldownSessions: 15,
    async isRelevant() {
      const config = getGlobalConfig();
      return config.numStartups > 5;
    }
  },
  {
    id: "agent-flag",
    content: async () => "Use --agent <agent_name> to directly start a conversation with a subagent",
    cooldownSessions: 15,
    async isRelevant() {
      const config = getGlobalConfig();
      return config.numStartups > 5;
    }
  },
  {
    id: "desktop-app",
    content: async () => "Run MiMo Code locally or remotely using the MiMo desktop app",
    cooldownSessions: 15,
    isRelevant: async () => getPlatform() !== "linux"
  },
  {
    id: "desktop-shortcut",
    content: async (ctx) => {
      const blue = color("suggestion", ctx.theme);
      return `Continue your session in MiMo Code Desktop with ${blue("/desktop")}`;
    },
    cooldownSessions: 15,
    isRelevant: async () => {
      if (!getDesktopUpsellConfig().enable_shortcut_tip)
        return false;
      return process.platform === "darwin" || process.platform === "win32" && process.arch === "x64";
    }
  },
  {
    id: "web-app",
    content: async () => "Run tasks in the cloud while you keep coding locally \xB7 clau.de/web",
    cooldownSessions: 15,
    isRelevant: async () => true
  },
  {
    id: "mobile-app",
    content: async () => "/mobile to use MiMo Code from the MiMo app on your phone",
    cooldownSessions: 15,
    isRelevant: async () => true
  },
  {
    id: "opusplan-mode-reminder",
    content: async () => `Your default model setting is Opus Plan Mode. Press ${getShortcutDisplay("chat:cycleMode", "Chat", "shift+tab")} twice to activate Plan Mode and plan with Claude Opus.`,
    cooldownSessions: 2,
    async isRelevant() {
      if (process.env.USER_TYPE === "ant")
        return false;
      const config = getGlobalConfig();
      const modelSetting = getUserSpecifiedModelSetting();
      const hasOpusPlanMode = modelSetting === "opusplan";
      const daysSinceLastUse = config.lastPlanModeUse ? (Date.now() - config.lastPlanModeUse) / (1000 * 60 * 60 * 24) : Infinity;
      return hasOpusPlanMode && daysSinceLastUse > 3;
    }
  },
  {
    id: "frontend-design-plugin",
    content: async (ctx) => {
      const blue = color("suggestion", ctx.theme);
      return `Working with HTML/CSS? Install the frontend-design plugin:
${blue(`/plugin install frontend-design@${OFFICIAL_MARKETPLACE_NAME}`)}`;
    },
    cooldownSessions: 3,
    isRelevant: async (context) => isMarketplacePluginRelevant("frontend-design", context, {
      filePath: /\.(html|css|htm)$/i
    })
  },
  {
    id: "vercel-plugin",
    content: async (ctx) => {
      const blue = color("suggestion", ctx.theme);
      return `Working with Vercel? Install the vercel plugin:
${blue(`/plugin install vercel@${OFFICIAL_MARKETPLACE_NAME}`)}`;
    },
    cooldownSessions: 3,
    isRelevant: async (context) => isMarketplacePluginRelevant("vercel", context, {
      filePath: /(?:^|[/\\])vercel\.json$/i,
      cli: ["vercel"]
    })
  },
  {
    id: "effort-high-nudge",
    content: async (ctx) => {
      const blue = color("suggestion", ctx.theme);
      const cmd = blue("/effort high");
      const variant = getFeatureValue_CACHED_MAY_BE_STALE("tengu_tide_elm", "off");
      return variant === "copy_b" ? `Use ${cmd} for better one-shot answers. Claude thinks it through first.` : `Working on something tricky? ${cmd} gives better first answers`;
    },
    cooldownSessions: 3,
    isRelevant: async () => {
      if (!is1PApiCustomer())
        return false;
      if (!modelSupportsEffort(getMainLoopModel()))
        return false;
      if (getSettingsForSource("policySettings")?.effortLevel !== undefined) {
        return false;
      }
      if (getEffortEnvOverride() !== undefined)
        return false;
      const persisted = getInitialSettings().effortLevel;
      if (persisted === "high" || persisted === "max")
        return false;
      return getFeatureValue_CACHED_MAY_BE_STALE("tengu_tide_elm", "off") !== "off";
    }
  },
  {
    id: "subagent-fanout-nudge",
    content: async (ctx) => {
      const blue = color("suggestion", ctx.theme);
      const variant = getFeatureValue_CACHED_MAY_BE_STALE("tengu_tern_alloy", "off");
      return variant === "copy_b" ? `For big tasks, tell MiMo to ${blue("use subagents")}. They work in parallel and keep your main thread clean.` : `Say ${blue('"fan out subagents"')} and Claude sends a team. Each one digs deep so nothing gets missed.`;
    },
    cooldownSessions: 3,
    isRelevant: async () => {
      if (!is1PApiCustomer())
        return false;
      return getFeatureValue_CACHED_MAY_BE_STALE("tengu_tern_alloy", "off") !== "off";
    }
  },
  {
    id: "loop-command-nudge",
    content: async (ctx) => {
      const blue = color("suggestion", ctx.theme);
      const variant = getFeatureValue_CACHED_MAY_BE_STALE("tengu_timber_lark", "off");
      return variant === "copy_b" ? `Use ${blue("/loop 5m check the deploy")} to run any prompt on a schedule. Set it and forget it.` : `${blue("/loop")} runs any prompt on a recurring schedule. Great for monitoring deploys, babysitting PRs, or polling status.`;
    },
    cooldownSessions: 3,
    isRelevant: async () => {
      if (!is1PApiCustomer())
        return false;
      if (!isKairosCronEnabled())
        return false;
      return getFeatureValue_CACHED_MAY_BE_STALE("tengu_timber_lark", "off") !== "off";
    }
  },
  {
    id: "guest-passes",
    content: async (ctx) => {
      const claude = color("claude", ctx.theme);
      const reward = getCachedReferrerReward();
      return reward ? `Share MiMo Code and earn ${claude(formatCreditAmount(reward))} of extra usage \xB7 ${claude("/passes")}` : `You have free guest passes to share \xB7 ${claude("/passes")}`;
    },
    cooldownSessions: 3,
    isRelevant: async () => {
      const config = getGlobalConfig();
      if (config.hasVisitedPasses) {
        return false;
      }
      const { eligible } = checkCachedPassesEligibility();
      return eligible;
    }
  },
  {
    id: "overage-credit",
    content: async (ctx) => {
      const claude = color("claude", ctx.theme);
      const info = getCachedOverageCreditGrant();
      const amount = info ? formatGrantAmount(info) : null;
      if (!amount)
        return "";
      return `${claude(`${amount} in extra usage, on us`)} \xB7 third-party apps \xB7 ${claude("/extra-usage")}`;
    },
    cooldownSessions: 3,
    isRelevant: async () => shouldShowOverageCreditUpsell()
  },
  {
    id: "feedback-command",
    content: async () => "Use /feedback to help us improve!",
    cooldownSessions: 15,
    async isRelevant() {
      if (process.env.USER_TYPE === "ant") {
        return false;
      }
      const config = getGlobalConfig();
      return config.numStartups > 5;
    }
  }
];
var internalOnlyTips = process.env.USER_TYPE === "ant" ? [
  {
    id: "important-claudemd",
    content: async () => '[ANT-ONLY] Use "IMPORTANT:" prefix for must-follow CLAUDE.md rules',
    cooldownSessions: 30,
    isRelevant: async () => true
  },
  {
    id: "skillify",
    content: async () => "[ANT-ONLY] Use /skillify at the end of a workflow to turn it into a reusable skill",
    cooldownSessions: 15,
    isRelevant: async () => true
  }
] : [];
function getCustomTips() {
  const settings = getInitialSettings();
  const override = settings.spinnerTipsOverride;
  if (!override?.tips?.length)
    return [];
  return override.tips.map((content, i) => ({
    id: `custom-tip-${i}`,
    content: async () => content,
    cooldownSessions: 0,
    isRelevant: async () => true
  }));
}
async function getRelevantTips(context) {
  const settings = getInitialSettings();
  const override = settings.spinnerTipsOverride;
  const customTips = getCustomTips();
  if (override?.excludeDefault && customTips.length > 0) {
    return customTips;
  }
  const tips = [...externalTips, ...internalOnlyTips];
  const isRelevant = await Promise.all(tips.map((_) => _.isRelevant(context)));
  const filtered = tips.filter((_, index) => isRelevant[index]).filter((_) => getSessionsSinceLastShown(_.id) >= _.cooldownSessions);
  return [...filtered, ...customTips];
}

// src/utils/model/deprecation.ts
init_providers();
var DEPRECATED_MODELS = {
  "claude-3-opus": {
    modelName: "Claude 3 Opus",
    retirementDates: {
      firstParty: "January 5, 2026",
      bedrock: "January 15, 2026",
      vertex: "January 5, 2026",
      foundry: "January 5, 2026"
    }
  },
  "claude-3-7-sonnet": {
    modelName: "Claude 3.7 Sonnet",
    retirementDates: {
      firstParty: "February 19, 2026",
      bedrock: "April 28, 2026",
      vertex: "May 11, 2026",
      foundry: "February 19, 2026"
    }
  },
  "claude-3-5-haiku": {
    modelName: "Claude 3.5 Haiku",
    retirementDates: {
      firstParty: "February 19, 2026",
      bedrock: null,
      vertex: null,
      foundry: null
    }
  }
};
function getDeprecatedModelInfo(modelId) {
  const lowercaseModelId = modelId.toLowerCase();
  const provider = getAPIProvider();
  for (const [key, value] of Object.entries(DEPRECATED_MODELS)) {
    const retirementDate = value.retirementDates[provider];
    if (!lowercaseModelId.includes(key) || !retirementDate) {
      continue;
    }
    return {
      isDeprecated: true,
      modelName: value.modelName,
      retirementDate
    };
  }
  return { isDeprecated: false };
}
function getModelDeprecationWarning(modelId) {
  if (!modelId) {
    return null;
  }
  const info = getDeprecatedModelInfo(modelId);
  if (!info.isDeprecated) {
    return null;
  }
  return `\u26A0 ${info.modelName} will be retired on ${info.retirementDate}. Consider switching to a newer model.`;
}

export { getExampleCommandFromCache, refreshExampleCommands, RemoteSessionManager, createRemoteSessionConfig, computeInitialTeamContext, initializeTeammateContextFromSession, recordTipShown, getSessionsSinceLastShown, shouldShowDesktopUpsellStartup, DesktopUpsellStartup, getRelevantTips, getModelDeprecationWarning };
