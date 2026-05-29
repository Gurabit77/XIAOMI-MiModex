// @bun
import {
  Login,
  init_login
} from "./chunk-tymxn0z2.js";
import {
  init_browser,
  openBrowser
} from "./chunk-6dj3cf9s.js";
import {
  getClaudeAIOAuthTokens,
  getOauthProfileFromOauthToken,
  init_auth,
  init_getOauthProfile,
  isClaudeAISubscriber
} from "./chunk-1ghcng4e.js";
import {
  require_jsx_dev_runtime
} from "./chunk-b5wxetbv.js";
import {
  init_log,
  logError
} from "./chunk-w5ahy59y.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/commands/upgrade/upgrade.tsx
async function call(onDone, context) {
  try {
    if (isClaudeAISubscriber()) {
      const tokens = getClaudeAIOAuthTokens();
      let isMax20x = false;
      if (tokens?.subscriptionType && tokens?.rateLimitTier) {
        isMax20x = tokens.subscriptionType === "max" && tokens.rateLimitTier === "default_claude_max_20x";
      } else if (tokens?.accessToken) {
        const profile = await getOauthProfileFromOauthToken(tokens.accessToken);
        isMax20x = profile?.organization?.organization_type === "claude_max" && profile?.organization?.rate_limit_tier === "default_claude_max_20x";
      }
      if (isMax20x) {
        setTimeout(onDone, 0, "You are already on the highest Max subscription plan. For additional usage, run /login to switch to an API usage-billed account.");
        return null;
      }
    }
    const url = "https://claude.ai/upgrade/max";
    await openBrowser(url);
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Login, {
      startingMessage: "Starting new login following /upgrade. Exit with Ctrl-C to use existing account.",
      onDone: (success) => {
        context.onChangeAPIKey();
        onDone(success ? "Login successful" : "Login interrupted");
      }
    }, undefined, false, undefined, this);
  } catch (error) {
    logError(error);
    setTimeout(onDone, 0, "Failed to open browser. Please visit https://claude.ai/upgrade/max to upgrade.");
  }
  return null;
}
var jsx_dev_runtime;
var init_upgrade = __esm(() => {
  init_getOauthProfile();
  init_auth();
  init_browser();
  init_log();
  init_login();
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});

export { call, init_upgrade };
