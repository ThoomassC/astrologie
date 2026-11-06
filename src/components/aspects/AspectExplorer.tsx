"use client";

import Link from "next/link";
import { useId, useState } from "react";
import styles from "@/components/wheel/demo.module.css";
import { useSettledValue } from "@/components/wheel/useSettledValue";
import { ZodiacWheel } from "@/components/wheel/ZodiacWheel";
import { POINT_NAMES } from "@/i18n/names";
import { formatPosition } from "@/i18n/positions";
import { ASPECTS } from "@/lib/astro/aspectData";
import { type Aspect, findAspects } from "@/lib/astro/aspects";
import { MAJOR_ASPECT_KEYS, PLANET_KEYS, type PlanetKey } from "@/lib/astro/keys";
import { norm360, separation } from "@/lib/astro/zodiac";
import { aspectPath } from "@/lib/site/routes";
import { ASPECTS_STRINGS as S } from "./aspects.strings";

const decimal = (n: number) => new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 1 }).format(n);

interface Pick {
  planet: PlanetKey;
  longitude: number;
}

/** L'aspect le plus serré entre deux astres (majeurs et mineurs, orbes du site), ou rien. */
function aspectBetween(first: Pick, second: Pick): Aspect | undefined {
  if (first.planet === second.planet) return undefined;
  return findAspects(
    [
      { key: first.planet, longitude: first.longitude, speedDegPerDay: null },
      { key: second.planet, longitude: second.longitude, speedDegPerDay: null },
    ],
    ["major", "minor"],
  )[0];
}

/** Résumé parlé : les deux astres, l'aspect trouvé (son nom mène à sa section), son orbe et sa nature. */
function Status({ first, second }: { first: Pick; second: Pick }) {
  const aspect = aspectBetween(first, second);
  const pair = S.pair(POINT_NAMES[first.planet].name, POINT_NAMES[second.planet].name);
  if (!aspect) return <>{`${pair}${S.none(decimal(separation(first.longitude, second.longitude)))}`}</>;
  const detail = aspect.orb < 0.05 ? S.exact : S.found(decimal(aspect.orb), decimal(aspect.maxOrb));
  return (
    <>
      {pair}
      <Link href={aspectPath(aspect.key)}>{S.aspectNames[aspect.key]}</Link>
      {`${detail} ${S.nature(S.natures[ASPECTS[aspect.key].nature])}`}
    </>
  );
}

/**
 * Explorateur des aspects : deux astres, deux positions ; il mesure l'écart, cherche l'aspect (majeurs et mineurs,
 * orbes du site) et le dessine. Commandes natives (listes, curseurs, boutons qui placent le second astre à l'angle
 * d'un aspect majeur), résumé parlé une fois le curseur arrêté.
 */
export function AspectExplorer() {
  const id = useId();
  const [first, setFirst] = useState<Pick>({ planet: "sun", longitude: 10 });
  const [second, setSecond] = useState<Pick>({ planet: "moon", longitude: 128 });
  const settledFirst = useSettledValue(first);
  const settledSecond = useSettledValue(second);

  const aspect = aspectBetween(first, second);
  const gap = separation(first.longitude, second.longitude);

  const controls = (n: 1 | 2, pick: Pick, set: (p: Pick) => void, other: PlanetKey) => (
    <fieldset className={styles.fieldset}>
      <legend>{S.pointLabel(n)}</legend>
      <div className={styles.field}>
        <label htmlFor={`${id}-astre-${n}`}>{S.planet}</label>
        <select
          id={`${id}-astre-${n}`}
          value={pick.planet}
          onChange={(event) => set({ ...pick, planet: event.target.value as PlanetKey })}
        >
          {PLANET_KEYS.filter((planet) => planet !== other).map((planet) => (
            <option key={planet} value={planet}>
              {POINT_NAMES[planet].name}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.field}>
        <label htmlFor={`${id}-position-${n}`}>{S.position}</label>
        <input
          id={`${id}-position-${n}`}
          type="range"
          min={0}
          max={359.5}
          step={0.5}
          value={pick.longitude}
          onChange={(event) => set({ ...pick, longitude: Number(event.target.value) })}
          aria-valuetext={formatPosition(pick.longitude)}
        />
        <output htmlFor={`${id}-position-${n}`} aria-hidden="true">
          {formatPosition(pick.longitude)}
        </output>
      </div>
    </fieldset>
  );

  return (
    <section className={styles.demo} aria-labelledby={`${id}-titre`}>
      <h2 id={`${id}-titre`} className={styles.demoTitle}>
        {S.title}
      </h2>
      <p className={styles.demoIntro}>{S.intro}</p>
      <div className={styles.demoGrid}>
        <div className={styles.demoWheel}>
          <ZodiacWheel
            titleId={`${id}-roue`}
            title={S.wheelTitle}
            descriptionId={`${id}-etat`}
            points={[
              { key: first.planet, longitude: first.longitude },
              { key: second.planet, longitude: second.longitude },
            ]}
            aspects={aspect ? [{ a: first.longitude, b: second.longitude, key: aspect.key }] : []}
          />
        </div>
        <div className={styles.controls}>
          <div className={styles.pair}>
            {controls(1, first, setFirst, second.planet)}
            {controls(2, second, setSecond, first.planet)}
          </div>
          <div className={styles.presets} role="group" aria-label={S.placeLabel}>
            {MAJOR_ASPECT_KEYS.map((key) => (
              <button
                key={key}
                type="button"
                className={styles.preset}
                onClick={() => setSecond({ ...second, longitude: norm360(first.longitude + ASPECTS[key].angle) })}
              >
                {S.place(S.aspectNames[key].toLowerCase())}
              </button>
            ))}
          </div>
          <p className={styles.field}>
            <output>{S.separation(decimal(gap))}</output>
          </p>
          <p id={`${id}-etat`} className={styles.status} aria-live="polite">
            <Status first={settledFirst} second={settledSecond} />
          </p>
        </div>
      </div>
    </section>
  );
}
