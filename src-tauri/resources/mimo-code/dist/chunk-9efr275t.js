// @bun
import {
  SerialBatchEventUploader
} from "./chunk-acj4r8ee.js";
import {
  CircularBuffer,
  init_CircularBuffer
} from "./chunk-ktw919wt.js";
import {
  getSessionIngressAuthToken,
  init_rcDebugLog,
  init_sessionActivity,
  init_sessionIngressAuth,
  rcLog,
  registerSessionActivityCallback,
  unregisterSessionActivityCallback
} from "./chunk-chmfqs2y.js";
import {
  getWebSocketProxyAgent,
  getWebSocketProxyUrl,
  getWebSocketTLSOptions,
  init_mtls,
  init_proxy
} from "./chunk-t7f7dp4k.js";
import {
  init_analytics,
  logEvent
} from "./chunk-f2mhrmww.js";
import {
  init_diagLogs,
  logForDiagnosticsNoPII
} from "./chunk-t6jhrn34.js";
import {
  init_debug,
  init_slowOperations,
  jsonStringify,
  logForDebugging
} from "./chunk-rpbc3b7k.js";
import {
  init_envUtils,
  isEnvTruthy
} from "./chunk-hxhwzgnn.js";
import {
  axios_default,
  init_axios
} from "./chunk-3v4d4h0t.js";
import {
  __require
} from "./chunk-qp2qdcda.js";

// src/cli/transports/HybridTransport.ts
init_axios();
init_debug();
init_rcDebugLog();
init_diagLogs();
init_sessionIngressAuth();

// src/cli/transports/WebSocketTransport.ts
init_analytics();
init_CircularBuffer();
init_debug();
init_rcDebugLog();
init_diagLogs();
init_envUtils();
init_mtls();
init_proxy();
init_sessionActivity();
init_slowOperations();
var KEEP_ALIVE_FRAME = `{"type":"keep_alive"}
`;
var DEFAULT_MAX_BUFFER_SIZE = 1000;
var DEFAULT_BASE_RECONNECT_DELAY = 1000;
var DEFAULT_MAX_RECONNECT_DELAY = 30000;
var DEFAULT_RECONNECT_GIVE_UP_MS = 600000;
var DEFAULT_PING_INTERVAL = 1e4;
var DEFAULT_KEEPALIVE_INTERVAL = 120000;
var SLEEP_DETECTION_THRESHOLD_MS = DEFAULT_MAX_RECONNECT_DELAY * 2;
var PERMANENT_CLOSE_CODES = new Set([
  1002,
  4001,
  4003
]);

class WebSocketTransport {
  ws = null;
  lastSentId = null;
  url;
  state = "idle";
  onData;
  onCloseCallback;
  onConnectCallback;
  headers;
  sessionId;
  autoReconnect;
  isBridge;
  reconnectAttempts = 0;
  reconnectStartTime = null;
  reconnectTimer = null;
  lastReconnectAttemptTime = null;
  lastActivityTime = 0;
  pingInterval = null;
  pongReceived = true;
  keepAliveInterval = null;
  messageBuffer;
  isBunWs = false;
  connectStartTime = 0;
  refreshHeaders;
  constructor(url, headers = {}, sessionId, refreshHeaders, options) {
    this.url = url;
    this.headers = headers;
    this.sessionId = sessionId;
    this.refreshHeaders = refreshHeaders;
    this.autoReconnect = options?.autoReconnect ?? true;
    this.isBridge = options?.isBridge ?? false;
    this.messageBuffer = new CircularBuffer(DEFAULT_MAX_BUFFER_SIZE);
  }
  async connect() {
    if (this.state !== "idle" && this.state !== "reconnecting") {
      logForDebugging(`WebSocketTransport: Cannot connect, current state is ${this.state}`, { level: "error" });
      logForDiagnosticsNoPII("error", "cli_websocket_connect_failed");
      return;
    }
    this.state = "reconnecting";
    this.connectStartTime = Date.now();
    logForDebugging(`WebSocketTransport: Opening ${this.url.href}`);
    logForDiagnosticsNoPII("info", "cli_websocket_connect_opening");
    const headers = { ...this.headers };
    if (this.lastSentId) {
      headers["X-Last-Request-Id"] = this.lastSentId;
      logForDebugging(`WebSocketTransport: Adding X-Last-Request-Id header: ${this.lastSentId}`);
    }
    if (typeof Bun !== "undefined") {
      const ws = new globalThis.WebSocket(this.url.href, {
        headers,
        proxy: getWebSocketProxyUrl(this.url.href),
        tls: getWebSocketTLSOptions() || undefined
      });
      this.ws = ws;
      this.isBunWs = true;
      ws.addEventListener("open", this.onBunOpen);
      ws.addEventListener("message", this.onBunMessage);
      ws.addEventListener("error", this.onBunError);
      ws.addEventListener("close", this.onBunClose);
      ws.addEventListener("pong", this.onPong);
    } else {
      const { default: WS } = await import("ws");
      const ws = new WS(this.url.href, {
        headers,
        agent: getWebSocketProxyAgent(this.url.href),
        ...getWebSocketTLSOptions()
      });
      this.ws = ws;
      this.isBunWs = false;
      ws.on("open", this.onNodeOpen);
      ws.on("message", this.onNodeMessage);
      ws.on("error", this.onNodeError);
      ws.on("close", this.onNodeClose);
      ws.on("pong", this.onPong);
    }
  }
  onBunOpen = () => {
    this.handleOpenEvent();
    if (this.lastSentId) {
      this.replayBufferedMessages("");
    }
  };
  onBunMessage = (event) => {
    const message = typeof event.data === "string" ? event.data : String(event.data);
    this.lastActivityTime = Date.now();
    logForDiagnosticsNoPII("info", "cli_websocket_message_received", {
      length: message.length
    });
    if (this.onData) {
      this.onData(message);
    }
  };
  onBunError = () => {
    logForDebugging("WebSocketTransport: Error", {
      level: "error"
    });
    logForDiagnosticsNoPII("error", "cli_websocket_connect_error");
  };
  onBunClose = (event) => {
    const isClean = event.code === 1000 || event.code === 1001;
    logForDebugging(`WebSocketTransport: Closed: ${event.code}`, isClean ? undefined : { level: "error" });
    logForDiagnosticsNoPII("error", "cli_websocket_connect_closed");
    this.handleConnectionError(event.code);
  };
  onNodeOpen = () => {
    const ws = this.ws;
    this.handleOpenEvent();
    if (!ws)
      return;
    const nws = ws;
    const upgradeResponse = nws.upgradeReq;
    if (upgradeResponse?.headers?.["x-last-request-id"]) {
      const serverLastId = upgradeResponse.headers["x-last-request-id"];
      this.replayBufferedMessages(serverLastId);
    }
  };
  onNodeMessage = (data) => {
    const message = data.toString();
    this.lastActivityTime = Date.now();
    logForDiagnosticsNoPII("info", "cli_websocket_message_received", {
      length: message.length
    });
    if (this.onData) {
      this.onData(message);
    }
  };
  onNodeError = (err) => {
    logForDebugging(`WebSocketTransport: Error: ${err.message}`, {
      level: "error"
    });
    logForDiagnosticsNoPII("error", "cli_websocket_connect_error");
  };
  onNodeClose = (code, _reason) => {
    const isClean = code === 1000 || code === 1001;
    logForDebugging(`WebSocketTransport: Closed: ${code}`, isClean ? undefined : { level: "error" });
    logForDiagnosticsNoPII("error", "cli_websocket_connect_closed");
    this.handleConnectionError(code);
  };
  onPong = () => {
    this.pongReceived = true;
  };
  handleOpenEvent() {
    const connectDuration = Date.now() - this.connectStartTime;
    logForDebugging("WebSocketTransport: Connected");
    logForDiagnosticsNoPII("info", "cli_websocket_connect_connected", {
      duration_ms: connectDuration
    });
    if (this.isBridge && this.reconnectStartTime !== null) {
      logEvent("tengu_ws_transport_reconnected", {
        attempts: this.reconnectAttempts,
        downtimeMs: Date.now() - this.reconnectStartTime
      });
    }
    this.reconnectAttempts = 0;
    this.reconnectStartTime = null;
    this.lastReconnectAttemptTime = null;
    this.lastActivityTime = Date.now();
    this.state = "connected";
    this.onConnectCallback?.();
    this.startPingInterval();
    this.startKeepaliveInterval();
    registerSessionActivityCallback(() => {
      this.write({ type: "keep_alive" });
    });
  }
  sendLine(line) {
    if (!this.ws || this.state !== "connected") {
      logForDebugging("WebSocketTransport: Not connected");
      logForDiagnosticsNoPII("info", "cli_websocket_send_not_connected");
      return false;
    }
    try {
      this.ws.send(line);
      this.lastActivityTime = Date.now();
      return true;
    } catch (error) {
      logForDebugging(`WebSocketTransport: Failed to send: ${error}`, {
        level: "error"
      });
      logForDiagnosticsNoPII("error", "cli_websocket_send_error");
      this.handleConnectionError();
      return false;
    }
  }
  removeWsListeners(ws) {
    if (this.isBunWs) {
      const nws = ws;
      nws.removeEventListener("open", this.onBunOpen);
      nws.removeEventListener("message", this.onBunMessage);
      nws.removeEventListener("error", this.onBunError);
      nws.removeEventListener("close", this.onBunClose);
      nws.removeEventListener("pong", this.onPong);
    } else {
      const nws = ws;
      nws.off("open", this.onNodeOpen);
      nws.off("message", this.onNodeMessage);
      nws.off("error", this.onNodeError);
      nws.off("close", this.onNodeClose);
      nws.off("pong", this.onPong);
    }
  }
  doDisconnect() {
    this.stopPingInterval();
    this.stopKeepaliveInterval();
    unregisterSessionActivityCallback();
    if (this.ws) {
      this.removeWsListeners(this.ws);
      this.ws.close();
      this.ws = null;
    }
  }
  handleConnectionError(closeCode) {
    rcLog(`WS handleConnectionError: code=${closeCode} state=${this.state} url=${this.url.href.replace(/token=[^&]+/, "token=***")} msSinceLastActivity=${this.lastActivityTime > 0 ? Date.now() - this.lastActivityTime : -1} reconnectAttempts=${this.reconnectAttempts}`);
    logForDebugging(`WebSocketTransport: Disconnected from ${this.url.href}` + (closeCode != null ? ` (code ${closeCode})` : ""));
    logForDiagnosticsNoPII("info", "cli_websocket_disconnected");
    if (this.isBridge) {
      logEvent("tengu_ws_transport_closed", {
        closeCode,
        msSinceLastActivity: this.lastActivityTime > 0 ? Date.now() - this.lastActivityTime : -1,
        wasConnected: this.state === "connected",
        reconnectAttempts: this.reconnectAttempts
      });
    }
    this.doDisconnect();
    if (this.state === "closing" || this.state === "closed")
      return;
    let headersRefreshed = false;
    if (closeCode === 4003 && this.refreshHeaders) {
      const freshHeaders = this.refreshHeaders();
      if (freshHeaders.Authorization !== this.headers.Authorization) {
        Object.assign(this.headers, freshHeaders);
        headersRefreshed = true;
        logForDebugging("WebSocketTransport: 4003 received but headers refreshed, scheduling reconnect");
        logForDiagnosticsNoPII("info", "cli_websocket_4003_token_refreshed");
      }
    }
    if (closeCode != null && PERMANENT_CLOSE_CODES.has(closeCode) && !headersRefreshed) {
      logForDebugging(`WebSocketTransport: Permanent close code ${closeCode}, not reconnecting`, { level: "error" });
      logForDiagnosticsNoPII("error", "cli_websocket_permanent_close", {
        closeCode
      });
      this.state = "closed";
      this.onCloseCallback?.(closeCode);
      return;
    }
    if (!this.autoReconnect) {
      this.state = "closed";
      this.onCloseCallback?.(closeCode);
      return;
    }
    const now = Date.now();
    if (!this.reconnectStartTime) {
      this.reconnectStartTime = now;
    }
    if (this.lastReconnectAttemptTime !== null && now - this.lastReconnectAttemptTime > SLEEP_DETECTION_THRESHOLD_MS) {
      logForDebugging(`WebSocketTransport: Detected system sleep (${Math.round((now - this.lastReconnectAttemptTime) / 1000)}s gap), resetting reconnection budget`);
      logForDiagnosticsNoPII("info", "cli_websocket_sleep_detected", {
        gapMs: now - this.lastReconnectAttemptTime
      });
      this.reconnectStartTime = now;
      this.reconnectAttempts = 0;
    }
    this.lastReconnectAttemptTime = now;
    const elapsed = now - this.reconnectStartTime;
    if (elapsed < DEFAULT_RECONNECT_GIVE_UP_MS) {
      if (this.reconnectTimer) {
        clearTimeout(this.reconnectTimer);
        this.reconnectTimer = null;
      }
      if (!headersRefreshed && this.refreshHeaders) {
        const freshHeaders = this.refreshHeaders();
        Object.assign(this.headers, freshHeaders);
        logForDebugging("WebSocketTransport: Refreshed headers for reconnect");
      }
      this.state = "reconnecting";
      this.reconnectAttempts++;
      const baseDelay = Math.min(DEFAULT_BASE_RECONNECT_DELAY * 2 ** (this.reconnectAttempts - 1), DEFAULT_MAX_RECONNECT_DELAY);
      const delay = Math.max(0, baseDelay + baseDelay * 0.25 * (2 * Math.random() - 1));
      logForDebugging(`WebSocketTransport: Reconnecting in ${Math.round(delay)}ms (attempt ${this.reconnectAttempts}, ${Math.round(elapsed / 1000)}s elapsed)`);
      logForDiagnosticsNoPII("error", "cli_websocket_reconnect_attempt", {
        reconnectAttempts: this.reconnectAttempts
      });
      if (this.isBridge) {
        logEvent("tengu_ws_transport_reconnecting", {
          attempt: this.reconnectAttempts,
          elapsedMs: elapsed,
          delayMs: Math.round(delay)
        });
      }
      this.reconnectTimer = setTimeout(() => {
        this.reconnectTimer = null;
        this.connect();
      }, delay);
    } else {
      logForDebugging(`WebSocketTransport: Reconnection time budget exhausted after ${Math.round(elapsed / 1000)}s for ${this.url.href}`, { level: "error" });
      logForDiagnosticsNoPII("error", "cli_websocket_reconnect_exhausted", {
        reconnectAttempts: this.reconnectAttempts,
        elapsedMs: elapsed
      });
      this.state = "closed";
      if (this.onCloseCallback) {
        this.onCloseCallback(closeCode);
      }
    }
  }
  close() {
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
    this.stopPingInterval();
    this.stopKeepaliveInterval();
    unregisterSessionActivityCallback();
    this.state = "closing";
    this.doDisconnect();
  }
  replayBufferedMessages(lastId) {
    const messages = this.messageBuffer.toArray();
    if (messages.length === 0)
      return;
    let startIndex = 0;
    if (lastId) {
      const lastConfirmedIndex = messages.findIndex((message) => ("uuid" in message) && message.uuid === lastId);
      if (lastConfirmedIndex >= 0) {
        startIndex = lastConfirmedIndex + 1;
        const remaining = messages.slice(startIndex);
        this.messageBuffer.clear();
        this.messageBuffer.addAll(remaining);
        if (remaining.length === 0) {
          this.lastSentId = null;
        }
        logForDebugging(`WebSocketTransport: Evicted ${startIndex} confirmed messages, ${remaining.length} remaining`);
        logForDiagnosticsNoPII("info", "cli_websocket_evicted_confirmed_messages", {
          evicted: startIndex,
          remaining: remaining.length
        });
      }
    }
    const messagesToReplay = messages.slice(startIndex);
    if (messagesToReplay.length === 0) {
      logForDebugging("WebSocketTransport: No new messages to replay");
      logForDiagnosticsNoPII("info", "cli_websocket_no_messages_to_replay");
      return;
    }
    logForDebugging(`WebSocketTransport: Replaying ${messagesToReplay.length} buffered messages`);
    logForDiagnosticsNoPII("info", "cli_websocket_messages_to_replay", {
      count: messagesToReplay.length
    });
    for (const message of messagesToReplay) {
      const line = jsonStringify(message) + `
`;
      const success = this.sendLine(line);
      if (!success) {
        this.handleConnectionError();
        break;
      }
    }
  }
  isConnectedStatus() {
    return this.state === "connected";
  }
  isClosedStatus() {
    return this.state === "closed";
  }
  setOnData(callback) {
    this.onData = callback;
  }
  setOnConnect(callback) {
    this.onConnectCallback = callback;
  }
  setOnClose(callback) {
    this.onCloseCallback = callback;
  }
  getStateLabel() {
    return this.state;
  }
  async write(message) {
    if ("uuid" in message && typeof message.uuid === "string") {
      this.messageBuffer.add(message);
      this.lastSentId = message.uuid;
    }
    const line = jsonStringify(message) + `
`;
    if (this.state !== "connected") {
      return;
    }
    const sessionLabel = this.sessionId ? ` session=${this.sessionId}` : "";
    const detailLabel = this.getControlMessageDetailLabel(message);
    logForDebugging(`WebSocketTransport: Sending message type=${message.type}${sessionLabel}${detailLabel}`);
    this.sendLine(line);
  }
  getControlMessageDetailLabel(message) {
    if (message.type === "control_request") {
      const { request_id, request } = message;
      const toolName = request.subtype === "can_use_tool" ? request.tool_name : "";
      return ` subtype=${request.subtype} request_id=${request_id}${toolName ? ` tool=${toolName}` : ""}`;
    }
    if (message.type === "control_response") {
      const { subtype, request_id } = message.response;
      return ` subtype=${subtype} request_id=${request_id}`;
    }
    return "";
  }
  startPingInterval() {
    this.stopPingInterval();
    this.pongReceived = true;
    let lastTickTime = Date.now();
    this.pingInterval = setInterval(() => {
      if (this.state === "connected" && this.ws) {
        const now = Date.now();
        const gap = now - lastTickTime;
        lastTickTime = now;
        if (gap > SLEEP_DETECTION_THRESHOLD_MS) {
          logForDebugging(`WebSocketTransport: ${Math.round(gap / 1000)}s tick gap detected \u2014 process was suspended, forcing reconnect`);
          logForDiagnosticsNoPII("info", "cli_websocket_sleep_detected_on_ping", { gapMs: gap });
          this.handleConnectionError();
          return;
        }
        if (!this.pongReceived) {
          logForDebugging("WebSocketTransport: No pong received, connection appears dead", { level: "error" });
          logForDiagnosticsNoPII("error", "cli_websocket_pong_timeout");
          this.handleConnectionError();
          return;
        }
        this.pongReceived = false;
        try {
          this.ws.ping?.();
        } catch (error) {
          logForDebugging(`WebSocketTransport: Ping failed: ${error}`, {
            level: "error"
          });
          logForDiagnosticsNoPII("error", "cli_websocket_ping_failed");
        }
      }
    }, DEFAULT_PING_INTERVAL);
  }
  stopPingInterval() {
    if (this.pingInterval) {
      clearInterval(this.pingInterval);
      this.pingInterval = null;
    }
  }
  startKeepaliveInterval() {
    this.stopKeepaliveInterval();
    if (isEnvTruthy(process.env.CLAUDE_CODE_REMOTE)) {
      return;
    }
    this.keepAliveInterval = setInterval(() => {
      if (this.state === "connected" && this.ws) {
        try {
          this.ws.send(KEEP_ALIVE_FRAME);
          this.lastActivityTime = Date.now();
          logForDebugging("WebSocketTransport: Sent periodic keep_alive data frame");
        } catch (error) {
          logForDebugging(`WebSocketTransport: Periodic keep_alive failed: ${error}`, { level: "error" });
          logForDiagnosticsNoPII("error", "cli_websocket_keepalive_failed");
        }
      }
    }, DEFAULT_KEEPALIVE_INTERVAL);
  }
  stopKeepaliveInterval() {
    if (this.keepAliveInterval) {
      clearInterval(this.keepAliveInterval);
      this.keepAliveInterval = null;
    }
  }
}

// src/cli/transports/HybridTransport.ts
var BATCH_FLUSH_INTERVAL_MS = 100;
var POST_TIMEOUT_MS = 15000;
var CLOSE_GRACE_MS = 3000;

class HybridTransport extends WebSocketTransport {
  postUrl;
  uploader;
  streamEventBuffer = [];
  streamEventTimer = null;
  constructor(url, headers = {}, sessionId, refreshHeaders, options) {
    super(url, headers, sessionId, refreshHeaders, options);
    const { maxConsecutiveFailures, onBatchDropped } = options ?? {};
    this.postUrl = convertWsUrlToPostUrl(url);
    this.uploader = new SerialBatchEventUploader({
      maxBatchSize: 500,
      maxQueueSize: 1e5,
      baseDelayMs: 500,
      maxDelayMs: 8000,
      jitterMs: 1000,
      maxConsecutiveFailures,
      onBatchDropped: (batchSize, failures) => {
        logForDiagnosticsNoPII("error", "cli_hybrid_batch_dropped_max_failures", {
          batchSize,
          failures
        });
        onBatchDropped?.(batchSize, failures);
      },
      send: (batch) => this.postOnce(batch)
    });
    logForDebugging(`HybridTransport: POST URL = ${this.postUrl}`);
    logForDiagnosticsNoPII("info", "cli_hybrid_transport_initialized");
  }
  async write(message) {
    if (message.type === "stream_event") {
      this.streamEventBuffer.push(message);
      if (!this.streamEventTimer) {
        this.streamEventTimer = setTimeout(() => this.flushStreamEvents(), BATCH_FLUSH_INTERVAL_MS);
      }
      return;
    }
    await this.uploader.enqueue([...this.takeStreamEvents(), message]);
    return this.uploader.flush();
  }
  async writeBatch(messages) {
    await this.uploader.enqueue([...this.takeStreamEvents(), ...messages]);
    return this.uploader.flush();
  }
  get droppedBatchCount() {
    return this.uploader.droppedBatchCount;
  }
  flush() {
    this.uploader.enqueue(this.takeStreamEvents());
    return this.uploader.flush();
  }
  takeStreamEvents() {
    if (this.streamEventTimer) {
      clearTimeout(this.streamEventTimer);
      this.streamEventTimer = null;
    }
    const buffered = this.streamEventBuffer;
    this.streamEventBuffer = [];
    return buffered;
  }
  flushStreamEvents() {
    this.streamEventTimer = null;
    this.uploader.enqueue(this.takeStreamEvents());
  }
  close() {
    if (this.streamEventTimer) {
      clearTimeout(this.streamEventTimer);
      this.streamEventTimer = null;
    }
    this.streamEventBuffer = [];
    const uploader = this.uploader;
    let graceTimer;
    Promise.race([
      uploader.flush(),
      new Promise((r) => {
        graceTimer = setTimeout(r, CLOSE_GRACE_MS);
      })
    ]).finally(() => {
      clearTimeout(graceTimer);
      uploader.close();
    });
    super.close();
  }
  async postOnce(events) {
    const sessionToken = getSessionIngressAuthToken();
    if (!sessionToken) {
      logForDebugging("HybridTransport: No session token available for POST");
      logForDiagnosticsNoPII("warn", "cli_hybrid_post_no_token");
      return;
    }
    const headers = {
      Authorization: `Bearer ${sessionToken}`,
      "Content-Type": "application/json"
    };
    let response;
    try {
      response = await axios_default.post(this.postUrl, { events }, {
        headers,
        validateStatus: () => true,
        timeout: POST_TIMEOUT_MS
      });
    } catch (error) {
      const axiosError = error;
      logForDebugging(`HybridTransport: POST error: ${axiosError.message}`);
      logForDiagnosticsNoPII("warn", "cli_hybrid_post_network_error");
      throw error;
    }
    if (response.status >= 200 && response.status < 300) {
      logForDebugging(`HybridTransport: POST success count=${events.length}`);
      return;
    }
    if (response.status >= 400 && response.status < 500 && response.status !== 429) {
      rcLog(`Hybrid POST ${response.status}: url=${this.postUrl.replace(/token=[^&]+/, "token=***")}` + ` events=${events.length} body=${JSON.stringify(response.data).slice(0, 200)}`);
      logForDebugging(`HybridTransport: POST returned ${response.status} (permanent), dropping`);
      logForDiagnosticsNoPII("warn", "cli_hybrid_post_client_error", {
        status: response.status
      });
      return;
    }
    logForDebugging(`HybridTransport: POST returned ${response.status} (retryable)`);
    logForDiagnosticsNoPII("warn", "cli_hybrid_post_retryable_error", {
      status: response.status
    });
    throw new Error(`POST failed with ${response.status}`);
  }
}
function convertWsUrlToPostUrl(wsUrl) {
  const protocol = wsUrl.protocol === "wss:" ? "https:" : "http:";
  let pathname = wsUrl.pathname;
  pathname = pathname.replace("/ws/", "/session/");
  if (!pathname.endsWith("/events")) {
    pathname = pathname.endsWith("/") ? pathname + "events" : pathname + "/events";
  }
  return `${protocol}//${wsUrl.host}${pathname}${wsUrl.search}`;
}

export { WebSocketTransport, HybridTransport };
