// @bun
import {
  init_completionCache,
  setupShellCompletion
} from "./chunk-azxwk3qa.js";
import {
  getCurrentProjectConfig,
  getGlobalConfig,
  init_config1 as init_config,
  init_file,
  isDirEmpty,
  saveCurrentProjectConfig,
  saveGlobalConfig
} from "./chunk-1ghcng4e.js";
import {
  addItemToJSONCArray,
  init_json,
  safeParseJSONC
} from "./chunk-pz9t24tq.js";
import {
  getPlatform,
  init_platform
} from "./chunk-0rbpfkda.js";
import {
  env,
  init_env
} from "./chunk-nw7v8w65.js";
import {
  color,
  init_source,
  init_src,
  source_default,
  supportsHyperlinks
} from "./chunk-er1s76c9.js";
import {
  execFileNoThrow,
  init_execFileNoThrow
} from "./chunk-qcwbd71h.js";
import {
  getCwd,
  init_cwd
} from "./chunk-dxvkxgnf.js";
import {
  init_log,
  logError
} from "./chunk-w5ahy59y.js";
import {
  getFsImplementation,
  init_errors,
  init_fsOperations,
  init_slowOperations,
  isFsInaccessible,
  jsonParse,
  jsonStringify
} from "./chunk-rpbc3b7k.js";
import {
  init_memoize,
  memoize_default
} from "./chunk-qx8z601m.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/projectOnboardingState.ts
import { join } from "path";
function getSteps() {
  const hasClaudeMd = getFsImplementation().existsSync(join(getCwd(), "CLAUDE.md"));
  const isWorkspaceDirEmpty = isDirEmpty(getCwd());
  return [
    {
      key: "workspace",
      text: "Ask MiMo to create a new app or clone a repository",
      isComplete: false,
      isCompletable: true,
      isEnabled: isWorkspaceDirEmpty
    },
    {
      key: "claudemd",
      text: "Run /init to create a CLAUDE.md file with instructions for MiMo",
      isComplete: hasClaudeMd,
      isCompletable: true,
      isEnabled: !isWorkspaceDirEmpty
    }
  ];
}
function isProjectOnboardingComplete() {
  return getSteps().filter(({ isCompletable, isEnabled }) => isCompletable && isEnabled).every(({ isComplete }) => isComplete);
}
function maybeMarkProjectOnboardingComplete() {
  if (getCurrentProjectConfig().hasCompletedProjectOnboarding) {
    return;
  }
  if (isProjectOnboardingComplete()) {
    saveCurrentProjectConfig((current) => ({
      ...current,
      hasCompletedProjectOnboarding: true
    }));
  }
}
function incrementProjectOnboardingSeenCount() {
  saveCurrentProjectConfig((current) => ({
    ...current,
    projectOnboardingSeenCount: current.projectOnboardingSeenCount + 1
  }));
}
var shouldShowProjectOnboarding;
var init_projectOnboardingState = __esm(() => {
  init_memoize();
  init_config();
  init_cwd();
  init_file();
  init_fsOperations();
  shouldShowProjectOnboarding = memoize_default(() => {
    const projectConfig = getCurrentProjectConfig();
    if (projectConfig.hasCompletedProjectOnboarding || projectConfig.projectOnboardingSeenCount >= 4 || process.env.IS_DEMO) {
      return false;
    }
    return !isProjectOnboardingComplete();
  });
});

// src/utils/appleTerminalBackup.ts
import { stat } from "fs/promises";
import { homedir } from "os";
import { join as join2 } from "path";
function markTerminalSetupInProgress(backupPath) {
  saveGlobalConfig((current) => ({
    ...current,
    appleTerminalSetupInProgress: true,
    appleTerminalBackupPath: backupPath
  }));
}
function markTerminalSetupComplete() {
  saveGlobalConfig((current) => ({
    ...current,
    appleTerminalSetupInProgress: false
  }));
}
function getTerminalRecoveryInfo() {
  const config = getGlobalConfig();
  return {
    inProgress: config.appleTerminalSetupInProgress ?? false,
    backupPath: config.appleTerminalBackupPath || null
  };
}
function getTerminalPlistPath() {
  return join2(homedir(), "Library", "Preferences", "com.apple.Terminal.plist");
}
async function backupTerminalPreferences() {
  const terminalPlistPath = getTerminalPlistPath();
  const backupPath = `${terminalPlistPath}.bak`;
  try {
    const { code } = await execFileNoThrow("defaults", [
      "export",
      "com.apple.Terminal",
      terminalPlistPath
    ]);
    if (code !== 0) {
      return null;
    }
    try {
      await stat(terminalPlistPath);
    } catch {
      return null;
    }
    await execFileNoThrow("defaults", [
      "export",
      "com.apple.Terminal",
      backupPath
    ]);
    markTerminalSetupInProgress(backupPath);
    return backupPath;
  } catch (error) {
    logError(error);
    return null;
  }
}
async function checkAndRestoreTerminalBackup() {
  const { inProgress, backupPath } = getTerminalRecoveryInfo();
  if (!inProgress) {
    return { status: "no_backup" };
  }
  if (!backupPath) {
    markTerminalSetupComplete();
    return { status: "no_backup" };
  }
  try {
    await stat(backupPath);
  } catch {
    markTerminalSetupComplete();
    return { status: "no_backup" };
  }
  try {
    const { code } = await execFileNoThrow("defaults", [
      "import",
      "com.apple.Terminal",
      backupPath
    ]);
    if (code !== 0) {
      return { status: "failed", backupPath };
    }
    await execFileNoThrow("killall", ["cfprefsd"]);
    markTerminalSetupComplete();
    return { status: "restored" };
  } catch (restoreError) {
    logError(new Error(`Failed to restore Terminal.app settings with: ${restoreError}`));
    markTerminalSetupComplete();
    return { status: "failed", backupPath };
  }
}
var init_appleTerminalBackup = __esm(() => {
  init_config();
  init_execFileNoThrow();
  init_log();
});

// src/commands/terminalSetup/terminalSetup.tsx
import { randomBytes } from "crypto";
import { copyFile, mkdir, readFile, writeFile } from "fs/promises";
import { homedir as homedir2, platform } from "os";
import { dirname, join as join3 } from "path";
import { pathToFileURL } from "url";
function isVSCodeRemoteSSH() {
  const askpassMain = process.env.VSCODE_GIT_ASKPASS_MAIN ?? "";
  const path = process.env.PATH ?? "";
  return askpassMain.includes(".vscode-server") || askpassMain.includes(".cursor-server") || askpassMain.includes(".windsurf-server") || path.includes(".vscode-server") || path.includes(".cursor-server") || path.includes(".windsurf-server");
}
function getNativeCSIuTerminalDisplayName() {
  if (!env.terminal || !(env.terminal in NATIVE_CSIU_TERMINALS)) {
    return null;
  }
  return NATIVE_CSIU_TERMINALS[env.terminal] ?? null;
}
function formatPathLink(filePath) {
  if (!supportsHyperlinks()) {
    return filePath;
  }
  const fileUrl = pathToFileURL(filePath).href;
  return `\x1B]8;;${fileUrl}\x07${filePath}\x1B]8;;\x07`;
}
function shouldOfferTerminalSetup() {
  return platform() === "darwin" && env.terminal === "Apple_Terminal" || env.terminal === "vscode" || env.terminal === "cursor" || env.terminal === "windsurf" || env.terminal === "alacritty" || env.terminal === "zed";
}
async function setupTerminal(theme) {
  let result = "";
  switch (env.terminal) {
    case "Apple_Terminal":
      result = await enableOptionAsMetaForTerminal(theme);
      break;
    case "vscode":
      result = await installBindingsForVSCodeTerminal("VSCode", theme);
      break;
    case "cursor":
      result = await installBindingsForVSCodeTerminal("Cursor", theme);
      break;
    case "windsurf":
      result = await installBindingsForVSCodeTerminal("Windsurf", theme);
      break;
    case "alacritty":
      result = await installBindingsForAlacritty(theme);
      break;
    case "zed":
      result = await installBindingsForZed(theme);
      break;
    case null:
      break;
  }
  saveGlobalConfig((current) => {
    if (["vscode", "cursor", "windsurf", "alacritty", "zed"].includes(env.terminal ?? "")) {
      if (current.shiftEnterKeyBindingInstalled === true)
        return current;
      return { ...current, shiftEnterKeyBindingInstalled: true };
    } else if (env.terminal === "Apple_Terminal") {
      if (current.optionAsMetaKeyInstalled === true)
        return current;
      return { ...current, optionAsMetaKeyInstalled: true };
    }
    return current;
  });
  maybeMarkProjectOnboardingComplete();
  if (process.env.USER_TYPE === "ant") {
    result += await setupShellCompletion(theme);
  }
  return result;
}
function isShiftEnterKeyBindingInstalled() {
  return getGlobalConfig().shiftEnterKeyBindingInstalled === true;
}
function hasUsedBackslashReturn() {
  return getGlobalConfig().hasUsedBackslashReturn === true;
}
function markBackslashReturnUsed() {
  const config = getGlobalConfig();
  if (!config.hasUsedBackslashReturn) {
    saveGlobalConfig((current) => ({
      ...current,
      hasUsedBackslashReturn: true
    }));
  }
}
async function call(onDone, context, _args) {
  if (env.terminal && env.terminal in NATIVE_CSIU_TERMINALS) {
    const message = `Shift+Enter is natively supported in ${NATIVE_CSIU_TERMINALS[env.terminal]}.

No configuration needed. Just use Shift+Enter to add newlines.`;
    onDone(message);
    return null;
  }
  if (!shouldOfferTerminalSetup()) {
    const terminalName = env.terminal || "your current terminal";
    const currentPlatform = getPlatform();
    let platformTerminals = "";
    if (currentPlatform === "macos") {
      platformTerminals = `   \u2022 macOS: Apple Terminal
`;
    } else if (currentPlatform === "windows") {
      platformTerminals = `   \u2022 Windows: Windows Terminal
`;
    }
    const message = `Terminal setup cannot be run from ${terminalName}.

This command configures a convenient Shift+Enter shortcut for multi-line prompts.
${source_default.dim("Note: You can already use backslash (\\\\) + return to add newlines.")}

To set up the shortcut (optional):
1. Exit tmux/screen temporarily
2. Run /terminal-setup directly in one of these terminals:
${platformTerminals}   \u2022 IDE: VSCode, Cursor, Windsurf, Zed
   \u2022 Other: Alacritty
3. Return to tmux/screen - settings will persist

${source_default.dim("Note: iTerm2, WezTerm, Ghostty, Kitty, and Warp support Shift+Enter natively.")}`;
    onDone(message);
    return null;
  }
  const result = await setupTerminal(context.options.theme);
  onDone(result);
  return null;
}
async function installBindingsForVSCodeTerminal(editor = "VSCode", theme) {
  if (isVSCodeRemoteSSH()) {
    return `${color("warning", theme)(`Cannot install keybindings from a remote ${editor} session.`)}${EOL}${EOL}${editor} keybindings must be installed on your local machine, not the remote server.${EOL}${EOL}To install the Shift+Enter keybinding:${EOL}1. Open ${editor} on your local machine (not connected to remote)${EOL}2. Open the Command Palette (Cmd/Ctrl+Shift+P) \u2192 "Preferences: Open Keyboard Shortcuts (JSON)"${EOL}3. Add this keybinding (the file must be a JSON array):${EOL}${EOL}${source_default.dim(`[
  {
    "key": "shift+enter",
    "command": "workbench.action.terminal.sendSequence",
    "args": { "text": "\\u001b\\r" },
    "when": "terminalFocus"
  }
]`)}${EOL}`;
  }
  const editorDir = editor === "VSCode" ? "Code" : editor;
  const userDirPath = join3(homedir2(), platform() === "win32" ? join3("AppData", "Roaming", editorDir, "User") : platform() === "darwin" ? join3("Library", "Application Support", editorDir, "User") : join3(".config", editorDir, "User"));
  const keybindingsPath = join3(userDirPath, "keybindings.json");
  try {
    await mkdir(userDirPath, { recursive: true });
    let content = "[]";
    let keybindings = [];
    let fileExists = false;
    try {
      content = await readFile(keybindingsPath, { encoding: "utf-8" });
      fileExists = true;
      keybindings = safeParseJSONC(content) ?? [];
    } catch (e) {
      if (!isFsInaccessible(e))
        throw e;
    }
    if (fileExists) {
      const randomSha = randomBytes(4).toString("hex");
      const backupPath = `${keybindingsPath}.${randomSha}.bak`;
      try {
        await copyFile(keybindingsPath, backupPath);
      } catch {
        return `${color("warning", theme)(`Error backing up existing ${editor} terminal keybindings. Bailing out.`)}${EOL}${source_default.dim(`See ${formatPathLink(keybindingsPath)}`)}${EOL}${source_default.dim(`Backup path: ${formatPathLink(backupPath)}`)}${EOL}`;
      }
    }
    const existingBinding = keybindings.find((binding) => binding.key === "shift+enter" && binding.command === "workbench.action.terminal.sendSequence" && binding.when === "terminalFocus");
    if (existingBinding) {
      return `${color("warning", theme)(`Found existing ${editor} terminal Shift+Enter key binding. Remove it to continue.`)}${EOL}${source_default.dim(`See ${formatPathLink(keybindingsPath)}`)}${EOL}`;
    }
    const newKeybinding = {
      key: "shift+enter",
      command: "workbench.action.terminal.sendSequence",
      args: { text: "\x1B\r" },
      when: "terminalFocus"
    };
    const updatedContent = addItemToJSONCArray(content, newKeybinding);
    await writeFile(keybindingsPath, updatedContent, { encoding: "utf-8" });
    return `${color("success", theme)(`Installed ${editor} terminal Shift+Enter key binding`)}${EOL}${source_default.dim(`See ${formatPathLink(keybindingsPath)}`)}${EOL}`;
  } catch (error) {
    logError(error);
    throw new Error(`Failed to install ${editor} terminal Shift+Enter key binding`);
  }
}
async function enableOptionAsMetaForProfile(profileName) {
  const { code: addCode } = await execFileNoThrow("/usr/libexec/PlistBuddy", [
    "-c",
    `Add :'Window Settings':'${profileName}':useOptionAsMetaKey bool true`,
    getTerminalPlistPath()
  ]);
  if (addCode !== 0) {
    const { code: setCode } = await execFileNoThrow("/usr/libexec/PlistBuddy", [
      "-c",
      `Set :'Window Settings':'${profileName}':useOptionAsMetaKey true`,
      getTerminalPlistPath()
    ]);
    if (setCode !== 0) {
      logError(new Error(`Failed to enable Option as Meta key for Terminal.app profile: ${profileName}`));
      return false;
    }
  }
  return true;
}
async function disableAudioBellForProfile(profileName) {
  const { code: addCode } = await execFileNoThrow("/usr/libexec/PlistBuddy", [
    "-c",
    `Add :'Window Settings':'${profileName}':Bell bool false`,
    getTerminalPlistPath()
  ]);
  if (addCode !== 0) {
    const { code: setCode } = await execFileNoThrow("/usr/libexec/PlistBuddy", [
      "-c",
      `Set :'Window Settings':'${profileName}':Bell false`,
      getTerminalPlistPath()
    ]);
    if (setCode !== 0) {
      logError(new Error(`Failed to disable audio bell for Terminal.app profile: ${profileName}`));
      return false;
    }
  }
  return true;
}
async function enableOptionAsMetaForTerminal(theme) {
  try {
    const backupPath = await backupTerminalPreferences();
    if (!backupPath) {
      throw new Error("Failed to create backup of Terminal.app preferences, bailing out");
    }
    const { stdout: defaultProfile, code: readCode } = await execFileNoThrow("defaults", ["read", "com.apple.Terminal", "Default Window Settings"]);
    if (readCode !== 0 || !defaultProfile.trim()) {
      throw new Error("Failed to read default Terminal.app profile");
    }
    const { stdout: startupProfile, code: startupCode } = await execFileNoThrow("defaults", ["read", "com.apple.Terminal", "Startup Window Settings"]);
    if (startupCode !== 0 || !startupProfile.trim()) {
      throw new Error("Failed to read startup Terminal.app profile");
    }
    let wasAnyProfileUpdated = false;
    const defaultProfileName = defaultProfile.trim();
    const optionAsMetaEnabled = await enableOptionAsMetaForProfile(defaultProfileName);
    const audioBellDisabled = await disableAudioBellForProfile(defaultProfileName);
    if (optionAsMetaEnabled || audioBellDisabled) {
      wasAnyProfileUpdated = true;
    }
    const startupProfileName = startupProfile.trim();
    if (startupProfileName !== defaultProfileName) {
      const startupOptionAsMetaEnabled = await enableOptionAsMetaForProfile(startupProfileName);
      const startupAudioBellDisabled = await disableAudioBellForProfile(startupProfileName);
      if (startupOptionAsMetaEnabled || startupAudioBellDisabled) {
        wasAnyProfileUpdated = true;
      }
    }
    if (!wasAnyProfileUpdated) {
      throw new Error("Failed to enable Option as Meta key or disable audio bell for any Terminal.app profile");
    }
    await execFileNoThrow("killall", ["cfprefsd"]);
    markTerminalSetupComplete();
    return `${color("success", theme)(`Configured Terminal.app settings:`)}${EOL}${color("success", theme)('- Enabled "Use Option as Meta key"')}${EOL}${color("success", theme)("- Switched to visual bell")}${EOL}${source_default.dim("Option+Enter will now enter a newline.")}${EOL}${source_default.dim("You must restart Terminal.app for changes to take effect.", theme)}${EOL}`;
  } catch (error) {
    logError(error);
    const restoreResult = await checkAndRestoreTerminalBackup();
    const errorMessage = "Failed to enable Option as Meta key for Terminal.app.";
    if (restoreResult.status === "restored") {
      throw new Error(`${errorMessage} Your settings have been restored from backup.`);
    } else if (restoreResult.status === "failed") {
      throw new Error(`${errorMessage} Restoring from backup failed, try manually with: defaults import com.apple.Terminal ${restoreResult.backupPath}`);
    } else {
      throw new Error(`${errorMessage} No backup was available to restore from.`);
    }
  }
}
async function installBindingsForAlacritty(theme) {
  const ALACRITTY_KEYBINDING = `[[keyboard.bindings]]
key = "Return"
mods = "Shift"
chars = "\\u001B\\r"`;
  const configPaths = [];
  const xdgConfigHome = process.env.XDG_CONFIG_HOME;
  if (xdgConfigHome) {
    configPaths.push(join3(xdgConfigHome, "alacritty", "alacritty.toml"));
  } else {
    configPaths.push(join3(homedir2(), ".config", "alacritty", "alacritty.toml"));
  }
  if (platform() === "win32") {
    const appData = process.env.APPDATA;
    if (appData) {
      configPaths.push(join3(appData, "alacritty", "alacritty.toml"));
    }
  }
  let configPath = null;
  let configContent = "";
  let configExists = false;
  for (const path of configPaths) {
    try {
      configContent = await readFile(path, { encoding: "utf-8" });
      configPath = path;
      configExists = true;
      break;
    } catch (e) {
      if (!isFsInaccessible(e))
        throw e;
    }
  }
  if (!configPath) {
    configPath = configPaths[0] ?? null;
  }
  if (!configPath) {
    throw new Error("No valid config path found for Alacritty");
  }
  try {
    if (configExists) {
      if (configContent.includes('mods = "Shift"') && configContent.includes('key = "Return"')) {
        return `${color("warning", theme)("Found existing Alacritty Shift+Enter key binding. Remove it to continue.")}${EOL}${source_default.dim(`See ${formatPathLink(configPath)}`)}${EOL}`;
      }
      const randomSha = randomBytes(4).toString("hex");
      const backupPath = `${configPath}.${randomSha}.bak`;
      try {
        await copyFile(configPath, backupPath);
      } catch {
        return `${color("warning", theme)("Error backing up existing Alacritty config. Bailing out.")}${EOL}${source_default.dim(`See ${formatPathLink(configPath)}`)}${EOL}${source_default.dim(`Backup path: ${formatPathLink(backupPath)}`)}${EOL}`;
      }
    } else {
      await mkdir(dirname(configPath), { recursive: true });
    }
    let updatedContent = configContent;
    if (configContent && !configContent.endsWith(`
`)) {
      updatedContent += `
`;
    }
    updatedContent += `
` + ALACRITTY_KEYBINDING + `
`;
    await writeFile(configPath, updatedContent, { encoding: "utf-8" });
    return `${color("success", theme)("Installed Alacritty Shift+Enter key binding")}${EOL}${color("success", theme)("You may need to restart Alacritty for changes to take effect")}${EOL}${source_default.dim(`See ${formatPathLink(configPath)}`)}${EOL}`;
  } catch (error) {
    logError(error);
    throw new Error("Failed to install Alacritty Shift+Enter key binding");
  }
}
async function installBindingsForZed(theme) {
  const zedDir = join3(homedir2(), ".config", "zed");
  const keymapPath = join3(zedDir, "keymap.json");
  try {
    await mkdir(zedDir, { recursive: true });
    let keymapContent = "[]";
    let fileExists = false;
    try {
      keymapContent = await readFile(keymapPath, { encoding: "utf-8" });
      fileExists = true;
    } catch (e) {
      if (!isFsInaccessible(e))
        throw e;
    }
    if (fileExists) {
      if (keymapContent.includes("shift-enter")) {
        return `${color("warning", theme)("Found existing Zed Shift+Enter key binding. Remove it to continue.")}${EOL}${source_default.dim(`See ${formatPathLink(keymapPath)}`)}${EOL}`;
      }
      const randomSha = randomBytes(4).toString("hex");
      const backupPath = `${keymapPath}.${randomSha}.bak`;
      try {
        await copyFile(keymapPath, backupPath);
      } catch {
        return `${color("warning", theme)("Error backing up existing Zed keymap. Bailing out.")}${EOL}${source_default.dim(`See ${formatPathLink(keymapPath)}`)}${EOL}${source_default.dim(`Backup path: ${formatPathLink(backupPath)}`)}${EOL}`;
      }
    }
    let keymap;
    try {
      keymap = jsonParse(keymapContent);
      if (!Array.isArray(keymap)) {
        keymap = [];
      }
    } catch {
      keymap = [];
    }
    keymap.push({
      context: "Terminal",
      bindings: {
        "shift-enter": ["terminal::SendText", "\x1B\r"]
      }
    });
    await writeFile(keymapPath, jsonStringify(keymap, null, 2) + `
`, {
      encoding: "utf-8"
    });
    return `${color("success", theme)("Installed Zed Shift+Enter key binding")}${EOL}${source_default.dim(`See ${formatPathLink(keymapPath)}`)}${EOL}`;
  } catch (error) {
    logError(error);
    throw new Error("Failed to install Zed Shift+Enter key binding");
  }
}
var EOL = `
`, NATIVE_CSIU_TERMINALS;
var init_terminalSetup = __esm(() => {
  init_source();
  init_src();
  init_src();
  init_projectOnboardingState();
  init_appleTerminalBackup();
  init_completionCache();
  init_config();
  init_env();
  init_errors();
  init_execFileNoThrow();
  init_json();
  init_log();
  init_platform();
  init_slowOperations();
  NATIVE_CSIU_TERMINALS = {
    ghostty: "Ghostty",
    kitty: "Kitty",
    "iTerm.app": "iTerm2",
    WezTerm: "WezTerm",
    WarpTerminal: "Warp"
  };
});

export { getSteps, maybeMarkProjectOnboardingComplete, shouldShowProjectOnboarding, incrementProjectOnboardingSeenCount, init_projectOnboardingState, checkAndRestoreTerminalBackup, init_appleTerminalBackup, getNativeCSIuTerminalDisplayName, shouldOfferTerminalSetup, setupTerminal, isShiftEnterKeyBindingInstalled, hasUsedBackslashReturn, markBackslashReturnUsed, call, init_terminalSetup };
