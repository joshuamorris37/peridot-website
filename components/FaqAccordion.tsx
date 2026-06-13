"use client";

import { useState } from "react";
import { FAQS } from "@/lib/faq";

// Single-open accordion. First item open on load. Keyboard-operable (native
// <button>), the + rotates to ×, and the body height animates open.
export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div style={{ marginTop: "clamp(30px,4.4vw,46px)", borderTop: "1px solid rgba(38,42,28,0.12)" }}>
      {FAQS.map((item, i) => {
        const isOpen = open === i;
        const panelId = `faq-panel-${i}`;
        const btnId = `faq-button-${i}`;
        return (
          <div key={i} style={{ borderBottom: "1px solid rgba(38,42,28,0.12)" }}>
            <button
              id={btnId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-start justify-between text-left transition-colors hover:bg-ink/[0.02]"
              style={{ background: "none", border: "none", cursor: "pointer", gap: 24, padding: "clamp(20px,3vw,26px) 12px" }}
            >
              <span
                className="font-figtree font-semibold text-ink"
                style={{ fontSize: "clamp(17px,2.3vw,20px)", letterSpacing: "-0.01em", lineHeight: 1.3 }}
              >
                {item.q}
              </span>
              <span
                aria-hidden="true"
                className="font-figtree text-olive"
                style={{
                  fontWeight: 300,
                  fontSize: 27,
                  lineHeight: 0.8,
                  flexShrink: 0,
                  transition: "transform 0.24s cubic-bezier(0.2,0,0.1,1)",
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                }}
              >
                +
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              style={{
                display: "grid",
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                transition: "grid-template-rows 0.28s cubic-bezier(0.2,0,0.1,1)",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <p
                  className="font-petrona"
                  style={{
                    fontSize: "clamp(15.5px,2vw,18px)",
                    lineHeight: 1.62,
                    color: "var(--ink-soft)",
                    margin: 0,
                    padding: "0 0 clamp(20px,2.8vw,26px)",
                    maxWidth: "62ch",
                  }}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
