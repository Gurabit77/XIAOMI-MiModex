// @bun
import {
  init_log,
  logError
} from "./chunk-w5ahy59y.js";
import {
  getFsImplementation,
  init_fsOperations
} from "./chunk-rpbc3b7k.js";
import {
  init_memoize,
  memoize_default
} from "./chunk-qx8z601m.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/platform.ts
import { readdir, readFile } from "fs/promises";
import { release as osRelease } from "os";
async function detectVcs(dir) {
  const detected = new Set;
  if (process.env.P4PORT) {
    detected.add("perforce");
  }
  try {
    const targetDir = dir ?? getFsImplementation().cwd();
    const entries = new Set(await readdir(targetDir));
    for (const [marker, vcs] of VCS_MARKERS) {
      if (entries.has(marker)) {
        detected.add(vcs);
      }
    }
  } catch {}
  return [...detected];
}
var SUPPORTED_PLATFORMS, getPlatform, getWslVersion, getLinuxDistroInfo, VCS_MARKERS;
var init_platform = __esm(() => {
  init_memoize();
  init_fsOperations();
  init_log();
  SUPPORTED_PLATFORMS = ["macos", "wsl"];
  getPlatform = memoize_default(() => {
    try {
      if (process.platform === "darwin") {
        return "macos";
      }
      if (process.platform === "win32") {
        return "windows";
      }
      if (process.platform === "linux") {
        try {
          const procVersion = getFsImplementation().readFileSync("/proc/version", { encoding: "utf8" });
          if (procVersion.toLowerCase().includes("microsoft") || procVersion.toLowerCase().includes("wsl")) {
            return "wsl";
          }
        } catch (error) {
          logError(error);
        }
        return "linux";
      }
      return "unknown";
    } catch (error) {
      logError(error);
      return "unknown";
    }
  });
  getWslVersion = memoize_default(() => {
    if (process.platform !== "linux") {
      return;
    }
    try {
      const procVersion = getFsImplementation().readFileSync("/proc/version", {
        encoding: "utf8"
      });
      const wslVersionMatch = procVersion.match(/WSL(\d+)/i);
      if (wslVersionMatch && wslVersionMatch[1]) {
        return wslVersionMatch[1];
      }
      if (procVersion.toLowerCase().includes("microsoft")) {
        return "1";
      }
      return;
    } catch (error) {
      logError(error);
      return;
    }
  });
  getLinuxDistroInfo = memoize_default(async () => {
    if (process.platform !== "linux") {
      return;
    }
    const result = {
      linuxKernel: osRelease()
    };
    try {
      const content = await readFile("/etc/os-release", "utf8");
      for (const line of content.split(`
`)) {
        const match = line.match(/^(ID|VERSION_ID)=(.*)$/);
        if (match && match[1] && match[2]) {
          const value = match[2].replace(/^"|"$/g, "");
          if (match[1] === "ID") {
            result.linuxDistroId = value;
          } else {
            result.linuxDistroVersion = value;
          }
        }
      }
    } catch {}
    return result;
  });
  VCS_MARKERS = [
    [".git", "git"],
    [".hg", "mercurial"],
    [".svn", "svn"],
    [".p4config", "perforce"],
    ["$tf", "tfs"],
    [".tfvc", "tfs"],
    [".jj", "jujutsu"],
    [".sl", "sapling"]
  ];
});

export { SUPPORTED_PLATFORMS, getPlatform, getWslVersion, getLinuxDistroInfo, detectVcs, init_platform };
