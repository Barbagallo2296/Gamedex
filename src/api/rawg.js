const BASE_URL = 'https://api.rawg.io/api'
const API_KEY = import.meta.env.VITE_RAWG_KEY

export async function getGames(search = '') {
  const url = `${BASE_URL}/games?key=${API_KEY}&search=${search}&page_size=20`

  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Errore RAWG: ${response.status}`)
  }
  const data = await response.json()
  return data.results
}