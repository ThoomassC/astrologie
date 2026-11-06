import type { Explained, PageHead, Titled } from "@/content/explained";

export interface NatalContent extends PageHead {
  readonly intro: Explained;
  /** Comment se construit un thème : date, heure, lieu, puis positions, maisons, aspects. */
  readonly method: Titled;
  /** Comment lire une position : astre (quoi), signe (comment), maison (où), aspects (avec qui). */
  readonly reading: Titled;
  /** Précision du calcul et de l'heure de naissance ; fuseaux anciens. */
  readonly accuracy: Titled;
  /** Les données restent dans le navigateur. */
  readonly privacy: Titled;
}
