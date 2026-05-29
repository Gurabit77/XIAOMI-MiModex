// @bun
import {
  getClaudeConfigHomeDir,
  init_envUtils
} from "./chunk-hxhwzgnn.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/daemon/state.ts
import { readFileSync, writeFileSync, mkdirSync, unlinkSync } from "fs";
import { join, dirname } from "path";
function getDaemonStateFilePath(name = "remote-control") {
  return join(getClaudeConfigHomeDir(), "daemon", `${name}.json`);
}
function writeDaemonState(state, name = "remote-control") {
  const filePath = getDaemonStateFilePath(name);
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, JSON.stringify(state, null, 2), "utf-8");
}
function readDaemonState(name = "remote-control") {
  const filePath = getDaemonStateFilePath(name);
  try {
    const raw = readFileSync(filePath, "utf-8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
}
function removeDaemonState(name = "remote-control") {
  const filePath = getDaemonStateFilePath(name);
  try {
    unlinkSync(filePath);
  } catch {}
}
function isProcessAlive(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}
function queryDaemonStatus(name = "remote-control") {
  const state = readDaemonState(name);
  if (!state) {
    return { status: "stopped" };
  }
  if (isProcessAlive(state.pid)) {
    return { status: "running", state };
  }
  removeDaemonState(name);
  return { status: "stale" };
}
async function stopDaemonByPid(name = "remote-control", timeoutMs = 1e4) {
  const state = readDaemonState(name);
  if (!state) {
    return false;
  }
  const { pid } = state;
  if (!isProcessAlive(pid)) {
    removeDaemonState(name);
    return false;
  }
  try {
    process.kill(pid, "SIGTERM");
  } catch {
    removeDaemonState(name);
    return false;
  }
  const deadline = Date.now() + timeoutMs;
  const pollInterval = 200;
  while (Date.now() < deadline) {
    if (!isProcessAlive(pid)) {
      removeDaemonState(name);
      return true;
    }
    await new Promise((resolve) => setTimeout(resolve, pollInterval));
  }
  try {
    process.kill(pid, "SIGKILL");
  } catch {}
  await new Promise((resolve) => setTimeout(resolve, 500));
  removeDaemonState(name);
  return true;
}
var init_state = __esm(() => {
  init_envUtils();
});

export { writeDaemonState, removeDaemonState, queryDaemonStatus, stopDaemonByPid, init_state };
