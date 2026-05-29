// @bun
import {
  require_src as require_src2
} from "./chunk-r30b628v.js";
import {
  require_src as require_src3
} from "./chunk-tr031mpt.js";
import {
  require_src1 as require_src
} from "./chunk-adnxyg7j.js";
import"./chunk-djs11qd6.js";
import"./chunk-nrv96v1h.js";
import"./chunk-gdqk4ssq.js";
import"./chunk-p2816w9z.js";
import {
  __commonJS
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@opentelemetry+exporter-metrics-otlp-grpc@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/exporter-metrics-otlp-grpc/build/src/OTLPMetricExporter.js
var require_OTLPMetricExporter = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.OTLPMetricExporter = undefined;
  var exporter_metrics_otlp_http_1 = require_src2();
  var otlp_grpc_exporter_base_1 = require_src3();
  var otlp_transformer_1 = require_src();

  class OTLPMetricExporter extends exporter_metrics_otlp_http_1.OTLPMetricExporterBase {
    constructor(config) {
      super((0, otlp_grpc_exporter_base_1.createOtlpGrpcExportDelegate)((0, otlp_grpc_exporter_base_1.convertLegacyOtlpGrpcOptions)(config ?? {}, "METRICS"), otlp_transformer_1.ProtobufMetricsSerializer, "MetricsExportService", "/opentelemetry.proto.collector.metrics.v1.MetricsService/Export"), config);
    }
  }
  exports.OTLPMetricExporter = OTLPMetricExporter;
});

// node_modules/.bun/@opentelemetry+exporter-metrics-otlp-grpc@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/exporter-metrics-otlp-grpc/build/src/index.js
var require_src4 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.OTLPMetricExporter = undefined;
  var OTLPMetricExporter_1 = require_OTLPMetricExporter();
  Object.defineProperty(exports, "OTLPMetricExporter", { enumerable: true, get: function() {
    return OTLPMetricExporter_1.OTLPMetricExporter;
  } });
});
export default require_src4();
