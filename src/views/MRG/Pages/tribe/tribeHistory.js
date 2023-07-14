import React from 'react';

// Core Components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';

// My Custom Components
import RaisedContainer from 'components/CustomSections/RaisedContainer.js';
import HeroSection from 'components/CustomSections/HeroSection.js';
import CustomImageSlider from 'components/CustomImageSlider/CustomImageSlider.js';
import Leaders from 'views/MRG/Pages/tribe/leaders.js';

// Images
import bgImage from 'assets/media/img/history/Header_Tribe_1500x354-e1551386527765.jpg';
import image1 from 'assets/media/img/history/history1.jpeg';
import image2 from 'assets/media/img/history/car01.jpg';
import image3 from 'assets/media/img/history/imgHistoryCanoe1.jpeg';

import image4 from 'assets/media/img/administration/plaza.jpg';
import image5 from 'assets/media/img/administration/NewPoliceCar.jpg';

// Styling
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/mrg/tribeHistory.js';

// BusinessInfo
import { mrgHours } from 'business_info/hours.js';

// Services
import { renderPoiHours } from 'services/functions/renderPoiHours.js';

// Context
import { useLanguage } from 'contexts/languageContext.js';

const useStyles = makeStyles(styles);

//const imageArray = [image1, image2, image3, image4, image5];
const historyImageObj = [
  { src: image1, alt: 'miccosukee indian' },
  { src: image2, alt: 'miccosukee indian' },
  { src: image3, alt: 'miccosukee indian' },
];
const programsImageObj = [
  { src: image4, alt: 'service plaza' },
  { src: image5, alt: 'miccosukee police car' },
];
const museumImageObj = [{ src: image3, alt: 'indian village museum exhibit' }];

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: '',
    subHeader: '',
  },
];

const TribeHistory = () => {
  const language = useLanguage();
  const classes = useStyles();

  const renderHorizontalRule = () => {
    return <hr className={classes.hrStyle} />;
  };

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>History of the Miccosukee Tribe</h2>
              <p>
                The Tribe has a proud history, which predates Columbus. The
                Miccosukee Indians were originally part of the Creek Nation, and
                then migrated to Florida before it became part of the United
                States.
              </p>

              <p>
                During the Indian Wars of the 1800s, most of the Miccosukee were
                removed to the West, but about 100, mostly Mikasuki-speaking
                Creeks, never surrendered and hid out in the Everglades. Present
                Tribal members now number over 600 and are direct descendants of
                those who eluded capture.
              </p>

              <p>
                To survive in this new environment, the Miccosukee adapted to
                living in small groups in temporary “hammock style” camps spread
                throughout the Everglades’ vast river of grass. In this fashion,
                they stayed to themselves for about 100 years, resisting efforts
                to become assimilated. Then, after the Tamiami Trail highway was
                built in 1928, the Tribe began to accept New World concepts.
              </p>

              <p>
                To ensure that the federal government would formally recognize
                the Miccosukee Tribe, Buffalo Tiger, an esteemed member of the
                Tribe, led a group to Cuba in 1959, where they asked Fidel
                Castro for, and were granted, international recognition as a
                sovereign country within the United States.
              </p>

              <p>
                Following this, on January 11, 1962, the U.S. Secretary of the
                Interior approved the Miccosukee Constitution and the Tribe was
                officially recognized as the Miccosukee Tribe of Indians of
                Florida. This legally established the Miccosukee’s tribal
                existence and their sovereign, domestic dependent nation status
                with the United States Government.
              </p>
            </div>
          </GridItem>
          <GridItem md={5}>
            <div className={classes.imageArea}>
              <CustomImageSlider images={historyImageObj} />
            </div>
          </GridItem>
        </GridContainer>
        {renderHorizontalRule()}
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>
                {language ? 'Programs & Businesses' : 'Programas y Empresas '}
              </h2>
              <h4>
                {language
                  ? 'Developing Independence'
                  : 'Desarrollando la Independencia'}
              </h4>
              {language ? (
                <React.Fragment>
                  <p>
                    On May 4, 1971, officers of the Miccosukee Corporation,
                    acting for the Miccosukee Tribe, signed a contract with the
                    BIA authorizing the Corporation to operate all programs and
                    services provided for the Miccosukee Community and formerly
                    administered by the BIA. The Tribe’s intent in negotiating
                    this matter was clear; the people wished to decide their own
                    fate and gradually develop total independence.
                  </p>

                  <p>
                    The Miccosukee Tribe now operates a Clinic; Police
                    Department; Court System; Day Care Center; Senior Center;
                    Community Action Agency and an Educational System ranging
                    from the Head Start Pre-School Program through Senior High
                    School, Adult, Vocational and Higher Education Programs and
                    other Social Services. These programs incorporate both the
                    traditional Miccosukee Indian ways and non-Indian ways into
                    their system and are all located on the Tamiami Trail
                    Reservation, where the Miccosukee community resides.
                  </p>

                  <p>
                    In addition, the Miccosukee Tribe owns and operates a Gift
                    Shop; General Store; Service Station and Indian Village on
                    the Tamiami Trail Reservation; an Indian Casino and Tobacco
                    Shop on the Krome Avenue Reservation; and a full-service Gas
                    Station and Service Plaza on Alligator Alley Reservation.
                  </p>
                  <h4>Population</h4>
                  <p>
                    Membership in the Miccosukee Tribe of Indians of Florida is
                    open to individuals who have Miccosukee mothers and are not
                    enrolled in any other Tribe. The Miccosukee Service Area is
                    composed of Tribal members and their families, independent
                    Miccosukees, Seminoles and other Indian families residing
                    along the Tamiami Trail from Miami to Naples. The total
                    population of the Miccosukee Service area is about 640.
                  </p>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <p>
                    El 4 de mayo de 1971, los funcionarios de la Corporación
                    Miccosukee, en representación de la Tribu Miccosukee,
                    firmaron un contrato con la BIA (Oficina de Asuntos
                    Indígenas) autorizando a la Corporación operar todos los
                    programas y servicios proporcionados para la Comunidad
                    Miccosukee anteriormente administrados por la BIA. La
                    intención de la Tribu al negociar este asunto fue clara; el
                    pueblo deseaba decidir su propio destino y desarrollar
                    gradualmente una independencia total.
                  </p>
                  <p>
                    La Tribu Miccosukee ahora opera una Clínica; Departamento de
                    Policía; Sistema Judicial; Guardería Infantil; Centro para
                    Personas Mayores; Agencia de Acción Comunitaria y un Sistema
                    Educativo que va desde el Programa Preescolar Head Start
                    hasta la Escuela Secundaria Superior, Programas de Estudios
                    Superiores y Vocacionales, Educación para Adultos y otros
                    Servicios Sociales. Estos programas incorporan tanto las
                    formas tradicionales de los Miccosukee como métodos no
                    indígenas y todos están ubicados en la Reserva de Tamiami
                    Trail, dónde reside la comunidad Miccosukee.
                  </p>
                  <p>
                    Además, la Tribu Miccosukee es propietaria y opera una
                    Tienda de Regalos; Almacén General; Estación de Servicio y
                    una Aldea Indígena en la Reserva Tamiami Trail; Casino y una
                    Tabaquería en la Reserva de Krome Avenue; y una Gasolinera
                    de Servicio Completo y una Plaza de Servicio en la Reserva
                    de Alligator Alley.
                  </p>
                  <h4>Población</h4>
                  <p>
                    La membresía en la Tribu Miccosukee de la Florida está
                    abierta a personas que tengan madres Miccosukee y no estén
                    inscritas en ninguna otra Tribu. El Área de Servicio de
                    Miccosukee está compuesta por miembros tribales y sus
                    familias, Miccosukees independientes, Seminoles y otras
                    familias indígenas que residen a lo largo del Tamiami Trail
                    de Miami a Naples. La población total del área de servicio
                    Miccosukee es de aproximadamente 640 miembros.
                  </p>
                </React.Fragment>
              )}
            </div>
          </GridItem>
          <GridItem md={5}>
            <div className={classes.imageArea}>
              <CustomImageSlider images={programsImageObj} />
            </div>
          </GridItem>
        </GridContainer>
        {renderHorizontalRule()}
        <Leaders />
        <div style={{ paddingBottom: '40px' }}></div>
      </RaisedContainer>
    </React.Fragment>
  );
};

export default TribeHistory;
