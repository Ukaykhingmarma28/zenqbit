# Graph Report - zenqbit  (2026-05-20)

## Corpus Check
- 50 files · ~347,030 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 421 nodes · 628 edges · 27 communities (18 shown, 9 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `5c6cdff6`
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
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]

## God Nodes (most connected - your core abstractions)
1. `cn()` - 48 edges
2. `compilerOptions` - 16 edges
3. `compilerOptions` - 16 edges
4. `dependencies` - 13 edges
5. `dependencies` - 13 edges
6. `drawLucide()` - 12 edges
7. `devDependencies` - 10 edges
8. `devDependencies` - 10 edges
9. `buttonVariants` - 9 edges
10. `IndustryPage()` - 8 edges

## Surprising Connections (you probably didn't know these)
- `cn()` --calls--> `clsx`  [INFERRED]
  lib/utils.ts → package.json
- `cn()` --calls--> `clsx`  [INFERRED]
  lib/utils.ts → package.json
- `Home()` --calls--> `getWebPageSchema()`  [EXTRACTED]
  app/page.tsx → lib/schemas.ts
- `IndustryPage()` --calls--> `cn()`  [EXTRACTED]
  app/industries/[slug]/page.tsx → lib/utils.ts
- `IndustryPage()` --calls--> `buttonVariants`  [EXTRACTED]
  app/industries/[slug]/page.tsx → components/ui/button.tsx

## Communities (27 total, 9 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.09
Nodes (29): BRAND_PATH_STRINGS, BRAND_PATHS, createFlow(), Particle, FlowColors, FlowHandle, FlowOptions, IconDrawFn (+21 more)

### Community 1 - "Community 1"
Cohesion: 0.07
Nodes (45): AboutPage(), domains, metadata, strengths, NotFound(), Home(), processSteps, cards (+37 more)

### Community 2 - "Community 2"
Cohesion: 0.07
Nodes (44): bs23, HeroSlider(), Slide, slides, Stat, StatBlock(), MegaPanel, MobileDrawer() (+36 more)

### Community 3 - "Community 3"
Cohesion: 0.05
Nodes (39): dependencies, @base-ui/react, class-variance-authority, clsx, embla-carousel-autoplay, embla-carousel-react, lucide-react, next (+31 more)

### Community 4 - "Community 4"
Cohesion: 0.18
Nodes (12): geistMono, metadata, RootLayout(), uncutSans, company, Footer(), industries, industries2 (+4 more)

### Community 5 - "Community 5"
Cohesion: 0.05
Nodes (42): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+34 more)

### Community 6 - "Community 6"
Cohesion: 0.09
Nodes (21): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+13 more)

### Community 8 - "Community 8"
Cohesion: 0.12
Nodes (17): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+9 more)

### Community 9 - "Community 9"
Cohesion: 0.06
Nodes (28): Architecture, Brand Palette & Animations, code:bash (npm run dev       # Start dev server (http://localhost:3000)), code:bash (docker compose up --build   # Build and run at http://localh), Commands, Components, CRITICAL: Next.js 16 Breaking Changes, Data (+20 more)

### Community 10 - "Community 10"
Cohesion: 0.11
Nodes (18): code:bash (# Install dependencies), code:bash (docker compose up --build), code:block3 (app/), Docker, Getting Started, License, Project Structure, Scripts (+10 more)

### Community 12 - "Community 12"
Cohesion: 0.4
Nodes (4): enableAllProjectMcpServers, enabledMcpjsonServers, permissions, allow

### Community 24 - "Community 24"
Cohesion: 0.5
Nodes (4): ScheduleForm(), ContactPage(), metadata, getContactPageSchema()

### Community 25 - "Community 25"
Cohesion: 0.15
Nodes (13): dependencies, @base-ui/react, class-variance-authority, clsx, embla-carousel-autoplay, embla-carousel-react, lucide-react, next (+5 more)

### Community 26 - "Community 26"
Cohesion: 0.2
Nodes (10): devDependencies, eslint, eslint-config-next, playwright, tailwindcss, @tailwindcss/postcss, @types/node, @types/react (+2 more)

## Knowledge Gaps
- **222 isolated node(s):** `$schema`, `style`, `rsc`, `tsx`, `config` (+217 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `Community 2` to `Community 1`, `Community 3`, `Community 25`?**
  _High betweenness centrality (0.140) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Community 25` to `Community 3`?**
  _High betweenness centrality (0.056) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `cn()` (e.g. with `clsx` and `clsx`) actually correct?**
  _`cn()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `$schema`, `style`, `rsc` to the rest of the system?**
  _222 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.09 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.07 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.07 - nodes in this community are weakly interconnected._