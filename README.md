# Waterman Family Dentistry — Homepage Redesign Concept

A polished, fully responsive **homepage redesign concept** for
[Waterman Family Dentistry](https://www.watermandentistry.com/) in Virginia Beach, VA.
Built as a sales/presentation shell — **not** a production replacement for the live site.

> Prepared as an authorized redesign proposal. All photography and content are the
> practice's own, retrieved from watermandentistry.com and stored locally.

## Tech stack
- React 18 + TypeScript
- Vite 5
- Tailwind CSS 3
- lucide-react icons

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
```

## Build & preview
```bash
npm run build
npm run preview
```

## Deploy to Vercel
Zero config — Vercel auto-detects Vite (Build: `npm run build`, Output: `dist`).
Import the repo in Vercel and deploy, or run `vercel`.

## Editing content
All business content (NAP, hours, services, testimonials, links, images) lives in
[`src/data/site.ts`](src/data/site.ts). External links (appointment, service pages)
are centralized there so they can be re-pointed after launch.

- Toggle the "Homepage Redesign Concept" badge with `SHOW_CONCEPT_BADGE` in `src/data/site.ts`.
- Asset provenance is documented in
  [`public/images/waterman/ASSET-MANIFEST.md`](public/images/waterman/ASSET-MANIFEST.md).

## Sections
Utility bar → Header (sticky, mobile drawer) → Hero → Trust strip → Welcome →
Services → Dr. Waterman → Patient experience → Office gallery (lightbox) →
Testimonials → Appointment CTA → Location & hours (map) → Footer → mobile action bar.

## Notes
- Homepage-only concept; internal nav scrolls to sections, service/appointment
  buttons link to the corresponding live pages.
- Contact info uses the current authoritative address
  (879 Lynnhaven Parkway, Suite 109, Virginia Beach, VA 23452) — the outdated
  Great Neck Road address is intentionally excluded.
