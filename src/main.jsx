import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppCounter from "./AppCounter.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppCounter />
  </StrictMode>,
)
