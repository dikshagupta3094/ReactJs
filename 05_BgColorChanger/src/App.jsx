
import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className=" fixed flex flex-wrap text-white justify-center bottom-12 inset-x-0 px-2">
       
       <div className="flex flex-wrap bg-white text-black justify-center gap-3 rounded-xl px-3 py-2 shadow-lg">
       <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
       
       </div>
       <div className="flex flex-wrap bg-white text-black justify-center gap-3 rounded-xl px-3 py-2 shadow-lg">
       <button
          onClick={() => setColor("orange")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "orange"}}
          >orange
          </button>
       </div>

       <div className="flex flex-wrap bg-white text-black justify-center gap-3 rounded-xl px-3 py-2 shadow-lg">
       <button
          onClick={() => setColor("purple")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "purple"}}
          >purple
          </button>
       </div>

      </div>
    </div>
  )
}

export default App
