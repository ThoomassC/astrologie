import Link from "next/link";
import { Fragment, type ReactNode, type Ref, useId } from "react";
import { Glyph, hasGlyph } from "@/components/glyphs/Glyph";
import demo from "@/components/wheel/demo.module.css";
import { ZodiacWheel } from "@/components/wheel/ZodiacWheel";
import {
  ASPECT_NAMES,
  ELEMENT_NAMES,
  HOUSE_SYSTEM_NAMES,
  houseRoman,
  MODALITY_NAMES,
  POINT_NAMES,
  SIGN_NAMES,
} from "@/i18n/names";
import { formatDegreeInSign, formatPosition } from "@/i18n/positions";
import { ASPECTS } from "@/lib/astro/aspectData";
import type { Aspect } from "@/lib/astro/aspects";
import type { BodyPosition, NatalChart } from "@/lib/astro/chart";
import {
  type AspectPointKey,
  CHART_POINT_KEYS,
  ELEMENT_KEYS,
  type ElementKey,
  HOUSE_NUMBERS,
  isPlanetKey,
  MODALITY_KEYS,
  PLANET_KEYS,
  type PlanetKey,
  type SignKey,
} from "@/lib/astro/keys";
import { SIGNS } from "@/lib/astro/signs";
import { signOf } from "@/lib/astro/zodiac";
import { CITIES } from "@/lib/geo/cities";
import { aspectPath, housePath, lexiconPath, planetPath, signPath } from "@/lib/site/routes";
import { CITY_STRINGS } from "./cities.strings";
import { clockOffset, clockTime, decimal, longDate, utcDateTime } from "./format";
import { NATAL_STRINGS as S } from "./natal.strings";
import { NatalDetails } from "./NatalDetails";
import { countryName } from "./places";
import { READING_STRINGS as R } from "./reading.strings";
import styles from "./natal.module.css";

/** Aspects majeurs repris dans la lecture guidée : les plus serrés. */
const READING_ASPECTS = 4;
/** Lus d'abord, avec l'Ascendant ; les huit autres astres attendent derrière « Détails ». */
const FIRST_READ: readonly PlanetKey[] = ["sun", "moon"];

/**
 * Ancres du lexique (`src/content/lexicon/fr.ts`), écrites ici : le contenu du lexique reste sur le serveur. Pas
 * d'entrée « appliquant » : la colonne renvoie à l'entrée « aspect ».
 */
const LEXICON = { motion: "retrogradation", orb: "orbe", phase: "aspect", cusp: "cuspide" } as const;

const PIGMENT: Readonly<Record<ElementKey, string>> = {
  fire: styles.fire,
  earth: styles.earth,
  air: styles.air,
  water: styles.water,
};

/** Longitude d'un point d'aspect ; null pour un angle d'un thème sans heure (il n'en a pas). */
function aspectLongitude(chart: NatalChart, key: AspectPointKey): number | null {
  if (key === "ascendant" || key === "midheaven") return chart.angles ? chart.angles[key] : null;
  return chart.positions[key].longitude;
}

function placeOf({ input: { cityKey, latitude, longitude } }: NatalChart): string {
  if (cityKey !== null) return S.cityIn(CITY_STRINGS.cities[cityKey], countryName(CITIES[cityKey].country));
  return S.coordinates(decimal(Math.abs(latitude)), latitude >= 0, decimal(Math.abs(longitude)), longitude >= 0);
}

/** Signe incertain (heure inconnue) : l'autre signe possible est le suivant si l'astre va vers la fin du sien. */
function towardNextSign({ degreeInSign, motion }: BodyPosition): boolean {
  return motion === "direct" ? degreeInSign >= 15 : degreeInSign < 15;
}

const share = (count: number) => `${(count / PLANET_KEYS.length) * 100}%`;

/** En-tête de colonne qui renvoie au lexique. */
function Term({ children, entry }: { children: string; entry: string }) {
  return (
    <Link prefetch={false} href={lexiconPath(entry)}>
      {children}
    </Link>
  );
}

/** Tableau d'aspects : Aspect | Astres | Orbe | Évolution ; défilement au clavier quand il déborde. */
function AspectTable({ aspects, caption }: { aspects: readonly Aspect[]; caption: string }) {
  const id = useId();
  const [aspect, pair, orb, phase] = S.aspectHeaders;
  return (
    <div className={demo.tableWrap} role="group" aria-labelledby={id} tabIndex={0}>
      <table className={demo.table}>
        <caption id={id}>{caption}</caption>
        <thead>
          <tr>
            <th scope="col">{aspect}</th>
            <th scope="col">{pair}</th>
            <th scope="col">
              <Term entry={LEXICON.orb}>{orb}</Term>
            </th>
            <th scope="col">
              <Term entry={LEXICON.phase}>{phase}</Term>
            </th>
          </tr>
        </thead>
        <tbody>
          {aspects.map((row) => (
            <tr key={`${row.a}-${row.b}`}>
              <th scope="row">
                <span className={styles.name}>
                  {hasGlyph(row.key) ? <Glyph name={row.key} size={18} className={styles.glyph} /> : null}
                  <Link prefetch={false} href={aspectPath(row.key)}>
                    {ASPECT_NAMES[row.key]}
                  </Link>
                </span>
              </th>
              <td>{S.pair(POINT_NAMES[row.a].name, POINT_NAMES[row.b].name)}</td>
              <td>{formatDegreeInSign(row.orb)}</td>
              <td>
                {row.applying === null ? (
                  <>
                    <span aria-hidden="true">{S.noPhase}</span>
                    <span className="sr-only">{S.noPhaseSpoken}</span>
                  </>
                ) : row.applying ? (
                  S.applying
                ) : (
                  S.separating
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Une section du thème : titre, phrase de résumé, puis le détail derrière le bouton « Détails ». */
function Block({ title, lead, children }: { title: string; lead: ReactNode; children: ReactNode }) {
  const id = useId();
  return (
    <section className={styles.block} aria-labelledby={id}>
      <h3 id={id}>{title}</h3>
      <div className={styles.lead}>{lead}</div>
      <NatalDetails subject={title}>{children}</NatalDetails>
    </section>
  );
}

interface ChartResultProps {
  chart: NatalChart;
  /** Titre du thème : il reçoit le focus quand le calcul aboutit. */
  titleRef: Ref<HTMLHeadingElement>;
  onEdit: () => void;
}

/**
 * Le thème calculé, du plus simple au plus technique : les trois signes, la lecture guidée, la roue, puis positions,
 * aspects, répartition et maisons (chacun résumé d'une phrase, le tableau derrière « Détails »), enfin les notes. Liens
 * sans préchargement : un préchargement dirait au serveur quels signes et quelles planètes la page affiche.
 */
export function ChartResult({ chart, titleRef, onEdit }: ChartResultProps) {
  const id = useId();
  const { input, positions, angles, houses, aspects, balance } = chart;
  const timeKnown = angles !== null && houses !== null;
  const majors = aspects.filter((aspect) => ASPECTS[aspect.key].family === "major");
  const minors = aspects.filter((aspect) => ASPECTS[aspect.key].family === "minor");
  const uncertain = CHART_POINT_KEYS.filter((key) => positions[key].signUncertain);
  const retrogrades = PLANET_KEYS.filter((key) => positions[key].motion === "retrograde");
  const utc = utcDateTime(input.utcMs);
  const ascendantSign = angles ? signOf(angles.ascendant) : null;

  const signLink = (sign: SignKey) => (
    <Link prefetch={false} href={signPath(sign)}>
      {SIGN_NAMES[sign].name}
    </Link>
  );
  const markedSign = (sign: SignKey, signUncertain: boolean) => (
    <>
      {signLink(sign)}
      {signUncertain ? S.uncertainInline : null}
    </>
  );
  const bigThree = S.bigThree(
    markedSign(positions.sun.sign, positions.sun.signUncertain),
    markedSign(positions.moon.sign, positions.moon.signUncertain),
    ascendantSign ? signLink(ascendantSign) : null,
  );

  const reading = (key: PlanetKey) => {
    const position = positions[key];
    const { sign, house } = position;
    return (
      <li key={key}>
        {R.sentence(
          POINT_NAMES[key].the,
          R.planetDomain[key],
          SIGN_NAMES[sign].of,
          R.signManner[sign],
          timeKnown && house !== null ? R.houseArea[house] : null,
        )}
        {position.signUncertain ? S.uncertainHint(towardNextSign(position)) : null}
      </li>
    );
  };

  const wheelAspects = majors.flatMap((aspect) => {
    const a = aspectLongitude(chart, aspect.a);
    const b = aspectLongitude(chart, aspect.b);
    return a === null || b === null ? [] : [{ a, b, key: aspect.key }];
  });
  const [astre, position, house, motion] = S.positionHeaders;

  const editButton = (
    <button type="button" className="bouton bouton-second" onClick={onEdit}>
      {S.editInput}
    </button>
  );

  return (
    <section className={styles.result} aria-labelledby={`${id}-titre`}>
      <header className={styles.resultHead}>
        <h2 id={`${id}-titre`} ref={titleRef} tabIndex={-1} className={styles.resultTitle}>
          {S.resultTitle}
        </h2>
        <p className={styles.birth}>
          {S.birth(longDate(input.local), input.timeKnown ? clockTime(input.local) : null, placeOf(chart))}
        </p>
        <p className={styles.bigThree}>
          {bigThree.map((part, index) => (
            <Fragment key={index}>{part}</Fragment>
          ))}
        </p>
        <div className={styles.submitRow}>
          {editButton}
          <p className={styles.privacy}>{S.notKept}</p>
        </div>
      </header>

      <section className={`${styles.block} ${styles.reading}`} aria-labelledby={`${id}-lecture`}>
        <h3 id={`${id}-lecture`}>{R.title}</h3>
        <p>{R.intro}</p>
        <p className={styles.caveat}>{R.caveat}</p>
        <ul>
          {FIRST_READ.map(reading)}
          {angles !== null && ascendantSign !== null ? (
            <li>{R.ascendantSentence(SIGN_NAMES[ascendantSign].of, R.signManner[ascendantSign])}</li>
          ) : null}
        </ul>
        <h4 className={styles.subTitle}>{S.otherPlanets}</h4>
        <NatalDetails subject={S.otherPlanets}>
          <ul>{PLANET_KEYS.filter((key) => !FIRST_READ.includes(key)).map(reading)}</ul>
        </NatalDetails>
        {majors.length > 0 ? (
          <>
            <h4 className={styles.subTitle}>{S.readingAspects}</h4>
            <ul>
              {majors.slice(0, READING_ASPECTS).map((aspect) => (
                <li key={`${aspect.a}-${aspect.b}`}>
                  {R.aspectSentence(
                    POINT_NAMES[aspect.a].the,
                    POINT_NAMES[aspect.b].the,
                    R.aspectNature[ASPECTS[aspect.key].nature],
                    ASPECT_NAMES[aspect.key].toLocaleLowerCase("fr-FR"),
                  )}
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </section>

      <section className={styles.block} aria-labelledby={`${id}-roue-titre`}>
        <h3 id={`${id}-roue-titre`}>{S.wheelTitle}</h3>
        <div className={styles.wheel}>
          <ZodiacWheel
            titleId={`${id}-roue`}
            title={S.wheelLabel(timeKnown)}
            descriptionId={`${id}-positions`}
            leftLongitude={angles?.ascendant ?? 0}
            cusps={houses?.cusps}
            angles={angles ?? undefined}
            points={CHART_POINT_KEYS.map((key) => ({
              key,
              longitude: positions[key].longitude,
              retrograde: positions[key].motion === "retrograde",
            }))}
            aspects={wheelAspects}
          />
        </div>
      </section>

      <Block title={S.positionsTitle} lead={S.positionsSummary(retrogrades.map((key) => POINT_NAMES[key].name))}>
        <div className={demo.tableWrap} role="group" aria-labelledby={`${id}-positions-titre`} tabIndex={0}>
          <table id={`${id}-positions`} className={demo.table}>
            <caption id={`${id}-positions-titre`}>{S.positionsTitle}</caption>
            <thead>
              <tr>
                <th scope="col">{astre}</th>
                <th scope="col">{position}</th>
                {timeKnown ? <th scope="col">{house}</th> : null}
                <th scope="col">
                  <Term entry={LEXICON.motion}>{motion}</Term>
                </th>
              </tr>
            </thead>
            <tbody>
              {CHART_POINT_KEYS.map((key) => {
                const point = positions[key];
                return (
                  <tr key={key}>
                    <th scope="row">
                      <span className={styles.name}>
                        <Glyph name={key} size={20} className={styles.glyph} />
                        {isPlanetKey(key) ? (
                          <Link prefetch={false} href={planetPath(key)}>
                            {POINT_NAMES[key].name}
                          </Link>
                        ) : (
                          POINT_NAMES[key].name
                        )}
                      </span>
                    </th>
                    <td>
                      {formatPosition(point.longitude)}
                      {point.signUncertain ? <span className={styles.mark}>{S.uncertain}</span> : null}
                    </td>
                    {timeKnown ? (
                      <td>
                        {point.house === null ? null : (
                          <Link
                            prefetch={false}
                            href={housePath(point.house)}
                            aria-label={S.house(houseRoman(point.house))}
                          >
                            {houseRoman(point.house)}
                          </Link>
                        )}
                      </td>
                    ) : null}
                    <td>{point.stationary ? S.motion.stationary : S.motion[point.motion]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Block>

      <Block title={S.aspectsTitle} lead={majors.length > 0 ? S.aspectsSummary(majors.length, minors.length) : S.noAspect}>
        {majors.length > 0 ? <AspectTable aspects={majors} caption={S.majorAspects} /> : null}
        {minors.length > 0 ? <AspectTable aspects={minors} caption={S.minorAspects(minors.length)} /> : null}
      </Block>

      <Block
        title={S.balanceTitle}
        lead={
          <p>
            {S.dominantElements(balance.dominantElements.map((key) => ELEMENT_NAMES[key].name))}{" "}
            {S.dominantModalities(balance.dominantModalities.map((key) => MODALITY_NAMES[key].name))}
          </p>
        }
      >
        <div className={styles.balance}>
          <div>
            <h4 className={styles.subTitle}>{S.elements}</h4>
            <ul className={styles.bars}>
              {ELEMENT_KEYS.map((key) => {
                const members = PLANET_KEYS.filter((planet) => SIGNS[positions[planet].sign].element === key);
                return (
                  <li key={key} className={`${styles.bar} ${PIGMENT[key]}`}>
                    <span className={styles.barName}>{ELEMENT_NAMES[key].name}</span>
                    <span className={styles.track} aria-hidden="true">
                      <span className={styles.fill} style={{ width: share(balance.elements[key]) }} />
                    </span>
                    <span className={styles.count}>{balance.elements[key]}</span>
                    {members.length > 0 ? (
                      <span className={styles.members}>{S.list(members.map((planet) => POINT_NAMES[planet].name))}</span>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h4 className={styles.subTitle}>{S.modalities}</h4>
            <ul className={styles.bars}>
              {MODALITY_KEYS.map((key) => {
                const members = PLANET_KEYS.filter((planet) => SIGNS[positions[planet].sign].modality === key);
                return (
                  <li key={key} className={styles.bar}>
                    <span className={styles.barName}>{MODALITY_NAMES[key].name}</span>
                    <span className={styles.track} aria-hidden="true">
                      <span className={styles.fill} style={{ width: share(balance.modalities[key]) }} />
                    </span>
                    <span className={styles.count}>{balance.modalities[key]}</span>
                    {members.length > 0 ? (
                      <span className={styles.members}>{S.list(members.map((planet) => POINT_NAMES[planet].name))}</span>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Block>

      {angles !== null && houses !== null ? (
        <Block
          title={S.housesTitle}
          lead={S.housesSummary(
            HOUSE_SYSTEM_NAMES[houses.used],
            formatPosition(angles.ascendant),
            formatPosition(angles.midheaven),
          )}
        >
          <div className={demo.tableWrap}>
            <table className={demo.table} aria-label={S.cusps(HOUSE_SYSTEM_NAMES[houses.used])}>
              <thead>
                <tr>
                  <th scope="col">{S.cuspHeaders[0]}</th>
                  <th scope="col">
                    <Term entry={LEXICON.cusp}>{S.cuspHeaders[1]}</Term>
                  </th>
                </tr>
              </thead>
              <tbody>
                {HOUSE_NUMBERS.map((number) => (
                  <tr key={number}>
                    <th scope="row">
                      <Link prefetch={false} href={housePath(number)} aria-label={S.house(houseRoman(number))}>
                        {houseRoman(number)}
                      </Link>
                    </th>
                    <td>{formatPosition(houses.cusps[number - 1])}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Block>
      ) : null}

      <section className={styles.block} aria-labelledby={`${id}-notes`}>
        <h3 id={`${id}-notes`}>{S.notesTitle}</h3>
        <ul className={styles.notes}>
          {timeKnown ? null : <li>{S.noteTimeUnknown}</li>}
          {uncertain.length > 0 ? <li>{S.noteUncertain(uncertain.map((key) => POINT_NAMES[key].name))}</li> : null}
          {input.zoneHistoryUncertain && input.timeZone !== null ? <li>{S.noteZone(input.timeZone)}</li> : null}
          {houses?.fallback ? <li>{S.noteFallback(houses.fallback.reason === "polar-latitude")}</li> : null}
          <li>{S.noteInstant(utc.date, utc.time, clockOffset(input.offsetSeconds), input.offsetSource === "manual")}</li>
        </ul>
      </section>

      <p>{editButton}</p>
    </section>
  );
}
