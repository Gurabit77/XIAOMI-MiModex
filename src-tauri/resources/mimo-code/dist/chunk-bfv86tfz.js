// @bun
import {
  require_src as require_src2
} from "./chunk-r30b628v.js";
import {
  require_index_node_http,
  require_src1 as require_src
} from "./chunk-adnxyg7j.js";
import"./chunk-djs11qd6.js";
import"./chunk-nrv96v1h.js";
import"./chunk-gdqk4ssq.js";
import"./chunk-p2816w9z.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@opentelemetry+exporter-metrics-otlp-proto@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/exporter-metrics-otlp-proto/build/esm/platform/node/OTLPMetricExporter.js
var import_exporter_metrics_otlp_http, import_otlp_transformer, import_node_http, OTLPMetricExporter;
var init_OTLPMetricExporter = __esm(() => {
  import_exporter_metrics_otlp_http = __toESM(require_src2(), 1);
  import_otlp_transformer = __toESM(require_src(), 1);
  import_node_http = __toESM(require_index_node_http(), 1);
  OTLPMetricExporter = class OTLPMetricExporter extends import_exporter_metrics_otlp_http.OTLPMetricExporterBase {
    constructor(config) {
      super(import_node_http.createOtlpHttpExportDelegate(import_node_http.convertLegacyHttpOptions(config ?? {}, "METRICS", "v1/metrics", {
        "Content-Type": "application/x-protobuf"
      }), import_otlp_transformer.ProtobufMetricsSerializer), config);
    }
  };
});

// node_modules/.bun/@opentelemetry+exporter-metrics-otlp-proto@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/exporter-metrics-otlp-proto/build/esm/platform/node/index.js
var init_node = __esm(() => {
  init_OTLPMetricExporter();
});

// node_modules/.bun/@opentelemetry+exporter-metrics-otlp-proto@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/exporter-metrics-otlp-proto/build/esm/platform/index.js
var init_platform = __esm(() => {
  init_node();
});

// node_modules/.bun/@opentelemetry+exporter-metrics-otlp-proto@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/exporter-metrics-otlp-proto/build/esm/index.js
var init_esm = __esm(() => {
  init_platform();
});
init_esm();

export {
  OTLPMetricExporter
};
