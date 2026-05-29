// @bun
import {
  env,
  init_env
} from "./chunk-nw7v8w65.js";
import {
  ThemedBox_default,
  ThemedText,
  init_src,
  useTheme
} from "./chunk-er1s76c9.js";
import {
  require_jsx_dev_runtime
} from "./chunk-b5wxetbv.js";
import {
  __toESM
} from "./chunk-qp2qdcda.js";

// src/components/LogoV2/WelcomeV2.tsx
init_src();
init_env();
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var WELCOME_V2_WIDTH = 58;
function WelcomeV2() {
  const [theme] = useTheme();
  const welcomeMessage = "Welcome to MiMo Code";
  if (env.terminal === "Apple_Terminal") {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(AppleTerminalWelcomeV2, {
      theme,
      welcomeMessage
    }, undefined, false, undefined, this);
  }
  if (["light", "light-daltonized", "light-ansi"].includes(theme)) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      width: WELCOME_V2_WIDTH,
      children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                color: "claude",
                children: [
                  welcomeMessage,
                  " "
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                dimColor: true,
                children: [
                  "v",
                  "1.0.0",
                  " "
                ]
              }, undefined, true, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: "\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: "                                                          "
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: "                                                          "
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: "                                                          "
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: "            \u2591\u2591\u2591\u2591\u2591\u2591                                        "
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: "    \u2591\u2591\u2591   \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591                                      "
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: "   \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591                                    "
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: "                                                          "
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                dimColor: true,
                children: "                           \u2591\u2591\u2591\u2591"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                children: "                     \u2588\u2588    "
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                dimColor: true,
                children: "                         \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                children: "               \u2588\u2588\u2592\u2592\u2588\u2588  "
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: "                                            \u2592\u2592      \u2588\u2588   \u2592"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: [
              "      ",
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                color: "clawd_body",
                children: " \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 "
              }, undefined, false, undefined, this),
              "                         \u2592\u2592\u2591\u2591\u2592\u2592      \u2592 \u2592\u2592"
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: [
              "      ",
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                color: "clawd_body",
                backgroundColor: "clawd_background",
                children: "\u2588\u2588\u2584\u2588\u2588\u2588\u2588\u2588\u2584\u2588\u2588"
              }, undefined, false, undefined, this),
              "                           \u2592\u2592         \u2592\u2592 "
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: [
              "      ",
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                color: "clawd_body",
                children: " \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 "
              }, undefined, false, undefined, this),
              "                          \u2591          \u2592   "
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: [
              "\u2026\u2026\u2026\u2026\u2026\u2026\u2026",
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                color: "clawd_body",
                children: "\u2588 \u2588   \u2588 \u2588"
              }, undefined, false, undefined, this),
              "\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2591\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2592\u2026\u2026\u2026\u2026"
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
    width: WELCOME_V2_WIDTH,
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: [
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              color: "claude",
              children: [
                welcomeMessage,
                " "
              ]
            }, undefined, true, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor: true,
              children: [
                "v",
                "1.0.0",
                " "
              ]
            }, undefined, true, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: "\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: "                                                          "
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: "     *                                       \u2588\u2588\u2588\u2588\u2588\u2593\u2593\u2591     "
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: "                                 *         \u2588\u2588\u2588\u2593\u2591     \u2591\u2591   "
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: "            \u2591\u2591\u2591\u2591\u2591\u2591                        \u2588\u2588\u2588\u2593\u2591           "
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: "    \u2591\u2591\u2591   \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591                      \u2588\u2588\u2588\u2593\u2591           "
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: [
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              children: "   \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591    "
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              bold: true,
              children: "*"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              children: "                \u2588\u2588\u2593\u2591\u2591      \u2593   "
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: "                                             \u2591\u2593\u2593\u2588\u2588\u2588\u2593\u2593\u2591    "
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          dimColor: true,
          children: " *                                 \u2591\u2591\u2591\u2591                   "
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          dimColor: true,
          children: "                                 \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591                 "
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          dimColor: true,
          children: "                               \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591           "
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: [
            "      ",
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              color: "clawd_body",
              children: " \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 "
            }, undefined, false, undefined, this),
            "                                       ",
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor: true,
              children: "*"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              children: " "
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: [
            "      ",
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              color: "clawd_body",
              children: "\u2588\u2588\u2584\u2588\u2588\u2588\u2588\u2588\u2584\u2588\u2588"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              children: "                        "
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              bold: true,
              children: "*"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              children: "                "
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: [
            "      ",
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              color: "clawd_body",
              children: " \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 "
            }, undefined, false, undefined, this),
            "     *                                   "
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: [
            "\u2026\u2026\u2026\u2026\u2026\u2026\u2026",
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              color: "clawd_body",
              children: "\u2588 \u2588   \u2588 \u2588"
            }, undefined, false, undefined, this),
            "\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026"
          ]
        }, undefined, true, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
function AppleTerminalWelcomeV2({
  theme,
  welcomeMessage
}) {
  const isLightTheme = ["light", "light-daltonized", "light-ansi"].includes(theme);
  if (isLightTheme) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
      width: WELCOME_V2_WIDTH,
      children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                color: "claude",
                children: [
                  welcomeMessage,
                  " "
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                dimColor: true,
                children: [
                  "v",
                  "1.0.0",
                  " "
                ]
              }, undefined, true, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: "\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: "                                                          "
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: "                                                          "
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: "                                                          "
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: "            \u2591\u2591\u2591\u2591\u2591\u2591                                        "
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: "    \u2591\u2591\u2591   \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591                                      "
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: "   \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591                                    "
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: "                                                          "
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                dimColor: true,
                children: "                           \u2591\u2591\u2591\u2591"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                children: "                     \u2588\u2588    "
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                dimColor: true,
                children: "                         \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                children: "               \u2588\u2588\u2592\u2592\u2588\u2588  "
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: "                                            \u2592\u2592      \u2588\u2588   \u2592"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: "                                          \u2592\u2592\u2591\u2591\u2592\u2592      \u2592 \u2592\u2592"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: [
              "      ",
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                color: "clawd_body",
                children: "\u2597"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                color: "clawd_background",
                backgroundColor: "clawd_body",
                children: [
                  " ",
                  "\u2597",
                  "     ",
                  "\u2596",
                  " "
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                color: "clawd_body",
                children: "\u2596"
              }, undefined, false, undefined, this),
              "                           \u2592\u2592         \u2592\u2592 "
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: [
              "       ",
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                backgroundColor: "clawd_body",
                children: " ".repeat(9)
              }, undefined, false, undefined, this),
              "                           \u2591          \u2592   "
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: [
              "\u2026\u2026\u2026\u2026\u2026\u2026\u2026",
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                backgroundColor: "clawd_body",
                children: " "
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                children: " "
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                backgroundColor: "clawd_body",
                children: " "
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                children: "   "
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                backgroundColor: "clawd_body",
                children: " "
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                children: " "
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                backgroundColor: "clawd_body",
                children: " "
              }, undefined, false, undefined, this),
              "\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2591\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2592\u2026\u2026\u2026\u2026"
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this)
    }, undefined, false, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
    width: WELCOME_V2_WIDTH,
    children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: [
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              color: "claude",
              children: [
                welcomeMessage,
                " "
              ]
            }, undefined, true, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor: true,
              children: [
                "v",
                "1.0.0",
                " "
              ]
            }, undefined, true, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: "\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: "                                                          "
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: "     *                                       \u2588\u2588\u2588\u2588\u2588\u2593\u2593\u2591     "
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: "                                 *         \u2588\u2588\u2588\u2593\u2591     \u2591\u2591   "
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: "            \u2591\u2591\u2591\u2591\u2591\u2591                        \u2588\u2588\u2588\u2593\u2591           "
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: "    \u2591\u2591\u2591   \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591                      \u2588\u2588\u2588\u2593\u2591           "
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: [
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              children: "   \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591    "
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              bold: true,
              children: "*"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              children: "                \u2588\u2588\u2593\u2591\u2591      \u2593   "
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: "                                             \u2591\u2593\u2593\u2588\u2588\u2588\u2593\u2593\u2591    "
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          dimColor: true,
          children: " *                                 \u2591\u2591\u2591\u2591                   "
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          dimColor: true,
          children: "                                 \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591                 "
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          dimColor: true,
          children: "                               \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591           "
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: [
            "                                                      ",
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor: true,
              children: "*"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              children: " "
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: [
            "        ",
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              color: "clawd_body",
              children: "\u2597"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              color: "clawd_background",
              backgroundColor: "clawd_body",
              children: [
                " ",
                "\u2597",
                "     ",
                "\u2596",
                " "
              ]
            }, undefined, true, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              color: "clawd_body",
              children: "\u2596"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              children: "                       "
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              bold: true,
              children: "*"
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              children: "                "
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: [
            "        ",
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              backgroundColor: "clawd_body",
              children: " ".repeat(9)
            }, undefined, false, undefined, this),
            "      *                                   "
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: [
            "\u2026\u2026\u2026\u2026\u2026\u2026\u2026",
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              backgroundColor: "clawd_body",
              children: " "
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              children: " "
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              backgroundColor: "clawd_body",
              children: " "
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              children: "   "
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              backgroundColor: "clawd_body",
              children: " "
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              children: " "
            }, undefined, false, undefined, this),
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              backgroundColor: "clawd_body",
              children: " "
            }, undefined, false, undefined, this),
            "\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026"
          ]
        }, undefined, true, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}

export { WelcomeV2 };
