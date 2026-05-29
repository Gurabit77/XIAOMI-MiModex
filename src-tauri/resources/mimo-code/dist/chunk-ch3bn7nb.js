// @bun
import {
  ThemedBox_default,
  ThemedText,
  init_src
} from "./chunk-er1s76c9.js";
import {
  require_jsx_dev_runtime
} from "./chunk-b5wxetbv.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/components/permissions/PermissionRequestTitle.tsx
function PermissionRequestTitle({
  title,
  subtitle,
  color = "permission",
  workerBadge
}) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "row",
        gap: 1,
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            bold: true,
            color,
            children: title
          }, undefined, false, undefined, this),
          workerBadge && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            dimColor: true,
            children: [
              "\xB7 ",
              "@",
              workerBadge.name
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this),
      subtitle != null && (typeof subtitle === "string" ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        dimColor: true,
        wrap: "truncate-start",
        children: subtitle
      }, undefined, false, undefined, this) : subtitle)
    ]
  }, undefined, true, undefined, this);
}
var jsx_dev_runtime;
var init_PermissionRequestTitle = __esm(() => {
  init_src();
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/permissions/PermissionDialog.tsx
function PermissionDialog({
  title,
  subtitle,
  color = "permission",
  titleColor,
  innerPaddingX = 1,
  workerBadge,
  titleRight,
  children
}) {
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    borderStyle: "round",
    borderColor: color,
    borderLeft: false,
    borderRight: false,
    borderBottom: false,
    marginTop: 1,
    children: [
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
        paddingX: 1,
        flexDirection: "column",
        children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
          justifyContent: "space-between",
          children: [
            /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(PermissionRequestTitle, {
              title,
              subtitle,
              color: titleColor,
              workerBadge
            }, undefined, false, undefined, this),
            titleRight
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        paddingX: innerPaddingX,
        children
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var jsx_dev_runtime2;
var init_PermissionDialog = __esm(() => {
  init_src();
  init_PermissionRequestTitle();
  jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
});

export { PermissionRequestTitle, init_PermissionRequestTitle, PermissionDialog, init_PermissionDialog };
