// ============================================================
// MiModex — Session Store (runtime, model, API config, tasks, permissions)
// ============================================================
import { create } from "zustand";
import type {
  EffortLevel,
  ConnectionStatus,
  BackgroundTask,
  OutputAsset,
  FileChange,
  ContextFile,
  PermissionMode,
  PermissionRule,
  HookConfig,
  MultimodalAttachment,
} from "@/types";
import { loadMimoConfig, saveMimoConfig, type MimoConfigSaveResult } from "@/services/config";

interface SessionStore {
  // ---- Model & Reasoning ----
  // 真实模型 ID 来自 mimo-code 源码：mimo-v2.5 / mimo-v2.5-pro
  currentModel: string;
  effort: EffortLevel;
  fastMode: boolean;
  setModel: (model: string) => void;
  setEffort: (effort: EffortLevel) => void;
  toggleFastMode: () => void;

  // ---- API Config (~/.mimo/mimo.config.json) ----
  apiKey: string;
  baseUrl: string;
  configLoaded: boolean;
  configLoadError: string | null;
  setApiKey: (key: string) => void;
  setBaseUrl: (url: string) => void;
  loadConfig: () => Promise<void>;
  saveConfig: () => Promise<MimoConfigSaveResult>;

  // ---- Connection ----
  connectionStatus: ConnectionStatus;
  sessionId: string | null;
  setConnectionStatus: (status: ConnectionStatus) => void;
  setSessionId: (id: string | null) => void;

  // ---- Token Tracking ----
  tokensUsed: number;
  tokensLimit: number;
  updateTokens: (used: number, limit: number) => void;

  // ---- Background Tasks ----
  backgroundTasks: BackgroundTask[];
  addTask: (task: BackgroundTask) => void;
  updateTask: (id: string, updates: Partial<BackgroundTask>) => void;
  removeTask: (id: string) => void;

  // ---- Output Assets ----
  outputAssets: OutputAsset[];
  addOutputAsset: (asset: OutputAsset) => void;
  removeOutputAsset: (id: string) => void;

  // ---- Draft multimodal attachments ----
  draftAttachments: MultimodalAttachment[];
  addDraftAttachment: (attachment: MultimodalAttachment) => void;
  removeDraftAttachment: (id: string) => void;
  clearDraftAttachments: () => void;

  // ---- File Changes ----
  fileChanges: FileChange[];
  setFileChanges: (changes: FileChange[]) => void;

  // ---- Context Files ----
  contextFiles: ContextFile[];
  setContextFiles: (files: ContextFile[]) => void;
  addContextFile: (file: ContextFile) => void;

  // ---- Permissions ----
  permissionMode: PermissionMode;
  permissionRules: PermissionRule[];
  setPermissionMode: (mode: PermissionMode) => void;
  addPermissionRule: (rule: PermissionRule) => void;
  removePermissionRule: (id: string) => void;

  // ---- Hooks ----
  hooks: HookConfig[];
  setHooks: (hooks: HookConfig[]) => void;
  addHook: (hook: HookConfig) => void;
  removeHook: (id: string) => void;
  toggleHook: (id: string) => void;
}

export const useSessionStore = create<SessionStore>((set, get) => ({
  // ---- Model & Reasoning ----
  currentModel: "mimo-v2.5-pro",   // 默认使用 Pro 模型，匹配桌面端首启配置
  effort: "max",
  fastMode: false,
  setModel:       (model)  => set({ currentModel: model }),
  setEffort:      (effort) => set({ effort }),
  toggleFastMode: ()       => set((s) => ({ fastMode: !s.fastMode })),

  // ---- API Config ----
  apiKey:    "",
  baseUrl:   "https://token-plan-sgp.xiaomimimo.com/anthropic",
  configLoaded: false,
  configLoadError: null,
  setApiKey:  (apiKey)  => set({ apiKey }),
  setBaseUrl: (baseUrl) => set({ baseUrl }),
  loadConfig: async () => {
    try {
      const config = await loadMimoConfig();
      if (config) {
        if (config.apiKey)  set({ apiKey:  config.apiKey  });
        if (config.baseUrl) set({ baseUrl: config.baseUrl });
      }
      set({ configLoaded: true, configLoadError: null });
    } catch (err) {
      set({
        configLoaded: true,
        configLoadError: err instanceof Error ? err.message : String(err),
      });
    }
  },
  saveConfig: async () => {
    const { apiKey, baseUrl } = get();
    return saveMimoConfig({ apiKey, baseUrl });
  },

  // ---- Connection ----
  connectionStatus: "connecting",
  sessionId:        null,
  setConnectionStatus: (status) => set({ connectionStatus: status }),
  setSessionId:        (id)     => set({ sessionId: id }),

  // ---- Token Tracking ----
  tokensUsed:  0,
  tokensLimit: 200000,
  updateTokens: (used, limit) => set({ tokensUsed: used, tokensLimit: limit }),

  // ---- Background Tasks ----
  backgroundTasks: [],
  addTask:    (task) => set((s) => ({ backgroundTasks: [...s.backgroundTasks, task] })),
  updateTask: (id, updates) =>
    set((s) => ({ backgroundTasks: s.backgroundTasks.map((t) => t.id === id ? { ...t, ...updates } : t) })),
  removeTask: (id) =>
    set((s) => ({ backgroundTasks: s.backgroundTasks.filter((t) => t.id !== id) })),

  // ---- Output Assets ----
  outputAssets: [],
  addOutputAsset: (asset) => set((s) => ({ outputAssets: [asset, ...s.outputAssets] })),
  removeOutputAsset: (id) => set((s) => ({ outputAssets: s.outputAssets.filter((asset) => asset.id !== id) })),

  // ---- Draft multimodal attachments ----
  draftAttachments: [],
  addDraftAttachment: (attachment) =>
    set((s) => ({
      draftAttachments: [
        attachment,
        ...s.draftAttachments.filter((item) => item.id !== attachment.id),
      ],
    })),
  removeDraftAttachment: (id) =>
    set((s) => ({ draftAttachments: s.draftAttachments.filter((item) => item.id !== id) })),
  clearDraftAttachments: () => set({ draftAttachments: [] }),

  // ---- File Changes ----
  fileChanges:    [],
  setFileChanges: (changes) => set({ fileChanges: changes }),

  // ---- Context Files ----
  contextFiles:   [],
  setContextFiles: (files) => set({ contextFiles: files }),
  addContextFile:  (file)  => set((s) => ({ contextFiles: [...s.contextFiles, file] })),

  // ---- Permissions ----
  permissionMode:  "acceptEdits",
  permissionRules: [],
  setPermissionMode:    (mode) => set({ permissionMode: mode }),
  addPermissionRule:    (rule) => set((s) => ({ permissionRules: [...s.permissionRules, rule] })),
  removePermissionRule: (id)   =>
    set((s) => ({ permissionRules: s.permissionRules.filter((r) => r.id !== id) })),

  // ---- Hooks ----
  hooks:      [],
  setHooks:   (hooks) => set({ hooks }),
  addHook:    (hook)  => set((s) => ({ hooks: [...s.hooks, hook] })),
  removeHook: (id)    => set((s) => ({ hooks: s.hooks.filter((h) => h.id !== id) })),
  toggleHook: (id)    =>
    set((s) => ({ hooks: s.hooks.map((h) => h.id === id ? { ...h, enabled: !h.enabled } : h) })),
}));

// ---- 启动时自动从 ~/.mimo/mimo.config.json 加载 API 配置 ----
useSessionStore.getState().loadConfig();
