import Reveal from "../Reveal";
import Mark from "../Mark";
import { ComingSoonCta } from "../Cta";

// Closer — ink ground, the giant wordmark and the third-touch line.
export default function Closer() {
  return (
    <section style={{ background: "var(--ink)", color: "var(--ink-band)" }}>
      <Reveal
        className="mx-auto flex flex-col items-center text-center"
        style={{ maxWidth: 1120, padding: "clamp(64px,9vw,128px) clamp(20px,5vw,40px)" }}
      >
        <span data-anim="pop" className="inline-flex" style={{ marginBottom: 26 }}>
          <Mark variant="dark" size={30} />
        </span>
        <div
          className="font-figtree font-medium"
          style={{ fontSize: "clamp(14px,1.7vw,17px)", color: "rgba(241,243,234,0.58)", letterSpacing: "-0.005em" }}
        >
          No ads. No subscriptions.
        </div>
        <div
          className="font-figtree font-bold text-closer"
          style={{ marginTop: "clamp(14px,2vw,22px)" }}
        >
          Peridot. Period.
        </div>
        <ComingSoonCta tone="dark" height={52} className="mt-[clamp(34px,4.6vw,46px)]" />
      </Reveal>
    </section>
  );
}
