/**
 * Thèmes du site : « jour » (papier azuré) et « nuit » (nuit de lapis). Sans choix gardé, le site suit le système
 * (`prefers-color-scheme`) ; un choix de la bascule est gardé dans `localStorage` et posé sur `<html data-theme>`.
 */
export const THEMES = ["jour", "nuit"] as const;
export type Theme = (typeof THEMES)[number];

export const THEME_STORAGE_KEY = "astrologie:theme";

export function isTheme(value: unknown): value is Theme {
  return value === "jour" || value === "nuit";
}

/**
 * Script en ligne, exécuté dans `<head>` avant la première peinture : pose le thème gardé, s'il est valide. Il ne lève
 * jamais (stockage bloqué, navigation privée) : sans lui, le système décide.
 */
export const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem(${JSON.stringify(
  THEME_STORAGE_KEY,
)});if(t==="jour"||t==="nuit")document.documentElement.setAttribute("data-theme",t)}catch(e){}})();`;
