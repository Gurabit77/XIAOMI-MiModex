// @bun
import {
  getPlatform,
  init_platform
} from "./chunk-0rbpfkda.js";
import {
  init_log,
  logError
} from "./chunk-w5ahy59y.js";
import"./chunk-8tnsngw2.js";
import {
  init_debug,
  logForDebugging
} from "./chunk-rpbc3b7k.js";
import"./chunk-fbv4apne.js";
import"./chunk-j5xzpm59.js";
import"./chunk-50dgek10.js";
import"./chunk-d3bk85eq.js";
import"./chunk-cw8rngb2.js";
import {
  init_envUtils,
  isEnvTruthy,
  isRunningOnHomespace
} from "./chunk-hxhwzgnn.js";
import"./chunk-qx8z601m.js";
import"./chunk-cgm6758j.js";
import {
  __esm,
  __require
} from "./chunk-qp2qdcda.js";

// src/services/voice.ts
import { spawn, spawnSync } from "child_process";
import { readFile } from "fs/promises";
function loadAudioNapi() {
  audioNapiPromise ??= (async () => {
    const t0 = Date.now();
    const mod = await import("./chunk-km4vrcc3.js");
    mod.isNativeAudioAvailable();
    audioNapi = mod;
    logForDebugging(`[voice] audio-capture-napi loaded in ${Date.now() - t0}ms`);
    return mod;
  })();
  return audioNapiPromise;
}
function hasCommand(cmd) {
  const result = spawnSync(cmd, ["--version"], {
    stdio: "ignore",
    timeout: 3000
  });
  return result.error === undefined;
}
function probeArecord() {
  arecordProbe ??= new Promise((resolve) => {
    const child = spawn("arecord", [
      "-f",
      "S16_LE",
      "-r",
      String(RECORDING_SAMPLE_RATE),
      "-c",
      String(RECORDING_CHANNELS),
      "-t",
      "raw",
      "/dev/null"
    ], { stdio: ["ignore", "ignore", "pipe"] });
    let stderr = "";
    child.stderr?.on("data", (chunk) => {
      stderr += chunk.toString();
    });
    const timer = setTimeout((c, r) => {
      c.kill("SIGTERM");
      r({ ok: true, stderr: "" });
    }, 150, child, resolve);
    child.once("close", (code) => {
      clearTimeout(timer);
      resolve({ ok: code === 0, stderr: stderr.trim() });
    });
    child.once("error", () => {
      clearTimeout(timer);
      resolve({ ok: false, stderr: "arecord: command not found" });
    });
  });
  return arecordProbe;
}
function _resetArecordProbeForTesting() {
  arecordProbe = null;
}
function linuxHasAlsaCards() {
  linuxAlsaCardsMemo ??= readFile("/proc/asound/cards", "utf8").then((cards) => {
    const c = cards.trim();
    return c !== "" && !c.includes("no soundcards");
  }, () => false);
  return linuxAlsaCardsMemo;
}
function _resetAlsaCardsForTesting() {
  linuxAlsaCardsMemo = null;
}
function detectPackageManager() {
  if (process.platform === "darwin") {
    if (hasCommand("brew")) {
      return {
        cmd: "brew",
        args: ["install", "sox"],
        displayCommand: "brew install sox"
      };
    }
    return null;
  }
  if (process.platform === "linux") {
    if (hasCommand("apt-get")) {
      return {
        cmd: "sudo",
        args: ["apt-get", "install", "-y", "sox"],
        displayCommand: "sudo apt-get install sox"
      };
    }
    if (hasCommand("dnf")) {
      return {
        cmd: "sudo",
        args: ["dnf", "install", "-y", "sox"],
        displayCommand: "sudo dnf install sox"
      };
    }
    if (hasCommand("pacman")) {
      return {
        cmd: "sudo",
        args: ["pacman", "-S", "--noconfirm", "sox"],
        displayCommand: "sudo pacman -S sox"
      };
    }
  }
  return null;
}
async function checkVoiceDependencies() {
  const napi = await loadAudioNapi();
  if (napi.isNativeAudioAvailable()) {
    return { available: true, missing: [], installCommand: null };
  }
  if (process.platform === "win32") {
    return {
      available: false,
      missing: ["Voice mode requires the native audio module (not loaded)"],
      installCommand: null
    };
  }
  if (process.platform === "linux" && hasCommand("arecord")) {
    return { available: true, missing: [], installCommand: null };
  }
  const missing = [];
  if (!hasCommand("rec")) {
    missing.push("sox (rec command)");
  }
  const pm = missing.length > 0 ? detectPackageManager() : null;
  return {
    available: missing.length === 0,
    missing,
    installCommand: pm?.displayCommand ?? null
  };
}
async function requestMicrophonePermission() {
  const napi = await loadAudioNapi();
  if (!napi.isNativeAudioAvailable()) {
    return true;
  }
  const started = await startRecording((_chunk) => {}, () => {}, { silenceDetection: false });
  if (started) {
    stopRecording();
    return true;
  }
  return false;
}
async function checkRecordingAvailability() {
  if (isRunningOnHomespace() || isEnvTruthy(process.env.CLAUDE_CODE_REMOTE)) {
    return {
      available: false,
      reason: `Voice mode requires microphone access, but no audio device is available in this environment.

To use voice mode, run MiMo Code locally instead.`
    };
  }
  const napi = await loadAudioNapi();
  if (napi.isNativeAudioAvailable()) {
    return { available: true, reason: null };
  }
  if (process.platform === "win32") {
    return {
      available: false,
      reason: "Voice recording requires the native audio module, which could not be loaded."
    };
  }
  const wslNoAudioReason = `Voice mode could not access an audio device in WSL.

WSL2 with WSLg (Windows 11) provides audio via PulseAudio \u2014 if you are on Windows 10 or WSL1, run MiMo Code in native Windows instead.`;
  if (process.platform === "linux" && hasCommand("arecord")) {
    const probe = await probeArecord();
    if (probe.ok) {
      return { available: true, reason: null };
    }
    if (getPlatform() === "wsl") {
      return { available: false, reason: wslNoAudioReason };
    }
    logForDebugging(`[voice] arecord probe failed: ${probe.stderr}`);
  }
  if (!hasCommand("rec")) {
    if (getPlatform() === "wsl") {
      return { available: false, reason: wslNoAudioReason };
    }
    const pm = detectPackageManager();
    return {
      available: false,
      reason: pm ? `Voice mode requires SoX for audio recording. Install it with: ${pm.displayCommand}` : `Voice mode requires SoX for audio recording. Install SoX manually:
  macOS: brew install sox
  Ubuntu/Debian: sudo apt-get install sox
  Fedora: sudo dnf install sox`
    };
  }
  return { available: true, reason: null };
}
async function startRecording(onData, onEnd, options) {
  logForDebugging(`[voice] startRecording called, platform=${process.platform}`);
  const napi = await loadAudioNapi();
  const nativeAvailable = napi.isNativeAudioAvailable() && (process.platform !== "linux" || await linuxHasAlsaCards());
  const useSilenceDetection = options?.silenceDetection !== false;
  if (nativeAvailable) {
    if (nativeRecordingActive || napi.isNativeRecordingActive()) {
      napi.stopNativeRecording();
      nativeRecordingActive = false;
    }
    const started = napi.startNativeRecording((data) => {
      onData(data);
    }, () => {
      if (useSilenceDetection) {
        nativeRecordingActive = false;
        onEnd();
      }
    });
    if (started) {
      nativeRecordingActive = true;
      return true;
    }
  }
  if (process.platform === "win32") {
    logForDebugging("[voice] Windows native recording unavailable, no fallback");
    return false;
  }
  if (process.platform === "linux" && hasCommand("arecord") && (await probeArecord()).ok) {
    return startArecordRecording(onData, onEnd);
  }
  return startSoxRecording(onData, onEnd, options);
}
function startSoxRecording(onData, onEnd, options) {
  const useSilenceDetection = options?.silenceDetection !== false;
  const args = [
    "-q",
    "--buffer",
    "1024",
    "-t",
    "raw",
    "-r",
    String(RECORDING_SAMPLE_RATE),
    "-e",
    "signed",
    "-b",
    "16",
    "-c",
    String(RECORDING_CHANNELS),
    "-"
  ];
  if (useSilenceDetection) {
    args.push("silence", "1", "0.1", SILENCE_THRESHOLD, "1", SILENCE_DURATION_SECS, SILENCE_THRESHOLD);
  }
  const child = spawn("rec", args, {
    stdio: ["pipe", "pipe", "pipe"]
  });
  activeRecorder = child;
  child.stdout?.on("data", (chunk) => {
    onData(chunk);
  });
  child.stderr?.on("data", () => {});
  child.on("close", () => {
    activeRecorder = null;
    onEnd();
  });
  child.on("error", (err) => {
    logError(err);
    activeRecorder = null;
    onEnd();
  });
  return true;
}
function startArecordRecording(onData, onEnd) {
  const args = [
    "-f",
    "S16_LE",
    "-r",
    String(RECORDING_SAMPLE_RATE),
    "-c",
    String(RECORDING_CHANNELS),
    "-t",
    "raw",
    "-q",
    "-"
  ];
  const child = spawn("arecord", args, {
    stdio: ["pipe", "pipe", "pipe"]
  });
  activeRecorder = child;
  child.stdout?.on("data", (chunk) => {
    onData(chunk);
  });
  child.stderr?.on("data", () => {});
  child.on("close", () => {
    activeRecorder = null;
    onEnd();
  });
  child.on("error", (err) => {
    logError(err);
    activeRecorder = null;
    onEnd();
  });
  return true;
}
function stopRecording() {
  if (nativeRecordingActive && audioNapi) {
    audioNapi.stopNativeRecording();
    nativeRecordingActive = false;
    return;
  }
  if (activeRecorder) {
    activeRecorder.kill("SIGTERM");
    activeRecorder = null;
  }
}
var audioNapi = null, audioNapiPromise = null, RECORDING_SAMPLE_RATE = 16000, RECORDING_CHANNELS = 1, SILENCE_DURATION_SECS = "2.0", SILENCE_THRESHOLD = "3%", arecordProbe = null, linuxAlsaCardsMemo = null, activeRecorder = null, nativeRecordingActive = false;
var init_voice = __esm(() => {
  init_debug();
  init_envUtils();
  init_log();
  init_platform();
});
init_voice();

export {
  stopRecording,
  startRecording,
  requestMicrophonePermission,
  checkVoiceDependencies,
  checkRecordingAvailability,
  _resetArecordProbeForTesting,
  _resetAlsaCardsForTesting
};
