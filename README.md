# Personal Portfolio (Raman Mishra)

A recruiter-friendly developer portfolio built with Next.js and TypeScript. It highlights profile, skills, projects, and contact details, with an interactive mini-game on the home page.

## Highlights
- App Router layout with dedicated routes: `/`, `/about`, `/projects`, `/contact`.
- Project showcase with tech filter and image cards.
- Contact page with structured sidebar and form layout.
- Interactive Snake game embedded on the landing page.

## Tech Stack
- Next.js 14 + React 18 + TypeScript
- Tailwind CSS (global utilities) + component CSS
- styled-components (installed; use when needed)

## Getting Started
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

## Key Project Paths
- `src/app`: App Router pages and route segments.
- `src/components`: Reusable sections (bio, education, projects, snake game).
- `public`: Static assets referenced by the UI.
- `globals.css`: Global styles.

## Customizing Content
- Home intro: `src/app/page.tsx`
- About tabs & sections: `src/app/about/page.tsx`, `src/components/*Section.tsx`
- Projects data/cards: `src/app/projects/page.tsx`
- Contact details: `src/app/contact/page.tsx`

## Build & Lint
```bash
npm run build
npm run lint
```
