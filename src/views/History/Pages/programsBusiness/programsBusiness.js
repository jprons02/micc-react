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

const ProgramsBusiness = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>Programs &amp; Business</h2>
              <h4>Developing independence</h4>
              <p>
                On May 4, 1971, officers of the Miccosukee Corporation, acting
                for the Miccosukee Tribe, signed a contract with the BIA
                authorizing the Corporation to operate all programs and services
                provided for the Miccosukee Community and formerly administered
                by the BIA. The Tribe’s intent in negotiating this matter was
                clear; the people wished to decide their own fate and gradually
                develop total independence.
              </p>

              <p>
                The Miccosukee Tribe now operates a Clinic; Police Department;
                Court System; Day Care Center; Senior Center; Community Action
                Agency and an Educational System ranging from the Head Start
                Pre-School Program through Senior High School, Adult, Vocational
                and Higher Education Programs and other Social Services. These
                programs incorporate both the traditional Miccosukee Indian ways
                and non-Indian ways into their system and are all located on the
                Tamiami Trail Reservation, where the Miccosukee community
                resides.
              </p>

              <p>
                In addition, the Miccosukee Tribe owns and operates a Gift Shop;
                General Store; Service Station and Indian Village on the Tamiami
                Trail Reservation; an Indian Gaming Facility and Tobacco Shop on
                the Krome Avenue Reservation; and a full-service Gas Station and
                Service Plaza on Alligator Alley Reservation.
              </p>
              <h4>Population</h4>
              <p>
                Membership in the Miccosukee Tribe of Indians of Florida is open
                to individuals who have Miccosukee mothers and are not enrolled
                in any other Tribe. The Miccosukee Service Area is composed of
                Tribal members and their families, independent Miccosukees,
                Seminoles and other Indian families residing along the Tamiami
                Trail from Miami to Naples. The total population of the
                Miccosukee Service area is about 640.
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

export default ProgramsBusiness;
