// @bun
import {
  init_shellQuote,
  quote
} from "./chunk-akkx6jmm.js";
import {
  init_bundledMode,
  isInBundledMode
} from "./chunk-xhesahm0.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/cliLaunch.ts
import { spawn } from "child_process";
function sanitizeExecArgv(raw) {
  const result = [];
  for (let i = 0;i < raw.length; i++) {
    const arg = raw[i];
    if (arg === "-d" || arg.startsWith("-d ") || arg.startsWith("-d\t")) {
      result.push(arg);
      if (arg === "-d" && i + 1 < raw.length) {
        result.push(raw[++i]);
      }
      continue;
    }
    if (arg.startsWith("-d") && arg.includes(":")) {
      result.push(arg);
      continue;
    }
    if (arg === "--feature") {
      result.push(arg);
      if (i + 1 < raw.length) {
        result.push(raw[++i]);
      }
      continue;
    }
    if (/^--inspect(-brk)?(=|$)/.test(arg)) {
      result.push(arg);
      continue;
    }
    if (arg.startsWith("--") && !arg.includes("=") && i + 1 < raw.length) {
      if (isInBundledMode())
        continue;
      result.push(arg);
      result.push(raw[++i]);
      continue;
    }
    if (arg.startsWith("-") && !isInBundledMode()) {
      result.push(arg);
    }
  }
  return result;
}
function buildCliLaunch(cliArgs, opts) {
  const baseEnv = opts?.env ?? process.env;
  const args = isInBundledMode() || !SCRIPT_PATH ? [...BOOTSTRAP_ARGS, ...cliArgs] : [...BOOTSTRAP_ARGS, SCRIPT_PATH, ...cliArgs];
  const env = { ...baseEnv };
  if (IS_WINDOWS) {
    if (process.env.CLAUDE_CODE_GIT_BASH_PATH && !env.CLAUDE_CODE_GIT_BASH_PATH) {
      env.CLAUDE_CODE_GIT_BASH_PATH = process.env.CLAUDE_CODE_GIT_BASH_PATH;
    }
    if (process.env.SHELL && !env.SHELL) {
      env.SHELL = process.env.SHELL;
    }
  }
  return {
    execPath: EXEC_PATH,
    args,
    env,
    windowsHide: IS_WINDOWS
  };
}
function spawnCli(spec, spawnOpts) {
  return spawn(spec.execPath, spec.args, {
    ...spawnOpts,
    env: { ...spec.env, ...spawnOpts.env },
    windowsHide: spec.windowsHide
  });
}
function quoteCliLaunch(spec) {
  return quote([spec.execPath, ...spec.args]);
}
function getBootstrapArgs() {
  return BOOTSTRAP_ARGS;
}
function getScriptPath() {
  return SCRIPT_PATH;
}
var BOOTSTRAP_ARGS, SCRIPT_PATH, EXEC_PATH, IS_WINDOWS;
var init_cliLaunch = __esm(() => {
  init_bundledMode();
  init_shellQuote();
  BOOTSTRAP_ARGS = Object.freeze(sanitizeExecArgv(process.execArgv));
  SCRIPT_PATH = process.argv[1];
  EXEC_PATH = process.execPath;
  IS_WINDOWS = process.platform === "win32";
});

export { buildCliLaunch, spawnCli, quoteCliLaunch, getBootstrapArgs, getScriptPath, init_cliLaunch };
