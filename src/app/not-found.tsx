import Link from "next/link";
import { getCommonContent } from "@/content/common/content";
import { MAIN_ID } from "@/lib/site/ids";
import styles from "./not-found.module.css";

/** 404 : une adresse qu'aucune page ne sert, ou un signe ou une planète inconnus. */
export default function NotFound() {
  const { notFound } = getCommonContent();
  return (
    <main id={MAIN_ID} tabIndex={-1} className={styles.main}>
      <h1>{notFound.title}</h1>
      <p>{notFound.text}</p>
      <p>
        <Link href="/">{notFound.back}</Link>
      </p>
    </main>
  );
}
