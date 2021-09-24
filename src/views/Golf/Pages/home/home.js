import React, { useContext } from "react";

// @material core
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

// My Custom Component
import HeroSection from "components/CustomSections/HeroSection.js";
import RaisedContainer from "components/CustomSections/RaisedContainer";

// media
import golfVidImage from "assets/media/img/golf/GOLF-COURSE-DRONE-residence.jpg";
import golfVid from "assets/media/img/golf/GOLF-COURSE-DRONE-residence.mp4";

// Icons
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import TodayIcon from "@material-ui/icons/Today";
import GolfCourseIcon from "@material-ui/icons/GolfCourse";

// Styles
import styles from "assets/jss/material-kit-react/views/golf/home.js";
import {
  cardTitle,
  cardLink,
  cardSubtitle,
} from "assets/jss/material-kit-react.js";
import modalStyle from "assets/jss/material-kit-react/virtualLoginModal.js";

// Context
import { TeeTimeContext } from "contexts/TeeTimeContext.js";
import { useLanguage } from "contexts/languageContext.js";

const cardStyles = {
  cardTitle,
  cardLink,
  cardSubtitle,
};

const useStyles = makeStyles(styles);
const useModalStyles = makeStyles(modalStyle);
const useCardStyles = makeStyles(cardStyles);

const Home = () => {
  const language = useLanguage();
  const classes = useStyles();
  const cardClasses = useCardStyles();

  const [showTeeTimeModal, setShowTeeTimeModal] = useContext(TeeTimeContext);

  const sliderContent = [
    {
      id: 1,
      bgImage: golfVidImage,
      bgVideo: golfVid,
      gradient: ".4",
      header: "GOLF & COUNTRY CLUB",
      subHeader: language
        ? "Picturesque and challenging, our facility boasts a 27 hole, par 72"
        : "Esta pintoresca y desafiante obra de arte tiene 27 hoyos con 72 como par del campo.",
      button: {
        text: language ? "Book A Tee Time" : "Reserve su Horario",
        link: "",
        clickFunction: () => setShowTeeTimeModal(true),
      },
    },
  ];

  return (
    <React.Fragment>
      <HeroSection large={true} sliderContent={sliderContent} />
      <RaisedContainer>
        <div className={classes.welcomeContainer}>
          <Typography className={classes.welcome} paragraph component="h1">
            {language
              ? "Championship Golf in the Heart of Kendall"
              : "Torneos de Golf en el Centro de Kendall"}
          </Typography>
          <Typography className={classes.subWelcome} paragraph component="h3">
            {language
              ? "The Miccosukee Golf & Country Club has hosted many LPGA and PGA events, including the Miccosukee Championship. In the heart of Kendall, this Mark Mahannah-designed masterpiece is considered by many to have the best layout in South Florida."
              : "El Miccosukee Golf & Country Club ha sido anfitrión de muchos eventos LPGA y PGA, entre los que se incluye el Campeonato Miccosukee. Exclusivamente diseñado por Mark Mahannah, es considerado uno de los mejores campos de golf en el sur de la Florida y está ubicado en la elegante zona de Kendall."}
          </Typography>
          <hr className={classes.hr} />
          <GridContainer style={{ marginTop: "60px" }} justify="center">
            <GridItem
              style={{ textAlign: "center", paddingBottom: "15px" }}
              sm={12}
              md={4}
            >
              <MonetizationOnIcon className={classes.icons} color="primary" />
              <p className={classes.iconText}>
                {language
                  ? "With its competitive prices, our course caters to amateur and professional golfers alike."
                  : "Nuestro campo de golf tiene lugar para aficionados y profesionales, por eso podrá encontrar variedad en nuestros precios."}
              </p>
            </GridItem>
            <GridItem
              style={{ textAlign: "center", paddingBottom: "15px" }}
              sm={12}
              md={4}
            >
              <TodayIcon className={classes.icons} color="primary" />
              <p className={classes.iconText}>
                {language
                  ? "Our golf course is open to the public. Browse and book tee times online."
                  : "Nuestro campo de golf está abierto al público. Ingrese y reserve el horario por internet."}
              </p>
            </GridItem>
            <GridItem
              style={{ textAlign: "center", paddingBottom: "15px" }}
              sm={12}
              md={4}
            >
              <GolfCourseIcon className={classes.icons} color="primary" />
              <p className={classes.iconText}>
                {language
                  ? "Located in the heart of Kendall, we are an ideal venue for golf outings and events."
                  : "Ubicado en el centro de Kendall, somos el lugar ideal para eventos de golf."}
              </p>
            </GridItem>
          </GridContainer>
        </div>
      </RaisedContainer>
    </React.Fragment>
  );
};

export default Home;

/*
<GridContainer>
  <GridItem sm={12} md={6}>
  </GridItem>
</GridContainer>
*/
