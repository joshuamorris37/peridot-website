import Reveal from "../Reveal";
import PhoneUnlock from "../mockups/PhoneUnlock";

// Value prop 02 · Ownership — panel ground, with the dark "Unlock" mockup.
export default function Ownership() {
  return (
    <section className="border-b" style={{ background: "var(--panel)", borderColor: "rgba(38,42,28,0.10)" }}>
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
            02 · Ownership
          </div>
          <h2 className="font-figtree font-bold text-h2 text-ink" style={{ margin: "16px 0 0", textWrap: "balance" }}>
            Pay once. Own it forever.
          </h2>
          <p className="font-petrona text-body text-ink-2" style={{ margin: "20px 0 0", maxWidth: "44ch" }}>
            One payment, then it&rsquo;s yours. No recurring revenue means no reason to manufacture
            engagement — nothing to nag you back, nothing to upsell. Like the calendar on the wall:
            bought once, not rented.
          </p>
          <p className="font-caveat text-caveat-accent text-olive" style={{ fontWeight: 600, margin: "22px 0 0" }}>
            A gem is something you own, not something you rent.
          </p>
        </div>
        <div className="flex justify-center">
          <PhoneUnlock />
        </div>
      </Reveal>
    </section>
  );
}
