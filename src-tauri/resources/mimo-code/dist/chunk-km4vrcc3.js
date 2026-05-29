// @bun
import {
  __esm
} from "./chunk-qp2qdcda.js";

// packages/audio-capture-napi/src/index.ts
import { createRequire } from "module";
import { dirname, resolve, sep } from "path";
import { fileURLToPath } from "url";
function getVendorRoot() {
  const filePath = fileURLToPath(import.meta.url);
  const dir = dirname(filePath);
  const parts = dir.split(sep);
  const distIdx = parts.lastIndexOf("dist");
  if (distIdx !== -1) {
    return parts.slice(0, distIdx + 1).join(sep) + sep + "vendor";
  }
  return resolve(dir, "..", "..", "..", "vendor");
}
function loadModule() {
  if (loadAttempted) {
    return cachedModule;
  }
  loadAttempted = true;
  const platform = process.platform;
  if (platform !== "darwin" && platform !== "linux" && platform !== "win32") {
    return null;
  }
  if (process.env.AUDIO_CAPTURE_NODE_PATH) {
    try {
      cachedModule = nodeRequire(process.env.AUDIO_CAPTURE_NODE_PATH);
      return cachedModule;
    } catch {}
  }
  const platformDir = `${process.arch}-${platform}`;
  const binaryRel = `audio-capture/${platformDir}/audio-capture.node`;
  const vendorRoot = getVendorRoot();
  const fallbacks = [
    resolve(vendorRoot, binaryRel),
    `./vendor/${binaryRel}`,
    `../vendor/${binaryRel}`,
    `../../vendor/${binaryRel}`,
    `${process.cwd()}/vendor/${binaryRel}`
  ];
  for (const p of fallbacks) {
    try {
      cachedModule = nodeRequire(p);
      return cachedModule;
    } catch {}
  }
  return null;
}
function isNativeAudioAvailable() {
  return loadModule() !== null;
}
function startNativeRecording(onData, onEnd) {
  const mod = loadModule();
  if (!mod) {
    return false;
  }
  return mod.startRecording(onData, onEnd);
}
function stopNativeRecording() {
  const mod = loadModule();
  if (!mod) {
    return;
  }
  mod.stopRecording();
}
function isNativeRecordingActive() {
  const mod = loadModule();
  if (!mod) {
    return false;
  }
  return mod.isRecording();
}
function startNativePlayback(sampleRate, channels) {
  const mod = loadModule();
  if (!mod) {
    return false;
  }
  return mod.startPlayback(sampleRate, channels);
}
function writeNativePlaybackData(data) {
  const mod = loadModule();
  if (!mod) {
    return;
  }
  mod.writePlaybackData(data);
}
function stopNativePlayback() {
  const mod = loadModule();
  if (!mod) {
    return;
  }
  mod.stopPlayback();
}
function isNativePlaying() {
  const mod = loadModule();
  if (!mod) {
    return false;
  }
  return mod.isPlaying();
}
function microphoneAuthorizationStatus() {
  const mod = loadModule();
  if (!mod || !mod.microphoneAuthorizationStatus) {
    return 0;
  }
  return mod.microphoneAuthorizationStatus();
}
var nodeRequire, cachedModule = null, loadAttempted = false;
var init_src = __esm(() => {
  nodeRequire = createRequire(import.meta.url);
});
init_src();

export {
  writeNativePlaybackData,
  stopNativeRecording,
  stopNativePlayback,
  startNativeRecording,
  startNativePlayback,
  microphoneAuthorizationStatus,
  isNativeRecordingActive,
  isNativePlaying,
  isNativeAudioAvailable
};
