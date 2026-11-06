import { getCommonContent } from "@/content/common/content";
import { NotFoundMessage, type NotFoundTexts } from "./NotFoundMessage";

/**
 * 404 d'un signe ou d'une planète inconnus (`notFound()` d'une page sous `[lang]`). Next ne donne pas les paramètres
 * à ce fichier : les textes des deux langues partent en prop (un petit DTO, le contenu reste sur le serveur) et le
 * composant client garde celui de la langue de la page, que pose le layout.
 */
export default function NotFound() {
  const texts: NotFoundTexts = { fr: getCommonContent("fr").notFound, en: getCommonContent("en").notFound };
  return <NotFoundMessage texts={texts} />;
}
