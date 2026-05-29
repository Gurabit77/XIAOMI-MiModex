// ============================================================
// MiModex — SettingsPage  (Modal + Tabs)
// Tabs: 连接 / 通用 / 模型 / 权限 / 钩子 / 快捷键
// ============================================================
import { useEffect, useState } from "react";
import { useAppStore } from "@/stores/appStore";
import { useUIStore } from "@/stores/uiStore";
import { useSessionStore } from "@/stores/sessionStore";
import { Modal, Select, Switch, Button, Input, Card, Icon, Collapse } from "animal-island-ui";
import type { IconName } from "animal-island-ui";
import type { EffortLevel, PermissionMode, MimoPreset, SystemDiagnosticItem } from "@/types";
import { MIMO_CODE_MODELS, MIMO_CHAT_MODELS, MIMO_TTS_MODELS, MULTIMODAL_MODELS, WEB_SEARCH_MODELS } from "@/constants/mimoCapabilities";
import { isDesktopRuntime, MIMO_CONFIG_PATH_LABEL } from "@/services/config";
import { runSystemDiagnostics } from "@/services/diagnostics";
import { runMimoCapabilityDiagnostics, testMimoApiConnection, type MimoCapabilityTestResult } from "@/services/mimoApi";
import { explainError } from "@/services/errorExplain";
import "./SettingsPage.css";

const SETTINGS_NAV_MARKS: Record<string, string> = {
  connection: "K",
  general: "E",
  model: "O",
  permissions: "P",
  hooks: "H",
  shortcuts: "S",
  diagnostics: "Q",
};

// ---- MiMo 接入预设 ----
const MIMO_PRESETS: MimoPreset[] = [
  {
    label: "Token Plan（中国大陆）",
    description: "订阅制，适合国内用户",
    baseUrl: "https://token-plan-cn.xiaomimimo.com/anthropic",
    keyPrefix: "tp-",
  },
  {
    label: "Token Plan（新加坡）",
    description: "订阅制，新加坡节点",
    baseUrl: "https://token-plan-sgp.xiaomimimo.com/anthropic",
    keyPrefix: "tp-",
  },
  {
    label: "API Usage（按量计费）",
    description: "按 token 用量计费",
    baseUrl: "https://api.xiaomimimo.com/anthropic",
    keyPrefix: "sk-",
  },
];

const EFFORT_OPTIONS = [
  { key: "low",    label: "快速 — 轻量任务" },
  { key: "medium", label: "标准 — 日常编码" },
  { key: "high",   label: "精准 — 复杂分析" },
  { key: "max",    label: "极致 — 深度推理（v2.5 Pro）" },
];

const LANGUAGE_OPTIONS = [
  { key: "zh-CN", label: "中文" },
  { key: "en-US", label: "English" },
  { key: "ja-JP", label: "日本語" },
];
const FONT_SIZE_OPTIONS = [
  { key: "12", label: "12px" },
  { key: "13", label: "13px" },
  { key: "14", label: "14px（默认）" },
  { key: "15", label: "15px" },
  { key: "16", label: "16px" },
];
const SEND_KEY_OPTIONS = [
  { key: "enter",     label: "Enter 发送" },
  { key: "cmd-enter", label: "Cmd+Enter 发送" },
];
const MOTION_OPTIONS = [
  { key: "full", label: "完整动效" },
  { key: "gentle", label: "柔和动效" },
  { key: "off", label: "关闭动效" },
];
const THEME_OPTIONS = [
  { key: "light",  label: "浅色" },
  { key: "dark",   label: "深色" },
  { key: "system", label: "跟随系统" },
];
const SETTINGS_MOTION_PREVIEWS = [
  { key: "full", label: "切换转场", desc: "面板切换、应用弹出、加载路线都会播放完整动画。" },
  { key: "gentle", label: "柔和反馈", desc: "保留点击回弹和状态变化，减少持续循环动画。" },
  { key: "off", label: "安静模式", desc: "关闭装饰动画和转场，保留功能状态文字。" },
];
const PERMISSION_MODE_OPTIONS = [
  { key: "default",            label: "默认（首次询问）" },
  { key: "acceptEdits",        label: "自动接受编辑" },
  { key: "plan",               label: "仅规划模式" },
  { key: "auto",               label: "全自动" },
  { key: "dontAsk",            label: "不询问" },
  { key: "bypassPermissions",  label: "跳过所有权限" },
];

function inputValue(e: React.ChangeEvent<HTMLInputElement> | string): string {
  return typeof e === "string" ? e : e.target.value;
}

function getCredentialWarning(apiKey: string, baseUrl: string): string | null {
  const key = apiKey.trim();
  const url = baseUrl.trim();
  if (key.startsWith("sk-") && url.includes("token-plan-")) {
    return "当前 Key 和 Base URL 可能不匹配。Token Plan 通常用 tp- key。";
  }
  if (key.startsWith("tp-") && url.includes("api.xiaomimimo.com")) {
    return "当前 Key 和 Base URL 可能不匹配。API Usage 通常用 sk- key。";
  }
  if (url.includes("/anthropic")) {
    return "当前 Base URL 会按 Anthropic 兼容接口测试。";
  }
  if (url.endsWith("/v1") || !url.includes("/anthropic")) {
    return "当前 Base URL 会按 OpenAI 兼容接口测试。";
  }
  return null;
}

// ============================================================
// Tab: 连接配置
// ============================================================
function ConnectionTab() {
  const apiKey  = useSessionStore((s) => s.apiKey);
  const baseUrl = useSessionStore((s) => s.baseUrl);
  const setApiKey  = useSessionStore((s) => s.setApiKey);
  const setBaseUrl = useSessionStore((s) => s.setBaseUrl);
  const saveConfig = useSessionStore((s) => s.saveConfig);
  const loadConfig = useSessionStore((s) => s.loadConfig);

  const [showKey, setShowKey] = useState(false);
  const [saveState, setSaveState] = useState<"idle" | "saving" | "ok" | "error">("idle");
  const [saveMessage, setSaveMessage] = useState("");
  const [testState, setTestState] = useState<"idle" | "testing" | "ok" | "error">("idle");
  const [testMessage, setTestMessage] = useState("");
  const [diagState, setDiagState] = useState<"idle" | "testing" | "done" | "error">("idle");
  const [diagResults, setDiagResults] = useState<MimoCapabilityTestResult[]>([]);
  const [diagMessage, setDiagMessage] = useState("");
  const [lastTestedAt, setLastTestedAt] = useState<number | null>(null);
  const runtimeMode = isDesktopRuntime() ? "桌面 App（写入 ~/.mimo）" : "浏览器预览（只写 localStorage）";
  const credentialWarning = getCredentialWarning(apiKey, baseUrl);
  const selectedPreset = MIMO_PRESETS.find((preset) => preset.baseUrl === baseUrl) ?? null;
  const connectionReady = Boolean(apiKey.trim() && baseUrl.trim());

  const handleSave = async () => {
    setSaveState("saving");
    setSaveMessage("");
    try {
      const result = await saveConfig();
      setSaveState(result.ok ? "ok" : "error");
      setSaveMessage(result.ok
        ? `已写入并读回 ${result.path}；建议继续点击“保存并测试”确认 API 可用`
        : result.error || "未知保存错误");
      if (result.ok) setTimeout(() => setSaveState("idle"), 2500);
      return result.ok;
    } catch (err) {
      setSaveState("error");
      setSaveMessage(explainError(err));
      return false;
    }
  };

  const handleTestConnection = async () => {
    setTestState("testing");
    setTestMessage("");
    try {
      const message = await testMimoApiConnection();
      setTestState("ok");
      setTestMessage(message);
      setLastTestedAt(Date.now());
    } catch (err) {
      setTestState("error");
      setTestMessage(explainError(err));
    }
  };

  const handleSaveAndTest = async () => {
    const ok = await handleSave();
    if (ok) await handleTestConnection();
  };

  const handleReloadConfig = async () => {
    await loadConfig();
    setSaveState("idle");
    setSaveMessage("已从配置文件重新读取");
  };

  const handleRunDiagnostics = async () => {
    if (!window.confirm("诊断全部能力会真实调用联网、TTS 和多模态接口，可能产生耗时或用量。确定继续吗？")) {
      return;
    }
    setDiagState("testing");
    setDiagResults([]);
    setDiagMessage("");
    try {
      const results = await runMimoCapabilityDiagnostics();
      setDiagResults(results.map((result) => ({
        ...result,
        message: result.ok ? result.message : explainError(result.message),
      })));
      setDiagState("done");
    } catch (err) {
      setDiagState("error");
      setDiagMessage(explainError(err));
    }
  };

  useEffect(() => {
    if (!showKey) return undefined;
    const timer = window.setTimeout(() => setShowKey(false), 15_000);
    return () => window.clearTimeout(timer);
  }, [showKey]);

  const saveBtnLabel: Record<typeof saveState, string> = {
    idle:   "保存到 ~/.mimo/mimo.config.json",
    saving: "保存中…",
    ok:     "已保存",
    error:  "保存失败",
  };

  return (
    <div className="settings-section">
      <Card color="default" className="connection-guide-card">
        <div className="connection-guide-visual" aria-hidden="true">
          <Icon name="icon-camera" size={24} bounce />
          <span />
          <i />
        </div>
        <div className="connection-guide-copy">
          <span>连接向导</span>
          <strong>{connectionReady ? "已填写连接信息" : "先选接入方式，再粘贴 API Key"}</strong>
          <small>
            {selectedPreset
              ? `${selectedPreset.label} · ${selectedPreset.description}`
              : "自定义平台 · 请确认 Base URL 和 Key 类型匹配"}
          </small>
        </div>
        <div className="connection-guide-steps" aria-label="连接进度">
          <span className={baseUrl.trim() ? "connection-guide-step connection-guide-step--done" : "connection-guide-step"}>1 接入</span>
          <span className={apiKey.trim() ? "connection-guide-step connection-guide-step--done" : "connection-guide-step"}>2 Key</span>
          <span className={testState === "ok" || lastTestedAt ? "connection-guide-step connection-guide-step--done" : "connection-guide-step"}>3 测试</span>
        </div>
      </Card>
      {/* ---- 接入方式预设 ---- */}
      <div className="settings-subsection-title">接入方式</div>
      <div className="connection-presets">
        {MIMO_PRESETS.map((preset) => (
          <Card
            key={preset.baseUrl}
            color="default"
            className={`connection-preset-card ${baseUrl === preset.baseUrl ? "connection-preset-card--active" : ""}`}
            onClick={() => setBaseUrl(preset.baseUrl)}
          >
            <div className="connection-preset-label">
              <Icon name="icon-camera" size={14} />
              {preset.label}
            </div>
            <div className="connection-preset-desc">{preset.description}</div>
            <code className="connection-preset-url">{preset.baseUrl}</code>
          </Card>
        ))}
        {/* 自定义 */}
        <Card
          color="default"
          className={`connection-preset-card ${!MIMO_PRESETS.find((p) => p.baseUrl === baseUrl) ? "connection-preset-card--active" : ""}`}
          onClick={() => {
            if (MIMO_PRESETS.find((p) => p.baseUrl === baseUrl)) setBaseUrl("");
          }}
        >
          <div className="connection-preset-label">
            <Icon name="icon-diy" size={14} />
            自定义平台
          </div>
          <div className="connection-preset-desc">填写自定义 Base URL</div>
        </Card>
      </div>

      {/* ---- Base URL ---- */}
      <div className="settings-row settings-row--col">
        <div className="settings-label">Base URL</div>
        <Input
          value={baseUrl}
          onChange={(e) => setBaseUrl(inputValue(e))}
          placeholder="https://..."
          className="settings-input-full"
        />
      </div>

      {/* ---- API Key ---- */}
      <div className="settings-row settings-row--col">
        <div className="settings-label">
          API Key
          <span className="settings-label-hint">
            &nbsp;·&nbsp;通过&nbsp;<code>mimo /login</code>&nbsp;获取，或前往&nbsp;
            <a href="https://xiaomimimo.com" target="_blank" rel="noreferrer">
              xiaomimimo.com
            </a>
          </span>
        </div>
        <div className="api-key-row">
          <Input
            value={apiKey}
            onChange={(e) => setApiKey(inputValue(e))}
            placeholder="<YOUR_MIMO_API_KEY>"
            type={showKey ? "text" : "password"}
            className="settings-input-full"
          />
          <Button
            type="text"
            size="small"
            onClick={() => setShowKey((v) => !v)}
          >
            <Icon name={showKey ? "icon-camera" : "icon-critterpedia"} size={14} />
            {showKey ? "隐藏" : "显示"}
          </Button>
        </div>
        {showKey && (
          <div className="api-key-visibility-note">
            API Key 会在 15 秒后自动隐藏，录屏或共享屏幕前建议手动隐藏。
          </div>
        )}
      </div>

      {/* ---- 保存按钮 ---- */}
      {credentialWarning && (
        <Card color="default" className="connection-warning-card">
          <Icon name="icon-map" size={14} />
          <span>{credentialWarning}</span>
        </Card>
      )}

      <div className="connection-actions">
        <Button
          type="primary"
          loading={saveState === "saving"}
          onClick={handleSave}
          disabled={saveState === "saving" || !apiKey.trim() || !baseUrl.trim()}
        >
          {saveBtnLabel[saveState]}
        </Button>
        <Button
          type="default"
          loading={saveState === "saving" || testState === "testing"}
          onClick={handleSaveAndTest}
          disabled={saveState === "saving" || testState === "testing" || !apiKey.trim() || !baseUrl.trim()}
        >
          {testState === "testing" ? "测试中…" : "保存并测试"}
        </Button>
        <Button
          type="text"
          loading={testState === "testing"}
          onClick={handleTestConnection}
          disabled={testState === "testing" || !apiKey.trim() || !baseUrl.trim()}
        >
          {testState === "testing" ? "测试中…" : "测试基础 API"}
        </Button>
        <Button
          type="default"
          loading={diagState === "testing"}
          onClick={handleRunDiagnostics}
          disabled={diagState === "testing" || !apiKey.trim() || !baseUrl.trim()}
        >
          {diagState === "testing" ? "诊断中…" : "诊断全部能力"}
        </Button>
        <Button type="text" onClick={handleReloadConfig}>重新读取配置</Button>
      </div>

      <div className="connection-feedback-stack">
        {lastTestedAt && testState !== "ok" && (
          <span className="connection-save-ok">
            上次连接测试通过：{new Date(lastTestedAt).toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" })}
          </span>
        )}
        {saveState === "ok" && (
          <span className="connection-save-ok">
            {saveMessage}
          </span>
        )}
        {saveState === "error" && (
          <span className="connection-save-error">
            保存失败：{saveMessage}
          </span>
        )}
        {testState === "ok" && (
          <span className="connection-save-ok">
            API 连接成功：{testMessage}
          </span>
        )}
        {testState === "error" && (
          <span className="connection-save-error">
            API 连接失败：{testMessage}
          </span>
        )}
        {diagState === "error" && (
          <span className="connection-save-error">
            分项诊断失败：{diagMessage}
          </span>
        )}
      </div>

      {diagResults.length > 0 && (
        <div className="connection-diagnostics">
          {diagResults.map((result) => (
            <Card
              key={result.key}
              color="default"
              className={`diagnostic-card ${result.ok ? "diagnostic-card--ok" : "diagnostic-card--error"}`}
            >
              <div className="diagnostic-card-head">
                <Icon name={result.ok ? "icon-miles" : "icon-map"} size={14} />
                <span>{result.label}</span>
                <span className="diagnostic-card-status">{result.ok ? "可用" : "需处理"}</span>
              </div>
              <div className="diagnostic-card-message">{result.message}</div>
            </Card>
          ))}
        </div>
      )}

      {/* ---- 说明 ---- */}
      <Collapse
        className="settings-info-collapse"
        question={
          <span className="settings-info-question">
            <Icon name="icon-map" size={14} />
            配置说明
          </span>
        }
        answer={
          <div className="connection-info-card">
            <ul className="connection-info-list">
              <li>当前运行模式：<code>{runtimeMode}</code></li>
              <li>保存位置：<code>{MIMO_CONFIG_PATH_LABEL}</code></li>
              <li><code>测试基础 API</code> 会真实调用一次短对话，<code>诊断全部能力</code> 会继续测联网、TTS 和多模态</li>
              <li>也可以通过环境变量覆盖：<code>MIMO_API_KEY</code>、<code>MIMO_BASE_URL</code></li>
            </ul>
          </div>
        }
      />
    </div>
  );
}

// ============================================================
// Tab: 通用
// ============================================================
function GeneralTab() {
  const settings = useAppStore((s) => s.settings);
  const updateSettings = useAppStore((s) => s.updateSettings);

  return (
    <div className="settings-section">
      <SettingsFeatureHeader
        icon="icon-variant"
        title="体验控制"
        desc="把动画、发送方式和文字可读性放在一起调，不影响核心功能。"
        meta={[
          settings.motionMode === "off" ? "动效关闭" : settings.motionMode === "gentle" ? "柔和动效" : "完整动效",
          settings.sendKey === "enter" ? "Enter 发送" : "Cmd Enter 发送",
        ]}
      />
      <div className="settings-row">
        <div className="settings-label">语言</div>
        <Select options={LANGUAGE_OPTIONS} value={settings.language}
          onChange={(key) => updateSettings({ language: key as typeof settings.language })} />
      </div>
      <div className="settings-row">
        <div className="settings-label">主题</div>
        <Select options={THEME_OPTIONS} value={settings.theme}
          onChange={(key) => updateSettings({ theme: key as typeof settings.theme })} />
      </div>
      <div className="settings-row">
        <div className="settings-label">字体大小</div>
        <Select options={FONT_SIZE_OPTIONS} value={String(settings.fontSize)}
          onChange={(key) => updateSettings({ fontSize: Number(key) })} />
      </div>
      <div className="settings-row">
        <div className="settings-label">发送快捷键</div>
        <Select options={SEND_KEY_OPTIONS} value={settings.sendKey}
          onChange={(key) => updateSettings({ sendKey: key as typeof settings.sendKey })} />
      </div>
      <div className="settings-row">
        <div className="settings-label">动态效果</div>
        <Select options={MOTION_OPTIONS} value={settings.motionMode}
          onChange={(key) => updateSettings({ motionMode: key as typeof settings.motionMode })} />
      </div>
      <div className="settings-motion-preview-grid" aria-label="动效预览">
        {SETTINGS_MOTION_PREVIEWS.map((item) => (
          <button
            key={item.key}
            type="button"
            className={`settings-motion-preview settings-motion-preview--${item.key}${settings.motionMode === item.key ? " settings-motion-preview--active" : ""}`}
            onClick={() => updateSettings({ motionMode: item.key as typeof settings.motionMode })}
          >
            <span className="settings-motion-orbit" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <strong>{item.label}</strong>
            <small>{item.desc}</small>
          </button>
        ))}
      </div>
      <div className="settings-row">
        <div className="settings-label">音效</div>
        <Switch checked={settings.soundEnabled}
          onChange={() => updateSettings({ soundEnabled: !settings.soundEnabled })} />
      </div>
      <div className="settings-row">
        <div className="settings-label">打字机效果</div>
        <Switch checked={settings.typewriterEnabled}
          onChange={() => updateSettings({ typewriterEnabled: !settings.typewriterEnabled })} />
      </div>
    </div>
  );
}

// ============================================================
// Tab: 模型
// ============================================================
function ModelTab() {
  const currentModel  = useSessionStore((s) => s.currentModel);
  const setModel      = useSessionStore((s) => s.setModel);
  const effort        = useSessionStore((s) => s.effort);
  const setEffort     = useSessionStore((s) => s.setEffort);
  const fastMode      = useSessionStore((s) => s.fastMode);
  const toggleFastMode = useSessionStore((s) => s.toggleFastMode);

  return (
    <div className="settings-section">
      <SettingsFeatureHeader
        icon="icon-miles"
        title="模型控制台"
        desc="日常编码默认使用当前模型；联网、多模态、语音会在各自工作台选择平台模型。"
        meta={[currentModel, `推理：${effort}`, fastMode ? "快速模式开" : "快速模式关"]}
      />
      <Collapse
        className="settings-info-collapse"
        question={
          <span className="settings-info-question">
            <Icon name="icon-miles" size={14} />
            模型说明
          </span>
        }
        answer={
          <div className="connection-info-card">
            <ul className="connection-info-list">
              <li><code>mimo-v2.5</code>：标准模型</li>
              <li><code>mimo-v2.5-pro</code>：更强推理</li>
              <li>Web Search：<code>{WEB_SEARCH_MODELS.join(" / ")}</code></li>
              <li>多模态：<code>{MULTIMODAL_MODELS.join(" / ")}</code></li>
              <li>TTS：<code>{MIMO_TTS_MODELS.map((m) => m.key).join(" / ")}</code></li>
            </ul>
          </div>
        }
      />
      <div className="settings-row">
        <div className="settings-label">MiMo Code 模型</div>
        <Select options={MIMO_CODE_MODELS} value={currentModel}
          onChange={(key) => setModel(key)} />
      </div>
      <Collapse
        className="settings-info-collapse"
        question={
          <span className="settings-info-question">
            <Icon name="icon-design" size={14} />
            平台模型清单
          </span>
        }
        answer={
          <div className="connection-info-card">
            <div className="settings-model-chip-list">
              {MIMO_CHAT_MODELS.map((model) => (
                <code key={model.key} className="settings-model-chip">{model.key}</code>
              ))}
            </div>
          </div>
        }
      />
      <div className="settings-row">
        <div className="settings-label">推理强度</div>
        <Select options={EFFORT_OPTIONS} value={effort}
          onChange={(key) => setEffort(key as EffortLevel)} />
      </div>
      <div className="settings-row">
        <div className="settings-label">快速模式</div>
        <Switch checked={fastMode} onChange={toggleFastMode} />
      </div>
    </div>
  );
}

// ============================================================
// Tab: 权限
// ============================================================
const PERMISSION_RULE_TYPE_OPTIONS = [
  { key: "allow", label: "allow" },
  { key: "deny",  label: "deny" },
  { key: "ask",   label: "ask" },
];

function PermissionsTab() {
  const permissionMode    = useSessionStore((s) => s.permissionMode);
  const setPermissionMode = useSessionStore((s) => s.setPermissionMode);
  const permissionRules   = useSessionStore((s) => s.permissionRules);
  const removePermissionRule = useSessionStore((s) => s.removePermissionRule);
  const addPermissionRule    = useSessionStore((s) => s.addPermissionRule);

  const [newPattern, setNewPattern]   = useState("");
  const [newRuleType, setNewRuleType] = useState<"allow" | "deny" | "ask">("allow");

  const handleAddRule = () => {
    if (!newPattern.trim()) return;
    addPermissionRule({ id: Date.now().toString(36), pattern: newPattern.trim(), type: newRuleType });
    setNewPattern("");
    setNewRuleType("allow");
  };

  return (
    <div className="settings-section">
      <SettingsFeatureHeader
        icon="icon-critterpedia"
        title="授权策略"
        desc="减少来回询问，但把高风险执行仍放在用户可理解的选择里。"
        meta={[`模式：${permissionMode}`, `${permissionRules.length} 条规则`]}
      />
      <div className="settings-row">
        <div className="settings-label">权限模式</div>
        <Select options={PERMISSION_MODE_OPTIONS} value={permissionMode}
          onChange={(key) => setPermissionMode(key as PermissionMode)} />
      </div>
      <div className="settings-subsection">
        <div className="settings-subsection-title">权限规则</div>
        {permissionRules.map((rule) => (
          <Card key={rule.id} color="default" className="settings-rule-card">
            <div className="settings-rule-row">
              <span className={`settings-rule-type settings-rule-type--${rule.type}`}>{rule.type}</span>
              <span className="settings-rule-pattern">{rule.pattern}</span>
              <Button type="text" size="small" danger onClick={() => removePermissionRule(rule.id)}>删除</Button>
            </div>
          </Card>
        ))}
        <div className="settings-add-form">
          <Input value={newPattern} onChange={(e) => setNewPattern(inputValue(e))}
            placeholder="例如 Bash(npm run *)" className="settings-add-input" />
          <Select options={PERMISSION_RULE_TYPE_OPTIONS} value={newRuleType}
            onChange={(key) => setNewRuleType(key as "allow" | "deny" | "ask")} />
          <Button type="primary" onClick={handleAddRule}>添加</Button>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// Tab: Hooks
// ============================================================
const HOOK_EVENT_OPTIONS = [
  { key: "PreToolUse",   label: "PreToolUse" },
  { key: "PostToolUse",  label: "PostToolUse" },
  { key: "Stop",         label: "Stop" },
  { key: "SubagentStop", label: "SubagentStop" },
];
const HOOK_TYPE_OPTIONS = [
  { key: "command", label: "命令" },
  { key: "http",    label: "HTTP" },
];

function HooksTab() {
  const hooks       = useSessionStore((s) => s.hooks);
  const toggleHook  = useSessionStore((s) => s.toggleHook);
  const removeHook  = useSessionStore((s) => s.removeHook);
  const addHook     = useSessionStore((s) => s.addHook);

  const [newEvent,    setNewEvent]    = useState("PreToolUse");
  const [newHookType, setNewHookType] = useState<"command" | "http">("command");
  const [newValue,    setNewValue]    = useState("");

  const handleAddHook = () => {
    if (!newValue.trim()) return;
    addHook({ id: Date.now().toString(36), event: newEvent, type: newHookType, value: newValue.trim(), enabled: true });
    setNewValue("");
    setNewEvent("PreToolUse");
    setNewHookType("command");
  };

  return (
    <div className="settings-section">
      <SettingsFeatureHeader
        icon="icon-diy"
        title="工具钩子"
        desc="给 PreToolUse、PostToolUse 等事件配置命令或 HTTP 自动化。"
        meta={[`${hooks.length} 个钩子`, `${hooks.filter((hook) => hook.enabled).length} 个启用`]}
      />
      {hooks.length > 0 ? (
        hooks.map((hook) => (
          <Card key={hook.id} color="default" className={`settings-hook-card ${hook.enabled ? "settings-hook-card--enabled" : ""}`}>
            <Collapse
              question={
                <span className="settings-hook-question">
                  <span className="settings-hook-event">{hook.event}</span>
                  <span className="settings-hook-type">{hook.type}</span>
                </span>
              }
              answer={
                <div className="settings-hook-detail">
                  <div className="settings-hook-value">{hook.value}</div>
                  <div className="settings-hook-actions">
                    <Switch checked={hook.enabled} onChange={() => toggleHook(hook.id)} size="small" />
                    <Button type="text" size="small" danger onClick={() => removeHook(hook.id)}>删除</Button>
                  </div>
                </div>
              }
            />
          </Card>
        ))
      ) : (
        <Card color="default" className="settings-hook-empty">
          <Icon name="icon-diy" size={15} />
          <span>还没有工具钩子。需要自动化时再添加，日常使用可以保持为空。</span>
        </Card>
      )}
      <div className="settings-add-form">
        <Select options={HOOK_EVENT_OPTIONS} value={newEvent} onChange={(key) => setNewEvent(key)} />
        <Select options={HOOK_TYPE_OPTIONS} value={newHookType} onChange={(key) => setNewHookType(key as "command" | "http")} />
        <Input value={newValue} onChange={(e) => setNewValue(inputValue(e))}
          placeholder="命令或 URL" className="settings-add-input" />
        <Button type="primary" onClick={handleAddHook}>添加</Button>
      </div>
    </div>
  );
}

// ============================================================
// Tab: 快捷键
// ============================================================
function ShortcutsTab() {
  const shortcuts = [
    { key: "Enter / Cmd+Enter",  action: "发送消息" },
    { key: "/",                  action: "打开命令面板" },
    { key: "Cmd+N",              action: "新建对话" },
    { key: "Cmd+,",              action: "打开设置" },
    { key: "Cmd+B",              action: "切换左面板" },
    { key: "Cmd+Shift+B",        action: "切换右面板" },
    { key: "Cmd+/",              action: "聚焦输入框" },
  ];
  return (
    <div className="settings-section">
      <SettingsFeatureHeader
        icon="icon-chat"
        title="快捷键"
        desc="这些键位都可以从界面完成同样操作；这里只做快速查阅。"
        meta={["输入法 Enter 已保护", "面板可快速切换"]}
      />
      <div className="settings-shortcuts-list">
        {shortcuts.map((s) => (
          <div key={s.key} className="settings-shortcut-row">
            <kbd className="settings-shortcut-key">{s.key}</kbd>
            <span className="settings-shortcut-action">{s.action}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// Tab: 诊断
// ============================================================
function DiagnosticsTab() {
  const [state, setState] = useState<"idle" | "running" | "done" | "error">("idle");
  const [items, setItems] = useState<SystemDiagnosticItem[]>([]);
  const [message, setMessage] = useState("");

  const handleRun = async () => {
    setState("running");
    setMessage("");
    try {
      const results = await runSystemDiagnostics();
      setItems(results);
      setState("done");
    } catch (err) {
      setState("error");
      setMessage(explainError(err));
    }
  };

  return (
    <div className="settings-section">
      <SettingsFeatureHeader
        icon="icon-critterpedia"
        title="系统诊断"
        desc="检查包体、签名、内置引擎和本机运行环境，避免把安装问题误判成功能问题。"
        meta={[state === "running" ? "诊断中" : state === "done" ? "已完成" : "待检查"]}
      />
      <Card color="default" className="connection-info-card">
        <div className="connection-info-title">
          <Icon name="icon-map" size={14} /> 本机诊断
        </div>
        <ul className="connection-info-list">
          <li>检查 .app bundle、主程序、内置 MiMo Code Engine、配置文件、签名和 Gatekeeper 状态</li>
          <li>如果 Gatekeeper 显示异常但签名校验通过，通常是本机 LaunchServices 或 Code Signing 子系统状态异常</li>
          <li>终端可运行 <code>npm run doctor</code> 查看同类信息</li>
        </ul>
      </Card>

      <div className="connection-actions">
        <Button type="primary" loading={state === "running"} onClick={handleRun} disabled={state === "running"}>
          {state === "running" ? "诊断中…" : "开始诊断"}
        </Button>
      </div>

      {state === "error" && (
        <span className="connection-save-error">诊断失败：{message}</span>
      )}

      {items.length > 0 && (
        <div className="system-diagnostics">
          {items.map((item) => (
            <Card
              key={item.key}
              color="default"
              className={`system-diagnostic-card ${item.ok ? "system-diagnostic-card--ok" : "system-diagnostic-card--error"}`}
            >
              <div className="system-diagnostic-head">
                <Icon name={item.ok ? "icon-miles" : "icon-map"} size={14} />
                <span>{item.label}</span>
                <span className="system-diagnostic-status">{item.ok ? "正常" : "异常"}</span>
              </div>
              <div className="system-diagnostic-detail">{item.detail}</div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

// ============================================================
// Main SettingsPage
// ============================================================
export function SettingsPage() {
  const settingsOpen    = useUIStore((s) => s.settingsOpen);
  const setSettingsOpen = useUIStore((s) => s.setSettingsOpen);
  const settingsTab     = useUIStore((s) => s.settingsTab);
  const setSettingsTab  = useUIStore((s) => s.setSettingsTab);
  const apiKey = useSessionStore((s) => s.apiKey);
  const baseUrl = useSessionStore((s) => s.baseUrl);
  const hasApiConfig = Boolean(apiKey.trim() && baseUrl.trim());
  const previewMode =
    import.meta.env.DEV &&
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).has("mimodexPreview");
  const needsConnection = !hasApiConfig && !previewMode;
  const canClose = hasApiConfig || previewMode;
  const [modalWidth, setModalWidth] = useState(() => getSettingsModalWidth());

  useEffect(() => {
    const handleResize = () => setModalWidth(getSettingsModalWidth());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items: Array<{ key: string; label: string; desc: string; icon: IconName; children: React.ReactNode }> = [
    { key: "connection",  label: "连接",   desc: "API 与配置文件", icon: "icon-camera", children: <ConnectionTab /> },
    { key: "general",     label: "通用",   desc: "动效、字体、发送", icon: "icon-variant", children: <GeneralTab /> },
    { key: "model",       label: "模型",   desc: "推理与速度", icon: "icon-miles", children: <ModelTab /> },
    { key: "permissions", label: "权限",   desc: "授权模式与规则", icon: "icon-critterpedia", children: <PermissionsTab /> },
    { key: "hooks",       label: "钩子",   desc: "工具自动化", icon: "icon-diy", children: <HooksTab /> },
    { key: "shortcuts",   label: "快捷键", desc: "键盘操作", icon: "icon-chat", children: <ShortcutsTab /> },
    { key: "diagnostics", label: "诊断",   desc: "本机检查", icon: "icon-map", children: <DiagnosticsTab /> },
  ];
  const activeItem = items.find((item) => item.key === settingsTab) ?? items[0];

  return (
    <Modal
      open={settingsOpen}
      onClose={() => {
        if (canClose) setSettingsOpen(false);
      }}
      maskClosable={canClose}
      footer={null}
      typewriter={false}
      width={modalWidth}
      className="settings-modal"
    >
      <div className={`settings-page${needsConnection ? " settings-page--required" : ""}`}>
        <div className="settings-page-header">
          <div className="settings-page-heading">
            <span className="settings-page-icon" aria-hidden="true">
              <Icon name="icon-design" size={18} />
            </span>
            <div>
              <div className="settings-page-kicker">MiModex</div>
              <h2 className="settings-page-title">设置</h2>
            </div>
          </div>
          <div className="settings-page-actions">
            {needsConnection && (
              <span className="settings-required-badge">需要先完成连接配置</span>
            )}
            {canClose && (
              <Button
                type="text"
                size="small"
                icon={<Icon name="icon-map" size={13} />}
                onClick={() => setSettingsOpen(false)}
                title="关闭设置"
              >
                关闭
              </Button>
            )}
          </div>
        </div>
        <div className="settings-shell">
          <nav className="settings-side-nav" aria-label="设置分类">
            {items.map((item) => (
              <button
                key={item.key}
                type="button"
                className={`settings-side-nav-item${settingsTab === item.key ? " settings-side-nav-item--active" : ""}`}
                onClick={() => setSettingsTab(item.key)}
              >
                <span className="settings-side-nav-icon" aria-hidden="true">
                  <Icon name={item.icon} size={14} />
                  <span className="mimo-mark">{SETTINGS_NAV_MARKS[item.key]}</span>
                </span>
                <span className="settings-side-nav-copy">
                  <strong>{item.label}</strong>
                  <small>{item.desc}</small>
                </span>
              </button>
            ))}
          </nav>
          <section className="settings-shell-content" aria-label={activeItem.label}>
            {activeItem.children}
          </section>
        </div>
      </div>
    </Modal>
  );
}

function getSettingsModalWidth(): number {
  if (typeof window === "undefined") return 1160;
  const sidePadding = window.innerWidth < 760 ? 20 : 96;
  return Math.min(1160, Math.max(340, window.innerWidth - sidePadding));
}

function SettingsFeatureHeader({
  icon,
  title,
  desc,
  meta,
}: {
  icon: IconName;
  title: string;
  desc: string;
  meta: string[];
}) {
  return (
    <Card color="default" className="settings-feature-header">
      <span className="settings-feature-icon" aria-hidden="true">
        <Icon name={icon} size={18} bounce />
      </span>
      <span className="settings-feature-copy">
        <strong>{title}</strong>
        <small>{desc}</small>
      </span>
      <span className="settings-feature-meta">
        {meta.map((item) => (
          <em key={item}>{item}</em>
        ))}
      </span>
    </Card>
  );
}
