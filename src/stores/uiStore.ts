// ============================================================
// MiModex — UI Store (panels, tabs, command palette)
// ============================================================
import { create } from "zustand";
import type { CapabilityTab, LeftPanelTab, RightPanelTab } from "@/types";

interface UIStore {
  // ---- App Launcher ----
  launcherOpen: boolean;
  setLauncherOpen: (open: boolean) => void;

  // ---- Left Panel ----
  leftPanelTab: LeftPanelTab;
  leftPanelCollapsed: boolean;
  capabilityTab: CapabilityTab;
  mainMode: "chat" | "capability";
  setLeftPanelTab: (tab: LeftPanelTab) => void;
  openCapability: (tab?: CapabilityTab) => void;
  openChat: () => void;
  setCapabilityTab: (tab: CapabilityTab) => void;
  toggleLeftPanel: () => void;

  // ---- Right Panel ----
  rightPanelTab: RightPanelTab;
  rightPanelOpen: boolean;
  setRightPanelTab: (tab: RightPanelTab) => void;
  toggleRightPanel: () => void;
  openRightPanel: (tab?: RightPanelTab) => void;
  closeRightPanel: () => void;

  // ---- Command Palette ----
  commandPaletteOpen: boolean;
  setCommandPaletteOpen: (open: boolean) => void;

  // ---- Settings ----
  settingsOpen: boolean;
  settingsTab: string;
  setSettingsOpen: (open: boolean) => void;
  setSettingsTab: (tab: string) => void;
}

export const useUIStore = create<UIStore>((set) => ({
  // ---- App Launcher ----
  launcherOpen: false,
  setLauncherOpen: (open) => set({ launcherOpen: open }),

  // ---- Left Panel ----
  leftPanelTab: "conversations",
  leftPanelCollapsed: false,
  capabilityTab: "coding",
  mainMode: "chat",
  setLeftPanelTab: (tab) => set({ leftPanelTab: tab }),
  setCapabilityTab: (tab) => set({ capabilityTab: tab, mainMode: "capability" }),
  openCapability: (tab) =>
    set({
      leftPanelCollapsed: false,
      leftPanelTab: "capabilities",
      capabilityTab: tab ?? "coding",
      mainMode: "capability",
    }),
  openChat: () => set({ mainMode: "chat", leftPanelTab: "conversations" }),
  toggleLeftPanel: () =>
    set((s) => ({ leftPanelCollapsed: !s.leftPanelCollapsed })),

  // ---- Right Panel ----
  rightPanelTab: "assets",
  rightPanelOpen: false,
  setRightPanelTab: (tab) => set({ rightPanelTab: tab }),
  toggleRightPanel: () => set((s) => ({ rightPanelOpen: !s.rightPanelOpen })),
  openRightPanel: (tab) =>
    set((s) => ({
      rightPanelOpen: true,
      rightPanelTab: tab ?? s.rightPanelTab,
    })),
  closeRightPanel: () => set({ rightPanelOpen: false }),

  // ---- Command Palette ----
  commandPaletteOpen: false,
  setCommandPaletteOpen: (open) => set({ commandPaletteOpen: open }),

  // ---- Settings ----
  settingsOpen: false,
  settingsTab: "connection",
  setSettingsOpen: (open) => set({ settingsOpen: open }),
  setSettingsTab: (tab) => set({ settingsTab: tab }),
}));
