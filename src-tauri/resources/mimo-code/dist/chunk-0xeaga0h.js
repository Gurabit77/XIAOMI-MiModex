// @bun
import {
  init_genericProcessUtils,
  isProcessRunning
} from "./chunk-gnw2dwca.js";
import {
  init_slowOperations,
  jsonParse
} from "./chunk-rpbc3b7k.js";
import {
  getClaudeConfigHomeDir,
  init_envUtils
} from "./chunk-hxhwzgnn.js";
import {
  __esm,
  __require
} from "./chunk-qp2qdcda.js";

// src/cli/bg/engines/index.ts
async function selectEngine() {
  if (process.platform === "win32") {
    const { DetachedEngine: DetachedEngine2 } = await import("./chunk-k7v7vmvg.js");
    return new DetachedEngine2;
  }
  const { TmuxEngine } = await import("./chunk-2vpqstgr.js");
  const tmux = new TmuxEngine;
  if (await tmux.available()) {
    return tmux;
  }
  const { DetachedEngine } = await import("./chunk-k7v7vmvg.js");
  return new DetachedEngine;
}
var init_engines = () => {};

// src/cli/bg.ts
import { readdir, readFile, unlink } from "fs/promises";
import { join } from "path";
import { randomUUID } from "crypto";
function getSessionsDir() {
  return join(getClaudeConfigHomeDir(), "sessions");
}
async function listLiveSessions() {
  const dir = getSessionsDir();
  let files;
  try {
    files = await readdir(dir);
  } catch {
    return [];
  }
  const sessions = [];
  for (const file of files) {
    if (!/^\d+\.json$/.test(file))
      continue;
    const pid = parseInt(file.slice(0, -5), 10);
    if (!isProcessRunning(pid)) {
      unlink(join(dir, file)).catch(() => {});
      continue;
    }
    try {
      const raw = await readFile(join(dir, file), "utf-8");
      const entry = jsonParse(raw);
      sessions.push(entry);
    } catch {}
  }
  return sessions;
}
function findSession(sessions, target) {
  const asNum = parseInt(target, 10);
  return sessions.find((s) => s.sessionId === target || s.pid === asNum || s.name && s.name === target);
}
function formatTime(ts) {
  return new Date(ts).toLocaleString();
}
function resolveSessionEngine(session) {
  if (session.engine)
    return session.engine;
  return session.tmuxSessionName ? "tmux" : "detached";
}
async function psHandler(_args) {
  const sessions = await listLiveSessions();
  if (sessions.length === 0) {
    console.log("No active sessions.");
    return;
  }
  console.log(`${sessions.length} active session${sessions.length > 1 ? "s" : ""}:
`);
  for (const s of sessions) {
    const engineType = resolveSessionEngine(s);
    const parts = [
      `  PID: ${s.pid}`,
      `  Kind: ${s.kind}`,
      `  Engine: ${engineType}`,
      `  Session: ${s.sessionId}`,
      `  CWD: ${s.cwd}`
    ];
    if (s.name)
      parts.push(`  Name: ${s.name}`);
    if (s.startedAt)
      parts.push(`  Started: ${formatTime(s.startedAt)}`);
    if (s.status)
      parts.push(`  Status: ${s.status}`);
    if (s.waitingFor)
      parts.push(`  Waiting for: ${s.waitingFor}`);
    if (s.bridgeSessionId)
      parts.push(`  Bridge: ${s.bridgeSessionId}`);
    if (s.tmuxSessionName)
      parts.push(`  Tmux: ${s.tmuxSessionName}`);
    if (s.logPath)
      parts.push(`  Log: ${s.logPath}`);
    console.log(parts.join(`
`));
    console.log();
  }
}
async function logsHandler(target) {
  const sessions = await listLiveSessions();
  if (!target) {
    if (sessions.length === 0) {
      console.log("No active sessions.");
      return;
    }
    if (sessions.length === 1) {
      target = sessions[0].sessionId;
    } else {
      console.log("Multiple sessions active. Specify one:");
      for (const s of sessions) {
        const label = s.name ? `${s.name} (${s.sessionId})` : s.sessionId;
        console.log(`  ${label}  PID=${s.pid}`);
      }
      return;
    }
  }
  const session = findSession(sessions, target);
  if (!session) {
    console.error(`Session not found: ${target}`);
    process.exitCode = 1;
    return;
  }
  if (!session.logPath) {
    console.log(`No log path recorded for session ${session.sessionId}`);
    return;
  }
  try {
    const content = await readFile(session.logPath, "utf-8");
    process.stdout.write(content);
  } catch (e) {
    console.error(`Failed to read log file: ${session.logPath}`);
    console.error(e instanceof Error ? e.message : String(e));
    process.exitCode = 1;
  }
}
async function attachHandler(target) {
  const sessions = await listLiveSessions();
  if (!target) {
    const bgSessions = sessions.filter((s) => s.tmuxSessionName || s.engine === "detached");
    if (bgSessions.length === 0) {
      console.log("No background sessions to attach to. Start one with `claude daemon bg`.");
      return;
    }
    if (bgSessions.length === 1) {
      target = bgSessions[0].sessionId;
    } else {
      console.log("Multiple background sessions. Specify one:");
      for (const s of bgSessions) {
        const label = s.name ? `${s.name} (${s.sessionId})` : s.sessionId;
        const engineType2 = resolveSessionEngine(s);
        console.log(`  ${label}  PID=${s.pid}  engine=${engineType2}`);
      }
      return;
    }
  }
  const session = findSession(sessions, target);
  if (!session) {
    console.error(`Session not found: ${target}`);
    process.exitCode = 1;
    return;
  }
  const engineType = resolveSessionEngine(session);
  try {
    if (engineType === "tmux") {
      const { TmuxEngine } = await import("./chunk-2vpqstgr.js");
      const tmux = new TmuxEngine;
      if (!await tmux.available()) {
        console.error("tmux is no longer available. Cannot attach to tmux session.");
        process.exitCode = 1;
        return;
      }
      await tmux.attach(session);
    } else {
      const { DetachedEngine } = await import("./chunk-k7v7vmvg.js");
      const detached = new DetachedEngine;
      await detached.attach(session);
    }
  } catch (e) {
    console.error(e instanceof Error ? e.message : String(e));
    process.exitCode = 1;
  }
}
async function killHandler(target) {
  const sessions = await listLiveSessions();
  if (!target) {
    if (sessions.length === 0) {
      console.log("No active sessions to kill.");
      return;
    }
    console.log("Specify a session to kill:");
    for (const s of sessions) {
      const label = s.name ? `${s.name} (${s.sessionId})` : s.sessionId;
      console.log(`  ${label}  PID=${s.pid}`);
    }
    return;
  }
  const session = findSession(sessions, target);
  if (!session) {
    console.error(`Session not found: ${target}`);
    process.exitCode = 1;
    return;
  }
  console.log(`Killing session ${session.sessionId} (PID: ${session.pid})...`);
  try {
    process.kill(session.pid, "SIGTERM");
  } catch {
    console.log("Session already exited.");
    return;
  }
  await new Promise((resolve) => setTimeout(resolve, 2000));
  if (isProcessRunning(session.pid)) {
    try {
      process.kill(session.pid, "SIGKILL");
      console.log("Session force-killed.");
    } catch {
      console.log("Session exited during grace period.");
    }
  } else {
    console.log("Session stopped.");
  }
  const pidFile = join(getSessionsDir(), `${session.pid}.json`);
  unlink(pidFile).catch(() => {});
}
async function handleBgStart(args) {
  const engine = await selectEngine();
  const filteredArgs = args.filter((a) => a !== "--bg" && a !== "--background");
  if (!engine.supportsInteractiveInput && !filteredArgs.some((a) => a === "-p" || a === "--print" || a === "--pipe")) {
    console.error(`Error: Background sessions with detached engine require -p/--print flag.
The detached engine has no terminal for interactive input.

Usage:
  claude daemon bg -p "your prompt here"
  echo "prompt" | claude daemon bg --pipe`);
    if (process.platform !== "win32") {
      console.error(`
Alternatively, install tmux for interactive background sessions:
  ${process.platform === "darwin" ? "brew install tmux" : "sudo apt install tmux"}`);
    }
    process.exitCode = 1;
    return;
  }
  const sessionName = `claude-bg-${randomUUID().slice(0, 8)}`;
  const logPath = join(getClaudeConfigHomeDir(), "sessions", "logs", `${sessionName}.log`);
  try {
    const result = await engine.start({
      sessionName,
      args: filteredArgs,
      env: { ...process.env },
      logPath,
      cwd: process.cwd()
    });
    console.log(`Background session started: ${result.sessionName}`);
    console.log(`  Engine: ${result.engineUsed}`);
    console.log(`  Log: ${result.logPath}`);
    console.log();
    console.log(`Use \`claude daemon attach ${result.sessionName}\` to reconnect.`);
    console.log(`Use \`claude daemon status\` to check status.`);
    console.log(`Use \`claude daemon kill ${result.sessionName}\` to stop.`);
  } catch (e) {
    console.error(e instanceof Error ? e.message : String(e));
    process.exitCode = 1;
  }
}
var handleBgFlag;
var init_bg = __esm(() => {
  init_envUtils();
  init_genericProcessUtils();
  init_slowOperations();
  init_engines();
  handleBgFlag = handleBgStart;
});

export { listLiveSessions, findSession, psHandler, logsHandler, attachHandler, killHandler, handleBgStart, handleBgFlag, init_bg };
