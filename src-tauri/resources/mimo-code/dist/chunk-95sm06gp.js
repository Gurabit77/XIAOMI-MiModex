// @bun
import {
  init_tokenEstimation,
  roughTokenCountEstimation
} from "./chunk-ktw919wt.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/statusNoticeHelpers.ts
function getAgentDescriptionsTotalTokens(agentDefinitions) {
  if (!agentDefinitions)
    return 0;
  return agentDefinitions.activeAgents.filter((a) => a.source !== "built-in").reduce((total, agent) => {
    const description = `${agent.agentType}: ${agent.whenToUse}`;
    return total + roughTokenCountEstimation(description);
  }, 0);
}
var AGENT_DESCRIPTIONS_THRESHOLD = 15000;
var init_statusNoticeHelpers = __esm(() => {
  init_tokenEstimation();
});

export { AGENT_DESCRIPTIONS_THRESHOLD, getAgentDescriptionsTotalTokens, init_statusNoticeHelpers };
