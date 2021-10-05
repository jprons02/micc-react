import React, { useEffect, useContext } from "react";
import { useRouteMatch, useLocation } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader";
import CardBody from "components/Card/CardBody";
import CardFooter from "components/Card/CardFooter";
import styles from "assets/jss/material-kit-react/views/miccosukee/pages/home.js";

//images
import mrgGolfImg from "assets/media/img/miccosukee/pages/home/home-mrg.jpg";
import evergladesImg from "assets/media/img/miccosukee/pages/home/home-airboats.jpg";
import historyImg from "assets/media/img/miccosukee/pages/home/Mic_family.jpg";
import eventsImg from "assets/media/img/miccosukee/pages/home/home-admin.jpg";

// Context
import { useLanguage } from "contexts/languageContext.js";

// Services
import { prerenderService } from "services/functions/prerenderService.js";

import MiccosukeeFooter from "components/CustomFooters/MiccosukeeFooter.js";

const useStyles = makeStyles(styles);

const Home = ({ history }) => {
  const language = useLanguage();
  const classes = useStyles();

  const cards = [
    {
      id: 1,
      url: "gaming-golf",
      title: language
        ? "Miccosukee Resort & Gaming"
        : "Miccosukee Resort & Gaming",
      description: language
        ? "Come for the gaming, stay for the fun!"
        : "Venga a jugar, ¡quédese a divertirse!",
      cardBackground: {
        background: `linear-gradient(
                rgba(156, 39, 176, 0.45), 
                rgba(156, 39, 176, 0.45)),
                url(${mrgGolfImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      },
      header: "",
      headerColor: "",
      footer: "",
      buttonColor: "primary",
    },
    {
      id: 2,
      url: "glades",
      title: language
        ? "Everglades Experiences"
        : "Experiencias en los Everglades",
      description: language
        ? "Enjoy the Miccosukee Indian Village and airboat rides."
        : "Disfrute la Aldea Indígena y tome un paseo en los airboats.",
      cardBackground: {
        background: `linear-gradient(
                rgba(67, 169, 70, 0.45), 
                rgba(67, 169, 70, 0.45)),
                url(${evergladesImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      },
      bgImage: "test2",
      bgColor: "#43a946",
      header: "",
      headerColor: "",
      footer: "",
      buttonColor: "success",
    },
    {
      id: 3,
      url: "events",
      title: language ? "Events" : "Eventos",
      description: language
        ? "Home to live music, cabaret shows and sporting events."
        : "Lugar ideal para música en vivo, espectáculos y eventos deportivos.",
      cardBackground: {
        background: `linear-gradient(
                rgba(197, 78, 69, 0.45), 
                rgba(197, 78, 69, 0.45)),
                url(${eventsImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      },
      bgImage: "test3",
      bgColor: "#008fa0",
      header: "",
      headerColor: "",
      footer: "",
      buttonColor: "info",
    },
    {
      id: 4,
      url: "history-admin",
      title: language
        ? "History & Administration"
        : "Historia y Administración",
      description: language
        ? "Learn about the Miccosukee Tribe’s history and current Tribal leaders."
        : "Aprenda acerca de la Tribu Miccosukee y sus líderes.",
      cardBackground: {
        background: `linear-gradient(
                rgba(224, 206, 0, 0.45), 
                rgba(224, 206, 0, 0.45)),
                url(${historyImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      },
      bgImage: "test3",
      bgColor: "#008fa0",
      header: "",
      headerColor: "",
      footer: "",
      buttonColor: "info",
    },
  ];

  const renderMiccCards = () => {
    return cards.map((card) => {
      return (
        <GridItem key={card.id} className={classes.gridItem} sm={12} md={6}>
          <Card
            onClick={() => history.push(`/${card.url}`)}
            className={classes.mCard}
            style={card.cardBackground || {}}
          >
            {card.header !== "" ? (
              <CardHeader color={card.headerColor}>{card.header}</CardHeader>
            ) : null}
            <div className={classes.mCardHeader}>
              <h4 style={{ color: "white" }} className={classes.cardTitle}>
                {card.title}
              </h4>
              <p className={classes.mCardDescription}>{card.description}</p>
            </div>
            <CardBody></CardBody>
            {card.footer !== "" ? <CardFooter>{card.footer}</CardFooter> : null}
          </Card>
        </GridItem>
      );
    });
  };

  return (
    <GridContainer
      className={classes.gridContainer}
      justifycontent="center"
      alignItems="center"
      style={{ position: "static" }}
    >
      {renderMiccCards()}
      <GridItem style={{ paddingBottom: "8px" }} md={12}>
        <MiccosukeeFooter />
      </GridItem>
    </GridContainer>
  );
};

export default Home;
