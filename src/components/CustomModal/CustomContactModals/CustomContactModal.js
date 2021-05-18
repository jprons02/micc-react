import React, { useState, useEffect } from "react";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
//import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import PhoneIcon from "@material-ui/icons/Phone";
import MapIcon from "@material-ui/icons/Map";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import modalStyle from "assets/jss/material-kit-react/contactModal.js";
// @material-ui/icons
import Typography from "@material-ui/core/Typography";

//import MrgContact from "views/MRG/Pages/contact/contact.js";
// My custom components
import Contact from "components/CustomForms/Contact/Contact.js";

const useStyles = makeStyles(modalStyle);

const ContactModal = (props) => {
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
        style={{ width: "100%" }}
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
        <div style={{ margin: "10px 0 0 0" }}>
          <Typography
            style={{ marginBottom: "10px" }}
            variant="h5"
            component="h2"
          >
            Contact Us
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              marginBottom: "10px",
            }}
          >
            <PhoneIcon />
            &nbsp;
            <span className={classes.phoneText}>{props.entity.phone}</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <MapIcon />
            <span className={classes.mapText}>
              &nbsp;{props.entity.address}
            </span>
          </div>
        </div>
      </DialogTitle>
      <DialogContent
        style={{
          paddingTop: "0px",
        }}
        id="modal-slide-description"
        className={classes.modalBody}
      >
        <Contact entity={props.entity.name} closeModal={props.closeModal} />
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
