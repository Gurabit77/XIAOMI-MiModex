// @bun
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  Server,
  init_server,
  init_types
} from "./chunk-4cp6193g.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// packages/@ant/claude-for-chrome-mcp/src/mcpSocketClient.ts
import { promises as fsPromises } from "fs";
import { createConnection } from "net";
import { platform } from "os";
import { dirname } from "path";
function isToolResponse(message) {
  return "result" in message || "error" in message;
}
function isNotification(message) {
  return "method" in message && typeof message.method === "string";
}

class McpSocketClient {
  socket = null;
  connected = false;
  connecting = false;
  responseCallback = null;
  notificationHandler = null;
  responseBuffer = Buffer.alloc(0);
  reconnectAttempts = 0;
  maxReconnectAttempts = 10;
  reconnectDelay = 1000;
  reconnectTimer = null;
  context;
  disableAutoReconnect = false;
  constructor(context) {
    this.context = context;
  }
  async connect() {
    const { serverName, logger } = this.context;
    if (this.connecting) {
      logger.info(`[${serverName}] Already connecting, skipping duplicate attempt`);
      return;
    }
    this.closeSocket();
    this.connecting = true;
    const socketPath = this.context.getSocketPath?.() ?? this.context.socketPath;
    logger.info(`[${serverName}] Attempting to connect to: ${socketPath}`);
    try {
      await this.validateSocketSecurity(socketPath);
    } catch (error) {
      this.connecting = false;
      logger.info(`[${serverName}] Security validation failed:`, error);
      return;
    }
    this.socket = createConnection(socketPath);
    const connectTimeout = setTimeout(() => {
      if (!this.connected) {
        logger.info(`[${serverName}] Connection attempt timed out after 5000ms`);
        this.closeSocket();
        this.scheduleReconnect();
      }
    }, 5000);
    this.socket.on("connect", () => {
      clearTimeout(connectTimeout);
      this.connected = true;
      this.connecting = false;
      this.reconnectAttempts = 0;
      logger.info(`[${serverName}] Successfully connected to bridge server`);
    });
    this.socket.on("data", (data) => {
      this.responseBuffer = Buffer.concat([this.responseBuffer, data]);
      while (this.responseBuffer.length >= 4) {
        const length = this.responseBuffer.readUInt32LE(0);
        if (this.responseBuffer.length < 4 + length) {
          break;
        }
        const messageBytes = this.responseBuffer.slice(4, 4 + length);
        this.responseBuffer = this.responseBuffer.slice(4 + length);
        try {
          const message = JSON.parse(messageBytes.toString("utf-8"));
          if (isNotification(message)) {
            logger.info(`[${serverName}] Received notification: ${message.method}`);
            if (this.notificationHandler) {
              this.notificationHandler(message);
            }
          } else if (isToolResponse(message)) {
            logger.info(`[${serverName}] Received tool response: ${message}`);
            this.handleResponse(message);
          } else {
            logger.info(`[${serverName}] Received unknown message: ${message}`);
          }
        } catch (error) {
          logger.info(`[${serverName}] Failed to parse message:`, error);
        }
      }
    });
    this.socket.on("error", (error) => {
      clearTimeout(connectTimeout);
      logger.info(`[${serverName}] Socket error (code: ${error.code}):`, error);
      this.connected = false;
      this.connecting = false;
      if (error.code && [
        "ECONNREFUSED",
        "ECONNRESET",
        "EPIPE",
        "ENOENT",
        "EOPNOTSUPP",
        "ECONNABORTED"
      ].includes(error.code)) {
        this.scheduleReconnect();
      }
    });
    this.socket.on("close", () => {
      clearTimeout(connectTimeout);
      this.connected = false;
      this.connecting = false;
      this.scheduleReconnect();
    });
  }
  scheduleReconnect() {
    const { serverName, logger } = this.context;
    if (this.disableAutoReconnect) {
      return;
    }
    if (this.reconnectTimer) {
      logger.info(`[${serverName}] Reconnect already scheduled, skipping`);
      return;
    }
    this.reconnectAttempts++;
    const maxTotalAttempts = 100;
    if (this.reconnectAttempts > maxTotalAttempts) {
      logger.info(`[${serverName}] Giving up after ${maxTotalAttempts} attempts. Will retry on next tool call.`);
      this.reconnectAttempts = 0;
      return;
    }
    const delay = Math.min(this.reconnectDelay * Math.pow(1.5, this.reconnectAttempts - 1), 30000);
    if (this.reconnectAttempts <= this.maxReconnectAttempts) {
      logger.info(`[${serverName}] Reconnecting in ${Math.round(delay)}ms (attempt ${this.reconnectAttempts})`);
    } else if (this.reconnectAttempts % 10 === 0) {
      logger.info(`[${serverName}] Still polling for native host (attempt ${this.reconnectAttempts})`);
    }
    this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null;
      this.connect();
    }, delay);
  }
  handleResponse(response) {
    if (this.responseCallback) {
      const callback = this.responseCallback;
      this.responseCallback = null;
      callback(response);
    }
  }
  setNotificationHandler(handler) {
    this.notificationHandler = handler;
  }
  async ensureConnected() {
    const { serverName } = this.context;
    if (this.connected && this.socket) {
      return true;
    }
    if (!this.socket && !this.connecting) {
      await this.connect();
    }
    return new Promise((resolve, reject) => {
      let checkTimeoutId = null;
      const timeout = setTimeout(() => {
        if (checkTimeoutId) {
          clearTimeout(checkTimeoutId);
        }
        reject(new SocketConnectionError(`[${serverName}] Connection attempt timed out after 5000ms`));
      }, 5000);
      const checkConnection = () => {
        if (this.connected) {
          clearTimeout(timeout);
          resolve(true);
        } else {
          checkTimeoutId = setTimeout(checkConnection, 500);
        }
      };
      checkConnection();
    });
  }
  async sendRequest(request, timeoutMs = 30000) {
    const { serverName } = this.context;
    if (!this.socket) {
      throw new SocketConnectionError(`[${serverName}] Cannot send request: not connected`);
    }
    const socket = this.socket;
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        this.responseCallback = null;
        reject(new SocketConnectionError(`[${serverName}] Tool request timed out after ${timeoutMs}ms`));
      }, timeoutMs);
      this.responseCallback = (response) => {
        clearTimeout(timeout);
        resolve(response);
      };
      const requestJson = JSON.stringify(request);
      const requestBytes = Buffer.from(requestJson, "utf-8");
      const lengthPrefix = Buffer.allocUnsafe(4);
      lengthPrefix.writeUInt32LE(requestBytes.length, 0);
      const message = Buffer.concat([lengthPrefix, requestBytes]);
      socket.write(message);
    });
  }
  async callTool(name, args, _permissionOverrides) {
    const request = {
      method: "execute_tool",
      params: {
        client_id: this.context.clientTypeId,
        tool: name,
        args
      }
    };
    return this.sendRequestWithRetry(request);
  }
  async sendRequestWithRetry(request) {
    const { serverName, logger } = this.context;
    try {
      return await this.sendRequest(request);
    } catch (error) {
      if (!(error instanceof SocketConnectionError)) {
        throw error;
      }
      logger.info(`[${serverName}] Connection error, forcing reconnect and retrying: ${error.message}`);
      this.closeSocket();
      await this.ensureConnected();
      return await this.sendRequest(request);
    }
  }
  async setPermissionMode(_mode, _allowedDomains) {}
  isConnected() {
    return this.connected;
  }
  closeSocket() {
    if (this.socket) {
      this.socket.removeAllListeners();
      this.socket.end();
      this.socket.destroy();
      this.socket = null;
    }
    this.connected = false;
    this.connecting = false;
  }
  cleanup() {
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
    this.closeSocket();
    this.reconnectAttempts = 0;
    this.responseBuffer = Buffer.alloc(0);
    this.responseCallback = null;
  }
  disconnect() {
    this.cleanup();
  }
  async validateSocketSecurity(socketPath) {
    const { serverName, logger } = this.context;
    if (platform() === "win32") {
      return;
    }
    try {
      const dirPath = dirname(socketPath);
      const dirBasename = dirPath.split("/").pop() || "";
      const isSocketDir = dirBasename.startsWith("claude-mcp-browser-bridge-");
      if (isSocketDir) {
        try {
          const dirStats = await fsPromises.stat(dirPath);
          if (dirStats.isDirectory()) {
            const dirMode = dirStats.mode & 511;
            if (dirMode !== 448) {
              throw new Error(`[${serverName}] Insecure socket directory permissions: ${dirMode.toString(8)} (expected 0700). Directory may have been tampered with.`);
            }
            const currentUid2 = process.getuid?.();
            if (currentUid2 !== undefined && dirStats.uid !== currentUid2) {
              throw new Error(`Socket directory not owned by current user (uid: ${currentUid2}, dir uid: ${dirStats.uid}). ` + `Potential security risk.`);
            }
          }
        } catch (dirError) {
          if (dirError.code !== "ENOENT") {
            throw dirError;
          }
        }
      }
      const stats = await fsPromises.stat(socketPath);
      if (!stats.isSocket()) {
        throw new Error(`[${serverName}] Path exists but it's not a socket: ${socketPath}`);
      }
      const mode = stats.mode & 511;
      if (mode !== 384) {
        throw new Error(`[${serverName}] Insecure socket permissions: ${mode.toString(8)} (expected 0600). Socket may have been tampered with.`);
      }
      const currentUid = process.getuid?.();
      if (currentUid !== undefined && stats.uid !== currentUid) {
        throw new Error(`Socket not owned by current user (uid: ${currentUid}, socket uid: ${stats.uid}). ` + `Potential security risk.`);
      }
      logger.info(`[${serverName}] Socket security validation passed`);
    } catch (error) {
      if (error.code === "ENOENT") {
        logger.info(`[${serverName}] Socket not found, will be created by server`);
        return;
      }
      throw error;
    }
  }
}
function createMcpSocketClient(context) {
  return new McpSocketClient(context);
}
var SocketConnectionError;
var init_mcpSocketClient = __esm(() => {
  SocketConnectionError = class SocketConnectionError extends Error {
    constructor(message) {
      super(message);
      this.name = "SocketConnectionError";
    }
  };
});

// packages/@ant/claude-for-chrome-mcp/src/types.ts
function localPlatformLabel() {
  return process.platform === "darwin" ? "macOS" : process.platform === "win32" ? "Windows" : "Linux";
}
var init_types2 = () => {};

// packages/@ant/claude-for-chrome-mcp/src/bridgeClient.ts
import WebSocket from "ws";

class BridgeClient {
  ws = null;
  connected = false;
  authenticated = false;
  connecting = false;
  reconnectTimer = null;
  reconnectAttempts = 0;
  pendingCalls = new Map;
  notificationHandler = null;
  context;
  permissionMode = "ask";
  allowedDomains;
  tabsContextCollectionTimeoutMs = 2000;
  toolCallTimeoutMs = 120000;
  connectionStartTime = null;
  connectionEstablishedTime = null;
  selectedDeviceId;
  discoveryComplete = false;
  discoveryPromise = null;
  pendingDiscovery = null;
  previousSelectedDeviceId;
  peerConnectedWaiters = [];
  pendingPairingRequestId;
  pairingInProgress = false;
  persistedDeviceId;
  pendingSwitchResolve = null;
  constructor(context) {
    this.context = context;
    if (context.initialPermissionMode) {
      this.permissionMode = context.initialPermissionMode;
    }
  }
  async ensureConnected() {
    const { logger, serverName } = this.context;
    logger.info(`[${serverName}] ensureConnected called, connected=${this.connected}, authenticated=${this.authenticated}, wsState=${this.ws?.readyState}`);
    if (this.connected && this.authenticated && this.ws?.readyState === WebSocket.OPEN) {
      logger.info(`[${serverName}] Already connected and authenticated`);
      return true;
    }
    if (!this.connecting) {
      logger.info(`[${serverName}] Not connecting, starting connection...`);
      await this.connect();
    } else {
      logger.info(`[${serverName}] Already connecting, waiting...`);
    }
    return new Promise((resolve) => {
      const timeout = setTimeout(() => {
        logger.info(`[${serverName}] Connection timeout, connected=${this.connected}, authenticated=${this.authenticated}`);
        resolve(false);
      }, 1e4);
      const check = () => {
        if (this.connected && this.authenticated) {
          logger.info(`[${serverName}] Connection successful`);
          clearTimeout(timeout);
          resolve(true);
        } else if (!this.connecting) {
          logger.info(`[${serverName}] No longer connecting, giving up`);
          clearTimeout(timeout);
          resolve(false);
        } else {
          setTimeout(check, 200);
        }
      };
      check();
    });
  }
  async callTool(name, args, permissionOverrides) {
    const { logger, serverName, trackEvent } = this.context;
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      throw new SocketConnectionError(`[${serverName}] Bridge not connected`);
    }
    if (!this.selectedDeviceId && !this.discoveryComplete) {
      this.discoveryPromise ??= this.discoverAndSelectExtension().finally(() => {
        this.discoveryPromise = null;
      });
      await this.discoveryPromise;
    }
    const toolUseId = crypto.randomUUID();
    const isTabsContext = name === "tabs_context_mcp";
    const startTime = Date.now();
    const timeoutMs = isTabsContext ? this.tabsContextCollectionTimeoutMs : this.toolCallTimeoutMs;
    trackEvent?.("chrome_bridge_tool_call_started", {
      tool_name: name,
      tool_use_id: toolUseId
    });
    const effectivePermissionMode = permissionOverrides?.permissionMode ?? this.permissionMode;
    const effectiveAllowedDomains = permissionOverrides?.allowedDomains ?? this.allowedDomains;
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        const pending = this.pendingCalls.get(toolUseId);
        if (pending) {
          this.pendingCalls.delete(toolUseId);
          const durationMs = Date.now() - pending.startTime;
          if (isTabsContext && pending.results.length > 0) {
            trackEvent?.("chrome_bridge_tool_call_completed", {
              tool_name: name,
              tool_use_id: toolUseId,
              duration_ms: durationMs
            });
            resolve(this.mergeTabsResults(pending.results));
          } else {
            logger.warn(`[${serverName}] Tool call timeout: ${name} (${toolUseId.slice(0, 8)}) after ${durationMs}ms, pending calls: ${this.pendingCalls.size}`);
            trackEvent?.("chrome_bridge_tool_call_timeout", {
              tool_name: name,
              tool_use_id: toolUseId,
              duration_ms: durationMs,
              timeout_ms: timeoutMs
            });
            reject(new SocketConnectionError(`[${serverName}] Tool call timed out: ${name}`));
          }
        }
      }, timeoutMs);
      this.pendingCalls.set(toolUseId, {
        resolve,
        reject,
        timer,
        results: [],
        isTabsContext,
        onPermissionRequest: permissionOverrides?.onPermissionRequest,
        startTime,
        toolName: name
      });
      const message = {
        type: "tool_call",
        tool_use_id: toolUseId,
        client_type: this.context.clientTypeId,
        tool: name,
        args
      };
      if (this.selectedDeviceId) {
        message.target_device_id = this.selectedDeviceId;
      }
      if (effectivePermissionMode) {
        message.permission_mode = effectivePermissionMode;
      }
      if (effectiveAllowedDomains?.length) {
        message.allowed_domains = effectiveAllowedDomains;
      }
      if (permissionOverrides?.onPermissionRequest) {
        message.handle_permission_prompts = true;
      }
      logger.debug(`[${serverName}] Sending tool_call: ${name} (${toolUseId.slice(0, 8)})`);
      this.ws.send(JSON.stringify(message));
    });
  }
  isConnected() {
    return this.connected && this.authenticated && this.ws?.readyState === WebSocket.OPEN;
  }
  disconnect() {
    this.cleanup();
  }
  setNotificationHandler(handler) {
    this.notificationHandler = handler;
  }
  async setPermissionMode(mode, allowedDomains) {
    this.permissionMode = mode;
    this.allowedDomains = allowedDomains;
  }
  async discoverAndSelectExtension() {
    const { logger, serverName } = this.context;
    this.persistedDeviceId ??= this.context.getPersistedDeviceId?.();
    let extensions = await this.queryBridgeExtensions();
    if (extensions.length === 0) {
      logger.info(`[${serverName}] No extensions connected, waiting up to ${PEER_WAIT_TIMEOUT_MS}ms for peer_connected`);
      const peerArrived = await this.waitForPeerConnected(PEER_WAIT_TIMEOUT_MS);
      if (peerArrived) {
        extensions = await this.queryBridgeExtensions();
      }
    }
    this.discoveryComplete = true;
    if (extensions.length === 0) {
      logger.info(`[${serverName}] No extensions found after waiting`);
      return;
    }
    if (extensions.length === 1) {
      const ext = extensions[0];
      if (!this.isLocalExtension(ext)) {
        this.context.onRemoteExtensionWarning?.(ext);
      }
      this.selectExtension(ext.deviceId);
      return;
    }
    if (this.persistedDeviceId) {
      const persisted = extensions.find((e) => e.deviceId === this.persistedDeviceId);
      if (persisted) {
        logger.info(`[${serverName}] Auto-connecting to persisted extension: ${persisted.name || persisted.deviceId.slice(0, 8)}`);
        this.selectExtension(persisted.deviceId);
        return;
      }
    }
    this.broadcastPairingRequest();
    this.pairingInProgress = true;
  }
  async queryBridgeExtensions() {
    const raw = await new Promise((resolve) => {
      const timeout = setTimeout(() => {
        this.pendingDiscovery = null;
        resolve([]);
      }, DISCOVERY_TIMEOUT_MS);
      this.pendingDiscovery = { resolve, timeout };
      this.ws?.send(JSON.stringify({ type: "list_extensions" }));
    });
    const byDeviceId = new Map;
    for (const ext of raw) {
      const existing = byDeviceId.get(ext.deviceId);
      if (!existing || ext.connectedAt > existing.connectedAt) {
        byDeviceId.set(ext.deviceId, ext);
      }
    }
    return [...byDeviceId.values()];
  }
  selectExtension(deviceId) {
    const { logger, serverName } = this.context;
    this.selectedDeviceId = deviceId;
    this.previousSelectedDeviceId = undefined;
    logger.info(`[${serverName}] Selected Chrome extension: ${deviceId.slice(0, 8)}...`);
  }
  isLocalExtension(ext) {
    if (!ext.osPlatform)
      return false;
    return ext.osPlatform === localPlatformLabel();
  }
  waitForPeerConnected(timeoutMs) {
    return new Promise((resolve) => {
      const timer = setTimeout(() => {
        this.peerConnectedWaiters = this.peerConnectedWaiters.filter((w) => w !== onPeer);
        resolve(false);
      }, timeoutMs);
      const onPeer = (arrived) => {
        clearTimeout(timer);
        resolve(arrived);
      };
      this.peerConnectedWaiters.push(onPeer);
    });
  }
  broadcastPairingRequest() {
    const requestId = crypto.randomUUID();
    this.pendingPairingRequestId = requestId;
    this.ws?.send(JSON.stringify({
      type: "pairing_request",
      request_id: requestId,
      client_type: this.context.clientTypeId
    }));
  }
  async switchBrowser() {
    const extensions = await this.queryBridgeExtensions();
    const currentDeviceId = this.selectedDeviceId ?? this.previousSelectedDeviceId;
    if (extensions.length === 0 || extensions.length === 1 && (!currentDeviceId || extensions[0].deviceId === currentDeviceId)) {
      return "no_other_browsers";
    }
    this.previousSelectedDeviceId = this.selectedDeviceId;
    this.selectedDeviceId = undefined;
    this.discoveryComplete = false;
    this.pairingInProgress = false;
    const requestId = crypto.randomUUID();
    this.pendingPairingRequestId = requestId;
    if (this.ws?.readyState !== WebSocket.OPEN) {
      return null;
    }
    this.ws.send(JSON.stringify({
      type: "pairing_request",
      request_id: requestId,
      client_type: this.context.clientTypeId
    }));
    if (this.pendingSwitchResolve) {
      this.pendingSwitchResolve(null);
    }
    return new Promise((resolve) => {
      const timer = setTimeout(() => {
        if (this.pendingPairingRequestId === requestId) {
          this.pendingPairingRequestId = undefined;
        }
        this.pendingSwitchResolve = null;
        resolve(null);
      }, 120000);
      this.pendingSwitchResolve = (result) => {
        clearTimeout(timer);
        this.pendingSwitchResolve = null;
        resolve(result);
      };
    });
  }
  async connect() {
    const { logger, serverName, bridgeConfig, trackEvent } = this.context;
    if (!bridgeConfig) {
      logger.error(`[${serverName}] No bridge config provided`);
      return;
    }
    if (this.connecting) {
      return;
    }
    this.connecting = true;
    this.authenticated = false;
    this.connectionStartTime = Date.now();
    this.closeSocket();
    let userId;
    let token;
    if (bridgeConfig.devUserId) {
      userId = bridgeConfig.devUserId;
      logger.debug(`[${serverName}] Using dev user ID for bridge connection`);
    } else {
      logger.debug(`[${serverName}] Fetching user ID for bridge connection`);
      const fetchedUserId = await bridgeConfig.getUserId();
      if (!fetchedUserId) {
        const durationMs = Date.now() - this.connectionStartTime;
        logger.error(`[${serverName}] No user ID available after ${durationMs}ms`);
        trackEvent?.("chrome_bridge_connection_failed", {
          duration_ms: durationMs,
          error_type: "no_user_id",
          reconnect_attempt: this.reconnectAttempts
        });
        this.connecting = false;
        this.context.onAuthenticationError?.();
        return;
      }
      userId = fetchedUserId;
      logger.debug(`[${serverName}] Fetching OAuth token for bridge connection`);
      token = await bridgeConfig.getOAuthToken();
      if (!token) {
        const durationMs = Date.now() - this.connectionStartTime;
        logger.error(`[${serverName}] No OAuth token available after ${durationMs}ms`);
        trackEvent?.("chrome_bridge_connection_failed", {
          duration_ms: durationMs,
          error_type: "no_oauth_token",
          reconnect_attempt: this.reconnectAttempts
        });
        this.connecting = false;
        this.context.onAuthenticationError?.();
        return;
      }
    }
    const wsUrl = `${bridgeConfig.url}/chrome/${userId}`;
    logger.info(`[${serverName}] Connecting to bridge: ${wsUrl}`);
    trackEvent?.("chrome_bridge_connection_started", {
      bridge_url: wsUrl
    });
    try {
      this.ws = new WebSocket(wsUrl);
    } catch (error) {
      const durationMs = Date.now() - this.connectionStartTime;
      logger.error(`[${serverName}] Failed to create WebSocket after ${durationMs}ms:`, error);
      trackEvent?.("chrome_bridge_connection_failed", {
        duration_ms: durationMs,
        error_type: "websocket_error",
        reconnect_attempt: this.reconnectAttempts
      });
      this.connecting = false;
      this.scheduleReconnect();
      return;
    }
    this.ws.on("open", () => {
      logger.info(`[${serverName}] WebSocket connected, sending connect message`);
      const connectMessage = {
        type: "connect",
        client_type: this.context.clientTypeId
      };
      if (bridgeConfig.devUserId) {
        connectMessage.dev_user_id = bridgeConfig.devUserId;
      } else {
        connectMessage.oauth_token = token;
      }
      this.ws?.send(JSON.stringify(connectMessage));
    });
    this.ws.on("message", (data) => {
      try {
        const message = JSON.parse(data.toString());
        logger.debug(`[${serverName}] Bridge received: ${JSON.stringify(message)}`);
        this.handleMessage(message);
      } catch (error) {
        logger.error(`[${serverName}] Failed to parse bridge message:`, error);
      }
    });
    this.ws.on("close", (code) => {
      const durationSinceConnect = this.connectionEstablishedTime ? Date.now() - this.connectionEstablishedTime : 0;
      logger.info(`[${serverName}] Bridge connection closed (code: ${code}, duration: ${durationSinceConnect}ms)`);
      trackEvent?.("chrome_bridge_disconnected", {
        close_code: code,
        duration_since_connect_ms: durationSinceConnect,
        reconnect_attempt: this.reconnectAttempts + 1
      });
      this.connected = false;
      this.authenticated = false;
      this.connecting = false;
      this.connectionEstablishedTime = null;
      this.scheduleReconnect();
    });
    this.ws.on("error", (error) => {
      const durationMs = this.connectionStartTime ? Date.now() - this.connectionStartTime : 0;
      logger.error(`[${serverName}] Bridge WebSocket error after ${durationMs}ms: ${error.message}`);
      trackEvent?.("chrome_bridge_connection_failed", {
        duration_ms: durationMs,
        error_type: "websocket_error",
        reconnect_attempt: this.reconnectAttempts
      });
      this.connected = false;
      this.authenticated = false;
      this.connecting = false;
    });
  }
  handleMessage(message) {
    const { logger, serverName, trackEvent } = this.context;
    switch (message.type) {
      case "paired": {
        const durationMs = this.connectionStartTime ? Date.now() - this.connectionStartTime : 0;
        logger.info(`[${serverName}] Paired with Chrome extension (duration: ${durationMs}ms)`);
        this.connected = true;
        this.authenticated = true;
        this.connecting = false;
        this.reconnectAttempts = 0;
        this.connectionEstablishedTime = Date.now();
        trackEvent?.("chrome_bridge_connection_succeeded", {
          duration_ms: durationMs,
          status: "paired"
        });
        break;
      }
      case "waiting": {
        const durationMs = this.connectionStartTime ? Date.now() - this.connectionStartTime : 0;
        logger.info(`[${serverName}] Waiting for Chrome extension to connect (duration: ${durationMs}ms)`);
        this.connected = true;
        this.authenticated = true;
        this.connecting = false;
        this.reconnectAttempts = 0;
        this.connectionEstablishedTime = Date.now();
        trackEvent?.("chrome_bridge_connection_succeeded", {
          duration_ms: durationMs,
          status: "waiting"
        });
        break;
      }
      case "peer_connected":
        logger.info(`[${serverName}] Chrome extension connected to bridge`);
        trackEvent?.("chrome_bridge_peer_connected", null);
        if (!this.selectedDeviceId) {
          this.discoveryComplete = false;
        }
        if (this.previousSelectedDeviceId && message.deviceId === this.previousSelectedDeviceId && !this.pendingSwitchResolve) {
          logger.info(`[${serverName}] Previously selected extension reconnected, auto-reselecting`);
          this.selectExtension(this.previousSelectedDeviceId);
          this.previousSelectedDeviceId = undefined;
        }
        if (this.peerConnectedWaiters.length > 0) {
          const waiters = this.peerConnectedWaiters;
          this.peerConnectedWaiters = [];
          for (const waiter of waiters) {
            waiter(true);
          }
        }
        break;
      case "peer_disconnected":
        logger.info(`[${serverName}] Chrome extension disconnected from bridge`);
        trackEvent?.("chrome_bridge_peer_disconnected", null);
        if (message.deviceId && message.deviceId === this.selectedDeviceId) {
          logger.info(`[${serverName}] Selected extension disconnected, clearing selection`);
          this.previousSelectedDeviceId = this.selectedDeviceId;
          this.selectedDeviceId = undefined;
          this.discoveryComplete = false;
        }
        break;
      case "extensions_list":
        if (this.pendingDiscovery) {
          clearTimeout(this.pendingDiscovery.timeout);
          this.pendingDiscovery.resolve(message.extensions ?? []);
          this.pendingDiscovery = null;
        }
        break;
      case "pairing_response": {
        const requestId = message.request_id;
        const responseDeviceId = message.device_id;
        const responseName = message.name;
        if (this.pendingPairingRequestId === requestId && responseDeviceId && responseName) {
          this.pendingPairingRequestId = undefined;
          this.pairingInProgress = false;
          this.selectExtension(responseDeviceId);
          this.context.onExtensionPaired?.(responseDeviceId, responseName);
          logger.info(`[${serverName}] Paired with "${responseName}" (${responseDeviceId.slice(0, 8)})`);
          if (this.pendingSwitchResolve) {
            this.pendingSwitchResolve({
              deviceId: responseDeviceId,
              name: responseName
            });
            this.pendingSwitchResolve = null;
          }
        }
        break;
      }
      case "ping":
        this.ws?.send(JSON.stringify({ type: "pong" }));
        break;
      case "pong":
        break;
      case "tool_result":
        this.handleToolResult(message);
        break;
      case "permission_request":
        this.handlePermissionRequest(message);
        break;
      case "notification":
        if (this.notificationHandler) {
          this.notificationHandler({
            method: message.method,
            params: message.params
          });
        }
        break;
      case "error":
        logger.warn(`[${serverName}] Bridge error: ${message.error}`);
        if (this.selectedDeviceId) {
          this.selectedDeviceId = undefined;
          this.discoveryComplete = false;
        }
        break;
      default:
        logger.warn(`[${serverName}] Unrecognized bridge message type: ${message.type}`);
    }
  }
  async handlePermissionRequest(message) {
    const { logger, serverName } = this.context;
    const toolUseId = message.tool_use_id;
    const requestId = message.request_id;
    if (!toolUseId || !requestId) {
      logger.warn(`[${serverName}] permission_request missing tool_use_id or request_id`);
      return;
    }
    const pending = this.pendingCalls.get(toolUseId);
    if (!pending?.onPermissionRequest) {
      logger.debug(`[${serverName}] Ignoring permission_request for unknown tool_use_id ${toolUseId.slice(0, 8)} (not our call)`);
      return;
    }
    const request = {
      toolUseId,
      requestId,
      toolType: message.tool_type ?? "unknown",
      url: message.url ?? "",
      actionData: message.action_data
    };
    try {
      const allowed = await pending.onPermissionRequest(request);
      this.sendPermissionResponse(requestId, allowed);
    } catch (error) {
      logger.error(`[${serverName}] Error handling permission request:`, error);
      this.sendPermissionResponse(requestId, false);
    }
  }
  sendPermissionResponse(requestId, allowed) {
    if (this.ws?.readyState === WebSocket.OPEN) {
      const message = {
        type: "permission_response",
        request_id: requestId,
        allowed
      };
      if (this.selectedDeviceId) {
        message.target_device_id = this.selectedDeviceId;
      }
      this.ws.send(JSON.stringify(message));
    }
  }
  handleToolResult(message) {
    const { logger, serverName, trackEvent } = this.context;
    const toolUseId = message.tool_use_id;
    if (!toolUseId) {
      logger.warn(`[${serverName}] Received tool_result without tool_use_id`);
      return;
    }
    const pending = this.pendingCalls.get(toolUseId);
    if (!pending) {
      logger.debug(`[${serverName}] Received tool_result for unknown call: ${toolUseId.slice(0, 8)}`);
      return;
    }
    const durationMs = Date.now() - pending.startTime;
    const normalized = this.normalizeBridgeResponse(message);
    const isError = Boolean(message.is_error) || "error" in normalized;
    if (pending.isTabsContext && !this.selectedDeviceId) {
      pending.results.push(normalized);
    } else {
      clearTimeout(pending.timer);
      this.pendingCalls.delete(toolUseId);
      if (isError) {
        const errorContent = normalized.error?.content;
        let errorMessage = "Unknown error";
        if (Array.isArray(errorContent)) {
          const textItem = errorContent.find((item) => typeof item === "object" && item !== null && ("text" in item));
          if (textItem?.text) {
            errorMessage = textItem.text.slice(0, 200);
          }
        }
        logger.warn(`[${serverName}] Tool call error: ${pending.toolName} (${toolUseId.slice(0, 8)}) after ${durationMs}ms`);
        trackEvent?.("chrome_bridge_tool_call_error", {
          tool_name: pending.toolName,
          tool_use_id: toolUseId,
          duration_ms: durationMs,
          error_message: errorMessage
        });
      } else {
        logger.debug(`[${serverName}] Tool call completed: ${pending.toolName} (${toolUseId.slice(0, 8)}) in ${durationMs}ms`);
        trackEvent?.("chrome_bridge_tool_call_completed", {
          tool_name: pending.toolName,
          tool_use_id: toolUseId,
          duration_ms: durationMs
        });
      }
      pending.resolve(normalized);
    }
  }
  normalizeBridgeResponse(message) {
    if (message.result || message.error) {
      return message;
    }
    if (message.content) {
      if (message.is_error) {
        return { error: { content: message.content } };
      }
      return { result: { content: message.content } };
    }
    return message;
  }
  mergeTabsResults(results) {
    const mergedTabs = [];
    for (const result of results) {
      const msg = result;
      const resultData = msg.result;
      const content = resultData?.content;
      if (!content || !Array.isArray(content))
        continue;
      for (const item of content) {
        if (item.type === "text" && item.text) {
          try {
            const parsed = JSON.parse(item.text);
            if (Array.isArray(parsed)) {
              mergedTabs.push(...parsed);
            } else if (parsed?.availableTabs && Array.isArray(parsed.availableTabs)) {
              mergedTabs.push(...parsed.availableTabs);
            }
          } catch {}
        }
      }
    }
    if (mergedTabs.length > 0) {
      const tabListText = mergedTabs.map((t) => {
        const tab = t;
        return `  \u2022 tabId ${tab.tabId}: "${tab.title}" (${tab.url})`;
      }).join(`
`);
      return {
        result: {
          content: [
            {
              type: "text",
              text: JSON.stringify({ availableTabs: mergedTabs })
            },
            {
              type: "text",
              text: `

Tab Context:
- Available tabs:
${tabListText}`
            }
          ]
        }
      };
    }
    return results[0];
  }
  scheduleReconnect() {
    const { logger, serverName, trackEvent } = this.context;
    if (this.reconnectTimer)
      return;
    this.reconnectAttempts++;
    if (this.reconnectAttempts > 100) {
      logger.warn(`[${serverName}] Giving up bridge reconnection after 100 attempts`);
      trackEvent?.("chrome_bridge_reconnect_exhausted", {
        total_attempts: 100
      });
      this.reconnectAttempts = 0;
      return;
    }
    const delay = Math.min(2000 * Math.pow(1.5, this.reconnectAttempts - 1), 30000);
    if (this.reconnectAttempts <= 10 || this.reconnectAttempts % 10 === 0) {
      logger.info(`[${serverName}] Bridge reconnecting in ${Math.round(delay)}ms (attempt ${this.reconnectAttempts})`);
    }
    this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null;
      this.connect();
    }, delay);
  }
  closeSocket() {
    if (this.ws) {
      this.ws.removeAllListeners();
      this.ws.close();
      this.ws = null;
    }
    this.connected = false;
    this.authenticated = false;
    this.selectedDeviceId = undefined;
    this.discoveryComplete = false;
    this.pendingPairingRequestId = undefined;
    this.pairingInProgress = false;
    if (this.pendingSwitchResolve) {
      this.pendingSwitchResolve(null);
      this.pendingSwitchResolve = null;
    }
    if (this.pendingDiscovery) {
      clearTimeout(this.pendingDiscovery.timeout);
      this.pendingDiscovery.resolve([]);
      this.pendingDiscovery = null;
    }
    if (this.peerConnectedWaiters.length > 0) {
      const waiters = this.peerConnectedWaiters;
      this.peerConnectedWaiters = [];
      for (const waiter of waiters) {
        waiter(false);
      }
    }
  }
  cleanup() {
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
    for (const [id, pending] of this.pendingCalls) {
      clearTimeout(pending.timer);
      pending.reject(new SocketConnectionError("Bridge client disconnected"));
      this.pendingCalls.delete(id);
    }
    this.closeSocket();
    this.reconnectAttempts = 0;
  }
}
function createBridgeClient(context) {
  return new BridgeClient(context);
}
var DISCOVERY_TIMEOUT_MS = 5000, PEER_WAIT_TIMEOUT_MS = 1e4;
var init_bridgeClient = __esm(() => {
  init_mcpSocketClient();
  init_types2();
});

// packages/@ant/claude-for-chrome-mcp/src/browserTools.ts
var BROWSER_TOOLS;
var init_browserTools = __esm(() => {
  BROWSER_TOOLS = [
    {
      name: "javascript_tool",
      description: "Execute JavaScript code in the context of the current page. The code runs in the page's context and can interact with the DOM, window object, and page variables. Returns the result of the last expression or any thrown errors. If you don't have a valid tab ID, use tabs_context_mcp first to get available tabs.",
      inputSchema: {
        type: "object",
        properties: {
          action: {
            type: "string",
            description: "Must be set to 'javascript_exec'"
          },
          text: {
            type: "string",
            description: "The JavaScript code to execute. The code will be evaluated in the page context. The result of the last expression will be returned automatically. Do NOT use 'return' statements - just write the expression you want to evaluate (e.g., 'window.myData.value' not 'return window.myData.value'). You can access and modify the DOM, call page functions, and interact with page variables."
          },
          tabId: {
            type: "number",
            description: "Tab ID to execute the code in. Must be a tab in the current group. Use tabs_context_mcp first if you don't have a valid tab ID."
          }
        },
        required: ["action", "text", "tabId"]
      }
    },
    {
      name: "read_page",
      description: "Get an accessibility tree representation of elements on the page. By default returns all elements including non-visible ones. Output is limited to 50000 characters by default. If the output exceeds this limit, you will receive an error asking you to specify a smaller depth or focus on a specific element using ref_id. Optionally filter for only interactive elements. If you don't have a valid tab ID, use tabs_context_mcp first to get available tabs.",
      inputSchema: {
        type: "object",
        properties: {
          filter: {
            type: "string",
            enum: ["interactive", "all"],
            description: 'Filter elements: "interactive" for buttons/links/inputs only, "all" for all elements including non-visible ones (default: all elements)'
          },
          tabId: {
            type: "number",
            description: "Tab ID to read from. Must be a tab in the current group. Use tabs_context_mcp first if you don't have a valid tab ID."
          },
          depth: {
            type: "number",
            description: "Maximum depth of the tree to traverse (default: 15). Use a smaller depth if output is too large."
          },
          ref_id: {
            type: "string",
            description: "Reference ID of a parent element to read. Will return the specified element and all its children. Use this to focus on a specific part of the page when output is too large."
          },
          max_chars: {
            type: "number",
            description: "Maximum characters for output (default: 50000). Set to a higher value if your client can handle large outputs."
          }
        },
        required: ["tabId"]
      }
    },
    {
      name: "find",
      description: `Find elements on the page using natural language. Can search for elements by their purpose (e.g., "search bar", "login button") or by text content (e.g., "organic mango product"). Returns up to 20 matching elements with references that can be used with other tools. If more than 20 matches exist, you'll be notified to use a more specific query. If you don't have a valid tab ID, use tabs_context_mcp first to get available tabs.`,
      inputSchema: {
        type: "object",
        properties: {
          query: {
            type: "string",
            description: 'Natural language description of what to find (e.g., "search bar", "add to cart button", "product title containing organic")'
          },
          tabId: {
            type: "number",
            description: "Tab ID to search in. Must be a tab in the current group. Use tabs_context_mcp first if you don't have a valid tab ID."
          }
        },
        required: ["query", "tabId"]
      }
    },
    {
      name: "form_input",
      description: "Set values in form elements using element reference ID from the read_page tool. If you don't have a valid tab ID, use tabs_context_mcp first to get available tabs.",
      inputSchema: {
        type: "object",
        properties: {
          ref: {
            type: "string",
            description: 'Element reference ID from the read_page tool (e.g., "ref_1", "ref_2")'
          },
          value: {
            type: ["string", "boolean", "number"],
            description: "The value to set. For checkboxes use boolean, for selects use option value or text, for other inputs use appropriate string/number"
          },
          tabId: {
            type: "number",
            description: "Tab ID to set form value in. Must be a tab in the current group. Use tabs_context_mcp first if you don't have a valid tab ID."
          }
        },
        required: ["ref", "value", "tabId"]
      }
    },
    {
      name: "computer",
      description: `Use a mouse and keyboard to interact with a web browser, and take screenshots. If you don't have a valid tab ID, use tabs_context_mcp first to get available tabs.
* Whenever you intend to click on an element like an icon, you should consult a screenshot to determine the coordinates of the element before moving the cursor.
* If you tried clicking on a program or link but it failed to load, even after waiting, try adjusting your click location so that the tip of the cursor visually falls on the element that you want to click.
* Make sure to click any buttons, links, icons, etc with the cursor tip in the center of the element. Don't click boxes on their edges unless asked.`,
      inputSchema: {
        type: "object",
        properties: {
          action: {
            type: "string",
            enum: [
              "left_click",
              "right_click",
              "type",
              "screenshot",
              "wait",
              "scroll",
              "key",
              "left_click_drag",
              "double_click",
              "triple_click",
              "zoom",
              "scroll_to",
              "hover"
            ],
            description: "The action to perform:\n* `left_click`: Click the left mouse button at the specified coordinates.\n* `right_click`: Click the right mouse button at the specified coordinates to open context menus.\n* `double_click`: Double-click the left mouse button at the specified coordinates.\n* `triple_click`: Triple-click the left mouse button at the specified coordinates.\n* `type`: Type a string of text.\n* `screenshot`: Take a screenshot of the screen.\n* `wait`: Wait for a specified number of seconds.\n* `scroll`: Scroll up, down, left, or right at the specified coordinates.\n* `key`: Press a specific keyboard key.\n* `left_click_drag`: Drag from start_coordinate to coordinate.\n* `zoom`: Take a screenshot of a specific region for closer inspection.\n* `scroll_to`: Scroll an element into view using its element reference ID from read_page or find tools.\n* `hover`: Move the mouse cursor to the specified coordinates or element without clicking. Useful for revealing tooltips, dropdown menus, or triggering hover states."
          },
          coordinate: {
            type: "array",
            items: { type: "number" },
            minItems: 2,
            maxItems: 2,
            description: "(x, y): The x (pixels from the left edge) and y (pixels from the top edge) coordinates. Required for `left_click`, `right_click`, `double_click`, `triple_click`, and `scroll`. For `left_click_drag`, this is the end position."
          },
          text: {
            type: "string",
            description: 'The text to type (for `type` action) or the key(s) to press (for `key` action). For `key` action: Provide space-separated keys (e.g., "Backspace Backspace Delete"). Supports keyboard shortcuts using the platform\'s modifier key (use "cmd" on Mac, "ctrl" on Windows/Linux, e.g., "cmd+a" or "ctrl+a" for select all).'
          },
          duration: {
            type: "number",
            minimum: 0,
            maximum: 30,
            description: "The number of seconds to wait. Required for `wait`. Maximum 30 seconds."
          },
          scroll_direction: {
            type: "string",
            enum: ["up", "down", "left", "right"],
            description: "The direction to scroll. Required for `scroll`."
          },
          scroll_amount: {
            type: "number",
            minimum: 1,
            maximum: 10,
            description: "The number of scroll wheel ticks. Optional for `scroll`, defaults to 3."
          },
          start_coordinate: {
            type: "array",
            items: { type: "number" },
            minItems: 2,
            maxItems: 2,
            description: "(x, y): The starting coordinates for `left_click_drag`."
          },
          region: {
            type: "array",
            items: { type: "number" },
            minItems: 4,
            maxItems: 4,
            description: "(x0, y0, x1, y1): The rectangular region to capture for `zoom`. Coordinates define a rectangle from top-left (x0, y0) to bottom-right (x1, y1) in pixels from the viewport origin. Required for `zoom` action. Useful for inspecting small UI elements like icons, buttons, or text."
          },
          repeat: {
            type: "number",
            minimum: 1,
            maximum: 100,
            description: "Number of times to repeat the key sequence. Only applicable for `key` action. Must be a positive integer between 1 and 100. Default is 1. Useful for navigation tasks like pressing arrow keys multiple times."
          },
          ref: {
            type: "string",
            description: 'Element reference ID from read_page or find tools (e.g., "ref_1", "ref_2"). Required for `scroll_to` action. Can be used as alternative to `coordinate` for click actions.'
          },
          modifiers: {
            type: "string",
            description: 'Modifier keys for click actions. Supports: "ctrl", "shift", "alt", "cmd" (or "meta"), "win" (or "windows"). Can be combined with "+" (e.g., "ctrl+shift", "cmd+alt"). Optional.'
          },
          tabId: {
            type: "number",
            description: "Tab ID to execute the action on. Must be a tab in the current group. Use tabs_context_mcp first if you don't have a valid tab ID."
          }
        },
        required: ["action", "tabId"]
      }
    },
    {
      name: "navigate",
      description: "Navigate to a URL, or go forward/back in browser history. If you don't have a valid tab ID, use tabs_context_mcp first to get available tabs.",
      inputSchema: {
        type: "object",
        properties: {
          url: {
            type: "string",
            description: 'The URL to navigate to. Can be provided with or without protocol (defaults to https://). Use "forward" to go forward in history or "back" to go back in history.'
          },
          tabId: {
            type: "number",
            description: "Tab ID to navigate. Must be a tab in the current group. Use tabs_context_mcp first if you don't have a valid tab ID."
          }
        },
        required: ["url", "tabId"]
      }
    },
    {
      name: "resize_window",
      description: "Resize the current browser window to specified dimensions. Useful for testing responsive designs or setting up specific screen sizes. If you don't have a valid tab ID, use tabs_context_mcp first to get available tabs.",
      inputSchema: {
        type: "object",
        properties: {
          width: {
            type: "number",
            description: "Target window width in pixels"
          },
          height: {
            type: "number",
            description: "Target window height in pixels"
          },
          tabId: {
            type: "number",
            description: "Tab ID to get the window for. Must be a tab in the current group. Use tabs_context_mcp first if you don't have a valid tab ID."
          }
        },
        required: ["width", "height", "tabId"]
      }
    },
    {
      name: "gif_creator",
      description: "Manage GIF recording and export for browser automation sessions. Control when to start/stop recording browser actions (clicks, scrolls, navigation), then export as an animated GIF with visual overlays (click indicators, action labels, progress bar, watermark). All operations are scoped to the tab's group. When starting recording, take a screenshot immediately after to capture the initial state as the first frame. When stopping recording, take a screenshot immediately before to capture the final state as the last frame. For export, either provide 'coordinate' to drag/drop upload to a page element, or set 'download: true' to download the GIF.",
      inputSchema: {
        type: "object",
        properties: {
          action: {
            type: "string",
            enum: ["start_recording", "stop_recording", "export", "clear"],
            description: "Action to perform: 'start_recording' (begin capturing), 'stop_recording' (stop capturing but keep frames), 'export' (generate and export GIF), 'clear' (discard frames)"
          },
          tabId: {
            type: "number",
            description: "Tab ID to identify which tab group this operation applies to"
          },
          download: {
            type: "boolean",
            description: "Always set this to true for the 'export' action only. This causes the gif to be downloaded in the browser."
          },
          filename: {
            type: "string",
            description: "Optional filename for exported GIF (default: 'recording-[timestamp].gif'). For 'export' action only."
          },
          options: {
            type: "object",
            description: "Optional GIF enhancement options for 'export' action. Properties: showClickIndicators (bool), showDragPaths (bool), showActionLabels (bool), showProgressBar (bool), showWatermark (bool), quality (number 1-30). All default to true except quality (default: 10).",
            properties: {
              showClickIndicators: {
                type: "boolean",
                description: "Show orange circles at click locations (default: true)"
              },
              showDragPaths: {
                type: "boolean",
                description: "Show red arrows for drag actions (default: true)"
              },
              showActionLabels: {
                type: "boolean",
                description: "Show black labels describing actions (default: true)"
              },
              showProgressBar: {
                type: "boolean",
                description: "Show orange progress bar at bottom (default: true)"
              },
              showWatermark: {
                type: "boolean",
                description: "Show MiMo logo watermark (default: true)"
              },
              quality: {
                type: "number",
                description: "GIF compression quality, 1-30 (lower = better quality, slower encoding). Default: 10"
              }
            }
          }
        },
        required: ["action", "tabId"]
      }
    },
    {
      name: "upload_image",
      description: "Upload a previously captured screenshot or user-uploaded image to a file input or drag & drop target. Supports two approaches: (1) ref - for targeting specific elements, especially hidden file inputs, (2) coordinate - for drag & drop to visible locations like Google Docs. Provide either ref or coordinate, not both.",
      inputSchema: {
        type: "object",
        properties: {
          imageId: {
            type: "string",
            description: "ID of a previously captured screenshot (from the computer tool's screenshot action) or a user-uploaded image"
          },
          ref: {
            type: "string",
            description: 'Element reference ID from read_page or find tools (e.g., "ref_1", "ref_2"). Use this for file inputs (especially hidden ones) or specific elements. Provide either ref or coordinate, not both.'
          },
          coordinate: {
            type: "array",
            items: {
              type: "number"
            },
            description: "Viewport coordinates [x, y] for drag & drop to a visible location. Use this for drag & drop targets like Google Docs. Provide either ref or coordinate, not both."
          },
          tabId: {
            type: "number",
            description: "Tab ID where the target element is located. This is where the image will be uploaded to."
          },
          filename: {
            type: "string",
            description: 'Optional filename for the uploaded file (default: "image.png")'
          }
        },
        required: ["imageId", "tabId"]
      }
    },
    {
      name: "get_page_text",
      description: "Extract raw text content from the page, prioritizing article content. Ideal for reading articles, blog posts, or other text-heavy pages. Returns plain text without HTML formatting. If you don't have a valid tab ID, use tabs_context_mcp first to get available tabs.",
      inputSchema: {
        type: "object",
        properties: {
          tabId: {
            type: "number",
            description: "Tab ID to extract text from. Must be a tab in the current group. Use tabs_context_mcp first if you don't have a valid tab ID."
          }
        },
        required: ["tabId"]
      }
    },
    {
      name: "tabs_context_mcp",
      title: "Tabs Context",
      description: "Get context information about the current MCP tab group. Returns all tab IDs inside the group if it exists. CRITICAL: You must get the context at least once before using other browser automation tools so you know what tabs exist. Each new conversation should create its own new tab (using tabs_create_mcp) rather than reusing existing tabs, unless the user explicitly asks to use an existing tab.",
      inputSchema: {
        type: "object",
        properties: {
          createIfEmpty: {
            type: "boolean",
            description: "Creates a new MCP tab group if none exists, creates a new Window with a new tab group containing an empty tab (which can be used for this conversation). If a MCP tab group already exists, this parameter has no effect."
          }
        },
        required: []
      }
    },
    {
      name: "tabs_create_mcp",
      title: "Tabs Create",
      description: "Creates a new empty tab in the MCP tab group. CRITICAL: You must get the context using tabs_context_mcp at least once before using other browser automation tools so you know what tabs exist.",
      inputSchema: {
        type: "object",
        properties: {},
        required: []
      }
    },
    {
      name: "update_plan",
      description: "Present a plan to the user for approval before taking actions. The user will see the domains you intend to visit and your approach. Once approved, you can proceed with actions on the approved domains without additional permission prompts.",
      inputSchema: {
        type: "object",
        properties: {
          domains: {
            type: "array",
            items: { type: "string" },
            description: "List of domains you will visit (e.g., ['github.com', 'stackoverflow.com']). These domains will be approved for the session when the user accepts the plan."
          },
          approach: {
            type: "array",
            items: { type: "string" },
            description: "High-level description of what you will do. Focus on outcomes and key actions, not implementation details. Be concise - aim for 3-7 items."
          }
        },
        required: ["domains", "approach"]
      }
    },
    {
      name: "read_console_messages",
      description: "Read browser console messages (console.log, console.error, console.warn, etc.) from a specific tab. Useful for debugging JavaScript errors, viewing application logs, or understanding what's happening in the browser console. Returns console messages from the current domain only. If you don't have a valid tab ID, use tabs_context_mcp first to get available tabs. IMPORTANT: Always provide a pattern to filter messages - without a pattern, you may get too many irrelevant messages.",
      inputSchema: {
        type: "object",
        properties: {
          tabId: {
            type: "number",
            description: "Tab ID to read console messages from. Must be a tab in the current group. Use tabs_context_mcp first if you don't have a valid tab ID."
          },
          onlyErrors: {
            type: "boolean",
            description: "If true, only return error and exception messages. Default is false (return all message types)."
          },
          clear: {
            type: "boolean",
            description: "If true, clear the console messages after reading to avoid duplicates on subsequent calls. Default is false."
          },
          pattern: {
            type: "string",
            description: "Regex pattern to filter console messages. Only messages matching this pattern will be returned (e.g., 'error|warning' to find errors and warnings, 'MyApp' to filter app-specific logs). You should always provide a pattern to avoid getting too many irrelevant messages."
          },
          limit: {
            type: "number",
            description: "Maximum number of messages to return. Defaults to 100. Increase only if you need more results."
          }
        },
        required: ["tabId"]
      }
    },
    {
      name: "read_network_requests",
      description: "Read HTTP network requests (XHR, Fetch, documents, images, etc.) from a specific tab. Useful for debugging API calls, monitoring network activity, or understanding what requests a page is making. Returns all network requests made by the current page, including cross-origin requests. Requests are automatically cleared when the page navigates to a different domain. If you don't have a valid tab ID, use tabs_context_mcp first to get available tabs.",
      inputSchema: {
        type: "object",
        properties: {
          tabId: {
            type: "number",
            description: "Tab ID to read network requests from. Must be a tab in the current group. Use tabs_context_mcp first if you don't have a valid tab ID."
          },
          urlPattern: {
            type: "string",
            description: "Optional URL pattern to filter requests. Only requests whose URL contains this string will be returned (e.g., '/api/' to filter API calls, 'example.com' to filter by domain)."
          },
          clear: {
            type: "boolean",
            description: "If true, clear the network requests after reading to avoid duplicates on subsequent calls. Default is false."
          },
          limit: {
            type: "number",
            description: "Maximum number of requests to return. Defaults to 100. Increase only if you need more results."
          }
        },
        required: ["tabId"]
      }
    },
    {
      name: "shortcuts_list",
      description: "List all available shortcuts and workflows (shortcuts and workflows are interchangeable). Returns shortcuts with their commands, descriptions, and whether they are workflows. Use shortcuts_execute to run a shortcut or workflow.",
      inputSchema: {
        type: "object",
        properties: {
          tabId: {
            type: "number",
            description: "Tab ID to list shortcuts from. Must be a tab in the current group. Use tabs_context_mcp first if you don't have a valid tab ID."
          }
        },
        required: ["tabId"]
      }
    },
    {
      name: "shortcuts_execute",
      description: "Execute a shortcut or workflow by running it in a new sidepanel window using the current tab (shortcuts and workflows are interchangeable). Use shortcuts_list first to see available shortcuts. This starts the execution and returns immediately - it does not wait for completion.",
      inputSchema: {
        type: "object",
        properties: {
          tabId: {
            type: "number",
            description: "Tab ID to execute the shortcut on. Must be a tab in the current group. Use tabs_context_mcp first if you don't have a valid tab ID."
          },
          shortcutId: {
            type: "string",
            description: "The ID of the shortcut to execute"
          },
          command: {
            type: "string",
            description: "The command name of the shortcut to execute (e.g., 'debug', 'summarize'). Do not include the leading slash."
          }
        },
        required: ["tabId"]
      }
    },
    {
      name: "switch_browser",
      description: "Switch which Chrome browser is used for browser automation. Call this when the user wants to connect to a different Chrome browser. Broadcasts a connection request to all Chrome browsers with the extension installed \u2014 the user clicks 'Connect' in the desired browser.",
      inputSchema: {
        type: "object",
        properties: {},
        required: []
      }
    }
  ];
});

// packages/@ant/claude-for-chrome-mcp/src/mcpSocketPool.ts
class McpSocketPool {
  clients = new Map;
  tabRoutes = new Map;
  context;
  notificationHandler = null;
  constructor(context) {
    this.context = context;
  }
  setNotificationHandler(handler) {
    this.notificationHandler = handler;
    for (const client of this.clients.values()) {
      client.setNotificationHandler(handler);
    }
  }
  async ensureConnected() {
    const { logger, serverName } = this.context;
    this.refreshClients();
    const connectPromises = [];
    for (const client of this.clients.values()) {
      if (!client.isConnected()) {
        connectPromises.push(client.ensureConnected().catch(() => false));
      }
    }
    if (connectPromises.length > 0) {
      await Promise.all(connectPromises);
    }
    const connectedCount = this.getConnectedClients().length;
    if (connectedCount === 0) {
      logger.info(`[${serverName}] No connected sockets in pool`);
      return false;
    }
    logger.info(`[${serverName}] Socket pool: ${connectedCount} connected`);
    return true;
  }
  async callTool(name, args, _permissionOverrides) {
    if (name === "tabs_context_mcp") {
      return this.callTabsContext(args);
    }
    const tabId = args.tabId;
    if (tabId !== undefined) {
      const socketPath = this.tabRoutes.get(tabId);
      if (socketPath) {
        const client = this.clients.get(socketPath);
        if (client?.isConnected()) {
          return client.callTool(name, args);
        }
      }
    }
    const connected = this.getConnectedClients();
    if (connected.length === 0) {
      throw new SocketConnectionError(`[${this.context.serverName}] No connected sockets available`);
    }
    return connected[0].callTool(name, args);
  }
  async setPermissionMode(mode, allowedDomains) {
    const connected = this.getConnectedClients();
    await Promise.all(connected.map((client) => client.setPermissionMode(mode, allowedDomains)));
  }
  isConnected() {
    return this.getConnectedClients().length > 0;
  }
  disconnect() {
    for (const client of this.clients.values()) {
      client.disconnect();
    }
    this.clients.clear();
    this.tabRoutes.clear();
  }
  getConnectedClients() {
    return [...this.clients.values()].filter((c) => c.isConnected());
  }
  async callTabsContext(args) {
    const { logger, serverName } = this.context;
    const connected = this.getConnectedClients();
    if (connected.length === 0) {
      throw new SocketConnectionError(`[${serverName}] No connected sockets available`);
    }
    if (connected.length === 1) {
      const result = await connected[0].callTool("tabs_context_mcp", args);
      this.updateTabRoutes(result, this.getSocketPathForClient(connected[0]));
      return result;
    }
    const results = await Promise.allSettled(connected.map(async (client) => {
      const result = await client.callTool("tabs_context_mcp", args);
      const socketPath = this.getSocketPathForClient(client);
      return { result, socketPath };
    }));
    const mergedTabs = [];
    this.tabRoutes.clear();
    for (const settledResult of results) {
      if (settledResult.status !== "fulfilled") {
        logger.info(`[${serverName}] tabs_context_mcp failed on one socket: ${settledResult.reason}`);
        continue;
      }
      const { result, socketPath } = settledResult.value;
      this.updateTabRoutes(result, socketPath);
      const tabs = this.extractTabs(result);
      if (tabs) {
        mergedTabs.push(...tabs);
      }
    }
    if (mergedTabs.length > 0) {
      const tabListText = mergedTabs.map((t) => {
        const tab = t;
        return `  \u2022 tabId ${tab.tabId}: "${tab.title}" (${tab.url})`;
      }).join(`
`);
      return {
        result: {
          content: [
            {
              type: "text",
              text: JSON.stringify({ availableTabs: mergedTabs })
            },
            {
              type: "text",
              text: `

Tab Context:
- Available tabs:
${tabListText}`
            }
          ]
        }
      };
    }
    for (const settledResult of results) {
      if (settledResult.status === "fulfilled") {
        return settledResult.value.result;
      }
    }
    throw new SocketConnectionError(`[${serverName}] All sockets failed for tabs_context_mcp`);
  }
  updateTabRoutes(result, socketPath) {
    const tabs = this.extractTabs(result);
    if (!tabs)
      return;
    for (const tab of tabs) {
      if (typeof tab === "object" && tab !== null && "tabId" in tab) {
        const tabId = tab.tabId;
        this.tabRoutes.set(tabId, socketPath);
      }
    }
  }
  extractTabs(result) {
    if (!result || typeof result !== "object")
      return null;
    const asResponse = result;
    const content = asResponse.result?.content;
    if (!content || !Array.isArray(content))
      return null;
    for (const item of content) {
      if (item.type === "text" && item.text) {
        try {
          const parsed = JSON.parse(item.text);
          if (Array.isArray(parsed))
            return parsed;
          if (parsed && Array.isArray(parsed.availableTabs)) {
            return parsed.availableTabs;
          }
        } catch {}
      }
    }
    return null;
  }
  getSocketPathForClient(client) {
    for (const [path, c] of this.clients.entries()) {
      if (c === client)
        return path;
    }
    return "";
  }
  refreshClients() {
    const socketPaths = this.getAvailableSocketPaths();
    const { logger, serverName } = this.context;
    for (const path of socketPaths) {
      if (!this.clients.has(path)) {
        logger.info(`[${serverName}] Adding socket to pool: ${path}`);
        const clientContext = {
          ...this.context,
          socketPath: path,
          getSocketPath: undefined,
          getSocketPaths: undefined
        };
        const client = createMcpSocketClient(clientContext);
        client.disableAutoReconnect = true;
        if (this.notificationHandler) {
          client.setNotificationHandler(this.notificationHandler);
        }
        this.clients.set(path, client);
      }
    }
    for (const [path, client] of this.clients.entries()) {
      if (!socketPaths.includes(path)) {
        logger.info(`[${serverName}] Removing stale socket from pool: ${path}`);
        client.disconnect();
        this.clients.delete(path);
        for (const [tabId, socketPath] of this.tabRoutes.entries()) {
          if (socketPath === path) {
            this.tabRoutes.delete(tabId);
          }
        }
      }
    }
  }
  getAvailableSocketPaths() {
    return this.context.getSocketPaths?.() ?? [];
  }
}
function createMcpSocketPool(context) {
  return new McpSocketPool(context);
}
var init_mcpSocketPool = __esm(() => {
  init_mcpSocketClient();
});

// packages/@ant/claude-for-chrome-mcp/src/toolCalls.ts
async function handleToolCallConnected(context, socketClient, name, args, permissionOverrides) {
  const response = await socketClient.callTool(name, args, permissionOverrides);
  context.logger.silly(`[${context.serverName}] Received result from socket bridge: ${JSON.stringify(response)}`);
  if (response === null || response === undefined) {
    return {
      content: [{ type: "text", text: "Tool execution completed" }]
    };
  }
  const { result, error } = response;
  const contentData = error || result;
  const isError = !!error;
  if (!contentData) {
    return {
      content: [{ type: "text", text: "Tool execution completed" }]
    };
  }
  if (isError && isAuthenticationError(contentData.content)) {
    context.onAuthenticationError();
  }
  const { content } = contentData;
  if (content && Array.isArray(content)) {
    if (isError) {
      return {
        content: content.map((item) => {
          if (typeof item === "object" && item !== null && "type" in item) {
            return item;
          }
          return { type: "text", text: String(item) };
        }),
        isError: true
      };
    }
    const convertedContent = content.map((item) => {
      if (typeof item === "object" && item !== null && "type" in item && "source" in item) {
        const typedItem = item;
        if (typedItem.type === "image" && typeof typedItem.source === "object" && typedItem.source !== null && "data" in typedItem.source) {
          return {
            type: "image",
            data: typedItem.source.data,
            mimeType: "media_type" in typedItem.source ? typedItem.source.media_type || "image/png" : "image/png"
          };
        }
      }
      if (typeof item === "object" && item !== null && "type" in item) {
        return item;
      }
      return { type: "text", text: String(item) };
    });
    return {
      content: convertedContent,
      isError
    };
  }
  if (typeof content === "string") {
    return {
      content: [{ type: "text", text: content }],
      isError
    };
  }
  context.logger.warn(`[${context.serverName}] Unexpected result format from socket bridge`, response);
  return {
    content: [{ type: "text", text: JSON.stringify(response) }],
    isError
  };
}
function handleToolCallDisconnected(context) {
  const text = context.onToolCallDisconnected();
  return {
    content: [{ type: "text", text }]
  };
}
async function handleSetPermissionMode(socketClient, args) {
  const validModes = [
    "ask",
    "skip_all_permission_checks",
    "follow_a_plan"
  ];
  const mode = args.mode;
  const permissionMode = mode && validModes.includes(mode) ? mode : "ask";
  if (socketClient.setPermissionMode) {
    await socketClient.setPermissionMode(permissionMode, args.allowed_domains);
  }
  return {
    content: [
      { type: "text", text: `Permission mode set to: ${permissionMode}` }
    ]
  };
}
async function handleSwitchBrowser(context, socketClient) {
  if (!context.bridgeConfig) {
    return {
      content: [
        {
          type: "text",
          text: "Browser switching is only available with bridge connections."
        }
      ],
      isError: true
    };
  }
  const isConnected = await socketClient.ensureConnected();
  if (!isConnected) {
    return handleToolCallDisconnected(context);
  }
  const result = await socketClient.switchBrowser?.() ?? null;
  if (result === "no_other_browsers") {
    return {
      content: [
        {
          type: "text",
          text: "No other browsers available to switch to. Open Chrome with the MiMo extension in another browser to switch."
        }
      ],
      isError: true
    };
  }
  if (result) {
    return {
      content: [
        { type: "text", text: `Connected to browser "${result.name}".` }
      ]
    };
  }
  return {
    content: [
      {
        type: "text",
        text: "No browser responded within the timeout. Make sure Chrome is open with the MiMo extension installed, then try again."
      }
    ],
    isError: true
  };
}
function isAuthenticationError(content) {
  const errorText = Array.isArray(content) ? content.map((item) => {
    if (typeof item === "string")
      return item;
    if (typeof item === "object" && item !== null && "text" in item && typeof item.text === "string") {
      return item.text;
    }
    return "";
  }).join(" ") : String(content);
  return errorText.toLowerCase().includes("re-authenticated");
}
var handleToolCall = async (context, socketClient, name, args, permissionOverrides) => {
  if (name === "set_permission_mode") {
    return handleSetPermissionMode(socketClient, args);
  }
  if (name === "switch_browser") {
    return handleSwitchBrowser(context, socketClient);
  }
  try {
    const isConnected = await socketClient.ensureConnected();
    context.logger.silly(`[${context.serverName}] Server is connected: ${isConnected}. Received tool call: ${name} with args: ${JSON.stringify(args)}.`);
    if (isConnected) {
      return await handleToolCallConnected(context, socketClient, name, args, permissionOverrides);
    }
    return handleToolCallDisconnected(context);
  } catch (error) {
    context.logger.info(`[${context.serverName}] Error calling tool:`, error);
    if (error instanceof SocketConnectionError) {
      return handleToolCallDisconnected(context);
    }
    return {
      content: [
        {
          type: "text",
          text: `Error calling tool, please try again. : ${error instanceof Error ? error.message : String(error)}`
        }
      ],
      isError: true
    };
  }
};
var init_toolCalls = __esm(() => {
  init_mcpSocketClient();
});

// packages/@ant/claude-for-chrome-mcp/src/mcpServer.ts
function createChromeSocketClient(context) {
  return context.bridgeConfig ? createBridgeClient(context) : context.getSocketPaths ? createMcpSocketPool(context) : createMcpSocketClient(context);
}
function createClaudeForChromeMcpServer(context, existingSocketClient) {
  const { serverName, logger } = context;
  const socketClient = existingSocketClient ?? createChromeSocketClient(context);
  const server = new Server({
    name: serverName,
    version: "1.0.0"
  }, {
    capabilities: {
      tools: {},
      logging: {}
    }
  });
  server.setRequestHandler(ListToolsRequestSchema, async () => {
    if (context.isDisabled?.()) {
      return { tools: [] };
    }
    return {
      tools: context.bridgeConfig ? BROWSER_TOOLS : BROWSER_TOOLS.filter((t) => t.name !== "switch_browser")
    };
  });
  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    logger.info(`[${serverName}] Executing tool: ${request.params.name}`);
    return handleToolCall(context, socketClient, request.params.name, request.params.arguments || {});
  });
  socketClient.setNotificationHandler((notification) => {
    logger.info(`[${serverName}] Forwarding MCP notification: ${notification.method}`);
    server.notification({
      method: notification.method,
      params: notification.params
    }).catch((error) => {
      logger.info(`[${serverName}] Failed to forward MCP notification: ${error.message}`);
    });
  });
  return server;
}
var init_mcpServer = __esm(() => {
  init_server();
  init_types();
  init_bridgeClient();
  init_browserTools();
  init_mcpSocketClient();
  init_mcpSocketPool();
  init_toolCalls();
});

// packages/@ant/claude-for-chrome-mcp/src/index.ts
var init_src = __esm(() => {
  init_bridgeClient();
  init_browserTools();
  init_mcpServer();
  init_types2();
});

export { localPlatformLabel, BridgeClient, createBridgeClient, BROWSER_TOOLS, createChromeSocketClient, createClaudeForChromeMcpServer, init_src };
