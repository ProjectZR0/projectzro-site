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
