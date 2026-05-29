// @bun
import {
  require_index_node_http,
  require_src,
  require_src1 as require_src2
} from "./chunk-adnxyg7j.js";
import"./chunk-djs11qd6.js";
import"./chunk-nrv96v1h.js";
import"./chunk-gdqk4ssq.js";
import"./chunk-p2816w9z.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@opentelemetry+exporter-logs-otlp-proto@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/exporter-logs-otlp-proto/build/esm/platform/node/OTLPLogExporter.js
var import_otlp_exporter_base, import_otlp_transformer, import_node_http, OTLPLogExporter;
var init_OTLPLogExporter = __esm(() => {
  import_otlp_exporter_base = __toESM(require_src(), 1);
  import_otlp_transformer = __toESM(require_src2(), 1);
  import_node_http = __toESM(require_index_node_http(), 1);
  OTLPLogExporter = class OTLPLogExporter extends import_otlp_exporter_base.OTLPExporterBase {
    constructor(config = {}) {
      super(import_node_http.createOtlpHttpExportDelegate(import_node_http.convertLegacyHttpOptions(config, "LOGS", "v1/logs", {
        "Content-Type": "application/x-protobuf"
      }), import_otlp_transformer.ProtobufLogsSerializer));
    }
  };
});

// node_modules/.bun/@opentelemetry+exporter-logs-otlp-proto@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/exporter-logs-otlp-proto/build/esm/platform/node/index.js
var init_node = __esm(() => {
  init_OTLPLogExporter();
});

// node_modules/.bun/@opentelemetry+exporter-logs-otlp-proto@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/exporter-logs-otlp-proto/build/esm/platform/index.js
var init_platform = __esm(() => {
  init_node();
});

// node_modules/.bun/@opentelemetry+exporter-logs-otlp-proto@0.215.0+e40b0dfdd726a224/node_modules/@opentelemetry/exporter-logs-otlp-proto/build/esm/index.js
var init_esm = __esm(() => {
  init_platform();
});
init_esm();

export {
  OTLPLogExporter
};
