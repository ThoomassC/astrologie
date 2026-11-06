import type { Locale } from "@/i18n/locales";
import { creditLineEn, IMAGES_EN } from "./en";
import { creditLine as creditLineFr, IMAGES_FR } from "./fr";
import type { ImageCredit, ImagesContent } from "./types";

const CONTENT: Readonly<Record<Locale, ImagesContent>> = { fr: IMAGES_FR, en: IMAGES_EN };

const CREDIT_LINE: Readonly<Record<Locale, (credit: ImageCredit) => string>> = { fr: creditLineFr, en: creditLineEn };

/** Crédits et licences des images, dans une langue (serveur seulement). */
export function getImagesContent(locale: Locale): ImagesContent {
  return CONTENT[locale];
}

/** Ligne de crédit d'une image, prête à afficher, dans la langue de la page. */
export function creditLine(credit: ImageCredit, locale: Locale): string {
  return CREDIT_LINE[locale](credit);
}
