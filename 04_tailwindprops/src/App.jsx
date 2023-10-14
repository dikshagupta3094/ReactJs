import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <h1 className='bg-green-500 text-white p-4 rounded-xl font-semibold mb-4' >Tailwind CSS</h1>
   <Card username1= "Diksha" btnText='Buy Now'/ >
    <Card username1={"Raman"} btnText='Sell'/>
    </>
  )
}

export default App
