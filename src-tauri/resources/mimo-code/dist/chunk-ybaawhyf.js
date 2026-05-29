// @bun
import {
  init_semver,
  lt
} from "./chunk-ps49ymvj.js";
import {
  init_bridgeConfig,
  isSelfHostedBridge
} from "./chunk-jtnkamme.js";
import {
  checkGate_CACHED_OR_BLOCKING,
  getDynamicConfig_CACHED_MAY_BE_STALE,
  getFeatureValue_CACHED_MAY_BE_STALE,
  getOauthAccountInfo,
  hasProfileScope,
  init_auth,
  init_growthbook,
  isClaudeAISubscriber
} from "./chunk-1ghcng4e.js";
import {
  init_envUtils
} from "./chunk-hxhwzgnn.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/bridge/bridgeEnabled.ts
function isBridgeEnabled() {
  if (isSelfHostedBridge()) {
    return true;
  }
  return isClaudeAISubscriber2() && getFeatureValue_CACHED_MAY_BE_STALE("tengu_ccr_bridge", false);
}
async function isBridgeEnabledBlocking() {
  if (isSelfHostedBridge()) {
    return true;
  }
  return isClaudeAISubscriber2() && await checkGate_CACHED_OR_BLOCKING("tengu_ccr_bridge");
}
async function getBridgeDisabledReason() {
  if (true) {
    if (isSelfHostedBridge()) {
      return null;
    }
    if (!isClaudeAISubscriber2()) {
      return "Remote Control requires a claude.ai subscription. Run `claude auth login` to sign in with your claude.ai account.";
    }
    if (!hasProfileScope2()) {
      return "Remote Control requires a full-scope login token. Long-lived tokens (from `claude setup-token` or CLAUDE_CODE_OAUTH_TOKEN) are limited to inference-only for security reasons. Run `claude auth login` to use Remote Control.";
    }
    if (!getOauthAccountInfo2()?.organizationUuid) {
      return "Unable to determine your organization for Remote Control eligibility. Run `claude auth login` to refresh your account information.";
    }
    if (!await checkGate_CACHED_OR_BLOCKING("tengu_ccr_bridge")) {
      return "Remote Control is not yet enabled for your account.";
    }
    return null;
  }
  return "Remote Control is not available in this build.";
}
function isClaudeAISubscriber2() {
  try {
    return isClaudeAISubscriber();
  } catch {
    return false;
  }
}
function hasProfileScope2() {
  try {
    return hasProfileScope();
  } catch {
    return false;
  }
}
function getOauthAccountInfo2() {
  try {
    return getOauthAccountInfo();
  } catch {
    return;
  }
}
function isEnvLessBridgeEnabled() {
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_bridge_repl_v2", false);
}
function isCseShimEnabled() {
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_bridge_repl_v2_cse_shim_enabled", true);
}
function checkBridgeMinVersion() {
  if (true) {
    const config = getDynamicConfig_CACHED_MAY_BE_STALE("tengu_bridge_min_version", { minVersion: "0.0.0" });
    if (config.minVersion && lt("1.0.0", config.minVersion)) {
      return `Your version of MiMo Code (${"1.0.0"}) is too old for Remote Control.
Version ${config.minVersion} or higher is required. Run \`claude update\` to update.`;
    }
  }
  return null;
}
function getCcrAutoConnectDefault() {
  return false;
}
function isCcrMirrorEnabled() {
  return false;
}
var init_bridgeEnabled = __esm(() => {
  init_growthbook();
  init_bridgeConfig();
  init_auth();
  init_envUtils();
  init_semver();
});

export { isBridgeEnabled, isBridgeEnabledBlocking, getBridgeDisabledReason, isEnvLessBridgeEnabled, isCseShimEnabled, checkBridgeMinVersion, getCcrAutoConnectDefault, isCcrMirrorEnabled, init_bridgeEnabled };
