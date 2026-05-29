// @bun
import {
  init_setup,
  isChromeExtensionInstalled
} from "./chunk-5w4m2atj.js";
import"./chunk-ym5r3jnk.js";
import {
  Select,
  init_AppState,
  init_select,
  useAppState
} from "./chunk-ktw919wt.js";
import"./chunk-qwtafr2b.js";
import"./chunk-jz6xf3ty.js";
import"./chunk-et824jj8.js";
import"./chunk-var1et7e.js";
import"./chunk-v81kv9zm.js";
import"./chunk-chmfqs2y.js";
import"./chunk-1gfk9pd3.js";
import"./chunk-2gzv8nrw.js";
import"./chunk-ehtwnxpg.js";
import"./chunk-1th1nz5d.js";
import"./chunk-x6pa9me9.js";
import"./chunk-wbtp4zy8.js";
import"./chunk-ypmcesxe.js";
import"./chunk-ybaawhyf.js";
import"./chunk-bhdt6k7w.js";
import"./chunk-cgfdkzhb.js";
import"./chunk-0rstde44.js";
import"./chunk-2cvt1abr.js";
import {
  CLAUDE_IN_CHROME_MCP_SERVER_NAME,
  init_common,
  openInChrome
} from "./chunk-5ptgeqdf.js";
import"./chunk-1jvg23ym.js";
import"./chunk-akkx6jmm.js";
import"./chunk-7fht54sw.js";
import"./chunk-pfhyp451.js";
import"./chunk-25ctr1k2.js";
import"./chunk-azxwk3qa.js";
import"./chunk-2e52n52z.js";
import"./chunk-dsnwry8r.js";
import"./chunk-ps49ymvj.js";
import"./chunk-t4kcvmes.js";
import"./chunk-tas8sqfx.js";
import"./chunk-kqqj7b7y.js";
import"./chunk-edqtm6y0.js";
import"./chunk-jakzh3ae.js";
import"./chunk-wf3yck87.js";
import"./chunk-1r0yky0f.js";
import"./chunk-jtnkamme.js";
import"./chunk-92f9twfz.js";
import {
  init_browser,
  openBrowser
} from "./chunk-6dj3cf9s.js";
import"./chunk-dn7vyq4j.js";
import"./chunk-4jm600zv.js";
import"./chunk-vs4r0kd5.js";
import"./chunk-g57ncwpz.js";
import"./chunk-9pp18zcp.js";
import"./chunk-h1xx834r.js";
import"./chunk-p8zggt02.js";
import"./chunk-6rj8k2tr.js";
import"./chunk-x69b8r8v.js";
import"./chunk-gx4kmdam.js";
import"./chunk-b53tzh92.js";
import"./chunk-gd6w3h9n.js";
import {
  getGlobalConfig,
  init_auth,
  init_config1 as init_config,
  isClaudeAISubscriber,
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
import {
  env,
  init_env
} from "./chunk-nw7v8w65.js";
import"./chunk-xhesahm0.js";
import"./chunk-rh5a2rg9.js";
import"./chunk-4cp6193g.js";
import"./chunk-8g747a8x.js";
import"./chunk-d7886r6a.js";
import"./chunk-adnxyg7j.js";
import"./chunk-djs11qd6.js";
import"./chunk-nrv96v1h.js";
import"./chunk-gdqk4ssq.js";
import"./chunk-bwawjerw.js";
import"./chunk-p2816w9z.js";
import"./chunk-v9smspw2.js";
import"./chunk-v1kzp02e.js";
import"./chunk-x5hyyhqf.js";
import"./chunk-crmjpsqe.js";
import {
  Dialog,
  ThemedBox_default,
  ThemedText,
  init_src
} from "./chunk-er1s76c9.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "./chunk-b5wxetbv.js";
import"./chunk-f2mhrmww.js";
import"./chunk-0vkfrmqm.js";
import"./chunk-0xjaqda8.js";
import"./chunk-c84gr0s2.js";
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
import {
  init_envUtils,
  isRunningOnHomespace
} from "./chunk-hxhwzgnn.js";
import"./chunk-qx8z601m.js";
import"./chunk-cgm6758j.js";
import"./chunk-3v4d4h0t.js";
import"./chunk-8pn8tvgg.js";
import"./chunk-netzwgv1.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/commands/chrome/chrome.tsx
function ClaudeInChromeMenu({
  onDone,
  isExtensionInstalled: installed,
  configEnabled,
  isClaudeAISubscriber: isClaudeAISubscriber2,
  isWSL
}) {
  const mcpClients = useAppState((s) => s.mcp.clients);
  const [selectKey, setSelectKey] = import_react.useState(0);
  const [enabledByDefault, setEnabledByDefault] = import_react.useState(configEnabled ?? false);
  const [showInstallHint, setShowInstallHint] = import_react.useState(false);
  const [isExtensionInstalled, setIsExtensionInstalled] = import_react.useState(installed);
  const isHomespace = process.env.USER_TYPE === "ant" && isRunningOnHomespace();
  const chromeClient = mcpClients.find((c) => c.name === CLAUDE_IN_CHROME_MCP_SERVER_NAME);
  const isConnected = chromeClient?.type === "connected";
  function openUrl(url) {
    if (isHomespace) {
      openBrowser(url);
    } else {
      openInChrome(url);
    }
  }
  function handleAction(action) {
    switch (action) {
      case "install-extension":
        setSelectKey((k) => k + 1);
        setShowInstallHint(true);
        openUrl(CHROME_EXTENSION_URL);
        break;
      case "reconnect":
        setSelectKey((k) => k + 1);
        isChromeExtensionInstalled().then((installed2) => {
          setIsExtensionInstalled(installed2);
          if (installed2) {
            setShowInstallHint(false);
          }
        });
        openUrl(CHROME_RECONNECT_URL);
        break;
      case "manage-permissions":
        setSelectKey((k) => k + 1);
        openUrl(CHROME_PERMISSIONS_URL);
        break;
      case "toggle-default": {
        const newValue = !enabledByDefault;
        saveGlobalConfig((current) => ({
          ...current,
          claudeInChromeDefaultEnabled: newValue
        }));
        setEnabledByDefault(newValue);
        break;
      }
    }
  }
  const options = [];
  const requiresExtensionSuffix = isExtensionInstalled ? "" : " (requires extension)";
  if (!isExtensionInstalled && !isHomespace) {
    options.push({
      label: "Install Chrome extension",
      value: "install-extension"
    });
  }
  options.push({
    label: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: "Manage permissions"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          dimColor: true,
          children: requiresExtensionSuffix
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this),
    value: "manage-permissions"
  }, {
    label: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: "Reconnect extension"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          dimColor: true,
          children: requiresExtensionSuffix
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this),
    value: "reconnect"
  }, {
    label: `Enabled by default: ${enabledByDefault ? "Yes" : "No"}`,
    value: "toggle-default"
  });
  const isDisabled = isWSL || process.env.USER_TYPE !== "ant" && !isClaudeAISubscriber2;
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Dialog, {
    title: "MiMo in Chrome (Beta)",
    onCancel: () => onDone(),
    color: "chromeYellow",
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      gap: 1,
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: "MiMo in Chrome works with the Chrome extension to let you control your browser directly from MiMo Code. Navigate websites, fill forms, capture screenshots, record GIFs, and debug with console logs and network requests."
        }, undefined, false, undefined, this),
        isWSL && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          color: "error",
          children: "MiMo in Chrome is not supported in WSL at this time."
        }, undefined, false, undefined, this),
        process.env.USER_TYPE !== "ant" && !isClaudeAISubscriber2 && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          color: "error",
          children: "MiMo in Chrome requires a claude.ai subscription."
        }, undefined, false, undefined, this),
        !isDisabled && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
          children: [
            !isHomespace && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
              flexDirection: "column",
              children: [
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                  children: [
                    "Status:",
                    " ",
                    isConnected ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                      color: "success",
                      children: "Enabled"
                    }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                      color: "inactive",
                      children: "Disabled"
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                  children: [
                    "Extension:",
                    " ",
                    isExtensionInstalled ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                      color: "success",
                      children: "Installed"
                    }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                      color: "warning",
                      children: "Not detected"
                    }, undefined, false, undefined, this)
                  ]
                }, undefined, true, undefined, this)
              ]
            }, undefined, true, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Select, {
              options,
              onChange: handleAction,
              hideIndexes: true
            }, selectKey, false, undefined, this),
            showInstallHint && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              color: "warning",
              children: [
                "Once installed, select ",
                '"Reconnect extension"',
                " to connect."
              ]
            }, undefined, true, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              children: [
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                  dimColor: true,
                  children: "Usage: "
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                  children: "claude --chrome"
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                  dimColor: true,
                  children: " or "
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                  children: "claude --no-chrome"
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor: true,
              children: "Site-level permissions are inherited from the Chrome extension. Manage permissions in the Chrome extension settings to control which sites MiMo can browse, click, and type on."
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          dimColor: true,
          children: "Learn more: https://code.claude.com/docs/en/chrome"
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
var import_react, jsx_dev_runtime, CHROME_EXTENSION_URL = "https://claude.ai/chrome", CHROME_PERMISSIONS_URL = "https://clau.de/chrome/permissions", CHROME_RECONNECT_URL = "https://clau.de/chrome/reconnect", call = async function(onDone) {
  const isExtensionInstalled = await isChromeExtensionInstalled();
  const config = getGlobalConfig();
  const isSubscriber = isClaudeAISubscriber();
  const isWSL = env.isWslEnvironment();
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ClaudeInChromeMenu, {
    onDone,
    isExtensionInstalled,
    configEnabled: config.claudeInChromeDefaultEnabled,
    isClaudeAISubscriber: isSubscriber,
    isWSL
  }, undefined, false, undefined, this);
};
var init_chrome = __esm(() => {
  init_select();
  init_src();
  init_src();
  init_AppState();
  init_auth();
  init_browser();
  init_common();
  init_setup();
  init_config();
  init_env();
  init_envUtils();
  import_react = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});
init_chrome();

export {
  call
};
