// @bun
import {
  __esm,
  __require
} from "./chunk-qp2qdcda.js";

// src/commands/daemon/daemon.tsx
async function call(onDone, _context, args) {
  const parts = args ? args.trim().split(/\s+/) : [];
  const sub = parts[0] || "status";
  if (sub === "attach") {
    onDone("Use `claude daemon attach` from the CLI. Attach is not available inside the REPL.", { display: "system" });
    return null;
  }
  const lines = await captureConsole(async () => {
    if (sub === "bg") {
      const bg = await import("./chunk-m3zs13mw.js");
      await bg.handleBgStart(parts.slice(1));
    } else {
      const { daemonMain } = await import("./chunk-8ge4150r.js");
      await daemonMain([sub, ...parts.slice(1)]);
    }
  });
  onDone(lines.join(`
`) || "Done.", { display: "system" });
  return null;
}
async function captureConsole(fn) {
  const lines = [];
  const origLog = console.log;
  const origError = console.error;
  console.log = (...a) => lines.push(a.map(String).join(" "));
  console.error = (...a) => lines.push(a.map(String).join(" "));
  try {
    await fn();
  } finally {
    console.log = origLog;
    console.error = origError;
  }
  return lines;
}
var init_daemon = () => {};
init_daemon();

export {
  call
};
