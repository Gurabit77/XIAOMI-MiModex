// @bun
import {
  exports_registerProtocol,
  init_registerProtocol
} from "./chunk-zkrcgnzq.js";
import {
  autoUpdateMarketplacesAndPluginsInBackground,
  init_pluginAutoupdate
} from "./chunk-6e7sc1s6.js";
import {
  initMagicDocs,
  init_magicDocs
} from "./chunk-1bfwvkr1.js";
import {
  TOOL_RESULTS_SUBDIR,
  cleanupOldImageCaches,
  cleanupOldPastes,
  cleanupOldVersions,
  cleanupStaleAgentWorktrees,
  createAbortController,
  createTrace,
  createUserMessage,
  endTrace,
  exports_extractMemories,
  extractTag,
  extractTextContent,
  getEmptyToolPermissionContext,
  getProjectsDir,
  getSettingsWithAllErrors,
  initAutoDream,
  init_Tool,
  init_abortController,
  init_allErrors,
  init_autoDream,
  init_claude,
  init_extractMemories,
  init_imageStore,
  init_langfuse,
  init_messages1 as init_messages,
  init_nativeInstaller,
  init_pasteStore,
  init_postSamplingHooks,
  init_sessionStorage,
  init_systemPromptType,
  init_toolResultStorage,
  init_worktree,
  isLangfuseEnabled,
  queryModelWithoutStreaming
} from "./chunk-ktw919wt.js";
import {
  asSystemPrompt
} from "./chunk-chmfqs2y.js";
import {
  getAPIProvider,
  getSettings_DEPRECATED,
  getSmallFastModel,
  init_growthbook,
  init_model,
  init_providers,
  init_settings1 as init_settings,
  rawSettingsContainsKey
} from "./chunk-1ghcng4e.js";
import {
  init_array,
  init_lockfile,
  lock,
  unlock
} from "./chunk-zwarn9h7.js";
import {
  init_analytics,
  logEvent
} from "./chunk-f2mhrmww.js";
import {
  getCwd,
  init_cwd
} from "./chunk-dxvkxgnf.js";
import {
  CACHE_PATHS,
  init_cachePaths,
  init_log,
  logError
} from "./chunk-w5ahy59y.js";
import {
  getFsImplementation,
  init_debug,
  init_errors,
  init_fsOperations,
  init_slowOperations,
  logForDebugging,
  toError
} from "./chunk-rpbc3b7k.js";
import {
  getIsInteractive,
  getLastInteractionTime,
  getSessionId,
  init_state
} from "./chunk-j5xzpm59.js";
import {
  getClaudeConfigHomeDir,
  init_envUtils
} from "./chunk-hxhwzgnn.js";
import {
  __require,
  __toCommonJS
} from "./chunk-qp2qdcda.js";

// src/utils/backgroundHousekeeping.ts
init_autoDream();
init_magicDocs();

// src/utils/hooks/skillImprovement.ts
init_state();
init_growthbook();
init_analytics();
init_claude();
init_langfuse();
init_state();
init_providers();
init_Tool();
init_abortController();
init_array();
init_cwd();
init_errors();
init_log();
init_messages();
init_model();
init_slowOperations();
init_systemPromptType();

// src/utils/hooks/apiQueryHookHelper.ts
init_claude();
init_abortController();
init_log();
init_errors();
init_messages();
init_systemPromptType();

// src/utils/hooks/skillImprovement.ts
init_postSamplingHooks();
function initSkillImprovement() {
  if (false) {}
}
async function applySkillImprovement(skillName, updates) {
  if (!skillName)
    return;
  const { join } = await import("path");
  const fs = await import("fs/promises");
  const filePath = join(getCwd(), ".claude", "skills", skillName, "SKILL.md");
  let currentContent;
  try {
    currentContent = await fs.readFile(filePath, "utf-8");
  } catch {
    logError(new Error(`Failed to read skill file for improvement: ${filePath}`));
    return;
  }
  const updateList = updates.map((u) => `- ${u.section}: ${u.change}`).join(`
`);
  const model = getSmallFastModel();
  const langfuseTrace = isLangfuseEnabled() ? createTrace({
    sessionId: getSessionId(),
    model,
    provider: getAPIProvider(),
    name: "skill-improvement-apply"
  }) : null;
  const response = await queryModelWithoutStreaming({
    messages: [
      createUserMessage({
        content: `You are editing a skill definition file. Apply the following improvements to the skill.

<current_skill_file>
${currentContent}
</current_skill_file>

<improvements>
${updateList}
</improvements>

Rules:
- Integrate the improvements naturally into the existing structure
- Preserve frontmatter (--- block) exactly as-is
- Preserve the overall format and style
- Do not remove existing content unless an improvement explicitly replaces it
- Output the complete updated file inside <updated_file> tags`
      })
    ],
    systemPrompt: asSystemPrompt([
      "You edit skill definition files to incorporate user preferences. Output only the updated file content."
    ]),
    thinkingConfig: { type: "disabled" },
    tools: [],
    signal: createAbortController().signal,
    options: {
      getToolPermissionContext: async () => getEmptyToolPermissionContext(),
      model,
      toolChoice: undefined,
      isNonInteractiveSession: false,
      hasAppendSystemPrompt: false,
      temperatureOverride: 0,
      agents: [],
      querySource: "skill_improvement_apply",
      mcpTools: [],
      langfuseTrace
    }
  });
  endTrace(langfuseTrace);
  const responseText = extractTextContent(Array.isArray(response.message.content) ? response.message.content : []).trim();
  const updatedContent = extractTag(responseText, "updated_file");
  if (!updatedContent) {
    logError(new Error("Skill improvement apply: no updated_file tag in response"));
    return;
  }
  try {
    await fs.writeFile(filePath, updatedContent, "utf-8");
  } catch (e) {
    logError(toError(e));
  }
}

// src/utils/backgroundHousekeeping.ts
init_state();

// src/utils/cleanup.ts
init_analytics();
init_cachePaths();
init_debug();
init_envUtils();
init_fsOperations();
init_imageStore();
init_lockfile();
init_log();
init_nativeInstaller();
init_pasteStore();
init_sessionStorage();
init_allErrors();
init_settings();
init_toolResultStorage();
init_worktree();
import * as fs from "fs/promises";
import { homedir } from "os";
import { join } from "path";
var DEFAULT_CLEANUP_PERIOD_DAYS = 30;
function getCutoffDate() {
  const settings = getSettings_DEPRECATED() || {};
  const cleanupPeriodDays = settings.cleanupPeriodDays ?? DEFAULT_CLEANUP_PERIOD_DAYS;
  const cleanupPeriodMs = cleanupPeriodDays * 24 * 60 * 60 * 1000;
  return new Date(Date.now() - cleanupPeriodMs);
}
function addCleanupResults(a, b) {
  return {
    messages: a.messages + b.messages,
    errors: a.errors + b.errors
  };
}
function convertFileNameToDate(filename) {
  const isoStr = filename.split(".")[0].replace(/T(\d{2})-(\d{2})-(\d{2})-(\d{3})Z/, "T$1:$2:$3.$4Z");
  return new Date(isoStr);
}
async function cleanupOldFilesInDirectory(dirPath, cutoffDate, isMessagePath) {
  const result = { messages: 0, errors: 0 };
  try {
    const files = await getFsImplementation().readdir(dirPath);
    for (const file of files) {
      try {
        const timestamp = convertFileNameToDate(file.name);
        if (timestamp < cutoffDate) {
          await getFsImplementation().unlink(join(dirPath, file.name));
          if (isMessagePath) {
            result.messages++;
          } else {
            result.errors++;
          }
        }
      } catch (error) {
        logError(error);
      }
    }
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code !== "ENOENT") {
      logError(error);
    }
  }
  return result;
}
async function cleanupOldMessageFiles() {
  const fsImpl = getFsImplementation();
  const cutoffDate = getCutoffDate();
  const errorPath = CACHE_PATHS.errors();
  const baseCachePath = CACHE_PATHS.baseLogs();
  let result = await cleanupOldFilesInDirectory(errorPath, cutoffDate, false);
  try {
    let dirents;
    try {
      dirents = await fsImpl.readdir(baseCachePath);
    } catch {
      return result;
    }
    const mcpLogDirs = dirents.filter((dirent) => dirent.isDirectory() && dirent.name.startsWith("mcp-logs-")).map((dirent) => join(baseCachePath, dirent.name));
    for (const mcpLogDir of mcpLogDirs) {
      result = addCleanupResults(result, await cleanupOldFilesInDirectory(mcpLogDir, cutoffDate, true));
      await tryRmdir(mcpLogDir, fsImpl);
    }
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code !== "ENOENT") {
      logError(error);
    }
  }
  return result;
}
async function unlinkIfOld(filePath, cutoffDate, fsImpl) {
  const stats = await fsImpl.stat(filePath);
  if (stats.mtime < cutoffDate) {
    await fsImpl.unlink(filePath);
    return true;
  }
  return false;
}
async function tryRmdir(dirPath, fsImpl) {
  try {
    await fsImpl.rmdir(dirPath);
  } catch {}
}
async function cleanupOldSessionFiles() {
  const cutoffDate = getCutoffDate();
  const result = { messages: 0, errors: 0 };
  const projectsDir = getProjectsDir();
  const fsImpl = getFsImplementation();
  let projectDirents;
  try {
    projectDirents = await fsImpl.readdir(projectsDir);
  } catch {
    return result;
  }
  for (const projectDirent of projectDirents) {
    if (!projectDirent.isDirectory())
      continue;
    const projectDir = join(projectsDir, projectDirent.name);
    let entries;
    try {
      entries = await fsImpl.readdir(projectDir);
    } catch {
      result.errors++;
      continue;
    }
    for (const entry of entries) {
      if (entry.isFile()) {
        if (!entry.name.endsWith(".jsonl") && !entry.name.endsWith(".cast")) {
          continue;
        }
        try {
          if (await unlinkIfOld(join(projectDir, entry.name), cutoffDate, fsImpl)) {
            result.messages++;
          }
        } catch {
          result.errors++;
        }
      } else if (entry.isDirectory()) {
        const sessionDir = join(projectDir, entry.name);
        const toolResultsDir = join(sessionDir, TOOL_RESULTS_SUBDIR);
        let toolDirs;
        try {
          toolDirs = await fsImpl.readdir(toolResultsDir);
        } catch {
          await tryRmdir(sessionDir, fsImpl);
          continue;
        }
        for (const toolEntry of toolDirs) {
          if (toolEntry.isFile()) {
            try {
              if (await unlinkIfOld(join(toolResultsDir, toolEntry.name), cutoffDate, fsImpl)) {
                result.messages++;
              }
            } catch {
              result.errors++;
            }
          } else if (toolEntry.isDirectory()) {
            const toolDirPath = join(toolResultsDir, toolEntry.name);
            let toolFiles;
            try {
              toolFiles = await fsImpl.readdir(toolDirPath);
            } catch {
              continue;
            }
            for (const tf of toolFiles) {
              if (!tf.isFile())
                continue;
              try {
                if (await unlinkIfOld(join(toolDirPath, tf.name), cutoffDate, fsImpl)) {
                  result.messages++;
                }
              } catch {
                result.errors++;
              }
            }
            await tryRmdir(toolDirPath, fsImpl);
          }
        }
        await tryRmdir(toolResultsDir, fsImpl);
        await tryRmdir(sessionDir, fsImpl);
      }
    }
    await tryRmdir(projectDir, fsImpl);
  }
  return result;
}
async function cleanupSingleDirectory(dirPath, extension, removeEmptyDir = true) {
  const cutoffDate = getCutoffDate();
  const result = { messages: 0, errors: 0 };
  const fsImpl = getFsImplementation();
  let dirents;
  try {
    dirents = await fsImpl.readdir(dirPath);
  } catch {
    return result;
  }
  for (const dirent of dirents) {
    if (!dirent.isFile() || !dirent.name.endsWith(extension))
      continue;
    try {
      if (await unlinkIfOld(join(dirPath, dirent.name), cutoffDate, fsImpl)) {
        result.messages++;
      }
    } catch {
      result.errors++;
    }
  }
  if (removeEmptyDir) {
    await tryRmdir(dirPath, fsImpl);
  }
  return result;
}
function cleanupOldPlanFiles() {
  const plansDir = join(getClaudeConfigHomeDir(), "plans");
  return cleanupSingleDirectory(plansDir, ".md");
}
async function cleanupOldFileHistoryBackups() {
  const cutoffDate = getCutoffDate();
  const result = { messages: 0, errors: 0 };
  const fsImpl = getFsImplementation();
  try {
    const configDir = getClaudeConfigHomeDir();
    const fileHistoryStorageDir = join(configDir, "file-history");
    let dirents;
    try {
      dirents = await fsImpl.readdir(fileHistoryStorageDir);
    } catch {
      return result;
    }
    const fileHistorySessionsDirs = dirents.filter((dirent) => dirent.isDirectory()).map((dirent) => join(fileHistoryStorageDir, dirent.name));
    await Promise.all(fileHistorySessionsDirs.map(async (fileHistorySessionDir) => {
      try {
        const stats = await fsImpl.stat(fileHistorySessionDir);
        if (stats.mtime < cutoffDate) {
          await fsImpl.rm(fileHistorySessionDir, {
            recursive: true,
            force: true
          });
          result.messages++;
        }
      } catch {
        result.errors++;
      }
    }));
    await tryRmdir(fileHistoryStorageDir, fsImpl);
  } catch (error) {
    logError(error);
  }
  return result;
}
async function cleanupOldSessionEnvDirs() {
  const cutoffDate = getCutoffDate();
  const result = { messages: 0, errors: 0 };
  const fsImpl = getFsImplementation();
  try {
    const configDir = getClaudeConfigHomeDir();
    const sessionEnvBaseDir = join(configDir, "session-env");
    let dirents;
    try {
      dirents = await fsImpl.readdir(sessionEnvBaseDir);
    } catch {
      return result;
    }
    const sessionEnvDirs = dirents.filter((dirent) => dirent.isDirectory()).map((dirent) => join(sessionEnvBaseDir, dirent.name));
    for (const sessionEnvDir of sessionEnvDirs) {
      try {
        const stats = await fsImpl.stat(sessionEnvDir);
        if (stats.mtime < cutoffDate) {
          await fsImpl.rm(sessionEnvDir, { recursive: true, force: true });
          result.messages++;
        }
      } catch {
        result.errors++;
      }
    }
    await tryRmdir(sessionEnvBaseDir, fsImpl);
  } catch (error) {
    logError(error);
  }
  return result;
}
async function cleanupOldDebugLogs() {
  const cutoffDate = getCutoffDate();
  const result = { messages: 0, errors: 0 };
  const fsImpl = getFsImplementation();
  const debugDir = join(getClaudeConfigHomeDir(), "debug");
  let dirents;
  try {
    dirents = await fsImpl.readdir(debugDir);
  } catch {
    return result;
  }
  for (const dirent of dirents) {
    if (!dirent.isFile() || !dirent.name.endsWith(".txt") || dirent.name === "latest") {
      continue;
    }
    try {
      if (await unlinkIfOld(join(debugDir, dirent.name), cutoffDate, fsImpl)) {
        result.messages++;
      }
    } catch {
      result.errors++;
    }
  }
  return result;
}
var ONE_DAY_MS = 24 * 60 * 60 * 1000;
async function cleanupNpmCacheForAnthropicPackages() {
  const markerPath = join(getClaudeConfigHomeDir(), ".npm-cache-cleanup");
  try {
    const stat2 = await fs.stat(markerPath);
    if (Date.now() - stat2.mtimeMs < ONE_DAY_MS) {
      logForDebugging("npm cache cleanup: skipping, ran recently");
      return;
    }
  } catch {}
  try {
    await lock(markerPath, { retries: 0, realpath: false });
  } catch {
    logForDebugging("npm cache cleanup: skipping, lock held");
    return;
  }
  logForDebugging("npm cache cleanup: starting");
  const npmCachePath = join(homedir(), ".npm", "_cacache");
  const NPM_CACHE_RETENTION_COUNT = 5;
  const startTime = Date.now();
  try {
    const cacache = await import("./chunk-whssn5y4.js");
    const cutoff = startTime - ONE_DAY_MS;
    const stream = cacache.ls.stream(npmCachePath);
    const anthropicEntries = [];
    for await (const entry of stream) {
      if (entry.key.includes("@anthropic-ai/claude-")) {
        anthropicEntries.push({ key: entry.key, time: entry.time });
      }
    }
    const byPackage = new Map;
    for (const entry of anthropicEntries) {
      const atVersionIdx = entry.key.lastIndexOf("@");
      const pkgName = atVersionIdx > 0 ? entry.key.slice(0, atVersionIdx) : entry.key;
      const existing = byPackage.get(pkgName) ?? [];
      existing.push(entry);
      byPackage.set(pkgName, existing);
    }
    const keysToRemove = [];
    for (const [, entries] of byPackage) {
      entries.sort((a, b) => b.time - a.time);
      for (let i = 0;i < entries.length; i++) {
        const entry = entries[i];
        if (entry.time < cutoff || i >= NPM_CACHE_RETENTION_COUNT) {
          keysToRemove.push(entry.key);
        }
      }
    }
    await Promise.all(keysToRemove.map((key) => cacache.rm.entry(npmCachePath, key)));
    await fs.writeFile(markerPath, new Date().toISOString());
    const durationMs = Date.now() - startTime;
    if (keysToRemove.length > 0) {
      logForDebugging(`npm cache cleanup: Removed ${keysToRemove.length} old @anthropic-ai entries in ${durationMs}ms`);
    } else {
      logForDebugging(`npm cache cleanup: completed in ${durationMs}ms`);
    }
    logEvent("tengu_npm_cache_cleanup", {
      success: true,
      durationMs,
      entriesRemoved: keysToRemove.length
    });
  } catch (error) {
    logError(error);
    logEvent("tengu_npm_cache_cleanup", {
      success: false,
      durationMs: Date.now() - startTime
    });
  } finally {
    await unlock(markerPath, { realpath: false }).catch(() => {});
  }
}
async function cleanupOldVersionsThrottled() {
  const markerPath = join(getClaudeConfigHomeDir(), ".version-cleanup");
  try {
    const stat2 = await fs.stat(markerPath);
    if (Date.now() - stat2.mtimeMs < ONE_DAY_MS) {
      logForDebugging("version cleanup: skipping, ran recently");
      return;
    }
  } catch {}
  try {
    await lock(markerPath, { retries: 0, realpath: false });
  } catch {
    logForDebugging("version cleanup: skipping, lock held");
    return;
  }
  logForDebugging("version cleanup: starting (throttled)");
  try {
    await cleanupOldVersions();
    await fs.writeFile(markerPath, new Date().toISOString());
  } catch (error) {
    logError(error);
  } finally {
    await unlock(markerPath, { realpath: false }).catch(() => {});
  }
}
async function cleanupOldMessageFilesInBackground() {
  const { errors } = getSettingsWithAllErrors();
  if (errors.length > 0 && rawSettingsContainsKey("cleanupPeriodDays")) {
    logForDebugging("Skipping cleanup: settings have validation errors but cleanupPeriodDays was explicitly set. Fix settings errors to enable cleanup.");
    return;
  }
  await cleanupOldMessageFiles();
  await cleanupOldSessionFiles();
  await cleanupOldPlanFiles();
  await cleanupOldFileHistoryBackups();
  await cleanupOldSessionEnvDirs();
  await cleanupOldDebugLogs();
  await cleanupOldImageCaches();
  await cleanupOldPastes(getCutoffDate());
  const removedWorktrees = await cleanupStaleAgentWorktrees(getCutoffDate());
  if (removedWorktrees > 0) {
    logEvent("tengu_worktree_cleanup", { removed: removedWorktrees });
  }
  if (process.env.USER_TYPE === "ant") {
    await cleanupNpmCacheForAnthropicPackages();
  }
}

// src/utils/backgroundHousekeeping.ts
init_nativeInstaller();
init_pluginAutoupdate();
var extractMemoriesModule = (init_extractMemories(), __toCommonJS(exports_extractMemories));
var registerProtocolModule = (init_registerProtocol(), __toCommonJS(exports_registerProtocol));
var RECURRING_CLEANUP_INTERVAL_MS = 24 * 60 * 60 * 1000;
var DELAY_VERY_SLOW_OPERATIONS_THAT_HAPPEN_EVERY_SESSION = 10 * 60 * 1000;
function startBackgroundHousekeeping() {
  initMagicDocs();
  initSkillImprovement();
  if (true) {
    extractMemoriesModule.initExtractMemories();
  }
  initAutoDream();
  autoUpdateMarketplacesAndPluginsInBackground();
  if (getIsInteractive()) {
    registerProtocolModule.ensureDeepLinkProtocolRegistered();
  }
  let needsCleanup = true;
  async function runVerySlowOps() {
    if (getIsInteractive() && getLastInteractionTime() > Date.now() - 1000 * 60) {
      setTimeout(runVerySlowOps, DELAY_VERY_SLOW_OPERATIONS_THAT_HAPPEN_EVERY_SESSION).unref();
      return;
    }
    if (needsCleanup) {
      needsCleanup = false;
      await cleanupOldMessageFilesInBackground();
    }
    if (getIsInteractive() && getLastInteractionTime() > Date.now() - 1000 * 60) {
      setTimeout(runVerySlowOps, DELAY_VERY_SLOW_OPERATIONS_THAT_HAPPEN_EVERY_SESSION).unref();
      return;
    }
    await cleanupOldVersions();
  }
  setTimeout(runVerySlowOps, DELAY_VERY_SLOW_OPERATIONS_THAT_HAPPEN_EVERY_SESSION).unref();
  if (process.env.USER_TYPE === "ant") {
    const interval = setInterval(() => {
      cleanupNpmCacheForAnthropicPackages();
      cleanupOldVersionsThrottled();
    }, RECURRING_CLEANUP_INTERVAL_MS);
    interval.unref();
  }
}

export { applySkillImprovement, startBackgroundHousekeeping };
