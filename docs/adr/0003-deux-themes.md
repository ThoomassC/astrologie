# 0003 — Deux thèmes, jour et nuit

- Statut : acceptée (2026-11-05)

## Contexte

Astronomie n'a qu'un monde, sombre. Astrologie est surtout de la lecture longue, illustrée de gravures sur papier.

## Décision

- **Jour** (papier azuré, encre de lapis) et **nuit** (nuit de lapis, texte vélin), mêmes jetons (`src/app/globals.css`).
- Sans choix, le site suit `prefers-color-scheme`. La bascule pose `data-theme` sur `<html>` et garde le choix dans `localStorage` ; revenir au thème du système efface le choix. Un script en ligne pose le thème avant la peinture (pas de flash) ; `<html suppressHydrationWarning>`.
- Les jetons sont écrits deux fois (bloc `[data-theme="nuit"]` et bloc `prefers-color-scheme`) plutôt qu'avec `light-dark()`, pour les navigateurs qui ne la connaissent pas.

## Limite acceptée

La couleur de la barre du navigateur (`themeColor`) suit le système, pas la bascule.
