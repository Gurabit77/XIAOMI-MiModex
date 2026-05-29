// @bun
import {
  __esm,
  __export,
  __require
} from "./chunk-qp2qdcda.js";

// packages/modifiers-napi/src/index.ts
var exports_src = {};
__export(exports_src, {
  prewarm: () => prewarm,
  isModifierPressed: () => isModifierPressed
});
async function loadFFI() {
  if (ffiLoadAttempted || process.platform !== "darwin") {
    return;
  }
  ffiLoadAttempted = true;
  try {
    const ffi = await import("bun:ffi");
    const lib = ffi.dlopen(`/System/Library/Frameworks/Carbon.framework/Carbon`, {
      CGEventSourceFlagsState: {
        args: [ffi.FFIType.i32],
        returns: ffi.FFIType.u64
      }
    });
    cgEventSourceFlagsState = (stateID) => {
      return Number(lib.symbols.CGEventSourceFlagsState(stateID));
    };
  } catch {
    cgEventSourceFlagsState = null;
  }
}
async function prewarm() {
  await loadFFI();
}
function isModifierPressed(modifier) {
  if (process.platform !== "darwin") {
    return false;
  }
  if (cgEventSourceFlagsState === null) {
    return false;
  }
  const flag = modifierFlags[modifier];
  if (flag === undefined) {
    return false;
  }
  const currentFlags = cgEventSourceFlagsState(kCGEventSourceStateCombinedSessionState);
  return (currentFlags & flag) !== 0;
}
var FLAG_SHIFT = 131072, FLAG_CONTROL = 262144, FLAG_OPTION = 524288, FLAG_COMMAND = 1048576, modifierFlags, kCGEventSourceStateCombinedSessionState = 0, cgEventSourceFlagsState = null, ffiLoadAttempted = false;
var init_src = __esm(() => {
  modifierFlags = {
    shift: FLAG_SHIFT,
    control: FLAG_CONTROL,
    option: FLAG_OPTION,
    command: FLAG_COMMAND
  };
});

export { prewarm, isModifierPressed, exports_src, init_src };
