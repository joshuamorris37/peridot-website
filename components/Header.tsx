import Link from "next/link";
import Wordmark from "./Wordmark";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-[100] border-b"
      style={{
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderColor: "rgba(38,42,28,0.10)",
      }}
    >
      <div
        className="mx-auto flex items-center justify-between"
        style={{ maxWidth: 1120, height: 68, padding: "0 clamp(20px,5vw,40px)" }}
      >
        <Link
          href="/"
          aria-label="Peridot home"
          className="inline-flex items-baseline transition-opacity hover:opacity-60"
          style={{ padding: "10px 6px", margin: "0 -6px" }}
        >
          <Wordmark fontSize={25} glint />
        </Link>
        <a
          href="#"
          className="inline-flex items-center rounded-pill bg-olive font-figtree font-bold text-ground no-underline shadow-btn-sm transition-colors hover:bg-olive-deep"
          style={{ height: 44, padding: "0 22px", fontSize: "14.5px", letterSpacing: "-0.01em" }}
        >
          Get Peridot — $9.99 once
        </a>
      </div>
    </header>
  );
}
