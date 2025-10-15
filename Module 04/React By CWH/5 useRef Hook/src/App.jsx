import React, { useState, useRef, useEffect } from 'react';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null); // To store the interval ID

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10); // Update every 10 milliseconds
      }, 10);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, [isRunning]);

  const startStopwatch = () => {
    setIsRunning(true);
  };

  const stopStopwatch = () => {
    setIsRunning(false);
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    setTime(0);
  };

  // Format time for display (e.g., MM:SS:ms)
  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10); // Displaying hundredths of a second

    return (
      String(minutes).padStart(2, '0') + ':' +
      String(seconds).padStart(2, '0') + ':' +
      String(milliseconds).padStart(2, '0')
    );
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>{formatTime(time)}</p>
      <button onClick={startStopwatch} disabled={isRunning}>Start</button>
      <button onClick={stopStopwatch} disabled={!isRunning}>Stop</button>
      <button onClick={resetStopwatch}>Reset</button>
    </div>
  );
}

export default Stopwatch;

/*
explanation of code:
1. We import necessary hooks from React: useState, useRef, and useEffect.
2. We define a functional component called Stopwatch.
3. We use useState to create two state
    variables: time (to track elapsed time) and isRunning (to track if the stopwatch is running).
4. We use useRef to create a mutable ref object (intervalRef) to store the interval ID.
5. We use useEffect to set up and clean up the interval based on the isRunning state.
    - If isRunning is true, we start an interval that updates the time every 10 milliseconds.
    - If isRunning is false, we clear the interval.
    - We also return a cleanup function to clear the interval when the component unmounts.
6. We define three functions: startStopwatch, stopStopwatch, and resetStopwatch to control the stopwatch.
7. We define a helper function formatTime to format the elapsed time into MM:SS:ms format.
8. Finally, we render the stopwatch UI with buttons to start, stop, and reset the stopwatch, and display the formatted time.

*/