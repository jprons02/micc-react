import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
//images
import mrgImg from "assets/img/miccosukee/pages/mrg_golf/mrg-card.jpg";
import golfImg from "assets/img/miccosukee/pages/mrg_golf/golf-card.jpg";
//Miccosukee Component
import EntityCard from "../Components/EntityCards";

import styles from "assets/jss/material-kit-react/views/miccosukee/gaming_golf.js";

const useStyles = makeStyles(styles);

//props gives me the cardClicked function...

const GamingGolf = (props) => {
  const classes = useStyles();

  const cards = [
    {
      title: "Resort & Gaming",
      description:
        "With supporting text below as a natural lead-in to additional content.",
      imgSrc: mrgImg,
      buttonOne: {
        text: "CONTACT",
        color: "primary",
        link: "https://google.com",
      },
      buttonTwo: {
        text: "WEBSITE",
        color: "primary",
        link: "https://google.com",
      },
      hours: "Today's Hours: 9:00 AM - 2:00 AM",
      phone: "1-877-242-6464",
      address: "500 SW 177th Ave, Miami, FL 33194",
    },
    {
      title: "Golf & Country Club",
      description:
        "With supporting text below as a natural lead-in to additional content.",
      imgSrc: golfImg,
      buttonOne: {
        text: "CONTACT",
        color: "success",
        link: "https://google.com",
      },
      buttonTwo: {
        text: "WEBSITE",
        color: "success",
        link: "https://google.com",
      },
      hours: "Today's Hours: 9:00 AM - 5:00 PM",
      phone: "305-382-3930",
      address: "6401 Kendale Lakes Dr, Miami, FL 33183",
    },
  ];

  const renderCards = () => {
    return cards.map((card) => {
      return (
        <GridItem key={card.title} sm={12} md={6} className={classes.gridItem}>
          <EntityCard
            title={card.title}
            description={card.description}
            imgSrc={card.imgSrc}
            buttonOne={card.buttonOne}
            buttonTwo={card.buttonTwo}
            hours={card.hours}
            phone={card.phone}
            address={card.address}
          />
        </GridItem>
      );
    });
  };

  return (
    <GridContainer className={classes.gridContainer} justify="center">
      {renderCards()}
    </GridContainer>
  );
};

export default GamingGolf;
