// @bun
import {
  require_httpAuthSchemes
} from "./chunk-57y89twd.js";
import {
  require_client
} from "./chunk-cahmkqhh.js";
import {
  require_dist_cjs as require_dist_cjs2
} from "./chunk-6vqkv5g7.js";
import {
  require_dist_cjs
} from "./chunk-27an25fd.js";
import {
  __esm,
  __require,
  __toESM
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@aws-sdk+token-providers@3.1037.0/node_modules/@aws-sdk/token-providers/dist-es/fromEnvSigningName.js
var import_client, import_httpAuthSchemes, import_property_provider, fromEnvSigningName = ({ logger, signingName } = {}) => async () => {
  logger?.debug?.("@aws-sdk/token-providers - fromEnvSigningName");
  if (!signingName) {
    throw new import_property_provider.TokenProviderError("Please pass 'signingName' to compute environment variable key", { logger });
  }
  const bearerTokenKey = import_httpAuthSchemes.getBearerTokenEnvKey(signingName);
  if (!(bearerTokenKey in process.env)) {
    throw new import_property_provider.TokenProviderError(`Token not present in '${bearerTokenKey}' environment variable`, { logger });
  }
  const token = { token: process.env[bearerTokenKey] };
  import_client.setTokenFeature(token, "BEARER_SERVICE_ENV_VARS", "3");
  return token;
};
var init_fromEnvSigningName = __esm(() => {
  import_client = __toESM(require_client(), 1);
  import_httpAuthSchemes = __toESM(require_httpAuthSchemes(), 1);
  import_property_provider = __toESM(require_dist_cjs(), 1);
});

// node_modules/.bun/@aws-sdk+token-providers@3.1037.0/node_modules/@aws-sdk/token-providers/dist-es/constants.js
var EXPIRE_WINDOW_MS, REFRESH_MESSAGE = `To refresh this SSO session run 'aws sso login' with the corresponding profile.`;
var init_constants = __esm(() => {
  EXPIRE_WINDOW_MS = 5 * 60 * 1000;
});

// node_modules/.bun/@aws-sdk+token-providers@3.1037.0/node_modules/@aws-sdk/token-providers/dist-es/getSsoOidcClient.js
var getSsoOidcClient = async (ssoRegion, init = {}, callerClientConfig) => {
  const { SSOOIDCClient } = await import("./chunk-0zv1jprf.js").then((m)=>__toESM(m.default,1));
  const coalesce = (prop) => init.clientConfig?.[prop] ?? init.parentClientConfig?.[prop] ?? callerClientConfig?.[prop];
  const ssoOidcClient = new SSOOIDCClient(Object.assign({}, init.clientConfig ?? {}, {
    region: ssoRegion ?? init.clientConfig?.region,
    logger: coalesce("logger"),
    userAgentAppId: coalesce("userAgentAppId")
  }));
  return ssoOidcClient;
};
var init_getSsoOidcClient = () => {};

// node_modules/.bun/@aws-sdk+token-providers@3.1037.0/node_modules/@aws-sdk/token-providers/dist-es/getNewSsoOidcToken.js
var getNewSsoOidcToken = async (ssoToken, ssoRegion, init = {}, callerClientConfig) => {
  const { CreateTokenCommand } = await import("./chunk-0zv1jprf.js").then((m)=>__toESM(m.default,1));
  const ssoOidcClient = await getSsoOidcClient(ssoRegion, init, callerClientConfig);
  return ssoOidcClient.send(new CreateTokenCommand({
    clientId: ssoToken.clientId,
    clientSecret: ssoToken.clientSecret,
    refreshToken: ssoToken.refreshToken,
    grantType: "refresh_token"
  }));
};
var init_getNewSsoOidcToken = __esm(() => {
  init_getSsoOidcClient();
});

// node_modules/.bun/@aws-sdk+token-providers@3.1037.0/node_modules/@aws-sdk/token-providers/dist-es/validateTokenExpiry.js
var import_property_provider2, validateTokenExpiry = (token) => {
  if (token.expiration && token.expiration.getTime() < Date.now()) {
    throw new import_property_provider2.TokenProviderError(`Token is expired. ${REFRESH_MESSAGE}`, false);
  }
};
var init_validateTokenExpiry = __esm(() => {
  init_constants();
  import_property_provider2 = __toESM(require_dist_cjs(), 1);
});

// node_modules/.bun/@aws-sdk+token-providers@3.1037.0/node_modules/@aws-sdk/token-providers/dist-es/validateTokenKey.js
var import_property_provider3, validateTokenKey = (key, value, forRefresh = false) => {
  if (typeof value === "undefined") {
    throw new import_property_provider3.TokenProviderError(`Value not present for '${key}' in SSO Token${forRefresh ? ". Cannot refresh" : ""}. ${REFRESH_MESSAGE}`, false);
  }
};
var init_validateTokenKey = __esm(() => {
  init_constants();
  import_property_provider3 = __toESM(require_dist_cjs(), 1);
});

// node_modules/.bun/@aws-sdk+token-providers@3.1037.0/node_modules/@aws-sdk/token-providers/dist-es/writeSSOTokenToFile.js
import { promises as fsPromises } from "fs";
var import_shared_ini_file_loader, writeFile, writeSSOTokenToFile = (id, ssoToken) => {
  const tokenFilepath = import_shared_ini_file_loader.getSSOTokenFilepath(id);
  const tokenString = JSON.stringify(ssoToken, null, 2);
  return writeFile(tokenFilepath, tokenString);
};
var init_writeSSOTokenToFile = __esm(() => {
  import_shared_ini_file_loader = __toESM(require_dist_cjs2(), 1);
  ({ writeFile } = fsPromises);
});

// node_modules/.bun/@aws-sdk+token-providers@3.1037.0/node_modules/@aws-sdk/token-providers/dist-es/fromSso.js
var import_property_provider4, import_shared_ini_file_loader2, lastRefreshAttemptTime, fromSso = (init = {}) => async ({ callerClientConfig } = {}) => {
  init.logger?.debug("@aws-sdk/token-providers - fromSso");
  const profiles = await import_shared_ini_file_loader2.parseKnownFiles(init);
  const profileName = import_shared_ini_file_loader2.getProfileName({
    profile: init.profile ?? callerClientConfig?.profile
  });
  const profile = profiles[profileName];
  if (!profile) {
    throw new import_property_provider4.TokenProviderError(`Profile '${profileName}' could not be found in shared credentials file.`, false);
  } else if (!profile["sso_session"]) {
    throw new import_property_provider4.TokenProviderError(`Profile '${profileName}' is missing required property 'sso_session'.`);
  }
  const ssoSessionName = profile["sso_session"];
  const ssoSessions = await import_shared_ini_file_loader2.loadSsoSessionData(init);
  const ssoSession = ssoSessions[ssoSessionName];
  if (!ssoSession) {
    throw new import_property_provider4.TokenProviderError(`Sso session '${ssoSessionName}' could not be found in shared credentials file.`, false);
  }
  for (const ssoSessionRequiredKey of ["sso_start_url", "sso_region"]) {
    if (!ssoSession[ssoSessionRequiredKey]) {
      throw new import_property_provider4.TokenProviderError(`Sso session '${ssoSessionName}' is missing required property '${ssoSessionRequiredKey}'.`, false);
    }
  }
  const ssoStartUrl = ssoSession["sso_start_url"];
  const ssoRegion = ssoSession["sso_region"];
  let ssoToken;
  try {
    ssoToken = await import_shared_ini_file_loader2.getSSOTokenFromFile(ssoSessionName);
  } catch (e) {
    throw new import_property_provider4.TokenProviderError(`The SSO session token associated with profile=${profileName} was not found or is invalid. ${REFRESH_MESSAGE}`, false);
  }
  validateTokenKey("accessToken", ssoToken.accessToken);
  validateTokenKey("expiresAt", ssoToken.expiresAt);
  const { accessToken, expiresAt } = ssoToken;
  const existingToken = { token: accessToken, expiration: new Date(expiresAt) };
  if (existingToken.expiration.getTime() - Date.now() > EXPIRE_WINDOW_MS) {
    return existingToken;
  }
  if (Date.now() - lastRefreshAttemptTime.getTime() < 30 * 1000) {
    validateTokenExpiry(existingToken);
    return existingToken;
  }
  validateTokenKey("clientId", ssoToken.clientId, true);
  validateTokenKey("clientSecret", ssoToken.clientSecret, true);
  validateTokenKey("refreshToken", ssoToken.refreshToken, true);
  try {
    lastRefreshAttemptTime.setTime(Date.now());
    const newSsoOidcToken = await getNewSsoOidcToken(ssoToken, ssoRegion, init, callerClientConfig);
    validateTokenKey("accessToken", newSsoOidcToken.accessToken);
    validateTokenKey("expiresIn", newSsoOidcToken.expiresIn);
    const newTokenExpiration = new Date(Date.now() + newSsoOidcToken.expiresIn * 1000);
    try {
      await writeSSOTokenToFile(ssoSessionName, {
        ...ssoToken,
        accessToken: newSsoOidcToken.accessToken,
        expiresAt: newTokenExpiration.toISOString(),
        refreshToken: newSsoOidcToken.refreshToken
      });
    } catch (error) {}
    return {
      token: newSsoOidcToken.accessToken,
      expiration: newTokenExpiration
    };
  } catch (error) {
    validateTokenExpiry(existingToken);
    return existingToken;
  }
};
var init_fromSso = __esm(() => {
  init_constants();
  init_getNewSsoOidcToken();
  init_validateTokenExpiry();
  init_validateTokenKey();
  init_writeSSOTokenToFile();
  import_property_provider4 = __toESM(require_dist_cjs(), 1);
  import_shared_ini_file_loader2 = __toESM(require_dist_cjs2(), 1);
  lastRefreshAttemptTime = new Date(0);
});

// node_modules/.bun/@aws-sdk+token-providers@3.1037.0/node_modules/@aws-sdk/token-providers/dist-es/nodeProvider.js
var import_property_provider5, nodeProvider = (init = {}) => import_property_provider5.memoize(import_property_provider5.chain(fromSso(init), async () => {
  throw new import_property_provider5.TokenProviderError("Could not load token from any providers", false);
}), (token) => token.expiration !== undefined && token.expiration.getTime() - Date.now() < 300000, (token) => token.expiration !== undefined);
var init_nodeProvider = __esm(() => {
  init_fromSso();
  import_property_provider5 = __toESM(require_dist_cjs(), 1);
});

// node_modules/.bun/@aws-sdk+token-providers@3.1037.0/node_modules/@aws-sdk/token-providers/dist-es/fromStatic.js
var init_fromStatic = () => {};

// node_modules/.bun/@aws-sdk+token-providers@3.1037.0/node_modules/@aws-sdk/token-providers/dist-es/index.js
var init_dist_es = __esm(() => {
  init_fromEnvSigningName();
  init_fromSso();
  init_fromStatic();
  init_nodeProvider();
});

export { fromEnvSigningName, nodeProvider, init_dist_es };
