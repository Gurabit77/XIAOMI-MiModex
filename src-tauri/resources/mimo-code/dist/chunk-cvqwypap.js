// @bun
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/services/skillLearning/observationStore.ts
import { mkdir, readFile, rename, stat, writeFile } from "fs/promises";
import { dirname, join } from "path";
import { createHash, randomUUID } from "crypto";
function getSkillLearningRoot(options) {
  if (options?.rootDir)
    return options.rootDir;
  if (process.env.CLAUDE_SKILL_LEARNING_HOME) {
    return process.env.CLAUDE_SKILL_LEARNING_HOME;
  }
  return join(process.env.HOME ?? process.cwd(), ".claude", "skill-learning");
}
function getObservationFilePath(options) {
  const root = getSkillLearningRoot(options);
  const project = options?.project;
  if (!project || project.scope === "global" || project.projectId === "global") {
    return join(root, "global", "observations.jsonl");
  }
  return join(root, "projects", project.projectId, "observations.jsonl");
}
function scrubText(value, maxLength = DEFAULT_MAX_FIELD_LENGTH) {
  if (value === undefined)
    return;
  let scrubbed = value;
  for (const pattern of SECRET_PATTERNS) {
    scrubbed = scrubbed.replace(pattern, (match) => {
      const key = match.split(/[:=]/, 1)[0];
      return /[:=]/.test(match) ? `${key}: ${SECRET_REPLACEMENT}` : SECRET_REPLACEMENT;
    });
  }
  if (scrubbed.length <= maxLength)
    return scrubbed;
  const hash = hashText(scrubbed);
  let preview = scrubbed.slice(0, maxLength);
  if (scrubbed.includes(SECRET_REPLACEMENT) && !preview.includes(SECRET_REPLACEMENT)) {
    preview = `${SECRET_REPLACEMENT} ${preview}`;
  }
  return `${preview}
[TRUNCATED length=${scrubbed.length} sha256=${hash}]`;
}
function scrubObservation(observation, options) {
  const maxLength = options?.maxFieldLength ?? DEFAULT_MAX_FIELD_LENGTH;
  const scrubbed = {
    ...observation,
    toolInput: scrubText(observation.toolInput, maxLength),
    toolOutput: scrubText(observation.toolOutput, maxLength),
    messageText: scrubText(observation.messageText, maxLength)
  };
  const hashSource = [
    scrubbed.event,
    scrubbed.toolName ?? "",
    scrubbed.toolInput ?? "",
    scrubbed.toolOutput ?? "",
    scrubbed.messageText ?? ""
  ].join(`
`);
  return {
    ...scrubbed,
    contentHash: hashText(hashSource)
  };
}
async function appendObservation(observation, options) {
  const filePath = getObservationFilePath(options);
  await mkdir(dirname(filePath), { recursive: true });
  await archiveLargeObservationFile(options);
  const scrubbed = scrubObservation(observation, options);
  const serialized = JSON.stringify(scrubbed);
  if (Buffer.byteLength(serialized) > MAX_SINGLE_OBSERVATION_BYTES) {
    return scrubbed;
  }
  await writeFile(filePath, `${serialized}
`, {
    flag: "a"
  });
  return scrubbed;
}
async function readObservations(options) {
  const filePath = getObservationFilePath(options);
  let content = "";
  try {
    content = await readFile(filePath, "utf8");
  } catch (error) {
    if (error.code === "ENOENT")
      return [];
    throw error;
  }
  const observations = [];
  for (const line of content.split(/\r?\n/)) {
    if (!line.trim())
      continue;
    try {
      observations.push(JSON.parse(line));
    } catch {}
  }
  return observations;
}
async function ingestTranscript(transcriptPath, options) {
  const transcript = await readFile(transcriptPath, "utf8");
  const observations = [];
  for (const line of transcript.split(/\r?\n/)) {
    if (!line.trim())
      continue;
    const entry = JSON.parse(line);
    for (const observation of observationsFromTranscriptEntry(entry, options)) {
      observations.push(await appendObservation(observation, options));
    }
  }
  return observations;
}
async function purgeOldObservations(options) {
  const filePath = getObservationFilePath(options);
  const maxAgeDays = options?.maxAgeDays ?? DEFAULT_PURGE_MAX_AGE_DAYS;
  const cutoff = Date.now() - maxAgeDays * 24 * 60 * 60 * 1000;
  let content = "";
  try {
    content = await readFile(filePath, "utf8");
  } catch (error) {
    if (error.code === "ENOENT")
      return 0;
    throw error;
  }
  const kept = [];
  let purged = 0;
  for (const line of content.split(/\r?\n/)) {
    if (!line.trim())
      continue;
    try {
      const obs = JSON.parse(line);
      const ts = Date.parse(obs.timestamp);
      if (!Number.isNaN(ts) && ts < cutoff) {
        purged += 1;
        continue;
      }
      kept.push(line);
    } catch {
      kept.push(line);
    }
  }
  if (purged === 0)
    return 0;
  const tmpPath = `${filePath}.tmp-${process.pid}-${Date.now()}`;
  await writeFile(tmpPath, kept.length ? `${kept.join(`
`)}
` : "");
  await rename(tmpPath, filePath);
  return purged;
}
async function archiveLargeObservationFile(options) {
  const filePath = getObservationFilePath(options);
  const threshold = options?.archiveThresholdBytes ?? DEFAULT_ARCHIVE_THRESHOLD_BYTES;
  let currentStat;
  try {
    currentStat = await stat(filePath);
  } catch (error) {
    if (error.code === "ENOENT")
      return null;
    throw error;
  }
  if (currentStat.size < threshold)
    return null;
  const archiveDir = join(dirname(filePath), "observations.archive");
  await mkdir(archiveDir, { recursive: true });
  const archivePath = join(archiveDir, `observations-${new Date().toISOString().replace(/[:.]/g, "-")}.jsonl`);
  await rename(filePath, archivePath);
  return archivePath;
}
function observationsFromTranscriptEntry(entry, options) {
  const project = options?.project;
  const base = {
    sessionId: entry.sessionId ?? "unknown-session",
    projectId: project?.projectId ?? "global",
    projectName: project?.projectName ?? "global",
    cwd: entry.cwd ?? project?.cwd ?? process.cwd(),
    timestamp: entry.timestamp ?? new Date().toISOString(),
    source: "transcript"
  };
  const role = entry.message?.role ?? entry.type;
  const content = entry.message?.content;
  const observations = [];
  if (entry.tool_name) {
    observations.push({
      ...base,
      id: createObservationId(),
      event: "tool_complete",
      toolName: entry.tool_name,
      toolInput: stringifyField(entry.tool_input),
      toolOutput: stringifyField(entry.tool_response),
      outcome: inferOutcome(entry.tool_response)
    });
  }
  if (role === "user") {
    const toolResults = extractToolResults(content);
    if (toolResults.length > 0) {
      for (const result of toolResults) {
        observations.push({
          ...base,
          id: createObservationId(),
          event: "tool_complete",
          toolName: result.name,
          toolOutput: result.output,
          outcome: result.isError ? "failure" : "success"
        });
      }
      return observations;
    }
    observations.push({
      ...base,
      id: createObservationId(),
      event: "user_message",
      messageText: extractText(content)
    });
    return observations;
  }
  if (role === "assistant") {
    const toolUses = extractToolUses(content);
    for (const toolUse of toolUses) {
      observations.push({
        ...base,
        id: createObservationId(),
        event: "tool_start",
        toolName: toolUse.name,
        toolInput: toolUse.input
      });
    }
    const text = extractText(content);
    if (text.trim()) {
      observations.push({
        ...base,
        id: createObservationId(),
        event: "assistant_message",
        messageText: text
      });
    }
  }
  return observations;
}
function extractText(content) {
  if (typeof content === "string")
    return content;
  if (!Array.isArray(content))
    return stringifyField(content) ?? "";
  return content.map((part) => {
    if (typeof part === "string")
      return part;
    if (!part || typeof part !== "object")
      return "";
    const record = part;
    return typeof record.text === "string" ? record.text : "";
  }).filter(Boolean).join(`
`);
}
function extractToolUses(content) {
  if (!Array.isArray(content))
    return [];
  return content.flatMap((part) => {
    if (!part || typeof part !== "object")
      return [];
    const record = part;
    if (record.type !== "tool_use")
      return [];
    return [
      {
        name: String(record.name ?? "unknown_tool"),
        input: stringifyField(record.input)
      }
    ];
  });
}
function extractToolResults(content) {
  if (!Array.isArray(content))
    return [];
  return content.flatMap((part) => {
    if (!part || typeof part !== "object")
      return [];
    const record = part;
    if (record.type !== "tool_result")
      return [];
    return [
      {
        name: String(record.name ?? record.tool_name ?? "unknown_tool"),
        output: stringifyField(record.content),
        isError: record.is_error === true
      }
    ];
  });
}
function inferOutcome(value) {
  const text = stringifyField(value)?.toLowerCase() ?? "";
  if (text.includes("interrupted") || text.includes("aborted")) {
    return "interrupted";
  }
  if (text.includes("error") || text.includes("exception") || text.includes("failed")) {
    return "failure";
  }
  return "success";
}
function stringifyField(value) {
  if (value === undefined || value === null)
    return;
  if (typeof value === "string")
    return value;
  return JSON.stringify(value);
}
function createObservationId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return randomUUID();
}
function hashText(value) {
  return createHash("sha256").update(value).digest("hex");
}
var DEFAULT_MAX_FIELD_LENGTH = 5000, DEFAULT_ARCHIVE_THRESHOLD_BYTES = 1e6, DEFAULT_PURGE_MAX_AGE_DAYS = 30, SECRET_REPLACEMENT = "[REDACTED]", SECRET_PATTERNS, MAX_SINGLE_OBSERVATION_BYTES;
var init_observationStore = __esm(() => {
  SECRET_PATTERNS = [
    /\b(?:sk|sk-ant|sk-proj|tp|xox[baprs])-[A-Za-z0-9_-]{12,}\b/g,
    /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g,
    /\b(?:api[_-]?key|token|secret|password|authorization)\b\s*[:=]\s*["']?[^"',\s}]+/gi,
    /\bBearer\s+[A-Za-z0-9._~+/=-]{12,}\b/gi
  ];
  MAX_SINGLE_OBSERVATION_BYTES = 64 * 1024;
});

export { getSkillLearningRoot, scrubText, scrubObservation, appendObservation, readObservations, ingestTranscript, purgeOldObservations, stringifyField, init_observationStore };
