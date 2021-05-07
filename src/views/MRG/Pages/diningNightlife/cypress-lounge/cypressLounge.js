import React from "react";

// Core Components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Typography from "@material-ui/core/Typography";
import Button from "components/CustomButtons/Button.js";

// My Custom Components
import RaisedContainer from "components/CustomSections/RaisedContainer.js";
import HeroSection from "components/CustomSections/HeroSection.js";
import CustomImageSlider from "components/CustomImageSlider/CustomImageSlider.js";

// Images
import bgImage from "assets/img/bg3.jpg";
import image1 from "assets/img/mrg/dining/cypress-lounge/cypress_01.jpeg";
import image2 from "assets/img/mrg/dining/cypress-lounge/cypress_02.jpeg";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/mrg/basicPage.js";

const useStyles = makeStyles(styles);

const imageArray = [image1, image2];

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: "",
    subHeader: "",
  },
];

const CypressLounge = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>Cypress Lounge</h2>
              <h6>Open 24 hours, seven days a week</h6>
              <p>
                The Cypress Lounge is home to daily beer specials and Monday
                Night Football, caliente Miami HEAT action and more! Enjoy
                sporting events year round on our large screen TVs in the middle
                of South Florida’s hottest gaming action.
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

export default CypressLounge;
