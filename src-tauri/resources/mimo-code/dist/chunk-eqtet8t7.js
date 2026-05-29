// @bun
import {
  ConfigurableShortcutHint,
  MAX_TRANSCRIPT_READ_BYTES,
  TextInput,
  extractTeammateTranscriptsFromTasks,
  getLastAssistantMessage,
  getTranscriptPath,
  init_ConfigurableShortcutHint,
  init_TextInput,
  init_claude,
  init_errors,
  init_messages1 as init_messages,
  init_sessionStorage,
  init_systemPromptType,
  init_useTerminalSize,
  loadAllSubagentTranscriptsFromDisk,
  normalizeMessagesForAPI,
  queryHaiku,
  startsWithApiErrorPrefix
} from "./chunk-ktw919wt.js";
import {
  asSystemPrompt
} from "./chunk-chmfqs2y.js";
import {
  init_useKeybinding
} from "./chunk-dsnwry8r.js";
import {
  init_browser,
  openBrowser
} from "./chunk-6dj3cf9s.js";
import {
  checkAndRefreshOAuthTokenIfNeeded,
  getAuthHeaders,
  getUserAgent,
  init_auth,
  init_firstPartyEventLogger,
  init_http,
  init_mimoRuntimeConfig,
  isMiMoRuntime,
  logEventTo1P
} from "./chunk-1ghcng4e.js";
import {
  env,
  init_env
} from "./chunk-nw7v8w65.js";
import {
  Byline,
  Dialog,
  KeyboardShortcutHint,
  ThemedBox_default,
  ThemedText,
  init_src,
  useKeybinding,
  useTerminalSize,
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
  getGitState,
  getIsGit,
  init_git
} from "./chunk-t6jhrn34.js";
import {
  getInMemoryErrors,
  init_log,
  init_privacyLevel,
  isEssentialTrafficOnly,
  logError
} from "./chunk-w5ahy59y.js";
import {
  init_debug,
  init_slowOperations,
  jsonStringify,
  logForDebugging
} from "./chunk-rpbc3b7k.js";
import {
  getLastAPIRequest,
  init_state
} from "./chunk-j5xzpm59.js";
import {
  axios_default,
  init_axios
} from "./chunk-3v4d4h0t.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/components/Feedback.tsx
import { readFile, stat } from "fs/promises";
function redactSensitiveInfo(text) {
  let redacted = text;
  redacted = redacted.replace(/"(sk-ant[^\s"']{24,})"/g, '"[REDACTED_API_KEY]"');
  redacted = redacted.replace(/(?<![A-Za-z0-9"'])(sk-ant-?[A-Za-z0-9_-]{10,})(?![A-Za-z0-9"'])/g, "[REDACTED_API_KEY]");
  redacted = redacted.replace(/(?<![A-Za-z0-9"'])(tp-[A-Za-z0-9_-]{20,})(?![A-Za-z0-9"'])/g, "[REDACTED_API_KEY]");
  redacted = redacted.replace(/AWS key: "(AWS[A-Z0-9]{20,})"/g, 'AWS key: "[REDACTED_AWS_KEY]"');
  redacted = redacted.replace(/(AKIA[A-Z0-9]{16})/g, "[REDACTED_AWS_KEY]");
  redacted = redacted.replace(/(?<![A-Za-z0-9])(AIza[A-Za-z0-9_-]{35})(?![A-Za-z0-9])/g, "[REDACTED_GCP_KEY]");
  redacted = redacted.replace(/(?<![A-Za-z0-9])([a-z0-9-]+@[a-z0-9-]+\.iam\.gserviceaccount\.com)(?![A-Za-z0-9])/g, "[REDACTED_GCP_SERVICE_ACCOUNT]");
  redacted = redacted.replace(/(["']?(?:x-api-key|api-key)["']?\s*[:=]\s*["']?)[^"',\s)}\][]+/gi, "$1[REDACTED_API_KEY]");
  redacted = redacted.replace(/(["']?authorization["']?\s*[:=]\s*["']?(bearer\s+)?)[^"',\s)}\]]+/gi, "$1[REDACTED_TOKEN]");
  redacted = redacted.replace(/(AWS[_-][A-Za-z0-9_]+\s*[=:]\s*)["']?[^"',\s)}\]]+["']?/gi, "$1[REDACTED_AWS_VALUE]");
  redacted = redacted.replace(/(GOOGLE[_-][A-Za-z0-9_]+\s*[=:]\s*)["']?[^"',\s)}\]]+["']?/gi, "$1[REDACTED_GCP_VALUE]");
  redacted = redacted.replace(/((API[-_]?KEY|TOKEN|SECRET|PASSWORD)\s*[=:]\s*)["']?[^"',\s)}\][]+["']?/gi, "$1[REDACTED]");
  return redacted;
}
function getSanitizedErrorLogs() {
  return getInMemoryErrors().map((errorInfo) => {
    const errorCopy = { ...errorInfo };
    if (errorCopy && typeof errorCopy.error === "string") {
      errorCopy.error = redactSensitiveInfo(errorCopy.error);
    }
    return errorCopy;
  });
}
async function loadRawTranscriptJsonl() {
  try {
    const transcriptPath = getTranscriptPath();
    const { size } = await stat(transcriptPath);
    if (size > MAX_TRANSCRIPT_READ_BYTES) {
      logForDebugging(`Skipping raw transcript read: file too large (${size} bytes)`, { level: "warn" });
      return null;
    }
    return await readFile(transcriptPath, "utf-8");
  } catch {
    return null;
  }
}
function Feedback({
  abortSignal,
  messages,
  initialDescription,
  onDone,
  backgroundTasks = {}
}) {
  const [step, setStep] = import_react.useState("userInput");
  const [cursorOffset, setCursorOffset] = import_react.useState(0);
  const [description, setDescription] = import_react.useState(initialDescription ?? "");
  const [feedbackId, setFeedbackId] = import_react.useState(null);
  const [error, setError] = import_react.useState(null);
  const [envInfo, setEnvInfo] = import_react.useState({ isGit: false, gitState: null });
  const [title, setTitle] = import_react.useState(null);
  const textInputColumns = useTerminalSize().columns - 4;
  import_react.useEffect(() => {
    async function loadEnvInfo() {
      const isGit = await getIsGit();
      let gitState = null;
      if (isGit) {
        gitState = await getGitState();
      }
      setEnvInfo({ isGit, gitState });
    }
    loadEnvInfo();
  }, []);
  const submitReport = import_react.useCallback(async () => {
    setStep("submitting");
    setError(null);
    setFeedbackId(null);
    if (isMiMoRuntime()) {
      setError("Feedback submission is not available in MiMo Code.");
      setStep("userInput");
      return;
    }
    const sanitizedErrors = getSanitizedErrorLogs();
    const lastAssistantMessage = getLastAssistantMessage(messages);
    const lastAssistantMessageId = lastAssistantMessage?.requestId ?? null;
    const [diskTranscripts, rawTranscriptJsonl] = await Promise.all([
      loadAllSubagentTranscriptsFromDisk(),
      loadRawTranscriptJsonl()
    ]);
    const teammateTranscripts = extractTeammateTranscriptsFromTasks(backgroundTasks);
    const subagentTranscripts = { ...diskTranscripts, ...teammateTranscripts };
    const reportData = {
      latestAssistantMessageId: lastAssistantMessageId,
      message_count: messages.length,
      datetime: new Date().toISOString(),
      description,
      platform: env.platform,
      gitRepo: envInfo.isGit,
      terminal: env.terminal,
      version: "1.0.0",
      transcript: normalizeMessagesForAPI(messages),
      errors: sanitizedErrors,
      lastApiRequest: getLastAPIRequest(),
      ...Object.keys(subagentTranscripts).length > 0 && {
        subagentTranscripts
      },
      ...rawTranscriptJsonl && { rawTranscriptJsonl }
    };
    const [result, t] = await Promise.all([
      submitFeedback(reportData, abortSignal),
      generateTitle(description, abortSignal)
    ]);
    setTitle(t);
    if (result.success) {
      if (result.feedbackId) {
        setFeedbackId(result.feedbackId);
        logEvent("tengu_bug_report_submitted", {
          feedback_id: result.feedbackId,
          last_assistant_message_id: lastAssistantMessageId
        });
        logEventTo1P("tengu_bug_report_description", {
          feedback_id: result.feedbackId,
          description: redactSensitiveInfo(description)
        });
      }
      setStep("done");
    } else {
      if (result.isZdrOrg) {
        setError("Feedback collection is not available for organizations with custom data retention policies.");
      } else {
        setError("Could not submit feedback. Please try again later.");
      }
      setStep("userInput");
    }
  }, [description, envInfo.isGit, messages]);
  const handleCancel = import_react.useCallback(() => {
    if (step === "done") {
      if (error) {
        onDone("Error submitting feedback / bug report", {
          display: "system"
        });
      } else {
        onDone("Feedback / bug report submitted", { display: "system" });
      }
      return;
    }
    onDone("Feedback / bug report cancelled", { display: "system" });
  }, [step, error, onDone]);
  useKeybinding("confirm:no", handleCancel, {
    context: "Settings",
    isActive: step === "userInput"
  });
  use_input_default((input, key) => {
    if (step === "done") {
      if (key.return && title) {
        const issueUrl = createGitHubIssueUrl(feedbackId ?? "", title, description, getSanitizedErrorLogs());
        openBrowser(issueUrl);
      }
      if (error) {
        onDone("Error submitting feedback / bug report", {
          display: "system"
        });
      } else {
        onDone("Feedback / bug report submitted", { display: "system" });
      }
      return;
    }
    if (error && step !== "userInput") {
      onDone("Error submitting feedback / bug report", {
        display: "system"
      });
      return;
    }
    if (step === "consent" && (key.return || input === " ")) {
      submitReport();
    }
  });
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Dialog, {
    title: "Submit Feedback / Bug Report",
    onCancel: handleCancel,
    isCancelActive: step !== "userInput",
    inputGuide: (exitState) => exitState.pending ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
      children: [
        "Press ",
        exitState.keyName,
        " again to exit"
      ]
    }, undefined, true, undefined, this) : step === "userInput" ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Byline, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(KeyboardShortcutHint, {
          shortcut: "Enter",
          action: "continue"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ConfigurableShortcutHint, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "cancel"
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this) : step === "consent" ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Byline, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(KeyboardShortcutHint, {
          shortcut: "Enter",
          action: "submit"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ConfigurableShortcutHint, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "cancel"
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this) : null,
    children: [
      step === "userInput" && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        gap: 1,
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: "Describe the issue below:"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(TextInput, {
            value: description,
            onChange: (value) => {
              setDescription(value);
              if (error) {
                setError(null);
              }
            },
            columns: textInputColumns,
            onSubmit: () => setStep("consent"),
            onExitMessage: () => onDone("Feedback cancelled", { display: "system" }),
            cursorOffset,
            onChangeCursorOffset: setCursorOffset,
            showCursor: true
          }, undefined, false, undefined, this),
          error && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            gap: 1,
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                color: "error",
                children: error
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                dimColor: true,
                children: "Edit and press Enter to retry, or Esc to cancel"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this),
      step === "consent" && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: "This report will include:"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            marginLeft: 2,
            flexDirection: "column",
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                children: [
                  "- Your feedback / bug description: ",
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: description
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                children: [
                  "- Environment info:",
                  " ",
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: [
                      env.platform,
                      ", ",
                      env.terminal,
                      ", v",
                      "1.0.0"
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, undefined, true, undefined, this),
              envInfo.gitState && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                children: [
                  "- Git repo metadata:",
                  " ",
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: [
                      envInfo.gitState.branchName,
                      envInfo.gitState.commitHash ? `, ${envInfo.gitState.commitHash.slice(0, 7)}` : "",
                      envInfo.gitState.remoteUrl ? ` @ ${envInfo.gitState.remoteUrl}` : "",
                      !envInfo.gitState.isHeadOnRemote && ", not synced",
                      !envInfo.gitState.isClean && ", has local changes"
                    ]
                  }, undefined, true, undefined, this)
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                children: "- Current session transcript"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            marginTop: 1,
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              wrap: "wrap",
              dimColor: true,
              children: "We will use your feedback to debug related issues or to improve MiMo Code's functionality (eg. to reduce the risk of bugs occurring in the future)."
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            marginTop: 1,
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              children: [
                "Press ",
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                  bold: true,
                  children: "Enter"
                }, undefined, false, undefined, this),
                " to confirm and submit."
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      step === "submitting" && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "row",
        gap: 1,
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: "Submitting report\u2026"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      step === "done" && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        children: [
          error ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            color: "error",
            children: error
          }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            color: "success",
            children: "Thank you for your report!"
          }, undefined, false, undefined, this),
          feedbackId && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            dimColor: true,
            children: [
              "Feedback ID: ",
              feedbackId
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            marginTop: 1,
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                children: "Press "
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                bold: true,
                children: "Enter "
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                children: "to open your browser and draft a GitHub issue, or any other key to close."
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function createGitHubIssueUrl(feedbackId, title, description, errors) {
  const sanitizedTitle = redactSensitiveInfo(title);
  const sanitizedDescription = redactSensitiveInfo(description);
  const bodyPrefix = `**Bug Description**
${sanitizedDescription}

` + `**Environment Info**
` + `- Platform: ${env.platform}
` + `- Terminal: ${env.terminal}
` + `- Version: ${"1.0.0"}
` + `- Feedback ID: ${feedbackId}
` + `
**Errors**
\`\`\`json
`;
  const errorSuffix = `
\`\`\`
`;
  const errorsJson = jsonStringify(errors);
  const baseUrl = `${GITHUB_ISSUES_REPO_URL}/new?title=${encodeURIComponent(sanitizedTitle)}&labels=user-reported,bug&body=`;
  const truncationNote = `
**Note:** Content was truncated.
`;
  const encodedPrefix = encodeURIComponent(bodyPrefix);
  const encodedSuffix = encodeURIComponent(errorSuffix);
  const encodedNote = encodeURIComponent(truncationNote);
  const encodedErrors = encodeURIComponent(errorsJson);
  const spaceForErrors = GITHUB_URL_LIMIT - baseUrl.length - encodedPrefix.length - encodedSuffix.length - encodedNote.length;
  if (spaceForErrors <= 0) {
    const ellipsis2 = encodeURIComponent("\u2026");
    const buffer2 = 50;
    const maxEncodedLength = GITHUB_URL_LIMIT - baseUrl.length - ellipsis2.length - encodedNote.length - buffer2;
    const fullBody = bodyPrefix + errorsJson + errorSuffix;
    let encodedFullBody = encodeURIComponent(fullBody);
    if (encodedFullBody.length > maxEncodedLength) {
      encodedFullBody = encodedFullBody.slice(0, maxEncodedLength);
      const lastPercent2 = encodedFullBody.lastIndexOf("%");
      if (lastPercent2 >= encodedFullBody.length - 2) {
        encodedFullBody = encodedFullBody.slice(0, lastPercent2);
      }
    }
    return baseUrl + encodedFullBody + ellipsis2 + encodedNote;
  }
  if (encodedErrors.length <= spaceForErrors) {
    return baseUrl + encodedPrefix + encodedErrors + encodedSuffix;
  }
  const ellipsis = encodeURIComponent("\u2026");
  const buffer = 50;
  let truncatedEncodedErrors = encodedErrors.slice(0, spaceForErrors - ellipsis.length - buffer);
  const lastPercent = truncatedEncodedErrors.lastIndexOf("%");
  if (lastPercent >= truncatedEncodedErrors.length - 2) {
    truncatedEncodedErrors = truncatedEncodedErrors.slice(0, lastPercent);
  }
  return baseUrl + encodedPrefix + truncatedEncodedErrors + ellipsis + encodedSuffix + encodedNote;
}
async function generateTitle(description, abortSignal) {
  try {
    const response = await queryHaiku({
      systemPrompt: asSystemPrompt([
        "Generate a concise, technical issue title (max 80 chars) for a public GitHub issue based on this bug report for MiMo Code.",
        "MiMo Code is an agentic coding CLI based on the Anthropic API.",
        "The title should:",
        "- Include the type of issue [Bug] or [Feature Request] as the first thing in the title",
        "- Be concise, specific and descriptive of the actual problem",
        "- Use technical terminology appropriate for a software issue",
        '- For error messages, extract the key error (e.g., "Missing Tool Result Block" rather than the full message)',
        "- Be direct and clear for developers to understand the problem",
        '- If you cannot determine a clear issue, use "Bug Report: [brief description]"',
        "- Any LLM API errors are from the Anthropic API, not from any other model provider",
        "Your response will be directly used as the title of the Github issue, and as such should not contain any other commentary or explaination",
        'Examples of good titles include: "[Bug] Auto-Compact triggers to soon", "[Bug] Anthropic API Error: Missing Tool Result Block", "[Bug] Error: Invalid Model Name for Opus"'
      ]),
      userPrompt: description,
      signal: abortSignal,
      options: {
        hasAppendSystemPrompt: false,
        toolChoice: undefined,
        isNonInteractiveSession: false,
        agents: [],
        querySource: "feedback",
        mcpTools: []
      }
    });
    const _firstBlock = response?.message?.content?.[0];
    const title = _firstBlock?.type === "text" ? _firstBlock.text : "Bug Report";
    if (startsWithApiErrorPrefix(title)) {
      return createFallbackTitle(description);
    }
    return title;
  } catch (error) {
    logError(error);
    return createFallbackTitle(description);
  }
}
function createFallbackTitle(description) {
  const firstLine = description.split(`
`)[0] || "";
  if (firstLine.length <= 60 && firstLine.length > 5) {
    return firstLine;
  }
  let truncated = firstLine.slice(0, 60);
  if (firstLine.length > 60) {
    const lastSpace = truncated.lastIndexOf(" ");
    if (lastSpace > 30) {
      truncated = truncated.slice(0, lastSpace);
    }
    truncated += "...";
  }
  return truncated.length < 10 ? "Bug Report" : truncated;
}
function sanitizeAndLogError(err) {
  if (err instanceof Error) {
    const safeError = new Error(redactSensitiveInfo(err.message));
    if (err.stack) {
      safeError.stack = redactSensitiveInfo(err.stack);
    }
    logError(safeError);
  } else {
    const errorString = redactSensitiveInfo(String(err));
    logError(new Error(errorString));
  }
}
async function submitFeedback(data, signal) {
  if (isMiMoRuntime()) {
    return { success: false };
  }
  if (isEssentialTrafficOnly()) {
    return { success: false };
  }
  try {
    await checkAndRefreshOAuthTokenIfNeeded();
    const authResult = getAuthHeaders();
    if (authResult.error) {
      return { success: false };
    }
    const headers = {
      "Content-Type": "application/json",
      "User-Agent": getUserAgent(),
      ...authResult.headers
    };
    const response = await axios_default.post("https://api.anthropic.com/api/claude_cli_feedback", {
      content: jsonStringify(data)
    }, {
      headers,
      timeout: 30000,
      signal
    });
    if (response.status === 200) {
      const result = response.data;
      if (result?.feedback_id) {
        return { success: true, feedbackId: result.feedback_id };
      }
      sanitizeAndLogError(new Error("Failed to submit feedback: request did not return feedback_id"));
      return { success: false };
    }
    sanitizeAndLogError(new Error("Failed to submit feedback:" + response.status));
    return { success: false };
  } catch (err) {
    if (axios_default.isCancel(err)) {
      return { success: false };
    }
    if (axios_default.isAxiosError(err) && err.response?.status === 403) {
      const errorData = err.response.data;
      if (errorData?.error?.type === "permission_error" && errorData?.error?.message?.includes("Custom data retention settings")) {
        sanitizeAndLogError(new Error("Cannot submit feedback because custom data retention settings are enabled"));
        return { success: false, isZdrOrg: true };
      }
    }
    sanitizeAndLogError(err);
    return { success: false };
  }
}
var import_react, jsx_dev_runtime, GITHUB_URL_LIMIT = 7250, GITHUB_ISSUES_REPO_URL;
var init_Feedback = __esm(() => {
  init_axios();
  init_state();
  init_firstPartyEventLogger();
  init_analytics();
  init_messages();
  init_useTerminalSize();
  init_src();
  init_useKeybinding();
  init_claude();
  init_errors();
  init_auth();
  init_browser();
  init_debug();
  init_env();
  init_git();
  init_http();
  init_log();
  init_mimoRuntimeConfig();
  init_privacyLevel();
  init_sessionStorage();
  init_slowOperations();
  init_systemPromptType();
  init_ConfigurableShortcutHint();
  init_src();
  init_TextInput();
  import_react = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
  GITHUB_ISSUES_REPO_URL = process.env.USER_TYPE === "ant" ? "https://github.com/anthropics/claude-cli-internal/issues" : "https://github.com/anthropics/claude-code/issues";
});

export { redactSensitiveInfo, Feedback, init_Feedback };
