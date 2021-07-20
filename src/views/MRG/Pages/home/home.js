import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";

// nodejs library that concatenates classes
import classNames from "classnames";

// Custom Components
import Button from "components/CustomButtons/Button.js";

// @material-ui/core components
import Icon from "@material-ui/core/Icon";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
//import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";

// @material-ui/icons
import Close from "@material-ui/icons/Close";
import { Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CustomButton from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// My Custom Component
import HeroSection from "components/CustomSections/HeroSection.js";
import RaisedContainer from "components/CustomSections/RaisedContainer";
import StandardCard from "components/CustomCards/StandardCard.js";

// react component for creating beautiful carousel
import Slider from "react-slick";

// Images
import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";
import heroImg1 from "assets/img/mrg/home/mrg_hero.jpg";

import cardImage1 from "assets/img/mrg/gaming/machines/MRG_Gaming1.jpg";
import cardImage2 from "assets/img/mrg/home/burgerfries.jpg";
import cardImage3 from "assets/img/mrg/gaming/bingo/BINGO_SLIDE2.jpeg";
import cardImage4 from "assets/img/mrg/home/homeCard_spa.jpg";
import cardImage5 from "assets/img/mrg/home/homeCard_events.jpg";
import cardImage6 from "assets/img/mrg/home/homeCard_banquets.jpg";

// Styles
import styles from "assets/jss/material-kit-react/views/mrg/home.js";
import cardStyles from "assets/jss/material-kit-react/views/mrg/homeCardStyles.js";
import modalStyle from "assets/jss/material-kit-react/virtualLoginModal.js";

// context
import { useLanguage } from "contexts/languageContext.js";

const useStyles = makeStyles(styles);
const useCardStyles = makeStyles(cardStyles);
const useModalStyles = makeStyles(modalStyle);

const Home = (props) => {
  const language = useLanguage();
  const classes = useStyles();
  const cardClasses = useCardStyles();
  const modalClasses = useModalStyles();

  const sliderContent = [
    {
      id: 1,
      bgImage: heroImg1,
      header: language ? "MONTHLY PROMOTIONS" : "PROMOCIONES MENSUALES",
      subHeader: language
        ? "Miccosukee One Members, enter our drawings for chances to win thousands in cash and plenty of Free Play!"
        : "¡Miembros de Miccosukee One, participen en nuestros sorteos para tener oportunidades de ganar miles de dólares en efectivo y mucho Free Play!​",
      button: {
        text: language ? "SEE PROMOS" : "VER PROMOCIONES",
        link: "/mrg/promotions",
      },
    },
    /*
    {
      id: 2,
      bgImage: image2,
      header: "AMERICAN INDIAN DAY",
      subHeader: "Itaque earum rerum hic tenetur a sapiente delectus.",
    },
    {
      id: 3,
      bgImage: image3,
      header: "ARTS & CRAFTS FESTIVAL",
      subHeader:
        "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
    },
    {
      id: 4,
      bgImage: image1,
      header: "GAMING",
      subHeader: "",
    },
    */
  ];

  const cardContent = [
    {
      id: 1,
      img: cardImage1,
      title: language ? "Gaming Machines" : "Máquinas de Juego",
      body: language
        ? "Players of all levels can try their luck on any of the sizzling 2,000+ machines on our floor!"
        : "¡Jugadores de todos los niveles pueden probar su suerte en cualquiera de las 2,000+ increíbles máquinas!",
      buttonText: language ? "Learn More" : "Conozca Más",
      linkObj: {
        type: "internal",
        link: "/gaming-machines",
      },
    },
    {
      id: 2,
      img: cardImage2,
      title: language ? "Sawgrass Cafe" : "Sawgrass Cafe",
      body: language
        ? "Sawgrass Cafe serves tasty sandwiches, soups, salads, and Latino favorites like pastelitos."
        : "Sirviendo deliciosos sándwiches, sopas, ensaladas y favoritos latinos como pastelitos.",
      buttonText: language ? "See Details" : "Más Detalles",
      linkObj: {
        type: "internal",
        link: "/sawgrass-cafe",
      },
    },
    {
      id: 3,
      img: cardImage3,
      title: language ? "Bingo" : "Bingo",
      body: language
        ? "Miccosukee Resort & Gaming’s Bingo Hall is the high-stakes bingo room to try your luck in the classic game of chance!"
        : "¡La Sala de Bingo de Miccosukee Resort & Gaming es el lugar ideal para probar su suerte con el bingo de altas apuestas!",
      buttonText: language ? "Learn More" : "Conozca Más",
      linkObj: {
        type: "internal",
        link: "/bingo",
      },
    },
  ];

  let match = useRouteMatch();

  const cardButtonClick = (card) => {
    if (card.linkObj.type === "internal") {
      props.history.push(`/mrg${card.linkObj.link}`);
    } else {
      return null;
    }
  };

  const renderCards = () => {
    return cardContent.map((card) => {
      return (
        <StandardCard
          classes={cardClasses}
          key={card.id}
          img={card.img}
          title={card.title}
          body={card.body}
          buttonText={card.buttonText}
          buttonFunction={() => cardButtonClick(card)}
        />
      );
    });
  };

  const renderDesktopView = () => {
    return renderCards();
  };

  const renderMobileView = () => {
    const settings = {
      arrows: false,
      infinite: false,
      speed: 150,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      dots: true,
      dotsClass: `slick-dots ${cardClasses.dots}`,
    };
    return <Slider {...settings}>{renderCards()}</Slider>;
  };

  return (
    <React.Fragment>
      <HeroSection large={true} sliderContent={sliderContent} />
      <RaisedContainer>
        <div className={classes.welcomeContainer}>
          <Typography className={classes.welcome} paragraph component="h1">
            {language
              ? "Welcome to Miccosukee Resort & Gaming"
              : "Bienvenido a Miccosukee Resort & Gaming"}
          </Typography>
          <Typography className={classes.subWelcome} paragraph component="h3">
            {language
              ? "Located in the heart of the Everglades — home to South Florida’s original gaming and all-around entertainment emporium."
              : "Localizado en el corazón de los Everglades, somos el emporio de entretenimiento y juegos de azar más original del Sur de la Florida."}
          </Typography>
          <hr className={classes.hr} />
        </div>
        <div className={cardClasses.cardContainer}>
          <Hidden mdUp>{renderMobileView()}</Hidden>
          <Hidden smDown>{renderDesktopView()}</Hidden>
        </div>
      </RaisedContainer>
    </React.Fragment>
  );
};

export default Home;

/*
<Link to={`${match.url}/amenities`}>
  <Typography color="inherit" variant="inherit">
    Amenities
  </Typography>
</Link>
*/
