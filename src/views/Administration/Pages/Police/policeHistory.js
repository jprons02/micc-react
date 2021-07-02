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

// Pages
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

const History = () => {
  const classes = useStyles();

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
              <h2>Police History</h2>
              <p>
                Miccosukee Police Department was established in 1976. Each
                Miccosukee Police officer, upon completing all of the State of
                Florida Law Enforcement Officer certification requirements, is
                commissioned as a United States Dept. of Interior, Bureau of
                Indian Affairs, Special Deputy Officer. This commission allows
                the police officer to enforce all of the U.S. Title 18 crimes on
                the Indian Reservation.
              </p>

              <p>
                Each Miccosukee police officer is also commissioned by the
                National Park Service and U.S. Fish and Wildlife Service. All of
                these commissions allow the police officer to make federal
                arrests, within the jurisdiction of the Miccosukee Tribe of
                Indians of Florida.
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

export default History;
