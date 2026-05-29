// ============================================================
// MiModex — RightPanel  (自定义导航栏，替代 Tabs 圆圈样式)
// ============================================================
import { useUIStore } from "@/stores/uiStore";
import { useSessionStore } from "@/stores/sessionStore";
import { Icon } from "animal-island-ui";
import type { RightPanelTab } from "@/types";
import type { IconName } from "animal-island-ui";
import { ContextPanel } from "./ContextPanel";
import { ChangesPanel } from "./ChangesPanel";
import { TasksPanel }   from "./TasksPanel";
import { AssetsPanel } from "./AssetsPanel";
import "./RightPanel.css";

const NAV_ITEMS: { key: RightPanelTab; label: string; icon: IconName }[] = [
  { key: "assets",  label: "资产",   icon: "icon-shopping" },
  { key: "context", label: "上下文", icon: "icon-map" },
  { key: "changes", label: "变更",   icon: "icon-variant" },
  { key: "tasks",   label: "任务",   icon: "icon-diy" },
];

const CONTENT: Record<RightPanelTab, React.ReactNode> = {
  assets: <AssetsPanel />,
  context: <ContextPanel />,
  changes: <ChangesPanel />,
  tasks:   <TasksPanel />,
};

export function RightPanel() {
  const activeTab = useUIStore((s) => s.rightPanelTab);
  const setTab    = useUIStore((s) => s.setRightPanelTab);
  const closeRightPanel = useUIStore((s) => s.closeRightPanel);
  const assetsCount = useSessionStore((s) => s.outputAssets.length);
  const contextCount = useSessionStore((s) => s.contextFiles.length);
  const changesCount = useSessionStore((s) => s.fileChanges.length);
  const taskCount = useSessionStore((s) => s.backgroundTasks.length);
  const runningTaskCount = useSessionStore((s) => s.backgroundTasks.filter((t) => t.status === "running").length);

  const counts: Record<RightPanelTab, string> = {
    assets: String(assetsCount),
    context: String(contextCount),
    changes: String(changesCount),
    tasks: runningTaskCount > 0 ? `${runningTaskCount}中` : String(taskCount),
  };

  return (
    <aside className="right-panel">
      {/* ---- 顶部导航栏 ---- */}
      <div className="rp-nav">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.key}
            className={`rp-nav-btn${activeTab === item.key ? " rp-nav-btn--active" : ""}`}
            onClick={() => setTab(item.key)}
            title={item.label}
          >
            <Icon name={item.icon} size={13} />
            <span className="rp-nav-label">{item.label}</span>
            <span className="rp-nav-count">{counts[item.key]}</span>
          </button>
        ))}
        <button
          type="button"
          className="rp-drawer-close"
          onClick={closeRightPanel}
          title="收起右栏"
        >
          <Icon name="icon-diy" size={13} />
          <span>收起</span>
        </button>
      </div>

      {/* ---- 内容区 ---- */}
      <div className="rp-content">
        {CONTENT[activeTab]}
      </div>
    </aside>
  );
}
