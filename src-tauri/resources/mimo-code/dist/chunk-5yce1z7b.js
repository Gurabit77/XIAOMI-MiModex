// @bun
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
import {
  init_featureCheck,
  isSkillLearningEnabled
} from "./chunk-wf3yck87.js";
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
  __require,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/commands/skill-learning/skillPanel.tsx
async function getStatusText() {
  const { readObservations, loadInstincts, resolveProjectContext } = await import("./chunk-ew529jsf.js");
  const project = resolveProjectContext(process.cwd());
  const [observations, instincts] = await Promise.all([readObservations({ project }), loadInstincts({ project })]);
  return [
    `Skill Learning status for ${project.projectName} (${project.projectId})`,
    `Observations: ${observations.length}`,
    `Instincts: ${instincts.length}`,
    "",
    `Skill Learning: ${isSkillLearningEnabled() ? "enabled" : "disabled"}`
  ].join(`
`);
}
async function startSkillLearning() {
  const lines = [];
  if (!isSkillLearningEnabled()) {
    process.env.SKILL_LEARNING_ENABLED = "1";
    lines.push("Skill Learning: enabled (SKILL_LEARNING_ENABLED=1)");
  } else {
    lines.push("Skill Learning: already enabled");
  }
  try {
    const { initSkillLearning } = await import("./chunk-20ctae8q.js");
    initSkillLearning();
    lines.push("Runtime observer: initialized");
  } catch {
    lines.push("Runtime observer: init skipped (not available)");
  }
  return lines.join(`
`);
}
async function stopSkillLearning() {
  const lines = [];
  if (isSkillLearningEnabled()) {
    process.env.SKILL_LEARNING_ENABLED = "0";
    process.env.CLAUDE_SKILL_LEARNING_DISABLE = "1";
    lines.push("Skill Learning: disabled (SKILL_LEARNING_ENABLED=0)");
  } else {
    lines.push("Skill Learning: already disabled");
  }
  return lines.join(`
`);
}
function SkillPanel({ onDone }) {
  useRegisterOverlay("skill-panel");
  const [selectedIndex, setSelectedIndex] = import_react.useState(0);
  const actions = import_react.useMemo(() => [
    {
      label: "Status",
      description: "Show skill learning status for current project",
      run: getStatusText
    },
    {
      label: "Start",
      description: "Enable skill learning for this session",
      run: startSkillLearning
    },
    {
      label: "Stop",
      description: "Disable skill learning for this session",
      run: stopSkillLearning
    },
    {
      label: "About",
      description: "Detailed description of skill learning features",
      run: () => Promise.resolve(ABOUT_TEXT)
    }
  ], []);
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
    title: "Skill Learning",
    subtitle: `${actions.length} actions`,
    onCancel: () => onDone("Skill panel dismissed", { display: "system" }),
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
        }, action.label, true, undefined, this)),
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
  if (trimmed === "start") {
    onDone(await startSkillLearning(), { display: "system" });
    return null;
  }
  if (trimmed === "stop") {
    onDone(await stopSkillLearning(), { display: "system" });
    return null;
  }
  if (trimmed === "about") {
    onDone(ABOUT_TEXT, { display: "system" });
    return null;
  }
  if (trimmed === "status") {
    onDone(await getStatusText(), { display: "system" });
    return null;
  }
  if (trimmed) {
    const { call: textCall } = await import("./chunk-qesj48v7.js");
    const result = await textCall(trimmed, {});
    if (result && typeof result === "object" && "value" in result) {
      onDone(result.value, { display: "system" });
    }
    return null;
  }
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(SkillPanel, {
    onDone
  }, undefined, false, undefined, this);
}
var import_react, jsx_dev_runtime, ACTION_LABEL_COLUMN_WIDTH = 28, ABOUT_TEXT;
var init_skillPanel = __esm(() => {
  init_src();
  init_src();
  init_overlayContext();
  init_featureCheck();
  import_react = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
  ABOUT_TEXT = `# Skill Learning (\u81EA\u52A8\u5B66\u4E60)

Skill Learning \u662F\u4E00\u4E2A\u95ED\u73AF\u5B66\u4E60\u7CFB\u7EDF\uFF0C\u901A\u8FC7\u89C2\u5BDF\u7528\u6237\u7684\u64CD\u4F5C\u6A21\u5F0F\u81EA\u52A8\u63D0\u53D6\u76F4\u89C9(instinct)\uFF0C
\u5E76\u5728\u8FBE\u5230\u9608\u503C\u540E\u751F\u6210\u53EF\u590D\u7528\u7684 skill \u6587\u4EF6\u3001agent \u548C command\u3002

## \u5DE5\u4F5C\u6D41\u7A0B
1. **Observe** \u2014 \u8BB0\u5F55\u6BCF\u8F6E\u5BF9\u8BDD\u4E2D\u7684\u5DE5\u5177\u8C03\u7528\u3001\u7528\u6237\u7EA0\u6B63\u3001\u9519\u8BEF\u89E3\u51B3\u6A21\u5F0F
2. **Analyze** \u2014 \u4F7F\u7528\u542F\u53D1\u5F0F\u6216 LLM \u540E\u7AEF\u5206\u6790\u89C2\u5BDF\u6570\u636E\uFF0C\u63D0\u53D6 instinct candidate
3. **Evolve** \u2014 \u5C06\u9AD8\u7F6E\u4FE1\u5EA6 instinct \u805A\u7C7B\uFF0C\u751F\u6210 skill/agent/command \u5019\u9009
4. **Lifecycle** \u2014 \u5BF9\u751F\u6210\u7684 skill \u8FDB\u884C\u53BB\u91CD\u3001\u7248\u672C\u6BD4\u8F83\u3001\u5F52\u6863\u6216\u66FF\u6362

## \u5B50\u547D\u4EE4
- /skill-learning status       \u2014 \u67E5\u770B\u5F53\u524D\u9879\u76EE\u7684\u89C2\u5BDF\u548C\u76F4\u89C9\u6570\u91CF
- /skill-learning ingest       \u2014 \u4ECE transcript \u5BFC\u5165\u89C2\u5BDF\u6570\u636E
- /skill-learning evolve       \u2014 \u751F\u6210 skill \u5019\u9009 (--generate \u5199\u5165\u78C1\u76D8)
- /skill-learning export       \u2014 \u5BFC\u51FA instinct \u4E3A JSON
- /skill-learning import       \u2014 \u5BFC\u5165 instinct JSON
- /skill-learning prune        \u2014 \u6E05\u7406\u8FC7\u671F\u7684 pending instinct
- /skill-learning promote      \u2014 \u5C06 instinct/gap \u63D0\u5347\u4E3A\u5168\u5C40\u8303\u56F4
- /skill-learning projects     \u2014 \u5217\u51FA\u6240\u6709\u5DF2\u77E5\u7684\u9879\u76EE\u8303\u56F4

## \u542F\u7528\u65B9\u5F0F
- SKILL_LEARNING_ENABLED=1 \u6216 FEATURE_SKILL_LEARNING=1
- \u72B6\u6001: ${isSkillLearningEnabled() ? "\u5DF2\u542F\u7528" : "\u672A\u542F\u7528"}
`;
});
init_skillPanel();

export {
  call
};
