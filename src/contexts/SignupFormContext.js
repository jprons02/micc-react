import React, { useState, createContext } from 'react';

// Checkboxes of interests
export const interests = [
  {
    id: '622e531a8a',
    name: 'Resort',
    defaultCheck: ['mrg'],
  },
  {
    id: '27274b4401',
    name: 'Dining',
    defaultCheck: ['mrg'],
  },
  {
    id: 'dbc25da46d',
    name: 'Gaming & Bingo',
    defaultCheck: ['mrg'],
  },
  /*
  {
    id: "ff47c19f4a",
    name: "Salon & Spa",
    defaultCheck: ["mrg"],
  },
  */
  {
    id: '240666434a',
    name: 'Events & Concerts',
    defaultCheck: [''],
  },
  {
    id: 'd2b2e40974',
    name: 'Indian Village & Airboats',
    defaultCheck: ['village'],
  },
  {
    id: 'd9083b8593',
    name: 'Golf & Country Club',
    defaultCheck: ['golf'],
  },
];

// Manage all state values for signup form
export const SignupFormContext = createContext();

export const SignupFormProvider = (props) => {
  const defaultCheck = (arr) => {
    if (arr.find((element) => element === props.entity) !== undefined) {
      return true;
    } else {
      return false;
    }
  };
  const checkboxValues = () => {
    let obj = {};
    interests.map((interest) => {
      obj[interest.name] = defaultCheck(interest.defaultCheck);
    });
    return obj;
  };

  const [formValues, setFormValues] = useState({
    inputValues: {
      name: '',
      email: '',
    },
    // keys and values are dynamically created from Signup.js
    checkboxValues: checkboxValues(),
  });

  return (
    <SignupFormContext.Provider value={[formValues, setFormValues]}>
      {props.children}
    </SignupFormContext.Provider>
  );
};
