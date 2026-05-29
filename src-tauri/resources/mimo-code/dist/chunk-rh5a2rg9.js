// @bun
import {
  init_envUtils,
  isEnvTruthy
} from "./chunk-hxhwzgnn.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/constants/oauth.ts
function getOauthConfigType() {
  if (process.env.USER_TYPE === "ant") {
    if (isEnvTruthy(process.env.USE_LOCAL_OAUTH)) {
      return "local";
    }
    if (isEnvTruthy(process.env.USE_STAGING_OAUTH)) {
      return "staging";
    }
  }
  return "prod";
}
function fileSuffixForOauthConfig() {
  if (process.env.CLAUDE_CODE_CUSTOM_OAUTH_URL) {
    return "-custom-oauth";
  }
  switch (getOauthConfigType()) {
    case "local":
      return "-local-oauth";
    case "staging":
      return "-staging-oauth";
    case "prod":
      return "";
  }
}
function getLocalOauthConfig() {
  const api = process.env.CLAUDE_LOCAL_OAUTH_API_BASE?.replace(/\/$/, "") ?? "http://localhost:8000";
  const apps = process.env.CLAUDE_LOCAL_OAUTH_APPS_BASE?.replace(/\/$/, "") ?? "http://localhost:4000";
  const consoleBase = process.env.CLAUDE_LOCAL_OAUTH_CONSOLE_BASE?.replace(/\/$/, "") ?? "http://localhost:3000";
  return {
    BASE_API_URL: api,
    CONSOLE_AUTHORIZE_URL: `${consoleBase}/oauth/authorize`,
    CLAUDE_AI_AUTHORIZE_URL: `${apps}/oauth/authorize`,
    CLAUDE_AI_ORIGIN: apps,
    TOKEN_URL: `${api}/v1/oauth/token`,
    API_KEY_URL: `${api}/api/oauth/claude_cli/create_api_key`,
    ROLES_URL: `${api}/api/oauth/claude_cli/roles`,
    CONSOLE_SUCCESS_URL: `${consoleBase}/buy_credits?returnUrl=/oauth/code/success%3Fapp%3Dclaude-code`,
    CLAUDEAI_SUCCESS_URL: `${consoleBase}/oauth/code/success?app=claude-code`,
    MANUAL_REDIRECT_URL: `${consoleBase}/oauth/code/callback`,
    CLIENT_ID: "22422756-60c9-4084-8eb7-27705fd5cf9a",
    OAUTH_FILE_SUFFIX: "-local-oauth",
    MCP_PROXY_URL: "http://localhost:8205",
    MCP_PROXY_PATH: "/v1/toolbox/shttp/mcp/{server_id}"
  };
}
function getOauthConfig() {
  let config = (() => {
    switch (getOauthConfigType()) {
      case "local":
        return getLocalOauthConfig();
      case "staging":
        return STAGING_OAUTH_CONFIG ?? PROD_OAUTH_CONFIG;
      case "prod":
        return PROD_OAUTH_CONFIG;
    }
  })();
  const oauthBaseUrl = process.env.CLAUDE_CODE_CUSTOM_OAUTH_URL;
  if (oauthBaseUrl) {
    const base = oauthBaseUrl.replace(/\/$/, "");
    if (!ALLOWED_OAUTH_BASE_URLS.includes(base)) {
      throw new Error("CLAUDE_CODE_CUSTOM_OAUTH_URL is not an approved endpoint.");
    }
    config = {
      ...config,
      BASE_API_URL: base,
      CONSOLE_AUTHORIZE_URL: `${base}/oauth/authorize`,
      CLAUDE_AI_AUTHORIZE_URL: `${base}/oauth/authorize`,
      CLAUDE_AI_ORIGIN: base,
      TOKEN_URL: `${base}/v1/oauth/token`,
      API_KEY_URL: `${base}/api/oauth/claude_cli/create_api_key`,
      ROLES_URL: `${base}/api/oauth/claude_cli/roles`,
      CONSOLE_SUCCESS_URL: `${base}/oauth/code/success?app=claude-code`,
      CLAUDEAI_SUCCESS_URL: `${base}/oauth/code/success?app=claude-code`,
      MANUAL_REDIRECT_URL: `${base}/oauth/code/callback`,
      OAUTH_FILE_SUFFIX: "-custom-oauth"
    };
  }
  const clientIdOverride = process.env.CLAUDE_CODE_OAUTH_CLIENT_ID;
  if (clientIdOverride) {
    config = {
      ...config,
      CLIENT_ID: clientIdOverride
    };
  }
  return config;
}
var CLAUDE_AI_INFERENCE_SCOPE = "user:inference", CLAUDE_AI_PROFILE_SCOPE = "user:profile", CONSOLE_SCOPE = "org:create_api_key", OAUTH_BETA_HEADER = "oauth-2025-04-20", CONSOLE_OAUTH_SCOPES, CLAUDE_AI_OAUTH_SCOPES, ALL_OAUTH_SCOPES, PROD_OAUTH_CONFIG, MCP_CLIENT_METADATA_URL = "https://claude.ai/oauth/claude-code-client-metadata", STAGING_OAUTH_CONFIG, ALLOWED_OAUTH_BASE_URLS;
var init_oauth = __esm(() => {
  init_envUtils();
  CONSOLE_OAUTH_SCOPES = [
    CONSOLE_SCOPE,
    CLAUDE_AI_PROFILE_SCOPE
  ];
  CLAUDE_AI_OAUTH_SCOPES = [
    CLAUDE_AI_PROFILE_SCOPE,
    CLAUDE_AI_INFERENCE_SCOPE,
    "user:sessions:claude_code",
    "user:mcp_servers",
    "user:file_upload"
  ];
  ALL_OAUTH_SCOPES = Array.from(new Set([...CONSOLE_OAUTH_SCOPES, ...CLAUDE_AI_OAUTH_SCOPES]));
  PROD_OAUTH_CONFIG = {
    BASE_API_URL: "https://api.anthropic.com",
    CONSOLE_AUTHORIZE_URL: "https://platform.claude.com/oauth/authorize",
    CLAUDE_AI_AUTHORIZE_URL: "https://claude.com/cai/oauth/authorize",
    CLAUDE_AI_ORIGIN: "https://claude.ai",
    TOKEN_URL: "https://platform.claude.com/v1/oauth/token",
    API_KEY_URL: "https://api.anthropic.com/api/oauth/claude_cli/create_api_key",
    ROLES_URL: "https://api.anthropic.com/api/oauth/claude_cli/roles",
    CONSOLE_SUCCESS_URL: "https://platform.claude.com/buy_credits?returnUrl=/oauth/code/success%3Fapp%3Dclaude-code",
    CLAUDEAI_SUCCESS_URL: "https://platform.claude.com/oauth/code/success?app=claude-code",
    MANUAL_REDIRECT_URL: "https://platform.claude.com/oauth/code/callback",
    CLIENT_ID: "9d1c250a-e61b-44d9-88ed-5944d1962f5e",
    OAUTH_FILE_SUFFIX: "",
    MCP_PROXY_URL: "https://mcp-proxy.anthropic.com",
    MCP_PROXY_PATH: "/v1/mcp/{server_id}"
  };
  STAGING_OAUTH_CONFIG = process.env.USER_TYPE === "ant" ? {
    BASE_API_URL: "https://api-staging.anthropic.com",
    CONSOLE_AUTHORIZE_URL: "https://platform.staging.ant.dev/oauth/authorize",
    CLAUDE_AI_AUTHORIZE_URL: "https://claude-ai.staging.ant.dev/oauth/authorize",
    CLAUDE_AI_ORIGIN: "https://claude-ai.staging.ant.dev",
    TOKEN_URL: "https://platform.staging.ant.dev/v1/oauth/token",
    API_KEY_URL: "https://api-staging.anthropic.com/api/oauth/claude_cli/create_api_key",
    ROLES_URL: "https://api-staging.anthropic.com/api/oauth/claude_cli/roles",
    CONSOLE_SUCCESS_URL: "https://platform.staging.ant.dev/buy_credits?returnUrl=/oauth/code/success%3Fapp%3Dclaude-code",
    CLAUDEAI_SUCCESS_URL: "https://platform.staging.ant.dev/oauth/code/success?app=claude-code",
    MANUAL_REDIRECT_URL: "https://platform.staging.ant.dev/oauth/code/callback",
    CLIENT_ID: "22422756-60c9-4084-8eb7-27705fd5cf9a",
    OAUTH_FILE_SUFFIX: "-staging-oauth",
    MCP_PROXY_URL: "https://mcp-proxy-staging.anthropic.com",
    MCP_PROXY_PATH: "/v1/mcp/{server_id}"
  } : undefined;
  ALLOWED_OAUTH_BASE_URLS = [
    "https://beacon.claude-ai.staging.ant.dev",
    "https://claude.fedstart.com",
    "https://claude-staging.fedstart.com"
  ];
});

export { fileSuffixForOauthConfig, CLAUDE_AI_INFERENCE_SCOPE, CLAUDE_AI_PROFILE_SCOPE, OAUTH_BETA_HEADER, CONSOLE_OAUTH_SCOPES, CLAUDE_AI_OAUTH_SCOPES, ALL_OAUTH_SCOPES, MCP_CLIENT_METADATA_URL, getOauthConfig, init_oauth };
