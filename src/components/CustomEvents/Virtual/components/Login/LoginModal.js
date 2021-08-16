import React, { useState, useEffect } from "react";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
//import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import modalStyle from "assets/jss/material-kit-react/virtualLoginModal.js";
// @material-ui/icons
import Typography from "@material-ui/core/Typography";

import LoginForm from "components/CustomEvents/Virtual/components/Login/LoginForm.js";
import Button from "components/CustomButtons/Button.js";

const useStyles = makeStyles(modalStyle);

export default function LoginModal(props) {
  const classes = useStyles();

  const [showForm, setShowForm] = useState(null);

  const clickedYes = () => {
    setShowForm(true);
  };

  const clickedNo = () => {
    setShowForm(false);
    props.closeModal();
  };

  const renderLoginContent = () => {
    return (
      <LoginForm
        setLoginStatus={props.setLoginStatus}
        closeModal={props.closeModal}
        eventbriteID={props.eventbriteID}
      />
    );
    // If user closes yes/no modal and then clicks Login button, take them straight to entering in email.
    /*
    if (showForm === true || props.loginClicked === true) {
      // show the form
      return (
        <LoginForm
          setLoginStatus={props.setLoginStatus}
          closeModal={props.closeModal}
          eventbriteID={props.eventbriteID}
        />
      );
    } else if (showForm === null) {
      return (
        <div>
          <Typography style={{ margin: "20px 0 10px 0" }}>
            Did you purchase tickets?
          </Typography>
          <div style={{ textAlign: "center" }}>
            <Button
              style={{ marginRight: "5px", width: "45%" }}
              onClick={clickedYes}
            >
              YES
            </Button>
            <Button
              style={{ marginLeft: "5px", width: "45%" }}
              onClick={clickedNo}
            >
              NO (Take me to the free stuff)
            </Button>
          </div>
        </div>
      );
    }
    */
  };

  const renderWelcome = () => {
    return (
      <div style={{ margin: "10px 0" }}>
        <Typography variant="h5" component="h2">
          Welcome to the American Indian Day Event Page!
        </Typography>
      </div>
    );
  };

  return (
    <Dialog
      classes={{
        root: classes.center,
        paper: classes.modal,
      }}
      open={props.showLoginModal}
      keepMounted
      //onClose={props.closeModal}
      aria-labelledby="modal-slide-title"
      aria-describedby="modal-slide-description"
    >
      <DialogTitle
        id="classic-modal-slide-title"
        disableTypography
        className={classes.modalHeader}
        style={{ width: "100%" }}
      >
        {renderWelcome()}
      </DialogTitle>
      <DialogContent
        style={{
          paddingTop: "0px",
        }}
        id="modal-slide-description"
        className={classes.modalBody}
      >
        {renderLoginContent()}
      </DialogContent>
    </Dialog>
  );
}
