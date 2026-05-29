// @bun
import {
  getDefaultSubagentModel,
  init_agent
} from "./chunk-ktw919wt.js";
import {
  getSourceDisplayName,
  init_constants
} from "./chunk-1ghcng4e.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// packages/builtin-tools/src/tools/AgentTool/agentDisplay.ts
function resolveAgentOverrides(allAgents, activeAgents) {
  const activeMap = new Map;
  for (const agent of activeAgents) {
    activeMap.set(agent.agentType, agent);
  }
  const seen = new Set;
  const resolved = [];
  for (const agent of allAgents) {
    const key = `${agent.agentType}:${agent.source}`;
    if (seen.has(key))
      continue;
    seen.add(key);
    const active = activeMap.get(agent.agentType);
    const overriddenBy = active && active.source !== agent.source ? active.source : undefined;
    resolved.push({ ...agent, overriddenBy });
  }
  return resolved;
}
function resolveAgentModelDisplay(agent) {
  const model = agent.model || getDefaultSubagentModel();
  if (!model)
    return;
  return model === "inherit" ? "inherit" : model;
}
function getOverrideSourceLabel(source) {
  return getSourceDisplayName(source).toLowerCase();
}
function compareAgentsByName(a, b) {
  return a.agentType.localeCompare(b.agentType, undefined, {
    sensitivity: "base"
  });
}
var AGENT_SOURCE_GROUPS;
var init_agentDisplay = __esm(() => {
  init_agent();
  init_constants();
  AGENT_SOURCE_GROUPS = [
    { label: "User agents", source: "userSettings" },
    { label: "Project agents", source: "projectSettings" },
    { label: "Local agents", source: "localSettings" },
    { label: "Managed agents", source: "policySettings" },
    { label: "Plugin agents", source: "plugin" },
    { label: "CLI arg agents", source: "flagSettings" },
    { label: "Built-in agents", source: "built-in" }
  ];
});

export { AGENT_SOURCE_GROUPS, resolveAgentOverrides, resolveAgentModelDisplay, getOverrideSourceLabel, compareAgentsByName, init_agentDisplay };
