// Importing useState hook
import React, { useState } from 'react';

function CarList() {

  // State variables
  const [cars, setCars] = useState([]); // initial value: [] empty array
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  // Function to handle ADD Car
  function handleAddCar() {

    // We create new state variable named 'newCar'
    const newCar = {year: carYear,
                    make: carMake,
                    model: carModel};

    // Update the state of date wherever the value is return
    setCarYear(new Date().getFullYear());

    // And reset it with an empty string for Car make and Car model
    setCarMake("");
    setCarModel("");

    // We use setter for the array of objects using arrow function and spread operator
    setCars(c => [...c, newCar]);

  }

  // Function to handle REMOvE Car
  function handleRemoveCar(index) { // parameter: index, what is the index of object that we removing
    // What index we want to remove
    // We use setter
    setCars(c => c.filter((_, i) => i !== index));
  }

  // Function to handle YEAR CHANGE of a Car
  function handleYearChange(event) { // parameter: event
    setCarYear(event.target.value);
  }

  // Function to handle MAKE CHANGE of a Car
  function handleMakeChange(event) {
    setCarMake(event.target.value);
  }

  // Function to handle MODEL CHANGE of a Car
  function handleModelChange(event) {
    setCarModel(event.target.value);
  }

  return(
      <>
          <div className="cars-container">
            <h2 className="car-header">LIST OF CARS</h2>
            <ul className="car-list">
              {/* We used map() method with two arguments: element, index */}
              {/* The element renamed into 'car' for readability, use arrow function and return a list <li> element */}
              {cars.map((car, index) => 
                  <li key={index} onClick={() => handleRemoveCar(index)}> {/* arrow function without argument */}
                    {car.year} {car.make} {car.model}
                  </li>)} 
            </ul>

            {/* Input field for Car Year Change */}
            <input className="input-car-year" type="number" value={carYear} onChange={handleYearChange}/><br></br>

            {/* Input field for Car Make Change */}
            <input className="input-car-make" type="text" value={carMake} onChange={handleMakeChange}
                   placeholder="Enter Car Make"/><br></br>

            {/* Input field for Car Model Change */}
            <input className="input-car-model" type="text" value={carModel} onChange={handleModelChange}
                   placeholder="Enter Car Model"/><br></br>

            {/* Button to Submit a Car */}
            <button className="submit-car-btn" onClick={handleAddCar}>Add Car</button>
          </div>
      </>
  );
}

export default CarList;