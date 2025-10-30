import { useState } from 'react'
import './App.css'

function App() {
  const [count] = useState(0)
const [showBtn , setshowBtn ] = useState(true)

const [todo] = useState([
{
  title : "first todo",
  desc : "this is first todo"
},
{
  title : "second todo",
  desc : "this is second todo"
}
]
)
// this is todo functional component
const Todo = ({todo}) =>{return (
<>
<div className="m-4 border-1"></div>
<div className="todo">i am to do and my title is {todo.title} </div>
<div className="todo">{todo.desc}</div>
</>
)}

  return (
    <>
     
    {/* conditional rendering using ternary operator (only preferable when we have two conditions) */}
    {showBtn ? <button>ShowBtn is True</button> : "ShowBtn is False"}

    {/* this is better way of conditional rendering using && operator,
    because if the first condition is true, then only the second condition will be evaluated. */}
    {/* {showBtn && <button>show only when second button is clicked...</button>} */}

      <div className="card">
        <button onClick={() => setshowBtn(!showBtn)}>
          count is {count}
        </button>
      </div>
      
      {todo.map(
        todo =>{
          return <Todo todo={todo}/>
        }
      )}
    </>
  )
}

export default App
