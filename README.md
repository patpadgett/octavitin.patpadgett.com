# Octavitin website
Open `index.html` directly in a browser. No install/build/server required.

## Deliverables
- Editable static source: index.html, styles.css, script.js and assets/.
- `/data/pat/Octavitin-Website.html`: entirely self-contained HTML, including fonts, illustrations and downloadable original rules-poster PDF. Can be moved by itself; no companion folder required.
- `/data/pat/Octavitin-Website.zip`: source, assets, documentation, QA and standalone.

## Source correction and preservation
The requested `/data/pat/books/Octavitin-3/site` did not exist. The incumbent was `/data/pat/books/Octavitin-3/launch/site`. This new directory does not overwrite it. Manuscripts, original artwork, delivery PDFs and launch assets are unchanged.

## Editorial boundaries
Chapter One is the exact current US Markdown text with emphasis rendered, not rewritten. All current names are Parker and Colin. No invented buy links, publication dates, testimonials, availability or submission form. Original email and rules-poster CTA preserved. Full book PDF is intentionally not offered or packaged; it was not an incumbent CTA. Only the existing small poster PDF is embedded and included.

## Test
Run `node qa/check.cjs` from this directory on this machine (requires `/data/pat/node_modules/playwright` and Chromium). Evidence includes source/standalone at widths 1440, 390 and 320, downloaded poster equivalence, images, anchors, keyboard reveal/leave, reduced motion and exact excerpt comparison.

## External services
No analytics, external requests, dependencies or backend at runtime. Email opens the visitor’s mail client. Nothing was deployed.
