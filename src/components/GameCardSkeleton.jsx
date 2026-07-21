import { Card, CardContent, Skeleton, Box } from '@mui/material'

function GameCardSkeleton() {
  return (
    <Card sx={{ height: '100%' }}>
      <Skeleton variant="rectangular" height={160} />
      <CardContent>
        <Skeleton variant="text" sx={{ fontSize: '1.25rem' }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 1 }}>
          <Skeleton variant="circular" width={20} height={20} />
          <Skeleton variant="text" width={40} />
        </Box>
      </CardContent>
    </Card>
  )
}

export default GameCardSkeleton