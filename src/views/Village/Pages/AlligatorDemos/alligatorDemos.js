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
import bgImage from "assets/img/village/Village_Header1.jpg";
import image1 from "assets/img/village/1024x642_Slider_L-e1551456221969.jpg";
import image2 from "assets/img/village/1024x642_Slider_D-e1551456149892.jpg";
import image3 from "assets/img/village/1024x642_Slider_M-e1551456229527.jpg";

// Video
import gatorVid from "assets/img/village/alligator-wrestling-1080P.mov";
import gatorVidImage from "assets/img/village/alligator-wrestling-1080P-img-e1551460924638.jpg";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/mrg/basicPage.js";

// Services
import { renderPoiHours } from "services/renderPoiHours.js";

// Business info
import { villageHours } from "business_info/hours.js";

// context
import { useLanguage } from "contexts/languageContext.js";

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

const AlligatorDemos = () => {
  const language = useLanguage();
  const classes = useStyles();

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={6}>
            <div className={classes.leftTextArea}>
              <h2>Alligator Demonstrations</h2>
              {renderPoiHours(villageHours.poi.alligator, language)}
              {language ? (
                <React.Fragment>
                  <p>
                    We don’t “wrestle” our ‘gators—we love them and hope that
                    you’ll learn about them through our demonstrations! Watch in
                    awe as a brave demonstrator explains centuries-old
                    traditions and rituals that have been handed down by
                    generations of Miccosukee with their bare hands!
                  </p>
                  <p>
                    The Miccosukee learned early on how to capture them for food
                    and commodities like their tough skin. The times have
                    changed and the Tribe’s relationship has moved towards
                    conservation and education about the alligator’s role in
                    this unique environment.
                  </p>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <p>
                    No “peleamos” con nuestros caimanes – ¡los amamos y
                    esperamos que puedan aprender sobre ellos con nuestras
                    demostraciones! Se asombrarán al ver a nuestros luchadores
                    valientes explicar las tradiciones y los rituales que los
                    Miccosukee han pasado a través de generaciones.
                  </p>
                  <p>
                    Los Miccosukee aprendieron hace mucho como capturarlos para
                    alimentación y productos como su piel dura. Desde entonces,
                    la relación de la Tribu con los caimanes ha cambiado. Ahora,
                    ellos están mas preocupados de conservarlos y de educar a la
                    gente del rol que tienen los caimanes en este ambiente
                    particular.
                  </p>
                </React.Fragment>
              )}
            </div>
          </GridItem>
          <GridItem md={6}>
            <div className={classes.imageArea} style={{ marginBottom: "50px" }}>
              <video
                loop
                autoPlay
                width="100%"
                poster={gatorVidImage}
                src={gatorVid}
                controls
                style={{
                  boxShadow: `0 16px 24px 2px rgb(0 0 0 / 14%), 0 6px 30px 5px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%)`,
                }}
              />
            </div>
          </GridItem>
        </GridContainer>
      </RaisedContainer>
    </React.Fragment>
  );
};

export default AlligatorDemos;
