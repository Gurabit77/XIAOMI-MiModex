// @bun
import {
  applyConfigEnvironmentVariables,
  init_managedEnv
} from "./chunk-ktw919wt.js";
import {
  init_sessionState,
  notifyPermissionModeChanged,
  notifySessionMetadataChanged
} from "./chunk-chmfqs2y.js";
import {
  clearApiKeyHelperCache,
  clearAwsCredentialsCache,
  clearGcpCredentialsCache,
  getGlobalConfig,
  init_PermissionMode,
  init_auth,
  init_config1 as init_config,
  permissionModeFromString,
  saveGlobalConfig,
  toExternalPermissionMode
} from "./chunk-1ghcng4e.js";
import {
  init_log,
  logError
} from "./chunk-w5ahy59y.js";
import {
  init_errors,
  toError
} from "./chunk-rpbc3b7k.js";
import {
  init_state,
  setMainLoopModelOverride
} from "./chunk-j5xzpm59.js";

// src/state/onChangeAppState.ts
init_state();
init_auth();
init_config();
init_errors();
init_log();
init_managedEnv();
init_PermissionMode();
init_sessionState();
function externalMetadataToAppState(metadata) {
  return (prev) => ({
    ...prev,
    ...typeof metadata.permission_mode === "string" ? {
      toolPermissionContext: {
        ...prev.toolPermissionContext,
        mode: permissionModeFromString(metadata.permission_mode)
      }
    } : {},
    ...typeof metadata.is_ultraplan_mode === "boolean" ? { isUltraplanMode: metadata.is_ultraplan_mode } : {}
  });
}
function onChangeAppState({
  newState,
  oldState
}) {
  const prevMode = oldState.toolPermissionContext.mode;
  const newMode = newState.toolPermissionContext.mode;
  if (prevMode !== newMode) {
    const prevExternal = toExternalPermissionMode(prevMode);
    const newExternal = toExternalPermissionMode(newMode);
    if (prevExternal !== newExternal) {
      const isUltraplan = newExternal === "plan" && newState.isUltraplanMode && !oldState.isUltraplanMode ? true : null;
      notifySessionMetadataChanged({
        permission_mode: newExternal,
        is_ultraplan_mode: isUltraplan
      });
    }
    notifyPermissionModeChanged(newMode);
  }
  if (newState.mainLoopModel !== oldState.mainLoopModel) {
    setMainLoopModelOverride(newState.mainLoopModel);
  }
  if (newState.expandedView !== oldState.expandedView) {
    const showExpandedTodos = newState.expandedView === "tasks";
    const showSpinnerTree = newState.expandedView === "teammates";
    if (getGlobalConfig().showExpandedTodos !== showExpandedTodos || getGlobalConfig().showSpinnerTree !== showSpinnerTree) {
      saveGlobalConfig((current) => ({
        ...current,
        showExpandedTodos,
        showSpinnerTree
      }));
    }
  }
  if (newState.verbose !== oldState.verbose && getGlobalConfig().verbose !== newState.verbose) {
    const verbose = newState.verbose;
    saveGlobalConfig((current) => ({
      ...current,
      verbose
    }));
  }
  if (process.env.USER_TYPE === "ant") {
    if (newState.tungstenPanelVisible !== oldState.tungstenPanelVisible && newState.tungstenPanelVisible !== undefined && getGlobalConfig().tungstenPanelVisible !== newState.tungstenPanelVisible) {
      const tungstenPanelVisible = newState.tungstenPanelVisible;
      saveGlobalConfig((current) => ({ ...current, tungstenPanelVisible }));
    }
  }
  if (newState.settings !== oldState.settings) {
    try {
      clearApiKeyHelperCache();
      clearAwsCredentialsCache();
      clearGcpCredentialsCache();
      if (newState.settings.env !== oldState.settings.env) {
        applyConfigEnvironmentVariables();
      }
    } catch (error) {
      logError(toError(error));
    }
  }
}

export { externalMetadataToAppState, onChangeAppState };
