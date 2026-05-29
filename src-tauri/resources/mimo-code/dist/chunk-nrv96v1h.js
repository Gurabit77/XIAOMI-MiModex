// @bun
import {
  require_src1 as require_src2,
  require_src2 as require_src3
} from "./chunk-gdqk4ssq.js";
import {
  require_src
} from "./chunk-p2816w9z.js";
import {
  __commonJS
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/export/AggregationTemporality.js
var require_AggregationTemporality = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.AggregationTemporality = undefined;
  var AggregationTemporality;
  (function(AggregationTemporality2) {
    AggregationTemporality2[AggregationTemporality2["DELTA"] = 0] = "DELTA";
    AggregationTemporality2[AggregationTemporality2["CUMULATIVE"] = 1] = "CUMULATIVE";
  })(AggregationTemporality = exports.AggregationTemporality || (exports.AggregationTemporality = {}));
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/export/MetricData.js
var require_MetricData = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DataPointType = exports.InstrumentType = undefined;
  var InstrumentType;
  (function(InstrumentType2) {
    InstrumentType2["COUNTER"] = "COUNTER";
    InstrumentType2["GAUGE"] = "GAUGE";
    InstrumentType2["HISTOGRAM"] = "HISTOGRAM";
    InstrumentType2["UP_DOWN_COUNTER"] = "UP_DOWN_COUNTER";
    InstrumentType2["OBSERVABLE_COUNTER"] = "OBSERVABLE_COUNTER";
    InstrumentType2["OBSERVABLE_GAUGE"] = "OBSERVABLE_GAUGE";
    InstrumentType2["OBSERVABLE_UP_DOWN_COUNTER"] = "OBSERVABLE_UP_DOWN_COUNTER";
  })(InstrumentType = exports.InstrumentType || (exports.InstrumentType = {}));
  var DataPointType;
  (function(DataPointType2) {
    DataPointType2[DataPointType2["HISTOGRAM"] = 0] = "HISTOGRAM";
    DataPointType2[DataPointType2["EXPONENTIAL_HISTOGRAM"] = 1] = "EXPONENTIAL_HISTOGRAM";
    DataPointType2[DataPointType2["GAUGE"] = 2] = "GAUGE";
    DataPointType2[DataPointType2["SUM"] = 3] = "SUM";
  })(DataPointType = exports.DataPointType || (exports.DataPointType = {}));
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/utils.js
var require_utils = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.equalsCaseInsensitive = exports.binarySearchUB = exports.setEquals = exports.callWithTimeout = exports.TimeoutError = exports.instrumentationScopeId = exports.hashAttributes = undefined;
  function hashAttributes(attributes) {
    let keys = Object.keys(attributes);
    if (keys.length === 0)
      return "";
    keys = keys.sort();
    return JSON.stringify(keys.map((key) => [key, attributes[key]]));
  }
  exports.hashAttributes = hashAttributes;
  function instrumentationScopeId(instrumentationScope) {
    return `${instrumentationScope.name}:${instrumentationScope.version ?? ""}:${instrumentationScope.schemaUrl ?? ""}`;
  }
  exports.instrumentationScopeId = instrumentationScopeId;

  class TimeoutError extends Error {
    constructor(message) {
      super(message);
      Object.setPrototypeOf(this, TimeoutError.prototype);
    }
  }
  exports.TimeoutError = TimeoutError;
  function callWithTimeout(promise, timeout) {
    let timeoutHandle;
    const timeoutPromise = new Promise(function timeoutFunction(_resolve, reject) {
      timeoutHandle = setTimeout(function timeoutHandler() {
        reject(new TimeoutError("Operation timed out."));
      }, timeout);
    });
    return Promise.race([promise, timeoutPromise]).then((result) => {
      clearTimeout(timeoutHandle);
      return result;
    }, (reason) => {
      clearTimeout(timeoutHandle);
      throw reason;
    });
  }
  exports.callWithTimeout = callWithTimeout;
  function setEquals(lhs, rhs) {
    if (lhs.size !== rhs.size) {
      return false;
    }
    for (const item of lhs) {
      if (!rhs.has(item)) {
        return false;
      }
    }
    return true;
  }
  exports.setEquals = setEquals;
  function binarySearchUB(arr, value) {
    let lo = 0;
    let hi = arr.length - 1;
    let ret = arr.length;
    while (hi >= lo) {
      const mid = lo + Math.trunc((hi - lo) / 2);
      if (arr[mid] < value) {
        lo = mid + 1;
      } else {
        ret = mid;
        hi = mid - 1;
      }
    }
    return ret;
  }
  exports.binarySearchUB = binarySearchUB;
  function equalsCaseInsensitive(lhs, rhs) {
    return lhs.toLowerCase() === rhs.toLowerCase();
  }
  exports.equalsCaseInsensitive = equalsCaseInsensitive;
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/aggregator/types.js
var require_types = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.AggregatorKind = undefined;
  var AggregatorKind;
  (function(AggregatorKind2) {
    AggregatorKind2[AggregatorKind2["DROP"] = 0] = "DROP";
    AggregatorKind2[AggregatorKind2["SUM"] = 1] = "SUM";
    AggregatorKind2[AggregatorKind2["LAST_VALUE"] = 2] = "LAST_VALUE";
    AggregatorKind2[AggregatorKind2["HISTOGRAM"] = 3] = "HISTOGRAM";
    AggregatorKind2[AggregatorKind2["EXPONENTIAL_HISTOGRAM"] = 4] = "EXPONENTIAL_HISTOGRAM";
  })(AggregatorKind = exports.AggregatorKind || (exports.AggregatorKind = {}));
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/aggregator/Drop.js
var require_Drop = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DropAggregator = undefined;
  var types_1 = require_types();

  class DropAggregator {
    kind = types_1.AggregatorKind.DROP;
    createAccumulation() {
      return;
    }
    merge(_previous, _delta) {
      return;
    }
    diff(_previous, _current) {
      return;
    }
    toMetricData(_descriptor, _aggregationTemporality, _accumulationByAttributes, _endTime) {
      return;
    }
  }
  exports.DropAggregator = DropAggregator;
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/aggregator/Histogram.js
var require_Histogram = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.HistogramAggregator = exports.HistogramAccumulation = undefined;
  var types_1 = require_types();
  var MetricData_1 = require_MetricData();
  var utils_1 = require_utils();
  function createNewEmptyCheckpoint(boundaries) {
    const counts = boundaries.map(() => 0);
    counts.push(0);
    return {
      buckets: {
        boundaries,
        counts
      },
      sum: 0,
      count: 0,
      hasMinMax: false,
      min: Infinity,
      max: -Infinity
    };
  }

  class HistogramAccumulation {
    startTime;
    _boundaries;
    _recordMinMax;
    _current;
    constructor(startTime, boundaries, recordMinMax = true, current = createNewEmptyCheckpoint(boundaries)) {
      this.startTime = startTime;
      this._boundaries = boundaries;
      this._recordMinMax = recordMinMax;
      this._current = current;
    }
    record(value) {
      if (Number.isNaN(value)) {
        return;
      }
      this._current.count += 1;
      this._current.sum += value;
      if (this._recordMinMax) {
        this._current.min = Math.min(value, this._current.min);
        this._current.max = Math.max(value, this._current.max);
        this._current.hasMinMax = true;
      }
      const idx = (0, utils_1.binarySearchUB)(this._boundaries, value);
      this._current.buckets.counts[idx] += 1;
    }
    setStartTime(startTime) {
      this.startTime = startTime;
    }
    toPointValue() {
      return this._current;
    }
  }
  exports.HistogramAccumulation = HistogramAccumulation;

  class HistogramAggregator {
    kind = types_1.AggregatorKind.HISTOGRAM;
    _boundaries;
    _recordMinMax;
    constructor(boundaries, recordMinMax) {
      this._boundaries = boundaries;
      this._recordMinMax = recordMinMax;
    }
    createAccumulation(startTime) {
      return new HistogramAccumulation(startTime, this._boundaries, this._recordMinMax);
    }
    merge(previous, delta) {
      const previousValue = previous.toPointValue();
      const deltaValue = delta.toPointValue();
      const previousCounts = previousValue.buckets.counts;
      const deltaCounts = deltaValue.buckets.counts;
      const mergedCounts = new Array(previousCounts.length);
      for (let idx = 0;idx < previousCounts.length; idx++) {
        mergedCounts[idx] = previousCounts[idx] + deltaCounts[idx];
      }
      let min = Infinity;
      let max = -Infinity;
      if (this._recordMinMax) {
        if (previousValue.hasMinMax && deltaValue.hasMinMax) {
          min = Math.min(previousValue.min, deltaValue.min);
          max = Math.max(previousValue.max, deltaValue.max);
        } else if (previousValue.hasMinMax) {
          min = previousValue.min;
          max = previousValue.max;
        } else if (deltaValue.hasMinMax) {
          min = deltaValue.min;
          max = deltaValue.max;
        }
      }
      return new HistogramAccumulation(previous.startTime, previousValue.buckets.boundaries, this._recordMinMax, {
        buckets: {
          boundaries: previousValue.buckets.boundaries,
          counts: mergedCounts
        },
        count: previousValue.count + deltaValue.count,
        sum: previousValue.sum + deltaValue.sum,
        hasMinMax: this._recordMinMax && (previousValue.hasMinMax || deltaValue.hasMinMax),
        min,
        max
      });
    }
    diff(previous, current) {
      const previousValue = previous.toPointValue();
      const currentValue = current.toPointValue();
      const previousCounts = previousValue.buckets.counts;
      const currentCounts = currentValue.buckets.counts;
      const diffedCounts = new Array(previousCounts.length);
      for (let idx = 0;idx < previousCounts.length; idx++) {
        diffedCounts[idx] = currentCounts[idx] - previousCounts[idx];
      }
      return new HistogramAccumulation(current.startTime, previousValue.buckets.boundaries, this._recordMinMax, {
        buckets: {
          boundaries: previousValue.buckets.boundaries,
          counts: diffedCounts
        },
        count: currentValue.count - previousValue.count,
        sum: currentValue.sum - previousValue.sum,
        hasMinMax: false,
        min: Infinity,
        max: -Infinity
      });
    }
    toMetricData(descriptor, aggregationTemporality, accumulationByAttributes, endTime) {
      return {
        descriptor,
        aggregationTemporality,
        dataPointType: MetricData_1.DataPointType.HISTOGRAM,
        dataPoints: accumulationByAttributes.map(([attributes, accumulation]) => {
          const pointValue = accumulation.toPointValue();
          const allowsNegativeValues = descriptor.type === MetricData_1.InstrumentType.GAUGE || descriptor.type === MetricData_1.InstrumentType.UP_DOWN_COUNTER || descriptor.type === MetricData_1.InstrumentType.OBSERVABLE_GAUGE || descriptor.type === MetricData_1.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER;
          return {
            attributes,
            startTime: accumulation.startTime,
            endTime,
            value: {
              min: pointValue.hasMinMax ? pointValue.min : undefined,
              max: pointValue.hasMinMax ? pointValue.max : undefined,
              sum: !allowsNegativeValues ? pointValue.sum : undefined,
              buckets: pointValue.buckets,
              count: pointValue.count
            }
          };
        })
      };
    }
  }
  exports.HistogramAggregator = HistogramAggregator;
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/aggregator/exponential-histogram/Buckets.js
var require_Buckets = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Buckets = undefined;

  class Buckets {
    backing;
    indexBase;
    indexStart;
    indexEnd;
    constructor(backing = new BucketsBacking, indexBase = 0, indexStart = 0, indexEnd = 0) {
      this.backing = backing;
      this.indexBase = indexBase;
      this.indexStart = indexStart;
      this.indexEnd = indexEnd;
    }
    get offset() {
      return this.indexStart;
    }
    get length() {
      if (this.backing.length === 0) {
        return 0;
      }
      if (this.indexEnd === this.indexStart && this.at(0) === 0) {
        return 0;
      }
      return this.indexEnd - this.indexStart + 1;
    }
    counts() {
      return Array.from({ length: this.length }, (_, i) => this.at(i));
    }
    at(position) {
      const bias = this.indexBase - this.indexStart;
      if (position < bias) {
        position += this.backing.length;
      }
      position -= bias;
      return this.backing.countAt(position);
    }
    incrementBucket(bucketIndex, increment) {
      this.backing.increment(bucketIndex, increment);
    }
    decrementBucket(bucketIndex, decrement) {
      this.backing.decrement(bucketIndex, decrement);
    }
    trim() {
      for (let i = 0;i < this.length; i++) {
        if (this.at(i) !== 0) {
          this.indexStart += i;
          break;
        } else if (i === this.length - 1) {
          this.indexStart = this.indexEnd = this.indexBase = 0;
          return;
        }
      }
      for (let i = this.length - 1;i >= 0; i--) {
        if (this.at(i) !== 0) {
          this.indexEnd -= this.length - i - 1;
          break;
        }
      }
      this._rotate();
    }
    downscale(by) {
      this._rotate();
      const size = 1 + this.indexEnd - this.indexStart;
      const each = 1 << by;
      let inpos = 0;
      let outpos = 0;
      for (let pos = this.indexStart;pos <= this.indexEnd; ) {
        let mod = pos % each;
        if (mod < 0) {
          mod += each;
        }
        for (let i = mod;i < each && inpos < size; i++) {
          this._relocateBucket(outpos, inpos);
          inpos++;
          pos++;
        }
        outpos++;
      }
      this.indexStart >>= by;
      this.indexEnd >>= by;
      this.indexBase = this.indexStart;
    }
    clone() {
      return new Buckets(this.backing.clone(), this.indexBase, this.indexStart, this.indexEnd);
    }
    _rotate() {
      const bias = this.indexBase - this.indexStart;
      if (bias === 0) {
        return;
      } else if (bias > 0) {
        this.backing.reverse(0, this.backing.length);
        this.backing.reverse(0, bias);
        this.backing.reverse(bias, this.backing.length);
      } else {
        this.backing.reverse(0, this.backing.length);
        this.backing.reverse(0, this.backing.length + bias);
      }
      this.indexBase = this.indexStart;
    }
    _relocateBucket(dest, src) {
      if (dest === src) {
        return;
      }
      this.incrementBucket(dest, this.backing.emptyBucket(src));
    }
  }
  exports.Buckets = Buckets;

  class BucketsBacking {
    _counts;
    constructor(counts = [0]) {
      this._counts = counts;
    }
    get length() {
      return this._counts.length;
    }
    countAt(pos) {
      return this._counts[pos];
    }
    growTo(newSize, oldPositiveLimit, newPositiveLimit) {
      const tmp = new Array(newSize).fill(0);
      tmp.splice(newPositiveLimit, this._counts.length - oldPositiveLimit, ...this._counts.slice(oldPositiveLimit));
      tmp.splice(0, oldPositiveLimit, ...this._counts.slice(0, oldPositiveLimit));
      this._counts = tmp;
    }
    reverse(from, limit) {
      const num = Math.floor((from + limit) / 2) - from;
      for (let i = 0;i < num; i++) {
        const tmp = this._counts[from + i];
        this._counts[from + i] = this._counts[limit - i - 1];
        this._counts[limit - i - 1] = tmp;
      }
    }
    emptyBucket(src) {
      const tmp = this._counts[src];
      this._counts[src] = 0;
      return tmp;
    }
    increment(bucketIndex, increment) {
      this._counts[bucketIndex] += increment;
    }
    decrement(bucketIndex, decrement) {
      if (this._counts[bucketIndex] >= decrement) {
        this._counts[bucketIndex] -= decrement;
      } else {
        this._counts[bucketIndex] = 0;
      }
    }
    clone() {
      return new BucketsBacking([...this._counts]);
    }
  }
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/aggregator/exponential-histogram/mapping/ieee754.js
var require_ieee754 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getSignificand = exports.getNormalBase2 = exports.MIN_VALUE = exports.MAX_NORMAL_EXPONENT = exports.MIN_NORMAL_EXPONENT = exports.SIGNIFICAND_WIDTH = undefined;
  exports.SIGNIFICAND_WIDTH = 52;
  var EXPONENT_MASK = 2146435072;
  var SIGNIFICAND_MASK = 1048575;
  var EXPONENT_BIAS = 1023;
  exports.MIN_NORMAL_EXPONENT = -EXPONENT_BIAS + 1;
  exports.MAX_NORMAL_EXPONENT = EXPONENT_BIAS;
  exports.MIN_VALUE = Math.pow(2, -1022);
  function getNormalBase2(value) {
    const dv = new DataView(new ArrayBuffer(8));
    dv.setFloat64(0, value);
    const hiBits = dv.getUint32(0);
    const expBits = (hiBits & EXPONENT_MASK) >> 20;
    return expBits - EXPONENT_BIAS;
  }
  exports.getNormalBase2 = getNormalBase2;
  function getSignificand(value) {
    const dv = new DataView(new ArrayBuffer(8));
    dv.setFloat64(0, value);
    const hiBits = dv.getUint32(0);
    const loBits = dv.getUint32(4);
    const significandHiBits = (hiBits & SIGNIFICAND_MASK) * Math.pow(2, 32);
    return significandHiBits + loBits;
  }
  exports.getSignificand = getSignificand;
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/aggregator/exponential-histogram/util.js
var require_util = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.nextGreaterSquare = exports.ldexp = undefined;
  function ldexp(frac, exp) {
    if (frac === 0 || frac === Number.POSITIVE_INFINITY || frac === Number.NEGATIVE_INFINITY || Number.isNaN(frac)) {
      return frac;
    }
    return frac * Math.pow(2, exp);
  }
  exports.ldexp = ldexp;
  function nextGreaterSquare(v) {
    v--;
    v |= v >> 1;
    v |= v >> 2;
    v |= v >> 4;
    v |= v >> 8;
    v |= v >> 16;
    v++;
    return v;
  }
  exports.nextGreaterSquare = nextGreaterSquare;
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/aggregator/exponential-histogram/mapping/types.js
var require_types2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MappingError = undefined;

  class MappingError extends Error {
  }
  exports.MappingError = MappingError;
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/aggregator/exponential-histogram/mapping/ExponentMapping.js
var require_ExponentMapping = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ExponentMapping = undefined;
  var ieee754 = require_ieee754();
  var util = require_util();
  var types_1 = require_types2();

  class ExponentMapping {
    _shift;
    constructor(scale) {
      this._shift = -scale;
    }
    mapToIndex(value) {
      if (value < ieee754.MIN_VALUE) {
        return this._minNormalLowerBoundaryIndex();
      }
      const exp = ieee754.getNormalBase2(value);
      const correction = this._rightShift(ieee754.getSignificand(value) - 1, ieee754.SIGNIFICAND_WIDTH);
      return exp + correction >> this._shift;
    }
    lowerBoundary(index) {
      const minIndex = this._minNormalLowerBoundaryIndex();
      if (index < minIndex) {
        throw new types_1.MappingError(`underflow: ${index} is < minimum lower boundary: ${minIndex}`);
      }
      const maxIndex = this._maxNormalLowerBoundaryIndex();
      if (index > maxIndex) {
        throw new types_1.MappingError(`overflow: ${index} is > maximum lower boundary: ${maxIndex}`);
      }
      return util.ldexp(1, index << this._shift);
    }
    get scale() {
      if (this._shift === 0) {
        return 0;
      }
      return -this._shift;
    }
    _minNormalLowerBoundaryIndex() {
      let index = ieee754.MIN_NORMAL_EXPONENT >> this._shift;
      if (this._shift < 2) {
        index--;
      }
      return index;
    }
    _maxNormalLowerBoundaryIndex() {
      return ieee754.MAX_NORMAL_EXPONENT >> this._shift;
    }
    _rightShift(value, shift) {
      return Math.floor(value * Math.pow(2, -shift));
    }
  }
  exports.ExponentMapping = ExponentMapping;
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/aggregator/exponential-histogram/mapping/LogarithmMapping.js
var require_LogarithmMapping = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.LogarithmMapping = undefined;
  var ieee754 = require_ieee754();
  var util = require_util();
  var types_1 = require_types2();

  class LogarithmMapping {
    _scale;
    _scaleFactor;
    _inverseFactor;
    constructor(scale) {
      this._scale = scale;
      this._scaleFactor = util.ldexp(Math.LOG2E, scale);
      this._inverseFactor = util.ldexp(Math.LN2, -scale);
    }
    mapToIndex(value) {
      if (value <= ieee754.MIN_VALUE) {
        return this._minNormalLowerBoundaryIndex() - 1;
      }
      if (ieee754.getSignificand(value) === 0) {
        const exp = ieee754.getNormalBase2(value);
        return (exp << this._scale) - 1;
      }
      const index = Math.floor(Math.log(value) * this._scaleFactor);
      const maxIndex = this._maxNormalLowerBoundaryIndex();
      if (index >= maxIndex) {
        return maxIndex;
      }
      return index;
    }
    lowerBoundary(index) {
      const maxIndex = this._maxNormalLowerBoundaryIndex();
      if (index >= maxIndex) {
        if (index === maxIndex) {
          return 2 * Math.exp((index - (1 << this._scale)) / this._scaleFactor);
        }
        throw new types_1.MappingError(`overflow: ${index} is > maximum lower boundary: ${maxIndex}`);
      }
      const minIndex = this._minNormalLowerBoundaryIndex();
      if (index <= minIndex) {
        if (index === minIndex) {
          return ieee754.MIN_VALUE;
        } else if (index === minIndex - 1) {
          return Math.exp((index + (1 << this._scale)) / this._scaleFactor) / 2;
        }
        throw new types_1.MappingError(`overflow: ${index} is < minimum lower boundary: ${minIndex}`);
      }
      return Math.exp(index * this._inverseFactor);
    }
    get scale() {
      return this._scale;
    }
    _minNormalLowerBoundaryIndex() {
      return ieee754.MIN_NORMAL_EXPONENT << this._scale;
    }
    _maxNormalLowerBoundaryIndex() {
      return (ieee754.MAX_NORMAL_EXPONENT + 1 << this._scale) - 1;
    }
  }
  exports.LogarithmMapping = LogarithmMapping;
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/aggregator/exponential-histogram/mapping/getMapping.js
var require_getMapping = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getMapping = undefined;
  var ExponentMapping_1 = require_ExponentMapping();
  var LogarithmMapping_1 = require_LogarithmMapping();
  var types_1 = require_types2();
  var MIN_SCALE = -10;
  var MAX_SCALE = 20;
  var PREBUILT_MAPPINGS = Array.from({ length: 31 }, (_, i) => {
    if (i > 10) {
      return new LogarithmMapping_1.LogarithmMapping(i - 10);
    }
    return new ExponentMapping_1.ExponentMapping(i - 10);
  });
  function getMapping(scale) {
    if (scale > MAX_SCALE || scale < MIN_SCALE) {
      throw new types_1.MappingError(`expected scale >= ${MIN_SCALE} && <= ${MAX_SCALE}, got: ${scale}`);
    }
    return PREBUILT_MAPPINGS[scale + 10];
  }
  exports.getMapping = getMapping;
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/aggregator/ExponentialHistogram.js
var require_ExponentialHistogram = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ExponentialHistogramAggregator = exports.ExponentialHistogramAccumulation = undefined;
  var types_1 = require_types();
  var MetricData_1 = require_MetricData();
  var api_1 = require_src();
  var Buckets_1 = require_Buckets();
  var getMapping_1 = require_getMapping();
  var util_1 = require_util();

  class HighLow {
    static combine(h1, h2) {
      return new HighLow(Math.min(h1.low, h2.low), Math.max(h1.high, h2.high));
    }
    low;
    high;
    constructor(low, high) {
      this.low = low;
      this.high = high;
    }
  }
  var MAX_SCALE = 20;
  var DEFAULT_MAX_SIZE = 160;
  var MIN_MAX_SIZE = 2;

  class ExponentialHistogramAccumulation {
    startTime;
    _maxSize;
    _recordMinMax;
    _sum;
    _count;
    _zeroCount;
    _min;
    _max;
    _positive;
    _negative;
    _mapping;
    constructor(startTime, maxSize = DEFAULT_MAX_SIZE, recordMinMax = true, sum = 0, count = 0, zeroCount = 0, min = Number.POSITIVE_INFINITY, max = Number.NEGATIVE_INFINITY, positive = new Buckets_1.Buckets, negative = new Buckets_1.Buckets, mapping = (0, getMapping_1.getMapping)(MAX_SCALE)) {
      this.startTime = startTime;
      this._maxSize = maxSize;
      this._recordMinMax = recordMinMax;
      this._sum = sum;
      this._count = count;
      this._zeroCount = zeroCount;
      this._min = min;
      this._max = max;
      this._positive = positive;
      this._negative = negative;
      this._mapping = mapping;
      if (this._maxSize < MIN_MAX_SIZE) {
        api_1.diag.warn(`Exponential Histogram Max Size set to ${this._maxSize},                 changing to the minimum size of: ${MIN_MAX_SIZE}`);
        this._maxSize = MIN_MAX_SIZE;
      }
    }
    record(value) {
      this.updateByIncrement(value, 1);
    }
    setStartTime(startTime) {
      this.startTime = startTime;
    }
    toPointValue() {
      return {
        hasMinMax: this._recordMinMax,
        min: this.min,
        max: this.max,
        sum: this.sum,
        positive: {
          offset: this.positive.offset,
          bucketCounts: this.positive.counts()
        },
        negative: {
          offset: this.negative.offset,
          bucketCounts: this.negative.counts()
        },
        count: this.count,
        scale: this.scale,
        zeroCount: this.zeroCount
      };
    }
    get sum() {
      return this._sum;
    }
    get min() {
      return this._min;
    }
    get max() {
      return this._max;
    }
    get count() {
      return this._count;
    }
    get zeroCount() {
      return this._zeroCount;
    }
    get scale() {
      if (this._count === this._zeroCount) {
        return 0;
      }
      return this._mapping.scale;
    }
    get positive() {
      return this._positive;
    }
    get negative() {
      return this._negative;
    }
    updateByIncrement(value, increment) {
      if (Number.isNaN(value)) {
        return;
      }
      if (value > this._max) {
        this._max = value;
      }
      if (value < this._min) {
        this._min = value;
      }
      this._count += increment;
      if (value === 0) {
        this._zeroCount += increment;
        return;
      }
      this._sum += value * increment;
      if (value > 0) {
        this._updateBuckets(this._positive, value, increment);
      } else {
        this._updateBuckets(this._negative, -value, increment);
      }
    }
    merge(previous) {
      if (this._count === 0) {
        this._min = previous.min;
        this._max = previous.max;
      } else if (previous.count !== 0) {
        if (previous.min < this.min) {
          this._min = previous.min;
        }
        if (previous.max > this.max) {
          this._max = previous.max;
        }
      }
      this.startTime = previous.startTime;
      this._sum += previous.sum;
      this._count += previous.count;
      this._zeroCount += previous.zeroCount;
      const minScale = this._minScale(previous);
      this._downscale(this.scale - minScale);
      this._mergeBuckets(this.positive, previous, previous.positive, minScale);
      this._mergeBuckets(this.negative, previous, previous.negative, minScale);
    }
    diff(other) {
      this._min = Infinity;
      this._max = -Infinity;
      this._sum -= other.sum;
      this._count -= other.count;
      this._zeroCount -= other.zeroCount;
      const minScale = this._minScale(other);
      this._downscale(this.scale - minScale);
      this._diffBuckets(this.positive, other, other.positive, minScale);
      this._diffBuckets(this.negative, other, other.negative, minScale);
    }
    clone() {
      return new ExponentialHistogramAccumulation(this.startTime, this._maxSize, this._recordMinMax, this._sum, this._count, this._zeroCount, this._min, this._max, this.positive.clone(), this.negative.clone(), this._mapping);
    }
    _updateBuckets(buckets, value, increment) {
      let index = this._mapping.mapToIndex(value);
      let rescalingNeeded = false;
      let high = 0;
      let low = 0;
      if (buckets.length === 0) {
        buckets.indexStart = index;
        buckets.indexEnd = buckets.indexStart;
        buckets.indexBase = buckets.indexStart;
      } else if (index < buckets.indexStart && buckets.indexEnd - index >= this._maxSize) {
        rescalingNeeded = true;
        low = index;
        high = buckets.indexEnd;
      } else if (index > buckets.indexEnd && index - buckets.indexStart >= this._maxSize) {
        rescalingNeeded = true;
        low = buckets.indexStart;
        high = index;
      }
      if (rescalingNeeded) {
        const change = this._changeScale(high, low);
        this._downscale(change);
        index = this._mapping.mapToIndex(value);
      }
      this._incrementIndexBy(buckets, index, increment);
    }
    _incrementIndexBy(buckets, index, increment) {
      if (increment === 0) {
        return;
      }
      if (buckets.length === 0) {
        buckets.indexStart = buckets.indexEnd = buckets.indexBase = index;
      }
      if (index < buckets.indexStart) {
        const span = buckets.indexEnd - index;
        if (span >= buckets.backing.length) {
          this._grow(buckets, span + 1);
        }
        buckets.indexStart = index;
      } else if (index > buckets.indexEnd) {
        const span = index - buckets.indexStart;
        if (span >= buckets.backing.length) {
          this._grow(buckets, span + 1);
        }
        buckets.indexEnd = index;
      }
      let bucketIndex = index - buckets.indexBase;
      if (bucketIndex < 0) {
        bucketIndex += buckets.backing.length;
      }
      buckets.incrementBucket(bucketIndex, increment);
    }
    _grow(buckets, needed) {
      const size = buckets.backing.length;
      const bias = buckets.indexBase - buckets.indexStart;
      const oldPositiveLimit = size - bias;
      let newSize = (0, util_1.nextGreaterSquare)(needed);
      if (newSize > this._maxSize) {
        newSize = this._maxSize;
      }
      const newPositiveLimit = newSize - bias;
      buckets.backing.growTo(newSize, oldPositiveLimit, newPositiveLimit);
    }
    _changeScale(high, low) {
      let change = 0;
      while (high - low >= this._maxSize) {
        high >>= 1;
        low >>= 1;
        change++;
      }
      return change;
    }
    _downscale(change) {
      if (change === 0) {
        return;
      }
      if (change < 0) {
        throw new Error(`impossible change of scale: ${this.scale}`);
      }
      const newScale = this._mapping.scale - change;
      this._positive.downscale(change);
      this._negative.downscale(change);
      this._mapping = (0, getMapping_1.getMapping)(newScale);
    }
    _minScale(other) {
      const minScale = Math.min(this.scale, other.scale);
      const highLowPos = HighLow.combine(this._highLowAtScale(this.positive, this.scale, minScale), this._highLowAtScale(other.positive, other.scale, minScale));
      const highLowNeg = HighLow.combine(this._highLowAtScale(this.negative, this.scale, minScale), this._highLowAtScale(other.negative, other.scale, minScale));
      return Math.min(minScale - this._changeScale(highLowPos.high, highLowPos.low), minScale - this._changeScale(highLowNeg.high, highLowNeg.low));
    }
    _highLowAtScale(buckets, currentScale, newScale) {
      if (buckets.length === 0) {
        return new HighLow(0, -1);
      }
      const shift = currentScale - newScale;
      return new HighLow(buckets.indexStart >> shift, buckets.indexEnd >> shift);
    }
    _mergeBuckets(ours, other, theirs, scale) {
      const theirOffset = theirs.offset;
      const theirChange = other.scale - scale;
      for (let i = 0;i < theirs.length; i++) {
        this._incrementIndexBy(ours, theirOffset + i >> theirChange, theirs.at(i));
      }
    }
    _diffBuckets(ours, other, theirs, scale) {
      const theirOffset = theirs.offset;
      const theirChange = other.scale - scale;
      for (let i = 0;i < theirs.length; i++) {
        const ourIndex = theirOffset + i >> theirChange;
        let bucketIndex = ourIndex - ours.indexBase;
        if (bucketIndex < 0) {
          bucketIndex += ours.backing.length;
        }
        ours.decrementBucket(bucketIndex, theirs.at(i));
      }
      ours.trim();
    }
  }
  exports.ExponentialHistogramAccumulation = ExponentialHistogramAccumulation;

  class ExponentialHistogramAggregator {
    kind = types_1.AggregatorKind.EXPONENTIAL_HISTOGRAM;
    _maxSize;
    _recordMinMax;
    constructor(maxSize, recordMinMax) {
      this._maxSize = maxSize;
      this._recordMinMax = recordMinMax;
    }
    createAccumulation(startTime) {
      return new ExponentialHistogramAccumulation(startTime, this._maxSize, this._recordMinMax);
    }
    merge(previous, delta) {
      const result = delta.clone();
      result.merge(previous);
      return result;
    }
    diff(previous, current) {
      const result = current.clone();
      result.diff(previous);
      return result;
    }
    toMetricData(descriptor, aggregationTemporality, accumulationByAttributes, endTime) {
      return {
        descriptor,
        aggregationTemporality,
        dataPointType: MetricData_1.DataPointType.EXPONENTIAL_HISTOGRAM,
        dataPoints: accumulationByAttributes.map(([attributes, accumulation]) => {
          const pointValue = accumulation.toPointValue();
          const allowsNegativeValues = descriptor.type === MetricData_1.InstrumentType.GAUGE || descriptor.type === MetricData_1.InstrumentType.UP_DOWN_COUNTER || descriptor.type === MetricData_1.InstrumentType.OBSERVABLE_GAUGE || descriptor.type === MetricData_1.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER;
          return {
            attributes,
            startTime: accumulation.startTime,
            endTime,
            value: {
              min: pointValue.hasMinMax ? pointValue.min : undefined,
              max: pointValue.hasMinMax ? pointValue.max : undefined,
              sum: !allowsNegativeValues ? pointValue.sum : undefined,
              positive: {
                offset: pointValue.positive.offset,
                bucketCounts: pointValue.positive.bucketCounts
              },
              negative: {
                offset: pointValue.negative.offset,
                bucketCounts: pointValue.negative.bucketCounts
              },
              count: pointValue.count,
              scale: pointValue.scale,
              zeroCount: pointValue.zeroCount
            }
          };
        })
      };
    }
  }
  exports.ExponentialHistogramAggregator = ExponentialHistogramAggregator;
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/aggregator/LastValue.js
var require_LastValue = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.LastValueAggregator = exports.LastValueAccumulation = undefined;
  var types_1 = require_types();
  var core_1 = require_src2();
  var MetricData_1 = require_MetricData();

  class LastValueAccumulation {
    startTime;
    _current;
    sampleTime;
    constructor(startTime, current = 0, sampleTime = [0, 0]) {
      this.startTime = startTime;
      this._current = current;
      this.sampleTime = sampleTime;
    }
    record(value) {
      this._current = value;
      this.sampleTime = (0, core_1.millisToHrTime)(Date.now());
    }
    setStartTime(startTime) {
      this.startTime = startTime;
    }
    toPointValue() {
      return this._current;
    }
  }
  exports.LastValueAccumulation = LastValueAccumulation;

  class LastValueAggregator {
    kind = types_1.AggregatorKind.LAST_VALUE;
    createAccumulation(startTime) {
      return new LastValueAccumulation(startTime);
    }
    merge(previous, delta) {
      const latestAccumulation = (0, core_1.hrTimeToMicroseconds)(delta.sampleTime) >= (0, core_1.hrTimeToMicroseconds)(previous.sampleTime) ? delta : previous;
      return new LastValueAccumulation(previous.startTime, latestAccumulation.toPointValue(), latestAccumulation.sampleTime);
    }
    diff(previous, current) {
      const latestAccumulation = (0, core_1.hrTimeToMicroseconds)(current.sampleTime) >= (0, core_1.hrTimeToMicroseconds)(previous.sampleTime) ? current : previous;
      return new LastValueAccumulation(current.startTime, latestAccumulation.toPointValue(), latestAccumulation.sampleTime);
    }
    toMetricData(descriptor, aggregationTemporality, accumulationByAttributes, endTime) {
      return {
        descriptor,
        aggregationTemporality,
        dataPointType: MetricData_1.DataPointType.GAUGE,
        dataPoints: accumulationByAttributes.map(([attributes, accumulation]) => {
          return {
            attributes,
            startTime: accumulation.startTime,
            endTime,
            value: accumulation.toPointValue()
          };
        })
      };
    }
  }
  exports.LastValueAggregator = LastValueAggregator;
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/aggregator/Sum.js
var require_Sum = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.SumAggregator = exports.SumAccumulation = undefined;
  var types_1 = require_types();
  var MetricData_1 = require_MetricData();

  class SumAccumulation {
    startTime;
    monotonic;
    _current;
    reset;
    constructor(startTime, monotonic, current = 0, reset = false) {
      this.startTime = startTime;
      this.monotonic = monotonic;
      this._current = current;
      this.reset = reset;
    }
    record(value) {
      if (this.monotonic && value < 0) {
        return;
      }
      this._current += value;
    }
    setStartTime(startTime) {
      this.startTime = startTime;
    }
    toPointValue() {
      return this._current;
    }
  }
  exports.SumAccumulation = SumAccumulation;

  class SumAggregator {
    kind = types_1.AggregatorKind.SUM;
    monotonic;
    constructor(monotonic) {
      this.monotonic = monotonic;
    }
    createAccumulation(startTime) {
      return new SumAccumulation(startTime, this.monotonic);
    }
    merge(previous, delta) {
      const prevPv = previous.toPointValue();
      const deltaPv = delta.toPointValue();
      if (delta.reset) {
        return new SumAccumulation(delta.startTime, this.monotonic, deltaPv, delta.reset);
      }
      return new SumAccumulation(previous.startTime, this.monotonic, prevPv + deltaPv);
    }
    diff(previous, current) {
      const prevPv = previous.toPointValue();
      const currPv = current.toPointValue();
      if (this.monotonic && prevPv > currPv) {
        return new SumAccumulation(current.startTime, this.monotonic, currPv, true);
      }
      return new SumAccumulation(current.startTime, this.monotonic, currPv - prevPv);
    }
    toMetricData(descriptor, aggregationTemporality, accumulationByAttributes, endTime) {
      return {
        descriptor,
        aggregationTemporality,
        dataPointType: MetricData_1.DataPointType.SUM,
        dataPoints: accumulationByAttributes.map(([attributes, accumulation]) => {
          return {
            attributes,
            startTime: accumulation.startTime,
            endTime,
            value: accumulation.toPointValue()
          };
        }),
        isMonotonic: this.monotonic
      };
    }
  }
  exports.SumAggregator = SumAggregator;
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/aggregator/index.js
var require_aggregator = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.SumAggregator = exports.SumAccumulation = exports.LastValueAggregator = exports.LastValueAccumulation = exports.ExponentialHistogramAggregator = exports.ExponentialHistogramAccumulation = exports.HistogramAggregator = exports.HistogramAccumulation = exports.DropAggregator = undefined;
  var Drop_1 = require_Drop();
  Object.defineProperty(exports, "DropAggregator", { enumerable: true, get: function() {
    return Drop_1.DropAggregator;
  } });
  var Histogram_1 = require_Histogram();
  Object.defineProperty(exports, "HistogramAccumulation", { enumerable: true, get: function() {
    return Histogram_1.HistogramAccumulation;
  } });
  Object.defineProperty(exports, "HistogramAggregator", { enumerable: true, get: function() {
    return Histogram_1.HistogramAggregator;
  } });
  var ExponentialHistogram_1 = require_ExponentialHistogram();
  Object.defineProperty(exports, "ExponentialHistogramAccumulation", { enumerable: true, get: function() {
    return ExponentialHistogram_1.ExponentialHistogramAccumulation;
  } });
  Object.defineProperty(exports, "ExponentialHistogramAggregator", { enumerable: true, get: function() {
    return ExponentialHistogram_1.ExponentialHistogramAggregator;
  } });
  var LastValue_1 = require_LastValue();
  Object.defineProperty(exports, "LastValueAccumulation", { enumerable: true, get: function() {
    return LastValue_1.LastValueAccumulation;
  } });
  Object.defineProperty(exports, "LastValueAggregator", { enumerable: true, get: function() {
    return LastValue_1.LastValueAggregator;
  } });
  var Sum_1 = require_Sum();
  Object.defineProperty(exports, "SumAccumulation", { enumerable: true, get: function() {
    return Sum_1.SumAccumulation;
  } });
  Object.defineProperty(exports, "SumAggregator", { enumerable: true, get: function() {
    return Sum_1.SumAggregator;
  } });
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/view/Aggregation.js
var require_Aggregation = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DEFAULT_AGGREGATION = exports.EXPONENTIAL_HISTOGRAM_AGGREGATION = exports.HISTOGRAM_AGGREGATION = exports.LAST_VALUE_AGGREGATION = exports.SUM_AGGREGATION = exports.DROP_AGGREGATION = exports.DefaultAggregation = exports.ExponentialHistogramAggregation = exports.ExplicitBucketHistogramAggregation = exports.HistogramAggregation = exports.LastValueAggregation = exports.SumAggregation = exports.DropAggregation = undefined;
  var api = require_src();
  var aggregator_1 = require_aggregator();
  var MetricData_1 = require_MetricData();

  class DropAggregation {
    static DEFAULT_INSTANCE = new aggregator_1.DropAggregator;
    createAggregator(_instrument) {
      return DropAggregation.DEFAULT_INSTANCE;
    }
  }
  exports.DropAggregation = DropAggregation;

  class SumAggregation {
    static MONOTONIC_INSTANCE = new aggregator_1.SumAggregator(true);
    static NON_MONOTONIC_INSTANCE = new aggregator_1.SumAggregator(false);
    createAggregator(instrument) {
      switch (instrument.type) {
        case MetricData_1.InstrumentType.COUNTER:
        case MetricData_1.InstrumentType.OBSERVABLE_COUNTER:
        case MetricData_1.InstrumentType.HISTOGRAM: {
          return SumAggregation.MONOTONIC_INSTANCE;
        }
        default: {
          return SumAggregation.NON_MONOTONIC_INSTANCE;
        }
      }
    }
  }
  exports.SumAggregation = SumAggregation;

  class LastValueAggregation {
    static DEFAULT_INSTANCE = new aggregator_1.LastValueAggregator;
    createAggregator(_instrument) {
      return LastValueAggregation.DEFAULT_INSTANCE;
    }
  }
  exports.LastValueAggregation = LastValueAggregation;

  class HistogramAggregation {
    static DEFAULT_INSTANCE = new aggregator_1.HistogramAggregator([0, 5, 10, 25, 50, 75, 100, 250, 500, 750, 1000, 2500, 5000, 7500, 1e4], true);
    createAggregator(_instrument) {
      return HistogramAggregation.DEFAULT_INSTANCE;
    }
  }
  exports.HistogramAggregation = HistogramAggregation;

  class ExplicitBucketHistogramAggregation {
    _boundaries;
    _recordMinMax;
    constructor(boundaries, recordMinMax = true) {
      if (boundaries == null) {
        throw new Error("ExplicitBucketHistogramAggregation should be created with explicit boundaries, if a single bucket histogram is required, please pass an empty array");
      }
      boundaries = boundaries.concat();
      boundaries = boundaries.sort((a, b) => a - b);
      const minusInfinityIndex = boundaries.lastIndexOf(-Infinity);
      let infinityIndex = boundaries.indexOf(Infinity);
      if (infinityIndex === -1) {
        infinityIndex = undefined;
      }
      this._boundaries = boundaries.slice(minusInfinityIndex + 1, infinityIndex);
      this._recordMinMax = recordMinMax;
    }
    createAggregator(_instrument) {
      return new aggregator_1.HistogramAggregator(this._boundaries, this._recordMinMax);
    }
  }
  exports.ExplicitBucketHistogramAggregation = ExplicitBucketHistogramAggregation;

  class ExponentialHistogramAggregation {
    _maxSize;
    _recordMinMax;
    constructor(maxSize = 160, recordMinMax = true) {
      this._maxSize = maxSize;
      this._recordMinMax = recordMinMax;
    }
    createAggregator(_instrument) {
      return new aggregator_1.ExponentialHistogramAggregator(this._maxSize, this._recordMinMax);
    }
  }
  exports.ExponentialHistogramAggregation = ExponentialHistogramAggregation;

  class DefaultAggregation {
    _resolve(instrument) {
      switch (instrument.type) {
        case MetricData_1.InstrumentType.COUNTER:
        case MetricData_1.InstrumentType.UP_DOWN_COUNTER:
        case MetricData_1.InstrumentType.OBSERVABLE_COUNTER:
        case MetricData_1.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER: {
          return exports.SUM_AGGREGATION;
        }
        case MetricData_1.InstrumentType.GAUGE:
        case MetricData_1.InstrumentType.OBSERVABLE_GAUGE: {
          return exports.LAST_VALUE_AGGREGATION;
        }
        case MetricData_1.InstrumentType.HISTOGRAM: {
          if (instrument.advice.explicitBucketBoundaries) {
            return new ExplicitBucketHistogramAggregation(instrument.advice.explicitBucketBoundaries);
          }
          return exports.HISTOGRAM_AGGREGATION;
        }
      }
      api.diag.warn(`Unable to recognize instrument type: ${instrument.type}`);
      return exports.DROP_AGGREGATION;
    }
    createAggregator(instrument) {
      return this._resolve(instrument).createAggregator(instrument);
    }
  }
  exports.DefaultAggregation = DefaultAggregation;
  exports.DROP_AGGREGATION = new DropAggregation;
  exports.SUM_AGGREGATION = new SumAggregation;
  exports.LAST_VALUE_AGGREGATION = new LastValueAggregation;
  exports.HISTOGRAM_AGGREGATION = new HistogramAggregation;
  exports.EXPONENTIAL_HISTOGRAM_AGGREGATION = new ExponentialHistogramAggregation;
  exports.DEFAULT_AGGREGATION = new DefaultAggregation;
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/view/AggregationOption.js
var require_AggregationOption = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.toAggregation = exports.AggregationType = undefined;
  var Aggregation_1 = require_Aggregation();
  var AggregationType;
  (function(AggregationType2) {
    AggregationType2[AggregationType2["DEFAULT"] = 0] = "DEFAULT";
    AggregationType2[AggregationType2["DROP"] = 1] = "DROP";
    AggregationType2[AggregationType2["SUM"] = 2] = "SUM";
    AggregationType2[AggregationType2["LAST_VALUE"] = 3] = "LAST_VALUE";
    AggregationType2[AggregationType2["EXPLICIT_BUCKET_HISTOGRAM"] = 4] = "EXPLICIT_BUCKET_HISTOGRAM";
    AggregationType2[AggregationType2["EXPONENTIAL_HISTOGRAM"] = 5] = "EXPONENTIAL_HISTOGRAM";
  })(AggregationType = exports.AggregationType || (exports.AggregationType = {}));
  function toAggregation(option) {
    switch (option.type) {
      case AggregationType.DEFAULT:
        return Aggregation_1.DEFAULT_AGGREGATION;
      case AggregationType.DROP:
        return Aggregation_1.DROP_AGGREGATION;
      case AggregationType.SUM:
        return Aggregation_1.SUM_AGGREGATION;
      case AggregationType.LAST_VALUE:
        return Aggregation_1.LAST_VALUE_AGGREGATION;
      case AggregationType.EXPONENTIAL_HISTOGRAM: {
        const expOption = option;
        return new Aggregation_1.ExponentialHistogramAggregation(expOption.options?.maxSize, expOption.options?.recordMinMax);
      }
      case AggregationType.EXPLICIT_BUCKET_HISTOGRAM: {
        const expOption = option;
        if (expOption.options == null) {
          return Aggregation_1.HISTOGRAM_AGGREGATION;
        } else {
          return new Aggregation_1.ExplicitBucketHistogramAggregation(expOption.options?.boundaries, expOption.options?.recordMinMax);
        }
      }
      default:
        throw new Error("Unsupported Aggregation");
    }
  }
  exports.toAggregation = toAggregation;
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/export/AggregationSelector.js
var require_AggregationSelector = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR = exports.DEFAULT_AGGREGATION_SELECTOR = undefined;
  var AggregationTemporality_1 = require_AggregationTemporality();
  var AggregationOption_1 = require_AggregationOption();
  var DEFAULT_AGGREGATION_SELECTOR = (_instrumentType) => {
    return {
      type: AggregationOption_1.AggregationType.DEFAULT
    };
  };
  exports.DEFAULT_AGGREGATION_SELECTOR = DEFAULT_AGGREGATION_SELECTOR;
  var DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR = (_instrumentType) => AggregationTemporality_1.AggregationTemporality.CUMULATIVE;
  exports.DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR = DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR;
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/export/MetricReader.js
var require_MetricReader = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MetricReader = undefined;
  var api = require_src();
  var utils_1 = require_utils();
  var AggregationSelector_1 = require_AggregationSelector();

  class MetricReader {
    _shutdown = false;
    _metricProducers;
    _sdkMetricProducer;
    _aggregationTemporalitySelector;
    _aggregationSelector;
    _cardinalitySelector;
    constructor(options) {
      this._aggregationSelector = options?.aggregationSelector ?? AggregationSelector_1.DEFAULT_AGGREGATION_SELECTOR;
      this._aggregationTemporalitySelector = options?.aggregationTemporalitySelector ?? AggregationSelector_1.DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR;
      this._metricProducers = options?.metricProducers ?? [];
      this._cardinalitySelector = options?.cardinalitySelector;
    }
    setMetricProducer(metricProducer) {
      if (this._sdkMetricProducer) {
        throw new Error("MetricReader can not be bound to a MeterProvider again.");
      }
      this._sdkMetricProducer = metricProducer;
      this.onInitialized();
    }
    selectAggregation(instrumentType) {
      return this._aggregationSelector(instrumentType);
    }
    selectAggregationTemporality(instrumentType) {
      return this._aggregationTemporalitySelector(instrumentType);
    }
    selectCardinalityLimit(instrumentType) {
      return this._cardinalitySelector ? this._cardinalitySelector(instrumentType) : 2000;
    }
    onInitialized() {}
    async collect(options) {
      if (this._sdkMetricProducer === undefined) {
        throw new Error("MetricReader is not bound to a MetricProducer");
      }
      if (this._shutdown) {
        throw new Error("MetricReader is shutdown");
      }
      const [sdkCollectionResults, ...additionalCollectionResults] = await Promise.all([
        this._sdkMetricProducer.collect({
          timeoutMillis: options?.timeoutMillis
        }),
        ...this._metricProducers.map((producer) => producer.collect({
          timeoutMillis: options?.timeoutMillis
        }))
      ]);
      const errors = sdkCollectionResults.errors.concat(additionalCollectionResults.flatMap((result) => result.errors));
      const resource = sdkCollectionResults.resourceMetrics.resource;
      const scopeMetrics = sdkCollectionResults.resourceMetrics.scopeMetrics.concat(additionalCollectionResults.flatMap((result) => result.resourceMetrics.scopeMetrics));
      return {
        resourceMetrics: {
          resource,
          scopeMetrics
        },
        errors
      };
    }
    async shutdown(options) {
      if (this._shutdown) {
        api.diag.error("Cannot call shutdown twice.");
        return;
      }
      if (options?.timeoutMillis == null) {
        await this.onShutdown();
      } else {
        await (0, utils_1.callWithTimeout)(this.onShutdown(), options.timeoutMillis);
      }
      this._shutdown = true;
    }
    async forceFlush(options) {
      if (this._shutdown) {
        api.diag.warn("Cannot forceFlush on already shutdown MetricReader.");
        return;
      }
      if (options?.timeoutMillis == null) {
        await this.onForceFlush();
        return;
      }
      await (0, utils_1.callWithTimeout)(this.onForceFlush(), options.timeoutMillis);
    }
  }
  exports.MetricReader = MetricReader;
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/export/PeriodicExportingMetricReader.js
var require_PeriodicExportingMetricReader = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.PeriodicExportingMetricReader = undefined;
  var api = require_src();
  var core_1 = require_src2();
  var MetricReader_1 = require_MetricReader();
  var utils_1 = require_utils();
  var MetricData_1 = require_MetricData();

  class PeriodicExportingMetricReader extends MetricReader_1.MetricReader {
    _interval;
    _exporter;
    _exportInterval;
    _exportTimeout;
    constructor(options) {
      const { exporter, exportIntervalMillis = 60000, metricProducers, cardinalityLimits } = options;
      let { exportTimeoutMillis = 30000 } = options;
      super({
        aggregationSelector: exporter.selectAggregation?.bind(exporter),
        aggregationTemporalitySelector: exporter.selectAggregationTemporality?.bind(exporter),
        metricProducers,
        cardinalitySelector: (instrumentType) => {
          const limits = {
            default: 2000,
            ...cardinalityLimits
          };
          switch (instrumentType) {
            case MetricData_1.InstrumentType.COUNTER:
              return limits.counter ?? limits.default;
            case MetricData_1.InstrumentType.GAUGE:
              return limits.gauge ?? limits.default;
            case MetricData_1.InstrumentType.HISTOGRAM:
              return limits.histogram ?? limits.default;
            case MetricData_1.InstrumentType.OBSERVABLE_COUNTER:
              return limits.observableCounter ?? limits.default;
            case MetricData_1.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER:
              return limits.observableUpDownCounter ?? limits.default;
            case MetricData_1.InstrumentType.OBSERVABLE_GAUGE:
              return limits.observableGauge ?? limits.default;
            case MetricData_1.InstrumentType.UP_DOWN_COUNTER:
              return limits.upDownCounter ?? limits.default;
            default:
              return limits.default;
          }
        }
      });
      if (exportIntervalMillis <= 0) {
        throw Error("exportIntervalMillis must be greater than 0");
      }
      if (exportTimeoutMillis <= 0) {
        throw Error("exportTimeoutMillis must be greater than 0");
      }
      if (exportIntervalMillis < exportTimeoutMillis) {
        if ("exportIntervalMillis" in options && "exportTimeoutMillis" in options) {
          throw Error("exportIntervalMillis must be greater than or equal to exportTimeoutMillis");
        } else {
          api.diag.info(`Timeout of ${exportTimeoutMillis} exceeds the interval of ${exportIntervalMillis}. Clamping timeout to interval duration.`);
          exportTimeoutMillis = exportIntervalMillis;
        }
      }
      this._exportInterval = exportIntervalMillis;
      this._exportTimeout = exportTimeoutMillis;
      this._exporter = exporter;
    }
    async _runOnce() {
      try {
        await (0, utils_1.callWithTimeout)(this._doRun(), this._exportTimeout);
      } catch (err) {
        if (err instanceof utils_1.TimeoutError) {
          api.diag.error("Export took longer than %s milliseconds and timed out.", this._exportTimeout);
          return;
        }
        (0, core_1.globalErrorHandler)(err);
      }
    }
    async _doRun() {
      const { resourceMetrics, errors } = await this.collect({
        timeoutMillis: this._exportTimeout
      });
      if (errors.length > 0) {
        api.diag.error("PeriodicExportingMetricReader: metrics collection errors", ...errors);
      }
      if (resourceMetrics.resource.asyncAttributesPending) {
        try {
          await resourceMetrics.resource.waitForAsyncAttributes?.();
        } catch (e) {
          api.diag.debug("Error while resolving async portion of resource: ", e);
          (0, core_1.globalErrorHandler)(e);
        }
      }
      if (resourceMetrics.scopeMetrics.length === 0) {
        return;
      }
      const result = await core_1.internal._export(this._exporter, resourceMetrics);
      if (result.code !== core_1.ExportResultCode.SUCCESS) {
        throw new Error(`PeriodicExportingMetricReader: metrics export failed (error ${result.error})`);
      }
    }
    onInitialized() {
      this._interval = setInterval(() => {
        this._runOnce();
      }, this._exportInterval);
      if (typeof this._interval !== "number") {
        this._interval.unref();
      }
    }
    async onForceFlush() {
      await this._runOnce();
      await this._exporter.forceFlush();
    }
    async onShutdown() {
      if (this._interval) {
        clearInterval(this._interval);
      }
      await this.onForceFlush();
      await this._exporter.shutdown();
    }
  }
  exports.PeriodicExportingMetricReader = PeriodicExportingMetricReader;
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/export/InMemoryMetricExporter.js
var require_InMemoryMetricExporter = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.InMemoryMetricExporter = undefined;
  var core_1 = require_src2();

  class InMemoryMetricExporter {
    _shutdown = false;
    _aggregationTemporality;
    _metrics = [];
    constructor(aggregationTemporality) {
      this._aggregationTemporality = aggregationTemporality;
    }
    export(metrics, resultCallback) {
      if (this._shutdown) {
        setTimeout(() => resultCallback({ code: core_1.ExportResultCode.FAILED }), 0);
        return;
      }
      this._metrics.push(metrics);
      setTimeout(() => resultCallback({ code: core_1.ExportResultCode.SUCCESS }), 0);
    }
    getMetrics() {
      return this._metrics;
    }
    forceFlush() {
      return Promise.resolve();
    }
    reset() {
      this._metrics = [];
    }
    selectAggregationTemporality(_instrumentType) {
      return this._aggregationTemporality;
    }
    shutdown() {
      this._shutdown = true;
      return Promise.resolve();
    }
  }
  exports.InMemoryMetricExporter = InMemoryMetricExporter;
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/export/ConsoleMetricExporter.js
var require_ConsoleMetricExporter = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ConsoleMetricExporter = undefined;
  var core_1 = require_src2();
  var AggregationSelector_1 = require_AggregationSelector();

  class ConsoleMetricExporter {
    _shutdown = false;
    _temporalitySelector;
    constructor(options) {
      this._temporalitySelector = options?.temporalitySelector ?? AggregationSelector_1.DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR;
    }
    export(metrics, resultCallback) {
      if (this._shutdown) {
        resultCallback({ code: core_1.ExportResultCode.FAILED });
        return;
      }
      return ConsoleMetricExporter._sendMetrics(metrics, resultCallback);
    }
    forceFlush() {
      return Promise.resolve();
    }
    selectAggregationTemporality(_instrumentType) {
      return this._temporalitySelector(_instrumentType);
    }
    shutdown() {
      this._shutdown = true;
      return Promise.resolve();
    }
    static _sendMetrics(metrics, done) {
      for (const scopeMetrics of metrics.scopeMetrics) {
        for (const metric of scopeMetrics.metrics) {
          console.dir({
            descriptor: metric.descriptor,
            dataPointType: metric.dataPointType,
            dataPoints: metric.dataPoints
          }, { depth: null });
        }
      }
      done({ code: core_1.ExportResultCode.SUCCESS });
    }
  }
  exports.ConsoleMetricExporter = ConsoleMetricExporter;
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/view/ViewRegistry.js
var require_ViewRegistry = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ViewRegistry = undefined;

  class ViewRegistry {
    _registeredViews = [];
    addView(view) {
      this._registeredViews.push(view);
    }
    findViews(instrument, meter) {
      const views = this._registeredViews.filter((registeredView) => {
        return this._matchInstrument(registeredView.instrumentSelector, instrument) && this._matchMeter(registeredView.meterSelector, meter);
      });
      return views;
    }
    _matchInstrument(selector, instrument) {
      return (selector.getType() === undefined || instrument.type === selector.getType()) && selector.getNameFilter().match(instrument.name) && selector.getUnitFilter().match(instrument.unit);
    }
    _matchMeter(selector, meter) {
      return selector.getNameFilter().match(meter.name) && (meter.version === undefined || selector.getVersionFilter().match(meter.version)) && (meter.schemaUrl === undefined || selector.getSchemaUrlFilter().match(meter.schemaUrl));
    }
  }
  exports.ViewRegistry = ViewRegistry;
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/InstrumentDescriptor.js
var require_InstrumentDescriptor = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.isValidName = exports.isDescriptorCompatibleWith = exports.createInstrumentDescriptorWithView = exports.createInstrumentDescriptor = undefined;
  var api_1 = require_src();
  var utils_1 = require_utils();
  function createInstrumentDescriptor(name, type, options) {
    if (!isValidName(name)) {
      api_1.diag.warn(`Invalid metric name: "${name}". The metric name should be a ASCII string with a length no greater than 255 characters.`);
    }
    return {
      name,
      type,
      description: options?.description ?? "",
      unit: options?.unit ?? "",
      valueType: options?.valueType ?? api_1.ValueType.DOUBLE,
      advice: options?.advice ?? {}
    };
  }
  exports.createInstrumentDescriptor = createInstrumentDescriptor;
  function createInstrumentDescriptorWithView(view, instrument) {
    return {
      name: view.name ?? instrument.name,
      description: view.description ?? instrument.description,
      type: instrument.type,
      unit: instrument.unit,
      valueType: instrument.valueType,
      advice: instrument.advice
    };
  }
  exports.createInstrumentDescriptorWithView = createInstrumentDescriptorWithView;
  function isDescriptorCompatibleWith(descriptor, otherDescriptor) {
    return (0, utils_1.equalsCaseInsensitive)(descriptor.name, otherDescriptor.name) && descriptor.unit === otherDescriptor.unit && descriptor.type === otherDescriptor.type && descriptor.valueType === otherDescriptor.valueType;
  }
  exports.isDescriptorCompatibleWith = isDescriptorCompatibleWith;
  var NAME_REGEXP = /^[a-z][a-z0-9_.\-/]{0,254}$/i;
  function isValidName(name) {
    return NAME_REGEXP.test(name);
  }
  exports.isValidName = isValidName;
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/Instruments.js
var require_Instruments = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.isObservableInstrument = exports.ObservableUpDownCounterInstrument = exports.ObservableGaugeInstrument = exports.ObservableCounterInstrument = exports.ObservableInstrument = exports.HistogramInstrument = exports.GaugeInstrument = exports.CounterInstrument = exports.UpDownCounterInstrument = exports.SyncInstrument = undefined;
  var api_1 = require_src();
  var core_1 = require_src2();

  class SyncInstrument {
    _writableMetricStorage;
    _descriptor;
    constructor(writableMetricStorage, descriptor) {
      this._writableMetricStorage = writableMetricStorage;
      this._descriptor = descriptor;
    }
    _record(value, attributes = {}, context = api_1.context.active()) {
      if (typeof value !== "number") {
        api_1.diag.warn(`non-number value provided to metric ${this._descriptor.name}: ${value}`);
        return;
      }
      if (this._descriptor.valueType === api_1.ValueType.INT && !Number.isInteger(value)) {
        api_1.diag.warn(`INT value type cannot accept a floating-point value for ${this._descriptor.name}, ignoring the fractional digits.`);
        value = Math.trunc(value);
        if (!Number.isInteger(value)) {
          return;
        }
      }
      this._writableMetricStorage.record(value, attributes, context, (0, core_1.millisToHrTime)(Date.now()));
    }
  }
  exports.SyncInstrument = SyncInstrument;

  class UpDownCounterInstrument extends SyncInstrument {
    add(value, attributes, ctx) {
      this._record(value, attributes, ctx);
    }
  }
  exports.UpDownCounterInstrument = UpDownCounterInstrument;

  class CounterInstrument extends SyncInstrument {
    add(value, attributes, ctx) {
      if (value < 0) {
        api_1.diag.warn(`negative value provided to counter ${this._descriptor.name}: ${value}`);
        return;
      }
      this._record(value, attributes, ctx);
    }
  }
  exports.CounterInstrument = CounterInstrument;

  class GaugeInstrument extends SyncInstrument {
    record(value, attributes, ctx) {
      this._record(value, attributes, ctx);
    }
  }
  exports.GaugeInstrument = GaugeInstrument;

  class HistogramInstrument extends SyncInstrument {
    record(value, attributes, ctx) {
      if (value < 0) {
        api_1.diag.warn(`negative value provided to histogram ${this._descriptor.name}: ${value}`);
        return;
      }
      this._record(value, attributes, ctx);
    }
  }
  exports.HistogramInstrument = HistogramInstrument;

  class ObservableInstrument {
    _metricStorages;
    _descriptor;
    _observableRegistry;
    constructor(descriptor, metricStorages, observableRegistry) {
      this._descriptor = descriptor;
      this._metricStorages = metricStorages;
      this._observableRegistry = observableRegistry;
    }
    addCallback(callback) {
      this._observableRegistry.addCallback(callback, this);
    }
    removeCallback(callback) {
      this._observableRegistry.removeCallback(callback, this);
    }
  }
  exports.ObservableInstrument = ObservableInstrument;

  class ObservableCounterInstrument extends ObservableInstrument {
  }
  exports.ObservableCounterInstrument = ObservableCounterInstrument;

  class ObservableGaugeInstrument extends ObservableInstrument {
  }
  exports.ObservableGaugeInstrument = ObservableGaugeInstrument;

  class ObservableUpDownCounterInstrument extends ObservableInstrument {
  }
  exports.ObservableUpDownCounterInstrument = ObservableUpDownCounterInstrument;
  function isObservableInstrument(it) {
    return it instanceof ObservableInstrument;
  }
  exports.isObservableInstrument = isObservableInstrument;
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/Meter.js
var require_Meter = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Meter = undefined;
  var InstrumentDescriptor_1 = require_InstrumentDescriptor();
  var Instruments_1 = require_Instruments();
  var MetricData_1 = require_MetricData();

  class Meter {
    _meterSharedState;
    constructor(meterSharedState) {
      this._meterSharedState = meterSharedState;
    }
    createGauge(name, options) {
      const descriptor = (0, InstrumentDescriptor_1.createInstrumentDescriptor)(name, MetricData_1.InstrumentType.GAUGE, options);
      const storage = this._meterSharedState.registerMetricStorage(descriptor);
      return new Instruments_1.GaugeInstrument(storage, descriptor);
    }
    createHistogram(name, options) {
      const descriptor = (0, InstrumentDescriptor_1.createInstrumentDescriptor)(name, MetricData_1.InstrumentType.HISTOGRAM, options);
      const storage = this._meterSharedState.registerMetricStorage(descriptor);
      return new Instruments_1.HistogramInstrument(storage, descriptor);
    }
    createCounter(name, options) {
      const descriptor = (0, InstrumentDescriptor_1.createInstrumentDescriptor)(name, MetricData_1.InstrumentType.COUNTER, options);
      const storage = this._meterSharedState.registerMetricStorage(descriptor);
      return new Instruments_1.CounterInstrument(storage, descriptor);
    }
    createUpDownCounter(name, options) {
      const descriptor = (0, InstrumentDescriptor_1.createInstrumentDescriptor)(name, MetricData_1.InstrumentType.UP_DOWN_COUNTER, options);
      const storage = this._meterSharedState.registerMetricStorage(descriptor);
      return new Instruments_1.UpDownCounterInstrument(storage, descriptor);
    }
    createObservableGauge(name, options) {
      const descriptor = (0, InstrumentDescriptor_1.createInstrumentDescriptor)(name, MetricData_1.InstrumentType.OBSERVABLE_GAUGE, options);
      const storages = this._meterSharedState.registerAsyncMetricStorage(descriptor);
      return new Instruments_1.ObservableGaugeInstrument(descriptor, storages, this._meterSharedState.observableRegistry);
    }
    createObservableCounter(name, options) {
      const descriptor = (0, InstrumentDescriptor_1.createInstrumentDescriptor)(name, MetricData_1.InstrumentType.OBSERVABLE_COUNTER, options);
      const storages = this._meterSharedState.registerAsyncMetricStorage(descriptor);
      return new Instruments_1.ObservableCounterInstrument(descriptor, storages, this._meterSharedState.observableRegistry);
    }
    createObservableUpDownCounter(name, options) {
      const descriptor = (0, InstrumentDescriptor_1.createInstrumentDescriptor)(name, MetricData_1.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER, options);
      const storages = this._meterSharedState.registerAsyncMetricStorage(descriptor);
      return new Instruments_1.ObservableUpDownCounterInstrument(descriptor, storages, this._meterSharedState.observableRegistry);
    }
    addBatchObservableCallback(callback, observables) {
      this._meterSharedState.observableRegistry.addBatchCallback(callback, observables);
    }
    removeBatchObservableCallback(callback, observables) {
      this._meterSharedState.observableRegistry.removeBatchCallback(callback, observables);
    }
  }
  exports.Meter = Meter;
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/state/MetricStorage.js
var require_MetricStorage = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MetricStorage = undefined;
  var InstrumentDescriptor_1 = require_InstrumentDescriptor();

  class MetricStorage {
    _instrumentDescriptor;
    constructor(instrumentDescriptor) {
      this._instrumentDescriptor = instrumentDescriptor;
    }
    getInstrumentDescriptor() {
      return this._instrumentDescriptor;
    }
    updateDescription(description) {
      this._instrumentDescriptor = (0, InstrumentDescriptor_1.createInstrumentDescriptor)(this._instrumentDescriptor.name, this._instrumentDescriptor.type, {
        description,
        valueType: this._instrumentDescriptor.valueType,
        unit: this._instrumentDescriptor.unit,
        advice: this._instrumentDescriptor.advice
      });
    }
  }
  exports.MetricStorage = MetricStorage;
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/state/HashMap.js
var require_HashMap = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.AttributeHashMap = exports.HashMap = undefined;
  var utils_1 = require_utils();

  class HashMap {
    _valueMap = new Map;
    _keyMap = new Map;
    _hash;
    constructor(hash) {
      this._hash = hash;
    }
    get(key, hashCode) {
      hashCode ??= this._hash(key);
      return this._valueMap.get(hashCode);
    }
    getOrDefault(key, defaultFactory) {
      const hash = this._hash(key);
      if (this._valueMap.has(hash)) {
        return this._valueMap.get(hash);
      }
      const val = defaultFactory();
      if (!this._keyMap.has(hash)) {
        this._keyMap.set(hash, key);
      }
      this._valueMap.set(hash, val);
      return val;
    }
    set(key, value, hashCode) {
      hashCode ??= this._hash(key);
      if (!this._keyMap.has(hashCode)) {
        this._keyMap.set(hashCode, key);
      }
      this._valueMap.set(hashCode, value);
    }
    has(key, hashCode) {
      hashCode ??= this._hash(key);
      return this._valueMap.has(hashCode);
    }
    *keys() {
      const keyIterator = this._keyMap.entries();
      let next = keyIterator.next();
      while (next.done !== true) {
        yield [next.value[1], next.value[0]];
        next = keyIterator.next();
      }
    }
    *entries() {
      const valueIterator = this._valueMap.entries();
      let next = valueIterator.next();
      while (next.done !== true) {
        yield [this._keyMap.get(next.value[0]), next.value[1], next.value[0]];
        next = valueIterator.next();
      }
    }
    get size() {
      return this._valueMap.size;
    }
  }
  exports.HashMap = HashMap;

  class AttributeHashMap extends HashMap {
    constructor() {
      super(utils_1.hashAttributes);
    }
  }
  exports.AttributeHashMap = AttributeHashMap;
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/state/DeltaMetricProcessor.js
var require_DeltaMetricProcessor = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DeltaMetricProcessor = undefined;
  var utils_1 = require_utils();
  var HashMap_1 = require_HashMap();

  class DeltaMetricProcessor {
    _activeCollectionStorage = new HashMap_1.AttributeHashMap;
    _cumulativeMemoStorage = new HashMap_1.AttributeHashMap;
    _cardinalityLimit;
    _overflowAttributes = { "otel.metric.overflow": true };
    _overflowHashCode;
    _aggregator;
    constructor(aggregator, aggregationCardinalityLimit) {
      this._aggregator = aggregator;
      this._cardinalityLimit = (aggregationCardinalityLimit ?? 2000) - 1;
      this._overflowHashCode = (0, utils_1.hashAttributes)(this._overflowAttributes);
    }
    record(value, attributes, _context, collectionTime) {
      let accumulation = this._activeCollectionStorage.get(attributes);
      if (!accumulation) {
        if (this._activeCollectionStorage.size >= this._cardinalityLimit) {
          const overflowAccumulation = this._activeCollectionStorage.getOrDefault(this._overflowAttributes, () => this._aggregator.createAccumulation(collectionTime));
          overflowAccumulation?.record(value);
          return;
        }
        accumulation = this._aggregator.createAccumulation(collectionTime);
        this._activeCollectionStorage.set(attributes, accumulation);
      }
      accumulation?.record(value);
    }
    batchCumulate(measurements, collectionTime) {
      Array.from(measurements.entries()).forEach(([attributes, value, hashCode]) => {
        const accumulation = this._aggregator.createAccumulation(collectionTime);
        accumulation?.record(value);
        let delta = accumulation;
        if (this._cumulativeMemoStorage.has(attributes, hashCode)) {
          const previous = this._cumulativeMemoStorage.get(attributes, hashCode);
          delta = this._aggregator.diff(previous, accumulation);
        } else {
          if (this._cumulativeMemoStorage.size >= this._cardinalityLimit) {
            attributes = this._overflowAttributes;
            hashCode = this._overflowHashCode;
            if (this._cumulativeMemoStorage.has(attributes, hashCode)) {
              const previous = this._cumulativeMemoStorage.get(attributes, hashCode);
              delta = this._aggregator.diff(previous, accumulation);
            }
          }
        }
        if (this._activeCollectionStorage.has(attributes, hashCode)) {
          const active = this._activeCollectionStorage.get(attributes, hashCode);
          delta = this._aggregator.merge(active, delta);
        }
        this._cumulativeMemoStorage.set(attributes, accumulation, hashCode);
        this._activeCollectionStorage.set(attributes, delta, hashCode);
      });
    }
    collect() {
      const unreportedDelta = this._activeCollectionStorage;
      this._activeCollectionStorage = new HashMap_1.AttributeHashMap;
      return unreportedDelta;
    }
  }
  exports.DeltaMetricProcessor = DeltaMetricProcessor;
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/state/TemporalMetricProcessor.js
var require_TemporalMetricProcessor = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.TemporalMetricProcessor = undefined;
  var AggregationTemporality_1 = require_AggregationTemporality();
  var HashMap_1 = require_HashMap();

  class TemporalMetricProcessor {
    _aggregator;
    _unreportedAccumulations = new Map;
    _reportHistory = new Map;
    constructor(aggregator, collectorHandles) {
      this._aggregator = aggregator;
      collectorHandles.forEach((handle) => {
        this._unreportedAccumulations.set(handle, []);
      });
    }
    buildMetrics(collector, instrumentDescriptor, currentAccumulations, collectionTime) {
      this._stashAccumulations(currentAccumulations);
      const unreportedAccumulations = this._getMergedUnreportedAccumulations(collector);
      let result = unreportedAccumulations;
      let aggregationTemporality;
      if (this._reportHistory.has(collector)) {
        const last = this._reportHistory.get(collector);
        const lastCollectionTime = last.collectionTime;
        aggregationTemporality = last.aggregationTemporality;
        if (aggregationTemporality === AggregationTemporality_1.AggregationTemporality.CUMULATIVE) {
          result = TemporalMetricProcessor.merge(last.accumulations, unreportedAccumulations, this._aggregator);
        } else {
          result = TemporalMetricProcessor.calibrateStartTime(last.accumulations, unreportedAccumulations, lastCollectionTime);
        }
      } else {
        aggregationTemporality = collector.selectAggregationTemporality(instrumentDescriptor.type);
      }
      this._reportHistory.set(collector, {
        accumulations: result,
        collectionTime,
        aggregationTemporality
      });
      const accumulationRecords = AttributesMapToAccumulationRecords(result);
      if (accumulationRecords.length === 0) {
        return;
      }
      return this._aggregator.toMetricData(instrumentDescriptor, aggregationTemporality, accumulationRecords, collectionTime);
    }
    _stashAccumulations(currentAccumulation) {
      const registeredCollectors = this._unreportedAccumulations.keys();
      for (const collector of registeredCollectors) {
        let stash = this._unreportedAccumulations.get(collector);
        if (stash === undefined) {
          stash = [];
          this._unreportedAccumulations.set(collector, stash);
        }
        stash.push(currentAccumulation);
      }
    }
    _getMergedUnreportedAccumulations(collector) {
      let result = new HashMap_1.AttributeHashMap;
      const unreportedList = this._unreportedAccumulations.get(collector);
      this._unreportedAccumulations.set(collector, []);
      if (unreportedList === undefined) {
        return result;
      }
      for (const it of unreportedList) {
        result = TemporalMetricProcessor.merge(result, it, this._aggregator);
      }
      return result;
    }
    static merge(last, current, aggregator) {
      const result = last;
      const iterator = current.entries();
      let next = iterator.next();
      while (next.done !== true) {
        const [key, record, hash] = next.value;
        if (last.has(key, hash)) {
          const lastAccumulation = last.get(key, hash);
          const accumulation = aggregator.merge(lastAccumulation, record);
          result.set(key, accumulation, hash);
        } else {
          result.set(key, record, hash);
        }
        next = iterator.next();
      }
      return result;
    }
    static calibrateStartTime(last, current, lastCollectionTime) {
      for (const [key, hash] of last.keys()) {
        const currentAccumulation = current.get(key, hash);
        currentAccumulation?.setStartTime(lastCollectionTime);
      }
      return current;
    }
  }
  exports.TemporalMetricProcessor = TemporalMetricProcessor;
  function AttributesMapToAccumulationRecords(map) {
    return Array.from(map.entries());
  }
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/state/AsyncMetricStorage.js
var require_AsyncMetricStorage = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.AsyncMetricStorage = undefined;
  var MetricStorage_1 = require_MetricStorage();
  var DeltaMetricProcessor_1 = require_DeltaMetricProcessor();
  var TemporalMetricProcessor_1 = require_TemporalMetricProcessor();
  var HashMap_1 = require_HashMap();

  class AsyncMetricStorage extends MetricStorage_1.MetricStorage {
    _aggregationCardinalityLimit;
    _deltaMetricStorage;
    _temporalMetricStorage;
    _attributesProcessor;
    constructor(_instrumentDescriptor, aggregator, attributesProcessor, collectorHandles, aggregationCardinalityLimit) {
      super(_instrumentDescriptor);
      this._aggregationCardinalityLimit = aggregationCardinalityLimit;
      this._deltaMetricStorage = new DeltaMetricProcessor_1.DeltaMetricProcessor(aggregator, this._aggregationCardinalityLimit);
      this._temporalMetricStorage = new TemporalMetricProcessor_1.TemporalMetricProcessor(aggregator, collectorHandles);
      this._attributesProcessor = attributesProcessor;
    }
    record(measurements, observationTime) {
      const processed = new HashMap_1.AttributeHashMap;
      Array.from(measurements.entries()).forEach(([attributes, value]) => {
        processed.set(this._attributesProcessor.process(attributes), value);
      });
      this._deltaMetricStorage.batchCumulate(processed, observationTime);
    }
    collect(collector, collectionTime) {
      const accumulations = this._deltaMetricStorage.collect();
      return this._temporalMetricStorage.buildMetrics(collector, this._instrumentDescriptor, accumulations, collectionTime);
    }
  }
  exports.AsyncMetricStorage = AsyncMetricStorage;
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/view/RegistrationConflicts.js
var require_RegistrationConflicts = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getConflictResolutionRecipe = exports.getDescriptionResolutionRecipe = exports.getTypeConflictResolutionRecipe = exports.getUnitConflictResolutionRecipe = exports.getValueTypeConflictResolutionRecipe = exports.getIncompatibilityDetails = undefined;
  function getIncompatibilityDetails(existing, otherDescriptor) {
    let incompatibility = "";
    if (existing.unit !== otherDescriptor.unit) {
      incompatibility += `	- Unit '${existing.unit}' does not match '${otherDescriptor.unit}'
`;
    }
    if (existing.type !== otherDescriptor.type) {
      incompatibility += `	- Type '${existing.type}' does not match '${otherDescriptor.type}'
`;
    }
    if (existing.valueType !== otherDescriptor.valueType) {
      incompatibility += `	- Value Type '${existing.valueType}' does not match '${otherDescriptor.valueType}'
`;
    }
    if (existing.description !== otherDescriptor.description) {
      incompatibility += `	- Description '${existing.description}' does not match '${otherDescriptor.description}'
`;
    }
    return incompatibility;
  }
  exports.getIncompatibilityDetails = getIncompatibilityDetails;
  function getValueTypeConflictResolutionRecipe(existing, otherDescriptor) {
    return `	- use valueType '${existing.valueType}' on instrument creation or use an instrument name other than '${otherDescriptor.name}'`;
  }
  exports.getValueTypeConflictResolutionRecipe = getValueTypeConflictResolutionRecipe;
  function getUnitConflictResolutionRecipe(existing, otherDescriptor) {
    return `	- use unit '${existing.unit}' on instrument creation or use an instrument name other than '${otherDescriptor.name}'`;
  }
  exports.getUnitConflictResolutionRecipe = getUnitConflictResolutionRecipe;
  function getTypeConflictResolutionRecipe(existing, otherDescriptor) {
    const selector = {
      name: otherDescriptor.name,
      type: otherDescriptor.type,
      unit: otherDescriptor.unit
    };
    const selectorString = JSON.stringify(selector);
    return `	- create a new view with a name other than '${existing.name}' and InstrumentSelector '${selectorString}'`;
  }
  exports.getTypeConflictResolutionRecipe = getTypeConflictResolutionRecipe;
  function getDescriptionResolutionRecipe(existing, otherDescriptor) {
    const selector = {
      name: otherDescriptor.name,
      type: otherDescriptor.type,
      unit: otherDescriptor.unit
    };
    const selectorString = JSON.stringify(selector);
    return `	- create a new view with a name other than '${existing.name}' and InstrumentSelector '${selectorString}'
    	- OR - create a new view with the name ${existing.name} and description '${existing.description}' and InstrumentSelector ${selectorString}
    	- OR - create a new view with the name ${otherDescriptor.name} and description '${existing.description}' and InstrumentSelector ${selectorString}`;
  }
  exports.getDescriptionResolutionRecipe = getDescriptionResolutionRecipe;
  function getConflictResolutionRecipe(existing, otherDescriptor) {
    if (existing.valueType !== otherDescriptor.valueType) {
      return getValueTypeConflictResolutionRecipe(existing, otherDescriptor);
    }
    if (existing.unit !== otherDescriptor.unit) {
      return getUnitConflictResolutionRecipe(existing, otherDescriptor);
    }
    if (existing.type !== otherDescriptor.type) {
      return getTypeConflictResolutionRecipe(existing, otherDescriptor);
    }
    if (existing.description !== otherDescriptor.description) {
      return getDescriptionResolutionRecipe(existing, otherDescriptor);
    }
    return "";
  }
  exports.getConflictResolutionRecipe = getConflictResolutionRecipe;
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/state/MetricStorageRegistry.js
var require_MetricStorageRegistry = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MetricStorageRegistry = undefined;
  var InstrumentDescriptor_1 = require_InstrumentDescriptor();
  var api = require_src();
  var RegistrationConflicts_1 = require_RegistrationConflicts();

  class MetricStorageRegistry {
    _sharedRegistry = new Map;
    _perCollectorRegistry = new Map;
    static create() {
      return new MetricStorageRegistry;
    }
    getStorages(collector) {
      let storages = [];
      for (const metricStorages of this._sharedRegistry.values()) {
        storages = storages.concat(metricStorages);
      }
      const perCollectorStorages = this._perCollectorRegistry.get(collector);
      if (perCollectorStorages != null) {
        for (const metricStorages of perCollectorStorages.values()) {
          storages = storages.concat(metricStorages);
        }
      }
      return storages;
    }
    register(storage) {
      this._registerStorage(storage, this._sharedRegistry);
    }
    registerForCollector(collector, storage) {
      let storageMap = this._perCollectorRegistry.get(collector);
      if (storageMap == null) {
        storageMap = new Map;
        this._perCollectorRegistry.set(collector, storageMap);
      }
      this._registerStorage(storage, storageMap);
    }
    findOrUpdateCompatibleStorage(expectedDescriptor) {
      const storages = this._sharedRegistry.get(expectedDescriptor.name);
      if (storages === undefined) {
        return null;
      }
      return this._findOrUpdateCompatibleStorage(expectedDescriptor, storages);
    }
    findOrUpdateCompatibleCollectorStorage(collector, expectedDescriptor) {
      const storageMap = this._perCollectorRegistry.get(collector);
      if (storageMap === undefined) {
        return null;
      }
      const storages = storageMap.get(expectedDescriptor.name);
      if (storages === undefined) {
        return null;
      }
      return this._findOrUpdateCompatibleStorage(expectedDescriptor, storages);
    }
    _registerStorage(storage, storageMap) {
      const descriptor = storage.getInstrumentDescriptor();
      const storages = storageMap.get(descriptor.name);
      if (storages === undefined) {
        storageMap.set(descriptor.name, [storage]);
        return;
      }
      storages.push(storage);
    }
    _findOrUpdateCompatibleStorage(expectedDescriptor, existingStorages) {
      let compatibleStorage = null;
      for (const existingStorage of existingStorages) {
        const existingDescriptor = existingStorage.getInstrumentDescriptor();
        if ((0, InstrumentDescriptor_1.isDescriptorCompatibleWith)(existingDescriptor, expectedDescriptor)) {
          if (existingDescriptor.description !== expectedDescriptor.description) {
            if (expectedDescriptor.description.length > existingDescriptor.description.length) {
              existingStorage.updateDescription(expectedDescriptor.description);
            }
            api.diag.warn("A view or instrument with the name ", expectedDescriptor.name, ` has already been registered, but has a different description and is incompatible with another registered view.
`, `Details:
`, (0, RegistrationConflicts_1.getIncompatibilityDetails)(existingDescriptor, expectedDescriptor), `The longer description will be used.
To resolve the conflict:`, (0, RegistrationConflicts_1.getConflictResolutionRecipe)(existingDescriptor, expectedDescriptor));
          }
          compatibleStorage = existingStorage;
        } else {
          api.diag.warn("A view or instrument with the name ", expectedDescriptor.name, ` has already been registered and is incompatible with another registered view.
`, `Details:
`, (0, RegistrationConflicts_1.getIncompatibilityDetails)(existingDescriptor, expectedDescriptor), `To resolve the conflict:
`, (0, RegistrationConflicts_1.getConflictResolutionRecipe)(existingDescriptor, expectedDescriptor));
        }
      }
      return compatibleStorage;
    }
  }
  exports.MetricStorageRegistry = MetricStorageRegistry;
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/state/MultiWritableMetricStorage.js
var require_MultiWritableMetricStorage = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MultiMetricStorage = undefined;

  class MultiMetricStorage {
    _backingStorages;
    constructor(backingStorages) {
      this._backingStorages = backingStorages;
    }
    record(value, attributes, context, recordTime) {
      this._backingStorages.forEach((it) => {
        it.record(value, attributes, context, recordTime);
      });
    }
  }
  exports.MultiMetricStorage = MultiMetricStorage;
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/ObservableResult.js
var require_ObservableResult = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.BatchObservableResultImpl = exports.ObservableResultImpl = undefined;
  var api_1 = require_src();
  var HashMap_1 = require_HashMap();
  var Instruments_1 = require_Instruments();

  class ObservableResultImpl {
    _buffer = new HashMap_1.AttributeHashMap;
    _instrumentName;
    _valueType;
    constructor(instrumentName, valueType) {
      this._instrumentName = instrumentName;
      this._valueType = valueType;
    }
    observe(value, attributes = {}) {
      if (typeof value !== "number") {
        api_1.diag.warn(`non-number value provided to metric ${this._instrumentName}: ${value}`);
        return;
      }
      if (this._valueType === api_1.ValueType.INT && !Number.isInteger(value)) {
        api_1.diag.warn(`INT value type cannot accept a floating-point value for ${this._instrumentName}, ignoring the fractional digits.`);
        value = Math.trunc(value);
        if (!Number.isInteger(value)) {
          return;
        }
      }
      this._buffer.set(attributes, value);
    }
  }
  exports.ObservableResultImpl = ObservableResultImpl;

  class BatchObservableResultImpl {
    _buffer = new Map;
    observe(metric, value, attributes = {}) {
      if (!(0, Instruments_1.isObservableInstrument)(metric)) {
        return;
      }
      let map = this._buffer.get(metric);
      if (map == null) {
        map = new HashMap_1.AttributeHashMap;
        this._buffer.set(metric, map);
      }
      if (typeof value !== "number") {
        api_1.diag.warn(`non-number value provided to metric ${metric._descriptor.name}: ${value}`);
        return;
      }
      if (metric._descriptor.valueType === api_1.ValueType.INT && !Number.isInteger(value)) {
        api_1.diag.warn(`INT value type cannot accept a floating-point value for ${metric._descriptor.name}, ignoring the fractional digits.`);
        value = Math.trunc(value);
        if (!Number.isInteger(value)) {
          return;
        }
      }
      map.set(attributes, value);
    }
  }
  exports.BatchObservableResultImpl = BatchObservableResultImpl;
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/state/ObservableRegistry.js
var require_ObservableRegistry = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ObservableRegistry = undefined;
  var api_1 = require_src();
  var Instruments_1 = require_Instruments();
  var ObservableResult_1 = require_ObservableResult();
  var utils_1 = require_utils();

  class ObservableRegistry {
    _callbacks = [];
    _batchCallbacks = [];
    addCallback(callback, instrument) {
      const idx = this._findCallback(callback, instrument);
      if (idx >= 0) {
        return;
      }
      this._callbacks.push({ callback, instrument });
    }
    removeCallback(callback, instrument) {
      const idx = this._findCallback(callback, instrument);
      if (idx < 0) {
        return;
      }
      this._callbacks.splice(idx, 1);
    }
    addBatchCallback(callback, instruments) {
      const observableInstruments = new Set(instruments.filter(Instruments_1.isObservableInstrument));
      if (observableInstruments.size === 0) {
        api_1.diag.error("BatchObservableCallback is not associated with valid instruments", instruments);
        return;
      }
      const idx = this._findBatchCallback(callback, observableInstruments);
      if (idx >= 0) {
        return;
      }
      this._batchCallbacks.push({ callback, instruments: observableInstruments });
    }
    removeBatchCallback(callback, instruments) {
      const observableInstruments = new Set(instruments.filter(Instruments_1.isObservableInstrument));
      const idx = this._findBatchCallback(callback, observableInstruments);
      if (idx < 0) {
        return;
      }
      this._batchCallbacks.splice(idx, 1);
    }
    async observe(collectionTime, timeoutMillis) {
      const callbackFutures = this._observeCallbacks(collectionTime, timeoutMillis);
      const batchCallbackFutures = this._observeBatchCallbacks(collectionTime, timeoutMillis);
      const results = await Promise.allSettled([
        ...callbackFutures,
        ...batchCallbackFutures
      ]);
      const rejections = results.filter((result) => result.status === "rejected").map((result) => result.reason);
      return rejections;
    }
    _observeCallbacks(observationTime, timeoutMillis) {
      return this._callbacks.map(async ({ callback, instrument }) => {
        const observableResult = new ObservableResult_1.ObservableResultImpl(instrument._descriptor.name, instrument._descriptor.valueType);
        let callPromise = Promise.resolve(callback(observableResult));
        if (timeoutMillis != null) {
          callPromise = (0, utils_1.callWithTimeout)(callPromise, timeoutMillis);
        }
        await callPromise;
        instrument._metricStorages.forEach((metricStorage) => {
          metricStorage.record(observableResult._buffer, observationTime);
        });
      });
    }
    _observeBatchCallbacks(observationTime, timeoutMillis) {
      return this._batchCallbacks.map(async ({ callback, instruments }) => {
        const observableResult = new ObservableResult_1.BatchObservableResultImpl;
        let callPromise = Promise.resolve(callback(observableResult));
        if (timeoutMillis != null) {
          callPromise = (0, utils_1.callWithTimeout)(callPromise, timeoutMillis);
        }
        await callPromise;
        instruments.forEach((instrument) => {
          const buffer = observableResult._buffer.get(instrument);
          if (buffer == null) {
            return;
          }
          instrument._metricStorages.forEach((metricStorage) => {
            metricStorage.record(buffer, observationTime);
          });
        });
      });
    }
    _findCallback(callback, instrument) {
      return this._callbacks.findIndex((record) => {
        return record.callback === callback && record.instrument === instrument;
      });
    }
    _findBatchCallback(callback, instruments) {
      return this._batchCallbacks.findIndex((record) => {
        return record.callback === callback && (0, utils_1.setEquals)(record.instruments, instruments);
      });
    }
  }
  exports.ObservableRegistry = ObservableRegistry;
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/state/SyncMetricStorage.js
var require_SyncMetricStorage = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.SyncMetricStorage = undefined;
  var MetricStorage_1 = require_MetricStorage();
  var DeltaMetricProcessor_1 = require_DeltaMetricProcessor();
  var TemporalMetricProcessor_1 = require_TemporalMetricProcessor();

  class SyncMetricStorage extends MetricStorage_1.MetricStorage {
    _aggregationCardinalityLimit;
    _deltaMetricStorage;
    _temporalMetricStorage;
    _attributesProcessor;
    constructor(instrumentDescriptor, aggregator, attributesProcessor, collectorHandles, aggregationCardinalityLimit) {
      super(instrumentDescriptor);
      this._aggregationCardinalityLimit = aggregationCardinalityLimit;
      this._deltaMetricStorage = new DeltaMetricProcessor_1.DeltaMetricProcessor(aggregator, this._aggregationCardinalityLimit);
      this._temporalMetricStorage = new TemporalMetricProcessor_1.TemporalMetricProcessor(aggregator, collectorHandles);
      this._attributesProcessor = attributesProcessor;
    }
    record(value, attributes, context, recordTime) {
      attributes = this._attributesProcessor.process(attributes, context);
      this._deltaMetricStorage.record(value, attributes, context, recordTime);
    }
    collect(collector, collectionTime) {
      const accumulations = this._deltaMetricStorage.collect();
      return this._temporalMetricStorage.buildMetrics(collector, this._instrumentDescriptor, accumulations, collectionTime);
    }
  }
  exports.SyncMetricStorage = SyncMetricStorage;
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/view/AttributesProcessor.js
var require_AttributesProcessor = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.createDenyListAttributesProcessor = exports.createAllowListAttributesProcessor = exports.createMultiAttributesProcessor = exports.createNoopAttributesProcessor = undefined;

  class NoopAttributesProcessor {
    process(incoming, _context) {
      return incoming;
    }
  }

  class MultiAttributesProcessor {
    _processors;
    constructor(processors) {
      this._processors = processors;
    }
    process(incoming, context) {
      let filteredAttributes = incoming;
      for (const processor of this._processors) {
        filteredAttributes = processor.process(filteredAttributes, context);
      }
      return filteredAttributes;
    }
  }

  class AllowListProcessor {
    _allowedAttributeNames;
    constructor(allowedAttributeNames) {
      this._allowedAttributeNames = allowedAttributeNames;
    }
    process(incoming, _context) {
      const filteredAttributes = {};
      Object.keys(incoming).forEach((attributeName) => {
        if (this._allowedAttributeNames.includes(attributeName)) {
          filteredAttributes[attributeName] = incoming[attributeName];
        }
      });
      return filteredAttributes;
    }
  }

  class DenyListProcessor {
    _deniedAttributeNames;
    constructor(deniedAttributeNames) {
      this._deniedAttributeNames = deniedAttributeNames;
    }
    process(incoming, _context) {
      const filteredAttributes = {};
      Object.keys(incoming).forEach((attributeName) => {
        if (!this._deniedAttributeNames.includes(attributeName)) {
          filteredAttributes[attributeName] = incoming[attributeName];
        }
      });
      return filteredAttributes;
    }
  }
  function createNoopAttributesProcessor() {
    return NOOP;
  }
  exports.createNoopAttributesProcessor = createNoopAttributesProcessor;
  function createMultiAttributesProcessor(processors) {
    return new MultiAttributesProcessor(processors);
  }
  exports.createMultiAttributesProcessor = createMultiAttributesProcessor;
  function createAllowListAttributesProcessor(attributeAllowList) {
    return new AllowListProcessor(attributeAllowList);
  }
  exports.createAllowListAttributesProcessor = createAllowListAttributesProcessor;
  function createDenyListAttributesProcessor(attributeDenyList) {
    return new DenyListProcessor(attributeDenyList);
  }
  exports.createDenyListAttributesProcessor = createDenyListAttributesProcessor;
  var NOOP = new NoopAttributesProcessor;
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/state/MeterSharedState.js
var require_MeterSharedState = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MeterSharedState = undefined;
  var InstrumentDescriptor_1 = require_InstrumentDescriptor();
  var Meter_1 = require_Meter();
  var AsyncMetricStorage_1 = require_AsyncMetricStorage();
  var MetricStorageRegistry_1 = require_MetricStorageRegistry();
  var MultiWritableMetricStorage_1 = require_MultiWritableMetricStorage();
  var ObservableRegistry_1 = require_ObservableRegistry();
  var SyncMetricStorage_1 = require_SyncMetricStorage();
  var AttributesProcessor_1 = require_AttributesProcessor();

  class MeterSharedState {
    metricStorageRegistry = new MetricStorageRegistry_1.MetricStorageRegistry;
    observableRegistry = new ObservableRegistry_1.ObservableRegistry;
    meter;
    _meterProviderSharedState;
    _instrumentationScope;
    constructor(meterProviderSharedState, instrumentationScope) {
      this.meter = new Meter_1.Meter(this);
      this._meterProviderSharedState = meterProviderSharedState;
      this._instrumentationScope = instrumentationScope;
    }
    registerMetricStorage(descriptor) {
      const storages = this._registerMetricStorage(descriptor, SyncMetricStorage_1.SyncMetricStorage);
      if (storages.length === 1) {
        return storages[0];
      }
      return new MultiWritableMetricStorage_1.MultiMetricStorage(storages);
    }
    registerAsyncMetricStorage(descriptor) {
      const storages = this._registerMetricStorage(descriptor, AsyncMetricStorage_1.AsyncMetricStorage);
      return storages;
    }
    async collect(collector, collectionTime, options) {
      const errors = await this.observableRegistry.observe(collectionTime, options?.timeoutMillis);
      const storages = this.metricStorageRegistry.getStorages(collector);
      if (storages.length === 0) {
        return null;
      }
      const metricDataList = [];
      storages.forEach((metricStorage) => {
        const metricData = metricStorage.collect(collector, collectionTime);
        if (metricData != null) {
          metricDataList.push(metricData);
        }
      });
      if (metricDataList.length === 0) {
        return { errors };
      }
      return {
        scopeMetrics: {
          scope: this._instrumentationScope,
          metrics: metricDataList
        },
        errors
      };
    }
    _registerMetricStorage(descriptor, MetricStorageType) {
      const views = this._meterProviderSharedState.viewRegistry.findViews(descriptor, this._instrumentationScope);
      let storages = views.map((view) => {
        const viewDescriptor = (0, InstrumentDescriptor_1.createInstrumentDescriptorWithView)(view, descriptor);
        const compatibleStorage = this.metricStorageRegistry.findOrUpdateCompatibleStorage(viewDescriptor);
        if (compatibleStorage != null) {
          return compatibleStorage;
        }
        const aggregator = view.aggregation.createAggregator(viewDescriptor);
        const viewStorage = new MetricStorageType(viewDescriptor, aggregator, view.attributesProcessor, this._meterProviderSharedState.metricCollectors, view.aggregationCardinalityLimit);
        this.metricStorageRegistry.register(viewStorage);
        return viewStorage;
      });
      if (storages.length === 0) {
        const perCollectorAggregations = this._meterProviderSharedState.selectAggregations(descriptor.type);
        const collectorStorages = perCollectorAggregations.map(([collector, aggregation]) => {
          const compatibleStorage = this.metricStorageRegistry.findOrUpdateCompatibleCollectorStorage(collector, descriptor);
          if (compatibleStorage != null) {
            return compatibleStorage;
          }
          const aggregator = aggregation.createAggregator(descriptor);
          const cardinalityLimit = collector.selectCardinalityLimit(descriptor.type);
          const storage = new MetricStorageType(descriptor, aggregator, (0, AttributesProcessor_1.createNoopAttributesProcessor)(), [collector], cardinalityLimit);
          this.metricStorageRegistry.registerForCollector(collector, storage);
          return storage;
        });
        storages = storages.concat(collectorStorages);
      }
      return storages;
    }
  }
  exports.MeterSharedState = MeterSharedState;
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/state/MeterProviderSharedState.js
var require_MeterProviderSharedState = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MeterProviderSharedState = undefined;
  var utils_1 = require_utils();
  var ViewRegistry_1 = require_ViewRegistry();
  var MeterSharedState_1 = require_MeterSharedState();
  var AggregationOption_1 = require_AggregationOption();

  class MeterProviderSharedState {
    viewRegistry = new ViewRegistry_1.ViewRegistry;
    metricCollectors = [];
    meterSharedStates = new Map;
    resource;
    constructor(resource) {
      this.resource = resource;
    }
    getMeterSharedState(instrumentationScope) {
      const id = (0, utils_1.instrumentationScopeId)(instrumentationScope);
      let meterSharedState = this.meterSharedStates.get(id);
      if (meterSharedState == null) {
        meterSharedState = new MeterSharedState_1.MeterSharedState(this, instrumentationScope);
        this.meterSharedStates.set(id, meterSharedState);
      }
      return meterSharedState;
    }
    selectAggregations(instrumentType) {
      const result = [];
      for (const collector of this.metricCollectors) {
        result.push([
          collector,
          (0, AggregationOption_1.toAggregation)(collector.selectAggregation(instrumentType))
        ]);
      }
      return result;
    }
  }
  exports.MeterProviderSharedState = MeterProviderSharedState;
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/state/MetricCollector.js
var require_MetricCollector = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MetricCollector = undefined;
  var core_1 = require_src2();

  class MetricCollector {
    _sharedState;
    _metricReader;
    constructor(sharedState, metricReader) {
      this._sharedState = sharedState;
      this._metricReader = metricReader;
    }
    async collect(options) {
      const collectionTime = (0, core_1.millisToHrTime)(Date.now());
      const scopeMetrics = [];
      const errors = [];
      const meterCollectionPromises = Array.from(this._sharedState.meterSharedStates.values()).map(async (meterSharedState) => {
        const current = await meterSharedState.collect(this, collectionTime, options);
        if (current?.scopeMetrics != null) {
          scopeMetrics.push(current.scopeMetrics);
        }
        if (current?.errors != null) {
          errors.push(...current.errors);
        }
      });
      await Promise.all(meterCollectionPromises);
      return {
        resourceMetrics: {
          resource: this._sharedState.resource,
          scopeMetrics
        },
        errors
      };
    }
    async forceFlush(options) {
      await this._metricReader.forceFlush(options);
    }
    async shutdown(options) {
      await this._metricReader.shutdown(options);
    }
    selectAggregationTemporality(instrumentType) {
      return this._metricReader.selectAggregationTemporality(instrumentType);
    }
    selectAggregation(instrumentType) {
      return this._metricReader.selectAggregation(instrumentType);
    }
    selectCardinalityLimit(instrumentType) {
      return this._metricReader.selectCardinalityLimit?.(instrumentType) ?? 2000;
    }
  }
  exports.MetricCollector = MetricCollector;
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/view/Predicate.js
var require_Predicate = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ExactPredicate = exports.PatternPredicate = undefined;
  var ESCAPE = /[\^$\\.+?()[\]{}|]/g;

  class PatternPredicate {
    _matchAll;
    _regexp;
    constructor(pattern) {
      if (pattern === "*") {
        this._matchAll = true;
        this._regexp = /.*/;
      } else {
        this._matchAll = false;
        this._regexp = new RegExp(PatternPredicate.escapePattern(pattern));
      }
    }
    match(str) {
      if (this._matchAll) {
        return true;
      }
      return this._regexp.test(str);
    }
    static escapePattern(pattern) {
      return `^${pattern.replace(ESCAPE, "\\$&").replace("*", ".*")}$`;
    }
    static hasWildcard(pattern) {
      return pattern.includes("*");
    }
  }
  exports.PatternPredicate = PatternPredicate;

  class ExactPredicate {
    _matchAll;
    _pattern;
    constructor(pattern) {
      this._matchAll = pattern === undefined;
      this._pattern = pattern;
    }
    match(str) {
      if (this._matchAll) {
        return true;
      }
      if (str === this._pattern) {
        return true;
      }
      return false;
    }
  }
  exports.ExactPredicate = ExactPredicate;
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/view/InstrumentSelector.js
var require_InstrumentSelector = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.InstrumentSelector = undefined;
  var Predicate_1 = require_Predicate();

  class InstrumentSelector {
    _nameFilter;
    _type;
    _unitFilter;
    constructor(criteria) {
      this._nameFilter = new Predicate_1.PatternPredicate(criteria?.name ?? "*");
      this._type = criteria?.type;
      this._unitFilter = new Predicate_1.ExactPredicate(criteria?.unit);
    }
    getType() {
      return this._type;
    }
    getNameFilter() {
      return this._nameFilter;
    }
    getUnitFilter() {
      return this._unitFilter;
    }
  }
  exports.InstrumentSelector = InstrumentSelector;
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/view/MeterSelector.js
var require_MeterSelector = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MeterSelector = undefined;
  var Predicate_1 = require_Predicate();

  class MeterSelector {
    _nameFilter;
    _versionFilter;
    _schemaUrlFilter;
    constructor(criteria) {
      this._nameFilter = new Predicate_1.ExactPredicate(criteria?.name);
      this._versionFilter = new Predicate_1.ExactPredicate(criteria?.version);
      this._schemaUrlFilter = new Predicate_1.ExactPredicate(criteria?.schemaUrl);
    }
    getNameFilter() {
      return this._nameFilter;
    }
    getVersionFilter() {
      return this._versionFilter;
    }
    getSchemaUrlFilter() {
      return this._schemaUrlFilter;
    }
  }
  exports.MeterSelector = MeterSelector;
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/view/View.js
var require_View = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.View = undefined;
  var Predicate_1 = require_Predicate();
  var AttributesProcessor_1 = require_AttributesProcessor();
  var InstrumentSelector_1 = require_InstrumentSelector();
  var MeterSelector_1 = require_MeterSelector();
  var AggregationOption_1 = require_AggregationOption();
  function isSelectorNotProvided(options) {
    return options.instrumentName == null && options.instrumentType == null && options.instrumentUnit == null && options.meterName == null && options.meterVersion == null && options.meterSchemaUrl == null;
  }
  function validateViewOptions(viewOptions) {
    if (isSelectorNotProvided(viewOptions)) {
      throw new Error("Cannot create view with no selector arguments supplied");
    }
    if (viewOptions.name != null && (viewOptions?.instrumentName == null || Predicate_1.PatternPredicate.hasWildcard(viewOptions.instrumentName))) {
      throw new Error("Views with a specified name must be declared with an instrument selector that selects at most one instrument per meter.");
    }
  }

  class View {
    name;
    description;
    aggregation;
    attributesProcessor;
    instrumentSelector;
    meterSelector;
    aggregationCardinalityLimit;
    constructor(viewOptions) {
      validateViewOptions(viewOptions);
      if (viewOptions.attributesProcessors != null) {
        this.attributesProcessor = (0, AttributesProcessor_1.createMultiAttributesProcessor)(viewOptions.attributesProcessors);
      } else {
        this.attributesProcessor = (0, AttributesProcessor_1.createNoopAttributesProcessor)();
      }
      this.name = viewOptions.name;
      this.description = viewOptions.description;
      this.aggregation = (0, AggregationOption_1.toAggregation)(viewOptions.aggregation ?? { type: AggregationOption_1.AggregationType.DEFAULT });
      this.instrumentSelector = new InstrumentSelector_1.InstrumentSelector({
        name: viewOptions.instrumentName,
        type: viewOptions.instrumentType,
        unit: viewOptions.instrumentUnit
      });
      this.meterSelector = new MeterSelector_1.MeterSelector({
        name: viewOptions.meterName,
        version: viewOptions.meterVersion,
        schemaUrl: viewOptions.meterSchemaUrl
      });
      this.aggregationCardinalityLimit = viewOptions.aggregationCardinalityLimit;
    }
  }
  exports.View = View;
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/MeterProvider.js
var require_MeterProvider = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MeterProvider = undefined;
  var api_1 = require_src();
  var resources_1 = require_src3();
  var MeterProviderSharedState_1 = require_MeterProviderSharedState();
  var MetricCollector_1 = require_MetricCollector();
  var View_1 = require_View();

  class MeterProvider {
    _sharedState;
    _shutdown = false;
    constructor(options) {
      this._sharedState = new MeterProviderSharedState_1.MeterProviderSharedState(options?.resource ?? (0, resources_1.defaultResource)());
      if (options?.views != null && options.views.length > 0) {
        for (const viewOption of options.views) {
          this._sharedState.viewRegistry.addView(new View_1.View(viewOption));
        }
      }
      if (options?.readers != null && options.readers.length > 0) {
        for (const metricReader of options.readers) {
          const collector = new MetricCollector_1.MetricCollector(this._sharedState, metricReader);
          metricReader.setMetricProducer(collector);
          this._sharedState.metricCollectors.push(collector);
        }
      }
    }
    getMeter(name, version = "", options = {}) {
      if (this._shutdown) {
        api_1.diag.warn("A shutdown MeterProvider cannot provide a Meter");
        return (0, api_1.createNoopMeter)();
      }
      return this._sharedState.getMeterSharedState({
        name,
        version,
        schemaUrl: options.schemaUrl
      }).meter;
    }
    async shutdown(options) {
      if (this._shutdown) {
        api_1.diag.warn("shutdown may only be called once per MeterProvider");
        return;
      }
      this._shutdown = true;
      await Promise.all(this._sharedState.metricCollectors.map((collector) => {
        return collector.shutdown(options);
      }));
    }
    async forceFlush(options) {
      if (this._shutdown) {
        api_1.diag.warn("invalid attempt to force flush after MeterProvider shutdown");
        return;
      }
      await Promise.all(this._sharedState.metricCollectors.map((collector) => {
        return collector.forceFlush(options);
      }));
    }
  }
  exports.MeterProvider = MeterProvider;
});

// node_modules/.bun/@opentelemetry+sdk-metrics@2.7.0+e40b0dfdd726a224/node_modules/@opentelemetry/sdk-metrics/build/src/index.js
var require_src4 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.TimeoutError = exports.createDenyListAttributesProcessor = exports.createAllowListAttributesProcessor = exports.AggregationType = exports.MeterProvider = exports.ConsoleMetricExporter = exports.InMemoryMetricExporter = exports.PeriodicExportingMetricReader = exports.MetricReader = exports.InstrumentType = exports.DataPointType = exports.AggregationTemporality = undefined;
  var AggregationTemporality_1 = require_AggregationTemporality();
  Object.defineProperty(exports, "AggregationTemporality", { enumerable: true, get: function() {
    return AggregationTemporality_1.AggregationTemporality;
  } });
  var MetricData_1 = require_MetricData();
  Object.defineProperty(exports, "DataPointType", { enumerable: true, get: function() {
    return MetricData_1.DataPointType;
  } });
  Object.defineProperty(exports, "InstrumentType", { enumerable: true, get: function() {
    return MetricData_1.InstrumentType;
  } });
  var MetricReader_1 = require_MetricReader();
  Object.defineProperty(exports, "MetricReader", { enumerable: true, get: function() {
    return MetricReader_1.MetricReader;
  } });
  var PeriodicExportingMetricReader_1 = require_PeriodicExportingMetricReader();
  Object.defineProperty(exports, "PeriodicExportingMetricReader", { enumerable: true, get: function() {
    return PeriodicExportingMetricReader_1.PeriodicExportingMetricReader;
  } });
  var InMemoryMetricExporter_1 = require_InMemoryMetricExporter();
  Object.defineProperty(exports, "InMemoryMetricExporter", { enumerable: true, get: function() {
    return InMemoryMetricExporter_1.InMemoryMetricExporter;
  } });
  var ConsoleMetricExporter_1 = require_ConsoleMetricExporter();
  Object.defineProperty(exports, "ConsoleMetricExporter", { enumerable: true, get: function() {
    return ConsoleMetricExporter_1.ConsoleMetricExporter;
  } });
  var MeterProvider_1 = require_MeterProvider();
  Object.defineProperty(exports, "MeterProvider", { enumerable: true, get: function() {
    return MeterProvider_1.MeterProvider;
  } });
  var AggregationOption_1 = require_AggregationOption();
  Object.defineProperty(exports, "AggregationType", { enumerable: true, get: function() {
    return AggregationOption_1.AggregationType;
  } });
  var AttributesProcessor_1 = require_AttributesProcessor();
  Object.defineProperty(exports, "createAllowListAttributesProcessor", { enumerable: true, get: function() {
    return AttributesProcessor_1.createAllowListAttributesProcessor;
  } });
  Object.defineProperty(exports, "createDenyListAttributesProcessor", { enumerable: true, get: function() {
    return AttributesProcessor_1.createDenyListAttributesProcessor;
  } });
  var utils_1 = require_utils();
  Object.defineProperty(exports, "TimeoutError", { enumerable: true, get: function() {
    return utils_1.TimeoutError;
  } });
});

export { require_src4 as require_src };
