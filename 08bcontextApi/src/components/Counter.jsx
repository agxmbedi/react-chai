import React, { useState } from 'react'
import { useContext } from 'react'
import { CounterContext } from './Context/Context'

const Counter= ()=>{
    const counterContext=useContext(CounterContext)
    return(
        <div>
        <button onClick={()=> counterContext.setCount(counterContext.count + 1)} className="bg-gray-500
         hover:bg-blue-700
          text-white font-bold py-2 px-4 border
           border-gray-700 rounded">
                Increment
                </button>
            
            <button  onClick={()=> counterContext.setCount(counterContext.count - 1)}
            className="bg-gray-500
         hover:bg-blue-700
          text-white font-bold py-2 px-4 border
           border-gray-700 rounded">
                Decrement
                </button>
           
        <br/>
        </div>
    )
}
export default Counter
