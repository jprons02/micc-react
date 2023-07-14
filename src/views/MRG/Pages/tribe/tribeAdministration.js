import React from 'react';

// Core Components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import { Hidden } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

// My Custom Components
import RaisedContainer from 'components/CustomSections/RaisedContainer.js';
import HeroSection from 'components/CustomSections/HeroSection.js';
import CustomImageSlider from 'components/CustomImageSlider/CustomImageSlider.js';
import StandardCard from 'components/CustomCards/StandardCard.js';

// react component for creating beautiful carousel
import Slider from 'react-slick';

// Images
import bgImage from 'assets/media/img/administration/Everglades_Header.jpg';
import cardImage1 from 'assets/media/img/administration/NewPoliceCar.jpg';

// Styling
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/mrg/tribeHistory.js';
import cardStyles from 'assets/jss/material-kit-react/views/administration/homeCardStyles.js';

import image4 from 'assets/media/img/administration/plaza.jpg';
import image5 from 'assets/media/img/administration/NewPoliceCar.jpg';

// Context
import { useLanguage } from 'contexts/languageContext';

const useStyles = makeStyles(styles);
const useCardStyles = makeStyles(cardStyles);

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: '',
    subHeader: '',
  },
];

const programsImageObj = [
  { src: image4, alt: 'service plaza' },
  { src: image5, alt: 'miccosukee police car' },
];

const TribeAdministration = () => {
  const classes = useStyles();
  const language = useLanguage();

  const renderPoliceHistory = () => {
    return (
      <React.Fragment>
        <h3>{language ? 'Police History' : 'Historia de la Policía'}</h3>
        {language ? (
          <React.Fragment>
            <p>
              Miccosukee Police Department was established in 1976. Each
              Miccosukee Police officer, upon completing all of the State of
              Florida Law Enforcement Officer certification requirements, is
              commissioned as a United States Dept. of Interior, Bureau of
              Indian Affairs, Special Deputy Officer. This commission allows the
              police officer to enforce all of the U.S. Title 18 crimes on the
              Indian Reservation.
            </p>

            <p>
              Each Miccosukee police officer is also commissioned by the
              National Park Service and U.S. Fish and Wildlife Service. All of
              these commissions allow the police officer to make federal
              arrests, within the jurisdiction of the Miccosukee Tribe of
              Indians of Florida.
            </p>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <p>
              El Departamento de Policía Miccosukee se estableció en 1976. Cada
              oficial de policía Miccosukee, al completar todos los requisitos
              de certificación oficial de la ley del estado de la Florida, es
              comisionado como oficial adjunto especial del Departamento del
              Interior de los Estados Unidos, Oficina de Asuntos Indígenas. Esta
              comisión le permite al oficial de la policía hacer cumplir en la
              reserva Indígena todos los crímenes del Título 18 de los Estados
              Unidos.
            </p>
            <p>
              Cada oficial de policía Miccosukee también es comisionado por el
              Servicio de Parques Nacionales y el Servicio de Pesca y Vida
              Silvestre de Estados Unidos. Todas estas comisiones le permiten al
              oficial de policía realizar arrestos federales, dentro de la
              jurisdicción de la Tribu Indígena Miccosukee de la Florida.
            </p>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  };

  const renderPoliceLocations = () => {
    const style = { fontWeight: '500' };
    return (
      <React.Fragment>
        <h3>{language ? 'Police Locations' : 'Ubicación de las Comisarías'}</h3>
        <p>
          <span style={style}>
            {language ? 'Miami-Dade County' : 'Condado de Miami-Dade'}
          </span>
          <br />
          {language
            ? 'Main Station – Miccosukee Indian Reservation, Tamiami Trail (SR-90) and approximately 20 miles west of Krome Avenue (SR-997)'
            : 'Estación Principal – Reserva Indígena Miccosukee, Tamiami Trail (SR-90) aproximadamente a 20 millas al oeste de la Avenida Krome (SR-997)'}
        </p>

        <p>
          <span style={style}>
            {language
              ? 'Krome Substation – Miccosukee Casino & Resort'
              : 'Subestación de Krome – Miccosukee Casino & Resort'}
          </span>
          <br />
          500 SW 177 Ave, Miami, FL 33194
        </p>

        <p>
          <span style={style}>
            {language ? 'Broward County' : 'Condado de Broward'}
          </span>
          <br />
          {language
            ? 'Alley Substation – Miccosukee Indian Reservation, I-75 exit 49'
            : 'Subestación de Alley – Reserva Indígena Miccosukee, I-75 salida 49'}
        </p>
      </React.Fragment>
    );
  };

  const specializedUnits = () => {
    const style = { fontWeight: '500' };
    return (
      <React.Fragment>
        <h3>{language ? 'Specialized Units' : 'Unidades Especializadas'}</h3>
        {language ? (
          <React.Fragment>
            <p>
              <span style={style}>Color Guard</span>
              <br />
              The Color Guard team consists of 5-6 members (2 flag bearers, 2
              riflemen and a commander) who perform drill exhibitions or serve
              as escorts on ceremonial occasions such as memorials and funerals.
            </p>

            <p>
              <span style={style}>Wildlife</span>
              <br />
              Staff of the Miccosukee Fish and Wildlife Law Enforcement Unit is
              comprised of highly trained police officers with specialized
              skills in resource conservation. Utilizing airboats, helicopters
              and ATVs, the officers patrol nearly 300,000 acres of Tribal lands
              in six different counties to enforce federal, state, and tribal
              hunting and fishing laws.
            </p>

            <p>
              <span style={style}>Dive Team</span>
              <br />
              Miccosukee Dive Team serves the police department and the
              community by conducting rescue operations and searching the
              waterways within the Tribe’s jurisdiction to recover vehicles,
              weapons, persons, and criminal evidence.
            </p>

            <p>
              <span style={style}>K-9 Unit</span>
              <br />
              Police dogs are often referred to as “K-9s”, derived from the word
              “canine.” Utilizing highly trained police dogs, the Miccosukee
              Police Department is able to uncover criminal activity including
              evidence leading to arrests.
            </p>

            <p>
              <span style={style}>C.S.I. Unit</span>
              <br />
              Crime Scene Investigations Unit provides crime scene processing
              through the collection of physical evidence through photography,
              physical crime scene search, recovery of latent fingerprints, and
              the collection of physical evidence.
            </p>

            <p>
              <span style={style}>G.I.U.</span>
              <br />
              Detectives assigned to the General Investigations Unit (GIU) are
              responsible for investigating a variety of criminal activity. The
              division’s core objectives are to identify crime, solve criminal
              cases, and obtain convictions thereby enhancing the quality of
              life for the community, visitors, and the transient population
              traveling through the Tribe’s jurisdiction.
            </p>

            <p>
              <span style={style}>SWAT Team</span>
              <br />A SWAT (Special Weapons and Tactics) team is an elite
              paramilitary tactical unit that is trained to perform high-risk
              operations that fall outside of the abilities and/or capabilities
              of the standard officer. The main goal of the SWAT Team is to
              provide protection and safety for the community it serves and to
              help reduce the possibility of injuries or death at high-risk
              incidents.
            </p>

            <p>
              <span style={style}>School Resources Officer</span>
              <br />
              Programs under the supervision of this police officer, typically
              focus their functions on the “Triad Model” consisting of law
              enforcement, student counseling, and law-related education. The
              working relationship between the School Resources Officer and
              school-law enforcement relationships are the first line of
              prevention, with the primary goal of informing and educating
              teachers and students to reduce infractions of the law and
              arrests.
            </p>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <p>
              <span style={style}>Guardia de Color</span>
              <br />
              El equipo de la Guardia de Color consta de 5-6 miembros (2
              abanderados, 2 rifleros y un comandante) que realizan exhibiciones
              de ejercicios y simulacros o sirven como escoltas en eventos
              ceremoniales como homenajes o funerales.
            </p>

            <p>
              <span style={style}>Vida Silvestre</span>
              <br />
              El personal de la Unidad de Pesca y Vida Silvestre Miccosukee está
              compuesto por policías altamente capacitados con habilidades
              especializadas en la conservación de recursos. Utilizando
              hidrodeslizadores (airboats), helicópteros y vehículos todo
              terreno, los oficiales patrullan casi 300,000 acres de tierras
              tribales en seis condados diferentes para hacer cumplir las leyes
              de caza y pesca federales, estatales y tribales.
            </p>

            <p>
              <span style={style}>Equipo de Buceo</span>
              <br />
              El equipo de buceo Miccosukee sirve al Departamento de policía y a
              la comunidad realizando operaciones de rescate y registrando las
              vías fluviales dentro de la jurisdicción de la Tribu para
              recuperar vehículos, armas, personas y pruebas criminales.
            </p>

            <p>
              <span style={style}>Unidad K-9</span>
              <br />
              Los perros policía a menudo se denominan "K-9", derivado de la
              palabra "canino". Utilizando perros policía altamente entrenados,
              el Departamento de Policía Miccosukee puede descubrir actividades
              criminales, incluyendo evidencia que conduce a arrestos.
            </p>

            <p>
              <span style={style}>Unidad C.S.I.</span>
              <br />
              La Unidad de Investigaciones de la Escena del Crimen se encarga
              del procesamiento de la escena del crimen a través de la
              recolección de evidencia física por medio de fotografías,
              investigación de la escena del crimen, recuperación de huellas
              dactilares latentes y recolección de evidencia física.
            </p>

            <p>
              <span style={style}>G.I.U.</span>
              <br />
              Los detectives asignados a la Unidad de Investigaciones Generales
              (GIU) son responsables de investigar una variedad de actividades
              delictivas. Los objetivos centrales de la división son identificar
              delitos, resolver casos penales y obtener condenas, mejorando así
              la calidad de vida de la comunidad, los visitantes y la población
              transitoria que viaja a través de la jurisdicción de la Tribu.
            </p>

            <p>
              <span style={style}>Equipo SWAT</span>
              <br />
              Un equipo SWAT (Armas y Tácticas Especiales) es una unidad táctica
              paramilitar de élite que está entrenada para realizar operaciones
              de alto riesgo que quedan fuera de las habilidades y / o
              capacidades del oficial común. El objetivo principal del equipo
              SWAT es brindar protección y seguridad a la comunidad a la que
              sirve y ayudar a reducir la posibilidad de lesiones o muerte en
              incidentes de alto riesgo.
            </p>

            <p>
              <span style={style}>Oficial de Recursos Escolares</span>
              <br />
              Los programas bajo la supervisión de este oficial de policía
              generalmente enfocan sus funciones en el “Modelo Tríada” que
              consiste en la aplicación de la ley, el asesoramiento a los
              estudiantes y la educación relacionada con la ley. El trabajo
              entre el Oficial de Recursos Escolares y las relaciones entre la
              escuela y la aplicación de la ley son la primera línea de
              prevención, con el objetivo principal de informar y educar a los
              maestros y estudiantes para reducir las infracciones de la ley y
              los arrestos.
            </p>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <h2>Miccosukee Administration and Business Related Entities</h2>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              {renderPoliceHistory()}
              {renderPoliceLocations()}
              {specializedUnits()}
              <h3>Resources</h3>
              <ul>
                <li>
                  <a
                    style={{
                      cursor: 'pointer',
                      textDecoration: 'underline',
                    }}
                    href="https://www.miccosukeepolice.com/"
                    target="_blank"
                  >
                    MICCOSUKEE POLICE WEBSITE
                  </a>
                </li>
                <li>
                  <a
                    style={{
                      cursor: 'pointer',
                      textDecoration: 'underline',
                    }}
                    href="https://miccosukeetribe.nsopw.gov/Home.aspx"
                    target="_blank"
                  >
                    SORNA
                  </a>
                </li>
              </ul>
            </div>
          </GridItem>
          <GridItem md={5}>
            <div className={classes.imageArea}>
              <CustomImageSlider images={programsImageObj} />
            </div>
          </GridItem>
        </GridContainer>
      </RaisedContainer>
    </React.Fragment>
  );
};

export default TribeAdministration;
