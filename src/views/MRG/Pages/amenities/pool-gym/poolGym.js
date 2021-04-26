import React from "react";

// Core Components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// My Custom Components
import RaisedContainer from "components/CustomSections/RaisedContainer.js";
import HeroSection from "components/CustomSections/HeroSection.js";
import CustomImageSlider from "components/CustomImageSlider/CustomImageSlider.js";

// Images
import bgImage from "assets/img/bg3.jpg";
import image1 from "assets/img/mrg/amenities/pool-gym/pool.jpg";
import image2 from "assets/img/mrg/amenities/pool-gym/pool_2.jpg";
import image3 from "assets/img/mrg/amenities/pool-gym/gym2.jpg";
import image4 from "assets/img/mrg/amenities/pool-gym/gym.jpg";
import image5 from "assets/img/mrg/amenities/pool-gym/courtyard.jpg";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/mrg/basicPage.js";

const useStyles = makeStyles(styles);

const imageArray = [image1, image2, image3, image4, image5];

const sliderContent = [
  {
    id: 1,
    height: "30vh",
    bgImage: bgImage,
    header: "",
    subHeader: "",
  },
];

const PoolGym = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>Pool &amp; Fitness Center</h2>
              <h6>Daily, 7:00 a.m. – 11:00 p.m.</h6>
              <p>
                Cool off in our indoor pool or take a relaxing dip in our
                jacuzzi. Maybe unwind in our sauna. Enjoy South Florida’s
                gorgeous weather on our outdoor patio. Whether you’re soaking up
                the sun or cooling off under the serene shadow of one of our
                chickees, our outdoor patio is the perfect place to relax all
                year round.
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

export default PoolGym;
