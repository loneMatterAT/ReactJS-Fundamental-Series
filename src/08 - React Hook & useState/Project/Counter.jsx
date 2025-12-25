// This is the Simple Counter Project
import React, {useState} from 'react';

function Counter() {

  // Stateful variable 'count'
  const [count, setCount] = useState(0); // initial value: 0

  // Function for increment
  const increment = () => {
    setCount(count + 1);
  }

  // Function for decrement
  const decrement = () => {
    setCount(count - 1);
  }

  // Function for reset
  const reset = () => {
    setCount(0);
  }

  return( <div className="counter-container">
            <p className="count-display">{count}</p>

            {/* Three buttons */}
            <button className="counter-button" onClick={decrement}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={increment}>Increment</button>

          </div>
  );


}

export default Counter