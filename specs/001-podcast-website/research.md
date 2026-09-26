# Phase 0: Outline & Research

## Decision 1: Next.js Routing Strategy
- **Decision**: Use Next.js App Router (`app/` directory).
- **Rationale**: App Router is the modern standard for Next.js and fully supports static site generation (`output: 'export'`). It simplifies layouts and data fetching (even when mocked) natively.
- **Alternatives considered**: Pages Router (deprecated in the long term, less ergonomic layouts).

## Decision 2: Styling Approach
- **Decision**: Vanilla CSS / CSS Modules.
- **Rationale**: Ensures complete control over the "sleek, modern" aesthetic without relying on utility classes or external frameworks unless explicitly requested, adhering strictly to standard web practices.
- **Alternatives considered**: TailwindCSS (rejected to maintain vanilla flexibility and adhere to web app aesthetics guidelines unless explicitly requested).

## Decision 3: Mock Data Integration
- **Decision**: Statically typed TypeScript arrays in `src/data/`.
- **Rationale**: Keeps data strongly typed and easily importable directly into components. At build time, this data is baked into the static HTML.
- **Alternatives considered**: Local JSON files (requires file system reading or import assertions, slightly less ergonomic than plain TS).
