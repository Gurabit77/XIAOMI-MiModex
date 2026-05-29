// @bun
import {
  getAuthHeaders,
  getClaudeAIOAuthTokens,
  getClaudeCodeUserAgent,
  hasProfileScope,
  init_auth,
  init_client,
  init_http,
  init_userAgent,
  isClaudeAISubscriber,
  isOAuthTokenExpired
} from "./chunk-1ghcng4e.js";
import {
  getOauthConfig,
  init_oauth
} from "./chunk-rh5a2rg9.js";
import {
  axios_default,
  init_axios
} from "./chunk-3v4d4h0t.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/services/api/usage.ts
async function fetchUtilization() {
  if (!isClaudeAISubscriber() || !hasProfileScope()) {
    return {};
  }
  const tokens = getClaudeAIOAuthTokens();
  if (tokens && isOAuthTokenExpired(tokens.expiresAt)) {
    return null;
  }
  const authResult = getAuthHeaders();
  if (authResult.error) {
    throw new Error(`Auth error: ${authResult.error}`);
  }
  const headers = {
    "Content-Type": "application/json",
    "User-Agent": getClaudeCodeUserAgent(),
    ...authResult.headers
  };
  const url = `${getOauthConfig().BASE_API_URL}/api/oauth/usage`;
  const response = await axios_default.get(url, {
    headers,
    timeout: 5000
  });
  return response.data;
}
var init_usage = __esm(() => {
  init_axios();
  init_oauth();
  init_auth();
  init_http();
  init_userAgent();
  init_client();
});

export { fetchUtilization, init_usage };
