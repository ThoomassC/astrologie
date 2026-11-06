import type { HistoryImageKey } from "@/content/history/types";
import type { PlanetKey, SignKey } from "@/lib/astro/keys";

export interface ImageCredit {
  /** Titre de l'œuvre, dans sa langue (« Aries and Musca Borealis »). */
  readonly title: string;
  readonly author: string;
  /** Recueil, lieu, date, institution, restauration. */
  readonly origin: string;
  readonly license: string;
  readonly licenseHref: `https://${string}`;
  readonly pageHref: `https://${string}`;
}

export interface ImagesContent {
  readonly signs: Readonly<Record<SignKey, ImageCredit>>;
  readonly history: Readonly<Record<HistoryImageKey, ImageCredit>>;
  readonly planetMaps: Readonly<Record<PlanetKey, ImageCredit>>;
  readonly zodiacalLight: ImageCredit & { readonly alt: string; readonly caption: string };
  readonly paper: ImageCredit;
}
