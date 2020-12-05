import React from "react";
// @material-ui/core components
import { Icon } from "@material-ui/core";
import { cardTitle } from "assets/jss/material-kit-react.js";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
//import CardHeader from "components/Card/CardHeader";
import CardBody from "components/Card/CardBody";
import CardFooter from "components/Card/CardFooter";
import Button from "components/CustomButtons/Button.js";

const EntityCard = (props) => {
  return (
    <Card style={{ margin: "0" }}>
      <img
        style={{
          width: "100%",
          display: "block",
        }}
        src={props.imgSrc}
        alt="Card-img-cap"
      />
      <CardBody>
        <h4 className={cardTitle}>{props.title}</h4>
        <p>{props.description}</p>
        <div style={{ textAlign: "center" }}>
          <Button style={{ width: "49%" }} color={props.buttonOne.color}>
            {props.buttonOne.text}
          </Button>
          <Button style={{ width: "49%" }} color={props.buttonTwo.color}>
            {props.buttonTwo.text}
          </Button>
        </div>
      </CardBody>
      <CardFooter>
        <GridContainer direction="column">
          <GridItem style={{ marginBottom: "8px" }}>
            <Icon
              style={{
                color: "#5a5a5a",
                verticalAlign: "middle",
              }}
            >
              schedule
            </Icon>
            &nbsp;
            {props.hours}
          </GridItem>
          <GridItem style={{ marginBottom: "8px" }}>
            <Icon
              style={{
                color: "#5a5a5a",
                verticalAlign: "middle",
              }}
            >
              phone
            </Icon>
            &nbsp; {props.phone}
          </GridItem>
          <GridItem>
            <Icon style={{ color: "#5a5a5a", verticalAlign: "middle" }}>
              map
            </Icon>
            &nbsp; {props.address}
          </GridItem>
        </GridContainer>
      </CardFooter>
    </Card>
  );
};

export default EntityCard;
