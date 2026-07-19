import { Container, Typography } from '@mui/material'

function Home() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">Benvenuto in Gamedex</Typography>
      <Typography color="text.secondary">
        Il catalogo dei videogiochi.
        Work in progress.....
      </Typography>
    </Container>
  )
}

export default Home