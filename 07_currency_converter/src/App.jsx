import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-orange-500 text-white w-full text-4xl'>Currency Converter</h1>
    </>
  )
}

export default App
