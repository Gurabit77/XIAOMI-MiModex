// @bun
import {
  init_registry,
  registerTmuxBackend
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
  getLeaderPaneId,
  init_detection,
  isInsideTmux,
  isTmuxAvailable
} from "./chunk-dn7vyq4j.js";
import {
  HIDDEN_SESSION_NAME,
  SWARM_SESSION_NAME,
  SWARM_VIEW_WINDOW_NAME,
  TMUX_COMMAND,
  getSwarmSocketName,
  init_constants
} from "./chunk-4jm600zv.js";
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
import {
  count,
  init_array
} from "./chunk-zwarn9h7.js";
import"./chunk-b127reh2.js";
import"./chunk-et54q618.js";
import"./chunk-pe9b769s.js";
import"./chunk-64c1avct.js";
import {
  init_sleep,
  sleep
} from "./chunk-8g5pe1gr.js";
import"./chunk-0rbpfkda.js";
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
import {
  init_log,
  logError
} from "./chunk-w5ahy59y.js";
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

// src/utils/swarm/backends/TmuxBackend.ts
function waitForPaneShellReady() {
  return sleep(PANE_SHELL_INIT_DELAY_MS);
}
function acquirePaneCreationLock() {
  let release;
  const newLock = new Promise((resolve) => {
    release = resolve;
  });
  const previousLock = paneCreationLock;
  paneCreationLock = newLock;
  return previousLock.then(() => release);
}
function getTmuxColorName(color) {
  const tmuxColors = {
    red: "red",
    blue: "blue",
    green: "green",
    yellow: "yellow",
    purple: "magenta",
    orange: "colour208",
    pink: "colour205",
    cyan: "cyan"
  };
  return tmuxColors[color];
}
function runTmuxInUserSession(args) {
  return execFileNoThrow(TMUX_COMMAND, args);
}
function runTmuxInSwarm(args) {
  return execFileNoThrow(TMUX_COMMAND, ["-L", getSwarmSocketName(), ...args]);
}

class TmuxBackend {
  type = "tmux";
  displayName = "tmux";
  supportsHideShow = true;
  async isAvailable() {
    return isTmuxAvailable();
  }
  async isRunningInside() {
    return isInsideTmux();
  }
  async createTeammatePaneInSwarmView(name, color) {
    const releaseLock = await acquirePaneCreationLock();
    try {
      const insideTmux = await this.isRunningInside();
      if (insideTmux) {
        return await this.createTeammatePaneWithLeader(name, color);
      }
      return await this.createTeammatePaneExternal(name, color);
    } finally {
      releaseLock();
    }
  }
  async createTeammateWindowInSwarmView(name, color) {
    const windowName = `teammate-${name.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase()}`;
    const { windowTarget } = await this.createExternalSwarmSession();
    const result = await runTmuxInSwarm([
      "new-window",
      "-t",
      SWARM_SESSION_NAME,
      "-n",
      windowName,
      "-P",
      "-F",
      "#{pane_id}"
    ]);
    if (result.code !== 0) {
      throw new Error(`Failed to create tmux window: ${result.stderr || "Unknown error"}`);
    }
    const paneId = result.stdout.trim();
    await this.setPaneTitle(paneId, name, color, true);
    await this.setPaneBorderColor(paneId, color, true);
    return { paneId, isFirstTeammate: false, windowName };
  }
  async sendCommandToPane(paneId, command, useExternalSession = false) {
    const runTmux = useExternalSession ? runTmuxInSwarm : runTmuxInUserSession;
    const result = await runTmux(["send-keys", "-t", paneId, command, "Enter"]);
    if (result.code !== 0) {
      throw new Error(`Failed to send command to pane ${paneId}: ${result.stderr}`);
    }
  }
  async setPaneBorderColor(paneId, color, useExternalSession = false) {
    const tmuxColor = getTmuxColorName(color);
    const runTmux = useExternalSession ? runTmuxInSwarm : runTmuxInUserSession;
    await runTmux([
      "select-pane",
      "-t",
      paneId,
      "-P",
      `bg=default,fg=${tmuxColor}`
    ]);
    await runTmux([
      "set-option",
      "-p",
      "-t",
      paneId,
      "pane-border-style",
      `fg=${tmuxColor}`
    ]);
    await runTmux([
      "set-option",
      "-p",
      "-t",
      paneId,
      "pane-active-border-style",
      `fg=${tmuxColor}`
    ]);
  }
  async setPaneTitle(paneId, name, color, useExternalSession = false) {
    const tmuxColor = getTmuxColorName(color);
    const runTmux = useExternalSession ? runTmuxInSwarm : runTmuxInUserSession;
    await runTmux(["select-pane", "-t", paneId, "-T", name]);
    await runTmux([
      "set-option",
      "-p",
      "-t",
      paneId,
      "pane-border-format",
      `#[fg=${tmuxColor},bold] #{pane_title} #[default]`
    ]);
  }
  async enablePaneBorderStatus(windowTarget, useExternalSession = false) {
    const target = windowTarget || await this.getCurrentWindowTarget();
    if (!target) {
      return;
    }
    const runTmux = useExternalSession ? runTmuxInSwarm : runTmuxInUserSession;
    await runTmux([
      "set-option",
      "-w",
      "-t",
      target,
      "pane-border-status",
      "top"
    ]);
  }
  async rebalancePanes(windowTarget, hasLeader) {
    if (hasLeader) {
      await this.rebalancePanesWithLeader(windowTarget);
    } else {
      await this.rebalancePanesTiled(windowTarget);
    }
  }
  async killPane(paneId, useExternalSession = false) {
    const runTmux = useExternalSession ? runTmuxInSwarm : runTmuxInUserSession;
    const result = await runTmux(["kill-pane", "-t", paneId]);
    return result.code === 0;
  }
  async hidePane(paneId, useExternalSession = false) {
    const runTmux = useExternalSession ? runTmuxInSwarm : runTmuxInUserSession;
    await runTmux(["new-session", "-d", "-s", HIDDEN_SESSION_NAME]);
    const result = await runTmux([
      "break-pane",
      "-d",
      "-s",
      paneId,
      "-t",
      `${HIDDEN_SESSION_NAME}:`
    ]);
    if (result.code === 0) {
      logForDebugging(`[TmuxBackend] Hidden pane ${paneId}`);
    } else {
      logForDebugging(`[TmuxBackend] Failed to hide pane ${paneId}: ${result.stderr}`);
    }
    return result.code === 0;
  }
  async showPane(paneId, targetWindowOrPane, useExternalSession = false) {
    const runTmux = useExternalSession ? runTmuxInSwarm : runTmuxInUserSession;
    const result = await runTmux([
      "join-pane",
      "-h",
      "-s",
      paneId,
      "-t",
      targetWindowOrPane
    ]);
    if (result.code !== 0) {
      logForDebugging(`[TmuxBackend] Failed to show pane ${paneId}: ${result.stderr}`);
      return false;
    }
    logForDebugging(`[TmuxBackend] Showed pane ${paneId} in ${targetWindowOrPane}`);
    await runTmux(["select-layout", "-t", targetWindowOrPane, "main-vertical"]);
    const panesResult = await runTmux([
      "list-panes",
      "-t",
      targetWindowOrPane,
      "-F",
      "#{pane_id}"
    ]);
    const panes = panesResult.stdout.trim().split(`
`).filter(Boolean);
    if (panes[0]) {
      await runTmux(["resize-pane", "-t", panes[0], "-x", "30%"]);
    }
    return true;
  }
  async getCurrentPaneId() {
    const leaderPane = getLeaderPaneId();
    if (leaderPane) {
      return leaderPane;
    }
    const result = await execFileNoThrow(TMUX_COMMAND, [
      "display-message",
      "-p",
      "#{pane_id}"
    ]);
    if (result.code !== 0) {
      logForDebugging(`[TmuxBackend] Failed to get current pane ID (exit ${result.code}): ${result.stderr}`);
      return null;
    }
    return result.stdout.trim();
  }
  async getCurrentWindowTarget() {
    if (cachedLeaderWindowTarget) {
      return cachedLeaderWindowTarget;
    }
    const leaderPane = getLeaderPaneId();
    const args = ["display-message"];
    if (leaderPane) {
      args.push("-t", leaderPane);
    }
    args.push("-p", "#{session_name}:#{window_index}");
    const result = await execFileNoThrow(TMUX_COMMAND, args);
    if (result.code !== 0) {
      logForDebugging(`[TmuxBackend] Failed to get current window target (exit ${result.code}): ${result.stderr}`);
      return null;
    }
    cachedLeaderWindowTarget = result.stdout.trim();
    return cachedLeaderWindowTarget;
  }
  async getCurrentWindowPaneCount(windowTarget, useSwarmSocket = false) {
    const target = windowTarget || await this.getCurrentWindowTarget();
    if (!target) {
      return null;
    }
    const args = ["list-panes", "-t", target, "-F", "#{pane_id}"];
    const result = useSwarmSocket ? await runTmuxInSwarm(args) : await runTmuxInUserSession(args);
    if (result.code !== 0) {
      logError(new Error(`[TmuxBackend] Failed to get pane count for ${target} (exit ${result.code}): ${result.stderr}`));
      return null;
    }
    return count(result.stdout.trim().split(`
`), Boolean);
  }
  async hasSessionInSwarm(sessionName) {
    const result = await runTmuxInSwarm(["has-session", "-t", sessionName]);
    return result.code === 0;
  }
  async createExternalSwarmSession() {
    const sessionExists = await this.hasSessionInSwarm(SWARM_SESSION_NAME);
    if (!sessionExists) {
      const result = await runTmuxInSwarm([
        "new-session",
        "-d",
        "-s",
        SWARM_SESSION_NAME,
        "-n",
        SWARM_VIEW_WINDOW_NAME,
        "-P",
        "-F",
        "#{pane_id}"
      ]);
      if (result.code !== 0) {
        throw new Error(`Failed to create swarm session: ${result.stderr || "Unknown error"}`);
      }
      const paneId = result.stdout.trim();
      const windowTarget2 = `${SWARM_SESSION_NAME}:${SWARM_VIEW_WINDOW_NAME}`;
      logForDebugging(`[TmuxBackend] Created external swarm session with window ${windowTarget2}, pane ${paneId}`);
      return { windowTarget: windowTarget2, paneId };
    }
    const listResult = await runTmuxInSwarm([
      "list-windows",
      "-t",
      SWARM_SESSION_NAME,
      "-F",
      "#{window_name}"
    ]);
    const windows = listResult.stdout.trim().split(`
`).filter(Boolean);
    const windowTarget = `${SWARM_SESSION_NAME}:${SWARM_VIEW_WINDOW_NAME}`;
    if (windows.includes(SWARM_VIEW_WINDOW_NAME)) {
      const paneResult = await runTmuxInSwarm([
        "list-panes",
        "-t",
        windowTarget,
        "-F",
        "#{pane_id}"
      ]);
      const panes = paneResult.stdout.trim().split(`
`).filter(Boolean);
      return { windowTarget, paneId: panes[0] || "" };
    }
    const createResult = await runTmuxInSwarm([
      "new-window",
      "-t",
      SWARM_SESSION_NAME,
      "-n",
      SWARM_VIEW_WINDOW_NAME,
      "-P",
      "-F",
      "#{pane_id}"
    ]);
    if (createResult.code !== 0) {
      throw new Error(`Failed to create swarm-view window: ${createResult.stderr || "Unknown error"}`);
    }
    return { windowTarget, paneId: createResult.stdout.trim() };
  }
  async createTeammatePaneWithLeader(teammateName, teammateColor) {
    const currentPaneId = await this.getCurrentPaneId();
    const windowTarget = await this.getCurrentWindowTarget();
    if (!currentPaneId || !windowTarget) {
      throw new Error("Could not determine current tmux pane/window");
    }
    const paneCount = await this.getCurrentWindowPaneCount(windowTarget);
    if (paneCount === null) {
      throw new Error("Could not determine pane count for current window");
    }
    const isFirstTeammate = paneCount === 1;
    let splitResult;
    if (isFirstTeammate) {
      splitResult = await execFileNoThrow(TMUX_COMMAND, [
        "split-window",
        "-t",
        currentPaneId,
        "-h",
        "-l",
        "70%",
        "-P",
        "-F",
        "#{pane_id}"
      ]);
    } else {
      const listResult = await execFileNoThrow(TMUX_COMMAND, [
        "list-panes",
        "-t",
        windowTarget,
        "-F",
        "#{pane_id}"
      ]);
      const panes = listResult.stdout.trim().split(`
`).filter(Boolean);
      const teammatePanes = panes.slice(1);
      const teammateCount = teammatePanes.length;
      const splitVertically = teammateCount % 2 === 1;
      const targetPaneIndex = Math.floor((teammateCount - 1) / 2);
      const targetPane = teammatePanes[targetPaneIndex] || teammatePanes[teammatePanes.length - 1];
      splitResult = await execFileNoThrow(TMUX_COMMAND, [
        "split-window",
        "-t",
        targetPane,
        splitVertically ? "-v" : "-h",
        "-P",
        "-F",
        "#{pane_id}"
      ]);
    }
    if (splitResult.code !== 0) {
      throw new Error(`Failed to create teammate pane: ${splitResult.stderr}`);
    }
    const paneId = splitResult.stdout.trim();
    logForDebugging(`[TmuxBackend] Created teammate pane for ${teammateName}: ${paneId}`);
    await this.setPaneBorderColor(paneId, teammateColor);
    await this.setPaneTitle(paneId, teammateName, teammateColor);
    await this.rebalancePanesWithLeader(windowTarget);
    await waitForPaneShellReady();
    return { paneId, isFirstTeammate };
  }
  async createTeammatePaneExternal(teammateName, teammateColor) {
    const { windowTarget, paneId: firstPaneId } = await this.createExternalSwarmSession();
    const paneCount = await this.getCurrentWindowPaneCount(windowTarget, true);
    if (paneCount === null) {
      throw new Error("Could not determine pane count for swarm window");
    }
    const isFirstTeammate = !firstPaneUsedForExternal && paneCount === 1;
    let paneId;
    if (isFirstTeammate) {
      paneId = firstPaneId;
      firstPaneUsedForExternal = true;
      logForDebugging(`[TmuxBackend] Using initial pane for first teammate ${teammateName}: ${paneId}`);
      await this.enablePaneBorderStatus(windowTarget, true);
    } else {
      const listResult = await runTmuxInSwarm([
        "list-panes",
        "-t",
        windowTarget,
        "-F",
        "#{pane_id}"
      ]);
      const panes = listResult.stdout.trim().split(`
`).filter(Boolean);
      const teammateCount = panes.length;
      const splitVertically = teammateCount % 2 === 1;
      const targetPaneIndex = Math.floor((teammateCount - 1) / 2);
      const targetPane = panes[targetPaneIndex] || panes[panes.length - 1];
      const splitResult = await runTmuxInSwarm([
        "split-window",
        "-t",
        targetPane,
        splitVertically ? "-v" : "-h",
        "-P",
        "-F",
        "#{pane_id}"
      ]);
      if (splitResult.code !== 0) {
        throw new Error(`Failed to create teammate pane: ${splitResult.stderr}`);
      }
      paneId = splitResult.stdout.trim();
      logForDebugging(`[TmuxBackend] Created teammate pane for ${teammateName}: ${paneId}`);
    }
    await this.setPaneBorderColor(paneId, teammateColor, true);
    await this.setPaneTitle(paneId, teammateName, teammateColor, true);
    await this.rebalancePanesTiled(windowTarget);
    await waitForPaneShellReady();
    return { paneId, isFirstTeammate };
  }
  async rebalancePanesWithLeader(windowTarget) {
    const listResult = await runTmuxInUserSession([
      "list-panes",
      "-t",
      windowTarget,
      "-F",
      "#{pane_id}"
    ]);
    const panes = listResult.stdout.trim().split(`
`).filter(Boolean);
    if (panes.length <= 2) {
      return;
    }
    await runTmuxInUserSession([
      "select-layout",
      "-t",
      windowTarget,
      "main-vertical"
    ]);
    const leaderPane = panes[0];
    await runTmuxInUserSession(["resize-pane", "-t", leaderPane, "-x", "30%"]);
    logForDebugging(`[TmuxBackend] Rebalanced ${panes.length - 1} teammate panes with leader`);
  }
  async rebalancePanesTiled(windowTarget) {
    const listResult = await runTmuxInSwarm([
      "list-panes",
      "-t",
      windowTarget,
      "-F",
      "#{pane_id}"
    ]);
    const panes = listResult.stdout.trim().split(`
`).filter(Boolean);
    if (panes.length <= 1) {
      return;
    }
    await runTmuxInSwarm(["select-layout", "-t", windowTarget, "tiled"]);
    logForDebugging(`[TmuxBackend] Rebalanced ${panes.length} teammate panes with tiled layout`);
  }
}
var firstPaneUsedForExternal = false, cachedLeaderWindowTarget = null, paneCreationLock, PANE_SHELL_INIT_DELAY_MS = 200;
var init_TmuxBackend = __esm(() => {
  init_debug();
  init_execFileNoThrow();
  init_log();
  init_array();
  init_sleep();
  init_constants();
  init_detection();
  init_registry();
  paneCreationLock = Promise.resolve();
  registerTmuxBackend(TmuxBackend);
});
init_TmuxBackend();

export {
  TmuxBackend
};
