// @bun
import {
  ALLOWED_OFFICIAL_MARKETPLACE_NAMES,
  getSettings_DEPRECATED,
  init_schemas,
  init_settings1 as init_settings
} from "./chunk-1ghcng4e.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/plugins/builtinPlugins.ts
function registerBuiltinPlugin(definition) {
  BUILTIN_PLUGINS.set(definition.name, definition);
}
function isBuiltinPluginId(pluginId) {
  return pluginId.endsWith(`@${BUILTIN_MARKETPLACE_NAME}`);
}
function getBuiltinPluginDefinition(name) {
  return BUILTIN_PLUGINS.get(name);
}
function getBuiltinPlugins() {
  const settings = getSettings_DEPRECATED();
  const enabled = [];
  const disabled = [];
  for (const [name, definition] of BUILTIN_PLUGINS) {
    if (definition.isAvailable && !definition.isAvailable()) {
      continue;
    }
    const pluginId = `${name}@${BUILTIN_MARKETPLACE_NAME}`;
    const userSetting = settings?.enabledPlugins?.[pluginId];
    const isEnabled = userSetting !== undefined ? userSetting === true : definition.defaultEnabled ?? true;
    const plugin = {
      name,
      manifest: {
        name,
        description: definition.description,
        version: definition.version
      },
      path: BUILTIN_MARKETPLACE_NAME,
      source: pluginId,
      repository: pluginId,
      enabled: isEnabled,
      isBuiltin: true,
      hooksConfig: definition.hooks,
      mcpServers: definition.mcpServers
    };
    if (isEnabled) {
      enabled.push(plugin);
    } else {
      disabled.push(plugin);
    }
  }
  return { enabled, disabled };
}
function getBuiltinPluginSkillCommands() {
  const { enabled } = getBuiltinPlugins();
  const commands = [];
  for (const plugin of enabled) {
    const definition = BUILTIN_PLUGINS.get(plugin.name);
    if (!definition?.skills)
      continue;
    for (const skill of definition.skills) {
      commands.push(skillDefinitionToCommand(skill));
    }
  }
  return commands;
}
function skillDefinitionToCommand(definition) {
  return {
    type: "prompt",
    name: definition.name,
    description: definition.description,
    hasUserSpecifiedDescription: true,
    allowedTools: definition.allowedTools ?? [],
    argumentHint: definition.argumentHint,
    whenToUse: definition.whenToUse,
    model: definition.model,
    disableModelInvocation: definition.disableModelInvocation ?? false,
    userInvocable: definition.userInvocable ?? true,
    contentLength: 0,
    source: "bundled",
    loadedFrom: "bundled",
    hooks: definition.hooks,
    context: definition.context,
    agent: definition.agent,
    isEnabled: definition.isEnabled ?? (() => true),
    isHidden: !(definition.userInvocable ?? true),
    progressMessage: "running",
    getPromptForCommand: definition.getPromptForCommand
  };
}
var BUILTIN_PLUGINS, BUILTIN_MARKETPLACE_NAME = "builtin";
var init_builtinPlugins = __esm(() => {
  init_settings();
  BUILTIN_PLUGINS = new Map;
});

// src/utils/plugins/pluginIdentifier.ts
function parsePluginIdentifier(plugin) {
  if (plugin.includes("@")) {
    const parts = plugin.split("@");
    return { name: parts[0] || "", marketplace: parts[1] };
  }
  return { name: plugin };
}
function isOfficialMarketplaceName(marketplace) {
  return marketplace !== undefined && ALLOWED_OFFICIAL_MARKETPLACE_NAMES.has(marketplace.toLowerCase());
}
function scopeToSettingSource(scope) {
  if (scope === "managed") {
    throw new Error("Cannot install plugins to managed scope");
  }
  return SCOPE_TO_EDITABLE_SOURCE[scope];
}
function settingSourceToScope(source) {
  return SETTING_SOURCE_TO_SCOPE[source];
}
var SETTING_SOURCE_TO_SCOPE, SCOPE_TO_EDITABLE_SOURCE;
var init_pluginIdentifier = __esm(() => {
  init_schemas();
  SETTING_SOURCE_TO_SCOPE = {
    policySettings: "managed",
    userSettings: "user",
    projectSettings: "project",
    localSettings: "local",
    flagSettings: "flag"
  };
  SCOPE_TO_EDITABLE_SOURCE = {
    user: "userSettings",
    project: "projectSettings",
    local: "localSettings"
  };
});

// src/utils/xml.ts
function escapeXml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function escapeXmlAttr(s) {
  return escapeXml(s).replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
var init_xml = () => {};

export { BUILTIN_MARKETPLACE_NAME, registerBuiltinPlugin, isBuiltinPluginId, getBuiltinPluginDefinition, getBuiltinPlugins, getBuiltinPluginSkillCommands, init_builtinPlugins, SETTING_SOURCE_TO_SCOPE, parsePluginIdentifier, isOfficialMarketplaceName, scopeToSettingSource, settingSourceToScope, init_pluginIdentifier, escapeXml, escapeXmlAttr, init_xml };
