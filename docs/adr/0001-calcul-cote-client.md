# 0001 — Calculer le thème et le ciel du jour dans le navigateur

- Statut : acceptée (2026-11-05)

## Contexte

Le site est prérendu (pages statiques, Cache Components). Deux écrans demandent des positions d'astres : le ciel du jour (l'instant de la visite) et le thème natal (une date de naissance). Une date, une heure et un lieu de naissance sont des données personnelles.

## Décision

- Les éphémérides viennent d'**astronomy-engine** (MIT), à quelques secondes d'arc des exemples de Meeus. Un seul module l'importe : `src/lib/astro/ephemeris.ts`.
- Le calcul se fait **dans le navigateur**. Les composants client n'atteignent le moteur que par `import()` (`@/lib/astro/sky`, `@/lib/astro/chart`) : environ 21 Ko gzip, chargés à la demande. Une garde (`src/i18n/boundaries.test.ts`) refuse tout import statique, même indirect.
- Le reste du calcul (zodiaque, angles, maisons, aspects, nœud, heure, saisie) est fait de **modules purs**, sans dépendance, testés par des propriétés (l'Ascendant reconverti en coordonnées horizontales est à l'horizon est ; les cuspides de Placidus vérifient la définition des demi-arcs).
- Les données de naissance ne quittent jamais l'appareil : pas d'attribut `name`, pas d'`action`, pas de Server Action, rien dans l'adresse ni dans le stockage.
- Les seules positions calculées au build sont les **passages du Soleil dans les constellations** (pages des signes), qui ne dépendent que de l'année.

## Écartées

- Positions figées au build (comme le planétaire d'Astronomie) : contraires à « ciel du jour ».
- Calcul côté serveur : il enverrait les données de naissance au serveur.
- Web Worker : inutile, un thème complet se calcule en moins d'une milliseconde.
- Éléments orbitaux képlériens du JPL (Astronomie) : insuffisants pour la Lune.
