// @bun
// src/utils/controlMessageCompat.ts
function normalizeControlMessageKeys(obj) {
  if (obj === null || typeof obj !== "object")
    return obj;
  const record = obj;
  if ("requestId" in record && !("request_id" in record)) {
    record.request_id = record.requestId;
    delete record.requestId;
  }
  if ("response" in record && record.response !== null && typeof record.response === "object") {
    const response = record.response;
    if ("requestId" in response && !("request_id" in response)) {
      response.request_id = response.requestId;
      delete response.requestId;
    }
  }
  return obj;
}

export { normalizeControlMessageKeys };
