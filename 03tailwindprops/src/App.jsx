import { useState } from 'react'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"agam",
    age:22
  }
let newArr=[1,2,3];

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'> Tailwiind test</h1>
    <Card btnText="click me and find out"/>

    <Card username="syna" />
    </>
  )
}

export default App
