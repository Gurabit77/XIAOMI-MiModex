// @bun
import {
  clearTrackedMagicDocs,
  init_magicDocs
} from "./chunk-1bfwvkr1.js";
import {
  CLAUDE_CONFIG_DIRECTORIES,
  clearAllDumpState,
  clearAllPendingCallbacks,
  clearAllSessions,
  clearCommandPrefixCaches,
  clearCommandsCache,
  clearDynamicSkills,
  clearSessionEnvVars,
  clearStoredImagePaths,
  createBaseHookInput,
  executeFileSuggestionCommand,
  getGitStatus,
  getSessionStartDate,
  getSystemContext,
  getUserContext,
  init_LSPDiagnosticRegistry,
  init_attachments,
  init_claudemd,
  init_commands,
  init_commands1 as init_commands2,
  init_common,
  init_context,
  init_dumpPrompts,
  init_hooks1 as init_hooks,
  init_imageStore,
  init_loadSkillsDir,
  init_markdownConfigLoader,
  init_postCompactCleanup,
  init_promptCacheBreakDetection,
  init_ripgrep,
  init_sessionEnvVars,
  init_sessionIngress,
  init_useSwarmPermissionPoller,
  loadMarkdownFilesForSubdir,
  resetAllLSPDiagnosticState,
  resetGetMemoryFilesCache,
  resetPromptCacheBreakDetection,
  resetSentSkillNames,
  ripGrep,
  runPostCompactCleanup,
  setSystemPromptInjection
} from "./chunk-ktw919wt.js";
import {
  getGlobalConfig,
  getInitialSettings,
  init_config1 as init_config,
  init_settings1 as init_settings
} from "./chunk-1ghcng4e.js";
import {
  expandPath,
  init_path
} from "./chunk-4efha55s.js";
import {
  require_ignore
} from "./chunk-v9smspw2.js";
import {
  init_analytics,
  logEvent
} from "./chunk-f2mhrmww.js";
import {
  clearRepositoryCaches,
  init_detectRepository
} from "./chunk-c84gr0s2.js";
import {
  clearResolveGitDirCache,
  findGitRoot,
  gitExe,
  init_git,
  init_gitFilesystem
} from "./chunk-t6jhrn34.js";
import {
  execFileNoThrowWithCwd,
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
  errorMessage,
  getFsImplementation,
  init_debug,
  init_errors,
  init_fsOperations,
  logForDebugging
} from "./chunk-rpbc3b7k.js";
import {
  clearInvokedSkills,
  createSignal,
  init_signal,
  init_state,
  setLastEmittedDate
} from "./chunk-j5xzpm59.js";
import {
  __esm,
  __require,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/native-ts/file-index/index.ts
class FileIndex {
  paths = [];
  lowerPaths = [];
  charBits = new Int32Array(0);
  pathLens = new Uint16Array(0);
  topLevelCache = null;
  readyCount = 0;
  loadFromFileList(fileList) {
    const seen = new Set;
    const paths = [];
    for (const line of fileList) {
      if (line.length > 0 && !seen.has(line)) {
        seen.add(line);
        paths.push(line);
      }
    }
    this.buildIndex(paths);
  }
  loadFromFileListAsync(fileList) {
    let markQueryable = () => {};
    const queryable = new Promise((resolve) => {
      markQueryable = resolve;
    });
    const done = this.buildAsync(fileList, markQueryable);
    return { queryable, done };
  }
  async buildAsync(fileList, markQueryable) {
    const seen = new Set;
    const paths = [];
    let chunkStart = performance.now();
    for (let i = 0;i < fileList.length; i++) {
      const line = fileList[i];
      if (line.length > 0 && !seen.has(line)) {
        seen.add(line);
        paths.push(line);
      }
      if ((i & 255) === 255 && performance.now() - chunkStart > CHUNK_MS) {
        await yieldToEventLoop();
        chunkStart = performance.now();
      }
    }
    this.resetArrays(paths);
    chunkStart = performance.now();
    let firstChunk = true;
    for (let i = 0;i < paths.length; i++) {
      this.indexPath(i);
      if ((i & 255) === 255 && performance.now() - chunkStart > CHUNK_MS) {
        this.readyCount = i + 1;
        if (firstChunk) {
          markQueryable();
          firstChunk = false;
        }
        await yieldToEventLoop();
        chunkStart = performance.now();
      }
    }
    this.readyCount = paths.length;
    markQueryable();
  }
  buildIndex(paths) {
    this.resetArrays(paths);
    for (let i = 0;i < paths.length; i++) {
      this.indexPath(i);
    }
    this.readyCount = paths.length;
  }
  resetArrays(paths) {
    const n = paths.length;
    this.paths = paths;
    this.lowerPaths = new Array(n);
    this.charBits = new Int32Array(n);
    this.pathLens = new Uint16Array(n);
    this.readyCount = 0;
    this.topLevelCache = computeTopLevelEntries(paths, TOP_LEVEL_CACHE_LIMIT);
  }
  indexPath(i) {
    const lp = this.paths[i].toLowerCase();
    this.lowerPaths[i] = lp;
    const len = lp.length;
    this.pathLens[i] = len;
    let bits = 0;
    for (let j = 0;j < len; j++) {
      const c = lp.charCodeAt(j);
      if (c >= 97 && c <= 122)
        bits |= 1 << c - 97;
    }
    this.charBits[i] = bits;
  }
  search(query, limit) {
    if (limit <= 0)
      return [];
    if (query.length === 0) {
      if (this.topLevelCache) {
        return this.topLevelCache.slice(0, limit);
      }
      return [];
    }
    const caseSensitive = query !== query.toLowerCase();
    const needle = caseSensitive ? query : query.toLowerCase();
    const nLen = Math.min(needle.length, MAX_QUERY_LEN);
    const needleChars = new Array(nLen);
    let needleBitmap = 0;
    for (let j = 0;j < nLen; j++) {
      const ch = needle.charAt(j);
      needleChars[j] = ch;
      const cc = ch.charCodeAt(0);
      if (cc >= 97 && cc <= 122)
        needleBitmap |= 1 << cc - 97;
    }
    const scoreCeiling = nLen * (SCORE_MATCH + BONUS_BOUNDARY) + BONUS_FIRST_CHAR + 32;
    const topK = [];
    let threshold = -Infinity;
    const { paths, lowerPaths, charBits, pathLens, readyCount } = this;
    for (let i = 0;i < readyCount; i++) {
      if ((charBits[i] & needleBitmap) !== needleBitmap)
        continue;
      const haystack = caseSensitive ? paths[i] : lowerPaths[i];
      const firstChar = needleChars[0];
      let startCount = 0;
      const startPositions = [];
      const firstPos = haystack.indexOf(firstChar);
      if (firstPos === -1)
        continue;
      startPositions[startCount++] = firstPos;
      for (let bp = firstPos + 1;bp < haystack.length; bp++) {
        if (haystack.charCodeAt(bp) !== firstChar.charCodeAt(0))
          continue;
        const prevCode = haystack.charCodeAt(bp - 1);
        if (prevCode === 47 || prevCode === 92 || prevCode === 45 || prevCode === 95 || prevCode === 46 || prevCode === 32) {
          startPositions[startCount++] = bp;
        }
      }
      const originalPath = paths[i];
      const hLen = pathLens[i];
      const lengthBonus = Math.max(0, 32 - (hLen >> 2));
      let bestScore = -Infinity;
      for (let si = 0;si < startCount; si++) {
        posBuf[0] = startPositions[si];
        let gapPenalty = 0;
        let consecBonus = 0;
        let prev = posBuf[0];
        let matched = true;
        for (let j = 1;j < nLen; j++) {
          const pos = haystack.indexOf(needleChars[j], prev + 1);
          if (pos === -1) {
            matched = false;
            break;
          }
          posBuf[j] = pos;
          const gap = pos - prev - 1;
          if (gap === 0)
            consecBonus += BONUS_CONSECUTIVE;
          else
            gapPenalty += PENALTY_GAP_START + gap * PENALTY_GAP_EXTENSION;
          prev = pos;
        }
        if (!matched)
          continue;
        if (topK.length === limit && scoreCeiling + consecBonus - gapPenalty + lengthBonus <= threshold) {
          continue;
        }
        let score2 = nLen * SCORE_MATCH + consecBonus - gapPenalty;
        score2 += scoreBonusAt(originalPath, posBuf[0], true);
        for (let j = 1;j < nLen; j++) {
          score2 += scoreBonusAt(originalPath, posBuf[j], false);
        }
        score2 += lengthBonus;
        if (score2 > bestScore)
          bestScore = score2;
      }
      if (bestScore === -Infinity)
        continue;
      const score = bestScore;
      if (topK.length < limit) {
        topK.push({ path: originalPath, fuzzScore: score });
        if (topK.length === limit) {
          topK.sort((a, b) => a.fuzzScore - b.fuzzScore);
          threshold = topK[0].fuzzScore;
        }
      } else if (score > threshold) {
        let lo = 0;
        let hi = topK.length;
        while (lo < hi) {
          const mid = lo + hi >> 1;
          if (topK[mid].fuzzScore < score)
            lo = mid + 1;
          else
            hi = mid;
        }
        topK.splice(lo, 0, { path: originalPath, fuzzScore: score });
        topK.shift();
        threshold = topK[0].fuzzScore;
      }
    }
    topK.sort((a, b) => b.fuzzScore - a.fuzzScore);
    const matchCount = topK.length;
    const denom = Math.max(matchCount, 1);
    const results = new Array(matchCount);
    for (let i = 0;i < matchCount; i++) {
      const path = topK[i].path;
      const positionScore = i / denom;
      const finalScore = path.includes("test") ? Math.min(positionScore * 1.05, 1) : positionScore;
      results[i] = { path, score: finalScore };
    }
    return results;
  }
}
function scoreBonusAt(path, pos, first) {
  if (pos === 0)
    return first ? BONUS_FIRST_CHAR : 0;
  const prevCh = path.charCodeAt(pos - 1);
  if (isBoundary(prevCh))
    return BONUS_BOUNDARY;
  if (isLower(prevCh) && isUpper(path.charCodeAt(pos)))
    return BONUS_CAMEL;
  return 0;
}
function isBoundary(code) {
  return code === 47 || code === 92 || code === 45 || code === 95 || code === 46 || code === 32;
}
function isLower(code) {
  return code >= 97 && code <= 122;
}
function isUpper(code) {
  return code >= 65 && code <= 90;
}
function yieldToEventLoop() {
  return new Promise((resolve) => setImmediate(resolve));
}
function computeTopLevelEntries(paths, limit) {
  const topLevel = new Set;
  for (const p of paths) {
    let end = p.length;
    for (let i = 0;i < p.length; i++) {
      const c = p.charCodeAt(i);
      if (c === 47 || c === 92) {
        end = i;
        break;
      }
    }
    const segment = p.slice(0, end);
    if (segment.length > 0) {
      topLevel.add(segment);
      if (topLevel.size >= limit)
        break;
    }
  }
  const sorted = Array.from(topLevel);
  sorted.sort((a, b) => {
    const lenDiff = a.length - b.length;
    if (lenDiff !== 0)
      return lenDiff;
    return a < b ? -1 : a > b ? 1 : 0;
  });
  return sorted.slice(0, limit).map((path) => ({ path, score: 0 }));
}
var SCORE_MATCH = 16, BONUS_BOUNDARY = 8, BONUS_CAMEL = 6, BONUS_CONSECUTIVE = 4, BONUS_FIRST_CHAR = 8, PENALTY_GAP_START = 3, PENALTY_GAP_EXTENSION = 1, TOP_LEVEL_CACHE_LIMIT = 100, MAX_QUERY_LEN = 64, CHUNK_MS = 4, posBuf;
var init_file_index = __esm(() => {
  posBuf = new Int32Array(MAX_QUERY_LEN);
});

// src/hooks/fileSuggestions.ts
import { statSync } from "fs";
import * as path from "path";
function getFileIndex() {
  if (!fileIndex) {
    fileIndex = new FileIndex;
  }
  return fileIndex;
}
function clearFileSuggestionCaches() {
  fileIndex = null;
  fileListRefreshPromise = null;
  cacheGeneration++;
  untrackedFetchPromise = null;
  cachedTrackedFiles = [];
  cachedConfigFiles = [];
  cachedTrackedDirs = [];
  indexBuildComplete.clear();
  ignorePatternsCache = null;
  ignorePatternsCacheKey = null;
  lastRefreshMs = 0;
  lastGitIndexMtime = null;
  loadedTrackedSignature = null;
  loadedMergedSignature = null;
}
function pathListSignature(paths) {
  const n = paths.length;
  const stride = Math.max(1, Math.floor(n / 500));
  let h = 2166136261 | 0;
  for (let i = 0;i < n; i += stride) {
    const p = paths[i];
    for (let j = 0;j < p.length; j++) {
      h = (h ^ p.charCodeAt(j)) * 16777619 | 0;
    }
    h = h * 16777619 | 0;
  }
  if (n > 0) {
    const last = paths[n - 1];
    for (let j = 0;j < last.length; j++) {
      h = (h ^ last.charCodeAt(j)) * 16777619 | 0;
    }
  }
  return `${n}:${(h >>> 0).toString(16)}`;
}
function getGitIndexMtime() {
  const repoRoot = findGitRoot(getCwd());
  if (!repoRoot)
    return null;
  try {
    return statSync(path.join(repoRoot, ".git", "index")).mtimeMs;
  } catch {
    return null;
  }
}
function normalizeGitPaths(files, repoRoot, originalCwd) {
  if (originalCwd === repoRoot) {
    return files;
  }
  return files.map((f) => {
    const absolutePath = path.join(repoRoot, f);
    return path.relative(originalCwd, absolutePath);
  });
}
async function mergeUntrackedIntoNormalizedCache(normalizedUntracked) {
  if (normalizedUntracked.length === 0)
    return;
  if (!fileIndex || cachedTrackedFiles.length === 0)
    return;
  const untrackedDirs = await getDirectoryNamesAsync(normalizedUntracked);
  const allPaths = [
    ...cachedTrackedFiles,
    ...cachedConfigFiles,
    ...cachedTrackedDirs,
    ...normalizedUntracked,
    ...untrackedDirs
  ];
  const sig = pathListSignature(allPaths);
  if (sig === loadedMergedSignature) {
    logForDebugging(`[FileIndex] skipped index rebuild \u2014 merged paths unchanged`);
    return;
  }
  await fileIndex.loadFromFileListAsync(allPaths).done;
  loadedMergedSignature = sig;
  logForDebugging(`[FileIndex] rebuilt index with ${cachedTrackedFiles.length} tracked + ${normalizedUntracked.length} untracked files`);
}
async function loadRipgrepIgnorePatterns(repoRoot, cwd) {
  const cacheKey = `${repoRoot}:${cwd}`;
  if (ignorePatternsCacheKey === cacheKey) {
    return ignorePatternsCache;
  }
  const fs = getFsImplementation();
  const ignoreFiles = [".ignore", ".rgignore"];
  const directories = [...new Set([repoRoot, cwd])];
  const ig = import_ignore.default();
  let hasPatterns = false;
  const paths = directories.flatMap((dir) => ignoreFiles.map((f) => path.join(dir, f)));
  const contents = await Promise.all(paths.map((p) => fs.readFile(p, { encoding: "utf8" }).catch(() => null)));
  for (const [i, content] of contents.entries()) {
    if (content === null)
      continue;
    ig.add(content);
    hasPatterns = true;
    logForDebugging(`[FileIndex] loaded ignore patterns from ${paths[i]}`);
  }
  const result = hasPatterns ? ig : null;
  ignorePatternsCache = result;
  ignorePatternsCacheKey = cacheKey;
  return result;
}
async function getFilesUsingGit(abortSignal, respectGitignore) {
  const startTime = Date.now();
  logForDebugging(`[FileIndex] getFilesUsingGit called`);
  const cwd = getCwd();
  const repoRoot = findGitRoot(cwd);
  if (!repoRoot) {
    logForDebugging(`[FileIndex] not a git repo, returning null`);
    return null;
  }
  try {
    const lsFilesStart = Date.now();
    const trackedResult = await execFileNoThrowWithCwd(gitExe(), ["-c", "core.quotepath=false", "ls-files", "--recurse-submodules"], { timeout: 5000, abortSignal, cwd: repoRoot });
    logForDebugging(`[FileIndex] git ls-files (tracked) took ${Date.now() - lsFilesStart}ms`);
    if (trackedResult.code !== 0) {
      logForDebugging(`[FileIndex] git ls-files failed (code=${trackedResult.code}, stderr=${trackedResult.stderr}), falling back to ripgrep`);
      return null;
    }
    const trackedFiles = trackedResult.stdout.trim().split(`
`).filter(Boolean);
    let normalizedTracked = normalizeGitPaths(trackedFiles, repoRoot, cwd);
    const ignorePatterns = await loadRipgrepIgnorePatterns(repoRoot, cwd);
    if (ignorePatterns) {
      const beforeCount = normalizedTracked.length;
      normalizedTracked = ignorePatterns.filter(normalizedTracked);
      logForDebugging(`[FileIndex] applied ignore patterns: ${beforeCount} -> ${normalizedTracked.length} files`);
    }
    cachedTrackedFiles = normalizedTracked;
    const duration = Date.now() - startTime;
    logForDebugging(`[FileIndex] git ls-files: ${normalizedTracked.length} tracked files in ${duration}ms`);
    logEvent("tengu_file_suggestions_git_ls_files", {
      file_count: normalizedTracked.length,
      tracked_count: normalizedTracked.length,
      untracked_count: 0,
      duration_ms: duration
    });
    if (!untrackedFetchPromise) {
      const untrackedArgs = respectGitignore ? [
        "-c",
        "core.quotepath=false",
        "ls-files",
        "--others",
        "--exclude-standard"
      ] : ["-c", "core.quotepath=false", "ls-files", "--others"];
      const generation = cacheGeneration;
      untrackedFetchPromise = execFileNoThrowWithCwd(gitExe(), untrackedArgs, {
        timeout: 1e4,
        cwd: repoRoot
      }).then(async (untrackedResult) => {
        if (generation !== cacheGeneration) {
          return;
        }
        if (untrackedResult.code === 0) {
          const rawUntrackedFiles = untrackedResult.stdout.trim().split(`
`).filter(Boolean);
          let normalizedUntracked = normalizeGitPaths(rawUntrackedFiles, repoRoot, cwd);
          const ignorePatterns2 = await loadRipgrepIgnorePatterns(repoRoot, cwd);
          if (ignorePatterns2 && normalizedUntracked.length > 0) {
            const beforeCount = normalizedUntracked.length;
            normalizedUntracked = ignorePatterns2.filter(normalizedUntracked);
            logForDebugging(`[FileIndex] applied ignore patterns to untracked: ${beforeCount} -> ${normalizedUntracked.length} files`);
          }
          logForDebugging(`[FileIndex] background untracked fetch: ${normalizedUntracked.length} files`);
          mergeUntrackedIntoNormalizedCache(normalizedUntracked);
        }
      }).catch((error) => {
        logForDebugging(`[FileIndex] background untracked fetch failed: ${error}`);
      }).finally(() => {
        untrackedFetchPromise = null;
      });
    }
    return normalizedTracked;
  } catch (error) {
    logForDebugging(`[FileIndex] git ls-files error: ${errorMessage(error)}`);
    return null;
  }
}
async function getDirectoryNamesAsync(files) {
  const directoryNames = new Set;
  let chunkStart = performance.now();
  for (let i = 0;i < files.length; i++) {
    collectDirectoryNames(files, i, i + 1, directoryNames);
    if ((i & 255) === 255 && performance.now() - chunkStart > CHUNK_MS) {
      await yieldToEventLoop();
      chunkStart = performance.now();
    }
  }
  return [...directoryNames].map((d) => d + path.sep);
}
function collectDirectoryNames(files, start, end, out) {
  for (let i = start;i < end; i++) {
    let currentDir = path.dirname(files[i]);
    while (currentDir !== "." && !out.has(currentDir)) {
      const parent = path.dirname(currentDir);
      if (parent === currentDir)
        break;
      out.add(currentDir);
      currentDir = parent;
    }
  }
}
async function getClaudeConfigFiles(cwd) {
  const markdownFileArrays = await Promise.all(CLAUDE_CONFIG_DIRECTORIES.map((subdir) => loadMarkdownFilesForSubdir(subdir, cwd)));
  return markdownFileArrays.flatMap((markdownFiles) => markdownFiles.map((f) => f.filePath));
}
async function getProjectFiles(abortSignal, respectGitignore) {
  logForDebugging(`[FileIndex] getProjectFiles called, respectGitignore=${respectGitignore}`);
  const gitFiles = await getFilesUsingGit(abortSignal, respectGitignore);
  if (gitFiles !== null) {
    logForDebugging(`[FileIndex] using git ls-files result (${gitFiles.length} files)`);
    return gitFiles;
  }
  logForDebugging(`[FileIndex] git ls-files returned null, falling back to ripgrep`);
  const startTime = Date.now();
  const rgArgs = [
    "--files",
    "--follow",
    "--hidden",
    "--glob",
    "!.git/",
    "--glob",
    "!.svn/",
    "--glob",
    "!.hg/",
    "--glob",
    "!.bzr/",
    "--glob",
    "!.jj/",
    "--glob",
    "!.sl/"
  ];
  if (!respectGitignore) {
    rgArgs.push("--no-ignore-vcs");
  }
  const files = await ripGrep(rgArgs, ".", abortSignal);
  const relativePaths = files.map((f) => path.relative(getCwd(), f));
  const duration = Date.now() - startTime;
  logForDebugging(`[FileIndex] ripgrep: ${relativePaths.length} files in ${duration}ms`);
  logEvent("tengu_file_suggestions_ripgrep", {
    file_count: relativePaths.length,
    duration_ms: duration
  });
  return relativePaths;
}
async function getPathsForSuggestions() {
  const signal = AbortSignal.timeout(1e4);
  const index = getFileIndex();
  try {
    const projectSettings = getInitialSettings();
    const globalConfig = getGlobalConfig();
    const respectGitignore = projectSettings.respectGitignore ?? globalConfig.respectGitignore ?? true;
    const cwd = getCwd();
    const [projectFiles, configFiles] = await Promise.all([
      getProjectFiles(signal, respectGitignore),
      getClaudeConfigFiles(cwd)
    ]);
    cachedConfigFiles = configFiles;
    const allFiles = [...projectFiles, ...configFiles];
    const directories = await getDirectoryNamesAsync(allFiles);
    cachedTrackedDirs = directories;
    const allPathsList = [...directories, ...allFiles];
    const sig = pathListSignature(allPathsList);
    if (sig !== loadedTrackedSignature) {
      await index.loadFromFileListAsync(allPathsList).done;
      loadedTrackedSignature = sig;
      loadedMergedSignature = null;
    } else {
      logForDebugging(`[FileIndex] skipped index rebuild \u2014 tracked paths unchanged`);
    }
  } catch (error) {
    logError(error);
  }
  return index;
}
function findCommonPrefix(a, b) {
  const minLength = Math.min(a.length, b.length);
  let i = 0;
  while (i < minLength && a[i] === b[i]) {
    i++;
  }
  return a.substring(0, i);
}
function findLongestCommonPrefix(suggestions) {
  if (suggestions.length === 0)
    return "";
  const strings = suggestions.map((item) => item.displayText);
  let prefix = strings[0];
  for (let i = 1;i < strings.length; i++) {
    const currentString = strings[i];
    prefix = findCommonPrefix(prefix, currentString);
    if (prefix === "")
      return "";
  }
  return prefix;
}
function createFileSuggestionItem(filePath, score) {
  return {
    id: `file-${filePath}`,
    displayText: filePath,
    metadata: score !== undefined ? { score } : undefined
  };
}
function findMatchingFiles(fileIndex2, partialPath) {
  const results = fileIndex2.search(partialPath, MAX_SUGGESTIONS);
  return results.map((result) => createFileSuggestionItem(result.path, result.score));
}
function startBackgroundCacheRefresh() {
  if (fileListRefreshPromise) {
    return;
  }
  const indexMtime = getGitIndexMtime();
  if (fileIndex) {
    const gitStateChanged = indexMtime !== null && indexMtime !== lastGitIndexMtime;
    if (!gitStateChanged && Date.now() - lastRefreshMs < REFRESH_THROTTLE_MS) {
      return;
    }
  }
  const generation = cacheGeneration;
  const refreshStart = Date.now();
  getFileIndex();
  fileListRefreshPromise = getPathsForSuggestions().then((result) => {
    if (generation !== cacheGeneration) {
      return result;
    }
    fileListRefreshPromise = null;
    indexBuildComplete.emit();
    lastGitIndexMtime = indexMtime;
    lastRefreshMs = Date.now();
    logForDebugging(`[FileIndex] cache refresh completed in ${Date.now() - refreshStart}ms`);
    return result;
  }).catch((error) => {
    logForDebugging(`[FileIndex] Cache refresh failed: ${errorMessage(error)}`);
    logError(error);
    if (generation === cacheGeneration) {
      fileListRefreshPromise = null;
    }
    return getFileIndex();
  });
}
async function getTopLevelPaths() {
  const fs = getFsImplementation();
  const cwd = getCwd();
  try {
    const entries = await fs.readdir(cwd);
    return entries.map((entry) => {
      const fullPath = path.join(cwd, entry.name);
      const relativePath = path.relative(cwd, fullPath);
      return entry.isDirectory() ? relativePath + path.sep : relativePath;
    });
  } catch (error) {
    logError(error);
    return [];
  }
}
async function generateFileSuggestions(partialPath, showOnEmpty = false) {
  if (!partialPath && !showOnEmpty) {
    return [];
  }
  if (getInitialSettings().fileSuggestion?.type === "command") {
    const input = {
      ...createBaseHookInput(),
      query: partialPath
    };
    const results = await executeFileSuggestionCommand(input);
    return results.slice(0, MAX_SUGGESTIONS).map(createFileSuggestionItem);
  }
  if (partialPath === "" || partialPath === "." || partialPath === "./") {
    const topLevelPaths = await getTopLevelPaths();
    startBackgroundCacheRefresh();
    return topLevelPaths.slice(0, MAX_SUGGESTIONS).map(createFileSuggestionItem);
  }
  const startTime = Date.now();
  try {
    const wasBuilding = fileListRefreshPromise !== null;
    startBackgroundCacheRefresh();
    let normalizedPath = partialPath;
    const currentDirPrefix = "." + path.sep;
    if (partialPath.startsWith(currentDirPrefix)) {
      normalizedPath = partialPath.substring(2);
    }
    if (normalizedPath.startsWith("~")) {
      normalizedPath = expandPath(normalizedPath);
    }
    const matches = fileIndex ? findMatchingFiles(fileIndex, normalizedPath) : [];
    const duration = Date.now() - startTime;
    logForDebugging(`[FileIndex] generateFileSuggestions: ${matches.length} results in ${duration}ms (${wasBuilding ? "partial" : "full"} index)`);
    logEvent("tengu_file_suggestions_query", {
      duration_ms: duration,
      cache_hit: !wasBuilding,
      result_count: matches.length,
      query_length: partialPath.length
    });
    return matches;
  } catch (error) {
    logError(error);
    return [];
  }
}
function applyFileSuggestion(suggestion, input, partialPath, startPos, onInputChange, setCursorOffset) {
  const suggestionText = typeof suggestion === "string" ? suggestion : suggestion.displayText;
  const newInput = input.substring(0, startPos) + suggestionText + input.substring(startPos + partialPath.length);
  onInputChange(newInput);
  const newCursorPos = startPos + suggestionText.length;
  setCursorOffset(newCursorPos);
}
var import_ignore, fileIndex = null, fileListRefreshPromise = null, indexBuildComplete, onIndexBuildComplete, cacheGeneration = 0, untrackedFetchPromise = null, cachedTrackedFiles, cachedConfigFiles, cachedTrackedDirs, ignorePatternsCache = null, ignorePatternsCacheKey = null, lastRefreshMs = 0, lastGitIndexMtime = null, loadedTrackedSignature = null, loadedMergedSignature = null, MAX_SUGGESTIONS = 15, REFRESH_THROTTLE_MS = 5000;
var init_fileSuggestions = __esm(() => {
  init_markdownConfigLoader();
  init_file_index();
  init_analytics();
  init_config();
  init_cwd();
  init_debug();
  init_errors();
  init_execFileNoThrow();
  init_fsOperations();
  init_git();
  init_hooks();
  init_log();
  init_path();
  init_ripgrep();
  init_settings();
  init_signal();
  import_ignore = __toESM(require_ignore(), 1);
  indexBuildComplete = createSignal();
  onIndexBuildComplete = indexBuildComplete.subscribe;
  cachedTrackedFiles = [];
  cachedConfigFiles = [];
  cachedTrackedDirs = [];
});

// src/commands/clear/caches.ts
function clearSessionCaches(preservedAgentIds = new Set) {
  const hasPreserved = preservedAgentIds.size > 0;
  getUserContext.cache.clear?.();
  getSystemContext.cache.clear?.();
  getGitStatus.cache.clear?.();
  getSessionStartDate.cache.clear?.();
  clearFileSuggestionCaches();
  clearCommandsCache();
  if (!hasPreserved)
    resetPromptCacheBreakDetection();
  setSystemPromptInjection(null);
  setLastEmittedDate(null);
  runPostCompactCleanup();
  resetSentSkillNames();
  resetGetMemoryFilesCache("session_start");
  clearStoredImagePaths();
  clearAllSessions();
  if (!hasPreserved)
    clearAllPendingCallbacks();
  if (process.env.USER_TYPE === "ant") {
    import("./chunk-qtp7hz78.js").then(({ clearSessionsWithTungstenUsage, resetInitializationState }) => {
      clearSessionsWithTungstenUsage();
      resetInitializationState();
    });
  }
  if (true) {
    import("./chunk-n014czx3.js").then(({ clearAttributionCaches }) => clearAttributionCaches());
  }
  clearRepositoryCaches();
  clearCommandPrefixCaches();
  if (!hasPreserved)
    clearAllDumpState();
  clearInvokedSkills(preservedAgentIds);
  clearResolveGitDirCache();
  clearDynamicSkills();
  resetAllLSPDiagnosticState();
  clearTrackedMagicDocs();
  clearSessionEnvVars();
  import("./chunk-4pd26f7e.js").then(({ clearWebFetchCache }) => clearWebFetchCache());
  import("./chunk-5gmb5ae4.js").then(({ clearToolSearchDescriptionCache }) => clearToolSearchDescriptionCache());
  import("./chunk-4xd8jgyr.js").then(({ clearAgentDefinitionsCache }) => clearAgentDefinitionsCache());
  import("./chunk-66mnfg5c.js").then(({ clearPromptCache }) => clearPromptCache());
}
var init_caches = __esm(() => {
  init_state();
  init_commands2();
  init_common();
  init_context();
  init_fileSuggestions();
  init_useSwarmPermissionPoller();
  init_dumpPrompts();
  init_promptCacheBreakDetection();
  init_sessionIngress();
  init_postCompactCleanup();
  init_LSPDiagnosticRegistry();
  init_magicDocs();
  init_loadSkillsDir();
  init_attachments();
  init_commands();
  init_claudemd();
  init_detectRepository();
  init_gitFilesystem();
  init_imageStore();
  init_sessionEnvVars();
});

export { onIndexBuildComplete, findLongestCommonPrefix, startBackgroundCacheRefresh, generateFileSuggestions, applyFileSuggestion, init_fileSuggestions, clearSessionCaches, init_caches };
