// @bun
import {
  init_bundledMode,
  isRunningWithBun
} from "./chunk-xhesahm0.js";
import {
  fileSuffixForOauthConfig,
  init_oauth
} from "./chunk-rh5a2rg9.js";
import {
  init_which,
  which,
  whichSync
} from "./chunk-jkh5s8ct.js";
import {
  getFsImplementation,
  init_fsOperations
} from "./chunk-rpbc3b7k.js";
import {
  getClaudeConfigHomeDir,
  init_envUtils,
  isEnvTruthy
} from "./chunk-hxhwzgnn.js";
import {
  init_memoize,
  memoize_default
} from "./chunk-qx8z601m.js";
import {
  __esm,
  __require
} from "./chunk-qp2qdcda.js";

// src/utils/findExecutable.ts
function findExecutable(exe, args) {
  const resolved = whichSync(exe);
  return { cmd: resolved ?? exe, args };
}
var init_findExecutable = __esm(() => {
  init_which();
});

// src/utils/env.ts
import { homedir } from "os";
import { join } from "path";
async function isCommandAvailable(command) {
  try {
    return !!await which(command);
  } catch {
    return false;
  }
}
function isConductor() {
  return process.env.__CFBundleIdentifier === "com.conductor.app";
}
function detectTerminal() {
  if (process.env.CURSOR_TRACE_ID)
    return "cursor";
  if (process.env.VSCODE_GIT_ASKPASS_MAIN?.includes("cursor")) {
    return "cursor";
  }
  if (process.env.VSCODE_GIT_ASKPASS_MAIN?.includes("windsurf")) {
    return "windsurf";
  }
  if (process.env.VSCODE_GIT_ASKPASS_MAIN?.includes("antigravity")) {
    return "antigravity";
  }
  const bundleId = process.env.__CFBundleIdentifier?.toLowerCase();
  if (bundleId?.includes("vscodium"))
    return "codium";
  if (bundleId?.includes("windsurf"))
    return "windsurf";
  if (bundleId?.includes("com.google.android.studio"))
    return "androidstudio";
  if (bundleId) {
    for (const ide of JETBRAINS_IDES) {
      if (bundleId.includes(ide))
        return ide;
    }
  }
  if (process.env.VisualStudioVersion) {
    return "visualstudio";
  }
  if (process.env.TERMINAL_EMULATOR === "JetBrains-JediTerm") {
    if (process.platform === "darwin")
      return "pycharm";
    return "pycharm";
  }
  if (process.env.TERM === "xterm-ghostty") {
    return "ghostty";
  }
  if (process.env.TERM?.includes("kitty")) {
    return "kitty";
  }
  if (process.env.TERM_PROGRAM) {
    return process.env.TERM_PROGRAM;
  }
  if (process.env.TMUX)
    return "tmux";
  if (process.env.STY)
    return "screen";
  if (process.env.KONSOLE_VERSION)
    return "konsole";
  if (process.env.GNOME_TERMINAL_SERVICE)
    return "gnome-terminal";
  if (process.env.XTERM_VERSION)
    return "xterm";
  if (process.env.VTE_VERSION)
    return "vte-based";
  if (process.env.TERMINATOR_UUID)
    return "terminator";
  if (process.env.KITTY_WINDOW_ID) {
    return "kitty";
  }
  if (process.env.ALACRITTY_LOG)
    return "alacritty";
  if (process.env.TILIX_ID)
    return "tilix";
  if (process.env.WT_SESSION)
    return "windows-terminal";
  if (process.env.SESSIONNAME && process.env.TERM === "cygwin")
    return "cygwin";
  if (process.env.MSYSTEM)
    return process.env.MSYSTEM.toLowerCase();
  if (process.env.ConEmuANSI || process.env.ConEmuPID || process.env.ConEmuTask) {
    return "conemu";
  }
  if (process.env.WSL_DISTRO_NAME)
    return `wsl-${process.env.WSL_DISTRO_NAME}`;
  if (isSSHSession()) {
    return "ssh-session";
  }
  if (process.env.TERM) {
    const term = process.env.TERM;
    if (term.includes("alacritty"))
      return "alacritty";
    if (term.includes("rxvt"))
      return "rxvt";
    if (term.includes("termite"))
      return "termite";
    return process.env.TERM;
  }
  if (!process.stdout.isTTY)
    return "non-interactive";
  return null;
}
function isSSHSession() {
  return !!(process.env.SSH_CONNECTION || process.env.SSH_CLIENT || process.env.SSH_TTY);
}
function getHostPlatformForAnalytics() {
  const override = process.env.CLAUDE_CODE_HOST_PLATFORM;
  if (override === "win32" || override === "darwin" || override === "linux") {
    return override;
  }
  return env.platform;
}
var getGlobalClaudeFile, hasInternetAccess, detectPackageManagers, detectRuntimes, isWslEnvironment, isNpmFromWindowsPath, JETBRAINS_IDES, detectDeploymentEnvironment, env;
var init_env = __esm(() => {
  init_memoize();
  init_oauth();
  init_bundledMode();
  init_envUtils();
  init_findExecutable();
  init_fsOperations();
  init_which();
  getGlobalClaudeFile = memoize_default(() => {
    if (getFsImplementation().existsSync(join(getClaudeConfigHomeDir(), ".config.json"))) {
      return join(getClaudeConfigHomeDir(), ".config.json");
    }
    const filename = `.claude${fileSuffixForOauthConfig()}.json`;
    return join(process.env.CLAUDE_CONFIG_DIR || homedir(), filename);
  });
  hasInternetAccess = memoize_default(async () => {
    try {
      const { default: axiosClient } = await import("./chunk-a4qjc0sd.js");
      await axiosClient.head("http://1.1.1.1", {
        signal: AbortSignal.timeout(1000)
      });
      return true;
    } catch {
      return false;
    }
  });
  detectPackageManagers = memoize_default(async () => {
    const packageManagers = [];
    if (await isCommandAvailable("npm"))
      packageManagers.push("npm");
    if (await isCommandAvailable("yarn"))
      packageManagers.push("yarn");
    if (await isCommandAvailable("pnpm"))
      packageManagers.push("pnpm");
    return packageManagers;
  });
  detectRuntimes = memoize_default(async () => {
    const runtimes = [];
    if (await isCommandAvailable("bun"))
      runtimes.push("bun");
    if (await isCommandAvailable("deno"))
      runtimes.push("deno");
    if (await isCommandAvailable("node"))
      runtimes.push("node");
    return runtimes;
  });
  isWslEnvironment = memoize_default(() => {
    try {
      return getFsImplementation().existsSync("/proc/sys/fs/binfmt_misc/WSLInterop");
    } catch (_error) {
      return false;
    }
  });
  isNpmFromWindowsPath = memoize_default(() => {
    try {
      if (!isWslEnvironment()) {
        return false;
      }
      const { cmd } = findExecutable("npm", []);
      return cmd.startsWith("/mnt/c/");
    } catch (_error) {
      return false;
    }
  });
  JETBRAINS_IDES = [
    "pycharm",
    "intellij",
    "webstorm",
    "phpstorm",
    "rubymine",
    "clion",
    "goland",
    "rider",
    "datagrip",
    "appcode",
    "dataspell",
    "aqua",
    "gateway",
    "fleet",
    "jetbrains",
    "androidstudio"
  ];
  detectDeploymentEnvironment = memoize_default(() => {
    if (isEnvTruthy(process.env.CODESPACES))
      return "codespaces";
    if (process.env.GITPOD_WORKSPACE_ID)
      return "gitpod";
    if (process.env.REPL_ID || process.env.REPL_SLUG)
      return "replit";
    if (process.env.PROJECT_DOMAIN)
      return "glitch";
    if (isEnvTruthy(process.env.VERCEL))
      return "vercel";
    if (process.env.RAILWAY_ENVIRONMENT_NAME || process.env.RAILWAY_SERVICE_NAME) {
      return "railway";
    }
    if (isEnvTruthy(process.env.RENDER))
      return "render";
    if (isEnvTruthy(process.env.NETLIFY))
      return "netlify";
    if (process.env.DYNO)
      return "heroku";
    if (process.env.FLY_APP_NAME || process.env.FLY_MACHINE_ID)
      return "fly.io";
    if (isEnvTruthy(process.env.CF_PAGES))
      return "cloudflare-pages";
    if (process.env.DENO_DEPLOYMENT_ID)
      return "deno-deploy";
    if (process.env.AWS_LAMBDA_FUNCTION_NAME)
      return "aws-lambda";
    if (process.env.AWS_EXECUTION_ENV === "AWS_ECS_FARGATE")
      return "aws-fargate";
    if (process.env.AWS_EXECUTION_ENV === "AWS_ECS_EC2")
      return "aws-ecs";
    try {
      const uuid = getFsImplementation().readFileSync("/sys/hypervisor/uuid", { encoding: "utf8" }).trim().toLowerCase();
      if (uuid.startsWith("ec2"))
        return "aws-ec2";
    } catch {}
    if (process.env.K_SERVICE)
      return "gcp-cloud-run";
    if (process.env.GOOGLE_CLOUD_PROJECT)
      return "gcp";
    if (process.env.WEBSITE_SITE_NAME || process.env.WEBSITE_SKU)
      return "azure-app-service";
    if (process.env.AZURE_FUNCTIONS_ENVIRONMENT)
      return "azure-functions";
    if (process.env.APP_URL?.includes("ondigitalocean.app")) {
      return "digitalocean-app-platform";
    }
    if (process.env.SPACE_CREATOR_USER_ID)
      return "huggingface-spaces";
    if (isEnvTruthy(process.env.GITHUB_ACTIONS))
      return "github-actions";
    if (isEnvTruthy(process.env.GITLAB_CI))
      return "gitlab-ci";
    if (process.env.CIRCLECI)
      return "circleci";
    if (process.env.BUILDKITE)
      return "buildkite";
    if (isEnvTruthy(process.env.CI))
      return "ci";
    if (process.env.KUBERNETES_SERVICE_HOST)
      return "kubernetes";
    try {
      if (getFsImplementation().existsSync("/.dockerenv"))
        return "docker";
    } catch {}
    if (env.platform === "darwin")
      return "unknown-darwin";
    if (env.platform === "linux")
      return "unknown-linux";
    if (env.platform === "win32")
      return "unknown-win32";
    return "unknown";
  });
  env = {
    hasInternetAccess,
    isCI: isEnvTruthy(process.env.CI),
    platform: ["win32", "darwin"].includes(process.platform) ? process.platform : "linux",
    arch: process.arch,
    nodeVersion: process.version,
    terminal: detectTerminal(),
    isSSH: isSSHSession,
    getPackageManagers: detectPackageManagers,
    getRuntimes: detectRuntimes,
    isRunningWithBun: memoize_default(isRunningWithBun),
    isWslEnvironment,
    isNpmFromWindowsPath,
    isConductor,
    detectDeploymentEnvironment
  };
});

export { findExecutable, init_findExecutable, getGlobalClaudeFile, JETBRAINS_IDES, env, getHostPlatformForAnalytics, init_env };
