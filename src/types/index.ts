// ============================================================
// MiModex — Type Definitions
// ============================================================
import type { IconName, CardColor } from "animal-island-ui";

// ---- Re-export component library types for convenience ----
export type { IconName, CardColor };

// ============================================================
// Message & Conversation
// ============================================================

/** 单条消息 */
export interface Message {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: number;
  /** 语音合成结果 */
  audioUrl?: string;
  audioFileName?: string;
  audioMimeType?: string;
  /** 是否正在流式输出中 */
  streaming?: boolean;
  /** 工具调用结果 */
  toolCalls?: ToolCall[];
  /** 运行中工具授权请求 */
  permissionRequests?: RuntimePermissionRequest[];
  /** AI 思考过程 */
  thinking?: string;
}

/** 工具调用 */
export interface ToolCall {
  id: string;
  name: string;
  input: Record<string, unknown>;
  output?: string;
  status: "pending" | "running" | "done" | "error";
  /** 执行耗时 ms */
  duration?: number;
}

/** 会话 */
export interface Conversation {
  id: string;
  title: string;
  messages: Message[];
  createdAt: number;
  updatedAt: number;
  /** 项目目录 */
  projectPath?: string;
  /** 是否置顶 */
  pinned?: boolean;
  /** 使用的模型 */
  model?: string;
  /** 消息总 token 数 */
  tokenCount?: number;
}

// ============================================================
// Model & Session
// ============================================================

export type EffortLevel = "low" | "medium" | "high" | "max";
export type ConnectionStatus = "connected" | "disconnected" | "connecting" | "error";

export interface SessionInfo {
  id: string;
  model: string;
  effort: EffortLevel;
  fastMode: boolean;
  tokensUsed: number;
  tokensLimit: number;
  startedAt: number;
}

export interface ModelOption {
  key: string;
  label: string;
}

// ============================================================
// Slash Commands & Skills
// ============================================================

export interface SlashCommand {
  name: string;
  description: string;
  category: "session" | "coding" | "context" | "config" | "navigation" | "utility" | "mimo";
  icon: IconName;
}

export interface Skill {
  id: string;
  name: string;
  command: string;
  description: string;
  icon: IconName;
  color: CardColor;
}

// ============================================================
// Background Tasks
// ============================================================

export interface BackgroundTask {
  id: string;
  title: string;
  status: "running" | "completed" | "failed" | "queued";
  type: "agent" | "bash" | "batch";
  startedAt: number;
  completedAt?: number;
  output?: string;
}

export interface OutputAsset {
  id: string;
  type: "audio" | "text" | "file";
  title: string;
  createdAt: number;
  source: "tts" | "web" | "multimodal" | "code";
  url?: string;
  content?: string;
  mimeType?: string;
}

// ============================================================
// Context & Files
// ============================================================

export interface ContextFile {
  path: string;
  type: "claude-md" | "memory" | "directory" | "rule";
  content?: string;
  size?: number;
}

export interface FileChange {
  path: string;
  status: "added" | "modified" | "deleted";
  diff?: string;
  linesAdded: number;
  linesRemoved: number;
}

// ============================================================
// Settings
// ============================================================

export interface AppSettings {
  theme: "light" | "dark" | "system";
  language: "zh-CN" | "en-US" | "ja-JP";
  fontSize: number;
  sendKey: "enter" | "cmd-enter";
  motionMode: "full" | "gentle" | "off";
  soundEnabled: boolean;
  typewriterEnabled: boolean;
}

export type PermissionMode =
  | "default"
  | "acceptEdits"
  | "plan"
  | "auto"
  | "dontAsk"
  | "bypassPermissions";

export interface PermissionRule {
  id: string;
  pattern: string;
  type: "allow" | "deny" | "ask";
}

export type RuntimePermissionStatus =
  | "pending"
  | "allowing"
  | "allowed"
  | "denying"
  | "denied"
  | "cancelled"
  | "error";

export interface PermissionRuleValue {
  toolName: string;
  ruleContent?: string;
}

export type PermissionUpdate =
  | {
      type: "addRules" | "replaceRules" | "removeRules";
      rules: PermissionRuleValue[];
      behavior: "allow" | "deny" | "ask";
      destination: "userSettings" | "projectSettings" | "localSettings" | "session" | "cliArg";
    }
  | {
      type: "setMode";
      mode: PermissionMode;
      destination: "userSettings" | "projectSettings" | "localSettings" | "session" | "cliArg";
    }
  | {
      type: "addDirectories" | "removeDirectories";
      directories: string[];
      destination: "userSettings" | "projectSettings" | "localSettings" | "session" | "cliArg";
    };

export interface RuntimePermissionRequest {
  id: string;
  requestId: string;
  toolUseId: string;
  toolName: string;
  displayName?: string;
  title?: string;
  description?: string;
  actionDescription?: string;
  blockedPath?: string;
  decisionReason?: string;
  input: Record<string, unknown>;
  permissionSuggestions?: PermissionUpdate[];
  status: RuntimePermissionStatus;
  createdAt: number;
  resolvedAt?: number;
  error?: string;
}

export interface HookConfig {
  id: string;
  event: string;
  type: "command" | "http";
  value: string;
  enabled: boolean;
}

// ============================================================
// UI State Types
// ============================================================

export type LeftPanelTab = "conversations" | "capabilities" | "context";
export type RightPanelTab = "context" | "changes" | "tasks" | "assets";
export type CapabilityTab = "coding" | "web" | "multimodal" | "tts";

// ---- CLI Service Types ----
export interface CLIOptions {
  model?: string;
  effort?: EffortLevel;
  permissionMode?: PermissionMode;
  permissionRules?: PermissionRule[];
  maxTurns?: number;
  systemPrompt?: string;
  sessionId?: string;
  webSearch?: boolean;
  multimodal?: MultimodalAttachment[];
}

export type CLIStreamEvent = Record<string, unknown> & {
  type?: string;
  subtype?: string;
  session_id?: string;
};

export interface CLIStreamCallbacks {
  onChunk: (text: string) => void;
  onDone: (fullText: string, sessionId?: string) => void;
  onError?: (error: string) => void;
  onEvent?: (event: CLIStreamEvent) => void;
}

export type PermissionResponseBehavior = "allow" | "deny";

// ============================================================
// MiMo Platform Capabilities
// ============================================================

export type MultimodalKind = "image" | "audio" | "video";
export type MultimodalSourceType = "url" | "base64";

export interface MultimodalAttachment {
  id: string;
  kind: MultimodalKind;
  sourceType: MultimodalSourceType;
  value: string;
  label?: string;
  mimeType?: string;
}

export interface TtsRequest {
  model: "mimo-v2.5-tts" | "mimo-v2.5-tts-voicedesign" | "mimo-v2.5-tts-voiceclone";
  text: string;
  instruction?: string;
  voice: string;
  voiceSample?: string;
  optimizeTextPreview?: boolean;
  format: "wav" | "pcm16";
}

export interface TtsResult {
  audioBase64: string;
  format: "wav" | "pcm16";
  mimeType: string;
  fileExtension: string;
}

export interface MultimodalRequest {
  model: "mimo-v2.5" | "mimo-v2-omni";
  kind: MultimodalKind;
  source: string;
  prompt: string;
  fps?: number;
  mediaResolution?: "default" | "min" | "max";
}

export interface MultimodalResult {
  content: string;
  usage?: Record<string, unknown>;
  raw: unknown;
}

export interface WebSearchRequest {
  model: "mimo-v2.5-pro" | "mimo-v2.5" | "mimo-v2-pro" | "mimo-v2-omni" | "mimo-v2-flash";
  query: string;
  forceSearch: boolean;
  maxKeyword: number;
  limit: number;
}

export interface WebSearchResult {
  content: string;
  usage?: Record<string, unknown>;
  sources: Array<{
    title?: string;
    url: string;
    snippet?: string;
  }>;
  raw: unknown;
}

// ============================================================
// MiMo API Config  (~/.mimo/mimo.config.json)
// ============================================================

/** 与 ~/.mimo/mimo.config.json 对应的配置结构 */
export interface MimoConfig {
  apiKey?: string;
  baseUrl?: string;
  models?: {
    haiku?: string;
    sonnet?: string;
    opus?: string;
    smallFast?: string;
  };
}

// ---- API 接入预设 ----
export interface MimoPreset {
  label: string;
  description: string;
  baseUrl: string;
  keyPrefix: string; // 用于前端提示，如 "tp-"
}

// ============================================================
// Diagnostics
// ============================================================

export interface SystemDiagnosticItem {
  key: string;
  label: string;
  ok: boolean;
  detail: string;
}
