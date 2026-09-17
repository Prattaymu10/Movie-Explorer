import { Link, useLocation } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext'

export default function Navbar() {
  const location = useLocation()
  const { favorites } = useFavorites()

  return (
    <header className="navbar">
      <nav className="navbar-inner">
        <Link to="/" className="navbar-brand">
          <span className="navbar-logo">🎬</span>
          <span className="navbar-title">MovieExplorer</span>
        </Link>
        <div className="navbar-links">
          <Link
            to="/"
            className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/favorites"
            className={`navbar-link navbar-favorites ${
              location.pathname === '/favorites' ? 'active' : ''
            }`}
          >
            ★ Favorites
            {favorites.length > 0 && <span className="navbar-badge">{favorites.length}</span>}
          </Link>
          <Link to="/movies" className="navbar-cta">
            Movies
          </Link>
        </div>
      </nav>
    </header>
  )
}
