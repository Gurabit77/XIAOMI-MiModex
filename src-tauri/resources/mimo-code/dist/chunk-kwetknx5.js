// @bun
import {
  formatNumber,
  formatRelativeTimeAgo,
  init_format
} from "./chunk-x5hyyhqf.js";
import {
  getCommonDir,
  getGitDir,
  init_git,
  init_gitFilesystem
} from "./chunk-t6jhrn34.js";

// src/utils/deepLink/banner.ts
init_format();
init_gitFilesystem();
init_git();
import { stat } from "fs/promises";
import { homedir } from "os";
import { join, sep } from "path";
var STALE_FETCH_WARN_MS = 7 * 24 * 60 * 60 * 1000;
var LONG_PREFILL_THRESHOLD = 1000;
function buildDeepLinkBanner(info) {
  const lines = [
    `This session was opened by an external deep link in ${tildify(info.cwd)}`
  ];
  if (info.repo) {
    const age = info.lastFetch ? formatRelativeTimeAgo(info.lastFetch) : "never";
    const stale = !info.lastFetch || Date.now() - info.lastFetch.getTime() > STALE_FETCH_WARN_MS;
    lines.push(`Resolved ${info.repo} from local clones \xB7 last fetched ${age}${stale ? " \u2014 CLAUDE.md may be stale" : ""}`);
  }
  if (info.prefillLength) {
    lines.push(info.prefillLength > LONG_PREFILL_THRESHOLD ? `The prompt below (${formatNumber(info.prefillLength)} chars) was supplied by the link \u2014 scroll to review the entire prompt before pressing Enter.` : "The prompt below was supplied by the link \u2014 review carefully before pressing Enter.");
  }
  return lines.join(`
`);
}
async function readLastFetchTime(cwd) {
  const gitDir = await getGitDir(cwd);
  if (!gitDir)
    return;
  const commonDir = await getCommonDir(gitDir);
  const [local, common] = await Promise.all([
    mtimeOrUndefined(join(gitDir, "FETCH_HEAD")),
    commonDir ? mtimeOrUndefined(join(commonDir, "FETCH_HEAD")) : Promise.resolve(undefined)
  ]);
  if (local && common)
    return local > common ? local : common;
  return local ?? common;
}
async function mtimeOrUndefined(p) {
  try {
    const { mtime } = await stat(p);
    return mtime;
  } catch {
    return;
  }
}
function tildify(p) {
  const home = homedir();
  if (p === home)
    return "~";
  if (p.startsWith(home + sep))
    return "~" + p.slice(home.length);
  return p;
}

export { buildDeepLinkBanner, readLastFetchTime };
