// @bun
import {
  getClaudeAIOAuthTokens,
  init_auth
} from "./chunk-1ghcng4e.js";
import {
  getOauthConfig,
  init_oauth
} from "./chunk-rh5a2rg9.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/bridge/bridgeConfig.ts
function getBridgeTokenOverride() {
  return process.env.CLAUDE_BRIDGE_OAUTH_TOKEN || undefined;
}
function getBridgeBaseUrlOverride() {
  return process.env.CLAUDE_BRIDGE_BASE_URL || undefined;
}
function getBridgeAccessToken() {
  return getBridgeTokenOverride() ?? getClaudeAIOAuthTokens()?.accessToken;
}
function getBridgeBaseUrl() {
  return getBridgeBaseUrlOverride() ?? getOauthConfig().BASE_API_URL;
}
function isSelfHostedBridge() {
  return !!getBridgeBaseUrlOverride();
}
var init_bridgeConfig = __esm(() => {
  init_oauth();
  init_auth();
});

export { getBridgeTokenOverride, getBridgeBaseUrlOverride, getBridgeAccessToken, getBridgeBaseUrl, isSelfHostedBridge, init_bridgeConfig };
