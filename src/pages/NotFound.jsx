import { Container, Typography, Button } from '@mui/material'
import { Link } from 'react-router'

function NotFound() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">404 — Pagina non trovata</Typography>
      <Button component={Link} to="/" sx={{ mt: 2 }}>
        Torna alla Home
      </Button>
    </Container>
  )
}

export default NotFound