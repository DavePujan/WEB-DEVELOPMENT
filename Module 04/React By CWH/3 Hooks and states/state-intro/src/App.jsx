import { useState } from 'react'
import './App.css'

function App() {
  // here useState is a Hook , its initial value is 0, count is a variable, setCount is a function to update the value of count
  const [count, setCount] = useState(0)
/*
### use state vs normal js: unlike normal js, react re-renders the component when the state changes
// in normal js, if we change the value of a variable, the component will not re-render
// in react, if we change the value of a state, the component will re-render
// for ex, if we do this in normal js:
// let count = 0;
// count = count + 1; // this will not re-render the component
// but in react, if we do this:
// const [count, setCount] = useState(0);
// setCount(count + 1); // this will re-render the component
*/
  return (
    <>
      <div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      
      </div>
    </>
  )
}

export default App


/*list of hooksand its simple use cases:
1. useState : to manage state in a functional component , let us remember the state of a variable
2. useEffect : to perform side effects in a functional component
3. useContext : to manage global state in a functional component
4. useReducer : to manage complex state in a functional component
5. useCallback : to memoize a function in a functional component
6. useMemo : to memoize a value in a functional component
7. useRef : to access a DOM element or a mutable value in a functional component
8. useImperativeHandle : to customize the instance value that is exposed to parent components when using ref
9. useLayoutEffect : to perform side effects that require DOM mutations
10. useDebugValue : to display a label for custom hooks in React DevTools

*/