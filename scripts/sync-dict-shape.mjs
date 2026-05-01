#!/usr/bin/env node
/**
 * One-shot helper: copy any keys present in en.json that are missing from
 * the other locale dictionaries, so the shared `Dictionary` TS type still
 * compiles while we wait for proper translations. Existing locale-specific
 * values are preserved; only missing keys are filled (with the EN value).
 *
 * Run: node scripts/sync-dict-shape.mjs
 */
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dictDir = join(__dirname, "..", "src", "i18n", "dictionaries");

const en = JSON.parse(readFileSync(join(dictDir, "en.json"), "utf8"));

function fillMissing(template, target) {
  if (Array.isArray(template)) {
    // Don't merge arrays element-by-element — if target has its own array,
    // keep it; if target lacks the array entirely, copy template's.
    return Array.isArray(target) ? target : structuredClone(template);
  }
  if (template && typeof template === "object") {
    const out = { ...(target ?? {}) };
    for (const key of Object.keys(template)) {
      out[key] = fillMissing(template[key], out[key]);
    }
    return out;
  }
  // Primitive: keep target if it exists, else fall back to template (EN)
  return target !== undefined ? target : template;
}

const files = readdirSync(dictDir).filter(
  (f) => f.endsWith(".json") && f !== "en.json",
);

for (const file of files) {
  const path = join(dictDir, file);
  const current = JSON.parse(readFileSync(path, "utf8"));
  const merged = fillMissing(en, current);
  writeFileSync(path, JSON.stringify(merged, null, 2) + "\n");
  console.log(`synced ${file}`);
}
