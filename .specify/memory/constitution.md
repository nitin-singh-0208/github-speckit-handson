<!-- SYNC IMPACT REPORT
Version: Initial Draft -> 1.0.0
Modified Principles:
  - Added Principle 1: I. Simple Architecture
  - Added Principle 2: II. Build Process
  - Added Principle 3: III. Responsive Design
  - Added Principle 4: IV. Performance First
  - Added Principle 5: V. Semantic HTML
Added Sections:
  - Technical Constraints
  - Development Workflow
Removed Sections: None
Follow-up TODOs: None
-->
# Static Web App Constitution

## Core Principles

### I. Simple Architecture
The web application MUST be served as static HTML/CSS/JS files without requiring a server-side backend at runtime.

### II. Build Process
All static assets MUST be pre-compiled during the build phase (e.g., using a static site generator or bundler).

### III. Responsive Design
The web app MUST be usable on mobile, tablet, and desktop devices without breaking the layout.

### IV. Performance First
Images and assets MUST be optimized. The app MUST aim for fast Largest Contentful Paint (LCP) and avoid render-blocking resources.

### V. Semantic HTML
The app MUST use semantic HTML5 elements and ensure basic accessibility (a11y) standards are met.

## Technical Constraints

Use standard HTML/CSS/JS or a static site generator. No server-side rendering (SSR) or active databases are allowed for content serving.

## Development Workflow

1. Develop locally with a simple HTTP server.
2. Verify the build output before deploying.
3. Deploy the `dist` or `public` directory to static hosting (e.g., GitHub Pages, Vercel, Netlify).

## Governance

Any changes to the tech stack MUST preserve the static nature of the app. Adding backend requirements requires a formal amendment to this constitution. All pull requests MUST verify compliance with these static architecture constraints.

**Version**: 1.0.0 | **Ratified**: 2026-09-26 | **Last Amended**: 2026-09-26
