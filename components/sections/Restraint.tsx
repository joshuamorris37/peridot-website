import Reveal from "../Reveal";
import PhoneHome from "../mockups/PhoneHome";

// Value prop 03 · Restraint — white ground, with the live "Home" mockup.
export default function Restraint() {
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
            03 · Restraint
          </div>
          <h2 className="font-figtree font-bold text-h2 text-ink" style={{ margin: "16px 0 0", textWrap: "balance" }}>
            This is the whole app.
          </h2>
          <p className="font-petrona text-body text-ink-2" style={{ margin: "20px 0 0", maxWidth: "44ch" }}>
            A calendar, a countdown, and a button to log. Logged days are solid; the days ahead are
            an estimate. No feed, no quizzes, no streaks to keep. You consult it for a few seconds,
            and then it leaves you alone.
          </p>
          <p
            className="font-petrona italic text-ink-3"
            style={{ fontSize: 15, lineHeight: 1.55, margin: "18px 0 0", maxWidth: "42ch" }}
          >
            Scroll the months — the dot is the whole idea.
          </p>
        </div>
        <div className="flex justify-center">
          <PhoneHome />
        </div>
      </Reveal>
    </section>
  );
}
