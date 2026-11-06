import type { AspectKey, PlanetKey, SignKey } from "@/lib/astro/keys";
import { ASPECT_GLYPHS, type GlyphDrawing, PLANET_GLYPHS, POINT_GLYPHS, SIGN_GLYPHS } from "./glyphPaths";

export type GlyphName = SignKey | PlanetKey | "northNode" | Extract<AspectKey, keyof typeof ASPECT_GLYPHS>;

const DRAWINGS: Readonly<Record<GlyphName, GlyphDrawing>> = {
  ...SIGN_GLYPHS,
  ...PLANET_GLYPHS,
  ...POINT_GLYPHS,
  ...ASPECT_GLYPHS,
};

export function hasGlyph(name: string): name is GlyphName {
  return name in DRAWINGS;
}

/** Tracés d'un glyphe, à poser dans un SVG (grille 32 × 32) : la roue s'en sert directement. */
export function GlyphShape({ name, strokeWidth = 1.6 }: { name: GlyphName; strokeWidth?: number }) {
  const { paths, circles = [], dots = [] } = DRAWINGS[name];
  return (
    <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      {paths.map((d) => (
        <path key={d} d={d} />
      ))}
      {circles.map(([cx, cy, r]) => (
        <circle key={`${cx}-${cy}-${r}`} cx={cx} cy={cy} r={r} />
      ))}
      {dots.map(([cx, cy, r]) => (
        <circle key={`d${cx}-${cy}-${r}`} cx={cx} cy={cy} r={r} fill="currentColor" stroke="none" />
      ))}
    </g>
  );
}

interface GlyphProps {
  name: GlyphName;
  size?: number | string;
  /** Nom lu par les lecteurs d'écran ; sans lui, le glyphe est décoratif (le texte voisin dit ce qu'il montre). */
  label?: string;
  className?: string;
  strokeWidth?: number;
}

/** Glyphe astrologique en SVG, de la couleur du texte (`currentColor`). */
export function Glyph({ name, size = 24, label, className, strokeWidth }: GlyphProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      focusable="false"
      {...(label ? { role: "img", "aria-label": label } : { "aria-hidden": true })}
    >
      <GlyphShape name={name} strokeWidth={strokeWidth} />
    </svg>
  );
}
