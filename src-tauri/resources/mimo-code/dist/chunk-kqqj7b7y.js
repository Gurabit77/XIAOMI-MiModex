// @bun
import {
  getErrnoCode,
  init_cleanupRegistry,
  init_debug,
  init_errors,
  init_slowOperations,
  jsonParse,
  jsonStringify,
  logForDebugging,
  registerCleanup
} from "./chunk-rpbc3b7k.js";
import {
  getSessionId,
  init_state
} from "./chunk-j5xzpm59.js";
import {
  getClaudeConfigHomeDir,
  init_envUtils
} from "./chunk-hxhwzgnn.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/computerUse/computerUseLock.ts
import { mkdir, readFile, unlink, writeFile } from "fs/promises";
import { join } from "path";
function isComputerUseLock(value) {
  if (typeof value !== "object" || value === null)
    return false;
  return "sessionId" in value && typeof value.sessionId === "string" && "pid" in value && typeof value.pid === "number";
}
function getLockPath() {
  return join(getClaudeConfigHomeDir(), LOCK_FILENAME);
}
async function readLock() {
  try {
    const raw = await readFile(getLockPath(), "utf8");
    const parsed = jsonParse(raw);
    return isComputerUseLock(parsed) ? parsed : undefined;
  } catch {
    return;
  }
}
function isProcessRunning(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}
async function tryCreateExclusive(lock) {
  try {
    await writeFile(getLockPath(), jsonStringify(lock), { flag: "wx" });
    return true;
  } catch (e) {
    if (getErrnoCode(e) === "EEXIST")
      return false;
    throw e;
  }
}
function registerLockCleanup() {
  unregisterCleanup?.();
  unregisterCleanup = registerCleanup(async () => {
    await releaseComputerUseLock();
  });
}
async function checkComputerUseLock() {
  const existing = await readLock();
  if (!existing)
    return { kind: "free" };
  if (existing.sessionId === getSessionId())
    return { kind: "held_by_self" };
  if (isProcessRunning(existing.pid)) {
    return { kind: "blocked", by: existing.sessionId };
  }
  logForDebugging(`Recovering stale computer-use lock from session ${existing.sessionId} (PID ${existing.pid})`);
  await unlink(getLockPath()).catch(() => {});
  return { kind: "free" };
}
function isLockHeldLocally() {
  return unregisterCleanup !== undefined;
}
async function tryAcquireComputerUseLock() {
  const sessionId = getSessionId();
  const lock = {
    sessionId,
    pid: process.pid,
    acquiredAt: Date.now()
  };
  await mkdir(getClaudeConfigHomeDir(), { recursive: true });
  if (await tryCreateExclusive(lock)) {
    registerLockCleanup();
    return FRESH;
  }
  const existing = await readLock();
  if (!existing) {
    await unlink(getLockPath()).catch(() => {});
    if (await tryCreateExclusive(lock)) {
      registerLockCleanup();
      return FRESH;
    }
    return { kind: "blocked", by: (await readLock())?.sessionId ?? "unknown" };
  }
  if (existing.sessionId === sessionId)
    return REENTRANT;
  if (isProcessRunning(existing.pid)) {
    return { kind: "blocked", by: existing.sessionId };
  }
  logForDebugging(`Recovering stale computer-use lock from session ${existing.sessionId} (PID ${existing.pid})`);
  await unlink(getLockPath()).catch(() => {});
  if (await tryCreateExclusive(lock)) {
    registerLockCleanup();
    return FRESH;
  }
  return { kind: "blocked", by: (await readLock())?.sessionId ?? "unknown" };
}
async function releaseComputerUseLock() {
  unregisterCleanup?.();
  unregisterCleanup = undefined;
  const existing = await readLock();
  if (!existing || existing.sessionId !== getSessionId())
    return false;
  try {
    await unlink(getLockPath());
    logForDebugging("Released computer-use lock");
    return true;
  } catch {
    return false;
  }
}
var LOCK_FILENAME = "computer-use.lock", unregisterCleanup, FRESH, REENTRANT;
var init_computerUseLock = __esm(() => {
  init_state();
  init_cleanupRegistry();
  init_debug();
  init_envUtils();
  init_slowOperations();
  init_errors();
  FRESH = { kind: "acquired", fresh: true };
  REENTRANT = { kind: "acquired", fresh: false };
});

export { checkComputerUseLock, isLockHeldLocally, tryAcquireComputerUseLock, releaseComputerUseLock, init_computerUseLock };
