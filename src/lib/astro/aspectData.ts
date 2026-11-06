import type { AspectFamily, AspectKey, AspectNature } from "./keys";

export interface AspectData {
  readonly key: AspectKey;
  /** Angle exact entre les deux points, en degrés. */
  readonly angle: number;
  readonly family: AspectFamily;
  readonly nature: AspectNature;
  /** Orbe : écart toléré autour de l'angle exact, en degrés. */
  readonly orb: number;
  /** Orbe ajouté quand le Soleil ou la Lune fait partie de l'aspect. */
  readonly luminaryBonus: number;
}

/**
 * Orbes usuels (il n'existe pas de norme : chaque école a les siens). Majeurs : 8° pour la conjonction et
 * l'opposition, 7° pour le trigone et le carré, 5° pour le sextile, plus 2° ou 1° si un luminaire y prend part.
 */
export const ASPECTS: Readonly<Record<AspectKey, AspectData>> = {
  conjunction: { key: "conjunction", angle: 0, family: "major", nature: "neutral", orb: 8, luminaryBonus: 2 },
  sextile: { key: "sextile", angle: 60, family: "major", nature: "harmonious", orb: 5, luminaryBonus: 1 },
  square: { key: "square", angle: 90, family: "major", nature: "tense", orb: 7, luminaryBonus: 1 },
  trine: { key: "trine", angle: 120, family: "major", nature: "harmonious", orb: 7, luminaryBonus: 1 },
  opposition: { key: "opposition", angle: 180, family: "major", nature: "tense", orb: 8, luminaryBonus: 2 },
  semiSextile: { key: "semiSextile", angle: 30, family: "minor", nature: "harmonious", orb: 2, luminaryBonus: 0 },
  semiSquare: { key: "semiSquare", angle: 45, family: "minor", nature: "tense", orb: 2, luminaryBonus: 0 },
  quintile: { key: "quintile", angle: 72, family: "minor", nature: "harmonious", orb: 2, luminaryBonus: 0 },
  sesquiquadrate: { key: "sesquiquadrate", angle: 135, family: "minor", nature: "tense", orb: 2, luminaryBonus: 0 },
  biquintile: { key: "biquintile", angle: 144, family: "minor", nature: "harmonious", orb: 2, luminaryBonus: 0 },
  quincunx: { key: "quincunx", angle: 150, family: "minor", nature: "tense", orb: 3, luminaryBonus: 0 },
};
