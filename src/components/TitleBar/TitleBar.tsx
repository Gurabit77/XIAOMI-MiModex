// ============================================================
// MiModex — TitleBar (macOS Native-feel + model/effort controls)
// ============================================================
import { useAppStore } from "@/stores/appStore";
import { useUIStore } from "@/stores/uiStore";
import { useSessionStore } from "@/stores/sessionStore";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { useCallback, useEffect, useState } from "react";
import type { PointerEvent } from "react";
import { Button, Icon, Select, Switch } from "animal-island-ui";
import type { EffortLevel } from "@/types";
import { MIMO_CODE_MODELS } from "@/constants/mimoCapabilities";
import "./TitleBar.css";

const WEEKDAYS_ZH = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
const TITLEBAR_NO_DRAG_SELECTOR = [
  ".titlebar-no-drag",
  "button",
  "input",
  "textarea",
  "select",
  "a",
  "[role='button']",
  "[role='switch']",
  "[contenteditable='true']",
].join(",");

function TitleBarClock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const hh = now.getHours().toString().padStart(2, "0");
  const mm = now.getMinutes().toString().padStart(2, "0");
  const wd = WEEKDAYS_ZH[now.getDay()];
  const mo = now.getMonth() + 1;
  const da = now.getDate();
  return (
    <span className="titlebar-clock">
      <span className="titlebar-clock-date">{wd} {mo}/{da}</span>
      <span className="titlebar-clock-time">{hh}:{mm}</span>
    </span>
  );
}

const MODEL_OPTIONS = MIMO_CODE_MODELS.map((model) => ({
  ...model,
  label:
    model.key === "mimo-v2.5-pro" ? "v2.5 Pro" :
    model.key === "mimo-v2.5" ? "v2.5" :
    model.key === "mimo-v2-pro" ? "v2 Pro" :
    model.key === "mimo-v2-omni" ? "Omni" :
    model.key === "mimo-v2-flash" ? "Flash" :
    model.label,
}));

const EFFORT_OPTIONS = [
  { key: "low",    label: "快速" },
  { key: "medium", label: "标准" },
  { key: "high",   label: "精准" },
  { key: "max",    label: "极致" },
];

export function TitleBar() {
  const createConversation = useAppStore((s) => s.createConversation);

  const leftPanelCollapsed = useUIStore((s) => s.leftPanelCollapsed);
  const toggleLeftPanel = useUIStore((s) => s.toggleLeftPanel);
  const rightPanelOpen = useUIStore((s) => s.rightPanelOpen);
  const toggleRightPanel = useUIStore((s) => s.toggleRightPanel);
  const setSettingsOpen = useUIStore((s) => s.setSettingsOpen);
  const setLauncherOpen = useUIStore((s) => s.setLauncherOpen);

  const currentModel = useSessionStore((s) => s.currentModel);
  const setModel = useSessionStore((s) => s.setModel);
  const effort = useSessionStore((s) => s.effort);
  const setEffort = useSessionStore((s) => s.setEffort);
  const fastMode = useSessionStore((s) => s.fastMode);
  const toggleFastMode = useSessionStore((s) => s.toggleFastMode);
  const connectionStatus = useSessionStore((s) => s.connectionStatus);

  const handleTitleBarPointerDown = useCallback((event: PointerEvent<HTMLElement>) => {
    if (event.button !== 0) return;

    const target = event.target instanceof HTMLElement ? event.target : null;
    if (!target || target.closest(TITLEBAR_NO_DRAG_SELECTOR)) return;
    if (!("__TAURI_INTERNALS__" in window)) return;

    void getCurrentWindow().startDragging();
  }, []);

  return (
    <header className="titlebar" onPointerDown={handleTitleBarPointerDown}>
      {/* ---- Left: traffic lights + toggle sidebar ---- */}
      <div className="titlebar-left">
        <div className="titlebar-traffic-lights-spacer" />
        <div className="titlebar-no-drag">
          <Button
            type="text"
            size="small"
            icon={<Icon name="icon-map" size={16} />}
            onClick={toggleLeftPanel}
            title={leftPanelCollapsed ? "展开左栏" : "收起左栏"}
          >
            <span className="titlebar-action-label">{leftPanelCollapsed ? "左栏" : "收起"}</span>
          </Button>
        </div>
      </div>

      {/* ---- Center: logo + model select + effort select + fast toggle ---- */}
      <div className="titlebar-center">
        <div className="titlebar-brand">
          <div className="titlebar-logo-mark" aria-hidden="true">
            <Icon name="icon-miles" size={14} bounce />
          </div>
          <span className="titlebar-title">MiModex</span>
          <span className="titlebar-brand-leaf" />
        </div>

        <div className="titlebar-controls titlebar-no-drag">
          <div className="titlebar-connection-dot-wrapper">
            <span
              className={`titlebar-connection-dot titlebar-connection-dot--${connectionStatus}`}
            />
          </div>
          <Select
            options={MODEL_OPTIONS}
            value={currentModel}
            onChange={(key) => setModel(key)}
          />
          <Select
            options={EFFORT_OPTIONS}
            value={effort}
            onChange={(key) => setEffort(key as EffortLevel)}
          />
          <div className="titlebar-fast-toggle">
            <span className="titlebar-fast-label">快速</span>
            <Switch
              checked={fastMode}
              onChange={toggleFastMode}
              size="small"
            />
          </div>
        </div>
      </div>

      {/* ---- Right: time + settings + right panel toggle + new chat ---- */}
      <div className="titlebar-right titlebar-no-drag">
        <TitleBarClock />
        <Button
          type="text"
          size="small"
          icon={<Icon name="icon-design" size={16} />}
          onClick={() => setSettingsOpen(true)}
          title="设置"
        >
          <span className="titlebar-action-label">设置</span>
        </Button>
        <Button
          type="text"
          size="small"
          icon={<Icon name="icon-camera" size={16} />}
          onClick={() => setLauncherOpen(true)}
          title="打开功能应用"
        >
          <span className="titlebar-action-label">应用</span>
        </Button>
        <Button
          type="text"
          size="small"
          icon={<Icon name="icon-critterpedia" size={16} />}
          onClick={toggleRightPanel}
          title="上下文面板"
        >
          <span className="titlebar-action-label">{rightPanelOpen ? "右栏" : "成果"}</span>
        </Button>
        <Button
          type="text"
          size="small"
          icon={<Icon name="icon-chat" size={16} />}
          onClick={() => createConversation()}
          title="新建对话"
        >
          <span className="titlebar-action-label">新建</span>
        </Button>
      </div>
    </header>
  );
}
