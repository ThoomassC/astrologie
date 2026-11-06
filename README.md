# Astrologie

Site pédagogique sur l'astrologie, en français et en anglais, frère du site [Astronomie](https://astronomie.vercel.app). Il présente l'astrologie comme ce qu'elle est : une **tradition symbolique** née à Babylone, dont il explique les notions (signes, planètes, maisons, aspects), l'histoire, et ce qu'en dit la science. Partout, un **résumé simple** d'abord, puis des **détails** à la demande. Le thème natal se calcule **dans le navigateur** : les données de naissance ne quittent jamais l'appareil.

## Ce que fait le site

### Accueil

- **Le ciel du jour** : la roue zodiacale avec les positions du Soleil, de la Lune, des huit planètes et du nœud nord à l'instant de la visite, calculées dans le navigateur (le moteur d'éphémérides n'arrive qu'à ce moment, par import dynamique). Les astres glissent jusqu'à leur degré, une fois ; une phrase dit le signe du Soleil, la phase et le signe de la Lune, les planètes rétrogrades. La liste des positions est l'équivalent texte de la roue.
- **L'astrologie en bref** : quatre notions, chacune un résumé et ses détails.
- **La frise des douze signes**, illustrée par les cartes d'*Urania's Mirror* (1825), et des **portes** vers chaque section.

### Signes

- La galerie des douze signes (carte gravée, glyphe, dates, élément, modalité, maître), les quatre éléments, les trois modalités, le tableau croisé, la polarité, les cuspides.
- Une **fiche par signe** (`/signes/belier`…) : accroche, carte d'*Urania's Mirror*, présentation, qualités et travers selon la tradition, puis sept sections à déplier (caractère, le signe dans un thème, symbolique, mythe, maîtrises, décans, constellation). En manchette : la roue avec le signe mis en évidence et la fiche (dates, élément, modalité, polarité, maîtres, exaltation, exil, chute, partie du corps, constellation et son étoile la plus brillante).
- **Les vraies dates du Soleil dans la constellation**, calculées au build avec les limites officielles de l'UAI : la précession les a décalées d'environ un mois, et le Soleil traverse aussi Ophiuchus.

### Planètes

- Les dix astres de l'astrologie, en quatre familles (luminaires, personnelles, sociales, transpersonnelles), puis les nœuds de la Lune.
- Une **fiche par astre** (`/planetes/soleil`…) : sphère texturée qui tourne lentement (Saturne a ses anneaux), fiche (tour du zodiaque, retour auprès du Soleil, temps moyen dans un signe, rétrogradation, domiciles, exaltation, exil, chute, découverte), six sections à déplier (symbolique, l'astre dans un thème, mythe, astronomie, rétrogradation, maîtrises).

### Maisons et aspects

- **Maisons** : angles, quadrants, les douze maisons, les quatre systèmes du site (Placidus, maisons égales, signes entiers, Porphyre) et pourquoi Placidus échoue près des pôles. Une **démonstration** compare les systèmes selon la latitude et l'heure sidérale : la roue et le tableau des cuspides se redessinent, et au-delà de 66° le repli sur Porphyre est annoncé.
- **Aspects** : les cinq majeurs, six mineurs, les orbes, aspects appliquants et séparants, configurations. Un **explorateur** pose deux astres sur la roue et dit l'aspect qu'ils forment, avec son orbe.

### Votre thème natal

- Date, heure (ou « heure inconnue »), lieu (une liste de villes francophones, ou latitude, longitude et fuseau horaire à la main), système de maisons.
- Positions des astres (signe, degré, maison, rétrogradation), Ascendant et Milieu du Ciel, cuspides, aspects avec leurs orbes, répartition par élément et par modalité, et une **lecture guidée** qui montre comment un astrologue assemble astre, signe et maison.
- Heures sautées ou doublées au changement d'heure, fuseaux incertains avant 1970, heure inconnue (la Lune peut changer de signe dans la journée) : le formulaire le dit et propose de trancher.

### Histoire, science, lexique

- **Histoire** : une frise de huit époques, de la Mésopotamie (MUL.APIN) au XXᵉ siècle, illustrée (zodiaque de Dendérah, astrolabe persan, Homme zodiacal des Très Riches Heures, planches de Cellarius, gravure dite de Flammarion), avec des sources.
- **Ce que dit la science** : précession des équinoxes, Ophiuchus, l'expérience de Carlson (*Nature*, 1985), les « jumeaux temporels », Gauquelin, l'effet Barnum, l'absence de mécanisme connu ; puis pourquoi l'astrologie reste un fait culturel.
- **Lexique** : les termes du site, par lettre, avec leurs renvois.

### Partout

- Barre commune (marque, onglets ; « Menu » sous 1 230 px), bascule **jour / nuit** (le choix est gardé ; sans choix, le site suit le système), bascule **français / anglais**, pied de page commun (renvois, contacts de l'auteur, site frère, code source).
- Lien d'évitement, parcours complet au clavier, focus rendu au contenu après chaque navigation, mouvement réduit respecté, couleurs forcées prises en compte. Sans JavaScript, tout reste lisible : les détails s'ouvrent nativement (`<details>`), seuls le ciel du jour, les démonstrations et le calcul du thème demandent JavaScript.

## Pile technique

Next.js 16 (App Router, Cache Components, pages prérendues), React 19, TypeScript strict, CSS Modules, [astronomy-engine](https://github.com/cosinekitty/astronomy) (MIT) pour les éphémérides, Vitest et Testing Library pour les tests. Aucune bibliothèque d'interface ni d'internationalisation.

## Démarrer

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3000.

| Commande | Rôle |
|---|---|
| `npm run dev` | serveur de développement |
| `npm test` | tests Vitest (suite complète) |
| `npm run test:related -- <fichiers>` | tests des fichiers donnés et de ceux qui en dépendent |
| `npm run typecheck` | types des routes (`next typegen`), puis vérification des types |
| `npm run lint` | ESLint |
| `npm run build` | build de production |
| `node scripts/typographie.mjs <fichiers>` | pose les espaces insécables du français dans les textes |

## Organisation

```
src/
  app/[lang]/         pages, dans chaque langue : accueil, signes/ (+ [slug]), planetes/ (+ [slug]), maisons/,
                      aspects/, theme-natal/, histoire/, science/, lexique/, a-propos/ ; layout racine, 404
  app/                404 globale, plan du site, robots.txt, globals.css
  proxy.ts            négociation de la langue des adresses sans langue
  content/            textes (serveur seulement), un dossier par domaine : types.ts, fr.ts, en.ts, content.ts
  components/
    site/             barre, menu replié, bascule de thème, pied de page, lien d'évitement, focus
    text/             résumé + détails, en-tête de page, fiche, estampe, note de l'astronome, gabarits
    glyphs/           glyphes astrologiques dessinés en SVG
    wheel/            roue zodiacale (partagée serveur et client), styles des démonstrations
    home/ signs/ planets/ houses/ aspects/ natal/ history/ science/ lexicon/ about/
  lib/
    astro/            données (signes, planètes, aspects, constellations) et calculs purs (zodiaque, angles,
                      maisons, aspects, nœud, heure, saisie) ; ephemeris.ts, seul à importer astronomy-engine
    wheel/            géométrie de la roue, écartement des glyphes
    geo/              villes proposées par le formulaire
    site/             adresses, thème, images, viewport
  i18n/               langues, négociation, métadonnées, noms affichés, positions et dates, gardes des textes
  assets/images/      cartes des signes, planches de l'histoire, cartes des astres, papier
design-system/        direction artistique et jetons (MASTER.md)
docs/adr/             décisions d'architecture
scripts/              correcteur de typographie française
```

## Langues

- **Adresses** : chaque page existe en français et en anglais, sous `/fr/…` et `/en/…` ; les segments et les ancres sont les mêmes dans les deux langues (`/en/signes/belier`, `/fr/maisons#maison-4`). Les chemins se fabriquent par `src/lib/site/routes.ts`, langue obligatoire (`signPath(sign, locale)`, `sectionPath("natal", locale)`).
- **Pages statiques** : le layout `src/app/[lang]/layout.tsx` déclare les deux langues (`generateStaticParams`) et `ensureStatic` ; il pose `<html lang>` et le fournisseur `LocaleProvider`. Une langue inconnue donne la 404 ; une adresse qu'aucune route ne sert, la 404 globale bilingue (`src/app/global-not-found.tsx`).
- **Négociation** : `src/proxy.ts` ne voit que les adresses **sans** langue (`/`, `/signes/belier`) et les renvoie (307) vers la même adresse préfixée de la langue préférée : cookie `lang` s'il est valide, sinon `Accept-Language`, sinon le français. Il ne pose jamais de cookie.
- **Bascule** : dans la barre, à côté de la bascule de thème (et dans le menu replié), une pilule à deux drapeaux, lien vers la même page dans l'autre langue (sans JavaScript aussi) ; au clic, elle pose le cookie `lang` (un an, `SameSite=Lax`) et garde l'ancre affichée.
- **Métadonnées** (`src/i18n/metadata.ts`) : adresse canonique, `hreflang` des deux langues et `x-default` (l'adresse sans langue) ; le plan du site couvre les deux langues.

### Où vivent les textes

- **Contenus serveur** (`src/content/<domaine>/`) : `types.ts` (forme), `fr.ts` et `en.ts` (texte seul), `content.ts` (`get<Domaine>Content(locale)`). Lus seulement par des composants serveur, qui reçoivent la langue en prop depuis la page ; aucun module client ne doit les importer (garde `src/i18n/boundaries.test.ts`).
- **Chaînes client** (`*.strings.ts`, à côté des composants client qui les lisent) : `X_STRINGS: Readonly<Record<Locale, …>>`, lue par `X_STRINGS[useLocale()]` ; 20 000 caractères au plus par langue (garde `stringsBudget.test.ts`).
- **Noms** (`src/i18n/names.ts`) : signes, astres, aspects, éléments, mois…, indexés par la langue (`SIGN_NAMES[locale].aries` : « Bélier », « Aries ») ; positions et dates par `formatPosition(l, locale)` et `formatMonthDay(d, locale)`.
- **Résumé + détails** : chaque notion est un `Explained` (`summary` d'une à trois phrases, 320 caractères au plus ; `details` en paragraphes et listes), rendu par `ExplainedSection`.
- **Ton** : vouvoiement en français, « you » et orthographe britannique en anglais (formats `en-GB`) ; l'astrologie est présentée « selon la tradition », jamais comme un savoir établi.
- **Typographie française**, sur le français seulement : espace fine insécable (U+202F) entre les milliers et avant « ; ! ? », espace insécable (U+00A0) avant « : » et dans les guillemets « ». Le script `scripts/typographie.mjs` les pose dans les littéraux ; la garde `frenchTypography.test.ts` les vérifie.
- **Complétude** (`completeness.test.ts`) : chaque contenu, chaque table et chaque nom existe dans les deux langues, aux mêmes places, sans vide ni recopie du français (hors noms propres et mots identiques listés).
- Glyphes : jamais les caractères Unicode du zodiaque (rendu emoji sur iOS), toujours les glyphes SVG de `src/components/glyphs/`.

## Calcul et précision

- **Éphémérides** : astronomy-engine 2.1, positions géocentriques apparentes rapportées à l'écliptique et à l'équinoxe vrais de la date (zodiaque tropical). Écarts mesurés aux exemples de Jean Meeus (*Astronomical Algorithms*) : quelques secondes d'arc pour la Lune et Vénus. Nœud nord moyen (Meeus 47.7) corrigé de la nutation.
- **Angles** : Ascendant et Milieu du Ciel tirés du temps sidéral vrai et de l'obliquité vraie ; l'Ascendant est le point de l'écliptique qui se lève à l'est (vérifié en le reconvertissant en coordonnées horizontales).
- **Maisons** : Placidus (demi-arcs, vérifiés par leur définition), égales, signes entiers, Porphyre. Au-delà de 66° de latitude, Placidus n'est plus défini : repli annoncé sur Porphyre.
- **Heure** : l'heure locale devient l'heure universelle par les fuseaux IANA du navigateur (`Intl`). Avant 1970, certains fuseaux « liés » ont perdu leur histoire propre dans la base de données des fuseaux : le formulaire prévient, et le décalage se corrige à la main. Une erreur de 4 minutes sur l'heure décale l'Ascendant d'environ 1°.
- Rien n'est interprété automatiquement : la lecture guidée assemble les mots-clés de la tradition et le dit.

## Images

Toutes libres de droits, créditées sur la page À propos et sous chaque image :

- Cartes des signes : Sidney Hall, *Urania's Mirror*, Londres, 1825 (Library of Congress, restaurations d'Adam Cuerden), domaine public.
- Histoire : tablette MUL.APIN (Vorderasiatisches Museum, photographie CC0), zodiaque de Dendérah (Louvre, photographie CC0), astrolabe persan de 1654 (Metropolitan Museum of Art, CC0), *L'Homme anatomique* des Très Riches Heures (domaine public), trois planches d'Andreas Cellarius, *Harmonia Macrocosmica* (1660, domaine public), gravure dite de Flammarion (1888, domaine public).
- Ciel : la lumière zodiacale au-dessus du Paranal, A. Fitzsimmons / ESO, CC BY 4.0.
- Cartes des astres : Solar System Scope, d'après la NASA, CC BY 4.0 ; Pluton : NASA / JHUAPL / SwRI (New Horizons), domaine public.
- Grain du papier : ambientCG, CC0.

Modifications : redimensionnées (2 000 px au plus pour les gravures, 1 024 px pour les cartes des astres) et recompressées en JPEG.

## Déploiement

Prévu sur Vercel, comme Astronomie, après validation : `metadataBase` lit `VERCEL_PROJECT_PRODUCTION_URL`, posée par Vercel au build.
