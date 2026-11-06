import Link from "next/link";
import type { Locale } from "@/i18n/locales";
import { sectionPath } from "@/lib/site/routes";
import { BrandMark } from "./BrandMark";
import { LanguageSwitch } from "./LanguageSwitch";
import { NavLinks } from "./NavLinks";
import styles from "./SiteHeader.module.css";
import { SiteMenu } from "./SiteMenu";
import { SITE_STRINGS } from "./site.strings";
import { ThemeToggle } from "./ThemeToggle";

/** Barre commune : marque, onglets (ou « Menu » sur petit écran), bascules de thème et de langue. */
export function SiteHeader({ locale }: { locale: Locale }) {
  const s = SITE_STRINGS[locale];
  return (
    <header className={styles.bar}>
      <div className={styles.inner}>
        <Link href={sectionPath("home", locale)} className={styles.brand} aria-label={s.brandHome}>
          <BrandMark />
          <span className={styles.brandName}>{s.brand}</span>
        </Link>
        <nav className={styles.nav} aria-label={s.navLabel}>
          <NavLinks className={styles.links} />
        </nav>
        <div className={styles.tools}>
          <ThemeToggle />
          <LanguageSwitch />
          <SiteMenu />
        </div>
      </div>
    </header>
  );
}
