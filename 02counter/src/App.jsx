import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // we get 2 things in the form of an arraY,
  // first is name (any name),SetCounter is a function.
  let [counter,setCounter] = useState(15)
 // useState can have any value initinally 

 // let counter =5
  const addValue=()=>{
     //counter=counter+1 
    setCounter(counter+1)
    }
const removeValue=()=>{
  setCounter(counter-1)
}
// by using hooks we can make changes to UI directly and ek hi baar meh kr skte hai.
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
