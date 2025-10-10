import React from 'react'

const Navbar = (props) => {
  return (
    <div>
   <div className="logo">{props.logoText} </div>
      <ul>
        <li>Home</li>
      </ul>
    </div>
  )
}

export default Navbar
