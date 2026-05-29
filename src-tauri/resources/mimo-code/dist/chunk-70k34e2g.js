// @bun
import {
  calculateLayoutDimensions,
  calculateOptimalLeftWidth,
  formatModelAndBilling,
  formatWelcomeMessage,
  getLayoutMode,
  getLogoDisplayData,
  getRecentActivitySync,
  getRecentReleaseNotesSync,
  init_logoV2Utils,
  truncatePath
} from "./chunk-y61nhd8m.js";
import {
  init_systemTheme,
  resolveThemeSetting
} from "./chunk-cnsj3vq2.js";
import {
  checkForReleaseNotesSync,
  init_releaseNotes
} from "./chunk-krd7atxb.js";
import {
  AGENT_DESCRIPTIONS_THRESHOLD,
  getAgentDescriptionsTotalTokens,
  init_statusNoticeHelpers
} from "./chunk-95sm06gp.js";
import {
  OverageCreditUpsell,
  createOverageCreditFeed,
  incrementOverageCreditUpsellSeenCount,
  init_OverageCreditUpsell,
  useShowOverageCreditUpsell
} from "./chunk-2stg2ast.js";
import {
  PromptInputFooterSuggestions_default,
  init_PromptInputFooterSuggestions
} from "./chunk-dmsj0t95.js";
import {
  ModalContext,
  init_modalContext
} from "./chunk-3rk983b5.js";
import {
  init_useMainLoopModel,
  useMainLoopModel
} from "./chunk-wmwjaw1a.js";
import {
  AssistantThinkingMessage,
  BACKGROUND_BASH_SUMMARY_PREFIX,
  EMPTY_STRING_SET,
  INTERRUPT_MESSAGE,
  INTERRUPT_MESSAGE_FOR_TOOL_USE,
  InVirtualListContext,
  MAX_MEMORY_CHARACTER_COUNT,
  Message,
  MessageActionsSelectedContext,
  OffscreenFreeze,
  SandboxManager,
  StreamingMarkdown,
  buildMessageLookups,
  collapseReadSearchGroups,
  createAssistantMessage,
  deriveUUID,
  exports_prompt as exports_prompt2,
  extractTag,
  findToolByName,
  getDisplayMessageFromCollapsed,
  getDumpPromptsPath,
  getEffortSuffix,
  getLargeMemoryFiles,
  getMcpConfigsByScope,
  getMemoryFiles,
  getMessagesAfterCompactBoundary,
  getProgressMessagesFromLookup,
  getSiblingToolUseIDsFromLookup,
  getTerminalIdeType,
  getToolSearchOrReadInfo,
  getToolUseID,
  getToolUseIDs,
  getToolUseIdsFromCollapsedGroup,
  hasAnyToolInProgress,
  hasThinkingContent,
  hasUnresolvedHooksFromLookup,
  hueToRgb,
  init_AppState,
  init_AssistantThinkingMessage,
  init_LocalShellTask,
  init_Markdown,
  init_Message,
  init_OffscreenFreeze,
  init_ThemedText,
  init_Tool,
  init_advisor,
  init_claudemd,
  init_collapseReadSearch,
  init_config as init_config2,
  init_dumpPrompts,
  init_effort,
  init_fullscreen,
  init_ide,
  init_installedPluginsManager,
  init_jetbrains,
  init_messageActions,
  init_messages1 as init_messages,
  init_prompt7 as init_prompt2,
  init_sandbox_adapter,
  init_useShortcutDisplay,
  init_useTerminalSize,
  init_utils1 as init_utils,
  isAdvisorBlock,
  isFullscreenEnvEnabled,
  isJetBrainsPluginInstalledCachedSync,
  isNavigableMessage,
  isNotEmptyMessage,
  isSupportedJetBrainsTerminal,
  loadInstalledPluginsV2,
  normalizeMessages,
  reorderMessagesInUI,
  shouldShowUserMessage,
  stripSystemReminders,
  toIDEDisplayName,
  toRGBColor,
  toolCallOf,
  useAppState,
  useShortcutDisplay
} from "./chunk-ktw919wt.js";
import {
  exports_proactive,
  init_proactive
} from "./chunk-chmfqs2y.js";
import {
  getBuiltinPlugins,
  init_builtinPlugins
} from "./chunk-0rstde44.js";
import {
  checkCachedPassesEligibility,
  formatCreditAmount,
  getCachedReferrerReward,
  getCachedRemainingPasses,
  init_referral
} from "./chunk-pfhyp451.js";
import {
  getSteps,
  incrementProjectOnboardingSeenCount,
  init_projectOnboardingState,
  shouldShowProjectOnboarding
} from "./chunk-25ctr1k2.js";
import {
  init_voiceModeEnabled,
  isVoiceModeEnabled
} from "./chunk-1r0yky0f.js";
import {
  init_browser,
  openBrowser,
  openPath
} from "./chunk-6dj3cf9s.js";
import {
  BLACK_CIRCLE,
  TEARDROP_ASTERISK,
  UP_ARROW,
  exports_prompt,
  getAnthropicApiKeyWithSource,
  getApiKeyFromConfigOrMacOSKeychain,
  getAuthTokenSource,
  getDisplayPath,
  getDynamicConfig_CACHED_MAY_BE_STALE,
  getGlobalConfig,
  getInitialSettings,
  init_auth,
  init_config1 as init_config,
  init_figures as init_figures2,
  init_file,
  init_growthbook,
  init_mimoRuntimeConfig,
  init_model,
  init_prompt1 as init_prompt,
  init_settings1 as init_settings,
  init_stringUtils,
  isClaudeAISubscriber,
  isMiMoRuntime,
  isOpus1mMergeEnabled,
  plural,
  renderModelSetting,
  saveGlobalConfig
} from "./chunk-1ghcng4e.js";
import {
  init_sleep,
  sleep
} from "./chunk-8g5pe1gr.js";
import {
  env,
  init_env
} from "./chunk-nw7v8w65.js";
import {
  formatNumber,
  formatRelativeTimeAgo,
  getStartupPerfLogPath,
  init_format,
  init_startupProfiler,
  isDetailedProfilingEnabled,
  truncate
} from "./chunk-x5hyyhqf.js";
import {
  Divider,
  ScrollBox_default,
  TextHoverColorContext,
  ThemedBox_default,
  ThemedText,
  color,
  init_source,
  init_src,
  instances_default,
  source_default,
  stringWidth,
  useAnimationFrame,
  useTerminalNotification,
  useTerminalSize
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
  getCwd,
  init_cwd
} from "./chunk-dxvkxgnf.js";
import {
  STATUS_TAG,
  SUMMARY_TAG,
  TASK_NOTIFICATION_TAG,
  init_xml
} from "./chunk-w5ahy59y.js";
import {
  figures_default,
  init_figures
} from "./chunk-qajrkk97.js";
import {
  getDebugLogPath,
  init_debug,
  isDebugMode,
  isDebugToStdErr,
  logForDebugging
} from "./chunk-rpbc3b7k.js";
import {
  getAllowedChannels,
  getHasDevChannels,
  getIsRemoteMode,
  init_state
} from "./chunk-j5xzpm59.js";
import {
  init_envUtils,
  isEnvTruthy
} from "./chunk-hxhwzgnn.js";
import {
  __esm,
  __export,
  __toCommonJS,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/context/promptOverlayContext.tsx
function PromptOverlayProvider({
  children
}) {
  const [data, setData] = import_react.useState(null);
  const [dialog, setDialog] = import_react.useState(null);
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(SetContext.Provider, {
    value: setData,
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(SetDialogContext.Provider, {
      value: setDialog,
      children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(DataContext.Provider, {
        value: data,
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(DialogContext.Provider, {
          value: dialog,
          children
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function usePromptOverlay() {
  return import_react.useContext(DataContext);
}
function usePromptOverlayDialog() {
  return import_react.useContext(DialogContext);
}
function useSetPromptOverlay(data) {
  const set = import_react.useContext(SetContext);
  import_react.useEffect(() => {
    if (!set)
      return;
    set(data);
    return () => set(null);
  }, [set, data]);
}
function useSetPromptOverlayDialog(node) {
  const set = import_react.useContext(SetDialogContext);
  import_react.useEffect(() => {
    if (!set)
      return;
    set(node);
    return () => set(null);
  }, [set, node]);
}
var import_react, jsx_dev_runtime, DataContext, SetContext, DialogContext, SetDialogContext;
var init_promptOverlayContext = __esm(() => {
  import_react = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
  DataContext = import_react.createContext(null);
  SetContext = import_react.createContext(null);
  DialogContext = import_react.createContext(null);
  SetDialogContext = import_react.createContext(null);
});

// src/components/messages/nullRenderingAttachments.ts
function isNullRenderingAttachment(msg) {
  return msg.type === "attachment" && NULL_RENDERING_ATTACHMENT_TYPES.has(msg.attachment.type);
}
var NULL_RENDERING_TYPES, NULL_RENDERING_ATTACHMENT_TYPES;
var init_nullRenderingAttachments = __esm(() => {
  NULL_RENDERING_TYPES = [
    "hook_success",
    "hook_additional_context",
    "hook_cancelled",
    "command_permissions",
    "agent_mention",
    "budget_usd",
    "critical_system_reminder",
    "edited_image_file",
    "edited_text_file",
    "opened_file_in_ide",
    "output_style",
    "plan_mode",
    "plan_mode_exit",
    "plan_mode_reentry",
    "structured_output",
    "team_context",
    "todo_reminder",
    "context_efficiency",
    "deferred_tools_delta",
    "mcp_instructions_delta",
    "companion_intro",
    "token_usage",
    "ultrathink_effort",
    "max_turns_reached",
    "task_reminder",
    "auto_mode",
    "auto_mode_exit",
    "output_token_usage",
    "verify_plan_reminder",
    "current_session_memory",
    "compaction_reminder",
    "date_change"
  ];
  NULL_RENDERING_ATTACHMENT_TYPES = new Set(NULL_RENDERING_TYPES);
});

// src/components/FullscreenLayout.tsx
import { fileURLToPath } from "url";
function useUnseenDivider(messageCount) {
  const [dividerIndex, setDividerIndex] = import_react2.useState(null);
  const countRef = import_react2.useRef(messageCount);
  countRef.current = messageCount;
  const dividerYRef = import_react2.useRef(null);
  const onRepin = import_react2.useCallback(() => {
    setDividerIndex(null);
  }, []);
  const onScrollAway = import_react2.useCallback((handle) => {
    const max = Math.max(0, handle.getScrollHeight() - handle.getViewportHeight());
    if (handle.getScrollTop() + handle.getPendingDelta() >= max)
      return;
    if (dividerYRef.current === null) {
      dividerYRef.current = handle.getScrollHeight();
      setDividerIndex(countRef.current);
    }
  }, []);
  const jumpToNew = import_react2.useCallback((handle) => {
    if (!handle)
      return;
    handle.scrollToBottom();
  }, []);
  import_react2.useEffect(() => {
    if (dividerIndex === null) {
      dividerYRef.current = null;
    } else if (messageCount < dividerIndex) {
      dividerYRef.current = null;
      setDividerIndex(null);
    }
  }, [messageCount, dividerIndex]);
  const shiftDivider = import_react2.useCallback((indexDelta, heightDelta) => {
    setDividerIndex((idx) => idx === null ? null : idx + indexDelta);
    if (dividerYRef.current !== null) {
      dividerYRef.current += heightDelta;
    }
  }, []);
  return {
    dividerIndex,
    dividerYRef,
    onScrollAway,
    onRepin,
    jumpToNew,
    shiftDivider
  };
}
function countUnseenAssistantTurns(messages, dividerIndex) {
  let count = 0;
  let prevWasAssistant = false;
  for (let i = dividerIndex;i < messages.length; i++) {
    const m = messages[i];
    if (m.type === "progress")
      continue;
    if (m.type === "assistant" && !assistantHasVisibleText(m))
      continue;
    const isAssistant = m.type === "assistant";
    if (isAssistant && !prevWasAssistant)
      count++;
    prevWasAssistant = isAssistant;
  }
  return count;
}
function assistantHasVisibleText(m) {
  if (m.type !== "assistant")
    return false;
  if (!Array.isArray(m.message.content))
    return false;
  for (const b of m.message.content) {
    if (typeof b !== "string" && b.type === "text" && b.text.trim() !== "")
      return true;
  }
  return false;
}
function computeUnseenDivider(messages, dividerIndex) {
  if (dividerIndex === null)
    return;
  let anchorIdx = dividerIndex;
  while (anchorIdx < messages.length && (messages[anchorIdx]?.type === "progress" || isNullRenderingAttachment(messages[anchorIdx]))) {
    anchorIdx++;
  }
  const uuid = messages[anchorIdx]?.uuid;
  if (!uuid)
    return;
  const count = countUnseenAssistantTurns(messages, dividerIndex);
  return { firstUnseenUuid: uuid, count: Math.max(1, count) };
}
function FullscreenLayout({
  scrollable,
  bottom,
  overlay,
  bottomFloat,
  modal,
  modalScrollRef,
  scrollRef,
  dividerYRef,
  hidePill = false,
  hideSticky = false,
  newMessageCount = 0,
  onPillClick
}) {
  const { rows: terminalRows, columns } = useTerminalSize();
  const [stickyPrompt, setStickyPrompt] = import_react2.useState(null);
  const chromeCtx = import_react2.useMemo(() => ({ setStickyPrompt }), []);
  const subscribe = import_react2.useCallback((listener) => scrollRef?.current?.subscribe(listener) ?? (() => {}), [scrollRef]);
  const pillVisible = import_react2.useSyncExternalStore(subscribe, () => {
    const s = scrollRef?.current;
    const dividerY = dividerYRef?.current;
    if (!s || dividerY == null)
      return false;
    return s.getScrollTop() + s.getPendingDelta() + s.getViewportHeight() < dividerY;
  });
  import_react2.useLayoutEffect(() => {
    if (!isFullscreenEnvEnabled())
      return;
    const ink = instances_default.get(process.stdout);
    if (!ink)
      return;
    ink.onHyperlinkClick = (url) => {
      if (url.startsWith("file:")) {
        try {
          openPath(fileURLToPath(url));
        } catch {}
      } else {
        openBrowser(url);
      }
    };
    return () => {
      ink.onHyperlinkClick = undefined;
    };
  }, []);
  if (isFullscreenEnvEnabled()) {
    const sticky = hideSticky ? null : stickyPrompt;
    const headerPrompt = sticky != null && sticky !== "clicked" && overlay == null ? sticky : null;
    const padCollapsed = sticky != null && overlay == null;
    return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(PromptOverlayProvider, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
          flexDirection: "row",
          flexGrow: 1,
          overflow: "hidden",
          width: "100%",
          children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            flexGrow: 1,
            width: columns,
            overflow: "hidden",
            children: [
              /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                flexGrow: 1,
                flexDirection: "column",
                overflow: "hidden",
                children: [
                  headerPrompt && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(StickyPromptHeader, {
                    text: headerPrompt.text,
                    onClick: headerPrompt.scrollTo
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ScrollBox_default, {
                    ref: scrollRef,
                    flexGrow: 1,
                    flexDirection: "column",
                    paddingTop: padCollapsed ? 0 : 1,
                    stickyScroll: true,
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ScrollChromeContext, {
                        value: chromeCtx,
                        children: scrollable
                      }, undefined, false, undefined, this),
                      overlay
                    ]
                  }, undefined, true, undefined, this),
                  !hidePill && pillVisible && overlay == null && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(NewMessagesPill, {
                    count: newMessageCount,
                    onClick: onPillClick
                  }, undefined, false, undefined, this),
                  bottomFloat != null && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    opaque: true,
                    children: bottomFloat
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                flexDirection: "column",
                flexShrink: 0,
                width: "100%",
                maxHeight: "50%",
                children: [
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(SuggestionsOverlay, {}, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(DialogOverlay, {}, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                    flexDirection: "column",
                    width: "100%",
                    flexGrow: 1,
                    overflowY: "hidden",
                    children: bottom
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this),
        modal != null && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ModalContext, {
          value: {
            rows: terminalRows - MODAL_TRANSCRIPT_PEEK - 1,
            columns: columns - 4,
            scrollRef: modalScrollRef ?? null
          },
          children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            maxHeight: terminalRows - MODAL_TRANSCRIPT_PEEK,
            flexDirection: "column",
            overflow: "hidden",
            opaque: true,
            children: [
              /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                flexShrink: 0,
                children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                  color: "permission",
                  children: "\u2594".repeat(columns)
                }, undefined, false, undefined, this)
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
                flexDirection: "column",
                paddingX: 2,
                flexShrink: 0,
                overflow: "hidden",
                children: modal
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(jsx_dev_runtime2.Fragment, {
    children: [
      scrollable,
      bottom,
      overlay,
      modal
    ]
  }, undefined, true, undefined, this);
}
function NewMessagesPill({ count, onClick }) {
  const [hover, setHover] = import_react2.useState(false);
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
      onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
        backgroundColor: hover ? "userMessageBackgroundHover" : "userMessageBackground",
        dimColor: true,
        children: [
          " ",
          count > 0 ? `${count} new ${plural(count, "message")}` : "Jump to bottom",
          " ",
          figures_default.arrowDown,
          " "
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function StickyPromptHeader({ text, onClick }) {
  const [hover, setHover] = import_react2.useState(false);
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
    flexShrink: 0,
    width: "100%",
    height: 1,
    paddingRight: 1,
    backgroundColor: hover ? "userMessageBackgroundHover" : "userMessageBackground",
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
      color: "subtle",
      wrap: "truncate-end",
      children: [
        figures_default.pointer,
        " ",
        text
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
function SuggestionsOverlay() {
  const data = usePromptOverlay();
  if (!data || data.suggestions.length === 0)
    return null;
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
    position: "absolute",
    bottom: "100%",
    left: 0,
    right: 0,
    paddingX: 2,
    paddingTop: 1,
    flexDirection: "column",
    opaque: true,
    children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(PromptInputFooterSuggestions_default, {
      suggestions: data.suggestions,
      selectedSuggestion: data.selectedSuggestion,
      maxColumnWidth: data.maxColumnWidth,
      overlay: true
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function DialogOverlay() {
  const node = usePromptOverlayDialog();
  if (!node)
    return null;
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
    position: "absolute",
    bottom: "100%",
    left: 0,
    right: 0,
    opaque: true,
    children: node
  }, undefined, false, undefined, this);
}
var import_react2, jsx_dev_runtime2, MODAL_TRANSCRIPT_PEEK = 2, ScrollChromeContext;
var init_FullscreenLayout = __esm(() => {
  init_figures();
  init_modalContext();
  init_promptOverlayContext();
  init_useTerminalSize();
  init_src();
  init_browser();
  init_fullscreen();
  init_stringUtils();
  init_nullRenderingAttachments();
  init_PromptInputFooterSuggestions();
  import_react2 = __toESM(require_react(), 1);
  jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
  ScrollChromeContext = import_react2.createContext({ setStickyPrompt: () => {} });
});

// src/utils/set.ts
function every(a, b) {
  for (const item of a) {
    if (!b.has(item)) {
      return false;
    }
  }
  return true;
}
var init_set = () => {};

// src/utils/collapseBackgroundBashNotifications.ts
function isCompletedBackgroundBash(msg) {
  if (msg.type !== "user")
    return false;
  const content0 = Array.isArray(msg.message.content) ? msg.message.content[0] : undefined;
  if (!content0 || typeof content0 === "string" || content0?.type !== "text")
    return false;
  if (!content0.text.includes(`<${TASK_NOTIFICATION_TAG}`))
    return false;
  if (extractTag(content0.text, STATUS_TAG) !== "completed")
    return false;
  return extractTag(content0.text, SUMMARY_TAG)?.startsWith(BACKGROUND_BASH_SUMMARY_PREFIX) ?? false;
}
function collapseBackgroundBashNotifications(messages, verbose) {
  if (!isFullscreenEnvEnabled())
    return messages;
  if (verbose)
    return messages;
  const result = [];
  let i = 0;
  while (i < messages.length) {
    const msg = messages[i];
    if (isCompletedBackgroundBash(msg)) {
      let count = 0;
      while (i < messages.length && isCompletedBackgroundBash(messages[i])) {
        count++;
        i++;
      }
      if (count === 1) {
        result.push(msg);
      } else {
        result.push({
          ...msg,
          message: {
            role: "user",
            content: [
              {
                type: "text",
                text: `<${TASK_NOTIFICATION_TAG}><${STATUS_TAG}>completed</${STATUS_TAG}><${SUMMARY_TAG}>${count} background commands completed</${SUMMARY_TAG}></${TASK_NOTIFICATION_TAG}>`
              }
            ]
          }
        });
      }
    } else {
      result.push(msg);
      i++;
    }
  }
  return result;
}
var init_collapseBackgroundBashNotifications = __esm(() => {
  init_xml();
  init_LocalShellTask();
  init_fullscreen();
  init_messages();
});

// src/utils/collapseHookSummaries.ts
function isLabeledHookSummary(msg) {
  return msg.type === "system" && msg.subtype === "stop_hook_summary" && msg.hookLabel !== undefined;
}
function collapseHookSummaries(messages) {
  const result = [];
  let i = 0;
  while (i < messages.length) {
    const msg = messages[i];
    if (isLabeledHookSummary(msg)) {
      const label = msg.hookLabel;
      const group = [];
      while (i < messages.length) {
        const next = messages[i];
        if (!isLabeledHookSummary(next) || next.hookLabel !== label)
          break;
        group.push(next);
        i++;
      }
      if (group.length === 1) {
        result.push(msg);
      } else {
        result.push({
          ...msg,
          hookCount: group.reduce((sum, m) => sum + m.hookCount, 0),
          hookInfos: group.flatMap((m) => m.hookInfos),
          hookErrors: group.flatMap((m) => m.hookErrors),
          preventedContinuation: group.some((m) => m.preventedContinuation),
          hasOutput: group.some((m) => m.hasOutput),
          totalDurationMs: Math.max(...group.map((m) => m.totalDurationMs ?? 0))
        });
      }
    } else {
      result.push(msg);
      i++;
    }
  }
  return result;
}
var init_collapseHookSummaries = () => {};

// src/utils/collapseTeammateShutdowns.ts
function isTeammateShutdownAttachment(msg) {
  return msg.type === "attachment" && msg.attachment.type === "task_status" && msg.attachment.taskType === "in_process_teammate" && msg.attachment.status === "completed";
}
function collapseTeammateShutdowns(messages) {
  const result = [];
  let i = 0;
  while (i < messages.length) {
    const msg = messages[i];
    if (isTeammateShutdownAttachment(msg)) {
      let count = 0;
      while (i < messages.length && isTeammateShutdownAttachment(messages[i])) {
        count++;
        i++;
      }
      if (count === 1) {
        result.push(msg);
      } else {
        result.push({
          type: "attachment",
          uuid: msg.uuid,
          timestamp: msg.timestamp,
          attachment: {
            type: "teammate_shutdown_batch",
            count
          }
        });
      }
    } else {
      result.push(msg);
      i++;
    }
  }
  return result;
}
var init_collapseTeammateShutdowns = () => {};

// src/utils/groupToolUses.ts
function getToolsWithGrouping(tools) {
  let cached = GROUPING_CACHE.get(tools);
  if (!cached) {
    cached = new Set(tools.filter((t) => t.renderGroupedToolUse).map((t) => t.name));
    GROUPING_CACHE.set(tools, cached);
  }
  return cached;
}
function getToolUseInfo(msg) {
  if (msg.type === "assistant" && msg.message?.content && Array.isArray(msg.message.content) && msg.message.content[0]?.type === "tool_use") {
    const content = msg.message.content[0];
    return {
      messageId: msg.message.id,
      toolUseId: content.id,
      toolName: content.name
    };
  }
  return null;
}
function applyGrouping(messages, tools, verbose = false) {
  if (verbose) {
    return {
      messages
    };
  }
  const toolsWithGrouping = getToolsWithGrouping(tools);
  const groups = new Map;
  for (const msg of messages) {
    const info = getToolUseInfo(msg);
    if (info && toolsWithGrouping.has(info.toolName)) {
      const key = `${info.messageId}:${info.toolName}`;
      const group = groups.get(key) ?? [];
      group.push(msg);
      groups.set(key, group);
    }
  }
  const validGroups = new Map;
  const groupedToolUseIds = new Set;
  for (const [key, group] of groups) {
    if (group.length >= 2) {
      validGroups.set(key, group);
      for (const msg of group) {
        const info = getToolUseInfo(msg);
        if (info) {
          groupedToolUseIds.add(info.toolUseId);
        }
      }
    }
  }
  const resultsByToolUseId = new Map;
  for (const msg of messages) {
    if (msg.type === "user" && msg.message?.content && Array.isArray(msg.message.content)) {
      for (const content of msg.message.content) {
        if (content.type === "tool_result" && groupedToolUseIds.has(content.tool_use_id)) {
          resultsByToolUseId.set(content.tool_use_id, msg);
        }
      }
    }
  }
  const result = [];
  const emittedGroups = new Set;
  for (const msg of messages) {
    const info = getToolUseInfo(msg);
    if (info) {
      const key = `${info.messageId}:${info.toolName}`;
      const group = validGroups.get(key);
      if (group) {
        if (!emittedGroups.has(key)) {
          emittedGroups.add(key);
          const firstMsg = group[0];
          const results = [];
          for (const assistantMsg of group) {
            const toolUseId = assistantMsg.message.content[0].id;
            const resultMsg = resultsByToolUseId.get(toolUseId);
            if (resultMsg) {
              results.push(resultMsg);
            }
          }
          const groupedMessage = {
            type: "grouped_tool_use",
            toolName: info.toolName,
            messages: group,
            results,
            displayMessage: firstMsg,
            uuid: `grouped-${firstMsg.uuid}`,
            timestamp: firstMsg.timestamp,
            messageId: info.messageId
          };
          result.push(groupedMessage);
        }
        continue;
      }
    }
    if (msg.type === "user" && msg.message?.content && Array.isArray(msg.message.content)) {
      const toolResults = msg.message.content.filter((c) => c.type === "tool_result");
      if (toolResults.length > 0) {
        const allGrouped = toolResults.every((tr) => groupedToolUseIds.has(tr.tool_use_id));
        if (allGrouped) {
          continue;
        }
      }
    }
    result.push(msg);
  }
  return { messages: result };
}
var GROUPING_CACHE;
var init_groupToolUses = __esm(() => {
  GROUPING_CACHE = new WeakMap;
});

// src/utils/transcriptSearch.ts
function renderableSearchText(msg) {
  const cached = searchTextCache.get(msg);
  if (cached !== undefined)
    return cached;
  const result = computeSearchText(msg).toLowerCase();
  searchTextCache.set(msg, result);
  return result;
}
function computeSearchText(msg) {
  let raw = "";
  switch (msg.type) {
    case "user": {
      const c = msg.message.content;
      if (typeof c === "string") {
        raw = RENDERED_AS_SENTINEL.has(c) ? "" : c;
      } else {
        const parts = [];
        for (const b of c ?? []) {
          if (b.type === "text") {
            if (!RENDERED_AS_SENTINEL.has(b.text))
              parts.push(b.text);
          } else if (b.type === "tool_result") {
            parts.push(toolResultSearchText(msg.toolUseResult));
          }
        }
        raw = parts.join(`
`);
      }
      break;
    }
    case "assistant": {
      const c = msg.message.content;
      if (Array.isArray(c)) {
        raw = c.flatMap((b) => {
          if (b.type === "text")
            return [b.text];
          if (b.type === "tool_use")
            return [toolUseSearchText(b.input)];
          return [];
        }).join(`
`);
      }
      break;
    }
    case "attachment": {
      if (msg.attachment.type === "relevant_memories") {
        raw = (msg.attachment.memories ?? []).map((m) => m.content).join(`
`);
      } else if (msg.attachment.type === "queued_command" && msg.attachment.commandMode !== "task-notification" && !msg.attachment.isMeta) {
        const p = msg.attachment.prompt;
        raw = typeof p === "string" ? p : p.flatMap((b) => b.type === "text" ? [b.text] : []).join(`
`);
      }
      break;
    }
    case "collapsed_read_search": {
      if (msg.relevantMemories) {
        raw = msg.relevantMemories.map((m) => m.content).join(`
`);
      }
      break;
    }
    default:
      break;
  }
  let t = raw;
  let open = t.indexOf("<system-reminder>");
  while (open >= 0) {
    const close = t.indexOf(SYSTEM_REMINDER_CLOSE, open);
    if (close < 0)
      break;
    t = t.slice(0, open) + t.slice(close + SYSTEM_REMINDER_CLOSE.length);
    open = t.indexOf("<system-reminder>");
  }
  return t;
}
function toolUseSearchText(input) {
  if (!input || typeof input !== "object")
    return "";
  const o = input;
  const parts = [];
  for (const k of [
    "command",
    "pattern",
    "file_path",
    "path",
    "prompt",
    "description",
    "query",
    "url",
    "skill"
  ]) {
    const v = o[k];
    if (typeof v === "string")
      parts.push(v);
  }
  for (const k of ["args", "files"]) {
    const v = o[k];
    if (Array.isArray(v) && v.every((x) => typeof x === "string")) {
      parts.push(v.join(" "));
    }
  }
  return parts.join(`
`);
}
function toolResultSearchText(r) {
  if (!r || typeof r !== "object")
    return typeof r === "string" ? r : "";
  const o = r;
  if (typeof o.stdout === "string") {
    const err = typeof o.stderr === "string" ? o.stderr : "";
    return o.stdout + (err ? `
` + err : "");
  }
  if (o.file && typeof o.file === "object" && typeof o.file.content === "string") {
    return o.file.content;
  }
  const parts = [];
  for (const k of ["content", "output", "result", "text", "message"]) {
    const v = o[k];
    if (typeof v === "string")
      parts.push(v);
  }
  for (const k of ["filenames", "lines", "results"]) {
    const v = o[k];
    if (Array.isArray(v) && v.every((x) => typeof x === "string")) {
      parts.push(v.join(`
`));
    }
  }
  return parts.join(`
`);
}
var SYSTEM_REMINDER_CLOSE = "</system-reminder>", RENDERED_AS_SENTINEL, searchTextCache;
var init_transcriptSearch = __esm(() => {
  init_messages();
  RENDERED_AS_SENTINEL = new Set([
    INTERRUPT_MESSAGE,
    INTERRUPT_MESSAGE_FOR_TOOL_USE
  ]);
  searchTextCache = new WeakMap;
});

// src/components/LogoV2/Clawd.tsx
function Clawd({ pose = "default" } = {}) {
  if (isMiMoRuntime()) {
    return /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      children: [
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
          color: "claude",
          children: "  __  __ _ __  __  ___  "
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
          color: "claude",
          children: " |  \\/  (_)  \\/  |/ _ \\ "
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
          color: "claude",
          children: " | |\\/| | | |\\/| | | | |"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
          color: "claude",
          children: " | |  | | | |  | | |_| |"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
          color: "claude",
          children: " |_|  |_|_|_|  |_|\\___/ "
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  if (env.terminal === "Apple_Terminal") {
    return /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(AppleTerminalClawd, {
      pose
    }, undefined, false, undefined, this);
  }
  const p = POSES[pose];
  return /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    children: [
      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
        children: [
          /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            color: "clawd_body",
            children: p.r1L
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            color: "clawd_body",
            backgroundColor: "clawd_background",
            children: p.r1E
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            color: "clawd_body",
            children: p.r1R
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
        children: [
          /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            color: "clawd_body",
            children: p.r2L
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            color: "clawd_body",
            backgroundColor: "clawd_background",
            children: "\u2588\u2588\u2588\u2588\u2588"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            color: "clawd_body",
            children: p.r2R
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
        color: "clawd_body",
        children: [
          "  ",
          "\u2598\u2598 \u259D\u259D",
          "  "
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function AppleTerminalClawd({ pose }) {
  return /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    alignItems: "center",
    children: [
      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
        children: [
          /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            color: "clawd_body",
            children: "\u2597"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            color: "clawd_background",
            backgroundColor: "clawd_body",
            children: APPLE_EYES[pose]
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
            color: "clawd_body",
            children: "\u2596"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
        backgroundColor: "clawd_body",
        children: " ".repeat(7)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
        color: "clawd_body",
        children: "\u2598\u2598 \u259D\u259D"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var jsx_dev_runtime3, POSES, APPLE_EYES;
var init_Clawd = __esm(() => {
  init_src();
  init_env();
  init_mimoRuntimeConfig();
  jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
  POSES = {
    default: { r1L: " \u2590", r1E: "\u259B\u2588\u2588\u2588\u259C", r1R: "\u258C", r2L: "\u259D\u259C", r2R: "\u259B\u2598" },
    "look-left": { r1L: " \u2590", r1E: "\u259F\u2588\u2588\u2588\u259F", r1R: "\u258C", r2L: "\u259D\u259C", r2R: "\u259B\u2598" },
    "look-right": { r1L: " \u2590", r1E: "\u2599\u2588\u2588\u2588\u2599", r1R: "\u258C", r2L: "\u259D\u259C", r2R: "\u259B\u2598" },
    "arms-up": { r1L: "\u2597\u259F", r1E: "\u259B\u2588\u2588\u2588\u259C", r1R: "\u2599\u2596", r2L: " \u259C", r2R: "\u259B " }
  };
  APPLE_EYES = {
    default: " \u2597   \u2596 ",
    "look-left": " \u2598   \u2598 ",
    "look-right": " \u259D   \u259D ",
    "arms-up": " \u2597   \u2596 "
  };
});

// src/components/LogoV2/Feed.tsx
function calculateFeedWidth(config) {
  const { title, lines, footer, emptyMessage, customContent } = config;
  let maxWidth = stringWidth(title);
  if (customContent !== undefined) {
    maxWidth = Math.max(maxWidth, customContent.width);
  } else if (lines.length === 0 && emptyMessage) {
    maxWidth = Math.max(maxWidth, stringWidth(emptyMessage));
  } else {
    const gap = "  ";
    const maxTimestampWidth = Math.max(0, ...lines.map((line) => line.timestamp ? stringWidth(line.timestamp) : 0));
    for (const line of lines) {
      const timestampWidth = maxTimestampWidth > 0 ? maxTimestampWidth : 0;
      const lineWidth = stringWidth(line.text) + (timestampWidth > 0 ? timestampWidth + gap.length : 0);
      maxWidth = Math.max(maxWidth, lineWidth);
    }
  }
  if (footer) {
    maxWidth = Math.max(maxWidth, stringWidth(footer));
  }
  return maxWidth;
}
function Feed({ config, actualWidth }) {
  const { title, lines, footer, emptyMessage, customContent } = config;
  const gap = "  ";
  const maxTimestampWidth = Math.max(0, ...lines.map((line) => line.timestamp ? stringWidth(line.timestamp) : 0));
  return /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    width: actualWidth,
    children: [
      /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
        bold: true,
        color: "claude",
        children: title
      }, undefined, false, undefined, this),
      customContent ? /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(jsx_dev_runtime4.Fragment, {
        children: [
          customContent.content,
          footer && /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
            dimColor: true,
            italic: true,
            children: truncate(footer, actualWidth)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this) : lines.length === 0 && emptyMessage ? /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
        dimColor: true,
        children: truncate(emptyMessage, actualWidth)
      }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(jsx_dev_runtime4.Fragment, {
        children: [
          lines.map((line, index) => {
            const textWidth = Math.max(10, actualWidth - (maxTimestampWidth > 0 ? maxTimestampWidth + gap.length : 0));
            return /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
              children: [
                maxTimestampWidth > 0 && /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(jsx_dev_runtime4.Fragment, {
                  children: [
                    /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
                      dimColor: true,
                      children: (line.timestamp || "").padEnd(maxTimestampWidth)
                    }, undefined, false, undefined, this),
                    gap
                  ]
                }, undefined, true, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
                  children: truncate(line.text, textWidth)
                }, undefined, false, undefined, this)
              ]
            }, index, true, undefined, this);
          }),
          footer && /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
            dimColor: true,
            italic: true,
            children: truncate(footer, actualWidth)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var jsx_dev_runtime4;
var init_Feed = __esm(() => {
  init_src();
  init_format();
  jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/LogoV2/FeedColumn.tsx
function FeedColumn({
  feeds,
  maxWidth
}) {
  const feedWidths = feeds.map((feed) => calculateFeedWidth(feed));
  const maxOfAllFeeds = Math.max(...feedWidths);
  const actualWidth = Math.min(maxOfAllFeeds, maxWidth);
  return /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    children: feeds.map((feed, index) => /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(React3.Fragment, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Feed, {
          config: feed,
          actualWidth
        }, undefined, false, undefined, this),
        index < feeds.length - 1 && /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(Divider, {
          color: "claude",
          width: actualWidth
        }, undefined, false, undefined, this)
      ]
    }, index, true, undefined, this))
  }, undefined, false, undefined, this);
}
var React3, jsx_dev_runtime5;
var init_FeedColumn = __esm(() => {
  init_src();
  init_src();
  init_Feed();
  React3 = __toESM(require_react(), 1);
  jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/LogoV2/feedConfigs.tsx
import { homedir } from "os";
function createRecentActivityFeed(activities) {
  const lines = activities.map((log) => {
    const time = formatRelativeTimeAgo(log.modified);
    const description = log.summary && log.summary !== "No prompt" ? log.summary : log.firstPrompt;
    return {
      text: description || "",
      timestamp: time
    };
  });
  return {
    title: "Recent activity",
    lines,
    footer: lines.length > 0 ? "/resume for more" : undefined,
    emptyMessage: "No recent activity"
  };
}
function createWhatsNewFeed(releaseNotes) {
  const lines = releaseNotes.map((note) => {
    if (process.env.USER_TYPE === "ant") {
      const match = note.match(/^(\d+\s+\w+\s+ago)\s+(.+)$/);
      if (match) {
        return {
          timestamp: match[1],
          text: match[2] || ""
        };
      }
    }
    return {
      text: note
    };
  });
  const emptyMessage = process.env.USER_TYPE === "ant" ? "Unable to fetch latest claude-cli-internal commits" : "Check the MiMo Code changelog for updates";
  return {
    title: process.env.USER_TYPE === "ant" ? "What's new [ANT-ONLY: Latest CC commits]" : "What's new",
    lines,
    footer: lines.length > 0 ? "/release-notes for more" : undefined,
    emptyMessage
  };
}
function createProjectOnboardingFeed(steps) {
  const enabledSteps = steps.filter(({ isEnabled }) => isEnabled).sort((a, b) => Number(a.isComplete) - Number(b.isComplete));
  const lines = enabledSteps.map(({ text, isComplete }) => {
    const checkmark = isComplete ? `${figures_default.tick} ` : "";
    return {
      text: `${checkmark}${text}`
    };
  });
  const warningText = getCwd() === homedir() ? "Note: You have launched claude in your home directory. For the best experience, launch it in a project directory instead." : undefined;
  if (warningText) {
    lines.push({
      text: warningText
    });
  }
  return {
    title: "Tips for getting started",
    lines
  };
}
function createGuestPassesFeed() {
  const reward = getCachedReferrerReward();
  const subtitle = reward ? `Share MiMo Code and earn ${formatCreditAmount(reward)} of extra usage` : "Share MiMo Code with friends";
  return {
    title: "3 guest passes",
    lines: [],
    customContent: {
      content: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(jsx_dev_runtime6.Fragment, {
        children: [
          /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
            marginY: 1,
            children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
              color: "claude",
              children: "[\u273B] [\u273B] [\u273B]"
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
            dimColor: true,
            children: subtitle
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      width: 48
    },
    footer: "/passes"
  };
}
var jsx_dev_runtime6;
var init_feedConfigs = __esm(() => {
  init_figures();
  init_src();
  init_referral();
  init_cwd();
  init_format();
  jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/LogoV2/AnimatedClawd.tsx
function hold(pose, offset, frames) {
  return Array.from({ length: frames }, () => ({ pose, offset }));
}
function AnimatedClawd() {
  const { pose, bounceOffset, onClick } = useClawdAnimation();
  return /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedBox_default, {
    height: CLAWD_HEIGHT,
    flexDirection: "column",
    onClick,
    children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedBox_default, {
      marginTop: bounceOffset,
      flexShrink: 0,
      children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Clawd, {
        pose
      }, undefined, false, undefined, this)
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function useClawdAnimation() {
  const [reducedMotion] = import_react3.useState(() => getInitialSettings().prefersReducedMotion ?? false);
  const [frameIndex, setFrameIndex] = import_react3.useState(-1);
  const sequenceRef = import_react3.useRef(JUMP_WAVE);
  const onClick = () => {
    if (reducedMotion || frameIndex !== -1)
      return;
    sequenceRef.current = CLICK_ANIMATIONS[Math.floor(Math.random() * CLICK_ANIMATIONS.length)];
    setFrameIndex(0);
  };
  import_react3.useEffect(() => {
    if (frameIndex === -1)
      return;
    if (frameIndex >= sequenceRef.current.length) {
      setFrameIndex(-1);
      return;
    }
    const timer = setTimeout(setFrameIndex, FRAME_MS, incrementFrame);
    return () => clearTimeout(timer);
  }, [frameIndex]);
  const seq = sequenceRef.current;
  const current = frameIndex >= 0 && frameIndex < seq.length ? seq[frameIndex] : IDLE;
  return { pose: current.pose, bounceOffset: current.offset, onClick };
}
var import_react3, jsx_dev_runtime7, JUMP_WAVE, LOOK_AROUND, CLICK_ANIMATIONS, IDLE, FRAME_MS = 60, incrementFrame = (i) => i + 1, CLAWD_HEIGHT = 3;
var init_AnimatedClawd = __esm(() => {
  init_src();
  init_settings();
  init_Clawd();
  import_react3 = __toESM(require_react(), 1);
  jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
  JUMP_WAVE = [
    ...hold("default", 1, 2),
    ...hold("arms-up", 0, 3),
    ...hold("default", 0, 1),
    ...hold("default", 1, 2),
    ...hold("arms-up", 0, 3),
    ...hold("default", 0, 1)
  ];
  LOOK_AROUND = [
    ...hold("look-right", 0, 5),
    ...hold("look-left", 0, 5),
    ...hold("default", 0, 1)
  ];
  CLICK_ANIMATIONS = [JUMP_WAVE, LOOK_AROUND];
  IDLE = { pose: "default", offset: 0 };
});

// src/components/LogoV2/GuestPassesUpsell.tsx
function resetIfPassesRefreshed() {
  const remaining = getCachedRemainingPasses();
  if (remaining == null || remaining <= 0)
    return;
  const config = getGlobalConfig();
  const lastSeen = config.passesLastSeenRemaining ?? 0;
  if (remaining > lastSeen) {
    saveGlobalConfig((prev) => ({
      ...prev,
      passesUpsellSeenCount: 0,
      hasVisitedPasses: false,
      passesLastSeenRemaining: remaining
    }));
  }
}
function shouldShowGuestPassesUpsell() {
  const { eligible, hasCache } = checkCachedPassesEligibility();
  if (!eligible || !hasCache)
    return false;
  resetIfPassesRefreshed();
  const config = getGlobalConfig();
  if ((config.passesUpsellSeenCount ?? 0) >= 3)
    return false;
  if (config.hasVisitedPasses)
    return false;
  return true;
}
function useShowGuestPassesUpsell() {
  const [show] = import_react4.useState(() => shouldShowGuestPassesUpsell());
  return show;
}
function incrementGuestPassesSeenCount() {
  let newCount = 0;
  saveGlobalConfig((prev) => {
    newCount = (prev.passesUpsellSeenCount ?? 0) + 1;
    return {
      ...prev,
      passesUpsellSeenCount: newCount
    };
  });
  logEvent("tengu_guest_passes_upsell_shown", {
    seen_count: newCount
  });
}
function GuestPassesUpsell() {
  const reward = getCachedReferrerReward();
  return /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
    dimColor: true,
    children: [
      /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
        color: "claude",
        children: "[\u273B]"
      }, undefined, false, undefined, this),
      " ",
      /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
        color: "claude",
        children: "[\u273B]"
      }, undefined, false, undefined, this),
      " ",
      /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
        color: "claude",
        children: "[\u273B]"
      }, undefined, false, undefined, this),
      " \xB7",
      " ",
      reward ? `Share MiMo Code and earn ${formatCreditAmount(reward)} of extra usage \xB7 /passes` : "3 guest passes at /passes"
    ]
  }, undefined, true, undefined, this);
}
var import_react4, jsx_dev_runtime8;
var init_GuestPassesUpsell = __esm(() => {
  init_src();
  init_analytics();
  init_referral();
  init_config();
  import_react4 = __toESM(require_react(), 1);
  jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/LogoV2/CondensedLogo.tsx
function CondensedLogo() {
  const { columns } = useTerminalSize();
  const agent = useAppState((s) => s.agent);
  const effortValue = useAppState((s) => s.effortValue);
  const model = useMainLoopModel();
  const modelDisplayName = renderModelSetting(model);
  const { version, cwd, billingType, agentName: agentNameFromSettings } = getLogoDisplayData();
  const agentName = agent ?? agentNameFromSettings;
  const showGuestPassesUpsell = useShowGuestPassesUpsell();
  const showOverageCreditUpsell = useShowOverageCreditUpsell();
  import_react5.useEffect(() => {
    if (showGuestPassesUpsell) {
      incrementGuestPassesSeenCount();
    }
  }, [showGuestPassesUpsell]);
  import_react5.useEffect(() => {
    if (showOverageCreditUpsell && !showGuestPassesUpsell) {
      incrementOverageCreditUpsellSeenCount();
    }
  }, [showOverageCreditUpsell, showGuestPassesUpsell]);
  const textWidth = Math.max(columns - 15, 20);
  const versionPrefix = "MiMo Code v";
  const truncatedVersion = truncate(version, Math.max(textWidth - versionPrefix.length, 6));
  const effortSuffix = getEffortSuffix(model, effortValue);
  const { shouldSplit, truncatedModel, truncatedBilling } = formatModelAndBilling(modelDisplayName + effortSuffix, billingType, textWidth);
  const separator = " \xB7 ";
  const atPrefix = "@";
  const cwdAvailableWidth = agentName ? textWidth - atPrefix.length - stringWidth(agentName) - separator.length : textWidth;
  const truncatedCwd = truncatePath(cwd, Math.max(cwdAvailableWidth, 10));
  return /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(OffscreenFreeze, {
    children: /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ThemedBox_default, {
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      children: [
        isFullscreenEnvEnabled() ? /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(AnimatedClawd, {}, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Clawd, {}, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ThemedBox_default, {
          flexDirection: "column",
          children: [
            /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ThemedText, {
              children: [
                /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ThemedText, {
                  bold: true,
                  children: "MiMo Code"
                }, undefined, false, undefined, this),
                " ",
                /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ThemedText, {
                  dimColor: true,
                  children: [
                    "v",
                    truncatedVersion
                  ]
                }, undefined, true, undefined, this)
              ]
            }, undefined, true, undefined, this),
            shouldSplit ? /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(jsx_dev_runtime9.Fragment, {
              children: [
                /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ThemedText, {
                  dimColor: true,
                  children: truncatedModel
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ThemedText, {
                  dimColor: true,
                  children: truncatedBilling
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ThemedText, {
              dimColor: true,
              children: [
                truncatedModel,
                " \xB7 ",
                truncatedBilling
              ]
            }, undefined, true, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ThemedText, {
              dimColor: true,
              children: agentName ? `@${agentName} \xB7 ${truncatedCwd}` : truncatedCwd
            }, undefined, false, undefined, this),
            showGuestPassesUpsell && /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(GuestPassesUpsell, {}, undefined, false, undefined, this),
            !showGuestPassesUpsell && showOverageCreditUpsell && /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(OverageCreditUpsell, {
              maxWidth: textWidth,
              twoLine: true
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
var import_react5, jsx_dev_runtime9;
var init_CondensedLogo = __esm(() => {
  init_useMainLoopModel();
  init_useTerminalSize();
  init_src();
  init_AppState();
  init_effort();
  init_format();
  init_fullscreen();
  init_logoV2Utils();
  init_model();
  init_OffscreenFreeze();
  init_AnimatedClawd();
  init_Clawd();
  init_GuestPassesUpsell();
  init_OverageCreditUpsell();
  import_react5 = __toESM(require_react(), 1);
  jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/LogoV2/EmergencyTip.tsx
function EmergencyTip() {
  const tip = import_react6.useMemo(getTipOfFeed, []);
  const lastShownTip = import_react6.useMemo(() => getGlobalConfig().lastShownEmergencyTip, []);
  const shouldShow = tip.tip && tip.tip !== lastShownTip;
  import_react6.useEffect(() => {
    if (shouldShow) {
      saveGlobalConfig((current) => {
        if (current.lastShownEmergencyTip === tip.tip)
          return current;
        return { ...current, lastShownEmergencyTip: tip.tip };
      });
    }
  }, [shouldShow, tip.tip]);
  if (!shouldShow) {
    return null;
  }
  return /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedBox_default, {
    paddingLeft: 2,
    flexDirection: "column",
    children: /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
      ...tip.color === "warning" ? { color: "warning" } : tip.color === "error" ? { color: "error" } : { dimColor: true },
      children: tip.tip
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function getTipOfFeed() {
  return getDynamicConfig_CACHED_MAY_BE_STALE(CONFIG_NAME, DEFAULT_TIP);
}
var import_react6, jsx_dev_runtime10, CONFIG_NAME = "tengu-top-of-feed-tip", DEFAULT_TIP;
var init_EmergencyTip = __esm(() => {
  init_src();
  init_growthbook();
  init_config();
  import_react6 = __toESM(require_react(), 1);
  jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime(), 1);
  DEFAULT_TIP = { tip: "", color: "dim" };
});

// src/components/LogoV2/AnimatedAsterisk.tsx
function AnimatedAsterisk({
  char = TEARDROP_ASTERISK
}) {
  const [reducedMotion] = import_react7.useState(() => getInitialSettings().prefersReducedMotion ?? false);
  const [done, setDone] = import_react7.useState(reducedMotion);
  const startTimeRef = import_react7.useRef(null);
  const [ref, time] = useAnimationFrame(done ? null : 50);
  import_react7.useEffect(() => {
    if (done)
      return;
    const t = setTimeout(setDone, TOTAL_ANIMATION_MS, true);
    return () => clearTimeout(t);
  }, [done]);
  if (done) {
    return /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedBox_default, {
      ref,
      children: /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedText, {
        color: SETTLED_GREY,
        children: char
      }, undefined, false, undefined, this)
    }, undefined, false, undefined, this);
  }
  if (startTimeRef.current === null) {
    startTimeRef.current = time;
  }
  const elapsed = time - startTimeRef.current;
  const hue = elapsed / SWEEP_DURATION_MS * 360 % 360;
  return /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedBox_default, {
    ref,
    children: /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedText, {
      color: toRGBColor(hueToRgb(hue)),
      children: char
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
var import_react7, jsx_dev_runtime11, SWEEP_DURATION_MS = 1500, SWEEP_COUNT = 2, TOTAL_ANIMATION_MS, SETTLED_GREY;
var init_AnimatedAsterisk = __esm(() => {
  init_figures2();
  init_src();
  init_settings();
  init_utils();
  import_react7 = __toESM(require_react(), 1);
  jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime(), 1);
  TOTAL_ANIMATION_MS = SWEEP_DURATION_MS * SWEEP_COUNT;
  SETTLED_GREY = toRGBColor({ r: 153, g: 153, b: 153 });
});

// src/components/LogoV2/Opus1mMergeNotice.tsx
function shouldShowOpus1mMergeNotice() {
  return isOpus1mMergeEnabled() && (getGlobalConfig().opus1mMergeNoticeSeenCount ?? 0) < MAX_SHOW_COUNT;
}
function Opus1mMergeNotice() {
  const [show] = import_react8.useState(shouldShowOpus1mMergeNotice);
  import_react8.useEffect(() => {
    if (!show)
      return;
    const newCount = (getGlobalConfig().opus1mMergeNoticeSeenCount ?? 0) + 1;
    saveGlobalConfig((prev) => {
      if ((prev.opus1mMergeNoticeSeenCount ?? 0) >= newCount)
        return prev;
      return { ...prev, opus1mMergeNoticeSeenCount: newCount };
    });
  }, [show]);
  if (!show)
    return null;
  return /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedBox_default, {
    paddingLeft: 2,
    children: [
      /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(AnimatedAsterisk, {
        char: UP_ARROW
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
        dimColor: true,
        children: [
          " ",
          "Opus now defaults to 1M context \xB7 5x more room, same pricing"
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var import_react8, jsx_dev_runtime12, MAX_SHOW_COUNT = 6;
var init_Opus1mMergeNotice = __esm(() => {
  init_figures2();
  init_src();
  init_config();
  init_model();
  init_AnimatedAsterisk();
  import_react8 = __toESM(require_react(), 1);
  jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/LogoV2/VoiceModeNotice.tsx
function VoiceModeNotice() {
  return /* @__PURE__ */ jsx_dev_runtime13.jsxDEV(VoiceModeNoticeInner, {}, undefined, false, undefined, this);
}
function VoiceModeNoticeInner() {
  const [show] = import_react9.useState(() => isVoiceModeEnabled() && getInitialSettings().voiceEnabled !== true && (getGlobalConfig().voiceNoticeSeenCount ?? 0) < MAX_SHOW_COUNT2 && !shouldShowOpus1mMergeNotice());
  import_react9.useEffect(() => {
    if (!show)
      return;
    const newCount = (getGlobalConfig().voiceNoticeSeenCount ?? 0) + 1;
    saveGlobalConfig((prev) => {
      if ((prev.voiceNoticeSeenCount ?? 0) >= newCount)
        return prev;
      return { ...prev, voiceNoticeSeenCount: newCount };
    });
  }, [show]);
  if (!show)
    return null;
  return /* @__PURE__ */ jsx_dev_runtime13.jsxDEV(ThemedBox_default, {
    paddingLeft: 2,
    children: [
      /* @__PURE__ */ jsx_dev_runtime13.jsxDEV(AnimatedAsterisk, {}, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime13.jsxDEV(ThemedText, {
        dimColor: true,
        children: " Voice mode is now available \xB7 /voice to enable"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var import_react9, jsx_dev_runtime13, MAX_SHOW_COUNT2 = 3;
var init_VoiceModeNotice = __esm(() => {
  init_src();
  init_config();
  init_settings();
  init_voiceModeEnabled();
  init_AnimatedAsterisk();
  init_Opus1mMergeNotice();
  import_react9 = __toESM(require_react(), 1);
  jsx_dev_runtime13 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/LogoV2/GateOverridesWarning.tsx
function GateOverridesWarning() {
  return null;
}
var init_GateOverridesWarning = () => {};

// src/components/LogoV2/ExperimentEnrollmentNotice.tsx
function ExperimentEnrollmentNotice() {
  return null;
}
var init_ExperimentEnrollmentNotice = () => {};

// src/components/LogoV2/ChannelsNotice.tsx
var exports_ChannelsNotice = {};
__export(exports_ChannelsNotice, {
  findUnmatched: () => findUnmatched,
  ChannelsNotice: () => ChannelsNotice
});
function ChannelsNotice() {
  const [{ channels, list, unmatched }] = import_react10.useState(() => {
    const ch = getAllowedChannels();
    if (ch.length === 0)
      return {
        channels: ch,
        list: "",
        unmatched: []
      };
    const l = ch.map(formatEntry).join(", ");
    return {
      channels: ch,
      list: l,
      unmatched: findUnmatched(ch)
    };
  });
  if (channels.length === 0)
    return null;
  const hasNonDev = channels.some((c) => !c.dev);
  const flag = getHasDevChannels() && hasNonDev ? "Channels" : getHasDevChannels() ? "--dangerously-load-development-channels" : "--channels";
  return /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedBox_default, {
    paddingLeft: 2,
    flexDirection: "column",
    children: [
      /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedText, {
        color: "error",
        children: [
          "Listening for channel messages from: ",
          list
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedText, {
        dimColor: true,
        children: [
          "Experimental \xB7 inbound messages will be pushed into this session, this carries prompt injection risks. Restart MiMo Code without ",
          flag,
          " to disable."
        ]
      }, undefined, true, undefined, this),
      unmatched.map((u) => /* @__PURE__ */ jsx_dev_runtime14.jsxDEV(ThemedText, {
        color: "warning",
        children: [
          formatEntry(u.entry),
          " \xB7 ",
          u.why
        ]
      }, `${formatEntry(u.entry)}:${u.why}`, true, undefined, this))
    ]
  }, undefined, true, undefined, this);
}
function formatEntry(c) {
  return c.kind === "plugin" ? `plugin:${c.name}@${c.marketplace}` : `server:${c.name}`;
}
function findUnmatched(entries, deps) {
  const configured = deps?.configuredServerNames ?? (() => {
    const scopes = ["enterprise", "user", "project", "local"];
    const names = new Set;
    for (const scope of scopes) {
      for (const name of Object.keys(getMcpConfigsByScope(scope).servers)) {
        names.add(name);
      }
    }
    return names;
  })();
  const installedPluginIds = deps?.installedPluginIds ?? (() => {
    const ids = new Set(Object.keys(loadInstalledPluginsV2().plugins));
    const builtinPlugins = getBuiltinPlugins();
    for (const plugin of [...builtinPlugins.enabled, ...builtinPlugins.disabled]) {
      ids.add(plugin.source);
    }
    return ids;
  })();
  const out = [];
  for (const entry of entries) {
    if (entry.kind === "server") {
      if (!configured.has(entry.name)) {
        out.push({ entry, why: "no MCP server configured with that name" });
      }
      continue;
    }
    if (!installedPluginIds.has(`${entry.name}@${entry.marketplace}`)) {
      out.push({ entry, why: "plugin not installed" });
    }
  }
  return out;
}
var import_react10, jsx_dev_runtime14;
var init_ChannelsNotice = __esm(() => {
  init_state();
  init_builtinPlugins();
  init_src();
  init_config2();
  init_installedPluginsManager();
  import_react10 = __toESM(require_react(), 1);
  jsx_dev_runtime14 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/LogoV2/LogoV2.tsx
function LogoV2() {
  const activities = getRecentActivitySync();
  const username = getGlobalConfig().oauthAccount?.displayName ?? "";
  const { columns } = useTerminalSize();
  const showOnboarding = shouldShowProjectOnboarding();
  const showSandboxStatus = SandboxManager.isSandboxingEnabled();
  const showGuestPassesUpsell = useShowGuestPassesUpsell();
  const showOverageCreditUpsell = useShowOverageCreditUpsell();
  const agent = useAppState((s) => s.agent);
  const effortValue = useAppState((s) => s.effortValue);
  const config = getGlobalConfig();
  let changelog;
  try {
    changelog = getRecentReleaseNotesSync(3);
  } catch {
    changelog = [];
  }
  const [announcement] = import_react11.useState(() => {
    const announcements = getInitialSettings().companyAnnouncements;
    if (!announcements || announcements.length === 0)
      return;
    return config.numStartups === 1 ? announcements[0] : announcements[Math.floor(Math.random() * announcements.length)];
  });
  const { hasReleaseNotes } = checkForReleaseNotesSync(config.lastReleaseNotesSeen);
  import_react11.useEffect(() => {
    const currentConfig = getGlobalConfig();
    if (currentConfig.lastReleaseNotesSeen === "1.0.0") {
      return;
    }
    saveGlobalConfig((current) => {
      if (current.lastReleaseNotesSeen === "1.0.0")
        return current;
      return { ...current, lastReleaseNotesSeen: "1.0.0" };
    });
    if (showOnboarding) {
      incrementProjectOnboardingSeenCount();
    }
  }, [config, showOnboarding]);
  const isCondensedMode = !hasReleaseNotes && !showOnboarding && !isEnvTruthy(process.env.CLAUDE_CODE_FORCE_FULL_LOGO);
  import_react11.useEffect(() => {
    if (showGuestPassesUpsell && !showOnboarding && !isCondensedMode) {
      incrementGuestPassesSeenCount();
    }
  }, [showGuestPassesUpsell, showOnboarding, isCondensedMode]);
  import_react11.useEffect(() => {
    if (showOverageCreditUpsell && !showOnboarding && !showGuestPassesUpsell && !isCondensedMode) {
      incrementOverageCreditUpsellSeenCount();
    }
  }, [
    showOverageCreditUpsell,
    showOnboarding,
    showGuestPassesUpsell,
    isCondensedMode
  ]);
  const model = useMainLoopModel();
  const fullModelDisplayName = renderModelSetting(model);
  const {
    version,
    cwd,
    billingType,
    agentName: agentNameFromSettings
  } = getLogoDisplayData();
  const agentName = agent ?? agentNameFromSettings;
  const effortSuffix = getEffortSuffix(model, effortValue);
  const modelDisplayName = truncate(fullModelDisplayName + effortSuffix, LEFT_PANEL_MAX_WIDTH - 20);
  if (!hasReleaseNotes && !showOnboarding && !isEnvTruthy(process.env.CLAUDE_CODE_FORCE_FULL_LOGO)) {
    return /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(jsx_dev_runtime15.Fragment, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(CondensedLogo, {}, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(VoiceModeNotice, {}, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(Opus1mMergeNotice, {}, undefined, false, undefined, this),
        ChannelsNoticeModule && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ChannelsNoticeModule.ChannelsNotice, {}, undefined, false, undefined, this),
        isDebugMode() && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
          paddingLeft: 2,
          flexDirection: "column",
          children: [
            /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
              color: "warning",
              children: "Debug mode enabled"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
              dimColor: true,
              children: [
                "Logging to: ",
                isDebugToStdErr() ? "stderr" : getDebugLogPath()
              ]
            }, undefined, true, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(EmergencyTip, {}, undefined, false, undefined, this),
        process.env.CLAUDE_CODE_TMUX_SESSION && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
          paddingLeft: 2,
          flexDirection: "column",
          children: [
            /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
              dimColor: true,
              children: [
                "tmux session: ",
                process.env.CLAUDE_CODE_TMUX_SESSION
              ]
            }, undefined, true, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
              dimColor: true,
              children: process.env.CLAUDE_CODE_TMUX_PREFIX_CONFLICTS ? `Detach: ${process.env.CLAUDE_CODE_TMUX_PREFIX} ${process.env.CLAUDE_CODE_TMUX_PREFIX} d (press prefix twice - MiMo uses ${process.env.CLAUDE_CODE_TMUX_PREFIX})` : `Detach: ${process.env.CLAUDE_CODE_TMUX_PREFIX} d`
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        announcement && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
          paddingLeft: 2,
          flexDirection: "column",
          children: [
            !process.env.IS_DEMO && config.oauthAccount?.organizationName && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
              dimColor: true,
              children: [
                "Message from ",
                config.oauthAccount.organizationName,
                ":"
              ]
            }, undefined, true, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
              children: announcement
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        process.env.USER_TYPE === "ant" && !process.env.DEMO_VERSION && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
          paddingLeft: 2,
          flexDirection: "column",
          children: /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
            dimColor: true,
            children: "Use /issue to report model behavior issues"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        process.env.USER_TYPE === "ant" && !process.env.DEMO_VERSION && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
          paddingLeft: 2,
          flexDirection: "column",
          children: [
            /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
              color: "warning",
              children: "[ANT-ONLY] Logs:"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
              dimColor: true,
              children: [
                "API calls: ",
                getDisplayPath(getDumpPromptsPath())
              ]
            }, undefined, true, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
              dimColor: true,
              children: [
                "Debug logs: ",
                getDisplayPath(getDebugLogPath())
              ]
            }, undefined, true, undefined, this),
            isDetailedProfilingEnabled() && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
              dimColor: true,
              children: [
                "Startup Perf: ",
                getDisplayPath(getStartupPerfLogPath())
              ]
            }, undefined, true, undefined, this)
          ]
        }, undefined, true, undefined, this),
        process.env.USER_TYPE === "ant" && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(GateOverridesWarning, {}, undefined, false, undefined, this),
        process.env.USER_TYPE === "ant" && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ExperimentEnrollmentNotice, {}, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  const layoutMode = getLayoutMode(columns);
  const userTheme = resolveThemeSetting(getGlobalConfig().theme);
  const borderTitle = ` ${color("claude", userTheme)("MiMo Code")} ${color("inactive", userTheme)(`v${version}`)} `;
  const compactBorderTitle = color("claude", userTheme)(" MiMo Code ");
  if (layoutMode === "compact") {
    const layoutWidth = 4;
    let welcomeMessage2 = formatWelcomeMessage(username);
    if (stringWidth(welcomeMessage2) > columns - layoutWidth) {
      welcomeMessage2 = formatWelcomeMessage(null);
    }
    const separator = " \xB7 ";
    const atPrefix = "@";
    const cwdAvailableWidth2 = agentName ? columns - layoutWidth - atPrefix.length - stringWidth(agentName) - separator.length : columns - layoutWidth;
    const truncatedCwd2 = truncatePath(cwd, Math.max(cwdAvailableWidth2, 10));
    return /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(jsx_dev_runtime15.Fragment, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(OffscreenFreeze, {
          children: /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            borderStyle: "round",
            borderColor: "claude",
            borderText: {
              content: compactBorderTitle,
              position: "top",
              align: "start",
              offset: 1
            },
            paddingX: 1,
            paddingY: 1,
            alignItems: "center",
            width: columns,
            children: [
              /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
                bold: true,
                children: welcomeMessage2
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
                marginY: 1,
                children: /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(Clawd, {}, undefined, false, undefined, this)
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
                dimColor: true,
                children: modelDisplayName
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
                dimColor: true,
                children: billingType
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
                dimColor: true,
                children: agentName ? `@${agentName} \xB7 ${truncatedCwd2}` : truncatedCwd2
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(VoiceModeNotice, {}, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(Opus1mMergeNotice, {}, undefined, false, undefined, this),
        ChannelsNoticeModule && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ChannelsNoticeModule.ChannelsNotice, {}, undefined, false, undefined, this),
        showSandboxStatus && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          flexDirection: "column",
          children: /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
            color: "warning",
            children: "Your bash commands will be sandboxed. Disable with /sandbox."
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        process.env.USER_TYPE === "ant" && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(GateOverridesWarning, {}, undefined, false, undefined, this),
        process.env.USER_TYPE === "ant" && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ExperimentEnrollmentNotice, {}, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  const welcomeMessage = formatWelcomeMessage(username);
  const modelLine = !process.env.IS_DEMO && config.oauthAccount?.organizationName ? `${modelDisplayName} \xB7 ${billingType} \xB7 ${config.oauthAccount.organizationName}` : `${modelDisplayName} \xB7 ${billingType}`;
  const cwdSeparator = " \xB7 ";
  const cwdAtPrefix = "@";
  const cwdAvailableWidth = agentName ? LEFT_PANEL_MAX_WIDTH - cwdAtPrefix.length - stringWidth(agentName) - cwdSeparator.length : LEFT_PANEL_MAX_WIDTH;
  const truncatedCwd = truncatePath(cwd, Math.max(cwdAvailableWidth, 10));
  const cwdLine = agentName ? `@${agentName} \xB7 ${truncatedCwd}` : truncatedCwd;
  const optimalLeftWidth = calculateOptimalLeftWidth(welcomeMessage, cwdLine, modelLine);
  const { leftWidth, rightWidth } = calculateLayoutDimensions(columns, layoutMode, optimalLeftWidth);
  return /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(jsx_dev_runtime15.Fragment, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(OffscreenFreeze, {
        children: /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
          flexDirection: "column",
          borderStyle: "round",
          borderColor: "claude",
          borderText: {
            content: borderTitle,
            position: "top",
            align: "start",
            offset: 3
          },
          children: /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
            flexDirection: layoutMode === "horizontal" ? "row" : "column",
            paddingX: 1,
            gap: 1,
            children: [
              /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
                flexDirection: "column",
                width: leftWidth,
                justifyContent: "space-between",
                alignItems: "center",
                minHeight: 9,
                children: [
                  /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
                    marginTop: 1,
                    children: /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
                      bold: true,
                      children: welcomeMessage
                    }, undefined, false, undefined, this)
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(Clawd, {}, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
                    flexDirection: "column",
                    alignItems: "center",
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
                        dimColor: true,
                        children: modelLine
                      }, undefined, false, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
                        dimColor: true,
                        children: cwdLine
                      }, undefined, false, undefined, this)
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, undefined, true, undefined, this),
              layoutMode === "horizontal" && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
                height: "100%",
                borderStyle: "single",
                borderColor: "claude",
                borderDimColor: true,
                borderTop: false,
                borderBottom: false,
                borderLeft: false
              }, undefined, false, undefined, this),
              layoutMode === "horizontal" && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(FeedColumn, {
                feeds: showOnboarding ? [
                  createProjectOnboardingFeed(getSteps()),
                  createRecentActivityFeed(activities)
                ] : showGuestPassesUpsell ? [
                  createRecentActivityFeed(activities),
                  createGuestPassesFeed()
                ] : showOverageCreditUpsell ? [
                  createRecentActivityFeed(activities),
                  createOverageCreditFeed()
                ] : [
                  createRecentActivityFeed(activities),
                  createWhatsNewFeed(changelog)
                ],
                maxWidth: rightWidth
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(VoiceModeNotice, {}, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(Opus1mMergeNotice, {}, undefined, false, undefined, this),
      ChannelsNoticeModule && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ChannelsNoticeModule.ChannelsNotice, {}, undefined, false, undefined, this),
      isDebugMode() && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
        paddingLeft: 2,
        flexDirection: "column",
        children: [
          /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
            color: "warning",
            children: "Debug mode enabled"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
            dimColor: true,
            children: [
              "Logging to: ",
              isDebugToStdErr() ? "stderr" : getDebugLogPath()
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(EmergencyTip, {}, undefined, false, undefined, this),
      process.env.CLAUDE_CODE_TMUX_SESSION && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
        paddingLeft: 2,
        flexDirection: "column",
        children: [
          /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
            dimColor: true,
            children: [
              "tmux session: ",
              process.env.CLAUDE_CODE_TMUX_SESSION
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
            dimColor: true,
            children: process.env.CLAUDE_CODE_TMUX_PREFIX_CONFLICTS ? `Detach: ${process.env.CLAUDE_CODE_TMUX_PREFIX} ${process.env.CLAUDE_CODE_TMUX_PREFIX} d (press prefix twice - MiMo uses ${process.env.CLAUDE_CODE_TMUX_PREFIX})` : `Detach: ${process.env.CLAUDE_CODE_TMUX_PREFIX} d`
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      announcement && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
        paddingLeft: 2,
        flexDirection: "column",
        children: [
          !process.env.IS_DEMO && config.oauthAccount?.organizationName && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
            dimColor: true,
            children: [
              "Message from ",
              config.oauthAccount.organizationName,
              ":"
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
            children: announcement
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      showSandboxStatus && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
        paddingLeft: 2,
        flexDirection: "column",
        children: /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
          color: "warning",
          children: "Your bash commands will be sandboxed. Disable with /sandbox."
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      process.env.USER_TYPE === "ant" && !process.env.DEMO_VERSION && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
        paddingLeft: 2,
        flexDirection: "column",
        children: /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
          dimColor: true,
          children: "Use /issue to report model behavior issues"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      process.env.USER_TYPE === "ant" && !process.env.DEMO_VERSION && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedBox_default, {
        paddingLeft: 2,
        flexDirection: "column",
        children: [
          /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
            color: "warning",
            children: "[ANT-ONLY] Logs:"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
            dimColor: true,
            children: [
              "API calls: ",
              getDisplayPath(getDumpPromptsPath())
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
            dimColor: true,
            children: [
              "Debug logs: ",
              getDisplayPath(getDebugLogPath())
            ]
          }, undefined, true, undefined, this),
          isDetailedProfilingEnabled() && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ThemedText, {
            dimColor: true,
            children: [
              "Startup Perf: ",
              getDisplayPath(getStartupPerfLogPath())
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this),
      process.env.USER_TYPE === "ant" && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(GateOverridesWarning, {}, undefined, false, undefined, this),
      process.env.USER_TYPE === "ant" && /* @__PURE__ */ jsx_dev_runtime15.jsxDEV(ExperimentEnrollmentNotice, {}, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var import_react11, jsx_dev_runtime15, ChannelsNoticeModule, LEFT_PANEL_MAX_WIDTH = 50;
var init_LogoV2 = __esm(() => {
  init_src();
  init_useTerminalSize();
  init_logoV2Utils();
  init_format();
  init_file();
  init_Clawd();
  init_FeedColumn();
  init_feedConfigs();
  init_config();
  init_systemTheme();
  init_settings();
  init_debug();
  init_projectOnboardingState();
  init_CondensedLogo();
  init_OffscreenFreeze();
  init_releaseNotes();
  init_dumpPrompts();
  init_envUtils();
  init_startupProfiler();
  init_EmergencyTip();
  init_VoiceModeNotice();
  init_Opus1mMergeNotice();
  init_GateOverridesWarning();
  init_ExperimentEnrollmentNotice();
  init_sandbox_adapter();
  init_GuestPassesUpsell();
  init_OverageCreditUpsell();
  init_AppState();
  init_effort();
  init_useMainLoopModel();
  init_model();
  import_react11 = __toESM(require_react(), 1);
  jsx_dev_runtime15 = __toESM(require_jsx_dev_runtime(), 1);
  ChannelsNoticeModule = (init_ChannelsNotice(), __toCommonJS(exports_ChannelsNotice));
});

// src/components/MessageModel.tsx
function MessageModel({
  message,
  isTranscriptMode
}) {
  const content = message.message?.content;
  const contentArray = Array.isArray(content) ? content : [];
  const shouldShowModel = isTranscriptMode && message.type === "assistant" && message.message?.model && contentArray.some((c) => c?.type === "text");
  if (!shouldShowModel) {
    return null;
  }
  const model = message.message.model;
  return /* @__PURE__ */ jsx_dev_runtime16.jsxDEV(ThemedBox_default, {
    minWidth: stringWidth(model) + 8,
    children: /* @__PURE__ */ jsx_dev_runtime16.jsxDEV(ThemedText, {
      dimColor: true,
      children: model
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
var jsx_dev_runtime16;
var init_MessageModel = __esm(() => {
  init_src();
  jsx_dev_runtime16 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/MessageTimestamp.tsx
function MessageTimestamp({
  message,
  isTranscriptMode
}) {
  const shouldShowTimestamp = isTranscriptMode && message.timestamp && message.type === "assistant" && (Array.isArray(message.message.content) ? message.message.content.some((c) => c.type === "text") : false);
  if (!shouldShowTimestamp) {
    return null;
  }
  const formattedTimestamp = new Date(message.timestamp).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });
  return /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedBox_default, {
    minWidth: stringWidth(formattedTimestamp),
    children: /* @__PURE__ */ jsx_dev_runtime17.jsxDEV(ThemedText, {
      dimColor: true,
      children: formattedTimestamp
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
var jsx_dev_runtime17;
var init_MessageTimestamp = __esm(() => {
  init_src();
  jsx_dev_runtime17 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/MessageRow.tsx
function hasContentAfterIndex(messages, index, tools, streamingToolUseIDs) {
  for (let i = index + 1;i < messages.length; i++) {
    const msg = messages[i];
    if (msg?.type === "assistant") {
      const content = firstBlock(msg.message.content);
      if (content?.type === "thinking" || content?.type === "redacted_thinking") {
        continue;
      }
      if (content?.type === "tool_use") {
        if (getToolSearchOrReadInfo(content.name, content.input, tools).isCollapsible) {
          continue;
        }
        if (streamingToolUseIDs.has(content.id)) {
          continue;
        }
      }
      return true;
    }
    if (msg?.type === "system" || msg?.type === "attachment") {
      continue;
    }
    if (msg?.type === "user") {
      const content = firstBlock(msg.message.content);
      if (content?.type === "tool_result") {
        continue;
      }
    }
    if (msg?.type === "grouped_tool_use") {
      const firstInput = firstBlock(msg.messages[0]?.message.content)?.input;
      if (getToolSearchOrReadInfo(msg.toolName, firstInput, tools).isCollapsible) {
        continue;
      }
    }
    return true;
  }
  return false;
}
function MessageRowImpl({
  message: msg,
  isUserContinuation,
  hasContentAfter,
  tools,
  commands,
  verbose,
  inProgressToolUseIDs,
  streamingToolUseIDs,
  screen,
  canAnimate,
  onOpenRateLimitOptions,
  lastThinkingBlockId,
  latestBashOutputUUID,
  columns,
  isLoading,
  lookups,
  shouldCollapseDiffs
}) {
  const isTranscriptMode = screen === "transcript";
  const isGrouped = msg.type === "grouped_tool_use";
  const isCollapsed = msg.type === "collapsed_read_search";
  const isActiveCollapsedGroup = isCollapsed && (hasAnyToolInProgress(msg, inProgressToolUseIDs) || isLoading && !hasContentAfter);
  const displayMsg = isGrouped ? msg.displayMessage : isCollapsed ? getDisplayMessageFromCollapsed(msg) : msg;
  const progressMessagesForMessage = isGrouped || isCollapsed ? [] : getProgressMessagesFromLookup(msg, lookups);
  const siblingToolUseIDs = isGrouped || isCollapsed ? EMPTY_STRING_SET : getSiblingToolUseIDsFromLookup(msg, lookups);
  const isStatic = shouldRenderStatically(msg, streamingToolUseIDs, inProgressToolUseIDs, siblingToolUseIDs, screen, lookups);
  let shouldAnimate = false;
  if (canAnimate) {
    if (isGrouped) {
      shouldAnimate = msg.messages.some((m) => {
        const content = firstBlock(m.message.content);
        return content?.type === "tool_use" && inProgressToolUseIDs.has(content.id);
      });
    } else if (isCollapsed) {
      shouldAnimate = hasAnyToolInProgress(msg, inProgressToolUseIDs);
    } else {
      const toolUseID = getToolUseID(msg);
      shouldAnimate = !toolUseID || inProgressToolUseIDs.has(toolUseID);
    }
  }
  const hasMetadata = isTranscriptMode && displayMsg.type === "assistant" && (Array.isArray(displayMsg.message.content) && displayMsg.message.content.some((c) => c.type === "text")) && (displayMsg.timestamp || displayMsg.message.model);
  const messageEl = /* @__PURE__ */ jsx_dev_runtime18.jsxDEV(Message, {
    message: msg,
    lookups,
    addMargin: !hasMetadata,
    containerWidth: hasMetadata ? undefined : columns,
    tools,
    commands,
    verbose,
    inProgressToolUseIDs,
    progressMessagesForMessage,
    shouldAnimate,
    shouldShowDot: true,
    isTranscriptMode,
    isStatic,
    onOpenRateLimitOptions,
    isActiveCollapsedGroup,
    isUserContinuation,
    lastThinkingBlockId,
    latestBashOutputUUID,
    shouldCollapseDiffs
  }, undefined, false, undefined, this);
  if (!hasMetadata) {
    return /* @__PURE__ */ jsx_dev_runtime18.jsxDEV(OffscreenFreeze, {
      children: messageEl
    }, undefined, false, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime18.jsxDEV(OffscreenFreeze, {
    children: /* @__PURE__ */ jsx_dev_runtime18.jsxDEV(ThemedBox_default, {
      width: columns,
      flexDirection: "column",
      children: [
        /* @__PURE__ */ jsx_dev_runtime18.jsxDEV(ThemedBox_default, {
          flexDirection: "row",
          justifyContent: "flex-end",
          gap: 1,
          marginTop: 1,
          children: [
            /* @__PURE__ */ jsx_dev_runtime18.jsxDEV(MessageTimestamp, {
              message: displayMsg,
              isTranscriptMode
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime18.jsxDEV(MessageModel, {
              message: displayMsg,
              isTranscriptMode
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        messageEl
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
function isMessageStreaming(msg, streamingToolUseIDs) {
  if (msg.type === "grouped_tool_use") {
    return msg.messages.some((m) => {
      const content = firstBlock(m.message.content);
      return content?.type === "tool_use" && streamingToolUseIDs.has(content.id);
    });
  }
  if (msg.type === "collapsed_read_search") {
    const toolIds = getToolUseIdsFromCollapsedGroup(msg);
    return toolIds.some((id) => streamingToolUseIDs.has(id));
  }
  const toolUseID = getToolUseID(msg);
  return !!toolUseID && streamingToolUseIDs.has(toolUseID);
}
function allToolsResolved(msg, resolvedToolUseIDs) {
  if (msg.type === "grouped_tool_use") {
    return msg.messages.every((m) => {
      const content = firstBlock(m.message.content);
      return content?.type === "tool_use" && resolvedToolUseIDs.has(content.id);
    });
  }
  if (msg.type === "collapsed_read_search") {
    const toolIds = getToolUseIdsFromCollapsedGroup(msg);
    return toolIds.every((id) => resolvedToolUseIDs.has(id));
  }
  if (msg.type === "assistant") {
    const block = firstBlock(msg.message.content);
    if (block?.type === "server_tool_use") {
      return resolvedToolUseIDs.has(block.id);
    }
  }
  const toolUseID = getToolUseID(msg);
  return !toolUseID || resolvedToolUseIDs.has(toolUseID);
}
function areMessageRowPropsEqual(prev, next) {
  if (prev.message !== next.message)
    return false;
  if (prev.screen !== next.screen)
    return false;
  if (prev.verbose !== next.verbose)
    return false;
  if (prev.message.type === "collapsed_read_search" && next.screen !== "transcript") {
    return false;
  }
  if (prev.columns !== next.columns)
    return false;
  const prevIsLatestBash = prev.latestBashOutputUUID === prev.message.uuid;
  const nextIsLatestBash = next.latestBashOutputUUID === next.message.uuid;
  if (prevIsLatestBash !== nextIsLatestBash)
    return false;
  if (prev.lastThinkingBlockId !== next.lastThinkingBlockId && hasThinkingContent(next.message)) {
    return false;
  }
  const isStreaming = isMessageStreaming(prev.message, prev.streamingToolUseIDs);
  const isResolved = allToolsResolved(prev.message, prev.lookups.resolvedToolUseIDs);
  if (isStreaming || !isResolved)
    return false;
  return true;
}
var React4, jsx_dev_runtime18, firstBlock = (content) => {
  if (!Array.isArray(content))
    return;
  const b = content[0];
  if (b == null || typeof b === "string")
    return;
  return b;
}, MessageRow;
var init_MessageRow = __esm(() => {
  init_src();
  init_collapseReadSearch();
  init_messages();
  init_Message();
  init_MessageModel();
  init_Messages();
  init_MessageTimestamp();
  init_OffscreenFreeze();
  React4 = __toESM(require_react(), 1);
  jsx_dev_runtime18 = __toESM(require_jsx_dev_runtime(), 1);
  MessageRow = React4.memo(MessageRowImpl, areMessageRowPropsEqual);
});

// src/utils/statusNoticeDefinitions.tsx
import { relative } from "path";
function getActiveNotices(context) {
  return statusNoticeDefinitions.filter((notice) => notice.isActive(context));
}
var jsx_dev_runtime19, largeMemoryFilesNotice, claudeAiSubscriberExternalTokenNotice, apiKeyConflictNotice, bothAuthMethodsNotice, largeAgentDescriptionsNotice, jetbrainsPluginNotice, statusNoticeDefinitions;
var init_statusNoticeDefinitions = __esm(() => {
  init_src();
  init_claudemd();
  init_figures();
  init_cwd();
  init_format();
  init_auth();
  init_statusNoticeHelpers();
  init_ide();
  init_jetbrains();
  jsx_dev_runtime19 = __toESM(require_jsx_dev_runtime(), 1);
  largeMemoryFilesNotice = {
    id: "large-memory-files",
    type: "warning",
    isActive: (ctx) => getLargeMemoryFiles(ctx.memoryFiles).length > 0,
    render: (ctx) => {
      const largeMemoryFiles = getLargeMemoryFiles(ctx.memoryFiles);
      return /* @__PURE__ */ jsx_dev_runtime19.jsxDEV(jsx_dev_runtime19.Fragment, {
        children: largeMemoryFiles.map((file) => {
          const displayPath = file.path.startsWith(getCwd()) ? relative(getCwd(), file.path) : file.path;
          return /* @__PURE__ */ jsx_dev_runtime19.jsxDEV(ThemedBox_default, {
            flexDirection: "row",
            children: [
              /* @__PURE__ */ jsx_dev_runtime19.jsxDEV(ThemedText, {
                color: "warning",
                children: figures_default.warning
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime19.jsxDEV(ThemedText, {
                color: "warning",
                children: [
                  "Large ",
                  /* @__PURE__ */ jsx_dev_runtime19.jsxDEV(ThemedText, {
                    bold: true,
                    children: displayPath
                  }, undefined, false, undefined, this),
                  " will impact performance (",
                  formatNumber(file.content.length),
                  " chars >",
                  " ",
                  formatNumber(MAX_MEMORY_CHARACTER_COUNT),
                  ")",
                  /* @__PURE__ */ jsx_dev_runtime19.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: " \xB7 /memory to edit"
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this)
            ]
          }, file.path, true, undefined, this);
        })
      }, undefined, false, undefined, this);
    }
  };
  claudeAiSubscriberExternalTokenNotice = {
    id: "claude-ai-external-token",
    type: "warning",
    isActive: () => {
      const authTokenInfo = getAuthTokenSource();
      return isClaudeAISubscriber() && (authTokenInfo.source === "ANTHROPIC_AUTH_TOKEN" || authTokenInfo.source === "apiKeyHelper");
    },
    render: () => {
      const authTokenInfo = getAuthTokenSource();
      return /* @__PURE__ */ jsx_dev_runtime19.jsxDEV(ThemedBox_default, {
        flexDirection: "row",
        marginTop: 1,
        children: [
          /* @__PURE__ */ jsx_dev_runtime19.jsxDEV(ThemedText, {
            color: "warning",
            children: figures_default.warning
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime19.jsxDEV(ThemedText, {
            color: "warning",
            children: [
              "Auth conflict: Using ",
              authTokenInfo.source,
              " instead of MiMo account subscription token. Either unset ",
              authTokenInfo.source,
              ", or run `claude /logout`."
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this);
    }
  };
  apiKeyConflictNotice = {
    id: "api-key-conflict",
    type: "warning",
    isActive: () => {
      const { source: apiKeySource } = getAnthropicApiKeyWithSource({
        skipRetrievingKeyFromApiKeyHelper: true
      });
      return !!getApiKeyFromConfigOrMacOSKeychain() && (apiKeySource === "ANTHROPIC_API_KEY" || apiKeySource === "apiKeyHelper");
    },
    render: () => {
      const { source: apiKeySource } = getAnthropicApiKeyWithSource({
        skipRetrievingKeyFromApiKeyHelper: true
      });
      return /* @__PURE__ */ jsx_dev_runtime19.jsxDEV(ThemedBox_default, {
        flexDirection: "row",
        marginTop: 1,
        children: [
          /* @__PURE__ */ jsx_dev_runtime19.jsxDEV(ThemedText, {
            color: "warning",
            children: figures_default.warning
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime19.jsxDEV(ThemedText, {
            color: "warning",
            children: [
              "Auth conflict: Using ",
              apiKeySource,
              " instead of MiMo API key. Either unset ",
              apiKeySource,
              ", or run `claude /logout`."
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this);
    }
  };
  bothAuthMethodsNotice = {
    id: "both-auth-methods",
    type: "warning",
    isActive: () => {
      const { source: apiKeySource } = getAnthropicApiKeyWithSource({
        skipRetrievingKeyFromApiKeyHelper: true
      });
      const authTokenInfo = getAuthTokenSource();
      return apiKeySource !== "none" && authTokenInfo.source !== "none" && !(apiKeySource === "apiKeyHelper" && authTokenInfo.source === "apiKeyHelper");
    },
    render: () => {
      const { source: apiKeySource } = getAnthropicApiKeyWithSource({
        skipRetrievingKeyFromApiKeyHelper: true
      });
      const authTokenInfo = getAuthTokenSource();
      return /* @__PURE__ */ jsx_dev_runtime19.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        marginTop: 1,
        children: [
          /* @__PURE__ */ jsx_dev_runtime19.jsxDEV(ThemedBox_default, {
            flexDirection: "row",
            children: [
              /* @__PURE__ */ jsx_dev_runtime19.jsxDEV(ThemedText, {
                color: "warning",
                children: figures_default.warning
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime19.jsxDEV(ThemedText, {
                color: "warning",
                children: [
                  "Auth conflict: Both a token (",
                  authTokenInfo.source,
                  ") and an API key (",
                  apiKeySource,
                  ") are set. This may lead to unexpected behavior."
                ]
              }, undefined, true, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime19.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            marginLeft: 3,
            children: [
              /* @__PURE__ */ jsx_dev_runtime19.jsxDEV(ThemedText, {
                color: "warning",
                children: [
                  "\xB7 Trying to use",
                  " ",
                  authTokenInfo.source === "claude.ai" ? "claude.ai" : authTokenInfo.source,
                  "?",
                  " ",
                  apiKeySource === "ANTHROPIC_API_KEY" ? 'Unset the ANTHROPIC_API_KEY environment variable, or claude /logout then say "No" to the API key approval before login.' : apiKeySource === "apiKeyHelper" ? "Unset the apiKeyHelper setting." : "claude /logout"
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime19.jsxDEV(ThemedText, {
                color: "warning",
                children: [
                  "\xB7 Trying to use ",
                  apiKeySource,
                  "?",
                  " ",
                  authTokenInfo.source === "claude.ai" ? "claude /logout to sign out of claude.ai." : `Unset the ${authTokenInfo.source} environment variable.`
                ]
              }, undefined, true, undefined, this)
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this);
    }
  };
  largeAgentDescriptionsNotice = {
    id: "large-agent-descriptions",
    type: "warning",
    isActive: (context) => {
      const totalTokens = getAgentDescriptionsTotalTokens(context.agentDefinitions);
      return totalTokens > AGENT_DESCRIPTIONS_THRESHOLD;
    },
    render: (context) => {
      const totalTokens = getAgentDescriptionsTotalTokens(context.agentDefinitions);
      return /* @__PURE__ */ jsx_dev_runtime19.jsxDEV(ThemedBox_default, {
        flexDirection: "row",
        children: [
          /* @__PURE__ */ jsx_dev_runtime19.jsxDEV(ThemedText, {
            color: "warning",
            children: figures_default.warning
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime19.jsxDEV(ThemedText, {
            color: "warning",
            children: [
              "Large cumulative agent descriptions will impact performance (~",
              formatNumber(totalTokens),
              " tokens >",
              " ",
              formatNumber(AGENT_DESCRIPTIONS_THRESHOLD),
              ")",
              /* @__PURE__ */ jsx_dev_runtime19.jsxDEV(ThemedText, {
                dimColor: true,
                children: " \xB7 /agents to manage"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this);
    }
  };
  jetbrainsPluginNotice = {
    id: "jetbrains-plugin-install",
    type: "info",
    isActive: (context) => {
      if (!isSupportedJetBrainsTerminal()) {
        return false;
      }
      const shouldAutoInstall = context.config.autoInstallIdeExtension ?? true;
      if (!shouldAutoInstall) {
        return false;
      }
      const ideType = getTerminalIdeType();
      return ideType !== null && !isJetBrainsPluginInstalledCachedSync(ideType);
    },
    render: () => {
      const ideType = getTerminalIdeType();
      const ideName = toIDEDisplayName(ideType);
      return /* @__PURE__ */ jsx_dev_runtime19.jsxDEV(ThemedBox_default, {
        flexDirection: "row",
        gap: 1,
        marginLeft: 1,
        children: [
          /* @__PURE__ */ jsx_dev_runtime19.jsxDEV(ThemedText, {
            color: "ide",
            children: figures_default.arrowUp
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime19.jsxDEV(ThemedText, {
            children: [
              "Install the ",
              /* @__PURE__ */ jsx_dev_runtime19.jsxDEV(ThemedText, {
                color: "ide",
                children: ideName
              }, undefined, false, undefined, this),
              " plugin from the JetBrains Marketplace:",
              " ",
              /* @__PURE__ */ jsx_dev_runtime19.jsxDEV(ThemedText, {
                bold: true,
                children: "https://docs.claude.com/s/claude-code-jetbrains"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this);
    }
  };
  statusNoticeDefinitions = [
    largeMemoryFilesNotice,
    largeAgentDescriptionsNotice,
    claudeAiSubscriberExternalTokenNotice,
    apiKeyConflictNotice,
    bothAuthMethodsNotice,
    jetbrainsPluginNotice
  ];
});

// src/components/StatusNotices.tsx
function StatusNotices({
  agentDefinitions
} = {}) {
  const context = {
    config: getGlobalConfig(),
    agentDefinitions,
    memoryFiles: import_react12.use(getMemoryFiles())
  };
  const activeNotices = getActiveNotices(context);
  if (activeNotices.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsx_dev_runtime20.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    paddingLeft: 1,
    children: activeNotices.map((notice) => /* @__PURE__ */ jsx_dev_runtime20.jsxDEV(React5.Fragment, {
      children: notice.render(context)
    }, notice.id, false, undefined, this))
  }, undefined, false, undefined, this);
}
var React5, import_react12, jsx_dev_runtime20;
var init_StatusNotices = __esm(() => {
  init_src();
  init_claudemd();
  init_config();
  init_statusNoticeDefinitions();
  React5 = __toESM(require_react(), 1);
  import_react12 = __toESM(require_react(), 1);
  jsx_dev_runtime20 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/hooks/useVirtualScroll.ts
function useVirtualScroll(scrollRef, itemKeys, columns) {
  const heightCache = import_react13.useRef(new Map);
  const offsetVersionRef = import_react13.useRef(0);
  const lastScrollTopRef = import_react13.useRef(0);
  const offsetsRef = import_react13.useRef({
    arr: new Float64Array(0),
    version: -1,
    n: -1
  });
  const itemRefs = import_react13.useRef(new Map);
  const refCache = import_react13.useRef(new Map);
  const prevColumns = import_react13.useRef(columns);
  const skipMeasurementRef = import_react13.useRef(false);
  const prevRangeRef = import_react13.useRef(null);
  const freezeRendersRef = import_react13.useRef(0);
  if (prevColumns.current !== columns) {
    const ratio = prevColumns.current / columns;
    prevColumns.current = columns;
    for (const [k, h] of heightCache.current) {
      heightCache.current.set(k, Math.max(1, Math.round(h * ratio)));
    }
    offsetVersionRef.current++;
    skipMeasurementRef.current = true;
    freezeRendersRef.current = 2;
  }
  const frozenRange = freezeRendersRef.current > 0 ? prevRangeRef.current : null;
  const listOriginRef = import_react13.useRef(0);
  const spacerRef = import_react13.useRef(null);
  const subscribe = import_react13.useCallback((listener) => scrollRef.current?.subscribe(listener) ?? NOOP_UNSUB, [scrollRef]);
  import_react13.useSyncExternalStore(subscribe, () => {
    const s = scrollRef.current;
    if (!s)
      return NaN;
    const target = s.getScrollTop() + s.getPendingDelta();
    const bin = Math.floor(target / SCROLL_QUANTUM);
    return s.isSticky() ? ~bin : bin;
  });
  const scrollTop = scrollRef.current?.getScrollTop() ?? -1;
  const pendingDelta = scrollRef.current?.getPendingDelta() ?? 0;
  const viewportH = scrollRef.current?.getViewportHeight() ?? 0;
  const isSticky = scrollRef.current?.isSticky() ?? true;
  import_react13.useMemo(() => {
    const live = new Set(itemKeys);
    let dirty = false;
    for (const k of heightCache.current.keys()) {
      if (!live.has(k)) {
        heightCache.current.delete(k);
        dirty = true;
      }
    }
    for (const k of refCache.current.keys()) {
      if (!live.has(k))
        refCache.current.delete(k);
    }
    if (dirty)
      offsetVersionRef.current++;
  }, [itemKeys]);
  const n = itemKeys.length;
  if (offsetsRef.current.version !== offsetVersionRef.current || offsetsRef.current.n !== n) {
    const arr = offsetsRef.current.arr.length >= n + 1 ? offsetsRef.current.arr : new Float64Array(n + 1);
    arr[0] = 0;
    for (let i = 0;i < n; i++) {
      arr[i + 1] = arr[i] + (heightCache.current.get(itemKeys[i]) ?? DEFAULT_ESTIMATE);
    }
    offsetsRef.current = { arr, version: offsetVersionRef.current, n };
  }
  const offsets = offsetsRef.current.arr;
  const totalHeight = offsets[n];
  let start;
  let end;
  if (frozenRange) {
    [start, end] = frozenRange;
    start = Math.min(start, n);
    end = Math.min(end, n);
  } else if (viewportH === 0 || scrollTop < 0) {
    start = Math.max(0, n - COLD_START_COUNT);
    end = n;
  } else {
    if (isSticky) {
      const budget = viewportH + OVERSCAN_ROWS;
      start = n;
      while (start > 0 && totalHeight - offsets[start - 1] < budget) {
        start--;
      }
      end = n;
    } else {
      const listOrigin2 = listOriginRef.current;
      const MAX_SPAN_ROWS = viewportH * 3;
      const rawLo = Math.min(scrollTop, scrollTop + pendingDelta);
      const rawHi = Math.max(scrollTop, scrollTop + pendingDelta);
      const span = rawHi - rawLo;
      const clampedLo = span > MAX_SPAN_ROWS ? pendingDelta < 0 ? rawHi - MAX_SPAN_ROWS : rawLo : rawLo;
      const clampedHi = clampedLo + Math.min(span, MAX_SPAN_ROWS);
      const effLo = Math.max(0, clampedLo - listOrigin2);
      const effHi = clampedHi - listOrigin2;
      const lo = effLo - OVERSCAN_ROWS;
      {
        let l = 0;
        let r = n;
        while (l < r) {
          const m = l + r >> 1;
          if (offsets[m + 1] <= lo)
            l = m + 1;
          else
            r = m;
        }
        start = l;
      }
      {
        const p = prevRangeRef.current;
        if (p && p[0] < start) {
          for (let i = p[0];i < Math.min(start, p[1]); i++) {
            const k = itemKeys[i];
            if (itemRefs.current.has(k) && !heightCache.current.has(k)) {
              start = i;
              break;
            }
          }
        }
      }
      const needed2 = viewportH + 2 * OVERSCAN_ROWS;
      const maxEnd = Math.min(n, start + MAX_MOUNTED_ITEMS);
      let coverage2 = 0;
      end = start;
      while (end < maxEnd && (coverage2 < needed2 || offsets[end] < effHi + viewportH + OVERSCAN_ROWS)) {
        coverage2 += heightCache.current.get(itemKeys[end]) ?? PESSIMISTIC_HEIGHT;
        end++;
      }
    }
    const needed = viewportH + 2 * OVERSCAN_ROWS;
    const minStart = Math.max(0, end - MAX_MOUNTED_ITEMS);
    let coverage = 0;
    for (let i = start;i < end; i++) {
      coverage += heightCache.current.get(itemKeys[i]) ?? PESSIMISTIC_HEIGHT;
    }
    while (start > minStart && coverage < needed) {
      start--;
      coverage += heightCache.current.get(itemKeys[start]) ?? PESSIMISTIC_HEIGHT;
    }
    const prev = prevRangeRef.current;
    const scrollVelocity = Math.abs(scrollTop - lastScrollTopRef.current) + Math.abs(pendingDelta);
    if (prev && scrollVelocity > viewportH * 2) {
      const [pS, pE] = prev;
      if (start < pS - SLIDE_STEP)
        start = pS - SLIDE_STEP;
      if (end > pE + SLIDE_STEP)
        end = pE + SLIDE_STEP;
      if (start > end)
        end = Math.min(start + SLIDE_STEP, n);
    }
    lastScrollTopRef.current = scrollTop;
  }
  if (freezeRendersRef.current > 0) {
    freezeRendersRef.current--;
  } else {
    prevRangeRef.current = [start, end];
  }
  const dStart = import_react13.useDeferredValue(start);
  const dEnd = import_react13.useDeferredValue(end);
  let effStart = start < dStart ? dStart : start;
  let effEnd = end > dEnd ? dEnd : end;
  if (effStart > effEnd || isSticky) {
    effStart = start;
    effEnd = end;
  }
  if (pendingDelta > 0) {
    effEnd = end;
  }
  if (effEnd - effStart > MAX_MOUNTED_ITEMS) {
    const mid = (offsets[effStart] + offsets[effEnd]) / 2;
    if (scrollTop - listOriginRef.current < mid) {
      effEnd = effStart + MAX_MOUNTED_ITEMS;
    } else {
      effStart = effEnd - MAX_MOUNTED_ITEMS;
    }
  }
  const listOrigin = listOriginRef.current;
  const effTopSpacer = offsets[effStart];
  const clampMin = effStart === 0 ? 0 : effTopSpacer + listOrigin;
  const clampMax = effEnd === n ? Infinity : Math.max(effTopSpacer, offsets[effEnd] - viewportH) + listOrigin;
  import_react13.useLayoutEffect(() => {
    if (isSticky) {
      scrollRef.current?.setClampBounds(undefined, undefined);
    } else {
      scrollRef.current?.setClampBounds(clampMin, clampMax);
    }
  });
  import_react13.useLayoutEffect(() => {
    const spacerYoga = spacerRef.current?.yogaNode;
    if (spacerYoga && spacerYoga.getComputedWidth() > 0) {
      listOriginRef.current = spacerYoga.getComputedTop();
    }
    if (skipMeasurementRef.current) {
      skipMeasurementRef.current = false;
      return;
    }
    let anyChanged = false;
    for (const [key, el] of itemRefs.current) {
      const yoga = el.yogaNode;
      if (!yoga)
        continue;
      const h = yoga.getComputedHeight();
      const prev = heightCache.current.get(key);
      if (h > 0) {
        if (prev !== h) {
          heightCache.current.set(key, h);
          anyChanged = true;
        }
      } else if (yoga.getComputedWidth() > 0 && prev !== 0) {
        heightCache.current.set(key, 0);
        anyChanged = true;
      }
    }
    if (anyChanged)
      offsetVersionRef.current++;
  });
  const measureRef = import_react13.useCallback((key) => {
    let fn = refCache.current.get(key);
    if (!fn) {
      fn = (el) => {
        if (el) {
          itemRefs.current.set(key, el);
        } else {
          const yoga = itemRefs.current.get(key)?.yogaNode;
          if (yoga && !skipMeasurementRef.current) {
            const h = yoga.getComputedHeight();
            if ((h > 0 || yoga.getComputedWidth() > 0) && heightCache.current.get(key) !== h) {
              heightCache.current.set(key, h);
              offsetVersionRef.current++;
            }
          }
          itemRefs.current.delete(key);
        }
      };
      refCache.current.set(key, fn);
    }
    return fn;
  }, []);
  const getItemTop = import_react13.useCallback((index) => {
    const yoga = itemRefs.current.get(itemKeys[index])?.yogaNode;
    if (!yoga || yoga.getComputedWidth() === 0)
      return -1;
    return yoga.getComputedTop();
  }, [itemKeys]);
  const getItemElement = import_react13.useCallback((index) => itemRefs.current.get(itemKeys[index]) ?? null, [itemKeys]);
  const getItemHeight = import_react13.useCallback((index) => heightCache.current.get(itemKeys[index]), [itemKeys]);
  const scrollToIndex = import_react13.useCallback((i) => {
    const o = offsetsRef.current;
    if (i < 0 || i >= o.n)
      return;
    scrollRef.current?.scrollTo(o.arr[i] + listOriginRef.current);
  }, [scrollRef]);
  const effBottomSpacer = totalHeight - offsets[effEnd];
  return {
    range: [effStart, effEnd],
    topSpacer: effTopSpacer,
    bottomSpacer: effBottomSpacer,
    measureRef,
    spacerRef,
    offsets,
    getItemTop,
    getItemElement,
    getItemHeight,
    scrollToIndex
  };
}
var import_react13, DEFAULT_ESTIMATE = 3, OVERSCAN_ROWS = 80, COLD_START_COUNT = 30, SCROLL_QUANTUM, PESSIMISTIC_HEIGHT = 1, MAX_MOUNTED_ITEMS = 300, SLIDE_STEP = 25, NOOP_UNSUB = () => {};
var init_useVirtualScroll = __esm(() => {
  import_react13 = __toESM(require_react(), 1);
  SCROLL_QUANTUM = OVERSCAN_ROWS >> 1;
});

// src/components/VirtualMessageList.tsx
function defaultExtractSearchText(msg) {
  const cached = fallbackLowerCache.get(msg);
  if (cached !== undefined)
    return cached;
  const lowered = renderableSearchText(msg);
  fallbackLowerCache.set(msg, lowered);
  return lowered;
}
function stickyPromptText(msg) {
  const cached = promptTextCache.get(msg);
  if (cached !== undefined)
    return cached;
  const result = computeStickyPromptText(msg);
  promptTextCache.set(msg, result);
  return result;
}
function computeStickyPromptText(msg) {
  let raw = null;
  if (msg.type === "user") {
    if (msg.isMeta || msg.isVisibleInTranscriptOnly)
      return null;
    const block = msg.message.content[0];
    if (block?.type !== "text")
      return null;
    raw = block.text ?? null;
  } else if (msg.type === "attachment" && msg.attachment.type === "queued_command" && msg.attachment.commandMode !== "task-notification" && !msg.attachment.isMeta) {
    const p = msg.attachment.prompt;
    raw = typeof p === "string" ? p : p.flatMap((b) => b.type === "text" ? [b.text ?? ""] : []).join(`
`);
  }
  if (raw === null)
    return null;
  const t = stripSystemReminders(raw);
  if (t.startsWith("<") || t === "")
    return null;
  return t;
}
function VirtualItem({
  itemKey: k,
  msg,
  idx,
  measureRef,
  expanded,
  hovered,
  clickable,
  onClickK,
  onEnterK,
  onLeaveK,
  renderItem
}) {
  return /* @__PURE__ */ jsx_dev_runtime21.jsxDEV(ThemedBox_default, {
    ref: measureRef(k),
    flexDirection: "column",
    backgroundColor: expanded ? "userMessageBackgroundHover" : undefined,
    paddingBottom: expanded ? 1 : undefined,
    onClick: clickable ? (e) => onClickK(msg, e.cellIsBlank) : undefined,
    onMouseEnter: clickable ? () => onEnterK(k) : undefined,
    onMouseLeave: clickable ? () => onLeaveK(k) : undefined,
    children: /* @__PURE__ */ jsx_dev_runtime21.jsxDEV(TextHoverColorContext.Provider, {
      value: hovered && !expanded ? "text" : undefined,
      children: renderItem(msg, idx)
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function VirtualMessageList({
  messages,
  scrollRef,
  columns,
  itemKey,
  renderItem,
  onItemClick,
  isItemClickable,
  isItemExpanded,
  extractSearchText = defaultExtractSearchText,
  trackStickyPrompt,
  selectedIndex,
  cursorNavRef,
  setCursor,
  jumpRef,
  onSearchMatchesChange,
  scanElement,
  setPositions
}) {
  const keysRef = import_react14.useRef([]);
  const prevMessagesRef = import_react14.useRef(messages);
  const prevItemKeyRef = import_react14.useRef(itemKey);
  if (prevItemKeyRef.current !== itemKey || messages.length < keysRef.current.length || messages[0] !== prevMessagesRef.current[0]) {
    keysRef.current = messages.map((m) => itemKey(m));
  } else {
    for (let i = keysRef.current.length;i < messages.length; i++) {
      keysRef.current.push(itemKey(messages[i]));
    }
  }
  prevMessagesRef.current = messages;
  prevItemKeyRef.current = itemKey;
  const keys = keysRef.current;
  const {
    range,
    topSpacer,
    bottomSpacer,
    measureRef,
    spacerRef,
    offsets,
    getItemTop,
    getItemElement,
    getItemHeight,
    scrollToIndex
  } = useVirtualScroll(scrollRef, keys, columns);
  const [start, end] = range;
  const isVisible = import_react14.useCallback((i) => {
    const h = getItemHeight(i);
    if (h === 0)
      return false;
    return isNavigableMessage(messages[i]);
  }, [getItemHeight, messages]);
  import_react14.useImperativeHandle(cursorNavRef, () => {
    const select = (m) => setCursor?.({
      uuid: m.uuid,
      msgType: m.type,
      expanded: false,
      toolName: toolCallOf(m)?.name
    });
    const selIdx = selectedIndex ?? -1;
    const scan = (from, dir, pred = isVisible) => {
      for (let i = from;i >= 0 && i < messages.length; i += dir) {
        if (pred(i)) {
          select(messages[i]);
          return true;
        }
      }
      return false;
    };
    const isUser = (i) => isVisible(i) && messages[i].type === "user";
    return {
      enterCursor: () => scan(messages.length - 1, -1, isUser),
      navigatePrev: () => scan(selIdx - 1, -1),
      navigateNext: () => {
        if (scan(selIdx + 1, 1))
          return;
        scrollRef.current?.scrollToBottom();
        setCursor?.(null);
      },
      navigatePrevUser: () => scan(selIdx - 1, -1, isUser),
      navigateNextUser: () => scan(selIdx + 1, 1, isUser),
      navigateTop: () => scan(0, 1),
      navigateBottom: () => scan(messages.length - 1, -1),
      getSelected: () => selIdx >= 0 ? messages[selIdx] ?? null : null
    };
  }, [messages, selectedIndex, setCursor, isVisible]);
  const jumpState = import_react14.useRef({
    offsets,
    start,
    getItemElement,
    getItemTop,
    messages,
    scrollToIndex
  });
  jumpState.current = {
    offsets,
    start,
    getItemElement,
    getItemTop,
    messages,
    scrollToIndex
  };
  import_react14.useEffect(() => {
    if (selectedIndex === undefined)
      return;
    const s = jumpState.current;
    const el = s.getItemElement(selectedIndex);
    if (el) {
      scrollRef.current?.scrollToElement(el, 1);
    } else {
      s.scrollToIndex(selectedIndex);
    }
  }, [selectedIndex, scrollRef]);
  const scanRequestRef = import_react14.useRef(null);
  const elementPositions = import_react14.useRef({ msgIdx: -1, positions: [] });
  const startPtrRef = import_react14.useRef(-1);
  const phantomBurstRef = import_react14.useRef(0);
  const pendingStepRef = import_react14.useRef(0);
  const stepRef = import_react14.useRef(() => {});
  const highlightRef = import_react14.useRef(() => {});
  const searchState = import_react14.useRef({
    matches: [],
    ptr: 0,
    screenOrd: 0,
    prefixSum: []
  });
  const searchAnchor = import_react14.useRef(-1);
  const indexWarmed = import_react14.useRef(false);
  function targetFor(i) {
    const top = jumpState.current.getItemTop(i);
    return Math.max(0, top - HEADROOM);
  }
  function highlight(ord) {
    const s = scrollRef.current;
    const { msgIdx, positions } = elementPositions.current;
    if (!s || positions.length === 0 || msgIdx < 0) {
      setPositions?.(null);
      return;
    }
    const idx = Math.max(0, Math.min(ord, positions.length - 1));
    const p = positions[idx];
    const top = jumpState.current.getItemTop(msgIdx);
    const vpTop = s.getViewportTop();
    let lo = top - s.getScrollTop();
    const vp = s.getViewportHeight();
    let screenRow = vpTop + lo + p.row;
    if (screenRow < vpTop || screenRow >= vpTop + vp) {
      s.scrollTo(Math.max(0, top + p.row - HEADROOM));
      lo = top - s.getScrollTop();
      screenRow = vpTop + lo + p.row;
    }
    setPositions?.({ positions, rowOffset: vpTop + lo, currentIdx: idx });
    const st = searchState.current;
    const total = st.prefixSum.at(-1) ?? 0;
    const current = (st.prefixSum[st.ptr] ?? 0) + idx + 1;
    onSearchMatchesChange?.(total, current);
    logForDebugging(`highlight(i=${msgIdx}, ord=${idx}/${positions.length}): ` + `pos={row:${p.row},col:${p.col}} lo=${lo} screenRow=${screenRow} ` + `badge=${current}/${total}`);
  }
  highlightRef.current = highlight;
  const [seekGen, setSeekGen] = import_react14.useState(0);
  const bumpSeek = import_react14.useCallback(() => setSeekGen((g) => g + 1), []);
  import_react14.useEffect(() => {
    const req = scanRequestRef.current;
    if (!req)
      return;
    const { idx, wantLast, tries } = req;
    const s = scrollRef.current;
    if (!s)
      return;
    const { getItemElement: getItemElement2, getItemTop: getItemTop2, scrollToIndex: scrollToIndex2 } = jumpState.current;
    const el = getItemElement2(idx);
    const h = el?.yogaNode?.getComputedHeight() ?? 0;
    if (!el || h === 0) {
      if (tries > 1) {
        scanRequestRef.current = null;
        logForDebugging(`seek(i=${idx}): no mount after scrollToIndex, skip`);
        stepRef.current(wantLast ? -1 : 1);
        return;
      }
      scanRequestRef.current = { idx, wantLast, tries: tries + 1 };
      scrollToIndex2(idx);
      bumpSeek();
      return;
    }
    scanRequestRef.current = null;
    s.scrollTo(Math.max(0, getItemTop2(idx) - HEADROOM));
    const positions = scanElement?.(el) ?? [];
    elementPositions.current = { msgIdx: idx, positions };
    logForDebugging(`seek(i=${idx} t=${tries}): ${positions.length} positions`);
    if (positions.length === 0) {
      if (++phantomBurstRef.current > 20) {
        phantomBurstRef.current = 0;
        return;
      }
      stepRef.current(wantLast ? -1 : 1);
      return;
    }
    phantomBurstRef.current = 0;
    const ord = wantLast ? positions.length - 1 : 0;
    searchState.current.screenOrd = ord;
    startPtrRef.current = -1;
    highlightRef.current(ord);
    const pending = pendingStepRef.current;
    if (pending) {
      pendingStepRef.current = 0;
      stepRef.current(pending);
    }
  }, [seekGen]);
  function jump(i, wantLast) {
    const s = scrollRef.current;
    if (!s)
      return;
    const js = jumpState.current;
    const { getItemElement: getItemElement2, scrollToIndex: scrollToIndex2 } = js;
    if (i < 0 || i >= js.messages.length)
      return;
    setPositions?.(null);
    elementPositions.current = { msgIdx: -1, positions: [] };
    scanRequestRef.current = { idx: i, wantLast, tries: 0 };
    const el = getItemElement2(i);
    const h = el?.yogaNode?.getComputedHeight() ?? 0;
    if (el && h > 0) {
      s.scrollTo(targetFor(i));
    } else {
      scrollToIndex2(i);
    }
    bumpSeek();
  }
  function step(delta) {
    const st = searchState.current;
    const { matches, prefixSum } = st;
    const total = prefixSum.at(-1) ?? 0;
    if (matches.length === 0)
      return;
    if (scanRequestRef.current) {
      pendingStepRef.current = delta;
      return;
    }
    if (startPtrRef.current < 0)
      startPtrRef.current = st.ptr;
    const { positions } = elementPositions.current;
    const newOrd = st.screenOrd + delta;
    if (newOrd >= 0 && newOrd < positions.length) {
      st.screenOrd = newOrd;
      highlight(newOrd);
      startPtrRef.current = -1;
      return;
    }
    const ptr = (st.ptr + delta + matches.length) % matches.length;
    if (ptr === startPtrRef.current) {
      setPositions?.(null);
      startPtrRef.current = -1;
      logForDebugging(`step: wraparound at ptr=${ptr}, all ${matches.length} msgs phantoms`);
      return;
    }
    st.ptr = ptr;
    st.screenOrd = 0;
    jump(matches[ptr], delta < 0);
    const placeholder = delta < 0 ? prefixSum[ptr + 1] ?? total : prefixSum[ptr] + 1;
    onSearchMatchesChange?.(total, placeholder);
  }
  stepRef.current = step;
  import_react14.useImperativeHandle(jumpRef, () => ({
    jumpToIndex: (i) => {
      const s = scrollRef.current;
      if (s)
        s.scrollTo(targetFor(i));
    },
    setSearchQuery: (q) => {
      scanRequestRef.current = null;
      elementPositions.current = { msgIdx: -1, positions: [] };
      startPtrRef.current = -1;
      setPositions?.(null);
      const lq = q.toLowerCase();
      const matches = [];
      const prefixSum = [0];
      if (lq) {
        const msgs = jumpState.current.messages;
        for (let i = 0;i < msgs.length; i++) {
          const text = extractSearchText(msgs[i]);
          let pos = text.indexOf(lq);
          let cnt = 0;
          while (pos >= 0) {
            cnt++;
            pos = text.indexOf(lq, pos + lq.length);
          }
          if (cnt > 0) {
            matches.push(i);
            prefixSum.push(prefixSum.at(-1) + cnt);
          }
        }
      }
      const total = prefixSum.at(-1);
      let ptr = 0;
      const s = scrollRef.current;
      const { offsets: offsets2, start: start2, getItemTop: getItemTop2 } = jumpState.current;
      const firstTop = getItemTop2(start2);
      const origin = firstTop >= 0 ? firstTop - offsets2[start2] : 0;
      if (matches.length > 0 && s) {
        const curTop = searchAnchor.current >= 0 ? searchAnchor.current : s.getScrollTop();
        let best = Infinity;
        for (let k = 0;k < matches.length; k++) {
          const d = Math.abs(origin + offsets2[matches[k]] - curTop);
          if (d <= best) {
            best = d;
            ptr = k;
          }
        }
        logForDebugging(`setSearchQuery('${q}'): ${matches.length} msgs \xB7 ptr=${ptr} ` + `msgIdx=${matches[ptr]} curTop=${curTop} origin=${origin}`);
      }
      searchState.current = { matches, ptr, screenOrd: 0, prefixSum };
      if (matches.length > 0) {
        jump(matches[ptr], true);
      } else if (searchAnchor.current >= 0 && s) {
        s.scrollTo(searchAnchor.current);
      }
      onSearchMatchesChange?.(total, matches.length > 0 ? prefixSum[ptr + 1] ?? total : 0);
    },
    nextMatch: () => step(1),
    prevMatch: () => step(-1),
    setAnchor: () => {
      const s = scrollRef.current;
      if (s)
        searchAnchor.current = s.getScrollTop();
    },
    disarmSearch: () => {
      setPositions?.(null);
      scanRequestRef.current = null;
      elementPositions.current = { msgIdx: -1, positions: [] };
      startPtrRef.current = -1;
    },
    warmSearchIndex: async () => {
      if (indexWarmed.current)
        return 0;
      const msgs = jumpState.current.messages;
      const CHUNK = 500;
      let workMs = 0;
      const wallStart = performance.now();
      for (let i = 0;i < msgs.length; i += CHUNK) {
        await sleep(0);
        const t0 = performance.now();
        const end2 = Math.min(i + CHUNK, msgs.length);
        for (let j = i;j < end2; j++) {
          extractSearchText(msgs[j]);
        }
        workMs += performance.now() - t0;
      }
      const wallMs = Math.round(performance.now() - wallStart);
      logForDebugging(`warmSearchIndex: ${msgs.length} msgs \xB7 work=${Math.round(workMs)}ms wall=${wallMs}ms chunks=${Math.ceil(msgs.length / CHUNK)}`);
      indexWarmed.current = true;
      return Math.round(workMs);
    }
  }), [scrollRef]);
  const [hoveredKey, setHoveredKey] = import_react14.useState(null);
  const handlersRef = import_react14.useRef({ onItemClick, setHoveredKey });
  handlersRef.current = { onItemClick, setHoveredKey };
  const onClickK = import_react14.useCallback((msg, cellIsBlank) => {
    const h = handlersRef.current;
    if (!cellIsBlank && h.onItemClick)
      h.onItemClick(msg);
  }, []);
  const onEnterK = import_react14.useCallback((k) => {
    handlersRef.current.setHoveredKey(k);
  }, []);
  const onLeaveK = import_react14.useCallback((k) => {
    handlersRef.current.setHoveredKey((prev) => prev === k ? null : prev);
  }, []);
  return /* @__PURE__ */ jsx_dev_runtime21.jsxDEV(jsx_dev_runtime21.Fragment, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime21.jsxDEV(ThemedBox_default, {
        ref: spacerRef,
        height: topSpacer,
        flexShrink: 0
      }, undefined, false, undefined, this),
      messages.slice(start, end).map((msg, i) => {
        const idx = start + i;
        const k = keys[idx];
        const clickable = !!onItemClick && (isItemClickable?.(msg) ?? true);
        const hovered = clickable && hoveredKey === k;
        const expanded = isItemExpanded?.(msg);
        return /* @__PURE__ */ jsx_dev_runtime21.jsxDEV(VirtualItem, {
          itemKey: k,
          msg,
          idx,
          measureRef,
          expanded,
          hovered,
          clickable,
          onClickK,
          onEnterK,
          onLeaveK,
          renderItem
        }, k, false, undefined, this);
      }),
      bottomSpacer > 0 && /* @__PURE__ */ jsx_dev_runtime21.jsxDEV(ThemedBox_default, {
        height: bottomSpacer,
        flexShrink: 0
      }, undefined, false, undefined, this),
      trackStickyPrompt && /* @__PURE__ */ jsx_dev_runtime21.jsxDEV(StickyTracker, {
        messages,
        start,
        end,
        offsets,
        getItemTop,
        getItemElement,
        scrollRef
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function StickyTracker({
  messages,
  start,
  end,
  offsets,
  getItemTop,
  getItemElement,
  scrollRef
}) {
  const { setStickyPrompt } = import_react14.useContext(ScrollChromeContext);
  const subscribe = import_react14.useCallback((listener) => scrollRef.current?.subscribe(listener) ?? NOOP_UNSUB2, [scrollRef]);
  import_react14.useSyncExternalStore(subscribe, () => {
    const s = scrollRef.current;
    if (!s)
      return NaN;
    const t = s.getScrollTop() + s.getPendingDelta();
    return s.isSticky() ? -1 - t : t;
  });
  const isSticky = scrollRef.current?.isSticky() ?? true;
  const target = Math.max(0, (scrollRef.current?.getScrollTop() ?? 0) + (scrollRef.current?.getPendingDelta() ?? 0));
  let firstVisible = start;
  let firstVisibleTop = -1;
  for (let i = end - 1;i >= start; i--) {
    const top = getItemTop(i);
    if (top >= 0) {
      if (top < target)
        break;
      firstVisibleTop = top;
    }
    firstVisible = i;
  }
  let idx = -1;
  let text = null;
  if (firstVisible > 0 && !isSticky) {
    for (let i = firstVisible - 1;i >= 0; i--) {
      const t = stickyPromptText(messages[i]);
      if (t === null)
        continue;
      const top = getItemTop(i);
      if (top >= 0 && top + 1 >= target)
        continue;
      idx = i;
      text = t;
      break;
    }
  }
  const baseOffset = firstVisibleTop >= 0 ? firstVisibleTop - offsets[firstVisible] : 0;
  const estimate = idx >= 0 ? Math.max(0, baseOffset + offsets[idx]) : -1;
  const pending = import_react14.useRef({ idx: -1, tries: 0 });
  const suppress = import_react14.useRef("none");
  const lastIdx = import_react14.useRef(-1);
  import_react14.useEffect(() => {
    if (pending.current.idx >= 0)
      return;
    if (suppress.current === "armed") {
      suppress.current = "force";
      return;
    }
    const force = suppress.current === "force";
    suppress.current = "none";
    if (!force && lastIdx.current === idx)
      return;
    lastIdx.current = idx;
    if (text === null) {
      setStickyPrompt(null);
      return;
    }
    const trimmed = text.trimStart();
    const paraEnd = trimmed.search(/\n\s*\n/);
    const collapsed = (paraEnd >= 0 ? trimmed.slice(0, paraEnd) : trimmed).slice(0, STICKY_TEXT_CAP).replace(/\s+/g, " ").trim();
    if (collapsed === "") {
      setStickyPrompt(null);
      return;
    }
    const capturedIdx = idx;
    const capturedEstimate = estimate;
    setStickyPrompt({
      text: collapsed,
      scrollTo: () => {
        setStickyPrompt("clicked");
        suppress.current = "armed";
        const el = getItemElement(capturedIdx);
        if (el) {
          scrollRef.current?.scrollToElement(el, 1);
        } else {
          scrollRef.current?.scrollTo(capturedEstimate);
          pending.current = { idx: capturedIdx, tries: 0 };
        }
      }
    });
  });
  import_react14.useEffect(() => {
    if (pending.current.idx < 0)
      return;
    const el = getItemElement(pending.current.idx);
    if (el) {
      scrollRef.current?.scrollToElement(el, 1);
      pending.current = { idx: -1, tries: 0 };
    } else if (++pending.current.tries > 5) {
      pending.current = { idx: -1, tries: 0 };
    }
  });
  return null;
}
var import_react14, jsx_dev_runtime21, HEADROOM = 3, fallbackLowerCache, STICKY_TEXT_CAP = 500, promptTextCache, NOOP_UNSUB2 = () => {};
var init_VirtualMessageList = __esm(() => {
  init_useVirtualScroll();
  init_src();
  init_ThemedText();
  init_FullscreenLayout();
  init_debug();
  init_sleep();
  init_transcriptSearch();
  init_messageActions();
  import_react14 = __toESM(require_react(), 1);
  jsx_dev_runtime21 = __toESM(require_jsx_dev_runtime(), 1);
  fallbackLowerCache = new WeakMap;
  promptTextCache = new WeakMap;
});

// src/components/Messages.tsx
function filterForBriefTool(messages, briefToolNames) {
  const nameSet = new Set(briefToolNames);
  const briefToolUseIDs = new Set;
  return messages.filter((msg) => {
    if (msg.type === "system")
      return msg.subtype !== "api_metrics";
    const block = msg.message?.content[0];
    if (msg.type === "assistant") {
      if (msg.isApiErrorMessage)
        return true;
      if (block?.type === "tool_use" && block.name && nameSet.has(block.name)) {
        if ("id" in block) {
          briefToolUseIDs.add(block.id);
        }
        return true;
      }
      return false;
    }
    if (msg.type === "user") {
      if (block?.type === "tool_result") {
        return block.tool_use_id !== undefined && briefToolUseIDs.has(block.tool_use_id);
      }
      return !msg.isMeta;
    }
    if (msg.type === "attachment") {
      const att = msg.attachment;
      return att?.type === "queued_command" && att.commandMode === "prompt" && !att.isMeta && att.origin === undefined;
    }
    return false;
  });
}
function dropTextInBriefTurns(messages, briefToolNames) {
  const nameSet = new Set(briefToolNames);
  const turnsWithBrief = new Set;
  const textIndexToTurn = [];
  let turn = 0;
  for (let i = 0;i < messages.length; i++) {
    const msg = messages[i];
    const block = msg.message?.content[0];
    if (msg.type === "user" && block?.type !== "tool_result" && !msg.isMeta) {
      turn++;
      continue;
    }
    if (msg.type === "assistant") {
      if (block?.type === "text") {
        textIndexToTurn[i] = turn;
      } else if (block?.type === "tool_use" && block.name && nameSet.has(block.name)) {
        turnsWithBrief.add(turn);
      }
    }
  }
  if (turnsWithBrief.size === 0)
    return messages;
  return messages.filter((_, i) => {
    const t = textIndexToTurn[i];
    return t === undefined || !turnsWithBrief.has(t);
  });
}
function computeSliceStart(collapsed, anchorRef, cap = MAX_MESSAGES_WITHOUT_VIRTUALIZATION, step = MESSAGE_CAP_STEP) {
  const anchor = anchorRef.current;
  const anchorIdx = anchor ? collapsed.findIndex((m) => m.uuid === anchor.uuid) : -1;
  let start = anchorIdx >= 0 ? anchorIdx : anchor ? Math.min(anchor.idx, Math.max(0, collapsed.length - cap)) : 0;
  if (collapsed.length - start > cap + step) {
    start = collapsed.length - cap;
  }
  const msgAtStart = collapsed[start];
  if (msgAtStart && (anchor?.uuid !== msgAtStart.uuid || anchor.idx !== start)) {
    anchorRef.current = { uuid: msgAtStart.uuid, idx: start };
  } else if (!msgAtStart && anchor) {
    anchorRef.current = null;
  }
  return start;
}
function expandKey(msg) {
  return (msg.type === "assistant" || msg.type === "user" ? getToolUseID(msg) : null) ?? msg.uuid;
}
function setsEqual(a, b) {
  if (a.size !== b.size)
    return false;
  for (const item of a) {
    if (!b.has(item))
      return false;
  }
  return true;
}
function shouldRenderStatically(message, streamingToolUseIDs, inProgressToolUseIDs, siblingToolUseIDs, screen, lookups) {
  if (screen === "transcript") {
    return true;
  }
  switch (message.type) {
    case "attachment":
    case "user":
    case "assistant": {
      if (message.type === "assistant") {
        const block = message.message.content[0];
        if (block?.type === "server_tool_use") {
          return lookups.resolvedToolUseIDs.has(block.id);
        }
      }
      const toolUseID = getToolUseID(message);
      if (!toolUseID) {
        return true;
      }
      if (streamingToolUseIDs.has(toolUseID)) {
        return false;
      }
      if (inProgressToolUseIDs.has(toolUseID)) {
        return false;
      }
      if (hasUnresolvedHooksFromLookup(toolUseID, "PostToolUse", lookups)) {
        return false;
      }
      return every(siblingToolUseIDs, lookups.resolvedToolUseIDs);
    }
    case "system": {
      return message.subtype !== "api_error";
    }
    case "grouped_tool_use": {
      const allResolved = message.messages.every((msg) => {
        const content = msg.message.content[0];
        return content?.type === "tool_use" && lookups.resolvedToolUseIDs.has(content.id);
      });
      return allResolved;
    }
    case "collapsed_read_search": {
      return false;
    }
    default:
      return true;
  }
}
var React6, import_react15, jsx_dev_runtime22, LogoHeader, proactiveModule, BRIEF_TOOL_NAME, SEND_USER_FILE_TOOL_NAME, MAX_MESSAGES_TO_SHOW_IN_TRANSCRIPT_MODE = 30, MAX_MESSAGES_WITHOUT_VIRTUALIZATION = 200, MESSAGE_CAP_STEP = 50, MessagesImpl = ({
  messages,
  tools,
  commands,
  verbose,
  toolJSX,
  toolUseConfirmQueue,
  inProgressToolUseIDs,
  isMessageSelectorVisible,
  conversationId,
  screen,
  streamingToolUses,
  showAllInTranscript = false,
  agentDefinitions,
  onOpenRateLimitOptions,
  hideLogo = false,
  isLoading,
  hidePastThinking = false,
  streamingThinking,
  streamingText,
  isBriefOnly = false,
  unseenDivider,
  scrollRef,
  trackStickyPrompt,
  jumpRef,
  onSearchMatchesChange,
  scanElement,
  setPositions,
  disableRenderCap = false,
  cursor = null,
  setCursor,
  cursorNavRef,
  renderRange
}) => {
  const { columns } = useTerminalSize();
  const toggleShowAllShortcut = useShortcutDisplay("transcript:toggleShowAll", "Transcript", "Ctrl+E");
  const normalizedMessages = import_react15.useMemo(() => normalizeMessages(messages).filter(isNotEmptyMessage), [messages]);
  const isStreamingThinkingVisible = import_react15.useMemo(() => {
    if (!streamingThinking)
      return false;
    if (streamingThinking.isStreaming)
      return true;
    if (streamingThinking.streamingEndedAt) {
      return Date.now() - streamingThinking.streamingEndedAt < 30000;
    }
    return false;
  }, [streamingThinking]);
  const lastThinkingBlockId = import_react15.useMemo(() => {
    if (!hidePastThinking)
      return null;
    if (isStreamingThinkingVisible)
      return "streaming";
    for (let i = normalizedMessages.length - 1;i >= 0; i--) {
      const msg = normalizedMessages[i];
      if (msg?.type === "assistant") {
        const content = msg.message.content;
        for (let j = content.length - 1;j >= 0; j--) {
          if (content[j]?.type === "thinking") {
            return `${msg.uuid}:${j}`;
          }
        }
      } else if (msg?.type === "user") {
        const content = msg.message.content;
        const hasToolResult = content.some((block) => block.type === "tool_result");
        if (!hasToolResult) {
          return "no-thinking";
        }
      }
    }
    return null;
  }, [normalizedMessages, hidePastThinking, isStreamingThinkingVisible]);
  const latestBashOutputUUID = import_react15.useMemo(() => {
    for (let i = normalizedMessages.length - 1;i >= 0; i--) {
      const msg = normalizedMessages[i];
      if (msg?.type === "user") {
        const content = msg.message.content;
        for (const block of content) {
          if (block.type === "text") {
            const text = block.text ?? "";
            if (text.startsWith("<bash-stdout") || text.startsWith("<bash-stderr")) {
              return msg.uuid;
            }
          }
        }
      }
    }
    return null;
  }, [normalizedMessages]);
  const normalizedToolUseIDs = import_react15.useMemo(() => getToolUseIDs(normalizedMessages), [normalizedMessages]);
  const streamingToolUsesWithoutInProgress = import_react15.useMemo(() => streamingToolUses.filter((stu) => !inProgressToolUseIDs.has(stu.contentBlock.id) && !normalizedToolUseIDs.has(stu.contentBlock.id)), [streamingToolUses, inProgressToolUseIDs, normalizedToolUseIDs]);
  const syntheticStreamingToolUseMessages = import_react15.useMemo(() => streamingToolUsesWithoutInProgress.flatMap((streamingToolUse) => {
    const msg = createAssistantMessage({
      content: [streamingToolUse.contentBlock]
    });
    msg.uuid = deriveUUID(streamingToolUse.contentBlock.id, 0);
    return normalizeMessages([msg]);
  }), [streamingToolUsesWithoutInProgress]);
  const isTranscriptMode = screen === "transcript";
  const disableVirtualScroll = import_react15.useMemo(() => isEnvTruthy(process.env.CLAUDE_CODE_DISABLE_VIRTUAL_SCROLL), []);
  const virtualScrollRuntimeGate = scrollRef != null && !disableVirtualScroll;
  const shouldTruncate = isTranscriptMode && !showAllInTranscript && !virtualScrollRuntimeGate;
  const sliceAnchorRef = import_react15.useRef(null);
  const { collapsed, lookups, hasTruncatedMessages, hiddenMessageCount } = import_react15.useMemo(() => {
    const compactAwareMessages = verbose || isFullscreenEnvEnabled() ? normalizedMessages : getMessagesAfterCompactBoundary(normalizedMessages, {
      includeSnipped: true
    });
    const messagesToShowNotTruncated = reorderMessagesInUI(compactAwareMessages.filter((msg) => msg.type !== "progress").filter((msg) => !isNullRenderingAttachment(msg)).filter((_) => shouldShowUserMessage(_, isTranscriptMode)), syntheticStreamingToolUseMessages);
    const briefToolNames = [BRIEF_TOOL_NAME, SEND_USER_FILE_TOOL_NAME].filter((n) => n !== null);
    const dropTextToolNames = [BRIEF_TOOL_NAME].filter((n) => n !== null);
    const briefFiltered = briefToolNames.length > 0 && !isTranscriptMode ? isBriefOnly ? filterForBriefTool(messagesToShowNotTruncated, briefToolNames) : dropTextToolNames.length > 0 ? dropTextInBriefTurns(messagesToShowNotTruncated, dropTextToolNames) : messagesToShowNotTruncated : messagesToShowNotTruncated;
    const messagesToShow = shouldTruncate ? briefFiltered.slice(-MAX_MESSAGES_TO_SHOW_IN_TRANSCRIPT_MODE) : briefFiltered;
    const hasTruncatedMessages2 = shouldTruncate && briefFiltered.length > MAX_MESSAGES_TO_SHOW_IN_TRANSCRIPT_MODE;
    const { messages: groupedMessages } = applyGrouping(messagesToShow, tools, verbose);
    const collapsed2 = collapseBackgroundBashNotifications(collapseHookSummaries(collapseTeammateShutdowns(collapseReadSearchGroups(groupedMessages, tools))), verbose);
    const lookups2 = buildMessageLookups(normalizedMessages, messagesToShow);
    const hiddenMessageCount2 = messagesToShowNotTruncated.length - MAX_MESSAGES_TO_SHOW_IN_TRANSCRIPT_MODE;
    return {
      collapsed: collapsed2,
      lookups: lookups2,
      hasTruncatedMessages: hasTruncatedMessages2,
      hiddenMessageCount: hiddenMessageCount2
    };
  }, [
    verbose,
    normalizedMessages,
    isTranscriptMode,
    syntheticStreamingToolUseMessages,
    shouldTruncate,
    tools,
    isBriefOnly
  ]);
  const renderableMessages = import_react15.useMemo(() => {
    const capApplies = !virtualScrollRuntimeGate && !disableRenderCap;
    const sliceStart = capApplies ? computeSliceStart(collapsed, sliceAnchorRef) : 0;
    return renderRange ? collapsed.slice(renderRange[0], renderRange[1]) : sliceStart > 0 ? collapsed.slice(sliceStart) : collapsed;
  }, [collapsed, renderRange, virtualScrollRuntimeGate, disableRenderCap]);
  const streamingToolUseIDs = import_react15.useMemo(() => new Set(streamingToolUses.map((_) => _.contentBlock.id)), [streamingToolUses]);
  const dividerBeforeIndex = import_react15.useMemo(() => {
    if (!unseenDivider)
      return -1;
    const prefix = unseenDivider.firstUnseenUuid.slice(0, 24);
    return renderableMessages.findIndex((m) => m.uuid.slice(0, 24) === prefix);
  }, [unseenDivider, renderableMessages]);
  const selectedIdx = import_react15.useMemo(() => {
    if (!cursor)
      return -1;
    return renderableMessages.findIndex((m) => m.uuid === cursor.uuid);
  }, [cursor, renderableMessages]);
  const [expandedKeys, setExpandedKeys] = import_react15.useState(() => new Set);
  const onItemClick = import_react15.useCallback((msg) => {
    const k = expandKey(msg);
    setExpandedKeys((prev) => {
      const next = new Set(prev);
      if (next.has(k))
        next.delete(k);
      else
        next.add(k);
      return next;
    });
  }, []);
  const isItemExpanded = import_react15.useCallback((msg) => expandedKeys.size > 0 && expandedKeys.has(expandKey(msg)), [expandedKeys]);
  const lookupsRef = import_react15.useRef(lookups);
  lookupsRef.current = lookups;
  const isItemClickable = import_react15.useCallback((msg) => {
    if (msg.type === "collapsed_read_search")
      return true;
    if (msg.type === "assistant") {
      const content = msg.message.content;
      const b2 = Array.isArray(content) ? content[0] : undefined;
      return b2 != null && isAdvisorBlock(b2) && b2.type === "advisor_tool_result" && b2.content.type === "advisor_result";
    }
    if (msg.type !== "user")
      return false;
    const b = msg.message.content[0];
    if (b?.type !== "tool_result" || b.is_error || !msg.toolUseResult)
      return false;
    const name = lookupsRef.current.toolUseByToolUseID.get(b.tool_use_id ?? "")?.name;
    const tool = name ? findToolByName(tools, name) : undefined;
    return tool?.isResultTruncated?.(msg.toolUseResult) ?? false;
  }, [tools]);
  const canAnimate = (!toolJSX || !!toolJSX.shouldContinueAnimation) && !toolUseConfirmQueue.length && !isMessageSelectorVisible;
  const hasToolsInProgress = inProgressToolUseIDs.size > 0;
  const { progress } = useTerminalNotification();
  const prevProgressState = import_react15.useRef(null);
  const progressEnabled = getGlobalConfig().terminalProgressBarEnabled && !getIsRemoteMode() && !(proactiveModule?.isProactiveActive() ?? false);
  import_react15.useEffect(() => {
    const state = progressEnabled ? hasToolsInProgress ? "indeterminate" : "completed" : null;
    if (prevProgressState.current === state)
      return;
    prevProgressState.current = state;
    progress(state);
  }, [progress, progressEnabled, hasToolsInProgress]);
  import_react15.useEffect(() => {
    return () => progress(null);
  }, [progress]);
  const messageKey = import_react15.useCallback((msg) => `${msg.uuid}-${conversationId}`, [conversationId]);
  const renderMessageRow = (msg, index) => {
    const prevType = index > 0 ? renderableMessages[index - 1]?.type : undefined;
    const isUserContinuation = msg.type === "user" && prevType === "user";
    const hasContentAfter = msg.type === "collapsed_read_search" && (!!streamingText || hasContentAfterIndex(renderableMessages, index, tools, streamingToolUseIDs));
    const DIFF_COLLAPSE_DISTANCE = 0;
    const shouldCollapseDiffs = renderableMessages.length - 1 - index > DIFF_COLLAPSE_DISTANCE;
    const k = messageKey(msg);
    const row = /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(MessageRow, {
      message: msg,
      isUserContinuation,
      hasContentAfter,
      tools,
      commands,
      verbose: verbose || isItemExpanded(msg) || cursor?.expanded === true && index === selectedIdx,
      inProgressToolUseIDs,
      streamingToolUseIDs,
      screen,
      canAnimate,
      onOpenRateLimitOptions,
      lastThinkingBlockId,
      latestBashOutputUUID,
      columns,
      isLoading,
      lookups,
      shouldCollapseDiffs
    }, k, false, undefined, this);
    const wrapped = /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(MessageActionsSelectedContext.Provider, {
      value: index === selectedIdx,
      children: row
    }, k, false, undefined, this);
    if (unseenDivider && index === dividerBeforeIndex) {
      return [
        /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(Divider, {
            title: `${unseenDivider.count} new ${plural(unseenDivider.count, "message")}`,
            width: columns,
            color: "inactive"
          }, undefined, false, undefined, this)
        }, "unseen-divider", false, undefined, this),
        wrapped
      ];
    }
    return wrapped;
  };
  const searchTextCache2 = import_react15.useRef(new WeakMap);
  const extractSearchText = import_react15.useCallback((msg) => {
    const cached = searchTextCache2.current.get(msg);
    if (cached !== undefined)
      return cached;
    let text = renderableSearchText(msg);
    if (msg.type === "user" && msg.toolUseResult && Array.isArray(msg.message.content)) {
      const tr = msg.message.content.find((b) => b.type === "tool_result");
      if (tr && "tool_use_id" in tr) {
        const tu = lookups.toolUseByToolUseID.get(tr.tool_use_id);
        const tool = tu && findToolByName(tools, tu.name);
        const extracted = tool?.extractSearchText?.(msg.toolUseResult);
        if (extracted !== undefined)
          text = extracted;
      }
    }
    const lowered = text.toLowerCase();
    searchTextCache2.current.set(msg, lowered);
    return lowered;
  }, [tools, lookups]);
  return /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(jsx_dev_runtime22.Fragment, {
    children: [
      !hideLogo && !(renderRange && renderRange[0] > 0) && /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(LogoHeader, {
        agentDefinitions
      }, undefined, false, undefined, this),
      hasTruncatedMessages && /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(Divider, {
        title: `${toggleShowAllShortcut} to show ${source_default.bold(hiddenMessageCount)} previous messages`,
        width: columns
      }, undefined, false, undefined, this),
      isTranscriptMode && showAllInTranscript && hiddenMessageCount > 0 && !disableRenderCap && /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(Divider, {
        title: `${toggleShowAllShortcut} to hide ${source_default.bold(hiddenMessageCount)} previous messages`,
        width: columns
      }, undefined, false, undefined, this),
      virtualScrollRuntimeGate ? /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(InVirtualListContext.Provider, {
        value: true,
        children: /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(VirtualMessageList, {
          messages: renderableMessages,
          scrollRef,
          columns,
          itemKey: messageKey,
          renderItem: renderMessageRow,
          onItemClick,
          isItemClickable,
          isItemExpanded,
          trackStickyPrompt,
          selectedIndex: selectedIdx >= 0 ? selectedIdx : undefined,
          cursorNavRef,
          setCursor,
          jumpRef,
          onSearchMatchesChange,
          scanElement,
          setPositions,
          extractSearchText
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this) : renderableMessages.flatMap(renderMessageRow),
      streamingText && !isBriefOnly && /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(ThemedBox_default, {
        alignItems: "flex-start",
        flexDirection: "row",
        marginTop: 1,
        width: "100%",
        children: /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(ThemedBox_default, {
          flexDirection: "row",
          children: [
            /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(ThemedBox_default, {
              minWidth: 2,
              children: /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(ThemedText, {
                color: "text",
                children: BLACK_CIRCLE
              }, undefined, false, undefined, this)
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(ThemedBox_default, {
              flexDirection: "column",
              children: /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(StreamingMarkdown, {
                children: streamingText
              }, undefined, false, undefined, this)
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this),
      isStreamingThinkingVisible && streamingThinking && !isBriefOnly && /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(ThemedBox_default, {
        marginTop: 1,
        children: /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(AssistantThinkingMessage, {
          param: {
            type: "thinking",
            thinking: streamingThinking.thinking
          },
          addMargin: false,
          isTranscriptMode: true,
          verbose,
          hideInTranscript: false
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}, Messages;
var init_Messages = __esm(() => {
  init_source();
  init_set();
  init_state();
  init_figures2();
  init_useTerminalSize();
  init_src();
  init_src();
  init_useShortcutDisplay();
  init_Tool();
  init_advisor();
  init_collapseBackgroundBashNotifications();
  init_collapseHookSummaries();
  init_collapseReadSearch();
  init_collapseTeammateShutdowns();
  init_config();
  init_envUtils();
  init_fullscreen();
  init_groupToolUses();
  init_messages();
  init_stringUtils();
  init_transcriptSearch();
  init_src();
  init_LogoV2();
  init_Markdown();
  init_MessageRow();
  init_messageActions();
  init_AssistantThinkingMessage();
  init_nullRenderingAttachments();
  init_OffscreenFreeze();
  init_StatusNotices();
  init_VirtualMessageList();
  React6 = __toESM(require_react(), 1);
  import_react15 = __toESM(require_react(), 1);
  jsx_dev_runtime22 = __toESM(require_jsx_dev_runtime(), 1);
  LogoHeader = React6.memo(function LogoHeader2({
    agentDefinitions
  }) {
    return /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(OffscreenFreeze, {
      children: /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        gap: 1,
        children: [
          /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(LogoV2, {}, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(React6.Suspense, {
            fallback: null,
            children: /* @__PURE__ */ jsx_dev_runtime22.jsxDEV(StatusNotices, {
              agentDefinitions
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this);
  });
  proactiveModule = (init_proactive(), __toCommonJS(exports_proactive));
  BRIEF_TOOL_NAME = (init_prompt(), __toCommonJS(exports_prompt)).BRIEF_TOOL_NAME;
  SEND_USER_FILE_TOOL_NAME = (init_prompt2(), __toCommonJS(exports_prompt2)).SEND_USER_FILE_TOOL_NAME;
  Messages = React6.memo(MessagesImpl, (prev, next) => {
    const keys = Object.keys(prev);
    for (const key of keys) {
      if (key === "onOpenRateLimitOptions" || key === "scrollRef" || key === "trackStickyPrompt" || key === "setCursor" || key === "cursorNavRef" || key === "jumpRef" || key === "onSearchMatchesChange" || key === "scanElement" || key === "setPositions")
        continue;
      if (prev[key] !== next[key]) {
        if (key === "streamingToolUses") {
          const p = prev.streamingToolUses;
          const n = next.streamingToolUses;
          if (p.length === n.length && p.every((item, i) => item.contentBlock === n[i]?.contentBlock)) {
            continue;
          }
        }
        if (key === "inProgressToolUseIDs") {
          if (setsEqual(prev.inProgressToolUseIDs, next.inProgressToolUseIDs)) {
            continue;
          }
        }
        if (key === "unseenDivider") {
          const p = prev.unseenDivider;
          const n = next.unseenDivider;
          if (p?.firstUnseenUuid === n?.firstUnseenUuid && p?.count === n?.count) {
            continue;
          }
        }
        if (key === "tools") {
          const p = prev.tools;
          const n = next.tools;
          if (p.length === n.length && p.every((tool, i) => tool.name === n[i]?.name)) {
            continue;
          }
        }
        return false;
      }
    }
    return true;
  });
});

export { useSetPromptOverlay, useSetPromptOverlayDialog, init_promptOverlayContext, useUnseenDivider, computeUnseenDivider, FullscreenLayout, init_FullscreenLayout, Messages, init_Messages };
