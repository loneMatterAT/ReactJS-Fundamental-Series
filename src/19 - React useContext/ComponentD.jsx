// Importing useContext hook
import React, {useContext} from 'react';

// Importing UserContext from ComponentA.jsx
import {UserContext} from './ComponentA.jsx';

// COMPONENT D = CONSUMER COMPONENT OF COMPONENT A
function ComponentD() {  

  // State variable for useContext() hook
  const user = useContext(UserContext); // passing UserContext as an argument

  return(
    <>
      {/* props drilling - passing to the center component, or drilling down  */}
        <div className="box-container">
          <h1>ComponentD</h1>
          {/* Because of using useContext() hook, 
              we can now accessed the ComponentA value
              which is the username 'John', we don't need
              a props and avoid prop-drilling to pass down
              the value */}
          <h2>{`Bye ${user}.`}</h2> 
        </div>
    </>
  );
}

export default ComponentD;