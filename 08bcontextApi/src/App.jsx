import './App.css'
import Counter from './components/Counter'
import { useContext } from 'react'
import { CounterContext } from './components/Context/Context'

function App() {

  const counterState=useContext(CounterContext)
  console.log("context",counterState);
  return (
    <>
      <h1 className='bg-purple-300 text-3xl px-2 py-2 '>understanding the context api</h1>

      <h1 className='bg-purple-300 text-3xl px-2 py-2' >Count is {counterState.count}</h1>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>

    </>
  )
}

export default App
