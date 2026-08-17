# Akshaya Verma — Personal Portfolio

Minimal, cinematic, editorial personal portfolio. Black / white / grayscale,
typography-led, built in staged passes.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Motion (`motion/react`) for the intro/tunnel sequence
- `next/font/google`: Bodoni Moda (display) + Inter (interface)

## Structure

```
app/                    routes, global styles
components/
  intro/                black-screen identity moment      (Stage 2)
  tunnel/                optical-illusion camera sequence  (Stage 2)
  portfolio/             homepage + sections                (Stage 3–4)
  ui/                     small shared primitives
lib/
  animation-config.ts    every timing/easing/depth constant, centralized
  utils.ts                cn() class-name helper
public/
  images/                 static image assets (incl. illusion reference)
  fonts/                  reserved for local font files if ever needed
```

## Design tokens

Defined as CSS custom properties in `app/globals.css`:
- Palette: `--color-black`, `--color-white`, and grayscale steps between —
  no color accents, per the brief.
- Type: `.text-display-*` (Bodoni Moda, identity) vs `.text-body` /
  `.text-meta` / `.text-nav` (Inter, function).
- Layout: `.container-edit` (max-width + fluid gutter), `.hairline-*`
  (1px dividers), `.on-white` (inverted surface).

## Animation configuration

All durations, delays, easing curves, and tunnel-layer depth values live in
`lib/animation-config.ts`. Components should never hard-code these — import
from this file so the cinematic sequence stays tunable from one place.

## Development

```bash
npm run dev
```

## Stage plan

1. **Foundation** (this state) — project setup, typography, tokens, folders.
2. **Intro + tunnel** — black screen → name → optical illusion → 2.5D camera
   push → transition.
3. **Homepage** — main portfolio landing content.
4. **Sections** — remaining portfolio content.
5. **Polish** — mobile, performance, accessibility, micro-interactions.
