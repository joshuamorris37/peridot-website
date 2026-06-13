import Reveal from "../Reveal";
import InkGrid from "../mockups/InkGrid";

// The category's problem — ink ground, a hard cut from the white hero.
export default function CategoryProblem() {
  return (
    <section style={{ background: "var(--ink)", color: "var(--ink-band)" }}>
      <Reveal
        className="mx-auto grid items-center"
        style={{
          maxWidth: 1120,
          padding: "clamp(56px,7.5vw,100px) clamp(20px,5vw,40px)",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,330px),1fr))",
          gap: "clamp(36px,5vw,72px)",
        }}
      >
        <div>
          <div
            className="font-figtree font-semibold uppercase text-eyebrow"
            style={{ color: "var(--ink-band-eyebrow)" }}
          >
            What happened to the calendar
          </div>
          <h2
            className="font-figtree font-semibold text-h2-dark"
            style={{ margin: "18px 0 0", maxWidth: "18ch", textWrap: "balance" }}
          >
            Period apps grew subscriptions — then grew quizzes, articles, and streaks to pay for
            them.
          </h2>
          <p
            className="font-petrona text-body"
            style={{ color: "rgba(241,243,234,0.76)", maxWidth: "50ch", margin: "22px 0 0" }}
          >
            All of it wrapped around what used to be a dot on a calendar — and all of it sitting on
            someone else&rsquo;s server, holding the most sensitive health data a person has. The
            tool stopped working for the person using it.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <InkGrid />
        </div>
      </Reveal>
    </section>
  );
}
