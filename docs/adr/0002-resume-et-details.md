# 0002 — Résumé simple, puis détails en `<details>` natif

- Statut : acceptée (2026-11-05)

## Contexte

La demande : « des résumés simples et des boutons de détails ». Les textes sont longs (douze signes à sept sections, dix astres à six sections, douze maisons, onze aspects, huit époques).

## Décision

- Chaque notion est un `Explained` (`src/content/explained.ts`) : un `summary` toujours visible (une à trois phrases), puis des `details`.
- Le bouton « Détails » est un **`<details>` natif** (`src/components/text/Details.tsx`) : il s'ouvre au clavier et à la souris sans JavaScript, ne demande aucune hydratation, et son contenu est dans le HTML (moteurs de recherche, recherche dans la page de Chrome). Son nom accessible dit de quoi (« Détails : le mythe du Bélier ») et devient « Masquer les détails » à l'ouverture.

## Écartées

- Bouton `aria-expanded` et panneau masqué en JavaScript (motif d'Astronomie) : un îlot client par section, soit des centaines d'hydratations pour du texte ; sans JavaScript, il faut tout déplier par une règle CSS.
