# Peridot — marketing website

The production marketing site for **Peridot**, a privacy-first, pay-once period
tracker. Built as a fully static site: no backend, no database, no API routes —
*"there is no server"* is the literal brand promise.

## Stack

- **Next.js (App Router) + TypeScript**, statically exported (`output: "export"`).
- **Tailwind CSS** — every design token (colors, fluid type scale, radii,
  shadows) lives in [`tailwind.config.ts`](./tailwind.config.ts) and is sourced
  from CSS custom properties in [`app/globals.css`](./app/globals.css). No raw
  hex in components.
- **`next/font/google`** self-hosts Figtree, Petrona, and Caveat — no runtime
  call to Google.
- **Zero third-party scripts.** No analytics, trackers, or marketing SDKs. This
  is a hard brand rule, not a preference.
- The logo mark is an inline React SVG ([`components/Mark.tsx`](./components/Mark.tsx))
  with light / small / dark cuts, so it can animate and recolor.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Production build

```bash
npm run build    # static site emitted to ./out
```

The build is a pure static export (`out/`) — serve it with any static host.

## One-click Vercel deploy

1. Push this folder to a GitHub repo.
2. In Vercel, **New Project → Import** the repo.
3. Framework preset **Next.js** is detected automatically; no env vars, no build
   settings to change. Deploy.

It "just works" as a static site — there is nothing to configure because there
is no server.

## Structure

```
app/
  layout.tsx          root layout: fonts, metadata, header/footer, hero gate
  page.tsx            home — assembles the eight sections in order
  faq/page.tsx        FAQ view (accordion)
  privacy/page.tsx    Privacy view
  globals.css         design tokens + animation keyframes
  icon.svg            favicon built from the mark
components/
  Mark.tsx            Halo mark (light/small/dark) + animated HeroMark
  Wordmark.tsx        the "perıdot" lockup (dotless ı, mark as tittle)
  Header.tsx Footer.tsx
  Reveal.tsx          IntersectionObserver scroll reveals (progressive enhancement)
  Cta.tsx             shared buttons
  FaqAccordion.tsx
  sections/*          the eight home sections
  mockups/*           live in-page app mockups (PhoneHome, PhoneUnlock, …)
lib/
  prediction.ts       the prediction engine (ported verbatim from the prototype)
  constants.ts        static mockup inputs (cycle starts, duration, today)
  faq.ts              FAQ copy (verbatim)
```

## Notes

- App-store buttons link to `#` — swap in the real App Store / Play Store URLs.
- Dark-mode tokens are documented in the handoff; the site is light-mode-first
  for v1.
