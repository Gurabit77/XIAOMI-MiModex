// @bun
import {
  execFileNoThrow,
  init_execFileNoThrow
} from "./chunk-qcwbd71h.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/browser.ts
function validateUrl(url) {
  let parsedUrl;
  try {
    parsedUrl = new URL(url);
  } catch (_error) {
    throw new Error(`Invalid URL format: ${url}`);
  }
  if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") {
    throw new Error(`Invalid URL protocol: must use http:// or https://, got ${parsedUrl.protocol}`);
  }
}
async function openPath(path) {
  try {
    const platform = process.platform;
    if (platform === "win32") {
      const { code: code2 } = await execFileNoThrow("explorer", [path]);
      return code2 === 0;
    }
    const command = platform === "darwin" ? "open" : "xdg-open";
    const { code } = await execFileNoThrow(command, [path]);
    return code === 0;
  } catch (_) {
    return false;
  }
}
async function openBrowser(url) {
  try {
    validateUrl(url);
    const browserEnv = process.env.BROWSER;
    const platform = process.platform;
    if (platform === "win32") {
      if (browserEnv) {
        const { code: code2 } = await execFileNoThrow(browserEnv, [`"${url}"`]);
        return code2 === 0;
      }
      const { code } = await execFileNoThrow("rundll32", ["url,OpenURL", url], {});
      return code === 0;
    } else {
      const command = browserEnv || (platform === "darwin" ? "open" : "xdg-open");
      const { code } = await execFileNoThrow(command, [url]);
      return code === 0;
    }
  } catch (_) {
    return false;
  }
}
var init_browser = __esm(() => {
  init_execFileNoThrow();
});

export { openPath, openBrowser, init_browser };
