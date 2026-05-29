// @bun
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/services/compact/cachedMicrocompact.ts
function isCachedMicrocompactEnabled() {
  return process.env.CLAUDE_CACHED_MICROCOMPACT === "1";
}
function isModelSupportedForCacheEditing(model) {
  return /claude-[a-z]+-4[-\d]/.test(model);
}
function getCachedMCConfig() {
  return { triggerThreshold: TRIGGER_THRESHOLD, keepRecent: KEEP_RECENT };
}
function createCachedMCState() {
  return {
    registeredTools: new Set,
    toolOrder: [],
    deletedRefs: new Set,
    pinnedEdits: [],
    toolsSentToAPI: false
  };
}
function markToolsSentToAPI(state) {
  state.toolsSentToAPI = true;
}
function resetCachedMCState(state) {
  state.registeredTools.clear();
  state.toolOrder = [];
  state.deletedRefs.clear();
  state.pinnedEdits = [];
  state.toolsSentToAPI = false;
}
function registerToolResult(state, toolId) {
  if (!state.registeredTools.has(toolId)) {
    state.registeredTools.add(toolId);
    state.toolOrder.push(toolId);
  }
}
function registerToolMessage(state, groupIds) {
  for (const id of groupIds) {
    registerToolResult(state, id);
  }
}
function getToolResultsToDelete(state) {
  const { triggerThreshold, keepRecent } = getCachedMCConfig();
  const active = state.toolOrder.filter((id) => !state.deletedRefs.has(id));
  if (active.length <= triggerThreshold)
    return [];
  const toDelete = active.slice(0, active.length - keepRecent);
  return toDelete;
}
function createCacheEditsBlock(state, toolIds) {
  if (toolIds.length === 0)
    return null;
  return {
    type: "cache_edits",
    edits: toolIds.map((id) => ({
      type: "delete_tool_result",
      tool_use_id: id
    }))
  };
}
var TRIGGER_THRESHOLD = 10, KEEP_RECENT = 5;
var init_cachedMicrocompact = () => {};
init_cachedMicrocompact();

export {
  resetCachedMCState,
  registerToolResult,
  registerToolMessage,
  markToolsSentToAPI,
  isModelSupportedForCacheEditing,
  isCachedMicrocompactEnabled,
  getToolResultsToDelete,
  getCachedMCConfig,
  createCachedMCState,
  createCacheEditsBlock
};
