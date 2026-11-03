# ChaseHorse – Coming Soon

The coming soon landing page for **ChaseHorse**, shown while the main portal is under development.

It is a single full-screen page with a dark, cinematic background (animated gold light layers) and a staggered reveal of the logo, the heading "Something Better Is Coming.", a short description, and a "We'll Be Back Soon" status badge.

## Tech stack

- [React 18](https://react.dev/)
- [Vite 6](https://vite.dev/)
- CSS Modules for component styles
- Google Fonts: Cormorant Garamond and Inter

## Getting started

Requires [Node.js](https://nodejs.org/) 18 or newer.

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:5173
```

## Scripts

| Command           | What it does                              |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Start the local development server        |
| `npm run build`   | Build the production site into `dist/`    |
| `npm run preview` | Serve the production build locally        |

## Project structure

```
├── index.html            # HTML entry point (title, meta, fonts)
├── public/               # Static assets (logo images)
├── src/
│   ├── main.jsx          # React entry point
│   ├── App.jsx           # Renders the ComingSoon page
│   ├── components/       # Page components and their CSS Modules
│   ├── hooks/            # useTransparentLogo (strips a logo's white background)
│   └── styles/           # Global styles
└── vite.config.js        # Vite configuration
```

## Deployment

Run `npm run build` and deploy the generated `dist/` folder to any static host (Vercel, Netlify, GitHub Pages, etc.). `dist/` and `node_modules/` are not committed.

---

© ChaseHorse. All rights reserved.
