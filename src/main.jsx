import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@emotion/react'
import theme from './themes/theme.jsx'
import { CssBaseline } from '@mui/material'
import "./i18n.js"

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <CssBaseline >
      <App />
    </CssBaseline>
  </ThemeProvider>
)
