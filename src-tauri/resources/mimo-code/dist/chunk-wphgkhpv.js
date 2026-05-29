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

// node_modules/.bun/@opentelemetry+exporter-logs-otlp-grpc@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/exporter-logs-otlp-grpc/build/src/OTLPLogExporter.js
var require_OTLPLogExporter = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.OTLPLogExporter = undefined;
  var otlp_grpc_exporter_base_1 = require_src3();
  var otlp_transformer_1 = require_src2();
  var otlp_exporter_base_1 = require_src();

  class OTLPLogExporter extends otlp_exporter_base_1.OTLPExporterBase {
    constructor(config = {}) {
      super((0, otlp_grpc_exporter_base_1.createOtlpGrpcExportDelegate)((0, otlp_grpc_exporter_base_1.convertLegacyOtlpGrpcOptions)(config, "LOGS"), otlp_transformer_1.ProtobufLogsSerializer, "LogsExportService", "/opentelemetry.proto.collector.logs.v1.LogsService/Export"));
    }
  }
  exports.OTLPLogExporter = OTLPLogExporter;
});

// node_modules/.bun/@opentelemetry+exporter-logs-otlp-grpc@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/exporter-logs-otlp-grpc/build/src/index.js
var require_src4 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.OTLPLogExporter = undefined;
  var OTLPLogExporter_1 = require_OTLPLogExporter();
  Object.defineProperty(exports, "OTLPLogExporter", { enumerable: true, get: function() {
    return OTLPLogExporter_1.OTLPLogExporter;
  } });
});
export default require_src4();
