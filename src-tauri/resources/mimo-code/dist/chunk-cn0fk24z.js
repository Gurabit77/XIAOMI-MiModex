// @bun
import {
  init_mappers,
  toInternalMessages
} from "./chunk-p7749nem.js";
import {
  init_Dialog
} from "./chunk-910z34p6.js";
import {
  ASK_USER_QUESTION_TOOL_NAME,
  DreamTask,
  EMPTY_LOOKUPS,
  EXIT_PLAN_MODE_V2_TOOL_NAME,
  InProcessTeammateTask,
  LocalAgentTask,
  LocalShellTask,
  Message,
  RemoteAgentTask,
  Select,
  UserPlanMessage,
  exports_LocalWorkflowTask,
  exports_MonitorMcpTask,
  extractTag,
  findToolByName,
  getEmptyToolPermissionContext,
  getRainbowColor,
  getRemoteTaskSessionUrl,
  getTaskOutputPath,
  getTools,
  init_AppState,
  init_DreamTask,
  init_InProcessTeammateTask,
  init_LocalAgentTask,
  init_LocalShellTask,
  init_LocalWorkflowTask,
  init_Message,
  init_MonitorMcpTask,
  init_RemoteAgentTask,
  init_Task,
  init_Tool,
  init_UserPlanMessage,
  init_collapseReadSearch,
  init_constants2,
  init_coordinatorMode,
  init_diskOutput,
  init_ink,
  init_messages1 as init_messages,
  init_overlayContext,
  init_prompt8 as init_prompt,
  init_select,
  init_teleport,
  init_thinking,
  init_tools1 as init_tools,
  init_types2 as init_types,
  init_ultraplan,
  init_useElapsedTime,
  init_useSettings,
  init_useShortcutDisplay,
  init_useTerminalSize,
  isBackgroundTask,
  isCoordinatorMode,
  isPanelAgentTask,
  isTerminalTaskStatus,
  normalizeMessages,
  stopUltraplan,
  summarizeRecentActivities,
  teleportResumeCodeSession,
  toInkColor,
  useAppState,
  useElapsedTime,
  useRegisterOverlay,
  useSetAppState,
  useSettings,
  useShortcutDisplay
} from "./chunk-ktw919wt.js";
import {
  init_useKeybinding
} from "./chunk-dsnwry8r.js";
import {
  init_browser,
  openBrowser
} from "./chunk-6dj3cf9s.js";
import {
  TEAM_LEAD_NAME,
  init_constants as init_constants3
} from "./chunk-4jm600zv.js";
import {
  AGENT_TOOL_NAME,
  DIAMOND_FILLED,
  DIAMOND_OPEN,
  LEGACY_AGENT_TOOL_NAME,
  init_constants1 as init_constants,
  init_figures as init_figures2,
  init_stringUtils,
  plural
} from "./chunk-1ghcng4e.js";
import {
  count,
  init_array,
  intersperse
} from "./chunk-zwarn9h7.js";
import {
  formatDuration,
  formatFileSize,
  formatNumber,
  init_format,
  truncate,
  truncateToWidth
} from "./chunk-x5hyyhqf.js";
import {
  Byline,
  Dialog,
  KeyboardShortcutHint,
  Link,
  ThemedBox_default,
  ThemedText,
  init_src,
  useAnimationFrame,
  useKeybindings,
  useTerminalSize,
  useTheme
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
  figures_default,
  init_figures
} from "./chunk-qajrkk97.js";
import {
  errorMessage,
  init_errors,
  init_fsOperations,
  tailFile
} from "./chunk-rpbc3b7k.js";
import {
  __esm,
  __export,
  __toCommonJS,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/state/teammateViewHelpers.ts
function isLocalAgent(task) {
  return typeof task === "object" && task !== null && "type" in task && task.type === "local_agent";
}
function release(task) {
  return {
    ...task,
    retain: false,
    messages: undefined,
    diskLoaded: false,
    evictAfter: isTerminalTaskStatus(task.status) ? Date.now() + PANEL_GRACE_MS : undefined
  };
}
function enterTeammateView(taskId, setAppState) {
  logEvent("tengu_transcript_view_enter", {});
  setAppState((prev) => {
    const task = prev.tasks[taskId];
    const prevId = prev.viewingAgentTaskId;
    const prevTask = prevId !== undefined ? prev.tasks[prevId] : undefined;
    const switching = prevId !== undefined && prevId !== taskId && isLocalAgent(prevTask) && prevTask.retain;
    const needsRetain = isLocalAgent(task) && (!task.retain || task.evictAfter !== undefined);
    const needsView = prev.viewingAgentTaskId !== taskId || prev.viewSelectionMode !== "viewing-agent";
    if (!needsRetain && !needsView && !switching)
      return prev;
    let tasks = prev.tasks;
    if (switching || needsRetain) {
      tasks = { ...prev.tasks };
      if (switching)
        tasks[prevId] = release(prevTask);
      if (needsRetain) {
        tasks[taskId] = { ...task, retain: true, evictAfter: undefined };
      }
    }
    return {
      ...prev,
      viewingAgentTaskId: taskId,
      viewSelectionMode: "viewing-agent",
      tasks
    };
  });
}
function exitTeammateView(setAppState) {
  logEvent("tengu_transcript_view_exit", {});
  setAppState((prev) => {
    const id = prev.viewingAgentTaskId;
    const cleared = {
      ...prev,
      viewingAgentTaskId: undefined,
      viewSelectionMode: "none"
    };
    if (id === undefined) {
      return prev.viewSelectionMode === "none" ? prev : cleared;
    }
    const task = prev.tasks[id];
    if (!isLocalAgent(task) || !task.retain)
      return cleared;
    return {
      ...cleared,
      tasks: { ...prev.tasks, [id]: release(task) }
    };
  });
}
function stopOrDismissAgent(taskId, setAppState) {
  setAppState((prev) => {
    const task = prev.tasks[taskId];
    if (!isLocalAgent(task))
      return prev;
    if (task.status === "running") {
      task.abortController?.abort();
      return prev;
    }
    if (task.evictAfter === 0)
      return prev;
    const viewingThis = prev.viewingAgentTaskId === taskId;
    return {
      ...prev,
      tasks: {
        ...prev.tasks,
        [taskId]: { ...release(task), evictAfter: 0 }
      },
      ...viewingThis && {
        viewingAgentTaskId: undefined,
        viewSelectionMode: "none"
      }
    };
  });
}
var PANEL_GRACE_MS = 30000;
var init_teammateViewHelpers = __esm(() => {
  init_analytics();
  init_Task();
});

// src/components/tasks/renderToolActivity.tsx
function renderToolActivity(activity, tools, theme) {
  const tool = findToolByName(tools, activity.toolName);
  if (!tool) {
    return activity.toolName;
  }
  try {
    const parsed = tool.inputSchema.safeParse(activity.input);
    const parsedInput = parsed.success ? parsed.data : {};
    const userFacingName = tool.userFacingName(parsedInput);
    if (!userFacingName) {
      return activity.toolName;
    }
    const toolArgs = tool.renderToolUseMessage(parsedInput, {
      theme,
      verbose: false
    });
    if (toolArgs) {
      return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        children: [
          userFacingName,
          "(",
          toolArgs,
          ")"
        ]
      }, undefined, true, undefined, this);
    }
    return userFacingName;
  } catch {
    return activity.toolName;
  }
}
var jsx_dev_runtime;
var init_renderToolActivity = __esm(() => {
  init_src();
  init_Tool();
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/tasks/taskStatusUtils.tsx
function isTerminalStatus(status) {
  return status === "completed" || status === "failed" || status === "killed";
}
function getTaskStatusIcon(status, options) {
  const { isIdle, awaitingApproval, hasError, shutdownRequested } = options ?? {};
  if (hasError)
    return figures_default.cross;
  if (awaitingApproval)
    return figures_default.questionMarkPrefix;
  if (shutdownRequested)
    return figures_default.warning;
  if (status === "running") {
    if (isIdle)
      return figures_default.ellipsis;
    return figures_default.play;
  }
  if (status === "completed")
    return figures_default.tick;
  if (status === "failed" || status === "killed")
    return figures_default.cross;
  return figures_default.bullet;
}
function getTaskStatusColor(status, options) {
  const { isIdle, awaitingApproval, hasError, shutdownRequested } = options ?? {};
  if (hasError)
    return "error";
  if (awaitingApproval)
    return "warning";
  if (shutdownRequested)
    return "warning";
  if (isIdle)
    return "background";
  if (status === "completed")
    return "success";
  if (status === "failed")
    return "error";
  if (status === "killed")
    return "warning";
  return "background";
}
function describeTeammateActivity(t) {
  if (t.shutdownRequested)
    return "stopping";
  if (t.awaitingPlanApproval)
    return "awaiting approval";
  if (t.isIdle)
    return "idle";
  return (t.progress?.recentActivities && summarizeRecentActivities(t.progress.recentActivities)) ?? t.progress?.lastActivity?.activityDescription ?? "working";
}
function shouldHideTasksFooter(tasks, showSpinnerTree) {
  if (!showSpinnerTree)
    return false;
  let hasVisibleTask = false;
  for (const t of Object.values(tasks)) {
    if (!isBackgroundTask(t) || process.env.USER_TYPE === "ant" && isPanelAgentTask(t)) {
      continue;
    }
    hasVisibleTask = true;
    if (t.type !== "in_process_teammate")
      return false;
  }
  return hasVisibleTask;
}
var init_taskStatusUtils = __esm(() => {
  init_figures();
  init_LocalAgentTask();
  init_types();
  init_collapseReadSearch();
});

// src/components/tasks/AsyncAgentDetailDialog.tsx
function AsyncAgentDetailDialog({
  agent,
  onDone,
  onKillAgent,
  onBack
}) {
  const [theme] = useTheme();
  const tools = import_react.useMemo(() => getTools(getEmptyToolPermissionContext()), []);
  const elapsedTime = useElapsedTime(agent.startTime, agent.status === "running", 1000, agent.totalPausedMs ?? 0);
  useKeybindings({
    "confirm:yes": onDone
  }, { context: "Confirmation" });
  const handleKeyDown = (e) => {
    if (e.key === " ") {
      e.preventDefault();
      onDone();
    } else if (e.key === "left" && onBack) {
      e.preventDefault();
      onBack();
    } else if (e.key === "x" && agent.status === "running" && onKillAgent) {
      e.preventDefault();
      onKillAgent();
    }
  };
  const planContent = extractTag(agent.prompt, "plan");
  const displayPrompt = agent.prompt.length > 300 ? agent.prompt.substring(0, 297) + "\u2026" : agent.prompt;
  const tokenCount = agent.result?.totalTokens ?? agent.progress?.tokenCount;
  const toolUseCount = agent.result?.totalToolUseCount ?? agent.progress?.toolUseCount;
  const title = /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
    children: [
      agent.selectedAgent?.agentType ?? "agent",
      " \u203A",
      " ",
      agent.description || "Async agent"
    ]
  }, undefined, true, undefined, this);
  const subtitle = /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
    children: [
      agent.status !== "running" && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
        color: getTaskStatusColor(agent.status),
        children: [
          getTaskStatusIcon(agent.status),
          " ",
          agent.status === "completed" ? "Completed" : agent.status === "failed" ? "Failed" : "Stopped",
          " \xB7 "
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
        dimColor: true,
        children: [
          elapsedTime,
          tokenCount !== undefined && tokenCount > 0 && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(jsx_dev_runtime2.Fragment, {
            children: [
              " \xB7 ",
              formatNumber(tokenCount),
              " tokens"
            ]
          }, undefined, true, undefined, this),
          toolUseCount !== undefined && toolUseCount > 0 && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(jsx_dev_runtime2.Fragment, {
            children: [
              " ",
              "\xB7 ",
              toolUseCount,
              " ",
              toolUseCount === 1 ? "tool" : "tools"
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    tabIndex: 0,
    autoFocus: true,
    onKeyDown: handleKeyDown,
    children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Dialog, {
      title,
      subtitle,
      onCancel: onDone,
      color: "background",
      inputGuide: (exitState) => exitState.pending ? /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
        children: [
          "Press ",
          exitState.keyName,
          " again to exit"
        ]
      }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(Byline, {
        children: [
          onBack && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(KeyboardShortcutHint, {
            shortcut: "\u2190",
            action: "go back"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(KeyboardShortcutHint, {
            shortcut: "Esc/Enter/Space",
            action: "close"
          }, undefined, false, undefined, this),
          agent.status === "running" && onKillAgent && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(KeyboardShortcutHint, {
            shortcut: "x",
            action: "stop"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        children: [
          agent.status === "running" && agent.progress?.recentActivities && agent.progress.recentActivities.length > 0 && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            children: [
              /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                bold: true,
                dimColor: true,
                children: "Progress"
              }, undefined, false, undefined, this),
              agent.progress.recentActivities.map((activity, i) => /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                dimColor: i < agent.progress.recentActivities.length - 1,
                wrap: "truncate-end",
                children: [
                  i === agent.progress.recentActivities.length - 1 ? "\u203A " : "  ",
                  renderToolActivity(activity, tools, theme)
                ]
              }, i, true, undefined, this))
            ]
          }, undefined, true, undefined, this),
          planContent ? /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
            marginTop: 1,
            children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(UserPlanMessage, {
              addMargin: false,
              planContent
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            marginTop: 1,
            children: [
              /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                bold: true,
                dimColor: true,
                children: "Prompt"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                wrap: "wrap",
                children: displayPrompt
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          agent.status === "failed" && agent.error && /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            marginTop: 1,
            children: [
              /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                bold: true,
                color: "error",
                children: "Error"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemedText, {
                color: "error",
                wrap: "wrap",
                children: agent.error
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
var import_react, jsx_dev_runtime2;
var init_AsyncAgentDetailDialog = __esm(() => {
  init_useElapsedTime();
  init_src();
  init_useKeybinding();
  init_Tool();
  init_tools();
  init_format();
  init_messages();
  init_src();
  init_UserPlanMessage();
  init_renderToolActivity();
  init_taskStatusUtils();
  import_react = __toESM(require_react(), 1);
  jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/tasks/RemoteSessionProgress.tsx
function formatReviewStageCounts(stage, found, verified, refuted) {
  if (!stage)
    return `${found} found \xB7 ${verified} verified`;
  if (stage === "synthesizing") {
    const parts = [`${verified} verified`];
    if (refuted > 0)
      parts.push(`${refuted} refuted`);
    parts.push("deduping");
    return parts.join(" \xB7 ");
  }
  if (stage === "verifying") {
    const parts = [`${found} found`, `${verified} verified`];
    if (refuted > 0)
      parts.push(`${refuted} refuted`);
    return parts.join(" \xB7 ");
  }
  return found > 0 ? `${found} found` : "finding";
}
function RainbowText({
  text,
  phase = 0
}) {
  return /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(jsx_dev_runtime3.Fragment, {
    children: [...text].map((ch, i) => /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
      color: getRainbowColor(i + phase),
      children: ch
    }, i, false, undefined, this))
  }, undefined, false, undefined, this);
}
function useSmoothCount(target, time, snap) {
  const displayed = import_react2.useRef(target);
  const lastTick = import_react2.useRef(time);
  if (snap || target < displayed.current) {
    displayed.current = target;
  } else if (target > displayed.current && time !== lastTick.current) {
    displayed.current += 1;
    lastTick.current = time;
  }
  return displayed.current;
}
function ReviewRainbowLine({
  session
}) {
  const settings = useSettings();
  const reducedMotion = settings.prefersReducedMotion ?? false;
  const p = session.reviewProgress;
  const running = session.status === "running";
  const [, time] = useAnimationFrame(running && !reducedMotion ? TICK_MS : null);
  const targetFound = p?.bugsFound ?? 0;
  const targetVerified = p?.bugsVerified ?? 0;
  const targetRefuted = p?.bugsRefuted ?? 0;
  const snap = reducedMotion || !running;
  const found = useSmoothCount(targetFound, time, snap);
  const verified = useSmoothCount(targetVerified, time, snap);
  const refuted = useSmoothCount(targetRefuted, time, snap);
  const phase = Math.floor(time / (TICK_MS * 3)) % 7;
  if (session.status === "completed") {
    return /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(jsx_dev_runtime3.Fragment, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
          color: "background",
          children: [
            DIAMOND_FILLED,
            " "
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(RainbowText, {
          text: "ultrareview",
          phase: 0
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
          dimColor: true,
          children: " ready \xB7 shift+\u2193 to view"
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  if (session.status === "failed") {
    return /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(jsx_dev_runtime3.Fragment, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
          color: "background",
          children: [
            DIAMOND_FILLED,
            " "
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(RainbowText, {
          text: "ultrareview",
          phase: 0
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
          color: "error",
          dimColor: true,
          children: [
            " \xB7 ",
            "error"
          ]
        }, undefined, true, undefined, this)
      ]
    }, undefined, true, undefined, this);
  }
  const tail = !p ? "setting up" : formatReviewStageCounts(p.stage, found, verified, refuted);
  return /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(jsx_dev_runtime3.Fragment, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
        color: "background",
        children: [
          DIAMOND_OPEN,
          " "
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(RainbowText, {
        text: "ultrareview",
        phase: running ? phase : 0
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
        dimColor: true,
        children: [
          " \xB7 ",
          tail
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function RemoteSessionProgress({
  session
}) {
  if (session.isRemoteReview) {
    return /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ReviewRainbowLine, {
      session
    }, undefined, false, undefined, this);
  }
  if (session.status === "completed") {
    return /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
      bold: true,
      color: "success",
      dimColor: true,
      children: "done"
    }, undefined, false, undefined, this);
  }
  if (session.status === "failed") {
    return /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
      bold: true,
      color: "error",
      dimColor: true,
      children: "error"
    }, undefined, false, undefined, this);
  }
  if (!session.todoList.length) {
    return /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
      dimColor: true,
      children: [
        session.status,
        "\u2026"
      ]
    }, undefined, true, undefined, this);
  }
  const completed = count(session.todoList, (_) => _.status === "completed");
  const total = session.todoList.length;
  return /* @__PURE__ */ jsx_dev_runtime3.jsxDEV(ThemedText, {
    dimColor: true,
    children: [
      completed,
      "/",
      total
    ]
  }, undefined, true, undefined, this);
}
var import_react2, jsx_dev_runtime3, TICK_MS = 80;
var init_RemoteSessionProgress = __esm(() => {
  init_figures2();
  init_useSettings();
  init_src();
  init_array();
  init_thinking();
  import_react2 = __toESM(require_react(), 1);
  jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/tasks/ShellProgress.tsx
function TaskStatusText({
  status,
  label,
  suffix
}) {
  const displayLabel = label ?? status;
  const color = status === "completed" ? "success" : status === "failed" ? "error" : status === "killed" ? "warning" : undefined;
  return /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(ThemedText, {
    color,
    dimColor: true,
    children: [
      "(",
      displayLabel,
      suffix,
      ")"
    ]
  }, undefined, true, undefined, this);
}
function ShellProgress({
  shell
}) {
  switch (shell.status) {
    case "completed":
      return /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(TaskStatusText, {
        status: "completed",
        label: "done"
      }, undefined, false, undefined, this);
    case "failed":
      return /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(TaskStatusText, {
        status: "failed",
        label: "error"
      }, undefined, false, undefined, this);
    case "killed":
      return /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(TaskStatusText, {
        status: "killed",
        label: "stopped"
      }, undefined, false, undefined, this);
    case "running":
    case "pending":
      return /* @__PURE__ */ jsx_dev_runtime4.jsxDEV(TaskStatusText, {
        status: "running"
      }, undefined, false, undefined, this);
  }
}
var jsx_dev_runtime4;
var init_ShellProgress = __esm(() => {
  init_src();
  jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/tasks/BackgroundTask.tsx
function BackgroundTask({
  task,
  maxActivityWidth
}) {
  const activityLimit = maxActivityWidth ?? 40;
  switch (task.type) {
    case "local_bash":
      return /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
        children: [
          truncate(task.kind === "monitor" ? task.description : task.command, activityLimit, true),
          " ",
          /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ShellProgress, {
            shell: task
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this);
    case "remote_agent": {
      if (task.isRemoteReview) {
        return /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
          children: /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(RemoteSessionProgress, {
            session: task
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this);
      }
      const running = task.status === "running" || task.status === "pending";
      return /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
        children: [
          /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
            dimColor: true,
            children: [
              running ? DIAMOND_OPEN : DIAMOND_FILLED,
              " "
            ]
          }, undefined, true, undefined, this),
          truncate(task.title, activityLimit, true),
          /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
            dimColor: true,
            children: " \xB7 "
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(RemoteSessionProgress, {
            session: task
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this);
    }
    case "local_agent":
      return /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
        children: [
          truncate(task.description, activityLimit, true),
          " ",
          /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(TaskStatusText, {
            status: task.status,
            label: task.status === "completed" ? "done" : undefined,
            suffix: task.status === "completed" && !task.notified ? ", unread" : undefined
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this);
    case "in_process_teammate": {
      const activity = describeTeammateActivity(task);
      return /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
        children: [
          /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
            color: toInkColor(task.identity.color),
            children: [
              "@",
              task.identity.agentName
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
            dimColor: true,
            children: [
              ": ",
              truncate(activity, activityLimit, true)
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this);
    }
    case "local_workflow": {
      const _task = task;
      return /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
        children: [
          truncate(_task.workflowName ?? task.summary ?? task.description, activityLimit, true),
          " ",
          /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(TaskStatusText, {
            status: task.status,
            label: task.status === "running" ? `${_task.agentCount} ${plural(_task.agentCount, "agent")}` : task.status === "completed" ? "done" : undefined,
            suffix: task.status === "completed" && !task.notified ? ", unread" : undefined
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this);
    }
    case "monitor_mcp":
      return /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
        children: [
          truncate(task.description, activityLimit, true),
          " ",
          /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(TaskStatusText, {
            status: task.status,
            label: task.status === "completed" ? "done" : undefined,
            suffix: task.status === "completed" && !task.notified ? ", unread" : undefined
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this);
    case "dream": {
      const n = task.filesTouched.length;
      const detail = task.phase === "updating" && n > 0 ? `${n} ${plural(n, "file")}` : `${task.sessionsReviewing} ${plural(task.sessionsReviewing, "session")}`;
      return /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
        children: [
          task.description,
          " ",
          /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(ThemedText, {
            dimColor: true,
            children: [
              "\xB7 ",
              task.phase,
              " \xB7 ",
              detail
            ]
          }, undefined, true, undefined, this),
          " ",
          /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(TaskStatusText, {
            status: task.status,
            label: task.status === "completed" ? "done" : undefined,
            suffix: task.status === "completed" && !task.notified ? ", unread" : undefined
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this);
    }
  }
}
var jsx_dev_runtime5;
var init_BackgroundTask = __esm(() => {
  init_src();
  init_ink();
  init_format();
  init_stringUtils();
  init_figures2();
  init_RemoteSessionProgress();
  init_ShellProgress();
  init_taskStatusUtils();
  jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/tasks/DreamDetailDialog.tsx
function DreamDetailDialog({
  task,
  onDone,
  onBack,
  onKill
}) {
  const elapsedTime = useElapsedTime(task.startTime, task.status === "running", 1000, 0);
  useKeybindings({ "confirm:yes": onDone }, { context: "Confirmation" });
  const handleKeyDown = (e) => {
    if (e.key === " ") {
      e.preventDefault();
      onDone();
    } else if (e.key === "left" && onBack) {
      e.preventDefault();
      onBack();
    } else if (e.key === "x" && task.status === "running" && onKill) {
      e.preventDefault();
      onKill();
    }
  };
  const visibleTurns = task.turns.filter((t) => t.text !== "");
  const shown = visibleTurns.slice(-VISIBLE_TURNS);
  const hidden = visibleTurns.length - shown.length;
  return /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    tabIndex: 0,
    autoFocus: true,
    onKeyDown: handleKeyDown,
    children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Dialog, {
      title: "Memory consolidation",
      subtitle: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
        dimColor: true,
        children: [
          elapsedTime,
          " \xB7 reviewing ",
          task.sessionsReviewing,
          " ",
          plural(task.sessionsReviewing, "session"),
          task.filesTouched.length > 0 && /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(jsx_dev_runtime6.Fragment, {
            children: [
              " ",
              "\xB7 ",
              task.filesTouched.length,
              " ",
              plural(task.filesTouched.length, "file"),
              " touched"
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this),
      onCancel: onDone,
      color: "background",
      inputGuide: (exitState) => exitState.pending ? /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
        children: [
          "Press ",
          exitState.keyName,
          " again to exit"
        ]
      }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(Byline, {
        children: [
          onBack && /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(KeyboardShortcutHint, {
            shortcut: "\u2190",
            action: "go back"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(KeyboardShortcutHint, {
            shortcut: "Esc/Enter/Space",
            action: "close"
          }, undefined, false, undefined, this),
          task.status === "running" && onKill && /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(KeyboardShortcutHint, {
            shortcut: "x",
            action: "stop"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      children: /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        gap: 1,
        children: [
          /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
                bold: true,
                children: "Status:"
              }, undefined, false, undefined, this),
              " ",
              task.status === "running" ? /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
                color: "background",
                children: "running"
              }, undefined, false, undefined, this) : task.status === "completed" ? /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
                color: "success",
                children: task.status
              }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
                color: "error",
                children: task.status
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          shown.length === 0 ? /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
            dimColor: true,
            children: task.status === "running" ? "Starting\u2026" : "(no text output)"
          }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(jsx_dev_runtime6.Fragment, {
            children: [
              hidden > 0 && /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
                dimColor: true,
                children: [
                  "(",
                  hidden,
                  " earlier ",
                  plural(hidden, "turn"),
                  ")"
                ]
              }, undefined, true, undefined, this),
              shown.map((turn, i) => /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedBox_default, {
                flexDirection: "column",
                children: [
                  /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
                    wrap: "wrap",
                    children: turn.text
                  }, undefined, false, undefined, this),
                  turn.toolUseCount > 0 && /* @__PURE__ */ jsx_dev_runtime6.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: [
                      "  ",
                      "(",
                      turn.toolUseCount,
                      " ",
                      plural(turn.toolUseCount, "tool"),
                      ")"
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, i, true, undefined, this))
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
var jsx_dev_runtime6, VISIBLE_TURNS = 6;
var init_DreamDetailDialog = __esm(() => {
  init_useElapsedTime();
  init_src();
  init_useKeybinding();
  init_stringUtils();
  init_src();
  jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/tasks/InProcessTeammateDetailDialog.tsx
function InProcessTeammateDetailDialog({
  teammate,
  onDone,
  onKill,
  onBack,
  onForeground
}) {
  const [theme] = useTheme();
  const tools = import_react3.useMemo(() => getTools(getEmptyToolPermissionContext()), []);
  const elapsedTime = useElapsedTime(teammate.startTime, teammate.status === "running", 1000, teammate.totalPausedMs ?? 0);
  useKeybindings({
    "confirm:yes": onDone
  }, { context: "Confirmation" });
  const handleKeyDown = (e) => {
    if (e.key === " ") {
      e.preventDefault();
      onDone();
    } else if (e.key === "left" && onBack) {
      e.preventDefault();
      onBack();
    } else if (e.key === "x" && teammate.status === "running" && onKill) {
      e.preventDefault();
      onKill();
    } else if (e.key === "f" && teammate.status === "running" && onForeground) {
      e.preventDefault();
      onForeground();
    }
  };
  const activity = describeTeammateActivity(teammate);
  const tokenCount = teammate.result?.totalTokens ?? teammate.progress?.tokenCount;
  const toolUseCount = teammate.result?.totalToolUseCount ?? teammate.progress?.toolUseCount;
  const displayPrompt = truncateToWidth(teammate.prompt, 300);
  const title = /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
        color: toInkColor(teammate.identity.color),
        children: [
          "@",
          teammate.identity.agentName
        ]
      }, undefined, true, undefined, this),
      activity && /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
        dimColor: true,
        children: [
          " (",
          activity,
          ")"
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
  const subtitle = /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
    children: [
      teammate.status !== "running" && /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
        color: teammate.status === "completed" ? "success" : teammate.status === "killed" ? "warning" : "error",
        children: [
          teammate.status === "completed" ? "Completed" : teammate.status === "failed" ? "Failed" : "Stopped",
          " \xB7 "
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
        dimColor: true,
        children: [
          elapsedTime,
          tokenCount !== undefined && tokenCount > 0 && /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(jsx_dev_runtime7.Fragment, {
            children: [
              " \xB7 ",
              formatNumber(tokenCount),
              " tokens"
            ]
          }, undefined, true, undefined, this),
          toolUseCount !== undefined && toolUseCount > 0 && /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(jsx_dev_runtime7.Fragment, {
            children: [
              " ",
              "\xB7 ",
              toolUseCount,
              " ",
              toolUseCount === 1 ? "tool" : "tools"
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
  return /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    tabIndex: 0,
    autoFocus: true,
    onKeyDown: handleKeyDown,
    children: /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Dialog, {
      title,
      subtitle,
      onCancel: onDone,
      color: "background",
      inputGuide: (exitState) => exitState.pending ? /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
        children: [
          "Press ",
          exitState.keyName,
          " again to exit"
        ]
      }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(Byline, {
        children: [
          onBack && /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(KeyboardShortcutHint, {
            shortcut: "\u2190",
            action: "go back"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(KeyboardShortcutHint, {
            shortcut: "Esc/Enter/Space",
            action: "close"
          }, undefined, false, undefined, this),
          teammate.status === "running" && onKill && /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(KeyboardShortcutHint, {
            shortcut: "x",
            action: "stop"
          }, undefined, false, undefined, this),
          teammate.status === "running" && onForeground && /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(KeyboardShortcutHint, {
            shortcut: "f",
            action: "foreground"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      children: [
        teammate.status === "running" && teammate.progress?.recentActivities && teammate.progress.recentActivities.length > 0 && /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedBox_default, {
          flexDirection: "column",
          children: [
            /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
              bold: true,
              dimColor: true,
              children: "Progress"
            }, undefined, false, undefined, this),
            teammate.progress.recentActivities.map((activity2, i) => /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
              dimColor: i < teammate.progress.recentActivities.length - 1,
              wrap: "truncate-end",
              children: [
                i === teammate.progress.recentActivities.length - 1 ? "\u203A " : "  ",
                renderToolActivity(activity2, tools, theme)
              ]
            }, i, true, undefined, this))
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedBox_default, {
          flexDirection: "column",
          marginTop: 1,
          children: [
            /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
              bold: true,
              dimColor: true,
              children: "Prompt"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
              wrap: "wrap",
              children: displayPrompt
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        teammate.status === "failed" && teammate.error && /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedBox_default, {
          flexDirection: "column",
          marginTop: 1,
          children: [
            /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
              bold: true,
              color: "error",
              children: "Error"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime7.jsxDEV(ThemedText, {
              color: "error",
              wrap: "wrap",
              children: teammate.error
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
var import_react3, jsx_dev_runtime7;
var init_InProcessTeammateDetailDialog = __esm(() => {
  init_useElapsedTime();
  init_src();
  init_useKeybinding();
  init_Tool();
  init_tools();
  init_format();
  init_src();
  init_ink();
  init_renderToolActivity();
  init_taskStatusUtils();
  import_react3 = __toESM(require_react(), 1);
  jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/tasks/RemoteSessionDetailDialog.tsx
function formatToolUseSummary(name, input) {
  if (name === EXIT_PLAN_MODE_V2_TOOL_NAME) {
    return "Review the plan in MiMo Code on the web";
  }
  if (!input || typeof input !== "object")
    return name;
  if (name === ASK_USER_QUESTION_TOOL_NAME && "questions" in input) {
    const qs = input.questions;
    if (Array.isArray(qs) && qs[0] && typeof qs[0] === "object") {
      const q = "question" in qs[0] && typeof qs[0].question === "string" && qs[0].question ? qs[0].question : ("header" in qs[0]) && typeof qs[0].header === "string" ? qs[0].header : null;
      if (q) {
        const oneLine = q.replace(/\s+/g, " ").trim();
        return `Answer in browser: ${truncateToWidth(oneLine, 50)}`;
      }
    }
  }
  for (const v of Object.values(input)) {
    if (typeof v === "string" && v.trim()) {
      const oneLine = v.replace(/\s+/g, " ").trim();
      return `${name} ${truncateToWidth(oneLine, 60)}`;
    }
  }
  return name;
}
function UltraplanSessionDetail({
  session,
  onDone,
  onBack,
  onKill
}) {
  const running = session.status === "running" || session.status === "pending";
  const phase = session.ultraplanPhase;
  const statusText = running ? phase ? PHASE_LABEL[phase] : "running" : session.status;
  const elapsedTime = useElapsedTime(session.startTime, running, 1000, 0, session.endTime);
  const { agentsWorking, toolCalls, lastToolCall } = import_react4.useMemo(() => {
    let spawns = 0;
    let calls = 0;
    let lastBlock = null;
    for (const msg of session.log) {
      if (msg.type !== "assistant")
        continue;
      const content = msg.message?.content ?? [];
      for (const block of content) {
        if (block.type !== "tool_use")
          continue;
        calls++;
        lastBlock = block;
        if (block.name === AGENT_TOOL_NAME || block.name === LEGACY_AGENT_TOOL_NAME) {
          spawns++;
        }
      }
    }
    return {
      agentsWorking: 1 + spawns,
      toolCalls: calls,
      lastToolCall: lastBlock ? formatToolUseSummary(lastBlock.name, lastBlock.input) : null
    };
  }, [session.log]);
  const sessionUrl = getRemoteTaskSessionUrl(session.sessionId);
  const goBackOrClose = onBack ?? (() => onDone("Remote session details dismissed", { display: "system" }));
  const [confirmingStop, setConfirmingStop] = import_react4.useState(false);
  if (confirmingStop) {
    return /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Dialog, {
      title: "Stop ultraplan?",
      onCancel: () => setConfirmingStop(false),
      color: "background",
      children: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        gap: 1,
        children: [
          /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
            dimColor: true,
            children: "This will terminate the MiMo Code on the web session."
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Select, {
            options: [
              { label: "Terminate session", value: "stop" },
              { label: "Back", value: "back" }
            ],
            onChange: (v) => {
              if (v === "stop") {
                onKill?.();
                goBackOrClose();
              } else {
                setConfirmingStop(false);
              }
            }
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Dialog, {
    title: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
          color: "background",
          children: [
            phase === "plan_ready" ? DIAMOND_FILLED : DIAMOND_OPEN,
            " "
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
          bold: true,
          children: "ultraplan"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
          dimColor: true,
          children: [
            " \xB7 ",
            elapsedTime,
            " \xB7 ",
            statusText
          ]
        }, undefined, true, undefined, this)
      ]
    }, undefined, true, undefined, this),
    onCancel: goBackOrClose,
    color: "background",
    children: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      gap: 1,
      children: [
        /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
          children: [
            phase === "plan_ready" && /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
              color: "success",
              children: [
                figures_default.tick,
                " "
              ]
            }, undefined, true, undefined, this),
            agentsWorking,
            " ",
            plural(agentsWorking, "agent"),
            " ",
            phase ? AGENT_VERB[phase] : "working",
            " \xB7 ",
            toolCalls,
            " tool",
            " ",
            plural(toolCalls, "call")
          ]
        }, undefined, true, undefined, this),
        lastToolCall && /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
          dimColor: true,
          children: lastToolCall
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Link, {
          url: sessionUrl,
          children: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
            dimColor: true,
            children: sessionUrl
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Select, {
          options: [
            {
              label: "Review in MiMo Code on the web",
              value: "open"
            },
            ...onKill && running ? [{ label: "Stop ultraplan", value: "stop" }] : [],
            { label: "Back", value: "back" }
          ],
          onChange: (v) => {
            switch (v) {
              case "open":
                openBrowser(sessionUrl);
                onDone();
                return;
              case "stop":
                setConfirmingStop(true);
                return;
              case "back":
                goBackOrClose();
                return;
            }
          }
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
function StagePipeline({
  stage,
  completed,
  hasProgress
}) {
  const currentIdx = stage ? STAGES.indexOf(stage) : -1;
  const inSetup = !completed && !hasProgress;
  return /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
    children: [
      inSetup ? /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
        color: "background",
        children: "Setup"
      }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
        dimColor: true,
        children: "Setup"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
        dimColor: true,
        children: " \u2192 "
      }, undefined, false, undefined, this),
      STAGES.map((s, i) => {
        const isCurrent = !completed && !inSetup && i === currentIdx;
        return /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(import_react4.default.Fragment, {
          children: [
            i > 0 && /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
              dimColor: true,
              children: " \u2192 "
            }, undefined, false, undefined, this),
            isCurrent ? /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
              color: "background",
              children: STAGE_LABELS[s]
            }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
              dimColor: true,
              children: STAGE_LABELS[s]
            }, undefined, false, undefined, this)
          ]
        }, s, true, undefined, this);
      }),
      completed && /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
        color: "success",
        children: " \u2713"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function reviewCountsLine(session) {
  const p = session.reviewProgress;
  if (!p)
    return session.status === "completed" ? "done" : "setting up";
  const verified = p.bugsVerified;
  const refuted = p.bugsRefuted ?? 0;
  if (session.status === "completed") {
    const parts = [`${verified} ${plural(verified, "finding")}`];
    if (refuted > 0)
      parts.push(`${refuted} refuted`);
    return parts.join(" \xB7 ");
  }
  return formatReviewStageCounts(p.stage, p.bugsFound, verified, refuted);
}
function ReviewSessionDetail({
  session,
  onDone,
  onBack,
  onKill
}) {
  const completed = session.status === "completed";
  const running = session.status === "running" || session.status === "pending";
  const [confirmingStop, setConfirmingStop] = import_react4.useState(false);
  const elapsedTime = useElapsedTime(session.startTime, running, 1000, 0, session.endTime);
  const handleClose = () => onDone("Remote session details dismissed", { display: "system" });
  const goBackOrClose = onBack ?? handleClose;
  const sessionUrl = getRemoteTaskSessionUrl(session.sessionId);
  const statusLabel = completed ? "ready" : running ? "running" : session.status;
  if (confirmingStop) {
    return /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Dialog, {
      title: "Stop ultrareview?",
      onCancel: () => setConfirmingStop(false),
      color: "background",
      children: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        gap: 1,
        children: [
          /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
            dimColor: true,
            children: "This archives the remote session and stops local tracking. The review will not complete and any findings so far are discarded."
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Select, {
            options: [
              { label: "Stop ultrareview", value: "stop" },
              { label: "Back", value: "back" }
            ],
            onChange: (v) => {
              if (v === "stop") {
                onKill?.();
                goBackOrClose();
              } else {
                setConfirmingStop(false);
              }
            }
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this);
  }
  const options = completed ? [
    { label: "Open in MiMo Code on the web", value: "open" },
    { label: "Dismiss", value: "dismiss" }
  ] : [
    { label: "Open in MiMo Code on the web", value: "open" },
    ...onKill && running ? [{ label: "Stop ultrareview", value: "stop" }] : [],
    { label: "Back", value: "back" }
  ];
  const handleSelect = (action) => {
    switch (action) {
      case "open":
        openBrowser(sessionUrl);
        onDone();
        break;
      case "stop":
        setConfirmingStop(true);
        break;
      case "back":
        goBackOrClose();
        break;
      case "dismiss":
        handleClose();
        break;
    }
  };
  return /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Dialog, {
    title: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
          color: "background",
          children: [
            completed ? DIAMOND_FILLED : DIAMOND_OPEN,
            " "
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
          bold: true,
          children: "ultrareview"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
          dimColor: true,
          children: [
            " \xB7 ",
            elapsedTime,
            " \xB7 ",
            statusLabel
          ]
        }, undefined, true, undefined, this)
      ]
    }, undefined, true, undefined, this),
    onCancel: goBackOrClose,
    color: "background",
    inputGuide: (exitState) => exitState.pending ? /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
      children: [
        "Press ",
        exitState.keyName,
        " again to exit"
      ]
    }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Byline, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(KeyboardShortcutHint, {
          shortcut: "Enter",
          action: "select"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(KeyboardShortcutHint, {
          shortcut: "Esc",
          action: "go back"
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this),
    children: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      gap: 1,
      children: [
        /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(StagePipeline, {
          stage: session.reviewProgress?.stage,
          completed,
          hasProgress: !!session.reviewProgress
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
          flexDirection: "column",
          children: [
            /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
              children: reviewCountsLine(session)
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Link, {
              url: sessionUrl,
              children: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
                dimColor: true,
                children: sessionUrl
              }, undefined, false, undefined, this)
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Select, {
          options,
          onChange: handleSelect
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
function RemoteSessionDetailDialog({
  session,
  toolUseContext,
  onDone,
  onBack,
  onKill
}) {
  const [isTeleporting, setIsTeleporting] = import_react4.useState(false);
  const [teleportError, setTeleportError] = import_react4.useState(null);
  const lastMessages = import_react4.useMemo(() => {
    if (session.isUltraplan || session.isRemoteReview)
      return [];
    return normalizeMessages(toInternalMessages(session.log)).filter((_) => _.type !== "progress").slice(-3);
  }, [session]);
  if (session.isUltraplan) {
    return /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(UltraplanSessionDetail, {
      session,
      onDone,
      onBack,
      onKill
    }, undefined, false, undefined, this);
  }
  if (session.isRemoteReview) {
    return /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ReviewSessionDetail, {
      session,
      onDone,
      onBack,
      onKill
    }, undefined, false, undefined, this);
  }
  const handleClose = () => onDone("Remote session details dismissed", { display: "system" });
  const handleKeyDown = (e) => {
    if (e.key === " ") {
      e.preventDefault();
      onDone("Remote session details dismissed", { display: "system" });
    } else if (e.key === "left" && onBack) {
      e.preventDefault();
      onBack();
    } else if (e.key === "t" && !isTeleporting) {
      e.preventDefault();
      handleTeleport();
    } else if (e.key === "return") {
      e.preventDefault();
      handleClose();
    }
  };
  async function handleTeleport() {
    setIsTeleporting(true);
    setTeleportError(null);
    try {
      await teleportResumeCodeSession(session.sessionId);
    } catch (err) {
      setTeleportError(errorMessage(err));
    } finally {
      setIsTeleporting(false);
    }
  }
  const displayTitle = truncateToWidth(session.title, 50);
  const displayStatus = session.status === "pending" ? "starting" : session.status;
  return /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    tabIndex: 0,
    autoFocus: true,
    onKeyDown: handleKeyDown,
    children: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Dialog, {
      title: "Remote session details",
      onCancel: handleClose,
      color: "background",
      inputGuide: (exitState) => exitState.pending ? /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
        children: [
          "Press ",
          exitState.keyName,
          " again to exit"
        ]
      }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Byline, {
        children: [
          onBack && /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(KeyboardShortcutHint, {
            shortcut: "\u2190",
            action: "go back"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(KeyboardShortcutHint, {
            shortcut: "Esc/Enter/Space",
            action: "close"
          }, undefined, false, undefined, this),
          !isTeleporting && /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(KeyboardShortcutHint, {
            shortcut: "t",
            action: "teleport"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      children: [
        /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
          flexDirection: "column",
          children: [
            /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
              children: [
                /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
                  bold: true,
                  children: "Status"
                }, undefined, false, undefined, this),
                ":",
                " ",
                displayStatus === "running" || displayStatus === "starting" ? /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
                  color: "background",
                  children: displayStatus
                }, undefined, false, undefined, this) : displayStatus === "completed" ? /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
                  color: "success",
                  children: displayStatus
                }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
                  color: "error",
                  children: displayStatus
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
              children: [
                /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
                  bold: true,
                  children: "Runtime"
                }, undefined, false, undefined, this),
                ":",
                " ",
                formatDuration((session.endTime ?? Date.now()) - session.startTime)
              ]
            }, undefined, true, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
              wrap: "truncate-end",
              children: [
                /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
                  bold: true,
                  children: "Title"
                }, undefined, false, undefined, this),
                ": ",
                displayTitle
              ]
            }, undefined, true, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
              children: [
                /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
                  bold: true,
                  children: "Progress"
                }, undefined, false, undefined, this),
                ":",
                " ",
                /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(RemoteSessionProgress, {
                  session
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
              children: [
                /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
                  bold: true,
                  children: "Session URL"
                }, undefined, false, undefined, this),
                ":",
                " ",
                /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Link, {
                  url: getRemoteTaskSessionUrl(session.sessionId),
                  children: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: getRemoteTaskSessionUrl(session.sessionId)
                  }, undefined, false, undefined, this)
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this)
          ]
        }, undefined, true, undefined, this),
        session.log.length > 0 && /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
          flexDirection: "column",
          marginTop: 1,
          children: [
            /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
              children: [
                /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
                  bold: true,
                  children: "Recent messages"
                }, undefined, false, undefined, this),
                ":"
              ]
            }, undefined, true, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
              flexDirection: "column",
              height: 10,
              overflowY: "hidden",
              children: lastMessages.map((msg, i) => /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Message, {
                message: msg,
                lookups: EMPTY_LOOKUPS,
                addMargin: i > 0,
                tools: toolUseContext.options.tools,
                commands: toolUseContext.options.commands,
                verbose: toolUseContext.options.verbose,
                inProgressToolUseIDs: new Set,
                progressMessagesForMessage: [],
                shouldAnimate: false,
                shouldShowDot: false,
                style: "condensed",
                isTranscriptMode: false,
                isStatic: true
              }, i, false, undefined, this))
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
              marginTop: 1,
              children: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
                dimColor: true,
                italic: true,
                children: [
                  "Showing last ",
                  lastMessages.length,
                  " of ",
                  session.log.length,
                  " ",
                  "messages"
                ]
              }, undefined, true, undefined, this)
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        teleportError && /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedBox_default, {
          marginTop: 1,
          children: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
            color: "error",
            children: [
              "Teleport failed: ",
              teleportError
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this),
        isTeleporting && /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(ThemedText, {
          color: "background",
          children: "Teleporting to session\u2026"
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
var import_react4, jsx_dev_runtime8, PHASE_LABEL, AGENT_VERB, STAGES, STAGE_LABELS;
var init_RemoteSessionDetailDialog = __esm(() => {
  init_figures();
  init_figures2();
  init_useElapsedTime();
  init_src();
  init_RemoteAgentTask();
  init_constants();
  init_prompt();
  init_constants2();
  init_browser();
  init_errors();
  init_format();
  init_mappers();
  init_messages();
  init_stringUtils();
  init_teleport();
  init_select();
  init_src();
  init_Message();
  init_RemoteSessionProgress();
  import_react4 = __toESM(require_react(), 1);
  jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime(), 1);
  PHASE_LABEL = {
    needs_input: "input required",
    plan_ready: "ready"
  };
  AGENT_VERB = {
    needs_input: "waiting",
    plan_ready: "done"
  };
  STAGES = ["finding", "verifying", "synthesizing"];
  STAGE_LABELS = {
    finding: "Find",
    verifying: "Verify",
    synthesizing: "Dedupe"
  };
});

// src/components/tasks/ShellDetailDialog.tsx
async function getTaskOutput(shell) {
  const path = getTaskOutputPath(shell.id);
  try {
    const result = await tailFile(path, SHELL_DETAIL_TAIL_BYTES);
    return { content: result.content, bytesTotal: result.bytesTotal };
  } catch {
    return { content: "", bytesTotal: 0 };
  }
}
function ShellDetailDialog({
  shell,
  onDone,
  onKillShell,
  onBack
}) {
  const { columns } = useTerminalSize();
  const [outputPromise, setOutputPromise] = import_react5.useState(() => getTaskOutput(shell));
  const deferredOutputPromise = import_react5.useDeferredValue(outputPromise);
  import_react5.useEffect(() => {
    if (shell.status !== "running") {
      return;
    }
    const timer = setInterval((setOutputPromise2, shell2) => setOutputPromise2(getTaskOutput(shell2)), 1000, setOutputPromise, shell);
    return () => clearInterval(timer);
  }, [shell.id, shell.status]);
  const handleClose = () => onDone("Shell details dismissed", { display: "system" });
  useKeybindings({
    "confirm:yes": handleClose
  }, { context: "Confirmation" });
  const handleKeyDown = (e) => {
    if (e.key === " ") {
      e.preventDefault();
      onDone("Shell details dismissed", { display: "system" });
    } else if (e.key === "left" && onBack) {
      e.preventDefault();
      onBack();
    } else if (e.key === "x" && shell.status === "running" && onKillShell) {
      e.preventDefault();
      onKillShell();
    }
  };
  const isMonitor = shell.kind === "monitor";
  const displayCommand = truncateToWidth(shell.command, 280);
  return /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    tabIndex: 0,
    autoFocus: true,
    onKeyDown: handleKeyDown,
    children: /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Dialog, {
      title: isMonitor ? "Monitor details" : "Shell details",
      onCancel: handleClose,
      color: "background",
      inputGuide: (exitState) => exitState.pending ? /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ThemedText, {
        children: [
          "Press ",
          exitState.keyName,
          " again to exit"
        ]
      }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(Byline, {
        children: [
          onBack && /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(KeyboardShortcutHint, {
            shortcut: "\u2190",
            action: "go back"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(KeyboardShortcutHint, {
            shortcut: "Esc/Enter/Space",
            action: "close"
          }, undefined, false, undefined, this),
          shell.status === "running" && onKillShell && /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(KeyboardShortcutHint, {
            shortcut: "x",
            action: "stop"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      children: [
        /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ThemedBox_default, {
          flexDirection: "column",
          children: [
            /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ThemedText, {
              children: [
                /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ThemedText, {
                  bold: true,
                  children: "Status:"
                }, undefined, false, undefined, this),
                " ",
                shell.status === "running" ? /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ThemedText, {
                  color: "background",
                  children: [
                    shell.status,
                    shell.result?.code !== undefined && ` (exit code: ${shell.result.code})`
                  ]
                }, undefined, true, undefined, this) : shell.status === "completed" ? /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ThemedText, {
                  color: "success",
                  children: [
                    shell.status,
                    shell.result?.code !== undefined && ` (exit code: ${shell.result.code})`
                  ]
                }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ThemedText, {
                  color: "error",
                  children: [
                    shell.status,
                    shell.result?.code !== undefined && ` (exit code: ${shell.result.code})`
                  ]
                }, undefined, true, undefined, this)
              ]
            }, undefined, true, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ThemedText, {
              children: [
                /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ThemedText, {
                  bold: true,
                  children: "Runtime:"
                }, undefined, false, undefined, this),
                " ",
                formatDuration((shell.endTime ?? Date.now()) - shell.startTime)
              ]
            }, undefined, true, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ThemedText, {
              wrap: "wrap",
              children: [
                /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ThemedText, {
                  bold: true,
                  children: isMonitor ? "Script:" : "Command:"
                }, undefined, false, undefined, this),
                " ",
                displayCommand
              ]
            }, undefined, true, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ThemedBox_default, {
          flexDirection: "column",
          children: [
            /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ThemedText, {
              bold: true,
              children: "Output:"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(import_react5.Suspense, {
              fallback: /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ThemedText, {
                dimColor: true,
                children: "Loading output\u2026"
              }, undefined, false, undefined, this),
              children: /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ShellOutputContent, {
                outputPromise: deferredOutputPromise,
                columns
              }, undefined, false, undefined, this)
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
function ShellOutputContent({
  outputPromise,
  columns
}) {
  const { content, bytesTotal } = import_react5.use(outputPromise);
  if (!content) {
    return /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ThemedText, {
      dimColor: true,
      children: "No output available"
    }, undefined, false, undefined, this);
  }
  const starts = [];
  let pos = content.length;
  for (let i = 0;i < 10 && pos > 0; i++) {
    const prev = content.lastIndexOf(`
`, pos - 1);
    starts.push(prev + 1);
    pos = prev;
  }
  starts.reverse();
  const isIncomplete = bytesTotal > content.length;
  const rendered = [];
  for (let i = 0;i < starts.length; i++) {
    const start = starts[i];
    const end = i < starts.length - 1 ? starts[i + 1] - 1 : content.length;
    const line = content.slice(start, end);
    if (line)
      rendered.push(line);
  }
  return /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(jsx_dev_runtime9.Fragment, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ThemedBox_default, {
        borderStyle: "round",
        paddingX: 1,
        flexDirection: "column",
        height: 12,
        maxWidth: columns - 6,
        children: rendered.map((line, i) => /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ThemedText, {
          wrap: "truncate-end",
          children: line
        }, i, false, undefined, this))
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(ThemedText, {
        dimColor: true,
        italic: true,
        children: [
          `Showing ${rendered.length} lines`,
          isIncomplete ? ` of ${formatFileSize(bytesTotal)}` : ""
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var import_react5, jsx_dev_runtime9, SHELL_DETAIL_TAIL_BYTES = 8192;
var init_ShellDetailDialog = __esm(() => {
  init_useTerminalSize();
  init_src();
  init_useKeybinding();
  init_format();
  init_fsOperations();
  init_diskOutput();
  init_src();
  import_react5 = __toESM(require_react(), 1);
  jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/design-system/Byline.tsx
var init_Byline = __esm(() => {
  init_src();
});

// src/components/design-system/KeyboardShortcutHint.tsx
var init_KeyboardShortcutHint = __esm(() => {
  init_src();
});

// src/components/tasks/WorkflowDetailDialog.tsx
var exports_WorkflowDetailDialog = {};
__export(exports_WorkflowDetailDialog, {
  WorkflowDetailDialog: () => WorkflowDetailDialog
});
function WorkflowDetailDialog({
  workflow,
  onDone,
  onKill,
  onSkipAgent: _onSkipAgent,
  onRetryAgent: _onRetryAgent,
  onBack
}) {
  const elapsedTime = useElapsedTime(workflow.startTime, workflow.status === "running", 1000, 0);
  useKeybindings({}, { context: "WorkflowDetail" });
  const handleKeyDown = import_react6.useCallback((e) => {
    if (e.key === "left" && onBack) {
      e.preventDefault();
      onBack();
    } else if (e.key === "x" && workflow.status === "running" && onKill) {
      e.preventDefault();
      onKill();
    }
  }, [onBack, onKill, workflow.status]);
  return /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    tabIndex: 0,
    borderStyle: "round",
    onKeyDown: handleKeyDown,
    children: /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Dialog, {
      title: "Workflow",
      subtitle: /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
        dimColor: true,
        children: [
          elapsedTime,
          " \xB7 ",
          workflow.workflowName
        ]
      }, undefined, true, undefined, this),
      onCancel: onBack ?? (() => {}),
      inputGuide: () => /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(Byline, {
        children: [
          onBack && /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(KeyboardShortcutHint, {
            shortcut: "\u2190",
            action: "go back"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(KeyboardShortcutHint, {
            shortcut: "Esc",
            action: "close"
          }, undefined, false, undefined, this),
          workflow.status === "running" && onKill && /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(KeyboardShortcutHint, {
            shortcut: "x",
            action: "stop"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      children: /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        gap: 1,
        children: [
          /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                bold: true,
                children: "Status:"
              }, undefined, false, undefined, this),
              " ",
              workflow.status === "running" ? /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                color: "ansi:green",
                children: "running"
              }, undefined, false, undefined, this) : workflow.status === "completed" ? /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                color: "ansi:green",
                children: workflow.status
              }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                color: "ansi:red",
                children: workflow.status
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                bold: true,
                children: "Description:"
              }, undefined, false, undefined, this),
              " ",
              workflow.description
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                bold: true,
                children: "Workflow:"
              }, undefined, false, undefined, this),
              " ",
              workflow.workflowName
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                bold: true,
                children: "File:"
              }, undefined, false, undefined, this),
              " ",
              workflow.workflowFile
            ]
          }, undefined, true, undefined, this),
          workflow.summary && /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                bold: true,
                children: "Summary:"
              }, undefined, false, undefined, this),
              " ",
              workflow.summary
            ]
          }, undefined, true, undefined, this),
          workflow.output && /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            children: [
              /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                bold: true,
                children: "Output:"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime10.jsxDEV(ThemedText, {
                dimColor: true,
                children: workflow.output
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
var import_react6, jsx_dev_runtime10;
var init_WorkflowDetailDialog = __esm(() => {
  init_useElapsedTime();
  init_src();
  init_useKeybinding();
  init_Byline();
  init_Dialog();
  init_KeyboardShortcutHint();
  import_react6 = __toESM(require_react(), 1);
  jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/tasks/MonitorMcpDetailDialog.tsx
var exports_MonitorMcpDetailDialog = {};
__export(exports_MonitorMcpDetailDialog, {
  MonitorMcpDetailDialog: () => MonitorMcpDetailDialog
});
function MonitorMcpDetailDialog({
  task,
  onBack,
  onKill
}) {
  const elapsedTime = useElapsedTime(task.startTime, task.status === "running", 1000, 0);
  useKeybindings({}, { context: "MonitorMcpDetail" });
  const handleKeyDown = (e) => {
    if (e.key === "left" && onBack) {
      e.preventDefault();
      onBack();
    } else if (e.key === "x" && task.status === "running" && onKill) {
      e.preventDefault();
      onKill();
    }
  };
  return /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    tabIndex: 0,
    borderStyle: "round",
    onKeyDown: handleKeyDown,
    children: /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(Dialog, {
      title: "MCP Monitor",
      subtitle: /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedText, {
        dimColor: true,
        children: [
          elapsedTime,
          " \xB7 ",
          task.serverName,
          ":",
          task.resourceUri
        ]
      }, undefined, true, undefined, this),
      onCancel: onBack ?? (() => {}),
      inputGuide: () => /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(Byline, {
        children: [
          onBack && /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(KeyboardShortcutHint, {
            shortcut: "\u2190",
            action: "go back"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(KeyboardShortcutHint, {
            shortcut: "Esc",
            action: "close"
          }, undefined, false, undefined, this),
          task.status === "running" && onKill && /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(KeyboardShortcutHint, {
            shortcut: "x",
            action: "stop"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      children: /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        gap: 1,
        children: [
          /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedText, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedText, {
                bold: true,
                children: "Status:"
              }, undefined, false, undefined, this),
              " ",
              task.status === "running" ? /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedText, {
                color: "ansi:green",
                children: "running"
              }, undefined, false, undefined, this) : task.status === "completed" ? /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedText, {
                color: "ansi:green",
                children: task.status
              }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedText, {
                color: "ansi:red",
                children: task.status
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedText, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedText, {
                bold: true,
                children: "Description:"
              }, undefined, false, undefined, this),
              " ",
              task.description
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedText, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedText, {
                bold: true,
                children: "Server:"
              }, undefined, false, undefined, this),
              " ",
              task.serverName
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedText, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedText, {
                bold: true,
                children: "Resource:"
              }, undefined, false, undefined, this),
              " ",
              task.resourceUri
            ]
          }, undefined, true, undefined, this),
          task.command && /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedText, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime11.jsxDEV(ThemedText, {
                bold: true,
                children: "Command:"
              }, undefined, false, undefined, this),
              " ",
              task.command
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
var jsx_dev_runtime11;
var init_MonitorMcpDetailDialog = __esm(() => {
  init_useElapsedTime();
  init_src();
  init_useKeybinding();
  init_Byline();
  init_Dialog();
  init_KeyboardShortcutHint();
  jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime(), 1);
});

// src/components/tasks/BackgroundTasksDialog.tsx
function getSelectableBackgroundTasks(tasks, foregroundedTaskId) {
  const backgroundTasks = Object.values(tasks ?? {}).filter(isBackgroundTask);
  return backgroundTasks.filter((task) => !(task.type === "local_agent" && task.id === foregroundedTaskId));
}
function BackgroundTasksDialog({
  onDone,
  toolUseContext,
  initialDetailTaskId
}) {
  const tasks = useAppState((s) => s.tasks);
  const foregroundedTaskId = useAppState((s) => s.foregroundedTaskId);
  const showSpinnerTree = useAppState((s) => s.expandedView) === "teammates";
  const setAppState = useSetAppState();
  const killAgentsShortcut = useShortcutDisplay("chat:killAgents", "Chat", "ctrl+x ctrl+k");
  const typedTasks = tasks;
  const skippedListOnMount = import_react7.useRef(false);
  const [viewState, setViewState] = import_react7.useState(() => {
    if (initialDetailTaskId) {
      skippedListOnMount.current = true;
      return { mode: "detail", itemId: initialDetailTaskId };
    }
    const allItems = getSelectableBackgroundTasks(typedTasks, foregroundedTaskId);
    if (allItems.length === 1) {
      skippedListOnMount.current = true;
      return { mode: "detail", itemId: allItems[0].id };
    }
    return { mode: "list" };
  });
  const [selectedIndex, setSelectedIndex] = import_react7.useState(0);
  useRegisterOverlay("background-tasks-dialog");
  const {
    bashTasks,
    remoteSessions,
    agentTasks,
    teammateTasks,
    workflowTasks,
    mcpMonitors,
    dreamTasks,
    allSelectableItems
  } = import_react7.useMemo(() => {
    const backgroundTasks = Object.values(typedTasks ?? {}).filter(isBackgroundTask);
    const allItems = backgroundTasks.map(toListItem);
    const sorted = allItems.sort((a, b) => {
      const aStatus = a.status;
      const bStatus = b.status;
      if (aStatus === "running" && bStatus !== "running")
        return -1;
      if (aStatus !== "running" && bStatus === "running")
        return 1;
      const aTime = "task" in a ? a.task.startTime : 0;
      const bTime = "task" in b ? b.task.startTime : 0;
      return bTime - aTime;
    });
    const bash = sorted.filter((item) => item.type === "local_bash");
    const remote = sorted.filter((item) => item.type === "remote_agent");
    const agent = sorted.filter((item) => item.type === "local_agent" && item.id !== foregroundedTaskId);
    const workflows = sorted.filter((item) => item.type === "local_workflow");
    const monitorMcp = sorted.filter((item) => item.type === "monitor_mcp");
    const dreamTasks2 = sorted.filter((item) => item.type === "dream");
    const teammates = showSpinnerTree ? [] : sorted.filter((item) => item.type === "in_process_teammate");
    const leaderItem = teammates.length > 0 ? [
      {
        id: "__leader__",
        type: "leader",
        label: `@${TEAM_LEAD_NAME}`,
        status: "running"
      }
    ] : [];
    return {
      bashTasks: bash,
      remoteSessions: remote,
      agentTasks: agent,
      workflowTasks: workflows,
      mcpMonitors: monitorMcp,
      dreamTasks: dreamTasks2,
      teammateTasks: [...leaderItem, ...teammates],
      allSelectableItems: [
        ...leaderItem,
        ...teammates,
        ...bash,
        ...monitorMcp,
        ...remote,
        ...agent,
        ...workflows,
        ...dreamTasks2
      ]
    };
  }, [typedTasks, foregroundedTaskId, showSpinnerTree]);
  const currentSelection = allSelectableItems[selectedIndex] ?? null;
  useKeybindings({
    "confirm:previous": () => setSelectedIndex((prev) => Math.max(0, prev - 1)),
    "confirm:next": () => setSelectedIndex((prev) => Math.min(allSelectableItems.length - 1, prev + 1)),
    "confirm:yes": () => {
      const current = allSelectableItems[selectedIndex];
      if (current) {
        if (current.type === "leader") {
          exitTeammateView(setAppState);
          onDone("Viewing leader", { display: "system" });
        } else {
          setViewState({ mode: "detail", itemId: current.id });
        }
      }
    }
  }, { context: "Confirmation", isActive: viewState.mode === "list" });
  const handleKeyDown = (e) => {
    if (viewState.mode !== "list")
      return;
    if (e.key === "left") {
      e.preventDefault();
      onDone("Background tasks dialog dismissed", { display: "system" });
      return;
    }
    const currentSelection2 = allSelectableItems[selectedIndex];
    if (!currentSelection2)
      return;
    if (e.key === "x") {
      e.preventDefault();
      if (currentSelection2.type === "local_bash" && currentSelection2.status === "running") {
        killShellTask(currentSelection2.id);
      } else if (currentSelection2.type === "local_agent" && currentSelection2.status === "running") {
        killAgentTask(currentSelection2.id);
      } else if (currentSelection2.type === "in_process_teammate" && currentSelection2.status === "running") {
        killTeammateTask(currentSelection2.id);
      } else if (currentSelection2.type === "local_workflow" && currentSelection2.status === "running" && killWorkflowTask) {
        killWorkflowTask(currentSelection2.id, setAppState);
      } else if (currentSelection2.type === "monitor_mcp" && currentSelection2.status === "running" && killMonitorMcp) {
        killMonitorMcp(currentSelection2.id, setAppState);
      } else if (currentSelection2.type === "dream" && currentSelection2.status === "running") {
        killDreamTask(currentSelection2.id);
      } else if (currentSelection2.type === "remote_agent" && currentSelection2.status === "running") {
        if (currentSelection2.task.isUltraplan) {
          stopUltraplan(currentSelection2.id, currentSelection2.task.sessionId, setAppState);
        } else {
          killRemoteAgentTask(currentSelection2.id);
        }
      }
    }
    if (e.key === "f") {
      if (currentSelection2.type === "in_process_teammate" && currentSelection2.status === "running") {
        e.preventDefault();
        enterTeammateView(currentSelection2.id, setAppState);
        onDone("Viewing teammate", { display: "system" });
      } else if (currentSelection2.type === "leader") {
        e.preventDefault();
        exitTeammateView(setAppState);
        onDone("Viewing leader", { display: "system" });
      }
    }
  };
  async function killShellTask(taskId) {
    await LocalShellTask.kill(taskId, setAppState);
  }
  async function killAgentTask(taskId) {
    await LocalAgentTask.kill(taskId, setAppState);
  }
  async function killTeammateTask(taskId) {
    await InProcessTeammateTask.kill(taskId, setAppState);
  }
  async function killDreamTask(taskId) {
    await DreamTask.kill(taskId, setAppState);
  }
  async function killRemoteAgentTask(taskId) {
    await RemoteAgentTask.kill(taskId, setAppState);
  }
  const onDoneEvent = import_react7.useEffectEvent(onDone);
  import_react7.useEffect(() => {
    if (viewState.mode !== "list") {
      const task = (typedTasks ?? {})[viewState.itemId];
      if (!task || task.type !== "local_workflow" && !isBackgroundTask(task)) {
        if (skippedListOnMount.current) {
          onDoneEvent("Background tasks dialog dismissed", {
            display: "system"
          });
        } else {
          setViewState({ mode: "list" });
        }
      }
    }
    const totalItems = allSelectableItems.length;
    if (selectedIndex >= totalItems && totalItems > 0) {
      setSelectedIndex(totalItems - 1);
    }
  }, [viewState, typedTasks, selectedIndex, allSelectableItems, onDoneEvent]);
  const goBackToList = () => {
    if (skippedListOnMount.current && allSelectableItems.length <= 1) {
      onDone("Background tasks dialog dismissed", { display: "system" });
    } else {
      skippedListOnMount.current = false;
      setViewState({ mode: "list" });
    }
  };
  if (viewState.mode !== "list" && typedTasks) {
    const task = typedTasks[viewState.itemId];
    if (!task) {
      return null;
    }
    switch (task.type) {
      case "local_bash":
        return /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ShellDetailDialog, {
          shell: task,
          onDone,
          onKillShell: () => void killShellTask(task.id),
          onBack: goBackToList
        }, `shell-${task.id}`, false, undefined, this);
      case "local_agent":
        return /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(AsyncAgentDetailDialog, {
          agent: task,
          onDone,
          onKillAgent: () => void killAgentTask(task.id),
          onBack: goBackToList
        }, `agent-${task.id}`, false, undefined, this);
      case "remote_agent":
        return /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(RemoteSessionDetailDialog, {
          session: task,
          onDone,
          toolUseContext,
          onBack: goBackToList,
          onKill: task.status !== "running" ? undefined : task.isUltraplan ? () => void stopUltraplan(task.id, task.sessionId, setAppState) : () => void killRemoteAgentTask(task.id)
        }, `session-${task.id}`, false, undefined, this);
      case "in_process_teammate":
        return /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(InProcessTeammateDetailDialog, {
          teammate: task,
          onDone,
          onKill: task.status === "running" ? () => void killTeammateTask(task.id) : undefined,
          onBack: goBackToList,
          onForeground: task.status === "running" ? () => {
            enterTeammateView(task.id, setAppState);
            onDone("Viewing teammate", { display: "system" });
          } : undefined
        }, `teammate-${task.id}`, false, undefined, this);
      case "local_workflow":
        if (!WorkflowDetailDialog2)
          return null;
        return /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(WorkflowDetailDialog2, {
          workflow: task,
          onDone,
          onKill: task.status === "running" && killWorkflowTask ? () => killWorkflowTask(task.id, setAppState) : undefined,
          onSkipAgent: task.status === "running" && skipWorkflowAgent ? (agentId) => skipWorkflowAgent(task.id, agentId, setAppState) : undefined,
          onRetryAgent: task.status === "running" && retryWorkflowAgent ? (agentId) => retryWorkflowAgent(task.id, agentId, setAppState) : undefined,
          onBack: goBackToList
        }, `workflow-${task.id}`, false, undefined, this);
      case "monitor_mcp":
        if (!MonitorMcpDetailDialog2)
          return null;
        return /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(MonitorMcpDetailDialog2, {
          task,
          onKill: task.status === "running" && killMonitorMcp ? () => killMonitorMcp(task.id, setAppState) : undefined,
          onBack: goBackToList
        }, `monitor-mcp-${task.id}`, false, undefined, this);
      case "dream":
        return /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(DreamDetailDialog, {
          task,
          onDone: () => onDone("Background tasks dialog dismissed", {
            display: "system"
          }),
          onBack: goBackToList,
          onKill: task.status === "running" ? () => void killDreamTask(task.id) : undefined
        }, `dream-${task.id}`, false, undefined, this);
    }
  }
  const runningBashCount = count(bashTasks, (_) => _.status === "running");
  const runningAgentCount = count(remoteSessions, (_) => _.status === "running" || _.status === "pending") + count(agentTasks, (_) => _.status === "running");
  const runningTeammateCount = count(teammateTasks, (_) => _.status === "running");
  const subtitle = intersperse([
    ...runningTeammateCount > 0 ? [
      /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
        children: [
          runningTeammateCount,
          " ",
          runningTeammateCount !== 1 ? "agents" : "agent"
        ]
      }, "teammates", true, undefined, this)
    ] : [],
    ...runningBashCount > 0 ? [
      /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
        children: [
          runningBashCount,
          " ",
          runningBashCount !== 1 ? "active shells" : "active shell"
        ]
      }, "shells", true, undefined, this)
    ] : [],
    ...runningAgentCount > 0 ? [
      /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
        children: [
          runningAgentCount,
          " ",
          runningAgentCount !== 1 ? "active agents" : "active agent"
        ]
      }, "agents", true, undefined, this)
    ] : []
  ], (index) => /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
    children: " \xB7 "
  }, `separator-${index}`, false, undefined, this));
  const actions = [
    /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(KeyboardShortcutHint, {
      shortcut: "\u2191/\u2193",
      action: "select"
    }, "upDown", false, undefined, this),
    /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(KeyboardShortcutHint, {
      shortcut: "Enter",
      action: "view"
    }, "enter", false, undefined, this),
    ...currentSelection?.type === "in_process_teammate" && currentSelection.status === "running" ? [
      /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(KeyboardShortcutHint, {
        shortcut: "f",
        action: "foreground"
      }, "foreground", false, undefined, this)
    ] : [],
    ...(currentSelection?.type === "local_bash" || currentSelection?.type === "local_agent" || currentSelection?.type === "in_process_teammate" || currentSelection?.type === "local_workflow" || currentSelection?.type === "monitor_mcp" || currentSelection?.type === "dream" || currentSelection?.type === "remote_agent") && currentSelection.status === "running" ? [/* @__PURE__ */ jsx_dev_runtime12.jsxDEV(KeyboardShortcutHint, {
      shortcut: "x",
      action: "stop"
    }, "kill", false, undefined, this)] : [],
    ...agentTasks.some((t) => t.status === "running") ? [
      /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(KeyboardShortcutHint, {
        shortcut: killAgentsShortcut,
        action: "stop all agents"
      }, "kill-all", false, undefined, this)
    ] : [],
    /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(KeyboardShortcutHint, {
      shortcut: "\u2190/Esc",
      action: "close"
    }, "esc", false, undefined, this)
  ];
  const handleCancel = () => onDone("Background tasks dialog dismissed", { display: "system" });
  function renderInputGuide(exitState) {
    if (exitState.pending) {
      return /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
        children: [
          "Press ",
          exitState.keyName,
          " again to exit"
        ]
      }, undefined, true, undefined, this);
    }
    return /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(Byline, {
      children: actions
    }, undefined, false, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    tabIndex: 0,
    autoFocus: true,
    onKeyDown: handleKeyDown,
    children: /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(Dialog, {
      title: "Background tasks",
      subtitle: /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(jsx_dev_runtime12.Fragment, {
        children: subtitle
      }, undefined, false, undefined, this),
      onCancel: handleCancel,
      color: "background",
      inputGuide: renderInputGuide,
      children: allSelectableItems.length === 0 ? /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
        dimColor: true,
        children: "No tasks currently running"
      }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        children: [
          teammateTasks.length > 0 && /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            children: [
              (bashTasks.length > 0 || remoteSessions.length > 0 || agentTasks.length > 0) && /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
                dimColor: true,
                children: [
                  /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
                    bold: true,
                    children: [
                      "  ",
                      "Agents"
                    ]
                  }, undefined, true, undefined, this),
                  " (",
                  count(teammateTasks, (i) => i.type !== "leader"),
                  ")"
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedBox_default, {
                flexDirection: "column",
                children: /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(TeammateTaskGroups, {
                  teammateTasks,
                  currentSelectionId: currentSelection?.id
                }, undefined, false, undefined, this)
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          bashTasks.length > 0 && /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            marginTop: teammateTasks.length > 0 ? 1 : 0,
            children: [
              (teammateTasks.length > 0 || remoteSessions.length > 0 || agentTasks.length > 0) && /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
                dimColor: true,
                children: [
                  /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
                    bold: true,
                    children: [
                      "  ",
                      "Shells"
                    ]
                  }, undefined, true, undefined, this),
                  " (",
                  bashTasks.length,
                  ")"
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedBox_default, {
                flexDirection: "column",
                children: bashTasks.map((item) => /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(Item, {
                  item,
                  isSelected: item.id === currentSelection?.id
                }, item.id, false, undefined, this))
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          mcpMonitors.length > 0 && /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            marginTop: teammateTasks.length > 0 || bashTasks.length > 0 ? 1 : 0,
            children: [
              /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
                dimColor: true,
                children: [
                  /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
                    bold: true,
                    children: [
                      "  ",
                      "Monitors"
                    ]
                  }, undefined, true, undefined, this),
                  " (",
                  mcpMonitors.length,
                  ")"
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedBox_default, {
                flexDirection: "column",
                children: mcpMonitors.map((item) => /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(Item, {
                  item,
                  isSelected: item.id === currentSelection?.id
                }, item.id, false, undefined, this))
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          remoteSessions.length > 0 && /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            marginTop: teammateTasks.length > 0 || bashTasks.length > 0 || mcpMonitors.length > 0 ? 1 : 0,
            children: [
              /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
                dimColor: true,
                children: [
                  /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
                    bold: true,
                    children: [
                      "  ",
                      "Remote agents"
                    ]
                  }, undefined, true, undefined, this),
                  " (",
                  remoteSessions.length,
                  ")"
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedBox_default, {
                flexDirection: "column",
                children: remoteSessions.map((item) => /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(Item, {
                  item,
                  isSelected: item.id === currentSelection?.id
                }, item.id, false, undefined, this))
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          agentTasks.length > 0 && /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            marginTop: teammateTasks.length > 0 || bashTasks.length > 0 || mcpMonitors.length > 0 || remoteSessions.length > 0 ? 1 : 0,
            children: [
              /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
                dimColor: true,
                children: [
                  /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
                    bold: true,
                    children: [
                      "  ",
                      "Local agents"
                    ]
                  }, undefined, true, undefined, this),
                  " (",
                  agentTasks.length,
                  ")"
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedBox_default, {
                flexDirection: "column",
                children: agentTasks.map((item) => /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(Item, {
                  item,
                  isSelected: item.id === currentSelection?.id
                }, item.id, false, undefined, this))
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          workflowTasks.length > 0 && /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            marginTop: teammateTasks.length > 0 || bashTasks.length > 0 || mcpMonitors.length > 0 || remoteSessions.length > 0 || agentTasks.length > 0 ? 1 : 0,
            children: [
              /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
                dimColor: true,
                children: [
                  /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
                    bold: true,
                    children: [
                      "  ",
                      "Workflows"
                    ]
                  }, undefined, true, undefined, this),
                  " (",
                  workflowTasks.length,
                  ")"
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedBox_default, {
                flexDirection: "column",
                children: workflowTasks.map((item) => /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(Item, {
                  item,
                  isSelected: item.id === currentSelection?.id
                }, item.id, false, undefined, this))
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          dreamTasks.length > 0 && /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            marginTop: teammateTasks.length > 0 || bashTasks.length > 0 || mcpMonitors.length > 0 || remoteSessions.length > 0 || agentTasks.length > 0 || workflowTasks.length > 0 ? 1 : 0,
            children: /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedBox_default, {
              flexDirection: "column",
              children: dreamTasks.map((item) => /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(Item, {
                item,
                isSelected: item.id === currentSelection?.id
              }, item.id, false, undefined, this))
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function toListItem(task) {
  switch (task.type) {
    case "local_bash":
      return {
        id: task.id,
        type: "local_bash",
        label: task.kind === "monitor" ? task.description : task.command,
        status: task.status,
        task
      };
    case "remote_agent":
      return {
        id: task.id,
        type: "remote_agent",
        label: task.title,
        status: task.status,
        task
      };
    case "local_agent":
      return {
        id: task.id,
        type: "local_agent",
        label: task.description,
        status: task.status,
        task
      };
    case "in_process_teammate":
      return {
        id: task.id,
        type: "in_process_teammate",
        label: `@${task.identity.agentName}`,
        status: task.status,
        task
      };
    case "local_workflow":
      return {
        id: task.id,
        type: "local_workflow",
        label: task.summary ?? task.description,
        status: task.status,
        task
      };
    case "monitor_mcp":
      return {
        id: task.id,
        type: "monitor_mcp",
        label: task.description,
        status: task.status,
        task
      };
    case "dream":
      return {
        id: task.id,
        type: "dream",
        label: task.description,
        status: task.status,
        task
      };
  }
}
function Item({
  item,
  isSelected
}) {
  const { columns } = useTerminalSize();
  const maxActivityWidth = Math.max(30, columns - 26);
  const useGreyPointer = isCoordinatorMode();
  return /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedBox_default, {
    flexDirection: "row",
    children: [
      /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
        dimColor: useGreyPointer && isSelected,
        children: isSelected ? figures_default.pointer + " " : "  "
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
        color: isSelected && !useGreyPointer ? "suggestion" : undefined,
        children: item.type === "leader" ? /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
          children: [
            "@",
            TEAM_LEAD_NAME
          ]
        }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(BackgroundTask, {
          task: item.task,
          maxActivityWidth
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function TeammateTaskGroups({
  teammateTasks,
  currentSelectionId
}) {
  const leaderItems = teammateTasks.filter((i) => i.type === "leader");
  const teammateItems = teammateTasks.filter((i) => i.type === "in_process_teammate");
  const teams = new Map;
  for (const item of teammateItems) {
    const teamName = item.task.identity.teamName;
    const group = teams.get(teamName);
    if (group) {
      group.push(item);
    } else {
      teams.set(teamName, [item]);
    }
  }
  const teamEntries = [...teams.entries()];
  return /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(jsx_dev_runtime12.Fragment, {
    children: teamEntries.map(([teamName, items]) => {
      const memberCount = items.length + leaderItems.length;
      return /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        children: [
          /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(ThemedText, {
            dimColor: true,
            children: [
              "  ",
              "Team: ",
              teamName,
              " (",
              memberCount,
              ")"
            ]
          }, undefined, true, undefined, this),
          leaderItems.map((item) => /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(Item, {
            item,
            isSelected: item.id === currentSelectionId
          }, `${item.id}-${teamName}`, false, undefined, this)),
          items.map((item) => /* @__PURE__ */ jsx_dev_runtime12.jsxDEV(Item, {
            item,
            isSelected: item.id === currentSelectionId
          }, item.id, false, undefined, this))
        ]
      }, teamName, true, undefined, this);
    })
  }, undefined, false, undefined, this);
}
var import_react7, jsx_dev_runtime12, WorkflowDetailDialog2, workflowTaskModule, killWorkflowTask, skipWorkflowAgent, retryWorkflowAgent, monitorMcpModule, killMonitorMcp, MonitorMcpDetailDialog2;
var init_BackgroundTasksDialog = __esm(() => {
  init_figures();
  init_coordinatorMode();
  init_useTerminalSize();
  init_AppState();
  init_teammateViewHelpers();
  init_DreamTask();
  init_InProcessTeammateTask();
  init_LocalAgentTask();
  init_LocalShellTask();
  init_RemoteAgentTask();
  init_types();
  init_array();
  init_constants3();
  init_ultraplan();
  init_overlayContext();
  init_src();
  init_useKeybinding();
  init_useShortcutDisplay();
  init_array();
  init_src();
  init_AsyncAgentDetailDialog();
  init_BackgroundTask();
  init_DreamDetailDialog();
  init_InProcessTeammateDetailDialog();
  init_RemoteSessionDetailDialog();
  init_ShellDetailDialog();
  import_react7 = __toESM(require_react(), 1);
  jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime(), 1);
  WorkflowDetailDialog2 = (init_WorkflowDetailDialog(), __toCommonJS(exports_WorkflowDetailDialog)).WorkflowDetailDialog;
  workflowTaskModule = (init_LocalWorkflowTask(), __toCommonJS(exports_LocalWorkflowTask));
  killWorkflowTask = workflowTaskModule?.killWorkflowTask ?? null;
  skipWorkflowAgent = workflowTaskModule?.skipWorkflowAgent ?? null;
  retryWorkflowAgent = workflowTaskModule?.retryWorkflowAgent ?? null;
  monitorMcpModule = (init_MonitorMcpTask(), __toCommonJS(exports_MonitorMcpTask));
  killMonitorMcp = monitorMcpModule?.killMonitorMcp ?? null;
  MonitorMcpDetailDialog2 = (init_MonitorMcpDetailDialog(), __toCommonJS(exports_MonitorMcpDetailDialog)).MonitorMcpDetailDialog;
});

export { enterTeammateView, exitTeammateView, stopOrDismissAgent, init_teammateViewHelpers, isTerminalStatus, shouldHideTasksFooter, init_taskStatusUtils, BackgroundTasksDialog, init_BackgroundTasksDialog };
