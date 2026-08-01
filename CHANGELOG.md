# Release013 Cosmic Haze
- Added nebula configuration scaffold.


## Release014 - Visible Cosmic Haze
- Added subtle nebula gradients behind stars.
- No additional animation loops.


## Release015 - Living Nebula
- Added animated nebula configuration scaffold.
- Preserves renderer architecture.


## Release016 Engine Revision
- Animated drifting nebula.
- Pulsing primary nebula.
- Preserved render loop.


## Release021 - Archive Linking
- Archive rows for 001, 002, 003 now link to individual transmission pages.
- Added transmission-001.html, transmission-002.html (open, placeholder lore/art scaffold).
- Added transmission-003.html (locked teaser page for unreleased recovery).
- No changes to landing page or renderer.


## Release022 - Roadmap Regions
- Added locked placeholder pages: observatory.html, hidden-signals.html, constellations.html.
- Archive page now has a "Further Regions" section linking to these as LOCKED.
- No changes to landing page, renderer, or existing transmission pages.


## Release023 - The Only Stars Content
- transmission-001.html now has full lore text and cover art for The Only Stars.
- Added clickable tracklist (10 tracks) on transmission-001.html.
- Added individual song pages (song-01 through song-10) as lyrics/lore scaffolds,
  each linking back to transmission-001.html and forward to the next track.
- No changes to landing page, renderer, or other transmission pages.


## Release024 - Cover Art Pulse
- Added subtle breathing pulse animation to the cover art on transmission-001.html
  (slow scale + brightness loop, 4s cycle).
- No changes to other pages.


## Release025 - Cover Art Positioning
- Shifted visible crop of the cover art downward on transmission-001.html.


## Release026 - Cover Art Positioning Fix
- Reversed direction of cover art crop shift on transmission-001.html.


## Release027 - Deep Field
- Added a third nebula layer (warm amber-rose tone, opposite corner drift).
- Added ambient dust particle layer (90 dim, slow-drifting motes).
- Added rare hidden-constellation effect: every few minutes, a handful of
  nearby stars faintly connect with thin lines for several seconds, then fade.
- Fully additive: existing star field, meteor system, and render loop untouched.


## Release028 - Deep Field Visibility Pass
- Increased amber nebula, dust particle, and constellation line intensity.
- Constellation effect now first appears within ~5-15s instead of 30s-2min (for visibility testing).
- Bumped script.js cache-busting version on index.html.


## Release029 - Warp Button
- Circle symbol on landing page is now clickable ("warp" interaction).
- Click triggers a zoom-into-the-circle transition (1.6s) with a white flash,
  then navigates to a random destination from WARP_DESTINATIONS in index.html.
- Added void.html: "Signal Lost" page, currently the only destination in the pool.
- Destination pool is intentionally minimal for now — expand WARP_DESTINATIONS
  array in index.html to add more locations later.


## Release030 - Warp Pool Expansion
- Added adrift.html ("floating in space" destination) and frozen-world.html
  ("frozen cosmic world" destination).
- WARP_DESTINATIONS in index.html now includes void.html, adrift.html, frozen-world.html —
  warp clicks are now genuinely random across three outcomes.
- Pool remains a simple array for easy future expansion (e.g. lyrics/art pages).


## Release031 - Frozen World Imagery
- frozen-world.html now uses a real background photo (assets/frozen-world-bg.png)
  instead of CSS gradient/shard placeholder.
- Added a subtle twinkling star overlay (45 small stars, randomized position/timing,
  confined to the upper sky region of the image) layered on top of the photo.
- Text now sits at the bottom with a shadow/gradient for legibility against the image.


## Release032 - Frozen World Mobile Fix
- Removed overflow:hidden and fixed-bottom pinning that cut off the back link
  on mobile (shorter viewport + browser chrome hid content with no way to scroll).
- Page now scrolls normally; back link always reachable.
- Added safe-area-inset padding for phones with home indicator bars.


## Release033 - Adrift Imagery
- adrift.html now uses a real background photo (assets/adrift-bg.png)
  instead of CSS orb/gradient placeholder.
- Aggressive twinkle: 110 stars, fast random cycles (0.8-2.4s), full-screen
  coverage (not confined to a sky region) for a more disorienting, lost feel.
- Subtle slow drift on the background image itself (50s ease-in-out loop,
  gentle pan + scale) for a weightless floating sensation.
- Built with scroll-safe layout from the start (no overflow:hidden pinning,
  safe-area padding) to avoid the mobile cutoff issue from frozen-world.html.


## Release034 - Adrift Variants
- Added adrift-2.html and adrift-3.html, two more "floating in space" outcomes
  with different background photos (assets/adrift-2-bg.png, assets/adrift-3-bg.png).
- Same treatment as adrift.html: aggressive full-screen twinkle, subtle background drift,
  scroll-safe layout.
- WARP_DESTINATIONS in index.html now has 5 outcomes: void, 3 adrift variants, frozen-world.


## Release035 - Sigil in Warp Button
- Added the sacred-geometry sigil (assets/sigil.png) centered inside the warp button circle.
- mix-blend-mode:screen used so the black background of the image disappears,
  leaving only the glowing linework visible against the site background.
- Slow breathing pulse (4.5s) on brightness/scale/opacity.
- Separate irregular "glitch" flicker (9s cycle, brief flashes near the 93-96% mark)
  layered on top, so it periodically glitches in and out rather than pulsing smoothly.
- Does not affect the warp click/zoom behavior, which still targets .symbol.


## Release036 - The Source Lyrics
- Added full lyrics to song-01-the-source.html.


## Release037 - The Source Full Lyrics + Background Art
- Replaced excerpt with complete lyrics on song-01-the-source.html, with proper
  stanza spacing preserved from the source document.
- Added the concept scene image (assets/song-01-bg.png) as a faint, fixed
  background (16% opacity, dark gradient shade on top for legibility).


## Release038 - Background Visibility Boost
- Increased background art opacity on song-01-the-source.html (16% → 34%)
  and lightened the dark shade gradient slightly to compensate, so the scene
  reads more clearly while lyrics stay legible.


## Release039 - Traced Line Overlay
- Generated a glowing edge-trace layer from the background art (edge detection +
  noise cleanup + soft glow), isolating the strong structural lines (spires,
  central beam, ring city, triangle/circle symbol) while suppressing star/texture noise.
- Added assets/song-01-bg-lines.png, layered above the shade with mix-blend-mode:screen
  and a slow 6s breathing pulse, so the traced lines softly glow brighter and dimmer.


## Release040 - With You Full Treatment
- song-02-with-you.html now has full lyrics, faint background art (assets/song-02-bg.png,
  34% opacity), and a glowing traced-line overlay (assets/song-02-bg-lines.png,
  same edge-detection + noise cleanup + pulse treatment as song-01).


## Release041 - Pattern (Alive Treatment)
- song-03-pattern.html: full lyrics, background art (assets/song-03-bg.png) and
  traced glow lines (assets/song-03-bg-lines.png) tuned for this denser lattice image
  (lower Canny thresholds so more of the network/circle structure survives).
- More "alive" than previous songs per request: background opacity raised to ~50%
  with a slow 9s breathing zoom, and the line-glow pulse sped up and intensified
  (3.2s cycle, 42-85% opacity) instead of the slower/subtler treatment used before.


## Release042 - Previous Track Navigation
- Added "← Previous Track" link to all song pages (song-02 through song-10),
  chaining backward through the tracklist. song-01 has no previous link (first track).
- song-10 already had no "Next Track" link (last track) — unchanged.


## Release043 - Dance Hot
- song-04-dance-hot.html: full lyrics, background art (assets/song-04-bg.png),
  traced glow lines tinted magenta-purple (assets/song-04-bg-lines.png) to match
  this image's palette, "alive" treatment (breathing bg zoom, fast 2.8s line pulse).
- Includes Previous/Next Track navigation from Release042.


## Release044 - Crash
- song-05-crash.html: full lyrics (corrected "breath" -> "bred" per request),
  background art (assets/song-05-bg.png), traced glow lines tinted warm gold-white
  (assets/song-05-bg-lines.png) to match this image's palette.
- Distinct "unstable/glitchy" animation instead of smooth breathing pulse, fitting
  the collapse/disruption theme: irregular opacity dips and micro-jolts on both
  background and lines layers rather than an even sine-wave loop.


## Release045 - Starlit
- song-06-starlit.html: full lyrics from doc (extended ending with repeated
  "Because I / Believe it" and "Of you / And me" outro sections), background art
  (assets/song-06-bg.png), traced glow lines (assets/song-06-bg-lines.png).
- Calmer/gentler treatment (34% static opacity, slow 6s pulse) matching this
  image's hopeful tone rather than the more intense "alive"/"unstable" styles
  used on Pattern, Dance Hot, and Crash.
