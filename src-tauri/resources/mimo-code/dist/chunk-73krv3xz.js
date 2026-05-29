// @bun
import {
  init_intl,
  lastGrapheme
} from "./chunk-crmjpsqe.js";

// src/utils/earlyInput.ts
init_intl();
var earlyInputBuffer = "";
var isCapturing = false;
var readableHandler = null;
var safetyTimer = null;
function startCapturingEarlyInput() {
  if (!process.stdin.isTTY || isCapturing || process.argv.includes("-p") || process.argv.includes("--print")) {
    return;
  }
  isCapturing = true;
  earlyInputBuffer = "";
  try {
    process.stdin.setEncoding("utf8");
    process.stdin.setRawMode(true);
    process.stdin.ref();
    readableHandler = () => {
      let chunk = process.stdin.read();
      while (chunk !== null) {
        if (typeof chunk === "string") {
          processChunk(chunk);
        }
        chunk = process.stdin.read();
      }
    };
    process.stdin.on("readable", readableHandler);
    safetyTimer = setTimeout(() => {
      if (isCapturing) {
        stopCapturingEarlyInput();
      }
    }, 1e4);
    if (safetyTimer && typeof safetyTimer === "object" && "unref" in safetyTimer) {
      safetyTimer.unref();
    }
  } catch {
    isCapturing = false;
  }
}
function processChunk(str) {
  let i = 0;
  while (i < str.length) {
    const char = str[i];
    const code = char.charCodeAt(0);
    if (code === 3) {
      stopCapturingEarlyInput();
      process.exit(130);
      return;
    }
    if (code === 4) {
      stopCapturingEarlyInput();
      return;
    }
    if (code === 127 || code === 8) {
      if (earlyInputBuffer.length > 0) {
        const last = lastGrapheme(earlyInputBuffer);
        earlyInputBuffer = earlyInputBuffer.slice(0, -(last.length || 1));
      }
      i++;
      continue;
    }
    if (code === 27) {
      i++;
      if (i >= str.length)
        continue;
      const next = str.charCodeAt(i);
      if (next === 91) {
        i++;
        while (i < str.length && str.charCodeAt(i) >= 32 && str.charCodeAt(i) <= 63) {
          i++;
        }
        if (i < str.length && str.charCodeAt(i) >= 64 && str.charCodeAt(i) <= 126)
          i++;
        continue;
      }
      if (next === 80 || next === 93 || next === 88 || next === 94) {
        i++;
        while (i < str.length) {
          if (str.charCodeAt(i) === 7) {
            i++;
            break;
          }
          if (str.charCodeAt(i) === 27 && i + 1 < str.length && str.charCodeAt(i + 1) === 92) {
            i += 2;
            break;
          }
          i++;
        }
        continue;
      }
      if (i < str.length)
        i++;
      continue;
    }
    if (code < 32 && code !== 9 && code !== 10 && code !== 13) {
      i++;
      continue;
    }
    if (code === 13) {
      earlyInputBuffer += `
`;
      i++;
      continue;
    }
    earlyInputBuffer += char;
    i++;
  }
}
function stopCapturingEarlyInput() {
  if (!isCapturing) {
    return;
  }
  isCapturing = false;
  if (safetyTimer) {
    clearTimeout(safetyTimer);
    safetyTimer = null;
  }
  if (readableHandler) {
    process.stdin.removeListener("readable", readableHandler);
    readableHandler = null;
  }
  try {
    process.stdin.unref();
  } catch {}
}
function consumeEarlyInput() {
  stopCapturingEarlyInput();
  const input = earlyInputBuffer.trim();
  earlyInputBuffer = "";
  return input;
}
function hasEarlyInput() {
  return earlyInputBuffer.trim().length > 0;
}
function seedEarlyInput(text) {
  earlyInputBuffer = text;
}
function isCapturingEarlyInput() {
  return isCapturing;
}

export { startCapturingEarlyInput, stopCapturingEarlyInput, consumeEarlyInput, hasEarlyInput, seedEarlyInput, isCapturingEarlyInput };
