"use client";

import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import { useLocale } from "@/i18n/LocaleProvider";
import type { Locale } from "@/i18n/locales";
import { SIGN_NAMES } from "@/i18n/names";
import type { ValidBirthInput } from "@/lib/astro/birthInput";
import type { NatalChart } from "@/lib/astro/chart";
import type { SignKey } from "@/lib/astro/keys";
import { signOf } from "@/lib/astro/zodiac";
import { BirthForm } from "./BirthForm";
import { ChartResult } from "./ChartResult";
import { NATAL_STRINGS } from "./natal.strings";
import styles from "./natal.module.css";

/** Le moteur d'éphémérides (~21 Ko gzip) n'arrive qu'à la demande : au premier focus du formulaire, ou à l'envoi. */
const loadChart = () => import("@/lib/astro/chart");

type Phase =
  | { status: "form" }
  | { status: "computing" }
  /** Le moteur n'a pas pu se charger (réseau) : on peut réessayer la même saisie. */
  | { status: "loadFailed"; input: ValidBirthInput }
  /** Le calcul a levé une erreur : message neutre, la saisie est à revoir. */
  | { status: "computeFailed" }
  | { status: "result"; chart: NatalChart };

/** La phrase de synthèse en texte seul, pour l'annonce. */
function spokenSummary({ positions: { sun, moon }, angles }: NatalChart, locale: Locale): string {
  const S = NATAL_STRINGS[locale];
  const signs = SIGN_NAMES[locale];
  const name = (sign: SignKey, uncertain: boolean) => `${signs[sign].name}${uncertain ? S.uncertainInline : ""}`;
  return S.bigThree(
    name(sun.sign, sun.signUncertain),
    name(moon.sign, moon.signUncertain),
    angles ? signs[signOf(angles.ascendant)].name : null,
  ).join("");
}

/**
 * Calculateur du thème natal, entièrement dans le navigateur : le formulaire valide la saisie (`parseBirthInput`), le
 * moteur arrive par `import()`, et le thème prend la place du formulaire. Rien ne quitte la page : ni attribut `name`,
 * ni adresse, ni stockage. Sans JavaScript, un message remplace le formulaire (`@media (scripting: none)`).
 */
export function NatalCalculator() {
  const locale = useLocale();
  const S = NATAL_STRINGS[locale];
  const [phase, setPhase] = useState<Phase>({ status: "form" });
  /* Numéro du dernier calcul demandé : un calcul plus ancien qui finit après lui est ignoré. */
  const request = useRef(0);
  const dateRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  async function calculate(input: ValidBirthInput) {
    const ticket = ++request.current;
    setPhase({ status: "computing" });
    let engine: Awaited<ReturnType<typeof loadChart>>;
    try {
      engine = await loadChart();
    } catch {
      if (ticket === request.current) setPhase({ status: "loadFailed", input });
      return;
    }
    if (ticket !== request.current) return;
    let chart: NatalChart;
    try {
      chart = engine.computeNatalChart(input);
    } catch {
      setPhase({ status: "computeFailed" });
      return;
    }
    flushSync(() => setPhase({ status: "result", chart }));
    titleRef.current?.focus();
  }

  function startOver() {
    request.current++;
    flushSync(() => setPhase({ status: "form" }));
    dateRef.current?.focus();
  }

  function warmUp() {
    // Préchargement seulement : un échec ici sera repris, et dit, au moment du calcul.
    loadChart().catch(() => undefined);
  }

  const announcement =
    phase.status === "computing"
      ? S.computing
      : phase.status === "loadFailed"
        ? S.loadFailed
        : phase.status === "computeFailed"
          ? S.computeFailed
          : phase.status === "result"
          ? S.done(spokenSummary(phase.chart, locale))
          : "";
  const statusClass =
    phase.status === "computing"
      ? styles.status
      : phase.status === "loadFailed" || phase.status === "computeFailed"
        ? `${styles.status} ${styles.failed}`
        : "sr-only";

  return (
    <div className={styles.calculator}>
      <p className={styles.noScript}>{S.noScript}</p>
      <div className={styles.scripted}>
        <div hidden={phase.status === "result"}>
          <BirthForm dateRef={dateRef} onValid={(input) => void calculate(input)} onWarmUp={warmUp} />
        </div>
        <p role="status" aria-live="polite" className={statusClass}>
          {announcement}
        </p>
        {phase.status === "loadFailed" ? (
          <p>
            <button type="button" className="bouton bouton-second" onClick={() => void calculate(phase.input)}>
              {S.retry}
            </button>
          </p>
        ) : null}
        {phase.status === "result" ? (
          <ChartResult chart={phase.chart} titleRef={titleRef} onEdit={startOver} />
        ) : null}
      </div>
    </div>
  );
}
