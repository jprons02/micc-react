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
import MiccosukeeCard from "components/CustomCards/MiccosukeeCard.js";

import styles from "assets/jss/material-kit-react/views/miccosukee/pages/gaming_golf.js";

import { useLanguage } from "contexts/languageContext.js";

const useStyles = makeStyles(styles);

const GamingGolf = () => {
  const language = useLanguage();
  const classes = useStyles();

  const cards = [
    {
      id: 1,
      title: language ? "Resort & Gaming" : "Resort & Gaming",
      description: language
        ? "With supporting text below as a natural lead-in to additional content."
        : "Con texto de apoyo debajo dirigiendo a contenido adicional.",
      imgSrc: mrgImg,
      buttonOne: {
        text: language ? "CONTACT" : "Contacto",
        color: "primary",
        usesRouter: false,
        link: "https://google.com",
      },
      buttonTwo: {
        text: language ? "WEBSITE" : "Página web",
        color: "primary",
        usesRouter: true,
        link: `/mrg`,
      },
      hours: language
        ? "Today's Hours: 9:00 AM - 2:00 AM"
        : "Horario de Hoy: 9:00 AM - 5:00 PM",
      phone: "1-877-242-6464",
      address: "500 SW 177th Ave, Miami, FL 33194",
    },
    {
      id: 2,
      title: language ? "Golf & Country Club" : "Golf & Country Club",
      description: language
        ? "With supporting text below as a natural lead-in to additional content."
        : "Con texto de apoyo debajo dirigiendo a contenido adicional.",
      imgSrc: golfImg,
      buttonOne: {
        text: language ? "CONTACT" : "Contacto",
        color: "success",
        usesRouter: false,
        link: "https://google.com",
      },
      buttonTwo: {
        text: language ? "WEBSITE" : "Página web",
        color: "success",
        usesRouter: false,
        link: "https://google.com",
      },
      hours: language
        ? "Today's Hours: 9:00 AM - 5:00 PM"
        : "Horario de Hoy: 9:00 AM - 5:00 PM",
      phone: "305-382-3930",
      address: "6401 Kendale Lakes Dr, Miami, FL 33183",
    },
  ];

  const renderCards = () => {
    return cards.map((card) => {
      return (
        <GridItem key={card.id} sm={12} md={6} className={classes.gridItem}>
          <MiccosukeeCard
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
    <GridContainer
      className={classes.gridContainer}
      justify="center"
      style={{ position: "static" }}
    >
      {renderCards()}
    </GridContainer>
  );
};

export default GamingGolf;
