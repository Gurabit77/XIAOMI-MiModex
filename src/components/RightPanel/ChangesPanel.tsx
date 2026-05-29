// ============================================================
// MiModex — ChangesPanel (file changes with diff)
// ============================================================
import { useSessionStore } from "@/stores/sessionStore";
import { useAppStore } from "@/stores/appStore";
import { useUIStore } from "@/stores/uiStore";
import { Button, Card, Collapse, CodeBlock, Icon } from "animal-island-ui";

export function ChangesPanel() {
  const fileChanges = useSessionStore((s) => s.fileChanges);
  const setInputValue = useAppStore((s) => s.setInputValue);
  const openChat = useUIStore((s) => s.openChat);

  const statusLabels: Record<string, string> = {
    added: "新增",
    modified: "修改",
    deleted: "删除",
  };

  const statusColors: Record<string, string> = {
    added: "var(--color-accent-green)",
    modified: "var(--color-accent-yellow-dark)",
    deleted: "var(--color-accent-red)",
  };

  const totalAdded = fileChanges.reduce((s, f) => s + f.linesAdded, 0);
  const totalRemoved = fileChanges.reduce((s, f) => s + f.linesRemoved, 0);

  const requestReview = () => {
    setInputValue("/review 请审查当前项目改动，重点关注 bug、回归风险、布局问题和缺失测试。");
    openChat();
    setTimeout(() => {
      document.querySelector<HTMLTextAreaElement>(".input-bar-textarea")?.focus();
    }, 50);
  };

  return (
    <div className="changes-panel">
      <div className="right-panel-hero right-panel-hero--changes">
        <div className="right-panel-hero-icon">
          <Icon name="icon-variant" size={20} />
        </div>
        <div className="right-panel-hero-copy">
          <span className="right-panel-kicker">变更台账</span>
          <strong>{fileChanges.length} 个文件变更</strong>
          <span>新增、修改、删除会按文件归档，便于审查和回滚前确认。</span>
        </div>
      </div>

      <div className="changes-summary">
        <div className="right-stat-card">
          <span>文件</span>
          <strong>{fileChanges.length}</strong>
        </div>
        <div className="right-stat-card right-stat-card--added">
          <span>新增行</span>
          <strong>+{totalAdded}</strong>
        </div>
        <div className="right-stat-card right-stat-card--removed">
          <span>删除行</span>
          <strong>-{totalRemoved}</strong>
        </div>
      </div>

      <div className="changes-list">
        {fileChanges.map((file, idx) => (
          <Card key={idx} color="default" className="change-card">
            <div className="change-header">
              <span
                className="change-status"
                style={{ color: statusColors[file.status] }}
              >
                {statusLabels[file.status]}
              </span>
              <span className="change-path">{file.path}</span>
            </div>
            <div className="change-lines">
              {file.linesAdded > 0 && (
                <span className="change-line-added">+{file.linesAdded}</span>
              )}
              {file.linesRemoved > 0 && (
                <span className="change-line-removed">-{file.linesRemoved}</span>
              )}
            </div>
            {file.diff && (
              <Collapse
                question="查看 Diff"
                answer={<CodeBlock code={file.diff} />}
              />
            )}
          </Card>
        ))}
        {fileChanges.length === 0 && (
          <Card color="default" className="right-empty-card right-empty-card--yellow right-empty-card--action">
            <div className="right-empty-visual" aria-hidden="true">
              <Icon name="icon-variant" size={28} />
            </div>
            <strong>还没有文件变更</strong>
            <span className="right-empty-copy">让 MiMo 完成代码修改后，这里会展示文件状态、行数变化和 Diff。</span>
            <div className="right-change-preview" aria-hidden="true">
              <span className="right-change-row right-change-row--add">+ 新增实现</span>
              <span className="right-change-row right-change-row--edit">~ 调整样式</span>
              <span className="right-change-row right-change-row--remove">- 移除旧逻辑</span>
            </div>
            <div className="right-empty-actions">
              <Button
                type="default"
                size="small"
                icon={<Icon name="icon-critterpedia" size={13} />}
                onClick={requestReview}
              >
                准备审查改动
              </Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
