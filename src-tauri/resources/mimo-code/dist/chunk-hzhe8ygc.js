// @bun
import {
  __esm
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/is-docker@3.0.0/node_modules/is-docker/index.js
import fs from "fs";
function hasDockerEnv() {
  try {
    fs.statSync("/.dockerenv");
    return true;
  } catch {
    return false;
  }
}
function hasDockerCGroup() {
  try {
    return fs.readFileSync("/proc/self/cgroup", "utf8").includes("docker");
  } catch {
    return false;
  }
}
function isDocker() {
  if (isDockerCached === undefined) {
    isDockerCached = hasDockerEnv() || hasDockerCGroup();
  }
  return isDockerCached;
}
var isDockerCached;
var init_is_docker = () => {};

// node_modules/.bun/is-inside-container@1.0.0/node_modules/is-inside-container/index.js
import fs2 from "fs";
function isInsideContainer() {
  if (cachedResult === undefined) {
    cachedResult = hasContainerEnv() || isDocker();
  }
  return cachedResult;
}
var cachedResult, hasContainerEnv = () => {
  try {
    fs2.statSync("/run/.containerenv");
    return true;
  } catch {
    return false;
  }
};
var init_is_inside_container = __esm(() => {
  init_is_docker();
});

// node_modules/.bun/is-wsl@3.1.1/node_modules/is-wsl/index.js
import process from "process";
import os from "os";
import fs3 from "fs";
var isWsl = () => {
  if (process.platform !== "linux") {
    return false;
  }
  if (os.release().toLowerCase().includes("microsoft")) {
    if (isInsideContainer()) {
      return false;
    }
    return true;
  }
  try {
    if (fs3.readFileSync("/proc/version", "utf8").toLowerCase().includes("microsoft")) {
      return !isInsideContainer();
    }
  } catch {}
  if (fs3.existsSync("/proc/sys/fs/binfmt_misc/WSLInterop") || fs3.existsSync("/run/WSL")) {
    return !isInsideContainer();
  }
  return false;
}, is_wsl_default;
var init_is_wsl = __esm(() => {
  init_is_inside_container();
  is_wsl_default = process.env.__IS_WSL_TEST__ ? isWsl : isWsl();
});

// node_modules/.bun/wsl-utils@0.1.0/node_modules/wsl-utils/index.js
import process2 from "process";
import fs4, { constants as fsConstants } from "fs/promises";
var wslDrivesMountPoint, powerShellPathFromWsl = async () => {
  const mountPoint = await wslDrivesMountPoint();
  return `${mountPoint}c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe`;
}, powerShellPath = async () => {
  if (is_wsl_default) {
    return powerShellPathFromWsl();
  }
  return `${process2.env.SYSTEMROOT || process2.env.windir || String.raw`C:\Windows`}\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`;
};
var init_wsl_utils = __esm(() => {
  init_is_wsl();
  init_is_wsl();
  wslDrivesMountPoint = (() => {
    const defaultMountPoint = "/mnt/";
    let mountPoint;
    return async function() {
      if (mountPoint) {
        return mountPoint;
      }
      const configFilePath = "/etc/wsl.conf";
      let isConfigFileExists = false;
      try {
        await fs4.access(configFilePath, fsConstants.F_OK);
        isConfigFileExists = true;
      } catch {}
      if (!isConfigFileExists) {
        return defaultMountPoint;
      }
      const configContent = await fs4.readFile(configFilePath, { encoding: "utf8" });
      const configMountPoint = /(?<!#.*)root\s*=\s*(?<mountPoint>.*)/g.exec(configContent);
      if (!configMountPoint) {
        return defaultMountPoint;
      }
      mountPoint = configMountPoint.groups.mountPoint.trim();
      mountPoint = mountPoint.endsWith("/") ? mountPoint : `${mountPoint}/`;
      return mountPoint;
    };
  })();
});

// node_modules/.bun/define-lazy-prop@3.0.0/node_modules/define-lazy-prop/index.js
function defineLazyProperty(object, propertyName, valueGetter) {
  const define = (value) => Object.defineProperty(object, propertyName, { value, enumerable: true, writable: true });
  Object.defineProperty(object, propertyName, {
    configurable: true,
    enumerable: true,
    get() {
      const result = valueGetter();
      define(result);
      return result;
    },
    set(value) {
      define(value);
    }
  });
  return object;
}
var init_define_lazy_prop = () => {};

// node_modules/.bun/default-browser-id@5.0.1/node_modules/default-browser-id/index.js
import { promisify } from "util";
import process3 from "process";
import { execFile } from "child_process";
async function defaultBrowserId() {
  if (process3.platform !== "darwin") {
    throw new Error("macOS only");
  }
  const { stdout } = await execFileAsync("defaults", ["read", "com.apple.LaunchServices/com.apple.launchservices.secure", "LSHandlers"]);
  const match = /LSHandlerRoleAll = "(?!-)(?<id>[^"]+?)";\s+?LSHandlerURLScheme = (?:http|https);/.exec(stdout);
  const browserId = match?.groups.id ?? "com.apple.Safari";
  if (browserId === "com.apple.safari") {
    return "com.apple.Safari";
  }
  return browserId;
}
var execFileAsync;
var init_default_browser_id = __esm(() => {
  execFileAsync = promisify(execFile);
});

// node_modules/.bun/run-applescript@7.1.0/node_modules/run-applescript/index.js
import process4 from "process";
import { promisify as promisify2 } from "util";
import { execFile as execFile2, execFileSync } from "child_process";
async function runAppleScript(script, { humanReadableOutput = true, signal } = {}) {
  if (process4.platform !== "darwin") {
    throw new Error("macOS only");
  }
  const outputArguments = humanReadableOutput ? [] : ["-ss"];
  const execOptions = {};
  if (signal) {
    execOptions.signal = signal;
  }
  const { stdout } = await execFileAsync2("osascript", ["-e", script, outputArguments], execOptions);
  return stdout.trim();
}
var execFileAsync2;
var init_run_applescript = __esm(() => {
  execFileAsync2 = promisify2(execFile2);
});

// node_modules/.bun/bundle-name@4.1.0/node_modules/bundle-name/index.js
async function bundleName(bundleId) {
  return runAppleScript(`tell application "Finder" to set app_path to application file id "${bundleId}" as string
tell application "System Events" to get value of property list item "CFBundleName" of property list file (app_path & ":Contents:Info.plist")`);
}
var init_bundle_name = __esm(() => {
  init_run_applescript();
});

// node_modules/.bun/default-browser@5.5.0/node_modules/default-browser/windows.js
import { promisify as promisify3 } from "util";
import { execFile as execFile3 } from "child_process";
async function defaultBrowser(_execFileAsync = execFileAsync3) {
  const { stdout } = await _execFileAsync("reg", [
    "QUERY",
    " HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\Shell\\Associations\\UrlAssociations\\http\\UserChoice",
    "/v",
    "ProgId"
  ]);
  const match = /ProgId\s*REG_SZ\s*(?<id>\S+)/.exec(stdout);
  if (!match) {
    throw new UnknownBrowserError(`Cannot find Windows browser in stdout: ${JSON.stringify(stdout)}`);
  }
  const { id } = match.groups;
  const dotIndex = id.lastIndexOf(".");
  const hyphenIndex = id.lastIndexOf("-");
  const baseIdByDot = dotIndex === -1 ? undefined : id.slice(0, dotIndex);
  const baseIdByHyphen = hyphenIndex === -1 ? undefined : id.slice(0, hyphenIndex);
  return windowsBrowserProgIds[id] ?? windowsBrowserProgIds[baseIdByDot] ?? windowsBrowserProgIds[baseIdByHyphen] ?? { name: id, id };
}
var execFileAsync3, windowsBrowserProgIds, _windowsBrowserProgIdMap, UnknownBrowserError;
var init_windows = __esm(() => {
  execFileAsync3 = promisify3(execFile3);
  windowsBrowserProgIds = {
    MSEdgeHTM: { name: "Edge", id: "com.microsoft.edge" },
    MSEdgeBHTML: { name: "Edge Beta", id: "com.microsoft.edge.beta" },
    MSEdgeDHTML: { name: "Edge Dev", id: "com.microsoft.edge.dev" },
    AppXq0fevzme2pys62n3e0fbqa7peapykr8v: { name: "Edge", id: "com.microsoft.edge.old" },
    ChromeHTML: { name: "Chrome", id: "com.google.chrome" },
    ChromeBHTML: { name: "Chrome Beta", id: "com.google.chrome.beta" },
    ChromeDHTML: { name: "Chrome Dev", id: "com.google.chrome.dev" },
    ChromiumHTM: { name: "Chromium", id: "org.chromium.Chromium" },
    BraveHTML: { name: "Brave", id: "com.brave.Browser" },
    BraveBHTML: { name: "Brave Beta", id: "com.brave.Browser.beta" },
    BraveDHTML: { name: "Brave Dev", id: "com.brave.Browser.dev" },
    BraveSSHTM: { name: "Brave Nightly", id: "com.brave.Browser.nightly" },
    FirefoxURL: { name: "Firefox", id: "org.mozilla.firefox" },
    OperaStable: { name: "Opera", id: "com.operasoftware.Opera" },
    VivaldiHTM: { name: "Vivaldi", id: "com.vivaldi.Vivaldi" },
    "IE.HTTP": { name: "Internet Explorer", id: "com.microsoft.ie" }
  };
  _windowsBrowserProgIdMap = new Map(Object.entries(windowsBrowserProgIds));
  UnknownBrowserError = class UnknownBrowserError extends Error {
  };
});

// node_modules/.bun/default-browser@5.5.0/node_modules/default-browser/index.js
import { promisify as promisify4 } from "util";
import process5 from "process";
import { execFile as execFile4 } from "child_process";
async function defaultBrowser2() {
  if (process5.platform === "darwin") {
    const id = await defaultBrowserId();
    const name = await bundleName(id);
    return { name, id };
  }
  if (process5.platform === "linux") {
    const { stdout } = await execFileAsync4("xdg-mime", ["query", "default", "x-scheme-handler/http"]);
    const id = stdout.trim();
    const name = titleize(id.replace(/.desktop$/, "").replace("-", " "));
    return { name, id };
  }
  if (process5.platform === "win32") {
    return defaultBrowser();
  }
  throw new Error("Only macOS, Linux, and Windows are supported");
}
var execFileAsync4, titleize = (string) => string.toLowerCase().replaceAll(/(?:^|\s|-)\S/g, (x) => x.toUpperCase());
var init_default_browser = __esm(() => {
  init_default_browser_id();
  init_bundle_name();
  init_windows();
  execFileAsync4 = promisify4(execFile4);
});

// node_modules/.bun/open@10.2.0/node_modules/open/index.js
import process6 from "process";
import { Buffer } from "buffer";
import path from "path";
import { fileURLToPath } from "url";
import { promisify as promisify5 } from "util";
import childProcess from "child_process";
import fs5, { constants as fsConstants2 } from "fs/promises";
async function getWindowsDefaultBrowserFromWsl() {
  const powershellPath = await powerShellPath();
  const rawCommand = String.raw`(Get-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\Shell\Associations\UrlAssociations\http\UserChoice").ProgId`;
  const encodedCommand = Buffer.from(rawCommand, "utf16le").toString("base64");
  const { stdout } = await execFile5(powershellPath, [
    "-NoProfile",
    "-NonInteractive",
    "-ExecutionPolicy",
    "Bypass",
    "-EncodedCommand",
    encodedCommand
  ], { encoding: "utf8" });
  const progId = stdout.trim();
  const browserMap = {
    ChromeHTML: "com.google.chrome",
    BraveHTML: "com.brave.Browser",
    MSEdgeHTM: "com.microsoft.edge",
    FirefoxURL: "org.mozilla.firefox"
  };
  return browserMap[progId] ? { id: browserMap[progId] } : {};
}
function detectArchBinary(binary) {
  if (typeof binary === "string" || Array.isArray(binary)) {
    return binary;
  }
  const { [arch]: archBinary } = binary;
  if (!archBinary) {
    throw new Error(`${arch} is not supported`);
  }
  return archBinary;
}
function detectPlatformBinary({ [platform]: platformBinary }, { wsl }) {
  if (wsl && is_wsl_default) {
    return detectArchBinary(wsl);
  }
  if (!platformBinary) {
    throw new Error(`${platform} is not supported`);
  }
  return detectArchBinary(platformBinary);
}
var execFile5, __dirname2, localXdgOpenPath, platform, arch, pTryEach = async (array, mapper) => {
  let latestError;
  for (const item of array) {
    try {
      return await mapper(item);
    } catch (error) {
      latestError = error;
    }
  }
  throw latestError;
}, baseOpen = async (options) => {
  options = {
    wait: false,
    background: false,
    newInstance: false,
    allowNonzeroExitCode: false,
    ...options
  };
  if (Array.isArray(options.app)) {
    return pTryEach(options.app, (singleApp) => baseOpen({
      ...options,
      app: singleApp
    }));
  }
  let { name: app, arguments: appArguments = [] } = options.app ?? {};
  appArguments = [...appArguments];
  if (Array.isArray(app)) {
    return pTryEach(app, (appName) => baseOpen({
      ...options,
      app: {
        name: appName,
        arguments: appArguments
      }
    }));
  }
  if (app === "browser" || app === "browserPrivate") {
    const ids = {
      "com.google.chrome": "chrome",
      "google-chrome.desktop": "chrome",
      "com.brave.Browser": "brave",
      "org.mozilla.firefox": "firefox",
      "firefox.desktop": "firefox",
      "com.microsoft.msedge": "edge",
      "com.microsoft.edge": "edge",
      "com.microsoft.edgemac": "edge",
      "microsoft-edge.desktop": "edge"
    };
    const flags = {
      chrome: "--incognito",
      brave: "--incognito",
      firefox: "--private-window",
      edge: "--inPrivate"
    };
    const browser = is_wsl_default ? await getWindowsDefaultBrowserFromWsl() : await defaultBrowser2();
    if (browser.id in ids) {
      const browserName = ids[browser.id];
      if (app === "browserPrivate") {
        appArguments.push(flags[browserName]);
      }
      return baseOpen({
        ...options,
        app: {
          name: apps[browserName],
          arguments: appArguments
        }
      });
    }
    throw new Error(`${browser.name} is not supported as a default browser`);
  }
  let command;
  const cliArguments = [];
  const childProcessOptions = {};
  if (platform === "darwin") {
    command = "open";
    if (options.wait) {
      cliArguments.push("--wait-apps");
    }
    if (options.background) {
      cliArguments.push("--background");
    }
    if (options.newInstance) {
      cliArguments.push("--new");
    }
    if (app) {
      cliArguments.push("-a", app);
    }
  } else if (platform === "win32" || is_wsl_default && !isInsideContainer() && !app) {
    command = await powerShellPath();
    cliArguments.push("-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass", "-EncodedCommand");
    if (!is_wsl_default) {
      childProcessOptions.windowsVerbatimArguments = true;
    }
    const encodedArguments = ["Start"];
    if (options.wait) {
      encodedArguments.push("-Wait");
    }
    if (app) {
      encodedArguments.push(`"\`"${app}\`""`);
      if (options.target) {
        appArguments.push(options.target);
      }
    } else if (options.target) {
      encodedArguments.push(`"${options.target}"`);
    }
    if (appArguments.length > 0) {
      appArguments = appArguments.map((argument) => `"\`"${argument}\`""`);
      encodedArguments.push("-ArgumentList", appArguments.join(","));
    }
    options.target = Buffer.from(encodedArguments.join(" "), "utf16le").toString("base64");
  } else {
    if (app) {
      command = app;
    } else {
      const isBundled = !__dirname2 || __dirname2 === "/";
      let exeLocalXdgOpen = false;
      try {
        await fs5.access(localXdgOpenPath, fsConstants2.X_OK);
        exeLocalXdgOpen = true;
      } catch {}
      const useSystemXdgOpen = process6.versions.electron ?? (platform === "android" || isBundled || !exeLocalXdgOpen);
      command = useSystemXdgOpen ? "xdg-open" : localXdgOpenPath;
    }
    if (appArguments.length > 0) {
      cliArguments.push(...appArguments);
    }
    if (!options.wait) {
      childProcessOptions.stdio = "ignore";
      childProcessOptions.detached = true;
    }
  }
  if (platform === "darwin" && appArguments.length > 0) {
    cliArguments.push("--args", ...appArguments);
  }
  if (options.target) {
    cliArguments.push(options.target);
  }
  const subprocess = childProcess.spawn(command, cliArguments, childProcessOptions);
  if (options.wait) {
    return new Promise((resolve, reject) => {
      subprocess.once("error", reject);
      subprocess.once("close", (exitCode) => {
        if (!options.allowNonzeroExitCode && exitCode > 0) {
          reject(new Error(`Exited with code ${exitCode}`));
          return;
        }
        resolve(subprocess);
      });
    });
  }
  subprocess.unref();
  return subprocess;
}, open = (target, options) => {
  if (typeof target !== "string") {
    throw new TypeError("Expected a `target`");
  }
  return baseOpen({
    ...options,
    target
  });
}, openApp = (name, options) => {
  if (typeof name !== "string" && !Array.isArray(name)) {
    throw new TypeError("Expected a valid `name`");
  }
  const { arguments: appArguments = [] } = options ?? {};
  if (appArguments !== undefined && appArguments !== null && !Array.isArray(appArguments)) {
    throw new TypeError("Expected `appArguments` as Array type");
  }
  return baseOpen({
    ...options,
    app: {
      name,
      arguments: appArguments
    }
  });
}, apps, open_default;
var init_open = __esm(() => {
  init_wsl_utils();
  init_define_lazy_prop();
  init_default_browser();
  init_is_inside_container();
  execFile5 = promisify5(childProcess.execFile);
  __dirname2 = path.dirname(fileURLToPath(import.meta.url));
  localXdgOpenPath = path.join(__dirname2, "xdg-open");
  ({ platform, arch } = process6);
  apps = {};
  defineLazyProperty(apps, "chrome", () => detectPlatformBinary({
    darwin: "google chrome",
    win32: "chrome",
    linux: ["google-chrome", "google-chrome-stable", "chromium"]
  }, {
    wsl: {
      ia32: "/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe",
      x64: ["/mnt/c/Program Files/Google/Chrome/Application/chrome.exe", "/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe"]
    }
  }));
  defineLazyProperty(apps, "brave", () => detectPlatformBinary({
    darwin: "brave browser",
    win32: "brave",
    linux: ["brave-browser", "brave"]
  }, {
    wsl: {
      ia32: "/mnt/c/Program Files (x86)/BraveSoftware/Brave-Browser/Application/brave.exe",
      x64: ["/mnt/c/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe", "/mnt/c/Program Files (x86)/BraveSoftware/Brave-Browser/Application/brave.exe"]
    }
  }));
  defineLazyProperty(apps, "firefox", () => detectPlatformBinary({
    darwin: "firefox",
    win32: String.raw`C:\Program Files\Mozilla Firefox\firefox.exe`,
    linux: "firefox"
  }, {
    wsl: "/mnt/c/Program Files/Mozilla Firefox/firefox.exe"
  }));
  defineLazyProperty(apps, "edge", () => detectPlatformBinary({
    darwin: "microsoft edge",
    win32: "msedge",
    linux: ["microsoft-edge", "microsoft-edge-dev"]
  }, {
    wsl: "/mnt/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"
  }));
  defineLazyProperty(apps, "browser", () => "browser");
  defineLazyProperty(apps, "browserPrivate", () => "browserPrivate");
  open_default = open;
});
init_open();

export {
  openApp,
  open_default as default,
  apps
};
