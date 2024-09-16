import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1>Agam ka project</h1>
    </UserContextProvider>
  )
}

export default App
