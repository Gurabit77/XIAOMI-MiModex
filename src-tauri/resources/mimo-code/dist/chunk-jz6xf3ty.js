// @bun
import {
  clearBetaHeaderLatches,
  clearSystemPromptSectionState,
  getSystemPromptSectionCache,
  init_state,
  setSystemPromptSectionCacheEntry
} from "./chunk-j5xzpm59.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/constants/systemPromptSections.ts
function systemPromptSection(name, compute) {
  return { name, compute, cacheBreak: false };
}
function DANGEROUS_uncachedSystemPromptSection(name, compute, _reason) {
  return { name, compute, cacheBreak: true };
}
async function resolveSystemPromptSections(sections) {
  const cache = getSystemPromptSectionCache();
  return Promise.all(sections.map(async (s) => {
    if (!s.cacheBreak && cache.has(s.name)) {
      return cache.get(s.name) ?? null;
    }
    const value = await s.compute();
    setSystemPromptSectionCacheEntry(s.name, value);
    return value;
  }));
}
function clearSystemPromptSections() {
  clearSystemPromptSectionState();
  clearBetaHeaderLatches();
}
var init_systemPromptSections = __esm(() => {
  init_state();
});

export { systemPromptSection, DANGEROUS_uncachedSystemPromptSection, resolveSystemPromptSections, clearSystemPromptSections, init_systemPromptSections };
