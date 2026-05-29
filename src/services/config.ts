// ============================================================
// MiModex — Config Service  (~/.mimo/mimo.config.json 读写)
// ============================================================
import type { MimoConfig } from "@/types";
import { isTauri } from "@tauri-apps/api/core";

export interface MimoConfigSaveResult {
  ok: boolean;
  path: string;
  error?: string;
  persisted?: MimoConfig;
  runtime: "desktop" | "browser-preview";
}

export function isDesktopRuntime(): boolean {
  try {
    return isTauri();
  } catch {
    return false;
  }
}

const CONFIG_FILE = ".mimo/mimo.config.json";
const LS_KEY = "mimodex-api-config";
export const MIMO_CONFIG_PATH_LABEL = "~/.mimo/mimo.config.json";

/** 读取 ~/.mimo/mimo.config.json，浏览器模式降级到 localStorage */
export async function loadMimoConfig(): Promise<MimoConfig | null> {
  try {
    const { readTextFile, BaseDirectory } = await import("@tauri-apps/plugin-fs");
    const text = await readTextFile(CONFIG_FILE, { baseDir: BaseDirectory.Home });
    return JSON.parse(text) as MimoConfig;
  } catch {
    try {
      const raw = localStorage.getItem(LS_KEY);
      return raw ? (JSON.parse(raw) as MimoConfig) : null;
    } catch {
      return null;
    }
  }
}

/** 写入 ~/.mimo/mimo.config.json，浏览器模式降级到 localStorage */
export async function saveMimoConfig(config: MimoConfig): Promise<MimoConfigSaveResult> {
  const payload = normalizeConfig(config);

  try {
    const { writeTextFile, mkdir, BaseDirectory } = await import("@tauri-apps/plugin-fs");
    // 确保 ~/.mimo/ 目录存在
    try {
      await mkdir(".mimo", { baseDir: BaseDirectory.Home, recursive: true });
    } catch {
      /* 目录可能已存在 */
    }
    await writeTextFile(CONFIG_FILE, JSON.stringify(payload, null, 2), {
      baseDir: BaseDirectory.Home,
    });

    const persisted = await loadMimoConfig();
    if (!isSameConfig(payload, persisted)) {
      return {
        ok: false,
        path: MIMO_CONFIG_PATH_LABEL,
        runtime: "desktop",
        persisted: persisted ?? undefined,
        error: "写入后读回的配置不一致",
      };
    }

    return {
      ok: true,
      path: MIMO_CONFIG_PATH_LABEL,
      runtime: "desktop",
      persisted: persisted ?? undefined,
    };
  } catch (err) {
    if (!isDesktopRuntime()) {
      return saveToLocalStorage(payload, err);
    }
    console.error("[MiModex] Failed to save config:", err);
    return {
      ok: false,
      path: MIMO_CONFIG_PATH_LABEL,
      runtime: "desktop",
      error: errorToString(err),
    };
  }
}

function saveToLocalStorage(payload: MimoConfig, desktopErr: unknown): MimoConfigSaveResult {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(payload, null, 2));
    const persisted = JSON.parse(localStorage.getItem(LS_KEY) || "null") as MimoConfig | null;
    return {
      ok: isSameConfig(payload, persisted),
      path: "localStorage:mimodex-api-config",
      runtime: "browser-preview",
      persisted: persisted ?? undefined,
      error: persisted ? undefined : `localStorage 写入后读回为空；Tauri FS 错误：${errorToString(desktopErr)}`,
    };
  } catch (err) {
    return {
      ok: false,
      path: "localStorage:mimodex-api-config",
      runtime: "browser-preview",
      error: `${errorToString(err)}；Tauri FS 错误：${errorToString(desktopErr)}`,
    };
  }
}

function normalizeConfig(config: MimoConfig): MimoConfig {
  return {
    ...config,
    apiKey: config.apiKey?.trim(),
    baseUrl: config.baseUrl?.trim().replace(/\/+$/, ""),
  };
}

function isSameConfig(expected: MimoConfig, actual: MimoConfig | null): boolean {
  if (!actual) return false;
  return (expected.apiKey || "") === (actual.apiKey || "")
    && (expected.baseUrl || "") === (actual.baseUrl || "");
}

function errorToString(err: unknown): string {
  if (err instanceof Error) return err.message;
  if (typeof err === "string") return err;
  try {
    return JSON.stringify(err);
  } catch {
    return String(err);
  }
}
