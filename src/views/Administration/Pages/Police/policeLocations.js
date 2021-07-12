import React from "react";

// Core Components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// My Custom Components
import RaisedContainer from "components/CustomSections/RaisedContainer.js";
import HeroSection from "components/CustomSections/HeroSection.js";
import CustomImageSlider from "components/CustomImageSlider/CustomImageSlider.js";
import CustomStandardPagination from "components/CustomPagination/CustomStandardPagination.js";

// Images
import bgImage from "assets/img/administration/Everglades_Header.jpg";
import image1 from "assets/img/administration/NewPoliceCar.jpg";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/mrg/basicPage.js";

// pages
import { policePages } from "views/Administration/Pages/Police/policePages.js";

// Context
import { useLanguage } from "contexts/languageContext";

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

const PoliceLocations = () => {
  const language = useLanguage();
  const classes = useStyles();
  const style = { fontWeight: "500" };

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <CustomStandardPagination
          customStyle={{ marginBottom: "20px" }}
          pages={policePages}
        />
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>
                {language ? "Police Locations" : "Ubicación de las Comisarías"}
              </h2>
              <p>
                <span style={style}>
                  {language ? "Miami-Dade County" : "Condado de Miami-Dade"}
                </span>
                <br />
                {language
                  ? "Main Station – Miccosukee Indian Reservation, Tamiami Trail (SR-90) and approximately 20 miles west of Krome Avenue (SR-997)"
                  : "Estación Principal – Reserva Indígena Miccosukee, Tamiami Trail (SR-90) aproximadamente a 20 millas al oeste de la Avenida Krome (SR-997)"}
              </p>

              <p>
                <span style={style}>
                  {language
                    ? "Krome Substation – Miccosukee Resort & Gaming"
                    : "Subestación de Krome – Miccosukee Resort & Gaming"}
                </span>
                <br />
                500 SW 177 Ave, Miami, FL 33194
              </p>

              <p>
                <span style={style}>
                  {language ? "Broward County" : "Condado de Broward"}
                </span>
                <br />
                {language
                  ? "Alley Substation – Miccosukee Indian Reservation, I-75 exit 49"
                  : "Subestación de Alley – Reserva Indígena Miccosukee, I-75 salida 49"}
              </p>
            </div>
          </GridItem>
          <GridItem style={{ marginBottom: "30px" }} md={5}>
            <div className={classes.imageArea}>
              <CustomImageSlider images={imageArray} />
            </div>
          </GridItem>
        </GridContainer>
      </RaisedContainer>
    </React.Fragment>
  );
};

export default PoliceLocations;
