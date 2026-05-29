// @bun
import {
  clearAllCaches,
  clearPluginCacheExclusions,
  getAgentDefinitionsWithOverrides,
  getPluginCommands,
  init_cacheUtils,
  init_loadAgentsDir,
  init_loadPluginCommands,
  init_loadPluginHooks,
  init_lspPluginIntegration,
  init_manager,
  init_mcpPluginIntegration,
  init_orphanedPluginFilter,
  init_pluginLoader,
  loadAllPlugins,
  loadPluginHooks,
  loadPluginLspServers,
  loadPluginMcpServers,
  reinitializeLspServerManager
} from "./chunk-ktw919wt.js";
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
  getOriginalCwd,
  init_state
} from "./chunk-j5xzpm59.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/plugins/refresh.ts
async function refreshActivePlugins(setAppState) {
  logForDebugging("refreshActivePlugins: clearing all plugin caches");
  clearAllCaches();
  clearPluginCacheExclusions();
  const pluginResult = await loadAllPlugins();
  const [pluginCommands, agentDefinitions] = await Promise.all([
    getPluginCommands(),
    getAgentDefinitionsWithOverrides(getOriginalCwd())
  ]);
  const { enabled, disabled, errors } = pluginResult;
  const [mcpCounts, lspCounts] = await Promise.all([
    Promise.all(enabled.map(async (p) => {
      if (p.mcpServers)
        return Object.keys(p.mcpServers).length;
      const servers = await loadPluginMcpServers(p, errors);
      if (servers)
        p.mcpServers = servers;
      return servers ? Object.keys(servers).length : 0;
    })),
    Promise.all(enabled.map(async (p) => {
      if (p.lspServers)
        return Object.keys(p.lspServers).length;
      const servers = await loadPluginLspServers(p, errors);
      if (servers)
        p.lspServers = servers;
      return servers ? Object.keys(servers).length : 0;
    }))
  ]);
  const mcp_count = mcpCounts.reduce((sum, n) => sum + n, 0);
  const lsp_count = lspCounts.reduce((sum, n) => sum + n, 0);
  setAppState((prev) => ({
    ...prev,
    plugins: {
      ...prev.plugins,
      enabled,
      disabled,
      commands: pluginCommands,
      errors: mergePluginErrors(prev.plugins.errors, errors),
      needsRefresh: false
    },
    agentDefinitions,
    mcp: {
      ...prev.mcp,
      pluginReconnectKey: prev.mcp.pluginReconnectKey + 1
    }
  }));
  reinitializeLspServerManager();
  let hook_load_failed = false;
  try {
    await loadPluginHooks();
  } catch (e) {
    hook_load_failed = true;
    logError(e);
    logForDebugging(`refreshActivePlugins: loadPluginHooks failed: ${errorMessage(e)}`);
  }
  const hook_count = enabled.reduce((sum, p) => {
    if (!p.hooksConfig)
      return sum;
    return sum + Object.values(p.hooksConfig).reduce((s, matchers) => s + (matchers?.reduce((h, m) => h + m.hooks.length, 0) ?? 0), 0);
  }, 0);
  logForDebugging(`refreshActivePlugins: ${enabled.length} enabled, ${pluginCommands.length} commands, ${agentDefinitions.allAgents.length} agents, ${hook_count} hooks, ${mcp_count} MCP, ${lsp_count} LSP`);
  return {
    enabled_count: enabled.length,
    disabled_count: disabled.length,
    command_count: pluginCommands.length,
    agent_count: agentDefinitions.allAgents.length,
    hook_count,
    mcp_count,
    lsp_count,
    error_count: errors.length + (hook_load_failed ? 1 : 0),
    agentDefinitions,
    pluginCommands
  };
}
function mergePluginErrors(existing, fresh) {
  const preserved = existing.filter((e) => e.source === "lsp-manager" || e.source.startsWith("plugin:"));
  const freshKeys = new Set(fresh.map(errorKey));
  const deduped = preserved.filter((e) => !freshKeys.has(errorKey(e)));
  return [...deduped, ...fresh];
}
function errorKey(e) {
  return e.type === "generic-error" ? `generic-error:${e.source}:${e.error}` : `${e.type}:${e.source}`;
}
var init_refresh = __esm(() => {
  init_state();
  init_manager();
  init_loadAgentsDir();
  init_debug();
  init_errors();
  init_log();
  init_cacheUtils();
  init_loadPluginCommands();
  init_loadPluginHooks();
  init_lspPluginIntegration();
  init_mcpPluginIntegration();
  init_orphanedPluginFilter();
  init_pluginLoader();
});

export { refreshActivePlugins, init_refresh };
