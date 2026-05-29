// @bun
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/autoModeDenials.ts
function recordAutoModeDenial(denial) {
  if (false)
    ;
  DENIALS = [denial, ...DENIALS.slice(0, MAX_DENIALS - 1)];
}
function getAutoModeDenials() {
  return DENIALS;
}
var DENIALS, MAX_DENIALS = 20;
var init_autoModeDenials = __esm(() => {
  DENIALS = [];
});

export { recordAutoModeDenial, getAutoModeDenials, init_autoModeDenials };
