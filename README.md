# Octopus

A product website built with Next.js (App Router), based on the provided Figma design and PDF brief: homepage with hero, best sellers carousel, category sections and banners, plus a product detail route.

- **Live demo:** <https://octopus-zuru.vercel.app>
- **Repository:** <https://github.com/sergiomorenzetti/octopus-zuru.git>

## Setup and run

Requirements: Node.js >= 20.9.0 (recommended: Node.js 24.x), npm >= 10

```bash
npm install
npm run dev            # http://localhost:3000
```

Other scripts:

```bash
npm run build          # production build
npm run start          # serve the production build
npm run test:vitest    # unit tests
npm run test:playwright  # end-to-end test (needs: npx playwright install chromium)
npm test               # both
npm run lint           # ESLint
```

## Tech stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Headless UI, Embla Carousel, Vitest + React Testing Library, Playwright.

## Architecture and component approach

- **Atomic-style structure.** Small, reusable pieces live in `components/atoms` (such as `Button` or `Icon`). Larger sections (header, footer, `Banner` etc.) compose them.
- **Variants over duplication.** Components such as `Button` and `Banner` expose a `variant` prop. Class names live in typed maps (`as const satisfies Record<Variant, string>`), so a missing variant is a compile error, and Tailwind still sees complete class strings.

## Design notes and discrepancies

- **Figma export is disabled**, so I could not export images, the color list or icons. I used the SVGs I already had and created some images myself (e.g. the hero banner).
- **The carousel has no dots.** The spec asks for them, but they do not appear in the Figma designs, so I did not build them.
- **Inconsistencies between the PDF and the Figma file:** header menu (in the spec, below 1200 px the navigation collapses into a menu), slider dots, and the export settings above. Where they disagreed, I followed the Figma file.

## Scope: what is not done

I did not complete everything requested. The main gaps:

- The product detail page is a placeholder that renders the slug only.
- The all-categories component on the homepage.
- Meaningful tests.

## Trade-offs

Due to time constraints, I did not make everything data-driven: only the products are.

## What I would do with more time

- Build the product detail page (PDP).
- Drive the whole homepage, and pages in general, from JSON data.
- Align the `ProductCard` component with the Figma design system. Due to time constraints, I stopped at the solution proposed by the AI.
- Expand the design tokens and atomic components, and align the existing components with the Figma design system.
- Extend the tests.
- ...

## How I used AI tools

- **Tools:** Claude Code (main tool), GitHub Copilot and Claude chat (occasionally).
- **By hand:** mainly project setup and the foundations: header, footer, `Button` and `Icon` and other components. I wrote these myself to set the structure and conventions.
- **With AI:** mainly `ProductCard`, `CategorySection`, the tests, the Vitest and Playwright setup, the README and parts of the SEO.
- **Corrections:** I had to review and re-iterate on the AI output almost every time.
