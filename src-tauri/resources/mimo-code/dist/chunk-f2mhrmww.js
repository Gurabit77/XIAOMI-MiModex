// @bun
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/services/analytics/index.ts
function stripProtoFields(metadata) {
  let result;
  for (const key in metadata) {
    if (key.startsWith("_PROTO_")) {
      if (result === undefined) {
        result = { ...metadata };
      }
      delete result[key];
    }
  }
  return result ?? metadata;
}
function attachAnalyticsSink(newSink) {
  if (sink !== null) {
    return;
  }
  sink = newSink;
  if (eventQueue.length > 0) {
    const queuedEvents = [...eventQueue];
    eventQueue.length = 0;
    if (process.env.USER_TYPE === "ant") {
      sink.logEvent("analytics_sink_attached", {
        queued_event_count: queuedEvents.length
      });
    }
    queueMicrotask(() => {
      for (const event of queuedEvents) {
        if (event.async) {
          sink.logEventAsync(event.eventName, event.metadata);
        } else {
          sink.logEvent(event.eventName, event.metadata);
        }
      }
    });
  }
}
function logEvent(eventName, metadata) {
  if (sink === null) {
    eventQueue.push({ eventName, metadata, async: false });
    return;
  }
  sink.logEvent(eventName, metadata);
}
async function logEventAsync(eventName, metadata) {
  if (sink === null) {
    eventQueue.push({ eventName, metadata, async: true });
    return;
  }
  await sink.logEventAsync(eventName, metadata);
}
var eventQueue, sink = null;
var init_analytics = __esm(() => {
  eventQueue = [];
});

export { stripProtoFields, attachAnalyticsSink, logEvent, logEventAsync, init_analytics };
