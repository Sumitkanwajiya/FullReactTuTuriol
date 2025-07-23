import React from 'react'

import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [numberallowed, setNumberallowed] = useState(false)
  const [charallowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  
  //useReF Hook 
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass =""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberallowed) str += "0123456789"
    if(charallowed) str += "!@#$%^&*(){}[]~`"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  },[length,numberallowed,charallowed,setPassword])

  const copyPaste = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 99);
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect (()=>{
    passwordGenerator()
  },[length,numberallowed,charallowed,setPassword,passwordGenerator])

  return (
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-5 py-3 my-60 text-white bg-gray-600 text-center' >
    <h1 className='text-white text-2xl text-center my-3 ' >Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input 
      type="text" 
      value={password} 
      className='outline-none w-full py-1 px-3 text-black bg-white'
      placeholder='password'
      readOnly
      ref={passwordRef}
      
      />
      <button onClick= {copyPaste} className='outline-none bg-black text-white px-3  shrink-0'>Copy</button>
    </div>

    <div className='flex text-sm gap-x-2'>
      <div className='flex item-center gap-x-1'>
        <input
         type="range" 
         min={8}
         max={100}
         value={length}
         className='cursor:pointer'
         onChange={(e)=>{setlength(e.target.value)}}
        />
        <label className=' mx-1 my-1'>length: {length}</label>
      </div>

      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked ={numberallowed}
        id='numberInput'
        onChange={()=>{setNumberallowed((prev) =>!prev);
      }}
      />
      <label htmlFor='numberInput'>Numbers</label>

      </div>

       <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked ={numberallowed}
        id='CharacterInput'
        onChange={()=>{
          setcharAllowed((prev) =>!prev);
      }}
      />
      <label htmlFor='CharacterInput'>Character</label>

      </div>

    </div>

   </div>
  )
}

export default App
