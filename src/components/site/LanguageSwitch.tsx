"use client";

import { usePathname } from "next/navigation";
import { type MouseEvent, useEffect, useState } from "react";
import { useLocale } from "@/i18n/LocaleProvider";
import { LOCALE_COOKIE, LOCALE_COOKIE_MAX_AGE_S, LOCALES, otherLocale, type Locale } from "@/i18n/locales";
import { switchLocale } from "@/lib/site/routes";
import { Flag } from "./flags";
import styles from "./SiteHeader.module.css";
import { SITE_STRINGS } from "./site.strings";

/**
 * Retient la langue choisie, que le proxy lit sur les chemins sans langue : cookie posé seulement sur action de la
 * personne, pour un an, sur tout le site, jamais envoyé depuis un autre site, et réservé à https quand la page l'est.
 */
function rememberLocale(locale: Locale): void {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${LOCALE_COOKIE}=${locale}; Path=/; Max-Age=${LOCALE_COOKIE_MAX_AGE_S}; SameSite=Lax${secure}`;
}

/** Clic qui ouvre le lien ailleurs (nouvel onglet, nouvelle fenêtre) : touche de modification ou autre bouton. */
function opensElsewhere(event: MouseEvent): boolean {
  return event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
}

/**
 * Bascule de langue : une pilule à deux drapeaux, dont un bouton glissant couvre la langue de la page. C'est un lien
 * `<a>` simple vers la même page dans l'autre langue (il fonctionne sans JavaScript ; la langue est le paramètre
 * racine, la page se recharge). Son nom accessible est celui de la version visée, dans sa langue (`lang`,
 * `hrefLang`) : « English version », « Version française ». Au clic, le cookie `lang` retient le choix, le lien
 * reçoit l'ancre affichée (« #maison-4 » : les ancres sont les mêmes dans les deux langues) et le bouton glisse vers
 * l'autre drapeau (sans transition en mouvement réduit). `variant="menu"` : la ligne du menu replié, avec le nom écrit à côté de la pilule.
 */
export function LanguageSwitch({ variant = "bar" }: { variant?: "bar" | "menu" }) {
  const locale = useLocale();
  const pathname = usePathname();
  const target = otherLocale(locale);
  const href = switchLocale(pathname, target);
  const name = SITE_STRINGS[target].languageVersion;
  /** Le bouton glisse vers l'autre drapeau pendant que la page de l'autre langue se charge. */
  const [switching, setSwitching] = useState(false);

  // Page rendue par le cache arrière du navigateur (bouton Précédent) : le bouton revient sur la langue affichée.
  useEffect(() => {
    const reset = (event: PageTransitionEvent) => {
      if (event.persisted) setSwitching(false);
    };
    window.addEventListener("pageshow", reset);
    return () => window.removeEventListener("pageshow", reset);
  }, []);

  const follow = (event: MouseEvent<HTMLAnchorElement>) => {
    rememberLocale(target);
    if (opensElsewhere(event)) return;
    // L'ancre affichée, lue au moment du clic (elle change sans prévenir React) : on arrive au même endroit.
    event.currentTarget.setAttribute("href", `${href}${window.location.hash}`);
    setSwitching(true);
  };

  const pill = (
    <span className={styles.langTrack} data-active={switching ? target : locale} aria-hidden="true">
      <span className={styles.langKnob} />
      {LOCALES.map((flag) => (
        <span key={flag} className={styles.langFlag} data-current={flag === locale ? "" : undefined}>
          <Flag locale={flag} />
        </span>
      ))}
    </span>
  );

  return variant === "bar" ? (
    <a className={styles.langSwitch} href={href} hrefLang={target} lang={target} aria-label={name} title={name} onClick={follow}>
      {pill}
    </a>
  ) : (
    <a className={styles.langLine} href={href} hrefLang={target} lang={target} onClick={follow}>
      {pill}
      <span>{name}</span>
    </a>
  );
}
