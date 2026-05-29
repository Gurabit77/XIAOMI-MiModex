// ============================================================
// MiModex — TasksPanel (background tasks list)
// ============================================================
import { useSessionStore } from "@/stores/sessionStore";
import { useUIStore } from "@/stores/uiStore";
import { Button, Card, Icon } from "animal-island-ui";

export function TasksPanel() {
  const tasks = useSessionStore((s) => s.backgroundTasks);
  const openCapability = useUIStore((s) => s.openCapability);

  const statusLabels: Record<string, string> = {
    running: "运行中",
    completed: "已完成",
    failed: "失败",
    queued: "排队中",
  };

  const statusColors: Record<string, string> = {
    running: "var(--color-accent-teal)",
    completed: "var(--color-accent-green)",
    failed: "var(--color-accent-red)",
    queued: "var(--color-text-muted)",
  };

  const formatDuration = (task: { startedAt: number; completedAt?: number }) => {
    const end = task.completedAt ?? Date.now();
    const sec = Math.floor((end - task.startedAt) / 1000);
    if (sec < 60) return `${sec}s`;
    return `${Math.floor(sec / 60)}m ${sec % 60}s`;
  };

  const runningCount = tasks.filter((t) => t.status === "running").length;
  const queuedCount = tasks.filter((t) => t.status === "queued").length;
  const doneCount = tasks.filter((t) => t.status === "completed").length;
  const failedCount = tasks.filter((t) => t.status === "failed").length;

  return (
    <div className="tasks-panel">
      <div className="right-panel-hero right-panel-hero--tasks">
        <div className="right-panel-hero-icon">
          <Icon name="icon-diy" size={20} />
        </div>
        <div className="right-panel-hero-copy">
          <span className="right-panel-kicker">任务看板</span>
          <strong>{runningCount} 个运行中</strong>
          <span>命令、能力调用和长任务会展示排队、运行、成功或失败。</span>
        </div>
      </div>

      {tasks.length > 0 && (
        <>
          <div className="task-status-rail">
            <span className={runningCount > 0 ? "task-rail-dot task-rail-dot--active" : "task-rail-dot"} />
            <span className={queuedCount > 0 ? "task-rail-dot task-rail-dot--queued" : "task-rail-dot"} />
            <span className={doneCount > 0 ? "task-rail-dot task-rail-dot--done" : "task-rail-dot"} />
            <span className={failedCount > 0 ? "task-rail-dot task-rail-dot--failed" : "task-rail-dot"} />
          </div>

          <div className="right-stat-grid right-stat-grid--four">
            <div className="right-stat-card">
              <span>运行</span>
              <strong>{runningCount}</strong>
            </div>
            <div className="right-stat-card">
              <span>排队</span>
              <strong>{queuedCount}</strong>
            </div>
            <div className="right-stat-card">
              <span>完成</span>
              <strong>{doneCount}</strong>
            </div>
            <div className="right-stat-card">
              <span>失败</span>
              <strong>{failedCount}</strong>
            </div>
          </div>
        </>
      )}

      <div className="tasks-list">
        {tasks.map((task) => (
          <Card
            key={task.id}
            color="default"
            className={`task-card task-card--${task.status}`}
          >
            <div className="task-header">
              <span
                className="task-status-dot"
                style={{ background: statusColors[task.status] }}
              />
              <span className="task-title">{task.title}</span>
              <span className="task-type">{task.type}</span>
            </div>
            <div className="task-meta">
              <span
                className="task-status"
                style={{ color: statusColors[task.status] }}
              >
                {statusLabels[task.status]}
              </span>
              <span className="task-duration">{formatDuration(task)}</span>
            </div>
            {task.output && (
              <div className="task-output">{task.output}</div>
            )}
          </Card>
        ))}

        {tasks.length === 0 && (
          <Card color="default" className="right-empty-card right-empty-card--teal right-empty-card--action">
            <div className="right-empty-visual" aria-hidden="true">
              <Icon name="icon-diy" size={28} />
            </div>
            <strong>没有后台任务</strong>
            <span className="right-empty-copy">启动联网、多模态或语音任务后，这里会显示状态、耗时和输出摘要。</span>
            <div className="task-sample-steps" aria-hidden="true">
              <span>排队</span>
              <span>运行</span>
              <span>完成</span>
            </div>
            <div className="right-empty-actions">
              <Button
                type="primary"
                size="small"
                icon={<Icon name="icon-camera" size={13} />}
                onClick={() => openCapability("web")}
              >
                打开能力中心
              </Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
