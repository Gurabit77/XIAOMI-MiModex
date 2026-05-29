// @bun
import {
  getOAuthHeaders,
  init_api,
  prepareApiRequest
} from "./chunk-92f9twfz.js";
import {
  getGlobalConfig,
  getOauthAccountInfo,
  init_auth,
  init_config1 as init_config,
  saveGlobalConfig
} from "./chunk-1ghcng4e.js";
import {
  getOauthConfig,
  init_oauth
} from "./chunk-rh5a2rg9.js";
import {
  init_log,
  init_privacyLevel,
  isEssentialTrafficOnly,
  logError
} from "./chunk-w5ahy59y.js";
import {
  axios_default,
  init_axios
} from "./chunk-3v4d4h0t.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/services/api/overageCreditGrant.ts
async function fetchOverageCreditGrant() {
  try {
    const { accessToken, orgUUID } = await prepareApiRequest();
    const url = `${getOauthConfig().BASE_API_URL}/api/oauth/organizations/${orgUUID}/overage_credit_grant`;
    const response = await axios_default.get(url, {
      headers: getOAuthHeaders(accessToken)
    });
    return response.data;
  } catch (err) {
    logError(err);
    return null;
  }
}
function getCachedOverageCreditGrant() {
  const orgId = getOauthAccountInfo()?.organizationUuid;
  if (!orgId)
    return null;
  const cached = getGlobalConfig().overageCreditGrantCache?.[orgId];
  if (!cached)
    return null;
  if (Date.now() - cached.timestamp > CACHE_TTL_MS)
    return null;
  return cached.info;
}
function invalidateOverageCreditGrantCache() {
  const orgId = getOauthAccountInfo()?.organizationUuid;
  if (!orgId)
    return;
  const cache = getGlobalConfig().overageCreditGrantCache;
  if (!cache || !(orgId in cache))
    return;
  saveGlobalConfig((prev) => {
    const next = { ...prev.overageCreditGrantCache };
    delete next[orgId];
    return { ...prev, overageCreditGrantCache: next };
  });
}
async function refreshOverageCreditGrantCache() {
  if (isEssentialTrafficOnly())
    return;
  const orgId = getOauthAccountInfo()?.organizationUuid;
  if (!orgId)
    return;
  const info = await fetchOverageCreditGrant();
  if (!info)
    return;
  saveGlobalConfig((prev) => {
    const prevCached = prev.overageCreditGrantCache?.[orgId];
    const existing = prevCached?.info;
    const dataUnchanged = existing && existing.available === info.available && existing.eligible === info.eligible && existing.granted === info.granted && existing.amount_minor_units === info.amount_minor_units && existing.currency === info.currency;
    if (dataUnchanged && prevCached && Date.now() - prevCached.timestamp <= CACHE_TTL_MS) {
      return prev;
    }
    const entry = {
      info: dataUnchanged ? existing : info,
      timestamp: Date.now()
    };
    return {
      ...prev,
      overageCreditGrantCache: {
        ...prev.overageCreditGrantCache,
        [orgId]: entry
      }
    };
  });
}
function formatGrantAmount(info) {
  if (info.amount_minor_units == null || !info.currency)
    return null;
  if (info.currency.toUpperCase() === "USD") {
    const dollars = info.amount_minor_units / 100;
    return Number.isInteger(dollars) ? `$${dollars}` : `$${dollars.toFixed(2)}`;
  }
  return null;
}
var CACHE_TTL_MS;
var init_overageCreditGrant = __esm(() => {
  init_axios();
  init_oauth();
  init_auth();
  init_config();
  init_log();
  init_privacyLevel();
  init_api();
  CACHE_TTL_MS = 60 * 60 * 1000;
});

export { getCachedOverageCreditGrant, invalidateOverageCreditGrantCache, refreshOverageCreditGrantCache, formatGrantAmount, init_overageCreditGrant };
