"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Glyph } from "@/components/glyphs/Glyph";
import { ZodiacWheel } from "@/components/wheel/ZodiacWheel";
import { useLocale } from "@/i18n/LocaleProvider";
import type { Locale } from "@/i18n/locales";
import { POINT_NAMES, SIGN_NAMES } from "@/i18n/names";
import { formatDegreeInSign } from "@/i18n/positions";
import { ASPECTS } from "@/lib/astro/aspectData";
import { type AspectKey, CHART_POINT_KEYS, type ChartPointKey, type MAJOR_ASPECT_KEYS, PLANET_KEYS } from "@/lib/astro/keys";
import { moonPhase } from "@/lib/astro/moonPhase";
import type { computeSky } from "@/lib/astro/sky";
import { lexiconPath, planetPath, sectionPath, signPath } from "@/lib/site/routes";
import { HOME_STRINGS } from "./home.strings";
import styles from "./home.module.css";

type Sky = ReturnType<typeof computeSky>;
type State = { status: "loading" } | { status: "ready"; sky: Sky; at: Date } | { status: "error" };
type MajorAspectKey = (typeof MAJOR_ASPECT_KEYS)[number];

/** Entrées du lexique et ancre de la page des planètes, écrites ici : aucun contenu serveur côté client. */
const RETROGRADE_ENTRY = "retrogradation";
const NODES_ANCHOR = "noeuds";

const NBSP = "\u00a0";

const isMajor = (key: AspectKey): key is MajorAspectKey => ASPECTS[key].family === "major";

function pointPath(key: ChartPointKey, locale: Locale): string {
  return key === "northNode" ? `${sectionPath("planets", locale)}#${NODES_ANCHOR}` : planetPath(key, locale);
}

const SWATCH: Readonly<Record<MajorAspectKey, string | null>> = {
  conjunction: null,
  sextile: styles.swatchHarmonious,
  trine: styles.swatchHarmonious,
  square: styles.swatchTense,
  opposition: styles.swatchTense,
};

/** Échantillon du trait de l'aspect sur la roue (couleur et motif) ; la conjonction n'y est pas tracée. */
function Swatch({ aspect }: { aspect: MajorAspectKey }) {
  const tone = SWATCH[aspect];
  return (
    <svg className={styles.swatch} width="28" height="10" viewBox="0 0 28 10" aria-hidden="true" focusable="false">
      {tone ? <line className={tone} x1="1" y1="5" x2="27" y2="5" /> : null}
    </svg>
  );
}

/**
 * Le ciel du jour : la roue est rendue au serveur avec ses onze astres cachés, rangés à gauche (le prérendu ne connaît
 * pas l'heure) ; au montage, le moteur d'éphémérides arrive par `import()`, calcule l'instant présent, et les mêmes
 * astres glissent jusqu'à leur degré (la transition part de leur place cachée). Équivalent texte : positions (liens
 * vers les astres, les signes, la rétrogradation) et aspects majeurs. Un échec propose de recalculer.
 */
export function TodaySky() {
  const locale = useLocale();
  const S = HOME_STRINGS[locale];
  const signs = SIGN_NAMES[locale];
  const names = POINT_NAMES[locale];
  const [state, setState] = useState<State>({ status: "loading" });
  const [attempt, setAttempt] = useState(0);
  const statusRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    let cancelled = false;
    import("@/lib/astro/sky")
      .then(({ computeSky }) => {
        const now = new Date();
        const sky = computeSky(now.getTime());
        if (!cancelled) {
          requestAnimationFrame(() => {
            if (!cancelled) setState({ status: "ready", sky, at: now });
          });
        }
      })
      .catch(() => {
        if (!cancelled) setState({ status: "error" });
      });
    return () => {
      cancelled = true;
    };
  }, [attempt]);

  const retry = () => {
    // Le bouton disparaît : le focus passe à la ligne d'état, qui dira le résultat.
    statusRef.current?.focus();
    setState({ status: "loading" });
    setAttempt((n) => n + 1);
  };

  const sky = state.status === "ready" ? state.sky : null;
  const points = CHART_POINT_KEYS.map((key) => ({
    key,
    longitude: sky ? sky.positions[key].longitude : 0,
    retrograde: sky ? sky.positions[key].motion === "retrograde" : false,
  }));
  const majorAspects = sky ? sky.aspects.flatMap((aspect) => (isMajor(aspect.key) ? [{ ...aspect, key: aspect.key }] : [])) : [];
  const drawnAspects = sky
    ? majorAspects
        .filter((aspect) => aspect.key !== "conjunction")
        .map((aspect) => ({
          a: sky.positions[aspect.a as keyof Sky["positions"]].longitude,
          b: sky.positions[aspect.b as keyof Sky["positions"]].longitude,
          key: aspect.key,
        }))
    : [];
  const retrogrades = sky ? PLANET_KEYS.filter((key) => sky.positions[key].motion === "retrograde") : [];

  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <h1 className={styles.heroTitle}>{S.title}</h1>
        <p ref={statusRef} tabIndex={-1} className={styles.date} aria-live="polite">
          {state.status === "ready" ? S.date(state.at) : state.status === "error" ? S.error : S.loading}
        </p>
        {state.status === "error" ? (
          <p>
            <button type="button" className="bouton bouton-second" onClick={retry}>
              {S.retry}
            </button>
          </p>
        ) : null}
        {sky ? (
          <p className={styles.sentence}>
            {S.sun(signs[sky.positions.sun.sign].the)}{" "}
            {S.moon(S.phases[moonPhase(sky.positions.sun.longitude, sky.positions.moon.longitude)], signs[sky.positions.moon.sign].name)}{" "}
            {retrogrades.length > 0 ? S.retrogrades(retrogrades.map((k) => names[k].name)) : S.noRetrograde}
          </p>
        ) : null}
        <p className={styles.actions}>
          <Link className="bouton" href={sectionPath("natal", locale)}>
            {S.natalCta}
          </Link>
          <Link className="bouton bouton-second" href={sectionPath("signs", locale)}>
            {S.signsCta}
          </Link>
        </p>
      </div>
      <div className={styles.heroWheel}>
        <ZodiacWheel
          titleId="roue-du-jour"
          title={S.wheelTitle}
          locale={locale}
          descriptionId="positions-du-jour"
          points={points}
          aspects={drawnAspects}
          pointsVisible={sky !== null}
        />
      </div>
      <div className={styles.positions} id="positions-du-jour">
        <h2 className={styles.positionsTitle}>{S.listTitle}</h2>
        <ul className={styles.positionList} aria-busy={state.status === "loading"}>
          {CHART_POINT_KEYS.map((key) => {
            const position = sky?.positions[key];
            return (
              <li key={key} className={position ? undefined : styles.placeholder}>
                <Glyph name={key} size={22} className={styles.positionGlyph} />
                <span className={styles.positionName}>
                  <Link href={pointPath(key, locale)}>{names[key].name}</Link>
                </span>
                <span className={styles.positionValue}>
                  {position ? (
                    <>
                      {formatDegreeInSign(position.longitude)}
                      {NBSP}
                      <Link href={signPath(position.sign, locale)}>{signs[position.sign].name}</Link>
                      {position.motion === "retrograde" ? (
                        <>
                          {" "}
                          <Link href={lexiconPath(RETROGRADE_ENTRY, locale)} className={styles.retro}>
                            {S.retrograde}
                          </Link>
                        </>
                      ) : null}
                    </>
                  ) : (
                    "…"
                  )}
                </span>
              </li>
            );
          })}
        </ul>
        {sky ? (
          <>
            <h3 className={`${styles.positionsTitle} ${styles.aspectsTitle}`}>{S.aspectsTitle}</h3>
            {majorAspects.length > 0 ? (
              <ul className={styles.aspectList}>
                {majorAspects.map((aspect) => (
                  <li key={`${aspect.a}-${aspect.b}-${aspect.key}`}>
                    <Swatch aspect={aspect.key} />
                    {S.aspectLine(names[aspect.a].the, names[aspect.b].the, S.aspectIn[aspect.key])}
                  </li>
                ))}
              </ul>
            ) : (
              <p className={styles.aspectEmpty}>{S.noAspect}</p>
            )}
          </>
        ) : null}
      </div>
    </div>
  );
}
