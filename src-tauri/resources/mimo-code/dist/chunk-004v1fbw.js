// @bun
import {
  connectVoiceStream,
  init_voiceStreamSTT,
  isVoiceStreamAvailable
} from "./chunk-9v7as0jr.js";
import {
  init_voice,
  useSetVoiceState
} from "./chunk-ktw919wt.js";
import {
  getInitialSettings,
  init_settings1 as init_settings
} from "./chunk-1ghcng4e.js";
import {
  init_sleep,
  sleep
} from "./chunk-8g5pe1gr.js";
import {
  getSystemLocaleLanguage,
  init_intl
} from "./chunk-crmjpsqe.js";
import {
  init_src,
  useTerminalFocus
} from "./chunk-er1s76c9.js";
import {
  require_react
} from "./chunk-b5wxetbv.js";
import {
  init_analytics,
  logEvent
} from "./chunk-f2mhrmww.js";
import {
  getBranch,
  init_git
} from "./chunk-t6jhrn34.js";
import {
  init_log,
  logError
} from "./chunk-w5ahy59y.js";
import {
  init_debug,
  init_errors,
  logForDebugging,
  toError
} from "./chunk-rpbc3b7k.js";
import {
  getProjectRoot,
  init_state
} from "./chunk-j5xzpm59.js";
import {
  getClaudeConfigHomeDir,
  init_envUtils
} from "./chunk-hxhwzgnn.js";
import {
  __esm,
  __export,
  __require,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/services/voiceKeyterms.ts
import { basename } from "path";
function splitIdentifier(name) {
  return name.replace(/([a-z])([A-Z])/g, "$1 $2").split(/[-_./\s]+/).map((w) => w.trim()).filter((w) => w.length > 2 && w.length <= 20);
}
function fileNameWords(filePath) {
  const stem = basename(filePath).replace(/\.[^.]+$/, "");
  return splitIdentifier(stem);
}
async function getVoiceKeyterms(recentFiles) {
  const terms = new Set(GLOBAL_KEYTERMS);
  try {
    const projectRoot = getProjectRoot();
    if (projectRoot) {
      const name = basename(projectRoot);
      if (name.length > 2 && name.length <= 50) {
        terms.add(name);
      }
    }
  } catch {}
  try {
    const branch = await getBranch();
    if (branch) {
      for (const word of splitIdentifier(branch)) {
        terms.add(word);
      }
    }
  } catch {}
  if (recentFiles) {
    for (const filePath of recentFiles) {
      if (terms.size >= MAX_KEYTERMS)
        break;
      for (const word of fileNameWords(filePath)) {
        terms.add(word);
      }
    }
  }
  return [...terms].slice(0, MAX_KEYTERMS);
}
var GLOBAL_KEYTERMS, MAX_KEYTERMS = 50;
var init_voiceKeyterms = __esm(() => {
  init_state();
  init_git();
  GLOBAL_KEYTERMS = [
    "MCP",
    "symlink",
    "grep",
    "regex",
    "localhost",
    "codebase",
    "TypeScript",
    "JSON",
    "OAuth",
    "webhook",
    "gRPC",
    "dotfiles",
    "subagent",
    "worktree"
  ];
});

// src/services/doubaoSTT.ts
import { join } from "path";
function isDoubaoAvailableSync() {
  if (doubaoAvailable !== null)
    return doubaoAvailable;
  return true;
}
async function connectDoubaoStream(callbacks, _options) {
  let doubaoAsr;
  try {
    doubaoAsr = await import("./chunk-8bfs8phz.js");
  } catch {
    logError(new Error("[doubao-asr] Failed to import doubaoime-asr package"));
    callbacks.onError("doubaoime-asr package is not installed. Install it with: bun add doubaoime-asr", { fatal: true });
    return null;
  }
  const { transcribeRealtime, ASRConfig, ResponseType } = doubaoAsr;
  const queue = new AudioChunkQueue;
  let finalized = false;
  const finalizeHandle = { resolve: null };
  const connection = {
    send(audioChunk) {
      if (finalized)
        return;
      queue.push(new Uint8Array(audioChunk.buffer, audioChunk.byteOffset, audioChunk.byteLength));
    },
    finalize() {
      if (finalized)
        return Promise.resolve("ws_already_closed");
      finalized = true;
      queue.push(null);
      logForDebugging("[doubao-asr] Finalize \u2014 resolving immediately");
      return Promise.resolve("post_closestream_endpoint");
    },
    close() {
      finalized = true;
      queue.abort();
      const r = finalizeHandle.resolve;
      finalizeHandle.resolve = null;
      if (r)
        r("ws_close");
      callbacks.onClose();
    },
    isConnected() {
      return true;
    }
  };
  const config = new ASRConfig({
    credentialPath: join(getClaudeConfigHomeDir(), "tts", "doubao", "credentials.json")
  });
  try {
    await config.ensureCredentials();
  } catch (err) {
    logError(new Error(`[doubao-asr] Credential initialization failed: ${String(err)}`));
    callbacks.onError(`Doubao ASR \u51ED\u8BC1\u521D\u59CB\u5316\u5931\u8D25: ${String(err)}`, { fatal: true });
    return null;
  }
  logForDebugging("[doubao-asr] Firing onReady immediately");
  callbacks.onReady(connection);
  (async () => {
    try {
      const audioSource = queue;
      const gen = transcribeRealtime(audioSource, { config });
      for await (const resp of gen) {
        if (finalized && resp.type !== ResponseType.FINAL_RESULT && resp.type !== ResponseType.SESSION_FINISHED) {
          continue;
        }
        switch (resp.type) {
          case ResponseType.SESSION_STARTED:
            logForDebugging("[doubao-asr] Session started");
            break;
          case ResponseType.VAD_START:
            logForDebugging("[doubao-asr] VAD detected speech start");
            break;
          case ResponseType.INTERIM_RESULT:
            if (resp.text) {
              callbacks.onTranscript(resp.text, false);
            }
            break;
          case ResponseType.FINAL_RESULT:
            if (resp.text) {
              callbacks.onTranscript(resp.text, true);
            }
            break;
          case ResponseType.ERROR:
            logError(new Error(`[doubao-asr] Error: ${resp.errorMsg}`));
            if (!finalized) {
              callbacks.onError(resp.errorMsg || "Doubao ASR \u8BC6\u522B\u9519\u8BEF");
            }
            break;
          case ResponseType.SESSION_FINISHED:
            logForDebugging("[doubao-asr] Session finished");
            break;
          default:
            break;
        }
      }
      const r = finalizeHandle.resolve;
      finalizeHandle.resolve = null;
      if (r)
        r("post_closestream_endpoint");
    } catch (err) {
      logError(new Error(`[doubao-asr] Stream error: ${String(err)}`));
      if (!finalized) {
        callbacks.onError(`Doubao ASR \u8FDE\u63A5\u9519\u8BEF: ${String(err)}`);
      }
      const r2 = finalizeHandle.resolve;
      finalizeHandle.resolve = null;
      if (r2)
        r2("ws_close");
    }
  })();
  return connection;
}
var AudioChunkQueue, doubaoAvailable = null;
var init_doubaoSTT = __esm(() => {
  init_debug();
  init_envUtils();
  init_log();
  AudioChunkQueue = class AudioChunkQueue {
    chunks = [];
    waiting = null;
    done = false;
    push(chunk) {
      if (this.done)
        return;
      if (chunk === null) {
        this.done = true;
        if (this.waiting) {
          const resolve = this.waiting;
          this.waiting = null;
          resolve({ value: undefined, done: true });
        }
        return;
      }
      if (this.waiting) {
        const resolve = this.waiting;
        this.waiting = null;
        resolve({ value: chunk, done: false });
      } else {
        this.chunks.push(chunk);
      }
    }
    abort() {
      this.done = true;
      this.chunks.length = 0;
      if (this.waiting) {
        const resolve = this.waiting;
        this.waiting = null;
        resolve({ value: undefined, done: true });
      }
    }
    [Symbol.asyncIterator]() {
      return {
        next: async () => {
          if (this.chunks.length > 0) {
            const chunk = this.chunks.shift();
            return { value: chunk, done: false };
          }
          if (this.done) {
            return { value: undefined, done: true };
          }
          return new Promise((resolve) => {
            this.waiting = resolve;
          });
        }
      };
    }
  };
});

// src/hooks/useVoice.ts
var exports_useVoice = {};
__export(exports_useVoice, {
  useVoice: () => useVoice,
  normalizeLanguageForSTT: () => normalizeLanguageForSTT,
  computeLevel: () => computeLevel,
  FIRST_PRESS_FALLBACK_MS: () => FIRST_PRESS_FALLBACK_MS
});
function isDoubaoProvider() {
  return getInitialSettings().voiceProvider === "doubao";
}
function normalizeLanguageForSTT(language) {
  if (!language)
    return { code: DEFAULT_STT_LANGUAGE };
  const lower = language.toLowerCase().trim();
  if (!lower)
    return { code: DEFAULT_STT_LANGUAGE };
  if (SUPPORTED_LANGUAGE_CODES.has(lower))
    return { code: lower };
  const fromName = LANGUAGE_NAME_TO_CODE[lower];
  if (fromName)
    return { code: fromName };
  const base = lower.split("-")[0];
  if (base && SUPPORTED_LANGUAGE_CODES.has(base))
    return { code: base };
  return { code: DEFAULT_STT_LANGUAGE, fellBackFrom: language };
}
function computeLevel(chunk) {
  const samples = chunk.length >> 1;
  if (samples === 0)
    return 0;
  let sumSq = 0;
  for (let i = 0;i < chunk.length - 1; i += 2) {
    const sample = (chunk[i] | chunk[i + 1] << 8) << 16 >> 16;
    sumSq += sample * sample;
  }
  const rms = Math.sqrt(sumSq / samples);
  const normalized = Math.min(rms / 2000, 1);
  return Math.sqrt(normalized);
}
function useVoice({
  onTranscript,
  onError,
  enabled,
  focusMode
}) {
  const [state, setState] = import_react.useState("idle");
  const stateRef = import_react.useRef("idle");
  const connectionRef = import_react.useRef(null);
  const accumulatedRef = import_react.useRef("");
  const onTranscriptRef = import_react.useRef(onTranscript);
  const onErrorRef = import_react.useRef(onError);
  const cleanupTimerRef = import_react.useRef(null);
  const releaseTimerRef = import_react.useRef(null);
  const seenRepeatRef = import_react.useRef(false);
  const repeatFallbackTimerRef = import_react.useRef(null);
  const focusTriggeredRef = import_react.useRef(false);
  const focusSilenceTimerRef = import_react.useRef(null);
  const silenceTimedOutRef = import_react.useRef(false);
  const recordingStartRef = import_react.useRef(0);
  const sessionGenRef = import_react.useRef(0);
  const retryUsedRef = import_react.useRef(false);
  const fullAudioRef = import_react.useRef([]);
  const silentDropRetriedRef = import_react.useRef(false);
  const attemptGenRef = import_react.useRef(0);
  const focusFlushedCharsRef = import_react.useRef(0);
  const hasAudioSignalRef = import_react.useRef(false);
  const everConnectedRef = import_react.useRef(false);
  const audioLevelsRef = import_react.useRef([]);
  const isFocused = useTerminalFocus();
  const setVoiceState = useSetVoiceState();
  onTranscriptRef.current = onTranscript;
  onErrorRef.current = onError;
  function updateState(newState) {
    stateRef.current = newState;
    setState(newState);
    setVoiceState((prev) => {
      if (prev.voiceState === newState)
        return prev;
      return { ...prev, voiceState: newState };
    });
  }
  const cleanup = import_react.useCallback(() => {
    sessionGenRef.current++;
    if (cleanupTimerRef.current) {
      clearTimeout(cleanupTimerRef.current);
      cleanupTimerRef.current = null;
    }
    if (releaseTimerRef.current) {
      clearTimeout(releaseTimerRef.current);
      releaseTimerRef.current = null;
    }
    if (repeatFallbackTimerRef.current) {
      clearTimeout(repeatFallbackTimerRef.current);
      repeatFallbackTimerRef.current = null;
    }
    if (focusSilenceTimerRef.current) {
      clearTimeout(focusSilenceTimerRef.current);
      focusSilenceTimerRef.current = null;
    }
    silenceTimedOutRef.current = false;
    voiceModule?.stopRecording();
    if (connectionRef.current) {
      connectionRef.current.close();
      connectionRef.current = null;
    }
    accumulatedRef.current = "";
    audioLevelsRef.current = [];
    fullAudioRef.current = [];
    setVoiceState((prev) => {
      if (prev.voiceInterimTranscript === "" && !prev.voiceAudioLevels.length)
        return prev;
      return { ...prev, voiceInterimTranscript: "", voiceAudioLevels: [] };
    });
  }, [setVoiceState]);
  function finishRecording() {
    logForDebugging("[voice] finishRecording: stopping recording, transitioning to processing");
    attemptGenRef.current++;
    const focusTriggered = focusTriggeredRef.current;
    focusTriggeredRef.current = false;
    updateState("processing");
    voiceModule?.stopRecording();
    const recordingDurationMs = Date.now() - recordingStartRef.current;
    const hadAudioSignal = hasAudioSignalRef.current;
    const retried = retryUsedRef.current;
    const focusFlushedChars = focusFlushedCharsRef.current;
    const wsConnected = everConnectedRef.current;
    const myGen = sessionGenRef.current;
    const isStale = () => sessionGenRef.current !== myGen;
    logForDebugging("[voice] Recording stopped");
    const finalizePromise = connectionRef.current ? connectionRef.current.finalize() : Promise.resolve(undefined);
    finalizePromise.then(async (finalizeSource) => {
      if (isStale())
        return;
      if (finalizeSource === "no_data_timeout" && hadAudioSignal && wsConnected && !focusTriggered && focusFlushedChars === 0 && accumulatedRef.current.trim() === "" && !silentDropRetriedRef.current && fullAudioRef.current.length > 0) {
        silentDropRetriedRef.current = true;
        logForDebugging(`[voice] Silent-drop detected (no_data_timeout, ${String(fullAudioRef.current.length)} chunks); replaying on fresh connection`);
        logEvent("tengu_voice_silent_drop_replay", {
          recordingDurationMs,
          chunkCount: fullAudioRef.current.length
        });
        if (connectionRef.current) {
          connectionRef.current.close();
          connectionRef.current = null;
        }
        const replayBuffer = fullAudioRef.current;
        await sleep(250);
        if (isStale())
          return;
        const stt = normalizeLanguageForSTT(getInitialSettings().language);
        const keyterms = await getVoiceKeyterms();
        if (isStale())
          return;
        await new Promise((resolve) => {
          connectVoiceStream({
            onTranscript: (t, isFinal) => {
              if (isStale())
                return;
              if (isFinal && t.trim()) {
                if (accumulatedRef.current)
                  accumulatedRef.current += " ";
                accumulatedRef.current += t.trim();
              }
            },
            onError: () => resolve(),
            onClose: () => {},
            onReady: (conn) => {
              if (isStale()) {
                conn.close();
                resolve();
                return;
              }
              connectionRef.current = conn;
              const SLICE = 32000;
              let slice = [];
              let bytes = 0;
              for (const c of replayBuffer) {
                if (bytes > 0 && bytes + c.length > SLICE) {
                  conn.send(Buffer.concat(slice));
                  slice = [];
                  bytes = 0;
                }
                slice.push(c);
                bytes += c.length;
              }
              if (slice.length)
                conn.send(Buffer.concat(slice));
              conn.finalize().then(() => {
                conn.close();
                resolve();
              });
            }
          }, { language: stt.code, keyterms }).then((c) => {
            if (!c)
              resolve();
          }, () => resolve());
        });
        if (isStale())
          return;
      }
      fullAudioRef.current = [];
      const text = accumulatedRef.current.trim();
      logForDebugging(`[voice] Final transcript assembled (${String(text.length)} chars): "${text.slice(0, 200)}"`);
      logEvent("tengu_voice_recording_completed", {
        transcriptChars: text.length + focusFlushedChars,
        recordingDurationMs,
        hadAudioSignal,
        retried,
        silentDropRetried: silentDropRetriedRef.current,
        wsConnected,
        focusTriggered
      });
      if (connectionRef.current) {
        connectionRef.current.close();
        connectionRef.current = null;
      }
      if (text) {
        logForDebugging(`[voice] Injecting transcript (${String(text.length)} chars)`);
        onTranscriptRef.current(text);
      } else if (focusFlushedChars === 0 && recordingDurationMs > 2000) {
        if (!wsConnected) {
          onErrorRef.current?.("Voice connection failed. Check your network and try again.");
        } else if (!hadAudioSignal) {
          onErrorRef.current?.("No audio detected from microphone. Check that the correct input device is selected and that MiMo Code has microphone access.");
        } else {
          onErrorRef.current?.("No speech detected.");
        }
      }
      accumulatedRef.current = "";
      setVoiceState((prev) => {
        if (prev.voiceInterimTranscript === "")
          return prev;
        return { ...prev, voiceInterimTranscript: "" };
      });
      updateState("idle");
    }).catch((err) => {
      logError(toError(err));
      if (!isStale())
        updateState("idle");
    });
  }
  import_react.useEffect(() => {
    if (enabled && !voiceModule) {
      import("./chunk-p9stfkb9.js").then((mod) => {
        voiceModule = mod;
      });
    }
  }, [enabled]);
  function armFocusSilenceTimer() {
    if (focusSilenceTimerRef.current) {
      clearTimeout(focusSilenceTimerRef.current);
    }
    focusSilenceTimerRef.current = setTimeout((focusSilenceTimerRef2, stateRef2, focusTriggeredRef2, silenceTimedOutRef2, finishRecording2) => {
      focusSilenceTimerRef2.current = null;
      if (stateRef2.current === "recording" && focusTriggeredRef2.current) {
        logForDebugging("[voice] Focus silence timeout \u2014 tearing down session");
        silenceTimedOutRef2.current = true;
        finishRecording2();
      }
    }, FOCUS_SILENCE_TIMEOUT_MS, focusSilenceTimerRef, stateRef, focusTriggeredRef, silenceTimedOutRef, finishRecording);
  }
  import_react.useEffect(() => {
    if (!enabled || !focusMode || isDoubaoProvider()) {
      if (focusTriggeredRef.current && stateRef.current === "recording") {
        logForDebugging("[voice] Focus mode disabled during recording, finishing");
        finishRecording();
      }
      return;
    }
    let cancelled = false;
    if (isFocused && stateRef.current === "idle" && !silenceTimedOutRef.current) {
      const beginFocusRecording = () => {
        if (cancelled || stateRef.current !== "idle" || silenceTimedOutRef.current)
          return;
        logForDebugging("[voice] Focus gained, starting recording session");
        focusTriggeredRef.current = true;
        startRecordingSession();
        armFocusSilenceTimer();
      };
      if (voiceModule) {
        beginFocusRecording();
      } else {
        import("./chunk-p9stfkb9.js").then((mod) => {
          voiceModule = mod;
          beginFocusRecording();
        });
      }
    } else if (!isFocused) {
      silenceTimedOutRef.current = false;
      if (stateRef.current === "recording") {
        logForDebugging("[voice] Focus lost, finishing recording");
        finishRecording();
      }
    }
    return () => {
      cancelled = true;
    };
  }, [enabled, focusMode, isFocused]);
  async function startRecordingSession() {
    if (!voiceModule) {
      onErrorRef.current?.("Voice module not loaded yet. Try again in a moment.");
      return;
    }
    updateState("recording");
    recordingStartRef.current = Date.now();
    accumulatedRef.current = "";
    seenRepeatRef.current = false;
    hasAudioSignalRef.current = false;
    retryUsedRef.current = false;
    silentDropRetriedRef.current = false;
    fullAudioRef.current = [];
    focusFlushedCharsRef.current = 0;
    everConnectedRef.current = false;
    const myGen = ++sessionGenRef.current;
    const availability = await voiceModule.checkRecordingAvailability();
    if (!availability.available) {
      logForDebugging(`[voice] Recording not available: ${availability.reason ?? "unknown"}`);
      onErrorRef.current?.(availability.reason ?? "Audio recording is not available.");
      cleanup();
      updateState("idle");
      return;
    }
    logForDebugging("[voice] Starting recording session, connecting voice stream");
    setVoiceState((prev) => {
      if (!prev.voiceError)
        return prev;
      return { ...prev, voiceError: null };
    });
    const audioBuffer = [];
    logForDebugging("[voice] startRecording: buffering audio while WebSocket connects");
    audioLevelsRef.current = [];
    const started = await voiceModule.startRecording((chunk) => {
      const owned = Buffer.from(chunk);
      if (!focusTriggeredRef.current) {
        fullAudioRef.current.push(owned);
      }
      if (connectionRef.current) {
        connectionRef.current.send(owned);
      } else {
        audioBuffer.push(owned);
      }
      const level = computeLevel(chunk);
      if (!hasAudioSignalRef.current && level > 0.01) {
        hasAudioSignalRef.current = true;
      }
      const levels = audioLevelsRef.current;
      if (levels.length >= AUDIO_LEVEL_BARS) {
        levels.shift();
      }
      levels.push(level);
      const snapshot = [...levels];
      audioLevelsRef.current = snapshot;
      setVoiceState((prev) => ({ ...prev, voiceAudioLevels: snapshot }));
    }, () => {
      if (stateRef.current === "recording") {
        finishRecording();
      }
    }, { silenceDetection: false });
    if (!started) {
      logError(new Error("[voice] Recording failed \u2014 no audio tool found"));
      onErrorRef.current?.("Failed to start audio capture. Check that your microphone is accessible.");
      cleanup();
      updateState("idle");
      setVoiceState((prev) => ({
        ...prev,
        voiceError: "Recording failed \u2014 no audio tool found"
      }));
      return;
    }
    const rawLanguage = getInitialSettings().language;
    const stt = normalizeLanguageForSTT(rawLanguage);
    logEvent("tengu_voice_recording_started", {
      focusTriggered: focusTriggeredRef.current,
      sttLanguage: stt.code,
      sttLanguageIsDefault: !rawLanguage?.trim(),
      sttLanguageFellBack: stt.fellBackFrom !== undefined,
      systemLocaleLanguage: getSystemLocaleLanguage()
    });
    let sawTranscript = false;
    const isStale = () => sessionGenRef.current !== myGen;
    const attemptConnect = (keyterms) => {
      const myAttemptGen = attemptGenRef.current;
      const connectFn = isDoubaoProvider() ? (cbs, opts) => connectDoubaoStream(cbs, opts) : (cbs, opts) => connectVoiceStream(cbs, opts);
      connectFn({
        onTranscript: (text, isFinal) => {
          if (isStale())
            return;
          sawTranscript = true;
          logForDebugging(`[voice] onTranscript: isFinal=${String(isFinal)} text="${text}"`);
          if (isFinal && text.trim()) {
            if (focusTriggeredRef.current) {
              logForDebugging(`[voice] Focus mode: flushing final transcript immediately: "${text.trim()}"`);
              onTranscriptRef.current(text.trim());
              focusFlushedCharsRef.current += text.trim().length;
              setVoiceState((prev) => {
                if (prev.voiceInterimTranscript === "")
                  return prev;
                return { ...prev, voiceInterimTranscript: "" };
              });
              accumulatedRef.current = "";
              armFocusSilenceTimer();
            } else {
              if (accumulatedRef.current) {
                accumulatedRef.current += " ";
              }
              accumulatedRef.current += text.trim();
              logForDebugging(`[voice] Accumulated final transcript: "${accumulatedRef.current}"`);
              setVoiceState((prev) => {
                const preview = accumulatedRef.current;
                if (prev.voiceInterimTranscript === preview)
                  return prev;
                return { ...prev, voiceInterimTranscript: preview };
              });
            }
          } else if (!isFinal) {
            if (focusTriggeredRef.current) {
              armFocusSilenceTimer();
            }
            const interim = text.trim();
            const preview = accumulatedRef.current ? accumulatedRef.current + (interim ? " " + interim : "") : interim;
            setVoiceState((prev) => {
              if (prev.voiceInterimTranscript === preview)
                return prev;
              return { ...prev, voiceInterimTranscript: preview };
            });
          }
        },
        onError: (error, opts) => {
          if (isStale()) {
            logForDebugging(`[voice] ignoring onError from stale session: ${error}`);
            return;
          }
          if (attemptGenRef.current !== myAttemptGen) {
            logForDebugging(`[voice] ignoring stale onError from superseded attempt: ${error}`);
            return;
          }
          if (!opts?.fatal && !sawTranscript && stateRef.current === "recording") {
            if (!retryUsedRef.current) {
              retryUsedRef.current = true;
              logForDebugging(`[voice] early voice_stream error (pre-transcript), retrying once: ${error}`);
              logEvent("tengu_voice_stream_early_retry", {});
              connectionRef.current = null;
              attemptGenRef.current++;
              setTimeout((stateRef2, attemptConnect2, keyterms2) => {
                if (stateRef2.current === "recording") {
                  attemptConnect2(keyterms2);
                }
              }, 250, stateRef, attemptConnect, keyterms);
              return;
            }
          }
          attemptGenRef.current++;
          logError(new Error(`[voice] voice_stream error: ${error}`));
          onErrorRef.current?.(`Voice stream error: ${error}`);
          audioBuffer.length = 0;
          focusTriggeredRef.current = false;
          cleanup();
          updateState("idle");
        },
        onClose: () => {},
        onReady: (conn) => {
          if (isStale() || stateRef.current !== "recording") {
            conn.close();
            return;
          }
          connectionRef.current = conn;
          everConnectedRef.current = true;
          const SLICE_TARGET_BYTES = 32000;
          if (audioBuffer.length > 0) {
            let totalBytes = 0;
            for (const c of audioBuffer)
              totalBytes += c.length;
            const slices = [[]];
            let sliceBytes = 0;
            for (const chunk of audioBuffer) {
              if (sliceBytes > 0 && sliceBytes + chunk.length > SLICE_TARGET_BYTES) {
                slices.push([]);
                sliceBytes = 0;
              }
              slices[slices.length - 1].push(chunk);
              sliceBytes += chunk.length;
            }
            logForDebugging(`[voice] onReady: flushing ${String(audioBuffer.length)} buffered chunks (${String(totalBytes)} bytes) as ${String(slices.length)} coalesced frame(s)`);
            for (const slice of slices) {
              conn.send(Buffer.concat(slice));
            }
          }
          audioBuffer.length = 0;
          if (releaseTimerRef.current) {
            clearTimeout(releaseTimerRef.current);
          }
          if (seenRepeatRef.current) {
            releaseTimerRef.current = setTimeout((releaseTimerRef2, stateRef2, finishRecording2) => {
              releaseTimerRef2.current = null;
              if (stateRef2.current === "recording") {
                finishRecording2();
              }
            }, RELEASE_TIMEOUT_MS, releaseTimerRef, stateRef, finishRecording);
          }
        }
      }, {
        language: stt.code,
        keyterms
      }).then((conn) => {
        if (isStale()) {
          conn?.close();
          return;
        }
        if (!conn) {
          logForDebugging("[voice] Failed to connect to voice_stream (no OAuth token?)");
          onErrorRef.current?.("Voice mode requires a MiMo account. Please run /login to sign in.");
          audioBuffer.length = 0;
          cleanup();
          updateState("idle");
          return;
        }
        if (stateRef.current !== "recording") {
          audioBuffer.length = 0;
          conn.close();
          return;
        }
      });
    };
    if (isDoubaoProvider()) {
      attemptConnect([]);
    } else {
      getVoiceKeyterms().then(attemptConnect);
    }
  }
  const handleKeyEvent = import_react.useCallback((fallbackMs = REPEAT_FALLBACK_MS) => {
    const sttAvailable = isDoubaoProvider() ? isDoubaoAvailableSync() : isVoiceStreamAvailable();
    if (!enabled || !sttAvailable) {
      return;
    }
    if (focusTriggeredRef.current) {
      return;
    }
    if (focusMode && silenceTimedOutRef.current) {
      logForDebugging("[voice] Re-arming focus recording after silence timeout");
      silenceTimedOutRef.current = false;
      focusTriggeredRef.current = true;
      startRecordingSession();
      armFocusSilenceTimer();
      return;
    }
    const currentState = stateRef.current;
    if (currentState === "processing") {
      return;
    }
    if (currentState === "idle") {
      logForDebugging("[voice] handleKeyEvent: idle, starting recording session immediately");
      startRecordingSession();
      repeatFallbackTimerRef.current = setTimeout((repeatFallbackTimerRef2, stateRef2, seenRepeatRef2, releaseTimerRef2, finishRecording2) => {
        repeatFallbackTimerRef2.current = null;
        if (stateRef2.current === "recording" && !seenRepeatRef2.current) {
          logForDebugging("[voice] No auto-repeat seen, arming release timer via fallback");
          seenRepeatRef2.current = true;
          releaseTimerRef2.current = setTimeout((releaseTimerRef3, stateRef3, finishRecording3) => {
            releaseTimerRef3.current = null;
            if (stateRef3.current === "recording") {
              finishRecording3();
            }
          }, RELEASE_TIMEOUT_MS, releaseTimerRef2, stateRef2, finishRecording2);
        }
      }, fallbackMs, repeatFallbackTimerRef, stateRef, seenRepeatRef, releaseTimerRef, finishRecording);
    } else if (currentState === "recording") {
      seenRepeatRef.current = true;
      if (repeatFallbackTimerRef.current) {
        clearTimeout(repeatFallbackTimerRef.current);
        repeatFallbackTimerRef.current = null;
      }
    }
    if (releaseTimerRef.current) {
      clearTimeout(releaseTimerRef.current);
    }
    if (stateRef.current === "recording" && seenRepeatRef.current) {
      releaseTimerRef.current = setTimeout((releaseTimerRef2, stateRef2, finishRecording2) => {
        releaseTimerRef2.current = null;
        if (stateRef2.current === "recording") {
          finishRecording2();
        }
      }, RELEASE_TIMEOUT_MS, releaseTimerRef, stateRef, finishRecording);
    }
  }, [enabled, focusMode, cleanup]);
  import_react.useEffect(() => {
    if (!enabled && stateRef.current !== "idle") {
      cleanup();
      updateState("idle");
    }
    return () => {
      cleanup();
    };
  }, [enabled, cleanup]);
  return {
    state,
    handleKeyEvent
  };
}
var import_react, DEFAULT_STT_LANGUAGE = "en", LANGUAGE_NAME_TO_CODE, SUPPORTED_LANGUAGE_CODES, voiceModule = null, RELEASE_TIMEOUT_MS = 200, REPEAT_FALLBACK_MS = 600, FIRST_PRESS_FALLBACK_MS = 2000, FOCUS_SILENCE_TIMEOUT_MS = 5000, AUDIO_LEVEL_BARS = 16;
var init_useVoice = __esm(() => {
  init_voice();
  init_src();
  init_analytics();
  init_voiceKeyterms();
  init_voiceStreamSTT();
  init_doubaoSTT();
  init_debug();
  init_errors();
  init_intl();
  init_log();
  init_settings();
  init_sleep();
  import_react = __toESM(require_react(), 1);
  LANGUAGE_NAME_TO_CODE = {
    english: "en",
    spanish: "es",
    espa\u{f1}ol: "es",
    espanol: "es",
    french: "fr",
    fran\u{e7}ais: "fr",
    francais: "fr",
    japanese: "ja",
    \u{65e5}\u{672c}\u{8a9e}: "ja",
    german: "de",
    deutsch: "de",
    portuguese: "pt",
    portugu\u{ea}s: "pt",
    portugues: "pt",
    italian: "it",
    italiano: "it",
    korean: "ko",
    \u{d55c}\u{ad6d}\u{c5b4}: "ko",
    hindi: "hi",
    \u{939}\u{93f}\u{928}\u{94d}\u{926}\u{940}: "hi",
    \u{939}\u{93f}\u{902}\u{926}\u{940}: "hi",
    indonesian: "id",
    "bahasa indonesia": "id",
    bahasa: "id",
    russian: "ru",
    \u{440}\u{443}\u{441}\u{441}\u{43a}\u{438}\u{439}: "ru",
    polish: "pl",
    polski: "pl",
    turkish: "tr",
    t\u{fc}rk\u{e7}e: "tr",
    turkce: "tr",
    dutch: "nl",
    nederlands: "nl",
    ukrainian: "uk",
    \u{443}\u{43a}\u{440}\u{430}\u{457}\u{43d}\u{441}\u{44c}\u{43a}\u{430}: "uk",
    greek: "el",
    \u{3b5}\u{3bb}\u{3bb}\u{3b7}\u{3bd}\u{3b9}\u{3ba}\u{3ac}: "el",
    czech: "cs",
    \u{10d}e\u{161}tina: "cs",
    cestina: "cs",
    danish: "da",
    dansk: "da",
    swedish: "sv",
    svenska: "sv",
    norwegian: "no",
    norsk: "no"
  };
  SUPPORTED_LANGUAGE_CODES = new Set([
    "en",
    "es",
    "fr",
    "ja",
    "de",
    "pt",
    "it",
    "ko",
    "hi",
    "id",
    "ru",
    "pl",
    "tr",
    "nl",
    "uk",
    "el",
    "cs",
    "da",
    "sv",
    "no"
  ]);
});

export { normalizeLanguageForSTT, exports_useVoice, init_useVoice };
