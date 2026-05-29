// @bun
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/bundledMode.ts
function isRunningWithBun() {
  return process.versions.bun !== undefined;
}
function isInBundledMode() {
  return typeof Bun !== "undefined" && Array.isArray(Bun.embeddedFiles) && Bun.embeddedFiles.length > 0;
}
var init_bundledMode = () => {};

export { isRunningWithBun, isInBundledMode, init_bundledMode };
