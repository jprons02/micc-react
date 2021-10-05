import React from "react";

// @material core
import { makeStyles } from "@material-ui/core/styles";
import { Hidden } from "@material-ui/core";

// My Custom Component
import HeroSection from "components/CustomSections/HeroSection.js";
import RaisedContainer from "components/CustomSections/RaisedContainer";
import Details from "views/Airboats/Pages/details/details.js";
import Pricing from "views/Airboats/Pages/pricing/pricing.js";

// media
import airboatsVidImage from "assets/media/img/airboats/Parallax_Airboat.jpg";
import airboatsVid from "assets/media/img/airboats/AIRBOAT-RIDES-TOUR_rev.mp4";
import parallaxImg from "assets/media/img/airboats/Parallax_Aerial.jpg";

// Services
import { renderPoiHours } from "services/functions/renderPoiHours.js";

// Business info
import { airboatsHours } from "business_info/hours.js";

// context
import { useLanguage } from "contexts/languageContext.js";

// Styles
import styles from "assets/jss/material-kit-react/views/airboats/home.js";

const useStyles = makeStyles(styles);

const Home = () => {
  const classes = useStyles();
  const language = useLanguage();

  const sliderContent = [
    {
      id: 1,
      bgImage: airboatsVidImage,
      bgVideo: airboatsVid,
      gradient: "0",
      //header: "Miccosukee Airboat Rides",
      //subHeader:
      //"Miccosukee Airboats are the best way to glide the ‘Glades and experience the magnificent “River of Grass.”",
    },
  ];

  const mobileSliderContent = [
    {
      id: 1,
      bgImage: airboatsVidImage,
      gradient: "0",
      backgroundPlain: true,
      height: "30vh",
      //header: "Miccosukee Airboat Rides",
      //subHeader:
      //"Miccosukee Airboats are the best way to glide the ‘Glades and experience the magnificent “River of Grass.”",
    },
  ];

  const parallaxStyle = {
    backgroundImage: `url("${parallaxImg}")`,
    /* Set a specific height */
    minHeight: "350px",
    /* Create the parallax scrolling effect */
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <React.Fragment>
      <Hidden smDown>
        <HeroSection large={true} sliderContent={sliderContent} />
      </Hidden>
      <Hidden mdUp>
        <HeroSection sliderContent={mobileSliderContent} />
      </Hidden>
      <RaisedContainer fullWidth={true}>
        <div
          id="details"
          style={{ paddingTop: "45px" }}
          className={classes.container}
        >
          <div style={{ margin: "-30px 0 30px 0" }}>
            {renderPoiHours(airboatsHours, language)}
          </div>
          <Details />
        </div>
        <Hidden smDown>
          <div style={parallaxStyle}></div>
        </Hidden>
        <Hidden mdUp>
          <div style={{ marginTop: "-50px" }}></div>
        </Hidden>
        <div
          id="pricing"
          style={{ paddingTop: "15px" }}
          className={classes.container}
        >
          <Pricing />
        </div>
      </RaisedContainer>
    </React.Fragment>
  );
};

export default Home;
