// Importing useState, useEffect, useRef hook
import React, {useState, useEffect, useRef} from 'react';

function Stopwatch() {

  // variables using useState() hook
  const [isRunning, setIsRunning] = useState(false); // initial value: false
  const [elapsedTime, setElapsedTime] = useState(0); // initial value: 0

  // variables using useRef() hook
  const intervalIdRef = useRef(null); // initial value: null (no value)

  // when the stopwatch start, we need to get the current time
  const startTimeRef = useRef(0); // initial value: 0 (0 milliseconds)

  // useEffect() hook to pass an arrow function for
  useEffect(() => {

    // Conditions
    if(isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current); // will set an elapsed time to Date right now - startTime
      }, 10); // every 10 milliseconds
    }

    // CLEANUP FUNCTION
    return () => {
      clearInterval(intervalIdRef.current); // stopwatch stop running
    }

  }, [isRunning]); // dependecy array [] isRunning, basically if we mount the component, and its running every changes

  // Function to START a Stopwatch
  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
    console.log(startTimeRef.current); // for demo purposes on console
  }

  // Function to STOP a Stopwatch
  function stop() {
    setIsRunning(false);
  }

  // Function to RESET a Stopwatch
  function reset() {
    setElapsedTime(0);
    setIsRunning(false);
  }

  // Function to FORMAT TIME
  function formatTime() {

    // variables
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60)); // calculate hours
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60); // calculate minutes
    let seconds = Math.floor(elapsedTime / (1000) % 60); // calculate seconds
    let milliseconds = Math.floor((elapsedTime % 1000) / 10); // calculate milliseconds

    // padstart() method to make two 00 characters number for stopwatch
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");


    return `${minutes}:${seconds}:${milliseconds}`;
    // return `${hours}:${minutes}:${seconds}:${milliseconds}`; -> optional if we want to put hours on stopwatch

  }

  return(
    <>
        <div className="stopwatch">
          <div className="display">{formatTime()}</div>

          <div className="controls">
            {/* Buttons */}
            <button onClick={start} className="start-btn">Start</button>
            <button onClick={stop} className="stop-btn">Stop</button>
            <button onClick={reset} className="reset-btn">Reset</button>
          </div>
        </div>
    </>
  );


}

export default Stopwatch;