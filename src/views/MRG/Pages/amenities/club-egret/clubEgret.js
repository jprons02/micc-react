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
import image1 from "assets/img/mrg/amenities/club-egret/club_egret_01.jpg";
import image2 from "assets/img/mrg/amenities/club-egret/club_egret_02.jpg";
import image3 from "assets/img/mrg/amenities/club-egret/club_egret_03.jpg";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/mrg/basicPage.js";

const useStyles = makeStyles(styles);

const imageArray = [image1, image2, image3];

const sliderContent = [
  {
    id: 1,
    height: "30vh",
    bgImage: bgImage,
    header: "",
    subHeader: "",
  },
];

const ClubEgret = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>Club Egret</h2>
              <h6>
                Monday – Thursday, 12:00 P.M. - 1:00 A.M. <br />
                Friday, 12:00 P.M. - 2:00 A.M. <br />
                Saturday, 9:00 A.M. - 2:00 A.M. <br />
                Sunday, 9:00 A.M. - 1:00A.M. <br />
              </h6>
              <p>
                Club Egret is reserved for children ages 12 and under. <br />
                For more information, please call{" "}
                <a href="tel:+13059252555">
                  <Typography color="inherit" variant="inherit">
                    305-925-2555
                  </Typography>
                </a>
                .
              </p>
              <p>
                <span style={{ fontSize: "80%", fontStyle: "italic" }}>
                  *Hourly rates apply. Minimum one hour.
                </span>
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

export default ClubEgret;