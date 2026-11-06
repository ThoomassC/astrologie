"use client";

import { useLayoutEffect, useSyncExternalStore } from "react";
import { isTheme, THEME_STORAGE_KEY, type Theme } from "@/lib/site/theme";
import styles from "./SiteHeader.module.css";
import { SITE_STRINGS } from "./site.strings";

const DARK_QUERY = "(prefers-color-scheme: dark)";

function systemTheme(): Theme {
  return window.matchMedia(DARK_QUERY).matches ? "nuit" : "jour";
}

function storedTheme(): Theme | null {
  try {
    const value = window.localStorage.getItem(THEME_STORAGE_KEY);
    return isTheme(value) ? value : null;
  } catch {
    return null;
  }
}

/** Thème affiché : celui posé sur `<html data-theme>`, sinon celui du système. */
function effectiveTheme(): Theme {
  const attribute = document.documentElement.getAttribute("data-theme");
  return isTheme(attribute) ? attribute : systemTheme();
}

function subscribe(onChange: () => void): () => void {
  const media = window.matchMedia(DARK_QUERY);
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  media.addEventListener("change", onChange);
  return () => {
    observer.disconnect();
    media.removeEventListener("change", onChange);
  };
}

/** Pose un thème ; revenir au thème du système efface le choix gardé (le site suit de nouveau le système). */
function applyTheme(theme: Theme): void {
  const root = document.documentElement;
  try {
    if (theme === systemTheme()) {
      window.localStorage.removeItem(THEME_STORAGE_KEY);
      root.removeAttribute("data-theme");
    } else {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
      root.setAttribute("data-theme", theme);
    }
  } catch {
    root.setAttribute("data-theme", theme);
  }
}

function SunIcon() {
  return (
    <g>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M5.3 5.3l1.7 1.7M17 17l1.7 1.7M5.3 18.7 7 17M17 7l1.7-1.7" />
    </g>
  );
}

function MoonIcon() {
  return <path d="M15.5 3.6a8.6 8.6 0 1 0 4.9 14.1 7 7 0 0 1-4.9-14.1Z" />;
}

/**
 * Bascule jour / nuit : un bouton rond à nom fixe (« Thème nuit »), enfoncé (`aria-pressed`) quand la nuit est
 * affichée. Au serveur, le thème est inconnu (il dépend du système et du choix gardé) : pas d'état, lune dessinée.
 */
export function ThemeToggle() {
  const theme = useSyncExternalStore<Theme | null>(subscribe, effectiveTheme, () => null);

  // Le script en ligne a posé le choix gardé avant la peinture ; on le repose au montage, au cas où un remontage
  // (mode strict, navigation) aurait réécrit l'attribut de <html>.
  useLayoutEffect(() => {
    const stored = storedTheme();
    if (stored && document.documentElement.getAttribute("data-theme") !== stored) {
      document.documentElement.setAttribute("data-theme", stored);
    }
  }, []);

  return (
    <button
      type="button"
      className={styles.themeToggle}
      onClick={() => applyTheme(effectiveTheme() === "nuit" ? "jour" : "nuit")}
      aria-label={SITE_STRINGS.themeNight}
      aria-pressed={theme === null ? undefined : theme === "nuit"}
      title={SITE_STRINGS.themeNight}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {theme === "nuit" ? <SunIcon /> : <MoonIcon />}
      </svg>
    </button>
  );
}
