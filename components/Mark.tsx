// The Halo mark — an inline SVG so it can animate and recolor. Three cuts:
//   light  (default, on light grounds)  ring olive, dot chartreuse
//   small  (<28px, heavier weight)      ring olive, dot chartreuse
//   dark   (on ink grounds)             ring matcha, dot chartreuse
// Two colors only; mouth always at 12 o'clock; never rotated or closed.

import type { CSSProperties } from "react";

type Variant = "light" | "small" | "dark";

interface MarkProps {
  variant?: Variant;
  size?: number | string;
  className?: string;
  style?: CSSProperties;
  /** Decorative marks are aria-hidden; pass a label to expose it to AT. */
  label?: string;
}

const RING_COLOR: Record<Variant, string> = {
  light: "var(--olive)",
  small: "var(--olive)",
  dark: "var(--matcha)",
};

export default function Mark({
  variant = "light",
  size = "1em",
  className,
  style,
  label,
}: MarkProps) {
  const dim = typeof size === "number" ? `${size}px` : size;
  const a11y = label
    ? { role: "img" as const, "aria-label": label }
    : { "aria-hidden": true as const };

  // The "small" cut uses a tighter arc and heavier stroke for legibility at tiny sizes.
  const ring =
    variant === "small"
      ? { d: "M 67.51 20.86 A 34 34 0 1 1 32.49 20.86", width: 12, cy: 16, r: 8 }
      : { d: "M 65.21 17.37 A 36 36 0 1 1 34.79 17.37", width: 8.5, cy: 14, r: 6.5 };

  return (
    <svg
      viewBox="0 0 100 100"
      width={dim}
      height={dim}
      className={className}
      style={{ display: "block", flexShrink: 0, ...style }}
      {...a11y}
    >
      <path
        d={ring.d}
        fill="none"
        stroke={RING_COLOR[variant]}
        strokeWidth={ring.width}
        strokeLinecap="round"
      />
      <circle cx={50} cy={ring.cy} r={ring.r} fill="var(--chartreuse)" />
    </svg>
  );
}

/**
 * The hero "Glint" mark — the ring draws itself on and the dot drops in.
 * Animation is driven by CSS classes (pd-ring-draw / pd-dot-drop), gated by a
 * `.pd-animate` ancestor so it only plays on the first visit of a session.
 */
export function HeroMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width="100%"
      height="100%"
      className={className}
      style={{ display: "block", overflow: "visible" }}
      role="img"
      aria-label="Peridot"
    >
      <path
        className="pd-ring-draw"
        d="M 65.21 17.37 A 36 36 0 1 1 34.79 17.37"
        pathLength={100}
        fill="none"
        stroke="var(--olive)"
        strokeWidth={8.5}
        strokeLinecap="round"
      />
      <circle className="pd-dot-drop" cx={50} cy={14} r={6.5} fill="var(--chartreuse)" />
    </svg>
  );
}
