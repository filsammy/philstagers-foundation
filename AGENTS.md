# AGENTS.md — Philippine Stagers Foundation Website

## Project overview
Next.js 15 (App Router) marketing site for Philippine Stagers Foundation (PSF),
a Filipino theatre company founded 2001 by Atty. Vince Tañada. Goal right now:
a polished, interactive front-end to pitch/showcase to the client. CMS
(content management) is intentionally deferred — see "CMS status" below.

Live: https://philstagers-foundation.vercel.app

## Stack
- Next.js 15, App Router, TypeScript
- Plain CSS (no Tailwind) — all tokens in src/app/globals.css
- framer-motion — for all animation/interactivity work (don't add a second
  animation library; if something feels hard in framer-motion, ask before
  reaching for GSAP/etc.)
- No CMS currently wired in — show/production data is hardcoded in the
  page files as mock data (see "CMS status" below)

## Directory structure
- src/app/(site)/          — public pages (home, about, productions, contact)
  wrapped in src/app/(site)/layout.tsx (adds Nav + Footer)
- src/components/          — Nav, Footer, ShowCard
- (Sanity folders/config have been removed for now — see CMS status)

## Design tokens (src/app/globals.css :root)
--stage (near-black bg), --curtain / --curtain-light (maroon), --gold
(spotlight accent), --paper (off-white text). Fonts: Playfair Display
(headings, var(--font-display)), Work Sans (body, var(--font-body)).
Reuse these tokens for any new UI — don't introduce new colors ad hoc.

## ⚠️ Environment gotcha — READ BEFORE RUNNING npm install
This machine's global npm registry is set to an internal Apple registry
(npm.apple.com) that does NOT mirror all public packages (framer-motion and
others have 404'd before). NEVER change the global/user npm config — it's
needed for other work projects.

Always check first:
    cat .npmrc
If missing or if an install 404s, create a project-local override:
    echo "registry=https://registry.npmjs.org/" > .npmrc
Then retry the install. This file should be committed in this repo — if
it's missing after a fresh clone, recreate it before installing anything new.

## CMS status — DEFERRED, do not reintroduce yet
Sanity.io was scaffolded earlier and has been deliberately removed to keep
focus on the front-end showcase. Show/production content currently lives as
hardcoded mock data directly in src/app/(site)/page.tsx and
src/app/(site)/productions/page.tsx (marked with
`// TEMP: mock data for pitch demo` comments).

Do NOT re-add Sanity, a database, or any backend/CMS unless explicitly asked.
If a task seems to need "real" data management, flag it back rather than
silently reintroducing a CMS — that decision is on hold until the client
approves the site direction.

## Current initiative: making the site feel "alive"
Working through an interactivity roadmap, one item at a time, each as its
own small commit — do NOT batch multiple items into one change unless told
to. Order:
1. ✅ Scroll-triggered section reveals (whileInView fade+slide, once: true)
2. ✅ Animated stat counters (count-up on scroll into view)
3. ✅ Cursor spotlight on hero (mousemove-driven radial gradient, disabled
   on touch/pointer:coarse)
4. ✅ Hover polish (ShowCard lift/scale, Nav underline draw-in)
5. ❌ Curtain drag-reveal for the gallery — built it, felt annoying in
   practice, reverted along with item 6. Not planned to revisit unless asked.
6. ❌ Curtain-wipe page transition — tried it, felt annoying in practice,
   reverted. Not planned to revisit unless asked.
7. 🚧 Small delight touches (themed 404 ✅, grain overlay ✅, confetti on
   form submit ⬜ — skipped, there's no contact form yet to hook into)

(Update the checkboxes above as items land.)

## Constraints for all interactivity work
- Respect prefers-reduced-motion — anyone with that OS setting gets instant/
  no-motion versions, not forced animation.
- Test on a throttled/mobile viewport, not just desktop, before considering
  an item done.
- Don't regress the empty-state handling on Home/Productions (currently
  shows "No shows published yet..." style copy when data is empty) — new
  animation wrappers must not break that conditional. If mock data always
  populates the array now, keep the empty-state branch in the code anyway
  so it's a one-line change to restore later.