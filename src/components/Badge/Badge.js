import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/components/badgeStyle.js";

const useStyles = makeStyles(styles);

export default function Badge(props) {
  const classes = useStyles();
  const { color, children } = props;

  if (props.onClick) {
    return (
      <span
        onClick={() => props.onClick()}
        className={classes.badge + " " + classes[color]}
        style={{
          cursor: "pointer",
          width: props.widthProp ? props.widthProp : "",
        }}
      >
        {children}
      </span>
    );
  } else {
    return (
      <span className={classes.badge + " " + classes[color]}>{children}</span>
    );
  }
}

Badge.defaultProps = {
  color: "gray",
};

Badge.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
    "gray",
  ]),
  children: PropTypes.node,
};
