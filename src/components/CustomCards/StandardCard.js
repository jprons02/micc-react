import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import Icon from "@material-ui/core/Icon";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

import { cardTitle } from "assets/jss/material-kit-react.js";

const styles = {
  ...imagesStyles,
  cardTitle,
};

const useStyles = makeStyles(styles);

export default function Cards(props) {
  const classes = useStyles();

  return (
    <Card className={props.classes.serviceCards}>
      <img
        className={
          props.classes
            ? classNames(classes.imgCardTop, props.classes.imgStyle)
            : classes.imgCardTop
        }
        src={props.img.src ? props.img.src : props.img}
        alt={props.img.alt ? props.img.alt : "Promotion logo"}
      />
      <CardBody>
        <h4
          className={
            props.classes
              ? classNames(classes.cardTitle, props.classes.cardTitle)
              : classes.cardTitle
          }
        >
          {props.title}
        </h4>
        <p className={props.classes ? props.classes.cardBodyText : ""}>
          {props.body}
        </p>
        {props.buttonText ? (
          <Button
            className={props.classes ? props.classes.buttonStyle : {}}
            onClick={props.buttonFunction ? props.buttonFunction : null}
            usetheme={props.buttonVariant || "contained"}
          >
            {props.buttonText}
          </Button>
        ) : null}
      </CardBody>
    </Card>
  );
}
