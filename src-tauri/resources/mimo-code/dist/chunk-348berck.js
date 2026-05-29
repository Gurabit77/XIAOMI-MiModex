// @bun
import {
  getWebSocketProxyAgent,
  getWebSocketProxyUrl,
  getWebSocketTLSOptions,
  init_mtls,
  init_proxy
} from "./chunk-t7f7dp4k.js";
import {
  init_cleanupRegistry,
  init_debug,
  init_errors,
  isENOENT,
  logForDebugging,
  registerCleanup
} from "./chunk-rpbc3b7k.js";
import"./chunk-fbv4apne.js";
import"./chunk-j5xzpm59.js";
import"./chunk-50dgek10.js";
import"./chunk-d3bk85eq.js";
import"./chunk-cw8rngb2.js";
import {
  init_envUtils,
  isEnvTruthy
} from "./chunk-hxhwzgnn.js";
import"./chunk-qx8z601m.js";
import"./chunk-cgm6758j.js";
import"./chunk-3v4d4h0t.js";
import"./chunk-8pn8tvgg.js";
import"./chunk-netzwgv1.js";
import {
  __require
} from "./chunk-qp2qdcda.js";

// src/upstreamproxy/upstreamproxy.ts
init_cleanupRegistry();
init_debug();
init_envUtils();
init_errors();
import { mkdir, readFile, unlink, writeFile } from "fs/promises";
import { homedir } from "os";
import { join } from "path";

// src/upstreamproxy/relay.ts
init_debug();
init_mtls();
init_proxy();
import { createServer } from "net";
var nodeWSCtor;
var MAX_CHUNK_BYTES = 512 * 1024;
var PING_INTERVAL_MS = 30000;
function encodeChunk(data) {
  const len = data.length;
  const varint = [];
  let n = len;
  while (n > 127) {
    varint.push(n & 127 | 128);
    n >>>= 7;
  }
  varint.push(n);
  const out = new Uint8Array(1 + varint.length + len);
  out[0] = 10;
  out.set(varint, 1);
  out.set(data, 1 + varint.length);
  return out;
}
function decodeChunk(buf) {
  if (buf.length === 0)
    return new Uint8Array(0);
  if (buf[0] !== 10)
    return null;
  let len = 0;
  let shift = 0;
  let i = 1;
  while (i < buf.length) {
    const b = buf[i];
    len |= (b & 127) << shift;
    i++;
    if ((b & 128) === 0)
      break;
    shift += 7;
    if (shift > 28)
      return null;
  }
  if (i + len > buf.length)
    return null;
  return buf.subarray(i, i + len);
}
function newConnState() {
  return {
    connectBuf: Buffer.alloc(0),
    pending: [],
    wsOpen: false,
    established: false,
    closed: false
  };
}
async function startUpstreamProxyRelay(opts) {
  const authHeader = "Basic " + Buffer.from(`${opts.sessionId}:${opts.token}`).toString("base64");
  const wsAuthHeader = `Bearer ${opts.token}`;
  const relay = typeof Bun !== "undefined" ? startBunRelay(opts.wsUrl, authHeader, wsAuthHeader) : await startNodeRelay(opts.wsUrl, authHeader, wsAuthHeader);
  logForDebugging(`[upstreamproxy] relay listening on 127.0.0.1:${relay.port}`);
  return relay;
}
function startBunRelay(wsUrl, authHeader, wsAuthHeader) {
  const server = Bun.listen({
    hostname: "127.0.0.1",
    port: 0,
    socket: {
      open(sock) {
        sock.data = { ...newConnState(), writeBuf: [] };
      },
      data(sock, data) {
        const st = sock.data;
        const adapter = {
          write: (payload) => {
            const bytes = typeof payload === "string" ? Buffer.from(payload, "utf8") : payload;
            if (st.writeBuf.length > 0) {
              st.writeBuf.push(bytes);
              return;
            }
            const n = sock.write(bytes);
            if (n < bytes.length)
              st.writeBuf.push(bytes.subarray(n));
          },
          end: () => sock.end()
        };
        handleData(adapter, st, data, wsUrl, authHeader, wsAuthHeader);
      },
      drain(sock) {
        const st = sock.data;
        while (st.writeBuf.length > 0) {
          const chunk = st.writeBuf[0];
          const n = sock.write(chunk);
          if (n < chunk.length) {
            st.writeBuf[0] = chunk.subarray(n);
            return;
          }
          st.writeBuf.shift();
        }
      },
      close(sock) {
        cleanupConn(sock.data);
      },
      error(sock, err) {
        logForDebugging(`[upstreamproxy] client socket error: ${err.message}`);
        cleanupConn(sock.data);
      }
    }
  });
  return {
    port: server.port,
    stop: () => server.stop(true)
  };
}
async function startNodeRelay(wsUrl, authHeader, wsAuthHeader) {
  nodeWSCtor = (await import("ws")).default;
  const states = new WeakMap;
  const server = createServer((sock) => {
    const st = newConnState();
    states.set(sock, st);
    const adapter = {
      write: (payload) => {
        sock.write(typeof payload === "string" ? payload : Buffer.from(payload));
      },
      end: () => sock.end()
    };
    sock.on("data", (data) => handleData(adapter, st, data, wsUrl, authHeader, wsAuthHeader));
    sock.on("close", () => cleanupConn(states.get(sock)));
    sock.on("error", (err) => {
      logForDebugging(`[upstreamproxy] client socket error: ${err.message}`);
      cleanupConn(states.get(sock));
    });
  });
  return new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const addr = server.address();
      if (addr === null || typeof addr === "string") {
        reject(new Error("upstreamproxy: server has no TCP address"));
        return;
      }
      resolve({
        port: addr.port,
        stop: () => server.close()
      });
    });
  });
}
function handleData(sock, st, data, wsUrl, authHeader, wsAuthHeader) {
  if (!st.ws) {
    st.connectBuf = Buffer.concat([st.connectBuf, data]);
    const headerEnd = st.connectBuf.indexOf(`\r
\r
`);
    if (headerEnd === -1) {
      if (st.connectBuf.length > 8192) {
        sock.write(`HTTP/1.1 400 Bad Request\r
\r
`);
        sock.end();
      }
      return;
    }
    const reqHead = st.connectBuf.subarray(0, headerEnd).toString("utf8");
    const firstLine = reqHead.split(`\r
`)[0] ?? "";
    const m = firstLine.match(/^CONNECT\s+(\S+)\s+HTTP\/1\.[01]$/i);
    if (!m) {
      sock.write(`HTTP/1.1 405 Method Not Allowed\r
\r
`);
      sock.end();
      return;
    }
    const trailing = st.connectBuf.subarray(headerEnd + 4);
    if (trailing.length > 0) {
      st.pending.push(Buffer.from(trailing));
    }
    st.connectBuf = Buffer.alloc(0);
    openTunnel(sock, st, firstLine, wsUrl, authHeader, wsAuthHeader);
    return;
  }
  if (!st.wsOpen) {
    st.pending.push(Buffer.from(data));
    return;
  }
  forwardToWs(st.ws, data);
}
function openTunnel(sock, st, connectLine, wsUrl, authHeader, wsAuthHeader) {
  const headers = {
    "Content-Type": "application/proto",
    Authorization: wsAuthHeader
  };
  let ws;
  if (nodeWSCtor) {
    ws = new nodeWSCtor(wsUrl, {
      headers,
      agent: getWebSocketProxyAgent(wsUrl),
      ...getWebSocketTLSOptions()
    });
  } else {
    ws = new globalThis.WebSocket(wsUrl, {
      headers,
      proxy: getWebSocketProxyUrl(wsUrl),
      tls: getWebSocketTLSOptions() || undefined
    });
  }
  ws.binaryType = "arraybuffer";
  st.ws = ws;
  ws.onopen = () => {
    const head = `${connectLine}\r
Proxy-Authorization: ${authHeader}\r
\r
`;
    ws.send(encodeChunk(new Uint8Array(Buffer.from(head, "utf8"))));
    st.wsOpen = true;
    for (const buf of st.pending) {
      forwardToWs(ws, buf);
    }
    st.pending = [];
    st.pinger = setInterval(sendKeepalive, PING_INTERVAL_MS, ws);
  };
  ws.onmessage = (ev) => {
    const raw = ev.data instanceof ArrayBuffer ? new Uint8Array(ev.data) : new Uint8Array(Buffer.from(ev.data));
    const payload = decodeChunk(raw);
    if (payload && payload.length > 0) {
      st.established = true;
      sock.write(payload);
    }
  };
  ws.onerror = (ev) => {
    const msg = "message" in ev ? String(ev.message) : "websocket error";
    logForDebugging(`[upstreamproxy] ws error: ${msg}`);
    if (st.closed)
      return;
    st.closed = true;
    if (!st.established) {
      sock.write(`HTTP/1.1 502 Bad Gateway\r
\r
`);
    }
    sock.end();
    cleanupConn(st);
  };
  ws.onclose = () => {
    if (st.closed)
      return;
    st.closed = true;
    sock.end();
    cleanupConn(st);
  };
}
function sendKeepalive(ws) {
  if (ws.readyState === WebSocket.OPEN) {
    ws.send(encodeChunk(new Uint8Array(0)));
  }
}
function forwardToWs(ws, data) {
  if (ws.readyState !== WebSocket.OPEN)
    return;
  for (let off = 0;off < data.length; off += MAX_CHUNK_BYTES) {
    const slice = new Uint8Array(data.subarray(off, off + MAX_CHUNK_BYTES));
    ws.send(encodeChunk(slice));
  }
}
function cleanupConn(st) {
  if (!st)
    return;
  if (st.pinger)
    clearInterval(st.pinger);
  if (st.ws && st.ws.readyState <= WebSocket.OPEN) {
    try {
      st.ws.close();
    } catch {}
  }
  st.ws = undefined;
}

// src/upstreamproxy/upstreamproxy.ts
var SESSION_TOKEN_PATH = "/run/ccr/session_token";
var SYSTEM_CA_BUNDLE = "/etc/ssl/certs/ca-certificates.crt";
var NO_PROXY_LIST = [
  "localhost",
  "127.0.0.1",
  "::1",
  "169.254.0.0/16",
  "10.0.0.0/8",
  "172.16.0.0/12",
  "192.168.0.0/16",
  "anthropic.com",
  ".anthropic.com",
  "*.anthropic.com",
  "github.com",
  "api.github.com",
  "*.github.com",
  "*.githubusercontent.com",
  "registry.npmjs.org",
  "pypi.org",
  "files.pythonhosted.org",
  "index.crates.io",
  "proxy.golang.org"
].join(",");
var state = { enabled: false };
async function initUpstreamProxy(opts) {
  if (!isEnvTruthy(process.env.CLAUDE_CODE_REMOTE)) {
    return state;
  }
  if (!isEnvTruthy(process.env.CCR_UPSTREAM_PROXY_ENABLED)) {
    return state;
  }
  const sessionId = process.env.CLAUDE_CODE_REMOTE_SESSION_ID;
  if (!sessionId) {
    logForDebugging("[upstreamproxy] CLAUDE_CODE_REMOTE_SESSION_ID unset; proxy disabled", { level: "warn" });
    return state;
  }
  const tokenPath = opts?.tokenPath ?? SESSION_TOKEN_PATH;
  const token = await readToken(tokenPath);
  if (!token) {
    logForDebugging("[upstreamproxy] no session token file; proxy disabled");
    return state;
  }
  setNonDumpable();
  const baseUrl = opts?.ccrBaseUrl ?? process.env.ANTHROPIC_BASE_URL ?? "https://api.anthropic.com";
  const caBundlePath = opts?.caBundlePath ?? join(homedir(), ".ccr", "ca-bundle.crt");
  const caOk = await downloadCaBundle(baseUrl, opts?.systemCaPath ?? SYSTEM_CA_BUNDLE, caBundlePath);
  if (!caOk)
    return state;
  try {
    const wsUrl = baseUrl.replace(/^http/, "ws") + "/v1/code/upstreamproxy/ws";
    const relay = await startUpstreamProxyRelay({ wsUrl, sessionId, token });
    registerCleanup(async () => relay.stop());
    state = { enabled: true, port: relay.port, caBundlePath };
    logForDebugging(`[upstreamproxy] enabled on 127.0.0.1:${relay.port}`);
    await unlink(tokenPath).catch(() => {
      logForDebugging("[upstreamproxy] token file unlink failed", {
        level: "warn"
      });
    });
  } catch (err) {
    logForDebugging(`[upstreamproxy] relay start failed: ${err instanceof Error ? err.message : String(err)}; proxy disabled`, { level: "warn" });
  }
  return state;
}
function getUpstreamProxyEnv() {
  if (!state.enabled || !state.port || !state.caBundlePath) {
    if (process.env.HTTPS_PROXY && process.env.SSL_CERT_FILE) {
      const inherited = {};
      for (const key of [
        "HTTPS_PROXY",
        "https_proxy",
        "NO_PROXY",
        "no_proxy",
        "SSL_CERT_FILE",
        "NODE_EXTRA_CA_CERTS",
        "REQUESTS_CA_BUNDLE",
        "CURL_CA_BUNDLE"
      ]) {
        if (process.env[key])
          inherited[key] = process.env[key];
      }
      return inherited;
    }
    return {};
  }
  const proxyUrl = `http://127.0.0.1:${state.port}`;
  return {
    HTTPS_PROXY: proxyUrl,
    https_proxy: proxyUrl,
    NO_PROXY: NO_PROXY_LIST,
    no_proxy: NO_PROXY_LIST,
    SSL_CERT_FILE: state.caBundlePath,
    NODE_EXTRA_CA_CERTS: state.caBundlePath,
    REQUESTS_CA_BUNDLE: state.caBundlePath,
    CURL_CA_BUNDLE: state.caBundlePath
  };
}
function resetUpstreamProxyForTests() {
  state = { enabled: false };
}
async function readToken(path) {
  try {
    const raw = await readFile(path, "utf8");
    return raw.trim() || null;
  } catch (err) {
    if (isENOENT(err))
      return null;
    logForDebugging(`[upstreamproxy] token read failed: ${err instanceof Error ? err.message : String(err)}`, { level: "warn" });
    return null;
  }
}
function setNonDumpable() {
  if (process.platform !== "linux" || typeof Bun === "undefined")
    return;
  try {
    const ffi = __require("bun:ffi");
    const lib = ffi.dlopen("libc.so.6", {
      prctl: {
        args: ["int", "u64", "u64", "u64", "u64"],
        returns: "int"
      }
    });
    const PR_SET_DUMPABLE = 4;
    const rc = lib.symbols.prctl(PR_SET_DUMPABLE, 0n, 0n, 0n, 0n);
    if (rc !== 0) {
      logForDebugging("[upstreamproxy] prctl(PR_SET_DUMPABLE,0) returned nonzero", {
        level: "warn"
      });
    }
  } catch (err) {
    logForDebugging(`[upstreamproxy] prctl unavailable: ${err instanceof Error ? err.message : String(err)}`, { level: "warn" });
  }
}
async function downloadCaBundle(baseUrl, systemCaPath, outPath) {
  try {
    const resp = await fetch(`${baseUrl}/v1/code/upstreamproxy/ca-cert`, {
      signal: AbortSignal.timeout(5000)
    });
    if (!resp.ok) {
      logForDebugging(`[upstreamproxy] ca-cert fetch ${resp.status}; proxy disabled`, { level: "warn" });
      return false;
    }
    const ccrCa = await resp.text();
    const systemCa = await readFile(systemCaPath, "utf8").catch(() => "");
    await mkdir(join(outPath, ".."), { recursive: true });
    await writeFile(outPath, systemCa + `
` + ccrCa, "utf8");
    return true;
  } catch (err) {
    logForDebugging(`[upstreamproxy] ca-cert download failed: ${err instanceof Error ? err.message : String(err)}; proxy disabled`, { level: "warn" });
    return false;
  }
}
export {
  resetUpstreamProxyForTests,
  initUpstreamProxy,
  getUpstreamProxyEnv,
  SESSION_TOKEN_PATH
};
