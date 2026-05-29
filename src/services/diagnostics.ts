import type { SystemDiagnosticItem } from "@/types";
import { isDesktopRuntime, loadMimoConfig } from "@/services/config";

export async function runSystemDiagnostics(): Promise<SystemDiagnosticItem[]> {
  if (isDesktopRuntime()) {
    const { invoke } = await import("@tauri-apps/api/core");
    return invoke<SystemDiagnosticItem[]>("system_diagnostics");
  }

  const config = await loadMimoConfig();
  return [
    {
      key: "runtime",
      label: "运行环境",
      ok: false,
      detail: "当前是浏览器预览，不具备 .app、签名和内置 engine 诊断能力",
    },
    {
      key: "config",
      label: "配置",
      ok: Boolean(config?.apiKey && config?.baseUrl),
      detail: config ? "已读取浏览器预览配置" : "未找到浏览器预览配置",
    },
  ];
}
