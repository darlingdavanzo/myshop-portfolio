import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CartProvider } from './hooks/useCart';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>,
)
