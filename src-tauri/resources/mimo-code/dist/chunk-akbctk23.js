// @bun
import {
  candidateFromObservation,
  createInstinct,
  getSkillLearningConfig,
  init_config,
  init_instinctParser
} from "./chunk-d72n340z.js";
import {
  init_claude,
  init_systemPromptType,
  queryHaiku
} from "./chunk-ktw919wt.js";
import {
  asSystemPrompt
} from "./chunk-chmfqs2y.js";
import {
  __esm,
  __require
} from "./chunk-qp2qdcda.js";

// src/services/skillLearning/observerBackend.ts
function registerObserverBackend(backend) {
  registry.set(backend.name, backend);
  if (!activeName)
    activeName = backend.name;
}
function setActiveObserverBackend(name) {
  if (!registry.has(name)) {
    throw new Error(`Observer backend "${name}" is not registered`);
  }
  activeName = name;
}
function getActiveObserverBackend() {
  const backend = activeName ? registry.get(activeName) : undefined;
  if (!backend) {
    throw new Error("No observer backend is active \u2014 register one before analyzing observations");
  }
  return backend;
}
function listObserverBackends() {
  return Array.from(registry.keys());
}
function resetObserverBackendsForTest() {
  registry.clear();
  activeName = undefined;
}
async function analyzeWithActiveBackend(observations, ctx) {
  return Promise.resolve(getActiveObserverBackend().analyze(observations, ctx));
}
function pickBackendFromEnv() {
  const raw = process.env.SKILL_LEARNING_OBSERVER_BACKEND?.trim();
  return raw && registry.has(raw) ? raw : undefined;
}
function resolveDefaultObserverBackend() {
  const preferred = pickBackendFromEnv();
  if (preferred)
    setActiveObserverBackend(preferred);
  return getActiveObserverBackend();
}
var registry, activeName;
var init_observerBackend = __esm(() => {
  registry = new Map;
});

// src/services/skillLearning/types.ts
var INSTINCT_DOMAINS;
var init_types = __esm(() => {
  INSTINCT_DOMAINS = [
    "workflow",
    "testing",
    "debugging",
    "code-style",
    "security",
    "git",
    "project"
  ];
});

// src/services/skillLearning/llmObserverBackend.ts
async function analyseWithHaiku(observations, ctx) {
  if (observations.length === 0)
    return [];
  if (Date.now() < circuitOpenUntil) {
    return runHeuristicFallback(observations, ctx);
  }
  const capped = observations.slice(-MAX_OBSERVATIONS_PER_CALL);
  const userPrompt = buildUserPrompt(capped);
  const signal = makeTimeoutSignal(getSkillLearningConfig().llm.timeoutMs);
  let responseText;
  try {
    const response = await queryHaiku({
      systemPrompt: asSystemPrompt([LLM_OBSERVER_SYSTEM_PROMPT]),
      userPrompt,
      signal,
      options: {
        querySource: "skill_learning_observer",
        enablePromptCaching: true,
        agents: [],
        isNonInteractiveSession: true,
        hasAppendSystemPrompt: false,
        mcpTools: []
      }
    });
    consecutiveFailures = 0;
    responseText = extractResponseText(response.message?.content);
  } catch {
    consecutiveFailures++;
    if (consecutiveFailures >= getSkillLearningConfig().llm.failureThreshold) {
      circuitOpenUntil = Date.now() + getSkillLearningConfig().llm.circuitCooldownMs;
    }
    return runHeuristicFallback(observations, ctx);
  }
  const parsed = parseInstinctCandidates(responseText, ctx, capped);
  if (parsed.length === 0) {
    consecutiveFailures++;
    if (consecutiveFailures >= getSkillLearningConfig().llm.failureThreshold) {
      circuitOpenUntil = Date.now() + getSkillLearningConfig().llm.circuitCooldownMs;
    }
    return runHeuristicFallback(observations, ctx);
  }
  return parsed;
}
async function runHeuristicFallback(observations, ctx) {
  try {
    const { heuristicObserverBackend } = await import("./chunk-8c2qz5kg.js");
    const result = heuristicObserverBackend.analyze(observations, ctx);
    return Array.isArray(result) ? result : await result;
  } catch {
    return [];
  }
}
function buildUserPrompt(observations) {
  const rendered = observations.map((observation, index) => renderObservation(observation, index)).join(`
`);
  return `Observations (chronological, newest last):
${rendered}

Extract up to ${MAX_CANDIDATES_PER_CALL} atomic instincts. JSON array only.`;
}
function renderObservation(observation, index) {
  const segments = [`#${index + 1}`, `event=${observation.event}`];
  if (observation.toolName)
    segments.push(`tool=${observation.toolName}`);
  if (observation.outcome)
    segments.push(`outcome=${observation.outcome}`);
  if (observation.messageText) {
    segments.push(`text=${JSON.stringify(truncate(observation.messageText, 200))}`);
  }
  if (observation.toolInput) {
    segments.push(`in=${JSON.stringify(truncate(observation.toolInput, 120))}`);
  }
  if (observation.toolOutput) {
    segments.push(`out=${JSON.stringify(truncate(observation.toolOutput, 120))}`);
  }
  return segments.join(" | ");
}
function truncate(value, max) {
  if (value.length <= max)
    return value;
  return `${value.slice(0, max)}\u2026`;
}
function extractResponseText(content) {
  if (!Array.isArray(content))
    return "";
  const parts = [];
  for (const block of content) {
    if (!block || typeof block !== "object")
      continue;
    const record = block;
    if (record.type !== "text")
      continue;
    if (typeof record.text === "string")
      parts.push(record.text);
  }
  return parts.join("").trim();
}
function parseInstinctCandidates(raw, ctx, observations) {
  const json = extractJsonArray(raw);
  if (!json)
    return [];
  let parsed;
  try {
    parsed = JSON.parse(json);
  } catch {
    return [];
  }
  if (!Array.isArray(parsed))
    return [];
  const observationIds = observations.map((observation) => observation.id);
  const candidates = [];
  for (const item of parsed.slice(0, MAX_CANDIDATES_PER_CALL)) {
    const candidate = normaliseCandidate(item, ctx, observationIds);
    if (candidate)
      candidates.push(candidate);
  }
  return candidates;
}
function extractJsonArray(raw) {
  if (!raw)
    return;
  const start = raw.indexOf("[");
  const end = raw.lastIndexOf("]");
  if (start < 0 || end <= start)
    return;
  return raw.slice(start, end + 1);
}
function normaliseCandidate(item, ctx, observationIds) {
  if (!item || typeof item !== "object")
    return;
  const record = item;
  const trigger = stringField(record.trigger, 80);
  const action = stringField(record.action, 120);
  if (!trigger || !action)
    return;
  const evidence = evidenceField(record.evidence);
  if (evidence.length === 0)
    return;
  return {
    trigger,
    action,
    confidence: clampUnitInterval(record.confidence),
    domain: domainField(record.domain),
    source: "session-observation",
    scope: scopeField(record.scope),
    projectId: ctx?.project?.projectId,
    projectName: ctx?.project?.projectName,
    evidence,
    observationIds
  };
}
function stringField(value, maxLength) {
  if (typeof value !== "string")
    return;
  const trimmed = value.trim();
  if (!trimmed)
    return;
  return trimmed.length > maxLength ? trimmed.slice(0, maxLength) : trimmed;
}
function clampUnitInterval(value) {
  if (typeof value !== "number" || !Number.isFinite(value))
    return 0.5;
  if (value < 0)
    return 0;
  if (value > 1)
    return 1;
  return value;
}
function domainField(value) {
  if (typeof value !== "string")
    return "project";
  return INSTINCT_DOMAINS.includes(value) ? value : "project";
}
function scopeField(value) {
  return value === "global" ? "global" : "project";
}
function evidenceField(value) {
  if (!Array.isArray(value))
    return [];
  const entries = [];
  for (const entry of value) {
    if (typeof entry !== "string")
      continue;
    const trimmed = entry.trim();
    if (!trimmed)
      continue;
    entries.push(trimmed.length > 200 ? `${trimmed.slice(0, 200)}\u2026` : trimmed);
    if (entries.length === 3)
      break;
  }
  return entries;
}
function makeTimeoutSignal(ms) {
  return AbortSignal.timeout(ms);
}
var MAX_OBSERVATIONS_PER_CALL = 30, MAX_CANDIDATES_PER_CALL = 3, consecutiveFailures = 0, circuitOpenUntil = 0, LLM_OBSERVER_SYSTEM_PROMPT = `You analyse a short sequence of observations from a coding-assistant session (user messages, tool invocations with outcomes, assistant messages) and extract atomic, reusable "instincts" \u2014 behavioural patterns that would help the assistant act correctly in future similar situations.

Respond with ONLY a JSON array (no prose, no code fences, no commentary). Each item must match this schema:

{
  "trigger": string,        // <= 80 chars, short phrase describing WHEN the instinct applies
  "action": string,         // <= 120 chars, short phrase describing WHAT to do
  "confidence": number,     // 0..1 \u2014 how strongly these observations support the pattern
  "domain": "workflow"|"testing"|"debugging"|"code-style"|"security"|"git"|"project",
  "scope": "project"|"global",
  "evidence": string[]      // 1..3 short excerpts copied/paraphrased from the observations
}

Rules:
- Return [] if nothing clearly reusable. No guessing.
- At most 3 items, highest confidence first.
- confidence > 0.7 only when observations show the pattern in action (a correction followed by a successful retry, a repeated sequence, an explicit rule).
- Never include secrets, tokens, full file contents, or personally-identifying data.
- Scope "global" only when the pattern is obviously project-agnostic (generic testing, git hygiene); default to "project".`, llmObserverBackend;
var init_llmObserverBackend = __esm(() => {
  init_claude();
  init_systemPromptType();
  init_config();
  init_types();
  llmObserverBackend = {
    name: "llm",
    analyze(observations, ctx) {
      return analyseWithHaiku(observations, ctx);
    }
  };
});

// src/services/skillLearning/sessionObserver.ts
function heuristicAnalyze(observations, options) {
  return [
    ...extractUserCorrections(observations),
    ...extractToolErrorResolutions(observations),
    ...extractRepeatedToolSequences(observations, options),
    ...extractProjectConventions(observations)
  ];
}
function analyzeObservations(observations, options) {
  const backend = getActiveObserverBackend();
  const candidates = backend.name === "heuristic" ? heuristicAnalyze(observations, options) : ensureSyncCandidates(backend.analyze(observations));
  return candidates.map((candidate) => createInstinct(candidate));
}
async function analyzeObservationsAsync(observations, ctx) {
  const candidates = await analyzeWithActiveBackend(observations, ctx);
  return candidates.map((candidate) => createInstinct(candidate));
}
function ensureSyncCandidates(result) {
  if (Array.isArray(result))
    return result;
  throw new Error("Active observer backend returned a Promise; use analyzeObservationsAsync instead");
}
function extractUserCorrections(observations) {
  return observations.flatMap((observation, index) => {
    if (observation.event !== "user_message" || !observation.messageText) {
      return [];
    }
    const text = observation.messageText.trim();
    const correction = parseCorrection(text);
    if (!correction)
      return [];
    const base = candidateFromObservation(observation);
    return [
      {
        ...base,
        trigger: correction.trigger,
        action: correction.action,
        confidence: 0.7,
        domain: inferDomain(text),
        source: "session-observation",
        scope: "project",
        evidence: [text],
        evidenceOutcome: recentOutcomeBefore(observations, index),
        observationIds: [observation.id]
      }
    ];
  });
}
function extractToolErrorResolutions(observations) {
  const candidates = [];
  for (let i = 0;i < observations.length; i++) {
    const current = observations[i];
    if (current.event !== "tool_complete" || current.outcome !== "failure") {
      continue;
    }
    const laterSuccess = observations.slice(i + 1, i + 6).find((next) => {
      return next.event === "tool_complete" && next.outcome === "success" && next.toolName === current.toolName;
    });
    if (!laterSuccess || !current.toolName)
      continue;
    candidates.push({
      ...candidateFromObservation(current),
      trigger: `When ${current.toolName} fails during this project`,
      action: `Use the follow-up successful ${current.toolName} invocation as the resolution pattern before retrying blindly.`,
      confidence: 0.5,
      domain: "debugging",
      source: "session-observation",
      scope: "project",
      evidence: [
        current.toolOutput ?? `${current.toolName} failed`,
        laterSuccess.toolOutput ?? `${laterSuccess.toolName} succeeded`
      ],
      evidenceOutcome: "success",
      observationIds: [current.id, laterSuccess.id]
    });
  }
  return candidates;
}
function extractRepeatedToolSequences(observations, options) {
  const minCount = options?.minRepeatedSequenceCount ?? DEFAULT_MIN_REPEATED_SEQUENCE_COUNT;
  const toolEvents = observations.filter((observation) => observation.event === "tool_start" || observation.event === "tool_complete");
  const names = toolEvents.map((observation) => observation.toolName ?? "");
  const sequence = ["Grep", "Read", "Edit"];
  const matchedIds = [];
  let count = 0;
  for (let i = 0;i <= names.length - sequence.length; i++) {
    if (sequence.every((name, offset) => names[i + offset] === name)) {
      count++;
      matchedIds.push(...toolEvents.slice(i, i + sequence.length).map((o) => o.id));
    }
  }
  if (count < minCount)
    return [];
  const evidence = `Observed ${count} repeated Grep -> Read -> Edit workflow sequences.`;
  const first = toolEvents.find((event) => matchedIds.includes(event.id));
  const lastMatchedId = matchedIds[matchedIds.length - 1];
  const lastEvent = toolEvents.find((event) => event.id === lastMatchedId);
  const sequenceOutcome = lastEvent?.event === "tool_complete" ? lastEvent.outcome : undefined;
  return [
    {
      ...candidateFromObservation(first ?? observations[0]),
      trigger: "When changing code in this project",
      action: "Prefer the Grep -> Read -> Edit workflow: locate symbols, inspect context, then apply the smallest edit.",
      confidence: count >= 3 ? 0.65 : 0.5,
      domain: "workflow",
      source: "session-observation",
      scope: "project",
      evidence: [evidence],
      evidenceOutcome: normalizeOutcome(sequenceOutcome),
      observationIds: Array.from(new Set(matchedIds))
    }
  ];
}
function extractProjectConventions(observations) {
  return observations.flatMap((observation, index) => {
    if (observation.event !== "user_message" || !observation.messageText) {
      return [];
    }
    const text = observation.messageText.trim();
    if (!/(\u9879\u76EE\u7EA6\u5B9A|\u89C4\u8303|\u5FC5\u987B|convention|always|must)/i.test(text)) {
      return [];
    }
    return [
      {
        ...candidateFromObservation(observation),
        trigger: "When working in this project",
        action: `Follow the project convention: ${text}`,
        confidence: 0.4,
        domain: "project",
        source: "session-observation",
        scope: "project",
        evidence: [text],
        evidenceOutcome: recentOutcomeBefore(observations, index),
        observationIds: [observation.id]
      }
    ];
  });
}
function recentOutcomeBefore(observations, index) {
  for (let i = index - 1;i >= 0; i--) {
    const prior = observations[i];
    if (prior.event !== "tool_complete")
      continue;
    return normalizeOutcome(prior.outcome);
  }
  return;
}
function normalizeOutcome(outcome) {
  if (outcome === "success" || outcome === "failure" || outcome === "unknown") {
    return outcome;
  }
  return;
}
function parseCorrection(text) {
  const noUsePattern = /(?:\u4E0D\u8981|\u522B|\u4E0D\u5E94(?:\u8BE5)?|\u4E0D\u8981\u518D)\s*(?<avoid>[^\uFF0C,\u3002.;\uFF1B]+)[\uFF0C,\s]*(?:\u7528|\u4F7F\u7528|\u6539\u7528|\u5E94\u8BE5\u7528|\u8981\u7528)\s*(?<prefer>[^\uFF0C,\u3002.;\uFF1B]+)/i;
  const englishPattern = /(?:do not|don't|avoid)\s+(?<avoid>[^,.;]+)[,;\s]+(?:use|prefer)\s+(?<prefer>[^,.;]+)/i;
  const shouldPattern = /(?:\u4F60\u5E94\u8BE5|\u5E94\u8BE5\u5148|must|should)\s*(?<prefer>[^\uFF0C,\u3002.;\uFF1B]+)/i;
  const noUse = text.match(noUsePattern) ?? text.match(englishPattern);
  if (noUse?.groups) {
    const avoid = noUse.groups.avoid.trim();
    const prefer = noUse.groups.prefer.trim();
    return {
      trigger: `When choosing between ${avoid} and ${prefer}`,
      action: `Prefer ${prefer}; avoid ${avoid}.`
    };
  }
  const should = text.match(shouldPattern);
  if (should?.groups) {
    const prefer = should.groups.prefer.trim();
    return {
      trigger: "When this user gives a corrective instruction",
      action: `Prefer this corrected action: ${prefer}.`
    };
  }
  return null;
}
function inferDomain(text) {
  const lowered = text.toLowerCase();
  if (/test|mock|testing-library|vitest|jest|bun test/.test(lowered)) {
    return "testing";
  }
  if (/git|commit|branch/.test(lowered))
    return "git";
  if (/security|secret|token|password/.test(lowered))
    return "security";
  if (/style|format|lint|naming/.test(lowered))
    return "code-style";
  return "project";
}
var DEFAULT_MIN_REPEATED_SEQUENCE_COUNT = 2, heuristicObserverBackend, observeSession;
var init_sessionObserver = __esm(() => {
  init_instinctParser();
  init_observerBackend();
  init_llmObserverBackend();
  heuristicObserverBackend = {
    name: "heuristic",
    analyze(observations, _ctx) {
      return heuristicAnalyze(observations);
    }
  };
  registerObserverBackend(heuristicObserverBackend);
  registerObserverBackend(llmObserverBackend);
  observeSession = analyzeObservations;
});

export { registerObserverBackend, setActiveObserverBackend, getActiveObserverBackend, listObserverBackends, resetObserverBackendsForTest, analyzeWithActiveBackend, resolveDefaultObserverBackend, init_observerBackend, INSTINCT_DOMAINS, init_types, llmObserverBackend, init_llmObserverBackend, heuristicAnalyze, heuristicObserverBackend, analyzeObservations, analyzeObservationsAsync, observeSession, init_sessionObserver };
