// @bun
import {
  getBridgeAccessToken,
  getBridgeBaseUrl,
  init_bridgeConfig
} from "./chunk-jtnkamme.js";
import {
  init_lazySchema,
  lazySchema
} from "./chunk-64c1avct.js";
import {
  init_v4
} from "./chunk-8g747a8x.js";
import {
  exports_external
} from "./chunk-d7886r6a.js";
import {
  init_debug,
  logForDebugging
} from "./chunk-rpbc3b7k.js";
import {
  getSessionId,
  init_state
} from "./chunk-j5xzpm59.js";
import {
  getClaudeConfigHomeDir,
  init_envUtils
} from "./chunk-hxhwzgnn.js";
import {
  axios_default,
  init_axios
} from "./chunk-3v4d4h0t.js";

// src/bridge/inboundAttachments.ts
init_axios();
init_v4();
init_state();
init_debug();
init_envUtils();
init_lazySchema();
init_bridgeConfig();
import { randomUUID } from "crypto";
import { mkdir, writeFile } from "fs/promises";
import { basename, join } from "path";
var DOWNLOAD_TIMEOUT_MS = 30000;
function debug(msg) {
  logForDebugging(`[bridge:inbound-attach] ${msg}`);
}
var attachmentSchema = lazySchema(() => exports_external.object({
  file_uuid: exports_external.string(),
  file_name: exports_external.string()
}));
var attachmentsArraySchema = lazySchema(() => exports_external.array(attachmentSchema()));
function extractInboundAttachments(msg) {
  if (typeof msg !== "object" || msg === null || !("file_attachments" in msg)) {
    return [];
  }
  const parsed = attachmentsArraySchema().safeParse(msg.file_attachments);
  return parsed.success ? parsed.data : [];
}
function sanitizeFileName(name) {
  const base = basename(name).replace(/[^a-zA-Z0-9._-]/g, "_");
  return base || "attachment";
}
function uploadsDir() {
  return join(getClaudeConfigHomeDir(), "uploads", getSessionId());
}
async function resolveOne(att) {
  const token = getBridgeAccessToken();
  if (!token) {
    debug("skip: no oauth token");
    return;
  }
  let data;
  try {
    const url = `${getBridgeBaseUrl()}/api/oauth/files/${encodeURIComponent(att.file_uuid)}/content`;
    const response = await axios_default.get(url, {
      headers: { Authorization: `Bearer ${token}` },
      responseType: "arraybuffer",
      timeout: DOWNLOAD_TIMEOUT_MS,
      validateStatus: () => true
    });
    if (response.status !== 200) {
      debug(`fetch ${att.file_uuid} failed: status=${response.status}`);
      return;
    }
    data = Buffer.from(response.data);
  } catch (e) {
    debug(`fetch ${att.file_uuid} threw: ${e}`);
    return;
  }
  const safeName = sanitizeFileName(att.file_name);
  const prefix = (att.file_uuid.slice(0, 8) || randomUUID().slice(0, 8)).replace(/[^a-zA-Z0-9_-]/g, "_");
  const dir = uploadsDir();
  const outPath = join(dir, `${prefix}-${safeName}`);
  try {
    await mkdir(dir, { recursive: true });
    await writeFile(outPath, data);
  } catch (e) {
    debug(`write ${outPath} failed: ${e}`);
    return;
  }
  debug(`resolved ${att.file_uuid} \u2192 ${outPath} (${data.length} bytes)`);
  return outPath;
}
async function resolveInboundAttachments(attachments) {
  if (attachments.length === 0)
    return "";
  debug(`resolving ${attachments.length} attachment(s)`);
  const paths = await Promise.all(attachments.map(resolveOne));
  const ok = paths.filter((p) => p !== undefined);
  if (ok.length === 0)
    return "";
  return ok.map((p) => `@"${p}"`).join(" ") + " ";
}
function prependPathRefs(content, prefix) {
  if (!prefix)
    return content;
  if (typeof content === "string")
    return prefix + content;
  const i = content.findLastIndex((b) => b.type === "text");
  if (i !== -1) {
    const b = content[i];
    if (b.type === "text") {
      return [
        ...content.slice(0, i),
        { ...b, text: prefix + b.text },
        ...content.slice(i + 1)
      ];
    }
  }
  return [...content, { type: "text", text: prefix.trimEnd() }];
}
async function resolveAndPrepend(msg, content) {
  const attachments = extractInboundAttachments(msg);
  if (attachments.length === 0)
    return content;
  const prefix = await resolveInboundAttachments(attachments);
  return prependPathRefs(content, prefix);
}

export { extractInboundAttachments, resolveInboundAttachments, prependPathRefs, resolveAndPrepend };
