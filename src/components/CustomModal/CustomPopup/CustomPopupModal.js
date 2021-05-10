import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
import popupModalStyle from "assets/jss/material-kit-react/popupModalStyle.js";
// @material-ui/icons
import Typography from "@material-ui/core/Typography";

import Fade from "@material-ui/core/Fade";

import mrgImage from "assets/img/test/MonthlyPayouts_Calendar_April-1.jpg";
import miccosukeeImage from "assets/img/bg.jpg";

const useStyles = makeStyles(popupModalStyle);

const PopupModal = (props) => {
  const classes = useStyles();

  const getPopupContent = () => {
    switch (props.website) {
      case "mrg":
        return {
          linkType: "internal",
          link: "/mrg/promotions",
          src: mrgImage,
        };
      case "miccosukee":
        return {
          linkType: "external",
          link: "https://google.com",
          src: miccosukeeImage,
        };
    }
  };

  const renderPopupContent = () => {
    if (getPopupContent().linkType === "internal") {
      return (
        <Link to={getPopupContent().link} onClick={() => props.closeModal()}>
          <img style={{ width: "100%" }} src={getPopupContent().src} />
        </Link>
      );
    }

    if (getPopupContent().linkType === "external") {
      return (
        <a
          target="_blank"
          href={getPopupContent().link}
          onClick={() => props.closeModal()}
        >
          <img style={{ width: "100%" }} src={getPopupContent().src} />
        </a>
      );
    }

    return <img style={{ width: "100%" }} src={getPopupContent().src} />;
  };

  return (
    <Dialog
      classes={{
        root: classes.center,
        paper: classes.modal,
      }}
      transitionDuration={1000}
      open={props.showModal}
      keepMounted
      onClose={props.closeModal}
      aria-labelledby="modal-slide-title"
      aria-describedby="modal-slide-description"
    >
      <div style={{ position: "relative" }}>
        <IconButton
          className={classes.modalCloseButton}
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={props.closeModal}
        >
          <Close className={classes.modalClose} />
        </IconButton>
        {renderPopupContent()}
      </div>
    </Dialog>
  );

  /*
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
        <div style={{ margin: "10px 0" }}>
          <Typography variant="h5" component="h2">
            {conditionalText}
          </Typography>
        </div>
      </DialogTitle>
      <DialogContent
        style={{
          paddingTop: "0px",
        }}
        id="modal-slide-description"
        className={classes.modalBody}
      >
          <h1>Testing.</h1>
      </DialogContent>
    </Dialog>
  );
  */
};

export default PopupModal;
