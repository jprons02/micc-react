import React, { useCallback, useState } from "react";

// Core Components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// My Custom Components
import RaisedContainer from "components/CustomSections/RaisedContainer.js";
import HeroSection from "components/CustomSections/HeroSection.js";
import CustomImageSlider from "components/CustomImageSlider/CustomImageSlider.js";

// Images
import bgImage from "assets/media/img/history/Header_Tribe_1500x354-e1551386527765.jpg";
import chairman from "assets/media/img/history/Chairman_TalbertCypress.jpg";
import asstChairman from "assets/media/img/history/AsstChairman_LucasOsceola.jpg";
import treasurer from "assets/media/img/history/Treasurer_KennyCypress.jpg";
import secretary from "assets/media/img/history/Secretary_WilliamJOsceola.jpg";
import lawmaker from "assets/media/img/history/imgLeadersPetties-no6sis5mu2iwh29e7uim87r4hdi3uclvpnfjkkis2o.jpg";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/mrg/basicPage.js";

// Context
import { useLanguage } from "contexts/languageContext";
import { SettingsInputAntennaTwoTone } from "@material-ui/icons";

const useStyles = makeStyles(styles);

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

  const imageWithCaptions = [
    {
      src: chairman,
      caption: `Talbert Cypress, ${language ? "Chairman" : "Presidente"}`,
      alt: "Talbert Cypress, Chairman",
    },
    {
      src: asstChairman,
      caption: `Lucas K. Osceola, ${
        language ? "Assistant Chairman" : "Asistente del Presidente"
      }`,
      alt: "Lucas K. Osceola, Assistant Chairman",
    },
    {
      src: treasurer,
      caption: `Kenneth H. Cypress, ${language ? "Treasurer" : "Tesorero"}`,
      alt: "Kenneth H. Cypress, Treasurer",
    },
    {
      src: secretary,
      caption: `William J. Osceola, ${language ? "Secretary" : "Secretario"}`,
      alt: "William J. Osceola, Secretary",
    },
    {
      src: lawmaker,
      caption: `Petties Osceola, Jr., ${language ? "Lawmaker" : "Legislador"}`,
      alt: "Petties Osceola, Jr., Lawmaker",
    },
  ];

  const [activeCouncilman, setActiveCouncilman] = useState(0);

  const clickFunction = (getIndex) => {
    setActiveCouncilman(getIndex);
  };

  const renderBio = () => {
    switch (activeCouncilman) {
      case 0:
        return (
          <React.Fragment>
            <h3>Talbert Cypress, Chairman</h3>
            {language ? (
              <React.Fragment>
                <p>
                  The responsibilities of the General Council consist of the
                  development and management of resources and the day-to-day
                  business activities of the Tribe including those involving
                  membership, government, law and order, education, welfare,
                  recreation, and fiscal disbursement. This group is also known
                  as the Business Council. It is a combination of traditional
                  tribal government and modern management that forms the
                  organizational structure of the present-day Miccosukee Tribe.​
                </p>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <p>
                  Las responsabilidades del Consejo General consisten en el
                  desarrollo y administración de recursos y actividades
                  comerciales diarias de la Tribu, incluyendo las que involucran
                  membresía, gobierno, ley y orden, educación, bienestar,
                  recreación y desembolso fiscal. Este grupo también se conoce
                  como Consejo Empresarial. Es una combinación de gobierno
                  tribal tradicional y administración moderna que forma la
                  estructura organizativa de la actual Tribu Miccosukee.​
                </p>
              </React.Fragment>
            )}
          </React.Fragment>
        );
      case 1:
        return (
          <React.Fragment>
            <h3>Lucas K. Osceola, Assistant Chairman</h3>
            {language ? (
              <React.Fragment>
                <p>
                  The responsibilities of the General Council consist of the
                  development and management of resources and the day-to-day
                  business activities of the Tribe including those involving
                  membership, government, law and order, education, welfare,
                  recreation, and fiscal disbursement. This group is also known
                  as the Business Council. It is a combination of traditional
                  tribal government and modern management that forms the
                  organizational structure of the present-day Miccosukee Tribe.​
                </p>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <p>
                  Las responsabilidades del Consejo General consisten en el
                  desarrollo y administración de recursos y actividades
                  comerciales diarias de la Tribu, incluyendo las que involucran
                  membresía, gobierno, ley y orden, educación, bienestar,
                  recreación y desembolso fiscal. Este grupo también se conoce
                  como Consejo Empresarial. Es una combinación de gobierno
                  tribal tradicional y administración moderna que forma la
                  estructura organizativa de la actual Tribu Miccosukee.​
                </p>
              </React.Fragment>
            )}
          </React.Fragment>
        );
      case 2:
        return (
          <React.Fragment>
            <h3>Kenneth H. Cypress, Treasurer</h3>
            {language ? (
              <React.Fragment>
                <p>
                  The responsibilities of the General Council consist of the
                  development and management of resources and the day-to-day
                  business activities of the Tribe including those involving
                  membership, government, law and order, education, welfare,
                  recreation, and fiscal disbursement. This group is also known
                  as the Business Council. It is a combination of traditional
                  tribal government and modern management that forms the
                  organizational structure of the present-day Miccosukee Tribe.​
                </p>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <p>
                  Las responsabilidades del Consejo General consisten en el
                  desarrollo y administración de recursos y actividades
                  comerciales diarias de la Tribu, incluyendo las que involucran
                  membresía, gobierno, ley y orden, educación, bienestar,
                  recreación y desembolso fiscal. Este grupo también se conoce
                  como Consejo Empresarial. Es una combinación de gobierno
                  tribal tradicional y administración moderna que forma la
                  estructura organizativa de la actual Tribu Miccosukee.​
                </p>
              </React.Fragment>
            )}
          </React.Fragment>
        );
      case 3:
        return (
          <React.Fragment>
            <h3>William J. Osceola, Secretary</h3>
            {language ? (
              <React.Fragment>
                <p>
                  The responsibilities of the General Council consist of the
                  development and management of resources and the day-to-day
                  business activities of the Tribe including those involving
                  membership, government, law and order, education, welfare,
                  recreation, and fiscal disbursement. This group is also known
                  as the Business Council. It is a combination of traditional
                  tribal government and modern management that forms the
                  organizational structure of the present-day Miccosukee Tribe.​
                </p>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <p>
                  Las responsabilidades del Consejo General consisten en el
                  desarrollo y administración de recursos y actividades
                  comerciales diarias de la Tribu, incluyendo las que involucran
                  membresía, gobierno, ley y orden, educación, bienestar,
                  recreación y desembolso fiscal. Este grupo también se conoce
                  como Consejo Empresarial. Es una combinación de gobierno
                  tribal tradicional y administración moderna que forma la
                  estructura organizativa de la actual Tribu Miccosukee.​
                </p>
              </React.Fragment>
            )}
          </React.Fragment>
        );
      case 4:
        return (
          <React.Fragment>
            <h3>Petties Osceola, Jr., Lawmaker</h3>
            {language ? (
              <React.Fragment>
                <p>
                  The responsibilities of the General Council consist of the
                  development and management of resources and the day-to-day
                  business activities of the Tribe including those involving
                  membership, government, law and order, education, welfare,
                  recreation, and fiscal disbursement. This group is also known
                  as the Business Council. It is a combination of traditional
                  tribal government and modern management that forms the
                  organizational structure of the present-day Miccosukee Tribe.​
                </p>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <p>
                  Las responsabilidades del Consejo General consisten en el
                  desarrollo y administración de recursos y actividades
                  comerciales diarias de la Tribu, incluyendo las que involucran
                  membresía, gobierno, ley y orden, educación, bienestar,
                  recreación y desembolso fiscal. Este grupo también se conoce
                  como Consejo Empresarial. Es una combinación de gobierno
                  tribal tradicional y administración moderna que forma la
                  estructura organizativa de la actual Tribu Miccosukee.​
                </p>
              </React.Fragment>
            )}
          </React.Fragment>
        );
      default:
        return (
          <React.Fragment>
            <h3>{language ? "Leaders" : "Líderes Tribales"}</h3>
            {language ? (
              <React.Fragment>
                <p>
                  The responsibilities of the General Council consist of the
                  development and management of resources and the day-to-day
                  business activities of the Tribe including those involving
                  membership, government, law and order, education, welfare,
                  recreation, and fiscal disbursement. This group is also known
                  as the Business Council. It is a combination of traditional
                  tribal government and modern management that forms the
                  organizational structure of the present-day Miccosukee Tribe.​
                </p>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <p>
                  Las responsabilidades del Consejo General consisten en el
                  desarrollo y administración de recursos y actividades
                  comerciales diarias de la Tribu, incluyendo las que involucran
                  membresía, gobierno, ley y orden, educación, bienestar,
                  recreación y desembolso fiscal. Este grupo también se conoce
                  como Consejo Empresarial. Es una combinación de gobierno
                  tribal tradicional y administración moderna que forma la
                  estructura organizativa de la actual Tribu Miccosukee.​
                </p>
              </React.Fragment>
            )}
          </React.Fragment>
        );
    }
  };

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
              {/*renderBio()*/}
            </div>
          </GridItem>
          <GridItem md={5}>
            <div className={classes.imageArea}>
              <CustomImageSlider
                customStyle={{ width: "200px" }}
                customImages={imageWithCaptions}
                clickFunction={clickFunction}
              />
            </div>
          </GridItem>
        </GridContainer>
      </RaisedContainer>
    </React.Fragment>
  );
};

export default TribalLeaders;
