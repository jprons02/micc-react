import React, { useContext, useEffect } from "react";

// Core Components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

// My Custom Components
import RaisedContainer from "components/CustomSections/RaisedContainer.js";
import HeroSection from "components/CustomSections/HeroSection.js";
import CustomImageSlider from "components/CustomImageSlider/CustomImageSlider.js";
import CustomFoodMenuModal from "components/CustomModal/CustomFoodMenuModal/CustomFoodMenuModal.js";

// Images
import bgImage from "assets/img/mrg/MRG_Header1.jpg";
import image1 from "assets/img/mrg/dining/cypress-lounge/cypress_01.jpeg";
import image2 from "assets/img/mrg/dining/cypress-lounge/cypress_02.jpeg";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/mrg/basicPage.js";

// BusinessInfo
import { mrgHours } from "business_info/hours.js";
import { sawgrassCafeMenu } from "business_info/foodMenu.js";

// Services
import { renderPoiHours } from "services/renderPoiHours.js";

// Context
import { useLanguage } from "contexts/languageContext.js";
import { FoodMenuContext } from "contexts/FoodMenuContext.js";

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

const SawgrassCafe = () => {
  const language = useLanguage();
  const classes = useStyles();

  const [showFoodMenu, setShowFoodMenu] = useContext(FoodMenuContext);

  // Close contact modal on mount
  useEffect(() => {
    closeModal(setShowFoodMenu);
  }, []);

  const closeModal = (setState) => {
    setState(false);
  };

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>Sawgrass Cafe</h2>
              {renderPoiHours(mrgHours.poi.sawgrassCafe, language)}
              <p>
                {language
                  ? "The Cypress Lounge is home to daily beer specials and Monday Night Football, caliente Miami HEAT action and more! Enjoy sporting events year round on our large screen TVs in the middle of South Florida’s hottest gaming action."
                  : "En Cypress Lounge tenemos especiales de cerveza todos los días, además de Fútbol Americano los lunes en la noche, toda la acción caliente de los Miami HEAT, ¡y mucho más! Disfrute de eventos deportivos todo el año en nuestros televisores de pantalla grande justo en el medio de toda la acción del casino."}
              </p>
              <Button
                onClick={() => setShowFoodMenu(true)}
                usetheme="contained"
              >
                {language ? "MENU" : "MENÚ"}
              </Button>{" "}
            </div>
          </GridItem>
          <GridItem md={5}>
            <div className={classes.imageArea}>
              <CustomImageSlider images={imageArray} />
            </div>
          </GridItem>
        </GridContainer>
      </RaisedContainer>
      <CustomFoodMenuModal
        showModal={showFoodMenu}
        closeModal={() => closeModal(setShowFoodMenu)}
        menu={sawgrassCafeMenu}
        title="Sawgrass Cafe Menu"
      />
    </React.Fragment>
  );
};

export default SawgrassCafe;
