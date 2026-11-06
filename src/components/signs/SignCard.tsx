import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Glyph } from "@/components/glyphs/Glyph";
import { formatMonthDay } from "@/i18n/dates";
import type { Locale } from "@/i18n/locales";
import { ELEMENT_NAMES, MODALITY_NAMES, POINT_NAMES, SIGN_NAMES } from "@/i18n/names";
import type { SignKey } from "@/lib/astro/keys";
import { SIGNS } from "@/lib/astro/signs";
import { SIGN_IMAGES } from "@/lib/site/images";
import { signPath } from "@/lib/site/routes";
import { ELEMENT_COLORS } from "./elementColors";
import styles from "./signs.module.css";

/**
 * Cartel d'un signe dans la galerie : la carte d'Urania's Mirror recadrée, puis glyphe, nom, dates, élément et
 * maître. Tout le cartel est le lien vers la fiche (le nom en est le texte).
 */
export function SignCard({ sign, keywords, locale }: { sign: SignKey; keywords: readonly string[]; locale: Locale }) {
  const data = SIGNS[sign];
  const name = SIGN_NAMES[locale][sign].name;
  return (
    <li className={styles.card}>
      <div className={styles.cardImage}>
        <Image src={SIGN_IMAGES[sign]} alt="" sizes="(min-width: 1100px) 22rem, (min-width: 640px) 45vw, 92vw" placeholder="blur" />
      </div>
      <div className={styles.cardBody}>
        <Glyph name={sign} size={34} className={styles.cardGlyph} />
        <h3 className={styles.cardName}>
          <Link href={signPath(sign, locale)} className={styles.cardLink}>
            {name}
          </Link>
        </h3>
        <p className={styles.cardDates}>
          {formatMonthDay(data.dates.start, locale)} – {formatMonthDay(data.dates.end, locale)}
        </p>
        <p className={styles.cardMeta}>
          <span className={styles.pastille} style={{ "--pastille": ELEMENT_COLORS[data.element] } as CSSProperties}>
            {ELEMENT_NAMES[locale][data.element].name}
          </span>
          <span>{MODALITY_NAMES[locale][data.modality].name}</span>
          <span>{POINT_NAMES[locale][data.rulers.traditional].name}</span>
        </p>
        <p className={styles.cardKeywords}>{keywords.slice(0, 3).join(", ")}</p>
      </div>
    </li>
  );
}
