import React, { useState, createContext } from "react";

// Manage all state values for contact form
export const ContactModalContext = createContext();

export const ContactModalProvider = (props) => {
  const [showTeeTimeModal, setShowTeeTimeModal] = useState(false);

  return (
    <ContactModalContext.Provider
      value={[showTeeTimeModal, setShowTeeTimeModal]}
    >
      {props.children}
    </ContactModalContext.Provider>
  );
};
