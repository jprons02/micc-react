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
import image1 from "assets/img/village/GiftShop1.jpg";
import image2 from "assets/img/village/GiftShop2.jpg";
import image3 from "assets/img/village/GiftShop3.jpg";
import image4 from "assets/img/village/GiftShop4.jpg";

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

const imageArray = [image1, image2, image3, image4];

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: "",
    subHeader: "",
  },
];

const giftShopHours = villageHours.poi.giftShop;

const GiftShop = () => {
  const language = useLanguage();
  const classes = useStyles();

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>Gift Shop</h2>
              {renderPoiHours(giftShopHours, language)}
              {language ? (
                <p>
                  Visit the Miccosukee Indian Gift Shop to find crafts created
                  by natives around the world, and special gifts made by our
                  Miccosukee Tribe members.
                </p>
              ) : (
                <p>
                  Visite el Miccosukee Indian Gift shop y encuentre artesanías
                  creadas por nativos alrededor del mundo, y regalos especiales
                  hechos por miembros de nuestra Tribu Miccosukee.
                </p>
              )}
              {/*
              <Button
                href="https://google.com"
                target="_blank"
                usetheme="contained"
              >
                {language ? "Online Store" : "Tienda Virtual"}
              </Button>
              */}
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

export default GiftShop;
