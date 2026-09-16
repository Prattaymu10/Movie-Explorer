import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()

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
          <Link to="/movies" className="navbar-cta">
            Movies
          </Link>
        </div>
      </nav>
    </header>
  )
}
