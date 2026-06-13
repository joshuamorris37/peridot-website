import Reveal from "../Reveal";

const ROWS = [
  { label: "No account", text: "Open it and it works. Nothing to create.", delay: 0 },
  { label: "No server", text: "Your data never reaches us. We don't have it.", delay: 0.08 },
  { label: "No selling", text: "No third parties. Nothing to share, ever.", delay: 0.16 },
];

// Value prop 01 · Privacy.
export default function ValuePrivacy() {
  return (
    <section className="border-b" style={{ borderColor: "rgba(38,42,28,0.10)" }}>
      <Reveal
        className="mx-auto grid items-center"
        style={{
          maxWidth: 1120,
          padding: "clamp(56px,7.5vw,100px) clamp(20px,5vw,40px)",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))",
          gap: "clamp(34px,5vw,68px)",
        }}
      >
        <div>
          <div className="font-figtree font-semibold uppercase text-eyebrow text-ink-3">
            01 · Privacy
          </div>
          <h2 className="font-figtree font-bold text-h2 text-ink" style={{ margin: "16px 0 0", textWrap: "balance" }}>
            Your cycle is nobody&rsquo;s business.
          </h2>
          <p className="font-petrona text-body text-ink-2" style={{ margin: "20px 0 0", maxWidth: "44ch" }}>
            Everything lives on the phone. No account, no email, nothing to breach, nothing to
            subpoena, nothing to sell. There&rsquo;s no server behind Peridot — so there&rsquo;s
            nothing to hand over, because there was never anything to hand over.
          </p>
        </div>
        <div style={{ border: "1px solid rgba(38,42,28,0.12)", borderRadius: 18, overflow: "hidden" }}>
          {ROWS.map((r, i) => (
            <div
              key={r.label}
              data-anim="dawn"
              data-delay={r.delay}
              className="flex items-start"
              style={{
                gap: 14,
                padding: "22px clamp(20px,3vw,30px)",
                borderTop: i > 0 ? "1px solid rgba(38,42,28,0.08)" : "none",
              }}
            >
              <span className="font-figtree font-bold text-ink" style={{ fontSize: 15, minWidth: 86 }}>
                {r.label}
              </span>
              <span className="font-petrona text-ink-2" style={{ fontSize: "15.5px", lineHeight: 1.5 }}>
                {r.text}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
