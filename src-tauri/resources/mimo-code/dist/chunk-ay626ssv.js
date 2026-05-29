// @bun
import {
  extractDescriptionFromMarkdown,
  getProjectDirsUpToHome,
  init_frontmatterParser,
  init_markdownConfigLoader,
  parseFrontmatter
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
import"./chunk-er1s76c9.js";
import"./chunk-b5wxetbv.js";
import"./chunk-f2mhrmww.js";
import"./chunk-0vkfrmqm.js";
import"./chunk-0xjaqda8.js";
import"./chunk-c84gr0s2.js";
import"./chunk-t6jhrn34.js";
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
import {
  getClaudeConfigHomeDir,
  init_envUtils
} from "./chunk-hxhwzgnn.js";
import"./chunk-qx8z601m.js";
import"./chunk-cgm6758j.js";
import"./chunk-3v4d4h0t.js";
import"./chunk-8pn8tvgg.js";
import"./chunk-netzwgv1.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/jobs/templates.ts
import { readdirSync, readFileSync } from "fs";
import { join, basename } from "path";
function getTemplatesDirs() {
  const projectDirs = getProjectDirsUpToHome("templates", process.cwd());
  const userDir = join(getClaudeConfigHomeDir(), "templates");
  try {
    readdirSync(userDir);
    return [...projectDirs, userDir];
  } catch {
    return projectDirs;
  }
}
function listTemplates() {
  const templates = [];
  const seenNames = new Set;
  for (const dir of getTemplatesDirs()) {
    let files;
    try {
      files = readdirSync(dir);
    } catch {
      continue;
    }
    for (const file of files) {
      if (!file.endsWith(".md"))
        continue;
      const name = basename(file, ".md");
      if (seenNames.has(name))
        continue;
      seenNames.add(name);
      const filePath = join(dir, file);
      try {
        const raw = readFileSync(filePath, "utf-8");
        const { frontmatter, content } = parseFrontmatter(raw, filePath);
        const description = (typeof frontmatter.description === "string" ? frontmatter.description : "") || extractDescriptionFromMarkdown(content, "No description");
        templates.push({ name, description, filePath, frontmatter, content });
      } catch {}
    }
  }
  return templates;
}
function loadTemplate(name) {
  const all = listTemplates();
  return all.find((t) => t.name === name) ?? null;
}
var init_templates = __esm(() => {
  init_frontmatterParser();
  init_envUtils();
  init_markdownConfigLoader();
});

// src/jobs/state.ts
import { appendFileSync, mkdirSync, readFileSync as readFileSync2, writeFileSync } from "fs";
import { join as join2 } from "path";
function getJobsDir() {
  return join2(getClaudeConfigHomeDir(), "jobs");
}
function getJobDir(jobId) {
  return join2(getJobsDir(), jobId);
}
function createJob(jobId, templateName, templateContent, inputText, args) {
  const dir = getJobDir(jobId);
  mkdirSync(dir, { recursive: true });
  const now = new Date().toISOString();
  const state = {
    jobId,
    templateName,
    createdAt: now,
    updatedAt: now,
    status: "created",
    args
  };
  writeFileSync(join2(dir, "state.json"), JSON.stringify(state, null, 2), "utf-8");
  writeFileSync(join2(dir, "template.md"), templateContent, "utf-8");
  writeFileSync(join2(dir, "input.txt"), inputText, "utf-8");
  return dir;
}
function readJobState(jobId) {
  try {
    const raw = readFileSync2(join2(getJobDir(jobId), "state.json"), "utf-8");
    const parsed = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null)
      return null;
    const obj = parsed;
    if (typeof obj.jobId !== "string" || typeof obj.status !== "string") {
      return null;
    }
    return obj;
  } catch {
    return null;
  }
}
function appendJobReply(jobId, text) {
  const dir = getJobDir(jobId);
  const state = readJobState(jobId);
  if (!state)
    return false;
  const repliesPath = join2(dir, "replies.jsonl");
  const entry = JSON.stringify({
    text,
    timestamp: new Date().toISOString()
  });
  try {
    appendFileSync(repliesPath, entry + `
`, "utf-8");
  } catch {
    writeFileSync(repliesPath, entry + `
`, "utf-8");
  }
  const updated = { ...state, updatedAt: new Date().toISOString() };
  writeFileSync(join2(dir, "state.json"), JSON.stringify(updated, null, 2), "utf-8");
  return true;
}
var init_state = __esm(() => {
  init_envUtils();
});

// src/cli/handlers/templateJobs.ts
import { randomUUID } from "crypto";
async function templatesMain(args) {
  const subcommand = args[0];
  switch (subcommand) {
    case "list":
      handleList();
      break;
    case "new":
      handleNew(args.slice(1));
      break;
    case "reply":
      handleReply(args.slice(1));
      break;
    case "status":
      handleStatus(args.slice(1));
      break;
    default:
      console.error(`Unknown template command: ${subcommand}`);
      printUsage();
      process.exitCode = 1;
  }
}
function printUsage() {
  console.log(`
Template Job Commands:

  claude job list                    List available templates
  claude job new <template> [args]   Create a new job from a template
  claude job reply <job-id> <text>   Reply to an existing job
  claude job status <job-id>         Show job status
`);
}
function handleStatus(args) {
  const jobId = args[0];
  if (!jobId) {
    console.error("Usage: claude job status <job-id>");
    process.exitCode = 1;
    return;
  }
  const state = readJobState(jobId);
  if (!state) {
    console.error(`Job not found: ${jobId}`);
    process.exitCode = 1;
    return;
  }
  console.log(`Job: ${state.jobId}`);
  console.log(`  Template: ${state.templateName}`);
  console.log(`  Status: ${state.status}`);
  console.log(`  Created: ${state.createdAt}`);
  console.log(`  Updated: ${state.updatedAt}`);
  console.log(`  Args: ${state.args.join(" ") || "(none)"}`);
}
function handleList() {
  const templates = listTemplates();
  if (templates.length === 0) {
    console.log("No templates found.");
    console.log("Place .md files in .claude/templates/ or ~/.claude/templates/");
    return;
  }
  console.log(`${templates.length} template${templates.length > 1 ? "s" : ""} found:
`);
  for (const t of templates) {
    console.log(`  ${t.name}`);
    console.log(`    ${t.description}`);
    console.log(`    Path: ${t.filePath}`);
    console.log();
  }
}
function handleNew(args) {
  const templateName = args[0];
  if (!templateName) {
    console.error("Usage: claude job new <template> [args...]");
    process.exitCode = 1;
    return;
  }
  const template = loadTemplate(templateName);
  if (!template) {
    console.error(`Template not found: ${templateName}`);
    console.log(`
Available templates:`);
    for (const t of listTemplates()) {
      console.log(`  ${t.name}`);
    }
    process.exitCode = 1;
    return;
  }
  const jobId = randomUUID().slice(0, 8);
  const inputText = args.slice(1).join(" ");
  const rawContent = `---
${Object.entries(template.frontmatter).map(([k, v]) => `${k}: ${v}`).join(`
`)}
---
${template.content}`;
  const dir = createJob(jobId, templateName, rawContent, inputText, args.slice(1));
  console.log(`Job created: ${jobId}`);
  console.log(`  Template: ${templateName}`);
  console.log(`  Directory: ${dir}`);
  if (inputText) {
    console.log(`  Input: ${inputText}`);
  }
}
function handleReply(args) {
  const jobId = args[0];
  const text = args.slice(1).join(" ");
  if (!jobId || !text) {
    console.error("Usage: claude job reply <job-id> <text>");
    process.exitCode = 1;
    return;
  }
  const state = readJobState(jobId);
  if (!state) {
    console.error(`Job not found: ${jobId}`);
    process.exitCode = 1;
    return;
  }
  const ok = appendJobReply(jobId, text);
  if (ok) {
    console.log(`Reply added to job ${jobId}`);
    console.log(`  Directory: ${getJobDir(jobId)}`);
  } else {
    console.error(`Failed to append reply to job ${jobId}`);
    process.exitCode = 1;
  }
}
var init_templateJobs = __esm(() => {
  init_templates();
  init_state();
});
init_templateJobs();

export {
  templatesMain
};
