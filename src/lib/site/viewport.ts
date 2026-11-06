import type { Viewport } from "next";

/**
 * Fenêtre du site : couleur de la barre du navigateur selon le thème du système (le choix manuel de la bascule ne la
 * suit pas : limite acceptée), contrôles natifs clairs ou sombres, page étendue sous les encoches.
 */
export const SITE_VIEWPORT: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e9ecf3" },
    { media: "(prefers-color-scheme: dark)", color: "#0c1332" },
  ],
  colorScheme: "light dark",
  viewportFit: "cover",
};
