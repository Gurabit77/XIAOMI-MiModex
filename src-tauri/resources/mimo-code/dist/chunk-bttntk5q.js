// @bun
import {
  getRecentActivity,
  init_logoV2Utils
} from "./chunk-y61nhd8m.js";
import"./chunk-krd7atxb.js";
import"./chunk-ktw919wt.js";
import"./chunk-qwtafr2b.js";
import"./chunk-jz6xf3ty.js";
import"./chunk-et824jj8.js";
import"./chunk-var1et7e.js";
import"./chunk-v81kv9zm.js";
import"./chunk-chmfqs2y.js";
import"./chunk-1gfk9pd3.js";
import"./chunk-2gzv8nrw.js";
import"./chunk-ehtwnxpg.js";
import"./chunk-1th1nz5d.js";
import"./chunk-x6pa9me9.js";
import"./chunk-wbtp4zy8.js";
import {
  createTask,
  getTask,
  getTasksDir,
  init_tasks,
  listTasks,
  updateTask
} from "./chunk-ypmcesxe.js";
import"./chunk-ybaawhyf.js";
import"./chunk-bhdt6k7w.js";
import"./chunk-cgfdkzhb.js";
import"./chunk-0rstde44.js";
import"./chunk-2cvt1abr.js";
import"./chunk-5ptgeqdf.js";
import"./chunk-1jvg23ym.js";
import"./chunk-akkx6jmm.js";
import"./chunk-7fht54sw.js";
import"./chunk-pfhyp451.js";
import"./chunk-25ctr1k2.js";
import"./chunk-azxwk3qa.js";
import"./chunk-2e52n52z.js";
import"./chunk-dsnwry8r.js";
import"./chunk-ps49ymvj.js";
import"./chunk-t4kcvmes.js";
import"./chunk-tas8sqfx.js";
import"./chunk-kqqj7b7y.js";
import"./chunk-edqtm6y0.js";
import"./chunk-jakzh3ae.js";
import"./chunk-wf3yck87.js";
import"./chunk-1r0yky0f.js";
import"./chunk-jtnkamme.js";
import"./chunk-92f9twfz.js";
import"./chunk-6dj3cf9s.js";
import"./chunk-dn7vyq4j.js";
import"./chunk-4jm600zv.js";
import"./chunk-vs4r0kd5.js";
import"./chunk-g57ncwpz.js";
import"./chunk-9pp18zcp.js";
import"./chunk-h1xx834r.js";
import"./chunk-p8zggt02.js";
import"./chunk-6rj8k2tr.js";
import"./chunk-x69b8r8v.js";
import"./chunk-gx4kmdam.js";
import"./chunk-b53tzh92.js";
import"./chunk-gd6w3h9n.js";
import"./chunk-1ghcng4e.js";
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
import"./chunk-4cp6193g.js";
import"./chunk-8g747a8x.js";
import"./chunk-d7886r6a.js";
import"./chunk-adnxyg7j.js";
import"./chunk-djs11qd6.js";
import"./chunk-nrv96v1h.js";
import"./chunk-gdqk4ssq.js";
import"./chunk-bwawjerw.js";
import"./chunk-p2816w9z.js";
import"./chunk-v9smspw2.js";
import"./chunk-v1kzp02e.js";
import"./chunk-x5hyyhqf.js";
import"./chunk-crmjpsqe.js";
import"./chunk-er1s76c9.js";
import"./chunk-b5wxetbv.js";
import"./chunk-f2mhrmww.js";
import"./chunk-0vkfrmqm.js";
import"./chunk-0xjaqda8.js";
import"./chunk-c84gr0s2.js";
import"./chunk-t6jhrn34.js";
import"./chunk-95xve7f8.js";
import"./chunk-jdq8jgyg.js";
import"./chunk-qcwbd71h.js";
import"./chunk-dxvkxgnf.js";
import"./chunk-w5ahy59y.js";
import"./chunk-8tnsngw2.js";
import"./chunk-jkh5s8ct.js";
import"./chunk-kwm5bf2m.js";
import"./chunk-5z28bqne.js";
import"./chunk-qajrkk97.js";
import"./chunk-rpbc3b7k.js";
import"./chunk-fbv4apne.js";
import"./chunk-j5xzpm59.js";
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
  __require
} from "./chunk-qp2qdcda.js";

// src/cli/handlers/ant.ts
init_tasks();
init_logoV2Utils();
var DEFAULT_LIST = "default";
async function taskCreateHandler(subject, opts) {
  const listId = opts.list || DEFAULT_LIST;
  const id = await createTask(listId, {
    subject,
    description: opts.description || "",
    status: "pending",
    blocks: [],
    blockedBy: []
  });
  console.log(`Created task ${id}: ${subject}`);
}
async function taskListHandler(opts) {
  const listId = opts.list || DEFAULT_LIST;
  let tasks = await listTasks(listId);
  if (opts.pending) {
    tasks = tasks.filter((t) => t.status === "pending");
  }
  if (opts.json) {
    console.log(JSON.stringify(tasks, null, 2));
    return;
  }
  if (tasks.length === 0) {
    console.log("No tasks found.");
    return;
  }
  for (const t of tasks) {
    console.log(`  [${t.status}] ${t.id}: ${t.subject}`);
    if (t.description)
      console.log(`    ${t.description}`);
    if (t.owner)
      console.log(`    owner: ${t.owner}`);
  }
}
async function taskGetHandler(id, opts) {
  const listId = opts.list || DEFAULT_LIST;
  const task = await getTask(listId, id);
  if (!task) {
    console.error(`Task not found: ${id}`);
    process.exitCode = 1;
    return;
  }
  console.log(JSON.stringify(task, null, 2));
}
async function taskUpdateHandler(id, opts) {
  const listId = opts.list || DEFAULT_LIST;
  const updates = {};
  if (opts.status)
    updates.status = opts.status;
  if (opts.subject)
    updates.subject = opts.subject;
  if (opts.description)
    updates.description = opts.description;
  if (opts.owner)
    updates.owner = opts.owner;
  if (opts.clearOwner)
    updates.owner = undefined;
  const task = await updateTask(listId, id, updates);
  if (!task) {
    console.error(`Task not found: ${id}`);
    process.exitCode = 1;
    return;
  }
  console.log(`Updated task ${id}: [${task.status}] ${task.subject}`);
}
async function taskDirHandler(opts) {
  const listId = opts.list || DEFAULT_LIST;
  console.log(getTasksDir(listId));
}
async function logHandler(logId) {
  const logs = await getRecentActivity();
  if (logId === undefined) {
    if (logs.length === 0) {
      console.log("No recent sessions.");
      return;
    }
    for (let i = 0;i < Math.min(logs.length, 20); i++) {
      const log2 = logs[i];
      const date = log2.modified ? new Date(log2.modified).toLocaleString() : "unknown";
      const title = log2.title || log2.sessionId || "untitled";
      console.log(`  ${i}: ${title}  (${date})`);
    }
    return;
  }
  const idx = typeof logId === "string" ? parseInt(logId, 10) : logId;
  const log = Number.isFinite(idx) && idx >= 0 && idx < logs.length ? logs[idx] : logs.find((l) => l.sessionId === String(logId));
  if (!log) {
    console.error(`Session not found: ${logId}`);
    process.exitCode = 1;
    return;
  }
  console.log(JSON.stringify(log, null, 2));
}
async function errorHandler(num) {
  const logs = await getRecentActivity();
  const count = num ?? 5;
  console.log(`Last ${count} sessions:`);
  for (let i = 0;i < Math.min(count, logs.length); i++) {
    const log = logs[i];
    const date = log.modified ? new Date(log.modified).toLocaleString() : "unknown";
    console.log(`  ${i}: ${log.sessionId}  (${date})`);
  }
}
async function exportHandler(source, outputFile) {
  const { writeFile, readFile } = await import("fs/promises");
  const logs = await getRecentActivity();
  const idx = parseInt(source, 10);
  let log;
  if (Number.isFinite(idx) && idx >= 0 && idx < logs.length) {
    log = logs[idx];
  } else {
    log = logs.find((l) => l.sessionId === source);
  }
  if (!log) {
    try {
      const content = await readFile(source, "utf-8");
      await writeFile(outputFile, content, "utf-8");
      console.log(`Exported ${source} \u2192 ${outputFile}`);
      return;
    } catch {
      console.error(`Source not found: ${source}`);
      process.exitCode = 1;
      return;
    }
  }
  await writeFile(outputFile, JSON.stringify(log, null, 2), "utf-8");
  console.log(`Exported session ${log.sessionId} \u2192 ${outputFile}`);
}
async function completionHandler(shell, opts, _program) {
  const { regenerateCompletionCache } = await import("./chunk-7nhr3285.js");
  if (opts.output) {
    await regenerateCompletionCache();
    console.log(`Completion cache regenerated for ${shell}.`);
  } else {
    await regenerateCompletionCache();
    console.log(`Completion cache regenerated for ${shell}.`);
  }
}
export {
  taskUpdateHandler,
  taskListHandler,
  taskGetHandler,
  taskDirHandler,
  taskCreateHandler,
  logHandler,
  exportHandler,
  errorHandler,
  completionHandler
};
