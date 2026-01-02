// Importing useState and useEffect hook
import React, {useState, useEffect} from 'react'

function UseEffect() {

  // State variable
  const [count, setCount] = useState(0); // initial value: 0
  const [color, setColor] = useState("green");

  // 1. useEffect(() => {})  -> Runs after every re-render
  // Everytime this component re-render will change the title of webpage like perform this code: document.title = `Count: ${count}`;
  useEffect(() => {
    document.title = `Count: ${count} ${color}`;  // document.title = `My Counter Program`;

    // Benefits of using useEffect, make code organize
    return() => {
      // SOME CLEANUP CODE
    }
    
  }, [count, color]); // empty dependencies update the title of webpage/DOM once, if we had run first before the codess uppper

  // Function to Add count
  function addCount() {
    setCount(c => c + 1);
  }

  // Function to Subtract count
  function subtractCount() {
    setCount(c => c - 1);
  }

  // Function to Change color
  function changeColor() {
    setColor(c => c === "green" ? "red" : "green");
  }

  // Example 2: Width and Height of the Window
  // State variable uing innerWidth property
  const [width, setWidth] = useState(window.innerWidth);

  return(
    <>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button><br/>
        <button onClick={changeColor}>Change color</button>
    </>
  );
}

export default UseEffect