
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@emotion/react'
import theme from './themes/theme.jsx'
import { CssBaseline } from '@mui/material'
import "./i18n.js"
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
      <HelmetProvider>
        <App />
      </HelmetProvider>
  </ThemeProvider>
)
