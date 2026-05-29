// @bun
import {
  init_store,
  setProviderBalance
} from "./chunk-x6pa9me9.js";
import"./chunk-qp2qdcda.js";

// src/services/providerUsage/balance/poller.ts
init_store();

// src/services/providerUsage/balance/deepseek.ts
function getBaseUrl() {
  const url = process.env.OPENAI_BASE_URL;
  if (url && /\bapi\.deepseek\.com\b/i.test(url))
    return url.replace(/\/+$/, "");
  if (process.env.DEEPSEEK_API_KEY)
    return "https://api.deepseek.com";
  return null;
}
function getApiKey() {
  return process.env.DEEPSEEK_API_KEY || process.env.OPENAI_API_KEY || null;
}
var deepseekBalanceProvider = {
  providerId: "deepseek",
  isEnabled() {
    return getBaseUrl() !== null && getApiKey() !== null;
  },
  async fetchBalance(signal) {
    const base = getBaseUrl();
    const key = getApiKey();
    if (!base || !key)
      return null;
    let res;
    try {
      res = await fetch(`${base}/user/balance`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${key}`,
          Accept: "application/json"
        },
        signal
      });
    } catch {
      return null;
    }
    if (!res.ok)
      return null;
    let data;
    try {
      data = await res.json();
    } catch {
      return null;
    }
    const infos = data?.balance_infos;
    if (!Array.isArray(infos))
      return null;
    const usd = infos.find((e) => typeof e === "object" && e !== null && e.currency === "USD");
    const pick = usd ?? infos[0] ?? null;
    if (!pick)
      return null;
    const currency = typeof pick.currency === "string" ? pick.currency : "USD";
    const remainingRaw = pick.total_balance;
    const remaining = typeof remainingRaw === "number" ? remainingRaw : Number(remainingRaw);
    if (!Number.isFinite(remaining))
      return null;
    return {
      currency,
      remaining,
      updatedAt: Math.floor(Date.now() / 1000)
    };
  }
};

// src/services/providerUsage/balance/generic.ts
function pickAtPath(obj, path) {
  if (!path)
    return obj;
  const parts = path.split(".").filter(Boolean);
  let cur = obj;
  for (const part of parts) {
    if (cur === null || cur === undefined)
      return;
    if (Array.isArray(cur)) {
      const idx = Number(part);
      if (!Number.isFinite(idx))
        return;
      cur = cur[idx];
    } else if (typeof cur === "object") {
      cur = cur[part];
    } else {
      return;
    }
  }
  return cur;
}
var PRIVATE_IP_RE = /^(10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.|169\.254\.|127\.|0\.0\.0\.0|fc|fd|\[::1\]|\[fe80:)/;
function assertSafeBalanceUrl(raw) {
  const parsed = new URL(raw);
  if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
    throw new Error(`unsupported protocol: ${parsed.protocol}`);
  }
  if (parsed.protocol === "http:" && !["localhost", "127.0.0.1", "[::1]"].includes(parsed.hostname)) {
    throw new Error(`http only allowed for localhost, got ${parsed.hostname}`);
  }
  if (PRIVATE_IP_RE.test(parsed.hostname)) {
    throw new Error(`private/reserved IP not allowed: ${parsed.hostname}`);
  }
  return parsed;
}
var genericBalanceProvider = {
  providerId: "generic",
  isEnabled() {
    return Boolean(process.env.CLAUDE_CODE_BALANCE_URL);
  },
  async fetchBalance(signal) {
    const rawUrl = process.env.CLAUDE_CODE_BALANCE_URL;
    if (!rawUrl)
      return null;
    let url;
    try {
      url = assertSafeBalanceUrl(rawUrl);
    } catch {
      return null;
    }
    const key = process.env.CLAUDE_CODE_BALANCE_KEY || process.env.OPENAI_API_KEY || process.env.ANTHROPIC_API_KEY || "";
    const path = process.env.CLAUDE_CODE_BALANCE_JSON_PATH || "balance";
    const currency = process.env.CLAUDE_CODE_BALANCE_CURRENCY || "USD";
    let res;
    try {
      res = await fetch(url.href, {
        method: "GET",
        headers: {
          Accept: "application/json",
          ...key ? { Authorization: `Bearer ${key}` } : {}
        },
        signal
      });
    } catch {
      return null;
    }
    if (!res.ok)
      return null;
    let data;
    try {
      data = await res.json();
    } catch {
      return null;
    }
    const raw = pickAtPath(data, path);
    const remaining = typeof raw === "number" ? raw : Number(raw);
    if (!Number.isFinite(remaining))
      return null;
    return {
      currency,
      remaining,
      updatedAt: Math.floor(Date.now() / 1000)
    };
  }
};

// src/services/providerUsage/balance/poller.ts
var DEFAULT_INTERVAL_MIN = 10;
var PROVIDERS = [
  genericBalanceProvider,
  deepseekBalanceProvider
];
function selectProvider() {
  if (process.env.CLAUDE_CODE_BALANCE_PROVIDER === "none")
    return null;
  return PROVIDERS.find((p) => p.isEnabled()) ?? null;
}
function intervalMs() {
  const raw = process.env.CLAUDE_CODE_BALANCE_POLL_INTERVAL_MINUTES;
  const n = raw ? Number(raw) : DEFAULT_INTERVAL_MIN;
  if (!Number.isFinite(n) || n <= 0)
    return DEFAULT_INTERVAL_MIN * 60000;
  return Math.floor(n * 60000);
}
var timer = null;
var inflight = null;
var active = null;
var FETCH_TIMEOUT_MS = 1e4;
async function tick() {
  if (!active)
    return;
  inflight?.abort();
  inflight = new AbortController;
  const timeout = setTimeout(() => inflight?.abort(), FETCH_TIMEOUT_MS);
  try {
    const balance = await active.fetchBalance(inflight.signal);
    setProviderBalance(active.providerId, balance);
  } catch {} finally {
    clearTimeout(timeout);
  }
}
function startBalancePolling() {
  if (timer !== null)
    return;
  active = selectProvider();
  if (!active)
    return;
  tick();
  timer = setInterval(() => {
    tick();
  }, intervalMs());
  if (typeof timer.unref === "function") {
    timer.unref();
  }
}
function stopBalancePolling() {
  if (timer !== null) {
    clearInterval(timer);
    timer = null;
  }
  inflight?.abort();
  inflight = null;
  active = null;
}
function getActiveBalanceProviderId() {
  return active?.providerId ?? null;
}
export {
  stopBalancePolling,
  startBalancePolling,
  getActiveBalanceProviderId
};
