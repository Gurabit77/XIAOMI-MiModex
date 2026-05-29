// @bun
import {
  init_registry,
  registerWindowsTerminalBackend
} from "./chunk-ktw919wt.js";
import"./chunk-qwtafr2b.js";
import"./chunk-jz6xf3ty.js";
import"./chunk-et824jj8.js";
import"./chunk-var1et7e.js";
import"./chunk-v81kv9zm.js";
import"./chunk-chmfqs2y.js";
import"./chunk-1gfk9pd3.js";
import"./chunk-2gzv8nrw.js";
import"./chunk-ehtwnxpg.js";
import"./chunk-1th1nz5d.js";
import"./chunk-x6pa9me9.js";
import"./chunk-wbtp4zy8.js";
import"./chunk-ypmcesxe.js";
import"./chunk-ybaawhyf.js";
import"./chunk-bhdt6k7w.js";
import"./chunk-cgfdkzhb.js";
import"./chunk-0rstde44.js";
import"./chunk-2cvt1abr.js";
import"./chunk-5ptgeqdf.js";
import"./chunk-1jvg23ym.js";
import"./chunk-akkx6jmm.js";
import"./chunk-7fht54sw.js";
import"./chunk-pfhyp451.js";
import"./chunk-25ctr1k2.js";
import"./chunk-azxwk3qa.js";
import"./chunk-2e52n52z.js";
import"./chunk-dsnwry8r.js";
import"./chunk-ps49ymvj.js";
import"./chunk-t4kcvmes.js";
import"./chunk-tas8sqfx.js";
import"./chunk-kqqj7b7y.js";
import"./chunk-edqtm6y0.js";
import"./chunk-jakzh3ae.js";
import"./chunk-wf3yck87.js";
import"./chunk-1r0yky0f.js";
import"./chunk-jtnkamme.js";
import"./chunk-92f9twfz.js";
import"./chunk-6dj3cf9s.js";
import {
  init_detection,
  isInWindowsTerminal
} from "./chunk-dn7vyq4j.js";
import"./chunk-4jm600zv.js";
import"./chunk-vs4r0kd5.js";
import"./chunk-g57ncwpz.js";
import"./chunk-9pp18zcp.js";
import"./chunk-h1xx834r.js";
import"./chunk-p8zggt02.js";
import"./chunk-6rj8k2tr.js";
import"./chunk-x69b8r8v.js";
import"./chunk-gx4kmdam.js";
import"./chunk-b53tzh92.js";
import"./chunk-gd6w3h9n.js";
import"./chunk-1ghcng4e.js";
import"./chunk-pz9t24tq.js";
import"./chunk-4efha55s.js";
import"./chunk-t7f7dp4k.js";
import"./chunk-zwarn9h7.js";
import"./chunk-b127reh2.js";
import"./chunk-et54q618.js";
import"./chunk-pe9b769s.js";
import"./chunk-64c1avct.js";
import"./chunk-8g5pe1gr.js";
import {
  getPlatform,
  init_platform
} from "./chunk-0rbpfkda.js";
import"./chunk-gnw2dwca.js";
import"./chunk-wbmn1xar.js";
import"./chunk-3c25bcsw.js";
import"./chunk-nw7v8w65.js";
import"./chunk-xhesahm0.js";
import"./chunk-rh5a2rg9.js";
import"./chunk-4cp6193g.js";
import"./chunk-8g747a8x.js";
import"./chunk-d7886r6a.js";
import"./chunk-adnxyg7j.js";
import"./chunk-djs11qd6.js";
import"./chunk-nrv96v1h.js";
import"./chunk-gdqk4ssq.js";
import"./chunk-bwawjerw.js";
import"./chunk-p2816w9z.js";
import"./chunk-v9smspw2.js";
import"./chunk-v1kzp02e.js";
import"./chunk-x5hyyhqf.js";
import"./chunk-crmjpsqe.js";
import"./chunk-er1s76c9.js";
import"./chunk-b5wxetbv.js";
import"./chunk-f2mhrmww.js";
import"./chunk-0vkfrmqm.js";
import"./chunk-0xjaqda8.js";
import"./chunk-c84gr0s2.js";
import"./chunk-t6jhrn34.js";
import"./chunk-95xve7f8.js";
import"./chunk-jdq8jgyg.js";
import {
  execFileNoThrow,
  init_execFileNoThrow
} from "./chunk-qcwbd71h.js";
import"./chunk-dxvkxgnf.js";
import"./chunk-w5ahy59y.js";
import"./chunk-8tnsngw2.js";
import"./chunk-jkh5s8ct.js";
import"./chunk-kwm5bf2m.js";
import"./chunk-5z28bqne.js";
import"./chunk-qajrkk97.js";
import {
  init_debug,
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
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/swarm/backends/WindowsTerminalBackend.ts
import { randomUUID } from "crypto";
import { readFile } from "fs/promises";
import { join } from "path";
import { tmpdir } from "os";
function quotePowerShellString(value) {
  return `'${value.replace(/'/g, "''")}'`;
}
function wrapPowerShellCommand(command, pidFile) {
  const quotedPidFile = quotePowerShellString(pidFile);
  return [
    "$ErrorActionPreference = 'Stop'",
    `Set-Content -LiteralPath ${quotedPidFile} -Value $PID`,
    [
      `try { ${command}; if ($LASTEXITCODE -is [int]) { exit $LASTEXITCODE } }`,
      `catch { Write-Error $_; exit 1 }`,
      `finally { Remove-Item -LiteralPath ${quotedPidFile} -Force -ErrorAction SilentlyContinue }`
    ].join(`
`)
  ].join("; ");
}
function makePidFile(paneId) {
  return join(tmpdir(), `${paneId.replace(/[^a-zA-Z0-9_-]/g, "-")}.pid`);
}

class WindowsTerminalBackend {
  runCommand;
  getPlatformValue;
  type = "windows-terminal";
  displayName = "Windows Terminal";
  supportsHideShow = false;
  panes = new Map;
  constructor(runCommand = execFileNoThrow, getPlatformValue = getPlatform) {
    this.runCommand = runCommand;
    this.getPlatformValue = getPlatformValue;
  }
  async isAvailable() {
    if (this.getPlatformValue() !== "windows") {
      return false;
    }
    if (process.env.WT_SESSION) {
      return true;
    }
    const result = await this.runCommand("where.exe", ["wt.exe"]);
    return result.code === 0;
  }
  async isRunningInside() {
    return this.getPlatformValue() === "windows" && isInWindowsTerminal();
  }
  async createTeammatePaneInSwarmView(name, _color) {
    const paneId = `wt-${randomUUID()}`;
    const isFirstTeammate = this.panes.size === 0;
    this.panes.set(paneId, {
      title: name,
      mode: "pane",
      pidFile: makePidFile(paneId)
    });
    return { paneId, isFirstTeammate };
  }
  async createTeammateWindowInSwarmView(name, _color) {
    const paneId = `wt-${randomUUID()}`;
    const windowName = `teammate-${name.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase()}`;
    this.panes.set(paneId, {
      title: name,
      mode: "window",
      pidFile: makePidFile(paneId)
    });
    return { paneId, isFirstTeammate: false, windowName };
  }
  async sendCommandToPane(paneId, command, _useExternalSession) {
    const pane = this.panes.get(paneId);
    if (!pane) {
      throw new Error(`Unknown Windows Terminal pane id: ${paneId}`);
    }
    const launcher = wrapPowerShellCommand(command, pane.pidFile);
    const encoded = Buffer.from(launcher, "utf16le").toString("base64");
    const args = pane.mode === "window" ? ["-w", "-1", "new-tab", "--title", pane.title] : ["-w", "0", "split-pane", "--vertical", "--title", pane.title];
    const result = await this.runCommand("wt.exe", [
      ...args,
      "powershell.exe",
      "-NoLogo",
      "-NoProfile",
      "-ExecutionPolicy",
      "Bypass",
      "-EncodedCommand",
      encoded
    ]);
    if (result.code !== 0) {
      throw new Error(`Failed to launch Windows Terminal teammate ${paneId}: ${result.stderr}`);
    }
  }
  async setPaneBorderColor(_paneId, _color, _useExternalSession) {}
  async setPaneTitle(_paneId, _name, _color, _useExternalSession) {}
  async enablePaneBorderStatus(_windowTarget, _useExternalSession) {}
  async rebalancePanes(_windowTarget, _hasLeader) {}
  async killPane(paneId, _useExternalSession) {
    const pane = this.panes.get(paneId);
    if (!pane) {
      return false;
    }
    let pid;
    try {
      pid = Number.parseInt((await readFile(pane.pidFile, "utf-8")).trim(), 10);
    } catch {
      this.panes.delete(paneId);
      return false;
    }
    if (!Number.isFinite(pid)) {
      this.panes.delete(paneId);
      return false;
    }
    const result = await this.runCommand("powershell.exe", [
      "-NoLogo",
      "-NoProfile",
      "-Command",
      `Stop-Process -Id ${pid} -Force -ErrorAction Stop`
    ]);
    this.panes.delete(paneId);
    logForDebugging(`[WindowsTerminalBackend] killPane ${paneId} pid=${pid} code=${result.code}`);
    return result.code === 0;
  }
  async hidePane(_paneId, _useExternalSession) {
    return false;
  }
  async showPane(_paneId, _targetWindowOrPane, _useExternalSession) {
    return false;
  }
}
var init_WindowsTerminalBackend = __esm(() => {
  init_debug();
  init_execFileNoThrow();
  init_platform();
  init_detection();
  init_registry();
  registerWindowsTerminalBackend(WindowsTerminalBackend);
});
init_WindowsTerminalBackend();

export {
  WindowsTerminalBackend
};
