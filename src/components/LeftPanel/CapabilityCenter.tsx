import { useRef, useState } from "react";
import { Button, Card, Collapse, Icon, Select, Tabs } from "animal-island-ui";
import type { CardColor } from "animal-island-ui";
import { useAppStore } from "@/stores/appStore";
import { useSessionStore } from "@/stores/sessionStore";
import { useUIStore } from "@/stores/uiStore";
import { audioObjectUrl, runWebSearch, synthesizeSpeech, understandMultimodal } from "@/services/mimoApi";
import { explainError } from "@/services/errorExplain";
import { GeneratedAudioCard } from "@/components/Audio/GeneratedAudioCard";
import { IslandLoader } from "@/components/Common/IslandLoader";
import {
  CODING_CAPABILITIES,
  MIMO_CODE_MODELS,
  MIMO_TTS_MODELS,
  MIMO_TTS_VOICES,
  MULTIMODAL_KIND_OPTIONS,
  MULTIMODAL_LABELS,
  MULTIMODAL_MODEL_OPTIONS,
  TTS_STYLE_PRESETS,
  WEB_SEARCH_MODEL_OPTIONS,
  WEB_SEARCH_MODELS,
} from "@/constants/mimoCapabilities";
import type {
  CapabilityTab,
  EffortLevel,
  MultimodalKind,
  MultimodalRequest,
  MultimodalResult,
  PermissionMode,
  RightPanelTab,
  TtsRequest,
  WebSearchRequest,
  WebSearchResult,
} from "@/types";

const ICON_FALLBACK_LABELS: Record<string, string> = {
  "icon-chat": "C",
  "icon-camera": "W",
  "icon-design": "M",
  "icon-helicopter": "T",
  "icon-map": "X",
  "icon-diy": "D",
  "icon-shopping": "A",
  "icon-critterpedia": "R",
  "icon-miles": "M",
  "icon-variant": "V",
};

const SUPPORT_MARKS: Record<string, string> = {
  assets: "A",
  context: "X",
  changes: "V",
  tasks: "R",
  connection: "K",
  model: "O",
  permissions: "P",
  hooks: "H",
  shortcuts: "S",
  motion: "E",
  diagnostics: "Q",
};

function iconFallback(icon: string): string {
  return ICON_FALLBACK_LABELS[icon] ?? icon.replace("icon-", "").slice(0, 1).toUpperCase();
}

function startCapabilityTurn(title: string, userContent: string, placeholder: string) {
  const store = useAppStore.getState();
  let conversationId = store.activeConversationId;
  if (!conversationId) {
    conversationId = store.createConversation(title);
  } else {
    store.setActiveConversation(conversationId);
  }

  store.addMessage(conversationId, {
    role: "user",
    content: userContent,
    timestamp: Date.now(),
  });

  const assistantMessageId = store.addMessage(conversationId, {
    role: "assistant",
    content: placeholder,
    timestamp: Date.now(),
    streaming: true,
  });

  return {
    conversationId,
    assistantMessageId,
    done: (content: string, extras?: { audioUrl?: string; audioFileName?: string; audioMimeType?: string }) => {
      useAppStore.getState().updateMessage(conversationId, assistantMessageId, {
        content,
        streaming: false,
        ...extras,
      });
    },
    fail: (err: unknown) => {
      const message = explainError(err);
      useAppStore.getState().updateMessage(conversationId, assistantMessageId, {
        content: `能力调用失败：${message}`,
        streaming: false,
      });
    },
  };
}

function formatUsage(usage?: Record<string, unknown>): string {
  return usage ? `\n\n用量：\n\`\`\`json\n${JSON.stringify(usage, null, 2)}\n\`\`\`` : "";
}

function formatSources(sources: WebSearchResult["sources"]): string {
  if (sources.length === 0) return "";
  const lines = sources.map((source, index) => {
    const title = source.title || source.url;
    return `${index + 1}. [${title}](${source.url})`;
  });
  return `\n\n来源：\n${lines.join("\n")}`;
}

type WorkflowStatus = "idle" | "running" | "done" | "error";

type WorkflowPhase = {
  key: string;
  label: string;
  detail: string;
  icon: string;
};

type CapabilityMetric = {
  label: string;
  value: string;
  tone: "teal" | "blue" | "yellow";
};

const WEB_PHASES: WorkflowPhase[] = [
  { key: "prepare", label: "准备问题", detail: "整理模型、搜索参数和强制检索策略。", icon: "icon-chat" },
  { key: "plan", label: "生成检索词", detail: "让 MiMo 决定要查询的实时资料。", icon: "icon-camera" },
  { key: "fetch", label: "读取来源", detail: "通过桌面端检索桥接获取网页摘要。", icon: "icon-map" },
  { key: "answer", label: "汇总回答", detail: "把来源交回 MiMo 生成最终答案。", icon: "icon-critterpedia" },
  { key: "archive", label: "归档资产", detail: "保存答案和来源到资产面板。", icon: "icon-shopping" },
];

const MULTIMODAL_PHASES: WorkflowPhase[] = [
  { key: "read", label: "读取素材", detail: "确认 URL 或本地 data URL 已准备好。", icon: "icon-design" },
  { key: "upload", label: "发送理解", detail: "把素材和问题交给 MiMo 多模态模型。", icon: "icon-camera" },
  { key: "answer", label: "生成分析", detail: "等待模型返回结构化描述。", icon: "icon-critterpedia" },
  { key: "archive", label: "归档摘要", detail: "保存分析结果，方便后续复用。", icon: "icon-shopping" },
];

const TTS_PHASES: WorkflowPhase[] = [
  { key: "prepare", label: "准备声音", detail: "检查文本、风格说明和样本音频。", icon: "icon-chat" },
  { key: "synthesize", label: "生成音频", detail: "调用 MiMo TTS 并等待音频数据。", icon: "icon-helicopter" },
  { key: "inspect", label: "检查格式", detail: "识别音频头，必要时转成可播放 WAV。", icon: "icon-diy" },
  { key: "archive", label: "写入资产", detail: "保存播放器和下载文件。", icon: "icon-shopping" },
];

const CODING_PHASES: WorkflowPhase[] = [
  { key: "describe", label: "描述任务", detail: "把目标、背景和验收标准整理成可执行草稿。", icon: "icon-chat" },
  { key: "context", label: "带上上下文", detail: "打开项目记忆、变更或任务面板辅助确认。", icon: "icon-map" },
  { key: "permission", label: "选择授权", detail: "在发送前选好本次工具权限，减少来回打断。", icon: "icon-helicopter" },
  { key: "draft", label: "送到输入框", detail: "草稿已放入主对话，用户确认后再发送执行。", icon: "icon-diy" },
  { key: "review", label: "查看结果", detail: "执行后的变更、任务和资产会回到右侧面板。", icon: "icon-shopping" },
];

type CodingWorkflow = {
  key: string;
  title: string;
  description: string;
  detail: string;
  icon: string;
  badge: string;
  prompt: string;
  suggestedPermission: PermissionMode;
  suggestedEffort: EffortLevel;
  panel: RightPanelTab;
};

const CODING_WORKFLOWS: CodingWorkflow[] = [
  {
    key: "feature",
    title: "写功能",
    description: "从需求到实现",
    detail: "适合明确知道要新增什么。会保留现有功能，并要求实现、测试、说明结果。",
    icon: "icon-diy",
    badge: "主流程",
    suggestedPermission: "acceptEdits",
    suggestedEffort: "high",
    panel: "changes",
    prompt: [
      "请在当前项目里实现这个功能：",
      "",
      "目标：",
      "- ",
      "",
      "验收标准：",
      "- 功能真实可用，不只做静态展示",
      "- 保留现有功能，不砍掉高级能力",
      "- 完成后运行相关测试并说明结果",
      "",
      "请先阅读相关代码，再进行实现和验证。",
    ].join("\n"),
  },
  {
    key: "bug",
    title: "修 bug",
    description: "复现、定位、修复",
    detail: "适合已经看到错误或异常体验。会要求先复现，再最小范围修复并回归验证。",
    icon: "icon-map",
    badge: "稳妥",
    suggestedPermission: "acceptEdits",
    suggestedEffort: "high",
    panel: "tasks",
    prompt: [
      "请修复这个问题：",
      "",
      "现象：",
      "- ",
      "",
      "期望：",
      "- ",
      "",
      "请先做实际复现或代码级定位，再修复；修复后运行相关验证，不要改动无关功能。",
    ].join("\n"),
  },
  {
    key: "review",
    title: "审查",
    description: "找风险和回归",
    detail: "适合提交前验收。默认先规划和指出问题，避免没确认就大面积改代码。",
    icon: "icon-critterpedia",
    badge: "验收",
    suggestedPermission: "plan",
    suggestedEffort: "high",
    panel: "changes",
    prompt: [
      "/review 当前改动。",
      "",
      "请优先指出 bug、交互回归、缺失测试、布局溢出和真实功能不可用的问题，并给出文件位置。",
    ].join("\n"),
  },
  {
    key: "understand",
    title: "理解项目",
    description: "建立上下文",
    detail: "适合刚打开项目。先梳理目录、命令、关键模块和注意事项，再沉淀项目记忆。",
    icon: "icon-chat",
    badge: "上手",
    suggestedPermission: "plan",
    suggestedEffort: "medium",
    panel: "context",
    prompt: [
      "/init",
      "",
      "请理解当前项目结构、关键命令、主要模块和开发约束，生成后续协作可复用的项目记忆。",
    ].join("\n"),
  },
];

const CODING_PERMISSION_OPTIONS: Array<{ key: PermissionMode; label: string }> = [
  { key: "acceptEdits", label: "允许编辑（推荐）" },
  { key: "auto", label: "智能授权" },
  { key: "plan", label: "只规划" },
  { key: "default", label: "逐次询问" },
  { key: "dontAsk", label: "拒绝未授权" },
  { key: "bypassPermissions", label: "完全信任" },
];

const CODING_EFFORT_OPTIONS: Array<{ key: EffortLevel; label: string }> = [
  { key: "low", label: "快速" },
  { key: "medium", label: "标准" },
  { key: "high", label: "精准" },
  { key: "max", label: "极致" },
];

const MULTIMODAL_LOCAL_FILE_MAX_SIZE = 50 * 1024 * 1024;

function startBackgroundTask(title: string, type: "agent" | "bash" | "batch" = "agent"): string {
  const id = workflowAssetId("task");
  useSessionStore.getState().addTask({
    id,
    title,
    type,
    status: "running",
    startedAt: Date.now(),
  });
  return id;
}

function finishBackgroundTask(id: string, ok: boolean, output: string): void {
  useSessionStore.getState().updateTask(id, {
    status: ok ? "completed" : "failed",
    completedAt: Date.now(),
    output: truncateAssetContent(output, 360),
  });
}

function workflowAssetId(prefix: string): string {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

function truncateAssetContent(value: string, max = 1800): string {
  const trimmed = value.trim();
  if (trimmed.length <= max) return trimmed;
  return `${trimmed.slice(0, max)}…`;
}

function nextPaint(): Promise<void> {
  return new Promise((resolve) => {
    requestAnimationFrame(() => resolve());
  });
}

function WorkflowProgress({
  phases,
  activeKey,
  status,
}: {
  phases: WorkflowPhase[];
  activeKey: string;
  status: WorkflowStatus;
}) {
  const activeIndex = Math.max(0, phases.findIndex((phase) => phase.key === activeKey));
  const activePhase = phases[activeIndex] ?? phases[0];

  return (
    <div className={`workflow-progress workflow-progress--${status}`} aria-live="polite">
      <div className="workflow-progress-stage">
        <div className="workflow-progress-loader" aria-hidden="true">
          {status === "running" ? (
            <IslandLoader active icon={activePhase.icon as never} size="sm" />
          ) : (
            <Icon
              name={(status === "error" ? "icon-diy" : activePhase.icon) as never}
              size={24}
            />
          )}
        </div>
        <div className="workflow-progress-copy">
          <span className="workflow-progress-kicker">
            {status === "running" ? "正在执行" : status === "done" ? "已完成" : status === "error" ? "需要处理" : "准备就绪"}
          </span>
          <strong>{activePhase.label}</strong>
          <span>{activePhase.detail}</span>
        </div>
      </div>
      <div className="workflow-progress-steps">
        {phases.map((phase, index) => {
          const state = status === "error" && index === activeIndex
            ? "error"
            : status === "done" || index < activeIndex
              ? "done"
              : index === activeIndex && (status === "running" || status === "idle")
                ? "active"
                : "idle";
          return (
            <div className={`workflow-progress-step workflow-progress-step--${state}`} key={phase.key}>
              <span className="workflow-progress-dot">
                <Icon name={phase.icon as never} size={12} bounce={status === "running" && state === "active"} />
              </span>
              <span>{phase.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CapabilityQuickStart({
  icon,
  title,
  detail,
  steps,
}: {
  icon: string;
  title: string;
  detail: string;
  steps: Array<{ label: string; icon: string }>;
}) {
  return (
    <div className="capability-quick-start">
      <div className="capability-quick-start-head">
        <span className="capability-quick-start-icon" aria-hidden="true" data-fallback={iconFallback(icon)}>
          <Icon name={icon as never} size={18} />
        </span>
        <span className="capability-quick-start-copy">
          <strong>{title}</strong>
          <small>{detail}</small>
        </span>
      </div>
      <div className="capability-quick-route" aria-label="推荐流程">
        {steps.map((step, index) => (
          <span className="capability-quick-step" key={step.label}>
            <span className="capability-quick-step-icon" aria-hidden="true">
              <Icon name={step.icon as never} size={12} />
            </span>
            <span>{step.label}</span>
            {index < steps.length - 1 && <i aria-hidden="true" />}
          </span>
        ))}
      </div>
    </div>
  );
}

const CAPABILITY_TABS: Array<{ key: CapabilityTab; label: string; icon: string; brief: string; badge: string }> = [
  { key: "coding", label: "编程", icon: "icon-chat", brief: "任务、权限、结果一起流转", badge: "代码岛" },
  { key: "web", label: "联网", icon: "icon-camera", brief: "实时资料检索与来源回填", badge: "资料所" },
  { key: "multimodal", label: "多模态", icon: "icon-design", brief: "图片 / 音频 / 视频统一处理", badge: "素材馆" },
  { key: "tts", label: "语音", icon: "icon-helicopter", brief: "样本上传、音色克隆与播放", badge: "语音坊" },
];

const SUPPORT_APPS: Array<{
  key: string;
  label: string;
  icon: string;
  detail: string;
  tone: "assets" | "context" | "changes" | "tasks" | "permissions" | "diagnostics";
  type: "panel" | "settings";
  tab: RightPanelTab | string;
}> = [
  { key: "assets", label: "资产", icon: "icon-shopping", detail: "音频、摘要、文件", tone: "assets", type: "panel", tab: "assets" },
  { key: "context", label: "上下文", icon: "icon-map", detail: "项目记忆与目录", tone: "context", type: "panel", tab: "context" },
  { key: "changes", label: "变更", icon: "icon-variant", detail: "文件改动和 Diff", tone: "changes", type: "panel", tab: "changes" },
  { key: "tasks", label: "任务", icon: "icon-diy", detail: "运行状态看板", tone: "tasks", type: "panel", tab: "tasks" },
  { key: "connection", label: "连接", icon: "icon-camera", detail: "API Key 与节点", tone: "diagnostics", type: "settings", tab: "connection" },
  { key: "model", label: "模型", icon: "icon-miles", detail: "推理与速度", tone: "assets", type: "settings", tab: "model" },
  { key: "permissions", label: "权限", icon: "icon-critterpedia", detail: "授权策略设置", tone: "permissions", type: "settings", tab: "permissions" },
  { key: "hooks", label: "钩子", icon: "icon-diy", detail: "工具自动化", tone: "changes", type: "settings", tab: "hooks" },
  { key: "shortcuts", label: "快捷键", icon: "icon-chat", detail: "键盘操作", tone: "tasks", type: "settings", tab: "shortcuts" },
  { key: "motion", label: "动效", icon: "icon-variant", detail: "动画强度", tone: "context", type: "settings", tab: "general" },
  { key: "diagnostics", label: "诊断", icon: "icon-map", detail: "本机和能力检查", tone: "diagnostics", type: "settings", tab: "diagnostics" },
];

const CAPABILITY_META: Record<CapabilityTab, { title: string; tag: string; icon: string; color: CardColor; guide: string }> = {
  coding: {
    title: "MiMo Code",
    tag: "本地项目执行",
    icon: "icon-chat",
    color: "app-blue",
    guide: "把需求交给这间工作台，任务、授权和结果会按顺序回到主对话。",
  },
  web: {
    title: "Web Search",
    tag: "实时资料插件",
    icon: "icon-camera",
    color: "app-orange",
    guide: "把实时问题说清楚，MiMo 会先检索，再把来源和答案一起整理回来。",
  },
  multimodal: {
    title: "Multimodal",
    tag: "图片 / 音频 / 视频",
    icon: "icon-design",
    color: "app-yellow",
    guide: "上传素材后直接理解，不需要先把文件拆成冗长的说明文字。",
  },
  tts: {
    title: "TTS Studio",
    tag: "可播放音频资产",
    icon: "icon-helicopter",
    color: "app-teal",
    guide: "先上传样本音频，再选择音色和风格，最后把可播放的音频资产带回右栏。",
  },
};

const CAPABILITY_METRICS: Record<CapabilityTab, CapabilityMetric[]> = {
  coding: [
    { label: "入口", value: "4 个模板", tone: "blue" },
    { label: "授权", value: "可预选", tone: "teal" },
    { label: "结果", value: "回对话", tone: "yellow" },
  ],
  web: [
    { label: "来源", value: "可追溯", tone: "blue" },
    { label: "检索", value: "真实调用", tone: "teal" },
    { label: "资产", value: "自动存", tone: "yellow" },
  ],
  multimodal: [
    { label: "上传", value: "主流程", tone: "blue" },
    { label: "输入", value: "自动转码", tone: "teal" },
    { label: "分析", value: "可复用", tone: "yellow" },
  ],
  tts: [
    { label: "样本", value: "可上传", tone: "blue" },
    { label: "播放", value: "带下载", tone: "teal" },
    { label: "格式", value: "自动识别", tone: "yellow" },
  ],
};

const CAPABILITY_FLOW: Record<CapabilityTab, Array<{ label: string; icon: string }>> = {
  coding: [
    { label: "填入任务", icon: "icon-chat" },
    { label: "确认权限", icon: "icon-map" },
    { label: "回写结果", icon: "icon-diy" },
  ],
  web: [
    { label: "输入问题", icon: "icon-chat" },
    { label: "检索来源", icon: "icon-camera" },
    { label: "汇总到对话", icon: "icon-map" },
  ],
  multimodal: [
    { label: "上传素材", icon: "icon-design" },
    { label: "模型理解", icon: "icon-critterpedia" },
    { label: "生成分析", icon: "icon-map" },
  ],
  tts: [
    { label: "选择音色", icon: "icon-helicopter" },
    { label: "生成音频", icon: "icon-miles" },
    { label: "资产留存", icon: "icon-shopping" },
  ],
};

export function CapabilityCenter() {
  const active = useUIStore((s) => s.capabilityTab);
  const setActive = useUIStore((s) => s.setCapabilityTab);
  const mainMode = useUIStore((s) => s.mainMode);
  const openChat = useUIStore((s) => s.openChat);
  const setLauncherOpen = useUIStore((s) => s.setLauncherOpen);
  const openRightPanel = useUIStore((s) => s.openRightPanel);
  const setSettingsTab = useUIStore((s) => s.setSettingsTab);
  const setSettingsOpen = useUIStore((s) => s.setSettingsOpen);
  const outputAssetsCount = useSessionStore((s) => s.outputAssets.length);
  const runningTaskCount = useSessionStore((s) => s.backgroundTasks.filter((task) => task.status === "running").length);

  const openSupportApp = (item: typeof SUPPORT_APPS[number]) => {
    if (item.type === "panel") {
      openRightPanel(item.tab as RightPanelTab);
    } else {
      setSettingsTab(item.tab);
      setSettingsOpen(true);
    }
  };

  return (
    <div className="capability-center">
      <div className="capability-header">
        <span className="capability-title">能力中心</span>
        <span className="capability-count">主区操作</span>
      </div>

      <div className="capability-segments">
        {CAPABILITY_TABS.map((tab) => (
          <button
            key={tab.key}
            className={`capability-segment${active === tab.key ? " capability-segment--active" : ""}`}
            onClick={() => setActive(tab.key)}
          >
            <Icon name={tab.icon as never} size={13} />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="capability-side-summary">
        <Card color="default" className="capability-note capability-note--status">
          <Icon name={CAPABILITY_META[active].icon as never} size={15} />
          <span>{CAPABILITY_META[active].title}</span>
          <strong>{CAPABILITY_META[active].tag}</strong>
        </Card>
        {mainMode === "capability" ? (
          <Card color="default" className="capability-note capability-note--status capability-note--compact">
            <Icon name="icon-map" size={15} />
            <span>能力工作台</span>
            <strong>{CAPABILITY_TABS.find((tab) => tab.key === active)?.label}准备就绪</strong>
            <div className="capability-note-actions">
              <Button type="default" size="small" icon={<Icon name="icon-camera" size={13} />} onClick={() => setLauncherOpen(true)}>
                应用抽屉
              </Button>
              <Button type="text" size="small" icon={<Icon name="icon-chat" size={13} />} onClick={openChat}>
                回到对话
              </Button>
            </div>
          </Card>
        ) : (
          <div className="capability-mini-apps" role="list" aria-label="能力入口">
            {CAPABILITY_TABS.map((tab) => (
              <button
                key={tab.key}
                type="button"
                className={`capability-mini-app capability-mini-app--${tab.key}${active === tab.key ? " capability-mini-app--active" : ""}`}
                onClick={() => setActive(tab.key)}
              >
                <span className="capability-mini-app-icon" aria-hidden="true" data-fallback={iconFallback(tab.icon)}>
                  <Icon name={tab.icon as never} size={16} />
                  <span className="mimo-mark">{tab.badge.slice(0, 1)}</span>
                </span>
                <span>
                  <strong>{tab.label}</strong>
                  <small>{tab.brief}</small>
                </span>
              </button>
            ))}
          </div>
        )}
        <div className="capability-support-section">
          <div className="capability-support-title">成果与状态</div>
          <div className="capability-support-grid" role="list" aria-label="成果与状态入口">
            {SUPPORT_APPS.filter((item) => item.type === "panel").map((item) => (
              <SupportAppButton
                key={item.key}
                item={item}
                outputAssetsCount={outputAssetsCount}
                runningTaskCount={runningTaskCount}
                onClick={() => openSupportApp(item)}
              />
            ))}
          </div>
        </div>
        <Collapse
          className="capability-advanced-collapse"
          defaultExpanded={false}
          question={
            <span className="capability-advanced-question">
              <Icon name="icon-diy" size={13} />
              高级功能设置
            </span>
          }
          answer={
            <div className="capability-support-grid capability-support-grid--advanced" role="list" aria-label="高级功能设置入口">
              {SUPPORT_APPS.filter((item) => item.type === "settings").map((item) => (
                <SupportAppButton
                  key={item.key}
                  item={item}
                  outputAssetsCount={outputAssetsCount}
                  runningTaskCount={runningTaskCount}
                  onClick={() => openSupportApp(item)}
                />
              ))}
            </div>
          }
        />
      </div>
    </div>
  );
}

function SupportAppButton({
  item,
  outputAssetsCount,
  runningTaskCount,
  onClick,
}: {
  item: typeof SUPPORT_APPS[number];
  outputAssetsCount: number;
  runningTaskCount: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className={`capability-support-app capability-support-app--${item.tone}`}
      onClick={onClick}
    >
      <span className="capability-support-icon" aria-hidden="true" data-fallback={iconFallback(item.icon)}>
        <Icon name={item.icon as never} size={14} />
        <span className="mimo-mark">{SUPPORT_MARKS[item.key] ?? item.label.slice(0, 1)}</span>
      </span>
      <span className="capability-support-copy">
        <strong>{item.label}</strong>
        <small>
          {item.key === "assets" && outputAssetsCount > 0
            ? `${outputAssetsCount} 个资产`
            : item.key === "tasks" && runningTaskCount > 0
              ? `${runningTaskCount} 个运行中`
              : item.detail}
        </small>
      </span>
    </button>
  );
}

function WebSearchPanel() {
  const runIdRef = useRef(0);
  const activeTaskIdRef = useRef<string | null>(null);
  const activeTurnRef = useRef<ReturnType<typeof startCapabilityTurn> | null>(null);
  const [model, setModel] = useState<WebSearchRequest["model"]>("mimo-v2.5");
  const [query, setQuery] = useState("");
  const [forceSearch, setForceSearch] = useState(true);
  const [maxKeyword, setMaxKeyword] = useState(3);
  const [limit, setLimit] = useState(3);
  const [status, setStatus] = useState<"idle" | "running" | "done" | "error">("idle");
  const [phase, setPhase] = useState(WEB_PHASES[0].key);
  const [error, setError] = useState("");
  const [result, setResult] = useState<WebSearchResult | null>(null);

  const run = async () => {
    if (!query.trim() || status === "running") return;
    const runId = runIdRef.current + 1;
    runIdRef.current = runId;
    const taskId = startBackgroundTask("联网搜索");
    activeTaskIdRef.current = taskId;
    setStatus("running");
    setPhase("prepare");
    setError("");
    setResult(null);
    const turn = startCapabilityTurn(
      "联网搜索",
      `联网搜索：${query.trim()}`,
      "正在准备联网搜索闭环。"
    );
    activeTurnRef.current = turn;
    try {
      await nextPaint();
      if (runIdRef.current !== runId) return;
      setPhase("plan");
      await nextPaint();
      if (runIdRef.current !== runId) return;
      setPhase("fetch");
      const output = await runWebSearch({
        model,
        query: query.trim(),
        forceSearch,
        maxKeyword,
        limit,
      });
      if (runIdRef.current !== runId) return;
      setPhase("answer");
      setResult(output);
      const assetContent = [
        output.content,
        formatSources(output.sources).trim(),
      ].filter(Boolean).join("\n\n");
      setPhase("archive");
      useSessionStore.getState().addOutputAsset({
        id: workflowAssetId("web"),
        type: "text",
        source: "web",
        title: `联网搜索-${new Date().toLocaleString("zh-CN", { hour: "2-digit", minute: "2-digit" })}`,
        createdAt: Date.now(),
        content: truncateAssetContent(assetContent || output.content),
        mimeType: "text/markdown",
      });
      useUIStore.getState().openRightPanel("assets");
      turn.done(`联网搜索完成。\n\n${output.content}${formatSources(output.sources)}${formatUsage(output.usage)}`);
      finishBackgroundTask(taskId, true, `搜索完成，找到 ${output.sources.length} 条来源。`);
      setStatus("done");
      activeTaskIdRef.current = null;
      activeTurnRef.current = null;
    } catch (err) {
      if (runIdRef.current !== runId) return;
      const message = explainError(err);
      setPhase("fetch");
      setError(message);
      turn.fail(err);
      finishBackgroundTask(taskId, false, message);
      setStatus("error");
      activeTaskIdRef.current = null;
      activeTurnRef.current = null;
    }
  };

  const cancelRun = () => {
    if (status !== "running") return;
    runIdRef.current += 1;
    if (activeTaskIdRef.current) {
      finishBackgroundTask(activeTaskIdRef.current, false, "用户已停止等待。");
      activeTaskIdRef.current = null;
    }
    setPhase("fetch");
    setError("已停止等待。远端请求可能仍在服务端完成，但当前界面不会继续挂起。");
    activeTurnRef.current?.fail(new Error("已停止等待。"));
    activeTurnRef.current = null;
    setStatus("error");
  };

  return (
    <div className="capability-pane">
      <div className="capability-section-title">联网搜索</div>
      <Card color="default" className="workflow-panel workflow-panel--web">
        <CapabilityQuickStart
          icon="icon-camera"
          title="联网资料所"
          detail="默认只露出问题输入；模型、limit 和强制检索收在高级功能设置里。"
          steps={[
            { label: "提问", icon: "icon-chat" },
            { label: "检索", icon: "icon-camera" },
            { label: "归档", icon: "icon-shopping" },
          ]}
        />
        <div className="workflow-field">
          <label className="workflow-label">搜索任务</label>
          <textarea
            className="workflow-textarea workflow-textarea--large"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="输入要检索的问题。点击下方按钮后会真实调用 MiMo Web Search。"
            rows={5}
          />
        </div>
        <Collapse
          className="workflow-advanced-collapse"
          defaultExpanded={false}
          question={
            <span className="workflow-advanced-question">
              <Icon name="icon-diy" size={14} />
              高级功能设置
            </span>
          }
          answer={
            <div className="workflow-advanced-panel">
              <div className="workflow-row">
                <label className="workflow-label">模型</label>
                <Select
                  options={WEB_SEARCH_MODEL_OPTIONS}
                  value={model}
                  onChange={(key) => setModel(key as WebSearchRequest["model"])}
                />
              </div>
              <div className="workflow-grid-2">
                <label className="workflow-mini-field">
                  <span className="workflow-label">max_keyword</span>
                  <input
                    className="workflow-number-input"
                    type="number"
                    min={1}
                    max={5}
                    value={maxKeyword}
                    onChange={(e) => setMaxKeyword(clampNumber(e.target.value, 1, 5))}
                  />
                </label>
                <label className="workflow-mini-field">
                  <span className="workflow-label">limit</span>
                  <input
                    className="workflow-number-input"
                    type="number"
                    min={1}
                    max={10}
                    value={limit}
                    onChange={(e) => setLimit(clampNumber(e.target.value, 1, 10))}
                  />
                </label>
              </div>
              <label className="workflow-check-row">
                <input
                  type="checkbox"
                  checked={forceSearch}
                  onChange={(e) => setForceSearch(e.target.checked)}
                />
                <span>force_search：强制调用搜索插件</span>
              </label>
            </div>
          }
        />
        <Button
          type="primary"
          block
          onClick={run}
          disabled={!query.trim() || status === "running"}
          loading={status === "running"}
        >
          {status === "running" ? "搜索中…" : "开始真实搜索"}
        </Button>
        <WorkflowProgress phases={WEB_PHASES} activeKey={phase} status={status} />
        {status === "running" && (
          <button className="workflow-inline-cancel" type="button" onClick={cancelRun}>
            停止等待
          </button>
        )}
      </Card>

      <Card color="default" className="capability-note">
        这是 MiMo function tool 闭环：模型先选择检索词，桌面端读取网页来源，再把来源交回模型汇总；不是把“搜索”写进提示词假装联网。
      </Card>

      {result && (
        <Card color="default" className="workflow-result">
          <div className="workflow-result-title">搜索结果</div>
          <div className="workflow-result-body">{result.content}</div>
          {result.sources.length > 0 && (
            <div className="web-source-list">
              {result.sources.map((source) => (
                <a
                  key={source.url}
                  className="web-source-item"
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="web-source-title">{source.title || source.url}</span>
                  {source.snippet && <span className="web-source-snippet">{source.snippet}</span>}
                </a>
              ))}
            </div>
          )}
          {result.usage && (
            <pre className="workflow-result-usage">{JSON.stringify(result.usage, null, 2)}</pre>
          )}
        </Card>
      )}
      {error && <div className="workflow-error">{error}</div>}
    </div>
  );
}

function CodingPanel({ compact = false }: { compact?: boolean }) {
  const setInputValue = useAppStore((s) => s.setInputValue);
  const setLeftPanelTab = useUIStore((s) => s.setLeftPanelTab);
  const openChat = useUIStore((s) => s.openChat);
  const openRightPanel = useUIStore((s) => s.openRightPanel);
  const currentModel = useSessionStore((s) => s.currentModel);
  const effort = useSessionStore((s) => s.effort);
  const permissionMode = useSessionStore((s) => s.permissionMode);
  const setPermissionMode = useSessionStore((s) => s.setPermissionMode);
  const setEffort = useSessionStore((s) => s.setEffort);
  const setModel = useSessionStore((s) => s.setModel);
  const runningTaskCount = useSessionStore((s) => s.backgroundTasks.filter((task) => task.status === "running").length);
  const changeCount = useSessionStore((s) => s.fileChanges.length);
  const contextCount = useSessionStore((s) => s.contextFiles.length);
  const [selectedKey, setSelectedKey] = useState(CODING_WORKFLOWS[0].key);
  const [draft, setDraft] = useState(CODING_WORKFLOWS[0].prompt);
  const [phase, setPhase] = useState(CODING_PHASES[0].key);

  const selectedWorkflow =
    CODING_WORKFLOWS.find((workflow) => workflow.key === selectedKey) ?? CODING_WORKFLOWS[0];

  const selectWorkflow = (workflow: CodingWorkflow) => {
    setSelectedKey(workflow.key);
    setDraft(workflow.prompt);
    setPermissionMode(workflow.suggestedPermission);
    setEffort(workflow.suggestedEffort);
    setPhase("describe");
  };

  const usePrompt = (prompt?: string) => {
    if (!prompt) return;
    setInputValue(prompt);
    openChat();
    setLeftPanelTab("conversations");
    setTimeout(() => {
      document.querySelector<HTMLTextAreaElement>(".input-bar-textarea")?.focus();
    }, 50);
  };

  const prepareDraft = () => {
    const content = draft.trim() || selectedWorkflow.prompt;
    setInputValue(content);
    setPhase("draft");
    openChat();
    openRightPanel(selectedWorkflow.panel);
    setLeftPanelTab("conversations");
    setTimeout(() => {
      document.querySelector<HTMLTextAreaElement>(".input-bar-textarea")?.focus();
    }, 50);
  };

  return (
    <div className="capability-pane">
      <div className="capability-section-title">MiMo Code 工作流</div>
      <Card color="default" className="workflow-panel workflow-panel--coding">
        <div className="coding-workflow-hero">
          <div className="coding-workflow-orb" aria-hidden="true">
            <Icon name={selectedWorkflow.icon as never} size={22} bounce />
            <span />
          </div>
          <div className="coding-workflow-hero-copy">
            <span>选择一个开始方式</span>
            <strong>{selectedWorkflow.title}</strong>
            <small>{selectedWorkflow.detail}</small>
          </div>
          <em>{selectedWorkflow.badge}</em>
        </div>

        <div className="coding-workflow-grid" role="list" aria-label="MiMo Code 工作流">
          {CODING_WORKFLOWS.slice(0, compact ? 3 : CODING_WORKFLOWS.length).map((workflow) => {
            const selected = selectedWorkflow.key === workflow.key;
            return (
              <button
                key={workflow.key}
                type="button"
                className={`coding-workflow-card${selected ? " coding-workflow-card--active" : ""}`}
                onClick={() => selectWorkflow(workflow)}
                aria-pressed={selected}
              >
                <span className="coding-workflow-icon" aria-hidden="true" data-fallback={iconFallback(workflow.icon)}>
                  <Icon name={workflow.icon as never} size={16} />
                </span>
                <span className="coding-workflow-copy">
                  <strong>{workflow.title}</strong>
                  <small>{workflow.description}</small>
                </span>
                <em>{workflow.badge}</em>
              </button>
            );
          })}
        </div>

        <div className="workflow-field">
          <label className="workflow-label">任务草稿</label>
          <textarea
            className="workflow-textarea workflow-textarea--large coding-draft-textarea"
            value={draft}
            onChange={(e) => {
              setDraft(e.target.value);
              setPhase("describe");
            }}
            rows={7}
          />
        </div>

        <div className="coding-status-grid">
          <div className="coding-status-card">
            <span>模型</span>
            <strong>{MIMO_CODE_MODELS.find((model) => model.key === currentModel)?.label ?? currentModel}</strong>
          </div>
          <div className="coding-status-card">
            <span>推理</span>
            <strong>{CODING_EFFORT_OPTIONS.find((item) => item.key === effort)?.label ?? effort}</strong>
          </div>
          <div className="coding-status-card">
            <span>权限</span>
            <strong>{CODING_PERMISSION_OPTIONS.find((item) => item.key === permissionMode)?.label ?? permissionMode}</strong>
          </div>
        </div>

        <div className="coding-panel-actions">
          <Button
            type="primary"
            icon={<Icon name="icon-chat" size={14} />}
            onClick={prepareDraft}
            disabled={!draft.trim()}
          >
            放入对话输入框
          </Button>
          <Button
            type="default"
            icon={<Icon name="icon-map" size={14} />}
            onClick={() => {
              setPhase("context");
              openRightPanel(selectedWorkflow.panel);
            }}
          >
            查看相关面板
          </Button>
        </div>

        <Collapse
          className="workflow-advanced-collapse"
          defaultExpanded={false}
          question={
            <span className="workflow-advanced-question">
              <Icon name="icon-diy" size={14} />
              高级功能设置
            </span>
          }
          answer={
            <div className="workflow-advanced-panel">
              <div className="workflow-row">
                <label className="workflow-label">模型</label>
                <Select
                  options={MIMO_CODE_MODELS}
                  value={currentModel}
                  onChange={(key) => setModel(key)}
                />
              </div>
              <div className="workflow-row">
                <label className="workflow-label">推理强度</label>
                <Select
                  options={CODING_EFFORT_OPTIONS}
                  value={effort}
                  onChange={(key) => setEffort(key as EffortLevel)}
                />
              </div>
              <div className="workflow-row">
                <label className="workflow-label">本次授权</label>
                <Select
                  options={CODING_PERMISSION_OPTIONS}
                  value={permissionMode}
                  onChange={(key) => {
                    setPermissionMode(key as PermissionMode);
                    setPhase("permission");
                  }}
                />
              </div>
              <div className="coding-legacy-grid" role="list" aria-label="MiMo Code 命令模板">
                {CODING_CAPABILITIES.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`coding-legacy-card coding-legacy-card--${item.id}`}
                    onClick={() => {
                      setDraft(item.prompt ?? "");
                      setPhase("describe");
                    }}
                  >
                    <span className="coding-legacy-icon" aria-hidden="true" data-fallback={iconFallback(item.icon)}>
                      <Icon name={item.icon} size={14} />
                    </span>
                    <span>
                      <strong>{item.title}</strong>
                      <small>{item.description}</small>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          }
        />

        <WorkflowProgress phases={CODING_PHASES} activeKey={phase} status="idle" />
      </Card>

      <div className="coding-dock-grid" aria-label="编程状态入口">
        <button type="button" className="coding-dock-card coding-dock-card--context" onClick={() => openRightPanel("context")}>
          <span className="coding-dock-icon" aria-hidden="true" data-fallback={iconFallback("icon-map")}>
            <Icon name="icon-map" size={15} />
          </span>
          <span><strong>上下文</strong><small>{contextCount > 0 ? `${contextCount} 项记忆` : "项目记忆"}</small></span>
        </button>
        <button type="button" className="coding-dock-card coding-dock-card--changes" onClick={() => openRightPanel("changes")}>
          <span className="coding-dock-icon" aria-hidden="true" data-fallback={iconFallback("icon-design")}>
            <Icon name="icon-design" size={15} />
          </span>
          <span><strong>变更</strong><small>{changeCount > 0 ? `${changeCount} 个文件` : "改动回看"}</small></span>
        </button>
        <button type="button" className="coding-dock-card coding-dock-card--tasks" onClick={() => openRightPanel("tasks")}>
          <span className="coding-dock-icon" aria-hidden="true" data-fallback={iconFallback("icon-diy")}>
            <Icon name="icon-diy" size={15} />
          </span>
          <span><strong>任务</strong><small>{runningTaskCount > 0 ? `${runningTaskCount} 个运行中` : "执行状态"}</small></span>
        </button>
      </div>

      {!compact && (
        <Card color="default" className="capability-note">
          编程能力不会在这里直接越过确认发送。点击后会把结构化任务放入对话输入框，你还能继续改字、选附件或改授权，再由主对话执行。
        </Card>
      )}
    </div>
  );
}

export function CapabilityWorkspace() {
  const active = useUIStore((s) => s.capabilityTab);
  const setActive = useUIStore((s) => s.setCapabilityTab);
  const openChat = useUIStore((s) => s.openChat);
  const meta = CAPABILITY_META[active];
  const flow = CAPABILITY_FLOW[active];
  const activeLabel = CAPABILITY_TABS.find((tab) => tab.key === active)?.label ?? "能力";
  const workspaceTabs = CAPABILITY_TABS.map((tab) => ({
    key: tab.key,
    label: (
      <span className="capability-tab-label">
        <Icon name={tab.icon as never} size={14} />
        <span>{tab.label}</span>
      </span>
    ),
    children: (
      <div className="capability-tab-panel">
        {tab.key === "coding" && <CodingPanel />}
        {tab.key === "web" && <WebSearchPanel />}
        {tab.key === "multimodal" && <MultimodalPanel />}
        {tab.key === "tts" && <TtsPanel />}
      </div>
    ),
  }));

  return (
    <div className="capability-workspace">
      <div className="capability-workspace-header">
        <div className="capability-workspace-brand">
          <Card color={meta.color} className="capability-workspace-logo">
            <Icon name={meta.icon as never} size={26} bounce />
            <span className="capability-workspace-logo-ping" />
          </Card>
          <div>
            <div className="capability-workspace-kicker">MiMo 平台能力</div>
            <h2 className="capability-workspace-title">{activeLabel}</h2>
            <div className="capability-workspace-tag">{meta.title} · {meta.tag}</div>
          </div>
        </div>
        <Button type="text" size="small" onClick={openChat}>
          返回对话
        </Button>
      </div>

      <div className="capability-workspace-map" aria-label="能力工作台流程">
        <span className="capability-map-station capability-map-station--active">
          <Icon name={meta.icon as never} size={14} />
          当前：{activeLabel}
        </span>
        <span className="capability-map-track" aria-hidden="true" />
        <span className="capability-map-station">
          <Icon name="icon-map" size={14} />
          填入参数
        </span>
        <span className="capability-map-track" aria-hidden="true" />
        <span className="capability-map-station">
          <Icon name="icon-shopping" size={14} />
          保存成果
        </span>
      </div>

      <div className="capability-workspace-body">
        <div className="capability-workspace-form">
          <Tabs
            items={workspaceTabs}
            activeKey={active}
            onChange={(key) => setActive(key as CapabilityTab)}
            className="capability-workspace-tabs"
            leafAnimation
          />
        </div>
        <Card color="default" className="capability-workspace-guide">
          <div className="capability-guide-head">
            <div className="capability-guide-icon" aria-hidden="true">
              <Icon name={meta.icon as never} size={18} />
            </div>
            <div>
              <div className="capability-guide-kicker">能力状态</div>
              <div className="workflow-result-title">{meta.title}</div>
            </div>
          </div>
          <div className="workflow-result-body">
            {meta.guide}
          </div>
          <div className="capability-guide-metrics" aria-label="当前能力状态">
            {CAPABILITY_METRICS[active].map((metric) => (
              <span className={`capability-guide-metric capability-guide-metric--${metric.tone}`} key={metric.label}>
                <small>{metric.label}</small>
                <strong>{metric.value}</strong>
              </span>
            ))}
          </div>
          <div className="capability-guide-flow">
            {flow.map((step) => (
              <div
                className="capability-guide-step"
                key={step.label}
              >
                <span className="capability-guide-step-icon">
                  <Icon name={step.icon as never} size={13} />
                </span>
                <span>{step.label}</span>
              </div>
            ))}
          </div>
          <div className="capability-guide-footer">
            <Button type="default" size="small" icon={<Icon name="icon-map" size={13} />} onClick={openChat}>
              回到对话
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

function MultimodalPanel() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const runIdRef = useRef(0);
  const activeTaskIdRef = useRef<string | null>(null);
  const activeTurnRef = useRef<ReturnType<typeof startCapabilityTurn> | null>(null);
  const [kind, setKind] = useState<MultimodalKind>("image");
  const [model, setModel] = useState<MultimodalRequest["model"]>("mimo-v2.5");
  const [source, setSource] = useState("");
  const [sourceFileName, setSourceFileName] = useState("");
  const [sourceFileSize, setSourceFileSize] = useState<number | null>(null);
  const [sourceMimeType, setSourceMimeType] = useState("");
  const [prompt, setPrompt] = useState("请描述并分析这个素材。");
  const [status, setStatus] = useState<"idle" | "running" | "done" | "error">("idle");
  const [phase, setPhase] = useState(MULTIMODAL_PHASES[0].key);
  const [error, setError] = useState("");
  const [result, setResult] = useState<MultimodalResult | null>(null);

  const handleFile = async (file: File) => {
    if (file.size > MULTIMODAL_LOCAL_FILE_MAX_SIZE) {
      setSource("");
      setSourceFileName(file.name);
      setSourceFileSize(file.size);
      setSourceMimeType(file.type || fileAccept(kind).replace("/*", ""));
      setError(`本地上传会转成 Base64，请选择 ${formatFileSize(MULTIMODAL_LOCAL_FILE_MAX_SIZE)} 以内的文件；更大的素材建议在高级入口粘贴可访问 URL。`);
      return;
    }
    const dataUrl = await readFileAsDataUrl(file);
    setSource(dataUrl);
    setSourceFileName(file.name);
    setSourceFileSize(file.size);
    setSourceMimeType(file.type || fileAccept(kind).replace("/*", ""));
  };

  const clearSource = () => {
    setSource("");
    setSourceFileName("");
    setSourceFileSize(null);
    setSourceMimeType("");
  };

  const run = async () => {
    if (!source.trim() || !prompt.trim() || status === "running") return;
    const runId = runIdRef.current + 1;
    runIdRef.current = runId;
    const taskId = startBackgroundTask(`多模态理解：${MULTIMODAL_LABELS[kind]}`);
    activeTaskIdRef.current = taskId;
    setStatus("running");
    setPhase("read");
    setError("");
    setResult(null);
    const turn = startCapabilityTurn(
      "多模态理解",
      `多模态理解：${MULTIMODAL_LABELS[kind]}\n\n问题：${prompt.trim()}`,
      `正在调用 MiMo 多模态理解，素材类型：${MULTIMODAL_LABELS[kind]}。`
    );
    activeTurnRef.current = turn;
    try {
      await nextPaint();
      if (runIdRef.current !== runId) return;
      setPhase("upload");
      const output = await understandMultimodal({
        model,
        kind,
        source: source.trim(),
        prompt: prompt.trim(),
      });
      if (runIdRef.current !== runId) return;
      setPhase("answer");
      setResult(output);
      setPhase("archive");
      useSessionStore.getState().addOutputAsset({
        id: workflowAssetId("multimodal"),
        type: "text",
        source: "multimodal",
        title: `多模态分析-${MULTIMODAL_LABELS[kind]}`,
        createdAt: Date.now(),
        content: truncateAssetContent(output.content),
        mimeType: "text/markdown",
      });
      useUIStore.getState().openRightPanel("assets");
      turn.done(`多模态分析完成。\n\n${output.content}${formatUsage(output.usage)}`);
      finishBackgroundTask(taskId, true, `分析完成：${truncateAssetContent(output.content, 180)}`);
      setStatus("done");
      activeTaskIdRef.current = null;
      activeTurnRef.current = null;
    } catch (err) {
      if (runIdRef.current !== runId) return;
      const message = explainError(err);
      setPhase("upload");
      setError(message);
      turn.fail(err);
      finishBackgroundTask(taskId, false, message);
      setStatus("error");
      activeTaskIdRef.current = null;
      activeTurnRef.current = null;
    }
  };

  const cancelRun = () => {
    if (status !== "running") return;
    runIdRef.current += 1;
    if (activeTaskIdRef.current) {
      finishBackgroundTask(activeTaskIdRef.current, false, "用户已停止等待。");
      activeTaskIdRef.current = null;
    }
    setPhase("upload");
    setError("已停止等待。远端多模态请求可能仍在服务端完成，但当前界面不会继续挂起。");
    activeTurnRef.current?.fail(new Error("已停止等待。"));
    activeTurnRef.current = null;
    setStatus("error");
  };

  return (
    <div className="capability-pane">
      <div className="capability-section-title">多模态理解</div>
      <Card color="default" className="workflow-panel workflow-panel--multimodal">
        <CapabilityQuickStart
          icon="icon-design"
          title="素材理解馆"
          detail="上传文件是主流程；URL 和 Base64 只放在高级入口。"
          steps={[
            { label: "上传", icon: "icon-design" },
            { label: "提问", icon: "icon-chat" },
            { label: "分析", icon: "icon-critterpedia" },
          ]}
        />
        <div className="workflow-row">
          <label className="workflow-label">模型</label>
          <Select
            options={MULTIMODAL_MODEL_OPTIONS}
            value={model}
            onChange={(key) => setModel(key as MultimodalRequest["model"])}
          />
        </div>
        <div className="workflow-row">
          <label className="workflow-label">素材类型</label>
          <Select
            options={MULTIMODAL_KIND_OPTIONS}
            value={kind}
            onChange={(key) => setKind(key as MultimodalKind)}
          />
        </div>
        <div className="workflow-field">
          <label className="workflow-label">{MULTIMODAL_LABELS[kind]} 素材</label>
          <div className={`media-upload-card${source.trim() ? " media-upload-card--ready" : ""}`}>
              <div className="media-upload-head">
              <div className="media-upload-icon" aria-hidden="true">
                <Icon name="icon-design" size={18} bounce />
              </div>
              <div className="media-upload-copy">
                <div className="media-upload-title">上传素材</div>
                <div className="media-upload-desc">选择本地文件会自动转换为 data URL/Base64，并带入本次理解。</div>
              </div>
              <span className="media-upload-status">{source.trim() ? "已准备" : "待选择"}</span>
            </div>
            <div className="media-upload-meta-grid">
              <div className="media-upload-meta">
                <span>文件名</span>
                <strong>{sourceFileName || (source.trim() ? "手动输入" : "未选择")}</strong>
              </div>
              <div className="media-upload-meta">
                <span>大小</span>
                <strong>{sourceFileSize != null ? formatFileSize(sourceFileSize) : "未记录"}</strong>
              </div>
              <div className="media-upload-meta">
                <span>格式</span>
                <strong>{sourceMimeType || (source.startsWith("data:") ? source.slice(5, source.indexOf(";")) : "URL/Base64")}</strong>
              </div>
            </div>
            <div className="workflow-actions media-upload-actions">
              <Button type="primary" size="small" icon={<Icon name="icon-design" size={14} />} onClick={() => fileInputRef.current?.click()}>
                选择本地文件
              </Button>
              <Button type="text" size="small" onClick={clearSource}>
              清空
              </Button>
            </div>
            <Collapse
              className="workflow-advanced-collapse media-upload-advanced"
              defaultExpanded={false}
              question={
                <span className="workflow-advanced-question">
                  <Icon name="icon-diy" size={14} />
                  高级：粘贴 URL / Base64
                </span>
              }
              answer={
                <div className="workflow-advanced-panel">
                  <div className="workflow-advanced-note">
                    仅在你已经有公开 URL 或 data URL/Base64 时使用；普通流程直接上传文件即可。
                  </div>
                  <textarea
                    className="workflow-textarea workflow-textarea--source media-upload-textarea"
                    value={source}
                    onChange={(e) => {
                      setSource(e.target.value);
                      setSourceFileName(e.target.value.trim() ? "手动输入" : "");
                      setSourceFileSize(null);
                      setSourceMimeType("");
                    }}
                    placeholder="粘贴公开 URL 或 data:{MIME};base64,..."
                    rows={3}
                  />
                </div>
              }
            />
          </div>
          <input
            ref={fileInputRef}
            className="workflow-file-input"
            type="file"
            accept={fileAccept(kind)}
            onChange={(e) => {
              const file = e.currentTarget.files?.[0];
              if (file) void handleFile(file);
              e.currentTarget.value = "";
            }}
          />
        </div>
        <div className="workflow-field">
          <label className="workflow-label">问题</label>
          <textarea
            className="workflow-textarea"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={3}
          />
        </div>
        <Button
          type="primary"
          block
          onClick={run}
          disabled={!source.trim() || !prompt.trim() || status === "running"}
          loading={status === "running"}
        >
          {status === "running" ? "分析中…" : "发送到 MiMo 多模态"}
        </Button>
        <WorkflowProgress phases={MULTIMODAL_PHASES} activeKey={phase} status={status} />
        {status === "running" && (
          <button className="workflow-inline-cancel" type="button" onClick={cancelRun}>
            停止等待
          </button>
        )}
      </Card>

      <Card color="default" className="capability-note">
        MiMo 文档边界：图片支持 URL/Base64，单图不超过 50MB；音频 URL 不超过 100MB，Base64 不超过 50MB；视频 URL 不超过 300MB，Base64 不超过 50MB。
      </Card>

      {result && (
        <Card color="default" className="workflow-result">
          <div className="workflow-result-title">分析结果</div>
          <div className="workflow-result-body">{result.content}</div>
          {result.usage && (
            <pre className="workflow-result-usage">{JSON.stringify(result.usage, null, 2)}</pre>
          )}
        </Card>
      )}
      {error && <div className="workflow-error">{error}</div>}
    </div>
  );
}

type VoiceSampleOrigin = "empty" | "file" | "manual";
type VoiceSampleStatus = "idle" | "ready" | "warning" | "error";

const VOICE_SAMPLE_WARN_SIZE = 12 * 1024 * 1024;
const VOICE_SAMPLE_MAX_SIZE = 20 * 1024 * 1024;

const TTS_MODEL_GUIDES: Record<TtsRequest["model"], {
  label: string;
  badge: string;
  icon: string;
  copy: string;
}> = {
  "mimo-v2.5-tts": {
    label: "内置音色",
    badge: "最快",
    icon: "icon-helicopter",
    copy: "选择官方音色，适合稳定旁白和产品讲解。",
  },
  "mimo-v2.5-tts-voicedesign": {
    label: "音色设计",
    badge: "创作",
    icon: "icon-design",
    copy: "用风格说明设计声音，不需要上传样本。",
  },
  "mimo-v2.5-tts-voiceclone": {
    label: "音色克隆",
    badge: "样本",
    icon: "icon-camera",
    copy: "上传 mp3 / wav 样本后自动转换并校验。",
  },
};

function TtsPanel() {
  const voiceSampleInputRef = useRef<HTMLInputElement>(null);
  const runIdRef = useRef(0);
  const activeTaskIdRef = useRef<string | null>(null);
  const activeTurnRef = useRef<ReturnType<typeof startCapabilityTurn> | null>(null);
  const [ttsText, setTtsText] = useState("");
  const [ttsInstruction, setTtsInstruction] = useState("自然、清晰、稍微活泼，适合产品讲解。");
  const [ttsModel, setTtsModel] = useState<TtsRequest["model"]>("mimo-v2.5-tts");
  const [ttsVoice, setTtsVoice] = useState("mimo_default");
  const [voiceSample, setVoiceSample] = useState("");
  const [voiceSampleOrigin, setVoiceSampleOrigin] = useState<VoiceSampleOrigin>("empty");
  const [voiceSampleFileName, setVoiceSampleFileName] = useState("");
  const [voiceSampleFileSize, setVoiceSampleFileSize] = useState<number | null>(null);
  const [voiceSampleMimeType, setVoiceSampleMimeType] = useState("");
  const [voiceSampleStatus, setVoiceSampleStatus] = useState<VoiceSampleStatus>("idle");
  const [voiceSampleNote, setVoiceSampleNote] = useState(
    "上传 mp3 / wav 样本音频后会自动校验并转换。"
  );
  const [ttsStatus, setTtsStatus] = useState<"idle" | "running" | "done" | "error">("idle");
  const [ttsPhase, setTtsPhase] = useState(TTS_PHASES[0].key);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [audioFileName, setAudioFileName] = useState("mimodex-tts.wav");
  const [audioMimeType, setAudioMimeType] = useState("audio/wav");
  const [ttsError, setTtsError] = useState("");

  const applyVoiceSampleValue = (
    value: string,
    origin: VoiceSampleOrigin,
    meta?: { fileName?: string; fileSize?: number; mimeType?: string }
  ) => {
    const inspection = inspectVoiceSampleValue(value, {
      fileSize: meta?.fileSize,
      mimeType: meta?.mimeType,
    });

    setVoiceSample(value);
    setVoiceSampleOrigin(origin);
    setVoiceSampleFileName(meta?.fileName ?? (origin === "manual" ? "手动粘贴" : ""));
    setVoiceSampleFileSize(inspection.byteSize);
    setVoiceSampleMimeType(inspection.mimeType);
    setVoiceSampleStatus(inspection.status);
    setVoiceSampleNote(inspection.note);
  };

  const clearVoiceSample = () => {
    setVoiceSample("");
    setVoiceSampleOrigin("empty");
    setVoiceSampleFileName("");
    setVoiceSampleFileSize(null);
    setVoiceSampleMimeType("");
    setVoiceSampleStatus("idle");
    setVoiceSampleNote("上传 mp3 / wav 样本音频后会自动校验并转换。");
  };

  const runTts = async () => {
    if (!ttsText.trim() || ttsStatus === "running") return;
    const runId = runIdRef.current + 1;
    runIdRef.current = runId;
    const taskId = startBackgroundTask("语音合成");
    activeTaskIdRef.current = taskId;
    setTtsStatus("running");
    setTtsPhase("prepare");
    setTtsError("");
    setAudioUrl(null);
    const turn = startCapabilityTurn(
      "语音合成",
      `语音合成：${ttsText.trim()}`,
      "正在调用 MiMo TTS 生成语音。"
    );
    activeTurnRef.current = turn;
    try {
      await nextPaint();
      if (runIdRef.current !== runId) return;
      setTtsPhase("synthesize");
      const result = await synthesizeSpeech({
        model: ttsModel,
        text: ttsText.trim(),
        instruction: ttsInstruction.trim(),
        voice: ttsVoice,
        voiceSample: voiceSample.trim(),
        optimizeTextPreview: true,
        format: "wav",
      });
      if (runIdRef.current !== runId) return;
      setTtsPhase("inspect");
      const nextAudioUrl = audioObjectUrl(result);
      const fileName = `mimodex-tts.${result.fileExtension}`;
      setAudioUrl(nextAudioUrl);
      setAudioFileName(fileName);
      setAudioMimeType(result.mimeType);
      setTtsPhase("archive");
      useSessionStore.getState().addOutputAsset({
        id: workflowAssetId("tts"),
        type: "audio",
        source: "tts",
        title: fileName,
        createdAt: Date.now(),
        url: nextAudioUrl,
        mimeType: result.mimeType,
        content: [
          `模型：${ttsModel}`,
          ttsModel === "mimo-v2.5-tts" ? `音色：${ttsVoice}` : "",
          `格式：${result.mimeType}`,
          `大小：${formatFileSize(estimateBase64Bytes(result.audioBase64))}`,
        ].filter(Boolean).join("\n"),
      });
      useUIStore.getState().openRightPanel("assets");
      turn.done(
        [
          "语音合成完成。",
          "",
          `模型：${ttsModel}`,
          ttsModel === "mimo-v2.5-tts" ? `音色：${ttsVoice}` : "",
          `音频格式：${result.mimeType}`,
          "下方会尝试播放；如果系统编码器不支持，可以直接下载音频文件。",
        ].filter(Boolean).join("\n"),
        {
          audioUrl: nextAudioUrl,
          audioFileName: fileName,
          audioMimeType: result.mimeType,
        }
      );
      finishBackgroundTask(taskId, true, `语音已生成：${fileName}，格式 ${result.mimeType}`);
      setTtsStatus("done");
      activeTaskIdRef.current = null;
      activeTurnRef.current = null;
    } catch (err) {
      if (runIdRef.current !== runId) return;
      const message = explainError(err);
      setTtsPhase("synthesize");
      setTtsError(message);
      turn.fail(err);
      finishBackgroundTask(taskId, false, message);
      setTtsStatus("error");
      activeTaskIdRef.current = null;
      activeTurnRef.current = null;
    }
  };

  const handleVoiceSampleFile = async (file: File) => {
    const fileInfo = inferVoiceSampleFile(file);
    if (file.size > VOICE_SAMPLE_MAX_SIZE) {
      setVoiceSample("");
      setVoiceSampleOrigin("file");
      setVoiceSampleFileName(file.name);
      setVoiceSampleFileSize(file.size);
      setVoiceSampleMimeType(fileInfo.mimeType);
      setVoiceSampleStatus("error");
      setVoiceSampleNote(`样本大小是 ${formatFileSize(file.size)}，请换成 ${formatFileSize(VOICE_SAMPLE_MAX_SIZE)} 以内的 mp3 / wav。`);
      return;
    }
    const dataUrl = await readFileAsDataUrl(file);
    const normalized = ensureDataUrlMime(dataUrl, fileInfo.mimeType);
    applyVoiceSampleValue(normalized, "file", {
      fileName: file.name,
      fileSize: file.size,
      mimeType: fileInfo.mimeType,
    });
  };

  const cancelTts = () => {
    if (ttsStatus !== "running") return;
    runIdRef.current += 1;
    if (activeTaskIdRef.current) {
      finishBackgroundTask(activeTaskIdRef.current, false, "用户已停止等待。");
      activeTaskIdRef.current = null;
    }
    setTtsPhase("synthesize");
    setTtsError("已停止等待。远端语音任务可能仍在服务端完成，但当前界面不会继续挂起。");
    activeTurnRef.current?.fail(new Error("已停止等待。"));
    activeTurnRef.current = null;
    setTtsStatus("error");
  };

  const canCloneWithSample =
    ttsModel !== "mimo-v2.5-tts-voiceclone" ||
    (voiceSample.trim().length > 0 && voiceSampleStatus !== "error");

  const sampleStatusLabel: Record<VoiceSampleStatus, string> = {
    idle: "待上传",
    ready: "校验通过",
    warning: "可用但建议检查",
    error: "校验失败",
  };

  const sampleOriginLabel: Record<VoiceSampleOrigin, string> = {
    empty: "未提供",
    file: "本地上传",
    manual: "高级输入",
  };
  const activeTtsGuide = TTS_MODEL_GUIDES[ttsModel];

  return (
    <div className="capability-pane">
      <div className="capability-section-title">语音合成</div>
      <Card color="default" className="workflow-panel workflow-panel--tts">
        <CapabilityQuickStart
          icon="icon-helicopter"
          title="语音工坊"
          detail="先选模式，再写文本；音色克隆会要求上传样本音频并自动校验。"
          steps={[
            { label: "选声音", icon: "icon-helicopter" },
            { label: "合成", icon: "icon-miles" },
            { label: "播放", icon: "icon-shopping" },
          ]}
        />
        <div className="tts-mode-grid" role="list" aria-label="TTS 模式">
          {MIMO_TTS_MODELS.map((model) => {
            const guide = TTS_MODEL_GUIDES[model.key as TtsRequest["model"]];
            const selected = ttsModel === model.key;
            return (
              <button
                key={model.key}
                type="button"
                className={`tts-mode-card${selected ? " tts-mode-card--active" : ""}`}
                onClick={() => setTtsModel(model.key as TtsRequest["model"])}
                aria-pressed={selected}
              >
                <span className="tts-mode-icon" aria-hidden="true">
                  <Icon name={guide.icon as never} size={16} />
                </span>
                <span className="tts-mode-copy">
                  <span className="tts-mode-title">{guide.label}</span>
                  <span className="tts-mode-desc">{guide.copy}</span>
                </span>
                <span className="tts-mode-badge">{guide.badge}</span>
              </button>
            );
          })}
        </div>
        <div className="tts-mode-context">
          <Icon name={activeTtsGuide.icon as never} size={15} />
          <span>{activeTtsGuide.copy}</span>
        </div>
        <div className="tts-control-grid">
          {ttsModel === "mimo-v2.5-tts" && (
            <div className="workflow-row">
              <label className="workflow-label">音色</label>
              <Select
                options={MIMO_TTS_VOICES}
                value={ttsVoice}
                onChange={(key) => setTtsVoice(key)}
              />
            </div>
          )}
        </div>
        <Collapse
          className="workflow-advanced-collapse"
          defaultExpanded={false}
          question={
            <span className="workflow-advanced-question">
              <Icon name="icon-diy" size={14} />
              高级功能设置
            </span>
          }
          answer={
            <div className="workflow-advanced-panel">
              <div className="workflow-row">
                <label className="workflow-label">TTS 模型</label>
                <Select
                  options={MIMO_TTS_MODELS}
                  value={ttsModel}
                  onChange={(key) => setTtsModel(key as TtsRequest["model"])}
                />
              </div>
              <div className="workflow-advanced-note">
                普通使用直接点上方模式卡片即可；这里保留完整模型字段，便于核对平台参数。
              </div>
            </div>
          }
        />
        {ttsModel === "mimo-v2.5-tts-voiceclone" && (
          <div className="tts-sample-stack">
            <div
              className="tts-sample-card"
              onDragOver={(e) => {
                e.preventDefault();
                e.dataTransfer.dropEffect = "copy";
              }}
              onDrop={(e) => {
                e.preventDefault();
                const file = e.dataTransfer.files?.[0];
                if (file) void handleVoiceSampleFile(file);
              }}
            >
              <div className="tts-sample-head">
                <div className="tts-sample-title-wrap">
                  <div className="tts-sample-icon" aria-hidden="true">
                    <Icon name="icon-helicopter" size={18} bounce />
                  </div>
                  <div className="tts-sample-copy">
                    <div className="tts-sample-title">上传样本音频</div>
                    <div className="tts-sample-desc">拖入或选择一段 mp3 / wav，系统会自动校验并准备音色克隆。</div>
                  </div>
                </div>
                <span className={`tts-sample-status tts-sample-status--${voiceSampleStatus}`}>
                  {sampleStatusLabel[voiceSampleStatus]}
                </span>
              </div>

              <div className="tts-sample-meta-grid">
                <div className="tts-sample-meta">
                  <span className="tts-sample-meta-label">文件名</span>
                  <span className="tts-sample-meta-value">{voiceSampleFileName || "未选择"}</span>
                </div>
                <div className="tts-sample-meta">
                  <span className="tts-sample-meta-label">大小</span>
                  <span className="tts-sample-meta-value">
                    {voiceSampleFileSize != null ? formatFileSize(voiceSampleFileSize) : "未选择"}
                  </span>
                </div>
                <div className="tts-sample-meta">
                  <span className="tts-sample-meta-label">格式</span>
                  <span className="tts-sample-meta-value">{voiceSampleMimeType || "未识别"}</span>
                </div>
                <div className="tts-sample-meta">
                  <span className="tts-sample-meta-label">来源</span>
                  <span className="tts-sample-meta-value">{sampleOriginLabel[voiceSampleOrigin]}</span>
                </div>
              </div>

              <div className="tts-sample-note">{voiceSampleNote}</div>

              <div className="workflow-actions">
                <Button
                  type="primary"
                  size="small"
                  icon={<Icon name="icon-helicopter" size={14} bounce />}
                  onClick={() => voiceSampleInputRef.current?.click()}
                >
                  {voiceSample.trim() ? "更换样本音频" : "上传样本音频"}
                </Button>
                <Button type="text" size="small" onClick={clearVoiceSample} disabled={!voiceSample.trim()}>
                  清空
                </Button>
              </div>

              <input
                ref={voiceSampleInputRef}
                className="workflow-file-input"
                type="file"
                accept=".mp3,.wav,audio/mpeg,audio/mp3,audio/wav,audio/x-wav"
                onChange={(e) => {
                  const file = e.currentTarget.files?.[0];
                  if (file) void handleVoiceSampleFile(file);
                  e.currentTarget.value = "";
                }}
              />

              <div className="tts-sample-wave" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>

            <Collapse
              defaultExpanded={false}
              question={
                <span className="tts-advanced-question">
                  <Icon name="icon-diy" size={14} />
                  <span>高级：手动粘贴 Base64 / data URL</span>
                </span>
              }
              answer={
                <div className="tts-advanced-panel">
                  <div className="tts-advanced-note">只有你已经有标准字符串时才用这里。</div>
                  <textarea
                    className="workflow-textarea workflow-textarea--source tts-advanced-textarea"
                    value={voiceSample}
                    onChange={(e) =>
                      applyVoiceSampleValue(e.target.value, e.target.value.trim() ? "manual" : "empty")
                    }
                    placeholder="粘贴 data:audio/mpeg;base64,... 或纯 Base64"
                    rows={4}
                  />
                  <div className="workflow-actions">
                    <Button type="text" size="small" onClick={clearVoiceSample} disabled={!voiceSample.trim()}>
                      清空高级输入
                    </Button>
                  </div>
                </div>
              }
            />
          </div>
        )}
        <div className="tts-preset-grid">
          {TTS_STYLE_PRESETS.map((preset) => (
            <button
              key={preset.key}
              type="button"
              className="tts-preset"
              onClick={() => setTtsInstruction(preset.value)}
            >
              {preset.label}
            </button>
          ))}
        </div>
        <div className="workflow-field">
          <label className="workflow-label">风格说明</label>
          <textarea
            className="workflow-textarea"
            value={ttsInstruction}
            onChange={(e) => setTtsInstruction(e.target.value)}
            rows={3}
          />
        </div>
        <div className="workflow-field">
          <label className="workflow-label">要合成的文本</label>
          <textarea
            className="workflow-textarea workflow-textarea--large"
            value={ttsText}
            onChange={(e) => setTtsText(e.target.value)}
            placeholder="输入要合成的文本。点击“生成语音”后会真实调用 MiMo TTS。"
            rows={5}
          />
        </div>
        <Button
          type="primary"
          block
          onClick={runTts}
          loading={ttsStatus === "running"}
          disabled={
            !ttsText.trim() ||
            ttsStatus === "running" ||
            (ttsModel === "mimo-v2.5-tts-voiceclone" && !canCloneWithSample)
          }
        >
          {ttsStatus === "running"
            ? "合成中…"
            : ttsModel === "mimo-v2.5-tts-voiceclone" && !canCloneWithSample
              ? "先上传样本音频"
              : "生成语音"}
        </Button>
        <WorkflowProgress phases={TTS_PHASES} activeKey={ttsPhase} status={ttsStatus} />
        {ttsStatus === "running" && (
          <button className="workflow-inline-cancel" type="button" onClick={cancelTts}>
            停止等待
          </button>
        )}
        {audioUrl && (
          <GeneratedAudioCard
            className="tts-output"
            url={audioUrl}
            fileName={audioFileName}
            mimeType={audioMimeType}
          />
        )}
      </Card>
      <Card color="default" className="capability-note">
        MiMo TTS 规则：目标文本必须放在 assistant message；风格/情绪说明放在 user message。
      </Card>
      {ttsError && <div className="workflow-error">{ttsError}</div>}
    </div>
  );
}

function inspectVoiceSampleValue(
  value: string,
  options?: { fileSize?: number; mimeType?: string },
): {
  byteSize: number | null;
  mimeType: string;
  status: VoiceSampleStatus;
  note: string;
} {
  const trimmed = value.trim();
  if (!trimmed) {
    return {
      byteSize: null,
      mimeType: "",
      status: "idle",
      note: "上传 mp3 / wav 样本音频后会自动校验并转换。",
    };
  }

  const parsed = parseVoiceSampleValue(trimmed, options?.mimeType);
  if (!parsed.ok) {
    return {
      byteSize: options?.fileSize ?? null,
      mimeType: parsed.mimeType,
      status: "error",
      note: parsed.message,
    };
  }

  const byteSize = options?.fileSize ?? parsed.byteSize;
  if (byteSize > VOICE_SAMPLE_MAX_SIZE) {
    return {
      byteSize,
      mimeType: parsed.mimeType,
      status: "error",
      note: `样本大小是 ${formatFileSize(byteSize)}，请换成 ${formatFileSize(VOICE_SAMPLE_MAX_SIZE)} 以内的 mp3 / wav。`,
    };
  }

  if (byteSize > VOICE_SAMPLE_WARN_SIZE) {
    return {
      byteSize,
      mimeType: parsed.mimeType,
      status: "warning",
      note: `已自动转换完成，但样本大小是 ${formatFileSize(byteSize)}，可能超出平台限制。`,
    };
  }

  return {
    byteSize,
    mimeType: parsed.mimeType,
    status: "ready",
    note: `已自动转换为 ${parsed.mimeType === "audio/wav" ? "WAV" : "MP3"}，可直接生成克隆音色。`,
  };
}

function parseVoiceSampleValue(
  value: string,
  mimeHint?: string,
): {
  ok: boolean;
  mimeType: string;
  byteSize: number;
  message: string;
} {
  const dataUrlMatch = value.match(/^data:([^;,]+)?;base64,([\s\S]+)$/i);
  const mimeTypeFromValue = normalizeVoiceMimeType(dataUrlMatch?.[1] ?? mimeHint ?? "");
  const base64 = (dataUrlMatch ? dataUrlMatch[2] : value).replace(/\s+/g, "");

  if (!base64) {
    return {
      ok: false,
      mimeType: mimeTypeFromValue,
      byteSize: 0,
      message: "样本内容为空。",
    };
  }

  if (/[^A-Za-z0-9+/=]/.test(base64)) {
    return {
      ok: false,
      mimeType: mimeTypeFromValue,
      byteSize: 0,
      message: "样本内容不是有效 Base64。",
    };
  }

  let binary = "";
  try {
    binary = atob(base64);
  } catch {
    return {
      ok: false,
      mimeType: mimeTypeFromValue,
      byteSize: 0,
      message: "Base64 解码失败，请检查样本是否完整。",
    };
  }

  const detectedMimeType = mimeTypeFromValue || detectVoiceMimeType(binary);
  if (detectedMimeType !== "audio/mpeg" && detectedMimeType !== "audio/wav") {
    return {
      ok: false,
      mimeType: detectedMimeType,
      byteSize: binary.length,
      message: "仅支持 mp3 / wav 样本音频。",
    };
  }

  return {
    ok: true,
    mimeType: detectedMimeType,
    byteSize: binary.length,
    message: "",
  };
}

function detectVoiceMimeType(binary: string): string {
  const header = binary.slice(0, 12);
  const bytes = Array.from(binary.slice(0, 4), (char) => char.charCodeAt(0));
  if (header.startsWith("RIFF") && header.includes("WAVE")) {
    return "audio/wav";
  }
  if (header.startsWith("ID3")) {
    return "audio/mpeg";
  }
  const first = bytes[0] ?? 0;
  const second = bytes[1] ?? 0;
  if (first === 0xff && (second & 0xe0) === 0xe0) {
    return "audio/mpeg";
  }
  return "";
}

function inferVoiceSampleFile(file: File): { mimeType: string } {
  const name = file.name.toLowerCase();
  const type = normalizeVoiceMimeType(file.type);
  if (type === "audio/mpeg" || name.endsWith(".mp3")) {
    return { mimeType: "audio/mpeg" };
  }
  if (type === "audio/wav" || name.endsWith(".wav")) {
    return { mimeType: "audio/wav" };
  }
  return { mimeType: type || "audio/wav" };
}

function normalizeVoiceMimeType(value: string): string {
  const lower = value.toLowerCase();
  if (lower === "audio/mp3" || lower === "audio/mpeg3" || lower === "audio/x-mpeg-3") {
    return "audio/mpeg";
  }
  if (lower === "audio/x-wav" || lower === "audio/wave" || lower === "audio/vnd.wave") {
    return "audio/wav";
  }
  return lower;
}

function ensureDataUrlMime(value: string, mimeType: string): string {
  const trimmed = value.trim();
  if (!trimmed) return "";
  if (!trimmed.startsWith("data:")) {
    return `data:${mimeType};base64,${trimmed.replace(/\s+/g, "")}`;
  }
  return trimmed.replace(/^data:[^;,]*;base64,/i, `data:${mimeType};base64,`);
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function estimateBase64Bytes(value: string): number {
  const base64 = value.replace(/\s+/g, "");
  if (!base64) return 0;
  const padding = base64.endsWith("==") ? 2 : base64.endsWith("=") ? 1 : 0;
  return Math.max(0, Math.floor((base64.length * 3) / 4) - padding);
}

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result ?? ""));
    reader.onerror = () => reject(reader.error ?? new Error("读取文件失败"));
    reader.readAsDataURL(file);
  });
}

function fileAccept(kind: MultimodalKind): string {
  if (kind === "image") return "image/*";
  if (kind === "audio") return "audio/*";
  return "video/*";
}

function clampNumber(value: string, min: number, max: number): number {
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed)) return min;
  return Math.min(max, Math.max(min, parsed));
}
