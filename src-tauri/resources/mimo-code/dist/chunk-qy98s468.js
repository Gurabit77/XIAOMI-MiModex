// @bun
import {
  gracefulShutdown,
  init_gracefulShutdown
} from "./chunk-ktw919wt.js";
import"./chunk-qwtafr2b.js";
import"./chunk-jz6xf3ty.js";
import"./chunk-et824jj8.js";
import"./chunk-var1et7e.js";
import"./chunk-v81kv9zm.js";
import"./chunk-chmfqs2y.js";
import"./chunk-1gfk9pd3.js";
import"./chunk-2gzv8nrw.js";
import"./chunk-ehtwnxpg.js";
import"./chunk-1th1nz5d.js";
import"./chunk-x6pa9me9.js";
import"./chunk-wbtp4zy8.js";
import"./chunk-ypmcesxe.js";
import"./chunk-ybaawhyf.js";
import"./chunk-bhdt6k7w.js";
import"./chunk-cgfdkzhb.js";
import"./chunk-0rstde44.js";
import"./chunk-2cvt1abr.js";
import"./chunk-5ptgeqdf.js";
import"./chunk-1jvg23ym.js";
import"./chunk-akkx6jmm.js";
import"./chunk-7fht54sw.js";
import"./chunk-pfhyp451.js";
import"./chunk-25ctr1k2.js";
import"./chunk-azxwk3qa.js";
import"./chunk-2e52n52z.js";
import"./chunk-dsnwry8r.js";
import"./chunk-ps49ymvj.js";
import"./chunk-t4kcvmes.js";
import"./chunk-tas8sqfx.js";
import"./chunk-kqqj7b7y.js";
import"./chunk-edqtm6y0.js";
import"./chunk-jakzh3ae.js";
import"./chunk-wf3yck87.js";
import"./chunk-1r0yky0f.js";
import"./chunk-jtnkamme.js";
import"./chunk-92f9twfz.js";
import"./chunk-6dj3cf9s.js";
import"./chunk-dn7vyq4j.js";
import"./chunk-4jm600zv.js";
import"./chunk-vs4r0kd5.js";
import"./chunk-g57ncwpz.js";
import"./chunk-9pp18zcp.js";
import"./chunk-h1xx834r.js";
import"./chunk-p8zggt02.js";
import"./chunk-6rj8k2tr.js";
import"./chunk-x69b8r8v.js";
import"./chunk-gx4kmdam.js";
import"./chunk-b53tzh92.js";
import"./chunk-gd6w3h9n.js";
import"./chunk-1ghcng4e.js";
import"./chunk-pz9t24tq.js";
import"./chunk-4efha55s.js";
import"./chunk-t7f7dp4k.js";
import"./chunk-zwarn9h7.js";
import"./chunk-b127reh2.js";
import"./chunk-et54q618.js";
import"./chunk-pe9b769s.js";
import"./chunk-64c1avct.js";
import"./chunk-8g5pe1gr.js";
import"./chunk-0rbpfkda.js";
import"./chunk-gnw2dwca.js";
import"./chunk-wbmn1xar.js";
import"./chunk-3c25bcsw.js";
import"./chunk-nw7v8w65.js";
import"./chunk-xhesahm0.js";
import"./chunk-rh5a2rg9.js";
import"./chunk-4cp6193g.js";
import"./chunk-8g747a8x.js";
import"./chunk-d7886r6a.js";
import"./chunk-adnxyg7j.js";
import"./chunk-djs11qd6.js";
import"./chunk-nrv96v1h.js";
import"./chunk-gdqk4ssq.js";
import"./chunk-bwawjerw.js";
import"./chunk-p2816w9z.js";
import"./chunk-v9smspw2.js";
import"./chunk-v1kzp02e.js";
import"./chunk-x5hyyhqf.js";
import"./chunk-crmjpsqe.js";
import {
  init_source,
  source_default
} from "./chunk-er1s76c9.js";
import"./chunk-b5wxetbv.js";
import"./chunk-f2mhrmww.js";
import"./chunk-0vkfrmqm.js";
import"./chunk-0xjaqda8.js";
import"./chunk-c84gr0s2.js";
import"./chunk-t6jhrn34.js";
import"./chunk-95xve7f8.js";
import"./chunk-jdq8jgyg.js";
import {
  execFileNoThrowWithCwd,
  init_execFileNoThrow
} from "./chunk-qcwbd71h.js";
import"./chunk-dxvkxgnf.js";
import"./chunk-w5ahy59y.js";
import"./chunk-8tnsngw2.js";
import"./chunk-jkh5s8ct.js";
import"./chunk-kwm5bf2m.js";
import"./chunk-5z28bqne.js";
import"./chunk-qajrkk97.js";
import {
  init_debug,
  logForDebugging
} from "./chunk-rpbc3b7k.js";
import {
  init_process,
  writeToStdout
} from "./chunk-fbv4apne.js";
import"./chunk-j5xzpm59.js";
import"./chunk-50dgek10.js";
import"./chunk-7wm5s02e.js";
import"./chunk-d3bk85eq.js";
import"./chunk-cw8rngb2.js";
import"./chunk-hxhwzgnn.js";
import"./chunk-qx8z601m.js";
import"./chunk-cgm6758j.js";
import"./chunk-3v4d4h0t.js";
import"./chunk-8pn8tvgg.js";
import"./chunk-netzwgv1.js";
import"./chunk-qp2qdcda.js";

// src/cli/updateCCB.ts
init_source();
init_debug();
init_execFileNoThrow();
init_gracefulShutdown();
init_process();
import { execSync } from "child_process";
import { existsSync, readFileSync } from "fs";
import { homedir } from "os";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
var PACKAGE_NAME = "mimo-code";
function getCurrentVersion() {
  try {
    const __dirname2 = dirname(fileURLToPath(import.meta.url));
    const pkgPath = join(__dirname2, "..", "..", "package.json");
    if (existsSync(pkgPath)) {
      const pkg = JSON.parse(readFileSync(pkgPath, "utf-8"));
      if (pkg.version)
        return pkg.version;
    }
  } catch {}
  return "1.0.0";
}
function isCommandAvailable(cmd) {
  try {
    execSync(`which ${cmd} 2>/dev/null`, { stdio: "pipe" });
    return true;
  } catch {
    return false;
  }
}
function isBunInstallation() {
  const execPath = process.execPath;
  if (execPath.includes("bun")) {
    return true;
  }
  const bunGlobalDir = join(homedir(), ".bun", "install", "global");
  if (existsSync(join(bunGlobalDir, "node_modules", PACKAGE_NAME))) {
    return true;
  }
  return false;
}
async function getLatestVersion() {
  const result = await execFileNoThrowWithCwd("npm", ["view", `${PACKAGE_NAME}@latest`, "version", "--prefer-online"], { abortSignal: AbortSignal.timeout(1e4), cwd: homedir() });
  if (result.code !== 0) {
    logForDebugging(`npm view failed: ${result.stderr}`);
    return null;
  }
  return result.stdout.trim();
}
function gte(a, b) {
  const parseVer = (v) => v.replace(/^\D/, "").split(".").map(Number);
  const pa = parseVer(a);
  const pb = parseVer(b);
  for (let i = 0;i < 3; i++) {
    if ((pa[i] ?? 0) > (pb[i] ?? 0))
      return true;
    if ((pa[i] ?? 0) < (pb[i] ?? 0))
      return false;
  }
  return true;
}
async function updateCCB() {
  const currentVersion = getCurrentVersion();
  writeToStdout(`Current version: ${currentVersion}
`);
  const hasBun = isCommandAvailable("bun");
  const useBun = isBunInstallation();
  const pkgManager = useBun && hasBun ? "bun" : "npm";
  writeToStdout(`Package manager: ${pkgManager}
`);
  writeToStdout(`Checking for updates...
`);
  const latestVersion = await getLatestVersion();
  if (!latestVersion) {
    process.stderr.write(source_default.red("Failed to check for updates") + `
`);
    process.stderr.write(`Unable to fetch latest version from npm registry.
`);
    await gracefulShutdown(1);
    return;
  }
  if (latestVersion === currentVersion || gte(currentVersion, latestVersion)) {
    writeToStdout(source_default.green(`ccb is up to date (${currentVersion})`) + `
`);
    await gracefulShutdown(0);
    return;
  }
  writeToStdout(`New version available: ${latestVersion} (current: ${currentVersion})
`);
  writeToStdout(`Installing update via ${pkgManager}...
`);
  try {
    if (pkgManager === "bun") {
      execSync(`bun update -g ${PACKAGE_NAME}`, {
        stdio: "inherit",
        cwd: homedir(),
        timeout: 120000
      });
    } else {
      execSync(`npm install -g ${PACKAGE_NAME}@latest`, {
        stdio: "inherit",
        cwd: homedir(),
        timeout: 120000
      });
    }
    writeToStdout(source_default.green(`Successfully updated from ${currentVersion} to ${latestVersion}`) + `
`);
  } catch (error) {
    process.stderr.write(source_default.red("Update failed") + `
`);
    process.stderr.write(`${error}
`);
    process.stderr.write(`
`);
    process.stderr.write(`Try manually updating with:
`);
    if (pkgManager === "bun") {
      process.stderr.write(source_default.bold(`  bun update -g ${PACKAGE_NAME}`) + `
`);
    } else {
      process.stderr.write(source_default.bold(`  npm install -g ${PACKAGE_NAME}@latest`) + `
`);
    }
    await gracefulShutdown(1);
  }
  await gracefulShutdown(0);
}
export {
  updateCCB
};
