// ============================================================
// MiModex — ToolCallBlock (Collapse-based tool call display)
// ============================================================
import type { ToolCall } from "@/types";
import { Collapse, CodeBlock, Icon } from "animal-island-ui";

interface ToolCallBlockProps {
  toolCall: ToolCall;
}

export function ToolCallBlock({ toolCall }: ToolCallBlockProps) {
  const statusIcons: Record<string, React.ReactNode> = {
    pending: <Icon name="icon-map" size={14} />,
    running: (
      <span className="tool-call-island-loader" aria-hidden="true">
        <span className="tool-call-loader-leaf" />
        <span className="tool-call-loader-wave" />
      </span>
    ),
    done: <Icon name="icon-variant" size={14} />,
    error: <Icon name="icon-diy" size={14} />,
  };

  const statusLabels: Record<string, string> = {
    pending: "等待中",
    running: "执行中",
    done: "完成",
    error: "错误",
  };

  const durationStr = toolCall.duration
    ? toolCall.duration >= 1000
      ? `${(toolCall.duration / 1000).toFixed(1)}s`
      : `${toolCall.duration}ms`
    : null;
  const summary = summarizeToolInput(toolCall);

  const question = (
    <span className="tool-call-question">
      {statusIcons[toolCall.status]}
      <span className="tool-call-question-copy">
        <span className="tool-call-name">{toolCall.name}</span>
        <span className="tool-call-summary">{summary}</span>
      </span>
      <span className={`tool-call-status tool-call-status--${toolCall.status}`}>
        {statusLabels[toolCall.status]}
      </span>
      {durationStr && (
        <span className="tool-call-duration">{durationStr}</span>
      )}
    </span>
  );

  const inputStr = JSON.stringify(toolCall.input, null, 2);
  const answer = (
    <div className="tool-call-detail">
      <div className="tool-call-section">
        <div className="tool-call-section-label">输入</div>
        <CodeBlock code={inputStr} />
      </div>
      {toolCall.output && (
        <div className="tool-call-section">
          <div className="tool-call-section-label">输出</div>
          <CodeBlock code={toolCall.output} />
        </div>
      )}
    </div>
  );

  return (
    <div className={`tool-call-block tool-call-block--${toolCall.status}`}>
      <div className="tool-call-rail" aria-hidden="true">
        <span />
      </div>
      <Collapse question={question} answer={answer} />
    </div>
  );
}

function summarizeToolInput(toolCall: ToolCall): string {
  const input = toolCall.input ?? {};
  if (typeof input.command === "string" && input.command.trim()) {
    return input.command.trim();
  }
  const filePath = typeof input.file_path === "string"
    ? input.file_path
    : typeof input.path === "string" ? input.path : "";
  if (filePath) {
    return filePath;
  }
  const keys = Object.keys(input);
  if (keys.length > 0) {
    return `${keys.slice(0, 3).join(" · ")}${keys.length > 3 ? "…" : ""}`;
  }
  return "等待工具输入";
}
