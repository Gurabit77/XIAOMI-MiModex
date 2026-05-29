// ============================================================
// MiModex — LeftPanel  (自定义导航栏，替代 Tabs 圆圈样式)
// ============================================================
import { useUIStore } from "@/stores/uiStore";
import { Icon } from "animal-island-ui";
import type { LeftPanelTab } from "@/types";
import type { IconName } from "animal-island-ui";
import { SessionManager } from "./SessionManager";
import { CapabilityCenter } from "./CapabilityCenter";
import { ContextPanel } from "@/components/RightPanel/ContextPanel";
import "./LeftPanel.css";

const NAV_ITEMS: { key: LeftPanelTab; label: string; icon: IconName }[] = [
  { key: "conversations", label: "对话", icon: "icon-chat" },
  { key: "capabilities",  label: "能力", icon: "icon-critterpedia" },
  { key: "context",       label: "上下文", icon: "icon-map" },
];

const CONTENT: Record<LeftPanelTab, React.ReactNode> = {
  conversations: <SessionManager />,
  capabilities:  <CapabilityCenter />,
  context:       <ContextPanel />,
};

export function LeftPanel() {
  const activeTab = useUIStore((s) => s.leftPanelTab);
  const setTab    = useUIStore((s) => s.setLeftPanelTab);

  return (
    <aside className="left-panel">
      {/* ---- 顶部导航栏 ---- */}
      <div className="lp-nav">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.key}
            className={`lp-nav-btn${activeTab === item.key ? " lp-nav-btn--active" : ""}`}
            onClick={() => setTab(item.key)}
            title={item.label}
          >
            <Icon name={item.icon} size={14} />
            <span className="lp-nav-label">{item.label}</span>
          </button>
        ))}
      </div>

      {/* ---- 内容区 ---- */}
      <div className="lp-content">
        {CONTENT[activeTab]}
      </div>
    </aside>
  );
}
