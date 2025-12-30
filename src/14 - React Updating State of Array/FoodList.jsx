// Importing useState hook from react
import React, { useState } from 'react';

function FoodList() {

  // Creating a variable const using array destructuring
  const [foods, setFoods] = useState(["Sushi", "Sashimi", "Dango"]); // initial array value: "Sushi", "Sashimi", and "Dango"

  // Function to add an element to an array of useState([])
  function handleAddFood() {
    
    const newFood = document.getElementById("foodInput").value;

    // Resetting the input element to empty string when entering a new food on input field
    document.getElementById("foodInput").value = "";

    // Using setter and arrow function to update an array and ... spread operator to get the previous initial value of useState array which are: "Sushi", "Sashimi", and "Dango"
    // f means 'food' and a previous state
    setFoods(f => [...f, newFood]);
  }

  // Function to remove an element to an array of useState([])
  function handleRemoveFood(index) { // parameter: index

    // Using fiter() method to filter an array and arrow function to make a condition using logical operator
    // i means 'index'
    // Using _ underscore naming convention for parameter 'element' using this, it to indicate the parameter being pass to the function is ignored
    setFoods(foods.filter((_, i) => i !== index));
  }

  return(
    <>
        <div className="food-container">
          <h2 className="food-header">Menu of Japanese Foods</h2>
          <ul className="food-list">
            {/* Using map() method and arrow function */}
            {foods.map((food, index) =>
            <li key={index} onClick={() => handleRemoveFood(index)}> {/* callback: handleRemoveFood, then parameter: index */}
              {food}
            </li>)}
          </ul>

          {/* Inputting an element to array  */}
          <input className="food-input" type="text" id="foodInput" placeholder="Enter Food Name"/><br/>

          {/* Button to add food on array */}
          <button onClick={handleAddFood} className="add-food-btn">Add Food</button>
        </div>
    </>
  );
}

export default FoodList