"use client";

import { useState } from "react";
import { predict, diff, TODAY } from "@/lib/prediction";
import Calendar from "./Calendar";
import Legend from "./Legend";

// The live "Home" screen: countdown, an interactive month calendar, the legend,
// and a Log-period button. The calendar's ‹ › nav shifts the viewed month.
export default function PhoneHome() {
  const [monthOffset, setMonthOffset] = useState(0);
  const { next } = predict();
  const countdown = diff(TODAY, next);
  const view = new Date(TODAY.getFullYear(), TODAY.getMonth() + monthOffset, 1);

  return (
    <div
      style={{
        width: "min(340px,86vw)",
        background: "var(--surface)",
        border: "1px solid rgba(38,42,28,0.14)",
        borderRadius: 36,
        overflow: "hidden",
      }}
    >
      <div style={{ padding: "30px 26px 26px" }}>
        <div
          className="font-figtree font-semibold text-ink-3"
          style={{ fontSize: 11, letterSpacing: "0.13em" }}
        >
          NEXT PERIOD IN
        </div>
        <div className="flex items-baseline" style={{ gap: 9, marginTop: 4 }}>
          <div
            className="font-figtree text-ink"
            style={{ fontWeight: 800, fontSize: 64, lineHeight: 0.9, letterSpacing: "-0.05em" }}
          >
            {countdown}
          </div>
          <div className="font-petrona text-ink-2" style={{ fontSize: 18 }}>
            days
          </div>
        </div>

        <div
          style={{ marginTop: 22, background: "var(--panel)", borderRadius: 18, padding: "16px 16px 8px" }}
        >
          <Calendar
            viewY={view.getFullYear()}
            viewM={view.getMonth()}
            cellH={32}
            onPrev={() => setMonthOffset((m) => m - 1)}
            onNext={() => setMonthOffset((m) => m + 1)}
          />
        </div>

        <Legend />

        <div style={{ marginTop: 20, textAlign: "center" }}>
          <button
            type="button"
            className="inline-flex items-center justify-center font-figtree font-bold shadow-log-cta"
            style={{
              height: 50,
              padding: "0 38px",
              borderRadius: 25,
              background: "var(--chartreuse)",
              color: "var(--ink)",
              fontSize: 16,
              border: "none",
              cursor: "pointer",
            }}
          >
            Log period
          </button>
        </div>
      </div>
    </div>
  );
}
