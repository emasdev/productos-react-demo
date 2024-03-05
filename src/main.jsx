import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store/store.js'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { esES } from '@mui/material/locale';
import { Auth0Provider } from '@auth0/auth0-react'

const theme = createTheme(
  {
    palette: {
      primary: { main: '#e12898' },
    },
  },
  esES,
);

console.log(import.meta.env.VITE_AUTH0_DOMAIN)
console.log(import.meta.env.VITE_AUTH0_CLIENT_ID)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Auth0Provider
          domain={import.meta.env.VITE_AUTH0_DOMAIN}
          clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
          authorizationParams={{
            redirect_uri: window.location.origin
          }}
        >
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Auth0Provider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
