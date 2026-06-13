import Reveal from "../Reveal";
import Mark from "../Mark";

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
          No ads. No subscriptions. No snooping.
        </div>
        <div
          className="font-figtree font-bold text-closer"
          style={{ marginTop: "clamp(14px,2vw,22px)" }}
        >
          Peridot. Period.
        </div>
        <a
          href="#"
          className="inline-flex items-center bg-chartreuse font-figtree font-bold text-ink no-underline shadow-closer-cta transition-colors hover:bg-chartreuse-hover"
          style={{
            height: 52,
            padding: "0 30px",
            borderRadius: 26,
            fontSize: 16,
            letterSpacing: "-0.01em",
            marginTop: "clamp(34px,4.6vw,46px)",
          }}
        >
          Get Peridot — $9.99 once
        </a>
      </Reveal>
    </section>
  );
}
