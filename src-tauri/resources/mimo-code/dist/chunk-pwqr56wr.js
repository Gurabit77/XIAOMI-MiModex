// @bun
import {
  AppStateProvider,
  checkOutTeleportedSessionBranch,
  init_AppState,
  init_teleport,
  processMessagesForTeleportResume,
  teleportResumeCodeSession
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
  ThemedBox_default,
  ThemedText,
  init_src,
  useAnimationFrame
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
import {
  figures_default,
  init_figures
} from "./chunk-qajrkk97.js";
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
import"./chunk-3v4d4h0t.js";
import"./chunk-8pn8tvgg.js";
import"./chunk-netzwgv1.js";
import {
  __toESM
} from "./chunk-qp2qdcda.js";

// src/components/TeleportProgress.tsx
init_figures();
init_src();
init_AppState();
init_teleport();
var import_react = __toESM(require_react(), 1);
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var SPINNER_FRAMES = ["\u25D0", "\u25D3", "\u25D1", "\u25D2"];
var STEPS = [
  { key: "validating", label: "Validating session" },
  { key: "fetching_logs", label: "Fetching session logs" },
  { key: "fetching_branch", label: "Getting branch info" },
  { key: "checking_out", label: "Checking out branch" }
];
function TeleportProgress({
  currentStep,
  sessionId
}) {
  const [ref, time] = useAnimationFrame(100);
  const frame = Math.floor(time / 100) % SPINNER_FRAMES.length;
  const currentStepIndex = STEPS.findIndex((s) => s.key === currentStep);
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
    ref,
    flexDirection: "column",
    paddingX: 1,
    paddingY: 1,
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        marginBottom: 1,
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          bold: true,
          color: "claude",
          children: [
            SPINNER_FRAMES[frame],
            " Teleporting session\u2026"
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this),
      sessionId && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        marginBottom: 1,
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          dimColor: true,
          children: sessionId
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        marginLeft: 2,
        children: STEPS.map((step, index) => {
          const isComplete = index < currentStepIndex;
          const isCurrent = index === currentStepIndex;
          const isPending = index > currentStepIndex;
          let icon;
          let color;
          if (isComplete) {
            icon = figures_default.tick;
            color = "green";
          } else if (isCurrent) {
            icon = SPINNER_FRAMES[frame];
            color = "claude";
          } else {
            icon = figures_default.circle;
            color = undefined;
          }
          return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            flexDirection: "row",
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
                width: 2,
                children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                  color,
                  dimColor: isPending,
                  children: icon
                }, undefined, false, undefined, this)
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                dimColor: isPending,
                bold: isCurrent,
                children: step.label
              }, undefined, false, undefined, this)
            ]
          }, step.key, true, undefined, this);
        })
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
async function teleportWithProgress(root, sessionId) {
  let setStep = () => {};
  function TeleportProgressWrapper() {
    const [step, _setStep] = import_react.useState("validating");
    setStep = _setStep;
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(TeleportProgress, {
      currentStep: step,
      sessionId
    }, undefined, false, undefined, this);
  }
  root.render(/* @__PURE__ */ jsx_dev_runtime.jsxDEV(AppStateProvider, {
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(TeleportProgressWrapper, {}, undefined, false, undefined, this)
  }, undefined, false, undefined, this));
  const result = await teleportResumeCodeSession(sessionId, setStep);
  setStep("checking_out");
  const { branchName, branchError } = await checkOutTeleportedSessionBranch(result.branch);
  return {
    messages: processMessagesForTeleportResume(result.log, branchError),
    branchName
  };
}
export {
  teleportWithProgress,
  TeleportProgress
};
