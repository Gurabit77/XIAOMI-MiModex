// @bun
import"./chunk-4hv90qcz.js";
import {
  getSecureSocketPath,
  getSocketDir,
  init_common
} from "./chunk-5ptgeqdf.js";
import {
  init_lazySchema,
  lazySchema
} from "./chunk-64c1avct.js";
import"./chunk-0rbpfkda.js";
import"./chunk-3c25bcsw.js";
import {
  exports_external
} from "./chunk-d7886r6a.js";
import"./chunk-qcwbd71h.js";
import"./chunk-dxvkxgnf.js";
import"./chunk-w5ahy59y.js";
import"./chunk-8tnsngw2.js";
import"./chunk-jkh5s8ct.js";
import"./chunk-kwm5bf2m.js";
import"./chunk-5z28bqne.js";
import"./chunk-qajrkk97.js";
import {
  init_slowOperations,
  jsonParse,
  jsonStringify
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
import"./chunk-qp2qdcda.js";

// src/utils/claudeInChrome/chromeNativeHost.ts
import {
  appendFile,
  chmod,
  mkdir,
  readdir,
  rmdir,
  stat,
  unlink
} from "fs/promises";
import { createServer } from "net";
import { homedir, platform } from "os";
import { join } from "path";
init_lazySchema();
init_slowOperations();
init_common();
var VERSION = "1.0.0";
var MAX_MESSAGE_SIZE = 1024 * 1024;
var LOG_FILE = process.env.USER_TYPE === "ant" ? join(homedir(), ".claude", "debug", "chrome-native-host.txt") : undefined;
function log(message, ...args) {
  if (LOG_FILE) {
    const timestamp = new Date().toISOString();
    const formattedArgs = args.length > 0 ? " " + jsonStringify(args) : "";
    const logLine = `[${timestamp}] [MiMo Chrome Native Host] ${message}${formattedArgs}
`;
    appendFile(LOG_FILE, logLine).catch(() => {});
  }
  console.error(`[MiMo Chrome Native Host] ${message}`, ...args);
}
function sendChromeMessage(message) {
  const jsonBytes = Buffer.from(message, "utf-8");
  const lengthBuffer = Buffer.alloc(4);
  lengthBuffer.writeUInt32LE(jsonBytes.length, 0);
  process.stdout.write(lengthBuffer);
  process.stdout.write(jsonBytes);
}
async function runChromeNativeHost() {
  log("Initializing...");
  const host = new ChromeNativeHost;
  const messageReader = new ChromeMessageReader;
  await host.start();
  while (true) {
    const message = await messageReader.read();
    if (message === null) {
      break;
    }
    await host.handleMessage(message);
  }
  await host.stop();
}
var messageSchema = lazySchema(() => exports_external.object({
  type: exports_external.string()
}).passthrough());

class ChromeNativeHost {
  mcpClients = new Map;
  nextClientId = 1;
  server = null;
  running = false;
  socketPath = null;
  async start() {
    if (this.running) {
      return;
    }
    this.socketPath = getSecureSocketPath();
    if (platform() !== "win32") {
      const socketDir = getSocketDir();
      try {
        const dirStats = await stat(socketDir);
        if (!dirStats.isDirectory()) {
          await unlink(socketDir);
        }
      } catch {}
      await mkdir(socketDir, { recursive: true, mode: 448 });
      await chmod(socketDir, 448).catch(() => {});
      try {
        const files = await readdir(socketDir);
        for (const file of files) {
          if (!file.endsWith(".sock")) {
            continue;
          }
          const pid = parseInt(file.replace(".sock", ""), 10);
          if (isNaN(pid)) {
            continue;
          }
          try {
            process.kill(pid, 0);
          } catch {
            await unlink(join(socketDir, file)).catch(() => {});
            log(`Removed stale socket for PID ${pid}`);
          }
        }
      } catch {}
    }
    log(`Creating socket listener: ${this.socketPath}`);
    this.server = createServer((socket) => this.handleMcpClient(socket));
    await new Promise((resolve, reject) => {
      this.server.listen(this.socketPath, () => {
        log("Socket server listening for connections");
        this.running = true;
        resolve();
      });
      this.server.on("error", (err) => {
        log("Socket server error:", err);
        reject(err);
      });
    });
    if (platform() !== "win32") {
      try {
        await chmod(this.socketPath, 384);
        log("Socket permissions set to 0600");
      } catch (e) {
        log("Failed to set socket permissions:", e);
      }
    }
  }
  async stop() {
    if (!this.running) {
      return;
    }
    for (const [, client] of this.mcpClients) {
      client.socket.destroy();
    }
    this.mcpClients.clear();
    if (this.server) {
      await new Promise((resolve) => {
        this.server.close(() => resolve());
      });
      this.server = null;
    }
    if (platform() !== "win32" && this.socketPath) {
      try {
        await unlink(this.socketPath);
        log("Cleaned up socket file");
      } catch {}
      try {
        const socketDir = getSocketDir();
        const remaining = await readdir(socketDir);
        if (remaining.length === 0) {
          await rmdir(socketDir);
          log("Removed empty socket directory");
        }
      } catch {}
    }
    this.running = false;
  }
  async isRunning() {
    return this.running;
  }
  async getClientCount() {
    return this.mcpClients.size;
  }
  async handleMessage(messageJson) {
    let rawMessage;
    try {
      rawMessage = jsonParse(messageJson);
    } catch (e) {
      log("Invalid JSON from Chrome:", e.message);
      sendChromeMessage(jsonStringify({
        type: "error",
        error: "Invalid message format"
      }));
      return;
    }
    const parsed = messageSchema().safeParse(rawMessage);
    if (!parsed.success) {
      log("Invalid message from Chrome:", parsed.error.message);
      sendChromeMessage(jsonStringify({
        type: "error",
        error: "Invalid message format"
      }));
      return;
    }
    const message = parsed.data;
    log(`Handling Chrome message type: ${message.type}`);
    switch (message.type) {
      case "ping":
        log("Responding to ping");
        sendChromeMessage(jsonStringify({
          type: "pong",
          timestamp: Date.now()
        }));
        break;
      case "get_status":
        sendChromeMessage(jsonStringify({
          type: "status_response",
          native_host_version: VERSION
        }));
        break;
      case "tool_response": {
        if (this.mcpClients.size > 0) {
          log(`Forwarding tool response to ${this.mcpClients.size} MCP clients`);
          const { type: _, ...data } = message;
          const responseData = Buffer.from(jsonStringify(data), "utf-8");
          const lengthBuffer = Buffer.alloc(4);
          lengthBuffer.writeUInt32LE(responseData.length, 0);
          const responseMsg = Buffer.concat([lengthBuffer, responseData]);
          for (const [id, client] of this.mcpClients) {
            try {
              client.socket.write(responseMsg);
            } catch (e) {
              log(`Failed to send to MCP client ${id}:`, e);
            }
          }
        }
        break;
      }
      case "notification": {
        if (this.mcpClients.size > 0) {
          log(`Forwarding notification to ${this.mcpClients.size} MCP clients`);
          const { type: _, ...data } = message;
          const notificationData = Buffer.from(jsonStringify(data), "utf-8");
          const lengthBuffer = Buffer.alloc(4);
          lengthBuffer.writeUInt32LE(notificationData.length, 0);
          const notificationMsg = Buffer.concat([
            lengthBuffer,
            notificationData
          ]);
          for (const [id, client] of this.mcpClients) {
            try {
              client.socket.write(notificationMsg);
            } catch (e) {
              log(`Failed to send notification to MCP client ${id}:`, e);
            }
          }
        }
        break;
      }
      default:
        log(`Unknown message type: ${message.type}`);
        sendChromeMessage(jsonStringify({
          type: "error",
          error: `Unknown message type: ${message.type}`
        }));
    }
  }
  handleMcpClient(socket) {
    const clientId = this.nextClientId++;
    const client = {
      id: clientId,
      socket,
      buffer: Buffer.alloc(0)
    };
    this.mcpClients.set(clientId, client);
    log(`MCP client ${clientId} connected. Total clients: ${this.mcpClients.size}`);
    sendChromeMessage(jsonStringify({
      type: "mcp_connected"
    }));
    socket.on("data", (data) => {
      client.buffer = Buffer.concat([client.buffer, data]);
      while (client.buffer.length >= 4) {
        const length = client.buffer.readUInt32LE(0);
        if (length === 0 || length > MAX_MESSAGE_SIZE) {
          log(`Invalid message length from MCP client ${clientId}: ${length}`);
          socket.destroy();
          return;
        }
        if (client.buffer.length < 4 + length) {
          break;
        }
        const messageBytes = client.buffer.slice(4, 4 + length);
        client.buffer = client.buffer.slice(4 + length);
        try {
          const request = jsonParse(messageBytes.toString("utf-8"));
          log(`Forwarding tool request from MCP client ${clientId}: ${request.method}`);
          sendChromeMessage(jsonStringify({
            type: "tool_request",
            method: request.method,
            params: request.params
          }));
        } catch (e) {
          log(`Failed to parse tool request from MCP client ${clientId}:`, e);
        }
      }
    });
    socket.on("error", (err) => {
      log(`MCP client ${clientId} error: ${err}`);
    });
    socket.on("close", () => {
      log(`MCP client ${clientId} disconnected. Remaining clients: ${this.mcpClients.size - 1}`);
      this.mcpClients.delete(clientId);
      sendChromeMessage(jsonStringify({
        type: "mcp_disconnected"
      }));
    });
  }
}

class ChromeMessageReader {
  buffer = Buffer.alloc(0);
  pendingResolve = null;
  closed = false;
  constructor() {
    process.stdin.on("data", (chunk) => {
      this.buffer = Buffer.concat([this.buffer, chunk]);
      this.tryProcessMessage();
    });
    process.stdin.on("end", () => {
      this.closed = true;
      if (this.pendingResolve) {
        this.pendingResolve(null);
        this.pendingResolve = null;
      }
    });
    process.stdin.on("error", () => {
      this.closed = true;
      if (this.pendingResolve) {
        this.pendingResolve(null);
        this.pendingResolve = null;
      }
    });
  }
  tryProcessMessage() {
    if (!this.pendingResolve) {
      return;
    }
    if (this.buffer.length < 4) {
      return;
    }
    const length = this.buffer.readUInt32LE(0);
    if (length === 0 || length > MAX_MESSAGE_SIZE) {
      log(`Invalid message length: ${length}`);
      this.pendingResolve(null);
      this.pendingResolve = null;
      return;
    }
    if (this.buffer.length < 4 + length) {
      return;
    }
    const messageBytes = this.buffer.subarray(4, 4 + length);
    this.buffer = this.buffer.subarray(4 + length);
    const message = messageBytes.toString("utf-8");
    this.pendingResolve(message);
    this.pendingResolve = null;
  }
  async read() {
    if (this.closed) {
      return null;
    }
    if (this.buffer.length >= 4) {
      const length = this.buffer.readUInt32LE(0);
      if (length > 0 && length <= MAX_MESSAGE_SIZE && this.buffer.length >= 4 + length) {
        const messageBytes = this.buffer.subarray(4, 4 + length);
        this.buffer = this.buffer.subarray(4 + length);
        return messageBytes.toString("utf-8");
      }
    }
    return new Promise((resolve) => {
      this.pendingResolve = resolve;
      this.tryProcessMessage();
    });
  }
}
export {
  sendChromeMessage,
  runChromeNativeHost
};
