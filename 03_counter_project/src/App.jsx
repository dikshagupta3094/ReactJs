import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 5
    let[counter,setCounter] = useState(0)
    //const[variable, function ye variable he responsible hai function ko update krne ke liye]
  const addvalue = ()=>{
    if(counter>=0 &&counter<20){
      counter = counter+1
       setCounter(counter)
    }
     
  }
  const decreasevalue = ()=>{
    if(counter>0&&counter<=20)
    counter = counter-1
    setCounter(counter)
  }
  return (
    <>
      <h1>React js</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addvalue}>Add value</button>
      <br/>
      <button
      onClick={decreasevalue}>Decrease value</button>
    </>
  )
}

export default App
