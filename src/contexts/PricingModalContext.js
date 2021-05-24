import React, { useState, createContext } from "react";

// Manage all state values for Pricing form
export const PricingModalContext = createContext();

export const PricingModalProvider = (props) => {
  const [showPricingModal, setShowPricingModal] = useState(false);

  return (
    <PricingModalContext.Provider
      value={[showPricingModal, setShowPricingModal]}
    >
      {props.children}
    </PricingModalContext.Provider>
  );
};
