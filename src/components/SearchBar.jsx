export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar-wrap">
      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search for a movie..."
          className="search-input"
        />
      </div>
    </div>
  )
}
