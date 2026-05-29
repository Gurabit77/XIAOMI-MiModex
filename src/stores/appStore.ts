// ============================================================
// MiModex — App Store (conversations, messages, settings)
// ============================================================
import { create } from "zustand";
import type { Conversation, Message, AppSettings } from "@/types";

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

interface AppStore {
  // ---- Conversations ----
  conversations: Conversation[];
  activeConversationId: string | null;
  getActiveConversation: () => Conversation | undefined;
  createConversation: (title?: string) => string;
  deleteConversation: (id: string) => void;
  setActiveConversation: (id: string) => void;
  addMessage: (conversationId: string, message: Omit<Message, "id">) => string;
  updateMessage: (
    conversationId: string,
    messageId: string,
    updates: Partial<Message>
  ) => void;

  // ---- Input ----
  inputValue: string;
  setInputValue: (value: string) => void;
  isStreaming: boolean;
  setIsStreaming: (streaming: boolean) => void;

  // ---- Settings ----
  settings: AppSettings;
  updateSettings: (updates: Partial<AppSettings>) => void;

  // ---- Welcome ----
  showWelcome: boolean;
  dismissWelcome: () => void;
}

const DEFAULT_SETTINGS: AppSettings = {
  theme: "light",
  language: "zh-CN",
  fontSize: 14,
  sendKey: "enter",
  motionMode: "full",
  soundEnabled: true,
  typewriterEnabled: true,
};

export const useAppStore = create<AppStore>((set, get) => ({
  // ---- Conversations ----
  conversations: [],
  activeConversationId: null,

  getActiveConversation: () => {
    const { conversations, activeConversationId } = get();
    return conversations.find((c) => c.id === activeConversationId);
  },

  createConversation: (title?: string) => {
    const id = generateId();
    const now = Date.now();
    const conversation: Conversation = {
      id,
      title: title || "新对话",
      messages: [],
      createdAt: now,
      updatedAt: now,
    };
    set((state) => ({
      conversations: [conversation, ...state.conversations],
      activeConversationId: id,
      showWelcome: false,
    }));
    return id;
  },

  deleteConversation: (id: string) => {
    set((state) => {
      const filtered = state.conversations.filter((c) => c.id !== id);
      const newActive =
        state.activeConversationId === id
          ? filtered[0]?.id ?? null
          : state.activeConversationId;
      return {
        conversations: filtered,
        activeConversationId: newActive,
        showWelcome: filtered.length === 0,
      };
    });
  },

  setActiveConversation: (id: string) => {
    set({ activeConversationId: id, showWelcome: false });
  },

  addMessage: (conversationId: string, message: Omit<Message, "id">) => {
    const msgId = generateId();
    set((state) => ({
      conversations: state.conversations.map((c) =>
        c.id === conversationId
          ? {
              ...c,
              messages: [...c.messages, { ...message, id: msgId }],
              updatedAt: Date.now(),
              title:
                c.messages.length === 0 && message.role === "user"
                  ? message.content.slice(0, 30) +
                    (message.content.length > 30 ? "..." : "")
                  : c.title,
            }
          : c
      ),
    }));
    return msgId;
  },

  updateMessage: (
    conversationId: string,
    messageId: string,
    updates: Partial<Message>
  ) => {
    set((state) => ({
      conversations: state.conversations.map((c) =>
        c.id === conversationId
          ? {
              ...c,
              messages: c.messages.map((m) =>
                m.id === messageId ? { ...m, ...updates } : m
              ),
              updatedAt: Date.now(),
            }
          : c
      ),
    }));
  },

  // ---- Input ----
  inputValue: "",
  setInputValue: (value: string) => set({ inputValue: value }),
  isStreaming: false,
  setIsStreaming: (streaming: boolean) => set({ isStreaming: streaming }),

  // ---- Settings ----
  settings: DEFAULT_SETTINGS,
  updateSettings: (updates: Partial<AppSettings>) =>
    set((state) => ({
      settings: { ...state.settings, ...updates },
    })),

  // ---- Welcome ----
  showWelcome: true,
  dismissWelcome: () => set({ showWelcome: false }),
}));
