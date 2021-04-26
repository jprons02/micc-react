import React from "react";

const Everglades = (props) => {
  return (
    <div>
      <button onClick={() => props.history.push("/")}>GO BACK</button>
      everglades
    </div>
  );
};

export default Everglades;
