import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from'react-router-dom'
import ThemeContextProvider from './context/ThemeContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeContextProvider>
)
