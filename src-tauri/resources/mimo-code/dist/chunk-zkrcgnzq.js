// @bun
import {
  init_sanitization,
  partiallySanitizeUnicode
} from "./chunk-mcws22k3.js";
import {
  getUserBinDir,
  getXDGDataHome,
  init_xdg
} from "./chunk-et824jj8.js";
import {
  getFeatureValue_CACHED_MAY_BE_STALE,
  getInitialSettings,
  init_growthbook,
  init_settings1 as init_settings
} from "./chunk-1ghcng4e.js";
import {
  init_analytics,
  logEvent
} from "./chunk-f2mhrmww.js";
import {
  execFileNoThrow,
  init_execFileNoThrow
} from "./chunk-qcwbd71h.js";
import {
  init_which,
  which
} from "./chunk-jkh5s8ct.js";
import {
  getErrnoCode,
  init_debug,
  init_errors,
  logForDebugging
} from "./chunk-rpbc3b7k.js";
import {
  getClaudeConfigHomeDir,
  init_envUtils
} from "./chunk-hxhwzgnn.js";
import {
  __esm,
  __export
} from "./chunk-qp2qdcda.js";

// src/utils/deepLink/parseDeepLink.ts
function containsControlChars(s) {
  for (let i = 0;i < s.length; i++) {
    const code = s.charCodeAt(i);
    if (code <= 31 || code === 127) {
      return true;
    }
  }
  return false;
}
function parseDeepLink(uri) {
  const normalized = uri.startsWith(`${DEEP_LINK_PROTOCOL}://`) ? uri : uri.startsWith(`${DEEP_LINK_PROTOCOL}:`) ? uri.replace(`${DEEP_LINK_PROTOCOL}:`, `${DEEP_LINK_PROTOCOL}://`) : null;
  if (!normalized) {
    throw new Error(`Invalid deep link: expected ${DEEP_LINK_PROTOCOL}:// scheme, got "${uri}"`);
  }
  let url;
  try {
    url = new URL(normalized);
  } catch {
    throw new Error(`Invalid deep link URL: "${uri}"`);
  }
  if (url.hostname !== "open") {
    throw new Error(`Unknown deep link action: "${url.hostname}"`);
  }
  const cwd = url.searchParams.get("cwd") ?? undefined;
  const repo = url.searchParams.get("repo") ?? undefined;
  const rawQuery = url.searchParams.get("q");
  if (cwd && !cwd.startsWith("/") && !/^[a-zA-Z]:[/\\]/.test(cwd)) {
    throw new Error(`Invalid cwd in deep link: must be an absolute path, got "${cwd}"`);
  }
  if (cwd && containsControlChars(cwd)) {
    throw new Error("Deep link cwd contains disallowed control characters");
  }
  if (cwd && cwd.length > MAX_CWD_LENGTH) {
    throw new Error(`Deep link cwd exceeds ${MAX_CWD_LENGTH} characters (got ${cwd.length})`);
  }
  if (repo && !REPO_SLUG_PATTERN.test(repo)) {
    throw new Error(`Invalid repo in deep link: expected "owner/repo", got "${repo}"`);
  }
  let query;
  if (rawQuery && rawQuery.trim().length > 0) {
    query = partiallySanitizeUnicode(rawQuery.trim());
    if (containsControlChars(query)) {
      throw new Error("Deep link query contains disallowed control characters");
    }
    if (query.length > MAX_QUERY_LENGTH) {
      throw new Error(`Deep link query exceeds ${MAX_QUERY_LENGTH} characters (got ${query.length})`);
    }
  }
  return { query, cwd, repo };
}
var DEEP_LINK_PROTOCOL = "claude-cli", REPO_SLUG_PATTERN, MAX_QUERY_LENGTH = 5000, MAX_CWD_LENGTH = 4096;
var init_parseDeepLink = __esm(() => {
  init_sanitization();
  REPO_SLUG_PATTERN = /^[\w.-]+\/[\w.-]+$/;
});

// src/utils/deepLink/registerProtocol.ts
var exports_registerProtocol = {};
__export(exports_registerProtocol, {
  registerProtocolHandler: () => registerProtocolHandler,
  isProtocolHandlerCurrent: () => isProtocolHandlerCurrent,
  ensureDeepLinkProtocolRegistered: () => ensureDeepLinkProtocolRegistered,
  MACOS_BUNDLE_ID: () => MACOS_BUNDLE_ID
});
import { promises as fs } from "fs";
import * as os from "os";
import * as path from "path";
function linuxDesktopPath() {
  return path.join(getXDGDataHome(), "applications", DESKTOP_FILE_NAME);
}
function linuxExecLine(claudePath) {
  return `Exec="${claudePath}" --handle-uri %u`;
}
function windowsCommandValue(claudePath) {
  return `"${claudePath}" --handle-uri "%1"`;
}
async function registerMacos(claudePath) {
  const contentsDir = path.join(MACOS_APP_DIR, "Contents");
  try {
    await fs.rm(MACOS_APP_DIR, { recursive: true });
  } catch (e) {
    const code = getErrnoCode(e);
    if (code !== "ENOENT") {
      throw e;
    }
  }
  await fs.mkdir(path.dirname(MACOS_SYMLINK_PATH), { recursive: true });
  const infoPlist = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>CFBundleIdentifier</key>
  <string>${MACOS_BUNDLE_ID}</string>
  <key>CFBundleName</key>
  <string>${APP_NAME}</string>
  <key>CFBundleExecutable</key>
  <string>claude</string>
  <key>CFBundleVersion</key>
  <string>1.0</string>
  <key>CFBundlePackageType</key>
  <string>APPL</string>
  <key>LSBackgroundOnly</key>
  <true/>
  <key>CFBundleURLTypes</key>
  <array>
    <dict>
      <key>CFBundleURLName</key>
      <string>MiMo Code Deep Link</string>
      <key>CFBundleURLSchemes</key>
      <array>
        <string>${DEEP_LINK_PROTOCOL}</string>
      </array>
    </dict>
  </array>
</dict>
</plist>`;
  await fs.writeFile(path.join(contentsDir, "Info.plist"), infoPlist);
  await fs.symlink(claudePath, MACOS_SYMLINK_PATH);
  const lsregister = "/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister";
  await execFileNoThrow(lsregister, ["-R", MACOS_APP_DIR], { useCwd: false });
  logForDebugging(`Registered ${DEEP_LINK_PROTOCOL}:// protocol handler at ${MACOS_APP_DIR}`);
}
async function registerLinux(claudePath) {
  await fs.mkdir(path.dirname(linuxDesktopPath()), { recursive: true });
  const desktopEntry = `[Desktop Entry]
Name=${APP_NAME}
Comment=Handle ${DEEP_LINK_PROTOCOL}:// deep links for MiMo Code
${linuxExecLine(claudePath)}
Type=Application
NoDisplay=true
MimeType=x-scheme-handler/${DEEP_LINK_PROTOCOL};
`;
  await fs.writeFile(linuxDesktopPath(), desktopEntry);
  const xdgMime = await which("xdg-mime");
  if (xdgMime) {
    const { code } = await execFileNoThrow(xdgMime, ["default", DESKTOP_FILE_NAME, `x-scheme-handler/${DEEP_LINK_PROTOCOL}`], { useCwd: false });
    if (code !== 0) {
      throw Object.assign(new Error(`xdg-mime exited with code ${code}`), {
        code: "XDG_MIME_FAILED"
      });
    }
  }
  logForDebugging(`Registered ${DEEP_LINK_PROTOCOL}:// protocol handler at ${linuxDesktopPath()}`);
}
async function registerWindows(claudePath) {
  for (const args of [
    ["add", WINDOWS_REG_KEY, "/ve", "/d", `URL:${APP_NAME}`, "/f"],
    ["add", WINDOWS_REG_KEY, "/v", "URL Protocol", "/d", "", "/f"],
    [
      "add",
      WINDOWS_COMMAND_KEY,
      "/ve",
      "/d",
      windowsCommandValue(claudePath),
      "/f"
    ]
  ]) {
    const { code } = await execFileNoThrow("reg", args, { useCwd: false });
    if (code !== 0) {
      throw Object.assign(new Error(`reg add exited with code ${code}`), {
        code: "REG_FAILED"
      });
    }
  }
  logForDebugging(`Registered ${DEEP_LINK_PROTOCOL}:// protocol handler in Windows registry`);
}
async function registerProtocolHandler(claudePath) {
  const resolved = claudePath ?? await resolveClaudePath();
  switch (process.platform) {
    case "darwin":
      await registerMacos(resolved);
      break;
    case "linux":
      await registerLinux(resolved);
      break;
    case "win32":
      await registerWindows(resolved);
      break;
    default:
      throw new Error(`Unsupported platform: ${process.platform}`);
  }
}
async function resolveClaudePath() {
  const binaryName = process.platform === "win32" ? "claude.exe" : "claude";
  const stablePath = path.join(getUserBinDir(), binaryName);
  try {
    await fs.realpath(stablePath);
    return stablePath;
  } catch {
    return process.execPath;
  }
}
async function isProtocolHandlerCurrent(claudePath) {
  try {
    switch (process.platform) {
      case "darwin": {
        const target = await fs.readlink(MACOS_SYMLINK_PATH);
        return target === claudePath;
      }
      case "linux": {
        const content = await fs.readFile(linuxDesktopPath(), "utf8");
        return content.includes(linuxExecLine(claudePath));
      }
      case "win32": {
        const { stdout, code } = await execFileNoThrow("reg", ["query", WINDOWS_COMMAND_KEY, "/ve"], { useCwd: false });
        return code === 0 && stdout.includes(windowsCommandValue(claudePath));
      }
      default:
        return false;
    }
  } catch {
    return false;
  }
}
async function ensureDeepLinkProtocolRegistered() {
  if (getInitialSettings().disableDeepLinkRegistration === "disable") {
    return;
  }
  if (!getFeatureValue_CACHED_MAY_BE_STALE("tengu_lodestone_enabled", false)) {
    return;
  }
  const claudePath = await resolveClaudePath();
  if (await isProtocolHandlerCurrent(claudePath)) {
    return;
  }
  const failureMarkerPath = path.join(getClaudeConfigHomeDir(), ".deep-link-register-failed");
  try {
    const stat = await fs.stat(failureMarkerPath);
    if (Date.now() - stat.mtimeMs < FAILURE_BACKOFF_MS) {
      return;
    }
  } catch {}
  try {
    await registerProtocolHandler(claudePath);
    logEvent("tengu_deep_link_registered", { success: true });
    logForDebugging("Auto-registered claude-cli:// deep link protocol handler");
    await fs.rm(failureMarkerPath, { force: true }).catch(() => {});
  } catch (error) {
    const code = getErrnoCode(error);
    logEvent("tengu_deep_link_registered", {
      success: false,
      error_code: code
    });
    logForDebugging(`Failed to auto-register deep link protocol handler: ${error instanceof Error ? error.message : String(error)}`, { level: "warn" });
    if (code === "EACCES" || code === "ENOSPC") {
      await fs.writeFile(failureMarkerPath, "").catch(() => {});
    }
  }
}
var MACOS_BUNDLE_ID = "com.anthropic.mimo-code-url-handler", APP_NAME = "MiMo Code URL Handler", DESKTOP_FILE_NAME = "mimo-code-url-handler.desktop", MACOS_APP_NAME = "MiMo Code URL Handler.app", MACOS_APP_DIR, MACOS_SYMLINK_PATH, WINDOWS_REG_KEY, WINDOWS_COMMAND_KEY, FAILURE_BACKOFF_MS;
var init_registerProtocol = __esm(() => {
  init_parseDeepLink();
  init_growthbook();
  init_analytics();
  init_debug();
  init_envUtils();
  init_errors();
  init_execFileNoThrow();
  init_settings();
  init_which();
  init_xdg();
  MACOS_APP_DIR = path.join(os.homedir(), "Applications", MACOS_APP_NAME);
  MACOS_SYMLINK_PATH = path.join(MACOS_APP_DIR, "Contents", "MacOS", "claude");
  WINDOWS_REG_KEY = `HKEY_CURRENT_USER\\Software\\Classes\\${DEEP_LINK_PROTOCOL}`;
  WINDOWS_COMMAND_KEY = `${WINDOWS_REG_KEY}\\shell\\open\\command`;
  FAILURE_BACKOFF_MS = 24 * 60 * 60 * 1000;
});

export { parseDeepLink, init_parseDeepLink, MACOS_BUNDLE_ID, exports_registerProtocol, init_registerProtocol };
