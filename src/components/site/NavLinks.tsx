"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SECTION_PATHS, type SectionKey } from "@/lib/site/routes";
import { SITE_STRINGS } from "./site.strings";

const NAV_KEYS = ["signs", "planets", "houses", "aspects", "natal", "history", "science", "lexicon"] as const satisfies readonly SectionKey[];

/** La section d'une adresse : « /signes/belier » est dans « Signes ». */
export function isInSection(pathname: string, section: SectionKey): boolean {
  const path = SECTION_PATHS[section];
  return pathname === path || pathname.startsWith(`${path}/`);
}

/** Onglets du site ; l'onglet de la page affichée porte `aria-current="page"` (ou "true" sur une sous-page). */
export function NavLinks({ className, onNavigate }: { className?: string; onNavigate?: () => void }) {
  const pathname = usePathname();
  return (
    <ul className={className}>
      {NAV_KEYS.map((key) => {
        const path = SECTION_PATHS[key];
        const current = pathname === path ? "page" : isInSection(pathname, key) ? "true" : undefined;
        return (
          <li key={key}>
            <Link href={path} aria-current={current} onClick={onNavigate}>
              {SITE_STRINGS.nav[key]}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
