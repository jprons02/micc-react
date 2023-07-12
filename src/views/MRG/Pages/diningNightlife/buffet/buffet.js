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
import FoodAndBevDisclaimer from '../disclaimer/disclaimer';

// Images
import bgImage from 'assets/media/img/mrg/dining/buffet/buffet-banner.jpeg';
import image1 from 'assets/media/img/mrg/dining/deli/deli-01.jpg';
//import buffetPromo from 'assets/media/img/mrg/dining/maxs/Buffet_banner.jpeg';
import buffetPromo from 'assets/media/img/mrg/dining/buffet/Buffet-ReopeningA.jpg';

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

const Buffet = () => {
  const language = useLanguage();
  const classes = useStyles();

  return (
    <React.Fragment>
      <HeroSection sliderContent={sliderContent} />
      <RaisedContainer>
        <GridContainer>
          <GridItem md={7}>
            <div className={classes.leftTextArea}>
              {isRunning([2023, 7, 1]) ? (
                <React.Fragment>
                  <h2>Buffet</h2>
                  <h6>
                    {language
                      ? 'OPEN 7 DAYS A WEEK'
                      : 'ABIERTO LOS 7 DÍAS DE LA SEMANA'}
                    <br />
                    BRUNCH: {language ? '7 AM - 2PM' : '7 AM - 2PM'}
                    <br />
                    DINNER:
                    <br />
                    {language
                      ? 'SUNDAY - WEDNESDAY, 4 PM - 10 PM'
                      : 'domingo a miércoles, 4 PM - 10 PM'}
                    <br />
                    {language
                      ? 'THURSDAY - SATURDAY, 4 PM - 11 PM'
                      : 'jueves a sábado, 4 PM - 11 PM'}
                  </h6>
                  <p style={{ fontWeight: 400 }}>
                    {language
                      ? 'Located on the second floor of the Resort. $29.99 plus tax/ svc charge.'
                      : 'Ubicado en el segundo piso del hotel. $29.99 más impuestos/cargo de servicio Abierto todos los días'}
                  </p>
                  <p>
                    {language
                      ? 'Back by popular demand, the Miccosukee Casino & Resort buffet offers a wide selection of Brunch and Dinner favorites for $29.99. Indulge in delectable dishes, drinks, and desserts in a comfortable and casual culinary experience the whole family will enjoy.'
                      : 'De regreso por demanda popular, el bufé de Miccosukee Casino & Resort ofrece una amplia selección de los platos favoritos de Brunch y Cena por $29.99. Te deleitarás con deliciosos platos, bebidas y postres en una experiencia culinaria cómoda e informal que disfrutará toda la familia.'}
                  </p>
                </React.Fragment>
              ) : null}
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
        <FoodAndBevDisclaimer />
      </RaisedContainer>
    </React.Fragment>
  );
};

export default Buffet;
