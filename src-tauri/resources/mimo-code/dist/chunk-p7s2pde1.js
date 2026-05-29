// @bun
import {
  init_log,
  logError
} from "./chunk-w5ahy59y.js";
import {
  init_envUtils,
  isEnvTruthy
} from "./chunk-hxhwzgnn.js";

// src/utils/renderOptions.ts
init_envUtils();
init_log();
import { openSync } from "fs";
import { ReadStream } from "tty";
var cachedStdinOverride = null;
function getStdinOverride() {
  if (cachedStdinOverride !== null) {
    return cachedStdinOverride;
  }
  if (process.stdin.isTTY) {
    cachedStdinOverride = undefined;
    return;
  }
  if (isEnvTruthy(process.env.CI)) {
    cachedStdinOverride = undefined;
    return;
  }
  if (process.argv.includes("mcp")) {
    cachedStdinOverride = undefined;
    return;
  }
  if (process.platform === "win32") {
    cachedStdinOverride = undefined;
    return;
  }
  try {
    const ttyFd = openSync("/dev/tty", "r");
    const ttyStream = new ReadStream(ttyFd);
    ttyStream.isTTY = true;
    cachedStdinOverride = ttyStream;
    return cachedStdinOverride;
  } catch (err) {
    logError(err);
    cachedStdinOverride = undefined;
    return;
  }
}
function getBaseRenderOptions(exitOnCtrlC = false) {
  const stdin = getStdinOverride();
  const options = { exitOnCtrlC };
  if (stdin) {
    options.stdin = stdin;
  }
  return options;
}

export { getBaseRenderOptions };
