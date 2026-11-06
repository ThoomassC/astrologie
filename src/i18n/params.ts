import { notFound } from "next/navigation";
import { isLocale, type Locale } from "./locales";

/**
 * Langue d'une route sous `[lang]`, lue dans ses paramètres ; une autre valeur que les langues du site donne la 404
 * (`notFound()` interrompt le rendu). Les pages et leurs métadonnées la lisent ainsi, puis la passent en prop.
 */
export async function localeFrom(params: Promise<{ lang: string }>): Promise<Locale> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return lang;
}
