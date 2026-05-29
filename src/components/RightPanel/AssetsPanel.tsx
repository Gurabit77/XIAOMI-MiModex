import { useMemo, useState } from "react";
import { useAppStore } from "@/stores/appStore";
import { useSessionStore } from "@/stores/sessionStore";
import { useUIStore } from "@/stores/uiStore";
import { Button, Card, Icon } from "animal-island-ui";
import { GeneratedAudioCard } from "@/components/Audio/GeneratedAudioCard";
import type { MultimodalAttachment, MultimodalKind, OutputAsset } from "@/types";

type AssetFilter = "all" | OutputAsset["type"];

const ASSET_FILTERS: Array<{ key: AssetFilter; label: string }> = [
  { key: "all", label: "全部" },
  { key: "audio", label: "音频" },
  { key: "text", label: "文本" },
  { key: "file", label: "文件" },
];

function formatTime(ts: number): string {
  return new Date(ts).toLocaleString("zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function AssetsPanel() {
  const createConversation = useAppStore((s) => s.createConversation);
  const setActiveConversation = useAppStore((s) => s.setActiveConversation);
  const setInputValue = useAppStore((s) => s.setInputValue);
  const assets = useSessionStore((s) => s.outputAssets);
  const removeOutputAsset = useSessionStore((s) => s.removeOutputAsset);
  const addDraftAttachment = useSessionStore((s) => s.addDraftAttachment);
  const removeDraftAttachment = useSessionStore((s) => s.removeDraftAttachment);
  const draftAttachments = useSessionStore((s) => s.draftAttachments);
  const openCapability = useUIStore((s) => s.openCapability);
  const openChat = useUIStore((s) => s.openChat);
  const capabilityTab = useUIStore((s) => s.capabilityTab);
  const mainMode = useUIStore((s) => s.mainMode);
  const [filter, setFilter] = useState<AssetFilter>("all");
  const [pendingRemoveAssetId, setPendingRemoveAssetId] = useState<string | null>(null);

  const audioCount = assets.filter((asset) => asset.type === "audio").length;
  const textCount = assets.filter((asset) => asset.type === "text").length;
  const fileCount = assets.filter((asset) => asset.type === "file").length;
  const selectedAssetIds = useMemo(
    () => new Set(draftAttachments.map((item) => item.id.replace(/^asset-/, ""))),
    [draftAttachments],
  );
  const filteredAssets = filter === "all"
    ? assets
    : assets.filter((asset) => asset.type === filter);
  const activeEmptyAction =
    mainMode === "capability" && (capabilityTab === "tts" || capabilityTab === "multimodal")
      ? capabilityTab
      : null;

  const reuseAsset = (assetId: string) => {
    const asset = assets.find((item) => item.id === assetId);
    if (!asset) return;
    const attachment = buildAssetAttachment(asset);
    if (attachment) addDraftAttachment(attachment);
    const content = buildAssetReuseText(asset, Boolean(attachment));
    if (!content) return;
    const activeConversationId = useAppStore.getState().activeConversationId;
    if (!activeConversationId) {
      createConversation(`回填：${asset.title}`);
    } else {
      setActiveConversation(activeConversationId);
    }
    setInputValue(content);
    openChat();
  };

  const removeAsset = (assetId: string) => {
    if (pendingRemoveAssetId !== assetId) {
      setPendingRemoveAssetId(assetId);
      return;
    }
    removeOutputAsset(assetId);
    removeDraftAttachment(`asset-${assetId}`);
    setPendingRemoveAssetId(null);
  };

  return (
    <div className="assets-panel">
      <div className="right-panel-hero right-panel-hero--assets">
        <div className="right-panel-hero-icon">
          <Icon name="icon-shopping" size={20} />
        </div>
        <div className="right-panel-hero-copy">
          <span className="right-panel-kicker">资产码头</span>
          <strong>输出资产</strong>
          <span>音频、摘要和导出文件都在这里。</span>
        </div>
      </div>

      <div className="right-stat-grid right-stat-grid--three">
        <div className="right-stat-card">
          <span>音频</span>
          <strong>{audioCount}</strong>
        </div>
        <div className="right-stat-card">
          <span>文本</span>
          <strong>{textCount}</strong>
        </div>
        <div className="right-stat-card">
          <span>文件</span>
          <strong>{fileCount}</strong>
        </div>
      </div>

      {assets.length > 0 && (
        <div className="assets-filter" role="tablist" aria-label="筛选资产类型">
          {ASSET_FILTERS.map((item) => (
            <button
              key={item.key}
              type="button"
              className={`assets-filter-chip${filter === item.key ? " assets-filter-chip--active" : ""}`}
              onClick={() => setFilter(item.key)}
              aria-selected={filter === item.key}
              role="tab"
            >
              <span>{item.label}</span>
              <strong>{assetFilterCount(item.key, { all: assets.length, audio: audioCount, text: textCount, file: fileCount })}</strong>
            </button>
          ))}
        </div>
      )}

      <div className="assets-list">
        {filteredAssets.map((asset) => {
          const isSelected = selectedAssetIds.has(asset.id);
          const canAttach = Boolean(buildAssetAttachment(asset));
          const isPendingRemove = pendingRemoveAssetId === asset.id;
          return (
          <Card key={asset.id} color="default" className={`asset-card asset-card--${asset.type}${isSelected ? " asset-card--selected" : ""}`}>
            <div className="asset-card-head">
              <Icon name={asset.type === "audio" ? "icon-helicopter" : "icon-design"} size={15} />
              <span className="asset-title">{asset.title}</span>
              {isSelected && <span className="asset-selected-badge">已带入</span>}
              <button
                className={`asset-remove${isPendingRemove ? " asset-remove--confirm" : ""}`}
                type="button"
                onClick={() => removeAsset(asset.id)}
                onBlur={() => setPendingRemoveAssetId((id) => id === asset.id ? null : id)}
                aria-label={isPendingRemove ? `确认删除 ${asset.title}` : `删除 ${asset.title}`}
                title={isPendingRemove ? "再次点击确认删除" : "删除资产"}
              >
                {isPendingRemove ? "确认" : "×"}
              </button>
            </div>
            <div className="asset-meta">
              <span>{asset.source}</span>
              <span>{formatTime(asset.createdAt)}</span>
            </div>
            {asset.url && asset.type === "audio" && (
              <>
                <GeneratedAudioCard
                  compact
                  className="asset-audio-card"
                  url={asset.url}
                  fileName={asset.title}
                  mimeType={asset.mimeType}
                  title="资产音频"
                />
                <div className="asset-actions">
                  <Button type="default" size="small" onClick={() => reuseAsset(asset.id)}>
                    {isSelected ? "已带入输入框" : canAttach ? "作为附件复用" : "回填说明"}
                  </Button>
                </div>
              </>
            )}
            {asset.url && asset.type !== "audio" && (
              <div className="asset-actions">
                <Button type="text" size="small">
                  <a className="asset-download" href={asset.url} download={asset.title}>
                    下载
                  </a>
                </Button>
                {asset.content && (
                  <Button type="default" size="small" onClick={() => reuseAsset(asset.id)}>
                    回填到输入框
                  </Button>
                )}
              </div>
            )}
            {asset.content && !asset.url && (
              <>
                <div className="asset-content">{asset.content}</div>
                <div className="asset-actions">
                  <Button type="default" size="small" onClick={() => reuseAsset(asset.id)}>
                    回填到输入框
                  </Button>
                </div>
              </>
            )}
          </Card>
          );
        })}
        {assets.length > 0 && filteredAssets.length === 0 && (
          <Card color="default" className="assets-filter-empty">
            <Icon name="icon-map" size={22} />
            <span>当前筛选下没有资产</span>
          </Card>
        )}
        {assets.length === 0 && (
          <Card color="default" className="right-empty-card right-empty-card--blue right-empty-card--action">
            <div className="right-empty-visual" aria-hidden="true">
              <Icon name="icon-shopping" size={28} />
            </div>
            <strong>还没有可用资产</strong>
            <span className="right-empty-copy">先生成语音或上传素材，完成后自动归档。</span>
            <div
              className={[
                "right-empty-actions",
                "right-empty-actions--paired",
                activeEmptyAction ? "right-empty-actions--has-active" : "",
                activeEmptyAction ? `right-empty-actions--active-${activeEmptyAction}` : "",
              ].filter(Boolean).join(" ")}
            >
              <button
                type="button"
                className={`right-empty-action-button${activeEmptyAction === "tts" ? " right-empty-action-button--active" : ""}`}
                onClick={() => openCapability("tts")}
                aria-pressed={activeEmptyAction === "tts"}
                aria-label="生成语音"
                title="生成语音"
              >
                <Icon name="icon-helicopter" size={14} />
                生成语音
              </button>
              <button
                type="button"
                className={`right-empty-action-button${activeEmptyAction === "multimodal" ? " right-empty-action-button--active" : ""}`}
                onClick={() => openCapability("multimodal")}
                aria-pressed={activeEmptyAction === "multimodal"}
                aria-label="分析素材"
                title="分析素材"
              >
                <Icon name="icon-design" size={14} />
                分析素材
              </button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}

function assetFilterCount(
  key: AssetFilter,
  counts: Record<AssetFilter, number>,
): number {
  return counts[key];
}

function buildAssetReuseText(asset: { title: string; content?: string; source: string; type: string; mimeType?: string }, withAttachment = false): string {
  const header = [`# ${asset.title}`, `来源：${asset.source}`];
  if (asset.mimeType) header.push(`格式：${asset.mimeType}`);
  if (asset.type === "audio") {
    header.push(withAttachment ? "音频已作为附件带入，请基于这段音频继续处理。" : "请基于这段音频继续处理。");
  } else {
    header.push(withAttachment ? "素材已作为附件带入，请基于这个附件继续处理。" : "请基于以下内容继续处理。");
  }
  const body = asset.content?.trim();
  return body ? `${header.join("\n")}\n\n${body}` : header.join("\n");
}

function buildAssetAttachment(asset: OutputAsset): MultimodalAttachment | null {
  if (!asset.url) return null;
  if (asset.url.startsWith("blob:")) return null;
  const kind = inferAssetKind(asset);
  if (!kind) return null;
  return {
    id: `asset-${asset.id}`,
    kind,
    sourceType: asset.url.startsWith("data:") ? "base64" : "url",
    value: asset.url,
    label: asset.title,
    mimeType: asset.mimeType,
  };
}

function inferAssetKind(asset: OutputAsset): MultimodalKind | null {
  if (asset.type === "audio") return "audio";
  const mime = asset.mimeType?.toLowerCase() ?? "";
  if (mime.startsWith("image/")) return "image";
  if (mime.startsWith("audio/")) return "audio";
  if (mime.startsWith("video/")) return "video";
  return null;
}
