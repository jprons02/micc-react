import React, { useState, createContext } from "react";

// Manage all state values for Pricing form
export const FoodMenuContext = createContext();

export const FoodMenuProvider = (props) => {
  const [showFoodMenu, setShowFoodMenu] = useState(false);

  return (
    <FoodMenuContext.Provider value={[showFoodMenu, setShowFoodMenu]}>
      {props.children}
    </FoodMenuContext.Provider>
  );
};
