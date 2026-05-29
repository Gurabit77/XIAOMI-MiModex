// @bun
import {
  init_debug,
  logForDebugging
} from "./chunk-rpbc3b7k.js";
import"./chunk-fbv4apne.js";
import"./chunk-j5xzpm59.js";
import"./chunk-50dgek10.js";
import"./chunk-d3bk85eq.js";
import"./chunk-cw8rngb2.js";
import"./chunk-hxhwzgnn.js";
import"./chunk-qx8z601m.js";
import"./chunk-cgm6758j.js";
import {
  __require
} from "./chunk-qp2qdcda.js";

// src/assistant/sessionDiscovery.ts
init_debug();
async function discoverAssistantSessions() {
  const { fetchCodeSessionsFromSessionsAPI } = await import("./chunk-xdk7dc9p.js");
  let allSessions;
  try {
    allSessions = await fetchCodeSessionsFromSessionsAPI();
  } catch (err) {
    logForDebugging(`[assistant:discovery] fetchCodeSessionsFromSessionsAPI failed: ${err}`);
    throw err;
  }
  return allSessions.filter((s) => s.status === "idle" || s.status === "working" || s.status === "waiting").map((s) => ({
    id: s.id,
    title: s.title || "Untitled",
    status: s.status,
    created_at: s.created_at ?? ""
  }));
}
export {
  discoverAssistantSessions
};
