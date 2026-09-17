import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Listing from './pages/Listing'
import Favorites from './pages/Favorites'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Listing />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  )
}
