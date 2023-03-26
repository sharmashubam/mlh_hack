import React, { createContext, useState } from 'react';

export const MyContext = createContext();

// Step 2: Create a new component that will serve as the context provider
export const MyContextProvider = ({ children }) => {
  
  const [clickonprofile, setClickonprofile] = useState(false);
  
  const clickprofile = (e) => {
    if (clickonprofile == true) {
      setClickonprofile(false);
      
    }
    else {
      setClickonprofile(true);
    }
  }
    // Step 4: Pass the state and methods that you want to share through the context to the value prop of the <Context.Provider> component.
    const value = {
        clickonprofile,
        clickprofile,
      };
    
      return (
        // Step 3: Wrap the child components that will consume the context with the <Context.Provider> component.
        <MyContext.Provider value={value}>
          {children}
        </MyContext.Provider>
          );
        };