import Link from "next/link";
import { BrandMark } from "./BrandMark";
import { NavLinks } from "./NavLinks";
import styles from "./SiteHeader.module.css";
import { SiteMenu } from "./SiteMenu";
import { SITE_STRINGS } from "./site.strings";
import { ThemeToggle } from "./ThemeToggle";

/** Barre commune : marque, onglets (ou « Menu » sur petit écran), bascule de thème. */
export function SiteHeader() {
  return (
    <header className={styles.bar}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label={SITE_STRINGS.brandHome}>
          <BrandMark />
          <span className={styles.brandName}>{SITE_STRINGS.brand}</span>
        </Link>
        <nav className={styles.nav} aria-label={SITE_STRINGS.navLabel}>
          <NavLinks className={styles.links} />
        </nav>
        <div className={styles.tools}>
          <ThemeToggle />
          <SiteMenu />
        </div>
      </div>
    </header>
  );
}
