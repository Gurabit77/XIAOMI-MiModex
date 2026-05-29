// @bun
import {
  getRepoClassCached,
  init_commitAttribution
} from "./chunk-1th1nz5d.js";
import {
  getGlobalConfig,
  init_config1 as init_config
} from "./chunk-1ghcng4e.js";
import {
  init_envUtils,
  isEnvTruthy
} from "./chunk-hxhwzgnn.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/undercover.ts
function isUndercover() {
  if (process.env.USER_TYPE === "ant") {
    if (isEnvTruthy(process.env.CLAUDE_CODE_UNDERCOVER))
      return true;
    return getRepoClassCached() !== "internal";
  }
  return false;
}
function getUndercoverInstructions() {
  if (process.env.USER_TYPE === "ant") {
    return `## UNDERCOVER MODE \u2014 CRITICAL

You are operating UNDERCOVER in a PUBLIC/OPEN-SOURCE repository. Your commit
messages, PR titles, and PR bodies MUST NOT contain ANY Anthropic-internal
information. Do not blow your cover.

NEVER include in commit messages or PR descriptions:
- Internal model codenames (animal names like Capybara, Tengu, etc.)
- Unreleased model version numbers (e.g., sonnet-4-8)
- Internal repo or project names (e.g., claude-cli-internal, anthropics/\u2026)
- Internal tooling, Slack channels, or short links (e.g., go/cc, #claude-code-\u2026)
- The phrase "MiMo Code" or any mention that you are an AI
- Any hint of what model or version you are
- Co-Authored-By lines or any other attribution

Write commit messages as a human developer would \u2014 describe only what the code
change does.

GOOD:
- "Fix race condition in file watcher initialization"
- "Add support for custom key bindings"
- "Refactor parser for better error messages"

BAD (never write these):
- "Fix bug found while testing with Claude Capybara"
- "1-shotted by claude-opus-4-6"
- "1-shotted by claude-opus-4-7"
- "Generated with MiMo Code"
- "Co-Authored-By: Claude Opus 4.6 <\u2026>"
- "Co-Authored-By: Claude Opus 4.7 <\u2026>"
`;
  }
  return "";
}
function shouldShowUndercoverAutoNotice() {
  if (process.env.USER_TYPE === "ant") {
    if (isEnvTruthy(process.env.CLAUDE_CODE_UNDERCOVER))
      return false;
    if (!isUndercover())
      return false;
    if (getGlobalConfig().hasSeenUndercoverAutoNotice)
      return false;
    return true;
  }
  return false;
}
var init_undercover = __esm(() => {
  init_commitAttribution();
  init_config();
  init_envUtils();
});

export { isUndercover, getUndercoverInstructions, shouldShowUndercoverAutoNotice, init_undercover };
