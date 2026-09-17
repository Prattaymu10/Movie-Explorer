import { useEffect } from 'react'
import { stripHtml } from '../api/tvmaze'
import { useFavorites } from '../context/FavoritesContext'

export default function MovieModal({ show, onClose }) {
  const { isFavorite, toggleFavorite } = useFavorites()

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!show) return null

  const backdrop = show.image?.original || show.image?.medium
  const rating = show.rating?.average ?? '—'
  const genres = show.genres?.length ? show.genres.join(', ') : '—'
  const network = show.network?.name || show.webChannel?.name || '—'
  const favorited = isFavorite(show.id)

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" aria-label="Close" onClick={onClose}>
          ✕
        </button>

        {backdrop && (
          <div className="modal-backdrop">
            <img src={backdrop} alt={show.name} />
          </div>
        )}

        <div className="modal-body">
          <div className="modal-title-row">
            <h2 className="modal-title">{show.name}</h2>
            <button
              className={`star-btn modal-star ${favorited ? 'active' : ''}`}
              aria-label={favorited ? 'Remove from favorites' : 'Add to favorites'}
              aria-pressed={favorited}
              onClick={() => toggleFavorite(show)}
            >
              {favorited ? '★' : '☆'}
            </button>
          </div>
          <div className="modal-meta">
            <span>⭐ Rating: {rating}</span>
            <span>📅 Release: {show.premiered || '—'}</span>
            <span>🎭 Genre: {genres}</span>
            <span>📡 Network: {network}</span>
          </div>

          <h3 className="modal-section-title">Overview</h3>
          <p className="modal-summary">{stripHtml(show.summary)}</p>

          <button className="modal-close-btn" onClick={onClose}>
            ❌ Close
          </button>
        </div>
      </div>
    </div>
  )
}