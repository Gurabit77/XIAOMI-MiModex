// @bun
import {
  getSkillLearningConfig,
  init_config
} from "./chunk-d72n340z.js";
import {
  clearSkillIndexCache,
  init_localSearch
} from "./chunk-jakzh3ae.js";
import {
  getClaudeConfigHomeDir,
  init_envUtils
} from "./chunk-hxhwzgnn.js";
import {
  __esm,
  __require
} from "./chunk-qp2qdcda.js";

// src/services/skillLearning/learningPolicy.ts
function shouldGenerateSkillFromInstincts(instincts) {
  if (instincts.length === 0)
    return false;
  const avg = instincts.reduce((sum, instinct) => sum + instinct.confidence, 0) / instincts.length;
  return avg >= getSkillLearningConfig().minConfidence;
}
function buildLearnedSkillName(instincts) {
  const domain = instincts[0]?.domain ?? "project";
  const prefix = DOMAIN_PREFIXES[domain];
  const words = new Set;
  for (const instinct of instincts) {
    for (const word of `${instinct.trigger} ${instinct.action}`.toLowerCase().split(/[^a-z0-9]+/)) {
      if (isUsefulNameWord(word))
        words.add(word);
      if (words.size >= 5)
        break;
    }
    if (words.size >= 5)
      break;
  }
  const name = normalizeSkillName([prefix, ...words].join("-"));
  return isGenericSkillName(name) ? `${prefix}-learned-pattern` : name;
}
function normalizeSkillName(value) {
  const normalized = value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, MAX_SKILL_NAME_LENGTH).replace(/-$/g, "");
  return normalized || "learned-skill";
}
function isValidLearnedSkillName(value) {
  return value === normalizeSkillName(value) && value.length > 0 && value.length <= MAX_SKILL_NAME_LENGTH && !isGenericSkillName(value);
}
function isGenericSkillName(value) {
  return GENERIC_NAMES.has(value);
}
function decideDefaultScope(instincts) {
  if (instincts.length === 0)
    return "project";
  const globalFriendly = instincts.every((instinct) => ["security", "git", "workflow"].includes(instinct.domain));
  return globalFriendly && instincts.length >= 2 ? "global" : "project";
}
function isUsefulNameWord(word) {
  return word.length > 2 && ![
    "when",
    "with",
    "this",
    "that",
    "user",
    "project",
    "prefer",
    "avoid",
    "use",
    "using",
    "the",
    "and",
    "for"
  ].includes(word);
}
var MIN_CONFIDENCE_TO_GENERATE_SKILL = 0.75, MAX_SKILL_NAME_LENGTH = 64, DOMAIN_PREFIXES, GENERIC_NAMES;
var init_learningPolicy = __esm(() => {
  init_config();
  DOMAIN_PREFIXES = {
    workflow: "workflow",
    testing: "testing",
    debugging: "debugging",
    "code-style": "style",
    security: "security",
    git: "git",
    project: "project"
  };
  GENERIC_NAMES = new Set([
    "learned-skill",
    "better-skill",
    "new-skill",
    "project-skill",
    "workflow-skill"
  ]);
});

// src/services/skillLearning/skillLifecycle.ts
import {
  mkdir,
  readdir,
  readFile,
  rename,
  rm,
  writeFile
} from "fs/promises";
import { existsSync } from "fs";
import { basename, dirname, join } from "path";
async function compareExistingArtifacts(kind, draft, rootsOrSkills) {
  const existing = rootsOrSkills.length > 0 && typeof rootsOrSkills[0] === "string" ? await loadExistingArtifacts(kind, rootsOrSkills) : rootsOrSkills;
  const draftTerms = terms(`${draft.name} ${draft.description} ${draft.content}`);
  return existing.map((skill) => ({
    skill,
    score: overlapScore(draftTerms, terms(`${skill.name} ${skill.description} ${skill.content}`))
  })).filter((item) => item.score >= 0.18).sort((a, b) => b.score - a.score).map((item) => item.skill);
}
async function compareExistingSkills(draft, rootsOrSkills) {
  return compareExistingArtifacts("skill", draft, rootsOrSkills);
}
async function loadExistingArtifacts(kind, roots) {
  if (kind === "skill")
    return loadExistingSkills(roots);
  const results = [];
  for (const root of roots) {
    if (!existsSync(root))
      continue;
    await collectArtifactFiles(root, results);
  }
  return results;
}
function decideSkillLifecycle(draft, existingSkills, options = {}) {
  const deletable = existingSkills.find((skill) => isSafeToHardDelete(skill));
  if (options.allowHardDelete && deletable) {
    return {
      type: "delete",
      targetSkill: deletable,
      reason: "Existing skill is low quality, unreferenced, and safe to delete.",
      confirmed: true
    };
  }
  const target = existingSkills[0];
  if (!target) {
    return {
      type: "create",
      draft,
      reason: "No overlapping active skill found."
    };
  }
  const draftTerms = terms(`${draft.name} ${draft.description} ${draft.content}`);
  const existingTerms = terms(`${target.name} ${target.description} ${target.content}`);
  const score = overlapScore(draftTerms, existingTerms);
  if (score >= 0.72 && draft.confidence >= 0.75 && shouldReplaceSkill(draft, target)) {
    return {
      type: "replace",
      targetSkill: target,
      draft,
      reason: `New learned skill has high overlap (${score.toFixed(2)}) and higher confidence.`
    };
  }
  if (score >= 0.35) {
    return {
      type: "merge",
      targetSkill: target,
      patch: buildMergePatch(draft),
      reason: `Existing skill overlaps with the learned pattern (${score.toFixed(2)}).`
    };
  }
  return { type: "create", draft, reason: "Overlap is too low to merge." };
}
async function applySkillLifecycleDecision(decision, options = {}) {
  switch (decision.type) {
    case "create": {
      return { activePath: await writeLearnedSkill(decision.draft) };
    }
    case "merge": {
      if (!isSkillLearningGenerated(decision.targetSkill)) {
        process.stderr.write(`[skill-learning] skip user-authored skill: ${decision.targetSkill.path}
`);
        return {};
      }
      return {
        activePath: await writeMergePatch(decision.targetSkill, decision.patch)
      };
    }
    case "replace": {
      if (!isSkillLearningGenerated(decision.targetSkill)) {
        process.stderr.write(`[skill-learning] skip user-authored skill: ${decision.targetSkill.path}
`);
        return {};
      }
      const predictedNewPath = decision.draft.outputPath;
      if (decision.hardDelete) {
        const { deletedPath, manifestPath: manifestPath2, tombstonePath } = await deleteSkill(decision.targetSkill, decision.reason, {
          newSkill: decision.draft.name,
          newPath: predictedNewPath
        }, { ...options, allowHardDelete: true });
        const activePath2 = await writeLearnedSkill(decision.draft);
        return { activePath: activePath2, deletedPath, manifestPath: manifestPath2, tombstonePath };
      }
      const { archivedPath, manifestPath } = await archiveSkill(decision.targetSkill, decision.reason, {
        newSkill: decision.draft.name,
        newPath: predictedNewPath
      }, options);
      const activePath = await writeLearnedSkill(decision.draft);
      return { activePath, archivedPath, manifestPath };
    }
    case "archive":
      return await archiveSkill(decision.targetSkill, decision.reason, undefined, options);
    case "delete":
      return await deleteSkill(decision.targetSkill, decision.reason, undefined, {
        ...options,
        allowHardDelete: options.allowHardDelete && decision.confirmed !== false
      });
  }
}
async function loadExistingSkills(roots) {
  const skills = [];
  for (const root of roots) {
    if (!existsSync(root))
      continue;
    await collectSkillFiles(root, skills);
  }
  return skills;
}
async function archiveSkill(skill, reason, replacement, options = {}) {
  const skillDir = dirname(skill.path);
  const archiveRoot = options.archiveRoot ?? join(dirname(skillDir), ".archive");
  const archivedPath = join(archiveRoot, `${basename(skillDir)}-${timestamp(options.now)}`);
  await mkdir(archiveRoot, { recursive: true });
  await rename(skillDir, archivedPath);
  const manifestPath = await writeReplacementManifest(options.manifestRoot ?? archivedPath, {
    oldSkill: skill.name,
    oldPath: skill.path,
    newSkill: replacement?.newSkill,
    newPath: replacement?.newPath,
    action: "archive",
    reason,
    replacedAt: (options.now ?? new Date).toISOString(),
    recoverable: true
  });
  clearSkillIndexCache();
  return { archivedPath, manifestPath };
}
async function deleteSkill(skill, reason, replacement, options = {}) {
  if (!options.allowHardDelete) {
    throw new Error("Hard delete requires allowHardDelete=true");
  }
  const skillDir = dirname(skill.path);
  const content = existsSync(skill.path) ? await readFile(skill.path, "utf8") : "";
  const manifestRoot = options.manifestRoot ?? join(dirname(skillDir), ".tombstones");
  const manifestPath = await writeReplacementManifest(manifestRoot, {
    oldSkill: skill.name,
    oldPath: skill.path,
    newSkill: replacement?.newSkill,
    newPath: replacement?.newPath,
    action: "delete",
    reason,
    replacedAt: (options.now ?? new Date).toISOString(),
    recoverable: false
  });
  const tombstonePath = join(manifestRoot, `${skill.name}-${timestamp(options.now)}.tombstone.json`);
  await writeFile(tombstonePath, `${JSON.stringify({ deletedSkill: skill.name, oldPath: skill.path, content }, null, 2)}
`, "utf8");
  await rm(skillDir, { recursive: true, force: true });
  clearSkillIndexCache();
  return { deletedPath: skill.path, manifestPath, tombstonePath };
}
async function writeReplacementManifest(directory, manifest) {
  await mkdir(directory, { recursive: true });
  const manifestPath = join(directory, "replacement-manifest.json");
  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}
`, "utf8");
  return manifestPath;
}
async function writeMergePatch(skill, patch) {
  const patchPath = join(dirname(skill.path), "learned-skill.patch.md");
  await writeFile(patchPath, patch, "utf8");
  clearSkillIndexCache();
  return patchPath;
}
function buildMergePatch(draft) {
  return [
    "# Learned Skill Merge Patch",
    "",
    `Target learned skill: ${draft.name}`,
    `Confidence: ${draft.confidence}`,
    "",
    "## Suggested additions",
    "",
    draft.content
  ].join(`
`);
}
function shouldReplaceSkill(draft, target) {
  if (target.status === "superseded" || target.status === "archived")
    return true;
  const confidenceGap = draft.confidence - (target.confidence ?? 0.5);
  const contentGap = draft.content.length - target.content.length;
  return confidenceGap >= 0.15 || contentGap > 160;
}
function isSafeToHardDelete(skill) {
  return skill.safeToDelete === true && (skill.referencedBy?.length ?? 0) === 0 && skill.quality === "low";
}
function timestamp(date = new Date) {
  return date.toISOString().replace(/[:.]/g, "-");
}
async function collectSkillFiles(root, results) {
  const entries = await readdir(root, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(root, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === ".archive")
        continue;
      await collectSkillFiles(full, results);
      continue;
    }
    if (entry.isFile() && entry.name === "SKILL.md") {
      const content = await readFile(full, "utf8");
      results.push({
        name: parseFrontmatter(content, "name") ?? basename(dirname(full)),
        description: parseFrontmatter(content, "description") ?? "",
        path: full,
        content
      });
    }
  }
}
async function collectArtifactFiles(root, results) {
  const entries = await readdir(root, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(root, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === ".archive")
        continue;
      await collectArtifactFiles(full, results);
      continue;
    }
    if (entry.isFile() && entry.name.endsWith(".md")) {
      const content = await readFile(full, "utf8");
      results.push({
        name: parseFrontmatter(content, "name") ?? entry.name.replace(/\.md$/, ""),
        description: parseFrontmatter(content, "description") ?? "",
        path: full,
        content
      });
    }
  }
}
function parseFrontmatter(content, key) {
  const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fmMatch)
    return;
  const match = fmMatch[1].match(new RegExp(`^${key}:\\s*"?([^"\\n]+)"?`, "m"));
  return match?.[1]?.trim();
}
function isSkillLearningGenerated(skill) {
  return parseFrontmatter(skill.content, "origin") === "skill-learning";
}
function terms(value) {
  return new Set(value.toLowerCase().split(/[^a-z0-9]+/).filter((term) => term.length > 2));
}
function overlapScore(a, b) {
  if (a.size === 0 || b.size === 0)
    return 0;
  let intersection = 0;
  for (const term of a) {
    if (b.has(term))
      intersection++;
  }
  return intersection / Math.min(a.size, b.size);
}
function scoreArtifactOverlap(draft, existing) {
  const draftTerms = terms(`${draft.name} ${draft.description} ${draft.content}`);
  const existingTerms = terms(`${existing.name} ${existing.description} ${existing.content}`);
  return overlapScore(draftTerms, existingTerms);
}
var init_skillLifecycle = __esm(() => {
  init_localSearch();
  init_skillGenerator();
});

// src/services/skillLearning/skillGenerator.ts
import { mkdir as mkdir2, readFile as readFile2, writeFile as writeFile2 } from "fs/promises";
import { join as join2 } from "path";
function generateSkillDraft(instincts, options) {
  if (instincts.length === 0) {
    throw new Error("Cannot generate a skill draft without instincts");
  }
  const scope = options?.scope ?? instincts[0]?.scope ?? "project";
  const name = options?.name ? normalizeSkillName(options.name) : buildSkillName(instincts);
  const confidence = instincts.reduce((sum, instinct) => sum + instinct.confidence, 0) / instincts.length;
  const description = options?.description ?? buildDescription(instincts);
  const outputPath = getLearnedSkillPath(name, scope, options);
  const content = buildSkillContent({
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
async function generateOrMergeSkillDraft(instincts, options, existingRoots) {
  const draft = generateSkillDraft(instincts, options);
  const candidates = await compareExistingArtifacts("skill", draft, existingRoots);
  for (const candidate of candidates) {
    const overlap = scoreArtifactOverlap(draft, candidate);
    if (overlap >= DUPLICATE_SKILL_OVERLAP_THRESHOLD) {
      const appendedPath = await appendInstinctEvidenceToSkill(candidate, instincts);
      return {
        action: "append-evidence",
        target: candidate,
        overlap,
        appendedPath
      };
    }
  }
  return { action: "create", draft };
}
async function appendInstinctEvidenceToSkill(target, instincts) {
  const existing = await readFile2(target.path, "utf8").catch(() => target.content);
  if (Buffer.byteLength(existing, "utf8") >= MAX_SKILL_FILE_BYTES) {
    return target.path;
  }
  const allEvidence = instincts.flatMap((instinct) => instinct.evidence.map((evidence) => `- ${evidence}`));
  const evidenceLines = allEvidence.slice(0, MAX_EVIDENCE_LINES_PER_APPEND);
  if (evidenceLines.length < allEvidence.length) {
    evidenceLines.push(`- [... ${allEvidence.length - evidenceLines.length} more evidence entries omitted]`);
  }
  const now = new Date().toISOString();
  const block = [
    "",
    `## Learned evidence (${now})`,
    "",
    ...evidenceLines,
    ""
  ].join(`
`);
  const merged = existing.endsWith(`
`) ? existing + block : `${existing}
${block}`;
  const finalContent = Buffer.byteLength(merged, "utf8") > MAX_SKILL_FILE_BYTES ? merged.slice(0, MAX_SKILL_FILE_BYTES) : merged;
  await writeFile2(target.path, finalContent, "utf8");
  clearSkillIndexCache();
  return target.path;
}
async function writeLearnedSkill(draft) {
  await mkdir2(draft.outputPath, { recursive: true });
  const filePath = join2(draft.outputPath, "SKILL.md");
  await writeFile2(filePath, draft.content, "utf8");
  clearSkillIndexCache();
  try {
    const { clearCommandsCache } = await import("./chunk-d1184k7b.js");
    clearCommandsCache();
  } catch {}
  return filePath;
}
function getLearnedSkillPath(name, scope, options) {
  if (options?.outputRoot)
    return join2(options.outputRoot, name);
  if (scope === "project") {
    return join2(options?.cwd ?? process.cwd(), ".claude", "skills", name);
  }
  return join2(options?.globalSkillsDir ?? join2(getClaudeConfigHomeDir(), "skills"), name);
}
function buildSkillName(instincts) {
  return buildLearnedSkillName(instincts);
}
function buildDescription(instincts) {
  const action = instincts[0]?.action ?? "Apply a learned project pattern";
  const short = action.replace(/\s+/g, " ").slice(0, 120);
  return short.length > 0 ? short : "Apply learned project patterns";
}
function buildSkillContent(params) {
  const { name, description, confidence, instincts } = params;
  const lines = [
    "---",
    `name: ${name}`,
    `description: ${JSON.stringify(description)}`,
    "origin: skill-learning",
    `confidence: ${Number(confidence.toFixed(2))}`,
    `evolved_from: [${instincts.map((instinct) => JSON.stringify(instinct.id)).join(", ")}]`,
    "---",
    "",
    `# ${titleCase(name)}`,
    "",
    "## Trigger",
    "",
    instincts.map((instinct) => `- ${instinct.trigger}`).join(`
`),
    "",
    "## Action",
    "",
    instincts.map((instinct) => `- ${instinct.action}`).join(`
`),
    "",
    "## Evidence",
    "",
    instincts.flatMap((instinct) => instinct.evidence.map((evidence) => `- ${evidence}`)).slice(0, MAX_EVIDENCE_LINES_IN_SKILL).join(`
`),
    ""
  ];
  return lines.join(`
`);
}
function titleCase(value) {
  return value.split("-").filter(Boolean).map((part) => part[0]?.toUpperCase() + part.slice(1)).join(" ");
}
var DUPLICATE_SKILL_OVERLAP_THRESHOLD = 0.8, MAX_EVIDENCE_LINES_PER_APPEND = 20, MAX_EVIDENCE_LINES_IN_SKILL = 20, MAX_SKILL_FILE_BYTES = 50000;
var init_skillGenerator = __esm(() => {
  init_envUtils();
  init_localSearch();
  init_learningPolicy();
  init_skillLifecycle();
});

export { MIN_CONFIDENCE_TO_GENERATE_SKILL, MAX_SKILL_NAME_LENGTH, shouldGenerateSkillFromInstincts, buildLearnedSkillName, normalizeSkillName, isValidLearnedSkillName, isGenericSkillName, decideDefaultScope, init_learningPolicy, DUPLICATE_SKILL_OVERLAP_THRESHOLD, generateSkillDraft, generateOrMergeSkillDraft, appendInstinctEvidenceToSkill, writeLearnedSkill, getLearnedSkillPath, init_skillGenerator, compareExistingArtifacts, compareExistingSkills, loadExistingArtifacts, decideSkillLifecycle, applySkillLifecycleDecision, loadExistingSkills, archiveSkill, deleteSkill, writeReplacementManifest, scoreArtifactOverlap, init_skillLifecycle };
