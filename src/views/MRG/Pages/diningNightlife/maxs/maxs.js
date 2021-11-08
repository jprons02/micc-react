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
import bgImage from "assets/media/img/mrg/MRG_Header1.jpg";
import image1 from "assets/media/img/mrg/dining/deli/deli-01.jpg";

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

//const imageArray = [image1];
const imageObj = [{ src: image1, alt: "Test1" }];

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: "",
    subHeader: "",
  },
];

const Maxs = () => {
  const language = useLanguage();
  const classes = useStyles();

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>Max's</h2>
              {renderPoiHours(mrgHours.poi.maxs, language)}
              <p>
                {language
                  ? "Our hotdog stand is conveniently located near our gaming floor. You can enjoy food to-go, coffee, soft drinks and more. ​It's the perfect place to grab a quick bite and head back to your favorite gaming machine in time to hit the jackpot!"
                  : "Nuestro puesto de perros calientes está convenientemente localizado cerca de nuestro sala de juegos. Puede disfrutar de comida para llevar, café, refrescos y más. ¡Es el lugar perfecto para tomar un bocado rápido y regresar a su máquina de juego favorita a tiempo para ganar el premio mayor!"}
              </p>
              <Button
                target="_blank"
                href="https://mapa-media.s3.amazonaws.com/website/Max's_DigitalMenu.pdf"
                usetheme="contained"
              >
                {language ? "MENU" : "MENÚ"}
              </Button>{" "}
            </div>
          </GridItem>
          <GridItem md={5}>
            {/*
            <div className={classes.imageArea}>
              <CustomImageSlider images={imageObj} />
            </div>
            */}
          </GridItem>
        </GridContainer>
      </RaisedContainer>
    </React.Fragment>
  );
};

export default Maxs;
