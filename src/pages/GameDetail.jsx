import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router'
import {
  Container, Typography, Box, Chip, Button, CircularProgress, Stack,
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { getGameById } from '../api/rawg.js'

function GameDetail() {
  const { id } = useParams()
  const [game, setGame] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    getGameById(id)
      .then((data) => setGame(data))
      .catch(() => setError('Errore nel caricamento del gioco'))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
        <CircularProgress />
      </Box>
    )
  }

  if (error) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography color="error">{error}</Typography>
      </Container>
    )
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Button component={Link} to="/" startIcon={<ArrowBackIcon />} sx={{ mb: 2 }}>
        Torna indietro
      </Button>

      <Typography variant="h3" gutterBottom>
        {game.name}
      </Typography>

      <Box
        component="img"
        src={game.background_image}
        alt={game.name}
        sx={{ width: '100%', maxHeight: 400, objectFit: 'cover', borderRadius: 2, mb: 3 }}
      />

      <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
        {game.genres?.map((genre) => (
          <Chip key={genre.id} label={genre.name} color="primary" />
        ))}
      </Stack>

      <Typography variant="body1" sx={{ mb: 2 }}>
        <strong>Voto:</strong> {game.rating} / 5
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        <strong>Data di uscita:</strong> {game.released || 'N/D'}
      </Typography>

      <Typography variant="h5" gutterBottom>
        Descrizione
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {game.description_raw || 'Nessuna descrizione disponibile.'}
      </Typography>
    </Container>
  )
}

export default GameDetail