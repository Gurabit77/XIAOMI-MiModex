// @bun
import {
  PermissionDialog,
  init_PermissionDialog
} from "./chunk-ch3bn7nb.js";
import {
  Select,
  init_select
} from "./chunk-ktw919wt.js";
import {
  init_bridgeEnabled,
  isBridgeEnabled
} from "./chunk-ybaawhyf.js";
import {
  getClaudeAIOAuthTokens,
  getGlobalConfig,
  init_auth,
  init_config1 as init_config,
  saveGlobalConfig
} from "./chunk-1ghcng4e.js";
import {
  ThemedBox_default,
  ThemedText,
  init_src
} from "./chunk-er1s76c9.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "./chunk-b5wxetbv.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/components/RemoteCallout.tsx
function RemoteCallout({ onDone }) {
  const onDoneRef = import_react.useRef(onDone);
  onDoneRef.current = onDone;
  const handleCancel = import_react.useCallback(() => {
    onDoneRef.current("dismiss");
  }, []);
  import_react.useEffect(() => {
    saveGlobalConfig((current) => {
      if (current.remoteDialogSeen)
        return current;
      return { ...current, remoteDialogSeen: true };
    });
  }, []);
  const handleSelect = import_react.useCallback((value) => {
    onDoneRef.current(value);
  }, []);
  const options = [
    {
      label: "Enable Remote Control for this session",
      description: "Opens a secure connection to claude.ai.",
      value: "enable"
    },
    {
      label: "Never mind",
      description: "You can always enable it later with /remote-control.",
      value: "dismiss"
    }
  ];
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(PermissionDialog, {
    title: "Remote Control",
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      paddingX: 2,
      paddingY: 1,
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
          marginBottom: 1,
          flexDirection: "column",
          children: [
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              children: "Remote Control lets you access this CLI session from the web (claude.ai/code) or the MiMo app, so you can pick up where you left off on any device."
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              children: " "
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              children: "You can disconnect remote access anytime by running /remote-control again."
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Select, {
            options,
            onChange: handleSelect,
            onCancel: handleCancel
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
function shouldShowRemoteCallout() {
  const config = getGlobalConfig();
  if (config.remoteDialogSeen)
    return false;
  if (!isBridgeEnabled())
    return false;
  const tokens = getClaudeAIOAuthTokens();
  if (!tokens?.accessToken)
    return false;
  return true;
}
var import_react, jsx_dev_runtime;
var init_RemoteCallout = __esm(() => {
  init_bridgeEnabled();
  init_src();
  init_auth();
  init_config();
  init_select();
  init_PermissionDialog();
  import_react = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});

export { RemoteCallout, shouldShowRemoteCallout, init_RemoteCallout };
