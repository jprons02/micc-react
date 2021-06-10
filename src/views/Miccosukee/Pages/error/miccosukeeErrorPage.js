import React, { useEffect, useState } from "react";
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// My Custom Components
import CustomStandard404Page from "components/Custom404Page/CustomStandard404.js";

// Styles
import styles from "assets/jss/material-kit-react/views/miccosukee/components/customRaisedContainerStyle.js";

const useStyles = makeStyles(styles);

const MiccosukeeErrorPage = (props) => {
  const classes = useStyles();

  const handleClick = () => {
    props.history.push("/");
  };

  return (
    <div
      style={{ margin: "20px 0px" }}
      className={classNames(classes.main, classes.mainRaised)}
    >
      <div>
        <div className={classes.container} style={{ padding: "15px" }}>
          <CustomStandard404Page handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default MiccosukeeErrorPage;
