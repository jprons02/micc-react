/*eslint-disable*/
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

import FooterExpansionPanel from "components/CustomExpansionPanel/FooterExpansionPanel.js";
import FooterMockExpansionPanel from "components/CustomExpansionPanel/FooterMockExpansionPanel.js";
import Button from "components/CustomButtons/Button.js";
import Badge from "components/Badge/Badge.js";
import emblem from "assets/img/miccosukee/MiccosukeeEmblem_Color.svg";
import CustomFooterModal from "components/CustomModal/CustomFooterModals/CustomFooterModal.js";

//test
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import SignUpForm from "components/CustomForms/Signup.js";
import CustomInput from "components/Footer/Components/CustomTextField.js";
import DesktopFooter from "components/Footer/Components/DesktopFooter.js";
import MobileFooter from "components/Footer/Components/MobileFooter.js";
import DemoFooter from "components/Footer/Components/DemoFooter.js";

// Contexts
import { SignupFormProvider } from "contexts/SignupFormContext.js";
import { AlertContext, signupAlertId } from "contexts/AlertContext.js";

// test snackbar
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Check from "@material-ui/icons/Check";

import { useLanguage, useLanguageUpdate } from "contexts/languageContext.js";
import { AddAlertSharp } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const language = useLanguage();
  const toggleLanguage = useLanguageUpdate();

  const [alerts, setAlerts] = useContext(AlertContext);
  const [modal, setModal] = useState(false);

  const classes = useStyles();

  const footerClasses = classNames({
    [classes.footer]: true,
  });

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  // Reset alert state when footer unmounts.
  useEffect(() => {
    return () => {
      setAlerts({ ...alerts, [signupAlertId]: false });
    };
  }, []);

  const renderFooter = () => {
    return (
      <footer className={footerClasses}>
        <div className={classes.container}>
          <Hidden smDown>
            <DesktopFooter
              footerMenuItems={props.footerMenuItems}
              color={props.color}
              onSubscribe={openModal}
              modal={modal}
              closeModal={closeModal}
              entity={props.signup}
            />
          </Hidden>
          <Hidden mdUp>
            <MobileFooter
              footerMenuItems={props.footerMenuItems}
              color={props.color}
              handleMobileSubscribeClick={openModal}
              modal={modal}
              closeModal={closeModal}
              entity={props.signup}
            />
          </Hidden>
          <div style={{ paddingBottom: "10px" }}>
            <div style={{ fontSize: "10px" }} className={classes.left}>
              <img
                style={{ width: "16px" }}
                alt="miccosukee emblem"
                src={emblem}
              />{" "}
              Copyright &copy; {1900 + new Date().getYear()}
            </div>
            <div style={{ padding: "0px" }} className={classes.right}>
              <Badge widthProp={"70px"} onClick={toggleLanguage} color="danger">
                {language ? "español" : "english"}
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  return (
    <SignupFormProvider entity={props.signup}>
      {!props.footerMenuItems ? <DemoFooter /> : renderFooter()}
      <div style={{ position: "fixed", bottom: 0, zIndex: 5, width: "100%" }}>
        <SnackbarContent
          id={signupAlertId}
          message={
            <span>
              <b>Message Sent Successfully:</b> Now P$ gonna send you some cool
              stuff.
            </span>
          }
          close
          color="success"
          icon={Check}
        />
      </div>
    </SignupFormProvider>
  );
}
