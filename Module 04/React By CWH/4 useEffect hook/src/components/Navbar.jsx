import React,{useEffect} from 'react'

const Navbar = ({color, count}) => {
  
  // case 1: run every time the component is re-rendered
  useEffect(() => {
    alert("i run every time the component is re-rendered");
  }) // no dependency array
  
  //we can use multiple useEffect hooks in a component
  // case 2: run only once when the component is mounted
  useEffect(() => {
    alert("hello, i run only once when the component is mounted");
  }, [])

//  4: run every time the count changes
  useEffect(() => {
    console.log("hey count has changed to " + count);
  }, [count]) // this will run every time the count changes

  //example of cleanup function in useEffect hook
useEffect(() => {
  alert("this is my first render of page with return");
  return () => {
    alert("this is my unmounting phase");
  }
}, [])

  return (
    <div>

      i am navbar, my color is {color}
    </div>
  )
}

export default Navbar
