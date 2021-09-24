import React from "react";

// Core Components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// My Custom Components
import RaisedContainer from "components/CustomSections/RaisedContainer.js";
import HeroSection from "components/CustomSections/HeroSection.js";
import CustomImageSlider from "components/CustomImageSlider/CustomImageSlider.js";

// Images
import bgImage from "assets/media/img/golf/Golf_Header.jpg";
import image1 from "assets/media/img/golf/courses/Golf_2.jpg";
import image2 from "assets/media/img/golf/courses/Golf_3-1.jpg";
import image3 from "assets/media/img/golf/courses/Golf_4.jpg";
import image4 from "assets/media/img/golf/courses/Golf_5-1.jpg";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/mrg/basicPage.js";

// context
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

const Courses = () => {
  const language = useLanguage();
  const classes = useStyles();

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>{language ? "Courses" : "Campos de Golf"}</h2>
              <p>
                {language
                  ? `Golfers looking for breathtaking views and fast fairways will indulge in the beauty of the Miccosukee Golf & Country Club, which boast three beautiful courses: Dolphin, Marlin and Barracuda; the crown jewels of Mark Mahannah’s course-design career.`
                  : `Los golfistas suelen buscar vistas asombrosas y campos bien mantenidos. Para satisfacerlos, en el Miccosukee Golf & Country Club podrá encontrar la belleza de tres maravillosos​ campos, Dolphin, Marlin y Barracuda, las joyas de los diseños de Mark Mahannah.`}
              </p>
              <p>
                {language
                  ? `Everyone is welcome. Our course is open to club members and the public and offers challenges that have been enjoyed by casual players and some of the finest PGA and LPGA golfers. In order to enjoy the game at a level that you’re comfortable with, inform us of the caliber of players you intend to have and we’ll suggest the proper 18 holes to give everyone a super outing.`
                  : `Todos son bienvenidos. Nuestro campo está abierto tanto para miembros del club como para el público en general. Ofrecemos desafíos para que los disfruten tanto los jugadores casuales como los más entrenados de PGA y LPGA, asegurándonos de que cada uno pueda disfrutar al nivel que le acomode mejor. Infórmenos el nivel de los jugadores que participarán y le sugeriremos los mejores 18 hoyos para que sea una salida espectacular.`}
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

export default Courses;
