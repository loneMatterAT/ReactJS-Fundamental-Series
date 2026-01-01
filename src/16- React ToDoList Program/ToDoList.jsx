// Importing useState hook
import React, { useState } from 'react';

function ToDoList() {

  // State variable for tasks
  const [tasks, setTasks] = useState([]); // initial value: empty array [], tempory that we can also delete it for empty task: "Eat Breakfast", "Take a shower", "Go to work"

  // State variable for new tasks
  const [newTask, setNewTask] = useState("") // initial value: empty string ""

  // Function to handle Input Change
  // Thi function is for textbox when we typed something
  function handleInputChange(event) { // parameter: event
    // Using a setter to set new task
    setNewTask(event.target.value);
  }

  // Function to Add a Task
  function addTask() {

    // We use conditions
    if(newTask.trim() !== "") { // we used trim() method to remove any white spaces to avoid an unlimited white spaces when we click the add task button for empty task
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }
  }

  // Function to Delete a Task
  // What an index of list item we want to delete
  function deleteTask(index) { // parameter: index

    const updatedTasks = tasks.filter((_, i) => i !== index); // the naming convention if the element is ignored, it used underscore _
    setTasks(updatedTasks);

  }

  // Function to Move Task up
  // What an index we want to move up
  function moveTaskUp(index) {

    // We use condition, if the element where up, we can't up it
    if(index > 0) {
      const updatedTasks = [...tasks];
      // We use array destructuring to swap two elements within the array
      // Formula:
      [updatedTasks[index], updatedTasks[index - 1]] =
      [updatedTasks[index - 1], updatedTasks[index]];
      // Set a task using a setter function
      setTasks(updatedTasks);
    }
  }

  // Function to Move Task down
  // What an index we want to move down
  function moveTaskDown(index) {
   if(index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      // We use array destructuring to swap two elements within the array
      // Formula:
      [updatedTasks[index], updatedTasks[index + 1]] =
      [updatedTasks[index + 1], updatedTasks[index]];
      // Set a task using a setter function
      setTasks(updatedTasks);
    }
  } 

  return(
    <>
        <div className="to-do-list-container">

          <h1 className="to-do-list-header">To-Do-List</h1>

          <div>
            {/* For Entering a task */}
            <input 
              className="input-list-task"
              type="text"
              placeholder="Enter a task..."
              value={newTask}
              onChange={handleInputChange}
            />

            {/* Button to add a task */}
            <button
              className="add-btn"
              onClick={addTask}>
              Add
            </button>
          </div>

          {/* Ordered list <ol> tag */}
          <ol className="ordered-task-list">
            {/* We take all of tasks and use map map() method to create a list item element for each task, for each element within the array */}
            {tasks.map((task, index) =>
                <li className="task-list" key={index}>
                  <span className="text-list-items">{task}</span>
                  {/* Button to delete a task */}
                  <button
                    className="delete-btn"
                    onClick={() => deleteTask(index)}> 
                    Delete
                  </button> 

                  {/* Button to move up a task if we change a priority */}
                  <button 
                    className="move-btn"
                    onClick={() => moveTaskUp(index)}>
                      👆🏻
                  </button>

                  {/* Button to move down if we the task was completed */}
                  <button
                    className="move-btn"
                    onClick={() => moveTaskDown(index)}>
                      👇🏻
                  </button>
                </li>
            )} {/* parameter: task, index */}
          </ol>
        </div>
    </>
  );

}

export default ToDoList;