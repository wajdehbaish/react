import React from 'react'
import {useState} from 'react'

    const Counter=()=>{
    const [counter,setCounter]=useState(0)
    function incrementCounter(click)
    {click.preventDefault();
    setCounter(counter+1)
    }
    return (
        <div>
       <button onClick={incrementCounter}>increment</button>
        {counter}
        </div>
    )
}
export default Counter;