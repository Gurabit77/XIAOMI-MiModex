import type { CardColor, IconName, MultimodalKind, SlashCommand } from "@/types";

export const MIMO_CHAT_MODELS = [
  { key: "mimo-v2.5", label: "MiMo v2.5" },
  { key: "mimo-v2.5-pro", label: "MiMo v2.5 Pro" },
  { key: "mimo-v2-pro", label: "MiMo v2 Pro" },
  { key: "mimo-v2-omni", label: "MiMo v2 Omni" },
  { key: "mimo-v2-flash", label: "MiMo v2 Flash" },
];

export const MIMO_CODE_MODELS = [
  { key: "mimo-v2.5", label: "MiMo v2.5" },
  { key: "mimo-v2.5-pro", label: "MiMo v2.5 Pro" },
  { key: "mimo-v2-pro", label: "MiMo v2 Pro" },
  { key: "mimo-v2-omni", label: "MiMo v2 Omni" },
  { key: "mimo-v2-flash", label: "MiMo v2 Flash" },
];

export const WEB_SEARCH_MODELS = [
  "mimo-v2.5-pro",
  "mimo-v2.5",
  "mimo-v2-pro",
  "mimo-v2-omni",
  "mimo-v2-flash",
];

export const WEB_SEARCH_MODEL_OPTIONS = WEB_SEARCH_MODELS.map((model) => ({
  key: model,
  label: model,
}));

export const MULTIMODAL_MODELS = ["mimo-v2.5", "mimo-v2-omni"];

export const MIMO_TTS_MODELS = [
  { key: "mimo-v2.5-tts", label: "内置音色" },
  { key: "mimo-v2.5-tts-voicedesign", label: "音色设计" },
  { key: "mimo-v2.5-tts-voiceclone", label: "音色克隆" },
];

export const MIMO_TTS_VOICES = [
  { key: "mimo_default", label: "MiMo 默认" },
  { key: "冰糖", label: "冰糖 · 中文女声" },
  { key: "茉莉", label: "茉莉 · 中文女声" },
  { key: "苏打", label: "苏打 · 中文男声" },
  { key: "白桦", label: "白桦 · 中文男声" },
  { key: "Mia", label: "Mia · English Female" },
  { key: "Chloe", label: "Chloe · English Female" },
  { key: "Milo", label: "Milo · English Male" },
  { key: "Dean", label: "Dean · English Male" },
];

export const MULTIMODAL_MODEL_OPTIONS = [
  { key: "mimo-v2.5", label: "MiMo v2.5" },
  { key: "mimo-v2-omni", label: "MiMo v2 Omni" },
];

export const MULTIMODAL_KIND_OPTIONS = [
  { key: "image", label: "图片理解" },
  { key: "audio", label: "音频理解" },
  { key: "video", label: "视频理解" },
];

export const TTS_STYLE_PRESETS = [
  { key: "natural", label: "自然清晰", value: "自然、清晰、稍微活泼，适合产品讲解。" },
  { key: "podcast", label: "播客旁白", value: "像播客主持人一样亲切、稳定、有节奏。" },
  { key: "role", label: "角色演绎", value: "带有角色感，情绪更明显，但保持自然不夸张。" },
  { key: "cantonese", label: "粤语风格", value: "使用粤语语感，语气轻快自然。" },
  { key: "singing", label: "唱歌", value: "使用唱歌模式。目标文本请以 (唱歌) 开头。" },
];

export const REAL_SLASH_COMMANDS: SlashCommand[] = [
  { name: "/review", description: "审查当前代码改动", category: "coding", icon: "icon-critterpedia" },
  { name: "/simplify", description: "简化和重构代码", category: "coding", icon: "icon-diy" },
  { name: "/init", description: "初始化项目记忆", category: "context", icon: "icon-map" },
  { name: "/clear", description: "新建/清空当前对话", category: "session", icon: "icon-chat" },
  { name: "/model", description: "切换当前模型", category: "config", icon: "icon-miles" },
  { name: "/permissions", description: "配置执行权限", category: "config", icon: "icon-critterpedia" },
  { name: "/memory", description: "管理项目记忆", category: "context", icon: "icon-camera" },
  { name: "/add-dir", description: "添加工作目录", category: "context", icon: "icon-map" },
  { name: "/help", description: "查看 MiMo Code 帮助", category: "utility", icon: "icon-critterpedia" },
];

export interface CapabilityCard {
  id: string;
  title: string;
  description: string;
  detail: string;
  icon: IconName;
  color: CardColor;
  prompt?: string;
}

export const CODING_CAPABILITIES: CapabilityCard[] = [
  {
    id: "code-task",
    title: "编程任务",
    description: "写代码、改代码、解释项目",
    detail: "走 MiMo Code CLI，支持工具调用、文件编辑、终端输出和权限模式。",
    icon: "icon-chat",
    color: "app-blue",
    prompt: "请帮我完成这个编程任务：",
  },
  {
    id: "review",
    title: "代码审查",
    description: "审查当前改动",
    detail: "对应 MiMo Code 的 /review 工作流，适合提交前检查质量、安全和回归风险。",
    icon: "icon-critterpedia",
    color: "app-teal",
    prompt: "/review ",
  },
  {
    id: "simplify",
    title: "代码简化",
    description: "重构复杂逻辑",
    detail: "对应 /simplify，让 MiMo 先分析复杂度，再给出可执行修改。",
    icon: "icon-diy",
    color: "app-green",
    prompt: "/simplify ",
  },
  {
    id: "init",
    title: "项目记忆",
    description: "生成项目规则",
    detail: "对应 /init 和 /memory，用来沉淀项目结构、命令、风格和注意事项。",
    icon: "icon-map",
    color: "app-yellow",
    prompt: "/init ",
  },
];

export const PLATFORM_CAPABILITIES: CapabilityCard[] = [
  {
    id: "web-search",
    title: "联网搜索",
    description: "实时公开网页信息",
    detail: "MiMo Web Search 需要平台插件开启；支持强制搜索、意图识别、引用来源和 max_keyword 控制成本。",
    icon: "icon-camera",
    color: "app-orange",
  },
  {
    id: "multimodal",
    title: "多模态理解",
    description: "图片、音频、视频",
    detail: "仅 mimo-v2.5 / mimo-v2-omni 支持；输入方式为 URL 或 Base64，不是裸本地文件路径。",
    icon: "icon-design",
    color: "app-yellow",
  },
  {
    id: "tts",
    title: "语音合成",
    description: "MiMo-V2.5-TTS",
    detail: "支持内置音色、音色设计、音色克隆；目标文本必须放在 assistant message。",
    icon: "icon-helicopter",
    color: "app-blue",
  },
];

export const MULTIMODAL_LABELS: Record<MultimodalKind, string> = {
  image: "图片",
  audio: "音频",
  video: "视频",
};
