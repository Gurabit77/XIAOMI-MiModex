// @bun
import {
  __commonJS,
  __require
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@opentelemetry+resources@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/resources/build/src/detectors/platform/node/machine-id/execAsync.js
var require_execAsync = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.execAsync = undefined;
  var child_process = __require("child_process");
  var util = __require("util");
  exports.execAsync = util.promisify(child_process.exec);
});

export { require_execAsync };
