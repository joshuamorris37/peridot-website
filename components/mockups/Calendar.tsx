// Month calendar for the in-page "Home" mockup. Renders real prediction state:
//   logged days  → solid olive pill spans (joined across runs)
//   predicted    → flat stepped tints + dashed outline (never color-only)
//   today        → apricot ring (only when not a logged day)

import { dayState } from "@/lib/prediction";
import { MONTHS } from "@/lib/constants";

const TINT = ["", "var(--pred-1)", "var(--pred-2)", "var(--pred-3)"] as const;

const navBtn: React.CSSProperties = {
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: "13px 14px",
  margin: "-9px 0",
  minWidth: 44,
  color: "var(--ink-3)",
  fontSize: 18,
  lineHeight: 1,
};

export default function Calendar({
  viewY,
  viewM,
  cellH = 32,
  onPrev,
  onNext,
}: {
  viewY: number;
  viewM: number;
  cellH?: number;
  onPrev: () => void;
  onNext: () => void;
}) {
  const first = new Date(viewY, viewM, 1);
  const offset = (first.getDay() + 6) % 7; // Monday-first
  const dim = new Date(viewY, viewM + 1, 0).getDate();

  const cells: (Date | null)[] = [];
  for (let i = 0; i < offset; i++) cells.push(null);
  for (let day = 1; day <= dim; day++) cells.push(new Date(viewY, viewM, day));
  while (cells.length % 7) cells.push(null);
  const states = cells.map((dt) => (dt ? dayState(dt) : null));

  const dows = ["M", "T", "W", "T", "F", "S", "S"];

  return (
    <div>
      {/* header / month nav */}
      <div
        className="flex items-center justify-between"
        style={{ padding: "2px 4px 12px" }}
      >
        <button type="button" onClick={onPrev} aria-label="Previous month" style={navBtn}>
          ‹
        </button>
        <div
          className="font-figtree font-semibold text-ink"
          style={{ fontSize: 15 }}
          aria-live="polite"
        >
          {MONTHS[viewM]} {viewY}
        </div>
        <button type="button" onClick={onNext} aria-label="Next month" style={navBtn}>
          ›
        </button>
      </div>

      {/* day-of-week row */}
      <div className="grid" style={{ gridTemplateColumns: "repeat(7,1fr)", marginBottom: 4 }}>
        {dows.map((dn, i) => (
          <div
            key={i}
            className="text-center font-figtree font-semibold"
            style={{ fontSize: "10.5px", color: "#b7b9ab", padding: "2px 0" }}
          >
            {dn}
          </div>
        ))}
      </div>

      {/* day grid */}
      <div className="grid" style={{ gridTemplateColumns: "repeat(7,1fr)", rowGap: 6, columnGap: 0 }}>
        {cells.map((dt, idx) => {
          if (!dt) return <div key={idx} style={{ height: cellH }} />;
          const st = states[idx]!;
          const col = idx % 7;
          const prev = col > 0 ? states[idx - 1] : null;
          const nextc = col < 6 ? states[idx + 1] : null;

          let bar = null;
          if (st.logged) {
            const pl = prev && prev.logged;
            const nx = nextc && nextc.logged;
            bar = (
              <span
                style={{
                  position: "absolute",
                  top: 2,
                  bottom: 2,
                  left: 0,
                  right: 0,
                  background: "var(--olive)",
                  borderRadius: `${pl ? 0 : 16}px ${nx ? 0 : 16}px ${nx ? 0 : 16}px ${pl ? 0 : 16}px`,
                }}
              />
            );
          } else if (st.step > 0) {
            const ps = prev && prev.step > 0;
            const ns = nextc && nextc.step > 0;
            const delay = Math.min(8, Math.abs(st.dStart)) * 0.05;
            bar = (
              <span
                data-anim="dawn"
                data-delay={delay}
                style={{
                  position: "absolute",
                  top: 3,
                  bottom: 3,
                  left: 2,
                  right: 2,
                  background: TINT[st.step],
                  border: "1.5px dashed var(--pred-dash)",
                  borderRadius: `${ps ? 0 : 14}px ${ns ? 0 : 14}px ${ns ? 0 : 14}px ${ps ? 0 : 14}px`,
                }}
              />
            );
          }

          const ring =
            st.today && !st.logged ? (
              <span
                data-anim="pop"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  width: cellH - 6,
                  height: cellH - 6,
                  borderRadius: "50%",
                  border: "2px solid var(--apricot)",
                  zIndex: 1,
                }}
              />
            ) : null;

          return (
            <div
              key={idx}
              className="relative flex items-center justify-center"
              style={{ height: cellH }}
            >
              {bar}
              {ring}
              <span
                className="relative font-figtree"
                style={{
                  zIndex: 2,
                  fontWeight: st.logged ? 600 : 500,
                  fontSize: 13,
                  color: st.logged ? "#fff" : "var(--ink)",
                }}
              >
                {dt.getDate()}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
