// @bun
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/services/skillLearning/config.ts
function getSkillLearningConfig() {
  if (!overrides)
    return DEFAULTS;
  return {
    minConfidence: overrides.minConfidence ?? DEFAULTS.minConfidence,
    minClusterSize: overrides.minClusterSize ?? DEFAULTS.minClusterSize,
    llm: { ...DEFAULTS.llm, ...overrides.llm }
  };
}
var DEFAULTS, overrides;
var init_config = __esm(() => {
  DEFAULTS = {
    minConfidence: 0.75,
    minClusterSize: 3,
    llm: {
      timeoutMs: 1e4,
      maxCallsPerSession: 20,
      cooldownMs: 30000,
      failureThreshold: 3,
      circuitCooldownMs: 60000
    }
  };
});

// src/services/skillLearning/instinctParser.ts
import { createHash } from "crypto";
function createInstinct(candidate, now = new Date().toISOString()) {
  return normalizeInstinct({
    id: candidate.id ?? buildInstinctId(candidate.trigger, candidate.action, candidate.scope),
    ...candidate,
    createdAt: now,
    updatedAt: now,
    status: candidate.status ?? "pending"
  });
}
function normalizeInstinct(instinct) {
  const uniqueEvidence = Array.from(new Set(instinct.evidence.filter(Boolean)));
  return {
    ...instinct,
    id: instinct.id || buildInstinctId(instinct.trigger, instinct.action),
    confidence: clampConfidence(instinct.confidence),
    evidence: uniqueEvidence.slice(-MAX_EVIDENCE_ENTRIES),
    evidenceOutcome: instinct.evidenceOutcome,
    observationIds: instinct.observationIds ? Array.from(new Set(instinct.observationIds)).slice(-20) : undefined
  };
}
function serializeInstinct(instinct) {
  return `${JSON.stringify(normalizeInstinct(instinct), null, 2)}
`;
}
function parseInstinct(content) {
  return normalizeInstinct(JSON.parse(content));
}
function buildInstinctId(trigger, action, scope = "project") {
  const slug = `${trigger} ${action}`.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 48);
  const hash = createHash("sha1").update(`${scope}
${trigger}
${action}`).digest("hex").slice(0, 10);
  return `${slug || "instinct"}-${hash}`;
}
function candidateFromObservation(observation, project) {
  return {
    scope: project?.scope ?? "project",
    projectId: project?.projectId ?? observation.projectId,
    projectName: project?.projectName ?? observation.projectName,
    source: "session-observation",
    evidence: [
      observation.messageText ?? observation.toolOutput ?? observation.toolInput ?? observation.toolName ?? observation.id
    ],
    observationIds: [observation.id]
  };
}
function isContradictingInstinct(existing, incoming) {
  const existingTrigger = existing.trigger.toLowerCase();
  const incomingTrigger = incoming.trigger.toLowerCase();
  if (existingTrigger !== incomingTrigger)
    return false;
  const existingAction = existing.action.toLowerCase();
  const incomingAction = incoming.action.toLowerCase();
  return existingAction.includes("avoid") !== incomingAction.includes("avoid") || existingAction.includes("prefer") !== incomingAction.includes("prefer");
}
function clampConfidence(confidence) {
  if (Number.isNaN(confidence))
    return 0;
  return Math.max(0, Math.min(1, Number(confidence.toFixed(2))));
}
var MAX_EVIDENCE_ENTRIES = 10;
var init_instinctParser = () => {};

export { getSkillLearningConfig, init_config, createInstinct, normalizeInstinct, serializeInstinct, parseInstinct, candidateFromObservation, isContradictingInstinct, clampConfidence, init_instinctParser };
