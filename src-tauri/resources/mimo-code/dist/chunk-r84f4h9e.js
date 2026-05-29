// @bun
import {
  init_systemTheme,
  resolveThemeSetting
} from "./chunk-cnsj3vq2.js";
import {
  init_AppState,
  useAppState,
  useSetAppState
} from "./chunk-ktw919wt.js";
import {
  init_useKeybinding
} from "./chunk-dsnwry8r.js";
import {
  FAST_MODE_MODEL_DISPLAY,
  LIGHTNING_BOLT,
  clearFastModeCooldown,
  formatModelPricing,
  getFastModeModel,
  getFastModeRuntimeState,
  getFastModeUnavailableReason,
  getGlobalConfig,
  getOpus46CostTier,
  init_config1 as init_config,
  init_fastMode,
  init_figures,
  init_modelCost,
  init_settings1 as init_settings,
  isFastModeEnabled,
  isFastModeSupportedByModel,
  prefetchFastModeStatus,
  updateSettingsForSource
} from "./chunk-1ghcng4e.js";
import {
  formatDuration,
  init_format
} from "./chunk-x5hyyhqf.js";
import {
  Dialog,
  Link,
  ThemedBox_default,
  ThemedText,
  color,
  init_source,
  init_src,
  source_default,
  useKeybindings
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

// src/components/FastIcon.tsx
function FastIcon({ cooldown }) {
  if (cooldown) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
      color: "promptBorder",
      dimColor: true,
      children: LIGHTNING_BOLT
    }, undefined, false, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
    color: "fastMode",
    children: LIGHTNING_BOLT
  }, undefined, false, undefined, this);
}
function getFastIconString(applyColor = true, cooldown = false) {
  if (!applyColor) {
    return LIGHTNING_BOLT;
  }
  const themeName = resolveThemeSetting(getGlobalConfig().theme);
  if (cooldown) {
    return source_default.dim(color("promptBorder", themeName)(LIGHTNING_BOLT));
  }
  return color("fastMode", themeName)(LIGHTNING_BOLT);
}
var jsx_dev_runtime;
var init_FastIcon = __esm(() => {
  init_source();
  init_figures();
  init_src();
  init_config();
  init_systemTheme();
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});

// src/commands/fast/fast.tsx
function applyFastMode(enable, setAppState) {
  clearFastModeCooldown();
  updateSettingsForSource("userSettings", {
    fastMode: enable ? true : undefined
  });
  if (enable) {
    setAppState((prev) => {
      const needsModelSwitch = !isFastModeSupportedByModel(prev.mainLoopModel);
      return {
        ...prev,
        ...needsModelSwitch ? { mainLoopModel: getFastModeModel(), mainLoopModelForSession: null } : {},
        fastMode: true
      };
    });
  } else {
    setAppState((prev) => ({ ...prev, fastMode: false }));
  }
}
function FastModePicker({
  onDone,
  unavailableReason
}) {
  const model = useAppState((s) => s.mainLoopModel);
  const initialFastMode = useAppState((s) => s.fastMode);
  const setAppState = useSetAppState();
  const [enableFastMode, setEnableFastMode] = import_react.useState(initialFastMode ?? false);
  const runtimeState = getFastModeRuntimeState();
  const isCooldown = runtimeState.status === "cooldown";
  const isUnavailable = unavailableReason !== null;
  const pricing = formatModelPricing(getOpus46CostTier(true));
  function handleConfirm() {
    if (isUnavailable)
      return;
    applyFastMode(enableFastMode, setAppState);
    logEvent("tengu_fast_mode_toggled", {
      enabled: enableFastMode,
      source: "picker"
    });
    if (enableFastMode) {
      const fastIcon = getFastIconString(enableFastMode);
      const modelUpdated = !isFastModeSupportedByModel(model) ? ` \xB7 model set to ${FAST_MODE_MODEL_DISPLAY}` : "";
      onDone(`${fastIcon} Fast mode ON${modelUpdated} \xB7 ${pricing}`);
    } else {
      setAppState((prev) => ({ ...prev, fastMode: false }));
      onDone(`Fast mode OFF`);
    }
  }
  function handleCancel() {
    if (isUnavailable) {
      if (initialFastMode) {
        applyFastMode(false, setAppState);
      }
      onDone("Fast mode OFF", { display: "system" });
      return;
    }
    const message = initialFastMode ? `${getFastIconString()} Kept Fast mode ON` : `Kept Fast mode OFF`;
    onDone(message, { display: "system" });
  }
  function handleToggle() {
    if (isUnavailable)
      return;
    setEnableFastMode((prev) => !prev);
  }
  useKeybindings({
    "confirm:yes": handleConfirm,
    "confirm:nextField": handleToggle,
    "confirm:next": handleToggle,
    "confirm:previous": handleToggle,
    "confirm:cycleMode": handleToggle,
    "confirm:toggle": handleToggle
  }, { context: "Confirmation" });
  const title = /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(FastIcon, {
        cooldown: isCooldown
      }, undefined, false, undefined, this),
      " Fast mode (research preview)"
    ]
  }, undefined, true, undefined, this);
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Dialog, {
    title,
    subtitle: `High-speed mode for ${FAST_MODE_MODEL_DISPLAY}. Billed as extra usage at a premium rate. Separate rate limits apply.`,
    onCancel: handleCancel,
    color: "fastMode",
    inputGuide: (exitState) => exitState.pending ? /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
      children: [
        "Press ",
        exitState.keyName,
        " again to exit"
      ]
    }, undefined, true, undefined, this) : isUnavailable ? /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
      children: "Esc to cancel"
    }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
      children: "Tab to toggle \xB7 Enter to confirm \xB7 Esc to cancel"
    }, undefined, false, undefined, this),
    children: [
      unavailableReason ? /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
        marginLeft: 2,
        children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
          color: "error",
          children: unavailableReason
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(jsx_dev_runtime2.Fragment, {
        children: [
          /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            gap: 0,
            marginLeft: 2,
            children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
              flexDirection: "row",
              gap: 2,
              children: [
                /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                  bold: true,
                  children: "Fast mode"
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                  color: enableFastMode ? "fastMode" : undefined,
                  bold: enableFastMode,
                  children: enableFastMode ? "ON " : "OFF"
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                  dimColor: true,
                  children: pricing
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this),
          isCooldown && runtimeState.status === "cooldown" && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
            marginLeft: 2,
            children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
              color: "warning",
              children: [
                runtimeState.reason === "overloaded" ? "Fast mode overloaded and is temporarily unavailable" : "You've hit your fast limit",
                " \xB7 resets in ",
                formatDuration(runtimeState.resetAt - Date.now(), {
                  hideTrailingZeros: true
                })
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
        dimColor: true,
        children: [
          "Learn more:",
          " ",
          /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Link, {
            url: "https://code.claude.com/docs/en/fast-mode",
            children: "https://code.claude.com/docs/en/fast-mode"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
async function handleFastModeShortcut(enable, getAppState, setAppState) {
  const unavailableReason = getFastModeUnavailableReason();
  if (unavailableReason) {
    return `Fast mode unavailable: ${unavailableReason}`;
  }
  const { mainLoopModel } = getAppState();
  applyFastMode(enable, setAppState);
  logEvent("tengu_fast_mode_toggled", {
    enabled: enable,
    source: "shortcut"
  });
  if (enable) {
    const fastIcon = getFastIconString(true);
    const modelUpdated = !isFastModeSupportedByModel(mainLoopModel) ? ` \xB7 model set to ${FAST_MODE_MODEL_DISPLAY}` : "";
    const pricing = formatModelPricing(getOpus46CostTier(true));
    return `${fastIcon} Fast mode ON${modelUpdated} \xB7 ${pricing}`;
  } else {
    return `Fast mode OFF`;
  }
}
async function call(onDone, context, args) {
  if (!isFastModeEnabled()) {
    return null;
  }
  await prefetchFastModeStatus();
  const arg = args?.trim().toLowerCase();
  if (arg === "on" || arg === "off") {
    const result = await handleFastModeShortcut(arg === "on", context.getAppState, context.setAppState);
    onDone(result);
    return null;
  }
  const unavailableReason = getFastModeUnavailableReason();
  logEvent("tengu_fast_mode_picker_shown", {
    unavailable_reason: unavailableReason ?? ""
  });
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(FastModePicker, {
    onDone,
    unavailableReason
  }, undefined, false, undefined, this);
}
var import_react, jsx_dev_runtime2;
var init_fast = __esm(() => {
  init_src();
  init_FastIcon();
  init_src();
  init_useKeybinding();
  init_analytics();
  init_AppState();
  init_fastMode();
  init_format();
  init_modelCost();
  init_settings();
  import_react = __toESM(require_react(), 1);
  jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
});

export { getFastIconString, init_FastIcon, FastModePicker, call, init_fast };
