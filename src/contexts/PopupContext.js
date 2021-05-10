import React, { useState, createContext } from "react";

// Manage all state values for contact form
export const PopupContext = createContext();

export const PopupProvider = (props) => {
  const [showPopupModal, setShowPopupModal] = useState(false);

  return (
    <PopupContext.Provider value={[showPopupModal, setShowPopupModal]}>
      {props.children}
    </PopupContext.Provider>
  );
};
