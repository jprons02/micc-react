import React from "react";

// material-ui core components
import { Hidden } from "@material-ui/core";

// Core Components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Typography from "@material-ui/core/Typography";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

// My Custom Components
import RaisedContainer from "components/CustomSections/RaisedContainer.js";
import HeroSection from "components/CustomSections/HeroSection.js";
import CustomImageSlider from "components/CustomImageSlider/CustomImageSlider.js";
import CustomHorizontalTabs from "components/CustomTabs/CustomHorizontalTabs.js";
import CustomVerticalTabs from "components/CustomTabs/CustomVerticalTabs.js";

// Images
import bgImage from "assets/img/bg3.jpg";
import image1 from "assets/img/mrg/dining/international-buffet/HotDish_1024x642.jpeg";
import image2 from "assets/img/mrg/dining/international-buffet/Paella_1024x642.jpeg";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/mrg/basicPage.js";
import { mrgColor } from "themes/colors.js";

const useStyles = makeStyles(styles);

const imageArray = [image1, image2];

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: "",
    subHeader: "",
  },
];

const InternationalBuffet = () => {
  const classes = useStyles();

  const tabContent = [
    {
      title: "Monday",
      text: () => {
        return (
          <div>
            <h4>Latin</h4>
            <hr />
            <div>
              <h6>À la carte Breakfast: 6:00 A.M. – 11:00 A.M.</h6>
            </div>
            <div>
              <h6>Lunch: 12:00 P.M. – 4:00 P.M.</h6>
              <ul style={{ fontSize: "12px" }}>
                <li>Adults $16.16</li>
                <li>Kids (ages 6 – 12) $8.08</li>
                <li>Kids 5 and under FREE</li>
              </ul>
            </div>
            <div>
              <h6>Dinner: 6:00 P.M. – 10:00 P.M. </h6>
              <ul style={{ fontSize: "12px" }}>
                <li>Adults $17.78</li>
                <li>Kids (ages 6 – 12) $8.89</li>
                <li>Kids 5 and under FREE</li>
              </ul>
            </div>
          </div>
        );
      },
    },
    {
      title: "Tuesday",
      text: () => {
        return (
          <div>
            <h4>Mexican</h4>
            <hr />
            <div>
              <h6>À la carte Breakfast: 6:00 A.M. – 11:00 A.M.</h6>
            </div>
            <div>
              <h6>Lunch: 12:00 P.M. – 4:00 P.M.</h6>
              <ul style={{ fontSize: "12px" }}>
                <li>Adults $16.16</li>
                <li>Kids (ages 6 – 12) $8.08</li>
                <li>Kids 5 and under FREE</li>
              </ul>
            </div>
            <div>
              <h6>Dinner: 6:00 P.M. – 10:00 P.M. </h6>
              <ul style={{ fontSize: "12px" }}>
                <li>Adults $17.78</li>
                <li>Kids (ages 6 – 12) $8.89</li>
                <li>Kids 5 and under FREE</li>
              </ul>
            </div>
          </div>
        );
      },
    },
    {
      title: "Wednesday",
      text: () => {
        return (
          <div>
            <h4>Havana Nights</h4>
            <hr />
            <div>
              <h6>À la carte Breakfast: 6:00 A.M. – 11:00 A.M.</h6>
            </div>
            <div>
              <h6>Lunch: 12:00 P.M. – 4:00 P.M.</h6>
              <ul style={{ fontSize: "12px" }}>
                <li>Adults $16.16</li>
                <li>Kids (ages 6 – 12) $8.08</li>
                <li>Kids 5 and under FREE</li>
              </ul>
            </div>
            <div>
              <h6>Dinner: 6:00 P.M. – 10:00 P.M. </h6>
              <ul style={{ fontSize: "12px" }}>
                <li>Adults $17.78</li>
                <li>Kids (ages 6 – 12) $8.89</li>
                <li>Kids 5 and under FREE</li>
              </ul>
            </div>
          </div>
        );
      },
    },
    {
      title: "Thursday",
      text: () => {
        return (
          <div>
            <h4>Italian</h4>
            <hr />
            <div>
              <h6>À la carte Breakfast: 6:00 A.M. – 11:00 A.M.</h6>
            </div>
            <div>
              <h6>Lunch: 12:00 P.M. – 4:00 P.M.</h6>
              <ul style={{ fontSize: "12px" }}>
                <li>Adults $16.16</li>
                <li>Kids (ages 6 – 12) $8.08</li>
                <li>Kids 5 and under FREE</li>
              </ul>
            </div>
            <div>
              <h6>Dinner: 6:00 P.M. – 10:00 P.M. </h6>
              <ul style={{ fontSize: "12px" }}>
                <li>Adults $17.78</li>
                <li>Kids (ages 6 – 12) $8.89</li>
                <li>Kids 5 and under FREE</li>
              </ul>
            </div>
          </div>
        );
      },
    },
    {
      title: "Friday",
      text: () => {
        return (
          <div>
            <h4>Spanish Fiesta</h4>
            <hr />
            <div>
              <h6>Breakfast 6:00 A.M. – 10:00 A.M.</h6>
              <ul style={{ fontSize: "12px" }}>
                <li>Adults $14.55</li>
                <li>Kids (ages 6 – 12) $7.28</li>
                <li>Kids 5 and under FREE</li>
              </ul>
            </div>
            <div>
              <h6>Lunch: 12:00 P.M. – 4:00 P.M.</h6>
              <ul style={{ fontSize: "12px" }}>
                <li>Adults $16.16</li>
                <li>Kids (ages 6 – 12) $8.08</li>
                <li>Kids 5 and under FREE</li>
              </ul>
            </div>
            <div>
              <h6>Dinner: 6:00 P.M. – 10:00 P.M. </h6>
              <ul style={{ fontSize: "12px" }}>
                <li>Adults $17.78</li>
                <li>Kids (ages 6 – 12) $8.89</li>
                <li>Kids 5 and under FREE</li>
              </ul>
            </div>
          </div>
        );
      },
    },
    {
      title: "Saturday",
      text: () => {
        return (
          <div>
            <h4>B.B.Q.</h4>
            <hr />
            <div>
              <h6>Breakfast 6:00 A.M. – 11:00 A.M.</h6>
              <ul style={{ fontSize: "12px" }}>
                <li>Adults $14.55</li>
                <li>Kids (ages 6 – 12) $7.28</li>
                <li>Kids 5 and under FREE</li>
              </ul>
            </div>
            <div>
              <h6>Lunch: 12:00 P.M. – 4:00 P.M.</h6>
              <ul style={{ fontSize: "12px" }}>
                <li>Adults $16.16</li>
                <li>Kids (ages 6 – 12) $8.08</li>
                <li>Kids 5 and under FREE</li>
              </ul>
            </div>
            <div>
              <h6>Dinner: 6:00 P.M. – 10:00 P.M. </h6>
              <ul style={{ fontSize: "12px" }}>
                <li>Adults $17.78</li>
                <li>Kids (ages 6 – 12) $8.89</li>
                <li>Kids 5 and under FREE</li>
              </ul>
            </div>
          </div>
        );
      },
    },
    {
      title: "Sunday",
      text: () => {
        return (
          <div>
            <h4>Buffet Across America</h4>
            <hr />
            <div>
              <h6>Breakfast 6:00 A.M. – 11:00 A.M.</h6>
              <ul style={{ fontSize: "12px" }}>
                <li>Adults $14.55</li>
                <li>Kids (ages 6 – 12) $7.28</li>
                <li>Kids 5 and under FREE</li>
              </ul>
            </div>
            <div>
              <h6>Lunch: 12:00 P.M. – 4:00 P.M.</h6>
              <ul style={{ fontSize: "12px" }}>
                <li>Adults $16.16</li>
                <li>Kids (ages 6 – 12) $8.08</li>
                <li>Kids 5 and under FREE</li>
              </ul>
            </div>
            <div>
              <h6>Dinner: 6:00 P.M. – 10:00 P.M. </h6>
              <ul style={{ fontSize: "12px" }}>
                <li>Adults $17.78</li>
                <li>Kids (ages 6 – 12) $8.89</li>
                <li>Kids 5 and under FREE</li>
              </ul>
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>Empeeke Aaweeke International Buffet</h2>
              <p>
                With a killer à la carte breakfast menu and an international
                buffet, you are sure to enjoy different cuisines everyday! Let
                your taste buds travel the world from the comfort of our home.
                Empeeke Aaweeke is South Florida’s most compelling buffet
                destination.
              </p>
              <p>
                <span style={{ fontSize: "80%", fontStyle: "italic" }}>
                  *Prices do not include gratuity and taxes.
                </span>
              </p>
              <div style={{ marginTop: "30px", marginBottom: "20px" }}>
                <Hidden mdUp>
                  <CustomHorizontalTabs tabContent={tabContent} />
                </Hidden>
                <Hidden smDown>
                  <CustomVerticalTabs
                    customboxstyle={{
                      paddingTop: "0px",
                      height: "224px",
                      overflow: "auto",
                    }}
                    tabContent={tabContent}
                  />
                </Hidden>
              </div>
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

export default InternationalBuffet;
