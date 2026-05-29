// @bun
import {
  init_useTerminalSize
} from "./chunk-ktw919wt.js";
import {
  init_format,
  truncatePathMiddle,
  truncateToWidth
} from "./chunk-x5hyyhqf.js";
import {
  ThemedBox_default,
  ThemedText,
  init_src,
  stringWidth,
  useTerminalSize
} from "./chunk-er1s76c9.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "./chunk-b5wxetbv.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/components/PromptInput/PromptInputFooterSuggestions.tsx
function getIcon(itemId) {
  if (itemId.startsWith("file-"))
    return "+";
  if (itemId.startsWith("mcp-resource-"))
    return "\u25C7";
  if (itemId.startsWith("agent-"))
    return "*";
  return "+";
}
function isUnifiedSuggestion(itemId) {
  return itemId.startsWith("file-") || itemId.startsWith("mcp-resource-") || itemId.startsWith("agent-");
}
function PromptInputFooterSuggestions({
  suggestions,
  selectedSuggestion,
  maxColumnWidth: maxColumnWidthProp,
  overlay
}) {
  const { rows } = useTerminalSize();
  const maxVisibleItems = overlay ? OVERLAY_MAX_ITEMS : Math.min(6, Math.max(1, rows - 3));
  if (suggestions.length === 0) {
    return null;
  }
  const maxColumnWidth = maxColumnWidthProp ?? Math.max(...suggestions.map((item) => stringWidth(item.displayText))) + 5;
  const startIndex = Math.max(0, Math.min(selectedSuggestion - Math.floor(maxVisibleItems / 2), suggestions.length - maxVisibleItems));
  const endIndex = Math.min(startIndex + maxVisibleItems, suggestions.length);
  const visibleItems = suggestions.slice(startIndex, endIndex);
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    justifyContent: overlay ? undefined : "flex-end",
    children: visibleItems.map((item) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(SuggestionItemRow, {
      item,
      maxColumnWidth,
      isSelected: item.id === suggestions[selectedSuggestion]?.id
    }, item.id, false, undefined, this))
  }, undefined, false, undefined, this);
}
var import_react, jsx_dev_runtime, OVERLAY_MAX_ITEMS = 5, SuggestionItemRow, PromptInputFooterSuggestions_default;
var init_PromptInputFooterSuggestions = __esm(() => {
  init_useTerminalSize();
  init_src();
  init_format();
  import_react = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
  SuggestionItemRow = import_react.memo(function SuggestionItemRow2({
    item,
    maxColumnWidth,
    isSelected
  }) {
    const columns = useTerminalSize().columns;
    const isUnified = isUnifiedSuggestion(item.id);
    if (isUnified) {
      const icon = getIcon(item.id);
      const textColor2 = isSelected ? "suggestion" : undefined;
      const dimColor = !isSelected;
      const isFile = item.id.startsWith("file-");
      const isMcpResource = item.id.startsWith("mcp-resource-");
      const iconWidth = 2;
      const paddingWidth = 4;
      const separatorWidth = item.description ? 3 : 0;
      let displayText2;
      if (isFile) {
        const descReserve = item.description ? Math.min(20, stringWidth(item.description)) : 0;
        const maxPathLength = columns - iconWidth - paddingWidth - separatorWidth - descReserve;
        displayText2 = truncatePathMiddle(item.displayText, maxPathLength);
      } else if (isMcpResource) {
        const maxDisplayTextLength = 30;
        displayText2 = truncateToWidth(item.displayText, maxDisplayTextLength);
      } else {
        displayText2 = item.displayText;
      }
      const availableWidth = columns - iconWidth - stringWidth(displayText2) - separatorWidth - paddingWidth;
      let lineContent;
      if (item.description) {
        const maxDescLength = Math.max(0, availableWidth);
        const truncatedDesc = truncateToWidth(item.description.replace(/\s+/g, " "), maxDescLength);
        lineContent = `${icon} ${displayText2} \u2013 ${truncatedDesc}`;
      } else {
        lineContent = `${icon} ${displayText2}`;
      }
      return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        color: textColor2,
        dimColor,
        wrap: "truncate",
        children: lineContent
      }, undefined, false, undefined, this);
    }
    const maxNameWidth = Math.floor(columns * 0.4);
    const displayTextWidth = Math.min(maxColumnWidth ?? stringWidth(item.displayText) + 5, maxNameWidth);
    const textColor = item.color || (isSelected ? "suggestion" : undefined);
    const shouldDim = !isSelected;
    let displayText = item.displayText;
    if (stringWidth(displayText) > displayTextWidth - 2) {
      displayText = truncateToWidth(displayText, displayTextWidth - 2);
    }
    const paddedDisplayText = displayText + " ".repeat(Math.max(0, displayTextWidth - stringWidth(displayText)));
    const tagText = item.tag ? `[${item.tag}] ` : "";
    const tagWidth = stringWidth(tagText);
    const descriptionWidth = Math.max(0, columns - displayTextWidth - tagWidth - 4);
    const truncatedDescription = item.description ? truncateToWidth(item.description.replace(/\s+/g, " "), descriptionWidth) : "";
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
      wrap: "truncate",
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          color: textColor,
          dimColor: shouldDim,
          children: paddedDisplayText
        }, undefined, false, undefined, this),
        tagText ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          color: item.tag === "local" ? "ansi:yellow" : undefined,
          dimColor: item.tag !== "local",
          children: tagText
        }, undefined, false, undefined, this) : null,
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          color: isSelected ? "suggestion" : undefined,
          dimColor: !isSelected,
          children: truncatedDescription
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  });
  PromptInputFooterSuggestions_default = import_react.memo(PromptInputFooterSuggestions);
});

export { PromptInputFooterSuggestions, PromptInputFooterSuggestions_default, init_PromptInputFooterSuggestions };
