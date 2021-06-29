import React, { useState } from "react";
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

import cardImage1 from "assets/img/mrg/home/homeCard_gaming.jpg";
import cardImage2 from "assets/img/mrg/home/homeCard_accommodations.jpg";
import cardImage3 from "assets/img/mrg/home/homeCard_fineDining.jpg";
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
      header: "MONTHLY PROMOTIONS",
      subHeader:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      button: {
        text: "SEE PROMOS",
        link: "/mrg/promotions",
      },
    },
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
  ];
  
  const cardContent = [
    {
      id: 1,
      img: cardImage1,
      title: language ? "Gaming" : "Casino ",
      body:
        language ? "High stakes Bingo, cutting edge gaming and South Florida’s most intuitive rewards program are our specialty!" : "¡El bingo de altas apuestas, las innovadoras máquinas de juego y el programa de premios más intuitivo del Sur de la Florida son nuestra especialidad! ",
      buttonText: language ? "Learn More" : "Conozca Más",
      linkObj: {
        type: "internal",
        link: "/miccosukee-one",
      },
    },
    {
      id: 2,
      img: cardImage2,
      title: language ? "Accommodations" : "Habitaciones",
      body:
        language ? "Your comfort is our number one priority and the Resort’s 300+ rooms are designed with you in mind." : "Su comodidad es nuestra prioridad, y nuestras 300+ habitaciones están diseñadas con usted en mente.",
      buttonText: language ? "See Details" : "Más Detalles",
      linkObj: {
        type: "internal",
        link: "/accommodations",
      },
    },
    {
      id: 3,
      img: cardImage3,
      title: language ? "Dining" : "Restaurantes",
      body:
        language ? "Foodies rejoice! From deli favorites to phenomenal fine dining, we’ve got delightful flavors for every taste." : "¡Motívense, foodies! Desde los favoritos del deli hasta la alta cocina, tenemos sabores deliciosos para todos los gustos.",
      buttonText: language ? "Learn More" : "Conozca Más",
      linkObj: {
        type: "internal",
        link: "/bravo-bravissimo",
      },
    },
    {
      id: 4,
      img: cardImage4,
      title: language ? "Salon & Spa" : "Salón y Spa",
      body:
        language ? "Pamper yourself at our European-styled Spa & Salon with our licensed therapists and beauticians." : "Déjense consentir por nuestros terapeutas y esteticistas licenciados en nuestro spa y salón de belleza al estilo Europeo.",
      buttonText: language ? "See Details" : "Más Detalles",
      linkObj: {
        type: "internal",
        link: "/salon-spa",
      },
    },
    {
      id: 5,
      img: cardImage5,
      title: language ? "Events" : "Eventos",
      body:
        language ? "Our 1,200-seat Entertainment Dome is the home of live music, cabaret shows and sporting events." : "Nuestro Domo de Entretenimiento tiene capacidad para 1,200 invitados y es el lugar ideal para escuchar música en vivo, ver espectáculos de cabaré y presenciar eventos deportivos.",
      buttonText: language ? "Events List" : "Lista de Eventos",
      linkObj: {
        type: "internal",
        link: "/events",
      },
    },
    {
      id: 6,
      img: cardImage6,
      title: language ? "Banquets & Catering" : "Banquetes y Catering",
      body:
        language ? "Ready for an unforgettable experience? Host your next event at our banquet and convention facilities." : "¿Está listo para una experiencia inolvidable? Organice su próximo evento en nuestros salones para banquetes y convenciones.",
      buttonText: language ? "See Details" : "Más Detalles",
      linkObj: {
        type: "internal",
        link: "/banquets-catering",
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
            {language ? "Welcome to Miccosukee Resort & Gaming" : "Bienvenido a Miccosukee Resort & Gaming"}
          </Typography>
          <Typography className={classes.subWelcome} paragraph component="h3">
            {language ? "Located in the heart of the Everglades — home to South Florida’s original gaming and all-around entertainment emporium." : "Localizado en el corazón de los Everglades, somos el emporio de entretenimiento y juegos de azar más original del Sur de la Florida."}
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
