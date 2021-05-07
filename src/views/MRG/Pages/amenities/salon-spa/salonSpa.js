import React from "react";

// Core Components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Typography from "@material-ui/core/Typography";

// My Custom Components
import RaisedContainer from "components/CustomSections/RaisedContainer.js";
import HeroSection from "components/CustomSections/HeroSection.js";
import CustomImageSlider from "components/CustomImageSlider/CustomImageSlider.js";

// Images
import bgImage from "assets/img/bg3.jpg";
import image1 from "assets/img/mrg/amenities/salon-spa/Aromatherapy_1024x642.jpeg";
import image2 from "assets/img/mrg/amenities/salon-spa/Facial_1024x642.jpeg";
import image3 from "assets/img/mrg/amenities/salon-spa/HairCare_1024x642.jpeg";
import image4 from "assets/img/mrg/amenities/salon-spa/Pedicure_1024x642.jpeg";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/mrg/basicPage.js";

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

const SalonSpa = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>Pa-Hay Okee Salon &amp; Spa</h2>
              <h6>
                Monday – Saturday, 10 A.M. – 8 P.M. <br />
                Sunday, 10 A.M. – 6 P.M.
              </h6>
              <p>
                Call{" "}
                <a href="tel:+13059252557">
                  <Typography variant="inherit" color="primary">
                    305-925-2557
                  </Typography>
                </a>{" "}
                and book your appointment today!
              </p>
              <Button
                href="https://mrg.miccosukee.com/wp-content/uploads/2019/11/SpaBrochure_Trifold.pdf"
                target="_blank"
                usetheme="contained"
              >
                SPA MENU
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

export default SalonSpa;
