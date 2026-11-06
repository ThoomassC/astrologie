#!/usr/bin/env node
/*
 * Corrige la typographie française dans les littéraux de chaîne des fichiers donnés (contenus `fr.ts`, tables
 * `*.strings.ts`) : espaces insécables avant « : » et dans « », fines insécables avant « ; ! ? » et entre les
 * milliers. Seuls les littéraux sont touchés, jamais le code. Usage : node scripts/typographie.mjs <fichiers…>
 */
import { readFileSync, writeFileSync } from "node:fs";
import ts from "typescript";

const NBSP = "\u00a0";
const NNBSP = "\u202f";
const PLACES = [
  { expected: NNBSP, wrong: /(?<=\d)([ \u00a0])(?=\d{3}(?!\d))/g },
  { expected: NNBSP, wrong: /([ \u00a0])(?=[;!?])/g, missing: /(?<=[^\s;!?(])[;!?](?=\s|$)/g },
  { expected: NBSP, wrong: /([ \u202f])(?=:)/g, missing: /(?<=[^\s\d]):(?=\s|$)/g },
  { expected: NBSP, wrong: /(?<=«)([ \u202f])/g, missing: /«(?=\S)/g },
  { expected: NBSP, wrong: /([ \u202f])(?=»)/g, missing: /(?<=\S)»/g },
];

function fix(text, whole) {
  let fixed = text;
  for (const { expected, wrong, missing } of PLACES) {
    fixed = fixed.replace(wrong, expected);
    if (whole && missing) fixed = fixed.replace(missing, (m) => (m === "«" ? `«${expected}` : `${expected}${m}`));
  }
  return fixed;
}

let changed = 0;
for (const file of process.argv.slice(2)) {
  const text = readFileSync(file, "utf8");
  const source = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true, file.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS);
  const edits = [];
  const visit = (node) => {
    const isString = ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node);
    const isPart = ts.isTemplateHead(node) || ts.isTemplateMiddle(node) || ts.isTemplateTail(node);
    const isModule = node.parent && (ts.isImportDeclaration(node.parent) || ts.isExportDeclaration(node.parent));
    if ((isString || isPart) && !isModule) {
      const start = node.getStart(source);
      const raw = text.slice(start, node.end);
      // Le texte brut garde ses guillemets et ses échappements : on corrige l'intérieur seulement.
      const open = isString ? 1 : raw.startsWith("}") ? 1 : 1;
      const close = ts.isTemplateHead(node) || ts.isTemplateMiddle(node) ? 2 : 1;
      const inner = raw.slice(open, raw.length - close);
      const fixed = fix(inner, isString);
      if (fixed !== inner) edits.push({ start: start + open, end: node.end - close, fixed });
    }
    ts.forEachChild(node, visit);
  };
  visit(source);
  if (edits.length === 0) continue;
  let out = text;
  for (const { start, end, fixed } of edits.sort((a, b) => b.start - a.start)) out = out.slice(0, start) + fixed + out.slice(end);
  writeFileSync(file, out);
  changed += edits.length;
  console.log(`${file} : ${edits.length} littéral(aux) corrigé(s)`);
}
console.log(`Terminé : ${changed} correction(s).`);
