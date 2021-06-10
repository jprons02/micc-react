import React from "react";

// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Snack from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Close from "@material-ui/icons/Close";

// styles
import styles from "assets/jss/material-kit-react/components/snackbarContentStyle.js";

// Context
import { useLanguage } from "contexts/languageContext.js";

const useStyles = makeStyles(styles);

export default function StandardAlert(props) {
  const { message, color, close, icon } = props;
  const classes = useStyles();
  const language = useLanguage();
  var action = [];

  // CLOSES ALERT
  const closeAlert = () => {
    setAlert(null);
  };
  if (close !== undefined) {
    action = [
      <IconButton
        className={classes.iconButton}
        key="close"
        aria-label="Close"
        color="inherit"
        onClick={closeAlert}
      >
        <Close className={classes.close} />
      </IconButton>,
    ];
  }
  let snackIcon = null;
  switch (typeof icon) {
    case "object":
      snackIcon = <props.icon className={classes.icon} />;
      break;
    case "string":
      snackIcon = <Icon className={classes.icon}>{props.icon}</Icon>;
      break;
    default:
      snackIcon = null;
      break;
  }
  const [alert, setAlert] = React.useState(
    <Snack
      message={
        <div>
          {snackIcon}
          {message}
          {close !== undefined ? action : null}
        </div>
      }
      classes={{
        root: classes.root + " " + classes[color],
        message: classes.message + " " + classes.container,
      }}
      style={{ margin: "0" }}
    />
  );
  return alert;
}

StandardAlert.propTypes = {
  message: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["info", "success", "warning", "danger", "primary"]),
  close: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

/*
export default function StandardAlert(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  //severity can be "error", "warning", "info" or "success"

  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <Alert
          style={{ borderRadius: "0" }}
          variant="filled"
          severity={props.severity}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {props.alertTitle ? (
            <AlertTitle>{props.alertTitle()}</AlertTitle>
          ) : (
            ""
          )}
          {props.alertText() || "Test"}
        </Alert>
      </Collapse>
    </div>
  );
}
*/
