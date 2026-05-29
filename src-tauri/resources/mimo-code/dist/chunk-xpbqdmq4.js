// @bun
import {
  CCRClient
} from "./chunk-acj4r8ee.js";
import {
  registerWorker
} from "./chunk-hwebfkyh.js";
import {
  SSETransport,
  init_SSETransport
} from "./chunk-sc9y2a8e.js";
import {
  init_sessionIngressAuth,
  updateSessionIngressAuthToken
} from "./chunk-chmfqs2y.js";
import {
  errorMessage,
  init_debug,
  init_errors,
  logForDebugging
} from "./chunk-rpbc3b7k.js";

// src/bridge/replBridgeTransport.ts
init_SSETransport();
init_debug();
init_errors();
init_sessionIngressAuth();
function createV1ReplTransport(hybrid) {
  return {
    write: (msg) => hybrid.write(msg),
    writeBatch: (msgs) => hybrid.writeBatch(msgs),
    close: () => hybrid.close(),
    isConnectedStatus: () => hybrid.isConnectedStatus(),
    getStateLabel: () => hybrid.getStateLabel(),
    setOnData: (cb) => hybrid.setOnData(cb),
    setOnClose: (cb) => hybrid.setOnClose(cb),
    setOnConnect: (cb) => hybrid.setOnConnect(cb),
    connect: () => void hybrid.connect(),
    getLastSequenceNum: () => 0,
    get droppedBatchCount() {
      return hybrid.droppedBatchCount;
    },
    reportState: () => {},
    reportMetadata: () => {},
    reportDelivery: () => {},
    flush: () => Promise.resolve()
  };
}
async function createV2ReplTransport(opts) {
  const {
    sessionUrl,
    ingressToken,
    sessionId,
    initialSequenceNum,
    getAuthToken
  } = opts;
  let getAuthHeaders;
  if (getAuthToken) {
    getAuthHeaders = () => {
      const token = getAuthToken();
      if (!token)
        return {};
      return { Authorization: `Bearer ${token}` };
    };
  } else {
    updateSessionIngressAuthToken(ingressToken);
  }
  const epoch = opts.epoch ?? await registerWorker(sessionUrl, ingressToken);
  logForDebugging(`[bridge:repl] CCR v2: worker sessionId=${sessionId} epoch=${epoch}${opts.epoch !== undefined ? " (from /bridge)" : " (via registerWorker)"}`);
  const sseUrl = new URL(sessionUrl);
  sseUrl.pathname = sseUrl.pathname.replace(/\/$/, "") + "/worker/events/stream";
  const sse = new SSETransport(sseUrl, {}, sessionId, undefined, initialSequenceNum, getAuthHeaders);
  let onCloseCb;
  const ccr = new CCRClient(sse, new URL(sessionUrl), {
    getAuthHeaders,
    heartbeatIntervalMs: opts.heartbeatIntervalMs,
    heartbeatJitterFraction: opts.heartbeatJitterFraction,
    onEpochMismatch: () => {
      logForDebugging("[bridge:repl] CCR v2: epoch superseded (409) \u2014 closing for poll-loop recovery");
      try {
        ccr.close();
        sse.close();
        onCloseCb?.(4090);
      } catch (closeErr) {
        logForDebugging(`[bridge:repl] CCR v2: error during epoch-mismatch cleanup: ${errorMessage(closeErr)}`, { level: "error" });
      }
      throw new Error("epoch superseded");
    }
  });
  sse.setOnEvent((event) => {
    ccr.reportDelivery(event.event_id, "received");
    ccr.reportDelivery(event.event_id, "processed");
  });
  let onConnectCb;
  let ccrInitialized = false;
  let closed = false;
  return {
    write(msg) {
      return ccr.writeEvent(msg);
    },
    async writeBatch(msgs) {
      for (const m of msgs) {
        if (closed)
          break;
        await ccr.writeEvent(m);
      }
    },
    close() {
      closed = true;
      ccr.close();
      sse.close();
    },
    isConnectedStatus() {
      return ccrInitialized;
    },
    getStateLabel() {
      if (sse.isClosedStatus())
        return "closed";
      if (sse.isConnectedStatus())
        return ccrInitialized ? "connected" : "init";
      return "connecting";
    },
    setOnData(cb) {
      sse.setOnData(cb);
    },
    setOnClose(cb) {
      onCloseCb = cb;
      sse.setOnClose((code) => {
        ccr.close();
        cb(code ?? 4092);
      });
    },
    setOnConnect(cb) {
      onConnectCb = cb;
    },
    getLastSequenceNum() {
      return sse.getLastSequenceNum();
    },
    droppedBatchCount: 0,
    reportState(state) {
      ccr.reportState(state);
    },
    reportMetadata(metadata) {
      ccr.reportMetadata(metadata);
    },
    reportDelivery(eventId, status) {
      ccr.reportDelivery(eventId, status);
    },
    flush() {
      return ccr.flush();
    },
    connect() {
      if (!opts.outboundOnly) {
        sse.connect();
      }
      ccr.initialize(epoch).then(() => {
        ccrInitialized = true;
        logForDebugging(`[bridge:repl] v2 transport ready for writes (epoch=${epoch}, sse=${sse.isConnectedStatus() ? "open" : "opening"})`);
        onConnectCb?.();
      }, (err) => {
        logForDebugging(`[bridge:repl] CCR v2 initialize failed: ${errorMessage(err)}`, { level: "error" });
        ccr.close();
        sse.close();
        onCloseCb?.(4091);
      });
    }
  };
}

// src/bridge/flushGate.ts
class FlushGate {
  _active = false;
  _pending = [];
  get active() {
    return this._active;
  }
  get pendingCount() {
    return this._pending.length;
  }
  start() {
    this._active = true;
  }
  end() {
    this._active = false;
    return this._pending.splice(0);
  }
  enqueue(...items) {
    if (!this._active)
      return false;
    this._pending.push(...items);
    return true;
  }
  drop() {
    this._active = false;
    const count = this._pending.length;
    this._pending.length = 0;
    return count;
  }
  deactivate() {
    this._active = false;
  }
}

export { createV1ReplTransport, createV2ReplTransport, FlushGate };
