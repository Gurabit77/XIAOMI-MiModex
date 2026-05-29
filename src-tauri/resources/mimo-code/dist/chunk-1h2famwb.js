// @bun
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/services/mcp/InProcessTransport.ts
class InProcessTransport {
  peer;
  closed = false;
  onclose;
  onerror;
  onmessage;
  _setPeer(peer) {
    this.peer = peer;
  }
  async start() {}
  async send(message) {
    if (this.closed) {
      throw new Error("Transport is closed");
    }
    queueMicrotask(() => {
      this.peer?.onmessage?.(message);
    });
  }
  async close() {
    if (this.closed) {
      return;
    }
    this.closed = true;
    this.onclose?.();
    if (this.peer && !this.peer.closed) {
      this.peer.closed = true;
      this.peer.onclose?.();
    }
  }
}
function createLinkedTransportPair() {
  const a = new InProcessTransport;
  const b = new InProcessTransport;
  a._setPeer(b);
  b._setPeer(a);
  return [a, b];
}
var init_InProcessTransport = () => {};
init_InProcessTransport();

export {
  createLinkedTransportPair
};
