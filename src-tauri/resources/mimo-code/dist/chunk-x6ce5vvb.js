// @bun
import {
  AddWorkspaceDirectory,
  init_AddWorkspaceDirectory
} from "./chunk-5dexcfp7.js";
import"./chunk-js8hvz4s.js";
import"./chunk-dmsj0t95.js";
import {
  MessageResponse,
  SandboxManager,
  addDirHelpMessage,
  applyPermissionUpdate,
  init_MessageResponse,
  init_PermissionUpdate,
  init_sandbox_adapter,
  init_validation,
  persistPermissionUpdate,
  validateDirectoryForWorkspace
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
import"./chunk-1ghcng4e.js";
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
  ThemedBox_default,
  ThemedText,
  init_source,
  init_src,
  source_default
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
import {
  figures_default,
  init_figures
} from "./chunk-qajrkk97.js";
import"./chunk-rpbc3b7k.js";
import"./chunk-fbv4apne.js";
import {
  getAdditionalDirectoriesForClaudeMd,
  init_state,
  setAdditionalDirectoriesForClaudeMd
} from "./chunk-j5xzpm59.js";
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
  __esm,
  __toESM
} from "./chunk-qp2qdcda.js";

// src/commands/add-dir/add-dir.tsx
function AddDirError({
  message,
  args,
  onDone
}) {
  import_react.useEffect(() => {
    const timer = setTimeout(onDone, 0);
    return () => clearTimeout(timer);
  }, [onDone]);
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedBox_default, {
    flexDirection: "column",
    children: [
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
        dimColor: true,
        children: [
          figures_default.pointer,
          " /add-dir ",
          args
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsx_dev_runtime.jsxDEV(MessageResponse, {
        children: /* @__PURE__ */ jsx_dev_runtime.jsxDEV(ThemedText, {
          children: message
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
async function call(onDone, context, args) {
  const directoryPath = (args ?? "").trim();
  const appState = context.getAppState();
  const handleAddDirectory = async (path, remember = false) => {
    const destination = remember ? "localSettings" : "session";
    const permissionUpdate = {
      type: "addDirectories",
      directories: [path],
      destination
    };
    const latestAppState = context.getAppState();
    const updatedContext = applyPermissionUpdate(latestAppState.toolPermissionContext, permissionUpdate);
    context.setAppState((prev) => ({
      ...prev,
      toolPermissionContext: updatedContext
    }));
    const currentDirs = getAdditionalDirectoriesForClaudeMd();
    if (!currentDirs.includes(path)) {
      setAdditionalDirectoriesForClaudeMd([...currentDirs, path]);
    }
    SandboxManager.refreshConfig();
    let message;
    if (remember) {
      try {
        persistPermissionUpdate(permissionUpdate);
        message = `Added ${source_default.bold(path)} as a working directory and saved to local settings`;
      } catch (error) {
        message = `Added ${source_default.bold(path)} as a working directory. Failed to save to local settings: ${error instanceof Error ? error.message : "Unknown error"}`;
      }
    } else {
      message = `Added ${source_default.bold(path)} as a working directory for this session`;
    }
    const messageWithHint = `${message} ${source_default.dim("\xB7 /permissions to manage")}`;
    onDone(messageWithHint);
  };
  if (!directoryPath) {
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(AddWorkspaceDirectory, {
      permissionContext: appState.toolPermissionContext,
      onAddDirectory: handleAddDirectory,
      onCancel: () => {
        onDone("Did not add a working directory.");
      }
    }, undefined, false, undefined, this);
  }
  const result = await validateDirectoryForWorkspace(directoryPath, appState.toolPermissionContext);
  if (result.resultType !== "success") {
    const message = addDirHelpMessage(result);
    return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(AddDirError, {
      message,
      args: args ?? "",
      onDone: () => onDone(message)
    }, undefined, false, undefined, this);
  }
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(AddWorkspaceDirectory, {
    directoryPath: result.absolutePath,
    permissionContext: appState.toolPermissionContext,
    onAddDirectory: handleAddDirectory,
    onCancel: () => {
      onDone(`Did not add ${source_default.bold(result.absolutePath)} as a working directory.`);
    }
  }, undefined, false, undefined, this);
}
var import_react, jsx_dev_runtime;
var init_add_dir = __esm(() => {
  init_source();
  init_figures();
  init_state();
  init_MessageResponse();
  init_AddWorkspaceDirectory();
  init_src();
  init_PermissionUpdate();
  init_sandbox_adapter();
  init_validation();
  import_react = __toESM(require_react(), 1);
  jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
});
init_add_dir();

export {
  call
};
