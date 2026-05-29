// @bun
import {
  BUILTIN_MARKETPLACE_NAME,
  escapeXmlAttr,
  init_builtinPlugins,
  init_pluginIdentifier,
  init_xml as init_xml2,
  parsePluginIdentifier
} from "./chunk-0rstde44.js";
import {
  getFeatureValue_CACHED_MAY_BE_STALE,
  init_growthbook
} from "./chunk-1ghcng4e.js";
import {
  init_lazySchema,
  lazySchema
} from "./chunk-64c1avct.js";
import {
  init_v4
} from "./chunk-8g747a8x.js";
import {
  exports_external
} from "./chunk-d7886r6a.js";
import {
  CHANNEL_TAG,
  init_xml
} from "./chunk-w5ahy59y.js";
import {
  getAllowedChannels,
  init_state
} from "./chunk-j5xzpm59.js";
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/services/mcp/channelAllowlist.ts
function getChannelAllowlist() {
  const raw = getFeatureValue_CACHED_MAY_BE_STALE("tengu_harbor_ledger", []);
  const parsed = ChannelAllowlistSchema().safeParse(raw);
  return parsed.success ? parsed.data : [];
}
function isChannelsEnabled() {
  return true;
}
function isChannelAllowlisted(pluginSource) {
  if (!pluginSource)
    return false;
  const { name, marketplace } = parsePluginIdentifier(pluginSource);
  if (!marketplace)
    return false;
  if (marketplace === BUILTIN_MARKETPLACE_NAME && name === "weixin") {
    return true;
  }
  return getChannelAllowlist().some((e) => e.plugin === name && e.marketplace === marketplace);
}
var ChannelAllowlistSchema;
var init_channelAllowlist = __esm(() => {
  init_v4();
  init_builtinPlugins();
  init_lazySchema();
  init_pluginIdentifier();
  init_growthbook();
  ChannelAllowlistSchema = lazySchema(() => exports_external.array(exports_external.object({
    marketplace: exports_external.string(),
    plugin: exports_external.string()
  })));
});

// src/services/mcp/channelNotification.ts
function wrapChannelMessage(serverName, content, meta) {
  const attrs = Object.entries(meta ?? {}).filter(([k]) => SAFE_META_KEY.test(k)).map(([k, v]) => ` ${k}="${escapeXmlAttr(v)}"`).join("");
  return `<${CHANNEL_TAG} source="${escapeXmlAttr(serverName)}"${attrs}>
${content}
</${CHANNEL_TAG}>`;
}
function getEffectiveChannelAllowlist(sub, orgList) {
  if ((sub === "team" || sub === "enterprise") && orgList) {
    return { entries: orgList, source: "org" };
  }
  return { entries: getChannelAllowlist(), source: "ledger" };
}
function findChannelEntry(serverName, channels) {
  const parts = serverName.split(":");
  return channels.find((c) => c.kind === "server" ? serverName === c.name : parts[0] === "plugin" && parts[1] === c.name);
}
function gateChannelServer(serverName, capabilities, pluginSource) {
  if (!capabilities?.experimental?.["claude/channel"]) {
    return {
      action: "skip",
      kind: "capability",
      reason: "server did not declare claude/channel capability"
    };
  }
  const entry = findChannelEntry(serverName, getAllowedChannels());
  if (!entry) {
    return {
      action: "skip",
      kind: "session",
      reason: `server ${serverName} not in --channels list for this session`
    };
  }
  if (entry.kind === "plugin") {
    const actual = pluginSource ? parsePluginIdentifier(pluginSource).marketplace : undefined;
    if (actual !== entry.marketplace) {
      return {
        action: "skip",
        kind: "marketplace",
        reason: `you asked for plugin:${entry.name}@${entry.marketplace} but the installed ${entry.name} plugin is from ${actual ?? "an unknown source"}`
      };
    }
  }
  return { action: "register" };
}
var ChannelMessageNotificationSchema, CHANNEL_PERMISSION_METHOD = "notifications/claude/channel/permission", ChannelPermissionNotificationSchema, CHANNEL_PERMISSION_REQUEST_METHOD = "notifications/claude/channel/permission_request", ChannelPermissionRequestNotificationSchema, SAFE_META_KEY;
var init_channelNotification = __esm(() => {
  init_v4();
  init_state();
  init_xml();
  init_lazySchema();
  init_pluginIdentifier();
  init_xml2();
  init_channelAllowlist();
  ChannelMessageNotificationSchema = lazySchema(() => exports_external.object({
    method: exports_external.literal("notifications/claude/channel"),
    params: exports_external.object({
      content: exports_external.string(),
      meta: exports_external.record(exports_external.string(), exports_external.string()).optional()
    })
  }));
  ChannelPermissionNotificationSchema = lazySchema(() => exports_external.object({
    method: exports_external.literal(CHANNEL_PERMISSION_METHOD),
    params: exports_external.object({
      request_id: exports_external.string(),
      behavior: exports_external.enum(["allow", "deny"])
    })
  }));
  ChannelPermissionRequestNotificationSchema = lazySchema(() => exports_external.object({
    method: exports_external.literal(CHANNEL_PERMISSION_REQUEST_METHOD),
    params: exports_external.object({
      request_id: exports_external.string(),
      tool_name: exports_external.string(),
      description: exports_external.string(),
      input_preview: exports_external.string(),
      channel_context: exports_external.object({
        source_server: exports_external.string().optional(),
        chat_id: exports_external.string().optional()
      }).optional()
    })
  }));
  SAFE_META_KEY = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
});

export { isChannelsEnabled, isChannelAllowlisted, init_channelAllowlist, ChannelMessageNotificationSchema, CHANNEL_PERMISSION_METHOD, ChannelPermissionNotificationSchema, CHANNEL_PERMISSION_REQUEST_METHOD, ChannelPermissionRequestNotificationSchema, wrapChannelMessage, getEffectiveChannelAllowlist, findChannelEntry, gateChannelServer, init_channelNotification };
