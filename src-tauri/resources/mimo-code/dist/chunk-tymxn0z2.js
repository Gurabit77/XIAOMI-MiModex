// @bun
import {
  checkAndDisableAutoModeIfNeeded,
  init_bypassPermissionsKillswitch,
  resetAutoModeGateCheck
} from "./chunk-r7c48x44.js";
import {
  init_useMainLoopModel,
  useMainLoopModel
} from "./chunk-wmwjaw1a.js";
import {
  ConfigurableShortcutHint,
  ConsoleOAuthFlow,
  init_ConfigurableShortcutHint,
  init_ConsoleOAuthFlow,
  init_messages1 as init_messages,
  init_policyLimits,
  init_remoteManagedSettings,
  refreshPolicyLimits,
  refreshRemoteManagedSettings,
  stripSignatureBlocks
} from "./chunk-ktw919wt.js";
import {
  clearTrustedDeviceToken,
  enrollTrustedDevice,
  init_trustedDevice
} from "./chunk-1gfk9pd3.js";
import {
  init_growthbook,
  init_user,
  refreshGrowthBookAfterAuthChange,
  resetUserCache
} from "./chunk-1ghcng4e.js";
import {
  Dialog,
  ThemedText,
  init_src
} from "./chunk-er1s76c9.js";
import {
  require_jsx_dev_runtime
} from "./chunk-b5wxetbv.js";
import {
  init_state,
  resetCostState
} from "./chunk-j5xzpm59.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/commands/login/login.tsx
async function call(onDone, context) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Login, {
    onDone: async (success) => {
      context.onChangeAPIKey();
      context.setMessages(stripSignatureBlocks);
      if (success) {
        resetCostState();
        refreshRemoteManagedSettings();
        refreshPolicyLimits();
        resetUserCache();
        refreshGrowthBookAfterAuthChange();
        clearTrustedDeviceToken();
        enrollTrustedDevice();
        resetAutoModeGateCheck();
        const appState = context.getAppState();
        checkAndDisableAutoModeIfNeeded(appState.toolPermissionContext, context.setAppState, appState.fastMode);
        context.setAppState((prev) => ({
          ...prev,
          authVersion: prev.authVersion + 1
        }));
      }
      onDone(success ? "Login successful" : "Login interrupted");
    }
  }, undefined, false, undefined, this);
}
function Login(props) {
  const mainLoopModel = useMainLoopModel();
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Dialog, {
    title: "Login",
    onCancel: () => props.onDone(false, mainLoopModel),
    color: "permission",
    inputGuide: (exitState) => exitState.pending ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
      children: [
        "Press ",
        exitState.keyName,
        " again to exit"
      ]
    }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ConfigurableShortcutHint, {
      action: "confirm:no",
      context: "Confirmation",
      fallback: "Esc",
      description: "cancel"
    }, undefined, false, undefined, this),
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ConsoleOAuthFlow, {
      onDone: () => props.onDone(true, mainLoopModel),
      startingMessage: props.startingMessage
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
var jsx_dev_runtime;
var init_login = __esm(() => {
  init_state();
  init_trustedDevice();
  init_ConfigurableShortcutHint();
  init_ConsoleOAuthFlow();
  init_src();
  init_useMainLoopModel();
  init_src();
  init_growthbook();
  init_policyLimits();
  init_remoteManagedSettings();
  init_messages();
  init_bypassPermissionsKillswitch();
  init_user();
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});

export { call, Login, init_login };
