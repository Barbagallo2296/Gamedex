import { useState, useEffect } from 'react'
import { Container, Grid, CircularProgress, Box, Typography, TextField } from '@mui/material'
import { getGames } from '../api/rawg.js'
import GameCard from '../components/GameCard.jsx'

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
      <TextField
        fullWidth
        label="Cerca un gioco..."
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 3 }}
      />

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
          <CircularProgress />
        </Box>
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