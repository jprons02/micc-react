import React from "react";

import ReactGA from "react-ga";

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
import bgImage from "assets/img/mrg/MRG_Header1.jpg";
import image1 from "assets/img/mrg/dining/international-buffet/HotDish_1024x642.jpeg";
import image2 from "assets/img/mrg/dining/international-buffet/Paella_1024x642.jpeg";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/mrg/basicPage.js";

// BusinessInfo
import { mrgHours } from "business_info/hours.js";

// Services
import { renderPoiHours } from "services/renderPoiHours.js";

// Context
import { useLanguage } from "contexts/languageContext.js";

function initializeReactGA() {
  ReactGA.initialize("UA-123791717-1");
  ReactGA.pageview("/mrg/");
}

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
  const language = useLanguage();
  const classes = useStyles();

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>Bravo Bravissimo!</h2>
              {renderPoiHours(mrgHours.poi.bravo, language)}
              <p>
                {language
                  ? "Enjoy traditional Italian dishes and an extensive wine selection in a casual, cozy setting perfect for couples and families alike."
                  : "Disfrute platos tradicionales de la cocina Italiana y una extensa selección de vinos en un ambiente casual y acogedor perfecto para parejas y familias."}
              </p>
              <Button
                href="https://mrg.miccosukee.com/wp-content/uploads/2019/06/BravoBravissimo_Menu_11x17.pdf"
                target="_blank"
                usetheme="contained"
              >
                {language ? "MENU" : "MENÚ"}
              </Button>{" "}
              <Button
                href="https://mrg.miccosukee.com/wp-content/uploads/2019/06/BravoBravissimo_DrinksMenu.pdf"
                target="_blank"
                usetheme="contained"
              >
                {language ? "DRINK MENU" : "CARTA DE VINOS Y BEBIDAS"}
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
