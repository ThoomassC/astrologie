import { PLANETS_FR } from "./fr";
import type { PlanetsContent } from "./types";

/** Textes des planètes (serveur seulement). */
export function getPlanetsContent(): PlanetsContent {
  return PLANETS_FR;
}
