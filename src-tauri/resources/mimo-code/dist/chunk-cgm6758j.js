// @bun
import {
  __esm
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/lodash-es@4.18.1/node_modules/lodash-es/isObject.js
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_default;
var init_isObject = __esm(() => {
  isObject_default = isObject;
});

// node_modules/.bun/lodash-es@4.18.1/node_modules/lodash-es/_freeGlobal.js
var freeGlobal, _freeGlobal_default;
var init__freeGlobal = __esm(() => {
  freeGlobal = typeof global == "object" && global && global.Object === Object && global;
  _freeGlobal_default = freeGlobal;
});

// node_modules/.bun/lodash-es@4.18.1/node_modules/lodash-es/_root.js
var freeSelf, root, _root_default;
var init__root = __esm(() => {
  init__freeGlobal();
  freeSelf = typeof self == "object" && self && self.Object === Object && self;
  root = _freeGlobal_default || freeSelf || Function("return this")();
  _root_default = root;
});

// node_modules/.bun/lodash-es@4.18.1/node_modules/lodash-es/_Symbol.js
var Symbol, _Symbol_default;
var init__Symbol = __esm(() => {
  init__root();
  Symbol = _root_default.Symbol;
  _Symbol_default = Symbol;
});

// node_modules/.bun/lodash-es@4.18.1/node_modules/lodash-es/_getRawTag.js
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
var objectProto, hasOwnProperty, nativeObjectToString, symToStringTag, _getRawTag_default;
var init__getRawTag = __esm(() => {
  init__Symbol();
  objectProto = Object.prototype;
  hasOwnProperty = objectProto.hasOwnProperty;
  nativeObjectToString = objectProto.toString;
  symToStringTag = _Symbol_default ? _Symbol_default.toStringTag : undefined;
  _getRawTag_default = getRawTag;
});

// node_modules/.bun/lodash-es@4.18.1/node_modules/lodash-es/_objectToString.js
function objectToString(value) {
  return nativeObjectToString2.call(value);
}
var objectProto2, nativeObjectToString2, _objectToString_default;
var init__objectToString = __esm(() => {
  objectProto2 = Object.prototype;
  nativeObjectToString2 = objectProto2.toString;
  _objectToString_default = objectToString;
});

// node_modules/.bun/lodash-es@4.18.1/node_modules/lodash-es/_baseGetTag.js
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return symToStringTag2 && symToStringTag2 in Object(value) ? _getRawTag_default(value) : _objectToString_default(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]", symToStringTag2, _baseGetTag_default;
var init__baseGetTag = __esm(() => {
  init__Symbol();
  init__getRawTag();
  init__objectToString();
  symToStringTag2 = _Symbol_default ? _Symbol_default.toStringTag : undefined;
  _baseGetTag_default = baseGetTag;
});

export { _freeGlobal_default, init__freeGlobal, _root_default, init__root, _Symbol_default, init__Symbol, _baseGetTag_default, init__baseGetTag, isObject_default, init_isObject };
