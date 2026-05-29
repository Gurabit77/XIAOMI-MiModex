// @bun
import {
  getSessionIngressAuthHeaders,
  init_rcDebugLog,
  init_sessionIngressAuth,
  rcLog
} from "./chunk-chmfqs2y.js";
import {
  getClaudeCodeUserAgent,
  init_userAgent
} from "./chunk-1ghcng4e.js";
import {
  init_sleep,
  sleep
} from "./chunk-8g5pe1gr.js";
import {
  init_diagLogs,
  logForDiagnosticsNoPII
} from "./chunk-t6jhrn34.js";
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
  axios_default,
  init_axios
} from "./chunk-3v4d4h0t.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/cli/transports/SSETransport.ts
function alwaysValidStatus() {
  return true;
}
function parseSSEFrames(buffer) {
  const frames = [];
  let pos = 0;
  const frameDelimiter = /\r?\n\r?\n/g;
  frameDelimiter.lastIndex = pos;
  let delimiterMatch;
  while ((delimiterMatch = frameDelimiter.exec(buffer)) !== null) {
    const frameEnd = delimiterMatch.index;
    const rawFrame = buffer.slice(pos, frameEnd);
    pos = frameEnd + delimiterMatch[0].length;
    if (!rawFrame.trim())
      continue;
    const frame = {};
    let isComment = false;
    for (const rawLine of rawFrame.split(`
`)) {
      const line = rawLine[rawLine.length - 1] === "\r" ? rawLine.slice(0, -1) : rawLine;
      if (line.startsWith(":")) {
        isComment = true;
        continue;
      }
      const colonIdx = line.indexOf(":");
      if (colonIdx === -1)
        continue;
      const field = line.slice(0, colonIdx);
      const value = line[colonIdx + 1] === " " ? line.slice(colonIdx + 2) : line.slice(colonIdx + 1);
      switch (field) {
        case "event":
          frame.event = value;
          break;
        case "id":
          frame.id = value;
          break;
        case "data":
          frame.data = frame.data ? frame.data + `
` + value : value;
          break;
      }
    }
    if (frame.data || isComment) {
      frames.push(frame);
    }
  }
  return { frames, remaining: buffer.slice(pos) };
}

class SSETransport {
  url;
  state = "idle";
  onData;
  onCloseCallback;
  onEventCallback;
  headers;
  sessionId;
  refreshHeaders;
  getAuthHeaders;
  abortController = null;
  lastSequenceNum = 0;
  seenSequenceNums = new Set;
  reconnectAttempts = 0;
  reconnectStartTime = null;
  reconnectTimer = null;
  livenessTimer = null;
  lastActivityTime = 0;
  postUrl;
  constructor(url, headers = {}, sessionId, refreshHeaders, initialSequenceNum, getAuthHeaders) {
    this.url = url;
    this.headers = headers;
    this.sessionId = sessionId;
    this.refreshHeaders = refreshHeaders;
    this.getAuthHeaders = getAuthHeaders ?? getSessionIngressAuthHeaders;
    this.postUrl = convertSSEUrlToPostUrl(url);
    if (initialSequenceNum !== undefined && initialSequenceNum > 0) {
      this.lastSequenceNum = initialSequenceNum;
    }
    logForDebugging(`SSETransport: SSE URL = ${url.href}`);
    logForDebugging(`SSETransport: POST URL = ${this.postUrl}`);
    logForDiagnosticsNoPII("info", "cli_sse_transport_initialized");
  }
  getLastSequenceNum() {
    return this.lastSequenceNum;
  }
  async connect() {
    if (this.state !== "idle" && this.state !== "reconnecting") {
      logForDebugging(`SSETransport: Cannot connect, current state is ${this.state}`, { level: "error" });
      logForDiagnosticsNoPII("error", "cli_sse_connect_failed");
      return;
    }
    this.state = "reconnecting";
    const connectStartTime = Date.now();
    const sseUrl = new URL(this.url.href);
    if (this.lastSequenceNum > 0) {
      sseUrl.searchParams.set("from_sequence_num", String(this.lastSequenceNum));
    }
    const authHeaders = this.getAuthHeaders();
    const headers = {
      ...this.headers,
      ...authHeaders,
      Accept: "text/event-stream",
      "anthropic-version": "2023-06-01",
      "User-Agent": getClaudeCodeUserAgent()
    };
    if (authHeaders["Cookie"]) {
      delete headers["Authorization"];
    }
    if (this.lastSequenceNum > 0) {
      headers["Last-Event-ID"] = String(this.lastSequenceNum);
    }
    logForDebugging(`SSETransport: Opening ${sseUrl.href}`);
    logForDiagnosticsNoPII("info", "cli_sse_connect_opening");
    this.abortController = new AbortController;
    try {
      const response = await fetch(sseUrl.href, {
        headers,
        signal: this.abortController.signal
      });
      if (!response.ok) {
        const isPermanent = PERMANENT_HTTP_CODES.has(response.status);
        logForDebugging(`SSETransport: HTTP ${response.status}${isPermanent ? " (permanent)" : ""}`, { level: "error" });
        logForDiagnosticsNoPII("error", "cli_sse_connect_http_error", {
          status: response.status
        });
        if (isPermanent) {
          this.state = "closed";
          this.onCloseCallback?.(response.status);
          return;
        }
        this.handleConnectionError();
        return;
      }
      if (!response.body) {
        logForDebugging("SSETransport: No response body");
        this.handleConnectionError();
        return;
      }
      const connectDuration = Date.now() - connectStartTime;
      logForDebugging("SSETransport: Connected");
      logForDiagnosticsNoPII("info", "cli_sse_connect_connected", {
        duration_ms: connectDuration
      });
      this.state = "connected";
      this.reconnectAttempts = 0;
      this.reconnectStartTime = null;
      this.resetLivenessTimer();
      await this.readStream(response.body);
    } catch (error) {
      if (this.abortController?.signal.aborted) {
        return;
      }
      logForDebugging(`SSETransport: Connection error: ${errorMessage(error)}`, { level: "error" });
      logForDiagnosticsNoPII("error", "cli_sse_connect_error");
      this.handleConnectionError();
    }
  }
  async readStream(body) {
    const reader = body.getReader();
    const decoder = new TextDecoder;
    let buffer = "";
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done)
          break;
        buffer += decoder.decode(value, STREAM_DECODE_OPTS);
        const { frames, remaining } = parseSSEFrames(buffer);
        buffer = remaining;
        for (const frame of frames) {
          this.resetLivenessTimer();
          if (frame.id) {
            const seqNum = parseInt(frame.id, 10);
            if (!isNaN(seqNum)) {
              if (this.seenSequenceNums.has(seqNum)) {
                logForDebugging(`SSETransport: DUPLICATE frame seq=${seqNum} (lastSequenceNum=${this.lastSequenceNum}, seenCount=${this.seenSequenceNums.size})`, { level: "warn" });
                logForDiagnosticsNoPII("warn", "cli_sse_duplicate_sequence");
              } else {
                this.seenSequenceNums.add(seqNum);
                if (this.seenSequenceNums.size > 1000) {
                  const threshold = this.lastSequenceNum - 200;
                  for (const s of this.seenSequenceNums) {
                    if (s < threshold) {
                      this.seenSequenceNums.delete(s);
                    }
                  }
                }
              }
              if (seqNum > this.lastSequenceNum) {
                this.lastSequenceNum = seqNum;
              }
            }
          }
          if (frame.event && frame.data) {
            this.handleSSEFrame(frame.event, frame.data);
          } else if (frame.data) {
            logForDebugging("SSETransport: Frame has data: but no event: field \u2014 dropped", { level: "warn" });
            logForDiagnosticsNoPII("warn", "cli_sse_frame_missing_event_field");
          }
        }
      }
    } catch (error) {
      if (this.abortController?.signal.aborted)
        return;
      logForDebugging(`SSETransport: Stream read error: ${errorMessage(error)}`, { level: "error" });
      logForDiagnosticsNoPII("error", "cli_sse_stream_read_error");
    } finally {
      reader.releaseLock();
    }
    if (this.state !== "closing" && this.state !== "closed") {
      logForDebugging("SSETransport: Stream ended, reconnecting");
      this.handleConnectionError();
    }
  }
  handleSSEFrame(eventType, data) {
    if (eventType !== "client_event") {
      logForDebugging(`SSETransport: Unexpected SSE event type '${eventType}' on worker stream`, { level: "warn" });
      logForDiagnosticsNoPII("warn", "cli_sse_unexpected_event_type", {
        event_type: eventType
      });
      return;
    }
    let ev;
    try {
      ev = jsonParse(data);
    } catch (error) {
      logForDebugging(`SSETransport: Failed to parse client_event data: ${errorMessage(error)}`, { level: "error" });
      return;
    }
    const payload = ev.payload;
    if (payload && typeof payload === "object" && "type" in payload) {
      const sessionLabel = this.sessionId ? ` session=${this.sessionId}` : "";
      logForDebugging(`SSETransport: Event seq=${ev.sequence_num} event_id=${ev.event_id} event_type=${ev.event_type} payload_type=${String(payload.type)}${sessionLabel}`);
      logForDiagnosticsNoPII("info", "cli_sse_message_received");
      this.onData?.(jsonStringify(payload) + `
`);
    } else {
      logForDebugging(`SSETransport: Ignoring client_event with no type in payload: event_id=${ev.event_id}`);
    }
    this.onEventCallback?.(ev);
  }
  handleConnectionError() {
    rcLog(`SSE handleConnectionError: state=${this.state}` + ` lastSeqNum=${this.getLastSequenceNum()}` + ` reconnectAttempts=${this.reconnectAttempts}` + ` msSinceLastActivity=${this.lastActivityTime > 0 ? Date.now() - this.lastActivityTime : -1}`);
    this.clearLivenessTimer();
    if (this.state === "closing" || this.state === "closed")
      return;
    this.abortController?.abort();
    this.abortController = null;
    const now = Date.now();
    if (!this.reconnectStartTime) {
      this.reconnectStartTime = now;
    }
    const elapsed = now - this.reconnectStartTime;
    if (elapsed < RECONNECT_GIVE_UP_MS) {
      if (this.reconnectTimer) {
        clearTimeout(this.reconnectTimer);
        this.reconnectTimer = null;
      }
      if (this.refreshHeaders) {
        const freshHeaders = this.refreshHeaders();
        Object.assign(this.headers, freshHeaders);
        logForDebugging("SSETransport: Refreshed headers for reconnect");
      }
      this.state = "reconnecting";
      this.reconnectAttempts++;
      const baseDelay = Math.min(RECONNECT_BASE_DELAY_MS * 2 ** (this.reconnectAttempts - 1), RECONNECT_MAX_DELAY_MS);
      const delay = Math.max(0, baseDelay + baseDelay * 0.25 * (2 * Math.random() - 1));
      logForDebugging(`SSETransport: Reconnecting in ${Math.round(delay)}ms (attempt ${this.reconnectAttempts}, ${Math.round(elapsed / 1000)}s elapsed)`);
      logForDiagnosticsNoPII("error", "cli_sse_reconnect_attempt", {
        reconnectAttempts: this.reconnectAttempts
      });
      this.reconnectTimer = setTimeout(() => {
        this.reconnectTimer = null;
        this.connect();
      }, delay);
    } else {
      logForDebugging(`SSETransport: Reconnection time budget exhausted after ${Math.round(elapsed / 1000)}s`, { level: "error" });
      logForDiagnosticsNoPII("error", "cli_sse_reconnect_exhausted", {
        reconnectAttempts: this.reconnectAttempts,
        elapsedMs: elapsed
      });
      this.state = "closed";
      this.onCloseCallback?.();
    }
  }
  onLivenessTimeout = () => {
    this.livenessTimer = null;
    rcLog(`SSE liveness timeout (${LIVENESS_TIMEOUT_MS}ms)` + ` lastSeqNum=${this.getLastSequenceNum()}` + ` state=${this.state}`);
    logForDebugging("SSETransport: Liveness timeout, reconnecting", {
      level: "error"
    });
    logForDiagnosticsNoPII("error", "cli_sse_liveness_timeout");
    this.abortController?.abort();
    this.handleConnectionError();
  };
  resetLivenessTimer() {
    this.clearLivenessTimer();
    this.livenessTimer = setTimeout(this.onLivenessTimeout, LIVENESS_TIMEOUT_MS);
  }
  clearLivenessTimer() {
    if (this.livenessTimer) {
      clearTimeout(this.livenessTimer);
      this.livenessTimer = null;
    }
  }
  async write(message) {
    const authHeaders = this.getAuthHeaders();
    if (Object.keys(authHeaders).length === 0) {
      logForDebugging("SSETransport: No session token available for POST");
      logForDiagnosticsNoPII("warn", "cli_sse_post_no_token");
      return;
    }
    const headers = {
      ...authHeaders,
      "Content-Type": "application/json",
      "anthropic-version": "2023-06-01",
      "User-Agent": getClaudeCodeUserAgent()
    };
    logForDebugging(`SSETransport: POST body keys=${Object.keys(message).join(",")}`);
    for (let attempt = 1;attempt <= POST_MAX_RETRIES; attempt++) {
      try {
        const response = await axios_default.post(this.postUrl, message, {
          headers,
          validateStatus: alwaysValidStatus
        });
        if (response.status === 200 || response.status === 201) {
          logForDebugging(`SSETransport: POST success type=${message.type}`);
          return;
        }
        logForDebugging(`SSETransport: POST ${response.status} body=${jsonStringify(response.data).slice(0, 200)}`);
        if (response.status >= 400 && response.status < 500 && response.status !== 429) {
          logForDebugging(`SSETransport: POST returned ${response.status} (client error), not retrying`);
          logForDiagnosticsNoPII("warn", "cli_sse_post_client_error", {
            status: response.status
          });
          return;
        }
        logForDebugging(`SSETransport: POST returned ${response.status}, attempt ${attempt}/${POST_MAX_RETRIES}`);
        logForDiagnosticsNoPII("warn", "cli_sse_post_retryable_error", {
          status: response.status,
          attempt
        });
      } catch (error) {
        const axiosError = error;
        logForDebugging(`SSETransport: POST error: ${axiosError.message}, attempt ${attempt}/${POST_MAX_RETRIES}`);
        logForDiagnosticsNoPII("warn", "cli_sse_post_network_error", {
          attempt
        });
      }
      if (attempt === POST_MAX_RETRIES) {
        logForDebugging(`SSETransport: POST failed after ${POST_MAX_RETRIES} attempts, continuing`);
        logForDiagnosticsNoPII("warn", "cli_sse_post_retries_exhausted");
        return;
      }
      const delayMs = Math.min(POST_BASE_DELAY_MS * 2 ** (attempt - 1), POST_MAX_DELAY_MS);
      await sleep(delayMs);
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
  setOnClose(callback) {
    this.onCloseCallback = callback;
  }
  setOnEvent(callback) {
    this.onEventCallback = callback;
  }
  close() {
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
    this.clearLivenessTimer();
    this.state = "closing";
    this.abortController?.abort();
    this.abortController = null;
  }
}
function convertSSEUrlToPostUrl(sseUrl) {
  let pathname = sseUrl.pathname;
  if (pathname.endsWith("/stream")) {
    pathname = pathname.slice(0, -"/stream".length);
  }
  return `${sseUrl.protocol}//${sseUrl.host}${pathname}`;
}
var RECONNECT_BASE_DELAY_MS = 1000, RECONNECT_MAX_DELAY_MS = 30000, RECONNECT_GIVE_UP_MS = 600000, LIVENESS_TIMEOUT_MS = 45000, PERMANENT_HTTP_CODES, POST_MAX_RETRIES = 10, POST_BASE_DELAY_MS = 500, POST_MAX_DELAY_MS = 8000, STREAM_DECODE_OPTS;
var init_SSETransport = __esm(() => {
  init_axios();
  init_debug();
  init_rcDebugLog();
  init_diagLogs();
  init_errors();
  init_sessionIngressAuth();
  init_sleep();
  init_slowOperations();
  init_userAgent();
  PERMANENT_HTTP_CODES = new Set([401, 403, 404]);
  STREAM_DECODE_OPTS = { stream: true };
});

export { parseSSEFrames, SSETransport, init_SSETransport };
