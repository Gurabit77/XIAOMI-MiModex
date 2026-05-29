// ============================================================
// MiModex — CommandPalette (slash command suggestions)
// ============================================================
import { useMemo } from "react";
import { Icon } from "animal-island-ui";
import { REAL_SLASH_COMMANDS } from "@/constants/mimoCapabilities";

const SLASH_COMMANDS = REAL_SLASH_COMMANDS;

interface CommandPaletteProps {
  filter: string;
  selectedIndex: number;
  onSelect: (command: string) => void;
}

export function CommandPalette({ filter, selectedIndex, onSelect }: CommandPaletteProps) {
  const filtered = useMemo(() => {
    const query = filter.slice(1).toLowerCase(); // remove leading /
    return SLASH_COMMANDS.filter(
      (cmd) =>
        cmd.name.toLowerCase().includes(query) ||
        cmd.description.toLowerCase().includes(query)
    );
  }, [filter]);

  if (filtered.length === 0) return null;

  const categoryLabels: Record<string, string> = {
    coding: "编程",
    mimo: "MiMo",
    config: "配置",
    session: "会话",
    context: "上下文",
    utility: "工具",
    navigation: "导航",
  };

  return (
    <div className="command-palette">
      <div className="command-palette-header">
        <span className="command-palette-title">命令面板</span>
        <span className="command-palette-hint">↑↓ 导航 · Enter 选择 · Esc 关闭</span>
      </div>
      <div className="command-palette-list">
        {filtered.map((cmd, idx) => (
          <button
            key={cmd.name}
            className={`command-palette-item ${idx === selectedIndex ? "selected" : ""}`}
            onClick={() => onSelect(cmd.name)}
            onMouseDown={(e) => e.preventDefault()} // keep focus on input
          >
            <Icon name={cmd.icon} size={16} />
            <span className="command-palette-cmd">{cmd.name}</span>
            <span className="command-palette-desc">{cmd.description}</span>
            <span className="command-palette-category">
              {categoryLabels[cmd.category] ?? cmd.category}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export { SLASH_COMMANDS };
