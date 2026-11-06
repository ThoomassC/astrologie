"use client";

import { useId, useState } from "react";
import { useSettledValue } from "@/components/wheel/useSettledValue";
import { ZodiacWheel } from "@/components/wheel/ZodiacWheel";
import { SIGN_NAMES } from "@/i18n/names";
import { formatPosition } from "@/i18n/positions";
import { computeAngles } from "@/lib/astro/angles";
import { computeHouses } from "@/lib/astro/houses";
import { HOUSE_SYSTEM_KEYS, type HouseSystemKey } from "@/lib/astro/keys";
import { signOf } from "@/lib/astro/zodiac";
import { HOUSES_STRINGS as S } from "./houses.strings";
import { InfoTip } from "@/components/text/InfoTip";
import styles from "@/components/wheel/demo.module.css";

/** Obliquité de l'écliptique, à peu près celle d'aujourd'hui. */
const OBLIQUITY = 23.44;

const decimal = (n: number, digits = 1) =>
  new Intl.NumberFormat("fr-FR", { maximumFractionDigits: digits, minimumFractionDigits: digits }).format(n);

/**
 * Démonstration des systèmes de maisons : un système, une latitude, un moment de la journée (l'heure sidérale). Calcul
 * pur (angles et maisons), sans éphémérides : la roue se redessine à chaque réglage, et un résumé parlé dit le
 * résultat une fois le curseur arrêté (pas à chaque cran).
 */
export function HouseSystemsDemo() {
  const id = useId();
  const [system, setSystem] = useState<HouseSystemKey>("placidus");
  const [latitude, setLatitude] = useState(48.9);
  const [ramc, setRamc] = useState(300);

  const frame = { ramcDeg: ramc, obliquityDeg: OBLIQUITY, latitudeDeg: latitude };
  const angles = computeAngles(frame);
  const houses = computeHouses(system, frame, angles);
  const latitudeText = S.latitudeValue(decimal(Math.abs(latitude)), latitude >= 0 ? "N" : "S");
  const usedName = S.systems[houses.used];
  const hours = Math.floor(ramc / 15);
  const minutes = Math.round((ramc / 15 - hours) * 60) % 60;
  const skyText = S.skyValue(SIGN_NAMES[signOf(angles.ascendant)].name, hours, minutes);
  const status = useSettledValue(
    houses.fallback ? S.fallback(latitudeText) : S.summary(usedName, formatPosition(angles.ascendant), formatPosition(angles.midheaven)),
  );

  return (
    <section className={styles.demo} aria-labelledby={`${id}-titre`}>
      <div className={styles.titleRow}>
        <h2 id={`${id}-titre`} className={styles.demoTitle}>
          {S.title}
        </h2>
        <InfoTip subject={S.title}>{S.intro}</InfoTip>
      </div>
      <div className={styles.demoGrid}>
        <div className={styles.demoWheel}>
          <ZodiacWheel
            titleId={`${id}-roue`}
            title={S.wheelTitle(usedName, latitudeText)}
            descriptionId={`${id}-table`}
            leftLongitude={angles.ascendant}
            cusps={houses.cusps}
            angles={angles}
          />
        </div>
        <div className={styles.controls}>
          <fieldset className={styles.fieldset}>
            <legend>{S.systemLegend}</legend>
            <div className={styles.segmented}>
              {HOUSE_SYSTEM_KEYS.map((key) => (
                <label key={key} className={styles.segment}>
                  <input
                    type="radio"
                    name={`${id}-systeme`}
                    value={key}
                    checked={system === key}
                    onChange={() => setSystem(key)}
                  />
                  <span>{S.systems[key]}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className={styles.field}>
            <label htmlFor={`${id}-latitude`}>{S.latitude}</label>
            <input
              id={`${id}-latitude`}
              type="range"
              min={-75}
              max={75}
              step={0.1}
              value={latitude}
              onChange={(event) => setLatitude(Number(event.target.value))}
              aria-valuetext={latitudeText}
            />
            <output htmlFor={`${id}-latitude`} aria-hidden="true">
              {latitudeText}
            </output>
            <div className={styles.presets} role="group" aria-label={S.presetsLabel}>
              {S.presets.map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  className={styles.preset}
                  aria-pressed={Math.abs(latitude - preset.latitude) < 0.05}
                  onClick={() => setLatitude(preset.latitude)}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor={`${id}-ciel`}>{S.sky}</label>
            <input
              id={`${id}-ciel`}
              type="range"
              min={0}
              max={359}
              step={1}
              value={ramc}
              onChange={(event) => setRamc(Number(event.target.value))}
              aria-valuetext={skyText}
              aria-describedby={`${id}-aide`}
            />
            <output htmlFor={`${id}-ciel`} aria-hidden="true">
              {skyText}
            </output>
            <InfoTip subject={S.sky} id={`${id}-aide`}>
              {S.skyHelp}
            </InfoTip>
          </div>

          <p className={styles.status} aria-live="polite">
            {status}
          </p>
        </div>
      </div>

      <div className={styles.tableWrap} role="group" aria-labelledby={`${id}-legende`} tabIndex={0}>
        <table id={`${id}-table`} className={styles.table}>
          <caption id={`${id}-legende`}>{S.tableCaption}</caption>
          <thead>
            <tr>
              {S.headers.map((header) => (
                <th key={header} scope="col">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {houses.cusps.map((cusp, i) => {
              const next = houses.cusps[(i + 1) % 12];
              const size = (((next - cusp) % 360) + 360) % 360;
              return (
                <tr key={i}>
                  <th scope="row">{S.house(i + 1)}</th>
                  <td>{formatPosition(cusp)}</td>
                  <td>{S.size(decimal(size))}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
