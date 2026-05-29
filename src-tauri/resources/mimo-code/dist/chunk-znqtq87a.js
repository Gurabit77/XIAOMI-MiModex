// @bun
import {
  createCapacityWake
} from "./chunk-ae76ded0.js";
import {
  getPollIntervalConfig
} from "./chunk-vhpsr3bm.js";
import {
  buildCCRv2SdkUrl,
  buildSdkUrl,
  decodeWorkSecret,
  registerWorker,
  sameSessionId
} from "./chunk-hwebfkyh.js";
import {
  createTokenRefreshScheduler
} from "./chunk-zvgyvpya.js";
import {
  getBootstrapArgs,
  getScriptPath,
  init_cliLaunch
} from "./chunk-a9gy4bpg.js";
import {
  $toString,
  init_server
} from "./chunk-jdgeec04.js";
import {
  BridgeFatalError,
  FAILED_FOOTER_TEXT,
  TOOL_DISPLAY_EXPIRY_MS,
  buildActiveFooterText,
  buildBridgeConnectUrl,
  buildBridgeSessionUrl,
  buildIdleFooterText,
  createAgentWorktree,
  createBridgeApiClient,
  getRemoteSessionUrl,
  init_bridgeApi,
  init_bridgeStatusUtil,
  init_product,
  init_worktree,
  isExpiredErrorType,
  isSuppressible403,
  removeAgentWorktree,
  timestamp,
  validateBridgeId,
  wrapWithOsc8Link
} from "./chunk-ktw919wt.js";
import {
  init_rcDebugLog,
  rcLog
} from "./chunk-chmfqs2y.js";
import {
  getTrustedDeviceToken,
  init_trustedDevice
} from "./chunk-1gfk9pd3.js";
import {
  BRIDGE_LOGIN_ERROR,
  DEFAULT_SESSION_TIMEOUT_MS,
  init_types
} from "./chunk-bhdt6k7w.js";
import {
  debugTruncate,
  describeAxiosError,
  init_debugUtils,
  init_sessionIdCompat,
  toCompatSessionId,
  toInfraSessionId
} from "./chunk-2e52n52z.js";
import {
  init_datadog,
  shutdownDatadog
} from "./chunk-6rj8k2tr.js";
import {
  BRIDGE_FAILED_INDICATOR,
  BRIDGE_READY_INDICATOR,
  BRIDGE_SPINNER_FRAMES,
  checkGate_CACHED_OR_BLOCKING,
  init_figures,
  init_firstPartyEventLogger,
  init_growthbook,
  shutdown1PEventLogging
} from "./chunk-1ghcng4e.js";
import {
  init_sleep,
  sleep
} from "./chunk-8g5pe1gr.js";
import {
  formatDuration,
  init_format,
  truncateToWidth
} from "./chunk-x5hyyhqf.js";
import {
  init_source,
  init_src,
  source_default,
  stringWidth
} from "./chunk-er1s76c9.js";
import {
  init_analytics,
  logEvent,
  logEventAsync
} from "./chunk-f2mhrmww.js";
import {
  init_diagLogs,
  logForDiagnosticsNoPII
} from "./chunk-t6jhrn34.js";
import {
  init_log,
  logError
} from "./chunk-w5ahy59y.js";
import {
  errorMessage,
  init_debug,
  init_errors,
  init_slowOperations,
  jsonParse,
  jsonStringify,
  logForDebugging
} from "./chunk-rpbc3b7k.js";
import {
  init_envUtils,
  isEnvTruthy,
  isInProtectedNamespace
} from "./chunk-hxhwzgnn.js";
import {
  __require
} from "./chunk-qp2qdcda.js";

// src/bridge/bridgeMain.ts
init_product();
init_datadog();
init_firstPartyEventLogger();
init_growthbook();
init_analytics();
init_cliLaunch();
init_debug();
init_rcDebugLog();
init_diagLogs();
init_envUtils();
init_errors();
init_format();
init_log();
init_sleep();
init_worktree();
init_bridgeApi();
init_bridgeStatusUtil();
import { randomUUID } from "crypto";
import { hostname, tmpdir as tmpdir2 } from "os";
import { basename, join as join2, resolve } from "path";

// src/bridge/bridgeUI.ts
init_source();
init_server();
init_figures();
init_src();
init_debug();
init_bridgeStatusUtil();
var QR_OPTIONS = {
  type: "utf8",
  errorCorrectionLevel: "L",
  small: true
};
async function generateQr(url) {
  const qr = await $toString(url, QR_OPTIONS);
  return qr.split(`
`).filter((line) => line.length > 0);
}
function createBridgeLogger(options) {
  const write = options.write ?? ((s) => process.stdout.write(s));
  const verbose = options.verbose;
  let statusLineCount = 0;
  let currentState = "idle";
  let currentStateText = "Ready";
  let repoName = "";
  let branch = "";
  let debugLogPath = "";
  let connectUrl = "";
  let cachedIngressUrl = "";
  let cachedEnvironmentId = "";
  let activeSessionUrl = null;
  let qrLines = [];
  let qrVisible = false;
  let lastToolSummary = null;
  let lastToolTime = 0;
  let sessionActive = 0;
  let sessionMax = 1;
  let spawnModeDisplay = null;
  let spawnMode = "single-session";
  const sessionDisplayInfo = new Map;
  let connectingTimer = null;
  let connectingTick = 0;
  function countVisualLines(text) {
    const cols = process.stdout.columns || 80;
    let count = 0;
    for (const logical of text.split(`
`)) {
      if (logical.length === 0) {
        count++;
        continue;
      }
      const width = stringWidth(logical);
      count += Math.max(1, Math.ceil(width / cols));
    }
    if (text.endsWith(`
`)) {
      count--;
    }
    return count;
  }
  function writeStatus(text) {
    write(text);
    statusLineCount += countVisualLines(text);
  }
  function clearStatusLines() {
    if (statusLineCount <= 0)
      return;
    logForDebugging(`[bridge:ui] clearStatusLines count=${statusLineCount}`);
    write(`\x1B[${statusLineCount}A`);
    write("\x1B[J");
    statusLineCount = 0;
  }
  function printLog(line) {
    clearStatusLines();
    write(line);
  }
  function regenerateQr(url) {
    generateQr(url).then((lines) => {
      qrLines = lines;
      renderStatusLine();
    }).catch((e) => {
      logForDebugging(`QR code generation failed: ${e}`, { level: "error" });
    });
  }
  function renderConnectingLine() {
    clearStatusLines();
    const frame = BRIDGE_SPINNER_FRAMES[connectingTick % BRIDGE_SPINNER_FRAMES.length];
    let suffix = "";
    if (repoName) {
      suffix += source_default.dim(" \xB7 ") + source_default.dim(repoName);
    }
    if (branch) {
      suffix += source_default.dim(" \xB7 ") + source_default.dim(branch);
    }
    writeStatus(`${source_default.yellow(frame)} ${source_default.yellow("Connecting")}${suffix}
`);
  }
  function startConnecting() {
    stopConnecting();
    renderConnectingLine();
    connectingTimer = setInterval(() => {
      connectingTick++;
      renderConnectingLine();
    }, 150);
  }
  function stopConnecting() {
    if (connectingTimer) {
      clearInterval(connectingTimer);
      connectingTimer = null;
    }
  }
  function renderStatusLine() {
    if (currentState === "reconnecting" || currentState === "failed") {
      return;
    }
    clearStatusLines();
    const isIdle = currentState === "idle";
    if (qrVisible) {
      for (const line of qrLines) {
        writeStatus(`${source_default.dim(line)}
`);
      }
    }
    const indicator = BRIDGE_READY_INDICATOR;
    const indicatorColor = isIdle ? source_default.green : source_default.cyan;
    const baseColor = isIdle ? source_default.green : source_default.cyan;
    const stateText = baseColor(currentStateText);
    let suffix = "";
    if (repoName) {
      suffix += source_default.dim(" \xB7 ") + source_default.dim(repoName);
    }
    if (branch && spawnMode !== "worktree") {
      suffix += source_default.dim(" \xB7 ") + source_default.dim(branch);
    }
    if (process.env.USER_TYPE === "ant" && debugLogPath) {
      writeStatus(`${source_default.yellow("[ANT-ONLY] Logs:")} ${source_default.dim(debugLogPath)}
`);
    }
    writeStatus(`${indicatorColor(indicator)} ${stateText}${suffix}
`);
    if (sessionMax > 1) {
      const modeHint = spawnMode === "worktree" ? "New sessions will be created in an isolated worktree" : "New sessions will be created in the current directory";
      writeStatus(`    ${source_default.dim(`Capacity: ${sessionActive}/${sessionMax} \xB7 ${modeHint}`)}
`);
      for (const [, info] of sessionDisplayInfo) {
        const titleText = info.title ? truncateToWidth(info.title, 35) : source_default.dim("Attached");
        const titleLinked = wrapWithOsc8Link(titleText, info.url);
        const act = info.activity;
        const showAct = act && act.type !== "result" && act.type !== "error";
        const actText = showAct ? source_default.dim(` ${truncateToWidth(act.summary, 40)}`) : "";
        writeStatus(`    ${titleLinked}${actText}
`);
      }
    }
    if (sessionMax === 1) {
      const modeText = spawnMode === "single-session" ? "Single session \xB7 exits when complete" : spawnMode === "worktree" ? `Capacity: ${sessionActive}/1 \xB7 New sessions will be created in an isolated worktree` : `Capacity: ${sessionActive}/1 \xB7 New sessions will be created in the current directory`;
      writeStatus(`    ${source_default.dim(modeText)}
`);
    }
    if (sessionMax === 1 && !isIdle && lastToolSummary && Date.now() - lastToolTime < TOOL_DISPLAY_EXPIRY_MS) {
      writeStatus(`  ${source_default.dim(truncateToWidth(lastToolSummary, 60))}
`);
    }
    const url = activeSessionUrl ?? connectUrl;
    if (url) {
      writeStatus(`
`);
      const footerText = isIdle ? buildIdleFooterText(url) : buildActiveFooterText(url);
      const qrHint = qrVisible ? source_default.dim.italic("space to hide QR code") : source_default.dim.italic("space to show QR code");
      const toggleHint = spawnModeDisplay ? source_default.dim.italic(" \xB7 w to toggle spawn mode") : "";
      writeStatus(`${source_default.dim(footerText)}
`);
      writeStatus(`${qrHint}${toggleHint}
`);
    }
  }
  return {
    printBanner(config, environmentId) {
      cachedIngressUrl = config.sessionIngressUrl;
      cachedEnvironmentId = environmentId;
      connectUrl = buildBridgeConnectUrl(environmentId, cachedIngressUrl);
      regenerateQr(connectUrl);
      if (verbose) {
        write(source_default.dim(`Remote Control`) + ` v${"1.0.0"}
`);
      }
      if (verbose) {
        if (config.spawnMode !== "single-session") {
          write(source_default.dim(`Spawn mode: `) + `${config.spawnMode}
`);
          write(source_default.dim(`Max concurrent sessions: `) + `${config.maxSessions}
`);
        }
        write(source_default.dim(`Environment ID: `) + `${environmentId}
`);
      }
      if (config.sandbox) {
        write(source_default.dim(`Sandbox: `) + `${source_default.green("Enabled")}
`);
      }
      write(`
`);
      startConnecting();
    },
    logSessionStart(sessionId, prompt) {
      if (verbose) {
        const short = truncateToWidth(prompt, 80);
        printLog(source_default.dim(`[${timestamp()}]`) + ` Session started: ${source_default.white(`"${short}"`)} (${source_default.dim(sessionId)})
`);
      }
    },
    logSessionComplete(sessionId, durationMs) {
      printLog(source_default.dim(`[${timestamp()}]`) + ` Session ${source_default.green("completed")} (${formatDuration(durationMs)}) ${source_default.dim(sessionId)}
`);
    },
    logSessionFailed(sessionId, error) {
      printLog(source_default.dim(`[${timestamp()}]`) + ` Session ${source_default.red("failed")}: ${error} ${source_default.dim(sessionId)}
`);
    },
    logStatus(message) {
      printLog(source_default.dim(`[${timestamp()}]`) + ` ${message}
`);
    },
    logVerbose(message) {
      if (verbose) {
        printLog(source_default.dim(`[${timestamp()}] ${message}`) + `
`);
      }
    },
    logError(message) {
      printLog(source_default.red(`[${timestamp()}] Error: ${message}`) + `
`);
    },
    logReconnected(disconnectedMs) {
      printLog(source_default.dim(`[${timestamp()}]`) + ` ${source_default.green("Reconnected")} after ${formatDuration(disconnectedMs)}
`);
    },
    setRepoInfo(repo, branchName) {
      repoName = repo;
      branch = branchName;
    },
    setDebugLogPath(path) {
      debugLogPath = path;
    },
    updateIdleStatus() {
      stopConnecting();
      currentState = "idle";
      currentStateText = "Ready";
      lastToolSummary = null;
      lastToolTime = 0;
      activeSessionUrl = null;
      regenerateQr(connectUrl);
      renderStatusLine();
    },
    setAttached(sessionId) {
      stopConnecting();
      currentState = "attached";
      currentStateText = "Connected";
      lastToolSummary = null;
      lastToolTime = 0;
      if (sessionMax <= 1) {
        activeSessionUrl = buildBridgeSessionUrl(sessionId, cachedEnvironmentId, cachedIngressUrl);
        regenerateQr(activeSessionUrl);
      }
      renderStatusLine();
    },
    updateReconnectingStatus(delayStr, elapsedStr) {
      stopConnecting();
      clearStatusLines();
      currentState = "reconnecting";
      if (qrVisible) {
        for (const line of qrLines) {
          writeStatus(`${source_default.dim(line)}
`);
        }
      }
      const frame = BRIDGE_SPINNER_FRAMES[connectingTick % BRIDGE_SPINNER_FRAMES.length];
      connectingTick++;
      writeStatus(`${source_default.yellow(frame)} ${source_default.yellow("Reconnecting")} ${source_default.dim("\xB7")} ${source_default.dim(`retrying in ${delayStr}`)} ${source_default.dim("\xB7")} ${source_default.dim(`disconnected ${elapsedStr}`)}
`);
    },
    updateFailedStatus(error) {
      stopConnecting();
      clearStatusLines();
      currentState = "failed";
      let suffix = "";
      if (repoName) {
        suffix += source_default.dim(" \xB7 ") + source_default.dim(repoName);
      }
      if (branch) {
        suffix += source_default.dim(" \xB7 ") + source_default.dim(branch);
      }
      writeStatus(`${source_default.red(BRIDGE_FAILED_INDICATOR)} ${source_default.red("Remote Control Failed")}${suffix}
`);
      writeStatus(`${source_default.dim(FAILED_FOOTER_TEXT)}
`);
      if (error) {
        writeStatus(`${source_default.red(error)}
`);
      }
    },
    updateSessionStatus(_sessionId, _elapsed, activity, _trail) {
      if (activity.type === "tool_start") {
        lastToolSummary = activity.summary;
        lastToolTime = Date.now();
      }
      renderStatusLine();
    },
    clearStatus() {
      stopConnecting();
      clearStatusLines();
    },
    toggleQr() {
      qrVisible = !qrVisible;
      renderStatusLine();
    },
    updateSessionCount(active, max, mode) {
      if (sessionActive === active && sessionMax === max && spawnMode === mode)
        return;
      sessionActive = active;
      sessionMax = max;
      spawnMode = mode;
    },
    setSpawnModeDisplay(mode) {
      if (spawnModeDisplay === mode)
        return;
      spawnModeDisplay = mode;
      if (mode)
        spawnMode = mode;
    },
    addSession(sessionId, url) {
      sessionDisplayInfo.set(sessionId, { url });
    },
    updateSessionActivity(sessionId, activity) {
      const info = sessionDisplayInfo.get(sessionId);
      if (!info)
        return;
      info.activity = activity;
    },
    setSessionTitle(sessionId, title) {
      const info = sessionDisplayInfo.get(sessionId);
      if (!info)
        return;
      info.title = title;
      if (currentState === "reconnecting" || currentState === "failed")
        return;
      if (sessionMax === 1) {
        currentState = "titled";
        currentStateText = truncateToWidth(title, 40);
      }
      renderStatusLine();
    },
    removeSession(sessionId) {
      sessionDisplayInfo.delete(sessionId);
    },
    refreshDisplay() {
      if (currentState === "reconnecting" || currentState === "failed")
        return;
      renderStatusLine();
    }
  };
}

// src/bridge/bridgeMain.ts
init_debugUtils();
init_sessionIdCompat();

// src/bridge/sessionRunner.ts
init_slowOperations();
init_debugUtils();
import { spawn } from "child_process";
import { createWriteStream } from "fs";
import { tmpdir } from "os";
import { dirname, join } from "path";
import { createInterface } from "readline";
var MAX_ACTIVITIES = 10;
var MAX_STDERR_LINES = 10;
function safeFilenameId(id) {
  return id.replace(/[^a-zA-Z0-9_-]/g, "_");
}
var TOOL_VERBS = {
  Read: "Reading",
  Write: "Writing",
  Edit: "Editing",
  MultiEdit: "Editing",
  Bash: "Running",
  Glob: "Searching",
  Grep: "Searching",
  WebFetch: "Fetching",
  WebSearch: "Searching",
  Task: "Running task",
  FileReadTool: "Reading",
  FileWriteTool: "Writing",
  FileEditTool: "Editing",
  GlobTool: "Searching",
  GrepTool: "Searching",
  BashTool: "Running",
  NotebookEditTool: "Editing notebook",
  LSP: "LSP"
};
function toolSummary(name, input) {
  const verb = TOOL_VERBS[name] ?? name;
  const target = input.file_path ?? input.filePath ?? input.pattern ?? input.command?.slice(0, 60) ?? input.url ?? input.query ?? "";
  if (target) {
    return `${verb} ${target}`;
  }
  return verb;
}
function extractActivities(line, sessionId, onDebug) {
  let parsed;
  try {
    parsed = jsonParse(line);
  } catch {
    return [];
  }
  if (!parsed || typeof parsed !== "object") {
    return [];
  }
  const msg = parsed;
  const activities = [];
  const now = Date.now();
  switch (msg.type) {
    case "assistant": {
      const message = msg.message;
      if (!message)
        break;
      const content = message.content;
      if (!Array.isArray(content))
        break;
      for (const block of content) {
        if (!block || typeof block !== "object")
          continue;
        const b = block;
        if (b.type === "tool_use") {
          const name = b.name ?? "Tool";
          const input = b.input ?? {};
          const summary = toolSummary(name, input);
          activities.push({
            type: "tool_start",
            summary,
            timestamp: now
          });
          onDebug(`[bridge:activity] sessionId=${sessionId} tool_use name=${name} ${inputPreview(input)}`);
        } else if (b.type === "text") {
          const text = b.text ?? "";
          if (text.length > 0) {
            activities.push({
              type: "text",
              summary: text.slice(0, 80),
              timestamp: now
            });
            onDebug(`[bridge:activity] sessionId=${sessionId} text "${text.slice(0, 100)}"`);
          }
        }
      }
      break;
    }
    case "result": {
      const subtype = msg.subtype;
      if (subtype === "success") {
        activities.push({
          type: "result",
          summary: "Session completed",
          timestamp: now
        });
        onDebug(`[bridge:activity] sessionId=${sessionId} result subtype=success`);
      } else if (subtype) {
        const errors = msg.errors;
        const errorSummary = errors?.[0] ?? `Error: ${subtype}`;
        activities.push({
          type: "error",
          summary: errorSummary,
          timestamp: now
        });
        onDebug(`[bridge:activity] sessionId=${sessionId} result subtype=${subtype} error="${errorSummary}"`);
      } else {
        onDebug(`[bridge:activity] sessionId=${sessionId} result subtype=undefined`);
      }
      break;
    }
    default:
      break;
  }
  return activities;
}
function extractUserMessageText(msg) {
  if (msg.parent_tool_use_id != null || msg.isSynthetic || msg.isReplay)
    return;
  const message = msg.message;
  const content = message?.content;
  let text;
  if (typeof content === "string") {
    text = content;
  } else if (Array.isArray(content)) {
    for (const block of content) {
      if (block && typeof block === "object" && block.type === "text") {
        text = block.text;
        break;
      }
    }
  }
  text = text?.trim();
  return text ? text : undefined;
}
function inputPreview(input) {
  const parts = [];
  for (const [key, val] of Object.entries(input)) {
    if (typeof val === "string") {
      parts.push(`${key}="${val.slice(0, 100)}"`);
    }
    if (parts.length >= 3)
      break;
  }
  return parts.join(" ");
}
function createSessionSpawner(deps) {
  return {
    spawn(opts, dir) {
      const safeId = safeFilenameId(opts.sessionId);
      let debugFile;
      if (deps.debugFile) {
        const ext = deps.debugFile.lastIndexOf(".");
        if (ext > 0) {
          debugFile = `${deps.debugFile.slice(0, ext)}-${safeId}${deps.debugFile.slice(ext)}`;
        } else {
          debugFile = `${deps.debugFile}-${safeId}`;
        }
      } else if (deps.verbose || process.env.USER_TYPE === "ant") {
        debugFile = join(tmpdir(), "claude", `bridge-session-${safeId}.log`);
      }
      let transcriptStream = null;
      let transcriptPath;
      if (deps.debugFile) {
        transcriptPath = join(dirname(deps.debugFile), `bridge-transcript-${safeId}.jsonl`);
        transcriptStream = createWriteStream(transcriptPath, { flags: "a" });
        transcriptStream.on("error", (err) => {
          deps.onDebug(`[bridge:session] Transcript write error: ${err.message}`);
          transcriptStream = null;
        });
        deps.onDebug(`[bridge:session] Transcript log: ${transcriptPath}`);
      }
      const args = [
        ...deps.scriptArgs,
        "--print",
        "--sdk-url",
        opts.sdkUrl,
        "--session-id",
        opts.sessionId,
        "--input-format",
        "stream-json",
        "--output-format",
        "stream-json",
        "--replay-user-messages",
        ...deps.verbose ? ["--verbose"] : [],
        ...debugFile ? ["--debug-file", debugFile] : [],
        ...deps.permissionMode ? ["--permission-mode", deps.permissionMode] : []
      ];
      const env = {
        ...deps.env,
        CLAUDE_CODE_OAUTH_TOKEN: undefined,
        CLAUDE_CODE_ENVIRONMENT_KIND: "bridge",
        ...deps.sandbox && { CLAUDE_CODE_FORCE_SANDBOX: "1" },
        CLAUDE_CODE_SESSION_ACCESS_TOKEN: opts.accessToken,
        CLAUDE_CODE_POST_FOR_SESSION_INGRESS_V2: "1",
        ...opts.useCcrV2 && {
          CLAUDE_CODE_USE_CCR_V2: "1",
          CLAUDE_CODE_WORKER_EPOCH: String(opts.workerEpoch)
        }
      };
      deps.onDebug(`[bridge:session] Spawning sessionId=${opts.sessionId} sdkUrl=${opts.sdkUrl} accessToken=${opts.accessToken ? "present" : "MISSING"}`);
      deps.onDebug(`[bridge:session] Child args: ${args.join(" ")}`);
      if (debugFile) {
        deps.onDebug(`[bridge:session] Debug log: ${debugFile}`);
      }
      const child = spawn(deps.execPath, args, {
        cwd: dir,
        stdio: ["pipe", "pipe", "pipe"],
        env,
        windowsHide: true
      });
      deps.onDebug(`[bridge:session] sessionId=${opts.sessionId} pid=${child.pid}`);
      const activities = [];
      let currentActivity = null;
      const lastStderr = [];
      let sigkillSent = false;
      let firstUserMessageSeen = false;
      if (child.stderr) {
        const stderrRl = createInterface({ input: child.stderr });
        stderrRl.on("line", (line) => {
          if (deps.verbose) {
            process.stderr.write(line + `
`);
          }
          if (lastStderr.length >= MAX_STDERR_LINES) {
            lastStderr.shift();
          }
          lastStderr.push(line);
        });
      }
      if (child.stdout) {
        const rl = createInterface({ input: child.stdout });
        rl.on("line", (line) => {
          if (transcriptStream) {
            transcriptStream.write(line + `
`);
          }
          deps.onDebug(`[bridge:ws] sessionId=${opts.sessionId} <<< ${debugTruncate(line)}`);
          if (deps.verbose) {
            process.stderr.write(line + `
`);
          }
          const extracted = extractActivities(line, opts.sessionId, deps.onDebug);
          for (const activity of extracted) {
            if (activities.length >= MAX_ACTIVITIES) {
              activities.shift();
            }
            activities.push(activity);
            currentActivity = activity;
            deps.onActivity?.(opts.sessionId, activity);
          }
          {
            let parsed;
            try {
              parsed = jsonParse(line);
            } catch {}
            if (parsed && typeof parsed === "object") {
              const msg = parsed;
              if (msg.type === "control_request") {
                const request = msg.request;
                if (request?.subtype === "can_use_tool" && deps.onPermissionRequest) {
                  deps.onPermissionRequest(opts.sessionId, parsed, opts.accessToken);
                }
              } else if (msg.type === "user" && !firstUserMessageSeen && opts.onFirstUserMessage) {
                const text = extractUserMessageText(msg);
                if (text) {
                  firstUserMessageSeen = true;
                  opts.onFirstUserMessage(text);
                }
              }
            }
          }
        });
      }
      const done = new Promise((resolve) => {
        child.on("close", (code, signal) => {
          if (transcriptStream) {
            transcriptStream.end();
            transcriptStream = null;
          }
          if (signal === "SIGTERM" || signal === "SIGINT") {
            deps.onDebug(`[bridge:session] sessionId=${opts.sessionId} interrupted signal=${signal} pid=${child.pid}`);
            resolve("interrupted");
          } else if (code === 0) {
            deps.onDebug(`[bridge:session] sessionId=${opts.sessionId} completed exit_code=0 pid=${child.pid}`);
            resolve("completed");
          } else {
            deps.onDebug(`[bridge:session] sessionId=${opts.sessionId} failed exit_code=${code} pid=${child.pid}`);
            resolve("failed");
          }
        });
        child.on("error", (err) => {
          deps.onDebug(`[bridge:session] sessionId=${opts.sessionId} spawn error: ${err.message}`);
          resolve("failed");
        });
      });
      const handle = {
        sessionId: opts.sessionId,
        done,
        activities,
        accessToken: opts.accessToken,
        lastStderr,
        get currentActivity() {
          return currentActivity;
        },
        kill() {
          if (!child.killed) {
            deps.onDebug(`[bridge:session] Sending SIGTERM to sessionId=${opts.sessionId} pid=${child.pid}`);
            if (process.platform === "win32") {
              child.kill();
            } else {
              child.kill("SIGTERM");
            }
          }
        },
        forceKill() {
          if (!sigkillSent && child.pid) {
            sigkillSent = true;
            deps.onDebug(`[bridge:session] Sending SIGKILL to sessionId=${opts.sessionId} pid=${child.pid}`);
            if (process.platform === "win32") {
              child.kill();
            } else {
              child.kill("SIGKILL");
            }
          }
        },
        writeStdin(data) {
          if (child.stdin && !child.stdin.destroyed) {
            deps.onDebug(`[bridge:ws] sessionId=${opts.sessionId} >>> ${debugTruncate(data)}`);
            child.stdin.write(data);
          }
        },
        updateAccessToken(token) {
          handle.accessToken = token;
          handle.writeStdin(jsonStringify({
            type: "update_environment_variables",
            variables: { CLAUDE_CODE_SESSION_ACCESS_TOKEN: token }
          }) + `
`);
          deps.onDebug(`[bridge:session] Sent token refresh via stdin for sessionId=${opts.sessionId}`);
        }
      };
      return handle;
    }
  };
}

// src/bridge/bridgeMain.ts
init_trustedDevice();
init_types();
var DEFAULT_BACKOFF = {
  connInitialMs: 2000,
  connCapMs: 120000,
  connGiveUpMs: 600000,
  generalInitialMs: 500,
  generalCapMs: 30000,
  generalGiveUpMs: 600000
};
var STATUS_UPDATE_INTERVAL_MS = 1000;
var SPAWN_SESSIONS_DEFAULT = 32;
async function isMultiSessionSpawnEnabled() {
  return checkGate_CACHED_OR_BLOCKING("tengu_ccr_bridge_multi_session");
}
function pollSleepDetectionThresholdMs(backoff) {
  return backoff.connCapMs * 2;
}
function spawnScriptArgs() {
  const bootstrap = [...getBootstrapArgs()];
  const script = getScriptPath();
  if (script)
    bootstrap.push(script);
  return bootstrap;
}
function safeSpawn(spawner, opts, dir) {
  try {
    return spawner.spawn(opts, dir);
  } catch (err) {
    const errMsg = errorMessage(err);
    logError(new Error(`Session spawn failed: ${errMsg}`));
    return errMsg;
  }
}
async function runBridgeLoop(config, environmentId, environmentSecret, api, spawner, logger, signal, backoffConfig = DEFAULT_BACKOFF, initialSessionId, getAccessToken) {
  const controller = new AbortController;
  if (signal.aborted) {
    controller.abort();
  } else {
    signal.addEventListener("abort", () => controller.abort(), { once: true });
  }
  const loopSignal = controller.signal;
  const activeSessions = new Map;
  const sessionStartTimes = new Map;
  const sessionWorkIds = new Map;
  const sessionCompatIds = new Map;
  const sessionIngressTokens = new Map;
  const sessionTimers = new Map;
  const completedWorkIds = new Set;
  const sessionWorktrees = new Map;
  const timedOutSessions = new Set;
  const titledSessions = new Set;
  const capacityWake = createCapacityWake(loopSignal);
  async function heartbeatActiveWorkItems() {
    rcLog(`heartbeat: checking ${activeSessions.size} active session(s)`);
    let anySuccess = false;
    let anyFatal = false;
    const authFailedSessions = [];
    for (const [sessionId] of activeSessions) {
      const workId = sessionWorkIds.get(sessionId);
      const ingressToken = sessionIngressTokens.get(sessionId);
      if (!workId || !ingressToken) {
        continue;
      }
      try {
        await api.heartbeatWork(environmentId, workId, ingressToken);
        anySuccess = true;
      } catch (err) {
        logForDebugging(`[bridge:heartbeat] Failed for sessionId=${sessionId} workId=${workId}: ${errorMessage(err)}`);
        if (err instanceof BridgeFatalError) {
          logEvent("tengu_bridge_heartbeat_error", {
            status: err.status,
            error_type: err.status === 401 || err.status === 403 ? "auth_failed" : "fatal"
          });
          if (err.status === 401 || err.status === 403) {
            authFailedSessions.push(sessionId);
          } else {
            anyFatal = true;
          }
        }
      }
    }
    for (const sessionId of authFailedSessions) {
      logger.logVerbose(`Session ${sessionId} token expired \u2014 re-queuing via bridge/reconnect`);
      try {
        await api.reconnectSession(environmentId, sessionId);
        logForDebugging(`[bridge:heartbeat] Re-queued sessionId=${sessionId} via bridge/reconnect`);
      } catch (err) {
        logger.logError(`Failed to refresh session ${sessionId} token: ${errorMessage(err)}`);
        logForDebugging(`[bridge:heartbeat] reconnectSession(${sessionId}) failed: ${errorMessage(err)}`, { level: "error" });
      }
    }
    if (anyFatal) {
      return "fatal";
    }
    if (authFailedSessions.length > 0) {
      return "auth_failed";
    }
    return anySuccess ? "ok" : "failed";
  }
  const v2Sessions = new Set;
  const tokenRefresh = getAccessToken ? createTokenRefreshScheduler({
    getAccessToken,
    onRefresh: (sessionId, oauthToken) => {
      const handle = activeSessions.get(sessionId);
      if (!handle) {
        return;
      }
      if (v2Sessions.has(sessionId)) {
        logger.logVerbose(`Refreshing session ${sessionId} token via bridge/reconnect`);
        api.reconnectSession(environmentId, sessionId).catch((err) => {
          logger.logError(`Failed to refresh session ${sessionId} token: ${errorMessage(err)}`);
          logForDebugging(`[bridge:token] reconnectSession(${sessionId}) failed: ${errorMessage(err)}`, { level: "error" });
        });
      } else {
        handle.updateAccessToken(oauthToken);
      }
    },
    label: "bridge"
  }) : null;
  const loopStartTime = Date.now();
  const pendingCleanups = new Set;
  function trackCleanup(p) {
    pendingCleanups.add(p);
    p.finally(() => pendingCleanups.delete(p));
  }
  let connBackoff = 0;
  let generalBackoff = 0;
  let connErrorStart = null;
  let generalErrorStart = null;
  let lastPollErrorTime = null;
  let statusUpdateTimer = null;
  let fatalExit = false;
  logForDebugging(`[bridge:work] Starting poll loop spawnMode=${config.spawnMode} maxSessions=${config.maxSessions} environmentId=${environmentId}`);
  logForDiagnosticsNoPII("info", "bridge_loop_started", {
    max_sessions: config.maxSessions,
    spawn_mode: config.spawnMode
  });
  if (process.env.USER_TYPE === "ant") {
    let debugGlob;
    if (config.debugFile) {
      const ext = config.debugFile.lastIndexOf(".");
      debugGlob = ext > 0 ? `${config.debugFile.slice(0, ext)}-*${config.debugFile.slice(ext)}` : `${config.debugFile}-*`;
    } else {
      debugGlob = join2(tmpdir2(), "claude", "bridge-session-*.log");
    }
    logger.setDebugLogPath(debugGlob);
  }
  logger.printBanner(config, environmentId);
  logger.updateSessionCount(0, config.maxSessions, config.spawnMode);
  if (initialSessionId) {
    logger.setAttached(initialSessionId);
  }
  function updateStatusDisplay() {
    logger.updateSessionCount(activeSessions.size, config.maxSessions, config.spawnMode);
    for (const [sid, handle2] of activeSessions) {
      const act = handle2.currentActivity;
      if (act) {
        logger.updateSessionActivity(sessionCompatIds.get(sid) ?? sid, act);
      }
    }
    if (activeSessions.size === 0) {
      logger.updateIdleStatus();
      return;
    }
    const [sessionId, handle] = [...activeSessions.entries()].pop();
    const startTime = sessionStartTimes.get(sessionId);
    if (!startTime)
      return;
    const activity = handle.currentActivity;
    if (!activity || activity.type === "result" || activity.type === "error") {
      if (config.maxSessions > 1)
        logger.refreshDisplay();
      return;
    }
    const elapsed = formatDuration(Date.now() - startTime);
    const trail = handle.activities.filter((a) => a.type === "tool_start").slice(-5).map((a) => a.summary);
    logger.updateSessionStatus(sessionId, elapsed, activity, trail);
  }
  function startStatusUpdates() {
    stopStatusUpdates();
    updateStatusDisplay();
    statusUpdateTimer = setInterval(updateStatusDisplay, STATUS_UPDATE_INTERVAL_MS);
  }
  function stopStatusUpdates() {
    if (statusUpdateTimer) {
      clearInterval(statusUpdateTimer);
      statusUpdateTimer = null;
    }
  }
  function onSessionDone(sessionId, startTime, handle) {
    return (rawStatus) => {
      const workId = sessionWorkIds.get(sessionId);
      rcLog(`session done: sessionId=${sessionId} workId=${workId ?? "none"} status=${rawStatus}` + ` wasTimedOut=${timedOutSessions.has(sessionId)} duration=${Math.round((Date.now() - startTime) / 1000)}s` + ` stderr=${handle.lastStderr.length > 0 ? handle.lastStderr.join("\\n").slice(0, 500) : "(none)"}`);
      activeSessions.delete(sessionId);
      sessionStartTimes.delete(sessionId);
      sessionWorkIds.delete(sessionId);
      sessionIngressTokens.delete(sessionId);
      const compatId = sessionCompatIds.get(sessionId) ?? sessionId;
      sessionCompatIds.delete(sessionId);
      logger.removeSession(compatId);
      titledSessions.delete(compatId);
      v2Sessions.delete(sessionId);
      const timer = sessionTimers.get(sessionId);
      if (timer) {
        clearTimeout(timer);
        sessionTimers.delete(sessionId);
      }
      tokenRefresh?.cancel(sessionId);
      capacityWake.wake();
      const wasTimedOut = timedOutSessions.delete(sessionId);
      const status = wasTimedOut && rawStatus === "interrupted" ? "failed" : rawStatus;
      const durationMs = Date.now() - startTime;
      logForDebugging(`[bridge:session] sessionId=${sessionId} workId=${workId ?? "unknown"} exited status=${status} duration=${formatDuration(durationMs)}`);
      logEvent("tengu_bridge_session_done", {
        status,
        duration_ms: durationMs
      });
      logForDiagnosticsNoPII("info", "bridge_session_done", {
        status,
        duration_ms: durationMs
      });
      logger.clearStatus();
      stopStatusUpdates();
      const stderrSummary = handle.lastStderr.length > 0 ? handle.lastStderr.join(`
`) : undefined;
      let failureMessage;
      switch (status) {
        case "completed":
          logger.logSessionComplete(sessionId, durationMs);
          break;
        case "failed":
          if (!wasTimedOut && !loopSignal.aborted) {
            failureMessage = stderrSummary ?? "Process exited with error";
            logger.logSessionFailed(sessionId, failureMessage);
            logError(new Error(`Bridge session failed: ${failureMessage}`));
          }
          break;
        case "interrupted":
          logger.logVerbose(`Session ${sessionId} interrupted`);
          break;
      }
      if (status !== "interrupted" && workId) {
        trackCleanup(stopWorkWithRetry(api, environmentId, workId, logger, backoffConfig.stopWorkBaseDelayMs));
        completedWorkIds.add(workId);
      }
      const wt = sessionWorktrees.get(sessionId);
      if (wt) {
        sessionWorktrees.delete(sessionId);
        trackCleanup(removeAgentWorktree(wt.worktreePath, wt.worktreeBranch, wt.gitRoot, wt.hookBased).catch((err) => logger.logVerbose(`Failed to remove worktree ${wt.worktreePath}: ${errorMessage(err)}`)));
      }
      if (status !== "interrupted" && !loopSignal.aborted) {
        if (config.spawnMode !== "single-session") {
          trackCleanup(api.archiveSession(compatId).catch((err) => logger.logVerbose(`Failed to archive session ${sessionId}: ${errorMessage(err)}`)));
          logForDebugging(`[bridge:session] Session ${status}, returning to idle (multi-session mode)`);
        } else {
          logForDebugging(`[bridge:session] Session ${status}, aborting poll loop to tear down environment`);
          controller.abort();
          return;
        }
      }
      if (!loopSignal.aborted) {
        startStatusUpdates();
      }
    };
  }
  if (!initialSessionId) {
    startStatusUpdates();
  }
  while (!loopSignal.aborted) {
    const pollConfig = getPollIntervalConfig();
    try {
      rcLog(`poll: envId=${environmentId} activeSessions=${activeSessions.size}`);
      const work = await api.pollForWork(environmentId, environmentSecret, loopSignal, pollConfig.reclaim_older_than_ms);
      const wasDisconnected = connErrorStart !== null || generalErrorStart !== null;
      if (wasDisconnected) {
        const disconnectedMs = Date.now() - (connErrorStart ?? generalErrorStart ?? Date.now());
        logger.logReconnected(disconnectedMs);
        logForDebugging(`[bridge:poll] Reconnected after ${formatDuration(disconnectedMs)}`);
        logEvent("tengu_bridge_reconnected", {
          disconnected_ms: disconnectedMs
        });
      }
      connBackoff = 0;
      generalBackoff = 0;
      connErrorStart = null;
      generalErrorStart = null;
      lastPollErrorTime = null;
      if (!work) {
        const atCap = activeSessions.size >= config.maxSessions;
        if (atCap) {
          const atCapMs = pollConfig.multisession_poll_interval_ms_at_capacity;
          if (pollConfig.non_exclusive_heartbeat_interval_ms > 0) {
            logEvent("tengu_bridge_heartbeat_mode_entered", {
              active_sessions: activeSessions.size,
              heartbeat_interval_ms: pollConfig.non_exclusive_heartbeat_interval_ms
            });
            const pollDeadline = atCapMs > 0 ? Date.now() + atCapMs : null;
            let hbResult = "ok";
            let hbCycles = 0;
            while (!loopSignal.aborted && activeSessions.size >= config.maxSessions && (pollDeadline === null || Date.now() < pollDeadline)) {
              const hbConfig = getPollIntervalConfig();
              if (hbConfig.non_exclusive_heartbeat_interval_ms <= 0)
                break;
              const cap = capacityWake.signal();
              hbResult = await heartbeatActiveWorkItems();
              if (hbResult === "auth_failed" || hbResult === "fatal") {
                cap.cleanup();
                break;
              }
              hbCycles++;
              await sleep(hbConfig.non_exclusive_heartbeat_interval_ms, cap.signal);
              cap.cleanup();
            }
            const exitReason = hbResult === "auth_failed" || hbResult === "fatal" ? hbResult : loopSignal.aborted ? "shutdown" : activeSessions.size < config.maxSessions ? "capacity_changed" : pollDeadline !== null && Date.now() >= pollDeadline ? "poll_due" : "config_disabled";
            logEvent("tengu_bridge_heartbeat_mode_exited", {
              reason: exitReason,
              heartbeat_cycles: hbCycles,
              active_sessions: activeSessions.size
            });
            if (exitReason === "poll_due") {
              logForDebugging(`[bridge:poll] Heartbeat poll_due after ${hbCycles} cycles \u2014 falling through to pollForWork`);
            }
            if (hbResult === "auth_failed" || hbResult === "fatal") {
              const cap = capacityWake.signal();
              await sleep(atCapMs > 0 ? atCapMs : pollConfig.non_exclusive_heartbeat_interval_ms, cap.signal);
              cap.cleanup();
            }
          } else if (atCapMs > 0) {
            const cap = capacityWake.signal();
            await sleep(atCapMs, cap.signal);
            cap.cleanup();
          }
        } else {
          const interval = activeSessions.size > 0 ? pollConfig.multisession_poll_interval_ms_partial_capacity : pollConfig.multisession_poll_interval_ms_not_at_capacity;
          await sleep(interval, loopSignal);
        }
        continue;
      }
      const atCapacityBeforeSwitch = activeSessions.size >= config.maxSessions;
      if (completedWorkIds.has(work.id)) {
        logForDebugging(`[bridge:work] Skipping already-completed workId=${work.id}`);
        if (atCapacityBeforeSwitch) {
          const cap = capacityWake.signal();
          if (pollConfig.non_exclusive_heartbeat_interval_ms > 0) {
            await heartbeatActiveWorkItems();
            await sleep(pollConfig.non_exclusive_heartbeat_interval_ms, cap.signal);
          } else if (pollConfig.multisession_poll_interval_ms_at_capacity > 0) {
            await sleep(pollConfig.multisession_poll_interval_ms_at_capacity, cap.signal);
          }
          cap.cleanup();
        } else {
          await sleep(1000, loopSignal);
        }
        continue;
      }
      let secret;
      try {
        secret = decodeWorkSecret(work.secret);
      } catch (err) {
        const errMsg = errorMessage(err);
        logger.logError(`Failed to decode work secret for workId=${work.id}: ${errMsg}`);
        logEvent("tengu_bridge_work_secret_failed", {});
        completedWorkIds.add(work.id);
        trackCleanup(stopWorkWithRetry(api, environmentId, work.id, logger, backoffConfig.stopWorkBaseDelayMs));
        if (atCapacityBeforeSwitch) {
          const cap = capacityWake.signal();
          if (pollConfig.non_exclusive_heartbeat_interval_ms > 0) {
            await heartbeatActiveWorkItems();
            await sleep(pollConfig.non_exclusive_heartbeat_interval_ms, cap.signal);
          } else if (pollConfig.multisession_poll_interval_ms_at_capacity > 0) {
            await sleep(pollConfig.multisession_poll_interval_ms_at_capacity, cap.signal);
          }
          cap.cleanup();
        }
        continue;
      }
      const ackWork = async () => {
        logForDebugging(`[bridge:work] Acknowledging workId=${work.id}`);
        try {
          await api.acknowledgeWork(environmentId, work.id, secret.session_ingress_token);
        } catch (err) {
          logForDebugging(`[bridge:work] Acknowledge failed workId=${work.id}: ${errorMessage(err)}`);
        }
      };
      const workType = work.data.type;
      switch (work.data.type) {
        case "healthcheck":
          await ackWork();
          logForDebugging("[bridge:work] Healthcheck received");
          logger.logVerbose("Healthcheck received");
          break;
        case "session": {
          const sessionId = work.data.id;
          rcLog(`work received: type=session sessionId=${sessionId} workId=${work.id}`);
          try {
            validateBridgeId(sessionId, "session_id");
          } catch {
            await ackWork();
            logger.logError(`Invalid session_id received: ${sessionId}`);
            break;
          }
          const existingHandle = activeSessions.get(sessionId);
          if (existingHandle) {
            existingHandle.updateAccessToken(secret.session_ingress_token);
            sessionIngressTokens.set(sessionId, secret.session_ingress_token);
            sessionWorkIds.set(sessionId, work.id);
            tokenRefresh?.schedule(sessionId, secret.session_ingress_token);
            logForDebugging(`[bridge:work] Updated access token for existing sessionId=${sessionId} workId=${work.id}`);
            await ackWork();
            break;
          }
          if (activeSessions.size >= config.maxSessions) {
            logForDebugging(`[bridge:work] At capacity (${activeSessions.size}/${config.maxSessions}), cannot spawn new session for workId=${work.id}`);
            break;
          }
          await ackWork();
          const spawnStartTime = Date.now();
          let sdkUrl;
          let useCcrV2 = false;
          let workerEpoch;
          if (secret.use_code_sessions === true || isEnvTruthy(process.env.CLAUDE_BRIDGE_USE_CCR_V2)) {
            sdkUrl = buildCCRv2SdkUrl(config.apiBaseUrl, sessionId);
            for (let attempt = 1;attempt <= 2; attempt++) {
              try {
                workerEpoch = await registerWorker(sdkUrl, secret.session_ingress_token);
                useCcrV2 = true;
                logForDebugging(`[bridge:session] CCR v2: registered worker sessionId=${sessionId} epoch=${workerEpoch} attempt=${attempt}`);
                break;
              } catch (err) {
                const errMsg = errorMessage(err);
                if (attempt < 2) {
                  logForDebugging(`[bridge:session] CCR v2: registerWorker attempt ${attempt} failed, retrying: ${errMsg}`);
                  await sleep(2000, loopSignal);
                  if (loopSignal.aborted)
                    break;
                  continue;
                }
                logger.logError(`CCR v2 worker registration failed for session ${sessionId}: ${errMsg}`);
                logError(new Error(`registerWorker failed: ${errMsg}`));
                completedWorkIds.add(work.id);
                trackCleanup(stopWorkWithRetry(api, environmentId, work.id, logger, backoffConfig.stopWorkBaseDelayMs));
              }
            }
            if (!useCcrV2)
              break;
          } else {
            sdkUrl = buildSdkUrl(config.sessionIngressUrl, sessionId);
          }
          const spawnModeAtDecision = config.spawnMode;
          let sessionDir = config.dir;
          let worktreeCreateMs = 0;
          if (spawnModeAtDecision === "worktree" && (initialSessionId === undefined || !sameSessionId(sessionId, initialSessionId))) {
            const wtStart = Date.now();
            try {
              const wt = await createAgentWorktree(`bridge-${safeFilenameId(sessionId)}`);
              worktreeCreateMs = Date.now() - wtStart;
              sessionWorktrees.set(sessionId, {
                worktreePath: wt.worktreePath,
                worktreeBranch: wt.worktreeBranch,
                gitRoot: wt.gitRoot,
                hookBased: wt.hookBased
              });
              sessionDir = wt.worktreePath;
              logForDebugging(`[bridge:session] Created worktree for sessionId=${sessionId} at ${wt.worktreePath}`);
            } catch (err) {
              const errMsg = errorMessage(err);
              logger.logError(`Failed to create worktree for session ${sessionId}: ${errMsg}`);
              logError(new Error(`Worktree creation failed: ${errMsg}`));
              completedWorkIds.add(work.id);
              trackCleanup(stopWorkWithRetry(api, environmentId, work.id, logger, backoffConfig.stopWorkBaseDelayMs));
              break;
            }
          }
          logForDebugging(`[bridge:session] Spawning sessionId=${sessionId} sdkUrl=${sdkUrl}`);
          const compatSessionId = toCompatSessionId(sessionId);
          rcLog(`spawning session: sessionId=${sessionId} sdkUrl=${sdkUrl}` + ` useCcrV2=${useCcrV2} workerEpoch=${workerEpoch}` + ` dir=${sessionDir}` + ` accessToken=${secret.session_ingress_token ? secret.session_ingress_token.slice(0, 8) + "..." : "NONE"}`);
          const spawnResult = safeSpawn(spawner, {
            sessionId,
            sdkUrl,
            accessToken: secret.session_ingress_token,
            useCcrV2,
            workerEpoch,
            onFirstUserMessage: (text) => {
              if (titledSessions.has(compatSessionId))
                return;
              titledSessions.add(compatSessionId);
              const title = deriveSessionTitle(text);
              logger.setSessionTitle(compatSessionId, title);
              logForDebugging(`[bridge:title] derived title for ${compatSessionId}: ${title}`);
              import("./chunk-zanakj02.js").then(({ updateBridgeSessionTitle }) => updateBridgeSessionTitle(compatSessionId, title, {
                baseUrl: config.apiBaseUrl
              })).catch((err) => logForDebugging(`[bridge:title] failed to update title for ${compatSessionId}: ${err}`, { level: "error" }));
            }
          }, sessionDir);
          if (typeof spawnResult === "string") {
            logger.logError(`Failed to spawn session ${sessionId}: ${spawnResult}`);
            const wt = sessionWorktrees.get(sessionId);
            if (wt) {
              sessionWorktrees.delete(sessionId);
              trackCleanup(removeAgentWorktree(wt.worktreePath, wt.worktreeBranch, wt.gitRoot, wt.hookBased).catch((err) => logger.logVerbose(`Failed to remove worktree ${wt.worktreePath}: ${errorMessage(err)}`)));
            }
            completedWorkIds.add(work.id);
            trackCleanup(stopWorkWithRetry(api, environmentId, work.id, logger, backoffConfig.stopWorkBaseDelayMs));
            break;
          }
          const handle = spawnResult;
          const spawnDurationMs = Date.now() - spawnStartTime;
          logEvent("tengu_bridge_session_started", {
            active_sessions: activeSessions.size,
            spawn_mode: spawnModeAtDecision,
            in_worktree: sessionWorktrees.has(sessionId),
            spawn_duration_ms: spawnDurationMs,
            worktree_create_ms: worktreeCreateMs,
            inProtectedNamespace: isInProtectedNamespace()
          });
          logForDiagnosticsNoPII("info", "bridge_session_started", {
            spawn_mode: spawnModeAtDecision,
            in_worktree: sessionWorktrees.has(sessionId),
            spawn_duration_ms: spawnDurationMs,
            worktree_create_ms: worktreeCreateMs
          });
          activeSessions.set(sessionId, handle);
          sessionWorkIds.set(sessionId, work.id);
          sessionIngressTokens.set(sessionId, secret.session_ingress_token);
          sessionCompatIds.set(sessionId, compatSessionId);
          const startTime = Date.now();
          sessionStartTimes.set(sessionId, startTime);
          logger.logSessionStart(sessionId, `Session ${sessionId}`);
          const safeId = safeFilenameId(sessionId);
          let sessionDebugFile;
          if (config.debugFile) {
            const ext = config.debugFile.lastIndexOf(".");
            if (ext > 0) {
              sessionDebugFile = `${config.debugFile.slice(0, ext)}-${safeId}${config.debugFile.slice(ext)}`;
            } else {
              sessionDebugFile = `${config.debugFile}-${safeId}`;
            }
          } else if (config.verbose || process.env.USER_TYPE === "ant") {
            sessionDebugFile = join2(tmpdir2(), "claude", `bridge-session-${safeId}.log`);
          }
          if (sessionDebugFile) {
            logger.logVerbose(`Debug log: ${sessionDebugFile}`);
          }
          logger.addSession(compatSessionId, getRemoteSessionUrl(compatSessionId, config.sessionIngressUrl));
          startStatusUpdates();
          logger.setAttached(compatSessionId);
          fetchSessionTitle(compatSessionId, config.apiBaseUrl).then((title) => {
            if (title && activeSessions.has(sessionId)) {
              titledSessions.add(compatSessionId);
              logger.setSessionTitle(compatSessionId, title);
              logForDebugging(`[bridge:title] server title for ${compatSessionId}: ${title}`);
            }
          }).catch((err) => logForDebugging(`[bridge:title] failed to fetch title for ${compatSessionId}: ${err}`, { level: "error" }));
          const timeoutMs = config.sessionTimeoutMs ?? DEFAULT_SESSION_TIMEOUT_MS;
          if (timeoutMs > 0) {
            const timer = setTimeout(onSessionTimeout, timeoutMs, sessionId, timeoutMs, logger, timedOutSessions, handle);
            sessionTimers.set(sessionId, timer);
          }
          if (useCcrV2) {
            v2Sessions.add(sessionId);
          }
          tokenRefresh?.schedule(sessionId, secret.session_ingress_token);
          handle.done.then(onSessionDone(sessionId, startTime, handle));
          break;
        }
        default:
          await ackWork();
          logForDebugging(`[bridge:work] Unknown work type: ${workType}, skipping`);
          break;
      }
      if (atCapacityBeforeSwitch) {
        const cap = capacityWake.signal();
        if (pollConfig.non_exclusive_heartbeat_interval_ms > 0) {
          await heartbeatActiveWorkItems();
          await sleep(pollConfig.non_exclusive_heartbeat_interval_ms, cap.signal);
        } else if (pollConfig.multisession_poll_interval_ms_at_capacity > 0) {
          await sleep(pollConfig.multisession_poll_interval_ms_at_capacity, cap.signal);
        }
        cap.cleanup();
      }
    } catch (err) {
      if (loopSignal.aborted) {
        break;
      }
      if (err instanceof BridgeFatalError) {
        fatalExit = true;
        if (isExpiredErrorType(err.errorType)) {
          logger.logStatus(err.message);
        } else if (isSuppressible403(err)) {
          logForDebugging(`[bridge:work] Suppressed 403 error: ${err.message}`);
        } else {
          logger.logError(err.message);
          logError(err);
        }
        logEvent("tengu_bridge_fatal_error", {
          status: err.status,
          error_type: err.errorType
        });
        logForDiagnosticsNoPII(isExpiredErrorType(err.errorType) ? "info" : "error", "bridge_fatal_error", { status: err.status, error_type: err.errorType });
        break;
      }
      const errMsg = describeAxiosError(err);
      rcLog(`poll error: ${errMsg}` + ` isConn=${isConnectionError(err)} isServer=${isServerError(err)}` + ` activeSessions=${activeSessions.size}`);
      if (isConnectionError(err) || isServerError(err)) {
        const now = Date.now();
        if (lastPollErrorTime !== null && now - lastPollErrorTime > pollSleepDetectionThresholdMs(backoffConfig)) {
          logForDebugging(`[bridge:work] Detected system sleep (${Math.round((now - lastPollErrorTime) / 1000)}s gap), resetting error budget`);
          logForDiagnosticsNoPII("info", "bridge_poll_sleep_detected", {
            gapMs: now - lastPollErrorTime
          });
          connErrorStart = null;
          connBackoff = 0;
          generalErrorStart = null;
          generalBackoff = 0;
        }
        lastPollErrorTime = now;
        if (!connErrorStart) {
          connErrorStart = now;
        }
        const elapsed = now - connErrorStart;
        if (elapsed >= backoffConfig.connGiveUpMs) {
          logger.logError(`Server unreachable for ${Math.round(elapsed / 60000)} minutes, giving up.`);
          logEvent("tengu_bridge_poll_give_up", {
            error_type: "connection",
            elapsed_ms: elapsed
          });
          logForDiagnosticsNoPII("error", "bridge_poll_give_up", {
            error_type: "connection",
            elapsed_ms: elapsed
          });
          fatalExit = true;
          break;
        }
        generalErrorStart = null;
        generalBackoff = 0;
        connBackoff = connBackoff ? Math.min(connBackoff * 2, backoffConfig.connCapMs) : backoffConfig.connInitialMs;
        const delay = addJitter(connBackoff);
        logger.logVerbose(`Connection error, retrying in ${formatDelay(delay)} (${Math.round(elapsed / 1000)}s elapsed): ${errMsg}`);
        logger.updateReconnectingStatus(formatDelay(delay), formatDuration(elapsed));
        if (getPollIntervalConfig().non_exclusive_heartbeat_interval_ms > 0) {
          await heartbeatActiveWorkItems();
        }
        await sleep(delay, loopSignal);
      } else {
        const now = Date.now();
        if (lastPollErrorTime !== null && now - lastPollErrorTime > pollSleepDetectionThresholdMs(backoffConfig)) {
          logForDebugging(`[bridge:work] Detected system sleep (${Math.round((now - lastPollErrorTime) / 1000)}s gap), resetting error budget`);
          logForDiagnosticsNoPII("info", "bridge_poll_sleep_detected", {
            gapMs: now - lastPollErrorTime
          });
          connErrorStart = null;
          connBackoff = 0;
          generalErrorStart = null;
          generalBackoff = 0;
        }
        lastPollErrorTime = now;
        if (!generalErrorStart) {
          generalErrorStart = now;
        }
        const elapsed = now - generalErrorStart;
        if (elapsed >= backoffConfig.generalGiveUpMs) {
          logger.logError(`Persistent errors for ${Math.round(elapsed / 60000)} minutes, giving up.`);
          logEvent("tengu_bridge_poll_give_up", {
            error_type: "general",
            elapsed_ms: elapsed
          });
          logForDiagnosticsNoPII("error", "bridge_poll_give_up", {
            error_type: "general",
            elapsed_ms: elapsed
          });
          fatalExit = true;
          break;
        }
        connErrorStart = null;
        connBackoff = 0;
        generalBackoff = generalBackoff ? Math.min(generalBackoff * 2, backoffConfig.generalCapMs) : backoffConfig.generalInitialMs;
        const delay = addJitter(generalBackoff);
        logger.logVerbose(`Poll failed, retrying in ${formatDelay(delay)} (${Math.round(elapsed / 1000)}s elapsed): ${errMsg}`);
        logger.updateReconnectingStatus(formatDelay(delay), formatDuration(elapsed));
        if (getPollIntervalConfig().non_exclusive_heartbeat_interval_ms > 0) {
          await heartbeatActiveWorkItems();
        }
        await sleep(delay, loopSignal);
      }
    }
  }
  stopStatusUpdates();
  logger.clearStatus();
  const loopDurationMs = Date.now() - loopStartTime;
  logEvent("tengu_bridge_shutdown", {
    active_sessions: activeSessions.size,
    loop_duration_ms: loopDurationMs
  });
  logForDiagnosticsNoPII("info", "bridge_shutdown", {
    active_sessions: activeSessions.size,
    loop_duration_ms: loopDurationMs
  });
  const sessionsToArchive = new Set(activeSessions.keys());
  if (initialSessionId) {
    sessionsToArchive.add(initialSessionId);
  }
  const compatIdSnapshot = new Map(sessionCompatIds);
  if (activeSessions.size > 0) {
    logForDebugging(`[bridge:shutdown] Shutting down ${activeSessions.size} active session(s)`);
    logger.logStatus(`Shutting down ${activeSessions.size} active session(s)\u2026`);
    const shutdownWorkIds = new Map(sessionWorkIds);
    for (const [sessionId, handle] of activeSessions.entries()) {
      logForDebugging(`[bridge:shutdown] Sending SIGTERM to sessionId=${sessionId}`);
      handle.kill();
    }
    const timeout = new AbortController;
    await Promise.race([
      Promise.allSettled([...activeSessions.values()].map((h) => h.done)),
      sleep(backoffConfig.shutdownGraceMs ?? 30000, timeout.signal)
    ]);
    timeout.abort();
    for (const [sid, handle] of activeSessions.entries()) {
      logForDebugging(`[bridge:shutdown] Force-killing stuck sessionId=${sid}`);
      handle.forceKill();
    }
    for (const timer of sessionTimers.values()) {
      clearTimeout(timer);
    }
    sessionTimers.clear();
    tokenRefresh?.cancelAll();
    if (sessionWorktrees.size > 0) {
      const remainingWorktrees = [...sessionWorktrees.values()];
      sessionWorktrees.clear();
      logForDebugging(`[bridge:shutdown] Cleaning up ${remainingWorktrees.length} worktree(s)`);
      await Promise.allSettled(remainingWorktrees.map((wt) => removeAgentWorktree(wt.worktreePath, wt.worktreeBranch, wt.gitRoot, wt.hookBased)));
    }
    await Promise.allSettled([...shutdownWorkIds.entries()].map(([sessionId, workId]) => {
      return api.stopWork(environmentId, workId, true).catch((err) => logger.logVerbose(`Failed to stop work ${workId} for session ${sessionId}: ${errorMessage(err)}`));
    }));
  }
  if (pendingCleanups.size > 0) {
    await Promise.allSettled([...pendingCleanups]);
  }
  if (config.spawnMode === "single-session" && initialSessionId && !fatalExit) {
    logger.logStatus(`Resume this session by running \`claude remote-control --continue\``);
    logForDebugging(`[bridge:shutdown] Skipping archive+deregister to allow resume of session ${initialSessionId}`);
    return;
  }
  if (sessionsToArchive.size > 0) {
    logForDebugging(`[bridge:shutdown] Archiving ${sessionsToArchive.size} session(s)`);
    await Promise.allSettled([...sessionsToArchive].map((sessionId) => api.archiveSession(compatIdSnapshot.get(sessionId) ?? toCompatSessionId(sessionId)).catch((err) => logger.logVerbose(`Failed to archive session ${sessionId}: ${errorMessage(err)}`))));
  }
  try {
    await api.deregisterEnvironment(environmentId);
    logForDebugging(`[bridge:shutdown] Environment deregistered, bridge offline`);
    logger.logVerbose("Environment deregistered.");
  } catch (err) {
    logger.logVerbose(`Failed to deregister environment: ${errorMessage(err)}`);
  }
  const { clearBridgePointer } = await import("./chunk-6znsxqcy.js");
  await clearBridgePointer(config.dir);
  logger.logVerbose("Environment offline.");
}
var CONNECTION_ERROR_CODES = new Set([
  "ECONNREFUSED",
  "ECONNRESET",
  "ETIMEDOUT",
  "ENETUNREACH",
  "EHOSTUNREACH"
]);
function isConnectionError(err) {
  if (err && typeof err === "object" && "code" in err && typeof err.code === "string" && CONNECTION_ERROR_CODES.has(err.code)) {
    return true;
  }
  return false;
}
function isServerError(err) {
  return !!err && typeof err === "object" && "code" in err && typeof err.code === "string" && err.code === "ERR_BAD_RESPONSE";
}
function addJitter(ms) {
  return Math.max(0, ms + ms * 0.25 * (2 * Math.random() - 1));
}
function formatDelay(ms) {
  return ms >= 1000 ? `${(ms / 1000).toFixed(1)}s` : `${Math.round(ms)}ms`;
}
async function stopWorkWithRetry(api, environmentId, workId, logger, baseDelayMs = 1000) {
  const MAX_ATTEMPTS = 3;
  for (let attempt = 1;attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      await api.stopWork(environmentId, workId, false);
      logForDebugging(`[bridge:work] stopWork succeeded for workId=${workId} on attempt ${attempt}/${MAX_ATTEMPTS}`);
      return;
    } catch (err) {
      if (err instanceof BridgeFatalError) {
        if (isSuppressible403(err)) {
          logForDebugging(`[bridge:work] Suppressed stopWork 403 for ${workId}: ${err.message}`);
        } else {
          logger.logError(`Failed to stop work ${workId}: ${err.message}`);
        }
        logForDiagnosticsNoPII("error", "bridge_stop_work_failed", {
          attempts: attempt,
          fatal: true
        });
        return;
      }
      const errMsg = errorMessage(err);
      if (attempt < MAX_ATTEMPTS) {
        const delay = addJitter(baseDelayMs * 2 ** (attempt - 1));
        logger.logVerbose(`Failed to stop work ${workId} (attempt ${attempt}/${MAX_ATTEMPTS}), retrying in ${formatDelay(delay)}: ${errMsg}`);
        await sleep(delay);
      } else {
        logger.logError(`Failed to stop work ${workId} after ${MAX_ATTEMPTS} attempts: ${errMsg}`);
        logForDiagnosticsNoPII("error", "bridge_stop_work_failed", {
          attempts: MAX_ATTEMPTS
        });
      }
    }
  }
}
function onSessionTimeout(sessionId, timeoutMs, logger, timedOutSessions, handle) {
  logForDebugging(`[bridge:session] sessionId=${sessionId} timed out after ${formatDuration(timeoutMs)}`);
  logEvent("tengu_bridge_session_timeout", {
    timeout_ms: timeoutMs
  });
  logger.logSessionFailed(sessionId, `Session timed out after ${formatDuration(timeoutMs)}`);
  timedOutSessions.add(sessionId);
  handle.kill();
}
var SPAWN_FLAG_VALUES = ["session", "same-dir", "worktree"];
function parseSpawnValue(raw) {
  if (raw === "session")
    return "single-session";
  if (raw === "same-dir")
    return "same-dir";
  if (raw === "worktree")
    return "worktree";
  return `--spawn requires one of: ${SPAWN_FLAG_VALUES.join(", ")} (got: ${raw ?? "<missing>"})`;
}
function parseCapacityValue(raw) {
  const n = raw === undefined ? NaN : parseInt(raw, 10);
  if (isNaN(n) || n < 1) {
    return `--capacity requires a positive integer (got: ${raw ?? "<missing>"})`;
  }
  return n;
}
function parseArgs(args) {
  let verbose = false;
  let sandbox = false;
  let debugFile;
  let sessionTimeoutMs;
  let permissionMode;
  let name;
  let help = false;
  let spawnMode;
  let capacity;
  let createSessionInDir;
  let sessionId;
  let continueSession = false;
  for (let i = 0;i < args.length; i++) {
    const arg = args[i];
    if (arg === "--help" || arg === "-h") {
      help = true;
    } else if (arg === "--verbose" || arg === "-v") {
      verbose = true;
    } else if (arg === "--sandbox") {
      sandbox = true;
    } else if (arg === "--no-sandbox") {
      sandbox = false;
    } else if (arg === "--debug-file" && i + 1 < args.length) {
      debugFile = resolve(args[++i]);
    } else if (arg.startsWith("--debug-file=")) {
      debugFile = resolve(arg.slice("--debug-file=".length));
    } else if (arg === "--session-timeout" && i + 1 < args.length) {
      sessionTimeoutMs = parseInt(args[++i], 10) * 1000;
    } else if (arg.startsWith("--session-timeout=")) {
      sessionTimeoutMs = parseInt(arg.slice("--session-timeout=".length), 10) * 1000;
    } else if (arg === "--permission-mode" && i + 1 < args.length) {
      permissionMode = args[++i];
    } else if (arg.startsWith("--permission-mode=")) {
      permissionMode = arg.slice("--permission-mode=".length);
    } else if (arg === "--name" && i + 1 < args.length) {
      name = args[++i];
    } else if (arg.startsWith("--name=")) {
      name = arg.slice("--name=".length);
    } else if (arg === "--session-id" && i + 1 < args.length) {
      sessionId = args[++i];
      if (!sessionId) {
        return makeError("--session-id requires a value");
      }
    } else if (arg.startsWith("--session-id=")) {
      sessionId = arg.slice("--session-id=".length);
      if (!sessionId) {
        return makeError("--session-id requires a value");
      }
    } else if (arg === "--continue" || arg === "-c") {
      continueSession = true;
    } else if (arg === "--spawn" || arg.startsWith("--spawn=")) {
      if (spawnMode !== undefined) {
        return makeError("--spawn may only be specified once");
      }
      const raw = arg.startsWith("--spawn=") ? arg.slice("--spawn=".length) : args[++i];
      const v = parseSpawnValue(raw);
      if (v === "single-session" || v === "same-dir" || v === "worktree") {
        spawnMode = v;
      } else {
        return makeError(v);
      }
    } else if (arg === "--capacity" || arg.startsWith("--capacity=")) {
      if (capacity !== undefined) {
        return makeError("--capacity may only be specified once");
      }
      const raw = arg.startsWith("--capacity=") ? arg.slice("--capacity=".length) : args[++i];
      const v = parseCapacityValue(raw);
      if (typeof v === "number")
        capacity = v;
      else
        return makeError(v);
    } else if (arg === "--create-session-in-dir") {
      createSessionInDir = true;
    } else if (arg === "--no-create-session-in-dir") {
      createSessionInDir = false;
    } else {
      return makeError(`Unknown argument: ${arg}
Run 'claude remote-control --help' for usage.`);
    }
  }
  if (spawnMode === "single-session" && capacity !== undefined) {
    return makeError(`--capacity cannot be used with --spawn=session (single-session mode has fixed capacity 1).`);
  }
  if ((sessionId || continueSession) && (spawnMode !== undefined || capacity !== undefined || createSessionInDir !== undefined)) {
    return makeError(`--session-id and --continue cannot be used with --spawn, --capacity, or --create-session-in-dir.`);
  }
  if (sessionId && continueSession) {
    return makeError(`--session-id and --continue cannot be used together.`);
  }
  return {
    verbose,
    sandbox,
    debugFile,
    sessionTimeoutMs,
    permissionMode,
    name,
    spawnMode,
    capacity,
    createSessionInDir,
    sessionId,
    continueSession,
    help
  };
  function makeError(error) {
    return {
      verbose,
      sandbox,
      debugFile,
      sessionTimeoutMs,
      permissionMode,
      name,
      spawnMode,
      capacity,
      createSessionInDir,
      sessionId,
      continueSession,
      help,
      error
    };
  }
}
async function printHelp() {
  const { EXTERNAL_PERMISSION_MODES } = await import("./chunk-k2nysd2c.js");
  const modes = EXTERNAL_PERMISSION_MODES.join(", ");
  const showServer = await isMultiSessionSpawnEnabled();
  const serverOptions = showServer ? `  --spawn <mode>                   Spawn mode: same-dir, worktree, session
                                   (default: same-dir)
  --capacity <N>                   Max concurrent sessions in worktree or
                                   same-dir mode (default: ${SPAWN_SESSIONS_DEFAULT})
  --[no-]create-session-in-dir     Pre-create a session in the current
                                   directory; in worktree mode this session
                                   stays in cwd while on-demand sessions get
                                   isolated worktrees (default: on)
` : "";
  const serverDescription = showServer ? `
  Remote Control runs as a persistent server that accepts multiple concurrent
  sessions in the current directory. One session is pre-created on start so
  you have somewhere to type immediately. Use --spawn=worktree to isolate
  each on-demand session in its own git worktree, or --spawn=session for
  the classic single-session mode (exits when that session ends). Press 'w'
  during runtime to toggle between same-dir and worktree.
` : "";
  const serverNote = showServer ? `  - Worktree mode requires a git repository or WorktreeCreate/WorktreeRemove hooks
` : "";
  const help = `
Remote Control - Connect your local environment to claude.ai/code

USAGE
  claude remote-control [options]
OPTIONS
  --name <name>                    Name for the session (shown in claude.ai/code)
  -c, --continue                   Resume the last session in this directory
  --session-id <id>                Resume a specific session by ID (cannot be
                                   used with spawn flags or --continue)
  --permission-mode <mode>         Permission mode for spawned sessions
                                   (${modes})
  --debug-file <path>              Write debug logs to file
  -v, --verbose                    Enable verbose output
  -h, --help                       Show this help
${serverOptions}
DESCRIPTION
  Remote Control allows you to control sessions on your local device from
  claude.ai/code (https://claude.ai/code). Run this command in the
  directory you want to work in, then connect from the MiMo app or web.
${serverDescription}
NOTES
  - You must be logged in with a MiMo account that has a subscription
  - Run \`claude\` first in the directory to accept the workspace trust dialog
${serverNote}`;
  console.log(help);
}
var TITLE_MAX_LEN = 80;
function deriveSessionTitle(text) {
  const flat = text.replace(/\s+/g, " ").trim();
  return truncateToWidth(flat, TITLE_MAX_LEN);
}
async function fetchSessionTitle(compatSessionId, baseUrl) {
  const { getBridgeSession } = await import("./chunk-zanakj02.js");
  const session = await getBridgeSession(compatSessionId, { baseUrl });
  return session?.title || undefined;
}
async function bridgeMain(args) {
  const parsed = parseArgs(args);
  if (parsed.help) {
    await printHelp();
    return;
  }
  if (parsed.error) {
    console.error(`Error: ${parsed.error}`);
    process.exit(1);
  }
  const {
    verbose,
    sandbox,
    debugFile,
    sessionTimeoutMs,
    permissionMode,
    name,
    spawnMode: parsedSpawnMode,
    capacity: parsedCapacity,
    createSessionInDir: parsedCreateSessionInDir,
    sessionId: parsedSessionId,
    continueSession
  } = parsed;
  let resumeSessionId = parsedSessionId;
  let resumePointerDir;
  const usedMultiSessionFeature = parsedSpawnMode !== undefined || parsedCapacity !== undefined || parsedCreateSessionInDir !== undefined;
  if (permissionMode !== undefined) {
    const { PERMISSION_MODES } = await import("./chunk-k2nysd2c.js");
    const valid = PERMISSION_MODES;
    if (!valid.includes(permissionMode)) {
      console.error(`Error: Invalid permission mode '${permissionMode}'. Valid modes: ${valid.join(", ")}`);
      process.exit(1);
    }
  }
  const dir = resolve(".");
  const { enableConfigs, checkHasTrustDialogAccepted } = await import("./chunk-yqj68t0s.js");
  enableConfigs();
  const { initSinks } = await import("./chunk-5fz99tby.js");
  initSinks();
  const multiSessionEnabled = await isMultiSessionSpawnEnabled();
  if (usedMultiSessionFeature && !multiSessionEnabled) {
    await logEventAsync("tengu_bridge_multi_session_denied", {
      used_spawn: parsedSpawnMode !== undefined,
      used_capacity: parsedCapacity !== undefined,
      used_create_session_in_dir: parsedCreateSessionInDir !== undefined
    });
    await Promise.race([
      Promise.all([shutdown1PEventLogging(), shutdownDatadog()]),
      sleep(500, undefined, { unref: true })
    ]).catch(() => {});
    console.error("Error: Multi-session Remote Control is not enabled for your account yet.");
    process.exit(1);
  }
  const { setOriginalCwd, setCwdState } = await import("./chunk-4qsgafch.js");
  setOriginalCwd(dir);
  setCwdState(dir);
  if (!checkHasTrustDialogAccepted()) {
    console.error(`Error: Workspace not trusted. Please run \`claude\` in ${dir} first to review and accept the workspace trust dialog.`);
    process.exit(1);
  }
  const { clearOAuthTokenCache, checkAndRefreshOAuthTokenIfNeeded } = await import("./chunk-j0v9g0w9.js");
  const { getBridgeAccessToken, getBridgeBaseUrl } = await import("./chunk-hg57bsp3.js");
  const bridgeToken = getBridgeAccessToken();
  if (!bridgeToken) {
    console.error(BRIDGE_LOGIN_ERROR);
    process.exit(1);
  }
  const {
    getGlobalConfig,
    saveGlobalConfig,
    getCurrentProjectConfig,
    saveCurrentProjectConfig
  } = await import("./chunk-yqj68t0s.js");
  if (!getGlobalConfig().remoteDialogSeen) {
    const readline = await import("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    console.log(`
Remote Control lets you access this CLI session from the web (claude.ai/code)
or the MiMo app, so you can pick up where you left off on any device.

You can disconnect remote access anytime by running /remote-control again.
`);
    const answer = await new Promise((resolve2) => {
      rl.question("Enable Remote Control? (y/n) ", resolve2);
    });
    rl.close();
    saveGlobalConfig((current) => {
      if (current.remoteDialogSeen)
        return current;
      return { ...current, remoteDialogSeen: true };
    });
    if (answer.toLowerCase() !== "y" && answer.toLowerCase() !== "yes") {
      process.exit(0);
    }
  }
  if (continueSession) {
    const { readBridgePointerAcrossWorktrees } = await import("./chunk-6znsxqcy.js");
    const found = await readBridgePointerAcrossWorktrees(dir);
    if (!found) {
      console.error(`Error: No recent session found in this directory or its worktrees. Run \`claude remote-control\` to start a new one.`);
      process.exit(1);
    }
    const { pointer, dir: pointerDir } = found;
    const ageMin = Math.round(pointer.ageMs / 60000);
    const ageStr = ageMin < 60 ? `${ageMin}m` : `${Math.round(ageMin / 60)}h`;
    const fromWt = pointerDir !== dir ? ` from worktree ${pointerDir}` : "";
    console.error(`Resuming session ${pointer.sessionId} (${ageStr} ago)${fromWt}\u2026`);
    resumeSessionId = pointer.sessionId;
    resumePointerDir = pointerDir;
  }
  const baseUrl = getBridgeBaseUrl();
  if (baseUrl.startsWith("http://") && !baseUrl.includes("localhost") && !baseUrl.includes("127.0.0.1")) {
    console.error("Error: Remote Control base URL uses HTTP. Only HTTPS or localhost HTTP is allowed.");
    process.exit(1);
  }
  const sessionIngressUrl = process.env.CLAUDE_BRIDGE_SESSION_INGRESS_URL || baseUrl;
  const { getBranch, getRemoteUrl, findGitRoot } = await import("./chunk-bm3m173h.js");
  const { hasWorktreeCreateHook } = await import("./chunk-ysj46cyk.js");
  const worktreeAvailable = hasWorktreeCreateHook() || findGitRoot(dir) !== null;
  let savedSpawnMode = multiSessionEnabled ? getCurrentProjectConfig().remoteControlSpawnMode : undefined;
  if (savedSpawnMode === "worktree" && !worktreeAvailable) {
    console.error("Warning: Saved spawn mode is worktree but this directory is not a git repository. Falling back to same-dir.");
    savedSpawnMode = undefined;
    saveCurrentProjectConfig((current) => {
      if (current.remoteControlSpawnMode === undefined)
        return current;
      return { ...current, remoteControlSpawnMode: undefined };
    });
  }
  if (multiSessionEnabled && !savedSpawnMode && worktreeAvailable && parsedSpawnMode === undefined && !resumeSessionId && process.stdin.isTTY) {
    const readline = await import("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    console.log(`
Claude Remote Control is launching in spawn mode which lets you create new sessions in this project from MiMo Code on Web or your Mobile app. Learn more here: https://code.claude.com/docs/en/remote-control

Spawn mode for this project:
` + `  [1] same-dir \u2014 sessions share the current directory (default)
` + `  [2] worktree \u2014 each session gets an isolated git worktree

` + `This can be changed later or explicitly set with --spawn=same-dir or --spawn=worktree.
`);
    const answer = await new Promise((resolve2) => {
      rl.question("Choose [1/2] (default: 1): ", resolve2);
    });
    rl.close();
    const chosen = answer.trim() === "2" ? "worktree" : "same-dir";
    savedSpawnMode = chosen;
    logEvent("tengu_bridge_spawn_mode_chosen", {
      spawn_mode: chosen
    });
    saveCurrentProjectConfig((current) => {
      if (current.remoteControlSpawnMode === chosen)
        return current;
      return { ...current, remoteControlSpawnMode: chosen };
    });
  }
  let spawnModeSource;
  let spawnMode;
  if (resumeSessionId) {
    spawnMode = "single-session";
    spawnModeSource = "resume";
  } else if (parsedSpawnMode !== undefined) {
    spawnMode = parsedSpawnMode;
    spawnModeSource = "flag";
  } else if (savedSpawnMode !== undefined) {
    spawnMode = savedSpawnMode;
    spawnModeSource = "saved";
  } else {
    spawnMode = multiSessionEnabled ? "same-dir" : "single-session";
    spawnModeSource = "gate_default";
  }
  const maxSessions = spawnMode === "single-session" ? 1 : parsedCapacity ?? SPAWN_SESSIONS_DEFAULT;
  const preCreateSession = parsedCreateSessionInDir ?? true;
  if (!resumeSessionId) {
    const { clearBridgePointer } = await import("./chunk-6znsxqcy.js");
    await clearBridgePointer(dir);
  }
  if (spawnMode === "worktree" && !worktreeAvailable) {
    console.error(`Error: Worktree mode requires a git repository or WorktreeCreate hooks configured. Use --spawn=session for single-session mode.`);
    process.exit(1);
  }
  const branch = await getBranch();
  const gitRepoUrl = await getRemoteUrl();
  const machineName = hostname();
  const bridgeId = randomUUID();
  const { handleOAuth401Error } = await import("./chunk-j0v9g0w9.js");
  const api = createBridgeApiClient({
    baseUrl,
    getAccessToken: getBridgeAccessToken,
    runnerVersion: "1.0.0",
    onDebug: logForDebugging,
    onAuth401: handleOAuth401Error,
    getTrustedDeviceToken
  });
  let reuseEnvironmentId;
  if (resumeSessionId) {
    try {
      validateBridgeId(resumeSessionId, "sessionId");
    } catch {
      console.error(`Error: Invalid session ID "${resumeSessionId}". Session IDs must not contain unsafe characters.`);
      process.exit(1);
    }
    await checkAndRefreshOAuthTokenIfNeeded();
    clearOAuthTokenCache();
    const { getBridgeSession } = await import("./chunk-zanakj02.js");
    const session = await getBridgeSession(resumeSessionId, {
      baseUrl,
      getAccessToken: getBridgeAccessToken
    });
    if (!session) {
      if (resumePointerDir) {
        const { clearBridgePointer } = await import("./chunk-6znsxqcy.js");
        await clearBridgePointer(resumePointerDir);
      }
      console.error(`Error: Session ${resumeSessionId} not found. It may have been archived or expired, or your login may have lapsed (run \`claude /login\`).`);
      process.exit(1);
    }
    if (!session.environment_id) {
      if (resumePointerDir) {
        const { clearBridgePointer } = await import("./chunk-6znsxqcy.js");
        await clearBridgePointer(resumePointerDir);
      }
      console.error(`Error: Session ${resumeSessionId} has no environment_id. It may never have been attached to a bridge.`);
      process.exit(1);
    }
    reuseEnvironmentId = session.environment_id;
    logForDebugging(`[bridge:init] Resuming session ${resumeSessionId} on environment ${reuseEnvironmentId}`);
  }
  const config = {
    dir,
    machineName,
    branch,
    gitRepoUrl,
    maxSessions,
    spawnMode,
    verbose,
    sandbox,
    bridgeId,
    workerType: "claude_code",
    environmentId: randomUUID(),
    reuseEnvironmentId,
    apiBaseUrl: baseUrl,
    sessionIngressUrl,
    debugFile,
    sessionTimeoutMs
  };
  logForDebugging(`[bridge:init] bridgeId=${bridgeId}${reuseEnvironmentId ? ` reuseEnvironmentId=${reuseEnvironmentId}` : ""} dir=${dir} branch=${branch} gitRepoUrl=${gitRepoUrl} machine=${machineName}`);
  logForDebugging(`[bridge:init] apiBaseUrl=${baseUrl} sessionIngressUrl=${sessionIngressUrl}`);
  logForDebugging(`[bridge:init] sandbox=${sandbox}${debugFile ? ` debugFile=${debugFile}` : ""}`);
  let environmentId;
  let environmentSecret;
  try {
    const reg = await api.registerBridgeEnvironment(config);
    environmentId = reg.environment_id;
    environmentSecret = reg.environment_secret;
  } catch (err) {
    logEvent("tengu_bridge_registration_failed", {
      status: err instanceof BridgeFatalError ? err.status : undefined
    });
    console.error(err instanceof BridgeFatalError && err.status === 404 ? "Remote Control environments are not available for your account." : `Error: ${errorMessage(err)}`);
    process.exit(1);
  }
  let effectiveResumeSessionId;
  if (resumeSessionId) {
    if (reuseEnvironmentId && environmentId !== reuseEnvironmentId) {
      logError(new Error(`Bridge resume env mismatch: requested ${reuseEnvironmentId}, backend returned ${environmentId}. Falling back to fresh session.`));
      console.warn(`Warning: Could not resume session ${resumeSessionId} \u2014 its environment has expired. Creating a fresh session instead.`);
    } else {
      const infraResumeId = toInfraSessionId(resumeSessionId);
      const reconnectCandidates = infraResumeId === resumeSessionId ? [resumeSessionId] : [resumeSessionId, infraResumeId];
      let reconnected = false;
      let lastReconnectErr;
      for (const candidateId of reconnectCandidates) {
        try {
          await api.reconnectSession(environmentId, candidateId);
          logForDebugging(`[bridge:init] Session ${candidateId} re-queued via bridge/reconnect`);
          effectiveResumeSessionId = resumeSessionId;
          reconnected = true;
          break;
        } catch (err) {
          lastReconnectErr = err;
          logForDebugging(`[bridge:init] reconnectSession(${candidateId}) failed: ${errorMessage(err)}`);
        }
      }
      if (!reconnected) {
        const err = lastReconnectErr;
        const isFatal = err instanceof BridgeFatalError;
        if (resumePointerDir && isFatal) {
          const { clearBridgePointer } = await import("./chunk-6znsxqcy.js");
          await clearBridgePointer(resumePointerDir);
        }
        console.error(isFatal ? `Error: ${errorMessage(err)}` : `Error: Failed to reconnect session ${resumeSessionId}: ${errorMessage(err)}
The session may still be resumable \u2014 try running the same command again.`);
        process.exit(1);
      }
    }
  }
  logForDebugging(`[bridge:init] Registered, server environmentId=${environmentId}`);
  const startupPollConfig = getPollIntervalConfig();
  logEvent("tengu_bridge_started", {
    max_sessions: config.maxSessions,
    has_debug_file: !!config.debugFile,
    sandbox: config.sandbox,
    verbose: config.verbose,
    heartbeat_interval_ms: startupPollConfig.non_exclusive_heartbeat_interval_ms,
    spawn_mode: config.spawnMode,
    spawn_mode_source: spawnModeSource,
    multi_session_gate: multiSessionEnabled,
    pre_create_session: preCreateSession,
    worktree_available: worktreeAvailable
  });
  logForDiagnosticsNoPII("info", "bridge_started", {
    max_sessions: config.maxSessions,
    sandbox: config.sandbox,
    spawn_mode: config.spawnMode
  });
  const spawner = createSessionSpawner({
    execPath: process.execPath,
    scriptArgs: spawnScriptArgs(),
    env: process.env,
    verbose,
    sandbox,
    debugFile,
    permissionMode,
    onDebug: logForDebugging,
    onActivity: (sessionId, activity) => {
      logForDebugging(`[bridge:activity] sessionId=${sessionId} ${activity.type} ${activity.summary}`);
    },
    onPermissionRequest: (sessionId, request, _accessToken) => {
      logForDebugging(`[bridge:perm] sessionId=${sessionId} tool=${request.request.tool_name} request_id=${request.request_id} (not auto-approving)`);
    }
  });
  const logger = createBridgeLogger({ verbose });
  const { parseGitHubRepository } = await import("./chunk-dax19ade.js");
  const ownerRepo = gitRepoUrl ? parseGitHubRepository(gitRepoUrl) : null;
  const repoName = ownerRepo ? ownerRepo.split("/").pop() : basename(dir);
  logger.setRepoInfo(repoName, branch);
  const toggleAvailable = spawnMode !== "single-session" && worktreeAvailable;
  if (toggleAvailable) {
    logger.setSpawnModeDisplay(spawnMode);
  }
  const onStdinData = (data) => {
    if (data[0] === 3 || data[0] === 4) {
      process.emit("SIGINT");
      return;
    }
    if (data[0] === 32) {
      logger.toggleQr();
      return;
    }
    if (data[0] === 119) {
      if (!toggleAvailable)
        return;
      const newMode = config.spawnMode === "same-dir" ? "worktree" : "same-dir";
      config.spawnMode = newMode;
      logEvent("tengu_bridge_spawn_mode_toggled", {
        spawn_mode: newMode
      });
      logger.logStatus(newMode === "worktree" ? "Spawn mode: worktree (new sessions get isolated git worktrees)" : "Spawn mode: same-dir (new sessions share the current directory)");
      logger.setSpawnModeDisplay(newMode);
      logger.refreshDisplay();
      saveCurrentProjectConfig((current) => {
        if (current.remoteControlSpawnMode === newMode)
          return current;
        return { ...current, remoteControlSpawnMode: newMode };
      });
      return;
    }
  };
  if (process.stdin.isTTY) {
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.on("data", onStdinData);
  }
  const controller = new AbortController;
  const onSigint = () => {
    logForDebugging("[bridge:shutdown] SIGINT received, shutting down");
    controller.abort();
  };
  const onSigterm = () => {
    logForDebugging("[bridge:shutdown] SIGTERM received, shutting down");
    controller.abort();
  };
  process.on("SIGINT", onSigint);
  process.on("SIGTERM", onSigterm);
  let initialSessionId = effectiveResumeSessionId ? effectiveResumeSessionId : null;
  if (preCreateSession && !effectiveResumeSessionId) {
    const { createBridgeSession } = await import("./chunk-zanakj02.js");
    try {
      initialSessionId = await createBridgeSession({
        environmentId,
        title: name,
        events: [],
        gitRepoUrl,
        branch,
        signal: controller.signal,
        baseUrl,
        getAccessToken: getBridgeAccessToken,
        permissionMode
      });
      if (initialSessionId) {
        logForDebugging(`[bridge:init] Created initial session ${initialSessionId}`);
      }
    } catch (err) {
      logForDebugging(`[bridge:init] Session creation failed (non-fatal): ${errorMessage(err)}`);
    }
  }
  let pointerRefreshTimer = null;
  if (initialSessionId && spawnMode === "single-session") {
    const { writeBridgePointer } = await import("./chunk-6znsxqcy.js");
    const pointerPayload = {
      sessionId: initialSessionId,
      environmentId,
      source: "standalone"
    };
    await writeBridgePointer(config.dir, pointerPayload);
    pointerRefreshTimer = setInterval(writeBridgePointer, 3600000, config.dir, pointerPayload);
    pointerRefreshTimer.unref?.();
  }
  try {
    await runBridgeLoop(config, environmentId, environmentSecret, api, spawner, logger, controller.signal, undefined, initialSessionId ?? undefined, async () => {
      clearOAuthTokenCache();
      await checkAndRefreshOAuthTokenIfNeeded();
      return getBridgeAccessToken();
    });
  } finally {
    if (pointerRefreshTimer !== null) {
      clearInterval(pointerRefreshTimer);
    }
    process.off("SIGINT", onSigint);
    process.off("SIGTERM", onSigterm);
    process.stdin.off("data", onStdinData);
    if (process.stdin.isTTY) {
      process.stdin.setRawMode(false);
    }
    process.stdin.pause();
  }
  process.exit(0);
}

class BridgeHeadlessPermanentError extends Error {
  constructor(message) {
    super(message);
    this.name = "BridgeHeadlessPermanentError";
  }
}
async function runBridgeHeadless(opts, signal) {
  const { dir, log } = opts;
  process.chdir(dir);
  const { setOriginalCwd, setCwdState } = await import("./chunk-4qsgafch.js");
  setOriginalCwd(dir);
  setCwdState(dir);
  const { enableConfigs, checkHasTrustDialogAccepted } = await import("./chunk-yqj68t0s.js");
  enableConfigs();
  const { initSinks } = await import("./chunk-5fz99tby.js");
  initSinks();
  if (!checkHasTrustDialogAccepted()) {
    throw new BridgeHeadlessPermanentError(`Workspace not trusted: ${dir}. Run \`claude\` in that directory first to accept the trust dialog.`);
  }
  if (!opts.getAccessToken()) {
    throw new Error(BRIDGE_LOGIN_ERROR);
  }
  const { getBridgeBaseUrl } = await import("./chunk-hg57bsp3.js");
  const baseUrl = getBridgeBaseUrl();
  if (baseUrl.startsWith("http://") && !baseUrl.includes("localhost") && !baseUrl.includes("127.0.0.1")) {
    throw new BridgeHeadlessPermanentError("Remote Control base URL uses HTTP. Only HTTPS or localhost HTTP is allowed.");
  }
  const sessionIngressUrl = process.env.CLAUDE_BRIDGE_SESSION_INGRESS_URL || baseUrl;
  const { getBranch, getRemoteUrl, findGitRoot } = await import("./chunk-bm3m173h.js");
  const { hasWorktreeCreateHook } = await import("./chunk-ysj46cyk.js");
  if (opts.spawnMode === "worktree") {
    const worktreeAvailable = hasWorktreeCreateHook() || findGitRoot(dir) !== null;
    if (!worktreeAvailable) {
      throw new BridgeHeadlessPermanentError(`Worktree mode requires a git repository or WorktreeCreate hooks. Directory ${dir} has neither.`);
    }
  }
  const branch = await getBranch();
  const gitRepoUrl = await getRemoteUrl();
  const machineName = hostname();
  const bridgeId = randomUUID();
  const config = {
    dir,
    machineName,
    branch,
    gitRepoUrl,
    maxSessions: opts.capacity,
    spawnMode: opts.spawnMode,
    verbose: false,
    sandbox: opts.sandbox,
    bridgeId,
    workerType: "claude_code",
    environmentId: randomUUID(),
    apiBaseUrl: baseUrl,
    sessionIngressUrl,
    sessionTimeoutMs: opts.sessionTimeoutMs
  };
  const api = createBridgeApiClient({
    baseUrl,
    getAccessToken: opts.getAccessToken,
    runnerVersion: "1.0.0",
    onDebug: log,
    onAuth401: opts.onAuth401,
    getTrustedDeviceToken
  });
  let environmentId;
  let environmentSecret;
  try {
    const reg = await api.registerBridgeEnvironment(config);
    environmentId = reg.environment_id;
    environmentSecret = reg.environment_secret;
  } catch (err) {
    throw new Error(`Bridge registration failed: ${errorMessage(err)}`);
  }
  const spawner = createSessionSpawner({
    execPath: process.execPath,
    scriptArgs: spawnScriptArgs(),
    env: process.env,
    verbose: false,
    sandbox: opts.sandbox,
    permissionMode: opts.permissionMode,
    onDebug: log
  });
  const logger = createHeadlessBridgeLogger(log);
  logger.printBanner(config, environmentId);
  let initialSessionId;
  if (opts.createSessionOnStart) {
    const { createBridgeSession } = await import("./chunk-zanakj02.js");
    try {
      const sid = await createBridgeSession({
        environmentId,
        title: opts.name,
        events: [],
        gitRepoUrl,
        branch,
        signal,
        baseUrl,
        getAccessToken: opts.getAccessToken,
        permissionMode: opts.permissionMode
      });
      if (sid) {
        initialSessionId = sid;
        log(`created initial session ${sid}`);
      }
    } catch (err) {
      log(`session pre-creation failed (non-fatal): ${errorMessage(err)}`);
    }
  }
  await runBridgeLoop(config, environmentId, environmentSecret, api, spawner, logger, signal, undefined, initialSessionId, async () => opts.getAccessToken());
}
function createHeadlessBridgeLogger(log) {
  const noop = () => {};
  return {
    printBanner: (cfg, envId) => log(`registered environmentId=${envId} dir=${cfg.dir} spawnMode=${cfg.spawnMode} capacity=${cfg.maxSessions}`),
    logSessionStart: (id, _prompt) => log(`session start ${id}`),
    logSessionComplete: (id, ms) => log(`session complete ${id} (${ms}ms)`),
    logSessionFailed: (id, err) => log(`session failed ${id}: ${err}`),
    logStatus: log,
    logVerbose: log,
    logError: (s) => log(`error: ${s}`),
    logReconnected: (ms) => log(`reconnected after ${ms}ms`),
    addSession: (id, _url) => log(`session attached ${id}`),
    removeSession: (id) => log(`session detached ${id}`),
    updateIdleStatus: noop,
    updateReconnectingStatus: noop,
    updateSessionStatus: noop,
    updateSessionActivity: noop,
    updateSessionCount: noop,
    updateFailedStatus: noop,
    setSpawnModeDisplay: noop,
    setRepoInfo: noop,
    setDebugLogPath: noop,
    setAttached: noop,
    setSessionTitle: noop,
    clearStatus: noop,
    toggleQr: noop,
    refreshDisplay: noop
  };
}

export { runBridgeLoop, isConnectionError, isServerError, parseArgs, bridgeMain, BridgeHeadlessPermanentError, runBridgeHeadless };
