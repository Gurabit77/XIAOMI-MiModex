// @bun
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/sleep.ts
function sleep(ms, signal, opts) {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      if (opts?.throwOnAbort || opts?.abortError) {
        reject(opts.abortError?.() ?? new Error("aborted"));
      } else {
        resolve();
      }
      return;
    }
    const timer = setTimeout((signal2, onAbort2, resolve2) => {
      signal2?.removeEventListener("abort", onAbort2);
      resolve2();
    }, ms, signal, onAbort, resolve);
    function onAbort() {
      clearTimeout(timer);
      if (opts?.throwOnAbort || opts?.abortError) {
        reject(opts.abortError?.() ?? new Error("aborted"));
      } else {
        resolve();
      }
    }
    signal?.addEventListener("abort", onAbort, { once: true });
    if (opts?.unref) {
      timer.unref();
    }
  });
}
var init_sleep = () => {};

export { sleep, init_sleep };
