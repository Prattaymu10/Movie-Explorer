import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MovieCard from '../components/MovieCard'
import MovieModal from '../components/MovieModal'
import { useFavorites } from '../context/FavoritesContext'

export default function Favorites() {
  const { favorites } = useFavorites()
  const [selectedShow, setSelectedShow] = useState(null)

  return (
    <div className="page">
      <Navbar />

      <main className="listing-main">
        <h1 className="page-title">My Favorites</h1>

        {favorites.length === 0 ? (
          <p className="listing-status">
            You haven't starred any movies yet. Head to the{' '}
            <Link className="inline-link" to="/movies">
              Movies
            </Link>{' '}
            page and tap the ☆ on a card to save it here.
          </p>
        ) : (
          <div className="movie-grid">
            {favorites.map((show) => (
              <MovieCard key={show.id} show={show} onSelect={setSelectedShow} />
            ))}
          </div>
        )}
      </main>

      <Footer />

      {selectedShow && <MovieModal show={selectedShow} onClose={() => setSelectedShow(null)} />}
    </div>
  )
}