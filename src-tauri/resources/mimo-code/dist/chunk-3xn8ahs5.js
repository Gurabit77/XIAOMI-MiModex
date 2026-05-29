// @bun
import {
  BridgeHeadlessPermanentError,
  runBridgeHeadless
} from "./chunk-znqtq87a.js";
import"./chunk-ae76ded0.js";
import"./chunk-vhpsr3bm.js";
import"./chunk-hwebfkyh.js";
import"./chunk-zvgyvpya.js";
import"./chunk-a9gy4bpg.js";
import"./chunk-jdgeec04.js";
import"./chunk-ktw919wt.js";
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
import"./chunk-qp2qdcda.js";

// src/daemon/workerRegistry.ts
import { resolve } from "path";
init_auth();
init_errors();
var EXIT_CODE_PERMANENT = 78;
var EXIT_CODE_TRANSIENT = 1;
async function runDaemonWorker(kind) {
  if (!kind) {
    console.error("Error: --daemon-worker requires a worker kind");
    process.exitCode = EXIT_CODE_PERMANENT;
    return;
  }
  switch (kind) {
    case "remoteControl":
      await runRemoteControlWorker();
      break;
    default:
      console.error(`Error: unknown daemon worker kind '${kind}'`);
      process.exitCode = EXIT_CODE_PERMANENT;
  }
}
async function runRemoteControlWorker() {
  const dir = process.env.DAEMON_WORKER_DIR || resolve(".");
  const name = process.env.DAEMON_WORKER_NAME || undefined;
  const spawnMode = process.env.DAEMON_WORKER_SPAWN_MODE || "same-dir";
  const capacity = parseInt(process.env.DAEMON_WORKER_CAPACITY || "4", 10);
  const permissionMode = process.env.DAEMON_WORKER_PERMISSION || undefined;
  const sandbox = process.env.DAEMON_WORKER_SANDBOX === "1";
  const sessionTimeoutMs = process.env.DAEMON_WORKER_TIMEOUT_MS ? parseInt(process.env.DAEMON_WORKER_TIMEOUT_MS, 10) : undefined;
  const createSessionOnStart = process.env.DAEMON_WORKER_CREATE_SESSION !== "0";
  const controller = new AbortController;
  const onSignal = () => controller.abort();
  process.on("SIGTERM", onSignal);
  process.on("SIGINT", onSignal);
  const opts = {
    dir,
    name,
    spawnMode,
    capacity,
    permissionMode,
    sandbox,
    sessionTimeoutMs,
    createSessionOnStart,
    getAccessToken: () => getClaudeAIOAuthTokens()?.accessToken,
    onAuth401: async (_failedToken) => {
      const tokens = getClaudeAIOAuthTokens();
      return !!tokens?.accessToken;
    },
    log: (s) => {
      console.log(`[remoteControl] ${s}`);
    }
  };
  try {
    await runBridgeHeadless(opts, controller.signal);
  } catch (err) {
    if (err instanceof BridgeHeadlessPermanentError) {
      console.error(`[remoteControl] permanent error: ${err.message}`);
      process.exitCode = EXIT_CODE_PERMANENT;
    } else {
      console.error(`[remoteControl] transient error: ${errorMessage(err)}`);
      process.exitCode = EXIT_CODE_TRANSIENT;
    }
  } finally {
    process.off("SIGTERM", onSignal);
    process.off("SIGINT", onSignal);
  }
}
export {
  runDaemonWorker
};
