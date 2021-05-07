import React from "react";

// Core Components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// My Custom Components
import RaisedContainer from "components/CustomSections/RaisedContainer.js";
import HeroSection from "components/CustomSections/HeroSection.js";
import CustomImageSlider from "components/CustomImageSlider/CustomImageSlider.js";
import Button from "components/CustomButtons/Button.js";

// Images
import bgImage from "assets/img/bg3.jpg";
import image1 from "assets/img/mrg/gaming/bingo/BINGO_SLIDE1.jpeg";
import image2 from "assets/img/mrg/gaming/bingo/BINGO_SLIDE2.jpeg";
import image3 from "assets/img/mrg/gaming/bingo/BINGO_SLIDE3.jpeg";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/mrg/basicPage.js";

const useStyles = makeStyles(styles);

const imageArray = [image1, image2, image3];

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: "",
    subHeader: "",
  },
];

const Bingo = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>Bingo</h2>
              <p>
                A South Florida staple since 1990, Miccosukee Resort &amp;
                Gaming’s Bingo Hall is the high-stakes bingo room to try your
                luck in the classic game of chance! With high payouts and plenty
                of rewards through our Miccosukee One Rewards Program, our High
                Stakes Bingo pays to play! Regardless of experience, it’s
                perfect for single players, couples and large groups.
              </p>
              <p>
                The Sawgrass Café is right smack in the middle of the bingo
                action! Hot entrées, cool salads and delightful finger
                foods—whether it’s before, during or after the numbers are
                called—this spot has you covered. Sawgrass Café hours are
                Sunday-Thursday, 11 AM – 1 AM, and Fridays-Saturdays, 11 AM – 2
                AM.
              </p>
              <Button
                href="https://mrg.miccosukee.com/wp-content/uploads/2021/03/BINGO-PROGRAM-APPROVED_WEB.pdf"
                target="_blank"
                usetheme="contained"
              >
                VIEW PROGRAM
              </Button>
              <div style={{ marginTop: "25px" }}>
                <h6>Bingo will operate on Thursday, Friday and Saturday</h6>
                <ul>
                  <li>Warm-ups begin at 6:30pm</li>
                  <li>Regular session begins at 7:15pm</li>
                  <li>Sales begin at 4:15pm</li>
                </ul>
                <h6>New safety measures:</h6>
                <ul>
                  <li>50% capacity</li>
                  <li>
                    Patrons will be seated one seat apart from each other along
                    with a shield guard placed directly in the middle of the
                    table on all tables
                  </li>
                  <li>
                    All gaming electronic devices will be sanitized prior to and
                    after each use
                  </li>
                </ul>
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

export default Bingo;

/*
<h5>Bingo Schedule</h5>
<ul>
 	<li>Bingo will operate on Thursday, Friday and Saturday
<ul>
 	<li>Warm-ups begin at 6:30pm</li>
 	<li>Regular session begins at 7:15pm</li>
 	<li>Sales begin at 4:15pm</li>
</ul>
</li>
 	<li>New safety measures:
<ul>
 	<li>50% capacity</li>
 	<li>Patrons will be seated one seat apart from each other along with a shield guard placed directly in the middle of the table on all tables</li>
 	<li>All gaming electronic devices will be sanitized prior to and after each use</li>
</ul>
</li>
</ul>
*/
