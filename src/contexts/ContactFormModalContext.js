import React, { useState, createContext } from "react";

// Manage all state values for contact form
export const ContactModalContext = createContext();

export const ContactModalProvider = (props) => {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <ContactModalContext.Provider
      value={[showContactModal, setShowContactModal]}
    >
      {props.children}
    </ContactModalContext.Provider>
  );
};
