// @bun
import {
  __esm
} from "./chunk-qp2qdcda.js";

// node_modules/.bun/lru-cache@11.3.5/node_modules/lru-cache/dist/esm/node/index.min.js
import { tracingChannel as j, channel as I } from "diagnostics_channel";
var S, W, D = () => S.hasSubscribers || W.hasSubscribers, G, M, C, P = (u, e, t, i) => {
  typeof C.emitWarning == "function" ? C.emitWarning(u, e, t, i) : console.error(`[${t}] ${e}: ${u}`);
}, H = (u) => !M.has(u), $, F = (u) => !!u && u === Math.floor(u) && u > 0 && isFinite(u), U = (u) => F(u) ? u <= Math.pow(2, 8) ? Uint8Array : u <= Math.pow(2, 16) ? Uint16Array : u <= Math.pow(2, 32) ? Uint32Array : u <= Number.MAX_SAFE_INTEGER ? O : null : null, O, R = class u {
  heap;
  length;
  static #o = false;
  static create(e) {
    let t = U(e);
    if (!t)
      return [];
    u.#o = true;
    let i = new u(e, t);
    return u.#o = false, i;
  }
  constructor(e, t) {
    if (!u.#o)
      throw new TypeError("instantiate Stack using Stack.create(n)");
    this.heap = new t(e), this.length = 0;
  }
  push(e) {
    this.heap[this.length++] = e;
  }
  pop() {
    return this.heap[--this.length];
  }
}, L;
var init_index_min = __esm(() => {
  S = I("lru-cache:metrics");
  W = j("lru-cache");
  G = typeof performance == "object" && performance && typeof performance.now == "function" ? performance : Date;
  M = new Set;
  C = typeof process == "object" && process ? process : {};
  $ = Symbol("type");
  O = class extends Array {
    constructor(e) {
      super(e), this.fill(0);
    }
  };
  L = class u2 {
    #o;
    #u;
    #w;
    #D;
    #S;
    #M;
    #U;
    #m;
    get perf() {
      return this.#m;
    }
    ttl;
    ttlResolution;
    ttlAutopurge;
    updateAgeOnGet;
    updateAgeOnHas;
    allowStale;
    noDisposeOnSet;
    noUpdateTTL;
    maxEntrySize;
    sizeCalculation;
    noDeleteOnFetchRejection;
    noDeleteOnStaleGet;
    allowStaleOnFetchAbort;
    allowStaleOnFetchRejection;
    ignoreFetchAbort;
    #n;
    #b;
    #s;
    #i;
    #t;
    #a;
    #c;
    #l;
    #h;
    #y;
    #r;
    #_;
    #F;
    #d;
    #g;
    #T;
    #W;
    #f;
    #j;
    static unsafeExposeInternals(e) {
      return { starts: e.#F, ttls: e.#d, autopurgeTimers: e.#g, sizes: e.#_, keyMap: e.#s, keyList: e.#i, valList: e.#t, next: e.#a, prev: e.#c, get head() {
        return e.#l;
      }, get tail() {
        return e.#h;
      }, free: e.#y, isBackgroundFetch: (t) => e.#e(t), backgroundFetch: (t, i, s, n) => e.#P(t, i, s, n), moveToTail: (t) => e.#L(t), indexes: (t) => e.#A(t), rindexes: (t) => e.#z(t), isStale: (t) => e.#p(t) };
    }
    get max() {
      return this.#o;
    }
    get maxSize() {
      return this.#u;
    }
    get calculatedSize() {
      return this.#b;
    }
    get size() {
      return this.#n;
    }
    get fetchMethod() {
      return this.#M;
    }
    get memoMethod() {
      return this.#U;
    }
    get dispose() {
      return this.#w;
    }
    get onInsert() {
      return this.#D;
    }
    get disposeAfter() {
      return this.#S;
    }
    constructor(e) {
      let { max: t = 0, ttl: i, ttlResolution: s = 1, ttlAutopurge: n, updateAgeOnGet: o, updateAgeOnHas: r, allowStale: h, dispose: l, onInsert: c, disposeAfter: f, noDisposeOnSet: g, noUpdateTTL: p, maxSize: T = 0, maxEntrySize: w = 0, sizeCalculation: y, fetchMethod: a, memoMethod: m, noDeleteOnFetchRejection: _, noDeleteOnStaleGet: b, allowStaleOnFetchRejection: d, allowStaleOnFetchAbort: A, ignoreFetchAbort: z, perf: x } = e;
      if (x !== undefined && typeof x?.now != "function")
        throw new TypeError("perf option must have a now() method if specified");
      if (this.#m = x ?? G, t !== 0 && !F(t))
        throw new TypeError("max option must be a nonnegative integer");
      let v = t ? U(t) : Array;
      if (!v)
        throw new Error("invalid max value: " + t);
      if (this.#o = t, this.#u = T, this.maxEntrySize = w || this.#u, this.sizeCalculation = y, this.sizeCalculation) {
        if (!this.#u && !this.maxEntrySize)
          throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
        if (typeof this.sizeCalculation != "function")
          throw new TypeError("sizeCalculation set to non-function");
      }
      if (m !== undefined && typeof m != "function")
        throw new TypeError("memoMethod must be a function if defined");
      if (this.#U = m, a !== undefined && typeof a != "function")
        throw new TypeError("fetchMethod must be a function if specified");
      if (this.#M = a, this.#W = !!a, this.#s = new Map, this.#i = Array.from({ length: t }).fill(undefined), this.#t = Array.from({ length: t }).fill(undefined), this.#a = new v(t), this.#c = new v(t), this.#l = 0, this.#h = 0, this.#y = R.create(t), this.#n = 0, this.#b = 0, typeof l == "function" && (this.#w = l), typeof c == "function" && (this.#D = c), typeof f == "function" ? (this.#S = f, this.#r = []) : (this.#S = undefined, this.#r = undefined), this.#T = !!this.#w, this.#j = !!this.#D, this.#f = !!this.#S, this.noDisposeOnSet = !!g, this.noUpdateTTL = !!p, this.noDeleteOnFetchRejection = !!_, this.allowStaleOnFetchRejection = !!d, this.allowStaleOnFetchAbort = !!A, this.ignoreFetchAbort = !!z, this.maxEntrySize !== 0) {
        if (this.#u !== 0 && !F(this.#u))
          throw new TypeError("maxSize must be a positive integer if specified");
        if (!F(this.maxEntrySize))
          throw new TypeError("maxEntrySize must be a positive integer if specified");
        this.#X();
      }
      if (this.allowStale = !!h, this.noDeleteOnStaleGet = !!b, this.updateAgeOnGet = !!o, this.updateAgeOnHas = !!r, this.ttlResolution = F(s) || s === 0 ? s : 1, this.ttlAutopurge = !!n, this.ttl = i || 0, this.ttl) {
        if (!F(this.ttl))
          throw new TypeError("ttl must be a positive integer if specified");
        this.#H();
      }
      if (this.#o === 0 && this.ttl === 0 && this.#u === 0)
        throw new TypeError("At least one of max, maxSize, or ttl is required");
      if (!this.ttlAutopurge && !this.#o && !this.#u) {
        let E = "LRU_CACHE_UNBOUNDED";
        H(E) && (M.add(E), P("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", E, u2));
      }
    }
    getRemainingTTL(e) {
      return this.#s.has(e) ? 1 / 0 : 0;
    }
    #H() {
      let e = new O(this.#o), t = new O(this.#o);
      this.#d = e, this.#F = t;
      let i = this.ttlAutopurge ? Array.from({ length: this.#o }) : undefined;
      this.#g = i, this.#N = (r, h, l = this.#m.now()) => {
        t[r] = h !== 0 ? l : 0, e[r] = h, s(r, h);
      }, this.#x = (r) => {
        t[r] = e[r] !== 0 ? this.#m.now() : 0, s(r, e[r]);
      };
      let s = this.ttlAutopurge ? (r, h) => {
        if (i?.[r] && (clearTimeout(i[r]), i[r] = undefined), h && h !== 0 && i) {
          let l = setTimeout(() => {
            this.#p(r) && this.#v(this.#i[r], "expire");
          }, h + 1);
          l.unref && l.unref(), i[r] = l;
        }
      } : () => {};
      this.#E = (r, h) => {
        if (e[h]) {
          let l = e[h], c = t[h];
          if (!l || !c)
            return;
          r.ttl = l, r.start = c, r.now = n || o();
          let f = r.now - c;
          r.remainingTTL = l - f;
        }
      };
      let n = 0, o = () => {
        let r = this.#m.now();
        if (this.ttlResolution > 0) {
          n = r;
          let h = setTimeout(() => n = 0, this.ttlResolution);
          h.unref && h.unref();
        }
        return r;
      };
      this.getRemainingTTL = (r) => {
        let h = this.#s.get(r);
        if (h === undefined)
          return 0;
        let l = e[h], c = t[h];
        if (!l || !c)
          return 1 / 0;
        let f = (n || o()) - c;
        return l - f;
      }, this.#p = (r) => {
        let h = t[r], l = e[r];
        return !!l && !!h && (n || o()) - h > l;
      };
    }
    #x = () => {};
    #E = () => {};
    #N = () => {};
    #p = () => false;
    #X() {
      let e = new O(this.#o);
      this.#b = 0, this.#_ = e, this.#R = (t) => {
        this.#b -= e[t], e[t] = 0;
      }, this.#k = (t, i, s, n) => {
        if (this.#e(i))
          return 0;
        if (!F(s))
          if (n) {
            if (typeof n != "function")
              throw new TypeError("sizeCalculation must be a function");
            if (s = n(i, t), !F(s))
              throw new TypeError("sizeCalculation return invalid (expect positive integer)");
          } else
            throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
        return s;
      }, this.#I = (t, i, s) => {
        if (e[t] = i, this.#u) {
          let n = this.#u - e[t];
          for (;this.#b > n; )
            this.#G(true);
        }
        this.#b += e[t], s && (s.entrySize = i, s.totalCalculatedSize = this.#b);
      };
    }
    #R = (e) => {};
    #I = (e, t, i) => {};
    #k = (e, t, i, s) => {
      if (i || s)
        throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
      return 0;
    };
    *#A({ allowStale: e = this.allowStale } = {}) {
      if (this.#n)
        for (let t = this.#h;this.#V(t) && ((e || !this.#p(t)) && (yield t), t !== this.#l); )
          t = this.#c[t];
    }
    *#z({ allowStale: e = this.allowStale } = {}) {
      if (this.#n)
        for (let t = this.#l;this.#V(t) && ((e || !this.#p(t)) && (yield t), t !== this.#h); )
          t = this.#a[t];
    }
    #V(e) {
      return e !== undefined && this.#s.get(this.#i[e]) === e;
    }
    *entries() {
      for (let e of this.#A())
        this.#t[e] !== undefined && this.#i[e] !== undefined && !this.#e(this.#t[e]) && (yield [this.#i[e], this.#t[e]]);
    }
    *rentries() {
      for (let e of this.#z())
        this.#t[e] !== undefined && this.#i[e] !== undefined && !this.#e(this.#t[e]) && (yield [this.#i[e], this.#t[e]]);
    }
    *keys() {
      for (let e of this.#A()) {
        let t = this.#i[e];
        t !== undefined && !this.#e(this.#t[e]) && (yield t);
      }
    }
    *rkeys() {
      for (let e of this.#z()) {
        let t = this.#i[e];
        t !== undefined && !this.#e(this.#t[e]) && (yield t);
      }
    }
    *values() {
      for (let e of this.#A())
        this.#t[e] !== undefined && !this.#e(this.#t[e]) && (yield this.#t[e]);
    }
    *rvalues() {
      for (let e of this.#z())
        this.#t[e] !== undefined && !this.#e(this.#t[e]) && (yield this.#t[e]);
    }
    [Symbol.iterator]() {
      return this.entries();
    }
    [Symbol.toStringTag] = "LRUCache";
    find(e, t = {}) {
      for (let i of this.#A()) {
        let s = this.#t[i], n = this.#e(s) ? s.__staleWhileFetching : s;
        if (n !== undefined && e(n, this.#i[i], this))
          return this.#C(this.#i[i], t);
      }
    }
    forEach(e, t = this) {
      for (let i of this.#A()) {
        let s = this.#t[i], n = this.#e(s) ? s.__staleWhileFetching : s;
        n !== undefined && e.call(t, n, this.#i[i], this);
      }
    }
    rforEach(e, t = this) {
      for (let i of this.#z()) {
        let s = this.#t[i], n = this.#e(s) ? s.__staleWhileFetching : s;
        n !== undefined && e.call(t, n, this.#i[i], this);
      }
    }
    purgeStale() {
      let e = false;
      for (let t of this.#z({ allowStale: true }))
        this.#p(t) && (this.#v(this.#i[t], "expire"), e = true);
      return e;
    }
    info(e) {
      let t = this.#s.get(e);
      if (t === undefined)
        return;
      let i = this.#t[t], s = this.#e(i) ? i.__staleWhileFetching : i;
      if (s === undefined)
        return;
      let n = { value: s };
      if (this.#d && this.#F) {
        let o = this.#d[t], r = this.#F[t];
        if (o && r) {
          let h = o - (this.#m.now() - r);
          n.ttl = h, n.start = Date.now();
        }
      }
      return this.#_ && (n.size = this.#_[t]), n;
    }
    dump() {
      let e = [];
      for (let t of this.#A({ allowStale: true })) {
        let i = this.#i[t], s = this.#t[t], n = this.#e(s) ? s.__staleWhileFetching : s;
        if (n === undefined || i === undefined)
          continue;
        let o = { value: n };
        if (this.#d && this.#F) {
          o.ttl = this.#d[t];
          let r = this.#m.now() - this.#F[t];
          o.start = Math.floor(Date.now() - r);
        }
        this.#_ && (o.size = this.#_[t]), e.unshift([i, o]);
      }
      return e;
    }
    load(e) {
      this.clear();
      for (let [t, i] of e) {
        if (i.start) {
          let s = Date.now() - i.start;
          i.start = this.#m.now() - s;
        }
        this.#O(t, i.value, i);
      }
    }
    set(e, t, i = {}) {
      let { status: s = S.hasSubscribers ? {} : undefined } = i;
      i.status = s, s && (s.op = "set", s.key = e, t !== undefined && (s.value = t));
      let n = this.#O(e, t, i);
      return s && S.hasSubscribers && S.publish(s), n;
    }
    #O(e, t, i = {}) {
      let { ttl: s = this.ttl, start: n, noDisposeOnSet: o = this.noDisposeOnSet, sizeCalculation: r = this.sizeCalculation, status: h } = i;
      if (t === undefined)
        return h && (h.set = "deleted"), this.delete(e), this;
      let { noUpdateTTL: l = this.noUpdateTTL } = i;
      h && !this.#e(t) && (h.value = t);
      let c = this.#k(e, t, i.size || 0, r, h);
      if (this.maxEntrySize && c > this.maxEntrySize)
        return this.#v(e, "set"), h && (h.set = "miss", h.maxEntrySizeExceeded = true), this;
      let f = this.#n === 0 ? undefined : this.#s.get(e);
      if (f === undefined)
        f = this.#n === 0 ? this.#h : this.#y.length !== 0 ? this.#y.pop() : this.#n === this.#o ? this.#G(false) : this.#n, this.#i[f] = e, this.#t[f] = t, this.#s.set(e, f), this.#a[this.#h] = f, this.#c[f] = this.#h, this.#h = f, this.#n++, this.#I(f, c, h), h && (h.set = "add"), l = false, this.#j && this.#D?.(t, e, "add");
      else {
        this.#L(f);
        let g = this.#t[f];
        if (t !== g) {
          if (this.#W && this.#e(g)) {
            g.__abortController.abort(new Error("replaced"));
            let { __staleWhileFetching: p } = g;
            p !== undefined && !o && (this.#T && this.#w?.(p, e, "set"), this.#f && this.#r?.push([p, e, "set"]));
          } else
            o || (this.#T && this.#w?.(g, e, "set"), this.#f && this.#r?.push([g, e, "set"]));
          if (this.#R(f), this.#I(f, c, h), this.#t[f] = t, h) {
            h.set = "replace";
            let p = g && this.#e(g) ? g.__staleWhileFetching : g;
            p !== undefined && (h.oldValue = p);
          }
        } else
          h && (h.set = "update");
        this.#j && this.onInsert?.(t, e, t === g ? "update" : "replace");
      }
      if (s !== 0 && !this.#d && this.#H(), this.#d && (l || this.#N(f, s, n), h && this.#E(h, f)), !o && this.#f && this.#r) {
        let g = this.#r, p;
        for (;p = g?.shift(); )
          this.#S?.(...p);
      }
      return this;
    }
    pop() {
      try {
        for (;this.#n; ) {
          let e = this.#t[this.#l];
          if (this.#G(true), this.#e(e)) {
            if (e.__staleWhileFetching)
              return e.__staleWhileFetching;
          } else if (e !== undefined)
            return e;
        }
      } finally {
        if (this.#f && this.#r) {
          let e = this.#r, t;
          for (;t = e?.shift(); )
            this.#S?.(...t);
        }
      }
    }
    #G(e) {
      let t = this.#l, i = this.#i[t], s = this.#t[t];
      return this.#W && this.#e(s) ? s.__abortController.abort(new Error("evicted")) : (this.#T || this.#f) && (this.#T && this.#w?.(s, i, "evict"), this.#f && this.#r?.push([s, i, "evict"])), this.#R(t), this.#g?.[t] && (clearTimeout(this.#g[t]), this.#g[t] = undefined), e && (this.#i[t] = undefined, this.#t[t] = undefined, this.#y.push(t)), this.#n === 1 ? (this.#l = this.#h = 0, this.#y.length = 0) : this.#l = this.#a[t], this.#s.delete(i), this.#n--, t;
    }
    has(e, t = {}) {
      let { status: i = S.hasSubscribers ? {} : undefined } = t;
      t.status = i, i && (i.op = "has", i.key = e);
      let s = this.#Y(e, t);
      return S.hasSubscribers && S.publish(i), s;
    }
    #Y(e, t = {}) {
      let { updateAgeOnHas: i = this.updateAgeOnHas, status: s } = t, n = this.#s.get(e);
      if (n !== undefined) {
        let o = this.#t[n];
        if (this.#e(o) && o.__staleWhileFetching === undefined)
          return false;
        if (this.#p(n))
          s && (s.has = "stale", this.#E(s, n));
        else
          return i && this.#x(n), s && (s.has = "hit", this.#E(s, n)), true;
      } else
        s && (s.has = "miss");
      return false;
    }
    peek(e, t = {}) {
      let { status: i = D() ? {} : undefined } = t;
      i && (i.op = "peek", i.key = e), t.status = i;
      let s = this.#J(e, t);
      return S.hasSubscribers && S.publish(i), s;
    }
    #J(e, t) {
      let { status: i, allowStale: s = this.allowStale } = t, n = this.#s.get(e);
      if (n === undefined || !s && this.#p(n)) {
        i && (i.peek = n === undefined ? "miss" : "stale");
        return;
      }
      let o = this.#t[n], r = this.#e(o) ? o.__staleWhileFetching : o;
      return i && (r !== undefined ? (i.peek = "hit", i.value = r) : i.peek = "miss"), r;
    }
    #P(e, t, i, s) {
      let n = t === undefined ? undefined : this.#t[t];
      if (this.#e(n))
        return n;
      let o = new AbortController, { signal: r } = i;
      r?.addEventListener("abort", () => o.abort(r.reason), { signal: o.signal });
      let h = { signal: o.signal, options: i, context: s }, l = (w, y = false) => {
        let { aborted: a } = o.signal, m = i.ignoreFetchAbort && w !== undefined, _ = i.ignoreFetchAbort || !!(i.allowStaleOnFetchAbort && w !== undefined);
        if (i.status && (a && !y ? (i.status.fetchAborted = true, i.status.fetchError = o.signal.reason, m && (i.status.fetchAbortIgnored = true)) : i.status.fetchResolved = true), a && !m && !y)
          return f(o.signal.reason, _);
        let b = p, d = this.#t[t];
        return (d === p || d === undefined && m && y) && (w === undefined ? b.__staleWhileFetching !== undefined ? this.#t[t] = b.__staleWhileFetching : this.#v(e, "fetch") : (i.status && (i.status.fetchUpdated = true), this.#O(e, w, h.options))), w;
      }, c = (w) => (i.status && (i.status.fetchRejected = true, i.status.fetchError = w), f(w, false)), f = (w, y) => {
        let { aborted: a } = o.signal, m = a && i.allowStaleOnFetchAbort, _ = m || i.allowStaleOnFetchRejection, b = _ || i.noDeleteOnFetchRejection, d = p;
        if (this.#t[t] === p && (!b || !y && d.__staleWhileFetching === undefined ? this.#v(e, "fetch") : m || (this.#t[t] = d.__staleWhileFetching)), _)
          return i.status && d.__staleWhileFetching !== undefined && (i.status.returnedStale = true), d.__staleWhileFetching;
        if (d.__returned === d)
          throw w;
      }, g = (w, y) => {
        let a = this.#M?.(e, n, h);
        a && a instanceof Promise && a.then((m) => w(m === undefined ? undefined : m), y), o.signal.addEventListener("abort", () => {
          (!i.ignoreFetchAbort || i.allowStaleOnFetchAbort) && (w(undefined), i.allowStaleOnFetchAbort && (w = (m) => l(m, true)));
        });
      };
      i.status && (i.status.fetchDispatched = true);
      let p = new Promise(g).then(l, c), T = Object.assign(p, { __abortController: o, __staleWhileFetching: n, __returned: undefined });
      return t === undefined ? (this.#O(e, T, { ...h.options, status: undefined }), t = this.#s.get(e)) : this.#t[t] = T, T;
    }
    #e(e) {
      if (!this.#W)
        return false;
      let t = e;
      return !!t && t instanceof Promise && t.hasOwnProperty("__staleWhileFetching") && t.__abortController instanceof AbortController;
    }
    fetch(e, t = {}) {
      let i = W.hasSubscribers, { status: s = D() ? {} : undefined } = t;
      t.status = s, s && t.context && (s.context = t.context);
      let n = this.#B(e, t);
      return s && D() && i && (s.trace = true, W.tracePromise(() => n, s).catch(() => {})), n;
    }
    async#B(e, t = {}) {
      let { allowStale: i = this.allowStale, updateAgeOnGet: s = this.updateAgeOnGet, noDeleteOnStaleGet: n = this.noDeleteOnStaleGet, ttl: o = this.ttl, noDisposeOnSet: r = this.noDisposeOnSet, size: h = 0, sizeCalculation: l = this.sizeCalculation, noUpdateTTL: c = this.noUpdateTTL, noDeleteOnFetchRejection: f = this.noDeleteOnFetchRejection, allowStaleOnFetchRejection: g = this.allowStaleOnFetchRejection, ignoreFetchAbort: p = this.ignoreFetchAbort, allowStaleOnFetchAbort: T = this.allowStaleOnFetchAbort, context: w, forceRefresh: y = false, status: a, signal: m } = t;
      if (a && (a.op = "fetch", a.key = e, y && (a.forceRefresh = true)), !this.#W)
        return a && (a.fetch = "get"), this.#C(e, { allowStale: i, updateAgeOnGet: s, noDeleteOnStaleGet: n, status: a });
      let _ = { allowStale: i, updateAgeOnGet: s, noDeleteOnStaleGet: n, ttl: o, noDisposeOnSet: r, size: h, sizeCalculation: l, noUpdateTTL: c, noDeleteOnFetchRejection: f, allowStaleOnFetchRejection: g, allowStaleOnFetchAbort: T, ignoreFetchAbort: p, status: a, signal: m }, b = this.#s.get(e);
      if (b === undefined) {
        a && (a.fetch = "miss");
        let d = this.#P(e, b, _, w);
        return d.__returned = d;
      } else {
        let d = this.#t[b];
        if (this.#e(d)) {
          let E = i && d.__staleWhileFetching !== undefined;
          return a && (a.fetch = "inflight", E && (a.returnedStale = true)), E ? d.__staleWhileFetching : d.__returned = d;
        }
        let A = this.#p(b);
        if (!y && !A)
          return a && (a.fetch = "hit"), this.#L(b), s && this.#x(b), a && this.#E(a, b), d;
        let z = this.#P(e, b, _, w), v = z.__staleWhileFetching !== undefined && i;
        return a && (a.fetch = A ? "stale" : "refresh", v && A && (a.returnedStale = true)), v ? z.__staleWhileFetching : z.__returned = z;
      }
    }
    forceFetch(e, t = {}) {
      let i = W.hasSubscribers, { status: s = D() ? {} : undefined } = t;
      t.status = s, s && t.context && (s.context = t.context);
      let n = this.#K(e, t);
      return s && D() && i && (s.trace = true, W.tracePromise(() => n, s).catch(() => {})), n;
    }
    async#K(e, t = {}) {
      let i = await this.#B(e, t);
      if (i === undefined)
        throw new Error("fetch() returned undefined");
      return i;
    }
    memo(e, t = {}) {
      let { status: i = S.hasSubscribers ? {} : undefined } = t;
      t.status = i, i && (i.op = "memo", i.key = e, t.context && (i.context = t.context));
      let s = this.#Q(e, t);
      return i && (i.value = s), S.hasSubscribers && S.publish(i), s;
    }
    #Q(e, t = {}) {
      let i = this.#U;
      if (!i)
        throw new Error("no memoMethod provided to constructor");
      let { context: s, status: n, forceRefresh: o, ...r } = t;
      n && o && (n.forceRefresh = true);
      let h = this.#C(e, r), l = o || h === undefined;
      if (n && (n.memo = l ? "miss" : "hit", l || (n.value = h)), !l)
        return h;
      let c = i(e, h, { options: r, context: s });
      return n && (n.value = c), this.#O(e, c, r), c;
    }
    get(e, t = {}) {
      let { status: i = S.hasSubscribers ? {} : undefined } = t;
      t.status = i, i && (i.op = "get", i.key = e);
      let s = this.#C(e, t);
      return i && (s !== undefined && (i.value = s), S.hasSubscribers && S.publish(i)), s;
    }
    #C(e, t = {}) {
      let { allowStale: i = this.allowStale, updateAgeOnGet: s = this.updateAgeOnGet, noDeleteOnStaleGet: n = this.noDeleteOnStaleGet, status: o } = t, r = this.#s.get(e);
      if (r === undefined) {
        o && (o.get = "miss");
        return;
      }
      let h = this.#t[r], l = this.#e(h);
      return o && this.#E(o, r), this.#p(r) ? l ? (o && (o.get = "stale-fetching"), i && h.__staleWhileFetching !== undefined ? (o && (o.returnedStale = true), h.__staleWhileFetching) : undefined) : (n || this.#v(e, "expire"), o && (o.get = "stale"), i ? (o && (o.returnedStale = true), h) : undefined) : (o && (o.get = l ? "fetching" : "hit"), this.#L(r), s && this.#x(r), l ? h.__staleWhileFetching : h);
    }
    #$(e, t) {
      this.#c[t] = e, this.#a[e] = t;
    }
    #L(e) {
      e !== this.#h && (e === this.#l ? this.#l = this.#a[e] : this.#$(this.#c[e], this.#a[e]), this.#$(this.#h, e), this.#h = e);
    }
    delete(e) {
      return this.#v(e, "delete");
    }
    #v(e, t) {
      S.hasSubscribers && S.publish({ op: "delete", delete: t, key: e });
      let i = false;
      if (this.#n !== 0) {
        let s = this.#s.get(e);
        if (s !== undefined)
          if (this.#g?.[s] && (clearTimeout(this.#g?.[s]), this.#g[s] = undefined), i = true, this.#n === 1)
            this.#q(t);
          else {
            this.#R(s);
            let n = this.#t[s];
            if (this.#e(n) ? n.__abortController.abort(new Error("deleted")) : (this.#T || this.#f) && (this.#T && this.#w?.(n, e, t), this.#f && this.#r?.push([n, e, t])), this.#s.delete(e), this.#i[s] = undefined, this.#t[s] = undefined, s === this.#h)
              this.#h = this.#c[s];
            else if (s === this.#l)
              this.#l = this.#a[s];
            else {
              let o = this.#c[s];
              this.#a[o] = this.#a[s];
              let r = this.#a[s];
              this.#c[r] = this.#c[s];
            }
            this.#n--, this.#y.push(s);
          }
      }
      if (this.#f && this.#r?.length) {
        let s = this.#r, n;
        for (;n = s?.shift(); )
          this.#S?.(...n);
      }
      return i;
    }
    clear() {
      return this.#q("delete");
    }
    #q(e) {
      for (let t of this.#z({ allowStale: true })) {
        let i = this.#t[t];
        if (this.#e(i))
          i.__abortController.abort(new Error("deleted"));
        else {
          let s = this.#i[t];
          this.#T && this.#w?.(i, s, e), this.#f && this.#r?.push([i, s, e]);
        }
      }
      if (this.#s.clear(), this.#t.fill(undefined), this.#i.fill(undefined), this.#d && this.#F) {
        this.#d.fill(0), this.#F.fill(0);
        for (let t of this.#g ?? [])
          t !== undefined && clearTimeout(t);
        this.#g?.fill(undefined);
      }
      if (this.#_ && this.#_.fill(0), this.#l = 0, this.#h = 0, this.#y.length = 0, this.#b = 0, this.#n = 0, this.#f && this.#r) {
        let t = this.#r, i;
        for (;i = t?.shift(); )
          this.#S?.(...i);
      }
    }
  };
});

export { L, init_index_min };
