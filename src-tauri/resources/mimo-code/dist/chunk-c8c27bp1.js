// @bun
import {
  Select,
  calculateShouldShowGrove,
  getGroveNoticeConfig,
  getGroveSettings,
  init_CustomSelect,
  init_grove,
  markGroveNoticeViewed,
  updateGroveSettings
} from "./chunk-ktw919wt.js";
import {
  Byline,
  Dialog,
  KeyboardShortcutHint,
  Link,
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
import {
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/components/grove/Grove.tsx
function GracePeriodContentBody() {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        children: [
          "An update to our Consumer Terms and Privacy Policy will take effect on",
          " ",
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            bold: true,
            children: "October 8, 2025"
          }, undefined, false, undefined, this),
          ". You can accept the updated terms today."
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: "What's changing?"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            paddingLeft: 1,
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              children: [
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                  children: "\xB7 "
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                  bold: true,
                  children: "You can help improve MiMo "
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                  children: [
                    "\u2014 Allow the use of your chats and coding sessions to train and improve Xiaomi MiMo AI models. Change anytime in your Privacy Settings (",
                    /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Link, {
                      url: "https://claude.ai/settings/data-privacy-controls"
                    }, undefined, false, undefined, this),
                    ")."
                  ]
                }, undefined, true, undefined, this)
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            paddingLeft: 1,
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              children: [
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                  children: "\xB7 "
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                  bold: true,
                  children: "Updates to data retention "
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                  children: "\u2014 To help us improve our AI models and safety protections, we're extending data retention to 5 years."
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        children: [
          "Learn more (",
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Link, {
            url: "https://www.anthropic.com/news/updates-to-our-consumer-terms"
          }, undefined, false, undefined, this),
          ") or read the updated Consumer Terms (",
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Link, {
            url: "https://anthropic.com/legal/terms"
          }, undefined, false, undefined, this),
          ") and Privacy Policy (",
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Link, {
            url: "https://anthropic.com/legal/privacy"
          }, undefined, false, undefined, this),
          ")"
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function PostGracePeriodContentBody() {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        children: "We've updated our Consumer Terms and Privacy Policy."
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        gap: 1,
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            children: "What's changing?"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                bold: true,
                children: "Help improve MiMo"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                children: "Allow the use of your chats and coding sessions to train and improve Anthropic AI models. You can change this anytime in Privacy Settings"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Link, {
                url: "https://claude.ai/settings/data-privacy-controls"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                bold: true,
                children: "How this affects data retention"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                children: "Turning ON the improve MiMo setting extends data retention from 30 days to 5 years. Turning it OFF keeps the default 30-day data retention. Delete data anytime."
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        children: [
          "Learn more (",
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Link, {
            url: "https://www.anthropic.com/news/updates-to-our-consumer-terms"
          }, undefined, false, undefined, this),
          ") or read the updated Consumer Terms (",
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Link, {
            url: "https://anthropic.com/legal/terms"
          }, undefined, false, undefined, this),
          ") and Privacy Policy (",
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Link, {
            url: "https://anthropic.com/legal/privacy"
          }, undefined, false, undefined, this),
          ")"
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function GroveDialog({
  showIfAlreadyViewed,
  location,
  onDone
}) {
  const [shouldShowDialog, setShouldShowDialog] = import_react.useState(null);
  const [groveConfig, setGroveConfig] = import_react.useState(null);
  import_react.useEffect(() => {
    async function checkGroveSettings() {
      const [settingsResult, configResult] = await Promise.all([
        getGroveSettings(),
        getGroveNoticeConfig()
      ]);
      const config = configResult.success ? configResult.data : null;
      setGroveConfig(config);
      const shouldShow = calculateShouldShowGrove(settingsResult, configResult, showIfAlreadyViewed);
      setShouldShowDialog(shouldShow);
      if (!shouldShow) {
        onDone("skip_rendering");
        return;
      }
      markGroveNoticeViewed();
      logEvent("tengu_grove_policy_viewed", {
        location,
        dismissable: config?.notice_is_grace_period
      });
    }
    checkGroveSettings();
  }, [showIfAlreadyViewed, location, onDone]);
  if (shouldShowDialog === null) {
    return null;
  }
  if (!shouldShowDialog) {
    return null;
  }
  async function onChange(value) {
    switch (value) {
      case "accept_opt_in": {
        await updateGroveSettings(true);
        logEvent("tengu_grove_policy_submitted", {
          state: true,
          dismissable: groveConfig?.notice_is_grace_period
        });
        break;
      }
      case "accept_opt_out": {
        await updateGroveSettings(false);
        logEvent("tengu_grove_policy_submitted", {
          state: false,
          dismissable: groveConfig?.notice_is_grace_period
        });
        break;
      }
      case "defer":
        logEvent("tengu_grove_policy_dismissed", {
          state: true
        });
        break;
      case "escape":
        logEvent("tengu_grove_policy_escaped", {});
        break;
    }
    onDone(value);
  }
  const acceptOptions = groveConfig?.domain_excluded ? [
    {
      label: "Accept terms \xB7 Help improve MiMo: OFF (for emails with your domain)",
      value: "accept_opt_out"
    }
  ] : [
    {
      label: "Accept terms \xB7 Help improve MiMo: ON",
      value: "accept_opt_in"
    },
    {
      label: "Accept terms \xB7 Help improve MiMo: OFF",
      value: "accept_opt_out"
    }
  ];
  function handleCancel() {
    if (groveConfig?.notice_is_grace_period) {
      onChange("defer");
      return;
    }
    onChange("escape");
  }
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Dialog, {
    title: "Updates to Consumer Terms and Policies",
    color: "professionalBlue",
    onCancel: handleCancel,
    inputGuide: (exitState) => exitState.pending ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
      children: [
        "Press ",
        exitState.keyName,
        " again to exit"
      ]
    }, undefined, true, undefined, this) : /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Byline, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(KeyboardShortcutHint, {
          shortcut: "Enter",
          action: "confirm"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(KeyboardShortcutHint, {
          shortcut: "Esc",
          action: "cancel"
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this),
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "row",
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            gap: 1,
            flexGrow: 1,
            children: groveConfig?.notice_is_grace_period ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(GracePeriodContentBody, {}, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime.jsxDEV(PostGracePeriodContentBody, {}, undefined, false, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            flexShrink: 0,
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              color: "professionalBlue",
              children: NEW_TERMS_ASCII
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        gap: 1,
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            flexDirection: "column",
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                bold: true,
                children: "Please select how you'd like to continue"
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                children: "Your choice takes effect immediately upon confirmation."
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Select, {
            options: [
              ...acceptOptions,
              ...groveConfig?.notice_is_grace_period ? [{ label: "Not now", value: "defer" }] : []
            ],
            onChange: (value) => onChange(value),
            onCancel: handleCancel
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function PrivacySettingsDialog({
  settings,
  domainExcluded,
  onDone
}) {
  const [groveEnabled, setGroveEnabled] = import_react.useState(settings.grove_enabled);
  import_react.default.useEffect(() => {
    logEvent("tengu_grove_privacy_settings_viewed", {});
  }, []);
  use_input_default(async (input, key) => {
    if (!domainExcluded && (key.tab || key.return || input === " ")) {
      const newValue = !groveEnabled;
      setGroveEnabled(newValue);
      await updateGroveSettings(newValue);
    }
  });
  let valueComponent = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
    color: "error",
    children: "false"
  }, undefined, false, undefined, this);
  if (domainExcluded) {
    valueComponent = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
      color: "error",
      children: "false (for emails with your domain)"
    }, undefined, false, undefined, this);
  } else if (groveEnabled) {
    valueComponent = /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
      color: "success",
      children: "true"
    }, undefined, false, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Dialog, {
    title: "Data Privacy",
    color: "professionalBlue",
    onCancel: onDone,
    inputGuide: (exitState) => exitState.pending ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
      children: [
        "Press ",
        exitState.keyName,
        " again to exit"
      ]
    }, undefined, true, undefined, this) : domainExcluded ? /* @__PURE__ */ jsx_dev_runtime.jsxDEV(KeyboardShortcutHint, {
      shortcut: "Esc",
      action: "cancel"
    }, undefined, false, undefined, this) : /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Byline, {
      children: [
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(KeyboardShortcutHint, {
          shortcut: "Enter/Tab/Space",
          action: "toggle"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime.jsxDEV(KeyboardShortcutHint, {
          shortcut: "Esc",
          action: "cancel"
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this),
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        children: [
          "Review and manage your privacy settings at",
          " ",
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(Link, {
            url: "https://claude.ai/settings/data-privacy-controls"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            width: 44,
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              bold: true,
              children: "Help improve MiMo"
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            children: valueComponent
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var import_react, jsx_dev_runtime, NEW_TERMS_ASCII = ` _____________
 |          \\  \\
 | NEW TERMS \\__\\
 |              |
 |  ----------  |
 |  ----------  |
 |  ----------  |
 |  ----------  |
 |  ----------  |
 |              |
 |______________|`;
var init_Grove = __esm(() => {
  init_analytics();
  init_src();
  init_grove();
  init_CustomSelect();
  init_src();
  import_react = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});

export { GroveDialog, PrivacySettingsDialog, init_Grove };
