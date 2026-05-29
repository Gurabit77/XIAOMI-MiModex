// @bun
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

// node_modules/.bun/@aws-sdk+credential-provider-sso@3.972.35/node_modules/@aws-sdk/credential-provider-sso/dist-es/isSsoProfile.js
var isSsoProfile = (arg) => arg && (typeof arg.sso_start_url === "string" || typeof arg.sso_account_id === "string" || typeof arg.sso_session === "string" || typeof arg.sso_region === "string" || typeof arg.sso_role_name === "string");
var init_isSsoProfile = () => {};

// node_modules/.bun/@aws-sdk+token-providers@3.1036.0/node_modules/@aws-sdk/token-providers/dist-es/fromEnvSigningName.js
var init_fromEnvSigningName = () => {};

// node_modules/.bun/@aws-sdk+token-providers@3.1036.0/node_modules/@aws-sdk/token-providers/dist-es/constants.js
var EXPIRE_WINDOW_MS, REFRESH_MESSAGE = `To refresh this SSO session run 'aws sso login' with the corresponding profile.`;
var init_constants = __esm(() => {
  EXPIRE_WINDOW_MS = 5 * 60 * 1000;
});

// node_modules/.bun/@aws-sdk+token-providers@3.1036.0/node_modules/@aws-sdk/token-providers/dist-es/getSsoOidcClient.js
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

// node_modules/.bun/@aws-sdk+token-providers@3.1036.0/node_modules/@aws-sdk/token-providers/dist-es/getNewSsoOidcToken.js
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

// node_modules/.bun/@aws-sdk+token-providers@3.1036.0/node_modules/@aws-sdk/token-providers/dist-es/validateTokenExpiry.js
var import_property_provider, validateTokenExpiry = (token) => {
  if (token.expiration && token.expiration.getTime() < Date.now()) {
    throw new import_property_provider.TokenProviderError(`Token is expired. ${REFRESH_MESSAGE}`, false);
  }
};
var init_validateTokenExpiry = __esm(() => {
  init_constants();
  import_property_provider = __toESM(require_dist_cjs(), 1);
});

// node_modules/.bun/@aws-sdk+token-providers@3.1036.0/node_modules/@aws-sdk/token-providers/dist-es/validateTokenKey.js
var import_property_provider2, validateTokenKey = (key, value, forRefresh = false) => {
  if (typeof value === "undefined") {
    throw new import_property_provider2.TokenProviderError(`Value not present for '${key}' in SSO Token${forRefresh ? ". Cannot refresh" : ""}. ${REFRESH_MESSAGE}`, false);
  }
};
var init_validateTokenKey = __esm(() => {
  init_constants();
  import_property_provider2 = __toESM(require_dist_cjs(), 1);
});

// node_modules/.bun/@aws-sdk+token-providers@3.1036.0/node_modules/@aws-sdk/token-providers/dist-es/writeSSOTokenToFile.js
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

// node_modules/.bun/@aws-sdk+token-providers@3.1036.0/node_modules/@aws-sdk/token-providers/dist-es/fromSso.js
var import_property_provider3, import_shared_ini_file_loader2, lastRefreshAttemptTime, fromSso = (init = {}) => async ({ callerClientConfig } = {}) => {
  init.logger?.debug("@aws-sdk/token-providers - fromSso");
  const profiles = await import_shared_ini_file_loader2.parseKnownFiles(init);
  const profileName = import_shared_ini_file_loader2.getProfileName({
    profile: init.profile ?? callerClientConfig?.profile
  });
  const profile = profiles[profileName];
  if (!profile) {
    throw new import_property_provider3.TokenProviderError(`Profile '${profileName}' could not be found in shared credentials file.`, false);
  } else if (!profile["sso_session"]) {
    throw new import_property_provider3.TokenProviderError(`Profile '${profileName}' is missing required property 'sso_session'.`);
  }
  const ssoSessionName = profile["sso_session"];
  const ssoSessions = await import_shared_ini_file_loader2.loadSsoSessionData(init);
  const ssoSession = ssoSessions[ssoSessionName];
  if (!ssoSession) {
    throw new import_property_provider3.TokenProviderError(`Sso session '${ssoSessionName}' could not be found in shared credentials file.`, false);
  }
  for (const ssoSessionRequiredKey of ["sso_start_url", "sso_region"]) {
    if (!ssoSession[ssoSessionRequiredKey]) {
      throw new import_property_provider3.TokenProviderError(`Sso session '${ssoSessionName}' is missing required property '${ssoSessionRequiredKey}'.`, false);
    }
  }
  const ssoStartUrl = ssoSession["sso_start_url"];
  const ssoRegion = ssoSession["sso_region"];
  let ssoToken;
  try {
    ssoToken = await import_shared_ini_file_loader2.getSSOTokenFromFile(ssoSessionName);
  } catch (e) {
    throw new import_property_provider3.TokenProviderError(`The SSO session token associated with profile=${profileName} was not found or is invalid. ${REFRESH_MESSAGE}`, false);
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
  import_property_provider3 = __toESM(require_dist_cjs(), 1);
  import_shared_ini_file_loader2 = __toESM(require_dist_cjs2(), 1);
  lastRefreshAttemptTime = new Date(0);
});

// node_modules/.bun/@aws-sdk+token-providers@3.1036.0/node_modules/@aws-sdk/token-providers/dist-es/fromStatic.js
var init_fromStatic = () => {};

// node_modules/.bun/@aws-sdk+token-providers@3.1036.0/node_modules/@aws-sdk/token-providers/dist-es/nodeProvider.js
var init_nodeProvider = () => {};

// node_modules/.bun/@aws-sdk+token-providers@3.1036.0/node_modules/@aws-sdk/token-providers/dist-es/index.js
var init_dist_es = __esm(() => {
  init_fromEnvSigningName();
  init_fromSso();
  init_fromStatic();
  init_nodeProvider();
});

// node_modules/.bun/@aws-sdk+credential-provider-sso@3.972.35/node_modules/@aws-sdk/credential-provider-sso/dist-es/resolveSSOCredentials.js
var import_client, import_property_provider4, import_shared_ini_file_loader3, SHOULD_FAIL_CREDENTIAL_CHAIN = false, resolveSSOCredentials = async ({ ssoStartUrl, ssoSession, ssoAccountId, ssoRegion, ssoRoleName, ssoClient, clientConfig, parentClientConfig, callerClientConfig, profile, filepath, configFilepath, ignoreCache, logger }) => {
  let token;
  const refreshMessage = `To refresh this SSO session run aws sso login with the corresponding profile.`;
  if (ssoSession) {
    try {
      const _token = await fromSso({
        profile,
        filepath,
        configFilepath,
        ignoreCache
      })();
      token = {
        accessToken: _token.token,
        expiresAt: new Date(_token.expiration).toISOString()
      };
    } catch (e) {
      throw new import_property_provider4.CredentialsProviderError(e.message, {
        tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
        logger
      });
    }
  } else {
    try {
      token = await import_shared_ini_file_loader3.getSSOTokenFromFile(ssoStartUrl);
    } catch (e) {
      throw new import_property_provider4.CredentialsProviderError(`The SSO session associated with this profile is invalid. ${refreshMessage}`, {
        tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
        logger
      });
    }
  }
  if (new Date(token.expiresAt).getTime() - Date.now() <= 0) {
    throw new import_property_provider4.CredentialsProviderError(`The SSO session associated with this profile has expired. ${refreshMessage}`, {
      tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
      logger
    });
  }
  const { accessToken } = token;
  const { SSOClient, GetRoleCredentialsCommand } = await import("./chunk-enmrm2ma.js");
  const sso = ssoClient || new SSOClient(Object.assign({}, clientConfig ?? {}, {
    logger: clientConfig?.logger ?? callerClientConfig?.logger ?? parentClientConfig?.logger,
    region: clientConfig?.region ?? ssoRegion,
    userAgentAppId: clientConfig?.userAgentAppId ?? callerClientConfig?.userAgentAppId ?? parentClientConfig?.userAgentAppId
  }));
  let ssoResp;
  try {
    ssoResp = await sso.send(new GetRoleCredentialsCommand({
      accountId: ssoAccountId,
      roleName: ssoRoleName,
      accessToken
    }));
  } catch (e) {
    throw new import_property_provider4.CredentialsProviderError(e, {
      tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
      logger
    });
  }
  const { roleCredentials: { accessKeyId, secretAccessKey, sessionToken, expiration, credentialScope, accountId } = {} } = ssoResp;
  if (!accessKeyId || !secretAccessKey || !sessionToken || !expiration) {
    throw new import_property_provider4.CredentialsProviderError("SSO returns an invalid temporary credential.", {
      tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
      logger
    });
  }
  const credentials = {
    accessKeyId,
    secretAccessKey,
    sessionToken,
    expiration: new Date(expiration),
    ...credentialScope && { credentialScope },
    ...accountId && { accountId }
  };
  if (ssoSession) {
    import_client.setCredentialFeature(credentials, "CREDENTIALS_SSO", "s");
  } else {
    import_client.setCredentialFeature(credentials, "CREDENTIALS_SSO_LEGACY", "u");
  }
  return credentials;
};
var init_resolveSSOCredentials = __esm(() => {
  init_dist_es();
  import_client = __toESM(require_client(), 1);
  import_property_provider4 = __toESM(require_dist_cjs(), 1);
  import_shared_ini_file_loader3 = __toESM(require_dist_cjs2(), 1);
});

// node_modules/.bun/@aws-sdk+credential-provider-sso@3.972.35/node_modules/@aws-sdk/credential-provider-sso/dist-es/validateSsoProfile.js
var import_property_provider5, validateSsoProfile = (profile, logger) => {
  const { sso_start_url, sso_account_id, sso_region, sso_role_name } = profile;
  if (!sso_start_url || !sso_account_id || !sso_region || !sso_role_name) {
    throw new import_property_provider5.CredentialsProviderError(`Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", ` + `"sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(profile).join(", ")}
Reference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`, { tryNextLink: false, logger });
  }
  return profile;
};
var init_validateSsoProfile = __esm(() => {
  import_property_provider5 = __toESM(require_dist_cjs(), 1);
});

// node_modules/.bun/@aws-sdk+credential-provider-sso@3.972.35/node_modules/@aws-sdk/credential-provider-sso/dist-es/fromSSO.js
var import_property_provider6, import_shared_ini_file_loader4, fromSSO = (init = {}) => async ({ callerClientConfig } = {}) => {
  init.logger?.debug("@aws-sdk/credential-provider-sso - fromSSO");
  const { ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoSession } = init;
  const { ssoClient } = init;
  const profileName = import_shared_ini_file_loader4.getProfileName({
    profile: init.profile ?? callerClientConfig?.profile
  });
  if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName && !ssoSession) {
    const profiles = await import_shared_ini_file_loader4.parseKnownFiles(init);
    const profile = profiles[profileName];
    if (!profile) {
      throw new import_property_provider6.CredentialsProviderError(`Profile ${profileName} was not found.`, { logger: init.logger });
    }
    if (!isSsoProfile(profile)) {
      throw new import_property_provider6.CredentialsProviderError(`Profile ${profileName} is not configured with SSO credentials.`, {
        logger: init.logger
      });
    }
    if (profile?.sso_session) {
      const ssoSessions = await import_shared_ini_file_loader4.loadSsoSessionData(init);
      const session = ssoSessions[profile.sso_session];
      const conflictMsg = ` configurations in profile ${profileName} and sso-session ${profile.sso_session}`;
      if (ssoRegion && ssoRegion !== session.sso_region) {
        throw new import_property_provider6.CredentialsProviderError(`Conflicting SSO region` + conflictMsg, {
          tryNextLink: false,
          logger: init.logger
        });
      }
      if (ssoStartUrl && ssoStartUrl !== session.sso_start_url) {
        throw new import_property_provider6.CredentialsProviderError(`Conflicting SSO start_url` + conflictMsg, {
          tryNextLink: false,
          logger: init.logger
        });
      }
      profile.sso_region = session.sso_region;
      profile.sso_start_url = session.sso_start_url;
    }
    const { sso_start_url, sso_account_id, sso_region, sso_role_name, sso_session } = validateSsoProfile(profile, init.logger);
    return resolveSSOCredentials({
      ssoStartUrl: sso_start_url,
      ssoSession: sso_session,
      ssoAccountId: sso_account_id,
      ssoRegion: sso_region,
      ssoRoleName: sso_role_name,
      ssoClient,
      clientConfig: init.clientConfig,
      parentClientConfig: init.parentClientConfig,
      callerClientConfig: init.callerClientConfig,
      profile: profileName,
      filepath: init.filepath,
      configFilepath: init.configFilepath,
      ignoreCache: init.ignoreCache,
      logger: init.logger
    });
  } else if (!ssoStartUrl || !ssoAccountId || !ssoRegion || !ssoRoleName) {
    throw new import_property_provider6.CredentialsProviderError("Incomplete configuration. The fromSSO() argument hash must include " + '"ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"', { tryNextLink: false, logger: init.logger });
  } else {
    return resolveSSOCredentials({
      ssoStartUrl,
      ssoSession,
      ssoAccountId,
      ssoRegion,
      ssoRoleName,
      ssoClient,
      clientConfig: init.clientConfig,
      parentClientConfig: init.parentClientConfig,
      callerClientConfig: init.callerClientConfig,
      profile: profileName,
      filepath: init.filepath,
      configFilepath: init.configFilepath,
      ignoreCache: init.ignoreCache,
      logger: init.logger
    });
  }
};
var init_fromSSO = __esm(() => {
  init_isSsoProfile();
  init_resolveSSOCredentials();
  init_validateSsoProfile();
  import_property_provider6 = __toESM(require_dist_cjs(), 1);
  import_shared_ini_file_loader4 = __toESM(require_dist_cjs2(), 1);
});

// node_modules/.bun/@aws-sdk+credential-provider-sso@3.972.35/node_modules/@aws-sdk/credential-provider-sso/dist-es/types.js
var init_types = () => {};

// node_modules/.bun/@aws-sdk+credential-provider-sso@3.972.35/node_modules/@aws-sdk/credential-provider-sso/dist-es/index.js
var init_dist_es2 = __esm(() => {
  init_fromSSO();
  init_isSsoProfile();
  init_types();
  init_validateSsoProfile();
});

export { isSsoProfile, validateSsoProfile, fromSSO, init_dist_es2 as init_dist_es };
