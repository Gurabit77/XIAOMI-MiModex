// ============================================================
// MiModex — ChatArea Component
// ============================================================
import { useEffect, useRef, useState, useCallback } from "react";
import { useAppStore } from "@/stores/appStore";
import { Button, Icon, Divider } from "animal-island-ui";
import type { Message } from "@/types";
import { MessageBubble } from "./MessageBubble";
import { WelcomeScreen } from "@/components/WelcomeScreen/WelcomeScreen";
import "./ChatArea.css";

export function ChatArea() {
  const conversation = useAppStore((s) => s.getActiveConversation());
  const showWelcome = useAppStore((s) => s.showWelcome);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const followBottomRef = useRef(true);
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  const previewMessages = getDevPreviewMessages();
  const messages = previewMessages ?? conversation?.messages ?? [];
  const isShortConversation = messages.length > 0 && messages.length <= 2;

  const lastMessage = messages[messages.length - 1];
  const pendingPermissionSignature = messages
    .flatMap((message) =>
      (message.permissionRequests ?? [])
        .filter((request) => request.status === "pending" || request.status === "error")
        .map((request) => `${message.id}:${request.requestId}:${request.status}`),
    )
    .join("|");

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const isOverflowing = el.scrollHeight > el.clientHeight + 12;

    if (isShortConversation && !isOverflowing) {
      el.scrollTop = 0;
      followBottomRef.current = true;
      setShowScrollBtn(false);
      return;
    }

    if (!isOverflowing) {
      el.scrollTop = 0;
      followBottomRef.current = true;
      setShowScrollBtn(false);
      return;
    }

    if (followBottomRef.current || isShortConversation) {
      el.scrollTo({
        top: el.scrollHeight,
        behavior: isShortConversation ? "auto" : "smooth",
      });
      setShowScrollBtn(false);
    }
  }, [messages.length, lastMessage?.content, lastMessage?.streaming]);

  useEffect(() => {
    if (!pendingPermissionSignature) return;
    const el = scrollContainerRef.current;
    if (!el) return;

    let frame = 0;
    frame = window.requestAnimationFrame(() => {
      const card = el.querySelector<HTMLElement>(
        ".runtime-permission-card--pending, .runtime-permission-card--error",
      );
      if (!card) return;

      const targetTop = Math.max(
        0,
        card.offsetTop - Math.max(24, Math.round((el.clientHeight - card.offsetHeight) / 2)),
      );
      followBottomRef.current = false;
      el.scrollTo({
        top: targetTop,
        behavior: isShortConversation ? "auto" : "smooth",
      });
      setShowScrollBtn(false);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [isShortConversation, pendingPermissionSignature]);

  const handleScroll = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const distanceFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
    followBottomRef.current = distanceFromBottom < 120;
    setShowScrollBtn(distanceFromBottom > 200);
  }, []);

  const scrollToBottom = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    followBottomRef.current = true;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  };

  if (!previewMessages && (showWelcome || !conversation)) {
    return <WelcomeScreen />;
  }

  return (
    <div className="chat-area">
      <div
        className={`chat-messages auto-hide-scrollbar${isShortConversation ? " chat-messages--short" : ""}`}
        ref={scrollContainerRef}
        onScroll={handleScroll}
      >
        <div className={`chat-messages-inner${isShortConversation ? " chat-messages-inner--short" : ""}`}>
          {messages.length === 0 && (
            <div className="chat-new-conversation">
              <div className="chat-new-icons">
                <Icon name="icon-miles"  size={52} bounce />
                <Icon name="icon-chat"   size={34} bounce />
              </div>
              <p className="chat-new-hint">新对话已创建，输入你的问题开始吧</p>
              <Divider type="wave-yellow" />
            </div>
          )}
          {messages.map((msg) => (
            <MessageBubble key={msg.id} message={msg} />
          ))}
        </div>
      </div>

      {showScrollBtn && (
        <div className="chat-scroll-bottom-wrap">
          <Button
            type="default"
            size="small"
            icon={<Icon name="icon-helicopter" size={14} />}
            onClick={scrollToBottom}
            title="回到最新消息"
          >
            <span className="chat-scroll-bottom-label">最新消息</span>
          </Button>
        </div>
      )}
    </div>
  );
}

function getDevPreviewMessages(): Message[] | null {
  if (!import.meta.env.DEV || typeof window === "undefined") return null;
  const params = new URLSearchParams(window.location.search);
  const preview = params.get("mimodexPreview");
  if (preview === "permission") {
    return [
      {
        id: "preview-user-permission",
        role: "user" as const,
        content: "请检查项目并修复明显的排版问题",
        timestamp: Date.now() - 5000,
      },
      {
        id: "preview-assistant-permission",
        role: "assistant" as const,
        content: "",
        timestamp: Date.now(),
        streaming: true,
        thinking: "需要先验证构建状态，再根据结果决定是否继续修改界面样式。",
        toolCalls: [
          {
            id: "toolu_preview_scan",
            name: "Read",
            input: { file_path: "src/components/ChatArea/MessageBubble.tsx" },
            status: "done",
            duration: 420,
            output: "已读取 MessageBubble 组件。",
          },
          {
            id: "toolu_preview",
            name: "Bash",
            input: { command: "npm run build", description: "验证前端构建" },
            status: "pending",
          },
        ],
        permissionRequests: [
          {
            id: "preview-permission",
            requestId: "preview-permission",
            toolUseId: "toolu_preview",
            toolName: "Bash",
            title: "运行构建检查",
            actionDescription: "即将运行命令：npm run build",
            input: { command: "npm run build", description: "验证前端构建" },
            permissionSuggestions: [
              {
                type: "addRules",
                rules: [{ toolName: "Bash", ruleContent: "npm run build" }],
                behavior: "allow",
                destination: "session",
              },
            ],
            status: "pending" as const,
            createdAt: Date.now(),
          },
        ],
      },
    ];
  }
  if (preview === "audio") {
    return [
      {
        id: "preview-audio-user",
        role: "user" as const,
        content: "把这句话合成为一段语音：MiModex 语音播放测试。",
        timestamp: Date.now() - 4000,
      },
      {
        id: "preview-audio-assistant",
        role: "assistant" as const,
        content: "语音合成完成。\n\n模型：mimo-v2.5-tts\n音色：mimo_default\n音频格式：audio/wav",
        timestamp: Date.now(),
        audioUrl: getPreviewAudioDataUrl(),
        audioFileName: "mimodex-tts.wav",
        audioMimeType: "audio/wav",
      },
    ];
  }
  if (preview === "media") {
    return [
      {
        id: "preview-media-user",
        role: "user" as const,
        content: "请基于这个附件分析界面问题。",
        timestamp: Date.now() - 4000,
      },
    ];
  }
  if (preview === "complete") {
    return [
      {
        id: "preview-complete-user",
        role: "user" as const,
        content: "请修复输入法回车误发送，并说明验证结果",
        timestamp: Date.now() - 7000,
      },
      {
        id: "preview-complete-assistant",
        role: "assistant" as const,
        content: "已修复输入法确认时误触发送的问题。\n\n- 输入法组合期间按 Enter 只确认候选词，不会发送消息。\n- 组合刚结束后的短时间内也会被保护。\n- 已补充提示文案，让用户知道输入法确认不会发送。",
        timestamp: Date.now() - 1000,
        thinking: "问题集中在 composition 事件和 Enter 快捷键冲突，需要在发送逻辑前加保护。",
        toolCalls: [
          {
            id: "toolu_complete_edit",
            name: "Edit",
            input: { file_path: "src/components/InputBar/InputBar.tsx", description: "增加 IME 组合态保护" },
            status: "done",
            duration: 860,
            output: "已更新 handleKeyDown 和 composition 事件处理。",
          },
          {
            id: "toolu_complete_build",
            name: "Bash",
            input: { command: "npm run build" },
            status: "done",
            duration: 4200,
            output: "构建通过。",
          },
        ],
        permissionRequests: [
          {
            id: "preview-complete-permission",
            requestId: "preview-complete-permission",
            toolUseId: "toolu_complete_build",
            toolName: "Bash",
            title: "运行构建检查",
            actionDescription: "运行 npm run build 验证改动",
            input: { command: "npm run build" },
            status: "allowed" as const,
            createdAt: Date.now() - 5000,
            resolvedAt: Date.now() - 4500,
          },
        ],
      },
    ];
  }
  if (preview !== "waiting") return null;
  return [
    {
      id: "preview-user",
      role: "user" as const,
      content: "请简单介绍一下 MiModex 当前能做什么",
      timestamp: Date.now() - 4000,
    },
    {
      id: "preview-assistant",
      role: "assistant" as const,
      content: "",
      timestamp: Date.now(),
      streaming: true,
    },
  ];
}

function getPreviewAudioDataUrl() {
  const base64SilenceWav =
    "UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAIA+AAACABAAZGF0YQAAAAA=";
  return `data:audio/wav;base64,${base64SilenceWav}`;
}
