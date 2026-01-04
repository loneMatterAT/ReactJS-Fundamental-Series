// Importing useContext hook
import React, {useContext} from 'react';

// Importing UserContext from ComponentA.jsx
import {UserContext} from './ComponentA.jsx';


// Importing Component C
import ComponentC from './ComponentC.jsx';

function ComponentB() { 

  const user = useContext(UserContext); // passing UserContext as an argument

  return(
    <>
        <div className="box-container">
          <h1>ComponentB</h1>
          <h2>{`Hello, are you okay ${user}?`}</h2>
          <ComponentC /> {/* {} means embedd javascript */}
        </div>
    </>
  );
}

export default ComponentB;