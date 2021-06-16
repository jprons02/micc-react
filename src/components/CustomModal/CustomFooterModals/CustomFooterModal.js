import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";

// @material-ui/icons
import Close from "@material-ui/icons/Close";

// core components
import modalStyle from "assets/jss/material-kit-react/modalStyle.js";
import Typography from "@material-ui/core/Typography";
import Signup from "components/CustomForms/Signup.js";

// context
import { useLanguage } from "contexts/languageContext.js";

const useStyles = makeStyles(modalStyle);

export default function Modal(props) {
  const language = useLanguage();
  const classes = useStyles();

  const renderDesktopTitle = () => {
    return (
      <h3 className={classes.modalTitle}>
        {language ? "Confirm your interests:" : "Confirme sus intereses:"}
      </h3>
    );
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
          {language
            ? "Sign up for our promotions"
            : "Regístrese Para Nuestras Promociones"}
        </Typography>
        <Typography
          style={
            props.isDesktop
              ? { textAlign: "center", fontWeight: "300" }
              : { textAlign: "center", fontWeight: "300", fontSize: "12px" }
          }
        >
          {language
            ? "Be the first to find out about offers & promotions"
            : "Sea el primero en enterarse sobre nuestras ofertas y promociones"}
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
