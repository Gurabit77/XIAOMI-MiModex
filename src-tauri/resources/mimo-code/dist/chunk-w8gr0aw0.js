// @bun
import {
  expandPastedTextRefs,
  formatPastedTextRef,
  generateTempFilePath,
  getPastedTextRefNumLines,
  init_history,
  init_ide,
  init_tempfile,
  toIDEDisplayName
} from "./chunk-ktw919wt.js";
import {
  init_src,
  instances_default
} from "./chunk-er1s76c9.js";
import {
  init_which,
  whichSync
} from "./chunk-jkh5s8ct.js";
import {
  execSync_DEPRECATED,
  init_execSyncWrapper
} from "./chunk-kwm5bf2m.js";
import {
  getFsImplementation,
  init_debug,
  init_fsOperations,
  init_slowOperations,
  logForDebugging,
  writeFileSync_DEPRECATED
} from "./chunk-rpbc3b7k.js";
import {
  init_memoize,
  memoize_default
} from "./chunk-qx8z601m.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/editor.ts
import {
  spawn,
  spawnSync
} from "child_process";
import { basename } from "path";
function isCommandAvailable(command) {
  return !!whichSync(command);
}
function classifyGuiEditor(editor) {
  const base = basename(editor.split(" ")[0] ?? "");
  return GUI_EDITORS.find((g) => base.includes(g));
}
function guiGotoArgv(guiFamily, filePath, line) {
  if (!line)
    return [filePath];
  if (VSCODE_FAMILY.has(guiFamily))
    return ["-g", `${filePath}:${line}`];
  if (guiFamily === "subl")
    return [`${filePath}:${line}`];
  return [filePath];
}
function openFileInExternalEditor(filePath, line) {
  const editor = getExternalEditor();
  if (!editor)
    return false;
  const parts = editor.split(" ");
  const base = parts[0] ?? editor;
  const editorArgs = parts.slice(1);
  const guiFamily = classifyGuiEditor(editor);
  if (guiFamily) {
    const gotoArgv = guiGotoArgv(guiFamily, filePath, line);
    const detachedOpts = { detached: true, stdio: "ignore" };
    let child;
    if (process.platform === "win32") {
      const gotoStr = gotoArgv.map((a) => `"${a}"`).join(" ");
      child = spawn(`${editor} ${gotoStr}`, { ...detachedOpts, shell: true });
    } else {
      child = spawn(base, [...editorArgs, ...gotoArgv], detachedOpts);
    }
    child.on("error", (e) => logForDebugging(`editor spawn failed: ${e}`, { level: "error" }));
    child.unref();
    return true;
  }
  const inkInstance = instances_default.get(process.stdout);
  if (!inkInstance)
    return false;
  const useGotoLine = line && PLUS_N_EDITORS.test(basename(base));
  inkInstance.enterAlternateScreen();
  try {
    const syncOpts = { stdio: "inherit" };
    let result;
    if (process.platform === "win32") {
      const lineArg = useGotoLine ? `+${line} ` : "";
      result = spawnSync(`${editor} ${lineArg}"${filePath}"`, {
        ...syncOpts,
        shell: true
      });
    } else {
      const args = [
        ...editorArgs,
        ...useGotoLine ? [`+${line}`, filePath] : [filePath]
      ];
      result = spawnSync(base, args, syncOpts);
    }
    if (result.error) {
      logForDebugging(`editor spawn failed: ${result.error}`, {
        level: "error"
      });
      return false;
    }
    return true;
  } finally {
    inkInstance.exitAlternateScreen();
  }
}
var GUI_EDITORS, PLUS_N_EDITORS, VSCODE_FAMILY, getExternalEditor;
var init_editor = __esm(() => {
  init_memoize();
  init_src();
  init_debug();
  init_which();
  GUI_EDITORS = [
    "code",
    "cursor",
    "windsurf",
    "codium",
    "subl",
    "atom",
    "gedit",
    "notepad++",
    "notepad"
  ];
  PLUS_N_EDITORS = /\b(vi|vim|nvim|nano|emacs|pico|micro|helix|hx)\b/;
  VSCODE_FAMILY = new Set(["code", "cursor", "windsurf", "codium"]);
  getExternalEditor = memoize_default(() => {
    if (process.env.VISUAL?.trim()) {
      return process.env.VISUAL.trim();
    }
    if (process.env.EDITOR?.trim()) {
      return process.env.EDITOR.trim();
    }
    if (process.platform === "win32") {
      return "start /wait notepad";
    }
    const editors = ["code", "vi", "nano"];
    return editors.find((command) => isCommandAvailable(command));
  });
});

// src/utils/promptEditor.ts
function isGuiEditor(editor) {
  return classifyGuiEditor(editor) !== undefined;
}
function editFileInEditor(filePath) {
  const fs = getFsImplementation();
  const inkInstance = instances_default.get(process.stdout);
  if (!inkInstance) {
    throw new Error("Ink instance not found - cannot pause rendering");
  }
  const editor = getExternalEditor();
  if (!editor) {
    return { content: null };
  }
  try {
    fs.statSync(filePath);
  } catch {
    return { content: null };
  }
  const useAlternateScreen = !isGuiEditor(editor);
  if (useAlternateScreen) {
    inkInstance.enterAlternateScreen();
  } else {
    inkInstance.pause();
    inkInstance.suspendStdin();
  }
  try {
    const editorCommand = EDITOR_OVERRIDES[editor] ?? editor;
    execSync_DEPRECATED(`${editorCommand} "${filePath}"`, {
      stdio: "inherit"
    });
    const editedContent = fs.readFileSync(filePath, { encoding: "utf-8" });
    return { content: editedContent };
  } catch (err) {
    if (typeof err === "object" && err !== null && "status" in err && typeof err.status === "number") {
      const status = err.status;
      if (status !== 0) {
        const editorName = toIDEDisplayName(editor);
        return {
          content: null,
          error: `${editorName} exited with code ${status}`
        };
      }
    }
    return { content: null };
  } finally {
    if (useAlternateScreen) {
      inkInstance.exitAlternateScreen();
    } else {
      inkInstance.resumeStdin();
      inkInstance.resume();
    }
  }
}
function recollapsePastedContent(editedPrompt, originalPrompt, pastedContents) {
  let collapsed = editedPrompt;
  for (const [id, content] of Object.entries(pastedContents)) {
    if (content.type === "text") {
      const pasteId = parseInt(id, 10);
      const contentStr = content.content;
      const contentIndex = collapsed.indexOf(contentStr);
      if (contentIndex !== -1) {
        const numLines = getPastedTextRefNumLines(contentStr);
        const ref = formatPastedTextRef(pasteId, numLines);
        collapsed = collapsed.slice(0, contentIndex) + ref + collapsed.slice(contentIndex + contentStr.length);
      }
    }
  }
  return collapsed;
}
function editPromptInEditor(currentPrompt, pastedContents) {
  const fs = getFsImplementation();
  const tempFile = generateTempFilePath();
  try {
    const expandedPrompt = pastedContents ? expandPastedTextRefs(currentPrompt, pastedContents) : currentPrompt;
    writeFileSync_DEPRECATED(tempFile, expandedPrompt, {
      encoding: "utf-8",
      flush: true
    });
    const result = editFileInEditor(tempFile);
    if (result.content === null) {
      return result;
    }
    let finalContent = result.content;
    if (finalContent.endsWith(`
`) && !finalContent.endsWith(`

`)) {
      finalContent = finalContent.slice(0, -1);
    }
    if (pastedContents) {
      finalContent = recollapsePastedContent(finalContent, currentPrompt, pastedContents);
    }
    return { content: finalContent };
  } finally {
    try {
      fs.unlinkSync(tempFile);
    } catch {}
  }
}
var EDITOR_OVERRIDES;
var init_promptEditor = __esm(() => {
  init_history();
  init_src();
  init_editor();
  init_execSyncWrapper();
  init_fsOperations();
  init_ide();
  init_slowOperations();
  init_tempfile();
  EDITOR_OVERRIDES = {
    code: "code -w",
    subl: "subl --wait"
  };
});

export { openFileInExternalEditor, getExternalEditor, init_editor, editFileInEditor, editPromptInEditor, init_promptEditor };
