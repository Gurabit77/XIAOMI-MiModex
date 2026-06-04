import { useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent, PointerEvent as ReactPointerEvent, ReactNode } from "react";
import { createPortal } from "react-dom";
import "./AdaptiveSelect.css";

export type AdaptiveSelectOption = {
  key: string;
  label: ReactNode;
};

type AdaptiveSelectProps = {
  options: AdaptiveSelectOption[];
  value?: string;
  onChange: (key: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  "aria-label"?: string;
};

type DropdownStyle = CSSProperties & {
  "--adaptive-select-max-height"?: string;
};

const VIEWPORT_PADDING = 8;
const DROPDOWN_GAP = 6;
const MAX_DROPDOWN_WIDTH = 320;
const MAX_DROPDOWN_HEIGHT = 320;

function getViewportBounds() {
  const viewport = window.visualViewport;
  const left = viewport?.offsetLeft ?? 0;
  const top = viewport?.offsetTop ?? 0;
  const width = viewport?.width ?? window.innerWidth;
  const height = viewport?.height ?? window.innerHeight;

  return {
    left,
    top,
    right: left + width,
    bottom: top + height,
    width,
    height,
  };
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function AdaptiveSelect({
  options,
  value,
  onChange,
  placeholder = "请选择",
  disabled = false,
  className,
  "aria-label": ariaLabel,
}: AdaptiveSelectProps) {
  const id = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);
  const [dropdownStyle, setDropdownStyle] = useState<DropdownStyle>({
    position: "fixed",
    left: 0,
    top: 0,
    visibility: "hidden",
  });

  const selectedOption = useMemo(
    () => options.find((option) => option.key === value) ?? null,
    [options, value],
  );

  const selectedIndex = useMemo(
    () => Math.max(0, options.findIndex((option) => option.key === value)),
    [options, value],
  );

  const activeKey = hoveredKey ?? selectedOption?.key ?? options[0]?.key ?? null;

  const updatePosition = () => {
    const trigger = triggerRef.current;
    const dropdown = dropdownRef.current;
    if (!trigger || !dropdown) return;

    const triggerRect = trigger.getBoundingClientRect();
    const viewport = getViewportBounds();
    const maxAvailableWidth = Math.max(160, viewport.width - VIEWPORT_PADDING * 2);
    const menuWidth = Math.min(
      MAX_DROPDOWN_WIDTH,
      maxAvailableWidth,
      Math.max(triggerRect.width, dropdown.offsetWidth || triggerRect.width),
    );

    const preferredHeight = dropdown.scrollHeight || options.length * 44 + 24;
    const spaceBelow = viewport.bottom - triggerRect.bottom - DROPDOWN_GAP - VIEWPORT_PADDING;
    const spaceAbove = triggerRect.top - viewport.top - DROPDOWN_GAP - VIEWPORT_PADDING;
    const openDown = spaceBelow >= Math.min(preferredHeight, 220) || spaceBelow >= spaceAbove;
    const maxHeight = Math.max(
      120,
      Math.min(
        MAX_DROPDOWN_HEIGHT,
        viewport.height - VIEWPORT_PADDING * 2,
        openDown ? spaceBelow : spaceAbove,
      ),
    );
    const menuHeight = Math.min(preferredHeight, maxHeight);

    const minLeft = viewport.left + VIEWPORT_PADDING;
    const maxLeft = viewport.right - VIEWPORT_PADDING - menuWidth;
    const left = clamp(triggerRect.left, minLeft, Math.max(minLeft, maxLeft));
    const top = openDown
      ? clamp(triggerRect.bottom + DROPDOWN_GAP, viewport.top + VIEWPORT_PADDING, viewport.bottom - VIEWPORT_PADDING - menuHeight)
      : clamp(triggerRect.top - DROPDOWN_GAP - menuHeight, viewport.top + VIEWPORT_PADDING, viewport.bottom - VIEWPORT_PADDING - menuHeight);

    setDropdownStyle({
      position: "fixed",
      left,
      top,
      minWidth: triggerRect.width,
      width: menuWidth,
      zIndex: 1200,
      "--adaptive-select-max-height": `${maxHeight}px`,
      visibility: "visible",
    });
    setReady(true);
  };

  useLayoutEffect(() => {
    if (!open) return;
    setReady(false);
    setDropdownStyle((style) => ({ ...style, visibility: "hidden" }));
    const frame = requestAnimationFrame(updatePosition);
    return () => cancelAnimationFrame(frame);
  }, [open, options.length]);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node | null;
      if (!target) return;
      if (rootRef.current?.contains(target) || dropdownRef.current?.contains(target)) return;
      setOpen(false);
    };

    const handleReposition = () => updatePosition();

    document.addEventListener("pointerdown", handlePointerDown, true);
    window.addEventListener("resize", handleReposition);
    window.addEventListener("scroll", handleReposition, true);
    window.visualViewport?.addEventListener("resize", handleReposition);
    window.visualViewport?.addEventListener("scroll", handleReposition);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown, true);
      window.removeEventListener("resize", handleReposition);
      window.removeEventListener("scroll", handleReposition, true);
      window.visualViewport?.removeEventListener("resize", handleReposition);
      window.visualViewport?.removeEventListener("scroll", handleReposition);
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      setReady(false);
      setHoveredKey(null);
      return;
    }
    setHoveredKey(options[selectedIndex]?.key ?? options[0]?.key ?? null);
  }, [open, options, selectedIndex]);

  const selectOption = (key: string) => {
    onChange(key);
    setOpen(false);
    requestAnimationFrame(() => triggerRef.current?.focus());
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLButtonElement>) => {
    if (disabled) return;
    event.preventDefault();
    triggerRef.current?.focus();
    setOpen((current) => !current);
  };

  const moveActive = (offset: number) => {
    if (!options.length) return;
    const currentIndex = Math.max(0, options.findIndex((option) => option.key === activeKey));
    const nextIndex = (currentIndex + offset + options.length) % options.length;
    setHoveredKey(options[nextIndex].key);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      open ? moveActive(1) : setOpen(true);
      return;
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      open ? moveActive(-1) : setOpen(true);
      return;
    }
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (!open) {
        setOpen(true);
        return;
      }
      if (activeKey) selectOption(activeKey);
      return;
    }
    if (event.key === "Escape" && open) {
      event.preventDefault();
      setOpen(false);
    }
  };

  return (
    <div
      ref={rootRef}
      className={`adaptive-select${open ? " adaptive-select--open" : ""}${disabled ? " adaptive-select--disabled" : ""}${className ? ` ${className}` : ""}`}
    >
      <button
        ref={triggerRef}
        id={`${id}-trigger`}
        type="button"
        className="adaptive-select-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${id}-listbox`}
        aria-label={ariaLabel}
        disabled={disabled}
        onPointerDown={handlePointerDown}
        onClick={(event) => {
          if (event.detail === 0 && !disabled) setOpen((current) => !current);
        }}
        onKeyDown={handleKeyDown}
      >
        <span className={selectedOption ? "adaptive-select-value" : "adaptive-select-placeholder"}>
          {selectedOption?.label ?? placeholder}
        </span>
        <span className="adaptive-select-arrow" aria-hidden="true">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>

      {open && createPortal(
        <div
          ref={dropdownRef}
          id={`${id}-listbox`}
          className={`adaptive-select-dropdown${ready ? " adaptive-select-dropdown--ready" : ""}`}
          style={dropdownStyle}
          role="listbox"
          aria-labelledby={`${id}-trigger`}
        >
          {options.map((option) => {
            const selected = value === option.key;
            const active = activeKey === option.key;
            return (
              <button
                key={option.key}
                type="button"
                className={`adaptive-select-option${selected ? " adaptive-select-option--selected" : ""}${active ? " adaptive-select-option--active" : ""}`}
                role="option"
                aria-selected={selected}
                onMouseEnter={() => setHoveredKey(option.key)}
                onClick={() => selectOption(option.key)}
              >
                <span className="adaptive-select-option-dot" aria-hidden="true" />
                <span className="adaptive-select-option-label">{option.label}</span>
                {selected && <span className="adaptive-select-option-bar" aria-hidden="true" />}
              </button>
            );
          })}
        </div>,
        document.body,
      )}
    </div>
  );
}
