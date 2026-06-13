// Faint dot-grid behind the hero. Decorative, clipped by the section's
// overflow:hidden so it never creates a scrollbar.
export default function HeroGrid() {
  const cols = 15;
  const rows = 9;
  const cells = Array.from({ length: cols * rows });
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols},clamp(40px,6.6vw,72px))`,
        gridAutoRows: "clamp(40px,6.6vw,72px)",
      }}
    >
      {cells.map((_, i) => (
        <span key={i} className="flex items-center justify-center">
          <span
            style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(38,42,28,0.07)" }}
          />
        </span>
      ))}
    </div>
  );
}
