// Pre-launch CTAs. The app isn't on the stores yet, so there are no live
// purchase/download links — every call-to-action is a non-clickable "Coming
// soon" badge that still highlights the $9.99-once price.

export function ComingSoonCta({
  tone = "light",
  height = 52,
  compact = false,
  className = "",
}: {
  tone?: "light" | "dark";
  height?: number;
  compact?: boolean;
  className?: string;
}) {
  const border = tone === "dark" ? "var(--matcha)" : "var(--olive)";
  const labelColor = tone === "dark" ? "var(--ink-band)" : "var(--ink)";
  const priceColor = tone === "dark" ? "var(--chartreuse)" : "var(--olive)";
  const fs = compact ? 14 : 15;
  return (
    <span
      aria-disabled="true"
      className={`inline-flex select-none items-center justify-center rounded-pill font-figtree ${className}`}
      style={{
        height,
        padding: compact ? "0 18px" : "0 26px",
        gap: 9,
        border: `1.5px solid ${border}`,
        color: labelColor,
        cursor: "default",
        letterSpacing: "-0.01em",
        whiteSpace: "nowrap",
      }}
    >
      <span style={{ fontWeight: 600, fontSize: fs }}>Coming soon</span>
      <span aria-hidden="true" style={{ opacity: 0.35 }}>
        ·
      </span>
      <span style={{ fontWeight: 700, fontSize: fs, color: priceColor }}>$9.99 once</span>
    </span>
  );
}

/** Small muted line noting where the app will land, used under the hero CTA. */
export function ComingSoonNote({ className = "" }: { className?: string }) {
  return (
    <p
      className={`font-petrona text-ink-3 ${className}`}
      style={{ fontSize: 15, lineHeight: 1.5, margin: 0 }}
    >
      On the App Store and Google Play soon.
    </p>
  );
}
