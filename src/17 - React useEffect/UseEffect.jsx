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
  // State variables uing innerWidth and innerHeight property
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  // Using useEffect() to take once or twice event listener, not many
  useEffect(() => {
    // We use add event listener
    window.addEventListener("resize", handleResize);
    console.log("Event Listener Added"); // For demo purpose on console

    // We add return() statement to clean up code
    return () => {
      // To unmount the component to the DOM
      window.removeEventListener("resize", handleResize);
      console.log("Event Listener Remove");
    }
  }, []);

  // Add another useEffect code
  useEffect(() => {
    document.title = `Size: ${width} x ${height}`;
  }, [width, height]);


  // 2. useEffect(() => {}, [])  -> Runs only on mount

  // Function to handle a Resize
  function handleResize() {
    // Using setter function()
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  

  return(
    <>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button><br/>
        <button onClick={changeColor}>Change color</button><br/>

        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
    </>
  );
}

export default UseEffect