import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Glyph } from "@/components/glyphs/Glyph";
import { PlanetSphere } from "@/components/planets/PlanetSphere";
import { AstronomerNote } from "@/components/text/AstronomerNote";
import { ExplainedSection } from "@/components/text/ExplainedSection";
import layout from "@/components/text/layout.module.css";
import { ZodiacWheel } from "@/components/wheel/ZodiacWheel";
import { getHomeContent } from "@/content/home/content";
import { HOME_DOOR_KEYS, type HomeDoorKey } from "@/content/home/types";
import { getUiContent } from "@/content/ui/content";
import { SIGN_NAMES } from "@/i18n/names";
import { SIGN_KEYS } from "@/lib/astro/keys";
import { MAIN_ID } from "@/lib/site/ids";
import { HISTORY_IMAGES, SIGN_IMAGES, ZODIACAL_LIGHT } from "@/lib/site/images";
import { SECTION_PATHS, signPath } from "@/lib/site/routes";
import styles from "./home.module.css";
import { TodaySky } from "./TodaySky";

/** Douze cuspides égales depuis 0° Bélier, pour l'illustration de la porte des maisons. */
const SAMPLE_CUSPS = Array.from({ length: 12 }, (_, i) => i * 30);

const DOOR_ART: Readonly<Record<HomeDoorKey, ReactNode>> = {
  signs: <Image src={SIGN_IMAGES.leo} alt="" sizes="10rem" placeholder="blur" className={styles.doorImage} />,
  planets: <PlanetSphere planet="saturn" size="6.5rem" />,
  houses: <ZodiacWheel titleId="porte-maisons" title="" decorative cusps={SAMPLE_CUSPS} className={styles.doorWheel} />,
  aspects: (
    <span className={styles.doorGlyphs} aria-hidden="true">
      <Glyph name="trine" size={34} />
      <Glyph name="square" size={34} />
      <Glyph name="opposition" size={34} />
    </span>
  ),
  natal: (
    <ZodiacWheel
      titleId="porte-theme"
      title=""
      decorative
      cusps={SAMPLE_CUSPS}
      points={[
        { key: "sun", longitude: 75 },
        { key: "moon", longitude: 200 },
        { key: "venus", longitude: 52 },
      ]}
      aspects={[{ a: 75, b: 200, key: "trine" }]}
      className={styles.doorWheel}
    />
  ),
  history: <Image src={HISTORY_IMAGES.cellariusPlanisphere} alt="" sizes="10rem" placeholder="blur" className={styles.doorImage} />,
  science: <Image src={ZODIACAL_LIGHT} alt="" sizes="10rem" placeholder="blur" className={styles.doorImage} />,
};

/** Accueil : ciel du jour, l'astrologie en bref, frise des signes, portes vers les sections, note de la science. */
export function HomePage() {
  const content = getHomeContent();
  const ui = getUiContent().home;
  return (
    <main id={MAIN_ID} tabIndex={-1} className={layout.page}>
      <TodaySky />

      <div className={layout.stack}>
        <section className={styles.essentials} aria-labelledby="en-bref">
          <h2 id="en-bref" className={layout.groupTitle}>
            {content.essentialsTitle}
          </h2>
          <div className={styles.essentialsGrid}>
            {content.essentials.map((text, i) => (
              <ExplainedSection key={text.heading} id={`notion-${i + 1}`} level={3} text={text} />
            ))}
          </div>
        </section>

        <section aria-labelledby="frise">
          <h2 id="frise" className={layout.groupTitle}>
            {content.signsFrieze.title}
          </h2>
          <p className={styles.friezeLead}>{content.signsFrieze.lead}</p>
          <ul className={styles.frieze}>
            {SIGN_KEYS.map((sign) => (
              <li key={sign}>
                <Link href={signPath(sign)} className={styles.friezeItem}>
                  <span className={styles.friezeImage}>
                    <Image src={SIGN_IMAGES[sign]} alt="" sizes="14rem" placeholder="blur" />
                  </span>
                  <span className={styles.friezeName}>
                    <Glyph name={sign} size={22} className={styles.friezeGlyph} />
                    {SIGN_NAMES[sign].name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <nav aria-label={ui.doorsLabel} className={styles.doors}>
          <ul>
            {HOME_DOOR_KEYS.map((key) => (
              <li key={key} className={styles.door}>
                <div className={styles.doorArt}>{DOOR_ART[key]}</div>
                <div>
                  <h2 className={styles.doorTitle}>
                    <Link href={SECTION_PATHS[key]}>{content.doors[key].title}</Link>
                  </h2>
                  <p className={styles.doorText}>{content.doors[key].text}</p>
                </div>
              </li>
            ))}
          </ul>
        </nav>

        <AstronomerNote title={content.scienceNote.title}>
          <p>{content.scienceNote.text}</p>
          <p>
            <Link href={SECTION_PATHS.science}>{content.doors.science.title}</Link>
          </p>
        </AstronomerNote>
      </div>
    </main>
  );
}
