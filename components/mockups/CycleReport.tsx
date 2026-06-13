// "Your cycles, plainly" — a "32 days, give or take two" headline over a
// lollipop list of recent cycle lengths.

import { predict, buildReportRows } from "@/lib/prediction";
import { MON_ABBR } from "@/lib/constants";

export default function CycleReport() {
  const rows = buildReportRows();
  const lens = rows.map((r) => r.len);
  const mn = Math.min(...lens) - 2;
  const mx = Math.max(...lens) + 2;
  const typical = predict().typical;

  return (
    <div>
      <div style={{ marginTop: 8, marginBottom: 4 }}>
        <div className="flex items-baseline" style={{ gap: 9 }}>
          <span
            className="font-figtree text-ink"
            style={{ fontWeight: 800, fontSize: "clamp(36px,5vw,48px)", letterSpacing: "-0.04em", lineHeight: 0.9 }}
          >
            {typical}
          </span>
          <span className="font-petrona text-ink-2" style={{ fontSize: 15 }}>
            days, give or take two
          </span>
        </div>
      </div>

      <div style={{ marginTop: 14 }}>
        {rows.slice(0, 7).map((r, i) => {
          const pct = (r.len - mn) / (mx - mn);
          return (
            <div
              key={i}
              className="flex items-center"
              style={{
                gap: 14,
                padding: "11px 0",
                borderTop: i > 0 ? "1px solid rgba(38,42,28,0.08)" : "none",
              }}
            >
              <div
                className="font-figtree font-semibold text-ink-3"
                style={{ width: 30, fontSize: "12.5px" }}
              >
                {MON_ABBR[r.date.getMonth()]}
              </div>
              <div className="relative flex items-center" style={{ flex: 1, height: 12 }}>
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    height: 2,
                    borderRadius: 1,
                    background: "rgba(38,42,28,0.08)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    height: 2,
                    borderRadius: 1,
                    background: "var(--olive)",
                    width: `${pct * 100}%`,
                  }}
                />
                <span
                  data-anim="pop"
                  data-delay={i * 0.05 + 0.2}
                  style={{
                    position: "absolute",
                    left: `calc(${pct * 100}% - 6px)`,
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "var(--olive)",
                  }}
                />
              </div>
              <div
                className="text-right font-figtree font-semibold text-ink"
                style={{ width: 42, fontSize: 13 }}
              >
                {r.len}d
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
