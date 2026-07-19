import { useContext } from 'react'
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { ThemeModeContext } from '../context/ThemeContext.jsx'

function Navbar() {
  const { mode, toggleMode } = useContext(ThemeModeContext)

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          🎮 Gamedex
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Preferiti</Button>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Registrati</Button>
          <IconButton color="inherit" onClick={toggleMode}>
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar