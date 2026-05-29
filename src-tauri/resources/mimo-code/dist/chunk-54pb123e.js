// @bun
import {
  require_src
} from "./chunk-p2816w9z.js";
import {
  __commonJS
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@opentelemetry+resources@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/resources/build/src/detectors/platform/node/machine-id/getMachineId-unsupported.js
var require_getMachineId_unsupported = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getMachineId = undefined;
  var api_1 = require_src();
  async function getMachineId() {
    api_1.diag.debug("could not read machine-id: unsupported platform");
    return;
  }
  exports.getMachineId = getMachineId;
});
export default require_getMachineId_unsupported();
