import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Rotas from './rotas.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Rotas />
  </StrictMode>,
)
