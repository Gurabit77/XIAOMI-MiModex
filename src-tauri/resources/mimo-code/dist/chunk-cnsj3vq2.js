// @bun
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/systemTheme.ts
function getSystemThemeName() {
  if (cachedSystemTheme === undefined) {
    cachedSystemTheme = detectFromColorFgBg() ?? "dark";
  }
  return cachedSystemTheme;
}
function resolveThemeSetting(setting) {
  if (setting === "auto") {
    return getSystemThemeName();
  }
  return setting;
}
function detectFromColorFgBg() {
  const colorfgbg = process.env["COLORFGBG"];
  if (!colorfgbg)
    return;
  const parts = colorfgbg.split(";");
  const bg = parts[parts.length - 1];
  if (bg === undefined || bg === "")
    return;
  const bgNum = Number(bg);
  if (!Number.isInteger(bgNum) || bgNum < 0 || bgNum > 15)
    return;
  return bgNum <= 6 || bgNum === 8 ? "dark" : "light";
}
var cachedSystemTheme;
var init_systemTheme = () => {};

export { resolveThemeSetting, init_systemTheme };
