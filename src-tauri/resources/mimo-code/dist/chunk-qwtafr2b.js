// @bun
import {
  getGlobalConfig,
  init_config1 as init_config
} from "./chunk-1ghcng4e.js";
import {
  init_log,
  logError
} from "./chunk-w5ahy59y.js";
import {
  init_debug,
  logForDebugging
} from "./chunk-rpbc3b7k.js";
import {
  __esm,
  __export
} from "./chunk-qp2qdcda.js";

// src/utils/swarm/backends/teammateModeSnapshot.ts
var exports_teammateModeSnapshot = {};
__export(exports_teammateModeSnapshot, {
  setCliTeammateModeOverride: () => setCliTeammateModeOverride,
  getTeammateModeFromSnapshot: () => getTeammateModeFromSnapshot,
  getCliTeammateModeOverride: () => getCliTeammateModeOverride,
  clearCliTeammateModeOverride: () => clearCliTeammateModeOverride,
  captureTeammateModeSnapshot: () => captureTeammateModeSnapshot
});
function setCliTeammateModeOverride(mode) {
  cliTeammateModeOverride = mode;
}
function getCliTeammateModeOverride() {
  return cliTeammateModeOverride;
}
function clearCliTeammateModeOverride(newMode) {
  cliTeammateModeOverride = null;
  initialTeammateMode = newMode;
  logForDebugging(`[TeammateModeSnapshot] CLI override cleared, new mode: ${newMode}`);
}
function captureTeammateModeSnapshot() {
  if (cliTeammateModeOverride) {
    initialTeammateMode = cliTeammateModeOverride;
    logForDebugging(`[TeammateModeSnapshot] Captured from CLI override: ${initialTeammateMode}`);
  } else {
    const config = getGlobalConfig();
    initialTeammateMode = config.teammateMode ?? "auto";
    logForDebugging(`[TeammateModeSnapshot] Captured from config: ${initialTeammateMode}`);
  }
}
function getTeammateModeFromSnapshot() {
  if (initialTeammateMode === null) {
    logError(new Error("getTeammateModeFromSnapshot called before capture - this indicates an initialization bug"));
    captureTeammateModeSnapshot();
  }
  return initialTeammateMode ?? "auto";
}
var initialTeammateMode = null, cliTeammateModeOverride = null;
var init_teammateModeSnapshot = __esm(() => {
  init_config();
  init_debug();
  init_log();
});

export { setCliTeammateModeOverride, getCliTeammateModeOverride, clearCliTeammateModeOverride, captureTeammateModeSnapshot, getTeammateModeFromSnapshot, exports_teammateModeSnapshot, init_teammateModeSnapshot };
