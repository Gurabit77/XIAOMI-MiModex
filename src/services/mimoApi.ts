import type {
  MultimodalRequest,
  MultimodalResult,
  TtsRequest,
  TtsResult,
  WebSearchRequest,
  WebSearchResult,
} from "@/types";
import { useSessionStore } from "@/stores/sessionStore";
import { isDesktopRuntime } from "@/services/config";

const DEFAULT_API_TIMEOUT_MS = 45_000;
const LONG_API_TIMEOUT_MS = 90_000;
const SEARCH_FETCH_TIMEOUT_MS = 20_000;
const DIAGNOSTIC_TEST_TIMEOUT_MS = 35_000;

interface RequestTimeoutOptions {
  timeoutMs?: number;
  label?: string;
}

function getOpenAiBaseUrl(baseUrl: string): string {
  if (!baseUrl) return "https://api.xiaomimimo.com/v1";
  if (baseUrl.includes("/anthropic")) {
    return baseUrl.replace(/\/anthropic\/?$/, "/v1");
  }
  if (baseUrl.endsWith("/v1")) return baseUrl;
  return baseUrl.replace(/\/$/, "") + "/v1";
}

function getAnthropicBaseUrl(baseUrl: string): string {
  if (!baseUrl) return "https://token-plan-sgp.xiaomimimo.com/anthropic";
  const trimmed = baseUrl.replace(/\/+$/, "");
  if (trimmed.endsWith("/anthropic")) return trimmed;
  if (trimmed.endsWith("/v1")) return trimmed.replace(/\/v1$/, "/anthropic");
  return `${trimmed}/anthropic`;
}

async function postChatCompletions(
  payload: Record<string, unknown>,
  options: RequestTimeoutOptions = {},
): Promise<unknown> {
  const { apiKey, baseUrl } = useSessionStore.getState();
  const timeoutMs = options.timeoutMs ?? DEFAULT_API_TIMEOUT_MS;
  const label = options.label ?? "MiMo API 请求";
  if (!apiKey) {
    throw new Error("请先在设置中填写 MIMO_API_KEY");
  }

  if (isDesktopRuntime()) {
    const { invoke } = await import("@tauri-apps/api/core");
    return withTimeout(
      invoke("mimo_chat_completions", {
        apiKey,
        baseUrl,
        payload,
      }),
      timeoutMs,
      label,
    );
  }

  const res = await fetchWithTimeout(`${getOpenAiBaseUrl(baseUrl)}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify(payload),
  }, timeoutMs, label);

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(body || `MiMo API 请求失败：HTTP ${res.status}`);
  }

  return res.json();
}

async function postAnthropicMessages(
  payload: Record<string, unknown>,
  options: RequestTimeoutOptions = {},
): Promise<unknown> {
  const { apiKey, baseUrl } = useSessionStore.getState();
  const timeoutMs = options.timeoutMs ?? DEFAULT_API_TIMEOUT_MS;
  const label = options.label ?? "MiMo Anthropic API 请求";
  if (!apiKey) {
    throw new Error("请先在设置中填写 MIMO_API_KEY");
  }

  if (isDesktopRuntime()) {
    const { invoke } = await import("@tauri-apps/api/core");
    return withTimeout(
      invoke("mimo_anthropic_messages", {
        apiKey,
        baseUrl,
        payload,
      }),
      timeoutMs,
      label,
    );
  }

  const res = await fetchWithTimeout(`${getAnthropicBaseUrl(baseUrl)}/v1/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": apiKey,
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify(payload),
  }, timeoutMs, label);

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(body || `MiMo Anthropic API 请求失败：HTTP ${res.status}`);
  }

  return res.json();
}

export async function synthesizeSpeech(request: TtsRequest): Promise<TtsResult> {
  const messages = [];
  if (request.instruction?.trim()) {
    messages.push({ role: "user", content: request.instruction.trim() });
  }
  messages.push({ role: "assistant", content: request.text });

  const audio: Record<string, unknown> = {
    format: request.format,
  };

  if (request.model === "mimo-v2.5-tts") {
    audio.voice = request.voice || "mimo_default";
  }

  if (request.model === "mimo-v2.5-tts-voicedesign") {
    audio.optimize_text_preview = request.optimizeTextPreview ?? true;
  }

  if (request.model === "mimo-v2.5-tts-voiceclone") {
    if (!request.voiceSample?.trim()) {
      throw new Error("VoiceClone 需要上传或粘贴 mp3/wav 样本音频 Base64");
    }
    audio.voice = normalizeVoiceCloneAudioInput(request.voiceSample.trim());
  }

  const data = await postChatCompletions({
    model: request.model,
    messages,
    audio,
    stream: false,
  }, {
    timeoutMs: LONG_API_TIMEOUT_MS,
    label: "MiMo TTS 语音合成",
  });

  const audioBase64 = getPath(data, ["choices", 0, "message", "audio", "data"]);
  if (typeof audioBase64 !== "string" || audioBase64.length === 0) {
    const message = getPath(data, ["choices", 0, "message"]);
    throw new Error(`TTS 响应中没有 audio.data。响应摘要：${safeJsonSnippet(message ?? data)}`);
  }

  return {
    format: request.format,
    ...normalizeTtsAudio(audioBase64, request.format, extractAudioMetadata(data)),
  };
}

export async function understandMultimodal(request: MultimodalRequest): Promise<MultimodalResult> {
  const mediaBlock = createMediaBlock(request);
  const data = await postChatCompletions({
    model: request.model,
    messages: [
      {
        role: "user",
        content: [
          mediaBlock,
          {
            type: "text",
            text: request.prompt,
          },
        ],
      },
    ],
    max_completion_tokens: 1024,
  }, {
    timeoutMs: LONG_API_TIMEOUT_MS,
    label: "MiMo 多模态理解",
  });

  const content =
    getPath(data, ["choices", 0, "message", "content"]) ??
    getPath(data, ["choices", 0, "message", "reasoning_content"]);
  return {
    content: typeof content === "string" ? content : JSON.stringify(content ?? "", null, 2),
    usage: isRecord(data) ? data.usage as Record<string, unknown> | undefined : undefined,
    raw: data,
  };
}

export async function testMimoApiConnection(): Promise<string> {
  const { baseUrl } = useSessionStore.getState();
  if (baseUrl.includes("/anthropic")) {
    const data = await postAnthropicMessages({
      model: "mimo-v2.5-pro",
      system: "You are MiMo, an AI assistant developed by Xiaomi.",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "请只回复 MiModex connection ok",
            },
          ],
        },
      ],
      max_tokens: 16,
      temperature: 1.0,
      top_p: 0.95,
      stop_sequences: null,
      stream: false,
    }, {
      timeoutMs: DEFAULT_API_TIMEOUT_MS,
      label: "MiMo 连接测试",
    });
    const content = getAnthropicTextContent(data);
    return content.trim() || "Anthropic API 连接成功，服务已返回有效 JSON";
  }

  const data = await postChatCompletions({
    model: "mimo-v2.5",
    messages: [
      {
        role: "user",
        content: "请只回复 MiModex connection ok",
      },
    ],
    max_completion_tokens: 16,
    stream: false,
  }, {
    timeoutMs: DEFAULT_API_TIMEOUT_MS,
    label: "MiMo 连接测试",
  });

  const content = getPath(data, ["choices", 0, "message", "content"]);
  return typeof content === "string" && content.trim()
    ? content.trim()
    : "API 已响应，但响应内容为空";
}

export type MimoCapabilityTestKey = "chat" | "web" | "tts" | "multimodal";

export interface MimoCapabilityTestResult {
  key: MimoCapabilityTestKey;
  label: string;
  ok: boolean;
  message: string;
}

export async function runMimoCapabilityDiagnostics(): Promise<MimoCapabilityTestResult[]> {
  const tests: Array<{
    key: MimoCapabilityTestKey;
    label: string;
    run: () => Promise<string>;
  }> = [
    {
      key: "chat",
      label: "基础对话",
      run: testMimoApiConnection,
    },
    {
      key: "web",
      label: "联网搜索",
      run: async () => {
        const result = await runWebSearch({
          model: "mimo-v2.5-pro",
          query: "请搜索 Xiaomi MiMo Web Search 文档，并只用一句话说明是否可用。",
          forceSearch: true,
          maxKeyword: 1,
          limit: 1,
        });
        return result.content.trim() || "Web Search 已返回有效响应";
      },
    },
    {
      key: "tts",
      label: "语音合成",
      run: async () => {
        const result = await synthesizeSpeech({
          model: "mimo-v2.5-tts",
          text: "MiModex connection ok",
          instruction: "自然清晰，语速正常。",
          voice: "mimo_default",
          format: "wav",
        });
        return result.audioBase64 ? "TTS 已返回音频数据" : "TTS 响应为空";
      },
    },
    {
      key: "multimodal",
      label: "多模态理解",
      run: async () => {
        const result = await understandMultimodal({
          model: "mimo-v2.5",
          kind: "image",
          source: "https://example-files.cnbj1.mi-fds.com/example-files/image/image_example.png",
          prompt: "请用一句话描述这张图片。",
        });
        return result.content.trim() || "多模态接口已返回有效响应";
      },
    },
  ];

  const results: MimoCapabilityTestResult[] = [];
  for (const test of tests) {
    try {
      const message = await withTimeout(test.run(), DIAGNOSTIC_TEST_TIMEOUT_MS, `${test.label}诊断`);
      results.push({
        key: test.key,
        label: test.label,
        ok: true,
        message,
      });
    } catch (err) {
      results.push({
        key: test.key,
        label: test.label,
        ok: false,
        message: err instanceof Error ? err.message : String(err),
      });
    }
  }
  return results;
}

export async function runWebSearch(request: WebSearchRequest): Promise<WebSearchResult> {
  const messages: Array<Record<string, unknown>> = [
    {
      role: "user",
      content: request.query,
    },
  ];
  const toolDefinition = {
    type: "function",
    function: {
      name: "web_search",
      description: "Search the public web for current information.",
      parameters: {
        type: "object",
        properties: {
          query: {
            type: "string",
            description: "Search query",
          },
        },
        required: ["query"],
      },
    },
  };
  const firstData = await postChatCompletions({
    model: request.model,
    messages,
    tools: [toolDefinition],
    tool_choice: request.forceSearch ? { type: "function", function: { name: "web_search" } } : "auto",
    max_completion_tokens: 2048,
    temperature: 1.0,
    top_p: 0.95,
    stop: null,
    frequency_penalty: 0,
    presence_penalty: 0,
    thinking: {
      type: "disabled",
    },
    stream: false,
  }, {
    timeoutMs: DEFAULT_API_TIMEOUT_MS,
    label: "MiMo Web Search 规划",
  });

  const toolCalls = getPath(firstData, ["choices", 0, "message", "tool_calls"]);
  if (Array.isArray(toolCalls) && toolCalls.length > 0) {
    const message = getPath(firstData, ["choices", 0, "message"]);
    messages.push(isRecord(message) ? message : { role: "assistant", content: "" });
    for (const toolCall of toolCalls.slice(0, request.maxKeyword)) {
      if (!isRecord(toolCall)) continue;
      const functionCall = toolCall.function;
      if (!isRecord(functionCall) || functionCall.name !== "web_search") continue;
      const searchQuery = extractToolSearchQuery(functionCall.arguments) || request.query;
      const searchResult = await fetchSearchDocuments(searchQuery, request.limit);
      messages.push({
        role: "tool",
        tool_call_id: toolCall.id,
        name: "web_search",
        content: formatSearchToolContent(searchResult),
      });
    }
    messages.push({
      role: "user",
      content: "请基于上面的 web_search 工具结果直接回答最初的问题；不要再次调用工具；如果有来源，请列出来源链接。",
    });

    const finalData = await postChatCompletions({
      model: request.model,
      messages,
      tools: [toolDefinition],
      max_completion_tokens: 2048,
      temperature: 1.0,
      top_p: 0.95,
      stop: null,
      frequency_penalty: 0,
      presence_penalty: 0,
      thinking: {
        type: "disabled",
      },
      stream: false,
    }, {
      timeoutMs: DEFAULT_API_TIMEOUT_MS,
      label: "MiMo Web Search 汇总",
    });
    const content = getPath(finalData, ["choices", 0, "message", "content"]);
    return {
      content: typeof content === "string" ? content : JSON.stringify(content ?? "", null, 2),
      usage: mergeUsage(firstData, finalData),
      sources: mergeSources(extractWebSources(messages), extractWebSources(finalData)),
      raw: {
        first: firstData,
        final: finalData,
      },
    };
  }

  if (request.forceSearch) {
    const searchResult = await fetchSearchDocuments(request.query, request.limit);
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
      model: request.model,
      messages,
      tools: [toolDefinition],
      max_completion_tokens: 2048,
      temperature: 1.0,
      top_p: 0.95,
      stop: null,
      frequency_penalty: 0,
      presence_penalty: 0,
      thinking: {
        type: "disabled",
      },
      stream: false,
    }, {
      timeoutMs: DEFAULT_API_TIMEOUT_MS,
      label: "MiMo Web Search 汇总",
    });
    const content = getPath(finalData, ["choices", 0, "message", "content"]);
    return {
      content: typeof content === "string" ? content : JSON.stringify(content ?? "", null, 2),
      usage: mergeUsage(firstData, finalData),
      sources: mergeSources(extractWebSources(searchResult), extractWebSources(finalData)),
      raw: {
        first: firstData,
        final: finalData,
        fallbackSearch: searchResult,
      },
    };
  }

  const content = getPath(firstData, ["choices", 0, "message", "content"]);
  return {
    content: typeof content === "string" ? content : JSON.stringify(content ?? "", null, 2),
    usage: isRecord(firstData) ? firstData.usage as Record<string, unknown> | undefined : undefined,
    sources: extractWebSources(firstData),
    raw: firstData,
  };
}

export function audioDataUrl(result: TtsResult): string {
  return `data:${result.mimeType};base64,${result.audioBase64}`;
}

export function audioObjectUrl(result: TtsResult): string {
  const bytes = base64ToBytes(result.audioBase64);
  const audioBuffer = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength) as ArrayBuffer;
  const blob = new Blob([audioBuffer], { type: result.mimeType });
  return URL.createObjectURL(blob);
}

function normalizeVoiceCloneAudioInput(value: string): string {
  const trimmed = value.trim();
  const dataUrlMatch = trimmed.match(/^data:([^;,]+);base64,([\s\S]+)$/i);
  if (dataUrlMatch) {
    const mimeType = normalizeAudioMimeType(dataUrlMatch[1]);
    return `data:${mimeType};base64,${dataUrlMatch[2].replace(/\s+/g, "")}`;
  }

  const base64 = trimmed.replace(/\s+/g, "");
  const mimeType = detectVoiceSampleMimeType(base64);
  return `data:${mimeType};base64,${base64}`;
}

function detectVoiceSampleMimeType(base64: string): string {
  const bytes = base64ToBytes(base64);
  const ascii = String.fromCharCode(...bytes.slice(0, 12));
  if (ascii.startsWith("RIFF") && ascii.includes("WAVE")) {
    return "audio/wav";
  }
  if (ascii.startsWith("ID3") || (bytes[0] === 0xff && (bytes[1] & 0xe0) === 0xe0)) {
    return "audio/mpeg";
  }
  return "audio/wav";
}

function normalizeAudioMimeType(value: string): string {
  const lower = value.trim().toLowerCase();
  if (lower === "audio/mp3" || lower === "audio/mpeg3" || lower === "audio/x-mpeg-3") {
    return "audio/mpeg";
  }
  if (lower === "audio/x-wav" || lower === "audio/wave" || lower === "audio/vnd.wave") {
    return "audio/wav";
  }
  return lower || "audio/wav";
}

function extractToolSearchQuery(argumentsValue: unknown): string {
  if (typeof argumentsValue === "string") {
    try {
      const parsed = JSON.parse(argumentsValue) as unknown;
      if (isRecord(parsed) && typeof parsed.query === "string") return parsed.query;
    } catch {
      return "";
    }
  }
  if (isRecord(argumentsValue) && typeof argumentsValue.query === "string") {
    return argumentsValue.query;
  }
  return "";
}

function formatSearchToolContent(searchResult: unknown): string {
  if (!isRecord(searchResult)) return JSON.stringify(searchResult);
  const query = typeof searchResult.query === "string" ? searchResult.query : "";
  const results = Array.isArray(searchResult.results) ? searchResult.results : [];
  const lines = [
    query ? `搜索词：${query}` : "搜索结果：",
    "",
  ];
  for (const [index, result] of results.entries()) {
    if (!isRecord(result)) continue;
    const title = typeof result.title === "string" ? result.title : "未命名结果";
    const url = typeof result.url === "string" ? result.url : "";
    const snippet = typeof result.snippet === "string" ? result.snippet : "";
    lines.push(`${index + 1}. ${title}`);
    if (url) lines.push(`   URL: ${url}`);
    if (snippet) lines.push(`   摘要: ${snippet}`);
  }
  if (results.length === 0 && typeof searchResult.rawText === "string") {
    lines.push(searchResult.rawText.slice(0, 4000));
  }
  return lines.join("\n");
}

async function fetchSearchDocuments(query: string, limit: number): Promise<unknown> {
  if (isDesktopRuntime()) {
    const { invoke } = await import("@tauri-apps/api/core");
    return withTimeout(
      invoke("web_search_documents", {
        query,
        limit,
      }),
      SEARCH_FETCH_TIMEOUT_MS,
      "网页来源读取",
    );
  }

  const errors: string[] = [];
  for (const url of searchDocumentUrls(query)) {
    try {
      const response = await fetchWithTimeout(url, {
        headers: {
          Accept: "text/html,text/plain",
        },
      }, SEARCH_FETCH_TIMEOUT_MS, "网页来源读取");
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
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

function withTimeout<T>(promise: Promise<T>, timeoutMs: number, label: string): Promise<T> {
  if (!Number.isFinite(timeoutMs) || timeoutMs <= 0) return promise;

  let timer: ReturnType<typeof setTimeout> | undefined;
  const timeout = new Promise<never>((_, reject) => {
    timer = setTimeout(() => {
      reject(new Error(`${label}超过 ${formatTimeout(timeoutMs)} 未响应，已停止等待。请检查网络/API 状态后重试。`));
    }, timeoutMs);
  });

  return Promise.race([promise, timeout]).finally(() => {
    if (timer) clearTimeout(timer);
  });
}

async function fetchWithTimeout(
  input: RequestInfo | URL,
  init: RequestInit,
  timeoutMs: number,
  label: string,
): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(input, {
      ...init,
      signal: controller.signal,
    });
  } catch (err) {
    if (err instanceof DOMException && err.name === "AbortError") {
      throw new Error(`${label}超过 ${formatTimeout(timeoutMs)} 未响应，已停止等待。请检查网络/API 状态后重试。`);
    }
    throw err;
  } finally {
    clearTimeout(timer);
  }
}

function formatTimeout(timeoutMs: number): string {
  const seconds = Math.round(timeoutMs / 1000);
  return seconds >= 60 ? `${Math.round(seconds / 60)} 分钟` : `${seconds} 秒`;
}

function searchDocumentUrls(query: string): string[] {
  const encoded = encodeURIComponent(query);
  return [
    `https://lite.duckduckgo.com/lite/?q=${encoded}`,
    `https://html.duckduckgo.com/html/?q=${encoded}`,
    `https://www.bing.com/search?q=${encoded}`,
    `https://r.jina.ai/http://lite.duckduckgo.com/lite/?q=${encoded}`,
    `https://r.jina.ai/http://www.bing.com/search?q=${encoded}`,
  ];
}

function parseSearchResults(text: string, limit: number): WebSearchResult["sources"] {
  const sources: WebSearchResult["sources"] = [];
  const seen = new Set<string>();

  const pushSource = (titleValue: string, urlValue: string, snippetValue = "") => {
    const url = normalizeSearchUrl(decodeHtml(urlValue));
    const title = stripHtml(titleValue);
    const snippet = stripHtml(snippetValue);
    if (!url.startsWith("http") || !title || seen.has(url)) return;
    seen.add(url);
    sources.push({
      title,
      url,
      snippet: snippet || undefined,
    });
  };

  const linkPattern = /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g;
  let match: RegExpExecArray | null;
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

function normalizeSearchUrl(url: string): string {
  const cleaned = url.replace(/&amp;/g, "&").trim();
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

function stripHtml(value: string): string {
  return decodeHtml(value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ")).trim();
}

function decodeHtml(value: string): string {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCharCode(Number.parseInt(code, 16)));
}

function mergeSources(...groups: WebSearchResult["sources"][]): WebSearchResult["sources"] {
  const seen = new Set<string>();
  const merged: WebSearchResult["sources"] = [];
  for (const group of groups) {
    for (const source of group) {
      if (!source.url || seen.has(source.url)) continue;
      seen.add(source.url);
      merged.push(source);
    }
  }
  return merged.slice(0, 12);
}

function mergeUsage(...responses: unknown[]): Record<string, unknown> | undefined {
  const usages = responses
    .map((response) => (isRecord(response) && isRecord(response.usage) ? response.usage : undefined))
    .filter((usage): usage is Record<string, unknown> => Boolean(usage));
  if (usages.length === 0) return undefined;

  const merged: Record<string, unknown> = {};
  for (const usage of usages) {
    for (const [key, value] of Object.entries(usage)) {
      if (typeof value === "number" && typeof merged[key] === "number") {
        merged[key] = (merged[key] as number) + value;
      } else if (typeof value === "number" && merged[key] === undefined) {
        merged[key] = value;
      } else {
        merged[key] = value;
      }
    }
  }
  return merged;
}

function normalizeTtsAudio(
  audioBase64: string,
  requestedFormat: TtsRequest["format"],
  metadata: { sampleRate?: number; channels?: number },
): Pick<TtsResult, "audioBase64" | "mimeType" | "fileExtension"> {
  const bytes = base64ToBytes(audioBase64);
  const detected = detectAudioFormat(bytes, requestedFormat);
  if (detected.fileExtension !== "pcm") {
    return {
      audioBase64,
      ...detected,
    };
  }

  const wavBytes = createWavFromPcm16(
    bytes,
    metadata.sampleRate ?? 24000,
    metadata.channels ?? 1,
  );
  return {
    audioBase64: bytesToBase64(wavBytes),
    mimeType: "audio/wav",
    fileExtension: "wav",
  };
}

function detectAudioFormat(
  bytes: Uint8Array,
  requestedFormat: TtsRequest["format"],
): Pick<TtsResult, "mimeType" | "fileExtension"> {
  const ascii = String.fromCharCode(...bytes.slice(0, 12));

  if (ascii.startsWith("RIFF") && ascii.includes("WAVE")) {
    return { mimeType: "audio/wav", fileExtension: "wav" };
  }
  if (bytes[0] === 0xff && (bytes[1] & 0xe0) === 0xe0) {
    return { mimeType: "audio/mpeg", fileExtension: "mp3" };
  }
  if (ascii.startsWith("ID3")) {
    return { mimeType: "audio/mpeg", fileExtension: "mp3" };
  }
  if (ascii.startsWith("OggS")) {
    return { mimeType: "audio/ogg", fileExtension: "ogg" };
  }
  if (requestedFormat === "pcm16") {
    return { mimeType: "audio/L16", fileExtension: "pcm" };
  }
  return { mimeType: "audio/L16", fileExtension: "pcm" };
}

function extractAudioMetadata(data: unknown): { sampleRate?: number; channels?: number } {
  const audio = getPath(data, ["choices", 0, "message", "audio"]);
  if (!isRecord(audio)) return {};
  const sampleRate =
    numberFromUnknown(audio.sample_rate) ??
    numberFromUnknown(audio.sampleRate) ??
    numberFromUnknown(audio.rate);
  const channels =
    numberFromUnknown(audio.channels) ??
    numberFromUnknown(audio.channel_count) ??
    numberFromUnknown(audio.channelCount);
  return {
    sampleRate: sampleRate && sampleRate > 0 ? sampleRate : undefined,
    channels: channels && channels > 0 ? channels : undefined,
  };
}

function numberFromUnknown(value: unknown): number | undefined {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string") {
    const parsed = Number.parseInt(value, 10);
    return Number.isFinite(parsed) ? parsed : undefined;
  }
  return undefined;
}

function base64ToBytes(audioBase64: string): Uint8Array {
  try {
    const binary = atob(audioBase64.replace(/\s+/g, ""));
    return Uint8Array.from(binary, (char) => char.charCodeAt(0));
  } catch {
    return new Uint8Array();
  }
}

function bytesToBase64(bytes: Uint8Array): string {
  let binary = "";
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.slice(i, i + chunkSize));
  }
  return btoa(binary);
}

function createWavFromPcm16(pcmBytes: Uint8Array, sampleRate: number, channels: number): Uint8Array {
  const bytesPerSample = 2;
  const blockAlign = channels * bytesPerSample;
  const byteRate = sampleRate * blockAlign;
  const dataSize = pcmBytes.length;
  const headerSize = 44;
  const wav = new Uint8Array(headerSize + dataSize);
  const view = new DataView(wav.buffer);

  writeAscii(wav, 0, "RIFF");
  view.setUint32(4, 36 + dataSize, true);
  writeAscii(wav, 8, "WAVE");
  writeAscii(wav, 12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, channels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, byteRate, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, 16, true);
  writeAscii(wav, 36, "data");
  view.setUint32(40, dataSize, true);
  wav.set(pcmBytes, headerSize);
  return wav;
}

function writeAscii(target: Uint8Array, offset: number, value: string): void {
  for (let i = 0; i < value.length; i += 1) {
    target[offset + i] = value.charCodeAt(i);
  }
}

function createMediaBlock(request: MultimodalRequest): Record<string, unknown> {
  if (request.kind === "image") {
    return {
      type: "image_url",
      image_url: {
        url: request.source,
      },
    };
  }

  if (request.kind === "audio") {
    return {
      type: "input_audio",
      input_audio: {
        data: request.source,
      },
    };
  }

  return {
    type: "video_url",
    video_url: {
      url: request.source,
    },
    fps: request.fps ?? 2,
    media_resolution: request.mediaResolution ?? "default",
  };
}

function getPath(value: unknown, path: Array<string | number>): unknown {
  let current = value;
  for (const key of path) {
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

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function safeJsonSnippet(value: unknown): string {
  try {
    return JSON.stringify(value).slice(0, 700);
  } catch {
    return String(value).slice(0, 700);
  }
}

function getAnthropicTextContent(data: unknown): string {
  const content = getPath(data, ["content"]);
  if (typeof content === "string") return content;
  const outputText = getPath(data, ["output_text"]);
  if (typeof outputText === "string") return outputText;
  const choiceContent = getPath(data, ["choices", 0, "message", "content"]);
  if (typeof choiceContent === "string") return choiceContent;
  if (!Array.isArray(content)) return "";
  return content
    .map((block) => {
      if (!isRecord(block)) return "";
      if (typeof block.content === "string") return block.content;
      return typeof block.text === "string" ? block.text : "";
    })
    .filter(Boolean)
    .join("");
}

function extractWebSources(raw: unknown): WebSearchResult["sources"] {
  const seen = new Set<string>();
  const sources: WebSearchResult["sources"] = [];

  const visit = (value: unknown) => {
    if (!value || typeof value !== "object") return;
    if (Array.isArray(value)) {
      value.forEach(visit);
      return;
    }

    const obj = value as Record<string, unknown>;
    const url = typeof obj.url === "string"
      ? obj.url
      : typeof obj.link === "string"
        ? obj.link
        : undefined;

    if (url && /^https?:\/\//.test(url) && !seen.has(url)) {
      seen.add(url);
      sources.push({
        url,
        title: typeof obj.title === "string" ? obj.title : undefined,
        snippet: typeof obj.snippet === "string"
          ? obj.snippet
          : typeof obj.content === "string"
            ? obj.content.slice(0, 240)
            : undefined,
      });
    }

    Object.values(obj).forEach(visit);
  };

  visit(raw);
  return sources.slice(0, 12);
}
