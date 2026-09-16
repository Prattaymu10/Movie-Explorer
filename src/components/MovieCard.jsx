export default function MovieCard({ show, onSelect }) {
  const poster = show.image?.medium
  const year = show.premiered ? show.premiered.slice(0, 4) : '—'
  const rating = show.rating?.average ?? '—'

  return (
    <div className="movie-card">
      <div className="movie-card-poster">
        {poster ? (
          <img src={poster} alt={show.name} loading="lazy" />
        ) : (
          <div className="movie-card-poster-empty">No image</div>
        )}
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
