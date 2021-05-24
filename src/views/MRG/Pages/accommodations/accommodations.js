import React, { useContext } from "react";

// Core Components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Typography from "@material-ui/core/Typography";
import Button from "components/CustomButtons/Button.js";

// My Custom Components
import RaisedContainer from "components/CustomSections/RaisedContainer.js";
import HeroSection from "components/CustomSections/HeroSection.js";
import CustomImageSlider from "components/CustomImageSlider/CustomImageSlider.js";

// Images
import bgImage from "assets/img/bg3.jpg";
import image1 from "assets/img/mrg/accommodations/IMG_9145.jpg";
import image2 from "assets/img/mrg/accommodations/IMG_5796.jpg";
import image3 from "assets/img/mrg/accommodations/IMG_9241.jpg";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/mrg/basicPage.js";

// Context
import { BookRoomContext } from "contexts/BookRoomContext.js";

// BusinessInfo
import { mrgHours } from "business_info/hours.js";

// Services
import { renderPoiHours } from "services/renderPoiHours.js";

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

const Accommodations = () => {
  const classes = useStyles();

  const [showBookRoomModal, setShowBookRoomModal] = useContext(BookRoomContext);

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>Accommodations</h2>
              {renderPoiHours(mrgHours.poi.accommodations)}
              <p>
                Standing at the edge of the magnificent Florida Everglades, the
                Resort boasts rooms designed with comfort as the number one
                priority as well as amazing views of the surrounding ecosystem.
              </p>
              <p>
                In addition to specific room amenities, all of our rooms
                conveniently feature Wi- Fi, premium cable programming,
                pay-per-view, in-room safe, flat screen TVs and a lot more.
              </p>
              <p>
                Executive and Deluxe-level rooms are available with upgraded
                amenities and services.
              </p>
              <Button
                onClick={() => setShowBookRoomModal(true)}
                usetheme="contained"
              >
                Book A Room
              </Button>
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

export default Accommodations;
