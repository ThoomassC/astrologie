"use client";

import { useEffect, useState } from "react";

/**
 * La valeur, une fois qu'elle ne bouge plus depuis `delayMs` : un curseur qu'on fait glisser ne fait pas lire un
 * résumé à chaque cran (région `aria-live`), seulement celui où il s'arrête. Minuterie annulée à chaque changement.
 */
export function useSettledValue<T>(value: T, delayMs = 500): T {
  const [settled, setSettled] = useState(value);
  useEffect(() => {
    const timer = window.setTimeout(() => setSettled(value), delayMs);
    return () => window.clearTimeout(timer);
  }, [value, delayMs]);
  return settled;
}
