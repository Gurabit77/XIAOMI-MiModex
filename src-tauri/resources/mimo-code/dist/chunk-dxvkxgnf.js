// @bun
import {
  getCwdState,
  getOriginalCwd,
  init_state
} from "./chunk-j5xzpm59.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/cwd.ts
import { AsyncLocalStorage } from "async_hooks";
function runWithCwdOverride(cwd, fn) {
  return cwdOverrideStorage.run(cwd, fn);
}
function pwd() {
  return cwdOverrideStorage.getStore() ?? getCwdState();
}
function getCwd() {
  try {
    return pwd();
  } catch {
    return getOriginalCwd();
  }
}
var cwdOverrideStorage;
var init_cwd = __esm(() => {
  init_state();
  cwdOverrideStorage = new AsyncLocalStorage;
});

export { runWithCwdOverride, pwd, getCwd, init_cwd };
