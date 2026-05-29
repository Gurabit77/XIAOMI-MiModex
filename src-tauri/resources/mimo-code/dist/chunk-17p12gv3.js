// @bun
import {
  renameRecordingForSession
} from "./chunk-4x70hd9p.js";
import {
  TODO_WRITE_TOOL_NAME,
  TodoListSchema,
  adoptResumedSessionFile,
  asSessionId,
  clearCommandMemoizationCaches,
  clearCommandsCache,
  clearMemoryFileCaches,
  clearSkillCaches,
  executeConfigChangeHooks,
  fileHistoryRestoreStateFromLog,
  getActiveAgentsFromList,
  getAgentDefinitionsWithOverrides,
  getCurrentWorktreeSession,
  getPlansDirectory,
  getSkillsPath,
  hasBlockingResult,
  init_Shell,
  init_attachments,
  init_claudemd,
  init_commands1 as init_commands,
  init_concurrentSessions,
  init_constants4 as init_constants,
  init_cost_tracker,
  init_fileHistory,
  init_hooks1 as init_hooks,
  init_ids,
  init_loadAgentsDir,
  init_loadSkillsDir,
  init_messages1 as init_messages,
  init_plans,
  init_sessionStorage,
  init_types,
  init_worktree,
  onDynamicSkillsLoaded,
  recordContentReplacement,
  resetSentSkillNames,
  resetSessionFilePointer,
  restoreCostStateForSession,
  restoreSessionMetadata,
  restoreWorktreeSession,
  saveWorktreeState,
  setCwd,
  updateSessionName
} from "./chunk-ktw919wt.js";
import {
  clearSystemPromptSections,
  init_systemPromptSections
} from "./chunk-jz6xf3ty.js";
import {
  chokidar_default,
  init_chokidar
} from "./chunk-ehtwnxpg.js";
import {
  attributionRestoreStateFromLog,
  init_commitAttribution,
  restoreAttributionStateFromSnapshots
} from "./chunk-1th1nz5d.js";
import {
  init_tasks,
  isTodoV2Enabled
} from "./chunk-ypmcesxe.js";
import {
  init_model,
  parseUserSpecifiedModel
} from "./chunk-1ghcng4e.js";
import {
  init_analytics,
  logEvent
} from "./chunk-f2mhrmww.js";
import {
  getCwd,
  init_cwd
} from "./chunk-dxvkxgnf.js";
import {
  getFsImplementation,
  init_cleanupRegistry,
  init_debug,
  init_fsOperations,
  logForDebugging,
  registerCleanup
} from "./chunk-rpbc3b7k.js";
import {
  createSignal,
  getAdditionalDirectoriesForClaudeMd,
  getMainLoopModelOverride,
  getSessionId,
  init_signal,
  init_state,
  setMainLoopModelOverride,
  setMainThreadAgentType,
  setOriginalCwd,
  switchSession
} from "./chunk-j5xzpm59.js";
import {
  __esm,
  __export,
  __toCommonJS
} from "./chunk-qp2qdcda.js";

// src/services/contextCollapse/persist.ts
var exports_persist = {};
__export(exports_persist, {
  restoreFromEntries: () => restoreFromEntries
});
var restoreFromEntries = () => {};
var init_persist = () => {};

// src/utils/skills/skillChangeDetector.ts
init_chokidar();
init_state();
init_commands();
init_analytics();
init_loadSkillsDir();
init_attachments();
init_cleanupRegistry();
init_debug();
init_fsOperations();
init_hooks();
init_signal();
import * as platformPath from "path";
var FILE_STABILITY_THRESHOLD_MS = 1000;
var FILE_STABILITY_POLL_INTERVAL_MS = 500;
var RELOAD_DEBOUNCE_MS = 300;
var POLLING_INTERVAL_MS = 2000;
var USE_POLLING = typeof Bun !== "undefined";
var watcher = null;
var reloadTimer = null;
var pendingChangedPaths = new Set;
var initialized = false;
var disposed = false;
var dynamicSkillsCallbackRegistered = false;
var unregisterCleanup = null;
var skillsChanged = createSignal();
var testOverrides = null;
async function initialize() {
  if (initialized || disposed)
    return;
  initialized = true;
  if (!dynamicSkillsCallbackRegistered) {
    dynamicSkillsCallbackRegistered = true;
    onDynamicSkillsLoaded(() => {
      clearCommandMemoizationCaches();
      skillsChanged.emit();
    });
  }
  const paths = await getWatchablePaths();
  if (paths.length === 0)
    return;
  logForDebugging(`Watching for changes in skill/command directories: ${paths.join(", ")}...`);
  watcher = chokidar_default.watch(paths, {
    persistent: true,
    ignoreInitial: true,
    depth: 2,
    awaitWriteFinish: {
      stabilityThreshold: testOverrides?.stabilityThreshold ?? FILE_STABILITY_THRESHOLD_MS,
      pollInterval: testOverrides?.pollInterval ?? FILE_STABILITY_POLL_INTERVAL_MS
    },
    ignored: (path, stats) => {
      if (stats && !stats.isFile() && !stats.isDirectory())
        return true;
      return path.split(platformPath.sep).some((dir) => dir === ".git");
    },
    ignorePermissionErrors: true,
    usePolling: USE_POLLING,
    interval: testOverrides?.chokidarInterval ?? POLLING_INTERVAL_MS,
    atomic: true
  });
  watcher.on("add", handleChange);
  watcher.on("change", handleChange);
  watcher.on("unlink", handleChange);
  unregisterCleanup = registerCleanup(async () => {
    await dispose();
  });
}
function dispose() {
  disposed = true;
  if (unregisterCleanup) {
    unregisterCleanup();
    unregisterCleanup = null;
  }
  let closePromise = Promise.resolve();
  if (watcher) {
    closePromise = watcher.close();
    watcher = null;
  }
  if (reloadTimer) {
    clearTimeout(reloadTimer);
    reloadTimer = null;
  }
  pendingChangedPaths.clear();
  skillsChanged.clear();
  return closePromise;
}
var subscribe = skillsChanged.subscribe;
async function getWatchablePaths() {
  const fs = getFsImplementation();
  const paths = [];
  const userSkillsPath = getSkillsPath("userSettings", "skills");
  if (userSkillsPath) {
    try {
      await fs.stat(userSkillsPath);
      paths.push(userSkillsPath);
    } catch {}
  }
  const userCommandsPath = getSkillsPath("userSettings", "commands");
  if (userCommandsPath) {
    try {
      await fs.stat(userCommandsPath);
      paths.push(userCommandsPath);
    } catch {}
  }
  const projectSkillsPath = getSkillsPath("projectSettings", "skills");
  if (projectSkillsPath) {
    try {
      const absolutePath = platformPath.resolve(projectSkillsPath);
      await fs.stat(absolutePath);
      paths.push(absolutePath);
    } catch {}
  }
  const projectCommandsPath = getSkillsPath("projectSettings", "commands");
  if (projectCommandsPath) {
    try {
      const absolutePath = platformPath.resolve(projectCommandsPath);
      await fs.stat(absolutePath);
      paths.push(absolutePath);
    } catch {}
  }
  for (const dir of getAdditionalDirectoriesForClaudeMd()) {
    const additionalSkillsPath = platformPath.join(dir, ".claude", "skills");
    try {
      await fs.stat(additionalSkillsPath);
      paths.push(additionalSkillsPath);
    } catch {}
  }
  return paths;
}
function handleChange(path) {
  logForDebugging(`Detected skill change: ${path}`);
  logEvent("tengu_skill_file_changed", {
    source: "chokidar"
  });
  scheduleReload(path);
}
function scheduleReload(changedPath) {
  pendingChangedPaths.add(changedPath);
  if (reloadTimer)
    clearTimeout(reloadTimer);
  reloadTimer = setTimeout(async () => {
    reloadTimer = null;
    const paths = [...pendingChangedPaths];
    pendingChangedPaths.clear();
    const results = await executeConfigChangeHooks("skills", paths[0]);
    if (hasBlockingResult(results)) {
      logForDebugging(`ConfigChange hook blocked skill reload (${paths.length} paths)`);
      return;
    }
    clearSkillCaches();
    clearCommandsCache();
    resetSentSkillNames();
    skillsChanged.emit();
  }, testOverrides?.reloadDebounce ?? RELOAD_DEBOUNCE_MS);
}
async function resetForTesting(overrides) {
  if (watcher) {
    await watcher.close();
    watcher = null;
  }
  if (reloadTimer) {
    clearTimeout(reloadTimer);
    reloadTimer = null;
  }
  pendingChangedPaths.clear();
  skillsChanged.clear();
  initialized = false;
  disposed = false;
  testOverrides = overrides ?? null;
}
var skillChangeDetector = {
  initialize,
  dispose,
  subscribe,
  resetForTesting
};

// src/utils/sessionRestore.ts
init_state();
init_systemPromptSections();
init_cost_tracker();
init_loadAgentsDir();
init_constants();
init_ids();
import { dirname } from "path";
init_claudemd();
init_commitAttribution();
init_concurrentSessions();
init_cwd();
init_debug();
init_fileHistory();
init_messages();
init_model();
init_plans();
init_Shell();
init_sessionStorage();
init_tasks();
init_types();
init_worktree();
function extractTodosFromTranscript(messages) {
  for (let i = messages.length - 1;i >= 0; i--) {
    const msg = messages[i];
    if (msg?.type !== "assistant")
      continue;
    const toolUse = msg.message.content.find((block) => block.type === "tool_use" && block.name === TODO_WRITE_TOOL_NAME);
    if (!toolUse || toolUse.type !== "tool_use")
      continue;
    const input = toolUse.input;
    if (input === null || typeof input !== "object")
      return [];
    const parsed = TodoListSchema().safeParse(input.todos);
    return parsed.success ? parsed.data : [];
  }
  return [];
}
function restoreSessionStateFromLog(result, setAppState) {
  if (result.fileHistorySnapshots && result.fileHistorySnapshots.length > 0) {
    fileHistoryRestoreStateFromLog(result.fileHistorySnapshots, (newState) => {
      setAppState((prev) => ({ ...prev, fileHistory: newState }));
    });
  }
  if (result.attributionSnapshots && result.attributionSnapshots.length > 0) {
    attributionRestoreStateFromLog(result.attributionSnapshots, (newState) => {
      setAppState((prev) => ({ ...prev, attribution: newState }));
    });
  }
  if (true) {
    (init_persist(), __toCommonJS(exports_persist)).restoreFromEntries(result.contextCollapseCommits ?? [], result.contextCollapseSnapshot);
  }
  if (!isTodoV2Enabled() && result.messages && result.messages.length > 0) {
    const todos = extractTodosFromTranscript(result.messages);
    if (todos.length > 0) {
      const agentId = getSessionId();
      setAppState((prev) => ({
        ...prev,
        todos: { ...prev.todos, [agentId]: todos }
      }));
    }
  }
}
function computeRestoredAttributionState(result) {
  if (result.attributionSnapshots && result.attributionSnapshots.length > 0) {
    return restoreAttributionStateFromSnapshots(result.attributionSnapshots);
  }
  return;
}
function computeStandaloneAgentContext(agentName, agentColor) {
  if (!agentName && !agentColor) {
    return;
  }
  return {
    name: agentName ?? "",
    color: agentColor === "default" ? undefined : agentColor
  };
}
function restoreAgentFromSession(agentSetting, currentAgentDefinition, agentDefinitions) {
  if (currentAgentDefinition) {
    return { agentDefinition: currentAgentDefinition, agentType: undefined };
  }
  if (!agentSetting) {
    setMainThreadAgentType(undefined);
    return { agentDefinition: undefined, agentType: undefined };
  }
  const resumedAgent = agentDefinitions.activeAgents.find((agent) => agent.agentType === agentSetting);
  if (!resumedAgent) {
    logForDebugging(`Resumed session had agent "${agentSetting}" but it is no longer available. Using default behavior.`);
    setMainThreadAgentType(undefined);
    return { agentDefinition: undefined, agentType: undefined };
  }
  setMainThreadAgentType(resumedAgent.agentType);
  if (!getMainLoopModelOverride() && resumedAgent.model && resumedAgent.model !== "inherit") {
    setMainLoopModelOverride(parseUserSpecifiedModel(resumedAgent.model));
  }
  return { agentDefinition: resumedAgent, agentType: resumedAgent.agentType };
}
async function refreshAgentDefinitionsForModeSwitch(modeWasSwitched, currentCwd, cliAgents, currentAgentDefinitions) {
  if (true) {
    return currentAgentDefinitions;
  }
  getAgentDefinitionsWithOverrides.cache.clear?.();
  const freshAgentDefs = await getAgentDefinitionsWithOverrides(currentCwd);
  const freshAllAgents = [...freshAgentDefs.allAgents, ...cliAgents];
  return {
    ...freshAgentDefs,
    allAgents: freshAllAgents,
    activeAgents: getActiveAgentsFromList(freshAllAgents)
  };
}
function restoreWorktreeForResume(worktreeSession) {
  const fresh = getCurrentWorktreeSession();
  if (fresh) {
    saveWorktreeState(fresh);
    return;
  }
  if (!worktreeSession)
    return;
  try {
    process.chdir(worktreeSession.worktreePath);
  } catch {
    saveWorktreeState(null);
    return;
  }
  setCwd(worktreeSession.worktreePath);
  setOriginalCwd(getCwd());
  restoreWorktreeSession(worktreeSession);
  clearMemoryFileCaches();
  clearSystemPromptSections();
  getPlansDirectory.cache.clear?.();
}
function exitRestoredWorktree() {
  const current = getCurrentWorktreeSession();
  if (!current)
    return;
  restoreWorktreeSession(null);
  clearMemoryFileCaches();
  clearSystemPromptSections();
  getPlansDirectory.cache.clear?.();
  try {
    process.chdir(current.originalCwd);
  } catch {
    return;
  }
  setCwd(current.originalCwd);
  setOriginalCwd(getCwd());
}
async function processResumedConversation(result, opts, context) {
  let modeWarning;
  if (false) {}
  if (!opts.forkSession) {
    const sid = opts.sessionIdOverride ?? result.sessionId;
    if (sid) {
      switchSession(asSessionId(sid), opts.transcriptPath ? dirname(opts.transcriptPath) : null);
      await renameRecordingForSession();
      await resetSessionFilePointer();
      restoreCostStateForSession(sid);
    }
  } else if (result.contentReplacements?.length) {
    await recordContentReplacement(result.contentReplacements);
  }
  restoreSessionMetadata(opts.forkSession ? { ...result, worktreeSession: undefined } : result);
  if (!opts.forkSession) {
    restoreWorktreeForResume(result.worktreeSession);
    adoptResumedSessionFile();
  }
  if (true) {
    (init_persist(), __toCommonJS(exports_persist)).restoreFromEntries(result.contextCollapseCommits ?? [], result.contextCollapseSnapshot);
  }
  const { agentDefinition: restoredAgent, agentType: resumedAgentType } = restoreAgentFromSession(result.agentSetting, context.mainThreadAgentDefinition, context.agentDefinitions);
  if (false) {}
  const restoredAttribution = opts.includeAttribution ? computeRestoredAttributionState(result) : undefined;
  const standaloneAgentContext = computeStandaloneAgentContext(result.agentName, result.agentColor);
  updateSessionName(result.agentName);
  const refreshedAgentDefs = await refreshAgentDefinitionsForModeSwitch(!!modeWarning, context.currentCwd, context.cliAgents, context.agentDefinitions);
  return {
    messages: result.messages,
    fileHistorySnapshots: result.fileHistorySnapshots,
    contentReplacements: result.contentReplacements,
    agentName: result.agentName,
    agentColor: result.agentColor === "default" ? undefined : result.agentColor,
    restoredAgentDef: restoredAgent,
    initialState: {
      ...context.initialState,
      ...resumedAgentType && { agent: resumedAgentType },
      ...restoredAttribution && { attribution: restoredAttribution },
      ...standaloneAgentContext && { standaloneAgentContext },
      agentDefinitions: refreshedAgentDefs
    }
  };
}

export { skillChangeDetector, exports_persist, init_persist, restoreSessionStateFromLog, computeStandaloneAgentContext, restoreAgentFromSession, restoreWorktreeForResume, exitRestoredWorktree, processResumedConversation };
