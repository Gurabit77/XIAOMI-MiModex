// @bun
import {
  require_dist_cjs as require_dist_cjs5
} from "./chunk-9r117f3a.js";
import {
  require_dist_cjs as require_dist_cjs3,
  require_dist_cjs1 as require_dist_cjs4
} from "./chunk-6qkspz0q.js";
import {
  require_client
} from "./chunk-cahmkqhh.js";
import {
  require_dist_cjs
} from "./chunk-gd1ye7ef.js";
import {
  require_dist_cjs as require_dist_cjs2
} from "./chunk-27an25fd.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@aws-sdk+credential-provider-http@3.972.33/node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/checkUrl.js
var import_property_provider, ECS_CONTAINER_HOST = "169.254.170.2", EKS_CONTAINER_HOST_IPv4 = "169.254.170.23", EKS_CONTAINER_HOST_IPv6 = "[fd00:ec2::23]", checkUrl = (url, logger) => {
  if (url.protocol === "https:") {
    return;
  }
  if (url.hostname === ECS_CONTAINER_HOST || url.hostname === EKS_CONTAINER_HOST_IPv4 || url.hostname === EKS_CONTAINER_HOST_IPv6) {
    return;
  }
  if (url.hostname.includes("[")) {
    if (url.hostname === "[::1]" || url.hostname === "[0000:0000:0000:0000:0000:0000:0000:0001]") {
      return;
    }
  } else {
    if (url.hostname === "localhost") {
      return;
    }
    const ipComponents = url.hostname.split(".");
    const inRange = (component) => {
      const num = parseInt(component, 10);
      return 0 <= num && num <= 255;
    };
    if (ipComponents[0] === "127" && inRange(ipComponents[1]) && inRange(ipComponents[2]) && inRange(ipComponents[3]) && ipComponents.length === 4) {
      return;
    }
  }
  throw new import_property_provider.CredentialsProviderError(`URL not accepted. It must either be HTTPS or match one of the following:
  - loopback CIDR 127.0.0.0/8 or [::1/128]
  - ECS container host 169.254.170.2
  - EKS container host 169.254.170.23 or [fd00:ec2::23]`, { logger });
};
var init_checkUrl = __esm(() => {
  import_property_provider = __toESM(require_dist_cjs2(), 1);
});

// node_modules/.bun/@aws-sdk+credential-provider-http@3.972.33/node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/requestHelpers.js
function createGetRequest(url) {
  return new import_protocol_http.HttpRequest({
    protocol: url.protocol,
    hostname: url.hostname,
    port: Number(url.port),
    path: url.pathname,
    query: Array.from(url.searchParams.entries()).reduce((acc, [k, v]) => {
      acc[k] = v;
      return acc;
    }, {}),
    fragment: url.hash
  });
}
async function getCredentials(response, logger) {
  const stream = import_util_stream.sdkStreamMixin(response.body);
  const str = await stream.transformToString();
  if (response.statusCode === 200) {
    const parsed = JSON.parse(str);
    if (typeof parsed.AccessKeyId !== "string" || typeof parsed.SecretAccessKey !== "string" || typeof parsed.Token !== "string" || typeof parsed.Expiration !== "string") {
      throw new import_property_provider2.CredentialsProviderError("HTTP credential provider response not of the required format, an object matching: " + "{ AccessKeyId: string, SecretAccessKey: string, Token: string, Expiration: string(rfc3339) }", { logger });
    }
    return {
      accessKeyId: parsed.AccessKeyId,
      secretAccessKey: parsed.SecretAccessKey,
      sessionToken: parsed.Token,
      expiration: import_smithy_client.parseRfc3339DateTime(parsed.Expiration)
    };
  }
  if (response.statusCode >= 400 && response.statusCode < 500) {
    let parsedBody = {};
    try {
      parsedBody = JSON.parse(str);
    } catch (e) {}
    throw Object.assign(new import_property_provider2.CredentialsProviderError(`Server responded with status: ${response.statusCode}`, { logger }), {
      Code: parsedBody.Code,
      Message: parsedBody.Message
    });
  }
  throw new import_property_provider2.CredentialsProviderError(`Server responded with status: ${response.statusCode}`, { logger });
}
var import_property_provider2, import_protocol_http, import_smithy_client, import_util_stream;
var init_requestHelpers = __esm(() => {
  import_property_provider2 = __toESM(require_dist_cjs2(), 1);
  import_protocol_http = __toESM(require_dist_cjs(), 1);
  import_smithy_client = __toESM(require_dist_cjs5(), 1);
  import_util_stream = __toESM(require_dist_cjs4(), 1);
});

// node_modules/.bun/@aws-sdk+credential-provider-http@3.972.33/node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/retry-wrapper.js
var retryWrapper = (toRetry, maxRetries, delayMs) => {
  return async () => {
    for (let i = 0;i < maxRetries; ++i) {
      try {
        return await toRetry();
      } catch (e) {
        await new Promise((resolve) => setTimeout(resolve, delayMs));
      }
    }
    return await toRetry();
  };
};
var init_retry_wrapper = () => {};

// node_modules/.bun/@aws-sdk+credential-provider-http@3.972.33/node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/fromHttp.js
import fs from "fs/promises";
var import_client, import_node_http_handler, import_property_provider3, AWS_CONTAINER_CREDENTIALS_RELATIVE_URI = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI", DEFAULT_LINK_LOCAL_HOST = "http://169.254.170.2", AWS_CONTAINER_CREDENTIALS_FULL_URI = "AWS_CONTAINER_CREDENTIALS_FULL_URI", AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE = "AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE", AWS_CONTAINER_AUTHORIZATION_TOKEN = "AWS_CONTAINER_AUTHORIZATION_TOKEN", fromHttp = (options = {}) => {
  options.logger?.debug("@aws-sdk/credential-provider-http - fromHttp");
  let host;
  const relative = options.awsContainerCredentialsRelativeUri ?? process.env[AWS_CONTAINER_CREDENTIALS_RELATIVE_URI];
  const full = options.awsContainerCredentialsFullUri ?? process.env[AWS_CONTAINER_CREDENTIALS_FULL_URI];
  const token = options.awsContainerAuthorizationToken ?? process.env[AWS_CONTAINER_AUTHORIZATION_TOKEN];
  const tokenFile = options.awsContainerAuthorizationTokenFile ?? process.env[AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE];
  const warn = options.logger?.constructor?.name === "NoOpLogger" || !options.logger?.warn ? console.warn : options.logger.warn.bind(options.logger);
  if (relative && full) {
    warn("@aws-sdk/credential-provider-http: " + "you have set both awsContainerCredentialsRelativeUri and awsContainerCredentialsFullUri.");
    warn("awsContainerCredentialsFullUri will take precedence.");
  }
  if (token && tokenFile) {
    warn("@aws-sdk/credential-provider-http: " + "you have set both awsContainerAuthorizationToken and awsContainerAuthorizationTokenFile.");
    warn("awsContainerAuthorizationToken will take precedence.");
  }
  if (full) {
    host = full;
  } else if (relative) {
    host = `${DEFAULT_LINK_LOCAL_HOST}${relative}`;
  } else {
    throw new import_property_provider3.CredentialsProviderError(`No HTTP credential provider host provided.
Set AWS_CONTAINER_CREDENTIALS_FULL_URI or AWS_CONTAINER_CREDENTIALS_RELATIVE_URI.`, { logger: options.logger });
  }
  const url = new URL(host);
  checkUrl(url, options.logger);
  const requestHandler = import_node_http_handler.NodeHttpHandler.create({
    requestTimeout: options.timeout ?? 1000,
    connectionTimeout: options.timeout ?? 1000
  });
  return retryWrapper(async () => {
    const request = createGetRequest(url);
    if (token) {
      request.headers.Authorization = token;
    } else if (tokenFile) {
      request.headers.Authorization = (await fs.readFile(tokenFile)).toString();
    }
    try {
      const result = await requestHandler.handle(request);
      return getCredentials(result.response).then((creds) => import_client.setCredentialFeature(creds, "CREDENTIALS_HTTP", "z"));
    } catch (e) {
      throw new import_property_provider3.CredentialsProviderError(String(e), { logger: options.logger });
    }
  }, options.maxRetries ?? 3, options.timeout ?? 1000);
};
var init_fromHttp = __esm(() => {
  init_checkUrl();
  init_requestHelpers();
  init_retry_wrapper();
  import_client = __toESM(require_client(), 1);
  import_node_http_handler = __toESM(require_dist_cjs3(), 1);
  import_property_provider3 = __toESM(require_dist_cjs2(), 1);
});

// node_modules/.bun/@aws-sdk+credential-provider-http@3.972.33/node_modules/@aws-sdk/credential-provider-http/dist-es/index.js
var init_dist_es = __esm(() => {
  init_fromHttp();
});

export { fromHttp, init_dist_es };
