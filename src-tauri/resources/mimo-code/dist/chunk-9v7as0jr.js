// @bun
import {
  checkAndRefreshOAuthTokenIfNeeded,
  getClaudeAIOAuthTokens,
  getFeatureValue_CACHED_MAY_BE_STALE,
  getUserAgent,
  init_auth,
  init_growthbook,
  init_http,
  isAnthropicAuthEnabled
} from "./chunk-1ghcng4e.js";
import {
  getWebSocketProxyAgent,
  getWebSocketProxyUrl,
  getWebSocketTLSOptions,
  init_mtls,
  init_proxy
} from "./chunk-t7f7dp4k.js";
import {
  getOauthConfig,
  init_oauth
} from "./chunk-rh5a2rg9.js";
import {
  init_log,
  logError
} from "./chunk-w5ahy59y.js";
import {
  init_debug,
  init_slowOperations,
  jsonParse,
  jsonStringify,
  logForDebugging
} from "./chunk-rpbc3b7k.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/services/voiceStreamSTT.ts
import WebSocket from "ws";
function isVoiceStreamAvailable() {
  if (!isAnthropicAuthEnabled()) {
    return false;
  }
  const tokens = getClaudeAIOAuthTokens();
  return tokens !== null && tokens.accessToken !== null;
}
async function connectVoiceStream(callbacks, options) {
  await checkAndRefreshOAuthTokenIfNeeded();
  const tokens = getClaudeAIOAuthTokens();
  if (!tokens?.accessToken) {
    logForDebugging("[voice_stream] No OAuth token available");
    return null;
  }
  const wsBaseUrl = process.env.VOICE_STREAM_BASE_URL || getOauthConfig().BASE_API_URL.replace("https://", "wss://").replace("http://", "ws://");
  if (process.env.VOICE_STREAM_BASE_URL) {
    logForDebugging(`[voice_stream] Using VOICE_STREAM_BASE_URL override: ${process.env.VOICE_STREAM_BASE_URL}`);
  }
  const params = new URLSearchParams({
    encoding: "linear16",
    sample_rate: "16000",
    channels: "1",
    endpointing_ms: "300",
    utterance_end_ms: "1000",
    language: options?.language ?? "en"
  });
  const isNova3 = getFeatureValue_CACHED_MAY_BE_STALE("tengu_cobalt_frost", false);
  if (isNova3) {
    params.set("use_conversation_engine", "true");
    params.set("stt_provider", "deepgram-nova3");
    logForDebugging("[voice_stream] Nova 3 gate enabled (tengu_cobalt_frost)");
  }
  if (options?.keyterms?.length) {
    for (const term of options.keyterms) {
      params.append("keyterms", term);
    }
  }
  const url = `${wsBaseUrl}${VOICE_STREAM_PATH}?${params.toString()}`;
  logForDebugging(`[voice_stream] Connecting to ${url}`);
  const headers = {
    Authorization: `Bearer ${tokens.accessToken}`,
    "User-Agent": getUserAgent(),
    "x-app": "cli"
  };
  const tlsOptions = getWebSocketTLSOptions();
  const wsOptions = typeof Bun !== "undefined" ? {
    headers,
    proxy: getWebSocketProxyUrl(url),
    tls: tlsOptions || undefined
  } : { headers, agent: getWebSocketProxyAgent(url), ...tlsOptions };
  const ws = new WebSocket(url, wsOptions);
  let keepaliveTimer = null;
  let connected = false;
  let finalized = false;
  let finalizing = false;
  let upgradeRejected = false;
  let resolveFinalize = null;
  let cancelNoDataTimer = null;
  const connection = {
    send(audioChunk) {
      if (ws.readyState !== WebSocket.OPEN) {
        return;
      }
      if (finalized) {
        logForDebugging(`[voice_stream] Dropping audio chunk after CloseStream: ${String(audioChunk.length)} bytes`);
        return;
      }
      logForDebugging(`[voice_stream] Sending audio chunk: ${String(audioChunk.length)} bytes`);
      ws.send(Buffer.from(audioChunk));
    },
    finalize() {
      if (finalizing || finalized) {
        return Promise.resolve("ws_already_closed");
      }
      finalizing = true;
      return new Promise((resolve) => {
        const safetyTimer = setTimeout(() => resolveFinalize?.("safety_timeout"), FINALIZE_TIMEOUTS_MS.safety);
        const noDataTimer = setTimeout(() => resolveFinalize?.("no_data_timeout"), FINALIZE_TIMEOUTS_MS.noData);
        cancelNoDataTimer = () => {
          clearTimeout(noDataTimer);
          cancelNoDataTimer = null;
        };
        resolveFinalize = (source) => {
          clearTimeout(safetyTimer);
          clearTimeout(noDataTimer);
          resolveFinalize = null;
          cancelNoDataTimer = null;
          if (lastTranscriptText) {
            logForDebugging(`[voice_stream] Promoting unreported interim before ${source} resolve`);
            const t = lastTranscriptText;
            lastTranscriptText = "";
            callbacks.onTranscript(t, true);
          }
          logForDebugging(`[voice_stream] Finalize resolved via ${source}`);
          resolve(source);
        };
        if (ws.readyState === WebSocket.CLOSED || ws.readyState === WebSocket.CLOSING) {
          resolveFinalize("ws_already_closed");
          return;
        }
        setTimeout(() => {
          finalized = true;
          if (ws.readyState === WebSocket.OPEN) {
            logForDebugging("[voice_stream] Sending CloseStream (finalize)");
            ws.send(CLOSE_STREAM_MSG);
          }
        }, 0);
      });
    },
    close() {
      finalized = true;
      if (keepaliveTimer) {
        clearInterval(keepaliveTimer);
        keepaliveTimer = null;
      }
      connected = false;
      if (ws.readyState === WebSocket.OPEN) {
        ws.close();
      }
    },
    isConnected() {
      return connected && ws.readyState === WebSocket.OPEN;
    }
  };
  ws.on("open", () => {
    logForDebugging("[voice_stream] WebSocket connected");
    connected = true;
    logForDebugging("[voice_stream] Sending initial KeepAlive");
    ws.send(KEEPALIVE_MSG);
    keepaliveTimer = setInterval((ws2) => {
      if (ws2.readyState === WebSocket.OPEN) {
        logForDebugging("[voice_stream] Sending periodic KeepAlive");
        ws2.send(KEEPALIVE_MSG);
      }
    }, KEEPALIVE_INTERVAL_MS, ws);
    callbacks.onReady(connection);
  });
  let lastTranscriptText = "";
  ws.on("message", (raw) => {
    const text = raw.toString();
    logForDebugging(`[voice_stream] Message received (${String(text.length)} chars): ${text.slice(0, 200)}`);
    let msg;
    try {
      msg = jsonParse(text);
    } catch {
      return;
    }
    switch (msg.type) {
      case "TranscriptText": {
        const transcript = msg.data;
        logForDebugging(`[voice_stream] TranscriptText: "${transcript ?? ""}"`);
        if (finalized) {
          cancelNoDataTimer?.();
        }
        if (transcript) {
          if (!isNova3 && lastTranscriptText) {
            const prev = lastTranscriptText.trimStart();
            const next = transcript.trimStart();
            if (prev && next && !next.startsWith(prev) && !prev.startsWith(next)) {
              logForDebugging(`[voice_stream] Auto-finalizing previous segment (new segment detected): "${lastTranscriptText}"`);
              callbacks.onTranscript(lastTranscriptText, true);
            }
          }
          lastTranscriptText = transcript;
          callbacks.onTranscript(transcript, false);
        }
        break;
      }
      case "TranscriptEndpoint": {
        logForDebugging(`[voice_stream] TranscriptEndpoint received, lastTranscriptText="${lastTranscriptText}"`);
        const finalText = lastTranscriptText;
        lastTranscriptText = "";
        if (finalText) {
          callbacks.onTranscript(finalText, true);
        }
        if (finalized) {
          resolveFinalize?.("post_closestream_endpoint");
        }
        break;
      }
      case "TranscriptError": {
        const desc = msg.description ?? msg.error_code ?? "unknown transcription error";
        logForDebugging(`[voice_stream] TranscriptError: ${desc}`);
        if (!finalizing) {
          callbacks.onError(desc);
        }
        break;
      }
      case "error": {
        const errorDetail = msg.message ?? jsonStringify(msg);
        logForDebugging(`[voice_stream] Server error: ${errorDetail}`);
        if (!finalizing) {
          callbacks.onError(errorDetail);
        }
        break;
      }
      default:
        break;
    }
  });
  ws.on("close", (code, reason) => {
    const reasonStr = reason?.toString() ?? "";
    logForDebugging(`[voice_stream] WebSocket closed: code=${String(code)} reason="${reasonStr}"`);
    connected = false;
    if (keepaliveTimer) {
      clearInterval(keepaliveTimer);
      keepaliveTimer = null;
    }
    if (lastTranscriptText) {
      logForDebugging("[voice_stream] Promoting unreported interim transcript to final on close");
      const finalText = lastTranscriptText;
      lastTranscriptText = "";
      callbacks.onTranscript(finalText, true);
    }
    resolveFinalize?.("ws_close");
    if (!finalizing && !upgradeRejected && code !== 1000 && code !== 1005) {
      callbacks.onError(`Connection closed: code ${String(code)}${reasonStr ? ` \u2014 ${reasonStr}` : ""}`);
    }
    callbacks.onClose();
  });
  ws.on("unexpected-response", (req, res) => {
    const status = res.statusCode ?? 0;
    if (status === 101) {
      logForDebugging("[voice_stream] unexpected-response fired with 101; ignoring");
      return;
    }
    logForDebugging(`[voice_stream] Upgrade rejected: status=${String(status)} cf-mitigated=${String(res.headers["cf-mitigated"])} cf-ray=${String(res.headers["cf-ray"])}`);
    upgradeRejected = true;
    res.resume();
    req.destroy();
    if (finalizing)
      return;
    callbacks.onError(`WebSocket upgrade rejected with HTTP ${String(status)}`, { fatal: status >= 400 && status < 500 });
  });
  ws.on("error", (err) => {
    logError(err);
    logForDebugging(`[voice_stream] WebSocket error: ${err.message}`);
    if (!finalizing) {
      callbacks.onError(`Voice stream connection error: ${err.message}`);
    }
  });
  return connection;
}
var KEEPALIVE_MSG = '{"type":"KeepAlive"}', CLOSE_STREAM_MSG = '{"type":"CloseStream"}', VOICE_STREAM_PATH = "/api/ws/speech_to_text/voice_stream", KEEPALIVE_INTERVAL_MS = 8000, FINALIZE_TIMEOUTS_MS;
var init_voiceStreamSTT = __esm(() => {
  init_oauth();
  init_auth();
  init_debug();
  init_http();
  init_log();
  init_mtls();
  init_proxy();
  init_slowOperations();
  init_growthbook();
  FINALIZE_TIMEOUTS_MS = {
    safety: 5000,
    noData: 1500
  };
});

export { FINALIZE_TIMEOUTS_MS, isVoiceStreamAvailable, connectVoiceStream, init_voiceStreamSTT };
