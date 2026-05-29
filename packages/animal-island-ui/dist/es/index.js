import { jsxs as f, jsx as n, Fragment as J } from "react/jsx-runtime";
import $, { useState as T, useCallback as B, useMemo as et, useRef as E, useEffect as P } from "react";
import { createPortal as nt } from "react-dom";
import rt from "../files/icon-leaf.40329f03.png";
const at = "animal-btn-QoKe1", it = "animal-btn-small-6Srsd", st = "animal-btn-middle-zEXqv", ot = "animal-btn-large-k9IvA", lt = "animal-btn-default-L7yE6", ct = "animal-btn-primary-9tMG9", ut = "animal-btn-dashed-wzZ-i", ht = "animal-btn-text-Tope4", dt = "animal-btn-link-pURnf", pt = "animal-btn-danger-zQ4kF", ft = "animal-btn-ghost-Ykty4", mt = "animal-btn-block-MC4pp", gt = "animal-btn-loading-PfXLM", _t = "animal-animal-btn-loading-Rf1hg", yt = "animal-btn-icon-P5CS9", R = {
  btn: at,
  "btn-small": "animal-btn-small-6Srsd",
  btnSmall: it,
  "btn-middle": "animal-btn-middle-zEXqv",
  btnMiddle: st,
  "btn-large": "animal-btn-large-k9IvA",
  btnLarge: ot,
  "btn-default": "animal-btn-default-L7yE6",
  btnDefault: lt,
  "btn-primary": "animal-btn-primary-9tMG9",
  btnPrimary: ct,
  "btn-dashed": "animal-btn-dashed-wzZ-i",
  btnDashed: ut,
  "btn-text": "animal-btn-text-Tope4",
  btnText: ht,
  "btn-link": "animal-btn-link-pURnf",
  btnLink: dt,
  "btn-danger": "animal-btn-danger-zQ4kF",
  btnDanger: pt,
  "btn-ghost": "animal-btn-ghost-Ykty4",
  btnGhost: ft,
  "btn-block": "animal-btn-block-MC4pp",
  btnBlock: mt,
  "btn-loading": "animal-btn-loading-PfXLM",
  btnLoading: gt,
  "animal-btn-loading": "animal-animal-btn-loading-Rf1hg",
  animalBtnLoading: _t,
  "btn-icon": "animal-btn-icon-P5CS9",
  btnIcon: yt
}, q = ({
  type: t = "default",
  size: a = "middle",
  danger: r = !1,
  ghost: i = !1,
  block: s = !1,
  loading: e = !1,
  disabled: o = !1,
  icon: l,
  htmlType: c = "button",
  children: _,
  className: g,
  ...b
}) => {
  const p = [
    R.btn,
    R[`btn-${t}`],
    R[`btn-${a}`],
    r && R["btn-danger"],
    i && R["btn-ghost"],
    s && R["btn-block"],
    e && R["btn-loading"],
    g
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ f(
    "button",
    {
      type: c,
      className: p,
      disabled: o,
      ...b,
      children: [
        l && !e && /* @__PURE__ */ n("span", { className: R["btn-icon"], children: l }),
        _ && /* @__PURE__ */ n("span", { children: _ })
      ]
    }
  );
};
q.displayName = "Button";
const vt = "animal-wrapper-IRrhj", bt = "animal-wrapper-disabled-MWwHK", wt = "animal-input-12WUn", xt = "animal-wrapper-no-shadow-WP9Gk", Ct = "animal-wrapper-small-mWvja", Tt = "animal-wrapper-middle-zXqMR", kt = "animal-wrapper-large-RrYM4", Pt = "animal-wrapper-error-W-VRo", Mt = "animal-wrapper-warning-miO7A", Lt = "animal-prefix-g8f1R", St = "animal-suffix-o7ywP", Rt = "animal-clear-HuR2N", L = {
  wrapper: vt,
  "wrapper-disabled": "animal-wrapper-disabled-MWwHK",
  wrapperDisabled: bt,
  input: wt,
  "wrapper-no-shadow": "animal-wrapper-no-shadow-WP9Gk",
  wrapperNoShadow: xt,
  "wrapper-small": "animal-wrapper-small-mWvja",
  wrapperSmall: Ct,
  "wrapper-middle": "animal-wrapper-middle-zXqMR",
  wrapperMiddle: Tt,
  "wrapper-large": "animal-wrapper-large-RrYM4",
  wrapperLarge: kt,
  "wrapper-error": "animal-wrapper-error-W-VRo",
  wrapperError: Pt,
  "wrapper-warning": "animal-wrapper-warning-miO7A",
  wrapperWarning: Mt,
  prefix: Lt,
  suffix: St,
  clear: Rt
}, Ot = ({
  size: t = "middle",
  prefix: a,
  suffix: r,
  allowClear: i = !1,
  status: s,
  shadow: e = !1,
  disabled: o = !1,
  className: l,
  value: c,
  defaultValue: _,
  onChange: g,
  onClear: b,
  ...p
}) => {
  const [x, u] = T(_ ?? ""), m = c !== void 0, h = m ? c : x, w = B(
    (d) => {
      m || u(d.target.value), g?.(d);
    },
    [m, g]
  ), z = B(() => {
    m || u(""), b?.();
    const d = new Event("input", { bubbles: !0 }), A = { value: "" };
    g?.({
      target: A,
      currentTarget: A,
      nativeEvent: d
    });
  }, [m, g, b]), I = [
    L.wrapper,
    L[`wrapper-${t}`],
    s && L[`wrapper-${s}`],
    o && L["wrapper-disabled"],
    !e && L["wrapper-no-shadow"],
    l
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ f("span", { className: I, children: [
    a && /* @__PURE__ */ n("span", { className: L.prefix, children: a }),
    /* @__PURE__ */ n(
      "input",
      {
        className: L.input,
        disabled: o,
        value: h,
        onChange: w,
        ...p
      }
    ),
    i && h && !o && /* @__PURE__ */ n(
      "span",
      {
        className: L.clear,
        onClick: z,
        role: "button",
        tabIndex: -1,
        children: "×"
      }
    ),
    r && /* @__PURE__ */ n("span", { className: L.suffix, children: r })
  ] });
};
Ot.displayName = "Input";
const Dt = "animal-switch-disabled-U5tjL", At = "animal-switch-checked-6HKL4", Nt = "animal-switch-small-jkWtD", Bt = "animal-handle-KgZ7M", zt = "animal-inner-5x97M", It = "animal-switch-loading--3JYL", Et = "animal-spinner-QK4sP", Ft = "animal-animal-spin-P6YYa", O = {
  switch: "animal-switch-NQPLj",
  "switch-disabled": "animal-switch-disabled-U5tjL",
  switchDisabled: Dt,
  "switch-checked": "animal-switch-checked-6HKL4",
  switchChecked: At,
  "switch-small": "animal-switch-small-jkWtD",
  switchSmall: Nt,
  handle: Bt,
  inner: zt,
  "switch-loading": "animal-switch-loading--3JYL",
  switchLoading: It,
  spinner: Et,
  "animal-spin": "animal-animal-spin-P6YYa",
  animalSpin: Ft
}, $t = ({
  checked: t,
  defaultChecked: a = !1,
  size: r = "default",
  disabled: i = !1,
  loading: s = !1,
  checkedChildren: e,
  unCheckedChildren: o,
  onChange: l,
  className: c
}) => {
  const [_, g] = T(a), b = t !== void 0, p = b ? t : _, x = B(() => {
    if (i || s) return;
    const m = !p;
    b || g(m), l?.(m);
  }, [i, s, p, b, l]), u = [
    O.switch,
    O[`switch-${r}`],
    p && O["switch-checked"],
    i && O["switch-disabled"],
    s && O["switch-loading"],
    c
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ f(
    "button",
    {
      type: "button",
      role: "switch",
      "aria-checked": p,
      className: u,
      onClick: x,
      disabled: i,
      children: [
        /* @__PURE__ */ n("span", { className: O.handle, children: s && /* @__PURE__ */ n("span", { className: O.spinner }) }),
        /* @__PURE__ */ n("span", { className: O.inner, children: p ? e : o })
      ]
    }
  );
};
$t.displayName = "Switch";
const U = ({ children: t, className: a, style: r }) => /* @__PURE__ */ n(
  "div",
  {
    className: `animal-cursor${a ? ` ${a}` : ""}`,
    style: r,
    children: t
  }
);
U.displayName = "Cursor";
const Y = (t) => t == null || typeof t == "boolean" ? 0 : typeof t == "string" || typeof t == "number" ? String(t).length : Array.isArray(t) ? t.reduce((a, r) => a + Y(r), 0) : $.isValidElement(t) ? Y(t.props.children) : 0, H = (t, a, r = "tw") => {
  if (a.stopped || t == null || typeof t == "boolean") return null;
  if (typeof t == "string" || typeof t == "number") {
    const i = String(t);
    if (a.remaining >= i.length)
      return a.remaining -= i.length, i;
    const s = i.slice(0, a.remaining);
    return a.remaining = 0, a.stopped = !0, s;
  }
  if (Array.isArray(t))
    return t.map((i, s) => /* @__PURE__ */ n($.Fragment, { children: H(i, a, `${r}-${s}`) }, `${r}-${s}`));
  if ($.isValidElement(t)) {
    const i = t.props, s = H(i.children, a, r);
    return $.cloneElement(t, void 0, s);
  }
  return null;
}, K = ({
  children: t,
  speed: a = 90,
  trigger: r,
  autoPlay: i = !0,
  onDone: s
}) => {
  const e = et(() => Y(t), [t]), [o, l] = T(i ? 0 : e), c = E(null);
  return P(() => {
    if (c.current && window.clearInterval(c.current), !i) {
      l(e);
      return;
    }
    if (l(0), e !== 0)
      return c.current = window.setInterval(() => {
        l((g) => g >= e ? (c.current && window.clearInterval(c.current), g) : g + 1);
      }, a), () => {
        c.current && window.clearInterval(c.current);
      };
  }, [e, a, r, i]), P(() => {
    e > 0 && o >= e && s?.();
  }, [o, e]), /* @__PURE__ */ n(J, { children: H(t, { remaining: o, stopped: !1 }) });
};
K.displayName = "Typewriter";
const Gt = "animal-mask-hAWeP", jt = "animal-modal-d0zyM", qt = "animal-modalClipped-7IuAw", Yt = "animal-header-udOSi", Ht = "animal-title-s6pv3", Ut = "animal-body--aiyx", Wt = "animal-footer-9Ib-a", D = {
  mask: Gt,
  modal: jt,
  modalClipped: qt,
  header: Yt,
  title: Ht,
  body: Ut,
  footer: Wt
}, Vt = () => /* @__PURE__ */ n("svg", { style: { position: "absolute", width: 0, height: 0 }, "aria-hidden": !0, children: /* @__PURE__ */ n("clipPath", { id: "animal-modal-clip", clipPathUnits: "objectBoundingBox", children: /* @__PURE__ */ n("path", { d: "M0.501,0.005 L0.501,0.005 L0.523,0.005 L0.549,0.006 C0.704,0.01,0.796,0.017,0.825,0.027 L0.827,0.028 C0.872,0.045,0.939,0.044,0.978,0.17 C1,0.254,1,0.365,0.99,0.505 L0.988,0.513 C0.979,0.558,0.971,0.598,0.965,0.633 C0.956,0.689,0.979,0.77,0.964,0.865 C0.953,0.928,0.921,0.966,0.869,0.979 C0.821,0.986,0.773,0.992,0.726,0.995 L0.712,0.996 L0.694,0.997 C0.648,1,0.586,1,0.507,1 L0.501,1 L0.464,1 C0.385,1,0.325,0.998,0.283,0.995 C0.234,0.992,0.184,0.987,0.133,0.979 C0.081,0.966,0.05,0.928,0.039,0.865 C0.023,0.77,0.047,0.689,0.037,0.633 C0.031,0.595,0.023,0.552,0.013,0.505 C-0.006,0.365,-0.002,0.254,0.024,0.17 C0.064,0.045,0.13,0.045,0.174,0.028 L0.175,0.028 C0.204,0.017,0.303,0.009,0.474,0.005 L0.501,0.005" }) }) }), Xt = ({
  open: t,
  title: a,
  width: r = 520,
  maskClosable: i = !0,
  footer: s,
  onClose: e,
  onOk: o,
  children: l,
  className: c,
  typeSpeed: _ = 80,
  typewriter: g = !0
}) => {
  const [b, p] = T(0);
  P(() => {
    t && p((w) => w + 1);
  }, [t]), P(() => {
    if (!t) return;
    const w = (z) => {
      z.key === "Escape" && e?.();
    };
    return document.addEventListener("keydown", w), () => document.removeEventListener("keydown", w);
  }, [t, e]), P(() => (t && (document.body.style.overflow = "hidden"), () => {
    document.body.style.overflow = "";
  }), [t]);
  const x = B(() => {
    i && e?.();
  }, [i, e]), u = B((w) => {
    w.stopPropagation();
  }, []);
  if (!t) return null;
  const m = /* @__PURE__ */ f(J, { children: [
    /* @__PURE__ */ n(q, { type: "primary", onClick: e, children: "取消" }),
    /* @__PURE__ */ n(q, { type: "primary", onClick: o, children: "确定" })
  ] }), h = /* @__PURE__ */ n(U, { children: /* @__PURE__ */ n("div", { className: D.mask, onClick: x, children: /* @__PURE__ */ f(
    "div",
    {
      className: [D.modal, c].filter(Boolean).join(" "),
      style: { width: r },
      onClick: u,
      role: "dialog",
      "aria-modal": "true",
      children: [
        /* @__PURE__ */ n(Vt, {}),
        /* @__PURE__ */ f("div", { className: D.modalClipped, children: [
          a && /* @__PURE__ */ n("div", { className: D.header, children: a && /* @__PURE__ */ n("div", { className: D.title, children: a }) }),
          /* @__PURE__ */ n("div", { className: D.body, children: g ? /* @__PURE__ */ n(K, { speed: _, trigger: b, children: l }) : l }),
          s !== null && /* @__PURE__ */ n("div", { className: D.footer, children: s === void 0 ? m : s })
        ] })
      ]
    }
  ) }) });
  return nt(h, document.body);
};
Xt.displayName = "Modal";
const Zt = "animal-card-DJ515", Qt = "animal-card-title-PL-WB", Jt = "animal-card-dashed-fqnm1", Kt = "animal-card-app-pink-3Eo8d", te = "animal-card-purple-Gq7sR", ee = "animal-card-app-blue-GHH1a", ne = "animal-card-app-yellow-DWB-L", re = "animal-card-app-orange-V5yD7", ae = "animal-card-app-teal-R5kFG", ie = "animal-card-app-green-xlNUs", se = "animal-card-app-red-DzE0l", oe = "animal-card-lime-green-KiJbe", le = "animal-card-yellow-green-4c-lF", ce = "animal-card-brown-hLCrx", ue = "animal-card-warm-peach-pink-RlSVo", F = {
  card: Zt,
  "card-title": "animal-card-title-PL-WB",
  cardTitle: Qt,
  "card-dashed": "animal-card-dashed-fqnm1",
  cardDashed: Jt,
  "card-app-pink": "animal-card-app-pink-3Eo8d",
  cardAppPink: Kt,
  "card-purple": "animal-card-purple-Gq7sR",
  cardPurple: te,
  "card-app-blue": "animal-card-app-blue-GHH1a",
  cardAppBlue: ee,
  "card-app-yellow": "animal-card-app-yellow-DWB-L",
  cardAppYellow: ne,
  "card-app-orange": "animal-card-app-orange-V5yD7",
  cardAppOrange: re,
  "card-app-teal": "animal-card-app-teal-R5kFG",
  cardAppTeal: ae,
  "card-app-green": "animal-card-app-green-xlNUs",
  cardAppGreen: ie,
  "card-app-red": "animal-card-app-red-DzE0l",
  cardAppRed: se,
  "card-lime-green": "animal-card-lime-green-KiJbe",
  cardLimeGreen: oe,
  "card-yellow-green": "animal-card-yellow-green-4c-lF",
  cardYellowGreen: le,
  "card-brown": "animal-card-brown-hLCrx",
  cardBrown: ce,
  "card-warm-peach-pink": "animal-card-warm-peach-pink-RlSVo",
  cardWarmPeachPink: ue
}, he = ({
  type: t = "default",
  color: a = "default",
  children: r,
  className: i,
  style: s,
  ...e
}) => {
  const o = [
    F.card,
    t === "title" && F["card-title"],
    t === "dashed" && F["card-dashed"],
    a !== "default" && F[`card-${a}`],
    i
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n(
    "div",
    {
      className: o,
      style: s,
      ...e,
      children: r
    }
  );
};
he.displayName = "Card";
const de = "animal-footer-5DMOR", pe = "animal-tree-KZ8hX", W = {
  footer: de,
  tree: pe
}, fe = ({
  type: t = "tree",
  className: a,
  style: r
}) => {
  const i = [W.footer, W[t], a].filter(Boolean).join(" ");
  return /* @__PURE__ */ n("div", { className: i, style: r });
};
fe.displayName = "Footer";
const me = "animal-faqCard-5jlOE", ge = "animal-disabled-9DAjm", _e = "animal-questionHeader-iqP87", ye = "animal-questionIcon-xRkdp", ve = "animal-expanded-a8Eze", be = "animal-questionText-jVpUv", we = "animal-leafDecoration-RoK4H", xe = "animal-answerWrapper-tzFtx", Ce = "animal-answerContent-ppsk-", S = {
  faqCard: me,
  disabled: ge,
  questionHeader: _e,
  questionIcon: ye,
  expanded: ve,
  questionText: be,
  leafDecoration: we,
  answerWrapper: xe,
  answerContent: Ce
}, Te = ({
  question: t,
  answer: a,
  defaultExpanded: r = !1,
  disabled: i = !1,
  className: s,
  style: e
}) => {
  const [o, l] = T(r), c = () => {
    i || l(!o);
  }, _ = [
    S.faqCard,
    o && S.expanded,
    i && S.disabled,
    s
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ f("div", { className: _, style: e, children: [
    /* @__PURE__ */ f(
      "button",
      {
        className: S.questionHeader,
        onClick: c,
        disabled: i,
        "aria-expanded": o,
        children: [
          /* @__PURE__ */ n("span", { className: S.questionIcon, children: o ? "−" : "+" }),
          /* @__PURE__ */ n("span", { className: S.questionText, children: t }),
          /* @__PURE__ */ n("span", { className: S.leafDecoration, children: /* @__PURE__ */ n("svg", { viewBox: "0 0 24 24", width: "20", height: "20", children: /* @__PURE__ */ n(
            "path",
            {
              fill: "currentColor",
              d: "M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"
            }
          ) }) })
        ]
      }
    ),
    /* @__PURE__ */ n("div", { className: S.answerWrapper, children: /* @__PURE__ */ n("div", { className: S.answerContent, children: a }) })
  ] });
};
Te.displayName = "Collapse";
const ke = "animal-acDatetime-hVKh7", Pe = "animal-acDate-rhO3k", Me = "animal-acWeekday-bxDHR", Le = "animal-acMonthday-1jUmX", Se = "animal-acTime-S-twb", Re = "animal-acColon-g4vuJ", N = {
  acDatetime: ke,
  acDate: Pe,
  acWeekday: Me,
  acMonthday: Le,
  acTime: Se,
  acColon: Re
}, Oe = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], De = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], Ae = ({ className: t }) => {
  const [a, r] = T(/* @__PURE__ */ new Date());
  return P(() => {
    const i = setInterval(() => r(/* @__PURE__ */ new Date()), 1e3);
    return () => clearInterval(i);
  }, []), /* @__PURE__ */ n(U, { children: /* @__PURE__ */ f("div", { className: `${N.acDatetime} ${t || ""}`, children: [
    /* @__PURE__ */ f("div", { className: N.acDate, children: [
      /* @__PURE__ */ n("span", { className: N.acWeekday, children: Oe[a.getDay()] }),
      /* @__PURE__ */ f("span", { className: N.acMonthday, children: [
        De[a.getMonth()],
        " ",
        a.getDate()
      ] })
    ] }),
    /* @__PURE__ */ f("div", { className: N.acTime, children: [
      a.getHours().toString().padStart(2, "0"),
      /* @__PURE__ */ n("span", { className: N.acColon, children: ":" }),
      a.getMinutes().toString().padStart(2, "0")
    ] })
  ] }) });
};
Ae.displayName = "Time";
const Ne = "animal-phoneContainer-49yKw", Be = "animal-phone-bXgSa", ze = "animal-statusBar-Vb96q", Ie = "animal-time-cokU-", Ee = "animal-signalIcons-TuL3l", Fe = "animal-screenContent-oyJF-", $e = "animal-homeScreen-no2yS", Ge = "animal-grasswave-l6cyA", je = "animal-dateDisplay-cnvu8", qe = "animal-dateDisplayHeader-32i0J", Ye = "animal-blink--R0wf", He = "animal-dayText-7NEMb", Ue = "animal-appsGrid-opTs8", We = "animal-appItem-1NmDt", Ve = "animal-appIcon-tTPIg", Xe = "animal-iconBounce-n4Boc", Ze = "animal-appIconOffset-b5SZG", Qe = "animal-iconBounceOffset-XfsXI", Je = "animal-appItemOffset-FEStg", Ke = "animal-iconCamera-c-grH", tn = "animal-iconMiles-L9Cow", en = "animal-iconCritterpedia-okU95", nn = "animal-iconDiy-gZgxn", rn = "animal-iconDesign-YvE9z", an = "animal-iconMap-xmfHe", sn = "animal-iconVariant-k-kkB", on = "animal-iconHelicopter-HV-TH", ln = "animal-iconChat-TVZXY", cn = "animal-iconWifi-RoLJH", un = "animal-iconLocation-YfhoK", hn = "animal-iconPage-wMmBC", dn = "animal-badge-drGmk", pn = "animal-pageIndicator-mQ-Pg", v = {
  phoneContainer: Ne,
  phone: Be,
  statusBar: ze,
  time: Ie,
  signalIcons: Ee,
  screenContent: Fe,
  homeScreen: $e,
  grasswave: Ge,
  dateDisplay: je,
  dateDisplayHeader: qe,
  blink: Ye,
  dayText: He,
  appsGrid: Ue,
  appItem: We,
  appIcon: Ve,
  iconBounce: Xe,
  appIconOffset: Ze,
  iconBounceOffset: Qe,
  appItemOffset: Je,
  iconCamera: Ke,
  iconMiles: tn,
  iconCritterpedia: en,
  iconDiy: nn,
  iconDesign: rn,
  iconMap: an,
  iconVariant: sn,
  iconHelicopter: on,
  iconChat: ln,
  iconWifi: cn,
  iconLocation: un,
  iconPage: hn,
  badge: dn,
  pageIndicator: pn
}, fn = [
  { id: "camera", iconClass: "iconCamera", color: "#B77DEE", hasNewMessage: !0 },
  { id: "app", iconClass: "iconMiles", color: "#889DF0", offset: !0 },
  { id: "critterpedia", iconClass: "iconCritterpedia", color: "#F7CD67" },
  { id: "diy", iconClass: "iconDiy", color: "#E59266" },
  { id: "shopping", iconClass: "iconDesign", color: "#F8A6B2" },
  { id: "variant", iconClass: "iconMap", color: "#82D5BB", hasNewMessage: !0 },
  { id: "design", iconClass: "iconVariant", color: "#8AC68A" },
  { id: "map", iconClass: "iconHelicopter", color: "#FC736D" },
  { id: "chat", iconClass: "iconChat", color: "#D1DA49" }
], Er = ({ className: t }) => {
  const [a, r] = T(/* @__PURE__ */ new Date());
  P(() => {
    const c = setInterval(() => {
      r(/* @__PURE__ */ new Date());
    }, 1e3);
    return () => clearInterval(c);
  }, []);
  const i = a.getHours(), s = a.getMinutes(), e = i >= 12 ? "PM" : "AM", o = i % 12 || 12, l = s.toString().padStart(2, "0");
  return /* @__PURE__ */ n("div", { className: `${v.phoneContainer} ${t || ""}`, children: /* @__PURE__ */ n("div", { className: v.phone, children: /* @__PURE__ */ n("div", { className: v.screenContent, children: /* @__PURE__ */ f("div", { className: v.homeScreen, children: [
    /* @__PURE__ */ f("div", { className: v.dateDisplay, children: [
      /* @__PURE__ */ f("div", { className: v.dateDisplayHeader, children: [
        /* @__PURE__ */ n("span", { className: v.iconWifi }),
        /* @__PURE__ */ f("div", { children: [
          o,
          /* @__PURE__ */ n("span", { className: v.blink, children: ":" }),
          l,
          e
        ] }),
        /* @__PURE__ */ n("span", { className: v.iconLocation })
      ] }),
      /* @__PURE__ */ n("div", { className: v.dayText, children: "Welcome!" })
    ] }),
    /* @__PURE__ */ n("div", { className: v.appsGrid, children: fn.map((c) => /* @__PURE__ */ f(
      "div",
      {
        className: `${v.appItem} ${c.offset ? v.appItemOffset : ""}`,
        style: { backgroundColor: c.color },
        children: [
          c.hasNewMessage && /* @__PURE__ */ n("span", { className: v.badge }),
          /* @__PURE__ */ n(
            "span",
            {
              className: `${v.appIcon} ${v[c.iconClass]} ${c.offset ? v.appIconOffset : ""}`
            }
          )
        ]
      },
      c.id
    )) }),
    /* @__PURE__ */ n("div", { className: v.pageIndicator, children: /* @__PURE__ */ n("span", { className: v.iconPage }) })
  ] }) }) }) });
}, mn = "animal-divider-ZBhpE", gn = "animal-line-teal-Z80hb", _n = "animal-line-white-VDY1E", yn = "animal-line-yellow-ifvJz", vn = "animal-wave-yellow-AO-io", V = {
  divider: mn,
  "line-teal": "animal-line-teal-Z80hb",
  lineTeal: gn,
  "line-white": "animal-line-white-VDY1E",
  lineWhite: _n,
  "line-yellow": "animal-line-yellow-ifvJz",
  lineYellow: yn,
  "wave-yellow": "animal-wave-yellow-AO-io",
  waveYellow: vn
}, bn = ({ type: t = "line-brown", className: a, style: r }) => {
  const i = [V.divider, V[t], a].filter(Boolean).join(" ");
  return /* @__PURE__ */ n("div", { className: i, style: r });
};
bn.displayName = "Divider";
const wn = "animal-icon-wUFR-", xn = "animal-iconBounce-Q1e3X", Cn = "animal-icon-miles-oVFnM", Tn = "animal-icon-camera-W9x4U", kn = "animal-icon-chat-dfYOk", Pn = "animal-icon-critterpedia-vDPSY", Mn = "animal-icon-design-8gBms", Ln = "animal-icon-diy-AwPHs", Sn = "animal-icon-helicopter-w6ZL6", Rn = "animal-icon-map-ogQk4", On = "animal-icon-shopping-TSh2U", Dn = "animal-icon-variant-E6wqy", An = "animal-iconList-MRyTC", Nn = "animal-iconListItem-nTF3l", Bn = "animal-iconListLabel-t2M3-", G = {
  icon: wn,
  "icon-bounce": "animal-icon-bounce-1MvWH",
  iconBounce: xn,
  "icon-miles": "animal-icon-miles-oVFnM",
  iconMiles: Cn,
  "icon-camera": "animal-icon-camera-W9x4U",
  iconCamera: Tn,
  "icon-chat": "animal-icon-chat-dfYOk",
  iconChat: kn,
  "icon-critterpedia": "animal-icon-critterpedia-vDPSY",
  iconCritterpedia: Pn,
  "icon-design": "animal-icon-design-8gBms",
  iconDesign: Mn,
  "icon-diy": "animal-icon-diy-AwPHs",
  iconDiy: Ln,
  "icon-helicopter": "animal-icon-helicopter-w6ZL6",
  iconHelicopter: Sn,
  "icon-map": "animal-icon-map-ogQk4",
  iconMap: Rn,
  "icon-shopping": "animal-icon-shopping-TSh2U",
  iconShopping: On,
  "icon-variant": "animal-icon-variant-E6wqy",
  iconVariant: Dn,
  iconList: An,
  iconListItem: Nn,
  iconListLabel: Bn
}, Fr = ({
  name: t,
  size: a = 24,
  className: r,
  style: i,
  bounce: s = !1,
  ...e
}) => /* @__PURE__ */ n(
  "span",
  {
    className: `${G.icon} ${G[t]} ${s ? G["icon-bounce"] : ""} ${r || ""}`,
    style: {
      width: a,
      height: a,
      ...i
    },
    ...e
  }
), $r = [
  { name: "icon-miles", label: "NookMiles" },
  { name: "icon-camera", label: "Camera" },
  { name: "icon-chat", label: "Chat" },
  { name: "icon-critterpedia", label: "Critterpedia" },
  { name: "icon-design", label: "Design" },
  { name: "icon-diy", label: "DIY" },
  { name: "icon-helicopter", label: "Helicopter" },
  { name: "icon-map", label: "Map" },
  { name: "icon-shopping", label: "Shopping" },
  { name: "icon-variant", label: "Variant" }
], zn = "animal-wrapper-pbOTq", In = "animal-trigger-2-Ahh", En = "animal-open-867xo", Fn = "animal-value-623RB", $n = "animal-placeholder-vpC8E", Gn = "animal-arrow-xNbxA", jn = "animal-dropdown-0l6jF", qn = "animal-option-GEkLI", Yn = "animal-active-jtSpt", Hn = "animal-hovered-N-cco", Un = "animal-pillBar-O9cTb", Wn = "animal-optionDot-FQtyw", Vn = "animal-disabled-Oy12C", C = {
  wrapper: zn,
  trigger: In,
  open: En,
  value: Fn,
  placeholder: $n,
  arrow: Gn,
  dropdown: jn,
  option: qn,
  active: Yn,
  hovered: Hn,
  pillBar: Un,
  optionDot: Wn,
  disabled: Vn
}, Xn = ({
  options: t,
  value: a,
  onChange: r,
  placeholder: i = "请选择",
  disabled: s = !1
}) => {
  const [e, o] = T(!1), [l, c] = T(null), [_, g] = T({}), [b, p] = T(!1), x = E(null), u = t.find((h) => h.key === a)?.label || i;
  P(() => {
    const h = (w) => {
      x.current && !x.current.contains(w.target) && (o(!1), p(!1));
    };
    return e && document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, [e]), P(() => {
    if (e && x.current) {
      const h = x.current.getBoundingClientRect(), w = window.innerWidth, z = window.innerHeight, I = t.length * 44 + 24, d = {
        position: "absolute"
      };
      h.right + 200 > w ? (d.right = "100%", d.marginRight = "6px", d.left = "auto") : (d.left = "100%", d.marginLeft = "6px", d.right = "auto");
      const A = z - h.bottom, tt = h.top;
      A < I && tt > A ? (d.top = "auto", d.bottom = "100%", d.marginBottom = "6px", delete d.transform) : A < I || h.top < I ? (d.top = "100%", d.marginTop = "6px", d.bottom = "auto", delete d.transform) : (d.top = "50%", d.transform = "translateY(-50%)", d.bottom = "auto"), g(d), requestAnimationFrame(() => {
        p(!0);
      });
    } else e || p(!1);
  }, [e, t.length]);
  const m = (h) => {
    r(h), o(!1), p(!1);
  };
  return /* @__PURE__ */ f(
    "div",
    {
      ref: x,
      className: `${C.wrapper} ${s ? C.disabled : ""}`,
      children: [
        /* @__PURE__ */ f(
          "div",
          {
            className: `${C.trigger} ${e ? C.open : ""}`,
            onClick: () => !s && o(!e),
            children: [
              /* @__PURE__ */ n("span", { className: a ? C.value : C.placeholder, children: u }),
              /* @__PURE__ */ n("span", { className: C.arrow, children: /* @__PURE__ */ n("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ n("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
            ]
          }
        ),
        e && b && /* @__PURE__ */ n("div", { className: C.dropdown, style: _, children: t.map((h) => /* @__PURE__ */ f(
          "div",
          {
            className: `${C.option} ${a === h.key ? C.active : ""} ${l === h.key ? C.hovered : ""}`,
            onClick: () => m(h.key),
            onMouseEnter: () => c(h.key),
            onMouseLeave: () => c(null),
            children: [
              /* @__PURE__ */ n("span", { className: C.optionDot }),
              h.label,
              a === h.key && /* @__PURE__ */ n("div", { className: C.pillBar })
            ]
          },
          h.key
        )) })
      ]
    }
  );
};
Xn.displayName = "Select";
const Zn = "animal-tabs-I3QAo", Qn = "animal-tabList--fYUP", Jn = "animal-tabItem-Ehph4", Kn = "animal-active-AoX4Y", tr = "animal-tabIcon-Aiu-T", er = "animal-tabLabel-bCauA", nr = "animal-tabLeaf-1ud9k", rr = "animal-tabLeafStatic-52CX9", ar = "animal-tabContent-zDlRq", ir = "animal-tabContentInner-Y5kRC", k = {
  tabs: Zn,
  tabList: Qn,
  tabItem: Jn,
  active: Kn,
  "active-shadow": "animal-active-shadow-vEKIu",
  tabIcon: tr,
  tabLabel: er,
  tabLeaf: nr,
  tabLeafStatic: rr,
  tabContent: ar,
  tabContentInner: ir
}, sr = ({
  items: t,
  defaultActiveKey: a,
  activeKey: r,
  onChange: i,
  className: s,
  style: e,
  leafAnimation: o = !0,
  shadow: l = !0
}) => {
  const [c, _] = T(
    a || t[0]?.key
  ), g = r !== void 0 ? r : c, b = (u) => {
    r === void 0 && _(u), i?.(u);
  }, p = t.find((u) => u.key === g), x = [k.tabs, s].filter(Boolean).join(" ");
  return /* @__PURE__ */ f("div", { className: x, style: e, children: [
    /* @__PURE__ */ n("div", { className: k.tabList, children: t.map((u) => {
      const m = u.key === g;
      return /* @__PURE__ */ f(
        "button",
        {
          className: `${k.tabItem} ${m ? k.active : ""} ${m && l ? k["active-shadow"] : ""}`,
          onClick: () => b(u.key),
          children: [
            /* @__PURE__ */ n("span", { className: k.tabIcon, children: m ? "●" : "○" }),
            /* @__PURE__ */ n("span", { className: k.tabLabel, children: u.label }),
            m && /* @__PURE__ */ n("img", { src: rt, alt: "", className: `${k.tabLeaf} ${o ? "" : k.tabLeafStatic}` })
          ]
        },
        u.key
      );
    }) }),
    /* @__PURE__ */ n("div", { className: k.tabContent, children: /* @__PURE__ */ n("div", { className: k.tabContentInner, children: p?.children }) })
  ] });
};
sr.displayName = "Tabs";
const or = "animal-checkboxGroup-q3P6l", lr = "animal-horizontal-fBBSw", cr = "animal-vertical-klL45", ur = "animal-checkboxItem-DxKFM", hr = "animal-small-2wCHI", dr = "animal-box-bIDkg", pr = "animal-checkmark-Ub21Y", fr = "animal-label-L0ila", mr = "animal-middle-VUB-E", gr = "animal-large-QQxPe", _r = "animal-checked-S7gPe", yr = "animal-animal-checkbox-pop-0cWeC", vr = "animal-disabled-zDC-1", br = "animal-groupDisabled-LvBFd", M = {
  checkboxGroup: or,
  horizontal: lr,
  vertical: cr,
  checkboxItem: ur,
  small: hr,
  box: dr,
  checkmark: pr,
  label: fr,
  middle: mr,
  large: gr,
  checked: _r,
  "animal-checkbox-pop": "animal-animal-checkbox-pop-0cWeC",
  animalCheckboxPop: yr,
  disabled: vr,
  groupDisabled: br
};
function wr(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var j = { exports: {} };
var X;
function xr() {
  return X || (X = 1, (function(t) {
    (function() {
      var a = {}.hasOwnProperty;
      function r() {
        for (var e = "", o = 0; o < arguments.length; o++) {
          var l = arguments[o];
          l && (e = s(e, i(l)));
        }
        return e;
      }
      function i(e) {
        if (typeof e == "string" || typeof e == "number")
          return e;
        if (typeof e != "object")
          return "";
        if (Array.isArray(e))
          return r.apply(null, e);
        if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]"))
          return e.toString();
        var o = "";
        for (var l in e)
          a.call(e, l) && e[l] && (o = s(o, l));
        return o;
      }
      function s(e, o) {
        return o ? e ? e + " " + o : e + o : e;
      }
      t.exports ? (r.default = r, t.exports = r) : window.classNames = r;
    })();
  })(j)), j.exports;
}
var Cr = xr();
const Z = /* @__PURE__ */ wr(Cr), Tr = ({
  value: t,
  defaultValue: a = [],
  options: r,
  size: i = "middle",
  disabled: s = !1,
  direction: e = "horizontal",
  onChange: o,
  className: l,
  style: c
}) => {
  const [_, g] = T(a), b = t !== void 0, p = b ? t : _, x = B(
    (u, m) => {
      if (s || m) return;
      const h = p.includes(u) ? p.filter((w) => w !== u) : [...p, u];
      b || g(h), o?.(h);
    },
    [s, p, b, o]
  );
  return /* @__PURE__ */ n(
    "div",
    {
      className: Z(
        M.checkboxGroup,
        M[e],
        { [M.groupDisabled]: s },
        l
      ),
      style: c,
      children: r.map((u) => {
        const m = p.includes(u.value), h = s || u.disabled;
        return /* @__PURE__ */ f(
          "label",
          {
            className: Z(
              M.checkboxItem,
              M[i],
              {
                [M.checked]: m,
                [M.disabled]: h
              }
            ),
            onClick: () => x(u.value, u.disabled),
            children: [
              /* @__PURE__ */ n(
                "span",
                {
                  className: M.box,
                  role: "checkbox",
                  "aria-checked": m,
                  tabIndex: h ? -1 : 0,
                  onKeyDown: (w) => {
                    (w.key === " " || w.key === "Enter") && (w.preventDefault(), x(u.value, u.disabled));
                  },
                  children: m && /* @__PURE__ */ n("span", { className: M.checkmark, children: /* @__PURE__ */ n("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ n("path", { d: "M2 8L6 12L14 4", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
                }
              ),
              /* @__PURE__ */ n("span", { className: M.label, children: u.label })
            ]
          },
          String(u.value)
        );
      })
    }
  );
};
Tr.displayName = "Checkbox";
const y = {
  comment: "#6b5e50",
  string: "#a8d4a0",
  keyword: "#d4a0e0",
  react: "#e06c75",
  component: "#80c0e0",
  func: "#61afef",
  prop: "#e8c87a",
  jsx: "#f0a870",
  operator: "#d4b896",
  number: "#a8d4a0",
  default: "#e8d5bc"
}, kr = {
  padding: "20px 24px",
  background: "#2b2118",
  border: "1px solid #3d3028",
  borderRadius: 20,
  fontSize: 14,
  lineHeight: 1.7,
  fontFamily: "'SF Mono', 'Fira Code', 'Cascadia Code', Consolas, monospace",
  fontWeight: 600,
  color: "#e8d5bc",
  whiteSpace: "pre",
  overflow: "auto",
  tabSize: 4
}, Pr = (t) => {
  const a = [], r = (e, o) => {
    let l;
    const c = new RegExp(e.source, e.flags.includes("g") ? e.flags : e.flags + "g");
    for (; (l = c.exec(t)) !== null; )
      a.push({
        start: l.index,
        end: l.index + l[0].length,
        color: o
      });
  };
  r(/\/\*[\s\S]*?\*\//g, y.comment), r(/\/\/.*$/gm, y.comment), r(/`[^`]*`/g, y.string), r(/"[^"]*"/g, y.string), r(/'[^']*'/g, y.string), r(/<\/?[A-Z][\w.$]*/g, y.jsx), r(/<\/?[a-z][\w-]*/g, y.jsx), r(/\/?>/g, y.jsx), r(/\b(React|useState|useEffect|useCallback|useMemo|useRef|useContext|useReducer|useLayoutEffect|useImperativeHandle|useDebugValue|createContext|createElement|cloneElement|Fragment|Suspense|lazy|memo|forwardRef|useId|FC|ReactNode|ReactElement|CSSProperties)\b/g, y.react), r(/\b(true|false)\b/g, y.keyword), r(/\b(null|undefined|void|NaN|Infinity)\b/gi, y.keyword), r(/\b\d+\.?\d*\b/g, y.number), r(/\b(import|from|as|export|default|const|let|var|function|return|if|else|for|while|switch|case|break|continue|try|catch|throw|finally|new|typeof|instanceof|async|await|type|interface)\b/gi, y.keyword), r(/\b[A-Z][a-zA-Z0-9_$]*\b/g, y.component), r(/\b[a-z][a-zA-Z0-9_$]*\s*(?=\()/g, y.func), r(/\b[a-zA-Z_$][\w$]*\s*(?==)/g, y.prop), r(/>|===|!==|==|!=|<=|>=|&&|\|\||[+\-*/%=<>!&|^~?:]/g, y.operator), r(/[{}[\]();,]/g, y.operator), a.sort((e, o) => e.start - o.start);
  const i = [];
  let s = 0;
  for (const e of a)
    e.start < s || (e.start > s && i.push(/* @__PURE__ */ n("span", { style: { color: y.default }, children: t.slice(s, e.start) }, `t${s}`)), i.push(/* @__PURE__ */ n("span", { style: { color: e.color }, children: t.slice(e.start, e.end) }, `s${e.start}`)), s = e.end);
  return s < t.length && i.push(/* @__PURE__ */ n("span", { style: { color: y.default }, children: t.slice(s) }, `e${s}`)), i;
}, Gr = ({ code: t, style: a, className: r }) => /* @__PURE__ */ n("pre", { style: { ...kr, ...a }, className: r, children: Pr(t) }), Mr = "animal-container-oauvb", Lr = "animal-fadeCircle-Rncue", Q = {
  container: Mr,
  fadeCircle: Lr
}, Sr = `/*!
 * GSAP 3.2.6
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function n(t){return"string"==typeof t}function o(t){return"function"==typeof t}function p(t){return"number"==typeof t}function q(t){return void 0===t}function r(t){return"object"==typeof t}function s(t){return!1!==t}function t(){return"undefined"!=typeof window}function u(t){return o(t)||n(t)}function K(t){return(l=pt(t,at))&&ie}function L(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")}function M(t,e){return!e&&console.warn(t)}function N(t,e){return t&&(at[t]=e)&&l&&(l[t]=e)||at}function O(){return 0}function Y(t){var e,i,n=t[0];if(r(n)||o(n)||(t=[t]),!(e=(n._gsap||{}).harness)){for(i=dt.length;i--&&!dt[i].targetTest(n););e=dt[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Ft(t[i],e)))||t.splice(i,1);return t}function Z(t){return t._gsap||Y(yt(t))[0]._gsap}function $(t,e){var r=t[e];return o(r)?t[e]():q(r)&&t.getAttribute(e)||r}function _(t,e){return(t=t.split(",")).forEach(e)||t}function aa(t){return Math.round(1e5*t)/1e5||0}function ba(t,e){for(var r=e.length,i=0;t.indexOf(e[i])<0&&++i<r;);return i<r}function ca(t,e,r){var i,n=p(t[1]),a=(n?2:1)+(e<2?0:1),o=t[a];if(n&&(o.duration=t[1]),o.parent=r,e){for(i=o;r&&!("immediateRender"in i);)i=r.vars.defaults||{},r=s(r.vars.inherit)&&r.parent;o.immediateRender=s(i.immediateRender),e<2?o.runBackwards=1:o.startAt=t[a-1]}return o}function da(){var t,e,r=ot.length,i=ot.slice(0);for(ut={},t=ot.length=0;t<r;t++)(e=i[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)}function ea(t,e,r,i){ot.length&&da(),t.render(e,r,i),ot.length&&da()}function fa(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(nt).length<2?e:t}function ga(t){return t}function ha(t,e){for(var r in e)r in t||(t[r]=e[r]);return t}function ia(t,e){for(var r in e)r in t||"duration"===r||"ease"===r||(t[r]=e[r])}function ka(t,e){for(var i in e)t[i]=r(e[i])?ka(t[i]||(t[i]={}),e[i]):e[i];return t}function la(t,e){var r,i={};for(r in t)r in e||(i[r]=t[r]);return i}function ma(t){var e=t.parent||F,r=t.keyframes?ia:ha;if(s(t.inherit))for(;e;)r(t,e.vars.defaults),e=e.parent;return t}function pa(t,e,r,i){void 0===r&&(r="_first"),void 0===i&&(i="_last");var n=e._prev,a=e._next;n?n._next=a:t[r]===e&&(t[r]=a),a?a._prev=n:t[i]===e&&(t[i]=n),e._next=e._prev=e.parent=null}function qa(t,e){!t.parent||e&&!t.parent.autoRemoveChildren||t.parent.remove(t),t._act=0}function ra(t){for(var e=t;e;)e._dirty=1,e=e.parent;return t}function ua(t){return t._repeat?_t(t._tTime,t=t.duration()+t._rDelay)*t:0}function wa(t,e){return(t-e._start)*e._ts+(0<=e._ts?0:e._dirty?e.totalDuration():e._tDur)}function xa(t){return t._end=aa(t._start+(t._tDur/Math.abs(t._ts||t._rts||B)||0))}function ya(t,e){var r;if((e._time||e._initted&&!e._dur)&&(r=wa(t.rawTime(),e),(!e._dur||gt(0,e.totalDuration(),r)-e._tTime>B)&&e.render(r,!0)),ra(t)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)0<=r.rawTime()&&r.totalTime(r._tTime),r=r._dp;t._zTime=-B}}function za(t,e,r,i){return e.parent&&qa(e),e._start=aa(r+e._delay),e._end=aa(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),function _addLinkedListItem(t,e,r,i,n){void 0===r&&(r="_first"),void 0===i&&(i="_last");var a,s=t[i];if(n)for(a=e[n];s&&s[n]>a;)s=s._prev;s?(e._next=s._next,s._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[i]=e,e._prev=s,e.parent=e._dp=t}(t,e,"_first","_last",t._sort?"_start":0),t._recent=e,i||ya(t,e),t}function Aa(t,e,r,i){return qt(t,e),t._initted?!r&&t._pt&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&d!==Ot.frame?(ot.push(t),t._lazy=[e,i],1):void 0:1}function Da(t,e,r){var i=t._repeat,n=aa(e)||0;return t._dur=n,t._tDur=i?i<0?1e12:aa(n*(i+1)+t._rDelay*i):n,t._time>n&&(t._time=n,t._tTime=Math.min(t._tTime,t._tDur)),r||ra(t.parent),t.parent&&xa(t),t}function Ea(t){return t instanceof Bt?ra(t):Da(t,t._dur)}function Ga(t,e){var r,i,a=t.labels,s=t._recent||mt,o=t.duration()>=R?s.endTime(!1):t._dur;return n(e)&&(isNaN(e)||e in a)?"<"===(r=e.charAt(0))||">"===r?("<"===r?s._start:s.endTime(0<=s._repeat))+(parseFloat(e.substr(1))||0):(r=e.indexOf("="))<0?(e in a||(a[e]=o),a[e]):(i=+(e.charAt(r-1)+e.substr(r+1)),1<r?Ga(t,e.substr(0,r-1))+i:o+i):null==e?o:+e}function Ha(t,e){return t||0===t?e(t):e}function Ja(t){return(t+"").substr((parseFloat(t)+"").length)}function Ma(t,e){return t&&r(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&r(t[0]))&&!t.nodeType&&t!==i}function Pa(t){return t.sort(function(){return.5-Math.random()})}function Qa(t){if(o(t))return t;var p=r(t)?t:{each:t},_=Dt(p.ease),m=p.from||0,g=parseFloat(p.base)||0,v={},e=0<m&&m<1,y=isNaN(m)||e,T=p.axis,b=m,w=m;return n(m)?b=w={center:.5,edges:.5,end:1}[m]||0:!e&&y&&(b=m[0],w=m[1]),function(t,e,r){var i,n,a,s,o,u,h,l,f,d=(r||p).length,c=v[d];if(!c){if(!(f="auto"===p.grid?0:(p.grid||[1,R])[1])){for(h=-R;h<(h=r[f++].getBoundingClientRect().left)&&f<d;);f--}for(c=v[d]=[],i=y?Math.min(f,d)*b-.5:m%f,n=y?d*w/f-.5:m/f|0,l=R,u=h=0;u<d;u++)a=u%f-i,s=n-(u/f|0),c[u]=o=T?Math.abs("y"===T?s:a):j(a*a+s*s),h<o&&(h=o),o<l&&(l=o);"random"===m&&Pa(c),c.max=h-l,c.min=l,c.v=d=(parseFloat(p.amount)||parseFloat(p.each)*(d<f?d-1:T?"y"===T?d/f:f:Math.max(f,d/f))||0)*("edges"===m?-1:1),c.b=d<0?g-d:g,c.u=Ja(p.amount||p.each)||0,_=_&&d<0?zt(_):_}return d=(c[t]-c.min)/c.max||0,aa(c.b+(_?_(d):d)*c.v)+c.u}}function Ra(e){var r=e<1?Math.pow(10,(e+"").length-2):1;return function(t){return~~(Math.round(parseFloat(t)/e)*e*r)/r+(p(t)?0:Ja(t))}}function Sa(u,t){var h,l,e=H(u);return!e&&r(u)&&(h=e=u.radius||R,u.values?(u=yt(u.values),(l=!p(u[0]))&&(h*=h)):u=Ra(u.increment)),Ha(t,e?o(u)?function(t){return l=u(t),Math.abs(l-t)<=h?l:t}:function(t){for(var e,r,i=parseFloat(l?t.x:t),n=parseFloat(l?t.y:0),a=R,s=0,o=u.length;o--;)(e=l?(e=u[o].x-i)*e+(r=u[o].y-n)*r:Math.abs(u[o]-i))<a&&(a=e,s=o);return s=!h||a<=h?u[s]:t,l||s===t||p(t)?s:s+Ja(t)}:Ra(u))}function Ta(t,e,r,i){return Ha(H(t)?!e:!0===r?!!(r=0):!i,function(){return H(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&~~(Math.round((t+Math.random()*(e-t))/r)*r*i)/i})}function Xa(e,r,t){return Ha(t,function(t){return e[~~r(t)]})}function $a(t){for(var e,r,i,n,a=0,s="";~(e=t.indexOf("random(",a));)i=t.indexOf(")",e),n="["===t.charAt(e+7),r=t.substr(e+7,i-e-7).match(n?nt:Q),s+=t.substr(a,e-a)+Ta(n?r:+r[0],+r[1],+r[2]||1e-5),a=i+1;return s+t.substr(a,t.length-a)}function bb(t,e,r){var i,n,a,s=t.labels,o=R;for(i in s)(n=s[i]-e)<0==!!r&&n&&o>(n=Math.abs(n))&&(a=i,o=n);return a}function db(t){return qa(t),t.progress()<1&&bt(t,"onInterrupt"),t}function ib(t,e,r){return(6*(t=t<0?t+1:1<t?t-1:t)<1?e+(r-e)*t*6:t<.5?r:3*t<2?e+(r-e)*(2/3-t)*6:e)*wt+.5|0}function jb(t,e,r){var i,n,a,s,o,u,h,l,f,d,c=t?p(t)?[t>>16,t>>8&wt,t&wt]:0:xt.black;if(!c){if(","===t.substr(-1)&&(t=t.substr(0,t.length-1)),xt[t])c=xt[t];else if("#"===t.charAt(0))4===t.length&&(t="#"+(i=t.charAt(1))+i+(n=t.charAt(2))+n+(a=t.charAt(3))+a),c=[(t=parseInt(t.substr(1),16))>>16,t>>8&wt,t&wt];else if("hsl"===t.substr(0,3))if(c=d=t.match(Q),e){if(~t.indexOf("="))return c=t.match(W),r&&c.length<4&&(c[3]=1),c}else s=+c[0]%360/360,o=c[1]/100,i=2*(u=c[2]/100)-(n=u<=.5?u*(o+1):u+o-u*o),3<c.length&&(c[3]*=1),c[0]=ib(s+1/3,i,n),c[1]=ib(s,i,n),c[2]=ib(s-1/3,i,n);else c=t.match(Q)||xt.transparent;c=c.map(Number)}return e&&!d&&(i=c[0]/wt,n=c[1]/wt,a=c[2]/wt,u=((h=Math.max(i,n,a))+(l=Math.min(i,n,a)))/2,h===l?s=o=0:(f=h-l,o=.5<u?f/(2-h-l):f/(h+l),s=h===i?(n-a)/f+(n<a?6:0):h===n?(a-i)/f+2:(i-n)/f+4,s*=60),c[0]=~~(s+.5),c[1]=~~(100*o+.5),c[2]=~~(100*u+.5)),r&&c.length<4&&(c[3]=1),c}function kb(t){var r=[],i=[],n=-1;return t.split(kt).forEach(function(t){var e=t.match(tt)||[];r.push.apply(r,e),i.push(n+=e.length+1)}),r.c=i,r}function lb(t,e,r){var i,n,a,s,o="",u=(t+o).match(kt),h=e?"hsla(":"rgba(",l=0;if(!u)return t;if(u=u.map(function(t){return(t=jb(t,e,1))&&h+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"}),r&&(a=kb(t),(i=r.c).join(o)!==a.c.join(o)))for(s=(n=t.replace(kt,"1").split(tt)).length-1;l<s;l++)o+=n[l]+(~i.indexOf(l)?u.shift()||h+"0,0,0,0)":(a.length?a:u.length?u:r).shift());if(!n)for(s=(n=t.split(kt)).length-1;l<s;l++)o+=n[l]+u[l];return o+n[s]}function ob(t){var e,r=t.join(" ");if(kt.lastIndex=0,kt.test(r))return e=Mt.test(r),t[1]=lb(t[1],e),t[0]=lb(t[0],e,kb(t[1])),!0}function wb(t){var e=(t+"").split("("),r=Pt[e[0]];return r&&1<e.length&&r.config?r.config.apply(null,~t.indexOf("{")?[function _parseObjectInString(t){for(var e,r,i,n={},a=t.substr(1,t.length-3).split(":"),s=a[0],o=1,u=a.length;o<u;o++)r=a[o],e=o!==u-1?r.lastIndexOf(","):r.length,i=r.substr(0,e),n[s]=isNaN(i)?i.replace(St,"").trim():+i,s=r.substr(e+1).trim();return n}(e[1])]:rt.exec(t)[1].split(",").map(fa)):Pt._CE&&At.test(t)?Pt._CE("",t):r}function zb(t,e,r,i){void 0===r&&(r=function easeOut(t){return 1-e(1-t)}),void 0===i&&(i=function easeInOut(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var n,a={easeIn:e,easeOut:r,easeInOut:i};return _(t,function(t){for(var e in Pt[t]=at[t]=a,Pt[n=t.toLowerCase()]=r,a)Pt[n+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=Pt[t+"."+e]=a[e]}),a}function Ab(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}}function Bb(r,t,e){function Yk(t){return 1===t?1:i*Math.pow(2,-10*t)*J((t-a)*n)+1}var i=1<=t?t:1,n=(e||(r?.3:.45))/(t<1?t:1),a=n/I*(Math.asin(1/i)||0),s="out"===r?Yk:"in"===r?function(t){return 1-Yk(1-t)}:Ab(Yk);return n=I/n,s.config=function(t,e){return Bb(r,t,e)},s}function Cb(e,r){function el(t){return t?--t*t*((r+1)*t+r)+1:0}void 0===r&&(r=1.70158);var t="out"===e?el:"in"===e?function(t){return 1-el(1-t)}:Ab(el);return t.config=function(t){return Cb(e,t)},t}var F,i,a,h,l,f,d,c,m,g,v,y,T,b,w,x,k,C,P,A,S,z,D,G={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},E={duration:.5,overwrite:!1,delay:0},R=1e8,B=1/R,I=2*Math.PI,U=I/4,X=0,j=Math.sqrt,V=Math.cos,J=Math.sin,H=Array.isArray,Q=/(?:-?\\.?\\d|\\.)+/gi,W=/[-+=.]*\\d+[.e\\-+]*\\d*[e\\-\\+]*\\d*/g,tt=/[-+=.]*\\d+[.e-]*\\d*[a-z%]*/g,et=/[-+=.]*\\d+(?:\\.|e-|e)*\\d*/gi,rt=/\\(([^()]+)\\)/i,it=/[+-]=-?[\\.\\d]+/,nt=/[#\\-+.]*\\b[a-z\\d-=+%.]+/gi,at={},st={},ot=[],ut={},ht={},lt={},ft=30,dt=[],ct="",pt=function _merge(t,e){for(var r in e)t[r]=e[r];return t},_t=function _animationCycle(t,e){return(t/=e)&&~~t===t?~~t-1:~~t},mt={_start:0,endTime:O},gt=function _clamp(t,e,r){return r<t?t:e<r?e:r},vt=[].slice,yt=function toArray(t,e){return!n(t)||e||!a&&Ct()?H(t)?function _flatten(t,e,r){return void 0===r&&(r=[]),t.forEach(function(t){return n(t)&&!e||Ma(t,1)?r.push.apply(r,yt(t)):r.push(t)})||r}(t,e):Ma(t)?vt.call(t,0):t?[t]:[]:vt.call(h.querySelectorAll(t),0)},Tt=function mapRange(e,t,r,i,n){var a=t-e,s=i-r;return Ha(n,function(t){return r+(t-e)/a*s})},bt=function _callback(t,e,r){var i,n,a=t.vars,s=a[e];if(s)return i=a[e+"Params"],n=a.callbackScope||t,r&&ot.length&&da(),i?s.apply(n,i):s.call(n)},wt=255,xt={aqua:[0,wt,wt],lime:[0,wt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,wt],navy:[0,0,128],white:[wt,wt,wt],olive:[128,128,0],yellow:[wt,wt,0],orange:[wt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[wt,0,0],pink:[wt,192,203],cyan:[0,wt,wt],transparent:[wt,wt,wt,0]},kt=function(){var t,e="(?:\\\\b(?:(?:rgb|rgba|hsl|hsla)\\\\(.+?\\\\))|\\\\B#(?:[0-9a-f]{3}){1,2}\\\\b";for(t in xt)e+="|"+t+"\\\\b";return new RegExp(e+")","gi")}(),Mt=/hsl[a]?\\(/,Ot=(b=Date.now,w=500,x=33,k=b(),C=k,A=P=1/240,T={time:0,frame:0,tick:function tick(){ck(!0)},wake:function wake(){f&&(!a&&t()&&(i=a=window,h=i.document||{},at.gsap=ie,(i.gsapVersions||(i.gsapVersions=[])).push(ie.version),K(l||i.GreenSockGlobals||!i.gsap&&i||{}),y=i.requestAnimationFrame),g&&T.sleep(),v=y||function(t){return setTimeout(t,1e3*(A-T.time)+1|0)},m=1,ck(2))},sleep:function sleep(){(y?i.cancelAnimationFrame:clearTimeout)(g),m=0,v=O},lagSmoothing:function lagSmoothing(t,e){w=t||1e8,x=Math.min(e,w,0)},fps:function fps(t){P=1/(t||240),A=T.time+P},add:function add(t){S.indexOf(t)<0&&S.push(t),Ct()},remove:function remove(t){var e;~(e=S.indexOf(t))&&S.splice(e,1)},_listeners:S=[]}),Ct=function _wake(){return!m&&Ot.wake()},Pt={},At=/^[\\d.\\-M][\\d.\\-,\\s]/,St=/["']/g,zt=function _invertEase(e){return function(t){return 1-e(1-t)}},Dt=function _parseEase(t,e){return t&&(o(t)?t:Pt[t]||wb(t))||e};function ck(e){var t,r,i=b()-C,n=!0===e;w<i&&(k+=i-x),C+=i,T.time=(C-k)/1e3,(0<(t=T.time-A)||n)&&(T.frame++,A+=t+(P<=t?.004:P-t),r=1),n||(g=v(ck)),r&&S.forEach(function(t){return t(T.time,i,T.frame,e)})}function vl(t){return t<D?z*t*t:t<.7272727272727273?z*Math.pow(t-1.5/2.75,2)+.75:t<.9090909090909092?z*(t-=2.25/2.75)*t+.9375:z*Math.pow(t-2.625/2.75,2)+.984375}_("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;zb(t+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(2*t,r)/2:1-Math.pow(2*(1-t),r)/2})}),Pt.Linear.easeNone=Pt.none=Pt.Linear.easeIn,zb("Elastic",Bb("in"),Bb("out"),Bb()),z=7.5625,D=1/2.75,zb("Bounce",function(t){return 1-vl(1-t)},vl),zb("Expo",function(t){return t?Math.pow(2,10*(t-1)):0}),zb("Circ",function(t){return-(j(1-t*t)-1)}),zb("Sine",function(t){return 1-V(t*U)}),zb("Back",Cb("in"),Cb("out"),Cb()),Pt.SteppedEase=Pt.steps=at.SteppedEase={config:function config(t,e){void 0===t&&(t=1);var r=1/t,i=t+(e?0:1),n=e?1:0;return function(t){return((i*gt(0,.99999999,t)|0)+n)*r}}},E.ease=Pt["quad.out"],_("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return ct+=t+","+t+"Params,"});var Rt,Ft=function GSCache(t,e){this.id=X++,(t._gsap=this).target=t,this.harness=e,this.get=e?e.get:$,this.set=e?e.getSetter:Zt},Et=((Rt=Animation.prototype).delay=function delay(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},Rt.duration=function duration(t){return arguments.length?this.totalDuration(0<this._repeat?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},Rt.totalDuration=function totalDuration(t){return arguments.length?(this._dirty=0,Da(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},Rt.totalTime=function totalTime(t,e){if(Ct(),!arguments.length)return this._tTime;var r=this.parent||this._dp;if(r&&r.smoothChildTiming&&this._ts){for(this._start=aa(r._time-(0<this._ts?t/this._ts:((this._dirty?this.totalDuration():this._tDur)-t)/-this._ts)),xa(this),r._dirty||ra(r);r.parent;)r.parent._time!==r._start+(0<=r._ts?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&za(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===B)&&(this._ts||(this._pTime=t),ea(this,t,e)),this},Rt.time=function time(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+ua(this))%this._dur||(t?this._dur:0),e):this._time},Rt.totalProgress=function totalProgress(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},Rt.progress=function progress(t,e){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+ua(this),e):this.duration()?Math.min(1,this._time/this._dur):this.ratio},Rt.iteration=function iteration(t,e){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,e):this._repeat?_t(this._tTime,r)+1:1},Rt.timeScale=function timeScale(t){if(!arguments.length)return this._rts===-B?0:this._rts;if(this._rts===t)return this;var e=this.parent&&this._ts?wa(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-B?0:this._rts,function _recacheAncestors(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t}(this.totalTime(gt(0,this._tDur,e),!0))},Rt.paused=function paused(t){return arguments.length?(this._ps!==t&&((this._ps=t)?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ct(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&(this._tTime-=B)&&Math.abs(this._zTime)!==B))),this):this._ps},Rt.startTime=function startTime(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return!e||!e._sort&&this.parent||za(e,this,t-this._delay),this}return this._start},Rt.endTime=function endTime(t){return this._start+(s(t)?this.totalDuration():this.duration())/Math.abs(this._ts)},Rt.rawTime=function rawTime(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?wa(e.rawTime(t),this):this._tTime:this._tTime},Rt.repeat=function repeat(t){return arguments.length?(this._repeat=t,Ea(this)):this._repeat},Rt.repeatDelay=function repeatDelay(t){return arguments.length?(this._rDelay=t,Ea(this)):this._rDelay},Rt.yoyo=function yoyo(t){return arguments.length?(this._yoyo=t,this):this._yoyo},Rt.seek=function seek(t,e){return this.totalTime(Ga(this,t),s(e))},Rt.restart=function restart(t,e){return this.play().totalTime(t?-this._delay:0,s(e))},Rt.play=function play(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},Rt.reverse=function reverse(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},Rt.pause=function pause(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},Rt.resume=function resume(){return this.paused(!1)},Rt.reversed=function reversed(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-B:0)),this):this._rts<0},Rt.invalidate=function invalidate(){return this._initted=0,this._zTime=-B,this},Rt.isActive=function isActive(t){var e,r=this.parent||this._dp,i=this._start;return!(r&&!(this._ts&&(this._initted||!t)&&r.isActive(t)&&(e=r.rawTime(!0))>=i&&e<this.endTime(!0)-B))},Rt.eventCallback=function eventCallback(t,e,r){var i=this.vars;return 1<arguments.length?(e?(i[t]=e,r&&(i[t+"Params"]=r),"onUpdate"===t&&(this._onUpdate=e)):delete i[t],this):i[t]},Rt.then=function then(t){var i=this;return new Promise(function(e){function Km(){var t=i.then;i.then=null,o(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=t),e(r),i.then=t}var r=o(t)?t:ga;i._initted&&1===i.totalProgress()&&0<=i._ts||!i._tTime&&i._ts<0?Km():i._prom=Km})},Rt.kill=function kill(){db(this)},Animation);function Animation(t,e){var r=t.parent||F;this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Da(this,+t.duration,1),this.data=t.data,m||Ot.wake(),r&&za(r,this,e||0===e?e:r._time,1),t.reversed&&this.reverse(),t.paused&&this.paused(!0)}ha(Et.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-B,_prom:0,_ps:!1,_rts:1});var Bt=function(i){function Timeline(t,e){var r;return void 0===t&&(t={}),(r=i.call(this,t,e)||this).labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=s(t.sortChildren),r.parent&&ya(r.parent,_assertThisInitialized(r)),r}_inheritsLoose(Timeline,i);var t=Timeline.prototype;return t.to=function to(t,e,r,i){return new Ut(t,ca(arguments,0,this),Ga(this,p(e)?i:r)),this},t.from=function from(t,e,r,i){return new Ut(t,ca(arguments,1,this),Ga(this,p(e)?i:r)),this},t.fromTo=function fromTo(t,e,r,i,n){return new Ut(t,ca(arguments,2,this),Ga(this,p(e)?n:i)),this},t.set=function set(t,e,r){return e.duration=0,e.parent=this,ma(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new Ut(t,e,Ga(this,r),1),this},t.call=function call(t,e,r){return za(this,Ut.delayedCall(0,t,e),Ga(this,r))},t.staggerTo=function staggerTo(t,e,r,i,n,a,s){return r.duration=e,r.stagger=r.stagger||i,r.onComplete=a,r.onCompleteParams=s,r.parent=this,new Ut(t,r,Ga(this,n)),this},t.staggerFrom=function staggerFrom(t,e,r,i,n,a,o){return r.runBackwards=1,ma(r).immediateRender=s(r.immediateRender),this.staggerTo(t,e,r,i,n,a,o)},t.staggerFromTo=function staggerFromTo(t,e,r,i,n,a,o,u){return i.startAt=r,ma(i).immediateRender=s(i.immediateRender),this.staggerTo(t,e,i,n,a,o,u)},t.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d,c,p,_=this._time,m=this._dirty?this.totalDuration():this._tDur,g=this._dur,v=this!==F&&m-B<t&&0<=t?m:t<B?0:t,y=this._zTime<0!=t<0&&(this._initted||!g);if(v!==this._tTime||r||y){if(_!==this._time&&g&&(v+=this._time-_,t+=this._time-_),i=v,f=this._start,u=!(l=this._ts),y&&(g||(_=this._zTime),!t&&e||(this._zTime=t)),this._repeat&&(c=this._yoyo,o=g+this._rDelay,(g<(i=aa(v%o))||m===v)&&(i=g),(s=~~(v/o))&&s===v/o&&(i=g,s--),c&&1&s&&(i=g-i,p=1),s!==(d=_t(this._tTime,o))&&!this._lock)){var T=c&&1&d,b=T===(c&&1&s);if(s<d&&(T=!T),_=T?0:g,this._lock=1,this.render(_,e,!g)._lock=0,!e&&this.parent&&bt(this,"onRepeat"),this.vars.repeatRefresh&&!p&&(this.invalidate()._lock=1),_!==this._time||u!=!this._ts)return this;if(b&&(this._lock=2,_=T?g+1e-4:-1e-4,this.render(_,!0),this.vars.repeatRefresh&&!p&&this.invalidate()),this._lock=0,!this._ts&&!u)return this}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=function _findNextPauseTween(t,e,r){var i;if(e<r)for(i=t._first;i&&i._start<=r;){if(!i._dur&&"isPause"===i.data&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=r;){if(!i._dur&&"isPause"===i.data&&i._start<e)return i;i=i._prev}}(this,aa(_),aa(i)))&&(v-=i-(i=h._start)),this._tTime=v,this._time=i,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t),_||!i||e||bt(this,"onStart"),_<=i&&0<=t)for(n=this._first;n;){if(a=n._next,(n._act||i>=n._start)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(i-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(i-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=-B);break}}n=a}else{n=this._last;for(var w=t<0?t:i;n;){if(a=n._prev,(n._act||w<=n._end)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(w-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(w-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=w?-B:B);break}}n=a}}if(h&&!e&&(this.pause(),h.render(_<=i?0:-B)._zTime=_<=i?1:-1,this._ts))return this._start=f,xa(this),this.render(t,e,r);this._onUpdate&&!e&&bt(this,"onUpdate",!0),(v===m&&m>=this.totalDuration()||!v&&this._ts<0)&&(f!==this._start&&Math.abs(l)===Math.abs(this._ts)||this._lock||(!t&&g||!(t&&0<this._ts||!v&&this._ts<0)||qa(this,1),e||t<0&&!_||(bt(this,v===m?"onComplete":"onReverseComplete",!0),this._prom&&this._prom())))}return this},t.add=function add(t,e){var r=this;if(p(e)||(e=Ga(this,e)),!(t instanceof Et)){if(H(t))return t.forEach(function(t){return r.add(t,e)}),ra(this);if(n(t))return this.addLabel(t,e);if(!o(t))return this;t=Ut.delayedCall(0,t)}return this!==t?za(this,t,e):this},t.getChildren=function getChildren(t,e,r,i){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),void 0===i&&(i=-R);for(var n=[],a=this._first;a;)a._start>=i&&(a instanceof Ut?e&&n.push(a):(r&&n.push(a),t&&n.push.apply(n,a.getChildren(!0,e,r)))),a=a._next;return n},t.getById=function getById(t){for(var e=this.getChildren(1,1,1),r=e.length;r--;)if(e[r].vars.id===t)return e[r]},t.remove=function remove(t){return n(t)?this.removeLabel(t):o(t)?this.killTweensOf(t):(pa(this,t),t===this._recent&&(this._recent=this._last),ra(this))},t.totalTime=function totalTime(t,e){return arguments.length?(this._forcing=1,this.parent||this._dp||!this._ts||(this._start=aa(Ot.time-(0<this._ts?t/this._ts:(this.totalDuration()-t)/-this._ts))),i.prototype.totalTime.call(this,t,e),this._forcing=0,this):this._tTime},t.addLabel=function addLabel(t,e){return this.labels[t]=Ga(this,e),this},t.removeLabel=function removeLabel(t){return delete this.labels[t],this},t.addPause=function addPause(t,e,r){var i=Ut.delayedCall(0,e||O,r);return i.data="isPause",this._hasPause=1,za(this,i,Ga(this,t))},t.removePause=function removePause(t){var e=this._first;for(t=Ga(this,t);e;)e._start===t&&"isPause"===e.data&&qa(e),e=e._next},t.killTweensOf=function killTweensOf(t,e,r){for(var i=this.getTweensOf(t,r),n=i.length;n--;)Lt!==i[n]&&i[n].kill(t,e);return this},t.getTweensOf=function getTweensOf(t,e){for(var r,i=[],n=yt(t),a=this._first;a;)a instanceof Ut?!ba(a._targets,n)||e&&!a.isActive("started"===e)||i.push(a):(r=a.getTweensOf(n,e)).length&&i.push.apply(i,r),a=a._next;return i},t.tweenTo=function tweenTo(t,e){e=e||{};var r=this,i=Ga(r,t),n=e.startAt,a=e.onStart,s=e.onStartParams,o=Ut.to(r,ha(e,{ease:"none",lazy:!1,time:i,duration:e.duration||Math.abs((i-(n&&"time"in n?n.time:r._time))/r.timeScale())||B,onStart:function onStart(){r.pause();var t=e.duration||Math.abs((i-r._time)/r.timeScale());o._dur!==t&&Da(o,t).render(o._time,!0,!0),a&&a.apply(o,s||[])}}));return o},t.tweenFromTo=function tweenFromTo(t,e,r){return this.tweenTo(e,ha({startAt:{time:Ga(this,t)}},r))},t.recent=function recent(){return this._recent},t.nextLabel=function nextLabel(t){return void 0===t&&(t=this._time),bb(this,Ga(this,t))},t.previousLabel=function previousLabel(t){return void 0===t&&(t=this._time),bb(this,Ga(this,t),1)},t.currentLabel=function currentLabel(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+B)},t.shiftChildren=function shiftChildren(t,e,r){void 0===r&&(r=0);for(var i,n=this._first,a=this.labels;n;)n._start>=r&&(n._start+=t),n=n._next;if(e)for(i in a)a[i]>=r&&(a[i]+=t);return ra(this)},t.invalidate=function invalidate(){var t=this._first;for(this._lock=0;t;)t.invalidate(),t=t._next;return i.prototype.invalidate.call(this)},t.clear=function clear(t){void 0===t&&(t=!0);for(var e,r=this._first;r;)e=r._next,this.remove(r),r=e;return this._time=this._tTime=0,t&&(this.labels={}),ra(this)},t.totalDuration=function totalDuration(t){var e,r,i,n,a=0,s=this,o=s._last,u=R;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-t:t));if(s._dirty){for(n=s.parent;o;)e=o._prev,o._dirty&&o.totalDuration(),u<(i=o._start)&&s._sort&&o._ts&&!s._lock?(s._lock=1,za(s,o,i-o._delay,1)._lock=0):u=i,i<0&&o._ts&&(a-=i,(!n&&!s._dp||n&&n.smoothChildTiming)&&(s._start+=i/s._ts,s._time-=i,s._tTime-=i),s.shiftChildren(-i,!1,-1e20),u=0),a<(r=xa(o))&&o._ts&&(a=r),o=e;Da(s,s===F&&s._time>a?s._time:Math.min(R,a),1),s._dirty=0}return s._tDur},Timeline.updateRoot=function updateRoot(t){if(F._ts&&(ea(F,wa(t,F)),d=Ot.frame),Ot.frame>=ft){ft+=G.autoSleep||120;var e=F._first;if((!e||!e._ts)&&G.autoSleep&&Ot._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||Ot.sleep()}}},Timeline}(Et);ha(Bt.prototype,{_lock:0,_hasPause:0,_forcing:0});function Jb(t,e,i,a,s,u){var h,l,f,d;if(ht[t]&&!1!==(h=new ht[t]).init(s,h.rawVars?e[t]:function _processVars(t,e,i,a,s){if(o(t)&&(t=Yt(t,s,e,i,a)),!r(t)||t.style&&t.nodeType||H(t))return n(t)?Yt(t,s,e,i,a):t;var u,h={};for(u in t)h[u]=Yt(t[u],s,e,i,a);return h}(e[t],a,s,u,i),i,a,u)&&(i._pt=l=new ee(i._pt,s,t,0,1,h.render,h,0,h.priority),i!==c))for(f=i._ptLookup[i._targets.indexOf(s)],d=h._props.length;d--;)f[h._props[d]]=l;return h}var Lt,It=function _addPropTween(t,e,r,i,a,s,u,h,l){o(i)&&(i=i(a||0,t,s));var f,d=t[e],c="get"!==r?r:o(d)?l?t[e.indexOf("set")||!o(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():d,p=o(d)?l?Vt:jt:Xt;if(n(i)&&(~i.indexOf("random(")&&(i=$a(i)),"="===i.charAt(1)&&(i=parseFloat(c)+parseFloat(i.substr(2))*("-"===i.charAt(0)?-1:1)+(Ja(c)||0))),c!==i)return isNaN(c+i)?(d||e in t||L(e,i),function _addComplexStringPropTween(t,e,r,i,n,a,s){var o,u,h,l,f,d,c,p,_=new ee(this._pt,t,e,0,1,Qt,null,n),m=0,g=0;for(_.b=r,_.e=i,r+="",(c=~(i+="").indexOf("random("))&&(i=$a(i)),a&&(a(p=[r,i],t,e),r=p[0],i=p[1]),u=r.match(et)||[];o=et.exec(i);)l=o[0],f=i.substring(m,o.index),h?h=(h+1)%5:"rgba("===f.substr(-5)&&(h=1),l!==u[g++]&&(d=parseFloat(u[g-1])||0,_._pt={_next:_._pt,p:f||1===g?f:",",s:d,c:"="===l.charAt(1)?parseFloat(l.substr(2))*("-"===l.charAt(0)?-1:1):parseFloat(l)-d,m:h&&h<4?Math.round:0},m=et.lastIndex);return _.c=m<i.length?i.substring(m,i.length):"",_.fp=s,(it.test(i)||c)&&(_.e=0),this._pt=_}.call(this,t,e,c,i,p,h||G.stringFilter,l)):(f=new ee(this._pt,t,e,+c||0,i-(c||0),"boolean"==typeof d?Ht:Jt,0,p),l&&(f.fp=l),u&&f.modifier(u,this,t),this._pt=f)},qt=function _initTween(t,e){var r,i,n,a,o,u,h,l,f,d,c,p,_=t.vars,m=_.ease,g=_.startAt,v=_.immediateRender,y=_.lazy,T=_.onUpdate,b=_.onUpdateParams,w=_.callbackScope,x=_.runBackwards,k=_.yoyoEase,M=_.keyframes,O=_.autoRevert,C=t._dur,P=t._startAt,A=t._targets,S=t.parent,z=S&&"nested"===S.data?S.parent._targets:A,D="auto"===t._overwrite,R=t.timeline;if(!R||M&&m||(m="none"),t._ease=Dt(m,E.ease),t._yEase=k?zt(Dt(!0===k?m:k,E.ease)):0,k&&t._yoyo&&!t._repeat&&(k=t._yEase,t._yEase=t._ease,t._ease=k),!R){if(P&&P.render(-1,!0).kill(),g){if(qa(t._startAt=Ut.set(A,ha({data:"isStart",overwrite:!1,parent:S,immediateRender:!0,lazy:s(y),startAt:null,delay:0,onUpdate:T,onUpdateParams:b,callbackScope:w,stagger:0},g))),v)if(0<e)O||(t._startAt=0);else if(C)return}else if(x&&C)if(P)O||(t._startAt=0);else if(e&&(v=!1),qa(t._startAt=Ut.set(A,pt(la(_,st),{overwrite:!1,data:"isFromStart",lazy:v&&s(y),immediateRender:v,stagger:0,parent:S}))),v){if(!e)return}else _initTween(t._startAt,B);for(r=la(_,st),p=(l=A[t._pt=0]?Z(A[0]).harness:0)&&_[l.prop],y=C&&s(y)||y&&!C,i=0;i<A.length;i++){if(h=(o=A[i])._gsap||Y(A)[i]._gsap,t._ptLookup[i]=d={},ut[h.id]&&da(),c=z===A?i:z.indexOf(o),l&&!1!==(f=new l).init(o,p||r,t,c,z)&&(t._pt=a=new ee(t._pt,o,f.name,0,1,f.render,f,0,f.priority),f._props.forEach(function(t){d[t]=a}),f.priority&&(u=1)),!l||p)for(n in r)ht[n]&&(f=Jb(n,r,t,c,o,z))?f.priority&&(u=1):d[n]=a=It.call(t,o,n,"get",r[n],c,z,0,_.stringFilter);t._op&&t._op[i]&&t.kill(o,t._op[i]),D&&t._pt&&(Lt=t,F.killTweensOf(o,d,"started"),Lt=0),t._pt&&y&&(ut[h.id]=1)}u&&te(t),t._onInit&&t._onInit(t)}t._from=!R&&!!_.runBackwards,t._onUpdate=T,t._initted=1},Yt=function _parseFuncOrString(t,e,r,i,a){return o(t)?t.call(e,r,i,a):n(t)&&~t.indexOf("random(")?$a(t):t},Nt=ct+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",Gt=(Nt+",id,stagger,delay,duration,paused").split(","),Ut=function(A){function Tween(t,e,i,n){var a;"number"==typeof e&&(i.duration=e,e=i,i=null);var o,h,l,f,d,c,_,m,g=(a=A.call(this,n?e:ma(e),i)||this).vars,v=g.duration,y=g.delay,T=g.immediateRender,b=g.stagger,w=g.overwrite,x=g.keyframes,k=g.defaults,C=a.parent,P=(H(t)?p(t[0]):"length"in e)?[t]:yt(t);if(a._targets=P.length?Y(P):M("GSAP target "+t+" not found. https://greensock.com",!G.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=w,x||b||u(v)||u(y)){if(e=a.vars,(o=a.timeline=new Bt({data:"nested",defaults:k||{}})).kill(),o.parent=_assertThisInitialized(a),x)ha(o.vars.defaults,{ease:"none"}),x.forEach(function(t){return o.to(P,t,">")});else{if(f=P.length,_=b?Qa(b):O,r(b))for(d in b)~Nt.indexOf(d)&&((m=m||{})[d]=b[d]);for(h=0;h<f;h++){for(d in l={},e)Gt.indexOf(d)<0&&(l[d]=e[d]);l.stagger=0,m&&pt(l,m),e.yoyoEase&&!e.repeat&&(l.yoyoEase=e.yoyoEase),c=P[h],l.duration=+Yt(v,_assertThisInitialized(a),h,c,P),l.delay=(+Yt(y,_assertThisInitialized(a),h,c,P)||0)-a._delay,!b&&1===f&&l.delay&&(a._delay=y=l.delay,a._start+=y,l.delay=0),o.to(c,l,_(h,c,P))}v=y=0}v||a.duration(v=o.duration())}else a.timeline=0;return!0===w&&(Lt=_assertThisInitialized(a),F.killTweensOf(P),Lt=0),C&&ya(C,_assertThisInitialized(a)),(T||!v&&!x&&a._start===C._time&&s(T)&&function _hasNoPausedAncestors(t){return!t||t._ts&&_hasNoPausedAncestors(t.parent)}(_assertThisInitialized(a))&&"nested"!==C.data)&&(a._tTime=-B,a.render(Math.max(0,-y))),a}_inheritsLoose(Tween,A);var t=Tween.prototype;return t.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d=this._time,c=this._tDur,p=this._dur,_=c-B<t&&0<=t?c:t<B?0:t;if(p){if(_!==this._tTime||!t||r||this._startAt&&this._zTime<0!=t<0){if(i=_,l=this.timeline,this._repeat){if(s=p+this._rDelay,(p<(i=aa(_%s))||c===_)&&(i=p),(a=~~(_/s))&&a===_/s&&(i=p,a--),(u=this._yoyo&&1&a)&&(f=this._yEase,i=p-i),o=_t(this._tTime,s),i===d&&!r&&this._initted)return this;a!==o&&(!this.vars.repeatRefresh||u||this._lock||(this._lock=r=1,this.render(s*a,!0).invalidate()._lock=0))}if(!this._initted){if(Aa(this,i,r,e))return this._tTime=0,this;if(p!==this._dur)return this.render(t,e,r)}for(this._tTime=_,this._time=i,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(f||this._ease)(i/p),this._from&&(this.ratio=h=1-h),d||!i||e||bt(this,"onStart"),n=this._pt;n;)n.r(h,n.d),n=n._next;l&&l.render(t<0?t:!i&&u?-B:l._dur*h,e,r)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(t<0&&this._startAt&&this._startAt.render(t,!0,r),bt(this,"onUpdate")),this._repeat&&a!==o&&this.vars.onRepeat&&!e&&this.parent&&bt(this,"onRepeat"),_!==this._tDur&&_||this._tTime!==_||(t<0&&this._startAt&&!this._onUpdate&&this._startAt.render(t,!0,r),!t&&p||!(t&&0<this._ts||!_&&this._ts<0)||qa(this,1),e||t<0&&!d||_<c&&0<this.timeScale()||(bt(this,_===c?"onComplete":"onReverseComplete",!0),this._prom&&this._prom()))}}else!function _renderZeroDurationTween(t,e,r,i){var n,a=t._zTime<0?0:1,s=e<0?0:1,o=t._rDelay,u=0;if(o&&t._repeat&&(u=gt(0,t._tDur,e),_t(u,o)!==_t(t._tTime,o)&&(a=1-s,t.vars.repeatRefresh&&t._initted&&t.invalidate())),(t._initted||!Aa(t,e,i,r))&&(s!==a||i||t._zTime===B||!e&&t._zTime)){for(t._zTime=e||(r?B:0),t.ratio=s,t._from&&(s=1-s),t._time=0,t._tTime=u,r||bt(t,"onStart"),n=t._pt;n;)n.r(s,n.d),n=n._next;!s&&t._startAt&&!t._onUpdate&&t._start&&t._startAt.render(e,!0,i),t._onUpdate&&(r||bt(t,"onUpdate")),u&&t._repeat&&!r&&t.parent&&bt(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===s&&(t.ratio&&qa(t,1),r||(bt(t,t.ratio?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}}(this,t,e,r);return this},t.targets=function targets(){return this._targets},t.invalidate=function invalidate(){return this._pt=this._op=this._startAt=this._onUpdate=this._act=this._lazy=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),A.prototype.invalidate.call(this)},t.kill=function kill(t,e){if(void 0===e&&(e="all"),!(t||e&&"all"!==e)&&(this._lazy=0,this.parent))return db(this);if(this.timeline)return this.timeline.killTweensOf(t,e,Lt&&!0!==Lt.vars.overwrite),this;var r,i,a,s,o,u,h,l=this._targets,f=t?yt(t):l,d=this._ptLookup,c=this._pt;if((!e||"all"===e)&&function _arraysMatch(t,e){for(var r=t.length,i=r===e.length;i&&r--&&t[r]===e[r];);return r<0}(l,f))return db(this);for(r=this._op=this._op||[],"all"!==e&&(n(e)&&(o={},_(e,function(t){return o[t]=1}),e=o),e=function _addAliasesToVars(t,e){var r,i,n,a,s=t[0]?Z(t[0]).harness:0,o=s&&s.aliases;if(!o)return e;for(i in r=pt({},e),o)if(i in r)for(n=(a=o[i].split(",")).length;n--;)r[a[n]]=r[i];return r}(l,e)),h=l.length;h--;)if(~f.indexOf(l[h]))for(o in i=d[h],"all"===e?(r[h]=e,s=i,a={}):(a=r[h]=r[h]||{},s=e),s)(u=i&&i[o])&&("kill"in u.d&&!0!==u.d.kill(o)||pa(this,u,"_pt"),delete i[o]),"all"!==a&&(a[o]=1);return this._initted&&!this._pt&&c&&db(this),this},Tween.to=function to(t,e,r){return new Tween(t,e,r)},Tween.from=function from(t,e){return new Tween(t,ca(arguments,1))},Tween.delayedCall=function delayedCall(t,e,r,i){return new Tween(e,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:e,onReverseComplete:e,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},Tween.fromTo=function fromTo(t,e,r){return new Tween(t,ca(arguments,2))},Tween.set=function set(t,e){return e.duration=0,e.repeatDelay||(e.repeat=0),new Tween(t,e)},Tween.killTweensOf=function killTweensOf(t,e,r){return F.killTweensOf(t,e,r)},Tween}(Et);ha(Ut.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),_("staggerTo,staggerFrom,staggerFromTo",function(r){Ut[r]=function(){var t=new Bt,e=vt.call(arguments,0);return e.splice("staggerFromTo"===r?5:4,0,0),t[r].apply(t,e)}});function Ub(t,e,r){return t.setAttribute(e,r)}function ac(t,e,r,i){i.mSet(t,e,i.m.call(i.tween,r,i.mt),i)}var Xt=function _setterPlain(t,e,r){return t[e]=r},jt=function _setterFunc(t,e,r){return t[e](r)},Vt=function _setterFuncWithParam(t,e,r,i){return t[e](i.fp,r)},Zt=function _getSetter(t,e){return o(t[e])?jt:q(t[e])&&t.setAttribute?Ub:Xt},Jt=function _renderPlain(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4,e)},Ht=function _renderBoolean(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Qt=function _renderComplexString(t,e){var r=e._pt,i="";if(!t&&e.b)i=e.b;else if(1===t&&e.e)i=e.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*t):Math.round(1e4*(r.s+r.c*t))/1e4)+i,r=r._next;i+=e.c}e.set(e.t,e.p,i,e)},$t=function _renderPropTweens(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},Wt=function _addPluginModifier(t,e,r,i){for(var n,a=this._pt;a;)n=a._next,a.p===i&&a.modifier(t,e,r),a=n},Kt=function _killPropTweensOf(t){for(var e,r,i=this._pt;i;)r=i._next,i.p===t&&!i.op||i.op===t?pa(this,i,"_pt"):i.dep||(e=1),i=r;return!e},te=function _sortPropTweensByPriority(t){for(var e,r,i,n,a=t._pt;a;){for(e=a._next,r=i;r&&r.pr>a.pr;)r=r._next;(a._prev=r?r._prev:n)?a._prev._next=a:i=a,(a._next=r)?r._prev=a:n=a,a=e}t._pt=i},ee=(PropTween.prototype.modifier=function modifier(t,e,r){this.mSet=this.mSet||this.set,this.set=ac,this.m=t,this.mt=r,this.tween=e},PropTween);function PropTween(t,e,r,i,n,a,s,o,u){this.t=e,this.s=i,this.c=n,this.p=r,this.r=a||Jt,this.d=s||this,this.set=o||Xt,this.pr=u||0,(this._next=t)&&(t._prev=this)}_(ct+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert",function(t){return st[t]=1}),at.TweenMax=at.TweenLite=Ut,at.TimelineLite=at.TimelineMax=Bt,F=new Bt({sortChildren:!1,defaults:E,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),G.stringFilter=ob;var re={registerPlugin:function registerPlugin(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){return function _createPlugin(t){var e=(t=!t.name&&t.default||t).name,r=o(t),i=e&&!r&&t.init?function(){this._props=[]}:t,n={init:O,render:$t,add:It,kill:Kt,modifier:Wt,rawVars:0},a={targetTest:0,get:0,getSetter:Zt,aliases:{},register:0};if(Ct(),t!==i){if(ht[e])return;ha(i,ha(la(t,n),a)),pt(i.prototype,pt(n,la(t,a))),ht[i.prop=e]=i,t.targetTest&&(dt.push(i),st[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}N(e,i),t.register&&t.register(ie,i,ee)}(t)})},timeline:function timeline(t){return new Bt(t)},getTweensOf:function getTweensOf(t,e){return F.getTweensOf(t,e)},getProperty:function getProperty(i,t,e,r){n(i)&&(i=yt(i)[0]);var a=Z(i||{}).get,s=e?ga:fa;return"native"===e&&(e=""),i?t?s((ht[t]&&ht[t].get||a)(i,t,e,r)):function(t,e,r){return s((ht[t]&&ht[t].get||a)(i,t,e,r))}:i},quickSetter:function quickSetter(r,e,i){if(1<(r=yt(r)).length){var n=r.map(function(t){return ie.quickSetter(t,e,i)}),a=n.length;return function(t){for(var e=a;e--;)n[e](t)}}r=r[0]||{};var s=ht[e],o=Z(r),u=s?function(t){var e=new s;c._pt=0,e.init(r,i?t+i:t,c,0,[r]),e.render(1,e),c._pt&&$t(1,c)}:o.set(r,e);return s?u:function(t){return u(r,e,i?t+i:t,o,1)}},isTweening:function isTweening(t){return 0<F.getTweensOf(t,!0).length},defaults:function defaults(t){return t&&t.ease&&(t.ease=Dt(t.ease,E.ease)),ka(E,t||{})},config:function config(t){return ka(G,t||{})},registerEffect:function registerEffect(t){var n=t.name,i=t.effect,e=t.plugins,a=t.defaults,s=t.extendTimeline;(e||"").split(",").forEach(function(t){return t&&!ht[t]&&!at[t]&&M(n+" effect requires "+t+" plugin.")}),lt[n]=function(t,e,r){return i(yt(t),ha(e||{},a),r)},s&&(Bt.prototype[n]=function(t,e,i){return this.add(lt[n](t,r(e)?e:(i=e)&&{},this),i)})},registerEase:function registerEase(t,e){Pt[t]=Dt(e)},parseEase:function parseEase(t,e){return arguments.length?Dt(t,e):Pt},getById:function getById(t){return F.getById(t)},exportRoot:function exportRoot(t,e){void 0===t&&(t={});var r,i,n=new Bt(t);for(n.smoothChildTiming=s(t.smoothChildTiming),F.remove(n),n._dp=0,n._time=n._tTime=F._time,r=F._first;r;)i=r._next,!e&&!r._dur&&r instanceof Ut&&r.vars.onComplete===r._targets[0]||za(n,r,r._start-r._delay),r=i;return za(F,n,0),n},utils:{wrap:function wrap(e,t,r){var i=t-e;return H(e)?Xa(e,wrap(0,e.length),t):Ha(r,function(t){return(i+(t-e)%i)%i+e})},wrapYoyo:function wrapYoyo(e,t,r){var i=t-e,n=2*i;return H(e)?Xa(e,wrapYoyo(0,e.length-1),t):Ha(r,function(t){return e+(i<(t=(n+(t-e)%n)%n)?n-t:t)})},distribute:Qa,random:Ta,snap:Sa,normalize:function normalize(t,e,r){return Tt(t,e,0,1,r)},getUnit:Ja,clamp:function clamp(e,r,t){return Ha(t,function(t){return gt(e,r,t)})},splitColor:jb,toArray:yt,mapRange:Tt,pipe:function pipe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return e.reduce(function(t,e){return e(t)},t)}},unitize:function unitize(e,r){return function(t){return e(parseFloat(t))+(r||Ja(t))}},interpolate:function interpolate(e,r,t,i){var a=isNaN(e+r)?0:function(t){return(1-t)*e+t*r};if(!a){var s,o,u,h,l,f=n(e),d={};if(!0===t&&(i=1)&&(t=null),f)e={p:e},r={p:r};else if(H(e)&&!H(r)){for(u=[],h=e.length,l=h-2,o=1;o<h;o++)u.push(interpolate(e[o-1],e[o]));h--,a=function func(t){t*=h;var e=Math.min(l,~~t);return u[e](t-e)},t=r}else i||(e=pt(H(e)?[]:{},e));if(!u){for(s in r)It.call(d,e,s,"get",r[s]);a=function func(t){return $t(t,d)||(f?e.p:e)}}}return Ha(t,a)},shuffle:Pa},install:K,effects:lt,ticker:Ot,updateRoot:Bt.updateRoot,plugins:ht,globalTimeline:F,core:{PropTween:ee,globals:N,Tween:Ut,Timeline:Bt,Animation:Et,getCache:Z,_removeLinkedListItem:pa}};_("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return re[t]=Ut[t]}),Ot.add(Bt.updateRoot),c=re.to({},{duration:0});function ec(t,e){for(var r=t._pt;r&&r.p!==e&&r.op!==e&&r.fp!==e;)r=r._next;return r}function gc(t,a){return{name:t,rawVars:1,init:function init(t,i,e){e._onInit=function(t){var e,r;if(n(i)&&(e={},_(i,function(t){return e[t]=1}),i=e),a){for(r in e={},i)e[r]=a(i[r]);i=e}!function _addModifiers(t,e){var r,i,n,a=t._targets;for(r in e)for(i=a.length;i--;)(n=(n=t._ptLookup[i][r])&&n.d)&&(n._pt&&(n=ec(n,r)),n&&n.modifier&&n.modifier(e[r],t,a[i],r))}(t,i)}}}}var ie=re.registerPlugin({name:"attr",init:function init(t,e,r,i,n){for(var a in e)this.add(t,"setAttribute",(t.getAttribute(a)||0)+"",e[a],i,n,0,0,a),this._props.push(a)}},{name:"endArray",init:function init(t,e){for(var r=e.length;r--;)this.add(t,r,t[r]||0,e[r])}},gc("roundProps",Ra),gc("modifiers"),gc("snap",Sa))||re;Ut.version=Bt.version=ie.version="3.2.6",f=1,t()&&Ct();function Rc(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function Sc(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function Tc(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)}function Uc(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)}function Vc(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)}function Wc(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)}function Xc(t,e,r){return t.style[e]=r}function Yc(t,e,r){return t.style.setProperty(e,r)}function Zc(t,e,r){return t._gsap[e]=r}function $c(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r}function _c(t,e,r,i,n){var a=t._gsap;a.scaleX=a.scaleY=r,a.renderTransform(n,a)}function ad(t,e,r,i,n){var a=t._gsap;a[e]=r,a.renderTransform(n,a)}function ed(t,e){var r=ae.createElementNS?ae.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ae.createElement(t);return r.style?r:ae.createElement(t)}function fd(t,e,r){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Fe,"-$1").toLowerCase())||i.getPropertyValue(e)||!r&&fd(t,Ne(e)||e,1)||""}function id(){!function _windowExists(){return"undefined"!=typeof window}()||(ne=window,ae=ne.document,se=ae.documentElement,ue=ed("div")||{style:{}},he=ed("div"),Ie=Ne(Ie),qe=Ne(qe),ue.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",fe=!!Ne("perspective"),oe=1)}function jd(t){var e,r=ed("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,a=this.style.cssText;if(se.appendChild(r),r.appendChild(this),this.style.display="block",t)try{e=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=jd}catch(t){}else this._gsapBBox&&(e=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),se.removeChild(r),this.style.cssText=a,e}function kd(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])}function ld(e){var r;try{r=e.getBBox()}catch(t){r=jd.call(e,!0)}return r&&(r.width||r.height)||e.getBBox===jd||(r=jd.call(e,!0)),!r||r.width||r.x||r.y?r:{x:+kd(e,["x","cx","x1"])||0,y:+kd(e,["y","cy","y1"])||0,width:0,height:0}}function md(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!ld(t))}function nd(t,e){if(e){var r=t.style;e in Se&&(e=Ie),r.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),r.removeProperty(e.replace(Fe,"-$1").toLowerCase())):r.removeAttribute(e)}}function od(t,e,r,i,n,a){var s=new ee(t._pt,e,r,0,1,a?Wc:Vc);return(t._pt=s).b=i,s.e=n,t._props.push(r),s}function qd(t,e,r,i){var n,a,s,o,u=parseFloat(r)||0,h=(r+"").trim().substr((u+"").length)||"px",l=ue.style,f=Ee.test(e),d="svg"===t.tagName.toLowerCase(),c=(d?"client":"offset")+(f?"Width":"Height"),p="px"===i,_="%"===i;return i===h||!u||Ge[i]||Ge[h]?u:("px"===h||p||(u=qd(t,e,r,"px")),o=t.getCTM&&md(t),_&&(Se[e]||~e.indexOf("adius"))?aa(u/(o?t.getBBox()[f?"width":"height"]:t[c])*100):(l[f?"width":"height"]=100+(p?h:i),a=~e.indexOf("adius")||"em"===i&&t.appendChild&&!d?t:t.parentNode,o&&(a=(t.ownerSVGElement||{}).parentNode),a&&a!==ae&&a.appendChild||(a=ae.body),(s=a._gsap)&&_&&s.width&&f&&s.time===Ot.time?aa(u/s.width*100):(!_&&"%"!==h||(l.position=fd(t,"position")),a===t&&(l.position="static"),a.appendChild(ue),n=ue[c],a.removeChild(ue),l.position="absolute",f&&_&&((s=Z(a)).time=Ot.time,s.width=a[c]),aa(p?n*u/100:n&&u?100/n*u:0))))}function rd(t,e,r,i){var n;return oe||id(),e in Le&&"transform"!==e&&~(e=Le[e]).indexOf(",")&&(e=e.split(",")[0]),Se[e]&&"transform"!==e?(n=Ze(t,i),n="transformOrigin"!==e?n[e]:Je(fd(t,qe))+" "+n.zOrigin+"px"):(n=t.style[e])&&"auto"!==n&&!i&&!~(n+"").indexOf("calc(")||(n=Xe[e]&&Xe[e](t,e,r)||fd(t,e)||$(t,e)||("opacity"===e?1:0)),r&&!~(n+"").indexOf(" ")?qd(t,e,n,r)+r:n}function sd(t,e,r,i){if(!r||"none"===r){var n=Ne(e,t,1),a=n&&fd(t,n,1);a&&a!==r&&(e=n,r=a)}var s,o,u,h,l,f,d,c,p,_,m,g,v=new ee(this._pt,t.style,e,0,1,Qt),y=0,T=0;if(v.b=r,v.e=i,r+="","auto"===(i+="")&&(t.style[e]=i,i=fd(t,e)||i,t.style[e]=r),ob(s=[r,i]),i=s[1],u=(r=s[0]).match(tt)||[],(i.match(tt)||[]).length){for(;o=tt.exec(i);)d=o[0],p=i.substring(y,o.index),l?l=(l+1)%5:"rgba("!==p.substr(-5)&&"hsla("!==p.substr(-5)||(l=1),d!==(f=u[T++]||"")&&(h=parseFloat(f)||0,m=f.substr((h+"").length),(g="="===d.charAt(1)?+(d.charAt(0)+"1"):0)&&(d=d.substr(2)),c=parseFloat(d),_=d.substr((c+"").length),y=tt.lastIndex-_.length,_||(_=_||G.units[e]||m,y===i.length&&(i+=_,v.e+=_)),m!==_&&(h=qd(t,e,f,_)||0),v._pt={_next:v._pt,p:p||1===T?p:",",s:h,c:g?g*c:c-h,m:l&&l<4?Math.round:0});v.c=y<i.length?i.substring(y,i.length):""}else v.r="display"===e&&"none"===i?Wc:Vc;return it.test(i)&&(v.e=0),this._pt=v}function ud(t){var e=t.split(" "),r=e[0],i=e[1]||"50%";return"top"!==r&&"bottom"!==r&&"left"!==i&&"right"!==i||(t=r,r=i,i=t),e[0]=Ue[r]||r,e[1]=Ue[i]||i,e.join(" ")}function vd(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,i,n,a=e.t,s=a.style,o=e.u,u=a._gsap;if("all"===o||!0===o)s.cssText="",i=1;else for(n=(o=o.split(",")).length;-1<--n;)r=o[n],Se[r]&&(i=1,r="transformOrigin"===r?qe:Ie),nd(a,r);i&&(nd(a,Ie),u&&(u.svg&&a.removeAttribute("transform"),Ze(a,1),u.uncache=1))}}function zd(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t}function Ad(t){var e=fd(t,Ie);return zd(e)?je:e.substr(7).match(W).map(aa)}function Bd(t,e){var r,i,n,a,s=t._gsap||Z(t),o=t.style,u=Ad(t);return s.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(u=[(n=t.transform.baseVal.consolidate().matrix).a,n.b,n.c,n.d,n.e,n.f]).join(",")?je:u:(u!==je||t.offsetParent||t===se||s.svg||(n=o.display,o.display="block",(r=t.parentNode)&&t.offsetParent||(a=1,i=t.nextSibling,se.appendChild(t)),u=Ad(t),n?o.display=n:nd(t,"display"),a&&(i?r.insertBefore(t,i):r?r.appendChild(t):se.removeChild(t))),e&&6<u.length?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)}function Cd(t,e,r,i,n,a){var s,o,u,h=t._gsap,l=n||Bd(t,!0),f=h.xOrigin||0,d=h.yOrigin||0,c=h.xOffset||0,p=h.yOffset||0,_=l[0],m=l[1],g=l[2],v=l[3],y=l[4],T=l[5],b=e.split(" "),w=parseFloat(b[0])||0,x=parseFloat(b[1])||0;r?l!==je&&(o=_*v-m*g)&&(u=w*(-m/o)+x*(_/o)-(_*T-m*y)/o,w=w*(v/o)+x*(-g/o)+(g*T-v*y)/o,x=u):(w=(s=ld(t)).x+(~b[0].indexOf("%")?w/100*s.width:w),x=s.y+(~(b[1]||b[0]).indexOf("%")?x/100*s.height:x)),i||!1!==i&&h.smooth?(y=w-f,T=x-d,h.xOffset=c+(y*_+T*g)-y,h.yOffset=p+(y*m+T*v)-T):h.xOffset=h.yOffset=0,h.xOrigin=w,h.yOrigin=x,h.smooth=!!i,h.origin=e,h.originIsAbsolute=!!r,t.style[qe]="0px 0px",a&&(od(a,h,"xOrigin",f,w),od(a,h,"yOrigin",d,x),od(a,h,"xOffset",c,h.xOffset),od(a,h,"yOffset",p,h.yOffset)),t.setAttribute("data-svg-origin",w+" "+x)}function Fd(t,e,r){var i=Ja(e);return aa(parseFloat(e)+parseFloat(qd(t,"x",r+"px",i)))+i}function Md(t,e,r,i,a,s){var o,u,h=360,l=n(a),f=parseFloat(a)*(l&&~a.indexOf("rad")?ze:1),d=s?f*s:f-i,c=i+d+"deg";return l&&("short"===(o=a.split("_")[1])&&(d%=h)!==d%180&&(d+=d<0?h:-h),"cw"===o&&d<0?d=(d+36e9)%h-~~(d/h)*h:"ccw"===o&&0<d&&(d=(d-36e9)%h-~~(d/h)*h)),t._pt=u=new ee(t._pt,e,r,i,d,Sc),u.e=c,u.u="deg",t._props.push(r),u}function Nd(t,e,r){var i,n,a,s,o,u,h,l=he.style,f=r._gsap;for(n in l.cssText=getComputedStyle(r).cssText+";position:absolute;display:block;",l[Ie]=e,ae.body.appendChild(he),i=Ze(he,1),Se)(a=f[n])!==(s=i[n])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(n)<0&&(o=Ja(a)!==(h=Ja(s))?qd(r,n,a,h):parseFloat(a),u=parseFloat(s),t._pt=new ee(t._pt,f,n,o,u-o,Rc),t._pt.u=h||0,t._props.push(n));ae.body.removeChild(he)}var ne,ae,se,oe,ue,he,le,fe,de=Pt.Power0,ce=Pt.Power1,pe=Pt.Power2,_e=Pt.Power3,me=Pt.Power4,ge=Pt.Linear,ve=Pt.Quad,ye=Pt.Cubic,Te=Pt.Quart,be=Pt.Quint,we=Pt.Strong,xe=Pt.Elastic,ke=Pt.Back,Me=Pt.SteppedEase,Oe=Pt.Bounce,Ce=Pt.Sine,Pe=Pt.Expo,Ae=Pt.Circ,Se={},ze=180/Math.PI,De=Math.PI/180,Re=Math.atan2,Fe=/([A-Z])/g,Ee=/(?:left|right|width|margin|padding|x)/i,Be=/[\\s,\\(]\\S/,Le={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ie="transform",qe=Ie+"Origin",Ye="O,Moz,ms,Ms,Webkit".split(","),Ne=function _checkPropPrefix(t,e,r){var i=(e||ue).style,n=5;if(t in i&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);n--&&!(Ye[n]+t in i););return n<0?null:(3===n?"ms":0<=n?Ye[n]:"")+t},Ge={deg:1,rad:1,turn:1},Ue={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Xe={clearProps:function clearProps(t,e,r,i,n){if("isFromStart"!==n.data){var a=t._pt=new ee(t._pt,e,r,0,0,vd);return a.u=i,a.pr=-10,a.tween=n,t._props.push(r),1}}},je=[1,0,0,1,0,0],Ve={},Ze=function _parseTransform(t,e){var r=t._gsap||new Ft(t);if("x"in r&&!e&&!r.uncache)return r;var i,n,a,s,o,u,h,l,f,d,c,p,_,m,g,v,y,T,b,w,x,k,M,O,C,P,A,S,z,D,R,F,E=t.style,B=r.scaleX<0,L="deg",I=fd(t,qe)||"0";return i=n=a=u=h=l=f=d=c=0,s=o=1,r.svg=!(!t.getCTM||!md(t)),m=Bd(t,r.svg),r.svg&&(O=!r.uncache&&t.getAttribute("data-svg-origin"),Cd(t,O||I,!!O||r.originIsAbsolute,!1!==r.smooth,m)),p=r.xOrigin||0,_=r.yOrigin||0,m!==je&&(T=m[0],b=m[1],w=m[2],x=m[3],i=k=m[4],n=M=m[5],6===m.length?(s=Math.sqrt(T*T+b*b),o=Math.sqrt(x*x+w*w),u=T||b?Re(b,T)*ze:0,(f=w||x?Re(w,x)*ze+u:0)&&(o*=Math.cos(f*De)),r.svg&&(i-=p-(p*T+_*w),n-=_-(p*b+_*x))):(F=m[6],D=m[7],A=m[8],S=m[9],z=m[10],R=m[11],i=m[12],n=m[13],a=m[14],h=(g=Re(F,z))*ze,g&&(O=k*(v=Math.cos(-g))+A*(y=Math.sin(-g)),C=M*v+S*y,P=F*v+z*y,A=k*-y+A*v,S=M*-y+S*v,z=F*-y+z*v,R=D*-y+R*v,k=O,M=C,F=P),l=(g=Re(-w,z))*ze,g&&(v=Math.cos(-g),R=x*(y=Math.sin(-g))+R*v,T=O=T*v-A*y,b=C=b*v-S*y,w=P=w*v-z*y),u=(g=Re(b,T))*ze,g&&(O=T*(v=Math.cos(g))+b*(y=Math.sin(g)),C=k*v+M*y,b=b*v-T*y,M=M*v-k*y,T=O,k=C),h&&359.9<Math.abs(h)+Math.abs(u)&&(h=u=0,l=180-l),s=aa(Math.sqrt(T*T+b*b+w*w)),o=aa(Math.sqrt(M*M+F*F)),g=Re(k,M),f=2e-4<Math.abs(g)?g*ze:0,c=R?1/(R<0?-R:R):0),r.svg&&(m=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!zd(fd(t,Ie)),m&&t.setAttribute("transform",m))),90<Math.abs(f)&&Math.abs(f)<270&&(B?(s*=-1,f+=u<=0?180:-180,u+=u<=0?180:-180):(o*=-1,f+=f<=0?180:-180)),r.x=((r.xPercent=i&&Math.round(t.offsetWidth/2)===Math.round(-i)?-50:0)?0:i)+"px",r.y=((r.yPercent=n&&Math.round(t.offsetHeight/2)===Math.round(-n)?-50:0)?0:n)+"px",r.z=a+"px",r.scaleX=aa(s),r.scaleY=aa(o),r.rotation=aa(u)+L,r.rotationX=aa(h)+L,r.rotationY=aa(l)+L,r.skewX=f+L,r.skewY=d+L,r.transformPerspective=c+"px",(r.zOrigin=parseFloat(I.split(" ")[2])||0)&&(E[qe]=Je(I)),r.xOffset=r.yOffset=0,r.force3D=G.force3D,r.renderTransform=r.svg?tr:fe?Ke:He,r.uncache=0,r},Je=function _firstTwoOnly(t){return(t=t.split(" "))[0]+" "+t[1]},He=function _renderNon3DTransforms(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Ke(t,e)},Qe="0deg",$e="0px",We=") ",Ke=function _renderCSSTransforms(t,e){var r=e||this,i=r.xPercent,n=r.yPercent,a=r.x,s=r.y,o=r.z,u=r.rotation,h=r.rotationY,l=r.rotationX,f=r.skewX,d=r.skewY,c=r.scaleX,p=r.scaleY,_=r.transformPerspective,m=r.force3D,g=r.target,v=r.zOrigin,y="",T="auto"===m&&t&&1!==t||!0===m;if(v&&(l!==Qe||h!==Qe)){var b,w=parseFloat(h)*De,x=Math.sin(w),k=Math.cos(w);w=parseFloat(l)*De,b=Math.cos(w),a=Fd(g,a,x*b*-v),s=Fd(g,s,-Math.sin(w)*-v),o=Fd(g,o,k*b*-v+v)}_!==$e&&(y+="perspective("+_+We),(i||n)&&(y+="translate("+i+"%, "+n+"%) "),!T&&a===$e&&s===$e&&o===$e||(y+=o!==$e||T?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+We),u!==Qe&&(y+="rotate("+u+We),h!==Qe&&(y+="rotateY("+h+We),l!==Qe&&(y+="rotateX("+l+We),f===Qe&&d===Qe||(y+="skew("+f+", "+d+We),1===c&&1===p||(y+="scale("+c+", "+p+We),g.style[Ie]=y||"translate(0, 0)"},tr=function _renderSVGTransforms(t,e){var r,i,n,a,s,o=e||this,u=o.xPercent,h=o.yPercent,l=o.x,f=o.y,d=o.rotation,c=o.skewX,p=o.skewY,_=o.scaleX,m=o.scaleY,g=o.target,v=o.xOrigin,y=o.yOrigin,T=o.xOffset,b=o.yOffset,w=o.forceCSS,x=parseFloat(l),k=parseFloat(f);d=parseFloat(d),c=parseFloat(c),(p=parseFloat(p))&&(c+=p=parseFloat(p),d+=p),d||c?(d*=De,c*=De,r=Math.cos(d)*_,i=Math.sin(d)*_,n=Math.sin(d-c)*-m,a=Math.cos(d-c)*m,c&&(p*=De,s=Math.tan(c-p),n*=s=Math.sqrt(1+s*s),a*=s,p&&(s=Math.tan(p),r*=s=Math.sqrt(1+s*s),i*=s)),r=aa(r),i=aa(i),n=aa(n),a=aa(a)):(r=_,a=m,i=n=0),(x&&!~(l+"").indexOf("px")||k&&!~(f+"").indexOf("px"))&&(x=qd(g,"x",l,"px"),k=qd(g,"y",f,"px")),(v||y||T||b)&&(x=aa(x+v-(v*r+y*n)+T),k=aa(k+y-(v*i+y*a)+b)),(u||h)&&(s=g.getBBox(),x=aa(x+u/100*s.width),k=aa(k+h/100*s.height)),s="matrix("+r+","+i+","+n+","+a+","+x+","+k+")",g.setAttribute("transform",s),w&&(g.style[Ie]=s)};_("padding,margin,Width,Radius",function(e,r){var t="Right",i="Bottom",n="Left",o=(r<3?["Top",t,i,n]:["Top"+n,"Top"+t,i+t,i+n]).map(function(t){return r<2?e+t:"border"+t+e});Xe[1<r?"border"+e:e]=function(e,t,r,i,n){var a,s;if(arguments.length<4)return a=o.map(function(t){return rd(e,t,r)}),5===(s=a.join(" ")).split(a[0]).length?a[0]:s;a=(i+"").split(" "),s={},o.forEach(function(t,e){return s[t]=a[e]=a[e]||a[(e-1)/2|0]}),e.init(t,s,n)}});var er,rr,ir,nr={name:"css",register:id,targetTest:function targetTest(t){return t.style&&t.nodeType},init:function init(t,e,r,i,n){var a,s,o,u,h,l,f,d,c,p,_,m,g,v,y,T=this._props,b=t.style;for(f in oe||id(),e)if("autoRound"!==f&&(s=e[f],!ht[f]||!Jb(f,e,r,i,t,n)))if(h=typeof s,l=Xe[f],"function"===h&&(h=typeof(s=s.call(r,i,t,n))),"string"===h&&~s.indexOf("random(")&&(s=$a(s)),l)l(this,t,f,s,r)&&(y=1);else if("--"===f.substr(0,2))this.add(b,"setProperty",getComputedStyle(t).getPropertyValue(f)+"",s+"",i,n,0,0,f);else{if(a=rd(t,f),u=parseFloat(a),(p="string"===h&&"="===s.charAt(1)?+(s.charAt(0)+"1"):0)&&(s=s.substr(2)),o=parseFloat(s),f in Le&&("autoAlpha"===f&&(1===u&&"hidden"===rd(t,"visibility")&&o&&(u=0),od(this,b,"visibility",u?"inherit":"hidden",o?"inherit":"hidden",!o)),"scale"!==f&&"transform"!==f&&~(f=Le[f]).indexOf(",")&&(f=f.split(",")[0])),_=f in Se)if(m||((g=t._gsap).renderTransform||Ze(t),v=!1!==e.smoothOrigin&&g.smooth,(m=this._pt=new ee(this._pt,b,Ie,0,1,g.renderTransform,g,0,-1)).dep=1),"scale"===f)this._pt=new ee(this._pt,g,"scaleY",g.scaleY,p?p*o:o-g.scaleY),T.push("scaleY",f),f+="X";else{if("transformOrigin"===f){s=ud(s),g.svg?Cd(t,s,0,v,0,this):((c=parseFloat(s.split(" ")[2])||0)!==g.zOrigin&&od(this,g,"zOrigin",g.zOrigin,c),od(this,b,f,Je(a),Je(s)));continue}if("svgOrigin"===f){Cd(t,s,1,v,0,this);continue}if(f in Ve){Md(this,g,f,u,s,p);continue}if("smoothOrigin"===f){od(this,g,"smooth",g.smooth,s);continue}if("force3D"===f){g[f]=s;continue}if("transform"===f){Nd(this,s,t);continue}}else f in b||(f=Ne(f)||f);if(_||(o||0===o)&&(u||0===u)&&!Be.test(s)&&f in b)(d=(a+"").substr((u+"").length))!==(c=(s+"").substr(((o=o||0)+"").length)||(f in G.units?G.units[f]:d))&&(u=qd(t,f,a,c)),this._pt=new ee(this._pt,_?g:b,f,u,p?p*o:o-u,"px"!==c||!1===e.autoRound||_?Rc:Uc),this._pt.u=c||0,d!==c&&(this._pt.b=a,this._pt.r=Tc);else if(f in b)sd.call(this,t,f,a,s);else{if(!(f in t)){L(f,s);continue}this.add(t,f,t[f],s,i,n)}T.push(f)}y&&te(this)},get:rd,aliases:Le,getSetter:function getSetter(t,e,r){var i=Le[e];return i&&i.indexOf(",")<0&&(e=i),e in Se&&e!==qe&&(t._gsap.x||rd(t,"x"))?r&&le===r?"scale"===e?$c:Zc:(le=r||{})&&("scale"===e?_c:ad):t.style&&!q(t.style[e])?Xc:~e.indexOf("-")?Yc:Zt(t,e)},core:{_removeProperty:nd,_getMatrix:Bd}};ie.utils.checkPrefix=Ne,ir=_((er="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(rr="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(t){Se[t]=1}),_(rr,function(t){G.units[t]="deg",Ve[t]=1}),Le[ir[13]]=er+","+rr,_("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",function(t){var e=t.split(":");Le[e[1]]=ir[e[0]]}),_("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){G.units[t]="px"}),ie.registerPlugin(nr);var ar=ie.registerPlugin(nr)||ie,sr=ar.core.Tween;e.Back=ke,e.Bounce=Oe,e.CSSPlugin=nr,e.Circ=Ae,e.Cubic=ye,e.Elastic=xe,e.Expo=Pe,e.Linear=ge,e.Power0=de,e.Power1=ce,e.Power2=pe,e.Power3=_e,e.Power4=me,e.Quad=ve,e.Quart=Te,e.Quint=be,e.Sine=Ce,e.SteppedEase=Me,e.Strong=we,e.TimelineLite=Bt,e.TimelineMax=Bt,e.TweenLite=Ut,e.TweenMax=sr,e.default=ar,e.gsap=ar;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});

`, Rr = `/*!
 * MotionPathPlugin 3.3.0
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(t){"use strict";function p(t){return"string"==typeof t}function x(t,e,n,r){var a=t[e],o=1===r?6:subdivideSegment(a,n,r);if(o&&o+n+2<a.length)return t.splice(e,0,a.slice(0,n+o+2)),a.splice(0,n+o),1}function A(t,e){var n=t.length,r=t[n-1]||[],a=r.length;e[0]===r[a-2]&&e[1]===r[a-1]&&(e=r.concat(e.slice(2)),n--),t[n]=e}var M=/[achlmqstvz]|(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[0-9]/gi,R=/(?:(-)?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[0-9]/gi,L=/[\\+\\-]?\\d*\\.?\\d+e[\\+\\-]?\\d+/gi,r=/(^[#\\.][a-z]|[a-y][a-z])/i,F=Math.PI/180,s=180/Math.PI,W=Math.sin,U=Math.cos,H=Math.abs,Z=Math.sqrt,S=Math.atan2,B=1e8,l=function _isNumber(t){return"number"==typeof t},N={},_={},e=1e5,d=function _wrapProgress(t){return Math.round((t+B)%1*e)/e||(t<0?0:1)},C=function _round(t){return Math.round(t*e)/e||0},I=function _copyMetaData(t,e){return e.totalLength=t.totalLength,t.samples?(e.samples=t.samples.slice(0),e.lookup=t.lookup.slice(0),e.minLength=t.minLength,e.resolution=t.resolution):e.totalPoints=t.totalPoints,e};function getRawPath(t){var e,n=(t=p(t)&&r.test(t)&&document.querySelector(t)||t).getAttribute?t:0;return n&&(t=t.getAttribute("d"))?(n._gsPath||(n._gsPath={}),(e=n._gsPath[t])&&!e._dirty?e:n._gsPath[t]=stringToRawPath(t)):t?p(t)?stringToRawPath(t):l(t[0])?[t]:t:console.warn("Expecting a <path> element or an SVG path data string")}function reverseSegment(t){var e,n=0;for(t.reverse();n<t.length;n+=2)e=t[n],t[n]=t[n+1],t[n+1]=e;t.reversed=!t.reversed}var D={rect:"rx,ry,x,y,width,height",circle:"r,cx,cy",ellipse:"rx,ry,cx,cy",line:"x1,x2,y1,y2"};function convertToPath(t,e){var n,r,a,o,i,s,l,h,u,g,f,p,c,d,m,v,x,y,P,w,b,M,L=t.tagName.toLowerCase(),T=.552284749831;return"path"!==L&&t.getBBox?(s=function _createPath(t,e){var n,r=document.createElementNS("http://www.w3.org/2000/svg","path"),a=[].slice.call(t.attributes),o=a.length;for(e=","+e+",";-1<--o;)n=a[o].nodeName.toLowerCase(),e.indexOf(","+n+",")<0&&r.setAttributeNS(null,n,a[o].nodeValue);return r}(t,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),M=function _attrToObj(t,e){for(var n=e?e.split(","):[],r={},a=n.length;-1<--a;)r[n[a]]=+t.getAttribute(n[a])||0;return r}(t,D[L]),"rect"===L?(o=M.rx,i=M.ry,r=M.x,a=M.y,g=M.width-2*o,f=M.height-2*i,n=o||i?"M"+(v=(d=(c=r+o)+g)+o)+","+(y=a+i)+" V"+(P=y+f)+" C"+[v,w=P+i*T,m=d+o*T,b=P+i,d,b,d-(d-c)/3,b,c+(d-c)/3,b,c,b,p=r+o*(1-T),b,r,w,r,P,r,P-(P-y)/3,r,y+(P-y)/3,r,y,r,x=a+i*(1-T),p,a,c,a,c+(d-c)/3,a,d-(d-c)/3,a,d,a,m,a,v,x,v,y].join(",")+"z":"M"+(r+g)+","+a+" v"+f+" h"+-g+" v"+-f+" h"+g+"z"):"circle"===L||"ellipse"===L?(h="circle"===L?(o=i=M.r)*T:(o=M.rx,(i=M.ry)*T),n="M"+((r=M.cx)+o)+","+(a=M.cy)+" C"+[r+o,a+h,r+(l=o*T),a+i,r,a+i,r-l,a+i,r-o,a+h,r-o,a,r-o,a-h,r-l,a-i,r,a-i,r+l,a-i,r+o,a-h,r+o,a].join(",")+"z"):"line"===L?n="M"+M.x1+","+M.y1+" L"+M.x2+","+M.y2:"polyline"!==L&&"polygon"!==L||(n="M"+(r=(u=(t.getAttribute("points")+"").match(R)||[]).shift())+","+(a=u.shift())+" L"+u.join(","),"polygon"===L&&(n+=","+r+","+a+"z")),s.setAttribute("d",rawPathToString(s._gsRawPath=stringToRawPath(n))),e&&t.parentNode&&(t.parentNode.insertBefore(s,t),t.parentNode.removeChild(t)),s):t}function getRotationAtBezierT(t,e,n){var r,a=t[e],o=t[e+2],i=t[e+4];return a+=(o-a)*n,a+=((o+=(i-o)*n)-a)*n,r=o+(i+(t[e+6]-i)*n-o)*n-a,a=t[e+1],a+=((o=t[e+3])-a)*n,a+=((o+=((i=t[e+5])-o)*n)-a)*n,C(S(o+(i+(t[e+7]-i)*n-o)*n-a,r)*s)}function sliceRawPath(t,e,n){!function _isUndefined(t){return void 0===t}(n)||(n=1);var r=n<(e=e||0),a=Math.max(0,~~(H(n-e)-1e-8));if(r&&(r=n,n=e,e=r,r=1,a-=a?1:0),e<0||n<0){var o=1+~~Math.min(e,n);e+=o,n+=o}var i,s,l,h,u,g,f,p=function copyRawPath(t){for(var e=[],n=0;n<t.length;n++)e[n]=I(t[n],t[n].slice(0));return I(t,e)}(t.totalLength?t:cacheRawPathMeasurements(t)),c=1<n,d=getProgressData(p,e,N,!0),m=getProgressData(p,n,_),v=m.segment,y=d.segment,P=m.segIndex,w=d.segIndex,b=m.i,M=d.i,L=w===P,T=b===M&&L,R=L&&b<M||T&&d.t>m.t;if(c||a){if(x(p,w,M,d.t)&&(i=1,w++,T?R?m.t/=d.t:(m.t=(m.t-d.t)/(1-d.t),P++,b=0):w<=P+1&&!R&&(P++,L&&(b-=M))),m.t?x(p,P,b,m.t)&&(R&&i&&w++,r&&P++):(P--,r&&w--),h=[],g=1+(u=p.length)*a,f=w,r)for(g+=(u-(P=(P||u)-1)+w)%u,l=0;l<g;l++)A(h,p[f]),f=(f||u)-1;else for(g+=(u-w+P)%u,l=0;l<g;l++)A(h,p[f++%u]);p=h}else if(s=1===m.t?6:subdivideSegment(v,b,m.t),e!==n)for(i=subdivideSegment(y,M,T?d.t/m.t:d.t),L&&(s+=i),v.splice(b+s+2),(i||M)&&y.splice(0,M+i),l=p.length;l--;)(l<w||P<l)&&p.splice(l,1);else v.angle=getRotationAtBezierT(v,b+s,0),d=v[b+=s],m=v[b+1],v.length=v.totalLength=0,v.totalPoints=p.totalPoints=8,v.push(d,m,d,m,d,m,d,m);return r&&function _reverseRawPath(t,e){var n=t.length;for(e||t.reverse();n--;)t[n].reversed||reverseSegment(t[n])}(p,c||a),p.totalLength=0,p}function measureSegment(t,e,n){e=e||0,t.samples||(t.samples=[],t.lookup=[]);var r,a,o,i,s,l,h,u,g,f,p,c,d,m,v,x,y,P=~~t.resolution||12,w=1/P,b=n?e+6*n+1:t.length,M=t[e],L=t[e+1],T=e?e/6*P:0,R=t.samples,S=t.lookup,N=(e?t.minLength:B)||B,_=R[T+n*P-1],C=e?R[T-1]:0;for(R.length=S.length=0,a=e+2;a<b;a+=6){if(o=t[a+4]-M,i=t[a+2]-M,s=t[a]-M,u=t[a+5]-L,g=t[a+3]-L,f=t[a+1]-L,l=h=p=c=0,H(o)<1e-5&&H(u)<1e-5&&H(s)+H(f)<1e-5)8<t.length&&(t.splice(a,6),a-=6,b-=6);else for(r=1;r<=P;r++)l=h-(h=((m=w*r)*m*o+3*(d=1-m)*(m*i+d*s))*m),p=c-(c=(m*m*u+3*d*(m*g+d*f))*m),(x=Z(p*p+l*l))<N&&(N=x),C+=x,R[T++]=C;M+=o,L+=u}if(_)for(_-=C;T<R.length;T++)R[T]+=_;if(R.length&&N)for(t.totalLength=y=R[R.length-1]||0,t.minLength=N,x=v=0,r=0;r<y;r+=N)S[x++]=R[v]<r?++v:v;else t.totalLength=R[0]=0;return e?C-R[e/2-1]:C}function cacheRawPathMeasurements(t,e){var n,r,a;for(a=n=r=0;a<t.length;a++)t[a].resolution=~~e||12,r+=t[a].length,n+=measureSegment(t[a]);return t.totalPoints=r,t.totalLength=n,t}function subdivideSegment(t,e,n){if(n<=0||1<=n)return 0;var r=t[e],a=t[e+1],o=t[e+2],i=t[e+3],s=t[e+4],l=t[e+5],h=r+(o-r)*n,u=o+(s-o)*n,g=a+(i-a)*n,f=i+(l-i)*n,p=h+(u-h)*n,c=g+(f-g)*n,d=s+(t[e+6]-s)*n,m=l+(t[e+7]-l)*n;return u+=(d-u)*n,f+=(m-f)*n,t.splice(e+2,4,C(h),C(g),C(p),C(c),C(p+(u-p)*n),C(c+(f-c)*n),C(u),C(f),C(d),C(m)),t.samples&&t.samples.splice(e/6*t.resolution|0,0,0,0,0,0,0,0),6}function getProgressData(t,e,n,r){n=n||{},t.totalLength||cacheRawPathMeasurements(t),(e<0||1<e)&&(e=d(e));var a,o,i,s,l,h,u,g=0,f=t[0];if(1<t.length){for(i=t.totalLength*e,l=h=0;(l+=t[h++].totalLength)<i;)g=h;e=(i-(s=l-(f=t[g]).totalLength))/(l-s)||0}return a=f.samples,o=f.resolution,i=f.totalLength*e,s=(h=f.lookup[~~(i/f.minLength)]||0)?a[h-1]:0,(l=a[h])<i&&(s=l,l=a[++h]),u=1/o*((i-s)/(l-s)+h%o),h=6*~~(h/o),r&&1===u&&(h+6<f.length?(h+=6,u=0):g+1<t.length&&(h=u=0,f=t[++g])),n.t=u,n.i=h,n.path=t,n.segment=f,n.segIndex=g,n}function getPositionOnPath(t,e,n,r){var a,o,i,s,l,h,u,g,f,p=t[0],c=r||{};if((e<0||1<e)&&(e=d(e)),1<t.length){for(i=t.totalLength*e,l=h=0;(l+=t[h++].totalLength)<i;)p=t[h];e=(i-(s=l-p.totalLength))/(l-s)||0}return a=p.samples,o=p.resolution,i=p.totalLength*e,s=(h=p.lookup[~~(i/p.minLength)]||0)?a[h-1]:0,(l=a[h])<i&&(s=l,l=a[++h]),f=1-(u=1/o*((i-s)/(l-s)+h%o)||0),g=p[h=6*~~(h/o)],c.x=C((u*u*(p[h+6]-g)+3*f*(u*(p[h+4]-g)+f*(p[h+2]-g)))*u+g),c.y=C((u*u*(p[h+7]-(g=p[h+1]))+3*f*(u*(p[h+5]-g)+f*(p[h+3]-g)))*u+g),n&&(c.angle=p.totalLength?getRotationAtBezierT(p,h,1<=u?1-1e-9:u||1e-9):p.angle||0),c}function transformRawPath(t,e,n,r,a,o,i){for(var s,l,h,u,g,f=t.length;-1<--f;)for(l=(s=t[f]).length,h=0;h<l;h+=2)u=s[h],g=s[h+1],s[h]=u*e+g*r+o,s[h+1]=u*n+g*a+i;return t._dirty=1,t}function arcToSegment(t,e,n,r,a,o,i,s,l){if(t!==s||e!==l){n=H(n),r=H(r);var h=a%360*F,u=U(h),g=W(h),f=Math.PI,p=2*f,c=(t-s)/2,d=(e-l)/2,m=u*c+g*d,v=-g*c+u*d,x=m*m,y=v*v,P=x/(n*n)+y/(r*r);1<P&&(n=Z(P)*n,r=Z(P)*r);var w=n*n,b=r*r,M=(w*b-w*y-b*x)/(w*y+b*x);M<0&&(M=0);var L=(o===i?-1:1)*Z(M),T=n*v/r*L,R=-r*m/n*L,S=u*T-g*R+(t+s)/2,N=g*T+u*R+(e+l)/2,_=(m-T)/n,C=(v-R)/r,A=(-m-T)/n,O=(-v-R)/r,B=_*_+C*C,I=(C<0?-1:1)*Math.acos(_/Z(B)),V=(_*O-C*A<0?-1:1)*Math.acos((_*A+C*O)/Z(B*(A*A+O*O)));isNaN(V)&&(V=f),!i&&0<V?V-=p:i&&V<0&&(V+=p),I%=p,V%=p;var D,z=Math.ceil(H(V)/(p/4)),E=[],G=V/z,j=4/3*W(G/2)/(1+U(G/2)),Y=u*n,k=g*n,q=g*-r,X=u*r;for(D=0;D<z;D++)m=U(a=I+D*G),v=W(a),_=U(a+=G),C=W(a),E.push(m-j*v,v+j*m,_+j*C,C-j*_,_,C);for(D=0;D<E.length;D+=2)m=E[D],v=E[D+1],E[D]=m*Y+v*q+S,E[D+1]=m*k+v*X+N;return E[D-2]=s,E[D-1]=l,E}}function stringToRawPath(t){function qf(t,e,n,r){u=(n-t)/3,g=(r-e)/3,s.push(t+u,e+g,n-u,r-g,n,r)}var e,n,r,a,o,i,s,l,h,u,g,f,p,c,d,m=(t+"").replace(L,function(t){var e=+t;return e<1e-4&&-1e-4<e?0:e}).match(M)||[],v=[],x=0,y=0,P=m.length,w=0,b="ERROR: malformed path: "+t;if(!t||!isNaN(m[0])||isNaN(m[1]))return console.log(b),v;for(e=0;e<P;e++)if(p=o,isNaN(m[e])?i=(o=m[e].toUpperCase())!==m[e]:e--,r=+m[e+1],a=+m[e+2],i&&(r+=x,a+=y),e||(l=r,h=a),"M"===o)s&&(s.length<8?--v.length:w+=s.length),x=l=r,y=h=a,s=[r,a],v.push(s),e+=2,o="L";else if("C"===o)i||(x=y=0),(s=s||[0,0]).push(r,a,x+1*m[e+3],y+1*m[e+4],x+=1*m[e+5],y+=1*m[e+6]),e+=6;else if("S"===o)u=x,g=y,"C"!==p&&"S"!==p||(u+=x-s[s.length-4],g+=y-s[s.length-3]),i||(x=y=0),s.push(u,g,r,a,x+=1*m[e+3],y+=1*m[e+4]),e+=4;else if("Q"===o)u=x+2/3*(r-x),g=y+2/3*(a-y),i||(x=y=0),x+=1*m[e+3],y+=1*m[e+4],s.push(u,g,x+2/3*(r-x),y+2/3*(a-y),x,y),e+=4;else if("T"===o)u=x-s[s.length-4],g=y-s[s.length-3],s.push(x+u,y+g,r+2/3*(x+1.5*u-r),a+2/3*(y+1.5*g-a),x=r,y=a),e+=2;else if("H"===o)qf(x,y,x=r,y),e+=1;else if("V"===o)qf(x,y,x,y=r+(i?y-x:0)),e+=1;else if("L"===o||"Z"===o)"Z"===o&&(r=l,a=h,s.closed=!0),("L"===o||.5<H(x-r)||.5<H(y-a))&&(qf(x,y,r,a),"L"===o&&(e+=2)),x=r,y=a;else if("A"===o){if(c=m[e+4],d=m[e+5],u=m[e+6],g=m[e+7],n=7,1<c.length&&(c.length<3?(g=u,u=d,n--):(g=d,u=c.substr(2),n-=2),d=c.charAt(1),c=c.charAt(0)),f=arcToSegment(x,y,+m[e+1],+m[e+2],+m[e+3],+c,+d,(i?x:0)+1*u,(i?y:0)+1*g),e+=n,f)for(n=0;n<f.length;n++)s.push(f[n]);x=s[s.length-2],y=s[s.length-1]}else console.log(b);return(e=s.length)<6?(v.pop(),e=0):s[0]===s[e-2]&&s[1]===s[e-1]&&(s.closed=!0),v.totalPoints=w+e,v}function flatPointsToSegment(t,e){void 0===e&&(e=1);for(var n=t[0],r=0,a=[n,r],o=2;o<t.length;o+=2)a.push(n,r,t[o],r=(t[o]-n)*e/2,n=t[o],-r);return a}function pointsToSegment(t,e,n){var r,a,o,i,s,l,h,u,g,f,p,c,d,m,v=t.length-2,x=+t[0],y=+t[1],P=+t[2],w=+t[3],b=[x,y,x,y],M=P-x,L=w-y,T=Math.abs(t[v]-x)<.001&&Math.abs(t[v+1]-y)<.001;for(isNaN(n)&&(n=Math.PI/10),T&&(t.push(P,w),P=x,w=y,x=t[v-2],y=t[v-1],t.unshift(x,y),v+=4),e=e||0===e?+e:1,s=2;s<v;s+=2)r=x,a=y,x=P,y=w,c=(l=M)*l+(u=L)*u,d=(M=(P=+t[s+2])-x)*M+(L=(w=+t[s+3])-y)*L,m=(h=P-r)*h+(g=w-a)*g,p=(o=Math.acos((c+d-m)/Z(4*c*d)))/Math.PI*e,f=Z(c)*p,p*=Z(d),x===r&&y===a||(n<o?(i=S(g,h),b.push(C(x-U(i)*f),C(y-W(i)*f),C(x),C(y),C(x+U(i)*p),C(y+W(i)*p))):(i=S(u,l),b.push(C(x-U(i)*f),C(y-W(i)*f)),i=S(L,M),b.push(C(x),C(y),C(x+U(i)*p),C(y+W(i)*p))));return b.push(C(P),C(w),C(P),C(w)),T&&(b.splice(0,6),b.length=b.length-6),b}function rawPathToString(t){l(t[0])&&(t=[t]);var e,n,r,a,o="",i=t.length;for(n=0;n<i;n++){for(a=t[n],o+="M"+C(a[0])+","+C(a[1])+" C",e=a.length,r=2;r<e;r++)o+=C(a[r++])+","+C(a[r++])+" "+C(a[r++])+","+C(a[r++])+" "+C(a[r++])+","+C(a[r])+" ";a.closed&&(o+="z")}return o}function O(t){var e=t.ownerDocument||t;!(w in t.style)&&"msTransform"in t.style&&(b=(w="msTransform")+"Origin");for(;e.parentNode&&(e=e.parentNode););if(f=window,y=new G,e){c=(g=e).documentElement,m=e.body;var n=e.createElement("div"),r=e.createElement("div");m.appendChild(n),n.appendChild(r),n.style.position="static",n.style[w]="translate3d(0,0,1px)",P=r.offsetParent!==n,m.removeChild(n)}return e}function T(t){return t.ownerSVGElement||("svg"===(t.tagName+"").toLowerCase()?t:null)}function V(t,e){if(t.parentNode&&(g||O(t))){var n=T(t),r=n?n.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",a=n?e?"rect":"g":"div",o=2!==e?0:100,i=3===e?100:0,s="position:absolute;display:block;pointer-events:none;",l=g.createElementNS?g.createElementNS(r.replace(/^https/,"http"),a):g.createElement(a);return e&&(n?(v=v||V(t),l.setAttribute("width",.01),l.setAttribute("height",.01),l.setAttribute("transform","translate("+o+","+i+")"),v.appendChild(l)):(u||((u=V(t)).style.cssText=s),l.style.cssText=s+"width:0.1px;height:0.1px;top:"+i+"px;left:"+o+"px",u.appendChild(l))),l}throw"Need document and parent."}function X(t,e){var n,r,a,o,i,s=T(t),l=t===s,h=s?z:E;if(t===f)return t;if(h.length||h.push(V(t,1),V(t,2),V(t,3)),n=s?v:u,s)a=l?{x:0,y:0}:t.getBBox(),i=(r=t.transform?t.transform.baseVal:{}).numberOfItems?(o=(r=1<r.numberOfItems?function _consolidate(t){for(var e=new G,n=0;n<t.numberOfItems;n++)e.multiply(t.getItem(n).matrix);return e}(r):r.getItem(0).matrix).a*a.x+r.c*a.y,r.b*a.x+r.d*a.y):(r=y,o=a.x,a.y),e&&"g"===t.tagName.toLowerCase()&&(o=i=0),n.setAttribute("transform","matrix("+r.a+","+r.b+","+r.c+","+r.d+","+(r.e+o)+","+(r.f+i)+")"),(l?s:t.parentNode).appendChild(n);else{if(o=i=0,P)for(r=t.offsetParent,a=t;(a=a&&a.parentNode)&&a!==r&&a.parentNode;)4<(f.getComputedStyle(a)[w]+"").length&&(o=a.offsetLeft,i=a.offsetTop,a=0);(a=n.style).top=t.offsetTop-i+"px",a.left=t.offsetLeft-o+"px",r=f.getComputedStyle(t),a[w]=r[w],a[b]=r[b],a.border=r.border,a.borderLeftStyle=r.borderLeftStyle,a.borderTopStyle=r.borderTopStyle,a.borderLeftWidth=r.borderLeftWidth,a.borderTopWidth=r.borderTopWidth,a.position="fixed"===r.position?"fixed":"absolute",t.parentNode.appendChild(n)}return n}function Y(t,e,n,r,a,o,i){return t.a=e,t.b=n,t.c=r,t.d=a,t.e=o,t.f=i,t}var g,f,c,m,u,v,y,P,n,w="transform",b=w+"Origin",z=[],E=[],G=((n=Matrix2D.prototype).inverse=function inverse(){var t=this.a,e=this.b,n=this.c,r=this.d,a=this.e,o=this.f,i=t*r-e*n;return Y(this,r/i,-e/i,-n/i,t/i,(n*o-r*a)/i,-(t*o-e*a)/i)},n.multiply=function multiply(t){var e=this.a,n=this.b,r=this.c,a=this.d,o=this.e,i=this.f,s=t.a,l=t.c,h=t.b,u=t.d,g=t.e,f=t.f;return Y(this,s*e+h*r,s*n+h*a,l*e+u*r,l*n+u*a,o+g*e+f*r,i+g*n+f*a)},n.clone=function clone(){return new Matrix2D(this.a,this.b,this.c,this.d,this.e,this.f)},n.equals=function equals(t){var e=this.a,n=this.b,r=this.c,a=this.d,o=this.e,i=this.f;return e===t.a&&n===t.b&&r===t.c&&a===t.d&&o===t.e&&i===t.f},n.apply=function apply(t,e){void 0===e&&(e={});var n=t.x,r=t.y,a=this.a,o=this.b,i=this.c,s=this.d,l=this.e,h=this.f;return e.x=n*a+r*i+l||0,e.y=n*o+r*s+h||0,e},Matrix2D);function Matrix2D(t,e,n,r,a,o){void 0===t&&(t=1),void 0===e&&(e=0),void 0===n&&(n=0),void 0===r&&(r=1),void 0===a&&(a=0),void 0===o&&(o=0),Y(this,t,e,n,r,a,o)}function getGlobalMatrix(t,e,n){if(!t||!t.parentNode||(g||O(t)).documentElement===t)return new G;var r=T(t)?z:E,a=X(t,n),o=r[0].getBoundingClientRect(),i=r[1].getBoundingClientRect(),s=r[2].getBoundingClientRect(),l=a.parentNode,h=function _isFixed(t){return"fixed"===f.getComputedStyle(t).position||((t=t.parentNode)&&1===t.nodeType?_isFixed(t):void 0)}(t),u=new G((i.left-o.left)/100,(i.top-o.top)/100,(s.left-o.left)/100,(s.top-o.top)/100,o.left+(h?0:function _getDocScrollLeft(){return f.pageXOffset||g.scrollLeft||c.scrollLeft||m.scrollLeft||0}()),o.top+(h?0:function _getDocScrollTop(){return f.pageYOffset||g.scrollTop||c.scrollTop||m.scrollTop||0}()));return l.removeChild(a),e?u.inverse():u}function ga(t,e,n,r){for(var a=e.length,o=r,i=0;i<a;i++)t[o]=parseFloat(e[i][n]),o+=2;return t}function ha(t,e,n){return parseFloat(t._gsap.get(t,e,n||"px"))||0}function ia(t){var e,n=t[0],r=t[1];for(e=2;e<t.length;e+=2)n=t[e]+=n,r=t[e+1]+=r}function ja(t,e,n,r,a,o,i){return e="cubic"===i.type?[e]:(e.unshift(ha(n,r,i.unitX),a?ha(n,a,i.unitY):0),i.relative&&ia(e),[(a?pointsToSegment:flatPointsToSegment)(e,i.curviness)]),e=o(tt(e,n,i)),et(t,n,r,e,"x",i.unitX),a&&et(t,n,a,e,"y",i.unitY),cacheRawPathMeasurements(e,i.resolution||(0===i.curviness?20:12))}function ka(t){return t}function ma(t,e,n){var r,a,o,i=getGlobalMatrix(t);return"svg"===(t.tagName+"").toLowerCase()?(a=(r=t.viewBox.baseVal).x,o=r.y,r.width||(r={width:+t.getAttribute("width"),height:+t.getAttribute("height")})):(r=e&&t.getBBox&&t.getBBox(),a=o=0),e&&"auto"!==e&&(a+=e.push?e[0]*(r?r.width:t.offsetWidth||0):e.x,o+=e.push?e[1]*(r?r.height:t.offsetHeight||0):e.y),n.apply(a||o?i.apply({x:a,y:o}):{x:i.e,y:i.f})}function na(t,e,n,r){var a,o=getGlobalMatrix(t.parentNode,!0,!0),i=o.clone().multiply(getGlobalMatrix(e)),s=ma(t,n,o),l=ma(e,r,o),h=l.x,u=l.y;return i.e=i.f=0,"auto"===r&&e.getTotalLength&&"path"===e.tagName.toLowerCase()&&(a=e.getAttribute("d").match(K)||[],h+=(a=i.apply({x:+a[0],y:+a[1]})).x,u+=a.y),(a||e.getBBox&&t.getBBox)&&(h-=(a=i.apply(e.getBBox())).x,u-=a.y),i.e=h-s.x,i.f=u-s.y,i}var j,k,q,Q,$=["x","translateX","left","marginLeft"],J=["y","translateY","top","marginTop"],o=Math.PI/180,K=/[-+\\.]*\\d+[\\.e\\-\\+]*\\d*[e\\-\\+]*\\d*/g,tt=function _align(t,e,n){var r,a,o,i=n.align,s=n.matrix,l=n.offsetX,h=n.offsetY,u=n.alignOrigin,g=t[0][0],f=t[0][1],p=ha(e,"x"),c=ha(e,"y");return t&&t.length?(i&&("self"===i||(r=Q(i)[0]||e)===e?transformRawPath(t,1,0,0,1,p-g,c-f):(u&&!1!==u[2]?j.set(e,{transformOrigin:100*u[0]+"% "+100*u[1]+"%"}):u=[ha(e,"xPercent")/-100,ha(e,"yPercent")/-100],o=(a=na(e,r,u,"auto")).apply({x:g,y:f}),transformRawPath(t,a.a,a.b,a.c,a.d,p+a.e-(o.x-a.e),c+a.f-(o.y-a.f)))),s?transformRawPath(t,s.a,s.b,s.c,s.d,s.e,s.f):(l||h)&&transformRawPath(t,1,0,0,1,l||0,h||0),t):getRawPath("M0,0L0,0")},et=function _addDimensionalPropTween(t,e,n,r,a,o){var i=e._gsap,s=i.harness,l=s&&s.aliases&&s.aliases[n],h=l&&l.indexOf(",")<0?l:n,u=t._pt=new k(t._pt,e,h,0,0,ka,0,i.set(e,h,t));u.u=q(i.get(e,h,o))||0,u.path=r,u.pp=a,t._props.push(h)},a={version:"3.3.0",name:"motionPath",register:function register(t,e,n){q=(j=t).utils.getUnit,Q=j.utils.toArray,k=n},init:function init(t,e){if(!j)return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"),!1;"object"==typeof e&&!e.style&&e.path||(e={path:e});var n,r,a,o,i=[],s=e.path,l=s[0],h=e.autoRotate,u=function _sliceModifier(e,n){return function(t){return e||1!==n?sliceRawPath(t,e,n):t}}(e.start,"end"in e?e.end:1);if(this.rawPaths=i,this.target=t,(this.rotate=h||0===h)&&(this.rOffset=parseFloat(h)||0,this.radians=!!e.useRadians,this.rProp=e.rotation||"rotation",this.rSet=t._gsap.set(t,this.rProp,this),this.ru=q(t._gsap.get(t,this.rProp))||0),!Array.isArray(s)||"closed"in s||"number"==typeof l)cacheRawPathMeasurements(n=u(tt(getRawPath(e.path),t,e)),e.resolution),i.push(n),et(this,t,e.x||"x",n,"x",e.unitX||"px"),et(this,t,e.y||"y",n,"y",e.unitY||"px");else{for(r in l)~$.indexOf(r)?a=r:~J.indexOf(r)&&(o=r);for(r in a&&o?i.push(ja(this,ga(ga([],s,a,0),s,o,1),t,e.x||a,e.y||o,u,e)):a=o=0,l)r!==a&&r!==o&&i.push(ja(this,ga([],s,r,0),t,r,0,u,e))}},render:function render(t,e){var n=e.rawPaths,r=n.length,a=e._pt;for(1<t?t=1:t<0&&(t=0);r--;)getPositionOnPath(n[r],t,!r&&e.rotate,n[r]);for(;a;)a.set(a.t,a.p,a.path[a.pp]+a.u,a.d,t),a=a._next;e.rotate&&e.rSet(e.target,e.rProp,n[0].angle*(e.radians?o:1)+e.rOffset+e.ru,e,t)},getLength:function getLength(t){return cacheRawPathMeasurements(getRawPath(t)).totalLength},sliceRawPath:sliceRawPath,getRawPath:getRawPath,pointsToSegment:pointsToSegment,stringToRawPath:stringToRawPath,rawPathToString:rawPathToString,transformRawPath:transformRawPath,getGlobalMatrix:getGlobalMatrix,getPositionOnPath:getPositionOnPath,cacheRawPathMeasurements:cacheRawPathMeasurements,convertToPath:function convertToPath$1(t,e){return Q(t).map(function(t){return convertToPath(t,!1!==e)})},convertCoordinates:function convertCoordinates(t,e,n){var r=getGlobalMatrix(e,!0,!0).multiply(getGlobalMatrix(t));return n?r.apply(n):r},getAlignMatrix:na,getRelativePosition:function getRelativePosition(t,e,n,r){var a=na(t,e,n,r);return{x:a.e,y:a.f}},arrayToRawPath:function arrayToRawPath(t,e){var n=ga(ga([],t,(e=e||{}).x||"x",0),t,e.y||"y",1);return e.relative&&ia(n),["cubic"===e.type?n:pointsToSegment(n,e.curviness)]}};!function _getGSAP(){return j||"undefined"!=typeof window&&(j=window.gsap)&&j.registerPlugin&&j}()||j.registerPlugin(a),t.MotionPathPlugin=a,t.default=a;if (typeof(window)==="undefined"||window!==t){Object.defineProperty(t,"__esModule",{value:!0})} else {delete t.default}});

`, Or = 'gsap.to("#whole-island",{transformOrigin:"bottom center",y:-15,rotation:1,duration:1,ease:"sine.inOut",yoyo:true,repeat:-1});gsap.fromTo("#tree",{transformOrigin:"bottom center",rotation:-6},{transformOrigin:"bottom center",rotation:5,duration:2,ease:"sine.inOut",yoyo:true,repeat:-1});gsap.to("#leaf1",{transformOrigin:"center right",y:-3,duration:1,ease:"sine.inOut",yoyo:true,repeat:-1});gsap.fromTo("#leaf2",{transformOrigin:"bottom right",rotation:3},{transformOrigin:"bottom right",rotation:-4,x:-3,y:-3,duration:1,ease:"sine.inOut",yoyo:true,repeat:-1});gsap.to("#leaf3",{transformOrigin:"bottom center",rotation:-6,duration:1,ease:"sine.inOut",yoyo:true,repeat:-1});gsap.to("#leaf4",{transformOrigin:"bottom left",rotation:-6,y:-3,duration:1,ease:"sine.inOut",yoyo:true,repeat:-1});gsap.to("#leaf5",{transformOrigin:"top left",y:-3,duration:1,ease:"sine.inOut",yoyo:true,repeat:-1});gsap.to("#water-circle1",{transformOrigin:"center center",scaleX:1.2,duration:1,ease:"sine.inOut",yoyo:true,repeat:-1});gsap.to("#water-circle2",{transformOrigin:"center center",scaleX:0.8,duration:1,ease:"sine.inOut",yoyo:true,repeat:-1,delay:-0.5});gsap.fromTo("#tri-wave1",{x:-60},{x:20,duration:6,repeat:-1,ease:"none"});gsap.fromTo("#tri-wave2",{x:-10},{x:50,duration:6,repeat:-1,ease:"none"});gsap.fromTo("#tri-wave1>path, #tri-wave2>path",{scaleY:0},{scaleY:1,duration:1,repeat:-1,yoyo:true,transformOrigin:"bottom center"});gsap.fromTo("#sine-wave-group *",{x:0},{x:75,repeat:-1,duration:2,ease:"none"});gsap.fromTo("#sine-wave-group *",{scaleY:0.8,transformOrigin:"bottom center"},{scaleY:1.2,transformOrigin:"bottom center",repeat:-1,duration:1,yoyo:true,ease:"sine.inOut"});gsap.registerPlugin(MotionPathPlugin);gsap.set("#fish-path",{scaleY:1.3,scaleX:1.3,transformOrigin:"bottom left"});gsap.to("#fish",{duration:3,repeat:-1,repeatDelay:4,ease:"slow(0.3, 0.7, false)",immediateRender:true,motionPath:{path:"#fish-path",align:"#fish-path",alignOrigin:[0.5,0.5],autoRotate:true,start:0,end:1}});', Dr = `<svg viewBox="0 0 446 540" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" class="illustration">
<defs>
    <path id="wave-segment" d="M78.238,447.196C99.161,447.224 102.365,433.986 117.183,433.986C132.006,433.986 138.546,447.165 154.302,447.165C170.057,447.165 179.54,433.877 192.035,433.877C204.53,433.877 212.069,447.271 228.234,447.2L228.238,447.2L228.238,456.742L174.344,456.758L78.238,456.773L78.238,447.196Z" style="fill:rgb(186,228,240);"></path>
    <path id="fish-path" d="M13.805,497.326C13.805,497.384 14.676,454.6 14.676,454.6C15.117,447.421 27.398,371.652 61.333,371.652C95.268,371.652 105.059,451.758 105.059,454.992C105.059,458.227 106.846,496.252 106.846,496.252"></path>
</defs>
<g id="scene">
    <mask id="fish-mask">
        <rect x="0" y="291" width="230" height="122" style="fill:white;"></rect>
    </mask>
    <mask id="leaves">
        <path id="leaf3" d="M240.331,175.61C249.784,176.339 250.158,149.143 251.971,143.795C253.784,138.446 265.447,112.749 300.347,88.992C309.312,82.889 273.249,84.744 262.701,95.4C262.408,95.697 299.949,59.14 306.273,31.167C307.299,26.628 249.717,36.275 232.63,81.142C222.01,109.028 230.879,174.881 240.331,175.61Z" style="fill:white;"></path>
        <path id="leaf4" d="M235.235,178.598C230.936,186.776 266.297,154.023 318.903,172.056C323.277,173.556 316.664,157.916 303.38,150.707C300.853,149.335 357.48,165.86 365.744,172.947C369.234,175.941 366.977,149.035 343.343,139.012C342.972,138.854 395.083,146.153 405.989,149.98C402.419,131.963 371.178,102.148 331.289,103.467C302.148,104.431 250.238,129.248 235.235,178.598Z" style="fill:white;"></path>
        <path id="leaf5" d="M225.34,183.401C242.089,183.539 293.669,185.304 293.267,235.202C301.036,226.747 302.632,218.437 301.053,208.836C307.555,214.258 316.799,229.731 326.228,250.463C335.015,247.135 333.311,224.064 332.455,221.081C331.599,218.098 353.49,248.751 367.144,253.999C374.306,246.977 367.541,201.115 334.573,182.932C301.604,164.749 252.16,164.232 222.521,178.152C219.051,180.584 208.59,183.263 225.34,183.401Z" style="fill:white;"></path>
        <path id="leaf2" d="M258.286,187.293C240.185,184.835 213.891,161.373 191.899,150.057C181.762,144.841 155.131,147.377 152.51,147.063C149.889,146.749 160.892,131.003 174.394,130.585C148.357,121.905 126.027,133.793 123.824,131.978C121.622,130.162 125.177,116.202 149.97,106.951C148.994,105.186 114.646,110.911 94.891,95.692C89.271,91.895 124.581,66.427 144.554,68.645C164.527,70.862 192.389,70.409 230.889,143.333C236.093,156.138 252.386,169.599 252.386,169.599C259.636,174.413 265.589,189.696 258.286,187.293Z" style="fill:white;"></path>
        <path id="leaf1" d="M258.286,187.293C240.185,184.835 210.105,169.378 185.032,211.545C181.648,215.311 177.193,210.024 179.458,194.986C169.272,211.871 150.363,232.47 145.605,231.801C140.847,231.132 144.651,202.538 148.831,194.882C141.881,190.227 118.57,237.947 114.874,238.097C104.523,239.756 100.911,141.41 191.899,150.057C234.088,154.067 252.386,169.599 252.386,169.599C259.636,174.413 265.589,189.696 258.286,187.293Z" style="fill:white;"></path>
    </mask>
    <mask id="water-mask">
        <path id="water-mask" d="M357.315,457.852C357.437,447.646 336.649,432.68 329.793,430.146C322.936,427.612 314.374,428.513 238.56,428.513C162.746,428.513 145.106,431.336 137.885,433.152C120.949,437.411 109.195,447.259 109.195,458.368C109.195,465.163 130.018,472.394 230.463,472.394C330.908,472.394 357.193,468.059 357.315,457.852Z" style="fill:white;"></path>
    </mask>
    <ellipse id="water-circle1" cx="232.22" cy="476.77" rx="98.92" ry="27.85" fill="#12b2da"></ellipse>
    <ellipse id="water-circle2" cx="258.15" cy="505.32" rx="73.8" ry="18.22" fill="#12b2da"></ellipse>
    <g mask="url(#fish-mask)">
        <path mask="url(#fish-mask)" id="fish" d="M50.84 379.73a.82.82 0 001.19 1.08c4.62-3.66 8.38-6.75 12.4-6.27 4.93.6 7.64 4.13 11.17 7.58 3.54 3.46 12.51 5.33 15.32 1.09 2.81-4.25.94-12.5-3.43-15.8-4.1-3.11-15.71-5.28-23.96-.09a40.6 40.6 0 00-12.7 12.41z" fill="#0793b8"></path>
    </g>
    <g id="tri-wave2" fill="#2ec3ec">
        <path d="M32.73 413.4a1.27 1.27 0 012.05.01l21.54 29.41a1.27 1.27 0 01-1.02 2.02H12.03a1.27 1.27 0 01-1.02-2.02l21.72-29.41z"></path>
        <path d="M76.46 413.4a1.27 1.27 0 012.04.01l21.55 29.41a1.27 1.27 0 01-1.02 2.02H55.76a1.27 1.27 0 01-1.02-2.02l21.72-29.41z"></path>
        <path d="M120.35 413.4a1.27 1.27 0 012.04.01l21.55 29.41a1.27 1.27 0 01-1.03 2.02H99.66a1.27 1.27 0 01-1.02-2.02l21.72-29.41z"></path>
    </g>
    <g id="whole-island">
        <g id="tree">
            <g id="trunk">
                <path d="M213.22 300.79c5.11-16.37 25.14-63.35 19.41-78.67-2.73-6.27-5.74 4.48-7.08 6.09-1.33 1.61-9.85-17.34-13.5-17.37-3.66-.02-2.22 4.79-6.04 3.71-3.82-1.07-11.66-5.68-6.03-12.13 3.44-4.26-.36-7.98-7.01-8.9-6.66-.9 3.72-18.2 10.99-20.22 7.26-2 48.02-11.76 69.87 9.27 13.25 12.6 10.28 12.74 6.7 13.47-3.58.72-8.31-1.49-9.12.87-.81 2.36-.34 7.25-4.09 10.01s-13.19 6.65-12.11 8.26c1.08 1.6 15.9 56.5 2.36 89.27-18.8-.05-47.45 1.59-44.35-3.66z" fill="#e5b13b"></path>
                <path d="M255.2 215.18c.68 1-3.42-2-9.85-1.73-3.92.16-11.38 3.5-12.72 8.68-2.73-6.28-5.74 4.47-7.08 6.08-1.33 1.61-9.85-17.34-13.5-17.37-3.66-.02-7.84-13.08-14.36-16.05-4.95-2.25 16.2-13.42 28.46-12.84 7.91.37 33.58 2.68 42.53 8.4 4.54 2.9 3.46 5.03 1.77 12.55-1.34 5.94-16.32 10.67-15.24 12.28zM261.06 242.04c.85 5.74 1.55 12.04 1.92 18.54l-4.57 4.63-4.45-10.34-9.79 11.7-6.07-9.77-6.5 10.4-5.44-3.51c1.88-5.83 3.61-11.7 4.93-17.21l6.36-6.74 7.26 6.83 9.3-8.82 7.05 4.3z" fill="#f2e390"></path>
                <path d="M224.3 199.7c9.25-4.05 13.24 13.88 4.94 17.24-8.3 3.36-12.8-13.8-4.93-17.25zM247.78 186.94c5.3-8.59 18.79 3.88 13.88 11.37-4.91 7.5-18.4-4.05-13.88-11.37z" fill="#e5b13b"></path>
            </g>
            <g id="leaf-bg" mask="url(#leaves)">
                <path fill="#ABD25E" d="M52.91 2.99h386.67V280.6H52.91z"></path>
                <ellipse cx="236.41" cy="137.75" rx="125.06" ry="80.87" fill="#8cc751"></ellipse>
            </g>
        </g>
        <g id="island">
            <path id="island-dirt" d="M344.8 381.58c-3.22-6.65-224.38-19.67-224.1 12.27v9.44c0 23 7.75 44.2 20.79 61.13 2.87 4.2 177.12 3.56 182.8.64a99.87 99.87 0 0021.3-61.77c0-18.04.38-19.29-.78-21.7z" fill="#fed09d"></path>
            <path id="island-dirt1" d="M283.82 374.64c33.92 1.72 59.9 4.7 60.99 6.94 1.16 2.42.77 3.67.77 21.71a99.87 99.87 0 01-21.28 61.77c-1.62.83-16.96 1.48-38.1 1.88a340.61 340.61 0 002.05-37.63 333.1 333.1 0 00-4.43-54.67z" fill="#fbb381" fill-opacity=".97"></path>
            <path d="M258.9 393.96s-5.6 48.68-12 63.21c-6.39 14.53.83-57.2-7.37-76.36-8.21-19.16 19.36 13.15 19.36 13.15zM132.09 380.06s7.16 63.86 33.56 86.93c7.92.12 16.42.15 16.42.15s-29.56-66.88-25.57-83.3c-9.14-3.15-24.41-3.78-24.41-3.78z" fill="#fbb381"></path>
            <path id="Grass" d="M207.31 296.89c1.53-5.52 4.13-14.63 5.08-15.86 1.37-1.8 11.24 11.8 13 12.45 1.77.66 10.36-9.54 12.57-10.46 2.2-.92 13.4 10.9 15 11.69 1.6.79 15.09-13.1 16.87-12.77 1.2.22 1.9 10.6 2.47 17.92 60.25 15.2 73 64.26 73.43 88.25-3.87-.2-8.18 8.96-12.77 10.35-4.6 1.39-16.02-4.5-20.17-3.32-4.16 1.19-14.83 10.42-19.82 10.7-4.99.28-11.34-6.23-16-5.48-4.67.74-12.37 8.56-18.45 8.5-6.08-.08-9.08-6.6-15.72-6.59-6.65.03-16.76 8.65-20.3 9-3.54.37-12.63-10.06-17.24-9.74-4.62.32-13.67 8.36-18.57 8.2-4.91-.16-12.44-9.97-16.59-9.58-4.14.4-15.47 7.5-19.98 5.96-4.5-1.55-7.6-10.46-14.42-11.45-6.78-1-8.81 1.85-15.6 1.53.9-30.06 12.28-88.8 87.21-99.3z" fill="#8cc751"></path>
            <g id="grass-shapes">
                <path d="M187.54 351.45a1.26 1.26 0 011.9-.61l23.64 15.98a1.26 1.26 0 01-.31 2.24c-6.9 2.24-26.46 8.6-33.37 10.86a1.26 1.26 0 01-1.57-1.63l9.71-26.84zM246.08 320.07a1.26 1.26 0 011.97.2l15.04 24.27a1.26 1.26 0 01-1.2 1.91l-34.9-3.75a1.26 1.26 0 01-.76-2.12l19.85-20.51zM278.82 342.07c.04-.37.25-.72.58-.93.32-.22.72-.27 1.08-.15l26.67 8.65c.45.15.77.54.82 1 .06.47-.16.93-.57 1.2l-29.33 19.25c-.4.27-.91.28-1.32.05a1.2 1.2 0 01-.6-1.15l2.68-27.92z" fill="#bbd86a"></path>
                <path d="M295.38 308.3A90 90 0 01323.55 330l-43.68-5.05a1.63 1.63 0 01-1.32-.92c-.21-.49-.08-1.03.33-1.39l16.5-14.33z" fill="#78bb4d"></path>
                <path d="M164.06 311.45l6.7 5.53c.43.34.57.88.37 1.38-.2.5-.7.86-1.3.95l-19.9 2.83a85.74 85.74 0 0114.13-10.7z" fill="#bbd86a"></path>
                <path id="Grass1" d="M134.1 342.3l26.84-.64c.51-.02.99.2 1.22.55.23.35.19.77-.12 1.09l-18.3 18.9c-.24.25-.63.4-1.04.42-.42 0-.81-.13-1.07-.38l-11.92-11.2a94.53 94.53 0 014.4-8.75z" fill="#78bb4d"></path>
                <path d="M198.96 298.3l2.04 9.27c.09.39-.06.79-.37 1.03s-.74.29-1.1.11l-14.2-6.87c4.26-1.38 8.8-2.56 13.63-3.53z" fill="#bbd86a"></path>
                <path d="M331.63 375.4a.9.9 0 01-.56.38.9.9 0 01-.67-.1l-13.5-8.62a.54.54 0 01-.23-.64.84.84 0 01.62-.52l21.78-5.07c.3-.07.6 0 .79.19.18.18.2.44.06.67l-8.29 13.7zM208.4 334.54a.81.81 0 01-.69.12.81.81 0 01-.54-.44c-1.36-2.99-6.69-13.48-8.36-17.14a.74.74 0 01.12-.8.8.8 0 01.8-.24l21.68 5.65c.3.08.52.31.59.6a.74.74 0 01-.3.76c-3.23 2.38-10.65 9.55-13.3 11.49z" fill="#78bb4d"></path>
            </g>
        </g>
    </g>
    <path id="front-water" d="M357.31 457.85c-.49-8.02-19.23-9.86-34.35-8.83-7.3.5-11.12 5.67-86.93 5.67-75.82 0-101.03-6.83-109.88-6.76-7.44.06-16.96 3.64-16.96 10.44 0 6.8 20.83 14.02 121.27 14.02 100.45 0 127.48-4.35 126.85-14.54z" fill="#bae4f0"></path>
    <g id="tri-wave1" fill="#2ec3ec">
        <path d="M366.29 502.93a1.27 1.27 0 012.04 0l21.55 29.42a1.27 1.27 0 01-1.03 2.02h-43.27a1.27 1.27 0 01-1.01-2.02l21.72-29.42z"></path>
        <path d="M322.56 502.93a1.27 1.27 0 012.04 0l21.55 29.42a1.27 1.27 0 01-1.02 2.02h-43.27a1.27 1.27 0 01-1.02-2.02l21.72-29.42zM410.18 502.93a1.27 1.27 0 012.04 0l21.54 29.42a1.27 1.27 0 01-1.02 2.02h-43.27a1.27 1.27 0 01-1.02-2.02l21.73-29.42z"></path>
    </g>
    <g mask="url(#water-mask)" id="sine-wave-group">
        <use href="#wave-segment" id="wave-segment-0" x="-150"></use>
        <use href="#wave-segment" id="wave-segment-1"></use>
        <use href="#wave-segment" id="wave-segment-2" x="150"></use>
        <use href="#wave-segment" id="wave-segment-3" x="3000"></use>
    </g>
</g></svg>`, Ar = ({ className: t, style: a, active: r = !0 }) => {
  const i = E(null), s = E(null), e = E(null);
  return P(() => {
    if (!i.current) return;
    const o = document.createElement("script");
    o.textContent = Sr, i.current.appendChild(o);
    const l = document.createElement("script");
    l.textContent = Rr, i.current.appendChild(l);
    const c = document.createElement("script");
    return c.textContent = Or, i.current.appendChild(c), () => {
      o.remove(), l.remove(), c.remove();
    };
  }, []), P(() => {
    if (!e.current || !s.current || !i.current) return;
    const o = e.current.getBoundingClientRect(), l = Math.max(o.width, o.height), c = l / 5 + 5, _ = Math.max(0.1, l / 1500);
    r ? (s.current.style.opacity = "0", s.current.style.transform = "scale(1)", i.current.style.display = "flex") : (s.current.style.opacity = "1", s.current.style.transform = "scale(1)", requestAnimationFrame(() => {
      s.current && i.current && (s.current.style.transition = `transform ${_}s linear`, s.current.style.transform = `scale(${c})`, setTimeout(() => {
        i.current && (i.current.style.display = "none");
      }, _ * 1e3));
    }));
  }, [r]), /* @__PURE__ */ n("div", { ref: e, children: /* @__PURE__ */ f("div", { ref: i, className: `${Q.container} ${t || ""}`, style: a, children: [
    /* @__PURE__ */ n("div", { dangerouslySetInnerHTML: { __html: Dr } }),
    /* @__PURE__ */ n("div", { ref: s, className: Q.fadeCircle })
  ] }) });
};
Ar.displayName = "Loading";
export {
  q as Button,
  he as Card,
  Tr as Checkbox,
  Gr as CodeBlock,
  Te as Collapse,
  U as Cursor,
  bn as Divider,
  fe as Footer,
  $r as ICON_LIST,
  Fr as Icon,
  Ot as Input,
  Ar as Loading,
  Xt as Modal,
  Er as Phone,
  Xn as Select,
  $t as Switch,
  sr as Tabs,
  Ae as Time,
  K as Typewriter
};
