import { createContext, useState, useEffect, useMemo } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline' // resetta il css così in ogni browser è uguale

// scatola globale
export const ThemeModeContext = createContext()

export function ThemeModeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem('themeMode') || 'dark'
  })

  useEffect(() => {
    localStorage.setItem('themeMode', mode)
  }, [mode])

  // operatore ternario che inverte il tema
  const toggleMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  // useMemo: ricostruisce il tema solo quando cambia mode
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'dark'
            ? {
                primary: { main: '#6366f1' },
                secondary: { main: '#8b5cf6' },
                background: {
                  default: '#0f0f14',
                  paper: '#1a1a22',
                },
              }
            : {
                primary: { main: '#2563eb' },
                secondary: { main: '#0891b2' },
                background: {
                  default: '#f4f6fb',
                  paper: '#ffffff',
                },
                text: {
                  primary: '#1a202c',
                  secondary: '#5a6473',
                },
              }),
        },
        typography: {
          fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
          h3: { fontWeight: 700, letterSpacing: '-0.02em' },
          h4: { fontWeight: 700, letterSpacing: '-0.01em' },
          h6: { fontWeight: 600 },
          button: { fontWeight: 600, textTransform: 'none' },
        },
        shape: {
          borderRadius: 12,
        },
        components: {
          MuiCard: {
            styleOverrides: {
              root: {
                backgroundImage: 'none',
                border: '1px solid',
                borderColor: mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
              },
            },
          },
          MuiAppBar: {
            styleOverrides: {
              root: {
                backgroundImage: 'none',
                boxShadow: 'none',
                borderBottom: '1px solid',
                borderColor: mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
              },
            },
          },
        },
      }),
    [mode]
  )

  return (
    // questo va nella navbar
    <ThemeModeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  )
}