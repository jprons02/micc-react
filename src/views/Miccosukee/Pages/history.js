import React from "react";

const History = (props) => {
  return (
    <div>
      <button onClick={() => props.click("/")}>GO BACK</button>
      History
    </div>
  );
};

export default History;
