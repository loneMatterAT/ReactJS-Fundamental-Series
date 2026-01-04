// Importing useState and createContext
import React, {useState, createContext} from 'react';

// Exporting createContext() function
export const UserContext = createContext();

// Importing Component B
import ComponentB from './ComponentB.jsx';

// COMPONENT A = PROVIDER COMPONENT OF COMPONENT B, C, and D
function ComponentA() {
  // State variable
  const [user, setUser] = useState("John");

  return(
    <>
        <div className="box-container">
          <h1>ComponentA</h1>
          <h2>{`Hello ${user}!`}</h2> {/* ComponentA display username */}

          {/* Component A is ready to be a provider, we don't need a props */}
          <UserContext.Provider value={user}>
            <ComponentB user={user}/> {/* Passing a username using props */}
          </UserContext.Provider>
        </div>
    </>
  );
}

export default ComponentA;