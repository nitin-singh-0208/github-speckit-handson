# Implementation Plan: podcast-website

**Branch**: `001-podcast-website` | **Date**: 2026-09-26 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `specs/001-podcast-website/spec.md`

## Summary

Build a modern, sleek podcast website using Next.js configured for static site generation (SSG). The site will feature a landing page with one featured episode, an episodes page listing 20 mocked episodes, and an FAQ page. Data will be embedded in the content without any active databases.

## Technical Context

**Language/Version**: TypeScript / Next.js

**Primary Dependencies**: Next.js, React, CSS Modules

**Storage**: None (Embedded Mock Data in JSON/TS format)

**Testing**: Jest and React Testing Library

**Target Platform**: Static Web Hosting (e.g., Vercel, Netlify, GitHub Pages)

**Project Type**: Web application (Static Site)

**Performance Goals**: Fast Largest Contentful Paint (LCP), no render-blocking resources, optimized assets.

**Constraints**: MUST strictly use static site configuration (no SSR, no active databases).

**Scale/Scope**: 3 Pages (Landing, Episodes, FAQ), 20 Mocked Episodes.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **I. Simple Architecture**: PASS. Next.js will be configured to output static HTML/CSS/JS (via `output: 'export'`). No backend required.
- **II. Build Process**: PASS. Next.js will pre-compile all assets during the build phase.
- **III. Responsive Design**: PASS. CSS will employ media queries and flexible layouts for mobile readiness.
- **IV. Performance First**: PASS. Static generation inherently supports fast LCP, and Next.js Image optimization will be utilized during build if applicable, or standard optimized assets.
- **V. Semantic HTML**: PASS. Components will use proper HTML5 semantics.

## Project Structure

### Documentation (this feature)

```text
specs/001-podcast-website/
├── plan.md              
├── research.md          
├── data-model.md        
├── quickstart.md        
├── contracts/           
└── tasks.md             
```

### Source Code (repository root)

```text
src/
├── app/
│   ├── episodes/
│   │   └── page.tsx
│   ├── faq/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── EpisodeCard.tsx
│   ├── FeaturedEpisode.tsx
│   └── FAQItem.tsx
├── data/
│   ├── episodes.ts
│   └── faqs.ts
└── styles/
    └── [CSS Modules]
```

**Structure Decision**: Next.js App Router structure with a dedicated `data` directory for mocked content, ensuring no backend logic is required.

## Complexity Tracking

No violations. The architecture remains extremely simple and perfectly aligned with the constitution.
