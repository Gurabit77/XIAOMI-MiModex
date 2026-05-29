// @bun
import {
  init_useVoice,
  normalizeLanguageForSTT
} from "./chunk-004v1fbw.js";
import"./chunk-9v7as0jr.js";
import {
  getShortcutDisplay,
  init_changeDetector,
  init_shortcutFormat,
  settingsChangeDetector
} from "./chunk-ktw919wt.js";
import"./chunk-qwtafr2b.js";
import"./chunk-jz6xf3ty.js";
import"./chunk-et824jj8.js";
import"./chunk-var1et7e.js";
import"./chunk-v81kv9zm.js";
import"./chunk-chmfqs2y.js";
import"./chunk-1gfk9pd3.js";
import"./chunk-2gzv8nrw.js";
import"./chunk-ehtwnxpg.js";
import"./chunk-1th1nz5d.js";
import"./chunk-x6pa9me9.js";
import"./chunk-wbtp4zy8.js";
import"./chunk-ypmcesxe.js";
import"./chunk-ybaawhyf.js";
import"./chunk-bhdt6k7w.js";
import"./chunk-cgfdkzhb.js";
import"./chunk-0rstde44.js";
import"./chunk-2cvt1abr.js";
import"./chunk-5ptgeqdf.js";
import"./chunk-1jvg23ym.js";
import"./chunk-akkx6jmm.js";
import"./chunk-7fht54sw.js";
import"./chunk-pfhyp451.js";
import"./chunk-25ctr1k2.js";
import"./chunk-azxwk3qa.js";
import"./chunk-2e52n52z.js";
import"./chunk-dsnwry8r.js";
import"./chunk-ps49ymvj.js";
import"./chunk-t4kcvmes.js";
import"./chunk-tas8sqfx.js";
import"./chunk-kqqj7b7y.js";
import"./chunk-edqtm6y0.js";
import"./chunk-jakzh3ae.js";
import"./chunk-wf3yck87.js";
import {
  init_voiceModeEnabled,
  isVoiceAvailable
} from "./chunk-1r0yky0f.js";
import"./chunk-jtnkamme.js";
import"./chunk-92f9twfz.js";
import"./chunk-6dj3cf9s.js";
import"./chunk-dn7vyq4j.js";
import"./chunk-4jm600zv.js";
import"./chunk-vs4r0kd5.js";
import"./chunk-g57ncwpz.js";
import"./chunk-9pp18zcp.js";
import"./chunk-h1xx834r.js";
import"./chunk-p8zggt02.js";
import"./chunk-6rj8k2tr.js";
import"./chunk-x69b8r8v.js";
import"./chunk-gx4kmdam.js";
import"./chunk-b53tzh92.js";
import"./chunk-gd6w3h9n.js";
import {
  getGlobalConfig,
  getInitialSettings,
  init_config1 as init_config,
  init_settings1 as init_settings,
  saveGlobalConfig,
  updateSettingsForSource
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
import"./chunk-4cp6193g.js";
import"./chunk-8g747a8x.js";
import"./chunk-d7886r6a.js";
import"./chunk-adnxyg7j.js";
import"./chunk-djs11qd6.js";
import"./chunk-nrv96v1h.js";
import"./chunk-gdqk4ssq.js";
import"./chunk-bwawjerw.js";
import"./chunk-p2816w9z.js";
import"./chunk-v9smspw2.js";
import"./chunk-v1kzp02e.js";
import"./chunk-x5hyyhqf.js";
import"./chunk-crmjpsqe.js";
import"./chunk-er1s76c9.js";
import"./chunk-b5wxetbv.js";
import {
  init_analytics,
  logEvent
} from "./chunk-f2mhrmww.js";
import"./chunk-0vkfrmqm.js";
import"./chunk-0xjaqda8.js";
import"./chunk-c84gr0s2.js";
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
  __esm,
  __require
} from "./chunk-qp2qdcda.js";

// src/commands/voice/voice.ts
var LANG_HINT_MAX_SHOWS = 2, call = async (args) => {
  if (!isVoiceAvailable()) {
    return {
      type: "text",
      value: "Voice mode is not available."
    };
  }
  const currentSettings = getInitialSettings();
  const isCurrentlyEnabled = currentSettings.voiceEnabled === true;
  const providerArg = args?.trim().toLowerCase();
  if (isCurrentlyEnabled && providerArg === "doubao") {
    const result2 = updateSettingsForSource("userSettings", {
      voiceProvider: "doubao"
    });
    if (result2.error) {
      return {
        type: "text",
        value: "Failed to update settings. Check your settings file for syntax errors."
      };
    }
    settingsChangeDetector.notifyChange("userSettings");
    const key2 = getShortcutDisplay("voice:pushToTalk", "Chat", "Space");
    return {
      type: "text",
      value: `Voice mode switched to Doubao ASR. Hold ${key2} to record.`
    };
  }
  if (isCurrentlyEnabled && providerArg === "anthropic") {
    const result2 = updateSettingsForSource("userSettings", {
      voiceProvider: "anthropic"
    });
    if (result2.error) {
      return {
        type: "text",
        value: "Failed to update settings. Check your settings file for syntax errors."
      };
    }
    settingsChangeDetector.notifyChange("userSettings");
    const key2 = getShortcutDisplay("voice:pushToTalk", "Chat", "Space");
    return {
      type: "text",
      value: `Voice mode switched to Anthropic STT. Hold ${key2} to record.`
    };
  }
  if (isCurrentlyEnabled) {
    const result2 = updateSettingsForSource("userSettings", {
      voiceEnabled: false
    });
    if (result2.error) {
      return {
        type: "text",
        value: "Failed to update settings. Check your settings file for syntax errors."
      };
    }
    settingsChangeDetector.notifyChange("userSettings");
    logEvent("tengu_voice_toggled", { enabled: false });
    return {
      type: "text",
      value: "Voice mode disabled."
    };
  }
  const provider = providerArg === "doubao" ? "doubao" : "anthropic";
  const { isVoiceStreamAvailable } = await import("./chunk-4ama5txr.js");
  const { checkRecordingAvailability } = await import("./chunk-p9stfkb9.js");
  const recording = await checkRecordingAvailability();
  if (!recording.available) {
    return {
      type: "text",
      value: recording.reason ?? "Voice mode is not available in this environment."
    };
  }
  if (provider !== "doubao" && !isVoiceStreamAvailable()) {
    return {
      type: "text",
      value: "Voice mode requires a MiMo account. Please run /login to sign in."
    };
  }
  const { checkVoiceDependencies, requestMicrophonePermission } = await import("./chunk-p9stfkb9.js");
  const deps = await checkVoiceDependencies();
  if (!deps.available) {
    const hint = deps.installCommand ? `
Install audio recording tools? Run: ${deps.installCommand}` : `
Install SoX manually for audio recording.`;
    return {
      type: "text",
      value: `No audio recording tool found.${hint}`
    };
  }
  if (!await requestMicrophonePermission()) {
    let guidance;
    if (process.platform === "win32") {
      guidance = "Settings \u2192 Privacy \u2192 Microphone";
    } else if (process.platform === "linux") {
      guidance = "your system's audio settings";
    } else {
      guidance = "System Settings \u2192 Privacy & Security \u2192 Microphone";
    }
    return {
      type: "text",
      value: `Microphone access is denied. To enable it, go to ${guidance}, then run /voice again.`
    };
  }
  const result = updateSettingsForSource("userSettings", {
    voiceEnabled: true,
    ...provider === "doubao" ? { voiceProvider: "doubao" } : {}
  });
  if (result.error) {
    return {
      type: "text",
      value: "Failed to update settings. Check your settings file for syntax errors."
    };
  }
  settingsChangeDetector.notifyChange("userSettings");
  logEvent("tengu_voice_toggled", { enabled: true });
  const key = getShortcutDisplay("voice:pushToTalk", "Chat", "Space");
  let langNote = "";
  const providerLabel = provider === "doubao" ? "Doubao ASR" : "Anthropic";
  if (provider !== "doubao") {
    const stt = normalizeLanguageForSTT(currentSettings.language);
    const cfg = getGlobalConfig();
    const langChanged = cfg.voiceLangHintLastLanguage !== stt.code;
    const priorCount = langChanged ? 0 : cfg.voiceLangHintShownCount ?? 0;
    const showHint = !stt.fellBackFrom && priorCount < LANG_HINT_MAX_SHOWS;
    if (stt.fellBackFrom) {
      langNote = ` Note: "${stt.fellBackFrom}" is not a supported dictation language; using English. Change it via /config.`;
    } else if (showHint) {
      langNote = ` Dictation language: ${stt.code} (/config to change).`;
    }
    if (langChanged || showHint) {
      saveGlobalConfig((prev) => ({
        ...prev,
        voiceLangHintShownCount: priorCount + (showHint ? 1 : 0),
        voiceLangHintLastLanguage: stt.code
      }));
    }
  }
  return {
    type: "text",
    value: `Voice mode enabled (${providerLabel}). Hold ${key} to record.${langNote}`
  };
};
var init_voice = __esm(() => {
  init_useVoice();
  init_shortcutFormat();
  init_analytics();
  init_config();
  init_changeDetector();
  init_settings();
  init_voiceModeEnabled();
});
init_voice();

export {
  call
};
