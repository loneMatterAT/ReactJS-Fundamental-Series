
function Button() {
  
  // 1. Handling simple click event
  const handleClick1 = () => console.log("OUCH!"); // do this when button wa clicked

  const handleClick2 = (name) => console.log(`${name} stop clicking me`); // parameter: name

  // return(<button onClick={handleClick1}>Click me 😉</button>);

  // return(<button onClick={() => handleClick2("John")}>Click me 😉</button>);


  // 2. Handling click event using conditions
  let count = 0;

  const conditionClick = (name) => {
    // Conditions to handle 
    if(count < 3) {
      count++;
      console.log(`${name} you click me ${count} time/s`);
    }
    else {
      console.log(`${name} stop clicking me!`);
    }
  }

  // return(<button onClick={() => conditionClick("Rain")}>Click me 😁</button>);


  // 3. Event parameter show objects and different possibilities in console
  // const handleClick3 = (e) => console.log(e); // parameter and argument: event or e
  // return(<button onClick={(e) => handleClick3(e)}>Click me 😏</button>);

  // Modifying text content from console
  // const targetModify = (e) => e.target.textContent = "OUCH! 😖"; // modifying target or text content in console
  // return(<button onClick={(e) => targetModify(e)}>Click me 😏</button>);

  // Handling a double click
  const doubleClick = (e) => e.target.textContent = "OUCH! 😖"; // modifying target or text content in console
  return(<button onDoubleClick={(e) => doubleClick(e)}>Click me 😏</button>);
  
}

export default Button