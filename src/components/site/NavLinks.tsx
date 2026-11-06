"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/i18n/LocaleProvider";
import type { Locale } from "@/i18n/locales";
import { sectionPath, type SectionKey } from "@/lib/site/routes";
import { SITE_STRINGS } from "./site.strings";

const NAV_KEYS = ["signs", "planets", "houses", "aspects", "natal", "history", "science", "lexicon"] as const satisfies readonly SectionKey[];

/** La section d'une adresse : « /fr/signes/belier » est dans « Signes ». */
export function isInSection(pathname: string, section: SectionKey, locale: Locale): boolean {
  const path = sectionPath(section, locale);
  return pathname === path || pathname.startsWith(`${path}/`);
}

/** Onglets du site ; l'onglet de la page affichée porte `aria-current="page"` (ou "true" sur une sous-page). */
export function NavLinks({ className, onNavigate }: { className?: string; onNavigate?: () => void }) {
  const locale = useLocale();
  const pathname = usePathname();
  return (
    <ul className={className}>
      {NAV_KEYS.map((key) => {
        const path = sectionPath(key, locale);
        const current = pathname === path ? "page" : isInSection(pathname, key, locale) ? "true" : undefined;
        return (
          <li key={key}>
            <Link href={path} aria-current={current} onClick={onNavigate}>
              {SITE_STRINGS[locale].nav[key]}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
