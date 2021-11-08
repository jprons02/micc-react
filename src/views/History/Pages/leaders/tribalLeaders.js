import React from "react";

// Core Components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// My Custom Components
import RaisedContainer from "components/CustomSections/RaisedContainer.js";
import HeroSection from "components/CustomSections/HeroSection.js";
import CustomImageSlider from "components/CustomImageSlider/CustomImageSlider.js";

// Images
import bgImage from "assets/media/img/history/Header_Tribe_1500x354-e1551386527765.jpg";
import image1 from "assets/media/img/history/ImgLeadersBillyCypress-no6similp2b6jehl4s2ut96cx29wk5zhovimowr540.jpg";
import image2 from "assets/media/img/history/AsstChairman_LucasOsceola.jpg";
import image3 from "assets/media/img/history/Treasurer_KennyCypress.jpg";
import image4 from "assets/media/img/history/imgLeadersTalbert-no6sixsnz2qmeq17awydn6bw1oqb4j89qfcgg8af1c.jpg";
import image5 from "assets/media/img/history/imgLeadersPetties-no6sis5mu2iwh29e7uim87r4hdi3uclvpnfjkkis2o.jpg";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/mrg/basicPage.js";

// Context
import { useLanguage } from "contexts/languageContext";

const useStyles = makeStyles(styles);

const imageWithCaptions = [
  {
    src: image1,
    caption: "Billy Cypress, Chairman",
    alt: "Billy Cypress, Chairman",
  },
  {
    src: image2,
    caption: "Lucas Osceola, Assistant Chairman",
    alt: "Lucas Osceola, Assistant Chairman",
  },
  {
    src: image3,
    caption: "Kenneth Cypress, Treasurer",
    alt: "Kenneth Cypress, Treasurer",
  },
  {
    src: image4,
    caption: "Talbert Cypress, Secretary",
    alt: "Talbert Cypress, Secretary",
  },
  {
    src: image5,
    caption: "Petties Osceola, Jr., Lawmaker",
    alt: "Petties Osceola, Jr., Lawmaker",
  },
];

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: "",
    subHeader: "",
  },
];

const TribalLeaders = () => {
  const language = useLanguage();
  const classes = useStyles();

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>{language ? "Tribal Leaders" : "Líderes Tribales"}</h2>
              {language ? (
                <React.Fragment>
                  <p>
                    The responsibilities of the General Council consist of the
                    development and management of resources and the day-to-day
                    business activities of the Tribe including those involving
                    membership, government, law and order, education, welfare,
                    recreation, and fiscal disbursement. This group is also
                    known as the Business Council. It is a combination of
                    traditional tribal government and modern management that
                    forms the organizational structure of the present-day
                    Miccosukee Tribe.​
                  </p>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <p>
                    Las responsabilidades del Consejo General consisten en el
                    desarrollo y administración de recursos y actividades
                    comerciales diarias de la Tribu, incluyendo las que
                    involucran membresía, gobierno, ley y orden, educación,
                    bienestar, recreación y desembolso fiscal. Este grupo
                    también se conoce como Consejo Empresarial. Es una
                    combinación de gobierno tribal tradicional y administración
                    moderna que forma la estructura organizativa de la actual
                    Tribu Miccosukee.​
                  </p>
                </React.Fragment>
              )}
            </div>
          </GridItem>
          <GridItem md={5}>
            <div className={classes.imageArea}>
              <CustomImageSlider
                customStyle={{ width: "200px" }}
                customImages={imageWithCaptions}
              />
            </div>
          </GridItem>
        </GridContainer>
      </RaisedContainer>
    </React.Fragment>
  );
};

export default TribalLeaders;
