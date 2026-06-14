import { HeroMark } from "../Mark";
import { ComingSoonCta, ComingSoonNote } from "../Cta";
import HeroGrid from "../mockups/HeroGrid";

// The signature moment. The ring draws on, the dot drops in, then the copy
// rises — gated to once per session by an inline script in the layout that
// toggles `html.pd-animate` before first paint (so there's no flash, and it
// never replays on client-side navigation back home).
export default function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b"
      style={{ borderColor: "rgba(38,42,28,0.10)" }}
    >
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <HeroGrid />
      </div>

      <div
        className="relative mx-auto flex flex-col items-center text-center"
        style={{
          maxWidth: 1120,
          padding: "clamp(56px,9vw,112px) clamp(20px,5vw,40px) clamp(60px,9vw,116px)",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            width: "clamp(58px,7.4vw,74px)",
            height: "clamp(58px,7.4vw,74px)",
            marginBottom: "clamp(22px,3vw,32px)",
          }}
        >
          <HeroMark />
        </div>

        <h1
          className="pd-hero-1 m-0 font-figtree font-bold text-hero-h1 text-ink"
          style={{ textWrap: "balance", maxWidth: "13ch" }}
        >
          Just a period tracker. Pay once. Yours forever.
        </h1>

        <p
          className="pd-hero-2 font-petrona text-hero-sub text-ink-2"
          style={{ maxWidth: "46ch", margin: "clamp(20px,2.6vw,28px) auto 0" }}
        >
          One job, done beautifully. Pay once — no subscription, no nags. Your data stays on
          your phone.
        </p>

        <div
          className="pd-hero-3 flex flex-col items-center"
          style={{ gap: 14, marginTop: "clamp(28px,3.4vw,40px)" }}
        >
          <ComingSoonCta tone="light" height={52} />
          <ComingSoonNote />
        </div>
      </div>
    </section>
  );
}
