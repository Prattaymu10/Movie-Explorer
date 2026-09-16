import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="page">
      <Navbar />

      <main className="hero">
        <div className="hero-glow" />
        <div className="hero-content">
          <h1 className="hero-title">
            DISCOVER
            <br />
            <span className="hero-title-accent">MOVIES</span>
          </h1>
          <p className="hero-description">
            Explore and discover your favorite shows and movies from around the world, all in
            one place.
          </p>
          <Link to="/movies" className="hero-cta">
            Explore Now
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
