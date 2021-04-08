/*eslint-disable*/
import React, { useState, useContext, useEffect } from "react";

// nodejs library that concatenates classes
import classNames from "classnames";

// material-ui core components
import { Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Custom Components
import Badge from "components/Badge/Badge.js";

// My Custom Components
import DesktopFooter from "components/Footer/Components/DesktopFooter.js";
import MobileFooter from "components/Footer/Components/MobileFooter.js";
import DemoFooter from "components/Footer/Components/DemoFooter.js";

// Styles
import styles from "assets/jss/material-kit-react/components/footerStyle.js";
import emblem from "assets/img/miccosukee/MiccosukeeEmblem_Color.svg";

// Contexts
import { SignupFormProvider } from "contexts/SignupFormContext.js";
import {
  AlertContext,
  signupAlertId,
  virtualEventLoginId,
} from "contexts/AlertContext.js";
import { useLanguage, useLanguageUpdate } from "contexts/languageContext.js";

// Snackbar
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Check from "@material-ui/icons/Check";

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

  // Reset snackbar state when footer unmounts.
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

  const renderSnackbar = () => {
    // snackbar message determined by alert
    const getMessage = (id) => {
      if (id === "virtualEventLoginId") {
        return (
          <span>
            <b>Congratulations!</b> You have successfully logged in!
          </span>
        );
      }
      if (id === "signupAlertId") {
        return (
          <span>
            <b>Message Sent Successfully:</b> Now P$ gonna send you some cool
            stuff.
          </span>
        );
      }
    };

    // iterate through all alerts and set id to the one that is true
    for (const alert in alerts) {
      if (alerts[alert] === true) {
        return (
          <div
            style={{ position: "fixed", bottom: 0, zIndex: 5, width: "100%" }}
          >
            <SnackbarContent
              id={alert}
              message={getMessage(alert)}
              close
              color="success"
              icon={Check}
            />
          </div>
        );
      }
    }
    /*return (
      <div style={{ position: "fixed", bottom: 0, zIndex: 5, width: "100%" }}>
        <SnackbarContent
          id={signupAlertId}
          //id={virtualEventLoginId}
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
    );*/
  };

  return (
    <SignupFormProvider entity={props.signup}>
      {!props.footerMenuItems ? <DemoFooter /> : renderFooter()}
      {renderSnackbar()}
    </SignupFormProvider>
  );
}
