import React from "react";

const StandardHorizontalCard = (props) => {
  const cardStyle = {
    boxShadow:
      "0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%)",
    borderRadius: "6px",
    width: props.width || "100%",
    margin: "2px",
  };

  return (
    <div key={props.key}>
      <div style={cardStyle}>
        <img
          style={{
            borderTopLeftRadius: "6px",
            borderBottomLeftRadius: "6px",
            width: "200px",
            height: "200px",
            display: "inline-block",
          }}
          src={props.img}
        />
        <div
          style={{
            margin: "20px",
            display: "inline-block",
            verticalAlign: "top",
            maxWidth: "430px",
          }}
        >
          {props.body}
        </div>
      </div>
    </div>
  );
};

export default StandardHorizontalCard;
