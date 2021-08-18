import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";

// material-ui components
import { makeStyles } from "@material-ui/core/styles";

import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

import { cardTitle } from "assets/jss/material-kit-react.js";

const styles = {
  ...imagesStyles,
  cardTitle,
};

const useStyles = makeStyles(styles);

const StandardHorizontalCard = (props) => {
  const classes = useStyles();

  /*
  const cardStyle = {
    boxShadow:
      "0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%)",
    borderRadius: "6px",
    width: props.width || "100%",
    margin: "2px",
  };
  */

  const cardStyle = {
    boxShadow:
      "0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%)",
    borderRadius: "6px",
    margin: "2px",
    display: "flex",
    flexWrap: "nowrap",
    width: props.width || "100%",
  };

  return (
    <div key={props.key}>
      <div style={cardStyle}>
        <img
          style={{
            borderTopLeftRadius: "6px",
            borderBottomLeftRadius: "6px",
            width: "200px",
            height: "200px",
            display: "inline-block",
          }}
          src={props.img}
        />
        <div
          style={{
            marginLeft: "20px",
            marginRight: "10px",
            display: "inline-block",
            verticalAlign: "top",
          }}
        >
          <h4
            className={
              props.classes
                ? classNames(classes.cardTitle, props.classes.cardTitle)
                : classes.cardTitle
            }
          >
            {props.title}
          </h4>
          {props.body}
        </div>
      </div>
    </div>
  );
};

export default StandardHorizontalCard;
