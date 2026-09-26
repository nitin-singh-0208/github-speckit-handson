# Quickstart & Validation Guide

## Prerequisites
- Node.js (v18+)
- npm or pnpm

## Local Development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000` to view the landing page.

## Validating Static Export
To verify the site strictly adheres to static site generation without server dependencies:
1. Build the static site:
   ```bash
   npm run build
   ```
2. The output should successfully generate an `out/` directory.
3. Serve the static files locally:
   ```bash
   npx serve@latest out
   ```
4. Verify navigation works perfectly without any backend server.

## End-to-End Testing
*(Assuming Playwright or Cypress is configured)*
1. Run E2E tests against the static build:
   ```bash
   npm run test:e2e
   ```
