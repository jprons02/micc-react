import React, { useState, createContext } from "react";

// Manage all state values for mobile menu drawer
export const MobileMenuDrawerContext = createContext();

export const MobileMenuDrawerProvider = (props) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <MobileMenuDrawerContext.Provider value={[mobileOpen, setMobileOpen]}>
      {props.children}
    </MobileMenuDrawerContext.Provider>
  );
};
