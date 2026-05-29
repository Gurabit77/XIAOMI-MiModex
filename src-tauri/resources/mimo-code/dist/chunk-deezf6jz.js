// @bun
import {
  init_slashCommandParsing,
  parseSlashCommand
} from "./chunk-rn0v1hk8.js";
import {
  DEFAULT_OUTPUT_STYLE_NAME,
  Select,
  Spinner,
  createAttachmentMessage,
  createCommandInputMessage,
  createImageMetadataText,
  createSystemMessage,
  createUserMessage,
  executeUserPromptSubmitHooks,
  extractTag,
  fileHistoryCanRestore,
  fileHistoryEnabled,
  fileHistoryGetDiffStats,
  findCommand,
  getAttachmentMessages,
  getBridgeCommandSafety,
  getCommandName,
  getContentText,
  getUserPromptSubmitHookBlockingMessage,
  init_AppState,
  init_Spinner,
  init_attachments,
  init_commands1 as init_commands,
  init_fileHistory,
  init_generators,
  init_hooks1 as init_hooks,
  init_imageResizer,
  init_imageStore,
  init_messages1 as init_messages,
  init_outputStyles,
  init_queryProfiler,
  init_select,
  init_textInputTypes,
  init_useTerminalSize,
  isEmptyMessageText,
  isSyntheticMessage,
  isToolUseResultMessage,
  isValidImagePaste,
  maybeResizeAndDownsampleImageBlock,
  queryCheckpoint,
  storeImages,
  toArray,
  useAppState
} from "./chunk-ktw919wt.js";
import {
  init_useExitOnCtrlCDWithKeybindings,
  useExitOnCtrlCDWithKeybindings
} from "./chunk-pfhyp451.js";
import {
  init_useKeybinding
} from "./chunk-dsnwry8r.js";
import {
  init_events,
  init_sessionTracing,
  logOTelEvent,
  redactIfDisabled,
  startInteractionSpan
} from "./chunk-g57ncwpz.js";
import {
  AGENT_TOOL_NAME,
  LEGACY_AGENT_TOOL_NAME,
  getAnthropicApiKeyWithSource,
  getFastModeState,
  getSettings_DEPRECATED,
  init_auth,
  init_constants1 as init_constants,
  init_fastMode,
  init_settings1 as init_settings
} from "./chunk-1ghcng4e.js";
import {
  count,
  init_array
} from "./chunk-zwarn9h7.js";
import {
  formatRelativeTimeAgo,
  init_format,
  truncate
} from "./chunk-x5hyyhqf.js";
import {
  Divider,
  ThemedBox_default,
  ThemedText,
  init_src,
  useKeybinding,
  useKeybindings,
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
  BASH_STDERR_TAG,
  BASH_STDOUT_TAG,
  COMMAND_MESSAGE_TAG,
  LOCAL_COMMAND_STDERR_TAG,
  LOCAL_COMMAND_STDOUT_TAG,
  TASK_NOTIFICATION_TAG,
  TEAMMATE_MESSAGE_TAG,
  TICK_TAG,
  init_displayTags,
  init_log,
  init_xml,
  logError,
  stripDisplayTags
} from "./chunk-w5ahy59y.js";
import {
  figures_default,
  init_figures
} from "./chunk-qajrkk97.js";
import {
  getSdkBetas,
  getSessionId,
  init_state,
  setPromptId
} from "./chunk-j5xzpm59.js";
import {
  __esm,
  __export,
  __require,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/components/MessageSelector.tsx
var exports_MessageSelector = {};
__export(exports_MessageSelector, {
  selectableUserMessagesFilter: () => selectableUserMessagesFilter,
  messagesAfterAreOnlySynthetic: () => messagesAfterAreOnlySynthetic,
  MessageSelector: () => MessageSelector
});
import { randomUUID } from "crypto";
import * as path from "path";
function isTextBlock(block) {
  return block.type === "text";
}
function isSummarizeOption(option) {
  return option === "summarize" || option === "summarize_up_to";
}
function MessageSelector({
  messages,
  onPreRestore,
  onRestoreMessage,
  onRestoreCode,
  onSummarize,
  onClose,
  preselectedMessage
}) {
  const fileHistory = useAppState((s) => s.fileHistory);
  const [error, setError] = import_react.useState(undefined);
  const isFileHistoryEnabled = fileHistoryEnabled();
  const currentUUID = import_react.useMemo(randomUUID, []);
  const messageOptions = import_react.useMemo(() => [
    ...messages.filter(selectableUserMessagesFilter),
    {
      ...createUserMessage({
        content: ""
      }),
      uuid: currentUUID
    }
  ], [messages, currentUUID]);
  const [selectedIndex, setSelectedIndex] = import_react.useState(messageOptions.length - 1);
  const firstVisibleIndex = Math.max(0, Math.min(selectedIndex - Math.floor(MAX_VISIBLE_MESSAGES / 2), messageOptions.length - MAX_VISIBLE_MESSAGES));
  const hasMessagesToSelect = messageOptions.length > 1;
  const [messageToRestore, setMessageToRestore] = import_react.useState(preselectedMessage);
  const [diffStatsForRestore, setDiffStatsForRestore] = import_react.useState(undefined);
  import_react.useEffect(() => {
    if (!preselectedMessage || !isFileHistoryEnabled)
      return;
    let cancelled = false;
    fileHistoryGetDiffStats(fileHistory, preselectedMessage.uuid).then((stats) => {
      if (!cancelled)
        setDiffStatsForRestore(stats);
    });
    return () => {
      cancelled = true;
    };
  }, [preselectedMessage, isFileHistoryEnabled, fileHistory]);
  const [isRestoring, setIsRestoring] = import_react.useState(false);
  const [restoringOption, setRestoringOption] = import_react.useState(null);
  const [selectedRestoreOption, setSelectedRestoreOption] = import_react.useState("both");
  const [summarizeFromFeedback, setSummarizeFromFeedback] = import_react.useState("");
  const [summarizeUpToFeedback, setSummarizeUpToFeedback] = import_react.useState("");
  function getRestoreOptions(canRestoreCode2) {
    const baseOptions = canRestoreCode2 ? [
      { value: "both", label: "Restore code and conversation" },
      { value: "conversation", label: "Restore conversation" },
      { value: "code", label: "Restore code" }
    ] : [{ value: "conversation", label: "Restore conversation" }];
    const summarizeInputProps = {
      type: "input",
      placeholder: "add context (optional)",
      initialValue: "",
      allowEmptySubmitToCancel: true,
      showLabelWithValue: true,
      labelValueSeparator: ": "
    };
    baseOptions.push({
      value: "summarize",
      label: "Summarize from here",
      ...summarizeInputProps,
      onChange: setSummarizeFromFeedback
    });
    if (process.env.USER_TYPE === "ant") {
      baseOptions.push({
        value: "summarize_up_to",
        label: "Summarize up to here",
        ...summarizeInputProps,
        onChange: setSummarizeUpToFeedback
      });
    }
    baseOptions.push({ value: "nevermind", label: "Never mind" });
    return baseOptions;
  }
  import_react.useEffect(() => {
    logEvent("tengu_message_selector_opened", {});
  }, []);
  async function restoreConversationDirectly(message) {
    onPreRestore();
    setIsRestoring(true);
    try {
      await onRestoreMessage(message);
      setIsRestoring(false);
      onClose();
    } catch (error2) {
      logError(error2);
      setIsRestoring(false);
      setError(`Failed to restore the conversation:
${error2}`);
    }
  }
  async function handleSelect(message) {
    const index = messages.indexOf(message);
    const indexFromEnd = messages.length - 1 - index;
    logEvent("tengu_message_selector_selected", {
      index_from_end: indexFromEnd,
      message_type: message.type,
      is_current_prompt: false
    });
    if (!messages.includes(message)) {
      onClose();
      return;
    }
    if (!isFileHistoryEnabled) {
      await restoreConversationDirectly(message);
      return;
    }
    const diffStats = await fileHistoryGetDiffStats(fileHistory, message.uuid);
    setMessageToRestore(message);
    setDiffStatsForRestore(diffStats);
  }
  async function onSelectRestoreOption(option) {
    logEvent("tengu_message_selector_restore_option_selected", {
      option
    });
    if (!messageToRestore) {
      setError("Message not found.");
      return;
    }
    if (option === "nevermind") {
      if (preselectedMessage)
        onClose();
      else
        setMessageToRestore(undefined);
      return;
    }
    if (isSummarizeOption(option)) {
      onPreRestore();
      setIsRestoring(true);
      setRestoringOption(option);
      setError(undefined);
      try {
        const direction = option === "summarize_up_to" ? "up_to" : "from";
        const feedback = (direction === "up_to" ? summarizeUpToFeedback : summarizeFromFeedback).trim() || undefined;
        await onSummarize(messageToRestore, feedback, direction);
        setIsRestoring(false);
        setRestoringOption(null);
        setMessageToRestore(undefined);
        onClose();
      } catch (error2) {
        logError(error2);
        setIsRestoring(false);
        setRestoringOption(null);
        setMessageToRestore(undefined);
        setError(`Failed to summarize:
${error2}`);
      }
      return;
    }
    onPreRestore();
    setIsRestoring(true);
    setError(undefined);
    let codeError = null;
    let conversationError = null;
    if (option === "code" || option === "both") {
      try {
        await onRestoreCode(messageToRestore);
      } catch (error2) {
        codeError = error2;
        logError(codeError);
      }
    }
    if (option === "conversation" || option === "both") {
      try {
        await onRestoreMessage(messageToRestore);
      } catch (error2) {
        conversationError = error2;
        logError(conversationError);
      }
    }
    setIsRestoring(false);
    setMessageToRestore(undefined);
    if (conversationError && codeError) {
      setError(`Failed to restore the conversation and code:
${conversationError}
${codeError}`);
    } else if (conversationError) {
      setError(`Failed to restore the conversation:
${conversationError}`);
    } else if (codeError) {
      setError(`Failed to restore the code:
${codeError}`);
    } else {
      onClose();
    }
  }
  const exitState = useExitOnCtrlCDWithKeybindings();
  const handleEscape = import_react.useCallback(() => {
    if (messageToRestore && !preselectedMessage) {
      setMessageToRestore(undefined);
      return;
    }
    logEvent("tengu_message_selector_cancelled", {});
    onClose();
  }, [onClose, messageToRestore, preselectedMessage]);
  const moveUp = import_react.useCallback(() => setSelectedIndex((prev) => Math.max(0, prev - 1)), []);
  const moveDown = import_react.useCallback(() => setSelectedIndex((prev) => Math.min(messageOptions.length - 1, prev + 1)), [messageOptions.length]);
  const jumpToTop = import_react.useCallback(() => setSelectedIndex(0), []);
  const jumpToBottom = import_react.useCallback(() => setSelectedIndex(messageOptions.length - 1), [messageOptions.length]);
  const handleSelectCurrent = import_react.useCallback(() => {
    const selected = messageOptions[selectedIndex];
    if (selected) {
      handleSelect(selected);
    }
  }, [messageOptions, selectedIndex, handleSelect]);
  useKeybinding("confirm:no", handleEscape, {
    context: "Confirmation",
    isActive: !messageToRestore
  });
  useKeybindings({
    "messageSelector:up": moveUp,
    "messageSelector:down": moveDown,
    "messageSelector:top": jumpToTop,
    "messageSelector:bottom": jumpToBottom,
    "messageSelector:select": handleSelectCurrent
  }, {
    context: "MessageSelector",
    isActive: !isRestoring && !error && !messageToRestore && hasMessagesToSelect
  });
  const [fileHistoryMetadata, setFileHistoryMetadata] = import_react.useState({});
  import_react.useEffect(() => {
    async function loadFileHistoryMetadata() {
      if (!isFileHistoryEnabled) {
        return;
      }
      Promise.all(messageOptions.map(async (userMessage, itemIndex) => {
        if (userMessage.uuid !== currentUUID) {
          const canRestore = fileHistoryCanRestore(fileHistory, userMessage.uuid);
          const nextUserMessage = messageOptions.at(itemIndex + 1);
          const diffStats = canRestore ? computeDiffStatsBetweenMessages(messages, userMessage.uuid, nextUserMessage?.uuid !== currentUUID ? nextUserMessage?.uuid : undefined) : undefined;
          if (diffStats !== undefined) {
            setFileHistoryMetadata((prev) => ({
              ...prev,
              [itemIndex]: diffStats
            }));
          } else {
            setFileHistoryMetadata((prev) => ({
              ...prev,
              [itemIndex]: undefined
            }));
          }
        }
      }));
    }
    loadFileHistoryMetadata();
  }, [messageOptions, messages, currentUUID, fileHistory, isFileHistoryEnabled]);
  const canRestoreCode = isFileHistoryEnabled && diffStatsForRestore?.filesChanged && diffStatsForRestore.filesChanged.length > 0;
  const showPickList = !error && !messageToRestore && !preselectedMessage && hasMessagesToSelect;
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    width: "100%",
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Divider, {
        color: "suggestion"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        marginX: 1,
        gap: 1,
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            bold: true,
            color: "suggestion",
            children: "Rewind"
          }, undefined, false, undefined, this),
          error && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              color: "error",
              children: [
                "Error: ",
                error
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this),
          !hasMessagesToSelect && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              children: "Nothing to rewind to yet."
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this),
          !error && messageToRestore && hasMessagesToSelect && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                children: [
                  "Confirm you want to restore",
                  " ",
                  !diffStatsForRestore && "the conversation ",
                  "to the point before you sent this message:"
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
                flexDirection: "column",
                paddingLeft: 1,
                borderStyle: "single",
                borderRight: false,
                borderTop: false,
                borderBottom: false,
                borderLeft: true,
                borderLeftDimColor: true,
                children: [
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(UserMessageOption, {
                    userMessage: messageToRestore,
                    color: "text",
                    isCurrent: false
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: [
                      "(",
                      formatRelativeTimeAgo(new Date(messageToRestore.timestamp)),
                      ")"
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(RestoreOptionDescription, {
                selectedRestoreOption,
                canRestoreCode: !!canRestoreCode,
                diffStatsForRestore
              }, undefined, false, undefined, this),
              isRestoring && isSummarizeOption(restoringOption) ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
                flexDirection: "row",
                gap: 1,
                children: [
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Spinner, {}, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                    children: "Summarizing\u2026"
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Select, {
                isDisabled: isRestoring,
                options: getRestoreOptions(!!canRestoreCode),
                defaultFocusValue: canRestoreCode ? "both" : "conversation",
                onFocus: (value) => setSelectedRestoreOption(value),
                onChange: (value) => onSelectRestoreOption(value),
                onCancel: () => preselectedMessage ? onClose() : setMessageToRestore(undefined)
              }, undefined, false, undefined, this),
              canRestoreCode && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
                marginBottom: 1,
                children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                  dimColor: true,
                  children: [
                    figures_default.warning,
                    " Rewinding does not affect files edited manually or via bash."
                  ]
                }, undefined, true, undefined, this)
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          showPickList && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
            children: [
              isFileHistoryEnabled ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                children: "Restore the code and/or conversation to the point before\u2026"
              }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                children: "Restore and fork the conversation to the point before\u2026"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
                width: "100%",
                flexDirection: "column",
                children: messageOptions.slice(firstVisibleIndex, firstVisibleIndex + MAX_VISIBLE_MESSAGES).map((msg, visibleOptionIndex) => {
                  const optionIndex = firstVisibleIndex + visibleOptionIndex;
                  const isSelected = optionIndex === selectedIndex;
                  const isCurrent = msg.uuid === currentUUID;
                  const metadataLoaded = optionIndex in fileHistoryMetadata;
                  const metadata = fileHistoryMetadata[optionIndex];
                  const numFilesChanged = metadata?.filesChanged && metadata.filesChanged.length;
                  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
                    height: isFileHistoryEnabled ? 3 : 2,
                    overflow: "hidden",
                    width: "100%",
                    flexDirection: "row",
                    children: [
                      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
                        width: 2,
                        minWidth: 2,
                        children: isSelected ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                          color: "permission",
                          bold: true,
                          children: [
                            figures_default.pointer,
                            " "
                          ]
                        }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                          children: "  "
                        }, undefined, false, undefined, this)
                      }, undefined, false, undefined, this),
                      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
                        flexDirection: "column",
                        children: [
                          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
                            flexShrink: 1,
                            height: 1,
                            overflow: "hidden",
                            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(UserMessageOption, {
                              userMessage: msg,
                              color: isSelected ? "suggestion" : undefined,
                              isCurrent,
                              paddingRight: 10
                            }, undefined, false, undefined, this)
                          }, undefined, false, undefined, this),
                          isFileHistoryEnabled && metadataLoaded && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
                            height: 1,
                            flexDirection: "row",
                            children: metadata ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
                              children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                                dimColor: !isSelected,
                                color: "inactive",
                                children: numFilesChanged ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
                                  children: [
                                    numFilesChanged === 1 && metadata.filesChanged[0] ? `${path.basename(metadata.filesChanged[0])} ` : `${numFilesChanged} files changed `,
                                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV(DiffStatsText, {
                                      diffStats: metadata
                                    }, undefined, false, undefined, this)
                                  ]
                                }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
                                  children: "No code changes"
                                }, undefined, false, undefined, this)
                              }, undefined, false, undefined, this)
                            }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                              dimColor: true,
                              color: "warning",
                              children: [
                                figures_default.warning,
                                " No code restore"
                              ]
                            }, undefined, true, undefined, this)
                          }, undefined, false, undefined, this)
                        ]
                      }, undefined, true, undefined, this)
                    ]
                  }, msg.uuid, true, undefined, this);
                })
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          !messageToRestore && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            dimColor: true,
            italic: true,
            children: exitState.pending ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
              children: [
                "Press ",
                exitState.keyName,
                " again to exit"
              ]
            }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
              children: [
                !error && hasMessagesToSelect && "Enter to continue \xB7 ",
                "Esc to exit"
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function getRestoreOptionConversationText(option) {
  switch (option) {
    case "summarize":
      return "Messages after this point will be summarized.";
    case "summarize_up_to":
      return "Preceding messages will be summarized. This and subsequent messages will remain unchanged \u2014 you will stay at the end of the conversation.";
    case "both":
    case "conversation":
      return "The conversation will be forked.";
    case "code":
    case "nevermind":
      return "The conversation will be unchanged.";
  }
}
function RestoreOptionDescription({
  selectedRestoreOption,
  canRestoreCode,
  diffStatsForRestore
}) {
  const showCodeRestore = canRestoreCode && (selectedRestoreOption === "both" || selectedRestoreOption === "code");
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        dimColor: true,
        children: getRestoreOptionConversationText(selectedRestoreOption)
      }, undefined, false, undefined, this),
      !isSummarizeOption(selectedRestoreOption) && (showCodeRestore ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(RestoreCodeConfirmation, {
        diffStatsForRestore
      }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        dimColor: true,
        children: "The code will be unchanged."
      }, undefined, false, undefined, this))
    ]
  }, undefined, true, undefined, this);
}
function RestoreCodeConfirmation({
  diffStatsForRestore
}) {
  if (diffStatsForRestore === undefined) {
    return;
  }
  if (!diffStatsForRestore.filesChanged || !diffStatsForRestore.filesChanged[0]) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
      dimColor: true,
      children: "The code has not changed (nothing will be restored)."
    }, undefined, false, undefined, this);
  }
  const numFilesChanged = diffStatsForRestore.filesChanged.length;
  let fileLabel = "";
  if (numFilesChanged === 1) {
    fileLabel = path.basename(diffStatsForRestore.filesChanged[0] || "");
  } else if (numFilesChanged === 2) {
    const file1 = path.basename(diffStatsForRestore.filesChanged[0] || "");
    const file2 = path.basename(diffStatsForRestore.filesChanged[1] || "");
    fileLabel = `${file1} and ${file2}`;
  } else {
    const file1 = path.basename(diffStatsForRestore.filesChanged[0] || "");
    fileLabel = `${file1} and ${diffStatsForRestore.filesChanged.length - 1} other files`;
  }
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
      dimColor: true,
      children: [
        "The code will be restored",
        " ",
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(DiffStatsText, {
          diffStats: diffStatsForRestore
        }, undefined, false, undefined, this),
        " in ",
        fileLabel,
        "."
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
function DiffStatsText({
  diffStats
}) {
  if (!diffStats || !diffStats.filesChanged) {
    return;
  }
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        color: "diffAddedWord",
        children: [
          "+",
          diffStats.insertions,
          " "
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        color: "diffRemovedWord",
        children: [
          "-",
          diffStats.deletions
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function UserMessageOption({
  userMessage,
  color,
  dimColor,
  isCurrent,
  paddingRight
}) {
  const { columns } = useTerminalSize();
  if (isCurrent) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      width: "100%",
      children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        italic: true,
        color,
        dimColor,
        children: "(current)"
      }, undefined, false, undefined, this)
    }, undefined, false, undefined, this);
  }
  const content = userMessage.message.content;
  const lastBlock = typeof content === "string" ? null : content[content.length - 1];
  const rawMessageText = typeof content === "string" ? content.trim() : lastBlock && isTextBlock(lastBlock) ? lastBlock.text.trim() : "(no prompt)";
  const messageText = stripDisplayTags(rawMessageText);
  if (isEmptyMessageText(messageText)) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "row",
      width: "100%",
      children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        italic: true,
        color,
        dimColor,
        children: "((empty message))"
      }, undefined, false, undefined, this)
    }, undefined, false, undefined, this);
  }
  if (messageText.includes("<bash-input>")) {
    const input = extractTag(messageText, "bash-input");
    if (input) {
      return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "row",
        width: "100%",
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            color: "bashBorder",
            children: "!"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            color,
            dimColor,
            children: [
              " ",
              input
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this);
    }
  }
  if (messageText.includes(`<${COMMAND_MESSAGE_TAG}>`)) {
    const commandMessage = extractTag(messageText, COMMAND_MESSAGE_TAG);
    const args = extractTag(messageText, "command-args");
    const isSkillFormat = extractTag(messageText, "skill-format") === "true";
    if (commandMessage) {
      if (isSkillFormat) {
        return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
          flexDirection: "row",
          width: "100%",
          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            color,
            dimColor,
            children: [
              "Skill(",
              commandMessage,
              ")"
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this);
      } else {
        return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
          flexDirection: "row",
          width: "100%",
          children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            color,
            dimColor,
            children: [
              "/",
              commandMessage,
              " ",
              args
            ]
          }, undefined, true, undefined, this)
        }, undefined, false, undefined, this);
      }
    }
  }
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
    flexDirection: "row",
    width: "100%",
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
      color,
      dimColor,
      children: paddingRight ? truncate(messageText, columns - paddingRight, true) : messageText.slice(0, 500).split(`
`).slice(0, 4).join(`
`)
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function computeDiffStatsBetweenMessages(messages, fromMessageId, toMessageId) {
  const startIndex = messages.findIndex((msg) => msg.uuid === fromMessageId);
  if (startIndex === -1) {
    return;
  }
  let endIndex = toMessageId ? messages.findIndex((msg) => msg.uuid === toMessageId) : messages.length;
  if (endIndex === -1) {
    endIndex = messages.length;
  }
  const filesChanged = [];
  let insertions = 0;
  let deletions = 0;
  for (let i = startIndex + 1;i < endIndex; i++) {
    const msg = messages[i];
    if (!msg || !isToolUseResultMessage(msg)) {
      continue;
    }
    const result = msg.toolUseResult;
    if (!result || !result.filePath || !result.structuredPatch) {
      continue;
    }
    if (!filesChanged.includes(result.filePath)) {
      filesChanged.push(result.filePath);
    }
    try {
      if ("type" in result && result.type === "create") {
        insertions += result.content.split(/\r?\n/).length;
      } else {
        for (const hunk of result.structuredPatch) {
          const additions = count(hunk.lines, (line) => line.startsWith("+"));
          const removals = count(hunk.lines, (line) => line.startsWith("-"));
          insertions += additions;
          deletions += removals;
        }
      }
    } catch {}
  }
  return {
    filesChanged,
    insertions,
    deletions
  };
}
function selectableUserMessagesFilter(message) {
  if (message.type !== "user") {
    return false;
  }
  if (Array.isArray(message.message.content) && message.message.content[0]?.type === "tool_result") {
    return false;
  }
  if (isSyntheticMessage(message)) {
    return false;
  }
  if (message.isMeta) {
    return false;
  }
  if (message.isCompactSummary || message.isVisibleInTranscriptOnly) {
    return false;
  }
  const content = message.message.content;
  const lastBlock = typeof content === "string" ? null : content[content.length - 1];
  const messageText = typeof content === "string" ? content.trim() : lastBlock && isTextBlock(lastBlock) ? lastBlock.text.trim() : "";
  if (messageText.indexOf(`<${LOCAL_COMMAND_STDOUT_TAG}>`) !== -1 || messageText.indexOf(`<${LOCAL_COMMAND_STDERR_TAG}>`) !== -1 || messageText.indexOf(`<${BASH_STDOUT_TAG}>`) !== -1 || messageText.indexOf(`<${BASH_STDERR_TAG}>`) !== -1 || messageText.indexOf(`<${TASK_NOTIFICATION_TAG}>`) !== -1 || messageText.indexOf(`<${TICK_TAG}>`) !== -1 || messageText.indexOf(`<${TEAMMATE_MESSAGE_TAG}`) !== -1) {
    return false;
  }
  return true;
}
function messagesAfterAreOnlySynthetic(messages, fromIndex) {
  for (let i = fromIndex + 1;i < messages.length; i++) {
    const msg = messages[i];
    if (!msg)
      continue;
    if (isSyntheticMessage(msg))
      continue;
    if (isToolUseResultMessage(msg))
      continue;
    if (msg.type === "progress")
      continue;
    if (msg.type === "system")
      continue;
    if (msg.type === "attachment")
      continue;
    if (msg.type === "user" && msg.isMeta)
      continue;
    if (msg.type === "assistant") {
      const content = msg.message.content;
      if (Array.isArray(content)) {
        const hasMeaningfulContent = content.some((block) => block.type === "text" && block.text.trim() || block.type === "tool_use");
        if (hasMeaningfulContent)
          return false;
      }
      continue;
    }
    if (msg.type === "user") {
      return false;
    }
  }
  return true;
}
var import_react, jsx_dev_runtime, MAX_VISIBLE_MESSAGES = 7;
var init_MessageSelector = __esm(() => {
  init_figures();
  init_analytics();
  init_AppState();
  init_fileHistory();
  init_log();
  init_useExitOnCtrlCDWithKeybindings();
  init_src();
  init_useKeybinding();
  init_displayTags();
  init_messages();
  init_select();
  init_Spinner();
  init_useTerminalSize();
  init_xml();
  init_array();
  init_format();
  import_react = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});

// src/utils/ultraplan/keyword.ts
var OPEN_TO_CLOSE = {
  "`": "`",
  '"': '"',
  "<": ">",
  "{": "}",
  "[": "]",
  "(": ")",
  "'": "'"
};
function findKeywordTriggerPositions(text, keyword) {
  const re = new RegExp(keyword, "i");
  if (!re.test(text))
    return [];
  if (text.startsWith("/"))
    return [];
  const quotedRanges = [];
  let openQuote = null;
  let openAt = 0;
  const isWord = (ch) => !!ch && /[\p{L}\p{N}_]/u.test(ch);
  for (let i = 0;i < text.length; i++) {
    const ch = text[i];
    if (openQuote) {
      if (openQuote === "[" && ch === "[") {
        openAt = i;
        continue;
      }
      if (ch !== OPEN_TO_CLOSE[openQuote])
        continue;
      if (openQuote === "'" && isWord(text[i + 1]))
        continue;
      quotedRanges.push({ start: openAt, end: i + 1 });
      openQuote = null;
    } else if (ch === "<" && i + 1 < text.length && /[a-zA-Z/]/.test(text[i + 1]) || ch === "'" && !isWord(text[i - 1]) || ch !== "<" && ch !== "'" && ch in OPEN_TO_CLOSE) {
      openQuote = ch;
      openAt = i;
    }
  }
  const positions = [];
  const wordRe = new RegExp(`\\b${keyword}\\b`, "gi");
  const matches = text.matchAll(wordRe);
  for (const match of matches) {
    if (match.index === undefined)
      continue;
    const start = match.index;
    const end = start + match[0].length;
    if (quotedRanges.some((r) => start >= r.start && start < r.end))
      continue;
    const before = text[start - 1];
    const after = text[end];
    if (before === "/" || before === "\\" || before === "-")
      continue;
    if (after === "/" || after === "\\" || after === "-" || after === "?")
      continue;
    if (after === "." && isWord(text[end + 1]))
      continue;
    positions.push({ word: match[0], start, end });
  }
  return positions;
}
function findUltraplanTriggerPositions(text) {
  return findKeywordTriggerPositions(text, "ultraplan");
}
function findUltrareviewTriggerPositions(text) {
  return findKeywordTriggerPositions(text, "ultrareview");
}
function hasUltraplanKeyword(text) {
  return findUltraplanTriggerPositions(text).length > 0;
}
function replaceUltraplanKeyword(text) {
  const [trigger] = findUltraplanTriggerPositions(text);
  if (!trigger)
    return text;
  const before = text.slice(0, trigger.start);
  const after = text.slice(trigger.end);
  if (!(before + after).trim())
    return "";
  return before + trigger.word.slice("ultra".length) + after;
}

// src/utils/processUserInput/processUserInput.ts
init_analytics();
init_messages();
init_commands();
init_textInputTypes();
init_attachments();
init_generators();
init_hooks();
init_imageResizer();
init_imageStore();
init_messages();
init_queryProfiler();
init_slashCommandParsing();
import { randomUUID as randomUUID3 } from "crypto";

// src/utils/processUserInput/processTextPrompt.ts
init_state();
init_analytics();
init_messages();
init_events();
init_sessionTracing();
import { randomUUID as randomUUID2 } from "crypto";

// src/utils/userPromptKeywords.ts
function matchesNegativeKeyword(input) {
  const lowerInput = input.toLowerCase();
  const negativePattern = /\b(wtf|wth|ffs|omfg|shit(ty|tiest)?|dumbass|horrible|awful|piss(ed|ing)? off|piece of (shit|crap|junk)|what the (fuck|hell)|fucking? (broken|useless|terrible|awful|horrible)|fuck you|screw (this|you)|so frustrating|this sucks|damn it)\b/;
  return negativePattern.test(lowerInput);
}
function matchesKeepGoingKeyword(input) {
  const lowerInput = input.toLowerCase().trim();
  if (lowerInput === "continue") {
    return true;
  }
  const keepGoingPattern = /\b(keep going|go on)\b/;
  return keepGoingPattern.test(lowerInput);
}

// src/utils/processUserInput/processTextPrompt.ts
function processTextPrompt(input, imageContentBlocks, imagePasteIds, attachmentMessages, uuid, permissionMode, isMeta) {
  const promptId = randomUUID2();
  setPromptId(promptId);
  const userPromptText = typeof input === "string" ? input : input.find((block) => block.type === "text")?.text || "";
  startInteractionSpan(userPromptText);
  const otelPromptText = typeof input === "string" ? input : input.findLast((block) => block.type === "text")?.text || "";
  if (otelPromptText) {
    logOTelEvent("user_prompt", {
      prompt_length: String(otelPromptText.length),
      prompt: redactIfDisabled(otelPromptText),
      "prompt.id": promptId
    });
  }
  const isNegative = matchesNegativeKeyword(userPromptText);
  const isKeepGoing = matchesKeepGoingKeyword(userPromptText);
  logEvent("tengu_input_prompt", {
    is_negative: isNegative,
    is_keep_going: isKeepGoing
  });
  if (imageContentBlocks.length > 0) {
    const textContent = typeof input === "string" ? input.trim() ? [{ type: "text", text: input }] : [] : input;
    const userMessage2 = createUserMessage({
      content: [...textContent, ...imageContentBlocks],
      uuid,
      imagePasteIds: imagePasteIds.length > 0 ? imagePasteIds : undefined,
      permissionMode,
      isMeta: isMeta || undefined
    });
    return {
      messages: [userMessage2, ...attachmentMessages],
      shouldQuery: true
    };
  }
  const userMessage = createUserMessage({
    content: input,
    uuid,
    permissionMode,
    isMeta: isMeta || undefined
  });
  return {
    messages: [userMessage, ...attachmentMessages],
    shouldQuery: true
  };
}

// src/utils/processUserInput/processUserInput.ts
async function processUserInput({
  input,
  preExpansionInput,
  mode,
  setToolJSX,
  context,
  pastedContents,
  ideSelection,
  messages,
  setUserInputOnProcessing,
  uuid,
  isAlreadyProcessing,
  querySource,
  canUseTool,
  skipSlashCommands,
  bridgeOrigin,
  isMeta,
  skipAttachments
}) {
  const inputString = typeof input === "string" ? input : null;
  if (mode === "prompt" && inputString !== null && !isMeta) {
    setUserInputOnProcessing?.(inputString);
  }
  queryCheckpoint("query_process_user_input_base_start");
  const appState = context.getAppState();
  const result = await processUserInputBase(input, mode, setToolJSX, context, pastedContents, ideSelection, messages, uuid, isAlreadyProcessing, querySource, canUseTool, appState.toolPermissionContext.mode, skipSlashCommands, bridgeOrigin, isMeta, skipAttachments, preExpansionInput);
  queryCheckpoint("query_process_user_input_base_end");
  if (!result.shouldQuery) {
    return result;
  }
  queryCheckpoint("query_hooks_start");
  const inputMessage = getContentText(input) || "";
  for await (const hookResult of executeUserPromptSubmitHooks(inputMessage, appState.toolPermissionContext.mode, context, context.requestPrompt)) {
    if (hookResult.message?.type === "progress") {
      continue;
    }
    if (hookResult.blockingError) {
      const blockingMessage = getUserPromptSubmitHookBlockingMessage(hookResult.blockingError);
      return {
        messages: [
          createSystemMessage(`${blockingMessage}

Original prompt: ${input}`, "warning")
        ],
        shouldQuery: false,
        allowedTools: result.allowedTools
      };
    }
    if (hookResult.preventContinuation) {
      const message = hookResult.stopReason ? `Operation stopped by hook: ${hookResult.stopReason}` : "Operation stopped by hook";
      result.messages.push(createUserMessage({
        content: message
      }));
      result.shouldQuery = false;
      return result;
    }
    if (hookResult.additionalContexts && hookResult.additionalContexts.length > 0) {
      result.messages.push(createAttachmentMessage({
        type: "hook_additional_context",
        content: hookResult.additionalContexts.map(applyTruncation),
        hookName: "UserPromptSubmit",
        toolUseID: `hook-${randomUUID3()}`,
        hookEvent: "UserPromptSubmit"
      }));
    }
    if (hookResult.message) {
      switch (hookResult.message.attachment.type) {
        case "hook_success":
          if (!hookResult.message.attachment.content) {
            break;
          }
          result.messages.push({
            ...hookResult.message,
            attachment: {
              ...hookResult.message.attachment,
              content: applyTruncation(hookResult.message.attachment.content)
            }
          });
          break;
        default:
          result.messages.push(hookResult.message);
          break;
      }
    }
  }
  queryCheckpoint("query_hooks_end");
  return result;
}
var MAX_HOOK_OUTPUT_LENGTH = 1e4;
function applyTruncation(content) {
  if (content.length > MAX_HOOK_OUTPUT_LENGTH) {
    return `${content.substring(0, MAX_HOOK_OUTPUT_LENGTH)}\u2026 [output truncated - exceeded ${MAX_HOOK_OUTPUT_LENGTH} characters]`;
  }
  return content;
}
async function processUserInputBase(input, mode, setToolJSX, context, pastedContents, ideSelection, messages, uuid, isAlreadyProcessing, querySource, canUseTool, permissionMode, skipSlashCommands, bridgeOrigin, isMeta, skipAttachments, preExpansionInput) {
  let inputString = null;
  let precedingInputBlocks = [];
  const imageMetadataTexts = [];
  let normalizedInput = input;
  if (typeof input === "string") {
    inputString = input;
  } else if (input.length > 0) {
    queryCheckpoint("query_image_processing_start");
    const processedBlocks = [];
    for (const block of input) {
      if (block.type === "image") {
        const resized = await maybeResizeAndDownsampleImageBlock(block);
        if (resized.dimensions) {
          const metadataText = createImageMetadataText(resized.dimensions);
          if (metadataText) {
            imageMetadataTexts.push(metadataText);
          }
        }
        processedBlocks.push(resized.block);
      } else {
        processedBlocks.push(block);
      }
    }
    normalizedInput = processedBlocks;
    queryCheckpoint("query_image_processing_end");
    const lastBlock = processedBlocks[processedBlocks.length - 1];
    if (lastBlock?.type === "text") {
      inputString = lastBlock.text;
      precedingInputBlocks = processedBlocks.slice(0, -1);
    } else {
      precedingInputBlocks = processedBlocks;
    }
  }
  if (inputString === null && mode !== "prompt") {
    throw new Error(`Mode: ${mode} requires a string input.`);
  }
  const imageContents = pastedContents ? Object.values(pastedContents).filter(isValidImagePaste) : [];
  const imagePasteIds = imageContents.map((img) => img.id);
  const storedImagePaths = pastedContents ? await storeImages(pastedContents) : new Map;
  queryCheckpoint("query_pasted_image_processing_start");
  const imageProcessingResults = await Promise.all(imageContents.map(async (pastedImage) => {
    const imageBlock = {
      type: "image",
      source: {
        type: "base64",
        media_type: pastedImage.mediaType || "image/png",
        data: pastedImage.content
      }
    };
    logEvent("tengu_pasted_image_resize_attempt", {
      original_size_bytes: pastedImage.content.length
    });
    const resized = await maybeResizeAndDownsampleImageBlock(imageBlock);
    return {
      resized,
      originalDimensions: pastedImage.dimensions,
      sourcePath: pastedImage.sourcePath ?? storedImagePaths.get(pastedImage.id)
    };
  }));
  const imageContentBlocks = [];
  for (const {
    resized,
    originalDimensions,
    sourcePath
  } of imageProcessingResults) {
    if (resized.dimensions) {
      const metadataText = createImageMetadataText(resized.dimensions, sourcePath);
      if (metadataText) {
        imageMetadataTexts.push(metadataText);
      }
    } else if (originalDimensions) {
      const metadataText = createImageMetadataText(originalDimensions, sourcePath);
      if (metadataText) {
        imageMetadataTexts.push(metadataText);
      }
    } else if (sourcePath) {
      imageMetadataTexts.push(`[Image source: ${sourcePath}]`);
    }
    imageContentBlocks.push(resized.block);
  }
  queryCheckpoint("query_pasted_image_processing_end");
  let effectiveSkipSlash = skipSlashCommands;
  if (bridgeOrigin && inputString !== null && inputString.startsWith("/")) {
    const parsed = parseSlashCommand(inputString);
    const cmd = parsed ? findCommand(parsed.commandName, context.options.commands) : undefined;
    if (cmd) {
      const safety = getBridgeCommandSafety(cmd, parsed?.args ?? "");
      if (safety.ok) {
        effectiveSkipSlash = false;
      } else {
        const msg = safety.reason ?? `/${getCommandName(cmd)} isn't available over Remote Control.`;
        return {
          messages: [
            createUserMessage({ content: inputString, uuid }),
            createCommandInputMessage(`<local-command-stdout>${msg}</local-command-stdout>`)
          ],
          shouldQuery: false,
          resultText: msg
        };
      }
    }
  }
  if (mode === "prompt" && !context.options.isNonInteractiveSession && inputString !== null && !effectiveSkipSlash && !inputString.startsWith("/") && !context.getAppState().ultraplanSessionUrl && !context.getAppState().ultraplanLaunching && hasUltraplanKeyword(preExpansionInput ?? inputString)) {
    logEvent("tengu_ultraplan_keyword", {});
    const rewritten = replaceUltraplanKeyword(inputString).trim();
    const { processSlashCommand } = await import("./chunk-m3wws74g.js");
    const slashResult = await processSlashCommand(`/ultraplan ${rewritten}`, precedingInputBlocks, imageContentBlocks, [], context, setToolJSX, uuid, isAlreadyProcessing, canUseTool);
    return addImageMetadataMessage(slashResult, imageMetadataTexts);
  }
  const shouldExtractAttachments = !skipAttachments && inputString !== null && (mode !== "prompt" || effectiveSkipSlash || !inputString.startsWith("/"));
  queryCheckpoint("query_attachment_loading_start");
  const attachmentMessages = shouldExtractAttachments ? await toArray(getAttachmentMessages(inputString, context, ideSelection ?? null, [], messages, querySource)) : [];
  queryCheckpoint("query_attachment_loading_end");
  if (inputString !== null && mode === "bash") {
    const { processBashCommand } = await import("./chunk-1r73pfhp.js");
    return addImageMetadataMessage(await processBashCommand(inputString, precedingInputBlocks, attachmentMessages, context, setToolJSX), imageMetadataTexts);
  }
  if (inputString !== null && !effectiveSkipSlash && inputString.startsWith("/")) {
    const { processSlashCommand } = await import("./chunk-m3wws74g.js");
    const slashResult = await processSlashCommand(inputString, precedingInputBlocks, imageContentBlocks, attachmentMessages, context, setToolJSX, uuid, isAlreadyProcessing, canUseTool);
    return addImageMetadataMessage(slashResult, imageMetadataTexts);
  }
  if (inputString !== null && mode === "prompt") {
    const trimmedInput = inputString.trim();
    const agentMention = attachmentMessages.find((m) => m.attachment.type === "agent_mention");
    if (agentMention) {
      const agentMentionString = `@agent-${agentMention.attachment.agentType}`;
      const isSubagentOnly = trimmedInput === agentMentionString;
      const isPrefix = trimmedInput.startsWith(agentMentionString) && !isSubagentOnly;
      logEvent("tengu_subagent_at_mention", {
        is_subagent_only: isSubagentOnly,
        is_prefix: isPrefix
      });
    }
  }
  return addImageMetadataMessage(processTextPrompt(normalizedInput, imageContentBlocks, imagePasteIds, attachmentMessages, uuid, permissionMode, isMeta), imageMetadataTexts);
}
function addImageMetadataMessage(result, imageMetadataTexts) {
  if (imageMetadataTexts.length > 0) {
    result.messages.push(createUserMessage({
      content: imageMetadataTexts.map((text) => ({ type: "text", text })),
      isMeta: true
    }));
  }
  return result;
}

// src/utils/messages/systemInit.ts
init_state();
init_outputStyles();
init_constants();
init_auth();
init_cwd();
init_fastMode();
init_settings();
import { randomUUID as randomUUID4 } from "crypto";
function sdkCompatToolName(name) {
  return name === AGENT_TOOL_NAME ? LEGACY_AGENT_TOOL_NAME : name;
}
function buildSystemInitMessage(inputs) {
  const settings = getSettings_DEPRECATED();
  const outputStyle = settings?.outputStyle ?? DEFAULT_OUTPUT_STYLE_NAME;
  const initMessage = {
    type: "system",
    subtype: "init",
    cwd: getCwd(),
    session_id: getSessionId(),
    tools: inputs.tools.map((tool) => sdkCompatToolName(tool.name)),
    mcp_servers: inputs.mcpClients.map((client) => ({
      name: client.name,
      status: client.type
    })),
    model: inputs.model,
    permissionMode: inputs.permissionMode,
    slash_commands: inputs.commands.filter((c) => c.userInvocable !== false).map((c) => c.name),
    apiKeySource: getAnthropicApiKeyWithSource().source,
    betas: getSdkBetas(),
    claude_code_version: "1.0.0",
    output_style: outputStyle,
    agents: inputs.agents.map((agent) => agent.agentType),
    skills: inputs.skills.filter((s) => s.userInvocable !== false).map((skill) => skill.name),
    plugins: inputs.plugins.map((plugin) => ({
      name: plugin.name,
      path: plugin.path,
      source: plugin.source
    })),
    uuid: randomUUID4()
  };
  if (false) {}
  initMessage.fast_mode_state = getFastModeState(inputs.model, inputs.fastMode);
  return initMessage;
}

export { findUltraplanTriggerPositions, findUltrareviewTriggerPositions, processUserInput, sdkCompatToolName, buildSystemInitMessage, MessageSelector, selectableUserMessagesFilter, messagesAfterAreOnlySynthetic, exports_MessageSelector, init_MessageSelector };
