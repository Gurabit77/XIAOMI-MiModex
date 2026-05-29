// @bun
import {
  init_registry,
  registerITermBackend
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
  IT2_COMMAND,
  init_detection,
  isInITerm2,
  isIt2CliAvailable
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

// src/utils/swarm/backends/ITermBackend.ts
function acquirePaneCreationLock() {
  let release;
  const newLock = new Promise((resolve) => {
    release = resolve;
  });
  const previousLock = paneCreationLock;
  paneCreationLock = newLock;
  return previousLock.then(() => release);
}
function runIt2(args) {
  return execFileNoThrow(IT2_COMMAND, args);
}
function parseSplitOutput(output) {
  const match = output.match(/Created new pane:\s*(.+)/);
  if (match && match[1]) {
    return match[1].trim();
  }
  return "";
}
function getLeaderSessionId() {
  const itermSessionId = process.env.ITERM_SESSION_ID;
  if (!itermSessionId) {
    return null;
  }
  const colonIndex = itermSessionId.indexOf(":");
  if (colonIndex === -1) {
    return null;
  }
  return itermSessionId.slice(colonIndex + 1);
}

class ITermBackend {
  type = "iterm2";
  displayName = "iTerm2";
  supportsHideShow = false;
  async isAvailable() {
    const inITerm2 = isInITerm2();
    logForDebugging(`[ITermBackend] isAvailable check: inITerm2=${inITerm2}`);
    if (!inITerm2) {
      logForDebugging("[ITermBackend] isAvailable: false (not in iTerm2)");
      return false;
    }
    const it2Available = await isIt2CliAvailable();
    logForDebugging(`[ITermBackend] isAvailable: ${it2Available} (it2 CLI ${it2Available ? "found" : "not found"})`);
    return it2Available;
  }
  async isRunningInside() {
    const result = isInITerm2();
    logForDebugging(`[ITermBackend] isRunningInside: ${result}`);
    return result;
  }
  async createTeammatePaneInSwarmView(name, color) {
    logForDebugging(`[ITermBackend] createTeammatePaneInSwarmView called for ${name} with color ${color}`);
    const releaseLock = await acquirePaneCreationLock();
    try {
      while (true) {
        const isFirstTeammate = !firstPaneUsed;
        logForDebugging(`[ITermBackend] Creating pane: isFirstTeammate=${isFirstTeammate}, existingPanes=${teammateSessionIds.length}`);
        let splitArgs;
        let targetedTeammateId;
        if (isFirstTeammate) {
          const leaderSessionId = getLeaderSessionId();
          if (leaderSessionId) {
            splitArgs = ["session", "split", "-v", "-s", leaderSessionId];
            logForDebugging(`[ITermBackend] First split from leader session: ${leaderSessionId}`);
          } else {
            splitArgs = ["session", "split", "-v"];
            logForDebugging("[ITermBackend] First split from active session (no leader ID)");
          }
        } else {
          targetedTeammateId = teammateSessionIds[teammateSessionIds.length - 1];
          if (targetedTeammateId) {
            splitArgs = ["session", "split", "-s", targetedTeammateId];
            logForDebugging(`[ITermBackend] Subsequent split from teammate session: ${targetedTeammateId}`);
          } else {
            splitArgs = ["session", "split"];
            logForDebugging("[ITermBackend] Subsequent split from active session (no teammate ID)");
          }
        }
        const splitResult = await runIt2(splitArgs);
        if (splitResult.code !== 0) {
          if (targetedTeammateId) {
            const listResult = await runIt2(["session", "list"]);
            if (listResult.code === 0 && !listResult.stdout.includes(targetedTeammateId)) {
              logForDebugging(`[ITermBackend] Split failed targeting dead session ${targetedTeammateId}, pruning and retrying: ${splitResult.stderr}`);
              const idx = teammateSessionIds.indexOf(targetedTeammateId);
              if (idx !== -1) {
                teammateSessionIds.splice(idx, 1);
              }
              if (teammateSessionIds.length === 0) {
                firstPaneUsed = false;
              }
              continue;
            }
          }
          throw new Error(`Failed to create iTerm2 split pane: ${splitResult.stderr}`);
        }
        if (isFirstTeammate) {
          firstPaneUsed = true;
        }
        const paneId = parseSplitOutput(splitResult.stdout);
        if (!paneId) {
          throw new Error(`Failed to parse session ID from split output: ${splitResult.stdout}`);
        }
        logForDebugging(`[ITermBackend] Created teammate pane for ${name}: ${paneId}`);
        teammateSessionIds.push(paneId);
        return { paneId, isFirstTeammate };
      }
    } finally {
      releaseLock();
    }
  }
  async sendCommandToPane(paneId, command, _useExternalSession) {
    const args = paneId ? ["session", "run", "-s", paneId, command] : ["session", "run", command];
    const result = await runIt2(args);
    if (result.code !== 0) {
      throw new Error(`Failed to send command to iTerm2 pane ${paneId}: ${result.stderr}`);
    }
  }
  async setPaneBorderColor(_paneId, _color, _useExternalSession) {}
  async setPaneTitle(_paneId, _name, _color, _useExternalSession) {}
  async enablePaneBorderStatus(_windowTarget, _useExternalSession) {}
  async rebalancePanes(_windowTarget, _hasLeader) {
    logForDebugging("[ITermBackend] Pane rebalancing not implemented for iTerm2");
  }
  async killPane(paneId, _useExternalSession) {
    const result = await runIt2(["session", "close", "-f", "-s", paneId]);
    const idx = teammateSessionIds.indexOf(paneId);
    if (idx !== -1) {
      teammateSessionIds.splice(idx, 1);
    }
    if (teammateSessionIds.length === 0) {
      firstPaneUsed = false;
    }
    return result.code === 0;
  }
  async hidePane(_paneId, _useExternalSession) {
    logForDebugging("[ITermBackend] hidePane not supported in iTerm2");
    return false;
  }
  async showPane(_paneId, _targetWindowOrPane, _useExternalSession) {
    logForDebugging("[ITermBackend] showPane not supported in iTerm2");
    return false;
  }
}
var teammateSessionIds, firstPaneUsed = false, paneCreationLock;
var init_ITermBackend = __esm(() => {
  init_debug();
  init_execFileNoThrow();
  init_detection();
  init_registry();
  teammateSessionIds = [];
  paneCreationLock = Promise.resolve();
  registerITermBackend(ITermBackend);
});
init_ITermBackend();

export {
  ITermBackend
};
