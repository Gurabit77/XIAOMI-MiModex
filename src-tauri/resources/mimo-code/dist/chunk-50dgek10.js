// @bun
import {
  _baseGetTag_default,
  init__baseGetTag
} from "./chunk-cgm6758j.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/lodash-es@4.18.1/node_modules/lodash-es/isObjectLike.js
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_default;
var init_isObjectLike = __esm(() => {
  isObjectLike_default = isObjectLike;
});

// node_modules/.bun/lodash-es@4.18.1/node_modules/lodash-es/isSymbol.js
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike_default(value) && _baseGetTag_default(value) == symbolTag;
}
var symbolTag = "[object Symbol]", isSymbol_default;
var init_isSymbol = __esm(() => {
  init__baseGetTag();
  init_isObjectLike();
  isSymbol_default = isSymbol;
});

export { isObjectLike_default, init_isObjectLike, isSymbol_default, init_isSymbol };
