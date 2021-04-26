import React from "react";

const HistoryAdmin = (props) => {
  return (
    <div>
      <button onClick={() => props.history.push("/")}>GO BACK</button>
      History
    </div>
  );
};

export default HistoryAdmin;
