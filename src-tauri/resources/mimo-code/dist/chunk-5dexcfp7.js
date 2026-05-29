// @bun
import {
  getDirectoryCompletions,
  init_directoryCompletion
} from "./chunk-js8hvz4s.js";
import {
  PromptInputFooterSuggestions,
  init_PromptInputFooterSuggestions
} from "./chunk-dmsj0t95.js";
import {
  ConfigurableShortcutHint,
  Select,
  TextInput,
  addDirHelpMessage,
  init_ConfigurableShortcutHint,
  init_TextInput,
  init_select,
  init_validation,
  validateDirectoryForWorkspace
} from "./chunk-ktw919wt.js";
import {
  init_useKeybinding
} from "./chunk-dsnwry8r.js";
import {
  Byline,
  Dialog,
  KeyboardShortcutHint,
  ThemedBox_default,
  ThemedText,
  init_dist,
  init_src,
  useDebounceCallback,
  useKeybinding
} from "./chunk-er1s76c9.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "./chunk-b5wxetbv.js";
import {
  figures_default,
  init_figures
} from "./chunk-qajrkk97.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/components/permissions/rules/AddWorkspaceDirectory.tsx
function PermissionDescription() {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
    dimColor: true,
    children: "MiMo Code will be able to read files in this directory and make edits when auto-accept edits is on."
  }, undefined, false, undefined, this);
}
function DirectoryDisplay({ path }) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    paddingX: 2,
    gap: 1,
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        color: "permission",
        children: path
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(PermissionDescription, {}, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function DirectoryInput({
  value,
  onChange,
  onSubmit,
  error,
  suggestions,
  selectedSuggestion
}) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        children: "Enter the path to the directory:"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        borderDimColor: true,
        borderStyle: "round",
        marginY: 1,
        paddingLeft: 1,
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(TextInput, {
          showCursor: true,
          placeholder: `Directory path${figures_default.ellipsis}`,
          value,
          onChange,
          onSubmit,
          columns: 80,
          cursorOffset: value.length,
          onChangeCursorOffset: () => {}
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      suggestions.length > 0 && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        marginBottom: 1,
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(PromptInputFooterSuggestions, {
          suggestions,
          selectedSuggestion
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      error && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        color: "error",
        children: error
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function AddWorkspaceDirectory({
  onAddDirectory,
  onCancel,
  permissionContext,
  directoryPath
}) {
  const [directoryInput, setDirectoryInput] = import_react.useState("");
  const [error, setError] = import_react.useState(null);
  const [suggestions, setSuggestions] = import_react.useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = import_react.useState(0);
  const options = import_react.useMemo(() => REMEMBER_DIRECTORY_OPTIONS, []);
  const fetchSuggestions = import_react.useCallback(async (path) => {
    if (!path) {
      setSuggestions([]);
      setSelectedSuggestion(0);
      return;
    }
    const completions = await getDirectoryCompletions(path);
    setSuggestions(completions);
    setSelectedSuggestion(0);
  }, []);
  const debouncedFetchSuggestions = useDebounceCallback(fetchSuggestions, 100);
  import_react.useEffect(() => {
    debouncedFetchSuggestions(directoryInput);
  }, [directoryInput, debouncedFetchSuggestions]);
  const applySuggestion = import_react.useCallback((suggestion) => {
    const newPath = suggestion.id + "/";
    setDirectoryInput(newPath);
    setError(null);
  }, []);
  const handleSubmit = import_react.useCallback(async (newPath) => {
    const result = await validateDirectoryForWorkspace(newPath, permissionContext);
    if (result.resultType === "success") {
      onAddDirectory(result.absolutePath, false);
    } else {
      setError(addDirHelpMessage(result));
    }
  }, [permissionContext, onAddDirectory]);
  useKeybinding("confirm:no", onCancel, { context: "Settings" });
  const handleKeyDown = import_react.useCallback((e) => {
    if (suggestions.length > 0) {
      if (e.key === "tab") {
        e.preventDefault();
        const suggestion = suggestions[selectedSuggestion];
        if (suggestion) {
          applySuggestion(suggestion);
        }
        return;
      }
      if (e.key === "return") {
        e.preventDefault();
        const suggestion = suggestions[selectedSuggestion];
        if (suggestion) {
          handleSubmit(suggestion.id + "/");
        }
        return;
      }
      if (e.key === "up" || e.ctrl && e.key === "p") {
        e.preventDefault();
        setSelectedSuggestion((prev) => prev <= 0 ? suggestions.length - 1 : prev - 1);
        return;
      }
      if (e.key === "down" || e.ctrl && e.key === "n") {
        e.preventDefault();
        setSelectedSuggestion((prev) => prev >= suggestions.length - 1 ? 0 : prev + 1);
        return;
      }
    }
  }, [suggestions, selectedSuggestion, applySuggestion, handleSubmit]);
  const handleSelect = import_react.useCallback((value) => {
    if (!directoryPath)
      return;
    const selectionValue = value;
    switch (selectionValue) {
      case "yes-session":
        onAddDirectory(directoryPath, false);
        break;
      case "yes-remember":
        onAddDirectory(directoryPath, true);
        break;
      case "no":
        onCancel();
        break;
    }
  }, [directoryPath, onAddDirectory, onCancel]);
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    tabIndex: 0,
    autoFocus: true,
    onKeyDown: handleKeyDown,
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Dialog, {
      title: "Add directory to workspace",
      onCancel,
      color: "permission",
      isCancelActive: false,
      inputGuide: directoryPath ? undefined : (exitState) => exitState.pending ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        children: [
          "Press ",
          exitState.keyName,
          " again to exit"
        ]
      }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Byline, {
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(KeyboardShortcutHint, {
            shortcut: "Tab",
            action: "complete"
          }, undefined, false, undefined, this),
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
      }, undefined, true, undefined, this),
      children: directoryPath ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        gap: 1,
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(DirectoryDisplay, {
            path: directoryPath
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Select, {
            options,
            onChange: handleSelect,
            onCancel: () => handleSelect("no")
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        gap: 1,
        marginX: 2,
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(PermissionDescription, {}, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(DirectoryInput, {
            value: directoryInput,
            onChange: setDirectoryInput,
            onSubmit: handleSubmit,
            error,
            suggestions,
            selectedSuggestion
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
var import_react, jsx_dev_runtime, REMEMBER_DIRECTORY_OPTIONS;
var init_AddWorkspaceDirectory = __esm(() => {
  init_figures();
  init_dist();
  init_validation();
  init_TextInput();
  init_src();
  init_useKeybinding();
  init_directoryCompletion();
  init_ConfigurableShortcutHint();
  init_select();
  init_src();
  init_PromptInputFooterSuggestions();
  import_react = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
  REMEMBER_DIRECTORY_OPTIONS = [
    {
      value: "yes-session",
      label: "Yes, for this session"
    },
    {
      value: "yes-remember",
      label: "Yes, and remember this directory"
    },
    {
      value: "no",
      label: "No"
    }
  ];
});

export { AddWorkspaceDirectory, init_AddWorkspaceDirectory };
