# Graph Report - zen  (2026-05-19)

## Corpus Check
- 56 files · ~347,229 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 307 nodes · 498 edges · 24 communities (16 shown, 8 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f5a1abe7`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]

## God Nodes (most connected - your core abstractions)
1. `cn()` - 46 edges
2. `compilerOptions` - 16 edges
3. `drawLucide()` - 12 edges
4. `buttonVariants` - 9 edges
5. `ServicePage()` - 8 edges
6. `IndustryPage()` - 8 edges
7. `services` - 8 edges
8. `Separator()` - 8 edges
9. `JsonLd()` - 7 edges
10. `Badge()` - 7 edges

## Surprising Connections (you probably didn't know these)
- `cn()` --calls--> `clsx`  [INFERRED]
  lib/utils.ts → package.json
- `CardAction()` --calls--> `cn()`  [EXTRACTED]
  components/ui/card.tsx → lib/utils.ts
- `CardFooter()` --calls--> `cn()`  [EXTRACTED]
  components/ui/card.tsx → lib/utils.ts
- `Home()` --calls--> `getWebPageSchema()`  [EXTRACTED]
  app/page.tsx → lib/schemas.ts
- `ServicePage()` --calls--> `cn()`  [EXTRACTED]
  app/services/[slug]/page.tsx → lib/utils.ts

## Communities (24 total, 8 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.09
Nodes (26): BRAND_PATH_STRINGS, createFlow(), Particle, FlowColors, FlowHandle, FlowOptions, IconDrawFn, Layout (+18 more)

### Community 1 - "Community 1"
Cohesion: 0.13
Nodes (27): NotFound(), Home(), processSteps, cards, FeaturesShowcase(), HeroFlow, getIndustryBySlug(), getBreadcrumbSchema() (+19 more)

### Community 2 - "Community 2"
Cohesion: 0.12
Nodes (23): MegaPanel, MobileDrawer(), Navbar(), navLinks, MONTHS, STEPS, TIME_SLOTS, WEEKDAYS (+15 more)

### Community 3 - "Community 3"
Cohesion: 0.06
Nodes (31): dependencies, @base-ui/react, class-variance-authority, clsx, embla-carousel-autoplay, embla-carousel-react, lucide-react, next (+23 more)

### Community 4 - "Community 4"
Cohesion: 0.11
Nodes (22): AboutPage(), domains, metadata, strengths, geistMono, metadata, RootLayout(), uncutSans (+14 more)

### Community 5 - "Community 5"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 6 - "Community 6"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 7 - "Community 7"
Cohesion: 0.12
Nodes (13): industries, Industry, IndustryFAQ, IndustryFeature, IndustryUseCase, FAQ, ProcessStep, Service (+5 more)

### Community 8 - "Community 8"
Cohesion: 0.15
Nodes (17): HeroSlider(), Slide, slides, Stat, Carousel(), CarouselApi, CarouselContent(), CarouselContext (+9 more)

### Community 9 - "Community 9"
Cohesion: 0.12
Nodes (14): Architecture, Brand Palette & Animations, code:bash (npm run dev       # Start dev server (http://localhost:3000)), code:bash (docker compose up --build   # Build and run at http://localh), Commands, Components, CRITICAL: Next.js 16 Breaking Changes, Data (+6 more)

### Community 10 - "Community 10"
Cohesion: 0.20
Nodes (9): code:bash (# Install dependencies), code:bash (docker compose up --build), code:block3 (app/), Docker, Getting Started, License, Project Structure, Scripts (+1 more)

### Community 12 - "Community 12"
Cohesion: 0.40
Nodes (4): enableAllProjectMcpServers, enabledMcpjsonServers, permissions, allow

## Knowledge Gaps
- **135 isolated node(s):** `eslintConfig`, `name`, `version`, `private`, `dev` (+130 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `Community 2` to `Community 8`, `Community 1`, `Community 3`?**
  _High betweenness centrality (0.155) - this node is a cross-community bridge._
- **Why does `clsx` connect `Community 3` to `Community 2`?**
  _High betweenness centrality (0.090) - this node is a cross-community bridge._
- **What connects `eslintConfig`, `name`, `version` to the rest of the system?**
  _135 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.09309309309309309 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.12698412698412698 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.12310606060606061 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.0625 - nodes in this community are weakly interconnected._