// @bun
import {
  init_setup,
  isChromeExtensionInstalled
} from "./chunk-5w4m2atj.js";
import"./chunk-ym5r3jnk.js";
import"./chunk-var1et7e.js";
import"./chunk-5ptgeqdf.js";
import {
  init_config1 as init_config,
  saveGlobalConfig
} from "./chunk-1ghcng4e.js";
import"./chunk-pz9t24tq.js";
import"./chunk-4efha55s.js";
import"./chunk-t7f7dp4k.js";
import"./chunk-zwarn9h7.js";
import"./chunk-b127reh2.js";
import"./chunk-et54q618.js";
import"./chunk-pe9b769s.js";
import"./chunk-64c1avct.js";
import"./chunk-8g5pe1gr.js";
import"./chunk-0rbpfkda.js";
import"./chunk-gnw2dwca.js";
import"./chunk-wbmn1xar.js";
import"./chunk-3c25bcsw.js";
import"./chunk-nw7v8w65.js";
import"./chunk-xhesahm0.js";
import"./chunk-rh5a2rg9.js";
import"./chunk-4cp6193g.js";
import"./chunk-8g747a8x.js";
import"./chunk-d7886r6a.js";
import"./chunk-djs11qd6.js";
import"./chunk-gdqk4ssq.js";
import"./chunk-p2816w9z.js";
import"./chunk-v1kzp02e.js";
import"./chunk-x5hyyhqf.js";
import"./chunk-crmjpsqe.js";
import {
  Dialog,
  Link,
  Newline,
  ThemedBox_default,
  ThemedText,
  init_src,
  use_input_default
} from "./chunk-er1s76c9.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "./chunk-b5wxetbv.js";
import {
  init_analytics,
  logEvent
} from "./chunk-f2mhrmww.js";
import"./chunk-0vkfrmqm.js";
import"./chunk-0xjaqda8.js";
import"./chunk-t6jhrn34.js";
import"./chunk-95xve7f8.js";
import"./chunk-jdq8jgyg.js";
import"./chunk-qcwbd71h.js";
import"./chunk-dxvkxgnf.js";
import"./chunk-w5ahy59y.js";
import"./chunk-8tnsngw2.js";
import"./chunk-jkh5s8ct.js";
import"./chunk-kwm5bf2m.js";
import"./chunk-5z28bqne.js";
import"./chunk-qajrkk97.js";
import"./chunk-rpbc3b7k.js";
import"./chunk-fbv4apne.js";
import"./chunk-j5xzpm59.js";
import"./chunk-50dgek10.js";
import"./chunk-7wm5s02e.js";
import"./chunk-d3bk85eq.js";
import"./chunk-cw8rngb2.js";
import"./chunk-hxhwzgnn.js";
import"./chunk-qx8z601m.js";
import"./chunk-cgm6758j.js";
import"./chunk-3v4d4h0t.js";
import"./chunk-8pn8tvgg.js";
import"./chunk-netzwgv1.js";
import {
  __toESM
} from "./chunk-qp2qdcda.js";

// src/components/ClaudeInChromeOnboarding.tsx
init_analytics();
init_src();
init_setup();
init_config();
var import_react = __toESM(require_react(), 1);
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var CHROME_EXTENSION_URL = "https://claude.ai/chrome";
var CHROME_PERMISSIONS_URL = "https://clau.de/chrome/permissions";
function ClaudeInChromeOnboarding({ onDone }) {
  const [isExtensionInstalled, setIsExtensionInstalled] = import_react.default.useState(false);
  import_react.default.useEffect(() => {
    logEvent("tengu_claude_in_chrome_onboarding_shown", {});
    isChromeExtensionInstalled().then(setIsExtensionInstalled);
    saveGlobalConfig((current) => {
      return { ...current, hasCompletedClaudeInChromeOnboarding: true };
    });
  }, []);
  use_input_default((_input, key) => {
    if (key.return) {
      onDone();
    }
  });
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Dialog, {
    title: "MiMo in Chrome (Beta)",
    onCancel: onDone,
    color: "chromeYellow",
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      gap: 1,
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: [
            "MiMo in Chrome works with the Chrome extension to let you control your browser directly from MiMo Code. You can navigate websites, fill forms, capture screenshots, record GIFs, and debug with console logs and network requests.",
            !isExtensionInstalled && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
              children: [
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Newline, {}, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Newline, {}, undefined, false, undefined, this),
                "Requires the Chrome extension. Get started at",
                " ",
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Link, {
                  url: CHROME_EXTENSION_URL
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          dimColor: true,
          children: [
            "Site-level permissions are inherited from the Chrome extension. Manage permissions in the Chrome extension settings to control which sites MiMo can browse, click, and type on",
            isExtensionInstalled && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
              children: [
                " ",
                "(",
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Link, {
                  url: CHROME_PERMISSIONS_URL
                }, undefined, false, undefined, this),
                ")"
              ]
            }, undefined, true, undefined, this),
            "."
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          dimColor: true,
          children: [
            "For more info, use",
            " ",
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              bold: true,
              color: "chromeYellow",
              children: "/chrome"
            }, undefined, false, undefined, this),
            " ",
            "or visit ",
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Link, {
              url: "https://code.claude.com/docs/en/chrome"
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
export {
  ClaudeInChromeOnboarding
};
