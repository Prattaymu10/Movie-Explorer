import { useFavorites } from '../context/FavoritesContext'

export default function MovieCard({ show, onSelect }) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const poster = show.image?.medium
  const year = show.premiered ? show.premiered.slice(0, 4) : '—'
  const rating = show.rating?.average ?? '—'
  const favorited = isFavorite(show.id)

  return (
    <div className="movie-card">
      <div className="movie-card-poster">
        {poster ? (
          <img src={poster} alt={show.name} loading="lazy" />
        ) : (
          <div className="movie-card-poster-empty">No image</div>
        )}
        <button
          className={`star-btn ${favorited ? 'active' : ''}`}
          aria-label={favorited ? 'Remove from favorites' : 'Add to favorites'}
          aria-pressed={favorited}
          onClick={(e) => {
            e.stopPropagation()
            toggleFavorite(show)
          }}
        >
          {favorited ? '★' : '☆'}
        </button>
      </div>
      <div className="movie-card-body">
        <h3 className="movie-card-title">{show.name}</h3>
        <div className="movie-card-meta">
          <span>⭐ {rating}</span>
          <span>📅 {year}</span>
        </div>
        <button className="movie-card-btn" onClick={() => onSelect(show)}>
          See Details
        </button>
      </div>
    </div>
  )
}