import React from 'react'

const Cards = (props) => {
return (
<div className="card">
<img src={props.img}  ></img>
<h1>name: {props.user}</h1>
<p>age: {props.age}</p>
<button>View Profile</button>
</div>
)
}
export default Cards