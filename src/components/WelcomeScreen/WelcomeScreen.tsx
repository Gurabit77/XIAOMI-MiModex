// ============================================================
// MiModex — Island Hub Welcome Screen
// ============================================================
import { useAppStore } from "@/stores/appStore";
import { useUIStore } from "@/stores/uiStore";
import { Button, Collapse, Footer, Icon } from "animal-island-ui";
import type { IconName } from "animal-island-ui";
import type { CapabilityTab, RightPanelTab } from "@/types";
import "./WelcomeScreen.css";

interface QuickAction {
  icon: IconName;
  mark: string;
  tone: "blue" | "teal" | "green" | "yellow" | "orange";
  title: string;
  desc: string;
  badge?: string;
  command?: string;
  tab?: CapabilityTab;
}

interface HubApp {
  icon: IconName;
  mark: string;
  tone: "blue" | "teal" | "green" | "yellow" | "orange" | "red";
  title: string;
  desc: string;
  badge?: string;
  kind: "capability" | "panel" | "settings" | "launcher";
  capability?: CapabilityTab;
  panel?: RightPanelTab;
  settingsTab?: string;
}

const CODE_TEMPLATES: QuickAction[] = [
  {
    icon: "icon-chat",
    mark: "写",
    tone: "blue",
    title: "写一个功能",
    desc: "描述目标，MiMo 修改项目",
    command: "请帮我实现这个功能：\n\n背景：\n目标：\n验收标准：",
  },
  {
    icon: "icon-critterpedia",
    mark: "审",
    tone: "teal",
    title: "审查代码",
    desc: "检查当前改动风险",
    command: "/review 请审查当前项目改动，重点关注 bug、回归风险和缺失测试。",
  },
  {
    icon: "icon-diy",
    mark: "修",
    tone: "green",
    title: "修复问题",
    desc: "粘贴报错，定位根因",
    command: "请帮我定位并修复这个问题：\n\n现象：\n报错：\n复现步骤：",
  },
  {
    icon: "icon-map",
    mark: "读",
    tone: "yellow",
    title: "理解项目",
    desc: "读结构，给上手说明",
    command: "请阅读当前项目结构，告诉我这个项目如何运行、核心模块在哪里、下一步开发应该注意什么。",
  },
];

const PRIMARY_HUB_APPS: HubApp[] = [
  {
    icon: "icon-chat",
    mark: "C",
    tone: "blue",
    title: "编程",
    desc: "写代码、审查、重构",
    badge: "常用",
    kind: "capability",
    capability: "coding",
  },
  {
    icon: "icon-camera",
    mark: "W",
    tone: "orange",
    title: "联网",
    desc: "实时搜索与来源",
    badge: "实时",
    kind: "capability",
    capability: "web",
  },
  {
    icon: "icon-design",
    mark: "M",
    tone: "yellow",
    title: "多模态",
    desc: "上传素材并理解",
    badge: "素材",
    kind: "capability",
    capability: "multimodal",
  },
  {
    icon: "icon-helicopter",
    mark: "T",
    tone: "teal",
    title: "语音",
    desc: "TTS 与音色克隆",
    badge: "音频",
    kind: "capability",
    capability: "tts",
  },
];

const RESULT_HUB_APPS: HubApp[] = [
  {
    icon: "icon-shopping",
    mark: "A",
    tone: "blue",
    title: "资产",
    desc: "音频、摘要和文件",
    badge: "成果",
    kind: "panel",
    panel: "assets",
  },
  {
    icon: "icon-map",
    mark: "X",
    tone: "green",
    title: "上下文",
    desc: "项目记忆与目录",
    badge: "背包",
    kind: "panel",
    panel: "context",
  },
  {
    icon: "icon-variant",
    mark: "V",
    tone: "yellow",
    title: "变更",
    desc: "文件改动与 Diff",
    badge: "台账",
    kind: "panel",
    panel: "changes",
  },
  {
    icon: "icon-diy",
    mark: "R",
    tone: "teal",
    title: "任务",
    desc: "运行、排队、失败",
    badge: "看板",
    kind: "panel",
    panel: "tasks",
  },
];

const SETTINGS_HUB_APPS: HubApp[] = [
  {
    icon: "icon-critterpedia",
    mark: "P",
    tone: "orange",
    title: "权限",
    desc: "执行授权策略",
    badge: "高级",
    kind: "settings",
    settingsTab: "permissions",
  },
  {
    icon: "icon-miles",
    mark: "O",
    tone: "blue",
    title: "模型",
    desc: "推理强度与模型",
    badge: "配置",
    kind: "settings",
    settingsTab: "model",
  },
  {
    icon: "icon-diy",
    mark: "H",
    tone: "green",
    title: "钩子",
    desc: "工具前后自动化",
    badge: "高级",
    kind: "settings",
    settingsTab: "hooks",
  },
  {
    icon: "icon-chat",
    mark: "S",
    tone: "teal",
    title: "快捷键",
    desc: "发送与面板操作",
    badge: "效率",
    kind: "settings",
    settingsTab: "shortcuts",
  },
  {
    icon: "icon-variant",
    mark: "E",
    tone: "green",
    title: "动效",
    desc: "动画与打字机",
    badge: "体验",
    kind: "settings",
    settingsTab: "general",
  },
  {
    icon: "icon-camera",
    mark: "K",
    tone: "teal",
    title: "连接",
    desc: "API Key 与节点",
    badge: "必需",
    kind: "settings",
    settingsTab: "connection",
  },
  {
    icon: "icon-map",
    mark: "Q",
    tone: "red",
    title: "诊断",
    desc: "系统与能力检查",
    badge: "检查",
    kind: "settings",
    settingsTab: "diagnostics",
  },
];

export function WelcomeScreen() {
  const setInputValue = useAppStore((s) => s.setInputValue);
  const createConversation = useAppStore((s) => s.createConversation);
  const openCapability = useUIStore((s) => s.openCapability);
  const openRightPanel = useUIStore((s) => s.openRightPanel);
  const setSettingsOpen = useUIStore((s) => s.setSettingsOpen);
  const setSettingsTab = useUIStore((s) => s.setSettingsTab);
  const setLauncherOpen = useUIStore((s) => s.setLauncherOpen);

  const focusComposer = () => {
    setTimeout(() => {
      document.querySelector<HTMLTextAreaElement>(".input-bar-textarea")?.focus();
    }, 50);
  };

  const useTemplate = (action: QuickAction) => {
    if (action.tab) {
      openCapability(action.tab);
      return;
    }
    if (action.command) {
      setInputValue(action.command + " ");
      focusComposer();
    }
  };

  const openHubApp = (app: HubApp) => {
    if (app.kind === "capability" && app.capability) {
      openCapability(app.capability);
      return;
    }
    if (app.kind === "panel" && app.panel) {
      openRightPanel(app.panel);
      return;
    }
    if (app.kind === "settings" && app.settingsTab) {
      setSettingsTab(app.settingsTab);
      setSettingsOpen(true);
      return;
    }
    setLauncherOpen(true);
  };

  const startBlankTask = () => {
    createConversation();
    focusComposer();
  };

  const openConnectionSettings = () => {
    setSettingsTab("connection");
    setSettingsOpen(true);
  };

  return (
    <div className="welcome-screen">
      <div className="welcome-content">
        <section className="island-hub">
          <div className="island-hub-hero">
            <div className="island-hub-logo" aria-hidden="true">
              <Icon name="icon-miles" size={18} />
              <span className="island-hub-logo-leaf island-hub-logo-leaf--one" />
              <span className="island-hub-logo-leaf island-hub-logo-leaf--two" />
            </div>
            <div className="island-hub-copy">
              <span className="welcome-kicker">岛屿工作台</span>
              <h1 className="welcome-title">MiModex</h1>
              <p className="welcome-subtitle">先说目标，再按需要打开能力应用。</p>
            </div>
            <div className="island-hub-actions">
              <Button
                type="primary"
                icon={<Icon name="icon-chat" size={16} />}
                onClick={startBlankTask}
              >
                开始任务
              </Button>
              <Button
                type="default"
                icon={<Icon name="icon-camera" size={15} />}
                onClick={() => setLauncherOpen(true)}
              >
                打开应用
              </Button>
            </div>
          </div>

          <div className="island-hub-layout island-hub-layout--single">
            <section className="nookphone-panel nookphone-panel--full" aria-labelledby="nookphone-title">
              <div className="nookphone-device-rail" aria-hidden="true">
                <span className="nookphone-rail-dot" />
                <span className="nookphone-rail-time">{new Date().toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" })}</span>
                <span className="nookphone-rail-signal">
                  <i />
                  <i />
                  <i />
                </span>
              </div>
              <div className="nookphone-panel-head">
                <div>
                  <span className="nookphone-kicker">NookPhone</span>
                  <h2 id="nookphone-title">岛屿功能地图</h2>
                </div>
                <Button
                  type="text"
                  size="small"
                  icon={<Icon name="icon-design" size={13} />}
                  onClick={openConnectionSettings}
                >
                  连接设置
                </Button>
              </div>
              <div className="welcome-onboarding-map" aria-label="开始路径">
                <button type="button" className="welcome-onboarding-step welcome-onboarding-step--active" onClick={startBlankTask}>
                  <span>1</span>
                  <strong>说目标</strong>
                </button>
                <i aria-hidden="true" />
                <button type="button" className="welcome-onboarding-step" onClick={() => setLauncherOpen(true)}>
                  <span>2</span>
                  <strong>选能力</strong>
                </button>
                <i aria-hidden="true" />
                <button type="button" className="welcome-onboarding-step" onClick={() => openRightPanel("assets")}>
                  <span>3</span>
                  <strong>收成果</strong>
                </button>
              </div>
              <div className="welcome-route-panel" aria-label="常用能力">
                <div className="welcome-route-panel-title">
                  <Icon name="icon-map" size={14} />
                  常用能力
                </div>
                <div className="welcome-route-grid" role="list">
                  {PRIMARY_HUB_APPS.map((app, index) => (
                    <HubRouteButton key={app.title} app={app} index={index} onClick={() => openHubApp(app)} />
                  ))}
                </div>
              </div>
              <div className="nookphone-app-section">
                <div className="nookphone-app-section-title">成果与状态</div>
                <div className="nookphone-grid nookphone-grid--hub" role="list">
                  {RESULT_HUB_APPS.map((app, index) => (
                    <HubAppButton key={app.title} app={app} index={index + 4} onClick={() => openHubApp(app)} />
                  ))}
                </div>
              </div>
              <Collapse
                defaultExpanded={false}
                className="welcome-template-collapse welcome-advanced-collapse"
                question={
                  <span className="welcome-template-question">
                    <Icon name="icon-diy" size={14} />
                    高级功能设置
                  </span>
                }
                answer={
                  <div className="welcome-advanced-content">
                    <div className="nookphone-grid nookphone-grid--advanced" role="list">
                      {SETTINGS_HUB_APPS.map((app, index) => (
                        <HubAppButton key={app.title} app={app} index={index} onClick={() => openHubApp(app)} />
                      ))}
                    </div>
                    <div className="welcome-template-group">
                      <div className="welcome-template-group-title">常用任务模板</div>
                      <div className="welcome-template-grid">
                        {CODE_TEMPLATES.map((action, index) => (
                          <button
                            key={action.title}
                            type="button"
                            className={`welcome-template-card welcome-template-card--${action.tone}`}
                            style={{ animationDelay: `${index * 60}ms` }}
                            onClick={() => useTemplate(action)}
                          >
                            <Icon name={action.icon} size={18} />
                            <span>
                              <strong>{action.title}</strong>
                              <small>{action.desc}</small>
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                }
              />
            </section>
          </div>
        </section>
      </div>

      <div className="welcome-footer">
        <Footer type="tree" />
      </div>
    </div>
  );
}

function HubRouteButton({
  app,
  index,
  onClick,
}: {
  app: HubApp;
  index: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className={`welcome-route welcome-route--${app.tone}`}
      style={{ animationDelay: `${index * 54}ms` }}
      onClick={onClick}
    >
      <span className="welcome-route-icon welcome-route-icon--complete" aria-hidden="true">
        <Icon name={app.icon} size={22} />
        <span className="welcome-route-mark">{app.mark}</span>
      </span>
      <span className="welcome-route-copy">
        <strong>{app.title}</strong>
        <small>{app.desc}</small>
      </span>
      {app.badge && <em>{app.badge}</em>}
    </button>
  );
}

function HubAppButton({
  app,
  index,
  onClick,
}: {
  app: HubApp;
  index: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className={`nookphone-app nookphone-app--${app.tone}`}
      style={{ animationDelay: `${index * 42}ms` }}
      onClick={onClick}
    >
      <span className="nookphone-app-badge">{app.badge}</span>
      <span className="nookphone-app-icon nookphone-app-icon--complete" aria-hidden="true">
        <Icon name={app.icon} size={26} />
        <span className="nookphone-app-mark">{app.mark}</span>
      </span>
      <span className="nookphone-app-title">{app.title}</span>
      <span className="nookphone-app-desc">{app.desc}</span>
      <span className="nookphone-app-spark" aria-hidden="true" />
    </button>
  );
}
