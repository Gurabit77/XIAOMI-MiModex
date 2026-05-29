// @bun
import {
  FlushGate,
  createV2ReplTransport
} from "./chunk-xpbqdmq4.js";
import"./chunk-acj4r8ee.js";
import {
  BoundedUUIDSet,
  extractTitleText,
  handleIngressMessage,
  handleServerControlRequest,
  isEligibleBridgeMessage,
  makeResultMessage,
  shouldReportRunningForMessage,
  shouldReportRunningForMessages
} from "./chunk-r3e817kz.js";
import"./chunk-nt837qt9.js";
import {
  buildCCRv2SdkUrl
} from "./chunk-hwebfkyh.js";
import {
  createTokenRefreshScheduler
} from "./chunk-zvgyvpya.js";
import"./chunk-sc9y2a8e.js";
import {
  getEnvLessBridgeConfig,
  init_envLessBridgeConfig
} from "./chunk-g8j1b6z3.js";
import {
  init_sessionState,
  setSessionMetadataChangedListener
} from "./chunk-chmfqs2y.js";
import {
  getTrustedDeviceToken,
  init_trustedDevice
} from "./chunk-1gfk9pd3.js";
import"./chunk-ybaawhyf.js";
import {
  extractErrorDetail,
  init_debugUtils,
  init_sessionIdCompat,
  logBridgeSkip,
  toCompatSessionId
} from "./chunk-2e52n52z.js";
import"./chunk-ps49ymvj.js";
import {
  getBridgeBaseUrlOverride,
  init_bridgeConfig
} from "./chunk-jtnkamme.js";
import"./chunk-1ghcng4e.js";
import"./chunk-pz9t24tq.js";
import"./chunk-4efha55s.js";
import"./chunk-t7f7dp4k.js";
import"./chunk-zwarn9h7.js";
import"./chunk-b127reh2.js";
import"./chunk-et54q618.js";
import"./chunk-pe9b769s.js";
import"./chunk-64c1avct.js";
import {
  init_sleep,
  sleep
} from "./chunk-8g5pe1gr.js";
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
import {
  init_analytics,
  logEvent
} from "./chunk-f2mhrmww.js";
import"./chunk-0vkfrmqm.js";
import"./chunk-0xjaqda8.js";
import {
  init_diagLogs,
  logForDiagnosticsNoPII
} from "./chunk-t6jhrn34.js";
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
import {
  errorMessage,
  init_cleanupRegistry,
  init_debug,
  init_errors,
  init_slowOperations,
  jsonStringify,
  logForDebugging,
  registerCleanup
} from "./chunk-rpbc3b7k.js";
import"./chunk-fbv4apne.js";
import"./chunk-j5xzpm59.js";
import"./chunk-50dgek10.js";
import"./chunk-7wm5s02e.js";
import"./chunk-d3bk85eq.js";
import"./chunk-cw8rngb2.js";
import {
  init_envUtils,
  isInProtectedNamespace
} from "./chunk-hxhwzgnn.js";
import"./chunk-qx8z601m.js";
import"./chunk-cgm6758j.js";
import {
  axios_default,
  init_axios
} from "./chunk-3v4d4h0t.js";
import"./chunk-8pn8tvgg.js";
import"./chunk-netzwgv1.js";
import"./chunk-qp2qdcda.js";

// src/bridge/remoteBridgeCore.ts
init_axios();
init_sessionIdCompat();
init_trustedDevice();
init_envLessBridgeConfig();
init_debugUtils();
init_debug();
init_diagLogs();
init_envUtils();
init_errors();
init_sleep();
init_cleanupRegistry();
init_analytics();
init_sessionState();

// src/bridge/codeSessionApi.ts
init_axios();
init_debug();
init_errors();
init_slowOperations();
init_debugUtils();
var ANTHROPIC_VERSION = "2023-06-01";
function oauthHeaders(accessToken) {
  return {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
    "anthropic-version": ANTHROPIC_VERSION
  };
}
async function createCodeSession(baseUrl, accessToken, title, timeoutMs, tags) {
  const url = `${baseUrl}/v1/code/sessions`;
  let response;
  try {
    response = await axios_default.post(url, { title, bridge: {}, ...tags?.length ? { tags } : {} }, {
      headers: oauthHeaders(accessToken),
      timeout: timeoutMs,
      validateStatus: (s) => s < 500
    });
  } catch (err) {
    logForDebugging(`[code-session] Session create request failed: ${errorMessage(err)}`);
    return null;
  }
  if (response.status !== 200 && response.status !== 201) {
    const detail = extractErrorDetail(response.data);
    logForDebugging(`[code-session] Session create failed ${response.status}${detail ? `: ${detail}` : ""}`);
    return null;
  }
  const data = response.data;
  if (!data || typeof data !== "object" || !("session" in data) || !data.session || typeof data.session !== "object" || !("id" in data.session) || typeof data.session.id !== "string" || !data.session.id.startsWith("cse_")) {
    logForDebugging(`[code-session] No session.id (cse_*) in response: ${jsonStringify(data).slice(0, 200)}`);
    return null;
  }
  return data.session.id;
}
async function fetchRemoteCredentials(sessionId, baseUrl, accessToken, timeoutMs, trustedDeviceToken) {
  const url = `${baseUrl}/v1/code/sessions/${sessionId}/bridge`;
  const headers = oauthHeaders(accessToken);
  if (trustedDeviceToken) {
    headers["X-Trusted-Device-Token"] = trustedDeviceToken;
  }
  let response;
  try {
    response = await axios_default.post(url, {}, {
      headers,
      timeout: timeoutMs,
      validateStatus: (s) => s < 500
    });
  } catch (err) {
    logForDebugging(`[code-session] /bridge request failed: ${errorMessage(err)}`);
    return null;
  }
  if (response.status !== 200) {
    const detail = extractErrorDetail(response.data);
    logForDebugging(`[code-session] /bridge failed ${response.status}${detail ? `: ${detail}` : ""}`);
    return null;
  }
  const data = response.data;
  if (data === null || typeof data !== "object" || !("worker_jwt" in data) || typeof data.worker_jwt !== "string" || !("expires_in" in data) || typeof data.expires_in !== "number" || !("api_base_url" in data) || typeof data.api_base_url !== "string" || !("worker_epoch" in data)) {
    logForDebugging(`[code-session] /bridge response malformed (need worker_jwt, expires_in, api_base_url, worker_epoch): ${jsonStringify(data).slice(0, 200)}`);
    return null;
  }
  const rawEpoch = data.worker_epoch;
  const epoch = typeof rawEpoch === "string" ? Number(rawEpoch) : rawEpoch;
  if (typeof epoch !== "number" || !Number.isFinite(epoch) || !Number.isSafeInteger(epoch)) {
    logForDebugging(`[code-session] /bridge worker_epoch invalid: ${jsonStringify(rawEpoch)}`);
    return null;
  }
  return {
    worker_jwt: data.worker_jwt,
    api_base_url: data.api_base_url,
    expires_in: data.expires_in,
    worker_epoch: epoch
  };
}
// src/bridge/remoteBridgeCore.ts
init_bridgeConfig();
var ANTHROPIC_VERSION2 = "2023-06-01";
function oauthHeaders2(accessToken) {
  return {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
    "anthropic-version": ANTHROPIC_VERSION2
  };
}
async function initEnvLessBridgeCore(params) {
  const {
    baseUrl,
    orgUUID,
    title,
    getAccessToken,
    onAuth401,
    toSDKMessages,
    initialHistoryCap,
    initialMessages,
    onInboundMessage,
    onUserMessage,
    onPermissionResponse,
    onInterrupt,
    onSetModel,
    onSetMaxThinkingTokens,
    onSetPermissionMode,
    onStateChange,
    outboundOnly,
    tags
  } = params;
  const cfg = await getEnvLessBridgeConfig();
  const accessToken = getAccessToken();
  if (!accessToken) {
    logForDebugging("[remote-bridge] No OAuth token");
    return null;
  }
  const createdSessionId = await withRetry(() => createCodeSession(baseUrl, accessToken, title, cfg.http_timeout_ms, tags), "createCodeSession", cfg);
  if (!createdSessionId) {
    onStateChange?.("failed", "Session creation failed \u2014 see debug log");
    logBridgeSkip("v2_session_create_failed", undefined, true);
    return null;
  }
  const sessionId = createdSessionId;
  logForDebugging(`[remote-bridge] Created session ${sessionId}`);
  logForDiagnosticsNoPII("info", "bridge_repl_v2_session_created");
  const credentials = await withRetry(() => fetchRemoteCredentials2(sessionId, baseUrl, accessToken, cfg.http_timeout_ms), "fetchRemoteCredentials", cfg);
  if (!credentials) {
    onStateChange?.("failed", "Remote credentials fetch failed \u2014 see debug log");
    logBridgeSkip("v2_remote_creds_failed", undefined, true);
    archiveSession(sessionId, baseUrl, accessToken, orgUUID, cfg.http_timeout_ms);
    return null;
  }
  logForDebugging(`[remote-bridge] Fetched bridge credentials (expires_in=${credentials.expires_in}s)`);
  const sessionUrl = buildCCRv2SdkUrl(credentials.api_base_url, sessionId);
  logForDebugging(`[remote-bridge] v2 session URL: ${sessionUrl}`);
  let transport;
  try {
    transport = await createV2ReplTransport({
      sessionUrl,
      ingressToken: credentials.worker_jwt,
      sessionId,
      epoch: credentials.worker_epoch,
      heartbeatIntervalMs: cfg.heartbeat_interval_ms,
      heartbeatJitterFraction: cfg.heartbeat_jitter_fraction,
      getAuthToken: () => credentials.worker_jwt,
      outboundOnly
    });
  } catch (err) {
    logForDebugging(`[remote-bridge] v2 transport setup failed: ${errorMessage(err)}`, { level: "error" });
    onStateChange?.("failed", `Transport setup failed: ${errorMessage(err)}`);
    logBridgeSkip("v2_transport_setup_failed", undefined, true);
    archiveSession(sessionId, baseUrl, accessToken, orgUUID, cfg.http_timeout_ms);
    return null;
  }
  logForDebugging(`[remote-bridge] v2 transport created (epoch=${credentials.worker_epoch})`);
  onStateChange?.("ready");
  const recentPostedUUIDs = new BoundedUUIDSet(cfg.uuid_dedup_buffer_size);
  const initialMessageUUIDs = new Set;
  if (initialMessages) {
    for (const msg of initialMessages) {
      initialMessageUUIDs.add(msg.uuid);
      recentPostedUUIDs.add(msg.uuid);
    }
  }
  const recentInboundUUIDs = new BoundedUUIDSet(cfg.uuid_dedup_buffer_size);
  const flushGate = new FlushGate;
  let initialFlushDone = false;
  let tornDown = false;
  let authRecoveryInFlight = false;
  let userMessageCallbackDone = !onUserMessage;
  let connectCause = "initial";
  let connectDeadline;
  function onConnectTimeout(cause) {
    if (tornDown)
      return;
    logEvent("tengu_bridge_repl_connect_timeout", {
      v2: true,
      elapsed_ms: cfg.connect_timeout_ms,
      cause
    });
  }
  setSessionMetadataChangedListener((metadata) => {
    if (tornDown)
      return;
    transport.reportMetadata(metadata);
  }, { replayCurrent: true });
  const refresh = createTokenRefreshScheduler({
    refreshBufferMs: cfg.token_refresh_buffer_ms,
    getAccessToken: async () => {
      const stale = getAccessToken();
      if (onAuth401)
        await onAuth401(stale ?? "");
      return getAccessToken() ?? stale;
    },
    onRefresh: (sid, oauthToken) => {
      (async () => {
        if (authRecoveryInFlight || tornDown) {
          logForDebugging("[remote-bridge] Recovery already in flight, skipping proactive refresh");
          return;
        }
        authRecoveryInFlight = true;
        try {
          const fresh = await withRetry(() => fetchRemoteCredentials2(sid, baseUrl, oauthToken, cfg.http_timeout_ms), "fetchRemoteCredentials (proactive)", cfg);
          if (!fresh || tornDown)
            return;
          await rebuildTransport(fresh, "proactive_refresh");
          logForDebugging("[remote-bridge] Transport rebuilt (proactive refresh)");
        } catch (err) {
          logForDebugging(`[remote-bridge] Proactive refresh rebuild failed: ${errorMessage(err)}`, { level: "error" });
          logForDiagnosticsNoPII("error", "bridge_repl_v2_proactive_refresh_failed");
          if (!tornDown) {
            onStateChange?.("failed", `Refresh failed: ${errorMessage(err)}`);
          }
        } finally {
          authRecoveryInFlight = false;
        }
      })();
    },
    label: "remote"
  });
  refresh.scheduleFromExpiresIn(sessionId, credentials.expires_in);
  function wireTransportCallbacks() {
    transport.setOnConnect(() => {
      clearTimeout(connectDeadline);
      logForDebugging("[remote-bridge] v2 transport connected");
      logForDiagnosticsNoPII("info", "bridge_repl_v2_transport_connected");
      logEvent("tengu_bridge_repl_ws_connected", {
        v2: true,
        cause: connectCause
      });
      if (!initialFlushDone && initialMessages && initialMessages.length > 0) {
        initialFlushDone = true;
        const flushTransport = transport;
        flushHistory(initialMessages).catch((e) => logForDebugging(`[remote-bridge] flushHistory failed: ${e}`)).finally(() => {
          if (transport !== flushTransport || tornDown || authRecoveryInFlight) {
            return;
          }
          drainFlushGate();
          onStateChange?.("connected");
        });
      } else if (!flushGate.active) {
        onStateChange?.("connected");
      }
    });
    transport.setOnData((data) => {
      handleIngressMessage(data, recentPostedUUIDs, recentInboundUUIDs, onInboundMessage, onPermissionResponse ? (res) => {
        transport.reportState("running");
        onPermissionResponse(res);
      } : undefined, (req) => handleServerControlRequest(req, {
        transport,
        sessionId,
        onInterrupt,
        onSetModel,
        onSetMaxThinkingTokens,
        onSetPermissionMode,
        outboundOnly
      }));
    });
    transport.setOnClose((code) => {
      clearTimeout(connectDeadline);
      if (tornDown)
        return;
      logForDebugging(`[remote-bridge] v2 transport closed (code=${code})`);
      logEvent("tengu_bridge_repl_ws_closed", { code, v2: true });
      if (code === 401 && !authRecoveryInFlight) {
        recoverFromAuthFailure();
        return;
      }
      onStateChange?.("failed", `Transport closed (code ${code})`);
    });
  }
  async function rebuildTransport(fresh, cause) {
    connectCause = cause;
    flushGate.start();
    try {
      const seq = transport.getLastSequenceNum();
      transport.close();
      transport = await createV2ReplTransport({
        sessionUrl: buildCCRv2SdkUrl(fresh.api_base_url, sessionId),
        ingressToken: fresh.worker_jwt,
        sessionId,
        epoch: fresh.worker_epoch,
        heartbeatIntervalMs: cfg.heartbeat_interval_ms,
        heartbeatJitterFraction: cfg.heartbeat_jitter_fraction,
        initialSequenceNum: seq,
        getAuthToken: () => fresh.worker_jwt,
        outboundOnly
      });
      if (tornDown) {
        transport.close();
        return;
      }
      wireTransportCallbacks();
      transport.connect();
      connectDeadline = setTimeout(onConnectTimeout, cfg.connect_timeout_ms, connectCause);
      refresh.scheduleFromExpiresIn(sessionId, fresh.expires_in);
      drainFlushGate();
    } finally {
      flushGate.drop();
    }
  }
  async function recoverFromAuthFailure() {
    if (authRecoveryInFlight)
      return;
    authRecoveryInFlight = true;
    onStateChange?.("reconnecting", "JWT expired \u2014 refreshing");
    logForDebugging("[remote-bridge] 401 on SSE \u2014 attempting JWT refresh");
    try {
      const stale = getAccessToken();
      if (onAuth401)
        await onAuth401(stale ?? "");
      const oauthToken = getAccessToken() ?? stale;
      if (!oauthToken || tornDown) {
        if (!tornDown) {
          onStateChange?.("failed", "JWT refresh failed: no OAuth token");
        }
        return;
      }
      const fresh = await withRetry(() => fetchRemoteCredentials2(sessionId, baseUrl, oauthToken, cfg.http_timeout_ms), "fetchRemoteCredentials (recovery)", cfg);
      if (!fresh || tornDown) {
        if (!tornDown) {
          onStateChange?.("failed", "JWT refresh failed after 401");
        }
        return;
      }
      initialFlushDone = false;
      await rebuildTransport(fresh, "auth_401_recovery");
      logForDebugging("[remote-bridge] Transport rebuilt after 401");
    } catch (err) {
      logForDebugging(`[remote-bridge] 401 recovery failed: ${errorMessage(err)}`, { level: "error" });
      logForDiagnosticsNoPII("error", "bridge_repl_v2_jwt_refresh_failed");
      if (!tornDown) {
        onStateChange?.("failed", `JWT refresh failed: ${errorMessage(err)}`);
      }
    } finally {
      authRecoveryInFlight = false;
    }
  }
  wireTransportCallbacks();
  if (initialMessages && initialMessages.length > 0) {
    flushGate.start();
  }
  transport.connect();
  connectDeadline = setTimeout(onConnectTimeout, cfg.connect_timeout_ms, connectCause);
  function drainFlushGate() {
    const msgs = flushGate.end();
    if (msgs.length === 0)
      return;
    for (const msg of msgs)
      recentPostedUUIDs.add(msg.uuid);
    const events = toSDKMessages(msgs).map((m) => ({
      ...m,
      session_id: sessionId
    }));
    if (shouldReportRunningForMessages(msgs)) {
      transport.reportState("running");
    }
    logForDebugging(`[remote-bridge] Drained ${msgs.length} queued message(s) after flush`);
    transport.writeBatch(events);
  }
  async function flushHistory(msgs) {
    const eligible = msgs.filter(isEligibleBridgeMessage);
    const capped = initialHistoryCap > 0 && eligible.length > initialHistoryCap ? eligible.slice(-initialHistoryCap) : eligible;
    if (capped.length < eligible.length) {
      logForDebugging(`[remote-bridge] Capped initial flush: ${eligible.length} -> ${capped.length} (cap=${initialHistoryCap})`);
    }
    const events = toSDKMessages(capped).map((m) => ({
      ...m,
      session_id: sessionId
    }));
    if (events.length === 0)
      return;
    const lastEligible = eligible.at(-1);
    if (lastEligible && shouldReportRunningForMessage(lastEligible)) {
      transport.reportState("running");
    }
    logForDebugging(`[remote-bridge] Flushing ${events.length} history events`);
    await transport.writeBatch(events);
  }
  async function teardown() {
    if (tornDown)
      return;
    tornDown = true;
    refresh.cancelAll();
    clearTimeout(connectDeadline);
    flushGate.drop();
    transport.reportState("idle");
    const resultMsg = {
      ...makeResultMessage(sessionId),
      session_id: sessionId
    };
    transport.write(resultMsg);
    let token = getAccessToken();
    let status = await archiveSession(sessionId, baseUrl, token, orgUUID, cfg.teardown_archive_timeout_ms);
    if (status === 401 && onAuth401) {
      try {
        await onAuth401(token ?? "");
        token = getAccessToken();
        status = await archiveSession(sessionId, baseUrl, token, orgUUID, cfg.teardown_archive_timeout_ms);
      } catch (err) {
        logForDebugging(`[remote-bridge] Teardown 401 retry threw: ${errorMessage(err)}`, { level: "error" });
      }
    }
    transport.close();
    const archiveStatus = status === "no_token" ? "skipped_no_token" : status === "timeout" || status === "error" ? "network_error" : status >= 500 ? "server_5xx" : status >= 400 ? "server_4xx" : "ok";
    logForDebugging(`[remote-bridge] Torn down (archive=${status})`);
    logForDiagnosticsNoPII("info", "bridge_repl_v2_teardown");
    logEvent("tengu_bridge_repl_teardown", {
      v2: true,
      archive_status: archiveStatus,
      archive_ok: typeof status === "number" && status < 400,
      archive_http_status: typeof status === "number" ? status : undefined,
      archive_timeout: status === "timeout",
      archive_no_token: status === "no_token"
    });
  }
  const unregister = registerCleanup(teardown);
  if (false) {} else {
    logEvent("tengu_bridge_repl_started", {
      has_initial_messages: !!(initialMessages && initialMessages.length > 0),
      v2: true,
      expires_in_s: credentials.expires_in,
      inProtectedNamespace: isInProtectedNamespace()
    });
  }
  return {
    bridgeSessionId: sessionId,
    environmentId: "",
    sessionIngressUrl: credentials.api_base_url,
    writeMessages(messages) {
      const filtered = messages.filter((m) => isEligibleBridgeMessage(m) && !initialMessageUUIDs.has(m.uuid) && !recentPostedUUIDs.has(m.uuid));
      if (filtered.length === 0)
        return;
      if (!userMessageCallbackDone) {
        for (const m of filtered) {
          const text = extractTitleText(m);
          if (text !== undefined && onUserMessage?.(text, sessionId)) {
            userMessageCallbackDone = true;
            break;
          }
        }
      }
      if (flushGate.enqueue(...filtered)) {
        logForDebugging(`[remote-bridge] Queued ${filtered.length} message(s) during flush`);
        return;
      }
      for (const msg of filtered)
        recentPostedUUIDs.add(msg.uuid);
      const events = toSDKMessages(filtered).map((m) => ({
        ...m,
        session_id: sessionId
      }));
      if (shouldReportRunningForMessages(filtered)) {
        transport.reportState("running");
      }
      logForDebugging(`[remote-bridge] Sending ${filtered.length} message(s)`);
      transport.writeBatch(events);
    },
    writeSdkMessages(messages) {
      const filtered = messages.filter((m) => !m.uuid || !recentPostedUUIDs.has(m.uuid));
      if (filtered.length === 0)
        return;
      for (const msg of filtered) {
        if (msg.uuid)
          recentPostedUUIDs.add(msg.uuid);
      }
      const events = filtered.map((m) => ({ ...m, session_id: sessionId }));
      transport.writeBatch(events);
    },
    sendControlRequest(request) {
      if (authRecoveryInFlight) {
        logForDebugging(`[remote-bridge] Dropping control_request during 401 recovery: ${request.request_id}`);
        return;
      }
      const event = { ...request, session_id: sessionId };
      if (request.request?.subtype === "can_use_tool") {
        transport.reportState("requires_action");
      }
      transport.write(event);
      logForDebugging(`[remote-bridge] Sent control_request request_id=${request.request_id}`);
    },
    sendControlResponse(response) {
      if (authRecoveryInFlight) {
        logForDebugging("[remote-bridge] Dropping control_response during 401 recovery");
        return;
      }
      const event = { ...response, session_id: sessionId };
      transport.reportState("running");
      transport.write(event);
      logForDebugging("[remote-bridge] Sent control_response");
    },
    sendControlCancelRequest(requestId) {
      if (authRecoveryInFlight) {
        logForDebugging(`[remote-bridge] Dropping control_cancel_request during 401 recovery: ${requestId}`);
        return;
      }
      const event = {
        type: "control_cancel_request",
        request_id: requestId,
        session_id: sessionId
      };
      transport.reportState("running");
      transport.write(event);
      logForDebugging(`[remote-bridge] Sent control_cancel_request request_id=${requestId}`);
    },
    sendResult() {
      if (authRecoveryInFlight) {
        logForDebugging("[remote-bridge] Dropping result during 401 recovery");
        return;
      }
      transport.reportState("idle");
      const resultMsg = {
        ...makeResultMessage(sessionId),
        session_id: sessionId
      };
      transport.write(resultMsg);
      logForDebugging(`[remote-bridge] Sent result`);
    },
    async teardown() {
      unregister();
      await teardown();
    }
  };
}
async function withRetry(fn, label, cfg) {
  const max = cfg.init_retry_max_attempts;
  for (let attempt = 1;attempt <= max; attempt++) {
    const result = await fn();
    if (result !== null)
      return result;
    if (attempt < max) {
      const base = cfg.init_retry_base_delay_ms * 2 ** (attempt - 1);
      const jitter = base * cfg.init_retry_jitter_fraction * (2 * Math.random() - 1);
      const delay = Math.min(base + jitter, cfg.init_retry_max_delay_ms);
      logForDebugging(`[remote-bridge] ${label} failed (attempt ${attempt}/${max}), retrying in ${Math.round(delay)}ms`);
      await sleep(delay);
    }
  }
  return null;
}
async function fetchRemoteCredentials2(sessionId, baseUrl, accessToken, timeoutMs) {
  const creds = await fetchRemoteCredentials(sessionId, baseUrl, accessToken, timeoutMs, getTrustedDeviceToken());
  if (!creds)
    return null;
  return getBridgeBaseUrlOverride() ? { ...creds, api_base_url: baseUrl } : creds;
}
async function archiveSession(sessionId, baseUrl, accessToken, orgUUID, timeoutMs) {
  if (!accessToken)
    return "no_token";
  const compatId = toCompatSessionId(sessionId);
  try {
    const response = await axios_default.post(`${baseUrl}/v1/sessions/${compatId}/archive`, {}, {
      headers: {
        ...oauthHeaders2(accessToken),
        "anthropic-beta": "ccr-byoc-2025-07-29",
        "x-organization-uuid": orgUUID
      },
      timeout: timeoutMs,
      validateStatus: () => true
    });
    logForDebugging(`[remote-bridge] Archive ${compatId} status=${response.status}`);
    return response.status;
  } catch (err) {
    const msg = errorMessage(err);
    logForDebugging(`[remote-bridge] Archive failed: ${msg}`);
    return axios_default.isAxiosError(err) && err.code === "ECONNABORTED" ? "timeout" : "error";
  }
}
export {
  initEnvLessBridgeCore,
  fetchRemoteCredentials2 as fetchRemoteCredentials,
  createCodeSession
};
