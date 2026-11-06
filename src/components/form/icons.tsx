/** Petites icônes gravées des champs (trait de 1,5 sur une grille de 20, bouts ronds, `currentColor`). */
const common = {
  width: 18,
  height: 18,
  viewBox: "0 0 20 20",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export function CalendarIcon() {
  return (
    <svg {...common}>
      <rect x="3" y="4.5" width="14" height="12.5" rx="2.5" />
      <path d="M3 8.5h14M7 2.75v3.5M13 2.75v3.5" />
    </svg>
  );
}

export function ClockIcon() {
  return (
    <svg {...common}>
      <circle cx="10" cy="10" r="7.25" />
      <path d="M10 6v4.25l2.75 1.75" />
    </svg>
  );
}

export function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg {...common} width={16} height={16}>
      <path d={direction === "left" ? "M12 4.5 6.5 10l5.5 5.5" : "M8 4.5l5.5 5.5L8 15.5"} />
    </svg>
  );
}
