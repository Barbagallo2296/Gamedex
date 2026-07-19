import { Card, CardMedia, CardContent, Typography, Chip, Box } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'

function GameCard({ game }) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="160"
        image={game.background_image}
        alt={game.name}
      />
      <CardContent>
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
    </Card>
  )
}

export default GameCard