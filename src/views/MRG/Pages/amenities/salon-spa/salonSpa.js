import React from "react";

// Core Components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Typography from "@material-ui/core/Typography";

// My Custom Components
import RaisedContainer from "components/CustomSections/RaisedContainer.js";
import HeroSection from "components/CustomSections/HeroSection.js";
import CustomImageSlider from "components/CustomImageSlider/CustomImageSlider.js";

// Images
import bgImage from "assets/media/img/mrg/MRG_Header1.jpg";
import image1 from "assets/media/img/mrg/amenities/salon-spa/Aromatherapy_1024x642.jpeg";
import image2 from "assets/media/img/mrg/amenities/salon-spa/Facial_1024x642.jpeg";
import image3 from "assets/media/img/mrg/amenities/salon-spa/HairCare_1024x642.jpeg";
import image4 from "assets/media/img/mrg/amenities/salon-spa/Pedicure_1024x642.jpeg";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/mrg/basicPage.js";

// BusinessInfo
import { mrgHours } from "business_info/hours.js";

// Services
import { renderPoiHours } from "services/functions/renderPoiHours.js";

// Context
import { useLanguage } from "contexts/languageContext.js";

const useStyles = makeStyles(styles);

const imageArray = [image1, image2, image3, image4];

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: "",
    subHeader: "",
  },
];

const SalonSpa = () => {
  const language = useLanguage();
  const classes = useStyles();

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>Pa-Hay Okee Salon &amp; Spa</h2>
              {renderPoiHours(mrgHours.poi.salon, language)}
              <p>
                {language ? "Call " : "¡Llame al "}
                <a href="tel:+13059252557">
                  <Typography variant="inherit" color="primary">
                    305-925-2557
                  </Typography>
                </a>
                {language
                  ? " and book your appointment today!"
                  : " y reserve su cita hoy!"}
              </p>
              <Button
                href="https://mrg.miccosukee.com/wp-content/uploads/2019/11/SpaBrochure_Trifold.pdf"
                target="_blank"
                usetheme="contained"
              >
                {language ? "SPA MENU" : "SERVICIOS DEL SPA"}
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

export default SalonSpa;
