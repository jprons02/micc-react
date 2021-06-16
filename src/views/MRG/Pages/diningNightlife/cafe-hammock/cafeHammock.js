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
import image1 from "assets/img/mrg/dining/cafe-hammock/CafeHammock_Interior.jpeg";
import image2 from "assets/img/mrg/dining/cafe-hammock/CafeHammock_Drinks.jpeg";
import image3 from "assets/img/mrg/dining/cafe-hammock/CafeHammock_SteakLobster.jpeg";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/mrg/basicPage.js";

// BusinessInfo
import { mrgHours } from "business_info/hours.js";

// Services
import { renderPoiHours } from "services/renderPoiHours.js";

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
              {renderPoiHours(mrgHours.poi.hammock, language)}
              <p>
                {language
                  ? "Home of the world famous Florida Lobster and Steak special, Café Hammock offers local and continental favorites. From Bahamian conch fritters and sautéed alligator medallions to salads, filet mignon and pastas to Latin staples like grilled palomilla; this casual spot is right in the middle of the gaming action."
                  : "Hogar del mundialmente reconocido especial de langosta y churrasco, Café Hammock ofrece los platos favoritos locales y continentales. Desde los buñuelos de caracol de las Bahamas y medallones de cocodrilo salteados, hasta ensaladas, filete mignon, pastas, y platos típicos latinos como el bistec de palomilla; este restaurante casual está justo en el centro de la acción del casino."}
              </p>
              <Button
                href="https://mrg.miccosukee.com/wp-content/uploads/2019/05/CafeHammock_Menu.pdf"
                target="_blank"
                usetheme="contained"
              >
                {language ? "Menu" : "Menú"}
              </Button>{" "}
              <Button
                href="https://mrg.miccosukee.com/wp-content/uploads/2019/05/CafeHammock_WineMenu.pdf"
                target="_blank"
                usetheme="contained"
              >
                {language ? "Wine Menu" : "Carta De Vinos"}
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

export default CafeHammock;
