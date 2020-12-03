import React from "react";

import logo from "assets/img/miccosukee/emblem_logo.png";

const Header = (props) => {
  return (
    <div
      style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}
    >
      <img
        onClick={() => props.click("/")}
        src={logo}
        alt="miccosukee emblem logo"
        style={{ width: "50px", cursor: "pointer" }}
      />
      <div
        style={{
          borderTop: "1px solid #979797",
          width: "60%",
          margin: "auto",
          marginTop: "10px",
        }}
      />
    </div>
  );
};

export default Header;
