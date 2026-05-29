// @bun
import {
  init_datadog,
  trackDatadogEvent
} from "./chunk-6rj8k2tr.js";
import {
  checkStatsigFeatureGate_CACHED_MAY_BE_STALE,
  init_firstPartyEventLogger,
  init_growthbook,
  init_sinkKillswitch,
  isSinkKilled,
  logEventTo1P,
  shouldSampleEvent
} from "./chunk-1ghcng4e.js";
import {
  attachAnalyticsSink,
  init_analytics,
  stripProtoFields
} from "./chunk-f2mhrmww.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/services/analytics/sink.ts
function shouldTrackDatadog() {
  if (isSinkKilled("datadog")) {
    return false;
  }
  if (isDatadogGateEnabled !== undefined) {
    return isDatadogGateEnabled;
  }
  try {
    return checkStatsigFeatureGate_CACHED_MAY_BE_STALE(DATADOG_GATE_NAME);
  } catch {
    return false;
  }
}
function logEventImpl(eventName, metadata) {
  const sampleResult = shouldSampleEvent(eventName);
  if (sampleResult === 0) {
    return;
  }
  const metadataWithSampleRate = sampleResult !== null ? { ...metadata, sample_rate: sampleResult } : metadata;
  if (shouldTrackDatadog()) {
    trackDatadogEvent(eventName, stripProtoFields(metadataWithSampleRate));
  }
  logEventTo1P(eventName, metadataWithSampleRate);
}
function logEventAsyncImpl(eventName, metadata) {
  logEventImpl(eventName, metadata);
  return Promise.resolve();
}
function initializeAnalyticsGates() {
  isDatadogGateEnabled = checkStatsigFeatureGate_CACHED_MAY_BE_STALE(DATADOG_GATE_NAME);
}
function initializeAnalyticsSink() {
  attachAnalyticsSink({
    logEvent: logEventImpl,
    logEventAsync: logEventAsyncImpl
  });
}
var DATADOG_GATE_NAME = "tengu_log_datadog_events", isDatadogGateEnabled;
var init_sink = __esm(() => {
  init_datadog();
  init_firstPartyEventLogger();
  init_growthbook();
  init_analytics();
  init_sinkKillswitch();
});

export { initializeAnalyticsGates, initializeAnalyticsSink, init_sink };
