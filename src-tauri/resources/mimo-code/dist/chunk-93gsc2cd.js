// @bun
import {
  formatInstallCount,
  getInstallCounts,
  init_installCounts,
  init_parseMarketplaceInput,
  init_validatePlugin,
  parseMarketplaceInput,
  validateManifest
} from "./chunk-s62q65mb.js";
import {
  init_MCPConnectionManager,
  useMcpReconnect,
  useMcpToggleEnabled
} from "./chunk-sd2xvsn5.js";
import {
  getFlaggedPlugins,
  init_pluginFlagging,
  markFlaggedPluginsSeen,
  removeFlaggedPlugin
} from "./chunk-qff5yg0r.js";
import {
  init_pluginAutoupdate,
  updatePluginsForMarketplaces
} from "./chunk-6e7sc1s6.js";
import {
  disablePluginOp,
  enablePluginOp,
  getPluginInstallationFromV2,
  init_pluginOperations,
  isInstallableScope,
  isPluginEnabledAtProjectScope,
  uninstallPluginOp,
  updatePluginOp
} from "./chunk-p111txfv.js";
import {
  getPluginEditableScopes,
  init_pluginStartupCheck
} from "./chunk-9gpajj6e.js";
import {
  init_SearchBox
} from "./chunk-a8d3h0xq.js";
import {
  init_useSearchInput,
  useSearchInput
} from "./chunk-p6jb8wcb.js";
import {
  AuthenticationCancelledError,
  ConfigurableShortcutHint,
  OFFICIAL_MARKETPLACE_NAME,
  Select,
  Spinner,
  TextInput,
  addMarketplaceSource,
  clearAllCaches,
  clearServerCache,
  createPluginId,
  describeMcpConfigFilePath,
  detectEmptyMarketplaceReason,
  excludeCommandsByServer,
  excludeResourcesByServer,
  excludeToolsByServer,
  filterMcpPromptsByServer,
  filterToolsByServer,
  formatFailureDetails,
  formatMarketplaceLoadingErrors,
  getMarketplace,
  getMarketplaceSourceDisplay,
  getMcpConfigByName,
  getPluginDataDirSize,
  getPluginErrorMessage,
  getPluginTrustMessage,
  getUnconfiguredChannels,
  getUnconfiguredOptions,
  init_AppState,
  init_ConfigurableShortcutHint,
  init_CustomSelect,
  init_Spinner,
  init_TextInput,
  init_auth as init_auth2,
  init_cacheUtils,
  init_client,
  init_config as init_config2,
  init_installedPluginsManager,
  init_marketplaceHelpers,
  init_marketplaceManager,
  init_mcpPluginIntegration,
  init_mcpbHandler,
  init_officialMarketplace,
  init_plugin,
  init_pluginDirectories,
  init_pluginInstallationHelpers,
  init_pluginLoader,
  init_pluginOptionsStorage,
  init_pluginPolicy,
  init_useTerminalSize,
  init_utils,
  installPluginFromMarketplace,
  isMcpbSource,
  isPluginBlockedByPolicy,
  isPluginGloballyInstalled,
  isPluginInstalled,
  loadAllPlugins,
  loadInstalledPluginsV2,
  loadKnownMarketplacesConfig,
  loadMarketplacesWithGracefulDegradation,
  loadMcpServerUserConfig,
  loadMcpbFile,
  loadPluginOptions,
  performMCPOAuthFlow,
  pluginDataDirPath,
  refreshMarketplace,
  removeMarketplaceSource,
  revokeServerTokens,
  saveMarketplaceToSettings,
  saveMcpServerUserConfig,
  savePluginOptions,
  setMarketplaceAutoUpdate,
  useAppState,
  useSetAppState
} from "./chunk-ktw919wt.js";
import {
  getBuiltinPluginDefinition,
  init_builtinPlugins,
  init_pluginIdentifier,
  parsePluginIdentifier
} from "./chunk-0rstde44.js";
import {
  init_useExitOnCtrlCDWithKeybindings,
  useExitOnCtrlCDWithKeybindings
} from "./chunk-pfhyp451.js";
import {
  init_useKeybinding
} from "./chunk-dsnwry8r.js";
import {
  init_browser,
  openBrowser
} from "./chunk-6dj3cf9s.js";
import {
  capitalize,
  extractMcpToolDisplayName,
  getMcpDisplayName,
  getOauthAccountInfo,
  getSettingsForSource,
  getSettings_DEPRECATED,
  init_auth,
  init_config1 as init_config,
  init_mcpStringUtils,
  init_schemas,
  init_settings1 as init_settings,
  init_stringUtils,
  isMarketplaceAutoUpdate,
  plural,
  shouldSkipPluginAutoupdate,
  updateSettingsForSource
} from "./chunk-1ghcng4e.js";
import {
  count,
  init_array
} from "./chunk-zwarn9h7.js";
import {
  getOauthConfig,
  init_oauth
} from "./chunk-rh5a2rg9.js";
import {
  init_truncate,
  truncateToWidth
} from "./chunk-x5hyyhqf.js";
import {
  Byline,
  Dialog,
  KeyboardShortcutHint,
  Link,
  Pane,
  SearchBox,
  Tab,
  Tabs,
  ThemedBox_default,
  ThemedText,
  color,
  init_src,
  setClipboard,
  stringWidth,
  useKeybinding,
  useKeybindings,
  useTerminalFocus,
  useTerminalSize,
  useTheme,
  use_input_default
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
  init_log,
  logError,
  logMCPDebug
} from "./chunk-w5ahy59y.js";
import {
  figures_default,
  init_figures
} from "./chunk-qajrkk97.js";
import {
  errorMessage,
  init_debug,
  init_errors,
  init_slowOperations,
  jsonParse,
  logForDebugging,
  toError
} from "./chunk-rpbc3b7k.js";
import {
  init_envUtils,
  isEnvTruthy
} from "./chunk-hxhwzgnn.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/commands/plugin/AddMarketplace.tsx
function AddMarketplace({
  inputValue,
  setInputValue,
  cursorOffset,
  setCursorOffset,
  error,
  setError,
  result,
  setResult,
  setViewState,
  onAddComplete,
  cliMode = false
}) {
  const hasAttemptedAutoAdd = import_react.useRef(false);
  const [isLoading, setLoading] = import_react.useState(false);
  const [progressMessage, setProgressMessage] = import_react.useState("");
  const handleAdd = async () => {
    const input = inputValue.trim();
    if (!input) {
      setError("Please enter a marketplace source");
      return;
    }
    const parsed = await parseMarketplaceInput(input);
    if (!parsed) {
      setError("Invalid marketplace source format. Try: owner/repo, https://..., or ./path");
      return;
    }
    if ("error" in parsed) {
      setError(parsed.error);
      return;
    }
    setError(null);
    try {
      setLoading(true);
      setProgressMessage("");
      const { name, resolvedSource } = await addMarketplaceSource(parsed, (message) => {
        setProgressMessage(message);
      });
      saveMarketplaceToSettings(name, { source: resolvedSource });
      clearAllCaches();
      let sourceType = parsed.source;
      if (parsed.source === "github") {
        sourceType = parsed.repo;
      }
      logEvent("tengu_marketplace_added", {
        source_type: sourceType
      });
      if (onAddComplete) {
        await onAddComplete();
      }
      setProgressMessage("");
      setLoading(false);
      if (cliMode) {
        setResult(`Successfully added marketplace: ${name}`);
      } else {
        setViewState({ type: "browse-marketplace", targetMarketplace: name });
      }
    } catch (err) {
      const error2 = toError(err);
      logError(error2);
      setError(error2.message);
      setProgressMessage("");
      setLoading(false);
      if (cliMode) {
        setResult(`Error: ${error2.message}`);
      } else {
        setResult(null);
      }
    }
  };
  import_react.useEffect(() => {
    if (inputValue && !hasAttemptedAutoAdd.current && !error && !result) {
      hasAttemptedAutoAdd.current = true;
      handleAdd();
    }
  }, []);
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        paddingX: 1,
        borderStyle: "round",
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            marginBottom: 1,
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              bold: true,
              children: "Add Marketplace"
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                children: "Enter marketplace source:"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                dimColor: true,
                children: "Examples:"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                dimColor: true,
                children: " \xB7 owner/repo (GitHub)"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                dimColor: true,
                children: " \xB7 git@github.com:owner/repo.git (SSH)"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                dimColor: true,
                children: " \xB7 https://example.com/marketplace.json"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                dimColor: true,
                children: " \xB7 ./path/to/marketplace"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
                marginTop: 1,
                children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(TextInput, {
                  value: inputValue,
                  onChange: setInputValue,
                  onSubmit: handleAdd,
                  columns: 80,
                  cursorOffset,
                  onChangeCursorOffset: setCursorOffset,
                  focus: true,
                  showCursor: true
                }, undefined, false, undefined, this)
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          isLoading && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            marginTop: 1,
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Spinner, {}, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                children: progressMessage || "Adding marketplace to configuration\u2026"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          error && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            marginTop: 1,
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              color: "error",
              children: error
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this),
          result && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            marginTop: 1,
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              children: result
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        marginLeft: 3,
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          dimColor: true,
          italic: true,
          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Byline, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(KeyboardShortcutHint, {
                shortcut: "Enter",
                action: "add"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ConfigurableShortcutHint, {
                action: "confirm:no",
                context: "Settings",
                fallback: "Esc",
                description: "cancel"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var import_react, jsx_dev_runtime;
var init_AddMarketplace = __esm(() => {
  init_analytics();
  init_ConfigurableShortcutHint();
  init_src();
  init_Spinner();
  init_TextInput();
  init_src();
  init_errors();
  init_log();
  init_cacheUtils();
  init_marketplaceManager();
  init_parseMarketplaceInput();
  import_react = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});

// src/commands/plugin/PluginOptionsDialog.tsx
function buildFinalValues(fields, collected, configSchema, initialValues) {
  const finalValues = {};
  for (const fieldKey of fields) {
    const schema = configSchema[fieldKey];
    const value = collected[fieldKey] ?? "";
    if (schema?.sensitive === true && value === "" && initialValues?.[fieldKey] !== undefined) {
      continue;
    }
    if (schema?.type === "number") {
      if (value.trim() === "")
        continue;
      const num = Number(value);
      finalValues[fieldKey] = Number.isNaN(num) ? value : num;
    } else if (schema?.type === "boolean") {
      finalValues[fieldKey] = isEnvTruthy(value);
    } else {
      finalValues[fieldKey] = value;
    }
  }
  return finalValues;
}
function PluginOptionsDialog({
  title,
  subtitle,
  configSchema,
  initialValues,
  onSave,
  onCancel
}) {
  const fields = Object.keys(configSchema);
  const initialFor = import_react2.useCallback((key) => {
    if (configSchema[key]?.sensitive === true)
      return "";
    const v = initialValues?.[key];
    return v === undefined ? "" : String(v);
  }, [configSchema, initialValues]);
  const [currentFieldIndex, setCurrentFieldIndex] = import_react2.useState(0);
  const [values, setValues] = import_react2.useState({});
  const [currentInput, setCurrentInput] = import_react2.useState(() => fields[0] ? initialFor(fields[0]) : "");
  const currentField = fields[currentFieldIndex];
  const fieldSchema = currentField ? configSchema[currentField] : null;
  useKeybinding("confirm:no", onCancel, { context: "Settings" });
  const handleNextField = import_react2.useCallback(() => {
    if (currentFieldIndex < fields.length - 1 && currentField) {
      setValues((prev) => ({ ...prev, [currentField]: currentInput }));
      setCurrentFieldIndex((prev) => prev + 1);
      const nextKey = fields[currentFieldIndex + 1];
      setCurrentInput(nextKey ? initialFor(nextKey) : "");
    }
  }, [currentFieldIndex, fields, currentField, currentInput, initialFor]);
  const handleConfirm = import_react2.useCallback(() => {
    if (!currentField)
      return;
    const newValues = { ...values, [currentField]: currentInput };
    if (currentFieldIndex === fields.length - 1) {
      onSave(buildFinalValues(fields, newValues, configSchema, initialValues));
    } else {
      setValues(newValues);
      setCurrentFieldIndex((prev) => prev + 1);
      const nextKey = fields[currentFieldIndex + 1];
      setCurrentInput(nextKey ? initialFor(nextKey) : "");
    }
  }, [
    currentField,
    values,
    currentInput,
    currentFieldIndex,
    fields,
    configSchema,
    onSave,
    initialFor,
    initialValues
  ]);
  useKeybindings({
    "confirm:nextField": handleNextField,
    "confirm:yes": handleConfirm
  }, { context: "Confirmation" });
  use_input_default((char, key) => {
    if (key.backspace || key.delete) {
      setCurrentInput((prev) => prev.slice(0, -1));
      return;
    }
    if (char && !key.ctrl && !key.meta && !key.tab && !key.return) {
      setCurrentInput((prev) => prev + char);
    }
  });
  if (!fieldSchema || !currentField) {
    return null;
  }
  const isSensitive = fieldSchema.sensitive === true;
  const isRequired = fieldSchema.required === true;
  const displayValue = isSensitive ? "*".repeat(stringWidth(currentInput)) : currentInput;
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Dialog, {
    title,
    subtitle,
    onCancel,
    isCancelActive: false,
    children: [
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        children: [
          /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
            bold: true,
            children: [
              fieldSchema.title || currentField,
              isRequired && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                color: "error",
                children: " *"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          fieldSchema.description && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
            dimColor: true,
            children: fieldSchema.description
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
            marginTop: 1,
            children: [
              /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                children: [
                  figures_default.pointerSmall,
                  " "
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                children: displayValue
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                children: "\u2588"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        children: [
          /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
            dimColor: true,
            children: [
              "Field ",
              currentFieldIndex + 1,
              " of ",
              fields.length
            ]
          }, undefined, true, undefined, this),
          currentFieldIndex < fields.length - 1 && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
            dimColor: true,
            children: "Tab: Next field \xB7 Enter: Save and continue"
          }, undefined, false, undefined, this),
          currentFieldIndex === fields.length - 1 && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
            dimColor: true,
            children: "Enter: Save configuration"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var import_react2, jsx_dev_runtime2;
var init_PluginOptionsDialog = __esm(() => {
  init_figures();
  init_src();
  init_src();
  init_useKeybinding();
  init_envUtils();
  import_react2 = __toESM(require_react(), 1);
  jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/commands/plugin/PluginOptionsFlow.tsx
async function findPluginOptionsTarget(pluginId) {
  const { enabled, disabled } = await loadAllPlugins();
  return [...enabled, ...disabled].find((p) => p.repository === pluginId || p.source === pluginId);
}
function PluginOptionsFlow({
  plugin,
  pluginId,
  onDone
}) {
  const [steps] = React2.useState(() => {
    const result = [];
    const unconfigured = getUnconfiguredOptions(plugin);
    if (Object.keys(unconfigured).length > 0) {
      result.push({
        key: "top-level",
        title: `Configure ${plugin.name}`,
        subtitle: "Plugin options",
        schema: unconfigured,
        load: () => loadPluginOptions(pluginId),
        save: (values) => savePluginOptions(pluginId, values, plugin.manifest.userConfig)
      });
    }
    const channels = getUnconfiguredChannels(plugin);
    for (const channel of channels) {
      result.push({
        key: `channel:${channel.server}`,
        title: `Configure ${channel.displayName}`,
        subtitle: `Plugin: ${plugin.name}`,
        schema: channel.configSchema,
        load: () => loadMcpServerUserConfig(pluginId, channel.server) ?? undefined,
        save: (values) => saveMcpServerUserConfig(pluginId, channel.server, values, channel.configSchema)
      });
    }
    return result;
  });
  const [index, setIndex] = React2.useState(0);
  const onDoneRef = React2.useRef(onDone);
  onDoneRef.current = onDone;
  React2.useEffect(() => {
    if (steps.length === 0) {
      onDoneRef.current("skipped");
    }
  }, [steps.length]);
  if (steps.length === 0) {
    return null;
  }
  const current = steps[index];
  function handleSave(values) {
    try {
      current.save(values);
    } catch (err) {
      onDone("error", errorMessage(err));
      return;
    }
    const next = index + 1;
    if (next < steps.length) {
      setIndex(next);
    } else {
      onDone("configured");
    }
  }
  return /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(PluginOptionsDialog, {
    title: current.title,
    subtitle: current.subtitle,
    configSchema: current.schema,
    initialValues: current.load(),
    onSave: handleSave,
    onCancel: () => onDone("skipped")
  }, current.key, false, undefined, this);
}
var React2, jsx_dev_runtime3;
var init_PluginOptionsFlow = __esm(() => {
  init_errors();
  init_mcpbHandler();
  init_mcpPluginIntegration();
  init_pluginLoader();
  init_pluginOptionsStorage();
  init_PluginOptionsDialog();
  React2 = __toESM(require_react(), 1);
  jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/commands/plugin/PluginTrustWarning.tsx
function PluginTrustWarning() {
  const customMessage = getPluginTrustMessage();
  return /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedBox_default, {
    marginBottom: 1,
    children: [
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
        color: "claude",
        children: [
          figures_default.warning,
          " "
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
        dimColor: true,
        italic: true,
        children: [
          "Make sure you trust a plugin before installing, updating, or using it. Anthropic does not control what MCP servers, files, or other software are included in plugins and cannot verify that they will work as intended or that they won't change. See each plugin's homepage for more information.",
          customMessage ? ` ${customMessage}` : ""
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var jsx_dev_runtime4;
var init_PluginTrustWarning = __esm(() => {
  init_figures();
  init_src();
  init_marketplaceHelpers();
  jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/commands/plugin/pluginDetailsHelpers.tsx
function extractGitHubRepo(plugin) {
  const isGitHub = plugin.entry.source && typeof plugin.entry.source === "object" && "source" in plugin.entry.source && plugin.entry.source.source === "github";
  if (isGitHub && typeof plugin.entry.source === "object" && "repo" in plugin.entry.source) {
    return plugin.entry.source.repo;
  }
  return null;
}
function buildPluginDetailsMenuOptions(hasHomepage, githubRepo) {
  const options = [
    { label: "Install for you (user scope)", action: "install-user" },
    {
      label: "Install for all collaborators on this repository (project scope)",
      action: "install-project"
    },
    {
      label: "Install for you, in this repo only (local scope)",
      action: "install-local"
    }
  ];
  if (hasHomepage) {
    options.push({ label: "Open homepage", action: "homepage" });
  }
  if (githubRepo) {
    options.push({ label: "View on GitHub", action: "github" });
  }
  options.push({ label: "Back to plugin list", action: "back" });
  return options;
}
function PluginSelectionKeyHint({
  hasSelection
}) {
  return /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedBox_default, {
    marginTop: 1,
    children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
      dimColor: true,
      italic: true,
      children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Byline, {
        children: [
          hasSelection && /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ConfigurableShortcutHint, {
            action: "plugin:install",
            context: "Plugin",
            fallback: "i",
            description: "install",
            bold: true
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ConfigurableShortcutHint, {
            action: "plugin:toggle",
            context: "Plugin",
            fallback: "Space",
            description: "toggle"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ConfigurableShortcutHint, {
            action: "select:accept",
            context: "Select",
            fallback: "Enter",
            description: "details"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ConfigurableShortcutHint, {
            action: "confirm:no",
            context: "Confirmation",
            fallback: "Esc",
            description: "back"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
var jsx_dev_runtime5;
var init_pluginDetailsHelpers = __esm(() => {
  init_ConfigurableShortcutHint();
  init_src();
  jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/commands/plugin/usePagination.ts
function usePagination({
  totalItems,
  maxVisible = DEFAULT_MAX_VISIBLE,
  selectedIndex = 0
}) {
  const needsPagination = totalItems > maxVisible;
  const scrollOffsetRef = import_react3.useRef(0);
  const scrollOffset = import_react3.useMemo(() => {
    if (!needsPagination)
      return 0;
    const prevOffset = scrollOffsetRef.current;
    if (selectedIndex < prevOffset) {
      scrollOffsetRef.current = selectedIndex;
      return selectedIndex;
    }
    if (selectedIndex >= prevOffset + maxVisible) {
      const newOffset = selectedIndex - maxVisible + 1;
      scrollOffsetRef.current = newOffset;
      return newOffset;
    }
    const maxOffset = Math.max(0, totalItems - maxVisible);
    const clampedOffset = Math.min(prevOffset, maxOffset);
    scrollOffsetRef.current = clampedOffset;
    return clampedOffset;
  }, [selectedIndex, maxVisible, needsPagination, totalItems]);
  const startIndex = scrollOffset;
  const endIndex = Math.min(scrollOffset + maxVisible, totalItems);
  const getVisibleItems = import_react3.useCallback((items) => {
    if (!needsPagination)
      return items;
    return items.slice(startIndex, endIndex);
  }, [needsPagination, startIndex, endIndex]);
  const toActualIndex = import_react3.useCallback((visibleIndex) => {
    return startIndex + visibleIndex;
  }, [startIndex]);
  const isOnCurrentPage = import_react3.useCallback((actualIndex) => {
    return actualIndex >= startIndex && actualIndex < endIndex;
  }, [startIndex, endIndex]);
  const goToPage = import_react3.useCallback((_page) => {}, []);
  const nextPage = import_react3.useCallback(() => {}, []);
  const prevPage = import_react3.useCallback(() => {}, []);
  const handleSelectionChange = import_react3.useCallback((newIndex, setSelectedIndex) => {
    const clampedIndex = Math.max(0, Math.min(newIndex, totalItems - 1));
    setSelectedIndex(clampedIndex);
  }, [totalItems]);
  const handlePageNavigation = import_react3.useCallback((_direction, _setSelectedIndex) => {
    return false;
  }, []);
  const totalPages = Math.max(1, Math.ceil(totalItems / maxVisible));
  const currentPage = Math.floor(scrollOffset / maxVisible);
  return {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    needsPagination,
    pageSize: maxVisible,
    getVisibleItems,
    toActualIndex,
    isOnCurrentPage,
    goToPage,
    nextPage,
    prevPage,
    handleSelectionChange,
    handlePageNavigation,
    scrollPosition: {
      current: selectedIndex + 1,
      total: totalItems,
      canScrollUp: scrollOffset > 0,
      canScrollDown: scrollOffset + maxVisible < totalItems
    }
  };
}
var import_react3, DEFAULT_MAX_VISIBLE = 5;
var init_usePagination = __esm(() => {
  import_react3 = __toESM(require_react(), 1);
});

// src/commands/plugin/BrowseMarketplace.tsx
function BrowseMarketplace({
  error,
  setError,
  result: _result,
  setResult,
  setViewState: setParentViewState,
  onInstallComplete,
  targetMarketplace,
  targetPlugin
}) {
  const [viewState, setViewState] = import_react4.useState("marketplace-list");
  const [selectedMarketplace, setSelectedMarketplace] = import_react4.useState(null);
  const [selectedPlugin, setSelectedPlugin] = import_react4.useState(null);
  const [marketplaces, setMarketplaces] = import_react4.useState([]);
  const [availablePlugins, setAvailablePlugins] = import_react4.useState([]);
  const [loading, setLoading] = import_react4.useState(true);
  const [installCounts, setInstallCounts] = import_react4.useState(null);
  const [selectedIndex, setSelectedIndex] = import_react4.useState(0);
  const [selectedForInstall, setSelectedForInstall] = import_react4.useState(new Set);
  const [installingPlugins, setInstallingPlugins] = import_react4.useState(new Set);
  const pagination = usePagination({
    totalItems: availablePlugins.length,
    selectedIndex
  });
  const [detailsMenuIndex, setDetailsMenuIndex] = import_react4.useState(0);
  const [isInstalling, setIsInstalling] = import_react4.useState(false);
  const [installError, setInstallError] = import_react4.useState(null);
  const [warning, setWarning] = import_react4.useState(null);
  const handleBack = React3.useCallback(() => {
    if (viewState === "plugin-list") {
      if (targetMarketplace) {
        setParentViewState({
          type: "manage-marketplaces",
          targetMarketplace
        });
      } else if (marketplaces.length === 1) {
        setParentViewState({ type: "menu" });
      } else {
        setViewState("marketplace-list");
        setSelectedMarketplace(null);
        setSelectedForInstall(new Set);
      }
    } else if (viewState === "plugin-details") {
      setViewState("plugin-list");
      setSelectedPlugin(null);
    } else {
      setParentViewState({ type: "menu" });
    }
  }, [viewState, targetMarketplace, setParentViewState, marketplaces.length]);
  useKeybinding("confirm:no", handleBack, { context: "Confirmation" });
  import_react4.useEffect(() => {
    async function loadMarketplaceData() {
      try {
        const config = await loadKnownMarketplacesConfig();
        const { marketplaces: marketplaces2, failures } = await loadMarketplacesWithGracefulDegradation(config);
        const marketplaceInfos = [];
        for (const {
          name,
          config: marketplaceConfig,
          data: marketplace
        } of marketplaces2) {
          if (marketplace) {
            const installedFromThisMarketplace = count(marketplace.plugins, (plugin) => isPluginInstalled(createPluginId(plugin.name, name)));
            marketplaceInfos.push({
              name,
              totalPlugins: marketplace.plugins.length,
              installedCount: installedFromThisMarketplace,
              source: getMarketplaceSourceDisplay(marketplaceConfig.source)
            });
          }
        }
        marketplaceInfos.sort((a, b) => {
          if (a.name === "claude-plugin-directory")
            return -1;
          if (b.name === "claude-plugin-directory")
            return 1;
          return 0;
        });
        setMarketplaces(marketplaceInfos);
        const successCount = count(marketplaces2, (m) => m.data !== null);
        const errorResult = formatMarketplaceLoadingErrors(failures, successCount);
        if (errorResult) {
          if (errorResult.type === "warning") {
            setWarning(errorResult.message + ". Showing available marketplaces.");
          } else {
            throw new Error(errorResult.message);
          }
        }
        if (marketplaceInfos.length === 1 && !targetMarketplace && !targetPlugin) {
          const singleMarketplace = marketplaceInfos[0];
          if (singleMarketplace) {
            setSelectedMarketplace(singleMarketplace.name);
            setViewState("plugin-list");
          }
        }
        if (targetPlugin) {
          let foundPlugin = null;
          let foundMarketplace = null;
          for (const [name] of Object.entries(config)) {
            const marketplace = await getMarketplace(name);
            if (marketplace) {
              const plugin = marketplace.plugins.find((p) => p.name === targetPlugin);
              if (plugin) {
                const pluginId = createPluginId(plugin.name, name);
                foundPlugin = {
                  entry: plugin,
                  marketplaceName: name,
                  pluginId,
                  isInstalled: isPluginGloballyInstalled(pluginId)
                };
                foundMarketplace = name;
                break;
              }
            }
          }
          if (foundPlugin && foundMarketplace) {
            const pluginId = foundPlugin.pluginId;
            const globallyInstalled = isPluginGloballyInstalled(pluginId);
            if (globallyInstalled) {
              setError(`Plugin '${pluginId}' is already installed globally. Use '/plugin' to manage existing plugins.`);
            } else {
              setSelectedMarketplace(foundMarketplace);
              setSelectedPlugin(foundPlugin);
              setViewState("plugin-details");
            }
          } else {
            setError(`Plugin "${targetPlugin}" not found in any marketplace`);
          }
        } else if (targetMarketplace) {
          const marketplaceExists = marketplaceInfos.some((m) => m.name === targetMarketplace);
          if (marketplaceExists) {
            setSelectedMarketplace(targetMarketplace);
            setViewState("plugin-list");
          } else {
            setError(`Marketplace "${targetMarketplace}" not found`);
          }
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load marketplaces");
      } finally {
        setLoading(false);
      }
    }
    loadMarketplaceData();
  }, [setError, targetMarketplace, targetPlugin]);
  import_react4.useEffect(() => {
    if (!selectedMarketplace)
      return;
    let cancelled = false;
    async function loadPluginsForMarketplace(marketplaceName) {
      setLoading(true);
      try {
        const marketplace = await getMarketplace(marketplaceName);
        if (cancelled)
          return;
        if (!marketplace) {
          throw new Error(`Failed to load marketplace: ${marketplaceName}`);
        }
        const installablePlugins = [];
        for (const entry of marketplace.plugins) {
          const pluginId = createPluginId(entry.name, marketplaceName);
          if (isPluginBlockedByPolicy(pluginId))
            continue;
          installablePlugins.push({
            entry,
            marketplaceName,
            pluginId,
            isInstalled: isPluginGloballyInstalled(pluginId)
          });
        }
        try {
          const counts = await getInstallCounts();
          if (cancelled)
            return;
          setInstallCounts(counts);
          if (counts) {
            installablePlugins.sort((a, b) => {
              const countA = counts.get(a.pluginId) ?? 0;
              const countB = counts.get(b.pluginId) ?? 0;
              if (countA !== countB)
                return countB - countA;
              return a.entry.name.localeCompare(b.entry.name);
            });
          } else {
            installablePlugins.sort((a, b) => a.entry.name.localeCompare(b.entry.name));
          }
        } catch (error2) {
          if (cancelled)
            return;
          logForDebugging(`Failed to fetch install counts: ${errorMessage(error2)}`);
          installablePlugins.sort((a, b) => a.entry.name.localeCompare(b.entry.name));
        }
        setAvailablePlugins(installablePlugins);
        setSelectedIndex(0);
        setSelectedForInstall(new Set);
      } catch (err) {
        if (cancelled)
          return;
        setError(err instanceof Error ? err.message : "Failed to load plugins");
      } finally {
        setLoading(false);
      }
    }
    loadPluginsForMarketplace(selectedMarketplace);
    return () => {
      cancelled = true;
    };
  }, [selectedMarketplace, setError]);
  const installSelectedPlugins = async () => {
    if (selectedForInstall.size === 0)
      return;
    const pluginsToInstall = availablePlugins.filter((p) => selectedForInstall.has(p.pluginId));
    setInstallingPlugins(new Set(pluginsToInstall.map((p) => p.pluginId)));
    let successCount = 0;
    let failureCount = 0;
    const newFailedPlugins = [];
    for (const plugin of pluginsToInstall) {
      const result = await installPluginFromMarketplace({
        pluginId: plugin.pluginId,
        entry: plugin.entry,
        marketplaceName: plugin.marketplaceName,
        scope: "user"
      });
      if (result.success) {
        successCount++;
      } else {
        failureCount++;
        newFailedPlugins.push({
          name: plugin.entry.name,
          reason: result.error
        });
      }
    }
    setInstallingPlugins(new Set);
    setSelectedForInstall(new Set);
    clearAllCaches();
    if (failureCount === 0) {
      const message = `\u2713 Installed ${successCount} ${plural(successCount, "plugin")}. ` + `Run /reload-plugins to activate.`;
      setResult(message);
    } else if (successCount === 0) {
      setError(`Failed to install: ${formatFailureDetails(newFailedPlugins, true)}`);
    } else {
      const message = `\u2713 Installed ${successCount} of ${successCount + failureCount} plugins. ` + `Failed: ${formatFailureDetails(newFailedPlugins, false)}. ` + `Run /reload-plugins to activate successfully installed plugins.`;
      setResult(message);
    }
    if (successCount > 0) {
      if (onInstallComplete) {
        await onInstallComplete();
      }
    }
    setParentViewState({ type: "menu" });
  };
  const handleSinglePluginInstall = async (plugin, scope = "user") => {
    setIsInstalling(true);
    setInstallError(null);
    const result = await installPluginFromMarketplace({
      pluginId: plugin.pluginId,
      entry: plugin.entry,
      marketplaceName: plugin.marketplaceName,
      scope
    });
    if (result.success) {
      const loaded = await findPluginOptionsTarget(plugin.pluginId);
      if (loaded) {
        setIsInstalling(false);
        setViewState({
          type: "plugin-options",
          plugin: loaded,
          pluginId: plugin.pluginId
        });
        return;
      }
      setResult(result.message);
      if (onInstallComplete) {
        await onInstallComplete();
      }
      setParentViewState({ type: "menu" });
    } else {
      setIsInstalling(false);
      setInstallError(result.error);
    }
  };
  import_react4.useEffect(() => {
    if (error) {
      setResult(error);
    }
  }, [error, setResult]);
  useKeybindings({
    "select:previous": () => {
      if (selectedIndex > 0) {
        setSelectedIndex(selectedIndex - 1);
      }
    },
    "select:next": () => {
      if (selectedIndex < marketplaces.length - 1) {
        setSelectedIndex(selectedIndex + 1);
      }
    },
    "select:accept": () => {
      const marketplace = marketplaces[selectedIndex];
      if (marketplace) {
        setSelectedMarketplace(marketplace.name);
        setViewState("plugin-list");
      }
    }
  }, { context: "Select", isActive: viewState === "marketplace-list" });
  useKeybindings({
    "select:previous": () => {
      if (selectedIndex > 0) {
        pagination.handleSelectionChange(selectedIndex - 1, setSelectedIndex);
      }
    },
    "select:next": () => {
      if (selectedIndex < availablePlugins.length - 1) {
        pagination.handleSelectionChange(selectedIndex + 1, setSelectedIndex);
      }
    },
    "select:accept": () => {
      if (selectedIndex === availablePlugins.length && selectedForInstall.size > 0) {
        installSelectedPlugins();
      } else if (selectedIndex < availablePlugins.length) {
        const plugin = availablePlugins[selectedIndex];
        if (plugin) {
          if (plugin.isInstalled) {
            setParentViewState({
              type: "manage-plugins",
              targetPlugin: plugin.entry.name,
              targetMarketplace: plugin.marketplaceName
            });
          } else {
            setSelectedPlugin(plugin);
            setViewState("plugin-details");
            setDetailsMenuIndex(0);
            setInstallError(null);
          }
        }
      }
    }
  }, { context: "Select", isActive: viewState === "plugin-list" });
  useKeybindings({
    "plugin:toggle": () => {
      if (selectedIndex < availablePlugins.length) {
        const plugin = availablePlugins[selectedIndex];
        if (plugin && !plugin.isInstalled) {
          const newSelection = new Set(selectedForInstall);
          if (newSelection.has(plugin.pluginId)) {
            newSelection.delete(plugin.pluginId);
          } else {
            newSelection.add(plugin.pluginId);
          }
          setSelectedForInstall(newSelection);
        }
      }
    },
    "plugin:install": () => {
      if (selectedForInstall.size > 0) {
        installSelectedPlugins();
      }
    }
  }, { context: "Plugin", isActive: viewState === "plugin-list" });
  const detailsMenuOptions = React3.useMemo(() => {
    if (!selectedPlugin)
      return [];
    const hasHomepage = selectedPlugin.entry.homepage;
    const githubRepo = extractGitHubRepo(selectedPlugin);
    return buildPluginDetailsMenuOptions(hasHomepage, githubRepo);
  }, [selectedPlugin]);
  useKeybindings({
    "select:previous": () => {
      if (detailsMenuIndex > 0) {
        setDetailsMenuIndex(detailsMenuIndex - 1);
      }
    },
    "select:next": () => {
      if (detailsMenuIndex < detailsMenuOptions.length - 1) {
        setDetailsMenuIndex(detailsMenuIndex + 1);
      }
    },
    "select:accept": () => {
      if (!selectedPlugin)
        return;
      const action = detailsMenuOptions[detailsMenuIndex]?.action;
      const hasHomepage = selectedPlugin.entry.homepage;
      const githubRepo = extractGitHubRepo(selectedPlugin);
      if (action === "install-user") {
        handleSinglePluginInstall(selectedPlugin, "user");
      } else if (action === "install-project") {
        handleSinglePluginInstall(selectedPlugin, "project");
      } else if (action === "install-local") {
        handleSinglePluginInstall(selectedPlugin, "local");
      } else if (action === "homepage" && hasHomepage) {
        openBrowser(hasHomepage);
      } else if (action === "github" && githubRepo) {
        openBrowser(`https://github.com/${githubRepo}`);
      } else if (action === "back") {
        setViewState("plugin-list");
        setSelectedPlugin(null);
      }
    }
  }, {
    context: "Select",
    isActive: viewState === "plugin-details" && !!selectedPlugin
  });
  if (typeof viewState === "object" && viewState.type === "plugin-options") {
    let finish = function(msg) {
      setResult(msg);
      if (onInstallComplete) {
        onInstallComplete();
      }
      setParentViewState({ type: "menu" });
    };
    const { plugin, pluginId } = viewState;
    return /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(PluginOptionsFlow, {
      plugin,
      pluginId,
      onDone: (outcome, detail) => {
        switch (outcome) {
          case "configured":
            finish(`\u2713 Installed and configured ${plugin.name}. Run /reload-plugins to apply.`);
            break;
          case "skipped":
            finish(`\u2713 Installed ${plugin.name}. Run /reload-plugins to apply.`);
            break;
          case "error":
            finish(`Installed but failed to save config: ${detail}`);
            break;
        }
      }
    }, undefined, false, undefined, this);
  }
  if (loading) {
    return /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
      children: "Loading\u2026"
    }, undefined, false, undefined, this);
  }
  if (error) {
    return /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
      color: "error",
      children: error
    }, undefined, false, undefined, this);
  }
  if (viewState === "marketplace-list") {
    if (marketplaces.length === 0) {
      return /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        children: [
          /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
            marginBottom: 1,
            children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
              bold: true,
              children: "Select marketplace"
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
            children: "No marketplaces configured."
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
            dimColor: true,
            children: [
              "Add a marketplace first using ",
              "'Add marketplace'",
              "."
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
            marginTop: 1,
            paddingLeft: 1,
            children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
              dimColor: true,
              children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ConfigurableShortcutHint, {
                action: "confirm:no",
                context: "Confirmation",
                fallback: "Esc",
                description: "go back"
              }, undefined, false, undefined, this)
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this);
    }
    return /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      children: [
        /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
          marginBottom: 1,
          children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
            bold: true,
            children: "Select marketplace"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        warning && /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
          marginBottom: 1,
          flexDirection: "column",
          children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
            color: "warning",
            children: [
              figures_default.warning,
              " ",
              warning
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this),
        marketplaces.map((marketplace, index) => /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
          flexDirection: "column",
          marginBottom: index < marketplaces.length - 1 ? 1 : 0,
          children: [
            /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
              children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
                color: selectedIndex === index ? "suggestion" : undefined,
                children: [
                  selectedIndex === index ? figures_default.pointer : " ",
                  " ",
                  marketplace.name
                ]
              }, undefined, true, undefined, this)
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
              marginLeft: 2,
              children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
                dimColor: true,
                children: [
                  marketplace.totalPlugins,
                  " ",
                  plural(marketplace.totalPlugins, "plugin"),
                  " available",
                  marketplace.installedCount > 0 && ` \xB7 ${marketplace.installedCount} already installed`,
                  marketplace.source && ` \xB7 ${marketplace.source}`
                ]
              }, undefined, true, undefined, this)
            }, undefined, false, undefined, this)
          ]
        }, marketplace.name, true, undefined, this)),
        /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
            dimColor: true,
            italic: true,
            children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Byline, {
              children: [
                /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ConfigurableShortcutHint, {
                  action: "select:accept",
                  context: "Select",
                  fallback: "Enter",
                  description: "select"
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ConfigurableShortcutHint, {
                  action: "confirm:no",
                  context: "Confirmation",
                  fallback: "Esc",
                  description: "go back"
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  if (viewState === "plugin-details" && selectedPlugin) {
    const hasHomepage = selectedPlugin.entry.homepage;
    const githubRepo = extractGitHubRepo(selectedPlugin);
    const menuOptions = buildPluginDetailsMenuOptions(hasHomepage, githubRepo);
    return /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      children: [
        /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
          marginBottom: 1,
          children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
            bold: true,
            children: "Plugin Details"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
          flexDirection: "column",
          marginBottom: 1,
          children: [
            /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
              bold: true,
              children: selectedPlugin.entry.name
            }, undefined, false, undefined, this),
            selectedPlugin.entry.version && /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
              dimColor: true,
              children: [
                "Version: ",
                selectedPlugin.entry.version
              ]
            }, undefined, true, undefined, this),
            selectedPlugin.entry.description && /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
              marginTop: 1,
              children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
                children: selectedPlugin.entry.description
              }, undefined, false, undefined, this)
            }, undefined, false, undefined, this),
            selectedPlugin.entry.author && /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
              marginTop: 1,
              children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
                dimColor: true,
                children: [
                  "By:",
                  " ",
                  typeof selectedPlugin.entry.author === "string" ? selectedPlugin.entry.author : selectedPlugin.entry.author.name
                ]
              }, undefined, true, undefined, this)
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
          flexDirection: "column",
          marginBottom: 1,
          children: [
            /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
              bold: true,
              children: "Will install:"
            }, undefined, false, undefined, this),
            selectedPlugin.entry.commands && /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
              dimColor: true,
              children: [
                "\xB7 Commands:",
                " ",
                Array.isArray(selectedPlugin.entry.commands) ? selectedPlugin.entry.commands.join(", ") : Object.keys(selectedPlugin.entry.commands).join(", ")
              ]
            }, undefined, true, undefined, this),
            selectedPlugin.entry.agents && /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
              dimColor: true,
              children: [
                "\xB7 Agents:",
                " ",
                Array.isArray(selectedPlugin.entry.agents) ? selectedPlugin.entry.agents.join(", ") : Object.keys(selectedPlugin.entry.agents).join(", ")
              ]
            }, undefined, true, undefined, this),
            selectedPlugin.entry.hooks && /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
              dimColor: true,
              children: [
                "\xB7 Hooks: ",
                Object.keys(selectedPlugin.entry.hooks).join(", ")
              ]
            }, undefined, true, undefined, this),
            selectedPlugin.entry.mcpServers && /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
              dimColor: true,
              children: [
                "\xB7 MCP Servers:",
                " ",
                Array.isArray(selectedPlugin.entry.mcpServers) ? selectedPlugin.entry.mcpServers.join(", ") : typeof selectedPlugin.entry.mcpServers === "object" ? Object.keys(selectedPlugin.entry.mcpServers).join(", ") : "configured"
              ]
            }, undefined, true, undefined, this),
            !selectedPlugin.entry.commands && !selectedPlugin.entry.agents && !selectedPlugin.entry.hooks && !selectedPlugin.entry.mcpServers && /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(jsx_dev_runtime6.Fragment, {
              children: typeof selectedPlugin.entry.source === "object" && "source" in selectedPlugin.entry.source && (selectedPlugin.entry.source.source === "github" || selectedPlugin.entry.source.source === "url" || selectedPlugin.entry.source.source === "npm" || selectedPlugin.entry.source.source === "pip") ? /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
                dimColor: true,
                children: "\xB7 Component summary not available for remote plugin"
              }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
                dimColor: true,
                children: "\xB7 Components will be discovered at installation"
              }, undefined, false, undefined, this)
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(PluginTrustWarning, {}, undefined, false, undefined, this),
        installError && /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
          marginBottom: 1,
          children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
            color: "error",
            children: [
              "Error: ",
              installError
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
          flexDirection: "column",
          children: menuOptions.map((option, index) => /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
            children: [
              detailsMenuIndex === index && /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
                children: "> "
              }, undefined, false, undefined, this),
              detailsMenuIndex !== index && /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
                children: "  "
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
                bold: detailsMenuIndex === index,
                children: isInstalling && option.action === "install" ? "Installing\u2026" : option.label
              }, undefined, false, undefined, this)
            ]
          }, option.action, true, undefined, this))
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          paddingLeft: 1,
          children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
            dimColor: true,
            children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Byline, {
              children: [
                /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ConfigurableShortcutHint, {
                  action: "select:accept",
                  context: "Select",
                  fallback: "Enter",
                  description: "select"
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ConfigurableShortcutHint, {
                  action: "confirm:no",
                  context: "Confirmation",
                  fallback: "Esc",
                  description: "back"
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  if (availablePlugins.length === 0) {
    return /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      children: [
        /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
          marginBottom: 1,
          children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
            bold: true,
            children: "Install plugins"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
          dimColor: true,
          children: "No new plugins available to install."
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
          dimColor: true,
          children: "All plugins from this marketplace are already installed."
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
          marginLeft: 3,
          children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
            dimColor: true,
            italic: true,
            children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ConfigurableShortcutHint, {
              action: "confirm:no",
              context: "Confirmation",
              fallback: "Esc",
              description: "go back"
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  const visiblePlugins = pagination.getVisibleItems(availablePlugins);
  return /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    children: [
      /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
        marginBottom: 1,
        children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
          bold: true,
          children: "Install Plugins"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      pagination.scrollPosition.canScrollUp && /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
        children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
          dimColor: true,
          children: [
            " ",
            figures_default.arrowUp,
            " more above"
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this),
      visiblePlugins.map((plugin, visibleIndex) => {
        const actualIndex = pagination.toActualIndex(visibleIndex);
        const isSelected = selectedIndex === actualIndex;
        const isSelectedForInstall = selectedForInstall.has(plugin.pluginId);
        const isInstalling2 = installingPlugins.has(plugin.pluginId);
        const isLast = visibleIndex === visiblePlugins.length - 1;
        return /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
          flexDirection: "column",
          marginBottom: isLast && !error ? 0 : 1,
          children: [
            /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
              children: [
                /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
                  color: isSelected ? "suggestion" : undefined,
                  children: [
                    isSelected ? figures_default.pointer : " ",
                    " "
                  ]
                }, undefined, true, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
                  color: plugin.isInstalled ? "success" : undefined,
                  children: [
                    plugin.isInstalled ? figures_default.tick : isInstalling2 ? figures_default.ellipsis : isSelectedForInstall ? figures_default.radioOn : figures_default.radioOff,
                    " ",
                    plugin.entry.name,
                    plugin.entry.category && /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
                      dimColor: true,
                      children: [
                        " [",
                        plugin.entry.category,
                        "]"
                      ]
                    }, undefined, true, undefined, this),
                    plugin.entry.tags?.includes("community-managed") && /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
                      dimColor: true,
                      children: " [Community Managed]"
                    }, undefined, false, undefined, this),
                    plugin.isInstalled && /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
                      dimColor: true,
                      children: " (installed)"
                    }, undefined, false, undefined, this),
                    installCounts && selectedMarketplace === OFFICIAL_MARKETPLACE_NAME && /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
                      dimColor: true,
                      children: [
                        " \xB7 ",
                        formatInstallCount(installCounts.get(plugin.pluginId) ?? 0),
                        " ",
                        "installs"
                      ]
                    }, undefined, true, undefined, this)
                  ]
                }, undefined, true, undefined, this)
              ]
            }, undefined, true, undefined, this),
            plugin.entry.description && /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
              marginLeft: 4,
              children: [
                /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
                  dimColor: true,
                  children: truncateToWidth(plugin.entry.description, 60)
                }, undefined, false, undefined, this),
                plugin.entry.version && /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
                  dimColor: true,
                  children: [
                    " \xB7 v",
                    plugin.entry.version
                  ]
                }, undefined, true, undefined, this)
              ]
            }, undefined, true, undefined, this)
          ]
        }, plugin.pluginId, true, undefined, this);
      }),
      pagination.scrollPosition.canScrollDown && /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
        children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
          dimColor: true,
          children: [
            " ",
            figures_default.arrowDown,
            " more below"
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this),
      error && /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
        marginTop: 1,
        children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
          color: "error",
          children: [
            figures_default.cross,
            " ",
            error
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(PluginSelectionKeyHint, {
        hasSelection: selectedForInstall.size > 0
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var React3, import_react4, jsx_dev_runtime6;
var init_BrowseMarketplace = __esm(() => {
  init_figures();
  init_ConfigurableShortcutHint();
  init_src();
  init_useKeybinding();
  init_array();
  init_browser();
  init_debug();
  init_errors();
  init_cacheUtils();
  init_installCounts();
  init_installedPluginsManager();
  init_marketplaceHelpers();
  init_marketplaceManager();
  init_officialMarketplace();
  init_pluginInstallationHelpers();
  init_pluginPolicy();
  init_stringUtils();
  init_truncate();
  init_PluginOptionsFlow();
  init_PluginTrustWarning();
  init_pluginDetailsHelpers();
  init_usePagination();
  React3 = __toESM(require_react(), 1);
  import_react4 = __toESM(require_react(), 1);
  jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/commands/plugin/DiscoverPlugins.tsx
function DiscoverPlugins({
  error,
  setError,
  result: _result,
  setResult,
  setViewState: setParentViewState,
  onInstallComplete,
  onSearchModeChange,
  targetPlugin
}) {
  const [viewState, setViewState] = import_react5.useState("plugin-list");
  const [selectedPlugin, setSelectedPlugin] = import_react5.useState(null);
  const [availablePlugins, setAvailablePlugins] = import_react5.useState([]);
  const [loading, setLoading] = import_react5.useState(true);
  const [installCounts, setInstallCounts] = import_react5.useState(null);
  const [isSearchMode, setIsSearchModeRaw] = import_react5.useState(false);
  const setIsSearchMode = import_react5.useCallback((active) => {
    setIsSearchModeRaw(active);
    onSearchModeChange?.(active);
  }, [onSearchModeChange]);
  const {
    query: searchQuery,
    setQuery: setSearchQuery,
    cursorOffset: searchCursorOffset
  } = useSearchInput({
    isActive: viewState === "plugin-list" && isSearchMode && !loading,
    onExit: () => {
      setIsSearchMode(false);
    }
  });
  const isTerminalFocused = useTerminalFocus();
  const { columns: terminalWidth } = useTerminalSize();
  const filteredPlugins = import_react5.useMemo(() => {
    if (!searchQuery)
      return availablePlugins;
    const lowerQuery = searchQuery.toLowerCase();
    return availablePlugins.filter((plugin) => plugin.entry.name.toLowerCase().includes(lowerQuery) || plugin.entry.description?.toLowerCase().includes(lowerQuery) || plugin.marketplaceName.toLowerCase().includes(lowerQuery));
  }, [availablePlugins, searchQuery]);
  const [selectedIndex, setSelectedIndex] = import_react5.useState(0);
  const [selectedForInstall, setSelectedForInstall] = import_react5.useState(new Set);
  const [installingPlugins, setInstallingPlugins] = import_react5.useState(new Set);
  const pagination = usePagination({
    totalItems: filteredPlugins.length,
    selectedIndex
  });
  import_react5.useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);
  const [detailsMenuIndex, setDetailsMenuIndex] = import_react5.useState(0);
  const [isInstalling, setIsInstalling] = import_react5.useState(false);
  const [installError, setInstallError] = import_react5.useState(null);
  const [warning, setWarning] = import_react5.useState(null);
  const [emptyReason, setEmptyReason] = import_react5.useState(null);
  import_react5.useEffect(() => {
    async function loadAllPlugins2() {
      try {
        const config = await loadKnownMarketplacesConfig();
        const { marketplaces, failures } = await loadMarketplacesWithGracefulDegradation(config);
        const allPlugins = [];
        for (const { name, data: marketplace } of marketplaces) {
          if (marketplace) {
            for (const entry of marketplace.plugins) {
              const pluginId = createPluginId(entry.name, name);
              allPlugins.push({
                entry,
                marketplaceName: name,
                pluginId,
                isInstalled: isPluginGloballyInstalled(pluginId)
              });
            }
          }
        }
        const uninstalledPlugins = allPlugins.filter((p) => !p.isInstalled && !isPluginBlockedByPolicy(p.pluginId));
        try {
          const counts = await getInstallCounts();
          setInstallCounts(counts);
          if (counts) {
            uninstalledPlugins.sort((a, b) => {
              const countA = counts.get(a.pluginId) ?? 0;
              const countB = counts.get(b.pluginId) ?? 0;
              if (countA !== countB)
                return countB - countA;
              return a.entry.name.localeCompare(b.entry.name);
            });
          } else {
            uninstalledPlugins.sort((a, b) => a.entry.name.localeCompare(b.entry.name));
          }
        } catch (error2) {
          logForDebugging(`Failed to fetch install counts: ${errorMessage(error2)}`);
          uninstalledPlugins.sort((a, b) => a.entry.name.localeCompare(b.entry.name));
        }
        setAvailablePlugins(uninstalledPlugins);
        const configuredCount = Object.keys(config).length;
        if (uninstalledPlugins.length === 0) {
          const reason = await detectEmptyMarketplaceReason({
            configuredMarketplaceCount: configuredCount,
            failedMarketplaceCount: failures.length
          });
          setEmptyReason(reason);
        }
        const successCount = count(marketplaces, (m) => m.data !== null);
        const errorResult = formatMarketplaceLoadingErrors(failures, successCount);
        if (errorResult) {
          if (errorResult.type === "warning") {
            setWarning(errorResult.message + ". Showing available plugins.");
          } else {
            throw new Error(errorResult.message);
          }
        }
        if (targetPlugin) {
          const foundPlugin = allPlugins.find((p) => p.entry.name === targetPlugin);
          if (foundPlugin) {
            if (foundPlugin.isInstalled) {
              setError(`Plugin '${foundPlugin.pluginId}' is already installed. Use '/plugin' to manage existing plugins.`);
            } else {
              setSelectedPlugin(foundPlugin);
              setViewState("plugin-details");
            }
          } else {
            setError(`Plugin "${targetPlugin}" not found in any marketplace`);
          }
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load plugins");
      } finally {
        setLoading(false);
      }
    }
    loadAllPlugins2();
  }, [setError, targetPlugin]);
  const installSelectedPlugins = async () => {
    if (selectedForInstall.size === 0)
      return;
    const pluginsToInstall = availablePlugins.filter((p) => selectedForInstall.has(p.pluginId));
    setInstallingPlugins(new Set(pluginsToInstall.map((p) => p.pluginId)));
    let successCount = 0;
    let failureCount = 0;
    const newFailedPlugins = [];
    for (const plugin of pluginsToInstall) {
      const result = await installPluginFromMarketplace({
        pluginId: plugin.pluginId,
        entry: plugin.entry,
        marketplaceName: plugin.marketplaceName,
        scope: "user"
      });
      if (result.success) {
        successCount++;
      } else {
        failureCount++;
        newFailedPlugins.push({
          name: plugin.entry.name,
          reason: result.error
        });
      }
    }
    setInstallingPlugins(new Set);
    setSelectedForInstall(new Set);
    clearAllCaches();
    if (failureCount === 0) {
      const message = `\u2713 Installed ${successCount} ${plural(successCount, "plugin")}. ` + `Run /reload-plugins to activate.`;
      setResult(message);
    } else if (successCount === 0) {
      setError(`Failed to install: ${formatFailureDetails(newFailedPlugins, true)}`);
    } else {
      const message = `\u2713 Installed ${successCount} of ${successCount + failureCount} plugins. ` + `Failed: ${formatFailureDetails(newFailedPlugins, false)}. ` + `Run /reload-plugins to activate successfully installed plugins.`;
      setResult(message);
    }
    if (successCount > 0) {
      if (onInstallComplete) {
        await onInstallComplete();
      }
    }
    setParentViewState({ type: "menu" });
  };
  const handleSinglePluginInstall = async (plugin, scope = "user") => {
    setIsInstalling(true);
    setInstallError(null);
    const result = await installPluginFromMarketplace({
      pluginId: plugin.pluginId,
      entry: plugin.entry,
      marketplaceName: plugin.marketplaceName,
      scope
    });
    if (result.success) {
      const loaded = await findPluginOptionsTarget(plugin.pluginId);
      if (loaded) {
        setIsInstalling(false);
        setViewState({
          type: "plugin-options",
          plugin: loaded,
          pluginId: plugin.pluginId
        });
        return;
      }
      setResult(result.message);
      if (onInstallComplete) {
        await onInstallComplete();
      }
      setParentViewState({ type: "menu" });
    } else {
      setIsInstalling(false);
      setInstallError(result.error);
    }
  };
  import_react5.useEffect(() => {
    if (error) {
      setResult(error);
    }
  }, [error, setResult]);
  useKeybinding("confirm:no", () => {
    setViewState("plugin-list");
    setSelectedPlugin(null);
  }, {
    context: "Confirmation",
    isActive: viewState === "plugin-details"
  });
  useKeybinding("confirm:no", () => {
    setParentViewState({ type: "menu" });
  }, {
    context: "Confirmation",
    isActive: viewState === "plugin-list" && !isSearchMode
  });
  use_input_default((input, _key) => {
    const keyIsNotCtrlOrMeta = !_key.ctrl && !_key.meta;
    if (!isSearchMode) {
      if (input === "/" && keyIsNotCtrlOrMeta) {
        setIsSearchMode(true);
        setSearchQuery("");
      } else if (keyIsNotCtrlOrMeta && input.length > 0 && !/^\s+$/.test(input) && input !== "j" && input !== "k" && input !== "i") {
        setIsSearchMode(true);
        setSearchQuery(input);
      }
    }
  }, { isActive: viewState === "plugin-list" && !loading });
  useKeybindings({
    "select:previous": () => {
      if (selectedIndex === 0) {
        setIsSearchMode(true);
      } else {
        pagination.handleSelectionChange(selectedIndex - 1, setSelectedIndex);
      }
    },
    "select:next": () => {
      if (selectedIndex < filteredPlugins.length - 1) {
        pagination.handleSelectionChange(selectedIndex + 1, setSelectedIndex);
      }
    },
    "select:accept": () => {
      if (selectedIndex === filteredPlugins.length && selectedForInstall.size > 0) {
        installSelectedPlugins();
      } else if (selectedIndex < filteredPlugins.length) {
        const plugin = filteredPlugins[selectedIndex];
        if (plugin) {
          if (plugin.isInstalled) {
            setParentViewState({
              type: "manage-plugins",
              targetPlugin: plugin.entry.name,
              targetMarketplace: plugin.marketplaceName
            });
          } else {
            setSelectedPlugin(plugin);
            setViewState("plugin-details");
            setDetailsMenuIndex(0);
            setInstallError(null);
          }
        }
      }
    }
  }, {
    context: "Select",
    isActive: viewState === "plugin-list" && !isSearchMode
  });
  useKeybindings({
    "plugin:toggle": () => {
      if (selectedIndex < filteredPlugins.length) {
        const plugin = filteredPlugins[selectedIndex];
        if (plugin && !plugin.isInstalled) {
          const newSelection = new Set(selectedForInstall);
          if (newSelection.has(plugin.pluginId)) {
            newSelection.delete(plugin.pluginId);
          } else {
            newSelection.add(plugin.pluginId);
          }
          setSelectedForInstall(newSelection);
        }
      }
    },
    "plugin:install": () => {
      if (selectedForInstall.size > 0) {
        installSelectedPlugins();
      }
    }
  }, {
    context: "Plugin",
    isActive: viewState === "plugin-list" && !isSearchMode
  });
  const detailsMenuOptions = React4.useMemo(() => {
    if (!selectedPlugin)
      return [];
    const hasHomepage = selectedPlugin.entry.homepage;
    const githubRepo = extractGitHubRepo(selectedPlugin);
    return buildPluginDetailsMenuOptions(hasHomepage, githubRepo);
  }, [selectedPlugin]);
  useKeybindings({
    "select:previous": () => {
      if (detailsMenuIndex > 0) {
        setDetailsMenuIndex(detailsMenuIndex - 1);
      }
    },
    "select:next": () => {
      if (detailsMenuIndex < detailsMenuOptions.length - 1) {
        setDetailsMenuIndex(detailsMenuIndex + 1);
      }
    },
    "select:accept": () => {
      if (!selectedPlugin)
        return;
      const action = detailsMenuOptions[detailsMenuIndex]?.action;
      const hasHomepage = selectedPlugin.entry.homepage;
      const githubRepo = extractGitHubRepo(selectedPlugin);
      if (action === "install-user") {
        handleSinglePluginInstall(selectedPlugin, "user");
      } else if (action === "install-project") {
        handleSinglePluginInstall(selectedPlugin, "project");
      } else if (action === "install-local") {
        handleSinglePluginInstall(selectedPlugin, "local");
      } else if (action === "homepage" && hasHomepage) {
        openBrowser(hasHomepage);
      } else if (action === "github" && githubRepo) {
        openBrowser(`https://github.com/${githubRepo}`);
      } else if (action === "back") {
        setViewState("plugin-list");
        setSelectedPlugin(null);
      }
    }
  }, {
    context: "Select",
    isActive: viewState === "plugin-details" && !!selectedPlugin
  });
  if (typeof viewState === "object" && viewState.type === "plugin-options") {
    let finish = function(msg) {
      setResult(msg);
      if (onInstallComplete) {
        onInstallComplete();
      }
      setParentViewState({ type: "menu" });
    };
    const { plugin, pluginId } = viewState;
    return /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(PluginOptionsFlow, {
      plugin,
      pluginId,
      onDone: (outcome, detail) => {
        switch (outcome) {
          case "configured":
            finish(`\u2713 Installed and configured ${plugin.name}. Run /reload-plugins to apply.`);
            break;
          case "skipped":
            finish(`\u2713 Installed ${plugin.name}. Run /reload-plugins to apply.`);
            break;
          case "error":
            finish(`Installed but failed to save config: ${detail}`);
            break;
        }
      }
    }, undefined, false, undefined, this);
  }
  if (loading) {
    return /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
      children: "Loading\u2026"
    }, undefined, false, undefined, this);
  }
  if (error) {
    return /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
      color: "error",
      children: error
    }, undefined, false, undefined, this);
  }
  if (viewState === "plugin-details" && selectedPlugin) {
    const hasHomepage = selectedPlugin.entry.homepage;
    const githubRepo = extractGitHubRepo(selectedPlugin);
    const menuOptions = buildPluginDetailsMenuOptions(hasHomepage, githubRepo);
    return /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      children: [
        /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedBox_default, {
          marginBottom: 1,
          children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
            bold: true,
            children: "Plugin details"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedBox_default, {
          flexDirection: "column",
          marginBottom: 1,
          children: [
            /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
              bold: true,
              children: selectedPlugin.entry.name
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
              dimColor: true,
              children: [
                "from ",
                selectedPlugin.marketplaceName
              ]
            }, undefined, true, undefined, this),
            selectedPlugin.entry.version && /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
              dimColor: true,
              children: [
                "Version: ",
                selectedPlugin.entry.version
              ]
            }, undefined, true, undefined, this),
            selectedPlugin.entry.description && /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedBox_default, {
              marginTop: 1,
              children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
                children: selectedPlugin.entry.description
              }, undefined, false, undefined, this)
            }, undefined, false, undefined, this),
            selectedPlugin.entry.author && /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedBox_default, {
              marginTop: 1,
              children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
                dimColor: true,
                children: [
                  "By:",
                  " ",
                  typeof selectedPlugin.entry.author === "string" ? selectedPlugin.entry.author : selectedPlugin.entry.author.name
                ]
              }, undefined, true, undefined, this)
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(PluginTrustWarning, {}, undefined, false, undefined, this),
        installError && /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedBox_default, {
          marginBottom: 1,
          children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
            color: "error",
            children: [
              "Error: ",
              installError
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedBox_default, {
          flexDirection: "column",
          children: menuOptions.map((option, index) => /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedBox_default, {
            children: [
              detailsMenuIndex === index && /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
                children: "> "
              }, undefined, false, undefined, this),
              detailsMenuIndex !== index && /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
                children: "  "
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
                bold: detailsMenuIndex === index,
                children: isInstalling && option.action.startsWith("install-") ? "Installing\u2026" : option.label
              }, undefined, false, undefined, this)
            ]
          }, option.action, true, undefined, this))
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
            dimColor: true,
            children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Byline, {
              children: [
                /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ConfigurableShortcutHint, {
                  action: "select:accept",
                  context: "Select",
                  fallback: "Enter",
                  description: "select"
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ConfigurableShortcutHint, {
                  action: "confirm:no",
                  context: "Confirmation",
                  fallback: "Esc",
                  description: "back"
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  if (availablePlugins.length === 0) {
    return /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      children: [
        /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedBox_default, {
          marginBottom: 1,
          children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
            bold: true,
            children: "Discover plugins"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(EmptyStateMessage, {
          reason: emptyReason
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
            dimColor: true,
            italic: true,
            children: "Esc to go back"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  const visiblePlugins = pagination.getVisibleItems(filteredPlugins);
  return /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    children: [
      /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedBox_default, {
        children: [
          /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
            bold: true,
            children: "Discover plugins"
          }, undefined, false, undefined, this),
          pagination.needsPagination && /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
            dimColor: true,
            children: [
              " ",
              "(",
              pagination.scrollPosition.current,
              "/",
              pagination.scrollPosition.total,
              ")"
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedBox_default, {
        marginBottom: 1,
        children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(SearchBox, {
          query: searchQuery,
          isFocused: isSearchMode,
          isTerminalFocused,
          width: terminalWidth - 4,
          cursorOffset: searchCursorOffset
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      warning && /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedBox_default, {
        marginBottom: 1,
        children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
          color: "warning",
          children: [
            figures_default.warning,
            " ",
            warning
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this),
      filteredPlugins.length === 0 && searchQuery && /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedBox_default, {
        marginBottom: 1,
        children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
          dimColor: true,
          children: [
            'No plugins match "',
            searchQuery,
            '"'
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this),
      pagination.scrollPosition.canScrollUp && /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedBox_default, {
        children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
          dimColor: true,
          children: [
            " ",
            figures_default.arrowUp,
            " more above"
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this),
      visiblePlugins.map((plugin, visibleIndex) => {
        const actualIndex = pagination.toActualIndex(visibleIndex);
        const isSelected = selectedIndex === actualIndex;
        const isSelectedForInstall = selectedForInstall.has(plugin.pluginId);
        const isInstallingThis = installingPlugins.has(plugin.pluginId);
        const isLast = visibleIndex === visiblePlugins.length - 1;
        return /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedBox_default, {
          flexDirection: "column",
          marginBottom: isLast && !error ? 0 : 1,
          children: [
            /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedBox_default, {
              children: [
                /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
                  color: isSelected && !isSearchMode ? "suggestion" : undefined,
                  children: [
                    isSelected && !isSearchMode ? figures_default.pointer : " ",
                    " "
                  ]
                }, undefined, true, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
                  children: [
                    isInstallingThis ? figures_default.ellipsis : isSelectedForInstall ? figures_default.radioOn : figures_default.radioOff,
                    " ",
                    plugin.entry.name,
                    /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
                      dimColor: true,
                      children: [
                        " \xB7 ",
                        plugin.marketplaceName
                      ]
                    }, undefined, true, undefined, this),
                    plugin.entry.tags?.includes("community-managed") && /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
                      dimColor: true,
                      children: " [Community Managed]"
                    }, undefined, false, undefined, this),
                    installCounts && plugin.marketplaceName === OFFICIAL_MARKETPLACE_NAME && /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
                      dimColor: true,
                      children: [
                        " \xB7 ",
                        formatInstallCount(installCounts.get(plugin.pluginId) ?? 0),
                        " ",
                        "installs"
                      ]
                    }, undefined, true, undefined, this)
                  ]
                }, undefined, true, undefined, this)
              ]
            }, undefined, true, undefined, this),
            plugin.entry.description && /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedBox_default, {
              marginLeft: 4,
              children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
                dimColor: true,
                children: truncateToWidth(plugin.entry.description, 60)
              }, undefined, false, undefined, this)
            }, undefined, false, undefined, this)
          ]
        }, `${pagination.startIndex}-${plugin.pluginId}`, true, undefined, this);
      }),
      pagination.scrollPosition.canScrollDown && /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedBox_default, {
        children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
          dimColor: true,
          children: [
            " ",
            figures_default.arrowDown,
            " more below"
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this),
      error && /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedBox_default, {
        marginTop: 1,
        children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
          color: "error",
          children: [
            figures_default.cross,
            " ",
            error
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(DiscoverPluginsKeyHint, {
        hasSelection: selectedForInstall.size > 0,
        canToggle: selectedIndex < filteredPlugins.length && !filteredPlugins[selectedIndex]?.isInstalled
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function DiscoverPluginsKeyHint({
  hasSelection,
  canToggle
}) {
  return /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedBox_default, {
    marginTop: 1,
    children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
      dimColor: true,
      italic: true,
      children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Byline, {
        children: [
          hasSelection && /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ConfigurableShortcutHint, {
            action: "plugin:install",
            context: "Plugin",
            fallback: "i",
            description: "install",
            bold: true
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
            children: "type to search"
          }, undefined, false, undefined, this),
          canToggle && /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ConfigurableShortcutHint, {
            action: "plugin:toggle",
            context: "Plugin",
            fallback: "Space",
            description: "toggle"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ConfigurableShortcutHint, {
            action: "select:accept",
            context: "Select",
            fallback: "Enter",
            description: "details"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ConfigurableShortcutHint, {
            action: "confirm:no",
            context: "Confirmation",
            fallback: "Esc",
            description: "back"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function EmptyStateMessage({
  reason
}) {
  switch (reason) {
    case "git-not-installed":
      return /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(jsx_dev_runtime7.Fragment, {
        children: [
          /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
            dimColor: true,
            children: "Git is required to install marketplaces."
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
            dimColor: true,
            children: "Please install git and restart MiMo Code."
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this);
    case "all-blocked-by-policy":
      return /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(jsx_dev_runtime7.Fragment, {
        children: [
          /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
            dimColor: true,
            children: "Your organization policy does not allow any external marketplaces."
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
            dimColor: true,
            children: "Contact your administrator."
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this);
    case "policy-restricts-sources":
      return /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(jsx_dev_runtime7.Fragment, {
        children: [
          /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
            dimColor: true,
            children: "Your organization restricts which marketplaces can be added."
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
            dimColor: true,
            children: "Switch to the Marketplaces tab to view allowed sources."
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this);
    case "all-marketplaces-failed":
      return /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(jsx_dev_runtime7.Fragment, {
        children: [
          /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
            dimColor: true,
            children: "Failed to load marketplace data."
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
            dimColor: true,
            children: "Check your network connection."
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this);
    case "all-plugins-installed":
      return /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(jsx_dev_runtime7.Fragment, {
        children: [
          /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
            dimColor: true,
            children: "All available plugins are already installed."
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
            dimColor: true,
            children: "Check for new plugins later or add more marketplaces."
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this);
    case "no-marketplaces-configured":
    default:
      return /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(jsx_dev_runtime7.Fragment, {
        children: [
          /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
            dimColor: true,
            children: "No plugins available."
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
            dimColor: true,
            children: "Add a marketplace first using the Marketplaces tab."
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this);
  }
}
var React4, import_react5, jsx_dev_runtime7;
var init_DiscoverPlugins = __esm(() => {
  init_figures();
  init_ConfigurableShortcutHint();
  init_SearchBox();
  init_src();
  init_useSearchInput();
  init_useTerminalSize();
  init_src();
  init_useKeybinding();
  init_array();
  init_browser();
  init_debug();
  init_errors();
  init_cacheUtils();
  init_installCounts();
  init_installedPluginsManager();
  init_marketplaceHelpers();
  init_marketplaceManager();
  init_officialMarketplace();
  init_pluginInstallationHelpers();
  init_pluginPolicy();
  init_stringUtils();
  init_truncate();
  init_PluginOptionsFlow();
  init_PluginTrustWarning();
  init_pluginDetailsHelpers();
  init_usePagination();
  React4 = __toESM(require_react(), 1);
  import_react5 = __toESM(require_react(), 1);
  jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/commands/plugin/ManageMarketplaces.tsx
function ManageMarketplaces({
  setViewState,
  error,
  setError,
  setResult,
  exitState,
  onManageComplete,
  targetMarketplace,
  action
}) {
  const [marketplaceStates, setMarketplaceStates] = import_react6.useState([]);
  const [loading, setLoading] = import_react6.useState(true);
  const [selectedIndex, setSelectedIndex] = import_react6.useState(0);
  const [isProcessing, setIsProcessing] = import_react6.useState(false);
  const [processError, setProcessError] = import_react6.useState(null);
  const [successMessage, setSuccessMessage] = import_react6.useState(null);
  const [progressMessage, setProgressMessage] = import_react6.useState(null);
  const [internalView, setInternalView] = import_react6.useState("list");
  const [selectedMarketplace, setSelectedMarketplace] = import_react6.useState(null);
  const [detailsMenuIndex, setDetailsMenuIndex] = import_react6.useState(0);
  const hasAttemptedAutoAction = import_react6.useRef(false);
  import_react6.useEffect(() => {
    async function loadMarketplaces() {
      try {
        const config = await loadKnownMarketplacesConfig();
        const { enabled, disabled } = await loadAllPlugins();
        const allPlugins = [...enabled, ...disabled];
        const { marketplaces, failures } = await loadMarketplacesWithGracefulDegradation(config);
        const states = [];
        for (const { name, config: entry, data: marketplace } of marketplaces) {
          const installedFromMarketplace = allPlugins.filter((plugin) => plugin.source.endsWith(`@${name}`));
          states.push({
            name,
            source: getMarketplaceSourceDisplay(entry.source),
            lastUpdated: entry.lastUpdated,
            pluginCount: marketplace?.plugins.length,
            installedPlugins: installedFromMarketplace,
            pendingUpdate: false,
            pendingRemove: false,
            autoUpdate: isMarketplaceAutoUpdate(name, entry)
          });
        }
        states.sort((a, b) => {
          if (a.name === "claude-plugin-directory")
            return -1;
          if (b.name === "claude-plugin-directory")
            return 1;
          return a.name.localeCompare(b.name);
        });
        setMarketplaceStates(states);
        const successCount = count(marketplaces, (m) => m.data !== null);
        const errorResult = formatMarketplaceLoadingErrors(failures, successCount);
        if (errorResult) {
          if (errorResult.type === "warning") {
            setProcessError(errorResult.message);
          } else {
            throw new Error(errorResult.message);
          }
        }
        if (targetMarketplace && !hasAttemptedAutoAction.current && !error) {
          hasAttemptedAutoAction.current = true;
          const targetIndex = states.findIndex((s) => s.name === targetMarketplace);
          if (targetIndex >= 0) {
            const targetState = states[targetIndex];
            if (action) {
              setSelectedIndex(targetIndex + 1);
              const newStates = [...states];
              if (action === "update") {
                newStates[targetIndex].pendingUpdate = true;
              } else if (action === "remove") {
                newStates[targetIndex].pendingRemove = true;
              }
              setMarketplaceStates(newStates);
              setTimeout(applyChanges, 100, newStates);
            } else if (targetState) {
              setSelectedIndex(targetIndex + 1);
              setSelectedMarketplace(targetState);
              setInternalView("details");
            }
          } else if (setError) {
            setError(`Marketplace not found: ${targetMarketplace}`);
          }
        }
      } catch (err) {
        if (setError) {
          setError(err instanceof Error ? err.message : "Failed to load marketplaces");
        }
        setProcessError(err instanceof Error ? err.message : "Failed to load marketplaces");
      } finally {
        setLoading(false);
      }
    }
    loadMarketplaces();
  }, [targetMarketplace, action, error]);
  const hasPendingChanges = () => {
    return marketplaceStates.some((state) => state.pendingUpdate || state.pendingRemove);
  };
  const getPendingCounts = () => {
    const updateCount2 = count(marketplaceStates, (s) => s.pendingUpdate);
    const removeCount2 = count(marketplaceStates, (s) => s.pendingRemove);
    return { updateCount: updateCount2, removeCount: removeCount2 };
  };
  const applyChanges = async (states) => {
    const statesToProcess = states || marketplaceStates;
    const wasInDetailsView = internalView === "details";
    setIsProcessing(true);
    setProcessError(null);
    setSuccessMessage(null);
    setProgressMessage(null);
    try {
      const settings = getSettingsForSource("userSettings");
      let updatedCount = 0;
      let removedCount = 0;
      const refreshedMarketplaces = new Set;
      for (const state of statesToProcess) {
        if (state.pendingRemove) {
          if (state.installedPlugins && state.installedPlugins.length > 0) {
            const newEnabledPlugins = { ...settings?.enabledPlugins };
            for (const plugin of state.installedPlugins) {
              const pluginId = createPluginId(plugin.name, state.name);
              newEnabledPlugins[pluginId] = false;
            }
            updateSettingsForSource("userSettings", {
              enabledPlugins: newEnabledPlugins
            });
          }
          await removeMarketplaceSource(state.name);
          removedCount++;
          logEvent("tengu_marketplace_removed", {
            marketplace_name: state.name,
            plugins_uninstalled: state.installedPlugins?.length || 0
          });
          continue;
        }
        if (state.pendingUpdate) {
          await refreshMarketplace(state.name, (message) => {
            setProgressMessage(message);
          });
          updatedCount++;
          refreshedMarketplaces.add(state.name.toLowerCase());
          logEvent("tengu_marketplace_updated", {
            marketplace_name: state.name
          });
        }
      }
      let updatedPluginCount = 0;
      if (refreshedMarketplaces.size > 0) {
        const updatedPluginIds = await updatePluginsForMarketplaces(refreshedMarketplaces);
        updatedPluginCount = updatedPluginIds.length;
      }
      clearAllCaches();
      if (onManageComplete) {
        await onManageComplete();
      }
      const config = await loadKnownMarketplacesConfig();
      const { enabled, disabled } = await loadAllPlugins();
      const allPlugins = [...enabled, ...disabled];
      const { marketplaces } = await loadMarketplacesWithGracefulDegradation(config);
      const newStates = [];
      for (const { name, config: entry, data: marketplace } of marketplaces) {
        const installedFromMarketplace = allPlugins.filter((plugin) => plugin.source.endsWith(`@${name}`));
        newStates.push({
          name,
          source: getMarketplaceSourceDisplay(entry.source),
          lastUpdated: entry.lastUpdated,
          pluginCount: marketplace?.plugins.length,
          installedPlugins: installedFromMarketplace,
          pendingUpdate: false,
          pendingRemove: false,
          autoUpdate: isMarketplaceAutoUpdate(name, entry)
        });
      }
      newStates.sort((a, b) => {
        if (a.name === "claude-plugin-directory")
          return -1;
        if (b.name === "claude-plugin-directory")
          return 1;
        return a.name.localeCompare(b.name);
      });
      setMarketplaceStates(newStates);
      if (wasInDetailsView && selectedMarketplace) {
        const updatedMarketplace = newStates.find((s) => s.name === selectedMarketplace.name);
        if (updatedMarketplace) {
          setSelectedMarketplace(updatedMarketplace);
        }
      }
      const actions = [];
      if (updatedCount > 0) {
        const pluginPart = updatedPluginCount > 0 ? ` (${updatedPluginCount} ${plural(updatedPluginCount, "plugin")} bumped)` : "";
        actions.push(`Updated ${updatedCount} ${plural(updatedCount, "marketplace")}${pluginPart}`);
      }
      if (removedCount > 0) {
        actions.push(`Removed ${removedCount} ${plural(removedCount, "marketplace")}`);
      }
      if (actions.length > 0) {
        const successMsg = `${figures_default.tick} ${actions.join(", ")}`;
        if (wasInDetailsView) {
          setSuccessMessage(successMsg);
        } else {
          setResult(successMsg);
          setTimeout(setViewState, 2000, { type: "menu" });
        }
      } else if (!wasInDetailsView) {
        setViewState({ type: "menu" });
      }
    } catch (err) {
      const errorMsg = errorMessage(err);
      setProcessError(errorMsg);
      if (setError) {
        setError(errorMsg);
      }
    } finally {
      setIsProcessing(false);
      setProgressMessage(null);
    }
  };
  const confirmRemove = async () => {
    if (!selectedMarketplace)
      return;
    const newStates = marketplaceStates.map((state) => state.name === selectedMarketplace.name ? { ...state, pendingRemove: true } : state);
    setMarketplaceStates(newStates);
    await applyChanges(newStates);
  };
  const buildDetailsMenuOptions = (marketplace) => {
    if (!marketplace)
      return [];
    const options = [
      {
        label: `Browse plugins (${marketplace.pluginCount ?? 0})`,
        value: "browse"
      },
      {
        label: "Update marketplace",
        secondaryLabel: marketplace.lastUpdated ? `(last updated ${new Date(marketplace.lastUpdated).toLocaleDateString()})` : undefined,
        value: "update"
      }
    ];
    if (!shouldSkipPluginAutoupdate()) {
      options.push({
        label: marketplace.autoUpdate ? "Disable auto-update" : "Enable auto-update",
        value: "toggle-auto-update"
      });
    }
    options.push({ label: "Remove marketplace", value: "remove" });
    return options;
  };
  const handleToggleAutoUpdate = async (marketplace) => {
    const newAutoUpdate = !marketplace.autoUpdate;
    try {
      await setMarketplaceAutoUpdate(marketplace.name, newAutoUpdate);
      setMarketplaceStates((prev) => prev.map((state) => state.name === marketplace.name ? { ...state, autoUpdate: newAutoUpdate } : state));
      setSelectedMarketplace((prev) => prev ? { ...prev, autoUpdate: newAutoUpdate } : prev);
    } catch (err) {
      setProcessError(err instanceof Error ? err.message : "Failed to update setting");
    }
  };
  useKeybinding("confirm:no", () => {
    setInternalView("list");
    setDetailsMenuIndex(0);
  }, {
    context: "Confirmation",
    isActive: !isProcessing && (internalView === "details" || internalView === "confirm-remove")
  });
  useKeybinding("confirm:no", () => {
    setMarketplaceStates((prev) => prev.map((state) => ({
      ...state,
      pendingUpdate: false,
      pendingRemove: false
    })));
    setSelectedIndex(0);
  }, {
    context: "Confirmation",
    isActive: !isProcessing && internalView === "list" && hasPendingChanges()
  });
  useKeybinding("confirm:no", () => {
    setViewState({ type: "menu" });
  }, {
    context: "Confirmation",
    isActive: !isProcessing && internalView === "list" && !hasPendingChanges()
  });
  useKeybindings({
    "select:previous": () => setSelectedIndex((prev) => Math.max(0, prev - 1)),
    "select:next": () => {
      const totalItems = marketplaceStates.length + 1;
      setSelectedIndex((prev) => Math.min(totalItems - 1, prev + 1));
    },
    "select:accept": () => {
      const marketplaceIndex = selectedIndex - 1;
      if (selectedIndex === 0) {
        setViewState({ type: "add-marketplace" });
      } else if (hasPendingChanges()) {
        applyChanges();
      } else {
        const marketplace = marketplaceStates[marketplaceIndex];
        if (marketplace) {
          setSelectedMarketplace(marketplace);
          setInternalView("details");
          setDetailsMenuIndex(0);
        }
      }
    }
  }, { context: "Select", isActive: !isProcessing && internalView === "list" });
  use_input_default((input) => {
    const marketplaceIndex = selectedIndex - 1;
    if ((input === "u" || input === "U") && marketplaceIndex >= 0) {
      setMarketplaceStates((prev) => prev.map((state, idx) => idx === marketplaceIndex ? {
        ...state,
        pendingUpdate: !state.pendingUpdate,
        pendingRemove: state.pendingUpdate ? state.pendingRemove : false
      } : state));
    } else if ((input === "r" || input === "R") && marketplaceIndex >= 0) {
      const marketplace = marketplaceStates[marketplaceIndex];
      if (marketplace) {
        setSelectedMarketplace(marketplace);
        setInternalView("confirm-remove");
      }
    }
  }, { isActive: !isProcessing && internalView === "list" });
  useKeybindings({
    "select:previous": () => setDetailsMenuIndex((prev) => Math.max(0, prev - 1)),
    "select:next": () => {
      const menuOptions = buildDetailsMenuOptions(selectedMarketplace);
      setDetailsMenuIndex((prev) => Math.min(menuOptions.length - 1, prev + 1));
    },
    "select:accept": () => {
      if (!selectedMarketplace)
        return;
      const menuOptions = buildDetailsMenuOptions(selectedMarketplace);
      const selectedOption = menuOptions[detailsMenuIndex];
      if (selectedOption?.value === "browse") {
        setViewState({
          type: "browse-marketplace",
          targetMarketplace: selectedMarketplace.name
        });
      } else if (selectedOption?.value === "update") {
        const newStates = marketplaceStates.map((state) => state.name === selectedMarketplace.name ? { ...state, pendingUpdate: true } : state);
        setMarketplaceStates(newStates);
        applyChanges(newStates);
      } else if (selectedOption?.value === "toggle-auto-update") {
        handleToggleAutoUpdate(selectedMarketplace);
      } else if (selectedOption?.value === "remove") {
        setInternalView("confirm-remove");
      }
    }
  }, {
    context: "Select",
    isActive: !isProcessing && internalView === "details"
  });
  use_input_default((input) => {
    if (input === "y" || input === "Y") {
      confirmRemove();
    } else if (input === "n" || input === "N") {
      setInternalView("list");
      setSelectedMarketplace(null);
    }
  }, { isActive: !isProcessing && internalView === "confirm-remove" });
  if (loading) {
    return /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
      children: "Loading marketplaces\u2026"
    }, undefined, false, undefined, this);
  }
  if (marketplaceStates.length === 0) {
    return /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      children: [
        /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
          marginBottom: 1,
          children: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
            bold: true,
            children: "Manage marketplaces"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
          flexDirection: "row",
          gap: 1,
          children: [
            /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
              color: "suggestion",
              children: [
                figures_default.pointer,
                " +"
              ]
            }, undefined, true, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
              bold: true,
              color: "suggestion",
              children: "Add Marketplace"
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
          marginLeft: 3,
          children: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
            dimColor: true,
            italic: true,
            children: exitState.pending ? /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(jsx_dev_runtime8.Fragment, {
              children: [
                "Press ",
                exitState.keyName,
                " again to go back"
              ]
            }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Byline, {
              children: [
                /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ConfigurableShortcutHint, {
                  action: "select:accept",
                  context: "Select",
                  fallback: "Enter",
                  description: "select"
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ConfigurableShortcutHint, {
                  action: "confirm:no",
                  context: "Confirmation",
                  fallback: "Esc",
                  description: "go back"
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  if (internalView === "confirm-remove" && selectedMarketplace) {
    const pluginCount = selectedMarketplace.installedPlugins?.length || 0;
    return /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      children: [
        /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
          bold: true,
          color: "warning",
          children: [
            "Remove marketplace ",
            /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
              italic: true,
              children: selectedMarketplace.name
            }, undefined, false, undefined, this),
            "?"
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
          flexDirection: "column",
          children: [
            pluginCount > 0 && /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
              marginTop: 1,
              children: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
                color: "warning",
                children: [
                  "This will also uninstall ",
                  pluginCount,
                  " ",
                  plural(pluginCount, "plugin"),
                  " from this marketplace:"
                ]
              }, undefined, true, undefined, this)
            }, undefined, false, undefined, this),
            selectedMarketplace.installedPlugins && selectedMarketplace.installedPlugins.length > 0 && /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
              flexDirection: "column",
              marginTop: 1,
              marginLeft: 2,
              children: selectedMarketplace.installedPlugins.map((plugin) => /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
                dimColor: true,
                children: [
                  "\u2022 ",
                  plugin.name
                ]
              }, plugin.name, true, undefined, this))
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
              marginTop: 1,
              children: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
                children: [
                  "Press ",
                  /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
                    bold: true,
                    children: "y"
                  }, undefined, false, undefined, this),
                  " to confirm or ",
                  /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
                    bold: true,
                    children: "n"
                  }, undefined, false, undefined, this),
                  " to cancel"
                ]
              }, undefined, true, undefined, this)
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  if (internalView === "details" && selectedMarketplace) {
    const isUpdating = selectedMarketplace.pendingUpdate || isProcessing;
    const menuOptions = buildDetailsMenuOptions(selectedMarketplace);
    return /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      children: [
        /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
          bold: true,
          children: selectedMarketplace.name
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
          dimColor: true,
          children: selectedMarketplace.source
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
            children: [
              selectedMarketplace.pluginCount || 0,
              " available",
              " ",
              plural(selectedMarketplace.pluginCount || 0, "plugin")
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this),
        selectedMarketplace.installedPlugins && selectedMarketplace.installedPlugins.length > 0 && /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
          flexDirection: "column",
          marginTop: 1,
          children: [
            /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
              bold: true,
              children: [
                "Installed plugins (",
                selectedMarketplace.installedPlugins.length,
                "):"
              ]
            }, undefined, true, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
              flexDirection: "column",
              marginLeft: 1,
              children: selectedMarketplace.installedPlugins.map((plugin) => /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
                flexDirection: "row",
                gap: 1,
                children: [
                  /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
                    children: figures_default.bullet
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
                    flexDirection: "column",
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
                        children: plugin.name
                      }, undefined, false, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
                        dimColor: true,
                        children: plugin.manifest.description
                      }, undefined, false, undefined, this)
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, plugin.name, true, undefined, this))
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        isUpdating && /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          flexDirection: "column",
          children: [
            /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
              color: "claude",
              children: "Updating marketplace\u2026"
            }, undefined, false, undefined, this),
            progressMessage && /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
              dimColor: true,
              children: progressMessage
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        !isUpdating && successMessage && /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
            color: "claude",
            children: successMessage
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        !isUpdating && processError && /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
            color: "error",
            children: processError
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        !isUpdating && /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
          flexDirection: "column",
          marginTop: 1,
          children: menuOptions.map((option, idx) => {
            if (!option)
              return null;
            const isSelected = idx === detailsMenuIndex;
            return /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
              children: [
                /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
                  color: isSelected ? "suggestion" : undefined,
                  children: [
                    isSelected ? figures_default.pointer : " ",
                    " ",
                    option.label
                  ]
                }, undefined, true, undefined, this),
                option.secondaryLabel && /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
                  dimColor: true,
                  children: [
                    " ",
                    option.secondaryLabel
                  ]
                }, undefined, true, undefined, this)
              ]
            }, option.value, true, undefined, this);
          })
        }, undefined, false, undefined, this),
        !isUpdating && !shouldSkipPluginAutoupdate() && selectedMarketplace.autoUpdate && /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
            dimColor: true,
            children: "Auto-update enabled. MiMo Code will automatically update this marketplace and its installed plugins."
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
          marginLeft: 3,
          children: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
            dimColor: true,
            italic: true,
            children: isUpdating ? /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(jsx_dev_runtime8.Fragment, {
              children: "Please wait\u2026"
            }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Byline, {
              children: [
                /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ConfigurableShortcutHint, {
                  action: "select:accept",
                  context: "Select",
                  fallback: "Enter",
                  description: "select"
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ConfigurableShortcutHint, {
                  action: "confirm:no",
                  context: "Confirmation",
                  fallback: "Esc",
                  description: "go back"
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  const { updateCount, removeCount } = getPendingCounts();
  return /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    children: [
      /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
        marginBottom: 1,
        children: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
          bold: true,
          children: "Manage marketplaces"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
        flexDirection: "row",
        gap: 1,
        marginBottom: 1,
        children: [
          /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
            color: selectedIndex === 0 ? "suggestion" : undefined,
            children: [
              selectedIndex === 0 ? figures_default.pointer : " ",
              " +"
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
            bold: true,
            color: selectedIndex === 0 ? "suggestion" : undefined,
            children: "Add Marketplace"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        children: marketplaceStates.map((state, idx) => {
          const isSelected = idx + 1 === selectedIndex;
          const indicators = [];
          if (state.pendingUpdate)
            indicators.push("UPDATE");
          if (state.pendingRemove)
            indicators.push("REMOVE");
          return /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
            flexDirection: "row",
            gap: 1,
            marginBottom: 1,
            children: [
              /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
                color: isSelected ? "suggestion" : undefined,
                children: [
                  isSelected ? figures_default.pointer : " ",
                  " ",
                  state.pendingRemove ? figures_default.cross : figures_default.bullet
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
                flexDirection: "column",
                flexGrow: 1,
                children: [
                  /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
                    flexDirection: "row",
                    gap: 1,
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
                        bold: true,
                        strikethrough: state.pendingRemove,
                        dimColor: state.pendingRemove,
                        children: [
                          state.name === "claude-plugins-official" && /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
                            color: "claude",
                            children: "\u273B "
                          }, undefined, false, undefined, this),
                          state.name,
                          state.name === "claude-plugins-official" && /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
                            color: "claude",
                            children: " \u273B"
                          }, undefined, false, undefined, this)
                        ]
                      }, undefined, true, undefined, this),
                      indicators.length > 0 && /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
                        color: "warning",
                        children: [
                          "[",
                          indicators.join(", "),
                          "]"
                        ]
                      }, undefined, true, undefined, this)
                    ]
                  }, undefined, true, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: state.source
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: [
                      state.pluginCount !== undefined && /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(jsx_dev_runtime8.Fragment, {
                        children: [
                          state.pluginCount,
                          " available"
                        ]
                      }, undefined, true, undefined, this),
                      state.installedPlugins && state.installedPlugins.length > 0 && /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(jsx_dev_runtime8.Fragment, {
                        children: [
                          " \u2022 ",
                          state.installedPlugins.length,
                          " installed"
                        ]
                      }, undefined, true, undefined, this),
                      state.lastUpdated && /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(jsx_dev_runtime8.Fragment, {
                        children: [
                          " ",
                          "\u2022 Updated",
                          " ",
                          new Date(state.lastUpdated).toLocaleDateString()
                        ]
                      }, undefined, true, undefined, this)
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, undefined, true, undefined, this)
            ]
          }, state.name, true, undefined, this);
        })
      }, undefined, false, undefined, this),
      hasPendingChanges() && /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
        marginTop: 1,
        flexDirection: "column",
        children: [
          /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
                bold: true,
                children: "Pending changes:"
              }, undefined, false, undefined, this),
              " ",
              /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
                dimColor: true,
                children: "Enter to apply"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          updateCount > 0 && /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
            children: [
              "\u2022 Update ",
              updateCount,
              " ",
              plural(updateCount, "marketplace")
            ]
          }, undefined, true, undefined, this),
          removeCount > 0 && /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
            color: "warning",
            children: [
              "\u2022 Remove ",
              removeCount,
              " ",
              plural(removeCount, "marketplace")
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this),
      isProcessing && /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
        marginTop: 1,
        children: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
          color: "claude",
          children: "Processing changes\u2026"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      processError && /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
        marginTop: 1,
        children: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
          color: "error",
          children: processError
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ManageMarketplacesKeyHints, {
        exitState,
        hasPendingActions: hasPendingChanges()
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function ManageMarketplacesKeyHints({
  exitState,
  hasPendingActions
}) {
  if (exitState.pending) {
    return /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
      marginTop: 1,
      children: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
        dimColor: true,
        italic: true,
        children: [
          "Press ",
          exitState.keyName,
          " again to go back"
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
    marginTop: 1,
    children: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
      dimColor: true,
      italic: true,
      children: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Byline, {
        children: [
          hasPendingActions && /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ConfigurableShortcutHint, {
            action: "select:accept",
            context: "Select",
            fallback: "Enter",
            description: "apply changes"
          }, undefined, false, undefined, this),
          !hasPendingActions && /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ConfigurableShortcutHint, {
            action: "select:accept",
            context: "Select",
            fallback: "Enter",
            description: "select"
          }, undefined, false, undefined, this),
          !hasPendingActions && /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(KeyboardShortcutHint, {
            shortcut: "u",
            action: "update"
          }, undefined, false, undefined, this),
          !hasPendingActions && /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(KeyboardShortcutHint, {
            shortcut: "r",
            action: "remove"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ConfigurableShortcutHint, {
            action: "confirm:no",
            context: "Confirmation",
            fallback: "Esc",
            description: hasPendingActions ? "cancel" : "go back"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
var import_react6, jsx_dev_runtime8;
var init_ManageMarketplaces = __esm(() => {
  init_figures();
  init_analytics();
  init_ConfigurableShortcutHint();
  init_src();
  init_src();
  init_useKeybinding();
  init_array();
  init_config();
  init_errors();
  init_cacheUtils();
  init_marketplaceHelpers();
  init_marketplaceManager();
  init_pluginAutoupdate();
  init_pluginLoader();
  init_schemas();
  init_settings();
  init_stringUtils();
  import_react6 = __toESM(require_react(), 1);
  jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/mcp/CapabilitiesSection.tsx
function CapabilitiesSection({
  serverToolsCount,
  serverPromptsCount,
  serverResourcesCount
}) {
  const capabilities = [];
  if (serverToolsCount > 0) {
    capabilities.push("tools");
  }
  if (serverResourcesCount > 0) {
    capabilities.push("resources");
  }
  if (serverPromptsCount > 0) {
    capabilities.push("prompts");
  }
  return /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ThemedBox_default, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ThemedText, {
        bold: true,
        children: "Capabilities: "
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ThemedText, {
        color: "text",
        children: capabilities.length > 0 ? /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Byline, {
          children: capabilities
        }, undefined, false, undefined, this) : "none"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var jsx_dev_runtime9;
var init_CapabilitiesSection = __esm(() => {
  init_src();
  init_src();
  jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/mcp/utils/reconnectHelpers.tsx
function handleReconnectResult(result, serverName) {
  switch (result.client.type) {
    case "connected":
      return {
        message: `Reconnected to ${serverName}.`,
        success: true
      };
    case "needs-auth":
      return {
        message: `${serverName} requires authentication. Use the 'Authenticate' option.`,
        success: false
      };
    case "failed":
      return {
        message: `Failed to reconnect to ${serverName}.`,
        success: false
      };
    default:
      return {
        message: `Unknown result when reconnecting to ${serverName}.`,
        success: false
      };
  }
}
function handleReconnectError(error, serverName) {
  const errorMessage2 = error instanceof Error ? error.message : String(error);
  return `Error reconnecting to ${serverName}: ${errorMessage2}`;
}
var init_reconnectHelpers = () => {};

// src/components/mcp/MCPRemoteServerMenu.tsx
function MCPRemoteServerMenu({
  server,
  serverToolsCount,
  onViewTools,
  onCancel,
  onComplete,
  borderless = false
}) {
  const [theme] = useTheme();
  const exitState = useExitOnCtrlCDWithKeybindings();
  const { columns: terminalColumns } = useTerminalSize();
  const [isAuthenticating, setIsAuthenticating] = import_react7.default.useState(false);
  const [error, setError] = import_react7.default.useState(null);
  const mcp = useAppState((s) => s.mcp);
  const setAppState = useSetAppState();
  const [authorizationUrl, setAuthorizationUrl] = import_react7.default.useState(null);
  const [isReconnecting, setIsReconnecting] = import_react7.useState(false);
  const authAbortControllerRef = import_react7.useRef(null);
  const [isClaudeAIAuthenticating, setIsClaudeAIAuthenticating] = import_react7.useState(false);
  const [claudeAIAuthUrl, setClaudeAIAuthUrl] = import_react7.useState(null);
  const [isClaudeAIClearingAuth, setIsClaudeAIClearingAuth] = import_react7.useState(false);
  const [claudeAIClearAuthUrl, setClaudeAIClearAuthUrl] = import_react7.useState(null);
  const [claudeAIClearAuthBrowserOpened, setClaudeAIClearAuthBrowserOpened] = import_react7.useState(false);
  const [urlCopied, setUrlCopied] = import_react7.useState(false);
  const copyTimeoutRef = import_react7.useRef(undefined);
  const unmountedRef = import_react7.useRef(false);
  const [callbackUrlInput, setCallbackUrlInput] = import_react7.useState("");
  const [callbackUrlCursorOffset, setCallbackUrlCursorOffset] = import_react7.useState(0);
  const [manualCallbackSubmit, setManualCallbackSubmit] = import_react7.useState(null);
  import_react7.useEffect(() => () => {
    unmountedRef.current = true;
    authAbortControllerRef.current?.abort();
    if (copyTimeoutRef.current !== undefined) {
      clearTimeout(copyTimeoutRef.current);
    }
  }, []);
  const isEffectivelyAuthenticated = server.isAuthenticated || server.client.type === "connected" && serverToolsCount > 0;
  const reconnectMcpServer = useMcpReconnect();
  const handleClaudeAIAuthComplete = import_react7.default.useCallback(async () => {
    setIsClaudeAIAuthenticating(false);
    setClaudeAIAuthUrl(null);
    setIsReconnecting(true);
    try {
      const result = await reconnectMcpServer(server.name);
      const success = result.client.type === "connected";
      logEvent("tengu_claudeai_mcp_auth_completed", { success });
      if (success) {
        onComplete?.(`Authentication successful. Connected to ${server.name}.`);
      } else if (result.client.type === "needs-auth") {
        onComplete?.("Authentication successful, but server still requires authentication. You may need to manually restart MiMo Code.");
      } else {
        onComplete?.("Authentication successful, but server reconnection failed. You may need to manually restart MiMo Code for the changes to take effect.");
      }
    } catch (err) {
      logEvent("tengu_claudeai_mcp_auth_completed", { success: false });
      onComplete?.(handleReconnectError(err, server.name));
    } finally {
      setIsReconnecting(false);
    }
  }, [reconnectMcpServer, server.name, onComplete]);
  const handleClaudeAIClearAuthComplete = import_react7.default.useCallback(async () => {
    await clearServerCache(server.name, {
      ...server.config,
      scope: server.scope
    });
    setAppState((prev) => {
      const newClients = prev.mcp.clients.map((c) => c.name === server.name ? { ...c, type: "needs-auth" } : c);
      const newTools = excludeToolsByServer(prev.mcp.tools, server.name);
      const newCommands = excludeCommandsByServer(prev.mcp.commands, server.name);
      const newResources = excludeResourcesByServer(prev.mcp.resources, server.name);
      return {
        ...prev,
        mcp: {
          ...prev.mcp,
          clients: newClients,
          tools: newTools,
          commands: newCommands,
          resources: newResources
        }
      };
    });
    logEvent("tengu_claudeai_mcp_clear_auth_completed", {});
    onComplete?.(`Disconnected from ${server.name}.`);
    setIsClaudeAIClearingAuth(false);
    setClaudeAIClearAuthUrl(null);
    setClaudeAIClearAuthBrowserOpened(false);
  }, [server.name, server.config, server.scope, setAppState, onComplete]);
  useKeybinding("confirm:no", () => {
    authAbortControllerRef.current?.abort();
    authAbortControllerRef.current = null;
    setIsAuthenticating(false);
    setAuthorizationUrl(null);
  }, {
    context: "Confirmation",
    isActive: isAuthenticating
  });
  useKeybinding("confirm:no", () => {
    setIsClaudeAIAuthenticating(false);
    setClaudeAIAuthUrl(null);
  }, {
    context: "Confirmation",
    isActive: isClaudeAIAuthenticating
  });
  useKeybinding("confirm:no", () => {
    setIsClaudeAIClearingAuth(false);
    setClaudeAIClearAuthUrl(null);
    setClaudeAIClearAuthBrowserOpened(false);
  }, {
    context: "Confirmation",
    isActive: isClaudeAIClearingAuth
  });
  use_input_default((input, key) => {
    if (key.return && isClaudeAIAuthenticating) {
      handleClaudeAIAuthComplete();
    }
    if (key.return && isClaudeAIClearingAuth) {
      if (claudeAIClearAuthBrowserOpened) {
        handleClaudeAIClearAuthComplete();
      } else {
        const connectorsUrl = `${getOauthConfig().CLAUDE_AI_ORIGIN}/settings/connectors`;
        setClaudeAIClearAuthUrl(connectorsUrl);
        setClaudeAIClearAuthBrowserOpened(true);
        openBrowser(connectorsUrl);
      }
    }
    if (input === "c" && !urlCopied) {
      const urlToCopy = authorizationUrl || claudeAIAuthUrl || claudeAIClearAuthUrl;
      if (urlToCopy) {
        setClipboard(urlToCopy).then((raw) => {
          if (unmountedRef.current)
            return;
          if (raw)
            process.stdout.write(raw);
          setUrlCopied(true);
          if (copyTimeoutRef.current !== undefined) {
            clearTimeout(copyTimeoutRef.current);
          }
          copyTimeoutRef.current = setTimeout(setUrlCopied, 2000, false);
        });
      }
    }
  });
  const capitalizedServerName = capitalize(String(server.name));
  const serverCommandsCount = filterMcpPromptsByServer(mcp.commands, server.name).length;
  const toggleMcpServer = useMcpToggleEnabled();
  const handleClaudeAIAuth = import_react7.default.useCallback(async () => {
    const claudeAiBaseUrl = getOauthConfig().CLAUDE_AI_ORIGIN;
    const accountInfo = getOauthAccountInfo();
    const orgUuid = accountInfo?.organizationUuid;
    let authUrl;
    if (orgUuid && server.config.type === "claudeai-proxy" && server.config.id) {
      const serverId = server.config.id.startsWith("mcprs") ? "mcpsrv" + server.config.id.slice(5) : server.config.id;
      const productSurface = encodeURIComponent(process.env.CLAUDE_CODE_ENTRYPOINT || "cli");
      authUrl = `${claudeAiBaseUrl}/api/organizations/${orgUuid}/mcp/start-auth/${serverId}?product_surface=${productSurface}`;
    } else {
      authUrl = `${claudeAiBaseUrl}/settings/connectors`;
    }
    setClaudeAIAuthUrl(authUrl);
    setIsClaudeAIAuthenticating(true);
    logEvent("tengu_claudeai_mcp_auth_started", {});
    await openBrowser(authUrl);
  }, [server.config]);
  const handleClaudeAIClearAuth = import_react7.default.useCallback(() => {
    setIsClaudeAIClearingAuth(true);
    logEvent("tengu_claudeai_mcp_clear_auth_started", {});
  }, []);
  const handleToggleEnabled = import_react7.default.useCallback(async () => {
    const wasEnabled = server.client.type !== "disabled";
    try {
      await toggleMcpServer(server.name);
      if (server.config.type === "claudeai-proxy") {
        logEvent("tengu_claudeai_mcp_toggle", {
          new_state: wasEnabled ? "disabled" : "enabled"
        });
      }
      onCancel();
    } catch (err) {
      const action = wasEnabled ? "disable" : "enable";
      onComplete?.(`Failed to ${action} MCP server '${server.name}': ${errorMessage(err)}`);
    }
  }, [
    server.client.type,
    server.config.type,
    server.name,
    toggleMcpServer,
    onCancel,
    onComplete
  ]);
  const handleAuthenticate = import_react7.default.useCallback(async () => {
    if (server.config.type === "claudeai-proxy")
      return;
    setIsAuthenticating(true);
    setError(null);
    const controller = new AbortController;
    authAbortControllerRef.current = controller;
    try {
      if (server.isAuthenticated && server.config) {
        await revokeServerTokens(server.name, server.config, {
          preserveStepUpState: true
        });
      }
      if (server.config) {
        await performMCPOAuthFlow(server.name, server.config, setAuthorizationUrl, controller.signal, {
          onWaitingForCallback: (submit) => {
            setManualCallbackSubmit(() => submit);
          }
        });
        logEvent("tengu_mcp_auth_config_authenticate", {
          wasAuthenticated: server.isAuthenticated
        });
        const result = await reconnectMcpServer(server.name);
        if (result.client.type === "connected") {
          const message = isEffectivelyAuthenticated ? `Authentication successful. Reconnected to ${server.name}.` : `Authentication successful. Connected to ${server.name}.`;
          onComplete?.(message);
        } else if (result.client.type === "needs-auth") {
          onComplete?.("Authentication successful, but server still requires authentication. You may need to manually restart MiMo Code.");
        } else {
          logMCPDebug(server.name, `Reconnection failed after authentication`);
          onComplete?.("Authentication successful, but server reconnection failed. You may need to manually restart MiMo Code for the changes to take effect.");
        }
      }
    } catch (err) {
      if (err instanceof Error && !(err instanceof AuthenticationCancelledError)) {
        setError(err.message);
      }
    } finally {
      setIsAuthenticating(false);
      authAbortControllerRef.current = null;
      setManualCallbackSubmit(null);
      setCallbackUrlInput("");
    }
  }, [
    server.isAuthenticated,
    server.config,
    server.name,
    onComplete,
    reconnectMcpServer,
    isEffectivelyAuthenticated
  ]);
  const handleClearAuth = async () => {
    if (server.config.type === "claudeai-proxy")
      return;
    if (server.config) {
      await revokeServerTokens(server.name, server.config);
      logEvent("tengu_mcp_auth_config_clear", {});
      await clearServerCache(server.name, {
        ...server.config,
        scope: server.scope
      });
      setAppState((prev) => {
        const newClients = prev.mcp.clients.map((c) => c.name === server.name ? { ...c, type: "failed" } : c);
        const newTools = excludeToolsByServer(prev.mcp.tools, server.name);
        const newCommands = excludeCommandsByServer(prev.mcp.commands, server.name);
        const newResources = excludeResourcesByServer(prev.mcp.resources, server.name);
        return {
          ...prev,
          mcp: {
            ...prev.mcp,
            clients: newClients,
            tools: newTools,
            commands: newCommands,
            resources: newResources
          }
        };
      });
      onComplete?.(`Authentication cleared for ${server.name}.`);
    }
  };
  if (isAuthenticating) {
    const authCopy = server.config.type !== "claudeai-proxy" && server.config.oauth?.xaa ? " Authenticating via your identity provider" : " A browser window will open for authentication";
    return /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      gap: 1,
      padding: 1,
      children: [
        /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
          color: "claude",
          children: [
            "Authenticating with ",
            server.name,
            "\u2026"
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedBox_default, {
          children: [
            /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Spinner, {}, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
              children: authCopy
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        authorizationUrl && /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedBox_default, {
          flexDirection: "column",
          children: [
            /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedBox_default, {
              children: [
                /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                  dimColor: true,
                  children: [
                    "If your browser doesn't open automatically, copy this URL manually",
                    " "
                  ]
                }, undefined, true, undefined, this),
                urlCopied ? /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                  color: "success",
                  children: "(Copied!)"
                }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                  dimColor: true,
                  children: /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(KeyboardShortcutHint, {
                    shortcut: "c",
                    action: "copy",
                    parens: true
                  }, undefined, false, undefined, this)
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Link, {
              url: authorizationUrl
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        isAuthenticating && authorizationUrl && manualCallbackSubmit && /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedBox_default, {
          flexDirection: "column",
          marginTop: 1,
          children: [
            /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
              dimColor: true,
              children: "If the redirect page shows a connection error, paste the URL from your browser's address bar:"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedBox_default, {
              children: [
                /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                  dimColor: true,
                  children: [
                    "URL ",
                    ">",
                    " "
                  ]
                }, undefined, true, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(TextInput, {
                  value: callbackUrlInput,
                  onChange: setCallbackUrlInput,
                  onSubmit: (value) => {
                    manualCallbackSubmit(value.trim());
                    setCallbackUrlInput("");
                  },
                  cursorOffset: callbackUrlCursorOffset,
                  onChangeCursorOffset: setCallbackUrlCursorOffset,
                  columns: terminalColumns - 8
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedBox_default, {
          marginLeft: 3,
          children: /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
            dimColor: true,
            children: "Return here after authenticating in your browser. Press Esc to go back."
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  if (isClaudeAIAuthenticating) {
    return /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      gap: 1,
      padding: 1,
      children: [
        /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
          color: "claude",
          children: [
            "Authenticating with ",
            server.name,
            "\u2026"
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedBox_default, {
          children: [
            /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Spinner, {}, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
              children: " A browser window will open for authentication"
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        claudeAIAuthUrl && /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedBox_default, {
          flexDirection: "column",
          children: [
            /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedBox_default, {
              children: [
                /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                  dimColor: true,
                  children: [
                    "If your browser doesn't open automatically, copy this URL manually",
                    " "
                  ]
                }, undefined, true, undefined, this),
                urlCopied ? /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                  color: "success",
                  children: "(Copied!)"
                }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                  dimColor: true,
                  children: /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(KeyboardShortcutHint, {
                    shortcut: "c",
                    action: "copy",
                    parens: true
                  }, undefined, false, undefined, this)
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Link, {
              url: claudeAIAuthUrl
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedBox_default, {
          marginLeft: 3,
          flexDirection: "column",
          children: [
            /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
              color: "permission",
              children: [
                "Press ",
                /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                  bold: true,
                  children: "Enter"
                }, undefined, false, undefined, this),
                " after authenticating in your browser."
              ]
            }, undefined, true, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
              dimColor: true,
              italic: true,
              children: /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ConfigurableShortcutHint, {
                action: "confirm:no",
                context: "Confirmation",
                fallback: "Esc",
                description: "back"
              }, undefined, false, undefined, this)
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  if (isClaudeAIClearingAuth) {
    return /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      gap: 1,
      padding: 1,
      children: [
        /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
          color: "claude",
          children: [
            "Clear authentication for ",
            server.name
          ]
        }, undefined, true, undefined, this),
        claudeAIClearAuthBrowserOpened ? /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(jsx_dev_runtime10.Fragment, {
          children: [
            /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
              children: 'Find the MCP server in the browser and click "Disconnect".'
            }, undefined, false, undefined, this),
            claudeAIClearAuthUrl && /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedBox_default, {
              flexDirection: "column",
              children: [
                /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedBox_default, {
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                      dimColor: true,
                      children: [
                        "If your browser didn't open automatically, copy this URL manually",
                        " "
                      ]
                    }, undefined, true, undefined, this),
                    urlCopied ? /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                      color: "success",
                      children: "(Copied!)"
                    }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                      dimColor: true,
                      children: /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(KeyboardShortcutHint, {
                        shortcut: "c",
                        action: "copy",
                        parens: true
                      }, undefined, false, undefined, this)
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Link, {
                  url: claudeAIClearAuthUrl
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedBox_default, {
              marginLeft: 3,
              flexDirection: "column",
              children: [
                /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                  color: "permission",
                  children: [
                    "Press ",
                    /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                      bold: true,
                      children: "Enter"
                    }, undefined, false, undefined, this),
                    " when done."
                  ]
                }, undefined, true, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                  dimColor: true,
                  italic: true,
                  children: /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ConfigurableShortcutHint, {
                    action: "confirm:no",
                    context: "Confirmation",
                    fallback: "Esc",
                    description: "back"
                  }, undefined, false, undefined, this)
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this)
          ]
        }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(jsx_dev_runtime10.Fragment, {
          children: [
            /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
              children: 'This will open claude.ai in the browser. Find the MCP server in the list and click "Disconnect".'
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedBox_default, {
              marginLeft: 3,
              flexDirection: "column",
              children: [
                /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                  color: "permission",
                  children: [
                    "Press ",
                    /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                      bold: true,
                      children: "Enter"
                    }, undefined, false, undefined, this),
                    " to open the browser."
                  ]
                }, undefined, true, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                  dimColor: true,
                  italic: true,
                  children: /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ConfigurableShortcutHint, {
                    action: "confirm:no",
                    context: "Confirmation",
                    fallback: "Esc",
                    description: "back"
                  }, undefined, false, undefined, this)
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this)
          ]
        }, undefined, true, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  if (isReconnecting) {
    return /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      gap: 1,
      padding: 1,
      children: [
        /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
          color: "text",
          children: [
            "Connecting to ",
            /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
              bold: true,
              children: server.name
            }, undefined, false, undefined, this),
            "\u2026"
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedBox_default, {
          children: [
            /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Spinner, {}, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
              children: " Establishing connection to MCP server"
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
          dimColor: true,
          children: "This may take a few moments."
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  const menuOptions = [];
  if (server.client.type === "disabled") {
    menuOptions.push({
      label: "Enable",
      value: "toggle-enabled"
    });
  }
  if (server.client.type === "connected" && serverToolsCount > 0) {
    menuOptions.push({
      label: "View tools",
      value: "tools"
    });
  }
  if (server.config.type === "claudeai-proxy") {
    if (server.client.type === "connected") {
      menuOptions.push({
        label: "Clear authentication",
        value: "claudeai-clear-auth"
      });
    } else if (server.client.type !== "disabled") {
      menuOptions.push({
        label: "Authenticate",
        value: "claudeai-auth"
      });
    }
  } else {
    if (isEffectivelyAuthenticated) {
      menuOptions.push({
        label: "Re-authenticate",
        value: "reauth"
      });
      menuOptions.push({
        label: "Clear authentication",
        value: "clear-auth"
      });
    }
    if (!isEffectivelyAuthenticated) {
      menuOptions.push({
        label: "Authenticate",
        value: "auth"
      });
    }
  }
  if (server.client.type !== "disabled") {
    if (server.client.type !== "needs-auth") {
      menuOptions.push({
        label: "Reconnect",
        value: "reconnectMcpServer"
      });
    }
    menuOptions.push({
      label: "Disable",
      value: "toggle-enabled"
    });
  }
  if (menuOptions.length === 0) {
    menuOptions.push({
      label: "Back",
      value: "back"
    });
  }
  return /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    children: [
      /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        paddingX: 1,
        borderStyle: borderless ? undefined : "round",
        children: [
          /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedBox_default, {
            marginBottom: 1,
            children: /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
              bold: true,
              children: [
                capitalizedServerName,
                " MCP Server"
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            gap: 0,
            children: [
              /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedBox_default, {
                children: [
                  /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                    bold: true,
                    children: "Status: "
                  }, undefined, false, undefined, this),
                  server.client.type === "disabled" ? /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                    children: [
                      color("inactive", theme)(figures_default.radioOff),
                      " disabled"
                    ]
                  }, undefined, true, undefined, this) : server.client.type === "connected" ? /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                    children: [
                      color("success", theme)(figures_default.tick),
                      " connected"
                    ]
                  }, undefined, true, undefined, this) : server.client.type === "pending" ? /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(jsx_dev_runtime10.Fragment, {
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                        dimColor: true,
                        children: figures_default.radioOff
                      }, undefined, false, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                        children: " connecting\u2026"
                      }, undefined, false, undefined, this)
                    ]
                  }, undefined, true, undefined, this) : server.client.type === "needs-auth" ? /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                    children: [
                      color("warning", theme)(figures_default.triangleUpOutline),
                      " needs authentication"
                    ]
                  }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                    children: [
                      color("error", theme)(figures_default.cross),
                      " failed"
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, undefined, true, undefined, this),
              server.transport !== "claudeai-proxy" && /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedBox_default, {
                children: [
                  /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                    bold: true,
                    children: "Auth: "
                  }, undefined, false, undefined, this),
                  isEffectivelyAuthenticated ? /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                    children: [
                      color("success", theme)(figures_default.tick),
                      " authenticated"
                    ]
                  }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                    children: [
                      color("error", theme)(figures_default.cross),
                      " not authenticated"
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedBox_default, {
                children: [
                  /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                    bold: true,
                    children: "URL: "
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: server.config.url
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedBox_default, {
                children: [
                  /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                    bold: true,
                    children: "Config location: "
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: describeMcpConfigFilePath(server.scope)
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this),
              server.client.type === "connected" && /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(CapabilitiesSection, {
                serverToolsCount,
                serverPromptsCount: serverCommandsCount,
                serverResourcesCount: mcp.resources[server.name]?.length || 0
              }, undefined, false, undefined, this),
              server.client.type === "connected" && serverToolsCount > 0 && /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedBox_default, {
                children: [
                  /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                    bold: true,
                    children: "Tools: "
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: [
                      serverToolsCount,
                      " tools"
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, undefined, true, undefined, this)
            ]
          }, undefined, true, undefined, this),
          error && /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedBox_default, {
            marginTop: 1,
            children: /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
              color: "error",
              children: [
                "Error: ",
                error
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this),
          menuOptions.length > 0 && /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedBox_default, {
            marginTop: 1,
            children: /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Select, {
              options: menuOptions,
              onChange: async (value) => {
                switch (value) {
                  case "tools":
                    onViewTools();
                    break;
                  case "auth":
                  case "reauth":
                    await handleAuthenticate();
                    break;
                  case "clear-auth":
                    await handleClearAuth();
                    break;
                  case "claudeai-auth":
                    await handleClaudeAIAuth();
                    break;
                  case "claudeai-clear-auth":
                    handleClaudeAIClearAuth();
                    break;
                  case "reconnectMcpServer":
                    setIsReconnecting(true);
                    try {
                      const result = await reconnectMcpServer(server.name);
                      if (server.config.type === "claudeai-proxy") {
                        logEvent("tengu_claudeai_mcp_reconnect", {
                          success: result.client.type === "connected"
                        });
                      }
                      const { message } = handleReconnectResult(result, server.name);
                      onComplete?.(message);
                    } catch (err) {
                      if (server.config.type === "claudeai-proxy") {
                        logEvent("tengu_claudeai_mcp_reconnect", {
                          success: false
                        });
                      }
                      onComplete?.(handleReconnectError(err, server.name));
                    } finally {
                      setIsReconnecting(false);
                    }
                    break;
                  case "toggle-enabled":
                    await handleToggleEnabled();
                    break;
                  case "back":
                    onCancel();
                    break;
                }
              },
              onCancel
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedBox_default, {
        marginTop: 1,
        children: /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
          dimColor: true,
          italic: true,
          children: exitState.pending ? /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(jsx_dev_runtime10.Fragment, {
            children: [
              "Press ",
              exitState.keyName,
              " again to exit"
            ]
          }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Byline, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(KeyboardShortcutHint, {
                shortcut: "\u2191\u2193",
                action: "navigate"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(KeyboardShortcutHint, {
                shortcut: "Enter",
                action: "select"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ConfigurableShortcutHint, {
                action: "confirm:no",
                context: "Confirmation",
                fallback: "Esc",
                description: "back"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var import_react7, jsx_dev_runtime10;
var init_MCPRemoteServerMenu = __esm(() => {
  init_figures();
  init_analytics();
  init_oauth();
  init_useExitOnCtrlCDWithKeybindings();
  init_useTerminalSize();
  init_src();
  init_src();
  init_useKeybinding();
  init_auth2();
  init_client();
  init_MCPConnectionManager();
  init_utils();
  init_AppState();
  init_auth();
  init_browser();
  init_errors();
  init_log();
  init_stringUtils();
  init_ConfigurableShortcutHint();
  init_CustomSelect();
  init_src();
  init_Spinner();
  init_TextInput();
  init_CapabilitiesSection();
  init_reconnectHelpers();
  import_react7 = __toESM(require_react(), 1);
  jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/mcp/MCPStdioServerMenu.tsx
function MCPStdioServerMenu({
  server,
  serverToolsCount,
  onViewTools,
  onCancel,
  onComplete,
  borderless = false
}) {
  const [theme] = useTheme();
  const exitState = useExitOnCtrlCDWithKeybindings();
  const mcp = useAppState((s) => s.mcp);
  const reconnectMcpServer = useMcpReconnect();
  const toggleMcpServer = useMcpToggleEnabled();
  const [isReconnecting, setIsReconnecting] = import_react8.useState(false);
  const handleToggleEnabled = import_react8.default.useCallback(async () => {
    const wasEnabled = server.client.type !== "disabled";
    try {
      await toggleMcpServer(server.name);
      onCancel();
    } catch (err) {
      const action = wasEnabled ? "disable" : "enable";
      onComplete(`Failed to ${action} MCP server '${server.name}': ${errorMessage(err)}`);
    }
  }, [server.client.type, server.name, toggleMcpServer, onCancel, onComplete]);
  const capitalizedServerName = capitalize(String(server.name));
  const serverCommandsCount = filterMcpPromptsByServer(mcp.commands, server.name).length;
  const menuOptions = [];
  if (server.client.type !== "disabled" && serverToolsCount > 0) {
    menuOptions.push({
      label: "View tools",
      value: "tools"
    });
  }
  if (server.client.type !== "disabled") {
    menuOptions.push({
      label: "Reconnect",
      value: "reconnectMcpServer"
    });
  }
  menuOptions.push({
    label: server.client.type !== "disabled" ? "Disable" : "Enable",
    value: "toggle-enabled"
  });
  if (menuOptions.length === 0) {
    menuOptions.push({
      label: "Back",
      value: "back"
    });
  }
  if (isReconnecting) {
    return /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      gap: 1,
      padding: 1,
      children: [
        /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedText, {
          color: "text",
          children: [
            "Reconnecting to ",
            /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedText, {
              bold: true,
              children: server.name
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedBox_default, {
          children: [
            /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(Spinner, {}, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedText, {
              children: " Restarting MCP server process"
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedText, {
          dimColor: true,
          children: "This may take a few moments."
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    children: [
      /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        paddingX: 1,
        borderStyle: borderless ? undefined : "round",
        children: [
          /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedBox_default, {
            marginBottom: 1,
            children: /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedText, {
              bold: true,
              children: [
                capitalizedServerName,
                " MCP Server"
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            gap: 0,
            children: [
              /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedBox_default, {
                children: [
                  /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedText, {
                    bold: true,
                    children: "Status: "
                  }, undefined, false, undefined, this),
                  server.client.type === "disabled" ? /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedText, {
                    children: [
                      color("inactive", theme)(figures_default.radioOff),
                      " disabled"
                    ]
                  }, undefined, true, undefined, this) : server.client.type === "connected" ? /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedText, {
                    children: [
                      color("success", theme)(figures_default.tick),
                      " connected"
                    ]
                  }, undefined, true, undefined, this) : server.client.type === "pending" ? /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(jsx_dev_runtime11.Fragment, {
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedText, {
                        dimColor: true,
                        children: figures_default.radioOff
                      }, undefined, false, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedText, {
                        children: " connecting\u2026"
                      }, undefined, false, undefined, this)
                    ]
                  }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedText, {
                    children: [
                      color("error", theme)(figures_default.cross),
                      " failed"
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedBox_default, {
                children: [
                  /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedText, {
                    bold: true,
                    children: "Command: "
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: server.config.command
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this),
              server.config.args && server.config.args.length > 0 && /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedBox_default, {
                children: [
                  /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedText, {
                    bold: true,
                    children: "Args: "
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: server.config.args.join(" ")
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedBox_default, {
                children: [
                  /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedText, {
                    bold: true,
                    children: "Config location: "
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: describeMcpConfigFilePath(getMcpConfigByName(server.name)?.scope ?? "dynamic")
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this),
              server.client.type === "connected" && /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(CapabilitiesSection, {
                serverToolsCount,
                serverPromptsCount: serverCommandsCount,
                serverResourcesCount: mcp.resources[server.name]?.length || 0
              }, undefined, false, undefined, this),
              server.client.type === "connected" && serverToolsCount > 0 && /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedBox_default, {
                children: [
                  /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedText, {
                    bold: true,
                    children: "Tools: "
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: [
                      serverToolsCount,
                      " tools"
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, undefined, true, undefined, this)
            ]
          }, undefined, true, undefined, this),
          menuOptions.length > 0 && /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedBox_default, {
            marginTop: 1,
            children: /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(Select, {
              options: menuOptions,
              onChange: async (value) => {
                if (value === "tools") {
                  onViewTools();
                } else if (value === "reconnectMcpServer") {
                  setIsReconnecting(true);
                  try {
                    const result = await reconnectMcpServer(server.name);
                    const { message } = handleReconnectResult(result, server.name);
                    onComplete?.(message);
                  } catch (err) {
                    onComplete?.(handleReconnectError(err, server.name));
                  } finally {
                    setIsReconnecting(false);
                  }
                } else if (value === "toggle-enabled") {
                  await handleToggleEnabled();
                } else if (value === "back") {
                  onCancel();
                }
              },
              onCancel
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedBox_default, {
        marginTop: 1,
        children: /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedText, {
          dimColor: true,
          italic: true,
          children: exitState.pending ? /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(jsx_dev_runtime11.Fragment, {
            children: [
              "Press ",
              exitState.keyName,
              " again to exit"
            ]
          }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(Byline, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(KeyboardShortcutHint, {
                shortcut: "\u2191\u2193",
                action: "navigate"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(KeyboardShortcutHint, {
                shortcut: "Enter",
                action: "select"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ConfigurableShortcutHint, {
                action: "confirm:no",
                context: "Confirmation",
                fallback: "Esc",
                description: "back"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var import_react8, jsx_dev_runtime11;
var init_MCPStdioServerMenu = __esm(() => {
  init_figures();
  init_useExitOnCtrlCDWithKeybindings();
  init_src();
  init_config2();
  init_MCPConnectionManager();
  init_utils();
  init_AppState();
  init_errors();
  init_stringUtils();
  init_ConfigurableShortcutHint();
  init_CustomSelect();
  init_src();
  init_Spinner();
  init_CapabilitiesSection();
  init_reconnectHelpers();
  import_react8 = __toESM(require_react(), 1);
  jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/mcp/MCPToolDetailView.tsx
function MCPToolDetailView({
  tool,
  server,
  onBack
}) {
  const [toolDescription, setToolDescription] = import_react9.default.useState("");
  const toolName = getMcpDisplayName(tool.name, server.name);
  const fullDisplayName = tool.userFacingName ? tool.userFacingName({}) : toolName;
  const displayName = extractMcpToolDisplayName(fullDisplayName);
  const isReadOnly = tool.isReadOnly?.({}) ?? false;
  const isDestructive = tool.isDestructive?.({}) ?? false;
  const isOpenWorld = tool.isOpenWorld?.({}) ?? false;
  import_react9.default.useEffect(() => {
    async function loadDescription() {
      try {
        const desc = await tool.description({}, {
          isNonInteractiveSession: false,
          toolPermissionContext: {
            mode: "default",
            additionalWorkingDirectories: new Map,
            alwaysAllowRules: {},
            alwaysDenyRules: {},
            alwaysAskRules: {},
            isBypassPermissionsModeAvailable: false
          },
          tools: []
        });
        setToolDescription(desc);
      } catch {
        setToolDescription("Failed to load description");
      }
    }
    loadDescription();
  }, [tool]);
  const titleContent = /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(jsx_dev_runtime12.Fragment, {
    children: [
      displayName,
      isReadOnly && /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
        color: "success",
        children: " [read-only]"
      }, undefined, false, undefined, this),
      isDestructive && /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
        color: "error",
        children: " [destructive]"
      }, undefined, false, undefined, this),
      isOpenWorld && /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
        dimColor: true,
        children: " [open-world]"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
  return /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(Dialog, {
    title: titleContent,
    subtitle: server.name,
    onCancel: onBack,
    inputGuide: (exitState) => exitState.pending ? /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
      children: [
        "Press ",
        exitState.keyName,
        " again to exit"
      ]
    }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ConfigurableShortcutHint, {
      action: "confirm:no",
      context: "Confirmation",
      fallback: "Esc",
      description: "go back"
    }, undefined, false, undefined, this),
    children: /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      children: [
        /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedBox_default, {
          children: [
            /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
              bold: true,
              children: "Tool name: "
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
              dimColor: true,
              children: toolName
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedBox_default, {
          children: [
            /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
              bold: true,
              children: "Full name: "
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
              dimColor: true,
              children: tool.name
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        toolDescription && /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedBox_default, {
          flexDirection: "column",
          marginTop: 1,
          children: [
            /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
              bold: true,
              children: "Description:"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
              wrap: "wrap",
              children: toolDescription
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        tool.inputJSONSchema && tool.inputJSONSchema.properties && Object.keys(tool.inputJSONSchema.properties).length > 0 && /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedBox_default, {
          flexDirection: "column",
          marginTop: 1,
          children: [
            /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
              bold: true,
              children: "Parameters:"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedBox_default, {
              marginLeft: 2,
              flexDirection: "column",
              children: Object.entries(tool.inputJSONSchema.properties).map(([key, value]) => {
                const required = tool.inputJSONSchema?.required;
                const isRequired = required?.includes(key);
                return /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
                  children: [
                    "\u2022 ",
                    key,
                    isRequired && /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
                      dimColor: true,
                      children: " (required)"
                    }, undefined, false, undefined, this),
                    ":",
                    " ",
                    /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
                      dimColor: true,
                      children: typeof value === "object" && value && "type" in value ? String(value.type) : "unknown"
                    }, undefined, false, undefined, this),
                    typeof value === "object" && value && "description" in value && /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
                      dimColor: true,
                      children: [
                        " - ",
                        String(value.description)
                      ]
                    }, undefined, true, undefined, this)
                  ]
                }, key, true, undefined, this);
              })
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
var import_react9, jsx_dev_runtime12;
var init_MCPToolDetailView = __esm(() => {
  init_src();
  init_mcpStringUtils();
  init_ConfigurableShortcutHint();
  init_src();
  import_react9 = __toESM(require_react(), 1);
  jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/mcp/MCPToolListView.tsx
function MCPToolListView({
  server,
  onSelectTool,
  onBack
}) {
  const mcpTools = useAppState((s) => s.mcp.tools);
  const serverTools = import_react10.default.useMemo(() => {
    if (server.client.type !== "connected")
      return [];
    return filterToolsByServer(mcpTools, server.name);
  }, [server, mcpTools]);
  const toolOptions = serverTools.map((tool, index) => {
    const toolName = getMcpDisplayName(tool.name, server.name);
    const fullDisplayName = tool.userFacingName ? tool.userFacingName({}) : toolName;
    const displayName = extractMcpToolDisplayName(fullDisplayName);
    const isReadOnly = tool.isReadOnly?.({}) ?? false;
    const isDestructive = tool.isDestructive?.({}) ?? false;
    const isOpenWorld = tool.isOpenWorld?.({}) ?? false;
    const annotations = [];
    if (isReadOnly)
      annotations.push("read-only");
    if (isDestructive)
      annotations.push("destructive");
    if (isOpenWorld)
      annotations.push("open-world");
    return {
      label: displayName,
      value: index.toString(),
      description: annotations.length > 0 ? annotations.join(", ") : undefined,
      descriptionColor: isDestructive ? "error" : isReadOnly ? "success" : undefined
    };
  });
  return /* @__PURE__ */ jsx_dev_runtime13.jsxDEV(Dialog, {
    title: `Tools for ${server.name}`,
    subtitle: `${serverTools.length} ${plural(serverTools.length, "tool")}`,
    onCancel: onBack,
    inputGuide: (exitState) => exitState.pending ? /* @__PURE__ */ jsx_dev_runtime13.jsxDEV(ThemedText, {
      children: [
        "Press ",
        exitState.keyName,
        " again to exit"
      ]
    }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime13.jsxDEV(Byline, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime13.jsxDEV(KeyboardShortcutHint, {
          shortcut: "\u2191\u2193",
          action: "navigate"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime13.jsxDEV(KeyboardShortcutHint, {
          shortcut: "Enter",
          action: "select"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime13.jsxDEV(ConfigurableShortcutHint, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "back"
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this),
    children: serverTools.length === 0 ? /* @__PURE__ */ jsx_dev_runtime13.jsxDEV(ThemedText, {
      dimColor: true,
      children: "No tools available"
    }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime13.jsxDEV(Select, {
      options: toolOptions,
      onChange: (value) => {
        const index = parseInt(value, 10);
        const tool = serverTools[index];
        if (tool) {
          onSelectTool(tool, index);
        }
      },
      onCancel: onBack
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
var import_react10, jsx_dev_runtime13;
var init_MCPToolListView = __esm(() => {
  init_src();
  init_mcpStringUtils();
  init_utils();
  init_AppState();
  init_stringUtils();
  init_ConfigurableShortcutHint();
  init_CustomSelect();
  init_src();
  import_react10 = __toESM(require_react(), 1);
  jsx_dev_runtime13 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/commands/plugin/PluginErrors.tsx
function formatErrorMessage(error) {
  switch (error.type) {
    case "path-not-found":
      return `${error.component} path not found: ${error.path}`;
    case "git-auth-failed":
      return `Git ${error.authType.toUpperCase()} authentication failed for ${error.gitUrl}`;
    case "git-timeout":
      return `Git ${error.operation} timed out for ${error.gitUrl}`;
    case "network-error":
      return `Network error accessing ${error.url}${error.details ? `: ${error.details}` : ""}`;
    case "manifest-parse-error":
      return `Failed to parse manifest at ${error.manifestPath}: ${error.parseError}`;
    case "manifest-validation-error":
      return `Invalid manifest at ${error.manifestPath}: ${error.validationErrors.join(", ")}`;
    case "plugin-not-found":
      return `Plugin "${error.pluginId}" not found in marketplace "${error.marketplace}"`;
    case "marketplace-not-found":
      return `Marketplace "${error.marketplace}" not found`;
    case "marketplace-load-failed":
      return `Failed to load marketplace "${error.marketplace}": ${error.reason}`;
    case "mcp-config-invalid":
      return `Invalid MCP server config for "${error.serverName}": ${error.validationError}`;
    case "mcp-server-suppressed-duplicate": {
      const dup = error.duplicateOf.startsWith("plugin:") ? `server provided by plugin "${error.duplicateOf.split(":")[1] ?? "?"}"` : `already-configured "${error.duplicateOf}"`;
      return `MCP server "${error.serverName}" skipped \u2014 same command/URL as ${dup}`;
    }
    case "hook-load-failed":
      return `Failed to load hooks from ${error.hookPath}: ${error.reason}`;
    case "component-load-failed":
      return `Failed to load ${error.component} from ${error.path}: ${error.reason}`;
    case "mcpb-download-failed":
      return `Failed to download MCPB from ${error.url}: ${error.reason}`;
    case "mcpb-extract-failed":
      return `Failed to extract MCPB ${error.mcpbPath}: ${error.reason}`;
    case "mcpb-invalid-manifest":
      return `MCPB manifest invalid at ${error.mcpbPath}: ${error.validationError}`;
    case "marketplace-blocked-by-policy":
      return error.blockedByBlocklist ? `Marketplace "${error.marketplace}" is blocked by enterprise policy` : `Marketplace "${error.marketplace}" is not in the allowed marketplace list`;
    case "dependency-unsatisfied":
      return error.reason === "not-enabled" ? `Dependency "${error.dependency}" is disabled` : `Dependency "${error.dependency}" is not installed`;
    case "lsp-config-invalid":
      return `Invalid LSP server config for "${error.serverName}": ${error.validationError}`;
    case "lsp-server-start-failed":
      return `LSP server "${error.serverName}" failed to start: ${error.reason}`;
    case "lsp-server-crashed":
      return error.signal ? `LSP server "${error.serverName}" crashed with signal ${error.signal}` : `LSP server "${error.serverName}" crashed with exit code ${error.exitCode ?? "unknown"}`;
    case "lsp-request-timeout":
      return `LSP server "${error.serverName}" timed out on ${error.method} after ${error.timeoutMs}ms`;
    case "lsp-request-failed":
      return `LSP server "${error.serverName}" ${error.method} failed: ${error.error}`;
    case "plugin-cache-miss":
      return `Plugin "${error.plugin}" not cached at ${error.installPath}`;
    case "generic-error":
      return error.error;
  }
  const _exhaustive = error;
  return getPluginErrorMessage(_exhaustive);
}
function getErrorGuidance(error) {
  switch (error.type) {
    case "path-not-found":
      return "Check that the path in your manifest or marketplace config is correct";
    case "git-auth-failed":
      return error.authType === "ssh" ? "Configure SSH keys or use HTTPS URL instead" : "Configure credentials or use SSH URL instead";
    case "git-timeout":
    case "network-error":
      return "Check your internet connection and try again";
    case "manifest-parse-error":
      return "Check manifest file syntax in the plugin directory";
    case "manifest-validation-error":
      return "Check manifest file follows the required schema";
    case "plugin-not-found":
      return `Plugin may not exist in marketplace "${error.marketplace}"`;
    case "marketplace-not-found":
      return error.availableMarketplaces.length > 0 ? `Available marketplaces: ${error.availableMarketplaces.join(", ")}` : "Add the marketplace first using /plugin marketplace add";
    case "mcp-config-invalid":
      return "Check MCP server configuration in .mcp.json or manifest";
    case "mcp-server-suppressed-duplicate": {
      if (error.duplicateOf.startsWith("plugin:")) {
        const winningPlugin = error.duplicateOf.split(":")[1] ?? "the other plugin";
        return `Disable plugin "${winningPlugin}" if you want this plugin's version instead`;
      }
      return `Remove "${error.duplicateOf}" from your MCP config if you want the plugin's version instead`;
    }
    case "hook-load-failed":
      return "Check hooks.json file syntax and structure";
    case "component-load-failed":
      return `Check ${error.component} directory structure and file permissions`;
    case "mcpb-download-failed":
      return "Check your internet connection and URL accessibility";
    case "mcpb-extract-failed":
      return "Verify the MCPB file is valid and not corrupted";
    case "mcpb-invalid-manifest":
      return "Contact the plugin author about the invalid manifest";
    case "marketplace-blocked-by-policy":
      if (error.blockedByBlocklist) {
        return "This marketplace source is explicitly blocked by your administrator";
      }
      return error.allowedSources.length > 0 ? `Allowed sources: ${error.allowedSources.join(", ")}` : "Contact your administrator to configure allowed marketplace sources";
    case "dependency-unsatisfied":
      return error.reason === "not-enabled" ? `Enable "${error.dependency}" or uninstall "${error.plugin}"` : `Install "${error.dependency}" or uninstall "${error.plugin}"`;
    case "lsp-config-invalid":
      return "Check LSP server configuration in the plugin manifest";
    case "lsp-server-start-failed":
    case "lsp-server-crashed":
    case "lsp-request-timeout":
    case "lsp-request-failed":
      return "Check LSP server logs with --debug for details";
    case "plugin-cache-miss":
      return "Run /plugins to refresh the plugin cache";
    case "marketplace-load-failed":
    case "generic-error":
      return null;
  }
  const _exhaustive = error;
  return null;
}
var init_PluginErrors = __esm(() => {
  init_plugin();
});

// src/commands/plugin/UnifiedInstalledCell.tsx
function UnifiedInstalledCell({
  item,
  isSelected
}) {
  const [theme] = useTheme();
  if (item.type === "plugin") {
    let statusIcon2;
    let statusText2;
    if (item.pendingToggle) {
      statusIcon2 = color("suggestion", theme)(figures_default.arrowRight);
      statusText2 = item.pendingToggle === "will-enable" ? "will enable" : "will disable";
    } else if (item.errorCount > 0) {
      statusIcon2 = color("error", theme)(figures_default.cross);
      statusText2 = `${item.errorCount} ${plural(item.errorCount, "error")}`;
    } else if (!item.isEnabled) {
      statusIcon2 = color("inactive", theme)(figures_default.radioOff);
      statusText2 = "disabled";
    } else {
      statusIcon2 = color("success", theme)(figures_default.tick);
      statusText2 = "enabled";
    }
    return /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedBox_default, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedText, {
          color: isSelected ? "suggestion" : undefined,
          children: isSelected ? `${figures_default.pointer} ` : "  "
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedText, {
          color: isSelected ? "suggestion" : undefined,
          children: item.name
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedText, {
          dimColor: !isSelected,
          children: [
            " ",
            /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedText, {
              backgroundColor: "userMessageBackground",
              children: "Plugin"
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedText, {
          dimColor: true,
          children: [
            " \xB7 ",
            item.marketplace
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedText, {
          dimColor: !isSelected,
          children: [
            " \xB7 ",
            statusIcon2,
            " "
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedText, {
          dimColor: !isSelected,
          children: statusText2
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  if (item.type === "flagged-plugin") {
    const statusIcon2 = color("warning", theme)(figures_default.warning);
    return /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedBox_default, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedText, {
          color: isSelected ? "suggestion" : undefined,
          children: isSelected ? `${figures_default.pointer} ` : "  "
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedText, {
          color: isSelected ? "suggestion" : undefined,
          children: item.name
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedText, {
          dimColor: !isSelected,
          children: [
            " ",
            /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedText, {
              backgroundColor: "userMessageBackground",
              children: "Plugin"
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedText, {
          dimColor: true,
          children: [
            " \xB7 ",
            item.marketplace
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedText, {
          dimColor: !isSelected,
          children: [
            " \xB7 ",
            statusIcon2,
            " "
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedText, {
          dimColor: !isSelected,
          children: "removed"
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  if (item.type === "failed-plugin") {
    const statusIcon2 = color("error", theme)(figures_default.cross);
    const statusText2 = `failed to load \xB7 ${item.errorCount} ${plural(item.errorCount, "error")}`;
    return /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedBox_default, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedText, {
          color: isSelected ? "suggestion" : undefined,
          children: isSelected ? `${figures_default.pointer} ` : "  "
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedText, {
          color: isSelected ? "suggestion" : undefined,
          children: item.name
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedText, {
          dimColor: !isSelected,
          children: [
            " ",
            /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedText, {
              backgroundColor: "userMessageBackground",
              children: "Plugin"
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedText, {
          dimColor: true,
          children: [
            " \xB7 ",
            item.marketplace
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedText, {
          dimColor: !isSelected,
          children: [
            " \xB7 ",
            statusIcon2,
            " "
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedText, {
          dimColor: !isSelected,
          children: statusText2
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  let statusIcon;
  let statusText;
  if (item.status === "connected") {
    statusIcon = color("success", theme)(figures_default.tick);
    statusText = "connected";
  } else if (item.status === "disabled") {
    statusIcon = color("inactive", theme)(figures_default.radioOff);
    statusText = "disabled";
  } else if (item.status === "pending") {
    statusIcon = color("inactive", theme)(figures_default.radioOff);
    statusText = "connecting\u2026";
  } else if (item.status === "needs-auth") {
    statusIcon = color("warning", theme)(figures_default.triangleUpOutline);
    statusText = "Enter to auth";
  } else {
    statusIcon = color("error", theme)(figures_default.cross);
    statusText = "failed";
  }
  if (item.indented) {
    return /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedBox_default, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedText, {
          color: isSelected ? "suggestion" : undefined,
          children: isSelected ? `${figures_default.pointer} ` : "  "
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedText, {
          dimColor: !isSelected,
          children: "\u2514 "
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedText, {
          color: isSelected ? "suggestion" : undefined,
          children: item.name
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedText, {
          dimColor: !isSelected,
          children: [
            " ",
            /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedText, {
              backgroundColor: "userMessageBackground",
              children: "MCP"
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedText, {
          dimColor: !isSelected,
          children: [
            " \xB7 ",
            statusIcon,
            " "
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedText, {
          dimColor: !isSelected,
          children: statusText
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedBox_default, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedText, {
        color: isSelected ? "suggestion" : undefined,
        children: isSelected ? `${figures_default.pointer} ` : "  "
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedText, {
        color: isSelected ? "suggestion" : undefined,
        children: item.name
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedText, {
        dimColor: !isSelected,
        children: [
          " ",
          /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedText, {
            backgroundColor: "userMessageBackground",
            children: "MCP"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedText, {
        dimColor: !isSelected,
        children: [
          " \xB7 ",
          statusIcon,
          " "
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedText, {
        dimColor: !isSelected,
        children: statusText
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var jsx_dev_runtime14;
var init_UnifiedInstalledCell = __esm(() => {
  init_figures();
  init_src();
  init_stringUtils();
  jsx_dev_runtime14 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/commands/plugin/ManagePlugins.tsx
import * as fs from "fs/promises";
import * as path from "path";
async function getBaseFileNames(dirPath) {
  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    return entries.filter((entry) => entry.isFile() && entry.name.endsWith(".md")).map((entry) => {
      const baseName = path.basename(entry.name, ".md");
      return baseName;
    });
  } catch (error) {
    const errorMsg = errorMessage(error);
    logForDebugging(`Failed to read plugin components from ${dirPath}: ${errorMsg}`, { level: "error" });
    logError(toError(error));
    return [];
  }
}
async function getSkillDirNames(dirPath) {
  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    const skillNames = [];
    for (const entry of entries) {
      if (entry.isDirectory() || entry.isSymbolicLink()) {
        const skillFilePath = path.join(dirPath, entry.name, "SKILL.md");
        try {
          const st = await fs.stat(skillFilePath);
          if (st.isFile()) {
            skillNames.push(entry.name);
          }
        } catch {}
      }
    }
    return skillNames;
  } catch (error) {
    const errorMsg = errorMessage(error);
    logForDebugging(`Failed to read skill directories from ${dirPath}: ${errorMsg}`, { level: "error" });
    logError(toError(error));
    return [];
  }
}
function PluginComponentsDisplay({
  plugin,
  marketplace
}) {
  const [components, setComponents] = import_react11.useState(null);
  const [loading, setLoading] = import_react11.useState(true);
  const [error, setError] = import_react11.useState(null);
  import_react11.useEffect(() => {
    async function loadComponents() {
      try {
        if (marketplace === "builtin") {
          const builtinDef = getBuiltinPluginDefinition(plugin.name);
          if (builtinDef) {
            const skillNames = builtinDef.skills?.map((s) => s.name) ?? [];
            const hookEvents = builtinDef.hooks ? Object.keys(builtinDef.hooks) : [];
            const mcpServerNames = builtinDef.mcpServers ? Object.keys(builtinDef.mcpServers) : [];
            setComponents({
              commands: null,
              agents: null,
              skills: skillNames.length > 0 ? skillNames : null,
              hooks: hookEvents.length > 0 ? hookEvents : null,
              mcpServers: mcpServerNames.length > 0 ? mcpServerNames : null
            });
          } else {
            setError(`Built-in plugin ${plugin.name} not found`);
          }
          setLoading(false);
          return;
        }
        const marketplaceData = await getMarketplace(marketplace);
        const pluginEntry = marketplaceData.plugins.find((p) => p.name === plugin.name);
        if (pluginEntry) {
          const commandPathList = [];
          if (plugin.commandsPath) {
            commandPathList.push(plugin.commandsPath);
          }
          if (plugin.commandsPaths) {
            commandPathList.push(...plugin.commandsPaths);
          }
          const commandList = [];
          for (const commandPath of commandPathList) {
            if (typeof commandPath === "string") {
              const baseNames = await getBaseFileNames(commandPath);
              commandList.push(...baseNames);
            }
          }
          const agentPathList = [];
          if (plugin.agentsPath) {
            agentPathList.push(plugin.agentsPath);
          }
          if (plugin.agentsPaths) {
            agentPathList.push(...plugin.agentsPaths);
          }
          const agentList = [];
          for (const agentPath of agentPathList) {
            if (typeof agentPath === "string") {
              const baseNames = await getBaseFileNames(agentPath);
              agentList.push(...baseNames);
            }
          }
          const skillPathList = [];
          if (plugin.skillsPath) {
            skillPathList.push(plugin.skillsPath);
          }
          if (plugin.skillsPaths) {
            skillPathList.push(...plugin.skillsPaths);
          }
          const skillList = [];
          for (const skillPath of skillPathList) {
            if (typeof skillPath === "string") {
              const skillDirNames = await getSkillDirNames(skillPath);
              skillList.push(...skillDirNames);
            }
          }
          const hooksList = [];
          if (plugin.hooksConfig) {
            hooksList.push(Object.keys(plugin.hooksConfig));
          }
          if (pluginEntry.hooks) {
            hooksList.push(pluginEntry.hooks);
          }
          const mcpServersList = [];
          if (plugin.mcpServers) {
            mcpServersList.push(Object.keys(plugin.mcpServers));
          }
          if (pluginEntry.mcpServers) {
            mcpServersList.push(pluginEntry.mcpServers);
          }
          setComponents({
            commands: commandList.length > 0 ? commandList : null,
            agents: agentList.length > 0 ? agentList : null,
            skills: skillList.length > 0 ? skillList : null,
            hooks: hooksList.length > 0 ? hooksList : null,
            mcpServers: mcpServersList.length > 0 ? mcpServersList : null
          });
        } else {
          setError(`Plugin ${plugin.name} not found in marketplace`);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load components");
      } finally {
        setLoading(false);
      }
    }
    loadComponents();
  }, [
    plugin.name,
    plugin.commandsPath,
    plugin.commandsPaths,
    plugin.agentsPath,
    plugin.agentsPaths,
    plugin.skillsPath,
    plugin.skillsPaths,
    plugin.hooksConfig,
    plugin.mcpServers,
    marketplace
  ]);
  if (loading) {
    return null;
  }
  if (error) {
    return /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      marginBottom: 1,
      children: [
        /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
          bold: true,
          children: "Components:"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
          dimColor: true,
          children: [
            "Error: ",
            error
          ]
        }, undefined, true, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  if (!components) {
    return null;
  }
  const hasComponents = components.commands || components.agents || components.skills || components.hooks || components.mcpServers;
  if (!hasComponents) {
    return null;
  }
  return /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    marginBottom: 1,
    children: [
      /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
        bold: true,
        children: "Installed components:"
      }, undefined, false, undefined, this),
      components.commands ? /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
        dimColor: true,
        children: [
          "\u2022 Commands:",
          " ",
          typeof components.commands === "string" ? components.commands : Array.isArray(components.commands) ? components.commands.join(", ") : Object.keys(components.commands).join(", ")
        ]
      }, undefined, true, undefined, this) : null,
      components.agents ? /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
        dimColor: true,
        children: [
          "\u2022 Agents:",
          " ",
          typeof components.agents === "string" ? components.agents : Array.isArray(components.agents) ? components.agents.join(", ") : Object.keys(components.agents).join(", ")
        ]
      }, undefined, true, undefined, this) : null,
      components.skills ? /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
        dimColor: true,
        children: [
          "\u2022 Skills:",
          " ",
          typeof components.skills === "string" ? components.skills : Array.isArray(components.skills) ? components.skills.join(", ") : Object.keys(components.skills).join(", ")
        ]
      }, undefined, true, undefined, this) : null,
      components.hooks ? /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
        dimColor: true,
        children: [
          "\u2022 Hooks:",
          " ",
          typeof components.hooks === "string" ? components.hooks : Array.isArray(components.hooks) ? components.hooks.map(String).join(", ") : typeof components.hooks === "object" && components.hooks !== null ? Object.keys(components.hooks).join(", ") : String(components.hooks)
        ]
      }, undefined, true, undefined, this) : null,
      components.mcpServers ? /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
        dimColor: true,
        children: [
          "\u2022 MCP Servers:",
          " ",
          typeof components.mcpServers === "string" ? components.mcpServers : Array.isArray(components.mcpServers) ? components.mcpServers.map(String).join(", ") : typeof components.mcpServers === "object" && components.mcpServers !== null ? Object.keys(components.mcpServers).join(", ") : String(components.mcpServers)
        ]
      }, undefined, true, undefined, this) : null
    ]
  }, undefined, true, undefined, this);
}
async function checkIfLocalPlugin(pluginName, marketplaceName) {
  const marketplace = await getMarketplace(marketplaceName);
  const entry = marketplace?.plugins.find((p) => p.name === pluginName);
  if (entry && typeof entry.source === "string") {
    return `Local plugins cannot be updated remotely. To update, modify the source at: ${entry.source}`;
  }
  return null;
}
function filterManagedDisabledPlugins(plugins) {
  return plugins.filter((plugin) => {
    const marketplace = plugin.source.split("@")[1] || "local";
    return !isPluginBlockedByPolicy(`${plugin.name}@${marketplace}`);
  });
}
function ManagePlugins({
  setViewState: setParentViewState,
  setResult,
  onManageComplete,
  onSearchModeChange,
  targetPlugin,
  targetMarketplace,
  action
}) {
  const mcpClients = useAppState((s) => s.mcp.clients);
  const mcpTools = useAppState((s) => s.mcp.tools);
  const pluginErrors = useAppState((s) => s.plugins.errors);
  const flaggedPlugins = getFlaggedPlugins();
  const [isSearchMode, setIsSearchModeRaw] = import_react11.useState(false);
  const setIsSearchMode = import_react11.useCallback((active) => {
    setIsSearchModeRaw(active);
    onSearchModeChange?.(active);
  }, [onSearchModeChange]);
  const isTerminalFocused = useTerminalFocus();
  const { columns: terminalWidth } = useTerminalSize();
  const [viewState, setViewState] = import_react11.useState("plugin-list");
  const {
    query: searchQuery,
    setQuery: setSearchQuery,
    cursorOffset: searchCursorOffset
  } = useSearchInput({
    isActive: viewState === "plugin-list" && isSearchMode,
    onExit: () => {
      setIsSearchMode(false);
    }
  });
  const [selectedPlugin, setSelectedPlugin] = import_react11.useState(null);
  const [marketplaces, setMarketplaces] = import_react11.useState([]);
  const [pluginStates, setPluginStates] = import_react11.useState([]);
  const [loading, setLoading] = import_react11.useState(true);
  const [pendingToggles, setPendingToggles] = import_react11.useState(new Map);
  const hasAutoNavigated = import_react11.useRef(false);
  const pendingAutoActionRef = import_react11.useRef(undefined);
  const toggleMcpServer = useMcpToggleEnabled();
  const handleBack = React9.useCallback(() => {
    if (viewState === "plugin-details") {
      setViewState("plugin-list");
      setSelectedPlugin(null);
      setProcessError(null);
    } else if (typeof viewState === "object" && viewState.type === "failed-plugin-details") {
      setViewState("plugin-list");
      setProcessError(null);
    } else if (viewState === "configuring") {
      setViewState("plugin-details");
      setConfigNeeded(null);
    } else if (typeof viewState === "object" && (viewState.type === "plugin-options" || viewState.type === "configuring-options")) {
      setViewState("plugin-list");
      setSelectedPlugin(null);
      setResult("Plugin enabled. Configuration skipped \u2014 run /reload-plugins to apply.");
      if (onManageComplete) {
        onManageComplete();
      }
    } else if (typeof viewState === "object" && viewState.type === "flagged-detail") {
      setViewState("plugin-list");
      setProcessError(null);
    } else if (typeof viewState === "object" && viewState.type === "mcp-detail") {
      setViewState("plugin-list");
      setProcessError(null);
    } else if (typeof viewState === "object" && viewState.type === "mcp-tools") {
      setViewState({ type: "mcp-detail", client: viewState.client });
    } else if (typeof viewState === "object" && viewState.type === "mcp-tool-detail") {
      setViewState({ type: "mcp-tools", client: viewState.client });
    } else {
      if (pendingToggles.size > 0) {
        setResult("Run /reload-plugins to apply plugin changes.");
        return;
      }
      setParentViewState({ type: "menu" });
    }
  }, [viewState, setParentViewState, pendingToggles, setResult]);
  useKeybinding("confirm:no", handleBack, {
    context: "Confirmation",
    isActive: (viewState !== "plugin-list" || !isSearchMode) && viewState !== "confirm-project-uninstall" && !(typeof viewState === "object" && viewState.type === "confirm-data-cleanup")
  });
  const getMcpStatus = (client) => {
    if (client.type === "connected")
      return "connected";
    if (client.type === "disabled")
      return "disabled";
    if (client.type === "pending")
      return "pending";
    if (client.type === "needs-auth")
      return "needs-auth";
    return "failed";
  };
  const unifiedItems = import_react11.useMemo(() => {
    const mergedSettings = getSettings_DEPRECATED();
    const pluginMcpMap = new Map;
    for (const client of mcpClients) {
      if (client.name.startsWith("plugin:")) {
        const parts = client.name.split(":");
        if (parts.length >= 3) {
          const pluginName = parts[1];
          const serverName = parts.slice(2).join(":");
          const existing = pluginMcpMap.get(pluginName) || [];
          existing.push({ displayName: serverName, client });
          pluginMcpMap.set(pluginName, existing);
        }
      }
    }
    const pluginsWithChildren = [];
    for (const state of pluginStates) {
      const pluginId = `${state.plugin.name}@${state.marketplace}`;
      const isEnabled = mergedSettings?.enabledPlugins?.[pluginId] !== false;
      const errors = pluginErrors.filter((e) => ("plugin" in e) && e.plugin === state.plugin.name || e.source === pluginId || e.source.startsWith(`${state.plugin.name}@`));
      const originalScope = state.plugin.isBuiltin ? "builtin" : state.scope || "user";
      pluginsWithChildren.push({
        item: {
          type: "plugin",
          id: pluginId,
          name: state.plugin.name,
          description: state.plugin.manifest.description,
          marketplace: state.marketplace,
          scope: originalScope,
          isEnabled,
          errorCount: errors.length,
          errors,
          plugin: state.plugin,
          pendingEnable: state.pendingEnable,
          pendingUpdate: state.pendingUpdate,
          pendingToggle: pendingToggles.get(pluginId)
        },
        originalScope,
        childMcps: pluginMcpMap.get(state.plugin.name) || []
      });
    }
    const matchedPluginIds = new Set(pluginsWithChildren.map(({ item }) => item.id));
    const matchedPluginNames = new Set(pluginsWithChildren.map(({ item }) => item.name));
    const orphanErrorsBySource = new Map;
    for (const error of pluginErrors) {
      if (matchedPluginIds.has(error.source) || "plugin" in error && typeof error.plugin === "string" && matchedPluginNames.has(error.plugin)) {
        continue;
      }
      const existing = orphanErrorsBySource.get(error.source) || [];
      existing.push(error);
      orphanErrorsBySource.set(error.source, existing);
    }
    const pluginScopes = getPluginEditableScopes();
    const failedPluginItems = [];
    for (const [pluginId, errors] of orphanErrorsBySource) {
      if (pluginId in flaggedPlugins)
        continue;
      const parsed = parsePluginIdentifier(pluginId);
      const pluginName = parsed.name || pluginId;
      const marketplace = parsed.marketplace || "unknown";
      const rawScope = pluginScopes.get(pluginId);
      const scope = rawScope === "flag" || rawScope === undefined ? "user" : rawScope;
      failedPluginItems.push({
        type: "failed-plugin",
        id: pluginId,
        name: pluginName,
        marketplace,
        scope,
        errorCount: errors.length,
        errors
      });
    }
    const standaloneMcps = [];
    for (const client of mcpClients) {
      if (client.name === "ide")
        continue;
      if (client.name.startsWith("plugin:"))
        continue;
      standaloneMcps.push({
        type: "mcp",
        id: `mcp:${client.name}`,
        name: client.name,
        description: undefined,
        scope: client.config.scope,
        status: getMcpStatus(client),
        client
      });
    }
    const scopeOrder = {
      flagged: -1,
      project: 0,
      local: 1,
      user: 2,
      enterprise: 3,
      managed: 4,
      dynamic: 5,
      builtin: 6
    };
    const unified = [];
    const itemsByScope = new Map;
    for (const { item, originalScope, childMcps } of pluginsWithChildren) {
      const scope = item.scope;
      if (!itemsByScope.has(scope)) {
        itemsByScope.set(scope, []);
      }
      itemsByScope.get(scope).push(item);
      for (const { displayName, client } of childMcps) {
        const displayScope = originalScope === "builtin" ? "user" : originalScope;
        if (!itemsByScope.has(displayScope)) {
          itemsByScope.set(displayScope, []);
        }
        itemsByScope.get(displayScope).push({
          type: "mcp",
          id: `mcp:${client.name}`,
          name: displayName,
          description: undefined,
          scope: displayScope,
          status: getMcpStatus(client),
          client,
          indented: true
        });
      }
    }
    for (const mcp of standaloneMcps) {
      const scope = mcp.scope;
      if (!itemsByScope.has(scope)) {
        itemsByScope.set(scope, []);
      }
      itemsByScope.get(scope).push(mcp);
    }
    for (const failedPlugin of failedPluginItems) {
      const scope = failedPlugin.scope;
      if (!itemsByScope.has(scope)) {
        itemsByScope.set(scope, []);
      }
      itemsByScope.get(scope).push(failedPlugin);
    }
    for (const [pluginId, entry] of Object.entries(flaggedPlugins)) {
      const parsed = parsePluginIdentifier(pluginId);
      const pluginName = parsed.name || pluginId;
      const marketplace = parsed.marketplace || "unknown";
      if (!itemsByScope.has("flagged")) {
        itemsByScope.set("flagged", []);
      }
      itemsByScope.get("flagged").push({
        type: "flagged-plugin",
        id: pluginId,
        name: pluginName,
        marketplace,
        scope: "flagged",
        reason: "delisted",
        text: "Removed from marketplace",
        flaggedAt: entry.flaggedAt
      });
    }
    const sortedScopes = [...itemsByScope.keys()].sort((a, b) => (scopeOrder[a] ?? 99) - (scopeOrder[b] ?? 99));
    for (const scope of sortedScopes) {
      const items = itemsByScope.get(scope);
      const pluginGroups = [];
      const standaloneMcpsInScope = [];
      let i = 0;
      while (i < items.length) {
        const item = items[i];
        if (item.type === "plugin" || item.type === "failed-plugin" || item.type === "flagged-plugin") {
          const group = [item];
          i++;
          let nextItem = items[i];
          while (nextItem?.type === "mcp" && nextItem.indented) {
            group.push(nextItem);
            i++;
            nextItem = items[i];
          }
          pluginGroups.push(group);
        } else if (item.type === "mcp" && !item.indented) {
          standaloneMcpsInScope.push(item);
          i++;
        } else {
          i++;
        }
      }
      pluginGroups.sort((a, b) => a[0].name.localeCompare(b[0].name));
      standaloneMcpsInScope.sort((a, b) => a.name.localeCompare(b.name));
      for (const group of pluginGroups) {
        unified.push(...group);
      }
      unified.push(...standaloneMcpsInScope);
    }
    return unified;
  }, [pluginStates, mcpClients, pluginErrors, pendingToggles, flaggedPlugins]);
  const flaggedIds = import_react11.useMemo(() => unifiedItems.filter((item) => item.type === "flagged-plugin").map((item) => item.id), [unifiedItems]);
  import_react11.useEffect(() => {
    if (flaggedIds.length > 0) {
      markFlaggedPluginsSeen(flaggedIds);
    }
  }, [flaggedIds]);
  const filteredItems = import_react11.useMemo(() => {
    if (!searchQuery)
      return unifiedItems;
    const lowerQuery = searchQuery.toLowerCase();
    return unifiedItems.filter((item) => item.name.toLowerCase().includes(lowerQuery) || ("description" in item) && item.description?.toLowerCase().includes(lowerQuery));
  }, [unifiedItems, searchQuery]);
  const [selectedIndex, setSelectedIndex] = import_react11.useState(0);
  const pagination = usePagination({
    totalItems: filteredItems.length,
    selectedIndex,
    maxVisible: 8
  });
  const [detailsMenuIndex, setDetailsMenuIndex] = import_react11.useState(0);
  const [isProcessing, setIsProcessing] = import_react11.useState(false);
  const [processError, setProcessError] = import_react11.useState(null);
  const [configNeeded, setConfigNeeded] = import_react11.useState(null);
  const [_isLoadingConfig, setIsLoadingConfig] = import_react11.useState(false);
  const [selectedPluginHasMcpb, setSelectedPluginHasMcpb] = import_react11.useState(false);
  import_react11.useEffect(() => {
    if (!selectedPlugin) {
      setSelectedPluginHasMcpb(false);
      return;
    }
    async function detectMcpb() {
      const mcpServersSpec = selectedPlugin.plugin.manifest.mcpServers;
      let hasMcpb = false;
      if (mcpServersSpec) {
        hasMcpb = typeof mcpServersSpec === "string" && isMcpbSource(mcpServersSpec) || Array.isArray(mcpServersSpec) && mcpServersSpec.some((s) => typeof s === "string" && isMcpbSource(s));
      }
      if (!hasMcpb) {
        try {
          const marketplaceDir = path.join(selectedPlugin.plugin.path, "..");
          const marketplaceJsonPath = path.join(marketplaceDir, ".claude-plugin", "marketplace.json");
          const content = await fs.readFile(marketplaceJsonPath, "utf-8");
          const marketplace = jsonParse(content);
          const entry = marketplace.plugins?.find((p) => p.name === selectedPlugin.plugin.name);
          if (entry?.mcpServers) {
            const spec = entry.mcpServers;
            hasMcpb = typeof spec === "string" && isMcpbSource(spec) || Array.isArray(spec) && spec.some((s) => typeof s === "string" && isMcpbSource(s));
          }
        } catch (err) {
          logForDebugging(`Failed to read raw marketplace.json: ${err}`);
        }
      }
      setSelectedPluginHasMcpb(hasMcpb);
    }
    detectMcpb();
  }, [selectedPlugin]);
  import_react11.useEffect(() => {
    async function loadInstalledPlugins() {
      setLoading(true);
      try {
        const { enabled, disabled } = await loadAllPlugins();
        const mergedSettings = getSettings_DEPRECATED();
        const allPlugins = filterManagedDisabledPlugins([
          ...enabled,
          ...disabled
        ]);
        const pluginsByMarketplace = {};
        for (const plugin of allPlugins) {
          const marketplace = plugin.source.split("@")[1] || "local";
          if (!pluginsByMarketplace[marketplace]) {
            pluginsByMarketplace[marketplace] = [];
          }
          pluginsByMarketplace[marketplace].push(plugin);
        }
        const marketplaceInfos = [];
        for (const [name, plugins] of Object.entries(pluginsByMarketplace)) {
          const enabledCount = count(plugins, (p) => {
            const pluginId = `${p.name}@${name}`;
            return mergedSettings?.enabledPlugins?.[pluginId] !== false;
          });
          const disabledCount = plugins.length - enabledCount;
          marketplaceInfos.push({
            name,
            installedPlugins: plugins,
            enabledCount,
            disabledCount
          });
        }
        marketplaceInfos.sort((a, b) => {
          if (a.name === "claude-plugin-directory")
            return -1;
          if (b.name === "claude-plugin-directory")
            return 1;
          return a.name.localeCompare(b.name);
        });
        setMarketplaces(marketplaceInfos);
        const allStates = [];
        for (const marketplace of marketplaceInfos) {
          for (const plugin of marketplace.installedPlugins) {
            const pluginId = `${plugin.name}@${marketplace.name}`;
            const scope = plugin.isBuiltin ? "builtin" : getPluginInstallationFromV2(pluginId).scope;
            allStates.push({
              plugin,
              marketplace: marketplace.name,
              scope,
              pendingEnable: undefined,
              pendingUpdate: false
            });
          }
        }
        setPluginStates(allStates);
        setSelectedIndex(0);
      } finally {
        setLoading(false);
      }
    }
    loadInstalledPlugins();
  }, []);
  import_react11.useEffect(() => {
    if (hasAutoNavigated.current)
      return;
    if (targetPlugin && marketplaces.length > 0 && !loading) {
      const { name: targetName, marketplace: targetMktFromId } = parsePluginIdentifier(targetPlugin);
      const effectiveTargetMarketplace = targetMarketplace ?? targetMktFromId;
      const marketplacesToSearch = effectiveTargetMarketplace ? marketplaces.filter((m) => m.name === effectiveTargetMarketplace) : marketplaces;
      for (const marketplace of marketplacesToSearch) {
        const plugin = marketplace.installedPlugins.find((p) => p.name === targetName);
        if (plugin) {
          const pluginId = `${plugin.name}@${marketplace.name}`;
          const { scope } = getPluginInstallationFromV2(pluginId);
          const pluginState = {
            plugin,
            marketplace: marketplace.name,
            scope,
            pendingEnable: undefined,
            pendingUpdate: false
          };
          setSelectedPlugin(pluginState);
          setViewState("plugin-details");
          pendingAutoActionRef.current = action;
          hasAutoNavigated.current = true;
          return;
        }
      }
      const failedItem = unifiedItems.find((item) => item.type === "failed-plugin" && item.name === targetName);
      if (failedItem && failedItem.type === "failed-plugin") {
        setViewState({
          type: "failed-plugin-details",
          plugin: {
            id: failedItem.id,
            name: failedItem.name,
            marketplace: failedItem.marketplace,
            errors: failedItem.errors,
            scope: failedItem.scope
          }
        });
        hasAutoNavigated.current = true;
      }
      if (!hasAutoNavigated.current && action) {
        hasAutoNavigated.current = true;
        setResult(`Plugin "${targetPlugin}" is not installed in this project`);
      }
    }
  }, [
    targetPlugin,
    targetMarketplace,
    marketplaces,
    loading,
    unifiedItems,
    action,
    setResult
  ]);
  const handleSingleOperation = async (operation) => {
    if (!selectedPlugin)
      return;
    const pluginScope = selectedPlugin.scope || "user";
    const isBuiltin = pluginScope === "builtin";
    if (isBuiltin && (operation === "update" || operation === "uninstall")) {
      setProcessError("Built-in plugins cannot be updated or uninstalled.");
      return;
    }
    if (!isBuiltin && !isInstallableScope(pluginScope) && operation !== "update") {
      setProcessError("This plugin is managed by your organization. Contact your admin to disable it.");
      return;
    }
    setIsProcessing(true);
    setProcessError(null);
    try {
      const pluginId = `${selectedPlugin.plugin.name}@${selectedPlugin.marketplace}`;
      let reverseDependents;
      switch (operation) {
        case "enable": {
          const enableResult = await enablePluginOp(pluginId);
          if (!enableResult.success) {
            throw new Error(enableResult.message);
          }
          break;
        }
        case "disable": {
          const disableResult = await disablePluginOp(pluginId);
          if (!disableResult.success) {
            throw new Error(disableResult.message);
          }
          reverseDependents = disableResult.reverseDependents;
          break;
        }
        case "uninstall": {
          if (isBuiltin)
            break;
          if (!isInstallableScope(pluginScope))
            break;
          if (isPluginEnabledAtProjectScope(pluginId)) {
            setIsProcessing(false);
            setViewState("confirm-project-uninstall");
            return;
          }
          const installs = loadInstalledPluginsV2().plugins[pluginId];
          const isLastScope = !installs || installs.length <= 1;
          const dataSize = isLastScope ? await getPluginDataDirSize(pluginId) : null;
          if (dataSize) {
            setIsProcessing(false);
            setViewState({ type: "confirm-data-cleanup", size: dataSize });
            return;
          }
          const result = await uninstallPluginOp(pluginId, pluginScope);
          if (!result.success) {
            throw new Error(result.message);
          }
          reverseDependents = result.reverseDependents;
          break;
        }
        case "update": {
          if (isBuiltin)
            break;
          const result = await updatePluginOp(pluginId, pluginScope);
          if (!result.success) {
            throw new Error(result.message);
          }
          if (result.alreadyUpToDate) {
            setResult(`${selectedPlugin.plugin.name} is already at the latest version (${result.newVersion}).`);
            if (onManageComplete) {
              await onManageComplete();
            }
            setParentViewState({ type: "menu" });
            return;
          }
          break;
        }
      }
      clearAllCaches();
      const pluginIdNow = `${selectedPlugin.plugin.name}@${selectedPlugin.marketplace}`;
      const settingsAfter = getSettings_DEPRECATED();
      const enabledAfter = settingsAfter?.enabledPlugins?.[pluginIdNow] !== false;
      if (enabledAfter) {
        setIsProcessing(false);
        setViewState({ type: "plugin-options" });
        return;
      }
      const operationName = operation === "enable" ? "Enabled" : operation === "disable" ? "Disabled" : operation === "update" ? "Updated" : "Uninstalled";
      const depWarn = reverseDependents && reverseDependents.length > 0 ? ` \xB7 required by ${reverseDependents.join(", ")}` : "";
      const message = `\u2713 ${operationName} ${selectedPlugin.plugin.name}${depWarn}. Run /reload-plugins to apply.`;
      setResult(message);
      if (onManageComplete) {
        await onManageComplete();
      }
      setParentViewState({ type: "menu" });
    } catch (error) {
      setIsProcessing(false);
      const errorMessage2 = error instanceof Error ? error.message : String(error);
      setProcessError(`Failed to ${operation}: ${errorMessage2}`);
      logError(toError(error));
    }
  };
  const handleSingleOperationRef = import_react11.useRef(handleSingleOperation);
  handleSingleOperationRef.current = handleSingleOperation;
  import_react11.useEffect(() => {
    if (viewState === "plugin-details" && selectedPlugin && pendingAutoActionRef.current) {
      const pending = pendingAutoActionRef.current;
      pendingAutoActionRef.current = undefined;
      handleSingleOperationRef.current(pending);
    }
  }, [viewState, selectedPlugin]);
  const handleToggle = React9.useCallback(() => {
    if (selectedIndex >= filteredItems.length)
      return;
    const item = filteredItems[selectedIndex];
    if (item?.type === "flagged-plugin")
      return;
    if (item?.type === "plugin") {
      const pluginId = `${item.plugin.name}@${item.marketplace}`;
      const mergedSettings = getSettings_DEPRECATED();
      const currentPending = pendingToggles.get(pluginId);
      const isEnabled = mergedSettings?.enabledPlugins?.[pluginId] !== false;
      const pluginScope = item.scope;
      const isBuiltin = pluginScope === "builtin";
      if (isBuiltin || isInstallableScope(pluginScope)) {
        const newPending = new Map(pendingToggles);
        if (currentPending) {
          newPending.delete(pluginId);
          (async () => {
            try {
              if (currentPending === "will-disable") {
                await enablePluginOp(pluginId);
              } else {
                await disablePluginOp(pluginId);
              }
              clearAllCaches();
            } catch (err) {
              logError(err);
            }
          })();
        } else {
          newPending.set(pluginId, isEnabled ? "will-disable" : "will-enable");
          (async () => {
            try {
              if (isEnabled) {
                await disablePluginOp(pluginId);
              } else {
                await enablePluginOp(pluginId);
              }
              clearAllCaches();
            } catch (err) {
              logError(err);
            }
          })();
        }
        setPendingToggles(newPending);
      }
    } else if (item?.type === "mcp") {
      toggleMcpServer(item.client.name);
    }
  }, [
    selectedIndex,
    filteredItems,
    pendingToggles,
    pluginStates,
    toggleMcpServer
  ]);
  const handleAccept = React9.useCallback(() => {
    if (selectedIndex >= filteredItems.length)
      return;
    const item = filteredItems[selectedIndex];
    if (item?.type === "plugin") {
      const state = pluginStates.find((s) => s.plugin.name === item.plugin.name && s.marketplace === item.marketplace);
      if (state) {
        setSelectedPlugin(state);
        setViewState("plugin-details");
        setDetailsMenuIndex(0);
        setProcessError(null);
      }
    } else if (item?.type === "flagged-plugin") {
      setViewState({
        type: "flagged-detail",
        plugin: {
          id: item.id,
          name: item.name,
          marketplace: item.marketplace,
          reason: item.reason,
          text: item.text,
          flaggedAt: item.flaggedAt
        }
      });
      setProcessError(null);
    } else if (item?.type === "failed-plugin") {
      setViewState({
        type: "failed-plugin-details",
        plugin: {
          id: item.id,
          name: item.name,
          marketplace: item.marketplace,
          errors: item.errors,
          scope: item.scope
        }
      });
      setDetailsMenuIndex(0);
      setProcessError(null);
    } else if (item?.type === "mcp") {
      setViewState({ type: "mcp-detail", client: item.client });
      setProcessError(null);
    }
  }, [selectedIndex, filteredItems, pluginStates]);
  useKeybindings({
    "select:previous": () => {
      if (selectedIndex === 0) {
        setIsSearchMode(true);
      } else {
        pagination.handleSelectionChange(selectedIndex - 1, setSelectedIndex);
      }
    },
    "select:next": () => {
      if (selectedIndex < filteredItems.length - 1) {
        pagination.handleSelectionChange(selectedIndex + 1, setSelectedIndex);
      }
    },
    "select:accept": handleAccept
  }, {
    context: "Select",
    isActive: viewState === "plugin-list" && !isSearchMode
  });
  useKeybindings({ "plugin:toggle": handleToggle }, {
    context: "Plugin",
    isActive: viewState === "plugin-list" && !isSearchMode
  });
  const handleFlaggedDismiss = React9.useCallback(() => {
    if (typeof viewState !== "object" || viewState.type !== "flagged-detail")
      return;
    removeFlaggedPlugin(viewState.plugin.id);
    setViewState("plugin-list");
  }, [viewState]);
  useKeybindings({ "select:accept": handleFlaggedDismiss }, {
    context: "Select",
    isActive: typeof viewState === "object" && viewState.type === "flagged-detail"
  });
  const detailsMenuItems = React9.useMemo(() => {
    if (viewState !== "plugin-details" || !selectedPlugin)
      return [];
    const mergedSettings = getSettings_DEPRECATED();
    const pluginId = `${selectedPlugin.plugin.name}@${selectedPlugin.marketplace}`;
    const isEnabled = mergedSettings?.enabledPlugins?.[pluginId] !== false;
    const isBuiltin = selectedPlugin.marketplace === "builtin";
    const menuItems = [];
    menuItems.push({
      label: isEnabled ? "Disable plugin" : "Enable plugin",
      action: () => void handleSingleOperation(isEnabled ? "disable" : "enable")
    });
    if (!isBuiltin) {
      menuItems.push({
        label: selectedPlugin.pendingUpdate ? "Unmark for update" : "Mark for update",
        action: async () => {
          try {
            const localError = await checkIfLocalPlugin(selectedPlugin.plugin.name, selectedPlugin.marketplace);
            if (localError) {
              setProcessError(localError);
              return;
            }
            const newStates = [...pluginStates];
            const index = newStates.findIndex((s) => s.plugin.name === selectedPlugin.plugin.name && s.marketplace === selectedPlugin.marketplace);
            if (index !== -1) {
              newStates[index].pendingUpdate = !selectedPlugin.pendingUpdate;
              setPluginStates(newStates);
              setSelectedPlugin({
                ...selectedPlugin,
                pendingUpdate: !selectedPlugin.pendingUpdate
              });
            }
          } catch (error) {
            setProcessError(error instanceof Error ? error.message : "Failed to check plugin update availability");
          }
        }
      });
      if (selectedPluginHasMcpb) {
        menuItems.push({
          label: "Configure",
          action: async () => {
            setIsLoadingConfig(true);
            try {
              const mcpServersSpec = selectedPlugin.plugin.manifest.mcpServers;
              let mcpbPath = null;
              if (typeof mcpServersSpec === "string" && isMcpbSource(mcpServersSpec)) {
                mcpbPath = mcpServersSpec;
              } else if (Array.isArray(mcpServersSpec)) {
                for (const spec of mcpServersSpec) {
                  if (typeof spec === "string" && isMcpbSource(spec)) {
                    mcpbPath = spec;
                    break;
                  }
                }
              }
              if (!mcpbPath) {
                setProcessError("No MCPB file found in plugin");
                setIsLoadingConfig(false);
                return;
              }
              const pluginId2 = `${selectedPlugin.plugin.name}@${selectedPlugin.marketplace}`;
              const result = await loadMcpbFile(mcpbPath, selectedPlugin.plugin.path, pluginId2, undefined, undefined, true);
              if ("status" in result && result.status === "needs-config") {
                setConfigNeeded(result);
                setViewState("configuring");
              } else {
                setProcessError("Failed to load MCPB for configuration");
              }
            } catch (err) {
              const errorMsg = errorMessage(err);
              setProcessError(`Failed to load configuration: ${errorMsg}`);
            } finally {
              setIsLoadingConfig(false);
            }
          }
        });
      }
      if (selectedPlugin.plugin.manifest.userConfig && Object.keys(selectedPlugin.plugin.manifest.userConfig).length > 0) {
        menuItems.push({
          label: "Configure options",
          action: () => {
            setViewState({
              type: "configuring-options",
              schema: selectedPlugin.plugin.manifest.userConfig
            });
          }
        });
      }
      menuItems.push({
        label: "Update now",
        action: () => void handleSingleOperation("update")
      });
      menuItems.push({
        label: "Uninstall",
        action: () => void handleSingleOperation("uninstall")
      });
    }
    if (selectedPlugin.plugin.manifest.homepage) {
      menuItems.push({
        label: "Open homepage",
        action: () => void openBrowser(selectedPlugin.plugin.manifest.homepage)
      });
    }
    if (selectedPlugin.plugin.manifest.repository) {
      menuItems.push({
        label: "View repository",
        action: () => void openBrowser(selectedPlugin.plugin.manifest.repository)
      });
    }
    menuItems.push({
      label: "Back to plugin list",
      action: () => {
        setViewState("plugin-list");
        setSelectedPlugin(null);
        setProcessError(null);
      }
    });
    return menuItems;
  }, [viewState, selectedPlugin, selectedPluginHasMcpb, pluginStates]);
  useKeybindings({
    "select:previous": () => {
      if (detailsMenuIndex > 0) {
        setDetailsMenuIndex(detailsMenuIndex - 1);
      }
    },
    "select:next": () => {
      if (detailsMenuIndex < detailsMenuItems.length - 1) {
        setDetailsMenuIndex(detailsMenuIndex + 1);
      }
    },
    "select:accept": () => {
      if (detailsMenuItems[detailsMenuIndex]) {
        detailsMenuItems[detailsMenuIndex].action();
      }
    }
  }, {
    context: "Select",
    isActive: viewState === "plugin-details" && !!selectedPlugin
  });
  useKeybindings({
    "select:accept": () => {
      if (typeof viewState === "object" && viewState.type === "failed-plugin-details") {
        (async () => {
          setIsProcessing(true);
          setProcessError(null);
          const pluginId = viewState.plugin.id;
          const pluginScope = viewState.plugin.scope;
          const result = isInstallableScope(pluginScope) ? await uninstallPluginOp(pluginId, pluginScope, false) : await uninstallPluginOp(pluginId, "user", false);
          let success = result.success;
          if (!success) {
            const editableSources = [
              "userSettings",
              "projectSettings",
              "localSettings"
            ];
            for (const source of editableSources) {
              const settings = getSettingsForSource(source);
              if (settings?.enabledPlugins?.[pluginId] !== undefined) {
                updateSettingsForSource(source, {
                  enabledPlugins: {
                    ...settings.enabledPlugins,
                    [pluginId]: undefined
                  }
                });
                success = true;
              }
            }
            clearAllCaches();
          }
          if (success) {
            if (onManageComplete) {
              await onManageComplete();
            }
            setIsProcessing(false);
            setViewState("plugin-list");
          } else {
            setIsProcessing(false);
            setProcessError(result.message);
          }
        })();
      }
    }
  }, {
    context: "Select",
    isActive: typeof viewState === "object" && viewState.type === "failed-plugin-details" && viewState.plugin.scope !== "managed"
  });
  useKeybindings({
    "confirm:yes": () => {
      if (!selectedPlugin)
        return;
      setIsProcessing(true);
      setProcessError(null);
      const pluginId = `${selectedPlugin.plugin.name}@${selectedPlugin.marketplace}`;
      const { error } = updateSettingsForSource("localSettings", {
        enabledPlugins: {
          ...getSettingsForSource("localSettings")?.enabledPlugins,
          [pluginId]: false
        }
      });
      if (error) {
        setIsProcessing(false);
        setProcessError(`Failed to write settings: ${error.message}`);
        return;
      }
      clearAllCaches();
      setResult(`\u2713 Disabled ${selectedPlugin.plugin.name} in .claude/settings.local.json. Run /reload-plugins to apply.`);
      if (onManageComplete)
        onManageComplete();
      setParentViewState({ type: "menu" });
    },
    "confirm:no": () => {
      setViewState("plugin-details");
      setProcessError(null);
    }
  }, {
    context: "Confirmation",
    isActive: viewState === "confirm-project-uninstall" && !!selectedPlugin && !isProcessing
  });
  use_input_default((input, key) => {
    if (!selectedPlugin)
      return;
    const pluginId = `${selectedPlugin.plugin.name}@${selectedPlugin.marketplace}`;
    const pluginScope = selectedPlugin.scope;
    if (!pluginScope || pluginScope === "builtin" || !isInstallableScope(pluginScope))
      return;
    const doUninstall = async (deleteDataDir) => {
      setIsProcessing(true);
      setProcessError(null);
      try {
        const result = await uninstallPluginOp(pluginId, pluginScope, deleteDataDir);
        if (!result.success)
          throw new Error(result.message);
        clearAllCaches();
        const suffix = deleteDataDir ? "" : " \xB7 data preserved";
        setResult(`${figures_default.tick} ${result.message}${suffix}`);
        if (onManageComplete)
          onManageComplete();
        setParentViewState({ type: "menu" });
      } catch (e) {
        setIsProcessing(false);
        setProcessError(e instanceof Error ? e.message : String(e));
      }
    };
    if (input === "y" || input === "Y") {
      doUninstall(true);
    } else if (input === "n" || input === "N") {
      doUninstall(false);
    } else if (key.escape) {
      setViewState("plugin-details");
      setProcessError(null);
    }
  }, {
    isActive: typeof viewState === "object" && viewState.type === "confirm-data-cleanup" && !!selectedPlugin && !isProcessing
  });
  React9.useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);
  use_input_default((input, key) => {
    const keyIsNotCtrlOrMeta = !key.ctrl && !key.meta;
    if (isSearchMode) {
      return;
    }
    if (input === "/" && keyIsNotCtrlOrMeta) {
      setIsSearchMode(true);
      setSearchQuery("");
      setSelectedIndex(0);
    } else if (keyIsNotCtrlOrMeta && input.length > 0 && !/^\s+$/.test(input) && input !== "j" && input !== "k" && input !== " ") {
      setIsSearchMode(true);
      setSearchQuery(input);
      setSelectedIndex(0);
    }
  }, { isActive: viewState === "plugin-list" });
  if (loading) {
    return /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
      children: "Loading installed plugins\u2026"
    }, undefined, false, undefined, this);
  }
  if (unifiedItems.length === 0) {
    return /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      children: [
        /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
          marginBottom: 1,
          children: /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
            bold: true,
            children: "Manage plugins"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
          children: "No plugins or MCP servers installed."
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
            dimColor: true,
            children: "Esc to go back"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  if (typeof viewState === "object" && viewState.type === "plugin-options" && selectedPlugin) {
    let finish = function(msg) {
      setResult(msg);
      if (onManageComplete) {
        onManageComplete();
      }
      setParentViewState({ type: "menu" });
    };
    const pluginId = `${selectedPlugin.plugin.name}@${selectedPlugin.marketplace}`;
    return /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(PluginOptionsFlow, {
      plugin: selectedPlugin.plugin,
      pluginId,
      onDone: (outcome, detail) => {
        switch (outcome) {
          case "configured":
            finish(`\u2713 Enabled and configured ${selectedPlugin.plugin.name}. Run /reload-plugins to apply.`);
            break;
          case "skipped":
            finish(`\u2713 Enabled ${selectedPlugin.plugin.name}. Run /reload-plugins to apply.`);
            break;
          case "error":
            finish(`Failed to save configuration: ${detail}`);
            break;
        }
      }
    }, undefined, false, undefined, this);
  }
  if (typeof viewState === "object" && viewState.type === "configuring-options" && selectedPlugin) {
    const pluginId = `${selectedPlugin.plugin.name}@${selectedPlugin.marketplace}`;
    return /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(PluginOptionsDialog, {
      title: `Configure ${selectedPlugin.plugin.name}`,
      subtitle: "Plugin options",
      configSchema: viewState.schema,
      initialValues: loadPluginOptions(pluginId),
      onSave: (values) => {
        try {
          savePluginOptions(pluginId, values, viewState.schema);
          clearAllCaches();
          setResult("Configuration saved. Run /reload-plugins for changes to take effect.");
        } catch (err) {
          setProcessError(`Failed to save configuration: ${errorMessage(err)}`);
        }
        setViewState("plugin-details");
      },
      onCancel: () => setViewState("plugin-details")
    }, undefined, false, undefined, this);
  }
  if (viewState === "configuring" && configNeeded && selectedPlugin) {
    let handleCancel = function() {
      setConfigNeeded(null);
      setViewState("plugin-details");
    };
    const pluginId = `${selectedPlugin.plugin.name}@${selectedPlugin.marketplace}`;
    async function handleSave(config) {
      if (!configNeeded || !selectedPlugin)
        return;
      try {
        const mcpServersSpec = selectedPlugin.plugin.manifest.mcpServers;
        let mcpbPath = null;
        if (typeof mcpServersSpec === "string" && isMcpbSource(mcpServersSpec)) {
          mcpbPath = mcpServersSpec;
        } else if (Array.isArray(mcpServersSpec)) {
          for (const spec of mcpServersSpec) {
            if (typeof spec === "string" && isMcpbSource(spec)) {
              mcpbPath = spec;
              break;
            }
          }
        }
        if (!mcpbPath) {
          setProcessError("No MCPB file found");
          setViewState("plugin-details");
          return;
        }
        await loadMcpbFile(mcpbPath, selectedPlugin.plugin.path, pluginId, undefined, config);
        setProcessError(null);
        setConfigNeeded(null);
        setViewState("plugin-details");
        setResult("Configuration saved. Run /reload-plugins for changes to take effect.");
      } catch (err) {
        const errorMsg = errorMessage(err);
        setProcessError(`Failed to save configuration: ${errorMsg}`);
        setViewState("plugin-details");
      }
    }
    return /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(PluginOptionsDialog, {
      title: `Configure ${configNeeded.manifest.name}`,
      subtitle: `Plugin: ${selectedPlugin.plugin.name}`,
      configSchema: configNeeded.configSchema,
      initialValues: configNeeded.existingConfig,
      onSave: handleSave,
      onCancel: handleCancel
    }, undefined, false, undefined, this);
  }
  if (typeof viewState === "object" && viewState.type === "flagged-detail") {
    const fp = viewState.plugin;
    return /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      children: [
        /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
          children: /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
            bold: true,
            children: [
              fp.name,
              " @ ",
              fp.marketplace
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
          marginBottom: 1,
          children: [
            /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
              dimColor: true,
              children: "Status: "
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
              color: "error",
              children: "Removed"
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
          marginBottom: 1,
          flexDirection: "column",
          children: [
            /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
              color: "error",
              children: [
                "Removed from marketplace \xB7 reason: ",
                fp.reason
              ]
            }, undefined, true, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
              children: fp.text
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
              dimColor: true,
              children: [
                "Flagged on ",
                new Date(fp.flaggedAt).toLocaleDateString()
              ]
            }, undefined, true, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          flexDirection: "column",
          children: /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
                children: [
                  figures_default.pointer,
                  " "
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
                color: "suggestion",
                children: "Dismiss"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(Byline, {
          children: [
            /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ConfigurableShortcutHint, {
              action: "select:accept",
              context: "Select",
              fallback: "Enter",
              description: "dismiss"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ConfigurableShortcutHint, {
              action: "confirm:no",
              context: "Confirmation",
              fallback: "Esc",
              description: "back"
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  if (viewState === "confirm-project-uninstall" && selectedPlugin) {
    return /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      children: [
        /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
          bold: true,
          color: "warning",
          children: [
            selectedPlugin.plugin.name,
            " is enabled in .claude/settings.json (shared with your team)"
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          flexDirection: "column",
          children: [
            /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
              children: "Disable it just for you in .claude/settings.local.json?"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
              dimColor: true,
              children: "This has the same effect as uninstalling, without affecting other contributors."
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        processError && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
            color: "error",
            children: processError
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: isProcessing ? /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
            dimColor: true,
            children: "Disabling\u2026"
          }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(Byline, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ConfigurableShortcutHint, {
                action: "confirm:yes",
                context: "Confirmation",
                fallback: "y",
                description: "disable"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ConfigurableShortcutHint, {
                action: "confirm:no",
                context: "Confirmation",
                fallback: "Esc",
                description: "cancel"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  if (typeof viewState === "object" && viewState.type === "confirm-data-cleanup" && selectedPlugin) {
    return /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      children: [
        /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
          bold: true,
          children: [
            selectedPlugin.plugin.name,
            " has ",
            viewState.size.human,
            " of persistent data"
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          flexDirection: "column",
          children: [
            /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
              children: "Delete it along with the plugin?"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
              dimColor: true,
              children: pluginDataDirPath(`${selectedPlugin.plugin.name}@${selectedPlugin.marketplace}`)
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        processError && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
            color: "error",
            children: processError
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: isProcessing ? /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
            dimColor: true,
            children: "Uninstalling\u2026"
          }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
                bold: true,
                children: "y"
              }, undefined, false, undefined, this),
              " to delete \xB7 ",
              /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
                bold: true,
                children: "n"
              }, undefined, false, undefined, this),
              " to keep \xB7",
              " ",
              /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
                bold: true,
                children: "esc"
              }, undefined, false, undefined, this),
              " to cancel"
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  if (viewState === "plugin-details" && selectedPlugin) {
    const mergedSettings = getSettings_DEPRECATED();
    const pluginId = `${selectedPlugin.plugin.name}@${selectedPlugin.marketplace}`;
    const isEnabled = mergedSettings?.enabledPlugins?.[pluginId] !== false;
    const filteredPluginErrors = pluginErrors.filter((e) => ("plugin" in e) && e.plugin === selectedPlugin.plugin.name || e.source === pluginId || e.source.startsWith(`${selectedPlugin.plugin.name}@`));
    const pluginErrorsSection = filteredPluginErrors.length === 0 ? null : /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      marginBottom: 1,
      children: [
        /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
          bold: true,
          color: "error",
          children: [
            filteredPluginErrors.length,
            " ",
            plural(filteredPluginErrors.length, "error"),
            ":"
          ]
        }, undefined, true, undefined, this),
        filteredPluginErrors.map((error, i) => {
          const guidance = getErrorGuidance(error);
          return /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            marginLeft: 2,
            children: [
              /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
                color: "error",
                children: formatErrorMessage(error)
              }, undefined, false, undefined, this),
              guidance && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
                dimColor: true,
                italic: true,
                children: [
                  figures_default.arrowRight,
                  " ",
                  guidance
                ]
              }, undefined, true, undefined, this)
            ]
          }, i, true, undefined, this);
        })
      ]
    }, undefined, true, undefined, this);
    return /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      children: [
        /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
          children: /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
            bold: true,
            children: [
              selectedPlugin.plugin.name,
              " @ ",
              selectedPlugin.marketplace
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
          children: [
            /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
              dimColor: true,
              children: "Scope: "
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
              children: selectedPlugin.scope || "user"
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        selectedPlugin.plugin.manifest.version && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
          children: [
            /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
              dimColor: true,
              children: "Version: "
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
              children: selectedPlugin.plugin.manifest.version
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        selectedPlugin.plugin.manifest.description && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
          marginBottom: 1,
          children: /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
            children: selectedPlugin.plugin.manifest.description
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        selectedPlugin.plugin.manifest.author && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
          children: [
            /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
              dimColor: true,
              children: "Author: "
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
              children: selectedPlugin.plugin.manifest.author.name
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
          marginBottom: 1,
          children: [
            /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
              dimColor: true,
              children: "Status: "
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
              color: isEnabled ? "success" : "warning",
              children: isEnabled ? "Enabled" : "Disabled"
            }, undefined, false, undefined, this),
            selectedPlugin.pendingUpdate && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
              color: "suggestion",
              children: " \xB7 Marked for update"
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(PluginComponentsDisplay, {
          plugin: selectedPlugin.plugin,
          marketplace: selectedPlugin.marketplace
        }, undefined, false, undefined, this),
        pluginErrorsSection,
        /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          flexDirection: "column",
          children: detailsMenuItems.map((item, index) => {
            const isSelected = index === detailsMenuIndex;
            return /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
              children: [
                isSelected && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
                  children: [
                    figures_default.pointer,
                    " "
                  ]
                }, undefined, true, undefined, this),
                !isSelected && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
                  children: "  "
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
                  bold: isSelected,
                  color: item.label.includes("Uninstall") ? "error" : item.label.includes("Update") ? "suggestion" : undefined,
                  children: item.label
                }, undefined, false, undefined, this)
              ]
            }, index, true, undefined, this);
          })
        }, undefined, false, undefined, this),
        isProcessing && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
            children: "Processing\u2026"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        processError && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
            color: "error",
            children: processError
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
            dimColor: true,
            italic: true,
            children: /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(Byline, {
              children: [
                /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ConfigurableShortcutHint, {
                  action: "select:previous",
                  context: "Select",
                  fallback: "\u2191",
                  description: "navigate"
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ConfigurableShortcutHint, {
                  action: "select:accept",
                  context: "Select",
                  fallback: "Enter",
                  description: "select"
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ConfigurableShortcutHint, {
                  action: "confirm:no",
                  context: "Confirmation",
                  fallback: "Esc",
                  description: "back"
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  if (typeof viewState === "object" && viewState.type === "failed-plugin-details") {
    const failedPlugin = viewState.plugin;
    const firstError = failedPlugin.errors[0];
    const errorMessage2 = firstError ? formatErrorMessage(firstError) : "Failed to load";
    return /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      children: [
        /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
          children: [
            /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
              bold: true,
              children: failedPlugin.name
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
              dimColor: true,
              children: [
                " @ ",
                failedPlugin.marketplace
              ]
            }, undefined, true, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
              dimColor: true,
              children: [
                " (",
                failedPlugin.scope,
                ")"
              ]
            }, undefined, true, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
          color: "error",
          children: errorMessage2
        }, undefined, false, undefined, this),
        failedPlugin.scope === "managed" ? /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
            dimColor: true,
            children: "Managed by your organization \u2014 contact your admin"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: [
            /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
              color: "suggestion",
              children: [
                figures_default.pointer,
                " "
              ]
            }, undefined, true, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
              bold: true,
              children: "Remove"
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        isProcessing && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
          children: "Processing\u2026"
        }, undefined, false, undefined, this),
        processError && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
          color: "error",
          children: processError
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
            dimColor: true,
            italic: true,
            children: /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(Byline, {
              children: [
                failedPlugin.scope !== "managed" && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ConfigurableShortcutHint, {
                  action: "select:accept",
                  context: "Select",
                  fallback: "Enter",
                  description: "remove"
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ConfigurableShortcutHint, {
                  action: "confirm:no",
                  context: "Confirmation",
                  fallback: "Esc",
                  description: "back"
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  if (typeof viewState === "object" && viewState.type === "mcp-detail") {
    const client = viewState.client;
    const serverToolsCount = filterToolsByServer(mcpTools, client.name).length;
    const handleMcpViewTools = () => {
      setViewState({ type: "mcp-tools", client });
    };
    const handleMcpCancel = () => {
      setViewState("plugin-list");
    };
    const handleMcpComplete = (result) => {
      if (result) {
        setResult(result);
      }
      setViewState("plugin-list");
    };
    const scope = client.config.scope;
    const configType = client.config.type;
    if (configType === "stdio") {
      const server = {
        name: client.name,
        client,
        scope,
        transport: "stdio",
        config: client.config
      };
      return /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(MCPStdioServerMenu, {
        server,
        serverToolsCount,
        onViewTools: handleMcpViewTools,
        onCancel: handleMcpCancel,
        onComplete: handleMcpComplete,
        borderless: true
      }, undefined, false, undefined, this);
    } else if (configType === "sse") {
      const server = {
        name: client.name,
        client,
        scope,
        transport: "sse",
        isAuthenticated: undefined,
        config: client.config
      };
      return /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(MCPRemoteServerMenu, {
        server,
        serverToolsCount,
        onViewTools: handleMcpViewTools,
        onCancel: handleMcpCancel,
        onComplete: handleMcpComplete,
        borderless: true
      }, undefined, false, undefined, this);
    } else if (configType === "http") {
      const server = {
        name: client.name,
        client,
        scope,
        transport: "http",
        isAuthenticated: undefined,
        config: client.config
      };
      return /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(MCPRemoteServerMenu, {
        server,
        serverToolsCount,
        onViewTools: handleMcpViewTools,
        onCancel: handleMcpCancel,
        onComplete: handleMcpComplete,
        borderless: true
      }, undefined, false, undefined, this);
    } else if (configType === "claudeai-proxy") {
      const server = {
        name: client.name,
        client,
        scope,
        transport: "claudeai-proxy",
        isAuthenticated: undefined,
        config: client.config
      };
      return /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(MCPRemoteServerMenu, {
        server,
        serverToolsCount,
        onViewTools: handleMcpViewTools,
        onCancel: handleMcpCancel,
        onComplete: handleMcpComplete,
        borderless: true
      }, undefined, false, undefined, this);
    }
    setViewState("plugin-list");
    return null;
  }
  if (typeof viewState === "object" && viewState.type === "mcp-tools") {
    const client = viewState.client;
    const scope = client.config.scope;
    const configType = client.config.type;
    let server;
    if (configType === "stdio") {
      server = {
        name: client.name,
        client,
        scope,
        transport: "stdio",
        config: client.config
      };
    } else if (configType === "sse") {
      server = {
        name: client.name,
        client,
        scope,
        transport: "sse",
        isAuthenticated: undefined,
        config: client.config
      };
    } else if (configType === "http") {
      server = {
        name: client.name,
        client,
        scope,
        transport: "http",
        isAuthenticated: undefined,
        config: client.config
      };
    } else {
      server = {
        name: client.name,
        client,
        scope,
        transport: "claudeai-proxy",
        isAuthenticated: undefined,
        config: client.config
      };
    }
    return /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(MCPToolListView, {
      server,
      onSelectTool: (tool) => {
        setViewState({ type: "mcp-tool-detail", client, tool });
      },
      onBack: () => setViewState({ type: "mcp-detail", client })
    }, undefined, false, undefined, this);
  }
  if (typeof viewState === "object" && viewState.type === "mcp-tool-detail") {
    const { client, tool } = viewState;
    const scope = client.config.scope;
    const configType = client.config.type;
    let server;
    if (configType === "stdio") {
      server = {
        name: client.name,
        client,
        scope,
        transport: "stdio",
        config: client.config
      };
    } else if (configType === "sse") {
      server = {
        name: client.name,
        client,
        scope,
        transport: "sse",
        isAuthenticated: undefined,
        config: client.config
      };
    } else if (configType === "http") {
      server = {
        name: client.name,
        client,
        scope,
        transport: "http",
        isAuthenticated: undefined,
        config: client.config
      };
    } else {
      server = {
        name: client.name,
        client,
        scope,
        transport: "claudeai-proxy",
        isAuthenticated: undefined,
        config: client.config
      };
    }
    return /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(MCPToolDetailView, {
      tool,
      server,
      onBack: () => setViewState({ type: "mcp-tools", client })
    }, undefined, false, undefined, this);
  }
  const visibleItems = pagination.getVisibleItems(filteredItems);
  return /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    children: [
      /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
        marginBottom: 1,
        children: /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(SearchBox, {
          query: searchQuery,
          isFocused: isSearchMode,
          isTerminalFocused,
          width: terminalWidth - 4,
          cursorOffset: searchCursorOffset
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      filteredItems.length === 0 && searchQuery && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
        marginBottom: 1,
        children: /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
          dimColor: true,
          children: [
            'No items match "',
            searchQuery,
            '"'
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this),
      pagination.scrollPosition.canScrollUp && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
        children: /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
          dimColor: true,
          children: [
            " ",
            figures_default.arrowUp,
            " more above"
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this),
      visibleItems.map((item, visibleIndex) => {
        const actualIndex = pagination.toActualIndex(visibleIndex);
        const isSelected = actualIndex === selectedIndex && !isSearchMode;
        const prevItem = visibleIndex > 0 ? visibleItems[visibleIndex - 1] : null;
        const showScopeHeader = !prevItem || prevItem.scope !== item.scope;
        const getScopeLabel = (scope) => {
          switch (scope) {
            case "flagged":
              return "Flagged";
            case "project":
              return "Project";
            case "local":
              return "Local";
            case "user":
              return "User";
            case "enterprise":
              return "Enterprise";
            case "managed":
              return "Managed";
            case "builtin":
              return "Built-in";
            case "dynamic":
              return "Built-in";
            default:
              return scope;
          }
        };
        return /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(React9.Fragment, {
          children: [
            showScopeHeader && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
              marginTop: visibleIndex > 0 ? 1 : 0,
              paddingLeft: 2,
              children: /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
                dimColor: item.scope !== "flagged",
                color: item.scope === "flagged" ? "warning" : undefined,
                bold: item.scope === "flagged",
                children: getScopeLabel(item.scope)
              }, undefined, false, undefined, this)
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(UnifiedInstalledCell, {
              item,
              isSelected
            }, undefined, false, undefined, this)
          ]
        }, item.id, true, undefined, this);
      }),
      pagination.scrollPosition.canScrollDown && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
        children: /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
          dimColor: true,
          children: [
            " ",
            figures_default.arrowDown,
            " more below"
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
        marginTop: 1,
        marginLeft: 1,
        children: /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
          dimColor: true,
          italic: true,
          children: /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(Byline, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
                children: "type to search"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ConfigurableShortcutHint, {
                action: "plugin:toggle",
                context: "Plugin",
                fallback: "Space",
                description: "toggle"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ConfigurableShortcutHint, {
                action: "select:accept",
                context: "Select",
                fallback: "Enter",
                description: "details"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ConfigurableShortcutHint, {
                action: "confirm:no",
                context: "Confirmation",
                fallback: "Esc",
                description: "back"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      pendingToggles.size > 0 && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
        marginLeft: 1,
        children: /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
          dimColor: true,
          italic: true,
          children: "Run /reload-plugins to apply changes"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var React9, import_react11, jsx_dev_runtime15;
var init_ManagePlugins = __esm(() => {
  init_figures();
  init_ConfigurableShortcutHint();
  init_src();
  init_MCPRemoteServerMenu();
  init_MCPStdioServerMenu();
  init_MCPToolDetailView();
  init_MCPToolListView();
  init_SearchBox();
  init_useSearchInput();
  init_useTerminalSize();
  init_src();
  init_useKeybinding();
  init_builtinPlugins();
  init_MCPConnectionManager();
  init_utils();
  init_pluginOperations();
  init_AppState();
  init_array();
  init_browser();
  init_debug();
  init_errors();
  init_log();
  init_cacheUtils();
  init_installedPluginsManager();
  init_marketplaceManager();
  init_mcpbHandler();
  init_pluginDirectories();
  init_pluginFlagging();
  init_pluginIdentifier();
  init_pluginLoader();
  init_pluginOptionsStorage();
  init_pluginPolicy();
  init_pluginStartupCheck();
  init_settings();
  init_slowOperations();
  init_stringUtils();
  init_PluginErrors();
  init_PluginOptionsDialog();
  init_PluginOptionsFlow();
  init_UnifiedInstalledCell();
  init_usePagination();
  React9 = __toESM(require_react(), 1);
  import_react11 = __toESM(require_react(), 1);
  jsx_dev_runtime15 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/commands/plugin/parseArgs.ts
function parsePluginArgs(args) {
  if (!args) {
    return { type: "menu" };
  }
  const parts = args.trim().split(/\s+/);
  const command = parts[0]?.toLowerCase();
  switch (command) {
    case "help":
    case "--help":
    case "-h":
      return { type: "help" };
    case "install":
    case "i": {
      const target = parts[1];
      if (!target) {
        return { type: "install" };
      }
      if (target.includes("@")) {
        const [plugin, marketplace] = target.split("@");
        return { type: "install", plugin, marketplace };
      }
      const isMarketplace = target.startsWith("http://") || target.startsWith("https://") || target.startsWith("file://") || target.includes("/") || target.includes("\\");
      if (isMarketplace) {
        return { type: "install", marketplace: target };
      }
      return { type: "install", plugin: target };
    }
    case "manage":
      return { type: "manage" };
    case "uninstall":
      return { type: "uninstall", plugin: parts[1] };
    case "enable":
      return { type: "enable", plugin: parts[1] };
    case "disable":
      return { type: "disable", plugin: parts[1] };
    case "validate": {
      const target = parts.slice(1).join(" ").trim();
      return { type: "validate", path: target || undefined };
    }
    case "marketplace":
    case "market": {
      const action = parts[1]?.toLowerCase();
      const target = parts.slice(2).join(" ");
      switch (action) {
        case "add":
          return { type: "marketplace", action: "add", target };
        case "remove":
        case "rm":
          return { type: "marketplace", action: "remove", target };
        case "update":
          return { type: "marketplace", action: "update", target };
        case "list":
          return { type: "marketplace", action: "list" };
        default:
          return { type: "marketplace" };
      }
    }
    default:
      return { type: "menu" };
  }
}
var init_parseArgs = () => {};

// src/commands/plugin/ValidatePlugin.tsx
function ValidatePlugin({ onComplete, path: path2 }) {
  import_react12.useEffect(() => {
    async function runValidation() {
      if (!path2) {
        onComplete(`Usage: /plugin validate <path>

` + `Validate a plugin or marketplace manifest file or directory.

` + `Examples:
` + `  /plugin validate .claude-plugin/plugin.json
` + `  /plugin validate /path/to/plugin-directory
` + `  /plugin validate .

` + `When given a directory, automatically validates .claude-plugin/marketplace.json
` + `or .claude-plugin/plugin.json (prefers marketplace if both exist).

` + `Or from the command line:
` + "  claude plugin validate <path>");
        return;
      }
      try {
        const result = await validateManifest(path2);
        let output = "";
        output += `Validating ${result.fileType} manifest: ${result.filePath}

`;
        if (result.errors.length > 0) {
          output += `${figures_default.cross} Found ${result.errors.length} ${plural(result.errors.length, "error")}:

`;
          result.errors.forEach((error) => {
            output += `  ${figures_default.pointer} ${error.path}: ${error.message}
`;
          });
          output += `
`;
        }
        if (result.warnings.length > 0) {
          output += `${figures_default.warning} Found ${result.warnings.length} ${plural(result.warnings.length, "warning")}:

`;
          result.warnings.forEach((warning) => {
            output += `  ${figures_default.pointer} ${warning.path}: ${warning.message}
`;
          });
          output += `
`;
        }
        if (result.success) {
          if (result.warnings.length > 0) {
            output += `${figures_default.tick} Validation passed with warnings
`;
          } else {
            output += `${figures_default.tick} Validation passed
`;
          }
          process.exitCode = 0;
        } else {
          output += `${figures_default.cross} Validation failed
`;
          process.exitCode = 1;
        }
        onComplete(output);
      } catch (error) {
        process.exitCode = 2;
        logError(error);
        onComplete(`${figures_default.cross} Unexpected error during validation: ${errorMessage(error)}`);
      }
    }
    runValidation();
  }, [onComplete, path2]);
  return /* @__PURE__ */ jsx_dev_runtime16.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    children: /* @__PURE__ */ jsx_dev_runtime16.jsxDEV(ThemedText, {
      children: "Running validation..."
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
var import_react12, jsx_dev_runtime16;
var init_ValidatePlugin = __esm(() => {
  init_figures();
  init_src();
  init_errors();
  init_log();
  init_validatePlugin();
  init_stringUtils();
  import_react12 = __toESM(require_react(), 1);
  jsx_dev_runtime16 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/commands/plugin/PluginSettings.tsx
function MarketplaceList({
  onComplete
}) {
  import_react13.useEffect(() => {
    async function loadList() {
      try {
        const config = await loadKnownMarketplacesConfig();
        const names = Object.keys(config);
        if (names.length === 0) {
          onComplete("No marketplaces configured");
        } else {
          onComplete(`Configured marketplaces:
${names.map((n) => `  \u2022 ${n}`).join(`
`)}`);
        }
      } catch (err) {
        onComplete(`Error loading marketplaces: ${errorMessage(err)}`);
      }
    }
    loadList();
  }, [onComplete]);
  return /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
    children: "Loading marketplaces..."
  }, undefined, false, undefined, this);
}
function McpRedirectBanner() {
  if (process.env.USER_TYPE !== "ant") {
    return null;
  }
  return /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedBox_default, {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingLeft: 1,
    marginTop: 1,
    borderLeft: true,
    borderRight: false,
    borderTop: false,
    borderBottom: false,
    borderColor: "permission",
    borderStyle: "single",
    children: [
      /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedBox_default, {
        flexShrink: 0,
        children: /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
          bold: true,
          italic: true,
          color: "permission",
          children: [
            "i",
            " "
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
        children: "[ANT-ONLY] MCP servers are now managed in /plugins. Use /mcp no-redirect to test old UI"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function getExtraMarketplaceSourceInfo(name) {
  const editableSources = [];
  const sourcesToCheck = [
    { source: "userSettings", scope: "user" },
    { source: "projectSettings", scope: "project" },
    { source: "localSettings", scope: "local" }
  ];
  for (const { source, scope } of sourcesToCheck) {
    const settings = getSettingsForSource(source);
    if (settings?.extraKnownMarketplaces?.[name]) {
      editableSources.push({ source, scope });
    }
  }
  const policySettings = getSettingsForSource("policySettings");
  const isInPolicy = Boolean(policySettings?.extraKnownMarketplaces?.[name]);
  return { editableSources, isInPolicy };
}
function buildMarketplaceAction(name) {
  const { editableSources, isInPolicy } = getExtraMarketplaceSourceInfo(name);
  if (editableSources.length > 0) {
    return {
      kind: "remove-extra-marketplace",
      name,
      sources: editableSources
    };
  }
  if (isInPolicy) {
    return { kind: "managed-only", name };
  }
  return {
    kind: "navigate",
    tab: "marketplaces",
    viewState: {
      type: "manage-marketplaces",
      targetMarketplace: name,
      action: "remove"
    }
  };
}
function buildPluginAction(pluginName) {
  return {
    kind: "navigate",
    tab: "installed",
    viewState: {
      type: "manage-plugins",
      targetPlugin: pluginName,
      action: "uninstall"
    }
  };
}
function isTransientError(error) {
  return TRANSIENT_ERROR_TYPES.has(error.type);
}
function getPluginNameFromError(error) {
  if ("pluginId" in error && error.pluginId)
    return error.pluginId;
  if ("plugin" in error && error.plugin)
    return error.plugin;
  if (error.source.includes("@"))
    return error.source.split("@")[0];
  return;
}
function buildErrorRows(failedMarketplaces, extraMarketplaceErrors, pluginLoadingErrors, otherErrors, brokenInstalledMarketplaces, transientErrors, pluginScopes) {
  const rows = [];
  for (const error of transientErrors) {
    const pluginName = "pluginId" in error ? error.pluginId : ("plugin" in error) ? error.plugin : undefined;
    rows.push({
      label: pluginName ?? error.source,
      message: formatErrorMessage(error),
      guidance: "Restart to retry loading plugins",
      action: { kind: "none" }
    });
  }
  const shownMarketplaceNames = new Set;
  for (const m of failedMarketplaces) {
    shownMarketplaceNames.add(m.name);
    const action = buildMarketplaceAction(m.name);
    const sourceInfo = getExtraMarketplaceSourceInfo(m.name);
    const scope = sourceInfo.isInPolicy ? "managed" : sourceInfo.editableSources[0]?.scope;
    rows.push({
      label: m.name,
      message: m.error ?? "Installation failed",
      guidance: action.kind === "managed-only" ? "Managed by your organization \u2014 contact your admin" : undefined,
      action,
      scope
    });
  }
  for (const e of extraMarketplaceErrors) {
    const marketplace = "marketplace" in e ? e.marketplace : e.source;
    if (shownMarketplaceNames.has(marketplace))
      continue;
    shownMarketplaceNames.add(marketplace);
    const action = buildMarketplaceAction(marketplace);
    const sourceInfo = getExtraMarketplaceSourceInfo(marketplace);
    const scope = sourceInfo.isInPolicy ? "managed" : sourceInfo.editableSources[0]?.scope;
    rows.push({
      label: marketplace,
      message: formatErrorMessage(e),
      guidance: action.kind === "managed-only" ? "Managed by your organization \u2014 contact your admin" : getErrorGuidance(e),
      action,
      scope
    });
  }
  for (const m of brokenInstalledMarketplaces) {
    if (shownMarketplaceNames.has(m.name))
      continue;
    shownMarketplaceNames.add(m.name);
    rows.push({
      label: m.name,
      message: m.error,
      action: { kind: "remove-installed-marketplace", name: m.name }
    });
  }
  const shownPluginNames = new Set;
  for (const error of pluginLoadingErrors) {
    const pluginName = getPluginNameFromError(error);
    if (pluginName && shownPluginNames.has(pluginName))
      continue;
    if (pluginName)
      shownPluginNames.add(pluginName);
    const marketplace = "marketplace" in error ? error.marketplace : undefined;
    const scope = pluginName ? pluginScopes.get(error.source) ?? pluginScopes.get(pluginName) : undefined;
    rows.push({
      label: pluginName ? marketplace ? `${pluginName} @ ${marketplace}` : pluginName : error.source,
      message: formatErrorMessage(error),
      guidance: getErrorGuidance(error),
      action: pluginName ? buildPluginAction(pluginName) : { kind: "none" },
      scope
    });
  }
  for (const error of otherErrors) {
    rows.push({
      label: error.source,
      message: formatErrorMessage(error),
      guidance: getErrorGuidance(error),
      action: { kind: "none" }
    });
  }
  return rows;
}
function removeExtraMarketplace(name, sources) {
  for (const { source } of sources) {
    const settings = getSettingsForSource(source);
    if (!settings)
      continue;
    const updates = {};
    if (settings.extraKnownMarketplaces?.[name]) {
      updates.extraKnownMarketplaces = {
        ...settings.extraKnownMarketplaces,
        [name]: undefined
      };
    }
    if (settings.enabledPlugins) {
      const suffix = `@${name}`;
      let removedPlugins = false;
      const updatedPlugins = { ...settings.enabledPlugins };
      for (const pluginId in updatedPlugins) {
        if (pluginId.endsWith(suffix)) {
          updatedPlugins[pluginId] = undefined;
          removedPlugins = true;
        }
      }
      if (removedPlugins) {
        updates.enabledPlugins = updatedPlugins;
      }
    }
    if (Object.keys(updates).length > 0) {
      updateSettingsForSource(source, updates);
    }
  }
}
function ErrorsTabContent({
  setViewState,
  setActiveTab,
  markPluginsChanged
}) {
  const errors = useAppState((s) => s.plugins.errors);
  const installationStatus = useAppState((s) => s.plugins.installationStatus);
  const setAppState = useSetAppState();
  const [selectedIndex, setSelectedIndex] = import_react13.useState(0);
  const [actionMessage, setActionMessage] = import_react13.useState(null);
  const [marketplaceLoadFailures, setMarketplaceLoadFailures] = import_react13.useState([]);
  import_react13.useEffect(() => {
    (async () => {
      try {
        const config = await loadKnownMarketplacesConfig();
        const { failures } = await loadMarketplacesWithGracefulDegradation(config);
        setMarketplaceLoadFailures(failures);
      } catch {}
    })();
  }, []);
  const failedMarketplaces = installationStatus.marketplaces.filter((m) => m.status === "failed");
  const failedMarketplaceNames = new Set(failedMarketplaces.map((m) => m.name));
  const transientErrors = errors.filter(isTransientError);
  const extraMarketplaceErrors = errors.filter((e) => (e.type === "marketplace-not-found" || e.type === "marketplace-load-failed" || e.type === "marketplace-blocked-by-policy") && !failedMarketplaceNames.has(e.marketplace));
  const pluginLoadingErrors = errors.filter((e) => {
    if (isTransientError(e))
      return false;
    if (e.type === "marketplace-not-found" || e.type === "marketplace-load-failed" || e.type === "marketplace-blocked-by-policy") {
      return false;
    }
    return getPluginNameFromError(e) !== undefined;
  });
  const otherErrors = errors.filter((e) => {
    if (isTransientError(e))
      return false;
    if (e.type === "marketplace-not-found" || e.type === "marketplace-load-failed" || e.type === "marketplace-blocked-by-policy") {
      return false;
    }
    return getPluginNameFromError(e) === undefined;
  });
  const pluginScopes = getPluginEditableScopes();
  const rows = buildErrorRows(failedMarketplaces, extraMarketplaceErrors, pluginLoadingErrors, otherErrors, marketplaceLoadFailures, transientErrors, pluginScopes);
  useKeybinding("confirm:no", () => {
    setViewState({ type: "menu" });
  }, { context: "Confirmation" });
  const handleSelect = () => {
    const row = rows[selectedIndex];
    if (!row)
      return;
    const { action } = row;
    switch (action.kind) {
      case "navigate":
        setActiveTab(action.tab);
        setViewState(action.viewState);
        break;
      case "remove-extra-marketplace": {
        const scopes = action.sources.map((s) => s.scope).join(", ");
        removeExtraMarketplace(action.name, action.sources);
        clearAllCaches();
        setAppState((prev) => ({
          ...prev,
          plugins: {
            ...prev.plugins,
            errors: prev.plugins.errors.filter((e) => !(("marketplace" in e) && e.marketplace === action.name)),
            installationStatus: {
              ...prev.plugins.installationStatus,
              marketplaces: prev.plugins.installationStatus.marketplaces.filter((m) => m.name !== action.name)
            }
          }
        }));
        setActionMessage(`${figures_default.tick} Removed "${action.name}" from ${scopes} settings`);
        markPluginsChanged();
        break;
      }
      case "remove-installed-marketplace": {
        (async () => {
          try {
            await removeMarketplaceSource(action.name);
            clearAllCaches();
            setMarketplaceLoadFailures((prev) => prev.filter((f) => f.name !== action.name));
            setActionMessage(`${figures_default.tick} Removed marketplace "${action.name}"`);
            markPluginsChanged();
          } catch (err) {
            setActionMessage(`Failed to remove "${action.name}": ${err instanceof Error ? err.message : String(err)}`);
          }
        })();
        break;
      }
      case "managed-only":
        break;
      case "none":
        break;
    }
  };
  useKeybindings({
    "select:previous": () => setSelectedIndex((prev) => Math.max(0, prev - 1)),
    "select:next": () => setSelectedIndex((prev) => Math.min(rows.length - 1, prev + 1)),
    "select:accept": handleSelect
  }, { context: "Select", isActive: rows.length > 0 });
  const clampedIndex = Math.min(selectedIndex, Math.max(0, rows.length - 1));
  if (clampedIndex !== selectedIndex) {
    setSelectedIndex(clampedIndex);
  }
  const selectedAction = rows[clampedIndex]?.action;
  const hasAction = selectedAction && selectedAction.kind !== "none" && selectedAction.kind !== "managed-only";
  if (rows.length === 0) {
    return /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      children: [
        /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedBox_default, {
          marginLeft: 1,
          children: /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
            dimColor: true,
            children: "No plugin errors"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
            dimColor: true,
            italic: true,
            children: /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ConfigurableShortcutHint, {
              action: "confirm:no",
              context: "Confirmation",
              fallback: "Esc",
              description: "back"
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    children: [
      rows.map((row, idx) => {
        const isSelected = idx === clampedIndex;
        return /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedBox_default, {
          marginLeft: 1,
          flexDirection: "column",
          marginBottom: 1,
          children: [
            /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
              children: [
                /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
                  color: isSelected ? "suggestion" : "error",
                  children: [
                    isSelected ? figures_default.pointer : figures_default.cross,
                    " "
                  ]
                }, undefined, true, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
                  bold: isSelected,
                  children: row.label
                }, undefined, false, undefined, this),
                row.scope && /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
                  dimColor: true,
                  children: [
                    " (",
                    row.scope,
                    ")"
                  ]
                }, undefined, true, undefined, this)
              ]
            }, undefined, true, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedBox_default, {
              marginLeft: 3,
              children: /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
                color: "error",
                children: row.message
              }, undefined, false, undefined, this)
            }, undefined, false, undefined, this),
            row.guidance && /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedBox_default, {
              marginLeft: 3,
              children: /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
                dimColor: true,
                italic: true,
                children: row.guidance
              }, undefined, false, undefined, this)
            }, undefined, false, undefined, this)
          ]
        }, idx, true, undefined, this);
      }),
      actionMessage && /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedBox_default, {
        marginTop: 1,
        marginLeft: 1,
        children: /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
          color: "claude",
          children: actionMessage
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedBox_default, {
        marginTop: 1,
        children: /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
          dimColor: true,
          italic: true,
          children: /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(Byline, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ConfigurableShortcutHint, {
                action: "select:previous",
                context: "Select",
                fallback: "\u2191",
                description: "navigate"
              }, undefined, false, undefined, this),
              hasAction && /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ConfigurableShortcutHint, {
                action: "select:accept",
                context: "Select",
                fallback: "Enter",
                description: "resolve"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ConfigurableShortcutHint, {
                action: "confirm:no",
                context: "Confirmation",
                fallback: "Esc",
                description: "back"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function getInitialViewState(parsedCommand) {
  switch (parsedCommand.type) {
    case "help":
      return { type: "help" };
    case "validate":
      return { type: "validate", path: parsedCommand.path };
    case "install":
      if (parsedCommand.marketplace) {
        return {
          type: "browse-marketplace",
          targetMarketplace: parsedCommand.marketplace,
          targetPlugin: parsedCommand.plugin
        };
      }
      if (parsedCommand.plugin) {
        return {
          type: "discover-plugins",
          targetPlugin: parsedCommand.plugin
        };
      }
      return { type: "discover-plugins" };
    case "manage":
      return { type: "manage-plugins" };
    case "uninstall":
      return {
        type: "manage-plugins",
        targetPlugin: parsedCommand.plugin,
        action: "uninstall"
      };
    case "enable":
      return {
        type: "manage-plugins",
        targetPlugin: parsedCommand.plugin,
        action: "enable"
      };
    case "disable":
      return {
        type: "manage-plugins",
        targetPlugin: parsedCommand.plugin,
        action: "disable"
      };
    case "marketplace":
      if (parsedCommand.action === "list") {
        return { type: "marketplace-list" };
      }
      if (parsedCommand.action === "add") {
        return {
          type: "add-marketplace",
          initialValue: parsedCommand.target
        };
      }
      if (parsedCommand.action === "remove") {
        return {
          type: "manage-marketplaces",
          targetMarketplace: parsedCommand.target,
          action: "remove"
        };
      }
      if (parsedCommand.action === "update") {
        return {
          type: "manage-marketplaces",
          targetMarketplace: parsedCommand.target,
          action: "update"
        };
      }
      return { type: "marketplace-menu" };
    case "menu":
    default:
      return { type: "discover-plugins" };
  }
}
function getInitialTab(viewState) {
  if (viewState.type === "manage-plugins")
    return "installed";
  if (viewState.type === "manage-marketplaces")
    return "marketplaces";
  return "discover";
}
function PluginSettings({
  onComplete,
  args,
  showMcpRedirectMessage
}) {
  const parsedCommand = parsePluginArgs(args);
  const initialViewState = getInitialViewState(parsedCommand);
  const [viewState, setViewState] = import_react13.useState(initialViewState);
  const [activeTab, setActiveTab] = import_react13.useState(getInitialTab(initialViewState));
  const [inputValue, setInputValue] = import_react13.useState(viewState.type === "add-marketplace" ? viewState.initialValue || "" : "");
  const [cursorOffset, setCursorOffset] = import_react13.useState(0);
  const [error, setError] = import_react13.useState(null);
  const [result, setResult] = import_react13.useState(null);
  const [childSearchActive, setChildSearchActive] = import_react13.useState(false);
  const setAppState = useSetAppState();
  const pluginErrorCount = useAppState((s) => {
    let count2 = s.plugins.errors.length;
    for (const m of s.plugins.installationStatus.marketplaces) {
      if (m.status === "failed")
        count2++;
    }
    return count2;
  });
  const errorsTabTitle = pluginErrorCount > 0 ? `Errors (${pluginErrorCount})` : "Errors";
  const exitState = useExitOnCtrlCDWithKeybindings();
  const cliMode = parsedCommand.type === "marketplace" && parsedCommand.action === "add" && parsedCommand.target !== undefined;
  const markPluginsChanged = import_react13.useCallback(() => {
    setAppState((prev) => prev.plugins.needsRefresh ? prev : { ...prev, plugins: { ...prev.plugins, needsRefresh: true } });
  }, [setAppState]);
  const handleTabChange = import_react13.useCallback((tabId) => {
    const tab = tabId;
    setActiveTab(tab);
    setError(null);
    switch (tab) {
      case "discover":
        setViewState({ type: "discover-plugins" });
        break;
      case "installed":
        setViewState({ type: "manage-plugins" });
        break;
      case "marketplaces":
        setViewState({ type: "manage-marketplaces" });
        break;
      case "errors":
        break;
    }
  }, []);
  import_react13.useEffect(() => {
    if (viewState.type === "menu" && !result) {
      onComplete();
    }
  }, [viewState.type, result, onComplete]);
  import_react13.useEffect(() => {
    if (viewState.type === "browse-marketplace" && activeTab !== "discover") {
      setActiveTab("discover");
    }
  }, [viewState.type, activeTab]);
  const handleAddMarketplaceEscape = import_react13.useCallback(() => {
    setActiveTab("marketplaces");
    setViewState({ type: "manage-marketplaces" });
    setInputValue("");
    setError(null);
  }, []);
  useKeybinding("confirm:no", handleAddMarketplaceEscape, {
    context: "Settings",
    isActive: viewState.type === "add-marketplace"
  });
  import_react13.useEffect(() => {
    if (result) {
      onComplete(result);
    }
  }, [result, onComplete]);
  import_react13.useEffect(() => {
    if (viewState.type === "help") {
      onComplete();
    }
  }, [viewState.type, onComplete]);
  if (viewState.type === "help") {
    return /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      children: [
        /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
          bold: true,
          children: "Plugin Command Usage:"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
          children: " "
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
          dimColor: true,
          children: "Installation:"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
          children: " /plugin install - Browse and install plugins"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
          children: [
            " ",
            "/plugin install <marketplace> - Install from specific marketplace"
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
          children: " /plugin install <plugin> - Install specific plugin"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
          children: [
            " ",
            "/plugin install <plugin>@<market> - Install plugin from marketplace"
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
          children: " "
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
          dimColor: true,
          children: "Management:"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
          children: " /plugin manage - Manage installed plugins"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
          children: " /plugin enable <plugin> - Enable a plugin"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
          children: " /plugin disable <plugin> - Disable a plugin"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
          children: " /plugin uninstall <plugin> - Uninstall a plugin"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
          children: " "
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
          dimColor: true,
          children: "Marketplaces:"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
          children: " /plugin marketplace - Marketplace management menu"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
          children: " /plugin marketplace add - Add a marketplace"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
          children: [
            " ",
            "/plugin marketplace add <path/url> - Add marketplace directly"
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
          children: " /plugin marketplace update - Update marketplaces"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
          children: [
            " ",
            "/plugin marketplace update <name> - Update specific marketplace"
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
          children: " /plugin marketplace remove - Remove a marketplace"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
          children: [
            " ",
            "/plugin marketplace remove <name> - Remove specific marketplace"
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
          children: " /plugin marketplace list - List all marketplaces"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
          children: " "
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
          dimColor: true,
          children: "Validation:"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
          children: [
            " ",
            "/plugin validate <path> - Validate a manifest file or directory"
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
          children: " "
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
          dimColor: true,
          children: "Other:"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
          children: " /plugin - Main plugin menu"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
          children: " /plugin help - Show this help"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
          children: " /plugins - Alias for /plugin"
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  if (viewState.type === "validate") {
    return /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ValidatePlugin, {
      onComplete,
      path: viewState.path
    }, undefined, false, undefined, this);
  }
  if (viewState.type === "marketplace-menu") {
    setViewState({ type: "menu" });
    return null;
  }
  if (viewState.type === "marketplace-list") {
    return /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(MarketplaceList, {
      onComplete
    }, undefined, false, undefined, this);
  }
  if (viewState.type === "add-marketplace") {
    return /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(AddMarketplace, {
      inputValue,
      setInputValue,
      cursorOffset,
      setCursorOffset,
      error,
      setError,
      result,
      setResult,
      setViewState,
      onAddComplete: markPluginsChanged,
      cliMode
    }, undefined, false, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(Pane, {
    color: "suggestion",
    children: /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(Tabs, {
      title: "Plugins",
      selectedTab: activeTab,
      onTabChange: handleTabChange,
      color: "suggestion",
      disableNavigation: childSearchActive,
      banner: showMcpRedirectMessage && activeTab === "installed" ? /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(McpRedirectBanner, {}, undefined, false, undefined, this) : undefined,
      children: [
        /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(Tab, {
          id: "discover",
          title: "Discover",
          children: viewState.type === "browse-marketplace" ? /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(BrowseMarketplace, {
            error,
            setError,
            result,
            setResult,
            setViewState,
            onInstallComplete: markPluginsChanged,
            targetMarketplace: viewState.targetMarketplace,
            targetPlugin: viewState.targetPlugin
          }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(DiscoverPlugins, {
            error,
            setError,
            result,
            setResult,
            setViewState,
            onInstallComplete: markPluginsChanged,
            onSearchModeChange: setChildSearchActive,
            targetPlugin: viewState.type === "discover-plugins" ? viewState.targetPlugin : undefined
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(Tab, {
          id: "installed",
          title: "Installed",
          children: /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ManagePlugins, {
            setViewState,
            setResult,
            onManageComplete: markPluginsChanged,
            onSearchModeChange: setChildSearchActive,
            targetPlugin: viewState.type === "manage-plugins" ? viewState.targetPlugin : undefined,
            targetMarketplace: viewState.type === "manage-plugins" ? viewState.targetMarketplace : undefined,
            action: viewState.type === "manage-plugins" ? viewState.action : undefined
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(Tab, {
          id: "marketplaces",
          title: "Marketplaces",
          children: /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ManageMarketplaces, {
            setViewState,
            error,
            setError,
            setResult,
            exitState,
            onManageComplete: markPluginsChanged,
            targetMarketplace: viewState.type === "manage-marketplaces" ? viewState.targetMarketplace : undefined,
            action: viewState.type === "manage-marketplaces" ? viewState.action : undefined
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(Tab, {
          id: "errors",
          title: errorsTabTitle,
          children: /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ErrorsTabContent, {
            setViewState,
            setActiveTab,
            markPluginsChanged
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
var import_react13, jsx_dev_runtime17, TRANSIENT_ERROR_TYPES;
var init_PluginSettings = __esm(() => {
  init_figures();
  init_ConfigurableShortcutHint();
  init_src();
  init_useExitOnCtrlCDWithKeybindings();
  init_src();
  init_useKeybinding();
  init_AppState();
  init_errors();
  init_cacheUtils();
  init_marketplaceHelpers();
  init_marketplaceManager();
  init_pluginStartupCheck();
  init_settings();
  init_AddMarketplace();
  init_BrowseMarketplace();
  init_DiscoverPlugins();
  init_ManageMarketplaces();
  init_ManagePlugins();
  init_PluginErrors();
  init_parseArgs();
  init_ValidatePlugin();
  import_react13 = __toESM(require_react(), 1);
  jsx_dev_runtime17 = __toESM(require_jsx_dev_runtime(), 1);
  TRANSIENT_ERROR_TYPES = new Set([
    "git-auth-failed",
    "git-timeout",
    "network-error"
  ]);
});

export { MCPRemoteServerMenu, init_MCPRemoteServerMenu, MCPStdioServerMenu, init_MCPStdioServerMenu, MCPToolDetailView, init_MCPToolDetailView, MCPToolListView, init_MCPToolListView, PluginSettings, init_PluginSettings };
