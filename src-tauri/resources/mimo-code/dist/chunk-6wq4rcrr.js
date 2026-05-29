// @bun
import {
  Fuse,
  init_fuse
} from "./chunk-shdn4bnr.js";
import {
  Messages,
  init_Messages
} from "./chunk-70k34e2g.js";
import {
  init_SearchBox
} from "./chunk-a8d3h0xq.js";
import {
  init_useSearchInput,
  useSearchInput
} from "./chunk-p6jb8wcb.js";
import {
  ConfigurableShortcutHint,
  Select,
  Spinner,
  TextInput,
  getAllBaseTools,
  getFirstMeaningfulUserMessageTextContent,
  getSessionIdFromLog,
  getTheme,
  getWorktreePaths,
  init_ConfigurableShortcutHint,
  init_Spinner,
  init_TextInput,
  init_getWorktreePaths,
  init_select,
  init_sessionStorage,
  init_sideQuery,
  init_theme,
  init_tools1 as init_tools,
  init_useTerminalSize,
  isCustomTitleEnabled,
  isLiteLog,
  loadFullLog,
  saveCustomTitle,
  sideQuery
} from "./chunk-ktw919wt.js";
import {
  init_shellQuote,
  quote
} from "./chunk-akkx6jmm.js";
import {
  init_useExitOnCtrlCDWithKeybindings,
  useExitOnCtrlCDWithKeybindings
} from "./chunk-pfhyp451.js";
import {
  init_useKeybinding
} from "./chunk-dsnwry8r.js";
import {
  getSmallFastModel,
  init_model
} from "./chunk-1ghcng4e.js";
import {
  count,
  init_array
} from "./chunk-zwarn9h7.js";
import {
  formatLogMetadata,
  formatRelativeTimeAgo,
  init_format,
  truncateToWidth
} from "./chunk-x5hyyhqf.js";
import {
  Byline,
  Divider,
  KeyboardShortcutHint,
  LoadingState,
  SearchBox,
  ThemedBox_default,
  ThemedText,
  applyColor,
  init_source,
  init_src,
  source_default,
  stringWidth,
  useKeybinding,
  useTerminalFocus,
  useTerminalSize,
  useTheme,
  use_input_default
} from "./chunk-er1s76c9.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "./chunk-b5wxetbv.js";
import {
  init_analytics,
  logEvent
} from "./chunk-f2mhrmww.js";
import {
  getBranch,
  init_git
} from "./chunk-t6jhrn34.js";
import {
  getLogDisplayTitle,
  init_log,
  logError
} from "./chunk-w5ahy59y.js";
import {
  figures_default,
  init_figures
} from "./chunk-qajrkk97.js";
import {
  init_debug,
  init_slowOperations,
  jsonParse,
  logForDebugging
} from "./chunk-rpbc3b7k.js";
import {
  getOriginalCwd,
  getSessionId,
  init_state
} from "./chunk-j5xzpm59.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/components/SessionPreview.tsx
function SessionPreview({
  log,
  onExit,
  onSelect
}) {
  const [fullLog, setFullLog] = import_react.default.useState(null);
  import_react.default.useEffect(() => {
    setFullLog(null);
    if (isLiteLog(log)) {
      loadFullLog(log).then(setFullLog);
    }
  }, [log]);
  const isLoading = isLiteLog(log) && fullLog === null;
  const displayLog = fullLog ?? log;
  const conversationId = getSessionIdFromLog(displayLog) || "";
  const tools = getAllBaseTools();
  useKeybinding("confirm:no", onExit, { context: "Confirmation" });
  const handleSelect = import_react.useCallback(() => {
    onSelect(fullLog ?? log);
  }, [onSelect, fullLog, log]);
  useKeybinding("confirm:yes", handleSelect, { context: "Confirmation" });
  if (isLoading) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      padding: 1,
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(LoadingState, {
          message: "Loading session\u2026"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          dimColor: true,
          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Byline, {
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ConfigurableShortcutHint, {
              action: "confirm:no",
              context: "Confirmation",
              fallback: "Esc",
              description: "cancel"
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Messages, {
        messages: displayLog.messages,
        tools,
        commands: [],
        verbose: true,
        toolJSX: null,
        toolUseConfirmQueue: [],
        inProgressToolUseIDs: new Set,
        isMessageSelectorVisible: false,
        conversationId,
        screen: "transcript",
        streamingToolUses: [],
        showAllInTranscript: true,
        isLoading: false
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexShrink: 0,
        flexDirection: "column",
        borderTopDimColor: true,
        borderBottom: false,
        borderLeft: false,
        borderRight: false,
        borderStyle: "single",
        paddingLeft: 2,
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: [
              formatRelativeTimeAgo(displayLog.modified),
              " \xB7",
              " ",
              displayLog.messageCount,
              " messages",
              displayLog.gitBranch ? ` \xB7 ${displayLog.gitBranch}` : ""
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            dimColor: true,
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Byline, {
              children: [
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(KeyboardShortcutHint, {
                  shortcut: "Enter",
                  action: "resume"
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ConfigurableShortcutHint, {
                  action: "confirm:no",
                  context: "Confirmation",
                  fallback: "Esc",
                  description: "cancel"
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var import_react, jsx_dev_runtime;
var init_SessionPreview = __esm(() => {
  init_src();
  init_useKeybinding();
  init_tools();
  init_format();
  init_sessionStorage();
  init_ConfigurableShortcutHint();
  init_Messages();
  import_react = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/TagTabs.tsx
function getTabWidth(tab, maxWidth) {
  if (tab === ALL_TAB_LABEL) {
    return ALL_TAB_LABEL.length + TAB_PADDING;
  }
  const tagWidth = stringWidth(tab);
  const effectiveTagWidth = maxWidth ? Math.min(tagWidth, maxWidth - TAB_PADDING - HASH_PREFIX_LENGTH) : tagWidth;
  return Math.max(0, effectiveTagWidth) + TAB_PADDING + HASH_PREFIX_LENGTH;
}
function truncateTag(tag, maxWidth) {
  const availableForTag = maxWidth - TAB_PADDING - HASH_PREFIX_LENGTH;
  if (stringWidth(tag) <= availableForTag) {
    return tag;
  }
  if (availableForTag <= 1) {
    return tag.charAt(0);
  }
  return truncateToWidth(tag, availableForTag);
}
function TagTabs({
  tabs,
  selectedIndex,
  availableWidth,
  showAllProjects = false
}) {
  const resumeLabel = showAllProjects ? "Resume (All Projects)" : "Resume";
  const resumeLabelWidth = resumeLabel.length + 1;
  const rightHintWidth = Math.max(RIGHT_HINT_WIDTH_WITH_COUNT, RIGHT_HINT_WIDTH_NO_COUNT);
  const maxTabsWidth = availableWidth - resumeLabelWidth - rightHintWidth - 2;
  const safeSelectedIndex = Math.max(0, Math.min(selectedIndex, tabs.length - 1));
  const maxSingleTabWidth = Math.max(20, Math.floor(maxTabsWidth / 2));
  const tabWidths = tabs.map((tab) => getTabWidth(tab, maxSingleTabWidth));
  let startIndex = 0;
  let endIndex = tabs.length;
  const totalTabsWidth = tabWidths.reduce((sum, w, i) => sum + w + (i < tabWidths.length - 1 ? 1 : 0), 0);
  if (totalTabsWidth > maxTabsWidth) {
    const effectiveMaxWidth = maxTabsWidth - LEFT_ARROW_WIDTH;
    let windowWidth = tabWidths[safeSelectedIndex] ?? 0;
    startIndex = safeSelectedIndex;
    endIndex = safeSelectedIndex + 1;
    while (startIndex > 0 || endIndex < tabs.length) {
      const canExpandLeft = startIndex > 0;
      const canExpandRight = endIndex < tabs.length;
      if (canExpandLeft) {
        const leftWidth = (tabWidths[startIndex - 1] ?? 0) + 1;
        if (windowWidth + leftWidth <= effectiveMaxWidth) {
          startIndex--;
          windowWidth += leftWidth;
          continue;
        }
      }
      if (canExpandRight) {
        const rightWidth = (tabWidths[endIndex] ?? 0) + 1;
        if (windowWidth + rightWidth <= effectiveMaxWidth) {
          endIndex++;
          windowWidth += rightWidth;
          continue;
        }
      }
      break;
    }
  }
  const hiddenLeft = startIndex;
  const hiddenRight = tabs.length - endIndex;
  const visibleTabs = tabs.slice(startIndex, endIndex);
  const visibleIndices = visibleTabs.map((_, i) => startIndex + i);
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
    flexDirection: "row",
    gap: 1,
    children: [
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
        color: "suggestion",
        children: resumeLabel
      }, undefined, false, undefined, this),
      hiddenLeft > 0 && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
        dimColor: true,
        children: [
          LEFT_ARROW_PREFIX,
          hiddenLeft
        ]
      }, undefined, true, undefined, this),
      visibleTabs.map((tab, i) => {
        const actualIndex = visibleIndices[i];
        const isSelected = actualIndex === safeSelectedIndex;
        const displayText = tab === ALL_TAB_LABEL ? tab : `#${truncateTag(tab, maxSingleTabWidth - TAB_PADDING)}`;
        return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
          backgroundColor: isSelected ? "suggestion" : undefined,
          color: isSelected ? "inverseText" : undefined,
          bold: isSelected,
          children: [
            " ",
            displayText,
            " "
          ]
        }, tab, true, undefined, this);
      }),
      hiddenRight > 0 ? /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
        dimColor: true,
        children: [
          RIGHT_HINT_WITH_COUNT_PREFIX,
          hiddenRight,
          RIGHT_HINT_SUFFIX
        ]
      }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
        dimColor: true,
        children: RIGHT_HINT_NO_COUNT
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var jsx_dev_runtime2, ALL_TAB_LABEL = "All", TAB_PADDING = 2, HASH_PREFIX_LENGTH = 1, LEFT_ARROW_PREFIX = "\u2190 ", RIGHT_HINT_WITH_COUNT_PREFIX = "\u2192", RIGHT_HINT_SUFFIX = " (tab to cycle)", RIGHT_HINT_NO_COUNT = "(tab to cycle)", MAX_OVERFLOW_DIGITS = 2, LEFT_ARROW_WIDTH, RIGHT_HINT_WIDTH_WITH_COUNT, RIGHT_HINT_WIDTH_NO_COUNT;
var init_TagTabs = __esm(() => {
  init_src();
  init_format();
  jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
  LEFT_ARROW_WIDTH = LEFT_ARROW_PREFIX.length + MAX_OVERFLOW_DIGITS + 1;
  RIGHT_HINT_WIDTH_WITH_COUNT = RIGHT_HINT_WITH_COUNT_PREFIX.length + MAX_OVERFLOW_DIGITS + RIGHT_HINT_SUFFIX.length;
  RIGHT_HINT_WIDTH_NO_COUNT = RIGHT_HINT_NO_COUNT.length;
});

// src/components/ui/TreeSelect.tsx
function TreeSelect({
  nodes,
  onSelect,
  onCancel,
  onFocus,
  focusNodeId,
  visibleOptionCount,
  layout = "expanded",
  isDisabled = false,
  hideIndexes = false,
  isNodeExpanded,
  onExpand,
  onCollapse,
  getParentPrefix,
  getChildPrefix,
  onUpFromFirstItem
}) {
  const [internalExpandedIds, setInternalExpandedIds] = import_react2.default.useState(new Set);
  const isProgrammaticFocusRef = import_react2.default.useRef(false);
  const lastFocusedIdRef = import_react2.default.useRef(null);
  const isExpanded = import_react2.default.useCallback((nodeId) => {
    if (isNodeExpanded) {
      return isNodeExpanded(nodeId);
    }
    return internalExpandedIds.has(nodeId);
  }, [isNodeExpanded, internalExpandedIds]);
  const flattenedNodes = import_react2.default.useMemo(() => {
    const result = [];
    function traverse(node, depth, parentId) {
      const hasChildren = !!node.children && node.children.length > 0;
      const nodeIsExpanded = isExpanded(node.id);
      result.push({
        node,
        depth,
        isExpanded: nodeIsExpanded,
        hasChildren,
        parentId
      });
      if (hasChildren && nodeIsExpanded && node.children) {
        for (const child of node.children) {
          traverse(child, depth + 1, node.id);
        }
      }
    }
    for (const node of nodes) {
      traverse(node, 0);
    }
    return result;
  }, [nodes, isExpanded]);
  const defaultGetParentPrefix = import_react2.default.useCallback((isExpanded2) => isExpanded2 ? "\u25BC " : "\u25B6 ", []);
  const defaultGetChildPrefix = import_react2.default.useCallback((_depth) => "  \u25B8 ", []);
  const parentPrefixFn = getParentPrefix ?? defaultGetParentPrefix;
  const childPrefixFn = getChildPrefix ?? defaultGetChildPrefix;
  const buildLabel = import_react2.default.useCallback((flatNode) => {
    let prefix = "";
    if (flatNode.hasChildren) {
      prefix = parentPrefixFn(flatNode.isExpanded);
    } else if (flatNode.depth > 0) {
      prefix = childPrefixFn(flatNode.depth);
    }
    return prefix + flatNode.node.label;
  }, [parentPrefixFn, childPrefixFn]);
  const options = import_react2.default.useMemo(() => {
    return flattenedNodes.map((flatNode) => ({
      label: buildLabel(flatNode),
      description: flatNode.node.description,
      dimDescription: flatNode.node.dimDescription ?? true,
      value: flatNode.node.id
    }));
  }, [flattenedNodes, buildLabel]);
  const nodeMap = import_react2.default.useMemo(() => {
    const map = new Map;
    flattenedNodes.forEach((fn) => map.set(fn.node.id, fn.node));
    return map;
  }, [flattenedNodes]);
  const findFlattenedNode = import_react2.default.useCallback((nodeId) => {
    return flattenedNodes.find((fn) => fn.node.id === nodeId);
  }, [flattenedNodes]);
  const toggleExpand = import_react2.default.useCallback((nodeId, shouldExpand) => {
    const flatNode = findFlattenedNode(nodeId);
    if (!flatNode || !flatNode.hasChildren)
      return;
    if (shouldExpand) {
      if (onExpand) {
        onExpand(nodeId);
      } else {
        setInternalExpandedIds((prev) => new Set(prev).add(nodeId));
      }
    } else {
      if (onCollapse) {
        onCollapse(nodeId);
      } else {
        setInternalExpandedIds((prev) => {
          const newSet = new Set(prev);
          newSet.delete(nodeId);
          return newSet;
        });
      }
    }
  }, [findFlattenedNode, onExpand, onCollapse]);
  const handleKeyDown = (e) => {
    if (!focusNodeId || isDisabled)
      return;
    const flatNode = findFlattenedNode(focusNodeId);
    if (!flatNode)
      return;
    if (e.key === "right" && flatNode.hasChildren) {
      e.preventDefault();
      toggleExpand(focusNodeId, true);
    } else if (e.key === "left") {
      if (flatNode.hasChildren && flatNode.isExpanded) {
        e.preventDefault();
        toggleExpand(focusNodeId, false);
      } else if (flatNode.parentId !== undefined) {
        e.preventDefault();
        isProgrammaticFocusRef.current = true;
        toggleExpand(flatNode.parentId, false);
        if (onFocus) {
          const parentNode = nodeMap.get(flatNode.parentId);
          if (parentNode) {
            onFocus(parentNode);
          }
        }
      }
    }
  };
  const handleChange = import_react2.default.useCallback((nodeId) => {
    const node = nodeMap.get(nodeId);
    if (!node)
      return;
    onSelect(node);
  }, [nodeMap, onSelect]);
  const handleFocus = import_react2.default.useCallback((nodeId) => {
    if (isProgrammaticFocusRef.current) {
      isProgrammaticFocusRef.current = false;
      return;
    }
    if (lastFocusedIdRef.current === nodeId) {
      return;
    }
    lastFocusedIdRef.current = nodeId;
    if (onFocus) {
      const node = nodeMap.get(nodeId);
      if (node) {
        onFocus(node);
      }
    }
  }, [onFocus, nodeMap]);
  return /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedBox_default, {
    tabIndex: 0,
    autoFocus: true,
    onKeyDown: handleKeyDown,
    children: /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(Select, {
      options,
      onChange: handleChange,
      onFocus: handleFocus,
      onCancel,
      defaultFocusValue: focusNodeId,
      visibleOptionCount,
      layout,
      isDisabled,
      hideIndexes,
      onUpFromFirstItem
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
var import_react2, jsx_dev_runtime3;
var init_TreeSelect = __esm(() => {
  init_src();
  init_select();
  import_react2 = __toESM(require_react(), 1);
  jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/LogSelector.tsx
function normalizeAndTruncateToWidth(text, maxWidth) {
  const normalized = text.replace(/\s+/g, " ").trim();
  return truncateToWidth(normalized, maxWidth);
}
function formatSnippet({ before, match, after }, highlightColor) {
  return source_default.dim(before) + highlightColor(match) + source_default.dim(after);
}
function extractSnippet(text, query, contextChars) {
  const matchIndex = text.toLowerCase().indexOf(query.toLowerCase());
  if (matchIndex === -1)
    return null;
  const matchEnd = matchIndex + query.length;
  const snippetStart = Math.max(0, matchIndex - contextChars);
  const snippetEnd = Math.min(text.length, matchEnd + contextChars);
  const beforeRaw = text.slice(snippetStart, matchIndex);
  const matchText = text.slice(matchIndex, matchEnd);
  const afterRaw = text.slice(matchEnd, snippetEnd);
  return {
    before: (snippetStart > 0 ? "\u2026" : "") + beforeRaw.replace(/\s+/g, " ").trimStart(),
    match: matchText.trim(),
    after: afterRaw.replace(/\s+/g, " ").trimEnd() + (snippetEnd < text.length ? "\u2026" : "")
  };
}
function buildLogLabel(log, maxLabelWidth, options) {
  const {
    isGroupHeader = false,
    isChild = false,
    forkCount = 0
  } = options || {};
  const prefixWidth = isGroupHeader && forkCount > 0 ? PARENT_PREFIX_WIDTH : isChild ? CHILD_PREFIX_WIDTH : 0;
  const sessionCountSuffix = isGroupHeader && forkCount > 0 ? ` (+${forkCount} other ${forkCount === 1 ? "session" : "sessions"})` : "";
  const sidechainSuffix = log.isSidechain ? " (sidechain)" : "";
  const maxSummaryWidth = maxLabelWidth - prefixWidth - sidechainSuffix.length - sessionCountSuffix.length;
  const truncatedSummary = normalizeAndTruncateToWidth(getLogDisplayTitle(log), maxSummaryWidth);
  return `${truncatedSummary}${sidechainSuffix}${sessionCountSuffix}`;
}
function buildLogMetadata(log, options) {
  const { isChild = false, showProjectPath = false } = options || {};
  const childPadding = isChild ? "    " : "";
  const baseMetadata = formatLogMetadata(log);
  const projectSuffix = showProjectPath && log.projectPath ? ` \xB7 ${log.projectPath}` : "";
  return childPadding + baseMetadata + projectSuffix;
}
function LogSelector({
  logs,
  maxHeight = Infinity,
  forceWidth,
  onCancel,
  onSelect,
  onLogsChanged,
  onLoadMore,
  initialSearchQuery,
  showAllProjects = false,
  onToggleAllProjects,
  onAgenticSearch
}) {
  const terminalSize = useTerminalSize();
  const columns = forceWidth === undefined ? terminalSize.columns : forceWidth;
  const exitState = useExitOnCtrlCDWithKeybindings(onCancel);
  const isTerminalFocused = useTerminalFocus();
  const isResumeWithRenameEnabled = isCustomTitleEnabled();
  const isDeepSearchEnabled = process.env.USER_TYPE === "ant";
  const [themeName] = useTheme();
  const theme = getTheme(themeName);
  const highlightColor = import_react3.default.useMemo(() => (text) => applyColor(text, theme.warning), [theme.warning]);
  const isAgenticSearchEnabled = process.env.USER_TYPE === "ant";
  const [currentBranch, setCurrentBranch] = import_react3.default.useState(null);
  const [branchFilterEnabled, setBranchFilterEnabled] = import_react3.default.useState(false);
  const [showAllWorktrees, setShowAllWorktrees] = import_react3.default.useState(false);
  const [hasMultipleWorktrees, setHasMultipleWorktrees] = import_react3.default.useState(false);
  const currentCwd = import_react3.default.useMemo(() => getOriginalCwd(), []);
  const [renameValue, setRenameValue] = import_react3.default.useState("");
  const [renameCursorOffset, setRenameCursorOffset] = import_react3.default.useState(0);
  const [expandedGroupSessionIds, setExpandedGroupSessionIds] = import_react3.default.useState(new Set);
  const [focusedNode, setFocusedNode] = import_react3.default.useState(null);
  const [focusedIndex, setFocusedIndex] = import_react3.default.useState(1);
  const [viewMode, setViewMode] = import_react3.default.useState("list");
  const [previewLog, setPreviewLog] = import_react3.default.useState(null);
  const prevFocusedIdRef = import_react3.default.useRef(null);
  const [selectedTagIndex, setSelectedTagIndex] = import_react3.default.useState(0);
  const [agenticSearchState, setAgenticSearchState] = import_react3.default.useState({ status: "idle" });
  const [isAgenticSearchOptionFocused, setIsAgenticSearchOptionFocused] = import_react3.default.useState(false);
  const agenticSearchAbortRef = import_react3.default.useRef(null);
  const {
    query: searchQuery,
    setQuery: setSearchQuery,
    cursorOffset: searchCursorOffset
  } = useSearchInput({
    isActive: viewMode === "search" && agenticSearchState.status !== "searching",
    onExit: () => {
      setViewMode("list");
      logEvent("tengu_session_search_toggled", { enabled: false });
    },
    onExitUp: () => {
      setViewMode("list");
      logEvent("tengu_session_search_toggled", { enabled: false });
    },
    passthroughCtrlKeys: ["n"],
    initialQuery: initialSearchQuery || ""
  });
  const deferredSearchQuery = import_react3.default.useDeferredValue(searchQuery);
  const [debouncedDeepSearchQuery, setDebouncedDeepSearchQuery] = import_react3.default.useState("");
  import_react3.default.useEffect(() => {
    if (!deferredSearchQuery) {
      setDebouncedDeepSearchQuery("");
      return;
    }
    const timeoutId = setTimeout(setDebouncedDeepSearchQuery, 300, deferredSearchQuery);
    return () => clearTimeout(timeoutId);
  }, [deferredSearchQuery]);
  const [deepSearchResults, setDeepSearchResults] = import_react3.default.useState(null);
  const [isSearching, setIsSearching] = import_react3.default.useState(false);
  import_react3.default.useEffect(() => {
    getBranch().then((branch) => setCurrentBranch(branch));
    getWorktreePaths(currentCwd).then((paths) => {
      setHasMultipleWorktrees(paths.length > 1);
    });
  }, [currentCwd]);
  const searchableTextByLog = import_react3.default.useMemo(() => new Map(logs.map((log) => [log, buildSearchableText(log)])), [logs]);
  const fuseIndex = import_react3.default.useMemo(() => {
    if (!isDeepSearchEnabled)
      return null;
    const logsWithText = logs.map((log) => ({
      log,
      searchableText: searchableTextByLog.get(log) ?? ""
    })).filter((item) => item.searchableText);
    return new Fuse(logsWithText, {
      keys: ["searchableText"],
      threshold: FUSE_THRESHOLD,
      ignoreLocation: true,
      includeScore: true
    });
  }, [logs, searchableTextByLog, isDeepSearchEnabled]);
  const uniqueTags = import_react3.default.useMemo(() => getUniqueTags(logs), [logs]);
  const hasTags = uniqueTags.length > 0;
  const tagTabs = import_react3.default.useMemo(() => hasTags ? ["All", ...uniqueTags] : [], [hasTags, uniqueTags]);
  const effectiveTagIndex = tagTabs.length > 0 && selectedTagIndex < tagTabs.length ? selectedTagIndex : 0;
  const selectedTab = tagTabs[effectiveTagIndex];
  const tagFilter = selectedTab === "All" ? undefined : selectedTab;
  const tagTabsLines = hasTags ? 1 : 0;
  const baseFilteredLogs = import_react3.default.useMemo(() => {
    let filtered = logs;
    if (isResumeWithRenameEnabled) {
      filtered = logs.filter((log) => {
        const currentSessionId = getSessionId();
        const logSessionId = getSessionIdFromLog(log);
        const isCurrentSession = currentSessionId && logSessionId === currentSessionId;
        if (isCurrentSession) {
          return true;
        }
        if (log.customTitle) {
          return true;
        }
        const fromMessages = getFirstMeaningfulUserMessageTextContent(log.messages);
        if (fromMessages) {
          return true;
        }
        if (log.firstPrompt || log.customTitle) {
          return true;
        }
        return false;
      });
    }
    if (tagFilter !== undefined) {
      filtered = filtered.filter((log) => log.tag === tagFilter);
    }
    if (branchFilterEnabled && currentBranch) {
      filtered = filtered.filter((log) => log.gitBranch === currentBranch);
    }
    if (hasMultipleWorktrees && !showAllWorktrees) {
      filtered = filtered.filter((log) => log.projectPath === currentCwd);
    }
    return filtered;
  }, [
    logs,
    isResumeWithRenameEnabled,
    tagFilter,
    branchFilterEnabled,
    currentBranch,
    hasMultipleWorktrees,
    showAllWorktrees,
    currentCwd
  ]);
  const titleFilteredLogs = import_react3.default.useMemo(() => {
    if (!searchQuery) {
      return baseFilteredLogs;
    }
    const query = searchQuery.toLowerCase();
    return baseFilteredLogs.filter((log) => {
      const displayedTitle = getLogDisplayTitle(log).toLowerCase();
      const branch = (log.gitBranch || "").toLowerCase();
      const tag = (log.tag || "").toLowerCase();
      const prInfo = log.prNumber ? `pr #${log.prNumber} ${log.prRepository || ""}`.toLowerCase() : "";
      return displayedTitle.includes(query) || branch.includes(query) || tag.includes(query) || prInfo.includes(query);
    });
  }, [baseFilteredLogs, searchQuery]);
  import_react3.default.useEffect(() => {
    if (isDeepSearchEnabled && deferredSearchQuery && deferredSearchQuery !== debouncedDeepSearchQuery) {
      setIsSearching(true);
    }
  }, [deferredSearchQuery, debouncedDeepSearchQuery, isDeepSearchEnabled]);
  import_react3.default.useEffect(() => {
    if (!isDeepSearchEnabled || !debouncedDeepSearchQuery || !fuseIndex) {
      setDeepSearchResults(null);
      setIsSearching(false);
      return;
    }
    const timeoutId = setTimeout((fuseIndex2, debouncedDeepSearchQuery2, setDeepSearchResults2, setIsSearching2) => {
      const results = fuseIndex2.search(debouncedDeepSearchQuery2);
      results.sort((a, b) => {
        const aTime = new Date(a.item.log.modified).getTime();
        const bTime = new Date(b.item.log.modified).getTime();
        const timeDiff = bTime - aTime;
        if (Math.abs(timeDiff) > DATE_TIE_THRESHOLD_MS) {
          return timeDiff;
        }
        return (a.score ?? 1) - (b.score ?? 1);
      });
      setDeepSearchResults2({
        results: results.map((r) => ({
          log: r.item.log,
          score: r.score,
          searchableText: r.item.searchableText
        })),
        query: debouncedDeepSearchQuery2
      });
      setIsSearching2(false);
    }, 0, fuseIndex, debouncedDeepSearchQuery, setDeepSearchResults, setIsSearching);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [debouncedDeepSearchQuery, fuseIndex, isDeepSearchEnabled]);
  const { filteredLogs, snippets } = import_react3.default.useMemo(() => {
    const snippetMap = new Map;
    let filtered = titleFilteredLogs;
    if (deepSearchResults && debouncedDeepSearchQuery && deepSearchResults.query === debouncedDeepSearchQuery) {
      for (const result of deepSearchResults.results) {
        if (result.searchableText) {
          const snippet = extractSnippet(result.searchableText, debouncedDeepSearchQuery, SNIPPET_CONTEXT_CHARS);
          if (snippet) {
            snippetMap.set(result.log, snippet);
          }
        }
      }
      const titleMatchIds = new Set(filtered.map((log) => log.messages[0]?.uuid));
      const transcriptOnlyMatches = deepSearchResults.results.map((r) => r.log).filter((log) => !titleMatchIds.has(log.messages[0]?.uuid));
      filtered = [...filtered, ...transcriptOnlyMatches];
    }
    return { filteredLogs: filtered, snippets: snippetMap };
  }, [titleFilteredLogs, deepSearchResults, debouncedDeepSearchQuery]);
  const displayedLogs = import_react3.default.useMemo(() => {
    if (agenticSearchState.status === "results" && agenticSearchState.results.length > 0) {
      return agenticSearchState.results;
    }
    return filteredLogs;
  }, [agenticSearchState, filteredLogs]);
  const maxLabelWidth = Math.max(30, columns - 4);
  const treeNodes = import_react3.default.useMemo(() => {
    if (!isResumeWithRenameEnabled) {
      return [];
    }
    const sessionGroups = groupLogsBySessionId(displayedLogs);
    return Array.from(sessionGroups.entries()).map(([sessionId, groupLogs]) => {
      const latestLog = groupLogs[0];
      const indexInFiltered = displayedLogs.indexOf(latestLog);
      const snippet = snippets.get(latestLog);
      const snippetStr = snippet ? formatSnippet(snippet, highlightColor) : null;
      if (groupLogs.length === 1) {
        const metadata = buildLogMetadata(latestLog, {
          showProjectPath: showAllProjects
        });
        return {
          id: `log:${sessionId}:0`,
          value: { log: latestLog, indexInFiltered },
          label: buildLogLabel(latestLog, maxLabelWidth),
          description: snippetStr ? `${metadata}
  ${snippetStr}` : metadata,
          dimDescription: true
        };
      }
      const forkCount = groupLogs.length - 1;
      const children = groupLogs.slice(1).map((log, index) => {
        const childIndexInFiltered = displayedLogs.indexOf(log);
        const childSnippet = snippets.get(log);
        const childSnippetStr = childSnippet ? formatSnippet(childSnippet, highlightColor) : null;
        const childMetadata = buildLogMetadata(log, {
          isChild: true,
          showProjectPath: showAllProjects
        });
        return {
          id: `log:${sessionId}:${index + 1}`,
          value: { log, indexInFiltered: childIndexInFiltered },
          label: buildLogLabel(log, maxLabelWidth, { isChild: true }),
          description: childSnippetStr ? `${childMetadata}
      ${childSnippetStr}` : childMetadata,
          dimDescription: true
        };
      });
      const parentMetadata = buildLogMetadata(latestLog, {
        showProjectPath: showAllProjects
      });
      return {
        id: `group:${sessionId}`,
        value: { log: latestLog, indexInFiltered },
        label: buildLogLabel(latestLog, maxLabelWidth, {
          isGroupHeader: true,
          forkCount
        }),
        description: snippetStr ? `${parentMetadata}
  ${snippetStr}` : parentMetadata,
        dimDescription: true,
        children
      };
    });
  }, [
    isResumeWithRenameEnabled,
    displayedLogs,
    maxLabelWidth,
    showAllProjects,
    snippets,
    highlightColor
  ]);
  const flatOptions = import_react3.default.useMemo(() => {
    if (isResumeWithRenameEnabled) {
      return [];
    }
    return displayedLogs.map((log, index) => {
      const rawSummary = getLogDisplayTitle(log);
      const summaryWithSidechain = rawSummary + (log.isSidechain ? " (sidechain)" : "");
      const summary = normalizeAndTruncateToWidth(summaryWithSidechain, maxLabelWidth);
      const baseDescription = formatLogMetadata(log);
      const projectSuffix = showAllProjects && log.projectPath ? ` \xB7 ${log.projectPath}` : "";
      const snippet = snippets.get(log);
      const snippetStr = snippet ? formatSnippet(snippet, highlightColor) : null;
      return {
        label: summary,
        description: snippetStr ? `${baseDescription}${projectSuffix}
  ${snippetStr}` : baseDescription + projectSuffix,
        dimDescription: true,
        value: index.toString()
      };
    });
  }, [
    isResumeWithRenameEnabled,
    displayedLogs,
    highlightColor,
    maxLabelWidth,
    showAllProjects,
    snippets
  ]);
  const focusedLog = focusedNode?.value.log ?? null;
  const getExpandCollapseHint = () => {
    if (!isResumeWithRenameEnabled || !focusedLog)
      return "";
    const sessionId = getSessionIdFromLog(focusedLog);
    if (!sessionId)
      return "";
    const sessionLogs = displayedLogs.filter((log) => getSessionIdFromLog(log) === sessionId);
    const hasMultipleLogs = sessionLogs.length > 1;
    if (!hasMultipleLogs)
      return "";
    const isExpanded = expandedGroupSessionIds.has(sessionId);
    const isChildNode = sessionLogs.indexOf(focusedLog) > 0;
    if (isChildNode) {
      return "\u2190 to collapse";
    }
    return isExpanded ? "\u2190 to collapse" : "\u2192 to expand";
  };
  const handleRenameSubmit = import_react3.default.useCallback(async () => {
    const sessionId = focusedLog ? getSessionIdFromLog(focusedLog) : undefined;
    if (!focusedLog || !sessionId) {
      setViewMode("list");
      setRenameValue("");
      return;
    }
    if (renameValue.trim()) {
      await saveCustomTitle(sessionId, renameValue.trim(), focusedLog.fullPath);
      if (isResumeWithRenameEnabled && onLogsChanged) {
        onLogsChanged();
      }
    }
    setViewMode("list");
    setRenameValue("");
  }, [focusedLog, renameValue, onLogsChanged, isResumeWithRenameEnabled]);
  const exitSearchMode = import_react3.default.useCallback(() => {
    setViewMode("list");
    logEvent("tengu_session_search_toggled", { enabled: false });
  }, []);
  const enterSearchMode = import_react3.default.useCallback(() => {
    setViewMode("search");
    logEvent("tengu_session_search_toggled", { enabled: true });
  }, []);
  const handleAgenticSearch = import_react3.default.useCallback(async () => {
    if (!searchQuery.trim() || !onAgenticSearch || !isAgenticSearchEnabled) {
      return;
    }
    agenticSearchAbortRef.current?.abort();
    const abortController = new AbortController;
    agenticSearchAbortRef.current = abortController;
    setAgenticSearchState({ status: "searching" });
    logEvent("tengu_agentic_search_started", {
      query_length: searchQuery.length
    });
    try {
      const results = await onAgenticSearch(searchQuery, logs, abortController.signal);
      if (abortController.signal.aborted) {
        return;
      }
      setAgenticSearchState({ status: "results", results, query: searchQuery });
      logEvent("tengu_agentic_search_completed", {
        query_length: searchQuery.length,
        results_count: results.length
      });
    } catch (error) {
      if (abortController.signal.aborted) {
        return;
      }
      setAgenticSearchState({
        status: "error",
        message: error instanceof Error ? error.message : "Search failed"
      });
      logEvent("tengu_agentic_search_error", {
        query_length: searchQuery.length
      });
    }
  }, [searchQuery, onAgenticSearch, isAgenticSearchEnabled, logs]);
  import_react3.default.useEffect(() => {
    if (agenticSearchState.status !== "idle" && agenticSearchState.status !== "searching") {
      if (agenticSearchState.status === "results" && agenticSearchState.query !== searchQuery || agenticSearchState.status === "error") {
        setAgenticSearchState({ status: "idle" });
      }
    }
  }, [searchQuery, agenticSearchState]);
  import_react3.default.useEffect(() => {
    return () => {
      agenticSearchAbortRef.current?.abort();
    };
  }, []);
  const prevAgenticStatusRef = import_react3.default.useRef(agenticSearchState.status);
  import_react3.default.useEffect(() => {
    const prevStatus = prevAgenticStatusRef.current;
    prevAgenticStatusRef.current = agenticSearchState.status;
    if (prevStatus === "searching" && agenticSearchState.status === "results") {
      if (isResumeWithRenameEnabled && treeNodes.length > 0) {
        setFocusedNode(treeNodes[0]);
      } else if (!isResumeWithRenameEnabled && displayedLogs.length > 0) {
        const firstLog = displayedLogs[0];
        setFocusedNode({
          id: "0",
          value: { log: firstLog, indexInFiltered: 0 },
          label: ""
        });
      }
    }
  }, [
    agenticSearchState.status,
    isResumeWithRenameEnabled,
    treeNodes,
    displayedLogs
  ]);
  const handleFlatOptionsSelectFocus = import_react3.default.useCallback((value) => {
    const index = parseInt(value, 10);
    const log = displayedLogs[index];
    if (!log || prevFocusedIdRef.current === index.toString()) {
      return;
    }
    prevFocusedIdRef.current = index.toString();
    setFocusedNode({
      id: index.toString(),
      value: { log, indexInFiltered: index },
      label: ""
    });
    setFocusedIndex(index + 1);
  }, [displayedLogs]);
  const handleTreeSelectFocus = import_react3.default.useCallback((node) => {
    setFocusedNode(node);
    const index = displayedLogs.findIndex((log) => getSessionIdFromLog(log) === getSessionIdFromLog(node.value.log));
    if (index >= 0) {
      setFocusedIndex(index + 1);
    }
  }, [displayedLogs]);
  useKeybinding("confirm:no", () => {
    agenticSearchAbortRef.current?.abort();
    setAgenticSearchState({ status: "idle" });
    logEvent("tengu_agentic_search_cancelled", {});
  }, {
    context: "Confirmation",
    isActive: viewMode !== "preview" && agenticSearchState.status === "searching"
  });
  useKeybinding("confirm:no", () => {
    setViewMode("list");
    setRenameValue("");
  }, {
    context: "Settings",
    isActive: viewMode === "rename" && agenticSearchState.status !== "searching"
  });
  useKeybinding("confirm:no", () => {
    setSearchQuery("");
    setIsAgenticSearchOptionFocused(false);
    onCancel?.();
  }, {
    context: "Confirmation",
    isActive: viewMode !== "preview" && viewMode !== "rename" && viewMode !== "search" && isAgenticSearchOptionFocused && agenticSearchState.status !== "searching"
  });
  use_input_default((input, key) => {
    if (viewMode === "preview") {
      return;
    }
    if (agenticSearchState.status === "searching") {
      return;
    }
    if (viewMode === "rename") {} else if (viewMode === "search") {
      if (input.toLowerCase() === "n" && key.ctrl) {
        exitSearchMode();
      } else if (key.return || key.downArrow) {
        if (searchQuery.trim() && onAgenticSearch && isAgenticSearchEnabled && agenticSearchState.status !== "results") {
          setIsAgenticSearchOptionFocused(true);
        }
      }
    } else {
      if (isAgenticSearchOptionFocused) {
        if (key.return) {
          handleAgenticSearch();
          setIsAgenticSearchOptionFocused(false);
          return;
        } else if (key.downArrow) {
          setIsAgenticSearchOptionFocused(false);
          return;
        } else if (key.upArrow) {
          setViewMode("search");
          setIsAgenticSearchOptionFocused(false);
          return;
        }
      }
      if (hasTags && key.tab) {
        const offset = key.shift ? -1 : 1;
        setSelectedTagIndex((prev) => {
          const current = prev < tagTabs.length ? prev : 0;
          const newIndex = (current + tagTabs.length + offset) % tagTabs.length;
          const newTab = tagTabs[newIndex];
          logEvent("tengu_session_tag_filter_changed", {
            is_all: newTab === "All",
            tag_count: uniqueTags.length
          });
          return newIndex;
        });
        return;
      }
      const keyIsNotCtrlOrMeta = !key.ctrl && !key.meta;
      const lowerInput = input.toLowerCase();
      if (lowerInput === "a" && key.ctrl && onToggleAllProjects) {
        onToggleAllProjects();
        logEvent("tengu_session_all_projects_toggled", {
          enabled: !showAllProjects
        });
      } else if (lowerInput === "b" && key.ctrl) {
        const newEnabled = !branchFilterEnabled;
        setBranchFilterEnabled(newEnabled);
        logEvent("tengu_session_branch_filter_toggled", {
          enabled: newEnabled
        });
      } else if (lowerInput === "w" && key.ctrl && hasMultipleWorktrees) {
        const newValue = !showAllWorktrees;
        setShowAllWorktrees(newValue);
        logEvent("tengu_session_worktree_filter_toggled", {
          enabled: newValue
        });
      } else if (lowerInput === "/" && keyIsNotCtrlOrMeta) {
        setViewMode("search");
        logEvent("tengu_session_search_toggled", { enabled: true });
      } else if (lowerInput === "r" && key.ctrl && focusedLog) {
        setViewMode("rename");
        setRenameValue("");
        logEvent("tengu_session_rename_started", {});
      } else if (lowerInput === "v" && key.ctrl && focusedLog) {
        setPreviewLog(focusedLog);
        setViewMode("preview");
        logEvent("tengu_session_preview_opened", {
          messageCount: focusedLog.messageCount
        });
      } else if (focusedLog && keyIsNotCtrlOrMeta && input.length > 0 && !/^\s+$/.test(input)) {
        setViewMode("search");
        setSearchQuery(input);
        logEvent("tengu_session_search_toggled", { enabled: true });
      }
    }
  }, { isActive: true });
  const filterIndicators = [];
  if (branchFilterEnabled && currentBranch) {
    filterIndicators.push(currentBranch);
  }
  if (hasMultipleWorktrees && !showAllWorktrees) {
    filterIndicators.push("current worktree");
  }
  const showAdditionalFilterLine = filterIndicators.length > 0 && viewMode !== "search";
  const searchBoxLines = 3;
  const headerLines = 5 + searchBoxLines + (showAdditionalFilterLine ? 1 : 0) + tagTabsLines;
  const footerLines = 2;
  const visibleCount = Math.max(1, Math.floor((maxHeight - headerLines - footerLines) / 3));
  import_react3.default.useEffect(() => {
    if (!onLoadMore)
      return;
    const buffer = visibleCount * 2;
    if (focusedIndex + buffer >= displayedLogs.length) {
      onLoadMore(visibleCount * 3);
    }
  }, [focusedIndex, visibleCount, displayedLogs.length, onLoadMore]);
  if (logs.length === 0) {
    return null;
  }
  if (viewMode === "preview" && previewLog && isResumeWithRenameEnabled) {
    return /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(SessionPreview, {
      log: previewLog,
      onExit: () => {
        setViewMode("list");
        setPreviewLog(null);
      },
      onSelect
    }, undefined, false, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    height: maxHeight - 1,
    children: [
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedBox_default, {
        flexShrink: 0,
        children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Divider, {
          color: "suggestion"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedBox_default, {
        flexShrink: 0,
        children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
          children: " "
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      hasTags ? /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(TagTabs, {
        tabs: tagTabs,
        selectedIndex: effectiveTagIndex,
        availableWidth: columns,
        showAllProjects
      }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedBox_default, {
        flexShrink: 0,
        children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
          bold: true,
          color: "suggestion",
          children: [
            "Resume Session",
            viewMode === "list" && displayedLogs.length > visibleCount && /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
              dimColor: true,
              children: [
                " ",
                "(",
                focusedIndex,
                " of ",
                displayedLogs.length,
                ")"
              ]
            }, undefined, true, undefined, this)
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(SearchBox, {
        query: searchQuery,
        isFocused: viewMode === "search",
        isTerminalFocused,
        cursorOffset: searchCursorOffset
      }, undefined, false, undefined, this),
      filterIndicators.length > 0 && viewMode !== "search" && /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedBox_default, {
        flexShrink: 0,
        paddingLeft: 2,
        children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
          dimColor: true,
          children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Byline, {
            children: filterIndicators
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedBox_default, {
        flexShrink: 0,
        children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
          children: " "
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      agenticSearchState.status === "searching" && /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedBox_default, {
        paddingLeft: 1,
        flexShrink: 0,
        children: [
          /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Spinner, {}, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
            children: " Searching\u2026"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      agenticSearchState.status === "results" && agenticSearchState.results.length > 0 && /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedBox_default, {
        paddingLeft: 1,
        marginBottom: 1,
        flexShrink: 0,
        children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
          dimColor: true,
          italic: true,
          children: "MiMo found these results:"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      agenticSearchState.status === "results" && agenticSearchState.results.length === 0 && filteredLogs.length === 0 && /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedBox_default, {
        paddingLeft: 1,
        marginBottom: 1,
        flexShrink: 0,
        children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
          dimColor: true,
          italic: true,
          children: "No matching sessions found."
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      agenticSearchState.status === "error" && filteredLogs.length === 0 && /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedBox_default, {
        paddingLeft: 1,
        marginBottom: 1,
        flexShrink: 0,
        children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
          dimColor: true,
          italic: true,
          children: "No matching sessions found."
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      Boolean(searchQuery.trim()) && onAgenticSearch && isAgenticSearchEnabled && agenticSearchState.status !== "searching" && agenticSearchState.status !== "results" && agenticSearchState.status !== "error" && /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedBox_default, {
        flexShrink: 0,
        flexDirection: "column",
        children: [
          /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedBox_default, {
            flexDirection: "row",
            gap: 1,
            children: [
              /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
                color: isAgenticSearchOptionFocused ? "suggestion" : undefined,
                children: isAgenticSearchOptionFocused ? figures_default.pointer : " "
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
                color: isAgenticSearchOptionFocused ? "suggestion" : undefined,
                bold: isAgenticSearchOptionFocused,
                children: "Search deeply using MiMo \u2192"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedBox_default, {
            height: 1
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      agenticSearchState.status === "searching" ? null : viewMode === "rename" && focusedLog ? /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedBox_default, {
        paddingLeft: 2,
        flexDirection: "column",
        children: [
          /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
            bold: true,
            children: "Rename session:"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedBox_default, {
            paddingTop: 1,
            children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(TextInput, {
              value: renameValue,
              onChange: setRenameValue,
              onSubmit: handleRenameSubmit,
              placeholder: getLogDisplayTitle(focusedLog, "Enter new session name"),
              columns,
              cursorOffset: renameCursorOffset,
              onChangeCursorOffset: setRenameCursorOffset,
              showCursor: true
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this) : isResumeWithRenameEnabled ? /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(TreeSelect, {
        nodes: treeNodes,
        onSelect: (node) => {
          onSelect(node.value.log);
        },
        onFocus: handleTreeSelectFocus,
        onCancel,
        focusNodeId: focusedNode?.id,
        visibleOptionCount: visibleCount,
        layout: "expanded",
        isDisabled: viewMode === "search" || isAgenticSearchOptionFocused,
        hideIndexes: false,
        isNodeExpanded: (nodeId) => {
          if (viewMode === "search" || branchFilterEnabled) {
            return true;
          }
          const sessionId = typeof nodeId === "string" && nodeId.startsWith("group:") ? nodeId.substring(6) : null;
          return sessionId ? expandedGroupSessionIds.has(sessionId) : false;
        },
        onExpand: (nodeId) => {
          const sessionId = typeof nodeId === "string" && nodeId.startsWith("group:") ? nodeId.substring(6) : null;
          if (sessionId) {
            setExpandedGroupSessionIds((prev) => new Set(prev).add(sessionId));
            logEvent("tengu_session_group_expanded", {});
          }
        },
        onCollapse: (nodeId) => {
          const sessionId = typeof nodeId === "string" && nodeId.startsWith("group:") ? nodeId.substring(6) : null;
          if (sessionId) {
            setExpandedGroupSessionIds((prev) => {
              const newSet = new Set(prev);
              newSet.delete(sessionId);
              return newSet;
            });
          }
        },
        onUpFromFirstItem: enterSearchMode
      }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Select, {
        options: flatOptions,
        onChange: (value) => {
          const itemIndex = parseInt(value, 10);
          const log = displayedLogs[itemIndex];
          if (log) {
            onSelect(log);
          }
        },
        visibleOptionCount: visibleCount,
        onCancel,
        onFocus: handleFlatOptionsSelectFocus,
        defaultFocusValue: focusedNode?.id.toString(),
        layout: "expanded",
        isDisabled: viewMode === "search" || isAgenticSearchOptionFocused,
        onUpFromFirstItem: enterSearchMode
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedBox_default, {
        paddingLeft: 2,
        children: exitState.pending ? /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
          dimColor: true,
          children: [
            "Press ",
            exitState.keyName,
            " again to exit"
          ]
        }, undefined, true, undefined, this) : viewMode === "rename" ? /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
          dimColor: true,
          children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Byline, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(KeyboardShortcutHint, {
                shortcut: "Enter",
                action: "save"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ConfigurableShortcutHint, {
                action: "confirm:no",
                context: "Confirmation",
                fallback: "Esc",
                description: "cancel"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this) : agenticSearchState.status === "searching" ? /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
          dimColor: true,
          children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Byline, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
                children: "Searching with MiMo\u2026"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ConfigurableShortcutHint, {
                action: "confirm:no",
                context: "Confirmation",
                fallback: "Esc",
                description: "cancel"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this) : isAgenticSearchOptionFocused ? /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
          dimColor: true,
          children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Byline, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(KeyboardShortcutHint, {
                shortcut: "Enter",
                action: "search"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(KeyboardShortcutHint, {
                shortcut: "\u2193",
                action: "skip"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ConfigurableShortcutHint, {
                action: "confirm:no",
                context: "Confirmation",
                fallback: "Esc",
                description: "cancel"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this) : viewMode === "search" ? /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
          dimColor: true,
          children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Byline, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
                children: isSearching && isDeepSearchEnabled ? "Searching\u2026" : "Type to Search"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(KeyboardShortcutHint, {
                shortcut: "Enter",
                action: "select"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ConfigurableShortcutHint, {
                action: "confirm:no",
                context: "Confirmation",
                fallback: "Esc",
                description: "clear"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
          dimColor: true,
          children: /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(Byline, {
            children: [
              onToggleAllProjects && /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(KeyboardShortcutHint, {
                shortcut: "Ctrl+A",
                action: `show ${showAllProjects ? "current dir" : "all projects"}`
              }, undefined, false, undefined, this),
              currentBranch && /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(KeyboardShortcutHint, {
                shortcut: "Ctrl+B",
                action: "toggle branch"
              }, undefined, false, undefined, this),
              hasMultipleWorktrees && /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(KeyboardShortcutHint, {
                shortcut: "Ctrl+W",
                action: `show ${showAllWorktrees ? "current worktree" : "all worktrees"}`
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(KeyboardShortcutHint, {
                shortcut: "Ctrl+V",
                action: "preview"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(KeyboardShortcutHint, {
                shortcut: "Ctrl+R",
                action: "rename"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
                children: "Type to search"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ConfigurableShortcutHint, {
                action: "confirm:no",
                context: "Confirmation",
                fallback: "Esc",
                description: "cancel"
              }, undefined, false, undefined, this),
              getExpandCollapseHint() && /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
                children: getExpandCollapseHint()
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function extractSearchableText(message) {
  if (message.type !== "user" && message.type !== "assistant") {
    return "";
  }
  const content = "message" in message ? message.message?.content : undefined;
  if (!content)
    return "";
  if (typeof content === "string") {
    return content;
  }
  if (Array.isArray(content)) {
    return content.map((block) => {
      if (typeof block === "string")
        return block;
      if ("text" in block && typeof block.text === "string")
        return block.text;
      return "";
    }).filter(Boolean).join(" ");
  }
  return "";
}
function buildSearchableText(log) {
  const searchableMessages = log.messages.length <= DEEP_SEARCH_MAX_MESSAGES ? log.messages : [
    ...log.messages.slice(0, DEEP_SEARCH_CROP_SIZE),
    ...log.messages.slice(-DEEP_SEARCH_CROP_SIZE)
  ];
  const messageText = searchableMessages.map(extractSearchableText).filter(Boolean).join(" ");
  const metadata = [
    log.customTitle,
    log.summary,
    log.firstPrompt,
    log.gitBranch,
    log.tag,
    log.prNumber ? `PR #${log.prNumber}` : undefined,
    log.prRepository
  ].filter(Boolean).join(" ");
  const fullText = `${metadata} ${messageText}`.trim();
  return fullText.length > DEEP_SEARCH_MAX_TEXT_LENGTH ? fullText.slice(0, DEEP_SEARCH_MAX_TEXT_LENGTH) : fullText;
}
function groupLogsBySessionId(filteredLogs) {
  const groups = new Map;
  for (const log of filteredLogs) {
    const sessionId = getSessionIdFromLog(log);
    if (sessionId) {
      const existing = groups.get(sessionId);
      if (existing) {
        existing.push(log);
      } else {
        groups.set(sessionId, [log]);
      }
    }
  }
  groups.forEach((logs) => logs.sort((a, b) => new Date(b.modified).getTime() - new Date(a.modified).getTime()));
  return groups;
}
function getUniqueTags(logs) {
  const tags = new Set;
  for (const log of logs) {
    if (log.tag) {
      tags.add(log.tag);
    }
  }
  return Array.from(tags).sort((a, b) => a.localeCompare(b));
}
var import_react3, jsx_dev_runtime4, PARENT_PREFIX_WIDTH = 2, CHILD_PREFIX_WIDTH = 4, DEEP_SEARCH_MAX_MESSAGES = 2000, DEEP_SEARCH_CROP_SIZE = 1000, DEEP_SEARCH_MAX_TEXT_LENGTH = 50000, FUSE_THRESHOLD = 0.3, DATE_TIE_THRESHOLD_MS, SNIPPET_CONTEXT_CHARS = 50;
var init_LogSelector = __esm(() => {
  init_source();
  init_figures();
  init_fuse();
  init_state();
  init_useExitOnCtrlCDWithKeybindings();
  init_useSearchInput();
  init_useTerminalSize();
  init_src();
  init_useKeybinding();
  init_analytics();
  init_format();
  init_getWorktreePaths();
  init_git();
  init_log();
  init_sessionStorage();
  init_theme();
  init_ConfigurableShortcutHint();
  init_select();
  init_SearchBox();
  init_SessionPreview();
  init_Spinner();
  init_TagTabs();
  init_TextInput();
  init_TreeSelect();
  import_react3 = __toESM(require_react(), 1);
  jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
  DATE_TIE_THRESHOLD_MS = 60 * 1000;
});

// src/utils/agenticSessionSearch.ts
function extractMessageText(message) {
  if (message.type !== "user" && message.type !== "assistant") {
    return "";
  }
  const content = "message" in message ? message.message?.content : undefined;
  if (!content)
    return "";
  if (typeof content === "string") {
    return content;
  }
  if (Array.isArray(content)) {
    return content.map((block) => {
      if (typeof block === "string")
        return block;
      if ("text" in block && typeof block.text === "string")
        return block.text;
      return "";
    }).filter(Boolean).join(" ");
  }
  return "";
}
function extractTranscript(messages) {
  if (messages.length === 0)
    return "";
  const messagesToScan = messages.length <= MAX_MESSAGES_TO_SCAN ? messages : [
    ...messages.slice(0, MAX_MESSAGES_TO_SCAN / 2),
    ...messages.slice(-MAX_MESSAGES_TO_SCAN / 2)
  ];
  const text = messagesToScan.map(extractMessageText).filter(Boolean).join(" ").replace(/\s+/g, " ").trim();
  return text.length > MAX_TRANSCRIPT_CHARS ? text.slice(0, MAX_TRANSCRIPT_CHARS) + "\u2026" : text;
}
function logContainsQuery(log, queryLower) {
  const title = getLogDisplayTitle(log).toLowerCase();
  if (title.includes(queryLower))
    return true;
  if (log.customTitle?.toLowerCase().includes(queryLower))
    return true;
  if (log.tag?.toLowerCase().includes(queryLower))
    return true;
  if (log.gitBranch?.toLowerCase().includes(queryLower))
    return true;
  if (log.summary?.toLowerCase().includes(queryLower))
    return true;
  if (log.firstPrompt?.toLowerCase().includes(queryLower))
    return true;
  if (log.messages && log.messages.length > 0) {
    const transcript = extractTranscript(log.messages).toLowerCase();
    if (transcript.includes(queryLower))
      return true;
  }
  return false;
}
async function agenticSessionSearch(query, logs, signal) {
  if (!query.trim() || logs.length === 0) {
    return [];
  }
  const queryLower = query.toLowerCase();
  const matchingLogs = logs.filter((log) => logContainsQuery(log, queryLower));
  let logsToSearch;
  if (matchingLogs.length >= MAX_SESSIONS_TO_SEARCH) {
    logsToSearch = matchingLogs.slice(0, MAX_SESSIONS_TO_SEARCH);
  } else {
    const nonMatchingLogs = logs.filter((log) => !logContainsQuery(log, queryLower));
    const remainingSlots = MAX_SESSIONS_TO_SEARCH - matchingLogs.length;
    logsToSearch = [
      ...matchingLogs,
      ...nonMatchingLogs.slice(0, remainingSlots)
    ];
  }
  logForDebugging(`Agentic search: ${logsToSearch.length}/${logs.length} logs, query="${query}", ` + `matching: ${matchingLogs.length}, with messages: ${count(logsToSearch, (l) => l.messages?.length > 0)}`);
  const logsWithTranscriptsPromises = logsToSearch.map(async (log) => {
    if (isLiteLog(log)) {
      try {
        return await loadFullLog(log);
      } catch (error) {
        logError(error);
        return log;
      }
    }
    return log;
  });
  const logsWithTranscripts = await Promise.all(logsWithTranscriptsPromises);
  logForDebugging(`Agentic search: loaded ${count(logsWithTranscripts, (l) => l.messages?.length > 0)}/${logsToSearch.length} logs with transcripts`);
  const sessionList = logsWithTranscripts.map((log, index) => {
    const parts = [`${index}:`];
    const displayTitle = getLogDisplayTitle(log);
    parts.push(displayTitle);
    if (log.customTitle && log.customTitle !== displayTitle) {
      parts.push(`[custom title: ${log.customTitle}]`);
    }
    if (log.tag) {
      parts.push(`[tag: ${log.tag}]`);
    }
    if (log.gitBranch) {
      parts.push(`[branch: ${log.gitBranch}]`);
    }
    if (log.summary) {
      parts.push(`- Summary: ${log.summary}`);
    }
    if (log.firstPrompt && log.firstPrompt !== "No prompt") {
      parts.push(`- First message: ${log.firstPrompt.slice(0, 300)}`);
    }
    if (log.messages && log.messages.length > 0) {
      const transcript = extractTranscript(log.messages);
      if (transcript) {
        parts.push(`- Transcript: ${transcript}`);
      }
    }
    return parts.join(" ");
  }).join(`
`);
  const userMessage = `Sessions:
${sessionList}

Search query: "${query}"

Find the sessions that are most relevant to this query.`;
  logForDebugging(`Agentic search prompt (first 500 chars): ${userMessage.slice(0, 500)}...`);
  try {
    const model = getSmallFastModel();
    logForDebugging(`Agentic search using model: ${model}`);
    const response = await sideQuery({
      model,
      system: SESSION_SEARCH_SYSTEM_PROMPT,
      messages: [{ role: "user", content: userMessage }],
      signal,
      querySource: "session_search"
    });
    const textContent = response.content.find((block) => block.type === "text");
    if (!textContent || textContent.type !== "text") {
      logForDebugging("No text content in agentic search response");
      return [];
    }
    logForDebugging(`Agentic search response: ${textContent.text}`);
    const jsonMatch = textContent.text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      logForDebugging("Could not find JSON in agentic search response");
      return [];
    }
    const result = jsonParse(jsonMatch[0]);
    const relevantIndices = result.relevant_indices || [];
    const relevantLogs = relevantIndices.filter((index) => index >= 0 && index < logsWithTranscripts.length).map((index) => logsWithTranscripts[index]);
    logForDebugging(`Agentic search found ${relevantLogs.length} relevant sessions`);
    return relevantLogs;
  } catch (error) {
    logError(error);
    logForDebugging(`Agentic search error: ${error}`);
    return [];
  }
}
var MAX_TRANSCRIPT_CHARS = 2000, MAX_MESSAGES_TO_SCAN = 100, MAX_SESSIONS_TO_SEARCH = 100, SESSION_SEARCH_SYSTEM_PROMPT = `Your goal is to find relevant sessions based on a user's search query.

You will be given a list of sessions with their metadata and a search query. Identify which sessions are most relevant to the query.

Each session may include:
- Title (display name or custom title)
- Tag (user-assigned category, shown as [tag: name] - users tag sessions with /tag command to categorize them)
- Branch (git branch name, shown as [branch: name])
- Summary (AI-generated summary)
- First message (beginning of the conversation)
- Transcript (excerpt of conversation content)

IMPORTANT: Tags are user-assigned labels that indicate the session's topic or category. If the query matches a tag exactly or partially, those sessions should be highly prioritized.

For each session, consider (in order of priority):
1. Exact tag matches (highest priority - user explicitly categorized this session)
2. Partial tag matches or tag-related terms
3. Title matches (custom titles or first message content)
4. Branch name matches
5. Summary and transcript content matches
6. Semantic similarity and related concepts

CRITICAL: Be VERY inclusive in your matching. Include sessions that:
- Contain the query term anywhere in any field
- Are semantically related to the query (e.g., "testing" matches sessions about "tests", "unit tests", "QA", etc.)
- Discuss topics that could be related to the query
- Have transcripts that mention the concept even in passing

When in doubt, INCLUDE the session. It's better to return too many results than too few. The user can easily scan through results, but missing relevant sessions is frustrating.

Return sessions ordered by relevance (most relevant first). If truly no sessions have ANY connection to the query, return an empty array - but this should be rare.

Respond with ONLY the JSON object, no markdown formatting:
{"relevant_indices": [2, 5, 0]}`;
var init_agenticSessionSearch = __esm(() => {
  init_array();
  init_debug();
  init_log();
  init_model();
  init_sessionStorage();
  init_sideQuery();
  init_slowOperations();
});

// src/utils/crossProjectResume.ts
import { sep } from "path";
function checkCrossProjectResume(log, showAllProjects, worktreePaths) {
  const currentCwd = getOriginalCwd();
  if (!showAllProjects || !log.projectPath || log.projectPath === currentCwd) {
    return { isCrossProject: false };
  }
  if (process.env.USER_TYPE !== "ant") {
    const sessionId2 = getSessionIdFromLog(log);
    const command2 = `cd ${quote([log.projectPath])} && claude --resume ${sessionId2}`;
    return {
      isCrossProject: true,
      isSameRepoWorktree: false,
      command: command2,
      projectPath: log.projectPath
    };
  }
  const isSameRepo = worktreePaths.some((wt) => log.projectPath === wt || log.projectPath.startsWith(wt + sep));
  if (isSameRepo) {
    return {
      isCrossProject: true,
      isSameRepoWorktree: true,
      projectPath: log.projectPath
    };
  }
  const sessionId = getSessionIdFromLog(log);
  const command = `cd ${quote([log.projectPath])} && claude --resume ${sessionId}`;
  return {
    isCrossProject: true,
    isSameRepoWorktree: false,
    command,
    projectPath: log.projectPath
  };
}
var init_crossProjectResume = __esm(() => {
  init_state();
  init_shellQuote();
  init_sessionStorage();
});

export { LogSelector, init_LogSelector, agenticSessionSearch, init_agenticSessionSearch, checkCrossProjectResume, init_crossProjectResume };
