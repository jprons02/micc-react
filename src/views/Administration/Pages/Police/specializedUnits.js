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
import bgImage from "assets/media/img/administration/Everglades_Header.jpg";
import image1 from "assets/media/img/administration/NewPoliceCar.jpg";

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

const SpecializedUnits = () => {
  const language = useLanguage();
  const classes = useStyles();

  const style = { fontWeight: "500" };

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
              <h2>
                {language ? "Specialized Units" : "Unidades Especializadas"}
              </h2>
              {language ? (
                <React.Fragment>
                  <p>
                    <span style={style}>Color Guard</span>
                    <br />
                    The Color Guard team consists of 5-6 members (2 flag
                    bearers, 2 riflemen and a commander) who perform drill
                    exhibitions or serve as escorts on ceremonial occasions such
                    as memorials and funerals.
                  </p>

                  <p>
                    <span style={style}>Wildlife</span>
                    <br />
                    Staff of the Miccosukee Fish and Wildlife Law Enforcement
                    Unit is comprised of highly trained police officers with
                    specialized skills in resource conservation. Utilizing
                    airboats, helicopters and ATVs, the officers patrol nearly
                    300,000 acres of Tribal lands in six different counties to
                    enforce federal, state, and tribal hunting and fishing laws.
                  </p>

                  <p>
                    <span style={style}>Dive Team</span>
                    <br />
                    Miccosukee Dive Team serves the police department and the
                    community by conducting rescue operations and searching the
                    waterways within the Tribe’s jurisdiction to recover
                    vehicles, weapons, persons, and criminal evidence.
                  </p>

                  <p>
                    <span style={style}>K-9 Unit</span>
                    <br />
                    Police dogs are often referred to as “K-9s”, derived from
                    the word “canine.” Utilizing highly trained police dogs, the
                    Miccosukee Police Department is able to uncover criminal
                    activity including evidence leading to arrests.
                  </p>

                  <p>
                    <span style={style}>C.S.I. Unit</span>
                    <br />
                    Crime Scene Investigations Unit provides crime scene
                    processing through the collection of physical evidence
                    through photography, physical crime scene search, recovery
                    of latent fingerprints, and the collection of physical
                    evidence.
                  </p>

                  <p>
                    <span style={style}>G.I.U.</span>
                    <br />
                    Detectives assigned to the General Investigations Unit (GIU)
                    are responsible for investigating a variety of criminal
                    activity. The division’s core objectives are to identify
                    crime, solve criminal cases, and obtain convictions thereby
                    enhancing the quality of life for the community, visitors,
                    and the transient population traveling through the Tribe’s
                    jurisdiction.
                  </p>

                  <p>
                    <span style={style}>SWAT Team</span>
                    <br />A SWAT (Special Weapons and Tactics) team is an elite
                    paramilitary tactical unit that is trained to perform
                    high-risk operations that fall outside of the abilities
                    and/or capabilities of the standard officer. The main goal
                    of the SWAT Team is to provide protection and safety for the
                    community it serves and to help reduce the possibility of
                    injuries or death at high-risk incidents.
                  </p>

                  <p>
                    <span style={style}>School Resources Officer</span>
                    <br />
                    Programs under the supervision of this police officer,
                    typically focus their functions on the “Triad Model”
                    consisting of law enforcement, student counseling, and
                    law-related education. The working relationship between the
                    School Resources Officer and school-law enforcement
                    relationships are the first line of prevention, with the
                    primary goal of informing and educating teachers and
                    students to reduce infractions of the law and arrests.
                  </p>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <p>
                    <span style={style}>Guardia de Color</span>
                    <br />
                    El equipo de la Guardia de Color consta de 5-6 miembros (2
                    abanderados, 2 rifleros y un comandante) que realizan
                    exhibiciones de ejercicios y simulacros o sirven como
                    escoltas en eventos ceremoniales como homenajes o funerales.
                  </p>

                  <p>
                    <span style={style}>Vida Silvestre</span>
                    <br />
                    El personal de la Unidad de Pesca y Vida Silvestre
                    Miccosukee está compuesto por policías altamente capacitados
                    con habilidades especializadas en la conservación de
                    recursos. Utilizando hidrodeslizadores (airboats),
                    helicópteros y vehículos todo terreno, los oficiales
                    patrullan casi 300,000 acres de tierras tribales en seis
                    condados diferentes para hacer cumplir las leyes de caza y
                    pesca federales, estatales y tribales.
                  </p>

                  <p>
                    <span style={style}>Equipo de Buceo</span>
                    <br />
                    El equipo de buceo Miccosukee sirve al Departamento de
                    policía y a la comunidad realizando operaciones de rescate y
                    registrando las vías fluviales dentro de la jurisdicción de
                    la Tribu para recuperar vehículos, armas, personas y pruebas
                    criminales.
                  </p>

                  <p>
                    <span style={style}>Unidad K-9</span>
                    <br />
                    Los perros policía a menudo se denominan "K-9", derivado de
                    la palabra "canino". Utilizando perros policía altamente
                    entrenados, el Departamento de Policía Miccosukee puede
                    descubrir actividades criminales, incluyendo evidencia que
                    conduce a arrestos.
                  </p>

                  <p>
                    <span style={style}>Unidad C.S.I.</span>
                    <br />
                    La Unidad de Investigaciones de la Escena del Crimen se
                    encarga del procesamiento de la escena del crimen a través
                    de la recolección de evidencia física por medio de
                    fotografías, investigación de la escena del crimen,
                    recuperación de huellas dactilares latentes y recolección de
                    evidencia física.
                  </p>

                  <p>
                    <span style={style}>G.I.U.</span>
                    <br />
                    Los detectives asignados a la Unidad de Investigaciones
                    Generales (GIU) son responsables de investigar una variedad
                    de actividades delictivas. Los objetivos centrales de la
                    división son identificar delitos, resolver casos penales y
                    obtener condenas, mejorando así la calidad de vida de la
                    comunidad, los visitantes y la población transitoria que
                    viaja a través de la jurisdicción de la Tribu.
                  </p>

                  <p>
                    <span style={style}>Equipo SWAT</span>
                    <br />
                    Un equipo SWAT (Armas y Tácticas Especiales) es una unidad
                    táctica paramilitar de élite que está entrenada para
                    realizar operaciones de alto riesgo que quedan fuera de las
                    habilidades y / o capacidades del oficial común. El objetivo
                    principal del equipo SWAT es brindar protección y seguridad
                    a la comunidad a la que sirve y ayudar a reducir la
                    posibilidad de lesiones o muerte en incidentes de alto
                    riesgo.
                  </p>

                  <p>
                    <span style={style}>Oficial de Recursos Escolares</span>
                    <br />
                    Los programas bajo la supervisión de este oficial de policía
                    generalmente enfocan sus funciones en el “Modelo Tríada” que
                    consiste en la aplicación de la ley, el asesoramiento a los
                    estudiantes y la educación relacionada con la ley. El
                    trabajo entre el Oficial de Recursos Escolares y las
                    relaciones entre la escuela y la aplicación de la ley son la
                    primera línea de prevención, con el objetivo principal de
                    informar y educar a los maestros y estudiantes para reducir
                    las infracciones de la ley y los arrestos.
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

export default SpecializedUnits;
