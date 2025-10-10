//this is the main component of the React application. It serves as the root component that gets rendered to the DOM.

import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// here we cant use class as it is reserved keyword in JS so we use className instead of class
function App() {
// here is a simple state variable 'value' initialized to 0, along with its setter function 'setValue' using the useState hook.
// here state is variable which can be changed and when it changes it re-renders the component
  const [value, setValue] = useState(0);
  return (
    <div className="App">
    Hey there, I am App component
    <Navbar logoText={"This is logo"}/>
    <Navbar />
    <div className="value">
       {value}
    </div>
    <button onClick={() => setValue(value + 1)}>click me!</button>
    </div>

  );
}

export default App;
