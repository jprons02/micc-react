import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
//images
import villageImg from "assets/img/miccosukee/pages/glades/alligator_demo.jpg";
import airboatsImg from "assets/img/miccosukee/pages/glades/airboats_1.jpg";
//Miccosukee Component
import MiccosukeeCard from "components/CustomCards/MiccosukeeCard.js";

import styles from "assets/jss/material-kit-react/views/miccosukee/pages/gaming_golf.js";

import { useLanguage } from "contexts/languageContext.js";

// colors
import { villageColor, mrgColor } from "themes/colors.js";

// business info
import { villageHours, airboatsHours } from "business_info/hours.js";
import {
  villageBusinessInfo,
  airboatsBusinessInfo,
} from "business_info/genericInfo.js";

const useStyles = makeStyles(styles);

const GamingGolf = () => {
  const language = useLanguage();
  const classes = useStyles();

  const d = new Date();
  // returns 0-6, starts on sunday, sunday = 0
  const dayOfWeek = d.getDay();

  const cards = [
    {
      id: 1,
      title: language ? "Indian Village" : "Resort & Gaming",
      theme: "village",
      description: language
        ? "With supporting text below as a natural lead-in to additional content."
        : "Con texto de apoyo debajo dirigiendo a contenido adicional.",
      imgSrc: villageImg,
      buttonOne: {
        text: language ? "WEBSITE" : "Página web",
        usesRouter: true,
        link: "/village",
      },
      hours: language
        ? `Today's Hours: ${villageHours.todaysHours(dayOfWeek, language)}`
        : `Horario de Hoy: ${villageHours.todaysHours(dayOfWeek, language)}`,
      phone: "1-877-242-6464",
      address: "500 SW 177th Ave, Miami, FL 33194",
    },
    {
      id: 2,
      title: language ? "Airboats" : "Golf & Country Club",
      theme: airboatsBusinessInfo.name,
      description: language
        ? "With supporting text below as a natural lead-in to additional content."
        : "Con texto de apoyo debajo dirigiendo a contenido adicional.",
      imgSrc: airboatsImg,
      buttonOne: {
        text: language ? "WEBSITE" : "Página web",
        usesRouter: true,
        link: "/airboats",
      },
      hours: language
        ? `Today's Hours: ${airboatsHours.todaysHours(dayOfWeek, language)}`
        : `Horario de Hoy: ${airboatsHours.todaysHours(dayOfWeek, language)}`,
      phone: airboatsBusinessInfo.phone,
      address: airboatsBusinessInfo.address,
    },
  ];

  const renderCards = () => {
    return cards.map((card) => {
      return (
        <GridItem key={card.id} sm={12} md={6} className={classes.gridItem}>
          <MiccosukeeCard
            title={card.title}
            theme={card.theme}
            description={card.description}
            imgSrc={card.imgSrc}
            buttonOne={card.buttonOne}
            buttonTwo={card.buttonTwo ? card.buttonTwo : ""}
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
