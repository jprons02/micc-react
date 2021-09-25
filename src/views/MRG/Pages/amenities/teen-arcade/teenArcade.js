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
import bgImage from "assets/media/img/mrg/MRG_Header1.jpg";
import image1 from "assets/media/img/mrg/amenities/teen-arcade/arcade_1.jpeg";
import image2 from "assets/media/img/mrg/amenities/teen-arcade/arcade_2.jpeg";
import image3 from "assets/media/img/mrg/amenities/teen-arcade/arcade_3.jpeg";

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
  const language = useLanguage();
  const classes = useStyles();

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>
                {language ? "Teen Arcade" : "Sala de Juegos para Adolescentes"}
              </h2>
              {renderPoiHours(mrgHours.poi.teenArcade, language)}
              <p>
                {language
                  ? "Our state-of-the-art Teen Arcade is our cool, “big kids” area featuring the hottest games on the planet. Clean, safe and with an environment that says excitement, the arcade has been a hit with all guests! One visit here, and your teenager/s will want to come back again and again!"
                  : "Nuestra moderna Sala de Juegos para Adolescentes es nuestra área para “niños grandes” y tiene los mejores juegos del planeta. Limpia, segura y con un ambiente que grita diversión, ¡la sala de juegos ha sido un éxito con todos nuestros huéspedes! Después de una visita, ¡sus hijos querrán regresar todos los días!"}
              </p>
              <p>
                <span style={{ fontSize: "80%", fontStyle: "italic" }}>
                  {language
                    ? "*13+, if under, must be accompanied by an adult over 18 years of age."
                    : "*13+, si es menor, debe estar acompañado por un adulto mayor de 18 años."}
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
