# ThriveSparrow vs Lattice — Comparison Page Rebuild

A from-scratch rebuild of ThriveSparrow's "ThriveSparrow vs Lattice" comparison
page, created as a product marketing assignment. Built with React + Vite.

## Brief

Pick one of ThriveSparrow's comparison pages (found in the site footer) and
rebuild it: new structure, new argument, new words, new design — not a
spruce-up of the original.

## What's different from the original

- **Argument:** reframes the comparison around total cost of ownership
  (what's bundled vs. sold separately) instead of a feature-checkmark race.
- **Structure:** a line-item "ledger" table, a receipt-style hero visual, a
  side-by-side workflow scenario, and an honest "where the competitor still
  wins" section — none of which exist on the original page.
- **Design:** a paper-and-ink palette with serif headlines (Fraunces) and a
  sans body (IBM Plex Sans), full-width alternating section bands so the
  page doesn't sit as a narrow column on wide screens, and a torn-receipt
  visual in the hero tying back to the "line item" argument.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs a static site to `dist/`, deployable as-is to Vercel (framework
preset: Vite).

## Disclaimer

Independent rebuild made for a product marketing assignment. Not an
official ThriveSparrow property.
