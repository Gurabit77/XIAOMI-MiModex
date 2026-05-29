// @bun
import {
  init_loadUserBindings,
  init_useShortcutDisplay,
  isKeybindingCustomizationEnabled,
  useShortcutDisplay
} from "./chunk-ktw919wt.js";
import {
  hasUsedBackslashReturn,
  init_terminalSetup,
  isShiftEnterKeyBindingInstalled
} from "./chunk-25ctr1k2.js";
import {
  getGlobalConfig,
  init_config1 as init_config,
  init_fastMode,
  init_growthbook,
  isFastModeAvailable,
  isFastModeEnabled
} from "./chunk-1ghcng4e.js";
import {
  getPlatform,
  init_platform
} from "./chunk-0rbpfkda.js";
import {
  env,
  init_env
} from "./chunk-nw7v8w65.js";
import {
  ThemedBox_default,
  ThemedText,
  init_src
} from "./chunk-er1s76c9.js";
import {
  require_jsx_dev_runtime
} from "./chunk-b5wxetbv.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/components/PromptInput/utils.ts
function isVimModeEnabled() {
  const config = getGlobalConfig();
  return config.editorMode === "vim";
}
function getNewlineInstructions() {
  if (env.terminal === "Apple_Terminal" && process.platform === "darwin") {
    return "shift + \u23CE for newline";
  }
  if (isShiftEnterKeyBindingInstalled()) {
    return "shift + \u23CE for newline";
  }
  return hasUsedBackslashReturn() ? "\\\u23CE for newline" : "backslash (\\) + return (\u23CE) for newline";
}
function isNonSpacePrintable(input, key) {
  if (key.ctrl || key.meta || key.escape || key.return || key.tab || key.backspace || key.delete || key.upArrow || key.downArrow || key.leftArrow || key.rightArrow || key.pageUp || key.pageDown || key.home || key.end) {
    return false;
  }
  return input.length > 0 && !/^\s/.test(input) && !input.startsWith("\x1B");
}
var init_utils = __esm(() => {
  init_terminalSetup();
  init_config();
  init_env();
});

// src/components/PromptInput/PromptInputHelpMenu.tsx
function formatShortcut(shortcut) {
  return shortcut.replace(/\+/g, " + ");
}
function PromptInputHelpMenu(props) {
  const { dimColor, fixedWidth, gap, paddingX } = props;
  const transcriptShortcut = formatShortcut(useShortcutDisplay("app:toggleTranscript", "Global", "ctrl+o"));
  const todosShortcut = formatShortcut(useShortcutDisplay("app:toggleTodos", "Global", "ctrl+t"));
  const undoShortcut = formatShortcut(useShortcutDisplay("chat:undo", "Chat", "ctrl+_"));
  const stashShortcut = formatShortcut(useShortcutDisplay("chat:stash", "Chat", "ctrl+s"));
  const cycleModeShortcut = formatShortcut(useShortcutDisplay("chat:cycleMode", "Chat", "shift+tab"));
  const modelPickerShortcut = formatShortcut(useShortcutDisplay("chat:modelPicker", "Chat", "alt+p"));
  const fastModeShortcut = formatShortcut(useShortcutDisplay("chat:fastMode", "Chat", "alt+o"));
  const externalEditorShortcut = formatShortcut(useShortcutDisplay("chat:externalEditor", "Chat", "ctrl+g"));
  const terminalShortcut = formatShortcut(useShortcutDisplay("app:toggleTerminal", "Global", "meta+j"));
  const imagePasteShortcut = formatShortcut(useShortcutDisplay("chat:imagePaste", "Chat", "ctrl+v"));
  const terminalShortcutElement = null;
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
    paddingX,
    flexDirection: "row",
    gap,
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        width: fixedWidth ? 24 : undefined,
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor,
              children: "! for bash mode"
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor,
              children: "/ for commands"
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor,
              children: "@ for file paths"
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor,
              children: "& for background"
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor,
              children: "/btw for side question"
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        width: fixedWidth ? 35 : undefined,
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor,
              children: "double tap esc to clear input"
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor,
              children: [
                cycleModeShortcut,
                " ",
                process.env.USER_TYPE === "ant" ? "to cycle modes" : "to auto-accept edits"
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor,
              children: [
                transcriptShortcut,
                " for verbose output"
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor,
              children: [
                todosShortcut,
                " to toggle tasks"
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this),
          terminalShortcutElement,
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor,
              children: getNewlineInstructions()
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor,
              children: [
                undoShortcut,
                " to undo"
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this),
          getPlatform() !== "windows" && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor,
              children: "ctrl + z to suspend"
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor,
              children: [
                imagePasteShortcut,
                " to paste images"
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor,
              children: [
                modelPickerShortcut,
                " to switch model"
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this),
          isFastModeEnabled() && isFastModeAvailable() && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor,
              children: [
                fastModeShortcut,
                " to toggle fast mode"
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor,
              children: [
                stashShortcut,
                " to stash prompt"
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor,
              children: [
                externalEditorShortcut,
                " to edit in $EDITOR"
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this),
          isKeybindingCustomizationEnabled() && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor,
              children: "/keybindings to customize"
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var jsx_dev_runtime;
var init_PromptInputHelpMenu = __esm(() => {
  init_src();
  init_platform();
  init_loadUserBindings();
  init_useShortcutDisplay();
  init_growthbook();
  init_fastMode();
  init_utils();
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});

export { isVimModeEnabled, isNonSpacePrintable, init_utils, PromptInputHelpMenu, init_PromptInputHelpMenu };
