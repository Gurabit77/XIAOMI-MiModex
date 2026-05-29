// @bun
import {
  __commonJS
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@smithy+service-error-classification@4.3.0/node_modules/@smithy/service-error-classification/dist-cjs/index.js
var require_dist_cjs = __commonJS((exports) => {
  var CLOCK_SKEW_ERROR_CODES = [
    "AuthFailure",
    "InvalidSignatureException",
    "RequestExpired",
    "RequestInTheFuture",
    "RequestTimeTooSkewed",
    "SignatureDoesNotMatch"
  ];
  var THROTTLING_ERROR_CODES = [
    "BandwidthLimitExceeded",
    "EC2ThrottledException",
    "LimitExceededException",
    "PriorRequestNotComplete",
    "ProvisionedThroughputExceededException",
    "RequestLimitExceeded",
    "RequestThrottled",
    "RequestThrottledException",
    "SlowDown",
    "ThrottledException",
    "Throttling",
    "ThrottlingException",
    "TooManyRequestsException",
    "TransactionInProgressException"
  ];
  var TRANSIENT_ERROR_CODES = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"];
  var TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];
  var NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"];
  var NODEJS_NETWORK_ERROR_CODES = ["EHOSTUNREACH", "ENETUNREACH", "ENOTFOUND"];
  var isRetryableByTrait = (error) => error?.$retryable !== undefined;
  var isClockSkewError = (error) => CLOCK_SKEW_ERROR_CODES.includes(error.name);
  var isClockSkewCorrectedError = (error) => error.$metadata?.clockSkewCorrected;
  var isBrowserNetworkError = (error) => {
    const errorMessages = new Set([
      "Failed to fetch",
      "NetworkError when attempting to fetch resource",
      "The Internet connection appears to be offline",
      "Load failed",
      "Network request failed"
    ]);
    const isValid = error && error instanceof TypeError;
    if (!isValid) {
      return false;
    }
    return errorMessages.has(error.message);
  };
  var isThrottlingError = (error) => error.$metadata?.httpStatusCode === 429 || THROTTLING_ERROR_CODES.includes(error.name) || error.$retryable?.throttling == true;
  var isTransientError = (error, depth = 0) => isRetryableByTrait(error) || isClockSkewCorrectedError(error) || TRANSIENT_ERROR_CODES.includes(error.name) || NODEJS_TIMEOUT_ERROR_CODES.includes(error?.code || "") || NODEJS_NETWORK_ERROR_CODES.includes(error?.code || "") || TRANSIENT_ERROR_STATUS_CODES.includes(error.$metadata?.httpStatusCode || 0) || isBrowserNetworkError(error) || isNodeJsHttp2TransientError(error) || error.cause !== undefined && depth <= 10 && isTransientError(error.cause, depth + 1);
  var isServerError = (error) => {
    if (error.$metadata?.httpStatusCode !== undefined) {
      const statusCode = error.$metadata.httpStatusCode;
      if (500 <= statusCode && statusCode <= 599 && !isTransientError(error)) {
        return true;
      }
      return false;
    }
    return false;
  };
  function isNodeJsHttp2TransientError(error) {
    return error.code === "ERR_HTTP2_STREAM_ERROR" && error.message.includes("NGHTTP2_REFUSED_STREAM");
  }
  exports.isBrowserNetworkError = isBrowserNetworkError;
  exports.isClockSkewCorrectedError = isClockSkewCorrectedError;
  exports.isClockSkewError = isClockSkewError;
  exports.isNodeJsHttp2TransientError = isNodeJsHttp2TransientError;
  exports.isRetryableByTrait = isRetryableByTrait;
  exports.isServerError = isServerError;
  exports.isThrottlingError = isThrottlingError;
  exports.isTransientError = isTransientError;
});

// node_modules/.bun/@smithy+util-retry@4.3.4/node_modules/@smithy/util-retry/dist-cjs/index.js
var require_dist_cjs2 = __commonJS((exports) => {
  var serviceErrorClassification = require_dist_cjs();
  exports.RETRY_MODES = undefined;
  (function(RETRY_MODES) {
    RETRY_MODES["STANDARD"] = "standard";
    RETRY_MODES["ADAPTIVE"] = "adaptive";
  })(exports.RETRY_MODES || (exports.RETRY_MODES = {}));
  var DEFAULT_MAX_ATTEMPTS = 3;
  var DEFAULT_RETRY_MODE = exports.RETRY_MODES.STANDARD;

  class DefaultRateLimiter {
    static setTimeoutFn = setTimeout;
    beta;
    minCapacity;
    minFillRate;
    scaleConstant;
    smooth;
    enabled = false;
    availableTokens = 0;
    lastMaxRate = 0;
    measuredTxRate = 0;
    requestCount = 0;
    fillRate;
    lastThrottleTime;
    lastTimestamp = 0;
    lastTxRateBucket;
    maxCapacity;
    timeWindow = 0;
    constructor(options) {
      this.beta = options?.beta ?? 0.7;
      this.minCapacity = options?.minCapacity ?? 1;
      this.minFillRate = options?.minFillRate ?? 0.5;
      this.scaleConstant = options?.scaleConstant ?? 0.4;
      this.smooth = options?.smooth ?? 0.8;
      this.lastThrottleTime = this.getCurrentTimeInSeconds();
      this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds());
      this.fillRate = this.minFillRate;
      this.maxCapacity = this.minCapacity;
    }
    async getSendToken() {
      return this.acquireTokenBucket(1);
    }
    updateClientSendingRate(response) {
      let calculatedRate;
      this.updateMeasuredRate();
      const retryErrorInfo = response;
      const isThrottling = retryErrorInfo?.errorType === "THROTTLING" || serviceErrorClassification.isThrottlingError(retryErrorInfo?.error ?? response);
      if (isThrottling) {
        const rateToUse = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
        this.lastMaxRate = rateToUse;
        this.calculateTimeWindow();
        this.lastThrottleTime = this.getCurrentTimeInSeconds();
        calculatedRate = this.cubicThrottle(rateToUse);
        this.enableTokenBucket();
      } else {
        this.calculateTimeWindow();
        calculatedRate = this.cubicSuccess(this.getCurrentTimeInSeconds());
      }
      const newRate = Math.min(calculatedRate, 2 * this.measuredTxRate);
      this.updateTokenBucketRate(newRate);
    }
    getCurrentTimeInSeconds() {
      return Date.now() / 1000;
    }
    async acquireTokenBucket(amount) {
      if (!this.enabled) {
        return;
      }
      this.refillTokenBucket();
      if (amount > this.availableTokens) {
        const delay = (amount - this.availableTokens) / this.fillRate * 1000;
        await new Promise((resolve) => DefaultRateLimiter.setTimeoutFn(resolve, delay));
      }
      this.availableTokens = this.availableTokens - amount;
    }
    refillTokenBucket() {
      const timestamp = this.getCurrentTimeInSeconds();
      if (!this.lastTimestamp) {
        this.lastTimestamp = timestamp;
        return;
      }
      const fillAmount = (timestamp - this.lastTimestamp) * this.fillRate;
      this.availableTokens = Math.min(this.maxCapacity, this.availableTokens + fillAmount);
      this.lastTimestamp = timestamp;
    }
    calculateTimeWindow() {
      this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 1 / 3));
    }
    cubicThrottle(rateToUse) {
      return this.getPrecise(rateToUse * this.beta);
    }
    cubicSuccess(timestamp) {
      return this.getPrecise(this.scaleConstant * Math.pow(timestamp - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
    }
    enableTokenBucket() {
      this.enabled = true;
    }
    updateTokenBucketRate(newRate) {
      this.refillTokenBucket();
      this.fillRate = Math.max(newRate, this.minFillRate);
      this.maxCapacity = Math.max(newRate, this.minCapacity);
      this.availableTokens = Math.min(this.availableTokens, this.maxCapacity);
    }
    updateMeasuredRate() {
      const t = this.getCurrentTimeInSeconds();
      const timeBucket = Math.floor(t * 2) / 2;
      this.requestCount++;
      if (timeBucket > this.lastTxRateBucket) {
        const currentRate = this.requestCount / (timeBucket - this.lastTxRateBucket);
        this.measuredTxRate = this.getPrecise(currentRate * this.smooth + this.measuredTxRate * (1 - this.smooth));
        this.requestCount = 0;
        this.lastTxRateBucket = timeBucket;
      }
    }
    getPrecise(num) {
      return parseFloat(num.toFixed(8));
    }
  }
  var DEFAULT_RETRY_DELAY_BASE = 100;
  var MAXIMUM_RETRY_DELAY = 20 * 1000;
  var THROTTLING_RETRY_DELAY_BASE = 500;
  var INITIAL_RETRY_TOKENS = 500;
  var RETRY_COST = 5;
  var TIMEOUT_RETRY_COST = 10;
  var NO_RETRY_INCREMENT = 1;
  var INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
  var REQUEST_HEADER = "amz-sdk-request";

  class Retry {
    static v2026 = typeof process !== "undefined" && process.env?.SMITHY_NEW_RETRIES_2026 === "true";
    static delay() {
      return Retry.v2026 ? 50 : 100;
    }
    static throttlingDelay() {
      return Retry.v2026 ? 1000 : 500;
    }
    static cost() {
      return Retry.v2026 ? 14 : 5;
    }
    static throttlingCost() {
      return Retry.v2026 ? 5 : 10;
    }
    static modifiedCostType() {
      return Retry.v2026 ? "THROTTLING" : "TRANSIENT";
    }
  }

  class DefaultRetryBackoffStrategy {
    x = Retry.delay();
    computeNextBackoffDelay(i) {
      const b = Math.random();
      const r = 2;
      const t_i = b * Math.min(this.x * r ** i, MAXIMUM_RETRY_DELAY);
      return Math.floor(t_i);
    }
    setDelayBase(delay) {
      this.x = delay;
    }
  }

  class DefaultRetryToken {
    delay;
    count;
    cost;
    longPoll;
    constructor(delay, count, cost, longPoll) {
      this.delay = delay;
      this.count = count;
      this.cost = cost;
      this.longPoll = longPoll;
    }
    getRetryCount() {
      return this.count;
    }
    getRetryDelay() {
      return Math.min(MAXIMUM_RETRY_DELAY, this.delay);
    }
    getRetryCost() {
      return this.cost;
    }
    isLongPoll() {
      return this.longPoll;
    }
  }
  var refusal = {
    incompatible: 1,
    attempts: 2,
    capacity: 3
  };

  class StandardRetryStrategy {
    mode = exports.RETRY_MODES.STANDARD;
    capacity = INITIAL_RETRY_TOKENS;
    retryBackoffStrategy;
    maxAttemptsProvider;
    baseDelay;
    constructor(arg1) {
      if (typeof arg1 === "number") {
        this.maxAttemptsProvider = async () => arg1;
      } else if (typeof arg1 === "function") {
        this.maxAttemptsProvider = arg1;
      } else if (arg1 && typeof arg1 === "object") {
        this.maxAttemptsProvider = async () => arg1.maxAttempts;
        this.baseDelay = arg1.baseDelay;
        this.retryBackoffStrategy = arg1.backoff;
      }
      this.maxAttemptsProvider ??= async () => DEFAULT_MAX_ATTEMPTS;
      this.baseDelay ??= Retry.delay();
      this.retryBackoffStrategy ??= new DefaultRetryBackoffStrategy;
    }
    async acquireInitialRetryToken(retryTokenScope) {
      return new DefaultRetryToken(Retry.delay(), 0, undefined, Retry.v2026 && retryTokenScope.includes(":longpoll"));
    }
    async refreshRetryTokenForRetry(token, errorInfo) {
      const maxAttempts = await this.getMaxAttempts();
      const retryCode = this.retryCode(token, errorInfo, maxAttempts);
      const shouldRetry = retryCode === 0;
      const isLongPoll = token.isLongPoll?.();
      if (shouldRetry || isLongPoll) {
        const errorType = errorInfo.errorType;
        this.retryBackoffStrategy.setDelayBase(errorType === "THROTTLING" ? Retry.throttlingDelay() : this.baseDelay);
        const delayFromErrorType = this.retryBackoffStrategy.computeNextBackoffDelay(token.getRetryCount());
        let retryDelay = delayFromErrorType;
        if (errorInfo.retryAfterHint instanceof Date) {
          retryDelay = Math.max(delayFromErrorType, Math.min(errorInfo.retryAfterHint.getTime() - Date.now(), delayFromErrorType + 5000));
        }
        if (!shouldRetry) {
          throw Object.assign(new Error("No retry token available"), {
            $backoff: Retry.v2026 && retryCode === refusal.capacity && isLongPoll ? retryDelay : 0
          });
        } else {
          const capacityCost = this.getCapacityCost(errorType);
          this.capacity -= capacityCost;
          return new DefaultRetryToken(retryDelay, token.getRetryCount() + 1, capacityCost, token.isLongPoll?.() ?? false);
        }
      }
      throw new Error("No retry token available");
    }
    recordSuccess(token) {
      this.capacity = Math.min(INITIAL_RETRY_TOKENS, this.capacity + (token.getRetryCost() ?? NO_RETRY_INCREMENT));
    }
    getCapacity() {
      return this.capacity;
    }
    async maxAttempts() {
      return this.maxAttemptsProvider();
    }
    async getMaxAttempts() {
      try {
        return await this.maxAttemptsProvider();
      } catch (error) {
        console.warn(`Max attempts provider could not resolve. Using default of ${DEFAULT_MAX_ATTEMPTS}`);
        return DEFAULT_MAX_ATTEMPTS;
      }
    }
    retryCode(tokenToRenew, errorInfo, maxAttempts) {
      const attempts = tokenToRenew.getRetryCount() + 1;
      const retryableStatus = this.isRetryableError(errorInfo.errorType) ? 0 : refusal.incompatible;
      const attemptStatus = attempts < maxAttempts ? 0 : refusal.attempts;
      const capacityStatus = this.capacity >= this.getCapacityCost(errorInfo.errorType) ? 0 : refusal.capacity;
      return retryableStatus || attemptStatus || capacityStatus;
    }
    getCapacityCost(errorType) {
      return errorType === Retry.modifiedCostType() ? Retry.throttlingCost() : Retry.cost();
    }
    isRetryableError(errorType) {
      return errorType === "THROTTLING" || errorType === "TRANSIENT";
    }
  }

  class AdaptiveRetryStrategy {
    mode = exports.RETRY_MODES.ADAPTIVE;
    rateLimiter;
    standardRetryStrategy;
    constructor(maxAttemptsProvider, options) {
      const { rateLimiter } = options ?? {};
      this.rateLimiter = rateLimiter ?? new DefaultRateLimiter;
      this.standardRetryStrategy = options ? new StandardRetryStrategy({
        maxAttempts: typeof maxAttemptsProvider === "number" ? maxAttemptsProvider : 3,
        ...options
      }) : new StandardRetryStrategy(maxAttemptsProvider);
    }
    async acquireInitialRetryToken(retryTokenScope) {
      await this.rateLimiter.getSendToken();
      return this.standardRetryStrategy.acquireInitialRetryToken(retryTokenScope);
    }
    async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
      this.rateLimiter.updateClientSendingRate(errorInfo);
      return this.standardRetryStrategy.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
    }
    recordSuccess(token) {
      this.rateLimiter.updateClientSendingRate({});
      this.standardRetryStrategy.recordSuccess(token);
    }
    async maxAttemptsProvider() {
      return this.standardRetryStrategy.maxAttempts();
    }
  }

  class ConfiguredRetryStrategy extends StandardRetryStrategy {
    computeNextBackoffDelay;
    constructor(maxAttempts, computeNextBackoffDelay = Retry.delay()) {
      super(typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts);
      if (typeof computeNextBackoffDelay === "number") {
        this.computeNextBackoffDelay = () => computeNextBackoffDelay;
      } else {
        this.computeNextBackoffDelay = computeNextBackoffDelay;
      }
    }
    async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
      const token = await super.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
      token.getRetryDelay = () => this.computeNextBackoffDelay(token.getRetryCount());
      return token;
    }
  }
  exports.AdaptiveRetryStrategy = AdaptiveRetryStrategy;
  exports.ConfiguredRetryStrategy = ConfiguredRetryStrategy;
  exports.DEFAULT_MAX_ATTEMPTS = DEFAULT_MAX_ATTEMPTS;
  exports.DEFAULT_RETRY_DELAY_BASE = DEFAULT_RETRY_DELAY_BASE;
  exports.DEFAULT_RETRY_MODE = DEFAULT_RETRY_MODE;
  exports.DefaultRateLimiter = DefaultRateLimiter;
  exports.INITIAL_RETRY_TOKENS = INITIAL_RETRY_TOKENS;
  exports.INVOCATION_ID_HEADER = INVOCATION_ID_HEADER;
  exports.MAXIMUM_RETRY_DELAY = MAXIMUM_RETRY_DELAY;
  exports.NO_RETRY_INCREMENT = NO_RETRY_INCREMENT;
  exports.REQUEST_HEADER = REQUEST_HEADER;
  exports.RETRY_COST = RETRY_COST;
  exports.Retry = Retry;
  exports.StandardRetryStrategy = StandardRetryStrategy;
  exports.THROTTLING_RETRY_DELAY_BASE = THROTTLING_RETRY_DELAY_BASE;
  exports.TIMEOUT_RETRY_COST = TIMEOUT_RETRY_COST;
});

// node_modules/.bun/@aws-sdk+core@3.974.5/node_modules/@aws-sdk/core/dist-cjs/submodules/client/index.js
var require_client = __commonJS((exports) => {
  var utilRetry = require_dist_cjs2();
  var state = {
    warningEmitted: false
  };
  var emitWarningIfUnsupportedVersion = (version) => {
    if (version && !state.warningEmitted && parseInt(version.substring(1, version.indexOf("."))) < 20) {
      state.warningEmitted = true;
      process.emitWarning(`NodeDeprecationWarning: The AWS SDK for JavaScript (v3) will
no longer support Node.js ${version} in January 2026.

To continue receiving updates to AWS services, bug fixes, and security
updates please upgrade to a supported Node.js LTS version.

More information can be found at: https://a.co/c895JFp`);
    }
  };
  var longPollMiddleware = () => (next, context) => async (args) => {
    context.__retryLongPoll = true;
    return next(args);
  };
  var longPollMiddlewareOptions = {
    name: "longPollMiddleware",
    tags: ["RETRY"],
    step: "initialize",
    override: true
  };
  var getLongPollPlugin = (options) => ({
    applyToStack: (clientStack) => {
      clientStack.add(longPollMiddleware(), longPollMiddlewareOptions);
    }
  });
  function setCredentialFeature(credentials, feature, value) {
    if (!credentials.$source) {
      credentials.$source = {};
    }
    credentials.$source[feature] = value;
    return credentials;
  }
  utilRetry.Retry.v2026 ||= typeof process === "object" && process.env?.AWS_NEW_RETRIES_2026 === "true";
  function setFeature(context, feature, value) {
    if (!context.__aws_sdk_context) {
      context.__aws_sdk_context = {
        features: {}
      };
    } else if (!context.__aws_sdk_context.features) {
      context.__aws_sdk_context.features = {};
    }
    context.__aws_sdk_context.features[feature] = value;
  }
  function setTokenFeature(token, feature, value) {
    if (!token.$source) {
      token.$source = {};
    }
    token.$source[feature] = value;
    return token;
  }
  exports.emitWarningIfUnsupportedVersion = emitWarningIfUnsupportedVersion;
  exports.getLongPollPlugin = getLongPollPlugin;
  exports.setCredentialFeature = setCredentialFeature;
  exports.setFeature = setFeature;
  exports.setTokenFeature = setTokenFeature;
  exports.state = state;
});

export { require_dist_cjs, require_dist_cjs2 as require_dist_cjs1, require_client };
