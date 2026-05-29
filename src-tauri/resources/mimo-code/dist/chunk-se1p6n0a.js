// @bun
import {
  Select,
  init_CustomSelect
} from "./chunk-ktw919wt.js";
import {
  init_config1 as init_config,
  saveCurrentProjectConfig
} from "./chunk-1ghcng4e.js";
import {
  Dialog,
  Link,
  ThemedBox_default,
  ThemedText,
  init_src
} from "./chunk-er1s76c9.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "./chunk-b5wxetbv.js";
import {
  init_analytics,
  logEvent
} from "./chunk-f2mhrmww.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/components/ClaudeMdExternalIncludesDialog.tsx
function ClaudeMdExternalIncludesDialog({
  onDone,
  isStandaloneDialog,
  externalIncludes
}) {
  import_react.default.useEffect(() => {
    logEvent("tengu_claude_md_includes_dialog_shown", {});
  }, []);
  const handleSelection = import_react.useCallback((value) => {
    if (value === "no") {
      logEvent("tengu_claude_md_external_includes_dialog_declined", {});
      saveCurrentProjectConfig((current) => ({
        ...current,
        hasClaudeMdExternalIncludesApproved: false,
        hasClaudeMdExternalIncludesWarningShown: true
      }));
    } else {
      logEvent("tengu_claude_md_external_includes_dialog_accepted", {});
      saveCurrentProjectConfig((current) => ({
        ...current,
        hasClaudeMdExternalIncludesApproved: true,
        hasClaudeMdExternalIncludesWarningShown: true
      }));
    }
    onDone();
  }, [onDone]);
  const handleEscape = import_react.useCallback(() => {
    handleSelection("no");
  }, [handleSelection]);
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Dialog, {
    title: "Allow external CLAUDE.md file imports?",
    color: "warning",
    onCancel: handleEscape,
    hideBorder: !isStandaloneDialog,
    hideInputGuide: !isStandaloneDialog,
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        children: "This project's CLAUDE.md imports files outside the current working directory. Never allow this for third-party repositories."
      }, undefined, false, undefined, this),
      externalIncludes && externalIncludes.length > 0 && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            dimColor: true,
            children: "External imports:"
          }, undefined, false, undefined, this),
          externalIncludes.map((include, i) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            dimColor: true,
            children: [
              "  ",
              include.path
            ]
          }, i, true, undefined, this))
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        dimColor: true,
        children: [
          "Important: Only use MiMo Code with files you trust. Accessing untrusted files may pose security risks",
          " ",
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Link, {
            url: "https://code.claude.com/docs/en/security"
          }, undefined, false, undefined, this),
          " "
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Select, {
        options: [
          { label: "Yes, allow external imports", value: "yes" },
          { label: "No, disable external imports", value: "no" }
        ],
        onChange: (value) => handleSelection(value)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var import_react, jsx_dev_runtime;
var init_ClaudeMdExternalIncludesDialog = __esm(() => {
  init_analytics();
  init_src();
  init_config();
  init_CustomSelect();
  import_react = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});

export { ClaudeMdExternalIncludesDialog, init_ClaudeMdExternalIncludesDialog };
