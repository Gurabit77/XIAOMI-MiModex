// @bun
import {
  cacheAndRegisterPlugin,
  getAddDirEnabledPlugins,
  getInMemoryInstalledPlugins,
  getPluginById,
  init_addDirPluginSettings,
  init_installedPluginsManager,
  init_marketplaceManager,
  init_pluginInstallationHelpers,
  migrateFromEnabledPlugins,
  registerPluginInstallation
} from "./chunk-ktw919wt.js";
import {
  SETTING_SOURCE_TO_SCOPE,
  init_pluginIdentifier,
  scopeToSettingSource
} from "./chunk-0rstde44.js";
import {
  getInitialSettings,
  getSettingsForSource,
  init_schemas,
  init_settings1 as init_settings,
  isLocalPluginSource,
  updateSettingsForSource
} from "./chunk-1ghcng4e.js";
import {
  getCwd,
  init_cwd
} from "./chunk-dxvkxgnf.js";
import {
  init_log,
  logError
} from "./chunk-w5ahy59y.js";
import {
  init_debug,
  logForDebugging
} from "./chunk-rpbc3b7k.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/plugins/pluginStartupCheck.ts
import { join } from "path";
async function checkEnabledPlugins() {
  const settings = getInitialSettings();
  const enabledPlugins = [];
  const addDirPlugins = getAddDirEnabledPlugins();
  for (const [pluginId, value] of Object.entries(addDirPlugins)) {
    if (pluginId.includes("@") && value) {
      enabledPlugins.push(pluginId);
    }
  }
  if (settings.enabledPlugins) {
    for (const [pluginId, value] of Object.entries(settings.enabledPlugins)) {
      if (!pluginId.includes("@")) {
        continue;
      }
      const idx = enabledPlugins.indexOf(pluginId);
      if (value) {
        if (idx === -1) {
          enabledPlugins.push(pluginId);
        }
      } else {
        if (idx !== -1) {
          enabledPlugins.splice(idx, 1);
        }
      }
    }
  }
  return enabledPlugins;
}
function getPluginEditableScopes() {
  const result = new Map;
  const addDirPlugins = getAddDirEnabledPlugins();
  for (const [pluginId, value] of Object.entries(addDirPlugins)) {
    if (!pluginId.includes("@")) {
      continue;
    }
    if (value === true) {
      result.set(pluginId, "flag");
    } else if (value === false) {
      result.delete(pluginId);
    }
  }
  const scopeSources = [
    { scope: "managed", source: "policySettings" },
    { scope: "user", source: "userSettings" },
    { scope: "project", source: "projectSettings" },
    { scope: "local", source: "localSettings" },
    { scope: "flag", source: "flagSettings" }
  ];
  for (const { scope, source } of scopeSources) {
    const settings = getSettingsForSource(source);
    if (!settings?.enabledPlugins) {
      continue;
    }
    for (const [pluginId, value] of Object.entries(settings.enabledPlugins)) {
      if (!pluginId.includes("@")) {
        continue;
      }
      if (pluginId in addDirPlugins && addDirPlugins[pluginId] !== value) {
        logForDebugging(`Plugin ${pluginId} from --add-dir (${addDirPlugins[pluginId]}) overridden by ${source} (${value})`);
      }
      if (value === true) {
        result.set(pluginId, scope);
      } else if (value === false) {
        result.delete(pluginId);
      }
    }
  }
  logForDebugging(`Found ${result.size} enabled plugins with scopes: ${Array.from(result.entries()).map(([id, scope]) => `${id}(${scope})`).join(", ")}`);
  return result;
}
function isPersistableScope(scope) {
  return scope !== "flag";
}
function settingSourceToScope(source) {
  return SETTING_SOURCE_TO_SCOPE[source];
}
async function getInstalledPlugins() {
  migrateFromEnabledPlugins().catch((error) => {
    logError(error);
  });
  const v2Data = getInMemoryInstalledPlugins();
  const installed = Object.keys(v2Data.plugins);
  logForDebugging(`Found ${installed.length} installed plugins`);
  return installed;
}
async function findMissingPlugins(enabledPlugins) {
  try {
    const installedPlugins = await getInstalledPlugins();
    const notInstalled = enabledPlugins.filter((id) => !installedPlugins.includes(id));
    const lookups = await Promise.all(notInstalled.map(async (pluginId) => {
      try {
        const plugin = await getPluginById(pluginId);
        return { pluginId, found: plugin !== null && plugin !== undefined };
      } catch (error) {
        logForDebugging(`Failed to check plugin ${pluginId} in marketplace: ${error}`);
        return { pluginId, found: false };
      }
    }));
    const missing = lookups.filter(({ found }) => found).map(({ pluginId }) => pluginId);
    return missing;
  } catch (error) {
    logError(error);
    return [];
  }
}
async function installSelectedPlugins(pluginsToInstall, onProgress, scope = "user") {
  const projectPath = scope !== "user" ? getCwd() : undefined;
  const settingSource = scopeToSettingSource(scope);
  const settings = getSettingsForSource(settingSource);
  const updatedEnabledPlugins = { ...settings?.enabledPlugins };
  const installed = [];
  const failed = [];
  for (let i = 0;i < pluginsToInstall.length; i++) {
    const pluginId = pluginsToInstall[i];
    if (!pluginId)
      continue;
    if (onProgress) {
      onProgress(pluginId, i + 1, pluginsToInstall.length);
    }
    try {
      const pluginInfo = await getPluginById(pluginId);
      if (!pluginInfo) {
        failed.push({
          name: pluginId,
          error: "Plugin not found in any marketplace"
        });
        continue;
      }
      const { entry, marketplaceInstallLocation } = pluginInfo;
      if (!isLocalPluginSource(entry.source)) {
        await cacheAndRegisterPlugin(pluginId, entry, scope, projectPath);
      } else {
        registerPluginInstallation({
          pluginId,
          installPath: join(marketplaceInstallLocation, entry.source),
          version: entry.version
        }, scope, projectPath);
      }
      updatedEnabledPlugins[pluginId] = true;
      installed.push(pluginId);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      failed.push({ name: pluginId, error: errorMessage });
      logError(error);
    }
  }
  updateSettingsForSource(settingSource, {
    ...settings,
    enabledPlugins: updatedEnabledPlugins
  });
  return { installed, failed };
}
var init_pluginStartupCheck = __esm(() => {
  init_cwd();
  init_debug();
  init_log();
  init_settings();
  init_addDirPluginSettings();
  init_installedPluginsManager();
  init_marketplaceManager();
  init_pluginIdentifier();
  init_pluginInstallationHelpers();
  init_schemas();
});

export { checkEnabledPlugins, getPluginEditableScopes, isPersistableScope, settingSourceToScope, getInstalledPlugins, findMissingPlugins, installSelectedPlugins, init_pluginStartupCheck };
