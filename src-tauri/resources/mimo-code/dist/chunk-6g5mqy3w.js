// @bun
import {
  init_sanitization,
  recursivelySanitizeUnicode
} from "./chunk-mcws22k3.js";
import {
  Select,
  getCurrentSessionTag,
  getTranscriptPath,
  init_select,
  init_sessionStorage,
  saveTag
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
  init_source,
  init_src,
  source_default
} from "./chunk-er1s76c9.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "./chunk-b5wxetbv.js";
import {
  init_analytics,
  logEvent
} from "./chunk-f2mhrmww.js";
import"./chunk-0vkfrmqm.js";
import"./chunk-0xjaqda8.js";
import"./chunk-c84gr0s2.js";
import"./chunk-t6jhrn34.js";
import"./chunk-95xve7f8.js";
import"./chunk-jdq8jgyg.js";
import"./chunk-qcwbd71h.js";
import"./chunk-dxvkxgnf.js";
import {
  COMMON_HELP_ARGS,
  COMMON_INFO_ARGS,
  init_xml
} from "./chunk-w5ahy59y.js";
import"./chunk-8tnsngw2.js";
import"./chunk-jkh5s8ct.js";
import"./chunk-kwm5bf2m.js";
import"./chunk-5z28bqne.js";
import"./chunk-qajrkk97.js";
import"./chunk-rpbc3b7k.js";
import"./chunk-fbv4apne.js";
import {
  getSessionId,
  init_state
} from "./chunk-j5xzpm59.js";
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

// src/commands/tag/tag.tsx
function ConfirmRemoveTag({
  tagName,
  onConfirm,
  onCancel
}) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Dialog, {
    title: "Remove tag?",
    subtitle: `Current tag: #${tagName}`,
    onCancel,
    color: "warning",
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      gap: 1,
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: "This will remove the tag from the current session."
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Select, {
          onChange: (value) => value === "yes" ? onConfirm() : onCancel(),
          options: [
            { label: "Yes, remove tag", value: "yes" },
            { label: "No, keep tag", value: "no" }
          ]
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
function ToggleTagAndClose({
  tagName,
  onDone
}) {
  const [showConfirm, setShowConfirm] = React.useState(false);
  const [sessionId, setSessionId] = React.useState(null);
  const normalizedTag = recursivelySanitizeUnicode(tagName).trim();
  React.useEffect(() => {
    const id = getSessionId();
    if (!id) {
      onDone("No active session to tag", { display: "system" });
      return;
    }
    if (!normalizedTag) {
      onDone("Tag name cannot be empty", { display: "system" });
      return;
    }
    setSessionId(id);
    const currentTag = getCurrentSessionTag(id);
    if (currentTag === normalizedTag) {
      logEvent("tengu_tag_command_remove_prompt", {});
      setShowConfirm(true);
    } else {
      const isReplacing = !!currentTag;
      logEvent("tengu_tag_command_add", { is_replacing: isReplacing });
      (async () => {
        const fullPath = getTranscriptPath();
        await saveTag(id, normalizedTag, fullPath);
        onDone(`Tagged session with ${source_default.cyan(`#${normalizedTag}`)}`, {
          display: "system"
        });
      })();
    }
  }, [normalizedTag, onDone]);
  if (showConfirm && sessionId) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ConfirmRemoveTag, {
      tagName: normalizedTag,
      onConfirm: async () => {
        logEvent("tengu_tag_command_remove_confirmed", {});
        const fullPath = getTranscriptPath();
        await saveTag(sessionId, "", fullPath);
        onDone(`Removed tag ${source_default.cyan(`#${normalizedTag}`)}`, {
          display: "system"
        });
      },
      onCancel: () => {
        logEvent("tengu_tag_command_remove_cancelled", {});
        onDone(`Kept tag ${source_default.cyan(`#${normalizedTag}`)}`, {
          display: "system"
        });
      }
    }, undefined, false, undefined, this);
  }
  return null;
}
function ShowHelp({
  onDone
}) {
  React.useEffect(() => {
    onDone(`Usage: /tag <tag-name>

Toggle a searchable tag on the current session.
Run the same command again to remove the tag.
Tags are displayed after the branch name in /resume and can be searched with /.

Examples:
  /tag bugfix        # Add tag
  /tag bugfix        # Remove tag (toggle)
  /tag feature-auth
  /tag wip`, { display: "system" });
  }, [onDone]);
  return null;
}
async function call(onDone, _context, args) {
  args = args?.trim() || "";
  if (COMMON_INFO_ARGS.includes(args) || COMMON_HELP_ARGS.includes(args)) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ShowHelp, {
      onDone
    }, undefined, false, undefined, this);
  }
  if (!args) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ShowHelp, {
      onDone
    }, undefined, false, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ToggleTagAndClose, {
    tagName: args,
    onDone
  }, undefined, false, undefined, this);
}
var React, jsx_dev_runtime;
var init_tag = __esm(() => {
  init_source();
  init_state();
  init_select();
  init_src();
  init_xml();
  init_src();
  init_analytics();
  init_sanitization();
  init_sessionStorage();
  React = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});
init_tag();

export {
  call
};
