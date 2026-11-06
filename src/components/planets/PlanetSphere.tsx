import type { CSSProperties } from "react";
import type { PlanetKey } from "@/lib/astro/keys";
import { PLANET_MAPS } from "@/lib/site/images";
import styles from "./planets.module.css";

/**
 * Sphère d'un astre : sa carte équirectangulaire dans un disque, ombrée d'un terminateur (le Soleil rayonne au lieu
 * d'être ombré, Saturne a ses anneaux). Immobile ; elle tourne lentement au survol ou au focus de sa carte, jamais en
 * mouvement réduit.
 */
export function PlanetSphere({ planet, label, size = "100%" }: { planet: PlanetKey; label?: string; size?: string }) {
  const map = PLANET_MAPS[planet];
  return (
    <div
      className={`${styles.sphereBox} ${planet === "saturn" ? styles.ringed : ""}`}
      style={{ width: size } as CSSProperties}
      {...(label ? { role: "img", "aria-label": label } : { "aria-hidden": true })}
    >
      <div
        className={`${styles.sphere} ${planet === "sun" ? styles.star : ""}`}
        style={{ "--map": `url(${map.src})` } as CSSProperties}
      />
    </div>
  );
}
