# Gamedex

Un catalogo di videogiochi realizzato con React.
Permette di sfogliare i giochi dalla RAWG API, vederne i dettagli, cercarli e salvare i propri preferiti previa registrazione.

Progetto sviluppato per il corso Full Stack di ITS Prodigi.

## Tecnologie utilizzate

- **React** (Vite) — libreria UI e strumento di build
- **React Router v8** — routing lato client in modalità dichiarativa
- **Material UI (MUI) v9** — libreria di componenti e gestione del tema
- **React Hook Form v7** — gestione e validazione dei form
- **RAWG API** — fonte dati dei videogiochi
- **Google Fonts (Inter)** — tipografia

## Funzionalità

- Ricerca e navigazione dei videogiochi tramite RAWG API
- Pagina di dettaglio per ogni gioco (generi, voto, data di uscita, descrizione)
- Registrazione e login (autenticazione simulata) gestiti con React Context
- Form di registrazione con validazione completa e messaggi di errore
- Immagine profilo tramite URL, con fallback sull'iniziale dell'utente
- Preferiti: salvataggio dei giochi, accessibili solo agli utenti autenticati
- Rotta protetta per la pagina dei preferiti
- Cambio tema chiaro / scuro gestito con React Context, salvato in `localStorage`
- Notifiche (Snackbar) al salvataggio/rimozione dei preferiti
- Interfaccia responsive con stati di caricamento (skeleton)

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
```

### Configurazione (chiave RAWG API)

L'app usa la RAWG API, che richiede una chiave gratuita.

1. Registrati su [rawg.io/apidocs](https://rawg.io/apidocs) e ottieni la tua API key.
2. Crea un file `.env` nella radice del progetto (puoi partire copiando `.env.example`).
3. Inserisci la chiave così:

   VITE_RAWG_KEY=la_tua_chiave_rawg


### Avvio

```bash
npm run dev
```

L'app sarà disponibile su `http://localhost:5173`.

## Struttura del progetto

```
Gamedex/
├── public/
├── src/
│ ├── api/ Chiamate alla RAWG API
│ ├── components/ Componenti riutilizzabili (Navbar, GameCard, ProtectedRoute, ...)
│ ├── context/ Provider di React Context (Theme, Auth, Favorites)
│ ├── pages/ Un componente per ogni rotta (Home, GameDetail, , Login, ... )
│ ├── App.jsx Definizione delle rotte
│ └── main.jsx Punto di ingresso dell'app
├── .env.example
├── index.html
├── package.json
└── README.md
```

## Note tecniche

- L'autenticazione è **simulata lato frontend**: gli utenti e la sessione sono salvati in `localStorage`, senza un backend. In un contesto reale l'autenticazione e la gestione delle password andrebbero gestite lato server.
- La chiave RAWG viene usata dal frontend: adatto a un progetto didattico, non a un ambiente di produzione.

## Possibili sviluppi futuri

- Menu a tendina (hamburger) per la navbar su dispositivi mobili
- Preferiti separati per singolo utente
- Debounce sulla barra di ricerca per ridurre le chiamate all'API
- Filtri per genere e piattaforma, ordinamento dei risultati

## Autore

Manuel Barbagallo — [GitHub](https://github.com/Barbagallo2296) · [LinkedIn](https://www.linkedin.com/in/manuel-barbagallo/)