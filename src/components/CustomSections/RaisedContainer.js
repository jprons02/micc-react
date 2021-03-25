import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// Styles
import styles from "assets/jss/material-kit-react/views/miccosukee/components/customRaisedContainerStyle.js";

const useStyles = makeStyles(styles);

const RaisedContainer = ({ children }) => {
  const classes = useStyles();

  const renderStandard = () => {
    return (
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container} style={{ padding: "15px" }}>
            {children}
          </div>
        </div>
      </div>
    );
  };

  return renderStandard();
};

export default RaisedContainer;
