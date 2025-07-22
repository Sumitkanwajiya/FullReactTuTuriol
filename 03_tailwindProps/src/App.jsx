import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Sumit",
    password: 123
  }

  return (
   <>
   <h1 className='bg-green-400 p-4 rounded-xl'>tailwind test</h1>

   <Card channel ="Sumit and React" followers = "100k"  />
   <Card channel="Ayush And react" followers = "200k"/>


   
   </>

   
  
    
  )
}

export default App
