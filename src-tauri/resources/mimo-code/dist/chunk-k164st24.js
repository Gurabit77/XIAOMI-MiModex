// @bun
import {
  getLanguageDisplayName,
  getResolvedLanguage,
  init_language
} from "./chunk-e1je451e.js";
import {
  getGlobalConfig,
  init_config1 as init_config,
  saveGlobalConfig
} from "./chunk-1ghcng4e.js";
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
import"./chunk-8g747a8x.js";
import"./chunk-d7886r6a.js";
import"./chunk-djs11qd6.js";
import"./chunk-gdqk4ssq.js";
import"./chunk-p2816w9z.js";
import"./chunk-v1kzp02e.js";
import"./chunk-x5hyyhqf.js";
import"./chunk-crmjpsqe.js";
import"./chunk-er1s76c9.js";
import"./chunk-b5wxetbv.js";
import"./chunk-f2mhrmww.js";
import"./chunk-0vkfrmqm.js";
import"./chunk-0xjaqda8.js";
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
  __esm
} from "./chunk-qp2qdcda.js";

// src/commands/lang/lang.ts
async function call(onDone, _context, args) {
  const arg = args.trim().toLowerCase();
  if (!arg) {
    const pref = getGlobalConfig().preferredLanguage ?? "auto";
    const resolved2 = getResolvedLanguage();
    const suffix2 = pref === "auto" ? ` \u2192 ${getLanguageDisplayName(resolved2)}` : "";
    onDone(`Language: ${getLanguageDisplayName(pref)}${suffix2}`, {
      display: "system"
    });
    return null;
  }
  if (!VALID_LANGS.includes(arg)) {
    onDone(`Invalid language "${arg}". Use: en, zh, or auto`, {
      display: "system"
    });
    return null;
  }
  const lang = arg;
  saveGlobalConfig((current) => ({ ...current, preferredLanguage: lang }));
  const resolved = getResolvedLanguage();
  const suffix = lang === "auto" ? ` \u2192 ${getLanguageDisplayName(resolved)}` : "";
  onDone(`Language set to ${getLanguageDisplayName(lang)}${suffix}`, {
    display: "system"
  });
  return null;
}
var VALID_LANGS;
var init_lang = __esm(() => {
  init_config();
  init_language();
  VALID_LANGS = ["en", "zh", "auto"];
});
init_lang();

export {
  call
};
