import React, { useContext } from "react";

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
import image1 from "assets/media/img/mrg/accommodations/IMG_9145.jpg";
import image2 from "assets/media/img/mrg/accommodations/IMG_5796.jpg";
import image3 from "assets/media/img/mrg/accommodations/IMG_9241.jpg";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/mrg/basicPage.js";

// Context
import { BookRoomContext } from "contexts/BookRoomContext.js";
import { useLanguage } from "contexts/languageContext.js";

// BusinessInfo
import { mrgHours } from "business_info/hours.js";

// Services
import { renderPoiHours } from "services/functions/renderPoiHours.js";
import { isRunning } from "services/functions/scheduleThis";

const useStyles = makeStyles(styles);

//const imageArray = [image1, image2, image3];
const imageObj = [
  { src: image1, alt: "Bedroom 1" },
  { src: image2, alt: "Bedroom 2" },
  { src: image3, alt: "Bedroom 3" },
];

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: "",
    subHeader: "",
  },
];

const Accommodations = () => {
  const language = useLanguage();
  const classes = useStyles();

  const [showBookRoomModal, setShowBookRoomModal] = useContext(BookRoomContext);

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>{language ? "Accommodations" : "Habitaciones"}</h2>
              {/*renderPoiHours(mrgHours.poi.accommodations, language)*/}
              {isRunning([2021, 12, 22]) ? null : (
                <h6>
                  {language
                    ? "Grand reopening of our hotel on Wednesday, December 22! Guests must be 18 and over to enter our premises. We are delighted to welcome you back! Questions? Please call 305-925-2555."
                    : "¡Gran reapertura de nuestro hotel el miércoles, 22 de diciembre! Los huéspedes deben tener 18 años o más para ingresar a nuestras instalaciones. ¡Estamos encantados de darles la bienvenida nuevamente! ¿Preguntas? Llame al 305-925-2555."}
                </h6>
              )}

              <p>
                {language
                  ? "Standing at the edge of the magnificent Florida Everglades, the Resort boasts rooms designed with comfort as the number one priority as well as amazing views of the surrounding ecosystem."
                  : "Localizado en el corazón de los Everglades de la Florida, el Resort tiene habitaciones diseñadas con su comodidad como prioridad número uno, además de increíbles vistas del ecosistema a su alrededor."}
              </p>
              <p>
                {language
                  ? "In addition to specific room amenities, all of our rooms conveniently feature Wi- Fi, premium cable programming, pay-per-view, in-room safe, flat screen TVs and a lot more."
                  : "Todas nuestras habitaciones ofrecen Wi-Fi, canales de cable, Pay-Per-View, una caja fuerte, televisiones de pantalla plana y mucho más."}
              </p>
              <p>
                {language
                  ? "Executive and Deluxe-level rooms are available with upgraded amenities and services."
                  : "Habitaciones Ejecutivas y de nivel Deluxe están disponibles con comodidades y servicios adicionales."}
              </p>
              {
                <Button
                  onClick={() => setShowBookRoomModal(true)}
                  usetheme="contained"
                >
                  {language ? "Book A Room" : "Reservar una Habitación"}
                </Button>
              }
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

export default Accommodations;
