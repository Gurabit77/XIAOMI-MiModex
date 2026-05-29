// @bun
import {
  buildCliLaunch,
  init_cliLaunch,
  quoteCliLaunch
} from "./chunk-a9gy4bpg.js";
import"./chunk-akkx6jmm.js";
import"./chunk-xhesahm0.js";
import {
  execFileNoThrow,
  init_execFileNoThrow
} from "./chunk-qcwbd71h.js";
import"./chunk-dxvkxgnf.js";
import"./chunk-w5ahy59y.js";
import"./chunk-8tnsngw2.js";
import"./chunk-5z28bqne.js";
import"./chunk-qajrkk97.js";
import"./chunk-rpbc3b7k.js";
import"./chunk-fbv4apne.js";
import"./chunk-j5xzpm59.js";
import"./chunk-50dgek10.js";
import"./chunk-7wm5s02e.js";
import"./chunk-d3bk85eq.js";
import"./chunk-cw8rngb2.js";
import"./chunk-hxhwzgnn.js";
import"./chunk-qx8z601m.js";
import"./chunk-cgm6758j.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/cli/bg/engines/tmux.ts
import { spawnSync } from "child_process";

class TmuxEngine {
  name = "tmux";
  supportsInteractiveInput = true;
  async available() {
    const { code } = await execFileNoThrow("tmux", ["-V"], { useCwd: false });
    return code === 0;
  }
  async start(opts) {
    const launch = buildCliLaunch(opts.args, {
      env: {
        ...opts.env,
        CLAUDE_CODE_SESSION_KIND: "bg",
        CLAUDE_CODE_SESSION_NAME: opts.sessionName,
        CLAUDE_CODE_SESSION_LOG: opts.logPath,
        CLAUDE_CODE_TMUX_SESSION: opts.sessionName
      }
    });
    const cmd = quoteCliLaunch(launch);
    const result = spawnSync("tmux", ["new-session", "-d", "-s", opts.sessionName, cmd], { stdio: "inherit", env: launch.env });
    if (result.status !== 0) {
      throw new Error("Failed to create tmux session.");
    }
    return {
      pid: 0,
      sessionName: opts.sessionName,
      logPath: opts.logPath,
      engineUsed: "tmux"
    };
  }
  async attach(session) {
    if (!session.tmuxSessionName) {
      throw new Error(`Session ${session.sessionId} has no tmux session name.`);
    }
    const result = spawnSync("tmux", ["attach-session", "-t", session.tmuxSessionName], { stdio: "inherit" });
    if (result.status !== 0) {
      throw new Error(`Failed to attach to tmux session '${session.tmuxSessionName}'.`);
    }
  }
}
function getTmuxInstallHint() {
  if (process.platform === "darwin") {
    return "Install with: brew install tmux";
  }
  if (process.platform === "win32") {
    return "tmux is not natively available on Windows. Consider using WSL.";
  }
  return "Install with: sudo apt install tmux  (or your package manager)";
}
var init_tmux = __esm(() => {
  init_execFileNoThrow();
  init_cliLaunch();
});
init_tmux();

export {
  getTmuxInstallHint,
  TmuxEngine
};
