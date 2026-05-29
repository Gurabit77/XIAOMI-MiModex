// @bun
import {
  $toString,
  init_server as init_server2
} from "./chunk-jdgeec04.js";
import {
  StdioServerTransport,
  init_stdio
} from "./chunk-e1dg39wg.js";
import"./chunk-x69b8r8v.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  Server,
  init_server,
  init_types
} from "./chunk-4cp6193g.js";
import"./chunk-8g747a8x.js";
import"./chunk-d7886r6a.js";
import"./chunk-qp2qdcda.js";

// packages/weixin/src/types.ts
var MessageType = {
  NONE: 0,
  USER: 1,
  BOT: 2
};
var MessageItemType = {
  NONE: 0,
  TEXT: 1,
  IMAGE: 2,
  VOICE: 3,
  FILE: 4,
  VIDEO: 5
};
var MessageState = {
  NEW: 0,
  GENERATING: 1,
  FINISH: 2
};
var UploadMediaType = {
  IMAGE: 1,
  VIDEO: 2,
  FILE: 3,
  VOICE: 4
};
var TypingStatus = {
  TYPING: 1,
  CANCEL: 2
};
// packages/weixin/src/api.ts
import { randomBytes } from "crypto";
var CHANNEL_VERSION = "0.1.0";
function baseInfo() {
  return { channel_version: CHANNEL_VERSION };
}
function randomUin() {
  return randomBytes(4).toString("base64");
}
function buildHeaders(token) {
  const headers = {
    "Content-Type": "application/json",
    "X-WECHAT-UIN": randomUin()
  };
  if (token) {
    headers.AuthorizationType = "ilink_bot_token";
    headers.Authorization = `Bearer ${token}`;
  }
  return headers;
}
async function post(baseUrl, path, body, token, timeoutMs = 40000, signal) {
  const controller = new AbortController;
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  if (signal) {
    signal.addEventListener("abort", () => controller.abort(), { once: true });
  }
  try {
    const response = await fetch(`${baseUrl}${path}`, {
      method: "POST",
      headers: buildHeaders(token),
      body: JSON.stringify(body),
      signal: controller.signal
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    return await response.json();
  } finally {
    clearTimeout(timeout);
  }
}
async function getUpdates(baseUrl, token, getUpdatesBuf, signal) {
  const body = {
    get_updates_buf: getUpdatesBuf,
    base_info: baseInfo()
  };
  try {
    return await post(baseUrl, "/ilink/bot/getupdates", body, token, 40000, signal);
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      return { ret: 0, msgs: [], get_updates_buf: getUpdatesBuf };
    }
    throw error;
  }
}
async function sendMessage(baseUrl, token, msg) {
  const body = { msg, base_info: baseInfo() };
  await post(baseUrl, "/ilink/bot/sendmessage", body, token);
}
async function getUploadUrl(baseUrl, token, params) {
  return post(baseUrl, "/ilink/bot/getuploadurl", { ...params, base_info: baseInfo() }, token);
}
async function getConfig(baseUrl, token, userId, contextToken) {
  return post(baseUrl, "/ilink/bot/getconfig", {
    ilink_user_id: userId,
    context_token: contextToken,
    base_info: baseInfo()
  }, token);
}
async function sendTyping(baseUrl, token, req) {
  return post(baseUrl, "/ilink/bot/sendtyping", { ...req, base_info: baseInfo() }, token);
}
// packages/weixin/src/accounts.ts
import {
  chmodSync,
  existsSync,
  mkdirSync,
  readFileSync,
  unlinkSync,
  writeFileSync
} from "fs";
import { homedir } from "os";
import { join } from "path";
var DEFAULT_BASE_URL = "https://ilinkai.weixin.qq.com";
var CDN_BASE_URL = "https://novac2c.cdn.weixin.qq.com/c2c";
function getStateDir() {
  const configHomeDir = process.env.CLAUDE_CONFIG_DIR || join(homedir(), ".mimo");
  const dir = process.env.WEIXIN_STATE_DIR || join(configHomeDir, "channels", "weixin");
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
  return dir;
}
function accountPath() {
  return join(getStateDir(), "account.json");
}
function loadAccount() {
  const path = accountPath();
  if (!existsSync(path))
    return null;
  try {
    return JSON.parse(readFileSync(path, "utf-8"));
  } catch {
    return null;
  }
}
function saveAccount(data) {
  const path = accountPath();
  writeFileSync(path, JSON.stringify(data, null, 2), "utf-8");
  chmodSync(path, 384);
}
function clearAccount() {
  const path = accountPath();
  if (existsSync(path)) {
    unlinkSync(path);
  }
}
// packages/weixin/src/login.ts
init_server2();
async function renderQrCodeToTerminal(qrcodeUrl) {
  const output = await $toString(qrcodeUrl, {
    type: "terminal",
    errorCorrectionLevel: "L",
    small: true
  });
  process.stderr.write(`${output}
`);
}
async function startLogin(apiBaseUrl) {
  const response = await fetch(`${apiBaseUrl}/ilink/bot/get_bot_qrcode?bot_type=3`);
  if (!response.ok) {
    throw new Error(`Failed to get QR code: HTTP ${response.status}`);
  }
  const data = await response.json();
  if (!data.qrcode) {
    throw new Error("No qrcode in response");
  }
  const qrcodeUrl = data.qrcode_img_content || "";
  if (qrcodeUrl) {
    await renderQrCodeToTerminal(qrcodeUrl);
  }
  return {
    qrcodeUrl,
    qrcodeId: data.qrcode,
    message: "Scan the QR code with WeChat to connect."
  };
}
async function waitForLogin(params) {
  const { qrcodeId, apiBaseUrl, timeoutMs = 480000, maxRetries = 3 } = params;
  const deadline = Date.now() + timeoutMs;
  let currentQrcodeId = qrcodeId;
  let retryCount = 0;
  while (Date.now() < deadline) {
    try {
      const controller = new AbortController;
      const timeout = setTimeout(() => controller.abort(), 60000);
      const response = await fetch(`${apiBaseUrl}/ilink/bot/get_qrcode_status?qrcode=${encodeURIComponent(currentQrcodeId)}`, {
        headers: { "iLink-App-ClientVersion": "1" },
        signal: controller.signal
      });
      clearTimeout(timeout);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const data = await response.json();
      switch (data.status) {
        case "confirmed":
          return {
            connected: true,
            token: data.bot_token,
            accountId: data.ilink_bot_id,
            baseUrl: data.baseurl,
            userId: data.ilink_user_id,
            message: "Connected to WeChat successfully!"
          };
        case "scaned":
          process.stderr.write(`QR code scanned, waiting for confirmation...
`);
          break;
        case "expired": {
          retryCount += 1;
          if (retryCount >= maxRetries) {
            return {
              connected: false,
              message: "QR code expired after maximum retries."
            };
          }
          process.stderr.write(`QR code expired, refreshing...
`);
          const refreshed = await startLogin(apiBaseUrl);
          currentQrcodeId = refreshed.qrcodeId;
          break;
        }
        case "wait":
        default:
          break;
      }
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        continue;
      }
      throw error;
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  return { connected: false, message: "Login timed out." };
}
// packages/weixin/src/pairing.ts
import { existsSync as existsSync2, readFileSync as readFileSync2, writeFileSync as writeFileSync2 } from "fs";
import { join as join2 } from "path";
function configPath() {
  return join2(getStateDir(), "access.json");
}
function pendingPath() {
  return join2(getStateDir(), "pending-pairings.json");
}
function loadPending() {
  const path = pendingPath();
  if (!existsSync2(path))
    return {};
  try {
    return JSON.parse(readFileSync2(path, "utf-8"));
  } catch {
    return {};
  }
}
function savePending(data) {
  writeFileSync2(pendingPath(), JSON.stringify(data, null, 2), "utf-8");
}
function loadAccessConfig() {
  const path = configPath();
  if (!existsSync2(path)) {
    return { policy: "pairing", allowFrom: [] };
  }
  try {
    return JSON.parse(readFileSync2(path, "utf-8"));
  } catch {
    return { policy: "pairing", allowFrom: [] };
  }
}
function saveAccessConfig(config) {
  writeFileSync2(configPath(), JSON.stringify(config, null, 2), "utf-8");
}
function isAllowed(userId) {
  const config = loadAccessConfig();
  if (config.policy === "disabled")
    return true;
  return config.allowFrom.includes(userId);
}
function addPendingPairing(userId) {
  const pending = loadPending();
  const now = Date.now();
  for (const code2 of Object.keys(pending)) {
    if (pending[code2].expiresAt < now) {
      delete pending[code2];
    }
  }
  for (const [code2, entry] of Object.entries(pending)) {
    if (entry.userId === userId) {
      savePending(pending);
      return code2;
    }
  }
  const code = String(Math.floor(1e5 + Math.random() * 900000));
  pending[code] = { userId, expiresAt: now + 10 * 60 * 1000 };
  savePending(pending);
  return code;
}
function confirmPairing(code) {
  const pending = loadPending();
  const entry = pending[code];
  if (!entry || entry.expiresAt < Date.now()) {
    delete pending[code];
    savePending(pending);
    return null;
  }
  delete pending[code];
  savePending(pending);
  const config = loadAccessConfig();
  if (!config.allowFrom.includes(entry.userId)) {
    config.allowFrom.push(entry.userId);
    saveAccessConfig(config);
  }
  return entry.userId;
}
// packages/weixin/src/media.ts
import {
  createCipheriv,
  createDecipheriv,
  createHash,
  randomBytes as randomBytes2
} from "crypto";
import {
  existsSync as existsSync3,
  mkdirSync as mkdirSync2,
  readFileSync as readFileSync3,
  writeFileSync as writeFileSync3
} from "fs";
import { tmpdir } from "os";
import { basename, extname, join as join3 } from "path";
function encryptAesEcb(plaintext, key) {
  const cipher = createCipheriv("aes-128-ecb", key, null);
  return Buffer.concat([cipher.update(plaintext), cipher.final()]);
}
function decryptAesEcb(ciphertext, key) {
  const decipher = createDecipheriv("aes-128-ecb", key, null);
  return Buffer.concat([decipher.update(ciphertext), decipher.final()]);
}
function aesEcbPaddedSize(size) {
  return size + (16 - size % 16);
}
function buildCdnDownloadUrl(encryptedQueryParam, cdnBaseUrl) {
  return `${cdnBaseUrl}/download?encrypted_query_param=${encodeURIComponent(encryptedQueryParam)}`;
}
function buildCdnUploadUrl(cdnBaseUrl, uploadParam, filekey) {
  return `${cdnBaseUrl}/upload?encrypted_query_param=${encodeURIComponent(uploadParam)}&filekey=${encodeURIComponent(filekey)}`;
}
function parseAesKey(aesKeyBase64) {
  const decoded = Buffer.from(aesKeyBase64, "base64");
  if (decoded.length === 16) {
    return decoded;
  }
  if (decoded.length === 32 && /^[0-9a-fA-F]{32}$/.test(decoded.toString("ascii"))) {
    return Buffer.from(decoded.toString("ascii"), "hex");
  }
  throw new Error(`Invalid aes_key: expected 16 raw bytes or 32 hex chars, got ${decoded.length} bytes`);
}
async function downloadAndDecrypt(params) {
  const url = buildCdnDownloadUrl(params.encryptQueryParam, params.cdnBaseUrl);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`CDN download failed: HTTP ${response.status}`);
  }
  const ciphertext = Buffer.from(await response.arrayBuffer());
  return decryptAesEcb(ciphertext, parseAesKey(params.aesKey));
}
async function uploadFile(params) {
  const plaintext = readFileSync3(params.filePath);
  const rawSize = plaintext.length;
  const rawMd5 = createHash("md5").update(plaintext).digest("hex");
  const aesKey = randomBytes2(16);
  const filekey = randomBytes2(16).toString("hex");
  const ciphertext = encryptAesEcb(plaintext, aesKey);
  const fileSize = ciphertext.length;
  const uploadResp = await getUploadUrl(params.apiBaseUrl, params.token, {
    filekey,
    media_type: params.mediaType,
    to_user_id: params.toUserId,
    rawsize: rawSize,
    rawfilemd5: rawMd5,
    filesize: fileSize,
    no_need_thumb: true,
    aeskey: aesKey.toString("hex")
  });
  if (!uploadResp.upload_param) {
    throw new Error("No upload_param in response");
  }
  const uploadUrl = buildCdnUploadUrl(params.cdnBaseUrl, uploadResp.upload_param, filekey);
  const uploadResult = await fetch(uploadUrl, {
    method: "POST",
    headers: { "Content-Type": "application/octet-stream" },
    body: new Uint8Array(ciphertext)
  });
  if (!uploadResult.ok) {
    throw new Error(`CDN upload failed: HTTP ${uploadResult.status}`);
  }
  return {
    encryptQueryParam: uploadResult.headers.get("x-encrypted-param") || "",
    aesKey: Buffer.from(aesKey.toString("hex")).toString("base64"),
    fileSize,
    rawSize,
    fileName: basename(params.filePath)
  };
}
function guessMediaType(filePath) {
  const ext = extname(filePath).toLowerCase();
  const imageExts = [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".webp", ".heic"];
  const videoExts = [".mp4", ".mov", ".avi", ".mkv", ".webm"];
  if (imageExts.includes(ext))
    return UploadMediaType.IMAGE;
  if (videoExts.includes(ext))
    return UploadMediaType.VIDEO;
  return UploadMediaType.FILE;
}
async function downloadRemoteToTemp(url, destDir) {
  const dir = destDir || join3(tmpdir(), "weixin-downloads");
  if (!existsSync3(dir))
    mkdirSync2(dir, { recursive: true });
  const response = await fetch(url);
  if (!response.ok)
    throw new Error(`Download failed: HTTP ${response.status}`);
  const buffer = Buffer.from(await response.arrayBuffer());
  const urlPath = new URL(url).pathname;
  const name = basename(urlPath) || `file_${Date.now()}`;
  const dest = join3(dir, name);
  writeFileSync3(dest, buffer);
  return dest;
}
// packages/weixin/src/send.ts
import { randomUUID } from "crypto";
function stripCodeBlocks(text) {
  let result = "";
  let i = 0;
  while (i < text.length) {
    if (text.startsWith("```", i)) {
      let j = i + 3;
      while (j < text.length && text[j] !== `
`)
        j++;
      if (j < text.length)
        j++;
      const contentStart = j;
      while (j < text.length) {
        if (text.startsWith("```", j)) {
          result += text.slice(contentStart, j);
          j += 3;
          while (j < text.length && text[j] !== `
`)
            j++;
          if (j < text.length)
            j++;
          break;
        }
        j++;
      }
      if (j >= text.length && !text.startsWith("```", j - 3)) {
        result += text.slice(i);
      }
      i = j;
    } else {
      result += text[i];
      i++;
    }
  }
  return result;
}
function markdownToPlainText(text) {
  return stripCodeBlocks(text).replace(/`([^`]+)`/g, "$1").replace(/\*\*\*(.+?)\*\*\*/g, "$1").replace(/\*\*(.+?)\*\*/g, "$1").replace(/\*(.+?)\*/g, "$1").replace(/___(.+?)___/g, "$1").replace(/__(.+?)__/g, "$1").replace(/_(.+?)_/g, "$1").replace(/~~(.+?)~~/g, "$1").replace(/^#{1,6}\s+/gm, "").replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1 ($2)").replace(/!\[([^\]]*)\]\([^)]+\)/g, "[$1]").replace(/^>\s+/gm, "").replace(/^[-*_]{3,}$/gm, "---").replace(/^[\s]*[-*+]\s+/gm, "- ").replace(/^[\s]*(\d+)\.\s+/gm, "$1. ").replace(/\n{3,}/g, `

`).trim();
}
async function sendText(params) {
  const clientId = randomUUID();
  await sendMessage(params.baseUrl, params.token, {
    to_user_id: params.to,
    from_user_id: "",
    client_id: clientId,
    message_type: MessageType.BOT,
    message_state: MessageState.FINISH,
    context_token: params.contextToken,
    item_list: [
      {
        type: MessageItemType.TEXT,
        text_item: { text: markdownToPlainText(params.text) }
      }
    ]
  });
  return { messageId: clientId };
}
async function sendItems(params) {
  let lastClientId = "";
  for (const item of params.items) {
    lastClientId = randomUUID();
    await sendMessage(params.baseUrl, params.token, {
      to_user_id: params.to,
      from_user_id: "",
      client_id: lastClientId,
      message_type: MessageType.BOT,
      message_state: MessageState.FINISH,
      context_token: params.contextToken,
      item_list: [item]
    });
  }
  return lastClientId;
}
async function sendMediaFile(params) {
  const mediaType = guessMediaType(params.filePath);
  const uploaded = await uploadFile({
    filePath: params.filePath,
    toUserId: params.to,
    mediaType,
    apiBaseUrl: params.baseUrl,
    token: params.token,
    cdnBaseUrl: params.cdnBaseUrl
  });
  const cdnMedia = {
    encrypt_query_param: uploaded.encryptQueryParam,
    aes_key: uploaded.aesKey,
    encrypt_type: 1
  };
  const items = [];
  if (params.text) {
    items.push({
      type: MessageItemType.TEXT,
      text_item: { text: markdownToPlainText(params.text) }
    });
  }
  switch (mediaType) {
    case 1:
      items.push({
        type: MessageItemType.IMAGE,
        image_item: { media: cdnMedia, mid_size: uploaded.fileSize }
      });
      break;
    case 2:
      items.push({
        type: MessageItemType.VIDEO,
        video_item: { media: cdnMedia, video_size: uploaded.fileSize }
      });
      break;
    default:
      items.push({
        type: MessageItemType.FILE,
        file_item: {
          media: cdnMedia,
          file_name: uploaded.fileName,
          len: String(uploaded.rawSize)
        }
      });
      break;
  }
  const messageId = await sendItems({
    items,
    to: params.to,
    baseUrl: params.baseUrl,
    token: params.token,
    contextToken: params.contextToken
  });
  return { messageId };
}
// packages/weixin/src/monitor.ts
import {
  existsSync as existsSync4,
  mkdirSync as mkdirSync3,
  readFileSync as readFileSync4,
  writeFileSync as writeFileSync4
} from "fs";
import { tmpdir as tmpdir2 } from "os";
import { basename as basename2, join as join4 } from "path";

// packages/weixin/src/permissions.ts
var PENDING_PERMISSION_TTL_MS = 15 * 60 * 1000;
var pendingPermissions = new Map;
var activePermissionChat = null;
function pruneExpiredPendingPermissions(now = Date.now()) {
  for (const [requestId, entry] of pendingPermissions.entries()) {
    if (entry.expiresAt <= now) {
      pendingPermissions.delete(requestId);
    }
  }
}
function setActivePermissionChat(chatId, contextToken) {
  activePermissionChat = { chatId, contextToken, updatedAt: Date.now() };
}
function getActivePermissionChat() {
  return activePermissionChat;
}
function savePendingPermission(request, chatId, contextToken) {
  pruneExpiredPendingPermissions();
  const entry = {
    ...request,
    chatId,
    contextToken,
    createdAt: Date.now(),
    expiresAt: Date.now() + PENDING_PERMISSION_TTL_MS
  };
  pendingPermissions.set(request.request_id.toLowerCase(), entry);
  return entry;
}
function consumePendingPermission(requestId, fromUserId) {
  pruneExpiredPendingPermissions();
  const key = requestId.toLowerCase();
  const entry = pendingPermissions.get(key);
  if (!entry)
    return null;
  if (entry.chatId !== fromUserId)
    return null;
  pendingPermissions.delete(key);
  return entry;
}

// packages/weixin/src/monitor.ts
var PERMISSION_REPLY_RE = /^\s*(y|yes|n|no)\s+([a-km-z]{5})\s*$/i;
var contextTokens = new Map;
function getContextToken(userId) {
  return contextTokens.get(userId);
}
function cursorPath() {
  return join4(getStateDir(), "cursor.txt");
}
function loadCursor() {
  const path = cursorPath();
  if (existsSync4(path))
    return readFileSync4(path, "utf-8").trim();
  return "";
}
function saveCursor(cursor) {
  writeFileSync4(cursorPath(), cursor, "utf-8");
}
async function downloadMedia(item, cdnBaseUrl) {
  let encryptQueryParam;
  let aesKey;
  let ext = "";
  let mediaType = "";
  switch (item.type) {
    case MessageItemType.IMAGE:
      encryptQueryParam = item.image_item?.media?.encrypt_query_param;
      aesKey = item.image_item?.aeskey ? Buffer.from(item.image_item.aeskey, "hex").toString("base64") : item.image_item?.media?.aes_key;
      ext = ".jpg";
      mediaType = "image";
      break;
    case MessageItemType.VOICE:
      encryptQueryParam = item.voice_item?.media?.encrypt_query_param;
      aesKey = item.voice_item?.media?.aes_key;
      ext = ".silk";
      mediaType = "voice";
      break;
    case MessageItemType.FILE:
      encryptQueryParam = item.file_item?.media?.encrypt_query_param;
      aesKey = item.file_item?.media?.aes_key;
      ext = item.file_item?.file_name ? `.${item.file_item.file_name.split(".").pop()}` : "";
      mediaType = "file";
      break;
    case MessageItemType.VIDEO:
      encryptQueryParam = item.video_item?.media?.encrypt_query_param;
      aesKey = item.video_item?.media?.aes_key;
      ext = ".mp4";
      mediaType = "video";
      break;
    default:
      return null;
  }
  if (!encryptQueryParam || !aesKey)
    return null;
  try {
    const data = await downloadAndDecrypt({
      encryptQueryParam,
      aesKey,
      cdnBaseUrl
    });
    const dir = join4(tmpdir2(), "weixin-media");
    if (!existsSync4(dir))
      mkdirSync3(dir, { recursive: true });
    const rawFileName = item.file_item?.file_name || `${Date.now()}${ext}`;
    const fileName = basename2(rawFileName);
    const filePath = join4(dir, fileName);
    writeFileSync4(filePath, data);
    return { path: filePath, type: mediaType };
  } catch (error) {
    process.stderr.write(`[weixin] Failed to download media: ${error}
`);
    return null;
  }
}
function extractPermissionReply(text) {
  const match = text.match(PERMISSION_REPLY_RE);
  if (!match)
    return null;
  const behavior = match[1]?.toLowerCase().startsWith("y") ? "allow" : "deny";
  const requestId = match[2]?.toLowerCase();
  if (!requestId)
    return null;
  return { requestId, behavior };
}
async function startPollLoop(params) {
  const {
    baseUrl,
    cdnBaseUrl,
    token,
    onMessage,
    onPermissionResponse,
    abortSignal
  } = params;
  let cursor = loadCursor();
  let consecutiveErrors = 0;
  process.stderr.write(`[weixin] Starting message poll loop...
`);
  while (!abortSignal.aborted) {
    try {
      const response = await getUpdates(baseUrl, token, cursor, abortSignal);
      if (response.errcode === -14) {
        process.stderr.write(`[weixin] Session expired (errcode -14). Pausing for 30s...
`);
        await new Promise((resolve) => setTimeout(resolve, 30000));
        continue;
      }
      if (response.ret !== 0 && response.ret !== undefined) {
        throw new Error(`getUpdates error: ret=${response.ret} errcode=${response.errcode} ${response.errmsg}`);
      }
      consecutiveErrors = 0;
      if (response.get_updates_buf) {
        cursor = response.get_updates_buf;
        saveCursor(cursor);
      }
      if (response.msgs && response.msgs.length > 0) {
        for (const msg of response.msgs) {
          await processMessage(msg, {
            baseUrl,
            cdnBaseUrl,
            token,
            onMessage,
            onPermissionResponse
          });
        }
      }
    } catch (error) {
      if (abortSignal.aborted)
        break;
      consecutiveErrors += 1;
      process.stderr.write(`[weixin] Poll error (${consecutiveErrors}): ${error instanceof Error ? error.message : String(error)}
`);
      if (consecutiveErrors >= 3) {
        process.stderr.write(`[weixin] Too many consecutive errors, backing off 30s...
`);
        await new Promise((resolve) => setTimeout(resolve, 30000));
        consecutiveErrors = 0;
      } else {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
    }
  }
  process.stderr.write(`[weixin] Poll loop stopped.
`);
}
async function processMessage(msg, ctx) {
  if (msg.message_type !== MessageType.USER)
    return;
  const fromUserId = msg.from_user_id;
  if (!fromUserId)
    return;
  if (msg.context_token) {
    contextTokens.set(fromUserId, msg.context_token);
  }
  if (!isAllowed(fromUserId)) {
    const code = addPendingPairing(fromUserId);
    try {
      await sendText({
        to: fromUserId,
        text: `Your pairing code is: ${code}

Ask the operator to confirm:
mimo weixin access pair ${code}`,
        baseUrl: ctx.baseUrl,
        token: ctx.token,
        contextToken: msg.context_token || ""
      });
    } catch (error) {
      process.stderr.write(`[weixin] Failed to send pairing code: ${error}
`);
    }
    return;
  }
  setActivePermissionChat(fromUserId, msg.context_token);
  let textContent = "";
  let mediaPath;
  let mediaType;
  if (msg.item_list) {
    for (const item of msg.item_list) {
      if (item.type === MessageItemType.TEXT && item.text_item?.text) {
        textContent += `${textContent ? `
` : ""}${item.text_item.text}`;
      } else if (item.type === MessageItemType.IMAGE || item.type === MessageItemType.VOICE || item.type === MessageItemType.FILE || item.type === MessageItemType.VIDEO) {
        const downloaded = await downloadMedia(item, ctx.cdnBaseUrl);
        if (downloaded) {
          mediaPath = downloaded.path;
          mediaType = downloaded.type;
        }
        if (item.type === MessageItemType.VOICE && item.voice_item?.text) {
          textContent += `${textContent ? `
` : ""}[Voice transcription]: ${item.voice_item.text}`;
        }
      }
    }
  }
  if (!textContent && !mediaPath)
    return;
  if (textContent && ctx.onPermissionResponse) {
    const permissionReply = extractPermissionReply(textContent);
    if (permissionReply) {
      const pending = consumePendingPermission(permissionReply.requestId, fromUserId);
      if (pending) {
        await ctx.onPermissionResponse({
          requestId: pending.request_id,
          behavior: permissionReply.behavior,
          fromUserId
        });
        return;
      }
    }
  }
  await ctx.onMessage({
    fromUserId,
    messageId: String(msg.message_id || ""),
    text: textContent || "(media attachment)",
    attachmentPath: mediaPath,
    attachmentType: mediaType
  });
}
// packages/weixin/src/server.ts
init_server();
init_stdio();
init_types();
import { existsSync as existsSync5 } from "fs";
function formatPermissionRequestMessage(request) {
  return [
    "MiMo Code needs your approval.",
    "",
    `Tool: ${request.tool_name}`,
    `Reason: ${request.description}`,
    `Input: ${request.input_preview}`,
    "",
    `Reply with: yes ${request.request_id}`,
    `Or deny with: no ${request.request_id}`
  ].join(`
`);
}
function createWeixinMcpServer(version) {
  const server = new Server({ name: "weixin", version }, {
    capabilities: {
      experimental: {
        "claude/channel": {},
        "claude/channel/permission": {}
      },
      tools: {}
    },
    instructions: 'Messages from WeChat arrive as <channel source="plugin:weixin:weixin" chat_id="..." sender_id="...">. Reply using the reply tool with the chat_id from the channel tag. Use absolute paths for file attachments.'
  });
  server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: [
      {
        name: "reply",
        description: "Reply to a WeChat message. Pass the chat_id from the channel tag.",
        inputSchema: {
          type: "object",
          properties: {
            chat_id: {
              type: "string",
              description: "The chat_id from the channel notification"
            },
            text: { type: "string", description: "The reply text" },
            files: {
              type: "array",
              items: { type: "string" },
              description: "Optional absolute file paths to attach"
            }
          },
          required: ["chat_id", "text"]
        }
      },
      {
        name: "send_typing",
        description: "Send a typing indicator to a WeChat user.",
        inputSchema: {
          type: "object",
          properties: {
            chat_id: { type: "string", description: "The chat_id (user ID)" }
          },
          required: ["chat_id"]
        }
      }
    ]
  }));
  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;
    const account = loadAccount();
    if (!account) {
      return {
        content: [
          {
            type: "text",
            text: "WeChat not connected. Run `mimo weixin login` first."
          }
        ],
        isError: true
      };
    }
    const baseUrl = account.baseUrl || DEFAULT_BASE_URL;
    const cdnBaseUrl = CDN_BASE_URL;
    switch (name) {
      case "reply": {
        const chatId = typeof args?.chat_id === "string" ? args.chat_id : "";
        const text = typeof args?.text === "string" ? args.text : "";
        const files = Array.isArray(args?.files) ? args.files.filter((value) => typeof value === "string") : undefined;
        if (!chatId || !text) {
          return {
            content: [
              { type: "text", text: "Missing chat_id or text parameter." }
            ],
            isError: true
          };
        }
        const contextToken = getContextToken(chatId) || "";
        try {
          if (files && files.length > 0) {
            for (const [index, filePath] of files.entries()) {
              if (!existsSync5(filePath)) {
                return {
                  content: [
                    { type: "text", text: `File not found: ${filePath}` }
                  ],
                  isError: true
                };
              }
              await sendMediaFile({
                filePath,
                to: chatId,
                text: index === 0 ? text : "",
                baseUrl,
                token: account.token,
                contextToken,
                cdnBaseUrl
              });
            }
            return {
              content: [{ type: "text", text: "Message sent with attachments." }]
            };
          }
          await sendText({
            to: chatId,
            text,
            baseUrl,
            token: account.token,
            contextToken
          });
          return { content: [{ type: "text", text: "Message sent." }] };
        } catch (error) {
          return {
            content: [{ type: "text", text: `Failed to send: ${error}` }],
            isError: true
          };
        }
      }
      case "send_typing": {
        const chatId = typeof args?.chat_id === "string" ? args.chat_id : "";
        if (!chatId) {
          return {
            content: [{ type: "text", text: "Missing chat_id parameter." }],
            isError: true
          };
        }
        try {
          const contextToken = getContextToken(chatId);
          const config = await getConfig(baseUrl, account.token, chatId, contextToken);
          if (config.typing_ticket) {
            await sendTyping(baseUrl, account.token, {
              ilink_user_id: chatId,
              typing_ticket: config.typing_ticket,
              status: TypingStatus.TYPING
            });
          }
          return {
            content: [{ type: "text", text: "Typing indicator sent." }]
          };
        } catch (error) {
          return {
            content: [{ type: "text", text: `Failed to send typing: ${error}` }],
            isError: true
          };
        }
      }
      default:
        return {
          content: [{ type: "text", text: `Unknown tool: ${name}` }],
          isError: true
        };
    }
  });
  return server;
}
async function runWeixinMcpServer(version, deps) {
  deps.enableConfigs();
  deps.initializeAnalyticsSink();
  const account = loadAccount();
  if (!account) {
    process.stderr.write("[weixin] No account configured. Run `mimo weixin login` to connect your WeChat account.\n");
    await Promise.all([deps.shutdown1PEventLogging(), deps.shutdownDatadog()]);
    process.exit(1);
  }
  const server = createWeixinMcpServer(version);
  const transport = new StdioServerTransport;
  deps.registerPermissionHandler(server, async (request) => {
    const targetChatId = request.channel_context?.chat_id;
    const targetChat = targetChatId ? {
      chatId: targetChatId,
      contextToken: getContextToken(targetChatId)
    } : getActivePermissionChat();
    if (!targetChat) {
      deps.logForDebugging(`[Weixin MCP] No active chat available for permission request ${request.request_id}`);
      return;
    }
    try {
      savePendingPermission(request, targetChat.chatId, targetChat.contextToken);
      await sendText({
        to: targetChat.chatId,
        text: formatPermissionRequestMessage(request),
        baseUrl,
        token: account.token,
        contextToken: targetChat.contextToken || ""
      });
    } catch (error) {
      process.stderr.write(`[weixin] Failed to relay permission request ${request.request_id}: ${error}
`);
    }
  });
  await server.connect(transport);
  const baseUrl = account.baseUrl || DEFAULT_BASE_URL;
  const controller = new AbortController;
  let exiting = false;
  const shutdownAndExit = async () => {
    if (exiting)
      return;
    exiting = true;
    if (!controller.signal.aborted) {
      controller.abort();
    }
    await Promise.all([deps.shutdown1PEventLogging(), deps.shutdownDatadog()]);
    process.exit(0);
  };
  process.stdin.on("end", () => void shutdownAndExit());
  process.stdin.on("error", () => void shutdownAndExit());
  process.on("SIGINT", () => void shutdownAndExit());
  process.on("SIGTERM", () => void shutdownAndExit());
  process.on("SIGHUP", () => void shutdownAndExit());
  const ppid = process.ppid;
  const parentCheck = setInterval(() => {
    try {
      process.kill(ppid, 0);
    } catch {
      process.stderr.write(`[weixin] Parent process exited, shutting down...
`);
      clearInterval(parentCheck);
      shutdownAndExit();
    }
  }, 5000);
  deps.logForDebugging("[Weixin MCP] Starting poll loop");
  await startPollLoop({
    baseUrl,
    cdnBaseUrl: CDN_BASE_URL,
    token: account.token,
    onMessage: async (msg) => {
      await server.notification({
        method: "notifications/claude/channel",
        params: {
          content: msg.text,
          meta: {
            chat_id: msg.fromUserId,
            sender_id: msg.fromUserId,
            message_id: msg.messageId,
            ...msg.attachmentPath && { attachment_path: msg.attachmentPath },
            ...msg.attachmentType && { attachment_type: msg.attachmentType }
          }
        }
      });
    },
    onPermissionResponse: async (response) => {
      await server.notification({
        method: "notifications/claude/channel/permission",
        params: {
          request_id: response.requestId,
          behavior: response.behavior
        }
      });
    },
    abortSignal: controller.signal
  });
  clearInterval(parentCheck);
  await shutdownAndExit();
}
// packages/weixin/src/cli.ts
function printUsage() {
  process.stdout.write([
    "Usage:",
    "  mimo weixin serve",
    "  mimo weixin login",
    "  mimo weixin login clear",
    "  mimo weixin access pair <code>",
    "",
    "Session enablement:",
    "  mimo --channels plugin:weixin@builtin"
  ].join(`
`) + `
`);
}
async function runLogin(clear = false) {
  if (clear) {
    clearAccount();
    process.stdout.write(`WeChat account cleared.
`);
    return;
  }
  const existing = loadAccount();
  if (existing) {
    process.stdout.write([
      "Already connected:",
      `  User ID: ${existing.userId || "unknown"}`,
      `  Connected since: ${existing.savedAt}`,
      "",
      "Run `mimo weixin login clear` to disconnect.",
      "Restart MiMo Code with:",
      "  mimo --channels plugin:weixin@builtin"
    ].join(`
`) + `
`);
    return;
  }
  process.stdout.write(`Starting WeChat QR login...

`);
  const qr = await startLogin(DEFAULT_BASE_URL);
  process.stdout.write(`
Scan the QR code above with WeChat, or open this URL:
${qr.qrcodeUrl || ""}

`);
  const result = await waitForLogin({
    qrcodeId: qr.qrcodeId,
    apiBaseUrl: DEFAULT_BASE_URL
  });
  if (!result.connected || !result.token) {
    process.stderr.write(`Login failed: ${result.message}
`);
    process.exit(1);
  }
  saveAccount({
    token: result.token,
    baseUrl: result.baseUrl || DEFAULT_BASE_URL,
    userId: result.userId,
    savedAt: new Date().toISOString()
  });
  process.stdout.write([
    "Connected successfully!",
    `  User ID: ${result.userId || "unknown"}`,
    `  Base URL: ${result.baseUrl || DEFAULT_BASE_URL}`,
    "",
    "Restart MiMo Code with:",
    "  mimo --channels plugin:weixin@builtin"
  ].join(`
`) + `
`);
}
function runAccess(args) {
  if (args[0] !== "pair" || !args[1]) {
    printUsage();
    process.exit(1);
  }
  const userId = confirmPairing(args[1]);
  if (!userId) {
    process.stderr.write(`Invalid or expired pairing code.
`);
    process.exit(1);
  }
  process.stdout.write(`Paired successfully: ${userId}
`);
}
async function handleWeixinCli(args, serverDeps, version) {
  const [subcommand, ...rest] = args;
  switch (subcommand) {
    case "serve":
      if (!serverDeps) {
        process.stderr.write(`[weixin] serve handler not available in this context.
`);
        process.exit(1);
      }
      await runWeixinMcpServer(version ?? "0.0.0", serverDeps);
      return;
    case "login":
      await runLogin(rest[0] === "clear");
      return;
    case "access":
      runAccess(rest);
      return;
    default:
      printUsage();
  }
}
export {
  waitForLogin,
  uploadFile,
  startPollLoop,
  startLogin,
  setActivePermissionChat,
  sendTyping,
  sendText,
  sendMessage,
  sendMediaFile,
  savePendingPermission,
  saveAccount,
  saveAccessConfig,
  runWeixinMcpServer,
  parseAesKey,
  markdownToPlainText,
  loadAccount,
  loadAccessConfig,
  isAllowed,
  handleWeixinCli,
  guessMediaType,
  getUploadUrl,
  getUpdates,
  getStateDir,
  getContextToken,
  getConfig,
  getActivePermissionChat,
  extractPermissionReply,
  encryptAesEcb,
  downloadRemoteToTemp,
  downloadAndDecrypt,
  decryptAesEcb,
  createWeixinMcpServer,
  consumePendingPermission,
  confirmPairing,
  clearAccount,
  buildCdnUploadUrl,
  buildCdnDownloadUrl,
  aesEcbPaddedSize,
  addPendingPairing,
  UploadMediaType,
  TypingStatus,
  MessageType,
  MessageState,
  MessageItemType,
  DEFAULT_BASE_URL,
  CDN_BASE_URL
};
