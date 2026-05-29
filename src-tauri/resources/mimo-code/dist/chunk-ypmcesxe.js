// @bun
import {
  TEAM_LEAD_NAME,
  init_constants
} from "./chunk-4jm600zv.js";
import {
  getAgentName,
  getTeamName,
  getTeammateContext,
  init_array,
  init_lockfile,
  init_teammate,
  init_teammateContext,
  isTeammate,
  lock
} from "./chunk-zwarn9h7.js";
import {
  init_lazySchema,
  lazySchema
} from "./chunk-64c1avct.js";
import {
  init_v4
} from "./chunk-8g747a8x.js";
import {
  exports_external
} from "./chunk-d7886r6a.js";
import {
  gitExe,
  init_git
} from "./chunk-t6jhrn34.js";
import {
  execFileNoThrowWithCwd,
  init_execFileNoThrow
} from "./chunk-qcwbd71h.js";
import {
  init_log,
  logError
} from "./chunk-w5ahy59y.js";
import {
  errorMessage,
  getErrnoCode,
  init_debug,
  init_errors,
  init_slowOperations,
  jsonParse,
  jsonStringify,
  logForDebugging
} from "./chunk-rpbc3b7k.js";
import {
  createSignal,
  getIsNonInteractiveSession,
  getSessionCreatedTeams,
  getSessionId,
  init_signal,
  init_state
} from "./chunk-j5xzpm59.js";
import {
  getClaudeConfigHomeDir,
  getTeamsDir,
  init_envUtils,
  isEnvTruthy
} from "./chunk-hxhwzgnn.js";
import {
  __esm,
  __require
} from "./chunk-qp2qdcda.js";

// src/utils/tasks.ts
import { mkdir, readdir, readFile, unlink, writeFile } from "fs/promises";
import { join } from "path";
function setLeaderTeamName(teamName) {
  if (leaderTeamName === teamName)
    return;
  leaderTeamName = teamName;
  notifyTasksUpdated();
}
function clearLeaderTeamName() {
  if (leaderTeamName === undefined)
    return;
  leaderTeamName = undefined;
  notifyTasksUpdated();
}
function notifyTasksUpdated() {
  try {
    tasksUpdated.emit();
  } catch {}
}
function getHighWaterMarkPath(taskListId) {
  return join(getTasksDir(taskListId), HIGH_WATER_MARK_FILE);
}
async function readHighWaterMark(taskListId) {
  const path = getHighWaterMarkPath(taskListId);
  try {
    const content = (await readFile(path, "utf-8")).trim();
    const value = parseInt(content, 10);
    return isNaN(value) ? 0 : value;
  } catch {
    return 0;
  }
}
async function writeHighWaterMark(taskListId, value) {
  const path = getHighWaterMarkPath(taskListId);
  await writeFile(path, String(value));
}
function isTodoV2Enabled() {
  if (isEnvTruthy(process.env.CLAUDE_CODE_ENABLE_TASKS)) {
    return true;
  }
  return !getIsNonInteractiveSession();
}
async function resetTaskList(taskListId) {
  const dir = getTasksDir(taskListId);
  const lockPath = await ensureTaskListLockFile(taskListId);
  let release;
  try {
    release = await lock(lockPath, LOCK_OPTIONS);
    const currentHighest = await findHighestTaskIdFromFiles(taskListId);
    if (currentHighest > 0) {
      const existingMark = await readHighWaterMark(taskListId);
      if (currentHighest > existingMark) {
        await writeHighWaterMark(taskListId, currentHighest);
      }
    }
    let files;
    try {
      files = await readdir(dir);
    } catch {
      files = [];
    }
    for (const file of files) {
      if (file.endsWith(".json") && !file.startsWith(".")) {
        const filePath = join(dir, file);
        try {
          await unlink(filePath);
        } catch {}
      }
    }
    notifyTasksUpdated();
  } finally {
    if (release) {
      await release();
    }
  }
}
function getTaskListId() {
  if (process.env.CLAUDE_CODE_TASK_LIST_ID) {
    return process.env.CLAUDE_CODE_TASK_LIST_ID;
  }
  const teammateCtx = getTeammateContext();
  if (teammateCtx) {
    return teammateCtx.teamName;
  }
  return getTeamName() || leaderTeamName || getSessionId();
}
function sanitizePathComponent(input) {
  return input.replace(/[^a-zA-Z0-9_-]/g, "-");
}
function getTasksDir(taskListId) {
  return join(getClaudeConfigHomeDir(), "tasks", sanitizePathComponent(taskListId));
}
function getTaskPath(taskListId, taskId) {
  return join(getTasksDir(taskListId), `${sanitizePathComponent(taskId)}.json`);
}
async function ensureTasksDir(taskListId) {
  const dir = getTasksDir(taskListId);
  try {
    await mkdir(dir, { recursive: true });
  } catch {}
}
async function findHighestTaskIdFromFiles(taskListId) {
  const dir = getTasksDir(taskListId);
  let files;
  try {
    files = await readdir(dir);
  } catch {
    return 0;
  }
  let highest = 0;
  for (const file of files) {
    if (!file.endsWith(".json")) {
      continue;
    }
    const taskId = parseInt(file.replace(".json", ""), 10);
    if (!isNaN(taskId) && taskId > highest) {
      highest = taskId;
    }
  }
  return highest;
}
async function findHighestTaskId(taskListId) {
  const [fromFiles, fromMark] = await Promise.all([
    findHighestTaskIdFromFiles(taskListId),
    readHighWaterMark(taskListId)
  ]);
  return Math.max(fromFiles, fromMark);
}
async function createTask(taskListId, taskData) {
  const lockPath = await ensureTaskListLockFile(taskListId);
  let release;
  try {
    release = await lock(lockPath, LOCK_OPTIONS);
    const highestId = await findHighestTaskId(taskListId);
    const id = String(highestId + 1);
    const task = { id, ...taskData };
    const path = getTaskPath(taskListId, id);
    await writeFile(path, jsonStringify(task, null, 2));
    notifyTasksUpdated();
    return id;
  } finally {
    if (release) {
      await release();
    }
  }
}
async function getTask(taskListId, taskId) {
  const path = getTaskPath(taskListId, taskId);
  try {
    const content = await readFile(path, "utf-8");
    const data = jsonParse(content);
    if (process.env.USER_TYPE === "ant") {
      if (data.status === "open")
        data.status = "pending";
      else if (data.status === "resolved")
        data.status = "completed";
      else if (data.status && ["planning", "implementing", "reviewing", "verifying"].includes(data.status)) {
        data.status = "in_progress";
      }
    }
    const parsed = TaskSchema().safeParse(data);
    if (!parsed.success) {
      logForDebugging(`[Tasks] Task ${taskId} failed schema validation: ${parsed.error.message}`);
      return null;
    }
    return parsed.data;
  } catch (e) {
    const code = getErrnoCode(e);
    if (code === "ENOENT") {
      return null;
    }
    logForDebugging(`[Tasks] Failed to read task ${taskId}: ${errorMessage(e)}`);
    logError(e);
    return null;
  }
}
async function updateTaskUnsafe(taskListId, taskId, updates) {
  const existing = await getTask(taskListId, taskId);
  if (!existing) {
    return null;
  }
  const updated = { ...existing, ...updates, id: taskId };
  const path = getTaskPath(taskListId, taskId);
  await writeFile(path, jsonStringify(updated, null, 2));
  notifyTasksUpdated();
  return updated;
}
async function updateTask(taskListId, taskId, updates) {
  const path = getTaskPath(taskListId, taskId);
  const taskBeforeLock = await getTask(taskListId, taskId);
  if (!taskBeforeLock) {
    return null;
  }
  let release;
  try {
    release = await lock(path, LOCK_OPTIONS);
    return await updateTaskUnsafe(taskListId, taskId, updates);
  } finally {
    await release?.();
  }
}
async function deleteTask(taskListId, taskId) {
  const path = getTaskPath(taskListId, taskId);
  try {
    const numericId = parseInt(taskId, 10);
    if (!isNaN(numericId)) {
      const currentMark = await readHighWaterMark(taskListId);
      if (numericId > currentMark) {
        await writeHighWaterMark(taskListId, numericId);
      }
    }
    try {
      await unlink(path);
    } catch (e) {
      const code = getErrnoCode(e);
      if (code === "ENOENT") {
        return false;
      }
      throw e;
    }
    const allTasks = await listTasks(taskListId);
    for (const task of allTasks) {
      const newBlocks = task.blocks.filter((id) => id !== taskId);
      const newBlockedBy = task.blockedBy.filter((id) => id !== taskId);
      if (newBlocks.length !== task.blocks.length || newBlockedBy.length !== task.blockedBy.length) {
        await updateTask(taskListId, task.id, {
          blocks: newBlocks,
          blockedBy: newBlockedBy
        });
      }
    }
    notifyTasksUpdated();
    return true;
  } catch {
    return false;
  }
}
async function listTasks(taskListId) {
  const dir = getTasksDir(taskListId);
  let files;
  try {
    files = await readdir(dir);
  } catch {
    return [];
  }
  const taskIds = files.filter((f) => f.endsWith(".json")).map((f) => f.replace(".json", ""));
  const results = await Promise.all(taskIds.map((id) => getTask(taskListId, id)));
  return results.filter((t) => t !== null);
}
async function blockTask(taskListId, fromTaskId, toTaskId) {
  const [fromTask, toTask] = await Promise.all([
    getTask(taskListId, fromTaskId),
    getTask(taskListId, toTaskId)
  ]);
  if (!fromTask || !toTask) {
    return false;
  }
  if (!fromTask.blocks.includes(toTaskId)) {
    await updateTask(taskListId, fromTaskId, {
      blocks: [...fromTask.blocks, toTaskId]
    });
  }
  if (!toTask.blockedBy.includes(fromTaskId)) {
    await updateTask(taskListId, toTaskId, {
      blockedBy: [...toTask.blockedBy, fromTaskId]
    });
  }
  return true;
}
function getTaskListLockPath(taskListId) {
  return join(getTasksDir(taskListId), ".lock");
}
async function ensureTaskListLockFile(taskListId) {
  await ensureTasksDir(taskListId);
  const lockPath = getTaskListLockPath(taskListId);
  try {
    await writeFile(lockPath, "", { flag: "wx" });
  } catch {}
  return lockPath;
}
async function claimTask(taskListId, taskId, claimantAgentId, options = {}) {
  const taskPath = getTaskPath(taskListId, taskId);
  const taskBeforeLock = await getTask(taskListId, taskId);
  if (!taskBeforeLock) {
    return { success: false, reason: "task_not_found" };
  }
  if (options.checkAgentBusy) {
    return claimTaskWithBusyCheck(taskListId, taskId, claimantAgentId);
  }
  let release;
  try {
    release = await lock(taskPath, LOCK_OPTIONS);
    const task = await getTask(taskListId, taskId);
    if (!task) {
      return { success: false, reason: "task_not_found" };
    }
    if (task.owner && task.owner !== claimantAgentId) {
      return { success: false, reason: "already_claimed", task };
    }
    if (task.status === "completed") {
      return { success: false, reason: "already_resolved", task };
    }
    const allTasks = await listTasks(taskListId);
    const unresolvedTaskIds = new Set(allTasks.filter((t) => t.status !== "completed").map((t) => t.id));
    const blockedByTasks = task.blockedBy.filter((id) => unresolvedTaskIds.has(id));
    if (blockedByTasks.length > 0) {
      return { success: false, reason: "blocked", task, blockedByTasks };
    }
    const updated = await updateTaskUnsafe(taskListId, taskId, {
      owner: claimantAgentId
    });
    return { success: true, task: updated };
  } catch (error) {
    logForDebugging(`[Tasks] Failed to claim task ${taskId}: ${errorMessage(error)}`);
    logError(error);
    return { success: false, reason: "task_not_found" };
  } finally {
    if (release) {
      await release();
    }
  }
}
async function claimTaskWithBusyCheck(taskListId, taskId, claimantAgentId) {
  const lockPath = await ensureTaskListLockFile(taskListId);
  let release;
  try {
    release = await lock(lockPath, LOCK_OPTIONS);
    const allTasks = await listTasks(taskListId);
    const task = allTasks.find((t) => t.id === taskId);
    if (!task) {
      return { success: false, reason: "task_not_found" };
    }
    if (task.owner && task.owner !== claimantAgentId) {
      return { success: false, reason: "already_claimed", task };
    }
    if (task.status === "completed") {
      return { success: false, reason: "already_resolved", task };
    }
    const unresolvedTaskIds = new Set(allTasks.filter((t) => t.status !== "completed").map((t) => t.id));
    const blockedByTasks = task.blockedBy.filter((id) => unresolvedTaskIds.has(id));
    if (blockedByTasks.length > 0) {
      return { success: false, reason: "blocked", task, blockedByTasks };
    }
    const agentOpenTasks = allTasks.filter((t) => t.status !== "completed" && t.owner === claimantAgentId && t.id !== taskId);
    if (agentOpenTasks.length > 0) {
      return {
        success: false,
        reason: "agent_busy",
        task,
        busyWithTasks: agentOpenTasks.map((t) => t.id)
      };
    }
    const updated = await updateTask(taskListId, taskId, {
      owner: claimantAgentId
    });
    return { success: true, task: updated };
  } catch (error) {
    logForDebugging(`[Tasks] Failed to claim task ${taskId} with busy check: ${errorMessage(error)}`);
    logError(error);
    return { success: false, reason: "task_not_found" };
  } finally {
    if (release) {
      await release();
    }
  }
}
async function unassignTeammateTasks(teamName, teammateId, teammateName, reason) {
  const tasks = await listTasks(teamName);
  const unresolvedAssignedTasks = tasks.filter((t) => t.status !== "completed" && (t.owner === teammateId || t.owner === teammateName));
  for (const task of unresolvedAssignedTasks) {
    await updateTask(teamName, task.id, { owner: undefined, status: "pending" });
  }
  if (unresolvedAssignedTasks.length > 0) {
    logForDebugging(`[Tasks] Unassigned ${unresolvedAssignedTasks.length} task(s) from ${teammateName}`);
  }
  const actionVerb = reason === "terminated" ? "was terminated" : "has shut down";
  let notificationMessage = `${teammateName} ${actionVerb}.`;
  if (unresolvedAssignedTasks.length > 0) {
    const taskList = unresolvedAssignedTasks.map((t) => `#${t.id} "${t.subject}"`).join(", ");
    notificationMessage += ` ${unresolvedAssignedTasks.length} task(s) were unassigned: ${taskList}. Use TaskList to check availability and TaskUpdate with owner to reassign them to idle teammates.`;
  }
  return {
    unassignedTasks: unresolvedAssignedTasks.map((t) => ({
      id: t.id,
      subject: t.subject
    })),
    notificationMessage
  };
}
var tasksUpdated, leaderTeamName, onTasksUpdated, TASK_STATUSES, TaskStatusSchema, TaskSchema, HIGH_WATER_MARK_FILE = ".highwatermark", LOCK_OPTIONS, DEFAULT_TASKS_MODE_TASK_LIST_ID = "tasklist";
var init_tasks = __esm(() => {
  init_v4();
  init_state();
  init_array();
  init_debug();
  init_envUtils();
  init_errors();
  init_lazySchema();
  init_lockfile();
  init_log();
  init_signal();
  init_slowOperations();
  init_teammate();
  init_teammateContext();
  tasksUpdated = createSignal();
  onTasksUpdated = tasksUpdated.subscribe;
  TASK_STATUSES = ["pending", "in_progress", "completed"];
  TaskStatusSchema = lazySchema(() => exports_external.enum(["pending", "in_progress", "completed"]));
  TaskSchema = lazySchema(() => exports_external.object({
    id: exports_external.string(),
    subject: exports_external.string(),
    description: exports_external.string(),
    activeForm: exports_external.string().optional(),
    owner: exports_external.string().optional(),
    status: TaskStatusSchema(),
    blocks: exports_external.array(exports_external.string()),
    blockedBy: exports_external.array(exports_external.string()),
    metadata: exports_external.record(exports_external.string(), exports_external.unknown()).optional()
  }));
  LOCK_OPTIONS = {
    retries: {
      retries: 30,
      minTimeout: 5,
      maxTimeout: 100
    }
  };
});

// src/utils/swarm/backends/types.ts
function isPaneBackend(type) {
  return type === "tmux" || type === "iterm2" || type === "windows-terminal";
}
var init_types = () => {};

// src/utils/swarm/teamHelpers.ts
import { mkdirSync, readFileSync, writeFileSync } from "fs";
import { mkdir as mkdir2, readFile as readFile2, rm, writeFile as writeFile2 } from "fs/promises";
import { join as join2 } from "path";
function sanitizeName(name) {
  return name.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
}
function sanitizeAgentName(name) {
  return name.replace(/@/g, "-");
}
function getTeamDir(teamName) {
  return join2(getTeamsDir(), sanitizeName(teamName));
}
function getTeamFilePath(teamName) {
  return join2(getTeamDir(teamName), "config.json");
}
function readTeamFile(teamName) {
  try {
    const content = readFileSync(getTeamFilePath(teamName), "utf-8");
    return jsonParse(content);
  } catch (e) {
    if (getErrnoCode(e) === "ENOENT")
      return null;
    logForDebugging(`[TeammateTool] Failed to read team file for ${teamName}: ${errorMessage(e)}`);
    return null;
  }
}
async function readTeamFileAsync(teamName) {
  try {
    const content = await readFile2(getTeamFilePath(teamName), "utf-8");
    return jsonParse(content);
  } catch (e) {
    if (getErrnoCode(e) === "ENOENT")
      return null;
    logForDebugging(`[TeammateTool] Failed to read team file for ${teamName}: ${errorMessage(e)}`);
    return null;
  }
}
function writeTeamFile(teamName, teamFile) {
  const teamDir = getTeamDir(teamName);
  mkdirSync(teamDir, { recursive: true });
  writeFileSync(getTeamFilePath(teamName), jsonStringify(teamFile, null, 2));
}
async function writeTeamFileAsync(teamName, teamFile) {
  const teamDir = getTeamDir(teamName);
  await mkdir2(teamDir, { recursive: true });
  await writeFile2(getTeamFilePath(teamName), jsonStringify(teamFile, null, 2));
}
function removeTeammateFromTeamFile(teamName, identifier) {
  const identifierStr = identifier.agentId || identifier.name;
  if (!identifierStr) {
    logForDebugging("[TeammateTool] removeTeammateFromTeamFile called with no identifier");
    return false;
  }
  const teamFile = readTeamFile(teamName);
  if (!teamFile) {
    logForDebugging(`[TeammateTool] Cannot remove teammate ${identifierStr}: failed to read team file for "${teamName}"`);
    return false;
  }
  const originalLength = teamFile.members.length;
  teamFile.members = teamFile.members.filter((m) => {
    if (identifier.agentId && m.agentId === identifier.agentId)
      return false;
    if (identifier.name && m.name === identifier.name)
      return false;
    return true;
  });
  if (teamFile.members.length === originalLength) {
    logForDebugging(`[TeammateTool] Teammate ${identifierStr} not found in team file for "${teamName}"`);
    return false;
  }
  writeTeamFile(teamName, teamFile);
  logForDebugging(`[TeammateTool] Removed teammate from team file: ${identifierStr}`);
  return true;
}
function addHiddenPaneId(teamName, paneId) {
  const teamFile = readTeamFile(teamName);
  if (!teamFile) {
    return false;
  }
  const hiddenPaneIds = teamFile.hiddenPaneIds ?? [];
  if (!hiddenPaneIds.includes(paneId)) {
    hiddenPaneIds.push(paneId);
    teamFile.hiddenPaneIds = hiddenPaneIds;
    writeTeamFile(teamName, teamFile);
    logForDebugging(`[TeammateTool] Added ${paneId} to hidden panes for team ${teamName}`);
  }
  return true;
}
function removeHiddenPaneId(teamName, paneId) {
  const teamFile = readTeamFile(teamName);
  if (!teamFile) {
    return false;
  }
  const hiddenPaneIds = teamFile.hiddenPaneIds ?? [];
  const index = hiddenPaneIds.indexOf(paneId);
  if (index !== -1) {
    hiddenPaneIds.splice(index, 1);
    teamFile.hiddenPaneIds = hiddenPaneIds;
    writeTeamFile(teamName, teamFile);
    logForDebugging(`[TeammateTool] Removed ${paneId} from hidden panes for team ${teamName}`);
  }
  return true;
}
function removeMemberFromTeam(teamName, tmuxPaneId) {
  const teamFile = readTeamFile(teamName);
  if (!teamFile) {
    return false;
  }
  const memberIndex = teamFile.members.findIndex((m) => m.tmuxPaneId === tmuxPaneId);
  if (memberIndex === -1) {
    return false;
  }
  teamFile.members.splice(memberIndex, 1);
  if (teamFile.hiddenPaneIds) {
    const hiddenIndex = teamFile.hiddenPaneIds.indexOf(tmuxPaneId);
    if (hiddenIndex !== -1) {
      teamFile.hiddenPaneIds.splice(hiddenIndex, 1);
    }
  }
  writeTeamFile(teamName, teamFile);
  logForDebugging(`[TeammateTool] Removed member with pane ${tmuxPaneId} from team ${teamName}`);
  return true;
}
function removeMemberByAgentId(teamName, agentId) {
  const teamFile = readTeamFile(teamName);
  if (!teamFile) {
    return false;
  }
  const memberIndex = teamFile.members.findIndex((m) => m.agentId === agentId);
  if (memberIndex === -1) {
    return false;
  }
  teamFile.members.splice(memberIndex, 1);
  writeTeamFile(teamName, teamFile);
  logForDebugging(`[TeammateTool] Removed member ${agentId} from team ${teamName}`);
  return true;
}
function setMemberMode(teamName, memberName, mode) {
  const teamFile = readTeamFile(teamName);
  if (!teamFile) {
    return false;
  }
  const member = teamFile.members.find((m) => m.name === memberName);
  if (!member) {
    logForDebugging(`[TeammateTool] Cannot set member mode: member ${memberName} not found in team ${teamName}`);
    return false;
  }
  if (member.mode === mode) {
    return true;
  }
  const updatedMembers = teamFile.members.map((m) => m.name === memberName ? { ...m, mode } : m);
  writeTeamFile(teamName, { ...teamFile, members: updatedMembers });
  logForDebugging(`[TeammateTool] Set member ${memberName} in team ${teamName} to mode: ${mode}`);
  return true;
}
function syncTeammateMode(mode, teamNameOverride) {
  if (!isTeammate())
    return;
  const teamName = teamNameOverride ?? getTeamName();
  const agentName = getAgentName();
  if (teamName && agentName) {
    setMemberMode(teamName, agentName, mode);
  }
}
function setMultipleMemberModes(teamName, modeUpdates) {
  const teamFile = readTeamFile(teamName);
  if (!teamFile) {
    return false;
  }
  const updateMap = new Map(modeUpdates.map((u) => [u.memberName, u.mode]));
  let anyChanged = false;
  const updatedMembers = teamFile.members.map((member) => {
    const newMode = updateMap.get(member.name);
    if (newMode !== undefined && member.mode !== newMode) {
      anyChanged = true;
      return { ...member, mode: newMode };
    }
    return member;
  });
  if (anyChanged) {
    writeTeamFile(teamName, { ...teamFile, members: updatedMembers });
    logForDebugging(`[TeammateTool] Set ${modeUpdates.length} member modes in team ${teamName}`);
  }
  return true;
}
async function setMemberActive(teamName, memberName, isActive) {
  const teamFile = await readTeamFileAsync(teamName);
  if (!teamFile) {
    logForDebugging(`[TeammateTool] Cannot set member active: team ${teamName} not found`);
    return;
  }
  const member = teamFile.members.find((m) => m.name === memberName);
  if (!member) {
    logForDebugging(`[TeammateTool] Cannot set member active: member ${memberName} not found in team ${teamName}`);
    return;
  }
  if (member.isActive === isActive) {
    return;
  }
  member.isActive = isActive;
  await writeTeamFileAsync(teamName, teamFile);
  logForDebugging(`[TeammateTool] Set member ${memberName} in team ${teamName} to ${isActive ? "active" : "idle"}`);
}
async function destroyWorktree(worktreePath) {
  const gitFilePath = join2(worktreePath, ".git");
  let mainRepoPath = null;
  try {
    const gitFileContent = (await readFile2(gitFilePath, "utf-8")).trim();
    const match = gitFileContent.match(/^gitdir:\s*(.+)$/);
    if (match && match[1]) {
      const worktreeGitDir = match[1];
      const mainGitDir = join2(worktreeGitDir, "..", "..");
      mainRepoPath = join2(mainGitDir, "..");
    }
  } catch {}
  if (mainRepoPath) {
    const result = await execFileNoThrowWithCwd(gitExe(), ["worktree", "remove", "--force", worktreePath], { cwd: mainRepoPath });
    if (result.code === 0) {
      logForDebugging(`[TeammateTool] Removed worktree via git: ${worktreePath}`);
      return;
    }
    if (result.stderr?.includes("not a working tree")) {
      logForDebugging(`[TeammateTool] Worktree already removed: ${worktreePath}`);
      return;
    }
    logForDebugging(`[TeammateTool] git worktree remove failed, falling back to rm: ${result.stderr}`);
  }
  try {
    await rm(worktreePath, { recursive: true, force: true });
    logForDebugging(`[TeammateTool] Removed worktree directory manually: ${worktreePath}`);
  } catch (error) {
    logForDebugging(`[TeammateTool] Failed to remove worktree ${worktreePath}: ${errorMessage(error)}`);
  }
}
function registerTeamForSessionCleanup(teamName) {
  getSessionCreatedTeams().add(teamName);
}
function unregisterTeamForSessionCleanup(teamName) {
  getSessionCreatedTeams().delete(teamName);
}
async function cleanupSessionTeams() {
  const sessionCreatedTeams = getSessionCreatedTeams();
  if (sessionCreatedTeams.size === 0)
    return;
  const teams = Array.from(sessionCreatedTeams);
  logForDebugging(`cleanupSessionTeams: removing ${teams.length} orphan team dir(s): ${teams.join(", ")}`);
  await Promise.allSettled(teams.map((name) => killOrphanedTeammatePanes(name)));
  await Promise.allSettled(teams.map((name) => cleanupTeamDirectories(name)));
  sessionCreatedTeams.clear();
}
async function killOrphanedTeammatePanes(teamName) {
  const teamFile = readTeamFile(teamName);
  if (!teamFile)
    return;
  const paneMembers = teamFile.members.filter((m) => m.name !== TEAM_LEAD_NAME && m.tmuxPaneId && m.backendType && isPaneBackend(m.backendType));
  if (paneMembers.length === 0)
    return;
  const [{ ensureBackendsRegistered, getBackendByType }, { isInsideTmux }] = await Promise.all([
    import("./chunk-e9hprf9y.js"),
    import("./chunk-z31081mk.js")
  ]);
  await ensureBackendsRegistered();
  const useExternalSession = !await isInsideTmux();
  await Promise.allSettled(paneMembers.map(async (m) => {
    if (!m.tmuxPaneId || !m.backendType || !isPaneBackend(m.backendType)) {
      return;
    }
    const ok = await getBackendByType(m.backendType).killPane(m.tmuxPaneId, useExternalSession);
    logForDebugging(`cleanupSessionTeams: killPane ${m.name} (${m.backendType} ${m.tmuxPaneId}) \u2192 ${ok}`);
  }));
}
async function cleanupTeamDirectories(teamName) {
  const sanitizedName = sanitizeName(teamName);
  const teamFile = readTeamFile(teamName);
  const worktreePaths = [];
  if (teamFile) {
    for (const member of teamFile.members) {
      if (member.worktreePath) {
        worktreePaths.push(member.worktreePath);
      }
    }
  }
  for (const worktreePath of worktreePaths) {
    await destroyWorktree(worktreePath);
  }
  const teamDir = getTeamDir(teamName);
  try {
    await rm(teamDir, { recursive: true, force: true });
    logForDebugging(`[TeammateTool] Cleaned up team directory: ${teamDir}`);
  } catch (error) {
    logForDebugging(`[TeammateTool] Failed to clean up team directory ${teamDir}: ${errorMessage(error)}`);
  }
  const tasksDir = getTasksDir(sanitizedName);
  try {
    await rm(tasksDir, { recursive: true, force: true });
    logForDebugging(`[TeammateTool] Cleaned up tasks directory: ${tasksDir}`);
    notifyTasksUpdated();
  } catch (error) {
    logForDebugging(`[TeammateTool] Failed to clean up tasks directory ${tasksDir}: ${errorMessage(error)}`);
  }
}
var inputSchema;
var init_teamHelpers = __esm(() => {
  init_v4();
  init_state();
  init_debug();
  init_envUtils();
  init_errors();
  init_execFileNoThrow();
  init_git();
  init_lazySchema();
  init_slowOperations();
  init_tasks();
  init_teammate();
  init_types();
  init_constants();
  inputSchema = lazySchema(() => exports_external.strictObject({
    operation: exports_external.enum(["spawnTeam", "cleanup"]).describe("Operation: spawnTeam to create a team, cleanup to remove team and task directories."),
    agent_type: exports_external.string().optional().describe('Type/role of the team lead (e.g., "researcher", "test-runner"). ' + "Used for team file and inter-agent coordination."),
    team_name: exports_external.string().optional().describe("Name for the new team to create (required for spawnTeam)."),
    description: exports_external.string().optional().describe("Team description/purpose (only used with spawnTeam).")
  }));
});

export { setLeaderTeamName, clearLeaderTeamName, onTasksUpdated, TASK_STATUSES, TaskStatusSchema, isTodoV2Enabled, resetTaskList, getTaskListId, sanitizePathComponent, getTasksDir, ensureTasksDir, createTask, getTask, updateTask, deleteTask, listTasks, blockTask, claimTask, unassignTeammateTasks, DEFAULT_TASKS_MODE_TASK_LIST_ID, init_tasks, isPaneBackend, init_types, inputSchema, sanitizeName, sanitizeAgentName, getTeamDir, getTeamFilePath, readTeamFile, readTeamFileAsync, writeTeamFileAsync, removeTeammateFromTeamFile, addHiddenPaneId, removeHiddenPaneId, removeMemberFromTeam, removeMemberByAgentId, setMemberMode, syncTeammateMode, setMultipleMemberModes, setMemberActive, registerTeamForSessionCleanup, unregisterTeamForSessionCleanup, cleanupSessionTeams, cleanupTeamDirectories, init_teamHelpers };
