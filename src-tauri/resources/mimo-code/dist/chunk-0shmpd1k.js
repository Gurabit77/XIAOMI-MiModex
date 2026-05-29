// @bun
import {
  attachNdjsonFramer,
  init_ndjsonFramer
} from "./chunk-758qmraw.js";
import {
  init_log,
  logError
} from "./chunk-w5ahy59y.js";
import {
  errorMessage,
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
  getClaudeConfigHomeDir,
  init_envUtils
} from "./chunk-hxhwzgnn.js";
import {
  __esm,
  __require
} from "./chunk-qp2qdcda.js";

// src/utils/udsResponseReader.ts
import { StringDecoder } from "string_decoder";
function getChunkBytes(chunk) {
  return typeof chunk === "string" ? Buffer.byteLength(chunk, "utf8") : chunk.byteLength;
}
function parseResponseLine(line) {
  try {
    return jsonParse(line);
  } catch {
    throw new Error("Invalid UDS response frame");
  }
}
function attachUdsResponseReader(socket, options) {
  let buffer = "";
  let bufferBytes = 0;
  let settled = false;
  const decoder = new StringDecoder("utf8");
  function cleanupListeners() {
    socket.off("data", onData);
    socket.off("error", onError);
    socket.off("end", onEnd);
    socket.off("close", onClose);
  }
  function finish(error) {
    if (settled)
      return;
    settled = true;
    buffer = "";
    bufferBytes = 0;
    cleanupListeners();
    if (error) {
      socket.destroy();
    } else {
      socket.end();
    }
    options.onSettled(error);
  }
  function onData(chunk) {
    const decoded = decoder.write(chunk);
    const decodedBytes = Buffer.byteLength(decoded, "utf8");
    if (bufferBytes + decodedBytes > options.maxFrameBytes) {
      finish(new Error("UDS response frame exceeded size limit"));
      return;
    }
    buffer += decoded;
    bufferBytes += decodedBytes;
    let newlineIndex = buffer.indexOf(`
`);
    while (newlineIndex !== -1) {
      const line = buffer.slice(0, newlineIndex);
      const consumed = buffer.slice(0, newlineIndex + 1);
      buffer = buffer.slice(newlineIndex + 1);
      bufferBytes -= Buffer.byteLength(consumed, "utf8");
      if (!line.trim()) {
        newlineIndex = buffer.indexOf(`
`);
        continue;
      }
      let response;
      try {
        response = parseResponseLine(line);
      } catch (error) {
        finish(error instanceof Error ? error : new Error(errorMessage(error)));
        return;
      }
      if (response.type === "response" || options.acceptPong === true && response.type === "pong") {
        finish();
        return;
      }
      if (response.type === "error") {
        finish(new Error(response.data ?? "UDS receiver rejected message"));
        return;
      }
      newlineIndex = buffer.indexOf(`
`);
    }
  }
  function onError(error) {
    finish(options.formatSocketError?.(error) ?? (error instanceof Error ? error : new Error(errorMessage(error))));
  }
  function onEnd() {
    finish(new Error("UDS socket ended before response"));
  }
  function onClose(hadError) {
    if (hadError)
      return;
    finish(new Error("UDS socket closed before response"));
  }
  socket.on("data", onData);
  socket.on("error", onError);
  socket.on("end", onEnd);
  socket.on("close", onClose);
}
var init_udsResponseReader = __esm(() => {
  init_errors();
  init_slowOperations();
});

// src/utils/udsMessaging.ts
import { createHash, randomBytes, timingSafeEqual } from "crypto";
import { createServer } from "net";
import {
  chmod,
  lstat,
  mkdir,
  open,
  readFile,
  rename,
  unlink
} from "fs/promises";
import { dirname, join } from "path";
import { tmpdir } from "os";
function getDefaultUdsSocketPath() {
  if (defaultSocketPath)
    return defaultSocketPath;
  const nonce = randomBytes(16).toString("hex");
  if (process.platform === "win32") {
    defaultSocketPath = `\\\\.\\pipe\\mimo-code-${process.pid}-${nonce}`;
    return defaultSocketPath;
  }
  defaultSocketPath = join(tmpdir(), "mimo-code-socks", `${process.pid}-${nonce}`, "messaging.sock");
  return defaultSocketPath;
}
function getUdsMessagingSocketPath() {
  return socketPath ?? undefined;
}
function formatUdsAddress(socket) {
  return `uds:${socket}`;
}
function parseUdsTarget(target) {
  if (target.includes("#token=")) {
    throw new Error("UDS target must not include an inline auth token; use the ListPeers address");
  }
  return { socketPath: target };
}
function getCapabilityDir() {
  return join(getClaudeConfigHomeDir(), "messaging-capabilities");
}
function getCapabilityPath(socket) {
  const digest = createHash("sha256").update(socket).digest("hex");
  return join(getCapabilityDir(), `${digest}.json`);
}
function isNotFound(error) {
  return typeof error === "object" && error !== null && error.code === "ENOENT";
}
async function assertPrivateCapabilityDir(dir) {
  let stat;
  try {
    stat = await lstat(dir);
  } catch (error) {
    if (!isNotFound(error))
      throw error;
    await mkdir(dir, { recursive: true, mode: 448 });
    stat = await lstat(dir);
  }
  assertPrivateDirectory(stat, dir, "capability directory");
  await chmod(dir, 448);
}
function assertPrivateDirectory(stat, dir, label) {
  if (!stat.isDirectory() || stat.isSymbolicLink()) {
    throw new Error(`[udsMessaging] ${label} is not a private directory: ${dir}`);
  }
  if (process.platform !== "win32") {
    const broadMode = Number(stat.mode) & 63;
    if (broadMode !== 0) {
      throw new Error(`[udsMessaging] ${label} permissions are too broad: ${dir}`);
    }
    if (typeof process.getuid === "function" && Number(stat.uid) !== process.getuid()) {
      throw new Error(`[udsMessaging] ${label} owner does not match current user: ${dir}`);
    }
  }
}
async function writePrivateFileExclusive(path, content) {
  const handle = await open(path, "wx", 384);
  try {
    await handle.writeFile(content, "utf-8");
  } finally {
    await handle.close();
  }
  await chmod(path, 384);
}
async function ensureSocketParent(path) {
  const dir = dirname(path);
  try {
    const stat = await lstat(dir);
    if (!stat.isDirectory() || stat.isSymbolicLink()) {
      throw new Error(`[udsMessaging] socket parent is not a directory: ${dir}`);
    }
    assertPrivateDirectory(stat, dir, "socket parent");
    return;
  } catch (error) {
    if (!isNotFound(error))
      throw error;
  }
  await mkdir(dir, { recursive: true, mode: 448 });
  await chmod(dir, 448);
}
async function writeCapabilityFile(socket, token) {
  const dir = getCapabilityDir();
  await assertPrivateCapabilityDir(dir);
  const target = getCapabilityPath(socket);
  const temp = `${target}.${process.pid}.${randomBytes(8).toString("hex")}.tmp`;
  try {
    await writePrivateFileExclusive(temp, jsonStringify({ socketPath: socket, authToken: token }));
    await rename(temp, target);
  } catch (error) {
    try {
      await unlink(temp);
    } catch {}
    throw error;
  }
  capabilityFilePath = target;
}
async function readUdsCapabilityToken(socket) {
  try {
    const parsed = jsonParse(await readFile(getCapabilityPath(socket), "utf-8"));
    if (parsed.socketPath === socket && typeof parsed.authToken === "string") {
      return parsed.authToken;
    }
  } catch {}
  return;
}
function setOnEnqueue(cb) {
  onEnqueueCb = cb;
}
function drainInbox() {
  const pending = inbox.splice(0, inbox.length);
  inboxBytes = 0;
  for (const entry of pending) {
    entry.status = "processed";
  }
  return pending;
}
function getMessageBytes(message) {
  return Buffer.byteLength(jsonStringify(message), "utf8");
}
function enqueueInboxEntry(entry) {
  const entryBytes = getMessageBytes(entry.message);
  if (entryBytes > MAX_UDS_FRAME_BYTES || inbox.length >= MAX_UDS_INBOX_ENTRIES || inboxBytes + entryBytes > MAX_UDS_INBOX_BYTES) {
    logError(new Error(`[udsMessaging] inbox full (${inbox.length}/${MAX_UDS_INBOX_ENTRIES}, ${inboxBytes}/${MAX_UDS_INBOX_BYTES} bytes); dropping message type=${entry.message.type}`));
    return false;
  }
  inbox.push(entry);
  inboxBytes += entryBytes;
  return true;
}
function ensureAuthToken() {
  if (!authToken) {
    authToken = randomBytes(32).toString("hex");
  }
  return authToken;
}
function getMessageAuthToken(message) {
  const token = message.meta?.authToken;
  return typeof token === "string" ? token : undefined;
}
function isAuthorizedMessage(message) {
  const provided = getMessageAuthToken(message);
  if (!provided || !authToken)
    return false;
  const providedBuffer = Buffer.from(provided, "utf8");
  const expectedBuffer = Buffer.from(authToken, "utf8");
  if (providedBuffer.length !== expectedBuffer.length)
    return false;
  return timingSafeEqual(providedBuffer, expectedBuffer);
}
function writeSocketMessage(socket, message) {
  if (socket.destroyed)
    return;
  socket.write(jsonStringify(message) + `
`);
}
function writeSocketMessageAndDestroy(socket, message) {
  if (socket.destroyed)
    return;
  socket.write(jsonStringify(message) + `
`, () => {
    if (!socket.destroyed)
      socket.destroy();
  });
}
function writeSocketErrorAndDestroy(socket, data) {
  writeSocketMessageAndDestroy(socket, {
    type: "error",
    data,
    ts: new Date().toISOString()
  });
}
function unrefTimer(timer) {
  const maybeUnref = timer.unref;
  if (typeof maybeUnref === "function") {
    maybeUnref.call(timer);
  }
}
async function closeServer(serverToClose) {
  await new Promise((resolve) => {
    serverToClose.close(() => resolve());
  });
}
async function removeSocketPath(path) {
  if (process.platform === "win32")
    return;
  try {
    await unlink(path);
  } catch {}
}
function stripAuthToken(message) {
  const { authToken: _authToken, ...metaWithoutAuth } = message.meta ?? {};
  return {
    ...message,
    meta: Object.keys(metaWithoutAuth).length > 0 ? metaWithoutAuth : undefined
  };
}
function withRequestAuthToken(message, token) {
  return {
    ...message,
    meta: {
      ...message.meta,
      authToken: token
    }
  };
}
async function startUdsMessaging(path, opts) {
  if (server) {
    logForDebugging("[udsMessaging] server already running, skipping start");
    return;
  }
  if (process.platform !== "win32") {
    await ensureSocketParent(path);
  }
  if (process.platform !== "win32") {
    try {
      await unlink(path);
    } catch {}
  }
  const token = ensureAuthToken();
  let startedServer = null;
  let exportedSocketEnv = false;
  try {
    await new Promise((resolve, reject) => {
      const srv = createServer((socket) => {
        if (clients.size >= MAX_UDS_CLIENTS) {
          logForDebugging(`[udsMessaging] rejected client: ${clients.size}/${MAX_UDS_CLIENTS} clients already connected`);
          socket.destroy();
          return;
        }
        clients.add(socket);
        logForDebugging(`[udsMessaging] client connected (total: ${clients.size})`);
        let authenticated = false;
        let closing = false;
        const closeWithError = (data) => {
          if (closing || socket.destroyed)
            return;
          closing = true;
          socket.pause();
          writeSocketErrorAndDestroy(socket, data);
        };
        const authTimer = setTimeout(() => {
          if (authenticated || socket.destroyed)
            return;
          logForDebugging("[udsMessaging] closing unauthenticated idle client");
          closeWithError("authentication timeout");
        }, UDS_AUTH_TIMEOUT_MS);
        unrefTimer(authTimer);
        socket.setTimeout(UDS_IDLE_TIMEOUT_MS, () => {
          logForDebugging("[udsMessaging] closing idle client");
          closeWithError("idle timeout");
        });
        attachNdjsonFramer(socket, (msg) => {
          if (!isAuthorizedMessage(msg)) {
            logForDebugging(`[udsMessaging] rejected unauthenticated message type=${msg.type}`);
            closeWithError("unauthorized");
            return;
          }
          if (!authenticated) {
            authenticated = true;
            clearTimeout(authTimer);
          }
          if (msg.type === "ping") {
            writeSocketMessage(socket, {
              type: "pong",
              from: socketPath ?? undefined,
              ts: new Date().toISOString()
            });
            return;
          }
          const sanitizedMessage = stripAuthToken(msg);
          const entry = {
            id: `uds-${nextId++}`,
            message: sanitizedMessage,
            receivedAt: Date.now(),
            status: "pending"
          };
          if (!enqueueInboxEntry(entry)) {
            closeWithError("inbox full");
            return;
          }
          logForDebugging(`[udsMessaging] enqueued message type=${msg.type} from=${msg.from ?? "unknown"}`);
          writeSocketMessage(socket, {
            type: "response",
            data: "ok",
            ts: new Date().toISOString(),
            meta: { id: entry.id }
          });
          onEnqueueCb?.();
        }, (text) => jsonParse(text), {
          maxFrameBytes: MAX_UDS_FRAME_BYTES,
          onFrameError: (error) => {
            logForDebugging(`[udsMessaging] ${error.message}`);
            closeWithError(error.message);
          },
          onInvalidFrame: (error) => {
            logForDebugging(`[udsMessaging] invalid client frame: ${errorMessage(error)}`);
            closeWithError("invalid frame");
          },
          destroyOnFrameError: false
        });
        socket.on("close", () => {
          clearTimeout(authTimer);
          clients.delete(socket);
        });
        socket.on("error", (err) => {
          clearTimeout(authTimer);
          clients.delete(socket);
          logForDebugging(`[udsMessaging] client error: ${errorMessage(err)}`);
        });
      });
      const rejectBeforeListen = (error) => {
        reject(error);
      };
      const logRuntimeError = (error) => {
        logForDebugging(`[udsMessaging] server error on ${path}${opts?.isExplicit ? " (explicit)" : ""}: ${errorMessage(error)}`);
      };
      srv.once("error", rejectBeforeListen);
      srv.listen(path, () => {
        (async () => {
          try {
            if (process.platform !== "win32") {
              try {
                await chmod(path, 384);
              } catch (err) {
                if (!(err instanceof Error && err.code === "ENOENT")) {
                  throw err;
                }
                logForDebugging(`[udsMessaging] chmod skipped: socket file not yet visible at ${path}`);
              }
            }
            srv.off("error", rejectBeforeListen);
            srv.on("error", logRuntimeError);
            server = srv;
            startedServer = srv;
            resolve();
          } catch (error) {
            srv.off("error", rejectBeforeListen);
            const closeError = error instanceof Error ? error : new Error(errorMessage(error));
            let rejected = false;
            const rejectOnce = () => {
              if (rejected)
                return;
              rejected = true;
              reject(closeError);
            };
            const fallback = setTimeout(rejectOnce, 1000);
            unrefTimer(fallback);
            srv.close(() => {
              clearTimeout(fallback);
              rejectOnce();
            });
          }
        })();
      });
    });
    await writeCapabilityFile(path, token);
    socketPath = path;
    process.env.CLAUDE_CODE_MESSAGING_SOCKET = path;
    exportedSocketEnv = true;
    logForDebugging(`[udsMessaging] server listening on ${path}${opts?.isExplicit ? " (explicit)" : ""}`);
  } catch (error) {
    if (capabilityFilePath) {
      try {
        await unlink(capabilityFilePath);
      } catch {}
      capabilityFilePath = null;
    }
    if (startedServer) {
      await closeServer(startedServer);
    }
    if (server === startedServer) {
      server = null;
    }
    await removeSocketPath(path);
    if (exportedSocketEnv) {
      delete process.env.CLAUDE_CODE_MESSAGING_SOCKET;
    }
    socketPath = null;
    defaultSocketPath = null;
    authToken = null;
    throw error;
  }
  registerCleanup(async () => {
    await stopUdsMessaging();
  });
}
async function stopUdsMessaging() {
  defaultSocketPath = null;
  if (!server)
    return;
  for (const socket of clients) {
    socket.destroy();
  }
  clients.clear();
  await new Promise((resolve) => {
    server.close(() => resolve());
  });
  server = null;
  inbox.length = 0;
  inboxBytes = 0;
  onEnqueueCb = null;
  if (socketPath) {
    await removeSocketPath(socketPath);
    delete process.env.CLAUDE_CODE_MESSAGING_SOCKET;
    logForDebugging(`[udsMessaging] server stopped, socket removed: ${socketPath}`);
    socketPath = null;
    authToken = null;
  }
  if (capabilityFilePath) {
    try {
      await unlink(capabilityFilePath);
    } catch {}
    capabilityFilePath = null;
  }
}
async function sendUdsMessage(targetSocketPath, message, opts = {}) {
  const { createConnection } = await import("net");
  const token = opts.authToken ?? authToken;
  if (!token) {
    throw new Error("Cannot send UDS message without auth token");
  }
  const outbound = withRequestAuthToken({
    ...message,
    from: message.from ?? socketPath ?? undefined,
    ts: message.ts ?? new Date().toISOString()
  }, token);
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
    conn = createConnection(targetSocketPath, () => {
      conn.write(jsonStringify(outbound) + `
`, (err) => {
        if (err)
          finish(err);
      });
    });
    attachUdsResponseReader(conn, {
      maxFrameBytes: MAX_UDS_FRAME_BYTES,
      acceptPong: true,
      onSettled: finish
    });
    conn.setTimeout(5000, () => {
      finish(new Error("Connection timed out"));
    });
  });
}
var server = null, socketPath = null, onEnqueueCb = null, clients, inbox, nextId = 1, defaultSocketPath = null, authToken = null, capabilityFilePath = null, inboxBytes = 0, MAX_UDS_INBOX_ENTRIES = 1000, MAX_UDS_FRAME_BYTES, MAX_UDS_INBOX_BYTES, MAX_UDS_CLIENTS = 128, UDS_AUTH_TIMEOUT_MS = 2000, UDS_IDLE_TIMEOUT_MS = 30000;
var init_udsMessaging = __esm(() => {
  init_cleanupRegistry();
  init_debug();
  init_errors();
  init_envUtils();
  init_ndjsonFramer();
  init_udsResponseReader();
  init_log();
  init_slowOperations();
  clients = new Set;
  inbox = [];
  MAX_UDS_FRAME_BYTES = 64 * 1024;
  MAX_UDS_INBOX_BYTES = 2 * 1024 * 1024;
});

export { getChunkBytes, attachUdsResponseReader, init_udsResponseReader, MAX_UDS_INBOX_ENTRIES, MAX_UDS_FRAME_BYTES, MAX_UDS_INBOX_BYTES, MAX_UDS_CLIENTS, UDS_AUTH_TIMEOUT_MS, UDS_IDLE_TIMEOUT_MS, getDefaultUdsSocketPath, getUdsMessagingSocketPath, formatUdsAddress, parseUdsTarget, readUdsCapabilityToken, setOnEnqueue, drainInbox, startUdsMessaging, stopUdsMessaging, sendUdsMessage, init_udsMessaging };
