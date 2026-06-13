// The stepped prediction-window legend: flat tints, deepest at the most-likely
// day, mirrored outward, wrapped in a single dashed outline. Never a ramp.

const STEPS = [
  { bg: "var(--step-possible)", fg: "var(--olive)", label: "possible", w: 600, delay: 0.16 },
  { bg: "var(--step-likely)", fg: "var(--ink-soft)", label: "likely", w: 600, delay: 0.08 },
  { bg: "var(--step-most)", fg: "var(--ink)", label: "most likely", w: 700, delay: 0 },
  { bg: "var(--step-likely)", fg: "var(--ink-soft)", label: "likely", w: 600, delay: 0.08 },
  { bg: "var(--step-possible)", fg: "var(--olive)", label: "possible", w: 600, delay: 0.16 },
];

export default function SteppedBar() {
  return (
    <div
      className="flex"
      style={{ height: 56, borderRadius: 12, overflow: "hidden", border: "1.5px dashed var(--pred-dash)" }}
    >
      {STEPS.map((s, i) => (
        <div
          key={i}
          data-anim="dawn"
          data-delay={s.delay}
          className="flex flex-1 items-center justify-center"
          style={{
            background: s.bg,
            borderRight: i < 4 ? "1px solid rgba(255,255,255,0.55)" : "none",
          }}
        >
          <span
            className="text-center font-figtree"
            style={{ fontWeight: s.w >= 700 ? 700 : 600, fontSize: 11, color: s.fg, lineHeight: 1.2 }}
          >
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}
