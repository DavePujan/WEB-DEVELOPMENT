import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(0)

  //this is a useEffect hook, it takes two arguments, first is a function, second is an array of dependencies. 
  // we have to give an empty array if we want to run the function only once when the component is mounted
  // if we do not give an empty array, the function will run every time the component is re-rendered
  // if we give a variable in the array, the function will run every time the variable changes
  // for ex, if we give count in the array, the function will run every time the count changes
  // here we are using useEffect to show an alert when the component is mounted
  // the alert will be shown only once when the component is mounted

  // // case 1: run every time the component is re-rendered
  // useEffect(() => {
  //   alert("i run every time the component is re-rendered");
  // }) // no dependency array
  
  // //we can use multiple useEffect hooks in a component
  // // case 2: run only once when the component is mounted
  // useEffect(() => {
  //   alert("hello, i run only once when the component is mounted");
  // }, [])

  // case 3: run every time the color / count changes
  useEffect(() => {
    alert("color has changed to " );
    setColor(setColor => setColor + 1);
  }, [count]) // this will run every time the count changes
  
  // case 4: run every time the count changes
  // useEffect(() => {
  //   console.log("hey count has changed to " + count);
  // }, [count]) // this will run every time the count changes



  return (
    <>
      <Navbar color={"red" + color}/>
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
