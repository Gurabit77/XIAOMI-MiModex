// @bun
import {
  getProjectDir,
  getTranscriptPath,
  getTranscriptPathForSession,
  init_sessionStorage,
  isTranscriptMessage,
  saveCustomTitle,
  searchSessionsByCustomTitle
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
import {
  escapeRegExp,
  init_stringUtils
} from "./chunk-1ghcng4e.js";
import {
  init_json,
  parseJSONL
} from "./chunk-pz9t24tq.js";
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
import {
  init_analytics,
  logEvent
} from "./chunk-f2mhrmww.js";
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
import {
  init_slowOperations,
  jsonStringify
} from "./chunk-rpbc3b7k.js";
import"./chunk-fbv4apne.js";
import {
  getOriginalCwd,
  getSessionId,
  init_state
} from "./chunk-j5xzpm59.js";
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
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/commands/branch/branch.ts
import { randomUUID } from "crypto";
import { mkdir, readFile, writeFile } from "fs/promises";
function deriveFirstPrompt(firstUserMessage) {
  const content = firstUserMessage?.message?.content;
  if (!content)
    return "Branched conversation";
  const raw = typeof content === "string" ? content : content.find((block) => block.type === "text")?.text;
  if (!raw)
    return "Branched conversation";
  return raw.replace(/\s+/g, " ").trim().slice(0, 100) || "Branched conversation";
}
async function createFork(customTitle) {
  const forkSessionId = randomUUID();
  const originalSessionId = getSessionId();
  const projectDir = getProjectDir(getOriginalCwd());
  const forkSessionPath = getTranscriptPathForSession(forkSessionId);
  const currentTranscriptPath = getTranscriptPath();
  await mkdir(projectDir, { recursive: true, mode: 448 });
  let transcriptContent;
  try {
    transcriptContent = await readFile(currentTranscriptPath);
  } catch {
    throw new Error("No conversation to branch");
  }
  if (transcriptContent.length === 0) {
    throw new Error("No conversation to branch");
  }
  const entries = parseJSONL(transcriptContent);
  const mainConversationEntries = entries.filter((entry) => isTranscriptMessage(entry) && !entry.isSidechain);
  const contentReplacementRecords = entries.filter((entry) => entry.type === "content-replacement" && entry.sessionId === originalSessionId).flatMap((entry) => entry.replacements);
  if (mainConversationEntries.length === 0) {
    throw new Error("No messages to branch");
  }
  let parentUuid = null;
  const lines = [];
  const serializedMessages = [];
  for (const entry of mainConversationEntries) {
    const forkedEntry = {
      ...entry,
      sessionId: forkSessionId,
      parentUuid,
      isSidechain: false,
      forkedFrom: {
        sessionId: originalSessionId,
        messageUuid: entry.uuid
      }
    };
    const serialized = {
      ...entry,
      sessionId: forkSessionId
    };
    serializedMessages.push(serialized);
    lines.push(jsonStringify(forkedEntry));
    if (entry.type !== "progress") {
      parentUuid = entry.uuid;
    }
  }
  if (contentReplacementRecords.length > 0) {
    const forkedReplacementEntry = {
      type: "content-replacement",
      sessionId: forkSessionId,
      replacements: contentReplacementRecords
    };
    lines.push(jsonStringify(forkedReplacementEntry));
  }
  await writeFile(forkSessionPath, lines.join(`
`) + `
`, {
    encoding: "utf8",
    mode: 384
  });
  return {
    sessionId: forkSessionId,
    title: customTitle,
    forkPath: forkSessionPath,
    serializedMessages,
    contentReplacementRecords
  };
}
async function getUniqueForkName(baseName) {
  const candidateName = `${baseName} (Branch)`;
  const existingWithExactName = await searchSessionsByCustomTitle(candidateName, { exact: true });
  if (existingWithExactName.length === 0) {
    return candidateName;
  }
  const existingForks = await searchSessionsByCustomTitle(`${baseName} (Branch`);
  const usedNumbers = new Set([1]);
  const forkNumberPattern = new RegExp(`^${escapeRegExp(baseName)} \\(Branch(?: (\\d+))?\\)$`);
  for (const session of existingForks) {
    const match = session.customTitle?.match(forkNumberPattern);
    if (match) {
      if (match[1]) {
        usedNumbers.add(parseInt(match[1], 10));
      } else {
        usedNumbers.add(1);
      }
    }
  }
  let nextNumber = 2;
  while (usedNumbers.has(nextNumber)) {
    nextNumber++;
  }
  return `${baseName} (Branch ${nextNumber})`;
}
async function call(onDone, context, args) {
  const customTitle = args?.trim() || undefined;
  const originalSessionId = getSessionId();
  try {
    const {
      sessionId,
      title,
      forkPath,
      serializedMessages,
      contentReplacementRecords
    } = await createFork(customTitle);
    const now = new Date;
    const firstPrompt = deriveFirstPrompt(serializedMessages.find((m) => m.type === "user"));
    const baseName = title ?? firstPrompt;
    const effectiveTitle = await getUniqueForkName(baseName);
    await saveCustomTitle(sessionId, effectiveTitle, forkPath);
    logEvent("tengu_conversation_forked", {
      message_count: serializedMessages.length,
      has_custom_title: !!title
    });
    const forkLog = {
      date: now.toISOString().split("T")[0],
      messages: serializedMessages,
      fullPath: forkPath,
      value: now.getTime(),
      created: now,
      modified: now,
      firstPrompt,
      messageCount: serializedMessages.length,
      isSidechain: false,
      sessionId,
      customTitle: effectiveTitle,
      contentReplacements: contentReplacementRecords
    };
    const titleInfo = title ? ` "${title}"` : "";
    const resumeHint = `
To resume the original: claude -r ${originalSessionId}`;
    const successMessage = `Branched conversation${titleInfo}. You are now in the branch.${resumeHint}`;
    if (context.resume) {
      await context.resume(sessionId, forkLog, "fork");
      onDone(successMessage, { display: "system" });
    } else {
      onDone(`Branched conversation${titleInfo}. Resume with: /resume ${sessionId}`);
    }
    return null;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error occurred";
    onDone(`Failed to branch conversation: ${message}`);
    return null;
  }
}
var init_branch = __esm(() => {
  init_state();
  init_analytics();
  init_json();
  init_sessionStorage();
  init_slowOperations();
  init_stringUtils();
});
init_branch();

export {
  deriveFirstPrompt,
  call
};
