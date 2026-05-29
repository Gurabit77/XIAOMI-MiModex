// @bun
import {
  applySkillLifecycleDecision,
  compareExistingArtifacts,
  decideSkillLifecycle,
  generateOrMergeSkillDraft,
  generateSkillDraft,
  init_learningPolicy,
  init_skillGenerator,
  init_skillLifecycle,
  normalizeSkillName,
  shouldGenerateSkillFromInstincts
} from "./chunk-z9cst14s.js";
import {
  init_projectContext,
  resolveProjectContext
} from "./chunk-2qg5ewk3.js";
import {
  analyzeWithActiveBackend,
  init_observerBackend,
  init_sessionObserver,
  resolveDefaultObserverBackend
} from "./chunk-akbctk23.js";
import {
  clampConfidence,
  createInstinct,
  getSkillLearningConfig,
  init_config,
  init_instinctParser,
  isContradictingInstinct,
  normalizeInstinct,
  parseInstinct,
  serializeInstinct
} from "./chunk-d72n340z.js";
import {
  appendObservation,
  getSkillLearningRoot,
  init_observationStore,
  purgeOldObservations,
  readObservations,
  stringifyField
} from "./chunk-cvqwypap.js";
import {
  clearCommandsCache,
  init_commands1 as init_commands,
  init_postSamplingHooks,
  registerPostSamplingHook
} from "./chunk-ktw919wt.js";
import {
  init_featureCheck,
  isSkillLearningEnabled
} from "./chunk-wf3yck87.js";
import {
  getClaudeConfigHomeDir,
  init_envUtils
} from "./chunk-hxhwzgnn.js";
import {
  __esm,
  __require
} from "./chunk-qp2qdcda.js";

// src/services/skillLearning/instinctStore.ts
import {
  mkdir,
  readFile,
  readdir,
  rename,
  unlink,
  writeFile
} from "fs/promises";
import { randomBytes } from "crypto";
import { dirname, join } from "path";
function getInstinctsDir(options) {
  const root = getSkillLearningRoot(options);
  const project = options?.project;
  const scope = options?.scope ?? project?.scope ?? "project";
  if (scope === "global" || !project || project.projectId === "global") {
    return join(root, "global", "instincts", "personal");
  }
  return join(root, "projects", project.projectId, "instincts", "personal");
}
async function saveInstinct(instinct, options) {
  const normalized = normalizeInstinct(instinct);
  const dir = getInstinctsDir(options);
  await mkdir(dir, { recursive: true });
  const target = instinctPath(normalized.id, options);
  const tmp = `${target}.${randomBytes(6).toString("hex")}.tmp`;
  await writeFile(tmp, serializeInstinct(normalized));
  await rename(tmp, target);
  return normalized;
}
async function loadInstincts(options) {
  const dir = getInstinctsDir(options);
  let files = [];
  try {
    files = await readdir(dir);
  } catch (error) {
    if (error.code === "ENOENT")
      return [];
    throw error;
  }
  const instincts = [];
  for (const file of files.filter((file2) => file2.endsWith(".json"))) {
    const content = await readFile(join(dir, file), "utf8");
    instincts.push(parseInstinct(content));
  }
  return instincts.sort((a, b) => a.id.localeCompare(b.id));
}
function upsertInstinct(incoming, options) {
  const result = upsertQueue.then(() => doUpsertInstinct(incoming, options));
  upsertQueue = result.catch(() => {});
  return result;
}
async function doUpsertInstinct(incoming, options) {
  const existing = await loadInstincts(options);
  const match = existing.find((instinct) => instinct.id === incoming.id) ?? existing.find((instinct) => instinct.trigger.toLowerCase() === incoming.trigger.toLowerCase() && isContradictingInstinct(instinct, incoming));
  const now = new Date().toISOString();
  if (!match)
    return saveInstinct(incoming, options);
  const contradiction = isContradictingInstinct(match, incoming);
  const confidenceDelta = contradiction ? -0.1 : outcomeConfidenceDelta(incoming.evidenceOutcome);
  const nextConfidence = clampConfidence(match.confidence + confidenceDelta);
  const nextStatus = resolveNextStatus(match.status, nextConfidence, contradiction);
  const merged = normalizeInstinct({
    ...match,
    confidence: nextConfidence,
    evidence: [...match.evidence, ...incoming.evidence],
    evidenceOutcome: incoming.evidenceOutcome ?? match.evidenceOutcome,
    observationIds: [
      ...match.observationIds ?? [],
      ...incoming.observationIds ?? []
    ],
    updatedAt: now,
    status: nextStatus
  });
  return saveInstinct(merged, options);
}
function resolveNextStatus(current, nextConfidence, contradiction) {
  if (contradiction && nextConfidence < 0.3)
    return "conflict-hold";
  if (current === "conflict-hold" && nextConfidence >= 0.5)
    return "active";
  if (current === "pending" && nextConfidence >= 0.8)
    return "active";
  return current;
}
async function decayInstinctConfidence(options) {
  const instincts = await loadInstincts(options);
  const now = Date.now();
  let decayed = 0;
  for (const instinct of instincts) {
    if (instinct.status !== "pending" && instinct.status !== "active")
      continue;
    const updatedAtMs = Date.parse(instinct.updatedAt);
    if (Number.isNaN(updatedAtMs))
      continue;
    const weeksElapsed = Math.floor((now - updatedAtMs) / MS_PER_WEEK);
    if (weeksElapsed < 1)
      continue;
    const delta = -DECAY_PER_WEEK * weeksElapsed;
    const nextConfidence = clampConfidence(instinct.confidence + delta);
    if (nextConfidence === instinct.confidence)
      continue;
    await saveInstinct(normalizeInstinct({
      ...instinct,
      confidence: nextConfidence,
      updatedAt: new Date(now).toISOString()
    }), options);
    decayed += 1;
  }
  return decayed;
}
function outcomeConfidenceDelta(outcome) {
  if (outcome === "failure")
    return -0.05;
  return 0.05;
}
async function updateConfidence(instinctId, delta, options) {
  const instincts = await loadInstincts(options);
  const target = instincts.find((instinct) => instinct.id === instinctId);
  if (!target)
    return null;
  const updated = normalizeInstinct({
    ...target,
    confidence: clampConfidence(target.confidence + delta),
    updatedAt: new Date().toISOString()
  });
  return saveInstinct(updated, options);
}
async function exportInstincts(outputPath, options) {
  const instincts = await loadInstincts(options);
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(instincts, null, 2)}
`);
  return instincts;
}
async function importInstincts(inputPath, options) {
  const parsed = JSON.parse(await readFile(inputPath, "utf8"));
  const saved = [];
  for (const instinct of parsed) {
    saved.push(await upsertInstinct(normalizeInstinct(instinct), options));
  }
  return saved;
}
async function prunePendingInstincts(maxAgeDays, options) {
  const instincts = await loadInstincts(options);
  const cutoff = Date.now() - maxAgeDays * 24 * 60 * 60 * 1000;
  const pruned = [];
  for (const instinct of instincts) {
    if (instinct.status === "pending" && Date.parse(instinct.updatedAt) < cutoff) {
      await unlink(instinctPath(instinct.id, options));
      pruned.push(instinct);
    }
  }
  return pruned;
}
function instinctPath(id, options) {
  return join(getInstinctsDir(options), `${id}.json`);
}
var upsertQueue, DECAY_PER_WEEK = 0.02, MS_PER_WEEK;
var init_instinctStore = __esm(() => {
  init_observationStore();
  init_instinctParser();
  upsertQueue = Promise.resolve();
  MS_PER_WEEK = 7 * 24 * 60 * 60 * 1000;
});

// src/services/skillLearning/commandGenerator.ts
import { mkdir as mkdir2, writeFile as writeFile2 } from "fs/promises";
import { existsSync } from "fs";
import { join as join2 } from "path";
function generateCommandDraft(instincts, options) {
  if (instincts.length === 0) {
    throw new Error("Cannot generate a command draft without instincts");
  }
  const scope = options?.scope ?? instincts[0]?.scope ?? "project";
  const rawName = options?.name ?? buildCommandName(instincts);
  const name = normalizeSkillName(rawName);
  const confidence = averageConfidence(instincts);
  const description = options?.description ?? buildDescription(instincts);
  const outputPath = getLearnedCommandPath(name, scope, options);
  const content = buildCommandContent({
    name,
    description,
    confidence,
    instincts
  });
  return {
    name,
    description,
    scope,
    sourceInstinctIds: instincts.map((instinct) => instinct.id),
    confidence: Number(confidence.toFixed(2)),
    content,
    outputPath
  };
}
async function writeLearnedCommand(draft) {
  await mkdir2(draft.outputPath, { recursive: true });
  const filePath = join2(draft.outputPath, `${draft.name}.md`);
  if (existsSync(filePath))
    return filePath;
  await writeFile2(filePath, draft.content, "utf8");
  clearCommandsCache();
  return filePath;
}
function getLearnedCommandPath(_name, scope, options) {
  if (options?.outputRoot)
    return options.outputRoot;
  if (scope === "project") {
    return join2(options?.cwd ?? process.cwd(), ".claude", "commands");
  }
  return options?.globalCommandsDir ?? join2(getClaudeConfigHomeDir(), "commands");
}
function buildCommandName(instincts) {
  const words = extractWords(instincts, 4);
  const name = ["learned", ...words].join("-");
  return normalizeSkillName(name) || "learned-command";
}
function buildDescription(instincts) {
  const trigger = instincts[0]?.trigger ?? "Reuse the learned workflow";
  return trigger.replace(/\s+/g, " ").slice(0, 120);
}
function buildCommandContent(params) {
  const { name, description, confidence, instincts } = params;
  return [
    "---",
    `name: ${name}`,
    `description: ${JSON.stringify(description)}`,
    "origin: skill-learning",
    `confidence: ${Number(confidence.toFixed(2))}`,
    `evolved_from: [${instincts.map((instinct) => JSON.stringify(instinct.id)).join(", ")}]`,
    "---",
    "",
    `# /${name}`,
    "",
    "## When to use",
    "",
    instincts.map((instinct) => `- ${instinct.trigger}`).join(`
`),
    "",
    "## Steps",
    "",
    instincts.map((instinct) => `- ${instinct.action}`).join(`
`),
    "",
    "## Evidence",
    "",
    instincts.flatMap((instinct) => instinct.evidence.map((evidence) => `- ${evidence}`)).join(`
`),
    ""
  ].join(`
`);
}
function averageConfidence(instincts) {
  return instincts.reduce((sum, instinct) => sum + instinct.confidence, 0) / instincts.length;
}
function extractWords(instincts, max) {
  const stopWords = new Set([
    "when",
    "with",
    "this",
    "that",
    "user",
    "asks",
    "for",
    "the",
    "and",
    "run",
    "use",
    "prefer",
    "avoid"
  ]);
  const words = [];
  for (const instinct of instincts) {
    for (const token of `${instinct.trigger} ${instinct.action}`.toLowerCase().split(/[^a-z0-9]+/)) {
      if (token.length > 2 && !stopWords.has(token) && !words.includes(token)) {
        words.push(token);
      }
      if (words.length >= max)
        return words;
    }
  }
  return words;
}
var init_commandGenerator = __esm(() => {
  init_envUtils();
  init_commands();
  init_learningPolicy();
});

// src/services/skillLearning/agentGenerator.ts
import { mkdir as mkdir3, writeFile as writeFile3 } from "fs/promises";
import { existsSync as existsSync2 } from "fs";
import { join as join3 } from "path";
function generateAgentDraft(instincts, options) {
  if (instincts.length === 0) {
    throw new Error("Cannot generate an agent draft without instincts");
  }
  const scope = options?.scope ?? instincts[0]?.scope ?? "project";
  const rawName = options?.name ?? buildAgentName(instincts);
  const name = normalizeSkillName(rawName);
  const confidence = averageConfidence2(instincts);
  const description = options?.description ?? buildDescription2(instincts);
  const outputPath = getLearnedAgentPath(name, scope, options);
  const content = buildAgentContent({
    name,
    description,
    confidence,
    instincts
  });
  return {
    name,
    description,
    scope,
    sourceInstinctIds: instincts.map((instinct) => instinct.id),
    confidence: Number(confidence.toFixed(2)),
    content,
    outputPath
  };
}
async function writeLearnedAgent(draft) {
  await mkdir3(draft.outputPath, { recursive: true });
  const filePath = join3(draft.outputPath, `${draft.name}.md`);
  if (existsSync2(filePath))
    return filePath;
  await writeFile3(filePath, draft.content, "utf8");
  clearCommandsCache();
  return filePath;
}
function getLearnedAgentPath(_name, scope, options) {
  if (options?.outputRoot)
    return options.outputRoot;
  if (scope === "project") {
    return join3(options?.cwd ?? process.cwd(), ".claude", "agents");
  }
  return options?.globalAgentsDir ?? join3(getClaudeConfigHomeDir(), "agents");
}
function buildAgentName(instincts) {
  const words = extractWords2(instincts, 4);
  const name = ["learned", "agent", ...words].join("-");
  return normalizeSkillName(name) || "learned-agent";
}
function buildDescription2(instincts) {
  const trigger = instincts[0]?.trigger ?? "Run the learned multi-step workflow";
  return trigger.replace(/\s+/g, " ").slice(0, 120);
}
function buildAgentContent(params) {
  const { name, description, confidence, instincts } = params;
  return [
    "---",
    `name: ${name}`,
    `description: ${JSON.stringify(description)}`,
    "origin: skill-learning",
    `confidence: ${Number(confidence.toFixed(2))}`,
    `evolved_from: [${instincts.map((instinct) => JSON.stringify(instinct.id)).join(", ")}]`,
    "---",
    "",
    `You are the ${name} learned agent.`,
    "",
    "## Triggers",
    "",
    instincts.map((instinct) => `- ${instinct.trigger}`).join(`
`),
    "",
    "## Playbook",
    "",
    instincts.map((instinct) => `- ${instinct.action}`).join(`
`),
    "",
    "## Evidence",
    "",
    instincts.flatMap((instinct) => instinct.evidence.map((evidence) => `- ${evidence}`)).slice(0, 20).join(`
`),
    ""
  ].join(`
`);
}
function averageConfidence2(instincts) {
  return instincts.reduce((sum, instinct) => sum + instinct.confidence, 0) / instincts.length;
}
function extractWords2(instincts, max) {
  const stopWords = new Set([
    "when",
    "with",
    "this",
    "that",
    "user",
    "asks",
    "for",
    "the",
    "and",
    "debug",
    "investigate",
    "research"
  ]);
  const words = [];
  for (const instinct of instincts) {
    for (const token of `${instinct.trigger} ${instinct.action}`.toLowerCase().split(/[^a-z0-9]+/)) {
      if (token.length > 2 && !stopWords.has(token) && !words.includes(token)) {
        words.push(token);
      }
      if (words.length >= max)
        return words;
    }
  }
  return words;
}
var init_agentGenerator = __esm(() => {
  init_envUtils();
  init_commands();
  init_learningPolicy();
});

// src/services/skillLearning/evolution.ts
function clusterInstincts(instincts) {
  const groups = new Map;
  for (const instinct of instincts) {
    if (instinct.status !== "active" && instinct.status !== "pending")
      continue;
    const key = `${instinct.domain}:${normalizedTrigger(instinct.trigger)}`;
    const group = groups.get(key) ?? [];
    group.push(instinct);
    groups.set(key, group);
  }
  return Array.from(groups.values()).filter((group) => {
    return group.length >= getSkillLearningConfig().minClusterSize;
  }).map((group) => {
    const averageConfidence3 = group.reduce((sum, instinct) => sum + instinct.confidence, 0) / group.length;
    return {
      target: classifyEvolutionTarget(group),
      trigger: group[0]?.trigger ?? "learned pattern",
      domain: group[0]?.domain ?? "project",
      instincts: group,
      averageConfidence: Number(averageConfidence3.toFixed(2))
    };
  }).sort((a, b) => b.averageConfidence - a.averageConfidence);
}
function classifyEvolutionTarget(instinctsOrCandidate) {
  const instincts = Array.isArray(instinctsOrCandidate) ? instinctsOrCandidate : instinctsOrCandidate.instincts;
  const text = instincts.map((i) => `${i.trigger} ${i.action}`).join(" ").toLowerCase();
  if (/user asks|explicitly request|command|run /.test(text))
    return "command";
  if (instincts.length >= 4 && /(debug|investigate|research|multi-step)/.test(text)) {
    return "agent";
  }
  return "skill";
}
function suggestEvolutions(instincts) {
  return clusterInstincts(instincts);
}
function generateSkillCandidates(instincts, options) {
  return clusterInstincts(instincts).filter((candidate) => candidate.target === "skill" && shouldGenerateSkillFromInstincts(candidate.instincts)).map((candidate) => generateSkillDraft(candidate.instincts, {
    ...options,
    scope: candidate.instincts[0]?.scope ?? "project"
  }));
}
function generateCommandCandidates(instincts, options) {
  return clusterInstincts(instincts).filter((candidate) => candidate.target === "command" && shouldGenerateSkillFromInstincts(candidate.instincts)).map((candidate) => generateCommandDraft(candidate.instincts, {
    ...options,
    scope: candidate.instincts[0]?.scope ?? "project"
  }));
}
function generateAgentCandidates(instincts, options) {
  return clusterInstincts(instincts).filter((candidate) => candidate.target === "agent" && shouldGenerateSkillFromInstincts(candidate.instincts)).map((candidate) => generateAgentDraft(candidate.instincts, {
    ...options,
    scope: candidate.instincts[0]?.scope ?? "project"
  }));
}
function generateAllCandidates(instincts, options) {
  return [
    ...generateSkillCandidates(instincts, options?.skill).map((draft) => ({ kind: "skill", draft })),
    ...generateCommandCandidates(instincts, options?.command).map((draft) => ({ kind: "command", draft })),
    ...generateAgentCandidates(instincts, options?.agent).map((draft) => ({ kind: "agent", draft }))
  ];
}
function normalizedTrigger(trigger) {
  return trigger.toLowerCase().replace(/[^a-z0-9]+/g, " ").split(/\s+/).filter(Boolean).slice(0, 6).join(" ");
}
var init_evolution = __esm(() => {
  init_learningPolicy();
  init_skillGenerator();
  init_commandGenerator();
  init_agentGenerator();
  init_config();
});

// src/services/skillLearning/promotion.ts
import { readdir as readdir2 } from "fs/promises";
import { existsSync as existsSync3 } from "fs";
import { join as join4 } from "path";
function resetPromotionBookkeeping() {
  sessionPromotedIds.clear();
}
function findPromotionCandidates(instincts, minProjects = 2, minConfidence = 0.8) {
  const grouped = new Map;
  for (const instinct of instincts) {
    if (instinct.scope !== "project")
      continue;
    const group = grouped.get(instinct.id) ?? [];
    group.push(instinct);
    grouped.set(instinct.id, group);
  }
  return Array.from(grouped.entries()).flatMap(([instinctId, group]) => {
    const projectIds = Array.from(new Set(group.map((instinct) => instinct.projectId).filter(Boolean)));
    const averageConfidence3 = group.reduce((sum, instinct) => sum + instinct.confidence, 0) / group.length;
    if (projectIds.length >= minProjects && averageConfidence3 >= minConfidence) {
      return [
        {
          instinctId,
          projectIds,
          averageConfidence: Number(averageConfidence3.toFixed(2))
        }
      ];
    }
    return [];
  });
}
async function checkPromotion(options = {}) {
  const minProjects = options.minProjects ?? 2;
  const minConfidence = options.minConfidence ?? 0.8;
  const allProjectInstincts = await loadAllProjectInstincts(options.rootDir);
  const candidates = findPromotionCandidates(allProjectInstincts, minProjects, minConfidence);
  const promoted = [];
  for (const candidate of candidates) {
    if (sessionPromotedIds.has(candidate.instinctId))
      continue;
    const source = allProjectInstincts.find((instinct) => instinct.id === candidate.instinctId);
    if (!source)
      continue;
    const globalInstinct = {
      ...source,
      scope: "global",
      projectId: undefined,
      projectName: undefined,
      confidence: candidate.averageConfidence,
      updatedAt: new Date().toISOString()
    };
    const globalOptions = {
      rootDir: options.rootDir,
      scope: "global",
      project: globalProjectContext(options.rootDir)
    };
    await saveInstinct(globalInstinct, globalOptions);
    sessionPromotedIds.add(candidate.instinctId);
    promoted.push(candidate);
  }
  return promoted;
}
async function loadAllProjectInstincts(rootDir) {
  const root = getSkillLearningRoot(rootDir ? { rootDir } : undefined);
  const projectsRoot = join4(root, "projects");
  if (!existsSync3(projectsRoot))
    return [];
  const entries = await readdir2(projectsRoot, { withFileTypes: true });
  const instincts = [];
  for (const entry of entries) {
    if (!entry.isDirectory())
      continue;
    const project = {
      projectId: entry.name,
      projectName: entry.name,
      scope: "project",
      source: "git_root",
      cwd: projectsRoot,
      storageDir: join4(projectsRoot, entry.name)
    };
    const projectInstincts = await loadInstincts({
      rootDir,
      project,
      scope: "project"
    });
    instincts.push(...projectInstincts);
  }
  return instincts;
}
function globalProjectContext(rootDir) {
  const root = getSkillLearningRoot(rootDir ? { rootDir } : undefined);
  return {
    projectId: "global",
    projectName: "Global",
    scope: "global",
    source: "global",
    cwd: root,
    storageDir: join4(root, "global")
  };
}
function getGlobalInstinctsDir(rootDir) {
  return getInstinctsDir({
    rootDir,
    scope: "global",
    project: globalProjectContext(rootDir)
  });
}
var sessionPromotedIds;
var init_promotion = __esm(() => {
  init_instinctStore();
  init_observationStore();
  sessionPromotedIds = new Set;
});

// src/services/skillLearning/runtimeObserver.ts
import { existsSync as existsSync4 } from "fs";
import { join as join5 } from "path";
function resetRuntimeLLMBookkeeping() {
  llmCallsThisSession = 0;
  lastLlmCallTimestamp = 0;
  lastProcessedMessageIds.clear();
}
function getRuntimeTurn() {
  return runtimeTurn;
}
function initSkillLearning() {
  if (initialized)
    return;
  initialized = true;
  try {
    resolveDefaultObserverBackend();
  } catch {}
  registerPostSamplingHook(runSkillLearningPostSampling);
  runStartupMaintenance().catch(() => {});
}
async function runStartupMaintenance() {
  if (!isSkillLearningEnabled())
    return;
  if (process.env.CLAUDE_SKILL_LEARNING_DISABLE)
    return;
  const project = resolveProjectContext(process.cwd());
  const options = { project };
  await Promise.allSettled([
    decayInstinctConfidence(options),
    purgeOldObservations(options),
    prunePendingInstincts(30, options)
  ]);
}
function isInsideSkillLearningStorage(cwd) {
  try {
    const root = getSkillLearningRoot();
    return cwd.startsWith(root);
  } catch {
    return false;
  }
}
async function runSkillLearningPostSampling(context) {
  if (!isSkillLearningEnabled())
    return;
  if (process.env.CLAUDE_SKILL_LEARNING_DISABLE)
    return;
  if (!context.querySource?.startsWith("repl_main_thread"))
    return;
  if (context.toolUseContext.agentId)
    return;
  const cwd = process.cwd();
  if (isInsideSkillLearningStorage(cwd))
    return;
  const project = resolveProjectContext(cwd);
  const options = { project };
  ++runtimeTurn;
  const observations = [];
  for (const observation of observationsFromMessages(context.messages, project)) {
    observations.push(await appendObservation(observation, options));
  }
  const all = await readObservations(options);
  const fresh = all.filter((o) => o.source === "tool-hook" && o.sessionId === RUNTIME_SESSION_ID && typeof o.timestamp === "string" && o.timestamp > lastConsumedToolHookTimestamp);
  observations.push(...fresh);
  for (const o of fresh) {
    if (o.timestamp > lastConsumedToolHookTimestamp) {
      lastConsumedToolHookTimestamp = o.timestamp;
    }
  }
  if (observations.length === 0)
    return;
  const now = Date.now();
  const minObservations = 5;
  const { llm } = getSkillLearningConfig();
  const shouldCallLLM = observations.length >= minObservations && llmCallsThisSession < llm.maxCallsPerSession && now - lastLlmCallTimestamp >= llm.cooldownMs;
  let candidates;
  if (shouldCallLLM) {
    llmCallsThisSession++;
    lastLlmCallTimestamp = now;
    candidates = await analyzeWithActiveBackend(observations, { project });
  } else {
    const { heuristicObserverBackend } = await import("./chunk-8c2qz5kg.js");
    const result = heuristicObserverBackend.analyze(observations, { project });
    candidates = Array.isArray(result) ? result : await result;
  }
  for (const candidate of candidates) {
    await upsertInstinct(createInstinct(candidate), options);
  }
  await autoEvolveLearnedSkills(options);
}
function resetRuntimeObserverForTest() {
  runtimeTurn = 0;
  lastConsumedToolHookTimestamp = "";
  resetRuntimeLLMBookkeeping();
}
async function autoEvolveLearnedSkills(options) {
  const instincts = await loadInstincts(options);
  const cwd = process.cwd();
  const skillRoots = [
    join5(cwd, ".claude", "skills"),
    join5(getClaudeConfigHomeDir(), "skills")
  ];
  const skillClusters = clusterInstincts(instincts).filter((candidate) => candidate.target === "skill" && shouldGenerateSkillFromInstincts(candidate.instincts));
  for (const cluster of skillClusters) {
    const outcome = await generateOrMergeSkillDraft(cluster.instincts, { cwd, scope: cluster.instincts[0]?.scope ?? "project" }, skillRoots);
    if (outcome.action === "append-evidence")
      continue;
    const draft = outcome.draft;
    if (existsSync4(join5(draft.outputPath, "SKILL.md")))
      continue;
    const existing = await compareExistingArtifacts("skill", draft, skillRoots);
    const decision = decideSkillLifecycle(draft, existing);
    await applySkillLifecycleDecision(decision);
  }
  const commandDrafts = generateCommandCandidates(instincts, { cwd });
  for (const draft of commandDrafts) {
    const roots = [
      join5(cwd, ".claude", "commands"),
      join5(getClaudeConfigHomeDir(), "commands")
    ];
    const existing = await compareExistingArtifacts("command", draft, roots);
    if (existing.length > 0)
      continue;
    await writeLearnedCommand(draft);
  }
  const agentDrafts = generateAgentCandidates(instincts, { cwd });
  for (const draft of agentDrafts) {
    const roots = [
      join5(cwd, ".claude", "agents"),
      join5(getClaudeConfigHomeDir(), "agents")
    ];
    const existing = await compareExistingArtifacts("agent", draft, roots);
    if (existing.length > 0)
      continue;
    await writeLearnedAgent(draft);
  }
  await checkPromotion();
}
function observationsFromMessages(messages, project) {
  const sessionId = RUNTIME_SESSION_ID;
  const base = {
    sessionId,
    projectId: project.projectId,
    projectName: project.projectName,
    cwd: project.cwd,
    timestamp: new Date().toISOString(),
    source: "hook"
  };
  return messages.flatMap((message) => {
    const msgKey = `${sessionId}:${String(message.uuid)}`;
    if (lastProcessedMessageIds.has(msgKey))
      return [];
    lastProcessedMessageIds.add(msgKey);
    if (lastProcessedMessageIds.size > MAX_PROCESSED_IDS) {
      const toDrop = lastProcessedMessageIds.size - TRIM_PROCESSED_IDS_TO;
      const iter = lastProcessedMessageIds.values();
      for (let i = 0;i < toDrop; i++) {
        const next = iter.next();
        if (next.done)
          break;
        lastProcessedMessageIds.delete(next.value);
      }
    }
    if (message.type === "user") {
      const toolResults = toolResultsFromContent(message.message?.content);
      if (toolResults.length > 0) {
        return toolResults.map((result) => ({
          ...base,
          id: crypto.randomUUID(),
          event: "tool_complete",
          toolName: result.toolName,
          toolOutput: result.output,
          outcome: result.isError ? "failure" : "success"
        }));
      }
      const text = textFromContent(message.message?.content);
      return text.trim() ? [
        {
          ...base,
          id: crypto.randomUUID(),
          event: "user_message",
          messageText: text
        }
      ] : [];
    }
    if (message.type === "assistant") {
      const toolUses = toolUsesFromContent(message.message?.content);
      const text = textFromContent(message.message?.content);
      return [
        ...toolUses.map((toolUse) => ({
          ...base,
          id: crypto.randomUUID(),
          event: "tool_start",
          toolName: toolUse.toolName,
          toolInput: toolUse.input
        })),
        ...text.trim() ? [
          {
            ...base,
            id: crypto.randomUUID(),
            event: "assistant_message",
            messageText: text
          }
        ] : []
      ];
    }
    return [];
  });
}
function textFromContent(content) {
  if (typeof content === "string")
    return content;
  if (!Array.isArray(content))
    return "";
  return content.map((block) => {
    if (!block || typeof block !== "object")
      return "";
    const record = block;
    return typeof record.text === "string" ? record.text : "";
  }).filter(Boolean).join(`
`);
}
function toolUsesFromContent(content) {
  if (!Array.isArray(content))
    return [];
  return content.flatMap((block) => {
    if (!block || typeof block !== "object")
      return [];
    const record = block;
    if (record.type !== "tool_use")
      return [];
    return [
      {
        toolName: String(record.name ?? "unknown_tool"),
        input: stringifyField(record.input)
      }
    ];
  });
}
function toolResultsFromContent(content) {
  if (!Array.isArray(content))
    return [];
  return content.flatMap((block) => {
    if (!block || typeof block !== "object")
      return [];
    const record = block;
    if (record.type !== "tool_result")
      return [];
    return [
      {
        toolName: String(record.name ?? record.tool_name ?? "unknown_tool"),
        output: stringifyField(record.content),
        isError: record.is_error === true
      }
    ];
  });
}
var RUNTIME_SESSION_ID = "runtime-session", initialized = false, runtimeTurn = 0, lastConsumedToolHookTimestamp = "", llmCallsThisSession = 0, lastLlmCallTimestamp = 0, lastProcessedMessageIds, MAX_PROCESSED_IDS = 1000, TRIM_PROCESSED_IDS_TO = 500;
var init_runtimeObserver = __esm(() => {
  init_postSamplingHooks();
  init_config();
  init_featureCheck();
  init_observationStore();
  init_projectContext();
  init_sessionObserver();
  init_instinctParser();
  init_observerBackend();
  init_instinctStore();
  init_skillLifecycle();
  init_evolution();
  init_skillGenerator();
  init_learningPolicy();
  init_commandGenerator();
  init_agentGenerator();
  init_observationStore();
  init_promotion();
  init_envUtils();
  lastProcessedMessageIds = new Set;
});

export { saveInstinct, loadInstincts, upsertInstinct, updateConfidence, exportInstincts, importInstincts, prunePendingInstincts, init_instinctStore, generateCommandDraft, writeLearnedCommand, getLearnedCommandPath, init_commandGenerator, generateAgentDraft, writeLearnedAgent, getLearnedAgentPath, init_agentGenerator, clusterInstincts, classifyEvolutionTarget, suggestEvolutions, generateSkillCandidates, generateCommandCandidates, generateAgentCandidates, generateAllCandidates, init_evolution, resetPromotionBookkeeping, findPromotionCandidates, checkPromotion, getGlobalInstinctsDir, init_promotion, RUNTIME_SESSION_ID, resetRuntimeLLMBookkeeping, getRuntimeTurn, initSkillLearning, runSkillLearningPostSampling, resetRuntimeObserverForTest, init_runtimeObserver };
