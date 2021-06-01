import React, { useState, createContext } from "react";

// Manage all state values for contact form
export const PopupContext = createContext();
/*
export const PopupProvider = (props) => {
  const [showPopupModal, setShowPopupModal] = useState(false);
*/

export const PopupProvider = (props) => {
  const [popupState, setPopupState] = useState({});

  return (
    <PopupContext.Provider value={[popupState, setPopupState]}>
      {props.children}
    </PopupContext.Provider>
  );
};
