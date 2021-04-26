import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

// Icons
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";

// Custom Styles
import modalStyle from "assets/jss/material-kit-react/virtualLoginModal.js";
import rulesStyle from "assets/jss/material-kit-react/rulesStyle.js";
const useStyles = makeStyles(modalStyle);
const rulesUseStyles = makeStyles(rulesStyle);

const CustomGamingPromoModal = (props) => {
  const classes = useStyles();
  const rulesClasses = rulesUseStyles();

  const renderRules = () => {
    //console.log("from renderRules(): ", props.selectedPromo.rules.subSections);
    if (props.selectedPromo.rules) {
      return props.selectedPromo.rules.subSections.map((subSection) => {
        return (
          <p
            key={`${props.selectedPromo.id}-${subSection.id}`}
            className={rulesClasses.standardText}
          >
            <span className={rulesClasses.subTitle}>
              {subSection.title}:&nbsp;
            </span>{" "}
            {subSection.body}
          </p>
        );
      });
    } else {
      return <p>Please click a promo.</p>;
    }
  };

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
        <img style={{ width: "100px" }} src={props.selectedPromo.img} />
        <h1 className={rulesClasses.promoTitle}>{props.selectedPromo.title}</h1>
      </DialogTitle>
      <DialogContent
        style={{
          paddingTop: "0px",
        }}
        id="modal-slide-description"
        className={classes.modalBody}
      >
        {renderRules()}
      </DialogContent>
    </Dialog>
  );
};

export default CustomGamingPromoModal;
