import { useState , useCallback, useEffect,useRef} from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setChar] = useState(false)
  const [password , setPassword] = useState("")

  //useRef hook

  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(()=>{
 
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number) str += "0123456789"
    if(character) str += "~`@#$%^&*_-"
    for(let i =1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1)
       pass += str.charAt(char)
        
    }
       setPassword(pass)
    
  },[length,number,character,setPassword])
  
const copyPassword = useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,length)
  window.navigator.clipboard.writeText(password)
},[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,number,character,passwordGenerator])
  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md  px-4 py-3 my-8 bg-gray-700  text-orange-500 rounded-lg'>
      <h1 className=' text-white text-center text-3xl'>Password Generator</h1>
      <div className= 'flex-shadow overflow-hidden mb-4 flex '>
        <input type="text"
        value={password}
        placeholder='Password'
        readOnly
        className='outline-none w-full p-1 px-3  mx-2 '
        ref={passwordRef}
         />

        <button className='outline-none text-white bg-blue-600 hover:bg-blue-400 px-3 py-1 font-bold rounded'
        onClick={copyPassword}>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={8} max={20} value={length} className='cursor-pointer ' onChange={(e) => {setLength(e.target.value)} }/>
          <label>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked = {number} id='numberInput' onChange={()=>{setNumber((prev)=>!prev)}} />
          <label>Number{number}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked = {character} id='numberInput' onChange={()=>{setChar((prev)=>!prev)}} />
          <label>Character{character}</label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
