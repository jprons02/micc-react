import React, { useState, createContext } from "react";

//see use example in Footer.js
export const signupAlertId = "signupAlertId";
export const virtualEventLoginId = "virtualEventLoginId";
export const contactAlertId = "contactAlertId";

//Manage all state values for Alert
export const AlertContext = createContext();

export const AlertProvider = (props) => {
  const [alerts, setAlerts] = useState({});
  return (
    <AlertContext.Provider value={[alerts, setAlerts]}>
      {props.children}
    </AlertContext.Provider>
  );
};
