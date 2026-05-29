// @bun
import {
  normalizeControlMessageKeys
} from "./chunk-nt837qt9.js";
import {
  AccountInfoSchema,
  AgentDefinitionSchema,
  AgentInfoSchema,
  DEFAULT_CRON_JITTER_CONFIG,
  FastModeStateSchema,
  HookEventSchema,
  HookInputSchema,
  McpServerConfigForProcessTransportSchema,
  McpServerStatusSchema,
  ModelInfoSchema,
  PermissionModeSchema,
  PermissionUpdateSchema,
  SDKMessageSchema,
  SDKPostTurnSummaryMessageSchema,
  SDKStreamlinedTextMessageSchema,
  SDKStreamlinedToolUseSummaryMessageSchema,
  SDKUserMessageSchema,
  SlashCommandSchema,
  Stream,
  addMarketplaceSource,
  applyPermissionUpdates,
  cronToHuman,
  detectImageFormatFromBase64,
  executePermissionRequestHooks,
  findMissedTasks,
  getCronFilePath,
  getDeclaredMarketplaces,
  hasCronTasksSync,
  hasPermissionsToUseTool,
  hookJSONOutputSchema,
  init_PermissionUpdate,
  init_PermissionUpdateSchema,
  init_commandLifecycle,
  init_coreSchemas,
  init_cron,
  init_cronTasks,
  init_hooks,
  init_hooks1 as init_hooks2,
  init_imageResizer,
  init_marketplaceManager,
  init_permissions,
  init_stream,
  jitteredNextCronRunMs,
  loadKnownMarketplacesConfig,
  markCronTasksFired,
  notifyCommandLifecycle,
  oneShotJitteredNextCronRunMs,
  permissionUpdateSchema,
  persistPermissionUpdates,
  readCronTasks,
  removeCronTasks
} from "./chunk-ktw919wt.js";
import {
  init_sessionState,
  notifySessionStateChanged
} from "./chunk-chmfqs2y.js";
import {
  getFeatureValue_CACHED_WITH_REFRESH,
  init_file,
  init_growthbook,
  init_isEqual,
  init_schemas,
  isEqual_default,
  isLocalMarketplaceSource,
  pathExists
} from "./chunk-1ghcng4e.js";
import {
  init_json,
  safeParseJSON
} from "./chunk-pz9t24tq.js";
import {
  init_lazySchema,
  lazySchema
} from "./chunk-64c1avct.js";
import {
  init_genericProcessUtils,
  isProcessRunning
} from "./chunk-gnw2dwca.js";
import {
  init_v4,
  v4_default
} from "./chunk-8g747a8x.js";
import {
  exports_external
} from "./chunk-d7886r6a.js";
import {
  init_analytics,
  logEvent
} from "./chunk-f2mhrmww.js";
import {
  findCanonicalGitRoot,
  init_diagLogs,
  init_git,
  logForDiagnosticsNoPII
} from "./chunk-t6jhrn34.js";
import {
  init_log,
  logError
} from "./chunk-w5ahy59y.js";
import {
  AbortError,
  errorMessage,
  getErrnoCode,
  init_cleanupRegistry,
  init_debug,
  init_errors,
  init_slowOperations,
  jsonParse,
  jsonStringify,
  logForDebugging,
  registerCleanup
} from "./chunk-rpbc3b7k.js";
import {
  init_process,
  writeToStdout
} from "./chunk-fbv4apne.js";
import {
  getOriginalCwd,
  getProjectRoot,
  getScheduledTasksEnabled,
  getSessionCronTasks,
  getSessionId,
  init_state,
  removeSessionCronTasks,
  setScheduledTasksEnabled
} from "./chunk-j5xzpm59.js";
import {
  __esm,
  __export,
  __require
} from "./chunk-qp2qdcda.js";

// src/utils/cronJitterConfig.ts
var exports_cronJitterConfig = {};
__export(exports_cronJitterConfig, {
  getCronJitterConfig: () => getCronJitterConfig
});
function getCronJitterConfig() {
  const raw = getFeatureValue_CACHED_WITH_REFRESH("tengu_kairos_cron_config", DEFAULT_CRON_JITTER_CONFIG, JITTER_CONFIG_REFRESH_MS);
  const parsed = cronJitterConfigSchema().safeParse(raw);
  return parsed.success ? parsed.data : DEFAULT_CRON_JITTER_CONFIG;
}
var JITTER_CONFIG_REFRESH_MS, HALF_HOUR_MS, THIRTY_DAYS_MS, cronJitterConfigSchema;
var init_cronJitterConfig = __esm(() => {
  init_v4();
  init_growthbook();
  init_cronTasks();
  init_lazySchema();
  JITTER_CONFIG_REFRESH_MS = 60 * 1000;
  HALF_HOUR_MS = 30 * 60 * 1000;
  THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;
  cronJitterConfigSchema = lazySchema(() => exports_external.object({
    recurringFrac: exports_external.number().min(0).max(1),
    recurringCapMs: exports_external.number().int().min(0).max(HALF_HOUR_MS),
    oneShotMaxMs: exports_external.number().int().min(0).max(HALF_HOUR_MS),
    oneShotFloorMs: exports_external.number().int().min(0).max(HALF_HOUR_MS),
    oneShotMinuteMod: exports_external.number().int().min(1).max(60),
    recurringMaxAgeMs: exports_external.number().int().min(0).max(THIRTY_DAYS_MS).default(DEFAULT_CRON_JITTER_CONFIG.recurringMaxAgeMs)
  }).refine((c) => c.oneShotFloorMs <= c.oneShotMaxMs));
});

// src/utils/cronTasksLock.ts
import { mkdir, readFile, unlink, writeFile } from "fs/promises";
import { dirname, join } from "path";
function getLockPath(dir) {
  return join(dir ?? getProjectRoot(), LOCK_FILE_REL);
}
async function readLock(dir) {
  let raw;
  try {
    raw = await readFile(getLockPath(dir), "utf8");
  } catch {
    return;
  }
  const result = schedulerLockSchema().safeParse(safeParseJSON(raw, false));
  return result.success ? result.data : undefined;
}
async function tryCreateExclusive(lock, dir) {
  const path = getLockPath(dir);
  const body = jsonStringify(lock);
  try {
    await writeFile(path, body, { flag: "wx" });
    return true;
  } catch (e) {
    const code = getErrnoCode(e);
    if (code === "EEXIST")
      return false;
    if (code === "ENOENT") {
      await mkdir(dirname(path), { recursive: true });
      try {
        await writeFile(path, body, { flag: "wx" });
        return true;
      } catch (retryErr) {
        if (getErrnoCode(retryErr) === "EEXIST")
          return false;
        throw retryErr;
      }
    }
    throw e;
  }
}
function registerLockCleanup(opts) {
  unregisterCleanup?.();
  unregisterCleanup = registerCleanup(async () => {
    await releaseSchedulerLock(opts);
  });
}
async function tryAcquireSchedulerLock(opts) {
  const dir = opts?.dir;
  const sessionId = opts?.lockIdentity ?? getSessionId();
  const lock = {
    sessionId,
    pid: process.pid,
    acquiredAt: Date.now()
  };
  if (await tryCreateExclusive(lock, dir)) {
    lastBlockedBy = undefined;
    registerLockCleanup(opts);
    logForDebugging(`[ScheduledTasks] acquired scheduler lock (PID ${process.pid})`);
    return true;
  }
  const existing = await readLock(dir);
  if (existing?.sessionId === sessionId) {
    if (existing.pid !== process.pid) {
      await writeFile(getLockPath(dir), jsonStringify(lock));
      registerLockCleanup(opts);
    }
    return true;
  }
  if (existing && isProcessRunning(existing.pid)) {
    if (lastBlockedBy !== existing.sessionId) {
      lastBlockedBy = existing.sessionId;
      logForDebugging(`[ScheduledTasks] scheduler lock held by session ${existing.sessionId} (PID ${existing.pid})`);
    }
    return false;
  }
  if (existing) {
    logForDebugging(`[ScheduledTasks] recovering stale scheduler lock from PID ${existing.pid}`);
  }
  await unlink(getLockPath(dir)).catch(() => {});
  if (await tryCreateExclusive(lock, dir)) {
    lastBlockedBy = undefined;
    registerLockCleanup(opts);
    return true;
  }
  return false;
}
async function releaseSchedulerLock(opts) {
  unregisterCleanup?.();
  unregisterCleanup = undefined;
  lastBlockedBy = undefined;
  const dir = opts?.dir;
  const sessionId = opts?.lockIdentity ?? getSessionId();
  const existing = await readLock(dir);
  if (!existing || existing.sessionId !== sessionId)
    return;
  try {
    await unlink(getLockPath(dir));
    logForDebugging("[ScheduledTasks] released scheduler lock");
  } catch {}
}
var LOCK_FILE_REL, schedulerLockSchema, unregisterCleanup, lastBlockedBy;
var init_cronTasksLock = __esm(() => {
  init_v4();
  init_state();
  init_cleanupRegistry();
  init_debug();
  init_errors();
  init_genericProcessUtils();
  init_json();
  init_lazySchema();
  init_slowOperations();
  LOCK_FILE_REL = join(".claude", "scheduled_tasks.lock");
  schedulerLockSchema = lazySchema(() => exports_external.object({
    sessionId: exports_external.string(),
    pid: exports_external.number(),
    acquiredAt: exports_external.number()
  }));
});

// src/utils/cronScheduler.ts
var exports_cronScheduler = {};
__export(exports_cronScheduler, {
  isRecurringTaskAged: () => isRecurringTaskAged,
  createCronScheduler: () => createCronScheduler,
  buildMissedTaskNotification: () => buildMissedTaskNotification
});
function isRecurringTaskAged(t, nowMs, maxAgeMs) {
  if (maxAgeMs === 0)
    return false;
  return Boolean(t.recurring && !t.permanent && nowMs - t.createdAt >= maxAgeMs);
}
function createCronScheduler(options) {
  const {
    onFire,
    isLoading,
    assistantMode = false,
    onFireTask,
    onMissed,
    dir,
    lockIdentity,
    getJitterConfig,
    isKilled,
    filter
  } = options;
  const lockOpts = dir || lockIdentity ? { dir, lockIdentity } : undefined;
  let tasks = [];
  const nextFireAt = new Map;
  const missedAsked = new Set;
  const inFlight = new Set;
  let enablePoll = null;
  let checkTimer = null;
  let lockProbeTimer = null;
  let watcher = null;
  let stopped = false;
  let isOwner = false;
  async function load(initial) {
    const next = await readCronTasks(dir);
    if (stopped)
      return;
    tasks = next;
    if (!initial)
      return;
    const now = Date.now();
    const missed = findMissedTasks(next, now).filter((t) => !t.recurring && !missedAsked.has(t.id) && (!filter || filter(t)));
    if (missed.length > 0) {
      for (const t of missed) {
        missedAsked.add(t.id);
        nextFireAt.set(t.id, Infinity);
      }
      logEvent("tengu_scheduled_task_missed", {
        count: missed.length,
        taskIds: missed.map((t) => t.id).join(",")
      });
      if (onMissed) {
        onMissed(missed);
      } else {
        onFire(buildMissedTaskNotification(missed));
      }
      removeCronTasks(missed.map((t) => t.id), dir).catch((e) => logForDebugging(`[ScheduledTasks] failed to remove missed tasks: ${e}`));
      logForDebugging(`[ScheduledTasks] surfaced ${missed.length} missed one-shot task(s)`);
    }
  }
  function check() {
    if (isKilled?.())
      return;
    if (isLoading() && !assistantMode)
      return;
    const now = Date.now();
    const seen = new Set;
    const firedFileRecurring = [];
    const jitterCfg = getJitterConfig?.() ?? DEFAULT_CRON_JITTER_CONFIG;
    function process2(t, isSession) {
      if (filter && !filter(t))
        return;
      seen.add(t.id);
      if (inFlight.has(t.id))
        return;
      let next = nextFireAt.get(t.id);
      if (next === undefined) {
        next = t.recurring ? jitteredNextCronRunMs(t.cron, t.lastFiredAt ?? t.createdAt, t.id, jitterCfg) ?? Infinity : oneShotJitteredNextCronRunMs(t.cron, t.createdAt, t.id, jitterCfg) ?? Infinity;
        nextFireAt.set(t.id, next);
        logForDebugging(`[ScheduledTasks] scheduled ${t.id} for ${next === Infinity ? "never" : new Date(next).toISOString()}`);
      }
      if (now < next)
        return;
      logForDebugging(`[ScheduledTasks] firing ${t.id}${t.recurring ? " (recurring)" : ""}`);
      logEvent("tengu_scheduled_task_fire", {
        recurring: t.recurring ?? false,
        taskId: t.id
      });
      if (onFireTask) {
        onFireTask(t);
      } else {
        onFire(t.prompt);
      }
      const aged = isRecurringTaskAged(t, now, jitterCfg.recurringMaxAgeMs);
      if (aged) {
        const ageHours = Math.floor((now - t.createdAt) / 1000 / 60 / 60);
        logForDebugging(`[ScheduledTasks] recurring task ${t.id} aged out (${ageHours}h since creation), deleting after final fire`);
        logEvent("tengu_scheduled_task_expired", {
          taskId: t.id,
          ageHours
        });
      }
      if (t.recurring && !aged) {
        const newNext = jitteredNextCronRunMs(t.cron, now, t.id, jitterCfg) ?? Infinity;
        nextFireAt.set(t.id, newNext);
        if (!isSession)
          firedFileRecurring.push(t.id);
      } else if (isSession) {
        removeSessionCronTasks([t.id]);
        nextFireAt.delete(t.id);
      } else {
        inFlight.add(t.id);
        removeCronTasks([t.id], dir).catch((e) => logForDebugging(`[ScheduledTasks] failed to remove task ${t.id}: ${e}`)).finally(() => inFlight.delete(t.id));
        nextFireAt.delete(t.id);
      }
    }
    if (isOwner) {
      for (const t of tasks)
        process2(t, false);
      if (firedFileRecurring.length > 0) {
        for (const id of firedFileRecurring)
          inFlight.add(id);
        markCronTasksFired(firedFileRecurring, now, dir).catch((e) => logForDebugging(`[ScheduledTasks] failed to persist lastFiredAt: ${e}`)).finally(() => {
          for (const id of firedFileRecurring)
            inFlight.delete(id);
        });
      }
    }
    if (dir === undefined) {
      for (const t of getSessionCronTasks())
        process2(t, true);
    }
    if (seen.size === 0) {
      nextFireAt.clear();
      return;
    }
    for (const id of nextFireAt.keys()) {
      if (!seen.has(id))
        nextFireAt.delete(id);
    }
  }
  async function enable() {
    if (stopped)
      return;
    if (enablePoll) {
      clearInterval(enablePoll);
      enablePoll = null;
    }
    const { default: chokidar } = await import("./chunk-eqp1rfft.js");
    if (stopped)
      return;
    isOwner = await tryAcquireSchedulerLock(lockOpts).catch(() => false);
    if (stopped) {
      if (isOwner) {
        isOwner = false;
        releaseSchedulerLock(lockOpts);
      }
      return;
    }
    if (!isOwner) {
      lockProbeTimer = setInterval(() => {
        tryAcquireSchedulerLock(lockOpts).then((owned) => {
          if (stopped) {
            if (owned)
              releaseSchedulerLock(lockOpts);
            return;
          }
          if (owned) {
            isOwner = true;
            if (lockProbeTimer) {
              clearInterval(lockProbeTimer);
              lockProbeTimer = null;
            }
          }
        }).catch((e) => logForDebugging(String(e), { level: "error" }));
      }, LOCK_PROBE_INTERVAL_MS);
      lockProbeTimer.unref?.();
    }
    load(true);
    const path = getCronFilePath(dir);
    watcher = chokidar.watch(path, {
      persistent: false,
      ignoreInitial: true,
      awaitWriteFinish: { stabilityThreshold: FILE_STABILITY_MS },
      ignorePermissionErrors: true
    });
    watcher.on("add", () => void load(false));
    watcher.on("change", () => void load(false));
    watcher.on("unlink", () => {
      if (!stopped) {
        tasks = [];
        nextFireAt.clear();
      }
    });
    checkTimer = setInterval(check, CHECK_INTERVAL_MS);
    checkTimer.unref?.();
  }
  return {
    start() {
      stopped = false;
      if (dir !== undefined) {
        logForDebugging(`[ScheduledTasks] scheduler start() \u2014 dir=${dir}, hasTasks=${hasCronTasksSync(dir)}`);
        enable();
        return;
      }
      logForDebugging(`[ScheduledTasks] scheduler start() \u2014 enabled=${getScheduledTasksEnabled()}, hasTasks=${hasCronTasksSync()}`);
      if (!getScheduledTasksEnabled() && (assistantMode || hasCronTasksSync())) {
        setScheduledTasksEnabled(true);
      }
      if (getScheduledTasksEnabled()) {
        enable();
        return;
      }
      enablePoll = setInterval((en) => {
        if (getScheduledTasksEnabled())
          en();
      }, CHECK_INTERVAL_MS, enable);
      enablePoll.unref?.();
    },
    stop() {
      stopped = true;
      if (enablePoll) {
        clearInterval(enablePoll);
        enablePoll = null;
      }
      if (checkTimer) {
        clearInterval(checkTimer);
        checkTimer = null;
      }
      if (lockProbeTimer) {
        clearInterval(lockProbeTimer);
        lockProbeTimer = null;
      }
      watcher?.close();
      watcher = null;
      if (isOwner) {
        isOwner = false;
        releaseSchedulerLock(lockOpts);
      }
    },
    getNextFireTime() {
      let min = Infinity;
      for (const t of nextFireAt.values()) {
        if (t < min)
          min = t;
      }
      return min === Infinity ? null : min;
    }
  };
}
function buildMissedTaskNotification(missed) {
  const plural = missed.length > 1;
  const header = `The following one-shot scheduled task${plural ? "s were" : " was"} missed while MiMo was not running. ${plural ? "They have" : "It has"} already been removed from .claude/scheduled_tasks.json.

Do NOT execute ${plural ? "these prompts" : "this prompt"} yet. First use the AskUserQuestion tool to ask whether to run ${plural ? "each one" : "it"} now. Only execute if the user confirms.`;
  const blocks = missed.map((t) => {
    const meta = `[${cronToHuman(t.cron)}, created ${new Date(t.createdAt).toLocaleString()}]`;
    const longestRun = (t.prompt.match(/`+/g) ?? []).reduce((max, run) => Math.max(max, run.length), 0);
    const fence = "`".repeat(Math.max(3, longestRun + 1));
    return `${meta}
${fence}
${t.prompt}
${fence}`;
  });
  return `${header}

${blocks.join(`

`)}`;
}
var CHECK_INTERVAL_MS = 1000, FILE_STABILITY_MS = 300, LOCK_PROBE_INTERVAL_MS = 5000;
var init_cronScheduler = __esm(() => {
  init_state();
  init_analytics();
  init_cron();
  init_cronTasks();
  init_cronTasksLock();
  init_debug();
});

// src/bridge/inboundMessages.ts
init_imageResizer();
function extractInboundMessageFields(msg) {
  if (msg.type !== "user")
    return;
  const content = msg.message?.content;
  if (!content)
    return;
  if (Array.isArray(content) && content.length === 0)
    return;
  const uuid = "uuid" in msg && typeof msg.uuid === "string" ? msg.uuid : undefined;
  return {
    content: Array.isArray(content) ? normalizeImageBlocks(content) : content,
    uuid
  };
}
function normalizeImageBlocks(blocks) {
  if (!blocks.some(isMalformedBase64Image))
    return blocks;
  return blocks.map((block) => {
    if (!isMalformedBase64Image(block))
      return block;
    const src = block.source;
    const mediaType = typeof src.mediaType === "string" && src.mediaType ? src.mediaType : detectImageFormatFromBase64(block.source.data);
    return {
      ...block,
      source: {
        type: "base64",
        media_type: mediaType,
        data: block.source.data
      }
    };
  });
}
function isMalformedBase64Image(block) {
  if (block.type !== "image" || block.source?.type !== "base64")
    return false;
  return !block.source.media_type;
}

// src/utils/permissions/PermissionPromptToolResultSchema.ts
init_v4();
init_debug();
init_lazySchema();
init_PermissionUpdate();
init_PermissionUpdateSchema();
var inputSchema = lazySchema(() => v4_default.object({
  tool_name: v4_default.string().describe("The name of the tool requesting permission"),
  input: v4_default.record(v4_default.string(), v4_default.unknown()).describe("The input for the tool"),
  tool_use_id: v4_default.string().optional().describe("The unique tool use request ID")
}));
var decisionClassificationField = lazySchema(() => v4_default.enum(["user_temporary", "user_permanent", "user_reject"]).optional().catch(undefined));
var PermissionAllowResultSchema = lazySchema(() => v4_default.object({
  behavior: v4_default.literal("allow"),
  updatedInput: v4_default.record(v4_default.string(), v4_default.unknown()),
  updatedPermissions: v4_default.array(permissionUpdateSchema()).optional().catch((ctx) => {
    logForDebugging(`Malformed updatedPermissions from SDK host ignored: ${ctx.error.issues[0]?.message ?? "unknown"}`, { level: "warn" });
    return;
  }),
  toolUseID: v4_default.string().optional(),
  decisionClassification: decisionClassificationField()
}));
var PermissionDenyResultSchema = lazySchema(() => v4_default.object({
  behavior: v4_default.literal("deny"),
  message: v4_default.string(),
  interrupt: v4_default.boolean().optional(),
  toolUseID: v4_default.string().optional(),
  decisionClassification: decisionClassificationField()
}));
var outputSchema = lazySchema(() => v4_default.union([PermissionAllowResultSchema(), PermissionDenyResultSchema()]));
function permissionPromptToolResultToPermissionDecision(result, tool, input, toolUseContext) {
  const decisionReason = {
    type: "permissionPromptTool",
    permissionPromptToolName: tool.name,
    toolResult: result
  };
  if (result.behavior === "allow") {
    const updatedPermissions = result.updatedPermissions;
    if (updatedPermissions) {
      toolUseContext.setAppState((prev) => ({
        ...prev,
        toolPermissionContext: applyPermissionUpdates(prev.toolPermissionContext, updatedPermissions)
      }));
      persistPermissionUpdates(updatedPermissions);
    }
    const updatedInput = Object.keys(result.updatedInput).length > 0 ? result.updatedInput : input;
    return {
      ...result,
      updatedInput,
      decisionReason
    };
  } else if (result.behavior === "deny" && result.interrupt) {
    logForDebugging(`SDK permission prompt deny+interrupt: tool=${tool.name} message=${result.message}`);
    toolUseContext.abortController.abort();
  }
  return {
    ...result,
    decisionReason
  };
}

// src/cli/structuredIO.ts
import { randomUUID } from "crypto";

// src/entrypoints/sdk/controlSchemas.ts
init_v4();
init_lazySchema();
init_coreSchemas();
var JSONRPCMessagePlaceholder = lazySchema(() => exports_external.unknown());
var SDKHookCallbackMatcherSchema = lazySchema(() => exports_external.object({
  matcher: exports_external.string().optional(),
  hookCallbackIds: exports_external.array(exports_external.string()),
  timeout: exports_external.number().optional()
}).describe("Configuration for matching and routing hook callbacks."));
var SDKControlInitializeRequestSchema = lazySchema(() => exports_external.object({
  subtype: exports_external.literal("initialize"),
  hooks: exports_external.record(HookEventSchema(), exports_external.array(SDKHookCallbackMatcherSchema())).optional(),
  sdkMcpServers: exports_external.array(exports_external.string()).optional(),
  jsonSchema: exports_external.record(exports_external.string(), exports_external.unknown()).optional(),
  systemPrompt: exports_external.string().optional(),
  appendSystemPrompt: exports_external.string().optional(),
  agents: exports_external.record(exports_external.string(), AgentDefinitionSchema()).optional(),
  promptSuggestions: exports_external.boolean().optional(),
  agentProgressSummaries: exports_external.boolean().optional()
}).describe("Initializes the SDK session with hooks, MCP servers, and agent configuration."));
var SDKControlInitializeResponseSchema = lazySchema(() => exports_external.object({
  commands: exports_external.array(SlashCommandSchema()),
  agents: exports_external.array(AgentInfoSchema()),
  output_style: exports_external.string(),
  available_output_styles: exports_external.array(exports_external.string()),
  models: exports_external.array(ModelInfoSchema()),
  account: AccountInfoSchema(),
  pid: exports_external.number().optional().describe("@internal CLI process PID for tmux socket isolation"),
  fast_mode_state: FastModeStateSchema().optional()
}).describe("Response from session initialization with available commands, models, and account info."));
var SDKControlInterruptRequestSchema = lazySchema(() => exports_external.object({
  subtype: exports_external.literal("interrupt")
}).describe("Interrupts the currently running conversation turn."));
var SDKControlPermissionRequestSchema = lazySchema(() => exports_external.object({
  subtype: exports_external.literal("can_use_tool"),
  tool_name: exports_external.string(),
  input: exports_external.record(exports_external.string(), exports_external.unknown()),
  permission_suggestions: exports_external.array(PermissionUpdateSchema()).optional(),
  blocked_path: exports_external.string().optional(),
  decision_reason: exports_external.string().optional(),
  title: exports_external.string().optional(),
  display_name: exports_external.string().optional(),
  tool_use_id: exports_external.string(),
  agent_id: exports_external.string().optional(),
  description: exports_external.string().optional()
}).describe("Requests permission to use a tool with the given input."));
var SDKControlSetPermissionModeRequestSchema = lazySchema(() => exports_external.object({
  subtype: exports_external.literal("set_permission_mode"),
  mode: PermissionModeSchema(),
  ultraplan: exports_external.boolean().optional().describe("@internal CCR ultraplan session marker.")
}).describe("Sets the permission mode for tool execution handling."));
var SDKControlSetModelRequestSchema = lazySchema(() => exports_external.object({
  subtype: exports_external.literal("set_model"),
  model: exports_external.string().optional()
}).describe("Sets the model to use for subsequent conversation turns."));
var SDKControlSetMaxThinkingTokensRequestSchema = lazySchema(() => exports_external.object({
  subtype: exports_external.literal("set_max_thinking_tokens"),
  max_thinking_tokens: exports_external.number().nullable()
}).describe("Sets the maximum number of thinking tokens for extended thinking."));
var SDKControlMcpStatusRequestSchema = lazySchema(() => exports_external.object({
  subtype: exports_external.literal("mcp_status")
}).describe("Requests the current status of all MCP server connections."));
var SDKControlMcpStatusResponseSchema = lazySchema(() => exports_external.object({
  mcpServers: exports_external.array(McpServerStatusSchema())
}).describe("Response containing the current status of all MCP server connections."));
var SDKControlGetContextUsageRequestSchema = lazySchema(() => exports_external.object({
  subtype: exports_external.literal("get_context_usage")
}).describe("Requests a breakdown of current context window usage by category."));
var ContextCategorySchema = lazySchema(() => exports_external.object({
  name: exports_external.string(),
  tokens: exports_external.number(),
  color: exports_external.string(),
  isDeferred: exports_external.boolean().optional()
}));
var ContextGridSquareSchema = lazySchema(() => exports_external.object({
  color: exports_external.string(),
  isFilled: exports_external.boolean(),
  categoryName: exports_external.string(),
  tokens: exports_external.number(),
  percentage: exports_external.number(),
  squareFullness: exports_external.number()
}));
var SDKControlGetContextUsageResponseSchema = lazySchema(() => exports_external.object({
  categories: exports_external.array(ContextCategorySchema()),
  totalTokens: exports_external.number(),
  maxTokens: exports_external.number(),
  rawMaxTokens: exports_external.number(),
  percentage: exports_external.number(),
  gridRows: exports_external.array(exports_external.array(ContextGridSquareSchema())),
  model: exports_external.string(),
  memoryFiles: exports_external.array(exports_external.object({
    path: exports_external.string(),
    type: exports_external.string(),
    tokens: exports_external.number()
  })),
  mcpTools: exports_external.array(exports_external.object({
    name: exports_external.string(),
    serverName: exports_external.string(),
    tokens: exports_external.number(),
    isLoaded: exports_external.boolean().optional()
  })),
  deferredBuiltinTools: exports_external.array(exports_external.object({
    name: exports_external.string(),
    tokens: exports_external.number(),
    isLoaded: exports_external.boolean()
  })).optional(),
  systemTools: exports_external.array(exports_external.object({ name: exports_external.string(), tokens: exports_external.number() })).optional(),
  systemPromptSections: exports_external.array(exports_external.object({ name: exports_external.string(), tokens: exports_external.number() })).optional(),
  agents: exports_external.array(exports_external.object({
    agentType: exports_external.string(),
    source: exports_external.string(),
    tokens: exports_external.number()
  })),
  slashCommands: exports_external.object({
    totalCommands: exports_external.number(),
    includedCommands: exports_external.number(),
    tokens: exports_external.number()
  }).optional(),
  skills: exports_external.object({
    totalSkills: exports_external.number(),
    includedSkills: exports_external.number(),
    tokens: exports_external.number(),
    skillFrontmatter: exports_external.array(exports_external.object({
      name: exports_external.string(),
      source: exports_external.string(),
      tokens: exports_external.number()
    }))
  }).optional(),
  autoCompactThreshold: exports_external.number().optional(),
  isAutoCompactEnabled: exports_external.boolean(),
  messageBreakdown: exports_external.object({
    toolCallTokens: exports_external.number(),
    toolResultTokens: exports_external.number(),
    attachmentTokens: exports_external.number(),
    assistantMessageTokens: exports_external.number(),
    userMessageTokens: exports_external.number(),
    toolCallsByType: exports_external.array(exports_external.object({
      name: exports_external.string(),
      callTokens: exports_external.number(),
      resultTokens: exports_external.number()
    })),
    attachmentsByType: exports_external.array(exports_external.object({ name: exports_external.string(), tokens: exports_external.number() }))
  }).optional(),
  apiUsage: exports_external.object({
    input_tokens: exports_external.number(),
    output_tokens: exports_external.number(),
    cache_creation_input_tokens: exports_external.number(),
    cache_read_input_tokens: exports_external.number()
  }).nullable()
}).describe("Breakdown of current context window usage by category (system prompt, tools, messages, etc.)."));
var SDKControlRewindFilesRequestSchema = lazySchema(() => exports_external.object({
  subtype: exports_external.literal("rewind_files"),
  user_message_id: exports_external.string(),
  dry_run: exports_external.boolean().optional()
}).describe("Rewinds file changes made since a specific user message."));
var SDKControlRewindFilesResponseSchema = lazySchema(() => exports_external.object({
  canRewind: exports_external.boolean(),
  error: exports_external.string().optional(),
  filesChanged: exports_external.array(exports_external.string()).optional(),
  insertions: exports_external.number().optional(),
  deletions: exports_external.number().optional()
}).describe("Result of a rewindFiles operation."));
var SDKControlCancelAsyncMessageRequestSchema = lazySchema(() => exports_external.object({
  subtype: exports_external.literal("cancel_async_message"),
  message_uuid: exports_external.string()
}).describe("Drops a pending async user message from the command queue by uuid. No-op if already dequeued for execution."));
var SDKControlCancelAsyncMessageResponseSchema = lazySchema(() => exports_external.object({
  cancelled: exports_external.boolean()
}).describe("Result of a cancel_async_message operation. cancelled=false means the message was not in the queue (already dequeued or never enqueued)."));
var SDKControlSeedReadStateRequestSchema = lazySchema(() => exports_external.object({
  subtype: exports_external.literal("seed_read_state"),
  path: exports_external.string(),
  mtime: exports_external.number()
}).describe("Seeds the readFileState cache with a path+mtime entry. Use when a prior Read was removed from context (e.g. by snip) so Edit validation would fail despite the client having observed the Read. The mtime lets the CLI detect if the file changed since the seeded Read \u2014 same staleness check as the normal path."));
var SDKHookCallbackRequestSchema = lazySchema(() => exports_external.object({
  subtype: exports_external.literal("hook_callback"),
  callback_id: exports_external.string(),
  input: HookInputSchema(),
  tool_use_id: exports_external.string().optional()
}).describe("Delivers a hook callback with its input data."));
var SDKControlMcpMessageRequestSchema = lazySchema(() => exports_external.object({
  subtype: exports_external.literal("mcp_message"),
  server_name: exports_external.string(),
  message: JSONRPCMessagePlaceholder()
}).describe("Sends a JSON-RPC message to a specific MCP server."));
var SDKControlMcpSetServersRequestSchema = lazySchema(() => exports_external.object({
  subtype: exports_external.literal("mcp_set_servers"),
  servers: exports_external.record(exports_external.string(), McpServerConfigForProcessTransportSchema())
}).describe("Replaces the set of dynamically managed MCP servers."));
var SDKControlMcpSetServersResponseSchema = lazySchema(() => exports_external.object({
  added: exports_external.array(exports_external.string()),
  removed: exports_external.array(exports_external.string()),
  errors: exports_external.record(exports_external.string(), exports_external.string())
}).describe("Result of replacing the set of dynamically managed MCP servers."));
var SDKControlReloadPluginsRequestSchema = lazySchema(() => exports_external.object({
  subtype: exports_external.literal("reload_plugins")
}).describe("Reloads plugins from disk and returns the refreshed session components."));
var SDKControlReloadPluginsResponseSchema = lazySchema(() => exports_external.object({
  commands: exports_external.array(SlashCommandSchema()),
  agents: exports_external.array(AgentInfoSchema()),
  plugins: exports_external.array(exports_external.object({
    name: exports_external.string(),
    path: exports_external.string(),
    source: exports_external.string().optional()
  })),
  mcpServers: exports_external.array(McpServerStatusSchema()),
  error_count: exports_external.number()
}).describe("Refreshed commands, agents, plugins, and MCP server status after reload."));
var SDKControlMcpReconnectRequestSchema = lazySchema(() => exports_external.object({
  subtype: exports_external.literal("mcp_reconnect"),
  serverName: exports_external.string()
}).describe("Reconnects a disconnected or failed MCP server."));
var SDKControlMcpToggleRequestSchema = lazySchema(() => exports_external.object({
  subtype: exports_external.literal("mcp_toggle"),
  serverName: exports_external.string(),
  enabled: exports_external.boolean()
}).describe("Enables or disables an MCP server."));
var SDKControlStopTaskRequestSchema = lazySchema(() => exports_external.object({
  subtype: exports_external.literal("stop_task"),
  task_id: exports_external.string()
}).describe("Stops a running task."));
var SDKControlApplyFlagSettingsRequestSchema = lazySchema(() => exports_external.object({
  subtype: exports_external.literal("apply_flag_settings"),
  settings: exports_external.record(exports_external.string(), exports_external.unknown())
}).describe("Merges the provided settings into the flag settings layer, updating the active configuration."));
var SDKControlGetSettingsRequestSchema = lazySchema(() => exports_external.object({
  subtype: exports_external.literal("get_settings")
}).describe("Returns the effective merged settings and the raw per-source settings."));
var SDKControlGetSettingsResponseSchema = lazySchema(() => exports_external.object({
  effective: exports_external.record(exports_external.string(), exports_external.unknown()),
  sources: exports_external.array(exports_external.object({
    source: exports_external.enum([
      "userSettings",
      "projectSettings",
      "localSettings",
      "flagSettings",
      "policySettings"
    ]),
    settings: exports_external.record(exports_external.string(), exports_external.unknown())
  })).describe("Ordered low-to-high priority \u2014 later entries override earlier ones."),
  applied: exports_external.object({
    model: exports_external.string(),
    effort: exports_external.enum(["low", "medium", "high", "xhigh", "max"]).nullable()
  }).optional().describe("Runtime-resolved values after env overrides, session state, and model-specific defaults are applied. Unlike `effective` (disk merge), these reflect what will actually be sent to the API.")
}).describe("Effective merged settings plus raw per-source settings in merge order."));
var SDKControlElicitationRequestSchema = lazySchema(() => exports_external.object({
  subtype: exports_external.literal("elicitation"),
  mcp_server_name: exports_external.string(),
  message: exports_external.string(),
  mode: exports_external.enum(["form", "url"]).optional(),
  url: exports_external.string().optional(),
  elicitation_id: exports_external.string().optional(),
  requested_schema: exports_external.record(exports_external.string(), exports_external.unknown()).optional()
}).describe("Requests the SDK consumer to handle an MCP elicitation (user input request)."));
var SDKControlElicitationResponseSchema = lazySchema(() => exports_external.object({
  action: exports_external.enum(["accept", "decline", "cancel"]),
  content: exports_external.record(exports_external.string(), exports_external.unknown()).optional()
}).describe("Response from the SDK consumer for an elicitation request."));
var SDKControlRequestInnerSchema = lazySchema(() => exports_external.union([
  SDKControlInterruptRequestSchema(),
  SDKControlPermissionRequestSchema(),
  SDKControlInitializeRequestSchema(),
  SDKControlSetPermissionModeRequestSchema(),
  SDKControlSetModelRequestSchema(),
  SDKControlSetMaxThinkingTokensRequestSchema(),
  SDKControlMcpStatusRequestSchema(),
  SDKControlGetContextUsageRequestSchema(),
  SDKHookCallbackRequestSchema(),
  SDKControlMcpMessageRequestSchema(),
  SDKControlRewindFilesRequestSchema(),
  SDKControlCancelAsyncMessageRequestSchema(),
  SDKControlSeedReadStateRequestSchema(),
  SDKControlMcpSetServersRequestSchema(),
  SDKControlReloadPluginsRequestSchema(),
  SDKControlMcpReconnectRequestSchema(),
  SDKControlMcpToggleRequestSchema(),
  SDKControlStopTaskRequestSchema(),
  SDKControlApplyFlagSettingsRequestSchema(),
  SDKControlGetSettingsRequestSchema(),
  SDKControlElicitationRequestSchema()
]));
var SDKControlRequestSchema = lazySchema(() => exports_external.object({
  type: exports_external.literal("control_request"),
  request_id: exports_external.string(),
  request: SDKControlRequestInnerSchema()
}));
var ControlResponseSchema = lazySchema(() => exports_external.object({
  subtype: exports_external.literal("success"),
  request_id: exports_external.string(),
  response: exports_external.record(exports_external.string(), exports_external.unknown()).optional()
}));
var ControlErrorResponseSchema = lazySchema(() => exports_external.object({
  subtype: exports_external.literal("error"),
  request_id: exports_external.string(),
  error: exports_external.string(),
  pending_permission_requests: exports_external.array(exports_external.lazy(() => SDKControlRequestSchema())).optional()
}));
var SDKControlResponseSchema = lazySchema(() => exports_external.object({
  type: exports_external.literal("control_response"),
  response: exports_external.union([ControlResponseSchema(), ControlErrorResponseSchema()])
}));
var SDKControlCancelRequestSchema = lazySchema(() => exports_external.object({
  type: exports_external.literal("control_cancel_request"),
  request_id: exports_external.string()
}).describe("Cancels a currently open control request."));
var SDKKeepAliveMessageSchema = lazySchema(() => exports_external.object({
  type: exports_external.literal("keep_alive")
}).describe("Keep-alive message to maintain WebSocket connection."));
var SDKUpdateEnvironmentVariablesMessageSchema = lazySchema(() => exports_external.object({
  type: exports_external.literal("update_environment_variables"),
  variables: exports_external.record(exports_external.string(), exports_external.string())
}).describe("Updates environment variables at runtime."));
var StdoutMessageSchema = lazySchema(() => exports_external.union([
  SDKMessageSchema(),
  SDKStreamlinedTextMessageSchema(),
  SDKStreamlinedToolUseSummaryMessageSchema(),
  SDKPostTurnSummaryMessageSchema(),
  SDKControlResponseSchema(),
  SDKControlRequestSchema(),
  SDKControlCancelRequestSchema(),
  SDKKeepAliveMessageSchema()
]));
var StdinMessageSchema = lazySchema(() => exports_external.union([
  SDKUserMessageSchema(),
  SDKControlRequestSchema(),
  SDKControlResponseSchema(),
  SDKKeepAliveMessageSchema(),
  SDKUpdateEnvironmentVariablesMessageSchema()
]));

// src/cli/structuredIO.ts
init_hooks();
init_debug();
init_diagLogs();
init_errors();
init_permissions();
init_process();
init_slowOperations();
init_v4();
init_commandLifecycle();
init_hooks2();
init_PermissionUpdate();
init_sessionState();
init_slowOperations();
init_stream();

// src/cli/ndjsonSafeStringify.ts
init_slowOperations();
var JS_LINE_TERMINATORS = /\u2028|\u2029/g;
function escapeJsLineTerminators(json) {
  return json.replace(JS_LINE_TERMINATORS, (c) => c === "\u2028" ? "\\u2028" : "\\u2029");
}
function ndjsonSafeStringify(value) {
  return escapeJsLineTerminators(jsonStringify(value));
}

// src/cli/structuredIO.ts
var SANDBOX_NETWORK_ACCESS_TOOL_NAME = "SandboxNetworkAccess";
function serializeDecisionReason(reason) {
  if (!reason) {
    return;
  }
  if (reason.type === "classifier") {
    return reason.reason;
  }
  switch (reason.type) {
    case "rule":
    case "mode":
    case "subcommandResults":
    case "permissionPromptTool":
      return;
    case "hook":
    case "asyncAgent":
    case "sandboxOverride":
    case "workingDir":
    case "safetyCheck":
    case "other":
      return reason.reason;
  }
}
function buildRequiresActionDetails(tool, input, toolUseID, requestId) {
  let description;
  try {
    description = tool.getActivityDescription?.(input) ?? tool.getToolUseSummary?.(input) ?? tool.userFacingName(input);
  } catch {
    description = tool.name;
  }
  return {
    tool_name: tool.name,
    action_description: description,
    tool_use_id: toolUseID,
    request_id: requestId,
    input
  };
}
var MAX_RESOLVED_TOOL_USE_IDS = 1000;

class StructuredIO {
  input;
  replayUserMessages;
  structuredInput;
  pendingRequests = new Map;
  restoredWorkerState = Promise.resolve(null);
  inputClosed = false;
  unexpectedResponseCallback;
  resolvedToolUseIds = new Set;
  prependedLines = [];
  onControlRequestSent;
  onControlRequestResolved;
  outbound = new Stream;
  constructor(input, replayUserMessages) {
    this.input = input;
    this.replayUserMessages = replayUserMessages;
    this.input = input;
    this.structuredInput = this.read();
  }
  trackResolvedToolUseId(request) {
    const inner = request.request;
    if (inner.subtype === "can_use_tool") {
      this.resolvedToolUseIds.add(inner.tool_use_id);
      if (this.resolvedToolUseIds.size > MAX_RESOLVED_TOOL_USE_IDS) {
        const first = this.resolvedToolUseIds.values().next().value;
        if (first !== undefined) {
          this.resolvedToolUseIds.delete(first);
        }
      }
    }
  }
  flushInternalEvents() {
    return Promise.resolve();
  }
  get internalEventsPending() {
    return 0;
  }
  prependUserMessage(content) {
    this.prependedLines.push(jsonStringify({
      type: "user",
      content,
      uuid: "",
      session_id: "",
      message: { role: "user", content },
      parent_tool_use_id: null
    }) + `
`);
  }
  async* read() {
    let content = "";
    const splitAndProcess = async function* () {
      for (;; ) {
        if (this.prependedLines.length > 0) {
          content = this.prependedLines.join("") + content;
          this.prependedLines = [];
        }
        const newline = content.indexOf(`
`);
        if (newline === -1)
          break;
        const line = content.slice(0, newline);
        content = content.slice(newline + 1);
        const message = await this.processLine(line);
        if (message) {
          logForDiagnosticsNoPII("info", "cli_stdin_message_parsed", {
            type: message.type
          });
          yield message;
        }
      }
    }.bind(this);
    yield* splitAndProcess();
    for await (const block of this.input) {
      content += block;
      yield* splitAndProcess();
    }
    if (content) {
      const message = await this.processLine(content);
      if (message) {
        yield message;
      }
    }
    this.inputClosed = true;
    for (const request of this.pendingRequests.values()) {
      request.reject(new Error("Tool permission stream closed before response received"));
    }
  }
  getPendingPermissionRequests() {
    return Array.from(this.pendingRequests.values()).map((entry) => entry.request).filter((pr) => pr.request.subtype === "can_use_tool");
  }
  setUnexpectedResponseCallback(callback) {
    this.unexpectedResponseCallback = callback;
  }
  injectControlResponse(response) {
    const responseInner = response.response;
    const requestId = responseInner?.request_id;
    if (!requestId)
      return;
    const request = this.pendingRequests.get(requestId);
    if (!request)
      return;
    this.trackResolvedToolUseId(request.request);
    this.pendingRequests.delete(requestId);
    this.write({
      type: "control_cancel_request",
      request_id: requestId
    });
    if (responseInner.subtype === "error") {
      request.reject(new Error(responseInner.error));
    } else {
      const result = responseInner.response;
      if (request.schema) {
        try {
          request.resolve(request.schema.parse(result));
        } catch (error) {
          request.reject(error);
        }
      } else {
        request.resolve({});
      }
    }
  }
  setOnControlRequestSent(callback) {
    this.onControlRequestSent = callback;
  }
  setOnControlRequestResolved(callback) {
    this.onControlRequestResolved = callback;
  }
  async processLine(line) {
    if (!line) {
      return;
    }
    try {
      const message = normalizeControlMessageKeys(jsonParse(line));
      if (message.type === "keep_alive") {
        return;
      }
      if (message.type === "update_environment_variables") {
        const variables = message.variables ?? {};
        const keys = Object.keys(variables);
        for (const [key, value] of Object.entries(variables)) {
          process.env[key] = value;
        }
        logForDebugging(`[structuredIO] applied update_environment_variables: ${keys.join(", ")}`);
        return;
      }
      if (message.type === "control_response") {
        const uuid = "uuid" in message && typeof message.uuid === "string" ? message.uuid : undefined;
        if (uuid) {
          notifyCommandLifecycle(uuid, "completed");
        }
        const resp = message.response;
        const request = this.pendingRequests.get(resp.request_id);
        if (!request) {
          const responsePayload = resp.subtype === "success" ? resp.response : undefined;
          const toolUseID = responsePayload?.toolUseID;
          if (typeof toolUseID === "string" && this.resolvedToolUseIds.has(toolUseID)) {
            logForDebugging(`Ignoring duplicate control_response for already-resolved toolUseID=${toolUseID} request_id=${resp.request_id}`);
            return;
          }
          if (this.unexpectedResponseCallback) {
            await this.unexpectedResponseCallback(message);
          }
          return;
        }
        this.trackResolvedToolUseId(request.request);
        this.pendingRequests.delete(resp.request_id);
        if (request.request.request.subtype === "can_use_tool" && this.onControlRequestResolved) {
          this.onControlRequestResolved(resp.request_id);
        }
        if (resp.subtype === "error") {
          request.reject(new Error(resp.error ?? "Unknown error"));
          return;
        }
        const result = resp.response;
        if (request.schema) {
          try {
            request.resolve(request.schema.parse(result));
          } catch (error) {
            request.reject(error);
          }
        } else {
          request.resolve({});
        }
        if (this.replayUserMessages) {
          return message;
        }
        return;
      }
      if (message.type !== "user" && message.type !== "control_request" && message.type !== "assistant" && message.type !== "system") {
        logForDebugging(`Ignoring unknown message type: ${message.type}`, {
          level: "warn"
        });
        return;
      }
      if (message.type === "control_request") {
        if (!message.request) {
          exitWithMessage(`Error: Missing request on control_request`);
        }
        return message;
      }
      if (message.type === "assistant" || message.type === "system") {
        return message;
      }
      if (message.message?.role !== "user") {
        exitWithMessage(`Error: Expected message role 'user', got '${message.message?.role}'`);
      }
      return message;
    } catch (error) {
      console.error(`Error parsing streaming input line: ${line}: ${error}`);
      process.exit(1);
    }
  }
  async write(message) {
    writeToStdout(ndjsonSafeStringify(message) + `
`);
  }
  async sendRequest(request, schema, signal, requestId = randomUUID()) {
    const message = {
      type: "control_request",
      request_id: requestId,
      request
    };
    if (this.inputClosed) {
      throw new Error("Stream closed");
    }
    if (signal?.aborted) {
      throw new Error("Request aborted");
    }
    this.outbound.enqueue(message);
    if (request.subtype === "can_use_tool" && this.onControlRequestSent) {
      this.onControlRequestSent(message);
    }
    const aborted = () => {
      this.outbound.enqueue({
        type: "control_cancel_request",
        request_id: requestId
      });
      const request2 = this.pendingRequests.get(requestId);
      if (request2) {
        this.trackResolvedToolUseId(request2.request);
        request2.reject(new AbortError);
      }
    };
    if (signal) {
      signal.addEventListener("abort", aborted, {
        once: true
      });
    }
    try {
      return await new Promise((resolve, reject) => {
        this.pendingRequests.set(requestId, {
          request: {
            type: "control_request",
            request_id: requestId,
            request
          },
          resolve: (result) => {
            resolve(result);
          },
          reject,
          schema
        });
      });
    } finally {
      if (signal) {
        signal.removeEventListener("abort", aborted);
      }
      this.pendingRequests.delete(requestId);
    }
  }
  createCanUseTool(onPermissionPrompt) {
    return async (tool, input, toolUseContext, assistantMessage, toolUseID, forceDecision) => {
      const mainPermissionResult = forceDecision ?? await hasPermissionsToUseTool(tool, input, toolUseContext, assistantMessage, toolUseID);
      if (mainPermissionResult.behavior === "allow" || mainPermissionResult.behavior === "deny") {
        return mainPermissionResult;
      }
      const hookAbortController = new AbortController;
      const parentSignal = toolUseContext.abortController.signal;
      const onParentAbort = () => hookAbortController.abort();
      parentSignal.addEventListener("abort", onParentAbort, { once: true });
      try {
        const hookPromise = executePermissionRequestHooksForSDK(tool.name, toolUseID, input, toolUseContext, mainPermissionResult.suggestions).then((decision) => ({ source: "hook", decision }));
        const requestId = randomUUID();
        onPermissionPrompt?.(buildRequiresActionDetails(tool, input, toolUseID, requestId));
        const sdkPromise = this.sendRequest({
          subtype: "can_use_tool",
          tool_name: tool.name,
          input,
          permission_suggestions: mainPermissionResult.suggestions,
          blocked_path: mainPermissionResult.blockedPath,
          decision_reason: serializeDecisionReason(mainPermissionResult.decisionReason),
          tool_use_id: toolUseID,
          agent_id: toolUseContext.agentId
        }, outputSchema(), hookAbortController.signal, requestId).then((result) => ({ source: "sdk", result }));
        const winner = await Promise.race([hookPromise, sdkPromise]);
        if (winner.source === "hook") {
          if (winner.decision) {
            sdkPromise.catch(() => {});
            hookAbortController.abort();
            return winner.decision;
          }
          const sdkResult = await sdkPromise;
          return permissionPromptToolResultToPermissionDecision(sdkResult.result, tool, input, toolUseContext);
        }
        return permissionPromptToolResultToPermissionDecision(winner.result, tool, input, toolUseContext);
      } catch (error) {
        return permissionPromptToolResultToPermissionDecision({
          behavior: "deny",
          message: `Tool permission request failed: ${error}`,
          toolUseID
        }, tool, input, toolUseContext);
      } finally {
        if (this.getPendingPermissionRequests().length === 0) {
          notifySessionStateChanged("running");
        }
        parentSignal.removeEventListener("abort", onParentAbort);
      }
    };
  }
  createHookCallback(callbackId, timeout) {
    return {
      type: "callback",
      timeout,
      callback: async (input, toolUseID, abort) => {
        try {
          const result = await this.sendRequest({
            subtype: "hook_callback",
            callback_id: callbackId,
            input,
            tool_use_id: toolUseID || undefined
          }, hookJSONOutputSchema(), abort);
          return result;
        } catch (error) {
          console.error(`Error in hook callback ${callbackId}:`, error);
          return {};
        }
      }
    };
  }
  async handleElicitation(serverName, message, requestedSchema, signal, mode, url, elicitationId) {
    try {
      const result = await this.sendRequest({
        subtype: "elicitation",
        mcp_server_name: serverName,
        message,
        mode,
        url,
        elicitation_id: elicitationId,
        requested_schema: requestedSchema
      }, SDKControlElicitationResponseSchema(), signal);
      return result;
    } catch {
      return { action: "cancel" };
    }
  }
  createSandboxAskCallback() {
    return async (hostPattern) => {
      try {
        const result = await this.sendRequest({
          subtype: "can_use_tool",
          tool_name: SANDBOX_NETWORK_ACCESS_TOOL_NAME,
          input: { host: hostPattern.host },
          tool_use_id: randomUUID(),
          description: `Allow network connection to ${hostPattern.host}?`
        }, outputSchema());
        return result.behavior === "allow";
      } catch {
        return false;
      }
    };
  }
  async sendMcpMessage(serverName, message) {
    const response = await this.sendRequest({
      subtype: "mcp_message",
      server_name: serverName,
      message
    }, exports_external.object({
      mcp_response: exports_external.any()
    }));
    return response.mcp_response;
  }
}
function exitWithMessage(message) {
  console.error(message);
  process.exit(1);
}
async function executePermissionRequestHooksForSDK(toolName, toolUseID, input, toolUseContext, suggestions) {
  const appState = toolUseContext.getAppState();
  const permissionMode = appState.toolPermissionContext.mode;
  const hookGenerator = executePermissionRequestHooks(toolName, toolUseID, input, toolUseContext, permissionMode, suggestions, toolUseContext.abortController.signal);
  for await (const hookResult of hookGenerator) {
    if (hookResult.permissionRequestResult && (hookResult.permissionRequestResult.behavior === "allow" || hookResult.permissionRequestResult.behavior === "deny")) {
      const decision = hookResult.permissionRequestResult;
      if (decision.behavior === "allow") {
        const finalInput = decision.updatedInput || input;
        const permissionUpdates = decision.updatedPermissions ?? [];
        if (permissionUpdates.length > 0) {
          persistPermissionUpdates(permissionUpdates);
          const currentAppState = toolUseContext.getAppState();
          const updatedContext = applyPermissionUpdates(currentAppState.toolPermissionContext, permissionUpdates);
          toolUseContext.setAppState((prev) => {
            if (prev.toolPermissionContext === updatedContext)
              return prev;
            return { ...prev, toolPermissionContext: updatedContext };
          });
        }
        return {
          behavior: "allow",
          updatedInput: finalInput,
          userModified: false,
          decisionReason: {
            type: "hook",
            hookName: "PermissionRequest"
          }
        };
      } else {
        return {
          behavior: "deny",
          message: decision.message || "Permission denied by PermissionRequest hook",
          decisionReason: {
            type: "hook",
            hookName: "PermissionRequest"
          }
        };
      }
    }
  }
  return;
}

// src/utils/plugins/reconciler.ts
init_isEqual();
init_state();
init_debug();
init_errors();
init_file();
init_git();
init_log();
init_marketplaceManager();
init_schemas();
import { isAbsolute, resolve } from "path";
function diffMarketplaces(declared, materialized, opts) {
  const missing = [];
  const sourceChanged = [];
  const upToDate = [];
  for (const [name, intent] of Object.entries(declared)) {
    const state = materialized[name];
    const normalizedIntent = normalizeSource(intent.source, opts?.projectRoot);
    if (!state) {
      missing.push(name);
    } else if (intent.sourceIsFallback) {
      upToDate.push(name);
    } else if (!isEqual_default(normalizedIntent, state.source)) {
      sourceChanged.push({
        name,
        declaredSource: normalizedIntent,
        materializedSource: state.source
      });
    } else {
      upToDate.push(name);
    }
  }
  return { missing, sourceChanged, upToDate };
}
async function reconcileMarketplaces(opts) {
  const declared = getDeclaredMarketplaces();
  if (Object.keys(declared).length === 0) {
    return { installed: [], updated: [], failed: [], upToDate: [], skipped: [] };
  }
  let materialized;
  try {
    materialized = await loadKnownMarketplacesConfig();
  } catch (e) {
    logError(e);
    materialized = {};
  }
  const diff = diffMarketplaces(declared, materialized, {
    projectRoot: getOriginalCwd()
  });
  const work = [
    ...diff.missing.map((name) => ({
      name,
      source: normalizeSource(declared[name].source),
      action: "install"
    })),
    ...diff.sourceChanged.map(({ name, declaredSource }) => ({
      name,
      source: declaredSource,
      action: "update"
    }))
  ];
  const skipped = [];
  const toProcess = [];
  for (const item of work) {
    if (opts?.skip?.(item.name, item.source)) {
      skipped.push(item.name);
      continue;
    }
    if (item.action === "update" && isLocalMarketplaceSource(item.source) && !await pathExists(item.source.path)) {
      logForDebugging(`[reconcile] '${item.name}' declared path does not exist; keeping materialized entry`);
      skipped.push(item.name);
      continue;
    }
    toProcess.push(item);
  }
  if (toProcess.length === 0) {
    return {
      installed: [],
      updated: [],
      failed: [],
      upToDate: diff.upToDate,
      skipped
    };
  }
  logForDebugging(`[reconcile] ${toProcess.length} marketplace(s): ${toProcess.map((w) => `${w.name}(${w.action})`).join(", ")}`);
  const installed = [];
  const updated = [];
  const failed = [];
  for (let i = 0;i < toProcess.length; i++) {
    const { name, source, action } = toProcess[i];
    opts?.onProgress?.({
      type: "installing",
      name,
      action,
      index: i + 1,
      total: toProcess.length
    });
    try {
      const result = await addMarketplaceSource(source);
      if (action === "install")
        installed.push(name);
      else
        updated.push(name);
      opts?.onProgress?.({
        type: "installed",
        name,
        alreadyMaterialized: result.alreadyMaterialized
      });
    } catch (e) {
      const error = errorMessage(e);
      failed.push({ name, error });
      opts?.onProgress?.({ type: "failed", name, error });
      logError(e);
    }
  }
  return { installed, updated, failed, upToDate: diff.upToDate, skipped };
}
function normalizeSource(source, projectRoot) {
  if ((source.source === "directory" || source.source === "file") && !isAbsolute(source.path)) {
    const base = projectRoot ?? getOriginalCwd();
    const canonicalRoot = findCanonicalGitRoot(base);
    return {
      ...source,
      path: resolve(canonicalRoot ?? base, source.path)
    };
  }
  return source;
}

export { extractInboundMessageFields, outputSchema, permissionPromptToolResultToPermissionDecision, ndjsonSafeStringify, SANDBOX_NETWORK_ACCESS_TOOL_NAME, StructuredIO, diffMarketplaces, reconcileMarketplaces, getCronJitterConfig, exports_cronJitterConfig, init_cronJitterConfig, createCronScheduler, exports_cronScheduler, init_cronScheduler };
