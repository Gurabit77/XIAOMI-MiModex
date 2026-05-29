// @bun
import {
  MAX_UDS_CLIENTS,
  MAX_UDS_FRAME_BYTES,
  MAX_UDS_INBOX_BYTES,
  MAX_UDS_INBOX_ENTRIES,
  UDS_AUTH_TIMEOUT_MS,
  UDS_IDLE_TIMEOUT_MS,
  drainInbox,
  formatUdsAddress,
  getDefaultUdsSocketPath,
  getUdsMessagingSocketPath,
  init_udsMessaging,
  parseUdsTarget,
  readUdsCapabilityToken,
  sendUdsMessage,
  setOnEnqueue,
  startUdsMessaging,
  stopUdsMessaging
} from "./chunk-0shmpd1k.js";
import"./chunk-758qmraw.js";
import"./chunk-w5ahy59y.js";
import"./chunk-8tnsngw2.js";
import"./chunk-rpbc3b7k.js";
import"./chunk-fbv4apne.js";
import"./chunk-j5xzpm59.js";
import"./chunk-50dgek10.js";
import"./chunk-d3bk85eq.js";
import"./chunk-cw8rngb2.js";
import"./chunk-hxhwzgnn.js";
import"./chunk-qx8z601m.js";
import"./chunk-cgm6758j.js";
import"./chunk-qp2qdcda.js";
init_udsMessaging();

export {
  stopUdsMessaging,
  startUdsMessaging,
  setOnEnqueue,
  sendUdsMessage,
  readUdsCapabilityToken,
  parseUdsTarget,
  getUdsMessagingSocketPath,
  getDefaultUdsSocketPath,
  formatUdsAddress,
  drainInbox,
  UDS_IDLE_TIMEOUT_MS,
  UDS_AUTH_TIMEOUT_MS,
  MAX_UDS_INBOX_ENTRIES,
  MAX_UDS_INBOX_BYTES,
  MAX_UDS_FRAME_BYTES,
  MAX_UDS_CLIENTS
};
