# 🎬 MovieExplorer

A React app for discovering movies and TV shows, built on the [TVmaze API](https://www.tvmaze.com/api). Browse, search, sort, and save your favorites — all stored locally in your browser.

## Features

- **Browse shows** — grid view of shows pulled from TVmaze
- **Live search** — debounced search-as-you-type
- **Sort** — by rating (high↔low) or name (A↔Z)
- **Favorites** — star any show to save it; favorites persist via `localStorage` and get their own page
- **Details modal** — click a show for a full overview: rating, release date, genres, network, and summary
- **Client-side routing** — Home, Movies, and Favorites pages via `react-router-dom`

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [TVmaze API](https://www.tvmaze.com/api) — no API key required
- Plain CSS

## Project Structure

```
├── api/
│   └── tvmaze.js          # TVmaze API calls (fetch all shows, search, HTML stripping)
├── components/
│   ├── Footer.jsx
│   ├── MovieCard.jsx      # Poster, rating, favorite toggle
│   ├── MovieModal.jsx     # Show detail overlay
│   ├── Navbar.jsx
│   └── SearchBar.jsx
├── context/
│   └── FavoritesContext.jsx   # Global favorites state + localStorage sync
├── pages/
│   ├── Favorites.jsx
│   ├── Home.jsx
│   └── Listing.jsx         # Main browse/search/sort page
├── App.jsx                 # Route definitions
├── main.jsx                 # App entry point
└── index.css
```

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)

### Installation

```bash
git clone https://github.com/Prattaymu10/movie-explorer.git
cd movie-explorer
npm install
```

### Run locally

```bash
npm run dev
```

Then open the local URL Vite prints in your terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## How It Works

- **Data fetching**: `Listing.jsx` fetches shows from TVmaze on load, and re-queries the `/search/shows` endpoint (debounced 350ms) whenever the search field changes.
- **Sorting**: sort order is applied client-side over whichever list (all shows or search results) is currently active.
- **Favorites**: `FavoritesContext` wraps the app and exposes `isFavorite`/`toggleFavorite`, backed by `localStorage` under the key `movie-explorer:favorites`.

## Credits

Show data and images provided by [TVmaze](https://www.tvmaze.com/).

## License

MIT