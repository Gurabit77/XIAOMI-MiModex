// ============================================================
// MiModex — MessageBubble Component (Card-based)
// ============================================================
import type { Message, RuntimePermissionRequest, RuntimePermissionStatus } from "@/types";
import { Icon, Typewriter, CodeBlock, Card, Button } from "animal-island-ui";
import type { IconName } from "animal-island-ui";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { useAppStore } from "@/stores/appStore";
import { respondToPermissionRequest } from "@/services/cli";
import { GeneratedAudioCard } from "@/components/Audio/GeneratedAudioCard";
import { IslandLoader } from "@/components/Common/IslandLoader";
import { ToolCallBlock } from "./ToolCallBlock";
import { ThinkingBlock } from "./ThinkingBlock";
import "./MessageBubble.css";

interface MessageBubbleProps {
  message: Message;
}

function formatTimestamp(ts: number): string {
  return new Date(ts).toLocaleTimeString("zh-CN", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === "user";
  const activeConversationId = useAppStore((s) => s.activeConversationId);
  const updateMessage = useAppStore((s) => s.updateMessage);
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "failed">("idle");
  const hasPendingPermission = message.permissionRequests?.some(
    (request) => request.status === "pending" || request.status === "error",
  ) ?? false;

  const updatePermissionRequest = (
    requestId: string,
    updates: Partial<RuntimePermissionRequest>,
  ) => {
    if (!activeConversationId) return;
    const next = (message.permissionRequests ?? []).map((request) =>
      request.requestId === requestId ? { ...request, ...updates } : request,
    );
    updateMessage(activeConversationId, message.id, { permissionRequests: next });
  };

  const handlePermissionDecision = async (
    request: RuntimePermissionRequest,
    behavior: "allow" | "deny",
    remember = false,
  ) => {
    updatePermissionRequest(request.requestId, {
      status: behavior === "allow" ? "allowing" : "denying",
    });
    try {
      await respondToPermissionRequest(request, behavior, { remember });
      updatePermissionRequest(request.requestId, {
        status: behavior === "allow" ? "allowed" : "denied",
        resolvedAt: Date.now(),
      });
    } catch (error) {
      updatePermissionRequest(request.requestId, {
        status: "error",
        error: error instanceof Error ? error.message : String(error),
        resolvedAt: Date.now(),
      });
    }
  };

  const copyMessage = async () => {
    const text = buildCopyText(message);
    if (!text.trim()) return;
    const ok = await copyTextToClipboard(text);
    if (ok) {
      setCopyStatus("copied");
      window.setTimeout(() => setCopyStatus("idle"), 1400);
    } else {
      setCopyStatus("failed");
      window.setTimeout(() => setCopyStatus("idle"), 1800);
    }
  };

  return (
    <div className={`message-row ${message.role}`}>
      {!isUser && (
        <div className="message-avatar assistant">
          <span className="message-avatar-island" aria-hidden="true" />
          <span className="message-avatar-wave message-avatar-wave--one" aria-hidden="true" />
          <span className="message-avatar-wave message-avatar-wave--two" aria-hidden="true" />
          <Icon name="icon-miles" size={22} bounce />
        </div>
      )}

      <div className="message-bubble">
        <Card
          color={isUser ? "app-blue" : "default"}
          className={`message-card message-card--${message.role}`}
        >
          {!isUser && shouldShowFlowStatus(message) && (
            <MessageFlowStatus message={message} />
          )}

          {message.permissionRequests && message.permissionRequests.length > 0 && (
            <div className="message-permission-requests">
              {message.permissionRequests.map((request) => (
                <RuntimePermissionCard
                  key={request.requestId}
                  request={request}
                  onAllow={() => void handlePermissionDecision(request, "allow")}
                  onRemember={() => void handlePermissionDecision(request, "allow", true)}
                  onDeny={() => void handlePermissionDecision(request, "deny")}
                />
              ))}
            </div>
          )}

          {/* Thinking block */}
          {message.thinking && <ThinkingBlock thinking={message.thinking} />}

          {/* Tool calls */}
          {message.toolCalls && message.toolCalls.length > 0 && (
            <div className="message-tool-calls">
              {message.toolCalls.map((tc) => (
                <ToolCallBlock key={tc.id} toolCall={tc} />
              ))}
            </div>
          )}

          {/* Message content */}
          <div className="message-bubble-content">
            {isUser ? (
              <span>{message.content}</span>
            ) : (
              <div className="message-markdown">
                {message.streaming ? (
                  message.content ? (
                    <>
                      <MarkdownContent content={message.content} />
                      <span className="streaming-cursor" />
                      <StreamingActivity />
                    </>
                  ) : hasPendingPermission ? null : (
                    <IslandThinkingIndicator message={message} />
                  )
                ) : message.content ? (
                  <Typewriter speed={12} autoPlay>
                    <MarkdownContent content={message.content} />
                  </Typewriter>
                ) : null}
              </div>
            )}
          </div>

          {message.audioUrl && (
            <GeneratedAudioCard
              compact
              className="message-generated-audio"
              url={message.audioUrl}
              fileName={message.audioFileName ?? "mimodex-audio.wav"}
              mimeType={message.audioMimeType}
            />
          )}

          {!isUser && !message.streaming && (
            <MessageCompletionSummary message={message} />
          )}

          <div className="message-footer">
            <div className="message-timestamp">
              {formatTimestamp(message.timestamp)}
            </div>
            <div className="message-actions">
              <button
                type="button"
                className={`message-action message-action--${copyStatus}`}
                onClick={() => void copyMessage()}
                disabled={!buildCopyText(message).trim()}
                title={copyStatus === "failed" ? "当前环境限制了剪贴板，请稍后重试" : "复制消息"}
              >
                <Icon name="icon-diy" size={13} />
                <span>{copyStatus === "copied" ? "已复制" : copyStatus === "failed" ? "复制失败" : "复制"}</span>
              </button>
            </div>
          </div>
        </Card>
      </div>

      {isUser && (
        <div className="message-avatar user">
          <span className="message-avatar-island" aria-hidden="true" />
          <span className="message-avatar-wave message-avatar-wave--one" aria-hidden="true" />
          <span className="message-avatar-wave message-avatar-wave--two" aria-hidden="true" />
          <Icon name="icon-variant" size={22} />
        </div>
      )}
    </div>
  );
}

function buildCopyText(message: Message): string {
  const parts = [message.content.trim()];
  if (message.audioUrl) {
    parts.push(`音频文件：${message.audioFileName ?? "mimodex-audio.wav"}`);
  }
  if (message.toolCalls?.length) {
    parts.push(`工具调用：${message.toolCalls.map((tool) => `${tool.name}(${tool.status})`).join(", ")}`);
  }
  return parts.filter(Boolean).join("\n\n");
}

async function copyTextToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // Fall through to the selection-based fallback below.
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "true");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  textarea.style.top = "0";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  try {
    return document.execCommand("copy");
  } catch {
    return false;
  } finally {
    textarea.remove();
  }
}

function MessageCompletionSummary({ message }: { message: Message }) {
  const tools = message.toolCalls ?? [];
  const permissions = message.permissionRequests ?? [];
  const failedTools = tools.filter((tool) => tool.status === "error").length;
  const deniedPermissions = permissions.filter((request) => request.status === "denied" || request.status === "cancelled").length;
  const hasAudio = Boolean(message.audioUrl);
  const hasSummary = tools.length > 0 || permissions.length > 0 || hasAudio;

  if (!hasSummary) return null;

  const tone = failedTools > 0 || deniedPermissions > 0 ? "warning" : "done";

  return (
    <div className={`message-completion message-completion--${tone}`}>
      <span className="message-completion-icon" aria-hidden="true">
        <Icon name={tone === "done" ? "icon-variant" : "icon-diy"} size={14} />
      </span>
      <div className="message-completion-copy">
        <strong>{tone === "done" ? "结果已归档" : "结果需要留意"}</strong>
        <span>
          {tools.length > 0 && `工具 ${tools.length} 个`}
          {permissions.length > 0 && `${tools.length > 0 ? " · " : ""}授权 ${permissions.length} 次`}
          {hasAudio && `${tools.length > 0 || permissions.length > 0 ? " · " : ""}音频已生成`}
          {failedTools > 0 && ` · ${failedTools} 个工具失败`}
          {deniedPermissions > 0 && ` · ${deniedPermissions} 次授权被拒绝`}
        </span>
      </div>
    </div>
  );
}

function RuntimePermissionCard({
  request,
  onAllow,
  onRemember,
  onDeny,
}: {
  request: RuntimePermissionRequest;
  onAllow: () => void;
  onRemember: () => void;
  onDeny: () => void;
}) {
  const status = getPermissionStatusCopy(request.status);
  const isPending = request.status === "pending" || request.status === "error";
  const isBusy = request.status === "allowing" || request.status === "denying";
  const summary = request.actionDescription || request.description || getToolSummary(request);

  return (
    <div className={`runtime-permission-card runtime-permission-card--${request.status}`}>
      <div className="runtime-permission-scene" aria-hidden="true">
        <span className="runtime-permission-sun" />
        <span className="runtime-permission-path" />
        <span className="runtime-permission-house" />
        <span className="runtime-permission-gate runtime-permission-gate--left" />
        <span className="runtime-permission-gate runtime-permission-gate--right" />
        <span className="runtime-permission-leaf runtime-permission-leaf--one" />
        <span className="runtime-permission-leaf runtime-permission-leaf--two" />
      </div>
      <div className="runtime-permission-main">
        <div className="runtime-permission-head">
          <span className="runtime-permission-kicker">需要授权</span>
          <span className={`runtime-permission-status runtime-permission-status--${request.status}`}>
            {status}
          </span>
        </div>
        <div className="runtime-permission-title">
          {request.title || request.displayName || request.toolName}
        </div>
        <div className="runtime-permission-summary">{summary}</div>
        <div className="runtime-permission-actions runtime-permission-actions--primary">
          <Button type="primary" size="small" onClick={onAllow} disabled={!isPending || isBusy}>
            仅本次允许
          </Button>
          <Button type="default" size="small" onClick={onRemember} disabled={!isPending || isBusy}>
            本会话信任
          </Button>
          <Button type="text" size="small" onClick={onDeny} disabled={!isPending || isBusy}>
            拒绝
          </Button>
        </div>
        <div className="runtime-permission-impact">
          <Icon name="icon-map" size={13} />
          <span>
            {request.status === "pending"
              ? "选择后会继续；本会话信任会记住这一类授权。"
              : request.status === "allowed"
                ? "已放行，会继续执行。"
                : request.status === "denied"
                  ? "已拒绝，本次调用不会继续。"
                  : "授权状态同步中。"}
          </span>
        </div>
        {request.blockedPath && (
          <div className="runtime-permission-pathline">{request.blockedPath}</div>
        )}
        {request.error && (
          <div className="runtime-permission-error">{request.error}</div>
        )}
        <details className="runtime-permission-details">
          <summary>查看工具输入</summary>
          <pre>{JSON.stringify(request.input, null, 2)}</pre>
        </details>
      </div>
    </div>
  );
}

function getPermissionStatusCopy(status: RuntimePermissionStatus): string {
  const labels: Record<RuntimePermissionStatus, string> = {
    pending: "等待选择",
    allowing: "正在允许",
    allowed: "已允许",
    denying: "正在拒绝",
    denied: "已拒绝",
    cancelled: "已取消",
    error: "写入失败",
  };
  return labels[status];
}

function getToolSummary(request: RuntimePermissionRequest): string {
  if (request.toolName.toLowerCase().includes("bash")) {
    const command = typeof request.input.command === "string" ? request.input.command : "";
    return command ? `即将运行命令：${command}` : "MiMo Code 想运行一条终端命令。";
  }
  if (/edit|write/i.test(request.toolName)) {
    const filePath = typeof request.input.file_path === "string"
      ? request.input.file_path
      : typeof request.input.path === "string" ? request.input.path : "";
    return filePath ? `即将修改文件：${filePath}` : "MiMo Code 想修改文件内容。";
  }
  return "MiMo Code 想使用这个工具继续完成任务。";
}

type FlowStepState = "done" | "active" | "waiting" | "blocked" | "error";

interface FlowStep {
  key: string;
  label: string;
  state: FlowStepState;
}

function shouldShowFlowStatus(message: Message): boolean {
  return Boolean(
    message.streaming ||
    message.thinking?.trim() ||
    message.toolCalls?.length ||
    message.permissionRequests?.length,
  );
}

function buildFlowSteps(message: Message): FlowStep[] {
  const hasContent = message.content.trim().length > 0;
  const hasThinking = Boolean(message.thinking?.trim());
  const tools = message.toolCalls ?? [];
  const permissions = message.permissionRequests ?? [];
  const hasTools = tools.length > 0;
  const runningTool = tools.some((tool) => tool.status === "running" || tool.status === "pending");
  const toolError = tools.some((tool) => tool.status === "error");
  const pendingPermission = permissions.some((request) => request.status === "pending" || request.status === "error");
  const deniedPermission = permissions.some((request) => request.status === "denied" || request.status === "cancelled");
  const resolvedPermission = permissions.length > 0 && permissions.every((request) =>
    request.status === "allowed" || request.status === "denied" || request.status === "cancelled",
  );

  return [
    {
      key: "prepare",
      label: "理解需求",
      state: hasThinking || hasTools || permissions.length > 0 || hasContent
        ? "done"
        : message.streaming ? "active" : "done",
    },
    {
      key: "think",
      label: "整理方案",
      state: hasThinking
        ? message.streaming && !hasTools && !pendingPermission && !hasContent ? "active" : "done"
        : message.streaming && !hasTools && !pendingPermission && !hasContent ? "waiting" : "done",
    },
    {
      key: "tools",
      label: "执行工具",
      state: toolError
        ? "error"
        : runningTool
          ? "active"
          : hasTools ? "done" : "waiting",
    },
    {
      key: "permission",
      label: "确认权限",
      state: deniedPermission
        ? "blocked"
        : pendingPermission
          ? "active"
          : resolvedPermission ? "done" : "waiting",
    },
    {
      key: "answer",
      label: "输出结果",
      state: hasContent
        ? message.streaming ? "active" : "done"
        : message.streaming && !pendingPermission ? "waiting" : "waiting",
    },
  ];
}

function getFlowSummary(message: Message): { title: string; detail: string; tone: string } {
  const pendingPermission = message.permissionRequests?.find((request) => request.status === "pending" || request.status === "error");
  if (pendingPermission) {
    return {
      title: "等待你确认权限",
      detail: pendingPermission.title || pendingPermission.displayName || pendingPermission.toolName,
      tone: "permission",
    };
  }

  const runningTool = message.toolCalls?.find((tool) => tool.status === "running" || tool.status === "pending");
  if (runningTool) {
    return {
      title: "正在执行工具",
      detail: runningTool.name,
      tone: "tool",
    };
  }

  if (message.streaming && message.content.trim()) {
    return {
      title: "正在组织回复",
      detail: "内容会持续追加到当前消息",
      tone: "answer",
    };
  }

  if (message.streaming) {
    const stage = getStreamingStage(message);
    return {
      title: stage.title,
      detail: stage.detail,
      tone: stage.phase,
    };
  }

  return {
    title: "本次回复已完成",
    detail: "结果已归档在这条消息里",
    tone: "done",
  };
}

function MessageFlowStatus({ message }: { message: Message }) {
  const summary = getFlowSummary(message);
  const steps = buildFlowSteps(message);
  const completed = steps.filter((step) => step.state === "done").length;
  const flowIcon = getFlowIcon(summary.tone);

  return (
    <div className={`message-flow-status message-flow-status--${summary.tone}`} role="status" aria-live="polite">
      <div className="message-flow-head">
        <span className="message-flow-orb" aria-hidden="true">
          <span className="message-flow-orb-island" />
          <span className="message-flow-orb-wave message-flow-orb-wave--one" />
          <span className="message-flow-orb-wave message-flow-orb-wave--two" />
          <span className="message-flow-orb-signal" />
          <Icon name={flowIcon} size={18} bounce={message.streaming} />
        </span>
        <div className="message-flow-copy">
          <span className="message-flow-kicker">MiMo Code 工作流</span>
          <strong>{summary.title}</strong>
          <span>{summary.detail}</span>
        </div>
        <span className="message-flow-count">{completed}/{steps.length}</span>
      </div>
      <div className="message-flow-steps" aria-label="执行进度">
        {steps.map((step) => (
          <span key={step.key} className={`message-flow-step message-flow-step--${step.state}`}>
            <span className="message-flow-step-dot" />
            <span className="message-flow-step-label">{step.label}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function getFlowIcon(tone: string): IconName {
  if (tone === "permission") return "icon-map";
  if (tone === "tool") return "icon-diy";
  if (tone === "answer") return "icon-chat";
  if (tone === "thinking") return "icon-critterpedia";
  return "icon-miles";
}

// ---- Safe Markdown Renderer using ReactMarkdown and Animal CodeBlock ----
function MarkdownContent({ content }: { content: string }) {
  if (!content) {
    return null;
  }

  return (
    <ReactMarkdown
      components={{
        code({ className, children, ...props }) {
          const inline = !className;
          const code = String(children).replace(/\n$/, "");
          if (inline) {
            return <code {...props}>{children}</code>;
          }
          return <CodeBlock code={code} />;
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

function getStreamingStage(message: Message): { title: string; detail: string; phase: string } {
  const runningTool = message.toolCalls?.find((tool) => tool.status === "running");
  if (runningTool) {
    return {
      title: "正在调用工具",
      detail: runningTool.name,
      phase: "tool",
    };
  }
  if (message.thinking?.trim()) {
    return {
      title: "正在深度思考",
      detail: "整理推理线索和上下文",
      phase: "thinking",
    };
  }
  return {
    title: "正在理解需求",
    detail: "读取对话、权限和本次上下文",
    phase: "prepare",
  };
}

function IslandThinkingIndicator({ message }: { message: Message }) {
  const stage = getStreamingStage(message);
  const steps = buildFlowSteps(message);
  const activeIndex = Math.max(0, steps.findIndex((step) => step.state === "active"));
  const activeStep = steps[activeIndex] ?? steps[0];
  const stageIcon = getFlowIcon(stage.phase);

  return (
    <div className={`island-thinking-panel island-thinking-panel--${stage.phase}`} role="status" aria-live="polite">
      <div className="island-thinking-loading" aria-hidden="true">
        <IslandLoader active icon={stageIcon} size="lg" />
      </div>
      <div className="island-thinking-caption">
        <span className="island-thinking-kicker">MiMo Code · {activeStep.label}</span>
        <span className="island-thinking-copy">{stage.title}</span>
        <span className="island-thinking-detail">{stage.detail}</span>
        <span className="island-thinking-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="island-thinking-route" aria-hidden="true">
          {steps.map((step) => (
            <i key={step.key} className={`island-thinking-route-dot island-thinking-route-dot--${step.state}`} />
          ))}
        </span>
        <span className="island-thinking-stripe" aria-hidden="true" />
      </div>
    </div>
  );
}

function StreamingActivity() {
  return (
    <div className="message-streaming-activity" aria-hidden="true">
      <span />
      <span />
      <span />
      <em>正在回复</em>
    </div>
  );
}

// ---- Streaming placeholder ----
export function StreamingIndicator() {
  const placeholder: Message = {
    id: "streaming-placeholder",
    role: "assistant",
    content: "",
    timestamp: Date.now(),
    streaming: true,
  };

  return (
    <div className="message-row assistant">
      <div className="message-avatar assistant">
        <span className="message-avatar-island" aria-hidden="true" />
        <span className="message-avatar-wave message-avatar-wave--one" aria-hidden="true" />
        <span className="message-avatar-wave message-avatar-wave--two" aria-hidden="true" />
        <Icon name="icon-miles" size={22} bounce />
      </div>
      <div className="message-bubble">
        <Card color="default" className="message-card message-card--assistant">
          <div className="message-bubble-content">
            <IslandThinkingIndicator message={placeholder} />
          </div>
        </Card>
      </div>
    </div>
  );
}
