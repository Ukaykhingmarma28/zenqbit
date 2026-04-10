# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Zen** — a Next.js 16 application using React 19, TypeScript, and Tailwind CSS v4. Uses the App Router exclusively.

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

## Tech Stack

- **Next.js 16.2.3** (App Router) with **React 19.2.4**
- **TypeScript** (strict mode, bundler module resolution)
- **Tailwind CSS v4** via `@tailwindcss/postcss` — uses `@import "tailwindcss"` and `@theme inline` syntax in `app/globals.css`
- **Fonts**: Geist Sans + Geist Mono via `next/font/google`, exposed as CSS variables `--font-geist-sans` / `--font-geist-mono`

## Architecture

- **App Router only** — all routes live under `app/`
- `app/layout.tsx` — root layout, sets fonts and base HTML structure
- `app/page.tsx` — home page (Server Component by default)
- `app/globals.css` — global styles with Tailwind v4 theme tokens
- Path alias: `@/*` maps to project root

## Key Conventions

- Tailwind v4 uses `@theme inline` blocks for design tokens — do not use `tailwind.config.js` (there is none)
- Custom colors `background` and `foreground` are defined as CSS variables in `globals.css` and registered in the `@theme inline` block
- ESLint uses flat config (`eslint.config.mjs`) with `eslint-config-next` core-web-vitals and TypeScript presets
