// @bun
import {
  checkInstall,
  cleanupNpmInstallations,
  cleanupShellAliases,
  init_nativeInstaller,
  installLatest
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
import"./chunk-5ptgeqdf.js";
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
import"./chunk-6dj3cf9s.js";
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
  getInitialSettings,
  init_settings1 as init_settings,
  updateSettingsForSource
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
  StatusIcon,
  ThemedBox_default,
  ThemedText,
  init_src,
  root_default
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
import {
  errorMessage,
  init_debug,
  init_errors,
  logForDebugging
} from "./chunk-rpbc3b7k.js";
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

// src/commands/install.tsx
init_analytics();
init_src();
init_src();
init_debug();
init_env();
init_errors();
init_nativeInstaller();
init_settings();
var import_react = __toESM(require_react(), 1);
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
import { homedir } from "os";
import { join } from "path";
function getInstallationPath() {
  const isWindows = env.platform === "win32";
  const homeDir = homedir();
  if (isWindows) {
    const windowsPath = join(homeDir, ".local", "bin", "claude.exe");
    return windowsPath.replace(/\//g, "\\");
  }
  return "~/.local/bin/mimo";
}
function SetupNotes({ messages }) {
  if (messages.length === 0)
    return null;
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    gap: 0,
    marginBottom: 1,
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          color: "warning",
          children: [
            /* @__PURE__ */ jsx_dev_runtime.jsxDEV(StatusIcon, {
              status: "warning",
              withSpace: true
            }, undefined, false, undefined, this),
            "Setup notes:"
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this),
      messages.map((message, index) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        marginLeft: 2,
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          dimColor: true,
          children: [
            "\u2022 ",
            message
          ]
        }, undefined, true, undefined, this)
      }, index, false, undefined, this))
    ]
  }, undefined, true, undefined, this);
}
function Install({ onDone, force, target }) {
  const [state, setState] = import_react.useState({ type: "checking" });
  import_react.useEffect(() => {
    async function run() {
      try {
        logForDebugging(`Install: Starting installation process (force=${force}, target=${target})`);
        const channelOrVersion = target || getInitialSettings()?.autoUpdatesChannel || "latest";
        setState({ type: "installing", version: channelOrVersion });
        logForDebugging(`Install: Calling installLatest(channelOrVersion=${channelOrVersion}, forceReinstall=${force})`);
        const result = await installLatest(channelOrVersion, force);
        logForDebugging(`Install: installLatest returned version=${result.latestVersion}, wasUpdated=${result.wasUpdated}, lockFailed=${result.lockFailed}`);
        if (result.lockFailed) {
          throw new Error("Could not install - another process is currently installing MiMo. Please try again in a moment.");
        }
        if (!result.latestVersion) {
          logForDebugging("Install: Failed to retrieve version information during install", { level: "error" });
        }
        if (!result.wasUpdated) {
          logForDebugging("Install: Already up to date");
        }
        setState({ type: "setting-up" });
        const setupMessages = await checkInstall(true);
        logForDebugging(`Install: Setup launcher completed with ${setupMessages.length} messages`);
        if (setupMessages.length > 0) {
          setupMessages.forEach((msg) => logForDebugging(`Install: Setup message: ${msg.message}`));
        }
        logForDebugging("Install: Cleaning up npm installations after successful install");
        const { removed, errors, warnings } = await cleanupNpmInstallations();
        if (removed > 0) {
          logForDebugging(`Cleaned up ${removed} npm installation(s)`);
        }
        if (errors.length > 0) {
          logForDebugging(`Cleanup errors: ${errors.join(", ")}`);
        }
        const aliasMessages = await cleanupShellAliases();
        if (aliasMessages.length > 0) {
          logForDebugging(`Shell alias cleanup: ${aliasMessages.map((m) => m.message).join("; ")}`);
        }
        logEvent("tengu_claude_install_command", {
          has_version: result.latestVersion ? 1 : 0,
          forced: force ? 1 : 0
        });
        if (target === "latest" || target === "stable") {
          updateSettingsForSource("userSettings", {
            autoUpdatesChannel: target
          });
          logForDebugging(`Install: Saved autoUpdatesChannel=${target} to user settings`);
        }
        const allWarnings = [...warnings, ...aliasMessages.map((m) => m.message)];
        if (setupMessages.length > 0) {
          setState({
            type: "set-up",
            messages: setupMessages.map((m) => m.message)
          });
          setTimeout(setState, 2000, {
            type: "success",
            version: result.latestVersion || "current",
            setupMessages: [
              ...setupMessages.map((m) => m.message),
              ...allWarnings
            ]
          });
        } else {
          logForDebugging("Install: Shell PATH already configured");
          setState({
            type: "success",
            version: result.latestVersion || "current",
            setupMessages: allWarnings.length > 0 ? allWarnings : undefined
          });
        }
      } catch (error) {
        logForDebugging(`Install command failed: ${error}`, {
          level: "error"
        });
        setState({
          type: "error",
          message: errorMessage(error)
        });
      }
    }
    run();
  }, [force, target]);
  import_react.useEffect(() => {
    if (state.type === "success") {
      setTimeout(onDone, 2000, "MiMo Code installation completed successfully", {
        display: "system"
      });
    } else if (state.type === "error") {
      setTimeout(onDone, 3000, "MiMo Code installation failed", {
        display: "system"
      });
    }
  }, [state, onDone]);
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    marginTop: 1,
    children: [
      state.type === "checking" && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        color: "claude",
        children: "Checking installation status..."
      }, undefined, false, undefined, this),
      state.type === "cleaning-npm" && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        color: "warning",
        children: "Cleaning up old npm installations..."
      }, undefined, false, undefined, this),
      state.type === "installing" && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        color: "claude",
        children: [
          "Installing MiMo Code native build ",
          state.version,
          "..."
        ]
      }, undefined, true, undefined, this),
      state.type === "setting-up" && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        color: "claude",
        children: "Setting up launcher and shell integration..."
      }, undefined, false, undefined, this),
      state.type === "set-up" && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(SetupNotes, {
        messages: state.messages
      }, undefined, false, undefined, this),
      state.type === "success" && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        gap: 1,
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(StatusIcon, {
                status: "success",
                withSpace: true
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                color: "success",
                bold: true,
                children: "MiMo Code successfully installed!"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            marginLeft: 2,
            flexDirection: "column",
            gap: 1,
            children: [
              state.version !== "current" && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
                children: [
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: "Version: "
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                    color: "claude",
                    children: state.version
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
                children: [
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                    dimColor: true,
                    children: "Location: "
                  }, undefined, false, undefined, this),
                  /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                    color: "text",
                    children: getInstallationPath()
                  }, undefined, false, undefined, this)
                ]
              }, undefined, true, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            marginLeft: 2,
            flexDirection: "column",
            gap: 1,
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
              marginTop: 1,
              children: [
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                  dimColor: true,
                  children: "Next: Run "
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                  color: "claude",
                  bold: true,
                  children: "claude --help"
                }, undefined, false, undefined, this),
                /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                  dimColor: true,
                  children: " to get started"
                }, undefined, false, undefined, this)
              ]
            }, undefined, true, undefined, this)
          }, undefined, false, undefined, this),
          state.setupMessages && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(SetupNotes, {
            messages: state.setupMessages
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      state.type === "error" && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
        flexDirection: "column",
        gap: 1,
        children: [
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            children: [
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(StatusIcon, {
                status: "error",
                withSpace: true
              }, undefined, false, undefined, this),
              /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
                color: "error",
                children: "Installation failed"
              }, undefined, false, undefined, this)
            ]
          }, undefined, true, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
            color: "error",
            children: state.message
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
            marginTop: 1,
            children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
              dimColor: true,
              children: "Try running with --force to override checks"
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var install = {
  type: "local-jsx",
  name: "install",
  description: "Install MiMo Code native build",
  argumentHint: "[options]",
  async call(onDone, _context, args) {
    const force = args.includes("--force");
    const nonFlagArgs = args.filter((arg) => !arg.startsWith("--"));
    const target = nonFlagArgs[0];
    const { unmount } = await root_default(/* @__PURE__ */ jsx_dev_runtime.jsxDEV(Install, {
      onDone: (result, options) => {
        unmount();
        onDone(result, options);
      },
      force,
      target
    }, undefined, false, undefined, this));
  }
};
export {
  install
};
