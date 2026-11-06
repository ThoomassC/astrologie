# Astrologie — design system (MASTER)

> Généré le 2026-11-05 avec ui-ux-pro-max, puis **remplacé** : la proposition automatique (vert « catégorie »,
> Outfit / Work Sans, fond menthe clair) ne correspondait pas au sujet. Ce fichier fait foi pour les écrans suivants.
> Une page peut le surcharger via `pages/<page>.md`.

## Direction

**Lapis et or.** Les deux pigments de l'*Homme anatomique* des Très Riches Heures du duc de Berry (vers 1411-1416) :
le bleu outremer du lapis-lazuli et la feuille d'or, sur lesquels les enluminures posaient les signes du zodiaque.
Site frère d'Astronomie (laiton sur nuit) : même rigueur, même pile, mais un autre instrument, l'**astrolabe**, celui
qui servait à dresser les thèmes.

- Site pédagogique en français, grand public. L'astrologie y est présentée comme une tradition symbolique et
  culturelle : « selon la tradition », jamais « vous êtes ». La science a sa page et ses notes.
- **Deux thèmes**, qui suivent `prefers-color-scheme` et une bascule gardée dans `localStorage` (`theme`), posée avant
  la peinture par un script en ligne :
  - **Jour** : papier azuré, encre de lapis, filets d'or sombre ;
  - **Nuit** : nuit de lapis, texte vélin, filets d'or.
- L'élément fort : la **roue zodiacale** gravée (SVG). Tout le reste reste calme.
- Partout : un **résumé** simple d'abord, puis des **détails** à la demande (`<details>`).

## Couleurs

Jetons dans `src/app/globals.css` (`:root` pour le jour, `[data-theme="nuit"]` et `prefers-color-scheme: dark` pour
la nuit).

| Rôle | Jour | Nuit | Variable |
|------|------|------|----------|
| Fond | `#E9ECF3` papier azuré | `#0C1332` nuit de lapis | `--fond` |
| Plaque (panneaux, passe-partout) | `#F6F7FB` | `#141C46` | `--plaque` |
| Texte principal | `#18215B` encre de lapis | `#ECE6D6` vélin | `--encre` |
| Texte secondaire | `#4B5583` | `#A3ABCA` | `--encre-douce` |
| Traits gravés, glyphes | `#8E6B1C` or sombre | `#D7B663` or | `--or` |
| Texte doré (petits titres, chiffres) | `#7A5A12` | `#DDBD6E` | `--or-texte` |
| Interaction (liens, focus, boutons) | `#2B44C4` outremer | `#A9B9FF` | `--lapis` |
| Filet | encre à 16 % | vélin à 14 % | `--filet` |

**Pigments des éléments** (pastilles, roue, répartition du thème), ceux des enlumineurs :

| Élément | Pigment | Jour | Nuit | Variable |
|---|---|---|---|---|
| Feu | vermillon | `#B23A22` | `#F08A6E` | `--feu` |
| Terre | malachite | `#2F6B3C` | `#86C493` | `--terre` |
| Air | orpiment | `#8A6A0E` | `#E8C760` | `--air` |
| Eau | azurite | `#1F5F8C` | `#7DBCEB` | `--eau` |

Contrastes : texte ≥ 4,5:1 sur `--fond` et `--plaque` dans les deux thèmes ; traits, pastilles et glyphes ≥ 3:1.
Les aspects de la roue : harmonieux (trigone, sextile) en `--eau`, tendus (carré, opposition) en `--feu`,
conjonction en `--or`, mineurs en pointillés `--encre-douce`.

## Typographie

- **Titres** : IM Fell (Igino Marini, d'après les fontes données à Oxford par John Fell vers 1670 : l'époque où
  astronomie et astrologie se séparent). *French Canon* pour `h1`, `h2` et les noms de signes très grands ;
  *English* (romain et italique) pour `h3`, les accroches et les légendes. Une seule graisse : 400.
- **Texte et interface** : Atkinson Hyperlegible Next, comme Astronomie. Chiffres en `tabular-nums` dans les tableaux
  et le thème natal.
- **Glyphes** : dessinés en SVG (`src/components/glyphs/`), trait de 1,6 sur une grille de 32, bouts ronds, couleur
  `currentColor`. Jamais les caractères Unicode ♈︎ ☉ (rendu emoji sur iOS, dessin variable selon le système).
- Échelle (rem) : 0.8125 / 0.9375 / **1.0625 (texte)** / 1.25 / 1.625 / 2.25 / 3.25 / 4.5–6 (accueil, noms de signes).
  Interligne 1,6 pour le texte, 1,1 pour les titres. Colonne de lecture : 40 rem au plus (≈ 68 signes).
- Pas de capitales espacées pour les étiquettes, pas de police mono, pas de flèche « → » collée aux boutons.
- **Typographie française** sur tout texte affiché (règle d'Astronomie) : espace fine insécable (U+202F) avant « ; ! ? »
  et entre les milliers, espace insécable (U+00A0) avant « : » et dans les guillemets « », jamais d'espace ordinaire
  à ces places. Degrés : « 14° 32′ » (espace fine insécable entre degrés et minutes).

## Arrondis

Formes douces, pas d'angle vif (préférence exprimée sur Astronomie le 28/10/2026).

| Jeton | Valeur | Usage |
|------|--------|-------|
| `--r-pill` | 999 px | Boutons, pastilles, bascule de thème, onglets |
| `--r-lg` | 24 px | Plaques, encarts de résumé |
| `--r-md` | 16 px | Passe-partout des estampes, résumé du thème |
| `--r-sm` | 10 px | Champs, tableaux |
| `--r-xs` | 6 px | Contour de focus des liens de texte |

## Mise en page

- Gabarit : 72 rem au plus, gouttière de 16 px au moins (24 px dès 640 px).
- **Pages de lecture** : colonne de lecture (40 rem) + colonne de **manchettes** à droite (16 rem, dès 1 100 px) :
  notes en marge, comme dans les almanachs anciens (fiche du signe, « Le saviez-vous ? » de l'astronome, renvois au
  lexique). En dessous de 1 100 px, les manchettes passent dans le fil, en encart.
- Texte aligné à gauche, jamais justifié. Titres alignés à gauche, sauf le nom des fiches (centré sous le glyphe).

## Composants

- **Barre** : marque (petite roue gravée + « Astrologie » en Fell italique), onglets (Signes, Planètes, Maisons,
  Aspects, Votre thème, Histoire, Science, Lexique), bascule de thème (nom fixe « Thème nuit », `aria-pressed`). Sous 1 140 px, « Menu » regroupe les onglets ; sous 22,5 rem, le nom de la marque est masqué à l'œil.
  Fond `--fond` opaque, filet `--filet` dessous. Onglet courant : `aria-current="page"`, souligné d'or.
- **Résumé + Détails** : `h2` (Fell), résumé en 1,1875 rem `--encre`, puis `<details>` : le `summary` est une pilule
  filetée `--filet`, « Détails » + glyphe plus qui tourne en croix à l'ouverture ; nom accessible complet (« Détails :
  le mythe du Bélier ») ; ouvert, il dit « Masquer les détails ». Contenu en fondu de 200 ms (aucun en mouvement réduit).
  Sans JavaScript : natif, rien à hydrater.
- **Fiche** : grille `dt` / `dd` (élément, modalité, maître, exaltation, exil, chute, dates), `dt` en `--encre-douce`
  0,9375 rem, `dd` en `--encre`. Pastille de couleur devant l'élément.
- **Estampe** : image dans un passe-partout `--plaque` de 10 px, filet d'or 1 px, `--r-md` ; légende en Fell English
  italique, crédit en 0,8125 rem `--encre-douce`. `next/image` avec flou de chargement. Les couleurs des gravures ne
  sont jamais filtrées.
- **Roue zodiacale** (`src/components/wheel/`) : anneaux concentriques gravés — graduations (1°, 5°, 10°), bande des
  signes (glyphes `--or`, fond teinté du pigment de l'élément à 8 %), maisons (cuspides en filets, numéros), planètes
  (glyphes `--encre` sur pastille `--plaque`, écartés pour ne jamais se toucher, trait de rappel vers leur degré vrai),
  aspects au centre. 0° Bélier à gauche pour le ciel du jour ; Ascendant à gauche pour un thème. Équivalent texte
  obligatoire (tableau des positions) ; `role="img"` + `aria-labelledby` sur un résumé en mots.
- **Planète en sphère** : disque texturé (cartes de Solar System Scope, NASA), ombre de terminateur en dégradé radial ;
  la texture ne tourne qu'au survol ou au focus de sa carte, jamais en mouvement réduit (WCAG 2.2.2).
- **Note de l'astronome** : encart `--r-md` fileté `--lapis`, petite lunette gravée, texte 0,9375 rem ; renvoie à la
  page Science ou au site Astronomie.
- **Formulaire du thème natal** : champs `--r-sm` de 44 px, étiquettes au-dessus, aide sous le champ, erreurs en
  texte (`aria-describedby`), jamais par la seule couleur. Les données restent dans le navigateur, et la page le dit.

## Mouvement

Un seul moment orchestré : sur l'accueil, les planètes du jour glissent jusqu'à leur degré (1,2 s, une fois).
Ailleurs, le mouvement répond à un geste (ouvrir des détails, changer de système de maisons). `prefers-reduced-motion` :
tout est instantané, la rotation des sphères s'arrête.

## Interdits

Dégradés décoratifs, ombres portées grises sous chaque carte, cartes identiques en grille, capitales espacées, emoji,
glyphes Unicode du zodiaque, `→` dans les boutons, texte justifié, image filtrée ou recolorée.
