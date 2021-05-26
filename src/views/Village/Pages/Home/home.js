import React, { useContext } from "react";
import classNames from "classnames";

// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material core
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

// core components
import InfoArea from "components/InfoArea/InfoArea.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

// context
import { PricingModalContext } from "contexts/PricingModalContext.js";

// My Custom Component
import HeroSection from "components/CustomSections/HeroSection.js";
import RaisedContainer from "components/CustomSections/RaisedContainer";

// media
import villageImage from "assets/img/village/alligator_demo.jpg";

// Icons
import StorefrontIcon from "@material-ui/icons/Storefront";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import MuseumIcon from "@material-ui/icons/Museum";
import GatorIcon from "components/CustomIcons/Icons/GatorIcon.js";

// Styles
import styles from "assets/jss/material-kit-react/views/village/home.js";
import {
  cardTitle,
  cardLink,
  cardSubtitle,
} from "assets/jss/material-kit-react.js";
import modalStyle from "assets/jss/material-kit-react/virtualLoginModal.js";
import { SettingsInputAntennaTwoTone } from "@material-ui/icons";

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

  const [showPricingModal, setShowPricingModal] = useContext(
    PricingModalContext
  );

  const openModal = (setState) => {
    setState(true);
  };

  const sliderContent = [
    {
      id: 1,
      bgImage: villageImage,
      //bgVideo: golfVid,
      gradient: ".4",
      header: "CHEHANTAMO!",
      subHeader: "(MEANS WELCOME IN OUR MIKASUKI LANGUAGE)",
      button: {
        text: "See Admission",
        link: "",
        clickFunction: () => openModal(setShowPricingModal),
      },
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
            <GridItem className={classes.iconSection} xs={12} sm={6} md={3}>
              <Link to="/village/gift-shop">
                <StorefrontIcon className={classes.icons} color="primary" />
              </Link>
              <Typography className={classes.poiTitle} component="h4">
                Gift Shop
              </Typography>
              <p className={classes.iconText}>
                Visit the Miccosukee Indian Gift Shop to find crafts created by
                natives around the world.
              </p>
            </GridItem>
            <GridItem className={classes.iconSection} xs={12} sm={6} md={3}>
              <Link to="/village/museum">
                <MuseumIcon className={classes.icons} color="primary" />
              </Link>
              <Typography className={classes.poiTitle} component="h4">
                Museum
              </Typography>
              <p className={classes.iconText}>
                Miccosukee history and culture is preserved through historical
                documents, archival photographs and original artifacts.
              </p>
            </GridItem>
            <GridItem className={classes.iconSection} xs={12} sm={6} md={3}>
              <Link to="/village/alligator-demonstrations">
                <GatorIcon className={classes.icons} color="primary" />
              </Link>
              <Typography className={classes.poiTitle} component="h4">
                Alligator Demonstrations
              </Typography>
              <p className={classes.iconText}>
                We don’t “wrestle” our ‘gators—we love them and hope that you’ll
                learn about them through our demonstrations!
              </p>
            </GridItem>
            <GridItem className={classes.iconSection} xs={12} sm={6} md={3}>
              <Link to="/village/our-little-shack">
                <FastfoodIcon className={classes.icons} color="primary" />
              </Link>
              <Typography className={classes.poiTitle} component="h4">
                Our Little Shack
              </Typography>
              <p className={classes.iconText}>
                The Village’s casual eatery has something for everybody!
                Burgers, fries, alligator bites, shakes and more! Our Little
                Shack is here for you.
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