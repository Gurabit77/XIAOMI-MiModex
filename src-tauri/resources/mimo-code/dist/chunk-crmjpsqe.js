// @bun
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/intl.ts
function getGraphemeSegmenter() {
  if (!graphemeSegmenter) {
    graphemeSegmenter = new Intl.Segmenter(undefined, {
      granularity: "grapheme"
    });
  }
  return graphemeSegmenter;
}
function firstGrapheme(text) {
  if (!text)
    return "";
  const segments = getGraphemeSegmenter().segment(text);
  const first = segments[Symbol.iterator]().next().value;
  return first?.segment ?? "";
}
function lastGrapheme(text) {
  if (!text)
    return "";
  let last = "";
  for (const { segment } of getGraphemeSegmenter().segment(text)) {
    last = segment;
  }
  return last;
}
function getWordSegmenter() {
  if (!wordSegmenter) {
    wordSegmenter = new Intl.Segmenter(undefined, { granularity: "word" });
  }
  return wordSegmenter;
}
function getRelativeTimeFormat(style, numeric) {
  const key = `${style}:${numeric}`;
  let rtf = rtfCache.get(key);
  if (!rtf) {
    rtf = new Intl.RelativeTimeFormat("en", { style, numeric });
    rtfCache.set(key, rtf);
  }
  return rtf;
}
function getTimeZone() {
  if (!cachedTimeZone) {
    cachedTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  return cachedTimeZone;
}
function getSystemLocaleLanguage() {
  if (cachedSystemLocaleLanguage === null) {
    try {
      const locale = Intl.DateTimeFormat().resolvedOptions().locale;
      cachedSystemLocaleLanguage = new Intl.Locale(locale).language;
    } catch {
      cachedSystemLocaleLanguage = undefined;
    }
  }
  return cachedSystemLocaleLanguage;
}
var graphemeSegmenter = null, wordSegmenter = null, rtfCache, cachedTimeZone = null, cachedSystemLocaleLanguage = null;
var init_intl = __esm(() => {
  rtfCache = new Map;
});

export { getGraphemeSegmenter, firstGrapheme, lastGrapheme, getWordSegmenter, getRelativeTimeFormat, getTimeZone, getSystemLocaleLanguage, init_intl };
