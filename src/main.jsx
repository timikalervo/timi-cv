import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './styles.css'

// Apparently Github pages does not support browser router?
createRoot(document.getElementById('root')).render(
  //<BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  //</BrowserRouter>
)
