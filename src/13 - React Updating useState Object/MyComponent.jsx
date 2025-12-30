// Importimg useState hook from react
import React, { useState } from 'react';

function MyComponent() {

  // Creating a variable of array destructuring in useState initial object
  const [car, setCar] = useState({year: 2024,
                                  make: "Ford",
                                  model: "Mustang"});
  // Function for changing the property of object using onChange() method
  // Function to handle year change
  function handleYearChange(event) { // event object parameter gives us to use onChange() event handler
    // We use spread operator ... when we update the state of the car, we are going to create a new object, ...spread all the current poperty of the car and add a year.
    // After using the spread operator ...
    // ex. setCar({year: 2024, make: "Ford", model: "Mustang", year: 2025});
    // c represents the 'car' th previous state of car, not the current state
    setCar(c => ({...c, year: event.target.value}));
  }

  // Function to handle make change
  function handleMakeChange(event) {
    
    setCar(c => ({...c, make: event.target.value}));

  }

  // Function to handle model change
  function handleModelChange(event) {

    setCar(c => ({...c, model: event.target.value}));
  }


  return(
    <>
          <div className="car-container">
            <p className="fav-car">Your Favorite Car is: {car.year} {car.make} {car.model}</p>

            <input className="car-year" type="number" value={car.year} onChange={handleYearChange}/><br/>
            <input className="car-make" type="text" value={car.make} onChange={handleMakeChange}/><br/>
            <input className="car-model" type="text" value={car.model} onChange={handleModelChange}/><br/>
          </div>
    </>
  );
}

export default MyComponent