// @bun
import {
  Anthropic,
  AnthropicError,
  BaseAnthropic,
  Beta,
  Messages,
  init_client,
  init_error,
  init_resources
} from "./chunk-cw8rngb2.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@anthropic-ai+foundry-sdk@0.2.3+3c5d820c62823f0b/node_modules/@anthropic-ai/foundry-sdk/core/error.mjs
var init_error2 = __esm(() => {
  init_error();
});

// node_modules/.bun/@anthropic-ai+foundry-sdk@0.2.3+3c5d820c62823f0b/node_modules/@anthropic-ai/foundry-sdk/internal/utils/values.mjs
var isArray = (val) => (isArray = Array.isArray, isArray(val)), isReadonlyArray;
var init_values = __esm(() => {
  init_error2();
  isReadonlyArray = isArray;
});

// node_modules/.bun/@anthropic-ai+foundry-sdk@0.2.3+3c5d820c62823f0b/node_modules/@anthropic-ai/foundry-sdk/internal/headers.mjs
function* iterateHeaders(headers) {
  if (!headers)
    return;
  if (brand_privateNullableHeaders in headers) {
    const { values, nulls } = headers;
    yield* values.entries();
    for (const name of nulls) {
      yield [name, null];
    }
    return;
  }
  let shouldClear = false;
  let iter;
  if (headers instanceof Headers) {
    iter = headers.entries();
  } else if (isReadonlyArray(headers)) {
    iter = headers;
  } else {
    shouldClear = true;
    iter = Object.entries(headers ?? {});
  }
  for (let row of iter) {
    const name = row[0];
    if (typeof name !== "string")
      throw new TypeError("expected header name to be a string");
    const values = isReadonlyArray(row[1]) ? row[1] : [row[1]];
    let didClear = false;
    for (const value of values) {
      if (value === undefined)
        continue;
      if (shouldClear && !didClear) {
        didClear = true;
        yield [name, null];
      }
      yield [name, value];
    }
  }
}
var brand_privateNullableHeaders, buildHeaders = (newHeaders) => {
  const targetHeaders = new Headers;
  const nullHeaders = new Set;
  for (const headers of newHeaders) {
    const seenHeaders = new Set;
    for (const [name, value] of iterateHeaders(headers)) {
      const lowerName = name.toLowerCase();
      if (!seenHeaders.has(lowerName)) {
        targetHeaders.delete(name);
        seenHeaders.add(lowerName);
      }
      if (value === null) {
        targetHeaders.delete(name);
        nullHeaders.add(lowerName);
      } else {
        targetHeaders.append(name, value);
        nullHeaders.delete(lowerName);
      }
    }
  }
  return { [brand_privateNullableHeaders]: true, values: targetHeaders, nulls: nullHeaders };
};
var init_headers = __esm(() => {
  init_values();
  brand_privateNullableHeaders = Symbol.for("brand.privateNullableHeaders");
});

// node_modules/.bun/@anthropic-ai+foundry-sdk@0.2.3+3c5d820c62823f0b/node_modules/@anthropic-ai/foundry-sdk/internal/utils/bytes.mjs
var init_bytes = () => {};

// node_modules/.bun/@anthropic-ai+foundry-sdk@0.2.3+3c5d820c62823f0b/node_modules/@anthropic-ai/foundry-sdk/internal/utils/base64.mjs
var init_base64 = __esm(() => {
  init_error2();
  init_bytes();
});

// node_modules/.bun/@anthropic-ai+foundry-sdk@0.2.3+3c5d820c62823f0b/node_modules/@anthropic-ai/foundry-sdk/internal/utils/env.mjs
var readEnv = (env) => {
  if (typeof globalThis.process !== "undefined") {
    return globalThis.process.env?.[env]?.trim() ?? undefined;
  }
  if (typeof globalThis.Deno !== "undefined") {
    return globalThis.Deno.env?.get?.(env)?.trim();
  }
  return;
};
var init_env = () => {};

// node_modules/.bun/@anthropic-ai+foundry-sdk@0.2.3+3c5d820c62823f0b/node_modules/@anthropic-ai/foundry-sdk/internal/utils/log.mjs
var init_log = __esm(() => {
  init_values();
});

// node_modules/.bun/@anthropic-ai+foundry-sdk@0.2.3+3c5d820c62823f0b/node_modules/@anthropic-ai/foundry-sdk/internal/utils/uuid.mjs
var init_uuid = () => {};

// node_modules/.bun/@anthropic-ai+foundry-sdk@0.2.3+3c5d820c62823f0b/node_modules/@anthropic-ai/foundry-sdk/internal/utils/sleep.mjs
var init_sleep = () => {};

// node_modules/.bun/@anthropic-ai+foundry-sdk@0.2.3+3c5d820c62823f0b/node_modules/@anthropic-ai/foundry-sdk/internal/utils.mjs
var init_utils = __esm(() => {
  init_values();
  init_base64();
  init_env();
  init_log();
  init_uuid();
  init_sleep();
});

// node_modules/.bun/@anthropic-ai+foundry-sdk@0.2.3+3c5d820c62823f0b/node_modules/@anthropic-ai/foundry-sdk/client.mjs
function makeMessagesResource(client) {
  const resource = new Messages(client);
  delete resource.batches;
  return resource;
}
function makeBetaResource(client) {
  const resource = new Beta(client);
  delete resource.messages.batches;
  return resource;
}
var AnthropicFoundry;
var init_client2 = __esm(() => {
  init_headers();
  init_error2();
  init_utils();
  init_client();
  init_client();
  init_resources();
  AnthropicFoundry = class AnthropicFoundry extends Anthropic {
    constructor({ baseURL = readEnv("ANTHROPIC_FOUNDRY_BASE_URL"), apiKey = readEnv("ANTHROPIC_FOUNDRY_API_KEY"), resource = readEnv("ANTHROPIC_FOUNDRY_RESOURCE"), azureADTokenProvider, dangerouslyAllowBrowser, ...opts } = {}) {
      if (typeof azureADTokenProvider === "function") {
        dangerouslyAllowBrowser = true;
      }
      if (!azureADTokenProvider && !apiKey) {
        throw new AnthropicError("Missing credentials. Please pass one of `apiKey` and `azureTokenProvider`, or set the `ANTHROPIC_FOUNDRY_API_KEY` environment variable.");
      }
      if (azureADTokenProvider && apiKey) {
        throw new AnthropicError("The `apiKey` and `azureADTokenProvider` arguments are mutually exclusive; only one can be passed at a time.");
      }
      if (!baseURL) {
        if (!resource) {
          throw new AnthropicError("Must provide one of the `baseURL` or `resource` arguments, or the `ANTHROPIC_FOUNDRY_RESOURCE` environment variable");
        }
        baseURL = `https://${resource}.services.ai.azure.com/anthropic/`;
      } else {
        if (resource) {
          throw new AnthropicError("baseURL and resource are mutually exclusive");
        }
      }
      super({
        apiKey: azureADTokenProvider ?? apiKey,
        baseURL,
        ...opts,
        ...dangerouslyAllowBrowser !== undefined ? { dangerouslyAllowBrowser } : {}
      });
      this.resource = null;
      this.messages = makeMessagesResource(this);
      this.beta = makeBetaResource(this);
      this.models = undefined;
    }
    async authHeaders() {
      if (typeof this._options.apiKey === "function") {
        let token;
        try {
          token = await this._options.apiKey();
        } catch (err) {
          if (err instanceof AnthropicError)
            throw err;
          throw new AnthropicError(`Failed to get token from azureADTokenProvider: ${err.message}`, { cause: err });
        }
        if (typeof token !== "string" || !token) {
          throw new AnthropicError(`Expected azureADTokenProvider function argument to return a string but it returned ${token}`);
        }
        return buildHeaders([{ Authorization: `Bearer ${token}` }]);
      }
      if (typeof this._options.apiKey === "string") {
        return buildHeaders([{ "x-api-key": this.apiKey }]);
      }
      return;
    }
    validateHeaders() {
      return;
    }
  };
});

// node_modules/.bun/@anthropic-ai+foundry-sdk@0.2.3+3c5d820c62823f0b/node_modules/@anthropic-ai/foundry-sdk/index.mjs
var init_foundry_sdk = __esm(() => {
  init_client2();
  init_client2();
});
init_foundry_sdk();

export {
  AnthropicFoundry as default,
  BaseAnthropic,
  AnthropicFoundry
};
