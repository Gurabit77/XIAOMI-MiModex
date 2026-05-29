// @bun
import {
  getGlobalConfig,
  init_config1 as init_config
} from "./chunk-1ghcng4e.js";
import {
  getSystemLocaleLanguage,
  init_intl
} from "./chunk-crmjpsqe.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/language.ts
function getResolvedLanguage() {
  const pref = getGlobalConfig().preferredLanguage ?? "auto";
  if (pref === "en" || pref === "zh")
    return pref;
  const sysLang = getSystemLocaleLanguage();
  return sysLang === "zh" ? "zh" : "en";
}
function getLanguageDisplayName(lang) {
  return DISPLAY_NAMES[lang] ?? lang;
}
var DISPLAY_NAMES;
var init_language = __esm(() => {
  init_config();
  init_intl();
  DISPLAY_NAMES = {
    auto: "Auto (follow system)",
    en: "English",
    zh: "\u4E2D\u6587"
  };
});

export { getResolvedLanguage, getLanguageDisplayName, init_language };
