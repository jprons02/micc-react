import React, { useContext } from "react";

// @material core
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

// core components
import InfoArea from "components/InfoArea/InfoArea.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
//<GridItem sm={12} md={6}>

// My Custom Component
import HeroSection from "components/CustomSections/HeroSection.js";
import RaisedContainer from "components/CustomSections/RaisedContainer";

// media
import villageImage from "assets/img/village/alligator_demo.jpg";

// Icons
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import TodayIcon from "@material-ui/icons/Today";
import GolfCourseIcon from "@material-ui/icons/GolfCourse";

// Styles
import styles from "assets/jss/material-kit-react/views/village/home.js";
import {
  cardTitle,
  cardLink,
  cardSubtitle,
} from "assets/jss/material-kit-react.js";
import modalStyle from "assets/jss/material-kit-react/virtualLoginModal.js";

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

  const sliderContent = [
    {
      id: 1,
      bgImage: villageImage,
      //bgVideo: golfVid,
      gradient: ".4",
      header: "CHEHANTAMO!",
      subHeader: "(MEANS WELCOME IN OUR MIKASUKI LANGUAGE)",
      /*
      button: {
        text: "Book A Tee Time",
        link: "",
        clickFunction: () => setShowTeeTimeModal(true),
      },
      */
    },
  ];

  return (
    <React.Fragment>
      <HeroSection large={true} sliderContent={sliderContent} />
      <RaisedContainer>
        <div className={classes.welcomeContainer}>
          <Typography className={classes.welcome} paragraph component="h1">
            Welcome to Miccosukee Indian Village
          </Typography>
          <Typography className={classes.subWelcome} paragraph component="h3">
            Showcasing Miccosukee tribal arts &amp; culture, with crafts,
            airboat rides &amp; alligators.
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
