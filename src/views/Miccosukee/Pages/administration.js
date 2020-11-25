import React from "react";

const Administration = (props) => {
  return (
    <div>
      <button onClick={() => props.click("/")}>GO BACK</button>
      Administration
    </div>
  );
};

export default Administration;
