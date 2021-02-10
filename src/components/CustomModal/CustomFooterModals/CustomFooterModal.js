import React, { useState, useEffect } from "react";
import classNames from "classnames";
// material-ui components
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import Button from "components/CustomButtons/Button.js";
import CustomCheckBox from "components/CustomCheckbox/CustomCheckbox.js";

import modalStyle from "assets/jss/material-kit-react/modalStyle.js";
import checkboxStyles from "assets/jss/material-kit-react/customCheckboxRadioSwitch.js";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
import { signupFunction } from "services/signupFucntion.js";
import SignUp from "components/CustomForms/Signup.js";
import Typography from "@material-ui/core/Typography";
import Signup from "components/CustomForms/Signup.js";

const useStyles = makeStyles(modalStyle);

export default function Modal(props) {
  const classes = useStyles();

  const renderDesktopTitle = () => {
    return <h3 className={classes.modalTitle}>Confirm your interests:</h3>;
  };

  const renderMobileTitle = () => {
    return (
      <React.Fragment>
        <Typography
          style={
            props.isDesktop
              ? {
                  paddingTop: "30px",
                  textTransform: "uppercase",
                  textAlign: "center",
                }
              : {
                  paddingTop: "30px",
                  textTransform: "uppercase",
                  textAlign: "center",
                  fontSize: "16px",
                }
          }
          variant="h6"
          component="h1"
        >
          Sign up for our promotions
        </Typography>
        <Typography
          style={
            props.isDesktop
              ? { textAlign: "center", fontWeight: "300" }
              : { textAlign: "center", fontWeight: "300", fontSize: "12px" }
          }
        >
          Be the first to find out about offers &amp; promotions
        </Typography>
      </React.Fragment>
    );
  };

  return (
    <Dialog
      classes={{
        root: classes.center,
        paper: props.isDesktop ? classes.desktopModal : classes.modal,
      }}
      open={props.modal}
      keepMounted
      onClose={props.closeModal}
      aria-labelledby="modal-slide-title"
      aria-describedby="modal-slide-description"
    >
      <DialogTitle
        id="classic-modal-slide-title"
        disableTypography
        className={classes.modalHeader}
        style={{ width: "100%" }}
      >
        <IconButton
          className={classes.modalCloseButton}
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={() => props.closeModal()}
        >
          <Close className={classes.modalClose} />
        </IconButton>
        {props.isDesktop ? renderDesktopTitle() : renderMobileTitle()}
      </DialogTitle>
      <DialogContent
        style={{
          paddingTop: "0px",
        }}
        id="modal-slide-description"
        className={classes.modalBody}
      >
        <Signup
          closeModal={props.closeModal}
          entity={props.entity}
          isDesktop={props.isDesktop}
          //name={props.name}
          //email={props.email}
        />
      </DialogContent>
    </Dialog>
  );
}
