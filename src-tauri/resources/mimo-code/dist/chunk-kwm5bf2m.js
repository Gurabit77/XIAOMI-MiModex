// @bun
import {
  init_slowOperations,
  slowLogging
} from "./chunk-rpbc3b7k.js";
import {
  __callDispose,
  __esm,
  __using
} from "./chunk-qp2qdcda.js";

// src/utils/execSyncWrapper.ts
import {
  execSync as nodeExecSync
} from "child_process";
function execSync_DEPRECATED(command, options) {
  let __stack = [];
  try {
    const _ = __using(__stack, slowLogging`execSync: ${command.slice(0, 100)}`, 0);
    return nodeExecSync(command, options);
  } catch (_catch) {
    var _err = _catch, _hasErr = 1;
  } finally {
    __callDispose(__stack, _err, _hasErr);
  }
}
var init_execSyncWrapper = __esm(() => {
  init_slowOperations();
});

export { execSync_DEPRECATED, init_execSyncWrapper };
