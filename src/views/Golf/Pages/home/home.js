import React, { useContext } from "react";

// @material core
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
//<GridItem sm={12} md={6}>

// My Custom Component
import HeroSection from "components/CustomSections/HeroSection.js";
import RaisedContainer from "components/CustomSections/RaisedContainer";

// media
import golfVidImage from "assets/img/golf/GOLF-COURSE-DRONE-residence.jpg";
import golfVid from "assets/img/golf/GOLF-COURSE-DRONE-residence.mp4";

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

const cardStyles = {
  cardTitle,
  cardLink,
  cardSubtitle,
};

const useStyles = makeStyles(styles);
const useModalStyles = makeStyles(modalStyle);
const useCardStyles = makeStyles(cardStyles);

const Home = () => {
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
      subHeader:
        "Picturesque and challenging, our facility boasts a 27 hole, par 72",
      button: {
        text: "Book A Tee Time",
        link: "",
        clickFunction: () => setShowTeeTimeModal(true),
      },
    },
  ];

  const testimonialCards = () => {
    return (
      <Card style={{ width: "20rem" }}>
        <CardBody>
          <h4 className={cardClasses.cardTitle}>Card Title</h4>
          <h6 className={cardClasses.cardSubtitle}>Card Subtitle</h6>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a
            href="#pablo"
            className={cardClasses.cardLink}
            onClick={(e) => e.preventDefault()}
          >
            Card link
          </a>
          <a
            href="#pablo"
            className={cardClasses.cardLink}
            onClick={(e) => e.preventDefault()}
          >
            Another link
          </a>
        </CardBody>
      </Card>
    );
  };

  return (
    <React.Fragment>
      <HeroSection large={true} sliderContent={sliderContent} />
      <RaisedContainer>
        <div className={classes.welcomeContainer}>
          <Typography className={classes.welcome} paragraph component="h1">
            Championship Golf in the Heart of Kendall
          </Typography>
          <Typography className={classes.subWelcome} paragraph component="h3">
            The Miccosukee Golf &amp; Country Club has hosted many LPGA and PGA
            events, including the Miccosukee Championship. In the heart of
            Kendall, this Mark Mahannah-designed masterpiece is considered by
            many to have the best layout in South Florida.
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
                With its competitive prices, our course caters to amateur and
                professional golfers alike.
              </p>
            </GridItem>
            <GridItem
              style={{ textAlign: "center", paddingBottom: "15px" }}
              sm={12}
              md={4}
            >
              <TodayIcon className={classes.icons} color="primary" />
              <p className={classes.iconText}>
                Our golf course is open to the public. Browse and book tee times
                online.
              </p>
            </GridItem>
            <GridItem
              style={{ textAlign: "center", paddingBottom: "15px" }}
              sm={12}
              md={4}
            >
              <GolfCourseIcon className={classes.icons} color="primary" />
              <p className={classes.iconText}>
                Located in the heart of Kendall, we are an ideal venue for golf
                outings and events.
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
