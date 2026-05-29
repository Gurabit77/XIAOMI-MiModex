// @bun
import {
  init_normalization,
  normalizeNameForMCP
} from "./chunk-3c25bcsw.js";
import {
  env,
  init_env
} from "./chunk-nw7v8w65.js";
import {
  __esm,
  __export
} from "./chunk-qp2qdcda.js";

// src/utils/computerUse/common.ts
var exports_common = {};
__export(exports_common, {
  isComputerUseMCPServer: () => isComputerUseMCPServer,
  getTerminalBundleId: () => getTerminalBundleId,
  COMPUTER_USE_MCP_SERVER_NAME: () => COMPUTER_USE_MCP_SERVER_NAME,
  CLI_HOST_BUNDLE_ID: () => CLI_HOST_BUNDLE_ID,
  CLI_CU_CAPABILITIES: () => CLI_CU_CAPABILITIES
});
function getTerminalBundleId() {
  const cfBundleId = process.env.__CFBundleIdentifier;
  if (cfBundleId)
    return cfBundleId;
  return TERMINAL_BUNDLE_ID_FALLBACK[env.terminal ?? ""] ?? null;
}
function isComputerUseMCPServer(name) {
  return normalizeNameForMCP(name) === COMPUTER_USE_MCP_SERVER_NAME;
}
var COMPUTER_USE_MCP_SERVER_NAME = "computer-use", CLI_HOST_BUNDLE_ID = "com.anthropic.claude-code.cli-no-window", TERMINAL_BUNDLE_ID_FALLBACK, CLI_CU_CAPABILITIES;
var init_common = __esm(() => {
  init_normalization();
  init_env();
  TERMINAL_BUNDLE_ID_FALLBACK = {
    "iTerm.app": "com.googlecode.iterm2",
    Apple_Terminal: "com.apple.Terminal",
    ghostty: "com.mitchellh.ghostty",
    kitty: "net.kovidgoyal.kitty",
    WarpTerminal: "dev.warp.Warp-Stable",
    vscode: "com.microsoft.VSCode"
  };
  CLI_CU_CAPABILITIES = {
    screenshotFiltering: process.platform === "darwin" ? "native" : "none",
    platform: process.platform === "win32" ? "win32" : process.platform === "linux" ? "linux" : "darwin"
  };
});

export { COMPUTER_USE_MCP_SERVER_NAME, CLI_HOST_BUNDLE_ID, getTerminalBundleId, CLI_CU_CAPABILITIES, isComputerUseMCPServer, exports_common, init_common };
