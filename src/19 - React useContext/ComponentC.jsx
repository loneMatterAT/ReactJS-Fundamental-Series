// Importing useContext hook
import React, {useContext} from 'react';

// Importing UserContext from ComponentA.jsx
import {UserContext} from './ComponentA.jsx';

// Importing Component D
import ComponentD from './ComponentD.jsx';


function ComponentC() { 

  // State variable for useContext() hook
  const user = useContext(UserContext); // passing UserContext as an argument

  return(
    <>
        <div className="box-container">
          <h1>ComponentC</h1>
          <h2>{`Hello again ${user}...`}</h2>
          <ComponentD />
        </div>
    </>
  );
}

export default ComponentC;