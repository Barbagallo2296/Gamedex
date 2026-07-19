import { useEffect } from 'react'
import { Container, Typography } from '@mui/material'
import { getGames } from '../api/rawg.js'

function Home() {
  useEffect(() => {
    getGames()
      .then((games) => console.log('Giochi ricevuti:', games))
      .catch((err) => console.error('Errore nella chiamata:', err))
  }, [])

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">Benvenuto in Gamedex</Typography>
      <Typography color="text.secondary">
        Prova Chiamata API — apri la Console (F12)
      </Typography>
    </Container>
  )
}

export default Home;