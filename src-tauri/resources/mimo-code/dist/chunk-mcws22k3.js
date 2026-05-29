// @bun
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/sanitization.ts
function partiallySanitizeUnicode(prompt) {
  let current = prompt;
  let previous = "";
  let iterations = 0;
  const MAX_ITERATIONS = 10;
  while (current !== previous && iterations < MAX_ITERATIONS) {
    previous = current;
    current = current.normalize("NFKC");
    current = current.replace(/[\p{Cf}\p{Co}\p{Cn}]/gu, "");
    current = current.replace(/[\u200B-\u200F]/g, "").replace(/[\u202A-\u202E]/g, "").replace(/[\u2066-\u2069]/g, "").replace(/[\uFEFF]/g, "").replace(/[\uE000-\uF8FF]/g, "");
    iterations++;
  }
  if (iterations >= MAX_ITERATIONS) {
    throw new Error(`Unicode sanitization reached maximum iterations (${MAX_ITERATIONS}) for input: ${prompt.slice(0, 100)}`);
  }
  return current;
}
function recursivelySanitizeUnicode(value) {
  if (typeof value === "string") {
    return partiallySanitizeUnicode(value);
  }
  if (Array.isArray(value)) {
    return value.map(recursivelySanitizeUnicode);
  }
  if (value !== null && typeof value === "object") {
    const sanitized = {};
    for (const [key, val] of Object.entries(value)) {
      sanitized[recursivelySanitizeUnicode(key)] = recursivelySanitizeUnicode(val);
    }
    return sanitized;
  }
  return value;
}
var init_sanitization = () => {};

export { partiallySanitizeUnicode, recursivelySanitizeUnicode, init_sanitization };
