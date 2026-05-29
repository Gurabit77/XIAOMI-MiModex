// @bun
import {
  init_analytics,
  logEvent
} from "./chunk-f2mhrmww.js";
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
  logForDebugging
} from "./chunk-rpbc3b7k.js";

// src/bridge/jwtUtils.ts
init_analytics();
init_debug();
init_diagLogs();
init_errors();
init_slowOperations();
function formatDuration(ms) {
  if (ms < 60000)
    return `${Math.round(ms / 1000)}s`;
  const m = Math.floor(ms / 60000);
  const s = Math.round(ms % 60000 / 1000);
  return s > 0 ? `${m}m ${s}s` : `${m}m`;
}
function decodeJwtPayload(token) {
  const jwt = token.startsWith("sk-ant-si-") ? token.slice("sk-ant-si-".length) : token;
  const parts = jwt.split(".");
  if (parts.length !== 3 || !parts[1])
    return null;
  try {
    return jsonParse(Buffer.from(parts[1], "base64url").toString("utf8"));
  } catch {
    return null;
  }
}
function decodeJwtExpiry(token) {
  const payload = decodeJwtPayload(token);
  if (payload !== null && typeof payload === "object" && "exp" in payload && typeof payload.exp === "number") {
    return payload.exp;
  }
  return null;
}
var TOKEN_REFRESH_BUFFER_MS = 5 * 60 * 1000;
var FALLBACK_REFRESH_INTERVAL_MS = 30 * 60 * 1000;
var MAX_REFRESH_FAILURES = 3;
var REFRESH_RETRY_DELAY_MS = 60000;
function createTokenRefreshScheduler({
  getAccessToken,
  onRefresh,
  label,
  refreshBufferMs = TOKEN_REFRESH_BUFFER_MS
}) {
  const timers = new Map;
  const failureCounts = new Map;
  const generations = new Map;
  function nextGeneration(sessionId) {
    const gen = (generations.get(sessionId) ?? 0) + 1;
    generations.set(sessionId, gen);
    return gen;
  }
  function schedule(sessionId, token) {
    const expiry = decodeJwtExpiry(token);
    if (!expiry) {
      logForDebugging(`[${label}:token] Could not decode JWT expiry for sessionId=${sessionId}, token prefix=${token.slice(0, 15)}\u2026, keeping existing timer`);
      return;
    }
    const existing = timers.get(sessionId);
    if (existing) {
      clearTimeout(existing);
    }
    const gen = nextGeneration(sessionId);
    const expiryDate = new Date(expiry * 1000).toISOString();
    const delayMs = expiry * 1000 - Date.now() - refreshBufferMs;
    if (delayMs <= 0) {
      logForDebugging(`[${label}:token] Token for sessionId=${sessionId} expires=${expiryDate} (past or within buffer), refreshing immediately`);
      doRefresh(sessionId, gen);
      return;
    }
    logForDebugging(`[${label}:token] Scheduled token refresh for sessionId=${sessionId} in ${formatDuration(delayMs)} (expires=${expiryDate}, buffer=${refreshBufferMs / 1000}s)`);
    const timer = setTimeout(doRefresh, delayMs, sessionId, gen);
    timers.set(sessionId, timer);
  }
  function scheduleFromExpiresIn(sessionId, expiresInSeconds) {
    const existing = timers.get(sessionId);
    if (existing)
      clearTimeout(existing);
    const gen = nextGeneration(sessionId);
    const delayMs = Math.max(expiresInSeconds * 1000 - refreshBufferMs, 30000);
    logForDebugging(`[${label}:token] Scheduled token refresh for sessionId=${sessionId} in ${formatDuration(delayMs)} (expires_in=${expiresInSeconds}s, buffer=${refreshBufferMs / 1000}s)`);
    const timer = setTimeout(doRefresh, delayMs, sessionId, gen);
    timers.set(sessionId, timer);
  }
  async function doRefresh(sessionId, gen) {
    let oauthToken;
    try {
      oauthToken = await getAccessToken();
    } catch (err) {
      logForDebugging(`[${label}:token] getAccessToken threw for sessionId=${sessionId}: ${errorMessage(err)}`, { level: "error" });
    }
    if (generations.get(sessionId) !== gen) {
      logForDebugging(`[${label}:token] doRefresh for sessionId=${sessionId} stale (gen ${gen} vs ${generations.get(sessionId)}), skipping`);
      return;
    }
    if (!oauthToken) {
      const failures = (failureCounts.get(sessionId) ?? 0) + 1;
      failureCounts.set(sessionId, failures);
      logForDebugging(`[${label}:token] No OAuth token available for refresh, sessionId=${sessionId} (failure ${failures}/${MAX_REFRESH_FAILURES})`, { level: "error" });
      logForDiagnosticsNoPII("error", "bridge_token_refresh_no_oauth");
      if (failures < MAX_REFRESH_FAILURES) {
        const retryTimer = setTimeout(doRefresh, REFRESH_RETRY_DELAY_MS, sessionId, gen);
        timers.set(sessionId, retryTimer);
      }
      return;
    }
    failureCounts.delete(sessionId);
    logForDebugging(`[${label}:token] Refreshing token for sessionId=${sessionId}: new token prefix=${oauthToken.slice(0, 15)}\u2026`);
    logEvent("tengu_bridge_token_refreshed", {});
    onRefresh(sessionId, oauthToken);
    const timer = setTimeout(doRefresh, FALLBACK_REFRESH_INTERVAL_MS, sessionId, gen);
    timers.set(sessionId, timer);
    logForDebugging(`[${label}:token] Scheduled follow-up refresh for sessionId=${sessionId} in ${formatDuration(FALLBACK_REFRESH_INTERVAL_MS)}`);
  }
  function cancel(sessionId) {
    nextGeneration(sessionId);
    const timer = timers.get(sessionId);
    if (timer) {
      clearTimeout(timer);
      timers.delete(sessionId);
    }
    failureCounts.delete(sessionId);
  }
  function cancelAll() {
    for (const sessionId of generations.keys()) {
      nextGeneration(sessionId);
    }
    for (const timer of timers.values()) {
      clearTimeout(timer);
    }
    timers.clear();
    failureCounts.clear();
  }
  return { schedule, scheduleFromExpiresIn, cancel, cancelAll };
}

export { decodeJwtExpiry, createTokenRefreshScheduler };
