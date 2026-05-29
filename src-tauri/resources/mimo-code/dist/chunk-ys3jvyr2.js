// @bun
import {
  endInteractionSpan,
  init_betaSessionTracing,
  init_perfettoTracing,
  init_sessionTracing,
  initializePerfettoTracing,
  isBetaTracingEnabled,
  isEnhancedTelemetryEnabled
} from "./chunk-g57ncwpz.js";
import {
  BasicTracerProvider,
  BatchSpanProcessor,
  ConsoleSpanExporter,
  init_esm as init_esm2
} from "./chunk-9pp18zcp.js";
import {
  BatchLogRecordProcessor,
  ConsoleLogRecordExporter,
  LoggerProvider,
  checkHasTrustDialogAccepted,
  getAuthHeaders,
  getClaudeCodeUserAgent,
  getGlobalConfig,
  getOtelHeadersFromHelper,
  getSettings_DEPRECATED,
  getSubscriptionType,
  hasProfileScope,
  init_auth,
  init_config1 as init_config,
  init_esm,
  init_http,
  init_settings1 as init_settings,
  init_userAgent,
  is1PApiCustomer,
  isClaudeAISubscriber,
  saveGlobalConfig,
  withOAuth401Retry
} from "./chunk-1ghcng4e.js";
import"./chunk-pz9t24tq.js";
import"./chunk-4efha55s.js";
import {
  HttpsProxyAgent,
  getCACertificates,
  getMTLSConfig,
  getProxyUrl,
  init_caCerts,
  init_dist,
  init_mtls,
  init_proxy,
  shouldBypassProxy
} from "./chunk-t7f7dp4k.js";
import"./chunk-zwarn9h7.js";
import"./chunk-b127reh2.js";
import"./chunk-et54q618.js";
import"./chunk-pe9b769s.js";
import"./chunk-64c1avct.js";
import"./chunk-8g5pe1gr.js";
import {
  getPlatform,
  getWslVersion,
  init_platform
} from "./chunk-0rbpfkda.js";
import"./chunk-gnw2dwca.js";
import"./chunk-wbmn1xar.js";
import"./chunk-3c25bcsw.js";
import"./chunk-nw7v8w65.js";
import"./chunk-xhesahm0.js";
import"./chunk-rh5a2rg9.js";
import"./chunk-8g747a8x.js";
import"./chunk-d7886r6a.js";
import {
  require_src as require_src5
} from "./chunk-djs11qd6.js";
import {
  require_src as require_src6
} from "./chunk-nrv96v1h.js";
import {
  require_src as require_src2,
  require_src1 as require_src3,
  require_src2 as require_src4
} from "./chunk-gdqk4ssq.js";
import {
  require_src
} from "./chunk-p2816w9z.js";
import"./chunk-v1kzp02e.js";
import {
  init_startupProfiler,
  profileCheckpoint
} from "./chunk-x5hyyhqf.js";
import"./chunk-crmjpsqe.js";
import"./chunk-er1s76c9.js";
import"./chunk-b5wxetbv.js";
import"./chunk-f2mhrmww.js";
import"./chunk-0vkfrmqm.js";
import"./chunk-0xjaqda8.js";
import"./chunk-t6jhrn34.js";
import {
  init_memoize,
  memoizeWithTTLAsync
} from "./chunk-95xve7f8.js";
import"./chunk-jdq8jgyg.js";
import"./chunk-qcwbd71h.js";
import"./chunk-dxvkxgnf.js";
import {
  init_log,
  init_privacyLevel,
  isEssentialTrafficOnly,
  logError
} from "./chunk-w5ahy59y.js";
import"./chunk-8tnsngw2.js";
import"./chunk-jkh5s8ct.js";
import"./chunk-kwm5bf2m.js";
import"./chunk-5z28bqne.js";
import"./chunk-qajrkk97.js";
import {
  errorMessage,
  getHasFormattedOutput,
  init_cleanupRegistry,
  init_debug,
  init_errors,
  init_slowOperations,
  jsonStringify,
  logForDebugging,
  registerCleanup,
  toError
} from "./chunk-rpbc3b7k.js";
import"./chunk-fbv4apne.js";
import {
  getIsNonInteractiveSession,
  getLoggerProvider,
  getMeterProvider,
  getTracerProvider,
  init_state,
  setEventLogger,
  setLoggerProvider,
  setMeterProvider,
  setTracerProvider
} from "./chunk-j5xzpm59.js";
import"./chunk-50dgek10.js";
import"./chunk-7wm5s02e.js";
import"./chunk-d3bk85eq.js";
import"./chunk-cw8rngb2.js";
import {
  init_envUtils,
  isEnvTruthy
} from "./chunk-hxhwzgnn.js";
import"./chunk-qx8z601m.js";
import"./chunk-cgm6758j.js";
import {
  axios_default,
  init_axios
} from "./chunk-3v4d4h0t.js";
import"./chunk-8pn8tvgg.js";
import"./chunk-netzwgv1.js";
import {
  __esm,
  __require,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/services/api/metricsOptOut.ts
async function _fetchMetricsEnabled() {
  const authResult = getAuthHeaders();
  if (authResult.error) {
    throw new Error(`Auth error: ${authResult.error}`);
  }
  const headers = {
    "Content-Type": "application/json",
    "User-Agent": getClaudeCodeUserAgent(),
    ...authResult.headers
  };
  const endpoint = `https://api.anthropic.com/api/claude_code/organizations/metrics_enabled`;
  const response = await axios_default.get(endpoint, {
    headers,
    timeout: 5000
  });
  return response.data;
}
async function _checkMetricsEnabledAPI() {
  if (isEssentialTrafficOnly()) {
    return { enabled: false, hasError: false };
  }
  try {
    const data = await withOAuth401Retry(_fetchMetricsEnabled, {
      also403Revoked: true
    });
    logForDebugging(`Metrics opt-out API response: enabled=${data.metrics_logging_enabled}`);
    return {
      enabled: data.metrics_logging_enabled,
      hasError: false
    };
  } catch (error) {
    logForDebugging(`Failed to check metrics opt-out status: ${errorMessage(error)}`);
    logError(error);
    return { enabled: false, hasError: true };
  }
}
async function refreshMetricsStatus() {
  const result = await memoizedCheckMetrics();
  if (result.hasError) {
    return result;
  }
  const cached = getGlobalConfig().metricsStatusCache;
  const unchanged = cached !== undefined && cached.enabled === result.enabled;
  if (unchanged && Date.now() - cached.timestamp < DISK_CACHE_TTL_MS) {
    return result;
  }
  saveGlobalConfig((current) => ({
    ...current,
    metricsStatusCache: {
      enabled: result.enabled,
      timestamp: Date.now()
    }
  }));
  return result;
}
async function checkMetricsEnabled() {
  if (isClaudeAISubscriber() && !hasProfileScope()) {
    return { enabled: false, hasError: false };
  }
  const cached = getGlobalConfig().metricsStatusCache;
  if (cached) {
    if (Date.now() - cached.timestamp > DISK_CACHE_TTL_MS) {
      refreshMetricsStatus().catch(logError);
    }
    return {
      enabled: cached.enabled,
      hasError: false
    };
  }
  return refreshMetricsStatus();
}
var CACHE_TTL_MS, DISK_CACHE_TTL_MS, memoizedCheckMetrics;
var init_metricsOptOut = __esm(() => {
  init_axios();
  init_auth();
  init_config();
  init_debug();
  init_errors();
  init_http();
  init_log();
  init_memoize();
  init_privacyLevel();
  init_userAgent();
  CACHE_TTL_MS = 60 * 60 * 1000;
  DISK_CACHE_TTL_MS = 24 * 60 * 60 * 1000;
  memoizedCheckMetrics = memoizeWithTTLAsync(_checkMetricsEnabledAPI, CACHE_TTL_MS);
});

// src/utils/telemetry/bigqueryExporter.ts
class BigQueryMetricsExporter {
  endpoint;
  timeout;
  pendingExports = [];
  isShutdown = false;
  constructor(options = {}) {
    const defaultEndpoint = "https://api.anthropic.com/api/claude_code/metrics";
    if (process.env.USER_TYPE === "ant" && process.env.ANT_CLAUDE_CODE_METRICS_ENDPOINT) {
      this.endpoint = process.env.ANT_CLAUDE_CODE_METRICS_ENDPOINT + "/api/claude_code/metrics";
    } else {
      this.endpoint = defaultEndpoint;
    }
    this.timeout = options.timeout || 5000;
  }
  async export(metrics, resultCallback) {
    if (this.isShutdown) {
      resultCallback({
        code: import_core.ExportResultCode.FAILED,
        error: new Error("Exporter has been shutdown")
      });
      return;
    }
    const exportPromise = this.doExport(metrics, resultCallback);
    this.pendingExports.push(exportPromise);
    exportPromise.finally(() => {
      const index = this.pendingExports.indexOf(exportPromise);
      if (index > -1) {
        this.pendingExports.splice(index, 1);
      }
    });
  }
  async doExport(metrics, resultCallback) {
    try {
      const hasTrust = checkHasTrustDialogAccepted() || getIsNonInteractiveSession();
      if (!hasTrust) {
        logForDebugging("BigQuery metrics export: trust not established, skipping");
        resultCallback({ code: import_core.ExportResultCode.SUCCESS });
        return;
      }
      const metricsStatus = await checkMetricsEnabled();
      if (!metricsStatus.enabled) {
        logForDebugging("Metrics export disabled by organization setting");
        resultCallback({ code: import_core.ExportResultCode.SUCCESS });
        return;
      }
      const payload = this.transformMetricsForInternal(metrics);
      const authResult = getAuthHeaders();
      if (authResult.error) {
        logForDebugging(`Metrics export failed: ${authResult.error}`);
        resultCallback({
          code: import_core.ExportResultCode.FAILED,
          error: new Error(authResult.error)
        });
        return;
      }
      const headers = {
        "Content-Type": "application/json",
        "User-Agent": getClaudeCodeUserAgent(),
        ...authResult.headers
      };
      const response = await axios_default.post(this.endpoint, payload, {
        timeout: this.timeout,
        headers
      });
      logForDebugging("BigQuery metrics exported successfully");
      logForDebugging(`BigQuery API Response: ${jsonStringify(response.data, null, 2)}`);
      resultCallback({ code: import_core.ExportResultCode.SUCCESS });
    } catch (error) {
      logForDebugging(`BigQuery metrics export failed: ${errorMessage(error)}`);
      logError(error);
      resultCallback({
        code: import_core.ExportResultCode.FAILED,
        error: toError(error)
      });
    }
  }
  transformMetricsForInternal(metrics) {
    const attrs = metrics.resource.attributes;
    const resourceAttributes = {
      "service.name": attrs["service.name"] || "mimo-code",
      "service.version": attrs["service.version"] || "unknown",
      "os.type": attrs["os.type"] || "unknown",
      "os.version": attrs["os.version"] || "unknown",
      "host.arch": attrs["host.arch"] || "unknown",
      "aggregation.temporality": this.selectAggregationTemporality() === import_sdk_metrics.AggregationTemporality.DELTA ? "delta" : "cumulative"
    };
    if (attrs["wsl.version"]) {
      resourceAttributes["wsl.version"] = attrs["wsl.version"];
    }
    if (isClaudeAISubscriber()) {
      resourceAttributes["user.customer_type"] = "claude_ai";
      const subscriptionType = getSubscriptionType();
      if (subscriptionType) {
        resourceAttributes["user.subscription_type"] = subscriptionType;
      }
    } else {
      resourceAttributes["user.customer_type"] = "api";
    }
    const transformed = {
      resource_attributes: resourceAttributes,
      metrics: metrics.scopeMetrics.flatMap((scopeMetric) => scopeMetric.metrics.map((metric) => ({
        name: metric.descriptor.name,
        description: metric.descriptor.description,
        unit: metric.descriptor.unit,
        data_points: this.extractDataPoints(metric)
      })))
    };
    return transformed;
  }
  extractDataPoints(metric) {
    const dataPoints = metric.dataPoints || [];
    return dataPoints.filter((point) => typeof point.value === "number").map((point) => ({
      attributes: this.convertAttributes(point.attributes),
      value: point.value,
      timestamp: this.hrTimeToISOString(point.endTime || point.startTime || [Date.now() / 1000, 0])
    }));
  }
  async shutdown() {
    this.isShutdown = true;
    await this.forceFlush();
    logForDebugging("BigQuery metrics exporter shutdown complete");
  }
  async forceFlush() {
    await Promise.all(this.pendingExports);
    logForDebugging("BigQuery metrics exporter flush complete");
  }
  convertAttributes(attributes) {
    const result = {};
    if (attributes) {
      for (const [key, value] of Object.entries(attributes)) {
        if (value !== undefined && value !== null) {
          result[key] = String(value);
        }
      }
    }
    return result;
  }
  hrTimeToISOString(hrTime) {
    const [seconds, nanoseconds] = hrTime;
    const date = new Date(seconds * 1000 + nanoseconds / 1e6);
    return date.toISOString();
  }
  selectAggregationTemporality() {
    return import_sdk_metrics.AggregationTemporality.DELTA;
  }
}
var import_core, import_sdk_metrics;
var init_bigqueryExporter = __esm(() => {
  init_axios();
  init_metricsOptOut();
  init_state();
  init_auth();
  init_config();
  init_debug();
  init_errors();
  init_http();
  init_log();
  init_slowOperations();
  init_userAgent();
  import_core = __toESM(require_src3(), 1);
  import_sdk_metrics = __toESM(require_src6(), 1);
});

// src/utils/telemetry/logger.ts
class ClaudeCodeDiagLogger {
  error(message, ..._) {
    logError(new Error(message));
    logForDebugging(`[3P telemetry] OTEL diag error: ${message}`, {
      level: "error"
    });
  }
  warn(message, ..._) {
    logError(new Error(message));
    logForDebugging(`[3P telemetry] OTEL diag warn: ${message}`, {
      level: "warn"
    });
  }
  info(_message, ..._args) {
    return;
  }
  debug(_message, ..._args) {
    return;
  }
  verbose(_message, ..._args) {
    return;
  }
}
var init_logger = __esm(() => {
  init_debug();
  init_log();
});

// src/utils/telemetry/instrumentation.ts
function telemetryTimeout(ms, message) {
  return new Promise((_, reject) => {
    setTimeout((rej, msg) => rej(new TelemetryTimeoutError(msg)), ms, reject, message).unref();
  });
}
function bootstrapTelemetry() {
  if (process.env.USER_TYPE === "ant") {
    if (process.env.ANT_OTEL_METRICS_EXPORTER) {
      process.env.OTEL_METRICS_EXPORTER = process.env.ANT_OTEL_METRICS_EXPORTER;
    }
    if (process.env.ANT_OTEL_LOGS_EXPORTER) {
      process.env.OTEL_LOGS_EXPORTER = process.env.ANT_OTEL_LOGS_EXPORTER;
    }
    if (process.env.ANT_OTEL_TRACES_EXPORTER) {
      process.env.OTEL_TRACES_EXPORTER = process.env.ANT_OTEL_TRACES_EXPORTER;
    }
    if (process.env.ANT_OTEL_EXPORTER_OTLP_PROTOCOL) {
      process.env.OTEL_EXPORTER_OTLP_PROTOCOL = process.env.ANT_OTEL_EXPORTER_OTLP_PROTOCOL;
    }
    if (process.env.ANT_OTEL_EXPORTER_OTLP_ENDPOINT) {
      process.env.OTEL_EXPORTER_OTLP_ENDPOINT = process.env.ANT_OTEL_EXPORTER_OTLP_ENDPOINT;
    }
    if (process.env.ANT_OTEL_EXPORTER_OTLP_HEADERS) {
      process.env.OTEL_EXPORTER_OTLP_HEADERS = process.env.ANT_OTEL_EXPORTER_OTLP_HEADERS;
    }
  }
  if (!process.env.OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE) {
    process.env.OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE = "delta";
  }
}
function parseExporterTypes(value) {
  return (value || "").trim().split(",").filter(Boolean).map((t) => t.trim()).filter((t) => t !== "none");
}
async function getOtlpReaders() {
  const exporterTypes = parseExporterTypes(process.env.OTEL_METRICS_EXPORTER);
  const exportInterval = parseInt(process.env.OTEL_METRIC_EXPORT_INTERVAL || DEFAULT_METRICS_EXPORT_INTERVAL_MS.toString(), 10);
  const exporters = [];
  for (const exporterType of exporterTypes) {
    if (exporterType === "console") {
      const consoleExporter = new import_sdk_metrics2.ConsoleMetricExporter;
      const originalExport = consoleExporter.export.bind(consoleExporter);
      consoleExporter.export = (metrics, callback) => {
        if (metrics.resource && metrics.resource.attributes) {
          logForDebugging(`
=== Resource Attributes ===`);
          logForDebugging(jsonStringify(metrics.resource.attributes));
          logForDebugging(`===========================
`);
        }
        return originalExport(metrics, callback);
      };
      exporters.push(consoleExporter);
    } else if (exporterType === "otlp") {
      const protocol = process.env.OTEL_EXPORTER_OTLP_METRICS_PROTOCOL?.trim() || process.env.OTEL_EXPORTER_OTLP_PROTOCOL?.trim();
      const httpConfig = getOTLPExporterConfig();
      switch (protocol) {
        case "grpc": {
          const { OTLPMetricExporter } = await import("./chunk-hpbyerwn.js").then((m)=>__toESM(m.default,1));
          exporters.push(new OTLPMetricExporter);
          break;
        }
        case "http/json": {
          const { OTLPMetricExporter } = await import("./chunk-e3fdrq9d.js").then((m)=>__toESM(m.default,1));
          exporters.push(new OTLPMetricExporter(httpConfig));
          break;
        }
        case "http/protobuf": {
          const { OTLPMetricExporter } = await import("./chunk-bfv86tfz.js");
          exporters.push(new OTLPMetricExporter(httpConfig));
          break;
        }
        default:
          throw new Error(`Unknown protocol set in OTEL_EXPORTER_OTLP_METRICS_PROTOCOL or OTEL_EXPORTER_OTLP_PROTOCOL env var: ${protocol}`);
      }
    } else if (exporterType === "prometheus") {
      const { PrometheusExporter } = await import("./chunk-mnbrbd5h.js").then((m)=>__toESM(m.default,1));
      exporters.push(new PrometheusExporter);
    } else {
      throw new Error(`Unknown exporter type set in OTEL_EXPORTER_OTLP_METRICS_PROTOCOL or OTEL_EXPORTER_OTLP_PROTOCOL env var: ${exporterType}`);
    }
  }
  return exporters.map((exporter) => {
    if ("export" in exporter) {
      return new import_sdk_metrics2.PeriodicExportingMetricReader({
        exporter,
        exportIntervalMillis: exportInterval
      });
    }
    return exporter;
  });
}
async function getOtlpLogExporters() {
  const exporterTypes = parseExporterTypes(process.env.OTEL_LOGS_EXPORTER);
  const protocol = process.env.OTEL_EXPORTER_OTLP_LOGS_PROTOCOL?.trim() || process.env.OTEL_EXPORTER_OTLP_PROTOCOL?.trim();
  const endpoint = process.env.OTEL_EXPORTER_OTLP_ENDPOINT;
  logForDebugging(`[3P telemetry] getOtlpLogExporters: types=${jsonStringify(exporterTypes)}, protocol=${protocol}, endpoint=${endpoint}`);
  const exporters = [];
  for (const exporterType of exporterTypes) {
    if (exporterType === "console") {
      exporters.push(new ConsoleLogRecordExporter);
    } else if (exporterType === "otlp") {
      const httpConfig = getOTLPExporterConfig();
      switch (protocol) {
        case "grpc": {
          const { OTLPLogExporter } = await import("./chunk-wphgkhpv.js").then((m)=>__toESM(m.default,1));
          exporters.push(new OTLPLogExporter);
          break;
        }
        case "http/json": {
          const { OTLPLogExporter } = await import("./chunk-mf7f139j.js");
          exporters.push(new OTLPLogExporter(httpConfig));
          break;
        }
        case "http/protobuf": {
          const { OTLPLogExporter } = await import("./chunk-60daszkb.js");
          exporters.push(new OTLPLogExporter(httpConfig));
          break;
        }
        default:
          throw new Error(`Unknown protocol set in OTEL_EXPORTER_OTLP_LOGS_PROTOCOL or OTEL_EXPORTER_OTLP_PROTOCOL env var: ${protocol}`);
      }
    } else {
      throw new Error(`Unknown exporter type set in OTEL_LOGS_EXPORTER env var: ${exporterType}`);
    }
  }
  return exporters;
}
async function getOtlpTraceExporters() {
  const exporterTypes = parseExporterTypes(process.env.OTEL_TRACES_EXPORTER);
  const exporters = [];
  for (const exporterType of exporterTypes) {
    if (exporterType === "console") {
      exporters.push(new ConsoleSpanExporter);
    } else if (exporterType === "otlp") {
      const protocol = process.env.OTEL_EXPORTER_OTLP_TRACES_PROTOCOL?.trim() || process.env.OTEL_EXPORTER_OTLP_PROTOCOL?.trim();
      const httpConfig = getOTLPExporterConfig();
      switch (protocol) {
        case "grpc": {
          const { OTLPTraceExporter } = await import("./chunk-f0a5jrz5.js").then((m)=>__toESM(m.default,1));
          exporters.push(new OTLPTraceExporter);
          break;
        }
        case "http/json": {
          const { OTLPTraceExporter } = await import("./chunk-0g0xmatx.js");
          exporters.push(new OTLPTraceExporter(httpConfig));
          break;
        }
        case "http/protobuf": {
          const { OTLPTraceExporter } = await import("./chunk-rxmkpmr7.js");
          exporters.push(new OTLPTraceExporter(httpConfig));
          break;
        }
        default:
          throw new Error(`Unknown protocol set in OTEL_EXPORTER_OTLP_TRACES_PROTOCOL or OTEL_EXPORTER_OTLP_PROTOCOL env var: ${protocol}`);
      }
    } else {
      throw new Error(`Unknown exporter type set in OTEL_TRACES_EXPORTER env var: ${exporterType}`);
    }
  }
  return exporters;
}
function isTelemetryEnabled() {
  return isEnvTruthy(process.env.CLAUDE_CODE_ENABLE_TELEMETRY);
}
function getBigQueryExportingReader() {
  const bigqueryExporter = new BigQueryMetricsExporter;
  return new import_sdk_metrics2.PeriodicExportingMetricReader({
    exporter: bigqueryExporter,
    exportIntervalMillis: 300000
  });
}
function isBigQueryMetricsEnabled() {
  const subscriptionType = getSubscriptionType();
  const isC4EOrTeamUser = isClaudeAISubscriber() && (subscriptionType === "enterprise" || subscriptionType === "team");
  return is1PApiCustomer() || isC4EOrTeamUser;
}
async function initializeBetaTracing(resource) {
  const endpoint = process.env.BETA_TRACING_ENDPOINT;
  if (!endpoint) {
    return;
  }
  const [{ OTLPTraceExporter }, { OTLPLogExporter }] = await Promise.all([
    import("./chunk-0g0xmatx.js"),
    import("./chunk-mf7f139j.js")
  ]);
  const httpConfig = {
    url: `${endpoint}/v1/traces`
  };
  const logHttpConfig = {
    url: `${endpoint}/v1/logs`
  };
  const traceExporter = new OTLPTraceExporter(httpConfig);
  const spanProcessor = new BatchSpanProcessor(traceExporter, {
    scheduledDelayMillis: DEFAULT_TRACES_EXPORT_INTERVAL_MS
  });
  const tracerProvider = new BasicTracerProvider({
    resource,
    spanProcessors: [spanProcessor]
  });
  import_api.trace.setGlobalTracerProvider(tracerProvider);
  setTracerProvider(tracerProvider);
  const logExporter = new OTLPLogExporter(logHttpConfig);
  const loggerProvider = new LoggerProvider({
    resource,
    processors: [
      new BatchLogRecordProcessor(logExporter, {
        scheduledDelayMillis: DEFAULT_LOGS_EXPORT_INTERVAL_MS
      })
    ]
  });
  import_api_logs.logs.setGlobalLoggerProvider(loggerProvider);
  setLoggerProvider(loggerProvider);
  const eventLogger = import_api_logs.logs.getLogger("com.anthropic.claude_code.events", "1.0.0");
  setEventLogger(eventLogger);
  process.on("beforeExit", async () => {
    await loggerProvider?.forceFlush();
    await tracerProvider?.forceFlush();
  });
  process.on("exit", () => {
    loggerProvider?.forceFlush();
    tracerProvider?.forceFlush();
  });
}
async function initializeTelemetry() {
  profileCheckpoint("telemetry_init_start");
  bootstrapTelemetry();
  if (getHasFormattedOutput()) {
    for (const key of [
      "OTEL_METRICS_EXPORTER",
      "OTEL_LOGS_EXPORTER",
      "OTEL_TRACES_EXPORTER"
    ]) {
      const v = process.env[key];
      if (v?.includes("console")) {
        process.env[key] = v.split(",").map((s) => s.trim()).filter((s) => s !== "console").join(",");
      }
    }
  }
  import_api.diag.setLogger(new ClaudeCodeDiagLogger, import_api.DiagLogLevel.ERROR);
  initializePerfettoTracing();
  const readers = [];
  const telemetryEnabled = isTelemetryEnabled();
  logForDebugging(`[3P telemetry] isTelemetryEnabled=${telemetryEnabled} (CLAUDE_CODE_ENABLE_TELEMETRY=${process.env.CLAUDE_CODE_ENABLE_TELEMETRY})`);
  if (telemetryEnabled) {
    readers.push(...await getOtlpReaders());
  }
  if (isBigQueryMetricsEnabled()) {
    readers.push(getBigQueryExportingReader());
  }
  const platform = getPlatform();
  const baseAttributes = {
    [import_semantic_conventions.ATTR_SERVICE_NAME]: "claude-code",
    [import_semantic_conventions.ATTR_SERVICE_VERSION]: "1.0.0"
  };
  if (platform === "wsl") {
    const wslVersion = getWslVersion();
    if (wslVersion) {
      baseAttributes["wsl.version"] = wslVersion;
    }
  }
  const baseResource = import_resources.resourceFromAttributes(baseAttributes);
  const osResource = import_resources.resourceFromAttributes(import_resources.osDetector.detect().attributes || {});
  const hostDetected = import_resources.hostDetector.detect();
  const hostArchAttributes = hostDetected.attributes?.[import_semantic_conventions.SEMRESATTRS_HOST_ARCH] ? {
    [import_semantic_conventions.SEMRESATTRS_HOST_ARCH]: hostDetected.attributes[import_semantic_conventions.SEMRESATTRS_HOST_ARCH]
  } : {};
  const hostArchResource = import_resources.resourceFromAttributes(hostArchAttributes);
  const envResource = import_resources.resourceFromAttributes(import_resources.envDetector.detect().attributes || {});
  const resource = baseResource.merge(osResource).merge(hostArchResource).merge(envResource);
  if (isBetaTracingEnabled()) {
    initializeBetaTracing(resource).catch((e) => logForDebugging(`Beta tracing init failed: ${e}`, { level: "error" }));
    const meterProvider2 = new import_sdk_metrics2.MeterProvider({
      resource,
      views: [],
      readers
    });
    setMeterProvider(meterProvider2);
    const shutdownTelemetry2 = async () => {
      const timeoutMs = parseInt(process.env.CLAUDE_CODE_OTEL_SHUTDOWN_TIMEOUT_MS || "2000", 10);
      try {
        endInteractionSpan();
        const loggerProvider = getLoggerProvider();
        const tracerProvider = getTracerProvider();
        const chains = [meterProvider2.shutdown()];
        if (loggerProvider) {
          chains.push(loggerProvider.forceFlush().then(() => loggerProvider.shutdown()));
        }
        if (tracerProvider) {
          chains.push(tracerProvider.forceFlush().then(() => tracerProvider.shutdown()));
        }
        await Promise.race([
          Promise.all(chains),
          telemetryTimeout(timeoutMs, "OpenTelemetry shutdown timeout")
        ]);
      } catch {}
    };
    registerCleanup(shutdownTelemetry2);
    return meterProvider2.getMeter("com.anthropic.claude_code", "1.0.0");
  }
  const meterProvider = new import_sdk_metrics2.MeterProvider({
    resource,
    views: [],
    readers
  });
  setMeterProvider(meterProvider);
  if (telemetryEnabled) {
    const logExporters = await getOtlpLogExporters();
    logForDebugging(`[3P telemetry] Created ${logExporters.length} log exporter(s)`);
    if (logExporters.length > 0) {
      const loggerProvider = new LoggerProvider({
        resource,
        processors: logExporters.map((exporter) => new BatchLogRecordProcessor(exporter, {
          scheduledDelayMillis: parseInt(process.env.OTEL_LOGS_EXPORT_INTERVAL || DEFAULT_LOGS_EXPORT_INTERVAL_MS.toString(), 10)
        }))
      });
      import_api_logs.logs.setGlobalLoggerProvider(loggerProvider);
      setLoggerProvider(loggerProvider);
      const eventLogger = import_api_logs.logs.getLogger("com.anthropic.claude_code.events", "1.0.0");
      setEventLogger(eventLogger);
      logForDebugging("[3P telemetry] Event logger set successfully");
      process.on("beforeExit", async () => {
        await loggerProvider?.forceFlush();
        const tracerProvider = getTracerProvider();
        await tracerProvider?.forceFlush();
      });
      process.on("exit", () => {
        loggerProvider?.forceFlush();
        getTracerProvider()?.forceFlush();
      });
    }
  }
  if (telemetryEnabled && isEnhancedTelemetryEnabled()) {
    const traceExporters = await getOtlpTraceExporters();
    if (traceExporters.length > 0) {
      const spanProcessors = traceExporters.map((exporter) => new BatchSpanProcessor(exporter, {
        scheduledDelayMillis: parseInt(process.env.OTEL_TRACES_EXPORT_INTERVAL || DEFAULT_TRACES_EXPORT_INTERVAL_MS.toString(), 10)
      }));
      const tracerProvider = new BasicTracerProvider({
        resource,
        spanProcessors
      });
      import_api.trace.setGlobalTracerProvider(tracerProvider);
      setTracerProvider(tracerProvider);
    }
  }
  const shutdownTelemetry = async () => {
    const timeoutMs = parseInt(process.env.CLAUDE_CODE_OTEL_SHUTDOWN_TIMEOUT_MS || "2000", 10);
    try {
      endInteractionSpan();
      const shutdownPromises = [meterProvider.shutdown()];
      const loggerProvider = getLoggerProvider();
      if (loggerProvider) {
        shutdownPromises.push(loggerProvider.shutdown());
      }
      const tracerProvider = getTracerProvider();
      if (tracerProvider) {
        shutdownPromises.push(tracerProvider.shutdown());
      }
      await Promise.race([
        Promise.all(shutdownPromises),
        telemetryTimeout(timeoutMs, "OpenTelemetry shutdown timeout")
      ]);
    } catch (error) {
      if (error instanceof Error && error.message.includes("timeout")) {
        logForDebugging(`
OpenTelemetry telemetry flush timed out after ${timeoutMs}ms

To resolve this issue, you can:
1. Increase the timeout by setting CLAUDE_CODE_OTEL_SHUTDOWN_TIMEOUT_MS env var (e.g., 5000 for 5 seconds)
2. Check if your OpenTelemetry backend is experiencing scalability issues
3. Disable OpenTelemetry by unsetting CLAUDE_CODE_ENABLE_TELEMETRY env var

Current timeout: ${timeoutMs}ms
`, { level: "error" });
      }
      throw error;
    }
  };
  registerCleanup(shutdownTelemetry);
  return meterProvider.getMeter("com.anthropic.claude_code", "1.0.0");
}
async function flushTelemetry() {
  const meterProvider = getMeterProvider();
  if (!meterProvider) {
    return;
  }
  const timeoutMs = parseInt(process.env.CLAUDE_CODE_OTEL_FLUSH_TIMEOUT_MS || "5000", 10);
  try {
    const flushPromises = [meterProvider.forceFlush()];
    const loggerProvider = getLoggerProvider();
    if (loggerProvider) {
      flushPromises.push(loggerProvider.forceFlush());
    }
    const tracerProvider = getTracerProvider();
    if (tracerProvider) {
      flushPromises.push(tracerProvider.forceFlush());
    }
    await Promise.race([
      Promise.all(flushPromises),
      telemetryTimeout(timeoutMs, "OpenTelemetry flush timeout")
    ]);
    logForDebugging("Telemetry flushed successfully");
  } catch (error) {
    if (error instanceof TelemetryTimeoutError) {
      logForDebugging(`Telemetry flush timed out after ${timeoutMs}ms. Some metrics may not be exported.`, { level: "warn" });
    } else {
      logForDebugging(`Telemetry flush failed: ${errorMessage(error)}`, {
        level: "error"
      });
    }
  }
}
function parseOtelHeadersEnvVar() {
  const headers = {};
  const envHeaders = process.env.OTEL_EXPORTER_OTLP_HEADERS;
  if (envHeaders) {
    for (const pair of envHeaders.split(",")) {
      const [key, ...valueParts] = pair.split("=");
      if (key && valueParts.length > 0) {
        headers[key.trim()] = valueParts.join("=").trim();
      }
    }
  }
  return headers;
}
function getOTLPExporterConfig() {
  const proxyUrl = getProxyUrl();
  const mtlsConfig = getMTLSConfig();
  const settings = getSettings_DEPRECATED();
  const config = {};
  const staticHeaders = parseOtelHeadersEnvVar();
  if (settings?.otelHeadersHelper) {
    config.headers = async () => {
      const dynamicHeaders = getOtelHeadersFromHelper();
      return { ...staticHeaders, ...dynamicHeaders };
    };
  } else if (Object.keys(staticHeaders).length > 0) {
    config.headers = async () => staticHeaders;
  }
  const otelEndpoint = process.env.OTEL_EXPORTER_OTLP_ENDPOINT;
  if (!proxyUrl || otelEndpoint && shouldBypassProxy(otelEndpoint)) {
    const caCerts2 = getCACertificates();
    if (mtlsConfig || caCerts2) {
      config.httpAgentOptions = {
        ...mtlsConfig,
        ...caCerts2 && { ca: caCerts2 }
      };
    }
    return config;
  }
  const caCerts = getCACertificates();
  const agentFactory = (_protocol) => {
    const proxyAgent = mtlsConfig || caCerts ? new HttpsProxyAgent(proxyUrl, {
      ...mtlsConfig && {
        cert: mtlsConfig.cert,
        key: mtlsConfig.key,
        passphrase: mtlsConfig.passphrase
      },
      ...caCerts && { ca: caCerts }
    }) : new HttpsProxyAgent(proxyUrl);
    return proxyAgent;
  };
  config.httpAgentOptions = agentFactory;
  return config;
}
var import_api, import_api_logs, import_resources, import_sdk_metrics2, import_semantic_conventions, DEFAULT_METRICS_EXPORT_INTERVAL_MS = 60000, DEFAULT_LOGS_EXPORT_INTERVAL_MS = 5000, DEFAULT_TRACES_EXPORT_INTERVAL_MS = 5000, TelemetryTimeoutError;
var init_instrumentation = __esm(() => {
  init_esm();
  init_esm2();
  init_dist();
  init_state();
  init_auth();
  init_platform();
  init_caCerts();
  init_cleanupRegistry();
  init_debug();
  init_envUtils();
  init_errors();
  init_mtls();
  init_proxy();
  init_settings();
  init_slowOperations();
  init_startupProfiler();
  init_betaSessionTracing();
  init_bigqueryExporter();
  init_logger();
  init_perfettoTracing();
  init_sessionTracing();
  import_api = __toESM(require_src(), 1);
  import_api_logs = __toESM(require_src5(), 1);
  import_resources = __toESM(require_src4(), 1);
  import_sdk_metrics2 = __toESM(require_src6(), 1);
  import_semantic_conventions = __toESM(require_src2(), 1);
  TelemetryTimeoutError = class TelemetryTimeoutError extends Error {
  };
});
init_instrumentation();

export {
  parseExporterTypes,
  isTelemetryEnabled,
  initializeTelemetry,
  flushTelemetry,
  bootstrapTelemetry
};
