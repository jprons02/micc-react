import React, { useEffect } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

//images
import historyImg from "assets/media/img/miccosukee/pages/history_admin/home-history-1.jpg";
import administrationImg from "assets/media/img/miccosukee/pages/history_admin/Screen-Shot-2021-07-20-at-8.49.47-AM.jpg";

//Miccosukee Component
import MiccosukeeCard from "components/CustomCards/MiccosukeeCard.js";

// styles
import styles from "assets/jss/material-kit-react/views/miccosukee/pages/gaming_golf.js";

// context
import { useLanguage } from "contexts/languageContext.js";

const useStyles = makeStyles(styles);

const TribeAdmin = () => {
  const language = useLanguage();
  const classes = useStyles();

  const cards = [
    {
      id: 1,
      title: language ? "History" : "Historia",
      theme: "history",
      description: language
        ? "Discover the history of the Everglades’ first inhabitants and how they became a sovereign nation."
        : "Descubra la historia de los primeros habitantes de los Everglades y cómo se convirtieron en nación soberana.​",
      imgSrc: historyImg,
      buttonOne: {
        text: language ? "WEBSITE" : "Página web",
        usesRouter: true,
        link: "/history",
      },
    },
    {
      id: 2,
      title: language ? "Administration" : "Administración",
      theme: "administration",
      description: language
        ? "Information about the current administration and the Miccosukee Police specialized units."
        : "Información sobre la administración actual y las unidades especializadas de la Policía Miccosukee.",
      imgSrc: administrationImg,
      buttonOne: {
        text: language ? "WEBSITE" : "Página web",
        usesRouter: true,
        link: "/administration",
      },
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

export default TribeAdmin;
