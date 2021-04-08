import React, { useState, createContext } from "react";

// Manage all state values for signup form
export const VirtualEventLoginFormContext = createContext();

export const VirtualEventLoginFormProvider = (props) => {
  const [inputValues, setInputValues] = useState({
    inputValues: {
      email: "",
    },
  });

  return (
    <VirtualEventLoginFormContext.Provider
      value={[inputValues, setInputValues]}
    >
      {props.children}
    </VirtualEventLoginFormContext.Provider>
  );
};
