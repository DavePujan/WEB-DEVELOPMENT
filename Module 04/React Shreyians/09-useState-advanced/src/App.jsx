import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0);

  const incrementNum = () => { // async function
    console.log(num);
    setNum(num + 1);
    console.log(num);
  }

// num ➜ old array
// newNum ➜ new array in memory
// Values are the same, but reference is different
  
const btnClicked = () => {
  const newNum = [...num];
  newNum.push(num + 1);
  setNum(newNum);
}

  return (
    <div>
      {/* <h1>{num}</h1>
      <button onClick={incrementNum}>Update</button> */}

      <h2>{num}</h2>
      <button onClick={btnClicked}>Update</button>
    </div>
  )
}

export default App