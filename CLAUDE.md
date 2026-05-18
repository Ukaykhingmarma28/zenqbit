# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Zenqbit** — a corporate marketing website for a software solutions company. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4. App Router only, no API routes.

## CRITICAL: Next.js 16 Breaking Changes

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

Key breaking change: `params` in dynamic routes must be awaited — `const { slug } = await params`.

## Commands

```bash
npm run dev       # Start dev server (http://localhost:3000)
npm run build     # Production build (standalone output)
npm run start     # Start production server
npm run lint      # ESLint (flat config, core-web-vitals + typescript)
```

No test runner is configured.

### Docker

```bash
docker compose up --build   # Build and run at http://localhost:3000
```

Multi-stage Dockerfile using Node 20 Alpine. Requires `output: "standalone"` in `next.config.ts` (already set).

## Tech Stack

- **Next.js 16.2.3** (App Router) with **React 19.2.4**
- **TypeScript** (strict mode, bundler module resolution)
- **Tailwind CSS v4** via `@tailwindcss/postcss` — uses `@import "tailwindcss"` and `@theme inline` syntax in `app/globals.css`. There is no `tailwind.config.js`.
- **shadcn/ui** (style: `base-nova`, RSC-enabled, backed by `@base-ui/react`) — components in `components/ui/`, configured via `components.json`. Install via `npx shadcn@latest add <component>`.
- **Embla Carousel** with autoplay plugin
- **Lucide React** for icons — lucide-react has no social media brand icons; use inline SVGs for Facebook, LinkedIn, Twitter, YouTube etc.
- **Fonts**: Uncut Sans (local, `--font-sans`, weights 400–700) as primary; Geist Mono (Google, `--font-geist-mono`) as monospace

## Architecture

### Routing & Layout

All routes live under `app/`. Pages are Server Components by default.

| Route | Description |
|-------|-------------|
| `/` | Homepage (`app/page.tsx`) — hero, services, industries, process, tech stack, dev excellence, global offices |
| `/about`, `/blog`, `/careers`, `/contact`, `/work` | Static pages |
| `/services/[slug]` | Dynamic service detail pages, statically generated via `generateStaticParams()` from `lib/services.ts` |
| `/industries/[slug]` | Dynamic industry detail pages, statically generated via `generateStaticParams()` from `lib/industries.ts` |

`app/layout.tsx` renders a shared `<Navbar />` and `<Footer />` wrapping all pages. The Footer component includes a CTA block. Some detail pages (e.g., industries) also render their own inline CTA sections.

### Components

- `components/ui/` — shadcn/ui primitives (do not manually create files here)
- `components/navbar.tsx` — client component, site navigation
- `components/footer.tsx` — server component, includes CTA block + 6-column footer with inline SVG social icons
- `components/hero-slider.tsx` — client component, homepage hero carousel
- `components/lazy-hero-slider.tsx` — client component, dynamic import wrapper for hero-slider (SSR disabled, shows skeleton while loading)
- `components/hero-flow/` — client component, animated flow canvas for the hero section (has its own engine, types, and icons)
- `components/features-showcase.tsx` — server component, homepage feature cards
- `components/schedule-form.tsx` — client component, multi-step scheduling form (service → industry → date/time → contact details)

### Data

- `lib/services.ts` — service definitions (slug, title, description, features, process, use cases, FAQs) used by both the homepage and `/services/[slug]` pages
- `lib/industries.ts` — industry definitions (slug, name, tagline, features, use cases, FAQs, brand color) used by the homepage and `/industries/[slug]` pages
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)

### Static Assets

- `public/` — images organized by concern: `services/`, `industries/`, `tech/` subdirectories, plus office SVG illustrations
- `app/fonts/` — local Uncut Sans woff2 files

### Brand Palette & Animations

The brand color palette is defined in `globals.css` under `@theme inline`:
- `brand-coral` (#F0544F) — primary accent, used for CTAs, highlights, and section labels
- `brand-green` (#355146), `brand-blue` (#7296C0), `brand-teal` (#11769A) — secondary colors
- `brand-dark` (#141414), `brand-white` (#FFFFFF) — base colors

Custom entrance animation classes are defined in `globals.css`: `animate-fade-in`, `animate-fade-up`, `animate-fade-down`, `animate-scale-in`, `animate-slide-in-right`, `animate-slide-in-left`. Stagger with `delay-1` through `delay-5` (80ms increments). All respect `prefers-reduced-motion`.

## Key Conventions

- Path alias: `@/*` maps to project root
- Client components must have `"use client"` directive
- ESLint uses flat config (`eslint.config.mjs`) with `eslint-config-next` core-web-vitals and TypeScript presets
