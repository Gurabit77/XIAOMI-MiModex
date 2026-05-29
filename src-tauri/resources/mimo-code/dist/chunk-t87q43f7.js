// @bun
import {
  assignTeammateColor,
  formatAgentId,
  init_agentId,
  init_teammateLayoutManager
} from "./chunk-ktw919wt.js";
import {
  ensureTasksDir,
  getTeamFilePath,
  init_tasks,
  init_teamHelpers,
  registerTeamForSessionCleanup,
  resetTaskList,
  sanitizeName,
  setLeaderTeamName,
  writeTeamFileAsync
} from "./chunk-ypmcesxe.js";
import {
  TEAM_LEAD_NAME,
  init_constants
} from "./chunk-4jm600zv.js";
import {
  getCwd,
  init_cwd
} from "./chunk-dxvkxgnf.js";
import {
  getKairosActive,
  getSessionId,
  init_state
} from "./chunk-j5xzpm59.js";
import {
  getClaudeConfigHomeDir,
  init_envUtils
} from "./chunk-hxhwzgnn.js";
import {
  __esm,
  __export
} from "./chunk-qp2qdcda.js";

// src/assistant/index.ts
var exports_assistant = {};
__export(exports_assistant, {
  markAssistantForced: () => markAssistantForced,
  isAssistantMode: () => isAssistantMode,
  isAssistantForced: () => isAssistantForced,
  initializeAssistantTeam: () => initializeAssistantTeam,
  getAssistantSystemPromptAddendum: () => getAssistantSystemPromptAddendum,
  getAssistantActivationPath: () => getAssistantActivationPath
});
import { readFileSync } from "fs";
import { join } from "path";
function isAssistantMode() {
  return getKairosActive();
}
function markAssistantForced() {
  _assistantForced = true;
}
function isAssistantForced() {
  return _assistantForced;
}
async function initializeAssistantTeam() {
  const sessionId = getSessionId();
  const teamName = sanitizeName(`assistant-${sessionId.slice(0, 8)}`);
  const leadAgentId = formatAgentId(TEAM_LEAD_NAME, teamName);
  const teamFilePath = getTeamFilePath(teamName);
  const now = Date.now();
  const cwd = getCwd();
  const color = assignTeammateColor(leadAgentId);
  const teamFile = {
    name: teamName,
    description: "Assistant mode in-process team",
    createdAt: now,
    leadAgentId,
    leadSessionId: sessionId,
    members: [
      {
        agentId: leadAgentId,
        name: TEAM_LEAD_NAME,
        agentType: "assistant",
        color,
        joinedAt: now,
        tmuxPaneId: "",
        cwd,
        subscriptions: [],
        backendType: "in-process"
      }
    ]
  };
  await writeTeamFileAsync(teamName, teamFile);
  registerTeamForSessionCleanup(teamName);
  await resetTaskList(teamName);
  await ensureTasksDir(teamName);
  setLeaderTeamName(teamName);
  return {
    teamName,
    teamFilePath,
    leadAgentId,
    selfAgentId: leadAgentId,
    selfAgentName: TEAM_LEAD_NAME,
    isLeader: true,
    selfAgentColor: color,
    teammates: {
      [leadAgentId]: {
        name: TEAM_LEAD_NAME,
        agentType: "assistant",
        color,
        tmuxSessionName: "in-process",
        tmuxPaneId: "leader",
        cwd,
        spawnedAt: now
      }
    }
  };
}
function getAssistantSystemPromptAddendum() {
  try {
    return readFileSync(join(getClaudeConfigHomeDir(), "agents", "assistant.md"), "utf-8");
  } catch {
    return "";
  }
}
function getAssistantActivationPath() {
  if (!isAssistantMode())
    return;
  return _assistantForced ? "daemon" : "gate";
}
var _assistantForced = false;
var init_assistant = __esm(() => {
  init_state();
  init_agentId();
  init_cwd();
  init_envUtils();
  init_constants();
  init_teamHelpers();
  init_teammateLayoutManager();
  init_tasks();
});

export { isAssistantMode, markAssistantForced, isAssistantForced, initializeAssistantTeam, getAssistantSystemPromptAddendum, getAssistantActivationPath, exports_assistant, init_assistant };
