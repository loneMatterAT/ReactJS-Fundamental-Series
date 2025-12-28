// Importing useState hook
import React, {useState} from 'react';

// Function for color picking
function ColorPicker() {
  // Using useState hook to creat a statful variable
  const [color, setColor] = useState("#FFFFFF"); // hexadecimal value for initial value for default white

// Function to handle color changes
function handleColorChange(event) {
  setColor(event.target.value);
}

  return(
        <>
          <div className="color-picker-container">
            <h1 className="color-header">Color Picker</h1>
            <div className="color-display" style={{backgroundColor: color}}> {/* In any CSS properties in JS, we need to enclose this in object, so we use double set of curly braces */}
              <p>Selected Color: {color}</p>
            </div>
            <label for="color-pick" className="color-label">Select a Color:</label>
            <input name="color-pick" type="color" value={color} onChange={handleColorChange} />
          </div>    
        </>
  );
}

export default ColorPicker