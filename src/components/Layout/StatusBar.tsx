// ============================================================
// MiModex — StatusBar (bottom bar: model, tokens, status, time)
// ============================================================
import { useSessionStore } from "@/stores/sessionStore";
import { getMimoEngineMode, getRuntimeInfo } from "@/services/cli";
import "./StatusBar.css";

export function StatusBar() {
  const currentModel = useSessionStore((s) => s.currentModel);
  const tokensUsed = useSessionStore((s) => s.tokensUsed);
  const tokensLimit = useSessionStore((s) => s.tokensLimit);
  const connectionStatus = useSessionStore((s) => s.connectionStatus);
  const sessionId = useSessionStore((s) => s.sessionId);
  const effort = useSessionStore((s) => s.effort);
  const runtime = getRuntimeInfo();
  const engineMode = getMimoEngineMode();

  const tokenPercent = Math.round((tokensUsed / tokensLimit) * 100);
  const tokenDisplay = tokensUsed >= 1000
    ? `${(tokensUsed / 1000).toFixed(1)}k`
    : String(tokensUsed);
  const limitDisplay = tokensLimit >= 1000
    ? `${(tokensLimit / 1000).toFixed(0)}k`
    : String(tokensLimit);

  const statusMap: Record<string, { label: string; className: string }> = {
    connected: { label: "已连接", className: "status-dot--connected" },
    connecting: { label: "连接中", className: "status-dot--connecting" },
    disconnected: { label: "已断开", className: "status-dot--disconnected" },
    error: { label: "错误", className: "status-dot--error" },
  };

  const status = statusMap[connectionStatus] ?? statusMap.disconnected;

  const effortLabel: Record<string, string> = {
    low: "快速", medium: "标准", high: "精准", max: "极致"
  };

  return (
    <footer className="statusbar">
      {/* ---- Left: model + effort ---- */}
      <div className="statusbar-section statusbar-left">
        <span className="statusbar-brand">MiMo</span>
        <span className="statusbar-divider">·</span>
        <span className={`statusbar-runtime statusbar-runtime--${runtime.mode}`}>
          {runtime.isTauri ? "桌面真实模式" : "浏览器预览模式"}
        </span>
        <span className="statusbar-divider">·</span>
        <span className={`statusbar-engine statusbar-engine--${engineMode}`}>
          {engineModeLabel[engineMode]}
        </span>
        <span className="statusbar-divider">·</span>
        <span className="statusbar-model">{currentModel}</span>
        <span className="statusbar-divider">·</span>
        <span className="statusbar-effort">{effortLabel[effort] ?? effort}</span>
      </div>

      {/* ---- Center: tokens + connection ---- */}
      <div className="statusbar-section statusbar-center">
        <div className="statusbar-tokens">
          <div className="statusbar-token-bar">
            <div
              className="statusbar-token-fill"
              style={{ width: `${Math.min(tokenPercent, 100)}%` }}
            />
          </div>
          <span className="statusbar-token-text">
            {tokenDisplay} / {limitDisplay} tokens
          </span>
        </div>
        <span className="statusbar-divider">·</span>
        <span className={`status-dot ${status.className}`} />
        <span className="statusbar-status-text">{status.label}</span>
      </div>

      {/* ---- Right: session id ---- */}
      {sessionId && (
        <div className="statusbar-section statusbar-right">
          <span className="statusbar-session">{sessionId}</span>
        </div>
      )}
    </footer>
  );
}

const engineModeLabel: Record<string, string> = {
  unknown: "引擎检测中",
  embedded: "内置 MiMo Code",
  system: "系统 mimo CLI",
  unavailable: "引擎不可用",
};
