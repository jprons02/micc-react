import React, { useContext } from "react";
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";

// @material-ui/icons
import Close from "@material-ui/icons/Close";

// style
import popupModalStyle from "assets/jss/material-kit-react/popupModalStyle.js";

// Context
import { PopupContext } from "contexts/PopupContext.js";

const useStyles = makeStyles(popupModalStyle);

const PopupModal = () => {
  const classes = useStyles();

  const [popupState, setPopupState] = useContext(PopupContext);

  const closeModal = (x) => {
    for (let i = 0; i < Object.keys(popupState).length; i++) {
      if (Object.keys(popupState)[i] === x.name) {
        setPopupState({
          ...popupState,
          [Object.keys(popupState)[i]]: {
            ...popupState[Object.keys(popupState)[i]],
            ["showPopup"]: false,
          },
        });
      }
    }
  };

  const getPopup = () => {
    // Active popup will always be the last state created
    const getObjName = () => {
      const iteration = Object.keys(popupState).length - 1;
      return Object.keys(popupState)[iteration];
    };
    return popupState[getObjName()];
  };

  const renderPopupContent = () => {
    if (getPopup().content.linkType === "internal") {
      return (
        <Link
          to={getPopup().content.link}
          onClick={() => closeModal(getPopup())}
        >
          <img style={{ width: "100%" }} src={getPopup().content.image} />
        </Link>
      );
    }

    if (getPopup().content.linkType === "external") {
      return (
        <a
          target="_blank"
          href={getPopup().content.link}
          onClick={() => closeModal(getPopup())}
        >
          <img style={{ width: "100%" }} src={getPopup().content.image} />
        </a>
      );
    }

    return <img style={{ width: "100%" }} src={getPopup().content.image} />;
  };

  return (
    <Dialog
      classes={{
        root: classes.center,
        paper: classes.modal,
      }}
      transitionDuration={{ enter: 600, exit: 200 }}
      open={getPopup() ? getPopup().showPopup : false}
      keepMounted
      onClose={() => closeModal(getPopup())}
      aria-labelledby="modal-slide-title"
      aria-describedby="modal-slide-description"
    >
      <div style={{ position: "relative" }}>
        <IconButton
          className={classes.modalCloseButton}
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={() => closeModal(getPopup())}
        >
          <Close className={classes.modalClose} />
        </IconButton>
        {getPopup() ? renderPopupContent() : "Loading..."}
      </div>
    </Dialog>
  );
};

/*
  const renderPopupContent = () => {
    if (props.popupState.content.linkType === "internal") {
      return (
        <Link
          to={props.popupState.content.link}
          onClick={() => props.closeModal()}
        >
          <img style={{ width: "100%" }} src={props.popupState.content.image} />
        </Link>
      );
    }

    if (props.popupState.content.linkType === "external") {
      return (
        <a
          target="_blank"
          href={props.popupState.content.link}
          onClick={() => props.closeModal()}
        >
          <img style={{ width: "100%" }} src={props.popupState.content.image} />
        </a>
      );
    }

    return (
      <img style={{ width: "100%" }} src={props.popupState.content.image} />
    );
  };

  return (
    <Dialog
      classes={{
        root: classes.center,
        paper: classes.modal,
      }}
      transitionDuration={1000}
      open={props.popupState !== "" ? props.popupState.showPopup : false}
      keepMounted
      onClose={props.popupState !== "" ? props.closeModal : null}
      aria-labelledby="modal-slide-title"
      aria-describedby="modal-slide-description"
    >
      <div style={{ position: "relative" }}>
        <IconButton
          className={classes.modalCloseButton}
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={props.popupState !== "" ? props.closeModal : null}
        >
          <Close className={classes.modalClose} />
        </IconButton>
        {props.popupState !== "" ? renderPopupContent() : ""}
      </div>
    </Dialog>
  );
};
*/

export default PopupModal;
