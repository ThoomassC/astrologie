/** Bulle d'information « i » (composant client). */
export interface InfoStrings {
  label: (subject: string) => string;
}

export const INFO_STRINGS: InfoStrings = {
  label: (subject) => `Plus d'informations : ${subject}`,
};
