// @bun
import {
  init_skillLearning
} from "./chunk-v9xmnjrx.js";
import {
  promoteGapToDraft,
  readSkillGaps
} from "./chunk-zbyy00v6.js";
import {
  exportInstincts,
  findPromotionCandidates,
  generateSkillCandidates,
  loadInstincts,
  prunePendingInstincts,
  saveInstinct,
  upsertInstinct
} from "./chunk-mgqc9f1f.js";
import {
  applySkillLifecycleDecision,
  compareExistingSkills,
  decideSkillLifecycle
} from "./chunk-z9cst14s.js";
import {
  listKnownProjects,
  resolveProjectContext
} from "./chunk-2qg5ewk3.js";
import {
  analyzeObservations
} from "./chunk-akbctk23.js";
import"./chunk-d72n340z.js";
import"./chunk-7hrqzxcc.js";
import {
  ingestTranscript,
  readObservations
} from "./chunk-cvqwypap.js";
import"./chunk-ktw919wt.js";
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
  __esm,
  __require
} from "./chunk-qp2qdcda.js";

// src/commands/skill-learning/skill-learning.ts
import { join } from "path";
function parseFlagString(parts, flag) {
  const eqForm = parts.find((p) => p.startsWith(`${flag}=`));
  if (eqForm)
    return eqForm.slice(flag.length + 1) || undefined;
  const idx = parts.indexOf(flag);
  if (idx >= 0 && parts[idx + 1] && !parts[idx + 1].startsWith("--")) {
    return parts[idx + 1];
  }
  return;
}
function parseFlagNumber(parts, flag, fallback) {
  const raw = parseFlagString(parts, flag);
  if (raw === undefined)
    return fallback;
  const value = Number(raw);
  return Number.isFinite(value) ? value : fallback;
}
var call = async (args) => {
  const parts = args.trim().split(/\s+/).filter(Boolean);
  const sub = parts[0] ?? "status";
  const project = resolveProjectContext(process.cwd());
  const rootDir = process.env.CLAUDE_SKILL_LEARNING_HOME;
  const options = { project, rootDir };
  switch (sub) {
    case "status": {
      const [observations, instincts] = await Promise.all([
        readObservations(options),
        loadInstincts(options)
      ]);
      return {
        type: "text",
        value: [
          `Skill Learning status for ${project.projectName} (${project.projectId})`,
          `Observations: ${observations.length}`,
          `Instincts: ${instincts.length}`
        ].join(`
`)
      };
    }
    case "ingest": {
      const transcript = parts[1];
      if (!transcript) {
        return {
          type: "text",
          value: "Usage: /skill-learning ingest <transcript.jsonl> [--min-session-length=<n>]"
        };
      }
      const minSessionLength = parseFlagNumber(parts, "--min-session-length", 10);
      const observations = await ingestTranscript(transcript, options);
      if (observations.length < minSessionLength) {
        return {
          type: "text",
          value: `Session too short for learning (${observations.length} < min=${minSessionLength}). Skipping instinct extraction.`
        };
      }
      const instincts = analyzeObservations(observations);
      const saved = [];
      for (const instinct of instincts) {
        saved.push(await upsertInstinct(instinct, options));
      }
      return {
        type: "text",
        value: `Ingested ${observations.length} observations and saved ${saved.length} instincts.`
      };
    }
    case "evolve": {
      const generate = parts.includes("--generate");
      const instincts = await loadInstincts(options);
      const drafts = generateSkillCandidates(instincts, { cwd: process.cwd() });
      const written = [];
      if (generate) {
        for (const draft of drafts) {
          const roots = [
            join(process.cwd(), ".claude", "skills"),
            join(getClaudeConfigHomeDir(), "skills")
          ];
          const existing = await compareExistingSkills(draft, roots);
          const decision = decideSkillLifecycle(draft, existing);
          const result = await applySkillLifecycleDecision(decision);
          written.push(`${decision.type}: ${result.activePath ?? result.archivedPath ?? result.deletedPath ?? "no active write"}`);
        }
      }
      return {
        type: "text",
        value: generate ? `Generated ${written.length} learned skill(s):
${written.join(`
`)}` : `Found ${drafts.length} skill candidate(s). Use --generate to write them.`
      };
    }
    case "export": {
      const output = parts[1] ?? "skill-learning-instincts.json";
      const scope = parseFlagString(parts, "--scope");
      const minConf = parseFlagNumber(parts, "--min-conf", undefined);
      const domain = parseFlagString(parts, "--domain");
      const filter = (instincts) => instincts.filter((i) => {
        if (scope && i.scope !== scope)
          return false;
        if (minConf !== undefined && i.confidence < minConf)
          return false;
        if (domain && i.domain !== domain)
          return false;
        return true;
      });
      const all = await loadInstincts(options);
      const filtered = filter(all);
      if (filtered.length !== all.length) {
        await exportInstincts(output, options);
        const { writeFile } = await import("fs/promises");
        await writeFile(output, `${JSON.stringify(filtered, null, 2)}
`);
      } else {
        await exportInstincts(output, options);
      }
      const parts2 = [
        `Exported ${filtered.length} instincts to ${output}`
      ];
      if (scope || minConf !== undefined || domain) {
        const filters = [];
        if (scope)
          filters.push(`scope=${scope}`);
        if (minConf !== undefined)
          filters.push(`min-conf=${minConf}`);
        if (domain)
          filters.push(`domain=${domain}`);
        parts2.push(`(filters: ${filters.join(", ")})`);
      }
      return { type: "text", value: parts2.join(" ") };
    }
    case "import": {
      const input = parts[1];
      if (!input) {
        return {
          type: "text",
          value: "Usage: /skill-learning import <instincts.json> [--scope=<scope>] [--min-conf=<n>] [--domain=<d>] [--dry-run]"
        };
      }
      const scope = parseFlagString(parts, "--scope");
      const minConf = parseFlagNumber(parts, "--min-conf", undefined);
      const domain = parseFlagString(parts, "--domain");
      const dryRun = parts.includes("--dry-run");
      const { readFile: readFileFs } = await import("fs/promises");
      const parsed = JSON.parse(await readFileFs(input, "utf8"));
      const filtered = parsed.filter((i) => {
        if (scope && i.scope !== scope)
          return false;
        if (minConf !== undefined && i.confidence < minConf)
          return false;
        if (domain && i.domain !== domain)
          return false;
        return true;
      });
      if (dryRun) {
        return {
          type: "text",
          value: `Dry run: would import ${filtered.length}/${parsed.length} instincts.`
        };
      }
      for (const instinct of filtered) {
        await upsertInstinct(instinct, options);
      }
      return {
        type: "text",
        value: `Imported ${filtered.length}/${parsed.length} instincts.`
      };
    }
    case "prune": {
      const maxAgeIndex = parts.indexOf("--max-age");
      const maxAge = maxAgeIndex >= 0 && parts[maxAgeIndex + 1] ? Number(parts[maxAgeIndex + 1]) : 30;
      const pruned = await prunePendingInstincts(maxAge, options);
      return {
        type: "text",
        value: `Pruned ${pruned.length} pending instincts.`
      };
    }
    case "promote": {
      const target = parts[1];
      if (!target) {
        const gaps = await readSkillGaps(project, rootDir);
        const instincts = await loadInstincts(options);
        const candidates = findPromotionCandidates(instincts);
        const lines = [
          `Promotion candidates for ${project.projectName} (${project.projectId}):`,
          `Pending gaps: ${gaps.filter((g) => g.status === "pending").length}`,
          `Global-eligible instincts (>=2 projects, avg confidence >=0.8): ${candidates.length}`,
          "",
          "Usage:",
          "  /skill-learning promote gap <gap-key>           # pending gap -> draft",
          "  /skill-learning promote instinct <instinct-id>  # project instinct -> global"
        ];
        return { type: "text", value: lines.join(`
`) };
      }
      if (target === "gap") {
        const gapKey = parts[2];
        if (!gapKey) {
          return {
            type: "text",
            value: "Usage: /skill-learning promote gap <gap-key>"
          };
        }
        const updated = await promoteGapToDraft(gapKey, project, rootDir);
        if (!updated) {
          return { type: "text", value: `No gap found for key "${gapKey}".` };
        }
        return {
          type: "text",
          value: `Promoted gap ${gapKey} to status=${updated.status} (draft=${updated.draft?.skillPath ?? "none"}).`
        };
      }
      if (target === "instinct") {
        const instinctId = parts[2];
        if (!instinctId) {
          return {
            type: "text",
            value: "Usage: /skill-learning promote instinct <instinct-id>"
          };
        }
        const projectInstincts = await loadInstincts(options);
        const match = projectInstincts.find((i) => i.id === instinctId);
        if (!match) {
          return {
            type: "text",
            value: `No project-scoped instinct found for id "${instinctId}".`
          };
        }
        if (match.scope === "global") {
          return {
            type: "text",
            value: `Instinct ${instinctId} is already global.`
          };
        }
        const globalCopy = { ...match, scope: "global" };
        await saveInstinct(globalCopy, { scope: "global", rootDir });
        return {
          type: "text",
          value: `Promoted instinct ${instinctId} to global scope.`
        };
      }
      return {
        type: "text",
        value: "Usage: /skill-learning promote [gap <gap-key>|instinct <instinct-id>]"
      };
    }
    case "projects": {
      const projects = listKnownProjects();
      if (projects.length === 0) {
        return { type: "text", value: "No known project scopes yet." };
      }
      const lines = ["Known project scopes:"];
      for (const record of projects) {
        const projectOptions = { project: record, rootDir };
        const [instincts, observations] = await Promise.all([
          loadInstincts(projectOptions),
          readObservations(projectOptions)
        ]);
        lines.push(`- ${record.projectName} (${record.projectId}) \u2014 instincts: ${instincts.length}, observations: ${observations.length}, lastSeen: ${record.lastSeenAt}`);
      }
      return { type: "text", value: lines.join(`
`) };
    }
    default:
      return {
        type: "text",
        value: "Usage: /skill-learning [status|ingest|evolve|export|import|prune|promote|projects]"
      };
  }
};
var init_skill_learning = __esm(() => {
  init_envUtils();
  init_skillLearning();
});
init_skill_learning();

export {
  call
};
