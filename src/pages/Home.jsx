import { useState, useEffect } from 'react'
import { Container, Grid, CircularProgress, Box, Typography, TextField } from '@mui/material'
import { getGames } from '../api/rawg.js'
import GameCard from '../components/GameCard.jsx'
import GameCardSkeleton from '../components/GameCardSkeleton.jsx'

function Home() {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')

  useEffect(() => {
    setLoading(true)
    getGames(search)
      .then((results) => setGames(results))
      .catch(() => setError('Errore nel caricamento dei giochi'))
      .finally(() => setLoading(false))
  }, [search])

  return (
    <Container sx={{ mt: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" gutterBottom>
          Esplora i videogiochi
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400 }}>
          Cerca, scopri e salva i tuoi titoli preferiti
        </Typography>
      </Box>

      <TextField
        fullWidth
        label="Cerca un gioco..."
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 4, maxWidth: 600, mx: 'auto', display: 'block' }}
      />

      {loading && (
        <Grid container spacing={3}>
          {Array.from({ length: 8 }).map((_, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <GameCardSkeleton />
            </Grid>
          ))}
        </Grid>
      )}

      {error && <Typography color="error">{error}</Typography>}

      {!loading && !error && (
        <Grid container spacing={3}>
          {games.map((game) => (
            <Grid key={game.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <GameCard game={game} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  )
}

export default Home