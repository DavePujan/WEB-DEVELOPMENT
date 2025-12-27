import React from 'react'

const App = () => {

    function btnClicked() {
      console.log("button is clicked")
    }

    // function mouseEnter() {
    //   console.log("Mouse Entered");
    // }

    function onEnterText(element) {
      console.log("User is Typing",element);
      
    }

    function pageScrolling(elem) {
      console.log(elem);
    }

  return (
   <div>
   <div>
    <button onClick={btnClicked}>Click</button>
    <button onClick={btnClicked}>Explore This</button>

    <input onChange={function(elem){
      onEnterText(elem.target.value)
    }} type="text" placeholder='Enter Name'/>
    </div> 

    <div onWheel={(elem) =>{
      pageScrolling(elem.target.deltaY)
    } }>
      <div className='page1'></div>
      <div className='page2'></div>
      <div className='page3'></div>
    </div>
</div>
  )

}
export default App