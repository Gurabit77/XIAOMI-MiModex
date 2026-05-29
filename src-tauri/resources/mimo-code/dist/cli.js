#!/usr/bin/env bun
// @bun
import {
  init_envUtils,
  isEnvTruthy
} from "./chunk-hxhwzgnn.js";
import"./chunk-qx8z601m.js";
import"./chunk-cgm6758j.js";
import {
  __require
} from "./chunk-qp2qdcda.js";

// src/entrypoints/mimo-bootstrap.ts
import { existsSync, readFileSync } from "fs";
import { homedir } from "os";
import { join } from "path";
process.env.MIMO_CODE_RUNTIME = "1";
var mimoConfigDir = join(homedir(), ".mimo");
if (!process.env.CLAUDE_CONFIG_DIR) {
  process.env.CLAUDE_CONFIG_DIR = mimoConfigDir;
}
var fileConfig = {};
var configPath = join(mimoConfigDir, "mimo.config.json");
if (existsSync(configPath)) {
  try {
    fileConfig = JSON.parse(readFileSync(configPath, "utf8"));
  } catch {}
}
var mimoApiKey = process.env.MIMO_API_KEY || fileConfig.apiKey || "";
if (!mimoApiKey) {
  console.error("\x1B[33m\u26A0 MIMO_API_KEY not set. Run /login to configure, or see docs/SETUP.md\x1B[0m");
}
process.env.MIMO_API_KEY = mimoApiKey;
var mimoBaseUrl = process.env.MIMO_BASE_URL || fileConfig.baseUrl || "https://token-plan-cn.xiaomimimo.com/anthropic";
process.env.ANTHROPIC_BASE_URL = mimoBaseUrl;
process.env.MIMO_BASE_URL = mimoBaseUrl;
process.env.ANTHROPIC_AUTH_TOKEN = mimoApiKey;
delete process.env.ANTHROPIC_CUSTOM_HEADERS;
delete process.env.ANTHROPIC_API_KEY;
delete process.env.ANTHROPIC_MODEL;
process.env.ANTHROPIC_DEFAULT_HAIKU_MODEL = "mimo-v2.5-pro";
process.env.ANTHROPIC_DEFAULT_SONNET_MODEL = "mimo-v2.5-pro";
process.env.ANTHROPIC_DEFAULT_OPUS_MODEL = "mimo-v2.5-pro";
process.env.ANTHROPIC_SMALL_FAST_MODEL = "mimo-v2.5-pro";
process.env.API_TIMEOUT_MS = process.env.API_TIMEOUT_MS || "3000000";

// src/entrypoints/cli.tsx
init_envUtils();
if (!process.env.ANTHROPIC_DEFAULT_HAIKU_MODEL_NAME) {
  process.env.ANTHROPIC_DEFAULT_HAIKU_MODEL_NAME = "MiMo V2.5";
}
if (!process.env.ANTHROPIC_DEFAULT_HAIKU_MODEL_DESCRIPTION) {
  process.env.ANTHROPIC_DEFAULT_HAIKU_MODEL_DESCRIPTION = "MiMo V2.5 \xB7 Fast & efficient coding";
}
if (!process.env.ANTHROPIC_DEFAULT_SONNET_MODEL_NAME) {
  process.env.ANTHROPIC_DEFAULT_SONNET_MODEL_NAME = "MiMo V2.5";
}
if (!process.env.ANTHROPIC_DEFAULT_SONNET_MODEL_DESCRIPTION) {
  process.env.ANTHROPIC_DEFAULT_SONNET_MODEL_DESCRIPTION = "MiMo V2.5 \xB7 Best for everyday coding tasks";
}
if (!process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_NAME) {
  process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_NAME = "MiMo V2.5 Pro";
}
if (!process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_DESCRIPTION) {
  process.env.ANTHROPIC_DEFAULT_OPUS_MODEL_DESCRIPTION = "MiMo V2.5 Pro \xB7 Most capable, 1M context";
}
if (!process.env.API_TIMEOUT_MS) {
  process.env.API_TIMEOUT_MS = "3000000";
}
if (typeof globalThis.MACRO === "undefined") {
  globalThis.MACRO = {
    VERSION: process.env.MIMO_CODE_VERSION || "1.0.0",
    BUILD_TIME: new Date().toISOString(),
    FEEDBACK_CHANNEL: "",
    ISSUES_EXPLAINER: "",
    NATIVE_PACKAGE_URL: "",
    PACKAGE_URL: "",
    VERSION_CHANGELOG: ""
  };
}
if (isEnvTruthy(process.env.CLAUDE_CODE_FORCE_INTERACTIVE)) {
  for (const stream of [process.stdin, process.stdout, process.stderr]) {
    if (!stream.isTTY) {
      try {
        Object.defineProperty(stream, "isTTY", {
          value: true,
          configurable: true
        });
      } catch {}
    }
  }
}
process.env.COREPACK_ENABLE_AUTO_PIN = "0";
if (process.env.CLAUDE_CODE_REMOTE === "true") {
  const existing = process.env.NODE_OPTIONS || "";
  process.env.NODE_OPTIONS = existing ? `${existing} --max-old-space-size=8192` : "--max-old-space-size=8192";
}
if (false) {}
async function main() {
  const args = process.argv.slice(2);
  if (args.length === 1 && (args[0] === "--version" || args[0] === "-v" || args[0] === "-V")) {
    console.log(`${"1.0.0"} (MiMo Code)`);
    return;
  }
  const { profileCheckpoint } = await import("./chunk-vgrj3s9r.js");
  profileCheckpoint("cli_entry");
  if (false) {}
  if (process.argv[2] === "--claude-in-chrome-mcp") {
    profileCheckpoint("cli_claude_in_chrome_mcp_path");
    const { runClaudeInChromeMcpServer } = await import("./chunk-gnq3fbtj.js");
    await runClaudeInChromeMcpServer();
    return;
  } else if (process.argv[2] === "--chrome-native-host") {
    profileCheckpoint("cli_chrome_native_host_path");
    const { runChromeNativeHost } = await import("./chunk-p1wa9gaa.js");
    await runChromeNativeHost();
    return;
  } else if (process.argv[2] === "--computer-use-mcp") {
    profileCheckpoint("cli_computer_use_mcp_path");
    const { runComputerUseMcpServer } = await import("./chunk-8zbq8av4.js");
    await runComputerUseMcpServer();
    return;
  }
  if (process.argv[2] === "--acp") {
    profileCheckpoint("cli_acp_path");
    const { runAcpAgent } = await import("./chunk-2aa38em7.js");
    await runAcpAgent();
    return;
  }
  if (args[0] === "weixin") {
    profileCheckpoint("cli_weixin_path");
    const { handleWeixinCli } = await import("./chunk-2kpp2yf4.js");
    const { enableConfigs } = await import("./chunk-yqj68t0s.js");
    const { initializeAnalyticsSink } = await import("./chunk-x4swwxz7.js");
    const { shutdownDatadog } = await import("./chunk-2mfd12dn.js");
    const { shutdown1PEventLogging } = await import("./chunk-gneke3g6.js");
    const { logForDebugging } = await import("./chunk-8xk2432z.js");
    const { ChannelPermissionRequestNotificationSchema } = await import("./chunk-4e2rqsxr.js");
    await handleWeixinCli(args.slice(1), {
      enableConfigs,
      initializeAnalyticsSink,
      shutdownDatadog,
      shutdown1PEventLogging,
      logForDebugging,
      registerPermissionHandler(server, handler) {
        server.setNotificationHandler(ChannelPermissionRequestNotificationSchema(), async (notification) => handler(notification.params));
      }
    }, "1.0.0");
    return;
  }
  if (args[0] === "--daemon-worker" || args[0]?.startsWith("--daemon-worker=")) {
    if (false) {}
    const kind = args[0] === "--daemon-worker" ? args[1] : args[0].split("=")[1];
    const { runDaemonWorker } = await import("./chunk-3xn8ahs5.js");
    await runDaemonWorker(kind);
    return;
  }
  if (args[0] === "remote-control" || args[0] === "rc" || args[0] === "remote" || args[0] === "sync" || args[0] === "bridge") {
    profileCheckpoint("cli_bridge_path");
    const { enableConfigs } = await import("./chunk-yqj68t0s.js");
    enableConfigs();
    const { getBridgeDisabledReason, checkBridgeMinVersion } = await import("./chunk-mb6f8q6e.js");
    const { BRIDGE_LOGIN_ERROR } = await import("./chunk-bsbmmfyt.js");
    const { bridgeMain } = await import("./chunk-rhnzmrej.js");
    const { exitWithError } = await import("./chunk-y1784krc.js");
    const { getClaudeAIOAuthTokens } = await import("./chunk-j0v9g0w9.js");
    const { getBridgeAccessToken } = await import("./chunk-hg57bsp3.js");
    if (!getClaudeAIOAuthTokens()?.accessToken && !getBridgeAccessToken()) {
      exitWithError(BRIDGE_LOGIN_ERROR);
    }
    const disabledReason = await getBridgeDisabledReason();
    if (disabledReason) {
      exitWithError(`Error: ${disabledReason}`);
    }
    const versionError = checkBridgeMinVersion();
    if (versionError) {
      exitWithError(versionError);
    }
    const { waitForPolicyLimitsToLoad, isPolicyAllowed } = await import("./chunk-409c48kq.js");
    await waitForPolicyLimitsToLoad();
    if (!isPolicyAllowed("allow_remote_control")) {
      exitWithError("Error: Remote Control is disabled by your organization's policy.");
    }
    await bridgeMain(args.slice(1));
    return;
  }
  if (args[0] === "daemon") {
    profileCheckpoint("cli_daemon_path");
    const { enableConfigs } = await import("./chunk-yqj68t0s.js");
    enableConfigs();
    const { setShellIfWindows } = await import("./chunk-fe7f0r6v.js");
    setShellIfWindows();
    const { initSinks } = await import("./chunk-5fz99tby.js");
    initSinks();
    const { daemonMain } = await import("./chunk-8ge4150r.js");
    await daemonMain(args.slice(1));
    return;
  }
  if (args.includes("--bg") || args.includes("--background")) {
    profileCheckpoint("cli_daemon_path");
    const { enableConfigs } = await import("./chunk-yqj68t0s.js");
    enableConfigs();
    const { setShellIfWindows } = await import("./chunk-fe7f0r6v.js");
    setShellIfWindows();
    const bg = await import("./chunk-m3zs13mw.js");
    await bg.handleBgStart(args.filter((a) => a !== "--bg" && a !== "--background"));
    return;
  }
  if (args[0] === "ps" || args[0] === "logs" || args[0] === "attach" || args[0] === "kill") {
    const mapped = args[0] === "ps" ? "status" : args[0];
    console.error(`[deprecated] Use: claude daemon ${mapped}${args[1] ? " " + args[1] : ""}`);
    profileCheckpoint("cli_daemon_path");
    const { enableConfigs } = await import("./chunk-yqj68t0s.js");
    enableConfigs();
    const { setShellIfWindows } = await import("./chunk-fe7f0r6v.js");
    setShellIfWindows();
    const { initSinks } = await import("./chunk-5fz99tby.js");
    initSinks();
    const { daemonMain } = await import("./chunk-8ge4150r.js");
    await daemonMain([args[0] === "ps" ? "status" : args[0], ...args.slice(1)]);
    return;
  }
  if (args[0] === "job") {
    profileCheckpoint("cli_templates_path");
    const { templatesMain } = await import("./chunk-ay626ssv.js");
    await templatesMain(args.slice(1));
    process.exit(0);
  }
  if (args[0] === "new" || args[0] === "list" || args[0] === "reply") {
    console.error(`[deprecated] Use: claude job ${args[0]} ${args.slice(1).join(" ")}`.trim());
    profileCheckpoint("cli_templates_path");
    const { templatesMain } = await import("./chunk-ay626ssv.js");
    await templatesMain(args);
    process.exit(0);
  }
  if (false) {}
  if (false) {}
  const hasTmuxFlag = args.includes("--tmux") || args.includes("--tmux=classic");
  if (hasTmuxFlag && (args.includes("-w") || args.includes("--worktree") || args.some((a) => a.startsWith("--worktree=")))) {
    profileCheckpoint("cli_tmux_worktree_fast_path");
    const { enableConfigs } = await import("./chunk-yqj68t0s.js");
    enableConfigs();
    const { isWorktreeModeEnabled } = await import("./chunk-pwwa7s62.js");
    if (isWorktreeModeEnabled()) {
      const { execIntoTmuxWorktree } = await import("./chunk-5md6aczp.js");
      const result = await execIntoTmuxWorktree(args);
      if (result.handled) {
        return;
      }
      if (result.error) {
        const { exitWithError } = await import("./chunk-y1784krc.js");
        exitWithError(result.error);
      }
    }
  }
  if (args.length === 1 && (args[0] === "--update" || args[0] === "--upgrade")) {
    process.argv = [process.argv[0], process.argv[1], "update"];
  }
  if (args.includes("--bare")) {
    process.env.CLAUDE_CODE_SIMPLE = "1";
  }
  const { startCapturingEarlyInput } = await import("./chunk-6anwrzmb.js");
  startCapturingEarlyInput();
  profileCheckpoint("cli_before_main_import");
  const { main: cliMain } = await import("./chunk-76h7azg0.js");
  profileCheckpoint("cli_after_main_import");
  await cliMain();
  profileCheckpoint("cli_after_main_complete");
}
main();
