import React from "react";

// Core Components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Typography from "@material-ui/core/Typography";

// My Custom Components
import RaisedContainer from "components/CustomSections/RaisedContainer.js";
import HeroSection from "components/CustomSections/HeroSection.js";
import CustomImageSlider from "components/CustomImageSlider/CustomImageSlider.js";

// Images
import bgImage from "assets/img/bg3.jpg";
import image1 from "assets/img/golf/courses/Golf_2.jpg";
import image2 from "assets/img/golf/courses/Golf_3-1.jpg";
import image3 from "assets/img/golf/courses/Golf_4.jpg";
import image4 from "assets/img/golf/courses/Golf_5-1.jpg";

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

const Courses = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>History</h2>
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

export default Courses;
