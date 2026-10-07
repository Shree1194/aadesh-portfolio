# Aadesh Kapadnis — Data Analyst Portfolio

A responsive personal portfolio for a 2026 Electronics & Telecommunication graduate focused on SQL, Python, Excel, Power BI and practical data analysis.

**Live site:** https://shree1194.github.io/aadesh-portfolio/

## Stack

Next.js 15 App Router, React 19, TypeScript, Tailwind CSS 4, Framer Motion and Lucide. The site uses static export; no backend or paid hosting is required.

## Local development

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000/aadesh-portfolio/.

## Production build

```sh
npm run typecheck
npm run build
```

The deployable output is `out/`. It contains a static home page, four project case studies, a custom 404, sitemap, robots.txt and all local assets.

## Deployment

GitHub Pages serves the root of the `gh-pages` branch. `main` contains source code; `gh-pages` contains only the production static export. A `.nojekyll` file allows the `_next` asset directory to be served without Jekyll processing.

To publish an update, build the source on `main`, commit the contents of `out/` to `gh-pages`, and push that branch. GitHub's Pages deployment workflow publishes the static site automatically. The repository Settings > Pages source must remain `gh-pages` / root.

The base path and canonical origin are centralized in `lib/site.ts`. Next.js prefixes internal links; public images and the favicon use the same base path. Case studies are actual exported directory routes, so direct navigation and refresh do not require SPA rewrites.

## Structure

- `app/`: pages, styles and SEO metadata
- `components/`: portfolio sections, motion and project illustrations
- `lib/projects.ts`: project content
- `lib/site.ts`: deployment origin and asset path helpers
- `public/`: portrait, favicon and project chart

## Content notes

Education and experience come from the supplied portfolio brief. Public repository buttons are shown only for verified repositories. Illustrative project covers are labelled; the e-commerce case study includes an authentic chart from its linked repository.

The character portrait was generated from the owner's supplied photo and reference. The original photo is not included.

**Resume PDF has not been supplied.** The download remains unavailable, with an email request alternative. Add the authentic PDF to `public/resume.pdf` and update the resume links using `assetUrl('/resume.pdf')` to enable it.

## Accessibility

Semantic sections, keyboard-accessible controls, visible focus indicators, skip links, responsive layouts and reduced-motion support. The short preloader runs once per browser session.

No API keys or secrets are needed. Local environment files, dependencies and build caches are excluded from source control.
