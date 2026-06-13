import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "The honest answers",
  description:
    "It's a period tracker, your data stays on your phone, and you pay once. The honest answers to the common questions about Peridot.",
};

export default function FaqPage() {
  return (
    <main
      className="mx-auto"
      style={{ maxWidth: 780, padding: "clamp(48px,7vw,88px) clamp(20px,5vw,40px) clamp(40px,6vw,72px)" }}
    >
      <Reveal>
        <div className="font-figtree font-semibold uppercase text-eyebrow text-ink-3">Questions</div>
        <h1 className="font-figtree font-bold text-view-h1 text-ink" style={{ margin: "14px 0 0" }}>
          The honest answers.
        </h1>
        <p
          className="font-petrona text-ink-2"
          style={{ fontSize: "clamp(16px,2vw,19px)", lineHeight: 1.55, margin: "16px 0 0", maxWidth: "50ch" }}
        >
          Short version of everything below: it&rsquo;s a period tracker, your data stays on your
          phone, and you pay once.
        </p>
      </Reveal>

      <FaqAccordion />

      <div className="flex flex-wrap items-center" style={{ marginTop: "clamp(40px,6vw,64px)", gap: 18 }}>
        <a
          href="#"
          className="inline-flex items-center rounded-pill bg-olive font-figtree font-bold text-ground no-underline shadow-btn transition-colors hover:bg-olive-deep"
          style={{ height: 50, padding: "0 28px", fontSize: "15.5px" }}
        >
          Get Peridot — $9.99 once
        </a>
        <Link
          href="/privacy"
          className="inline-flex items-center font-figtree font-semibold text-ink underline decoration-ink/30 underline-offset-4 transition-[text-decoration-color] hover:decoration-ink"
          style={{ minHeight: 44, padding: "6px 4px", fontSize: 15 }}
        >
          Read the privacy page
        </Link>
      </div>
    </main>
  );
}
