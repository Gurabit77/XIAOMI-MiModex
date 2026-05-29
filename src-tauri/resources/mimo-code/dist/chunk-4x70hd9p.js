// @bun
import {
  init_path
} from "./chunk-4efha55s.js";
import {
  sanitizePath
} from "./chunk-et54q618.js";
import {
  createBufferedWriter,
  getFsImplementation,
  init_bufferedWriter,
  init_cleanupRegistry,
  init_debug,
  init_fsOperations,
  init_slowOperations,
  jsonStringify,
  logForDebugging,
  registerCleanup
} from "./chunk-rpbc3b7k.js";
import {
  getOriginalCwd,
  getSessionId,
  init_state
} from "./chunk-j5xzpm59.js";
import {
  getClaudeConfigHomeDir,
  init_envUtils,
  isEnvTruthy
} from "./chunk-hxhwzgnn.js";

// src/utils/asciicast.ts
init_state();
init_bufferedWriter();
init_cleanupRegistry();
init_debug();
init_envUtils();
init_fsOperations();
init_path();
init_slowOperations();
import { appendFile, rename } from "fs/promises";
import { basename, dirname, join } from "path";
var recordingState = {
  filePath: null,
  timestamp: 0
};
function getRecordFilePath() {
  if (recordingState.filePath !== null) {
    return recordingState.filePath;
  }
  if (process.env.USER_TYPE !== "ant") {
    return null;
  }
  if (!isEnvTruthy(process.env.CLAUDE_CODE_TERMINAL_RECORDING)) {
    return null;
  }
  const projectsDir = join(getClaudeConfigHomeDir(), "projects");
  const projectDir = join(projectsDir, sanitizePath(getOriginalCwd()));
  recordingState.timestamp = Date.now();
  recordingState.filePath = join(projectDir, `${getSessionId()}-${recordingState.timestamp}.cast`);
  return recordingState.filePath;
}
function _resetRecordingStateForTesting() {
  recordingState.filePath = null;
  recordingState.timestamp = 0;
}
function getSessionRecordingPaths() {
  const sessionId = getSessionId();
  const projectsDir = join(getClaudeConfigHomeDir(), "projects");
  const projectDir = join(projectsDir, sanitizePath(getOriginalCwd()));
  try {
    const entries = getFsImplementation().readdirSync(projectDir);
    const names = typeof entries[0] === "string" ? entries : entries.map((e) => e.name);
    const files = names.filter((f) => f.startsWith(sessionId) && f.endsWith(".cast")).sort();
    return files.map((f) => join(projectDir, f));
  } catch {
    return [];
  }
}
async function renameRecordingForSession() {
  const oldPath = recordingState.filePath;
  if (!oldPath || recordingState.timestamp === 0) {
    return;
  }
  const projectsDir = join(getClaudeConfigHomeDir(), "projects");
  const projectDir = join(projectsDir, sanitizePath(getOriginalCwd()));
  const newPath = join(projectDir, `${getSessionId()}-${recordingState.timestamp}.cast`);
  if (oldPath === newPath) {
    return;
  }
  await recorder?.flush();
  const oldName = basename(oldPath);
  const newName = basename(newPath);
  try {
    await rename(oldPath, newPath);
    recordingState.filePath = newPath;
    logForDebugging(`[asciicast] Renamed recording: ${oldName} \u2192 ${newName}`);
  } catch {
    logForDebugging(`[asciicast] Failed to rename recording from ${oldName} to ${newName}`);
  }
}
var recorder = null;
function getTerminalSize() {
  const cols = process.stdout.columns || 80;
  const rows = process.stdout.rows || 24;
  return { cols, rows };
}
async function flushAsciicastRecorder() {
  await recorder?.flush();
}
function installAsciicastRecorder() {
  const filePath = getRecordFilePath();
  if (!filePath) {
    return;
  }
  const { cols, rows } = getTerminalSize();
  const startTime = performance.now();
  const header = jsonStringify({
    version: 2,
    width: cols,
    height: rows,
    timestamp: Math.floor(Date.now() / 1000),
    env: {
      SHELL: process.env.SHELL || "",
      TERM: process.env.TERM || ""
    }
  });
  try {
    getFsImplementation().mkdirSync(dirname(filePath));
  } catch {}
  getFsImplementation().appendFileSync(filePath, header + `
`, { mode: 384 });
  let pendingWrite = Promise.resolve();
  const writer = createBufferedWriter({
    writeFn(content) {
      const currentPath = recordingState.filePath;
      if (!currentPath) {
        return;
      }
      pendingWrite = pendingWrite.then(() => appendFile(currentPath, content)).catch(() => {});
    },
    flushIntervalMs: 500,
    maxBufferSize: 50,
    maxBufferBytes: 10 * 1024 * 1024
  });
  const originalWrite = process.stdout.write.bind(process.stdout);
  process.stdout.write = function(chunk, encodingOrCb, cb) {
    const elapsed = (performance.now() - startTime) / 1000;
    const text = typeof chunk === "string" ? chunk : Buffer.from(chunk).toString("utf-8");
    writer.write(jsonStringify([elapsed, "o", text]) + `
`);
    if (typeof encodingOrCb === "function") {
      return originalWrite(chunk, encodingOrCb);
    }
    return originalWrite(chunk, encodingOrCb, cb);
  };
  function onResize() {
    const elapsed = (performance.now() - startTime) / 1000;
    const { cols: newCols, rows: newRows } = getTerminalSize();
    writer.write(jsonStringify([elapsed, "r", `${newCols}x${newRows}`]) + `
`);
  }
  process.stdout.on("resize", onResize);
  recorder = {
    async flush() {
      writer.flush();
      await pendingWrite;
    },
    async dispose() {
      writer.dispose();
      await pendingWrite;
      process.stdout.removeListener("resize", onResize);
      process.stdout.write = originalWrite;
    }
  };
  registerCleanup(async () => {
    await recorder?.dispose();
    recorder = null;
  });
  logForDebugging(`[asciicast] Recording to ${filePath}`);
}

export { getRecordFilePath, _resetRecordingStateForTesting, getSessionRecordingPaths, renameRecordingForSession, flushAsciicastRecorder, installAsciicastRecorder };
