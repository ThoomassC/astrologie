import { MAIN_ID } from "@/lib/site/ids";
import { SITE_STRINGS } from "./site.strings";

/** Lien d'évitement vers le contenu de la page (`main#contenu`), visible au focus (`.skip` de globals.css). */
export function SkipToContent() {
  return (
    <a className="skip" href={`#${MAIN_ID}`}>
      {SITE_STRINGS.skipToContent}
    </a>
  );
}
