import { Icon } from "animal-island-ui";
import type { IconName } from "animal-island-ui";
import "./IslandLoader.css";

type IslandLoaderSize = "sm" | "md" | "lg";

interface IslandLoaderProps {
  active?: boolean;
  className?: string;
  icon?: IconName;
  label?: string;
  size?: IslandLoaderSize;
}

export function IslandLoader({
  active = true,
  className = "",
  icon = "icon-miles",
  label,
  size = "md",
}: IslandLoaderProps) {
  return (
    <div
      className={`mimo-island-loader mimo-island-loader--${size}${active ? " mimo-island-loader--active" : ""} ${className}`}
      role={label ? "status" : undefined}
      aria-label={label}
    >
      <div className="mimo-island-loader-stage" aria-hidden="true">
        <span className="mimo-island-loader-sun" />
        <span className="mimo-island-loader-cloud mimo-island-loader-cloud--one" />
        <span className="mimo-island-loader-cloud mimo-island-loader-cloud--two" />
        <div className="mimo-island-loader-illustration">
          <span className="mimo-island-loader-tree">
            <i className="mimo-island-loader-trunk" />
            <i className="mimo-island-loader-leaf mimo-island-loader-leaf--one" />
            <i className="mimo-island-loader-leaf mimo-island-loader-leaf--two" />
            <i className="mimo-island-loader-leaf mimo-island-loader-leaf--three" />
          </span>
          <span className="mimo-island-loader-fish" />
        </div>
        <span className="mimo-island-loader-badge">
          <Icon name={icon} size={size === "sm" ? 13 : 16} bounce={active} />
        </span>
        <span className="mimo-island-loader-island" />
        <span className="mimo-island-loader-wave mimo-island-loader-wave--one" />
        <span className="mimo-island-loader-wave mimo-island-loader-wave--two" />
      </div>
      {label && <span className="mimo-island-loader-label">{label}</span>}
    </div>
  );
}
