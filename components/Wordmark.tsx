// The "perıdot" lockup: Figtree SemiBold lowercase with a dotless ı whose tittle
// is the small Halo mark. The mark appears once per lockup.

import Mark from "./Mark";

interface WordmarkProps {
  /** Font size in px for the wordmark text. */
  fontSize: number;
  className?: string;
  /** Glint the tittle once on mount (header lockup). */
  glint?: boolean;
}

export default function Wordmark({ fontSize, className, glint }: WordmarkProps) {
  return (
    <span
      className={className}
      style={{
        fontFamily: "var(--font-figtree)",
        fontWeight: 600,
        fontSize: `${fontSize}px`,
        letterSpacing: "-0.03em",
        color: "var(--ink)",
        lineHeight: 1,
        display: "inline-flex",
        alignItems: "baseline",
      }}
    >
      per
      <span style={{ position: "relative", display: "inline-block" }}>
        ı
        <Mark
          variant="small"
          size="0.42em"
          className={glint ? "pd-glint" : undefined}
          style={{
            position: "absolute",
            left: "50%",
            bottom: "0.64em",
            transform: "translateX(-50%)",
          }}
        />
      </span>
      dot
    </span>
  );
}
