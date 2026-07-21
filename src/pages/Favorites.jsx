import { useContext } from 'react'
import { Container, Grid, Typography, Box } from '@mui/material'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'
import { FavoritesContext } from '../context/FavoritesContext.jsx'
import GameCard from '../components/GameCard.jsx'

function Favorites() {
  const { favorites } = useContext(FavoritesContext)

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        I tuoi preferiti
      </Typography>

      {favorites.length === 0 ? (
        <Box sx={{ textAlign: 'center', mt: 6, color: 'text.secondary' }}>
          <SentimentDissatisfiedIcon sx={{ fontSize: 60, mb: 2 }} />
          <Typography variant="h6">
            Non hai ancora salvato nessun gioco
          </Typography>
          <Typography variant="body2">
            Clicca il cuore su un gioco per aggiungerlo qui.
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {favorites.map((game) => (
            <Grid key={game.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <GameCard game={game} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  )
}

export default Favorites