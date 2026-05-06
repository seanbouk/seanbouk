<div align="center">

# Sean Thompson

**Builder of things. Breaker of builds.**

</div>

> [!NOTE]
> This is a living document. Things move between sections as motivation allows.

## Projects

### ![mun-craft](titles/svg/mun-craft.svg)

A first-person voxel game set on a small handmade planet — Minecraft meets Mario Galaxy. Gravity is derived from the planet's mass via a Barnes-Hut octree, so as you mine blocks the gravitational field updates with the shape — dig deep enough and "up" starts pointing somewhere new. Built on a body-centred cubic lattice with 14-sided truncated octahedron blocks.

`C#` `Unity` `WebGL`

[Repo](https://github.com/seanbouk/mun-craft) · [Play](https://seanbouk.github.io/mun-craft/) · [itch.io](https://seanofearth.itch.io/mun-craft)　`[■][□][■]`

---

### ![nokia-grinder](titles/svg/nokia-grinder.svg)

A first-person shooter rendered at 84x48 pixels — the exact resolution of a Nokia 3310 screen. Fight chickens, collect roasted meat, and grind items for points, all in glorious 1-bit monochrome with three classic colour palettes to choose from.

`C#` `Unity` `WebGL` `ShaderLab`

[Repo](https://github.com/seanbouk/nokia-grinder) · [Play](https://seanbouk.github.io/nokia-grinder/) · [itch.io](https://seanofearth.itch.io/chicken-grinder)　`>(.)> bg bg bg`

---

### ![midi-device-debug](titles/svg/midi-device-debug.svg)

> [!NOTE]
> A more functional product is on the way. This one's perfectly usable now though — bug reports and feedback welcome.

A single-page Web MIDI debug tool. Lists MIDI devices the browser sees, decodes incoming messages with consecutive duplicates collapsed into a `×N` counter, and routes them through five sound engines — PSG, six-operator FM with twelve DX-style presets, eight-position wavetable, three synthesised drum kits (TR-606 / 80s gated / CR-78), and a GM soundfont sampler — for instant audible feedback. Pitch bend, mod wheel, and sustain pedal work across every engine.

`JavaScript` `Web MIDI` `Web Audio`

[Repo](https://github.com/seanbouk/midi-device-debug) · [Try it](https://seanbouk.github.io/midi-device-debug/)　`♪♩♫♪♩`

---

### ![Kumite](titles/svg/kumite.svg)

A fighting game move trainer. Plug in a gamepad, pick a game, and drill combos until they're muscle memory. Tracks your mastery percentage and current streak across sessions.

`JavaScript` `HTML` `CSS`

[Repo](https://github.com/seanbouk/Kumite) · [Try it](https://seanbouk.github.io/Kumite/)　`(ง'̀-'́)ง`

---

### ![hormuz-sweeper](titles/svg/hormuz-sweeper.svg)

Minesweeper, but the grid follows the real coastline of the Strait of Hormuz. Land areas — the Iranian coast, Musandam Peninsula, and islands — are impassable. A joke game about one of the most geopolitically tense waterways on earth, through which roughly 20% of the world's oil transits.

`HTML` `JavaScript`

[Repo](https://github.com/seanbouk/hormuz-sweeper) · [Play](https://seanbouk.github.io/hormuz-sweeper/)　`[*][2][ ][1][*]`

---

### ![space-finder](titles/svg/space-finder.svg)

A hill-climbing algorithm that generates dense, walkable urban layouts on a grid. Simulates patterns found in cottage courts and medieval villages by toggling cells and scoring against hard rules (access, connectivity) and soft rules (density, enclosure, plazas, dead-ends). Paint the grid by hand or let it evolve.

`HTML` `JavaScript`

[Repo](https://github.com/seanbouk/space-finder) · [Try it](https://seanbouk.github.io/space-finder/)　`▪▫▪▫▪▫▪`

---

### ![trello-card-factory](titles/svg/card-factory.svg)

A Trello Power-Up that turns any card into a template. Enable Card Factory on a card, drop images onto it, and it batch-creates new cards with all the original's attributes — labels, members, checklists, custom fields, the lot. Built for workflows with repetitive card setups and unique content.

`TypeScript` `Webpack` `Handlebars`

[Repo](https://github.com/sean-thompson/trello-card-factory) · [Power-Up](https://trello.com/power-ups/69bae06621ba5b4d5e6119eb)　`[■]→[■][■][■]`

---

### ![markupable](titles/svg/markupable.svg)

A Trello Power-Up for annotating image attachments. Open any image in a full-screen canvas, draw freehand, drop numbered markers, and leave threaded text notes — all stored against the card. Six-colour palette, sidebar annotation list, and inline previews.

`TypeScript` `React` `HTML5 Canvas`

[Repo](https://github.com/sean-thompson/markupable-trello-image) · [Power-Up](https://trello.com/power-ups/69a5778726e3aa6e351000d9)　`( ..)φ__`

---

### ![extract-roblox-analytics](titles/svg/extract-roblox-analytics.svg)

Extracts sales data from Roblox Creator Dashboard analytics charts in under a second. Rather than simulating tooltip hovers or hitting an API, it reverse-engineers the Highcharts SVG to pull the underlying data directly. Outputs JSON and CSV.

`JavaScript`

[Repo](https://github.com/sean-thompson/Extract-Roblox-Analytics)　`▂▃▅▇█`

---

### ![roblox-avatar-downloader](titles/svg/avatar-downloader.svg)

A browser-based tool for batch-downloading Roblox avatar images from a list of user IDs. Grid preview, individual and bulk downloads, mobile-friendly.

`HTML` `JavaScript`

[Repo](https://github.com/sean-thompson/roblox-avatar-downloader) · [Use it](https://sean-thompson.github.io/roblox-avatar-downloader/)　`◖⚆ᴥ⚆◗`

---

### ![plant-grid](titles/svg/plant-grid.svg)

A modified wave function collapse algorithm that makes plants and trees reproduce in a way which favours an existing planting pattern. Place bluebells, bracken, mushrooms, oaks, birches, and pines on a grid, then set both dropdowns to start and watch them propagate.

`JavaScript` `HTML` `CSS`

[Repo](https://github.com/sean-thompson/PathFindingPlantGrid) · [Try it](https://sean-thompson.github.io/PathFindingPlantGrid/)　`~=⌌ ~=⌌ ~=⌌`

---

### ![crims-break-out](titles/svg/crims-break-out.svg)

A top-down shooter for one to four players. Break out, gear up, and fight your way through. Built in Roblox Studio.

`Luau` `Roblox Studio`

[Play on Roblox](https://www.roblox.com/games/79742068037803/Crims-Break-Out)　`--(o_o)--<`

---

### ![extraction-shooter](titles/svg/extraction-shooter.svg)

An MVC starter template for Roblox game development. Strict separation of concerns — models on the server auto-sync to DataStore, controllers validate requests, views observe state changes. Built around "intents, not commands" with binary serialisation via Bolt for bandwidth efficiency.

`Luau` `Rojo` `Roblox Studio`

[Repo](https://github.com/seanbouk/extraction-shooter) · [Play on Roblox](https://www.roblox.com/games/71526168042985/Extraction-Shooter-First-Contact)　`︻╦╤─(⌐■_■)`

---

### ![are-you-really-left-wing](titles/svg/are-you-really-left-wing.svg)

A political quiz that measures where you fall across 12 independent scales — from economics to governance to personal freedom — rather than flattening everything onto a single left-right spectrum. Most people turn out more centrist than they think.

`JavaScript` `CSS` `HTML`

[Repo](https://github.com/seanbouk/are-you-really-left-wing) · [Take the quiz](https://seanbouk.github.io/are-you-really-left-wing/)　`<(~_~<) (>~_~)>`

---

### ![adblacker](titles/svg/ad-blacker.svg)

> [!CAUTION]
> Paused while finding time to make it more performant.

A Chrome extension that hides ads by covering them with black rectangles instead of blocking them from loading. Ads execute normally — they're just invisible. This sidesteps anti-adblock detection entirely. Click any black rectangle to whitelist it. 13,000+ cosmetic filter selectors, auto-updating weekly.

`JavaScript` `CSS` `Chrome Manifest V3`

[Repo](https://github.com/seanbouk/adblacker) · [Chrome Web Store](https://chromewebstore.google.com/detail/ad-blacker/galllgkmmpbhbedmglogoliijfohjica)　`[████████]`

---

### ![a10-megadrive](titles/svg/a10-megadrive.svg)

An A10 Warthog game for the Sega Mega Drive / Genesis. A tech demo built to get to grips with SGDK — but it compiles to a working ROM that runs on real hardware.

`C` `SGDK` `Mega Drive`

[Repo](https://github.com/seanbouk/A10_MegaDrive)　`──═══✈ brrrt`

---

### ![quantizeMD](titles/svg/quantizemd.svg)

Converts RGB images into tile-based representations optimised for the Sega Mega Drive. Reduces tile count, applies dithering, and constrains colours to the console's 3-bits-per-channel palette. Includes tools for splitting images across two 16-colour palettes for expanded colour range.

`Python` `Pillow` `NumPy` `scikit-learn`

[Repo](https://github.com/seanbouk/quantizeMD)　`##::..::##`

---

### ![self-titling](titles/svg/self-titling.svg)

A title-image generator. It reads project names and colours from a YAML file, then writes each entry to a static SVG with the text rendered as paths in a cursive font. Every title in this README comes from it. The `titles/` folder is self-contained — anyone is welcome to copy it, swap the font and config, and use it for their own.

`Node` `SVG` `GitHub Actions`

[Source](titles/)　`∽∼∽∼∽∼∽`

---

### ![juicysatsuma](titles/svg/juicy-satsuma.svg)

A collection of small web tools from over the years — Paint Mixer, Camera Settings Adjustor, Costings Predictor, Half-Life Calculator, Tuned Spectrum Analyser, and more. Mostly here so I can find them again.

`JavaScript` `HTML` `CSS`

[Repo](https://github.com/seanbouk/juicysatsuma.com) · [Visit](https://seanbouk.github.io/juicysatsuma.com/)　`(っ˘ڡ˘ς)`

---

> [!TIP]
> The contribution chart below is misleading — most of my work lives on a different account. Visit my [work profile](https://github.com/sean-thompson) for something more complete.

---

<sub>Last updated: May 2026 · built with <kbd>caffeine</kbd> + <kbd>stubbornness</kbd></sub>
