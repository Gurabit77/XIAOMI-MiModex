// ============================================================
// MiModex — App Root (Three-column IDE layout)
// ============================================================
import { useEffect, useRef } from "react";
import { useUIStore } from "@/stores/uiStore";
import { useAppStore } from "@/stores/appStore";
import { useSessionStore } from "@/stores/sessionStore";
import { Button, Card, Footer, Icon } from "animal-island-ui";
import { checkCLIAvailable } from "@/services/cli";
import { TitleBar } from "@/components/TitleBar/TitleBar";
import { LeftPanel } from "@/components/LeftPanel/LeftPanel";
import { CapabilityWorkspace } from "@/components/LeftPanel/CapabilityCenter";
import { ChatArea } from "@/components/ChatArea/ChatArea";
import { InputBar } from "@/components/InputBar/InputBar";
import { RightPanel } from "@/components/RightPanel/RightPanel";
import { StatusBar } from "@/components/Layout/StatusBar";
import { SettingsPage } from "@/components/Settings/SettingsPage";
import { AppLauncher } from "@/components/AppLauncher/AppLauncher";
import "./App.css";
import "@/styles/visual-system.css";

export default function App() {
  const previewMode =
    import.meta.env.DEV &&
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).has("mimodexPreview");
  const leftPanelCollapsed = useUIStore((s) => s.leftPanelCollapsed);
  const rightPanelOpen = useUIStore((s) => s.rightPanelOpen);
  const toggleLeftPanel = useUIStore((s) => s.toggleLeftPanel);
  const toggleRightPanel = useUIStore((s) => s.toggleRightPanel);
  const setSettingsOpen = useUIStore((s) => s.setSettingsOpen);
  const setSettingsTab = useUIStore((s) => s.setSettingsTab);
  const mainMode = useUIStore((s) => s.mainMode);
  const motionMode = useAppStore((s) => s.settings.motionMode);
  const createConversation = useAppStore((s) => s.createConversation);
  const setConnectionStatus = useSessionStore((s) => s.setConnectionStatus);
  const addOutputAsset = useSessionStore((s) => s.addOutputAsset);
  const apiKey = useSessionStore((s) => s.apiKey);
  const baseUrl = useSessionStore((s) => s.baseUrl);
  const configLoaded = useSessionStore((s) => s.configLoaded);
  const configLoadError = useSessionStore((s) => s.configLoadError);
  const outputAssets = useSessionStore((s) => s.outputAssets);
  const hasApiConfig = Boolean(apiKey.trim() && baseUrl.trim());
  const assetsPreviewSeededRef = useRef(false);
  const appModeClass = mainMode === "capability" ? "app-layout--capability" : "app-layout--chat";
  const appMotionClass = `app-motion--${motionMode}`;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isMeta = e.metaKey || e.ctrlKey;
      if (!isMeta) return;

      if (e.key === "n" && !e.shiftKey && !e.altKey) {
        e.preventDefault();
        createConversation();
      } else if (e.key === "," && !e.shiftKey && !e.altKey) {
        e.preventDefault();
        setSettingsOpen(true);
      } else if (e.key === "b" && !e.shiftKey && !e.altKey) {
        e.preventDefault();
        toggleLeftPanel();
      } else if (e.key === "b" && e.shiftKey && !e.altKey) {
        e.preventDefault();
        toggleRightPanel();
      } else if (e.key === "/" && !e.shiftKey && !e.altKey) {
        e.preventDefault();
        const textarea = document.querySelector<HTMLTextAreaElement>(".input-bar-textarea");
        textarea?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [createConversation, setSettingsOpen, toggleLeftPanel, toggleRightPanel]);

  useEffect(() => {
    if (previewMode || !configLoaded || hasApiConfig) return;
    setSettingsTab("connection");
    setSettingsOpen(true);
  }, [configLoaded, hasApiConfig, previewMode, setSettingsOpen, setSettingsTab]);

  useEffect(() => {
    let cancelled = false;
    setConnectionStatus("connecting");
    checkCLIAvailable().then((available) => {
      if (!cancelled) setConnectionStatus(available ? "connected" : "disconnected");
    }).catch(() => {
      if (!cancelled) setConnectionStatus("error");
    });
    return () => {
      cancelled = true;
    };
  }, [setConnectionStatus]);

  useEffect(() => {
    if (!import.meta.env.DEV) return;
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const preview = params.get("mimodexPreview");
    if (preview === "coding" || preview === "web" || preview === "multimodal" || preview === "tts") {
      useUIStore.getState().openCapability(preview);
      useUIStore.getState().closeRightPanel();
    }
    if (preview === "launcher") {
      useUIStore.getState().setLauncherOpen(true);
      useUIStore.getState().closeRightPanel();
    }
    if (preview === "settings") {
      useUIStore.getState().setSettingsTab("connection");
      useUIStore.getState().setSettingsOpen(true);
    }
    if (preview === "motion") {
      useUIStore.getState().setSettingsTab("general");
      useUIStore.getState().setSettingsOpen(true);
    }
    if (preview === "diagnostics") {
      useUIStore.getState().setSettingsTab("diagnostics");
      useUIStore.getState().setSettingsOpen(true);
    }
    if (preview === "permissions-panel") {
      useUIStore.getState().openChat();
      useUIStore.getState().closeRightPanel();
    }
    if (preview === "assets") {
      useUIStore.getState().openChat();
      useUIStore.getState().setLauncherOpen(false);
      useUIStore.getState().setSettingsOpen(false);
      useUIStore.getState().openRightPanel("assets");
    }
    if (params.get("mimodexPreview") !== "assets") return;
    if (assetsPreviewSeededRef.current) return;
    if (outputAssets.length > 0) return;
    assetsPreviewSeededRef.current = true;

    const now = Date.now();
    addOutputAsset({
      id: "preview-asset-audio",
      type: "audio",
      title: "mimodex-tts.wav",
      createdAt: now - 12_000,
      source: "tts",
      url: getPreviewAudioDataUrl(),
      mimeType: "audio/wav",
      content: "语音合成完成。\n模型：mimo-v2.5-tts\n音色：mimo_default",
    });
    addOutputAsset({
      id: "preview-asset-text",
      type: "text",
      title: "web-search-summary.md",
      createdAt: now - 32_000,
      source: "web",
      content: "MiMo Web Search 已检索到 3 条可用来源，摘要已整理完成。",
      mimeType: "text/markdown",
    });
    addOutputAsset({
      id: "preview-asset-file",
      type: "file",
      title: "design-notes.txt",
      createdAt: now - 52_000,
      source: "code",
      url: "data:text/plain;base64,SGVsbG8sIE1pbW9kZXgu",
      content: "Hello, Mimodex.",
      mimeType: "text/plain",
    });
    useUIStore.getState().openRightPanel("assets");
  }, [addOutputAsset, outputAssets.length]);

  const openConnectionSettings = () => {
    setSettingsTab("connection");
    setSettingsOpen(true);
  };

  return (
    <div className={`app-layout ${appModeClass} ${appMotionClass}`}>
      <TitleBar />

      <div className="app-body">
        {/* ---- Left Panel (conversations, capabilities, context) ---- */}
        {!leftPanelCollapsed && <LeftPanel />}

        {configLoaded && !hasApiConfig && !previewMode ? (
          <main className="app-main">
            <div className="setup-gate">
              <Card color="app-blue" className="setup-gate-card">
                <div className="setup-gate-icons">
                  <Icon name="icon-miles" size={52} bounce />
                  <Icon name="icon-design" size={32} bounce />
                </div>
                <h1 className="setup-gate-title">连接 MiMo 后开始使用</h1>
                <p className="setup-gate-copy">
                  MiModex 需要你的 MiMo Base URL 和 API Key。配置会写入本机
                  <code> ~/.mimo/mimo.config.json</code>，不会硬编码到应用里。
                </p>
                {configLoadError && (
                  <p className="setup-gate-error">读取配置失败：{configLoadError}</p>
                )}
                <div className="setup-gate-actions">
                  <Button
                    type="primary"
                    icon={<Icon name="icon-helicopter" size={14} />}
                    onClick={openConnectionSettings}
                  >
                    配置连接
                  </Button>
                </div>
              </Card>
            </div>
            <div className="app-footer-decoration">
              <Footer type="sea" />
            </div>
          </main>
        ) : (
          <main className="app-main">
            {mainMode === "capability" ? (
              <CapabilityWorkspace />
            ) : (
              <>
                <ChatArea />
                <InputBar />
              </>
            )}
            <div className="app-footer-decoration">
              <Footer type="sea" />
            </div>
          </main>
        )}

        {rightPanelOpen && <button className="app-panel-scrim" type="button" aria-label="关闭右侧面板" onClick={toggleRightPanel} />}

        {/* ---- Right Panel (context, changes, tasks) ---- */}
        {rightPanelOpen && (
          <div className="app-right-panel-stage">
            <RightPanel />
          </div>
        )}
      </div>

      <AppLauncher />
      <StatusBar />
      <SettingsPage />
    </div>
  );
}

function getPreviewAudioDataUrl() {
  const base64SilenceWav =
    "UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAIA+AAACABAAZGF0YQAAAAA=";
  return `data:audio/wav;base64,${base64SilenceWav}`;
}
