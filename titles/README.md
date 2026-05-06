# titles/

The flowing project title images you see in the main README are generated from this folder.

## To add or change a title

1. Edit `projects.yaml`. Each entry needs three fields:

   ```yaml
   - slug: my-thing      # filename for the SVG (kebab-case)
     text: My Thing      # what gets rendered
     color: "#abcdef"    # any CSS hex colour
   ```

2. Reference `titles/svg/my-thing.svg` from the main README.
3. Push.

A GitHub Action (`.github/workflows/titles.yml`) regenerates `titles/svg/` on every push that touches this folder, so step 3 is enough on its own.

## To run it locally

```
cd titles
npm install
npm run build
```

Outputs land in `titles/svg/`.

## How it works

`generate.mjs` reads `projects.yaml`, loads `fonts/Lobster-Regular.ttf` with [opentype.js](https://opentype.js.org/), and converts each title's text into an SVG `<path>`. The font is baked into the path data — no font loading at view time, no external service, no shields.io. The SVG renders identically on any viewer that can draw vector paths.

## Tweaking

Constants at the top of `generate.mjs` control the render:

- `FONT_SIZE` — internal render size in font units. Bigger = chunkier strokes.
- `PADDING` — blank space around the glyph bounding box.
- `TARGET_HEIGHT` — pixel height the SVG declares; width scales to keep aspect ratio.

To swap fonts, drop a new `.ttf` into `fonts/`, change `FONT_PATH` in `generate.mjs`, and update the license file in this folder accordingly.

## Font

Lobster, by Pablo Impallari. Licensed under the SIL Open Font License v1.1 — see `fonts/OFL.txt`.
