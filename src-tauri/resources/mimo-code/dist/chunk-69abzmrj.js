// @bun
import {
  require_execAsync
} from "./chunk-zt5zwt6c.js";
import {
  require_src
} from "./chunk-p2816w9z.js";
import {
  __commonJS
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@opentelemetry+resources@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/resources/build/src/detectors/platform/node/machine-id/getMachineId-darwin.js
var require_getMachineId_darwin = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getMachineId = undefined;
  var execAsync_1 = require_execAsync();
  var api_1 = require_src();
  async function getMachineId() {
    try {
      const result = await (0, execAsync_1.execAsync)('ioreg -rd1 -c "IOPlatformExpertDevice"');
      const idLine = result.stdout.split(`
`).find((line) => line.includes("IOPlatformUUID"));
      if (!idLine) {
        return;
      }
      const parts = idLine.split('" = "');
      if (parts.length === 2) {
        return parts[1].slice(0, -1);
      }
    } catch (e) {
      api_1.diag.debug(`error reading machine id: ${e}`);
    }
    return;
  }
  exports.getMachineId = getMachineId;
});
export default require_getMachineId_darwin();
