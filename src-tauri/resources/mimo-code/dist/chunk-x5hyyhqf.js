// @bun
import {
  getGraphemeSegmenter,
  getRelativeTimeFormat,
  getTimeZone,
  init_intl
} from "./chunk-crmjpsqe.js";
import {
  init_src,
  stringWidth
} from "./chunk-er1s76c9.js";
import {
  init_analytics,
  logEvent
} from "./chunk-f2mhrmww.js";
import {
  getFsImplementation,
  init_debug,
  init_fsOperations,
  init_slowOperations,
  logForDebugging,
  writeFileSync_DEPRECATED
} from "./chunk-rpbc3b7k.js";
import {
  getSessionId,
  init_state
} from "./chunk-j5xzpm59.js";
import {
  getClaudeConfigHomeDir,
  init_envUtils,
  isEnvTruthy
} from "./chunk-hxhwzgnn.js";
import {
  __esm,
  __require
} from "./chunk-qp2qdcda.js";

// src/utils/truncate.ts
function truncatePathMiddle(path, maxLength) {
  if (stringWidth(path) <= maxLength) {
    return path;
  }
  if (maxLength <= 0) {
    return "\u2026";
  }
  if (maxLength < 5) {
    return truncateToWidth(path, maxLength);
  }
  const lastSlash = path.lastIndexOf("/");
  const filename = lastSlash >= 0 ? path.slice(lastSlash) : path;
  const directory = lastSlash >= 0 ? path.slice(0, lastSlash) : "";
  const filenameWidth = stringWidth(filename);
  if (filenameWidth >= maxLength - 1) {
    return truncateStartToWidth(path, maxLength);
  }
  const availableForDir = maxLength - 1 - filenameWidth;
  if (availableForDir <= 0) {
    return truncateStartToWidth(filename, maxLength);
  }
  const truncatedDir = truncateToWidthNoEllipsis(directory, availableForDir);
  return truncatedDir + "\u2026" + filename;
}
function truncateToWidth(text, maxWidth) {
  if (stringWidth(text) <= maxWidth)
    return text;
  if (maxWidth <= 1)
    return "\u2026";
  let width = 0;
  let result = "";
  for (const { segment } of getGraphemeSegmenter().segment(text)) {
    const segWidth = stringWidth(segment);
    if (width + segWidth > maxWidth - 1)
      break;
    result += segment;
    width += segWidth;
  }
  return result + "\u2026";
}
function truncateStartToWidth(text, maxWidth) {
  if (stringWidth(text) <= maxWidth)
    return text;
  if (maxWidth <= 1)
    return "\u2026";
  const segments = [...getGraphemeSegmenter().segment(text)];
  let width = 0;
  let startIdx = segments.length;
  for (let i = segments.length - 1;i >= 0; i--) {
    const segWidth = stringWidth(segments[i].segment);
    if (width + segWidth > maxWidth - 1)
      break;
    width += segWidth;
    startIdx = i;
  }
  return "\u2026" + segments.slice(startIdx).map((s) => s.segment).join("");
}
function truncateToWidthNoEllipsis(text, maxWidth) {
  if (stringWidth(text) <= maxWidth)
    return text;
  if (maxWidth <= 0)
    return "";
  let width = 0;
  let result = "";
  for (const { segment } of getGraphemeSegmenter().segment(text)) {
    const segWidth = stringWidth(segment);
    if (width + segWidth > maxWidth)
      break;
    result += segment;
    width += segWidth;
  }
  return result;
}
function truncate(str, maxWidth, singleLine = false) {
  if (str == null)
    return "";
  let result = str;
  if (singleLine) {
    const firstNewline = str.indexOf(`
`);
    if (firstNewline !== -1) {
      result = str.substring(0, firstNewline);
      if (stringWidth(result) + 1 > maxWidth) {
        return truncateToWidth(result, maxWidth);
      }
      return `${result}\u2026`;
    }
  }
  if (stringWidth(result) <= maxWidth) {
    return result;
  }
  return truncateToWidth(result, maxWidth);
}
var init_truncate = __esm(() => {
  init_src();
  init_intl();
});

// src/utils/format.ts
function formatFileSize(sizeInBytes) {
  const kb = sizeInBytes / 1024;
  if (kb < 1) {
    return `${sizeInBytes} bytes`;
  }
  if (kb < 1024) {
    return `${kb.toFixed(1).replace(/\.0$/, "")}KB`;
  }
  const mb = kb / 1024;
  if (mb < 1024) {
    return `${mb.toFixed(1).replace(/\.0$/, "")}MB`;
  }
  const gb = mb / 1024;
  return `${gb.toFixed(1).replace(/\.0$/, "")}GB`;
}
function formatSecondsShort(ms) {
  return `${(ms / 1000).toFixed(1)}s`;
}
function formatDuration(ms, options) {
  if (ms < 60000) {
    if (ms === 0) {
      return "0s";
    }
    if (ms < 1) {
      const s2 = (ms / 1000).toFixed(1);
      return `${s2}s`;
    }
    const s = Math.floor(ms / 1000).toString();
    return `${s}s`;
  }
  let days = Math.floor(ms / 86400000);
  let hours = Math.floor(ms % 86400000 / 3600000);
  let minutes = Math.floor(ms % 3600000 / 60000);
  let seconds = Math.round(ms % 60000 / 1000);
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  if (hours === 24) {
    hours = 0;
    days++;
  }
  const hide = options?.hideTrailingZeros;
  if (options?.mostSignificantOnly) {
    if (days > 0)
      return `${days}d`;
    if (hours > 0)
      return `${hours}h`;
    if (minutes > 0)
      return `${minutes}m`;
    return `${seconds}s`;
  }
  if (days > 0) {
    if (hide && hours === 0 && minutes === 0)
      return `${days}d`;
    if (hide && minutes === 0)
      return `${days}d ${hours}h`;
    return `${days}d ${hours}h ${minutes}m`;
  }
  if (hours > 0) {
    if (hide && minutes === 0 && seconds === 0)
      return `${hours}h`;
    if (hide && seconds === 0)
      return `${hours}h ${minutes}m`;
    return `${hours}h ${minutes}m ${seconds}s`;
  }
  if (minutes > 0) {
    if (hide && seconds === 0)
      return `${minutes}m`;
    return `${minutes}m ${seconds}s`;
  }
  return `${seconds}s`;
}
function formatNumber(number) {
  const shouldUseConsistentDecimals = number >= 1000;
  return getNumberFormatter(shouldUseConsistentDecimals).format(number).toLowerCase();
}
function formatTokens(count) {
  return formatNumber(count).replace(".0", "");
}
function formatRelativeTime(date, options = {}) {
  const { style = "narrow", numeric = "always", now = new Date } = options;
  const diffInMs = date.getTime() - now.getTime();
  const diffInSeconds = Math.trunc(diffInMs / 1000);
  const intervals = [
    { unit: "year", seconds: 31536000, shortUnit: "y" },
    { unit: "month", seconds: 2592000, shortUnit: "mo" },
    { unit: "week", seconds: 604800, shortUnit: "w" },
    { unit: "day", seconds: 86400, shortUnit: "d" },
    { unit: "hour", seconds: 3600, shortUnit: "h" },
    { unit: "minute", seconds: 60, shortUnit: "m" },
    { unit: "second", seconds: 1, shortUnit: "s" }
  ];
  for (const { unit, seconds: intervalSeconds, shortUnit } of intervals) {
    if (Math.abs(diffInSeconds) >= intervalSeconds) {
      const value = Math.trunc(diffInSeconds / intervalSeconds);
      if (style === "narrow") {
        return diffInSeconds < 0 ? `${Math.abs(value)}${shortUnit} ago` : `in ${value}${shortUnit}`;
      }
      return getRelativeTimeFormat("long", numeric).format(value, unit);
    }
  }
  if (style === "narrow") {
    return diffInSeconds <= 0 ? "0s ago" : "in 0s";
  }
  return getRelativeTimeFormat(style, numeric).format(0, "second");
}
function formatRelativeTimeAgo(date, options = {}) {
  const { now = new Date, ...restOptions } = options;
  if (date > now) {
    return formatRelativeTime(date, { ...restOptions, now });
  }
  return formatRelativeTime(date, { ...restOptions, numeric: "always", now });
}
function formatLogMetadata(log) {
  const sizeOrCount = log.fileSize !== undefined ? formatFileSize(log.fileSize) : `${log.messageCount} messages`;
  const parts = [
    formatRelativeTimeAgo(log.modified, { style: "short" }),
    ...log.gitBranch ? [log.gitBranch] : [],
    sizeOrCount
  ];
  if (log.tag) {
    parts.push(`#${log.tag}`);
  }
  if (log.agentSetting) {
    parts.push(`@${log.agentSetting}`);
  }
  if (log.prNumber) {
    parts.push(log.prRepository ? `${log.prRepository}#${log.prNumber}` : `#${log.prNumber}`);
  }
  return parts.join(" \xB7 ");
}
function formatResetTime(timestampInSeconds, showTimezone = false, showTime = true) {
  if (!timestampInSeconds)
    return;
  const date = new Date(timestampInSeconds * 1000);
  const now = new Date;
  const minutes = date.getMinutes();
  const hoursUntilReset = (date.getTime() - now.getTime()) / (1000 * 60 * 60);
  if (hoursUntilReset > 24) {
    const dateOptions = {
      month: "short",
      day: "numeric",
      hour: showTime ? "numeric" : undefined,
      minute: !showTime || minutes === 0 ? undefined : "2-digit",
      hour12: showTime ? true : undefined
    };
    if (date.getFullYear() !== now.getFullYear()) {
      dateOptions.year = "numeric";
    }
    const dateString = date.toLocaleString("en-US", dateOptions);
    return dateString.replace(/ ([AP]M)/i, (_match, ampm) => ampm.toLowerCase()) + (showTimezone ? ` (${getTimeZone()})` : "");
  }
  const timeString = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: minutes === 0 ? undefined : "2-digit",
    hour12: true
  });
  return timeString.replace(/ ([AP]M)/i, (_match, ampm) => ampm.toLowerCase()) + (showTimezone ? ` (${getTimeZone()})` : "");
}
function formatResetText(resetsAt, showTimezone = false, showTime = true) {
  const dt = new Date(resetsAt);
  return `${formatResetTime(Math.floor(dt.getTime() / 1000), showTimezone, showTime)}`;
}
var numberFormatterForConsistentDecimals = null, numberFormatterForInconsistentDecimals = null, getNumberFormatter = (useConsistentDecimals) => {
  if (useConsistentDecimals) {
    if (!numberFormatterForConsistentDecimals) {
      numberFormatterForConsistentDecimals = new Intl.NumberFormat("en-US", {
        notation: "compact",
        maximumFractionDigits: 1,
        minimumFractionDigits: 1
      });
    }
    return numberFormatterForConsistentDecimals;
  } else {
    if (!numberFormatterForInconsistentDecimals) {
      numberFormatterForInconsistentDecimals = new Intl.NumberFormat("en-US", {
        notation: "compact",
        maximumFractionDigits: 1,
        minimumFractionDigits: 0
      });
    }
    return numberFormatterForInconsistentDecimals;
  }
};
var init_format = __esm(() => {
  init_intl();
  init_truncate();
});

// src/utils/profilerBase.ts
function getPerformance() {
  if (!performance) {
    performance = __require("perf_hooks").performance;
  }
  return performance;
}
function formatMs(ms) {
  return ms.toFixed(3);
}
function formatTimelineLine(totalMs, deltaMs, name, memory, totalPad, deltaPad, extra = "") {
  const memInfo = memory ? ` | RSS: ${formatFileSize(memory.rss)}, Heap: ${formatFileSize(memory.heapUsed)}` : "";
  return `[+${formatMs(totalMs).padStart(totalPad)}ms] (+${formatMs(deltaMs).padStart(deltaPad)}ms) ${name}${extra}${memInfo}`;
}
var performance = null;
var init_profilerBase = __esm(() => {
  init_format();
});

// src/utils/startupProfiler.ts
import { dirname, join } from "path";
function profileCheckpoint(name) {
  if (!SHOULD_PROFILE)
    return;
  const perf = getPerformance();
  perf.mark(name);
  if (DETAILED_PROFILING) {
    memorySnapshots.push(process.memoryUsage());
  }
}
function getReport() {
  if (!DETAILED_PROFILING) {
    return "Startup profiling not enabled";
  }
  const perf = getPerformance();
  const marks = perf.getEntriesByType("mark");
  if (marks.length === 0) {
    return "No profiling checkpoints recorded";
  }
  const lines = [];
  lines.push("=".repeat(80));
  lines.push("STARTUP PROFILING REPORT");
  lines.push("=".repeat(80));
  lines.push("");
  let prevTime = 0;
  for (const [i, mark] of marks.entries()) {
    lines.push(formatTimelineLine(mark.startTime, mark.startTime - prevTime, mark.name, memorySnapshots[i], 8, 7));
    prevTime = mark.startTime;
  }
  const lastMark = marks[marks.length - 1];
  lines.push("");
  lines.push(`Total startup time: ${formatMs(lastMark?.startTime ?? 0)}ms`);
  lines.push("=".repeat(80));
  return lines.join(`
`);
}
function profileReport() {
  if (reported)
    return;
  reported = true;
  logStartupPerf();
  if (DETAILED_PROFILING) {
    const path = getStartupPerfLogPath();
    const dir = dirname(path);
    const fs = getFsImplementation();
    fs.mkdirSync(dir);
    writeFileSync_DEPRECATED(path, getReport(), {
      encoding: "utf8",
      flush: true
    });
    logForDebugging("Startup profiling report:");
    logForDebugging(getReport());
  }
}
function isDetailedProfilingEnabled() {
  return DETAILED_PROFILING;
}
function getStartupPerfLogPath() {
  return join(getClaudeConfigHomeDir(), "startup-perf", `${getSessionId()}.txt`);
}
function logStartupPerf() {
  if (!STATSIG_LOGGING_SAMPLED)
    return;
  const perf = getPerformance();
  const marks = perf.getEntriesByType("mark");
  if (marks.length === 0)
    return;
  const checkpointTimes = new Map;
  for (const mark of marks) {
    checkpointTimes.set(mark.name, mark.startTime);
  }
  const metadata = {};
  for (const [phaseName, [startCheckpoint, endCheckpoint]] of Object.entries(PHASE_DEFINITIONS)) {
    const startTime = checkpointTimes.get(startCheckpoint);
    const endTime = checkpointTimes.get(endCheckpoint);
    if (startTime !== undefined && endTime !== undefined) {
      metadata[`${phaseName}_ms`] = Math.round(endTime - startTime);
    }
  }
  metadata.checkpoint_count = marks.length;
  logEvent("tengu_startup_perf", metadata);
}
var DETAILED_PROFILING, STATSIG_SAMPLE_RATE = 0.005, STATSIG_LOGGING_SAMPLED, SHOULD_PROFILE, memorySnapshots, PHASE_DEFINITIONS, reported = false;
var init_startupProfiler = __esm(() => {
  init_state();
  init_analytics();
  init_debug();
  init_envUtils();
  init_fsOperations();
  init_profilerBase();
  init_slowOperations();
  DETAILED_PROFILING = isEnvTruthy(process.env.CLAUDE_CODE_PROFILE_STARTUP);
  STATSIG_LOGGING_SAMPLED = process.env.USER_TYPE === "ant" || Math.random() < STATSIG_SAMPLE_RATE;
  SHOULD_PROFILE = DETAILED_PROFILING || STATSIG_LOGGING_SAMPLED;
  memorySnapshots = [];
  PHASE_DEFINITIONS = {
    import_time: ["cli_entry", "main_tsx_imports_loaded"],
    init_time: ["init_function_start", "init_function_end"],
    settings_time: ["eagerLoadSettings_start", "eagerLoadSettings_end"],
    total_time: ["cli_entry", "main_after_run"]
  };
  if (SHOULD_PROFILE) {
    profileCheckpoint("profiler_initialized");
  }
});

export { truncatePathMiddle, truncateToWidth, truncateStartToWidth, truncateToWidthNoEllipsis, truncate, init_truncate, formatFileSize, formatSecondsShort, formatDuration, formatNumber, formatTokens, formatRelativeTime, formatRelativeTimeAgo, formatLogMetadata, formatResetTime, formatResetText, init_format, getPerformance, formatMs, formatTimelineLine, init_profilerBase, profileCheckpoint, profileReport, isDetailedProfilingEnabled, getStartupPerfLogPath, logStartupPerf, init_startupProfiler };
