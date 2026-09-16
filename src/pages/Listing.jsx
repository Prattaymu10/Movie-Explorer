import { useEffect, useMemo, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import MovieCard from '../components/MovieCard'
import MovieModal from '../components/MovieModal'
import { fetchAllShows, searchShows } from '../api/tvmaze'

const SORT_OPTIONS = [
  { value: 'rating-desc', label: 'Rating (High to Low)' },
  { value: 'rating-asc', label: 'Rating (Low to High)' },
  { value: 'name-asc', label: 'Name (A to Z)' },
  { value: 'name-desc', label: 'Name (Z to A)' },
]

export default function Listing() {
  const [allShows, setAllShows] = useState([])
  const [searchResults, setSearchResults] = useState(null)
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedShow, setSelectedShow] = useState(null)
  const [sortBy, setSortBy] = useState('rating-desc')

  useEffect(() => {
    let active = true
    setLoading(true)
    fetchAllShows(0)
      .then((data) => {
        if (active) setAllShows(data)
      })
      .catch((err) => {
        if (active) setError(err.message)
      })
      .finally(() => {
        if (active) setLoading(false)
      })
    return () => {
      active = false
    }
  }, [])

  useEffect(() => {
    if (!query.trim()) {
      setSearchResults(null)
      return
    }
    const timeout = setTimeout(() => {
      setLoading(true)
      searchShows(query)
        .then((data) => setSearchResults(data))
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false))
    }, 350)
    return () => clearTimeout(timeout)
  }, [query])

  const shows = useMemo(() => searchResults ?? allShows, [searchResults, allShows])

  const sortedShows = useMemo(() => {
    const list = [...shows]

  
    const getShow = (item) => item.show ?? item

    list.sort((a, b) => {
      const showA = getShow(a)
      const showB = getShow(b)

      switch (sortBy) {
        case 'rating-desc': {
          const ratingA = showA.rating?.average ?? -Infinity
          const ratingB = showB.rating?.average ?? -Infinity
          return ratingB - ratingA
        }
        case 'rating-asc': {
          const ratingA = showA.rating?.average ?? Infinity
          const ratingB = showB.rating?.average ?? Infinity
          return ratingA - ratingB
        }
        case 'name-asc':
          return (showA.name ?? '').localeCompare(showB.name ?? '')
        case 'name-desc':
          return (showB.name ?? '').localeCompare(showA.name ?? '')
        default:
          return 0
      }
    })

    return list
  }, [shows, sortBy])

  return (
    <div className="page">
      <Navbar />

      <main className="listing-main">
        <div className="listing-controls">
          <SearchBar value={query} onChange={setQuery} />

          <div className="sort-control">
            <label htmlFor="sort-select">Sort by</label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {error && <p className="listing-status error">Something went wrong: {error}</p>}

        {loading && <p className="listing-status">Loading movies…</p>}

        {!loading && !error && sortedShows.length === 0 && (
          <p className="listing-status">No movies found for "{query}".</p>
        )}

        {!loading && !error && sortedShows.length > 0 && (
          <div className="movie-grid">
            {sortedShows.map((show) => (
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