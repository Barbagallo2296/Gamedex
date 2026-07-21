import { createContext, useState, useEffect } from 'react'
import { Snackbar, Alert } from '@mui/material'

export const FavoritesContext = createContext()

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites')
    return saved ? JSON.parse(saved) : []
  })

const [snackbar, setSnackbar] = useState({ open: false, message: '', key: 0 })
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const isFavorite = (gameId) => {
    return favorites.some((g) => g.id === gameId)
  }

 const toggleFavorite = (game) => {
    if (isFavorite(game.id)) {
      setFavorites((prev) => prev.filter((g) => g.id !== game.id))
      setSnackbar({ open: true, message: 'Rimosso dai preferiti', key: Date.now() })
    } else {
      setFavorites((prev) => [...prev, game])
      setSnackbar({ open: true, message: 'Aggiunto ai preferiti', key: Date.now() })
    }
  }

  const handleCloseSnackbar = () => {
    setSnackbar({ open: false, message: '' })
  }

  return (
    <FavoritesContext.Provider value={{ favorites, isFavorite, toggleFavorite }}>
      {children}

      <Snackbar
        key={snackbar.key}
        open={snackbar.open}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </FavoritesContext.Provider>
  )
}

export default FavoritesProvider