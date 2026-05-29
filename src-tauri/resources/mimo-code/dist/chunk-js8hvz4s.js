// @bun
import {
  expandPath,
  init_path
} from "./chunk-4efha55s.js";
import {
  L,
  init_index_min
} from "./chunk-jdq8jgyg.js";
import {
  getCwd,
  init_cwd
} from "./chunk-dxvkxgnf.js";
import {
  init_log,
  logError
} from "./chunk-w5ahy59y.js";
import {
  getFsImplementation,
  init_fsOperations
} from "./chunk-rpbc3b7k.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/suggestions/directoryCompletion.ts
import { basename, dirname, join, sep } from "path";
function parsePartialPath(partialPath, basePath) {
  if (!partialPath) {
    const directory2 = basePath || getCwd();
    return { directory: directory2, prefix: "" };
  }
  const resolved = expandPath(partialPath, basePath);
  if (partialPath.endsWith("/") || partialPath.endsWith(sep)) {
    return { directory: resolved, prefix: "" };
  }
  const directory = dirname(resolved);
  const prefix = basename(partialPath);
  return { directory, prefix };
}
async function scanDirectory(dirPath) {
  const cached = directoryCache.get(dirPath);
  if (cached) {
    return cached;
  }
  try {
    const fs = getFsImplementation();
    const entries = await fs.readdir(dirPath);
    const directories = entries.filter((entry) => entry.isDirectory() && !entry.name.startsWith(".")).map((entry) => ({
      name: entry.name,
      path: join(dirPath, entry.name),
      type: "directory"
    })).slice(0, 100);
    directoryCache.set(dirPath, directories);
    return directories;
  } catch (error) {
    logError(error);
    return [];
  }
}
async function getDirectoryCompletions(partialPath, options = {}) {
  const { basePath = getCwd(), maxResults = 10 } = options;
  const { directory, prefix } = parsePartialPath(partialPath, basePath);
  const entries = await scanDirectory(directory);
  const prefixLower = prefix.toLowerCase();
  const matches = entries.filter((entry) => entry.name.toLowerCase().startsWith(prefixLower)).slice(0, maxResults);
  return matches.map((entry) => ({
    id: entry.path,
    displayText: entry.name + "/",
    description: "directory",
    metadata: { type: "directory" }
  }));
}
function isPathLikeToken(token) {
  return token.startsWith("~/") || token.startsWith("/") || token.startsWith("./") || token.startsWith("../") || token === "~" || token === "." || token === "..";
}
async function scanDirectoryForPaths(dirPath, includeHidden = false) {
  const cacheKey = `${dirPath}:${includeHidden}`;
  const cached = pathCache.get(cacheKey);
  if (cached) {
    return cached;
  }
  try {
    const fs = getFsImplementation();
    const entries = await fs.readdir(dirPath);
    const paths = entries.filter((entry) => includeHidden || !entry.name.startsWith(".")).map((entry) => ({
      name: entry.name,
      path: join(dirPath, entry.name),
      type: entry.isDirectory() ? "directory" : "file"
    })).sort((a, b) => {
      if (a.type === "directory" && b.type !== "directory")
        return -1;
      if (a.type !== "directory" && b.type === "directory")
        return 1;
      return a.name.localeCompare(b.name);
    }).slice(0, 100);
    pathCache.set(cacheKey, paths);
    return paths;
  } catch (error) {
    logError(error);
    return [];
  }
}
async function getPathCompletions(partialPath, options = {}) {
  const {
    basePath = getCwd(),
    maxResults = 10,
    includeFiles = true,
    includeHidden = false
  } = options;
  const { directory, prefix } = parsePartialPath(partialPath, basePath);
  const entries = await scanDirectoryForPaths(directory, includeHidden);
  const prefixLower = prefix.toLowerCase();
  const matches = entries.filter((entry) => {
    if (!includeFiles && entry.type === "file")
      return false;
    return entry.name.toLowerCase().startsWith(prefixLower);
  }).slice(0, maxResults);
  const hasSeparator = partialPath.includes("/") || partialPath.includes(sep);
  let dirPortion = "";
  if (hasSeparator) {
    const lastSlash = partialPath.lastIndexOf("/");
    const lastSep = partialPath.lastIndexOf(sep);
    const lastSeparatorPos = Math.max(lastSlash, lastSep);
    dirPortion = partialPath.substring(0, lastSeparatorPos + 1);
  }
  if (dirPortion.startsWith("./") || dirPortion.startsWith("." + sep)) {
    dirPortion = dirPortion.slice(2);
  }
  return matches.map((entry) => {
    const fullPath = dirPortion + entry.name;
    return {
      id: fullPath,
      displayText: entry.type === "directory" ? fullPath + "/" : fullPath,
      metadata: { type: entry.type }
    };
  });
}
var CACHE_SIZE = 500, CACHE_TTL, directoryCache, pathCache;
var init_directoryCompletion = __esm(() => {
  init_index_min();
  init_cwd();
  init_fsOperations();
  init_log();
  init_path();
  CACHE_TTL = 5 * 60 * 1000;
  directoryCache = new L({
    max: CACHE_SIZE,
    ttl: CACHE_TTL
  });
  pathCache = new L({
    max: CACHE_SIZE,
    ttl: CACHE_TTL
  });
});

export { getDirectoryCompletions, isPathLikeToken, getPathCompletions, init_directoryCompletion };
