import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const rounter = createBrowserRouter([
  {
    path: '/' 
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider rounter={router}/>

  </StrictMode>,
)
