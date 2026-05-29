// @bun
import {
  init_analytics,
  logEvent
} from "./chunk-f2mhrmww.js";
import {
  errorMessage,
  init_debug,
  init_errors,
  init_slowOperations,
  jsonStringify,
  logForDebugging
} from "./chunk-rpbc3b7k.js";
import {
  __esm,
  __export
} from "./chunk-qp2qdcda.js";

// src/bridge/sessionIdCompat.ts
var exports_sessionIdCompat = {};
__export(exports_sessionIdCompat, {
  toInfraSessionId: () => toInfraSessionId,
  toCompatSessionId: () => toCompatSessionId,
  setCseShimGate: () => setCseShimGate
});
function setCseShimGate(gate) {
  _isCseShimEnabled = gate;
}
function toCompatSessionId(id) {
  if (!id.startsWith("cse_"))
    return id;
  if (_isCseShimEnabled && !_isCseShimEnabled())
    return id;
  return "session_" + id.slice("cse_".length);
}
function toInfraSessionId(id) {
  if (!id.startsWith("session_"))
    return id;
  return "cse_" + id.slice("session_".length);
}
var _isCseShimEnabled;
var init_sessionIdCompat = () => {};

// src/bridge/debugUtils.ts
function redactSecrets(s) {
  return s.replace(SECRET_PATTERN, (_match, field, value) => {
    if (value.length < REDACT_MIN_LENGTH) {
      return `"${field}":"[REDACTED]"`;
    }
    const redacted = `${value.slice(0, 8)}...${value.slice(-4)}`;
    return `"${field}":"${redacted}"`;
  });
}
function debugTruncate(s) {
  const flat = s.replace(/\n/g, "\\n");
  if (flat.length <= DEBUG_MSG_LIMIT) {
    return flat;
  }
  return flat.slice(0, DEBUG_MSG_LIMIT) + `... (${flat.length} chars)`;
}
function debugBody(data) {
  const raw = typeof data === "string" ? data : jsonStringify(data);
  const s = redactSecrets(raw);
  if (s.length <= DEBUG_MSG_LIMIT) {
    return s;
  }
  return s.slice(0, DEBUG_MSG_LIMIT) + `... (${s.length} chars)`;
}
function describeAxiosError(err) {
  const msg = errorMessage(err);
  if (err && typeof err === "object" && "response" in err) {
    const response = err.response;
    if (response?.data && typeof response.data === "object") {
      const data = response.data;
      const detail = typeof data.message === "string" ? data.message : typeof data.error === "object" && data.error && ("message" in data.error) && typeof data.error.message === "string" ? data.error.message : undefined;
      if (detail) {
        return `${msg}: ${detail}`;
      }
    }
  }
  return msg;
}
function extractHttpStatus(err) {
  if (err && typeof err === "object" && "response" in err && err.response && typeof err.response.status === "number") {
    return err.response.status;
  }
  return;
}
function extractErrorDetail(data) {
  if (!data || typeof data !== "object")
    return;
  if ("message" in data && typeof data.message === "string") {
    return data.message;
  }
  if ("error" in data && data.error !== null && typeof data.error === "object" && "message" in data.error && typeof data.error.message === "string") {
    return data.error.message;
  }
  return;
}
function logBridgeSkip(reason, debugMsg, v2) {
  if (debugMsg) {
    logForDebugging(debugMsg);
  }
  logEvent("tengu_bridge_repl_skipped", {
    reason,
    ...v2 !== undefined && { v2 }
  });
}
var DEBUG_MSG_LIMIT = 2000, SECRET_FIELD_NAMES, SECRET_PATTERN, REDACT_MIN_LENGTH = 16;
var init_debugUtils = __esm(() => {
  init_analytics();
  init_debug();
  init_errors();
  init_slowOperations();
  SECRET_FIELD_NAMES = [
    "session_ingress_token",
    "environment_secret",
    "access_token",
    "secret",
    "token"
  ];
  SECRET_PATTERN = new RegExp(`"(${SECRET_FIELD_NAMES.join("|")})"\\s*:\\s*"([^"]*)"`, "g");
});

export { setCseShimGate, toCompatSessionId, toInfraSessionId, exports_sessionIdCompat, init_sessionIdCompat, debugTruncate, debugBody, describeAxiosError, extractHttpStatus, extractErrorDetail, logBridgeSkip, init_debugUtils };
