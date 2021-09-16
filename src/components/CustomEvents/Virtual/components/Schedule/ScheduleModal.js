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
import Schedule from "components/CustomEvents/Virtual/components/Schedule/Schedule.js";

const useStyles = makeStyles(modalStyle);

export default function ScheduleModal(props) {
  const classes = useStyles();

  return (
    <Dialog
      classes={{
        root: classes.center,
        paper: classes.modal,
      }}
      open={props.showModal}
      keepMounted
      onClose={props.closeModal}
      aria-labelledby="modal-slide-title"
      aria-describedby="modal-slide-description"
    >
      <DialogTitle
        id="classic-modal-slide-title"
        disableTypography
        className={classes.modalHeader}
        style={{ width: "100%", marginBottom: "10px" }}
      >
        <IconButton
          className={classes.modalCloseButton}
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={props.closeModal}
        >
          <Close className={classes.modalClose} />
        </IconButton>
        <Typography
          className={props.titleClass}
          paragraph
          variant="h5"
          component="h3"
        >
          EVENT SCHEDULE
        </Typography>
      </DialogTitle>
      <DialogContent
        style={{
          paddingTop: "0px",
        }}
        id="modal-slide-description"
        className={classes.modalBody}
      >
        <Schedule events={props.events} />
      </DialogContent>
    </Dialog>
  );
}
