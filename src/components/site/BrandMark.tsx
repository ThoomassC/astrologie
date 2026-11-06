/** Marque : une petite roue gravée (cercle des signes, douze rayons, astre au centre), décorative. */
export function BrandMark({ size = 30 }: { size?: number }) {
  const rays = Array.from({ length: 12 }, (_, i) => {
    const a = (i * Math.PI) / 6;
    const x1 = 16 + Math.cos(a) * 9.2;
    const y1 = 16 + Math.sin(a) * 9.2;
    const x2 = 16 + Math.cos(a) * 13.6;
    const y2 = 16 + Math.sin(a) * 13.6;
    return `M${x1.toFixed(2)} ${y1.toFixed(2)}L${x2.toFixed(2)} ${y2.toFixed(2)}`;
  }).join("");
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    >
      <circle cx="16" cy="16" r="13.6" />
      <circle cx="16" cy="16" r="9.2" />
      <path d={rays} />
      <circle cx="16" cy="16" r="3.2" />
      <circle cx="16" cy="16" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}
