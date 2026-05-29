// @bun
import {
  init_slowOperations,
  jsonParse,
  jsonStringify
} from "./chunk-rpbc3b7k.js";
import {
  axios_default,
  init_axios
} from "./chunk-3v4d4h0t.js";

// src/bridge/workSecret.ts
init_axios();
init_slowOperations();
function decodeWorkSecret(secret) {
  const json = Buffer.from(secret, "base64url").toString("utf-8");
  const parsed = jsonParse(json);
  if (!parsed || typeof parsed !== "object" || !("version" in parsed) || parsed.version !== 1) {
    throw new Error(`Unsupported work secret version: ${parsed && typeof parsed === "object" && "version" in parsed ? parsed.version : "unknown"}`);
  }
  const obj = parsed;
  if (typeof obj.session_ingress_token !== "string" || obj.session_ingress_token.length === 0) {
    throw new Error("Invalid work secret: missing or empty session_ingress_token");
  }
  if (typeof obj.api_base_url !== "string") {
    throw new Error("Invalid work secret: missing api_base_url");
  }
  return parsed;
}
function buildSdkUrl(apiBaseUrl, sessionId) {
  const isLocalhost = apiBaseUrl.includes("localhost") || apiBaseUrl.includes("127.0.0.1");
  const protocol = apiBaseUrl.startsWith("https") ? "wss" : "ws";
  const version = isLocalhost ? "v2" : "v1";
  const host = apiBaseUrl.replace(/^https?:\/\//, "").replace(/\/+$/, "");
  return `${protocol}://${host}/${version}/session_ingress/ws/${sessionId}`;
}
function sameSessionId(a, b) {
  if (a === b)
    return true;
  const aBody = a.slice(a.lastIndexOf("_") + 1);
  const bBody = b.slice(b.lastIndexOf("_") + 1);
  return aBody.length >= 4 && aBody === bBody;
}
function buildCCRv2SdkUrl(apiBaseUrl, sessionId) {
  const base = apiBaseUrl.replace(/\/+$/, "");
  return `${base}/v1/code/sessions/${sessionId}`;
}
async function registerWorker(sessionUrl, accessToken) {
  const response = await axios_default.post(`${sessionUrl}/worker/register`, {}, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      "anthropic-version": "2023-06-01"
    },
    timeout: 1e4
  });
  const raw = response.data?.worker_epoch;
  const epoch = typeof raw === "string" ? Number(raw) : raw;
  if (typeof epoch !== "number" || !Number.isFinite(epoch) || !Number.isSafeInteger(epoch)) {
    throw new Error(`registerWorker: invalid worker_epoch in response: ${jsonStringify(response.data)}`);
  }
  return epoch;
}

export { decodeWorkSecret, buildSdkUrl, sameSessionId, buildCCRv2SdkUrl, registerWorker };
