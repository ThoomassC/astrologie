import Image, { type StaticImageData } from "next/image";
import { getCommonContent } from "@/content/common/content";
import { creditLine } from "@/content/images/content";
import type { ImageCredit } from "@/content/images/types";
import type { Locale } from "@/i18n/locales";
import { InfoTip } from "./InfoTip";
import styles from "./text.module.css";

interface EstampeProps {
  image: StaticImageData;
  alt: string;
  caption?: string;
  credit: ImageCredit;
  locale: Locale;
  /** Largeurs d'affichage, pour que Next serve la bonne taille (`sizes` de <img>). */
  sizes: string;
  priority?: boolean;
  className?: string;
}

/** Estampe : image dans un passe-partout fileté d'or, légende, puis crédit et licence avec lien vers la source. */
export function Estampe({ image, alt, caption, credit, locale, sizes, priority = false, className }: EstampeProps) {
  const { imageSource, imageCredit } = getCommonContent(locale);
  return (
    <figure className={`${styles.estampe} ${className ?? ""}`}>
      <div className={styles.mat}>
        <Image src={image} alt={alt} sizes={sizes} placeholder="blur" priority={priority} />
      </div>
      <figcaption>
        {caption ? <span className={styles.caption}>{caption}</span> : null}
        <InfoTip subject={imageCredit}>
          {creditLine(credit, locale)}{" "}
          <a href={credit.pageHref} rel="noopener">
            {imageSource}
          </a>
        </InfoTip>
      </figcaption>
    </figure>
  );
}
