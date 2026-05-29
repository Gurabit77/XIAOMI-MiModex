// @bun
import {
  StructuredDiff,
  init_StructuredDiff
} from "./chunk-ajv3be4s.js";
import {
  Select,
  getColorModuleUnavailableReason,
  getSyntaxTheme,
  gracefulShutdown,
  init_AppState,
  init_CustomSelect,
  init_KeybindingContext,
  init_colorDiff,
  init_gracefulShutdown,
  init_useShortcutDisplay,
  init_useTerminalSize,
  useAppState,
  useSetAppState,
  useShortcutDisplay
} from "./chunk-ktw919wt.js";
import {
  init_useExitOnCtrlCDWithKeybindings,
  useExitOnCtrlCDWithKeybindings
} from "./chunk-pfhyp451.js";
import {
  init_useKeybinding
} from "./chunk-dsnwry8r.js";
import {
  init_settings1 as init_settings,
  updateSettingsForSource
} from "./chunk-1ghcng4e.js";
import {
  Byline,
  KeyboardShortcutHint,
  ThemedBox_default,
  ThemedText,
  init_src,
  useKeybinding,
  usePreviewTheme,
  useRegisterKeybindingContext,
  useTerminalSize,
  useTheme,
  useThemeSetting
} from "./chunk-er1s76c9.js";
import {
  require_jsx_dev_runtime
} from "./chunk-b5wxetbv.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/components/ThemePicker.tsx
function ThemePicker({
  onThemeSelect,
  showIntroText = false,
  helpText = "",
  showHelpTextBelow = false,
  hideEscToCancel = false,
  skipExitHandling = false,
  onCancel: onCancelProp
}) {
  const [theme] = useTheme();
  const themeSetting = useThemeSetting();
  const { columns } = useTerminalSize();
  const colorModuleUnavailableReason = getColorModuleUnavailableReason();
  const syntaxTheme = colorModuleUnavailableReason === null ? getSyntaxTheme(theme) : null;
  const { setPreviewTheme, savePreview, cancelPreview } = usePreviewTheme();
  const syntaxHighlightingDisabled = useAppState((s) => s.settings.syntaxHighlightingDisabled) ?? false;
  const setAppState = useSetAppState();
  useRegisterKeybindingContext("ThemePicker");
  const syntaxToggleShortcut = useShortcutDisplay("theme:toggleSyntaxHighlighting", "ThemePicker", "ctrl+t");
  useKeybinding("theme:toggleSyntaxHighlighting", () => {
    if (colorModuleUnavailableReason === null) {
      const newValue = !syntaxHighlightingDisabled;
      updateSettingsForSource("userSettings", {
        syntaxHighlightingDisabled: newValue
      });
      setAppState((prev) => ({
        ...prev,
        settings: { ...prev.settings, syntaxHighlightingDisabled: newValue }
      }));
    }
  }, { context: "ThemePicker" });
  const exitState = useExitOnCtrlCDWithKeybindings(skipExitHandling ? () => {} : undefined);
  const themeOptions = [
    ...[],
    { label: "Dark mode", value: "dark" },
    { label: "Light mode", value: "light" },
    {
      label: "Dark mode (colorblind-friendly)",
      value: "dark-daltonized"
    },
    {
      label: "Light mode (colorblind-friendly)",
      value: "light-daltonized"
    },
    {
      label: "Dark mode (ANSI colors only)",
      value: "dark-ansi"
    },
    {
      label: "Light mode (ANSI colors only)",
      value: "light-ansi"
    }
  ];
  const content = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    gap: 1,
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        gap: 1,
        children: [
          showIntroText ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: "Let's get started."
          }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            bold: true,
            color: "permission",
            children: "Theme"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                bold: true,
                children: "Choose the text style that looks best with your terminal"
              }, undefined, false, undefined, this),
              helpText && !showHelpTextBelow && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                dimColor: true,
                children: helpText
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Select, {
            options: themeOptions,
            onFocus: (setting) => {
              setPreviewTheme(setting);
            },
            onChange: (setting) => {
              savePreview();
              onThemeSelect(setting);
            },
            onCancel: skipExitHandling ? () => {
              cancelPreview();
              onCancelProp?.();
            } : async () => {
              cancelPreview();
              await gracefulShutdown(0);
            },
            visibleOptionCount: themeOptions.length,
            defaultValue: themeSetting,
            defaultFocusValue: themeSetting
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        width: "100%",
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            borderTop: true,
            borderBottom: true,
            borderLeft: false,
            borderRight: false,
            borderStyle: "dashed",
            borderColor: "subtle",
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(StructuredDiff, {
              patch: {
                oldStart: 1,
                newStart: 1,
                oldLines: 3,
                newLines: 3,
                lines: [
                  " function greet() {",
                  '-  console.log("Hello, World!");',
                  '+  console.log("Hello, MiMo!");',
                  " }"
                ]
              },
              dim: false,
              filePath: "demo.js",
              firstLine: null,
              width: columns
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            dimColor: true,
            children: [
              " ",
              colorModuleUnavailableReason === "env" ? `Syntax highlighting disabled (via CLAUDE_CODE_SYNTAX_HIGHLIGHT=${process.env.CLAUDE_CODE_SYNTAX_HIGHLIGHT})` : syntaxHighlightingDisabled ? `Syntax highlighting disabled (${syntaxToggleShortcut} to enable)` : syntaxTheme ? `Syntax theme: ${syntaxTheme.theme}${syntaxTheme.source ? ` (from ${syntaxTheme.source})` : ""} (${syntaxToggleShortcut} to disable)` : `Syntax highlighting enabled (${syntaxToggleShortcut} to disable)`
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
  if (!showIntroText) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
          flexDirection: "column",
          children: content
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: [
            showHelpTextBelow && helpText && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
              marginLeft: 3,
              children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                dimColor: true,
                children: helpText
              }, undefined, false, undefined, this)
            }, undefined, false, undefined, this),
            !hideEscToCancel && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
              children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                dimColor: true,
                italic: true,
                children: exitState.pending ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
                  children: [
                    "Press ",
                    exitState.keyName,
                    " again to exit"
                  ]
                }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Byline, {
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV(KeyboardShortcutHint, {
                      shortcut: "Enter",
                      action: "select"
                    }, undefined, false, undefined, this),
                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV(KeyboardShortcutHint, {
                      shortcut: "Esc",
                      action: "cancel"
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this)
              }, undefined, false, undefined, this)
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  return content;
}
var jsx_dev_runtime;
var init_ThemePicker = __esm(() => {
  init_useExitOnCtrlCDWithKeybindings();
  init_useTerminalSize();
  init_src();
  init_KeybindingContext();
  init_useKeybinding();
  init_useShortcutDisplay();
  init_AppState();
  init_gracefulShutdown();
  init_settings();
  init_CustomSelect();
  init_src();
  init_colorDiff();
  init_StructuredDiff();
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});

export { ThemePicker, init_ThemePicker };
