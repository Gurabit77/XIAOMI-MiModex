// @bun
import {
  require_src as require_src3
} from "./chunk-tr031mpt.js";
import {
  require_src,
  require_src1 as require_src2
} from "./chunk-adnxyg7j.js";
import"./chunk-djs11qd6.js";
import"./chunk-nrv96v1h.js";
import"./chunk-gdqk4ssq.js";
import"./chunk-p2816w9z.js";
import {
  __commonJS
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@opentelemetry+exporter-trace-otlp-grpc@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/exporter-trace-otlp-grpc/build/src/OTLPTraceExporter.js
var require_OTLPTraceExporter = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.OTLPTraceExporter = undefined;
  var otlp_grpc_exporter_base_1 = require_src3();
  var otlp_transformer_1 = require_src2();
  var otlp_exporter_base_1 = require_src();

  class OTLPTraceExporter extends otlp_exporter_base_1.OTLPExporterBase {
    constructor(config = {}) {
      super((0, otlp_grpc_exporter_base_1.createOtlpGrpcExportDelegate)((0, otlp_grpc_exporter_base_1.convertLegacyOtlpGrpcOptions)(config, "TRACES"), otlp_transformer_1.ProtobufTraceSerializer, "TraceExportService", "/opentelemetry.proto.collector.trace.v1.TraceService/Export"));
    }
  }
  exports.OTLPTraceExporter = OTLPTraceExporter;
});

// node_modules/.bun/@opentelemetry+exporter-trace-otlp-grpc@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/exporter-trace-otlp-grpc/build/src/index.js
var require_src4 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.OTLPTraceExporter = undefined;
  var OTLPTraceExporter_1 = require_OTLPTraceExporter();
  Object.defineProperty(exports, "OTLPTraceExporter", { enumerable: true, get: function() {
    return OTLPTraceExporter_1.OTLPTraceExporter;
  } });
});
export default require_src4();
