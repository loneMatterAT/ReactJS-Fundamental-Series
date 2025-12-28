// Importing useState
import React, { useState } from 'react';

function MyComponent() {

  const [count, setCount] = useState(0); // initial value of useState: 0

  // Function for incrementation
  // Note: Uses the CURRENT sstate to calculate the NEXT state.
  //       set functions do not trigger an update.
  //       React batches together state updates for performance reasons.
  //       NEXT state becomes the CURRENT state after an update.
  function increment() {
    // setCount(count + 1); -> normal use of updating current state of count, not the previous state

    // Using Updater Function
    // Note: Takes the PENDING state to calculate NEXT state.
    // React puts your updater function in queue (waiting in line) or FIFO (First-come-First-out).
    // During the next render, it will call them in the same order.

    // c(pending state/count) => c = 1(next state/count)
    // c is te first letter of state variable which is 'count'
    setCount(c => c + 1);
    setCount(c => c + 1);
    setCount(c => c + 1);
  }

  // Function for decrementation
  function decrement() {
    // setCount(count - 1);  -> normal use of updating current state of count, not the previous state
    setCount(c => c - 1);
    setCount(c => c - 1);
    setCount(c => c - 1);
  }

  // Function for reset
  function reset() {
    // setCount(0); -> normal use

    // Using Updater Function
    setCount(c => c = 0); // it's not necessary to use updater function because we will not care from the previous state and because passing 0, its already sending 0 
  }

  return(
    <div className="counter-container">
      <p className="count-display">{count}</p>

      {/* Three buttons */}
      <button className="counter-button" onClick={decrement}>Decrement</button>
      <button className="counter-button" onClick={reset}>Reset</button>
      <button className="counter-button" onClick={increment}>Increment</button>
    </div>
  );
}

export default MyComponent