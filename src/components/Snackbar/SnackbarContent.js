import React, { useContext } from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Snack from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components

import styles from "assets/jss/material-kit-react/components/snackbarContentStyle.js";

// Context
import { useLanguage } from "contexts/languageContext.js";
import { AlertContext } from "contexts/AlertContext.js";

const useStyles = makeStyles(styles);

// DYNAMICALLY ADD ALERT TO CONTEXT STATE. THEN YOU CAN COMPARE AND NOT OPEN ALL AT ONCE.

export default function SnackbarContent(props) {
  const [alerts, setAlerts] = useContext(AlertContext);
  const { id, message, color, close, icon } = props;
  const classes = useStyles();
  const language = useLanguage();
  var action = [];

  // CLOSES ALERT
  const closeAlert = () => {
    setAlerts({ ...alerts, [id]: false });
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

  const renderSnack = () => {
    return (
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
      />
    );
  };

  if (alerts[id] === true) {
    setTimeout(function () {
      closeAlert();
    }, 10000);
    return renderSnack();
  } else {
    return null;
  }
}

SnackbarContent.propTypes = {
  message: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["info", "success", "warning", "danger", "primary"]),
  close: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

/*
export default function SnackbarContent(props) {
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
    />
  );
  return alert;
}

SnackbarContent.propTypes = {
  message: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["info", "success", "warning", "danger", "primary"]),
  close: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};
*/
