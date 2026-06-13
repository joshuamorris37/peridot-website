import Reveal from "../Reveal";
import SteppedBar from "../mockups/SteppedBar";
import CycleReport from "../mockups/CycleReport";

// Honest predictions — panel ground, the stepped window + the cycle report.
export default function HonestPredictions() {
  return (
    <section className="border-b" style={{ background: "var(--panel)", borderColor: "rgba(38,42,28,0.10)" }}>
      <Reveal
        className="mx-auto"
        style={{ maxWidth: 1120, padding: "clamp(56px,7.5vw,100px) clamp(20px,5vw,40px)" }}
      >
        <div style={{ maxWidth: "60ch" }}>
          <div className="font-figtree font-semibold uppercase text-eyebrow text-ink-3">
            Honest predictions
          </div>
          <h2 className="font-figtree font-bold text-h2 text-ink" style={{ margin: "16px 0 0", textWrap: "balance" }}>
            A single most-likely day, and an honest window around it.
          </h2>
          <p className="font-petrona text-body text-ink-2" style={{ margin: "20px 0 0" }}>
            Peridot gives you one most-likely day plus a window that tightens as it learns you —
            never an oracle, never a fertility guarantee. The days it&rsquo;s sure of are solid. The
            days it&rsquo;s guessing are dashed, so the difference is never just a color.
          </p>
        </div>

        <div
          className="grid items-stretch"
          style={{
            marginTop: "clamp(32px,4.4vw,52px)",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))",
            gap: "clamp(26px,3.6vw,44px)",
          }}
        >
          <div
            className="flex flex-col bg-surface"
            style={{ border: "1px solid rgba(38,42,28,0.12)", borderRadius: 18, padding: "clamp(22px,3vw,32px)" }}
          >
            <div
              className="font-figtree font-semibold uppercase text-ink-3"
              style={{ fontSize: 12, letterSpacing: "0.13em", marginBottom: 16 }}
            >
              The prediction window
            </div>
            <SteppedBar />
            <p className="font-petrona text-ink-2" style={{ fontSize: "14.5px", lineHeight: 1.6, margin: "18px 0 0" }}>
              Three flat steps of one green, deepest at the most-likely day. Predicted days are
              dashed; logged days are solid. No blend ever connects a fact to a guess.
            </p>
          </div>

          <div
            className="bg-surface"
            style={{ border: "1px solid rgba(38,42,28,0.12)", borderRadius: 18, padding: "clamp(22px,3vw,32px)" }}
          >
            <div
              className="font-figtree font-semibold uppercase text-ink-3"
              style={{ fontSize: 12, letterSpacing: "0.13em", marginBottom: 6 }}
            >
              Your cycles, plainly
            </div>
            <CycleReport />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
