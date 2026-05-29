// @bun
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
  init_log,
  logError
} from "./chunk-w5ahy59y.js";
import {
  init_debug,
  init_errors,
  isENOENT,
  logForDebugging
} from "./chunk-rpbc3b7k.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/completionCache.ts
import { mkdir, readFile, writeFile } from "fs/promises";
import { homedir } from "os";
import { dirname, join } from "path";
import { pathToFileURL } from "url";
function detectShell() {
  const shell = process.env.SHELL || "";
  const home = homedir();
  const claudeDir = join(home, ".claude");
  if (shell.endsWith("/zsh") || shell.endsWith("/zsh.exe")) {
    const cacheFile = join(claudeDir, "completion.zsh");
    return {
      name: "zsh",
      rcFile: join(home, ".zshrc"),
      cacheFile,
      completionLine: `[[ -f "${cacheFile}" ]] && source "${cacheFile}"`,
      shellFlag: "zsh"
    };
  }
  if (shell.endsWith("/bash") || shell.endsWith("/bash.exe")) {
    const cacheFile = join(claudeDir, "completion.bash");
    return {
      name: "bash",
      rcFile: join(home, ".bashrc"),
      cacheFile,
      completionLine: `[ -f "${cacheFile}" ] && source "${cacheFile}"`,
      shellFlag: "bash"
    };
  }
  if (shell.endsWith("/fish") || shell.endsWith("/fish.exe")) {
    const xdg = process.env.XDG_CONFIG_HOME || join(home, ".config");
    const cacheFile = join(claudeDir, "completion.fish");
    return {
      name: "fish",
      rcFile: join(xdg, "fish", "config.fish"),
      cacheFile,
      completionLine: `[ -f "${cacheFile}" ] && source "${cacheFile}"`,
      shellFlag: "fish"
    };
  }
  return null;
}
function formatPathLink(filePath) {
  if (!supportsHyperlinks()) {
    return filePath;
  }
  const fileUrl = pathToFileURL(filePath).href;
  return `\x1B]8;;${fileUrl}\x07${filePath}\x1B]8;;\x07`;
}
async function setupShellCompletion(theme) {
  const shell = detectShell();
  if (!shell) {
    return "";
  }
  try {
    await mkdir(dirname(shell.cacheFile), { recursive: true });
  } catch (e) {
    logError(e);
    return `${EOL}${color("warning", theme)(`Could not write ${shell.name} completion cache`)}${EOL}${source_default.dim(`Run manually: claude completion ${shell.shellFlag} > ${shell.cacheFile}`)}${EOL}`;
  }
  const claudeBin = process.argv[1] || "claude";
  const result = await execFileNoThrow(claudeBin, [
    "completion",
    shell.shellFlag,
    "--output",
    shell.cacheFile
  ]);
  if (result.code !== 0) {
    return `${EOL}${color("warning", theme)(`Could not generate ${shell.name} shell completions`)}${EOL}${source_default.dim(`Run manually: claude completion ${shell.shellFlag} > ${shell.cacheFile}`)}${EOL}`;
  }
  let existing = "";
  try {
    existing = await readFile(shell.rcFile, { encoding: "utf-8" });
    if (existing.includes("claude completion") || existing.includes(shell.cacheFile)) {
      return `${EOL}${color("success", theme)(`Shell completions updated for ${shell.name}`)}${EOL}${source_default.dim(`See ${formatPathLink(shell.rcFile)}`)}${EOL}`;
    }
  } catch (e) {
    if (!isENOENT(e)) {
      logError(e);
      return `${EOL}${color("warning", theme)(`Could not install ${shell.name} shell completions`)}${EOL}${source_default.dim(`Add this to ${formatPathLink(shell.rcFile)}:`)}${EOL}${source_default.dim(shell.completionLine)}${EOL}`;
    }
  }
  try {
    const configDir = dirname(shell.rcFile);
    await mkdir(configDir, { recursive: true });
    const separator = existing && !existing.endsWith(`
`) ? `
` : "";
    const content = `${existing}${separator}
# MiMo Code shell completions
${shell.completionLine}
`;
    await writeFile(shell.rcFile, content, { encoding: "utf-8" });
    return `${EOL}${color("success", theme)(`Installed ${shell.name} shell completions`)}${EOL}${source_default.dim(`Added to ${formatPathLink(shell.rcFile)}`)}${EOL}${source_default.dim(`Run: source ${shell.rcFile}`)}${EOL}`;
  } catch (error) {
    logError(error);
    return `${EOL}${color("warning", theme)(`Could not install ${shell.name} shell completions`)}${EOL}${source_default.dim(`Add this to ${formatPathLink(shell.rcFile)}:`)}${EOL}${source_default.dim(shell.completionLine)}${EOL}`;
  }
}
async function regenerateCompletionCache() {
  const shell = detectShell();
  if (!shell) {
    return;
  }
  logForDebugging(`update: Regenerating ${shell.name} completion cache`);
  const claudeBin = process.argv[1] || "claude";
  const result = await execFileNoThrow(claudeBin, [
    "completion",
    shell.shellFlag,
    "--output",
    shell.cacheFile
  ]);
  if (result.code !== 0) {
    logForDebugging(`update: Failed to regenerate ${shell.name} completion cache`);
    return;
  }
  logForDebugging(`update: Regenerated ${shell.name} completion cache at ${shell.cacheFile}`);
}
var EOL = `
`;
var init_completionCache = __esm(() => {
  init_source();
  init_src();
  init_src();
  init_debug();
  init_errors();
  init_execFileNoThrow();
  init_log();
});

export { setupShellCompletion, regenerateCompletionCache, init_completionCache };
