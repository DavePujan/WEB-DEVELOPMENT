// accessing any button or anything like that directly using useRef Hook
// ignore Dom manipulation using useRef Hook and changing the color of button to red directly using ref.current

import { useState, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

const btnRef = useRef() // to access the button and change its color to red directly using ref.current
const pRef = useRef() // to access the paragraph and make it disappear on button click

useEffect(() => {

  // here rerendering occurs when state is changing...
  console.log(`Rendered... `);
  btnRef.current.style.backgroundColor = "red"
    }, )


  return (
    <>
      <div className="card">
        <button ref={btnRef} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button ref={pRef}>I am Going to Disppear Soon...</button>
        
        <button onClick={() => {pRef.current.style.display = "none"}}>Click Me To Disppear</button>
      </div>
      
    </>
  )
}

export default App
