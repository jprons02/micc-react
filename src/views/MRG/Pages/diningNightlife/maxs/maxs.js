import React from 'react';

// Core Components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Typography from '@material-ui/core/Typography';
import Button from 'components/CustomButtons/Button.js';

// My Custom Components
import RaisedContainer from 'components/CustomSections/RaisedContainer.js';
import HeroSection from 'components/CustomSections/HeroSection.js';
import CustomImageSlider from 'components/CustomImageSlider/CustomImageSlider.js';

// Images
import bgImage from 'assets/media/img/mrg/dining/dining_header.jpg';
import image1 from 'assets/media/img/mrg/dining/deli/deli-01.jpg';
import buffetPromo from 'assets/media/img/mrg/dining/maxs/Buffet_banner.jpeg';

// Styling
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/mrg/basicPage.js';

// BusinessInfo
import { mrgHours } from 'business_info/hours.js';

// Services
import { renderPoiHours } from 'services/functions/renderPoiHours.js';

// Context
import { useLanguage } from 'contexts/languageContext.js';

import { isRunning } from 'services/functions/scheduleThis';

const useStyles = makeStyles(styles);

//const imageArray = [image1];
const imageObj = [{ src: image1, alt: 'Test1' }];

const sliderContent = [
  {
    id: 1,
    bgImage: bgImage,
    header: '',
    subHeader: '',
  },
];

const Maxs = () => {
  const language = useLanguage();
  const classes = useStyles();

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              <h2>Max's Room</h2>
              {/*renderPoiHours(mrgHours.poi.maxs, language)*/}
              <h6>
                {language
                  ? 'OPEN DAILY 1 PM - 11 PM'
                  : 'ABIERTO TODOS LOS DÍAS 1 PM a 11 PM'}
                <br />
                {language
                  ? 'BREAKFAST Friday - Monday, 7 AM to noon'
                  : 'DESAYUNO viernes a lunes, de 7 AM a mediodía'}
              </h6>
              <p style={{ fontWeight: 400 }}>
                {language
                  ? 'Located in the upstairs buffet area.'
                  : 'Ubicado en el área de bufé del segundo piso.'}
              </p>
              <p>
                {language
                  ? 'Stop by for breakfast, lunch, and dinner favorites at our second-floor location. Savor worldwide cuisine with our international plates, including Mexican, Asian, and Hispanic combinations. Take it to another level with flavorful executive plates perfect for steak and seafood lovers.'
                  : 'Visítanos para desayunar, almorzar y cenar en nuestra ubicación en el segundo piso. Saborea la cocina mundial con nuestros platos internacionales, que incluyen combinaciones mexicanas, asiáticas e hispanas. Llévalo a otro nivel con sabrosos platos ejecutivos perfectos para los amantes de la carne y los mariscos.'}
              </p>
              <Button
                target="_blank"
                href="https://mapa-media.s3.amazonaws.com/website/MaxsRoomMenu_Web.pdf"
                usetheme="contained"
              >
                {language ? 'MENU' : 'MENÚ'}
              </Button>
              {isRunning([2023, 6, 1], [2023, 7, 1]) ? (
                <img
                  style={{
                    width: '100%',
                    margin: '30px 0 10px 0',
                    boxShadow:
                      '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)',
                  }}
                  src={buffetPromo}
                  alt="Buffet announcement"
                />
              ) : null}
              {isRunning([2023, 7, 1]) ? (
                <div>
                  <h3 style={{ fontWeight: '400' }}>
                    {language ? 'Buffet' : 'Bufé'}
                  </h3>
                  <p>
                    {language
                      ? 'Back by popular demand, the Miccosukee Casino & Resort buffet offers a wide selection of Brunch and Dinner favorites for $29.99. Indulge in delectable dishes, drinks, and desserts in a comfortable and casual culinary experience the whole family will enjoy.'
                      : 'De regreso por demanda popular, el bufé de Miccosukee Casino & Resort ofrece una amplia selección de los platos favoritos de Brunch y Cena por $29.99. Te deleitarás con deliciosos platos, bebidas y postres en una experiencia culinaria cómoda e informal que disfrutará toda la familia.'}
                  </p>
                  <h4
                    style={{
                      textTransform: 'uppercase',
                      fontWeight: '400',
                      fontSize: '14px',
                      marginTop: '20px',
                    }}
                  >
                    {language ? 'BUFFET DETAILS' : 'detalles del buffet'}
                  </h4>
                  {language ? (
                    <p>
                      $29.99 plus tax/ svc charge
                      <br />
                      Open Daily
                      <br />
                      Brunch
                      <br />
                      7 AM - 2 PM
                      <br />
                      Dinner
                      <br />
                      Sunday - Wednesday, 4 PM - 10 PM
                      <br />
                      Thursday - Saturday, 4 PM - 11 PM
                      <br />
                      Located on the second floor of the Resort.
                    </p>
                  ) : (
                    <p>
                      $29.99 más impuestos/cargo de servicio Abierto todos los
                      días
                      <br />
                      Brunch
                      <br />
                      7 AM – 2 PM
                      <br />
                      Cena
                      <br />
                      domingo a miércoles, 4 PM a 10 PM
                      <br />
                      jueves a sábado, 4 PM a 11 PM
                      <br />
                      Ubicado en el segundo piso del hotel.
                    </p>
                  )}
                </div>
              ) : null}
            </div>
          </GridItem>
          <GridItem md={5}>
            {/*
            <div className={classes.imageArea}>
              <CustomImageSlider images={imageObj} />
            </div>
            */}
          </GridItem>
        </GridContainer>
      </RaisedContainer>
    </React.Fragment>
  );
};

export default Maxs;
