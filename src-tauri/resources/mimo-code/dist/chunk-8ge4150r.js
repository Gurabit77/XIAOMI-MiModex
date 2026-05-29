// @bun
import {
  buildCliLaunch,
  init_cliLaunch,
  spawnCli
} from "./chunk-a9gy4bpg.js";
import {
  init_state,
  queryDaemonStatus,
  removeDaemonState,
  stopDaemonByPid,
  writeDaemonState
} from "./chunk-7dv9n7ge.js";
import"./chunk-akkx6jmm.js";
import"./chunk-xhesahm0.js";
import"./chunk-w5ahy59y.js";
import"./chunk-8tnsngw2.js";
import"./chunk-rpbc3b7k.js";
import"./chunk-fbv4apne.js";
import"./chunk-j5xzpm59.js";
import"./chunk-50dgek10.js";
import"./chunk-d3bk85eq.js";
import"./chunk-cw8rngb2.js";
import"./chunk-hxhwzgnn.js";
import"./chunk-qx8z601m.js";
import"./chunk-cgm6758j.js";
import {
  __esm,
  __require
} from "./chunk-qp2qdcda.js";

// src/daemon/main.ts
import { resolve } from "path";
async function daemonMain(args) {
  const subcommand = args[0] || "status";
  switch (subcommand) {
    case "start":
      await runSupervisor(args.slice(1));
      break;
    case "stop":
      await handleDaemonStop();
      break;
    case "status":
    case "ps":
      await showUnifiedStatus();
      break;
    case "bg": {
      const bg = await import("./chunk-m3zs13mw.js");
      await bg.handleBgStart(args.slice(1));
      break;
    }
    case "attach": {
      const bg = await import("./chunk-m3zs13mw.js");
      await bg.attachHandler(args[1]);
      break;
    }
    case "logs": {
      const bg = await import("./chunk-m3zs13mw.js");
      await bg.logsHandler(args[1]);
      break;
    }
    case "kill": {
      const bg = await import("./chunk-m3zs13mw.js");
      await bg.killHandler(args[1]);
      break;
    }
    case "--help":
    case "-h":
    case "help":
      printHelp();
      break;
    default:
      console.error(`Unknown daemon subcommand: ${subcommand}`);
      printHelp();
      process.exitCode = 1;
  }
}
function printHelp() {
  console.log(`
MiMo Code Daemon \u2014 background process management

USAGE
  claude daemon [subcommand]

SUBCOMMANDS
  status      Show daemon and session status (default)
  start       Start the daemon supervisor
  stop        Stop the daemon
  bg          Start a background session
  attach      Attach to a background session
  logs        Show session logs
  kill        Kill a session
  help        Show this help

REPL
  /daemon [subcommand]    Same commands available in interactive mode

OPTIONS (for start)
  --dir <path>              Working directory (default: current)
  --spawn-mode <mode>       Worker spawn mode: same-dir | worktree (default: same-dir)
  --capacity <N>            Max concurrent sessions per worker (default: 4)
  --permission-mode <mode>  Permission mode for spawned sessions
  --sandbox                 Enable sandbox mode
  --name <name>             Session name
  -h, --help                Show this help
`);
}
async function showUnifiedStatus() {
  const result = queryDaemonStatus();
  console.log("=== Daemon Supervisor ===");
  switch (result.status) {
    case "running": {
      const s = result.state;
      console.log(`  Status:  running`);
      console.log(`  PID:     ${s.pid}`);
      console.log(`  CWD:     ${s.cwd}`);
      console.log(`  Started: ${s.startedAt}`);
      console.log(`  Workers: ${s.workerKinds.join(", ")}`);
      break;
    }
    case "stopped":
      console.log("  Status: stopped");
      break;
    case "stale":
      console.log("  Status: stale (cleaned up)");
      break;
  }
  console.log(`
=== Background Sessions ===`);
  const bg = await import("./chunk-m3zs13mw.js");
  await bg.psHandler([]);
}
async function handleDaemonStop() {
  const result = queryDaemonStatus();
  if (result.status === "stopped") {
    console.log("daemon is not running");
    return;
  }
  if (result.status === "stale") {
    console.log("daemon was stale (cleaned up)");
    return;
  }
  console.log(`stopping daemon (PID: ${result.state.pid})...`);
  const stopped = await stopDaemonByPid();
  if (stopped) {
    console.log("daemon stopped");
  } else {
    console.log("daemon could not be stopped (may have already exited)");
  }
}
function parseSupervisorArgs(args) {
  const result = {};
  for (let i = 0;i < args.length; i++) {
    const arg = args[i];
    if (arg === "--dir" && i + 1 < args.length) {
      result.dir = resolve(args[++i]);
    } else if (arg.startsWith("--dir=")) {
      result.dir = resolve(arg.slice("--dir=".length));
    } else if (arg === "--spawn-mode" && i + 1 < args.length) {
      result.spawnMode = args[++i];
    } else if (arg.startsWith("--spawn-mode=")) {
      result.spawnMode = arg.slice("--spawn-mode=".length);
    } else if (arg === "--capacity" && i + 1 < args.length) {
      result.capacity = args[++i];
    } else if (arg.startsWith("--capacity=")) {
      result.capacity = arg.slice("--capacity=".length);
    } else if (arg === "--permission-mode" && i + 1 < args.length) {
      result.permissionMode = args[++i];
    } else if (arg.startsWith("--permission-mode=")) {
      result.permissionMode = arg.slice("--permission-mode=".length);
    } else if (arg === "--sandbox") {
      result.sandbox = "1";
    } else if (arg === "--name" && i + 1 < args.length) {
      result.name = args[++i];
    } else if (arg.startsWith("--name=")) {
      result.name = arg.slice("--name=".length);
    }
  }
  return result;
}
async function runSupervisor(args) {
  const config = parseSupervisorArgs(args);
  const dir = config.dir || resolve(".");
  console.log(`[daemon] supervisor starting in ${dir}`);
  const workers = [
    {
      kind: "remoteControl",
      process: null,
      backoffMs: BACKOFF_INITIAL_MS,
      failureCount: 0,
      parked: false,
      lastStartTime: 0
    }
  ];
  writeDaemonState({
    pid: process.pid,
    cwd: dir,
    startedAt: new Date().toISOString(),
    workerKinds: workers.map((w) => w.kind),
    lastStatus: "running"
  });
  const controller = new AbortController;
  const shutdown = () => {
    console.log("[daemon] supervisor shutting down...");
    controller.abort();
    removeDaemonState();
    for (const w of workers) {
      if (w.process && !w.process.killed) {
        w.process.kill("SIGTERM");
      }
    }
  };
  process.on("SIGTERM", shutdown);
  process.on("SIGINT", shutdown);
  for (const worker of workers) {
    if (!controller.signal.aborted) {
      spawnWorker(worker, dir, config, controller.signal);
    }
  }
  await new Promise((resolve2) => {
    if (controller.signal.aborted) {
      resolve2();
      return;
    }
    controller.signal.addEventListener("abort", () => resolve2(), { once: true });
  });
  await Promise.all(workers.filter((w) => w.process && !w.process.killed).map((w) => new Promise((resolve2) => {
    if (!w.process) {
      resolve2();
      return;
    }
    w.process.on("exit", () => resolve2());
    setTimeout(() => {
      if (w.process && !w.process.killed) {
        w.process.kill("SIGKILL");
      }
      resolve2();
    }, 30000);
  })));
  console.log("[daemon] supervisor stopped");
}
function spawnWorker(worker, dir, config, signal) {
  if (signal.aborted || worker.parked)
    return;
  worker.lastStartTime = Date.now();
  const env = {
    ...process.env,
    DAEMON_WORKER_DIR: dir,
    DAEMON_WORKER_NAME: config.name,
    DAEMON_WORKER_SPAWN_MODE: config.spawnMode || "same-dir",
    DAEMON_WORKER_CAPACITY: config.capacity || "4",
    DAEMON_WORKER_PERMISSION: config.permissionMode,
    DAEMON_WORKER_SANDBOX: config.sandbox || "0",
    DAEMON_WORKER_CREATE_SESSION: "1",
    CLAUDE_CODE_SESSION_KIND: "daemon-worker"
  };
  console.log(`[daemon] spawning worker '${worker.kind}'`);
  const launch = buildCliLaunch([`--daemon-worker=${worker.kind}`], { env });
  const child = spawnCli(launch, {
    cwd: dir,
    stdio: ["ignore", "pipe", "pipe"]
  });
  worker.process = child;
  child.stdout?.on("data", (data) => {
    const lines = data.toString().trimEnd().split(`
`);
    for (const line of lines) {
      console.log(`  ${line}`);
    }
  });
  child.stderr?.on("data", (data) => {
    const lines = data.toString().trimEnd().split(`
`);
    for (const line of lines) {
      console.error(`  ${line}`);
    }
  });
  child.on("exit", (code, sig) => {
    worker.process = null;
    if (signal.aborted) {
      return;
    }
    if (code === EXIT_CODE_PERMANENT) {
      console.error(`[daemon] worker '${worker.kind}' exited with permanent error \u2014 parking`);
      worker.parked = true;
      return;
    }
    const runDuration = Date.now() - worker.lastStartTime;
    if (runDuration < 1e4) {
      worker.failureCount++;
      if (worker.failureCount >= MAX_RAPID_FAILURES) {
        console.error(`[daemon] worker '${worker.kind}' failed ${worker.failureCount} times rapidly \u2014 parking`);
        worker.parked = true;
        return;
      }
    } else {
      worker.failureCount = 0;
      worker.backoffMs = BACKOFF_INITIAL_MS;
    }
    console.log(`[daemon] worker '${worker.kind}' exited (code=${code}, signal=${sig}), restarting in ${worker.backoffMs}ms`);
    setTimeout(() => {
      if (!signal.aborted && !worker.parked) {
        spawnWorker(worker, dir, config, signal);
      }
    }, worker.backoffMs);
    worker.backoffMs = Math.min(worker.backoffMs * BACKOFF_MULTIPLIER, BACKOFF_CAP_MS);
  });
}
var EXIT_CODE_PERMANENT = 78, BACKOFF_INITIAL_MS = 2000, BACKOFF_CAP_MS = 120000, BACKOFF_MULTIPLIER = 2, MAX_RAPID_FAILURES = 5;
var init_main = __esm(() => {
  init_cliLaunch();
  init_state();
});
init_main();

export {
  daemonMain
};
