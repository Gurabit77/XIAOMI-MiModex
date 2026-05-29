// @bun
import {
  __esm
} from "./chunk-qp2qdcda.js";

// src/utils/ndjsonFramer.ts
function attachNdjsonFramer(socket, onMessage, parse = (text) => JSON.parse(text), options = {}) {
  let buffer = "";
  let bufferBytes = 0;
  const maxFrameBytes = options.maxFrameBytes ?? Number.POSITIVE_INFINITY;
  const rejectOversizedFrame = (bytes) => {
    const error = new Error(`NDJSON frame exceeded ${maxFrameBytes} bytes (${bytes})`);
    options.onFrameError?.(error);
    if (options.destroyOnFrameError ?? true) {
      socket.destroy(error);
    }
  };
  const rejectInvalidFrame = (error) => {
    const frameError = error instanceof Error ? error : new Error("Invalid NDJSON frame");
    options.onInvalidFrame?.(frameError);
    if (options.destroyOnInvalidFrame ?? false) {
      socket.destroy(frameError);
    }
  };
  const emitLine = (line) => {
    if (!line.trim())
      return;
    try {
      onMessage(parse(line));
    } catch (error) {
      rejectInvalidFrame(error);
    }
  };
  socket.on("data", (chunk) => {
    let start = 0;
    for (let index = 0;index < chunk.length; index++) {
      if (chunk[index] !== 10)
        continue;
      const segmentBytes = index - start;
      if (Number.isFinite(maxFrameBytes) && bufferBytes + segmentBytes > maxFrameBytes) {
        rejectOversizedFrame(bufferBytes + segmentBytes);
        return;
      }
      buffer += chunk.subarray(start, index).toString("utf8");
      emitLine(buffer);
      buffer = "";
      bufferBytes = 0;
      start = index + 1;
    }
    const tailBytes = chunk.length - start;
    if (Number.isFinite(maxFrameBytes) && bufferBytes + tailBytes > maxFrameBytes) {
      rejectOversizedFrame(bufferBytes + tailBytes);
      return;
    }
    if (tailBytes > 0) {
      buffer += chunk.subarray(start).toString("utf8");
      bufferBytes += tailBytes;
    }
  });
}
var init_ndjsonFramer = () => {};

export { attachNdjsonFramer, init_ndjsonFramer };
