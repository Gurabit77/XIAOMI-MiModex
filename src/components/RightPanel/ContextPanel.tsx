// ============================================================
// MiModex — ContextPanel (token usage, MIMO.md, memory, directories)
// ============================================================
import { useSessionStore } from "@/stores/sessionStore";
import { useUIStore } from "@/stores/uiStore";
import { useAppStore } from "@/stores/appStore";
import { Card, Button, Icon, Collapse } from "animal-island-ui";

export function ContextPanel() {
  const tokensUsed = useSessionStore((s) => s.tokensUsed);
  const tokensLimit = useSessionStore((s) => s.tokensLimit);
  const contextFiles = useSessionStore((s) => s.contextFiles);
  const openChat = useUIStore((s) => s.openChat);
  const setInputValue = useAppStore((s) => s.setInputValue);

  const tokenPercent = Math.round((tokensUsed / tokensLimit) * 100);
  const tokenDisplay = tokensUsed >= 1000
    ? `${(tokensUsed / 1000).toFixed(1)}k`
    : String(tokensUsed);
  const limitDisplay = tokensLimit >= 1000
    ? `${(tokensLimit / 1000).toFixed(0)}k`
    : String(tokensLimit);

  const typeLabels: Record<string, string> = {
    "claude-md": "MIMO.md",
    memory: "记忆",
    directory: "目录",
    rule: "规则",
  };

  const fileTypeCounts = contextFiles.reduce<Record<string, number>>((acc, file) => {
    acc[file.type] = (acc[file.type] ?? 0) + 1;
    return acc;
  }, {});

  const requestContextLoad = () => {
    setInputValue("请读取当前项目的 README、配置文件和关键目录，整理本轮任务需要的上下文，并指出还缺哪些信息。");
    openChat();
    setTimeout(() => {
      document.querySelector<HTMLTextAreaElement>(".input-bar-textarea")?.focus();
    }, 50);
  };

  return (
    <div className="context-panel">
      <div className="right-panel-hero right-panel-hero--context">
        <div className="right-panel-hero-icon">
          <Icon name="icon-map" size={20} />
        </div>
        <div className="right-panel-hero-copy">
          <span className="right-panel-kicker">上下文背包</span>
          <strong>项目记忆与规则</strong>
          <span>让 MiMo 知道当前项目、约束和本轮任务边界。</span>
        </div>
      </div>

      <Card color="default" className="context-token-card">
        <div className="context-token-header">
          <span className="context-token-title">Token 用量</span>
          <span className="context-token-value">
            {tokenDisplay} / {limitDisplay}
          </span>
        </div>
        <div className="context-token-bar">
          <div
            className="context-token-fill"
            style={{ width: `${Math.min(tokenPercent, 100)}%` }}
          />
        </div>
        <div className="context-token-percent">{tokenPercent}%</div>
      </Card>

      <div className="context-kind-grid">
        {(["claude-md", "memory", "directory", "rule"] as const).map((type) => (
          <div className="context-kind-card" key={type}>
            <span>{typeLabels[type]}</span>
            <strong>{fileTypeCounts[type] ?? 0}</strong>
          </div>
        ))}
      </div>

      <div className="context-files-header">
        <span className="context-files-title">上下文文件</span>
        <Button
          type="dashed"
          size="small"
          icon={<Icon name="icon-map" size={14} />}
          onClick={requestContextLoad}
        >
          让 MiMo 读取
        </Button>
      </div>

      <div className="context-files-list">
        {contextFiles.map((file, idx) => (
          <Card key={idx} color="default" className="context-file-card">
            <div className="context-file-header">
              <span className="context-file-type">
                {typeLabels[file.type] ?? file.type}
              </span>
              <span className="context-file-path">{file.path}</span>
            </div>
            {file.content && (
              <Collapse
                question="查看内容"
                answer={
                  <pre className="context-file-content">{file.content}</pre>
                }
              />
            )}
            {file.size && (
              <span className="context-file-size">{file.size} bytes</span>
            )}
          </Card>
        ))}
        {contextFiles.length === 0 && (
          <Card color="default" className="right-empty-card right-empty-card--green right-empty-card--action">
            <div className="right-empty-visual" aria-hidden="true">
              <Icon name="icon-map" size={28} />
            </div>
            <strong>上下文还没装载</strong>
            <span className="right-empty-copy">点击下方按钮会把“读取项目上下文”的任务放入输入框，用户可以确认后发送。</span>
            <div className="right-context-route">
              <span>README</span>
              <span>配置</span>
              <span>规则</span>
            </div>
            <div className="right-empty-actions">
              <Button
                type="primary"
                size="small"
                icon={<Icon name="icon-map" size={13} />}
                onClick={requestContextLoad}
              >
                准备读取上下文
              </Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
