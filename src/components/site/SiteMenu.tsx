"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { NavLinks } from "./NavLinks";
import styles from "./SiteHeader.module.css";
import { SITE_STRINGS } from "./site.strings";

/**
 * Menu replié des petits écrans : un `<details>` natif (il s'ouvre et se ferme sans JavaScript). Avec JavaScript, il
 * se referme après une navigation, sur Échap (le focus revient au bouton), sur un clic hors du menu et quand le focus
 * en sort (tabulation). Un focus parti nulle part (clic sur le fond du panneau, fenêtre quittée) le laisse ouvert.
 */
export function SiteMenu() {
  const ref = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (ref.current) ref.current.open = false;
  }, [pathname]);

  useEffect(() => {
    const details = ref.current;
    if (!details) return;
    const close = () => {
      details.open = false;
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && details.open) {
        close();
        details.querySelector("summary")?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (details.open && event.target instanceof Node && !details.contains(event.target)) close();
    };
    const onFocusOut = (event: FocusEvent) => {
      const next = event.relatedTarget;
      if (details.open && next instanceof Node && !details.contains(next)) close();
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    details.addEventListener("focusout", onFocusOut);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      details.removeEventListener("focusout", onFocusOut);
    };
  }, []);

  return (
    <details ref={ref} className={styles.menu}>
      <summary className={styles.menuButton}>
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
        {SITE_STRINGS.menu}
      </summary>
      <nav className={styles.menuPanel} aria-label={SITE_STRINGS.navLabel}>
        <NavLinks className={styles.menuLinks} onNavigate={() => ref.current?.removeAttribute("open")} />
      </nav>
    </details>
  );
}
