// @bun
// src/bridge/capacityWake.ts
function createCapacityWake(outerSignal) {
  let wakeController = new AbortController;
  function wake() {
    wakeController.abort();
    wakeController = new AbortController;
  }
  function signal() {
    const merged = new AbortController;
    const abort = () => merged.abort();
    if (outerSignal.aborted || wakeController.signal.aborted) {
      merged.abort();
      return { signal: merged.signal, cleanup: () => {} };
    }
    outerSignal.addEventListener("abort", abort, { once: true });
    const capSig = wakeController.signal;
    capSig.addEventListener("abort", abort, { once: true });
    return {
      signal: merged.signal,
      cleanup: () => {
        outerSignal.removeEventListener("abort", abort);
        capSig.removeEventListener("abort", abort);
      }
    };
  }
  return { signal, wake };
}

export { createCapacityWake };
