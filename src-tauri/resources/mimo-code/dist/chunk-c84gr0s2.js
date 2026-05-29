// @bun
import {
  getRemoteUrl,
  init_git
} from "./chunk-t6jhrn34.js";
import {
  getCwd,
  init_cwd
} from "./chunk-dxvkxgnf.js";
import {
  init_debug,
  logForDebugging
} from "./chunk-rpbc3b7k.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/detectRepository.ts
function clearRepositoryCaches() {
  repositoryWithHostCache.clear();
}
async function detectCurrentRepository() {
  const result = await detectCurrentRepositoryWithHost();
  if (!result)
    return null;
  if (result.host !== "github.com")
    return null;
  return `${result.owner}/${result.name}`;
}
async function detectCurrentRepositoryWithHost() {
  const cwd = getCwd();
  if (repositoryWithHostCache.has(cwd)) {
    return repositoryWithHostCache.get(cwd) ?? null;
  }
  try {
    const remoteUrl = await getRemoteUrl();
    logForDebugging(`Git remote URL: ${remoteUrl}`);
    if (!remoteUrl) {
      logForDebugging("No git remote URL found");
      repositoryWithHostCache.set(cwd, null);
      return null;
    }
    const parsed = parseGitRemote(remoteUrl);
    logForDebugging(`Parsed repository: ${parsed ? `${parsed.host}/${parsed.owner}/${parsed.name}` : null} from URL: ${remoteUrl}`);
    repositoryWithHostCache.set(cwd, parsed);
    return parsed;
  } catch (error) {
    logForDebugging(`Error detecting repository: ${error}`);
    repositoryWithHostCache.set(cwd, null);
    return null;
  }
}
function getCachedRepository() {
  const parsed = repositoryWithHostCache.get(getCwd());
  if (!parsed || parsed.host !== "github.com")
    return null;
  return `${parsed.owner}/${parsed.name}`;
}
function parseGitRemote(input) {
  const trimmed = input.trim();
  const sshMatch = trimmed.match(/^git@([^:]+):([^/]+)\/([^/]+?)(?:\.git)?$/);
  if (sshMatch?.[1] && sshMatch[2] && sshMatch[3]) {
    if (!looksLikeRealHostname(sshMatch[1]))
      return null;
    return {
      host: sshMatch[1],
      owner: sshMatch[2],
      name: sshMatch[3]
    };
  }
  const urlMatch = trimmed.match(/^(https?|ssh|git):\/\/(?:[^@]+@)?([^/:]+(?::\d+)?)\/([^/]+)\/([^/]+?)(?:\.git)?$/);
  if (urlMatch?.[1] && urlMatch[2] && urlMatch[3] && urlMatch[4]) {
    const protocol = urlMatch[1];
    const hostWithPort = urlMatch[2];
    const hostWithoutPort = hostWithPort.split(":")[0] ?? "";
    if (!looksLikeRealHostname(hostWithoutPort))
      return null;
    const host = protocol === "https" || protocol === "http" ? hostWithPort : hostWithoutPort;
    return {
      host,
      owner: urlMatch[3],
      name: urlMatch[4]
    };
  }
  return null;
}
function parseGitHubRepository(input) {
  const trimmed = input.trim();
  const parsed = parseGitRemote(trimmed);
  if (parsed) {
    if (parsed.host !== "github.com")
      return null;
    return `${parsed.owner}/${parsed.name}`;
  }
  if (!trimmed.includes("://") && !trimmed.includes("@") && trimmed.includes("/")) {
    const parts = trimmed.split("/");
    if (parts.length === 2 && parts[0] && parts[1]) {
      const repo = parts[1].replace(/\.git$/, "");
      return `${parts[0]}/${repo}`;
    }
  }
  logForDebugging(`Could not parse repository from: ${trimmed}`);
  return null;
}
function looksLikeRealHostname(host) {
  if (!host.includes("."))
    return false;
  const lastSegment = host.split(".").pop();
  if (!lastSegment)
    return false;
  return /^[a-zA-Z]+$/.test(lastSegment);
}
var repositoryWithHostCache;
var init_detectRepository = __esm(() => {
  init_cwd();
  init_debug();
  init_git();
  repositoryWithHostCache = new Map;
});

export { clearRepositoryCaches, detectCurrentRepository, detectCurrentRepositoryWithHost, getCachedRepository, parseGitRemote, parseGitHubRepository, init_detectRepository };
