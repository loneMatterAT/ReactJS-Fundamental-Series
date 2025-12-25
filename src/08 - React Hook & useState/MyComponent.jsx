// Importing React library, not the entire library, and use destructuring for to extract individual variables and functions
import React, {useState} from 'react'; // import useState function from 'react' location

function MyComponent() {

  // Using Array destructuring for setter and creating stateful variable
  // Wherever value, the 'Guest' was the initial state what we insert on useState()
  const [name, setName] = useState("Guest"); // returns an array with two element, a variable and a setter function

  // Incrementing age
  const [age, setAge] = useState(0); // initial value: 0

  // Boolean for toggle
  const [isEmployed, setIsEmployed] = useState(false); // initial value: false

  // Function for button to update the name
  const updateName = () => {
    // name = "Ken";
    // console.log(name);
    // We use setName() setter function to update the value on DOM or webpage instead of setting it like whta we see on upper codes
    setName("Ken");
  }

  // Function for incrementing an age
  const incrementAge = () => {
    setAge(age + 1);
  }

  // Function for toggle an status of Employee
  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed); // use !isEmployed for reversing the boolean initial value from false to be 'true'
  }
  

  return( <div>
            <p>Name : {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age : {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            {/* We use ternary operator for condition */}
            <p>Is employed : {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Toggle Status</button>
          </div>
  );
}

export default MyComponent