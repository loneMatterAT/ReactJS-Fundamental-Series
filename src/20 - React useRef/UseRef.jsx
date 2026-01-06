// Importing useState, useEffect, and useRef hook
import React, {useState, useEffect, useRef} from 'react';

function UseRef() {

  // State variable using useRef() hook
  // It's like a scape hatch because useRef() hook doesn't cause the component to re-rendered
  // useRef() returns a ref object with a single current property initially set to the initial value you provided.

  // Note: Using useRef() it rendered once and avoids re-rendered, and meke it efficient
  //       Unlike useState() its re-rendered the component multiple times
  // Multiple references
  const inputRef1 = useRef(null); // initial value: null (no value)
  const inputRef2 = useRef(null); // initial value: null (no value)
  const inputRef3 = useRef(null); // initial value: null (no value)

  // console.log(ref); // demo purpose on console

  // State variable using useState() hook
  // let [number, setNumber] = useState(0); // initial value: 0

  // Using useEffect() hook
  useEffect(() => {
    console.log("COMPONENT RENDERED");
    console.log(inputRef1);
  });

  // Functions to handle Click Button
  function handleClick1() {
    // setNumber(n => n + 1); // whenever 
    // Access the ref object
    // ref.current++;
    // console.log(ref.current);
    inputRef1.current.focus(); // when the button clicked and use focus() method to give the element focus
    inputRef1.current.style.backgroundColor = "yellow"; // when button clicked, the input textbox color change to 'yellow'
    inputRef2.current.style.backgroundColor = ""; // empty string
    inputRef3.current.style.backgroundColor = ""; // empty string
  }

  function handleClick2() {
  inputRef2.current.focus(); // when the button clicked and use focus() method to give the element focus
  // inputRef2.current.style.backgroundColor = "red"; // when button clicked, the input textbox color change to 'yellow'
   inputRef1.current.style.backgroundColor = ""; // empty string
   inputRef2.current.style.backgroundColor = "yellow"; // when button clicked, the input textbox color change to 'yellow'
   inputRef3.current.style.backgroundColor = ""; // empty string
  }

  function handleClick3() {
  inputRef3.current.focus(); // when the button clicked and use focus() method to give the element focus
  inputRef1.current.style.backgroundColor = ""; // empty string
  inputRef2.current.style.backgroundColor = ""; // empty string
  inputRef3.current.style.backgroundColor = "yellow"; // when button clicked, the input textbox color change to 'yellow'
}

  return(
    <>
      {/* Multiple html elements */}
      <div>
        <button onClick={handleClick1}>
          Click me 1!
        </button>
        <input ref={inputRef1}/>

         <button onClick={handleClick2}>
          Click me 2!
        </button>
        <input ref={inputRef2}/>

         <button onClick={handleClick3}>
          Click me 3!
        </button>
        <input ref={inputRef3}/>
      </div>
        
    </>
  );
}

export default UseRef;