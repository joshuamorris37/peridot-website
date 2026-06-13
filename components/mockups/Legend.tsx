// "What the colors mean" — Logged / Most likely / Window (dashed).

function Chip({ bg, dashed }: { bg: string; dashed?: boolean }) {
  return (
    <span
      style={{
        width: 18,
        height: 12,
        borderRadius: 5,
        background: bg,
        display: "block",
        flexShrink: 0,
        border: dashed ? "1.5px dashed var(--pred-dash)" : undefined,
      }}
    />
  );
}

function Item({ chip, label }: { chip: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center" style={{ gap: 7 }}>
      {chip}
      <span className="font-figtree font-semibold" style={{ fontSize: "11.5px", color: "var(--ink-2)" }}>
        {label}
      </span>
    </div>
  );
}

export default function Legend() {
  return (
    <div
      className="flex flex-wrap justify-center"
      style={{ marginTop: 16, gap: "9px 16px" }}
    >
      <Item chip={<Chip bg="var(--olive)" />} label="Logged" />
      <Item chip={<Chip bg="var(--matcha)" />} label="Most likely" />
      <Item chip={<Chip bg="var(--step-possible)" dashed />} label="Window" />
    </div>
  );
}
