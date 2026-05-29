// @bun
import {
  require_index_node_http,
  require_src as require_src3,
  require_src1 as require_src5
} from "./chunk-adnxyg7j.js";
import {
  require_src as require_src4
} from "./chunk-nrv96v1h.js";
import {
  require_src1 as require_src2
} from "./chunk-gdqk4ssq.js";
import {
  require_src
} from "./chunk-p2816w9z.js";
import {
  __commonJS
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@opentelemetry+exporter-metrics-otlp-http@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/exporter-metrics-otlp-http/build/src/OTLPMetricExporterOptions.js
var require_OTLPMetricExporterOptions = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.AggregationTemporalityPreference = undefined;
  var AggregationTemporalityPreference;
  (function(AggregationTemporalityPreference2) {
    AggregationTemporalityPreference2[AggregationTemporalityPreference2["DELTA"] = 0] = "DELTA";
    AggregationTemporalityPreference2[AggregationTemporalityPreference2["CUMULATIVE"] = 1] = "CUMULATIVE";
    AggregationTemporalityPreference2[AggregationTemporalityPreference2["LOWMEMORY"] = 2] = "LOWMEMORY";
  })(AggregationTemporalityPreference = exports.AggregationTemporalityPreference || (exports.AggregationTemporalityPreference = {}));
});

// node_modules/.bun/@opentelemetry+exporter-metrics-otlp-http@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/exporter-metrics-otlp-http/build/src/OTLPMetricExporterBase.js
var require_OTLPMetricExporterBase = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.OTLPMetricExporterBase = exports.LowMemoryTemporalitySelector = exports.DeltaTemporalitySelector = exports.CumulativeTemporalitySelector = undefined;
  var core_1 = require_src2();
  var sdk_metrics_1 = require_src4();
  var OTLPMetricExporterOptions_1 = require_OTLPMetricExporterOptions();
  var otlp_exporter_base_1 = require_src3();
  var api_1 = require_src();
  var CumulativeTemporalitySelector = () => sdk_metrics_1.AggregationTemporality.CUMULATIVE;
  exports.CumulativeTemporalitySelector = CumulativeTemporalitySelector;
  var DeltaTemporalitySelector = (instrumentType) => {
    switch (instrumentType) {
      case sdk_metrics_1.InstrumentType.COUNTER:
      case sdk_metrics_1.InstrumentType.OBSERVABLE_COUNTER:
      case sdk_metrics_1.InstrumentType.GAUGE:
      case sdk_metrics_1.InstrumentType.HISTOGRAM:
      case sdk_metrics_1.InstrumentType.OBSERVABLE_GAUGE:
        return sdk_metrics_1.AggregationTemporality.DELTA;
      case sdk_metrics_1.InstrumentType.UP_DOWN_COUNTER:
      case sdk_metrics_1.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER:
        return sdk_metrics_1.AggregationTemporality.CUMULATIVE;
    }
  };
  exports.DeltaTemporalitySelector = DeltaTemporalitySelector;
  var LowMemoryTemporalitySelector = (instrumentType) => {
    switch (instrumentType) {
      case sdk_metrics_1.InstrumentType.COUNTER:
      case sdk_metrics_1.InstrumentType.HISTOGRAM:
        return sdk_metrics_1.AggregationTemporality.DELTA;
      case sdk_metrics_1.InstrumentType.GAUGE:
      case sdk_metrics_1.InstrumentType.UP_DOWN_COUNTER:
      case sdk_metrics_1.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER:
      case sdk_metrics_1.InstrumentType.OBSERVABLE_COUNTER:
      case sdk_metrics_1.InstrumentType.OBSERVABLE_GAUGE:
        return sdk_metrics_1.AggregationTemporality.CUMULATIVE;
    }
  };
  exports.LowMemoryTemporalitySelector = LowMemoryTemporalitySelector;
  function chooseTemporalitySelectorFromEnvironment() {
    const configuredTemporality = ((0, core_1.getStringFromEnv)("OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE") ?? "cumulative").toLowerCase();
    if (configuredTemporality === "cumulative") {
      return exports.CumulativeTemporalitySelector;
    }
    if (configuredTemporality === "delta") {
      return exports.DeltaTemporalitySelector;
    }
    if (configuredTemporality === "lowmemory") {
      return exports.LowMemoryTemporalitySelector;
    }
    api_1.diag.warn(`OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE is set to '${configuredTemporality}', but only 'cumulative' and 'delta' are allowed. Using default ('cumulative') instead.`);
    return exports.CumulativeTemporalitySelector;
  }
  function chooseTemporalitySelector(temporalityPreference) {
    if (temporalityPreference != null) {
      if (temporalityPreference === OTLPMetricExporterOptions_1.AggregationTemporalityPreference.DELTA) {
        return exports.DeltaTemporalitySelector;
      } else if (temporalityPreference === OTLPMetricExporterOptions_1.AggregationTemporalityPreference.LOWMEMORY) {
        return exports.LowMemoryTemporalitySelector;
      }
      return exports.CumulativeTemporalitySelector;
    }
    return chooseTemporalitySelectorFromEnvironment();
  }
  var DEFAULT_AGGREGATION = Object.freeze({
    type: sdk_metrics_1.AggregationType.DEFAULT
  });
  function chooseAggregationSelector(config) {
    return config?.aggregationPreference ?? (() => DEFAULT_AGGREGATION);
  }

  class OTLPMetricExporterBase extends otlp_exporter_base_1.OTLPExporterBase {
    _aggregationTemporalitySelector;
    _aggregationSelector;
    constructor(delegate, config) {
      super(delegate);
      this._aggregationSelector = chooseAggregationSelector(config);
      this._aggregationTemporalitySelector = chooseTemporalitySelector(config?.temporalityPreference);
    }
    selectAggregation(instrumentType) {
      return this._aggregationSelector(instrumentType);
    }
    selectAggregationTemporality(instrumentType) {
      return this._aggregationTemporalitySelector(instrumentType);
    }
  }
  exports.OTLPMetricExporterBase = OTLPMetricExporterBase;
});

// node_modules/.bun/@opentelemetry+exporter-metrics-otlp-http@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/exporter-metrics-otlp-http/build/src/platform/node/OTLPMetricExporter.js
var require_OTLPMetricExporter = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.OTLPMetricExporter = undefined;
  var OTLPMetricExporterBase_1 = require_OTLPMetricExporterBase();
  var otlp_transformer_1 = require_src5();
  var node_http_1 = require_index_node_http();

  class OTLPMetricExporter extends OTLPMetricExporterBase_1.OTLPMetricExporterBase {
    constructor(config) {
      super((0, node_http_1.createOtlpHttpExportDelegate)((0, node_http_1.convertLegacyHttpOptions)(config ?? {}, "METRICS", "v1/metrics", {
        "Content-Type": "application/json"
      }), otlp_transformer_1.JsonMetricsSerializer), config);
    }
  }
  exports.OTLPMetricExporter = OTLPMetricExporter;
});

// node_modules/.bun/@opentelemetry+exporter-metrics-otlp-http@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/exporter-metrics-otlp-http/build/src/platform/node/index.js
var require_node = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.OTLPMetricExporter = undefined;
  var OTLPMetricExporter_1 = require_OTLPMetricExporter();
  Object.defineProperty(exports, "OTLPMetricExporter", { enumerable: true, get: function() {
    return OTLPMetricExporter_1.OTLPMetricExporter;
  } });
});

// node_modules/.bun/@opentelemetry+exporter-metrics-otlp-http@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/exporter-metrics-otlp-http/build/src/platform/index.js
var require_platform = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.OTLPMetricExporter = undefined;
  var node_1 = require_node();
  Object.defineProperty(exports, "OTLPMetricExporter", { enumerable: true, get: function() {
    return node_1.OTLPMetricExporter;
  } });
});

// node_modules/.bun/@opentelemetry+exporter-metrics-otlp-http@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/exporter-metrics-otlp-http/build/src/index.js
var require_src6 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.OTLPMetricExporterBase = exports.LowMemoryTemporalitySelector = exports.DeltaTemporalitySelector = exports.CumulativeTemporalitySelector = exports.AggregationTemporalityPreference = exports.OTLPMetricExporter = undefined;
  var platform_1 = require_platform();
  Object.defineProperty(exports, "OTLPMetricExporter", { enumerable: true, get: function() {
    return platform_1.OTLPMetricExporter;
  } });
  var OTLPMetricExporterOptions_1 = require_OTLPMetricExporterOptions();
  Object.defineProperty(exports, "AggregationTemporalityPreference", { enumerable: true, get: function() {
    return OTLPMetricExporterOptions_1.AggregationTemporalityPreference;
  } });
  var OTLPMetricExporterBase_1 = require_OTLPMetricExporterBase();
  Object.defineProperty(exports, "CumulativeTemporalitySelector", { enumerable: true, get: function() {
    return OTLPMetricExporterBase_1.CumulativeTemporalitySelector;
  } });
  Object.defineProperty(exports, "DeltaTemporalitySelector", { enumerable: true, get: function() {
    return OTLPMetricExporterBase_1.DeltaTemporalitySelector;
  } });
  Object.defineProperty(exports, "LowMemoryTemporalitySelector", { enumerable: true, get: function() {
    return OTLPMetricExporterBase_1.LowMemoryTemporalitySelector;
  } });
  Object.defineProperty(exports, "OTLPMetricExporterBase", { enumerable: true, get: function() {
    return OTLPMetricExporterBase_1.OTLPMetricExporterBase;
  } });
});

export { require_src6 as require_src };
