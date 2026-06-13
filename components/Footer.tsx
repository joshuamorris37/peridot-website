import Link from "next/link";
import Wordmark from "./Wordmark";
import { ComingSoonCta } from "./Cta";

export default function Footer() {
  return (
    <footer className="border-t bg-ground" style={{ borderColor: "rgba(38,42,28,0.10)" }}>
      <div
        className="mx-auto"
        style={{ maxWidth: 1120, padding: "clamp(48px,7vw,80px) clamp(20px,5vw,40px)" }}
      >
        <div
          className="grid items-start"
          style={{
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))",
            gap: "clamp(32px,5vw,56px)",
          }}
        >
          {/* Brand */}
          <div>
            <Wordmark fontSize={24} />
            <p
              className="font-petrona text-ink-3"
              style={{ fontSize: 15, lineHeight: 1.6, margin: "16px 0 0", maxWidth: "36ch" }}
            >
              You hear from us only when you ask a question. There&rsquo;s no list to
              unsubscribe from.
            </p>
          </div>

          {/* Get the app */}
          <div>
            <div
              className="font-figtree font-semibold uppercase text-ink-3"
              style={{ fontSize: 12, letterSpacing: "0.14em" }}
            >
              Get the app
            </div>
            <div className="mt-4 flex flex-col items-start gap-3">
              <ComingSoonCta tone="light" height={46} />
              <span className="font-petrona text-ink-3" style={{ fontSize: 14, lineHeight: 1.5 }}>
                For iPhone &amp; Android.
              </span>
            </div>
          </div>

          {/* More */}
          <div>
            <div
              className="font-figtree font-semibold uppercase text-ink-3"
              style={{ fontSize: 12, letterSpacing: "0.14em" }}
            >
              More
            </div>
            <div className="mt-4 flex flex-col items-start gap-3">
              <Link
                href="/faq"
                className="inline-flex items-center font-figtree font-medium text-ink no-underline transition-colors hover:text-ink-2"
                style={{ minHeight: 44, minWidth: 44, padding: "9px 0", fontSize: 15 }}
              >
                FAQ
              </Link>
              <Link
                href="/privacy"
                className="inline-flex items-center font-figtree font-medium text-ink no-underline transition-colors hover:text-ink-2"
                style={{ minHeight: 44, minWidth: 44, padding: "9px 0", fontSize: 15 }}
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>

        <div
          className="flex flex-wrap items-center justify-between gap-3 border-t"
          style={{
            marginTop: "clamp(40px,6vw,64px)",
            paddingTop: 24,
            borderColor: "rgba(38,42,28,0.10)",
          }}
        >
          <span className="font-figtree text-ink-3" style={{ fontSize: 13 }}>
            © 2026 Peridot
          </span>
          <span className="font-petrona italic text-ink-3" style={{ fontSize: 14 }}>
            A period tracker. That&rsquo;s it.
          </span>
        </div>
      </div>
    </footer>
  );
}
