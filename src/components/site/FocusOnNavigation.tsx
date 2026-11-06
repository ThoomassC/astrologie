"use client";

import { usePathname } from "next/navigation";
import { Suspense, useEffect, useRef } from "react";
import { MAIN_ID } from "@/lib/site/ids";
import { isShown, shownElements } from "@/lib/site/shown";

/** Le `main` de la page affichée (les pages quittées gardées sous <Activity> sont écartées). */
function shownMain(): HTMLElement | undefined {
  return shownElements(`main#${MAIN_ID}`)[0];
}

/**
 * Le focus est déjà dans le contenu de la page affichée : la page l'y a posé elle-même. Un focus resté dans la barre
 * ou le pied de page (l'onglet cliqué) ne compte pas : il doit rejoindre le contenu.
 */
function focusIsInShownMain(main: HTMLElement): boolean {
  const active = document.activeElement;
  return active !== null && active !== main && active.isConnected && main.contains(active) && isShown(active);
}

/** L'élément de la page affichée que désigne l'ancre de l'adresse (« /lexique#retrogradation »), s'il existe. */
function hashTarget(main: HTMLElement): HTMLElement | undefined {
  const raw = window.location.hash.slice(1);
  if (!raw) return undefined;
  let id: string;
  try {
    id = decodeURIComponent(raw);
  } catch {
    return undefined;
  }
  // Chaîne CSS entre guillemets : seuls le guillemet et la barre oblique inverse s'échappent (CSS.escape manque à jsdom).
  const quoted = id.replace(/["\\]/g, "\\$&");
  return shownElements(`[id="${quoted}"]`).find((element) => main.contains(element));
}

/** Donne le focus sans faire défiler ; vrai s'il a été pris (un élément sans tabIndex le refuse). */
function focusWithoutScroll(element: HTMLElement): boolean {
  element.focus({ preventScroll: true });
  return document.activeElement === element;
}

function MainFocus() {
  const pathname = usePathname();
  const focusedFor = useRef(pathname);

  useEffect(() => {
    if (pathname === focusedFor.current) return;
    focusedFor.current = pathname;
    const main = shownMain();
    if (!main) return;
    const target = hashTarget(main);
    if (target && focusWithoutScroll(target)) return;
    if (focusIsInShownMain(main)) return;
    main.focus({ preventScroll: true });
  }, [pathname]);

  return null;
}

/**
 * Focus après une navigation côté client : il rejoint l'élément que désigne l'ancre de l'adresse (cibles d'ancre en
 * tabIndex −1), sinon le contenu de la page affichée (`main#contenu`, tabIndex −1), d'où la tabulation et la lecture
 * reprennent. Next 16 ne déplace pas le focus, et garde jusqu'à trois pages quittées dans le DOM sous <Activity> :
 * seule la page affichée compte. Rien au premier chargement, ni quand une page a posé le focus dans son contenu. Le
 * défilement reste à Next (jusqu'à l'ancre, ou en haut). Rien à l'écran.
 */
export function FocusOnNavigation() {
  return (
    <Suspense fallback={null}>
      <MainFocus />
    </Suspense>
  );
}
