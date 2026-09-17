import { createContext, useContext, useEffect, useState } from 'react'

const FavoritesContext = createContext(null)
const STORAGE_KEY = 'movie-explorer:favorites'

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
    } catch {
      // ignore storage errors (e.g. private browsing)
    }
  }, [favorites])

  function isFavorite(id) {
    return favorites.some((show) => show.id === id)
  }

  function toggleFavorite(show) {
    setFavorites((prev) =>
      prev.some((s) => s.id === show.id)
        ? prev.filter((s) => s.id !== show.id)
        : [...prev, show],
    )
  }

  return (
    <FavoritesContext.Provider value={{ favorites, isFavorite, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext)
  if (!ctx) throw new Error('useFavorites must be used within a FavoritesProvider')
  return ctx
}