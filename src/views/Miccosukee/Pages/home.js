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
import mrgGolfImg from "assets/img/miccosukee/pages/home/home-mrg.jpg";
import evergladesImg from "assets/img/miccosukee/pages/home/home-airboats.jpg";
import historyImg from "assets/img/miccosukee/pages/home/home-history.jpg";
import eventsImg from "assets/img/miccosukee/pages/home/home-admin.jpg";

// Context
import { useLanguage } from "contexts/languageContext.js";

// Services
import { prerenderService } from "services/prerenderService.js";

const useStyles = makeStyles(styles);

//<Link to="/about">About</Link>
//"https://miccosukee.com/wp-content/uploads/2019/12/gaming-scaled.jpg"

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
        ? "Over 2,000 slot machines with the highest payouts in Miami, 300+ rooms designed with your comfort in mind, and a variety of dining and entertainment options for your enjoyment, MRG has it all. Come for the gaming, stay for the fun!"
        : "Más de 2,000 máquinas de juego con los mejores premios de Miami, 300+ habitaciones diseñadas con su comodidad en mente, y una variedad de restaurantes y opciones de entretenimiento para su disfrute, MRG lo tiene todo. Venga a jugar, ¡quédese a divertirse!",
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
        ? "Adventure into the Everglades to learn about the Miccosukee Tribe’s culture and traditions, and discover nature at its finest while gliding through the untamed “River of Grass”."
        : "Aventure a los Everglades para aprender sobre la cultura y tradiciones de la Tribu Miccosukee, y descubra la naturaleza en todo su esplendor al deslizarse a través del salvaje “Río de Césped”. ",
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
        ? "Our 1,200-seat Entertainment Dome is home to live music, cabaret shows and sporting events."
        : "Nuestro Domo de Entretenimiento tiene capacidad para 1,200 invitados y es el lugar ideal para escuchar música en vivo, presenciar espectáculos de cabaré y ver eventos deportivos.",
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
        : "Aprenda acerca de la historia de la Tribu Miccosukee y los líderes de la Tribu.",
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
      justify="center"
      alignItems="center"
      style={{ position: "static" }}
    >
      {renderMiccCards()}
    </GridContainer>
  );
};

export default Home;
