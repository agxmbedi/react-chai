import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  


let [counter,setCounter] = useState(15)

 // let counter =5
  
  const addValue=()=>{
   
    //counter=counter+1 
    setCounter(counter+1)
    
  }
const removeValue=()=>{
  setCounter(counter-1)
}

// value shloud not go below 0 and not above 20.
  return (
    <>
     
      <h1>Vite + React</h1>
      <h2>counter value :{counter}</h2>
      <button
      onClick={addValue}>Add Value{counter}</button>
      <br/>
      <button
      onClick={removeValue} >Remove Value{counter}</button>
     
    
    </>
  )
}

export default App
