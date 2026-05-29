// @bun
import {
  $toString,
  init_server
} from "./chunk-jdgeec04.js";
import {
  init_useKeybinding
} from "./chunk-dsnwry8r.js";
import {
  Pane,
  ThemedBox_default,
  ThemedText,
  init_src,
  useKeybinding
} from "./chunk-er1s76c9.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "./chunk-b5wxetbv.js";
import"./chunk-0vkfrmqm.js";
import"./chunk-0xjaqda8.js";
import"./chunk-qajrkk97.js";
import"./chunk-50dgek10.js";
import"./chunk-7wm5s02e.js";
import"./chunk-cgm6758j.js";
import"./chunk-netzwgv1.js";
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/commands/mobile/mobile.tsx
function MobileQRCode({ onDone }) {
  const [platform, setPlatform] = import_react.useState("ios");
  const [qrCodes, setQrCodes] = import_react.useState({
    ios: "",
    android: ""
  });
  const { url } = PLATFORMS[platform];
  const qrCode = qrCodes[platform];
  import_react.useEffect(() => {
    async function generateQRCodes() {
      const [ios, android] = await Promise.all([
        $toString(PLATFORMS.ios.url, {
          type: "utf8",
          errorCorrectionLevel: "L"
        }),
        $toString(PLATFORMS.android.url, {
          type: "utf8",
          errorCorrectionLevel: "L"
        })
      ]);
      setQrCodes({ ios, android });
    }
    generateQRCodes().catch(() => {});
  }, []);
  const handleClose = import_react.useCallback(() => {
    onDone();
  }, [onDone]);
  useKeybinding("confirm:no", handleClose, { context: "Confirmation" });
  function handleKeyDown(e) {
    if (e.key === "q" || e.ctrl && e.key === "c") {
      e.preventDefault();
      onDone();
      return;
    }
    if (e.key === "tab" || e.key === "left" || e.key === "right") {
      e.preventDefault();
      setPlatform((prev) => prev === "ios" ? "android" : "ios");
    }
  }
  const lines = qrCode.split(`
`).filter((line) => line.length > 0);
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Pane, {
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      flexDirection: "column",
      tabIndex: 0,
      autoFocus: true,
      onKeyDown: handleKeyDown,
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: " "
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: " "
        }, undefined, false, undefined, this),
        lines.map((line, i) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: line
        }, i, false, undefined, this)),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: " "
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: " "
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
          flexDirection: "row",
          gap: 2,
          children: [
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              children: [
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                  bold: platform === "ios",
                  underline: platform === "ios",
                  children: "iOS"
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                  dimColor: true,
                  children: " / "
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                  bold: platform === "android",
                  underline: platform === "android",
                  children: "Android"
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor: true,
              children: "(tab to switch, esc to close)"
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          dimColor: true,
          children: url
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
async function call(onDone) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(MobileQRCode, {
    onDone
  }, undefined, false, undefined, this);
}
var import_react, jsx_dev_runtime, PLATFORMS;
var init_mobile = __esm(() => {
  init_server();
  init_src();
  init_src();
  init_useKeybinding();
  import_react = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
  PLATFORMS = {
    ios: {
      url: "https://apps.apple.com/app/claude-by-anthropic/id6473753684"
    },
    android: {
      url: "https://play.google.com/store/apps/details?id=com.anthropic.claude"
    }
  };
});
init_mobile();

export {
  call
};
