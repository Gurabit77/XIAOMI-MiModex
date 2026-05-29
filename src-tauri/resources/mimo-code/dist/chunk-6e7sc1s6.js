// @bun
import {
  init_pluginOperations,
  updatePluginOp
} from "./chunk-p111txfv.js";
import {
  getDeclaredMarketplaces,
  init_installedPluginsManager,
  init_marketplaceManager,
  isInstallationRelevantToCurrentProject,
  loadInstalledPluginsFromDisk,
  loadKnownMarketplacesConfig,
  refreshMarketplace
} from "./chunk-ktw919wt.js";
import {
  init_pluginIdentifier,
  parsePluginIdentifier
} from "./chunk-0rstde44.js";
import {
  init_config1 as init_config,
  init_schemas,
  isMarketplaceAutoUpdate,
  shouldSkipPluginAutoupdate
} from "./chunk-1ghcng4e.js";
import {
  init_log,
  logError
} from "./chunk-w5ahy59y.js";
import {
  errorMessage,
  init_debug,
  init_errors,
  logForDebugging
} from "./chunk-rpbc3b7k.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/plugins/pluginAutoupdate.ts
function onPluginsAutoUpdated(callback) {
  pluginUpdateCallback = callback;
  if (pendingNotification !== null && pendingNotification.length > 0) {
    callback(pendingNotification);
    pendingNotification = null;
  }
  return () => {
    pluginUpdateCallback = null;
  };
}
async function getAutoUpdateEnabledMarketplaces() {
  const config = await loadKnownMarketplacesConfig();
  const declared = getDeclaredMarketplaces();
  const enabled = new Set;
  for (const [name, entry] of Object.entries(config)) {
    const declaredAutoUpdate = declared[name]?.autoUpdate;
    const autoUpdate = declaredAutoUpdate !== undefined ? declaredAutoUpdate : isMarketplaceAutoUpdate(name, entry);
    if (autoUpdate) {
      enabled.add(name.toLowerCase());
    }
  }
  return enabled;
}
async function updatePlugin(pluginId, installations) {
  let wasUpdated = false;
  for (const { scope } of installations) {
    try {
      const result = await updatePluginOp(pluginId, scope);
      if (result.success && !result.alreadyUpToDate) {
        wasUpdated = true;
        logForDebugging(`Plugin autoupdate: updated ${pluginId} from ${result.oldVersion} to ${result.newVersion}`);
      } else if (!result.alreadyUpToDate) {
        logForDebugging(`Plugin autoupdate: failed to update ${pluginId}: ${result.message}`, { level: "warn" });
      }
    } catch (error) {
      logForDebugging(`Plugin autoupdate: error updating ${pluginId}: ${errorMessage(error)}`, { level: "warn" });
    }
  }
  return wasUpdated ? pluginId : null;
}
async function updatePluginsForMarketplaces(marketplaceNames) {
  const installedPlugins = loadInstalledPluginsFromDisk();
  const pluginIds = Object.keys(installedPlugins.plugins);
  if (pluginIds.length === 0) {
    return [];
  }
  const results = await Promise.allSettled(pluginIds.map(async (pluginId) => {
    const { marketplace } = parsePluginIdentifier(pluginId);
    if (!marketplace || !marketplaceNames.has(marketplace.toLowerCase())) {
      return null;
    }
    const allInstallations = installedPlugins.plugins[pluginId];
    if (!allInstallations || allInstallations.length === 0) {
      return null;
    }
    const relevantInstallations = allInstallations.filter(isInstallationRelevantToCurrentProject);
    if (relevantInstallations.length === 0) {
      return null;
    }
    return updatePlugin(pluginId, relevantInstallations);
  }));
  return results.filter((r) => r.status === "fulfilled" && r.value !== null).map((r) => r.value);
}
async function updatePlugins(autoUpdateEnabledMarketplaces) {
  return updatePluginsForMarketplaces(autoUpdateEnabledMarketplaces);
}
function autoUpdateMarketplacesAndPluginsInBackground() {
  (async () => {
    if (shouldSkipPluginAutoupdate()) {
      logForDebugging("Plugin autoupdate: skipped (auto-updater disabled)");
      return;
    }
    try {
      const autoUpdateEnabledMarketplaces = await getAutoUpdateEnabledMarketplaces();
      if (autoUpdateEnabledMarketplaces.size === 0) {
        return;
      }
      const refreshResults = await Promise.allSettled(Array.from(autoUpdateEnabledMarketplaces).map(async (name) => {
        try {
          await refreshMarketplace(name, undefined, {
            disableCredentialHelper: true
          });
        } catch (error) {
          logForDebugging(`Plugin autoupdate: failed to refresh marketplace ${name}: ${errorMessage(error)}`, { level: "warn" });
        }
      }));
      const failures = refreshResults.filter((r) => r.status === "rejected");
      if (failures.length > 0) {
        logForDebugging(`Plugin autoupdate: ${failures.length} marketplace refresh(es) failed`, { level: "warn" });
      }
      logForDebugging("Plugin autoupdate: checking installed plugins");
      const updatedPlugins = await updatePlugins(autoUpdateEnabledMarketplaces);
      if (updatedPlugins.length > 0) {
        if (pluginUpdateCallback) {
          pluginUpdateCallback(updatedPlugins);
        } else {
          pendingNotification = updatedPlugins;
        }
      }
    } catch (error) {
      logError(error);
    }
  })();
}
var pluginUpdateCallback = null, pendingNotification = null;
var init_pluginAutoupdate = __esm(() => {
  init_pluginOperations();
  init_config();
  init_debug();
  init_errors();
  init_log();
  init_installedPluginsManager();
  init_marketplaceManager();
  init_pluginIdentifier();
  init_schemas();
});

export { onPluginsAutoUpdated, updatePluginsForMarketplaces, autoUpdateMarketplacesAndPluginsInBackground, init_pluginAutoupdate };
