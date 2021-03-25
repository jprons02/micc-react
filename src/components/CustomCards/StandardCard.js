import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Icon from "@material-ui/core/Icon";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

import { cardTitle } from "assets/jss/material-kit-react.js";

import image1 from "assets/img/bg.jpg";

const styles = {
  ...imagesStyles,
  cardTitle,
};

const useStyles = makeStyles(styles);

export default function Cards(props) {
  const classes = useStyles();
  return (
    <Card className={props.customStyle}>
      <img
        style={{ height: "180px", width: "100%", display: "block" }}
        className={classes.imgCardTop}
        src={props.img}
        alt="Card-img-cap"
      />
      <CardBody>
        <h4 className={classes.cardTitle}>{props.title}</h4>
        <p>{props.body}</p>
        <Button usetheme="true">{props.buttonText}</Button>
      </CardBody>
    </Card>
  );
}
