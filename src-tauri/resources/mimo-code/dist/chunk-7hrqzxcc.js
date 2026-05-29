// @bun
import {
  appendObservation,
  init_observationStore
} from "./chunk-cvqwypap.js";
import {
  init_log,
  logError
} from "./chunk-w5ahy59y.js";
import {
  init_debug,
  logForDebugging
} from "./chunk-rpbc3b7k.js";
import {
  __esm,
  __require
} from "./chunk-qp2qdcda.js";

// src/services/skillLearning/toolEventObserver.ts
import { randomUUID } from "crypto";
function pruneEmittedTurns() {
  for (const [sessionId, turns] of emittedTurns) {
    if (turns.size > EMITTED_TURNS_SET_MAX) {
      const iter = turns.values();
      const toDrop = turns.size - EMITTED_TURNS_SET_KEEP;
      for (let i = 0;i < toDrop; i++) {
        const next = iter.next();
        if (next.done)
          break;
        turns.delete(next.value);
      }
    }
  }
  if (emittedTurns.size > EMITTED_TURNS_MAP_MAX) {
    const toDelete = emittedTurns.size - EMITTED_TURNS_MAP_KEEP;
    let deleted = 0;
    for (const key of emittedTurns.keys()) {
      if (deleted >= toDelete)
        break;
      emittedTurns.delete(key);
      deleted++;
    }
  }
}
function markTurn(sessionId, turn) {
  const seen = emittedTurns.get(sessionId) ?? new Set;
  seen.add(turn);
  emittedTurns.delete(sessionId);
  emittedTurns.set(sessionId, seen);
  pruneEmittedTurns();
}
function hasToolHookObservationsForTurn(sessionId, turn) {
  return emittedTurns.get(sessionId)?.has(turn) ?? false;
}
function resetToolHookBookkeeping() {
  emittedTurns.clear();
}
function baseObservation(ctx) {
  return {
    id: randomUUID(),
    sessionId: ctx.sessionId,
    projectId: ctx.projectId,
    projectName: ctx.projectName,
    cwd: ctx.cwd,
    timestamp: new Date().toISOString(),
    source: "tool-hook",
    turn: ctx.turn
  };
}
function _getDeps() {
  if (!_depImportCache) {
    _depImportCache = Promise.all([
      import("./chunk-3f8xw8t7.js"),
      import("./chunk-t27st4f6.js"),
      import("./chunk-20ctae8q.js")
    ]).then(([pc, fc, ro]) => ({
      resolveProjectContext: pc.resolveProjectContext,
      isSkillLearningEnabled: fc.isSkillLearningEnabled,
      RUNTIME_SESSION_ID: ro.RUNTIME_SESSION_ID,
      getRuntimeTurn: ro.getRuntimeTurn
    }));
  }
  return _depImportCache;
}
function resetToolHookDepsCache() {
  _depImportCache = undefined;
}
async function runToolCallWithSkillLearningHooks(toolName, input, callContext, invoke) {
  let ctx;
  try {
    const {
      resolveProjectContext,
      isSkillLearningEnabled,
      RUNTIME_SESSION_ID,
      getRuntimeTurn
    } = await _getDeps();
    if (!isSkillLearningEnabled()) {
      return invoke();
    }
    const project = resolveProjectContext(process.cwd());
    ctx = {
      sessionId: callContext.sessionId ?? RUNTIME_SESSION_ID,
      turn: callContext.turn ?? getRuntimeTurn(),
      projectId: project.projectId,
      projectName: project.projectName,
      cwd: project.cwd,
      project
    };
    recordToolStart(ctx, toolName, input).catch((e) => {
      logForDebugging("skill-learning: recordToolStart error");
      logError(e);
    });
  } catch (e) {
    logForDebugging("skill-learning: hook setup error");
    logError(e);
  }
  try {
    const result = await invoke();
    if (ctx) {
      recordToolComplete(ctx, toolName, result, "success").catch((e) => {
        logForDebugging("skill-learning: recordToolComplete error");
        logError(e);
      });
    }
    return result;
  } catch (error) {
    if (ctx) {
      recordToolError(ctx, toolName, error).catch((e) => {
        logForDebugging("skill-learning: recordToolError error");
        logError(e);
      });
    }
    throw error;
  }
}
async function recordToolStart(ctx, toolName, input) {
  markTurn(ctx.sessionId, ctx.turn);
  const observation = {
    ...baseObservation(ctx),
    event: "tool_start",
    toolName,
    toolInput: stringify(input)
  };
  return appendObservation(observation, { project: ctx.project });
}
async function recordToolComplete(ctx, toolName, output, outcome = "success") {
  markTurn(ctx.sessionId, ctx.turn);
  const observation = {
    ...baseObservation(ctx),
    event: "tool_complete",
    toolName,
    toolOutput: stringify(output),
    outcome
  };
  return appendObservation(observation, { project: ctx.project });
}
async function recordToolError(ctx, toolName, error) {
  markTurn(ctx.sessionId, ctx.turn);
  const observation = {
    ...baseObservation(ctx),
    event: "tool_complete",
    toolName,
    toolOutput: stringify(error),
    outcome: "failure"
  };
  return appendObservation(observation, { project: ctx.project });
}
async function recordUserCorrection(ctx, messageText) {
  markTurn(ctx.sessionId, ctx.turn);
  const observation = {
    ...baseObservation(ctx),
    event: "user_message",
    messageText
  };
  return appendObservation(observation, { project: ctx.project });
}
function stringify(value) {
  if (value === undefined || value === null)
    return;
  if (typeof value === "string")
    return value;
  try {
    return JSON.stringify(value);
  } catch {
    return String(value);
  }
}
var EMITTED_TURNS_SET_MAX = 500, EMITTED_TURNS_SET_KEEP = 250, EMITTED_TURNS_MAP_MAX = 50, EMITTED_TURNS_MAP_KEEP = 25, emittedTurns, _depImportCache;
var init_toolEventObserver = __esm(() => {
  init_observationStore();
  init_debug();
  init_log();
  emittedTurns = new Map;
});

export { pruneEmittedTurns, hasToolHookObservationsForTurn, resetToolHookBookkeeping, resetToolHookDepsCache, runToolCallWithSkillLearningHooks, recordToolStart, recordToolComplete, recordToolError, recordUserCorrection, init_toolEventObserver };
