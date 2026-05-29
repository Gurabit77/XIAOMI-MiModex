// @bun
import {
  getAutonomyCommandText,
  getAutonomyDeepSectionText,
  getAutonomyStatusText,
  init_autonomy
} from "./chunk-3wgzh9g1.js";
import"./chunk-4xf25mbr.js";
import"./chunk-0xeaga0h.js";
import"./chunk-7dv9n7ge.js";
import"./chunk-758qmraw.js";
import {
  init_autonomyFlows,
  init_overlayContext,
  listAutonomyFlows,
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
  Dialog,
  ThemedBox_default,
  ThemedText,
  init_src,
  use_input_default
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
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/commands/autonomyPanel.tsx
function getAutonomyPanelBaseActionCountForTests() {
  return BASE_AUTONOMY_PANEL_ACTION_COUNT;
}
function AutonomyPanel({ onDone }) {
  useRegisterOverlay("autonomy-panel");
  const [selectedIndex, setSelectedIndex] = import_react.useState(0);
  const [flows, setFlows] = import_react.useState([]);
  import_react.useEffect(() => {
    let cancelled = false;
    listAutonomyFlows().then((items) => {
      if (!cancelled)
        setFlows(items.slice(0, 5));
    });
    return () => {
      cancelled = true;
    };
  }, []);
  const actions = import_react.useMemo(() => {
    const base = [
      {
        label: "Overview",
        description: "Show run and flow counts plus the latest automatic activity",
        run: () => getAutonomyStatusText()
      },
      {
        label: "Full deep status",
        description: "Print every local autonomy surface in one diagnostic report",
        run: () => getAutonomyStatusText({ deep: true })
      },
      {
        label: "Auto mode",
        description: "Check whether auto permission mode is available and why",
        run: () => getAutonomyDeepSectionText("auto-mode")
      },
      {
        label: "Runs summary",
        description: "Show queued/running/completed/failed run totals and latest run",
        run: () => getAutonomyDeepSectionText("runs")
      },
      {
        label: "Recent runs",
        description: "List recent autonomy run IDs, triggers, statuses, and prompts",
        run: () => getAutonomyCommandText("runs 10")
      },
      {
        label: "Flows summary",
        description: "Show managed flow totals across queued/running/waiting states",
        run: () => getAutonomyDeepSectionText("flows")
      },
      {
        label: "Recent flows",
        description: "List recent managed flow IDs, status, current step, and goal",
        run: () => getAutonomyCommandText("flows 10")
      },
      {
        label: "Cron",
        description: "Show scheduled autonomy jobs, durability, recurrence, and next run",
        run: () => getAutonomyDeepSectionText("cron")
      },
      {
        label: "Workflow runs",
        description: "Show persisted WorkflowTool runs and their current workflow step",
        run: () => getAutonomyDeepSectionText("workflow-runs")
      },
      {
        label: "Teams",
        description: "Show Agent Teams, teammate backends, activity, and open tasks",
        run: () => getAutonomyDeepSectionText("teams")
      },
      {
        label: "Pipes",
        description: "Show UDS/named-pipe and LAN registry for terminal messaging",
        run: () => getAutonomyDeepSectionText("pipes")
      },
      {
        label: "Runtime",
        description: "Show daemon state and live background or interactive sessions",
        run: () => getAutonomyDeepSectionText("runtime")
      },
      {
        label: "Remote Control",
        description: "Show bridge mode, base URL, token presence, and entitlement note",
        run: () => getAutonomyDeepSectionText("remote-control")
      },
      {
        label: "RemoteTrigger",
        description: "Show recent remote trigger audit records, failures, and latest call",
        run: () => getAutonomyDeepSectionText("remote-trigger")
      }
    ];
    const flowActions = flows.flatMap((flow) => {
      const shortId = flow.flowId.slice(0, 8);
      const items = [
        {
          label: `Flow ${shortId}`,
          description: `${flow.status}: ${flow.goal}`,
          run: () => getAutonomyCommandText(`flow ${flow.flowId}`)
        }
      ];
      if (flow.status === "waiting") {
        items.push({
          label: `Resume ${shortId}`,
          description: flow.currentStep ? `Resume waiting step: ${flow.currentStep}` : "Resume waiting flow",
          run: () => getAutonomyCommandText(`flow resume ${flow.flowId}`, {
            enqueueInMemory: true
          })
        });
      }
      if (flow.status === "queued" || flow.status === "running" || flow.status === "waiting" || flow.status === "blocked") {
        items.push({
          label: `Cancel ${shortId}`,
          description: `Cancel ${flow.status} flow`,
          run: () => getAutonomyCommandText(`flow cancel ${flow.flowId}`, {
            removeQueuedInMemory: true
          })
        });
      }
      return items;
    });
    return [...base, ...flowActions];
  }, [flows]);
  const selectCurrent = () => {
    const action = actions[selectedIndex];
    if (!action)
      return;
    action.run().then((result) => {
      onDone(result, { display: "system" });
    });
  };
  use_input_default((_input, key) => {
    if (key.upArrow) {
      setSelectedIndex((index) => Math.max(0, index - 1));
      return;
    }
    if (key.downArrow) {
      setSelectedIndex((index) => Math.min(actions.length - 1, index + 1));
      return;
    }
    if (key.return) {
      selectCurrent();
    }
  });
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Dialog, {
    title: "Autonomy",
    subtitle: `${actions.length} actions`,
    onCancel: () => onDone("Autonomy panel dismissed", { display: "system" }),
    color: "background",
    hideInputGuide: true,
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      children: [
        actions.map((action, index) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
          flexDirection: "row",
          children: [
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              children: `${index === selectedIndex ? "\u203A" : " "} ${action.label}`.padEnd(ACTION_LABEL_COLUMN_WIDTH)
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor: true,
              children: action.description
            }, undefined, false, undefined, this)
          ]
        }, `${action.label}-${index}`, true, undefined, this)),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            dimColor: true,
            children: "\u2191/\u2193 select \xB7 Enter run \xB7 Esc close"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
async function call(onDone, _context, args) {
  const trimmed = args?.trim() ?? "";
  if (trimmed) {
    const result = await getAutonomyCommandText(trimmed, {
      enqueueInMemory: true,
      removeQueuedInMemory: true
    });
    onDone(result, { display: "system" });
    return null;
  }
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(AutonomyPanel, {
    onDone
  }, undefined, false, undefined, this);
}
var import_react, jsx_dev_runtime, BASE_AUTONOMY_PANEL_ACTION_COUNT = 14, ACTION_LABEL_COLUMN_WIDTH = 24;
var init_autonomyPanel = __esm(() => {
  init_src();
  init_src();
  init_overlayContext();
  init_autonomy();
  init_autonomyFlows();
  import_react = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});
init_autonomyPanel();

export {
  getAutonomyPanelBaseActionCountForTests,
  call
};
