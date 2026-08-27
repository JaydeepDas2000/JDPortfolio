# Jaydeep Das — Portfolio

A single-page React (Vite + Tailwind) portfolio.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

This outputs a static site into `dist/`, which you can deploy to
Vercel, Netlify, GitHub Pages, or any static host.

## Project structure

```
portfolio-react/
├── index.html          entry HTML
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx         React root
    ├── index.css        Tailwind + base styles
    └── App.jsx          the entire portfolio (all sections)
```

## Editing content

All copy, project data, experience, and skills live as constants near
the top of `src/App.jsx` (`PROJECTS`, `EXPERIENCE`, `SKILL_GROUPS`,
`PARTNERS`, `CERTIFICATIONS`). Update those arrays to change the
content — the layout will re-render automatically.

## Placeholder images

- Case-study thumbnails pull real cover images from Behance.
- The About-section portrait uses a placeholder (`i.pravatar.cc`).
  Swap that `src` for your own photo when ready.
