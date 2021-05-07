import React from "react";

// Core Components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// My Custom Components
import RaisedContainer from "components/CustomSections/RaisedContainer.js";
import HeroSection from "components/CustomSections/HeroSection.js";
import CustomImageSlider from "components/CustomImageSlider/CustomImageSlider.js";

// Images
import bgImage from "assets/img/bg3.jpg";
import image1 from "assets/img/mrg/gaming/bingo/BINGO_SLIDE1.jpeg";
import image2 from "assets/img/mrg/gaming/bingo/BINGO_SLIDE2.jpeg";
import image3 from "assets/img/mrg/gaming/bingo/BINGO_SLIDE3.jpeg";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/mrg/basicPage.js";

const useStyles = makeStyles(styles);

const imageArray = [image1, image2, image3];

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: "",
    subHeader: "",
  },
];

const GamingMachines = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>Gaming Machines</h2>
              <p>
                Miccosukee Resort &amp; Gaming is South Florida’s gaming
                pioneer. Players of all levels can try their luck on any of the
                sizzling 2,000+ machines on our floor — from classic games to
                the most cutting-edge machines featuring the latest gaming
                innovations, special effects, bonuses and rewards!
              </p>
              <p>
                Exclusive, 24/7 game rooms, like Hidden Gems or our swanky High
                Limit Room, are waiting to enhance your gaming experience.
                Miccosukee Resort &amp; Gaming is a smoking facility with
                numerous non-smoking rooms. Regardless of how you enjoy
                yourself, you can play in the comfort of your individual style.
              </p>
            </div>
          </GridItem>
          <GridItem md={5}>
            <div className={classes.imageArea}>
              <CustomImageSlider images={imageArray} />
            </div>
          </GridItem>
        </GridContainer>
      </RaisedContainer>
    </React.Fragment>
  );
};

export default GamingMachines;
