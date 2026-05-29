import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { performance } from "node:perf_hooks";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = path.join(ROOT, ".e2e-output");
const CONFIG_PATH = path.join(os.homedir(), ".mimo", "mimo.config.json");

const IMAGE_URL = "https://example-files.cnbj1.mi-fds.com/example-files/image/image_example.png";
const CASE_TIMEOUT_MS = 180_000;
const FETCH_TIMEOUT_MS = 90_000;

await fs.mkdir(OUT_DIR, { recursive: true });

const startedAt = performance.now();
const startedAtDate = new Date();
const config = await loadConfig();
const results = [];

await runCase("basic-chat", async () => {
  const content = await testBasicChat();
  return {
    ok: /MiModex|connection|ok|连接/i.test(content),
    detail: content.slice(0, 220),
  };
});

let defaultTts = null;
await runCase("tts-default-wav", async () => {
  defaultTts = await synthesizeSpeech({
    model: "mimo-v2.5-tts",
    text: "MiModex capability check.",
    instruction: "自然清晰，语速正常。",
    voice: "mimo_default",
    format: "wav",
  });
  const audioPath = path.join(OUT_DIR, "capability-tts-default.wav");
  await fs.writeFile(audioPath, defaultTts.bytes);
  return {
    ok: isWav(defaultTts.bytes) && defaultTts.bytes.length > 44,
    detail: `${defaultTts.mimeType}, ${defaultTts.bytes.length} bytes, ${path.relative(ROOT, audioPath)}`,
  };
});

await runCase("tts-voiceclone-uploaded-sample", async () => {
  if (!defaultTts) throw new Error("默认 TTS 未生成样本音频");
  const sample = `data:audio/wav;base64,${defaultTts.bytes.toString("base64")}`;
  const cloned = await synthesizeSpeech({
    model: "mimo-v2.5-tts-voiceclone",
    text: "MiModex voice clone check.",
    instruction: "参考样本音色，稳定清晰。",
    voiceSample: sample,
    format: "wav",
  });
  const audioPath = path.join(OUT_DIR, "capability-tts-voiceclone.wav");
  await fs.writeFile(audioPath, cloned.bytes);
  return {
    ok: isWav(cloned.bytes) && cloned.bytes.length > 44,
    detail: `${cloned.mimeType}, ${cloned.bytes.length} bytes, sample=data URL upload, ${path.relative(ROOT, audioPath)}`,
  };
});

await runCase("multimodal-image-url", async () => {
  const data = await retry(async () => postChatCompletions({
    model: "mimo-v2.5",
    messages: [
      {
        role: "user",
        content: [
          { type: "image_url", image_url: { url: IMAGE_URL } },
          { type: "text", text: "请用一句话描述这张图片。" },
        ],
      },
    ],
    max_completion_tokens: 128,
    temperature: 0.2,
    thinking: { type: "disabled" },
    stream: false,
  }), 2);
  await writeJson("capability-multimodal-response.json", redact(data));
  const content = getTextContent(data);
  return {
    ok: content.trim().length > 0,
    detail: content.slice(0, 220),
  };
});

await runCase("web-search-closed-loop", async () => {
  const output = await retry(async () => runWebSearch({
    model: "mimo-v2.5-pro",
    query: "MiMo Web Search 最新用法",
    maxKeyword: 2,
    limit: 3,
  }), 2);
  await writeJson("capability-web-search-response.json", redact(output));
  return {
    ok: output.content.trim().length > 0 && output.sources.length > 0,
    detail: `${output.sources.length} sources; ${output.content.slice(0, 180)}`,
  };
});

const summary = {
  startedAt: startedAtDate.toISOString(),
  finishedAt: new Date().toISOString(),
  durationMs: Math.round(performance.now() - startedAt),
  outputDir: OUT_DIR,
  ok: results.every((item) => item.ok),
  results,
};

await writeJson("summary-capabilities.json", summary);
console.log(JSON.stringify(summary, null, 2));

if (!summary.ok) {
  process.exitCode = 1;
}

async function runCase(name, fn) {
  const start = performance.now();
  try {
    const outcome = await withTimeout(fn(), CASE_TIMEOUT_MS, `${name} 超过 ${CASE_TIMEOUT_MS / 1000} 秒未完成`);
    results.push({
      name,
      ok: Boolean(outcome.ok),
      detail: String(outcome.detail ?? ""),
      durationMs: Math.round(performance.now() - start),
    });
  } catch (err) {
    results.push({
      name,
      ok: false,
      detail: err instanceof Error ? err.message : String(err),
      durationMs: Math.round(performance.now() - start),
    });
  }
}

async function retry(fn, attempts = 2) {
  let lastErr;
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    try {
      return await fn();
    } catch (err) {
      lastErr = err;
    }
  }
  throw lastErr;
}

function withTimeout(promise, timeoutMs, message) {
  let timer;
  const timeout = new Promise((_, reject) => {
    timer = setTimeout(() => reject(new Error(message)), timeoutMs);
  });
  return Promise.race([promise, timeout]).finally(() => clearTimeout(timer));
}

async function loadConfig() {
  const raw = await fs.readFile(CONFIG_PATH, "utf8");
  const parsed = JSON.parse(raw);
  if (!parsed.apiKey) throw new Error(`${CONFIG_PATH} 缺少 apiKey`);
  return {
    apiKey: parsed.apiKey,
    baseUrl: parsed.baseUrl || "https://token-plan-sgp.xiaomimimo.com/anthropic",
  };
}

async function testBasicChat() {
  const data = await postChatCompletions({
    model: "mimo-v2.5",
    messages: [{ role: "user", content: "请只回复 MiModex connection ok" }],
    max_completion_tokens: 64,
    thinking: { type: "disabled" },
    stream: false,
  });
  await writeJson("capability-basic-chat-response.json", redact(data));
  return getTextContent(data);
}

async function runWebSearch({ model, query, maxKeyword, limit }) {
  const toolDefinition = {
    type: "function",
    function: {
      name: "web_search",
      description: "Search the public web for current information.",
      parameters: {
        type: "object",
        properties: {
          query: { type: "string", description: "Search query" },
        },
        required: ["query"],
      },
    },
  };

  const messages = [{ role: "user", content: query }];
  const firstData = await postChatCompletions({
    model,
    messages,
    tools: [toolDefinition],
    tool_choice: { type: "function", function: { name: "web_search" } },
    max_completion_tokens: 2048,
    temperature: 1.0,
    top_p: 0.95,
    stop: null,
    frequency_penalty: 0,
    presence_penalty: 0,
    thinking: { type: "disabled" },
    stream: false,
  });

  const toolCalls = getPath(firstData, ["choices", 0, "message", "tool_calls"]);
  if (!Array.isArray(toolCalls) || toolCalls.length === 0) {
    const searchResult = await webSearchDocuments(query, limit);
    messages.push({
      role: "tool",
      tool_call_id: "mimodex-web-search-fallback",
      name: "web_search",
      content: formatSearchToolContent(searchResult),
    });
    messages.push({
      role: "user",
      content: "请基于上面的 web_search 工具结果直接回答最初的问题；不要再次调用工具；如果有来源，请列出来源链接。",
    });
    const finalData = await postChatCompletions({
      model,
      messages,
      tools: [toolDefinition],
      max_completion_tokens: 2048,
      temperature: 1.0,
      top_p: 0.95,
      stop: null,
      frequency_penalty: 0,
      presence_penalty: 0,
      thinking: { type: "disabled" },
      stream: false,
    });
    return {
      content: getTextContent(finalData),
      sources: mergeSources(extractWebSources(searchResult), extractWebSources(finalData)),
      raw: { first: firstData, final: finalData, fallbackSearch: searchResult },
    };
  }

  const firstMessage = getPath(firstData, ["choices", 0, "message"]);
  messages.push(isRecord(firstMessage) ? firstMessage : { role: "assistant", content: "" });

  for (const toolCall of toolCalls.slice(0, maxKeyword)) {
    if (!isRecord(toolCall) || !isRecord(toolCall.function)) continue;
    const searchQuery = extractToolSearchQuery(toolCall.function.arguments) || query;
    const docs = await webSearchDocuments(searchQuery, limit);
    messages.push({
      role: "tool",
      tool_call_id: toolCall.id,
      name: "web_search",
      content: formatSearchToolContent(docs),
    });
  }

  messages.push({
    role: "user",
    content: "请基于上面的 web_search 工具结果直接回答最初的问题；不要再次调用工具；如果有来源，请列出来源链接。",
  });

  const finalData = await postChatCompletions({
    model,
    messages,
    tools: [toolDefinition],
    max_completion_tokens: 2048,
    temperature: 1.0,
    top_p: 0.95,
    stop: null,
    frequency_penalty: 0,
    presence_penalty: 0,
    thinking: { type: "disabled" },
    stream: false,
  });

  return {
    content: getTextContent(finalData),
    sources: mergeSources(extractWebSources(messages), extractWebSources(finalData)),
    raw: { first: firstData, final: finalData },
  };
}

async function webSearchDocuments(query, limit) {
  const errors = [];
  for (const url of searchDocumentUrls(query)) {
    try {
      const response = await retry(async () => fetchWithTimeout(url, {
        headers: {
          Accept: "text/html,text/plain",
          "User-Agent": "Mozilla/5.0 MiModex/1.0",
        },
      }), 2);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const rawText = await response.text();
      return {
        query,
        results: parseSearchResults(rawText, limit),
        rawText,
        sourceUrl: url,
      };
    } catch (err) {
      errors.push(`${url}: ${err instanceof Error ? err.message : String(err)}`);
    }
  }
  throw new Error(`联网搜索请求失败：${errors.join("；")}`);
}

function searchDocumentUrls(query) {
  const encoded = encodeURIComponent(query);
  return [
    `https://lite.duckduckgo.com/lite/?q=${encoded}`,
    `https://html.duckduckgo.com/html/?q=${encoded}`,
    `https://www.bing.com/search?q=${encoded}`,
    `https://r.jina.ai/http://lite.duckduckgo.com/lite/?q=${encoded}`,
    `https://r.jina.ai/http://www.bing.com/search?q=${encoded}`,
  ];
}

async function synthesizeSpeech(request) {
  const messages = [];
  if (request.instruction?.trim()) {
    messages.push({ role: "user", content: request.instruction.trim() });
  }
  messages.push({ role: "assistant", content: request.text });

  const audio = { format: request.format };
  if (request.model === "mimo-v2.5-tts") {
    audio.voice = request.voice || "mimo_default";
  }
  if (request.model === "mimo-v2.5-tts-voiceclone") {
    audio.voice = normalizeVoiceCloneAudioInput(request.voiceSample);
  }

  const data = await postChatCompletions({
    model: request.model,
    messages,
    audio,
    stream: false,
  });
  await writeJson(`capability-${request.model}-response.json`, redact(data));

  const audioBase64 = getPath(data, ["choices", 0, "message", "audio", "data"]);
  if (typeof audioBase64 !== "string" || !audioBase64) {
    throw new Error("TTS 响应中没有 audio.data");
  }
  return normalizeTtsAudio(Buffer.from(audioBase64.replace(/\s+/g, ""), "base64"), request.format, extractAudioMetadata(data));
}

async function postChatCompletions(payload) {
  const endpoint = `${getOpenAiBaseUrl(config.baseUrl)}/chat/completions`;
  const response = await fetchWithTimeout(endpoint, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "api-key": config.apiKey,
    },
    body: JSON.stringify(payload),
  });
  return readJsonResponse(response, "MiMo API");
}

async function postAnthropicMessages(payload) {
  const endpoint = `${getAnthropicBaseUrl(config.baseUrl)}/v1/messages`;
  const response = await fetchWithTimeout(endpoint, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "api-key": config.apiKey,
      "x-api-key": config.apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify(payload),
  });
  return readJsonResponse(response, "MiMo Anthropic API");
}

async function fetchWithTimeout(url, options = {}, timeoutMs = FETCH_TIMEOUT_MS) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, {
      ...options,
      signal: controller.signal,
    });
  } catch (err) {
    if (err && err.name === "AbortError") {
      throw new Error(`请求超时：${url}`);
    }
    const cause = err?.cause?.message ? ` (${err.cause.message})` : "";
    throw new Error(`请求失败：${url}: ${err instanceof Error ? err.message : String(err)}${cause}`);
  } finally {
    clearTimeout(timer);
  }
}

async function readJsonResponse(response, label) {
  const text = await response.text();
  if (!response.ok) {
    throw new Error(`${label} 返回 HTTP ${response.status}: ${text.slice(0, 700)}`);
  }
  return JSON.parse(text);
}

function getOpenAiBaseUrl(baseUrl) {
  const trimmed = String(baseUrl || "").replace(/\/+$/, "");
  if (!trimmed) return "https://api.xiaomimimo.com/v1";
  if (trimmed.endsWith("/anthropic")) return `${trimmed.slice(0, -"/anthropic".length)}/v1`;
  if (trimmed.endsWith("/v1")) return trimmed;
  return `${trimmed}/v1`;
}

function getAnthropicBaseUrl(baseUrl) {
  const trimmed = String(baseUrl || "").replace(/\/+$/, "");
  if (!trimmed) return "https://token-plan-sgp.xiaomimimo.com/anthropic";
  if (trimmed.endsWith("/anthropic")) return trimmed;
  if (trimmed.endsWith("/v1")) return `${trimmed.slice(0, -"/v1".length)}/anthropic`;
  return `${trimmed}/anthropic`;
}

function normalizeTtsAudio(bytes, requestedFormat, metadata) {
  const detected = detectAudioFormat(bytes, requestedFormat);
  if (detected.fileExtension !== "pcm") {
    return { bytes, ...detected };
  }
  const wav = createWavFromPcm16(bytes, metadata.sampleRate || 24000, metadata.channels || 1);
  return { bytes: wav, mimeType: "audio/wav", fileExtension: "wav" };
}

function detectAudioFormat(bytes, requestedFormat) {
  const ascii = bytes.subarray(0, 12).toString("ascii");
  if (ascii.startsWith("RIFF") && ascii.includes("WAVE")) return { mimeType: "audio/wav", fileExtension: "wav" };
  if (ascii.startsWith("ID3") || (bytes[0] === 0xff && (bytes[1] & 0xe0) === 0xe0)) return { mimeType: "audio/mpeg", fileExtension: "mp3" };
  if (ascii.startsWith("OggS")) return { mimeType: "audio/ogg", fileExtension: "ogg" };
  if (requestedFormat === "pcm16") return { mimeType: "audio/L16", fileExtension: "pcm" };
  return { mimeType: "audio/L16", fileExtension: "pcm" };
}

function createWavFromPcm16(pcmBytes, sampleRate, channels) {
  const bytesPerSample = 2;
  const blockAlign = channels * bytesPerSample;
  const byteRate = sampleRate * blockAlign;
  const dataSize = pcmBytes.length;
  const wav = Buffer.alloc(44 + dataSize);
  wav.write("RIFF", 0, "ascii");
  wav.writeUInt32LE(36 + dataSize, 4);
  wav.write("WAVE", 8, "ascii");
  wav.write("fmt ", 12, "ascii");
  wav.writeUInt32LE(16, 16);
  wav.writeUInt16LE(1, 20);
  wav.writeUInt16LE(channels, 22);
  wav.writeUInt32LE(sampleRate, 24);
  wav.writeUInt32LE(byteRate, 28);
  wav.writeUInt16LE(blockAlign, 32);
  wav.writeUInt16LE(16, 34);
  wav.write("data", 36, "ascii");
  wav.writeUInt32LE(dataSize, 40);
  pcmBytes.copy(wav, 44);
  return wav;
}

function normalizeVoiceCloneAudioInput(value) {
  const trimmed = String(value || "").trim();
  const match = trimmed.match(/^data:([^;,]+);base64,([\s\S]+)$/i);
  if (match) {
    return `data:${normalizeAudioMimeType(match[1])};base64,${match[2].replace(/\s+/g, "")}`;
  }
  const base64 = trimmed.replace(/\s+/g, "");
  return `data:${detectVoiceSampleMimeType(base64)};base64,${base64}`;
}

function detectVoiceSampleMimeType(base64) {
  const bytes = Buffer.from(base64, "base64");
  const ascii = bytes.subarray(0, 12).toString("ascii");
  if (ascii.startsWith("RIFF") && ascii.includes("WAVE")) return "audio/wav";
  if (ascii.startsWith("ID3") || (bytes[0] === 0xff && (bytes[1] & 0xe0) === 0xe0)) return "audio/mpeg";
  return "audio/wav";
}

function normalizeAudioMimeType(value) {
  const lower = String(value || "").trim().toLowerCase();
  if (lower === "audio/mp3" || lower === "audio/mpeg3" || lower === "audio/x-mpeg-3") return "audio/mpeg";
  if (lower === "audio/x-wav" || lower === "audio/wave" || lower === "audio/vnd.wave") return "audio/wav";
  return lower || "audio/wav";
}

function extractAudioMetadata(data) {
  const audio = getPath(data, ["choices", 0, "message", "audio"]);
  if (!isRecord(audio)) return {};
  return {
    sampleRate: positiveInt(audio.sample_rate ?? audio.sampleRate ?? audio.rate),
    channels: positiveInt(audio.channels ?? audio.channel_count ?? audio.channelCount),
  };
}

function positiveInt(value) {
  const parsed = typeof value === "number" ? value : Number.parseInt(String(value || ""), 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : undefined;
}

function isWav(bytes) {
  return bytes.subarray(0, 4).toString("ascii") === "RIFF" && bytes.subarray(8, 12).toString("ascii") === "WAVE";
}

function parseSearchResults(text, limit) {
  const sources = [];
  const seen = new Set();

  const pushSource = (titleValue, urlValue, snippetValue = "") => {
    const normalized = normalizeSearchUrl(decodeHtml(urlValue));
    const title = stripHtml(titleValue);
    const snippet = stripHtml(snippetValue);
    if (!normalized.startsWith("http") || !title || seen.has(normalized)) return;
    seen.add(normalized);
    sources.push({
      title,
      url: normalized,
      ...(snippet ? { snippet } : {}),
    });
  };

  const linkPattern = /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g;
  let match;
  while ((match = linkPattern.exec(text)) && sources.length < Math.max(1, limit)) {
    const [, title, url] = match;
    pushSource(title, url);
  }

  const duckPattern = /<a[^>]+class=['"]result-link['"][^>]+href=['"]([^'"]+)['"][^>]*>([\s\S]*?)<\/a>[\s\S]*?(?:<td[^>]+class=['"]result-snippet['"][^>]*>([\s\S]*?)<\/td>)?/gi;
  while ((match = duckPattern.exec(text)) && sources.length < Math.max(1, limit)) {
    const [, url, title, snippet = ""] = match;
    pushSource(title, url, snippet);
  }

  const bingPattern = /<h2[^>]*>\s*<a[^>]+href=['"]([^'"]+)['"][^>]*>([\s\S]*?)<\/a>[\s\S]*?(?:<p[^>]*>([\s\S]*?)<\/p>)?/gi;
  while ((match = bingPattern.exec(text)) && sources.length < Math.max(1, limit)) {
    const [, url, title, snippet = ""] = match;
    pushSource(title, url, snippet);
  }
  return sources;
}

function normalizeSearchUrl(url) {
  const cleaned = String(url || "").replace(/&amp;/g, "&").trim();
  const withProtocol = cleaned.startsWith("//") ? `https:${cleaned}` : cleaned;
  try {
    const parsed = new URL(withProtocol);
    const redirected = parsed.searchParams.get("uddg");
    return redirected ? decodeURIComponent(redirected) : withProtocol;
  } catch {
    const match = withProtocol.match(/[?&]uddg=([^&]+)/);
    return match ? decodeURIComponent(match[1]) : withProtocol;
  }
}

function stripHtml(value) {
  return decodeHtml(String(value || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ")).trim();
}

function decodeHtml(value) {
  return String(value || "")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCharCode(Number.parseInt(code, 16)));
}

function extractToolSearchQuery(argumentsValue) {
  if (typeof argumentsValue === "string") {
    try {
      const parsed = JSON.parse(argumentsValue);
      if (isRecord(parsed) && typeof parsed.query === "string") return parsed.query;
    } catch {
      return "";
    }
  }
  if (isRecord(argumentsValue) && typeof argumentsValue.query === "string") return argumentsValue.query;
  return "";
}

function formatSearchToolContent(searchResult) {
  const query = typeof searchResult.query === "string" ? searchResult.query : "";
  const lines = [query ? `搜索词：${query}` : "搜索结果：", ""];
  for (const [index, result] of (searchResult.results || []).entries()) {
    lines.push(`${index + 1}. ${result.title || "未命名结果"}`);
    if (result.url) lines.push(`   URL: ${result.url}`);
    if (result.snippet) lines.push(`   摘要: ${result.snippet}`);
  }
  if ((searchResult.results || []).length === 0 && typeof searchResult.rawText === "string") {
    lines.push(searchResult.rawText.slice(0, 4000));
  }
  return lines.join("\n");
}

function extractWebSources(raw) {
  const seen = new Set();
  const sources = [];
  const visit = (value) => {
    if (typeof value === "string") {
      for (const source of extractSourcesFromText(value)) {
        if (!seen.has(source.url)) {
          seen.add(source.url);
          sources.push(source);
        }
      }
      return;
    }
    if (!value || typeof value !== "object") return;
    if (Array.isArray(value)) {
      value.forEach(visit);
      return;
    }
    const url = typeof value.url === "string" ? value.url : typeof value.link === "string" ? value.link : "";
    if (/^https?:\/\//.test(url) && !seen.has(url)) {
      seen.add(url);
      sources.push({
        url,
        title: typeof value.title === "string" ? value.title : undefined,
        snippet: typeof value.snippet === "string" ? value.snippet : undefined,
      });
    }
    Object.values(value).forEach(visit);
  };
  visit(raw);
  return sources.slice(0, 12);
}

function extractSourcesFromText(text) {
  const sources = [];
  const seen = new Set();
  const markdownPattern = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;
  let markdownMatch;
  while ((markdownMatch = markdownPattern.exec(text)) && sources.length < 12) {
    const [, title, url] = markdownMatch;
    const normalized = normalizeSearchUrl(url);
    if (seen.has(normalized)) continue;
    seen.add(normalized);
    sources.push({ title, url: normalized });
  }

  const urlPattern = /https?:\/\/[^\s)]+/g;
  let urlMatch;
  while ((urlMatch = urlPattern.exec(text)) && sources.length < 12) {
    const url = normalizeSearchUrl(urlMatch[0].replace(/[.,;，。；]+$/, ""));
    if (seen.has(url)) continue;
    seen.add(url);
    sources.push({ title: url, url });
  }
  return sources;
}

function mergeSources(...groups) {
  const seen = new Set();
  const merged = [];
  for (const group of groups) {
    for (const source of group) {
      if (!source.url || seen.has(source.url)) continue;
      seen.add(source.url);
      merged.push(source);
    }
  }
  return merged.slice(0, 12);
}

function getTextContent(data) {
  const value =
    getPath(data, ["choices", 0, "message", "content"]) ??
    getPath(data, ["choices", 0, "message", "reasoning_content"]);
  if (typeof value === "string") return value.trim();
  return JSON.stringify(value ?? "", null, 2);
}

function getAnthropicTextContent(data) {
  const content = getPath(data, ["content"]);
  if (typeof content === "string") return content.trim();
  if (!Array.isArray(content)) return "";
  return content
    .map((block) => (isRecord(block) ? String(block.text || block.content || "") : ""))
    .filter(Boolean)
    .join("")
    .trim();
}

function getPath(value, keys) {
  let current = value;
  for (const key of keys) {
    if (typeof key === "number") {
      if (!Array.isArray(current)) return undefined;
      current = current[key];
      continue;
    }
    if (!isRecord(current)) return undefined;
    current = current[key];
  }
  return current;
}

function isRecord(value) {
  return value && typeof value === "object" && !Array.isArray(value);
}

function redact(value) {
  if (Array.isArray(value)) return value.map(redact);
  if (!isRecord(value)) return value;
  const out = {};
  for (const [key, entry] of Object.entries(value)) {
    if (key === "data" && typeof entry === "string" && entry.length > 500) {
      out[key] = `[redacted base64 ${entry.length} chars]`;
    } else if (/api[-_]?key/i.test(key)) {
      out[key] = "[redacted]";
    } else {
      out[key] = redact(entry);
    }
  }
  return out;
}

async function writeJson(fileName, value) {
  await fs.writeFile(path.join(OUT_DIR, fileName), `${JSON.stringify(value, null, 2)}\n`);
}
