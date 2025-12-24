// Importing props
import PropTypes from "prop-types";

function List({ category = "Empty Category", items = [] }) { // parameter: props with defaults

  // 4. Accessing the item of props from App.jsx main component
  const animalList = items;

  // Reusable component for animals
  const reusableListAnimals = animalList.map(item => <li className="animals" key={item.id}>
                                              {item.name}: &nbsp;
                                              {item.class}: &nbsp;
                                              <b>{item.weight}</b>
                                            </li>);

  // 1. Array of fruit
  const fruits = ["Apple", "Banana", "Orange", "Coconut", "Cherry"]

  // Sorting array named 'fruits' into alphabetically order
  fruits.sort();

  // Returning array named 'fruits'
  // return(fruits);

  // Converting array of string named 'fruits' into array of list items
  // We use built-in map() method and arrow function
  // const listItems = fruits.map(fruit => <li>{fruit}</li>);

  // Returning unordered list for listItems
  // return(<ul>{listItems}</ul>);

  // Returning ordered list for listItems
  // return(<ol>{listItems}</ol>);

  // Headers
  const firstHeader = [{headName: "Animal", classType: "Class", weightEstimated: "Weight"}];

  const secondHeader = [{headName: "Low Weights Animals"}];

  const thirdHeader = [{headName: "High Weights Animals"}];

  const fourthHeader = [{headName: "Reusable List of Animals"}];




  // Array for main header 1
  const header1 = firstHeader.map(header => <li className="header1" key={header.headName}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    {header.headName} &nbsp;&nbsp;
                                                    {header.classType} &nbsp;&nbsp;
                                                    {header.weightEstimated}
                                                    </li>);

  // Array for header 2 of Low weight animals
  const header2 = secondHeader.map(header => <li className="header2" key={header.headName}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            {header.headName} &nbsp;&nbsp;
                                            </li>);

  // Array for header 3 of High weight animals
  const header3 = thirdHeader.map(header => <li className="header3" key={header.headName}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            {header.headName} &nbsp;&nbsp;
                                            </li>);

// Array for header 4 of Reusable list of animals using props
  const header4 = fourthHeader.map(header => <li className="header4" key={header.headName}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            {header.headName} &nbsp;&nbsp;
                                            </li>);

  // 2. Converting array of string named 'animals' into array of objects
  // Array of objects
  const animals = [{id: 1, name: "Lion", class: "Carnivores", weight: 150},
                   {id: 2, name: "Eagle", class: "Carnivores", weight: 6},
                   {id: 3, name: "Cheetah", class: "Carnivores", weight: 65},
                   {id: 4, name: "Elephant", class: "Herbivores", weight: 4000},
                   {id: 5, name: "Dolphin", class: "Carnivores", weight: 40}];

  // Sorting the array of objects named 'animals' using sort() method
  // We use 'Lexicographic' for alphabetically order of string properties within of an array named 'animals' and arrow function
  // We use built-in localeCompare() method to compare each name properties of the objects in the array named 'animals'

  // ALPHABETICAL ORDER
  animals.sort((a, b) => a.name.localeCompare(b.name)); // parameters: a(1st item), b(2nd item)

  // REVERSE ALPHABETICAL ORDER
  animals.sort((a, b) => b.name.localeCompare(a.name)); 

  // NUMERIC ASCENDING ORDER BY WEIGHT
  animals.sort((a, b) => a.weight - b.weight);

  // REVERSE DESCENDING NUMERIC ORDER BY WEIGHT
  animals.sort((a, b) => b.weight - a.weight);

  
  // Displaying the name properties of each animal
  // Note: In React, each key had a unique key, name, item also we use id for unique key to avoids naming conflict and duplications
  const listAnimals = animals.map(animal => <li className="animals" key={animal.id}>
                                              {animal.name}: &nbsp;
                                              {animal.class}: &nbsp;
                                              <b>{animal.weight}</b>
                                            </li>);

  // 3. Filtering an objects of animal weight using filter() method and arrow function
  // LOW WEIGHT ANIMALS
  const lowWeight = animals.filter(animal => animal.weight <= 100) // parameter: animal

  // HIGH WEIGHT ANIMALS
  const highWeight = animals.filter(animal => animal.weight >= 101)

  // Displaying the animal weight less than or equal to 100kg
  const lowWeightsAnimals = lowWeight.map(lowWeight => <li className="animals" key={lowWeight.id}>
                                              {lowWeight.name}: &nbsp;
                                              {lowWeight.class}: &nbsp;
                                              <b>{lowWeight.weight}</b>
                                            </li>);

  // Displaying the animal weight greater than or equal to 101kg
  const highWeightsAnimals = highWeight.map(highWeight => <li className="animals" key={highWeight.id}>
                                              {highWeight.name}: &nbsp;
                                              {highWeight.class}: &nbsp;
                                              <b>{highWeight.weight}</b>
                                            </li>);


  // Returning listHeaders and ordered list for listAnimals
  return(
    <>
      {header1}
      <ol>{listAnimals}</ol>

      {header2}
      <ol>{lowWeightsAnimals}</ol>

      {header3}
      <ol>{highWeightsAnimals}</ol>

      {/* Reusable list */}
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{reusableListAnimals}</ol>
    </>
  );
}

// PropTypes validation
// Validates the type and structure of props passed to this component
List.propTypes = {
  category: PropTypes.string, // category should be a string
  items: PropTypes.arrayOf(PropTypes.shape({  id: PropTypes.number, // items should be an array of objects with specific properties
                                              name: PropTypes.string, // each object must have a name (string)
                                              class: PropTypes.string, // each object must have a class (string)
                                              weight: PropTypes.number})), // each object must have a weight (number)
}

// If the component, properties, item, category was empty or missing
// We use defaultProps
List.defaultProps = {
  category: "Empty Category", // for empty header
  items: [], // for missing/empty array displayed a empty array
}

export default List