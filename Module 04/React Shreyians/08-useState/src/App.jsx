import { useState } from 'react'
const App = () => {

  const [a, setA] = useState(20);
// a is read only , its connected to initial value (state)
// setA is write only
// 20 is initial value , can be number, string, object, array, etc

const changeValue = () => {
  setA(a+1);
}

const [b, setB] = useState("Poojan");

function changeName(){
  setB("Poojan Is Sexy");

}

const [c, setC] = useState({"user": "Poojan", "age": 20});


const changeUser = () => {
  setC({"user": "Poojan", "age": 21});
}
  return (
    <div>
   <h2>value of a is {a}</h2>
   <button onClick={changeValue}>Update</button>

   <h3>value of b is {b}</h3>
   <button onClick={changeName}>Update</button>

   <h3>Name is {c.user} and age is {c.age}</h3>
   <button onClick={changeUser}>Update</button>
    </div>
  )
}

export default App