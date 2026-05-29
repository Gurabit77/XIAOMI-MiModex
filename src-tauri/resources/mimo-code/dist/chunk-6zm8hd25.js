// @bun
import {
  buildCliLaunch,
  init_cliLaunch
} from "./chunk-a9gy4bpg.js";
import"./chunk-akkx6jmm.js";
import {
  getClaudeAIOAuthTokens,
  init_auth
} from "./chunk-1ghcng4e.js";
import"./chunk-pz9t24tq.js";
import"./chunk-4efha55s.js";
import"./chunk-t7f7dp4k.js";
import"./chunk-zwarn9h7.js";
import"./chunk-b127reh2.js";
import"./chunk-et54q618.js";
import"./chunk-pe9b769s.js";
import"./chunk-64c1avct.js";
import"./chunk-8g5pe1gr.js";
import"./chunk-0rbpfkda.js";
import"./chunk-gnw2dwca.js";
import"./chunk-wbmn1xar.js";
import"./chunk-3c25bcsw.js";
import"./chunk-nw7v8w65.js";
import"./chunk-xhesahm0.js";
import {
  getOauthConfig,
  init_oauth
} from "./chunk-rh5a2rg9.js";
import"./chunk-8g747a8x.js";
import"./chunk-d7886r6a.js";
import"./chunk-djs11qd6.js";
import"./chunk-gdqk4ssq.js";
import"./chunk-p2816w9z.js";
import"./chunk-v1kzp02e.js";
import"./chunk-x5hyyhqf.js";
import"./chunk-crmjpsqe.js";
import"./chunk-er1s76c9.js";
import"./chunk-b5wxetbv.js";
import"./chunk-f2mhrmww.js";
import"./chunk-0vkfrmqm.js";
import"./chunk-0xjaqda8.js";
import"./chunk-t6jhrn34.js";
import"./chunk-95xve7f8.js";
import"./chunk-jdq8jgyg.js";
import"./chunk-qcwbd71h.js";
import"./chunk-dxvkxgnf.js";
import"./chunk-w5ahy59y.js";
import"./chunk-8tnsngw2.js";
import"./chunk-jkh5s8ct.js";
import"./chunk-kwm5bf2m.js";
import"./chunk-5z28bqne.js";
import"./chunk-qajrkk97.js";
import {
  init_debug,
  init_slowOperations,
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
import"./chunk-hxhwzgnn.js";
import"./chunk-qx8z601m.js";
import"./chunk-cgm6758j.js";
import"./chunk-3v4d4h0t.js";
import"./chunk-8pn8tvgg.js";
import"./chunk-netzwgv1.js";
import"./chunk-qp2qdcda.js";

// src/ssh/SSHSessionManager.ts
init_debug();
init_slowOperations();
function isStdoutMessage(value) {
  return typeof value === "object" && value !== null && "type" in value && typeof value.type === "string";
}
var BASE_RECONNECT_DELAY_MS = 2000;
var MAX_RECONNECT_DELAY_MS = 15000;
var DEFAULT_MAX_RECONNECT_ATTEMPTS = 3;

class SSHSessionManagerImpl {
  proc;
  options;
  connected = false;
  disconnected = false;
  readLoopAbort = null;
  reconnectAttempt = 0;
  maxReconnectAttempts;
  userInitiatedDisconnect = false;
  reconnecting = false;
  constructor(proc, options) {
    this.proc = proc;
    this.options = options;
    this.maxReconnectAttempts = options.maxReconnectAttempts ?? DEFAULT_MAX_RECONNECT_ATTEMPTS;
  }
  connect() {
    if (this.connected)
      return;
    this.readLoopAbort = new AbortController;
    this.startReadLoop();
    this.monitorExit();
    this.connected = true;
    this.options.onConnected();
  }
  async startReadLoop() {
    const stdout = this.proc.stdout;
    if (!stdout) {
      this.options.onError(new Error("SSH process stdout is not available"));
      return;
    }
    const reader = stdout.getReader();
    const decoder = new TextDecoder;
    let lineBuffer = "";
    try {
      while (!this.disconnected) {
        const { done, value } = await reader.read();
        if (done)
          break;
        lineBuffer += decoder.decode(value, { stream: true });
        const lines = lineBuffer.split(`
`);
        lineBuffer = lines.pop() ?? "";
        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed)
            continue;
          this.processLine(trimmed);
        }
      }
    } catch (err) {
      if (!this.disconnected) {
        this.options.onError(err instanceof Error ? err : new Error(String(err)));
      }
    } finally {
      reader.releaseLock();
      if (!this.disconnected && !this.userInitiatedDisconnect) {
        this.handleProcessExit();
      }
    }
  }
  monitorExit() {
    if (this.proc.exitCode !== null) {
      if (!this.userInitiatedDisconnect) {
        this.handleProcessExit();
      }
      return;
    }
    this.proc.exited.then(() => {
      if (!this.disconnected && !this.userInitiatedDisconnect) {
        this.handleProcessExit();
      }
    }).catch(() => {
      if (!this.disconnected && !this.userInitiatedDisconnect) {
        this.handleProcessExit();
      }
    });
  }
  async handleProcessExit() {
    if (this.disconnected || this.reconnecting)
      return;
    this.connected = false;
    if (!this.options.reconnect) {
      this.disconnected = true;
      this.options.onDisconnected();
      return;
    }
    if (this.reconnectAttempt >= this.maxReconnectAttempts) {
      this.disconnected = true;
      this.options.onDisconnected();
      return;
    }
    this.reconnecting = true;
    try {
      await this.attemptReconnect();
    } finally {
      this.reconnecting = false;
    }
  }
  async attemptReconnect() {
    const reconnect = this.options.reconnect;
    while (this.reconnectAttempt < this.maxReconnectAttempts) {
      this.reconnectAttempt++;
      this.options.onReconnecting(this.reconnectAttempt, this.maxReconnectAttempts);
      const delay = Math.min(BASE_RECONNECT_DELAY_MS * 2 ** (this.reconnectAttempt - 1), MAX_RECONNECT_DELAY_MS);
      await new Promise((r) => setTimeout(r, delay));
      if (this.userInitiatedDisconnect)
        return;
      try {
        const newProc = await reconnect();
        this.proc = newProc;
        this.reconnectAttempt = 0;
        this.connected = true;
        this.startReadLoop();
        this.monitorExit();
        this.options.onConnected();
        return;
      } catch (err) {
        logForDebugging(`[SSH] reconnect attempt ${this.reconnectAttempt} failed: ${err instanceof Error ? err.message : String(err)}`);
      }
    }
    this.disconnected = true;
    this.options.onDisconnected();
  }
  processLine(line) {
    let raw;
    try {
      raw = jsonParse(line);
    } catch {
      return;
    }
    if (!isStdoutMessage(raw))
      return;
    const parsed = raw;
    if (parsed.type === "control_request") {
      const request = parsed;
      if (request.request.subtype === "can_use_tool") {
        this.options.onPermissionRequest(request.request, request.request_id);
      } else {
        logForDebugging(`[SSH] Unsupported control request subtype: ${request.request.subtype}`);
        this.sendErrorResponse(request.request_id, `Unsupported control request subtype: ${request.request.subtype}`);
      }
      return;
    }
    if (parsed.type !== "control_response" && parsed.type !== "keep_alive" && parsed.type !== "control_cancel_request" && parsed.type !== "streamlined_text" && parsed.type !== "streamlined_tool_use_summary" && !(parsed.type === "system" && parsed.subtype === "post_turn_summary")) {
      this.options.onMessage(parsed);
    }
  }
  writeToStdin(data) {
    try {
      const stdin = this.proc.stdin;
      if (!stdin || typeof stdin === "number" || this.disconnected)
        return false;
      const encoded = new TextEncoder().encode(data + `
`);
      stdin.write(encoded);
      stdin.flush?.();
      return true;
    } catch {
      return false;
    }
  }
  async sendMessage(content) {
    const message = jsonStringify({
      type: "user",
      message: {
        role: "user",
        content
      },
      parent_tool_use_id: null,
      session_id: ""
    });
    return this.writeToStdin(message);
  }
  sendInterrupt() {
    const request = jsonStringify({
      type: "control_request",
      request_id: crypto.randomUUID(),
      request: {
        subtype: "interrupt"
      }
    });
    this.writeToStdin(request);
  }
  respondToPermissionRequest(requestId, response) {
    const msg = jsonStringify({
      type: "control_response",
      response: {
        subtype: "success",
        request_id: requestId,
        response: {
          behavior: response.behavior,
          ...response.behavior === "allow" ? { updatedInput: response.updatedInput } : { message: response.message }
        }
      }
    });
    this.writeToStdin(msg);
  }
  sendErrorResponse(requestId, error) {
    const response = jsonStringify({
      type: "control_response",
      response: {
        subtype: "error",
        request_id: requestId,
        error
      }
    });
    this.writeToStdin(response);
  }
  disconnect() {
    if (this.disconnected)
      return;
    this.userInitiatedDisconnect = true;
    this.disconnected = true;
    this.connected = false;
    this.readLoopAbort?.abort();
    try {
      const stdin = this.proc.stdin;
      if (stdin && typeof stdin !== "number") {
        stdin.end?.();
      }
    } catch {}
    try {
      this.proc.kill();
    } catch {}
  }
  isConnected() {
    return this.connected && !this.disconnected;
  }
}

// src/ssh/SSHAuthProxy.ts
init_auth();
init_oauth();
init_debug();
import { randomUUID } from "crypto";
import { unlinkSync } from "fs";
var isWindows = process.platform === "win32";
function resolveAuthHeaders() {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (apiKey) {
    return { "x-api-key": apiKey };
  }
  const oauthTokens = getClaudeAIOAuthTokens();
  if (oauthTokens?.accessToken) {
    return { Authorization: `Bearer ${oauthTokens.accessToken}` };
  }
  return {};
}
function resolveUpstreamBaseUrl() {
  return process.env.ANTHROPIC_BASE_URL || getOauthConfig().BASE_API_URL;
}
async function proxyFetch(req, nonce) {
  if (nonce && req.headers.get("x-auth-nonce") !== nonce) {
    return new Response("Forbidden", { status: 403 });
  }
  const upstreamBase = resolveUpstreamBaseUrl();
  const url = new URL(req.url);
  const upstreamUrl = `${upstreamBase}${url.pathname}${url.search}`;
  const authHeaders = resolveAuthHeaders();
  if (Object.keys(authHeaders).length === 0) {
    return new Response(JSON.stringify({
      error: "No API credentials available on local machine"
    }), { status: 401, headers: { "content-type": "application/json" } });
  }
  const forwardHeaders = new Headers(req.headers);
  for (const [k, v] of Object.entries(authHeaders)) {
    forwardHeaders.set(k, v);
  }
  forwardHeaders.delete("host");
  forwardHeaders.delete("x-auth-nonce");
  logForDebugging(`[SSHAuthProxy] ${req.method} ${url.pathname} -> ${upstreamUrl}`);
  try {
    const upstreamRes = await fetch(upstreamUrl, {
      method: req.method,
      headers: forwardHeaders,
      body: req.body,
      duplex: "half"
    });
    const responseHeaders = new Headers(upstreamRes.headers);
    responseHeaders.delete("content-encoding");
    responseHeaders.delete("content-length");
    return new Response(upstreamRes.body, {
      status: upstreamRes.status,
      statusText: upstreamRes.statusText,
      headers: responseHeaders
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    logForDebugging(`[SSHAuthProxy] upstream error: ${message}`);
    return new Response(JSON.stringify({ error: `Proxy upstream error: ${message}` }), { status: 502, headers: { "content-type": "application/json" } });
  }
}
async function createAuthProxy() {
  const id = randomUUID();
  if (isWindows) {
    return createTcpAuthProxy(id);
  }
  return createUnixSocketAuthProxy(id);
}
async function createUnixSocketAuthProxy(id) {
  const socketPath = `/tmp/claude-ssh-auth-${id}.sock`;
  const server = Bun.serve({
    unix: socketPath,
    fetch: (req) => proxyFetch(req, null)
  });
  logForDebugging(`[SSHAuthProxy] listening on unix:${socketPath}`);
  const proxy = {
    stop() {
      server.stop(true);
      try {
        unlinkSync(socketPath);
      } catch {}
    }
  };
  return {
    proxy,
    localAddress: socketPath,
    authEnv: { ANTHROPIC_AUTH_SOCKET: socketPath }
  };
}
async function createTcpAuthProxy(id) {
  const nonce = randomUUID();
  const server = Bun.serve({
    port: 0,
    hostname: "127.0.0.1",
    fetch: (req) => proxyFetch(req, nonce)
  });
  const port = server.port;
  logForDebugging(`[SSHAuthProxy] listening on TCP 127.0.0.1:${port} (nonce-protected)`);
  const proxy = {
    stop() {
      server.stop(true);
    }
  };
  return {
    proxy,
    localAddress: `127.0.0.1:${port}`,
    authEnv: {
      ANTHROPIC_BASE_URL: `http://127.0.0.1:${port}`,
      ANTHROPIC_AUTH_NONCE: nonce
    }
  };
}

// src/ssh/SSHProbe.ts
init_debug();
var PROBE_TIMEOUT_MS = 15000;

class SSHProbeError extends Error {
  constructor(message) {
    super(message);
    this.name = "SSHProbeError";
  }
}
async function probeRemote(host, onProgress) {
  onProgress?.("Probing remote host\u2026");
  const proc = Bun.spawn([
    "ssh",
    "-o",
    "BatchMode=yes",
    "-o",
    "ConnectTimeout=10",
    host,
    'MIMO_BIN=$(test -x "$HOME/.local/bin/mimo" && echo "$HOME/.local/bin/mimo" || command -v mimo 2>/dev/null); echo "$MIMO_BIN"; $MIMO_BIN --version 2>/dev/null; uname -sm; pwd'
  ], { stdin: "ignore", stdout: "pipe", stderr: "pipe" });
  const result = await Promise.race([
    proc.exited,
    new Promise((_, reject) => setTimeout(() => reject(new SSHProbeError(`SSH probe timed out after ${PROBE_TIMEOUT_MS / 1000}s`)), PROBE_TIMEOUT_MS))
  ]);
  const stdout = await new Response(proc.stdout).text();
  const stderr = await new Response(proc.stderr).text();
  if (result !== 0) {
    const detail = stderr.trim() || `exit code ${result}`;
    throw new SSHProbeError(`SSH probe failed: ${detail}`);
  }
  const lines = stdout.split(`
`).map((l) => l.trim()).filter(Boolean);
  logForDebugging(`[SSHProbe] raw lines: ${JSON.stringify(lines)}`);
  const unameIdx = lines.findIndex((l) => /^(Linux|Darwin)\s/.test(l));
  if (unameIdx === -1) {
    throw new SSHProbeError("Could not detect remote platform (uname output missing)");
  }
  const binaryPath = unameIdx >= 2 ? lines[unameIdx - 2] || null : null;
  const versionLine = unameIdx >= 1 ? lines[unameIdx - 1] || null : null;
  const remoteVersion = versionLine && /^\d+\.\d+/.test(versionLine) ? versionLine : null;
  const hasBinary = binaryPath !== null && binaryPath.startsWith("/");
  const defaultCwd = lines[unameIdx + 1] || "/";
  const [osName, arch] = lines[unameIdx].split(/\s+/);
  const remotePlatform = osName === "Darwin" ? "darwin" : "linux";
  const remoteArch = arch === "aarch64" || arch === "arm64" ? "arm64" : "x64";
  onProgress?.(`Detected ${remotePlatform}/${remoteArch}`);
  return {
    hasBinary: hasBinary && remoteVersion !== null,
    remoteVersion,
    remotePlatform,
    remoteArch,
    defaultCwd,
    binaryPath: hasBinary ? binaryPath : null
  };
}

// src/ssh/SSHDeploy.ts
init_debug();
import { existsSync } from "fs";
import { resolve } from "path";
var SSH_TIMEOUT_MS = 60000;
var REMOTE_BIN_DIR = "~/.local/bin";
var REMOTE_CLI_FILE = "mimo-code-cli.js";
var REMOTE_WRAPPER = "claude";
async function runSshCommand(host, command, timeoutMs = SSH_TIMEOUT_MS) {
  const proc = Bun.spawn(["ssh", "-o", "ConnectTimeout=10", host, command], {
    stdout: "pipe",
    stderr: "pipe"
  });
  const timer = setTimeout(() => proc.kill(), timeoutMs);
  try {
    const [stdout, stderr] = await Promise.all([
      new Response(proc.stdout).text(),
      new Response(proc.stderr).text()
    ]);
    const exitCode = await proc.exited;
    return { stdout: stdout.trim(), stderr: stderr.trim(), exitCode };
  } finally {
    clearTimeout(timer);
  }
}
function findLocalBinary() {
  const projectRoot = resolve(import.meta.dir, "../..");
  const distPath = resolve(projectRoot, "dist/cli.js");
  if (existsSync(distPath))
    return distPath;
  const devPath = resolve(projectRoot, "src/entrypoints/cli.tsx");
  if (existsSync(devPath))
    return devPath;
  throw new Error("Cannot find local CLI binary to deploy. Run `bun run build` first.");
}
async function deployBinary(options) {
  const { host, remotePlatform, remoteArch, localVersion, onProgress } = options;
  if (remotePlatform !== "linux" && remotePlatform !== "darwin") {
    throw new Error(`Remote platform "${remotePlatform}" is not supported. Only linux and darwin are supported.`);
  }
  logForDebugging(`[SSHDeploy] deploying to ${host} (${remotePlatform}/${remoteArch}, v${localVersion})`);
  const localBinary = findLocalBinary();
  logForDebugging(`[SSHDeploy] local binary: ${localBinary}`);
  onProgress?.("Creating remote directory...");
  const mkdirResult = await runSshCommand(host, `mkdir -p ${REMOTE_BIN_DIR}`);
  if (mkdirResult.exitCode !== 0) {
    throw new Error(`Failed to create remote directory: ${mkdirResult.stderr}`);
  }
  onProgress?.("Uploading binary...");
  const remotePath = `${REMOTE_BIN_DIR}/${REMOTE_CLI_FILE}`;
  const scpProc = Bun.spawn(["scp", "-o", "ConnectTimeout=10", localBinary, `${host}:${remotePath}`], { stdout: "pipe", stderr: "pipe" });
  const scpTimer = setTimeout(() => scpProc.kill(), SSH_TIMEOUT_MS);
  const scpStderr = await new Response(scpProc.stderr).text();
  const scpExit = await scpProc.exited;
  clearTimeout(scpTimer);
  if (scpExit !== 0) {
    throw new Error(`SCP upload failed (exit ${scpExit}): ${scpStderr.trim()}`);
  }
  onProgress?.("Installing wrapper script...");
  const wrapperScript = [
    `cat > ${REMOTE_BIN_DIR}/${REMOTE_WRAPPER} << 'WRAPPER'`,
    "#!/bin/sh",
    `exec bun ${REMOTE_BIN_DIR}/${REMOTE_CLI_FILE} "$@"`,
    "WRAPPER",
    `chmod +x ${REMOTE_BIN_DIR}/${REMOTE_WRAPPER}`
  ].join(`
`);
  const wrapperResult = await runSshCommand(host, wrapperScript);
  if (wrapperResult.exitCode !== 0) {
    throw new Error(`Failed to install wrapper script: ${wrapperResult.stderr}`);
  }
  onProgress?.("Verifying installation...");
  const verifyResult = await runSshCommand(host, `${REMOTE_BIN_DIR}/${REMOTE_WRAPPER} --version`);
  if (verifyResult.exitCode !== 0) {
    throw new Error(`Binary deployed but verification failed (exit ${verifyResult.exitCode}): ${verifyResult.stderr}`);
  }
  logForDebugging(`[SSHDeploy] deployed successfully, remote version: ${verifyResult.stdout}`);
  onProgress?.(`Deployed v${verifyResult.stdout}`);
  return `${REMOTE_BIN_DIR}/${REMOTE_WRAPPER}`;
}

// src/ssh/createSSHSession.ts
init_cliLaunch();
init_debug();
init_slowOperations();
import { randomUUID as randomUUID2 } from "crypto";
var INIT_TIMEOUT_MS = 30000;
var STDERR_TAIL_LINES = 20;

class SSHSessionError extends Error {
  constructor(message) {
    super(message);
    this.name = "SSHSessionError";
  }
}
async function createSSHSession(config, callbacks) {
  const { host, localVersion, extraCliArgs, remoteBin } = config;
  const onProgress = callbacks?.onProgress;
  let remoteBinaryPath;
  let defaultCwd = "/";
  if (remoteBin) {
    onProgress?.("Using custom remote binary, skipping probe/deploy\u2026");
    remoteBinaryPath = remoteBin;
    logForDebugging(`[SSH] custom remoteBin: ${remoteBin}`);
    try {
      const pwdProc = Bun.spawn(["ssh", "-o", "BatchMode=yes", "-o", "ConnectTimeout=5", host, "pwd"], {
        stdin: "ignore",
        stdout: "pipe",
        stderr: "ignore"
      });
      await pwdProc.exited;
      const pwd = (await new Response(pwdProc.stdout).text()).trim();
      if (pwd.startsWith("/"))
        defaultCwd = pwd;
    } catch {}
  } else {
    const probe = await probeRemote(host, onProgress);
    logForDebugging(`[SSH] probe result: ${JSON.stringify(probe)}`);
    defaultCwd = probe.defaultCwd;
    remoteBinaryPath = probe.binaryPath ?? "~/.local/bin/mimo";
    if (!probe.hasBinary || probe.remoteVersion !== localVersion) {
      onProgress?.(probe.hasBinary ? `Updating remote binary (${probe.remoteVersion} \u2192 ${localVersion})\u2026` : "Deploying binary to remote\u2026");
      remoteBinaryPath = await deployBinary({
        host,
        remotePlatform: probe.remotePlatform,
        remoteArch: probe.remoteArch,
        localVersion,
        onProgress
      });
    }
  }
  const { proxy, localAddress, authEnv } = await createAuthProxy();
  logForDebugging(`[SSH] auth proxy listening on ${localAddress}`);
  const remoteSocketId = randomUUID2().slice(0, 8);
  const isWindows2 = process.platform === "win32";
  const remoteCli = [];
  for (const [k, v] of Object.entries(authEnv)) {
    remoteCli.push(`${k}=${v}`);
  }
  remoteCli.push(remoteBinaryPath, "--output-format", "stream-json", "--input-format", "stream-json", "--verbose", "-p");
  if (config.cwd)
    remoteCli.push("--cwd", config.cwd);
  if (config.permissionMode)
    remoteCli.push("--permission-mode", config.permissionMode);
  if (config.dangerouslySkipPermissions)
    remoteCli.push("--dangerously-skip-permissions");
  remoteCli.push(...extraCliArgs);
  const sshArgs = ["ssh"];
  if (!isWindows2) {
    const remoteSocket = `/tmp/claude-ssh-auth-${remoteSocketId}.sock`;
    sshArgs.push("-R", `${remoteSocket}:${localAddress}`);
    sshArgs.push("-o", "StreamLocalBindUnlink=yes");
    const idx = remoteCli.indexOf(`ANTHROPIC_AUTH_SOCKET=${authEnv.ANTHROPIC_AUTH_SOCKET}`);
    if (idx !== -1) {
      remoteCli[idx] = `ANTHROPIC_AUTH_SOCKET=${remoteSocket}`;
    }
  } else {
    const localPort = localAddress.split(":")[1];
    const remotePort = 1e4 + Math.floor(Math.random() * 50000);
    sshArgs.push("-R", `${remotePort}:127.0.0.1:${localPort}`);
    const baseIdx = remoteCli.findIndex((s) => s.startsWith("ANTHROPIC_BASE_URL="));
    if (baseIdx !== -1) {
      remoteCli[baseIdx] = `ANTHROPIC_BASE_URL=http://127.0.0.1:${remotePort}`;
    }
  }
  sshArgs.push(host, remoteCli.join(" "));
  onProgress?.("Starting remote session\u2026");
  logForDebugging(`[SSH] spawning: ${sshArgs.join(" ")}`);
  let proc;
  try {
    proc = Bun.spawn(sshArgs, {
      stdin: "pipe",
      stdout: "pipe",
      stderr: "pipe"
    });
  } catch (err) {
    proxy.stop();
    throw new SSHSessionError(`Failed to spawn SSH process: ${err instanceof Error ? err.message : String(err)}`);
  }
  const stderrChunks = [];
  collectStderr(proc, stderrChunks);
  let remoteCwd;
  if (remoteBin) {
    const earlyExit = await Promise.race([
      proc.exited.then((code) => code),
      new Promise((r) => setTimeout(() => r(null), 3000))
    ]);
    if (earlyExit !== null) {
      proxy.stop();
      const tail = stderrChunks.join("").trim();
      throw new SSHSessionError(`Remote process exited immediately (code ${earlyExit})${tail ? `: ${tail}` : ""}`);
    }
    remoteCwd = config.cwd || defaultCwd || "/";
  } else {
    try {
      remoteCwd = await waitForInit(proc, config.cwd || defaultCwd);
    } catch (err) {
      proxy.stop();
      proc.kill();
      throw err;
    }
  }
  logForDebugging(`[SSH] remote session initialized, remoteCwd=${remoteCwd}`);
  let currentProc = proc;
  const reconnect = async () => {
    logForDebugging("[SSH] reconnect: re-spawning SSH process with --continue");
    const reconnectArgs = [...sshArgs];
    const cmdIdx = reconnectArgs.length - 1;
    const existingCmd = reconnectArgs[cmdIdx];
    if (!existingCmd.includes("--continue")) {
      reconnectArgs[cmdIdx] = existingCmd.replace(/ -p(?:\s|$)/, " -p --continue ");
    }
    const newProc = Bun.spawn(reconnectArgs, {
      stdin: "pipe",
      stdout: "pipe",
      stderr: "pipe"
    });
    const newStderrChunks = [];
    collectStderr(newProc, newStderrChunks);
    await waitForInit(newProc, remoteCwd);
    currentProc = newProc;
    stderrChunks.length = 0;
    stderrChunks.push(...newStderrChunks);
    return newProc;
  };
  return {
    remoteCwd,
    get proc() {
      return currentProc;
    },
    proxy,
    createManager(options) {
      return new SSHSessionManagerImpl(currentProc, {
        ...options,
        reconnect
      });
    },
    getStderrTail() {
      return stderrChunks.slice(-STDERR_TAIL_LINES).join("");
    }
  };
}
async function createLocalSSHSession(config) {
  const { proxy, authEnv } = await createAuthProxy();
  const cliArgs = [
    "--output-format",
    "stream-json",
    "--input-format",
    "stream-json",
    "-p"
  ];
  if (config.cwd) {
    cliArgs.push("--cwd", config.cwd);
  }
  if (config.permissionMode) {
    cliArgs.push("--permission-mode", config.permissionMode);
  }
  if (config.dangerouslySkipPermissions) {
    cliArgs.push("--dangerously-skip-permissions");
  }
  const spec = buildCliLaunch(cliArgs);
  let proc;
  try {
    proc = Bun.spawn([spec.execPath, ...spec.args], {
      stdin: "pipe",
      stdout: "pipe",
      stderr: "pipe",
      env: { ...spec.env, ...authEnv }
    });
  } catch (err) {
    proxy.stop();
    throw new SSHSessionError(`Failed to spawn local CLI process: ${err instanceof Error ? err.message : String(err)}`);
  }
  logForDebugging("[SSH] local session spawned, waiting for init message...");
  const stderrChunks = [];
  collectStderr(proc, stderrChunks);
  let remoteCwd;
  try {
    remoteCwd = await waitForInit(proc, config.cwd);
  } catch (err) {
    proxy.stop();
    proc.kill();
    throw err;
  }
  logForDebugging(`[SSH] local session initialized, remoteCwd=${remoteCwd}`);
  let currentProc = proc;
  const reconnect = async () => {
    logForDebugging("[SSH] local reconnect: re-spawning CLI with --continue");
    const reconnectCliArgs = [...cliArgs];
    if (!reconnectCliArgs.includes("--continue")) {
      reconnectCliArgs.push("--continue");
    }
    const reconnectSpec = buildCliLaunch(reconnectCliArgs);
    const newProc = Bun.spawn([reconnectSpec.execPath, ...reconnectSpec.args], {
      stdin: "pipe",
      stdout: "pipe",
      stderr: "pipe",
      env: { ...reconnectSpec.env, ...authEnv }
    });
    const newStderrChunks = [];
    collectStderr(newProc, newStderrChunks);
    await waitForInit(newProc, remoteCwd);
    currentProc = newProc;
    stderrChunks.length = 0;
    stderrChunks.push(...newStderrChunks);
    return newProc;
  };
  return {
    remoteCwd,
    get proc() {
      return currentProc;
    },
    proxy,
    createManager(options) {
      return new SSHSessionManagerImpl(currentProc, {
        ...options,
        reconnect
      });
    },
    getStderrTail() {
      return stderrChunks.slice(-STDERR_TAIL_LINES).join("");
    }
  };
}
async function waitForInit(proc, fallbackCwd) {
  const stdout = proc.stdout;
  if (!stdout) {
    throw new SSHSessionError("Child process stdout is not readable");
  }
  const reader = stdout.getReader();
  const decoder = new TextDecoder;
  let buffer = "";
  const deadline = Date.now() + INIT_TIMEOUT_MS;
  try {
    while (Date.now() < deadline) {
      const remaining = deadline - Date.now();
      const result = await Promise.race([
        reader.read(),
        new Promise((_, reject) => setTimeout(() => reject(new SSHSessionError("Remote CLI did not initialize within 30 seconds. Check SSH connectivity and remote binary.")), remaining))
      ]);
      if (result.done) {
        throw new SSHSessionError("Child process exited before sending init message");
      }
      buffer += decoder.decode(result.value, { stream: true });
      const lines = buffer.split(`
`);
      buffer = lines.pop() ?? "";
      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed)
          continue;
        try {
          const msg = jsonParse(trimmed);
          if (msg.type === "system" && msg.subtype === "init") {
            reader.releaseLock();
            return msg.cwd || fallbackCwd || process.cwd();
          }
        } catch {}
      }
    }
  } catch (err) {
    reader.releaseLock();
    throw err instanceof SSHSessionError ? err : new SSHSessionError(`Error reading init message: ${err instanceof Error ? err.message : String(err)}`);
  }
  reader.releaseLock();
  throw new SSHSessionError("Remote CLI did not initialize within 30 seconds. Check SSH connectivity and remote binary.");
}
function collectStderr(proc, chunks) {
  const stderr = proc.stderr;
  if (!stderr)
    return;
  const reader = stderr.getReader();
  const decoder = new TextDecoder;
  (async () => {
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done)
          break;
        chunks.push(decoder.decode(value, { stream: true }));
        if (chunks.length > STDERR_TAIL_LINES * 2) {
          chunks.splice(0, chunks.length - STDERR_TAIL_LINES);
        }
      }
    } catch {}
  })();
}
export {
  createSSHSession,
  createLocalSSHSession,
  SSHSessionError
};
