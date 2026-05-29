// @bun
import {
  findGitRoot,
  init_git
} from "./chunk-t6jhrn34.js";
import"./chunk-95xve7f8.js";
import"./chunk-jdq8jgyg.js";
import"./chunk-qcwbd71h.js";
import"./chunk-dxvkxgnf.js";
import"./chunk-w5ahy59y.js";
import"./chunk-8tnsngw2.js";
import"./chunk-jkh5s8ct.js";
import"./chunk-kwm5bf2m.js";
import"./chunk-5z28bqne.js";
import"./chunk-qajrkk97.js";
import"./chunk-rpbc3b7k.js";
import"./chunk-fbv4apne.js";
import"./chunk-j5xzpm59.js";
import"./chunk-50dgek10.js";
import"./chunk-7wm5s02e.js";
import"./chunk-d3bk85eq.js";
import"./chunk-cw8rngb2.js";
import"./chunk-hxhwzgnn.js";
import"./chunk-qx8z601m.js";
import"./chunk-cgm6758j.js";
import"./chunk-qp2qdcda.js";

// src/cli/up.ts
init_git();
import { readFileSync } from "fs";
import { join } from "path";
import { spawnSync } from "child_process";
async function up() {
  const cwd = process.cwd();
  const gitRoot = findGitRoot(cwd);
  const searchDirs = gitRoot ? [gitRoot, cwd] : [cwd];
  let upSection = null;
  for (const dir of searchDirs) {
    const claudeMdPath = join(dir, "CLAUDE.md");
    try {
      const content = readFileSync(claudeMdPath, "utf-8");
      upSection = extractUpSection(content);
      if (upSection) {
        console.log(`Found "# claude up" in ${claudeMdPath}`);
        break;
      }
    } catch {}
  }
  if (!upSection) {
    console.log(`No "# claude up" section found in CLAUDE.md.
` + `Add a section like:

` + `  # claude up
` + "  ```bash\n" + `  npm install
` + `  npm run build
` + "  ```");
    return;
  }
  console.log(`Running:
`);
  console.log(upSection);
  console.log();
  const result = spawnSync("bash", ["-c", upSection], {
    cwd,
    stdio: "inherit"
  });
  if (result.status !== 0) {
    console.error(`
claude up failed with exit code ${result.status}`);
    process.exitCode = result.status ?? 1;
  } else {
    console.log(`
claude up completed successfully.`);
  }
}
function extractUpSection(markdown) {
  const lines = markdown.split(`
`);
  let inSection = false;
  const sectionLines = [];
  for (const line of lines) {
    if (/^#\s+claude\s+up\b/i.test(line)) {
      inSection = true;
      continue;
    }
    if (inSection && /^#\s/.test(line)) {
      break;
    }
    if (inSection) {
      sectionLines.push(line);
    }
  }
  if (sectionLines.length === 0)
    return null;
  let text = sectionLines.join(`
`).trim();
  text = text.replace(/^```\w*\n?/, "").replace(/\n?```\s*$/, "");
  return text.trim() || null;
}
export {
  up
};
