// @bun
import {
  getPlatform,
  init_platform
} from "./chunk-0rbpfkda.js";
import {
  init_normalization,
  normalizeNameForMCP
} from "./chunk-3c25bcsw.js";
import {
  execFileNoThrow,
  init_execFileNoThrow
} from "./chunk-qcwbd71h.js";
import {
  init_which,
  which
} from "./chunk-jkh5s8ct.js";
import {
  init_debug,
  init_errors,
  isFsInaccessible,
  logForDebugging
} from "./chunk-rpbc3b7k.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/claudeInChrome/common.ts
import { readdirSync } from "fs";
import { stat } from "fs/promises";
import { homedir, platform, tmpdir, userInfo } from "os";
import { join } from "path";
function getAllBrowserDataPaths() {
  const platform2 = getPlatform();
  const home = homedir();
  const paths = [];
  for (const browserId of BROWSER_DETECTION_ORDER) {
    const config = CHROMIUM_BROWSERS[browserId];
    let dataPath;
    switch (platform2) {
      case "macos":
        dataPath = config.macos.dataPath;
        break;
      case "linux":
      case "wsl":
        dataPath = config.linux.dataPath;
        break;
      case "windows": {
        if (config.windows.dataPath.length > 0) {
          const appDataBase = config.windows.useRoaming ? join(home, "AppData", "Roaming") : join(home, "AppData", "Local");
          paths.push({
            browser: browserId,
            path: join(appDataBase, ...config.windows.dataPath)
          });
        }
        continue;
      }
    }
    if (dataPath && dataPath.length > 0) {
      paths.push({
        browser: browserId,
        path: join(home, ...dataPath)
      });
    }
  }
  return paths;
}
function getAllNativeMessagingHostsDirs() {
  const platform2 = getPlatform();
  const home = homedir();
  const paths = [];
  for (const browserId of BROWSER_DETECTION_ORDER) {
    const config = CHROMIUM_BROWSERS[browserId];
    switch (platform2) {
      case "macos":
        if (config.macos.nativeMessagingPath.length > 0) {
          paths.push({
            browser: browserId,
            path: join(home, ...config.macos.nativeMessagingPath)
          });
        }
        break;
      case "linux":
      case "wsl":
        if (config.linux.nativeMessagingPath.length > 0) {
          paths.push({
            browser: browserId,
            path: join(home, ...config.linux.nativeMessagingPath)
          });
        }
        break;
      case "windows":
        break;
    }
  }
  return paths;
}
function getAllWindowsRegistryKeys() {
  const keys = [];
  for (const browserId of BROWSER_DETECTION_ORDER) {
    const config = CHROMIUM_BROWSERS[browserId];
    if (config.windows.registryKey) {
      keys.push({
        browser: browserId,
        key: config.windows.registryKey
      });
    }
  }
  return keys;
}
async function detectAvailableBrowser() {
  const platform2 = getPlatform();
  for (const browserId of BROWSER_DETECTION_ORDER) {
    const config = CHROMIUM_BROWSERS[browserId];
    switch (platform2) {
      case "macos": {
        const appPath = `/Applications/${config.macos.appName}.app`;
        try {
          const stats = await stat(appPath);
          if (stats.isDirectory()) {
            logForDebugging(`[MiMo in Chrome] Detected browser: ${config.name}`);
            return browserId;
          }
        } catch (e) {
          if (!isFsInaccessible(e))
            throw e;
        }
        break;
      }
      case "wsl":
      case "linux": {
        for (const binary of config.linux.binaries) {
          if (await which(binary).catch(() => null)) {
            logForDebugging(`[MiMo in Chrome] Detected browser: ${config.name}`);
            return browserId;
          }
        }
        break;
      }
      case "windows": {
        const home = homedir();
        if (config.windows.dataPath.length > 0) {
          const appDataBase = config.windows.useRoaming ? join(home, "AppData", "Roaming") : join(home, "AppData", "Local");
          const dataPath = join(appDataBase, ...config.windows.dataPath);
          try {
            const stats = await stat(dataPath);
            if (stats.isDirectory()) {
              logForDebugging(`[MiMo in Chrome] Detected browser: ${config.name}`);
              return browserId;
            }
          } catch (e) {
            if (!isFsInaccessible(e))
              throw e;
          }
        }
        break;
      }
    }
  }
  return null;
}
function isClaudeInChromeMCPServer(name) {
  return normalizeNameForMCP(name) === CLAUDE_IN_CHROME_MCP_SERVER_NAME;
}
function trackClaudeInChromeTabId(tabId) {
  if (trackedTabIds.size >= MAX_TRACKED_TABS && !trackedTabIds.has(tabId)) {
    trackedTabIds.clear();
  }
  trackedTabIds.add(tabId);
}
function isTrackedClaudeInChromeTabId(tabId) {
  return trackedTabIds.has(tabId);
}
async function openInChrome(url) {
  const currentPlatform = getPlatform();
  const browser = await detectAvailableBrowser();
  if (!browser) {
    logForDebugging("[MiMo in Chrome] No compatible browser found");
    return false;
  }
  const config = CHROMIUM_BROWSERS[browser];
  switch (currentPlatform) {
    case "macos": {
      const { code } = await execFileNoThrow("open", [
        "-a",
        config.macos.appName,
        url
      ]);
      return code === 0;
    }
    case "windows": {
      const { code } = await execFileNoThrow("rundll32", ["url,OpenURL", url]);
      return code === 0;
    }
    case "wsl":
    case "linux": {
      for (const binary of config.linux.binaries) {
        const { code } = await execFileNoThrow(binary, [url]);
        if (code === 0) {
          return true;
        }
      }
      return false;
    }
    default:
      return false;
  }
}
function getSocketDir() {
  return `/tmp/claude-mcp-browser-bridge-${getUsername()}`;
}
function getSecureSocketPath() {
  if (platform() === "win32") {
    return `\\\\.\\pipe\\${getSocketName()}`;
  }
  return join(getSocketDir(), `${process.pid}.sock`);
}
function getAllSocketPaths() {
  if (platform() === "win32") {
    return [`\\\\.\\pipe\\${getSocketName()}`];
  }
  const paths = [];
  const socketDir = getSocketDir();
  try {
    const files = readdirSync(socketDir);
    for (const file of files) {
      if (file.endsWith(".sock")) {
        paths.push(join(socketDir, file));
      }
    }
  } catch {}
  const legacyName = `claude-mcp-browser-bridge-${getUsername()}`;
  const legacyTmpdir = join(tmpdir(), legacyName);
  const legacyTmp = `/tmp/${legacyName}`;
  if (!paths.includes(legacyTmpdir)) {
    paths.push(legacyTmpdir);
  }
  if (legacyTmpdir !== legacyTmp && !paths.includes(legacyTmp)) {
    paths.push(legacyTmp);
  }
  return paths;
}
function getSocketName() {
  return `claude-mcp-browser-bridge-${getUsername()}`;
}
function getUsername() {
  try {
    return userInfo().username || "default";
  } catch {
    return process.env.USER || process.env.USERNAME || "default";
  }
}
var CLAUDE_IN_CHROME_MCP_SERVER_NAME = "claude-in-chrome", CHROMIUM_BROWSERS, BROWSER_DETECTION_ORDER, MAX_TRACKED_TABS = 200, trackedTabIds;
var init_common = __esm(() => {
  init_normalization();
  init_debug();
  init_errors();
  init_execFileNoThrow();
  init_platform();
  init_which();
  CHROMIUM_BROWSERS = {
    chrome: {
      name: "Google Chrome",
      macos: {
        appName: "Google Chrome",
        dataPath: ["Library", "Application Support", "Google", "Chrome"],
        nativeMessagingPath: [
          "Library",
          "Application Support",
          "Google",
          "Chrome",
          "NativeMessagingHosts"
        ]
      },
      linux: {
        binaries: ["google-chrome", "google-chrome-stable"],
        dataPath: [".config", "google-chrome"],
        nativeMessagingPath: [".config", "google-chrome", "NativeMessagingHosts"]
      },
      windows: {
        dataPath: ["Google", "Chrome", "User Data"],
        registryKey: "HKCU\\Software\\Google\\Chrome\\NativeMessagingHosts"
      }
    },
    brave: {
      name: "Brave",
      macos: {
        appName: "Brave Browser",
        dataPath: [
          "Library",
          "Application Support",
          "BraveSoftware",
          "Brave-Browser"
        ],
        nativeMessagingPath: [
          "Library",
          "Application Support",
          "BraveSoftware",
          "Brave-Browser",
          "NativeMessagingHosts"
        ]
      },
      linux: {
        binaries: ["brave-browser", "brave"],
        dataPath: [".config", "BraveSoftware", "Brave-Browser"],
        nativeMessagingPath: [
          ".config",
          "BraveSoftware",
          "Brave-Browser",
          "NativeMessagingHosts"
        ]
      },
      windows: {
        dataPath: ["BraveSoftware", "Brave-Browser", "User Data"],
        registryKey: "HKCU\\Software\\BraveSoftware\\Brave-Browser\\NativeMessagingHosts"
      }
    },
    arc: {
      name: "Arc",
      macos: {
        appName: "Arc",
        dataPath: ["Library", "Application Support", "Arc", "User Data"],
        nativeMessagingPath: [
          "Library",
          "Application Support",
          "Arc",
          "User Data",
          "NativeMessagingHosts"
        ]
      },
      linux: {
        binaries: [],
        dataPath: [],
        nativeMessagingPath: []
      },
      windows: {
        dataPath: ["Arc", "User Data"],
        registryKey: "HKCU\\Software\\ArcBrowser\\Arc\\NativeMessagingHosts"
      }
    },
    chromium: {
      name: "Chromium",
      macos: {
        appName: "Chromium",
        dataPath: ["Library", "Application Support", "Chromium"],
        nativeMessagingPath: [
          "Library",
          "Application Support",
          "Chromium",
          "NativeMessagingHosts"
        ]
      },
      linux: {
        binaries: ["chromium", "chromium-browser"],
        dataPath: [".config", "chromium"],
        nativeMessagingPath: [".config", "chromium", "NativeMessagingHosts"]
      },
      windows: {
        dataPath: ["Chromium", "User Data"],
        registryKey: "HKCU\\Software\\Chromium\\NativeMessagingHosts"
      }
    },
    edge: {
      name: "Microsoft Edge",
      macos: {
        appName: "Microsoft Edge",
        dataPath: ["Library", "Application Support", "Microsoft Edge"],
        nativeMessagingPath: [
          "Library",
          "Application Support",
          "Microsoft Edge",
          "NativeMessagingHosts"
        ]
      },
      linux: {
        binaries: ["microsoft-edge", "microsoft-edge-stable"],
        dataPath: [".config", "microsoft-edge"],
        nativeMessagingPath: [
          ".config",
          "microsoft-edge",
          "NativeMessagingHosts"
        ]
      },
      windows: {
        dataPath: ["Microsoft", "Edge", "User Data"],
        registryKey: "HKCU\\Software\\Microsoft\\Edge\\NativeMessagingHosts"
      }
    },
    vivaldi: {
      name: "Vivaldi",
      macos: {
        appName: "Vivaldi",
        dataPath: ["Library", "Application Support", "Vivaldi"],
        nativeMessagingPath: [
          "Library",
          "Application Support",
          "Vivaldi",
          "NativeMessagingHosts"
        ]
      },
      linux: {
        binaries: ["vivaldi", "vivaldi-stable"],
        dataPath: [".config", "vivaldi"],
        nativeMessagingPath: [".config", "vivaldi", "NativeMessagingHosts"]
      },
      windows: {
        dataPath: ["Vivaldi", "User Data"],
        registryKey: "HKCU\\Software\\Vivaldi\\NativeMessagingHosts"
      }
    },
    opera: {
      name: "Opera",
      macos: {
        appName: "Opera",
        dataPath: ["Library", "Application Support", "com.operasoftware.Opera"],
        nativeMessagingPath: [
          "Library",
          "Application Support",
          "com.operasoftware.Opera",
          "NativeMessagingHosts"
        ]
      },
      linux: {
        binaries: ["opera"],
        dataPath: [".config", "opera"],
        nativeMessagingPath: [".config", "opera", "NativeMessagingHosts"]
      },
      windows: {
        dataPath: ["Opera Software", "Opera Stable"],
        registryKey: "HKCU\\Software\\Opera Software\\Opera Stable\\NativeMessagingHosts",
        useRoaming: true
      }
    }
  };
  BROWSER_DETECTION_ORDER = [
    "chrome",
    "brave",
    "arc",
    "edge",
    "chromium",
    "vivaldi",
    "opera"
  ];
  trackedTabIds = new Set;
});

export { CLAUDE_IN_CHROME_MCP_SERVER_NAME, getAllBrowserDataPaths, getAllNativeMessagingHostsDirs, getAllWindowsRegistryKeys, isClaudeInChromeMCPServer, trackClaudeInChromeTabId, isTrackedClaudeInChromeTabId, openInChrome, getSocketDir, getSecureSocketPath, getAllSocketPaths, init_common };
