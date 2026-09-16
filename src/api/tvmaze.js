const BASE_URL = 'https://api.tvmaze.com'

export async function fetchAllShows(page = 0) {
  const res = await fetch(`${BASE_URL}/shows?page=${page}`)
  if (!res.ok) throw new Error('Failed to fetch shows')
  return res.json()
}

export async function searchShows(query) {
  const res = await fetch(`${BASE_URL}/search/shows?q=${encodeURIComponent(query)}`)
  if (!res.ok) throw new Error('Failed to search shows')
  const data = await res.json()
  // /search/shows wraps each result as { score, show }
  return data.map((entry) => entry.show)
}

export function stripHtml(html) {
  if (!html) return 'No summary available.'
  return html.replace(/<[^>]+>/g, '')
}
