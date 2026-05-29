// @bun
import {
  attachNdjsonFramer,
  init_ndjsonFramer
} from "./chunk-758qmraw.js";
import {
  init_teamHelpers,
  readTeamFile
} from "./chunk-ypmcesxe.js";
import {
  init_log,
  logError
} from "./chunk-w5ahy59y.js";
import {
  getClaudeConfigHomeDir,
  init_envUtils
} from "./chunk-hxhwzgnn.js";
import {
  __esm,
  __require
} from "./chunk-qp2qdcda.js";

// src/utils/pipeTransport.ts
import { createServer, createConnection } from "net";
import { mkdir, unlink, readdir, writeFile } from "fs/promises";
import { join } from "path";
import { EventEmitter } from "events";
function getPipesDir() {
  return join(getClaudeConfigHomeDir(), "pipes");
}
function getPipePath(name) {
  const safeName = name.replace(/[^a-zA-Z0-9_-]/g, "_");
  if (process.platform === "win32") {
    return `\\\\.\\pipe\\mimo-code-${safeName}`;
  }
  return join(getPipesDir(), `${safeName}.sock`);
}
async function ensurePipesDir() {
  await mkdir(getPipesDir(), { recursive: true });
}
function isPipeControlled(pipeIpc) {
  return Boolean(pipeIpc.attachedBy);
}
function getPipeDisplayRole(pipeIpc) {
  if (pipeIpc.role === "master") {
    return "master";
  }
  if (pipeIpc.subIndex != null) {
    return `sub-${pipeIpc.subIndex}`;
  }
  return "main";
}
function getLocalIp() {
  try {
    const { networkInterfaces } = __require("os");
    const nets = networkInterfaces();
    for (const name of Object.keys(nets)) {
      for (const net of nets[name] ?? []) {
        if (net.family === "IPv4" && !net.internal) {
          return net.address;
        }
      }
    }
  } catch {}
  return "127.0.0.1";
}
function getPipeIpc(state) {
  return state?.pipeIpc ?? DEFAULT_PIPE_IPC;
}
var PipeServer, DEFAULT_PIPE_IPC;
var init_pipeTransport = __esm(() => {
  init_envUtils();
  init_log();
  init_ndjsonFramer();
  PipeServer = class PipeServer extends EventEmitter {
    server = null;
    tcpServer = null;
    clients = new Set;
    handlers = [];
    _tcpAddress = null;
    name;
    socketPath;
    constructor(name) {
      super();
      this.name = name;
      this.socketPath = getPipePath(name);
    }
    get tcpAddress() {
      return this._tcpAddress;
    }
    setupSocket(socket) {
      this.clients.add(socket);
      this.emit("connection", socket);
      attachNdjsonFramer(socket, (msg) => {
        this.emit("message", msg);
        const reply = (replyMsg) => {
          replyMsg.from = replyMsg.from ?? this.name;
          replyMsg.ts = replyMsg.ts ?? new Date().toISOString();
          if (!socket.destroyed) {
            socket.write(JSON.stringify(replyMsg) + `
`);
          }
        };
        for (const handler of this.handlers) {
          handler(msg, reply);
        }
      });
      socket.on("close", () => {
        this.clients.delete(socket);
        this.emit("disconnect", socket);
      });
      socket.on("error", (err) => {
        this.clients.delete(socket);
        logError(err);
      });
    }
    async start(options) {
      await ensurePipesDir();
      if (process.platform !== "win32") {
        try {
          await unlink(this.socketPath);
        } catch {}
      }
      await new Promise((resolve, reject) => {
        this.server = createServer((socket) => this.setupSocket(socket));
        this.server.on("error", reject);
        this.server.listen(this.socketPath, () => {
          if (process.platform === "win32") {
            const regFile = join(getPipesDir(), `${this.name}.pipe`);
            const { hostname } = __require("os");
            writeFile(regFile, JSON.stringify({
              pid: process.pid,
              ts: Date.now(),
              ip: getLocalIp(),
              hostname: hostname()
            })).catch(() => {});
          }
          resolve();
        });
      });
      if (options?.enableTcp) {
        await this.startTcpServer(options.tcpPort ?? 0);
      }
    }
    async startTcpServer(port) {
      return new Promise((resolve, reject) => {
        this.tcpServer = createServer((socket) => this.setupSocket(socket));
        this.tcpServer.on("error", reject);
        this.tcpServer.listen(port, "0.0.0.0", () => {
          const addr = this.tcpServer.address();
          if (addr && typeof addr === "object") {
            this._tcpAddress = { host: "0.0.0.0", port: addr.port };
          }
          resolve();
        });
      });
    }
    onMessage(handler) {
      this.handlers.push(handler);
    }
    broadcast(msg) {
      msg.from = msg.from ?? this.name;
      msg.ts = msg.ts ?? new Date().toISOString();
      const line = JSON.stringify(msg) + `
`;
      for (const client of this.clients) {
        if (!client.destroyed) {
          client.write(line);
        }
      }
    }
    sendTo(socket, msg) {
      msg.from = msg.from ?? this.name;
      msg.ts = msg.ts ?? new Date().toISOString();
      if (!socket.destroyed) {
        socket.write(JSON.stringify(msg) + `
`);
      }
    }
    get connectionCount() {
      return this.clients.size;
    }
    async close() {
      for (const client of this.clients) {
        client.destroy();
      }
      this.clients.clear();
      if (this.tcpServer) {
        await new Promise((resolve) => {
          this.tcpServer.close(() => {
            this.tcpServer = null;
            this._tcpAddress = null;
            resolve();
          });
        });
      }
      return new Promise((resolve) => {
        if (!this.server) {
          resolve();
          return;
        }
        this.server.close(() => {
          this.server = null;
          if (process.platform === "win32") {
            const regFile = join(getPipesDir(), `${this.name}.pipe`);
            unlink(regFile).catch(() => {});
          } else {
            unlink(this.socketPath).catch(() => {});
          }
          resolve();
        });
      });
    }
  };
  DEFAULT_PIPE_IPC = {
    role: "main",
    subIndex: null,
    displayRole: "main",
    serverName: null,
    attachedBy: null,
    localIp: null,
    hostname: null,
    machineId: null,
    mac: null,
    statusVisible: false,
    selectorOpen: false,
    selectedPipes: [],
    routeMode: "selected",
    slaves: {},
    discoveredPipes: []
  };
});

// src/utils/teamDiscovery.ts
function getTeammateStatuses(teamName) {
  const teamFile = readTeamFile(teamName);
  if (!teamFile) {
    return [];
  }
  const hiddenPaneIds = new Set(teamFile.hiddenPaneIds ?? []);
  const statuses = [];
  for (const member of teamFile.members) {
    if (member.name === "team-lead") {
      continue;
    }
    const isActive = member.isActive !== false;
    const status = isActive ? "running" : "idle";
    statuses.push({
      name: member.name,
      agentId: member.agentId,
      agentType: member.agentType,
      model: member.model,
      prompt: member.prompt,
      status,
      color: member.color,
      tmuxPaneId: member.tmuxPaneId,
      cwd: member.cwd,
      worktreePath: member.worktreePath,
      isHidden: hiddenPaneIds.has(member.tmuxPaneId),
      backendType: member.backendType,
      mode: member.mode
    });
  }
  return statuses;
}
var init_teamDiscovery = __esm(() => {
  init_teamHelpers();
});

export { getTeammateStatuses, init_teamDiscovery, getPipesDir, isPipeControlled, getPipeDisplayRole, getPipeIpc, init_pipeTransport };
