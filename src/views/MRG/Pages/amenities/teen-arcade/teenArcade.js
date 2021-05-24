import React from "react";

// Core Components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

// My Custom Components
import RaisedContainer from "components/CustomSections/RaisedContainer.js";
import HeroSection from "components/CustomSections/HeroSection.js";
import CustomImageSlider from "components/CustomImageSlider/CustomImageSlider.js";

// Images
import bgImage from "assets/img/bg3.jpg";
import image1 from "assets/img/mrg/amenities/teen-arcade/arcade_1.jpeg";
import image2 from "assets/img/mrg/amenities/teen-arcade/arcade_2.jpeg";
import image3 from "assets/img/mrg/amenities/teen-arcade/arcade_3.jpeg";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/mrg/basicPage.js";

// BusinessInfo
import { mrgHours } from "business_info/hours.js";

// Services
import { renderPoiHours } from "services/renderPoiHours.js";

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

const TeenArcade = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>Teen Arcade</h2>
              {renderPoiHours(mrgHours.poi.teenArcade)}
              <p>
                Our state-of-the-art Teen Arcade is our cool, “big kids” area
                featuring the hottest games on the planet. Clean, safe and with
                an environment that says excitement, the arcade has been a hit
                with all guests! One visit here, and your teenager/s will want
                to come back again and again!
              </p>
              <p>
                <span style={{ fontSize: "80%", fontStyle: "italic" }}>
                  *13+, if under, must be accompanied by an adult over 18 years
                  of age.
                </span>
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

export default TeenArcade;
