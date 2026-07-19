import { Card, CardMedia, CardContent, CardActionArea, Typography, Box } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import { Link } from 'react-router'

function GameCard({ game }) {
  return (
    <Card sx={{ height: '100%' }}>
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