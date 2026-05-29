// @bun
import {
  detectAndUninstallDelistedPlugins
} from "./chunk-cfm1q1cq.js";
import {
  getFlaggedPlugins,
  init_pluginFlagging
} from "./chunk-qff5yg0r.js";
import {
  getPluginCommands,
  init_AppState,
  init_loadPluginAgents,
  init_loadPluginCommands,
  init_loadPluginHooks,
  init_lspPluginIntegration,
  init_manager,
  init_mcpPluginIntegration,
  init_notifications,
  init_pluginLoader,
  loadAllPlugins,
  loadPluginAgents,
  loadPluginHooks,
  loadPluginLspServers,
  loadPluginMcpServers,
  reinitializeLspServerManager,
  useAppState,
  useNotifications,
  useSetAppState
} from "./chunk-ktw919wt.js";
import {
  count,
  init_array
} from "./chunk-zwarn9h7.js";
import {
  require_react
} from "./chunk-b5wxetbv.js";
import {
  init_analytics,
  logEvent
} from "./chunk-f2mhrmww.js";
import {
  init_diagLogs,
  logForDiagnosticsNoPII
} from "./chunk-t6jhrn34.js";
import {
  init_log,
  logError
} from "./chunk-w5ahy59y.js";
import {
  init_debug,
  init_errors,
  logForDebugging,
  toError
} from "./chunk-rpbc3b7k.js";
import {
  __toESM
} from "./chunk-qp2qdcda.js";

// src/hooks/useManagePlugins.ts
init_notifications();
init_analytics();
init_manager();
init_AppState();
init_array();
init_debug();
init_diagLogs();
init_errors();
init_log();
init_loadPluginAgents();
init_loadPluginCommands();
init_loadPluginHooks();
init_lspPluginIntegration();
init_mcpPluginIntegration();
var import_react = __toESM(require_react(), 1);
init_pluginFlagging();
init_pluginLoader();
function useManagePlugins({
  enabled = true
} = {}) {
  const setAppState = useSetAppState();
  const needsRefresh = useAppState((s) => s.plugins.needsRefresh);
  const { addNotification } = useNotifications();
  const initialPluginLoad = import_react.useCallback(async () => {
    try {
      const { enabled: enabled2, disabled, errors } = await loadAllPlugins();
      await detectAndUninstallDelistedPlugins();
      const flagged = getFlaggedPlugins();
      if (Object.keys(flagged).length > 0) {
        addNotification({
          key: "plugin-delisted-flagged",
          text: "Plugins flagged. Check /plugins",
          color: "warning",
          priority: "high"
        });
      }
      let commands = [];
      let agents = [];
      try {
        commands = await getPluginCommands();
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        errors.push({
          type: "generic-error",
          source: "plugin-commands",
          error: `Failed to load plugin commands: ${errorMessage}`
        });
      }
      try {
        agents = await loadPluginAgents();
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        errors.push({
          type: "generic-error",
          source: "plugin-agents",
          error: `Failed to load plugin agents: ${errorMessage}`
        });
      }
      try {
        await loadPluginHooks();
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        errors.push({
          type: "generic-error",
          source: "plugin-hooks",
          error: `Failed to load plugin hooks: ${errorMessage}`
        });
      }
      const mcpServerCounts = await Promise.all(enabled2.map(async (p) => {
        if (p.mcpServers)
          return Object.keys(p.mcpServers).length;
        const servers = await loadPluginMcpServers(p, errors);
        if (servers)
          p.mcpServers = servers;
        return servers ? Object.keys(servers).length : 0;
      }));
      const mcp_count = mcpServerCounts.reduce((sum, n) => sum + n, 0);
      const lspServerCounts = await Promise.all(enabled2.map(async (p) => {
        if (p.lspServers)
          return Object.keys(p.lspServers).length;
        const servers = await loadPluginLspServers(p, errors);
        if (servers)
          p.lspServers = servers;
        return servers ? Object.keys(servers).length : 0;
      }));
      const lsp_count = lspServerCounts.reduce((sum, n) => sum + n, 0);
      reinitializeLspServerManager();
      setAppState((prevState) => {
        const existingLspErrors = prevState.plugins.errors.filter((e) => e.source === "lsp-manager" || e.source.startsWith("plugin:"));
        const newErrorKeys = new Set(errors.map((e) => e.type === "generic-error" ? `generic-error:${e.source}:${e.error}` : `${e.type}:${e.source}`));
        const filteredExisting = existingLspErrors.filter((e) => {
          const key = e.type === "generic-error" ? `generic-error:${e.source}:${e.error}` : `${e.type}:${e.source}`;
          return !newErrorKeys.has(key);
        });
        const mergedErrors = [...filteredExisting, ...errors];
        return {
          ...prevState,
          plugins: {
            ...prevState.plugins,
            enabled: enabled2,
            disabled,
            commands,
            errors: mergedErrors
          }
        };
      });
      logForDebugging(`Loaded plugins - Enabled: ${enabled2.length}, Disabled: ${disabled.length}, Commands: ${commands.length}, Agents: ${agents.length}, Errors: ${errors.length}`);
      const hook_count = enabled2.reduce((sum, p) => {
        if (!p.hooksConfig)
          return sum;
        return sum + Object.values(p.hooksConfig).reduce((s, matchers) => s + (matchers?.reduce((h, m) => h + m.hooks.length, 0) ?? 0), 0);
      }, 0);
      return {
        enabled_count: enabled2.length,
        disabled_count: disabled.length,
        inline_count: count(enabled2, (p) => p.source.endsWith("@inline")),
        marketplace_count: count(enabled2, (p) => !p.source.endsWith("@inline")),
        error_count: errors.length,
        skill_count: commands.length,
        agent_count: agents.length,
        hook_count,
        mcp_count,
        lsp_count,
        ant_enabled_names: process.env.USER_TYPE === "ant" && enabled2.length > 0 ? enabled2.map((p) => p.name).sort().join(",") : undefined
      };
    } catch (error) {
      const errorObj = toError(error);
      logError(errorObj);
      logForDebugging(`Error loading plugins: ${error}`);
      setAppState((prevState) => {
        const existingLspErrors = prevState.plugins.errors.filter((e) => e.source === "lsp-manager" || e.source.startsWith("plugin:"));
        const newError = {
          type: "generic-error",
          source: "plugin-system",
          error: errorObj.message
        };
        return {
          ...prevState,
          plugins: {
            ...prevState.plugins,
            enabled: [],
            disabled: [],
            commands: [],
            errors: [...existingLspErrors, newError]
          }
        };
      });
      return {
        enabled_count: 0,
        disabled_count: 0,
        inline_count: 0,
        marketplace_count: 0,
        error_count: 1,
        skill_count: 0,
        agent_count: 0,
        hook_count: 0,
        mcp_count: 0,
        lsp_count: 0,
        load_failed: true,
        ant_enabled_names: undefined
      };
    }
  }, [setAppState, addNotification]);
  import_react.useEffect(() => {
    if (!enabled)
      return;
    initialPluginLoad().then((metrics) => {
      const { ant_enabled_names, ...baseMetrics } = metrics;
      const allMetrics = {
        ...baseMetrics,
        has_custom_plugin_cache_dir: !!process.env.CLAUDE_CODE_PLUGIN_CACHE_DIR
      };
      logEvent("tengu_plugins_loaded", {
        ...allMetrics,
        ...ant_enabled_names !== undefined && {
          enabled_names: ant_enabled_names
        }
      });
      logForDiagnosticsNoPII("info", "tengu_plugins_loaded", allMetrics);
    });
  }, [initialPluginLoad, enabled]);
  import_react.useEffect(() => {
    if (!enabled || !needsRefresh)
      return;
    addNotification({
      key: "plugin-reload-pending",
      text: "Plugins changed. Run /reload-plugins to activate.",
      color: "suggestion",
      priority: "low"
    });
  }, [enabled, needsRefresh, addNotification]);
}

export { useManagePlugins };
