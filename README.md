# 🎮 Gamedex

Un catalogo di videogiochi realizzato con React.
Permette di sfogliare i giochi dalla RAWG API, vederne i dettagli e salvare i preferiti.

## Tecnologie utilizzate

- **React** (Vite) — libreria UI e strumento di build
- **React Router v8** — routing lato client in modalità dichiarativa
- **Material UI (MUI) v9** — libreria di componenti e gestione del tema
- **React Hook Form v7** — gestione e validazione dei form
- **RAWG API** — fonte dati dei videogiochi

## Funzionalità

- Cambio tema chiaro / scuro (gestito con React Context, salvato in `localStorage`)
- Routing dichiarativo su più pagine
- (In arrivo) Ricerca e navigazione dei giochi tramite RAWG API
- (In arrivo) Autenticazione simulata (registrazione / login) con React Context

## Come avviare il progetto

### Prerequisiti

- Node.js 22.22 o superiore
- npm

### Installazione

```bash
# Clona il repository
git clone https://github.com/Barbagallo2296/Gamedex.git
cd Gamedex

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

L'app sarà disponibile su `http://localhost:5173`.

## Struttura del progetto
```
Gamedex/
├── public/
├── src/
│   ├── api/          Chiamate alla RAWG API
│   ├── components/   Componenti riutilizzabili (Navbar, ...)
│   ├── context/      Provider di React Context (ThemeContext)
│   ├── pages/        Un componente per ogni rotta (Home, GameDetail, Preferiti ecc...)
│   ├── App.jsx       Definizione delle rotte
│   └── main.jsx      
├── index.html
├── package.json
└── README.md
```

## Autore

Manuel Barbagallo — [GitHub](https://github.com/Barbagallo2296) · [LinkedIn](https://www.linkedin.com/in/manuel-barbagallo/)