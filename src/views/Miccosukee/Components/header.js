import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/miccosukee/components/header.js";
import { Icon } from "@material-ui/core";
import logo from "assets/img/miccosukee/emblem_logo.png";
import Button from "components/CustomButtons/Button.js";

import {
  useLanguage,
  useLanguageUpdate,
} from "../../../context/languageContext.js";

const useStyles = makeStyles(styles);

const Header = (props) => {
  const classes = useStyles();
  const language = useLanguage();
  const toggleLanguage = useLanguageUpdate();
  const showBackButton = props.page !== 0 ? true : false;

  return (
    <div className={classes.container}>
      <img
        onClick={() => props.click("/")}
        src={logo}
        alt="miccosukee emblem logo"
        className={classes.logo}
      />
      <div className={classes.navContainer}>
        <div className={classes.horizontalRule} />
        <div
          style={{ display: "inline-block", position: "absolute", left: "0" }}
        >
          <Button
            justIcon
            round
            style={
              showBackButton ? { display: "inline-block" } : { display: "none" }
            }
            className={classes.backButton}
            color="white"
            onClick={() => props.click("/")}
          >
            <Icon style={{ fontSize: "16px", marginLeft: "2px" }}>
              arrow_back_ios
            </Icon>
          </Button>
        </div>
        <div style={{ display: "inline-block" }}>
          <Button
            simple={language ? false : true}
            className={language ? classes.languageTrue : classes.languageFalse}
            //style={language ? languageTrue : languageFalse}
            onClick={!language ? toggleLanguage : null}
            color="danger"
          >
            english
          </Button>
          <Button
            simple={!language ? false : true}
            className={!language ? classes.languageTrue : classes.languageFalse}
            //style={!language ? languageTrue : languageFalse}
            onClick={language ? toggleLanguage : null}
            color="danger"
          >
            español
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;

/*
  <div
    style={{ display: "inline-block", position: "absolute", left: "0" }}
  >
    <Button
      justIcon
      round
      style={
        showBackButton ? { display: "inline-block" } : { display: "none" }
      }
      color="white"
      onClick={() => props.click("/")}
    >
      <Icon style={{ fontSize: "16px", marginLeft: "2px" }}>
        arrow_back_ios
      </Icon>
    </Button>
  </div>
*/
