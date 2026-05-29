// @bun
import {
  fetchUtilization,
  init_usage
} from "./chunk-8mvxw70s.js";
import {
  init_overageCreditGrant,
  invalidateOverageCreditGrantCache
} from "./chunk-9yvvqqct.js";
import {
  getOAuthHeaders,
  init_api,
  prepareApiRequest
} from "./chunk-92f9twfz.js";
import {
  init_browser,
  openBrowser
} from "./chunk-6dj3cf9s.js";
import {
  getGlobalConfig,
  getSubscriptionType,
  hasClaudeAiBillingAccess,
  init_auth,
  init_billing,
  init_config1 as init_config,
  saveGlobalConfig
} from "./chunk-1ghcng4e.js";
import {
  getOauthConfig,
  init_oauth
} from "./chunk-rh5a2rg9.js";
import {
  init_log,
  logError
} from "./chunk-w5ahy59y.js";
import {
  axios_default,
  init_axios
} from "./chunk-3v4d4h0t.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/services/api/adminRequests.ts
async function createAdminRequest(params) {
  const { accessToken, orgUUID } = await prepareApiRequest();
  const headers = {
    ...getOAuthHeaders(accessToken),
    "x-organization-uuid": orgUUID
  };
  const url = `${getOauthConfig().BASE_API_URL}/api/oauth/organizations/${orgUUID}/admin_requests`;
  const response = await axios_default.post(url, params, { headers });
  return response.data;
}
async function getMyAdminRequests(requestType, statuses) {
  const { accessToken, orgUUID } = await prepareApiRequest();
  const headers = {
    ...getOAuthHeaders(accessToken),
    "x-organization-uuid": orgUUID
  };
  let url = `${getOauthConfig().BASE_API_URL}/api/oauth/organizations/${orgUUID}/admin_requests/me?request_type=${requestType}`;
  for (const status of statuses) {
    url += `&statuses=${status}`;
  }
  const response = await axios_default.get(url, {
    headers
  });
  return response.data;
}
async function checkAdminRequestEligibility(requestType) {
  const { accessToken, orgUUID } = await prepareApiRequest();
  const headers = {
    ...getOAuthHeaders(accessToken),
    "x-organization-uuid": orgUUID
  };
  const url = `${getOauthConfig().BASE_API_URL}/api/oauth/organizations/${orgUUID}/admin_requests/eligibility?request_type=${requestType}`;
  const response = await axios_default.get(url, {
    headers
  });
  return response.data;
}
var init_adminRequests = __esm(() => {
  init_axios();
  init_oauth();
  init_api();
});

// src/commands/extra-usage/extra-usage-core.ts
async function runExtraUsage() {
  if (!getGlobalConfig().hasVisitedExtraUsage) {
    saveGlobalConfig((prev) => ({ ...prev, hasVisitedExtraUsage: true }));
  }
  invalidateOverageCreditGrantCache();
  const subscriptionType = getSubscriptionType();
  const isTeamOrEnterprise = subscriptionType === "team" || subscriptionType === "enterprise";
  const hasBillingAccess = hasClaudeAiBillingAccess();
  if (!hasBillingAccess && isTeamOrEnterprise) {
    let extraUsage;
    try {
      const utilization = await fetchUtilization();
      extraUsage = utilization?.extra_usage;
    } catch (error) {
      logError(error);
    }
    if (extraUsage?.is_enabled && extraUsage.monthly_limit === null) {
      return {
        type: "message",
        value: "Your organization already has unlimited extra usage. No request needed."
      };
    }
    try {
      const eligibility = await checkAdminRequestEligibility("limit_increase");
      if (eligibility?.is_allowed === false) {
        return {
          type: "message",
          value: "Please contact your admin to manage extra usage settings."
        };
      }
    } catch (error) {
      logError(error);
    }
    try {
      const pendingOrDismissedRequests = await getMyAdminRequests("limit_increase", ["pending", "dismissed"]);
      if (pendingOrDismissedRequests && pendingOrDismissedRequests.length > 0) {
        return {
          type: "message",
          value: "You have already submitted a request for extra usage to your admin."
        };
      }
    } catch (error) {
      logError(error);
    }
    try {
      await createAdminRequest({
        request_type: "limit_increase",
        details: null
      });
      return {
        type: "message",
        value: extraUsage?.is_enabled ? "Request sent to your admin to increase extra usage." : "Request sent to your admin to enable extra usage."
      };
    } catch (error) {
      logError(error);
    }
    return {
      type: "message",
      value: "Please contact your admin to manage extra usage settings."
    };
  }
  const url = isTeamOrEnterprise ? "https://claude.ai/admin-settings/usage" : "https://claude.ai/settings/usage";
  try {
    const opened = await openBrowser(url);
    return { type: "browser-opened", url, opened };
  } catch (error) {
    logError(error);
    return {
      type: "message",
      value: `Failed to open browser. Please visit ${url} to manage extra usage.`
    };
  }
}
var init_extra_usage_core = __esm(() => {
  init_adminRequests();
  init_overageCreditGrant();
  init_usage();
  init_auth();
  init_billing();
  init_browser();
  init_config();
  init_log();
});

export { runExtraUsage, init_extra_usage_core };
