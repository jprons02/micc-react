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
import image1 from "assets/img/mrg/dining/international-buffet/HotDish_1024x642.jpeg";
import image2 from "assets/img/mrg/dining/international-buffet/Paella_1024x642.jpeg";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/mrg/basicPage.js";

// BusinessInfo
import { mrgHours } from "business_info/hours.js";

// Services
import { renderPoiHours } from "services/renderPoiHours.js";

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

const Bravo = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>Bravo Bravissimo!</h2>
              {renderPoiHours(mrgHours.poi.bravo)}
              <p>
                SAMPLE - With a killer à la carte breakfast menu and an
                international buffet, you are sure to enjoy different cuisines
                everyday! Let your taste buds travel the world from the comfort
                of our home. Empeeke Aaweeke is South Florida’s most compelling
                buffet destination.
              </p>
              <Button
                href="https://mrg.miccosukee.com/wp-content/uploads/2019/06/BravoBravissimo_Menu_11x17.pdf"
                target="_blank"
                usetheme="contained"
              >
                MENU
              </Button>{" "}
              <Button
                href="https://mrg.miccosukee.com/wp-content/uploads/2019/06/BravoBravissimo_DrinksMenu.pdf"
                target="_blank"
                usetheme="contained"
              >
                DRINK MENU
              </Button>
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

export default Bravo;
