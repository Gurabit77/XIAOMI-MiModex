// @bun
import {
  __esm,
  __require
} from "./chunk-qp2qdcda.js";

// src/commands/job/job.tsx
async function call(onDone, _context, args) {
  const parts = args ? args.trim().split(/\s+/) : [];
  const sub = parts[0] || "list";
  const lines = [];
  const origLog = console.log;
  const origError = console.error;
  console.log = (...a) => lines.push(a.map(String).join(" "));
  console.error = (...a) => lines.push(a.map(String).join(" "));
  try {
    const { templatesMain } = await import("./chunk-ay626ssv.js");
    await templatesMain([sub, ...parts.slice(1)]);
  } finally {
    console.log = origLog;
    console.error = origError;
  }
  onDone(lines.join(`
`) || "Done.", { display: "system" });
  return null;
}
var init_job = () => {};
init_job();

export {
  call
};
