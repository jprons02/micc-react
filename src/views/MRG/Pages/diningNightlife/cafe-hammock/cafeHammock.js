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
import image1 from "assets/media/img/mrg/dining/cafe-hammock/CafeHammock_Interior.jpeg";
import image2 from "assets/media/img/mrg/dining/cafe-hammock/filet.jpg";
import image3 from "assets/media/img/mrg/dining/cafe-hammock/chicken.jpg";
import image4 from "assets/media/img/mrg/dining/cafe-hammock/caprese.jpg";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/mrg/basicPage.js";

// BusinessInfo
import { mrgHours } from "business_info/hours.js";

// Services
import { renderPoiHours } from "services/functions/renderPoiHours.js";
//import { isOrAfterDate } from "services/functions/scheduleThis";
import { isRunning } from "services/functions/scheduleThis";

// Context
import { useLanguage } from "contexts/languageContext.js";

const useStyles = makeStyles(styles);

//const imageArray = [image1, image2, image3];
const imageObj = [
  { src: image1, alt: "Cafe Hammock interior" },
  { src: image2, alt: "Steak" },
  { src: image3, alt: "Chicken" },
  { src: image4, alt: "Caprese salad" },
];

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: "",
    subHeader: "",
  },
];

const CafeHammock = () => {
  const language = useLanguage();
  const classes = useStyles();

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>Café Hammock</h2>
              {isRunning([2021, 12, 21], [2022, 1, 1]) ? (
                <h6
                  style={{
                    color: "red",
                    display: "inline-block",
                    marginTop: "-5px",
                  }}
                >
                  {language
                    ? "EXTENDED HOURS: Café Hammock will be open until 1 AM on New Year’s Eve, Friday, December 31. May the New Year bring you health, wealth and good times!"
                    : "HORARIO EXTENDIDO: Café Hammock estará abierto hasta la 1 AM en la víspera de Año Nuevo, el viernes, 31 de diciembre. ¡Que el Año Nuevo le traiga salud, riqueza y buenos momentos!"}
                </h6>
              ) : null}
              {renderPoiHours(mrgHours.poi.hammock, language)}
              <p>
                {language
                  ? "Enjoy casual dining with a sophisticated flair. Café Hammock serves up lunch & dinner favorites, right in the middle of the gaming action. Affordable prices, tasty dishes and a relaxed ambiance are all on the menu, so stop by and enjoy a delicious meal before or after you game with us."
                  : "Disfrute de una cena informal con un toque sofisticado. Café Hammock sirve los favoritos de almuerzo y cena, justo en medio de la acción del juego. Precios razonables, platos sabrosos y un ambiente relajado están en el menú, así que visítenos y disfrute de una deliciosa comida antes o después de pasar a nuestra sala de juegos."}
              </p>
              <Button
                href="https://mapa-media.s3.amazonaws.com/website/CafeHammock_Menu_Web_2.pdf"
                target="_blank"
                usetheme="contained"
              >
                {language ? "Menu" : "Menú"}
              </Button>{" "}
            </div>
          </GridItem>
          <GridItem md={5}>
            <div className={classes.imageArea}>
              <CustomImageSlider images={imageObj} />
            </div>
          </GridItem>
        </GridContainer>
      </RaisedContainer>
    </React.Fragment>
  );
};

export default CafeHammock;
