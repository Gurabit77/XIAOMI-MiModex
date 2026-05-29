// @bun
import {
  init_api_promise,
  init_client,
  init_error,
  init_pagination,
  init_uploads
} from "./chunk-cw8rngb2.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@anthropic-ai+sdk@0.81.0+3c5d820c62823f0b/node_modules/@anthropic-ai/sdk/index.mjs
var init_sdk = __esm(() => {
  init_client();
  init_uploads();
  init_api_promise();
  init_client();
  init_pagination();
  init_error();
});

export { init_sdk };
