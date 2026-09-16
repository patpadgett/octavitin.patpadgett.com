# Octavitin design system
## Built world
Nighttime picture-book endpapers: inky blue fields, warm orangle invitation, sage-green rule spread and an uninterrupted paper reading section. Portrait illustrations retain the story’s scale and warmth rather than becoming background wallpaper.
## Tokens
Night #171d32; deeper night #111729; paper #f7efd9; orangle #ffb16b; muted lavender #c3c5d2; sage #bdceac; reading ink #292d3e; dark divider #44495c.
## Typography
Self-hosted Brygada 1918 regular/bold for title and chapter; Nunito Sans regular/bold for navigation, copy and controls. Display tops out at 96px. Chapter 21px/1.85, 720px measure; mobile 19px/1.8. Title scales to 59px at 320px viewport.
## Composition
Desktop opening uses a large left title and story invitation beside a portrait cover with an arched top and angled caption. One-column mobile preserves offer and reading action before art. Subsequent rhythm: invitation encounter, sage rules, long-form chapter, printable, goodnight/contact.
## Controls and motion
4px orange action buttons, understated text navigation, 3px orange focus rings, themed selection and scrollbar. Bell is a native button; reveal updates polite live status and moves focus to leave; leave resets image and returns focus. Only user-triggered 500ms brightness/opacity reveal, completely disabled for reduced motion. No autoplay or audio.
## Accessibility and resilience
Native anchors and buttons, skip link, alt text, explicit dimensions, hidden-state override, lazy lower images. No framework, fetch or remote fonts. Source and standalone work through file URLs. Print stylesheet exposes only the chapter.
## Review boundary
Playwright evidence is in qa/. Parent performs final independent visual review. Impeccable detector not run: locally documented missing module failure; code-led review used instead.
