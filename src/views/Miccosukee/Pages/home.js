import React from "react";
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
import adminImg from "assets/img/miccosukee/pages/home/home-admin.jpg";

import { useLanguage } from "contexts/languageContext.js";

const useStyles = makeStyles(styles);

//<Link to="/about">About</Link>
//"https://miccosukee.com/wp-content/uploads/2019/12/gaming-scaled.jpg"

const Home = (props) => {
  const language = useLanguage();
  const classes = useStyles();

  console.log("language", language);

  const cards = [
    {
      id: 1,
      title: language
        ? "Miccosukee Resort & Gaming"
        : "Miccosukee Resort & Gaming",
      description: language
        ? "With supporting text below as a natural lead-in to additional content."
        : "Con texto de apoyo debajo dirigiendo a contenido adicional",
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
      title: language
        ? "Everglades Experiences"
        : "Experiencias en los Everglades",
      description: language
        ? "With supporting text below as a natural lead-in to additional content."
        : "Con texto de apoyo debajo dirigiendo a contenido adicional",
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
      title: language ? "History" : "Historia",
      description: language
        ? "With supporting text below as a natural lead-in to additional content."
        : "Con texto de apoyo debajo dirigiendo a contenido adicional",
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
    {
      id: 4,
      title: language ? "Administration" : "Administración",
      description: language
        ? "With supporting text below as a natural lead-in to additional content."
        : "Con texto de apoyo debajo dirigiendo a contenido adicional",
      cardBackground: {
        background: `linear-gradient(
                rgba(197, 78, 69, 0.45), 
                rgba(197, 78, 69, 0.45)),
                url(${adminImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      },
      header: "",
      headerColor: "",
      footer: "",
      buttonColor: "danger",
    },
  ];

  const renderMiccCards = () => {
    return cards.map((card) => {
      return (
        <GridItem key={card.id} className={classes.gridItem} sm={12} md={6}>
          <Card
            onClick={() => props.click(card.id) || null}
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
    >
      {renderMiccCards()}
    </GridContainer>
  );
};

export default Home;
