// @bun
import {
  MAX_UDS_FRAME_BYTES,
  attachUdsResponseReader,
  getChunkBytes,
  init_udsMessaging,
  init_udsResponseReader
} from "./chunk-0shmpd1k.js";
import"./chunk-758qmraw.js";
import {
  init_genericProcessUtils,
  isProcessRunning
} from "./chunk-gnw2dwca.js";
import"./chunk-qcwbd71h.js";
import"./chunk-dxvkxgnf.js";
import"./chunk-w5ahy59y.js";
import"./chunk-8tnsngw2.js";
import"./chunk-5z28bqne.js";
import"./chunk-qajrkk97.js";
import {
  errorMessage,
  init_debug,
  init_errors,
  init_slowOperations,
  isFsInaccessible,
  jsonParse,
  jsonStringify,
  logForDebugging
} from "./chunk-rpbc3b7k.js";
import"./chunk-fbv4apne.js";
import"./chunk-j5xzpm59.js";
import"./chunk-50dgek10.js";
import"./chunk-7wm5s02e.js";
import"./chunk-d3bk85eq.js";
import"./chunk-cw8rngb2.js";
import {
  getClaudeConfigHomeDir,
  init_envUtils
} from "./chunk-hxhwzgnn.js";
import"./chunk-qx8z601m.js";
import"./chunk-cgm6758j.js";
import {
  __esm,
  __require
} from "./chunk-qp2qdcda.js";

// src/utils/udsClient.ts
import { createConnection } from "net";
import { readdir, readFile } from "fs/promises";
import { join } from "path";
function getSessionsDir() {
  return join(getClaudeConfigHomeDir(), "sessions");
}
async function listAllLiveSessions() {
  const dir = getSessionsDir();
  let files;
  try {
    files = await readdir(dir);
  } catch (e) {
    if (!isFsInaccessible(e)) {
      logForDebugging(`[udsClient] readdir failed: ${errorMessage(e)}`);
    }
    return [];
  }
  const results = [];
  for (const file of files) {
    if (!/^\d+\.json$/.test(file))
      continue;
    const pid = parseInt(file.slice(0, -5), 10);
    if (!isProcessRunning(pid)) {
      continue;
    }
    try {
      const raw = await readFile(join(dir, file), "utf8");
      const data = jsonParse(raw);
      results.push({
        pid,
        sessionId: data.sessionId,
        cwd: data.cwd,
        startedAt: data.startedAt,
        kind: data.kind,
        name: data.name,
        messagingSocketPath: data.messagingSocketPath,
        entrypoint: data.entrypoint,
        bridgeSessionId: data.bridgeSessionId,
        alive: true
      });
    } catch {}
  }
  return results;
}
async function listPeers() {
  const all = await listAllLiveSessions();
  return all.filter((s) => s.pid !== process.pid && s.messagingSocketPath != null);
}
async function findAuthTokenForSocketPath(socketPath) {
  const { readUdsCapabilityToken } = await import("./chunk-zke45pfv.js");
  return readUdsCapabilityToken(socketPath);
}
async function isPeerAlive(socketPath, timeoutMs = 3000, authToken) {
  const token = authToken ?? await findAuthTokenForSocketPath(socketPath);
  if (!token)
    return false;
  return new Promise((resolve) => {
    const conn = createConnection(socketPath, () => {
      const ping = {
        type: "ping",
        ts: new Date().toISOString(),
        meta: { authToken: token }
      };
      conn.write(jsonStringify(ping) + `
`);
    });
    let resolved = false;
    const timer = setTimeout(() => {
      if (!resolved) {
        resolved = true;
        conn.destroy();
        resolve(false);
      }
    }, timeoutMs);
    let buffer = "";
    conn.on("data", (chunk) => {
      if (Buffer.byteLength(buffer, "utf8") + getChunkBytes(chunk) > MAX_UDS_FRAME_BYTES) {
        if (!resolved) {
          resolved = true;
          clearTimeout(timer);
          conn.destroy();
          resolve(false);
        }
        return;
      }
      buffer += chunk.toString();
      if (buffer.includes('"pong"')) {
        if (!resolved) {
          resolved = true;
          clearTimeout(timer);
          conn.end();
          resolve(true);
        }
      }
    });
    conn.on("error", () => {
      if (!resolved) {
        resolved = true;
        clearTimeout(timer);
        resolve(false);
      }
    });
  });
}
async function sendToUdsSocket(targetSocketPath, message, timeoutMs = 5000) {
  const { parseUdsTarget } = await import("./chunk-zke45pfv.js");
  const target = parseUdsTarget(targetSocketPath);
  const authToken = await findAuthTokenForSocketPath(target.socketPath);
  if (!authToken) {
    throw new Error(`No auth token found for peer at ${target.socketPath}`);
  }
  const data = typeof message === "string" ? message : jsonStringify(message);
  const udsMsg = {
    type: "text",
    data,
    ts: new Date().toISOString()
  };
  const { getUdsMessagingSocketPath } = await import("./chunk-zke45pfv.js");
  udsMsg.from = getUdsMessagingSocketPath();
  return new Promise((resolve, reject) => {
    let settled = false;
    let conn;
    const finish = (error) => {
      if (settled)
        return;
      settled = true;
      if (error) {
        conn.destroy(error);
        reject(error);
      } else {
        conn.end();
        resolve();
      }
    };
    conn = createConnection(target.socketPath, () => {
      udsMsg.meta = { ...udsMsg.meta, authToken };
      conn.write(jsonStringify(udsMsg) + `
`, (err) => {
        if (err)
          finish(err);
      });
    });
    attachUdsResponseReader(conn, {
      maxFrameBytes: MAX_UDS_FRAME_BYTES,
      onSettled: finish,
      formatSocketError: (err) => new UdsPeerConnectionError(target.socketPath, err)
    });
    conn.setTimeout(timeoutMs, () => {
      finish(new UdsPeerConnectionError(target.socketPath, new Error("Connection timed out")));
    });
  });
}
function connectToPeer(socketPath, onSocketError, timeoutMs = 5000) {
  return new Promise((resolve, reject) => {
    const conn = createConnection(socketPath);
    let settled = false;
    const timeout = setTimeout(fail, timeoutMs, new Error("Connection timed out"));
    function cleanupListeners() {
      clearTimeout(timeout);
      conn.off("error", fail);
    }
    function fail(cause) {
      if (settled) {
        return;
      }
      settled = true;
      cleanupListeners();
      conn.destroy();
      reject(new UdsPeerConnectionError(socketPath, cause));
    }
    conn.once("connect", () => {
      if (settled) {
        return;
      }
      settled = true;
      cleanupListeners();
      conn.on("error", onSocketError);
      resolve(conn);
    });
    conn.on("error", fail);
  });
}
function disconnectPeer(socket) {
  if (!socket.destroyed) {
    socket.end();
  }
}
var UdsPeerConnectionError;
var init_udsClient = __esm(() => {
  init_envUtils();
  init_debug();
  init_errors();
  init_genericProcessUtils();
  init_slowOperations();
  init_udsMessaging();
  init_udsResponseReader();
  UdsPeerConnectionError = class UdsPeerConnectionError extends Error {
    socketPath;
    constructor(socketPath, cause) {
      super(`Failed to connect to peer at ${socketPath}: ${errorMessage(cause)}`, { cause });
      this.name = "UdsPeerConnectionError";
      this.socketPath = socketPath;
    }
  };
});
init_udsClient();

export {
  sendToUdsSocket,
  listPeers,
  listAllLiveSessions,
  isPeerAlive,
  disconnectPeer,
  connectToPeer,
  UdsPeerConnectionError
};
