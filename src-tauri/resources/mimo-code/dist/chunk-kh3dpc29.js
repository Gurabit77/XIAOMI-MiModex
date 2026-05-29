// @bun
import {
  diffLines,
  extractTextContent,
  getProjectsDir,
  getSessionFilesWithMtime,
  getSessionIdFromLog,
  init_claude,
  init_libesm,
  init_messages1 as init_messages,
  init_sessionStorage,
  init_systemPromptType,
  loadAllLogsFromSessionFile,
  queryWithModel
} from "./chunk-ktw919wt.js";
import"./chunk-qwtafr2b.js";
import"./chunk-jz6xf3ty.js";
import"./chunk-et824jj8.js";
import"./chunk-var1et7e.js";
import"./chunk-v81kv9zm.js";
import {
  asSystemPrompt
} from "./chunk-chmfqs2y.js";
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
import {
  escapeXmlAttr,
  init_xml
} from "./chunk-0rstde44.js";
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
  AGENT_TOOL_NAME,
  LEGACY_AGENT_TOOL_NAME,
  countCharInString,
  getDefaultOpusModel,
  init_constants1 as init_constants,
  init_model,
  init_stringUtils
} from "./chunk-1ghcng4e.js";
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
import {
  execFileNoThrow,
  init_execFileNoThrow
} from "./chunk-qcwbd71h.js";
import"./chunk-dxvkxgnf.js";
import {
  init_log,
  logError
} from "./chunk-w5ahy59y.js";
import"./chunk-8tnsngw2.js";
import"./chunk-jkh5s8ct.js";
import"./chunk-kwm5bf2m.js";
import"./chunk-5z28bqne.js";
import"./chunk-qajrkk97.js";
import {
  init_errors,
  init_slowOperations,
  jsonParse,
  jsonStringify,
  toError
} from "./chunk-rpbc3b7k.js";
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

// src/commands/insights.ts
import { execFileSync } from "child_process";
import { constants as fsConstants } from "fs";
import {
  copyFile,
  mkdir,
  mkdtemp,
  readdir,
  readFile,
  rm,
  unlink,
  writeFile
} from "fs/promises";
import { tmpdir } from "os";
import { extname, join } from "path";
function getAnalysisModel() {
  return getDefaultOpusModel();
}
function getInsightsModel() {
  return getDefaultOpusModel();
}
function getDataDir() {
  return join(getClaudeConfigHomeDir(), "usage-data");
}
function getFacetsDir() {
  return join(getDataDir(), "facets");
}
function getSessionMetaDir() {
  return join(getDataDir(), "session-meta");
}
function getLanguageFromPath(filePath) {
  const ext = extname(filePath).toLowerCase();
  return EXTENSION_TO_LANGUAGE[ext] || null;
}
function extractToolStats(log) {
  const toolCounts = {};
  const languages = {};
  let gitCommits = 0;
  let gitPushes = 0;
  let inputTokens = 0;
  let outputTokens = 0;
  let userInterruptions = 0;
  const userResponseTimes = [];
  let toolErrors = 0;
  const toolErrorCategories = {};
  let usesTaskAgent = false;
  let linesAdded = 0;
  let linesRemoved = 0;
  const filesModified = new Set;
  const messageHours = [];
  const userMessageTimestamps = [];
  let usesMcp = false;
  let usesWebSearch = false;
  let usesWebFetch = false;
  let lastAssistantTimestamp = null;
  for (const msg of log.messages) {
    const msgTimestamp = msg.timestamp;
    if (msg.type === "assistant" && msg.message) {
      if (msgTimestamp) {
        lastAssistantTimestamp = msgTimestamp;
      }
      const usage = msg.message.usage;
      if (usage) {
        inputTokens += usage.input_tokens || 0;
        outputTokens += usage.output_tokens || 0;
      }
      const content = msg.message.content;
      if (Array.isArray(content)) {
        for (const block of content) {
          if (block.type === "tool_use" && "name" in block) {
            const toolName = block.name;
            toolCounts[toolName] = (toolCounts[toolName] || 0) + 1;
            if (toolName === AGENT_TOOL_NAME || toolName === LEGACY_AGENT_TOOL_NAME)
              usesTaskAgent = true;
            if (toolName.startsWith("mcp__"))
              usesMcp = true;
            if (toolName === "WebSearch")
              usesWebSearch = true;
            if (toolName === "WebFetch")
              usesWebFetch = true;
            const input = block.input;
            if (input) {
              const filePath = input.file_path || "";
              if (filePath) {
                const lang = getLanguageFromPath(filePath);
                if (lang) {
                  languages[lang] = (languages[lang] || 0) + 1;
                }
                if (toolName === "Edit" || toolName === "Write") {
                  filesModified.add(filePath);
                }
              }
              if (toolName === "Edit") {
                const oldString = input.old_string || "";
                const newString = input.new_string || "";
                for (const change of diffLines(oldString, newString)) {
                  if (change.added)
                    linesAdded += change.count || 0;
                  if (change.removed)
                    linesRemoved += change.count || 0;
                }
              }
              if (toolName === "Write") {
                const writeContent = input.content || "";
                if (writeContent) {
                  linesAdded += countCharInString(writeContent, `
`) + 1;
                }
              }
              const command = input.command || "";
              if (command.includes("git commit"))
                gitCommits++;
              if (command.includes("git push"))
                gitPushes++;
            }
          }
        }
      }
    }
    if (msg.type === "user" && msg.message) {
      const content = msg.message.content;
      let isHumanMessage = false;
      if (typeof content === "string" && content.trim()) {
        isHumanMessage = true;
      } else if (Array.isArray(content)) {
        for (const block of content) {
          if (block.type === "text" && "text" in block) {
            isHumanMessage = true;
            break;
          }
        }
      }
      if (isHumanMessage) {
        if (msgTimestamp) {
          try {
            const msgDate = new Date(msgTimestamp);
            const hour = msgDate.getHours();
            messageHours.push(hour);
            userMessageTimestamps.push(msgTimestamp);
          } catch {}
        }
        if (lastAssistantTimestamp && msgTimestamp) {
          const assistantTime = new Date(lastAssistantTimestamp).getTime();
          const userTime = new Date(msgTimestamp).getTime();
          const responseTimeSec = (userTime - assistantTime) / 1000;
          if (responseTimeSec > 2 && responseTimeSec < 3600) {
            userResponseTimes.push(responseTimeSec);
          }
        }
      }
      if (Array.isArray(content)) {
        for (const block of content) {
          if (block.type === "tool_result" && "content" in block) {
            const isError = block.is_error;
            if (isError) {
              toolErrors++;
              const resultContent = block.content;
              let category = "Other";
              if (typeof resultContent === "string") {
                const lowerContent = resultContent.toLowerCase();
                if (lowerContent.includes("exit code")) {
                  category = "Command Failed";
                } else if (lowerContent.includes("rejected") || lowerContent.includes("doesn't want")) {
                  category = "User Rejected";
                } else if (lowerContent.includes("string to replace not found") || lowerContent.includes("no changes")) {
                  category = "Edit Failed";
                } else if (lowerContent.includes("modified since read")) {
                  category = "File Changed";
                } else if (lowerContent.includes("exceeds maximum") || lowerContent.includes("too large")) {
                  category = "File Too Large";
                } else if (lowerContent.includes("file not found") || lowerContent.includes("does not exist")) {
                  category = "File Not Found";
                }
              }
              toolErrorCategories[category] = (toolErrorCategories[category] || 0) + 1;
            }
          }
        }
      }
      if (typeof content === "string") {
        if (content.includes("[Request interrupted by user")) {
          userInterruptions++;
        }
      } else if (Array.isArray(content)) {
        for (const block of content) {
          if (block.type === "text" && "text" in block && block.text.includes("[Request interrupted by user")) {
            userInterruptions++;
            break;
          }
        }
      }
    }
  }
  return {
    toolCounts,
    languages,
    gitCommits,
    gitPushes,
    inputTokens,
    outputTokens,
    userInterruptions,
    userResponseTimes,
    toolErrors,
    toolErrorCategories,
    usesTaskAgent,
    usesMcp,
    usesWebSearch,
    usesWebFetch,
    linesAdded,
    linesRemoved,
    filesModified,
    messageHours,
    userMessageTimestamps
  };
}
function hasValidDates(log) {
  return !Number.isNaN(log.created.getTime()) && !Number.isNaN(log.modified.getTime());
}
function logToSessionMeta(log) {
  const stats = extractToolStats(log);
  const sessionId = getSessionIdFromLog(log) || "unknown";
  const startTime = log.created.toISOString();
  const durationMinutes = Math.round((log.modified.getTime() - log.created.getTime()) / 1000 / 60);
  let userMessageCount = 0;
  let assistantMessageCount = 0;
  for (const msg of log.messages) {
    if (msg.type === "assistant")
      assistantMessageCount++;
    if (msg.type === "user" && msg.message) {
      const content = msg.message.content;
      let isHumanMessage = false;
      if (typeof content === "string" && content.trim()) {
        isHumanMessage = true;
      } else if (Array.isArray(content)) {
        for (const block of content) {
          if (block.type === "text" && "text" in block) {
            isHumanMessage = true;
            break;
          }
        }
      }
      if (isHumanMessage) {
        userMessageCount++;
      }
    }
  }
  return {
    session_id: sessionId,
    project_path: log.projectPath || "",
    start_time: startTime,
    duration_minutes: durationMinutes,
    user_message_count: userMessageCount,
    assistant_message_count: assistantMessageCount,
    tool_counts: stats.toolCounts,
    languages: stats.languages,
    git_commits: stats.gitCommits,
    git_pushes: stats.gitPushes,
    input_tokens: stats.inputTokens,
    output_tokens: stats.outputTokens,
    first_prompt: log.firstPrompt || "",
    summary: log.summary,
    user_interruptions: stats.userInterruptions,
    user_response_times: stats.userResponseTimes,
    tool_errors: stats.toolErrors,
    tool_error_categories: stats.toolErrorCategories,
    uses_task_agent: stats.usesTaskAgent,
    uses_mcp: stats.usesMcp,
    uses_web_search: stats.usesWebSearch,
    uses_web_fetch: stats.usesWebFetch,
    lines_added: stats.linesAdded,
    lines_removed: stats.linesRemoved,
    files_modified: stats.filesModified.size,
    message_hours: stats.messageHours,
    user_message_timestamps: stats.userMessageTimestamps
  };
}
function deduplicateSessionBranches(entries) {
  const bestBySession = new Map;
  for (const entry of entries) {
    const id = entry.meta.session_id;
    const existing = bestBySession.get(id);
    if (!existing || entry.meta.user_message_count > existing.meta.user_message_count || entry.meta.user_message_count === existing.meta.user_message_count && entry.meta.duration_minutes > existing.meta.duration_minutes) {
      bestBySession.set(id, entry);
    }
  }
  return [...bestBySession.values()];
}
function formatTranscriptForFacets(log) {
  const lines = [];
  const meta = logToSessionMeta(log);
  lines.push(`Session: ${meta.session_id.slice(0, 8)}`);
  lines.push(`Date: ${meta.start_time}`);
  lines.push(`Project: ${meta.project_path}`);
  lines.push(`Duration: ${meta.duration_minutes} min`);
  lines.push("");
  for (const msg of log.messages) {
    if (msg.type === "user" && msg.message) {
      const content = msg.message.content;
      if (typeof content === "string") {
        lines.push(`[User]: ${content.slice(0, 500)}`);
      } else if (Array.isArray(content)) {
        for (const block of content) {
          if (block.type === "text" && "text" in block) {
            lines.push(`[User]: ${block.text.slice(0, 500)}`);
          }
        }
      }
    } else if (msg.type === "assistant" && msg.message) {
      const content = msg.message.content;
      if (Array.isArray(content)) {
        for (const block of content) {
          if (block.type === "text" && "text" in block) {
            lines.push(`[Assistant]: ${block.text.slice(0, 300)}`);
          } else if (block.type === "tool_use" && "name" in block) {
            lines.push(`[Tool: ${block.name}]`);
          }
        }
      }
    }
  }
  return lines.join(`
`);
}
async function summarizeTranscriptChunk(chunk) {
  try {
    const result = await queryWithModel({
      systemPrompt: asSystemPrompt([]),
      userPrompt: SUMMARIZE_CHUNK_PROMPT + chunk,
      signal: new AbortController().signal,
      options: {
        model: getAnalysisModel(),
        querySource: "insights",
        agents: [],
        isNonInteractiveSession: true,
        hasAppendSystemPrompt: false,
        mcpTools: [],
        maxOutputTokensOverride: 500
      }
    });
    const text = extractTextContent(result.message.content);
    return text || chunk.slice(0, 2000);
  } catch {
    return chunk.slice(0, 2000);
  }
}
async function formatTranscriptWithSummarization(log) {
  const fullTranscript = formatTranscriptForFacets(log);
  if (fullTranscript.length <= 30000) {
    return fullTranscript;
  }
  const CHUNK_SIZE = 25000;
  const chunks = [];
  for (let i = 0;i < fullTranscript.length; i += CHUNK_SIZE) {
    chunks.push(fullTranscript.slice(i, i + CHUNK_SIZE));
  }
  const summaries = await Promise.all(chunks.map(summarizeTranscriptChunk));
  const meta = logToSessionMeta(log);
  const header = [
    `Session: ${meta.session_id.slice(0, 8)}`,
    `Date: ${meta.start_time}`,
    `Project: ${meta.project_path}`,
    `Duration: ${meta.duration_minutes} min`,
    `[Long session - ${chunks.length} parts summarized]`,
    ""
  ].join(`
`);
  return header + summaries.join(`

---

`);
}
async function loadCachedFacets(sessionId) {
  const facetPath = join(getFacetsDir(), `${sessionId}.json`);
  try {
    const content = await readFile(facetPath, { encoding: "utf-8" });
    const parsed = jsonParse(content);
    if (!isValidSessionFacets(parsed)) {
      try {
        await unlink(facetPath);
      } catch {}
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}
async function saveFacets(facets) {
  try {
    await mkdir(getFacetsDir(), { recursive: true });
  } catch {}
  const facetPath = join(getFacetsDir(), `${facets.session_id}.json`);
  await writeFile(facetPath, jsonStringify(facets, null, 2), {
    encoding: "utf-8",
    mode: 384
  });
}
async function loadCachedSessionMeta(sessionId) {
  const metaPath = join(getSessionMetaDir(), `${sessionId}.json`);
  try {
    const content = await readFile(metaPath, { encoding: "utf-8" });
    return jsonParse(content);
  } catch {
    return null;
  }
}
async function saveSessionMeta(meta) {
  try {
    await mkdir(getSessionMetaDir(), { recursive: true });
  } catch {}
  const metaPath = join(getSessionMetaDir(), `${meta.session_id}.json`);
  await writeFile(metaPath, jsonStringify(meta, null, 2), {
    encoding: "utf-8",
    mode: 384
  });
}
async function extractFacetsFromAPI(log, sessionId) {
  try {
    const transcript = await formatTranscriptWithSummarization(log);
    const jsonPrompt = `${FACET_EXTRACTION_PROMPT}${transcript}

RESPOND WITH ONLY A VALID JSON OBJECT matching this schema:
{
  "underlying_goal": "What the user fundamentally wanted to achieve",
  "goal_categories": {"category_name": count, ...},
  "outcome": "fully_achieved|mostly_achieved|partially_achieved|not_achieved|unclear_from_transcript",
  "user_satisfaction_counts": {"level": count, ...},
  "claude_helpfulness": "unhelpful|slightly_helpful|moderately_helpful|very_helpful|essential",
  "session_type": "single_task|multi_task|iterative_refinement|exploration|quick_question",
  "friction_counts": {"friction_type": count, ...},
  "friction_detail": "One sentence describing friction or empty",
  "primary_success": "none|fast_accurate_search|correct_code_edits|good_explanations|proactive_help|multi_file_changes|good_debugging",
  "brief_summary": "One sentence: what user wanted and whether they got it"
}`;
    const result = await queryWithModel({
      systemPrompt: asSystemPrompt([]),
      userPrompt: jsonPrompt,
      signal: new AbortController().signal,
      options: {
        model: getAnalysisModel(),
        querySource: "insights",
        agents: [],
        isNonInteractiveSession: true,
        hasAppendSystemPrompt: false,
        mcpTools: [],
        maxOutputTokensOverride: 4096
      }
    });
    const text = extractTextContent(result.message.content);
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch)
      return null;
    const parsed = jsonParse(jsonMatch[0]);
    if (!isValidSessionFacets(parsed))
      return null;
    const facets = { ...parsed, session_id: sessionId };
    return facets;
  } catch (err) {
    logError(new Error(`Facet extraction failed: ${toError(err).message}`));
    return null;
  }
}
function detectMultiClauding(sessions) {
  const OVERLAP_WINDOW_MS = 30 * 60000;
  const allSessionMessages = [];
  for (const session of sessions) {
    for (const timestamp of session.user_message_timestamps) {
      try {
        const ts = new Date(timestamp).getTime();
        allSessionMessages.push({ ts, sessionId: session.session_id });
      } catch {}
    }
  }
  allSessionMessages.sort((a, b) => a.ts - b.ts);
  const multiClaudeSessionPairs = new Set;
  const messagesDuringMulticlaude = new Set;
  let windowStart = 0;
  const sessionLastIndex = new Map;
  for (let i = 0;i < allSessionMessages.length; i++) {
    const msg = allSessionMessages[i];
    while (windowStart < i && msg.ts - allSessionMessages[windowStart].ts > OVERLAP_WINDOW_MS) {
      const expiring = allSessionMessages[windowStart];
      if (sessionLastIndex.get(expiring.sessionId) === windowStart) {
        sessionLastIndex.delete(expiring.sessionId);
      }
      windowStart++;
    }
    const prevIndex = sessionLastIndex.get(msg.sessionId);
    if (prevIndex !== undefined) {
      for (let j = prevIndex + 1;j < i; j++) {
        const between = allSessionMessages[j];
        if (between.sessionId !== msg.sessionId) {
          const pair = [msg.sessionId, between.sessionId].sort().join(":");
          multiClaudeSessionPairs.add(pair);
          messagesDuringMulticlaude.add(`${allSessionMessages[prevIndex].ts}:${msg.sessionId}`);
          messagesDuringMulticlaude.add(`${between.ts}:${between.sessionId}`);
          messagesDuringMulticlaude.add(`${msg.ts}:${msg.sessionId}`);
          break;
        }
      }
    }
    sessionLastIndex.set(msg.sessionId, i);
  }
  const sessionsWithOverlaps = new Set;
  for (const pair of multiClaudeSessionPairs) {
    const [s1, s2] = pair.split(":");
    if (s1)
      sessionsWithOverlaps.add(s1);
    if (s2)
      sessionsWithOverlaps.add(s2);
  }
  return {
    overlap_events: multiClaudeSessionPairs.size,
    sessions_involved: sessionsWithOverlaps.size,
    user_messages_during: messagesDuringMulticlaude.size
  };
}
function aggregateData(sessions, facets) {
  const result = {
    total_sessions: sessions.length,
    sessions_with_facets: facets.size,
    date_range: { start: "", end: "" },
    total_messages: 0,
    total_duration_hours: 0,
    total_input_tokens: 0,
    total_output_tokens: 0,
    tool_counts: {},
    languages: {},
    git_commits: 0,
    git_pushes: 0,
    projects: {},
    goal_categories: {},
    outcomes: {},
    satisfaction: {},
    helpfulness: {},
    session_types: {},
    friction: {},
    success: {},
    session_summaries: [],
    total_interruptions: 0,
    total_tool_errors: 0,
    tool_error_categories: {},
    user_response_times: [],
    median_response_time: 0,
    avg_response_time: 0,
    sessions_using_task_agent: 0,
    sessions_using_mcp: 0,
    sessions_using_web_search: 0,
    sessions_using_web_fetch: 0,
    total_lines_added: 0,
    total_lines_removed: 0,
    total_files_modified: 0,
    days_active: 0,
    messages_per_day: 0,
    message_hours: [],
    multi_clauding: {
      overlap_events: 0,
      sessions_involved: 0,
      user_messages_during: 0
    }
  };
  const dates = [];
  const allResponseTimes = [];
  const allMessageHours = [];
  for (const session of sessions) {
    dates.push(session.start_time);
    result.total_messages += session.user_message_count;
    result.total_duration_hours += session.duration_minutes / 60;
    result.total_input_tokens += session.input_tokens;
    result.total_output_tokens += session.output_tokens;
    result.git_commits += session.git_commits;
    result.git_pushes += session.git_pushes;
    result.total_interruptions += session.user_interruptions;
    result.total_tool_errors += session.tool_errors;
    for (const [cat, count] of Object.entries(session.tool_error_categories)) {
      result.tool_error_categories[cat] = (result.tool_error_categories[cat] || 0) + count;
    }
    allResponseTimes.push(...session.user_response_times);
    if (session.uses_task_agent)
      result.sessions_using_task_agent++;
    if (session.uses_mcp)
      result.sessions_using_mcp++;
    if (session.uses_web_search)
      result.sessions_using_web_search++;
    if (session.uses_web_fetch)
      result.sessions_using_web_fetch++;
    result.total_lines_added += session.lines_added;
    result.total_lines_removed += session.lines_removed;
    result.total_files_modified += session.files_modified;
    allMessageHours.push(...session.message_hours);
    for (const [tool, count] of Object.entries(session.tool_counts)) {
      result.tool_counts[tool] = (result.tool_counts[tool] || 0) + count;
    }
    for (const [lang, count] of Object.entries(session.languages)) {
      result.languages[lang] = (result.languages[lang] || 0) + count;
    }
    if (session.project_path) {
      result.projects[session.project_path] = (result.projects[session.project_path] || 0) + 1;
    }
    const sessionFacets = facets.get(session.session_id);
    if (sessionFacets) {
      for (const [cat, count] of safeEntries(sessionFacets.goal_categories)) {
        if (count > 0) {
          result.goal_categories[cat] = (result.goal_categories[cat] || 0) + count;
        }
      }
      result.outcomes[sessionFacets.outcome] = (result.outcomes[sessionFacets.outcome] || 0) + 1;
      for (const [level, count] of safeEntries(sessionFacets.user_satisfaction_counts)) {
        if (count > 0) {
          result.satisfaction[level] = (result.satisfaction[level] || 0) + count;
        }
      }
      result.helpfulness[sessionFacets.claude_helpfulness] = (result.helpfulness[sessionFacets.claude_helpfulness] || 0) + 1;
      result.session_types[sessionFacets.session_type] = (result.session_types[sessionFacets.session_type] || 0) + 1;
      for (const [type, count] of safeEntries(sessionFacets.friction_counts)) {
        if (count > 0) {
          result.friction[type] = (result.friction[type] || 0) + count;
        }
      }
      if (sessionFacets.primary_success !== "none") {
        result.success[sessionFacets.primary_success] = (result.success[sessionFacets.primary_success] || 0) + 1;
      }
    }
    if (result.session_summaries.length < 50) {
      result.session_summaries.push({
        id: session.session_id.slice(0, 8),
        date: session.start_time.split("T")[0] || "",
        summary: session.summary || session.first_prompt.slice(0, 100),
        goal: sessionFacets?.underlying_goal
      });
    }
  }
  dates.sort();
  result.date_range.start = dates[0]?.split("T")[0] || "";
  result.date_range.end = dates[dates.length - 1]?.split("T")[0] || "";
  result.user_response_times = allResponseTimes;
  if (allResponseTimes.length > 0) {
    const sorted = [...allResponseTimes].sort((a, b) => a - b);
    result.median_response_time = sorted[Math.floor(sorted.length / 2)] || 0;
    result.avg_response_time = allResponseTimes.reduce((a, b) => a + b, 0) / allResponseTimes.length;
  }
  const uniqueDays = new Set(dates.map((d) => d.split("T")[0]));
  result.days_active = uniqueDays.size;
  result.messages_per_day = result.days_active > 0 ? Math.round(result.total_messages / result.days_active * 10) / 10 : 0;
  result.message_hours = allMessageHours;
  result.multi_clauding = detectMultiClauding(sessions);
  return result;
}
async function generateSectionInsight(section, dataContext) {
  try {
    const result = await queryWithModel({
      systemPrompt: asSystemPrompt([]),
      userPrompt: section.prompt + `

DATA:
` + dataContext,
      signal: new AbortController().signal,
      options: {
        model: getInsightsModel(),
        querySource: "insights",
        agents: [],
        isNonInteractiveSession: true,
        hasAppendSystemPrompt: false,
        mcpTools: [],
        maxOutputTokensOverride: section.maxTokens
      }
    });
    const text = extractTextContent(result.message.content);
    if (text) {
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        try {
          return { name: section.name, result: jsonParse(jsonMatch[0]) };
        } catch {
          return { name: section.name, result: null };
        }
      }
    }
    return { name: section.name, result: null };
  } catch (err) {
    logError(new Error(`${section.name} failed: ${toError(err).message}`));
    return { name: section.name, result: null };
  }
}
async function generateParallelInsights(data, facets) {
  const facetSummaries = Array.from(facets.values()).slice(0, 50).map((f) => `- ${f.brief_summary} (${f.outcome}, ${f.claude_helpfulness})`).join(`
`);
  const frictionDetails = Array.from(facets.values()).filter((f) => f.friction_detail).slice(0, 20).map((f) => `- ${f.friction_detail}`).join(`
`);
  const userInstructions = Array.from(facets.values()).flatMap((f) => f.user_instructions_to_claude || []).slice(0, 15).map((i) => `- ${i}`).join(`
`);
  const dataContext = jsonStringify({
    sessions: data.total_sessions,
    analyzed: data.sessions_with_facets,
    date_range: data.date_range,
    messages: data.total_messages,
    hours: Math.round(data.total_duration_hours),
    commits: data.git_commits,
    top_tools: Object.entries(data.tool_counts).sort((a, b) => b[1] - a[1]).slice(0, 8),
    top_goals: Object.entries(data.goal_categories).sort((a, b) => b[1] - a[1]).slice(0, 8),
    outcomes: data.outcomes,
    satisfaction: data.satisfaction,
    friction: data.friction,
    success: data.success,
    languages: data.languages
  }, null, 2);
  const fullContext = dataContext + `

SESSION SUMMARIES:
` + facetSummaries + `

FRICTION DETAILS:
` + frictionDetails + `

USER INSTRUCTIONS TO CLAUDE:
` + (userInstructions || "None captured");
  const results = await Promise.all(INSIGHT_SECTIONS.map((section) => generateSectionInsight(section, fullContext)));
  const insights = {};
  for (const { name, result } of results) {
    if (result) {
      insights[name] = result;
    }
  }
  const projectAreasText = insights.project_areas?.areas?.map((a) => `- ${a.name}: ${a.description}`).join(`
`) || "";
  const bigWinsText = insights.what_works?.impressive_workflows?.map((w) => `- ${w.title}: ${w.description}`).join(`
`) || "";
  const frictionText = insights.friction_analysis?.categories?.map((c) => `- ${c.category}: ${c.description}`).join(`
`) || "";
  const featuresText = insights.suggestions?.features_to_try?.map((f) => `- ${f.feature}: ${f.one_liner}`).join(`
`) || "";
  const patternsText = insights.suggestions?.usage_patterns?.map((p) => `- ${p.title}: ${p.suggestion}`).join(`
`) || "";
  const horizonText = insights.on_the_horizon?.opportunities?.map((o) => `- ${o.title}: ${o.whats_possible}`).join(`
`) || "";
  const atAGlancePrompt = `You're writing an "At a Glance" summary for a MiMo Code usage insights report for MiMo Code users. The goal is to help them understand their usage and improve how they can use Claude better, especially as models improve.

Use this 4-part structure:

1. **What's working** - What is the user's unique style of interacting with Claude and what are some impactful things they've done? You can include one or two details, but keep it high level since things might not be fresh in the user's memory. Don't be fluffy or overly complimentary. Also, don't focus on the tool calls they use.

2. **What's hindering you** - Split into (a) Claude's fault (misunderstandings, wrong approaches, bugs) and (b) user-side friction (not providing enough context, environment issues -- ideally more general than just one project). Be honest but constructive.

3. **Quick wins to try** - Specific MiMo Code features they could try from the examples below, or a workflow technique if you think it's really compelling. (Avoid stuff like "Ask MiMo to confirm before taking actions" or "Type out more context up front" which are less compelling.)

4. **Ambitious workflows for better models** - As we move to much more capable models over the next 3-6 months, what should they prepare for? What workflows that seem impossible now will become possible? Draw from the appropriate section below.

Keep each section to 2-3 not-too-long sentences. Don't overwhelm the user. Don't mention specific numerical stats or underlined_categories from the session data below. Use a coaching tone.

RESPOND WITH ONLY A VALID JSON OBJECT:
{
  "whats_working": "(refer to instructions above)",
  "whats_hindering": "(refer to instructions above)",
  "quick_wins": "(refer to instructions above)",
  "ambitious_workflows": "(refer to instructions above)"
}

SESSION DATA:
${fullContext}

## Project Areas (what user works on)
${projectAreasText}

## Big Wins (impressive accomplishments)
${bigWinsText}

## Friction Categories (where things go wrong)
${frictionText}

## Features to Try
${featuresText}

## Usage Patterns to Adopt
${patternsText}

## On the Horizon (ambitious workflows for better models)
${horizonText}`;
  const atAGlanceSection = {
    name: "at_a_glance",
    prompt: atAGlancePrompt,
    maxTokens: 8192
  };
  const atAGlanceResult = await generateSectionInsight(atAGlanceSection, "");
  if (atAGlanceResult.result) {
    insights.at_a_glance = atAGlanceResult.result;
  }
  return insights;
}
function escapeHtmlWithBold(text) {
  const escaped = escapeXmlAttr(text);
  return escaped.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}
function generateBarChart(data, color, maxItems = 6, fixedOrder) {
  let entries;
  if (fixedOrder) {
    entries = fixedOrder.filter((key) => (key in data) && (data[key] ?? 0) > 0).map((key) => [key, data[key] ?? 0]);
  } else {
    entries = Object.entries(data).sort((a, b) => b[1] - a[1]).slice(0, maxItems);
  }
  if (entries.length === 0)
    return '<p class="empty">No data</p>';
  const maxVal = Math.max(...entries.map((e) => e[1]));
  return entries.map(([label, count]) => {
    const pct = count / maxVal * 100;
    const cleanLabel = LABEL_MAP[label] || label.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    return `<div class="bar-row">
        <div class="bar-label">${escapeXmlAttr(cleanLabel)}</div>
        <div class="bar-track"><div class="bar-fill" style="width:${pct}%;background:${color}"></div></div>
        <div class="bar-value">${count}</div>
      </div>`;
  }).join(`
`);
}
function generateResponseTimeHistogram(times) {
  if (times.length === 0)
    return '<p class="empty">No response time data</p>';
  const buckets = {
    "2-10s": 0,
    "10-30s": 0,
    "30s-1m": 0,
    "1-2m": 0,
    "2-5m": 0,
    "5-15m": 0,
    ">15m": 0
  };
  for (const t of times) {
    if (t < 10)
      buckets["2-10s"] = (buckets["2-10s"] ?? 0) + 1;
    else if (t < 30)
      buckets["10-30s"] = (buckets["10-30s"] ?? 0) + 1;
    else if (t < 60)
      buckets["30s-1m"] = (buckets["30s-1m"] ?? 0) + 1;
    else if (t < 120)
      buckets["1-2m"] = (buckets["1-2m"] ?? 0) + 1;
    else if (t < 300)
      buckets["2-5m"] = (buckets["2-5m"] ?? 0) + 1;
    else if (t < 900)
      buckets["5-15m"] = (buckets["5-15m"] ?? 0) + 1;
    else
      buckets[">15m"] = (buckets[">15m"] ?? 0) + 1;
  }
  const maxVal = Math.max(...Object.values(buckets));
  if (maxVal === 0)
    return '<p class="empty">No response time data</p>';
  return Object.entries(buckets).map(([label, count]) => {
    const pct = count / maxVal * 100;
    return `<div class="bar-row">
        <div class="bar-label">${label}</div>
        <div class="bar-track"><div class="bar-fill" style="width:${pct}%;background:#6366f1"></div></div>
        <div class="bar-value">${count}</div>
      </div>`;
  }).join(`
`);
}
function generateTimeOfDayChart(messageHours) {
  if (messageHours.length === 0)
    return '<p class="empty">No time data</p>';
  const periods = [
    { label: "Morning (6-12)", range: [6, 7, 8, 9, 10, 11] },
    { label: "Afternoon (12-18)", range: [12, 13, 14, 15, 16, 17] },
    { label: "Evening (18-24)", range: [18, 19, 20, 21, 22, 23] },
    { label: "Night (0-6)", range: [0, 1, 2, 3, 4, 5] }
  ];
  const hourCounts = {};
  for (const h of messageHours) {
    hourCounts[h] = (hourCounts[h] || 0) + 1;
  }
  const periodCounts = periods.map((p) => ({
    label: p.label,
    count: p.range.reduce((sum, h) => sum + (hourCounts[h] || 0), 0)
  }));
  const maxVal = Math.max(...periodCounts.map((p) => p.count)) || 1;
  const barsHtml = periodCounts.map((p) => `
      <div class="bar-row">
        <div class="bar-label">${p.label}</div>
        <div class="bar-track"><div class="bar-fill" style="width:${p.count / maxVal * 100}%;background:#8b5cf6"></div></div>
        <div class="bar-value">${p.count}</div>
      </div>`).join(`
`);
  return `<div id="hour-histogram">${barsHtml}</div>`;
}
function getHourCountsJson(messageHours) {
  const hourCounts = {};
  for (const h of messageHours) {
    hourCounts[h] = (hourCounts[h] || 0) + 1;
  }
  return jsonStringify(hourCounts);
}
function generateHtmlReport(data, insights) {
  const markdownToHtml = (md) => {
    if (!md)
      return "";
    return md.split(`

`).map((p) => {
      let html = escapeXmlAttr(p);
      html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
      html = html.replace(/^- /gm, "\u2022 ");
      html = html.replace(/\n/g, "<br>");
      return `<p>${html}</p>`;
    }).join(`
`);
  };
  const atAGlance = insights.at_a_glance;
  const atAGlanceHtml = atAGlance ? `
    <div class="at-a-glance">
      <div class="glance-title">At a Glance</div>
      <div class="glance-sections">
        ${atAGlance.whats_working ? `<div class="glance-section"><strong>What's working:</strong> ${escapeHtmlWithBold(atAGlance.whats_working)} <a href="#section-wins" class="see-more">Impressive Things You Did \u2192</a></div>` : ""}
        ${atAGlance.whats_hindering ? `<div class="glance-section"><strong>What's hindering you:</strong> ${escapeHtmlWithBold(atAGlance.whats_hindering)} <a href="#section-friction" class="see-more">Where Things Go Wrong \u2192</a></div>` : ""}
        ${atAGlance.quick_wins ? `<div class="glance-section"><strong>Quick wins to try:</strong> ${escapeHtmlWithBold(atAGlance.quick_wins)} <a href="#section-features" class="see-more">Features to Try \u2192</a></div>` : ""}
        ${atAGlance.ambitious_workflows ? `<div class="glance-section"><strong>Ambitious workflows:</strong> ${escapeHtmlWithBold(atAGlance.ambitious_workflows)} <a href="#section-horizon" class="see-more">On the Horizon \u2192</a></div>` : ""}
      </div>
    </div>
    ` : "";
  const projectAreas = insights.project_areas?.areas || [];
  const projectAreasHtml = projectAreas.length > 0 ? `
    <h2 id="section-work">What You Work On</h2>
    <div class="project-areas">
      ${projectAreas.map((area) => `
        <div class="project-area">
          <div class="area-header">
            <span class="area-name">${escapeXmlAttr(area.name)}</span>
            <span class="area-count">~${area.session_count} sessions</span>
          </div>
          <div class="area-desc">${escapeXmlAttr(area.description)}</div>
        </div>
      `).join("")}
    </div>
    ` : "";
  const interactionStyle = insights.interaction_style;
  const interactionHtml = interactionStyle?.narrative ? `
    <h2 id="section-usage">How You Use MiMo Code</h2>
    <div class="narrative">
      ${markdownToHtml(interactionStyle.narrative)}
      ${interactionStyle.key_pattern ? `<div class="key-insight"><strong>Key pattern:</strong> ${escapeXmlAttr(interactionStyle.key_pattern)}</div>` : ""}
    </div>
    ` : "";
  const whatWorks = insights.what_works;
  const whatWorksHtml = whatWorks?.impressive_workflows && whatWorks.impressive_workflows.length > 0 ? `
    <h2 id="section-wins">Impressive Things You Did</h2>
    ${whatWorks.intro ? `<p class="section-intro">${escapeXmlAttr(whatWorks.intro)}</p>` : ""}
    <div class="big-wins">
      ${whatWorks.impressive_workflows.map((wf) => `
        <div class="big-win">
          <div class="big-win-title">${escapeXmlAttr(wf.title || "")}</div>
          <div class="big-win-desc">${escapeXmlAttr(wf.description || "")}</div>
        </div>
      `).join("")}
    </div>
    ` : "";
  const frictionAnalysis = insights.friction_analysis;
  const frictionHtml = frictionAnalysis?.categories && frictionAnalysis.categories.length > 0 ? `
    <h2 id="section-friction">Where Things Go Wrong</h2>
    ${frictionAnalysis.intro ? `<p class="section-intro">${escapeXmlAttr(frictionAnalysis.intro)}</p>` : ""}
    <div class="friction-categories">
      ${frictionAnalysis.categories.map((cat) => `
        <div class="friction-category">
          <div class="friction-title">${escapeXmlAttr(cat.category || "")}</div>
          <div class="friction-desc">${escapeXmlAttr(cat.description || "")}</div>
          ${cat.examples ? `<ul class="friction-examples">${cat.examples.map((ex) => `<li>${escapeXmlAttr(ex)}</li>`).join("")}</ul>` : ""}
        </div>
      `).join("")}
    </div>
    ` : "";
  const suggestions = insights.suggestions;
  const suggestionsHtml = suggestions ? `
    ${suggestions.claude_md_additions && suggestions.claude_md_additions.length > 0 ? `
    <h2 id="section-features">Existing CC Features to Try</h2>
    <div class="claude-md-section">
      <h3>Suggested CLAUDE.md Additions</h3>
      <p style="font-size: 12px; color: #64748b; margin-bottom: 12px;">Just copy this into MiMo Code to add it to your CLAUDE.md.</p>
      <div class="claude-md-actions">
        <button class="copy-all-btn" onclick="copyAllCheckedClaudeMd()">Copy All Checked</button>
      </div>
      ${suggestions.claude_md_additions.map((add, i) => `
        <div class="claude-md-item">
          <input type="checkbox" id="cmd-${i}" class="cmd-checkbox" checked data-text="${escapeXmlAttr(add.prompt_scaffold || add.where || "Add to CLAUDE.md")}\\n\\n${escapeXmlAttr(add.addition)}">
          <label for="cmd-${i}">
            <code class="cmd-code">${escapeXmlAttr(add.addition)}</code>
            <button class="copy-btn" onclick="copyCmdItem(${i})">Copy</button>
          </label>
          <div class="cmd-why">${escapeXmlAttr(add.why)}</div>
        </div>
      `).join("")}
    </div>
    ` : ""}
    ${suggestions.features_to_try && suggestions.features_to_try.length > 0 ? `
    <p style="font-size: 13px; color: #64748b; margin-bottom: 12px;">Just copy this into MiMo Code and it'll set it up for you.</p>
    <div class="features-section">
      ${suggestions.features_to_try.map((feat) => `
        <div class="feature-card">
          <div class="feature-title">${escapeXmlAttr(feat.feature || "")}</div>
          <div class="feature-oneliner">${escapeXmlAttr(feat.one_liner || "")}</div>
          <div class="feature-why"><strong>Why for you:</strong> ${escapeXmlAttr(feat.why_for_you || "")}</div>
          ${feat.example_code ? `
          <div class="feature-examples">
            <div class="feature-example">
              <div class="example-code-row">
                <code class="example-code">${escapeXmlAttr(feat.example_code)}</code>
                <button class="copy-btn" onclick="copyText(this)">Copy</button>
              </div>
            </div>
          </div>
          ` : ""}
        </div>
      `).join("")}
    </div>
    ` : ""}
    ${suggestions.usage_patterns && suggestions.usage_patterns.length > 0 ? `
    <h2 id="section-patterns">New Ways to Use MiMo Code</h2>
    <p style="font-size: 13px; color: #64748b; margin-bottom: 12px;">Just copy this into MiMo Code and it'll walk you through it.</p>
    <div class="patterns-section">
      ${suggestions.usage_patterns.map((pat) => `
        <div class="pattern-card">
          <div class="pattern-title">${escapeXmlAttr(pat.title || "")}</div>
          <div class="pattern-summary">${escapeXmlAttr(pat.suggestion || "")}</div>
          ${pat.detail ? `<div class="pattern-detail">${escapeXmlAttr(pat.detail)}</div>` : ""}
          ${pat.copyable_prompt ? `
          <div class="copyable-prompt-section">
            <div class="prompt-label">Paste into MiMo Code:</div>
            <div class="copyable-prompt-row">
              <code class="copyable-prompt">${escapeXmlAttr(pat.copyable_prompt)}</code>
              <button class="copy-btn" onclick="copyText(this)">Copy</button>
            </div>
          </div>
          ` : ""}
        </div>
      `).join("")}
    </div>
    ` : ""}
    ` : "";
  const horizonData = insights.on_the_horizon;
  const horizonHtml = horizonData?.opportunities && horizonData.opportunities.length > 0 ? `
    <h2 id="section-horizon">On the Horizon</h2>
    ${horizonData.intro ? `<p class="section-intro">${escapeXmlAttr(horizonData.intro)}</p>` : ""}
    <div class="horizon-section">
      ${horizonData.opportunities.map((opp) => `
        <div class="horizon-card">
          <div class="horizon-title">${escapeXmlAttr(opp.title || "")}</div>
          <div class="horizon-possible">${escapeXmlAttr(opp.whats_possible || "")}</div>
          ${opp.how_to_try ? `<div class="horizon-tip"><strong>Getting started:</strong> ${escapeXmlAttr(opp.how_to_try)}</div>` : ""}
          ${opp.copyable_prompt ? `<div class="pattern-prompt"><div class="prompt-label">Paste into MiMo Code:</div><code>${escapeXmlAttr(opp.copyable_prompt)}</code><button class="copy-btn" onclick="copyText(this)">Copy</button></div>` : ""}
        </div>
      `).join("")}
    </div>
    ` : "";
  const ccImprovements = process.env.USER_TYPE === "ant" ? insights.cc_team_improvements?.improvements || [] : [];
  const modelImprovements = process.env.USER_TYPE === "ant" ? insights.model_behavior_improvements?.improvements || [] : [];
  const teamFeedbackHtml = ccImprovements.length > 0 || modelImprovements.length > 0 ? `
    <h2 id="section-feedback" class="feedback-header">Closing the Loop: Feedback for Other Teams</h2>
    <p class="feedback-intro">Suggestions for the CC product and model teams based on your usage patterns. Click to expand.</p>
    ${ccImprovements.length > 0 ? `
    <div class="collapsible-section">
      <div class="collapsible-header" onclick="toggleCollapsible(this)">
        <span class="collapsible-arrow">\u25B6</span>
        <h3>Product Improvements for CC Team</h3>
      </div>
      <div class="collapsible-content">
        <div class="suggestions-section">
          ${ccImprovements.map((imp) => `
            <div class="feedback-card team-card">
              <div class="feedback-title">${escapeXmlAttr(imp.title || "")}</div>
              <div class="feedback-detail">${escapeXmlAttr(imp.detail || "")}</div>
              ${imp.evidence ? `<div class="feedback-evidence"><em>Evidence:</em> ${escapeXmlAttr(imp.evidence)}</div>` : ""}
            </div>
          `).join("")}
        </div>
      </div>
    </div>
    ` : ""}
    ${modelImprovements.length > 0 ? `
    <div class="collapsible-section">
      <div class="collapsible-header" onclick="toggleCollapsible(this)">
        <span class="collapsible-arrow">\u25B6</span>
        <h3>Model Behavior Improvements</h3>
      </div>
      <div class="collapsible-content">
        <div class="suggestions-section">
          ${modelImprovements.map((imp) => `
            <div class="feedback-card model-card">
              <div class="feedback-title">${escapeXmlAttr(imp.title || "")}</div>
              <div class="feedback-detail">${escapeXmlAttr(imp.detail || "")}</div>
              ${imp.evidence ? `<div class="feedback-evidence"><em>Evidence:</em> ${escapeXmlAttr(imp.evidence)}</div>` : ""}
            </div>
          `).join("")}
        </div>
      </div>
    </div>
    ` : ""}
    ` : "";
  const funEnding = insights.fun_ending;
  const funEndingHtml = funEnding?.headline ? `
    <div class="fun-ending">
      <div class="fun-headline">"${escapeXmlAttr(funEnding.headline)}"</div>
      ${funEnding.detail ? `<div class="fun-detail">${escapeXmlAttr(funEnding.detail)}</div>` : ""}
    </div>
    ` : "";
  const css = `
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; background: #f8fafc; color: #334155; line-height: 1.65; padding: 48px 24px; }
    .container { max-width: 800px; margin: 0 auto; }
    h1 { font-size: 32px; font-weight: 700; color: #0f172a; margin-bottom: 8px; }
    h2 { font-size: 20px; font-weight: 600; color: #0f172a; margin-top: 48px; margin-bottom: 16px; }
    .subtitle { color: #64748b; font-size: 15px; margin-bottom: 32px; }
    .nav-toc { display: flex; flex-wrap: wrap; gap: 8px; margin: 24px 0 32px 0; padding: 16px; background: white; border-radius: 8px; border: 1px solid #e2e8f0; }
    .nav-toc a { font-size: 12px; color: #64748b; text-decoration: none; padding: 6px 12px; border-radius: 6px; background: #f1f5f9; transition: all 0.15s; }
    .nav-toc a:hover { background: #e2e8f0; color: #334155; }
    .stats-row { display: flex; gap: 24px; margin-bottom: 40px; padding: 20px 0; border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; flex-wrap: wrap; }
    .stat { text-align: center; }
    .stat-value { font-size: 24px; font-weight: 700; color: #0f172a; }
    .stat-label { font-size: 11px; color: #64748b; text-transform: uppercase; }
    .at-a-glance { background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border: 1px solid #f59e0b; border-radius: 12px; padding: 20px 24px; margin-bottom: 32px; }
    .glance-title { font-size: 16px; font-weight: 700; color: #92400e; margin-bottom: 16px; }
    .glance-sections { display: flex; flex-direction: column; gap: 12px; }
    .glance-section { font-size: 14px; color: #78350f; line-height: 1.6; }
    .glance-section strong { color: #92400e; }
    .see-more { color: #b45309; text-decoration: none; font-size: 13px; white-space: nowrap; }
    .see-more:hover { text-decoration: underline; }
    .project-areas { display: flex; flex-direction: column; gap: 12px; margin-bottom: 32px; }
    .project-area { background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; }
    .area-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
    .area-name { font-weight: 600; font-size: 15px; color: #0f172a; }
    .area-count { font-size: 12px; color: #64748b; background: #f1f5f9; padding: 2px 8px; border-radius: 4px; }
    .area-desc { font-size: 14px; color: #475569; line-height: 1.5; }
    .narrative { background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 24px; }
    .narrative p { margin-bottom: 12px; font-size: 14px; color: #475569; line-height: 1.7; }
    .key-insight { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 12px 16px; margin-top: 12px; font-size: 14px; color: #166534; }
    .section-intro { font-size: 14px; color: #64748b; margin-bottom: 16px; }
    .big-wins { display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px; }
    .big-win { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; }
    .big-win-title { font-weight: 600; font-size: 15px; color: #166534; margin-bottom: 8px; }
    .big-win-desc { font-size: 14px; color: #15803d; line-height: 1.5; }
    .friction-categories { display: flex; flex-direction: column; gap: 16px; margin-bottom: 24px; }
    .friction-category { background: #fef2f2; border: 1px solid #fca5a5; border-radius: 8px; padding: 16px; }
    .friction-title { font-weight: 600; font-size: 15px; color: #991b1b; margin-bottom: 6px; }
    .friction-desc { font-size: 13px; color: #7f1d1d; margin-bottom: 10px; }
    .friction-examples { margin: 0 0 0 20px; font-size: 13px; color: #334155; }
    .friction-examples li { margin-bottom: 4px; }
    .claude-md-section { background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 16px; margin-bottom: 20px; }
    .claude-md-section h3 { font-size: 14px; font-weight: 600; color: #1e40af; margin: 0 0 12px 0; }
    .claude-md-actions { margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px solid #dbeafe; }
    .copy-all-btn { background: #2563eb; color: white; border: none; border-radius: 4px; padding: 6px 12px; font-size: 12px; cursor: pointer; font-weight: 500; transition: all 0.2s; }
    .copy-all-btn:hover { background: #1d4ed8; }
    .copy-all-btn.copied { background: #16a34a; }
    .claude-md-item { display: flex; flex-wrap: wrap; align-items: flex-start; gap: 8px; padding: 10px 0; border-bottom: 1px solid #dbeafe; }
    .claude-md-item:last-child { border-bottom: none; }
    .cmd-checkbox { margin-top: 2px; }
    .cmd-code { background: white; padding: 8px 12px; border-radius: 4px; font-size: 12px; color: #1e40af; border: 1px solid #bfdbfe; font-family: monospace; display: block; white-space: pre-wrap; word-break: break-word; flex: 1; }
    .cmd-why { font-size: 12px; color: #64748b; width: 100%; padding-left: 24px; margin-top: 4px; }
    .features-section, .patterns-section { display: flex; flex-direction: column; gap: 12px; margin: 16px 0; }
    .feature-card { background: #f0fdf4; border: 1px solid #86efac; border-radius: 8px; padding: 16px; }
    .pattern-card { background: #f0f9ff; border: 1px solid #7dd3fc; border-radius: 8px; padding: 16px; }
    .feature-title, .pattern-title { font-weight: 600; font-size: 15px; color: #0f172a; margin-bottom: 6px; }
    .feature-oneliner { font-size: 14px; color: #475569; margin-bottom: 8px; }
    .pattern-summary { font-size: 14px; color: #475569; margin-bottom: 8px; }
    .feature-why, .pattern-detail { font-size: 13px; color: #334155; line-height: 1.5; }
    .feature-examples { margin-top: 12px; }
    .feature-example { padding: 8px 0; border-top: 1px solid #d1fae5; }
    .feature-example:first-child { border-top: none; }
    .example-desc { font-size: 13px; color: #334155; margin-bottom: 6px; }
    .example-code-row { display: flex; align-items: flex-start; gap: 8px; }
    .example-code { flex: 1; background: #f1f5f9; padding: 8px 12px; border-radius: 4px; font-family: monospace; font-size: 12px; color: #334155; overflow-x: auto; white-space: pre-wrap; }
    .copyable-prompt-section { margin-top: 12px; padding-top: 12px; border-top: 1px solid #e2e8f0; }
    .copyable-prompt-row { display: flex; align-items: flex-start; gap: 8px; }
    .copyable-prompt { flex: 1; background: #f8fafc; padding: 10px 12px; border-radius: 4px; font-family: monospace; font-size: 12px; color: #334155; border: 1px solid #e2e8f0; white-space: pre-wrap; line-height: 1.5; }
    .feature-code { background: #f8fafc; padding: 12px; border-radius: 6px; margin-top: 12px; border: 1px solid #e2e8f0; display: flex; align-items: flex-start; gap: 8px; }
    .feature-code code { flex: 1; font-family: monospace; font-size: 12px; color: #334155; white-space: pre-wrap; }
    .pattern-prompt { background: #f8fafc; padding: 12px; border-radius: 6px; margin-top: 12px; border: 1px solid #e2e8f0; }
    .pattern-prompt code { font-family: monospace; font-size: 12px; color: #334155; display: block; white-space: pre-wrap; margin-bottom: 8px; }
    .prompt-label { font-size: 11px; font-weight: 600; text-transform: uppercase; color: #64748b; margin-bottom: 6px; }
    .copy-btn { background: #e2e8f0; border: none; border-radius: 4px; padding: 4px 8px; font-size: 11px; cursor: pointer; color: #475569; flex-shrink: 0; }
    .copy-btn:hover { background: #cbd5e1; }
    .charts-row { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 24px 0; }
    .chart-card { background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; }
    .chart-title { font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; margin-bottom: 12px; }
    .bar-row { display: flex; align-items: center; margin-bottom: 6px; }
    .bar-label { width: 100px; font-size: 11px; color: #475569; flex-shrink: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .bar-track { flex: 1; height: 6px; background: #f1f5f9; border-radius: 3px; margin: 0 8px; }
    .bar-fill { height: 100%; border-radius: 3px; }
    .bar-value { width: 28px; font-size: 11px; font-weight: 500; color: #64748b; text-align: right; }
    .empty { color: #94a3b8; font-size: 13px; }
    .horizon-section { display: flex; flex-direction: column; gap: 16px; }
    .horizon-card { background: linear-gradient(135deg, #faf5ff 0%, #f5f3ff 100%); border: 1px solid #c4b5fd; border-radius: 8px; padding: 16px; }
    .horizon-title { font-weight: 600; font-size: 15px; color: #5b21b6; margin-bottom: 8px; }
    .horizon-possible { font-size: 14px; color: #334155; margin-bottom: 10px; line-height: 1.5; }
    .horizon-tip { font-size: 13px; color: #6b21a8; background: rgba(255,255,255,0.6); padding: 8px 12px; border-radius: 4px; }
    .feedback-header { margin-top: 48px; color: #64748b; font-size: 16px; }
    .feedback-intro { font-size: 13px; color: #94a3b8; margin-bottom: 16px; }
    .feedback-section { margin-top: 16px; }
    .feedback-section h3 { font-size: 14px; font-weight: 600; color: #475569; margin-bottom: 12px; }
    .feedback-card { background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 12px; }
    .feedback-card.team-card { background: #eff6ff; border-color: #bfdbfe; }
    .feedback-card.model-card { background: #faf5ff; border-color: #e9d5ff; }
    .feedback-title { font-weight: 600; font-size: 14px; color: #0f172a; margin-bottom: 6px; }
    .feedback-detail { font-size: 13px; color: #475569; line-height: 1.5; }
    .feedback-evidence { font-size: 12px; color: #64748b; margin-top: 8px; }
    .fun-ending { background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border: 1px solid #fbbf24; border-radius: 12px; padding: 24px; margin-top: 40px; text-align: center; }
    .fun-headline { font-size: 18px; font-weight: 600; color: #78350f; margin-bottom: 8px; }
    .fun-detail { font-size: 14px; color: #92400e; }
    .collapsible-section { margin-top: 16px; }
    .collapsible-header { display: flex; align-items: center; gap: 8px; cursor: pointer; padding: 12px 0; border-bottom: 1px solid #e2e8f0; }
    .collapsible-header h3 { margin: 0; font-size: 14px; font-weight: 600; color: #475569; }
    .collapsible-arrow { font-size: 12px; color: #94a3b8; transition: transform 0.2s; }
    .collapsible-content { display: none; padding-top: 16px; }
    .collapsible-content.open { display: block; }
    .collapsible-header.open .collapsible-arrow { transform: rotate(90deg); }
    @media (max-width: 640px) { .charts-row { grid-template-columns: 1fr; } .stats-row { justify-content: center; } }
  `;
  const hourCountsJson = getHourCountsJson(data.message_hours);
  const js = `
    function toggleCollapsible(header) {
      header.classList.toggle('open');
      const content = header.nextElementSibling;
      content.classList.toggle('open');
    }
    function copyText(btn) {
      const code = btn.previousElementSibling;
      navigator.clipboard.writeText(code.textContent).then(() => {
        btn.textContent = 'Copied!';
        setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
      });
    }
    function copyCmdItem(idx) {
      const checkbox = document.getElementById('cmd-' + idx);
      if (checkbox) {
        const text = checkbox.dataset.text;
        navigator.clipboard.writeText(text).then(() => {
          const btn = checkbox.nextElementSibling.querySelector('.copy-btn');
          if (btn) { btn.textContent = 'Copied!'; setTimeout(() => { btn.textContent = 'Copy'; }, 2000); }
        });
      }
    }
    function copyAllCheckedClaudeMd() {
      const checkboxes = document.querySelectorAll('.cmd-checkbox:checked');
      const texts = [];
      checkboxes.forEach(cb => {
        if (cb.dataset.text) { texts.push(cb.dataset.text); }
      });
      const combined = texts.join('\\n');
      const btn = document.querySelector('.copy-all-btn');
      if (btn) {
        navigator.clipboard.writeText(combined).then(() => {
          btn.textContent = 'Copied ' + texts.length + ' items!';
          btn.classList.add('copied');
          setTimeout(() => { btn.textContent = 'Copy All Checked'; btn.classList.remove('copied'); }, 2000);
        });
      }
    }
    // Timezone selector for time of day chart (data is from our own analytics, not user input)
    const rawHourCounts = ${hourCountsJson};
    function updateHourHistogram(offsetFromPT) {
      const periods = [
        { label: "Morning (6-12)", range: [6,7,8,9,10,11] },
        { label: "Afternoon (12-18)", range: [12,13,14,15,16,17] },
        { label: "Evening (18-24)", range: [18,19,20,21,22,23] },
        { label: "Night (0-6)", range: [0,1,2,3,4,5] }
      ];
      const adjustedCounts = {};
      for (const [hour, count] of Object.entries(rawHourCounts)) {
        const newHour = (parseInt(hour) + offsetFromPT + 24) % 24;
        adjustedCounts[newHour] = (adjustedCounts[newHour] || 0) + count;
      }
      const periodCounts = periods.map(p => ({
        label: p.label,
        count: p.range.reduce((sum, h) => sum + (adjustedCounts[h] || 0), 0)
      }));
      const maxCount = Math.max(...periodCounts.map(p => p.count)) || 1;
      const container = document.getElementById('hour-histogram');
      container.textContent = '';
      periodCounts.forEach(p => {
        const row = document.createElement('div');
        row.className = 'bar-row';
        const label = document.createElement('div');
        label.className = 'bar-label';
        label.textContent = p.label;
        const track = document.createElement('div');
        track.className = 'bar-track';
        const fill = document.createElement('div');
        fill.className = 'bar-fill';
        fill.style.width = (p.count / maxCount) * 100 + '%';
        fill.style.background = '#8b5cf6';
        track.appendChild(fill);
        const value = document.createElement('div');
        value.className = 'bar-value';
        value.textContent = p.count;
        row.appendChild(label);
        row.appendChild(track);
        row.appendChild(value);
        container.appendChild(row);
      });
    }
    document.getElementById('timezone-select').addEventListener('change', function() {
      const customInput = document.getElementById('custom-offset');
      if (this.value === 'custom') {
        customInput.style.display = 'inline-block';
        customInput.focus();
      } else {
        customInput.style.display = 'none';
        updateHourHistogram(parseInt(this.value));
      }
    });
    document.getElementById('custom-offset').addEventListener('change', function() {
      const offset = parseInt(this.value) + 8;
      updateHourHistogram(offset);
    });
  `;
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>MiMo Code Insights</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>${css}</style>
</head>
<body>
  <div class="container">
    <h1>MiMo Code Insights</h1>
    <p class="subtitle">${data.total_messages.toLocaleString()} messages across ${data.total_sessions} sessions${data.total_sessions_scanned && data.total_sessions_scanned > data.total_sessions ? ` (${data.total_sessions_scanned.toLocaleString()} total)` : ""} | ${data.date_range.start} to ${data.date_range.end}</p>

    ${atAGlanceHtml}

    <nav class="nav-toc">
      <a href="#section-work">What You Work On</a>
      <a href="#section-usage">How You Use CC</a>
      <a href="#section-wins">Impressive Things</a>
      <a href="#section-friction">Where Things Go Wrong</a>
      <a href="#section-features">Features to Try</a>
      <a href="#section-patterns">New Usage Patterns</a>
      <a href="#section-horizon">On the Horizon</a>
      <a href="#section-feedback">Team Feedback</a>
    </nav>

    <div class="stats-row">
      <div class="stat"><div class="stat-value">${data.total_messages.toLocaleString()}</div><div class="stat-label">Messages</div></div>
      <div class="stat"><div class="stat-value">+${data.total_lines_added.toLocaleString()}/-${data.total_lines_removed.toLocaleString()}</div><div class="stat-label">Lines</div></div>
      <div class="stat"><div class="stat-value">${data.total_files_modified}</div><div class="stat-label">Files</div></div>
      <div class="stat"><div class="stat-value">${data.days_active}</div><div class="stat-label">Days</div></div>
      <div class="stat"><div class="stat-value">${data.messages_per_day}</div><div class="stat-label">Msgs/Day</div></div>
    </div>

    ${projectAreasHtml}

    <div class="charts-row">
      <div class="chart-card">
        <div class="chart-title">What You Wanted</div>
        ${generateBarChart(data.goal_categories, "#2563eb")}
      </div>
      <div class="chart-card">
        <div class="chart-title">Top Tools Used</div>
        ${generateBarChart(data.tool_counts, "#0891b2")}
      </div>
    </div>

    <div class="charts-row">
      <div class="chart-card">
        <div class="chart-title">Languages</div>
        ${generateBarChart(data.languages, "#10b981")}
      </div>
      <div class="chart-card">
        <div class="chart-title">Session Types</div>
        ${generateBarChart(data.session_types || {}, "#8b5cf6")}
      </div>
    </div>

    ${interactionHtml}

    <!-- Response Time Distribution -->
    <div class="chart-card" style="margin: 24px 0;">
      <div class="chart-title">User Response Time Distribution</div>
      ${generateResponseTimeHistogram(data.user_response_times)}
      <div style="font-size: 12px; color: #64748b; margin-top: 8px;">
        Median: ${data.median_response_time.toFixed(1)}s &bull; Average: ${data.avg_response_time.toFixed(1)}s
      </div>
    </div>

    <!-- Multi-clauding Section (matching Python reference) -->
    <div class="chart-card" style="margin: 24px 0;">
      <div class="chart-title">Multi-Clauding (Parallel Sessions)</div>
      ${data.multi_clauding.overlap_events === 0 ? `
        <p style="font-size: 14px; color: #64748b; padding: 8px 0;">
          No parallel session usage detected. You typically work with one MiMo Code session at a time.
        </p>
      ` : `
        <div style="display: flex; gap: 24px; margin: 12px 0;">
          <div style="text-align: center;">
            <div style="font-size: 24px; font-weight: 700; color: #7c3aed;">${data.multi_clauding.overlap_events}</div>
            <div style="font-size: 11px; color: #64748b; text-transform: uppercase;">Overlap Events</div>
          </div>
          <div style="text-align: center;">
            <div style="font-size: 24px; font-weight: 700; color: #7c3aed;">${data.multi_clauding.sessions_involved}</div>
            <div style="font-size: 11px; color: #64748b; text-transform: uppercase;">Sessions Involved</div>
          </div>
          <div style="text-align: center;">
            <div style="font-size: 24px; font-weight: 700; color: #7c3aed;">${data.total_messages > 0 ? Math.round(100 * data.multi_clauding.user_messages_during / data.total_messages) : 0}%</div>
            <div style="font-size: 11px; color: #64748b; text-transform: uppercase;">Of Messages</div>
          </div>
        </div>
        <p style="font-size: 13px; color: #475569; margin-top: 12px;">
          You run multiple MiMo Code sessions simultaneously. Multi-clauding is detected when sessions
          overlap in time, suggesting parallel workflows.
        </p>
      `}
    </div>

    <!-- Time of Day & Tool Errors -->
    <div class="charts-row">
      <div class="chart-card">
        <div class="chart-title" style="display: flex; align-items: center; gap: 12px;">
          User Messages by Time of Day
          <select id="timezone-select" style="font-size: 12px; padding: 4px 8px; border-radius: 4px; border: 1px solid #e2e8f0;">
            <option value="0">PT (UTC-8)</option>
            <option value="3">ET (UTC-5)</option>
            <option value="8">London (UTC)</option>
            <option value="9">CET (UTC+1)</option>
            <option value="17">Tokyo (UTC+9)</option>
            <option value="custom">Custom offset...</option>
          </select>
          <input type="number" id="custom-offset" placeholder="UTC offset" style="display: none; width: 80px; font-size: 12px; padding: 4px; border-radius: 4px; border: 1px solid #e2e8f0;">
        </div>
        ${generateTimeOfDayChart(data.message_hours)}
      </div>
      <div class="chart-card">
        <div class="chart-title">Tool Errors Encountered</div>
        ${Object.keys(data.tool_error_categories).length > 0 ? generateBarChart(data.tool_error_categories, "#dc2626") : '<p class="empty">No tool errors</p>'}
      </div>
    </div>

    ${whatWorksHtml}

    <div class="charts-row">
      <div class="chart-card">
        <div class="chart-title">What Helped Most (Claude's Capabilities)</div>
        ${generateBarChart(data.success, "#16a34a")}
      </div>
      <div class="chart-card">
        <div class="chart-title">Outcomes</div>
        ${generateBarChart(data.outcomes, "#8b5cf6", 6, OUTCOME_ORDER)}
      </div>
    </div>

    ${frictionHtml}

    <div class="charts-row">
      <div class="chart-card">
        <div class="chart-title">Primary Friction Types</div>
        ${generateBarChart(data.friction, "#dc2626")}
      </div>
      <div class="chart-card">
        <div class="chart-title">Inferred Satisfaction (model-estimated)</div>
        ${generateBarChart(data.satisfaction, "#eab308", 6, SATISFACTION_ORDER)}
      </div>
    </div>

    ${suggestionsHtml}

    ${horizonHtml}

    ${funEndingHtml}

    ${teamFeedbackHtml}
  </div>
  <script>${js}</script>
</body>
</html>`;
}
function buildExportData(data, insights, facets, remoteStats) {
  const version = typeof MACRO !== "undefined" ? "1.0.0" : "unknown";
  const remote_hosts_collected = remoteStats?.hosts.filter((h) => h.sessionCount > 0).map((h) => h.name);
  const facets_summary = {
    total: facets.size,
    goal_categories: {},
    outcomes: {},
    satisfaction: {},
    friction: {}
  };
  for (const f of facets.values()) {
    for (const [cat, count] of safeEntries(f.goal_categories)) {
      if (count > 0) {
        facets_summary.goal_categories[cat] = (facets_summary.goal_categories[cat] || 0) + count;
      }
    }
    facets_summary.outcomes[f.outcome] = (facets_summary.outcomes[f.outcome] || 0) + 1;
    for (const [level, count] of safeEntries(f.user_satisfaction_counts)) {
      if (count > 0) {
        facets_summary.satisfaction[level] = (facets_summary.satisfaction[level] || 0) + count;
      }
    }
    for (const [type, count] of safeEntries(f.friction_counts)) {
      if (count > 0) {
        facets_summary.friction[type] = (facets_summary.friction[type] || 0) + count;
      }
    }
  }
  return {
    metadata: {
      username: process.env.SAFEUSER || process.env.USER || "unknown",
      generated_at: new Date().toISOString(),
      claude_code_version: version,
      date_range: data.date_range,
      session_count: data.total_sessions,
      ...remote_hosts_collected && remote_hosts_collected.length > 0 && {
        remote_hosts_collected
      }
    },
    aggregated_data: data,
    insights,
    facets_summary
  };
}
async function scanAllSessions() {
  const projectsDir = getProjectsDir();
  let dirents;
  try {
    dirents = await readdir(projectsDir, { withFileTypes: true });
  } catch {
    return [];
  }
  const projectDirs = dirents.filter((dirent) => dirent.isDirectory()).map((dirent) => join(projectsDir, dirent.name));
  const allSessions = [];
  for (let i = 0;i < projectDirs.length; i++) {
    const sessionFiles = await getSessionFilesWithMtime(projectDirs[i]);
    for (const [sessionId, fileInfo] of sessionFiles) {
      allSessions.push({
        sessionId,
        path: fileInfo.path,
        mtime: fileInfo.mtime,
        size: fileInfo.size
      });
    }
    if (i % 10 === 9) {
      await new Promise((resolve) => setImmediate(resolve));
    }
  }
  allSessions.sort((a, b) => b.mtime - a.mtime);
  return allSessions;
}
async function generateUsageReport(options) {
  let remoteStats;
  if (process.env.USER_TYPE === "ant" && options?.collectRemote) {
    const destDir = join(getClaudeConfigHomeDir(), "projects");
    const { hosts, totalCopied } = await collectAllRemoteHostData(destDir);
    remoteStats = { hosts, totalCopied };
  }
  const allScannedSessions = await scanAllSessions();
  const totalSessionsScanned = allScannedSessions.length;
  const META_BATCH_SIZE = 50;
  const MAX_SESSIONS_TO_LOAD = 200;
  let allMetas = [];
  const uncachedSessions = [];
  for (let i = 0;i < allScannedSessions.length; i += META_BATCH_SIZE) {
    const batch = allScannedSessions.slice(i, i + META_BATCH_SIZE);
    const results = await Promise.all(batch.map(async (sessionInfo) => ({
      sessionInfo,
      cached: await loadCachedSessionMeta(sessionInfo.sessionId)
    })));
    for (const { sessionInfo, cached } of results) {
      if (cached) {
        allMetas.push(cached);
      } else if (uncachedSessions.length < MAX_SESSIONS_TO_LOAD) {
        uncachedSessions.push(sessionInfo);
      }
    }
  }
  const logsForFacets = new Map;
  const isMetaSession = (log) => {
    for (const msg of log.messages.slice(0, 5)) {
      if (msg.type === "user" && msg.message) {
        const content = msg.message.content;
        if (typeof content === "string") {
          if (content.includes("RESPOND WITH ONLY A VALID JSON OBJECT") || content.includes("record_facets")) {
            return true;
          }
        }
      }
    }
    return false;
  };
  const LOAD_BATCH_SIZE = 10;
  for (let i = 0;i < uncachedSessions.length; i += LOAD_BATCH_SIZE) {
    const batch = uncachedSessions.slice(i, i + LOAD_BATCH_SIZE);
    const batchResults = await Promise.all(batch.map(async (sessionInfo) => {
      try {
        return await loadAllLogsFromSessionFile(sessionInfo.path);
      } catch {
        return [];
      }
    }));
    const metasToSave = [];
    for (const logs of batchResults) {
      for (const log of logs) {
        if (isMetaSession(log) || !hasValidDates(log))
          continue;
        const meta = logToSessionMeta(log);
        allMetas.push(meta);
        metasToSave.push(meta);
        logsForFacets.set(meta.session_id, log);
      }
    }
    await Promise.all(metasToSave.map((meta) => saveSessionMeta(meta)));
  }
  const bestBySession = new Map;
  for (const meta of allMetas) {
    const existing = bestBySession.get(meta.session_id);
    if (!existing || meta.user_message_count > existing.user_message_count || meta.user_message_count === existing.user_message_count && meta.duration_minutes > existing.duration_minutes) {
      bestBySession.set(meta.session_id, meta);
    }
  }
  const keptSessionIds = new Set(bestBySession.keys());
  allMetas = [...bestBySession.values()];
  for (const sessionId of logsForFacets.keys()) {
    if (!keptSessionIds.has(sessionId)) {
      logsForFacets.delete(sessionId);
    }
  }
  allMetas.sort((a, b) => b.start_time.localeCompare(a.start_time));
  const isSubstantiveSession = (meta) => {
    if (meta.user_message_count < 2)
      return false;
    if (meta.duration_minutes < 1)
      return false;
    return true;
  };
  const substantiveMetas = allMetas.filter(isSubstantiveSession);
  const facets = new Map;
  const toExtract = [];
  const MAX_FACET_EXTRACTIONS = 50;
  const cachedFacetResults = await Promise.all(substantiveMetas.map(async (meta) => ({
    sessionId: meta.session_id,
    cached: await loadCachedFacets(meta.session_id)
  })));
  for (const { sessionId, cached } of cachedFacetResults) {
    if (cached) {
      facets.set(sessionId, cached);
    } else {
      const log = logsForFacets.get(sessionId);
      if (log && toExtract.length < MAX_FACET_EXTRACTIONS) {
        toExtract.push({ log, sessionId });
      }
    }
  }
  const CONCURRENCY = 50;
  for (let i = 0;i < toExtract.length; i += CONCURRENCY) {
    const batch = toExtract.slice(i, i + CONCURRENCY);
    const results = await Promise.all(batch.map(async ({ log, sessionId }) => {
      const newFacets = await extractFacetsFromAPI(log, sessionId);
      return { sessionId, newFacets };
    }));
    const facetsToSave = [];
    for (const { sessionId, newFacets } of results) {
      if (newFacets) {
        facets.set(sessionId, newFacets);
        facetsToSave.push(newFacets);
      }
    }
    await Promise.all(facetsToSave.map((f) => saveFacets(f)));
  }
  const isMinimalSession = (sessionId) => {
    const sessionFacets = facets.get(sessionId);
    if (!sessionFacets)
      return false;
    const cats = sessionFacets.goal_categories;
    const catKeys = safeKeys(cats).filter((k) => (cats[k] ?? 0) > 0);
    return catKeys.length === 1 && catKeys[0] === "warmup_minimal";
  };
  const substantiveSessions = substantiveMetas.filter((s) => !isMinimalSession(s.session_id));
  const substantiveFacets = new Map;
  for (const [sessionId, f] of facets) {
    if (!isMinimalSession(sessionId)) {
      substantiveFacets.set(sessionId, f);
    }
  }
  const aggregated = aggregateData(substantiveSessions, substantiveFacets);
  aggregated.total_sessions_scanned = totalSessionsScanned;
  const insights = await generateParallelInsights(aggregated, facets);
  const htmlReport = generateHtmlReport(aggregated, insights);
  try {
    await mkdir(getDataDir(), { recursive: true });
  } catch {}
  const htmlPath = join(getDataDir(), "report.html");
  await writeFile(htmlPath, htmlReport, {
    encoding: "utf-8",
    mode: 384
  });
  return {
    insights,
    htmlPath,
    data: aggregated,
    remoteStats,
    facets: substantiveFacets
  };
}
function safeEntries(obj) {
  return obj ? Object.entries(obj) : [];
}
function safeKeys(obj) {
  return obj ? Object.keys(obj) : [];
}
function isValidSessionFacets(obj) {
  if (!obj || typeof obj !== "object")
    return false;
  const o = obj;
  return typeof o.underlying_goal === "string" && typeof o.outcome === "string" && typeof o.brief_summary === "string" && o.goal_categories !== null && typeof o.goal_categories === "object" && o.user_satisfaction_counts !== null && typeof o.user_satisfaction_counts === "object" && o.friction_counts !== null && typeof o.friction_counts === "object";
}
var getRunningRemoteHosts, getRemoteHostSessionCount, collectFromRemoteHost, collectAllRemoteHostData, EXTENSION_TO_LANGUAGE, LABEL_MAP, FACET_EXTRACTION_PROMPT = `Analyze this MiMo Code session and extract structured facets.

CRITICAL GUIDELINES:

1. **goal_categories**: Count ONLY what the USER explicitly asked for.
   - DO NOT count Claude's autonomous codebase exploration
   - DO NOT count work Claude decided to do on its own
   - ONLY count when user says "can you...", "please...", "I need...", "let's..."

2. **user_satisfaction_counts**: Base ONLY on explicit user signals.
   - "Yay!", "great!", "perfect!" \u2192 happy
   - "thanks", "looks good", "that works" \u2192 satisfied
   - "ok, now let's..." (continuing without complaint) \u2192 likely_satisfied
   - "that's not right", "try again" \u2192 dissatisfied
   - "this is broken", "I give up" \u2192 frustrated

3. **friction_counts**: Be specific about what went wrong.
   - misunderstood_request: Claude interpreted incorrectly
   - wrong_approach: Right goal, wrong solution method
   - buggy_code: Code didn't work correctly
   - user_rejected_action: User said no/stop to a tool call
   - excessive_changes: Over-engineered or changed too much

4. If very short or just warmup, use warmup_minimal for goal_category

SESSION:
`, SUMMARIZE_CHUNK_PROMPT = `Summarize this portion of a MiMo Code session transcript. Focus on:
1. What the user asked for
2. What Claude did (tools used, files modified)
3. Any friction or issues
4. The outcome

Keep it concise - 3-5 sentences. Preserve specific details like file names, error messages, and user feedback.

TRANSCRIPT CHUNK:
`, INSIGHT_SECTIONS, SATISFACTION_ORDER, OUTCOME_ORDER, usageReport, insights_default;
var init_insights = __esm(() => {
  init_libesm();
  init_claude();
  init_constants();
  init_envUtils();
  init_errors();
  init_execFileNoThrow();
  init_log();
  init_messages();
  init_model();
  init_sessionStorage();
  init_slowOperations();
  init_stringUtils();
  init_systemPromptType();
  init_xml();
  getRunningRemoteHosts = process.env.USER_TYPE === "ant" ? async () => {
    const { stdout, code } = await execFileNoThrow("coder", ["list", "-o", "json"], { timeout: 30000 });
    if (code !== 0)
      return [];
    try {
      const workspaces = jsonParse(stdout);
      return workspaces.filter((w) => w.latest_build?.status === "running").map((w) => w.name);
    } catch {
      return [];
    }
  } : async () => [];
  getRemoteHostSessionCount = process.env.USER_TYPE === "ant" ? async (homespace) => {
    const { stdout, code } = await execFileNoThrow("ssh", [
      `${homespace}.coder`,
      'find /root/.claude/projects -name "*.jsonl" 2>/dev/null | wc -l'
    ], { timeout: 30000 });
    if (code !== 0)
      return 0;
    return parseInt(stdout.trim(), 10) || 0;
  } : async () => 0;
  collectFromRemoteHost = process.env.USER_TYPE === "ant" ? async (homespace, destDir) => {
    const result = { copied: 0, skipped: 0 };
    const tempDir = await mkdtemp(join(tmpdir(), "claude-hs-"));
    try {
      const scpResult = await execFileNoThrow("scp", ["-rq", `${homespace}.coder:/root/.claude/projects/`, tempDir], { timeout: 300000 });
      if (scpResult.code !== 0) {
        return result;
      }
      const projectsDir = join(tempDir, "projects");
      let projectDirents;
      try {
        projectDirents = await readdir(projectsDir, { withFileTypes: true });
      } catch {
        return result;
      }
      await Promise.all(projectDirents.map(async (dirent) => {
        const projectName = dirent.name;
        const projectPath = join(projectsDir, projectName);
        if (!dirent.isDirectory())
          return;
        const destProjectName = `${projectName}__${homespace}`;
        const destProjectPath = join(destDir, destProjectName);
        try {
          await mkdir(destProjectPath, { recursive: true });
        } catch {}
        let files;
        try {
          files = await readdir(projectPath, { withFileTypes: true });
        } catch {
          return;
        }
        await Promise.all(files.map(async (fileDirent) => {
          const fileName = fileDirent.name;
          if (!fileName.endsWith(".jsonl"))
            return;
          const srcFile = join(projectPath, fileName);
          const destFile = join(destProjectPath, fileName);
          try {
            await copyFile(srcFile, destFile, fsConstants.COPYFILE_EXCL);
            result.copied++;
          } catch {
            result.skipped++;
          }
        }));
      }));
    } finally {
      try {
        await rm(tempDir, { recursive: true, force: true });
      } catch {}
    }
    return result;
  } : async () => ({ copied: 0, skipped: 0 });
  collectAllRemoteHostData = process.env.USER_TYPE === "ant" ? async (destDir) => {
    const rHosts = await getRunningRemoteHosts();
    const result = [];
    let totalCopied = 0;
    let totalSkipped = 0;
    const hostResults = await Promise.all(rHosts.map(async (hs) => {
      const sessionCount = await getRemoteHostSessionCount(hs);
      if (sessionCount > 0) {
        const { copied, skipped } = await collectFromRemoteHost(hs, destDir);
        return { name: hs, sessionCount, copied, skipped };
      }
      return { name: hs, sessionCount, copied: 0, skipped: 0 };
    }));
    for (const hr of hostResults) {
      result.push({ name: hr.name, sessionCount: hr.sessionCount });
      totalCopied += hr.copied;
      totalSkipped += hr.skipped;
    }
    return { hosts: result, totalCopied, totalSkipped };
  } : async () => ({ hosts: [], totalCopied: 0, totalSkipped: 0 });
  EXTENSION_TO_LANGUAGE = {
    ".ts": "TypeScript",
    ".tsx": "TypeScript",
    ".js": "JavaScript",
    ".jsx": "JavaScript",
    ".py": "Python",
    ".rb": "Ruby",
    ".go": "Go",
    ".rs": "Rust",
    ".java": "Java",
    ".md": "Markdown",
    ".json": "JSON",
    ".yaml": "YAML",
    ".yml": "YAML",
    ".sh": "Shell",
    ".css": "CSS",
    ".html": "HTML"
  };
  LABEL_MAP = {
    debug_investigate: "Debug/Investigate",
    implement_feature: "Implement Feature",
    fix_bug: "Fix Bug",
    write_script_tool: "Write Script/Tool",
    refactor_code: "Refactor Code",
    configure_system: "Configure System",
    create_pr_commit: "Create PR/Commit",
    analyze_data: "Analyze Data",
    understand_codebase: "Understand Codebase",
    write_tests: "Write Tests",
    write_docs: "Write Docs",
    deploy_infra: "Deploy/Infra",
    warmup_minimal: "Cache Warmup",
    fast_accurate_search: "Fast/Accurate Search",
    correct_code_edits: "Correct Code Edits",
    good_explanations: "Good Explanations",
    proactive_help: "Proactive Help",
    multi_file_changes: "Multi-file Changes",
    handled_complexity: "Multi-file Changes",
    good_debugging: "Good Debugging",
    misunderstood_request: "Misunderstood Request",
    wrong_approach: "Wrong Approach",
    buggy_code: "Buggy Code",
    user_rejected_action: "User Rejected Action",
    claude_got_blocked: "MiMo Got Blocked",
    user_stopped_early: "User Stopped Early",
    wrong_file_or_location: "Wrong File/Location",
    excessive_changes: "Excessive Changes",
    slow_or_verbose: "Slow/Verbose",
    tool_failed: "Tool Failed",
    user_unclear: "User Unclear",
    external_issue: "External Issue",
    frustrated: "Frustrated",
    dissatisfied: "Dissatisfied",
    likely_satisfied: "Likely Satisfied",
    satisfied: "Satisfied",
    happy: "Happy",
    unsure: "Unsure",
    neutral: "Neutral",
    delighted: "Delighted",
    single_task: "Single Task",
    multi_task: "Multi Task",
    iterative_refinement: "Iterative Refinement",
    exploration: "Exploration",
    quick_question: "Quick Question",
    fully_achieved: "Fully Achieved",
    mostly_achieved: "Mostly Achieved",
    partially_achieved: "Partially Achieved",
    not_achieved: "Not Achieved",
    unclear_from_transcript: "Unclear",
    unhelpful: "Unhelpful",
    slightly_helpful: "Slightly Helpful",
    moderately_helpful: "Moderately Helpful",
    very_helpful: "Very Helpful",
    essential: "Essential"
  };
  INSIGHT_SECTIONS = [
    {
      name: "project_areas",
      prompt: `Analyze this MiMo Code usage data and identify project areas.

RESPOND WITH ONLY A VALID JSON OBJECT:
{
  "areas": [
    {"name": "Area name", "session_count": N, "description": "2-3 sentences about what was worked on and how MiMo Code was used."}
  ]
}

Include 4-5 areas. Skip internal CC operations.`,
      maxTokens: 8192
    },
    {
      name: "interaction_style",
      prompt: `Analyze this MiMo Code usage data and describe the user's interaction style.

RESPOND WITH ONLY A VALID JSON OBJECT:
{
  "narrative": "2-3 paragraphs analyzing HOW the user interacts with MiMo Code. Use second person 'you'. Describe patterns: iterate quickly vs detailed upfront specs? Interrupt often or let MiMo run? Include specific examples. Use **bold** for key insights.",
  "key_pattern": "One sentence summary of most distinctive interaction style"
}`,
      maxTokens: 8192
    },
    {
      name: "what_works",
      prompt: `Analyze this MiMo Code usage data and identify what's working well for this user. Use second person ("you").

RESPOND WITH ONLY A VALID JSON OBJECT:
{
  "intro": "1 sentence of context",
  "impressive_workflows": [
    {"title": "Short title (3-6 words)", "description": "2-3 sentences describing the impressive workflow or approach. Use 'you' not 'the user'."}
  ]
}

Include 3 impressive workflows.`,
      maxTokens: 8192
    },
    {
      name: "friction_analysis",
      prompt: `Analyze this MiMo Code usage data and identify friction points for this user. Use second person ("you").

RESPOND WITH ONLY A VALID JSON OBJECT:
{
  "intro": "1 sentence summarizing friction patterns",
  "categories": [
    {"category": "Concrete category name", "description": "1-2 sentences explaining this category and what could be done differently. Use 'you' not 'the user'.", "examples": ["Specific example with consequence", "Another example"]}
  ]
}

Include 3 friction categories with 2 examples each.`,
      maxTokens: 8192
    },
    {
      name: "suggestions",
      prompt: `Analyze this MiMo Code usage data and suggest improvements.

## CC FEATURES REFERENCE (pick from these for features_to_try):
1. **MCP Servers**: Connect Claude to external tools, databases, and APIs via Model Context Protocol.
   - How to use: Run \`mimo mcp add <server-name> -- <command>\`
   - Good for: database queries, Slack integration, GitHub issue lookup, connecting to internal APIs

2. **Custom Skills**: Reusable prompts you define as markdown files that run with a single /command.
   - How to use: Create \`.claude/skills/commit/SKILL.md\` with instructions. Then type \`/commit\` to run it.
   - Good for: repetitive workflows - /commit, /review, /test, /deploy, /pr, or complex multi-step workflows

3. **Hooks**: Shell commands that auto-run at specific lifecycle events.
   - How to use: Add to \`.claude/settings.json\` under "hooks" key.
   - Good for: auto-formatting code, running type checks, enforcing conventions

4. **Headless Mode**: Run Claude non-interactively from scripts and CI/CD.
   - How to use: \`claude -p "fix lint errors" --allowedTools "Edit,Read,Bash"\`
   - Good for: CI/CD integration, batch code fixes, automated reviews

5. **Task Agents**: Claude spawns focused sub-agents for complex exploration or parallel work.
   - How to use: Claude auto-invokes when helpful, or ask "use an agent to explore X"
   - Good for: codebase exploration, understanding complex systems

RESPOND WITH ONLY A VALID JSON OBJECT:
{
  "claude_md_additions": [
    {"addition": "A specific line or block to add to CLAUDE.md based on workflow patterns. E.g., 'Always run tests after modifying auth-related files'", "why": "1 sentence explaining why this would help based on actual sessions", "prompt_scaffold": "Instructions for where to add this in CLAUDE.md. E.g., 'Add under ## Testing section'"}
  ],
  "features_to_try": [
    {"feature": "Feature name from CC FEATURES REFERENCE above", "one_liner": "What it does", "why_for_you": "Why this would help YOU based on your sessions", "example_code": "Actual command or config to copy"}
  ],
  "usage_patterns": [
    {"title": "Short title", "suggestion": "1-2 sentence summary", "detail": "3-4 sentences explaining how this applies to YOUR work", "copyable_prompt": "A specific prompt to copy and try"}
  ]
}

IMPORTANT for claude_md_additions: PRIORITIZE instructions that appear MULTIPLE TIMES in the user data. If user told Claude the same thing in 2+ sessions (e.g., 'always run tests', 'use TypeScript'), that's a PRIME candidate - they shouldn't have to repeat themselves.

IMPORTANT for features_to_try: Pick 2-3 from the CC FEATURES REFERENCE above. Include 2-3 items for each category.`,
      maxTokens: 8192
    },
    {
      name: "on_the_horizon",
      prompt: `Analyze this MiMo Code usage data and identify future opportunities.

RESPOND WITH ONLY A VALID JSON OBJECT:
{
  "intro": "1 sentence about evolving AI-assisted development",
  "opportunities": [
    {"title": "Short title (4-8 words)", "whats_possible": "2-3 ambitious sentences about autonomous workflows", "how_to_try": "1-2 sentences mentioning relevant tooling", "copyable_prompt": "Detailed prompt to try"}
  ]
}

Include 3 opportunities. Think BIG - autonomous workflows, parallel agents, iterating against tests.`,
      maxTokens: 8192
    },
    ...process.env.USER_TYPE === "ant" ? [
      {
        name: "cc_team_improvements",
        prompt: `Analyze this MiMo Code usage data and suggest product improvements for the CC team.

RESPOND WITH ONLY A VALID JSON OBJECT:
{
  "improvements": [
    {"title": "Product/tooling improvement", "detail": "3-4 sentences describing the improvement", "evidence": "3-4 sentences with specific session examples"}
  ]
}

Include 2-3 improvements based on friction patterns observed.`,
        maxTokens: 8192
      },
      {
        name: "model_behavior_improvements",
        prompt: `Analyze this MiMo Code usage data and suggest model behavior improvements.

RESPOND WITH ONLY A VALID JSON OBJECT:
{
  "improvements": [
    {"title": "Model behavior change", "detail": "3-4 sentences describing what the model should do differently", "evidence": "3-4 sentences with specific examples"}
  ]
}

Include 2-3 improvements based on friction patterns observed.`,
        maxTokens: 8192
      }
    ] : [],
    {
      name: "fun_ending",
      prompt: `Analyze this MiMo Code usage data and find a memorable moment.

RESPOND WITH ONLY A VALID JSON OBJECT:
{
  "headline": "A memorable QUALITATIVE moment from the transcripts - not a statistic. Something human, funny, or surprising.",
  "detail": "Brief context about when/where this happened"
}

Find something genuinely interesting or amusing from the session summaries.`,
      maxTokens: 8192
    }
  ];
  SATISFACTION_ORDER = [
    "frustrated",
    "dissatisfied",
    "likely_satisfied",
    "satisfied",
    "happy",
    "unsure"
  ];
  OUTCOME_ORDER = [
    "not_achieved",
    "partially_achieved",
    "mostly_achieved",
    "fully_achieved",
    "unclear_from_transcript"
  ];
  usageReport = {
    type: "prompt",
    name: "insights",
    description: "Generate a report analyzing your MiMo Code sessions",
    contentLength: 0,
    progressMessage: "analyzing your sessions",
    source: "builtin",
    async getPromptForCommand(args) {
      let collectRemote = false;
      let remoteHosts = [];
      let hasRemoteHosts = false;
      if (process.env.USER_TYPE === "ant") {
        collectRemote = args?.includes("--homespaces") ?? false;
        remoteHosts = await getRunningRemoteHosts();
        hasRemoteHosts = remoteHosts.length > 0;
        if (collectRemote && hasRemoteHosts) {
          console.error(`Collecting sessions from ${remoteHosts.length} homespace(s): ${remoteHosts.join(", ")}...`);
        }
      }
      const { insights, htmlPath, data, remoteStats } = await generateUsageReport({ collectRemote });
      let reportUrl = `file://${htmlPath}`;
      let uploadHint = "";
      if (process.env.USER_TYPE === "ant") {
        const timestamp = new Date().toISOString().replace(/[-:]/g, "").replace("T", "_").slice(0, 15);
        const username = process.env.SAFEUSER || process.env.USER || "unknown";
        const filename = `${username}_insights_${timestamp}.html`;
        const s3Path = `s3://anthropic-serve/atamkin/cc-user-reports/${filename}`;
        const s3Url = `https://s3-frontend.infra.ant.dev/anthropic-serve/atamkin/cc-user-reports/${filename}`;
        reportUrl = s3Url;
        try {
          execFileSync("ff", ["cp", htmlPath, s3Path], {
            timeout: 60000,
            stdio: "pipe"
          });
        } catch {
          reportUrl = `file://${htmlPath}`;
          uploadHint = `
Automatic upload failed. Are you on the boron namespace? Try \`use-bo\` and ensure you've run \`sso\`.
To share, run: ff cp ${htmlPath} ${s3Path}
Then access at: ${s3Url}`;
        }
      }
      const sessionLabel = data.total_sessions_scanned && data.total_sessions_scanned > data.total_sessions ? `${data.total_sessions_scanned.toLocaleString()} sessions total \xB7 ${data.total_sessions} analyzed` : `${data.total_sessions} sessions`;
      const stats = [
        sessionLabel,
        `${data.total_messages.toLocaleString()} messages`,
        `${Math.round(data.total_duration_hours)}h`,
        `${data.git_commits} commits`
      ].join(" \xB7 ");
      let remoteInfo = "";
      if (process.env.USER_TYPE === "ant") {
        if (remoteStats && remoteStats.totalCopied > 0) {
          const hsNames = remoteStats.hosts.filter((h) => h.sessionCount > 0).map((h) => h.name).join(", ");
          remoteInfo = `
_Collected ${remoteStats.totalCopied} new sessions from: ${hsNames}_
`;
        } else if (!collectRemote && hasRemoteHosts) {
          remoteInfo = `
_Tip: Run \`/insights --homespaces\` to include sessions from your ${remoteHosts.length} running homespace(s)_
`;
        }
      }
      const atAGlance = insights.at_a_glance;
      const summaryText = atAGlance ? `## At a Glance

${atAGlance.whats_working ? `**What's working:** ${atAGlance.whats_working} See _Impressive Things You Did_.` : ""}

${atAGlance.whats_hindering ? `**What's hindering you:** ${atAGlance.whats_hindering} See _Where Things Go Wrong_.` : ""}

${atAGlance.quick_wins ? `**Quick wins to try:** ${atAGlance.quick_wins} See _Features to Try_.` : ""}

${atAGlance.ambitious_workflows ? `**Ambitious workflows:** ${atAGlance.ambitious_workflows} See _On the Horizon_.` : ""}` : "_No insights generated_";
      const header = `# MiMo Code Insights

${stats}
${data.date_range.start} to ${data.date_range.end}
${remoteInfo}
`;
      const userSummary = `${header}${summaryText}

Your full shareable insights report is ready: ${reportUrl}${uploadHint}`;
      return [
        {
          type: "text",
          text: `The user just ran /insights to generate a usage report analyzing their MiMo Code sessions.

Here is the full insights data:
${jsonStringify(insights, null, 2)}

Report URL: ${reportUrl}
HTML file: ${htmlPath}
Facets directory: ${getFacetsDir()}

Here is what the user sees:
${userSummary}

Now output the following message exactly:

<message>
Your shareable insights report is ready:
${reportUrl}${uploadHint}

Want to dig into any section or try one of the suggestions?
</message>`
        }
      ];
    }
  };
  insights_default = usageReport;
});
init_insights();

export {
  generateUsageReport,
  detectMultiClauding,
  insights_default as default,
  deduplicateSessionBranches,
  buildExportData
};
