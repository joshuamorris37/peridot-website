import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Mark from "@/components/Mark";

export const metadata: Metadata = {
  title: "Peridot has no server",
  description:
    "That's the whole policy, really. No account, no analytics, your data on your phone, and erase everything any time.",
};

const BLOCKS = [
  {
    h: "No account.",
    p: "No sign-up, no email, no password. There's nothing to create, and nothing for us to lose.",
  },
  {
    h: "No analytics.",
    p: "No trackers, no SDKs, no ad networks. The app doesn't report what you do, because nothing is listening.",
  },
  {
    h: "Your data, your phone.",
    p: "Cycle data is stored on your device, with a backup in your own private cloud that we can't read.",
  },
  {
    h: "Erase everything, any time.",
    p: "One tap in Settings clears your phone and your private backup. We couldn't recover it if you asked — we never had it.",
  },
];

export default function PrivacyPage() {
  return (
    <main
      className="mx-auto"
      style={{ maxWidth: 700, padding: "clamp(48px,7vw,88px) clamp(20px,5vw,40px) clamp(40px,6vw,72px)" }}
    >
      <Reveal>
        <div className="font-figtree font-semibold uppercase text-eyebrow text-ink-3">Privacy</div>
        <h1 className="font-figtree font-bold text-view-h1 text-ink" style={{ margin: "14px 0 0" }}>
          Peridot has no server.
        </h1>
        <p
          className="font-petrona"
          style={{ fontSize: "clamp(17px,2.2vw,21px)", lineHeight: 1.6, color: "var(--ink-soft)", margin: "22px 0 0" }}
        >
          That&rsquo;s the whole policy, really. The rest is just what it means. Your privacy is
          just that — yours.
        </p>
      </Reveal>

      <div className="flex flex-col" style={{ marginTop: "clamp(30px,4.6vw,44px)" }}>
        {BLOCKS.map((b, i) => (
          <div
            key={i}
            style={{
              padding: "22px 0",
              borderTop: "1px solid rgba(38,42,28,0.12)",
              borderBottom: i === BLOCKS.length - 1 ? "1px solid rgba(38,42,28,0.12)" : undefined,
            }}
          >
            <div className="font-figtree font-bold text-ink" style={{ fontSize: 18 }}>
              {b.h}
            </div>
            <p className="font-petrona text-ink-2" style={{ fontSize: 17, lineHeight: 1.6, margin: "8px 0 0" }}>
              {b.p}
            </p>
          </div>
        ))}
      </div>

      <div
        className="flex items-start"
        style={{
          marginTop: "clamp(30px,4.6vw,44px)",
          border: "1px solid rgba(38,42,28,0.14)",
          borderRadius: 16,
          padding: "28px 24px",
          gap: 16,
        }}
      >
        <span className="inline-flex flex-shrink-0" style={{ marginTop: 4 }}>
          <Mark variant="light" size={22} />
        </span>
        <div>
          <div
            className="font-figtree font-bold text-ink"
            style={{ fontSize: "clamp(22px,3vw,28px)", letterSpacing: "-0.02em" }}
          >
            Data Not Collected
          </div>
          <div className="font-petrona text-ink-2" style={{ fontSize: 15, lineHeight: 1.55, marginTop: 8 }}>
            Our App Store privacy label, in Apple&rsquo;s own words. The proudest line we don&rsquo;t
            get to write ourselves.
          </div>
        </div>
      </div>
    </main>
  );
}
