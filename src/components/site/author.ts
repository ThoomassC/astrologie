/**
 * L'auteur du site et ses adresses publiques, les mêmes que sur Astronomie (site frère) : rien d'autre, ni téléphone
 * ni adresse postale. Le pied de page commun les affiche.
 */
export const AUTHOR = {
  name: "Thomas Caron",
  github: "https://github.com/ThoomassC",
  linkedin: "https://www.linkedin.com/in/thomas-caron27/",
  email: "caronthomas27@gmail.com",
} as const;

/** Site frère, sur l'astronomie. */
export const SISTER_SITE = "https://astronomie.vercel.app";

/** Dépôt public du site. */
export const REPOSITORY = "https://github.com/ThoomassC/astrologie";

/**
 * Année de la mention de droit d'auteur : celle de la première publication, écrite ici plutôt que lue sur l'horloge
 * (Cache Components refuse `new Date()` pendant le prérendu).
 */
export const COPYRIGHT_YEAR = 2026;
