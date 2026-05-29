// ============================================================
// MiModex — SessionManager (conversation list)
// ============================================================
import { useAppStore } from "@/stores/appStore";
import { useUIStore } from "@/stores/uiStore";
import { Button, Card, Icon, Input } from "animal-island-ui";
import { useState } from "react";

export function SessionManager() {
  const conversations = useAppStore((s) => s.conversations);
  const activeConversationId = useAppStore((s) => s.activeConversationId);
  const setActiveConversation = useAppStore((s) => s.setActiveConversation);
  const createConversation = useAppStore((s) => s.createConversation);
  const deleteConversation = useAppStore((s) => s.deleteConversation);
  const openChat = useUIStore((s) => s.openChat);
  const [search, setSearch] = useState("");

  const filtered = conversations.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  const formatTime = (ts: number) => {
    const diff = Date.now() - ts;
    if (diff < 60000) return "刚刚";
    if (diff < 3600000) return `${Math.floor(diff / 60000)}分钟前`;
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}小时前`;
    return `${Math.floor(diff / 86400000)}天前`;
  };

  return (
    <div className="session-manager">
      <div className="session-manager-header">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="搜索对话…"
          prefix={<Icon name="icon-critterpedia" size={14} />}
          allowClear
        />
        <Button
          type="primary"
          size="small"
          icon={<Icon name="icon-chat" size={14} />}
          onClick={() => {
            createConversation();
            openChat();
          }}
        >
          新对话
        </Button>
      </div>

      <div className="session-list">
        {filtered.map((conv) => (
          <Card
            key={conv.id}
            color={conv.id === activeConversationId ? "app-blue" : "default"}
            onClick={() => {
              setActiveConversation(conv.id);
              openChat();
            }}
            className={`session-card ${conv.id === activeConversationId ? "session-card--active" : ""}`}
          >
            <div className="session-card-content">
              <div className="session-card-title">{conv.title}</div>
              <div className="session-card-meta">
                <span>{formatTime(conv.updatedAt)}</span>
                {conv.tokenCount && (
                  <span className="session-card-tokens">
                    {conv.tokenCount > 1000
                      ? `${(conv.tokenCount / 1000).toFixed(1)}k`
                      : conv.tokenCount}{" "}
                    tokens
                  </span>
                )}
              </div>
              {conv.messages.length > 0 && (
                <div className="session-card-preview">
                  {conv.messages[conv.messages.length - 1].content.slice(0, 50)}
                  {conv.messages[conv.messages.length - 1].content.length > 50
                    ? "…"
                    : ""}
                </div>
              )}
            </div>
            <button
              className="session-card-delete"
              onClick={(e) => {
                e.stopPropagation();
                deleteConversation(conv.id);
              }}
              title="删除对话"
            >
              ×
            </button>
          </Card>
        ))}

        {filtered.length === 0 && (
          <Card color="default" className="session-empty-card">
            <div className="session-empty-visual" aria-hidden="true">
              <Icon name={search ? "icon-critterpedia" : "icon-chat"} size={26} />
            </div>
            <strong>{search ? "没有找到匹配对话" : "还没有对话"}</strong>
            <span>
              {search
                ? "换个关键词再找，或清空搜索回到全部对话。"
                : "新建一个对话后，任务、授权和结果都会在这里归档。"}
            </span>
            <div className="session-empty-actions">
              {search ? (
                <Button type="default" size="small" onClick={() => setSearch("")}>
                  清空搜索
                </Button>
              ) : (
                <Button
                  type="primary"
                  size="small"
                  icon={<Icon name="icon-chat" size={13} />}
                  onClick={() => {
                    createConversation();
                    openChat();
                  }}
                >
                  新建对话
                </Button>
              )}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
