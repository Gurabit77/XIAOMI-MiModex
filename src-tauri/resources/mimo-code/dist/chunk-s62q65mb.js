// @bun
import {
  FRONTMATTER_REGEX,
  classifyFetchError,
  getPluginsDirectory,
  init_fetchTelemetry,
  init_frontmatterParser,
  init_pluginDirectories,
  init_yaml,
  logPluginFetch,
  parseYaml
} from "./chunk-ktw919wt.js";
import {
  PluginHooksSchema,
  PluginManifestSchema,
  PluginMarketplaceEntrySchema,
  PluginMarketplaceSchema,
  init_schemas
} from "./chunk-1ghcng4e.js";
import {
  init_v4
} from "./chunk-8g747a8x.js";
import {
  exports_external
} from "./chunk-d7886r6a.js";
import {
  init_log,
  logError
} from "./chunk-w5ahy59y.js";
import {
  errorMessage,
  getErrnoCode,
  getFsImplementation,
  init_debug,
  init_errors,
  init_fsOperations,
  init_slowOperations,
  isENOENT,
  jsonParse,
  jsonStringify,
  logForDebugging
} from "./chunk-rpbc3b7k.js";
import {
  axios_default,
  init_axios
} from "./chunk-3v4d4h0t.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/plugins/parseMarketplaceInput.ts
import { homedir } from "os";
import { resolve } from "path";
async function parseMarketplaceInput(input) {
  const trimmed = input.trim();
  const fs = getFsImplementation();
  const sshMatch = trimmed.match(/^([a-zA-Z0-9._-]+@[^:]+:.+?(?:\.git)?)(#(.+))?$/);
  if (sshMatch?.[1]) {
    const url = sshMatch[1];
    const ref = sshMatch[3];
    return ref ? { source: "git", url, ref } : { source: "git", url };
  }
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    const fragmentMatch = trimmed.match(/^([^#]+)(#(.+))?$/);
    const urlWithoutFragment = fragmentMatch?.[1] || trimmed;
    const ref = fragmentMatch?.[3];
    if (urlWithoutFragment.endsWith(".git") || urlWithoutFragment.includes("/_git/")) {
      return ref ? { source: "git", url: urlWithoutFragment, ref } : { source: "git", url: urlWithoutFragment };
    }
    let url;
    try {
      url = new URL(urlWithoutFragment);
    } catch (_err) {
      return { source: "url", url: urlWithoutFragment };
    }
    if (url.hostname === "github.com" || url.hostname === "www.github.com") {
      const match = url.pathname.match(/^\/([^/]+\/[^/]+?)(\/|\.git|$)/);
      if (match?.[1]) {
        const gitUrl = urlWithoutFragment.endsWith(".git") ? urlWithoutFragment : `${urlWithoutFragment}.git`;
        return ref ? { source: "git", url: gitUrl, ref } : { source: "git", url: gitUrl };
      }
    }
    return { source: "url", url: urlWithoutFragment };
  }
  const isWindows = process.platform === "win32";
  const isWindowsPath = isWindows && (trimmed.startsWith(".\\") || trimmed.startsWith("..\\") || /^[a-zA-Z]:[/\\]/.test(trimmed));
  if (trimmed.startsWith("./") || trimmed.startsWith("../") || trimmed.startsWith("/") || trimmed.startsWith("~") || isWindowsPath) {
    const resolvedPath = resolve(trimmed.startsWith("~") ? trimmed.replace(/^~/, homedir()) : trimmed);
    let stats;
    try {
      stats = await fs.stat(resolvedPath);
    } catch (e) {
      const code = getErrnoCode(e);
      return {
        error: code === "ENOENT" ? `Path does not exist: ${resolvedPath}` : `Cannot access path: ${resolvedPath} (${code ?? e})`
      };
    }
    if (stats.isFile()) {
      if (resolvedPath.endsWith(".json")) {
        return { source: "file", path: resolvedPath };
      } else {
        return {
          error: `File path must point to a .json file (marketplace.json), but got: ${resolvedPath}`
        };
      }
    } else if (stats.isDirectory()) {
      return { source: "directory", path: resolvedPath };
    } else {
      return {
        error: `Path is neither a file nor a directory: ${resolvedPath}`
      };
    }
  }
  if (trimmed.includes("/") && !trimmed.startsWith("@")) {
    if (trimmed.includes(":")) {
      return null;
    }
    const fragmentMatch = trimmed.match(/^([^#@]+)(?:[#@](.+))?$/);
    const repo = fragmentMatch?.[1] || trimmed;
    const ref = fragmentMatch?.[2];
    return ref ? { source: "github", repo, ref } : { source: "github", repo };
  }
  return null;
}
var init_parseMarketplaceInput = __esm(() => {
  init_errors();
  init_fsOperations();
});

// src/utils/plugins/installCounts.ts
import { randomBytes } from "crypto";
import { readFile, rename, unlink, writeFile } from "fs/promises";
import { join } from "path";
function getInstallCountsCachePath() {
  return join(getPluginsDirectory(), INSTALL_COUNTS_CACHE_FILENAME);
}
async function loadInstallCountsCache() {
  const cachePath = getInstallCountsCachePath();
  try {
    const content = await readFile(cachePath, { encoding: "utf-8" });
    const parsed = jsonParse(content);
    if (typeof parsed !== "object" || parsed === null || !("version" in parsed) || !("fetchedAt" in parsed) || !("counts" in parsed)) {
      logForDebugging("Install counts cache has invalid structure");
      return null;
    }
    const cache = parsed;
    if (cache.version !== INSTALL_COUNTS_CACHE_VERSION) {
      logForDebugging(`Install counts cache version mismatch (got ${cache.version}, expected ${INSTALL_COUNTS_CACHE_VERSION})`);
      return null;
    }
    if (typeof cache.fetchedAt !== "string" || !Array.isArray(cache.counts)) {
      logForDebugging("Install counts cache has invalid structure");
      return null;
    }
    const fetchedAt = new Date(cache.fetchedAt).getTime();
    if (Number.isNaN(fetchedAt)) {
      logForDebugging("Install counts cache has invalid fetchedAt timestamp");
      return null;
    }
    const validCounts = cache.counts.every((entry) => typeof entry === "object" && entry !== null && typeof entry.plugin === "string" && typeof entry.unique_installs === "number");
    if (!validCounts) {
      logForDebugging("Install counts cache has malformed entries");
      return null;
    }
    const now = Date.now();
    if (now - fetchedAt > CACHE_TTL_MS) {
      logForDebugging("Install counts cache is stale (>24h old)");
      return null;
    }
    return {
      version: cache.version,
      fetchedAt: cache.fetchedAt,
      counts: cache.counts
    };
  } catch (error) {
    const code = getErrnoCode(error);
    if (code !== "ENOENT") {
      logForDebugging(`Failed to load install counts cache: ${errorMessage(error)}`);
    }
    return null;
  }
}
async function saveInstallCountsCache(cache) {
  const cachePath = getInstallCountsCachePath();
  const tempPath = `${cachePath}.${randomBytes(8).toString("hex")}.tmp`;
  try {
    const pluginsDir = getPluginsDirectory();
    await getFsImplementation().mkdir(pluginsDir);
    const content = jsonStringify(cache, null, 2);
    await writeFile(tempPath, content, {
      encoding: "utf-8",
      mode: 384
    });
    await rename(tempPath, cachePath);
    logForDebugging("Install counts cache saved successfully");
  } catch (error) {
    logError(error);
    try {
      await unlink(tempPath);
    } catch {}
  }
}
async function fetchInstallCountsFromGitHub() {
  logForDebugging(`Fetching install counts from ${INSTALL_COUNTS_URL}`);
  const started = performance.now();
  try {
    const response = await axios_default.get(INSTALL_COUNTS_URL, {
      timeout: 1e4
    });
    if (!response.data?.plugins || !Array.isArray(response.data.plugins)) {
      throw new Error("Invalid response format from install counts API");
    }
    logPluginFetch("install_counts", INSTALL_COUNTS_URL, "success", performance.now() - started);
    return response.data.plugins;
  } catch (error) {
    logPluginFetch("install_counts", INSTALL_COUNTS_URL, "failure", performance.now() - started, classifyFetchError(error));
    throw error;
  }
}
async function getInstallCounts() {
  const cache = await loadInstallCountsCache();
  if (cache) {
    logForDebugging("Using cached install counts");
    logPluginFetch("install_counts", INSTALL_COUNTS_URL, "cache_hit", 0);
    const map = new Map;
    for (const entry of cache.counts) {
      map.set(entry.plugin, entry.unique_installs);
    }
    return map;
  }
  try {
    const counts = await fetchInstallCountsFromGitHub();
    const newCache = {
      version: INSTALL_COUNTS_CACHE_VERSION,
      fetchedAt: new Date().toISOString(),
      counts
    };
    await saveInstallCountsCache(newCache);
    const map = new Map;
    for (const entry of counts) {
      map.set(entry.plugin, entry.unique_installs);
    }
    return map;
  } catch (error) {
    logError(error);
    logForDebugging(`Failed to fetch install counts: ${errorMessage(error)}`);
    return null;
  }
}
function formatInstallCount(count) {
  if (count < 1000) {
    return String(count);
  }
  if (count < 1e6) {
    const k = count / 1000;
    const formatted2 = k.toFixed(1);
    return formatted2.endsWith(".0") ? `${formatted2.slice(0, -2)}K` : `${formatted2}K`;
  }
  const m = count / 1e6;
  const formatted = m.toFixed(1);
  return formatted.endsWith(".0") ? `${formatted.slice(0, -2)}M` : `${formatted}M`;
}
var INSTALL_COUNTS_CACHE_VERSION = 1, INSTALL_COUNTS_CACHE_FILENAME = "install-counts-cache.json", INSTALL_COUNTS_URL = "https://raw.githubusercontent.com/anthropics/claude-plugins-official/refs/heads/stats/stats/plugin-installs.json", CACHE_TTL_MS;
var init_installCounts = __esm(() => {
  init_axios();
  init_debug();
  init_errors();
  init_fsOperations();
  init_log();
  init_slowOperations();
  init_fetchTelemetry();
  init_pluginDirectories();
  CACHE_TTL_MS = 24 * 60 * 60 * 1000;
});

// src/utils/plugins/validatePlugin.ts
import { readdir, readFile as readFile2, stat } from "fs/promises";
import * as path from "path";
function detectManifestType(filePath) {
  const fileName = path.basename(filePath);
  const dirName = path.basename(path.dirname(filePath));
  if (fileName === "plugin.json")
    return "plugin";
  if (fileName === "marketplace.json")
    return "marketplace";
  if (dirName === ".claude-plugin") {
    return "plugin";
  }
  return "unknown";
}
function formatZodErrors(zodError) {
  return zodError.issues.map((error) => ({
    path: error.path.join(".") || "root",
    message: error.message,
    code: error.code
  }));
}
function checkPathTraversal(p, field, errors, hint) {
  if (p.includes("..")) {
    errors.push({
      path: field,
      message: hint ? `Path contains "..": ${p}. ${hint}` : `Path contains ".." which could be a path traversal attempt: ${p}`
    });
  }
}
function marketplaceSourceHint(p) {
  const stripped = p.replace(/^(\.\.\/)+/, "");
  const corrected = stripped !== p ? `./${stripped}` : "./plugins/my-plugin";
  return "Plugin source paths are resolved relative to the marketplace root (the directory " + "containing .claude-plugin/), not relative to marketplace.json. " + `Use "${corrected}" instead of "${p}".`;
}
async function validatePluginManifest(filePath) {
  const errors = [];
  const warnings = [];
  const absolutePath = path.resolve(filePath);
  let content;
  try {
    content = await readFile2(absolutePath, { encoding: "utf-8" });
  } catch (error) {
    const code = getErrnoCode(error);
    let message;
    if (code === "ENOENT") {
      message = `File not found: ${absolutePath}`;
    } else if (code === "EISDIR") {
      message = `Path is not a file: ${absolutePath}`;
    } else {
      message = `Failed to read file: ${errorMessage(error)}`;
    }
    return {
      success: false,
      errors: [{ path: "file", message, code }],
      warnings: [],
      filePath: absolutePath,
      fileType: "plugin"
    };
  }
  let parsed;
  try {
    parsed = jsonParse(content);
  } catch (error) {
    return {
      success: false,
      errors: [
        {
          path: "json",
          message: `Invalid JSON syntax: ${errorMessage(error)}`
        }
      ],
      warnings: [],
      filePath: absolutePath,
      fileType: "plugin"
    };
  }
  if (parsed && typeof parsed === "object") {
    const obj = parsed;
    if (obj.commands) {
      const commands = Array.isArray(obj.commands) ? obj.commands : [obj.commands];
      commands.forEach((cmd, i) => {
        if (typeof cmd === "string") {
          checkPathTraversal(cmd, `commands[${i}]`, errors);
        }
      });
    }
    if (obj.agents) {
      const agents = Array.isArray(obj.agents) ? obj.agents : [obj.agents];
      agents.forEach((agent, i) => {
        if (typeof agent === "string") {
          checkPathTraversal(agent, `agents[${i}]`, errors);
        }
      });
    }
    if (obj.skills) {
      const skills = Array.isArray(obj.skills) ? obj.skills : [obj.skills];
      skills.forEach((skill, i) => {
        if (typeof skill === "string") {
          checkPathTraversal(skill, `skills[${i}]`, errors);
        }
      });
    }
  }
  let toValidate = parsed;
  if (typeof parsed === "object" && parsed !== null) {
    const obj = parsed;
    const strayKeys = Object.keys(obj).filter((k) => MARKETPLACE_ONLY_MANIFEST_FIELDS.has(k));
    if (strayKeys.length > 0) {
      const stripped = { ...obj };
      for (const key of strayKeys) {
        delete stripped[key];
        warnings.push({
          path: key,
          message: `Field '${key}' belongs in the marketplace entry (marketplace.json), ` + `not plugin.json. It's harmless here but unused \u2014 MiMo Code ` + `ignores it at load time.`
        });
      }
      toValidate = stripped;
    }
  }
  const result = PluginManifestSchema().strict().safeParse(toValidate);
  if (!result.success) {
    errors.push(...formatZodErrors(result.error));
  }
  if (result.success) {
    const manifest = result.data;
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(manifest.name)) {
      warnings.push({
        path: "name",
        message: `Plugin name "${manifest.name}" is not kebab-case. MiMo Code accepts ` + `it, but the MiMo marketplace sync requires kebab-case ` + `(lowercase letters, digits, and hyphens only, e.g., "my-plugin").`
      });
    }
    if (!manifest.version) {
      warnings.push({
        path: "version",
        message: 'No version specified. Consider adding a version following semver (e.g., "1.0.0")'
      });
    }
    if (!manifest.description) {
      warnings.push({
        path: "description",
        message: "No description provided. Adding a description helps users understand what your plugin does"
      });
    }
    if (!manifest.author) {
      warnings.push({
        path: "author",
        message: "No author information provided. Consider adding author details for plugin attribution"
      });
    }
  }
  return {
    success: errors.length === 0,
    errors,
    warnings,
    filePath: absolutePath,
    fileType: "plugin"
  };
}
async function validateMarketplaceManifest(filePath) {
  const errors = [];
  const warnings = [];
  const absolutePath = path.resolve(filePath);
  let content;
  try {
    content = await readFile2(absolutePath, { encoding: "utf-8" });
  } catch (error) {
    const code = getErrnoCode(error);
    let message;
    if (code === "ENOENT") {
      message = `File not found: ${absolutePath}`;
    } else if (code === "EISDIR") {
      message = `Path is not a file: ${absolutePath}`;
    } else {
      message = `Failed to read file: ${errorMessage(error)}`;
    }
    return {
      success: false,
      errors: [{ path: "file", message, code }],
      warnings: [],
      filePath: absolutePath,
      fileType: "marketplace"
    };
  }
  let parsed;
  try {
    parsed = jsonParse(content);
  } catch (error) {
    return {
      success: false,
      errors: [
        {
          path: "json",
          message: `Invalid JSON syntax: ${errorMessage(error)}`
        }
      ],
      warnings: [],
      filePath: absolutePath,
      fileType: "marketplace"
    };
  }
  if (parsed && typeof parsed === "object") {
    const obj = parsed;
    if (Array.isArray(obj.plugins)) {
      obj.plugins.forEach((plugin, i) => {
        if (plugin && typeof plugin === "object" && "source" in plugin) {
          const source = plugin.source;
          if (typeof source === "string") {
            checkPathTraversal(source, `plugins[${i}].source`, errors, marketplaceSourceHint(source));
          }
          if (source && typeof source === "object" && "path" in source && typeof source.path === "string") {
            checkPathTraversal(source.path, `plugins[${i}].source.path`, errors);
          }
        }
      });
    }
  }
  const strictMarketplaceSchema = PluginMarketplaceSchema().extend({
    plugins: exports_external.array(PluginMarketplaceEntrySchema().strict())
  }).strict();
  const result = strictMarketplaceSchema.safeParse(parsed);
  if (!result.success) {
    errors.push(...formatZodErrors(result.error));
  }
  if (result.success) {
    const marketplace = result.data;
    if (!marketplace.plugins || marketplace.plugins.length === 0) {
      warnings.push({
        path: "plugins",
        message: "Marketplace has no plugins defined"
      });
    }
    if (marketplace.plugins) {
      marketplace.plugins.forEach((plugin, i) => {
        const duplicates = marketplace.plugins.filter((p) => p.name === plugin.name);
        if (duplicates.length > 1) {
          errors.push({
            path: `plugins[${i}].name`,
            message: `Duplicate plugin name "${plugin.name}" found in marketplace`
          });
        }
      });
      const manifestDir = path.dirname(absolutePath);
      const marketplaceRoot = path.basename(manifestDir) === ".claude-plugin" ? path.dirname(manifestDir) : manifestDir;
      for (const [i, entry] of marketplace.plugins.entries()) {
        if (!entry.version || typeof entry.source !== "string" || !entry.source.startsWith("./")) {
          continue;
        }
        const pluginJsonPath = path.join(marketplaceRoot, entry.source, ".claude-plugin", "plugin.json");
        let manifestVersion;
        try {
          const raw = await readFile2(pluginJsonPath, { encoding: "utf-8" });
          const parsed2 = jsonParse(raw);
          if (typeof parsed2.version === "string") {
            manifestVersion = parsed2.version;
          }
        } catch {
          continue;
        }
        if (manifestVersion && manifestVersion !== entry.version) {
          warnings.push({
            path: `plugins[${i}].version`,
            message: `Entry declares version "${entry.version}" but ${entry.source}/.claude-plugin/plugin.json says "${manifestVersion}". ` + `At install time, plugin.json wins (calculatePluginVersion precedence) \u2014 the entry version is silently ignored. ` + `Update this entry to "${manifestVersion}" to match.`
          });
        }
      }
    }
    if (!marketplace.metadata?.description) {
      warnings.push({
        path: "metadata.description",
        message: "No marketplace description provided. Adding a description helps users understand what this marketplace offers"
      });
    }
  }
  return {
    success: errors.length === 0,
    errors,
    warnings,
    filePath: absolutePath,
    fileType: "marketplace"
  };
}
function validateComponentFile(filePath, content, fileType) {
  const errors = [];
  const warnings = [];
  const match = content.match(FRONTMATTER_REGEX);
  if (!match) {
    warnings.push({
      path: "frontmatter",
      message: "No frontmatter block found. Add YAML frontmatter between --- delimiters " + "at the top of the file to set description and other metadata."
    });
    return { success: true, errors, warnings, filePath, fileType };
  }
  const frontmatterText = match[1] || "";
  let parsed;
  try {
    parsed = parseYaml(frontmatterText);
  } catch (e) {
    errors.push({
      path: "frontmatter",
      message: `YAML frontmatter failed to parse: ${errorMessage(e)}. ` + `At runtime this ${fileType} loads with empty metadata (all frontmatter ` + `fields silently dropped).`
    });
    return { success: false, errors, warnings, filePath, fileType };
  }
  if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) {
    errors.push({
      path: "frontmatter",
      message: "Frontmatter must be a YAML mapping (key: value pairs), got " + `${Array.isArray(parsed) ? "an array" : parsed === null ? "null" : typeof parsed}.`
    });
    return { success: false, errors, warnings, filePath, fileType };
  }
  const fm = parsed;
  if (fm.description !== undefined) {
    const d = fm.description;
    if (typeof d !== "string" && typeof d !== "number" && typeof d !== "boolean" && d !== null) {
      errors.push({
        path: "description",
        message: `description must be a string, got ${Array.isArray(d) ? "array" : typeof d}. ` + `At runtime this value is dropped.`
      });
    }
  } else {
    warnings.push({
      path: "description",
      message: `No description in frontmatter. A description helps users and Claude ` + `understand when to use this ${fileType}.`
    });
  }
  if (fm.name !== undefined && fm.name !== null && typeof fm.name !== "string") {
    errors.push({
      path: "name",
      message: `name must be a string, got ${typeof fm.name}.`
    });
  }
  const at = fm["allowed-tools"];
  if (at !== undefined && at !== null) {
    if (typeof at !== "string" && !Array.isArray(at)) {
      errors.push({
        path: "allowed-tools",
        message: `allowed-tools must be a string or array of strings, got ${typeof at}.`
      });
    } else if (Array.isArray(at) && at.some((t) => typeof t !== "string")) {
      errors.push({
        path: "allowed-tools",
        message: "allowed-tools array must contain only strings."
      });
    }
  }
  const sh = fm.shell;
  if (sh !== undefined && sh !== null) {
    if (typeof sh !== "string") {
      errors.push({
        path: "shell",
        message: `shell must be a string, got ${typeof sh}.`
      });
    } else {
      const normalized = sh.trim().toLowerCase();
      if (normalized !== "bash" && normalized !== "powershell") {
        errors.push({
          path: "shell",
          message: `shell must be 'bash' or 'powershell', got '${sh}'.`
        });
      }
    }
  }
  return { success: errors.length === 0, errors, warnings, filePath, fileType };
}
async function validateHooksJson(filePath) {
  let content;
  try {
    content = await readFile2(filePath, { encoding: "utf-8" });
  } catch (e) {
    const code = getErrnoCode(e);
    if (code === "ENOENT") {
      return {
        success: true,
        errors: [],
        warnings: [],
        filePath,
        fileType: "hooks"
      };
    }
    return {
      success: false,
      errors: [
        { path: "file", message: `Failed to read file: ${errorMessage(e)}` }
      ],
      warnings: [],
      filePath,
      fileType: "hooks"
    };
  }
  let parsed;
  try {
    parsed = jsonParse(content);
  } catch (e) {
    return {
      success: false,
      errors: [
        {
          path: "json",
          message: `Invalid JSON syntax: ${errorMessage(e)}. ` + `At runtime this breaks the entire plugin load.`
        }
      ],
      warnings: [],
      filePath,
      fileType: "hooks"
    };
  }
  const result = PluginHooksSchema().safeParse(parsed);
  if (!result.success) {
    return {
      success: false,
      errors: formatZodErrors(result.error),
      warnings: [],
      filePath,
      fileType: "hooks"
    };
  }
  return {
    success: true,
    errors: [],
    warnings: [],
    filePath,
    fileType: "hooks"
  };
}
async function collectMarkdown(dir, isSkillsDir) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch (e) {
    const code = getErrnoCode(e);
    if (code === "ENOENT" || code === "ENOTDIR")
      return [];
    throw e;
  }
  if (isSkillsDir) {
    return entries.filter((e) => e.isDirectory()).map((e) => path.join(dir, e.name, "SKILL.md"));
  }
  const out = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...await collectMarkdown(full, false));
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) {
      out.push(full);
    }
  }
  return out;
}
async function validatePluginContents(pluginDir) {
  const results = [];
  const dirs = [
    ["skill", path.join(pluginDir, "skills")],
    ["agent", path.join(pluginDir, "agents")],
    ["command", path.join(pluginDir, "commands")]
  ];
  for (const [fileType, dir] of dirs) {
    const files = await collectMarkdown(dir, fileType === "skill");
    for (const filePath of files) {
      let content;
      try {
        content = await readFile2(filePath, { encoding: "utf-8" });
      } catch (e) {
        if (isENOENT(e))
          continue;
        results.push({
          success: false,
          errors: [
            { path: "file", message: `Failed to read: ${errorMessage(e)}` }
          ],
          warnings: [],
          filePath,
          fileType
        });
        continue;
      }
      const r = validateComponentFile(filePath, content, fileType);
      if (r.errors.length > 0 || r.warnings.length > 0) {
        results.push(r);
      }
    }
  }
  const hooksResult = await validateHooksJson(path.join(pluginDir, "hooks", "hooks.json"));
  if (hooksResult.errors.length > 0 || hooksResult.warnings.length > 0) {
    results.push(hooksResult);
  }
  return results;
}
async function validateManifest(filePath) {
  const absolutePath = path.resolve(filePath);
  let stats = null;
  try {
    stats = await stat(absolutePath);
  } catch (e) {
    if (!isENOENT(e)) {
      throw e;
    }
  }
  if (stats?.isDirectory()) {
    const marketplacePath = path.join(absolutePath, ".claude-plugin", "marketplace.json");
    const marketplaceResult = await validateMarketplaceManifest(marketplacePath);
    if (marketplaceResult.errors[0]?.code !== "ENOENT") {
      return marketplaceResult;
    }
    const pluginPath = path.join(absolutePath, ".claude-plugin", "plugin.json");
    const pluginResult = await validatePluginManifest(pluginPath);
    if (pluginResult.errors[0]?.code !== "ENOENT") {
      return pluginResult;
    }
    return {
      success: false,
      errors: [
        {
          path: "directory",
          message: `No manifest found in directory. Expected .claude-plugin/marketplace.json or .claude-plugin/plugin.json`
        }
      ],
      warnings: [],
      filePath: absolutePath,
      fileType: "plugin"
    };
  }
  const manifestType = detectManifestType(filePath);
  switch (manifestType) {
    case "plugin":
      return validatePluginManifest(filePath);
    case "marketplace":
      return validateMarketplaceManifest(filePath);
    case "unknown": {
      try {
        const content = await readFile2(absolutePath, { encoding: "utf-8" });
        const parsed = jsonParse(content);
        if (Array.isArray(parsed.plugins)) {
          return validateMarketplaceManifest(filePath);
        }
      } catch (e) {
        const code = getErrnoCode(e);
        if (code === "ENOENT") {
          return {
            success: false,
            errors: [
              {
                path: "file",
                message: `File not found: ${absolutePath}`
              }
            ],
            warnings: [],
            filePath: absolutePath,
            fileType: "plugin"
          };
        }
      }
      return validatePluginManifest(filePath);
    }
  }
}
var MARKETPLACE_ONLY_MANIFEST_FIELDS;
var init_validatePlugin = __esm(() => {
  init_v4();
  init_errors();
  init_frontmatterParser();
  init_slowOperations();
  init_yaml();
  init_schemas();
  MARKETPLACE_ONLY_MANIFEST_FIELDS = new Set([
    "category",
    "source",
    "tags",
    "strict",
    "id"
  ]);
});

export { parseMarketplaceInput, init_parseMarketplaceInput, getInstallCounts, formatInstallCount, init_installCounts, validatePluginContents, validateManifest, init_validatePlugin };
