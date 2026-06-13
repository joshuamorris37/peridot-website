// Shared call-to-action buttons. App-store links are placeholders (href="#")
// until the real store URLs land.

import type { ReactNode } from "react";

const STORE_HREF = "#";

/** Solid olive pill — the primary download / purchase action on light grounds. */
export function PrimaryButton({
  children,
  href = STORE_HREF,
  className = "",
  height = 52,
}: {
  children: ReactNode;
  href?: string;
  className?: string;
  height?: number;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-pill bg-olive font-figtree font-bold text-ground no-underline shadow-btn transition-colors hover:bg-olive-deep ${className}`}
      style={{ height, padding: "0 30px", fontSize: 16, letterSpacing: "-0.01em" }}
    >
      {children}
    </a>
  );
}

/** Olive underlined text link with a ≥44px hit area. */
export function TextLink({
  children,
  href = STORE_HREF,
}: {
  children: ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center font-figtree font-semibold text-olive underline decoration-olive/35 underline-offset-4 transition-[text-decoration-color] hover:decoration-olive"
      style={{ minHeight: 44, padding: "6px 4px", fontSize: "15.5px" }}
    >
      {children}
    </a>
  );
}
