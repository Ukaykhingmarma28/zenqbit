<p align="center">
  <img src="public/logo.svg" alt="Zenqbit" width="280" />
</p>

<h3 align="center">Software Solutions for Modern Businesses</h3>

<p align="center">
  Web development, mobile apps, AI, IoT, and automation — built with Next.js 16, React 19, and Tailwind CSS v4.
</p>

---

## Tech Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript** (strict mode)
- **Tailwind CSS v4**
- **shadcn/ui** (base-nova style)
- **Embla Carousel** with autoplay
- **Lucide React** icons

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Production build         |
| `npm run start`   | Start production server  |
| `npm run lint`    | Run ESLint               |

## Docker

```bash
docker compose up --build
```

Runs the production build on port 3000.

## Project Structure

```
app/
  page.tsx              # Homepage
  about/                # About page
  blog/                 # Blog page
  careers/              # Careers page
  contact/              # Contact page
  services/[slug]/      # Dynamic service detail pages
  work/                 # Portfolio page
  layout.tsx            # Root layout (Navbar + Footer)
  globals.css           # Tailwind v4 theme tokens
components/
  ui/                   # shadcn/ui primitives
  navbar.tsx            # Site navigation
  footer.tsx            # Footer with CTA block
  hero-slider.tsx       # Homepage hero carousel
  hero-flow/            # Animated flow canvas
  features-showcase.tsx # Feature cards
lib/
  services.ts           # Service definitions data
  utils.ts              # cn() helper
```

## License

All rights reserved.
