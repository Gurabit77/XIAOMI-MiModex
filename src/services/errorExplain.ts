export function explainError(err: unknown): string {
  const raw = errorToString(err).trim();
  const lower = raw.toLowerCase();

  if (!raw) return "操作失败，但没有返回错误详情。请先检查网络、API Key、Base URL 和模型是否匹配。";

  if (lower.includes("404") || lower.includes("not found") || lower.includes("openresty")) {
    return [
      "接口地址不存在或 Base URL 类型不匹配。",
      "Token Plan 的 Anthropic 地址通常形如 https://token-plan-sgp.xiaomimimo.com/anthropic；OpenAI 兼容能力会自动映射到 /v1。",
      "如果你使用的是 sk- 开头 Key，请优先选择 API Usage 预设。",
      `原始错误：${stripHtml(raw)}`,
    ].join("\n");
  }

  if (lower.includes("401") || lower.includes("unauthorized") || lower.includes("invalid api key")) {
    return [
      "API Key 无效或已失效。",
      "请检查 Key 是否完整复制，Token Plan 使用 tp- 开头，API Usage 通常使用 sk- 开头。",
      "如果 Key 曾经暴露在聊天或日志里，建议到控制台重新生成。",
    ].join("\n");
  }

  if (lower.includes("403") || lower.includes("permission") || lower.includes("forbidden")) {
    return [
      "当前账号或 Key 没有权限调用这个能力。",
      "Web Search 需要在小米 MiMo 控制台启用插件；TTS、VoiceClone 等能力也可能受套餐或开通状态限制。",
      `原始错误：${stripHtml(raw)}`,
    ].join("\n");
  }

  if (lower.includes("429") || lower.includes("rate limit") || lower.includes("too many")) {
    return "请求过于频繁或套餐限流。请稍后重试，或降低并发、max_keyword、输出长度。";
  }

  if (lower.includes("model") && (lower.includes("not") || lower.includes("unsupported"))) {
    return [
      "当前模型不支持这个能力。",
      "多模态请使用 mimo-v2.5 或 mimo-v2-omni；TTS 请使用 mimo-v2.5-tts 系列；Web Search 请使用文档支持的文本/多模态模型。",
      `原始错误：${stripHtml(raw)}`,
    ].join("\n");
  }

  if (lower.includes("audio.data") || lower.includes("tts")) {
    return [
      "语音合成请求已返回，但没有得到可播放的 audio.data。",
      "请检查 TTS 模型类型、内置音色/VoiceDesign/VoiceClone 参数是否匹配；VoiceClone 必须提供 mp3 或 wav 样本 Base64。",
      `原始错误：${stripHtml(raw)}`,
    ].join("\n");
  }

  if (lower.includes("failed to fetch") || lower.includes("network") || lower.includes("dns") || lower.includes("timed out")) {
    return "网络连接失败。请检查当前网络、代理、Base URL 是否可访问。";
  }

  return stripHtml(raw);
}

function errorToString(err: unknown): string {
  if (err instanceof Error) return err.message;
  if (typeof err === "string") return err;
  try {
    return JSON.stringify(err);
  } catch {
    return String(err);
  }
}

function stripHtml(value: string): string {
  return value
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
