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

// context
import { useLanguage } from "contexts/languageContext";

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

const HistoryHome = () => {
  const language = useLanguage();
  const classes = useStyles();

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>{language ? "History" : "Historia"}</h2>
              <p>
                {language ? "The Tribe has a proud history, which predates Columbus. The Miccosukee Indians were originally part of the Creek Nation, and then migrated to Florida before it became part of the United States." : "La historia de la Tribu precede los tiempos de Colón. Los Indios Miccosukee fueron originalmente parte de la Nación Creek, emigrando luego a la Florida antes de que ésta fuera parte de los Estados Unidos."}
              </p>

              <p>
                {language ? "During the Indian Wars of the 1800s, most of the Miccosukee were removed to the West, but about 100, mostly Mikasuki-speaking Creeks, never surrendered and hid out in the Everglades. Present Tribal members now number over 600 and are direct descendants of those who eluded capture." : "Durante las Guerras Indias de los 1800s, la mayoría de los Miccosukee fueron removidos del oeste, pero algunos 100, la mayoría parte de los Creek que hablaban Mikasuki, nunca se rindieron y tomaron refugio en los Everglades. Actualmente la Tribu cuenta con más de 600 miembros, descendientes directos de los que eludieron captura."}
              </p>

              <p>
                {language ? "To survive in this new environment, the Miccosukee adapted to living in small groups in temporary “hammock style” camps spread throughout the Everglades’ vast river of grass. In this fashion, they stayed to themselves for about 100 years, resisting efforts to become assimilated. Then, after the Tamiami Trail highway was built in 1928, the Tribe began to accept New World concepts." : "Para sobrevivir en este nuevo entorno, los Miccosukee se adaptaron a vivir en pequeños grupos en campamentos al estilo hamaca esparcidos a través del vasto río de césped de los Everglades. Vivieron así alrededor de 100 años, resistiendo los intentos de asimilarse. Luego de que se contruyera la autopista Tamiami Trail en 1928, la Tribu comenzó a aceptar los conceptos del Nuevo Mundo."}
              </p>

              <p>
                {language ? "To ensure that the federal government would formally recognize the Miccosukee Tribe, Buffalo Tiger, an esteemed member of the Tribe, led a group to Cuba in 1959, where they asked Fidel Castro for, and were granted, international recognition as a sovereign country within the United States." : "Para asegurarse de que el gobierno federal los reconociera formalmente como la Tribu Miccosukee, un estimado miembro de la Tribu llamado Buffalo Tiger dirigió un grupo hacia Cuba en 1959 con la intención de pidirle a Fidel Castro reconomiento internacional como un país soberano dentro de los Estados Unidos; su pedido fue reconocido y aceptado."}
              </p>

              <p>
                {language ? "Following this, on January 11, 1962, the U.S. Secretary of the Interior approved the Miccosukee Constitution and the Tribe was officially recognized as the Miccosukee Tribe of Indians of Florida. This legally established the Miccosukee’s tribal existence and their sovereign, domestic dependent nation status with the United States Government." : "Luego de este suceso, el 11 de enero de 1962, el Secretario del Interior de Estados Unidos aprobó la Constitución Miccosukee y la Tribu fue reconocida oficialmente como la Tribu de los Indios Miccosukee de la Florida. De esta manera se estableció legalmente la existencia de la Tribu Miccosukee como una nación soberana con estatus de nación dependiente de los Estados Unidos."}
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

export default HistoryHome;
