import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MarceloPortfolio from './pages/MarceloPortfolio.jsx'

const root = createRoot(document.getElementById('root'))

const pathname = window.location.pathname
const Component = pathname === '/marcelo' ? MarceloPortfolio : App

root.render(
  <StrictMode>
    <Component />
  </StrictMode>,
)
