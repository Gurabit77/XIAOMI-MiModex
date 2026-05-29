// @bun
import {
  _baseEach_default,
  init__baseEach
} from "./chunk-ktw919wt.js";
import {
  _baseIteratee_default,
  init__baseIteratee,
  init_isArray,
  isArray_default
} from "./chunk-j5xzpm59.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/lodash-es@4.18.1/node_modules/lodash-es/_arrayAggregator.js
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}
var _arrayAggregator_default;
var init__arrayAggregator = __esm(() => {
  _arrayAggregator_default = arrayAggregator;
});

// node_modules/.bun/lodash-es@4.18.1/node_modules/lodash-es/_baseAggregator.js
function baseAggregator(collection, setter, iteratee, accumulator) {
  _baseEach_default(collection, function(value, key, collection2) {
    setter(accumulator, value, iteratee(value), collection2);
  });
  return accumulator;
}
var _baseAggregator_default;
var init__baseAggregator = __esm(() => {
  init__baseEach();
  _baseAggregator_default = baseAggregator;
});

// node_modules/.bun/lodash-es@4.18.1/node_modules/lodash-es/_createAggregator.js
function createAggregator(setter, initializer) {
  return function(collection, iteratee) {
    var func = isArray_default(collection) ? _arrayAggregator_default : _baseAggregator_default, accumulator = initializer ? initializer() : {};
    return func(collection, setter, _baseIteratee_default(iteratee, 2), accumulator);
  };
}
var _createAggregator_default;
var init__createAggregator = __esm(() => {
  init__arrayAggregator();
  init__baseAggregator();
  init__baseIteratee();
  init_isArray();
  _createAggregator_default = createAggregator;
});

// node_modules/.bun/lodash-es@4.18.1/node_modules/lodash-es/partition.js
var partition, partition_default;
var init_partition = __esm(() => {
  init__createAggregator();
  partition = _createAggregator_default(function(result, value, key) {
    result[key ? 0 : 1].push(value);
  }, function() {
    return [[], []];
  });
  partition_default = partition;
});

export { partition_default, init_partition };
