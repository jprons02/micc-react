import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/miccosukee/mrg.js";

const useStyles = makeStyles(styles);

const MRG = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <button onClick={() => props.click("/")}>GO BACK</button>
      <div className={classes.mrg}>MRG</div>
      <div className={classes.golf}>Golf</div>
    </div>
  );
};

export default MRG;
