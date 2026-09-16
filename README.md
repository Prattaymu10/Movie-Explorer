# 🎬 MovieExplorer

A responsive movie/show explorer built with React, Vite, plain CSS, and the [TVMaze API](https://www.tvmaze.com/api).

## Features
- **Home page** — navbar, hero banner with CTA into the listing page, footer.
- **Movie Listing page** — live search (debounced) by title via `/search/shows`, falls back to the full catalog via `/shows` when the search box is empty, responsive card grid (1–4 columns).
- **Details modal** — poster/backdrop, rating, release date, genres, network, and summary; closes via the ✕ button, the Close button, clicking the backdrop, or Escape.
- Fully responsive: single column on mobile, up to 4 columns on desktop.

## Tech stack
- React 18 + React Router
- Vite
- Plain CSS (`src/index.css`) — theme colors/fonts live in `:root` custom properties at the top of the file for easy restyling
- TVMaze REST API (no key required)

## Getting started
```bash
npm install
npm run dev
```
Then open the local URL Vite prints (default `http://localhost:5173`).

## Build for production
```bash
npm run build
npm run preview
```

## Deploying
The `dist/` folder produced by `npm run build` can be deployed as-is to Vercel, Netlify, or GitHub Pages.

## Project structure
```
src/
  api/tvmaze.js        # TVMaze fetch helpers
  components/          # Navbar, Footer, SearchBar, MovieCard, MovieModal
  pages/                # Home, Listing
  App.jsx               # Routes
  index.css             # All styles + theme tokens
  main.jsx              # Entry point
```
"# Movie-Explorer" 
