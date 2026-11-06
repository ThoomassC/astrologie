import { ABOUT_FR } from "./fr";
import type { AboutContent } from "./types";

/** Textes de la page À propos (serveur seulement). */
export function getAboutContent(): AboutContent {
  return ABOUT_FR;
}
