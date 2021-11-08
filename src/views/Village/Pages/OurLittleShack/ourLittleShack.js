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
import bgImage from "assets/media/img/village/Village_Header1.jpg";
import image1 from "assets/media/img/village/OurLittleShack1.jpg";
import image2 from "assets/media/img/village/OurLittleShack2.jpg";
import image3 from "assets/media/img/village/OurLittleShack3.jpg";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/mrg/basicPage.js";

// Services
import { renderPoiHours } from "services/functions/renderPoiHours.js";

// Business info
import { villageHours } from "business_info/hours.js";
import { ourLittleShackMenu } from "business_info/foodMenu.js";

// Context
import { FoodMenuContext } from "contexts/FoodMenuContext.js";
import { useLanguage } from "contexts/languageContext.js";

const useStyles = makeStyles(styles);

//const imageArray = [image1, image2, image3];
const imageObj = [
  { src: image1, alt: "Breakfast" },
  { src: image2, alt: "Salad" },
  { src: image3, alt: "Cheese burger" },
];

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: "",
    subHeader: "",
  },
];

const OurLittleShack = () => {
  const language = useLanguage();
  const classes = useStyles();

  const [showFoodMenu, setShowFoodMenu] = useContext(FoodMenuContext);

  // Close contact modal on mount
  useEffect(() => {
    closeModal(setShowFoodMenu);
  }, []);

  const openModal = (setState) => {
    setState(true);
  };

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
              <h2>Our Little Shack</h2>
              {renderPoiHours(villageHours.poi.ourLittleShack, language)}
              {language ? (
                <p>
                  The Village’s casual eatery has something for everybody!
                  Burgers, fries, alligator bites, shakes and more! Our Little
                  Shack is here for you.
                </p>
              ) : (
                <p>
                  ¡El lugar en el Pueblo que tiene algo para todos!
                  Hamburguesas, papas fritas, nuggets de caimán, batidos y mucho
                  mas.
                </p>
              )}
              <div style={{ marginBottom: "5px" }}>
                <i
                  style={{ marginRight: "8px" }}
                  className="fab fa-cc-visa fa-lg"
                ></i>
                <i
                  style={{ marginRight: "8px" }}
                  className="fab fa-cc-mastercard fa-lg"
                ></i>
                <i
                  style={{ marginRight: "8px" }}
                  className="fab fa-cc-amex fa-lg"
                ></i>
              </div>
              <Button
                onClick={() => openModal(setShowFoodMenu)}
                usetheme="contained"
              >
                {language ? "Menu" : "Menú"}
              </Button>
            </div>
          </GridItem>
          <GridItem md={5}>
            <div className={classes.imageArea}>
              <CustomImageSlider images={imageObj} />
            </div>
          </GridItem>
        </GridContainer>
      </RaisedContainer>
      <CustomFoodMenuModal
        showModal={showFoodMenu}
        closeModal={() => closeModal(setShowFoodMenu)}
        menu={ourLittleShackMenu}
        title="Our Little Shack Menu"
      />
    </React.Fragment>
  );
};

export default OurLittleShack;
