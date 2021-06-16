import React, { useContext } from "react";

// Core Components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Typography from "@material-ui/core/Typography";

// My Custom Components
import RaisedContainer from "components/CustomSections/RaisedContainer.js";
import HeroSection from "components/CustomSections/HeroSection.js";
import CustomImageSlider from "components/CustomImageSlider/CustomImageSlider.js";
import Button from "components/CustomButtons/Button.js";

// Images
import bgImage from "assets/img/bg3.jpg";
import image1 from "assets/img/mrg/banquets/Slider_Banquets_1024x642-o27gjfiauxaw8adlauqeuc3m7aorgdyy8killjv7zu.jpg";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/mrg/basicPage.js";

// Context
import { ContactModalContext } from "contexts/ContactFormModalContext.js";
import { ContactFormContext } from "contexts/ContactFormContext.js";
import { useLanguage } from "contexts/languageContext.js";

const useStyles = makeStyles(styles);

const imageArray = [image1];

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: "",
    subHeader: "",
  },
];

const BanquetsCatering = () => {
  const language = useLanguage();
  const classes = useStyles();

  const [showContactModal, setShowContactModal] = useContext(
    ContactModalContext
  );
  const [formValues, setFormValues] = useContext(ContactFormContext);

  const handleClick = () => {
    setFormValues({
      ...formValues,
      inputValues: {
        ...formValues.inputValues,
        ["select"]: "Banquet/Catering",
      },
    });
    setShowContactModal(true);
  };

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>{language ? "Banquets & Catering" : "español"}</h2>
              <p>
                {language
                  ? "Thanks to our top-notch banquet and convention facilities, Miccosukee Resort & Gaming is prepared to create an unforgettable experience for you and your guests. Whether it’s an intimate gathering or a celebration of up-to 1,200 attendees, we accommodate events of all sizes."
                  : "español"}
              </p>

              <p>
                {language
                  ? "From corporate conferences in our executive meeting rooms to large-scale wedding bashes in our banquet hall, our event specialists and culinary team will ensure every one of your guests receives VIP treatment."
                  : "español"}
              </p>
              <p>
                {language
                  ? "Ready to host your next event or meeting at Miccosukee Resort & Gaming? Call us at "
                  : "español "}
                <a href="tel:+13059252555">
                  <Typography variant="inherit" color="primary">
                    305-925-2555
                  </Typography>
                </a>
                .
              </p>
              <Button onClick={handleClick} usetheme="contained">
                {language ? "CONTACT US" : "español"}
              </Button>
            </div>
          </GridItem>
          <GridItem style={{ paddingBottom: "30px" }} md={5}>
            <div className={classes.imageArea}>
              <CustomImageSlider images={imageArray} />
            </div>
          </GridItem>
        </GridContainer>
      </RaisedContainer>
    </React.Fragment>
  );
};

export default BanquetsCatering;
