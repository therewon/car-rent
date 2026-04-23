import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/react'
import { StoreProvider } from './context/StoreContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ClerkProvider>
      <StoreProvider>
        <App />
      </StoreProvider>
    </ClerkProvider>
  </BrowserRouter>
)
