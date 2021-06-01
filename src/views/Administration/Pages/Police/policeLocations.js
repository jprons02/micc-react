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
import bgImage from "assets/img/bg3.jpg";
import image1 from "assets/img/administration/NewPoliceCar.jpg";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/mrg/basicPage.js";

// pages
import { policePages } from "views/Administration/Pages/Police/policePages.js";

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
              <h2>Police Locations</h2>
              <p>
                <span style={style}>Miami-Dade County</span>
                <br />
                Main Station – Miccosukee Indian Reservation, Tamiami Trail
                (SR-90) and approximately 20 miles west of Krome Avenue (SR-997)
              </p>

              <p>
                <span style={style}>
                  Krome Substation – Miccosukee Resort &amp; Gaming
                </span>
                <br />
                500 SW 177 Ave, Miami, FL 33194
              </p>

              <p>
                <span style={style}>Broward County</span>
                <br />
                Alley Substation – Miccosukee Indian Reservation, I-75 exit 49
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
