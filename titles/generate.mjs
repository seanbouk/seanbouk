// Reads projects.yaml, renders each title's text into an SVG <path> using
// the bundled cursive font, and writes the result to svg/<slug>.svg.
//
// The font is "baked into" the path data — the SVG renders identically
// anywhere with no font loading at view time.

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import yaml from "js-yaml";
import opentype from "opentype.js";

const HERE = path.dirname(fileURLToPath(import.meta.url));

const FONT_PATH    = path.join(HERE, "fonts", "Lobster-Regular.ttf");
const PROJECTS     = path.join(HERE, "projects.yaml");
const OUT_DIR      = path.join(HERE, "svg");

const FONT_SIZE    = 64;   // internal render size; tune for stroke weight
const PADDING      = 4;    // extra space around the glyph bounding box
const TARGET_HEIGHT = 42;  // px the SVG renders at in markdown

async function main() {
  const font = await opentype.load(FONT_PATH);
  const entries = yaml.load(await fs.readFile(PROJECTS, "utf8"));

  await fs.mkdir(OUT_DIR, { recursive: true });

  let written = 0;
  for (const { slug, text, color } of entries) {
    if (!slug || !text || !color) {
      throw new Error(`Bad entry: ${JSON.stringify({ slug, text, color })}`);
    }

    const glyphPath = font.getPath(text, 0, 0, FONT_SIZE);
    const bb = glyphPath.getBoundingBox();

    const innerW = bb.x2 - bb.x1;
    const innerH = bb.y2 - bb.y1;
    const viewW  = innerW + 2 * PADDING;
    const viewH  = innerH + 2 * PADDING;
    const viewX  = bb.x1 - PADDING;
    const viewY  = bb.y1 - PADDING;

    const renderH = TARGET_HEIGHT;
    const renderW = Math.round(renderH * (viewW / viewH));

    const d = glyphPath.toPathData(2);

    const svg =
      `<svg xmlns="http://www.w3.org/2000/svg" ` +
      `viewBox="${viewX.toFixed(2)} ${viewY.toFixed(2)} ${viewW.toFixed(2)} ${viewH.toFixed(2)}" ` +
      `width="${renderW}" height="${renderH}">` +
      `<path d="${d}" fill="${color}"/>` +
      `</svg>\n`;

    await fs.writeFile(path.join(OUT_DIR, `${slug}.svg`), svg);
    written += 1;
    console.log(`wrote svg/${slug}.svg  (${renderW}x${renderH})`);
  }

  console.log(`\nDone. ${written} title(s) written to svg/.`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
