import Reveal from "../Reveal";
import Mark from "../Mark";

const ITEMS = [
  { text: "Your cycle data is stored on your phone, with a backup in your own private cloud that we can't read.", delay: 0 },
  { text: "There is no Peridot account and no Peridot database. We never see what you log.", delay: 0.07 },
  { text: "No analytics SDK, no trackers, no ad networks. Nothing phones home.", delay: 0.14 },
  { text: "Erase everything in Settings, any time. It clears your phone and your private backup — and we couldn't recover it if you asked.", delay: 0.21 },
];

// Privacy as plumbing — the architecture is the argument, with the App Store
// "Data Not Collected" card.
export default function PrivacyPlumbing() {
  return (
    <section className="border-b" style={{ borderColor: "rgba(38,42,28,0.10)" }}>
      <Reveal
        className="mx-auto grid items-start"
        style={{
          maxWidth: 1120,
          padding: "clamp(56px,7.5vw,100px) clamp(20px,5vw,40px)",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))",
          gap: "clamp(34px,5vw,68px)",
        }}
      >
        <div>
          <div className="font-figtree font-semibold uppercase text-eyebrow text-ink-3">
            How it&rsquo;s built
          </div>
          <h2 className="font-figtree font-bold text-h2 text-ink" style={{ margin: "16px 0 0", textWrap: "balance" }}>
            The architecture is the argument.
          </h2>
          <div style={{ marginTop: 22 }} className="flex flex-col">
            {ITEMS.map((it, i) => (
              <div
                key={i}
                data-anim="dawn"
                data-delay={it.delay}
                className="flex"
                style={{
                  gap: 16,
                  padding: "16px 0",
                  borderTop: "1px solid rgba(38,42,28,0.10)",
                  borderBottom: i === ITEMS.length - 1 ? "1px solid rgba(38,42,28,0.10)" : undefined,
                }}
              >
                <span className="font-figtree font-bold text-matcha" style={{ fontSize: 15, minWidth: 22 }}>
                  —
                </span>
                <span className="font-petrona" style={{ fontSize: "16.5px", lineHeight: 1.5, color: "var(--ink-soft)" }}>
                  {it.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col" style={{ gap: 20 }}>
          <div style={{ border: "1px solid rgba(38,42,28,0.14)", borderRadius: 16, overflow: "hidden" }}>
            <div
              className="flex items-center"
              style={{ padding: "15px 22px", borderBottom: "1px solid rgba(38,42,28,0.10)", gap: 10 }}
            >
              <span data-anim="pop" className="inline-flex">
                <Mark variant="light" size={18} />
              </span>
              <span
                className="font-figtree font-semibold text-ink-3"
                style={{ fontSize: 13, letterSpacing: "0.04em" }}
              >
                App Store · App Privacy
              </span>
            </div>
            <div style={{ padding: "30px 22px" }}>
              <div
                className="font-figtree font-bold text-ink"
                style={{ fontSize: "clamp(24px,3.2vw,32px)", letterSpacing: "-0.025em" }}
              >
                Data Not Collected
              </div>
              <div className="font-petrona text-ink-2" style={{ fontSize: 15, lineHeight: 1.55, marginTop: 10 }}>
                The developer does not collect any data from this app. Apple&rsquo;s own label —
                rendered by Apple, not by us.
              </div>
            </div>
          </div>
          <p className="font-petrona text-ink-3" style={{ fontSize: 15, lineHeight: 1.6, margin: 0, maxWidth: "42ch" }}>
            Privacy here isn&rsquo;t a promise we ask you to trust. It&rsquo;s a consequence of how
            the app is built.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
