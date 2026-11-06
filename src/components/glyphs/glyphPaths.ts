/**
 * Glyphes astrologiques dessinés à la main, sur une grille de 32 × 32, en traits (bouts et angles ronds) : le dessin
 * est le même sur tous les systèmes, là où les caractères Unicode (♈︎ ☉ …) changent de forme d'une police à l'autre
 * et passent en emoji sur iOS. Chaque glyphe est une liste de tracés SVG ; `dots` sont des points pleins.
 */
export interface GlyphDrawing {
  readonly paths: readonly string[];
  readonly circles?: readonly (readonly [cx: number, cy: number, r: number])[];
  readonly dots?: readonly (readonly [cx: number, cy: number, r: number])[];
}

export const SIGN_GLYPHS = {
  aries: {
    paths: [
      "M16 27V12C16 7 13 4 9.8 4 6.8 4 5 6.3 5 8.8c0 2.2 1.4 3.8 3.4 4.1",
      "M16 12c0-5 3-8 6.2-8 3 0 4.8 2.3 4.8 4.8 0 2.2-1.4 3.8-3.4 4.1",
    ],
  },
  taurus: {
    paths: ["M5 5c1.5 5.5 5.5 8.5 11 8.5S25.5 10.5 27 5"],
    circles: [[16, 20.5, 7]],
  },
  gemini: {
    paths: ["M6 5.5c6.5 2.5 13.5 2.5 20 0", "M6 26.5c6.5-2.5 13.5-2.5 20 0", "M11.5 7v18", "M20.5 7v18"],
  },
  cancer: {
    paths: ["M10 8.4c5.5-2.4 12.5-2 17 1.6", "M22 23.6c-5.5 2.4-12.5 2-17-1.6"],
    circles: [
      [10, 12, 3.6],
      [22, 20, 3.6],
    ],
  },
  leo: {
    paths: ["M13.2 17.4C11.8 12 12.5 5 18.5 5c5 0 7.3 4 5.7 8.5-1.4 4-4.2 7-3.4 11 .6 2.8 3.8 3.5 6.2 1.5"],
    circles: [[9.5, 20.2, 4.3]],
  },
  virgo: {
    paths: [
      "M5 9.5c1-1.2 3-1.5 3.8.5v15",
      "M8.8 12.5c0-3 1.6-4.5 3.6-4.5s3.4 1.5 3.4 4V25",
      "M15.8 12.5c0-3 1.6-4.5 3.6-4.5s3.4 1.5 3.4 4v10.5c0 3-1.6 5-4 5.7",
      "M22.8 15.5c1.2-2.7 5-2.7 5 1.3 0 4.2-3.3 7.7-8.2 10.8",
    ],
  },
  libra: {
    paths: ["M4 26h24", "M4 20.5h6.2a7.2 7.2 0 0 1-.7-3.5c0-4 2.9-7 6.5-7s6.5 3 6.5 7c0 1.2-.2 2.4-.7 3.5H28"],
  },
  scorpio: {
    paths: [
      "M5 9.5c1-1.2 3-1.5 3.8.5v15",
      "M8.8 12.5c0-3 1.6-4.5 3.6-4.5s3.4 1.5 3.4 4V25",
      "M15.8 12.5c0-3 1.6-4.5 3.6-4.5s3.4 1.5 3.4 4v10.5c0 2.5 1.4 3.7 4.8 3.7",
      "M25 23.4l2.8 2.8L25 29",
    ],
  },
  sagittarius: {
    paths: ["M6 26L26 6", "M15.5 6H26v10.5", "M9.5 15.5l7 7"],
  },
  capricorn: {
    paths: [
      "M4.5 8.5c1.9-1.3 3.7-.5 4.5 1.9l4.2 14.4L18 9.6c.8-2.4 3.2-3 4.8-1.2 1.5 1.7 1 5.2-.4 8-1.4 2.8-1.2 6.2 1.4 7.6 2.3 1.2 4.8-.2 4.8-2.6 0-2.5-2.2-3.8-4.2-3.1-3 1.1-4.7 5.1-6.2 10.1",
    ],
  },
  aquarius: {
    paths: ["M4 13.5l4-4 4 4 4-4 4 4 4-4 4 4", "M4 22.5l4-4 4 4 4-4 4 4 4-4 4 4"],
  },
  pisces: {
    paths: ["M8.5 4.5c5 5 5 18 0 23", "M23.5 4.5c-5 5-5 18 0 23", "M6 16h20"],
  },
} as const satisfies Record<string, GlyphDrawing>;

export const PLANET_GLYPHS = {
  sun: { paths: [], circles: [[16, 16, 10.5]], dots: [[16, 16, 1.9]] },
  moon: { paths: ["M23 4.8a11.5 11.5 0 1 0 0 22.4 9.8 11.2 0 1 1 0-22.4Z"] },
  mercury: {
    paths: ["M10.6 3.8c1.2 3.2 3.1 5 5.4 5s4.2-1.8 5.4-5", "M16 19.6V29", "M12 24.6h8"],
    circles: [[16, 14.2, 5.4]],
  },
  venus: { paths: ["M16 18.5V29", "M11.5 24h9"], circles: [[16, 11.5, 7]] },
  mars: { paths: ["M18 14l8.5-8.5", "M19.5 5.5h7v7"], circles: [[13, 19, 7]] },
  jupiter: {
    paths: ["M6.5 10.5c0-4 2.7-6.5 5.8-6.5 3.3 0 5 2.6 3.9 6-1 3-4.7 7-8.7 11.5h19", "M21.5 6v22"],
  },
  saturn: {
    paths: [
      "M11 3.5v21",
      "M7 7.5h8",
      "M11 16.5c0-3.7 2.6-5 5.6-5 3.2 0 5.4 2.2 5.4 5.3 0 3.2-2.5 5-2.5 8 0 2.4 1.5 3.8 4.1 3.4",
    ],
  },
  uranus: { paths: ["M9 5v14.5", "M23 5v14.5", "M9 12.2h14", "M16 5v16.5"], circles: [[16, 25, 3.5]] },
  neptune: { paths: ["M6 5.5c0 7.7 4 11.7 10 11.7s10-4 10-11.7", "M16 4v25", "M11.5 24.5h9"] },
  pluto: {
    paths: ["M8.6 5.6c0 6.4 3.2 10 7.4 10s7.4-3.6 7.4-10", "M16 15.6V29", "M11.5 24h9"],
    circles: [[16, 8.6, 3.6]],
  },
} as const satisfies Record<string, GlyphDrawing>;

/** Points calculés du thème qui ne sont pas des astres. */
export const POINT_GLYPHS = {
  northNode: {
    paths: ["M10.2 22.5C6.8 20.3 5 16.8 5 13c0-5.5 4.9-9 11-9s11 3.5 11 9c0 3.8-1.8 7.3-5.2 9.5"],
    circles: [
      [9.6, 25.1, 2.6],
      [22.4, 25.1, 2.6],
    ],
  },
} as const satisfies Record<string, GlyphDrawing>;

export const ASPECT_GLYPHS = {
  conjunction: { paths: ["M17.1 14.9L26 6"], circles: [[12.5, 19.5, 6.5]] },
  sextile: { paths: ["M16 4.5v23", "M6 10.25l20 11.5", "M6 21.75l20-11.5"] },
  square: { paths: ["M7.5 7.5h17v17h-17Z"] },
  trine: { paths: ["M16 5.5L27 25H5Z"] },
  opposition: {
    paths: ["M11.33 20.67l9.34-9.34"],
    circles: [
      [8.5, 23.5, 4],
      [23.5, 8.5, 4],
    ],
  },
} as const satisfies Record<string, GlyphDrawing>;
