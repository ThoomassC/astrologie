import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { Glyph } from "@/components/glyphs/Glyph";
import { Estampe } from "@/components/text/Estampe";
import { ExplainedSection, ExplainedText } from "@/components/text/ExplainedSection";
import { Fiche } from "@/components/text/Fiche";
import { InfoTip } from "@/components/text/InfoTip";
import layout from "@/components/text/layout.module.css";
import { PageHeader } from "@/components/text/PageHeader";
import { ZodiacWheel } from "@/components/wheel/ZodiacWheel";
import { getCommonContent } from "@/content/common/content";
import { getImagesContent } from "@/content/images/content";
import { getSignsContent } from "@/content/signs/content";
import { SIGN_SECTION_IDS } from "@/content/signs/types";
import { getUiContent } from "@/content/ui/content";
import { formatMonthDay, formatUtcDay } from "@/i18n/dates";
import { CONSTELLATION_NAMES, ELEMENT_NAMES, MODALITY_NAMES, POINT_NAMES, SIGN_NAMES } from "@/i18n/names";
import { CONSTELLATIONS } from "@/lib/astro/constellations";
import { sunPassages } from "@/lib/astro/constellationPassages";
import type { PlanetKey, SignKey } from "@/lib/astro/keys";
import { SIGN_KEYS } from "@/lib/astro/keys";
import { detriment, fall, SIGNS } from "@/lib/astro/signs";
import { MAIN_ID } from "@/lib/site/ids";
import { SIGN_IMAGES } from "@/lib/site/images";
import { planetPath, SECTION_PATHS, signPath } from "@/lib/site/routes";
import { ELEMENT_COLORS } from "./elementColors";
import styles from "./signs.module.css";

/** Année des dates de passage du Soleil dans les constellations (calculées au build). */
export const PASSAGE_YEAR = 2026;

const magnitude = (m: number) => new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 2 }).format(m);

/** Fiche d'un signe : en-tête, estampe, résumé, qualités et travers, puis sept sections à déplier ; manchette. */
export function SignPage({ sign }: { sign: SignKey }) {
  const content = getSignsContent();
  const text = content.signs[sign];
  const ui = getUiContent().signs;
  const common = getCommonContent();
  const credit = getImagesContent().signs[sign];
  const data = SIGNS[sign];
  const name = SIGN_NAMES[sign];
  const constellation = CONSTELLATIONS[data.constellation];
  const exile = detriment(sign);
  const fallen = fall(sign);
  const index = SIGN_KEYS.indexOf(sign);
  const previous = SIGN_KEYS[(index + 11) % 12];
  const next = SIGN_KEYS[(index + 1) % 12];

  const passages = sunPassages(PASSAGE_YEAR);
  const passage = passages.find((p) => p.constellation === data.constellation);
  const ophiuchus = sign === "scorpio" || sign === "sagittarius" ? passages.find((p) => p.constellation === "Oph") : undefined;

  const planetLink = (planet: PlanetKey) => (
    <Link href={planetPath(planet)}>{POINT_NAMES[planet].name}</Link>
  );

  const fiche = [
    { label: ui.fiche.dates, value: `${formatMonthDay(data.dates.start)} – ${formatMonthDay(data.dates.end)}` },
    {
      label: ui.fiche.element,
      value: (
        <span className={styles.pastille} style={{ "--pastille": ELEMENT_COLORS[data.element] } as CSSProperties}>
          {ELEMENT_NAMES[data.element].name}
        </span>
      ),
    },
    { label: ui.fiche.modality, value: MODALITY_NAMES[data.modality].name },
    {
      label: ui.fiche.polarity,
      value: data.element === "fire" || data.element === "air" ? ui.polarityValues.masculine : ui.polarityValues.feminine,
    },
    { label: ui.fiche.ruler, value: planetLink(data.rulers.traditional) },
    ...(data.rulers.modern !== data.rulers.traditional
      ? [{ label: ui.fiche.modernRuler, value: planetLink(data.rulers.modern) }]
      : []),
    {
      label: ui.fiche.exaltation,
      value: data.exaltation ? (
        <>
          {planetLink(data.exaltation.planet)} ({data.exaltation.degree}°)
        </>
      ) : (
        ui.fiche.none
      ),
    },
    {
      label: ui.fiche.detriment,
      value:
        exile.modern !== exile.traditional ? (
          <>
            {planetLink(exile.traditional)}, {planetLink(exile.modern)}
          </>
        ) : (
          planetLink(exile.traditional)
        ),
    },
    { label: ui.fiche.fall, value: fallen ? planetLink(fallen) : ui.fiche.none },
    { label: ui.fiche.body, value: text.bodyPart },
    {
      label: ui.fiche.constellation,
      value: ui.constellationValue(CONSTELLATION_NAMES[data.constellation].latin, Math.round(constellation.areaSqDeg)),
    },
    {
      label: ui.fiche.brightestStar,
      value: ui.starValue(text.brightestStarName, constellation.brightestDesignation, magnitude(constellation.brightestMagnitude)),
    },
  ];

  const extras: Partial<Record<(typeof SIGN_SECTION_IDS)[number], ReactNode>> = {
    decans: (
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <caption>{ui.decansCaption}</caption>
          <thead>
            <tr>
              {ui.decansHeaders.map((header) => (
                <th key={header} scope="col">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.decans.map((decan, i) => (
              <tr key={decan.startDeg}>
                <th scope="row">{ui.decanName((i + 1) as 1 | 2 | 3)}</th>
                <td>{ui.degrees(decan.startDeg, decan.startDeg + 10)}</td>
                <td>{planetLink(decan.faceRuler)}</td>
                <td>
                  <Link href={signPath(decan.triplicitySign)}>{SIGN_NAMES[decan.triplicitySign].name}</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
    constellation: passage ? (
      <div className={styles.passage}>
        <p>
          {ui.passage(
            PASSAGE_YEAR,
            name.of,
            formatUtcDay(passage.startUtcMs),
            formatUtcDay(passage.endUtcMs),
          )}
          {ophiuchus && sign === "scorpio"
            ? ` ${ui.passageOphiuchus(PASSAGE_YEAR, formatUtcDay(ophiuchus.startUtcMs), formatUtcDay(ophiuchus.endUtcMs))}`
            : null}{" "}
          <InfoTip subject={ui.passageInfo}>{ui.passageNote}</InfoTip>
        </p>
      </div>
    ) : null,
  };

  return (
    <main id={MAIN_ID} tabIndex={-1} className={layout.page}>
      <PageHeader
        title={
          <span className={styles.signTitle}>
            <Glyph name={sign} size="0.9em" className={styles.titleGlyph} />
            {name.name}
          </span>
        }
        lead={text.tagline}
        crumbs={[
          { label: common.breadcrumbHome, href: SECTION_PATHS.home },
          { label: content.index.title, href: SECTION_PATHS.signs },
        ]}
      />

      <div className={layout.withAside}>
        <Estampe
          image={SIGN_IMAGES[sign]}
          alt={text.imageAlt}
          credit={credit}
          sizes="(min-width: 1100px) 44rem, 92vw"
          priority
        />
        <aside className={layout.aside} aria-label={ui.fiche.label}>
          <ZodiacWheel titleId={`roue-${sign}`} title={ui.wheelTitle(name.name)} highlightSign={sign} className={styles.miniWheel} />
          <Fiche rows={fiche} />
        </aside>

        <div className={layout.stack}>
          <ExplainedText text={text.intro} subject={name.name} />

          <div className={styles.keywords}>
            <div>
              <h2 className={styles.keywordsTitle}>{ui.qualities}</h2>
              <ul>
                {text.keywords.map((k) => (
                  <li key={k}>{k}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className={styles.keywordsTitle}>{ui.shadows}</h2>
              <ul>
                {text.shadowKeywords.map((k) => (
                  <li key={k}>{k}</li>
                ))}
              </ul>
            </div>
          </div>

          {SIGN_SECTION_IDS.map((id) => (
            <ExplainedSection key={id} id={id} text={text.sections[id]}>
              {extras[id]}
            </ExplainedSection>
          ))}

          <nav className={styles.prevNext} aria-label={content.index.title}>
            <Link href={signPath(previous)} rel="prev">
              <span className={styles.prevNextLabel}>{ui.previous}</span>
              <span className={styles.prevNextName}>
                <Glyph name={previous} size={22} /> {SIGN_NAMES[previous].name}
              </span>
            </Link>
            <Link href={signPath(next)} rel="next" className={styles.nextLink}>
              <span className={styles.prevNextLabel}>{ui.next}</span>
              <span className={styles.prevNextName}>
                {SIGN_NAMES[next].name} <Glyph name={next} size={22} />
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </main>
  );
}
