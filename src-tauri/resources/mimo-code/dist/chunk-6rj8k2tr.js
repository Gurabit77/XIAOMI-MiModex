// @bun
import {
  MODEL_COSTS,
  getAPIProvider,
  getCanonicalName,
  getEventMetadata,
  getOrCreateUserID,
  init_config,
  init_config1 as init_config2,
  init_metadata,
  init_model,
  init_modelCost,
  init_providers,
  isAnalyticsDisabled
} from "./chunk-1ghcng4e.js";
import {
  init_log,
  logError
} from "./chunk-w5ahy59y.js";
import {
  init_memoize,
  memoize_default
} from "./chunk-qx8z601m.js";
import {
  axios_default,
  init_axios
} from "./chunk-3v4d4h0t.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/services/analytics/datadog.ts
import { createHash } from "crypto";
function camelToSnakeCase(str) {
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}
async function flushLogs() {
  if (logBatch.length === 0)
    return;
  const logsToSend = logBatch;
  logBatch = [];
  try {
    await axios_default.post(DATADOG_LOGS_ENDPOINT, logsToSend, {
      headers: {
        "Content-Type": "application/json",
        "DD-API-KEY": DATADOG_CLIENT_TOKEN
      },
      timeout: NETWORK_TIMEOUT_MS
    });
  } catch (error) {
    logError(error);
  }
}
function scheduleFlush() {
  if (flushTimer)
    return;
  flushTimer = setTimeout(() => {
    flushTimer = null;
    flushLogs();
  }, getFlushIntervalMs()).unref();
}
async function shutdownDatadog() {
  if (flushTimer) {
    clearTimeout(flushTimer);
    flushTimer = null;
  }
  await flushLogs();
}
async function trackDatadogEvent(eventName, properties) {
  if (true) {
    return;
  }
  if (getAPIProvider() !== "firstParty") {
    return;
  }
  let initialized = datadogInitialized;
  if (initialized === null) {
    initialized = await initializeDatadog();
  }
  if (!initialized || !DATADOG_ALLOWED_EVENTS.has(eventName)) {
    return;
  }
  try {
    const metadata = await getEventMetadata({
      model: properties.model,
      betas: properties.betas
    });
    const { envContext, ...restMetadata } = metadata;
    const allData = {
      ...restMetadata,
      ...envContext,
      ...properties,
      userBucket: getUserBucket()
    };
    if (typeof allData.toolName === "string" && allData.toolName.startsWith("mcp__")) {
      allData.toolName = "mcp";
    }
    if (process.env.USER_TYPE !== "ant" && typeof allData.model === "string") {
      const shortName = getCanonicalName(allData.model.replace(/\[1m]$/i, ""));
      allData.model = shortName in MODEL_COSTS ? shortName : "other";
    }
    if (typeof allData.version === "string") {
      allData.version = allData.version.replace(/^(\d+\.\d+\.\d+-dev\.\d{8})\.t\d+\.sha[a-f0-9]+$/, "$1");
    }
    if (allData.status !== undefined && allData.status !== null) {
      const statusCode = String(allData.status);
      allData.http_status = statusCode;
      const firstDigit = statusCode.charAt(0);
      if (firstDigit >= "1" && firstDigit <= "5") {
        allData.http_status_range = `${firstDigit}xx`;
      }
      delete allData.status;
    }
    const allDataRecord = allData;
    const tags = [
      `event:${eventName}`,
      ...TAG_FIELDS.filter((field) => allDataRecord[field] !== undefined && allDataRecord[field] !== null).map((field) => `${camelToSnakeCase(field)}:${allDataRecord[field]}`)
    ];
    const log = {
      ddsource: "nodejs",
      ddtags: tags.join(","),
      message: eventName,
      service: "claude-code",
      hostname: "claude-code",
      env: process.env.USER_TYPE
    };
    for (const [key, value] of Object.entries(allData)) {
      if (value !== undefined && value !== null) {
        log[camelToSnakeCase(key)] = value;
      }
    }
    logBatch.push(log);
    if (logBatch.length >= MAX_BATCH_SIZE) {
      if (flushTimer) {
        clearTimeout(flushTimer);
        flushTimer = null;
      }
      flushLogs();
    } else {
      scheduleFlush();
    }
  } catch (error) {
    logError(error);
  }
}
function getFlushIntervalMs() {
  return parseInt(process.env.CLAUDE_CODE_DATADOG_FLUSH_INTERVAL_MS || "", 10) || DEFAULT_FLUSH_INTERVAL_MS;
}
var DATADOG_LOGS_ENDPOINT, DATADOG_CLIENT_TOKEN, DEFAULT_FLUSH_INTERVAL_MS = 15000, MAX_BATCH_SIZE = 100, NETWORK_TIMEOUT_MS = 5000, DATADOG_ALLOWED_EVENTS, TAG_FIELDS, logBatch, flushTimer = null, datadogInitialized = null, initializeDatadog, NUM_USER_BUCKETS = 30, getUserBucket;
var init_datadog = __esm(() => {
  init_axios();
  init_memoize();
  init_config2();
  init_log();
  init_model();
  init_providers();
  init_modelCost();
  init_config();
  init_metadata();
  DATADOG_LOGS_ENDPOINT = process.env.DATADOG_LOGS_ENDPOINT ?? "";
  DATADOG_CLIENT_TOKEN = process.env.DATADOG_API_KEY ?? "";
  DATADOG_ALLOWED_EVENTS = new Set([
    "chrome_bridge_connection_succeeded",
    "chrome_bridge_connection_failed",
    "chrome_bridge_disconnected",
    "chrome_bridge_tool_call_completed",
    "chrome_bridge_tool_call_error",
    "chrome_bridge_tool_call_started",
    "chrome_bridge_tool_call_timeout",
    "tengu_api_error",
    "tengu_api_success",
    "tengu_brief_mode_enabled",
    "tengu_brief_mode_toggled",
    "tengu_brief_send",
    "tengu_cancel",
    "tengu_compact_failed",
    "tengu_exit",
    "tengu_flicker",
    "tengu_init",
    "tengu_model_fallback_triggered",
    "tengu_oauth_error",
    "tengu_oauth_success",
    "tengu_oauth_token_refresh_failure",
    "tengu_oauth_token_refresh_success",
    "tengu_oauth_token_refresh_lock_acquiring",
    "tengu_oauth_token_refresh_lock_acquired",
    "tengu_oauth_token_refresh_starting",
    "tengu_oauth_token_refresh_completed",
    "tengu_oauth_token_refresh_lock_releasing",
    "tengu_oauth_token_refresh_lock_released",
    "tengu_query_error",
    "tengu_session_file_read",
    "tengu_started",
    "tengu_tool_use_error",
    "tengu_tool_use_granted_in_prompt_permanent",
    "tengu_tool_use_granted_in_prompt_temporary",
    "tengu_tool_use_rejected_in_prompt",
    "tengu_tool_use_success",
    "tengu_uncaught_exception",
    "tengu_unhandled_rejection",
    "tengu_voice_recording_started",
    "tengu_voice_toggled",
    "tengu_team_mem_sync_pull",
    "tengu_team_mem_sync_push",
    "tengu_team_mem_sync_started",
    "tengu_team_mem_entries_capped"
  ]);
  TAG_FIELDS = [
    "arch",
    "clientType",
    "errorType",
    "http_status_range",
    "http_status",
    "kairosActive",
    "model",
    "platform",
    "provider",
    "skillMode",
    "subscriptionType",
    "toolName",
    "userBucket",
    "userType",
    "version",
    "versionBase"
  ];
  logBatch = [];
  initializeDatadog = memoize_default(async () => {
    if (isAnalyticsDisabled()) {
      datadogInitialized = false;
      return false;
    }
    if (!DATADOG_LOGS_ENDPOINT || !DATADOG_CLIENT_TOKEN) {
      datadogInitialized = false;
      return false;
    }
    try {
      datadogInitialized = true;
      return true;
    } catch (error) {
      logError(error);
      datadogInitialized = false;
      return false;
    }
  });
  getUserBucket = memoize_default(() => {
    const userId = getOrCreateUserID();
    const hash = createHash("sha256").update(userId).digest("hex");
    return parseInt(hash.slice(0, 8), 16) % NUM_USER_BUCKETS;
  });
});

export { initializeDatadog, shutdownDatadog, trackDatadogEvent, init_datadog };
