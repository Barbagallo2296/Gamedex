import { useContext } from 'react'
import { Card, CardMedia, CardContent, CardActionArea, Typography, Box, IconButton } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Link, useNavigate } from 'react-router'
import { FavoritesContext } from '../context/FavoritesContext.jsx'
import { AuthContext } from '../context/AuthContext.jsx'

function GameCard({ game }) {
  const { isFavorite, toggleFavorite } = useContext(FavoritesContext)
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  const favorite = isFavorite(game.id)

  const handleFavoriteClick = (event) => {
    event.preventDefault()
    event.stopPropagation()
    if (!user) {
      navigate('/login')
      return
    }
    toggleFavorite(game)
  }

  return (
    <Card
      sx={{
        height: '100%',
        position: 'relative',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
          borderColor: 'primary.main',
        },
      }}
    >
      <IconButton
        onClick={handleFavoriteClick}
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          zIndex: 1,
          bgcolor: 'rgba(0,0,0,0.5)',
          '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
        }}
      >
        {favorite
          ? <FavoriteIcon sx={{ color: 'red' }} />
          : <FavoriteBorderIcon sx={{ color: 'white' }} />}
      </IconButton>

      <CardActionArea
        component={Link}
        to={`/game/${game.id}`}
        sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
      >
        <CardMedia
          component="img"
          height="160"
          image={game.background_image}
          alt={game.name}
        />
        <CardContent sx={{ width: '100%' }}>
          <Typography variant="h6" gutterBottom>
            {game.name}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <StarIcon fontSize="small" sx={{ color: 'gold' }} />
            <Typography variant="body2" color="text.secondary">
              {game.rating}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default GameCard