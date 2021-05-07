import React, { useState, createContext } from "react";

// Manage all state values for contact form
export const ContactFormContext = createContext();

export const ContactFormProvider = (props) => {
  const [formValues, setFormValues] = useState({
    inputValues: {
      name: "",
      email: "",
      phone: "",
      select: "",
      message: "",
    },
  });

  return (
    <ContactFormContext.Provider value={[formValues, setFormValues]}>
      {props.children}
    </ContactFormContext.Provider>
  );
};
