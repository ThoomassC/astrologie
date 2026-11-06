import Link from "next/link";
import type { ReactNode } from "react";
import { getCommonContent } from "@/content/common/content";
import type { Locale } from "@/i18n/locales";
import styles from "./text.module.css";

export interface Crumb {
  readonly label: string;
  readonly href: string;
}

/** En-tête d'une page : fil d'Ariane (facultatif), titre, chapeau. */
export function PageHeader({
  title,
  lead,
  crumbs,
  locale,
  children,
}: {
  title: ReactNode;
  locale: Locale;
  lead?: string;
  crumbs?: readonly Crumb[];
  children?: ReactNode;
}) {
  return (
    <header className={styles.pageHead}>
      {crumbs && crumbs.length > 0 ? (
        <nav className={styles.breadcrumb} aria-label={getCommonContent(locale).breadcrumbLabel}>
          <ol>
            {crumbs.map((crumb) => (
              <li key={crumb.href}>
                <Link href={crumb.href}>{crumb.label}</Link>
              </li>
            ))}
          </ol>
        </nav>
      ) : null}
      <h1 className={styles.pageTitle}>{title}</h1>
      {lead ? <p className={styles.lead}>{lead}</p> : null}
      {children}
    </header>
  );
}
