// @bun
import {
  generateSkillDraft,
  init_skillGenerator,
  writeLearnedSkill
} from "./chunk-z9cst14s.js";
import {
  getProjectStorageDir,
  init_projectContext,
  resolveProjectContext
} from "./chunk-2qg5ewk3.js";
import {
  createInstinct,
  init_instinctParser
} from "./chunk-d72n340z.js";
import {
  __esm,
  __require
} from "./chunk-qp2qdcda.js";

// src/services/skillLearning/skillGapStore.ts
import { existsSync } from "fs";
import { mkdir, readFile, rename, writeFile } from "fs/promises";
import { createHash } from "crypto";
import { dirname, join } from "path";
async function recordSkillGap(options) {
  const prompt = options.prompt.trim();
  if (!prompt) {
    throw new Error("Cannot record an empty skill gap");
  }
  const project = options.project ?? resolveProjectContext(options.cwd);
  const state = await readSkillGapState(project, options.rootDir);
  const key = buildSkillGapKey(prompt);
  const now = new Date().toISOString();
  const existing = state.gaps[key];
  const gap = {
    key,
    prompt,
    count: (existing?.count ?? 0) + 1,
    draftHits: existing?.draftHits ?? 0,
    draftHitSessions: existing?.draftHitSessions ?? [],
    status: existing?.status ?? "pending",
    sessionId: options.sessionId ?? "unknown-session",
    cwd: options.cwd ?? project.cwd,
    projectId: project.projectId,
    projectName: project.projectName,
    recommendations: (options.recommendations ?? []).slice(0, 5).map((r) => ({
      name: r.name,
      description: r.description,
      score: r.score
    })),
    createdAt: existing?.createdAt ?? now,
    updatedAt: now,
    draft: existing?.draft,
    active: existing?.active
  };
  if (gap.status === "rejected") {
    state.gaps[key] = gap;
    await writeSkillGapState(project, state, options.rootDir);
    return gap;
  }
  if (!gap.draft && shouldPromoteToDraft(gap)) {
    gap.draft = await writeSkillGapDraft(gap, project);
    gap.status = "draft";
    await clearRuntimeSkillCaches();
  }
  if (gap.draft && !gap.active && shouldPromoteToActive(gap)) {
    gap.active = await writeActiveSkillForGap(gap, project);
    gap.status = "active";
    await clearRuntimeSkillCaches();
  }
  state.gaps[key] = gap;
  await writeSkillGapState(project, state, options.rootDir);
  return gap;
}
async function readSkillGaps(project = resolveProjectContext(), rootDir) {
  const state = await readSkillGapState(project, rootDir);
  return Object.values(state.gaps).sort((a, b) => a.key.localeCompare(b.key));
}
async function findGapKeyByDraftPath(draftPath, project = resolveProjectContext(), rootDir) {
  const state = await readSkillGapState(project, rootDir);
  for (const gap of Object.values(state.gaps)) {
    if (gap.draft?.skillPath === draftPath)
      return gap.key;
  }
  return;
}
async function recordDraftHit(key, project = resolveProjectContext(), rootDir, sessionId = "unknown-session") {
  const state = await readSkillGapState(project, rootDir);
  const gap = state.gaps[key];
  if (!gap || !gap.draft || gap.active)
    return gap;
  const existingSessions = gap.draftHitSessions ?? [];
  if (existingSessions.includes(sessionId))
    return gap;
  const now = new Date().toISOString();
  const updated = {
    ...gap,
    draftHits: gap.draftHits + 1,
    draftHitSessions: [...existingSessions, sessionId],
    updatedAt: now
  };
  if (shouldPromoteToActive(updated)) {
    updated.active = await writeActiveSkillForGap(updated, project);
    updated.status = "active";
    await clearRuntimeSkillCaches();
  }
  state.gaps[key] = updated;
  await writeSkillGapState(project, state, rootDir);
  return updated;
}
async function promoteGapToDraft(key, project = resolveProjectContext(), rootDir) {
  const state = await readSkillGapState(project, rootDir);
  const gap = state.gaps[key];
  if (!gap)
    return;
  if (gap.status === "rejected")
    return gap;
  if (gap.draft)
    return gap;
  const updated = {
    ...gap,
    draft: await writeSkillGapDraft(gap, project),
    status: "draft",
    updatedAt: new Date().toISOString()
  };
  state.gaps[key] = updated;
  await writeSkillGapState(project, state, rootDir);
  await clearRuntimeSkillCaches();
  return updated;
}
async function rejectSkillGap(key, project = resolveProjectContext(), rootDir) {
  const state = await readSkillGapState(project, rootDir);
  const gap = state.gaps[key];
  if (!gap)
    return;
  const updated = {
    ...gap,
    status: "rejected",
    updatedAt: new Date().toISOString()
  };
  state.gaps[key] = updated;
  await writeSkillGapState(project, state, rootDir);
  return updated;
}
function shouldPromoteToDraft(gap) {
  return gap.count >= DRAFT_PROMOTION_COUNT;
}
function shouldPromoteToActive(gap) {
  if (!gap.draft)
    return false;
  return gap.count >= ACTIVE_PROMOTION_COUNT || gap.draftHits >= ACTIVE_PROMOTION_DRAFT_HITS;
}
async function writeSkillGapDraft(gap, project) {
  const instinct = createGapInstinct(gap, "pending");
  const draftsRoot = join(project.projectRoot ?? project.cwd, ".claude", "skills", ".drafts");
  const draft = generateSkillDraft([instinct], {
    cwd: project.projectRoot ?? project.cwd,
    outputRoot: draftsRoot,
    scope: "project",
    name: `draft-${buildNameFragment(gap.prompt)}`,
    description: "Draft learned skill candidate. Promote after repeated evidence or explicit user correction."
  });
  const skillFile = join(draft.outputPath, "SKILL.md");
  if (!existsSync(skillFile)) {
    await writeLearnedSkill({
      ...draft,
      content: draft.content + `
## Promotion Rule

Do not move this draft into active skills until the same gap repeats or the user explicitly confirms this should become reusable.
`
    });
  }
  return { type: "draft", name: draft.name, skillPath: skillFile };
}
async function writeActiveSkillForGap(gap, project) {
  const instinct = createGapInstinct(gap, "active");
  const draft = generateSkillDraft([instinct], {
    cwd: project.projectRoot ?? project.cwd,
    scope: "project",
    name: buildNameFragment(gap.prompt),
    description: buildGapAction(gap.prompt)
  });
  const skillFile = join(draft.outputPath, "SKILL.md");
  if (!existsSync(skillFile)) {
    await writeLearnedSkill(draft);
  }
  return { type: "active", name: draft.name, skillPath: skillFile };
}
function createGapInstinct(gap, status) {
  return createInstinct({
    trigger: `When the user asks for ${summarize(gap.prompt, 120)}`,
    action: buildGapAction(gap.prompt),
    confidence: status === "active" ? 0.82 : 0.55,
    domain: inferDomain(gap.prompt),
    source: "session-observation",
    scope: "project",
    projectId: gap.projectId,
    projectName: gap.projectName,
    evidence: [
      `Skill gap prompt: ${summarize(gap.prompt, 180)}`,
      `No high-confidence active skill was auto-loaded.`,
      `Observed ${gap.count} time(s).`
    ],
    status
  });
}
function buildGapAction(prompt) {
  if (/feature\s*\(|feature flag|flag_name|stub|no-op|noop|\u6700\u5C0F\u5B9E\u73B0/i.test(prompt)) {
    return "Audit feature flags by scanning feature() call sites, excluding generated/dependency noise, classifying each candidate as stub, shell, MVP, or thin-toggle, and writing an evidence-backed document.";
  }
  if (/skill|\u6280\u80FD|\u5B66\u4E60|\u8FDB\u5316|evolve|learning/i.test(prompt)) {
    return "Run skill discovery first; auto-load only high-confidence matching skills; record a skill gap when none match; promote repeated or corrected gaps into learned skills.";
  }
  if (/test|\u6D4B\u8BD5|stub|\u8C03\u7528\u94FE|\u53C2\u6570/i.test(prompt)) {
    return "Infer tests from existing files, parameters, exports, and call chains before simplifying mocks or inventing behavior.";
  }
  return `Reuse the workflow learned from this prompt: ${summarize(prompt, 180)}.`;
}
function inferDomain(prompt) {
  const text = prompt.toLowerCase();
  if (/test|\u6D4B\u8BD5|stub|fixture|\u65AD\u8A00/.test(text))
    return "testing";
  if (/error|bug|fix|\u5931\u8D25|\u9519\u8BEF|\u4FEE\u590D|debug/.test(text))
    return "debugging";
  if (/security|\u5B89\u5168|\u6F0F\u6D1E|secret|token/.test(text))
    return "security";
  if (/git|commit|branch|pr\b/.test(text))
    return "git";
  if (/style|lint|format|\u547D\u540D|\u89C4\u8303/.test(text))
    return "code-style";
  return "workflow";
}
async function readSkillGapState(project, rootDir) {
  const path = getSkillGapStatePath(project, rootDir);
  let raw;
  try {
    raw = await readFile(path, "utf8");
  } catch (error) {
    if (error.code === "ENOENT") {
      return { version: 1, gaps: {} };
    }
    throw error;
  }
  try {
    return migrateLegacyGapState(JSON.parse(raw));
  } catch {
    const backup = `${path}.corrupt-${Date.now()}`;
    try {
      await writeFile(backup, raw, "utf8");
    } catch {}
    return { version: 1, gaps: {} };
  }
}
function migrateLegacyGapState(state) {
  const migrated = {};
  for (const [key, record] of Object.entries(state.gaps ?? {})) {
    const legacy = record;
    const draftHits = typeof legacy.draftHits === "number" && Number.isFinite(legacy.draftHits) ? legacy.draftHits : 0;
    const count = typeof legacy.count === "number" ? legacy.count : 1;
    const normalizedStatus = normalizeLegacyStatus(legacy.status);
    const hasDraftFile = Boolean(legacy.draft);
    const hasActiveFile = Boolean(legacy.active);
    let status = normalizedStatus;
    if (status === "draft" && count < DRAFT_PROMOTION_COUNT && !hasDraftFile) {
      status = "pending";
    }
    if (status === "active" && !hasActiveFile) {
      status = hasDraftFile ? "draft" : "pending";
    }
    const draftHitSessions = Array.isArray(legacy.draftHitSessions) ? legacy.draftHitSessions.filter((session) => typeof session === "string") : [];
    migrated[key] = {
      ...record,
      count,
      draftHits,
      draftHitSessions,
      status
    };
  }
  return { version: 1, gaps: migrated };
}
function normalizeLegacyStatus(value) {
  if (value === "pending" || value === "draft" || value === "active" || value === "rejected") {
    return value;
  }
  return "pending";
}
async function writeSkillGapState(project, state, rootDir) {
  const path = getSkillGapStatePath(project, rootDir);
  await mkdir(dirname(path), { recursive: true });
  const tmpPath = `${path}.tmp-${process.pid}-${Date.now()}`;
  await writeFile(tmpPath, `${JSON.stringify(state, null, 2)}
`, "utf8");
  await rename(tmpPath, path);
}
function getSkillGapStatePath(project, rootDir) {
  const base = rootDir ? project.projectId === "global" ? join(rootDir, "global") : join(rootDir, "projects", project.projectId) : getProjectStorageDir(project.projectId);
  return join(base, "skill-gaps.json");
}
function buildSkillGapKey(prompt) {
  return `${buildNameFragment(prompt)}-${hash(prompt).slice(0, 8)}`;
}
function buildNameFragment(prompt) {
  const mapped = prompt.replaceAll("\u6280\u80FD", " skill ").replaceAll("\u5B66\u4E60", " learning ").replaceAll("\u8FDB\u5316", " evolution ").replaceAll("\u6D4B\u8BD5", " testing ").replaceAll("\u6700\u5C0F\u5B9E\u73B0", " minimal implementation ").toLowerCase();
  const stop = new Set([
    "the",
    "and",
    "for",
    "with",
    "this",
    "that",
    "user",
    "about",
    "feature",
    "flag",
    "name"
  ]);
  const words = (mapped.match(/[a-z0-9][a-z0-9_-]{2,}/g) ?? []).filter((word) => !stop.has(word)).slice(0, 5);
  const value = words.join("-") || "learned-gap";
  return value.slice(0, 54).replace(/-+$/g, "");
}
function summarize(value, max) {
  return value.replace(/\s+/g, " ").trim().slice(0, max);
}
function hash(value) {
  return createHash("sha1").update(value).digest("hex");
}
async function clearRuntimeSkillCaches() {
  try {
    const { clearCommandsCache } = await import("./chunk-d1184k7b.js");
    clearCommandsCache();
  } catch {}
}
var DRAFT_PROMOTION_COUNT = 2, ACTIVE_PROMOTION_COUNT = 4, ACTIVE_PROMOTION_DRAFT_HITS = 2;
var init_skillGapStore = __esm(() => {
  init_instinctParser();
  init_projectContext();
  init_skillGenerator();
});

export { recordSkillGap, readSkillGaps, findGapKeyByDraftPath, recordDraftHit, promoteGapToDraft, rejectSkillGap, shouldPromoteToDraft, shouldPromoteToActive, init_skillGapStore };
