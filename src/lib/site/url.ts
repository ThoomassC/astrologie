/**
 * Adresse du site : celle de production sur Vercel (variable posée au build), sinon le serveur local. Seule source de
 * l'adresse absolue (métadonnées, plan du site, robots.txt). Module serveur : la variable n'est pas `NEXT_PUBLIC_`.
 */
export const SITE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3108";
