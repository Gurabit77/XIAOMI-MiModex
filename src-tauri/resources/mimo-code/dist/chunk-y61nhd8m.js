// @bun
import {
  getStoredChangelogFromMemory,
  init_releaseNotes,
  parseChangelog
} from "./chunk-krd7atxb.js";
import {
  init_sessionStorage,
  loadMessageLogs
} from "./chunk-ktw919wt.js";
import {
  gt,
  init_semver
} from "./chunk-ps49ymvj.js";
import {
  getDisplayPath,
  getInitialSettings,
  getSubscriptionName,
  init_auth,
  init_file,
  init_mimoRuntimeConfig,
  init_settings1 as init_settings,
  isClaudeAISubscriber,
  isMiMoRuntime
} from "./chunk-1ghcng4e.js";
import {
  init_format,
  truncate,
  truncateToWidth,
  truncateToWidthNoEllipsis
} from "./chunk-x5hyyhqf.js";
import {
  init_src,
  stringWidth
} from "./chunk-er1s76c9.js";
import {
  getCwd,
  init_cwd
} from "./chunk-dxvkxgnf.js";
import {
  getDirectConnectServerUrl,
  getSessionId,
  init_state
} from "./chunk-j5xzpm59.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/logoV2Utils.ts
function getLayoutMode(columns) {
  if (columns >= 70)
    return "horizontal";
  return "compact";
}
function calculateLayoutDimensions(columns, layoutMode, optimalLeftWidth) {
  if (layoutMode === "horizontal") {
    const leftWidth = optimalLeftWidth;
    const usedSpace = BORDER_PADDING + CONTENT_PADDING + DIVIDER_WIDTH + leftWidth;
    const availableForRight = columns - usedSpace;
    let rightWidth = Math.max(30, availableForRight);
    const totalWidth2 = Math.min(leftWidth + rightWidth + DIVIDER_WIDTH + CONTENT_PADDING, columns - BORDER_PADDING);
    if (totalWidth2 < leftWidth + rightWidth + DIVIDER_WIDTH + CONTENT_PADDING) {
      rightWidth = totalWidth2 - leftWidth - DIVIDER_WIDTH - CONTENT_PADDING;
    }
    return { leftWidth, rightWidth, totalWidth: totalWidth2 };
  }
  const totalWidth = Math.min(columns - BORDER_PADDING, MAX_LEFT_WIDTH + 20);
  return {
    leftWidth: totalWidth,
    rightWidth: totalWidth,
    totalWidth
  };
}
function calculateOptimalLeftWidth(welcomeMessage, truncatedCwd, modelLine) {
  const contentWidth = Math.max(stringWidth(welcomeMessage), stringWidth(truncatedCwd), stringWidth(modelLine), 20);
  return Math.min(contentWidth + 4, MAX_LEFT_WIDTH);
}
function formatWelcomeMessage(username) {
  if (!username || username.length > MAX_USERNAME_LENGTH) {
    return "Welcome back!";
  }
  return `Welcome back ${username}!`;
}
function truncatePath(path, maxLength) {
  if (stringWidth(path) <= maxLength)
    return path;
  const separator = "/";
  const ellipsis = "\u2026";
  const ellipsisWidth = 1;
  const separatorWidth = 1;
  const parts = path.split(separator);
  const first = parts[0] || "";
  const last = parts[parts.length - 1] || "";
  const firstWidth = stringWidth(first);
  const lastWidth = stringWidth(last);
  if (parts.length === 1) {
    return truncateToWidth(path, maxLength);
  }
  if (first === "" && ellipsisWidth + separatorWidth + lastWidth >= maxLength) {
    return `${separator}${truncateToWidth(last, Math.max(1, maxLength - separatorWidth))}`;
  }
  if (first !== "" && ellipsisWidth * 2 + separatorWidth + lastWidth >= maxLength) {
    return `${ellipsis}${separator}${truncateToWidth(last, Math.max(1, maxLength - ellipsisWidth - separatorWidth))}`;
  }
  if (parts.length === 2) {
    const availableForFirst = maxLength - ellipsisWidth - separatorWidth - lastWidth;
    return `${truncateToWidthNoEllipsis(first, availableForFirst)}${ellipsis}${separator}${last}`;
  }
  let available = maxLength - firstWidth - lastWidth - ellipsisWidth - 2 * separatorWidth;
  if (available <= 0) {
    const availableForFirst = Math.max(0, maxLength - lastWidth - ellipsisWidth - 2 * separatorWidth);
    const truncatedFirst = truncateToWidthNoEllipsis(first, availableForFirst);
    return `${truncatedFirst}${separator}${ellipsis}${separator}${last}`;
  }
  const middleParts = [];
  for (let i = parts.length - 2;i > 0; i--) {
    const part = parts[i];
    if (part && stringWidth(part) + separatorWidth <= available) {
      middleParts.unshift(part);
      available -= stringWidth(part) + separatorWidth;
    } else {
      break;
    }
  }
  if (middleParts.length === 0) {
    return `${first}${separator}${ellipsis}${separator}${last}`;
  }
  return `${first}${separator}${ellipsis}${separator}${middleParts.join(separator)}${separator}${last}`;
}
async function getRecentActivity() {
  if (cachePromise) {
    return cachePromise;
  }
  const currentSessionId = getSessionId();
  cachePromise = loadMessageLogs(10).then((logs) => {
    cachedActivity = logs.filter((log) => {
      if (log.isSidechain)
        return false;
      if (log.sessionId === currentSessionId)
        return false;
      if (log.summary?.includes("I apologize"))
        return false;
      const hasSummary = log.summary && log.summary !== "No prompt";
      const hasFirstPrompt = log.firstPrompt && log.firstPrompt !== "No prompt";
      return hasSummary || hasFirstPrompt;
    }).slice(0, 3);
    return cachedActivity;
  }).catch(() => {
    cachedActivity = [];
    return cachedActivity;
  });
  return cachePromise;
}
function getRecentActivitySync() {
  return cachedActivity;
}
function getLogoDisplayData() {
  const version = process.env.DEMO_VERSION ?? "1.0.0";
  const serverUrl = getDirectConnectServerUrl();
  const displayPath = process.env.DEMO_VERSION ? "/code/mimo" : getDisplayPath(getCwd());
  const cwd = serverUrl ? `${displayPath} in ${serverUrl.replace(/^https?:\/\//, "")}` : displayPath;
  const billingType = isMiMoRuntime() ? "MiMo Token Plan" : isClaudeAISubscriber() ? getSubscriptionName() : "API Usage Billing";
  const agentName = getInitialSettings().agent;
  return {
    version,
    cwd,
    billingType,
    agentName
  };
}
function formatModelAndBilling(modelName, billingType, availableWidth) {
  const separator = " \xB7 ";
  const combinedWidth = stringWidth(modelName) + separator.length + stringWidth(billingType);
  const shouldSplit = combinedWidth > availableWidth;
  if (shouldSplit) {
    return {
      shouldSplit: true,
      truncatedModel: truncate(modelName, availableWidth),
      truncatedBilling: truncate(billingType, availableWidth)
    };
  }
  return {
    shouldSplit: false,
    truncatedModel: truncate(modelName, Math.max(availableWidth - stringWidth(billingType) - separator.length, 10)),
    truncatedBilling: billingType
  };
}
function getRecentReleaseNotesSync(maxItems) {
  if (process.env.USER_TYPE === "ant") {
    const changelog2 = "";
    if (changelog2) {
      const commits = changelog2.trim().split(`
`).filter(Boolean);
      return commits.slice(0, maxItems);
    }
    return [];
  }
  const changelog = getStoredChangelogFromMemory();
  if (!changelog) {
    return [];
  }
  let parsed;
  try {
    parsed = parseChangelog(changelog);
  } catch {
    return [];
  }
  const allNotes = [];
  const versions = Object.keys(parsed).sort((a, b) => gt(a, b) ? -1 : 1).slice(0, 3);
  for (const version of versions) {
    const notes = parsed[version];
    if (notes) {
      allNotes.push(...notes);
    }
  }
  return allNotes.slice(0, maxItems);
}
var MAX_LEFT_WIDTH = 50, MAX_USERNAME_LENGTH = 20, BORDER_PADDING = 4, DIVIDER_WIDTH = 1, CONTENT_PADDING = 2, cachedActivity, cachePromise = null;
var init_logoV2Utils = __esm(() => {
  init_state();
  init_src();
  init_auth();
  init_cwd();
  init_file();
  init_format();
  init_releaseNotes();
  init_semver();
  init_sessionStorage();
  init_settings();
  init_mimoRuntimeConfig();
  cachedActivity = [];
});

export { getLayoutMode, calculateLayoutDimensions, calculateOptimalLeftWidth, formatWelcomeMessage, truncatePath, getRecentActivity, getRecentActivitySync, getLogoDisplayData, formatModelAndBilling, getRecentReleaseNotesSync, init_logoV2Utils };
