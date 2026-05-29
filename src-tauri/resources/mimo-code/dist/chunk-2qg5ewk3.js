// @bun
import {
  getClaudeConfigHomeDir,
  init_envUtils
} from "./chunk-hxhwzgnn.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/services/skillLearning/projectContext.ts
import { execFileSync } from "child_process";
import { createHash } from "crypto";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  realpathSync,
  writeFileSync
} from "fs";
import { basename, join, resolve } from "path";
function getSkillLearningRootDir() {
  return join(getClaudeConfigHomeDir(), "skill-learning");
}
function getProjectsRegistryPath() {
  return join(getSkillLearningRootDir(), "projects.json");
}
function getProjectStorageDir(projectId) {
  if (projectId === GLOBAL_PROJECT_ID) {
    return join(getSkillLearningRootDir(), "global");
  }
  return join(getSkillLearningRootDir(), "projects", projectId);
}
function getProjectContextPath(projectId) {
  return join(getProjectStorageDir(projectId), "project.json");
}
function resolveProjectContext(cwd = process.cwd()) {
  const cached = contextCache.get(cwd);
  if (cached) {
    const now = Date.now();
    if (now - lastPersistAt > PERSIST_INTERVAL_MS) {
      lastPersistAt = now;
      persistProjectContext(cached);
    }
    return cached;
  }
  const resolved = resolveContext(cwd);
  contextCache.set(cwd, resolved);
  persistProjectContext(resolved);
  lastPersistAt = Date.now();
  return resolved;
}
function resetProjectContextCacheForTest() {
  contextCache.clear();
  lastPersistAt = 0;
}
function listKnownProjects() {
  const registry = readProjectsRegistry(getProjectsRegistryPath());
  return Object.values(registry.projects).sort((a, b) => a.projectName.localeCompare(b.projectName));
}
function resolveContext(cwd) {
  const envProjectDir = process.env.CLAUDE_PROJECT_DIR?.trim();
  if (envProjectDir) {
    const projectRoot = normalizePath(envProjectDir);
    return buildContext({
      source: "claude_project_dir",
      scope: "project",
      cwd,
      projectRoot,
      identity: `claude-project-dir:${projectRoot}`,
      projectName: basename(projectRoot) || "project"
    });
  }
  const gitRemote = git(["remote", "get-url", "origin"], cwd);
  if (gitRemote) {
    const projectRoot = git(["rev-parse", "--show-toplevel"], cwd);
    const normalizedRemote = normalizeGitRemote(gitRemote);
    return buildContext({
      source: "git_remote",
      scope: "project",
      cwd,
      projectRoot: projectRoot ? normalizePath(projectRoot) : normalizePath(cwd),
      gitRemote: normalizedRemote,
      identity: `git-remote:${normalizedRemote}`,
      projectName: projectNameFromRemote(normalizedRemote)
    });
  }
  const gitRoot = git(["rev-parse", "--show-toplevel"], cwd);
  if (gitRoot) {
    const projectRoot = normalizePath(gitRoot);
    return buildContext({
      source: "git_root",
      scope: "project",
      cwd,
      projectRoot,
      identity: `git-root:${projectRoot}`,
      projectName: basename(projectRoot) || "project"
    });
  }
  return buildContext({
    source: "global",
    scope: "global",
    cwd,
    projectRoot: undefined,
    identity: "global",
    projectName: GLOBAL_PROJECT_NAME
  });
}
function buildContext(input) {
  const projectId = input.scope === "global" ? GLOBAL_PROJECT_ID : stableProjectId(input.identity);
  return {
    projectId,
    projectName: input.projectName,
    scope: input.scope,
    source: input.source,
    cwd: normalizePath(input.cwd),
    projectRoot: input.projectRoot,
    gitRemote: input.gitRemote,
    storageDir: getProjectStorageDir(projectId)
  };
}
function persistProjectContext(context) {
  const now = new Date().toISOString();
  const registryPath = getProjectsRegistryPath();
  const registry = readProjectsRegistry(registryPath);
  const existing = registry.projects[context.projectId];
  const record = {
    ...context,
    firstSeenAt: existing?.firstSeenAt ?? now,
    lastSeenAt: now
  };
  registry.projects[context.projectId] = record;
  registry.updatedAt = now;
  mkdirSync(context.storageDir, { recursive: true });
  mkdirSync(getSkillLearningRootDir(), { recursive: true });
  writeJson(registryPath, registry);
  writeJson(getProjectContextPath(context.projectId), record);
}
function readProjectsRegistry(path) {
  if (!existsSync(path)) {
    return {
      version: REGISTRY_VERSION,
      updatedAt: new Date(0).toISOString(),
      projects: {}
    };
  }
  try {
    const parsed = JSON.parse(readFileSync(path, "utf8"));
    if (parsed.version === REGISTRY_VERSION && typeof parsed.projects === "object" && parsed.projects) {
      return {
        version: REGISTRY_VERSION,
        updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : new Date(0).toISOString(),
        projects: parsed.projects
      };
    }
  } catch {}
  return {
    version: REGISTRY_VERSION,
    updatedAt: new Date(0).toISOString(),
    projects: {}
  };
}
function writeJson(path, value) {
  writeFileSync(path, `${JSON.stringify(value, null, 2)}
`, "utf8");
}
function git(args, cwd) {
  try {
    const output = execFileSync("git", ["-C", cwd, ...args], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"]
    });
    const trimmed = output.trim();
    return trimmed ? trimmed : null;
  } catch {
    return null;
  }
}
function normalizePath(path) {
  const resolved = resolve(path);
  try {
    return realpathSync.native(resolved).normalize("NFC");
  } catch {
    return resolved.normalize("NFC");
  }
}
function normalizeGitRemote(remote) {
  let normalized = remote.trim().replace(/\\/g, "/");
  normalized = normalized.replace(/\.git$/i, "");
  normalized = normalized.replace(/\/+$/g, "");
  return normalized.toLowerCase();
}
function projectNameFromRemote(remote) {
  const match = remote.match(/[:/]([^/:]+?)(?:\.git)?$/);
  return match?.[1] || "project";
}
function stableProjectId(identity) {
  const hash = createHash("sha256").update(identity).digest("hex").slice(0, 16);
  return `project-${hash}`;
}
var REGISTRY_VERSION = 1, GLOBAL_PROJECT_ID = "global", GLOBAL_PROJECT_NAME = "Global", contextCache, PERSIST_INTERVAL_MS, lastPersistAt = 0;
var init_projectContext = __esm(() => {
  init_envUtils();
  contextCache = new Map;
  PERSIST_INTERVAL_MS = 5 * 60 * 1000;
});

export { getSkillLearningRootDir, getProjectsRegistryPath, getProjectStorageDir, getProjectContextPath, resolveProjectContext, resetProjectContextCacheForTest, listKnownProjects, init_projectContext };
