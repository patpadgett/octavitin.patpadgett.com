# Sources and provenance
- Actual incumbent: `/data/pat/books/Octavitin-3/launch/site/index.html`. Requested `/site` did not exist; it is this new implementation. Incumbent unchanged.
- Product positioning and unconfirmed publication status: `../launch/launch-plan.md`; no draft dates or proof claims promoted to public facts.
- Exact sample: `../manuscript-us/01-three-rules.md`, all paragraphs, Markdown emphasis converted to HTML without changing visible text. Deliberately retain source double hyphens and the source word “torches”.
- Plot and current names: all five `../manuscript-us/*.md` chapters. Parker Pebble and Colin.
- Existing images: `../art/cover.png` → cover.webp; `07.png` → waiting.webp; `04.png` → hello.webp; `09.png` → goodnight.webp. Pillow WebP quality 87; no regenerated illustration. Original source retained in WebP XMP metadata.
- Original rules poster: `../launch/site/rules-poster.pdf`, copied byte-for-byte. The HTML orange poster is a decorative promotional preview, explicitly labeled as such.
- Email: `pat@patpadgett.com`, preserved from incumbent.
- Fonts: Brygada 1918 and Nunito Sans, downloaded from Google Fonts CSS API/fonts.gstatic.com and self-hosted. SIL Open Font License files included in assets. Fonts are embedded into the standalone HTML.
- Standalone embeds every image, font and the original 75,206-byte PDF as data URLs. No remote runtime dependencies.
