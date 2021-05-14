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
import popupModalStyle from "assets/jss/material-kit-react/popupModalStyle.js";
// @material-ui/icons
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(modalStyle);
const usePopupStyles = makeStyles(popupModalStyle);

const TeeTimeModal = (props) => {
  const classes = useStyles();
  const popupClasses = usePopupStyles();

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
      <div style={{ position: "relative" }}>
        <IconButton
          className={popupClasses.modalCloseButton}
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={props.closeModal}
        >
          <Close className={popupClasses.modalClose} />
        </IconButton>
        <iframe
          loading="lazy"
          src="https://miccosukee.ezlinksgolf.com"
          width="100%"
          height="1000"
        ></iframe>
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
            Book A Room
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
        <BookRoomForm />
      </DialogContent>
    </Dialog>
  );
  */
};

export default TeeTimeModal;

/*
<iframe loading="lazy" src="https://miccosukee.ezlinksgolf.com" width="100%" height="1000"></iframe>
*/
