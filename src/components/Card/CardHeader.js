import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import styles from "assets/jss/material-kit-react/components/cardHeaderStyle.js";

const useStyles = makeStyles(styles);

export default function CardHeader(props) {
  const classes = useStyles();
  const { className, children, color, plain, ...rest } = props;
  const cardHeaderClasses = classNames({
    [classes.cardHeader]: true,
    [classes[color + "CardHeader"]]: color,
    [classes.cardHeaderPlain]: plain,
    [className]: className !== undefined,
  });

  if (props.customprimarycolor) {
    const customCardHeaderClasses = classNames({
      [classes.cardHeader]: true,
      [classes.cardHeaderPlain]: plain,
      [className]: className !== undefined,
    });

    const customStyle = {
      color: "#fff",
      background: `linear-gradient(60deg, rgb(${props.customprimarycolor.rgbRedNumbers}), rgb(${props.customprimarycolor.rgbRedNumbers}))`,
      boxShadow: `0 12px 20px -10px rgb(${props.customprimarycolor.rgbRedNumbers} / 28%), 0 4px 20px 0px rgb(0 0 0 / 12%), 0 7px 8px -5px rgb(${props.customprimarycolor.rgbRedNumbers} / 20%)`,
    };

    return (
      <div style={customStyle} className={customCardHeaderClasses} {...rest}>
        {children}
      </div>
    );
  } else {
    return (
      <div className={cardHeaderClasses} {...rest}>
        {children}
      </div>
    );
  }
}

CardHeader.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(["warning", "success", "danger", "info", "primary"]),
  plain: PropTypes.bool,
  children: PropTypes.node,
};
