import React from "react";

// Core Components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// My Custom Components
import RaisedContainer from "components/CustomSections/RaisedContainer.js";
import HeroSection from "components/CustomSections/HeroSection.js";
import CustomImageSlider from "components/CustomImageSlider/CustomImageSlider.js";
import CustomStandardPagination from "components/CustomPagination/CustomStandardPagination.js";

// Images
import bgImage from "assets/img/administration/Everglades_Header.jpg";
import image1 from "assets/img/administration/NewPoliceCar.jpg";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/mrg/basicPage.js";

// Pages
import { policePages } from "views/Administration/Pages/Police/policePages.js";

// Context
import { useLanguage } from "contexts/languageContext";

const useStyles = makeStyles(styles);

const imageArray = [image1];

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: "",
    subHeader: "",
  },
];

const History = () => {
  const language = useLanguage();
  const classes = useStyles();

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <CustomStandardPagination
          customStyle={{ marginBottom: "20px" }}
          pages={policePages}
        />
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>{language ? "Police History" : "Historia de la Policía"}</h2>
              {language ? (
                <React.Fragment>
                  <p>
                    Miccosukee Police Department was established in 1976. Each
                    Miccosukee Police officer, upon completing all of the State
                    of Florida Law Enforcement Officer certification
                    requirements, is commissioned as a United States Dept. of
                    Interior, Bureau of Indian Affairs, Special Deputy Officer.
                    This commission allows the police officer to enforce all of
                    the U.S. Title 18 crimes on the Indian Reservation.
                  </p>

                  <p>
                    Each Miccosukee police officer is also commissioned by the
                    National Park Service and U.S. Fish and Wildlife Service.
                    All of these commissions allow the police officer to make
                    federal arrests, within the jurisdiction of the Miccosukee
                    Tribe of Indians of Florida.
                  </p>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <p>
                    El Departamento de Policía Miccosukee se estableció en 1976.
                    Cada oficial de policía Miccosukee, al completar todos los
                    requisitos de certificación oficial de la ley del estado de
                    la Florida, es comisionado como oficial adjunto especial del
                    Departamento del Interior de los Estados Unidos, Oficina de
                    Asuntos Indígenas. Esta comisión le permite al oficial de la
                    policía hacer cumplir en la reserva Indígena todos los
                    crímenes del Título 18 de los Estados Unidos.
                  </p>
                  <p>
                    Cada oficial de policía Miccosukee también es comisionado
                    por el Servicio de Parques Nacionales y el Servicio de Pesca
                    y Vida Silvestre de Estados Unidos. Todas estas comisiones
                    le permiten al oficial de policía realizar arrestos
                    federales, dentro de la jurisdicción de la Tribu Indígena
                    Miccosukee de la Florida.
                  </p>
                </React.Fragment>
              )}
            </div>
          </GridItem>
          <GridItem style={{ marginBottom: "30px" }} md={5}>
            <div className={classes.imageArea}>
              <CustomImageSlider images={imageArray} />
            </div>
          </GridItem>
        </GridContainer>
      </RaisedContainer>
    </React.Fragment>
  );
};

export default History;
