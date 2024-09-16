import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CounterProvider } from './components/Context/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterProvider>
    <App />
    </CounterProvider>
   
  </StrictMode>,
)
