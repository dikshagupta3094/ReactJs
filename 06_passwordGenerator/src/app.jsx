import { useState , useCallback } from 'preact/hooks'
import './app.css'

export function App() {
  const [lenght, setLenght] = useState(8)
  const [number, setNumber] = useState(false)
  const [charAllowed, setChar] = useState(false)
  const [password, setPassword] = useState("")

  const PasswordGenerator = (useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(number) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*~`_-"

    for(let i = 1;i<=lenght;i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
      console.log(pass);
    }
    
    


  }, [lenght,number,char,setPassword]))

  
  return (
    <>
     {/* <h1 className='text-centre text-4xl text-white  py-10'>Password Generator</h1> */}
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'
     ><div className='flex shadow rounded-lg overflow-hidden mb-4'><Test></Test></div>
     </div>
    </>
  )
}
