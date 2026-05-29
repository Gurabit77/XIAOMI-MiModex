// @bun
import {
  init_memoize as init_memoize2,
  memoizeWithLRU
} from "./chunk-95xve7f8.js";
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
  init_which,
  whichSync
} from "./chunk-jkh5s8ct.js";
import {
  getFsImplementation,
  init_cleanupRegistry,
  init_debug,
  init_fsOperations,
  init_slowOperations,
  jsonStringify,
  logForDebugging,
  registerCleanup
} from "./chunk-rpbc3b7k.js";
import {
  init_state,
  waitForScrollIdle
} from "./chunk-j5xzpm59.js";
import {
  init_memoize,
  memoize_default
} from "./chunk-qx8z601m.js";
import {
  __esm,
  __require
} from "./chunk-qp2qdcda.js";

// src/constants/files.ts
function hasBinaryExtension(filePath) {
  const ext = filePath.slice(filePath.lastIndexOf(".")).toLowerCase();
  return BINARY_EXTENSIONS.has(ext);
}
function isBinaryContent(buffer) {
  const checkSize = Math.min(buffer.length, BINARY_CHECK_SIZE);
  let nonPrintable = 0;
  for (let i = 0;i < checkSize; i++) {
    const byte = buffer[i];
    if (byte === 0) {
      return true;
    }
    if (byte < 32 && byte !== 9 && byte !== 10 && byte !== 13) {
      nonPrintable++;
    }
  }
  return nonPrintable / checkSize > 0.1;
}
var BINARY_EXTENSIONS, BINARY_CHECK_SIZE = 8192;
var init_files = __esm(() => {
  BINARY_EXTENSIONS = new Set([
    ".png",
    ".jpg",
    ".jpeg",
    ".gif",
    ".bmp",
    ".ico",
    ".webp",
    ".tiff",
    ".tif",
    ".mp4",
    ".mov",
    ".avi",
    ".mkv",
    ".webm",
    ".wmv",
    ".flv",
    ".m4v",
    ".mpeg",
    ".mpg",
    ".mp3",
    ".wav",
    ".ogg",
    ".flac",
    ".aac",
    ".m4a",
    ".wma",
    ".aiff",
    ".opus",
    ".zip",
    ".tar",
    ".gz",
    ".bz2",
    ".7z",
    ".rar",
    ".xz",
    ".z",
    ".tgz",
    ".iso",
    ".exe",
    ".dll",
    ".so",
    ".dylib",
    ".bin",
    ".o",
    ".a",
    ".obj",
    ".lib",
    ".app",
    ".msi",
    ".deb",
    ".rpm",
    ".pdf",
    ".doc",
    ".docx",
    ".xls",
    ".xlsx",
    ".ppt",
    ".pptx",
    ".odt",
    ".ods",
    ".odp",
    ".ttf",
    ".otf",
    ".woff",
    ".woff2",
    ".eot",
    ".pyc",
    ".pyo",
    ".class",
    ".jar",
    ".war",
    ".ear",
    ".node",
    ".wasm",
    ".rlib",
    ".sqlite",
    ".sqlite3",
    ".db",
    ".mdb",
    ".idx",
    ".psd",
    ".ai",
    ".eps",
    ".sketch",
    ".fig",
    ".xd",
    ".blend",
    ".3ds",
    ".max",
    ".swf",
    ".fla",
    ".lockb",
    ".dat",
    ".data"
  ]);
});

// src/utils/diagLogs.ts
import { dirname } from "path";
function logForDiagnosticsNoPII(level, event, data) {
  const logFile = getDiagnosticLogFile();
  if (!logFile) {
    return;
  }
  const entry = {
    timestamp: new Date().toISOString(),
    level,
    event,
    data: data ?? {}
  };
  const fs = getFsImplementation();
  const line = jsonStringify(entry) + `
`;
  try {
    fs.appendFileSync(logFile, line);
  } catch {
    try {
      fs.mkdirSync(dirname(logFile));
      fs.appendFileSync(logFile, line);
    } catch {}
  }
}
function getDiagnosticLogFile() {
  return process.env.CLAUDE_CODE_DIAGNOSTICS_FILE;
}
async function withDiagnosticsTiming(event, fn, getData) {
  const startTime = Date.now();
  logForDiagnosticsNoPII("info", `${event}_started`);
  try {
    const result = await fn();
    const additionalData = getData ? getData(result) : {};
    logForDiagnosticsNoPII("info", `${event}_completed`, {
      duration_ms: Date.now() - startTime,
      ...additionalData
    });
    return result;
  } catch (error) {
    logForDiagnosticsNoPII("error", `${event}_failed`, {
      duration_ms: Date.now() - startTime
    });
    throw error;
  }
}
var init_diagLogs = __esm(() => {
  init_fsOperations();
  init_slowOperations();
});

// src/utils/git/gitConfigParser.ts
import { readFile } from "fs/promises";
import { join } from "path";
async function parseGitConfigValue(gitDir, section, subsection, key) {
  try {
    const config = await readFile(join(gitDir, "config"), "utf-8");
    return parseConfigString(config, section, subsection, key);
  } catch {
    return null;
  }
}
function parseConfigString(config, section, subsection, key) {
  const lines = config.split(`
`);
  const sectionLower = section.toLowerCase();
  const keyLower = key.toLowerCase();
  let inSection = false;
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.length === 0 || trimmed[0] === "#" || trimmed[0] === ";") {
      continue;
    }
    if (trimmed[0] === "[") {
      inSection = matchesSectionHeader(trimmed, sectionLower, subsection);
      continue;
    }
    if (!inSection) {
      continue;
    }
    const parsed = parseKeyValue(trimmed);
    if (parsed && parsed.key.toLowerCase() === keyLower) {
      return parsed.value;
    }
  }
  return null;
}
function parseKeyValue(line) {
  let i = 0;
  while (i < line.length && isKeyChar(line[i])) {
    i++;
  }
  if (i === 0) {
    return null;
  }
  const key = line.slice(0, i);
  while (i < line.length && (line[i] === " " || line[i] === "\t")) {
    i++;
  }
  if (i >= line.length || line[i] !== "=") {
    return null;
  }
  i++;
  while (i < line.length && (line[i] === " " || line[i] === "\t")) {
    i++;
  }
  const value = parseValue(line, i);
  return { key, value };
}
function parseValue(line, start) {
  let result = "";
  let inQuote = false;
  let i = start;
  while (i < line.length) {
    const ch = line[i];
    if (!inQuote && (ch === "#" || ch === ";")) {
      break;
    }
    if (ch === '"') {
      inQuote = !inQuote;
      i++;
      continue;
    }
    if (ch === "\\" && i + 1 < line.length) {
      const next = line[i + 1];
      if (inQuote) {
        switch (next) {
          case "n":
            result += `
`;
            break;
          case "t":
            result += "\t";
            break;
          case "b":
            result += "\b";
            break;
          case '"':
            result += '"';
            break;
          case "\\":
            result += "\\";
            break;
          default:
            result += next;
            break;
        }
        i += 2;
        continue;
      }
      if (next === "\\") {
        result += "\\";
        i += 2;
        continue;
      }
    }
    result += ch;
    i++;
  }
  if (!inQuote) {
    result = trimTrailingWhitespace(result);
  }
  return result;
}
function trimTrailingWhitespace(s) {
  let end = s.length;
  while (end > 0 && (s[end - 1] === " " || s[end - 1] === "\t")) {
    end--;
  }
  return s.slice(0, end);
}
function matchesSectionHeader(line, sectionLower, subsection) {
  let i = 1;
  while (i < line.length && line[i] !== "]" && line[i] !== " " && line[i] !== "\t" && line[i] !== '"') {
    i++;
  }
  const foundSection = line.slice(1, i).toLowerCase();
  if (foundSection !== sectionLower) {
    return false;
  }
  if (subsection === null) {
    return i < line.length && line[i] === "]";
  }
  while (i < line.length && (line[i] === " " || line[i] === "\t")) {
    i++;
  }
  if (i >= line.length || line[i] !== '"') {
    return false;
  }
  i++;
  let foundSubsection = "";
  while (i < line.length && line[i] !== '"') {
    if (line[i] === "\\" && i + 1 < line.length) {
      const next = line[i + 1];
      if (next === "\\" || next === '"') {
        foundSubsection += next;
        i += 2;
        continue;
      }
      foundSubsection += next;
      i += 2;
      continue;
    }
    foundSubsection += line[i];
    i++;
  }
  if (i >= line.length || line[i] !== '"') {
    return false;
  }
  i++;
  if (i >= line.length || line[i] !== "]") {
    return false;
  }
  return foundSubsection === subsection;
}
function isKeyChar(ch) {
  return ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z" || ch >= "0" && ch <= "9" || ch === "-";
}
var init_gitConfigParser = () => {};

// src/utils/git/gitFilesystem.ts
import { unwatchFile, watchFile } from "fs";
import { readdir, readFile as readFile2, stat } from "fs/promises";
import { join as join2, resolve } from "path";
function clearResolveGitDirCache() {
  resolveGitDirCache.clear();
}
async function resolveGitDir(startPath) {
  const cwd = resolve(startPath ?? getCwd());
  const cached = resolveGitDirCache.get(cwd);
  if (cached !== undefined) {
    return cached;
  }
  const root = findGitRoot(cwd);
  if (!root) {
    resolveGitDirCache.set(cwd, null);
    return null;
  }
  const gitPath = join2(root, ".git");
  try {
    const st = await stat(gitPath);
    if (st.isFile()) {
      const content = (await readFile2(gitPath, "utf-8")).trim();
      if (content.startsWith("gitdir:")) {
        const rawDir = content.slice("gitdir:".length).trim();
        const resolved = resolve(root, rawDir);
        resolveGitDirCache.set(cwd, resolved);
        return resolved;
      }
    }
    resolveGitDirCache.set(cwd, gitPath);
    return gitPath;
  } catch {
    resolveGitDirCache.set(cwd, null);
    return null;
  }
}
function isSafeRefName(name) {
  if (!name || name.startsWith("-") || name.startsWith("/")) {
    return false;
  }
  if (name.includes("..")) {
    return false;
  }
  if (name.split("/").some((c) => c === "." || c === "")) {
    return false;
  }
  if (!/^[a-zA-Z0-9/._+@-]+$/.test(name)) {
    return false;
  }
  return true;
}
function isValidGitSha(s) {
  return /^[0-9a-f]{40}$/.test(s) || /^[0-9a-f]{64}$/.test(s);
}
async function readGitHead(gitDir) {
  try {
    const content = (await readFile2(join2(gitDir, "HEAD"), "utf-8")).trim();
    if (content.startsWith("ref:")) {
      const ref = content.slice("ref:".length).trim();
      if (ref.startsWith("refs/heads/")) {
        const name = ref.slice("refs/heads/".length);
        if (!isSafeRefName(name)) {
          return null;
        }
        return { type: "branch", name };
      }
      if (!isSafeRefName(ref)) {
        return null;
      }
      const sha = await resolveRef(gitDir, ref);
      return sha ? { type: "detached", sha } : { type: "detached", sha: "" };
    }
    if (!isValidGitSha(content)) {
      return null;
    }
    return { type: "detached", sha: content };
  } catch {
    return null;
  }
}
async function resolveRef(gitDir, ref) {
  const result = await resolveRefInDir(gitDir, ref);
  if (result) {
    return result;
  }
  const commonDir = await getCommonDir(gitDir);
  if (commonDir && commonDir !== gitDir) {
    return resolveRefInDir(commonDir, ref);
  }
  return null;
}
async function resolveRefInDir(dir, ref) {
  try {
    const content = (await readFile2(join2(dir, ref), "utf-8")).trim();
    if (content.startsWith("ref:")) {
      const target = content.slice("ref:".length).trim();
      if (!isSafeRefName(target)) {
        return null;
      }
      return resolveRef(dir, target);
    }
    if (!isValidGitSha(content)) {
      return null;
    }
    return content;
  } catch {}
  try {
    const packed = await readFile2(join2(dir, "packed-refs"), "utf-8");
    for (const line of packed.split(`
`)) {
      if (line.startsWith("#") || line.startsWith("^")) {
        continue;
      }
      const spaceIdx = line.indexOf(" ");
      if (spaceIdx === -1) {
        continue;
      }
      if (line.slice(spaceIdx + 1) === ref) {
        const sha = line.slice(0, spaceIdx);
        return isValidGitSha(sha) ? sha : null;
      }
    }
  } catch {}
  return null;
}
async function getCommonDir(gitDir) {
  try {
    const content = (await readFile2(join2(gitDir, "commondir"), "utf-8")).trim();
    return resolve(gitDir, content);
  } catch {
    return null;
  }
}
async function readRawSymref(gitDir, refPath, branchPrefix) {
  try {
    const content = (await readFile2(join2(gitDir, refPath), "utf-8")).trim();
    if (content.startsWith("ref:")) {
      const target = content.slice("ref:".length).trim();
      if (target.startsWith(branchPrefix)) {
        const name = target.slice(branchPrefix.length);
        if (!isSafeRefName(name)) {
          return null;
        }
        return name;
      }
    }
  } catch {}
  return null;
}

class GitFileWatcher {
  gitDir = null;
  commonDir = null;
  initialized = false;
  initPromise = null;
  watchedPaths = [];
  branchRefPath = null;
  cache = new Map;
  async ensureStarted() {
    if (this.initialized) {
      return;
    }
    if (this.initPromise) {
      return this.initPromise;
    }
    this.initPromise = this.start();
    return this.initPromise;
  }
  async start() {
    this.gitDir = await resolveGitDir();
    this.initialized = true;
    if (!this.gitDir) {
      return;
    }
    this.commonDir = await getCommonDir(this.gitDir);
    this.watchPath(join2(this.gitDir, "HEAD"), () => {
      this.onHeadChanged();
    });
    this.watchPath(join2(this.commonDir ?? this.gitDir, "config"), () => {
      this.invalidate();
    });
    await this.watchCurrentBranchRef();
    registerCleanup(async () => {
      this.stopWatching();
    });
  }
  watchPath(path, callback) {
    this.watchedPaths.push(path);
    watchFile(path, { interval: WATCH_INTERVAL_MS }, callback);
  }
  async watchCurrentBranchRef() {
    if (!this.gitDir) {
      return;
    }
    const head = await readGitHead(this.gitDir);
    const refsDir = this.commonDir ?? this.gitDir;
    const refPath = head?.type === "branch" ? join2(refsDir, "refs", "heads", head.name) : null;
    if (refPath === this.branchRefPath) {
      return;
    }
    if (this.branchRefPath) {
      unwatchFile(this.branchRefPath);
      this.watchedPaths = this.watchedPaths.filter((p) => p !== this.branchRefPath);
    }
    this.branchRefPath = refPath;
    if (!refPath) {
      return;
    }
    this.watchPath(refPath, () => {
      this.invalidate();
    });
  }
  async onHeadChanged() {
    this.invalidate();
    await waitForScrollIdle();
    await this.watchCurrentBranchRef();
  }
  invalidate() {
    for (const entry of this.cache.values()) {
      entry.dirty = true;
    }
  }
  stopWatching() {
    for (const path of this.watchedPaths) {
      unwatchFile(path);
    }
    this.watchedPaths = [];
    this.branchRefPath = null;
  }
  async get(key, compute) {
    await this.ensureStarted();
    const existing = this.cache.get(key);
    if (existing && !existing.dirty) {
      return existing.value;
    }
    if (existing) {
      existing.dirty = false;
    }
    const value = await compute();
    const entry = this.cache.get(key);
    if (entry && !entry.dirty) {
      entry.value = value;
    }
    if (!entry) {
      this.cache.set(key, { value, dirty: false, compute });
    }
    return value;
  }
  reset() {
    this.stopWatching();
    this.cache.clear();
    this.initialized = false;
    this.initPromise = null;
    this.gitDir = null;
    this.commonDir = null;
  }
}
async function computeBranch() {
  const gitDir = await resolveGitDir();
  if (!gitDir) {
    return "HEAD";
  }
  const head = await readGitHead(gitDir);
  if (!head) {
    return "HEAD";
  }
  return head.type === "branch" ? head.name : "HEAD";
}
async function computeHead() {
  const gitDir = await resolveGitDir();
  if (!gitDir) {
    return "";
  }
  const head = await readGitHead(gitDir);
  if (!head) {
    return "";
  }
  if (head.type === "branch") {
    return await resolveRef(gitDir, `refs/heads/${head.name}`) ?? "";
  }
  return head.sha;
}
async function computeRemoteUrl() {
  const gitDir = await resolveGitDir();
  if (!gitDir) {
    return null;
  }
  const url = await parseGitConfigValue(gitDir, "remote", "origin", "url");
  if (url) {
    return url;
  }
  const commonDir = await getCommonDir(gitDir);
  if (commonDir && commonDir !== gitDir) {
    return parseGitConfigValue(commonDir, "remote", "origin", "url");
  }
  return null;
}
async function computeDefaultBranch() {
  const gitDir = await resolveGitDir();
  if (!gitDir) {
    return "main";
  }
  const commonDir = await getCommonDir(gitDir) ?? gitDir;
  const branchFromSymref = await readRawSymref(commonDir, "refs/remotes/origin/HEAD", "refs/remotes/origin/");
  if (branchFromSymref) {
    return branchFromSymref;
  }
  for (const candidate of ["main", "master"]) {
    const sha = await resolveRef(commonDir, `refs/remotes/origin/${candidate}`);
    if (sha) {
      return candidate;
    }
  }
  return "main";
}
function getCachedBranch() {
  return gitWatcher.get("branch", computeBranch);
}
function getCachedHead() {
  return gitWatcher.get("head", computeHead);
}
function getCachedRemoteUrl() {
  return gitWatcher.get("remoteUrl", computeRemoteUrl);
}
function getCachedDefaultBranch() {
  return gitWatcher.get("defaultBranch", computeDefaultBranch);
}
async function getHeadForDir(cwd) {
  const gitDir = await resolveGitDir(cwd);
  if (!gitDir) {
    return null;
  }
  const head = await readGitHead(gitDir);
  if (!head) {
    return null;
  }
  if (head.type === "branch") {
    return resolveRef(gitDir, `refs/heads/${head.name}`);
  }
  return head.sha;
}
async function readWorktreeHeadSha(worktreePath) {
  let gitDir;
  try {
    const ptr = (await readFile2(join2(worktreePath, ".git"), "utf-8")).trim();
    if (!ptr.startsWith("gitdir:")) {
      return null;
    }
    gitDir = resolve(worktreePath, ptr.slice("gitdir:".length).trim());
  } catch {
    return null;
  }
  const head = await readGitHead(gitDir);
  if (!head) {
    return null;
  }
  if (head.type === "branch") {
    return resolveRef(gitDir, `refs/heads/${head.name}`);
  }
  return head.sha;
}
async function getRemoteUrlForDir(cwd) {
  const gitDir = await resolveGitDir(cwd);
  if (!gitDir) {
    return null;
  }
  const url = await parseGitConfigValue(gitDir, "remote", "origin", "url");
  if (url) {
    return url;
  }
  const commonDir = await getCommonDir(gitDir);
  if (commonDir && commonDir !== gitDir) {
    return parseGitConfigValue(commonDir, "remote", "origin", "url");
  }
  return null;
}
async function isShallowClone() {
  const gitDir = await resolveGitDir();
  if (!gitDir) {
    return false;
  }
  const commonDir = await getCommonDir(gitDir) ?? gitDir;
  try {
    await stat(join2(commonDir, "shallow"));
    return true;
  } catch {
    return false;
  }
}
async function getWorktreeCountFromFs() {
  try {
    const gitDir = await resolveGitDir();
    if (!gitDir) {
      return 0;
    }
    const commonDir = await getCommonDir(gitDir) ?? gitDir;
    const entries = await readdir(join2(commonDir, "worktrees"));
    return entries.length + 1;
  } catch {
    return 1;
  }
}
var resolveGitDirCache, WATCH_INTERVAL_MS = 1000, gitWatcher;
var init_gitFilesystem = __esm(() => {
  init_state();
  init_cleanupRegistry();
  init_cwd();
  init_git();
  init_gitConfigParser();
  resolveGitDirCache = new Map;
  gitWatcher = new GitFileWatcher;
});

// src/utils/git.ts
import { createHash } from "crypto";
import { readFileSync, realpathSync, statSync } from "fs";
import { open, readFile as readFile3, realpath, stat as stat2 } from "fs/promises";
import { basename, dirname as dirname2, join as join3, resolve as resolve2, sep } from "path";
function createFindGitRoot() {
  function wrapper(startPath) {
    const result = findGitRootImpl(startPath);
    return result === GIT_ROOT_NOT_FOUND ? null : result;
  }
  wrapper.cache = findGitRootImpl.cache;
  return wrapper;
}
function createFindCanonicalGitRoot() {
  function wrapper(startPath) {
    const root = findGitRoot(startPath);
    if (!root) {
      return null;
    }
    return resolveCanonicalRoot(root);
  }
  wrapper.cache = resolveCanonicalRoot.cache;
  return wrapper;
}
function getGitDir(cwd) {
  return resolveGitDir(cwd);
}
async function isAtGitRoot() {
  const cwd = getCwd();
  const gitRoot = findGitRoot(cwd);
  if (!gitRoot) {
    return false;
  }
  try {
    const [resolvedCwd, resolvedGitRoot] = await Promise.all([
      realpath(cwd),
      realpath(gitRoot)
    ]);
    return resolvedCwd === resolvedGitRoot;
  } catch {
    return cwd === gitRoot;
  }
}
function normalizeGitRemoteUrl(url) {
  const trimmed = url.trim();
  if (!trimmed)
    return null;
  const sshMatch = trimmed.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
  if (sshMatch && sshMatch[1] && sshMatch[2]) {
    return `${sshMatch[1]}/${sshMatch[2]}`.toLowerCase();
  }
  const urlMatch = trimmed.match(/^(?:https?|ssh):\/\/(?:[^@]+@)?([^/]+)\/(.+?)(?:\.git)?$/);
  if (urlMatch && urlMatch[1] && urlMatch[2]) {
    const host = urlMatch[1];
    const path = urlMatch[2];
    if (isLocalHost(host) && path.startsWith("git/")) {
      const proxyPath = path.slice(4);
      const segments = proxyPath.split("/");
      if (segments.length >= 3 && segments[0].includes(".")) {
        return proxyPath.toLowerCase();
      }
      return `github.com/${proxyPath}`.toLowerCase();
    }
    return `${host}/${path}`.toLowerCase();
  }
  return null;
}
async function getRepoRemoteHash() {
  const remoteUrl = await getRemoteUrl();
  if (!remoteUrl)
    return null;
  const normalized = normalizeGitRemoteUrl(remoteUrl);
  if (!normalized)
    return null;
  const hash = createHash("sha256").update(normalized).digest("hex");
  return hash.substring(0, 16);
}
async function getGitState() {
  try {
    const [
      commitHash,
      branchName,
      remoteUrl,
      isHeadOnRemote,
      isClean,
      worktreeCount
    ] = await Promise.all([
      getHead(),
      getBranch(),
      getRemoteUrl(),
      getIsHeadOnRemote(),
      getIsClean(),
      getWorktreeCount()
    ]);
    return {
      commitHash,
      branchName,
      remoteUrl,
      isHeadOnRemote,
      isClean,
      worktreeCount
    };
  } catch (_) {
    return null;
  }
}
async function getGithubRepo() {
  const { parseGitRemote } = await import("./chunk-dax19ade.js");
  const remoteUrl = await getRemoteUrl();
  if (!remoteUrl) {
    logForDebugging("Local GitHub repo: unknown");
    return null;
  }
  const parsed = parseGitRemote(remoteUrl);
  if (parsed && parsed.host === "github.com") {
    const result = `${parsed.owner}/${parsed.name}`;
    logForDebugging(`Local GitHub repo: ${result}`);
    return result;
  }
  logForDebugging("Local GitHub repo: unknown");
  return null;
}
async function findRemoteBase() {
  const { stdout: trackingBranch, code: trackingCode } = await execFileNoThrow(gitExe(), ["rev-parse", "--abbrev-ref", "--symbolic-full-name", "@{u}"], { preserveOutputOnError: false });
  if (trackingCode === 0 && trackingBranch.trim()) {
    return trackingBranch.trim();
  }
  const { stdout: remoteRefs, code: remoteCode } = await execFileNoThrow(gitExe(), ["remote", "show", "origin", "--", "HEAD"], { preserveOutputOnError: false });
  if (remoteCode === 0) {
    const match = remoteRefs.match(/HEAD branch: (\S+)/);
    if (match && match[1]) {
      return `origin/${match[1]}`;
    }
  }
  const candidates = ["origin/main", "origin/staging", "origin/master"];
  for (const candidate of candidates) {
    const { code } = await execFileNoThrow(gitExe(), ["rev-parse", "--verify", candidate], { preserveOutputOnError: false });
    if (code === 0) {
      return candidate;
    }
  }
  return null;
}
function isShallowClone2() {
  return isShallowClone();
}
async function captureUntrackedFiles() {
  const { stdout, code } = await execFileNoThrow(gitExe(), ["ls-files", "--others", "--exclude-standard"], { preserveOutputOnError: false });
  const trimmed = stdout.trim();
  if (code !== 0 || !trimmed) {
    return [];
  }
  const files = trimmed.split(`
`).filter(Boolean);
  const result = [];
  let totalSize = 0;
  for (const filePath of files) {
    if (result.length >= MAX_FILE_COUNT) {
      logForDebugging(`Untracked file capture: reached max file count (${MAX_FILE_COUNT})`);
      break;
    }
    if (hasBinaryExtension(filePath)) {
      continue;
    }
    try {
      const stats = await stat2(filePath);
      const fileSize = stats.size;
      if (fileSize > MAX_FILE_SIZE_BYTES) {
        logForDebugging(`Untracked file capture: skipping ${filePath} (exceeds ${MAX_FILE_SIZE_BYTES} bytes)`);
        continue;
      }
      if (totalSize + fileSize > MAX_TOTAL_SIZE_BYTES) {
        logForDebugging(`Untracked file capture: reached total size limit (${MAX_TOTAL_SIZE_BYTES} bytes)`);
        break;
      }
      if (fileSize === 0) {
        result.push({ path: filePath, content: "" });
        continue;
      }
      const sniffSize = Math.min(SNIFF_BUFFER_SIZE, fileSize);
      const fd = await open(filePath, "r");
      try {
        const sniffBuf = Buffer.alloc(sniffSize);
        const { bytesRead } = await fd.read(sniffBuf, 0, sniffSize, 0);
        const sniff = sniffBuf.subarray(0, bytesRead);
        if (isBinaryContent(sniff)) {
          continue;
        }
        let content;
        if (fileSize <= sniffSize) {
          content = sniff.toString("utf-8");
        } else {
          content = await readFile3(filePath, "utf-8");
        }
        result.push({ path: filePath, content });
        totalSize += fileSize;
      } finally {
        await fd.close();
      }
    } catch (err) {
      logForDebugging(`Failed to read untracked file ${filePath}: ${err}`);
    }
  }
  return result;
}
async function preserveGitStateForIssue() {
  try {
    const isGit = await getIsGit();
    if (!isGit) {
      return null;
    }
    if (await isShallowClone2()) {
      logForDebugging("Shallow clone detected, using HEAD-only mode for issue");
      const [{ stdout: patch2 }, untrackedFiles2] = await Promise.all([
        execFileNoThrow(gitExe(), ["diff", "HEAD"]),
        captureUntrackedFiles()
      ]);
      return {
        remote_base_sha: null,
        remote_base: null,
        patch: patch2 || "",
        untracked_files: untrackedFiles2,
        format_patch: null,
        head_sha: null,
        branch_name: null
      };
    }
    const remoteBase = await findRemoteBase();
    if (!remoteBase) {
      logForDebugging("No remote found, using HEAD-only mode for issue");
      const [{ stdout: patch2 }, untrackedFiles2] = await Promise.all([
        execFileNoThrow(gitExe(), ["diff", "HEAD"]),
        captureUntrackedFiles()
      ]);
      return {
        remote_base_sha: null,
        remote_base: null,
        patch: patch2 || "",
        untracked_files: untrackedFiles2,
        format_patch: null,
        head_sha: null,
        branch_name: null
      };
    }
    const { stdout: mergeBase, code: mergeBaseCode } = await execFileNoThrow(gitExe(), ["merge-base", "HEAD", remoteBase], { preserveOutputOnError: false });
    if (mergeBaseCode !== 0 || !mergeBase.trim()) {
      logForDebugging("Merge-base failed, using HEAD-only mode for issue");
      const [{ stdout: patch2 }, untrackedFiles2] = await Promise.all([
        execFileNoThrow(gitExe(), ["diff", "HEAD"]),
        captureUntrackedFiles()
      ]);
      return {
        remote_base_sha: null,
        remote_base: null,
        patch: patch2 || "",
        untracked_files: untrackedFiles2,
        format_patch: null,
        head_sha: null,
        branch_name: null
      };
    }
    const remoteBaseSha = mergeBase.trim();
    const [
      { stdout: patch },
      untrackedFiles,
      { stdout: formatPatchOut, code: formatPatchCode },
      { stdout: headSha },
      { stdout: branchName }
    ] = await Promise.all([
      execFileNoThrow(gitExe(), ["diff", remoteBaseSha]),
      captureUntrackedFiles(),
      execFileNoThrow(gitExe(), [
        "format-patch",
        `${remoteBaseSha}..HEAD`,
        "--stdout"
      ]),
      execFileNoThrow(gitExe(), ["rev-parse", "HEAD"]),
      execFileNoThrow(gitExe(), ["rev-parse", "--abbrev-ref", "HEAD"])
    ]);
    let formatPatch = null;
    if (formatPatchCode === 0 && formatPatchOut && formatPatchOut.trim()) {
      formatPatch = formatPatchOut;
    }
    const trimmedBranch = branchName?.trim();
    return {
      remote_base_sha: remoteBaseSha,
      remote_base: remoteBase,
      patch: patch || "",
      untracked_files: untrackedFiles,
      format_patch: formatPatch,
      head_sha: headSha?.trim() || null,
      branch_name: trimmedBranch && trimmedBranch !== "HEAD" ? trimmedBranch : null
    };
  } catch (err) {
    logError(err);
    return null;
  }
}
function isLocalHost(host) {
  const hostWithoutPort = host.split(":")[0] ?? "";
  return hostWithoutPort === "localhost" || /^127\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(hostWithoutPort);
}
function isCurrentDirectoryBareGitRepo() {
  const fs = getFsImplementation();
  const cwd = getCwd();
  const gitPath = join3(cwd, ".git");
  try {
    const stats = fs.statSync(gitPath);
    if (stats.isFile()) {
      return false;
    }
    if (stats.isDirectory()) {
      const gitHeadPath = join3(gitPath, "HEAD");
      try {
        if (fs.statSync(gitHeadPath).isFile()) {
          return false;
        }
      } catch {}
    }
  } catch {}
  try {
    if (fs.statSync(join3(cwd, "HEAD")).isFile())
      return true;
  } catch {}
  try {
    if (fs.statSync(join3(cwd, "objects")).isDirectory())
      return true;
  } catch {}
  try {
    if (fs.statSync(join3(cwd, "refs")).isDirectory())
      return true;
  } catch {}
  return false;
}
var GIT_ROOT_NOT_FOUND, findGitRootImpl, findGitRoot, resolveCanonicalRoot, findCanonicalGitRoot, gitExe, getIsGit, dirIsInGitRepo = async (cwd) => {
  return findGitRoot(cwd) !== null;
}, getHead = async () => {
  return getCachedHead();
}, getBranch = async () => {
  return getCachedBranch();
}, getDefaultBranch = async () => {
  return getCachedDefaultBranch();
}, getRemoteUrl = async () => {
  return getCachedRemoteUrl();
}, getIsHeadOnRemote = async () => {
  const { code } = await execFileNoThrow(gitExe(), ["rev-parse", "@{u}"], {
    preserveOutputOnError: false
  });
  return code === 0;
}, hasUnpushedCommits = async () => {
  const { stdout, code } = await execFileNoThrow(gitExe(), ["rev-list", "--count", "@{u}..HEAD"], { preserveOutputOnError: false });
  return code === 0 && parseInt(stdout.trim(), 10) > 0;
}, getIsClean = async (options) => {
  const args = ["--no-optional-locks", "status", "--porcelain"];
  if (options?.ignoreUntracked) {
    args.push("-uno");
  }
  const { stdout } = await execFileNoThrow(gitExe(), args, {
    preserveOutputOnError: false
  });
  return stdout.trim().length === 0;
}, getChangedFiles = async () => {
  const { stdout } = await execFileNoThrow(gitExe(), ["--no-optional-locks", "status", "--porcelain"], {
    preserveOutputOnError: false
  });
  return stdout.trim().split(`
`).map((line) => line.trim().split(" ", 2)[1]?.trim()).filter((line) => typeof line === "string");
}, getFileStatus = async () => {
  const { stdout } = await execFileNoThrow(gitExe(), ["--no-optional-locks", "status", "--porcelain"], {
    preserveOutputOnError: false
  });
  const tracked = [];
  const untracked = [];
  stdout.trim().split(`
`).filter((line) => line.length > 0).forEach((line) => {
    const status = line.substring(0, 2);
    const filename = line.substring(2).trim();
    if (status === "??") {
      untracked.push(filename);
    } else if (filename) {
      tracked.push(filename);
    }
  });
  return { tracked, untracked };
}, getWorktreeCount = async () => {
  return getWorktreeCountFromFs();
}, stashToCleanState = async (message) => {
  try {
    const stashMessage = message || `MiMo Code auto-stash - ${new Date().toISOString()}`;
    const { untracked } = await getFileStatus();
    if (untracked.length > 0) {
      const { code: addCode } = await execFileNoThrow(gitExe(), ["add", ...untracked], { preserveOutputOnError: false });
      if (addCode !== 0) {
        return false;
      }
    }
    const { code } = await execFileNoThrow(gitExe(), ["stash", "push", "--message", stashMessage], { preserveOutputOnError: false });
    return code === 0;
  } catch (_) {
    return false;
  }
}, MAX_FILE_SIZE_BYTES = 524288000, MAX_TOTAL_SIZE_BYTES = 5368709120, MAX_FILE_COUNT = 20000, SNIFF_BUFFER_SIZE = 65536;
var init_git = __esm(() => {
  init_memoize();
  init_files();
  init_cwd();
  init_debug();
  init_diagLogs();
  init_execFileNoThrow();
  init_fsOperations();
  init_gitFilesystem();
  init_log();
  init_memoize2();
  init_which();
  GIT_ROOT_NOT_FOUND = Symbol("git-root-not-found");
  findGitRootImpl = memoizeWithLRU((startPath) => {
    const startTime = Date.now();
    logForDiagnosticsNoPII("info", "find_git_root_started");
    let current = resolve2(startPath);
    const root = current.substring(0, current.indexOf(sep) + 1) || sep;
    let statCount = 0;
    while (current !== root) {
      try {
        const gitPath = join3(current, ".git");
        statCount++;
        const stat3 = statSync(gitPath);
        if (stat3.isDirectory() || stat3.isFile()) {
          logForDiagnosticsNoPII("info", "find_git_root_completed", {
            duration_ms: Date.now() - startTime,
            stat_count: statCount,
            found: true
          });
          return current.normalize("NFC");
        }
      } catch {}
      const parent = dirname2(current);
      if (parent === current) {
        break;
      }
      current = parent;
    }
    try {
      const gitPath = join3(root, ".git");
      statCount++;
      const stat3 = statSync(gitPath);
      if (stat3.isDirectory() || stat3.isFile()) {
        logForDiagnosticsNoPII("info", "find_git_root_completed", {
          duration_ms: Date.now() - startTime,
          stat_count: statCount,
          found: true
        });
        return root.normalize("NFC");
      }
    } catch {}
    logForDiagnosticsNoPII("info", "find_git_root_completed", {
      duration_ms: Date.now() - startTime,
      stat_count: statCount,
      found: false
    });
    return GIT_ROOT_NOT_FOUND;
  }, (path) => path, 50);
  findGitRoot = createFindGitRoot();
  resolveCanonicalRoot = memoizeWithLRU((gitRoot) => {
    try {
      const gitContent = readFileSync(join3(gitRoot, ".git"), "utf-8").trim();
      if (!gitContent.startsWith("gitdir:")) {
        return gitRoot;
      }
      const worktreeGitDir = resolve2(gitRoot, gitContent.slice("gitdir:".length).trim());
      const commonDir = resolve2(worktreeGitDir, readFileSync(join3(worktreeGitDir, "commondir"), "utf-8").trim());
      if (resolve2(dirname2(worktreeGitDir)) !== join3(commonDir, "worktrees")) {
        return gitRoot;
      }
      const backlink = realpathSync(readFileSync(join3(worktreeGitDir, "gitdir"), "utf-8").trim());
      if (backlink !== join3(realpathSync(gitRoot), ".git")) {
        return gitRoot;
      }
      if (basename(commonDir) !== ".git") {
        return commonDir.normalize("NFC");
      }
      return dirname2(commonDir).normalize("NFC");
    } catch {
      return gitRoot;
    }
  }, (root) => root, 50);
  findCanonicalGitRoot = createFindCanonicalGitRoot();
  gitExe = memoize_default(() => {
    return whichSync("git") || "git";
  });
  getIsGit = memoize_default(async () => {
    const startTime = Date.now();
    logForDiagnosticsNoPII("info", "is_git_check_started");
    const isGit = findGitRoot(getCwd()) !== null;
    logForDiagnosticsNoPII("info", "is_git_check_completed", {
      duration_ms: Date.now() - startTime,
      is_git: isGit
    });
    return isGit;
  });
});

export { logForDiagnosticsNoPII, withDiagnosticsTiming, init_diagLogs, hasBinaryExtension, init_files, parseGitConfigValue, init_gitConfigParser, clearResolveGitDirCache, resolveGitDir, resolveRef, getCommonDir, getHeadForDir, readWorktreeHeadSha, getRemoteUrlForDir, init_gitFilesystem, findGitRoot, findCanonicalGitRoot, gitExe, getIsGit, getGitDir, isAtGitRoot, dirIsInGitRepo, getHead, getBranch, getDefaultBranch, getRemoteUrl, normalizeGitRemoteUrl, getRepoRemoteHash, getIsHeadOnRemote, hasUnpushedCommits, getIsClean, getChangedFiles, getFileStatus, getWorktreeCount, stashToCleanState, getGitState, getGithubRepo, findRemoteBase, preserveGitStateForIssue, isCurrentDirectoryBareGitRepo, init_git };
