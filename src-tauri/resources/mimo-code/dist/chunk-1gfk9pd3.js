// @bun
import {
  checkGate_CACHED_OR_BLOCKING,
  exports_auth,
  getFeatureValue_CACHED_MAY_BE_STALE,
  getSecureStorage,
  init_auth,
  init_growthbook,
  init_secureStorage
} from "./chunk-1ghcng4e.js";
import {
  getOauthConfig,
  init_oauth
} from "./chunk-rh5a2rg9.js";
import {
  init_privacyLevel,
  isEssentialTrafficOnly
} from "./chunk-w5ahy59y.js";
import {
  errorMessage,
  init_debug,
  init_errors,
  init_slowOperations,
  jsonStringify,
  logForDebugging
} from "./chunk-rpbc3b7k.js";
import {
  init_memoize,
  memoize_default
} from "./chunk-qx8z601m.js";
import {
  axios_default,
  init_axios
} from "./chunk-3v4d4h0t.js";
import {
  __esm,
  __toCommonJS
} from "./chunk-qp2qdcda.js";

// src/bridge/trustedDevice.ts
import { hostname } from "os";
function isGateEnabled() {
  return getFeatureValue_CACHED_MAY_BE_STALE(TRUSTED_DEVICE_GATE, false);
}
function getTrustedDeviceToken() {
  if (!isGateEnabled()) {
    return;
  }
  return readStoredToken();
}
function clearTrustedDeviceTokenCache() {
  readStoredToken.cache?.clear?.();
}
function clearTrustedDeviceToken() {
  if (!isGateEnabled()) {
    return;
  }
  const secureStorage = getSecureStorage();
  try {
    const data = secureStorage.read();
    if (data?.trustedDeviceToken) {
      delete data.trustedDeviceToken;
      secureStorage.update(data);
    }
  } catch {}
  readStoredToken.cache?.clear?.();
}
async function enrollTrustedDevice() {
  try {
    if (!await checkGate_CACHED_OR_BLOCKING(TRUSTED_DEVICE_GATE)) {
      logForDebugging(`[trusted-device] Gate ${TRUSTED_DEVICE_GATE} is off, skipping enrollment`);
      return;
    }
    if (process.env.CLAUDE_TRUSTED_DEVICE_TOKEN) {
      logForDebugging("[trusted-device] CLAUDE_TRUSTED_DEVICE_TOKEN env var is set, skipping enrollment (env var takes precedence)");
      return;
    }
    const { getClaudeAIOAuthTokens } = (init_auth(), __toCommonJS(exports_auth));
    const accessToken = getClaudeAIOAuthTokens()?.accessToken;
    if (!accessToken) {
      logForDebugging("[trusted-device] No OAuth token, skipping enrollment");
      return;
    }
    const secureStorage = getSecureStorage();
    if (isEssentialTrafficOnly()) {
      logForDebugging("[trusted-device] Essential traffic only, skipping enrollment");
      return;
    }
    const baseUrl = getOauthConfig().BASE_API_URL;
    let response;
    try {
      response = await axios_default.post(`${baseUrl}/api/auth/trusted_devices`, { display_name: `MiMo Code on ${hostname()} \xB7 ${process.platform}` }, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json"
        },
        timeout: 1e4,
        validateStatus: (s) => s < 500
      });
    } catch (err) {
      logForDebugging(`[trusted-device] Enrollment request failed: ${errorMessage(err)}`);
      return;
    }
    if (response.status !== 200 && response.status !== 201) {
      logForDebugging(`[trusted-device] Enrollment failed ${response.status}: ${jsonStringify(response.data).slice(0, 200)}`);
      return;
    }
    const token = response.data?.device_token;
    if (!token || typeof token !== "string") {
      logForDebugging("[trusted-device] Enrollment response missing device_token field");
      return;
    }
    try {
      const storageData = secureStorage.read();
      if (!storageData) {
        logForDebugging("[trusted-device] Cannot read storage, skipping token persist");
        return;
      }
      storageData.trustedDeviceToken = token;
      const result = secureStorage.update(storageData);
      if (!result.success) {
        logForDebugging(`[trusted-device] Failed to persist token: ${result.warning ?? "unknown"}`);
        return;
      }
      readStoredToken.cache?.clear?.();
      logForDebugging(`[trusted-device] Enrolled device_id=${response.data.device_id ?? "unknown"}`);
    } catch (err) {
      logForDebugging(`[trusted-device] Storage write failed: ${errorMessage(err)}`);
    }
  } catch (err) {
    logForDebugging(`[trusted-device] Enrollment error: ${errorMessage(err)}`);
  }
}
var TRUSTED_DEVICE_GATE = "tengu_sessions_elevated_auth_enforcement", readStoredToken;
var init_trustedDevice = __esm(() => {
  init_axios();
  init_memoize();
  init_oauth();
  init_growthbook();
  init_debug();
  init_errors();
  init_privacyLevel();
  init_secureStorage();
  init_slowOperations();
  readStoredToken = memoize_default(() => {
    const envToken = process.env.CLAUDE_TRUSTED_DEVICE_TOKEN;
    if (envToken) {
      return envToken;
    }
    return getSecureStorage().read()?.trustedDeviceToken;
  });
});

export { getTrustedDeviceToken, clearTrustedDeviceTokenCache, clearTrustedDeviceToken, enrollTrustedDevice, init_trustedDevice };
