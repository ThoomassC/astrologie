import Link from "next/link";
import { Glyph } from "@/components/glyphs/Glyph";
import { ExplainedSection, ExplainedText } from "@/components/text/ExplainedSection";
import layout from "@/components/text/layout.module.css";
import { PageHeader } from "@/components/text/PageHeader";
import { getPlanetsContent } from "@/content/planets/content";
import { POINT_NAMES } from "@/i18n/names";
import { PLANET_KEYS } from "@/lib/astro/keys";
import { PLANETS, type PlanetGroup } from "@/lib/astro/planets";
import { MAIN_ID } from "@/lib/site/ids";
import { planetPath } from "@/lib/site/routes";
import { PlanetSphere } from "./PlanetSphere";
import styles from "./planets.module.css";

const GROUPS: readonly PlanetGroup[] = ["luminary", "personal", "social", "transpersonal"];

/** Page des planètes : quatre familles, chacune avec ses astres (sphère, glyphe, nom, domaines), puis les nœuds. */
export function PlanetsIndexPage() {
  const content = getPlanetsContent();
  return (
    <main id={MAIN_ID} tabIndex={-1} className={layout.page}>
      <PageHeader title={content.index.title} lead={content.index.lead} />
      <div className={layout.stack}>
        <ExplainedText text={content.index.intro} subject={content.index.title} />
        <div className={styles.groups}>
          {GROUPS.map((group) => (
            <div key={group} className={styles.group}>
              <ExplainedSection id={`groupe-${group}`} text={content.groups[group]} />
              <ul className={styles.planetList}>
                {PLANET_KEYS.filter((planet) => PLANETS[planet].group === group).map((planet) => (
                  <li key={planet} className={styles.planetItem}>
                    <PlanetSphere planet={planet} size="7.5rem" />
                    <h3 className={styles.planetName}>
                      <Glyph name={planet} size={26} className={styles.planetGlyph} />
                      <Link href={planetPath(planet)}>{POINT_NAMES[planet].name}</Link>
                    </h3>
                    <p className={styles.planetKeywords}>{content.planets[planet].keywords.slice(0, 3).join(", ")}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <ExplainedSection id="noeuds" text={content.northNode} />
      </div>
    </main>
  );
}
