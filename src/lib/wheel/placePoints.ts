/**
 * Écarte des glyphes posés sur un cercle pour qu'ils ne se touchent pas : chaque groupe de points trop proches est
 * étalé à `minSeparation` degrés d'écart, centré sur la moyenne de leurs vraies longitudes ; les groupes qui se
 * rencontrent fusionnent, jusqu'à ce qu'aucun ne se chevauche. Le cercle est coupé au plus grand vide.
 * Renvoie les longitudes d'affichage, dans l'ordre des entrées, dans [0, 360).
 */
export function spreadLongitudes(longitudes: readonly number[], minSeparation: number): number[] {
  const n = longitudes.length;
  if (n < 2) return longitudes.map(norm);
  const separation = Math.min(minSeparation, 360 / n);
  const order = longitudes.map((l, i) => ({ l: norm(l), i })).sort((a, b) => a.l - b.l);

  // Coupe au plus grand vide : la séquence commence juste après lui.
  let cut = 0;
  let widest = -1;
  for (let k = 0; k < n; k++) {
    const gap = k === n - 1 ? order[0].l + 360 - order[k].l : order[k + 1].l - order[k].l;
    if (gap > widest) {
      widest = gap;
      cut = (k + 1) % n;
    }
  }
  const sequence = [...order.slice(cut), ...order.slice(0, cut)];
  const base = sequence[0].l;
  const values = sequence.map(({ l }) => (l < base ? l + 360 : l));

  interface Cluster {
    start: number;
    count: number;
    mean: number;
  }
  const clusters: Cluster[] = values.map((v, k) => ({ start: k, count: 1, mean: v }));
  const first = (c: Cluster) => c.mean - ((c.count - 1) * separation) / 2;
  const last = (c: Cluster) => c.mean + ((c.count - 1) * separation) / 2;

  let merged = true;
  while (merged) {
    merged = false;
    for (let k = 0; k < clusters.length - 1; k++) {
      const a = clusters[k];
      const b = clusters[k + 1];
      if (first(b) - last(a) < separation - 1e-9) {
        const count = a.count + b.count;
        clusters.splice(k, 2, { start: a.start, count, mean: (a.mean * a.count + b.mean * b.count) / count });
        merged = true;
        break;
      }
    }
  }

  const result = new Array<number>(n);
  for (const cluster of clusters) {
    for (let t = 0; t < cluster.count; t++) {
      result[sequence[cluster.start + t].i] = norm(first(cluster) + t * separation);
    }
  }
  return result;
}

function norm(l: number): number {
  const r = ((l % 360) + 360) % 360;
  return r >= 360 ? 0 : r;
}
