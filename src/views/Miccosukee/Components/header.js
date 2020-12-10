import React from "react";
import logo from "assets/img/miccosukee/emblem_logo.png";

import Button from "components/CustomButtons/Button.js";

import {
  useLanguage,
  useLanguageUpdate,
} from "../../../context/languageContext.js";

const Header = (props) => {
  const language = useLanguage();
  const toggleLanguage = useLanguageUpdate();

  const languageTrue = {
    textTransform: "lowercase",
    fontSize: "12px",
    borderRadius: "30px",
    padding: "7px 14px",
    margin: "6px",
    color: "white",
  };

  const languageFalse = {
    textTransform: "lowercase",
    fontSize: "12px",
    borderRadius: "30px",
    padding: "7px 14px",
    margin: "6px",
    color: "#555555",
  };

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
          marginBottom: "5px",
        }}
      />
      <Button
        simple={language ? false : true}
        style={language ? languageTrue : languageFalse}
        onClick={!language ? toggleLanguage : null}
        color="danger"
      >
        english
      </Button>
      <Button
        simple={!language ? false : true}
        style={!language ? languageTrue : languageFalse}
        onClick={language ? toggleLanguage : null}
        color="danger"
      >
        español
      </Button>
    </div>
  );
};

export default Header;
