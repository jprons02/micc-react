import React from "react";

// Core Components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { Hidden } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

// My Custom Components
import RaisedContainer from "components/CustomSections/RaisedContainer.js";
import HeroSection from "components/CustomSections/HeroSection.js";
import CustomImageSlider from "components/CustomImageSlider/CustomImageSlider.js";
import StandardCard from "components/CustomCards/StandardCard.js";

// react component for creating beautiful carousel
import Slider from "react-slick";

// Images
import bgImage from "assets/img/administration/Everglades_Header.jpg";
import cardImage1 from "assets/img/administration/NewPoliceCar.jpg";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/administration/home.js";
import cardStyles from "assets/jss/material-kit-react/views/administration/homeCardStyles.js";

// Context
import { useLanguage } from "contexts/languageContext";

const useStyles = makeStyles(styles);
const useCardStyles = makeStyles(cardStyles);

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: "",
    subHeader: "",
  },
];

const Home = (props) => {
  const classes = useStyles();
  const cardClasses = useCardStyles();
  const language = useLanguage();

  const cardContent = [
    {
      id: 1,
      img: cardImage1,
      title: language ? "Police" : "Policía",
      body: language
        ? "The Miccosukee Police Department was established in 1976."
        : "El Departamento de Policía Miccosukee se estableció en 1976.",
      buttonText: language ? "View Pages" : "Ver Páginas",
      linkObj: {
        type: "internal",
        link: "/police",
      },
    },
  ];

  const cardButtonClick = (card) => {
    if (card.linkObj.type === "internal") {
      props.history.push(`/administration${card.linkObj.link}`);
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
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <div className={classes.welcomeContainer}>
          <Typography className={classes.welcome} paragraph component="h1">
            {language
              ? "Welcome to Miccosukee Administration"
              : "Bienvenido a la Administración Miccosukee"}
          </Typography>
          <Typography className={classes.subWelcome} paragraph component="h3">
            {language
              ? "Here you will find our administration and business related entities."
              : "Aquí encontrará información sobre nuestra administración y entidades relacionadas con el negocio."}
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
