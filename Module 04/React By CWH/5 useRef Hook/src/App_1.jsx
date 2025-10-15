// useRef Hook is used to access a DOM element directly, means it re renders the component
// It is also used to keep a mutable variable which does not re render the component
// we will see it using useEffect Hook that how it works

/*
Application of useRef Hook:
1. used to add increament function.
2. access a DOM element directly.
3. to keep a mutable variable which does not re render the component.
4. to store previous state value.
*/
import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
// let a =0; --> // this is normal variable, we can't use it to keep track of value between the renders
// because when the component re renders, this variable will be initialized again to 0
// and we will not be able to keep track of value between the renders

// if we want to keep track of value between the renders, we can use useRef Hook
// let first = useRef(0); // this is useRef variable, we can use it to keep track of value between the renders
// but here we are not using useRef Hook, so the value of a will be 0 every time when the component re renders

const a = useRef(0)

useEffect(() => {
  // a = a + 1;
  a.current = a.current + 1; // here we are using useRef variable, so the value of a will be incremented by 1 every time when the component re renders

  // here rerendering occurs when state is changing...
  console.log(`Rendered... and the value of a is ${a.current}`); // here we are using useRef variable, so the value of a will be incremented by 1 every time when the component re renders
}, )



  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
