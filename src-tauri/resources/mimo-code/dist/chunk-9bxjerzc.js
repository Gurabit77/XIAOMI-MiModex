// @bun
import {
  ClaudeMdExternalIncludesDialog,
  init_ClaudeMdExternalIncludesDialog
} from "./chunk-se1p6n0a.js";
import {
  ModelPicker,
  init_ModelPicker,
  init_extraUsage,
  isBilledAsExtraUsage
} from "./chunk-w84rgy3d.js";
import {
  ThemePicker,
  init_ThemePicker
} from "./chunk-06cggxcy.js";
import {
  OverageCreditUpsell,
  init_OverageCreditUpsell,
  isEligibleForOverageCreditGrant
} from "./chunk-2stg2ast.js";
import {
  init_SearchBox
} from "./chunk-a8d3h0xq.js";
import {
  init_useSearchInput,
  useSearchInput
} from "./chunk-p6jb8wcb.js";
import {
  init_modalContext,
  useIsInsideModal,
  useModalOrTerminalSize
} from "./chunk-3rk983b5.js";
import {
  fetchUtilization,
  init_usage
} from "./chunk-8mvxw70s.js";
import {
  ConfigurableShortcutHint,
  DEFAULT_OUTPUT_STYLE_NAME,
  OUTPUT_STYLE_CONFIG,
  Select,
  TextInput,
  buildAPIProviderProperties,
  buildAccountProperties,
  buildIDEProperties,
  buildInstallationDiagnostics,
  buildInstallationHealthDiagnostics,
  buildMcpProperties,
  buildMemoryDiagnostics,
  buildSandboxProperties,
  buildSettingSourcesProperties,
  exports_BriefTool,
  extraUsage,
  formatCost,
  getAllOutputStyles,
  getAutoModeEnabledState,
  getCurrentSessionTitle,
  getExternalClaudeMdIncludes,
  getHardcodedTeammateModelFallback,
  getMemoryFiles,
  getModelDisplayLabel,
  hasAccessToIDEExtensionDiffFeature,
  hasAutoModeOptInAnySource,
  hasExternalClaudeMdIncludes,
  init_AppState,
  init_BriefTool,
  init_ConfigurableShortcutHint,
  init_CustomSelect,
  init_TextInput,
  init_claudemd,
  init_cost_tracker,
  init_extra_usage,
  init_fullscreen,
  init_ide,
  init_outputStyles,
  init_permissionSetup,
  init_select,
  init_sessionStorage,
  init_status,
  init_teammateModel,
  init_useTerminalSize,
  isFullscreenEnvEnabled,
  isSupportedTerminal,
  transitionPlanAutoMode,
  useAppState,
  useAppStateStore,
  useSetAppState
} from "./chunk-ktw919wt.js";
import {
  clearCliTeammateModeOverride,
  getCliTeammateModeOverride,
  init_teammateModeSnapshot
} from "./chunk-qwtafr2b.js";
import {
  init_bridgeEnabled,
  isBridgeEnabled
} from "./chunk-ybaawhyf.js";
import {
  init_useExitOnCtrlCDWithKeybindings,
  useExitOnCtrlCDWithKeybindings
} from "./chunk-pfhyp451.js";
import {
  init_useKeybinding
} from "./chunk-dsnwry8r.js";
import {
  exports_poorMode,
  init_poorMode
} from "./chunk-tas8sqfx.js";
import {
  FAST_MODE_MODEL_DISPLAY,
  clearFastModeCooldown,
  formatAutoUpdaterDisabledReason,
  getAutoUpdaterDisabledReason,
  getCurrentProjectConfig,
  getFastModeModel,
  getFeatureValue_CACHED_MAY_BE_STALE,
  getGlobalConfig,
  getInitialSettings,
  getRemoteControlAtStartup,
  getSettingsForSource,
  getSubscriptionType,
  init_PermissionMode,
  init_agentSwarmsEnabled,
  init_auth,
  init_authPortable,
  init_config1 as init_config,
  init_fastMode,
  init_growthbook,
  init_model,
  init_settings1 as init_settings,
  isAgentSwarmsEnabled,
  isExternalPermissionMode,
  isFastModeAvailable,
  isFastModeEnabled,
  isFastModeSupportedByModel,
  isOpus1mMergeEnabled,
  modelDisplayString,
  normalizeApiKeyForConfig,
  permissionModeFromString,
  permissionModeShortTitle,
  saveGlobalConfig,
  toExternalPermissionMode,
  updateSettingsForSource
} from "./chunk-1ghcng4e.js";
import {
  PERMISSION_MODES
} from "./chunk-pe9b769s.js";
import {
  getPlatform,
  init_platform
} from "./chunk-0rbpfkda.js";
import {
  formatResetText,
  init_format
} from "./chunk-x5hyyhqf.js";
import {
  Byline,
  Dialog,
  KeyboardShortcutHint,
  Pane,
  ProgressBar,
  SearchBox,
  Tab,
  Tabs,
  ThemedBox_default,
  ThemedText,
  init_source,
  init_src,
  source_default,
  useKeybinding,
  useKeybindings,
  useTabHeaderFocus,
  useTerminalFocus,
  useTerminalSize,
  useTheme,
  useThemeSetting
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
  getCwd,
  init_cwd
} from "./chunk-dxvkxgnf.js";
import {
  init_log,
  logError
} from "./chunk-w5ahy59y.js";
import {
  figures_default,
  init_figures
} from "./chunk-qajrkk97.js";
import {
  init_slowOperations,
  jsonStringify
} from "./chunk-rpbc3b7k.js";
import {
  getSessionId,
  getUserMsgOptIn,
  init_state,
  setUserMsgOptIn
} from "./chunk-j5xzpm59.js";
import {
  init_envUtils,
  isEnvTruthy,
  isRunningOnHomespace
} from "./chunk-hxhwzgnn.js";
import {
  __esm,
  __toCommonJS,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/components/Settings/Status.tsx
function buildPrimarySection() {
  const sessionId = getSessionId();
  const customTitle = getCurrentSessionTitle(sessionId);
  const nameValue = customTitle ?? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
    dimColor: true,
    children: "/rename to add a name"
  }, undefined, false, undefined, this);
  return [
    { label: "Version", value: "1.0.0" },
    { label: "Session name", value: nameValue },
    { label: "Session ID", value: sessionId },
    { label: "cwd", value: getCwd() },
    ...buildAccountProperties(),
    ...buildAPIProviderProperties()
  ];
}
function buildSecondarySection({
  mainLoopModel,
  mcp,
  theme,
  context
}) {
  const modelLabel = getModelDisplayLabel(mainLoopModel);
  return [
    { label: "Model", value: modelLabel },
    ...buildIDEProperties(mcp.clients, context.options.ideInstallationStatus, theme),
    ...buildMcpProperties(mcp.clients, theme),
    ...buildSandboxProperties(),
    ...buildSettingSourcesProperties()
  ];
}
async function buildDiagnostics() {
  return [
    ...await buildInstallationDiagnostics(),
    ...await buildInstallationHealthDiagnostics(),
    ...await buildMemoryDiagnostics()
  ];
}
function PropertyValue({
  value
}) {
  if (Array.isArray(value)) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexWrap: "wrap",
      columnGap: 1,
      flexShrink: 99,
      children: value.map((item, i) => {
        return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: [
            item,
            i < value.length - 1 ? "," : ""
          ]
        }, i, true, undefined, this);
      })
    }, undefined, false, undefined, this);
  }
  if (typeof value === "string") {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
      children: value
    }, undefined, false, undefined, this);
  }
  return value;
}
function Status({
  context,
  diagnosticsPromise
}) {
  const mainLoopModel = useAppState((s) => s.mainLoopModel);
  const mcp = useAppState((s) => s.mcp);
  const [theme] = useTheme();
  const sections = React.useMemo(() => [
    buildPrimarySection(),
    buildSecondarySection({ mainLoopModel, mcp, theme, context })
  ], [mainLoopModel, mcp, theme, context]);
  const grow = useIsInsideModal() ? 1 : undefined;
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    flexGrow: grow,
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        gap: 1,
        flexGrow: grow,
        children: [
          sections.map((properties, i) => properties.length > 0 && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            children: properties.map(({ label, value }, j) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
              flexDirection: "row",
              gap: 1,
              flexShrink: 0,
              children: [
                label !== undefined && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                  bold: true,
                  children: [
                    label,
                    ":"
                  ]
                }, undefined, true, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(PropertyValue, {
                  value
                }, undefined, false, undefined, this)
              ]
            }, j, true, undefined, this))
          }, i, false, undefined, this)),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(import_react.Suspense, {
            fallback: null,
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Diagnostics, {
              promise: diagnosticsPromise
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        dimColor: true,
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ConfigurableShortcutHint, {
          action: "confirm:no",
          context: "Settings",
          fallback: "Esc",
          description: "cancel"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function Diagnostics({
  promise
}) {
  const diagnostics = import_react.use(promise);
  if (diagnostics.length === 0)
    return null;
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    paddingBottom: 1,
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        bold: true,
        children: "System Diagnostics"
      }, undefined, false, undefined, this),
      diagnostics.map((diagnostic, i) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "row",
        gap: 1,
        paddingX: 1,
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            color: "error",
            children: figures_default.warning
          }, undefined, false, undefined, this),
          typeof diagnostic === "string" ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            wrap: "wrap",
            children: diagnostic
          }, undefined, false, undefined, this) : diagnostic
        ]
      }, i, true, undefined, this))
    ]
  }, undefined, true, undefined, this);
}
var React, import_react, jsx_dev_runtime;
var init_Status = __esm(() => {
  init_figures();
  init_state();
  init_modalContext();
  init_src();
  init_AppState();
  init_cwd();
  init_sessionStorage();
  init_status();
  init_ConfigurableShortcutHint();
  React = __toESM(require_react(), 1);
  import_react = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/ChannelDowngradeDialog.tsx
function ChannelDowngradeDialog({
  currentVersion,
  onChoice
}) {
  function handleSelect(value) {
    onChoice(value);
  }
  function handleCancel() {
    onChoice("cancel");
  }
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Dialog, {
    title: "Switch to Stable Channel",
    onCancel: handleCancel,
    color: "permission",
    hideBorder: true,
    hideInputGuide: true,
    children: [
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
        children: [
          "The stable channel may have an older version than what you're currently running (",
          currentVersion,
          ")."
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
        dimColor: true,
        children: "How would you like to handle this?"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Select, {
        options: [
          {
            label: "Allow possible downgrade to stable version",
            value: "downgrade"
          },
          {
            label: `Stay on current version (${currentVersion}) until stable catches up`,
            value: "stay"
          }
        ],
        onChange: handleSelect
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var jsx_dev_runtime2;
var init_ChannelDowngradeDialog = __esm(() => {
  init_src();
  init_CustomSelect();
  init_src();
  jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/OutputStylePicker.tsx
function mapConfigsToOptions(styles) {
  return Object.entries(styles).map(([style, config]) => ({
    label: config?.name ?? DEFAULT_OUTPUT_STYLE_LABEL,
    value: style,
    description: config?.description ?? DEFAULT_OUTPUT_STYLE_DESCRIPTION
  }));
}
function OutputStylePicker({
  initialStyle,
  onComplete,
  onCancel,
  isStandaloneCommand
}) {
  const [styleOptions, setStyleOptions] = import_react2.useState([]);
  const [isLoading, setIsLoading] = import_react2.useState(true);
  import_react2.useEffect(() => {
    getAllOutputStyles(getCwd()).then((allStyles) => {
      const options = mapConfigsToOptions(allStyles);
      setStyleOptions(options);
      setIsLoading(false);
    }).catch(() => {
      const builtInOptions = mapConfigsToOptions(OUTPUT_STYLE_CONFIG);
      setStyleOptions(builtInOptions);
      setIsLoading(false);
    });
  }, []);
  const handleStyleSelect = import_react2.useCallback((style) => {
    const outputStyle = style;
    onComplete(outputStyle);
  }, [onComplete]);
  return /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Dialog, {
    title: "Preferred output style",
    onCancel,
    hideInputGuide: !isStandaloneCommand,
    hideBorder: !isStandaloneCommand,
    children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      gap: 1,
      children: [
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            dimColor: true,
            children: "This changes how MiMo Code communicates with you"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        isLoading ? /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
          dimColor: true,
          children: "Loading output styles\u2026"
        }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Select, {
          options: styleOptions,
          onChange: handleStyleSelect,
          visibleOptionCount: 10,
          defaultValue: initialStyle
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
var import_react2, jsx_dev_runtime3, DEFAULT_OUTPUT_STYLE_LABEL = "Default", DEFAULT_OUTPUT_STYLE_DESCRIPTION = "MiMo completes coding tasks efficiently and provides concise responses";
var init_OutputStylePicker = __esm(() => {
  init_outputStyles();
  init_src();
  init_cwd();
  init_select();
  import_react2 = __toESM(require_react(), 1);
  jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/LanguagePicker.tsx
function LanguagePicker({
  initialLanguage,
  onComplete,
  onCancel
}) {
  const [language, setLanguage] = import_react3.useState(initialLanguage);
  const [cursorOffset, setCursorOffset] = import_react3.useState((initialLanguage ?? "").length);
  useKeybinding("confirm:no", onCancel, { context: "Settings" });
  function handleSubmit() {
    const trimmed = language?.trim();
    onComplete(trimmed || undefined);
  }
  return /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    gap: 1,
    children: [
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
        children: "Enter your preferred response and voice language:"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedBox_default, {
        flexDirection: "row",
        gap: 1,
        children: [
          /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
            children: figures_default.pointer
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(TextInput, {
            value: language ?? "",
            onChange: setLanguage,
            onSubmit: handleSubmit,
            focus: true,
            showCursor: true,
            placeholder: `e.g., Japanese, \u65E5\u672C\u8A9E, Espa\xF1ol${figures_default.ellipsis}`,
            columns: 60,
            cursorOffset,
            onChangeCursorOffset: setCursorOffset
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
        dimColor: true,
        children: "Leave empty for default (English)"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var import_react3, jsx_dev_runtime4;
var init_LanguagePicker = __esm(() => {
  init_figures();
  init_src();
  init_useKeybinding();
  init_TextInput();
  import_react3 = __toESM(require_react(), 1);
  jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/Settings/Config.tsx
function Config({
  onClose,
  context,
  setTabsHidden,
  onIsSearchModeChange,
  contentHeight
}) {
  const { headerFocused, focusHeader } = useTabHeaderFocus();
  const insideModal = useIsInsideModal();
  const [, setTheme] = useTheme();
  const themeSetting = useThemeSetting();
  const [globalConfig, setGlobalConfig] = import_react4.useState(getGlobalConfig());
  const initialConfig = React3.useRef(getGlobalConfig());
  const [settingsData, setSettingsData] = import_react4.useState(getInitialSettings());
  const initialSettingsData = React3.useRef(getInitialSettings());
  const [currentOutputStyle, setCurrentOutputStyle] = import_react4.useState(settingsData?.outputStyle || DEFAULT_OUTPUT_STYLE_NAME);
  const initialOutputStyle = React3.useRef(currentOutputStyle);
  const [currentLanguage, setCurrentLanguage] = import_react4.useState(settingsData?.language);
  const initialLanguage = React3.useRef(currentLanguage);
  const [selectedIndex, setSelectedIndex] = import_react4.useState(0);
  const [scrollOffset, setScrollOffset] = import_react4.useState(0);
  const [isSearchMode, setIsSearchMode] = import_react4.useState(false);
  const isTerminalFocused = useTerminalFocus();
  const { rows } = useTerminalSize();
  const paneCap = contentHeight ?? Math.min(Math.floor(rows * 0.8), 30);
  const maxVisible = Math.max(5, paneCap - 10);
  const mainLoopModel = useAppState((s) => s.mainLoopModel);
  const verbose = useAppState((s) => s.verbose);
  const thinkingEnabled = useAppState((s) => s.thinkingEnabled);
  const isFastMode = useAppState((s) => isFastModeEnabled() ? s.fastMode : false);
  const promptSuggestionEnabled = useAppState((s) => s.promptSuggestionEnabled);
  const currentDefaultPermissionMode = permissionModeFromString(settingsData?.permissions?.defaultMode ?? "default");
  const showAutoInDefaultModePicker = hasAutoModeOptInAnySource() || getAutoModeEnabledState() === "enabled";
  const showDefaultViewPicker = (init_BriefTool(), __toCommonJS(exports_BriefTool)).isBriefEntitled();
  const setAppState = useSetAppState();
  const [changes, setChanges] = import_react4.useState({});
  const initialThinkingEnabled = React3.useRef(thinkingEnabled);
  const [initialLocalSettings] = import_react4.useState(() => getSettingsForSource("localSettings"));
  const [initialUserSettings] = import_react4.useState(() => getSettingsForSource("userSettings"));
  const initialThemeSetting = React3.useRef(themeSetting);
  const store = useAppStateStore();
  const [initialAppState] = import_react4.useState(() => {
    const s = store.getState();
    return {
      mainLoopModel: s.mainLoopModel,
      mainLoopModelForSession: s.mainLoopModelForSession,
      verbose: s.verbose,
      thinkingEnabled: s.thinkingEnabled,
      fastMode: s.fastMode,
      promptSuggestionEnabled: s.promptSuggestionEnabled,
      isBriefOnly: s.isBriefOnly,
      replBridgeEnabled: s.replBridgeEnabled,
      replBridgeOutboundOnly: s.replBridgeOutboundOnly,
      settings: s.settings
    };
  });
  const [initialUserMsgOptIn] = import_react4.useState(() => getUserMsgOptIn());
  const isDirty = React3.useRef(false);
  const [showThinkingWarning, setShowThinkingWarning] = import_react4.useState(false);
  const [showSubmenu, setShowSubmenu] = import_react4.useState(null);
  const {
    query: searchQuery,
    setQuery: setSearchQuery,
    cursorOffset: searchCursorOffset
  } = useSearchInput({
    isActive: isSearchMode && showSubmenu === null && !headerFocused,
    onExit: () => setIsSearchMode(false),
    onExitUp: focusHeader,
    passthroughCtrlKeys: ["c", "d"]
  });
  const ownsEsc = isSearchMode && !headerFocused;
  React3.useEffect(() => {
    onIsSearchModeChange?.(ownsEsc);
  }, [ownsEsc, onIsSearchModeChange]);
  const isConnectedToIde = hasAccessToIDEExtensionDiffFeature(context.options.mcpClients);
  const isFileCheckpointingAvailable = !isEnvTruthy(process.env.CLAUDE_CODE_DISABLE_FILE_CHECKPOINTING);
  const memoryFiles = React3.use(getMemoryFiles(true));
  const shouldShowExternalIncludesToggle = hasExternalClaudeMdIncludes(memoryFiles);
  const autoUpdaterDisabledReason = getAutoUpdaterDisabledReason();
  function onChangeMainModelConfig(value) {
    const previousModel = mainLoopModel;
    logEvent("tengu_config_model_changed", {
      from_model: previousModel,
      to_model: value
    });
    setAppState((prev) => ({
      ...prev,
      mainLoopModel: value,
      mainLoopModelForSession: null
    }));
    setChanges((prev) => {
      const valStr = modelDisplayString(value) + (isBilledAsExtraUsage(value, false, isOpus1mMergeEnabled()) ? " \xB7 Billed as extra usage" : "");
      if ("model" in prev) {
        const { model, ...rest } = prev;
        return { ...rest, model: valStr };
      }
      return { ...prev, model: valStr };
    });
  }
  function onChangeVerbose(value) {
    saveGlobalConfig((current) => ({ ...current, verbose: value }));
    setGlobalConfig({ ...getGlobalConfig(), verbose: value });
    setAppState((prev) => ({
      ...prev,
      verbose: value
    }));
    setChanges((prev) => {
      if ("verbose" in prev) {
        const { verbose: verbose2, ...rest } = prev;
        return rest;
      }
      return { ...prev, verbose: value };
    });
  }
  const settingsItems = [
    {
      id: "autoCompactEnabled",
      label: "Auto-compact",
      value: globalConfig.autoCompactEnabled,
      type: "boolean",
      onChange(autoCompactEnabled) {
        saveGlobalConfig((current) => ({ ...current, autoCompactEnabled }));
        setGlobalConfig({ ...getGlobalConfig(), autoCompactEnabled });
        logEvent("tengu_auto_compact_setting_changed", {
          enabled: autoCompactEnabled
        });
      }
    },
    {
      id: "spinnerTipsEnabled",
      label: "Show tips",
      value: settingsData?.spinnerTipsEnabled ?? true,
      type: "boolean",
      onChange(spinnerTipsEnabled) {
        updateSettingsForSource("localSettings", {
          spinnerTipsEnabled
        });
        setSettingsData((prev) => ({
          ...prev,
          spinnerTipsEnabled
        }));
        logEvent("tengu_tips_setting_changed", {
          enabled: spinnerTipsEnabled
        });
      }
    },
    {
      id: "prefersReducedMotion",
      label: "Reduce motion",
      value: settingsData?.prefersReducedMotion ?? false,
      type: "boolean",
      onChange(prefersReducedMotion) {
        updateSettingsForSource("localSettings", {
          prefersReducedMotion
        });
        setSettingsData((prev) => ({
          ...prev,
          prefersReducedMotion
        }));
        setAppState((prev) => ({
          ...prev,
          settings: { ...prev.settings, prefersReducedMotion }
        }));
        logEvent("tengu_reduce_motion_setting_changed", {
          enabled: prefersReducedMotion
        });
      }
    },
    {
      id: "thinkingEnabled",
      label: "Thinking mode",
      value: thinkingEnabled ?? true,
      type: "boolean",
      onChange(enabled) {
        setAppState((prev) => ({ ...prev, thinkingEnabled: enabled }));
        updateSettingsForSource("userSettings", {
          alwaysThinkingEnabled: enabled ? undefined : false
        });
        logEvent("tengu_thinking_toggled", { enabled });
      }
    },
    ...isFastModeEnabled() && isFastModeAvailable() ? [
      {
        id: "fastMode",
        label: `Fast mode (${FAST_MODE_MODEL_DISPLAY} only)`,
        value: !!isFastMode,
        type: "boolean",
        onChange(enabled) {
          clearFastModeCooldown();
          updateSettingsForSource("userSettings", {
            fastMode: enabled ? true : undefined
          });
          if (enabled) {
            setAppState((prev) => ({
              ...prev,
              mainLoopModel: getFastModeModel(),
              mainLoopModelForSession: null,
              fastMode: true
            }));
            setChanges((prev) => ({
              ...prev,
              model: getFastModeModel(),
              "Fast mode": "ON"
            }));
          } else {
            setAppState((prev) => ({
              ...prev,
              fastMode: false
            }));
            setChanges((prev) => ({ ...prev, "Fast mode": "OFF" }));
          }
        }
      }
    ] : [],
    ...getFeatureValue_CACHED_MAY_BE_STALE("tengu_chomp_inflection", false) ? [
      {
        id: "promptSuggestionEnabled",
        label: "Prompt suggestions",
        value: promptSuggestionEnabled,
        type: "boolean",
        onChange(enabled) {
          setAppState((prev) => ({
            ...prev,
            promptSuggestionEnabled: enabled
          }));
          updateSettingsForSource("userSettings", {
            promptSuggestionEnabled: enabled ? undefined : false
          });
        }
      }
    ] : [],
    ...[
      {
        id: "poorMode",
        label: "Poor mode (save tokens)",
        value: (() => {
          const PoorMode = (init_poorMode(), __toCommonJS(exports_poorMode));
          return PoorMode.isPoorModeActive();
        })(),
        type: "boolean",
        onChange(enabled) {
          const PoorMode = (init_poorMode(), __toCommonJS(exports_poorMode));
          PoorMode.setPoorMode(enabled);
          setAppState((prev) => ({
            ...prev,
            promptSuggestionEnabled: !enabled
          }));
        }
      }
    ],
    ...process.env.USER_TYPE === "ant" ? [
      {
        id: "speculationEnabled",
        label: "Speculative execution",
        value: globalConfig.speculationEnabled ?? true,
        type: "boolean",
        onChange(enabled) {
          saveGlobalConfig((current) => {
            if (current.speculationEnabled === enabled)
              return current;
            return {
              ...current,
              speculationEnabled: enabled
            };
          });
          setGlobalConfig({
            ...getGlobalConfig(),
            speculationEnabled: enabled
          });
          logEvent("tengu_speculation_setting_changed", {
            enabled
          });
        }
      }
    ] : [],
    ...isFileCheckpointingAvailable ? [
      {
        id: "fileCheckpointingEnabled",
        label: "Rewind code (checkpoints)",
        value: globalConfig.fileCheckpointingEnabled,
        type: "boolean",
        onChange(enabled) {
          saveGlobalConfig((current) => ({
            ...current,
            fileCheckpointingEnabled: enabled
          }));
          setGlobalConfig({
            ...getGlobalConfig(),
            fileCheckpointingEnabled: enabled
          });
          logEvent("tengu_file_history_snapshots_setting_changed", {
            enabled
          });
        }
      }
    ] : [],
    {
      id: "verbose",
      label: "Verbose output",
      value: verbose,
      type: "boolean",
      onChange: onChangeVerbose
    },
    {
      id: "terminalProgressBarEnabled",
      label: "Terminal progress bar",
      value: globalConfig.terminalProgressBarEnabled,
      type: "boolean",
      onChange(terminalProgressBarEnabled) {
        saveGlobalConfig((current) => ({
          ...current,
          terminalProgressBarEnabled
        }));
        setGlobalConfig({ ...getGlobalConfig(), terminalProgressBarEnabled });
        logEvent("tengu_terminal_progress_bar_setting_changed", {
          enabled: terminalProgressBarEnabled
        });
      }
    },
    ...getFeatureValue_CACHED_MAY_BE_STALE("tengu_terminal_sidebar", false) ? [
      {
        id: "showStatusInTerminalTab",
        label: "Show status in terminal tab",
        value: globalConfig.showStatusInTerminalTab ?? false,
        type: "boolean",
        onChange(showStatusInTerminalTab) {
          saveGlobalConfig((current) => ({
            ...current,
            showStatusInTerminalTab
          }));
          setGlobalConfig({
            ...getGlobalConfig(),
            showStatusInTerminalTab
          });
          logEvent("tengu_terminal_tab_status_setting_changed", {
            enabled: showStatusInTerminalTab
          });
        }
      }
    ] : [],
    {
      id: "showTurnDuration",
      label: "Show turn duration",
      value: globalConfig.showTurnDuration,
      type: "boolean",
      onChange(showTurnDuration) {
        saveGlobalConfig((current) => ({ ...current, showTurnDuration }));
        setGlobalConfig({ ...getGlobalConfig(), showTurnDuration });
        logEvent("tengu_show_turn_duration_setting_changed", {
          enabled: showTurnDuration
        });
      }
    },
    {
      id: "defaultPermissionMode",
      label: "Default permission mode",
      value: currentDefaultPermissionMode,
      options: (() => {
        const priorityOrder = ["default", "plan"];
        return [...priorityOrder, ...PERMISSION_MODES.filter((m) => !priorityOrder.includes(m))];
      })(),
      type: "enum",
      onChange(mode) {
        const parsedMode = permissionModeFromString(mode);
        const validatedMode = parsedMode === "auto" ? parsedMode : isExternalPermissionMode(parsedMode) ? toExternalPermissionMode(parsedMode) : parsedMode;
        const result = updateSettingsForSource("userSettings", {
          permissions: {
            ...settingsData?.permissions,
            defaultMode: validatedMode
          }
        });
        if (result.error) {
          logError(result.error);
          return;
        }
        setSettingsData((prev) => ({
          ...prev,
          permissions: {
            ...prev?.permissions,
            defaultMode: validatedMode
          }
        }));
        setChanges((prev) => ({ ...prev, defaultPermissionMode: mode }));
        logEvent("tengu_config_changed", {
          setting: "defaultPermissionMode",
          value: mode
        });
      }
    },
    ...showAutoInDefaultModePicker ? [
      {
        id: "useAutoModeDuringPlan",
        label: "Use auto mode during plan",
        value: settingsData?.useAutoModeDuringPlan ?? true,
        type: "boolean",
        onChange(useAutoModeDuringPlan) {
          updateSettingsForSource("userSettings", {
            useAutoModeDuringPlan
          });
          setSettingsData((prev) => ({
            ...prev,
            useAutoModeDuringPlan
          }));
          setAppState((prev) => {
            const next = transitionPlanAutoMode(prev.toolPermissionContext);
            if (next === prev.toolPermissionContext)
              return prev;
            return { ...prev, toolPermissionContext: next };
          });
          setChanges((prev) => ({
            ...prev,
            "Use auto mode during plan": useAutoModeDuringPlan
          }));
        }
      }
    ] : [],
    {
      id: "respectGitignore",
      label: "Respect .gitignore in file picker",
      value: globalConfig.respectGitignore,
      type: "boolean",
      onChange(respectGitignore) {
        saveGlobalConfig((current) => ({ ...current, respectGitignore }));
        setGlobalConfig({ ...getGlobalConfig(), respectGitignore });
        logEvent("tengu_respect_gitignore_setting_changed", {
          enabled: respectGitignore
        });
      }
    },
    {
      id: "copyFullResponse",
      label: "Always copy full response (skip /copy picker)",
      value: globalConfig.copyFullResponse,
      type: "boolean",
      onChange(copyFullResponse) {
        saveGlobalConfig((current) => ({ ...current, copyFullResponse }));
        setGlobalConfig({ ...getGlobalConfig(), copyFullResponse });
        logEvent("tengu_config_changed", {
          setting: "copyFullResponse",
          value: String(copyFullResponse)
        });
      }
    },
    ...isFullscreenEnvEnabled() ? [
      {
        id: "copyOnSelect",
        label: "Copy on select",
        value: globalConfig.copyOnSelect ?? true,
        type: "boolean",
        onChange(copyOnSelect) {
          saveGlobalConfig((current) => ({ ...current, copyOnSelect }));
          setGlobalConfig({ ...getGlobalConfig(), copyOnSelect });
          logEvent("tengu_config_changed", {
            setting: "copyOnSelect",
            value: String(copyOnSelect)
          });
        }
      }
    ] : [],
    autoUpdaterDisabledReason ? {
      id: "autoUpdatesChannel",
      label: "Auto-update channel",
      value: "disabled",
      type: "managedEnum",
      onChange() {}
    } : {
      id: "autoUpdatesChannel",
      label: "Auto-update channel",
      value: settingsData?.autoUpdatesChannel ?? "latest",
      type: "managedEnum",
      onChange() {}
    },
    {
      id: "theme",
      label: "Theme",
      value: themeSetting,
      type: "managedEnum",
      onChange: setTheme
    },
    {
      id: "notifChannel",
      label: "Local notifications",
      value: globalConfig.preferredNotifChannel,
      options: ["auto", "iterm2", "terminal_bell", "iterm2_with_bell", "kitty", "ghostty", "notifications_disabled"],
      type: "enum",
      onChange(notifChannel) {
        saveGlobalConfig((current) => ({
          ...current,
          preferredNotifChannel: notifChannel
        }));
        setGlobalConfig({
          ...getGlobalConfig(),
          preferredNotifChannel: notifChannel
        });
      }
    },
    ...[
      {
        id: "taskCompleteNotifEnabled",
        label: "Push when idle",
        value: globalConfig.taskCompleteNotifEnabled ?? false,
        type: "boolean",
        onChange(taskCompleteNotifEnabled) {
          saveGlobalConfig((current) => ({
            ...current,
            taskCompleteNotifEnabled
          }));
          setGlobalConfig({
            ...getGlobalConfig(),
            taskCompleteNotifEnabled
          });
        }
      },
      {
        id: "inputNeededNotifEnabled",
        label: "Push when input needed",
        value: globalConfig.inputNeededNotifEnabled ?? false,
        type: "boolean",
        onChange(inputNeededNotifEnabled) {
          saveGlobalConfig((current) => ({
            ...current,
            inputNeededNotifEnabled
          }));
          setGlobalConfig({
            ...getGlobalConfig(),
            inputNeededNotifEnabled
          });
        }
      },
      {
        id: "agentPushNotifEnabled",
        label: "Push when MiMo decides",
        value: globalConfig.agentPushNotifEnabled ?? false,
        type: "boolean",
        onChange(agentPushNotifEnabled) {
          saveGlobalConfig((current) => ({
            ...current,
            agentPushNotifEnabled
          }));
          setGlobalConfig({
            ...getGlobalConfig(),
            agentPushNotifEnabled
          });
        }
      }
    ],
    {
      id: "outputStyle",
      label: "Output style",
      value: currentOutputStyle,
      type: "managedEnum",
      onChange: () => {}
    },
    ...showDefaultViewPicker ? [
      {
        id: "defaultView",
        label: "What you see by default",
        value: settingsData?.defaultView === undefined ? "default" : String(settingsData.defaultView),
        options: ["transcript", "chat", "default"],
        type: "enum",
        onChange(selected) {
          const defaultView = selected === "default" ? undefined : selected;
          updateSettingsForSource("localSettings", { defaultView });
          setSettingsData((prev) => ({ ...prev, defaultView }));
          const nextBrief = defaultView === "chat";
          setAppState((prev) => {
            if (prev.isBriefOnly === nextBrief)
              return prev;
            return { ...prev, isBriefOnly: nextBrief };
          });
          setUserMsgOptIn(nextBrief);
          setChanges((prev) => ({ ...prev, "Default view": selected }));
          logEvent("tengu_default_view_setting_changed", {
            value: defaultView ?? "unset"
          });
        }
      }
    ] : [],
    {
      id: "language",
      label: "Language",
      value: currentLanguage ?? "Default (English)",
      type: "managedEnum",
      onChange: () => {}
    },
    {
      id: "editorMode",
      label: "Editor mode",
      value: globalConfig.editorMode === "emacs" ? "normal" : globalConfig.editorMode || "normal",
      options: ["normal", "vim"],
      type: "enum",
      onChange(value) {
        saveGlobalConfig((current) => ({
          ...current,
          editorMode: value
        }));
        setGlobalConfig({
          ...getGlobalConfig(),
          editorMode: value
        });
        logEvent("tengu_editor_mode_changed", {
          mode: value,
          source: "config_panel"
        });
      }
    },
    {
      id: "prStatusFooterEnabled",
      label: "Show PR status footer",
      value: globalConfig.prStatusFooterEnabled ?? true,
      type: "boolean",
      onChange(enabled) {
        saveGlobalConfig((current) => {
          if (current.prStatusFooterEnabled === enabled)
            return current;
          return {
            ...current,
            prStatusFooterEnabled: enabled
          };
        });
        setGlobalConfig({
          ...getGlobalConfig(),
          prStatusFooterEnabled: enabled
        });
        logEvent("tengu_pr_status_footer_setting_changed", {
          enabled
        });
      }
    },
    {
      id: "model",
      label: "Model",
      value: mainLoopModel === null ? "Default (recommended)" : mainLoopModel,
      type: "managedEnum",
      onChange: onChangeMainModelConfig
    },
    ...isConnectedToIde ? [
      {
        id: "diffTool",
        label: "Diff tool",
        value: globalConfig.diffTool ?? "auto",
        options: ["terminal", "auto"],
        type: "enum",
        onChange(diffTool) {
          saveGlobalConfig((current) => ({
            ...current,
            diffTool
          }));
          setGlobalConfig({
            ...getGlobalConfig(),
            diffTool
          });
          logEvent("tengu_diff_tool_changed", {
            tool: diffTool,
            source: "config_panel"
          });
        }
      }
    ] : [],
    ...!isSupportedTerminal() ? [
      {
        id: "autoConnectIde",
        label: "Auto-connect to IDE (external terminal)",
        value: globalConfig.autoConnectIde ?? false,
        type: "boolean",
        onChange(autoConnectIde) {
          saveGlobalConfig((current) => ({ ...current, autoConnectIde }));
          setGlobalConfig({ ...getGlobalConfig(), autoConnectIde });
          logEvent("tengu_auto_connect_ide_changed", {
            enabled: autoConnectIde,
            source: "config_panel"
          });
        }
      }
    ] : [],
    ...isSupportedTerminal() ? [
      {
        id: "autoInstallIdeExtension",
        label: "Auto-install IDE extension",
        value: globalConfig.autoInstallIdeExtension ?? true,
        type: "boolean",
        onChange(autoInstallIdeExtension) {
          saveGlobalConfig((current) => ({
            ...current,
            autoInstallIdeExtension
          }));
          setGlobalConfig({ ...getGlobalConfig(), autoInstallIdeExtension });
          logEvent("tengu_auto_install_ide_extension_changed", {
            enabled: autoInstallIdeExtension,
            source: "config_panel"
          });
        }
      }
    ] : [],
    {
      id: "claudeInChromeDefaultEnabled",
      label: "MiMo in Chrome enabled by default",
      value: globalConfig.claudeInChromeDefaultEnabled ?? true,
      type: "boolean",
      onChange(enabled) {
        saveGlobalConfig((current) => ({
          ...current,
          claudeInChromeDefaultEnabled: enabled
        }));
        setGlobalConfig({
          ...getGlobalConfig(),
          claudeInChromeDefaultEnabled: enabled
        });
        logEvent("tengu_claude_in_chrome_setting_changed", {
          enabled
        });
      }
    },
    ...isAgentSwarmsEnabled() ? (() => {
      const cliOverride = getCliTeammateModeOverride();
      const label = cliOverride ? `Teammate mode [overridden: ${cliOverride}]` : "Teammate mode";
      const isWindows = getPlatform() === "windows";
      const teammateModeOptions = isWindows ? ["auto", "tmux", "windows-terminal", "in-process"] : ["auto", "tmux", "in-process"];
      return [
        {
          id: "teammateMode",
          label,
          value: globalConfig.teammateMode ?? "auto",
          options: teammateModeOptions,
          type: "enum",
          onChange(mode) {
            if (mode !== "auto" && mode !== "tmux" && mode !== "windows-terminal" && mode !== "in-process") {
              return;
            }
            if (mode === "windows-terminal" && !isWindows) {
              return;
            }
            clearCliTeammateModeOverride(mode);
            saveGlobalConfig((current) => ({
              ...current,
              teammateMode: mode
            }));
            setGlobalConfig({
              ...getGlobalConfig(),
              teammateMode: mode
            });
            logEvent("tengu_teammate_mode_changed", {
              mode
            });
          }
        },
        {
          id: "teammateDefaultModel",
          label: "Default teammate model",
          value: teammateModelDisplayString(globalConfig.teammateDefaultModel),
          type: "managedEnum",
          onChange() {}
        }
      ];
    })() : [],
    ...isBridgeEnabled() ? [
      {
        id: "remoteControlAtStartup",
        label: "Enable Remote Control for all sessions",
        value: globalConfig.remoteControlAtStartup === undefined ? "default" : String(globalConfig.remoteControlAtStartup),
        options: ["true", "false", "default"],
        type: "enum",
        onChange(selected) {
          if (selected === "default") {
            saveGlobalConfig((current) => {
              if (current.remoteControlAtStartup === undefined)
                return current;
              const next = { ...current };
              delete next.remoteControlAtStartup;
              return next;
            });
            setGlobalConfig({
              ...getGlobalConfig(),
              remoteControlAtStartup: undefined
            });
          } else {
            const enabled = selected === "true";
            saveGlobalConfig((current) => {
              if (current.remoteControlAtStartup === enabled)
                return current;
              return { ...current, remoteControlAtStartup: enabled };
            });
            setGlobalConfig({
              ...getGlobalConfig(),
              remoteControlAtStartup: enabled
            });
          }
          const resolved = getRemoteControlAtStartup();
          setAppState((prev) => {
            if (prev.replBridgeEnabled === resolved && !prev.replBridgeOutboundOnly)
              return prev;
            return {
              ...prev,
              replBridgeEnabled: resolved,
              replBridgeOutboundOnly: false
            };
          });
        }
      }
    ] : [],
    ...shouldShowExternalIncludesToggle ? [
      {
        id: "showExternalIncludesDialog",
        label: "External CLAUDE.md includes",
        value: (() => {
          const projectConfig = getCurrentProjectConfig();
          if (projectConfig.hasClaudeMdExternalIncludesApproved) {
            return "true";
          } else {
            return "false";
          }
        })(),
        type: "managedEnum",
        onChange() {}
      }
    ] : [],
    ...process.env.ANTHROPIC_API_KEY && !isRunningOnHomespace() ? [
      {
        id: "apiKey",
        label: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
          children: [
            "Use custom API key: ",
            /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
              bold: true,
              children: normalizeApiKeyForConfig(process.env.ANTHROPIC_API_KEY)
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        searchText: "Use custom API key",
        value: Boolean(process.env.ANTHROPIC_API_KEY && globalConfig.customApiKeyResponses?.approved?.includes(normalizeApiKeyForConfig(process.env.ANTHROPIC_API_KEY))),
        type: "boolean",
        onChange(useCustomKey) {
          saveGlobalConfig((current) => {
            const updated = { ...current };
            if (!updated.customApiKeyResponses) {
              updated.customApiKeyResponses = {
                approved: [],
                rejected: []
              };
            }
            if (!updated.customApiKeyResponses.approved) {
              updated.customApiKeyResponses = {
                ...updated.customApiKeyResponses,
                approved: []
              };
            }
            if (!updated.customApiKeyResponses.rejected) {
              updated.customApiKeyResponses = {
                ...updated.customApiKeyResponses,
                rejected: []
              };
            }
            if (process.env.ANTHROPIC_API_KEY) {
              const truncatedKey = normalizeApiKeyForConfig(process.env.ANTHROPIC_API_KEY);
              if (useCustomKey) {
                updated.customApiKeyResponses = {
                  ...updated.customApiKeyResponses,
                  approved: [
                    ...(updated.customApiKeyResponses.approved ?? []).filter((k) => k !== truncatedKey),
                    truncatedKey
                  ],
                  rejected: (updated.customApiKeyResponses.rejected ?? []).filter((k) => k !== truncatedKey)
                };
              } else {
                updated.customApiKeyResponses = {
                  ...updated.customApiKeyResponses,
                  approved: (updated.customApiKeyResponses.approved ?? []).filter((k) => k !== truncatedKey),
                  rejected: [
                    ...(updated.customApiKeyResponses.rejected ?? []).filter((k) => k !== truncatedKey),
                    truncatedKey
                  ]
                };
              }
            }
            return updated;
          });
          setGlobalConfig(getGlobalConfig());
        }
      }
    ] : []
  ];
  const filteredSettingsItems = React3.useMemo(() => {
    if (!searchQuery)
      return settingsItems;
    const lowerQuery = searchQuery.toLowerCase();
    return settingsItems.filter((setting) => {
      if (setting.id.toLowerCase().includes(lowerQuery))
        return true;
      const searchableText = "searchText" in setting ? setting.searchText : setting.label;
      return searchableText.toLowerCase().includes(lowerQuery);
    });
  }, [settingsItems, searchQuery]);
  React3.useEffect(() => {
    if (selectedIndex >= filteredSettingsItems.length) {
      const newIndex = Math.max(0, filteredSettingsItems.length - 1);
      setSelectedIndex(newIndex);
      setScrollOffset(Math.max(0, newIndex - maxVisible + 1));
      return;
    }
    setScrollOffset((prev) => {
      if (selectedIndex < prev)
        return selectedIndex;
      if (selectedIndex >= prev + maxVisible)
        return selectedIndex - maxVisible + 1;
      return prev;
    });
  }, [filteredSettingsItems.length, selectedIndex, maxVisible]);
  const adjustScrollOffset = import_react4.useCallback((newIndex) => {
    setScrollOffset((prev) => {
      if (newIndex < prev)
        return newIndex;
      if (newIndex >= prev + maxVisible)
        return newIndex - maxVisible + 1;
      return prev;
    });
  }, [maxVisible]);
  const handleSaveAndClose = import_react4.useCallback(() => {
    if (showSubmenu !== null) {
      return;
    }
    const formattedChanges = Object.entries(changes).map(([key, value]) => {
      logEvent("tengu_config_changed", {
        key,
        value
      });
      return `Set ${key} to ${source_default.bold(value)}`;
    });
    const effectiveApiKey = isRunningOnHomespace() ? undefined : process.env.ANTHROPIC_API_KEY;
    const initialUsingCustomKey = Boolean(effectiveApiKey && initialConfig.current.customApiKeyResponses?.approved?.includes(normalizeApiKeyForConfig(effectiveApiKey)));
    const currentUsingCustomKey = Boolean(effectiveApiKey && globalConfig.customApiKeyResponses?.approved?.includes(normalizeApiKeyForConfig(effectiveApiKey)));
    if (initialUsingCustomKey !== currentUsingCustomKey) {
      formattedChanges.push(`${currentUsingCustomKey ? "Enabled" : "Disabled"} custom API key`);
      logEvent("tengu_config_changed", {
        key: "env.ANTHROPIC_API_KEY",
        value: currentUsingCustomKey
      });
    }
    if (globalConfig.theme !== initialConfig.current.theme) {
      formattedChanges.push(`Set theme to ${source_default.bold(globalConfig.theme)}`);
    }
    if (globalConfig.preferredNotifChannel !== initialConfig.current.preferredNotifChannel) {
      formattedChanges.push(`Set notifications to ${source_default.bold(globalConfig.preferredNotifChannel)}`);
    }
    if (currentOutputStyle !== initialOutputStyle.current) {
      formattedChanges.push(`Set output style to ${source_default.bold(currentOutputStyle)}`);
    }
    if (currentLanguage !== initialLanguage.current) {
      formattedChanges.push(`Set response language to ${source_default.bold(currentLanguage ?? "Default (English)")}`);
    }
    if (globalConfig.editorMode !== initialConfig.current.editorMode) {
      formattedChanges.push(`Set editor mode to ${source_default.bold(globalConfig.editorMode || "emacs")}`);
    }
    if (globalConfig.diffTool !== initialConfig.current.diffTool) {
      formattedChanges.push(`Set diff tool to ${source_default.bold(globalConfig.diffTool)}`);
    }
    if (globalConfig.autoConnectIde !== initialConfig.current.autoConnectIde) {
      formattedChanges.push(`${globalConfig.autoConnectIde ? "Enabled" : "Disabled"} auto-connect to IDE`);
    }
    if (globalConfig.autoInstallIdeExtension !== initialConfig.current.autoInstallIdeExtension) {
      formattedChanges.push(`${globalConfig.autoInstallIdeExtension ? "Enabled" : "Disabled"} auto-install IDE extension`);
    }
    if (globalConfig.autoCompactEnabled !== initialConfig.current.autoCompactEnabled) {
      formattedChanges.push(`${globalConfig.autoCompactEnabled ? "Enabled" : "Disabled"} auto-compact`);
    }
    if (globalConfig.respectGitignore !== initialConfig.current.respectGitignore) {
      formattedChanges.push(`${globalConfig.respectGitignore ? "Enabled" : "Disabled"} respect .gitignore in file picker`);
    }
    if (globalConfig.copyFullResponse !== initialConfig.current.copyFullResponse) {
      formattedChanges.push(`${globalConfig.copyFullResponse ? "Enabled" : "Disabled"} always copy full response`);
    }
    if (globalConfig.copyOnSelect !== initialConfig.current.copyOnSelect) {
      formattedChanges.push(`${globalConfig.copyOnSelect ? "Enabled" : "Disabled"} copy on select`);
    }
    if (globalConfig.terminalProgressBarEnabled !== initialConfig.current.terminalProgressBarEnabled) {
      formattedChanges.push(`${globalConfig.terminalProgressBarEnabled ? "Enabled" : "Disabled"} terminal progress bar`);
    }
    if (globalConfig.showStatusInTerminalTab !== initialConfig.current.showStatusInTerminalTab) {
      formattedChanges.push(`${globalConfig.showStatusInTerminalTab ? "Enabled" : "Disabled"} terminal tab status`);
    }
    if (globalConfig.showTurnDuration !== initialConfig.current.showTurnDuration) {
      formattedChanges.push(`${globalConfig.showTurnDuration ? "Enabled" : "Disabled"} turn duration`);
    }
    if (globalConfig.remoteControlAtStartup !== initialConfig.current.remoteControlAtStartup) {
      const remoteLabel = globalConfig.remoteControlAtStartup === undefined ? "Reset Remote Control to default" : `${globalConfig.remoteControlAtStartup ? "Enabled" : "Disabled"} Remote Control for all sessions`;
      formattedChanges.push(remoteLabel);
    }
    if (settingsData?.autoUpdatesChannel !== initialSettingsData.current?.autoUpdatesChannel) {
      formattedChanges.push(`Set auto-update channel to ${source_default.bold(settingsData?.autoUpdatesChannel ?? "latest")}`);
    }
    if (formattedChanges.length > 0) {
      onClose(formattedChanges.join(`
`));
    } else {
      onClose("Config dialog dismissed", { display: "system" });
    }
  }, [
    showSubmenu,
    changes,
    globalConfig,
    mainLoopModel,
    currentOutputStyle,
    currentLanguage,
    settingsData?.autoUpdatesChannel,
    isFastModeEnabled() ? settingsData?.fastMode : undefined,
    onClose
  ]);
  const revertChanges = import_react4.useCallback(() => {
    if (themeSetting !== initialThemeSetting.current) {
      setTheme(initialThemeSetting.current);
    }
    saveGlobalConfig(() => initialConfig.current);
    const il = initialLocalSettings;
    updateSettingsForSource("localSettings", {
      spinnerTipsEnabled: il?.spinnerTipsEnabled,
      prefersReducedMotion: il?.prefersReducedMotion,
      defaultView: il?.defaultView,
      outputStyle: il?.outputStyle
    });
    const iu = initialUserSettings;
    updateSettingsForSource("userSettings", {
      alwaysThinkingEnabled: iu?.alwaysThinkingEnabled,
      fastMode: iu?.fastMode,
      promptSuggestionEnabled: iu?.promptSuggestionEnabled,
      autoUpdatesChannel: iu?.autoUpdatesChannel,
      minimumVersion: iu?.minimumVersion,
      language: iu?.language,
      ...{
        useAutoModeDuringPlan: iu?.useAutoModeDuringPlan
      },
      syntaxHighlightingDisabled: iu?.syntaxHighlightingDisabled,
      permissions: iu?.permissions === undefined ? undefined : { ...iu.permissions, defaultMode: iu.permissions.defaultMode }
    });
    const ia = initialAppState;
    setAppState((prev) => ({
      ...prev,
      mainLoopModel: ia.mainLoopModel,
      mainLoopModelForSession: ia.mainLoopModelForSession,
      verbose: ia.verbose,
      thinkingEnabled: ia.thinkingEnabled,
      fastMode: ia.fastMode,
      promptSuggestionEnabled: ia.promptSuggestionEnabled,
      isBriefOnly: ia.isBriefOnly,
      replBridgeEnabled: ia.replBridgeEnabled,
      replBridgeOutboundOnly: ia.replBridgeOutboundOnly,
      settings: ia.settings,
      toolPermissionContext: transitionPlanAutoMode(prev.toolPermissionContext)
    }));
    if (getUserMsgOptIn() !== initialUserMsgOptIn) {
      setUserMsgOptIn(initialUserMsgOptIn);
    }
  }, [
    themeSetting,
    setTheme,
    initialLocalSettings,
    initialUserSettings,
    initialAppState,
    initialUserMsgOptIn,
    setAppState
  ]);
  const handleEscape = import_react4.useCallback(() => {
    if (showSubmenu !== null) {
      return;
    }
    if (isDirty.current) {
      revertChanges();
    }
    onClose("Config dialog dismissed", { display: "system" });
  }, [showSubmenu, revertChanges, onClose]);
  useKeybinding("confirm:no", handleEscape, {
    context: "Settings",
    isActive: showSubmenu === null && !isSearchMode && !headerFocused
  });
  useKeybinding("settings:close", handleSaveAndClose, {
    context: "Settings",
    isActive: showSubmenu === null && !isSearchMode && !headerFocused
  });
  const toggleSetting = import_react4.useCallback(() => {
    const setting = filteredSettingsItems[selectedIndex];
    if (!setting || !setting.onChange) {
      return;
    }
    if (setting.type === "boolean") {
      isDirty.current = true;
      setting.onChange(!setting.value);
      if (setting.id === "thinkingEnabled") {
        const newValue = !setting.value;
        const backToInitial = newValue === initialThinkingEnabled.current;
        if (backToInitial) {
          setShowThinkingWarning(false);
        } else if (context.messages.some((m) => m.type === "assistant")) {
          setShowThinkingWarning(true);
        }
      }
      return;
    }
    if (setting.id === "theme" || setting.id === "model" || setting.id === "teammateDefaultModel" || setting.id === "showExternalIncludesDialog" || setting.id === "outputStyle" || setting.id === "language") {
      switch (setting.id) {
        case "theme":
          setShowSubmenu("Theme");
          setTabsHidden(true);
          return;
        case "model":
          setShowSubmenu("Model");
          setTabsHidden(true);
          return;
        case "teammateDefaultModel":
          setShowSubmenu("TeammateModel");
          setTabsHidden(true);
          return;
        case "showExternalIncludesDialog":
          setShowSubmenu("ExternalIncludes");
          setTabsHidden(true);
          return;
        case "outputStyle":
          setShowSubmenu("OutputStyle");
          setTabsHidden(true);
          return;
        case "language":
          setShowSubmenu("Language");
          setTabsHidden(true);
          return;
      }
    }
    if (setting.id === "autoUpdatesChannel") {
      if (autoUpdaterDisabledReason) {
        setShowSubmenu("EnableAutoUpdates");
        setTabsHidden(true);
        return;
      }
      const currentChannel = settingsData?.autoUpdatesChannel ?? "latest";
      if (currentChannel === "latest") {
        setShowSubmenu("ChannelDowngrade");
        setTabsHidden(true);
      } else {
        isDirty.current = true;
        updateSettingsForSource("userSettings", {
          autoUpdatesChannel: "latest",
          minimumVersion: undefined
        });
        setSettingsData((prev) => ({
          ...prev,
          autoUpdatesChannel: "latest",
          minimumVersion: undefined
        }));
        logEvent("tengu_autoupdate_channel_changed", {
          channel: "latest"
        });
      }
      return;
    }
    if (setting.type === "enum") {
      isDirty.current = true;
      const currentIndex = setting.options.indexOf(setting.value);
      const nextIndex = (currentIndex + 1) % setting.options.length;
      setting.onChange(setting.options[nextIndex]);
      return;
    }
  }, [
    autoUpdaterDisabledReason,
    filteredSettingsItems,
    selectedIndex,
    settingsData?.autoUpdatesChannel,
    setTabsHidden
  ]);
  const moveSelection = (delta) => {
    setShowThinkingWarning(false);
    const newIndex = Math.max(0, Math.min(filteredSettingsItems.length - 1, selectedIndex + delta));
    setSelectedIndex(newIndex);
    adjustScrollOffset(newIndex);
  };
  useKeybindings({
    "select:previous": () => {
      if (selectedIndex === 0) {
        setShowThinkingWarning(false);
        setIsSearchMode(true);
        setScrollOffset(0);
      } else {
        moveSelection(-1);
      }
    },
    "select:next": () => moveSelection(1),
    "scroll:lineUp": () => moveSelection(-1),
    "scroll:lineDown": () => moveSelection(1),
    "select:accept": toggleSetting,
    "select:previousValue": () => toggleSetting(),
    "select:nextValue": () => toggleSetting(),
    "settings:search": () => {
      setIsSearchMode(true);
      setSearchQuery("");
    }
  }, {
    context: "Settings",
    isActive: showSubmenu === null && !isSearchMode && !headerFocused
  });
  const handleKeyDown = import_react4.useCallback((e) => {
    if (showSubmenu !== null)
      return;
    if (headerFocused)
      return;
    if (isSearchMode) {
      if (e.key === "escape") {
        e.preventDefault();
        if (searchQuery.length > 0) {
          setSearchQuery("");
        } else {
          setIsSearchMode(false);
        }
        return;
      }
      if (e.key === "return" || e.key === "down" || e.key === "wheeldown") {
        e.preventDefault();
        setIsSearchMode(false);
        setSelectedIndex(0);
        setScrollOffset(0);
      }
      return;
    }
    if (e.key === "left" || e.key === "right" || e.key === "tab") {
      e.preventDefault();
      toggleSetting();
      return;
    }
    if (e.ctrl || e.meta)
      return;
    if (e.key === "j" || e.key === "k" || e.key === "/")
      return;
    if (e.key.length === 1 && e.key !== " ") {
      e.preventDefault();
      setIsSearchMode(true);
      setSearchQuery(e.key);
    }
  }, [showSubmenu, headerFocused, isSearchMode, searchQuery, setSearchQuery, toggleSetting]);
  return /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    width: "100%",
    tabIndex: 0,
    autoFocus: true,
    onKeyDown: handleKeyDown,
    children: showSubmenu === "Theme" ? /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(jsx_dev_runtime5.Fragment, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemePicker, {
          onThemeSelect: (setting) => {
            isDirty.current = true;
            setTheme(setting);
            setShowSubmenu(null);
            setTabsHidden(false);
          },
          onCancel: () => {
            setShowSubmenu(null);
            setTabsHidden(false);
          },
          hideEscToCancel: true,
          skipExitHandling: true
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedBox_default, {
          children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
            dimColor: true,
            italic: true,
            children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Byline, {
              children: [
                /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(KeyboardShortcutHint, {
                  shortcut: "Enter",
                  action: "select"
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ConfigurableShortcutHint, {
                  action: "confirm:no",
                  context: "Confirmation",
                  fallback: "Esc",
                  description: "cancel"
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this) : showSubmenu === "Model" ? /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(jsx_dev_runtime5.Fragment, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ModelPicker, {
          initial: mainLoopModel,
          onSelect: (model, _effort) => {
            isDirty.current = true;
            onChangeMainModelConfig(model);
            setShowSubmenu(null);
            setTabsHidden(false);
          },
          onCancel: () => {
            setShowSubmenu(null);
            setTabsHidden(false);
          },
          showFastModeNotice: isFastModeEnabled() ? isFastMode && isFastModeSupportedByModel(mainLoopModel) && isFastModeAvailable() : false
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
          dimColor: true,
          children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Byline, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(KeyboardShortcutHint, {
                shortcut: "Enter",
                action: "confirm"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ConfigurableShortcutHint, {
                action: "confirm:no",
                context: "Confirmation",
                fallback: "Esc",
                description: "cancel"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this) : showSubmenu === "TeammateModel" ? /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(jsx_dev_runtime5.Fragment, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ModelPicker, {
          initial: globalConfig.teammateDefaultModel ?? null,
          skipSettingsWrite: true,
          headerText: "Default model for newly spawned teammates. The leader can override via the tool call's model parameter.",
          onSelect: (model, _effort) => {
            setShowSubmenu(null);
            setTabsHidden(false);
            if (globalConfig.teammateDefaultModel === undefined && model === null) {
              return;
            }
            isDirty.current = true;
            saveGlobalConfig((current) => current.teammateDefaultModel === model ? current : { ...current, teammateDefaultModel: model });
            setGlobalConfig({
              ...getGlobalConfig(),
              teammateDefaultModel: model
            });
            setChanges((prev) => ({
              ...prev,
              teammateDefaultModel: teammateModelDisplayString(model)
            }));
            logEvent("tengu_teammate_default_model_changed", {
              model
            });
          },
          onCancel: () => {
            setShowSubmenu(null);
            setTabsHidden(false);
          }
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
          dimColor: true,
          children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Byline, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(KeyboardShortcutHint, {
                shortcut: "Enter",
                action: "confirm"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ConfigurableShortcutHint, {
                action: "confirm:no",
                context: "Confirmation",
                fallback: "Esc",
                description: "cancel"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this) : showSubmenu === "ExternalIncludes" ? /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(jsx_dev_runtime5.Fragment, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ClaudeMdExternalIncludesDialog, {
          onDone: () => {
            setShowSubmenu(null);
            setTabsHidden(false);
          },
          externalIncludes: getExternalClaudeMdIncludes(memoryFiles)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
          dimColor: true,
          children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Byline, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(KeyboardShortcutHint, {
                shortcut: "Enter",
                action: "confirm"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ConfigurableShortcutHint, {
                action: "confirm:no",
                context: "Confirmation",
                fallback: "Esc",
                description: "disable external includes"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this) : showSubmenu === "OutputStyle" ? /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(jsx_dev_runtime5.Fragment, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(OutputStylePicker, {
          initialStyle: currentOutputStyle,
          onComplete: (style) => {
            isDirty.current = true;
            setCurrentOutputStyle(style ?? DEFAULT_OUTPUT_STYLE_NAME);
            setShowSubmenu(null);
            setTabsHidden(false);
            updateSettingsForSource("localSettings", {
              outputStyle: style
            });
            logEvent("tengu_output_style_changed", {
              style: style ?? DEFAULT_OUTPUT_STYLE_NAME,
              source: "config_panel",
              settings_source: "localSettings"
            });
          },
          onCancel: () => {
            setShowSubmenu(null);
            setTabsHidden(false);
          }
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
          dimColor: true,
          children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Byline, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(KeyboardShortcutHint, {
                shortcut: "Enter",
                action: "confirm"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ConfigurableShortcutHint, {
                action: "confirm:no",
                context: "Confirmation",
                fallback: "Esc",
                description: "cancel"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this) : showSubmenu === "Language" ? /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(jsx_dev_runtime5.Fragment, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(LanguagePicker, {
          initialLanguage: currentLanguage,
          onComplete: (language) => {
            isDirty.current = true;
            setCurrentLanguage(language);
            setShowSubmenu(null);
            setTabsHidden(false);
            updateSettingsForSource("userSettings", {
              language
            });
            logEvent("tengu_language_changed", {
              language: language ?? "default",
              source: "config_panel"
            });
          },
          onCancel: () => {
            setShowSubmenu(null);
            setTabsHidden(false);
          }
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
          dimColor: true,
          children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Byline, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(KeyboardShortcutHint, {
                shortcut: "Enter",
                action: "confirm"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ConfigurableShortcutHint, {
                action: "confirm:no",
                context: "Settings",
                fallback: "Esc",
                description: "cancel"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this) : showSubmenu === "EnableAutoUpdates" ? /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Dialog, {
      title: "Enable Auto-Updates",
      onCancel: () => {
        setShowSubmenu(null);
        setTabsHidden(false);
      },
      hideBorder: true,
      hideInputGuide: true,
      children: autoUpdaterDisabledReason?.type !== "config" ? /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(jsx_dev_runtime5.Fragment, {
        children: [
          /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
            children: autoUpdaterDisabledReason?.type === "env" ? "Auto-updates are controlled by an environment variable and cannot be changed here." : "Auto-updates are disabled in development builds."
          }, undefined, false, undefined, this),
          autoUpdaterDisabledReason?.type === "env" && /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
            dimColor: true,
            children: [
              "Unset ",
              autoUpdaterDisabledReason.envVar,
              " to re-enable auto-updates."
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Select, {
        options: [
          {
            label: "Enable with latest channel",
            value: "latest"
          },
          {
            label: "Enable with stable channel",
            value: "stable"
          }
        ],
        onChange: (channel) => {
          isDirty.current = true;
          setShowSubmenu(null);
          setTabsHidden(false);
          saveGlobalConfig((current) => ({
            ...current,
            autoUpdates: true
          }));
          setGlobalConfig({ ...getGlobalConfig(), autoUpdates: true });
          updateSettingsForSource("userSettings", {
            autoUpdatesChannel: channel,
            minimumVersion: undefined
          });
          setSettingsData((prev) => ({
            ...prev,
            autoUpdatesChannel: channel,
            minimumVersion: undefined
          }));
          logEvent("tengu_autoupdate_enabled", {
            channel
          });
        }
      }, undefined, false, undefined, this)
    }, undefined, false, undefined, this) : showSubmenu === "ChannelDowngrade" ? /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ChannelDowngradeDialog, {
      currentVersion: "1.0.0",
      onChoice: (choice) => {
        setShowSubmenu(null);
        setTabsHidden(false);
        if (choice === "cancel") {
          return;
        }
        isDirty.current = true;
        const newSettings = {
          autoUpdatesChannel: "stable"
        };
        if (choice === "stay") {
          newSettings.minimumVersion = "1.0.0";
        }
        updateSettingsForSource("userSettings", newSettings);
        setSettingsData((prev) => ({
          ...prev,
          ...newSettings
        }));
        logEvent("tengu_autoupdate_channel_changed", {
          channel: "stable",
          minimum_version_set: choice === "stay"
        });
      }
    }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      gap: 1,
      marginY: insideModal ? undefined : 1,
      children: [
        /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(SearchBox, {
          query: searchQuery,
          isFocused: isSearchMode && !headerFocused,
          isTerminalFocused,
          cursorOffset: searchCursorOffset,
          placeholder: "Search settings\u2026"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedBox_default, {
          flexDirection: "column",
          children: filteredSettingsItems.length === 0 ? /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
            dimColor: true,
            italic: true,
            children: [
              'No settings match "',
              searchQuery,
              '"'
            ]
          }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(jsx_dev_runtime5.Fragment, {
            children: [
              scrollOffset > 0 && /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
                dimColor: true,
                children: [
                  figures_default.arrowUp,
                  " ",
                  scrollOffset,
                  " more above"
                ]
              }, undefined, true, undefined, this),
              filteredSettingsItems.slice(scrollOffset, scrollOffset + maxVisible).map((setting, i) => {
                const actualIndex = scrollOffset + i;
                const isSelected = actualIndex === selectedIndex && !headerFocused && !isSearchMode;
                return /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(React3.Fragment, {
                  children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedBox_default, {
                    width: "100%",
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedBox_default, {
                        width: 44,
                        children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
                          color: isSelected ? "suggestion" : undefined,
                          children: [
                            isSelected ? figures_default.pointer : " ",
                            " ",
                            setting.label
                          ]
                        }, undefined, true, undefined, this)
                      }, undefined, false, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedBox_default, {
                        flexGrow: 1,
                        children: setting.type === "boolean" ? /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(jsx_dev_runtime5.Fragment, {
                          children: [
                            /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
                              color: isSelected ? "suggestion" : undefined,
                              children: setting.value.toString()
                            }, undefined, false, undefined, this),
                            showThinkingWarning && setting.id === "thinkingEnabled" && /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
                              color: "warning",
                              children: [
                                " ",
                                "Changing thinking mode mid-conversation will increase latency and may reduce quality."
                              ]
                            }, undefined, true, undefined, this)
                          ]
                        }, undefined, true, undefined, this) : setting.id === "theme" ? /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
                          color: isSelected ? "suggestion" : undefined,
                          children: THEME_LABELS[setting.value.toString()] ?? setting.value.toString()
                        }, undefined, false, undefined, this) : setting.id === "notifChannel" ? /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
                          color: isSelected ? "suggestion" : undefined,
                          children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(NotifChannelLabel, {
                            value: setting.value.toString()
                          }, undefined, false, undefined, this)
                        }, undefined, false, undefined, this) : setting.id === "defaultPermissionMode" ? /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
                          color: isSelected ? "suggestion" : undefined,
                          children: permissionModeShortTitle(setting.value)
                        }, undefined, false, undefined, this) : setting.id === "autoUpdatesChannel" && autoUpdaterDisabledReason ? /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedBox_default, {
                          flexDirection: "column",
                          children: [
                            /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
                              color: isSelected ? "suggestion" : undefined,
                              children: "disabled"
                            }, undefined, false, undefined, this),
                            /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
                              dimColor: true,
                              children: [
                                "(",
                                formatAutoUpdaterDisabledReason(autoUpdaterDisabledReason),
                                ")"
                              ]
                            }, undefined, true, undefined, this)
                          ]
                        }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
                          color: isSelected ? "suggestion" : undefined,
                          children: setting.value.toString()
                        }, undefined, false, undefined, this)
                      }, undefined, false, undefined, this)
                    ]
                  }, undefined, true, undefined, this)
                }, setting.id, false, undefined, this);
              }),
              scrollOffset + maxVisible < filteredSettingsItems.length && /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
                dimColor: true,
                children: [
                  figures_default.arrowDown,
                  " ",
                  filteredSettingsItems.length - scrollOffset - maxVisible,
                  " more below"
                ]
              }, undefined, true, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this),
        headerFocused ? /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
          dimColor: true,
          children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Byline, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(KeyboardShortcutHint, {
                shortcut: "\u2190/\u2192 tab",
                action: "switch"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(KeyboardShortcutHint, {
                shortcut: "\u2193",
                action: "return"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ConfigurableShortcutHint, {
                action: "confirm:no",
                context: "Settings",
                fallback: "Esc",
                description: "close"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this) : isSearchMode ? /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
          dimColor: true,
          children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Byline, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
                children: "Type to filter"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(KeyboardShortcutHint, {
                shortcut: "Enter/\u2193",
                action: "select"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(KeyboardShortcutHint, {
                shortcut: "\u2191",
                action: "tabs"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ConfigurableShortcutHint, {
                action: "confirm:no",
                context: "Settings",
                fallback: "Esc",
                description: "clear"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
          dimColor: true,
          children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Byline, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ConfigurableShortcutHint, {
                action: "select:accept",
                context: "Settings",
                fallback: "Space",
                description: "change"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ConfigurableShortcutHint, {
                action: "settings:close",
                context: "Settings",
                fallback: "Enter",
                description: "save"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ConfigurableShortcutHint, {
                action: "settings:search",
                context: "Settings",
                fallback: "/",
                description: "search"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ConfigurableShortcutHint, {
                action: "confirm:no",
                context: "Settings",
                fallback: "Esc",
                description: "cancel"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
function teammateModelDisplayString(value) {
  if (value === undefined) {
    return modelDisplayString(getHardcodedTeammateModelFallback());
  }
  if (value === null)
    return "Default (leader's model)";
  return modelDisplayString(value);
}
function NotifChannelLabel({ value }) {
  switch (value) {
    case "auto":
      return "Auto";
    case "iterm2":
      return /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
        children: [
          "iTerm2 ",
          /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
            dimColor: true,
            children: "(OSC 9)"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this);
    case "terminal_bell":
      return /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
        children: [
          "Terminal Bell ",
          /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
            dimColor: true,
            children: "(\\a)"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this);
    case "kitty":
      return /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
        children: [
          "Kitty ",
          /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
            dimColor: true,
            children: "(OSC 99)"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this);
    case "ghostty":
      return /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
        children: [
          "Ghostty ",
          /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
            dimColor: true,
            children: "(OSC 777)"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this);
    case "iterm2_with_bell":
      return "iTerm2 w/ Bell";
    case "notifications_disabled":
      return "Disabled";
    default:
      return value;
  }
}
var React3, import_react4, jsx_dev_runtime5, THEME_LABELS;
var init_Config = __esm(() => {
  init_src();
  init_useKeybinding();
  init_figures();
  init_config();
  init_authPortable();
  init_config();
  init_source();
  init_PermissionMode();
  init_permissionSetup();
  init_log();
  init_analytics();
  init_bridgeEnabled();
  init_ThemePicker();
  init_AppState();
  init_ModelPicker();
  init_model();
  init_extraUsage();
  init_ClaudeMdExternalIncludesDialog();
  init_ChannelDowngradeDialog();
  init_src();
  init_CustomSelect();
  init_OutputStylePicker();
  init_LanguagePicker();
  init_claudemd();
  init_src();
  init_ConfigurableShortcutHint();
  init_modalContext();
  init_SearchBox();
  init_ide();
  init_settings();
  init_state();
  init_outputStyles();
  init_envUtils();
  init_growthbook();
  init_agentSwarmsEnabled();
  init_teammateModeSnapshot();
  init_teammateModel();
  init_useSearchInput();
  init_useTerminalSize();
  init_fastMode();
  init_fullscreen();
  init_platform();
  React3 = __toESM(require_react(), 1);
  import_react4 = __toESM(require_react(), 1);
  jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
  THEME_LABELS = {
    auto: "Auto (match terminal)",
    dark: "Dark mode",
    light: "Light mode",
    "dark-daltonized": "Dark mode (colorblind-friendly)",
    "light-daltonized": "Light mode (colorblind-friendly)",
    "dark-ansi": "Dark mode (ANSI colors only)",
    "light-ansi": "Light mode (ANSI colors only)"
  };
});

// src/components/Settings/Usage.tsx
function LimitBar({
  title,
  limit,
  maxWidth,
  showTimeInReset = true,
  extraSubtext
}) {
  const { utilization, resets_at } = limit;
  if (utilization === null) {
    return null;
  }
  const usedText = `${Math.floor(utilization)}% used`;
  let subtext;
  if (resets_at) {
    subtext = `Resets ${formatResetText(resets_at, true, showTimeInReset)}`;
  }
  if (extraSubtext) {
    if (subtext) {
      subtext = `${extraSubtext} \xB7 ${subtext}`;
    } else {
      subtext = extraSubtext;
    }
  }
  const maxBarWidth = 50;
  const usedLabelSpace = 12;
  if (maxWidth >= maxBarWidth + usedLabelSpace) {
    return /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      children: [
        /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
          bold: true,
          children: title
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
          flexDirection: "row",
          gap: 1,
          children: [
            /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ProgressBar, {
              ratio: utilization / 100,
              width: maxBarWidth,
              fillColor: "rate_limit_fill",
              emptyColor: "rate_limit_empty"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
              children: usedText
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        subtext && /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
          dimColor: true,
          children: subtext
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  } else {
    return /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      children: [
        /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
          children: [
            /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
              bold: true,
              children: title
            }, undefined, false, undefined, this),
            subtext && /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(jsx_dev_runtime6.Fragment, {
              children: [
                /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
                  children: " "
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
                  dimColor: true,
                  children: [
                    "\xB7 ",
                    subtext
                  ]
                }, undefined, true, undefined, this)
              ]
            }, undefined, true, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ProgressBar, {
          ratio: utilization / 100,
          width: maxWidth,
          fillColor: "rate_limit_fill",
          emptyColor: "rate_limit_empty"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
          children: usedText
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
}
function Usage() {
  const [utilization, setUtilization] = import_react5.useState(null);
  const [error, setError] = import_react5.useState(null);
  const [isLoading, setIsLoading] = import_react5.useState(true);
  const { columns } = useTerminalSize();
  const availableWidth = columns - 2;
  const maxWidth = Math.min(availableWidth, 80);
  const loadUtilization = React4.useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchUtilization();
      setUtilization(data);
    } catch (err) {
      logError(err);
      const axiosError = err;
      const responseBody = axiosError.response?.data ? jsonStringify(axiosError.response.data) : undefined;
      setError(responseBody ? `Failed to load usage data: ${responseBody}` : "Failed to load usage data");
    } finally {
      setIsLoading(false);
    }
  }, []);
  import_react5.useEffect(() => {
    loadUtilization();
  }, [loadUtilization]);
  useKeybinding("settings:retry", () => {
    loadUtilization();
  }, { context: "Settings", isActive: !!error && !isLoading });
  if (error) {
    return /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      gap: 1,
      children: [
        /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
          color: "error",
          children: [
            "Error: ",
            error
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
          dimColor: true,
          children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Byline, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ConfigurableShortcutHint, {
                action: "settings:retry",
                context: "Settings",
                fallback: "r",
                description: "retry"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ConfigurableShortcutHint, {
                action: "confirm:no",
                context: "Settings",
                fallback: "Esc",
                description: "cancel"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  if (!utilization) {
    return /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      gap: 1,
      children: [
        /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
          dimColor: true,
          children: "Loading usage data\u2026"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
          dimColor: true,
          children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ConfigurableShortcutHint, {
            action: "confirm:no",
            context: "Settings",
            fallback: "Esc",
            description: "cancel"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  const subscriptionType = getSubscriptionType();
  const showSonnetBar = subscriptionType === "max" || subscriptionType === "team" || subscriptionType === null;
  const limits = [
    {
      title: "Current session",
      limit: utilization.five_hour
    },
    {
      title: "Current week (all models)",
      limit: utilization.seven_day
    },
    ...showSonnetBar ? [
      {
        title: "Current week (Sonnet only)",
        limit: utilization.seven_day_sonnet
      }
    ] : []
  ];
  return /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    gap: 1,
    width: "100%",
    children: [
      limits.some(({ limit }) => limit) || /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
        dimColor: true,
        children: "/usage is only available for subscription plans."
      }, undefined, false, undefined, this),
      limits.map(({ title, limit }) => limit && /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(LimitBar, {
        title,
        limit,
        maxWidth
      }, title, false, undefined, this)),
      utilization.extra_usage && /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ExtraUsageSection, {
        extraUsage: utilization.extra_usage,
        maxWidth
      }, undefined, false, undefined, this),
      isEligibleForOverageCreditGrant() && /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(OverageCreditUpsell, {
        maxWidth
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
        dimColor: true,
        children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ConfigurableShortcutHint, {
          action: "confirm:no",
          context: "Settings",
          fallback: "Esc",
          description: "cancel"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function ExtraUsageSection({
  extraUsage: extraUsage2,
  maxWidth
}) {
  const subscriptionType = getSubscriptionType();
  const isProOrMax = subscriptionType === "pro" || subscriptionType === "max";
  if (!isProOrMax) {
    return false;
  }
  if (!extraUsage2.is_enabled) {
    if (extraUsage.isEnabled()) {
      return /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        children: [
          /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
            bold: true,
            children: EXTRA_USAGE_SECTION_TITLE
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
            dimColor: true,
            children: "Extra usage not enabled \xB7 /extra-usage to enable"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this);
    }
    return null;
  }
  if (extraUsage2.monthly_limit === null) {
    return /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      children: [
        /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
          bold: true,
          children: EXTRA_USAGE_SECTION_TITLE
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
          dimColor: true,
          children: "Unlimited"
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  if (typeof extraUsage2.used_credits !== "number" || typeof extraUsage2.utilization !== "number") {
    return null;
  }
  const formattedUsedCredits = formatCost(extraUsage2.used_credits / 100, 2);
  const formattedMonthlyLimit = formatCost(extraUsage2.monthly_limit / 100, 2);
  const now = new Date;
  const oneMonthReset = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  return /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(LimitBar, {
    title: EXTRA_USAGE_SECTION_TITLE,
    limit: {
      utilization: extraUsage2.utilization,
      resets_at: oneMonthReset.toISOString()
    },
    showTimeInReset: false,
    extraSubtext: `${formattedUsedCredits} / ${formattedMonthlyLimit} spent`,
    maxWidth
  }, undefined, false, undefined, this);
}
var React4, import_react5, jsx_dev_runtime6, EXTRA_USAGE_SECTION_TITLE = "Extra usage";
var init_Usage = __esm(() => {
  init_extra_usage();
  init_cost_tracker();
  init_auth();
  init_useTerminalSize();
  init_src();
  init_useKeybinding();
  init_usage();
  init_format();
  init_log();
  init_slowOperations();
  init_ConfigurableShortcutHint();
  init_src();
  init_OverageCreditUpsell();
  React4 = __toESM(require_react(), 1);
  import_react5 = __toESM(require_react(), 1);
  jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/Settings/Settings.tsx
function Settings({
  onClose,
  context,
  defaultTab
}) {
  const [selectedTab, setSelectedTab] = import_react6.useState(defaultTab);
  const [tabsHidden, setTabsHidden] = import_react6.useState(false);
  const [configOwnsEsc, setConfigOwnsEsc] = import_react6.useState(false);
  const insideModal = useIsInsideModal();
  const { rows } = useModalOrTerminalSize(useTerminalSize());
  const contentHeight = insideModal ? rows + 1 : Math.max(15, Math.min(Math.floor(rows * 0.8), 30));
  const [diagnosticsPromise] = import_react6.useState(() => buildDiagnostics().catch(() => []));
  useExitOnCtrlCDWithKeybindings();
  const handleEscape = () => {
    if (tabsHidden) {
      return;
    }
    onClose("Status dialog dismissed", { display: "system" });
  };
  useKeybinding("confirm:no", handleEscape, {
    context: "Settings",
    isActive: !tabsHidden && !(selectedTab === "Config" && configOwnsEsc)
  });
  const tabs = [
    /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Tab, {
      title: "Status",
      children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Status, {
        context,
        diagnosticsPromise
      }, undefined, false, undefined, this)
    }, "status", false, undefined, this),
    /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Tab, {
      title: "Config",
      children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(import_react6.Suspense, {
        fallback: null,
        children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Config, {
          context,
          onClose,
          setTabsHidden,
          onIsSearchModeChange: setConfigOwnsEsc,
          contentHeight
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    }, "config", false, undefined, this),
    /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Tab, {
      title: "Usage",
      children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Usage, {}, undefined, false, undefined, this)
    }, "usage", false, undefined, this)
  ];
  return /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Pane, {
    color: "permission",
    children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Tabs, {
      color: "permission",
      selectedTab,
      onTabChange: setSelectedTab,
      hidden: tabsHidden,
      initialHeaderFocused: defaultTab !== "Config",
      contentHeight: tabsHidden || insideModal ? undefined : contentHeight,
      children: tabs
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
var import_react6, jsx_dev_runtime7;
var init_Settings = __esm(() => {
  init_useKeybinding();
  init_useExitOnCtrlCDWithKeybindings();
  init_useTerminalSize();
  init_modalContext();
  init_src();
  init_Status();
  init_Config();
  init_Usage();
  import_react6 = __toESM(require_react(), 1);
  jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
});

export { Settings, init_Settings };
