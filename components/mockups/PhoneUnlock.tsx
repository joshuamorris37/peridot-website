import Mark from "../Mark";

// The dark "Unlock" screen. Static except the mark's one-time glint.
export default function PhoneUnlock() {
  return (
    <div
      className="flex flex-col items-center text-center"
      style={{
        width: "min(340px,86vw)",
        background: "var(--ink)",
        borderRadius: 36,
        overflow: "hidden",
        padding: "44px 30px 34px",
      }}
    >
      <Mark variant="dark" size={72} className="pd-glint" />

      <div
        className="font-figtree"
        style={{
          fontWeight: 700,
          fontSize: 23,
          lineHeight: 1.28,
          letterSpacing: "-0.02em",
          color: "var(--ink-band)",
          marginTop: 26,
          textWrap: "balance",
        }}
      >
        Keep the dot. Pay once, it&rsquo;s yours.
      </div>

      <div className="flex items-baseline" style={{ gap: 8, marginTop: 22 }}>
        <div
          className="font-figtree"
          style={{ fontWeight: 800, fontSize: 42, letterSpacing: "-0.03em", color: "var(--ink-band)" }}
        >
          $9.99
        </div>
        <div className="font-petrona" style={{ fontSize: 18, color: "rgba(241,243,234,0.6)" }}>
          once
        </div>
      </div>

      <div
        className="flex items-center justify-center font-figtree font-bold shadow-unlock-cta"
        style={{
          width: "100%",
          height: 54,
          borderRadius: 18,
          background: "var(--chartreuse)",
          color: "#2a2e1a",
          fontSize: 17,
          marginTop: 24,
        }}
      >
        Unlock Peridot
      </div>

      <div
        className="font-petrona italic"
        style={{ fontSize: 14, color: "rgba(241,243,234,0.62)", marginTop: 18, lineHeight: 1.5 }}
      >
        Like a gem: owned, not rented.
      </div>
    </div>
  );
}
