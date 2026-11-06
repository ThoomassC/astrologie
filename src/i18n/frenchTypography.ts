/*
 * Typographie française du site (règle d'Astronomie) :
 * - espace fine insécable (U+202F) entre les milliers et avant « ; », « ! », « ? » ;
 * - espace insécable (U+00A0) avant « : » et à l'intérieur des guillemets « » ;
 * - jamais d'espace ordinaire à ces places : la ligne pourrait s'y couper.
 * Partagé par la garde (`frenchTypography.test.ts`) et le correcteur (`scripts/typographie.mjs`).
 */

export const NBSP = "\u00a0";
export const NNBSP = "\u202f";

/** Une place de la règle : l'espace attendue, l'espace fautive (premier groupe), la ponctuation sans espace. */
export interface SpacingPlace {
  readonly name: string;
  readonly expected: string;
  readonly wrong: RegExp;
  readonly missing?: RegExp;
}

/* `\s` comprend U+00A0 et U+202F : « \S » est un caractère visible. */
export const PLACES: readonly SpacingPlace[] = [
  { name: "entre les milliers", expected: NNBSP, wrong: /(?<=\d)([ \u00a0])(?=\d{3}(?!\d))/g },
  { name: "avant ; ! ?", expected: NNBSP, wrong: /([ \u00a0])(?=[;!?])/g, missing: /(?<=[^\s;!?(])[;!?](?=\s|$)/g },
  // Ni « 12:30 » ni « https:// » n'appellent d'espace.
  { name: "avant :", expected: NBSP, wrong: /([ \u202f])(?=:)/g, missing: /(?<=[^\s\d]):(?=\s|$)/g },
  { name: "après «", expected: NBSP, wrong: /(?<=«)([ \u202f])/g, missing: /«(?=\S)/g },
  { name: "avant »", expected: NBSP, wrong: /([ \u202f])(?=»)/g, missing: /(?<=\S)»/g },
];

/** Texte corrigé : chaque espace fautive remplacée, chaque espace manquante ajoutée. */
export function fixFrenchSpacing(text: string): string {
  let fixed = text;
  for (const { expected, wrong, missing } of PLACES) {
    fixed = fixed.replace(wrong, expected);
    if (missing) {
      fixed = fixed.replace(missing, (mark) => (mark === "«" ? `«${expected}` : `${expected}${mark}`));
    }
  }
  return fixed;
}
