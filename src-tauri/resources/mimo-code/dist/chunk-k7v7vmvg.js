// @bun
import {
  buildCliLaunch,
  init_cliLaunch,
  spawnCli
} from "./chunk-a9gy4bpg.js";
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
  __esm
} from "./chunk-qp2qdcda.js";

// src/cli/bg/tail.ts
import {
  openSync,
  readSync,
  closeSync,
  statSync,
  watchFile,
  unwatchFile,
  createReadStream
} from "fs";
import { createInterface } from "readline";
async function tailLog(logPath) {
  let position = 0;
  try {
    const stat = statSync(logPath);
    position = stat.size;
    if (position > 0) {
      const stream = createReadStream(logPath, { start: 0, end: position - 1 });
      const rl = createInterface({ input: stream });
      for await (const line of rl) {
        process.stdout.write(line + `
`);
      }
    }
  } catch {}
  console.log(`
[tail] Watching for new output... (Ctrl+C to detach)
`);
  return new Promise((resolve) => {
    const onSignal = () => {
      unwatchFile(logPath);
      process.removeListener("SIGINT", onSignal);
      console.log(`
[tail] Detached from session.`);
      resolve();
    };
    process.on("SIGINT", onSignal);
    watchFile(logPath, { interval: 300 }, () => {
      try {
        const stat = statSync(logPath);
        if (stat.size <= position)
          return;
        const fd = openSync(logPath, "r");
        try {
          const buf = Buffer.alloc(stat.size - position);
          readSync(fd, buf, 0, buf.length, position);
          process.stdout.write(buf);
          position = stat.size;
        } finally {
          closeSync(fd);
        }
      } catch {}
    });
  });
}
var init_tail = () => {};

// src/cli/bg/engines/detached.ts
import { closeSync as closeSync2, mkdirSync, openSync as openSync2 } from "fs";
import { dirname } from "path";

class DetachedEngine {
  name = "detached";
  supportsInteractiveInput = false;
  async available() {
    return true;
  }
  async start(opts) {
    mkdirSync(dirname(opts.logPath), { recursive: true });
    const logFd = openSync2(opts.logPath, "a");
    const launch = buildCliLaunch(opts.args, {
      env: {
        ...opts.env,
        CLAUDE_CODE_SESSION_KIND: "bg",
        CLAUDE_CODE_SESSION_NAME: opts.sessionName,
        CLAUDE_CODE_SESSION_LOG: opts.logPath
      }
    });
    const child = spawnCli(launch, {
      detached: true,
      stdio: ["ignore", logFd, logFd],
      cwd: opts.cwd
    });
    child.unref();
    closeSync2(logFd);
    const pid = child.pid ?? 0;
    return {
      pid,
      sessionName: opts.sessionName,
      logPath: opts.logPath,
      engineUsed: "detached"
    };
  }
  async attach(session) {
    if (!session.logPath) {
      throw new Error(`Session ${session.sessionId} has no log path.`);
    }
    await tailLog(session.logPath);
  }
}
var init_detached = __esm(() => {
  init_cliLaunch();
  init_tail();
});
init_detached();

export {
  DetachedEngine
};
