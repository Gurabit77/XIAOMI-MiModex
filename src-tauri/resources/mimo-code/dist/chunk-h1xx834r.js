// @bun
import {
  getChicagoEnabled,
  getChicagoSubGates,
  init_gates
} from "./chunk-p8zggt02.js";
import {
  createCliExecutor,
  init_executor
} from "./chunk-gx4kmdam.js";
import {
  init_swiftLoader,
  requireComputerUseSwift
} from "./chunk-gd6w3h9n.js";
import {
  COMPUTER_USE_MCP_SERVER_NAME,
  init_common
} from "./chunk-wbmn1xar.js";
import {
  init_debug,
  logForDebugging
} from "./chunk-rpbc3b7k.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/computerUse/hostAdapter.ts
import { format } from "util";

class DebugLogger {
  silly(message, ...args) {
    logForDebugging(format(message, ...args), { level: "debug" });
  }
  debug(message, ...args) {
    logForDebugging(format(message, ...args), { level: "debug" });
  }
  info(message, ...args) {
    logForDebugging(format(message, ...args), { level: "info" });
  }
  warn(message, ...args) {
    logForDebugging(format(message, ...args), { level: "warn" });
  }
  error(message, ...args) {
    logForDebugging(format(message, ...args), { level: "error" });
  }
}
function checkAccessibilityJXA() {
  try {
    const result = Bun.spawnSync({
      cmd: ["osascript", "-e", 'tell application "System Events" to get name of every process whose background only is false'],
      stdout: "pipe",
      stderr: "pipe"
    });
    return result.exitCode === 0;
  } catch {
    return false;
  }
}
function checkScreenRecordingJXA() {
  try {
    const result = Bun.spawnSync({
      cmd: ["screencapture", "-x", "-R", "0,0,1,1", "/dev/null"],
      stdout: "pipe",
      stderr: "pipe"
    });
    return result.exitCode === 0;
  } catch {
    return false;
  }
}
function getComputerUseHostAdapter() {
  if (cached)
    return cached;
  cached = {
    serverName: COMPUTER_USE_MCP_SERVER_NAME,
    logger: new DebugLogger,
    executor: createCliExecutor({
      getMouseAnimationEnabled: () => getChicagoSubGates().mouseAnimation,
      getHideBeforeActionEnabled: () => getChicagoSubGates().hideBeforeAction
    }),
    ensureOsPermissions: async () => {
      if (process.platform !== "darwin")
        return { granted: true };
      const cu = requireComputerUseSwift();
      const tcc = cu.tcc;
      if (tcc) {
        const accessibility2 = tcc.checkAccessibility();
        const screenRecording2 = tcc.checkScreenRecording();
        return accessibility2 && screenRecording2 ? { granted: true } : { granted: false, accessibility: accessibility2, screenRecording: screenRecording2 };
      }
      const accessibility = checkAccessibilityJXA();
      const screenRecording = checkScreenRecordingJXA();
      return accessibility && screenRecording ? { granted: true } : { granted: false, accessibility, screenRecording };
    },
    isDisabled: () => !getChicagoEnabled(),
    getSubGates: getChicagoSubGates,
    getAutoUnhideEnabled: () => true,
    cropRawPatch: () => null
  };
  return cached;
}
var cached;
var init_hostAdapter = __esm(() => {
  init_debug();
  init_common();
  init_executor();
  init_gates();
  init_swiftLoader();
});

export { getComputerUseHostAdapter, init_hostAdapter };
