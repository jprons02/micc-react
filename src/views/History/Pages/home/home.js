import React from "react";

// Core Components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// My Custom Components
import RaisedContainer from "components/CustomSections/RaisedContainer.js";
import HeroSection from "components/CustomSections/HeroSection.js";
import CustomImageSlider from "components/CustomImageSlider/CustomImageSlider.js";

// Images
import bgImage from "assets/img/history/Header_Tribe_1500x354-e1551386527765.jpg";
import image1 from "assets/img/history/history1.jpeg";
import image2 from "assets/img/history/car01.jpg";
import image3 from "assets/img/history/imgHistoryBoy1.jpeg";
import image4 from "assets/img/history/imgHistoryCanoe1.jpeg";

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
                The Tribe has a proud history, which predates Columbus. The
                Miccosukee Indians were originally part of the Creek Nation, and
                then migrated to Florida before it became part of the United
                States.
              </p>

              <p>
                During the Indian Wars of the 1800s, most of the Miccosukee were
                removed to the West, but about 100, mostly Mikasuki-speaking
                Creeks, never surrendered and hid out in the Everglades. Present
                Tribal members now number over 600 and are direct descendants of
                those who eluded capture.
              </p>

              <p>
                To survive in this new environment, the Miccosukee adapted to
                living in small groups in temporary “hammock style” camps spread
                throughout the Everglades’ vast river of grass. In this fashion,
                they stayed to themselves for about 100 years, resisting efforts
                to become assimilated. Then, after the Tamiami Trail highway was
                built in 1928, the Tribe began to accept New World concepts.
              </p>

              <p>
                To ensure that the federal government would formally recognize
                the Miccosukee Tribe, Buffalo Tiger, an esteemed member of the
                Tribe, led a group to Cuba in 1959, where they asked Fidel
                Castro for, and were granted, international recognition as a
                sovereign country within the United States.
              </p>

              <p>
                Following this, on January 11, 1962, the U.S. Secretary of the
                Interior approved the Miccosukee Constitution and the Tribe was
                officially recognized as the Miccosukee Tribe of Indians of
                Florida. This legally established the Miccosukee’s tribal
                existence and their sovereign, domestic dependent nation status
                with the United States Government.
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
