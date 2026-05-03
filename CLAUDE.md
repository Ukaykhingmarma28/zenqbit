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
- **shadcn/ui** (style: `base-nova`, RSC-enabled) — components in `components/ui/`, configured via `components.json`. Install via `npx shadcn@latest add <component>`.
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

`app/layout.tsx` renders a shared `<Navbar />` and `<Footer />` wrapping all pages. The CTA section is embedded inside the Footer component, not on individual pages.

### Components

- `components/ui/` — shadcn/ui primitives (do not manually create files here)
- `components/navbar.tsx` — client component, site navigation
- `components/footer.tsx` — server component, includes CTA block + 6-column footer with inline SVG social icons
- `components/hero-slider.tsx` — client component, homepage hero carousel
- `components/hero-flow/` — client component, animated flow canvas for the hero section (has its own engine, types, and icons)
- `components/features-showcase.tsx` — server component, homepage feature cards

### Data

- `lib/services.ts` — service definitions (slug, title, description, features) used by both the homepage and `/services/[slug]` pages
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)

### Static Assets

- `public/` — images organized by concern: `services/`, `industries/`, `tech/` subdirectories, plus office SVG illustrations
- `app/fonts/` — local Uncut Sans woff2 files
- Remote images allowed from `i.pravatar.cc` and `picsum.photos` (configured in `next.config.ts`)

## Key Conventions

- Path alias: `@/*` maps to project root
- Client components must have `"use client"` directive
- ESLint uses flat config (`eslint.config.mjs`) with `eslint-config-next` core-web-vitals and TypeScript presets
