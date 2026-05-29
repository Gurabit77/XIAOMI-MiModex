// @bun
import {
  djb2Hash,
  init_hash
} from "./chunk-8tnsngw2.js";
import {
  getClaudeConfigHomeDir,
  init_envUtils
} from "./chunk-hxhwzgnn.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/getWorktreePathsPortable.ts
import { execFile as execFileCb } from "child_process";
import { promisify } from "util";
async function getWorktreePathsPortable(cwd) {
  try {
    const { stdout } = await execFileAsync("git", ["worktree", "list", "--porcelain"], { cwd, timeout: 5000 });
    if (!stdout)
      return [];
    return stdout.split(`
`).filter((line) => line.startsWith("worktree ")).map((line) => line.slice("worktree ".length).normalize("NFC"));
  } catch {
    return [];
  }
}
var execFileAsync;
var init_getWorktreePathsPortable = __esm(() => {
  execFileAsync = promisify(execFileCb);
});

// src/utils/sessionStoragePortable.ts
import { open as fsOpen, readdir, realpath, stat } from "fs/promises";
import { join } from "path";
function validateUuid(maybeUuid) {
  if (typeof maybeUuid !== "string")
    return null;
  return uuidRegex.test(maybeUuid) ? maybeUuid : null;
}
function unescapeJsonString(raw) {
  if (!raw.includes("\\"))
    return raw;
  try {
    return JSON.parse(`"${raw}"`);
  } catch {
    return raw;
  }
}
function extractJsonStringField(text, key) {
  const patterns = [`"${key}":"`, `"${key}": "`];
  for (const pattern of patterns) {
    const idx = text.indexOf(pattern);
    if (idx < 0)
      continue;
    const valueStart = idx + pattern.length;
    let i = valueStart;
    while (i < text.length) {
      if (text[i] === "\\") {
        i += 2;
        continue;
      }
      if (text[i] === '"') {
        return unescapeJsonString(text.slice(valueStart, i));
      }
      i++;
    }
  }
  return;
}
function extractLastJsonStringField(text, key) {
  const patterns = [`"${key}":"`, `"${key}": "`];
  let lastValue;
  for (const pattern of patterns) {
    let searchFrom = 0;
    while (true) {
      const idx = text.indexOf(pattern, searchFrom);
      if (idx < 0)
        break;
      const valueStart = idx + pattern.length;
      let i = valueStart;
      while (i < text.length) {
        if (text[i] === "\\") {
          i += 2;
          continue;
        }
        if (text[i] === '"') {
          lastValue = unescapeJsonString(text.slice(valueStart, i));
          break;
        }
        i++;
      }
      searchFrom = i + 1;
    }
  }
  return lastValue;
}
function extractFirstPromptFromHead(head) {
  let start = 0;
  let commandFallback = "";
  while (start < head.length) {
    const newlineIdx = head.indexOf(`
`, start);
    const line = newlineIdx >= 0 ? head.slice(start, newlineIdx) : head.slice(start);
    start = newlineIdx >= 0 ? newlineIdx + 1 : head.length;
    if (!line.includes('"type":"user"') && !line.includes('"type": "user"'))
      continue;
    if (line.includes('"tool_result"'))
      continue;
    if (line.includes('"isMeta":true') || line.includes('"isMeta": true'))
      continue;
    if (line.includes('"isCompactSummary":true') || line.includes('"isCompactSummary": true'))
      continue;
    try {
      const entry = JSON.parse(line);
      if (entry.type !== "user")
        continue;
      const message = entry.message;
      if (!message)
        continue;
      const content = message.content;
      const texts = [];
      if (typeof content === "string") {
        texts.push(content);
      } else if (Array.isArray(content)) {
        for (const block of content) {
          if (block.type === "text" && typeof block.text === "string") {
            texts.push(block.text);
          }
        }
      }
      for (const raw of texts) {
        let result = raw.replace(/\n/g, " ").trim();
        if (!result)
          continue;
        const cmdMatch = COMMAND_NAME_RE.exec(result);
        if (cmdMatch) {
          if (!commandFallback)
            commandFallback = cmdMatch[1];
          continue;
        }
        const bashMatch = /<bash-input>([\s\S]*?)<\/bash-input>/.exec(result);
        if (bashMatch)
          return `! ${bashMatch[1].trim()}`;
        if (SKIP_FIRST_PROMPT_PATTERN.test(result))
          continue;
        if (result.length > 200) {
          result = result.slice(0, 200).trim() + "\u2026";
        }
        return result;
      }
    } catch {}
  }
  if (commandFallback)
    return commandFallback;
  return "";
}
async function readHeadAndTail(filePath, fileSize, buf) {
  try {
    const fh = await fsOpen(filePath, "r");
    try {
      const headResult = await fh.read(buf, 0, LITE_READ_BUF_SIZE, 0);
      if (headResult.bytesRead === 0)
        return { head: "", tail: "" };
      const head = buf.toString("utf8", 0, headResult.bytesRead);
      const tailOffset = Math.max(0, fileSize - LITE_READ_BUF_SIZE);
      let tail = head;
      if (tailOffset > 0) {
        const tailResult = await fh.read(buf, 0, LITE_READ_BUF_SIZE, tailOffset);
        tail = buf.toString("utf8", 0, tailResult.bytesRead);
      }
      return { head, tail };
    } finally {
      await fh.close();
    }
  } catch {
    return { head: "", tail: "" };
  }
}
async function readSessionLite(filePath) {
  try {
    const fh = await fsOpen(filePath, "r");
    try {
      const stat2 = await fh.stat();
      const buf = Buffer.allocUnsafe(LITE_READ_BUF_SIZE);
      const headResult = await fh.read(buf, 0, LITE_READ_BUF_SIZE, 0);
      if (headResult.bytesRead === 0)
        return null;
      const head = buf.toString("utf8", 0, headResult.bytesRead);
      const tailOffset = Math.max(0, stat2.size - LITE_READ_BUF_SIZE);
      let tail = head;
      if (tailOffset > 0) {
        const tailResult = await fh.read(buf, 0, LITE_READ_BUF_SIZE, tailOffset);
        tail = buf.toString("utf8", 0, tailResult.bytesRead);
      }
      return { mtime: stat2.mtime.getTime(), size: stat2.size, head, tail };
    } finally {
      await fh.close();
    }
  } catch {
    return null;
  }
}
function simpleHash(str) {
  return Math.abs(djb2Hash(str)).toString(36);
}
function sanitizePath(name) {
  const sanitized = name.replace(/[^a-zA-Z0-9]/g, "-");
  if (sanitized.length <= MAX_SANITIZED_LENGTH) {
    return sanitized;
  }
  const hash = typeof Bun !== "undefined" ? Bun.hash(name).toString(36) : simpleHash(name);
  return `${sanitized.slice(0, MAX_SANITIZED_LENGTH)}-${hash}`;
}
function getProjectsDir() {
  return join(getClaudeConfigHomeDir(), "projects");
}
function getProjectDir(projectDir) {
  return join(getProjectsDir(), sanitizePath(projectDir));
}
async function canonicalizePath(dir) {
  try {
    return (await realpath(dir)).normalize("NFC");
  } catch {
    return dir.normalize("NFC");
  }
}
async function findProjectDir(projectPath) {
  const exact = getProjectDir(projectPath);
  try {
    await readdir(exact);
    return exact;
  } catch {
    const sanitized = sanitizePath(projectPath);
    if (sanitized.length <= MAX_SANITIZED_LENGTH) {
      return;
    }
    const prefix = sanitized.slice(0, MAX_SANITIZED_LENGTH);
    const projectsDir = getProjectsDir();
    try {
      const dirents = await readdir(projectsDir, { withFileTypes: true });
      const match = dirents.find((d) => d.isDirectory() && d.name.startsWith(prefix + "-"));
      return match ? join(projectsDir, match.name) : undefined;
    } catch {
      return;
    }
  }
}
function compactBoundaryMarker() {
  return _compactBoundaryMarker ??= Buffer.from('"compact_boundary"');
}
function parseBoundaryLine(line) {
  try {
    const parsed = JSON.parse(line);
    if (parsed.type !== "system" || parsed.subtype !== "compact_boundary") {
      return null;
    }
    return {
      hasPreservedSegment: Boolean(parsed.compactMetadata?.preservedSegment)
    };
  } catch {
    return null;
  }
}
function sinkWrite(s, src, start, end) {
  const n = end - start;
  if (n <= 0)
    return;
  if (s.len + n > s.buf.length) {
    const grown = Buffer.allocUnsafe(Math.min(Math.max(s.buf.length * 2, s.len + n), s.cap));
    s.buf.copy(grown, 0, 0, s.len);
    s.buf = grown;
  }
  src.copy(s.buf, s.len, start, end);
  s.len += n;
}
function hasPrefix(src, prefix, at, end) {
  return end - at >= prefix.length && src.compare(prefix, 0, prefix.length, at, at + prefix.length) === 0;
}
function processStraddle(s, chunk, bytesRead) {
  s.straddleSnapCarryLen = 0;
  s.straddleSnapTailEnd = 0;
  if (s.carryLen === 0)
    return 0;
  const cb = s.carryBuf;
  const firstNl = chunk.indexOf(LF);
  if (firstNl === -1 || firstNl >= bytesRead)
    return 0;
  const tailEnd = firstNl + 1;
  if (hasPrefix(cb, ATTR_SNAP_PREFIX, 0, s.carryLen)) {
    s.straddleSnapCarryLen = s.carryLen;
    s.straddleSnapTailEnd = tailEnd;
    s.lastSnapSrc = null;
  } else if (s.carryLen < ATTR_SNAP_PREFIX.length) {
    return 0;
  } else {
    if (hasPrefix(cb, SYSTEM_PREFIX, 0, s.carryLen)) {
      const hit = parseBoundaryLine(cb.toString("utf-8", 0, s.carryLen) + chunk.toString("utf-8", 0, firstNl));
      if (hit?.hasPreservedSegment) {
        s.hasPreservedSegment = true;
      } else if (hit) {
        s.out.len = 0;
        s.boundaryStartOffset = s.bufFileOff;
        s.hasPreservedSegment = false;
        s.lastSnapSrc = null;
      }
    }
    sinkWrite(s.out, cb, 0, s.carryLen);
    sinkWrite(s.out, chunk, 0, tailEnd);
  }
  s.bufFileOff += s.carryLen + tailEnd;
  s.carryLen = 0;
  return tailEnd;
}
function scanChunkLines(s, buf, boundaryMarker) {
  let boundaryAt = buf.indexOf(boundaryMarker);
  let runStart = 0;
  let lineStart = 0;
  let lastSnapStart = -1;
  let lastSnapEnd = -1;
  let nl = buf.indexOf(LF);
  while (nl !== -1) {
    const lineEnd = nl + 1;
    if (boundaryAt !== -1 && boundaryAt < lineStart) {
      boundaryAt = buf.indexOf(boundaryMarker, lineStart);
    }
    if (hasPrefix(buf, ATTR_SNAP_PREFIX, lineStart, lineEnd)) {
      sinkWrite(s.out, buf, runStart, lineStart);
      lastSnapStart = lineStart;
      lastSnapEnd = lineEnd;
      runStart = lineEnd;
    } else if (boundaryAt >= lineStart && boundaryAt < Math.min(lineStart + BOUNDARY_SEARCH_BOUND, lineEnd)) {
      const hit = parseBoundaryLine(buf.toString("utf-8", lineStart, nl));
      if (hit?.hasPreservedSegment) {
        s.hasPreservedSegment = true;
      } else if (hit) {
        s.out.len = 0;
        s.boundaryStartOffset = s.bufFileOff + lineStart;
        s.hasPreservedSegment = false;
        s.lastSnapSrc = null;
        lastSnapStart = -1;
        s.straddleSnapCarryLen = 0;
        runStart = lineStart;
      }
      boundaryAt = buf.indexOf(boundaryMarker, boundaryAt + boundaryMarker.length);
    }
    lineStart = lineEnd;
    nl = buf.indexOf(LF, lineStart);
  }
  sinkWrite(s.out, buf, runStart, lineStart);
  return { lastSnapStart, lastSnapEnd, trailStart: lineStart };
}
function captureSnap(s, buf, chunk, lastSnapStart, lastSnapEnd) {
  if (lastSnapStart !== -1) {
    s.lastSnapLen = lastSnapEnd - lastSnapStart;
    if (s.lastSnapBuf === undefined || s.lastSnapLen > s.lastSnapBuf.length) {
      s.lastSnapBuf = Buffer.allocUnsafe(s.lastSnapLen);
    }
    buf.copy(s.lastSnapBuf, 0, lastSnapStart, lastSnapEnd);
    s.lastSnapSrc = s.lastSnapBuf;
  } else if (s.straddleSnapCarryLen > 0) {
    s.lastSnapLen = s.straddleSnapCarryLen + s.straddleSnapTailEnd;
    if (s.lastSnapBuf === undefined || s.lastSnapLen > s.lastSnapBuf.length) {
      s.lastSnapBuf = Buffer.allocUnsafe(s.lastSnapLen);
    }
    s.carryBuf.copy(s.lastSnapBuf, 0, 0, s.straddleSnapCarryLen);
    chunk.copy(s.lastSnapBuf, s.straddleSnapCarryLen, 0, s.straddleSnapTailEnd);
    s.lastSnapSrc = s.lastSnapBuf;
  }
}
function captureCarry(s, buf, trailStart) {
  s.carryLen = buf.length - trailStart;
  if (s.carryLen > 0) {
    if (s.carryBuf === undefined || s.carryLen > s.carryBuf.length) {
      s.carryBuf = Buffer.allocUnsafe(s.carryLen);
    }
    buf.copy(s.carryBuf, 0, trailStart, buf.length);
  }
}
function finalizeOutput(s) {
  if (s.carryLen > 0) {
    const cb = s.carryBuf;
    if (hasPrefix(cb, ATTR_SNAP_PREFIX, 0, s.carryLen)) {
      s.lastSnapSrc = cb;
      s.lastSnapLen = s.carryLen;
    } else {
      sinkWrite(s.out, cb, 0, s.carryLen);
    }
  }
  if (s.lastSnapSrc) {
    if (s.out.len > 0 && s.out.buf[s.out.len - 1] !== LF) {
      sinkWrite(s.out, LF_BYTE, 0, 1);
    }
    sinkWrite(s.out, s.lastSnapSrc, 0, s.lastSnapLen);
  }
}
async function readTranscriptForLoad(filePath, fileSize) {
  const boundaryMarker = compactBoundaryMarker();
  const CHUNK_SIZE = TRANSCRIPT_READ_CHUNK_SIZE;
  const s = {
    out: {
      buf: Buffer.allocUnsafe(Math.min(fileSize, 8 * 1024 * 1024)),
      len: 0,
      cap: fileSize + 1
    },
    boundaryStartOffset: 0,
    hasPreservedSegment: false,
    lastSnapSrc: null,
    lastSnapLen: 0,
    lastSnapBuf: undefined,
    bufFileOff: 0,
    carryLen: 0,
    carryBuf: undefined,
    straddleSnapCarryLen: 0,
    straddleSnapTailEnd: 0
  };
  const chunk = Buffer.allocUnsafe(CHUNK_SIZE);
  const fd = await fsOpen(filePath, "r");
  try {
    let filePos = 0;
    while (filePos < fileSize) {
      const { bytesRead } = await fd.read(chunk, 0, Math.min(CHUNK_SIZE, fileSize - filePos), filePos);
      if (bytesRead === 0)
        break;
      filePos += bytesRead;
      const chunkOff = processStraddle(s, chunk, bytesRead);
      let buf;
      if (s.carryLen > 0) {
        const bufLen = s.carryLen + (bytesRead - chunkOff);
        buf = Buffer.allocUnsafe(bufLen);
        s.carryBuf.copy(buf, 0, 0, s.carryLen);
        chunk.copy(buf, s.carryLen, chunkOff, bytesRead);
      } else {
        buf = chunk.subarray(chunkOff, bytesRead);
      }
      const r = scanChunkLines(s, buf, boundaryMarker);
      captureSnap(s, buf, chunk, r.lastSnapStart, r.lastSnapEnd);
      captureCarry(s, buf, r.trailStart);
      s.bufFileOff += r.trailStart;
    }
    finalizeOutput(s);
  } finally {
    await fd.close();
  }
  return {
    boundaryStartOffset: s.boundaryStartOffset,
    postBoundaryBuf: s.out.buf.subarray(0, s.out.len),
    hasPreservedSegment: s.hasPreservedSegment
  };
}
var LITE_READ_BUF_SIZE = 65536, uuidRegex, SKIP_FIRST_PROMPT_PATTERN, COMMAND_NAME_RE, MAX_SANITIZED_LENGTH = 200, TRANSCRIPT_READ_CHUNK_SIZE, SKIP_PRECOMPACT_THRESHOLD, _compactBoundaryMarker, ATTR_SNAP_PREFIX, SYSTEM_PREFIX, LF = 10, LF_BYTE, BOUNDARY_SEARCH_BOUND = 256;
var init_sessionStoragePortable = __esm(() => {
  init_envUtils();
  init_getWorktreePathsPortable();
  init_hash();
  uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  SKIP_FIRST_PROMPT_PATTERN = /^(?:\s*<[a-z][\w-]*[\s>]|\[Request interrupted by user[^\]]*\])/;
  COMMAND_NAME_RE = /<command-name>(.*?)<\/command-name>/;
  TRANSCRIPT_READ_CHUNK_SIZE = 1024 * 1024;
  SKIP_PRECOMPACT_THRESHOLD = 5 * 1024 * 1024;
  ATTR_SNAP_PREFIX = Buffer.from('{"type":"attribution-snapshot"');
  SYSTEM_PREFIX = Buffer.from('{"type":"system"');
  LF_BYTE = Buffer.from([LF]);
});

export { getWorktreePathsPortable, init_getWorktreePathsPortable, LITE_READ_BUF_SIZE, validateUuid, extractJsonStringField, extractLastJsonStringField, extractFirstPromptFromHead, readHeadAndTail, readSessionLite, MAX_SANITIZED_LENGTH, sanitizePath, getProjectsDir, canonicalizePath, findProjectDir, SKIP_PRECOMPACT_THRESHOLD, readTranscriptForLoad, init_sessionStoragePortable };
