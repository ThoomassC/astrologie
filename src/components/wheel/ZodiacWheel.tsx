import type { CSSProperties, ReactNode } from "react";
import { GlyphShape } from "@/components/glyphs/Glyph";
import type { Locale } from "@/i18n/locales";
import { ANGLE_ABBREVIATIONS } from "@/i18n/names";
import { ASPECTS } from "@/lib/astro/aspectData";
import type { AspectKey, ChartPointKey, ElementKey, Longitude, SignKey } from "@/lib/astro/keys";
import { SIGN_KEYS } from "@/lib/astro/keys";
import { SIGNS } from "@/lib/astro/signs";
import { CENTER, RADII, radialSegment, ringSector, screenAngle, svgNumber, toXY, WHEEL_SIZE } from "@/lib/wheel/geometry";
import { spreadLongitudes } from "@/lib/wheel/placePoints";
import styles from "./wheel.module.css";

export interface WheelPoint {
  readonly key: ChartPointKey;
  readonly longitude: Longitude;
  readonly retrograde?: boolean;
}

export interface WheelAspect {
  readonly a: Longitude;
  readonly b: Longitude;
  readonly key: AspectKey;
}

export interface WheelAngles {
  readonly ascendant: Longitude;
  readonly midheaven: Longitude;
}

export interface ZodiacWheelProps {
  /** Identifiant du titre SVG (unique dans la page) et le titre lui-même : nom accessible de la roue. */
  readonly titleId: string;
  readonly title: string;
  /** Langue des abréviations des angles (AS, MC… ; AC, MC… en anglais). */
  readonly locale: Locale;
  /** Élément qui décrit la roue en mots ou en tableau (`aria-describedby`). */
  readonly descriptionId?: string;
  /** Longitude posée à gauche (9 h) : l'Ascendant d'un thème, 0° Bélier sinon. */
  readonly leftLongitude?: Longitude;
  /** Douze cuspides, de la maison I à la XII : l'anneau des maisons n'est dessiné qu'avec elles. */
  readonly cusps?: readonly Longitude[];
  readonly angles?: WheelAngles;
  readonly highlightSign?: SignKey;
  readonly points?: readonly WheelPoint[];
  readonly aspects?: readonly WheelAspect[];
  /** Faux : astres cachés, rangés à gauche ; vrai : ils glissent jusqu'à leur degré (un fondu en mouvement réduit). */
  readonly pointsVisible?: boolean;
  readonly className?: string;
  /** Dessin ajouté par-dessus (poignées de l'explorateur des aspects). */
  readonly children?: ReactNode;
  /** Roue décorative (illustration d'un lien) : masquée aux lecteurs d'écran, sans titre. */
  readonly decorative?: boolean;
}

const ELEMENT_CLASS: Readonly<Record<ElementKey, string>> = {
  fire: styles.fire,
  earth: styles.earth,
  air: styles.air,
  water: styles.water,
};

/** Taille d'un glyphe de signe et d'astre, dans les unités de la roue. */
const SIGN_GLYPH = 50;
const POINT_GLYPH = 40;
const POINT_DISC = 26;
/** Écart minimal entre deux glyphes d'astres, en degrés. */
const POINT_SEPARATION = 9;

function glyphAt(x: number, y: number, size: number) {
  return `translate(${svgNumber(x - size / 2)} ${svgNumber(y - size / 2)}) scale(${svgNumber(size / 32)})`;
}

function ticksPath(left: Longitude): string {
  let d = "";
  for (let degree = 0; degree < 360; degree++) {
    const length = degree % 10 === 0 ? 22 : degree % 5 === 0 ? 14 : 7;
    d += radialSegment(degree, RADII.outer, RADII.outer - length, left);
  }
  return d;
}

/**
 * Roue zodiacale gravée, en SVG : graduations, bande des douze signes teintée du pigment de leur élément, maisons et
 * angles d'un thème, astres écartés pour ne jamais se toucher (un trait les relie à leur vrai degré), aspects au
 * centre. Composant partagé (serveur et client) : ni état, ni effet. Le nom accessible et la description viennent de
 * la page ; tout le dessin est une image (`role="img"`).
 */
export function ZodiacWheel({
  titleId,
  title,
  locale,
  descriptionId,
  leftLongitude = 0,
  cusps,
  angles,
  highlightSign,
  points = [],
  aspects = [],
  pointsVisible = true,
  className,
  children,
  decorative = false,
}: ZodiacWheelProps) {
  const left = leftLongitude;
  const hasHouses = cusps !== undefined && cusps.length === 12;
  const pointRadius = hasHouses ? RADII.pointsWithHouses : RADII.pointsWithoutHouses;
  const innerEdge = hasHouses ? RADII.housesInner : RADII.signsInner;
  const display = spreadLongitudes(
    points.map((p) => p.longitude),
    POINT_SEPARATION,
  );

  return (
    <svg
      className={`${styles.wheel} ${className ?? ""}`}
      viewBox={`0 0 ${WHEEL_SIZE} ${WHEEL_SIZE}`}
      {...(decorative
        ? { "aria-hidden": true, focusable: false }
        : { role: "img", "aria-labelledby": titleId, "aria-describedby": descriptionId })}
    >
      {decorative ? null : <title id={titleId}>{title}</title>}

      {/* Bande des signes : secteurs teintés, glyphes. */}
      <g>
        {SIGN_KEYS.map((key) => {
          const { index, element } = SIGNS[key];
          const from = index * 30;
          const mid = toXY(from + 15, RADII.signGlyph, left);
          return (
            <g key={key}>
              <path
                className={`${styles.sector} ${key === highlightSign ? styles.highlight : ELEMENT_CLASS[element]}`}
                d={ringSector(from, from + 30, RADII.ticks, RADII.signsInner, left)}
              />
              <g className={key === highlightSign ? styles.signGlyphStrong : styles.signGlyph} transform={glyphAt(mid.x, mid.y, SIGN_GLYPH)}>
                <GlyphShape name={key} strokeWidth={1.5} />
              </g>
            </g>
          );
        })}
      </g>

      {/* Traits gravés : cercles, graduations, limites des signes. */}
      <g className={styles.engraving}>
        <circle cx={CENTER} cy={CENTER} r={RADII.outer} />
        <circle cx={CENTER} cy={CENTER} r={RADII.ticks} />
        <circle cx={CENTER} cy={CENTER} r={RADII.signsInner} />
        {hasHouses ? <circle cx={CENTER} cy={CENTER} r={RADII.housesInner} /> : null}
        <circle cx={CENTER} cy={CENTER} r={RADII.aspects} className={styles.faint} />
        <path d={ticksPath(left)} className={styles.ticks} />
        <path d={SIGN_KEYS.map((_, i) => radialSegment(i * 30, RADII.outer, RADII.signsInner, left)).join("")} />
      </g>

      {/* Maisons : cuspides, numéros ; les quatre angles plus marqués. */}
      {hasHouses ? (
        <g>
          {cusps.map((cusp, i) => {
            const next = cusps[(i + 1) % 12];
            const span = (((next - cusp) % 360) + 360) % 360;
            const label = toXY(cusp + span / 2, RADII.houseNumber, left);
            const isAngle = i % 3 === 0;
            return (
              <g key={i}>
                <path
                  className={isAngle ? styles.angleCusp : styles.cusp}
                  d={radialSegment(cusp, RADII.signsInner, isAngle ? RADII.aspects : RADII.housesInner, left)}
                />
                <text className={styles.houseNumber} x={label.x} y={label.y}>
                  {i + 1}
                </text>
              </g>
            );
          })}
        </g>
      ) : null}

      {angles ? (
        <g className={styles.angleLabels}>
          {(
            [
              ["ascendant", angles.ascendant],
              ["descendant", angles.ascendant + 180],
              ["midheaven", angles.midheaven],
              ["imumCoeli", angles.midheaven + 180],
            ] as const
          ).map(([key, longitude]) => {
            const at = toXY(longitude + 4, innerEdge - 22, left);
            return (
              <text key={key} x={at.x} y={at.y}>
                {ANGLE_ABBREVIATIONS[locale][key]}
              </text>
            );
          })}
        </g>
      ) : null}

      {/* Aspects : cordes entre les vrais degrés des astres. */}
      <g className={`${styles.aspects} ${pointsVisible ? styles.shown : ""}`}>
        {aspects.map(({ a, b, key }) => {
          const { nature, family } = ASPECTS[key];
          if (key === "conjunction") return null;
          const p = toXY(a, RADII.aspects, left);
          const q = toXY(b, RADII.aspects, left);
          const tone = nature === "harmonious" ? styles.harmonious : nature === "tense" ? styles.tense : styles.neutral;
          return (
            <line
              key={`${key}-${a}-${b}`}
              className={`${tone} ${family === "minor" ? styles.minor : ""}`}
              x1={p.x}
              y1={p.y}
              x2={q.x}
              y2={q.y}
            />
          );
        })}
      </g>

      {/* Astres : repère au vrai degré, trait de rappel, glyphe sur sa pastille (droit pendant la rotation). */}
      <g className={`${styles.points} ${pointsVisible ? styles.shown : ""}`}>
        {points.map((point, i) => {
          const shown = display[i];
          const tickFrom = RADII.signsInner;
          const tickTo = RADII.signsInner - 14;
          const leaderFrom = toXY(point.longitude, tickTo, left);
          const leaderTo = toXY(shown, pointRadius + POINT_DISC + 2, left);
          const rotation = pointsVisible ? -screenAngle(shown, left) : -180;
          return (
            <g key={point.key} data-point={point.key}>
              <g className={styles.marks}>
                <path className={styles.trueTick} d={radialSegment(point.longitude, tickFrom, tickTo, left)} />
                <line className={styles.leader} x1={leaderFrom.x} y1={leaderFrom.y} x2={leaderTo.x} y2={leaderTo.y} />
              </g>
              <g className={styles.orbit} style={{ "--rot": `${svgNumber(rotation)}deg` } as CSSProperties}>
                <g
                  className={styles.upright}
                  style={{ transformOrigin: `${CENTER + pointRadius}px ${CENTER}px` } as CSSProperties}
                >
                  <circle className={styles.disc} cx={CENTER + pointRadius} cy={CENTER} r={POINT_DISC} />
                  <g className={styles.pointGlyph} transform={glyphAt(CENTER + pointRadius, CENTER, POINT_GLYPH)}>
                    <GlyphShape name={point.key} strokeWidth={1.7} />
                  </g>
                  {point.retrograde ? (
                    <text className={styles.retro} x={CENTER + pointRadius + POINT_DISC + 2} y={CENTER + POINT_DISC}>
                      R
                    </text>
                  ) : null}
                </g>
              </g>
            </g>
          );
        })}
      </g>

      {children}
    </svg>
  );
}
