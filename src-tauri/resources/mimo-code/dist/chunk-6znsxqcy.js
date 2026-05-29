// @bun
import {
  getProjectsDir,
  getWorktreePathsPortable,
  init_getWorktreePathsPortable,
  init_sessionStoragePortable,
  sanitizePath
} from "./chunk-et54q618.js";
import {
  init_lazySchema,
  lazySchema
} from "./chunk-64c1avct.js";
import {
  init_v4
} from "./chunk-8g747a8x.js";
import {
  exports_external
} from "./chunk-d7886r6a.js";
import"./chunk-8tnsngw2.js";
import {
  init_debug,
  init_errors,
  init_slowOperations,
  isENOENT,
  jsonParse,
  jsonStringify,
  logForDebugging
} from "./chunk-rpbc3b7k.js";
import"./chunk-fbv4apne.js";
import"./chunk-j5xzpm59.js";
import"./chunk-50dgek10.js";
import"./chunk-d3bk85eq.js";
import"./chunk-cw8rngb2.js";
import"./chunk-hxhwzgnn.js";
import"./chunk-qx8z601m.js";
import"./chunk-cgm6758j.js";
import"./chunk-qp2qdcda.js";

// src/bridge/bridgePointer.ts
init_v4();
init_debug();
init_errors();
init_getWorktreePathsPortable();
init_lazySchema();
init_sessionStoragePortable();
init_slowOperations();
import { mkdir, readFile, stat, unlink, writeFile } from "fs/promises";
import { dirname, join } from "path";
var MAX_WORKTREE_FANOUT = 50;
var BRIDGE_POINTER_TTL_MS = 4 * 60 * 60 * 1000;
var BridgePointerSchema = lazySchema(() => exports_external.object({
  sessionId: exports_external.string(),
  environmentId: exports_external.string(),
  source: exports_external.enum(["standalone", "repl"])
}));
function getBridgePointerPath(dir) {
  return join(getProjectsDir(), sanitizePath(dir), "bridge-pointer.json");
}
async function writeBridgePointer(dir, pointer) {
  const path = getBridgePointerPath(dir);
  try {
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, jsonStringify(pointer), "utf8");
    logForDebugging(`[bridge:pointer] wrote ${path}`);
  } catch (err) {
    logForDebugging(`[bridge:pointer] write failed: ${err}`, { level: "warn" });
  }
}
async function readBridgePointer(dir) {
  const path = getBridgePointerPath(dir);
  let raw;
  let mtimeMs;
  try {
    mtimeMs = (await stat(path)).mtimeMs;
    raw = await readFile(path, "utf8");
  } catch {
    return null;
  }
  const parsed = BridgePointerSchema().safeParse(safeJsonParse(raw));
  if (!parsed.success) {
    logForDebugging(`[bridge:pointer] invalid schema, clearing: ${path}`);
    await clearBridgePointer(dir);
    return null;
  }
  const ageMs = Math.max(0, Date.now() - mtimeMs);
  if (ageMs > BRIDGE_POINTER_TTL_MS) {
    logForDebugging(`[bridge:pointer] stale (>4h mtime), clearing: ${path}`);
    await clearBridgePointer(dir);
    return null;
  }
  return { ...parsed.data, ageMs };
}
async function readBridgePointerAcrossWorktrees(dir) {
  const here = await readBridgePointer(dir);
  if (here) {
    return { pointer: here, dir };
  }
  const worktrees = await getWorktreePathsPortable(dir);
  if (worktrees.length <= 1)
    return null;
  if (worktrees.length > MAX_WORKTREE_FANOUT) {
    logForDebugging(`[bridge:pointer] ${worktrees.length} worktrees exceeds fanout cap ${MAX_WORKTREE_FANOUT}, skipping`);
    return null;
  }
  const dirKey = sanitizePath(dir);
  const candidates = worktrees.filter((wt) => sanitizePath(wt) !== dirKey);
  const results = await Promise.all(candidates.map(async (wt) => {
    const p = await readBridgePointer(wt);
    return p ? { pointer: p, dir: wt } : null;
  }));
  let freshest = null;
  for (const r of results) {
    if (r && (!freshest || r.pointer.ageMs < freshest.pointer.ageMs)) {
      freshest = r;
    }
  }
  if (freshest) {
    logForDebugging(`[bridge:pointer] fanout found pointer in worktree ${freshest.dir} (ageMs=${freshest.pointer.ageMs})`);
  }
  return freshest;
}
async function clearBridgePointer(dir) {
  const path = getBridgePointerPath(dir);
  try {
    await unlink(path);
    logForDebugging(`[bridge:pointer] cleared ${path}`);
  } catch (err) {
    if (!isENOENT(err)) {
      logForDebugging(`[bridge:pointer] clear failed: ${err}`, {
        level: "warn"
      });
    }
  }
}
function safeJsonParse(raw) {
  try {
    return jsonParse(raw);
  } catch {
    return null;
  }
}
export {
  writeBridgePointer,
  readBridgePointerAcrossWorktrees,
  readBridgePointer,
  getBridgePointerPath,
  clearBridgePointer,
  BRIDGE_POINTER_TTL_MS
};
