import React, { useState, createContext } from "react";

// Manage all state values for contact form
export const TeeTimeContext = createContext();

export const TeeTimeProvider = (props) => {
  const [showTeeTimeModal, setShowTeeTimeModal] = useState(false);

  return (
    <TeeTimeContext.Provider value={[showTeeTimeModal, setShowTeeTimeModal]}>
      {props.children}
    </TeeTimeContext.Provider>
  );
};
