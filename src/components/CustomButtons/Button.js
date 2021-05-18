import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";

// core components

import buttonStyle from "assets/jss/material-kit-react/components/buttonStyle.js";

// Styles
import miccosukeeCardstyles from "assets/jss/material-kit-react/components/customCardStyle/customMiccosukeeCardStyle.js";

const makeComponentStyles = makeStyles(() => ({
  ...buttonStyle,
}));

const makeMiccosukeeCardStyles = makeStyles(miccosukeeCardstyles);

const RegularButton = React.forwardRef((props, ref) => {
  const {
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    customClassName,
    ...rest
  } = props;

  const classes = makeComponentStyles();
  const miccosukeeCardClasses = makeMiccosukeeCardStyles();

  const btnClasses = classNames({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className]: className,
  });

  // Used to simulate theme for MiccosukeeCard.js
  const getCustomClass = () => {
    if (props.customClassName) {
      switch (props.customClassName) {
        case "mrg":
          return miccosukeeCardClasses.mrgButton;
        case "golf":
          return miccosukeeCardClasses.golfButton;
        case "village":
          return miccosukeeCardClasses.villageButton;
        case "airboats":
          return miccosukeeCardClasses.airboatsButton;
        case "history":
          return miccosukeeCardClasses.historyButton;
        case "administration":
          return miccosukeeCardClasses.administrationButton;
        default:
          return "";
      }
    } else {
      return null;
    }
  };

  const renderButton = () => {
    if (props.usetheme === "contained") {
      return (
        <Button
          variant="contained"
          color="primary"
          {...rest}
          ref={ref}
          className={btnClasses}
        >
          {children}
        </Button>
      );
    } else if (props.usetheme === "outlined") {
      return (
        <Button
          variant="outlined"
          color="primary"
          {...rest}
          ref={ref}
          className={btnClasses}
        >
          {children}
        </Button>
      );
    } else {
      return (
        <Button
          {...rest}
          ref={ref}
          className={classNames(getCustomClass(), btnClasses)}
        >
          {children}
        </Button>
      );
    }
  };

  return renderButton();
});

RegularButton.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
    "white",
    "facebook",
    "twitter",
    "google",
    "github",
    "transparent",
  ]),
  size: PropTypes.oneOf(["sm", "lg"]),
  simple: PropTypes.bool,
  round: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  link: PropTypes.bool,
  justIcon: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default RegularButton;
