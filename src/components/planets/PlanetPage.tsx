import Link from "next/link";
import { Glyph } from "@/components/glyphs/Glyph";
import { ExplainedSection, ExplainedText } from "@/components/text/ExplainedSection";
import { Fiche } from "@/components/text/Fiche";
import layout from "@/components/text/layout.module.css";
import { PageHeader } from "@/components/text/PageHeader";
import { getCommonContent } from "@/content/common/content";
import { getPlanetsContent } from "@/content/planets/content";
import { PLANET_SECTION_IDS } from "@/content/planets/types";
import { getUiContent } from "@/content/ui/content";
import { PLANET_GROUP_NAMES, POINT_NAMES, SIGN_NAMES } from "@/i18n/names";
import type { PlanetKey, SignKey } from "@/lib/astro/keys";
import { PLANET_KEYS } from "@/lib/astro/keys";
import { PLANETS } from "@/lib/astro/planets";
import { domiciles, exaltationOf, oppositeSign } from "@/lib/astro/signs";
import { MAIN_ID } from "@/lib/site/ids";
import { planetPath, SECTION_PATHS, signPath } from "@/lib/site/routes";
import { PlanetSphere } from "./PlanetSphere";
import styles from "./planets.module.css";
import signStyles from "@/components/signs/signs.module.css";

function SignList({ signs }: { signs: readonly SignKey[] }) {
  return (
    <>
      {signs.map((sign, i) => (
        <span key={sign}>
          {i > 0 ? ", " : null}
          <Link href={signPath(sign)}>{SIGN_NAMES[sign].name}</Link>
        </span>
      ))}
    </>
  );
}

/** Fiche d'un astre : en-tête, sphère et fiche en manchette, résumé, domaines, six sections à déplier. */
export function PlanetPage({ planet }: { planet: PlanetKey }) {
  const content = getPlanetsContent();
  const text = content.planets[planet];
  const ui = getUiContent().planets;
  const common = getCommonContent();
  const data = PLANETS[planet];
  const name = POINT_NAMES[planet].name;
  const homes = domiciles(planet);
  const allHomes = [...new Set([...homes.traditional, ...homes.modern])];
  const exaltation = exaltationOf(planet);
  const index = PLANET_KEYS.indexOf(planet);
  const previous = PLANET_KEYS[(index + PLANET_KEYS.length - 1) % PLANET_KEYS.length];
  const next = PLANET_KEYS[(index + 1) % PLANET_KEYS.length];
  const period = (days: number) => (days >= 730 ? ui.years(days / 365.25) : ui.days(days));

  const fiche = [
    { label: ui.fiche.group, value: PLANET_GROUP_NAMES[data.group] },
    { label: ui.fiche.sidereal, value: period(data.siderealPeriodDays) },
    ...(data.synodicPeriodDays ? [{ label: ui.fiche.synodic, value: period(data.synodicPeriodDays) }] : []),
    { label: ui.fiche.perSign, value: period(data.meanDaysPerSign) },
    { label: ui.fiche.retrograde, value: data.retrogradeDays ? ui.retrogradeEvery(data.retrogradeDays) : ui.fiche.never },
    { label: ui.fiche.domiciles, value: allHomes.length > 0 ? <SignList signs={allHomes} /> : ui.fiche.none },
    {
      label: ui.fiche.exaltation,
      value: exaltation ? (
        <>
          <Link href={signPath(exaltation.sign)}>{SIGN_NAMES[exaltation.sign].name}</Link> ({exaltation.degree}°)
        </>
      ) : (
        ui.fiche.none
      ),
    },
    {
      label: ui.fiche.detriment,
      value: allHomes.length > 0 ? <SignList signs={allHomes.map(oppositeSign)} /> : ui.fiche.none,
    },
    {
      label: ui.fiche.fall,
      value: exaltation ? <SignList signs={[oppositeSign(exaltation.sign)]} /> : ui.fiche.none,
    },
    { label: ui.fiche.discovery, value: data.discoveryYear ? String(data.discoveryYear) : ui.fiche.ancient },
  ];

  return (
    <main id={MAIN_ID} tabIndex={-1} className={layout.page}>
      <PageHeader
        title={
          <span className={styles.signTitle}>
            <Glyph name={planet} size="0.9em" className={styles.titleGlyph} />
            {name}
          </span>
        }
        lead={text.tagline}
        crumbs={[
          { label: common.breadcrumbHome, href: SECTION_PATHS.home },
          { label: content.index.title, href: SECTION_PATHS.planets },
        ]}
      />
      <div className={layout.withAside}>
        <aside className={layout.aside} aria-label={ui.fiche.label}>
          <div className={styles.asideSphere}>
            <PlanetSphere planet={planet} label={text.imageAlt} />
          </div>
          <Fiche rows={fiche} />
        </aside>
        <div className={layout.stack}>
          <ExplainedText text={text.intro} subject={name} />
          <div className={styles.keywords}>
            <ul>
              {text.keywords.map((k) => (
                <li key={k}>{k}</li>
              ))}
            </ul>
          </div>
          {PLANET_SECTION_IDS.map((id) => (
            <ExplainedSection key={id} id={id} text={text.sections[id]} />
          ))}
          <nav className={signStyles.prevNext} aria-label={content.index.title}>
            <Link href={planetPath(previous)} rel="prev">
              <span className={signStyles.prevNextLabel}>{ui.previous}</span>
              <span className={signStyles.prevNextName}>
                <Glyph name={previous} size={22} /> {POINT_NAMES[previous].name}
              </span>
            </Link>
            <Link href={planetPath(next)} rel="next" className={signStyles.nextLink}>
              <span className={signStyles.prevNextLabel}>{ui.next}</span>
              <span className={signStyles.prevNextName}>
                {POINT_NAMES[next].name} <Glyph name={next} size={22} />
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </main>
  );
}
