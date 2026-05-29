// @bun
import {
  require_src as require_src4
} from "./chunk-nrv96v1h.js";
import {
  require_src as require_src2,
  require_src1 as require_src3
} from "./chunk-gdqk4ssq.js";
import {
  require_src
} from "./chunk-p2816w9z.js";
import {
  __commonJS,
  __require
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@opentelemetry+exporter-prometheus@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/exporter-prometheus/build/src/PrometheusSerializer.js
var require_PrometheusSerializer = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.PrometheusSerializer = undefined;
  var api_1 = require_src();
  var sdk_metrics_1 = require_src4();
  var core_1 = require_src3();
  var semantic_conventions_1 = require_src2();
  var ATTR_OTEL_SCOPE_SCHEMA_URL = "otel.scope.schema_url";
  function escapeString(str) {
    return str.replace(/\\/g, "\\\\").replace(/\n/g, "\\n");
  }
  function escapeAttributeValue(str = "") {
    if (typeof str !== "string") {
      str = JSON.stringify(str);
    }
    return escapeString(str).replace(/"/g, "\\\"");
  }
  var invalidCharacterRegex = /[^a-z0-9_]/gi;
  var multipleUnderscoreRegex = /_{2,}/g;
  function sanitizePrometheusMetricName(name) {
    return name.replace(invalidCharacterRegex, "_").replace(multipleUnderscoreRegex, "_");
  }
  function enforcePrometheusNamingConvention(name, data) {
    if (!name.endsWith("_total") && data.dataPointType === sdk_metrics_1.DataPointType.SUM && data.isMonotonic) {
      name = name + "_total";
    }
    return name;
  }
  function valueString(value) {
    if (value === Infinity) {
      return "+Inf";
    } else if (value === -Infinity) {
      return "-Inf";
    } else {
      return `${value}`;
    }
  }
  function toPrometheusType(metricData) {
    switch (metricData.dataPointType) {
      case sdk_metrics_1.DataPointType.SUM:
        if (metricData.isMonotonic) {
          return "counter";
        }
        return "gauge";
      case sdk_metrics_1.DataPointType.GAUGE:
        return "gauge";
      case sdk_metrics_1.DataPointType.HISTOGRAM:
        return "histogram";
      default:
        return "untyped";
    }
  }
  function stringify(metricName, attributes, value, timestamp, additionalAttributes) {
    let hasAttribute = false;
    let attributesStr = "";
    for (const [key, val] of Object.entries(attributes)) {
      const sanitizedAttributeName = sanitizePrometheusMetricName(key);
      hasAttribute = true;
      attributesStr += `${attributesStr.length > 0 ? "," : ""}${sanitizedAttributeName}="${escapeAttributeValue(val)}"`;
    }
    if (additionalAttributes) {
      for (const [key, val] of Object.entries(additionalAttributes)) {
        const sanitizedAttributeName = sanitizePrometheusMetricName(key);
        hasAttribute = true;
        attributesStr += `${attributesStr.length > 0 ? "," : ""}${sanitizedAttributeName}="${escapeAttributeValue(val)}"`;
      }
    }
    if (hasAttribute) {
      metricName += `{${attributesStr}}`;
    }
    return `${metricName} ${valueString(value)}${timestamp !== undefined ? " " + String(timestamp) : ""}
`;
  }
  var NO_REGISTERED_METRICS = "# no registered metrics";

  class PrometheusSerializer {
    _prefix;
    _appendTimestamp;
    _additionalAttributes;
    _withResourceConstantLabels;
    _withoutScopeInfo;
    _withoutTargetInfo;
    constructor(prefix, appendTimestamp = false, withResourceConstantLabels, withoutTargetInfo, withoutScopeInfo) {
      if (prefix) {
        this._prefix = prefix + "_";
      }
      this._appendTimestamp = appendTimestamp;
      this._withResourceConstantLabels = withResourceConstantLabels;
      this._withoutScopeInfo = !!withoutScopeInfo;
      this._withoutTargetInfo = !!withoutTargetInfo;
    }
    serialize(resourceMetrics) {
      let str = "";
      this._additionalAttributes = this._filterResourceConstantLabels(resourceMetrics.resource.attributes, this._withResourceConstantLabels);
      for (const scopeMetrics of resourceMetrics.scopeMetrics) {
        str += this._serializeScopeMetrics(scopeMetrics);
      }
      if (str === "") {
        str += NO_REGISTERED_METRICS;
      }
      return this._serializeResource(resourceMetrics.resource) + str;
    }
    _filterResourceConstantLabels(attributes, pattern) {
      if (pattern) {
        const filteredAttributes = {};
        for (const [key, value] of Object.entries(attributes)) {
          if (key.match(pattern)) {
            filteredAttributes[key] = value;
          }
        }
        return filteredAttributes;
      }
      return;
    }
    _serializeScopeMetrics(scopeMetrics) {
      let str = "";
      for (const metric of scopeMetrics.metrics) {
        str += this._serializeMetricData(metric, scopeMetrics.scope) + `
`;
      }
      return str;
    }
    _serializeMetricData(metricData, scope) {
      let name = sanitizePrometheusMetricName(escapeString(metricData.descriptor.name));
      if (this._prefix) {
        name = `${this._prefix}${name}`;
      }
      const dataPointType = metricData.dataPointType;
      name = enforcePrometheusNamingConvention(name, metricData);
      const help = `# HELP ${name} ${escapeString(metricData.descriptor.description || "description missing")}`;
      const unit = metricData.descriptor.unit ? `
# UNIT ${name} ${escapeString(metricData.descriptor.unit)}` : "";
      const type = `# TYPE ${name} ${toPrometheusType(metricData)}`;
      let additionalAttributes;
      if (this._withoutScopeInfo) {
        additionalAttributes = this._additionalAttributes;
      } else {
        const scopeInfo = { [semantic_conventions_1.ATTR_OTEL_SCOPE_NAME]: scope.name };
        if (scope.schemaUrl) {
          scopeInfo[ATTR_OTEL_SCOPE_SCHEMA_URL] = scope.schemaUrl;
        }
        if (scope.version) {
          scopeInfo[semantic_conventions_1.ATTR_OTEL_SCOPE_VERSION] = scope.version;
        }
        additionalAttributes = Object.assign(scopeInfo, this._additionalAttributes);
      }
      let results = "";
      switch (dataPointType) {
        case sdk_metrics_1.DataPointType.SUM:
        case sdk_metrics_1.DataPointType.GAUGE: {
          results = metricData.dataPoints.map((it) => this._serializeSingularDataPoint(name, metricData, it, additionalAttributes)).join("");
          break;
        }
        case sdk_metrics_1.DataPointType.HISTOGRAM: {
          results = metricData.dataPoints.map((it) => this._serializeHistogramDataPoint(name, metricData, it, additionalAttributes)).join("");
          break;
        }
        default: {
          api_1.diag.error(`Unrecognizable DataPointType: ${dataPointType} for metric "${name}"`);
        }
      }
      return `${help}${unit}
${type}
${results}`.trim();
    }
    _serializeSingularDataPoint(name, data, dataPoint, additionalAttributes) {
      let results = "";
      name = enforcePrometheusNamingConvention(name, data);
      const { value, attributes } = dataPoint;
      const timestamp = (0, core_1.hrTimeToMilliseconds)(dataPoint.endTime);
      results += stringify(name, attributes, value, this._appendTimestamp ? timestamp : undefined, additionalAttributes);
      return results;
    }
    _serializeHistogramDataPoint(name, data, dataPoint, additionalAttributes) {
      let results = "";
      name = enforcePrometheusNamingConvention(name, data);
      const attributes = dataPoint.attributes;
      const histogram = dataPoint.value;
      const timestamp = (0, core_1.hrTimeToMilliseconds)(dataPoint.endTime);
      for (const key of ["count", "sum"]) {
        const value = histogram[key];
        if (value != null)
          results += stringify(name + "_" + key, attributes, value, this._appendTimestamp ? timestamp : undefined, additionalAttributes);
      }
      let cumulativeSum = 0;
      const countEntries = histogram.buckets.counts.entries();
      let infiniteBoundaryDefined = false;
      for (const [idx, val] of countEntries) {
        cumulativeSum += val;
        const upperBound = histogram.buckets.boundaries[idx];
        if (upperBound === undefined && infiniteBoundaryDefined) {
          break;
        }
        if (upperBound === Infinity) {
          infiniteBoundaryDefined = true;
        }
        results += stringify(name + "_bucket", attributes, cumulativeSum, this._appendTimestamp ? timestamp : undefined, Object.assign({}, additionalAttributes, {
          le: upperBound === undefined || upperBound === Infinity ? "+Inf" : String(upperBound)
        }));
      }
      return results;
    }
    _serializeResource(resource) {
      if (this._withoutTargetInfo === true) {
        return "";
      }
      const name = "target_info";
      const help = `# HELP ${name} Target metadata`;
      const type = `# TYPE ${name} gauge`;
      const results = stringify(name, resource.attributes, 1).trim();
      return `${help}
${type}
${results}
`;
    }
  }
  exports.PrometheusSerializer = PrometheusSerializer;
});

// node_modules/.bun/@opentelemetry+exporter-prometheus@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/exporter-prometheus/build/src/PrometheusExporter.js
var require_PrometheusExporter = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.PrometheusExporter = undefined;
  var api_1 = require_src();
  var core_1 = require_src3();
  var sdk_metrics_1 = require_src4();
  var http_1 = __require("http");
  var PrometheusSerializer_1 = require_PrometheusSerializer();
  var url_1 = __require("url");

  class PrometheusExporter extends sdk_metrics_1.MetricReader {
    static DEFAULT_OPTIONS = {
      host: undefined,
      port: 9464,
      endpoint: "/metrics",
      prefix: "",
      appendTimestamp: false,
      withResourceConstantLabels: undefined,
      withoutScopeInfo: false,
      withoutTargetInfo: false
    };
    _host;
    _port;
    _baseUrl;
    _endpoint;
    _server;
    _prefix;
    _appendTimestamp;
    _serializer;
    _startServerPromise;
    constructor(config = {}, callback = () => {}) {
      super({
        aggregationSelector: (_instrumentType) => {
          return {
            type: sdk_metrics_1.AggregationType.DEFAULT
          };
        },
        aggregationTemporalitySelector: (_instrumentType) => sdk_metrics_1.AggregationTemporality.CUMULATIVE,
        metricProducers: config.metricProducers
      });
      this._host = config.host || process.env.OTEL_EXPORTER_PROMETHEUS_HOST || PrometheusExporter.DEFAULT_OPTIONS.host;
      this._port = config.port || Number(process.env.OTEL_EXPORTER_PROMETHEUS_PORT) || PrometheusExporter.DEFAULT_OPTIONS.port;
      this._prefix = config.prefix || PrometheusExporter.DEFAULT_OPTIONS.prefix;
      this._appendTimestamp = typeof config.appendTimestamp === "boolean" ? config.appendTimestamp : PrometheusExporter.DEFAULT_OPTIONS.appendTimestamp;
      const _withResourceConstantLabels = config.withResourceConstantLabels || PrometheusExporter.DEFAULT_OPTIONS.withResourceConstantLabels;
      const _withoutScopeInfo = config.withoutScopeInfo || PrometheusExporter.DEFAULT_OPTIONS.withoutScopeInfo;
      const _withoutTargetInfo = config.withoutTargetInfo || PrometheusExporter.DEFAULT_OPTIONS.withoutTargetInfo;
      this._server = (0, http_1.createServer)(this._requestHandler).unref();
      this._serializer = new PrometheusSerializer_1.PrometheusSerializer(this._prefix, this._appendTimestamp, _withResourceConstantLabels, _withoutTargetInfo, _withoutScopeInfo);
      this._baseUrl = `http://${this._host}:${this._port}/`;
      this._endpoint = (config.endpoint || PrometheusExporter.DEFAULT_OPTIONS.endpoint).replace(/^([^/])/, "/$1");
      if (config.preventServerStart !== true) {
        this.startServer().then(callback, (err) => {
          api_1.diag.error(err);
          callback(err);
        });
      } else if (callback) {
        queueMicrotask(callback);
      }
    }
    async onForceFlush() {}
    onShutdown() {
      return this.stopServer();
    }
    stopServer() {
      if (!this._server) {
        api_1.diag.debug("Prometheus stopServer() was called but server was never started.");
        return Promise.resolve();
      } else {
        return new Promise((resolve) => {
          this._server.close((err) => {
            if (!err) {
              api_1.diag.debug("Prometheus exporter was stopped");
            } else {
              if (err.code !== "ERR_SERVER_NOT_RUNNING") {
                (0, core_1.globalErrorHandler)(err);
              }
            }
            resolve();
          });
        });
      }
    }
    startServer() {
      this._startServerPromise ??= new Promise((resolve, reject) => {
        this._server.once("error", reject);
        this._server.listen({
          port: this._port,
          host: this._host
        }, () => {
          api_1.diag.debug(`Prometheus exporter server started: ${this._host}:${this._port}/${this._endpoint}`);
          resolve();
        });
      });
      return this._startServerPromise;
    }
    getMetricsRequestHandler(_request, response) {
      this._exportMetrics(response);
    }
    _requestHandler = (request, response) => {
      if (request.url != null && new url_1.URL(request.url, this._baseUrl).pathname === this._endpoint) {
        this._exportMetrics(response);
      } else {
        this._notFound(response);
      }
    };
    _exportMetrics = (response) => {
      response.statusCode = 200;
      response.setHeader("content-type", "text/plain");
      this.collect().then((collectionResult) => {
        const { resourceMetrics, errors } = collectionResult;
        if (errors.length) {
          api_1.diag.error("PrometheusExporter: metrics collection errors", ...errors);
        }
        response.end(this._serializer.serialize(resourceMetrics));
      }, (err) => {
        response.end(`# failed to export metrics: ${err}`);
      });
    };
    _notFound = (response) => {
      response.statusCode = 404;
      response.end();
    };
  }
  exports.PrometheusExporter = PrometheusExporter;
});

// node_modules/.bun/@opentelemetry+exporter-prometheus@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/exporter-prometheus/build/src/index.js
var require_src5 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.PrometheusSerializer = exports.PrometheusExporter = undefined;
  var PrometheusExporter_1 = require_PrometheusExporter();
  Object.defineProperty(exports, "PrometheusExporter", { enumerable: true, get: function() {
    return PrometheusExporter_1.PrometheusExporter;
  } });
  var PrometheusSerializer_1 = require_PrometheusSerializer();
  Object.defineProperty(exports, "PrometheusSerializer", { enumerable: true, get: function() {
    return PrometheusSerializer_1.PrometheusSerializer;
  } });
});
export default require_src5();
