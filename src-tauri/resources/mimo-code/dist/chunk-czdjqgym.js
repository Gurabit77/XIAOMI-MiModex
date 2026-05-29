// @bun
import {
  init_ListItem
} from "./chunk-gpajfqce.js";
import {
  buildCliLaunch,
  init_cliLaunch,
  spawnCli
} from "./chunk-a9gy4bpg.js";
import {
  init_Dialog
} from "./chunk-910z34p6.js";
import {
  init_overlayContext,
  useRegisterOverlay
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
import {
  getBridgeDisabledReason,
  init_bridgeEnabled
} from "./chunk-ybaawhyf.js";
import {
  BRIDGE_LOGIN_INSTRUCTION,
  init_types
} from "./chunk-bhdt6k7w.js";
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
import {
  init_useKeybinding
} from "./chunk-dsnwry8r.js";
import"./chunk-ps49ymvj.js";
import"./chunk-t4kcvmes.js";
import"./chunk-tas8sqfx.js";
import"./chunk-kqqj7b7y.js";
import"./chunk-edqtm6y0.js";
import"./chunk-jakzh3ae.js";
import"./chunk-wf3yck87.js";
import"./chunk-1r0yky0f.js";
import {
  getBridgeAccessToken,
  init_bridgeConfig
} from "./chunk-jtnkamme.js";
import"./chunk-92f9twfz.js";
import"./chunk-6dj3cf9s.js";
import"./chunk-dn7vyq4j.js";
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
import {
  Dialog,
  ListItem,
  ThemedBox_default,
  ThemedText,
  init_src,
  useKeybindings
} from "./chunk-er1s76c9.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "./chunk-b5wxetbv.js";
import"./chunk-f2mhrmww.js";
import"./chunk-0vkfrmqm.js";
import"./chunk-0xjaqda8.js";
import"./chunk-c84gr0s2.js";
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
  errorMessage,
  init_errors
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
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/commands/remoteControlServer/remoteControlServer.tsx
import { resolve } from "path";
function RemoteControlServer({ onDone }) {
  const [status, setStatus] = import_react.useState(daemonStatus);
  const [error, setError] = import_react.useState(null);
  import_react.useEffect(() => {
    if (daemonProcess && !daemonProcess.killed) {
      setStatus("running");
      return;
    }
    let cancelled = false;
    (async () => {
      const checkError = await checkPrerequisites();
      if (cancelled)
        return;
      if (checkError) {
        onDone(checkError, { display: "system" });
        return;
      }
      setStatus("starting");
      try {
        startDaemon();
        if (!cancelled) {
          setStatus("running");
          daemonStatus = "running";
          onDone("Remote Control Server started. Use /remote-control-server to manage.", { display: "system" });
        }
      } catch (err) {
        if (!cancelled) {
          const msg = errorMessage(err);
          setStatus("error");
          setError(msg);
          daemonStatus = "error";
          onDone(`Remote Control Server failed to start: ${msg}`, {
            display: "system"
          });
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);
  if (status === "running" && daemonProcess && !daemonProcess.killed) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ServerManagementDialog, {
      onDone
    }, undefined, false, undefined, this);
  }
  if (status === "error" && error) {
    return null;
  }
  return null;
}
function ServerManagementDialog({ onDone }) {
  useRegisterOverlay("remote-control-server-dialog");
  const [focusIndex, setFocusIndex] = import_react.useState(2);
  const logPreview = daemonLogs.slice(-5);
  function handleStop() {
    stopDaemon();
    onDone("Remote Control Server stopped.", { display: "system" });
  }
  function handleRestart() {
    stopDaemon();
    try {
      startDaemon();
      onDone("Remote Control Server restarted.", { display: "system" });
    } catch (err) {
      onDone(`Failed to restart: ${errorMessage(err)}`, { display: "system" });
    }
  }
  function handleContinue() {
    onDone(undefined, { display: "skip" });
  }
  const ITEM_COUNT = 3;
  useKeybindings({
    "select:next": () => setFocusIndex((i) => (i + 1) % ITEM_COUNT),
    "select:previous": () => setFocusIndex((i) => (i - 1 + ITEM_COUNT) % ITEM_COUNT),
    "select:accept": () => {
      if (focusIndex === 0) {
        handleStop();
      } else if (focusIndex === 1) {
        handleRestart();
      } else {
        handleContinue();
      }
    }
  }, { context: "Select" });
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Dialog, {
    title: "Remote Control Server",
    onCancel: handleContinue,
    hideInputGuide: true,
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      gap: 1,
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: [
            "Remote Control Server is",
            " ",
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              bold: true,
              color: "success",
              children: "running"
            }, undefined, false, undefined, this),
            daemonProcess ? ` (PID: ${daemonProcess.pid})` : ""
          ]
        }, undefined, true, undefined, this),
        logPreview.length > 0 && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
          flexDirection: "column",
          children: [
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor: true,
              children: "Recent logs:"
            }, undefined, false, undefined, this),
            logPreview.map((line, i) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor: true,
              children: line
            }, i, false, undefined, this))
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
          flexDirection: "column",
          children: [
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ListItem, {
              isFocused: focusIndex === 0,
              children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                children: "Stop server"
              }, undefined, false, undefined, this)
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ListItem, {
              isFocused: focusIndex === 1,
              children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                children: "Restart server"
              }, undefined, false, undefined, this)
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ListItem, {
              isFocused: focusIndex === 2,
              children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                children: "Continue"
              }, undefined, false, undefined, this)
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          dimColor: true,
          children: "Enter to select \xB7 Esc to continue"
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
async function checkPrerequisites() {
  const disabledReason = await getBridgeDisabledReason();
  if (disabledReason) {
    return disabledReason;
  }
  if (!getBridgeAccessToken()) {
    return BRIDGE_LOGIN_INSTRUCTION;
  }
  return null;
}
function startDaemon() {
  const dir = resolve(".");
  const launch = buildCliLaunch(["daemon", "start", `--dir=${dir}`]);
  const child = spawnCli(launch, {
    cwd: dir,
    stdio: ["ignore", "pipe", "pipe"],
    detached: false
  });
  daemonProcess = child;
  daemonLogs = [];
  child.stdout?.on("data", (data) => {
    const lines = data.toString().trimEnd().split(`
`);
    for (const line of lines) {
      daemonLogs.push(line);
      if (daemonLogs.length > MAX_LOG_LINES) {
        daemonLogs.shift();
      }
    }
  });
  child.stderr?.on("data", (data) => {
    const lines = data.toString().trimEnd().split(`
`);
    for (const line of lines) {
      daemonLogs.push(`[err] ${line}`);
      if (daemonLogs.length > MAX_LOG_LINES) {
        daemonLogs.shift();
      }
    }
  });
  child.on("exit", (code, signal) => {
    daemonProcess = null;
    daemonStatus = "stopped";
    daemonLogs.push(`[daemon] exited (code=${code ?? "unknown"}, signal=${signal})`);
  });
  child.on("error", (err) => {
    daemonProcess = null;
    daemonStatus = "error";
    daemonLogs.push(`[daemon] error: ${err.message}`);
  });
}
function stopDaemon() {
  if (daemonProcess && !daemonProcess.killed) {
    daemonProcess.kill("SIGTERM");
    const pid = daemonProcess.pid;
    setTimeout(() => {
      try {
        if (pid)
          process.kill(pid, 0);
        if (daemonProcess && !daemonProcess.killed) {
          daemonProcess.kill("SIGKILL");
        }
      } catch {}
    }, 1e4);
  }
  daemonProcess = null;
  daemonStatus = "stopped";
}
async function call(onDone, _context, _args) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(RemoteControlServer, {
    onDone
  }, undefined, false, undefined, this);
}
var import_react, jsx_dev_runtime, daemonProcess = null, daemonStatus = "stopped", daemonLogs, MAX_LOG_LINES = 50;
var init_remoteControlServer = __esm(() => {
  init_bridgeEnabled();
  init_bridgeConfig();
  init_types();
  init_Dialog();
  init_ListItem();
  init_overlayContext();
  init_src();
  init_useKeybinding();
  init_cliLaunch();
  init_errors();
  import_react = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
  daemonLogs = [];
});
init_remoteControlServer();

export {
  call
};
