import { Button, Collapse, Icon } from "animal-island-ui";
import type { IconName } from "animal-island-ui";
import { useUIStore } from "@/stores/uiStore";
import { useSessionStore } from "@/stores/sessionStore";
import type { CapabilityTab, RightPanelTab } from "@/types";
import "./AppLauncher.css";

type LauncherTone = "blue" | "teal" | "green" | "yellow" | "orange" | "red";

interface LauncherApp {
  id: string;
  title: string;
  desc: string;
  icon: IconName;
  mark: string;
  tone: LauncherTone;
  badge?: string;
  action: () => void;
}

const CAPABILITY_ACTIONS: Array<{
  id: string;
  title: string;
  desc: string;
  icon: IconName;
  mark: string;
  tone: LauncherTone;
  tab: CapabilityTab;
  badge?: string;
}> = [
  {
    id: "coding",
    title: "编程",
    desc: "写代码、审查、重构",
    icon: "icon-chat",
    mark: "C",
    tone: "blue",
    tab: "coding",
    badge: "常用",
  },
  {
    id: "web",
    title: "联网",
    desc: "实时搜索并带来源",
    icon: "icon-camera",
    mark: "W",
    tone: "orange",
    tab: "web",
    badge: "实时",
  },
  {
    id: "multimodal",
    title: "多模态",
    desc: "图片、音频、视频理解",
    icon: "icon-design",
    mark: "M",
    tone: "yellow",
    tab: "multimodal",
    badge: "素材",
  },
  {
    id: "tts",
    title: "语音",
    desc: "TTS 与音色克隆",
    icon: "icon-helicopter",
    mark: "T",
    tone: "teal",
    tab: "tts",
    badge: "音频",
  },
];

const PANEL_ACTIONS: Array<{
  id: string;
  title: string;
  desc: string;
  icon: IconName;
  mark: string;
  tone: LauncherTone;
  tab: RightPanelTab;
}> = [
  {
    id: "assets",
    title: "资产",
    desc: "生成音频和结果文件",
    icon: "icon-shopping",
    mark: "A",
    tone: "blue",
    tab: "assets",
  },
  {
    id: "context",
    title: "上下文",
    desc: "文件、记忆和目录",
    icon: "icon-map",
    mark: "X",
    tone: "green",
    tab: "context",
  },
  {
    id: "changes",
    title: "变更",
    desc: "本轮文件改动",
    icon: "icon-variant",
    mark: "V",
    tone: "yellow",
    tab: "changes",
  },
  {
    id: "tasks",
    title: "任务",
    desc: "后台任务进度",
    icon: "icon-diy",
    mark: "R",
    tone: "teal",
    tab: "tasks",
  },
];

const SETTINGS_ACTIONS: Array<{
  id: string;
  title: string;
  desc: string;
  icon: IconName;
  mark: string;
  tone: LauncherTone;
  tab: string;
}> = [
  {
    id: "connection",
    title: "连接",
    desc: "API Key 与 Base URL",
    icon: "icon-camera",
    mark: "K",
    tone: "teal",
    tab: "connection",
  },
  {
    id: "model",
    title: "模型",
    desc: "模型、推理强度和快速模式",
    icon: "icon-miles",
    mark: "M",
    tone: "blue",
    tab: "model",
  },
  {
    id: "permissions",
    title: "权限",
    desc: "工具授权和规则",
    icon: "icon-critterpedia",
    mark: "P",
    tone: "orange",
    tab: "permissions",
  },
  {
    id: "hooks",
    title: "钩子",
    desc: "Pre/Post Tool 自动化",
    icon: "icon-diy",
    mark: "H",
    tone: "yellow",
    tab: "hooks",
  },
  {
    id: "shortcuts",
    title: "快捷键",
    desc: "发送、面板与聚焦",
    icon: "icon-chat",
    mark: "S",
    tone: "teal",
    tab: "shortcuts",
  },
  {
    id: "motion",
    title: "动效",
    desc: "动画强度与音效",
    icon: "icon-variant",
    mark: "E",
    tone: "green",
    tab: "general",
  },
  {
    id: "diagnostics",
    title: "诊断",
    desc: "本机与能力检查",
    icon: "icon-map",
    mark: "Q",
    tone: "red",
    tab: "diagnostics",
  },
];

export function AppLauncher() {
  const launcherOpen = useUIStore((s) => s.launcherOpen);
  const setLauncherOpen = useUIStore((s) => s.setLauncherOpen);
  const openCapability = useUIStore((s) => s.openCapability);
  const openRightPanel = useUIStore((s) => s.openRightPanel);
  const setSettingsTab = useUIStore((s) => s.setSettingsTab);
  const setSettingsOpen = useUIStore((s) => s.setSettingsOpen);
  const assetsCount = useSessionStore((s) => s.outputAssets.length);
  const runningTaskCount = useSessionStore((s) => s.backgroundTasks.filter((task) => task.status === "running").length);
  const changesCount = useSessionStore((s) => s.fileChanges.length);
  const contextCount = useSessionStore((s) => s.contextFiles.length);

  if (!launcherOpen) return null;

  const close = () => setLauncherOpen(false);
  const openSettings = (tab: string) => {
    setSettingsTab(tab);
    setSettingsOpen(true);
    close();
  };

  const capabilityApps: LauncherApp[] = CAPABILITY_ACTIONS.map((item) => ({
    ...item,
    action: () => {
      openCapability(item.tab);
      close();
    },
  }));

  const panelApps: LauncherApp[] = PANEL_ACTIONS.map((item) => ({
    ...item,
    badge: getPanelBadge(item.tab, {
      assets: assetsCount,
      tasks: runningTaskCount,
      changes: changesCount,
      context: contextCount,
    }),
    action: () => {
      openRightPanel(item.tab);
      close();
    },
  }));

  const settingApps: LauncherApp[] = SETTINGS_ACTIONS.map((item) => ({
    ...item,
    action: () => openSettings(item.tab),
  }));

  return (
    <div className="app-launcher-layer" role="dialog" aria-modal="true" aria-label="MiModex 应用抽屉">
      <button className="app-launcher-scrim" type="button" aria-label="关闭应用抽屉" onClick={close} />
      <section className="app-launcher-phone">
        <div className="app-launcher-device-rail" aria-hidden="true">
          <span className="app-launcher-rail-dot" />
          <span className="app-launcher-rail-time">
            {new Date().toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" })}
          </span>
          <span className="app-launcher-rail-signal">
            <i />
            <i />
            <i />
          </span>
        </div>

        <div className="app-launcher-head">
          <div className="app-launcher-logo" aria-hidden="true">
            <Icon name="icon-miles" size={18} bounce />
          </div>
          <div className="app-launcher-copy">
            <span>NookPhone</span>
            <h2>岛屿应用</h2>
            <p>编程、资料、素材、语音和成果。</p>
          </div>
          <Button type="text" size="small" icon={<Icon name="icon-map" size={13} />} onClick={close}>
            关闭
          </Button>
        </div>

        <div className="app-launcher-route-board" aria-label="推荐入口">
          <div className="app-launcher-route-title">
            <Icon name="icon-map" size={15} />
            选择一个入口
          </div>
          <div className="app-launcher-route-grid" role="list">
            {capabilityApps.map((app, index) => (
              <LauncherRouteButton key={app.id} app={app} index={index} />
            ))}
          </div>
        </div>

        <LauncherSection title="成果与状态" apps={panelApps} compact />

        <Collapse
          className="app-launcher-advanced-collapse"
          defaultExpanded={false}
          question={
            <span className="app-launcher-advanced-question">
              <Icon name="icon-diy" size={14} />
              高级功能设置
            </span>
          }
          answer={<LauncherGrid apps={settingApps} compact />}
        />
      </section>
    </div>
  );
}

function LauncherRouteButton({
  app,
  index,
}: {
  app: LauncherApp;
  index: number;
}) {
  return (
    <button
      type="button"
      className={`app-launcher-route app-launcher-route--${app.tone}`}
      style={{ animationDelay: `${index * 54}ms` }}
      onClick={app.action}
    >
      <span className="app-launcher-route-icon app-launcher-route-icon--complete" aria-hidden="true">
        <Icon name={app.icon} size={22} bounce />
        <span className="app-launcher-mark">{app.mark}</span>
      </span>
      <span className="app-launcher-route-copy">
        <strong>{app.title}</strong>
        <small>{app.desc}</small>
      </span>
      {app.badge && <em>{app.badge}</em>}
    </button>
  );
}

function LauncherSection({
  title,
  apps,
  compact = false,
}: {
  title: string;
  apps: LauncherApp[];
  compact?: boolean;
}) {
  return (
    <div className={`app-launcher-section${compact ? " app-launcher-section--compact" : ""}`}>
      <div className="app-launcher-section-title">{title}</div>
      <LauncherGrid apps={apps} compact={compact} />
    </div>
  );
}

function LauncherGrid({
  apps,
  compact = false,
}: {
  apps: LauncherApp[];
  compact?: boolean;
}) {
  return (
    <div className={`app-launcher-grid${compact ? " app-launcher-grid--compact" : ""}`} role="list">
      {apps.map((app, index) => (
        <button
          key={app.id}
          type="button"
          className={`app-launcher-tile app-launcher-tile--${app.tone}`}
          style={{ animationDelay: `${index * 46}ms` }}
          onClick={app.action}
        >
          {app.badge && <span className="app-launcher-badge">{app.badge}</span>}
          <span className="app-launcher-icon app-launcher-icon--complete" aria-hidden="true">
            <Icon name={app.icon} size={compact ? 20 : 24} bounce />
            <span className="app-launcher-mark">{app.mark}</span>
          </span>
          <span className="app-launcher-title">{app.title}</span>
          <span className="app-launcher-desc">{app.desc}</span>
        </button>
      ))}
    </div>
  );
}

function getPanelBadge(
  tab: RightPanelTab,
  counts: Record<RightPanelTab, number>,
): string | undefined {
  const count = counts[tab];
  if (tab === "tasks" && count > 0) return `${count} 中`;
  if (count > 0) return String(count);
  return undefined;
}
