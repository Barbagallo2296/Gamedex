import { createContext, useState, useEffect, useMemo } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline' //resetta tutto il css cosi in ogni browser sarà uguale

// scatola globale 
export const ThemeModeContext = createContext()

export function ThemeModeProvider({ children }) {
    const [mode, setMode] = useState(() => {
        return localStorage.getItem('themeMode') || 'dark'
    })

    // useeffect si aggiorna ad ogni cambio di mode 
    useEffect(() => {
        localStorage.setItem('themeMode', mode)
    }, [mode])

    // operatore ternario che inverte il tema
    const toggleMode = () => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
    }

    // useMemo serve per ottimizzazione , ricostruisce il tema solo quando cambia mode
    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    primary: { main: '#7c4dff' },
                    secondary: { main: '#00e5ff' },
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