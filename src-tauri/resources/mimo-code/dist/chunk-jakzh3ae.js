// @bun
import {
  init_debug,
  logForDebugging
} from "./chunk-rpbc3b7k.js";
import {
  __esm,
  __export,
  __require
} from "./chunk-qp2qdcda.js";

// src/services/skillSearch/localSearch.ts
var exports_localSearch = {};
__export(exports_localSearch, {
  tokenizeAndStem: () => tokenizeAndStem,
  tokenize: () => tokenize,
  searchSkills: () => searchSkills,
  getSkillIndex: () => getSkillIndex,
  clearSkillIndexCache: () => clearSkillIndexCache
});
function isCjk(ch) {
  return CJK_RANGE.test(ch);
}
function tokenize(text) {
  const tokens = [];
  const lower = text.toLowerCase();
  let i = 0;
  while (i < lower.length) {
    if (isCjk(lower[i])) {
      let cjkRun = "";
      while (i < lower.length && isCjk(lower[i])) {
        cjkRun += lower[i];
        i++;
      }
      for (let j = 0;j < cjkRun.length - 1; j++) {
        tokens.push(cjkRun.slice(j, j + 2));
      }
    } else if (/[a-z0-9]/.test(lower[i])) {
      let word = "";
      while (i < lower.length && /[a-z0-9\-_]/.test(lower[i])) {
        word += lower[i];
        i++;
      }
      const cleaned = word.replace(/^[-_]+|[-_]+$/g, "");
      if (cleaned && !STOP_WORDS.has(cleaned)) {
        tokens.push(cleaned);
      }
    } else {
      i++;
    }
  }
  return tokens;
}
function stem(word) {
  if (isCjk(word[0] ?? ""))
    return word;
  let s = word;
  if (s.endsWith("ing") && s.length > 5)
    s = s.slice(0, -3);
  else if (s.endsWith("tion") && s.length > 5)
    s = s.slice(0, -4);
  else if (s.endsWith("ness") && s.length > 5)
    s = s.slice(0, -4);
  else if (s.endsWith("ment") && s.length > 5)
    s = s.slice(0, -4);
  else if (s.endsWith("ers") && s.length > 4)
    s = s.slice(0, -1);
  else if (s.endsWith("er") && s.length > 4)
    s = s.slice(0, -2);
  else if (s.endsWith("es") && s.length > 4)
    s = s.slice(0, -2);
  else if (s.endsWith("s") && s.length > 3 && !s.endsWith("ss"))
    s = s.slice(0, -1);
  else if (s.endsWith("ed") && s.length > 4)
    s = s.slice(0, -2);
  else if (s.endsWith("ly") && s.length > 4)
    s = s.slice(0, -2);
  return s;
}
function tokenizeAndStem(text) {
  return tokenize(text).map(stem);
}
function computeWeightedTf(fields) {
  const weighted = new Map;
  for (const field of fields) {
    const freq = new Map;
    for (const t of field.tokens)
      freq.set(t, (freq.get(t) ?? 0) + 1);
    let max = 1;
    for (const v of freq.values())
      if (v > max)
        max = v;
    for (const [term, count] of freq) {
      const val = count / max * field.weight;
      const existing = weighted.get(term) ?? 0;
      if (val > existing)
        weighted.set(term, val);
    }
  }
  return weighted;
}
function computeIdf(index) {
  const df = new Map;
  for (const entry of index) {
    const seen = new Set;
    for (const t of entry.tokens) {
      if (!seen.has(t)) {
        df.set(t, (df.get(t) ?? 0) + 1);
        seen.add(t);
      }
    }
  }
  const N = index.length;
  const idf = new Map;
  for (const [term, count] of df) {
    idf.set(term, Math.log(N / count));
  }
  return idf;
}
function cosineSimilarity(queryTfIdf, docTfIdf) {
  let dot = 0;
  let normQ = 0;
  let normD = 0;
  for (const [term, qWeight] of queryTfIdf) {
    const dWeight = docTfIdf.get(term) ?? 0;
    dot += qWeight * dWeight;
    normQ += qWeight * qWeight;
  }
  for (const dWeight of docTfIdf.values()) {
    normD += dWeight * dWeight;
  }
  const denom = Math.sqrt(normQ) * Math.sqrt(normD);
  return denom === 0 ? 0 : dot / denom;
}
function normalizeSkillName(name) {
  return name.toLowerCase().replace(/[-_]/g, " ");
}
function splitHyphenatedName(name) {
  return name.toLowerCase().split(/[-_]/).filter((p) => p.length >= 3);
}
function clearSkillIndexCache() {
  cachedIndex = null;
  cachedIdf = null;
  cachedCwd = null;
  logForDebugging("[skill-search] index cache cleared");
}
async function getSkillIndex(cwd) {
  if (cachedIndex && cachedCwd === cwd)
    return cachedIndex;
  const { getCommands } = await import("./chunk-d1184k7b.js");
  const commands = await getCommands(cwd);
  const entries = [];
  for (const cmd of commands) {
    if (cmd.type !== "prompt")
      continue;
    if (cmd.disableModelInvocation)
      continue;
    const name = cmd.name;
    const description = cmd.description ?? "";
    const whenToUse = cmd.whenToUse;
    const allowedTools = cmd.allowedTools?.join(" ") ?? "";
    const nameTokens = tokenizeAndStem(name);
    const nameParts = splitHyphenatedName(name);
    const nameWithParts = [
      ...nameTokens,
      ...nameParts.map(stem).filter((t) => !STOP_WORDS.has(t))
    ];
    const descTokens = tokenizeAndStem(description);
    const whenTokens = tokenizeAndStem(whenToUse ?? "");
    const toolsTokens = tokenizeAndStem(allowedTools);
    const allTokens = [
      ...new Set([
        ...nameWithParts,
        ...descTokens,
        ...whenTokens,
        ...toolsTokens
      ])
    ];
    const tfVector = computeWeightedTf([
      { tokens: nameWithParts, weight: FIELD_WEIGHT.name },
      { tokens: whenTokens, weight: FIELD_WEIGHT.whenToUse },
      { tokens: descTokens, weight: FIELD_WEIGHT.description },
      { tokens: toolsTokens, weight: FIELD_WEIGHT.allowedTools }
    ]);
    entries.push({
      name,
      normalizedName: normalizeSkillName(name),
      description,
      whenToUse,
      source: cmd.source ?? "unknown",
      loadedFrom: cmd.loadedFrom,
      skillRoot: cmd.skillRoot,
      contentLength: cmd.contentLength,
      tokens: allTokens,
      tfVector
    });
  }
  const idf = computeIdf(entries);
  for (const entry of entries) {
    for (const [term, tf] of entry.tfVector) {
      entry.tfVector.set(term, tf * (idf.get(term) ?? 0));
    }
  }
  cachedIndex = entries;
  cachedIdf = idf;
  cachedCwd = cwd;
  logForDebugging(`[skill-search] indexed ${entries.length} skills from ${commands.length} commands`);
  return entries;
}
function searchSkills(query, index, limit = 5) {
  if (index.length === 0 || !query.trim())
    return [];
  const queryTokens = tokenizeAndStem(query);
  if (queryTokens.length === 0)
    return [];
  const queryTf = new Map;
  const freq = new Map;
  for (const t of queryTokens)
    freq.set(t, (freq.get(t) ?? 0) + 1);
  let max = 1;
  for (const v of freq.values())
    if (v > max)
      max = v;
  for (const [term, count] of freq)
    queryTf.set(term, count / max);
  const idf = cachedIdf ?? computeIdf(index);
  const queryTfIdf = new Map;
  for (const [term, tf] of queryTf) {
    queryTfIdf.set(term, tf * (idf.get(term) ?? 0));
  }
  const queryCjkTokens = queryTokens.filter((t) => isCjk(t[0] ?? ""));
  const queryAsciiTokens = queryTokens.filter((t) => !isCjk(t[0] ?? ""));
  const queryLower = query.toLowerCase().replace(/[-_]/g, " ");
  const results = [];
  for (const entry of index) {
    let score = cosineSimilarity(queryTfIdf, entry.tfVector);
    if (queryCjkTokens.length > 0 && score > 0) {
      const matchingCjk = queryCjkTokens.filter((t) => entry.tfVector.has(t));
      if (matchingCjk.length < CJK_MIN_BIGRAM_MATCHES) {
        const hasAsciiMatch = queryAsciiTokens.some((t) => entry.tfVector.has(t));
        if (!hasAsciiMatch)
          score = 0;
      }
    }
    if (entry.name.length >= NAME_MATCH_MIN_LENGTH) {
      if (queryLower.includes(entry.normalizedName)) {
        score = Math.max(score, 0.75);
      }
    }
    if (score >= DISPLAY_MIN_SCORE) {
      results.push({
        name: entry.name,
        description: entry.description,
        score,
        source: entry.source,
        loadedFrom: entry.loadedFrom,
        skillRoot: entry.skillRoot,
        contentLength: entry.contentLength
      });
    }
  }
  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit);
}
var STOP_WORDS, CJK_RANGE, FIELD_WEIGHT, DISPLAY_MIN_SCORE, NAME_MATCH_MIN_LENGTH = 4, CJK_MIN_BIGRAM_MATCHES = 2, cachedIndex = null, cachedIdf = null, cachedCwd = null;
var init_localSearch = __esm(() => {
  init_debug();
  STOP_WORDS = new Set([
    "a",
    "an",
    "the",
    "is",
    "are",
    "was",
    "were",
    "be",
    "been",
    "being",
    "have",
    "has",
    "had",
    "do",
    "does",
    "did",
    "will",
    "would",
    "could",
    "should",
    "may",
    "might",
    "shall",
    "can",
    "need",
    "dare",
    "ought",
    "used",
    "to",
    "of",
    "in",
    "for",
    "on",
    "with",
    "at",
    "by",
    "from",
    "as",
    "into",
    "through",
    "during",
    "before",
    "after",
    "above",
    "below",
    "between",
    "out",
    "off",
    "over",
    "under",
    "again",
    "further",
    "then",
    "once",
    "here",
    "there",
    "when",
    "where",
    "why",
    "how",
    "all",
    "each",
    "every",
    "both",
    "few",
    "more",
    "most",
    "other",
    "some",
    "such",
    "no",
    "nor",
    "not",
    "only",
    "own",
    "same",
    "so",
    "than",
    "too",
    "very",
    "just",
    "because",
    "but",
    "and",
    "or",
    "if",
    "while",
    "this",
    "that",
    "these",
    "those",
    "it",
    "its",
    "i",
    "me",
    "my",
    "we",
    "our",
    "you",
    "your",
    "he",
    "him",
    "his",
    "she",
    "her",
    "they",
    "them",
    "their",
    "what",
    "which",
    "who",
    "whom",
    "use",
    "using",
    "used"
  ]);
  CJK_RANGE = /[\u4e00-\u9fff\u3400-\u4dbf]/;
  FIELD_WEIGHT = {
    name: 3,
    whenToUse: 2,
    description: 1,
    allowedTools: 0.3
  };
  DISPLAY_MIN_SCORE = Number(process.env.SKILL_SEARCH_DISPLAY_MIN_SCORE ?? "0.10");
});

export { tokenize, tokenizeAndStem, clearSkillIndexCache, getSkillIndex, searchSkills, exports_localSearch, init_localSearch };
