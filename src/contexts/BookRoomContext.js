import React, { useState, createContext } from "react";

// Manage all state values for contact form
export const BookRoomContext = createContext();

export const BookRoomProvider = (props) => {
  const [showBookRoomModal, setShowBookRoomModal] = useState(false);

  return (
    <BookRoomContext.Provider value={[showBookRoomModal, setShowBookRoomModal]}>
      {props.children}
    </BookRoomContext.Provider>
  );
};