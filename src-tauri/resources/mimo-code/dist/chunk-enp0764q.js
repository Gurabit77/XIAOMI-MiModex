// @bun
import {
  getDesktopPath,
  init_file
} from "./chunk-1ghcng4e.js";
import"./chunk-pz9t24tq.js";
import"./chunk-4efha55s.js";
import"./chunk-t7f7dp4k.js";
import"./chunk-zwarn9h7.js";
import"./chunk-b127reh2.js";
import"./chunk-et54q618.js";
import"./chunk-pe9b769s.js";
import"./chunk-64c1avct.js";
import"./chunk-8g5pe1gr.js";
import"./chunk-0rbpfkda.js";
import"./chunk-gnw2dwca.js";
import"./chunk-wbmn1xar.js";
import"./chunk-3c25bcsw.js";
import"./chunk-nw7v8w65.js";
import"./chunk-xhesahm0.js";
import"./chunk-rh5a2rg9.js";
import"./chunk-8g747a8x.js";
import"./chunk-d7886r6a.js";
import"./chunk-djs11qd6.js";
import"./chunk-gdqk4ssq.js";
import"./chunk-p2816w9z.js";
import"./chunk-v1kzp02e.js";
import"./chunk-x5hyyhqf.js";
import"./chunk-crmjpsqe.js";
import"./chunk-er1s76c9.js";
import"./chunk-b5wxetbv.js";
import {
  init_analytics,
  logEvent
} from "./chunk-f2mhrmww.js";
import"./chunk-0vkfrmqm.js";
import"./chunk-0xjaqda8.js";
import"./chunk-t6jhrn34.js";
import"./chunk-95xve7f8.js";
import"./chunk-jdq8jgyg.js";
import"./chunk-qcwbd71h.js";
import"./chunk-dxvkxgnf.js";
import {
  init_log,
  logError
} from "./chunk-w5ahy59y.js";
import"./chunk-8tnsngw2.js";
import"./chunk-jkh5s8ct.js";
import"./chunk-kwm5bf2m.js";
import"./chunk-5z28bqne.js";
import"./chunk-qajrkk97.js";
import {
  getFsImplementation,
  init_debug,
  init_errors,
  init_fsOperations,
  init_slowOperations,
  jsonStringify,
  logForDebugging,
  toError
} from "./chunk-rpbc3b7k.js";
import"./chunk-fbv4apne.js";
import {
  getSessionId,
  init_state
} from "./chunk-j5xzpm59.js";
import"./chunk-50dgek10.js";
import"./chunk-7wm5s02e.js";
import"./chunk-d3bk85eq.js";
import"./chunk-cw8rngb2.js";
import"./chunk-hxhwzgnn.js";
import"./chunk-qx8z601m.js";
import"./chunk-cgm6758j.js";
import"./chunk-3v4d4h0t.js";
import"./chunk-8pn8tvgg.js";
import"./chunk-netzwgv1.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/heapDumpService.ts
import { createWriteStream, writeFileSync } from "fs";
import { readdir, readFile, writeFile } from "fs/promises";
import { join } from "path";
import { pipeline } from "stream/promises";
import {
  getHeapSnapshot,
  getHeapSpaceStatistics,
  getHeapStatistics
} from "v8";
async function captureMemoryDiagnostics(trigger, dumpNumber = 0) {
  const usage = process.memoryUsage();
  const heapStats = getHeapStatistics();
  const resourceUsage = process.resourceUsage();
  const uptimeSeconds = process.uptime();
  let heapSpaceStats;
  try {
    heapSpaceStats = getHeapSpaceStatistics();
  } catch {}
  const activeHandles = process._getActiveHandles().length;
  const activeRequests = process._getActiveRequests().length;
  let openFileDescriptors;
  try {
    openFileDescriptors = (await readdir("/proc/self/fd")).length;
  } catch {}
  let smapsRollup;
  try {
    smapsRollup = await readFile("/proc/self/smaps_rollup", "utf8");
  } catch {}
  const nativeMemory = usage.rss - usage.heapUsed;
  const bytesPerSecond = uptimeSeconds > 0 ? usage.rss / uptimeSeconds : 0;
  const mbPerHour = bytesPerSecond * 3600 / (1024 * 1024);
  const potentialLeaks = [];
  if (heapStats.number_of_detached_contexts > 0) {
    potentialLeaks.push(`${heapStats.number_of_detached_contexts} detached context(s) - possible iframe/context leak`);
  }
  if (activeHandles > 100) {
    potentialLeaks.push(`${activeHandles} active handles - possible timer/socket leak`);
  }
  if (nativeMemory > usage.heapUsed) {
    potentialLeaks.push("Native memory > heap - leak may be in native addons (node-pty, sharp, etc.)");
  }
  if (mbPerHour > 100) {
    potentialLeaks.push(`High memory growth rate: ${mbPerHour.toFixed(1)} MB/hour`);
  }
  if (openFileDescriptors && openFileDescriptors > 500) {
    potentialLeaks.push(`${openFileDescriptors} open file descriptors - possible file/socket leak`);
  }
  return {
    timestamp: new Date().toISOString(),
    sessionId: getSessionId(),
    trigger,
    dumpNumber,
    uptimeSeconds,
    memoryUsage: {
      heapUsed: usage.heapUsed,
      heapTotal: usage.heapTotal,
      external: usage.external,
      arrayBuffers: usage.arrayBuffers,
      rss: usage.rss
    },
    memoryGrowthRate: {
      bytesPerSecond,
      mbPerHour
    },
    v8HeapStats: {
      heapSizeLimit: heapStats.heap_size_limit,
      mallocedMemory: heapStats.malloced_memory,
      peakMallocedMemory: heapStats.peak_malloced_memory,
      detachedContexts: heapStats.number_of_detached_contexts,
      nativeContexts: heapStats.number_of_native_contexts
    },
    v8HeapSpaces: heapSpaceStats?.map((space) => ({
      name: space.space_name,
      size: space.space_size,
      used: space.space_used_size,
      available: space.space_available_size
    })),
    resourceUsage: {
      maxRSS: resourceUsage.maxRSS * 1024,
      userCPUTime: resourceUsage.userCPUTime,
      systemCPUTime: resourceUsage.systemCPUTime
    },
    activeHandles,
    activeRequests,
    openFileDescriptors,
    analysis: {
      potentialLeaks,
      recommendation: potentialLeaks.length > 0 ? `WARNING: ${potentialLeaks.length} potential leak indicator(s) found. See potentialLeaks array.` : "No obvious leak indicators. Check heap snapshot for retained objects."
    },
    smapsRollup,
    platform: process.platform,
    nodeVersion: process.version,
    ccVersion: "1.0.0"
  };
}
async function performHeapDump(trigger = "manual", dumpNumber = 0) {
  try {
    const sessionId = getSessionId();
    const diagnostics = await captureMemoryDiagnostics(trigger, dumpNumber);
    const toGB = (bytes) => (bytes / 1024 / 1024 / 1024).toFixed(3);
    logForDebugging(`[HeapDump] Memory state:
  heapUsed: ${toGB(diagnostics.memoryUsage.heapUsed)} GB (in snapshot)
  external: ${toGB(diagnostics.memoryUsage.external)} GB (NOT in snapshot)
  rss: ${toGB(diagnostics.memoryUsage.rss)} GB (total process)
  ${diagnostics.analysis.recommendation}`);
    const dumpDir = getDesktopPath();
    await getFsImplementation().mkdir(dumpDir);
    const suffix = dumpNumber > 0 ? `-dump${dumpNumber}` : "";
    const heapFilename = `${sessionId}${suffix}.heapsnapshot`;
    const diagFilename = `${sessionId}${suffix}-diagnostics.json`;
    const heapPath = join(dumpDir, heapFilename);
    const diagPath = join(dumpDir, diagFilename);
    await writeFile(diagPath, jsonStringify(diagnostics, null, 2), {
      mode: 384
    });
    logForDebugging(`[HeapDump] Diagnostics written to ${diagPath}`);
    await writeHeapSnapshot(heapPath);
    logForDebugging(`[HeapDump] Heap dump written to ${heapPath}`);
    logEvent("tengu_heap_dump", {
      triggerManual: trigger === "manual",
      triggerAuto15GB: trigger === "auto-1.5GB",
      dumpNumber,
      success: true
    });
    return { success: true, heapPath, diagPath };
  } catch (err) {
    const error = toError(err);
    logError(error);
    logEvent("tengu_heap_dump", {
      triggerManual: trigger === "manual",
      triggerAuto15GB: trigger === "auto-1.5GB",
      dumpNumber,
      success: false
    });
    return { success: false, error: error.message };
  }
}
async function writeHeapSnapshot(filepath) {
  if (typeof Bun !== "undefined") {
    writeFileSync(filepath, Bun.generateHeapSnapshot("v8", "arraybuffer"), {
      mode: 384
    });
    Bun.gc(true);
    return;
  }
  const writeStream = createWriteStream(filepath, { mode: 384 });
  const heapSnapshotStream = getHeapSnapshot();
  await pipeline(heapSnapshotStream, writeStream);
}
var init_heapDumpService = __esm(() => {
  init_state();
  init_analytics();
  init_debug();
  init_errors();
  init_file();
  init_fsOperations();
  init_log();
  init_slowOperations();
});

// src/commands/heapdump/heapdump.ts
async function call() {
  const result = await performHeapDump();
  if (!result.success) {
    return {
      type: "text",
      value: `Failed to create heap dump: ${result.error}`
    };
  }
  return {
    type: "text",
    value: `${result.heapPath}
${result.diagPath}`
  };
}
var init_heapdump = __esm(() => {
  init_heapDumpService();
});
init_heapdump();

export {
  call
};
