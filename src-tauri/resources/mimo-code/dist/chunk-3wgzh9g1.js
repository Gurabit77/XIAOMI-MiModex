// @bun
import {
  getPipesDir,
  getTeammateStatuses,
  init_pipeTransport,
  init_teamDiscovery
} from "./chunk-4xf25mbr.js";
import {
  init_bg,
  listLiveSessions
} from "./chunk-0xeaga0h.js";
import {
  init_state as init_state2,
  queryDaemonStatus
} from "./chunk-7dv9n7ge.js";
import {
  cronToHuman,
  enqueuePendingNotification,
  formatAutonomyFlowDetail,
  formatAutonomyFlowsList,
  formatAutonomyFlowsStatus,
  formatAutonomyRunsList,
  formatAutonomyRunsStatus,
  formatRemoteTriggerAuditStatus,
  getAutoModeUnavailableReason,
  getAutonomyFlowById,
  init_autonomyFlows,
  init_autonomyRuns,
  init_cron,
  init_cronTasks,
  init_messageQueueManager,
  init_permissionSetup,
  init_remoteTriggerAudit,
  isAutoModeGateEnabled,
  listAllCronTasks,
  listAutonomyFlows,
  listAutonomyRuns,
  listRemoteTriggerAuditRecords,
  markAutonomyRunCancelled,
  nextCronRunMs,
  removeByFilter,
  requestManagedAutonomyFlowCancel,
  resumeManagedAutonomyFlowPrompt
} from "./chunk-ktw919wt.js";
import {
  init_tasks,
  listTasks
} from "./chunk-ypmcesxe.js";
import {
  getBridgeAccessToken,
  getBridgeBaseUrl,
  init_bridgeConfig,
  isSelfHostedBridge
} from "./chunk-jtnkamme.js";
import {
  init_json,
  safeParseJSON
} from "./chunk-pz9t24tq.js";
import {
  getProjectRoot,
  init_state
} from "./chunk-j5xzpm59.js";
import {
  getTeamsDir,
  init_envUtils
} from "./chunk-hxhwzgnn.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/workflowRuns.ts
import { readdir, readFile } from "fs/promises";
import { join } from "path";
function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function isWorkflowRunStatus(value) {
  return typeof value === "string" && WORKFLOW_RUN_STATUSES.includes(value);
}
function isWorkflowStepStatus(value) {
  return typeof value === "string" && WORKFLOW_STEP_STATUSES.includes(value);
}
function normalizeWorkflowStep(value) {
  if (!isRecord(value))
    return null;
  if (typeof value.name !== "string")
    return null;
  if (!isWorkflowStepStatus(value.status))
    return null;
  return {
    name: value.name,
    ...typeof value.prompt === "string" ? { prompt: value.prompt } : {},
    status: value.status,
    ...typeof value.startedAt === "number" ? { startedAt: value.startedAt } : {},
    ...typeof value.completedAt === "number" ? { completedAt: value.completedAt } : {}
  };
}
function normalizeWorkflowRun(value) {
  if (!isRecord(value))
    return null;
  if (typeof value.runId !== "string")
    return null;
  if (typeof value.workflow !== "string")
    return null;
  if (!isWorkflowRunStatus(value.status))
    return null;
  if (typeof value.createdAt !== "number")
    return null;
  if (typeof value.updatedAt !== "number")
    return null;
  if (typeof value.currentStepIndex !== "number")
    return null;
  if (!Array.isArray(value.steps))
    return null;
  const steps = value.steps.map(normalizeWorkflowStep).filter((step) => step !== null);
  if (steps.length !== value.steps.length)
    return null;
  return {
    runId: value.runId,
    workflow: value.workflow,
    ...typeof value.args === "string" ? { args: value.args } : {},
    status: value.status,
    createdAt: value.createdAt,
    updatedAt: value.updatedAt,
    currentStepIndex: value.currentStepIndex,
    steps
  };
}
async function readWorkflowRun(rootDir, runId) {
  try {
    const parsed = safeParseJSON(await readFile(join(rootDir, WORKFLOW_RUNS_REL, `${runId}.json`), "utf-8"), false);
    return normalizeWorkflowRun(parsed);
  } catch {
    return null;
  }
}
async function listWorkflowRuns(rootDir = getProjectRoot()) {
  let files;
  try {
    files = await readdir(join(rootDir, WORKFLOW_RUNS_REL));
  } catch {
    return [];
  }
  const jsonFiles = files.filter((file) => file.endsWith(".json"));
  const runs = await Promise.all(jsonFiles.slice(0, MAX_WORKFLOW_RUNS).map((file) => readWorkflowRun(rootDir, file.slice(0, -".json".length))));
  return runs.filter((run) => run !== null).sort((a, b) => b.updatedAt - a.updatedAt);
}
function formatWorkflowRunsStatus(runs) {
  if (runs.length === 0) {
    return ["Workflow runs: 0", "  none"].join(`
`);
  }
  const running = runs.filter((run) => run.status === "running").length;
  const completed = runs.filter((run) => run.status === "completed").length;
  const cancelled = runs.filter((run) => run.status === "cancelled").length;
  const lines = [
    `Workflow runs: ${runs.length}`,
    `  Running: ${running}`,
    `  Completed: ${completed}`,
    `  Cancelled: ${cancelled}`
  ];
  for (const run of runs.slice(0, 10)) {
    const currentStep = run.steps[run.currentStepIndex];
    lines.push(`  ${run.runId}: ${run.workflow}: ${run.status} step=${currentStep?.name ?? "none"} updated=${new Date(run.updatedAt).toLocaleString()}`);
  }
  if (runs.length > 10) {
    lines.push(`  ... ${runs.length - 10} more workflow run(s)`);
  }
  return lines.join(`
`);
}
var WORKFLOW_RUNS_REL, MAX_WORKFLOW_RUNS = 200, WORKFLOW_RUN_STATUSES, WORKFLOW_STEP_STATUSES;
var init_workflowRuns = __esm(() => {
  init_state();
  init_json();
  WORKFLOW_RUNS_REL = join(".claude", "workflow-runs");
  WORKFLOW_RUN_STATUSES = ["running", "completed", "cancelled"];
  WORKFLOW_STEP_STATUSES = [
    "pending",
    "running",
    "completed",
    "cancelled"
  ];
});

// src/utils/pipeRegistry.ts
import { readFile as readFile2, writeFile, unlink, mkdir } from "fs/promises";
import { join as join2 } from "path";
function getRegistryPath() {
  return join2(getPipesDir(), "registry.json");
}
async function readRegistry() {
  try {
    const content = await readFile2(getRegistryPath(), "utf8");
    const parsed = JSON.parse(content);
    if (parsed.version !== 1)
      return { ...EMPTY_REGISTRY };
    return parsed;
  } catch {
    return { ...EMPTY_REGISTRY };
  }
}
var EMPTY_REGISTRY;
var init_pipeRegistry = __esm(() => {
  init_pipeTransport();
  EMPTY_REGISTRY = {
    version: 1,
    mainMachineId: null,
    main: null,
    subs: []
  };
});

// src/utils/pipeStatus.ts
async function formatPipeRegistryStatus() {
  return formatPipeRegistry(await readRegistry());
}
function formatPipeRegistry(registry) {
  const lines = [
    `Pipe registry: ${registry.main ? 1 : 0} main, ${registry.subs.length} sub(s)`
  ];
  if (registry.mainMachineId) {
    lines.push(`  main_machine=${registry.mainMachineId.slice(0, 8)}...`);
  }
  if (registry.main) {
    lines.push(`  [main] ${registry.main.pipeName} pid=${registry.main.pid} host=${registry.main.hostname} tcp=${registry.main.tcpPort ?? "none"}`);
  }
  for (const sub of registry.subs.slice(0, 10)) {
    lines.push(`  [sub-${sub.subIndex}] ${sub.pipeName} pid=${sub.pid} host=${sub.hostname} bound=${sub.boundToMain ?? "none"} tcp=${sub.tcpPort ?? "none"}`);
  }
  if (!registry.main && registry.subs.length === 0) {
    lines.push("  none");
  }
  if (registry.subs.length > 10) {
    lines.push(`  ... ${registry.subs.length - 10} more sub pipe(s)`);
  }
  return lines.join(`
`);
}
var init_pipeStatus = __esm(() => {
  init_pipeRegistry();
});

// src/utils/remoteControlStatus.ts
function formatRemoteControlLocalStatus() {
  try {
    const selfHosted = isSelfHostedBridge();
    const token = getBridgeAccessToken();
    return [
      `Remote Control: ${selfHosted ? "self-hosted" : "official"}`,
      `  base_url=${getBridgeBaseUrl()}`,
      `  token=${token ? "present" : "missing"}`,
      "  entitlement=checked at remote-control startup"
    ].join(`
`);
  } catch (error) {
    return [
      "Remote Control: unknown",
      `  reason=${error instanceof Error ? error.message : String(error)}`
    ].join(`
`);
  }
}
var init_remoteControlStatus = __esm(() => {
  init_bridgeConfig();
});

// src/utils/autonomyStatus.ts
import { readdir as readdir2 } from "fs/promises";
async function listTeamNames() {
  try {
    const entries = await readdir2(getTeamsDir(), { withFileTypes: true });
    return entries.filter((e) => e.isDirectory()).map((e) => e.name).sort();
  } catch {
    return [];
  }
}
async function formatTeamsSection() {
  const teamNames = await listTeamNames();
  if (teamNames.length === 0) {
    return ["Teams: 0", "  none"].join(`
`);
  }
  const lines = [`Teams: ${teamNames.length}`];
  for (const teamName of teamNames) {
    const teammates = getTeammateStatuses(teamName);
    const tasks = await listTasks(teamName);
    const openTasks = tasks.filter((t) => t.status !== "completed");
    const running = teammates.filter((t) => t.status === "running").length;
    const idle = teammates.filter((t) => t.status === "idle").length;
    lines.push(`  ${teamName}: teammates=${teammates.length} running=${running} idle=${idle} open_tasks=${openTasks.length}`);
    for (const teammate of teammates.slice(0, 5)) {
      const ownerTasks = openTasks.filter((t) => t.owner === teammate.name || t.owner === teammate.agentId);
      lines.push(`    @${teammate.name}: ${teammate.status} backend=${teammate.backendType ?? "unknown"} mode=${teammate.mode ?? "default"} tasks=${ownerTasks.length}`);
    }
    if (teammates.length > 5) {
      lines.push(`    ... ${teammates.length - 5} more teammate(s)`);
    }
  }
  return lines.join(`
`);
}
async function formatCronSection(nowMs) {
  const jobs = await listAllCronTasks();
  if (jobs.length === 0) {
    return ["Cron jobs: 0", "  none"].join(`
`);
  }
  const lines = [`Cron jobs: ${jobs.length}`];
  for (const job of jobs.slice(0, 10)) {
    const next = nextCronRunMs(job.cron, nowMs);
    lines.push(`  ${job.id}: ${cronToHuman(job.cron)} ${job.recurring ? "recurring" : "one-shot"} ${job.durable === false ? "session-only" : "durable"} next=${next ? new Date(next).toLocaleString() : "none"}`);
  }
  if (jobs.length > 10) {
    lines.push(`  ... ${jobs.length - 10} more job(s)`);
  }
  return lines.join(`
`);
}
async function formatRuntimeSection() {
  const daemon = queryDaemonStatus();
  const sessions = await listLiveSessions();
  const lines = [
    `Daemon: ${daemon.status}${daemon.state ? ` pid=${daemon.state.pid} workers=${daemon.state.workerKinds.join(",")}` : ""}`,
    `Background sessions: ${sessions.length}`
  ];
  for (const session of sessions.slice(0, 8)) {
    lines.push(`  pid=${session.pid} kind=${session.kind} status=${session.status ?? "unknown"} cwd=${session.cwd}`);
  }
  if (sessions.length > 8) {
    lines.push(`  ... ${sessions.length - 8} more session(s)`);
  }
  return lines.join(`
`);
}
function formatAutoModeSection() {
  let available = false;
  let reason = null;
  try {
    available = isAutoModeGateEnabled();
    reason = getAutoModeUnavailableReason();
  } catch (error) {
    return [
      "Auto mode: unknown",
      `  reason=${error instanceof Error ? error.message : String(error)}`
    ].join(`
`);
  }
  return [
    `Auto mode: ${available ? "available" : "unavailable"}`,
    `  reason=${reason ?? "none"}`
  ].join(`
`);
}
async function formatAutonomyDeepStatusSections({
  runs,
  flows,
  nowMs = Date.now()
}) {
  return Promise.all([
    Promise.resolve({
      id: "auto-mode",
      title: "Auto Mode",
      content: formatAutoModeSection()
    }),
    Promise.resolve({
      id: "runs",
      title: "Runs",
      content: formatAutonomyRunsStatus(runs)
    }),
    Promise.resolve({
      id: "flows",
      title: "Flows",
      content: formatAutonomyFlowsStatus(flows)
    }),
    formatCronSection(nowMs).then((content) => ({
      id: "cron",
      title: "Cron",
      content
    })),
    listWorkflowRuns().then((runs2) => ({
      id: "workflow-runs",
      title: "Workflow Runs",
      content: formatWorkflowRunsStatus(runs2)
    })),
    formatTeamsSection().then((content) => ({
      id: "teams",
      title: "Teams",
      content
    })),
    formatPipeRegistryStatus().then((content) => ({
      id: "pipes",
      title: "Pipes",
      content
    })),
    formatRuntimeSection().then((content) => ({
      id: "runtime",
      title: "Runtime",
      content
    })),
    Promise.resolve({
      id: "remote-control",
      title: "Remote Control",
      content: formatRemoteControlLocalStatus()
    }),
    listRemoteTriggerAuditRecords().then((records) => ({
      id: "remote-trigger",
      title: "RemoteTrigger",
      content: formatRemoteTriggerAuditStatus(records)
    }))
  ]);
}
async function formatAutonomyDeepStatus(params) {
  const sections = await formatAutonomyDeepStatusSections(params);
  return sections.map((section, index) => [
    index === 0 ? "# Autonomy Deep Status" : `## ${section.title}`,
    section.content
  ].join(`
`)).join(`

`);
}
var init_autonomyStatus = __esm(() => {
  init_state2();
  init_bg();
  init_autonomyFlows();
  init_autonomyRuns();
  init_envUtils();
  init_permissionSetup();
  init_cron();
  init_cronTasks();
  init_teamDiscovery();
  init_tasks();
  init_remoteTriggerAudit();
  init_workflowRuns();
  init_pipeStatus();
  init_remoteControlStatus();
});

// src/utils/autonomyCommandSpec.ts
function parseAutonomyArgs(args) {
  const [subcommand = "status", arg1, arg2] = args.trim().split(/\s+/, 3);
  if (subcommand === "" || subcommand === "status") {
    return { type: "status", deep: arg1 === "--deep" };
  }
  if (subcommand === "runs") {
    return { type: "runs", limit: arg1 };
  }
  if (subcommand === "flows") {
    return { type: "flows", limit: arg1 };
  }
  if (subcommand === "flow") {
    if (arg1 === "cancel") {
      return arg2 ? { type: "flow-cancel", flowId: arg2 } : { type: "usage" };
    }
    if (arg1 === "resume") {
      return arg2 ? { type: "flow-resume", flowId: arg2 } : { type: "usage" };
    }
    return arg1 ? { type: "flow-detail", flowId: arg1 } : { type: "usage" };
  }
  return { type: "usage" };
}
var AUTONOMY_USAGE = "Usage: /autonomy [status [--deep]|runs [limit]|flows [limit]|flow <id>|flow cancel <id>|flow resume <id>]";
var init_autonomyCommandSpec = () => {};

// src/cli/handlers/autonomy.ts
function parseAutonomyLimit(raw) {
  const parsed = typeof raw === "number" ? raw : Number.parseInt(raw ?? "", 10);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return 10;
  }
  return Math.min(parsed, 50);
}
async function getAutonomyStatusText(options) {
  const rootDir = options?.rootDir;
  const [runs, flows] = await Promise.all([
    listAutonomyRuns(rootDir),
    listAutonomyFlows(rootDir)
  ]);
  if (options?.deep) {
    return formatAutonomyDeepStatus({ runs, flows });
  }
  return [
    formatAutonomyRunsStatus(runs),
    formatAutonomyFlowsStatus(flows)
  ].join(`
`);
}
async function getAutonomyDeepSectionText(sectionId, options) {
  const [runs, flows] = await Promise.all([
    listAutonomyRuns(options?.rootDir),
    listAutonomyFlows(options?.rootDir)
  ]);
  const sections = await formatAutonomyDeepStatusSections({ runs, flows });
  const section = sections.find((item) => item.id === sectionId);
  if (!section) {
    return `Autonomy deep status section not found: ${sectionId}`;
  }
  return [`# ${section.title}`, section.content].join(`
`);
}
async function autonomyStatusHandler(options) {
  process.stdout.write(`${await getAutonomyStatusText(options)}
`);
}
async function getAutonomyRunsText(limit, options) {
  return formatAutonomyRunsList(await listAutonomyRuns(options?.rootDir), parseAutonomyLimit(limit));
}
async function autonomyRunsHandler(limit) {
  process.stdout.write(`${await getAutonomyRunsText(limit)}
`);
}
async function getAutonomyFlowsText(limit, options) {
  return formatAutonomyFlowsList(await listAutonomyFlows(options?.rootDir), parseAutonomyLimit(limit));
}
async function autonomyFlowsHandler(limit) {
  process.stdout.write(`${await getAutonomyFlowsText(limit)}
`);
}
async function getAutonomyFlowText(flowId, options) {
  return formatAutonomyFlowDetail(await getAutonomyFlowById(flowId, options?.rootDir));
}
async function autonomyFlowHandler(flowId) {
  process.stdout.write(`${await getAutonomyFlowText(flowId)}
`);
}
async function cancelAutonomyFlowText(flowId, options) {
  const cancelled = await requestManagedAutonomyFlowCancel({
    flowId,
    rootDir: options?.rootDir
  });
  if (!cancelled) {
    return "Autonomy flow not found.";
  }
  if (!cancelled.accepted) {
    return `Autonomy flow ${flowId} is already terminal (${cancelled.flow.status}).`;
  }
  let removedCount = 0;
  if (options?.removeQueuedInMemory) {
    const removed = removeByFilter((cmd) => cmd.autonomy?.flowId === flowId);
    removedCount = removed.length;
    for (const command of removed) {
      if (command.autonomy?.runId) {
        await markAutonomyRunCancelled(command.autonomy.runId, options?.rootDir);
      }
    }
  } else {
    for (const runId of cancelled.queuedRunIds) {
      await markAutonomyRunCancelled(runId, options?.rootDir);
    }
    removedCount = cancelled.queuedRunIds.length;
  }
  return cancelled.flow.status === "running" ? `Cancellation requested for flow ${flowId}. The current step is still running, and no new steps will be started.` : `Cancelled flow ${flowId}. Removed ${removedCount} queued step(s).`;
}
async function autonomyFlowCancelHandler(flowId) {
  process.stdout.write(`${await cancelAutonomyFlowText(flowId)}
`);
}
async function resumeAutonomyFlowText(flowId, options) {
  const command = await resumeManagedAutonomyFlowPrompt({
    flowId,
    rootDir: options?.rootDir,
    currentDir: options?.currentDir
  });
  if (!command) {
    return "Autonomy flow is not waiting or was not found.";
  }
  if (options?.enqueueInMemory) {
    enqueuePendingNotification(command);
    return `Queued the next managed step for flow ${flowId}.`;
  }
  const runId = command.autonomy?.runId ?? "unknown";
  return [
    `Prepared the next managed step for flow ${flowId}.`,
    `Run ID: ${runId}`,
    "",
    "Prompt:",
    typeof command.value === "string" ? command.value : String(command.value)
  ].join(`
`);
}
async function autonomyFlowResumeHandler(flowId) {
  process.stdout.write(`${await resumeAutonomyFlowText(flowId)}
`);
}
async function getAutonomyCommandText(args, options) {
  const parsed = parseAutonomyArgs(args);
  switch (parsed.type) {
    case "status":
      return getAutonomyStatusText({ deep: parsed.deep });
    case "runs":
      return getAutonomyRunsText(parsed.limit);
    case "flows":
      return getAutonomyFlowsText(parsed.limit);
    case "flow-detail":
      return getAutonomyFlowText(parsed.flowId);
    case "flow-cancel":
      return cancelAutonomyFlowText(parsed.flowId, {
        removeQueuedInMemory: options?.removeQueuedInMemory
      });
    case "flow-resume":
      return resumeAutonomyFlowText(parsed.flowId, {
        enqueueInMemory: options?.enqueueInMemory
      });
    case "usage":
      return AUTONOMY_USAGE;
  }
}
var init_autonomy = __esm(() => {
  init_autonomyFlows();
  init_autonomyRuns();
  init_autonomyStatus();
  init_autonomyCommandSpec();
  init_messageQueueManager();
});

export { parseAutonomyLimit, getAutonomyStatusText, getAutonomyDeepSectionText, autonomyStatusHandler, getAutonomyRunsText, autonomyRunsHandler, getAutonomyFlowsText, autonomyFlowsHandler, getAutonomyFlowText, autonomyFlowHandler, cancelAutonomyFlowText, autonomyFlowCancelHandler, resumeAutonomyFlowText, autonomyFlowResumeHandler, getAutonomyCommandText, init_autonomy };
