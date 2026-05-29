// @bun
import {
  execSync_DEPRECATED,
  init_execSyncWrapper
} from "./chunk-kwm5bf2m.js";
import {
  execa,
  init_execa
} from "./chunk-5z28bqne.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/which.ts
async function whichNodeAsync(command) {
  if (process.platform === "win32") {
    const result2 = await execa(`where.exe ${command}`, {
      shell: true,
      stderr: "ignore",
      reject: false
    });
    if (result2.exitCode !== 0 || !result2.stdout) {
      return null;
    }
    return result2.stdout.trim().split(/\r?\n/)[0] || null;
  }
  const result = await execa(`which ${command}`, {
    shell: true,
    stderr: "ignore",
    reject: false
  });
  if (result.exitCode !== 0 || !result.stdout) {
    return null;
  }
  return result.stdout.trim();
}
function whichNodeSync(command) {
  if (process.platform === "win32") {
    try {
      const result = execSync_DEPRECATED(`where.exe ${command}`, {
        encoding: "utf-8",
        stdio: ["ignore", "pipe", "ignore"]
      });
      const output = result.toString().trim();
      return output.split(/\r?\n/)[0] || null;
    } catch {
      return null;
    }
  }
  try {
    const result = execSync_DEPRECATED(`which ${command}`, {
      encoding: "utf-8",
      stdio: ["ignore", "pipe", "ignore"]
    });
    return result.toString().trim() || null;
  } catch {
    return null;
  }
}
var bunWhich, which, whichSync;
var init_which = __esm(() => {
  init_execa();
  init_execSyncWrapper();
  bunWhich = typeof Bun !== "undefined" && typeof Bun.which === "function" ? Bun.which : null;
  which = bunWhich ? async (command) => bunWhich(command) : whichNodeAsync;
  whichSync = bunWhich ?? whichNodeSync;
});

export { which, whichSync, init_which };
