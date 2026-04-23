# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Zenqbit** — a marketing/corporate website for a software solutions company. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4. App Router only.

<!-- BEGIN:nextjs-agent-rules -->
## CRITICAL: Next.js 16 Breaking Changes

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Commands

```bash
npm run dev       # Start dev server (http://localhost:3000)
npm run build     # Production build
npm run start     # Start production server
npm run lint      # ESLint (flat config, core-web-vitals + typescript)
```

No test runner is configured.

## Tech Stack

- **Next.js 16.2.3** (App Router) with **React 19.2.4**
- **TypeScript** (strict mode, bundler module resolution)
- **Tailwind CSS v4** via `@tailwindcss/postcss` — uses `@import "tailwindcss"` and `@theme inline` syntax in `app/globals.css`
- **shadcn/ui** (style: `base-nova`, RSC-enabled) — components in `components/ui/`, configured via `components.json`
- **Embla Carousel** with autoplay plugin for carousels
- **Lucide React** for icons (note: lucide-react has no social media brand icons — use inline SVGs for Facebook, LinkedIn, Twitter, YouTube etc.)
- **Fonts**: Uncut Sans (local, `--font-sans`, weights 400–700) as primary; Geist Mono (Google, `--font-geist-mono`) as monospace

## Architecture

### Routing

All routes live under `app/`. Pages are Server Components by default.

- `/` — homepage (`app/page.tsx`, ~770 lines — contains hero, services, industries, process, tech stack, dev excellence, global offices sections inline)
- `/about`, `/blog`, `/careers`, `/contact`, `/work` — static pages
- `/services/[slug]` — dynamic service detail pages, statically generated via `generateStaticParams()` from `lib/services.ts`

### Layout

`app/layout.tsx` renders a shared `<Navbar />` and `<Footer />` wrapping all pages. The CTA section is embedded inside the Footer component, not on individual pages.

### Components

- `components/ui/` — shadcn/ui primitives (badge, button, card, carousel, separator)
- `components/navbar.tsx` — client component, site navigation
- `components/footer.tsx` — server component, includes CTA block + 6-column footer with inline SVG social icons
- `components/hero-slider.tsx` — client component, homepage hero carousel
- `components/hero-flow/` — client component, animated flow canvas for the hero section (has its own engine, types, and icons)
- `components/features-showcase.tsx` — server component, homepage feature cards

### Data

- `lib/services.ts` — service definitions (slug, title, description, features, etc.) used by both the homepage and `/services/[slug]` pages
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)

### Static Assets

- `public/` — images organized by concern: `services/`, `industries/`, `tech/` subdirectories, plus office SVG illustrations and favicon assets
- `app/fonts/` — local Uncut Sans woff2 files
- Remote images allowed from `i.pravatar.cc` and `picsum.photos` (configured in `next.config.ts`)

## Key Conventions

- Tailwind v4 uses `@theme inline` blocks for design tokens in `app/globals.css` — there is no `tailwind.config.js`
- Path alias: `@/*` maps to project root
- `params` in dynamic routes must be awaited (`const { slug } = await params`) — this is a Next.js 15+ change
- Client components must have `"use client"` directive. Currently: navbar, hero-slider, hero-flow, carousel, separator
- ESLint uses flat config (`eslint.config.mjs`) with `eslint-config-next` core-web-vitals and TypeScript presets
- shadcn components are installed via `npx shadcn@latest add <component>` — do not manually create files in `components/ui/`
