import Mark from "../Mark";

// The "faint month grid + one dot" motif on the dark category section: a grid of
// dim dots with a single Halo mark (the dark cut) set into it.
export default function InkGrid() {
  const cols = 7;
  const rows = 5;
  const markIdx = 2 * cols + 4; // row 3, col 5
  const cells = Array.from({ length: cols * rows });
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols},clamp(30px,4.4vw,46px))`,
        gridAutoRows: "clamp(30px,4.4vw,46px)",
      }}
    >
      {cells.map((_, i) =>
        i === markIdx ? (
          <span key={i} data-anim="pop" className="flex items-center justify-center">
            <Mark variant="dark" size="clamp(22px,3vw,30px)" />
          </span>
        ) : (
          <span key={i} className="flex items-center justify-center">
            <span
              style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(241,243,234,0.16)" }}
            />
          </span>
        )
      )}
    </div>
  );
}
